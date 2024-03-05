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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HolyPuniLevel4Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "holy_puni_level_4_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.adaptRightContent(this.grp_times),
            this.rbg_boss = this.boss_0.group,
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251221, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 4],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("251220_10490",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnDefeat,
            function() {
                PayManager.doPayFunc(function() {
                    var e = ~~t.rbg_boss.selectedValue;
                    return e ? void KTool.buyProductByCallback(251219, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [7, e],
                        function() {
                            t.updateData()
                        })
                    }) : void Alarm.show("请选择要击败的精灵")
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (t._fightTimes >= 10) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = ~~t.rbg_boss.selectedValue;
                return e ? void FightManager.fightNoMapBoss("", 10559 + e) : void Alarm.show("请选择要挑战的精灵")
            },
            this),
            this.rbg_boss.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.onChangeTab = function(t) {
            var e = [["精灵王者", "单次最高伤害超过1000"], ["守护之魂", "在满体力的状态下击败"], ["六界帝神", "5回合内击败"], ["白魂之王", "使用致命一击击败"]],
            i = ~~this.rbg_boss.selectedValue,
            n = e[i - 1];
            this.grp_bossInfo.visible = !0,
            this.txt_fightTitle.text = n[0],
            this.txt_fightInfo.text = n[1],
            DisplayUtil.setEnabled(this.btnFight, !0),
            DisplayUtil.setEnabled(this.btnDefeat, !0)
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grpBack.y = -this.grpBack.height,
            this.grp_boss.horizontalCenter = -(this.grp_boss.width + egret.lifecycle.stage.stageWidth) / 2,
            this.btns.x = -this.btns.width,
            this.grp_fightInfo.right = -this.grp_fightInfo.width,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200).call(function() {
                egret.Tween.get(t.grp_boss).to({
                    horizontalCenter: -104
                },
                200).call(function() {
                    egret.Tween.get(t.btns).to({
                        x: 60
                    },
                    200),
                    egret.Tween.get(t.grp_fightInfo).to({
                        right: 27
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4950, 16651, 4946],
            function(i) {
                return i[2] >= 4 ? (Alarm.show("恭喜您，通过了圣灵之环•圣光联军关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (e._state = i[0], e._fightTimes = i[1], void e.updateView())
            })
        },
        i.prototype.updateView = function() {
            if (KTool.getBit(this._state, 1) + KTool.getBit(this._state, 2) + KTool.getBit(this._state, 3) + KTool.getBit(this._state, 4) == 4) return Alarm.show("恭喜您，通过了圣灵之环•圣光联军关卡！谱尼的力量变得更强大了！"),
            void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL);
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10",
            DisplayUtil.setEnabled(this.btnAdd, this._fightTimes >= 10);
            for (var e = 0; 4 > e; e++) this["boss_" + e].enabled = !KTool.getBit(this._state, e + 1);
            this.rbg_boss.selectedValue = null,
            this.grp_bossInfo.visible = !1,
            DisplayUtil.setEnabled(this.btnFight, !1),
            DisplayUtil.setEnabled(this.btnDefeat, !1)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbg_boss.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel4 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel4")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            t.HolyPuniManager.getInstance().bind(this),
            this.showPanel(t.HolyPuniManager.MAIN_PANEL)
        },
        i.prototype.showPanel = function(e) {
            switch (this.hidePanel(), e) {
            case t.HolyPuniManager.MAIN_PANEL:
                this._curPanel = new t.HolyPuniMain;
                break;
            case t.HolyPuniManager.LEVEL_1:
                this._curPanel = new t.HolyPuniLevel1;
                break;
            case t.HolyPuniManager.LEVEL_2:
                this._curPanel = new t.HolyPuniLevel2;
                break;
            case t.HolyPuniManager.LEVEL_3:
                this._curPanel = new t.HolyPuniLevel3;
                break;
            case t.HolyPuniManager.LEVEL_4:
                this._curPanel = new t.HolyPuniLevel4;
                break;
            case t.HolyPuniManager.LEVEL_5:
                this._curPanel = new t.HolyPuniLevel5;
                break;
            case t.HolyPuniManager.LEVEL_6:
                this._curPanel = new t.HolyPuniLevel6;
                break;
            default:
                return
            }
            this.addChild(this._curPanel)
        },
        i.prototype.hidePanel = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.hidePanel(),
            t.HolyPuniManager.getInstance().destroy()
        },
        i
    } (BaseModule);
    t.HolyPuni = e,
    __reflect(e.prototype, "holyPuni.HolyPuni")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = HolyPuniUnbindPopItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {
                    ins: e.data.markID
                };
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                EventManager.dispatchEventWith("holy_puni_unbind_add", !1, e.data)
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data ? (this.icon.source = CountermarkXMLInfo.getIconURL(this.data.markID), this.btnAdd.visible = this.data.plus) : (this.icon.source = "", this.btnAdd.visible = !1)
        },
        e.prototype.destroy = function() {
            this.removeChildren(),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.HolyPuniUnbindItem = e,
    __reflect(e.prototype, "holyPuni.HolyPuniUnbindItem")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HolyPuniLevel1Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.btns),
            this.initOldPveBtnClose(0, this, "holy_puni_level_1_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251212, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 1],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                PayManager.doPayFunc(function() {
                    ModuleManager.showModuleByID(63)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSummit,
            function() {
                if (2 == t._step) return void SocketConnection.sendByQueue(CommandID.PET_GET_EXP, [],
                function(e) {
                    var i = e.data,
                    n = i.readUnsignedInt();
                    return 3e4 > n ? void Alarm.show("经验不足") : void SocketConnection.sendByQueue(46342, [4, t._step + 1],
                    function() {
                        t.updateData()
                    })
                });
                switch (t._step) {
                case 0:
                    if (MainManager.actorInfo.coins < 1e5) return void Alarm.show("赛尔豆不足");
                    break;
                case 1:
                    if (ItemManager.getNumByID(1400352) < 5e4) return void Alarm.show("道具不足");
                    break;
                case 3:
                    if (ItemManager.getNumByID(300014) < 100) return void Alarm.show("道具不足")
                }
                SocketConnection.sendByQueue(46342, [4, t._step + 1],
                function() {
                    t.updateData()
                })
            },
            this)
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grp_bubble.alpha = 0,
            this.grpBack.y = -this.grpBack.height,
            this.btns.x = -this.btns.width,
            this.pet.horizontalCenter = -(egret.lifecycle.stage.stageWidth + this.pet.width) / 2,
            this.grp_item.horizontalCenter = (egret.lifecycle.stage.stageWidth + this.grp_item.width) / 2,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200).call(function() {
                egret.Tween.get(t.btns).to({
                    x: 60
                },
                200),
                egret.Tween.get(t.grp_item).to({
                    horizontalCenter: 192
                },
                200),
                egret.Tween.get(t.pet).to({
                    horizontalCenter: -349
                },
                200).call(function() {
                    egret.Tween.get(t.grp_bubble).to({
                        alpha: 1
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4947, 4946],
            function(i) {
                return i[1] >= 1 ? (Alarm.show("恭喜您，通过了圣灵之环•赛尔行囊关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (e._step = i[0], void e.updateView())
            })
        },
        i.prototype.updateView = function() {
            if (this._step >= 4) return Alarm.show("恭喜您，通过了圣灵之环•赛尔行囊关卡！谱尼的力量变得更强大了！"),
            void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL);
            for (var e = 0; 5 > e; e++) this["txt_" + e].visible = e == this._step,
            e > 3 || (e < this._step ? this["item_" + e].currentState = "done": e == this._step ? this["item_" + e].currentState = "doing": this["item_" + e].currentState = "normal")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel1 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel1")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HolyPuniLevel2Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "holy_puni_level_2_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.adaptRightContent(this.grp_times),
            this.rbg_boss = this.boss_0.group,
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251215, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 2],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("251214_10488",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnDefeat,
            function() {
                PayManager.doPayFunc(function() {
                    var e = ~~t.rbg_boss.selectedValue;
                    return e ? void KTool.buyProductByCallback(251213, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [5, e],
                        function() {
                            t.updateData()
                        })
                    }) : void Alarm.show("请选择要击败的精灵")
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (t._fightTimes >= 10) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = ~~t.rbg_boss.selectedValue;
                return e ? void SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [606 + e, 0, 0, 0, 0, 0]) : void Alarm.show("请选择要挑战的精灵")
            },
            this),
            this.rbg_boss.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.onChangeTab = function(t) {
            var e = ["萨格罗斯", "肯扎特", "肯迪尔"],
            i = ~~this.rbg_boss.selectedValue;
            this.bossName.visible = !0,
            this.txt_bossName.text = e[i - 1],
            DisplayUtil.setEnabled(this.btnFight, !0),
            DisplayUtil.setEnabled(this.btnDefeat, !0)
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grpBack.y = -this.grpBack.height,
            this.grp_times.y = -this.grp_times.height,
            this.grp_boss.horizontalCenter = -(this.grp_boss.width + egret.lifecycle.stage.stageWidth) / 2,
            this.btns.x = -this.btns.width,
            this.grp_info.right = -this.grp_info.width,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200),
            egret.Tween.get(this.grp_times).to({
                y: 12
            },
            200).call(function() {
                egret.Tween.get(t.btns).to({
                    x: 60
                },
                200),
                egret.Tween.get(t.grp_boss).to({
                    horizontalCenter: -105
                },
                200).call(function() {
                    egret.Tween.get(t.grp_info).to({
                        right: 27
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4948, 16649, 4946],
            function(i) {
                return i[2] >= 2 ? (Alarm.show("恭喜您，通过了圣灵之环•光荣记忆关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (e._state = i[0], e._fightTimes = i[1], void e.updateView())
            })
        },
        i.prototype.updateView = function() {
            if (KTool.getBit(this._state, 1) + KTool.getBit(this._state, 2) + KTool.getBit(this._state, 3) == 3) return Alarm.show("恭喜您，通过了圣灵之环•光荣记忆关卡！谱尼的力量变得更强大了！"),
            void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL);
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10",
            this.rbg_boss.selectedValue = null;
            for (var e = 0; 3 > e; e++) this["boss_" + e].enabled = !KTool.getBit(this._state, e + 1);
            this.bossName.visible = !1,
            DisplayUtil.setEnabled(this.btnFight, !1),
            DisplayUtil.setEnabled(this.btnDefeat, !1),
            DisplayUtil.setEnabled(this.btnAdd, this._fightTimes >= 10)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbg_boss.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel2 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel2")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HolyPuniLevel3Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "holy_puni_level_3_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.adaptRightContent(this.times),
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251218, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 3],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProduct("251217_10489",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnDefeat,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251216, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [6, 0],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._fightTimes >= 6 ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : void FightManager.fightNoMapBoss("", 10559)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grpBack.y = -this.grpBack.height,
            this.times.y = -this.times.height,
            this.pet.scaleX = this.pet.scaleY = 0,
            this.grp_btns.x = -this.grp_btns.width,
            this.grp_fight.right = -this.grp_fight.width,
            this.grp_progress.y = egret.lifecycle.stage.stageHeight,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200),
            egret.Tween.get(this.times).to({
                y: 12
            },
            200).call(function() {
                egret.Tween.get(t.pet).to({
                    scaleX: 1,
                    scaleY: 1
                },
                200).call(function() {
                    egret.Tween.get(t.grp_btns).to({
                        x: 60
                    },
                    200),
                    egret.Tween.get(t.grp_fight).to({
                        right: 27
                    },
                    200),
                    egret.Tween.get(t.grp_progress).to({
                        y: 463
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4949, 16650, 4946],
            function(i) {
                return i[2] >= 3 ? (Alarm.show("恭喜您，通过了圣灵之环•盛夏之风关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (e._value = i[0], e._fightTimes = i[1], void e.updateView())
            })
        },
        i.prototype.updateView = function() {
            return this._value >= 3e3 ? (Alarm.show("恭喜您，通过了圣灵之环•盛夏之风关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, 6 - this._fightTimes) + "/6", DisplayUtil.setEnabled(this.btnAdd, this._fightTimes >= 6), this.txt_num.text = Math.min(3e3, this._value) + "/3000", void(this._bar.value = this._value))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel3 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel3")
} (holyPuni || (holyPuni = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyPuni; !
function(t) {
    var e = function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t)
        },
        t.prototype.bind = function(t) {
            this._main = t
        },
        t.prototype.changePanel = function(t) {
            this._main.showPanel(t)
        },
        t.prototype.destroy = function() {
            this._main = null
        },
        t.MAIN_PANEL = 1,
        t.LEVEL_1 = 2,
        t.LEVEL_2 = 3,
        t.LEVEL_3 = 4,
        t.LEVEL_4 = 5,
        t.LEVEL_5 = 6,
        t.LEVEL_6 = 7,
        t
    } ();
    t.HolyPuniManager = e,
    __reflect(e.prototype, "holyPuni.HolyPuniManager")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId_0 = 1714108,
            t._itemId_1 = 1714109,
            t._showAlarm = !1,
            t.skinName = "HolyPuniLevel5Skin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(30, this, "holy_puni_level_5_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.rbg_boss = this.boss_0.group,
            this.adaptLeftContent(this.btns),
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251228, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 5],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_0,
            function() {
                BuyProductManager.buyProduct("251225_10494",
                function() {
                    t.updateData()
                },
                t, 1714108)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_1,
            function() {
                BuyProductManager.buyProduct("251226_10495",
                function() {
                    t.updateData()
                },
                t, 1714109)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_2,
            function() {
                BuyProductManager.buyProduct("251224_10491",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (t._fightTimes >= 10) return void BubblerManager.getInstance().showText("今日剩余挑战次数不足！");
                var e = ~~t.rbg_boss.selectedValue;
                return e ? void FightManager.fightNoMapBoss("", 10563 + e) : void Alarm.show("请选择要挑战的精灵")
            },
            this),
            ImageButtonUtil.add(this.btnActive,
            function() {
                ItemManager.getNumByID(t._itemId_0) && ItemManager.getNumByID(t._itemId_1) ? SocketConnection.sendByQueue(46342, [9, 0],
                function() {
                    t._showAlarm = !0,
                    t.updateData()
                }) : Alarm.show("您拥有的光明之祝或者光明之福不足哦，快去挑战获得吧！")
            },
            this),
            this.rbg_boss.addEventListener(egret.Event.CHANGE, this.updateView, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["ring_" + e].btnLock,
                function() {
                    BuyProductManager.buyProductBySocket(251227,
                    function() {
                        SocketConnection.sendByQueue(46342, [8, e + 1],
                        function() {
                            t.updateData(),
                            BubblerManager.getInstance().showText("恭喜您，将一个光明之环锁定了，被锁定的光明之环不会被熄灭！")
                        })
                    },
                    t)
                },
                i)
            },
            i = this, n = 0; 6 > n; n++) e(n)
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grpBack.y = -this.grpBack.height,
            this.grp_top.y = -this.grp_top.height,
            this.grp_ring.scaleX = this.grp_ring.scaleY = 0,
            this.btns.x = -this.btns.width,
            this.grp_fight.x = egret.lifecycle.stage.stageWidth,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200),
            egret.Tween.get(this.grp_top).to({
                y: 0
            },
            200).call(function() {
                egret.Tween.get(t.grp_ring).to({
                    scaleX: 1,
                    scaleY: 1
                },
                200).call(function() {
                    egret.Tween.get(t.btns).to({
                        x: 15
                    },
                    200),
                    egret.Tween.get(t.grp_fight).to({
                        right: 68
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4951, 4952, 16652, 4946],
            function(i) {
                return i[3] >= 5 ? (Alarm.show("恭喜您，通过了圣灵之环•光明之愿关卡！谱尼的力量变得更强大了！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (e._showAlarm && e.showAlarm(i[0]), e._lightState = i[0], e._lockState = i[1], e._fightTimes = i[2], void e.updateView())
            })
        },
        i.prototype.showAlarm = function(t) {
            for (var e = 0,
            i = 0,
            n = this._lightState,
            _ = t; n;) e++,
            n &= n - 1;
            for (; _;) i++,
            _ &= _ - 1;
            i > e ? Alarm.show("恭喜您，将2个光明之环点亮了") : e >= i && Alarm.show("抱歉，您熄灭了2处光明之环"),
            this._showAlarm = !1
        },
        i.prototype.updateView = function() {
            for (var e = this,
            i = this._lightState,
            n = 0; i;) n++,
            i &= i - 1;
            if (n >= 6) return Alarm.show("恭喜您，通过了圣灵之环•光明之愿关卡！谱尼的力量变得更强大了！"),
            void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL);
            ItemManager.updateItems([this._itemId_0, this._itemId_1],
            function() {
                e.txt_itemNum_0.text = "光明之祝：" + ItemManager.getNumByID(e._itemId_0),
                e.txt_itemNum_1.text = "光明之福：" + ItemManager.getNumByID(e._itemId_1)
            }),
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10",
            DisplayUtil.setEnabled(this.btnAdd_2, this._fightTimes >= 10);
            var _ = ~~this.rbg_boss.selectedValue;
            DisplayUtil.setEnabled(this.btnFight, !!_);
            for (var a = 0; 6 > a; a++) DisplayUtil.setEnabled(this["ring_" + a], !1, !1),
            KTool.getBit(this._lockState, a + 1) ? this["ring_" + a].currentState = "locked": KTool.getBit(this._lightState, a + 1) ? (this["ring_" + a].currentState = "light", DisplayUtil.setEnabled(this["ring_" + a], !0, !1)) : this["ring_" + a].currentState = "dark"
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.rbg_boss.removeEventListener(egret.Event.CHANGE, this.updateView, this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel5 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel5")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId = 1714140,
            t.skinName = HolyPuniLevel6Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(31, this, "holy_puni_level_6_title_png",
            function() {
                t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.btns),
            this.showAnimation(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251231, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [1, 6],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251252, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [10, 0],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_1,
            function() {
                return ItemManager.getNumByID(t._itemId) < 24 ? void Alarm.show("数量不足") : void SocketConnection.sendByQueue(46342, [12, 0],
                function() {
                    t.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._failTimes ? void Alarm.show("抱歉，您在挑战中失败了！请做好准备，明日再来参与圣灵洗礼吧！") : void FightManager.fightNoMapBoss("", 10566)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.onFightOver = function() {
            FightManager.isWin || Alarm.show("抱歉，此次进攻未能激活神圣之环的进度！请再接再厉！"),
            this.updateData()
        },
        i.prototype.showAnimation = function() {
            var t = this;
            this.grpBack.y = -this.grpBack.height,
            this.grp_level.scaleX = 0,
            this.btns.x = -this.btns.width,
            this.btnFight.right = -this.btnFight.width,
            egret.Tween.get(this.grpBack).to({
                y: 0
            },
            200).call(function() {
                egret.Tween.get(t.grp_level).to({
                    scaleX: 1
                },
                200).call(function() {
                    egret.Tween.get(t.btns).to({
                        x: 60
                    },
                    200),
                    egret.Tween.get(t.btnFight).to({
                        right: 1
                    },
                    200)
                })
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4959, 4960, 4961, 4962, 4963, 4957, 4958, 16653, 16666, 4946],
            function(i) {
                return i[9] >= 6 ? (Alarm.show("您已经通过圣灵主宰关卡，快去免费超进化你的谱尼吧！"), void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL)) : (null != e._progress && e.showAlarm(i), e._progress = i.slice(0, 7), e._fightTimes = i[7], e._failTimes = i[8], void e.updateView())
            })
        },
        i.prototype.showAlarm = function(t) {
            var e = SystemTimerManager.sysBJDate.getDay(),
            i = this._progress[e],
            n = t[e];
            n > i ? Alarm.show("恭喜您，将今日的神圣之环进度增加了1点") : Alarm.show("抱歉，此次进攻未能激活神圣之环的进度！请再接再厉！")
        },
        i.prototype.updateView = function() {
            var e = this;
            if (this._progress.reduce(function(t, e) {
                return t + e
            }) >= 49) return Alarm.show("您已经通过圣灵主宰关卡，快去免费超进化你的谱尼吧！"),
            void t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager.MAIN_PANEL);
            for (var i = SystemTimerManager.sysBJDate.getDay(), n = this._progress[i], _ = 0; 7 > _; _++) this["level_" + _].source = "holy_puni_level_6_level_" + this.getCurDay(i + _) + "_png",
            this["txt_" + _].text = this._progress[this.getCurDay(i + _)] + "/7",
            this["rate_" + _].visible = n > _;
            ItemManager.updateItems([this._itemId],
            function() {
                e.txt_itemNum.text = "圣光之灵：" + ItemManager.getNumByID(e._itemId)
            }),
            DisplayUtil.setEnabled(this.btnAdd_1, 7 > n),
            DisplayUtil.setEnabled(this.btnFight, 7 > n),
            KTool.getBitSet([1000345],
            function(t) {
                DisplayUtil.setEnabled(e.btnAdd, 7 > n && !t[0])
            })
        },
        i.prototype.getCurDay = function(t) {
            return t % 7
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i
    } (BaseModule);
    t.HolyPuniLevel6 = e,
    __reflect(e.prototype, "holyPuni.HolyPuniLevel6")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._inited = !1,
            t.skinName = HolyPuniSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(29, this, "",
            function() {
                ModuleManager.hideModule("holyPuni")
            },
            this),
            this._animation = DragonbonesUtil.createAnimate("holy_puni_skeleton_1_ske_json", "holy_puni_skeleton_1_tex_json", "holy_puni_skeleton_1_tex_png", "boxfx_01"),
            this._resize(),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFight,
            function() {
                e._levelState < 6 && t.HolyPuniManager.getInstance().changePanel(t.HolyPuniManager["LEVEL_" + (e._levelState + 1)])
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                return StatLogger.log("20210618版本系统功能", "圣灵谱尼关卡", "点击领取圣灵谱尼"),
                KTool.getBit(e._petState, 6) ? void(PetManager.isDefaultPet(300) ? SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 690],
                function() {
                    BubblerManager.getInstance().showText("进化成功！"),
                    e.updateData(),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                },
                function() {
                    e.updateData(),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime)
                }) : Alarm.show("请先将谱尼设为首发！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                })) : void Alarm.show("请先解绑刻印")
            },
            this),
            ImageButtonUtil.add(this.btnPre,
            function() {
                ModuleManager.hideModule("holyPuni"),
                ModuleManager.showModuleByID(58)
            },
            this),
            ImageButtonUtil.add(this.btnUnbind,
            function() {
                if (!PetManager.isDefaultPet(300)) return void Alarm.show("请先将谱尼放入出战背包首发",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                });
                var e = PetManager.getPetInfo(PetManager.defaultTime);
                return e.abilityMark || e.skillMark || e.commonMark ? void Alarm.show("解绑前先将谱尼的刻印卸下",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                }) : (StatLogger.log("20210618版本系统功能", "圣灵谱尼关卡", "进入刻印解绑面板"), void PopViewManager.getInstance().openView(new t.HolyPuniUnbindPop))
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20210618版本系统功能", "圣灵谱尼关卡", "进入能力提升面板"),
                PopViewManager.getInstance().openView(new t.HolyPuniPowerupPop, null, null, e)
            },
            this),
            ImageButtonUtil.add(this.btnSale,
            function() {
                return PetManager.isDefaultPet(5e3) ? (StatLogger.log("20210618版本系统功能", "圣灵谱尼关卡", "进入优惠极品面板"), void PopViewManager.getInstance().openView(new t.HolyPuniSellPop)) : void Alarm.show("请先将圣灵谱尼放入出战背包首发",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(5e3)
            },
            this),
            EventManager.addEventListener("holy_puni_unbind_success", this.updateData, this)
        },
        i.prototype._resize = function() {
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight;
            var t = egret.lifecycle.stage.stageWidth / 1136,
            e = egret.lifecycle.stage.stageHeight / 640,
            i = t > e ? t: e;
            this.bg.scaleX = i,
            this.bg.scaleY = i
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([4945, 4946],
            function(e) {
                t._petState = e[0],
                t._levelState = e[1],
                t._inited ? t.updateView() : t.showAnimation(),
                t._inited = !0
            })
        },
        i.prototype.updateView = function() {
            this.img_puni.visible = this.grp_state1.visible = !KTool.getBit(this._petState, 1),
            this.grp_state2.visible = this.flag_got.visible = !!KTool.getBit(this._petState, 1),
            this.btnGet.visible = 6 == this._levelState,
            this.btnFight.visible = 6 != this._levelState;
            for (var t = 0; 6 > t; t++) t < this._levelState ? this["level_" + t].currentState = "done": t == this._levelState ? this["level_" + t].currentState = "doing": this["level_" + t].currentState = "normal";
            this._levelState < 6 ? (this._animation.x = this["level_" + this._levelState].x + 73, this._animation.y = this["level_" + this._levelState].y + 63, this.grp_state1.addChild(this._animation), this._animation.animation.play("down", 0)) : this._animation.parent && (this._animation.animation.stop(), this._animation.parent.removeChild(this._animation), this._animation.dispose()),
            DisplayUtil.setEnabled(this.btnUnbind, !KTool.getBit(this._petState, 6) && this._levelState >= 6)
        },
        i.prototype.showAnimation = function() {
            if (this.img_puni.visible = this.grp_state1.visible = this.grp_state2.visible = this.flag_got.visible = !1, this.grpBack.y = -this.grpBack.height, egret.Tween.get(this.grpBack).to({
                y: 0
            },
            300), KTool.getBit(this._petState, 1)) {
                var t = this.grp_state2.y;
                this.grp_state2.y = egret.lifecycle.stage.stageHeight,
                this.flag_got.visible = this.grp_state2.visible = !0,
                egret.Tween.get(this.grp_state2).to({
                    y: t
                },
                300),
                this._animation.parent && (this._animation.animation.stop(), this._animation.parent.removeChild(this._animation), this._animation.dispose())
            } else {
                var t = this.grp_state1.y;
                this.grp_state1.y = egret.lifecycle.stage.stageHeight,
                this.img_puni.x = -this.img_puni.width,
                this.img_puni.visible = this.grp_state1.visible = !0,
                egret.Tween.get(this.img_puni).to({
                    x: 0
                },
                300),
                egret.Tween.get(this.grp_state1).to({
                    y: t
                },
                300),
                this.btnGet.visible = 6 == this._levelState,
                this.btnFight.visible = 6 != this._levelState,
                DisplayUtil.setEnabled(this.btnUnbind, !KTool.getBit(this._petState, 6) && this._levelState >= 6);
                for (var e = 0; 6 > e; e++) e < this._levelState ? this["level_" + e].currentState = "done": e == this._levelState ? this["level_" + e].currentState = "doing": this["level_" + e].currentState = "normal";
                this._levelState < 6 && (this._animation.x = this["level_" + this._levelState].x + 73, this._animation.y = this["level_" + this._levelState].y + 63, this.grp_state1.addChild(this._animation), this._animation.animation.play("down", 0))
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this._animation.dispose(),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("holy_puni_unbind_success", this.updateData, this)
        },
        i
    } (BaseModule);
    t.HolyPuniMain = e,
    __reflect(e.prototype, "holyPuni.HolyPuniMain")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._curPower = 0,
            e._itemId = 1714110,
            e.skinName = HolyPuniPowerupPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rbg_power = this.item_0.group,
            this.addEvent(),
            this.updateData()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnAdd_0,
            function() {
                BuyProductManager.buyProduct("251235_10493",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_1,
            function() {
                BuyProductManager.buyProduct("251236_10497",
                function() {
                    t.updateData()
                },
                t, 1714110)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "holyPuni.HolyPuniPowerupPop"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._fightTimes >= 10 ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足！") : void FightManager.fightNoMapBoss("", 10630)
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                return PetManager.isDefaultPet(5e3) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251231 + t._curPower, 1,
                    function() {
                        SocketConnection.sendByQueue(46342, [3, t._curPower],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t) : void Alert.show("请先将圣灵谱尼放入出战背包首发！",
                function() {
                    t.hide(),
                    ModuleManager.showModule("petBag", ["petBag"], {
                        type: 1,
                        clsName: "holyPuni.HolyPuniPowerupPop"
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                var e = [9, 25, 16];
                if (t._curPower) return PetManager.isDefaultPet(5e3) ? ItemManager.getNumByID(t._itemId) < e[t._curPower - 1] ? void BubblerManager.getInstance().showText("你拥有的圣灵之光数量不足！") : void SocketConnection.sendByQueue(46342, [2, t._curPower],
                function() {
                    t.updateData()
                }) : void Alert.show("请先将圣灵谱尼放入出战背包首发！",
                function() {
                    t.hide(),
                    ModuleManager.showModule("petBag", ["petBag"], {
                        type: 1,
                        clsName: "holyPuni.HolyPuniPowerupPop"
                    })
                })
            },
            this),
            this.item_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            this.item_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            this.item_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            this.rbg_power.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        e.prototype.onTouchTap = function(t) {
            if (t && t.currentTarget) switch (t.currentTarget) {
            case this.item_0:
                if (t && t.target && "itemIcon" == t.target.name) {
                    var e = {};
                    e.ins = 41022,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                }
                break;
            case this.item_1:
                t && t.target && "itemIcon" == t.target.name && ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 5e3, "", AppDoStyle.NULL);
                break;
            case this.item_2:
                if (t && t.target && "itemIcon" == t.target.name) {
                    var i = {};
                    i.id = 31143,
                    tipsPop.TipsPop.openSkillPop(i)
                }
            }
        },
        e.prototype.onChangeTab = function() {
            this._curPower = ~~this.rbg_power.selectedValue,
            this.updateView()
        },
        e.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([4945, 16654],
            function(e) {
                t._state = e[0],
                t._fightTimes = e[1],
                t.updateView()
            })
        },
        e.prototype.updateView = function() {
            var t = this;
            this.txt_fightTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes);
            var e = !!this._curPower && !KTool.getBit(this._state, 1 + this._curPower);
            DisplayUtil.setEnabled(this.btnExchange, e),
            DisplayUtil.setEnabled(this.btnOneTap, e),
            ItemManager.updateItems([this._itemId],
            function() {
                t.txt_itemNum.text = "圣灵之光：" + ItemManager.getNumByID(t._itemId)
            }),
            DisplayUtil.setEnabled(this.btnAdd_0, this._fightTimes >= 10)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            this.rbg_power.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.item_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            this.item_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this),
            this.item_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        },
        e
    } (PopView);
    t.HolyPuniPowerupPop = e,
    __reflect(e.prototype, "holyPuni.HolyPuniPowerupPop")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._curNature = 0,
            e._attrList = [0, 0, 0, 255, 0, 255],
            e._tmpAttr = [0, 0, 0, 0, 0, 0],
            e.skinName = HolyPuniSellPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.grp_study.visible = !1,
            this.addEvent(),
            this.updateView(),
            this.reset()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return PetManager.isDefaultPet(5e3) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251237, 1,
                    function() {
                        SocketConnection.sendByQueue(46312, [9, t._curNature].concat(t._attrList),
                        function() {
                            t.updateView(),
                            BubblerManager.getInstance().showText("恭喜你，你的圣灵谱尼极品成功！")
                        })
                    })
                },
                t) : void Alert.show("请将圣灵谱尼放入出战背包首发！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"], {
                        type: 1,
                        clsName: "holyPuni.HolyPuniSellPop"
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnSet_0,
            function() {
                t.showStudy()
            },
            this),
            ImageButtonUtil.add(this.btnSet_1,
            function() {
                ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                    petinfo: t._petInfo,
                    callBack: function(e) {
                        t._curNature = e,
                        t.updateView()
                    },
                    caller: t
                },
                null, AppDoStyle.NULL)
            },
            this),
            this.addStudyEvent()
        },
        e.prototype.addStudyEvent = function() {
            var t = this;
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this),
            ImageButtonUtil.add(this.img_btnReset, this.reset, this);
            for (var e = 0; 6 > e; e++) ImageButtonUtil.add(this["btnMax" + e], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnMin" + e], this.onTouchTapImageButtonHandler, this),
            ImageButtonUtil.add(this["btnPlus" + e], this.onTouchTapImageButtonHandler, this),
            this["inputTxt" + e].addEventListener(egret.Event.CHANGE, this.txtChangeHandle, this);
            ImageButtonUtil.add(this.img_btnAssign,
            function() {
                return t.totalNum < 510 ? void BubblerManager.getInstance().showText("学习力总和需要为510！") : (t._attrList = t._tmpAttr, t.txt_attr_1.visible = !1, t.txt_attr_0.text = "自定义完成", void t.hideStudy())
            },
            this)
        },
        e.prototype.updateView = function() {
            var t = this;
            this._petInfo = PetManager.getPetInfo(PetManager.getPetsById(5e3)[0].catchTime),
            100 != this._curNature && (this.txt_nature.text = NatureXMLInfo.getName(this._curNature)),
            KTool.getMultiValue([4945],
            function(e) {
                DisplayUtil.setEnabled(t.btnBuy, !KTool.getBit(e[0], 5))
            })
        },
        e.prototype.showStudy = function() {
            this.grp_study.width = egret.lifecycle.stage.stageWidth,
            this.grp_study.height = egret.lifecycle.stage.stageHeight,
            this.grp_study.scaleX = this.grp_study.scaleY = 0,
            this.grp_study.visible = !0;
            for (var t = 0; t < this._tmpAttr.length; t++) this["num" + t] = this._tmpAttr[t];
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum,
            egret.Tween.get(this.grp_study).to({
                scaleX: 1,
                scaleY: 1
            },
            150, egret.Ease.backOut)
        },
        e.prototype.hideStudy = function() {
            var t = this;
            255 == this._attrList[3] && 255 == this._attrList[5] ? this._tmpAttr = [0, 0, 0, 0, 0, 0] : this._tmpAttr = this._attrList.concat(),
            egret.Tween.get(this.grp_study).to({
                scaleX: 0,
                scaleY: 0
            },
            150, egret.Ease.backIn).call(function() {
                t.grp_study.visible = !1
            })
        },
        e.prototype.onTouchTapImageButtonHandler = function(t) {
            switch (t.target) {
            case this.btnMin0:
                this.checkInput(0, this.num0 - 1);
                break;
            case this.btnMax0:
                this.checkInput(0, 255);
                break;
            case this.btnPlus0:
                this.checkInput(0, this.num0 + 1);
                break;
            case this.btnMin1:
                this.checkInput(1, this.num1 - 1);
                break;
            case this.btnMax1:
                this.checkInput(1, 255);
                break;
            case this.btnPlus1:
                this.checkInput(1, this.num1 + 1);
                break;
            case this.btnMin2:
                this.checkInput(2, this.num2 - 1);
                break;
            case this.btnMax2:
                this.checkInput(2, 255);
                break;
            case this.btnPlus2:
                this.checkInput(2, this.num2 + 1);
                break;
            case this.btnMin3:
                this.checkInput(3, this.num3 - 1);
                break;
            case this.btnMax3:
                this.checkInput(3, 255);
                break;
            case this.btnPlus3:
                this.checkInput(3, this.num3 + 1);
                break;
            case this.btnMin4:
                this.checkInput(4, this.num4 - 1);
                break;
            case this.btnMax4:
                this.checkInput(4, 255);
                break;
            case this.btnPlus4:
                this.checkInput(4, this.num4 + 1);
                break;
            case this.btnMin5:
                this.checkInput(5, this.num5 - 1);
                break;
            case this.btnMax5:
                this.checkInput(5, 255);
                break;
            case this.btnPlus5:
                this.checkInput(5, this.num5 + 1)
            }
        },
        e.prototype.checkInput = function(t, e) {
            e = Math.min(e, 255),
            e = Math.max(0, e);
            var i = this["num" + t],
            n = e - i;
            this.totalNum + n > 510 && (e -= this.totalNum + n - 510),
            this["num" + t] = e,
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum
        },
        e.prototype.txtChangeHandle = function(t) {
            var e = t.currentTarget,
            i = t.currentTarget.name,
            n = ~~i.split("_")[1];
            this.checkInput(n, ~~e.text)
        },
        e.prototype.reset = function() {
            for (var t = 0; 6 > t; t++) this["num" + t] = 0;
            this.txt_studyNum.text = "当前学习力总和：" + this.totalNum
        },
        Object.defineProperty(e.prototype, "num0", {
            get: function() {
                return this._tmpAttr[0]
            },
            set: function(t) {
                this._tmpAttr[0] = t,
                this.inputTxt0.text = this.num0.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num1", {
            get: function() {
                return this._tmpAttr[1]
            },
            set: function(t) {
                this._tmpAttr[1] = t,
                this.inputTxt1.text = this.num1.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num2", {
            get: function() {
                return this._tmpAttr[2]
            },
            set: function(t) {
                this._tmpAttr[2] = t,
                this.inputTxt2.text = this.num2.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num3", {
            get: function() {
                return this._tmpAttr[3]
            },
            set: function(t) {
                this._tmpAttr[3] = t,
                this.inputTxt3.text = this.num3.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num4", {
            get: function() {
                return this._tmpAttr[4]
            },
            set: function(t) {
                this._tmpAttr[4] = t,
                this.inputTxt4.text = this.num4.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "num5", {
            get: function() {
                return this._tmpAttr[5]
            },
            set: function(t) {
                this._tmpAttr[5] = t,
                this.inputTxt5.text = this.num5.toString()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "totalNum", {
            get: function() {
                return this._tmpAttr.reduce(function(t, e) {
                    return t + e
                })
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideStudy, this)
        },
        e
    } (PopView);
    t.HolyPuniSellPop = e,
    __reflect(e.prototype, "holyPuni.HolyPuniSellPop")
} (holyPuni || (holyPuni = {}));
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
holyPuni; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._allMarks = [],
            t._chosenMarks = new Array(3),
            t.arr_all = new eui.ArrayCollection,
            t.arr_chosen = new eui.ArrayCollection,
            t.skinName = HolyPuniUnbindPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this);
            var i = PetManager.getPetInfo(PetManager.defaultTime);
            this._allMarks = CountermarkController.getPetBindMarks(i),
            this.list_chosen.itemRenderer = this.list_all.itemRenderer = t.HolyPuniUnbindItem,
            this.list_all.dataProvider = this.arr_all,
            this.list_chosen.dataProvider = this.arr_chosen,
            this.addEvent(),
            this.updateView()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnUnbind,
            function() {
                for (var e = [0, 0, 0], i = 0, n = 0; n < t._chosenMarks.length; n++) t._chosenMarks[n] && (e[n] = t._chosenMarks[n].obtainTime, i++);
                Alert.show("您选择了" + i + "个刻印，确认将它们从谱尼的身上免费解除绑定吗？",
                function() {
                    SocketConnection.sendByQueue(46343, [PetManager.defaultTime].concat(e),
                    function() {
                        for (var e = 0; e < t._chosenMarks.length; e++) {
                            var i = t._chosenMarks[e];
                            i && ItemManager.getCountermark(i.markID, i.markID + 1)
                        }
                        Alarm.show("你已解绑成功"),
                        t.hide(),
                        EventManager.dispatchEventWith("holy_puni_unbind_success")
                    })
                })
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["btnDel_" + e],
                function() {
                    t._chosenMarks[e] && (t._allMarks.push(t._chosenMarks[e]), t._chosenMarks[e] = null, t.updateView())
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) e(n);
            EventManager.addEventListener("holy_puni_unbind_add", this.onTouchAllList, this)
        },
        i.prototype.updateView = function() {
            for (var t = 0,
            e = this._allMarks; t < e.length; t++) {
                var i = e[t];
                i.plus = !0
            }
            for (var n = 0,
            _ = this._chosenMarks; n < _.length; n++) {
                var i = _[n];
                i && (i.plus = !1)
            }
            this._chosenMarks.sort(function(t, e) {
                return t ? -1 : 1
            }),
            this.arr_all.replaceAll(this._allMarks.slice()),
            this.arr_chosen.replaceAll(this._chosenMarks.slice());
            for (var i = 0; i < this._chosenMarks.length; i++) this["btnDel_" + i].visible = !!this._chosenMarks[i]
        },
        i.prototype.onTouchAllList = function(t) {
            for (var e = t.data,
            i = 0; i < this._chosenMarks.length; i++) if (!this._chosenMarks[i]) {
                this._chosenMarks[i] = e,
                this._allMarks.splice(this._allMarks.indexOf(e), 1);
                break
            }
            this.updateView()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("holy_puni_unbind_add", this.onTouchAllList, this)
        },
        i
    } (PopView);
    t.HolyPuniUnbindPop = e,
    __reflect(e.prototype, "holyPuni.HolyPuniUnbindPop")
} (holyPuni || (holyPuni = {}));
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
generateEUI.paths["resource/eui_skins/HolyPuniLevel1Skin.exml"] = window.HolyPuniLevel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "grp_bubble", "item_0", "item_1", "item_2", "item_3", "btnGo", "btnSummit", "grp_item", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.pet_i(), this.grp_bubble_i(), this.grp_item_i(), this.btns_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 246,
            t.source = "holy_puni_level_1_item_0_png",
            t.width = 152,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 218,
            t.source = "holy_puni_level_1_flag_done_png",
            t.width = 124,
            t.x = 14,
            t.y = 14,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 345,
            t.source = "holy_puni_level_1_flag_selected_png",
            t.width = 146,
            t.x = 3,
            t.y = -54,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 246,
            t.source = "holy_puni_level_1_item_1_png",
            t.width = 152,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 218,
            t.source = "holy_puni_level_1_flag_done_png",
            t.width = 124,
            t.x = 14,
            t.y = 14,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 345,
            t.source = "holy_puni_level_1_flag_selected_png",
            t.width = 146,
            t.x = 3,
            t.y = -54,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 246,
            t.source = "holy_puni_level_1_item_2_png",
            t.width = 152,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 218,
            t.source = "holy_puni_level_1_flag_done_png",
            t.width = 124,
            t.x = 14,
            t.y = 14,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 345,
            t.source = "holy_puni_level_1_flag_selected_png",
            t.width = 146,
            t.x = 3,
            t.y = -54,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 246,
            t.source = "holy_puni_level_1_item_3_png",
            t.width = 152,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 218,
            t.source = "holy_puni_level_1_flag_done_png",
            t.width = 124,
            t.x = 14,
            t.y = 14,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 345,
            t.source = "holy_puni_level_1_flag_selected_png",
            t.width = 146,
            t.x = 3,
            t.y = -54,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 443,
        t.source = "holy_puni_level_1_pet_png",
        t.width = 306,
        t.x = 66,
        t.y = 163,
        t
    },
    r.grp_bubble_i = function() {
        var t = new eui.Group;
        return this.grp_bubble = t,
        t.horizontalCenter = -285.5,
        t.y = 80,
        t.elementsContent = [this._Image2_i(), this.txt_0_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 105,
        t.source = "holy_puni_level_1_bubbleBg_png",
        t.width = 375,
        t.x = 0,
        t.y = 0,
        t
    },
    r.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 24,
        t.text = "小赛尔，你将会为圣灵联军，\n奉上怎样的帮助呢？",
        t.textAlign = "center",
        t.textColor = 9846282,
        t.touchEnabled = !1,
        t.x = 28,
        t.y = 17,
        t
    },
    r.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 24,
        t.text = "小赛尔，感谢你的赛尔豆！\n圣灵联军因你而更加强大！",
        t.textAlign = "center",
        t.textColor = 9781003,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 40,
        t.y = 17,
        t
    },
    r.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 24,
        t.text = "小赛尔，谢谢你的泰坦之灵，\n我们因此装备精良！",
        t.textAlign = "center",
        t.textColor = 9781003,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 28,
        t.y = 17,
        t
    },
    r.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 24,
        t.text = "小赛尔，你的祝福，\n将会使我们的战争更加顺利！",
        t.textAlign = "center",
        t.textColor = 9781003,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 28,
        t.y = 17,
        t
    },
    r.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 6,
        t.size = 24,
        t.text = "小赛尔，与你一同作战，\n是我们最大的荣耀！",
        t.textAlign = "center",
        t.textColor = 9781003,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 53,
        t.y = 17,
        t
    },
    r.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 459,
        t.y = 181,
        t.elementsContent = [this.item_0_i(), this.item_1_i(), this.item_2_i(), this.item_3_i(), this.btnGo_i(), this.btnSummit_i()],
        t
    },
    r.item_0_i = function() {
        var t = new eui.Component;
        return this.item_0 = t,
        t.height = 246,
        t.width = 152,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.item_1_i = function() {
        var t = new eui.Component;
        return this.item_1 = t,
        t.height = 246,
        t.width = 152,
        t.x = 150,
        t.y = 0,
        t.skinName = n,
        t
    },
    r.item_2_i = function() {
        var t = new eui.Component;
        return this.item_2 = t,
        t.height = 246,
        t.width = 152,
        t.x = 301,
        t.y = 0,
        t.skinName = _,
        t
    },
    r.item_3_i = function() {
        var t = new eui.Component;
        return this.item_3 = t,
        t.height = 246,
        t.width = 152,
        t.x = 451,
        t.y = 0,
        t.skinName = a,
        t
    },
    r.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 40,
        t.source = "holy_puni_level_1_btnGo_png",
        t.width = 120,
        t.x = 468,
        t.y = 239,
        t
    },
    r.btnSummit_i = function() {
        var t = new eui.Image;
        return this.btnSummit = t,
        t.height = 77,
        t.source = "holy_puni_level_1_btnSummit_png",
        t.width = 275,
        t.x = 179,
        t.y = 331,
        t
    },
    r.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    r.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    r.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniLevel2Skin.exml"] = window.HolyPuniLevel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["label", "txt_bossName", "bossName", "btnFight", "btnDefeat", "grp_info", "btnAdd", "txt_leftTimes", "grp_times", "boss_0", "boss_1", "boss_2", "grp_boss", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_info_i(), this.grp_times_i(), this.grp_boss_i(), this.btns_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 493,
            t.source = "holy_puni_level_2_boss_0_png",
            t.width = 175,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 493,
            t.source = "holy_puni_level_2_flag_beated_png",
            t.width = 175,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 531,
            t.source = "holy_puni_level_2_flag_selected_png",
            t.width = 213,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 493,
            t.source = "holy_puni_level_2_boss_1_png",
            t.width = 175,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 493,
            t.source = "holy_puni_level_2_flag_beated_png",
            t.width = 175,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 531,
            t.source = "holy_puni_level_2_flag_selected_png",
            t.width = 213,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 493,
            t.source = "holy_puni_level_2_boss_2_png",
            t.width = 175,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 493,
            t.source = "holy_puni_level_2_flag_beated_png",
            t.width = 175,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 531,
            t.source = "holy_puni_level_2_flag_selected_png",
            t.width = 213,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a.grp_info_i = function() {
        var t = new eui.Group;
        return this.grp_info = t,
        t.x = 826,
        t.y = 160,
        t.elementsContent = [this.label_i(), this.bossName_i(), this.btnFight_i(), this.btnDefeat_i()],
        t
    },
    a.label_i = function() {
        var t = new eui.Image;
        return this.label = t,
        t.height = 95,
        t.source = "holy_puni_level_2_label_png",
        t.width = 200,
        t.x = 30,
        t.y = 0,
        t
    },
    a.bossName_i = function() {
        var t = new eui.Group;
        return this.bossName = t,
        t.x = 0,
        t.y = 118,
        t.elementsContent = [this._Image2_i(), this.txt_bossName_i()],
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 109,
        t.source = "holy_puni_level_2_nameBg_png",
        t.width = 261,
        t.x = 0,
        t.y = 0,
        t
    },
    a.txt_bossName_i = function() {
        var t = new eui.Label;
        return this.txt_bossName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 30,
        t.text = "肯扎特",
        t.textColor = 16706929,
        t.touchEnabled = !1,
        t.x = 82,
        t.y = 48,
        t
    },
    a.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnFight_png",
        t.width = 275,
        t.x = 8,
        t.y = 266,
        t
    },
    a.btnDefeat_i = function() {
        var t = new eui.Image;
        return this.btnDefeat = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnDefeat_png",
        t.width = 275,
        t.x = 8,
        t.y = 352,
        t
    },
    a.grp_times_i = function() {
        var t = new eui.Group;
        return this.grp_times = t,
        t.right = 22,
        t.width = 263,
        t.y = 12,
        t.elementsContent = [this._Image3_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_2_timeBg_png",
        t.width = 233,
        t.x = 0,
        t.y = 1,
        t
    },
    a.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 227,
        t.y = 0,
        t
    },
    a.txt_leftTimes_i = function() {
        var t = new eui.Label;
        return this.txt_leftTimes = t,
        t.horizontalCenter = -15.5,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日剩余挑战次数：10/10",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.y = 9,
        t
    },
    a.grp_boss_i = function() {
        var t = new eui.Group;
        return this.grp_boss = t,
        t.x = 173,
        t.y = 87,
        t.elementsContent = [this.boss_0_i(), this.boss_1_i(), this.boss_2_i()],
        t
    },
    a.boss_0_i = function() {
        var t = new eui.RadioButton;
        return this.boss_0 = t,
        t.groupName = "holy_puni_level_2",
        t.height = 493,
        t.value = "1",
        t.width = 175,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    a.boss_1_i = function() {
        var t = new eui.RadioButton;
        return this.boss_1 = t,
        t.groupName = "holy_puni_level_2",
        t.height = 493,
        t.value = "2",
        t.width = 175,
        t.x = 203,
        t.y = 0,
        t.skinName = n,
        t
    },
    a.boss_2_i = function() {
        var t = new eui.RadioButton;
        return this.boss_2 = t,
        t.groupName = "holy_puni_level_2",
        t.height = 493,
        t.value = "3",
        t.width = 175,
        t.x = 405,
        t.y = 0,
        t.skinName = _,
        t
    },
    a.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    a.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    a.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    a.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniLevel3Skin.exml"] = window.HolyPuniLevel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "_bar", "txt_num", "grp_progress", "btnAdd", "txt_leftTimes", "times", "btnFight", "btnDefeat", "grp_fight", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "grp_btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.pet_i(), this.grp_progress_i(), this.times_i(), this.grp_fight_i(), this.grp_btns_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 27,
            t.source = "holy_puni_level_3_ratebg_s9_png",
            t.width = 682,
            t.x = 0,
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 11,
            t.source = "holy_puni_level_3_rate_s9_png",
            t.width = 666,
            t.x = 8,
            t.y = 8,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 553,
        t.horizontalCenter = -38,
        t.source = "holy_puni_level_3_pet_png",
        t.verticalCenter = 2.5,
        t.width = 720,
        t
    },
    n.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.horizontalCenter = -88,
        t.y = 463,
        t.elementsContent = [this._bar_i(), this._Image2_i(), this._Label1_i(), this.txt_num_i(), this._Image3_i()],
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 27,
        t.maximum = 3e3,
        t.width = 682,
        t.x = 0,
        t.y = 97,
        t.skinName = i,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 65,
        t.source = "holy_puni_level_3_light_png",
        t.width = 137,
        t.x = 1,
        t.y = 50,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 26,
        t.text = "圣灵之力：",
        t.textColor = 16246129,
        t.touchEnabled = !1,
        t.x = 6,
        t.y = 69,
        t
    },
    n.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.lineSpacing = 3,
        t.size = 30,
        t.text = "2000/3000",
        t.textColor = 16245874,
        t.touchEnabled = !1,
        t.x = 141,
        t.y = 69,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_puni_level_3_tips_png",
        t.width = 548,
        t.x = 6,
        t.y = 0,
        t
    },
    n.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.right = 22,
        t.width = 263,
        t.y = 12,
        t.elementsContent = [this._Image4_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_2_timeBg_png",
        t.width = 233,
        t.x = 0,
        t.y = 1,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 227,
        t.y = 0,
        t
    },
    n.txt_leftTimes_i = function() {
        var t = new eui.Label;
        return this.txt_leftTimes = t,
        t.horizontalCenter = -16.5,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日剩余挑战次数：10/10",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.y = 9,
        t
    },
    n.grp_fight_i = function() {
        var t = new eui.Group;
        return this.grp_fight = t,
        t.x = 834,
        t.y = 427,
        t.elementsContent = [this.btnFight_i(), this.btnDefeat_i()],
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnFight_png",
        t.width = 275,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnDefeat_i = function() {
        var t = new eui.Image;
        return this.btnDefeat = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnDefeat_png",
        t.width = 275,
        t.x = 0,
        t.y = 86,
        t
    },
    n.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniLevel4Skin.exml"] = window.HolyPuniLevel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_fightTitle", "txt_fightInfo", "grp_bossInfo", "btnFight", "btnDefeat", "grp_fightInfo", "boss_0", "boss_1", "boss_2", "boss_3", "grp_boss", "btnAdd", "txt_leftTimes", "grp_times", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_fightInfo_i(), this.grp_boss_i(), this._Image5_i(), this.grp_times_i(), this.btns_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 435,
            t.source = "holy_puni_level_4_boss_0_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 435,
            t.source = "holy_puni_level_4_flag_beated_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 473,
            t.source = "holy_puni_level_4_flag_selected_png",
            t.width = 186,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 435,
            t.source = "holy_puni_level_4_boss_1_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 435,
            t.source = "holy_puni_level_4_flag_beated_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 473,
            t.source = "holy_puni_level_4_flag_selected_png",
            t.width = 186,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 435,
            t.source = "holy_puni_level_4_boss_2_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 435,
            t.source = "holy_puni_level_4_flag_beated_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 473,
            t.source = "holy_puni_level_4_flag_selected_png",
            t.width = 186,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image3", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 435,
            t.source = "holy_puni_level_4_boss_3_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 435,
            t.source = "holy_puni_level_4_flag_beated_png",
            t.width = 148,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 473,
            t.source = "holy_puni_level_4_flag_selected_png",
            t.width = 186,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r.grp_fightInfo_i = function() {
        var t = new eui.Group;
        return this.grp_fightInfo = t,
        t.x = 834,
        t.y = 130,
        t.elementsContent = [this.grp_bossInfo_i(), this._Image4_i(), this.btnFight_i(), this.btnDefeat_i()],
        t
    },
    r.grp_bossInfo_i = function() {
        var t = new eui.Group;
        return this.grp_bossInfo = t,
        t.x = 21,
        t.y = 162,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.txt_fightTitle_i(), this.txt_fightInfo_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_level_4_line_png",
        t.width = 201,
        t.x = 0,
        t.y = 32,
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 92,
        t.source = "holy_puni_level_4_light_png",
        t.width = 206,
        t.x = 2,
        t.y = 17,
        t
    },
    r.txt_fightTitle_i = function() {
        var t = new eui.Label;
        return this.txt_fightTitle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 26,
        t.text = "精灵王者",
        t.textColor = 16772209,
        t.touchEnabled = !1,
        t.x = 46,
        t.y = 0,
        t
    },
    r.txt_fightInfo_i = function() {
        var t = new eui.Label;
        return this.txt_fightInfo = t,
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "单次最高伤害超过\n1000",
        t.textAlign = "center",
        t.textColor = 16706929,
        t.touchEnabled = !1,
        t.width = 192,
        t.x = 6,
        t.y = 45,
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 152,
        t.source = "holy_puni_level_4_icon_png",
        t.width = 152,
        t.x = 45,
        t.y = 0,
        t
    },
    r.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnFight_png",
        t.width = 275,
        t.x = 0,
        t.y = 296,
        t
    },
    r.btnDefeat_i = function() {
        var t = new eui.Image;
        return this.btnDefeat = t,
        t.height = 77,
        t.source = "holy_puni_level_2_btnDefeat_png",
        t.width = 275,
        t.x = 0,
        t.y = 382,
        t
    },
    r.grp_boss_i = function() {
        var t = new eui.Group;
        return this.grp_boss = t,
        t.x = 148,
        t.y = 145,
        t.elementsContent = [this.boss_0_i(), this.boss_1_i(), this.boss_2_i(), this.boss_3_i()],
        t
    },
    r.boss_0_i = function() {
        var t = new eui.RadioButton;
        return this.boss_0 = t,
        t.groupName = "holy_puni_level_4",
        t.height = 435,
        t.value = "1",
        t.width = 148,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.boss_1_i = function() {
        var t = new eui.RadioButton;
        return this.boss_1 = t,
        t.groupName = "holy_puni_level_4",
        t.height = 435,
        t.value = "2",
        t.width = 148,
        t.x = 161,
        t.y = 0,
        t.skinName = n,
        t
    },
    r.boss_2_i = function() {
        var t = new eui.RadioButton;
        return this.boss_2 = t,
        t.groupName = "holy_puni_level_4",
        t.height = 435,
        t.value = "3",
        t.width = 148,
        t.x = 322,
        t.y = 0,
        t.skinName = _,
        t
    },
    r.boss_3_i = function() {
        var t = new eui.RadioButton;
        return this.boss_3 = t,
        t.groupName = "holy_puni_level_4",
        t.height = 435,
        t.value = "4",
        t.width = 148,
        t.x = 483,
        t.y = 0,
        t.skinName = a,
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 56,
        t.horizontalCenter = -104,
        t.source = "holy_puni_level_4_tips_png",
        t.width = 630,
        t.y = 69,
        t
    },
    r.grp_times_i = function() {
        var t = new eui.Group;
        return this.grp_times = t,
        t.right = 22,
        t.y = 12,
        t.elementsContent = [this._Image6_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        t
    },
    r._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_2_timeBg_png",
        t.width = 233,
        t.x = 0,
        t.y = 1,
        t
    },
    r.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 217,
        t.y = 0,
        t
    },
    r.txt_leftTimes_i = function() {
        var t = new eui.Label;
        return this.txt_leftTimes = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日剩余挑战次数：4/5",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 13,
        t.y = 9,
        t
    },
    r.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    r.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    r.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniLevel5Skin.exml"] = window.HolyPuniLevel5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnAdd_1", "txt_itemNum_1", "btnAdd_0", "txt_itemNum_0", "btnAdd_2", "txt_leftTimes", "grp_top", "ring_0", "ring_1", "ring_2", "ring_3", "ring_4", "ring_5", "btnActive", "grp_ring", "boss_0", "boss_1", "btnFight", "grp_fight", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_top_i(), this.grp_ring_i(), this.grp_fight_i(), this.btns_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["btnLock"],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.btnLock_i(),
            this._Image3_i(),
            this.states = [new eui.State("dark", [new eui.SetProperty("_Image2", "visible", !0), new eui.SetProperty("_Image3", "visible", !0)]), new eui.State("light", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("btnLock", "", 1, "")]), new eui.State("locked", [new eui.AddItems("_Image2", "", 1, ""), new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 93,
            t.source = "holy_puni_level_5_ringdark_png",
            t.width = 89,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 106,
            t.source = "holy_puni_level_5_ringlight_png",
            t.width = 108,
            t.x = -9,
            t.y = -6,
            t
        },
        i.btnLock_i = function() {
            var t = new eui.Image;
            return this.btnLock = t,
            t.source = "holy_puni_level_5_ringbtnlock_png",
            t.x = 21,
            t.y = 68,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 43,
            t.source = "holy_puni_level_5_ringlocked_png",
            t.width = 97,
            t.x = -4,
            t.y = 27,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 342,
            t.source = "holy_puni_level_5_boss_0_png",
            t.width = 197,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 380,
            t.source = "holy_puni_level_5_flag_selected_png",
            t.width = 235,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    u = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image2", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 342,
            t.source = "holy_puni_level_5_boss_1_png",
            t.width = 197,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 380,
            t.source = "holy_puni_level_5_flag_selected_png",
            t.width = 235,
            t.x = -19,
            t.y = -19,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    h.grp_top_i = function() {
        var t = new eui.Group;
        return this.grp_top = t,
        t.horizontalCenter = 0,
        t.percentWidth = 100,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        t
    },
    h._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 281,
        t.y = 11,
        t.elementsContent = [this._Image2_i(), this.btnAdd_1_i(), this.txt_itemNum_1_i(), this._Image3_i()],
        t
    },
    h._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_5_itemBg_png",
        t.width = 173,
        t.x = 0,
        t.y = 2,
        t
    },
    h.btnAdd_1_i = function() {
        var t = new eui.Image;
        return this.btnAdd_1 = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 157,
        t.y = 1,
        t
    },
    h.txt_itemNum_1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_1 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "光明之福：66",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 40,
        t.y = 10,
        t
    },
    h._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "holy_puni_level_5_icon_1_png",
        t.width = 30,
        t.x = 8,
        t.y = 0,
        t
    },
    h._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 483,
        t.y = 10,
        t.elementsContent = [this._Image4_i(), this.btnAdd_0_i(), this.txt_itemNum_0_i(), this._Image5_i()],
        t
    },
    h._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_5_itemBg_png",
        t.width = 173,
        t.x = 0,
        t.y = 3,
        t
    },
    h.btnAdd_0_i = function() {
        var t = new eui.Image;
        return this.btnAdd_0 = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 157,
        t.y = 2,
        t
    },
    h.txt_itemNum_0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_0 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "光明之祝：66",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 40,
        t.y = 11,
        t
    },
    h._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "holy_puni_level_5_icon_0_png",
        t.width = 33,
        t.x = 4,
        t.y = 0,
        t
    },
    h._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 20,
        t.y = 12,
        t.elementsContent = [this._Image6_i(), this.btnAdd_2_i(), this.txt_leftTimes_i()],
        t
    },
    h._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_5_numbg_png",
        t.width = 222,
        t.x = 0,
        t.y = 1,
        t
    },
    h.btnAdd_2_i = function() {
        var t = new eui.Image;
        return this.btnAdd_2 = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 216,
        t.y = 0,
        t
    },
    h.txt_leftTimes_i = function() {
        var t = new eui.Label;
        return this.txt_leftTimes = t,
        t.horizontalCenter = -17,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日剩余挑战次数：10/10",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.y = 9,
        t
    },
    h.grp_ring_i = function() {
        var t = new eui.Group;
        return this.grp_ring = t,
        t.horizontalCenter = -185.5,
        t.verticalCenter = 25.5,
        t.elementsContent = [this._Image7_i(), this.ring_0_i(), this.ring_1_i(), this.ring_2_i(), this.ring_3_i(), this.ring_4_i(), this.ring_5_i(), this.btnActive_i()],
        t
    },
    h._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 368,
        t.source = "holy_puni_level_5_ringBg_png",
        t.width = 328,
        t.x = 8,
        t.y = 9,
        t
    },
    h.ring_0_i = function() {
        var t = new eui.Component;
        return this.ring_0 = t,
        t.height = 93,
        t.name = "ring_1",
        t.width = 89,
        t.x = 129,
        t.y = 0,
        t.skinName = i,
        t
    },
    h.ring_1_i = function() {
        var t = new eui.Component;
        return this.ring_1 = t,
        t.height = 93,
        t.name = "ring_2",
        t.width = 89,
        t.x = 1,
        t.y = 76,
        t.skinName = n,
        t
    },
    h.ring_2_i = function() {
        var t = new eui.Component;
        return this.ring_2 = t,
        t.height = 93,
        t.name = "ring_3",
        t.width = 89,
        t.x = 248,
        t.y = 76,
        t.skinName = _,
        t
    },
    h.ring_3_i = function() {
        var t = new eui.Component;
        return this.ring_3 = t,
        t.height = 93,
        t.name = "ring_4",
        t.visible = !0,
        t.width = 89,
        t.x = 248,
        t.y = 218,
        t.skinName = a,
        t
    },
    h.ring_4_i = function() {
        var t = new eui.Component;
        return this.ring_4 = t,
        t.height = 93,
        t.name = "ring_5",
        t.width = 89,
        t.x = 0,
        t.y = 218,
        t.skinName = r,
        t
    },
    h.ring_5_i = function() {
        var t = new eui.Component;
        return this.ring_5 = t,
        t.height = 93,
        t.name = "ring_6",
        t.width = 89,
        t.x = 129,
        t.y = 289,
        t.skinName = o,
        t
    },
    h.btnActive_i = function() {
        var t = new eui.Image;
        return this.btnActive = t,
        t.height = 52,
        t.source = "holy_puni_level_5_btnActive_png",
        t.width = 176,
        t.x = 85,
        t.y = 415,
        t
    },
    h.grp_fight_i = function() {
        var t = new eui.Group;
        return this.grp_fight = t,
        t.x = 654,
        t.y = 125,
        t.elementsContent = [this.boss_0_i(), this.boss_1_i(), this.btnFight_i()],
        t
    },
    h.boss_0_i = function() {
        var t = new eui.RadioButton;
        return this.boss_0 = t,
        t.groupName = "holy_puni_level_5",
        t.height = 342,
        t.value = "1",
        t.width = 197,
        t.x = 0,
        t.y = 0,
        t.skinName = s,
        t
    },
    h.boss_1_i = function() {
        var t = new eui.RadioButton;
        return this.boss_1 = t,
        t.groupName = "holy_puni_level_5",
        t.height = 342,
        t.value = "2",
        t.width = 197,
        t.x = 217,
        t.y = 0,
        t.skinName = u,
        t
    },
    h.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 77,
        t.source = "holy_puni_level_5_btnFight_png",
        t.width = 275,
        t.x = 86,
        t.y = 386,
        t
    },
    h.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    h.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    h.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    h.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniLevel6Skin.exml"] = window.HolyPuniLevel6Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["level_1", "level_2", "level_3", "level_4", "level_5", "level_6", "level_0", "txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "txt_6", "rate_6", "rate_5", "rate_4", "rate_3", "rate_2", "rate_1", "rate_0", "btnAdd", "grp_level", "btnFight", "btnOneTap", "imgBtn_pet", "imgBtn_cure", "btnAdd_1", "txt_itemNum", "times", "btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.grp_level_i(), this.btnFight_i(), this.btns_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "holy_puni_level_1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.horizontalCenter = 0,
        t.source = "holy_puni_level_6_puni_png",
        t.width = 1136,
        t.y = 0,
        t
    },
    i.grp_level_i = function() {
        var t = new eui.Group;
        return this.grp_level = t,
        t.horizontalCenter = 17.5,
        t.y = 279,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Group1_i(), this._Group2_i(), this.btnAdd_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "holy_puni_level_6_label_png",
        t.width = 134,
        t.x = 413,
        t.y = 266,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "holy_puni_level_6_line_png",
        t.width = 297,
        t.x = 332,
        t.y = 265,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.level_1_i(), this.level_2_i(), this.level_3_i(), this.level_4_i(), this.level_5_i(), this.level_6_i(), this.level_0_i(), this.txt_0_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i(), this.txt_6_i()],
        t
    },
    i.level_1_i = function() {
        var t = new eui.Image;
        return this.level_1 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_1_png",
        t.width = 131,
        t.x = 595,
        t.y = 64,
        t
    },
    i.level_2_i = function() {
        var t = new eui.Image;
        return this.level_2 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_2_png",
        t.width = 131,
        t.x = 715,
        t.y = 64,
        t
    },
    i.level_3_i = function() {
        var t = new eui.Image;
        return this.level_3 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_3_png",
        t.width = 131,
        t.x = 836,
        t.y = 64,
        t
    },
    i.level_4_i = function() {
        var t = new eui.Image;
        return this.level_4 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_4_png",
        t.width = 131,
        t.x = 0,
        t.y = 64,
        t
    },
    i.level_5_i = function() {
        var t = new eui.Image;
        return this.level_5 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_5_png",
        t.width = 131,
        t.x = 120,
        t.y = 64,
        t
    },
    i.level_6_i = function() {
        var t = new eui.Image;
        return this.level_6 = t,
        t.height = 124,
        t.source = "holy_puni_level_6_level_6_png",
        t.width = 131,
        t.x = 241,
        t.y = 64,
        t
    },
    i.level_0_i = function() {
        var t = new eui.Image;
        return this.level_0 = t,
        t.height = 248,
        t.source = "holy_puni_level_6_level_0_png",
        t.width = 262,
        t.x = 354,
        t.y = 0,
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 462,
        t.y = 193,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 646,
        t.y = 159,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 766,
        t.y = 159,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 887,
        t.y = 159,
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 50,
        t.y = 159,
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 170,
        t.y = 159,
        t
    },
    i.txt_6_i = function() {
        var t = new eui.Label;
        return this.txt_6 = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "1/7",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 291,
        t.y = 159,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 374,
        t.y = 227,
        t.elementsContent = [this._Image5_i(), this.rate_6_i(), this.rate_5_i(), this.rate_4_i(), this.rate_3_i(), this.rate_2_i(), this.rate_1_i(), this.rate_0_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 13,
        t.source = "holy_puni_level_6_rateBg_png",
        t.width = 206,
        t.x = 3,
        t.y = 3,
        t
    },
    i.rate_6_i = function() {
        var t = new eui.Image;
        return this.rate_6 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 180,
        t.y = 0,
        t
    },
    i.rate_5_i = function() {
        var t = new eui.Image;
        return this.rate_5 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 150,
        t.y = 0,
        t
    },
    i.rate_4_i = function() {
        var t = new eui.Image;
        return this.rate_4 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 120,
        t.y = 0,
        t
    },
    i.rate_3_i = function() {
        var t = new eui.Image;
        return this.rate_3 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 90,
        t.y = 0,
        t
    },
    i.rate_2_i = function() {
        var t = new eui.Image;
        return this.rate_2 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 60,
        t.y = 0,
        t
    },
    i.rate_1_i = function() {
        var t = new eui.Image;
        return this.rate_1 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 30,
        t.y = 0,
        t
    },
    i.rate_0_i = function() {
        var t = new eui.Image;
        return this.rate_0 = t,
        t.height = 19,
        t.source = "holy_puni_level_6_rate_png",
        t.width = 32,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 595,
        t.y = 219,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 77,
        t.source = "holy_puni_level_5_btnFight_png",
        t.width = 275,
        t.x = 860,
        t.y = 519,
        t
    },
    i.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 15,
        t.y = 245,
        t.elementsContent = [this.btnOneTap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.times_i()],
        t
    },
    i.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 102,
        t.source = "holy_puni_level_1_btnOneTap_png",
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 20,
        t.y = 207,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 20,
        t.y = 275,
        t
    },
    i.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 8.999999999999972,
        t.y = -130,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnAdd_1_i(), this.txt_itemNum_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_level_6_numbg_png",
        t.width = 169,
        t.x = 69,
        t.y = 26,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.right = 0,
        t.source = "holy_puni_level_6_item_png",
        t.width = 22,
        t.y = 26,
        t
    },
    i.btnAdd_1_i = function() {
        var t = new eui.Image;
        return this.btnAdd_1 = t,
        t.source = "holy_puni_level_6_imgcompose_png",
        t.y = 1,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "神圣之灵：66",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 89,
        t.y = 33,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniPowerupPopSkin.exml"] = window.HolyPuniPowerupPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "item_0", "item_1", "item_2", "btnAdd_0", "txt_fightTimes", "btnAdd_1", "txt_itemNum", "imgBtn_pet", "imgBtn_cure", "btnExchange", "btnOneTap", "btnFight"],
        this.height = 472,
        this.width = 868,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.item_0_i(), this.item_1_i(), this.item_2_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this.btnExchange_i(), this.btnOneTap_i(), this.btnFight_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Image3_i()],
            this._Image4_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image4", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image4", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 189,
            t.source = "holy_puni_powerup_pop_itemBg_png",
            t.width = 122,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 51,
            t.name = "itemIcon",
            t.source = "holy_puni_powerup_pop_41022_png",
            t.width = 54,
            t.x = 35,
            t.y = 63,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return t.lineSpacing = 3,
            t.size = 20,
            t.text = "x9",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 67,
            t.y = 148,
            t
        },
        i._Label2_i = function() {
            var t = new eui.Label;
            return t.fontFamily = "HuaKangXinZongYi",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "专属刻印",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 22,
            t.y = 18,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return t.height = 30,
            t.source = "holy_puni_powerup_pop_itemIcon_png",
            t.width = 26,
            t.x = 36,
            t.y = 141,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 180,
            t.source = "holy_puni_powerup_pop_flag_selected_png",
            t.touchEnabled = !1,
            t.width = 112,
            t.x = 5,
            t.y = 4,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this._Label2_i()],
            this._Image4_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image4", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image4", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 189,
            t.source = "holy_puni_powerup_pop_itemBg_png",
            t.width = 122,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return t.lineSpacing = 3,
            t.size = 20,
            t.text = "x25",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 62,
            t.y = 148,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 30,
            t.source = "holy_puni_powerup_pop_itemIcon_png",
            t.width = 26,
            t.x = 31,
            t.y = 141,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.name = "itemIcon",
            t.source = "holy_puni_powerup_pop_icon_texing_png",
            t.width = 44,
            t.x = 39,
            t.y = 64,
            t
        },
        i._Label2_i = function() {
            var t = new eui.Label;
            return t.fontFamily = "HuaKangXinZongYi",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "专属特性",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 22,
            t.y = 18,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 180,
            t.source = "holy_puni_powerup_pop_flag_selected_png",
            t.touchEnabled = !1,
            t.width = 112,
            t.x = 5,
            t.y = 4,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this._Label2_i()],
            this._Image4_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image4", "", 1, "")]), new eui.State("disabled", [new eui.AddItems("_Image4", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 189,
            t.source = "holy_puni_powerup_pop_itemBg_png",
            t.width = 122,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return t.lineSpacing = 3,
            t.size = 20,
            t.text = "x16",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 62,
            t.y = 148,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 30,
            t.source = "holy_puni_powerup_pop_itemIcon_png",
            t.width = 26,
            t.x = 31,
            t.y = 141,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return t.height = 48,
            t.name = "itemIcon",
            t.source = "holy_puni_powerup_pop_icon_1_png",
            t.width = 45,
            t.x = 38,
            t.y = 66,
            t
        },
        i._Label2_i = function() {
            var t = new eui.Label;
            return t.fontFamily = "HuaKangXinZongYi",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "第五技能",
            t.textColor = 16774339,
            t.touchEnabled = !1,
            t.x = 22,
            t.y = 19,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 180,
            t.source = "holy_puni_powerup_pop_flag_selected_png",
            t.touchEnabled = !1,
            t.width = 112,
            t.x = 5,
            t.y = 4,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 453,
        t.source = "holy_puni_powerup_pop_bg_png",
        t.width = 783,
        t.x = 72,
        t.y = 19,
        t
    },
    a.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "holy_puni_unbind_pop_btnClose_png",
        t.width = 54,
        t.x = 814,
        t.y = 0,
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 403,
        t.source = "holy_puni_powerup_pop_pet_png",
        t.width = 433,
        t.x = 78,
        t.y = 62,
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "holy_puni_powerup_pop_title_png",
        t.width = 148,
        t.x = 568,
        t.y = 24,
        t
    },
    a._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 4,
        t.size = 20,
        t.text = "挑战圣灵谱尼获得圣灵之光，圣灵之光\n可以用来兑换圣灵谱尼的专属能力提升",
        t.textColor = 15588743,
        t.touchEnabled = !1,
        t.x = 470,
        t.y = 96,
        t
    },
    a.item_0_i = function() {
        var t = new eui.RadioButton;
        return this.item_0 = t,
        t.groupName = "holy_puni_powerup",
        t.height = 189,
        t.touchChildren = !0,
        t.value = "1",
        t.width = 122,
        t.x = 460,
        t.y = 155,
        t.skinName = i,
        t
    },
    a.item_1_i = function() {
        var t = new eui.RadioButton;
        return this.item_1 = t,
        t.groupName = "holy_puni_powerup",
        t.height = 189,
        t.touchChildren = !0,
        t.value = "2",
        t.width = 122,
        t.x = 581,
        t.y = 155,
        t.skinName = n,
        t
    },
    a.item_2_i = function() {
        var t = new eui.RadioButton;
        return this.item_2 = t,
        t.groupName = "holy_puni_powerup",
        t.height = 189,
        t.touchChildren = !0,
        t.value = "3",
        t.width = 122,
        t.x = 702,
        t.y = 155,
        t.skinName = _,
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 139,
        t.y = 39,
        t.elementsContent = [this._Image4_i(), this.btnAdd_0_i(), this.txt_fightTimes_i()],
        t
    },
    a._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_powerup_pop_numbg_png",
        t.width = 214,
        t.x = 0,
        t.y = 1,
        t
    },
    a.btnAdd_0_i = function() {
        var t = new eui.Image;
        return this.btnAdd_0 = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 198,
        t.y = 0,
        t
    },
    a.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日剩余挑战次数：6",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 9,
        t.y = 9,
        t
    },
    a._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 506,
        t.y = 405,
        t.elementsContent = [this._Image5_i(), this.btnAdd_1_i(), this.txt_itemNum_i(), this._Image6_i()],
        t
    },
    a._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "holy_puni_powerup_pop_numbg_png",
        t.width = 214,
        t.x = 0,
        t.y = 6,
        t
    },
    a.btnAdd_1_i = function() {
        var t = new eui.Image;
        return this.btnAdd_1 = t,
        t.height = 34,
        t.source = "holy_puni_level_2_btnAdd_png",
        t.width = 36,
        t.x = 196,
        t.y = 5,
        t
    },
    a.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "圣灵之光：326",
        t.textColor = 16641939,
        t.touchEnabled = !1,
        t.x = 63,
        t.y = 14,
        t
    },
    a._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "holy_puni_powerup_pop_itemIcon_png",
        t.width = 40,
        t.x = 19,
        t.y = 0,
        t
    },
    a._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 114,
        t.y = 345,
        t.elementsContent = [this._Image7_i(), this._Label2_i(), this._Image8_i(), this._Label3_i()],
        t
    },
    a._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "holy_puni_powerup_pop_awardbg_png",
        t.width = 291,
        t.x = 0,
        t.y = 1,
        t
    },
    a._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "击败获得",
        t.textColor = 16774339,
        t.touchEnabled = !1,
        t.x = 75,
        t.y = 8,
        t
    },
    a._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "holy_puni_powerup_pop_itemIcon_png",
        t.width = 31,
        t.x = 158,
        t.y = 0,
        t
    },
    a._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "x1",
        t.textColor = 16774339,
        t.touchEnabled = !1,
        t.x = 191,
        t.y = 8,
        t
    },
    a._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 194,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    a.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_pet_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    a.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "holy_puni_level_1_imgBtn_cure_png",
        t.width = 60,
        t.x = 0,
        t.y = 68,
        t
    },
    a.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.height = 40,
        t.source = "holy_puni_powerup_pop_btnExchange_png",
        t.width = 120,
        t.x = 512,
        t.y = 352,
        t
    },
    a.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 40,
        t.source = "holy_puni_powerup_pop_btnOneTap_png",
        t.width = 120,
        t.x = 650,
        t.y = 352,
        t
    },
    a.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 52,
        t.source = "holy_puni_powerup_pop_btnFight_png",
        t.width = 176,
        t.x = 167,
        t.y = 392,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniSellPopSkin.exml"] = window.HolyPuniSellPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_attr_0", "txt_attr_1", "txt_nature", "btnClose", "btnSet_0", "btnSet_1", "btnBuy", "_rect", "btnMin5", "inputTxt5", "btnMax5", "btnPlus5", "selectItem5", "btnMin0", "inputTxt0", "btnMax0", "btnPlus0", "selectItem0", "btnMin1", "inputTxt1", "btnMax1", "btnPlus1", "selectItem1", "btnMin2", "inputTxt2", "btnMax2", "btnPlus2", "selectItem2", "btnMin3", "inputTxt3", "btnMax3", "btnPlus3", "selectItem3", "btnMin4", "inputTxt4", "btnMax4", "btnPlus4", "selectItem4", "txt_studyNum", "img_btnAssign", "img_btnReset", "grp_study"],
        this.height = 472,
        this.width = 796,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txt_attr_0_i(), this.txt_attr_1_i(), this._Label8_i(), this.txt_nature_i(), this._Label9_i(), this._Label10_i(), this._Group1_i(), this.btnClose_i(), this.btnSet_0_i(), this.btnSet_1_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this.btnBuy_i(), this.grp_study_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 24,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 3143013,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 2966635,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 453,
        t.source = "holy_puni_powerup_pop_bg_png",
        t.width = 783,
        t.x = 0,
        t.y = 19,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 403,
        t.source = "holy_puni_powerup_pop_pet_png",
        t.width = 433,
        t.x = 6,
        t.y = 62,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "holy_puni_sell_pop_title_png",
        t.width = 268,
        t.x = 437,
        t.y = 24,
        t
    },
    s._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品等级：",
        t.textColor = 16772761,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 90,
        t
    },
    s._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品学习力：",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 129,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 77,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 127,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 177,
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 221,
        t
    },
    s._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 265,
        t
    },
    s._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 48,
        t.source = "holy_puni_sell_pop_right_png",
        t.width = 49,
        t.x = 633,
        t.y = 308,
        t
    },
    s._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品天赋：",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 192,
        t
    },
    s._Label4_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品性格：",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 236,
        t
    },
    s._Label5_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品体力上限：",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 280,
        t
    },
    s._Label6_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "极品特性：",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 381,
        t.y = 324,
        t
    },
    s._Label7_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "100",
        t.textColor = 16772761,
        t.touchEnabled = !1,
        t.x = 603,
        t.y = 91,
        t
    },
    s.txt_attr_0_i = function() {
        var t = new eui.Label;
        return this.txt_attr_0 = t,
        t.lineSpacing = 3,
        t.right = 165,
        t.size = 20,
        t.text = "特攻255",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.y = 131,
        t
    },
    s.txt_attr_1_i = function() {
        var t = new eui.Label;
        return this.txt_attr_1 = t,
        t.lineSpacing = 3,
        t.right = 165,
        t.size = 20,
        t.text = "速度255",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.y = 151,
        t
    },
    s._Label8_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "31",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 615,
        t.y = 192,
        t
    },
    s.txt_nature_i = function() {
        var t = new eui.Label;
        return this.txt_nature = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "保守",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 593,
        t.y = 235,
        t
    },
    s._Label9_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "20",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 612,
        t.y = 280,
        t
    },
    s._Label10_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "随机",
        t.textColor = 16773017,
        t.touchEnabled = !1,
        t.x = 592,
        t.y = 323,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 395,
        t.y = 365,
        t.elementsContent = [this._Image10_i(), this._Label11_i(), this._Image11_i(), this._Image12_i(), this._Label12_i(), this._Image13_i()],
        t
    },
    s._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "holy_puni_sell_pop_pricebg_png",
        t.width = 351,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Label11_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "原价：620",
        t.textColor = 10575663,
        t.touchEnabled = !1,
        t.x = 48,
        t.y = 4,
        t
    },
    s._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "holy_puni_sell_pop_diamond_png",
        t.width = 26,
        t.x = 141,
        t.y = 0,
        t
    },
    s._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "holy_puni_sell_pop_delline_png",
        t.width = 134,
        t.x = 39,
        t.y = 12,
        t
    },
    s._Label12_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 22,
        t.text = "现价：498",
        t.textColor = 16769060,
        t.touchEnabled = !1,
        t.x = 180,
        t.y = 2,
        t
    },
    s._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "holy_puni_sell_pop_diamond_png",
        t.width = 26,
        t.x = 283,
        t.y = 0,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "holy_puni_unbind_pop_btnClose_png",
        t.width = 54,
        t.x = 742,
        t.y = 0,
        t
    },
    s.btnSet_0_i = function() {
        var t = new eui.Image;
        return this.btnSet_0 = t,
        t.height = 40,
        t.source = "holy_puni_sell_pop_btnSet_png",
        t.width = 70,
        t.x = 685,
        t.y = 131,
        t
    },
    s.btnSet_1_i = function() {
        var t = new eui.Image;
        return this.btnSet_1 = t,
        t.height = 40,
        t.source = "holy_puni_sell_pop_btnSet_png",
        t.width = 70,
        t.x = 685,
        t.y = 225,
        t
    },
    s._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_sell_pop_line_png",
        t.width = 413,
        t.x = 363,
        t.y = 121,
        t
    },
    s._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_sell_pop_line_png",
        t.width = 414,
        t.x = 362,
        t.y = 179,
        t
    },
    s._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_sell_pop_line_png",
        t.width = 414,
        t.x = 362,
        t.y = 222,
        t
    },
    s._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_sell_pop_line_png",
        t.width = 413,
        t.x = 363,
        t.y = 267,
        t
    },
    s._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "holy_puni_sell_pop_line_png",
        t.width = 413,
        t.x = 363,
        t.y = 310,
        t
    },
    s.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.height = 52,
        t.source = "holy_puni_sell_pop_btnBuy_png",
        t.width = 176,
        t.x = 480,
        t.y = 398,
        t
    },
    s.grp_study_i = function() {
        var t = new eui.Group;
        return this.grp_study = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.visible = !0,
        t.width = 1136,
        t.elementsContent = [this._rect_i(), this._Group3_i()],
        t
    },
    s._rect_i = function() {
        var t = new eui.Rect;
        return this._rect = t,
        t.fillAlpha = 0,
        t.percentHeight = 100,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.percentWidth = 100,
        t
    },
    s._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.elementsContent = [this._Image19_i(), this._Image20_i(), this._Group2_i(), this._Image37_i(), this._Label13_i(), this._Image38_i(), this.txt_studyNum_i(), this.img_btnAssign_i(), this.img_btnReset_i()],
        t
    },
    s._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 304,
        t.source = "common_texture_003_png",
        t.visible = !0,
        t.width = 486,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 175,
        t.source = "common_texture_003_png",
        t.width = 468,
        t.x = 9,
        t.y = 46,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 71,
        t.elementsContent = [this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Image29_i(), this._Image30_i(), this.selectItem5_i(), this.selectItem0_i(), this.selectItem1_i(), this.selectItem2_i(), this.selectItem3_i(), this.selectItem4_i()],
        t
    },
    s._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 86,
        t
    },
    s._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 86,
        t
    },
    s._Image23_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 0,
        t.y = 37,
        t
    },
    s._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pet_info_view_texture_line_1_png",
        t.width = 220,
        t.x = 235,
        t.y = 37,
        t
    },
    s._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "common_speed_png",
        t.width = 23,
        t.x = 15,
        t.y = 102,
        t
    },
    s._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_hp_png",
        t.width = 22,
        t.x = 247,
        t.y = 101,
        t
    },
    s._Image27_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "common_satk_png",
        t.width = 20,
        t.x = 17,
        t.y = 51,
        t
    },
    s._Image28_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "common_sdef_png",
        t.width = 18,
        t.x = 249,
        t.y = 52,
        t
    },
    s._Image29_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 18,
        t.x = 249,
        t.y = 1,
        t
    },
    s._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 16,
        t.y = 1,
        t
    },
    s.selectItem5_i = function() {
        var t = new eui.Group;
        return this.selectItem5 = t,
        t.x = 49,
        t.y = 100,
        t.elementsContent = [this.btnMin5_i(), this._Image31_i(), this.inputTxt5_i(), this.btnMax5_i(), this.btnPlus5_i()],
        t
    },
    s.btnMin5_i = function() {
        var t = new eui.Image;
        return this.btnMin5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image31_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt5_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt5 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_5",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = i,
        t
    },
    s.btnMax5_i = function() {
        var t = new eui.Image;
        return this.btnMax5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus5_i = function() {
        var t = new eui.Image;
        return this.btnPlus5 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s.selectItem0_i = function() {
        var t = new eui.Group;
        return this.selectItem0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 100,
        t.elementsContent = [this.btnMin0_i(), this._Image32_i(), this.inputTxt0_i(), this.btnMax0_i(), this.btnPlus0_i()],
        t
    },
    s.btnMin0_i = function() {
        var t = new eui.Image;
        return this.btnMin0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image32_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt0_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt0 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_0",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = n,
        t
    },
    s.btnMax0_i = function() {
        var t = new eui.Image;
        return this.btnMax0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus0_i = function() {
        var t = new eui.Image;
        return this.btnPlus0 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s.selectItem1_i = function() {
        var t = new eui.Group;
        return this.selectItem1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 0,
        t.elementsContent = [this.btnMin1_i(), this._Image33_i(), this.inputTxt1_i(), this.btnMax1_i(), this.btnPlus1_i()],
        t
    },
    s.btnMin1_i = function() {
        var t = new eui.Image;
        return this.btnMin1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image33_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt1_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_1",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = _,
        t
    },
    s.btnMax1_i = function() {
        var t = new eui.Image;
        return this.btnMax1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus1_i = function() {
        var t = new eui.Image;
        return this.btnPlus1 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s.selectItem2_i = function() {
        var t = new eui.Group;
        return this.selectItem2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 0,
        t.elementsContent = [this.btnMin2_i(), this._Image34_i(), this.inputTxt2_i(), this.btnMax2_i(), this.btnPlus2_i()],
        t
    },
    s.btnMin2_i = function() {
        var t = new eui.Image;
        return this.btnMin2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image34_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt2_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_2",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = a,
        t
    },
    s.btnMax2_i = function() {
        var t = new eui.Image;
        return this.btnMax2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus2_i = function() {
        var t = new eui.Image;
        return this.btnPlus2 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s.selectItem3_i = function() {
        var t = new eui.Group;
        return this.selectItem3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 49,
        t.y = 51,
        t.elementsContent = [this.btnMin3_i(), this._Image35_i(), this.inputTxt3_i(), this.btnMax3_i(), this.btnPlus3_i()],
        t
    },
    s.btnMin3_i = function() {
        var t = new eui.Image;
        return this.btnMin3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image35_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt3_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_3",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = r,
        t
    },
    s.btnMax3_i = function() {
        var t = new eui.Image;
        return this.btnMax3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus3_i = function() {
        var t = new eui.Image;
        return this.btnPlus3 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s.selectItem4_i = function() {
        var t = new eui.Group;
        return this.selectItem4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 280,
        t.y = 51,
        t.elementsContent = [this.btnMin4_i(), this._Image36_i(), this.inputTxt4_i(), this.btnMax4_i(), this.btnPlus4_i()],
        t
    },
    s.btnMin4_i = function() {
        var t = new eui.Image;
        return this.btnMin4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMin_png",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image36_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_tbg_png",
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    s.inputTxt4_i = function() {
        var t = new eui.TextInput;
        return this.inputTxt4 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 3,
        t.name = "inputTxt_4",
        t.restrict = '"0-9"',
        t.text = "255",
        t.textColor = 3143013,
        t.width = 57,
        t.x = 27,
        t.y = 4,
        t.skinName = o,
        t
    },
    s.btnMax4_i = function() {
        var t = new eui.Image;
        return this.btnMax4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnMax_png",
        t.width = 48,
        t.x = 118,
        t.y = 0,
        t
    },
    s.btnPlus4_i = function() {
        var t = new eui.Image;
        return this.btnPlus4 = t,
        t.height = 24,
        t.source = "study_pet_attribute_btnPlus_png",
        t.width = 24,
        t.x = 86,
        t.y = 0,
        t
    },
    s._Image37_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "study_pet_attribute_bg2_png",
        t.visible = !0,
        t.width = 462,
        t.x = 12,
        t.y = 15,
        t
    },
    s._Label13_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "输入你想要的学习力",
        t.textColor = 4173823,
        t.x = 40,
        t.y = 26,
        t
    },
    s._Image38_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "study_pet_attribute_icon2_png",
        t.width = 8,
        t.x = 22,
        t.y = 23,
        t
    },
    s.txt_studyNum_i = function() {
        var t = new eui.Label;
        return this.txt_studyNum = t,
        t.right = 21,
        t.size = 16,
        t.text = "当前学习力总和：123",
        t.textColor = 4173823,
        t.y = 26,
        t
    },
    s.img_btnAssign_i = function() {
        var t = new eui.Image;
        return this.img_btnAssign = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnAssign_png",
        t.width = 176,
        t.x = 265,
        t.y = 233,
        t
    },
    s.img_btnReset_i = function() {
        var t = new eui.Image;
        return this.img_btnReset = t,
        t.height = 52,
        t.source = "study_pet_attribute_img_btnReset_png",
        t.width = 176,
        t.x = 45,
        t.y = 233,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniSkin.exml"] = window.HolyPuniSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnInfo", "img_puni", "level_0", "level_1", "level_2", "level_3", "level_4", "level_5", "btnFight", "btnGet", "btnPre", "btnUnbind", "grp_state1", "btnUp", "btnSale", "grp_state2", "flag_got"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.btnInfo_i(), this.img_puni_i(), this.grp_state1_i(), this.grp_state2_i(), this.flag_got_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_1_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_2_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_3_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_4_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_5_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this._Image3_i(),
            this.states = [new eui.State("normal", []), new eui.State("done", [new eui.AddItems("_Image2", "", 1, ""), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("doing", [new eui.AddItems("_Image3", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 124,
            t.source = "holy_puni_level_6_png",
            t.visible = !0,
            t.width = 146,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 100,
            t.source = "holy_puni_flag_win_png",
            t.visible = !0,
            t.width = 100,
            t.x = 23,
            t.y = 12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.height = 144,
            t.source = "holy_puni_flag_selected_png",
            t.visible = !0,
            t.width = 156,
            t.x = -5,
            t.y = -10,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.source = "holy_puni_bg_jpg",
        t.width = 1136,
        t.y = 0,
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 8,
        t.source = "holy_puni_title_png",
        t.y = 140,
        t
    },
    s.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.horizontalCenter = 243,
        t.source = "holy_puni_btnInfo_png",
        t.width = 74,
        t.y = 389,
        t
    },
    s.img_puni_i = function() {
        var t = new eui.Image;
        return this.img_puni = t,
        t.height = 256,
        t.source = "holy_puni_img_puni_png",
        t.width = 128,
        t.x = 0,
        t.y = 384,
        t
    },
    s.grp_state1_i = function() {
        var t = new eui.Group;
        return this.grp_state1 = t,
        t.horizontalCenter = 8,
        t.visible = !0,
        t.width = 1090,
        t.y = 478,
        t.elementsContent = [this.level_0_i(), this.level_1_i(), this.level_2_i(), this.level_3_i(), this.level_4_i(), this.level_5_i(), this.btnFight_i(), this.btnGet_i(), this.btnPre_i(), this.btnUnbind_i()],
        t
    },
    s.level_0_i = function() {
        var t = new eui.Component;
        return this.level_0 = t,
        t.height = 124,
        t.width = 146,
        t.x = 118,
        t.y = 10,
        t.skinName = i,
        t
    },
    s.level_1_i = function() {
        var t = new eui.Component;
        return this.level_1 = t,
        t.height = 124,
        t.width = 146,
        t.x = 252,
        t.y = 10,
        t.skinName = n,
        t
    },
    s.level_2_i = function() {
        var t = new eui.Component;
        return this.level_2 = t,
        t.height = 124,
        t.width = 146,
        t.x = 387,
        t.y = 10,
        t.skinName = _,
        t
    },
    s.level_3_i = function() {
        var t = new eui.Component;
        return this.level_3 = t,
        t.height = 124,
        t.width = 146,
        t.x = 521,
        t.y = 10,
        t.skinName = a,
        t
    },
    s.level_4_i = function() {
        var t = new eui.Component;
        return this.level_4 = t,
        t.height = 124,
        t.width = 146,
        t.x = 656,
        t.y = 10,
        t.skinName = r,
        t
    },
    s.level_5_i = function() {
        var t = new eui.Component;
        return this.level_5 = t,
        t.height = 124,
        t.width = 146,
        t.x = 790,
        t.y = 10,
        t.skinName = o,
        t
    },
    s.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 126,
        t.source = "holy_puni_btnFight_png",
        t.width = 199,
        t.x = 891,
        t.y = 8,
        t
    },
    s.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 126,
        t.source = "holy_puni_btnGet_png",
        t.width = 199,
        t.x = 891,
        t.y = 8,
        t
    },
    s.btnPre_i = function() {
        var t = new eui.Image;
        return this.btnPre = t,
        t.height = 40,
        t.source = "holy_puni_btnPre_png",
        t.width = 100,
        t.x = 0,
        t.y = 32,
        t
    },
    s.btnUnbind_i = function() {
        var t = new eui.Image;
        return this.btnUnbind = t,
        t.height = 40,
        t.source = "holy_puni_btnUnbind_png",
        t.width = 100,
        t.x = 0,
        t.y = 84,
        t
    },
    s.grp_state2_i = function() {
        var t = new eui.Group;
        return this.grp_state2 = t,
        t.horizontalCenter = -10.5,
        t.visible = !1,
        t.width = 279,
        t.y = 495,
        t.elementsContent = [this.btnUp_i(), this.btnSale_i()],
        t
    },
    s.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.height = 109,
        t.source = "holy_puni_btnUp_png",
        t.width = 110,
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnSale_i = function() {
        var t = new eui.Image;
        return this.btnSale = t,
        t.height = 109,
        t.source = "holy_puni_btnSale_png",
        t.width = 109,
        t.x = 170,
        t.y = 0,
        t
    },
    s.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.height = 103,
        t.horizontalCenter = -10.5,
        t.source = "holy_puni_flag_got_png",
        t.verticalCenter = -31.5,
        t.visible = !1,
        t.width = 199,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniUnbindPopItemSkin.exml"] = window.HolyPuniUnbindPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "btnAdd"],
        this.height = 90,
        this.width = 90,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.btnAdd_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 90,
        t.source = "holy_puni_unbind_pop_tokenBg_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 26,
        t.source = "holy_puni_unbind_pop_btnAdd_png",
        t.visible = !0,
        t.width = 26,
        t.x = 72,
        t.y = -7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyPuniUnbindPopSkin.exml"] = window.HolyPuniUnbindPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["list_all", "_scr", "list_chosen", "btnDel_0", "btnDel_1", "btnDel_2", "btnUnbind", "btnClose"],
        this.height = 443,
        this.width = 597,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._scr_i(), this.list_chosen_i(), this.btnDel_0_i(), this.btnDel_1_i(), this.btnDel_2_i(), this._Label1_i(), this.btnUnbind_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 424,
        t.source = "holy_puni_unbind_pop_bg_png",
        t.width = 583,
        t.x = 0,
        t.y = 19,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "holy_puni_unbind_pop_title_png",
        t.width = 209,
        t.x = 80,
        t.y = 24,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 290,
        t.width = 309,
        t.x = 33,
        t.y = 82,
        t.viewport = this.list_all_i(),
        t
    },
    i.list_all_i = function() {
        var t = new eui.List;
        return this.list_all = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 16,
        t.orientation = "rows",
        t.paddingTop = 7,
        t.verticalGap = 10,
        t
    },
    i.list_chosen_i = function() {
        var t = new eui.List;
        return this.list_chosen = t,
        t.height = 290,
        t.width = 90,
        t.x = 425,
        t.y = 82,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.btnDel_0_i = function() {
        var t = new eui.Image;
        return this.btnDel_0 = t,
        t.height = 26,
        t.source = "holy_puni_unbind_pop_btnDel_png",
        t.visible = !1,
        t.width = 26,
        t.x = 497,
        t.y = 75,
        t
    },
    i.btnDel_1_i = function() {
        var t = new eui.Image;
        return this.btnDel_1 = t,
        t.height = 26,
        t.source = "holy_puni_unbind_pop_btnDel_png",
        t.visible = !1,
        t.width = 26,
        t.x = 497,
        t.y = 175,
        t
    },
    i.btnDel_2_i = function() {
        var t = new eui.Image;
        return this.btnDel_2 = t,
        t.height = 26,
        t.source = "holy_puni_unbind_pop_btnDel_png",
        t.visible = !1,
        t.width = 26,
        t.x = 497,
        t.y = 275,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 2,
        t.size = 18,
        t.text = "若您未绑定刻印\n请点击【免费解绑】进行超进化",
        t.textAlign = "center",
        t.textColor = 15588743,
        t.touchEnabled = !1,
        t.x = 58,
        t.y = 380,
        t
    },
    i.btnUnbind_i = function() {
        var t = new eui.Image;
        return this.btnUnbind = t,
        t.height = 40,
        t.source = "holy_puni_unbind_pop_btnUnbind_png",
        t.width = 120,
        t.x = 410,
        t.y = 381,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "holy_puni_unbind_pop_btnClose_png",
        t.width = 54,
        t.x = 543,
        t.y = 0,
        t
    },
    e
} (eui.Skin);