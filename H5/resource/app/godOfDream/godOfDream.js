var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.service.setValues([t.AttrConst.forever_getState], [t.AttrConst.daily_badDreamBall, t.AttrConst.daily_curTask, t.AttrConst.daily_finishTask, t.AttrConst.daily_goodDreamBall, t.AttrConst.daily_unrealDreamBall, t.AttrConst.daily_showTime], [], [t.AttrConst.daily_bitBuf_hasGetBonus]),
            n.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            n
        }
        return __extends(n, e),
        n
    } (BasicMultPanelModule);
    t.GodOfDream = e,
    __reflect(e.prototype, "godOfDream.GodOfDream")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
godOfDream; !
function(t) {
    var e = function() {
        function t() {}
        return t.CMD = 46340,
        t.forever_getState = 4930,
        t.daily_showTime = 16633,
        t.daily_curTask = 16634,
        t.daily_finishTask = 16635,
        t.daily_goodDreamBall = 16636,
        t.daily_badDreamBall = 16637,
        t.daily_unrealDreamBall = 16638,
        t.daily_bitBuf_hasGetBonus = 1000339,
        t.no_wait_bonus = 2727,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "godOfDream.AttrConst")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
godOfDream; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "godOfDream.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "godOfDream.PanelConst")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "GodOfDreamMainPanelSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            this.addEvent(),
            this.initOldPveBtnClose(0, this, "god_of_dream_main_panel_img1_png",
            function() {
                t.service.closeModule()
            },
            this),
            this.initItem()
        },
        n.prototype.initItem = function() {
            this.service.registerItemUpdateForText(1713788, this.txtBall, this)
        },
        n.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener("UpdateMainPanel",
            function() {
                e.updateValues()
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnOneKeyBuy,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(250954, 1,
                function() {
                    SocketConnection.sendWithPromise(46340, [1, 0]).then(function() {
                        e.updateValues()
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnAddShowTime,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(250957, 1,
                function() {
                    KTool.doExchange(10420, 1,
                    function() {
                        e.service.updateSomeValues([t.AttrConst.daily_showTime]).then(function() {
                            e.update()
                        })
                    })
                },
                e) : void e.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnBuyBall,
            function() {
                if (!PayManager.canPay()) return void e.noOpen();
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1713788,
                    productID: 250956
                },
                t.caller = e,
                t.callBack = function(t, n) {
                    KTool.buyProductByCallback(250956, n,
                    function() {
                        KTool.doExchange(10421, n,
                        function() {
                            ItemManager.updateItems([1713788],
                            function() {
                                e.update()
                            })
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnGetBonus,
            function() {
                SocketConnection.sendByQueue(t.AttrConst.CMD, [4, 0],
                function() {
                    e.service.updateSomeValues([t.AttrConst.daily_bitBuf_hasGetBonus]).then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetInfo(3420)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                e.service.showMarkInfo(40995)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                e.service.showSkillInfo(31029)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                e.service.showPetEff(3420)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                ItemManager.getNumByID(1713788) < 60 ? BubblerManager.getInstance().showText("梦境求数量不足！") : SocketConnection.sendByQueue(t.AttrConst.CMD, [2, 0],
                function() {
                    e.service.updateSomeValues([t.AttrConst.forever_getState]).then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetKe,
            function() {
                ItemManager.getNumByID(1713788) < 10 ? BubblerManager.getInstance().showText("梦境求数量不足！") : PetManager.isDefaultPet(3420) ? SocketConnection.sendByQueue(t.AttrConst.CMD, [3, 1],
                function() {
                    e.service.updateSomeValues([t.AttrConst.forever_getState]).then(function() {
                        e.update()
                    })
                }) : Alarm.show("请先将梦·赫尔墨斯设为精灵首发！",
                function() {
                    e.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetWu,
            function() {
                ItemManager.getNumByID(1713788) < 20 ? BubblerManager.getInstance().showText("梦境求数量不足！") : PetManager.isDefaultPet(3420) ? SocketConnection.sendByQueue(t.AttrConst.CMD, [3, 2],
                function() {
                    e.service.updateSomeValues([t.AttrConst.forever_getState]).then(function() {
                        e.update()
                    })
                }) : Alarm.show("请先将梦·赫尔墨斯设为精灵首发！",
                function() {
                    e.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetTe,
            function() {
                ItemManager.getNumByID(1713788) < 30 ? BubblerManager.getInstance().showText("梦境求数量不足！") : PetManager.isDefaultPet(3420) ? SocketConnection.sendByQueue(t.AttrConst.CMD, [3, 3],
                function() {
                    e.service.updateSomeValues([t.AttrConst.forever_getState]).then(function() {
                        e.update()
                    })
                }) : Alarm.show("请先将梦·赫尔墨斯设为精灵首发！",
                function() {
                    e.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnDream,
            function() {
                if (0 == e.curTask) e.numShowTime >= 8 ? BubblerManager.getInstance().showText("今日剩余揭示次数不足！") : SocketConnection.sendByQueue(t.AttrConst.CMD, [5, 0],
                function() {
                    e.service.updateSomeValues([t.AttrConst.daily_curTask, t.AttrConst.daily_showTime]).then(function() {
                        e.update()
                    })
                });
                else if (1 == e.curTask) e.service.updateSomeValues([t.AttrConst.daily_goodDreamBall]).then(function() {
                    var n = e.service.getValue(t.AttrConst.daily_goodDreamBall);
                    if (1 == n) {
                        var i = new t.GoodPop2;
                        e.service.openPop(i, !1, null, null, e, e)
                    } else {
                        var i = new t.GoodPop1;
                        e.service.openPop(i, !1, null, null, e, e)
                    }
                });
                else if (2 == e.curTask) e.service.updateSomeValues([t.AttrConst.daily_badDreamBall]).then(function() {
                    var n = e.service.getValue(t.AttrConst.daily_badDreamBall);
                    if (0 == n) {
                        var i = new t.BadPop1;
                        e.service.openPop(i, !1, null, null, e, e)
                    } else {
                        var i = new t.BadPop2;
                        e.service.openPop(i, !1, null, null, e, e)
                    }
                });
                else if (3 == e.curTask) {
                    var n = new t.UnrealPop;
                    e.service.updateSomeValues([t.AttrConst.daily_unrealDreamBall]).then(function() {
                        0 == e.service.getValue(t.AttrConst.daily_unrealDreamBall) ? SocketConnection.sendByQueue(t.AttrConst.CMD, [10, 0],
                        function() {
                            e.service.openPop(n, !1, null, null, e, e)
                        }) : e.service.openPop(n, !1, null, null, e, e)
                    })
                } else console.error("error task!  curTask:" + e.curTask)
            },
            this)
        },
        n.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        n.prototype.update = function() {
            this.numShowTime = this.service.getValue(t.AttrConst.daily_showTime),
            this.txtShowTime.text = this.numShowTime + "/8";
            var e = this.service.getValue(t.AttrConst.forever_getState),
            n = e >= 1,
            i = e >= 2,
            o = e >= 3,
            a = e >= 4;
            this.imgHasPet.visible = n,
            this.imgHasKe.visible = i,
            this.imgHasWu.visible = o,
            this.imgHasTe.visible = a;
            var r = !n,
            s = n && !i,
            _ = i && !o,
            u = o && !a;
            DisplayUtil.setEnabled(this.btnGetPet, r, !r),
            DisplayUtil.setEnabled(this.btnGetKe, s, !s),
            DisplayUtil.setEnabled(this.btnGetWu, _, !_),
            DisplayUtil.setEnabled(this.btnGetTe, u, !u),
            DisplayUtil.setEnabled(this.btnAddShowTime, this.numShowTime >= 8, !(this.numShowTime >= 8)),
            DisplayUtil.setEnabled(this.btnOneKeyBuy, 0 >= e, e > 0);
            for (var g = this.service.getValue(t.AttrConst.daily_finishTask), l = 0, h = 1; 3 >= h; h++) KTool.getBit(g, h) && l++;
            this.txtBonus.text = l + "/3";
            var d = 1 == this.service.getValue(t.AttrConst.daily_bitBuf_hasGetBonus),
            c = !d && 3 == l;
            DisplayUtil.setEnabled(this.btnGetBonus, c, !c),
            this.curTask = this.service.getValue(t.AttrConst.daily_curTask),
            this.imgShowDream.visible = 0 == this.curTask,
            this.imgEnterDream.visible = 0 != this.curTask,
            this.imgNotShow1.visible = this.imgNotShow2.visible = 0 == this.curTask,
            this.imgGoodBall1.visible = this.imgGoodBall2.visible = 1 == this.curTask,
            this.imgBadBall1.visible = this.imgBadBall2.visible = 2 == this.curTask,
            this.imgUnrealBall1.visible = this.imgUnrealBall2.visible = 3 == this.curTask
        },
        n
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "godOfDream.MainPanel")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "GodOfDreamBadPop1Skin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss("", 10305)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(250959, 1,
                function() {
                    SocketConnection.sendWithPromise(46340, [8, 1]).then(function() {
                        EventManager.dispatchEventWith("UpdateMainPanel"),
                        Alarm.show("恭喜你完成任务！",
                        function() {
                            EventManager.dispatchEventWith("UpdateMainPanel", !0),
                            t.turn2BadPop2()
                        })
                    })
                },
                t) : Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            e.prototype.destroy.call(this)
        },
        n.prototype.backFromFight = function() {
            var t = this;
            FightManager.isWin && Alarm.show("不好，好像有更可怕的东西过来了！",
            function() {
                t.turn2BadPop2()
            })
        },
        n.prototype.turn2BadPop2 = function() {
            PopViewManager.getInstance().hideView(this);
            var e = new t.BadPop2,
            n = PopViewManager.createDefaultStyleObject();
            n.ignoreMaskClick = !1,
            PopViewManager.getInstance().hideView(this);
            var i = egret.setTimeout(function() {
                egret.clearTimeout(i),
                PopViewManager.getInstance().openView(e, n, null, ModuleManager.currModule)
            },
            this, 300)
        },
        n
    } (PopView);
    t.BadPop1 = e,
    __reflect(e.prototype, "godOfDream.BadPop1")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "GodOfDreamBadPop2Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss("", 10306)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(250959, 1,
                function() {
                    SocketConnection.sendWithPromise(46340, [8, 2]).then(function() {
                        EventManager.dispatchEventWith("UpdateMainPanel"),
                        Alarm.show("恭喜你完成任务！",
                        function() {
                            EventManager.dispatchEventWith("UpdateMainPanel", !0),
                            PopViewManager.getInstance().hideView(t)
                        })
                    })
                },
                t) : Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        e.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            t.prototype.destroy.call(this)
        },
        e.prototype.backFromFight = function() {
            var t = this;
            FightManager.isWin && Alarm.show("你展示出强大的实力，将梦魔打的落荒而逃！",
            function() {
                PopViewManager.getInstance().hideView(t)
            })
        },
        e
    } (PopView);
    t.BadPop2 = e,
    __reflect(e.prototype, "godOfDream.BadPop2")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "GodOfDreamGoodPop1Skin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.addEvent()
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(t.AttrConst.CMD, [6, 0],
                function() {
                    Alarm.show("啊哦，你好像遇到了一位不速之客。",
                    function() {
                        var n = new t.GoodPop2,
                        i = PopViewManager.createDefaultStyleObject();
                        i.ignoreMaskClick = !1,
                        PopViewManager.getInstance().hideView(e);
                        var o = egret.setTimeout(function() {
                            egret.clearTimeout(o),
                            PopViewManager.getInstance().openView(n, i, null, ModuleManager.currModule)
                        },
                        e, 300)
                    })
                })
            },
            this)
        },
        n
    } (PopView);
    t.GoodPop1 = e,
    __reflect(e.prototype, "godOfDream.GoodPop1")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "GodOfDreamGoodPop2Skin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss("", 10304)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                PayManager.canPay() ? KTool.buyProductByCallback(250958, 1,
                function() {
                    SocketConnection.sendWithPromise(46340, [7, 0]).then(function() {
                        Alarm.show("恭喜你完成任务！",
                        function() {
                            EventManager.dispatchEventWith("UpdateMainPanel", !0),
                            PopViewManager.getInstance().hideView(t)
                        })
                    })
                },
                t) : Alarm.show("暂未开放，敬请期待！")
            },
            this)
        },
        e.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            t.prototype.destroy.call(this)
        },
        e.prototype.backFromFight = function() {
            var t = this;
            FightManager.isWin && Alarm.show("你成功赶走了美梦盗贼，并抢回了属于你的梦境球！",
            function() {
                PopViewManager.getInstance().hideView(t)
            })
        },
        e
    } (PopView);
    t.GoodPop2 = e,
    __reflect(e.prototype, "godOfDream.GoodPop2")
} (godOfDream || (godOfDream = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
godOfDream; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "GodOfDreamUnrealPopSkin",
            t
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.addEvent(),
            this.update()
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnFastShow,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(250960, 1,
                function() {
                    SocketConnection.sendWithPromise(46340, [9, 0]).then(function() {
                        Alarm.show("恭喜你完成任务！",
                        function() {
                            EventManager.dispatchEventWith("UpdateMainPanel", !0),
                            PopViewManager.getInstance().hideView(t)
                        })
                    })
                },
                t) : void Alarm.show("暂未开放，敬请期待！")
            },
            this);
            for (var e = function(t) {
                ImageButtonUtil.add(n["btn" + t],
                function() {
                    Alert.show("你确定它就是梦里的精灵吗？",
                    function() {
                        FightManager.fightNoMapBoss("", 10306 + t)
                    })
                },
                n)
            },
            n = this, i = 1; 3 >= i; i++) e(i);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this),
            e.prototype.destroy.call(this)
        },
        n.prototype.backFromFight = function() {
            var e = this;
            KTool.getMultiValue([t.AttrConst.daily_curTask],
            function(t) {
                t[0] ? Alarm.show("你似乎找错了人，再试试吧！") : Alarm.show("聪明的你一眼就看出了这只精灵的真面目！",
                function() {
                    PopViewManager.getInstance().hideView(e)
                })
            })
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([t.AttrConst.daily_unrealDreamBall],
            function(t) {
                for (var n = 1; 3 >= n; n++) e["imgPet" + n].visible = n == t[0]
            })
        },
        n
    } (PopView);
    t.UnrealPop = e,
    __reflect(e.prototype, "godOfDream.UnrealPop")
} (godOfDream || (godOfDream = {}));
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/GodOfDreamBadPop1Skin.exml"] = window.GodOfDreamBadPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnPet", "btnCure", "btnFastBeat", "btnFight", "btnClose"],
        this.height = 283,
        this.width = 582,
        this.elementsContent = [this._Image1_i(), this.btnPet_i(), this.btnCure_i(), this.btnFastBeat_i(), this.btnFight_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_bad_pop1_emzq_png",
        t.x = 62,
        t.y = 0,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "god_of_dream_good_pop2_btnpet_png",
        t.x = 0,
        t.y = 156,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "god_of_dream_good_pop2_btncure_png",
        t.x = 0,
        t.y = 221,
        t
    },
    n.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "god_of_dream_good_pop2_btnfastbeat_png",
        t.x = 431,
        t.y = 221,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "god_of_dream_good_pop2_btnfight_png",
        t.x = 282,
        t.y = 218,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_good_pop1_btnclose_png",
        t.x = 541,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodOfDreamBadPop2Skin.exml"] = window.GodOfDreamBadPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnPet", "btnCure", "btnFastBeat", "btnFight", "btnClose"],
        this.height = 340,
        this.width = 606,
        this.elementsContent = [this._Image1_i(), this.btnPet_i(), this.btnCure_i(), this.btnFastBeat_i(), this.btnFight_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_bad_pop2_emzq_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "god_of_dream_good_pop2_btnpet_png",
        t.x = 24,
        t.y = 213,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "god_of_dream_good_pop2_btncure_png",
        t.x = 24,
        t.y = 278,
        t
    },
    n.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "god_of_dream_good_pop2_btnfastbeat_png",
        t.x = 455,
        t.y = 278,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "god_of_dream_good_pop2_btnfight_png",
        t.x = 306,
        t.y = 275,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_good_pop1_btnclose_png",
        t.visible = !0,
        t.x = 565,
        t.y = 66,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodOfDreamGoodPop1Skin.exml"] = window.GodOfDreamGoodPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnGet", "btnClose"],
        this.height = 258,
        this.width = 430,
        this.elementsContent = [this._Image1_i(), this.btnGet_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_good_pop1_mmzq_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "god_of_dream_good_pop1_btnget_png",
        t.x = 41,
        t.y = 189,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_good_pop1_btnclose_png",
        t.x = 389,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodOfDreamGoodPop2Skin.exml"] = window.GodOfDreamGoodPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnPet", "btnCure", "btnFastBeat", "btnFight", "btnClose"],
        this.height = 292,
        this.width = 582,
        this.elementsContent = [this._Image1_i(), this.btnPet_i(), this.btnCure_i(), this.btnFastBeat_i(), this.btnFight_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_good_pop2_jbmmdz_png",
        t.x = 53,
        t.y = 0,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "god_of_dream_good_pop2_btnpet_png",
        t.x = 0,
        t.y = 159,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "god_of_dream_good_pop2_btncure_png",
        t.x = 0,
        t.y = 224,
        t
    },
    n.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "god_of_dream_good_pop2_btnfastbeat_png",
        t.x = 431,
        t.y = 224,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "god_of_dream_good_pop2_btnfight_png",
        t.x = 282,
        t.y = 221,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_good_pop1_btnclose_png",
        t.x = 541,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodOfDreamMainPanelSkin.exml"] = window.GodOfDreamMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBadBall2", "imgGoodBall2", "imgUnrealBall2", "imgNotShow2", "imgUnrealBall1", "imgBadBall1", "imgGoodBall1", "imgNotShow1", "imgShowDream", "imgEnterDream", "btnDream", "btnGetKe", "btnKe", "imgHasKe", "btnGetTe", "btnTe", "imgHasTe", "btnGetWu", "btnWu", "imgHasWu", "btnPet", "imgHasPet", "btnGetPet", "btnGetBonus", "txtBonus", "btnBuyBall", "txtBall", "txtShowTime", "btnAddShowTime", "btnOneKeyBuy", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "god_of_dream_main_panel_bg_jpg",
        t.top = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 14,
        t.elementsContent = [this._Image2_i(), this.imgBadBall2_i(), this.imgGoodBall2_i(), this.imgUnrealBall2_i(), this.imgNotShow2_i(), this._Image3_i(), this.imgUnrealBall1_i(), this.imgBadBall1_i(), this.imgGoodBall1_i(), this.imgNotShow1_i(), this.btnDream_i(), this._Rect1_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnGetKe_i(), this._Image8_i(), this.btnKe_i(), this.imgHasKe_i(), this.btnGetTe_i(), this._Image9_i(), this.btnTe_i(), this.imgHasTe_i(), this.btnGetWu_i(), this._Image10_i(), this.btnWu_i(), this.imgHasWu_i(), this._Image11_i(), this.btnPet_i(), this.imgHasPet_i(), this.btnGetPet_i(), this._Image12_i(), this._Image13_i(), this._Rect2_i(), this._Image14_i(), this.btnGetBonus_i(), this._Image15_i(), this._Image16_i(), this.txtBonus_i(), this._Image17_i(), this.btnBuyBall_i(), this.txtBall_i(), this._Image18_i(), this._Image19_i(), this.txtShowTime_i(), this.btnAddShowTime_i(), this.btnOneKeyBuy_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img19_png",
        t.visible = !0,
        t.x = 308,
        t.y = 178,
        t
    },
    n.imgBadBall2_i = function() {
        var t = new eui.Image;
        return this.imgBadBall2 = t,
        t.source = "god_of_dream_main_panel_imgbadball2_png",
        t.visible = !1,
        t.x = 358,
        t.y = 157,
        t
    },
    n.imgGoodBall2_i = function() {
        var t = new eui.Image;
        return this.imgGoodBall2 = t,
        t.source = "god_of_dream_main_panel_imggoodball2_png",
        t.visible = !1,
        t.x = 358,
        t.y = 238,
        t
    },
    n.imgUnrealBall2_i = function() {
        var t = new eui.Image;
        return this.imgUnrealBall2 = t,
        t.source = "god_of_dream_main_panel_imgunrealball2_png",
        t.visible = !1,
        t.x = 317,
        t.y = 158,
        t
    },
    n.imgNotShow2_i = function() {
        var t = new eui.Image;
        return this.imgNotShow2 = t,
        t.source = "god_of_dream_main_panel_imgnotshow2_png",
        t.visible = !1,
        t.x = 507,
        t.y = 293,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img18_png",
        t.visible = !0,
        t.x = 310,
        t.y = 109,
        t
    },
    n.imgUnrealBall1_i = function() {
        var t = new eui.Image;
        return this.imgUnrealBall1 = t,
        t.source = "god_of_dream_main_panel_imgunrealball1_png",
        t.visible = !1,
        t.x = 477,
        t.y = 116,
        t
    },
    n.imgBadBall1_i = function() {
        var t = new eui.Image;
        return this.imgBadBall1 = t,
        t.source = "god_of_dream_main_panel_imgbadball1_png",
        t.visible = !1,
        t.x = 477,
        t.y = 116,
        t
    },
    n.imgGoodBall1_i = function() {
        var t = new eui.Image;
        return this.imgGoodBall1 = t,
        t.source = "god_of_dream_main_panel_imggoodball1_png",
        t.visible = !1,
        t.x = 478,
        t.y = 116,
        t
    },
    n.imgNotShow1_i = function() {
        var t = new eui.Image;
        return this.imgNotShow1 = t,
        t.source = "god_of_dream_main_panel_imgnotshow1_png",
        t.visible = !1,
        t.x = 463,
        t.y = 116,
        t
    },
    n.btnDream_i = function() {
        var t = new eui.Group;
        return this.btnDream = t,
        t.x = 431,
        t.y = 538,
        t.elementsContent = [this._Image4_i(), this.imgShowDream_i(), this.imgEnterDream_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img17_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgShowDream_i = function() {
        var t = new eui.Image;
        return this.imgShowDream = t,
        t.source = "god_of_dream_main_panel_imgshowdream_png",
        t.visible = !0,
        t.x = 46,
        t.y = 11,
        t
    },
    n.imgEnterDream_i = function() {
        var t = new eui.Image;
        return this.imgEnterDream = t,
        t.source = "god_of_dream_main_panel_imgenterdream_png",
        t.visible = !0,
        t.x = 46,
        t.y = 11,
        t
    },
    n._Rect1_i = function() {
        var t = new eui.Rect;
        return t.alpha = .6,
        t.fillColor = 4730179,
        t.height = 479.5,
        t.visible = !0,
        t.width = 320.811,
        t.x = 766.12,
        t.y = 117.12,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 110,
        t.scale9Grid = new egret.Rectangle(102, 37, 4, 36),
        t.source = "god_of_dream_main_panel_img9_png",
        t.visible = !0,
        t.width = 300,
        t.x = 777,
        t.y = 476,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 110,
        t.scale9Grid = new egret.Rectangle(102, 37, 6, 36),
        t.source = "god_of_dream_main_panel_img9_png",
        t.width = 300,
        t.x = 777,
        t.y = 361,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 110,
        t.scale9Grid = new egret.Rectangle(103, 37, 5, 36),
        t.source = "god_of_dream_main_panel_img9_png",
        t.visible = !0,
        t.width = 300,
        t.x = 777,
        t.y = 245,
        t
    },
    n.btnGetKe_i = function() {
        var t = new eui.Image;
        return this.btnGetKe = t,
        t.source = "god_of_dream_main_panel_btngetke_png",
        t.x = 931,
        t.y = 308.8,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img14_png",
        t.x = 925,
        t.y = 254.8,
        t
    },
    n.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "god_of_dream_main_panel_btnke_png",
        t.x = 802,
        t.y = 267.8,
        t
    },
    n.imgHasKe_i = function() {
        var t = new eui.Image;
        return this.imgHasKe = t,
        t.source = "god_of_dream_main_panel_imghaske_png",
        t.visible = !1,
        t.x = 780,
        t.y = 288.404,
        t
    },
    n.btnGetTe_i = function() {
        var t = new eui.Image;
        return this.btnGetTe = t,
        t.source = "god_of_dream_main_panel_btngetke_png",
        t.x = 931,
        t.y = 541.566,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img12_png",
        t.x = 925,
        t.y = 488.567,
        t
    },
    n.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "god_of_dream_main_panel_btnte_png",
        t.x = 811.838,
        t.y = 508.084,
        t
    },
    n.imgHasTe_i = function() {
        var t = new eui.Image;
        return this.imgHasTe = t,
        t.source = "god_of_dream_main_panel_imghaske_png",
        t.visible = !1,
        t.x = 780,
        t.y = 521.567,
        t
    },
    n.btnGetWu_i = function() {
        var t = new eui.Image;
        return this.btnGetWu = t,
        t.source = "god_of_dream_main_panel_btngetke_png",
        t.x = 931,
        t.y = 422.774,
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img10_png",
        t.x = 926,
        t.y = 369.774,
        t
    },
    n.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "god_of_dream_main_panel_btnwu_png",
        t.x = 807,
        t.y = 386.775,
        t
    },
    n.imgHasWu_i = function() {
        var t = new eui.Image;
        return this.imgHasWu = t,
        t.source = "god_of_dream_main_panel_imghaske_png",
        t.visible = !1,
        t.x = 780,
        t.y = 402.774,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 110,
        t.scale9Grid = new egret.Rectangle(104, 37, 3, 36),
        t.source = "god_of_dream_main_panel_img9_png",
        t.width = 300,
        t.x = 777,
        t.y = 129,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "god_of_dream_main_panel_btnpet_png",
        t.x = 795,
        t.y = 145,
        t
    },
    n.imgHasPet_i = function() {
        var t = new eui.Image;
        return this.imgHasPet = t,
        t.source = "god_of_dream_main_panel_imghaske_png",
        t.visible = !1,
        t.x = 780,
        t.y = 173,
        t
    },
    n.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "god_of_dream_main_panel_btngetke_png",
        t.visible = !0,
        t.x = 931,
        t.y = 194,
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img8_png",
        t.x = 914,
        t.y = 140,
        t
    },
    n._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 273,
        t.scale9Grid = new egret.Rectangle(8, 5, 7, 5),
        t.source = "god_of_dream_main_panel_img7_png",
        t.visible = !0,
        t.width = 323,
        t.x = 0,
        t.y = 326,
        t
    },
    n._Rect2_i = function() {
        var t = new eui.Rect;
        return t.alpha = .3,
        t.height = 108.925,
        t.width = 282.291,
        t.x = 21.07,
        t.y = 409.91,
        t
    },
    n._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_txttask_png",
        t.x = 34.18,
        t.y = 428.03,
        t
    },
    n.btnGetBonus_i = function() {
        var t = new eui.Image;
        return this.btnGetBonus = t,
        t.source = "god_of_dream_main_panel_btnseebonus_png",
        t.x = 166,
        t.y = 538,
        t
    },
    n._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img6_png",
        t.visible = !0,
        t.x = 26,
        t.y = 556,
        t
    },
    n._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img5_png",
        t.x = 27,
        t.y = 340,
        t
    },
    n.txtBonus_i = function() {
        var t = new eui.Label;
        return this.txtBonus = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00/00",
        t.textColor = 14657495,
        t.x = 105,
        t.y = 555,
        t
    },
    n._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img4_png",
        t.visible = !0,
        t.x = 1,
        t.y = 114,
        t
    },
    n.btnBuyBall_i = function() {
        var t = new eui.Image;
        return this.btnBuyBall = t,
        t.source = "god_of_dream_main_panel_btnbuyball_png",
        t.x = 94,
        t.y = 255,
        t
    },
    n.txtBall_i = function() {
        var t = new eui.Label;
        return this.txtBall = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "9",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 43,
        t.x = 140,
        t.y = 226,
        t
    },
    n._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img3_png",
        t.x = 221,
        t.y = 39,
        t
    },
    n._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img2_png",
        t.x = 864,
        t.y = 0,
        t
    },
    n.txtShowTime_i = function() {
        var t = new eui.Label;
        return this.txtShowTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "0/8",
        t.textColor = 14657495,
        t.x = 1017,
        t.y = .652,
        t
    },
    n.btnAddShowTime_i = function() {
        var t = new eui.Image;
        return this.btnAddShowTime = t,
        t.source = "god_of_dream_main_panel_btnaddshowtime_png",
        t.x = 1058,
        t.y = 1,
        t
    },
    n.btnOneKeyBuy_i = function() {
        var t = new eui.Image;
        return this.btnOneKeyBuy = t,
        t.source = "god_of_dream_good_buy_it_png",
        t.x = 911.924,
        t.y = 48.596,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image20_i(), this.btnClose_i()],
        t
    },
    n._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_main_panel_img1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_main_panel_btnclose_png",
        t.x = 17,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/GodOfDreamUnrealPopSkin.exml"] = window.GodOfDreamUnrealPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btn1", "btn2", "btn3", "btnFastShow", "btnPet", "btnCure", "btnClose", "imgPet1", "imgPet2", "imgPet3"],
        this.height = 384,
        this.width = 760,
        this.elementsContent = [this._Image1_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btnFastShow_i(), this.btnPet_i(), this.btnCure_i(), this.btnClose_i(), this.imgPet1_i(), this.imgPet2_i(), this.imgPet3_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "god_of_dream_unreal_pop_hmzq_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btn1_i = function() {
        var t = new eui.Image;
        return this.btn1 = t,
        t.source = "god_of_dream_unreal_pop_btn1_png",
        t.x = 269,
        t.y = 318,
        t
    },
    n.btn2_i = function() {
        var t = new eui.Image;
        return this.btn2 = t,
        t.source = "god_of_dream_unreal_pop_btn1_png",
        t.x = 427,
        t.y = 318,
        t
    },
    n.btn3_i = function() {
        var t = new eui.Image;
        return this.btn3 = t,
        t.source = "god_of_dream_unreal_pop_btn1_png",
        t.x = 586,
        t.y = 318,
        t
    },
    n.btnFastShow_i = function() {
        var t = new eui.Image;
        return this.btnFastShow = t,
        t.source = "god_of_dream_unreal_pop_btnfastshow_png",
        t.x = 99,
        t.y = 320,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "god_of_dream_good_pop2_btnpet_png",
        t.x = 13,
        t.y = 150,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "god_of_dream_good_pop2_btncure_png",
        t.x = 13,
        t.y = 224,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "god_of_dream_good_pop1_btnclose_png",
        t.x = 717,
        t.y = 10,
        t
    },
    n.imgPet1_i = function() {
        var t = new eui.Image;
        return this.imgPet1 = t,
        t.source = "god_of_dream_all_pop_imgpet1_png",
        t.visible = !1,
        t.x = 92,
        t.y = 108,
        t
    },
    n.imgPet2_i = function() {
        var t = new eui.Image;
        return this.imgPet2 = t,
        t.source = "god_of_dream_all_pop_imgpet2_png",
        t.visible = !1,
        t.x = 92,
        t.y = 108,
        t
    },
    n.imgPet3_i = function() {
        var t = new eui.Image;
        return this.imgPet3 = t,
        t.source = "god_of_dream_all_pop_imgpet3_png",
        t.visible = !1,
        t.x = 92,
        t.y = 108,
        t
    },
    e
} (eui.Skin);