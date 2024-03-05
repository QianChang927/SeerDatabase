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
kingHamorLevel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.nameStr = ["解除结界", "破除邪念", "龙族之根", "真命龙王"],
            t.clsName = ["BreakBorder", "GetRidOfEvilIdeas", "DragonNationalityRoot", "TrueDragonKing"],
            t.skinName = KingHamorComicPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnWatch,
            function() {
                StatLogger.log("1218版本系统功能", "王之哈莫关卡", "点击【观看】漫画“" + t.nameStr[t._idx] + "”"),
                ModuleManager.showModuleByID(71, {
                    name: t.clsName[t._idx]
                }),
                t.hide()
            },
            this)
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._idx = t.id,
            this.txt_name.text = "《" + this.nameStr[this._idx] + "》"
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.KingHamorComicPop = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorComicPop")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._inited = !1,
            e.skinName = KingHamorLevelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._resize(),
            this.grp_panel.scaleX = this.grp_panel.scaleY = 2,
            egret.Tween.get(this.grp_panel).to({
                scaleX: 1,
                scaleY: 1
            },
            500),
            this._scrl.viewport = this.grp_level,
            this.addEvent(),
            this.updateData()
        },
        i.prototype._resize = function() {
            this.grp_panel.width = egret.lifecycle.stage.stageWidth
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                ModuleManager.hideModule(t),
                ModuleManager.showModuleByID(69)
            },
            this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["btnPass_" + e],
                function() {
                    BuyProductManager.buyProductBySocket([246593, 246594, 246595, 246596][e],
                    function() {
                        SocketConnection.sendByQueue(47272, [2, e + 1],
                        function() {
                            t.updateData()
                        })
                    },
                    t)
                },
                n)
            },
            n = this, _ = 0; 4 > _; _++) i(_);
            for (var _ = 0; 9 > _; _++) ImageButtonUtil.add(this["com_" + _],
            function(i) {
                t.flag_selected.x = -4,
                t.flag_selected.y = 0,
                i.target.parent.addChild(t.flag_selected),
                t.flag_selected.visible = !0;
                var n = i.target.parent.x + 86 - t._scrl.width / 2;
                if (t._scrl.stopAnimation(), t._scrl.viewport.scrollH < n && egret.Tween.get(t._scrl.viewport).to({
                    scrollH: n
                },
                200).call(function() {
                    egret.Tween.removeTweens(t._scrl.viewport)
                }), i.target && i.target.name && "comic" == i.target.name.split("_")[0]) {
                    var _ = ~~i.target.name.split("_")[1];
                    PopViewManager.getInstance().openView(new e.KingHamorComicPop, null, {
                        id: _
                    })
                } else if (i.target && i.target.name && "level" == i.target.name.split("_")[0]) {
                    var _ = ~~i.target.name.split("_")[1];
                    egret.Tween.get(t.bg).to({
                        alpha: 0
                    },
                    300).call(function() {
                        t.bg.source = "king_hamor_level_bg_" + _ + "_jpg"
                    }).to({
                        alpha: 1
                    },
                    300),
                    t.openLevel(_)
                }
            },
            this);
            this._mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideLevel, this),
            EventManager.addEventListener("king_hamor_hide_level", this.hideLevel, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2714],
            function(t) {
                e._bossStep = t[0],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            this.grp_level.removeChildren();
            for (var e = 0; 4 > e; e++) e <= this._bossStep && (this.grp_level.addChild(this["level_" + e]), this.grp_level.addChild(this["comic_" + e])),
            DisplayUtil.setEnabled(this["level_" + e], e == this._bossStep),
            e < this._bossStep && this.grp_level.addChild(this["flag_pass_" + e]);
            for (var e = 0; 8 > e; e++) e <= 2 * this._bossStep && this.grp_level.addChild(this["line_" + e]);
            if (this._bossStep >= 4 && this.grp_level.addChild(this.level_4), this.validateNow(), this._rect.x = this.grp_level.contentWidth, this.grp_level.addChild(this._rect), this._bossStep < 5 && !this._inited) {
                var t = this["level_" + this._bossStep].x + 86 - this._scrl.width / 2;
                this._scrl.viewport.scrollH = t,
                this._inited = !0
            }
        },
        i.prototype.openLevel = function(e) {
            var t = this;
            this.com && (this.com.destroy(), this.com.parent && this.com.parent.removeChild(this.com));
            var i = egret.getDefinitionByName("kingHamorLevel.KingHamorLevel" + e);
            this.com = new i,
            this.com.right = -449,
            this.addChild(this.com),
            this._mask.visible = !0,
            egret.Tween.get(this.com).to({
                right: 0
            },
            300).call(function() {
                egret.Tween.removeTweens(t.com)
            })
        },
        i.prototype.hideLevel = function() {
            var e = this;
            this.com && this.com.parent ? egret.Tween.get(this.com).to({
                right: -449
            },
            300).call(function() {
                e.com.parent.removeChild(e.com),
                e.com.destroy(),
                e._mask.visible = !1,
                egret.Tween.removeTweens(e.com)
            }) : this._mask.visible = !1,
            this.updateData()
        },
        i.prototype.destroy = function() {
            this._mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideLevel, this),
            EventManager.removeEventListener("king_hamor_hide_level", this.hideLevel, this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.KingHamorLevel = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._maxTimes = 5,
            e._bossList = [6482, 6483, 6484],
            e.skinName = KingHamorLevel0Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.updateData(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProductBySocket(246597,
                function() {
                    SocketConnection.sendByQueue(47272, [7, 1],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnChallenge_" + t],
                function() {
                    var i = KTool.getBit(e._bossState, t + 1);
                    return i ? void Alarm.show("你已经战胜它了，去挑战另外的守护者吧！") : e._dailyTimes >= e._maxTimes ? void Alarm.show("你今天的挑战次数已经用完。") : void FightManager.fightNoMapBoss("", e._bossList[t])
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) t(n);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2715, 12421, 2714],
            function(t) {
                e._bossState = t[0],
                e._dailyTimes = t[1],
                e._levelStep = t[2],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            if (this._levelStep > 0) return Alarm.show("恭喜你成功解除了结界！可以进入破除邪念关卡了！",
            function() {
                PopViewManager.getInstance().openView(new e.KingHamorComicPop, null, {
                    id: 1
                })
            }),
            void EventManager.dispatchEventWith("king_hamor_hide_level");
            for (var t = 0; 3 > t; t++) {
                var i = KTool.getBit(this._bossState, t + 1);
                this["flag_beat_" + t].visible = !!i
            }
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, this._maxTimes - this._dailyTimes) + "/" + this._maxTimes,
            DisplayUtil.setEnabled(this.btnAdd, this._dailyTimes >= this._maxTimes)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.removeChildren()
        },
        i
    } (eui.Component);
    e.KingHamorLevel0 = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel0")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._maxTimes = 3,
            e._wildBoss = 18060,
            e._bossId = 360,
            e._itemId = 1708182,
            e.skinName = KingHamorLevel1Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.updateData(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var e = config.Help_tips.getItem(16),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProductBySocket(246598,
                function() {
                    SocketConnection.sendByQueue(47272, [7, 2],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                FightManager.fightNoMapBoss("", e._wildBoss)
            },
            this),
            ImageButtonUtil.add(this.btnStrong,
            function() {
                return e._starNum >= 3 ? void Alarm.show("摩尔卡洛已经提升至最高星级啦，可以去挑战帝龙邪尊了哦！") : ItemManager.getNumByID(e._itemId) < 12 ? void Alarm.show("强化摩尔卡洛需要12个龙裔之元，目前你的龙裔之元不足！") : void SocketConnection.sendByQueue(47272, [3, 0],
                function() {
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return e._dailyTimes >= e._maxTimes ? void Alarm.show("你今天的挑战次数已经用完") : void SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [e._bossId, 0, 0, 0, 0, 0])
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2716, 12422, 2714],
            function(t) {
                e._starNum = t[0],
                e._dailyTimes = t[1],
                e._levelStep = t[2],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            if (this._levelStep > 1) return Alarm.show("恭喜你成功破除了邪念！可以进入龙族之根关卡了！",
            function() {
                PopViewManager.getInstance().openView(new e.KingHamorComicPop, null, {
                    id: 2
                })
            }),
            void EventManager.dispatchEventWith("king_hamor_hide_level");
            this.txt_itemNum.text = "已获得龙裔之元：" + ItemManager.getNumByID(this._itemId);
            for (var t = 0; 3 > t; t++) this["star_light_" + t].visible = t < this._starNum;
            this.txt_leftTimes.text = "今日剩余次数：" + Math.max(0, this._maxTimes - this._dailyTimes) + "/" + this._maxTimes,
            DisplayUtil.setEnabled(this.btnAdd, this._dailyTimes >= this._maxTimes)
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        i
    } (eui.Component);
    e.KingHamorLevel1 = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel1")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._maxTimes = 10,
            e._bossList = [6485, 6486, 6487],
            e._maxDamage = 33e3,
            e.skinName = KingHamorLevel2Skin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.txt_intro.textFlow = [{
                text: "挑战水、火、草三灵兽，分别对他们造成",
                style: {
                    textColor: 16118515
                }
            },
            {
                text: "33000点\n累计伤害",
                style: {
                    textColor: 16773718
                }
            },
            {
                text: "即可通过。",
                style: {
                    textColor: 16118515
                }
            }],
            this.updateData(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var e = config.Help_tips.getItem(17),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProductBySocket(246599,
                function() {
                    SocketConnection.sendByQueue(47272, [7, 3],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnCompose_" + t],
                function() {
                    BuyProductManager.buyProductBySocket([246600, 246601, 246602][t],
                    function() {
                        SocketConnection.sendByQueue(47272, [4, t + 1],
                        function() {
                            e.updateData()
                        })
                    },
                    e)
                },
                i),
                ImageButtonUtil.add(i["btnChallenge_" + t],
                function() {
                    return e._dailyTimes >= e._maxTimes ? void Alarm.show("你今天的挑战次数已经用完。") : void FightManager.fightNoMapBoss("", e._bossList[t])
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) t(n);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2714, 12423, 2717, 2718, 2719],
            function(t) {
                e._levelStep = t[0],
                e._dailyTimes = t[1],
                e._damage_0 = t[2],
                e._damage_1 = t[3],
                e._damage_2 = t[4],
                e.updateView()
            })
        },
        i.prototype.updateView = function() {
            if (this._levelStep > 2) return Alarm.show("恭喜你成功通过了龙族之根！可以进入真命龙王关卡了！",
            function() {
                PopViewManager.getInstance().openView(new e.KingHamorComicPop, null, {
                    id: 3
                })
            }),
            void EventManager.dispatchEventWith("king_hamor_hide_level");
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, this._maxTimes - this._dailyTimes) + "/" + this._maxTimes,
            DisplayUtil.setEnabled(this.btnAdd, this._dailyTimes >= this._maxTimes);
            for (var t = 0; 3 > t; t++) this["txt_damage_" + t].text = Math.min(this._maxDamage, this["_damage_" + t]) + "/" + this._maxDamage,
            this["_bar_" + t].maximum = this._maxDamage,
            this["_bar_" + t].value = this["_damage_" + t],
            this["flag_clear_" + t].visible = this["_damage_" + t] >= this._maxDamage,
            DisplayUtil.setEnabled(this["btnChallenge_" + t], this["_damage_" + t] < this._maxDamage),
            DisplayUtil.setEnabled(this["btnCompose_" + t], this["_damage_" + t] < this._maxDamage)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.removeChildren()
        },
        i
    } (eui.Component);
    e.KingHamorLevel2 = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel2")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._maxTimes = 20,
            t._bossList = [6488, 6489],
            t._itemId = 1708183,
            t.skinName = KingHamorLevel3Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateData(),
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var e = config.Help_tips.getItem(17),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                BuyProductManager.buyProductBySocket(246603,
                function() {
                    SocketConnection.sendByQueue(47272, [7, 4],
                    function() {
                        e.updateData()
                    })
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnDragon_" + t],
                function() {
                    return e._dailyTimes >= e._maxTimes ? void Alarm.show("你今天的挑战次数已经用完。") : void FightManager.fightNoMapBoss("", e._bossList[t])
                },
                i)
            },
            i = this, n = 0; 2 > n; n++) t(n);
            ImageButtonUtil.add(this.btnSynthesis,
            function() {
                return ItemManager.getNumByID(e._itemId) < 11 ? void Alarm.show("每次合成龙珠需要11个龙魂星屑哦！你的龙魂星屑不足！") : void SocketConnection.sendByQueue(47272, [5, 0],
                function() {
                    KTool.getPlayerInfo([634],
                    function(e) {
                        var t = ["一", "二", "三", "四", "五", "六", "七"];
                        e[0] < 8 ? Alarm.show("恭喜你获得了" + t[e[0] - 1] + "星龙珠！") : Alarm.show("你获得了1个龙魂星屑，可以用来合成龙珠哦！")
                    }),
                    e.updateData()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        t.prototype.onFightOver = function() {
            KTool.getPlayerInfo([634],
            function(e) {
                var t = ["一", "二", "三", "四", "五", "六", "七"];
                e[0] < 8 ? Alarm.show("恭喜你获得了" + t[e[0] - 1] + "星龙珠！") : Alarm.show("你获得了1个龙魂星屑，可以用来合成龙珠哦！")
            }),
            this.updateData()
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2714, 12424, 2720, 123027],
            function(t) {
                e._levelStep = t[0],
                e._dailyTimes = t[1],
                e._starNum = t[2],
                e._synNum = t[3] >> 8 & 255,
                e.updateView()
            })
        },
        t.prototype.updateView = function() {
            if (this._levelStep > 3) return Alarm.show("您已通过【真命龙王】关卡，请前往获得【龙王之冠】完成加冕。"),
            void EventManager.dispatchEventWith("king_hamor_hide_level");
            this.txt_num.text = ItemManager.getNumByID(this._itemId) + "",
            this.txt_synNum.text = "已合成" + this._synNum + "/20个龙珠";
            for (var e = 0; 7 > e; e++) {
                var t = KTool.getBit(this._starNum, e + 1);
                this["ball_" + e + "_light"].visible = !!t
            }
            this.txt_leftTimes.text = "今日剩余挑战次数：" + Math.max(0, this._maxTimes - this._dailyTimes) + "/" + this._maxTimes,
            DisplayUtil.setEnabled(this.btnAdd, this._dailyTimes >= this._maxTimes)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.KingHamorLevel3 = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel3")
} (kingHamorLevel || (kingHamorLevel = {}));
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
kingHamorLevel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._maxTimes = 10,
            t._maxTimes_1 = 5,
            t._bossList = [17973, 17974, 17975],
            t._itemIds = [1708132, 1708133, 1708134],
            t.skinName = KingHamorLevel4Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateData(),
            this.addEvent()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var e = config.Help_tips.getItem(18),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
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
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnAdd_" + t],
                function() {
                    BuyProductManager.buyProduct([246568, 246569, 246570][t] + "_" + [8114, 8115, 8155][t],
                    function() {},
                    e, [1708132, 1708133, 1708134][t])
                },
                i),
                ImageButtonUtil.add(i["btnChallenge_" + t],
                function() {
                    FightManager.fightNoMapBoss("", e._bossList[t])
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) t(n);
            ImageButtonUtil.add(this.btnSummit,
            function() {
                SocketConnection.sendByQueue(47270, [1].concat(e._itemIds.map(ItemManager.getNumByID)),
                function() {
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(47270, [4, 6, 0, 0],
                function() {
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnCoronation,
            function() {
                KTool.getBit(e._awardState, 6) && SocketConnection.sendByQueue(47272, [6, 0],
                function() {
                    e.updateData()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                for (var t = 0; 3 > t; t++) e["txt_itemNum_" + t].textFlow = [{
                    text: "目前拥有",
                    style: {
                        textColor: 16777215
                    }
                },
                {
                    text: ItemManager.getNumByID(e._itemIds[t]) + "",
                    style: {
                        textColor: 16773718
                    }
                },
                {
                    text: "个",
                    style: {
                        textColor: 16777215
                    }
                }]
            },
            this)
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2714, 2710, 2711, 12415, 12416, 12417],
            function(t) {
                e._levelStep = t[0],
                e._progress = t[1],
                e._awardState = t[2],
                e._dailyNum_0 = t[3],
                e._dailyNum_1 = t[4],
                e._dailyNum_2 = t[5],
                e.updateView()
            })
        },
        t.prototype.updateView = function() {
            for (var e = 0; 3 > e; e++) 0 == e ? (this["txt_dailyNum_" + e].text = this["_dailyNum_" + e] + "/" + this._maxTimes, DisplayUtil.setEnabled(this["btnChallenge_" + e], this["_dailyNum_" + e] < this._maxTimes)) : (this["txt_dailyNum_" + e].text = this["_dailyNum_" + e] + "/" + this._maxTimes_1, DisplayUtil.setEnabled(this["btnChallenge_" + e], this["_dailyNum_" + e] < this._maxTimes_1)),
            this["txt_itemNum_" + e].textFlow = [{
                text: "目前拥有",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: ItemManager.getNumByID(this._itemIds[e]) + "",
                style: {
                    textColor: 16773718
                }
            },
            {
                text: "个",
                style: {
                    textColor: 16777215
                }
            }];
            this.txt_progress.text = Math.min(100, this._progress + 25) + "%",
            this.flag_got.visible = !!KTool.getBit(this._awardState, 6),
            this.btnSummit.visible = this._progress < 75,
            this.btnGet.visible = this._progress >= 75 && !KTool.getBit(this._awardState, 6),
            this.btnCoronation.visible = !!KTool.getBit(this._awardState, 6),
            DisplayUtil.setEnabled(this.btnCoronation, this._levelStep < 5)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.KingHamorLevel4 = t,
    __reflect(t.prototype, "kingHamorLevel.KingHamorLevel4")
} (kingHamorLevel || (kingHamorLevel = {}));
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
generateEUI.paths["resource/eui_skins/KingHamorComicPopSkin.exml"] = window.KingHamorComicPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name", "btnWatch"],
        this.height = 104,
        this.width = 414,
        this.elementsContent = [this._Image1_i(), this.txt_name_i(), this._Label1_i(), this.btnWatch_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 104,
        e.source = "king_hamor_comic_pop_bg_png",
        e.width = 414,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 26,
        e.text = "《解除结界》",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 138,
        e.y = 54,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "剧情漫画",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 115,
        e.y = 26,
        e
    },
    i.btnWatch_i = function() {
        var e = new eui.Image;
        return this.btnWatch = e,
        e.height = 91,
        e.source = "king_hamor_comic_pop_btnWatch_png",
        e.width = 91,
        e.x = 310,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevel0Skin.exml"] = window.KingHamorLevel0Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnChallenge_0", "btnChallenge_2", "btnChallenge_1", "flag_beat_2", "flag_beat_0", "flag_beat_1", "btnAdd", "txt_leftTimes", "imgBtn_pet", "imgBtn_cure"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.btnChallenge_0_i(), this.btnChallenge_2_i(), this.btnChallenge_1_i(), this.flag_beat_2_i(), this.flag_beat_0_i(), this.flag_beat_1_i(), this._Group1_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(15, 0, 3, 640),
        e.source = "king_hamor_level_0_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "king_hamor_level_0_title_png",
        e.width = 110,
        e.x = 42,
        e.y = 26,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 336,
        e.source = "king_hamor_level_0_img_png",
        e.width = 355,
        e.x = 67,
        e.y = 178,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 8,
        e.size = 18,
        e.text = "龙族三巨头守卫着结界入口，一一击败他们证明\n自己的实力，即可进入《破除邪念》关卡。",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 66,
        e
    },
    i.btnChallenge_0_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_0 = e,
        e.height = 192,
        e.source = "king_hamor_level_0_btnChallenge1_png",
        e.width = 177,
        e.x = 146,
        e.y = 149,
        e
    },
    i.btnChallenge_2_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_2 = e,
        e.height = 192,
        e.source = "king_hamor_level_0_btnChallenge2_png",
        e.width = 177,
        e.x = 53,
        e.y = 304,
        e
    },
    i.btnChallenge_1_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_1 = e,
        e.height = 192,
        e.source = "king_hamor_level_0_btnChallenge3_png",
        e.width = 177,
        e.x = 239,
        e.y = 304,
        e
    },
    i.flag_beat_2_i = function() {
        var e = new eui.Image;
        return this.flag_beat_2 = e,
        e.height = 166,
        e.source = "king_hamor_level_0_beat_png",
        e.width = 155,
        e.x = 64,
        e.y = 314,
        e
    },
    i.flag_beat_0_i = function() {
        var e = new eui.Image;
        return this.flag_beat_0 = e,
        e.height = 166,
        e.source = "king_hamor_level_0_beat_png",
        e.width = 155,
        e.x = 157,
        e.y = 159,
        e
    },
    i.flag_beat_1_i = function() {
        var e = new eui.Image;
        return this.flag_beat_1 = e,
        e.height = 166,
        e.source = "king_hamor_level_0_beat_png",
        e.width = 155,
        e.x = 250,
        e.y = 314,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 175,
        e.y = 566,
        e.elementsContent = [this._Image4_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "king_hamor_level_0_numbg_png",
        e.width = 233,
        e.x = 0,
        e.y = 1,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "king_hamor_level_0_btnAdd_png",
        e.width = 36,
        e.x = 217,
        e.y = 0,
        e
    },
    i.txt_leftTimes_i = function() {
        var e = new eui.Label;
        return this.txt_leftTimes = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 16,
        e.y = 9,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_pet_png",
        e.width = 60,
        e.x = 39,
        e.y = 552,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_cure_png",
        e.width = 60,
        e.x = 103,
        e.y = 553,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevel1Skin.exml"] = window.KingHamorLevel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnHelp", "txt_itemNum", "btnSearch", "imgBtn_pet", "imgBtn_cure", "btnAdd", "btnFight", "txt_leftTimes", "btnStrong", "star_dark_0", "star_light_0", "star_dark_1", "star_light_1", "star_dark_2", "star_light_2"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnHelp_i(), this.txt_itemNum_i(), this._Image3_i(), this.btnSearch_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(15, 0, 3, 640),
        e.source = "king_hamor_level_0_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "king_hamor_level_1_title_png",
        e.width = 110,
        e.x = 43,
        e.y = 27,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.width = 22,
        e.x = 160,
        e.y = 27,
        e
    },
    i.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "已获得龙裔之源：200",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 211,
        e.y = 95,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 37,
        e.source = "king_hamor_level_1_icon_png",
        e.width = 23,
        e.x = 178,
        e.y = 83,
        e
    },
    i.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 40,
        e.source = "king_hamor_level_1_btnSearch_png",
        e.width = 160,
        e.x = 212,
        e.y = 142,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_1_head0_png",
        e.width = 129,
        e.x = 33,
        e.y = 64,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "king_hamor_level_1_line_png",
        e.width = 435,
        e.x = 14,
        e.y = 204,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "king_hamor_level_1_img_vs_png",
        e.width = 88,
        e.x = 183,
        e.y = 359,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_pet_png",
        e.width = 60,
        e.x = 168,
        e.y = 552,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_cure_png",
        e.width = 60,
        e.x = 252,
        e.y = 552,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 35,
        e.y = 405,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this.btnAdd_i(), this.btnFight_i(), this.txt_leftTimes_i(), this._Image9_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 6,
        e.source = "king_hamor_level_1_bg2_png",
        e.width = 387,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "king_hamor_level_1_numbg_png",
        e.width = 222,
        e.x = 18,
        e.y = 94,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "king_hamor_level_0_btnAdd_png",
        e.width = 36,
        e.x = 208,
        e.y = 93,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 40,
        e.source = "king_hamor_level_1_btnFight_png",
        e.width = 120,
        e.x = 71,
        e.y = 34,
        e
    },
    i.txt_leftTimes_i = function() {
        var e = new eui.Label;
        return this.txt_leftTimes = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 36,
        e.y = 102,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_1_head2_png",
        e.width = 129,
        e.x = 252,
        e.y = 8,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 221,
        e.elementsContent = [this._Image10_i(), this.btnStrong_i(), this._Label1_i(), this._Image11_i(), this._Label2_i(), this.star_dark_0_i(), this.star_light_0_i(), this.star_dark_1_i(), this.star_light_1_i(), this.star_dark_2_i(), this.star_light_2_i(), this._Image12_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 6,
        e.source = "king_hamor_level_1_bg1_png",
        e.width = 387,
        e.x = 0,
        e.y = 129,
        e
    },
    i.btnStrong_i = function() {
        var e = new eui.Image;
        return this.btnStrong = e,
        e.height = 40,
        e.source = "king_hamor_level_1_btnStrong_png",
        e.width = 120,
        e.x = 202,
        e.y = 60,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "消耗:",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 220,
        e.y = 102,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 18,
        e.source = "king_hamor_level_1_icon_png",
        e.width = 11,
        e.x = 264,
        e.y = 100,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "12",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 279,
        e.y = 102,
        e
    },
    i.star_dark_0_i = function() {
        var e = new eui.Image;
        return this.star_dark_0 = e,
        e.height = 32,
        e.source = "king_hamor_level_1_star_dark_png",
        e.width = 35,
        e.x = 195,
        e.y = 12,
        e
    },
    i.star_light_0_i = function() {
        var e = new eui.Image;
        return this.star_light_0 = e,
        e.height = 43,
        e.source = "king_hamor_level_1_star_light_png",
        e.width = 47,
        e.x = 189,
        e.y = 7,
        e
    },
    i.star_dark_1_i = function() {
        var e = new eui.Image;
        return this.star_dark_1 = e,
        e.height = 32,
        e.source = "king_hamor_level_1_star_dark_png",
        e.width = 35,
        e.x = 246,
        e.y = 12,
        e
    },
    i.star_light_1_i = function() {
        var e = new eui.Image;
        return this.star_light_1 = e,
        e.height = 43,
        e.source = "king_hamor_level_1_star_light_png",
        e.width = 47,
        e.x = 240,
        e.y = 7,
        e
    },
    i.star_dark_2_i = function() {
        var e = new eui.Image;
        return this.star_dark_2 = e,
        e.height = 32,
        e.source = "king_hamor_level_1_star_dark_png",
        e.width = 35,
        e.x = 296,
        e.y = 12,
        e
    },
    i.star_light_2_i = function() {
        var e = new eui.Image;
        return this.star_light_2 = e,
        e.height = 43,
        e.source = "king_hamor_level_1_star_light_png",
        e.width = 47,
        e.x = 290,
        e.y = 7,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_1_head1_png",
        e.width = 129,
        e.x = 20,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevel2Skin.exml"] = window.KingHamorLevel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_intro", "btnHelp", "txt_damage_0", "_bar_0", "btnChallenge_0", "btnCompose_0", "flag_clear_0", "txt_damage_1", "_bar_1", "btnChallenge_1", "btnCompose_1", "flag_clear_1", "txt_damage_2", "_bar_2", "btnChallenge_2", "btnCompose_2", "flag_clear_2", "btnAdd", "txt_leftTimes", "imgBtn_pet", "imgBtn_cure"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_intro_i(), this.btnHelp_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 11,
            e.source = "king_hamor_level_2_barBg_png",
            e.width = 248,
            e.x = 0,
            e.y = 0,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 9,
            e.source = "king_hamor_level_2_bar_png",
            e.width = 246,
            e.x = 1,
            e.y = 1,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 11,
            e.source = "king_hamor_level_2_barBg_png",
            e.width = 248,
            e.x = 0,
            e.y = 0,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 9,
            e.source = "king_hamor_level_2_bar_png",
            e.width = 246,
            e.x = 1,
            e.y = 1,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 11,
            e.source = "king_hamor_level_2_barBg_png",
            e.width = 248,
            e.x = 0,
            e.y = 0,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 9,
            e.source = "king_hamor_level_2_bar_png",
            e.width = 246,
            e.x = 1,
            e.y = 1,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(15, 0, 3, 640),
        e.source = "king_hamor_level_0_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "king_hamor_level_2_title_png",
        e.width = 110,
        e.x = 43,
        e.y = 25,
        e
    },
    a.txt_intro_i = function() {
        var e = new eui.Label;
        return this.txt_intro = e,
        e.lineSpacing = 8,
        e.size = 18,
        e.text = "挑战水、火、草三灵兽，分别对他们造成33000点\n累计伤害即可通过。",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 65,
        e
    },
    a.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.visible = !1,
        e.width = 22,
        e.x = 160,
        e.y = 26,
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 131,
        e.elementsContent = [this._Image3_i(), this._Label1_i(), this.txt_damage_0_i(), this._bar_0_i(), this.btnChallenge_0_i(), this.btnCompose_0_i(), this.flag_clear_0_i()],
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_2_head0_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "累计伤害：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 161,
        e.y = 21,
        e
    },
    a.txt_damage_0_i = function() {
        var e = new eui.Label;
        return this.txt_damage_0 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "0/33000",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 269,
        e.y = 21,
        e
    },
    a._bar_0_i = function() {
        var e = new eui.ProgressBar;
        return this._bar_0 = e,
        e.height = 11,
        e.width = 248,
        e.x = 133,
        e.y = 46,
        e.skinName = i,
        e
    },
    a.btnChallenge_0_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_0 = e,
        e.height = 40,
        e.source = "king_hamor_level_2_btnChallenge_png",
        e.width = 100,
        e.x = 144,
        e.y = 71,
        e
    },
    a.btnCompose_0_i = function() {
        var e = new eui.Image;
        return this.btnCompose_0 = e,
        e.height = 42,
        e.source = "king_hamor_level_2_btnCompose_png",
        e.width = 102,
        e.x = 271,
        e.y = 71,
        e
    },
    a.flag_clear_0_i = function() {
        var e = new eui.Image;
        return this.flag_clear_0 = e,
        e.height = 105,
        e.source = "king_hamor_level_2_flag_clear_png",
        e.width = 105,
        e.x = 13,
        e.y = 12,
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 263,
        e.elementsContent = [this._Image4_i(), this._Label2_i(), this.txt_damage_1_i(), this._bar_1_i(), this.btnChallenge_1_i(), this.btnCompose_1_i(), this.flag_clear_1_i()],
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_2_head1_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "累计伤害：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 161,
        e.y = 21,
        e
    },
    a.txt_damage_1_i = function() {
        var e = new eui.Label;
        return this.txt_damage_1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "0/33000",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 269,
        e.y = 21,
        e
    },
    a._bar_1_i = function() {
        var e = new eui.ProgressBar;
        return this._bar_1 = e,
        e.height = 11,
        e.width = 248,
        e.x = 133,
        e.y = 46,
        e.skinName = n,
        e
    },
    a.btnChallenge_1_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_1 = e,
        e.height = 40,
        e.source = "king_hamor_level_2_btnChallenge_png",
        e.width = 100,
        e.x = 144,
        e.y = 71,
        e
    },
    a.btnCompose_1_i = function() {
        var e = new eui.Image;
        return this.btnCompose_1 = e,
        e.height = 42,
        e.source = "king_hamor_level_2_btnCompose_png",
        e.width = 102,
        e.x = 271,
        e.y = 71,
        e
    },
    a.flag_clear_1_i = function() {
        var e = new eui.Image;
        return this.flag_clear_1 = e,
        e.height = 105,
        e.source = "king_hamor_level_2_flag_clear_png",
        e.width = 105,
        e.x = 13,
        e.y = 12,
        e
    },
    a._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 395,
        e.elementsContent = [this._Image5_i(), this._Label3_i(), this.txt_damage_2_i(), this._bar_2_i(), this.btnChallenge_2_i(), this.btnCompose_2_i(), this.flag_clear_2_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 129,
        e.source = "king_hamor_level_2_head2_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "累计伤害：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 161,
        e.y = 21,
        e
    },
    a.txt_damage_2_i = function() {
        var e = new eui.Label;
        return this.txt_damage_2 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "0/33000",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 269,
        e.y = 21,
        e
    },
    a._bar_2_i = function() {
        var e = new eui.ProgressBar;
        return this._bar_2 = e,
        e.height = 11,
        e.width = 248,
        e.x = 133,
        e.y = 46,
        e.skinName = _,
        e
    },
    a.btnChallenge_2_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_2 = e,
        e.height = 40,
        e.source = "king_hamor_level_2_btnChallenge_png",
        e.width = 100,
        e.x = 144,
        e.y = 72,
        e
    },
    a.btnCompose_2_i = function() {
        var e = new eui.Image;
        return this.btnCompose_2 = e,
        e.height = 42,
        e.source = "king_hamor_level_2_btnCompose_png",
        e.width = 102,
        e.x = 271,
        e.y = 72,
        e
    },
    a.flag_clear_2_i = function() {
        var e = new eui.Image;
        return this.flag_clear_2 = e,
        e.height = 105,
        e.source = "king_hamor_level_2_flag_clear_png",
        e.width = 105,
        e.x = 13,
        e.y = 12,
        e
    },
    a._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 175,
        e.y = 566,
        e.elementsContent = [this._Image6_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "king_hamor_level_0_numbg_png",
        e.width = 233,
        e.x = 0,
        e.y = 1,
        e
    },
    a.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "king_hamor_level_0_btnAdd_png",
        e.width = 36,
        e.x = 217,
        e.y = 0,
        e
    },
    a.txt_leftTimes_i = function() {
        var e = new eui.Label;
        return this.txt_leftTimes = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：10/10",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 7,
        e.y = 9,
        e
    },
    a.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_pet_png",
        e.width = 60,
        e.x = 39,
        e.y = 552,
        e
    },
    a.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_cure_png",
        e.width = 60,
        e.x = 103,
        e.y = 553,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevel3Skin.exml"] = window.KingHamorLevel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_num", "icon", "btnSynthesis", "txt_synNum", "Dragonballbg", "ball_6_dark", "ball_6_light", "ball_5_dark", "ball_5_light", "ball_4_dark", "ball_4_light", "ball_3_dark", "ball_3_light", "ball_2_dark", "ball_2_light", "ball_1_dark", "ball_1_light", "ball_0_dark", "ball_0_light", "Dragonball", "btnHelp", "btnDragon_0", "btnDragon_1", "numbg", "btnAdd", "txt_leftTimes", "times", "imgBtn_pet", "imgBtn_cure"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this.txt_num_i(), this.icon_i(), this.btnSynthesis_i(), this.txt_synNum_i(), this.Dragonball_i(), this.btnHelp_i(), this.btnDragon_0_i(), this.btnDragon_1_i(), this.times_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(15, 0, 3, 640),
        e.source = "king_hamor_level_0_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "king_hamor_level_3_title_png",
        e.width = 109,
        e.x = 43,
        e.y = 25,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "king_hamor_level_3_xingxiebg_png",
        e.width = 267,
        e.x = 60,
        e.y = 281,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "已获得龙魂星屑",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 290,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "：",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 243,
        e.y = 290,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "20",
        e.textColor = 16776525,
        e.touchEnabled = !1,
        e.x = 262,
        e.y = 290,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 30,
        e.source = "king_hamor_level_3_icon_png",
        e.width = 28,
        e.x = 215,
        e.y = 282,
        e
    },
    i.btnSynthesis_i = function() {
        var e = new eui.Image;
        return this.btnSynthesis = e,
        e.height = 40,
        e.source = "king_hamor_level_3_btnSynthesis_png",
        e.width = 90,
        e.x = 331,
        e.y = 274,
        e
    },
    i.txt_synNum_i = function() {
        var e = new eui.Label;
        return this.txt_synNum = e,
        e.size = 18,
        e.text = "已合成20/20个龙珠",
        e.textColor = 16773279,
        e.x = 282,
        e.y = 321,
        e
    },
    i.Dragonball_i = function() {
        var e = new eui.Group;
        return this.Dragonball = e,
        e.x = 121,
        e.y = 68,
        e.elementsContent = [this.Dragonballbg_i(), this.ball_6_dark_i(), this.ball_6_light_i(), this.ball_5_dark_i(), this.ball_5_light_i(), this.ball_4_dark_i(), this.ball_4_light_i(), this.ball_3_dark_i(), this.ball_3_light_i(), this.ball_2_dark_i(), this.ball_2_light_i(), this.ball_1_dark_i(), this.ball_1_light_i(), this.ball_0_dark_i(), this.ball_0_light_i()],
        e
    },
    i.Dragonballbg_i = function() {
        var e = new eui.Image;
        return this.Dragonballbg = e,
        e.height = 221,
        e.source = "king_hamor_level_3_Dragonballbg_png",
        e.width = 221,
        e.x = 0,
        e.y = 0,
        e
    },
    i.ball_6_dark_i = function() {
        var e = new eui.Image;
        return this.ball_6_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_6_dark_png",
        e.width = 72,
        e.x = 74,
        e.y = 75,
        e
    },
    i.ball_6_light_i = function() {
        var e = new eui.Image;
        return this.ball_6_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_6_light_png",
        e.width = 72,
        e.x = 74,
        e.y = 75,
        e
    },
    i.ball_5_dark_i = function() {
        var e = new eui.Image;
        return this.ball_5_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_5_dark_png",
        e.width = 72,
        e.x = 113,
        e.y = 140,
        e
    },
    i.ball_5_light_i = function() {
        var e = new eui.Image;
        return this.ball_5_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_5_light_png",
        e.width = 72,
        e.x = 113,
        e.y = 140,
        e
    },
    i.ball_4_dark_i = function() {
        var e = new eui.Image;
        return this.ball_4_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_4_dark_png",
        e.width = 72,
        e.x = 34,
        e.y = 140,
        e
    },
    i.ball_4_light_i = function() {
        var e = new eui.Image;
        return this.ball_4_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_4_light_png",
        e.width = 72,
        e.x = 34,
        e.y = 140,
        e
    },
    i.ball_3_dark_i = function() {
        var e = new eui.Image;
        return this.ball_3_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_3_dark_png",
        e.width = 72,
        e.x = 148,
        e.y = 75,
        e
    },
    i.ball_3_light_i = function() {
        var e = new eui.Image;
        return this.ball_3_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_3_light_png",
        e.width = 72,
        e.x = 148,
        e.y = 75,
        e
    },
    i.ball_2_dark_i = function() {
        var e = new eui.Image;
        return this.ball_2_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_2_dark_png",
        e.width = 72,
        e.x = 0,
        e.y = 75,
        e
    },
    i.ball_2_light_i = function() {
        var e = new eui.Image;
        return this.ball_2_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_2_light_png",
        e.width = 72,
        e.x = 0,
        e.y = 75,
        e
    },
    i.ball_1_dark_i = function() {
        var e = new eui.Image;
        return this.ball_1_dark = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_1_dark_png",
        e.width = 72,
        e.x = 113,
        e.y = 6,
        e
    },
    i.ball_1_light_i = function() {
        var e = new eui.Image;
        return this.ball_1_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_1_light_png",
        e.width = 72,
        e.x = 113,
        e.y = 6,
        e
    },
    i.ball_0_dark_i = function() {
        var e = new eui.Image;
        return this.ball_0_dark = e,
        e.height = 48,
        e.source = "king_hamor_level_3_ball_0_dark_png",
        e.width = 48,
        e.x = 46,
        e.y = 18,
        e
    },
    i.ball_0_light_i = function() {
        var e = new eui.Image;
        return this.ball_0_light = e,
        e.height = 72,
        e.source = "king_hamor_level_3_ball_0_light_png",
        e.width = 72,
        e.x = 34,
        e.y = 6,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.width = 22,
        e.x = 160,
        e.y = 26,
        e
    },
    i.btnDragon_0_i = function() {
        var e = new eui.Image;
        return this.btnDragon_0 = e,
        e.height = 195,
        e.source = "king_hamor_level_3_btnDragon1_png",
        e.width = 180,
        e.x = 48,
        e.y = 337,
        e
    },
    i.btnDragon_1_i = function() {
        var e = new eui.Image;
        return this.btnDragon_1 = e,
        e.height = 197,
        e.source = "king_hamor_level_3_btnDragon2_png",
        e.width = 180,
        e.x = 241,
        e.y = 335,
        e
    },
    i.times_i = function() {
        var e = new eui.Group;
        return this.times = e,
        e.x = 175,
        e.y = 566,
        e.elementsContent = [this.numbg_i(), this.btnAdd_i(), this.txt_leftTimes_i()],
        e
    },
    i.numbg_i = function() {
        var e = new eui.Image;
        return this.numbg = e,
        e.height = 32,
        e.source = "king_hamor_level_0_numbg_png",
        e.width = 233,
        e.x = 0,
        e.y = 1,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "king_hamor_level_0_btnAdd_png",
        e.width = 36,
        e.x = 217,
        e.y = 0,
        e
    },
    i.txt_leftTimes_i = function() {
        var e = new eui.Label;
        return this.txt_leftTimes = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 13,
        e.y = 9,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_pet_png",
        e.width = 60,
        e.x = 39,
        e.y = 552,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_cure_png",
        e.width = 60,
        e.x = 103,
        e.y = 553,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevel4Skin.exml"] = window.KingHamorLevel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_progress", "btnSummit", "btnGet", "btnCoronation", "txt_itemNum_2", "btnAdd_2", "txt_itemNum_1", "btnAdd_1", "txt_itemNum_0", "btnAdd_0", "flag_got", "btnHelp", "txt_dailyNum_2", "btnChallenge_2", "txt_dailyNum_1", "btnChallenge_1", "txt_dailyNum_0", "btnChallenge_0", "imgBtn_pet", "imgBtn_cure"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.txt_progress_i(), this.btnSummit_i(), this.btnGet_i(), this.btnCoronation_i(), this._Image3_i(), this._Image4_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Image8_i(), this.flag_got_i(), this.btnHelp_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(15, 0, 3, 640),
        e.source = "king_hamor_level_0_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "king_hamor_level_4_title_png",
        e.width = 109,
        e.x = 43,
        e.y = 26,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "目前完成度：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 59,
        e.y = 183,
        e
    },
    i.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "30%",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 161,
        e.y = 183,
        e
    },
    i.btnSummit_i = function() {
        var e = new eui.Image;
        return this.btnSummit = e,
        e.height = 42,
        e.source = "king_hamor_level_4_btnSummit_png",
        e.width = 102,
        e.x = 73,
        e.y = 206,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 40,
        e.source = "king_hamor_level_4_btnGet_png",
        e.visible = !0,
        e.width = 100,
        e.x = 74,
        e.y = 207,
        e
    },
    i.btnCoronation_i = function() {
        var e = new eui.Image;
        return this.btnCoronation = e,
        e.height = 40,
        e.source = "king_hamor_level_4_btnCoronation_png",
        e.visible = !0,
        e.width = 100,
        e.x = 74,
        e.y = 207,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "king_hamor_level_4_line_png",
        e.width = 195,
        e.x = 233,
        e.y = 129,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "king_hamor_level_4_line_png",
        e.width = 195,
        e.x = 233,
        e.y = 184,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 236,
        e.y = 193,
        e.elementsContent = [this.txt_itemNum_2_i(), this.btnAdd_2_i(), this._Image5_i()],
        e
    },
    i.txt_itemNum_2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum_2 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "目前拥有20个",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 41,
        e.y = 11,
        e
    },
    i.btnAdd_2_i = function() {
        var e = new eui.Image;
        return this.btnAdd_2 = e,
        e.height = 36,
        e.source = "king_hamor_level_4_btnAdd_0_png",
        e.visible = !0,
        e.width = 36,
        e.x = 157,
        e.y = 2,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 39,
        e.source = "king_hamor_level_4_item_2_png",
        e.width = 32,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 237,
        e.y = 140,
        e.elementsContent = [this.txt_itemNum_1_i(), this.btnAdd_1_i(), this._Image6_i()],
        e
    },
    i.txt_itemNum_1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum_1 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "目前拥有20个",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 40,
        e.y = 9,
        e
    },
    i.btnAdd_1_i = function() {
        var e = new eui.Image;
        return this.btnAdd_1 = e,
        e.height = 36,
        e.source = "king_hamor_level_4_btnAdd_0_png",
        e.visible = !0,
        e.width = 36,
        e.x = 156,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "king_hamor_level_4_item_1_png",
        e.width = 29,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 241,
        e.y = 79,
        e.elementsContent = [this.txt_itemNum_0_i(), this.btnAdd_0_i(), this._Image7_i()],
        e
    },
    i.txt_itemNum_0_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum_0 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "目前拥有20个",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 36,
        e.y = 13,
        e
    },
    i.btnAdd_0_i = function() {
        var e = new eui.Image;
        return this.btnAdd_0 = e,
        e.height = 36,
        e.source = "king_hamor_level_4_btnAdd_0_png",
        e.visible = !0,
        e.width = 36,
        e.x = 152,
        e.y = 6,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 43,
        e.source = "king_hamor_level_4_item_0_png",
        e.width = 22,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 121,
        e.source = "king_hamor_level_4_corwn_png",
        e.width = 108,
        e.x = 68,
        e.y = 62,
        e
    },
    i.flag_got_i = function() {
        var e = new eui.Image;
        return this.flag_got = e,
        e.height = 37,
        e.source = "king_hamor_level_4_flag_got_png",
        e.width = 150,
        e.x = 47,
        e.y = 110,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.width = 22,
        e.x = 160,
        e.y = 26,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 441,
        e.elementsContent = [this._Image9_i(), this._Label2_i(), this._Image10_i(), this._Label3_i(), this.txt_dailyNum_2_i(), this._Label4_i(), this.btnChallenge_2_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "king_hamor_level_4_boss_2_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "每次战胜可获得",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 26,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 23,
        e.source = "king_hamor_level_4_item_2_png",
        e.width = 19,
        e.x = 252,
        e.y = 22,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日已获得：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 59,
        e
    },
    i.txt_dailyNum_2_i = function() {
        var e = new eui.Label;
        return this.txt_dailyNum_2 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10/10",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 225,
        e.y = 59,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "x1",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 28,
        e
    },
    i.btnChallenge_2_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_2 = e,
        e.height = 40,
        e.source = "king_hamor_level_4_btnChallenge_0_png",
        e.width = 90,
        e.x = 307,
        e.y = 31,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 351,
        e.elementsContent = [this._Image11_i(), this._Label5_i(), this._Image12_i(), this._Label6_i(), this.txt_dailyNum_1_i(), this._Label7_i(), this.btnChallenge_1_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "king_hamor_level_4_boss_1_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "每次战胜可获得",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 26,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "king_hamor_level_4_item_1_png",
        e.width = 18,
        e.x = 254,
        e.y = 24,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日已获得：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 59,
        e
    },
    i.txt_dailyNum_1_i = function() {
        var e = new eui.Label;
        return this.txt_dailyNum_1 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10/10",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 225,
        e.y = 59,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "x1",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 28,
        e
    },
    i.btnChallenge_1_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_1 = e,
        e.height = 40,
        e.source = "king_hamor_level_4_btnChallenge_0_png",
        e.width = 90,
        e.x = 307,
        e.y = 31,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 31,
        e.y = 261,
        e.elementsContent = [this._Image13_i(), this._Label8_i(), this._Image14_i(), this._Label9_i(), this.txt_dailyNum_0_i(), this._Label10_i(), this.btnChallenge_0_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "king_hamor_level_4_boss_0_png",
        e.width = 391,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "每次战胜可获得",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 26,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "king_hamor_level_4_item_0_png",
        e.width = 13,
        e.x = 259,
        e.y = 21,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日已获得：",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 118,
        e.y = 59,
        e
    },
    i.txt_dailyNum_0_i = function() {
        var e = new eui.Label;
        return this.txt_dailyNum_0 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "10/10",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 225,
        e.y = 59,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 16,
        e.text = "x2",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 275,
        e.y = 28,
        e
    },
    i.btnChallenge_0_i = function() {
        var e = new eui.Image;
        return this.btnChallenge_0 = e,
        e.height = 40,
        e.source = "king_hamor_level_4_btnChallenge_0_png",
        e.width = 90,
        e.x = 307,
        e.y = 31,
        e
    },
    i.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_pet_png",
        e.width = 60,
        e.x = 168,
        e.y = 552,
        e
    },
    i.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "king_hamor_level_0_imgBtn_cure_png",
        e.width = 60,
        e.x = 252,
        e.y = 552,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KingHamorLevelSkin.exml"] = window.KingHamorLevelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBack", "line_0", "line_1", "line_2", "line_3", "line_4", "line_5", "line_6", "line_7", "com_0", "comic_0", "btnPass_0", "com_1", "level_0", "flag_pass_0", "com_2", "comic_1", "btnPass_1", "com_3", "level_1", "flag_pass_1", "com_4", "comic_2", "btnPass_2", "com_5", "level_2", "flag_pass_2", "com_6", "comic_3", "btnPass_3", "com_7", "level_3", "flag_pass_3", "com_8", "level_4", "flag_pass_4", "flag_selected", "_rect", "grp_level", "_scrl", "_mask", "grp_panel"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grp_panel_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_panel_i = function() {
        var e = new eui.Group;
        return this.grp_panel = e,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 1136,
        e.elementsContent = [this.bg_i(), this.btnBack_i(), this.grp_level_i(), this._scrl_i(), this._mask_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.source = "king_hamor_level_bg_4_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.height = 61,
        e.source = "king_hamor_level_btnBack_png",
        e.width = 55,
        e.x = 22,
        e.y = 9,
        e
    },
    i.grp_level_i = function() {
        var e = new eui.Group;
        return this.grp_level = e,
        e.height = 423,
        e.visible = !0,
        e.width = 1596,
        e.x = 0,
        e.y = 112,
        e.elementsContent = [this.line_0_i(), this.line_1_i(), this.line_2_i(), this.line_3_i(), this.line_4_i(), this.line_5_i(), this.line_6_i(), this.line_7_i(), this.comic_0_i(), this.level_0_i(), this.flag_pass_0_i(), this.comic_1_i(), this.level_1_i(), this.flag_pass_1_i(), this.comic_2_i(), this.level_2_i(), this.flag_pass_2_i(), this.comic_3_i(), this.level_3_i(), this.flag_pass_3_i(), this.level_4_i(), this.flag_pass_4_i(), this.flag_selected_i(), this._rect_i()],
        e
    },
    i.line_0_i = function() {
        var e = new eui.Image;
        return this.line_0 = e,
        e.height = 8,
        e.source = "king_hamor_grp_level_line_0_png",
        e.width = 63,
        e.x = 204,
        e.y = 71,
        e
    },
    i.line_1_i = function() {
        var e = new eui.Image;
        return this.line_1 = e,
        e.height = 72,
        e.source = "king_hamor_grp_level_line_1_png",
        e.width = 108,
        e.x = 249,
        e.y = 183,
        e
    },
    i.line_2_i = function() {
        var e = new eui.Image;
        return this.line_2 = e,
        e.height = 8,
        e.source = "king_hamor_grp_level_line_0_png",
        e.width = 63,
        e.x = 334,
        e.y = 319,
        e
    },
    i.line_3_i = function() {
        var e = new eui.Image;
        return this.line_3 = e,
        e.height = 188,
        e.source = "king_hamor_grp_level_line_3_png",
        e.width = 119,
        e.x = 572,
        e.y = 139,
        e
    },
    i.line_4_i = function() {
        var e = new eui.Image;
        return this.line_4 = e,
        e.height = 8,
        e.source = "king_hamor_grp_level_line_0_png",
        e.width = 63,
        e.x = 778,
        e.y = 66,
        e
    },
    i.line_5_i = function() {
        var e = new eui.Image;
        return this.line_5 = e,
        e.height = 72,
        e.source = "king_hamor_grp_level_line_5_png",
        e.width = 8,
        e.x = 923,
        e.y = 183,
        e
    },
    i.line_6_i = function() {
        var e = new eui.Image;
        return this.line_6 = e,
        e.height = 8,
        e.source = "king_hamor_grp_level_line_0_png",
        e.width = 63,
        e.x = 1017,
        e.y = 315,
        e
    },
    i.line_7_i = function() {
        var e = new eui.Image;
        return this.line_7 = e,
        e.height = 114,
        e.source = "king_hamor_grp_level_line_7_png",
        e.width = 135,
        e.x = 1253,
        e.y = 213,
        e
    },
    i.comic_0_i = function() {
        var e = new eui.Group;
        return this.comic_0 = e,
        e.x = 34,
        e.y = 11,
        e.elementsContent = [this.com_0_i()],
        e
    },
    i.com_0_i = function() {
        var e = new eui.Image;
        return this.com_0 = e,
        e.height = 126,
        e.name = "comic_0",
        e.source = "king_hamor_grp_level_comic_0_png",
        e.width = 172,
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_0_i = function() {
        var e = new eui.Group;
        return this.level_0 = e,
        e.x = 271,
        e.y = 9,
        e.elementsContent = [this.btnPass_0_i(), this.com_1_i()],
        e
    },
    i.btnPass_0_i = function() {
        var e = new eui.Image;
        return this.btnPass_0 = e,
        e.height = 40,
        e.source = "king_hamor_grp_level_btnPass_png",
        e.width = 156,
        e.x = 5,
        e.y = 128,
        e
    },
    i.com_1_i = function() {
        var e = new eui.Image;
        return this.com_1 = e,
        e.height = 128,
        e.name = "level_0",
        e.source = "king_hamor_grp_level_level_0_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_pass_0_i = function() {
        var e = new eui.Image;
        return this.flag_pass_0 = e,
        e.height = 81,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "king_hamor_level_flag_pass_png",
        e.width = 156,
        e.x = 276,
        e.y = 63,
        e
    },
    i.comic_1_i = function() {
        var e = new eui.Group;
        return this.comic_1 = e,
        e.x = 164,
        e.y = 256,
        e.elementsContent = [this.com_2_i()],
        e
    },
    i.com_2_i = function() {
        var e = new eui.Image;
        return this.com_2 = e,
        e.height = 128,
        e.name = "comic_1",
        e.source = "king_hamor_grp_level_comic_1_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_1_i = function() {
        var e = new eui.Group;
        return this.level_1 = e,
        e.x = 401,
        e.y = 256,
        e.elementsContent = [this.btnPass_1_i(), this.com_3_i()],
        e
    },
    i.btnPass_1_i = function() {
        var e = new eui.Image;
        return this.btnPass_1 = e,
        e.height = 40,
        e.source = "king_hamor_grp_level_btnPass_png",
        e.width = 156,
        e.x = 5,
        e.y = 127,
        e
    },
    i.com_3_i = function() {
        var e = new eui.Image;
        return this.com_3 = e,
        e.height = 128,
        e.name = "level_1",
        e.source = "king_hamor_grp_level_level_1_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_pass_1_i = function() {
        var e = new eui.Image;
        return this.flag_pass_1 = e,
        e.height = 81,
        e.source = "king_hamor_level_flag_pass_png",
        e.width = 156,
        e.x = 406,
        e.y = 310,
        e
    },
    i.comic_2_i = function() {
        var e = new eui.Group;
        return this.comic_2 = e,
        e.x = 608,
        e.y = 10,
        e.elementsContent = [this.com_4_i()],
        e
    },
    i.com_4_i = function() {
        var e = new eui.Image;
        return this.com_4 = e,
        e.height = 128,
        e.name = "comic_2",
        e.source = "king_hamor_grp_level_comic_2_png",
        e.width = 172,
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_2_i = function() {
        var e = new eui.Group;
        return this.level_2 = e,
        e.x = 845,
        e.y = 10,
        e.elementsContent = [this.btnPass_2_i(), this.com_5_i()],
        e
    },
    i.btnPass_2_i = function() {
        var e = new eui.Image;
        return this.btnPass_2 = e,
        e.height = 40,
        e.source = "king_hamor_grp_level_btnPass_png",
        e.width = 156,
        e.x = 5,
        e.y = 127,
        e
    },
    i.com_5_i = function() {
        var e = new eui.Image;
        return this.com_5 = e,
        e.height = 128,
        e.name = "level_2",
        e.source = "king_hamor_grp_level_level_2_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_pass_2_i = function() {
        var e = new eui.Image;
        return this.flag_pass_2 = e,
        e.height = 81,
        e.source = "king_hamor_level_flag_pass_png",
        e.width = 156,
        e.x = 850,
        e.y = 64,
        e
    },
    i.comic_3_i = function() {
        var e = new eui.Group;
        return this.comic_3 = e,
        e.x = 845,
        e.y = 256,
        e.elementsContent = [this.com_6_i()],
        e
    },
    i.com_6_i = function() {
        var e = new eui.Image;
        return this.com_6 = e,
        e.height = 128,
        e.name = "comic_3",
        e.source = "king_hamor_grp_level_comic_3_png",
        e.width = 172,
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_3_i = function() {
        var e = new eui.Group;
        return this.level_3 = e,
        e.x = 1082,
        e.y = 256,
        e.elementsContent = [this.btnPass_3_i(), this.com_7_i()],
        e
    },
    i.btnPass_3_i = function() {
        var e = new eui.Image;
        return this.btnPass_3 = e,
        e.height = 40,
        e.source = "king_hamor_grp_level_btnPass_png",
        e.width = 156,
        e.x = 5,
        e.y = 127,
        e
    },
    i.com_7_i = function() {
        var e = new eui.Image;
        return this.com_7 = e,
        e.height = 128,
        e.name = "level_3",
        e.source = "king_hamor_grp_level_level_3_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_pass_3_i = function() {
        var e = new eui.Image;
        return this.flag_pass_3 = e,
        e.height = 81,
        e.source = "king_hamor_level_flag_pass_png",
        e.width = 156,
        e.x = 1087,
        e.y = 310,
        e
    },
    i.level_4_i = function() {
        var e = new eui.Group;
        return this.level_4 = e,
        e.x = 1395,
        e.y = 152,
        e.elementsContent = [this.com_8_i()],
        e
    },
    i.com_8_i = function() {
        var e = new eui.Image;
        return this.com_8 = e,
        e.height = 128,
        e.name = "level_4",
        e.source = "king_hamor_grp_level_comic_4_png",
        e.width = 171,
        e.x = 0,
        e.y = 0,
        e
    },
    i.flag_pass_4_i = function() {
        var e = new eui.Image;
        return this.flag_pass_4 = e,
        e.height = 81,
        e.source = "king_hamor_level_flag_pass_png",
        e.width = 156,
        e.x = 1400,
        e.y = 176,
        e
    },
    i.flag_selected_i = function() {
        var e = new eui.Image;
        return this.flag_selected = e,
        e.height = 124,
        e.source = "king_hamor_grp_level_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 174,
        e.x = 30,
        e.y = 11,
        e
    },
    i._rect_i = function() {
        var e = new eui.Rect;
        return this._rect = e,
        e.fillAlpha = 0,
        e.height = 20,
        e.width = 30,
        e.x = 1566,
        e.y = 363,
        e
    },
    i._scrl_i = function() {
        var e = new eui.Scroller;
        return this._scrl = e,
        e.height = 423,
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 109,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 66,
        e.y = 3,
        e
    },
    i._mask_i = function() {
        var e = new eui.Rect;
        return this._mask = e,
        e.alpha = .4,
        e.height = 640,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);