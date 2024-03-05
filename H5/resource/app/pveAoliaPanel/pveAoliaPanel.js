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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._maxTimes = 10,
            t._boss = 10012,
            t.skinName = PveAoliaAyaPop2Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAyaPop2"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.btnPlus,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250782, 1,
                    function() {
                        KTool.doExchange(10346, 1,
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOnetap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250781, 1,
                    function() {
                        SocketConnection.sendByQueue(43261, [5, 0],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(7),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss))
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6898, 15443, 6901],
            function(e) {
                t._getState = KTool.getBit(e[0], 3),
                t._dailyNum = e[1],
                t._defeatTimes = e[2],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            if (this._getState) return void this.hide();
            this.txt_fightTimes.text = "今日可挑战：" + Math.max(0, this._maxTimes - this._dailyNum),
            DisplayUtil.setEnabled(this.btnPlus, this._dailyNum >= this._maxTimes, !0);
            for (var t = 0,
            e = this._defeatTimes; e;) t++,
            e &= e - 1;
            var i = 4 * t;
            this.grp_flag.removeChildren();
            for (var n = 0; 40 > n; n++) {
                var a = Math.floor(n / 4),
                _ = n % 4,
                o = new eui.Component;
                o.skinName = ZhendeFlagItemSkin,
                o.light.visible = i > n,
                o.x = 7 * _ + 45 * a,
                o.y = 55 * _ - 5 * a,
                this.grp_flag.addChild(o)
            }
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_AYA),
            ImageButtonUtil.removeAll(this),
            this.grp_flag.removeChildren(),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAyaPop2 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAyaPop2")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._type = t.type,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            switch (e.prototype.childrenCreated.call(this), EventManager.addEventListener(i.CLOSE_MODULE, this.closeModule, this), this._type) {
            case 1:
                this._curPanel = new t.PveAoliaPanelAya,
                this.addChild(this._curPanel);
                break;
            case 2:
                this._curPanel = new t.PveAoliaPanelAliya,
                this.addChild(this._curPanel);
                break;
            case 3:
                this._curPanel = new t.PveAoliaPanelAolia,
                this.addChild(this._curPanel)
            }
        },
        i.prototype.closeModule = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel)),
            ModuleManager.hideModule(this),
            ModuleManager.showModuleByID(67)
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(i.CLOSE_MODULE, this.closeModule, this),
            e.prototype.destroy.call(this)
        },
        i.CLOSE_MODULE = "aolia_close_module",
        i.UPDATE_AYA = "update_aya",
        i.UPDATE_ALIYA = "update_aliya",
        i.UPDATE_AOLIA = "update_aolia",
        i
    } (BaseModule);
    t.PveAoliaPanel = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaPanel")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._bossList = [10119, 10120, 10121, 10122],
            t._itemId = 1713674,
            t.skinName = PveAoliaAliyaPop1Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._box = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "canopen"),
            this._box && (this._box.scaleX = this._box.scaleY = .6, this._box.x = 679, this._box.y = 394),
            this.addChild(this._box),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAliyaPop1"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(11),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["boss_" + e],
                function() {
                    t.hide(),
                    FightManager.fightNoMapBoss("", t._bossList[e])
                },
                i)
            },
            i = this, n = 0; 4 > n; n++) e(n);
            ImageButtonUtil.add(this._box,
            function() {
                SocketConnection.sendByQueue(46336, [2],
                function() {
                    BubblerManager.getInstance().showText("今日海盗小将已清理完毕！"),
                    t.hide()
                })
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([16621, 16622],
            function(e) {
                t._bossState = e[0],
                t._getState = KTool.getBit(e[0], 5),
                t._roundNum = e[1],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            for (var t = 0,
            e = 0; 4 > e; e++) this["flag_win_" + e].visible = KTool.getBit(this._bossState, e + 1),
            this["boss_" + e].touchEnabled = !KTool.getBit(this._bossState, e + 1),
            t += KTool.getBit(this._bossState, e + 1);
            this.txt_progress.text = this._roundNum + "/20",
            t >= 4 && this._roundNum <= 20 ? (this._box.gotoAndPlay(1, -1), this._box.touchEnabled = !0) : (this._box.gotoAndStop(1), this._box.touchEnabled = !1),
            this.img_box.visible = !1
        },
        i.prototype.destroy = function() {
            this._box && core.manager.MovieClipManager.getInstance().releaseMovieClip(this._box, !0),
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_ALIYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAliyaPop1 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAliyaPop1")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._bossList = [10123, 10124, 10125],
            t._itemId = 1713674,
            t.skinName = PveAoliaAliyaPop2Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._box = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "canopen"),
            this._box && (this._box.scaleX = this._box.scaleY = .6, this._box.x = 679, this._box.y = 394),
            this.addChild(this._box),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAliyaPop2"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(12),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["boss_" + e],
                function() {
                    t.hide(),
                    FightManager.fightNoMapBoss("", t._bossList[e])
                },
                i)
            },
            i = this, n = 0; 3 > n; n++) e(n);
            ImageButtonUtil.add(this._box,
            function() {
                SocketConnection.sendByQueue(46336, [3],
                function() {
                    BubblerManager.getInstance().showText("今日海盗首领已清理完毕！"),
                    t.hide()
                })
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([16623],
            function(e) {
                t._bossState = 7 & e[0],
                t._conditionState = e[0] >> 3 & 7,
                t._getState = KTool.getBit(e[0], 7),
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            for (var t = KTool.getBit(this._conditionState, 1) + KTool.getBit(this._conditionState, 2) + KTool.getBit(this._conditionState, 3), e = 0; 3 > e; e++) this["flag_win_" + e].visible = KTool.getBit(this._bossState, e + 1) || KTool.getBit(this._conditionState, e + 1),
            this["boss_" + e].touchEnabled = !KTool.getBit(this._bossState, e + 1) && !KTool.getBit(this._conditionState, e + 1);
            this.txt_progress.text = t + "/3",
            t >= 3 ? (this._box.gotoAndPlay(1, -1), this._box.touchEnabled = !0) : (this._box.gotoAndStop(1), this._box.touchEnabled = !1),
            this.img_box.visible = !1
        },
        i.prototype.destroy = function() {
            this._box && core.manager.MovieClipManager.getInstance().releaseMovieClip(this._box, !0),
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_ALIYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAliyaPop2 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAliyaPop2")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._maxTimes = 10,
            t._boss0 = 10008,
            t._boss1 = 10009,
            t._itemId0 = 1713570,
            t._itemId1 = 1713575,
            t.percentList = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            t._isMaking = !1,
            t.skinName = PveAoliaAyaPop0Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.itemChange = function(t) {
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAyaPop0"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250780, 1,
                    function() {
                        KTool.doExchange(10344, 1,
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPlus0,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1713570,
                        productID: 250777
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(250777, i,
                        function() {
                            KTool.doExchange(10348, i,
                            function() {
                                t.updateData()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPlus1,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1713575,
                        productID: 250778
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(250778, i,
                        function() {
                            KTool.doExchange(10349, i,
                            function() {
                                t.updateData()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250780, 1,
                    function() {
                        KTool.doExchange(10344, 1,
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOnetap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250779, 1,
                    function() {
                        t._isMaking = !0,
                        SocketConnection.sendByQueue(43261, [4, 2],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(5),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnMake,
            function() {
                return ItemManager.getNumByID(t._itemId0) <= 0 || ItemManager.getNumByID(t._itemId1) <= 0 ? void Alarm.show("道具不足！") : (t._isMaking = !0, void SocketConnection.sendByQueue(43261, [4, 1],
                function() {
                    t.updateData()
                }))
            },
            this),
            ImageButtonUtil.add(this.btnFight_0,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss0))
            },
            this),
            ImageButtonUtil.add(this.btnFight_1,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss1))
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6898, 6899, 15441],
            function(e) {
                t._getState = KTool.getBit(e[0], 1),
                t._madeTimes = e[1],
                t._dailyNum = e[2],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            return this._getState ? (BubblerManager.getInstance().showText("制作成功！"), void this.hide()) : (this._isMaking && (BubblerManager.getInstance().showText("制作失败，请再接再厉！"), this._isMaking = !1), this.txt_fightTimes.text = "今日可挑战次数：" + Math.max(0, this._maxTimes - this._dailyNum), this.txt_item_0.text = "已获得眼镜：" + ItemManager.getNumByID(this._itemId0), this.txt_item_1.text = "已获得墨水：" + ItemManager.getNumByID(this._itemId1), this.txt_probability.text = this.percentList[this._madeTimes] + "%", void DisplayUtil.setEnabled(this.btnAdd, this._dailyNum >= this._maxTimes, !0))
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_AYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAyaPop0 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAyaPop0")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._maxTimes = 10,
            t._boss0 = 10010,
            t._boss1 = 10011,
            t.skinName = PveAoliaAyaPop1Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAyaPop1"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250783, 1,
                    function() {
                        KTool.doExchange(10345, 1,
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(6),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnFight_0,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss0))
            },
            this),
            ImageButtonUtil.add(this.btnFight_1,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss1))
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6898, 15442],
            function(e) {
                t._getState = KTool.getBit(e[0], 2),
                t._dailyNum = e[1],
                KTool.getBitSet([16424, 16425],
                function(e) {
                    t._state_0 = e[0],
                    t._state_1 = e[1],
                    t.updateView()
                })
            })
        },
        i.prototype.updateView = function() {
            return this._getState ? void this.hide() : (this.txt_fightTimes.text = "今日可挑战次数：" + Math.max(0, this._maxTimes - this._dailyNum), this.btnFight_0.visible = !this._state_0, this.btnFight_1.visible = !this._state_1, this.flag_win_0.visible = !!this._state_0, this.flag_win_1.visible = !!this._state_1, void DisplayUtil.setEnabled(this.btnAdd, this._dailyNum >= this._maxTimes, !0))
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_AYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAyaPop1 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAyaPop1")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._bossList = [10114, 10115, 10116, 10117, 10118],
            t._itemId = 1713674,
            t.skinName = PveAoliaAliyaPop0Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._box = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "canopen"),
            this._box && (this._box.scaleX = this._box.scaleY = .6, this._box.x = 679, this._box.y = 394),
            this.addChild(this._box),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAliyaPop0"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(10),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["boss_" + e],
                function() {
                    t.hide(),
                    FightManager.fightNoMapBoss("", t._bossList[e])
                },
                i)
            },
            i = this, n = 0; 5 > n; n++) e(n);
            ImageButtonUtil.add(this._box,
            function() {
                SocketConnection.sendByQueue(46336, [1],
                function() {
                    BubblerManager.getInstance().showText("今日海盗杂兵已清理完毕！"),
                    t.hide()
                })
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([16620],
            function(e) {
                t._bossState = e[0],
                t._getState = KTool.getBit(e[0], 6),
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            for (var t = 0,
            e = 0; 5 > e; e++) this["flag_win_" + e].visible = KTool.getBit(this._bossState, e + 1),
            this["boss_" + e].touchEnabled = !KTool.getBit(this._bossState, e + 1),
            t += KTool.getBit(this._bossState, e + 1);
            this.txt_progress.text = t + "/5",
            t >= 5 ? (this._box.gotoAndPlay(1, -1), this._box.touchEnabled = !0) : (this._box.gotoAndStop(1), this._box.touchEnabled = !1),
            this.img_box.visible = !1
        },
        i.prototype.destroy = function() {
            this._box && core.manager.MovieClipManager.getInstance().releaseMovieClip(this._box, !0),
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_ALIYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAliyaPop0 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAliyaPop0")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._maxTimes = 10,
            t._boss = 10014,
            t.skinName = PveAoliaAyaPop3Skin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveAoliaPanel.PveAoliaAyaPop3"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.img_close, this.hide, this),
            ImageButtonUtil.add(this.btnPlus,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250776, 1,
                    function() {
                        KTool.doExchange(10347, 1,
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOnetap,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(250775, 1,
                    function() {
                        SocketConnection.sendByQueue(43261, [6, 0],
                        function() {
                            t.updateData()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.helpBtn,
            function() {
                var t = config.Help_tips.getItem(8),
                e = {};
                e.title = "活动说明",
                e.str = StringUtil.TransformLineBreak(t.tips),
                tipsPop.TipsPop.openHelpPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._dailyNum >= t._maxTimes ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : (t.hide(), void FightManager.fightNoMapBoss("", t._boss))
            },
            this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6898, 15444, 6900],
            function(e) {
                t._getState = KTool.getBit(e[0], 4),
                t._dailyNum = e[1],
                t._defeatTimes = e[2],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            return this._getState ? void this.hide() : (this.txt_dailyTimes.text = "今日可挑战：" + Math.max(0, this._maxTimes - this._dailyNum), this.txt_defeatTimes.text = "累计击败：" + Math.min(3, this._defeatTimes) + "/3次", void DisplayUtil.setEnabled(this.btnPlus, this._dailyNum >= this._maxTimes, !0))
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_AYA),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveAoliaAyaPop3 = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaAyaPop3")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId = 1713674,
            t._petId = 3399,
            t._bossId = 3403,
            t._threeIds = [2631, 30931, 40976],
            t.skinName = PveAoliaPanelAliyaSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(9, this, "pve_aolia_panel_aliya_title_png",
            function() {
                t.onClose()
            },
            this),
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]),
            this.updateData(),
            this.addEvent()
        },
        i.prototype.itemChange = function(t) {
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var t = {};
                t.ins = e._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = e._threeIds[1],
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e._bossId, "", AppDoStyle.NULL)
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["img_boss_" + t],
                function() {
                    e._curPop = t;
                    var i = egret.getDefinitionByName("pveAoliaPanel.PveAoliaAliyaPop" + t);
                    PopViewManager.getInstance().openView(new i)
                },
                n)
            },
            n = this, a = 0; 3 > a; a++) i(a);
            EventManager.addEventListener(t.PveAoliaPanel.UPDATE_ALIYA, this.updateData, this),
            ImageButtonUtil.add(this.btnPlus,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1713674,
                        productID: 250862
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(250862, i,
                        function() {
                            KTool.doExchange(10362, i,
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
            ImageButtonUtil.add(this.btnOnetap,
            function() {
                PayManager.doPayFunc(function() {
                    return PetManager.getPetInfo(PetManager.defaultTime).id != e._petId ? void Alert.show("请先将阿娅放入背包首发位置！",
                    function() {
                        ModuleManager.showModule("petBag", ["petBag"])
                    }) : void KTool.buyProductByCallback(250861, 1,
                    function() {
                        SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 675],
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                return ItemManager.getNumByID(e._itemId) < 40 ? void Alarm.show("所需道具不足！") : PetManager.getPetInfo(PetManager.defaultTime).id != e._petId ? void Alert.show("请先将阿娅放入背包首发位置！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                }) : void SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 674],
                function() {
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3403)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.onClose(),
                ModuleManager.showModuleByID(68)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([16620, 16621, 16622, 16623],
            function(e) {
                t._state_0 = KTool.getBit(e[0], 6),
                t._state_1 = KTool.getBit(e[1], 5),
                t._battleTimes = e[2],
                t._bossState = 7 & e[3],
                t._conditionState = e[3] >> 3 & 7,
                t._state_2 = KTool.getBit(e[3], 7),
                KTool.getBitSet([9532],
                function(e) {
                    t._petState = e[0],
                    t.updateView()
                })
            })
        },
        i.prototype.updateView = function() {
            this.txt_itemNum.text = ItemManager.getNumByID(this._itemId) + "",
            this.btnOnetap.visible = this.grp_cost.visible = this.btnExchange.visible = !this._petState,
            this.flag_got.visible = !!this._petState,
            this.flag_win_0.visible = !!this._state_0,
            this.img_boss_0.touchEnabled = !this._state_0,
            this.flag_win_1.visible = this._battleTimes > 20 || !!this._state_1,
            this.img_boss_1.touchEnabled = this._battleTimes <= 20 && !this._state_1;
            for (var t = 0,
            e = 0; 3 > e; e++) t += KTool.getBit(this._bossState, e + 1),
            t += KTool.getBit(this._conditionState, e + 1);
            this.flag_win_2.visible = t >= 3 && this._conditionState < 7 || !!this._state_2,
            this.img_boss_2.touchEnabled = !this._state_2 && (3 > t || this._conditionState >= 7)
        },
        i.prototype.onFightOver = function() {
            var e = this;
            switch (this._curPop) {
            case 0:
                PopViewManager.getInstance().openView(new t.PveAoliaAliyaPop0);
                break;
            case 1:
                KTool.getMultiValue([16622],
                function(i) {
                    i[0] > 20 ? (BubblerManager.getInstance().showText("今日海盗小将已清理完毕！"), e.updateData()) : PopViewManager.getInstance().openView(new t.PveAoliaAliyaPop1)
                });
                break;
            case 2:
                KTool.getMultiValue([16623],
                function(i) {
                    for (var n = 7 & i[0], a = i[0] >> 3 & 7, _ = 0, o = 0; 3 > o; o++) _ += KTool.getBit(n, o + 1),
                    _ += KTool.getBit(a, o + 1);
                    _ >= 3 && 7 > a ? (BubblerManager.getInstance().showText("今日海盗首领已清理完毕！"), e.updateData()) : PopViewManager.getInstance().openView(new t.PveAoliaAliyaPop2)
                })
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.removeEventListener(t.PveAoliaPanel.UPDATE_ALIYA, this.updateData, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveAoliaPanelAliya = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaPanelAliya")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId_0 = 1714112,
            t._itemId_1 = 1714113,
            t._boxId = 1714114,
            t._petId = 3403,
            t._bossId = 3437,
            t._threeIds = [2671, 31117, 41023],
            t._threeCosts = [20, 40, 40],
            t.skinName = PveAoliaPanelAoliaSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(13, this, "pve_aolia_panel_aolia_title_png",
            function() {
                t.onClose()
            },
            this),
            this.leftGroup.left = DeviceInfoManager.adapterOffSetX,
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]),
            this.addEvent(),
            this.updateData(),
            this.adaptRightContent(this.grp_right)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.icon_2,
            function() {
                var t = {};
                t.ins = e._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = e._threeIds[1],
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e._bossId, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                return ItemManager.getNumByID(e._itemId_0) < 12 ? void BubblerManager.getInstance().showText("所需道具不足！") : PetManager.getPetInfo(PetManager.defaultTime).id != e._petId ? void Alert.show("请先将艾丽娅放入背包首发位置！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                }) : void SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 697],
                function() {
                    BubblerManager.getInstance().showText("进化成功！"),
                    e.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnOnetap,
            function() {
                return PetManager.getPetInfo(PetManager.defaultTime).id != e._petId ? void Alert.show("请先将艾丽娅放入背包首发位置！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                }) : void BuyProductManager.buyProductBySocket(251238,
                function() {
                    SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 689],
                    function() {
                        BubblerManager.getInstance().showText("进化成功！"),
                        e.updateData()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnPlus_0,
            function() {
                BuyProductManager.buyProduct("251241_10508", null, e, 1714112)
            },
            this),
            ImageButtonUtil.add(this.btnPlus_1,
            function() {
                BuyProductManager.buyProduct("251242_10509", null, e, 1714113)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.box_open,
            function() {
                return ItemManager.getNumByID(e._boxId) + Number( !! e._boxStamp) <= 0 ? void BubblerManager.getInstance().showText("战备箱数量不足！") : void SocketConnection.sendByQueue(43264, [5, 0],
                function() {
                    e.updateData()
                })
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["btnBuy_" + t],
                function() {
                    return ItemManager.getNumByID(e._itemId_1) < e._threeCosts[t] ? void BubblerManager.getInstance().showText("所需道具数量不足！") : PetManager.getPetInfo(PetManager.defaultTime).id != e._bossId ? void Alert.show("请先将艾欧丽娅放入背包首发位置！",
                    function() {
                        ModuleManager.showModule("petBag", ["petBag"])
                    }) : void SocketConnection.sendByQueue(43264, [4, t + 1],
                    function() {
                        BubblerManager.getInstance().showText("兑换成功！"),
                        e.updateData()
                    })
                },
                n)
            },
            n = this, a = 0; 3 > a; a++) i(a);
            ImageButtonUtil.add(this.btnCompose,
            function() {
                e.addChild(new t.PveAoliaPanelAoliaFight)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3437)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.onClose(),
                ModuleManager.showModuleByID(125)
            },
            this),
            EventManager.addEventListener(t.PveAoliaPanel.UPDATE_AOLIA, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6918, 6923],
            function(e) {
                t._petState = 1 & e[0],
                t._tokenState = e[0] >> 1 & 7,
                t._boxStamp = e[1],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            this.txt_itemNum_0.text = ItemManager.getNumByID(this._itemId_0) + "",
            this.txt_itemNum_1.text = ItemManager.getNumByID(this._itemId_1) + "",
            this.flag_got.visible = !!this._petState,
            this.grp_cost.visible = this.btnOnetap.visible = this.btnEvo.visible = !this._petState;
            for (var t = 0; 3 > t; t++) {
                var e = KTool.getBit(this._tokenState, t + 1);
                this["flag_got_" + t].visible = !!e,
                this["btnBuy_" + t].visible = !e
            }
            this.opening.visible = this.txt_time.visible = !1;
            var i = ItemManager.getNumByID(this._boxId) + Number( !! this._boxStamp);
            this.txt_boxNum.text = "x" + i,
            this.box_open.visible = this.opened.visible = i > 0,
            this.box_close.visible = 0 >= i
        },
        i.prototype.showOpenTime = function() {
            var t = Math.ceil(SystemTimerManager.sysBJDate.getTime() / 1e3),
            e = this._boxStamp + 43200;
            if (t >= e) return egret.clearInterval(this._interval),
            void this.updateView();
            var i = Math.min(e - t, 43200),
            n = Math.floor(i / 3600),
            a = Math.floor(i % 3600 / 60),
            _ = Math.floor(i % 60);
            this.txt_time.text = core.gameUtil.addLeadingZero(n) + ":" + core.gameUtil.addLeadingZero(a) + ":" + core.gameUtil.addLeadingZero(_)
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.PveAoliaPanel.UPDATE_AOLIA, this.updateData, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveAoliaPanelAolia = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaPanelAolia")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._itemId_0 = 1714112,
            t._itemId_1 = 1714113,
            t._bossStart = 10630,
            t._petIds = [1384, 1404, 1524, 1661, 2096, 1956, 1972, 2249, 2571, 3415, 3417, 3422],
            t.MAX_TIMES = 6,
            t._serialAward = [0, 2, 6, 9, 15, 20, 28],
            t._damageList = [4e3, 6e3, 6e3],
            t._taskNum = 2,
            t.skinName = PveAoliaPanelAoliaFightSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(14, this, "pve_aolia_panel_aolia_title_png",
            function() {
                t.destroy(),
                t.parent && t.parent.removeChild(t)
            },
            this),
            this.addEvent(),
            this.updateData(),
            this.adaptRightContent(this.grp_right, 20),
            this.adaptLeftContent(this.grp_task),
            this.grp_info.right = Math.max(20, DeviceInfoManager.adapterOffSetX)
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
            ImageButtonUtil.add(this.btnPlus_0,
            function() {
                BuyProductManager.buyProduct("251241_10508", null, t, 1714112)
            },
            this),
            ImageButtonUtil.add(this.btnPlus_1,
            function() {
                BuyProductManager.buyProduct("251242_10509", null, t, 1714113)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                BuyProductManager.buyProduct("257333_13104",
                function() {
                    t.updateData()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFastbeat,
            function() {
                BuyProductManager.buyProductBySocket(251239,
                function() {
                    SocketConnection.sendByQueue(43264, [2, 0],
                    function() {
                        t.updateData()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                return t._beatTimes >= t._taskNum ? void Alarm.show("请先领取本轮奖励！") : void SocketConnection.sendByQueue(43264, [1, 0],
                function() {
                    t.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t._fightTimes >= t.MAX_TIMES ? void BubblerManager.getInstance().showText("今日剩余挑战次数不足。") : void FightManager.fightNoMapBoss("", t._bossStart + t._bossIdx)
            },
            this),
            ImageButtonUtil.add(this.btnReroll,
            function() {
                Alert.show("重新抽取需要消耗10万赛尔豆，确认要重新抽取吗？",
                function() {
                    SocketConnection.sendByQueue(43264, [1, 0],
                    function() {
                        t.updateData()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                return t._beatTimes < t._taskNum ? void BubblerManager.getInstance().showText("未满足领取条件。") : void SocketConnection.sendByQueue(43264, [3, 0],
                function() {
                    t.updateData()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6919, 105216, 10918, 10919, 15453, 15454, 15455, 15451],
            function(e) {
                t._bossIdx = e[0],
                t._serialTimes = e[1],
                t._fightTimes = e[2],
                t._awardTimes = Math.min(e[3], 4),
                t._damages = e.slice(4, 7),
                t._beatTimes = e[7],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            if (this.txt_itemNum_0.text = ItemManager.getNumByID(this._itemId_0) + "", this.txt_itemNum_1.text = ItemManager.getNumByID(this._itemId_1) + "", this.txt_fightTimes.text = "今日可挑战次数：" + Math.max(0, this.MAX_TIMES - this._fightTimes), DisplayUtil.setEnabled(this.btnAddTimes, Math.max(0, this.MAX_TIMES - this._fightTimes) <= 0, !0), this.txt_serial.text = this._serialTimes + "", this.txt_itemNum.text = this._serialAward[this._serialTimes] + "", this.grp_roll.visible = !this._bossIdx, this.grp_fight.visible = !!this._bossIdx, this._bossIdx) {
                var t = this._petIds[this._bossIdx - 1];
                this.img_pet.source = ClientConfig.getfightPetPng(t + ""),
                this._bossIdx < 10 ? this.txt_condition.text = "你需要将其击败": this.txt_condition.text = "你需要累计对其造成" + this._damages[this._bossIdx - 10] + "/" + this._damageList[this._bossIdx - 10] + "点伤害"
            }
            this.txt_task.text = "累计完成" + this._taskNum + "场战斗",
            this.txt_progress.text = "已完成" + this._beatTimes + "/" + this._taskNum + "场战斗"
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith(t.PveAoliaPanel.UPDATE_AOLIA),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveAoliaPanelAoliaFight = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaPanelAoliaFight")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
pveAoliaPanel; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._petId = 3399,
            t._threeIds = [2625, 30911, 40971],
            t.skinName = PveAoliaPanelAyaSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(4, this, "pve_aolia_panel_aya_title_png",
            function() {
                i.onClose()
            },
            this),
            this.updateData(),
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[2]),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var t = {};
                t.ins = i._threeIds[2],
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = i._threeIds[1],
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], i._petId, "", AppDoStyle.NULL)
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(a["btnMake_" + t],
                function() {
                    i._curPop = t;
                    var e = egret.getDefinitionByName("pveAoliaPanel.PveAoliaAyaPop" + t);
                    PopViewManager.getInstance().openView(new e)
                },
                a)
            },
            a = this, _ = 0; 4 > _; _++) n(_);
            ImageButtonUtil.add(this.btnGet,
            function() {
                return i.equipState < 15 ? void BubblerManager.getInstance().showText("您还未将所有的装备集齐！") : void SocketConnection.sendByQueue(43261, [1, 0],
                function() {
                    i.updateData()
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3399)
            },
            this),
            EventManager.addEventListener(t.PveAoliaPanel.UPDATE_AYA, this.updateData, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getMultiValue([6898],
            function(e) {
                t.equipState = 15 & e[0],
                t.petState = KTool.getBit(e[0], 9),
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            for (var t = 0; 4 > t; t++) this["btnMake_" + t].visible = !KTool.getBit(this.equipState, t + 1),
            this["flag_made_" + t].visible = KTool.getBit(this.equipState, t + 1);
            this.flag_got.visible = !!this.petState,
            this.btnGet.visible = !this.petState
        },
        i.prototype.onFightOver = function() {
            var e = this;
            switch (this._curPop) {
            case 0:
                PopViewManager.getInstance().openView(new t.PveAoliaAyaPop0);
                break;
            case 1:
                KTool.getMultiValue([6898],
                function(i) {
                    KTool.getBit(i[0], 2) ? e.updateData() : PopViewManager.getInstance().openView(new t.PveAoliaAyaPop1)
                });
                break;
            case 2:
                KTool.getMultiValue([6898],
                function(i) {
                    KTool.getBit(i[0], 3) ? e.updateData() : PopViewManager.getInstance().openView(new t.PveAoliaAyaPop2)
                });
                break;
            case 3:
                KTool.getMultiValue([6898],
                function(i) {
                    KTool.getBit(i[0], 4) ? e.updateData() : PopViewManager.getInstance().openView(new t.PveAoliaAyaPop3)
                })
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(t.PveAoliaPanel.UPDATE_AYA, this.updateData, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveAoliaPanelAya = e,
    __reflect(e.prototype, "pveAoliaPanel.PveAoliaPanelAya")
} (pveAoliaPanel || (pveAoliaPanel = {}));
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
generateEUI.paths["resource/eui_skins/PveAoliaAliyaPop0Skin.exml"] = window.PveAoliaAliyaPop0Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "imgBtn_pet", "imgBtn_cure", "boss_0", "flag_win_0", "boss_3", "flag_win_3", "boss_1", "flag_win_1", "boss_4", "flag_win_4", "boss_2", "flag_win_2", "txt_progress", "img_box"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.boss_0_i(), this.flag_win_0_i(), this.boss_3_i(), this.flag_win_3_i(), this.boss_1_i(), this.flag_win_1_i(), this.boss_4_i(), this.flag_win_4_i(), this.boss_2_i(), this.flag_win_2_i(), this._Label1_i(), this.txt_progress_i(), this._Label2_i(), this.img_box_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aliya_pop_0_title_png",
        t.width = 169,
        t.x = 37,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 213,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 316,
        t.source = "pve_aolia_aliya_pop_0_battlebg_png",
        t.width = 748,
        t.x = 4,
        t.y = 73,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 678,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 678,
        t.y = 174,
        t
    },
    i.boss_0_i = function() {
        var t = new eui.Image;
        return this.boss_0 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_0_boss_0_png",
        t.width = 167,
        t.x = 58,
        t.y = 78,
        t
    },
    i.flag_win_0_i = function() {
        var t = new eui.Image;
        return this.flag_win_0 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 48,
        t.y = 103,
        t
    },
    i.boss_3_i = function() {
        var t = new eui.Image;
        return this.boss_3 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_0_boss_1_png",
        t.width = 167,
        t.x = 163,
        t.y = 210,
        t
    },
    i.flag_win_3_i = function() {
        var t = new eui.Image;
        return this.flag_win_3 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 152,
        t.y = 236,
        t
    },
    i.boss_1_i = function() {
        var t = new eui.Image;
        return this.boss_1 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_0_boss_2_png",
        t.width = 167,
        t.x = 267,
        t.y = 78,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 256,
        t.y = 104,
        t
    },
    i.boss_4_i = function() {
        var t = new eui.Image;
        return this.boss_4 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_0_boss_3_png",
        t.width = 167,
        t.x = 371,
        t.y = 210,
        t
    },
    i.flag_win_4_i = function() {
        var t = new eui.Image;
        return this.flag_win_4 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 361,
        t.y = 236,
        t
    },
    i.boss_2_i = function() {
        var t = new eui.Image;
        return this.boss_2 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_0_boss_4_png",
        t.width = 167,
        t.x = 476,
        t.y = 78,
        t
    },
    i.flag_win_2_i = function() {
        var t = new eui.Image;
        return this.flag_win_2 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 465,
        t.y = 104,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 16,
        t.text = "击败所有海盗杂兵可领取丰厚奖励",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 426,
        t.y = 398,
        t
    },
    i.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "0/5",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 630,
        t.y = 416,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "已完成：",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 564,
        t.y = 419,
        t
    },
    i.img_box_i = function() {
        var t = new eui.Image;
        return this.img_box = t,
        t.height = 44,
        t.source = "pve_aolia_aliya_pop_0_img_box_png",
        t.width = 53,
        t.x = 679,
        t.y = 394,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAliyaPop1Skin.exml"] = window.PveAoliaAliyaPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "imgBtn_pet", "imgBtn_cure", "boss_0", "flag_win_0", "boss_1", "flag_win_1", "boss_2", "flag_win_2", "boss_3", "flag_win_3", "txt_progress", "img_box"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.boss_0_i(), this.flag_win_0_i(), this.boss_1_i(), this.flag_win_1_i(), this.boss_2_i(), this.flag_win_2_i(), this.boss_3_i(), this.flag_win_3_i(), this._Label1_i(), this.txt_progress_i(), this._Label2_i(), this.img_box_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aliya_pop_1_title_png",
        t.width = 168,
        t.x = 37,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 213,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 316,
        t.source = "pve_aolia_aliya_pop_0_battlebg_png",
        t.width = 748,
        t.x = 4,
        t.y = 73,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 678,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 678,
        t.y = 174,
        t
    },
    i.boss_0_i = function() {
        var t = new eui.Image;
        return this.boss_0 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_1_boss_0_png",
        t.width = 167,
        t.x = 92,
        t.y = 78,
        t
    },
    i.flag_win_0_i = function() {
        var t = new eui.Image;
        return this.flag_win_0 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 81,
        t.y = 103,
        t
    },
    i.boss_1_i = function() {
        var t = new eui.Image;
        return this.boss_1 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_1_boss_1_png",
        t.width = 167,
        t.x = 220,
        t.y = 210,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 209,
        t.y = 236,
        t
    },
    i.boss_2_i = function() {
        var t = new eui.Image;
        return this.boss_2 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_1_boss_2_png",
        t.width = 167,
        t.x = 347,
        t.y = 78,
        t
    },
    i.flag_win_2_i = function() {
        var t = new eui.Image;
        return this.flag_win_2 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 336,
        t.y = 104,
        t
    },
    i.boss_3_i = function() {
        var t = new eui.Image;
        return this.boss_3 = t,
        t.height = 179,
        t.source = "pve_aolia_aliya_pop_1_boss_3_png",
        t.width = 167,
        t.x = 475,
        t.y = 210,
        t
    },
    i.flag_win_3_i = function() {
        var t = new eui.Image;
        return this.flag_win_3 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 464,
        t.y = 236,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 16,
        t.text = "20回合内击败所有海盗小将即可领取丰厚奖励",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 349,
        t.y = 398,
        t
    },
    i.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "00/20",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 607,
        t.y = 417,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "已消耗回合：",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 494,
        t.y = 417,
        t
    },
    i.img_box_i = function() {
        var t = new eui.Image;
        return this.img_box = t,
        t.height = 44,
        t.source = "pve_aolia_aliya_pop_0_img_box_png",
        t.width = 53,
        t.x = 679,
        t.y = 394,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAliyaPop2Skin.exml"] = window.PveAoliaAliyaPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "imgBtn_pet", "imgBtn_cure", "boss_0", "flag_win_0", "boss_1", "flag_win_1", "boss_2", "flag_win_2", "txt_progress", "img_box"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.boss_0_i(), this._Image5_i(), this.flag_win_0_i(), this.boss_1_i(), this._Image6_i(), this.flag_win_1_i(), this.boss_2_i(), this._Image7_i(), this.flag_win_2_i(), this._Label1_i(), this.txt_progress_i(), this._Label2_i(), this.img_box_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aliya_pop_2_title_png",
        t.width = 169,
        t.x = 37,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 213,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 316,
        t.source = "pve_aolia_aliya_pop_0_battlebg_png",
        t.width = 748,
        t.x = 4,
        t.y = 73,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 678,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 678,
        t.y = 174,
        t
    },
    i.boss_0_i = function() {
        var t = new eui.Image;
        return this.boss_0 = t,
        t.height = 213,
        t.source = "pve_aolia_aliya_pop_2_boss_0_png",
        t.width = 197,
        t.x = 42,
        t.y = 98,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 53,
        t.source = "pve_aolia_aliya_pop_2_condition_0_png",
        t.width = 176,
        t.x = 50,
        t.y = 309,
        t
    },
    i.flag_win_0_i = function() {
        var t = new eui.Image;
        return this.flag_win_0 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 31,
        t.y = 131,
        t
    },
    i.boss_1_i = function() {
        var t = new eui.Image;
        return this.boss_1 = t,
        t.height = 213,
        t.source = "pve_aolia_aliya_pop_2_boss_1_png",
        t.width = 197,
        t.x = 252,
        t.y = 152,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 55,
        t.source = "pve_aolia_aliya_pop_2_condition_1_png",
        t.width = 176,
        t.x = 260,
        t.y = 96,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 240,
        t.y = 184,
        t
    },
    i.boss_2_i = function() {
        var t = new eui.Image;
        return this.boss_2 = t,
        t.height = 213,
        t.source = "pve_aolia_aliya_pop_1_boss_2_png",
        t.width = 197,
        t.x = 462,
        t.y = 98,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 53,
        t.source = "pve_aolia_aliya_pop_2_condition_2_png",
        t.width = 132,
        t.x = 493,
        t.y = 309,
        t
    },
    i.flag_win_2_i = function() {
        var t = new eui.Image;
        return this.flag_win_2 = t,
        t.height = 59,
        t.source = "pve_aolia_aliya_pop_0_flag_win_png",
        t.width = 60,
        t.x = 450,
        t.y = 131,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 16,
        t.text = "按照条件击败所有海盗首领可领取丰厚奖励",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 367,
        t.y = 398,
        t
    },
    i.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "0/5",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 636,
        t.y = 417,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "已完成：",
        t.textColor = 3359103,
        t.touchEnabled = !1,
        t.x = 557,
        t.y = 417,
        t
    },
    i.img_box_i = function() {
        var t = new eui.Image;
        return this.img_box = t,
        t.height = 44,
        t.source = "pve_aolia_aliya_pop_0_img_box_png",
        t.width = 53,
        t.x = 679,
        t.y = 394,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAyaPop0Skin.exml"] = window.PveAoliaAyaPop0Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "txt_item_1", "btnFight_1", "txt_item_0", "btnFight_0", "btnOnetap", "btnMake", "txt_probability", "txt_fightTimes", "btnAdd", "imgBtn_pet", "imgBtn_cure", "btnPlus1", "btnPlus0"],
        this.height = 452,
        this.width = 789,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.txt_item_1_i(), this.btnFight_1_i(), this._Image5_i(), this.txt_item_0_i(), this.btnFight_0_i(), this._Image6_i(), this._Image7_i(), this.btnOnetap_i(), this.btnMake_i(), this._Image8_i(), this.txt_probability_i(), this._Label1_i(), this.txt_fightTimes_i(), this.btnAdd_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.btnPlus1_i(), this.btnPlus0_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 21,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 25,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aya_pop_0_title_png",
        t.width = 168,
        t.x = 58,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 735,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 234,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 326,
        t.source = "pve_aolia_aya_pop_0_fight1_png",
        t.width = 190,
        t.x = 502,
        t.y = 105,
        t
    },
    i.txt_item_1_i = function() {
        var t = new eui.Label;
        return this.txt_item_1 = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "已获得墨水：33",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 515,
        t.y = 359,
        t
    },
    i.btnFight_1_i = function() {
        var t = new eui.Image;
        return this.btnFight_1 = t,
        t.height = 40,
        t.source = "pve_aolia_aya_pop_0_btnFight_0_png",
        t.width = 172,
        t.x = 511,
        t.y = 386,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 326,
        t.source = "pve_aolia_aya_pop_0_fight0_png",
        t.width = 190,
        t.x = 312,
        t.y = 105,
        t
    },
    i.txt_item_0_i = function() {
        var t = new eui.Label;
        return this.txt_item_0 = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "已获得眼镜：33",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 324,
        t.y = 359,
        t
    },
    i.btnFight_0_i = function() {
        var t = new eui.Image;
        return this.btnFight_0 = t,
        t.height = 40,
        t.source = "pve_aolia_aya_pop_0_btnFight_0_png",
        t.width = 172,
        t.x = 321,
        t.y = 386,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 318,
        t.source = "pve_aolia_aya_pop_0_iconbg_png",
        t.touchEnabled = !1,
        t.width = 366,
        t.x = 0,
        t.y = 27,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 73,
        t.source = "pve_aolia_panel_aya_flag_made_1_png",
        t.width = 134,
        t.x = 106,
        t.y = 145,
        t
    },
    i.btnOnetap_i = function() {
        var t = new eui.Image;
        return this.btnOnetap = t,
        t.height = 52,
        t.source = "pve_aolia_aya_pop_0_btnOnetap_png",
        t.width = 176,
        t.x = 84,
        t.y = 373,
        t
    },
    i.btnMake_i = function() {
        var t = new eui.Image;
        return this.btnMake = t,
        t.height = 50,
        t.source = "pve_aolia_aya_pop_0_btnMake_png",
        t.width = 174,
        t.x = 85,
        t.y = 313,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 78,
        t.source = "pve_aolia_aya_pop_0_successbg_png",
        t.width = 187,
        t.x = 78,
        t.y = 222,
        t
    },
    i.txt_probability_i = function() {
        var t = new eui.Label;
        return this.txt_probability = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = -228.5,
        t.lineSpacing = 3,
        t.size = 30,
        t.text = "100%",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 263,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "当前制作成功率：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 108,
        t.y = 239,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "今日可挑战次数：00",
        t.textColor = 2772621,
        t.touchEnabled = !1,
        t.x = 379,
        t.y = 75,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 34,
        t.x = 593,
        t.y = 68,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 699,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 699,
        t.y = 174,
        t
    },
    i.btnPlus1_i = function() {
        var t = new eui.Image;
        return this.btnPlus1 = t,
        t.height = 20,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 20,
        t.x = 660,
        t.y = 358,
        t
    },
    i.btnPlus0_i = function() {
        var t = new eui.Image;
        return this.btnPlus0 = t,
        t.height = 20,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 20,
        t.x = 469,
        t.y = 358,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAyaPop1Skin.exml"] = window.PveAoliaAyaPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "txt_item_1", "btnFight_1", "flag_win_1", "txt_item_0", "btnFight_0", "flag_win_0", "txt_fightTimes", "btnAdd", "imgBtn_pet", "imgBtn_cure"],
        this.height = 452,
        this.width = 789,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.txt_item_1_i(), this.btnFight_1_i(), this.flag_win_1_i(), this._Image5_i(), this.txt_item_0_i(), this.btnFight_0_i(), this.flag_win_0_i(), this._Image6_i(), this._Image7_i(), this.txt_fightTimes_i(), this.btnAdd_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 21,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 25,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aya_pop_1_title_png",
        t.width = 169,
        t.x = 58,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 735,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 234,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 326,
        t.source = "pve_aolia_aya_pop_1_fight1_png",
        t.width = 190,
        t.x = 502,
        t.y = 105,
        t
    },
    i.txt_item_1_i = function() {
        var t = new eui.Label;
        return this.txt_item_1 = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "最高伤害超过200",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 522,
        t.y = 359,
        t
    },
    i.btnFight_1_i = function() {
        var t = new eui.Image;
        return this.btnFight_1 = t,
        t.height = 40,
        t.source = "pve_aolia_aya_pop_0_btnFight_0_png",
        t.width = 172,
        t.x = 511,
        t.y = 386,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.source = "pve_aolia_aya_pop_1_flag_win_png",
        t.x = 511,
        t.y = 109,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 326,
        t.horizontalCenter = 12.5,
        t.source = "pve_aolia_aya_pop_1_fight0_png",
        t.verticalCenter = 42,
        t.width = 190,
        t
    },
    i.txt_item_0_i = function() {
        var t = new eui.Label;
        return this.txt_item_0 = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "三回合内击败",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 347,
        t.y = 359,
        t
    },
    i.btnFight_0_i = function() {
        var t = new eui.Image;
        return this.btnFight_0 = t,
        t.height = 40,
        t.source = "pve_aolia_aya_pop_0_btnFight_0_png",
        t.width = 172,
        t.x = 321,
        t.y = 386,
        t
    },
    i.flag_win_0_i = function() {
        var t = new eui.Image;
        return this.flag_win_0 = t,
        t.source = "pve_aolia_aya_pop_1_flag_win_png",
        t.x = 321,
        t.y = 109,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 318,
        t.source = "pve_aolia_aya_pop_0_iconbg_png",
        t.touchEnabled = !1,
        t.width = 366,
        t.x = 5,
        t.y = 99,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 77,
        t.source = "pve_aolia_aya_pop_1_icon_png",
        t.width = 136,
        t.x = 117,
        t.y = 223,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "今日可挑战次数：00",
        t.textColor = 2772621,
        t.touchEnabled = !1,
        t.x = 379,
        t.y = 75,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.height = 34,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 34,
        t.x = 593,
        t.y = 68,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 699,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 699,
        t.y = 174,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAyaPop2Skin.exml"] = window.PveAoliaAyaPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "light", "grp_flag", "txt_fightTimes", "btnPlus", "btnFight", "btnOnetap", "imgBtn_pet", "imgBtn_cure"],
        this.height = 452,
        this.width = 822,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this.grp_flag_i(), this._Image7_i(), this.txt_fightTimes_i(), this._Label1_i(), this.btnPlus_i(), this.btnFight_i(), this.btnOnetap_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 54,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 58,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aya_pop_2_title_png",
        t.width = 169,
        t.x = 91,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 768,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 267,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 400,
        t.source = "pve_aolia_aya_pop_2_pet_png",
        t.width = 806,
        t.x = 0,
        t.y = 51,
        t
    },
    i.grp_flag_i = function() {
        var t = new eui.Group;
        return this.grp_flag = t,
        t.x = 323,
        t.y = 145,
        t.elementsContent = [this.light_i(), this._Image5_i(), this._Image6_i()],
        t
    },
    i.light_i = function() {
        var t = new eui.Image;
        return this.light = t,
        t.height = 57,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_aolia_aya_pop_2_light_png",
        t.width = 48,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "",
        t.width = 48,
        t.x = 7,
        t.y = 55,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 57,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "",
        t.width = 48,
        t.x = 45,
        t.y = -5,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.source = "pve_aolia_aya_pop_2_leftbg_png",
        t.width = 233,
        t.x = 66,
        t.y = 295,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日可挑战：00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 121,
        t.y = 340,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "贞德",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 164,
        t.y = 302,
        t
    },
    i.btnPlus_i = function() {
        var t = new eui.Image;
        return this.btnPlus = t,
        t.height = 34,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 34,
        t.x = 265,
        t.y = 331,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 52,
        t.source = "pve_aolia_aya_pop_2_btnFight_png",
        t.width = 176,
        t.x = 100,
        t.y = 378,
        t
    },
    i.btnOnetap_i = function() {
        var t = new eui.Image;
        return this.btnOnetap = t,
        t.height = 52,
        t.source = "pve_aolia_aya_pop_0_btnOnetap_png",
        t.width = 176,
        t.x = 587,
        t.y = 378,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 256,
        t.y = 81,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 256,
        t.y = 150,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaAyaPop3Skin.exml"] = window.PveAoliaAyaPop3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_close", "helpBtn", "btnFight", "btnOnetap", "txt_defeatTimes", "txt_dailyTimes", "btnPlus", "imgBtn_pet", "imgBtn_cure"],
        this.height = 452,
        this.width = 816,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.img_close_i(), this.helpBtn_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnFight_i(), this.btnOnetap_i(), this._Image7_i(), this.txt_defeatTimes_i(), this._Image8_i(), this.txt_dailyTimes_i(), this._Label1_i(), this.btnPlus_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 48,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 52,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "pve_aolia_aya_pop_3_title_png",
        t.width = 168,
        t.x = 85,
        t.y = 28,
        t
    },
    i.img_close_i = function() {
        var t = new eui.Image;
        return this.img_close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 762,
        t.y = 0,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.source = "common_help_icon_png",
        t.x = 261,
        t.y = 24,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_aya_pop_0_iconbg_png",
        t.x = 454,
        t.y = 58,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 108,
        t.source = "pve_aolia_panel_aya_flag_made_2_png",
        t.width = 126,
        t.x = 578,
        t.y = 157,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 384,
        t.source = "pve_aolia_aya_pop_3_pet_png",
        t.width = 589,
        t.x = 0,
        t.y = 64,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 52,
        t.source = "pve_aolia_aya_pop_2_btnFight_png",
        t.width = 176,
        t.x = 173,
        t.y = 358,
        t
    },
    i.btnOnetap_i = function() {
        var t = new eui.Image;
        return this.btnOnetap = t,
        t.height = 52,
        t.source = "pve_aolia_aya_pop_0_btnOnetap_png",
        t.width = 176,
        t.x = 548,
        t.y = 358,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 57,
        t.source = "pve_aolia_aya_pop_3_beatbg_png",
        t.width = 186,
        t.x = 542,
        t.y = 274,
        t
    },
    i.txt_defeatTimes_i = function() {
        var t = new eui.Label;
        return this.txt_defeatTimes = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "累计击败：0/3次",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 553,
        t.y = 293,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.source = "pve_aolia_aya_pop_2_leftbg_png",
        t.width = 233,
        t.x = 140,
        t.y = 270,
        t
    },
    i.txt_dailyTimes_i = function() {
        var t = new eui.Label;
        return this.txt_dailyTimes = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "今日可挑战：00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 195,
        t.y = 315,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 24,
        t.text = "艾丽桑",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 225,
        t.y = 277,
        t
    },
    i.btnPlus_i = function() {
        var t = new eui.Image;
        return this.btnPlus = t,
        t.height = 34,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 34,
        t.x = 339,
        t.y = 306,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.x = 726,
        t.y = 105,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.x = 726,
        t.y = 174,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaPanelAliyaSkin.exml"] = window.PveAoliaPanelAliyaSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["costIcon", "txt_needNum", "grp_cost", "btnOnetap", "btnExchange", "flag_got", "icon_2", "icon_1", "icon_0", "img_boss_2", "img_boss_1", "img_boss_0", "flag_win_0", "flag_win_1", "flag_win_2", "btnGo", "txt_itemNum", "btnPlus", "itemIcon", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.grp_cost_i(), this.btnOnetap_i(), this.btnExchange_i(), this.flag_got_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.btnInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pet_base_png",
        t.x = 46,
        t.y = 323,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 578,
        t.source = "pve_aolia_panel_aliya_pet_png",
        t.width = 498,
        t.x = 13,
        t.y = 0,
        t
    },
    i.grp_cost_i = function() {
        var t = new eui.Group;
        return this.grp_cost = t,
        t.x = 281,
        t.y = 527,
        t.elementsContent = [this._Image4_i(), this.costIcon_i(), this.txt_needNum_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_aolia_panel_aliya_countbg_png",
        t.width = 173,
        t.x = -18,
        t.y = -6,
        t
    },
    i.costIcon_i = function() {
        var t = new eui.Image;
        return this.costIcon = t,
        t.height = 22,
        t.source = "pve_aolia_panel_aliya_itemIcon_png",
        t.width = 22,
        t.x = -18,
        t.y = 0,
        t
    },
    i.txt_needNum_i = function() {
        var t = new eui.Label;
        return this.txt_needNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "需要庆典徽记X40",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 10,
        t.y = 3,
        t
    },
    i.btnOnetap_i = function() {
        var t = new eui.Image;
        return this.btnOnetap = t,
        t.height = 52,
        t.source = "pve_aolia_panel_aliya_btnOnetap_png",
        t.width = 176,
        t.x = 77,
        t.y = 553,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.height = 52,
        t.source = "pve_aolia_panel_aliya_btnExchange_png",
        t.width = 176,
        t.x = 261,
        t.y = 553,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.height = 50,
        t.source = "pve_aolia_panel_flag_got_pet_png",
        t.width = 91,
        t.x = 210,
        t.y = 552,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 86,
        t.y = 97,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.icon_2_i(), this.icon_1_i(), this.icon_0_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "pve_aolia_panel_aya_img_free_png",
        t.width = 39,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 151,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 93,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 35,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 40,
        t.horizontalCenter = 2,
        t.source = "pve_aolia_panel_aya_icon_2_png",
        t.verticalCenter = 73,
        t.width = 40,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 41,
        t.source = "pve_aolia_panel_aya_icon_1_png",
        t.width = 37,
        t.x = 14,
        t.y = 105,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 33,
        t.source = "pve_aolia_panel_aya_icon_0_png",
        t.width = 39,
        t.x = 13,
        t.y = 51,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 490,
        t.right = 0,
        t.width = 639,
        t.y = 134,
        t.elementsContent = [this.img_boss_2_i(), this.img_boss_1_i(), this.img_boss_0_i(), this.flag_win_0_i(), this.flag_win_1_i(), this.flag_win_2_i(), this.btnGo_i(), this._Image9_i(), this._Label1_i()],
        t
    },
    i.img_boss_2_i = function() {
        var t = new eui.Image;
        return this.img_boss_2 = t,
        t.source = "pve_aolia_panel_aliya_img_boss_2_png",
        t.x = 321,
        t.y = 0,
        t
    },
    i.img_boss_1_i = function() {
        var t = new eui.Image;
        return this.img_boss_1 = t,
        t.source = "pve_aolia_panel_aliya_img_boss_1_png",
        t.x = 100,
        t.y = 232,
        t
    },
    i.img_boss_0_i = function() {
        var t = new eui.Image;
        return this.img_boss_0 = t,
        t.source = "pve_aolia_panel_aliya_img_boss_0_png",
        t.x = 0,
        t.y = 20,
        t
    },
    i.flag_win_0_i = function() {
        var t = new eui.Image;
        return this.flag_win_0 = t,
        t.height = 76,
        t.source = "pve_aolia_panel_aliya_flag_win_png",
        t.width = 176,
        t.x = 35,
        t.y = 90,
        t
    },
    i.flag_win_1_i = function() {
        var t = new eui.Image;
        return this.flag_win_1 = t,
        t.height = 76,
        t.source = "pve_aolia_panel_aliya_flag_win_png",
        t.width = 176,
        t.x = 141,
        t.y = 301,
        t
    },
    i.flag_win_2_i = function() {
        var t = new eui.Image;
        return this.flag_win_2 = t,
        t.height = 76,
        t.source = "pve_aolia_panel_aliya_flag_win_png",
        t.width = 176,
        t.x = 373,
        t.y = 117,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 100,
        t.source = "pve_aolia_panel_aliya_btnGo_png",
        t.width = 233,
        t.x = 406,
        t.y = 390,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 10,
        t.source = "pve_aolia_panel_aliya_img_j_png",
        t.width = 39,
        t.x = 358,
        t.y = 471,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "进化必需",
        t.textColor = 10150911,
        t.x = 319,
        t.y = 446,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 20,
        t.y = 9,
        t.elementsContent = [this._Label2_i(), this.txt_itemNum_i(), this.btnPlus_i(), this.itemIcon_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "庆典徽记：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 39,
        t.y = 8,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 129,
        t.y = 8,
        t
    },
    i.btnPlus_i = function() {
        var t = new eui.Image;
        return this.btnPlus = t,
        t.height = 26,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 26,
        t.x = 177,
        t.y = 2,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.height = 30,
        t.source = "pve_aolia_panel_aliya_itemIcon_png",
        t.width = 31,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.x = 82,
        t.y = 456,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaPanelAoliaFightSkin.exml"] = window.PveAoliaPanelAoliaFightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_pet", "imgBtn_cure", "txt_fightTimes", "btnAddTimes", "btnRoll", "grp_roll", "img_pet", "txt_condition", "btnFight", "btnReroll", "btnFastbeat", "grp_fight", "btnGet", "flag_tomorrow", "txt_task", "img_box", "txt_progress", "grp_task", "txt_itemNum", "txt_serial", "grp_info", "txt_itemNum_1", "btnPlus_1", "itemIcon_1", "txt_itemNum_0", "btnPlus_0", "itemIcon_0", "grp_right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Group1_i(), this.grp_roll_i(), this.grp_fight_i(), this.grp_task_i(), this.grp_info_i(), this.grp_right_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 291,
        t.horizontalCenter = -.5,
        t.source = "common_pet_base_png",
        t.visible = !0,
        t.width = 421,
        t.y = 330,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.horizontalCenter = 240,
        t.source = "pve_aolia_aya_pop_0_imgBtn_pet_png",
        t.width = 60,
        t.y = 119,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.horizontalCenter = 240,
        t.source = "pve_aolia_aya_pop_0_imgBtn_cure_png",
        t.width = 60,
        t.y = 188,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -7.5,
        t.y = 578,
        t.elementsContent = [this._Image3_i(), this.txt_fightTimes_i(), this.btnAddTimes_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "pve_aolia_panel_aolia_fight_tiaozhanbg_png",
        t.width = 258,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_fightTimes_i = function() {
        var t = new eui.Label;
        return this.txt_fightTimes = t,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "今日可挑战次数：00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 51,
        t.y = 7,
        t
    },
    i.btnAddTimes_i = function() {
        var t = new eui.Image;
        return this.btnAddTimes = t,
        t.height = 34,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 34,
        t.x = 253,
        t.y = 0,
        t
    },
    i.grp_roll_i = function() {
        var t = new eui.Group;
        return this.grp_roll = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 81,
        t.elementsContent = [this._Image4_i(), this.btnRoll_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 461,
        t.source = "pve_aolia_panel_aolia_fight_rollBg_png",
        t.width = 436,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnRoll_i = function() {
        var t = new eui.Image;
        return this.btnRoll = t,
        t.height = 147,
        t.source = "pve_aolia_panel_aolia_fight_btnRoll_png",
        t.width = 128,
        t.x = 155,
        t.y = 349,
        t
    },
    i.grp_fight_i = function() {
        var t = new eui.Group;
        return this.grp_fight = t,
        t.height = 495,
        t.horizontalCenter = 4,
        t.visible = !0,
        t.width = 444,
        t.y = 82,
        t.elementsContent = [this._Image5_i(), this.img_pet_i(), this.txt_condition_i(), this.btnFight_i(), this.btnReroll_i(), this.btnFastbeat_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 460,
        t.source = "pve_aolia_panel_aolia_fight_fightBg_png",
        t.width = 436,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_pet_i = function() {
        var t = new eui.Image;
        return this.img_pet = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -19,
        t
    },
    i.txt_condition_i = function() {
        var t = new eui.Label;
        return this.txt_condition = t,
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "需要造成0000/0000伤害",
        t.textColor = 14479615,
        t.touchEnabled = !1,
        t.y = 60,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.height = 147,
        t.source = "pve_aolia_panel_aolia_fight_btnFight_png",
        t.width = 128,
        t.x = 155,
        t.y = 348,
        t
    },
    i.btnReroll_i = function() {
        var t = new eui.Image;
        return this.btnReroll = t,
        t.height = 42,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_aolia_panel_aolia_fight_btnReroll_png",
        t.width = 142,
        t.x = 302,
        t.y = 439,
        t
    },
    i.btnFastbeat_i = function() {
        var t = new eui.Image;
        return this.btnFastbeat = t,
        t.height = 42,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_aolia_panel_aolia_fight_btnFastbeat_png",
        t.width = 142,
        t.x = -6,
        t.y = 439,
        t
    },
    i.grp_task_i = function() {
        var t = new eui.Group;
        return this.grp_task = t,
        t.x = 17,
        t.y = 84,
        t.elementsContent = [this._Image6_i(), this.btnGet_i(), this.flag_tomorrow_i(), this._Image7_i(), this._Label1_i(), this.txt_task_i(), this._Label2_i(), this.img_box_i(), this.txt_progress_i(), this._Label3_i(), this._Label4_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 314,
        t.source = "pve_aolia_panel_aolia_rewardIconbg_png",
        t.width = 230,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 40,
        t.source = "pve_aolia_panel_aolia_fight_btnGet_png",
        t.width = 110,
        t.x = 17,
        t.y = 262,
        t
    },
    i.flag_tomorrow_i = function() {
        var t = new eui.Image;
        return this.flag_tomorrow = t,
        t.height = 40,
        t.source = "pve_aolia_panel_aolia_fight_flag_tomorrow_png",
        t.visible = !1,
        t.width = 110,
        t.x = 17,
        t.y = 262,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pve_aolia_panel_aolia_fight_taskTitle_png",
        t.width = 154,
        t.x = 6,
        t.y = 6,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "目标：",
        t.textColor = 9555967,
        t.touchEnabled = !1,
        t.x = 19,
        t.y = 45,
        t
    },
    i.txt_task_i = function() {
        var t = new eui.Label;
        return this.txt_task = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "累计完成25场战斗",
        t.textColor = 12640767,
        t.touchEnabled = !1,
        t.x = 19,
        t.y = 77,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "艾丽娅战备箱x1",
        t.textColor = 12640767,
        t.touchEnabled = !1,
        t.x = 18,
        t.y = 149,
        t
    },
    i.img_box_i = function() {
        var t = new eui.Image;
        return this.img_box = t,
        t.height = 54,
        t.source = "pve_aolia_panel_aolia_fight_img_box_png",
        t.width = 53,
        t.x = 163,
        t.y = 126,
        t
    },
    i.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "已完成00/33场战斗",
        t.textColor = 12640767,
        t.touchEnabled = !1,
        t.x = 19,
        t.y = 221,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "奖励：",
        t.textColor = 9555967,
        t.touchEnabled = !1,
        t.x = 18,
        t.y = 117,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "进度：",
        t.textColor = 9555967,
        t.touchEnabled = !1,
        t.x = 18,
        t.y = 189,
        t
    },
    i.grp_info_i = function() {
        var t = new eui.Group;
        return this.grp_info = t,
        t.right = 20,
        t.y = 84,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Image10_i(), this._Label9_i(), this._Label10_i(), this.txt_itemNum_i(), this.txt_serial_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 314,
        t.source = "pve_aolia_panel_aolia_rewardIconbg_png",
        t.width = 241,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pve_aolia_panel_aolia_fight_infoTitle_png",
        t.width = 105,
        t.x = 10,
        t.y = 6,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 12,
        t.size = 18,
        t.text = "连续击败对手次数越多，\n获得",
        t.textColor = 12706047,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 21,
        t.y = 48,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 12,
        t.size = 18,
        t.text = "自然庇佑",
        t.textColor = 4239359,
        t.touchEnabled = !1,
        t.x = 102,
        t.y = 78,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 12,
        t.size = 18,
        t.text = "越多！",
        t.textColor = 12706047,
        t.touchEnabled = !1,
        t.x = 174,
        t.y = 78,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 12,
        t.size = 18,
        t.text = "自然庇佑可用于开启\n艾欧丽娅的附属能力！",
        t.textColor = 12706047,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 21,
        t.y = 108,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 34,
        t.x = 64,
        t.y = 71,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "累计自然庇佑奖励：",
        t.textColor = 12706047,
        t.touchEnabled = !1,
        t.x = 21,
        t.y = 221,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "连续击败次数：",
        t.textColor = 12706047,
        t.touchEnabled = !1,
        t.x = 21,
        t.y = 252,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "00",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 189,
        t.y = 221,
        t
    },
    i.txt_serial_i = function() {
        var t = new eui.Label;
        return this.txt_serial = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "00",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 152,
        t.y = 252,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.right = 20,
        t.y = 5,
        t.elementsContent = [this._Group2_i(), this._Group3_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 230,
        t.y = 4,
        t.elementsContent = [this._Label11_i(), this.txt_itemNum_1_i(), this.btnPlus_1_i(), this.itemIcon_1_i()],
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "自然庇佑：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 41,
        t.y = 8,
        t
    },
    i.txt_itemNum_1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_1 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 129,
        t.y = 9,
        t
    },
    i.btnPlus_1_i = function() {
        var t = new eui.Image;
        return this.btnPlus_1 = t,
        t.height = 26,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 26,
        t.x = 177,
        t.y = 2,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new eui.Image;
        return this.itemIcon_1 = t,
        t.height = 29,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 33,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Label12_i(), this.txt_itemNum_0_i(), this.btnPlus_0_i(), this.itemIcon_0_i()],
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "凛冰枪魂：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 43,
        t.y = 11,
        t
    },
    i.txt_itemNum_0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_0 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 133,
        t.y = 13,
        t
    },
    i.btnPlus_0_i = function() {
        var t = new eui.Image;
        return this.btnPlus_0 = t,
        t.height = 26,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 26,
        t.x = 181,
        t.y = 6,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new eui.Image;
        return this.itemIcon_0 = t,
        t.height = 35,
        t.source = "pve_aolia_panel_aolia_itemIcon_0_png",
        t.width = 35,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaPanelAoliaSkin.exml"] = window.PveAoliaPanelAoliaSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["grp_cost", "btnGo", "btnOnetap", "btnEvo", "flag_got", "icon_2", "icon_1", "icon_0", "txt_cost_1", "costIcon_1", "btnBuy_1", "flag_got_1", "txt_cost_2", "costIcon_2", "btnBuy_2", "flag_got_2", "txt_cost_0", "costIcon_0", "btnBuy_0", "flag_got_0", "leftGroup", "box_close", "box_open", "opening", "opened", "txt_time", "txt_boxNum", "btnCompose", "txt_itemNum_1", "btnPlus_1", "itemIcon_1", "txt_itemNum_0", "btnPlus_0", "itemIcon_0", "grp_right", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.grp_cost_i(), this._Group1_i(), this.btnOnetap_i(), this.btnEvo_i(), this.flag_got_i(), this.leftGroup_i(), this.grp_right_i(), this.btnInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 291,
        t.horizontalCenter = -.5,
        t.source = "common_pet_base_png",
        t.width = 421,
        t.y = 323,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 614,
        t.horizontalCenter = 14,
        t.source = "pve_aolia_panel_aolia_pet_png",
        t.width = 748,
        t.y = 0,
        t
    },
    i.grp_cost_i = function() {
        var t = new eui.Group;
        return this.grp_cost = t,
        t.horizontalCenter = 90,
        t.y = 577,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "pve_aolia_panel_aliya_countbg_png",
        t.width = 173,
        t.x = 1,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pve_aolia_panel_aolia_itemIcon_0_png",
        t.width = 23,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "需要凛冰枪魂X12",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 27,
        t.y = 9,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 100,
        t.right = 0,
        t.width = 320,
        t.y = 524,
        t.elementsContent = [this.btnGo_i(), this._Image6_i(), this._Label2_i()],
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 100,
        t.source = "pve_aolia_panel_aliya_aolia_btnGo_png",
        t.width = 233,
        t.x = 87,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 10,
        t.source = "pve_aolia_panel_aliya_img_j_png",
        t.width = 39,
        t.x = 39,
        t.y = 81,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "进化必需",
        t.textColor = 10150911,
        t.x = 0,
        t.y = 56,
        t
    },
    i.btnOnetap_i = function() {
        var t = new eui.Image;
        return this.btnOnetap = t,
        t.height = 52,
        t.horizontalCenter = -105,
        t.source = "pve_aolia_panel_aliya_btnOnetap_png",
        t.width = 176,
        t.y = 528,
        t
    },
    i.btnEvo_i = function() {
        var t = new eui.Image;
        return this.btnEvo = t,
        t.height = 52,
        t.horizontalCenter = 91,
        t.source = "pve_aolia_panel_aliya_btnExchange_png",
        t.width = 176,
        t.y = 528,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.height = 50,
        t.horizontalCenter = -2.5,
        t.source = "pve_aolia_panel_flag_got_pet_png",
        t.width = 91,
        t.y = 530,
        t
    },
    i.leftGroup_i = function() {
        var t = new eui.Group;
        return this.leftGroup = t,
        t.left = 0,
        t.y = 121,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this.icon_2_i(), this._Image10_i(), this.icon_1_i(), this._Image11_i(), this.icon_0_i(), this.btnBuy_1_i(), this.flag_got_1_i(), this.btnBuy_2_i(), this.flag_got_2_i(), this.btnBuy_0_i(), this.flag_got_0_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 417,
        t.source = "pve_aolia_panel_aolia_rewardIconbg_png",
        t.width = 131,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "pve_aolia_panel_aolia_rewardTitle_png",
        t.width = 95,
        t.x = 18,
        t.y = 3,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 37,
        t.y = 286,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 40,
        t.horizontalCenter = -.5,
        t.source = "pve_aolia_panel_aya_icon_2_png",
        t.verticalCenter = 107.5,
        t.width = 40,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 37,
        t.y = 164,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 41,
        t.source = "pve_aolia_panel_aya_icon_1_png",
        t.width = 37,
        t.x = 47,
        t.y = 176,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 37,
        t.y = 42,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 33,
        t.source = "pve_aolia_panel_aya_icon_0_png",
        t.width = 39,
        t.x = 46,
        t.y = 58,
        t
    },
    i.btnBuy_1_i = function() {
        var t = new eui.Group;
        return this.btnBuy_1 = t,
        t.visible = !0,
        t.x = 15,
        t.y = 108,
        t.elementsContent = [this._Image12_i(), this.txt_cost_1_i(), this.costIcon_1_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pve_aolia_panel_aolia_btnBg_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_cost_1_i = function() {
        var t = new eui.Label;
        return this.txt_cost_1 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 14,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "40",
        t.textColor = 8341784,
        t.touchEnabled = !1,
        t.y = 10,
        t
    },
    i.costIcon_1_i = function() {
        var t = new eui.Image;
        return this.costIcon_1 = t,
        t.height = 25,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 29,
        t.x = 12,
        t.y = 7,
        t
    },
    i.flag_got_1_i = function() {
        var t = new eui.Image;
        return this.flag_got_1 = t,
        t.height = 50,
        t.source = "pve_aolia_panel_aya_flag_got_png",
        t.width = 91,
        t.x = 19,
        t.y = 103,
        t
    },
    i.btnBuy_2_i = function() {
        var t = new eui.Group;
        return this.btnBuy_2 = t,
        t.x = 15,
        t.y = 232,
        t.elementsContent = [this._Image13_i(), this.txt_cost_2_i(), this.costIcon_2_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pve_aolia_panel_aolia_btnBg_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_cost_2_i = function() {
        var t = new eui.Label;
        return this.txt_cost_2 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 14,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "40",
        t.textColor = 8341784,
        t.touchEnabled = !1,
        t.y = 9,
        t
    },
    i.costIcon_2_i = function() {
        var t = new eui.Image;
        return this.costIcon_2 = t,
        t.height = 25,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 29,
        t.x = 12,
        t.y = 7,
        t
    },
    i.flag_got_2_i = function() {
        var t = new eui.Image;
        return this.flag_got_2 = t,
        t.height = 50,
        t.source = "pve_aolia_panel_aya_flag_got_png",
        t.width = 91,
        t.x = 19,
        t.y = 227,
        t
    },
    i.btnBuy_0_i = function() {
        var t = new eui.Group;
        return this.btnBuy_0 = t,
        t.x = 15,
        t.y = 357,
        t.elementsContent = [this._Image14_i(), this.txt_cost_0_i(), this.costIcon_0_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pve_aolia_panel_aolia_btnBg_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_cost_0_i = function() {
        var t = new eui.Label;
        return this.txt_cost_0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 14,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "20",
        t.textColor = 8341784,
        t.touchEnabled = !1,
        t.y = 10,
        t
    },
    i.costIcon_0_i = function() {
        var t = new eui.Image;
        return this.costIcon_0 = t,
        t.height = 25,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 29,
        t.x = 12,
        t.y = 7,
        t
    },
    i.flag_got_0_i = function() {
        var t = new eui.Image;
        return this.flag_got_0 = t,
        t.height = 50,
        t.source = "pve_aolia_panel_aya_flag_got_png",
        t.width = 91,
        t.x = 19,
        t.y = 352,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.right = 2,
        t.visible = !0,
        t.y = 5,
        t.elementsContent = [this._Group2_i(), this.btnCompose_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 268,
        t.y = 88,
        t.elementsContent = [this._Image15_i(), this.box_close_i(), this.box_open_i(), this._Image16_i(), this.opening_i(), this.opened_i(), this.txt_time_i(), this.txt_boxNum_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 162,
        t.source = "pve_aolia_panel_aolia_awardbg_png",
        t.width = 171,
        t.x = 0,
        t.y = 13,
        t
    },
    i.box_close_i = function() {
        var t = new eui.Image;
        return this.box_close = t,
        t.height = 126,
        t.source = "pve_aolia_panel_aolia_box_close_png",
        t.visible = !0,
        t.width = 123,
        t.x = 27,
        t.y = 26,
        t
    },
    i.box_open_i = function() {
        var t = new eui.Image;
        return this.box_open = t,
        t.height = 128,
        t.source = "pve_aolia_panel_aolia_box_open_png",
        t.visible = !0,
        t.width = 122,
        t.x = 28,
        t.y = 28,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 63,
        t.source = "pve_aolia_panel_aolia_boxTitle_png",
        t.visible = !0,
        t.width = 171,
        t.x = 12,
        t.y = 0,
        t
    },
    i.opening_i = function() {
        var t = new eui.Image;
        return this.opening = t,
        t.height = 35,
        t.source = "pve_aolia_panel_aolia_opening_png",
        t.visible = !1,
        t.width = 70,
        t.x = 55,
        t.y = 130,
        t
    },
    i.opened_i = function() {
        var t = new eui.Image;
        return this.opened = t,
        t.height = 35,
        t.source = "pve_aolia_panel_aolia_opened_png",
        t.visible = !0,
        t.width = 69,
        t.x = 55,
        t.y = 130,
        t
    },
    i.txt_time_i = function() {
        var t = new eui.Label;
        return this.txt_time = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "00:00:00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 42,
        t.y = 159,
        t
    },
    i.txt_boxNum_i = function() {
        var t = new eui.Label;
        return this.txt_boxNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 58,
        t.lineSpacing = 3,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 4741042,
        t.text = "x10",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 35,
        t
    },
    i.btnCompose_i = function() {
        var t = new eui.Image;
        return this.btnCompose = t,
        t.height = 42,
        t.source = "pve_aolia_panel_aolia_btnCompose_png",
        t.width = 122,
        t.x = 298,
        t.y = 271,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 230,
        t.y = 4,
        t.elementsContent = [this._Label3_i(), this.txt_itemNum_1_i(), this.btnPlus_1_i(), this.itemIcon_1_i()],
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "自然庇佑：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 41,
        t.y = 8,
        t
    },
    i.txt_itemNum_1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_1 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 129,
        t.y = 8,
        t
    },
    i.btnPlus_1_i = function() {
        var t = new eui.Image;
        return this.btnPlus_1 = t,
        t.height = 26,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 26,
        t.x = 177,
        t.y = 2,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new eui.Image;
        return this.itemIcon_1 = t,
        t.height = 29,
        t.source = "pve_aolia_panel_aolia_itemIcon_1_png",
        t.width = 33,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Label4_i(), this.txt_itemNum_0_i(), this.btnPlus_0_i(), this.itemIcon_0_i()],
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 18,
        t.text = "凛冰枪魂：",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 43,
        t.y = 11,
        t
    },
    i.txt_itemNum_0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum_0 = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 133,
        t.y = 11,
        t
    },
    i.btnPlus_0_i = function() {
        var t = new eui.Image;
        return this.btnPlus_0 = t,
        t.height = 26,
        t.source = "pve_aolia_aya_pop_0_btnAdd_png",
        t.width = 26,
        t.x = 181,
        t.y = 6,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new eui.Image;
        return this.itemIcon_0 = t,
        t.height = 35,
        t.source = "pve_aolia_panel_aolia_itemIcon_0_png",
        t.width = 35,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.horizontalCenter = -253,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.y = 514,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveAoliaPanelAyaSkin.exml"] = window.PveAoliaPanelAyaSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnGet", "flag_got", "icon_2", "icon_1", "icon_0", "flag_made_2", "btnMake_2", "flag_made_3", "btnMake_3", "flag_made_0", "btnMake_0", "flag_made_1", "btnMake_1", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnGet_i(), this.flag_got_i(), this._Group1_i(), this._Group2_i(), this.btnInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pet_base_png",
        t.x = 32,
        t.y = 321,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 456,
        t.source = "pve_aolia_panel_aya_pet_aya_png",
        t.width = 378,
        t.x = 19,
        t.y = 107,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 52,
        t.source = "pve_aolia_panel_aya_btnGet_png",
        t.width = 176,
        t.x = 159,
        t.y = 553,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.height = 50,
        t.source = "pve_aolia_panel_flag_got_pet_png",
        t.width = 91,
        t.x = 204,
        t.y = 554,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 86,
        t.y = 97,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.icon_2_i(), this.icon_1_i(), this.icon_0_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "pve_aolia_panel_aya_img_free_png",
        t.width = 39,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 151,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 93,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "pve_aolia_panel_aya_img_rect_png",
        t.width = 57,
        t.x = 4,
        t.y = 35,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 40,
        t.horizontalCenter = 2,
        t.source = "pve_aolia_panel_aya_icon_2_png",
        t.verticalCenter = 73,
        t.width = 40,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 41,
        t.source = "pve_aolia_panel_aya_icon_1_png",
        t.width = 37,
        t.x = 14,
        t.y = 105,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 33,
        t.source = "pve_aolia_panel_aya_icon_0_png",
        t.width = 39,
        t.x = 13,
        t.y = 51,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 36,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Label1_i(), this.flag_made_2_i(), this.btnMake_2_i(), this._Image10_i(), this._Label2_i(), this.flag_made_3_i(), this.btnMake_3_i(), this._Image11_i(), this._Label3_i(), this.flag_made_0_i(), this.btnMake_0_i(), this._Image12_i(), this._Label4_i(), this.flag_made_1_i(), this.btnMake_1_i(), this._Image13_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 604,
        t.source = "pve_aolia_panel_aya_rightbg_png",
        t.width = 764,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_panel_aya_makeBg_png",
        t.x = 402,
        t.y = 344,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 28,
        t.text = "庆典彩旗",
        t.textColor = 14940415,
        t.touchEnabled = !1,
        t.x = 494,
        t.y = 511,
        t
    },
    i.flag_made_2_i = function() {
        var t = new eui.Image;
        return this.flag_made_2 = t,
        t.height = 133,
        t.source = "pve_aolia_panel_aya_flag_made_3_png",
        t.width = 101,
        t.x = 503,
        t.y = 370,
        t
    },
    i.btnMake_2_i = function() {
        var t = new eui.Image;
        return this.btnMake_2 = t,
        t.height = 167,
        t.source = "pve_aolia_panel_aya_btnMake_3_png",
        t.width = 135,
        t.x = 486,
        t.y = 352,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_panel_aya_makeBg_png",
        t.x = 117,
        t.y = 344,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 28,
        t.text = "帅气披风",
        t.textColor = 14940671,
        t.touchEnabled = !1,
        t.x = 210,
        t.y = 511,
        t
    },
    i.flag_made_3_i = function() {
        var t = new eui.Image;
        return this.flag_made_3 = t,
        t.height = 107,
        t.source = "pve_aolia_panel_aya_flag_made_2_png",
        t.width = 126,
        t.x = 202,
        t.y = 383,
        t
    },
    i.btnMake_3_i = function() {
        var t = new eui.Image;
        return this.btnMake_3 = t,
        t.height = 141,
        t.source = "pve_aolia_panel_aya_btnMake_2_png",
        t.width = 160,
        t.x = 185,
        t.y = 366,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_panel_aya_makeBg_png",
        t.x = 396,
        t.y = 120,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 28,
        t.text = "遮光墨镜",
        t.textColor = 14940415,
        t.touchEnabled = !1,
        t.x = 488,
        t.y = 290,
        t
    },
    i.flag_made_0_i = function() {
        var t = new eui.Image;
        return this.flag_made_0 = t,
        t.height = 72,
        t.source = "pve_aolia_panel_aya_flag_made_1_png",
        t.width = 133,
        t.x = 475,
        t.y = 167,
        t
    },
    i.btnMake_0_i = function() {
        var t = new eui.Image;
        return this.btnMake_0 = t,
        t.height = 109,
        t.source = "pve_aolia_panel_aya_btnMake_1_png",
        t.width = 168,
        t.x = 459,
        t.y = 149,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "pve_aolia_panel_aya_makeBg_png",
        t.x = 115,
        t.y = 119,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 28,
        t.text = "金色绶带",
        t.textColor = 14940415,
        t.touchEnabled = !1,
        t.x = 206,
        t.y = 290,
        t
    },
    i.flag_made_1_i = function() {
        var t = new eui.Image;
        return this.flag_made_1 = t,
        t.height = 146,
        t.source = "pve_aolia_panel_aya_flag_made_0_png",
        t.width = 216,
        t.x = 154,
        t.y = 134,
        t
    },
    i.btnMake_1_i = function() {
        var t = new eui.Image;
        return this.btnMake_1 = t,
        t.height = 127,
        t.source = "pve_aolia_panel_aya_btnMake_0_png",
        t.width = 197,
        t.x = 164,
        t.y = 144,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 75,
        t.source = "pve_aolia_panel_aya_intro_png",
        t.x = 120,
        t.y = 48,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.source = "pve_aolia_btnInfo_png",
        t.width = 74,
        t.x = 59,
        t.y = 540,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ZhendeFlagItemSkin.exml"] = window.ZhendeFlagItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["dark", "light"],
        this.height = 57,
        this.width = 48,
        this.elementsContent = [this.dark_i(), this.light_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.dark_i = function() {
        var t = new eui.Image;
        return this.dark = t,
        t.height = 47,
        t.source = "pve_aolia_aya_pop_2_dark_png",
        t.width = 37,
        t.x = 6,
        t.y = 5,
        t
    },
    i.light_i = function() {
        var t = new eui.Image;
        return this.light = t,
        t.height = 57,
        t.source = "pve_aolia_aya_pop_2_light_png",
        t.visible = !0,
        t.width = 48,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);