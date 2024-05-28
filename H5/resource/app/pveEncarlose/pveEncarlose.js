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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i() {
            return t.call(this) || this
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            e.PveEncarloseManager.getInstance().bind(this),
            this.showPanel(1)
        },
        i.prototype.showPanel = function(t) {
            switch (this.hidePanel(), t) {
            case 1:
                this._curPanel = new e.PveEncarloseMain;
                break;
            case 2:
                this._curPanel = new e.PveEncarloseJustinView;
                break;
            case 3:
                this._curPanel = new e.PveEncarloseEvoView;
                break;
            default:
                return
            }
            this.addChild(this._curPanel)
        },
        i.prototype.hidePanel = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel))
        },
        i.prototype.startTask = function(e, t) {
            var i = egret.getDefinitionByName("pveEncarlose.PveEncarloseTask" + e);
            this._taskPanel = new i(t),
            this.addChild(this._taskPanel)
        },
        i.prototype.stopTask = function() {
            this._taskPanel && (this._taskPanel.destroy(), this._taskPanel.parent && this._taskPanel.parent.removeChild(this._taskPanel)),
            this._curPanel && this._curPanel.updateData()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.hidePanel(),
            e.PveEncarloseManager.getInstance().destroy()
        },
        i
    } (BaseModule);
    e.PveEncarlose = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarlose")
} (pveEncarlose || (pveEncarlose = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
pveEncarlose; !
function(e) {
    var t = function() {
        function e() {}
        return e.getInstance = function() {
            return this._instance || (this._instance = new e)
        },
        e.prototype.bind = function(e) {
            this._main = e
        },
        e.prototype.changePanel = function(e) {
            this._main.showPanel(e)
        },
        e.prototype.startTask = function(e, t) {
            this._main.startTask(e, t)
        },
        e.prototype.setTaskStep = function(e) {
            egret.localStorage.setItem("pve_encarlose_task_" + MainManager.actorID, e + "")
        },
        e.prototype.clearTaskStep = function() {
            egret.localStorage.setItem("pve_encarlose_task_" + MainManager.actorID, "")
        },
        e.prototype.getTaskStep = function() {
            return~~egret.localStorage.getItem("pve_encarlose_task_" + MainManager.actorID)
        },
        e.prototype.stopTask = function() {
            this._main.stopTask()
        },
        e.prototype.destroy = function() {
            this._main = null
        },
        e
    } ();
    e.PveEncarloseManager = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseManager")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._inited = !1,
            t.skinName = PveEncarloseEvoViewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.txt_intro_0.textFlow = [{
                text: "战胜可得",
                style: {
                    textColor: 11391896
                }
            },
            {
                text: "10点",
                style: {
                    textColor: 16728365
                }
            },
            {
                text: "狂热能量",
                style: {
                    textColor: 11391896
                }
            }],
            this.txt_intro_1.textFlow = [{
                text: "战胜可得",
                style: {
                    textColor: 11391896
                }
            },
            {
                text: "15点",
                style: {
                    textColor: 16728365
                }
            },
            {
                text: "狂热能量",
                style: {
                    textColor: 11391896
                }
            }],
            this.txt_intro_2.textFlow = [{
                text: "战胜可得",
                style: {
                    textColor: 11391896
                }
            },
            {
                text: "25点",
                style: {
                    textColor: 16728365
                }
            },
            {
                text: "狂热能量",
                style: {
                    textColor: 11391896
                }
            }],
            this.addEvent(),
            this.updateData(),
            this.initOldPveBtnClose(26, this, "pve_encarlose_evo_view_title_png", this.onClose, this),
            this.adaptRightContent(this.grp_getEnegy),
            this.adaptRightContent(this.grp_final),
            this.adaptRightContent(this.grp_punishment),
            this.adaptRightContent(this.grp_fanatical),
            this.grpBack.btnHelp.x = 350
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFast_0,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1715947,
                        productID: 252733
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(252733, i,
                        function() {
                            SocketConnection.sendByQueue(46320, [53, i],
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFast_1,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1715948,
                        productID: 252734
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(252734, i,
                        function() {
                            SocketConnection.sendByQueue(46320, [54, i],
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnBalance,
            function() {
                var t = 50 - e._enegyIn_0,
                i = 50 - e._enegyIn_1;
                return 0 == t && 0 == i ? void Alarm.show("您已经平衡了能量，请开始进化吧！") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252735, 1,
                    function() {
                        SocketConnection.sendByQueue(46320, [52, 0],
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnOne,
            function() {
                var t = 50 - e._enegyIn_0,
                i = 50 - e._enegyIn_1;
                return 0 == t && 0 == i ? void Alarm.show("您已经集齐了所需能量！") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252733, t,
                    function() {
                        SocketConnection.sendByQueue(46320, [53, t],
                        function() {
                            KTool.buyProductByCallback(252734, i,
                            function() {
                                SocketConnection.sendByQueue(46320, [54, i],
                                function() {
                                    e.updateData()
                                })
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnIn,
            function() {
                return e._enegyWide_0 < 50 || e._enegyWide_1 < 50 ? void Alarm.show("需要获得50点惩戒能量和50点狂热能量之后才能注入哦！") : void SocketConnection.sendByQueue(46320, [50, 0],
                function() {
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                50 != e._enegyIn_0 || 50 != e._enegyIn_1 ? Alarm.show("需要将惩戒能量和狂热能量平衡为50才能进化哦！") : PetManager.isDefaultPet(123) ? SocketConnection.sendByQueue(46320, [51, 0],
                function() {
                    Alarm.show("进化成功",
                    function() {
                        e.onClose()
                    })
                }) : PetManager.isDefaultPet(122) ? Alarm.show("请先提升精灵达尔等级，使之进化为希露达形态") : Alarm.show("请先将希路达设为首发！",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            ImageButtonUtil.add(this.btnGo_0,
            function() {
                e.showPop(0)
            },
            this),
            ImageButtonUtil.add(this.btnGo_1,
            function() {
                e.showPop(1)
            },
            this),
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePop, this);
            for (var t = function(t) {
                2 > t && ImageButtonUtil.add(i["btnFightFinal_" + t],
                function() {
                    return e._fightTimes ? void FightManager.fightNoMapBoss("", 12049 + t) : void Alarm.show("挑战次数不足")
                },
                i),
                ImageButtonUtil.add(i["btnFight_" + t],
                function() {
                    3 > t ? SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [724 + t, 0, 0, 0, 0, 0]) : FightManager.fightNoMapBoss("", 12046 + t - 3)
                },
                i)
            },
            i = this, n = 0; 6 > n; n++) t(n);
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.onClose(),
                ModuleManager.showModuleByID(83)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this);
            for (var n = 0; 3 > n; n++) ImageButtonUtil.add(this["imgBtn_pet_" + n],
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this["imgBtn_cure_" + n],
            function() {
                PetManager.cureAll()
            },
            this)
        },
        t.prototype.buyAlarm = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([104122, 104123, 104124, 104125, 104126, 16685],
            function(t) {
                e._inited && e.addEnegy(t),
                e._inited = !0,
                e._enegyWide_0 = t[0],
                e._enegyWide_1 = t[1],
                e._enegyIn_0 = t[2],
                e._enegyIn_1 = t[3],
                e._fightTimes = t[4],
                e._dailyState = t[5],
                KTool.getBitSet([9712],
                function(t) {
                    e._petState = t[0],
                    e.updateView()
                })
            })
        },
        t.prototype.addEnegy = function(e) {
            if (this._fightTimes) if (50 == e[2] && 50 == e[3]) Alarm.show("恭喜你！能量已达到平衡，你现在可以将希路达进化为英卡洛斯了！");
            else if (e[4]) if (e[2] > this._enegyIn_0) {
                var t = e[2] - this._enegyIn_0;
                Alarm.show("你增加了" + t + "点惩戒能量，降低了" + t + "点狂热能量！请继续尝试平衡能量")
            } else {
                var t = e[3] - this._enegyIn_1;
                Alarm.show("你增加了" + t + "点狂热能量，降低了" + t + "点惩戒能量！请继续尝试平衡能量")
            } else Alarm.show("很遗憾，两种能量没有达到平衡，这次注入能量失败了，请重新开始！");
            else {
                if (e[4]) return;
                e[0] > this._enegyWide_0 && Alarm.show("获得" + (e[0] - this._enegyWide_0) + "点惩戒能量"),
                e[1] > this._enegyWide_1 && Alarm.show("获得" + (e[1] - this._enegyWide_1) + "点狂热能量")
            }
        },
        t.prototype.updateView = function() {
            var e = 50 == this._enegyIn_0 && 50 == this._enegyIn_1;
            this.btnIn.visible = !this._fightTimes && !e,
            this.grp_getEnegy.visible = !(this._fightTimes || e || this.grp_punishment.visible || this.grp_fanatical.visible),
            this.btnEvo.visible = this.btnBalance.visible = this.grp_final.visible = !!this._fightTimes || e,
            this.txt_fightTimes.text = "今日剩余挑战次数：" + this._fightTimes;
            for (var t = 0; 6 > t; t++) this["flag_done_" + t].visible = !!KTool.getBit(this._dailyState, t + 1),
            this["btnFight_" + t].visible = !KTool.getBit(this._dailyState, t + 1);
            this._fightTimes || e ? (this.pb_0.value = this.pb_1.value = 50, this.txt_enegy_0.text = this._enegyIn_0 + "", this.txt_enegy_1.text = this._enegyIn_1 + "") : (this.pb_0.value = this._enegyWide_0, this.pb_1.value = this._enegyWide_1, this.txt_enegy_0.text = this._enegyWide_0 + "", this.txt_enegy_1.text = this._enegyWide_1 + ""),
            DisplayUtil.setEnabled(this.btnBalance, 0 == this._petState && !e, 0 != this._petState || e),
            DisplayUtil.setEnabled(this.btnEvo, 0 == this._petState, 0 != this._petState),
            DisplayUtil.setEnabled(this.btnFightFinal_0, !e, e),
            DisplayUtil.setEnabled(this.btnFightFinal_1, !e, e)
        },
        t.prototype.showPop = function(e) {
            this.grp_getEnegy.visible = !1;
            var t = 639;
            if (this._rect.visible = !0, 0 == e) var i = this.grp_punishment;
            else var i = this.grp_fanatical;
            i.right = -t,
            i.visible = !0,
            egret.Tween.get(i).to({
                right: 0
            },
            250)
        },
        t.prototype.hidePop = function() {
            var e = this,
            t = 639;
            if (this.grp_punishment.visible) var i = this.grp_punishment;
            else var i = this.grp_fanatical;
            egret.Tween.get(i).to({
                right: -t
            },
            250).call(function() {
                e._rect.visible = !1,
                i.visible = !1,
                e.grp_getEnegy.visible = !0
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePop, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        t
    } (BaseModule);
    e.PveEncarloseEvoView = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseEvoView")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.flagPics = [],
            e._isDraw = !1,
            e._drawIndex = 1,
            e._drawCount = 0,
            e.skinName = PveEncarloseJustinViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            e.PveEncarloseManager.getInstance().bind(this),
            this.addEvent(),
            this.updateData(),
            egret.Tween.get(this.bubble, {
                loop: !0
            }).wait(5e3).to({
                alpha: 0
            },
            500).call(function() {
                i.txt_bubble_0.visible = !i.txt_bubble_0.visible,
                i.txt_bubble_1.visible = !i.txt_bubble_1.visible
            }).to({
                alpha: 1
            },
            500),
            this.initOldPveBtnClose(25, this, "", this.onClose, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([7092, 7093, 15949],
            function(t) {
                e._extraTimes = t[0],
                e._signTimes = t[1],
                e._curTask = t[2],
                KTool.getBitSet([1000385, 1000386],
                function(t) {
                    e._signFlag = t[0],
                    e._taskFlag = t[1],
                    e.updateView(),
                    e._isDraw && (e._isDraw = !1, e.drawTask())
                })
            })
        },
        i.prototype.updateView = function() {
            this.flag_tomorrow.visible = !!this._taskFlag,
            this.btnDraw.visible = !this._taskFlag,
            this._curTask ? this.txt_draw.text = "继续任务": this.txt_draw.text = "抽取每日任务",
            this.txt_sign.visible = !!this._signFlag,
            this.txt_signFree.visible = !this._signFlag,
            this.txt_leftTimes.text = "剩余任务签到次数：" + this._extraTimes,
            this._signTimes >= 10 && DisplayUtil.setEnabled(this.btnSign, !1),
            DisplayUtil.setEnabled(this.btnPlus, this._extraTimes < 1),
            this.showSignItem()
        },
        i.prototype.showSignItem = function() {
            for (var e = 0; e < this.flagPics.length; e++) this.flagPics[e] && this.flagPics[e].parent && this.flagPics[e].parent.removeChild(this.flagPics[e]);
            this.img_selected.parent && this.img_selected.parent.removeChild(this.img_selected);
            for (var e = 0; e < this._signTimes; e++) this.flagPics[e] || (this.flagPics[e] = new eui.Image("pve_encarlose_justin_view_img_signed_png")),
            this.flagPics[e].x = this["item_" + e].x,
            this.flagPics[e].y = this["item_" + e].y,
            this.signItem.addChild(this.flagPics[e]);
            this._signTimes < 10 && (this.img_selected.x = this["item_" + this._signTimes].x - 7, this.img_selected.y = this["item_" + this._signTimes].y - 7, this.signItem.addChild(this.img_selected))
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnPlus,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252732, 1,
                    function() {
                        KTool.doExchange(11211, 1,
                        function() {
                            t.updateData()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSign,
            function() { ! t._signFlag || t._extraTimes ? SocketConnection.sendByQueue(43284, [11, 0],
                function() {
                    t.updateData()
                }) : t._taskFlag ? BubblerManager.getInstance().showText("免费次数和任务次数均已用完，请明天再来！") : BubblerManager.getInstance().showText("签到次数已用完，可以前往完成今日任务获得签到次数哦！")
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                if (t._curTask) {
                    var i = e.PveEncarloseManager.getInstance().getTaskStep();
                    e.PveEncarloseManager.getInstance().startTask(t._curTask, i)
                } else t._isDraw = !0,
                SocketConnection.sendByQueue(43284, [10, 0],
                function() {
                    e.PveEncarloseManager.getInstance().clearTaskStep(),
                    t.updateData()
                })
            },
            this)
        },
        i.prototype.drawTask = function() {
            this._rect.visible = this.pop.visible = !0,
            this.showDrawIndex(),
            this._interval = egret.setInterval(this.showDrawIndex, this, 100)
        },
        i.prototype.showDrawIndex = function() {
            for (var t = this,
            i = 1; 5 > i; i++) this["mask_" + i].visible = this._drawIndex != i,
            this["light_" + i].visible = this._drawIndex == i;
            return this._drawCount >= 15 && this._drawIndex == this._curTask ? (egret.clearInterval(this._interval), void egret.setTimeout(function() {
                t._rect.visible = t.pop.visible = !1,
                e.PveEncarloseManager.getInstance().startTask(t._curTask)
            },
            this, 500)) : (this._drawCount++, this._drawIndex++, void(this._drawIndex >= 5 && (this._drawIndex = 1)))
        },
        i.prototype.startTask = function(e, t) {
            var i = egret.getDefinitionByName("pveEncarlose.PveEncarloseTask" + e);
            this._taskPanel = new i(t),
            this.addChild(this._taskPanel)
        },
        i.prototype.stopTask = function() {
            this._taskPanel && (this._taskPanel.destroy(), this._taskPanel.parent && this._taskPanel.parent.removeChild(this._taskPanel)),
            this.updateData()
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.bubble),
            ImageButtonUtil.removeAll(this),
            e.PveEncarloseManager.getInstance().destroy()
        },
        i
    } (BaseModule);
    e.PveEncarloseJustinView = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseJustinView")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = PveEncarloseSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateView(),
            this.initOldPveBtnClose(0, this, "",
            function() {
                ModuleManager.hideModule("pveEncarlose")
            },
            this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnInfo_0,
            function() {
                PetManager.showPetIntroduce(122)
            },
            this),
            ImageButtonUtil.add(this.btnInfo_1,
            function() {
                PetManager.showPetIntroduce(124)
            },
            this),
            ImageButtonUtil.add(this.btnGo_0,
            function() {
                StatLogger.log("0402版本系统功能", "英卡洛斯&达尔挑战副本", "点击【前往获得】达尔"),
                e.PveEncarloseManager.getInstance().changePanel(2)
            },
            this),
            ImageButtonUtil.add(this.btnGo_1,
            function() {
                StatLogger.log("0402版本系统功能", "英卡洛斯&达尔挑战副本", "点击【前往获得】英卡洛斯"),
                e.PveEncarloseManager.getInstance().changePanel(3)
            },
            this)
        },
        i.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([7093],
            function(t) {
                t[0] >= 10 ? (e.flag_got_0.visible = !0, DisplayUtil.setEnabled(e.btnGo_0, !1)) : (e.flag_got_0.visible = !1, DisplayUtil.setEnabled(e.btnGo_0, !0))
            }),
            KTool.getBitSet([9712],
            function(t) {
                t[0] ? (e.flag_got_1.visible = !0, DisplayUtil.setEnabled(e.btnGo_1, !1)) : (e.flag_got_1.visible = !1, DisplayUtil.setEnabled(e.btnGo_1, !0))
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    e.PveEncarloseMain = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseMain")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._curStep = 0,
            i.skinName = PveEncarloseTaskSkin,
            i._curStep = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(27, this, "pve_encarlose_task_title_4_png",
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this);
            for (var i = 1; 5 > i; i++) this["bg_" + i].visible = 1 == i,
            this["pet_" + i].visible = 1 == i;
            this.addEvent(),
            this._curStep ? (this.light_1.visible = !1, this.onStep()) : (this.light_1.visible = !0, egret.Tween.get(this.light_1, {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500))
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(27),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            this.pet_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.addEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.addEventListener("encarloseTask1Failed", this.taskFailed, this),
            EventManager.addEventListener("encarloseTask1Succeed", this.taskSucceed, this)
        },
        i.prototype.taskFailed = function() {
            var t = this;
            Alarm.show("你的话语激怒了白虎，再试试吧！",
            function() {
                t._curStep = 0,
                e.PveEncarloseManager.getInstance().clearTaskStep()
            })
        },
        i.prototype.taskSucceed = function() {
            SocketConnection.sendByQueue(43284, [12, 1],
            function() {
                Alarm.show("恭喜你成功使白虎振作起来！",
                function() {
                    e.PveEncarloseManager.getInstance().stopTask()
                })
            })
        },
        i.prototype.onStep = function() {
            egret.Tween.removeTweens(this.light_1),
            this.light_1.visible = !1,
            this._curStep ? npcDialog.showDialogIds(this._curStep,
            function() {},
            this) : npcDialog.showDialogIds(5,
            function() {},
            this)
        },
        i.prototype.dialogEvent = function(t) {
            var i = t.data;
            e.PveEncarloseManager.getInstance().setTaskStep(i.groupId),
            this._curStep = i.groupId
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.light_1),
            ImageButtonUtil.removeAll(this),
            this.pet_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.removeEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.removeEventListener("encarloseTask1Failed", this.taskFailed, this),
            EventManager.removeEventListener("encarloseTask1Succeed", this.taskSucceed, this)
        },
        i
    } (BaseModule);
    e.PveEncarloseTask1 = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseTask1")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._curStep = 0,
            i.skinName = PveEncarloseTaskSkin,
            i._curStep = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(27, this, "pve_encarlose_task_title_3_png",
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this);
            for (var i = 1; 5 > i; i++) this["bg_" + i].visible = 2 == i,
            this["pet_" + i].visible = 2 == i;
            this.candle.visible = this.candle_off.visible = !0,
            this.candle_on.visible = !1,
            this.candle.touchEnabled = this.candle.touchChildren = !1,
            this.addEvent(),
            this._curStep ? (this.light_2.visible = !1, this.onStep()) : (this.light_2.visible = !0, egret.Tween.get(this.light_2, {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500))
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(27),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            this.pet_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.addEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.addEventListener("encarloseTask2Succeed", this.taskSucceed, this),
            this.candle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCandle, this)
        },
        i.prototype.taskSucceed = function() {
            this.candle.touchEnabled = !0
        },
        i.prototype.onTouchCandle = function() {
            this._interval || (this.time.x = this.candle.x, this.time.visible = !0, this.txt_time.text = "00:30", this._time = 30, this._interval = egret.setInterval(this.showTime, this, 1e3))
        },
        i.prototype.showTime = function() {
            return this._time--,
            this._time <= 0 ? (egret.clearInterval(this._interval), this.candle_off.visible = !1, this.candle_on.visible = !0, void SocketConnection.sendByQueue(43284, [12, 2],
            function() {
                Alarm.show("恭喜你完成玄武祈福！",
                function() {
                    e.PveEncarloseManager.getInstance().stopTask()
                })
            })) : void(this.txt_time.text = "00:" + core.gameUtil.addLeadingZero(this._time))
        },
        i.prototype.onStep = function() {
            egret.Tween.removeTweens(this.light_2),
            this.light_2.visible = !1,
            this._curStep ? npcDialog.showDialogIds(this._curStep,
            function() {},
            this) : npcDialog.showDialogIds(14,
            function() {},
            this)
        },
        i.prototype.dialogEvent = function(t) {
            var i = t.data;
            e.PveEncarloseManager.getInstance().setTaskStep(i.groupId),
            this._curStep = i.groupId
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.light_2),
            ImageButtonUtil.removeAll(this),
            egret.clearInterval(this._interval),
            this.pet_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.removeEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.removeEventListener("encarloseTask2Succeed", this.taskSucceed, this),
            this.candle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCandle, this)
        },
        i
    } (BaseModule);
    e.PveEncarloseTask2 = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseTask2")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._curStep = 0,
            i.skinName = PveEncarloseTaskSkin,
            i._curStep = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(27, this, "pve_encarlose_task_title_1_png",
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this);
            for (var i = 1; 5 > i; i++) this["bg_" + i].visible = 3 == i,
            this["pet_" + i].visible = 3 == i,
            this["title_" + i].visible = 3 == i;
            this.addEvent(),
            this._curStep ? (this.light_3.visible = !1, this.onStep()) : (this.light_3.visible = !0, egret.Tween.get(this.light_3, {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500))
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(27),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            this.pet_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.addEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.addEventListener("encarloseTask3Failed", this.taskFailed, this),
            EventManager.addEventListener("encarloseTask3Succeed", this.taskSucceed, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.taskFailed = function() {
            var t = this;
            Alarm.show("只有传火才能完成任务，请选择传火！",
            function() {
                t._curStep = 0,
                e.PveEncarloseManager.getInstance().clearTaskStep()
            })
        },
        i.prototype.taskSucceed = function() {
            FightManager.fightNoMapBoss("", 12045)
        },
        i.prototype.onFightOver = function(t) {
            FightManager.isWin ? Alarm.show("恭喜你击败了只出1分力的朱雀，将为朱雀传火！",
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            }) : (this._curStep = 0, e.PveEncarloseManager.getInstance().clearTaskStep())
        },
        i.prototype.onStep = function() {
            egret.Tween.removeTweens(this.light_3),
            this.light_3.visible = !1,
            this._curStep ? npcDialog.showDialogIds(this._curStep,
            function() {},
            this) : npcDialog.showDialogIds(17,
            function() {},
            this)
        },
        i.prototype.dialogEvent = function(t) {
            var i = t.data;
            e.PveEncarloseManager.getInstance().setTaskStep(i.groupId),
            this._curStep = i.groupId
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.light_3),
            ImageButtonUtil.removeAll(this),
            this.pet_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.removeEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.removeEventListener("encarloseTask3Failed", this.taskFailed, this),
            EventManager.removeEventListener("encarloseTask3Succeed", this.taskSucceed, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i
    } (BaseModule);
    e.PveEncarloseTask3 = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseTask3")
} (pveEncarlose || (pveEncarlose = {}));
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
pveEncarlose; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._curStep = 0,
            i._itemId = 1716114,
            i._final = !1,
            i.skinName = PveEncarloseTaskSkin,
            i._curStep = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(27, this, "pve_encarlose_task_title_2_png",
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this);
            for (var i = 1; 5 > i; i++) this["bg_" + i].visible = 4 == i,
            this["pet_" + i].visible = 4 == i,
            this["title_" + i].visible = 4 == i;
            this.addEvent(),
            this._curStep ? (this.light_4.visible = !1, this.onStep()) : (this.light_4.visible = !0, egret.Tween.get(this.light_4, {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500))
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.PveEncarloseManager.getInstance().stopTask()
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(27),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            this.pet_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.addEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.addEventListener("encarloseTask4Succeed", this.taskSucceed, this);
            for (var t = 0; 3 > t; t++) this["gem_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchGem, this)
        },
        i.prototype.taskSucceed = function() {
            this.gem.visible = !0,
            this.showGem()
        },
        i.prototype.showGem = function() {
            if (this.num.visible = !0, this.txt_itemNum.text = ItemManager.getNumByID(this._itemId) + "", ItemManager.getNumByID(this._itemId) >= 10) return Alarm.show("已收集足够的水源灵石，可以为青龙疗伤了！"),
            this.light_4.visible = !0,
            egret.Tween.get(this.light_4, {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500),
            this.gem.visible = !1,
            this.time.visible = !1,
            void(this._final = !0);
            this.ran = Math.floor(3 * Math.random());
            for (var e = 0; 3 > e; e++) this["gem_" + e].visible = e == this.ran;
            this.time.x = this.gem.localToGlobal(this["gem_" + this.ran].x, this["gem_" + this.ran].y).x,
            this.time.y = this.gem.localToGlobal(this["gem_" + this.ran].x, this["gem_" + this.ran].y).y - 60,
            this.time.visible = !1,
            egret.Tween.get(this["gem_" + this.ran], {
                loop: !0
            }).to({
                alpha: 0
            },
            500).to({
                alpha: 1
            },
            500)
        },
        i.prototype.onTouchGem = function() {
            this._interval || (egret.Tween.removeTweens(this["gem_" + this.ran]), this["gem_" + this.ran].alpha = 1, this._time = 10, this.txt_time.text = "00:10", this.time.visible = !0, this._interval = egret.setInterval(this.showTime, this, 1e3))
        },
        i.prototype.showTime = function() {
            var e = this;
            return this._time--,
            this._time <= 0 ? (egret.clearInterval(this._interval), this._interval = null, void SocketConnection.sendByQueue(43284, [13, 0],
            function() {
                e.showGem()
            })) : void(this.txt_time.text = "00:" + core.gameUtil.addLeadingZero(this._time))
        },
        i.prototype.onStep = function() {
            return egret.Tween.removeTweens(this.light_4),
            this.light_4.visible = !1,
            this._final ? void SocketConnection.sendByQueue(43284, [12, 4],
            function() {
                Alarm.show("恭喜你成功为青龙疗伤，青龙的伤势有所好转了！"),
                e.PveEncarloseManager.getInstance().stopTask()
            }) : void(this._curStep ? npcDialog.showDialogIds(this._curStep,
            function() {},
            this) : npcDialog.showDialogIds(22,
            function() {},
            this))
        },
        i.prototype.dialogEvent = function(t) {
            var i = t.data;
            e.PveEncarloseManager.getInstance().setTaskStep(i.groupId),
            this._curStep = i.groupId
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            egret.Tween.removeTweens(this.light_4),
            this.ran && egret.Tween.removeTweens(this["gem_" + this.ran]),
            ImageButtonUtil.removeAll(this),
            this.pet_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStep, this),
            EventManager.removeEventListener("npcDialog_showed", this.dialogEvent, this),
            EventManager.removeEventListener("encarloseTask4Succeed", this.taskSucceed, this);
            for (var e = 0; 3 > e; e++) this["gem_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchGem, this)
        },
        i
    } (BaseModule);
    e.PveEncarloseTask4 = t,
    __reflect(t.prototype, "pveEncarlose.PveEncarloseTask4")
} (pveEncarlose || (pveEncarlose = {}));
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
generateEUI.paths["resource/eui_skins/PveEncarloseEvoViewSkin.exml"] = window.PveEncarloseEvoViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnIn", "btnOne", "btnEvo", "btnBalance", "txt_enegy_1", "txt_enegy_0", "pb_1", "pb_0", "btnFast_1", "btnGo_1", "btnFast_0", "btnGo_0", "btnGo", "grp_getEnegy", "btnFightFinal_1", "btnFightFinal_0", "imgBtn_pet_2", "imgBtn_cure_2", "txt_fightTimes", "grp_final", "_rect", "imgBtn_pet_0", "imgBtn_cure_0", "btnFight_2", "flag_done_2", "btnFight_1", "flag_done_1", "btnFight_0", "flag_done_0", "grp_punishment", "imgBtn_pet_1", "imgBtn_cure_1", "txt_intro_2", "btnFight_5", "flag_done_5", "txt_intro_1", "btnFight_4", "flag_done_4", "txt_intro_0", "btnFight_3", "flag_done_3", "grp_fanatical"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnIn_i(), this.btnOne_i(), this.btnEvo_i(), this.btnBalance_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.txt_enegy_1_i(), this._Image6_i(), this.txt_enegy_0_i(), this._Group1_i(), this.grp_getEnegy_i(), this.grp_final_i(), this._rect_i(), this.grp_punishment_i(), this.grp_fanatical_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 281,
            e.source = "pve_encarlose_evo_view_img_bar_1_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 281,
            e.source = "pve_encarlose_evo_view_img_bar_0_png",
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_encarlose_evo_view_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 611,
        e.source = "pve_encarlose_evo_view_img_tl_png",
        e.width = 815,
        e.x = 0,
        e.y = 29,
        e
    },
    _.btnIn_i = function() {
        var e = new eui.Image;
        return this.btnIn = e,
        e.height = 77,
        e.source = "pve_encarlose_evo_view_btnIn_png",
        e.width = 275,
        e.x = 253,
        e.y = 510,
        e
    },
    _.btnOne_i = function() {
        var e = new eui.Image;
        return this.btnOne = e,
        e.height = 77,
        e.source = "pve_encarlose_evo_view_btnOne_png",
        e.visible = !1,
        e.width = 275,
        e.x = 379,
        e.y = 510,
        e
    },
    _.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.height = 77,
        e.source = "pve_encarlose_evo_view_btnEvo_png",
        e.visible = !1,
        e.width = 275,
        e.x = 127,
        e.y = 510,
        e
    },
    _.btnBalance_i = function() {
        var e = new eui.Image;
        return this.btnBalance = e,
        e.height = 77,
        e.source = "pve_encarlose_evo_view_btnBalance_png",
        e.visible = !1,
        e.width = 275,
        e.x = 379,
        e.y = 510,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 95,
        e.source = "pve_encarlose_evo_view_powerbg_1_png",
        e.width = 293,
        e.x = 435,
        e.y = 388,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 95,
        e.source = "pve_encarlose_evo_view_powerbg_0_png",
        e.width = 292,
        e.x = 23,
        e.y = 388,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 45,
        e.source = "pve_encarlose_evo_view_img_enegy_1_png",
        e.width = 138,
        e.x = 532,
        e.y = 390,
        e
    },
    _.txt_enegy_1_i = function() {
        var e = new eui.Label;
        return this.txt_enegy_1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 38,
        e.text = "99",
        e.textColor = 16728108,
        e.touchEnabled = !1,
        e.x = 537,
        e.y = 439,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 45,
        e.source = "pve_encarlose_evo_view_img_enegy_0_png",
        e.width = 137,
        e.x = 80,
        e.y = 390,
        e
    },
    _.txt_enegy_0_i = function() {
        var e = new eui.Label;
        return this.txt_enegy_0 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 38,
        e.text = "99",
        e.textColor = 15785273,
        e.touchEnabled = !1,
        e.x = 149,
        e.y = 439,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.touchChildren = !1,
        e.touchEnabled = !1,
        e.touchThrough = !0,
        e.x = 14,
        e.y = 41,
        e.elementsContent = [this._Image7_i(), this.pb_1_i(), this.pb_0_i()],
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 516,
        e.source = "pve_encarlose_evo_view_img_base_png",
        e.width = 721,
        e.x = 0,
        e.y = 0,
        e
    },
    _.pb_1_i = function() {
        var e = new eui.ProgressBar;
        return this.pb_1 = e,
        e.direction = "btt",
        e.height = 281,
        e.maximum = 50,
        e.value = 0,
        e.width = 233,
        e.x = 361,
        e.y = 109,
        e.skinName = i,
        e
    },
    _.pb_0_i = function() {
        var e = new eui.ProgressBar;
        return this.pb_0 = e,
        e.direction = "btt",
        e.height = 281,
        e.maximum = 50,
        e.value = 0,
        e.width = 233,
        e.x = 127,
        e.y = 109,
        e.skinName = n,
        e
    },
    _.grp_getEnegy_i = function() {
        var e = new eui.Group;
        return this.grp_getEnegy = e,
        e.height = 609,
        e.right = 0,
        e.width = 393,
        e.y = 15,
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this.btnFast_1_i(), this.btnGo_1_i()],
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "pve_encarlose_evo_view_img_kr_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.btnFast_1_i = function() {
        var e = new eui.Image;
        return this.btnFast_1 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFast_png",
        e.width = 120,
        e.x = 222,
        e.y = 185,
        e
    },
    _.btnGo_1_i = function() {
        var e = new eui.Image;
        return this.btnGo_1 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnGo_png",
        e.width = 120,
        e.x = 222,
        e.y = 131,
        e
    },
    _._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 1,
        e.y = 234,
        e.elementsContent = [this._Image9_i(), this.btnFast_0_i(), this.btnGo_0_i()],
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "pve_encarlose_evo_view_img_cj_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    _.btnFast_0_i = function() {
        var e = new eui.Image;
        return this.btnFast_0 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFast_png",
        e.width = 120,
        e.x = 224,
        e.y = 184,
        e
    },
    _.btnGo_0_i = function() {
        var e = new eui.Image;
        return this.btnGo_0 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnGo_png",
        e.width = 120,
        e.x = 224,
        e.y = 130,
        e
    },
    _._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 73,
        e.y = 509,
        e.elementsContent = [this.btnGo_i(), this._Image10_i(), this._Label1_i()],
        e
    },
    _.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.height = 100,
        e.source = "pve_encarlose_btnGo_png",
        e.width = 233,
        e.x = 87,
        e.y = 0,
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 10,
        e.source = "pve_encarlose_img_j_png",
        e.width = 39,
        e.x = 39,
        e.y = 81,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "进化必需",
        e.textColor = 7317860,
        e.x = 0,
        e.y = 56,
        e
    },
    _.grp_final_i = function() {
        var e = new eui.Group;
        return this.grp_final = e,
        e.right = 22,
        e.visible = !1,
        e.y = 48,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this.btnFightFinal_1_i(), this._Image13_i(), this._Label6_i(), this._Image14_i(), this._Image15_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this.btnFightFinal_0_i(), this._Image16_i(), this._Label11_i(), this.imgBtn_pet_2_i(), this.imgBtn_cure_2_i(), this.txt_fightTimes_i()],
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 231,
        e.source = "pve_encarlose_evo_view_rightbg_png",
        e.width = 360,
        e.x = 0,
        e.y = 252,
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 100,
        e.x = 47,
        e.y = 264,
        e
    },
    _._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战胜：",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 29,
        e.y = 372,
        e
    },
    _._Label3_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "各项能量不变",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 47,
        e.y = 455,
        e
    },
    _._Label4_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "自动增加1~9点狂热能量并降低对应\n惩戒能量",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 46,
        e.y = 391,
        e
    },
    _._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战败：",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 29,
        e.y = 435,
        e
    },
    _.btnFightFinal_1_i = function() {
        var e = new eui.Image;
        return this.btnFightFinal_1 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 189,
        e.y = 317,
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_head_3464_png",
        e.width = 100,
        e.x = 47,
        e.y = 264,
        e
    },
    _._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 24,
        e.text = "狂热水晶",
        e.textColor = 16728365,
        e.touchEnabled = !1,
        e.x = 202,
        e.y = 274,
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 231,
        e.source = "pve_encarlose_evo_view_rightbg_png",
        e.width = 360,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 100,
        e.x = 47,
        e.y = 12,
        e
    },
    _._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战胜：",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 29,
        e.y = 120,
        e
    },
    _._Label8_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "各项能量不变",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 47,
        e.y = 203,
        e
    },
    _._Label9_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "自动增加1~9点惩戒能量并降低对应\n狂热能量",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 46,
        e.y = 139,
        e
    },
    _._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战败：",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 29,
        e.y = 183,
        e
    },
    _.btnFightFinal_0_i = function() {
        var e = new eui.Image;
        return this.btnFightFinal_0 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 189,
        e.y = 65,
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_head_3456_png",
        e.width = 100,
        e.x = 47,
        e.y = 12,
        e
    },
    _._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 24,
        e.text = "惩戒水晶",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 202,
        e.y = 22,
        e
    },
    _.imgBtn_pet_2_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet_2 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_pet_png",
        e.width = 60,
        e.x = 219,
        e.y = 496,
        e
    },
    _.imgBtn_cure_2_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure_2 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_cure_png",
        e.width = 60,
        e.x = 291,
        e.y = 496,
        e
    },
    _.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：8",
        e.textColor = 13958091,
        e.touchEnabled = !1,
        e.x = 17,
        e.y = 518,
        e
    },
    _._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.fillAlpha = 0,
        e.height = 640,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp_punishment_i = function() {
        var e = new eui.Group;
        return this.grp_punishment = e,
        e.right = 0,
        e.visible = !1,
        e.y = 0,
        e.elementsContent = [this._Image17_i(), this._Image18_i(), this.imgBtn_pet_0_i(), this.imgBtn_cure_0_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this.btnFight_2_i(), this._Image19_i(), this._Image20_i(), this._Label16_i(), this._Image21_i(), this._Image22_i(), this._Label17_i(), this.flag_done_2_i(), this._Label18_i(), this._Label19_i(), this._Label20_i(), this._Label21_i(), this.btnFight_1_i(), this._Image23_i(), this._Image24_i(), this._Label22_i(), this._Image25_i(), this._Image26_i(), this._Label23_i(), this.flag_done_1_i(), this._Label24_i(), this._Label25_i(), this._Label26_i(), this._Label27_i(), this.btnFight_0_i(), this._Image27_i(), this._Image28_i(), this._Label28_i(), this._Image29_i(), this._Image30_i(), this._Label29_i(), this.flag_done_0_i(), this._Image31_i(), this._Image32_i(), this._Image33_i()],
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "pve_encarlose_evo_view_rightbg2_png",
        e.width = 383,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "pve_encarlose_evo_view_line1_png",
        e.width = 2,
        e.x = 0,
        e.y = 0,
        e
    },
    _.imgBtn_pet_0_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet_0 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_pet_png",
        e.width = 60,
        e.x = 119,
        e.y = 562,
        e
    },
    _.imgBtn_cure_0_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure_0 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_cure_png",
        e.width = 60,
        e.x = 204,
        e.y = 562,
        e
    },
    _._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合后战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 391,
        e
    },
    _._Label13_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*25",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 411,
        e
    },
    _._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合内战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 436,
        e
    },
    _._Label15_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*1",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 456,
        e
    },
    _.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 133,
        e.y = 483,
        e
    },
    _._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 276,
        e.y = 391,
        e
    },
    _._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_head_3045_png",
        e.width = 80,
        e.x = 276,
        e.y = 391,
        e
    },
    _._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "六界神王",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 276,
        e.y = 476,
        e
    },
    _._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 32,
        e.y = 391,
        e
    },
    _._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 78,
        e.source = "pve_encarlose_evo_view_head_124_png",
        e.width = 78,
        e.x = 33,
        e.y = 392,
        e
    },
    _._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "英卡洛斯",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 32,
        e.y = 475,
        e
    },
    _.flag_done_2_i = function() {
        var e = new eui.Image;
        return this.flag_done_2 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 121,
        e.y = 483,
        e
    },
    _._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合后战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 214,
        e
    },
    _._Label19_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*15",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 234,
        e
    },
    _._Label20_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合内战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 259,
        e
    },
    _._Label21_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*1",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 279,
        e
    },
    _.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 132,
        e.y = 306,
        e
    },
    _._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 276,
        e.y = 214,
        e
    },
    _._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_head_1758_png",
        e.width = 80,
        e.x = 276,
        e.y = 214,
        e
    },
    _._Label22_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "米瑞斯",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 286,
        e.y = 298,
        e
    },
    _._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 32,
        e.y = 214,
        e
    },
    _._Image26_i = function() {
        var e = new eui.Image;
        return e.height = 78,
        e.source = "pve_encarlose_evo_view_head_124_png",
        e.width = 78,
        e.x = 33,
        e.y = 215,
        e
    },
    _._Label23_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "英卡洛斯",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 32,
        e.y = 298,
        e
    },
    _.flag_done_1_i = function() {
        var e = new eui.Image;
        return this.flag_done_1 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 120,
        e.y = 306,
        e
    },
    _._Label24_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合后战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 35,
        e
    },
    _._Label25_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*10",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 55,
        e
    },
    _._Label26_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10回合内战胜：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 132,
        e.y = 80,
        e
    },
    _._Label27_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "惩戒能量*1",
        e.textColor = 15719737,
        e.touchEnabled = !1,
        e.x = 130,
        e.y = 100,
        e
    },
    _.btnFight_0_i = function() {
        var e = new eui.Image;
        return this.btnFight_0 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 133,
        e.y = 128,
        e
    },
    _._Image27_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 32,
        e.y = 36,
        e
    },
    _._Image28_i = function() {
        var e = new eui.Image;
        return e.height = 78,
        e.source = "pve_encarlose_evo_view_head_124_png",
        e.width = 78,
        e.x = 33,
        e.y = 37,
        e
    },
    _._Label28_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "英卡洛斯",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 32,
        e.y = 120,
        e
    },
    _._Image29_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 80,
        e.x = 276,
        e.y = 36,
        e
    },
    _._Image30_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "pve_encarlose_evo_view_head_2311_png",
        e.width = 80,
        e.x = 276,
        e.y = 36,
        e
    },
    _._Label29_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "雷小伊",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 286,
        e.y = 121,
        e
    },
    _.flag_done_0_i = function() {
        var e = new eui.Image;
        return this.flag_done_0 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 121,
        e.y = 128,
        e
    },
    _._Image31_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 188,
        e
    },
    _._Image32_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 365,
        e
    },
    _._Image33_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 541,
        e
    },
    _.grp_fanatical_i = function() {
        var e = new eui.Group;
        return this.grp_fanatical = e,
        e.right = 0,
        e.visible = !1,
        e.y = 0,
        e.elementsContent = [this._Image34_i(), this._Image35_i(), this.imgBtn_pet_1_i(), this.imgBtn_cure_1_i(), this._Image36_i(), this.txt_intro_2_i(), this._Label30_i(), this.btnFight_5_i(), this._Image37_i(), this._Label31_i(), this.flag_done_5_i(), this._Image38_i(), this.txt_intro_1_i(), this._Label32_i(), this.btnFight_4_i(), this._Image39_i(), this._Label33_i(), this.flag_done_4_i(), this._Image40_i(), this._Image41_i(), this.txt_intro_0_i(), this._Label34_i(), this.btnFight_3_i(), this.flag_done_3_i(), this._Label35_i(), this._Image42_i(), this._Image43_i(), this._Image44_i()],
        e
    },
    _._Image34_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "pve_encarlose_evo_view_rightbg2_png",
        e.width = 383,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image35_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "pve_encarlose_evo_view_line1_png",
        e.width = 2,
        e.x = 0,
        e.y = 0,
        e
    },
    _.imgBtn_pet_1_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet_1 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_pet_png",
        e.width = 60,
        e.x = 119,
        e.y = 562,
        e
    },
    _.imgBtn_cure_1_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure_1 = e,
        e.height = 60,
        e.source = "pve_encarlose_evo_view_imgBtn_cure_png",
        e.width = 60,
        e.x = 204,
        e.y = 562,
        e
    },
    _._Image36_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 100,
        e.x = 32,
        e.y = 398,
        e
    },
    _.txt_intro_2_i = function() {
        var e = new eui.Label;
        return this.txt_intro_2 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战胜可得25点狂热能量",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 142,
        e.y = 425,
        e
    },
    _._Label30_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "单精灵对战且2回合内击败：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 143,
        e.y = 399,
        e
    },
    _.btnFight_5_i = function() {
        var e = new eui.Image;
        return this.btnFight_5 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 187,
        e.y = 483,
        e
    },
    _._Image37_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_head_2944_png",
        e.width = 100,
        e.x = 32,
        e.y = 398,
        e
    },
    _._Label31_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "鬼剑骷髅",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 503,
        e
    },
    _.flag_done_5_i = function() {
        var e = new eui.Image;
        return this.flag_done_5 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 175,
        e.y = 483,
        e
    },
    _._Image38_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 100,
        e.x = 32,
        e.y = 221,
        e
    },
    _.txt_intro_1_i = function() {
        var e = new eui.Label;
        return this.txt_intro_1 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战胜可获得15点狂热能量",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 142,
        e.y = 248,
        e
    },
    _._Label32_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "单精灵对战：",
        e.textColor = 11391897,
        e.touchEnabled = !1,
        e.x = 143,
        e.y = 222,
        e
    },
    _.btnFight_4_i = function() {
        var e = new eui.Image;
        return this.btnFight_4 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 187,
        e.y = 306,
        e
    },
    _._Image39_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_head_3044_png",
        e.width = 100,
        e.x = 32,
        e.y = 221,
        e
    },
    _._Label33_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "库贝萨隆",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 41,
        e.y = 326,
        e
    },
    _.flag_done_4_i = function() {
        var e = new eui.Image;
        return this.flag_done_4 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 175,
        e.y = 306,
        e
    },
    _._Image40_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_headbg_png",
        e.width = 100,
        e.x = 32,
        e.y = 43,
        e
    },
    _._Image41_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "pve_encarlose_evo_view_head_2924_png",
        e.width = 100,
        e.x = 32,
        e.y = 43,
        e
    },
    _.txt_intro_0_i = function() {
        var e = new eui.Label;
        return this.txt_intro_0 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "战胜可得10点狂热能量",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 142,
        e.y = 70,
        e
    },
    _._Label34_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "多精灵对战：",
        e.textColor = 11391896,
        e.touchEnabled = !1,
        e.x = 142,
        e.y = 44,
        e
    },
    _.btnFight_3_i = function() {
        var e = new eui.Image;
        return this.btnFight_3 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_btnFight_png",
        e.width = 120,
        e.x = 187,
        e.y = 128,
        e
    },
    _.flag_done_3_i = function() {
        var e = new eui.Image;
        return this.flag_done_3 = e,
        e.height = 40,
        e.source = "pve_encarlose_evo_view_flag_done_png",
        e.width = 147,
        e.x = 175,
        e.y = 128,
        e
    },
    _._Label35_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "泊莱德",
        e.textColor = 14023627,
        e.touchEnabled = !1,
        e.x = 52,
        e.y = 148,
        e
    },
    _._Image42_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 186,
        e
    },
    _._Image43_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 364,
        e
    },
    _._Image44_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "pve_encarlose_evo_view_line_png",
        e.width = 349,
        e.x = 19,
        e.y = 541,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveEncarloseJustinViewSkin.exml"] = window.PveEncarloseJustinViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_bubble_1", "txt_bubble_0", "bubble", "orangeBtn", "txt_signFree", "txt_sign", "btnSign", "greenBtn", "txt_draw", "btnDraw", "flag_tomorrow", "item_0", "item_1", "item_2", "item_3", "item_4", "item_5", "item_6", "item_7", "item_8", "item_9", "img_selected", "signItem", "txt_leftTimes", "btnPlus", "_rect", "img", "mask_2", "mask_3", "mask_1", "mask_4", "grp_mask", "light_2", "light_3", "light_1", "light_4", "grp_selected", "pop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.bubble_i(), this.btnSign_i(), this.btnDraw_i(), this.flag_tomorrow_i(), this.signItem_i(), this._Group1_i(), this._Image6_i(), this._rect_i(), this.pop_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_encarlose_justin_view_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 172,
        e.source = "pve_encarlose_justin_view_npcbg_png",
        e.width = 371,
        e.x = 50,
        e.y = 423,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 435,
        e.source = "pve_encarlose_justin_view_npc_png",
        e.width = 426,
        e.x = 0,
        e.y = 132,
        e
    },
    i.bubble_i = function() {
        var e = new eui.Group;
        return this.bubble = e,
        e.x = 53,
        e.y = 73,
        e.elementsContent = [this._Image4_i(), this.txt_bubble_1_i(), this.txt_bubble_0_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 98,
        e.source = "pve_encarlose_justin_view_bubbleBg_png",
        e.width = 328,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_bubble_1_i = function() {
        var e = new eui.Label;
        return this.txt_bubble_1 = e,
        e.lineSpacing = 4,
        e.size = 18,
        e.text = "每签到一次均可领取丰厚好礼，\n总计签到10次可领取精灵【达尔】",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 34,
        e.y = 21,
        e
    },
    i.txt_bubble_0_i = function() {
        var e = new eui.Label;
        return this.txt_bubble_0 = e,
        e.lineSpacing = 6,
        e.size = 20,
        e.text = "每天可完成随机任务，\n获得签到次数*1",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 68,
        e.y = 20,
        e
    },
    i.btnSign_i = function() {
        var e = new eui.Group;
        return this.btnSign = e,
        e.horizontalCenter = 195.5,
        e.right = 235,
        e.y = 529,
        e.elementsContent = [this.orangeBtn_i(), this.txt_signFree_i(), this.txt_sign_i()],
        e
    },
    i.orangeBtn_i = function() {
        var e = new eui.Image;
        return this.orangeBtn = e,
        e.height = 77,
        e.source = "pve_encarlose_justin_view_orangeBtn_png",
        e.width = 275,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_signFree_i = function() {
        var e = new eui.Label;
        return this.txt_signFree = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 28,
        e.text = "每日免费签到",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 34,
        e.y = 27,
        e
    },
    i.txt_sign_i = function() {
        var e = new eui.Label;
        return this.txt_sign = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 30,
        e.text = "签到",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.visible = !1,
        e.x = 90,
        e.y = 25,
        e
    },
    i.btnDraw_i = function() {
        var e = new eui.Group;
        return this.btnDraw = e,
        e.x = 99,
        e.y = 529,
        e.elementsContent = [this.greenBtn_i(), this.txt_draw_i()],
        e
    },
    i.greenBtn_i = function() {
        var e = new eui.Image;
        return this.greenBtn = e,
        e.height = 77,
        e.source = "pve_encarlose_justin_view_greenBtn_png",
        e.width = 275,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_draw_i = function() {
        var e = new eui.Label;
        return this.txt_draw = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = -18.5,
        e.lineSpacing = 3,
        e.size = 28,
        e.text = "抽取每日任务",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 27,
        e
    },
    i.flag_tomorrow_i = function() {
        var e = new eui.Image;
        return this.flag_tomorrow = e,
        e.height = 45,
        e.source = "pve_encarlose_justin_view_flag_tomorrow_png",
        e.visible = !1,
        e.width = 228,
        e.x = 106,
        e.y = 538,
        e
    },
    i.signItem_i = function() {
        var e = new eui.Group;
        return this.signItem = e,
        e.horizontalCenter = 179,
        e.right = 43,
        e.y = 159,
        e.elementsContent = [this.item_0_i(), this.item_1_i(), this.item_2_i(), this.item_3_i(), this.item_4_i(), this.item_5_i(), this.item_6_i(), this.item_7_i(), this.item_8_i(), this.item_9_i(), this.img_selected_i()],
        e
    },
    i.item_0_i = function() {
        var e = new eui.Image;
        return this.item_0 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_1_png",
        e.width = 132,
        e.x = 0,
        e.y = 0,
        e
    },
    i.item_1_i = function() {
        var e = new eui.Image;
        return this.item_1 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_2_png",
        e.width = 132,
        e.x = 140,
        e.y = 0,
        e
    },
    i.item_2_i = function() {
        var e = new eui.Image;
        return this.item_2 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_3_png",
        e.width = 132,
        e.x = 280,
        e.y = 0,
        e
    },
    i.item_3_i = function() {
        var e = new eui.Image;
        return this.item_3 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_4_png",
        e.width = 132,
        e.x = 420,
        e.y = 0,
        e
    },
    i.item_4_i = function() {
        var e = new eui.Image;
        return this.item_4 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_5_png",
        e.width = 132,
        e.x = 560,
        e.y = 0,
        e
    },
    i.item_5_i = function() {
        var e = new eui.Image;
        return this.item_5 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_6_png",
        e.width = 132,
        e.x = 0,
        e.y = 188,
        e
    },
    i.item_6_i = function() {
        var e = new eui.Image;
        return this.item_6 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_7_png",
        e.width = 132,
        e.x = 140,
        e.y = 188,
        e
    },
    i.item_7_i = function() {
        var e = new eui.Image;
        return this.item_7 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_8_png",
        e.width = 132,
        e.x = 280,
        e.y = 188,
        e
    },
    i.item_8_i = function() {
        var e = new eui.Image;
        return this.item_8 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_9_png",
        e.width = 132,
        e.x = 420,
        e.y = 188,
        e
    },
    i.item_9_i = function() {
        var e = new eui.Image;
        return this.item_9 = e,
        e.height = 172,
        e.source = "pve_encarlose_justin_view_item_10_png",
        e.width = 132,
        e.x = 560,
        e.y = 188,
        e
    },
    i.img_selected_i = function() {
        var e = new eui.Image;
        return this.img_selected = e,
        e.height = 186,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_encarlose_justin_view_img_selected_png",
        e.width = 146,
        e.x = -7,
        e.y = -7,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 413,
        e.right = 43,
        e.y = 540,
        e.elementsContent = [this._Image5_i(), this.txt_leftTimes_i(), this.btnPlus_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "pve_encarlose_justin_view_txtbg_png",
        e.width = 204,
        e.x = 0,
        e.y = 4,
        e
    },
    i.txt_leftTimes_i = function() {
        var e = new eui.Label;
        return this.txt_leftTimes = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "剩余签到次数：99",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 5,
        e.y = 9,
        e
    },
    i.btnPlus_i = function() {
        var e = new eui.Image;
        return this.btnPlus = e,
        e.height = 34,
        e.source = "pve_encarlose_justin_view_btnPlus_png",
        e.width = 34,
        e.x = 190,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 145,
        e.horizontalCenter = 176.5,
        e.right = 103,
        e.source = "pve_encarlose_justin_view_title_png",
        e.width = 577,
        e.y = 37,
        e
    },
    i._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.fillAlpha = .4,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !1,
        e.percentWidth = 100,
        e
    },
    i.pop_i = function() {
        var e = new eui.Group;
        return this.pop = e,
        e.height = 540,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !1,
        e.width = 540,
        e.elementsContent = [this.img_i(), this.grp_mask_i(), this.grp_selected_i()],
        e
    },
    i.img_i = function() {
        var e = new eui.Image;
        return this.img = e,
        e.height = 540,
        e.source = "pve_encarlose_justin_pop_img_png",
        e.width = 540,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_mask_i = function() {
        var e = new eui.Group;
        return this.grp_mask = e,
        e.x = 21,
        e.y = 21,
        e.elementsContent = [this.mask_2_i(), this.mask_3_i(), this.mask_1_i(), this.mask_4_i()],
        e
    },
    i.mask_2_i = function() {
        var e = new eui.Image;
        return this.mask_2 = e,
        e.height = 247,
        e.source = "pve_encarlose_justin_pop_mask_2_png",
        e.width = 247,
        e.x = 0,
        e.y = 0,
        e
    },
    i.mask_3_i = function() {
        var e = new eui.Image;
        return this.mask_3 = e,
        e.height = 248,
        e.source = "pve_encarlose_justin_pop_mask_3_png",
        e.width = 248,
        e.x = 249,
        e.y = 0,
        e
    },
    i.mask_1_i = function() {
        var e = new eui.Image;
        return this.mask_1 = e,
        e.height = 248,
        e.source = "pve_encarlose_justin_pop_mask_1_png",
        e.visible = !0,
        e.width = 248,
        e.x = 0,
        e.y = 250,
        e
    },
    i.mask_4_i = function() {
        var e = new eui.Image;
        return this.mask_4 = e,
        e.height = 248,
        e.source = "pve_encarlose_justin_pop_mask_4_png",
        e.width = 248,
        e.x = 250,
        e.y = 250,
        e
    },
    i.grp_selected_i = function() {
        var e = new eui.Group;
        return this.grp_selected = e,
        e.x = 13,
        e.y = 13,
        e.elementsContent = [this.light_2_i(), this.light_3_i(), this.light_1_i(), this.light_4_i()],
        e
    },
    i.light_2_i = function() {
        var e = new eui.Image;
        return this.light_2 = e,
        e.height = 264,
        e.source = "pve_encarlose_justin_pop_light_2_png",
        e.width = 264,
        e.x = 0,
        e.y = 0,
        e
    },
    i.light_3_i = function() {
        var e = new eui.Image;
        return this.light_3 = e,
        e.height = 264,
        e.source = "pve_encarlose_justin_pop_light_3_png",
        e.width = 264,
        e.x = 249,
        e.y = 0,
        e
    },
    i.light_1_i = function() {
        var e = new eui.Image;
        return this.light_1 = e,
        e.height = 264,
        e.source = "pve_encarlose_justin_pop_light_1_png",
        e.width = 264,
        e.x = 0,
        e.y = 249,
        e
    },
    i.light_4_i = function() {
        var e = new eui.Image;
        return this.light_4 = e,
        e.height = 264,
        e.source = "pve_encarlose_justin_pop_light_4_png",
        e.width = 264,
        e.x = 249,
        e.y = 249,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveEncarloseSkin.exml"] = window.PveEncarloseSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["flag_got_0", "btnInfo_0", "btnGo_0", "flag_got_1", "btnInfo_1", "btnGo_1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.source = "pve_encarlose_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -1,
        e.y = 53,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "pve_encarlose_txtbg_png",
        e.width = 860,
        e.x = 0,
        e.y = 515,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 24,
        e.text = "完成挑战即可获得",
        e.textColor = 12576429,
        e.touchEnabled = !1,
        e.x = 336,
        e.y = 520,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 65,
        e.source = "pve_encarlose_sucai_png",
        e.width = 308,
        e.x = 276,
        e.y = 446,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 454,
        e.source = "pve_encarlose_title_png",
        e.width = 630,
        e.x = 115,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 20,
        e.y = 91,
        e.elementsContent = [this._Image5_i(), this.flag_got_0_i(), this.btnInfo_0_i(), this._Label2_i(), this._Image6_i(), this.btnGo_0_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 520,
        e.source = "pve_encarlose_pet_0_png",
        e.width = 333,
        e.x = 41,
        e.y = 0,
        e
    },
    i.flag_got_0_i = function() {
        var e = new eui.Image;
        return this.flag_got_0 = e,
        e.height = 76,
        e.source = "pve_encarlose_flag_got_png",
        e.width = 264,
        e.x = 69,
        e.y = 245,
        e
    },
    i.btnInfo_0_i = function() {
        var e = new eui.Image;
        return this.btnInfo_0 = e,
        e.height = 74,
        e.source = "pve_encarlose_btnInfo_png",
        e.width = 74,
        e.x = 0,
        e.y = 291,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 6,
        e.size = 30,
        e.text = "希路达",
        e.textColor = 14155677,
        e.touchEnabled = !1,
        e.width = 30,
        e.x = 52,
        e.y = 115,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 10,
        e.source = "pve_encarlose_img_j_0_png",
        e.width = 39,
        e.x = 110,
        e.y = 477,
        e
    },
    i.btnGo_0_i = function() {
        var e = new eui.Image;
        return this.btnGo_0 = e,
        e.height = 77,
        e.source = "pve_encarlose_btnGo_0_png",
        e.width = 268,
        e.x = 32,
        e.y = 405,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.right = 16,
        e.visible = !0,
        e.width = 417,
        e.y = 83,
        e.elementsContent = [this._Image7_i(), this.flag_got_1_i(), this.btnInfo_1_i(), this._Label3_i(), this._Image8_i(), this.btnGo_1_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 548,
        e.source = "pve_encarlose_pet_1_png",
        e.width = 417,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_got_1_i = function() {
        var e = new eui.Image;
        return this.flag_got_1 = e,
        e.height = 76,
        e.source = "pve_encarlose_flag_got_png",
        e.width = 264,
        e.x = 67,
        e.y = 253,
        e
    },
    i.btnInfo_1_i = function() {
        var e = new eui.Image;
        return this.btnInfo_1 = e,
        e.height = 74,
        e.source = "pve_encarlose_btnInfo_png",
        e.width = 74,
        e.x = 339,
        e.y = 299,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 6,
        e.size = 30,
        e.text = "英卡洛斯",
        e.textColor = 14090141,
        e.touchEnabled = !1,
        e.width = 30,
        e.x = 333,
        e.y = 95,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 10,
        e.source = "pve_encarlose_img_j_1_png",
        e.width = 39,
        e.x = 260,
        e.y = 485,
        e
    },
    i.btnGo_1_i = function() {
        var e = new eui.Image;
        return this.btnGo_1 = e,
        e.height = 77,
        e.source = "pve_encarlose_btnGo_1_png",
        e.width = 268,
        e.x = 108,
        e.y = 413,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveEncarloseTaskSkin.exml"] = window.PveEncarloseTaskSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg_1", "bg_2", "bg_4", "bg_3", "_mask", "bg", "light_3", "light_4", "light_2", "light_1", "pet_1", "pet_2", "pet_4", "pet_3", "gem_0", "gem_1", "gem_2", "gem", "candle_off", "candle_on", "candle", "txt_itemNum", "num", "btnClose", "title_3", "title_4", "title_2", "title_1", "helpBtn_png", "top", "timeBg", "txt_time", "time"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.light_3_i(), this.light_4_i(), this.light_2_i(), this.light_1_i(), this.pet_1_i(), this.pet_2_i(), this.pet_4_i(), this.pet_3_i(), this.gem_i(), this.candle_i(), this.num_i(), this.top_i(), this.time_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Group;
        return this.bg = e,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_1_i(), this.bg_2_i(), this.bg_4_i(), this.bg_3_i(), this._mask_i()],
        e
    },
    i.bg_1_i = function() {
        var e = new eui.Image;
        return this.bg_1 = e,
        e.height = 640,
        e.source = "pve_encarlose_task_bg_1_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.bg_2_i = function() {
        var e = new eui.Image;
        return this.bg_2 = e,
        e.height = 640,
        e.source = "pve_encarlose_task_bg_2_jpg",
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.bg_4_i = function() {
        var e = new eui.Image;
        return this.bg_4 = e,
        e.height = 640,
        e.source = "pve_encarlose_task_bg_4_jpg",
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.bg_3_i = function() {
        var e = new eui.Image;
        return this.bg_3 = e,
        e.height = 640,
        e.source = "pve_encarlose_task_bg_3_jpg",
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._mask_i = function() {
        var e = new eui.Image;
        return this._mask = e,
        e.height = 640,
        e.source = "pve_encarlose_task__mask_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.light_3_i = function() {
        var e = new eui.Image;
        return this.light_3 = e,
        e.height = 265,
        e.horizontalCenter = 158.5,
        e.source = "pve_encarlose_task_light_png",
        e.visible = !1,
        e.width = 381,
        e.y = 117,
        e
    },
    i.light_4_i = function() {
        var e = new eui.Image;
        return this.light_4 = e,
        e.height = 265,
        e.horizontalCenter = -107.5,
        e.source = "pve_encarlose_task_light_png",
        e.visible = !1,
        e.width = 381,
        e.y = 47,
        e
    },
    i.light_2_i = function() {
        var e = new eui.Image;
        return this.light_2 = e,
        e.height = 265,
        e.horizontalCenter = -2.5,
        e.source = "pve_encarlose_task_light_png",
        e.visible = !1,
        e.width = 381,
        e.y = 170,
        e
    },
    i.light_1_i = function() {
        var e = new eui.Image;
        return this.light_1 = e,
        e.height = 265,
        e.horizontalCenter = 71.5,
        e.source = "pve_encarlose_task_light_png",
        e.visible = !1,
        e.width = 381,
        e.y = 104,
        e
    },
    i.pet_1_i = function() {
        var e = new eui.Image;
        return this.pet_1 = e,
        e.height = 346,
        e.horizontalCenter = 80,
        e.source = "pve_encarlose_task_pet_1_png",
        e.visible = !0,
        e.width = 484,
        e.y = 28,
        e
    },
    i.pet_2_i = function() {
        var e = new eui.Image;
        return this.pet_2 = e,
        e.height = 327,
        e.horizontalCenter = -27,
        e.source = "pve_encarlose_task_pet_2_png",
        e.visible = !1,
        e.width = 394,
        e.y = 71,
        e
    },
    i.pet_4_i = function() {
        var e = new eui.Image;
        return this.pet_4 = e,
        e.height = 282,
        e.horizontalCenter = -95,
        e.source = "pve_encarlose_task_pet_4_png",
        e.visible = !1,
        e.width = 372,
        e.y = 0,
        e
    },
    i.pet_3_i = function() {
        var e = new eui.Image;
        return this.pet_3 = e,
        e.height = 328,
        e.horizontalCenter = 136,
        e.source = "pve_encarlose_task_pet_3_png",
        e.visible = !1,
        e.width = 430,
        e.y = 13,
        e
    },
    i.gem_i = function() {
        var e = new eui.Group;
        return this.gem = e,
        e.right = 34,
        e.visible = !1,
        e.y = 84,
        e.elementsContent = [this.gem_0_i(), this.gem_1_i(), this.gem_2_i()],
        e
    },
    i.gem_0_i = function() {
        var e = new eui.Image;
        return this.gem_0 = e,
        e.height = 170,
        e.source = "pve_encarlose_task_gem_png",
        e.width = 182,
        e.x = 35,
        e.y = 0,
        e
    },
    i.gem_1_i = function() {
        var e = new eui.Image;
        return this.gem_1 = e,
        e.height = 170,
        e.source = "pve_encarlose_task_gem_png",
        e.width = 182,
        e.x = 230,
        e.y = 84,
        e
    },
    i.gem_2_i = function() {
        var e = new eui.Image;
        return this.gem_2 = e,
        e.height = 170,
        e.source = "pve_encarlose_task_gem_png",
        e.width = 182,
        e.x = 0,
        e.y = 171,
        e
    },
    i.candle_i = function() {
        var e = new eui.Group;
        return this.candle = e,
        e.visible = !1,
        e.x = 832,
        e.y = 266,
        e.elementsContent = [this._Image1_i(), this.candle_off_i(), this.candle_on_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 170,
        e.source = "pve_encarlose_task_candlebg_png",
        e.width = 169,
        e.x = 0,
        e.y = 5,
        e
    },
    i.candle_off_i = function() {
        var e = new eui.Image;
        return this.candle_off = e,
        e.height = 114,
        e.source = "pve_encarlose_task_candle_off_png",
        e.width = 53,
        e.x = 57,
        e.y = 34,
        e
    },
    i.candle_on_i = function() {
        var e = new eui.Image;
        return this.candle_on = e,
        e.height = 156,
        e.source = "pve_encarlose_task_candle_on_png",
        e.visible = !1,
        e.width = 70,
        e.x = 49,
        e.y = 0,
        e
    },
    i.num_i = function() {
        var e = new eui.Group;
        return this.num = e,
        e.right = 0,
        e.visible = !1,
        e.y = 50,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this.txt_itemNum_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "pve_encarlose_task_numbg_png",
        e.width = 293,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "目前拥有水源灵石：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 94,
        e.y = 10,
        e
    },
    i.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 249,
        e.y = 10,
        e
    },
    i.top_i = function() {
        var e = new eui.Group;
        return this.top = e,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.btnClose_i(), this.title_3_i(), this.title_4_i(), this.title_2_i(), this.title_1_i(), this.helpBtn_png_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 51,
        e.source = "common_top_bg_style1_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_2_png",
        e
    },
    i.title_3_i = function() {
        var e = new eui.Image;
        return this.title_3 = e,
        e.height = 36,
        e.source = "pve_encarlose_task_title_1_png",
        e.visible = !1,
        e.width = 125,
        e.x = 112,
        e.y = 7,
        e
    },
    i.title_4_i = function() {
        var e = new eui.Image;
        return this.title_4 = e,
        e.height = 36,
        e.source = "pve_encarlose_task_title_2_png",
        e.visible = !1,
        e.width = 125,
        e.x = 112,
        e.y = 7,
        e
    },
    i.title_2_i = function() {
        var e = new eui.Image;
        return this.title_2 = e,
        e.height = 36,
        e.source = "pve_encarlose_task_title_3_png",
        e.visible = !0,
        e.width = 125,
        e.x = 112,
        e.y = 7,
        e
    },
    i.title_1_i = function() {
        var e = new eui.Image;
        return this.title_1 = e,
        e.height = 36,
        e.source = "pve_encarlose_task_title_4_png",
        e.visible = !1,
        e.width = 125,
        e.x = 112,
        e.y = 7,
        e
    },
    i.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.visible = !0,
        e.width = 22,
        e.x = 241,
        e.y = 14,
        e
    },
    i.time_i = function() {
        var e = new eui.Group;
        return this.time = e,
        e.visible = !1,
        e.x = 830,
        e.y = 200,
        e.elementsContent = [this.timeBg_i(), this.txt_time_i(), this._Label2_i()],
        e
    },
    i.timeBg_i = function() {
        var e = new eui.Image;
        return this.timeBg = e,
        e.height = 77,
        e.source = "pve_encarlose_task_timeBg_png",
        e.width = 170,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 30,
        e.text = "06:26",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 40,
        e.y = 31,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "倒计时：",
        e.textColor = 12839930,
        e.touchEnabled = !1,
        e.x = 24,
        e.y = 13,
        e
    },
    t
} (eui.Skin);