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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([], [t.Christmas2022Const.daily_bossID, t.Christmas2022Const.daily_giftState, t.Christmas2022Const.daily_mapbox, t.Christmas2022Const.daily_mapboxState, t.Christmas2022Const.daily_moodNum, t.Christmas2022Const.daily_rewardMax, t.Christmas2022Const.daily_rewardState, t.Christmas2022Const.daily_stateTime]),
            i.init([{
                panelName: t.Christmas2022Const.CHRIS_PANEL1,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i.prototype.openRBPanel = function(e) {
            this.service.openPanel(t.Christmas2022Const.CHRIS_PANELS[e - 1])
        },
        i
    } (BasicMultPanelModule);
    t.Christmas2022 = e,
    __reflect(e.prototype, "christmas2022.Christmas2022")
} (christmas2022 || (christmas2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
christmas2022; !
function(t) {
    var e = function() {
        function t() {}
        return t.CHRIS_PANEL1 = "christmas2022.ChrisPanel1",
        t.CHRIS_PANEL2 = "193",
        t.CHRIS_PANEL3 = "195",
        t.CHRIS_PANEL4 = "",
        t.CHRIS_PANELS = [t.CHRIS_PANEL1, t.CHRIS_PANEL2, t.CHRIS_PANEL3, t.CHRIS_PANEL4],
        t.Panel1ConstCMD = 43306,
        t.daily_giftState = 10579,
        t.daily_stateTime = 10580,
        t.daily_moodNum = 10581,
        t.daily_mapbox = 10582,
        t.daily_mapboxState = 10583,
        t.daily_bossID = 10584,
        t.daily_rewardState = 10585,
        t.daily_rewardMax = 10586,
        t
    } ();
    t.Christmas2022Const = e,
    __reflect(e.prototype, "christmas2022.Christmas2022Const")
} (christmas2022 || (christmas2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
christmas2022; !
function(t) {
    var e = function() {
        function e() {}
        return e.GetInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.init = function() {
            this.friendPanel || (this.friendPanel = new t.ChrisMapPanel, LevelManager.appLevel.addChild(this.friendPanel), this.friendPanel.hide())
        },
        e.prototype.hideMap = function() {
            this.friendPanel.hide()
        },
        e.prototype.destroy = function() {
            this.friendPanel.destroy(),
            this.friendPanel = null,
            e._instance = null
        },
        e._instance = null,
        e
    } ();
    t.ChristmasDataMnager = e,
    __reflect(e.prototype, "christmas2022.ChristmasDataMnager")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.curMapId = 0,
            t._pretime = 0,
            t._alltime = 0,
            t.skinName = Christmas2022MapSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvent()
        },
        i.prototype.setData = function(e) {
            var i = this;
            this.curMapId = e;
            for (var n = 1; 6 >= n; n++) this["map" + n].visible = e == n;
            var o = new Date;
            this._pretime = o.getTime(),
            this.stateTimer = new egret.Timer(6e4),
            this.stateTimer.addEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this),
            this.stateTimer.start(),
            SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [3, this.curMapId],
            function() {
                i.update()
            })
        },
        i.prototype.onStatusTimer = function(e) {
            var i = this,
            n = new Date,
            o = n.getTime(),
            r = o - this._pretime;
            this._alltime += r,
            this._alltime >= 6e4 && (this._alltime = 0, SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [6, 5],
            function() {
                i.update()
            }))
        },
        i.prototype.initData = function() {},
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp2,
            function() {
                tipsPop.TipsPop.openHelpPopById(122)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                t.ChristmasDataMnager.GetInstance().hideMap();
                var e = new t.PopCheckPlace;
                PopViewManager.getInstance().openView(e)
            },
            this);
            for (var i = 1; 6 >= i; i++) for (var n = function(t) {
                ImageButtonUtil.add(o["gift_" + i + t],
                function() {
                    e.checkState(t)
                },
                o)
            },
            o = this, r = 1; 5 >= r; r++) n(r);
            ImageButtonUtil.add(this.btnXun,
            function() {
                var e = new t.PopComfort;
                PopViewManager.getInstance().openView(e)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightover, this),
            EventManager.addEventListener("moodChange", this.update, this),
            EventManager.addEventListener("checkNull", this.checkNull, this)
        },
        i.prototype.checkNull = function() {
            var e = this;
            KTool.getMultiValue([t.Christmas2022Const.daily_mapboxState, t.Christmas2022Const.daily_mapbox],
            function(i) {
                var n = i[1] >> 4 * (e.curMapId - 1) & 15;
                e.curBoxNum = 0;
                for (var o = 1; n >= o; o++) 0 == KTool.getBit(i[0], 5 * (e.curMapId - 1) + o) && (e.curBoxNum += 1);
                0 == e.curBoxNum && Alarm.show("这里看起来已经没有礼包了，还是先去别的地方再看看吧，明天再重新来这里查看。",
                function() {
                    t.ChristmasDataMnager.GetInstance().hideMap();
                    var e = new t.PopCheckPlace;
                    PopViewManager.getInstance().openView(e)
                })
            })
        },
        i.prototype.onFightover = function() {
            var e = this;
            FightManager.isWin ? (AwardManager.CustomItemDialog(new t.PopGift), KTool.getPlayerInfo([925],
            function(i) {
                if (console.log(i[0]), 3 == i[0]) {
                    var n = new t.PopGift;
                    e.showDialog(n, null)
                } else(4 == i[0] || 0 == i[0]) && Alarm.show("一个空礼盒，什么都没有。",
                function() {
                    0 == e.curBoxNum && Alarm.show("这里看起来已经没有礼包了，还是先去别的地方再看看吧，明天再重新来这里查看。",
                    function() {
                        t.ChristmasDataMnager.GetInstance().hideMap();
                        var e = new t.PopCheckPlace;
                        PopViewManager.getInstance().openView(e)
                    })
                })
            })) : Alarm.show("战斗失败，什么也没得到！",
            function() {
                0 == e.curBoxNum && Alarm.show("这里看起来已经没有礼包了，还是先去别的地方再看看吧，明天再重新来这里查看。",
                function() {
                    t.ChristmasDataMnager.GetInstance().hideMap();
                    var e = new t.PopCheckPlace;
                    PopViewManager.getInstance().openView(e)
                })
            }),
            this.update()
        },
        i.prototype.showDialog = function(t, e) {
            t.anchorOffsetX = t.width / 2,
            t.anchorOffsetY = t.height / 2,
            t.x = LevelManager.stage.stageWidth / 2,
            t.y = LevelManager.stage.stageHeight / 2,
            LevelManager.topLevel.addChild(t),
            t.scaleX = t.scaleY = 0,
            LevelManager.stage.touchChildren = !1,
            t.scaleX = t.scaleY = .5,
            egret.Tween.get(t).to({
                scaleX: 1,
                scaleY: 1
            },
            200, egret.Ease.getBackOut(1)).call(function() {
                LevelManager.stage.touchChildren = !0,
                t.showItems(e)
            })
        },
        i.prototype.checkState = function(e) {
            var i = this;
            if (this.moodNum < 60) return void Alarm.show("麋鹿的心情糟糕透了，无法继续打开礼物了！");
            if (this.moodNum >= 150 && 2 != this.moodState) SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [4, e],
            function() {
                KTool.getPlayerInfo([925],
                function(e) {
                    if (i.update(), console.log(e[0]), 3 == e[0]) {
                        var n = new t.PopGift;
                        i.showDialog(n, null)
                    } else if (4 == e[0] || 0 == e[0]) Alarm.show("一个空礼盒，什么都没有。",
                    function() {
                        if (0 == i.curBoxNum) {
                            t.ChristmasDataMnager.GetInstance().hideMap();
                            var e = new t.PopCheckPlace;
                            PopViewManager.getInstance().openView(e)
                        }
                    });
                    else if (AwardManager.CustomItemDialog(new t.PopGift), 0 == i.curBoxNum) {
                        t.ChristmasDataMnager.GetInstance().hideMap();
                        var o = new t.PopCheckPlace;
                        PopViewManager.getInstance().openView(o)
                    }
                })
            });
            else {
                if (2 == this.moodState) return void Alarm.show("麋鹿因生病十分虚弱，无法继续打开礼物了，请先安抚麋鹿再继续操作！");
                SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [4, e],
                function() {
                    KTool.getMultiValue([t.Christmas2022Const.daily_bossID],
                    function(e) {
                        if (0 != e[0]) {
                            var i = new t.PopBoss(e[0]),
                            n = PopViewManager.createDefaultStyleObject();
                            n.ignoreMaskClick = !0,
                            PopViewManager.getInstance().openView(i, n)
                        }
                    })
                })
            }
        },
        i.prototype.show = function() {
            e.prototype.show.call(this);
            for (var t = 1; 6 >= t; t++) this["bg" + t].width = egret.lifecycle.stage.stageWidth;
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            0 != this.curMapId && KTool.getMultiValue([t.Christmas2022Const.daily_mapboxState, t.Christmas2022Const.daily_moodNum, t.Christmas2022Const.daily_giftState, t.Christmas2022Const.daily_mapbox],
            function(t) {
                var i = t[3] >> 4 * (e.curMapId - 1) & 15;
                e.curBoxNum = 0;
                for (var n = 1; 5 >= n; n++) e["gift_" + e.curMapId + n].visible = i >= n;
                for (var o = 1; i >= o; o++) e["gift_" + e.curMapId + o].visible = 0 == KTool.getBit(t[0], 5 * (e.curMapId - 1) + o),
                e["gift_" + e.curMapId + o].visible && (e.curBoxNum += 1);
                e.moodNum = t[1];
                var r = t[2];
                e.moodState = r >> 8 & 15,
                e.txt_mood.text = "心情值：" + e.moodNum,
                e.moodNum >= 60 && e.moodNum < 75 ? e.state1.source = "christmas2022_gift_mood1_png": e.moodNum >= 75 && e.moodNum < 110 ? e.state1.source = "christmas2022_gift_mood2_png": e.moodNum >= 110 && e.moodNum <= 150 ? e.state1.source = "christmas2022_gift_mood3_png": e.moodNum > 150 ? e.state1.source = "christmas2022_gift_mood4_png": e.state1.source = "christmas2022_gift_mood0_png",
                e.state2.visible = 0 != e.moodState,
                1 == e.moodState ? e.state2.source = "christmas2022_gift_state1_png": 2 == e.moodState && (e.state2.source = "christmas2022_gift_state2_png")
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this),
            null != this.stateTimer && (this.stateTimer.stop(), this.stateTimer.removeEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this), this.stateTimer = null)
        },
        i
    } (BaseModule);
    t.ChrisMapPanel = e,
    __reflect(e.prototype, "christmas2022.ChrisMapPanel")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._pretime = 0,
            t._alltime = 0,
            t.skinName = Christmas2022GiftSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvent()
        },
        i.prototype.initData = function() {
            var e = this;
            t.ChristmasDataMnager.GetInstance().init();
            var i = new Date;
            this._pretime = i.getTime(),
            this.stateTimer = new egret.Timer(6e4),
            this.stateTimer.addEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this),
            this.stateTimer.start();
            var n = this.service.getValue(t.Christmas2022Const.daily_giftState),
            o = 1 == KTool.getBit(n, 8);
            o || SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [3, 0],
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            }),
            console.log(n)
        },
        i.prototype.onStatusTimer = function(e) {
            var i = this,
            n = new Date,
            o = n.getTime(),
            r = o - this._pretime;
            this._alltime += r,
            this._alltime >= 6e4 && (this._alltime = 0, SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [6, 5],
            function() {
                i.service.updateValues().then(function() {
                    console.log("状态变化"),
                    i.update()
                })
            }))
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnHelp1,
            function() {
                tipsPop.TipsPop.openHelpPopById(121)
            },
            this),
            ImageButtonUtil.add(this.btnHelp2,
            function() {
                tipsPop.TipsPop.openHelpPopById(122)
            },
            this),
            ImageButtonUtil.add(this.btnComfort,
            function() {
                var e = new t.PopComfort;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnFindGift,
            function() {
                var e = new t.PopCheckPlace;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnReward,
            function() {
                var e = new t.PopReward;
                PopViewManager.getInstance().openView(e)
            },
            this),
            EventManager.addEventListener("moodChange",
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.update = function() {
            var e = this.service.getValue(t.Christmas2022Const.daily_moodNum),
            i = this.service.getValue(t.Christmas2022Const.daily_giftState),
            n = i >> 8 & 15;
            this.txt_mood.text = "心情值：" + e,
            e >= 60 && 75 > e ? this.state1.source = "christmas2022_gift_mood1_png": e >= 75 && 110 > e ? this.state1.source = "christmas2022_gift_mood2_png": e >= 110 && 150 >= e ? this.state1.source = "christmas2022_gift_mood3_png": e > 150 ? this.state1.source = "christmas2022_gift_mood4_png": this.state1.source = "christmas2022_gift_mood0_png",
            this.state2.visible = 0 != n,
            1 == n ? this.state2.source = "christmas2022_gift_state1_png": 2 == n && (this.state2.source = "christmas2022_gift_state2_png")
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            null != this.stateTimer && (this.stateTimer.stop(), this.stateTimer.removeEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this), this.stateTimer = null),
            t.ChristmasDataMnager.GetInstance().destroy()
        },
        i
    } (BasicPanel);
    t.ChrisPanel1 = e,
    __reflect(e.prototype, "christmas2022.ChrisPanel1")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.boosIndex = 0,
            n.bossesId = [14896, 14897, 14898, 14899, 14900, 14901, 14902],
            n.skinName = t.BossSkin,
            n.boosIndex = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        i.prototype.initialized = function() {
            this.imgBoss.source = "c2022__boss_" + this.boosIndex + "_png"
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(e.bossesId[e.boosIndex - 1]),
                e.hide(),
                EventManager.dispatchEventWith("moodChange")
            },
            this),
            ImageButtonUtil.add(this.btnGiveup,
            function() {
                e.hide(),
                SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [4, 6],
                function() {
                    t.ChristmasDataMnager.GetInstance().friendPanel.show(),
                    EventManager.dispatchEventWith("checkNull")
                })
            },
            this)
        },
        i
    } (PopView);
    t.PopBoss = e,
    __reflect(e.prototype, "christmas2022.PopBoss")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CheckSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide(),
                EventManager.dispatchEventWith("moodChange")
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnGo" + i],
                function() {
                    e.hide(),
                    t.ChristmasDataMnager.GetInstance().friendPanel.setData(i),
                    t.ChristmasDataMnager.GetInstance().friendPanel.show()
                },
                n)
            },
            n = this, o = 1; 6 >= o; o++) i(o)
        },
        i.prototype.initialized = function() {
            var e = this;
            KTool.getMultiValue([t.Christmas2022Const.daily_mapboxState, t.Christmas2022Const.daily_mapbox],
            function(t) {
                for (var i = 1; 6 >= i; i++) {
                    for (var n = !0,
                    o = t[1] >> 4 * (i - 1) & 15, r = 0 == o ? 5 : o, s = 1; r >= s; s++) if (0 == KTool.getBit(t[0], 5 * (i - 1) + s)) {
                        n = !1;
                        break
                    }
                    e["tommorow" + i].visible = n,
                    e["btnGo" + i].visible = !n
                }
            })
        },
        i
    } (PopView);
    t.PopCheckPlace = e,
    __reflect(e.prototype, "christmas2022.PopCheckPlace")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemsId = [1718873, 1718874, 1718875, 1718876],
            i.productsId = [255097, 255098, 255099, 255100],
            i.skinName = t.ComfortSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.update()
        },
        i.prototype.initialized = function() {},
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(122)
            },
            this);
            for (var e = function(e) {
                i["icon" + e].source = ClientConfig.getItemIcon(i.itemsId[e - 1]),
                i["txtNum" + e].text = ItemManager.getNumByID(i.itemsId[e - 1]),
                ImageButtonUtil.add(i["btnadd" + e],
                function() {
                    PayManager.doPayFunc(function() {
                        var i = {};
                        i.type = "product_diamond",
                        i.ins = {
                            iconID: t.itemsId[e - 1],
                            productID: t.productsId[e - 1]
                        },
                        i.caller = t,
                        i.callBack = function(i, n) {
                            KTool.buyProductByCallback(t.productsId[e - 1], n,
                            function() {
                                KTool.doExchange(12227 + e, n,
                                function() {
                                    t.update()
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, i)
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["icon" + e],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t.itemsId[e - 1]
                    })
                },
                i),
                ImageButtonUtil.add(i["btnUse" + e],
                function() {
                    t.itemUse(e)
                },
                i)
            },
            i = this, n = 1; 4 >= n; n++) e(n);
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.itemUse = function(e) {
            var i = this,
            n = ItemManager.getNumByID(this.itemsId[e - 1]);
            if (0 >= n) return void BubblerManager.getInstance().showText("很抱歉你的道具数量不足！");
            switch (e) {
            case 1:
                2 != this.moodState ? Alert.show("麋鹿并未生病，是否继续使用该道具？",
                function() {
                    i.use(e)
                }) : this.use(e);
                break;
            case 2:
                1 != this.moodState ? Alert.show("麋鹿并未饥饿，是否继续使用该道具？",
                function() {
                    i.use(e)
                }) : this.use(e);
                break;
            case 3:
                this.use(e);
                break;
            case 4:
                SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [6, e],
                function(t) {
                    var e = t.data,
                    n = e.readUnsignedInt(),
                    o = "";
                    switch (n) {
                    case 1:
                        o = "虽然不知道是什么东西，但是味道太棒了，麋鹿心情增加20！";
                        break;
                    case 2:
                        o = "这个东西实在难以下咽，因为味道太差，导致麋鹿连昨晚的东西都吐了出来，他现在很饿。";
                        break;
                    case 3:
                        o = "这似乎是些不新鲜的东西，麋鹿吃了以后疯狂地拉肚子，现在已经病了。";
                        break;
                    case 4:
                        o = "这难道是传说中的无敌大补丸？麋鹿现在很兴奋！";
                        break;
                    case 5:
                        o = "目测只是普通的食物，没什么特别的。";
                        break;
                    case 6:
                        o = "不知道是不是食物的问题，麋鹿开始怀疑它的鹿生了，心情值瞬减10！"
                    }
                    Alarm.show(o,
                    function() {
                        EventManager.dispatchEventWith("moodChange"),
                        i.update()
                    })
                })
            }
        },
        i.prototype.use = function(e) {
            var i = this;
            SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [6, e],
            function() {
                EventManager.dispatchEventWith("moodChange"),
                BubblerManager.getInstance().showText("使用成功！"),
                i.update()
            })
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([t.Christmas2022Const.daily_giftState, t.Christmas2022Const.daily_moodNum],
            function(t) {
                var i = t[0];
                e.moodState = i >> 8 & 15;
                var n = t[1];
                e.txt_mood.text = "心情值：" + n;
                for (var o = 1; 4 >= o; o++) e["txtNum" + o].text = ItemManager.getNumByID(e.itemsId[o - 1]);
                n >= 60 && 75 > n ? e.state1.source = "christmas2022_gift_mood1_png": n >= 75 && 110 > n ? e.state1.source = "christmas2022_gift_mood2_png": n >= 110 && 150 >= n ? e.state1.source = "christmas2022_gift_mood3_png": n > 150 ? e.state1.source = "christmas2022_gift_mood4_png": e.state1.source = "christmas2022_gift_mood0_png",
                e.state2.visible = 0 != e.moodState,
                1 == e.moodState ? e.state2.source = "christmas2022_gift_state1_png": 2 == e.moodState && (e.state2.source = "christmas2022_gift_state2_png")
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PopComfort = e,
    __reflect(e.prototype, "christmas2022.PopComfort")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PopgiftSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            KTool.getMultiValue([t.Christmas2022Const.daily_rewardState, t.Christmas2022Const.daily_giftState, t.Christmas2022Const.daily_bossID],
            function(t) {
                i.m_Index = t[0],
                i.MapState = t[1],
                i.m_bossIndex = t[2],
                i.m_curMap = i.MapState >> 12 & 15
            }),
            ImageButtonUtil.add(this.btnComfirm,
            function() {
                1 == KTool.getBit(i.MapState, i.m_curMap) && 0 == i.m_bossIndex && Alarm.show("这里看起来已经没有礼包了，还是先去别的地方再看看吧，明天再重新来这里查看。",
                function() {
                    i.destroy(),
                    t.ChristmasDataMnager.GetInstance().hideMap();
                    var e = new t.PopCheckPlace;
                    PopViewManager.getInstance().openView(e)
                }),
                1 == KTool.getBit(i.m_Index, 1) ? SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [5, 1],
                function() {
                    t.ChristmasDataMnager.GetInstance().friendPanel.show(),
                    i.destroy()
                }) : 1 == KTool.getBit(i.m_Index, 2) ? SocketConnection.sendByQueue(t.Christmas2022Const.Panel1ConstCMD, [5, 2],
                function() {
                    t.ChristmasDataMnager.GetInstance().friendPanel.show(),
                    i.destroy()
                }) : (t.ChristmasDataMnager.GetInstance().friendPanel.show(), i.destroy())
            },
            this)
        },
        i.prototype.showItems = function(t) {
            this.items = t,
            1 == KTool.getBit(this.m_Index, 1) || 1 == KTool.getBit(this.m_Index, 2) ? (this.icon.source = ClientConfig.getItemIcon(1724950), this.txt_Intro.text = "似乎包含了一些与麋鹿有关的东西") : (this.icon.source = ClientConfig.getItemIcon(this.items[0].id), this.txt_Intro.text = ItemXMLInfo.getName(this.items[0].id) + "x" + this.items[0].count)
        },
        i
    } (AwardBaseDialog);
    t.PopGift = e,
    __reflect(e.prototype, "christmas2022.PopGift")
} (christmas2022 || (christmas2022 = {}));
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
christmas2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.rewardsId = [300066, 2500001, 2500004, 400063, 300404, 300405, 300063, 300065, 1718868, 1724950],
            i.skinName = t.RewardSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this);
            for (var i = function(e) {
                n["icon" + e].source = ClientConfig.getItemIcon(n.rewardsId[e]),
                n["iconName" + e].text = ItemXMLInfo.getName(n.rewardsId[e]),
                ImageButtonUtil.add(n["icon" + e],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t.rewardsId[e]
                    })
                },
                n),
                ImageButtonUtil.add(n.btnClose, n.hide, n)
            },
            n = this, o = 0; o < this.rewardsId.length; o++) i(o)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PopReward = e,
    __reflect(e.prototype, "christmas2022.PopReward")
} (christmas2022 || (christmas2022 = {})),
window.christmas2022 = window.christmas2022 || {};
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
generateEUI.paths["resource/eui_skins/Christmas2022GiftSkin.exml"] = window.Christmas2022GiftSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnFindGift", "btnComfort", "btnReward", "btnHelp1", "btnHelp2", "state2", "state1", "txt_mood", "content"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "christmas2022_gift_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.horizontalCenter = 169,
        t.width = 820,
        t.y = 58,
        t.elementsContent = [this.btnFindGift_i(), this.btnComfort_i(), this.btnReward_i(), this.btnHelp1_i(), this._Group1_i()],
        t
    },
    i.btnFindGift_i = function() {
        var t = new eui.Image;
        return this.btnFindGift = t,
        t.source = "christmas2022_gift_btnfindgift_png",
        t.x = 0,
        t.y = 475,
        t
    },
    i.btnComfort_i = function() {
        var t = new eui.Image;
        return this.btnComfort = t,
        t.source = "christmas2022_gift_btncomfort_png",
        t.x = 445,
        t.y = 475,
        t
    },
    i.btnReward_i = function() {
        var t = new eui.Image;
        return this.btnReward = t,
        t.source = "christmas2022_gift_btnreward_png",
        t.x = 703,
        t.y = 384,
        t
    },
    i.btnHelp1_i = function() {
        var t = new eui.Image;
        return this.btnHelp1 = t,
        t.source = "christmas2022_gift_btmhelp1_png",
        t.x = 27,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 430,
        t.y = 87,
        t.elementsContent = [this.btnHelp2_i(), this._Image1_i(), this.state2_i(), this.state1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_mood_i()],
        t
    },
    i.btnHelp2_i = function() {
        var t = new eui.Image;
        return this.btnHelp2 = t,
        t.source = "christmas2022_gift_btmhelp2_png",
        t.x = 215,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_dqzt_png",
        t.x = 0,
        t.y = 3,
        t
    },
    i.state2_i = function() {
        var t = new eui.Image;
        return this.state2 = t,
        t.source = "christmas2022_gift_mood1_png",
        t.x = 153,
        t.y = 3,
        t
    },
    i.state1_i = function() {
        var t = new eui.Image;
        return this.state1 = t,
        t.source = "christmas2022_gift_state1_png",
        t.x = 98,
        t.y = 3,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_kuang_png",
        t.x = 6,
        t.y = 28,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_png",
        t.x = 36,
        t.y = 50,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_kb_png",
        t.x = 42,
        t.y = 54,
        t
    },
    i.txt_mood_i = function() {
        var t = new eui.Label;
        return this.txt_mood = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "心情值：99999999",
        t.textColor = 6022911,
        t.x = 56,
        t.y = 46,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Christmas2022MapSkin.exml"] = window.Christmas2022MapSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg5", "gift_51", "gift_52", "gift_53", "gift_54", "gift_55", "map5", "bg4", "gift_41", "gift_42", "gift_43", "gift_44", "gift_45", "map4", "bg6", "gift_61", "gift_62", "gift_63", "gift_64", "gift_65", "map6", "bg3", "gift_31", "gift_32", "gift_33", "gift_34", "gift_35", "map3", "bg2", "gift_21", "gift_22", "gift_23", "gift_24", "gift_25", "map2", "bg1", "gift_11", "gift_12", "gift_13", "gift_14", "gift_15", "map1", "btnGo", "juxing_3", "btnBag", "btnXun", "btnCure", "btnHelp2", "state2", "state1", "txt_mood", "state", "content"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.map5_i(), this.map4_i(), this.map6_i(), this.map3_i(), this.map2_i(), this.map1_i(), this._Group7_i(), this.btnGo_i(), this.state_i()],
        t
    },
    i.map5_i = function() {
        var t = new eui.Group;
        return this.map5 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg5_i(), this._Group1_i()],
        t
    },
    i.bg5_i = function() {
        var t = new eui.Image;
        return this.bg5 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg4_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 320,
        t.horizontalCenter = 205,
        t.width = 700,
        t.y = 334,
        t.elementsContent = [this.gift_51_i(), this.gift_52_i(), this.gift_53_i(), this.gift_54_i(), this.gift_55_i()],
        t
    },
    i.gift_51_i = function() {
        var t = new eui.Image;
        return this.gift_51 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 212,
        t.y = 123,
        t
    },
    i.gift_52_i = function() {
        var t = new eui.Image;
        return this.gift_52 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 322,
        t.y = 0,
        t
    },
    i.gift_53_i = function() {
        var t = new eui.Image;
        return this.gift_53 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 566,
        t.y = 15,
        t
    },
    i.gift_54_i = function() {
        var t = new eui.Image;
        return this.gift_54 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 388,
        t.y = 178,
        t
    },
    i.gift_55_i = function() {
        var t = new eui.Image;
        return this.gift_55 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 160,
        t
    },
    i.map4_i = function() {
        var t = new eui.Group;
        return this.map4 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg4_i(), this._Group2_i()],
        t
    },
    i.bg4_i = function() {
        var t = new eui.Image;
        return this.bg4 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg5_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 20,
        t.width = 900,
        t.y = 214,
        t.elementsContent = [this.gift_41_i(), this.gift_42_i(), this.gift_43_i(), this.gift_44_i(), this.gift_45_i()],
        t
    },
    i.gift_41_i = function() {
        var t = new eui.Image;
        return this.gift_41 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 117,
        t.y = 0,
        t
    },
    i.gift_42_i = function() {
        var t = new eui.Image;
        return this.gift_42 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 478,
        t.y = 8,
        t
    },
    i.gift_43_i = function() {
        var t = new eui.Image;
        return this.gift_43 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 753,
        t.y = 37,
        t
    },
    i.gift_44_i = function() {
        var t = new eui.Image;
        return this.gift_44 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 391,
        t.y = 207,
        t
    },
    i.gift_45_i = function() {
        var t = new eui.Image;
        return this.gift_45 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 195,
        t
    },
    i.map6_i = function() {
        var t = new eui.Group;
        return this.map6 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg6_i(), this._Group3_i()],
        t
    },
    i.bg6_i = function() {
        var t = new eui.Image;
        return this.bg6 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg3_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -51,
        t.width = 800,
        t.y = 180,
        t.elementsContent = [this.gift_61_i(), this.gift_62_i(), this.gift_63_i(), this.gift_64_i(), this.gift_65_i()],
        t
    },
    i.gift_61_i = function() {
        var t = new eui.Image;
        return this.gift_61 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 238,
        t.y = 12,
        t
    },
    i.gift_62_i = function() {
        var t = new eui.Image;
        return this.gift_62 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 476,
        t.y = 0,
        t
    },
    i.gift_63_i = function() {
        var t = new eui.Image;
        return this.gift_63 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 658,
        t.y = 175,
        t
    },
    i.gift_64_i = function() {
        var t = new eui.Image;
        return this.gift_64 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 384,
        t.y = 322,
        t
    },
    i.gift_65_i = function() {
        var t = new eui.Image;
        return this.gift_65 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 149,
        t
    },
    i.map3_i = function() {
        var t = new eui.Group;
        return this.map3 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg3_i(), this._Group4_i()],
        t
    },
    i.bg3_i = function() {
        var t = new eui.Image;
        return this.bg3 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg6_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 19,
        t.width = 850,
        t.y = 101,
        t.elementsContent = [this.gift_31_i(), this.gift_32_i(), this.gift_33_i(), this.gift_34_i(), this.gift_35_i()],
        t
    },
    i.gift_31_i = function() {
        var t = new eui.Image;
        return this.gift_31 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 351,
        t.y = 284,
        t
    },
    i.gift_32_i = function() {
        var t = new eui.Image;
        return this.gift_32 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 514,
        t.y = 0,
        t
    },
    i.gift_33_i = function() {
        var t = new eui.Image;
        return this.gift_33 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 687,
        t.y = 292,
        t
    },
    i.gift_34_i = function() {
        var t = new eui.Image;
        return this.gift_34 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 557,
        t.y = 407,
        t
    },
    i.gift_35_i = function() {
        var t = new eui.Image;
        return this.gift_35 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 266,
        t
    },
    i.map2_i = function() {
        var t = new eui.Group;
        return this.map2 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg2_i(), this._Group5_i()],
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg2_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.width = 950,
        t.x = 192,
        t.y = 256,
        t.elementsContent = [this.gift_21_i(), this.gift_22_i(), this.gift_23_i(), this.gift_24_i(), this.gift_25_i()],
        t
    },
    i.gift_21_i = function() {
        var t = new eui.Image;
        return this.gift_21 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 104,
        t.y = 175,
        t
    },
    i.gift_22_i = function() {
        var t = new eui.Image;
        return this.gift_22 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 764,
        t.y = 190,
        t
    },
    i.gift_23_i = function() {
        var t = new eui.Image;
        return this.gift_23 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 808,
        t.y = 18,
        t
    },
    i.gift_24_i = function() {
        var t = new eui.Image;
        return this.gift_24 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 419,
        t.y = 45,
        t
    },
    i.gift_25_i = function() {
        var t = new eui.Image;
        return this.gift_25 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.map1_i = function() {
        var t = new eui.Group;
        return this.map1 = t,
        t.percentHeight = 100,
        t.visible = !1,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg1_i(), this._Group6_i()],
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.percentHeight = 100,
        t.source = "christmas2022_map_bg1_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 660,
        t.y = 222,
        t.elementsContent = [this.gift_11_i(), this.gift_12_i(), this.gift_13_i(), this.gift_14_i(), this.gift_15_i()],
        t
    },
    i.gift_11_i = function() {
        var t = new eui.Image;
        return this.gift_11 = t,
        t.source = "christmas2022_map_tuceng_11_png",
        t.x = 135,
        t.y = 28,
        t
    },
    i.gift_12_i = function() {
        var t = new eui.Image;
        return this.gift_12 = t,
        t.source = "christmas2022_map_tuceng_12_png",
        t.x = 378,
        t.y = 0,
        t
    },
    i.gift_13_i = function() {
        var t = new eui.Image;
        return this.gift_13 = t,
        t.source = "christmas2022_map_tuceng_13_png",
        t.x = 515,
        t.y = 115,
        t
    },
    i.gift_14_i = function() {
        var t = new eui.Image;
        return this.gift_14 = t,
        t.source = "christmas2022_map_tuceng_14_png",
        t.x = 370,
        t.y = 274,
        t
    },
    i.gift_15_i = function() {
        var t = new eui.Image;
        return this.gift_15 = t,
        t.source = "christmas2022_map_tuceng_15_png",
        t.x = 0,
        t.y = 176,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -4,
        t.y = 57,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_map_juxing_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "记得随时检查麋鹿比森的状态哦！它的状态将会影响礼物的质量哦！",
        t.textColor = 6022911,
        t.x = 210,
        t.y = 11,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.right = 79,
        t.source = "christmas2022_map_btngo_png",
        t.y = 570,
        t
    },
    i.state_i = function() {
        var t = new eui.Group;
        return this.state = t,
        t.touchThrough = !0,
        t.visible = !0,
        t.x = 54,
        t.y = 320,
        t.elementsContent = [this.juxing_3_i(), this.btnBag_i(), this._Image2_i(), this.btnXun_i(), this.btnCure_i(), this._Group9_i()],
        t
    },
    i.juxing_3_i = function() {
        var t = new eui.Image;
        return this.juxing_3 = t,
        t.height = 313,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "c2022_juxing_3_png",
        t.width = 91,
        t.x = 18,
        t.y = -62.00000000000006,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "christmas2022_map_btnbag_png",
        t.x = 27,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_map_juxing_1_png",
        t.visible = !0,
        t.x = 104,
        t.y = 207,
        t
    },
    i.btnXun_i = function() {
        var t = new eui.Image;
        return this.btnXun = t,
        t.source = "christmas2022_map_liubian_png",
        t.visible = !0,
        t.x = 0,
        t.y = 171,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "christmas2022_map_btncure_png",
        t.x = 27,
        t.y = 89,
        t
    },
    i._Group9_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 133,
        t.y = 211,
        t.elementsContent = [this.btnHelp2_i(), this._Image3_i(), this.state2_i(), this.state1_i(), this._Group8_i()],
        t
    },
    i.btnHelp2_i = function() {
        var t = new eui.Image;
        return this.btnHelp2 = t,
        t.source = "christmas2022_gift_btmhelp2_png",
        t.x = 215,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_dqzt_png",
        t.x = 0,
        t.y = 3,
        t
    },
    i.state2_i = function() {
        var t = new eui.Image;
        return this.state2 = t,
        t.source = "christmas2022_gift_mood1_png",
        t.x = 153,
        t.y = 3,
        t
    },
    i.state1_i = function() {
        var t = new eui.Image;
        return this.state1 = t,
        t.source = "christmas2022_gift_state1_png",
        t.x = 98,
        t.y = 3,
        t
    },
    i._Group8_i = function() {
        var t = new eui.Group;
        return t.x = 1,
        t.y = 46,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.txt_mood_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_png",
        t.x = 0,
        t.y = 4,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_kb_png",
        t.x = 6,
        t.y = 8,
        t
    },
    i.txt_mood_i = function() {
        var t = new eui.Label;
        return this.txt_mood = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "心情值：99999999",
        t.textColor = 6022911,
        t.x = 20,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pop/BossSkin.exml"] = window.christmas2022.BossSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnFight", "btnGiveup", "imgBoss", "boss"],
        this.height = 428,
        this.width = 381,
        this.elementsContent = [this.boss_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.boss_i = function() {
        var t = new eui.Group;
        return this.boss = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnFight_i(), this.btnGiveup_i(), this._Image3_i(), this.imgBoss_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__boss_bossbg_png",
        t.x = 0,
        t.y = 22,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__boss_bosstitle_png",
        t.x = 83,
        t.y = 0,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "c2022__boss_btnfight_png",
        t.x = 33,
        t.y = 347,
        t
    },
    i.btnGiveup_i = function() {
        var t = new eui.Image;
        return this.btnGiveup = t,
        t.source = "c2022__boss_btngiveup_png",
        t.x = 201,
        t.y = 347,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__boss_yjjx_4_png",
        t.x = 31,
        t.y = 271,
        t
    },
    i.imgBoss_i = function() {
        var t = new eui.Image;
        return this.imgBoss = t,
        t.source = "",
        t.visible = !0,
        t.x = 44,
        t.y = 81,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "守护礼物的圣诞使者，\n似乎只有击败使者才能获得礼物。",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 281,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pop/CheckSkin.exml"] = window.christmas2022.CheckSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnGo1", "btnGo2", "btnGo3", "btnGo4", "btnGo5", "btnGo6", "tommorow1", "tommorow2", "tommorow3", "tommorow4", "tommorow5", "tommorow6", "popPlace"],
        this.height = 448,
        this.width = 761,
        this.elementsContent = [this.popPlace_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.popPlace_i = function() {
        var t = new eui.Group;
        return this.popPlace = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.btnClose_i(), this.btnGo1_i(), this.btnGo2_i(), this.btnGo3_i(), this.btnGo4_i(), this.btnGo5_i(), this.btnGo6_i(), this.tommorow1_i(), this.tommorow2_i(), this.tommorow3_i(), this.tommorow4_i(), this.tommorow5_i(), this.tommorow6_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__check_placebg_png",
        t.x = 0,
        t.y = 18,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__check_placetitle_png",
        t.x = 221,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "丢失的礼物似乎七零八落地掉在了各个地方，每个地方都要好好检查一下哦！",
        t.textColor = 16777215,
        t.x = 91,
        t.y = 75,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "实验室",
        t.textColor = 16777215,
        t.x = 44,
        t.y = 116,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "教官办公室",
        t.textColor = 16777215,
        t.x = 277,
        t.y = 116,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "资料室",
        t.textColor = 16777215,
        t.x = 509,
        t.y = 116,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "飞船底层走廊",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 279,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "瞭望仓",
        t.textColor = 16777215,
        t.x = 277,
        t.y = 279,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.stroke = 2,
        t.strokeColor = 3030940,
        t.text = "机械室",
        t.textColor = 16777215,
        t.x = 508,
        t.y = 279,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "c2022__comfort_tuceng_47_png",
        t.x = 699,
        t.y = 20,
        t
    },
    i.btnGo1_i = function() {
        var t = new eui.Image;
        return this.btnGo1 = t,
        t.source = "c2022__check_jrzd_png",
        t.visible = !0,
        t.x = 75,
        t.y = 209,
        t
    },
    i.btnGo2_i = function() {
        var t = new eui.Image;
        return this.btnGo2 = t,
        t.source = "c2022__check_jrzd_png",
        t.x = 305,
        t.y = 209,
        t
    },
    i.btnGo3_i = function() {
        var t = new eui.Image;
        return this.btnGo3 = t,
        t.source = "c2022__check_jrzd_png",
        t.x = 538,
        t.y = 209,
        t
    },
    i.btnGo4_i = function() {
        var t = new eui.Image;
        return this.btnGo4 = t,
        t.source = "c2022__check_jrzd_png",
        t.x = 75,
        t.y = 374,
        t
    },
    i.btnGo5_i = function() {
        var t = new eui.Image;
        return this.btnGo5 = t,
        t.source = "c2022__check_jrzd_png",
        t.x = 305,
        t.y = 374,
        t
    },
    i.btnGo6_i = function() {
        var t = new eui.Image;
        return this.btnGo6 = t,
        t.source = "c2022__check_jrzd_png",
        t.x = 538,
        t.y = 374,
        t
    },
    i.tommorow1_i = function() {
        var t = new eui.Image;
        return this.tommorow1 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 75,
        t.y = 209,
        t
    },
    i.tommorow2_i = function() {
        var t = new eui.Image;
        return this.tommorow2 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 305,
        t.y = 209,
        t
    },
    i.tommorow3_i = function() {
        var t = new eui.Image;
        return this.tommorow3 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 538,
        t.y = 209,
        t
    },
    i.tommorow4_i = function() {
        var t = new eui.Image;
        return this.tommorow4 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 75,
        t.y = 374,
        t
    },
    i.tommorow5_i = function() {
        var t = new eui.Image;
        return this.tommorow5 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 305,
        t.y = 374,
        t
    },
    i.tommorow6_i = function() {
        var t = new eui.Image;
        return this.tommorow6 = t,
        t.source = "c2022__check_tommorow_png",
        t.x = 538,
        t.y = 374,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pop/ComfortSkin.exml"] = window.christmas2022.ComfortSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnHelp", "state2", "state1", "txt_mood", "btnUse3", "btnadd3", "icon3", "txtNum3", "grp_icon3", "btnUse4", "btnadd4", "txtNum4", "icon4", "grp_icon4", "btnUse1", "icon1", "btnadd1", "txtNum1", "grp_icon1", "btnUse2", "btnadd2", "icon2", "txtNum2", "grp_icon2", "comfort"],
        this.height = 463,
        this.width = 779,
        this.elementsContent = [this.comfort_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.comfort_i = function() {
        var t = new eui.Group;
        return this.comfort = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Group1_i(), this.grp_icon3_i(), this.grp_icon4_i(), this.grp_icon1_i(), this.grp_icon2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_comfortbg_png",
        t.x = 0,
        t.y = 29,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_comforttitle_png",
        t.x = 269,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "c2022__comfort_tuceng_47_png",
        t.x = 725,
        t.y = 14,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 279,
        t.y = 68,
        t.elementsContent = [this.btnHelp_i(), this._Image3_i(), this.state2_i(), this.state1_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.txt_mood_i()],
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "christmas2022_gift_btmhelp2_png",
        t.x = 215,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_dqzt_png",
        t.x = 0,
        t.y = 3,
        t
    },
    i.state2_i = function() {
        var t = new eui.Image;
        return this.state2 = t,
        t.source = "christmas2022_gift_mood1_png",
        t.x = 153,
        t.y = 3,
        t
    },
    i.state1_i = function() {
        var t = new eui.Image;
        return this.state1 = t,
        t.source = "christmas2022_gift_state1_png",
        t.x = 98,
        t.y = 3,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_kuang_png",
        t.x = 6,
        t.y = 28,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_png",
        t.x = 36,
        t.y = 50,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "christmas2022_gift_xz_2_kb_png",
        t.x = 42,
        t.y = 54,
        t
    },
    i.txt_mood_i = function() {
        var t = new eui.Label;
        return this.txt_mood = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "心情值：99999999",
        t.textColor = 6022911,
        t.x = 56,
        t.y = 46,
        t
    },
    i.grp_icon3_i = function() {
        var t = new eui.Group;
        return this.grp_icon3 = t,
        t.x = 594,
        t.y = 71,
        t.elementsContent = [this.btnUse3_i(), this._Image7_i(), this._Image8_i(), this.btnadd3_i(), this.icon3_i(), this._Image9_i(), this.txtNum3_i()],
        t
    },
    i.btnUse3_i = function() {
        var t = new eui.Image;
        return this.btnUse3 = t,
        t.source = "c2022__comfort_btnuse_png",
        t.x = 5,
        t.y = 133,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_dbx_1_kb_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_juxing_314_png",
        t.x = 0,
        t.y = 91,
        t
    },
    i.btnadd3_i = function() {
        var t = new eui.Image;
        return this.btnadd3 = t,
        t.source = "c2022__comfort_btnadd_png",
        t.x = 96,
        t.y = 92,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 55,
        t.source = "c2022__comfort_icon3_png",
        t.width = 55,
        t.x = 35,
        t.y = 35,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_tangdou_png",
        t.x = 41,
        t.y = 3,
        t
    },
    i.txtNum3_i = function() {
        var t = new eui.Label;
        return this.txtNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 53,
        t.x = 39,
        t.y = 98,
        t
    },
    i.grp_icon4_i = function() {
        var t = new eui.Group;
        return this.grp_icon4 = t,
        t.x = 594,
        t.y = 272,
        t.elementsContent = [this.btnUse4_i(), this._Image10_i(), this._Image11_i(), this.btnadd4_i(), this._Image12_i(), this.txtNum4_i(), this.icon4_i()],
        t
    },
    i.btnUse4_i = function() {
        var t = new eui.Image;
        return this.btnUse4 = t,
        t.source = "c2022__comfort_btnuse_png",
        t.x = 7,
        t.y = 132,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_dbx_1_kb_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_juxing_314_png",
        t.x = 0,
        t.y = 91,
        t
    },
    i.btnadd4_i = function() {
        var t = new eui.Image;
        return this.btnadd4 = t,
        t.source = "c2022__comfort_btnadd_png",
        t.x = 96,
        t.y = 92,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_shenbiwu_png",
        t.x = 30,
        t.y = 3,
        t
    },
    i.txtNum4_i = function() {
        var t = new eui.Label;
        return this.txtNum4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 53,
        t.x = 39,
        t.y = 98,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 55,
        t.source = "c2022__comfort_icon4_png",
        t.width = 55,
        t.x = 35,
        t.y = 35,
        t
    },
    i.grp_icon1_i = function() {
        var t = new eui.Group;
        return this.grp_icon1 = t,
        t.x = 44,
        t.y = 72,
        t.elementsContent = [this.btnUse1_i(), this._Image13_i(), this.icon1_i(), this._Image14_i(), this.btnadd1_i(), this._Image15_i(), this.txtNum1_i()],
        t
    },
    i.btnUse1_i = function() {
        var t = new eui.Image;
        return this.btnUse1 = t,
        t.source = "c2022__comfort_btnuse_png",
        t.x = 3,
        t.y = 132,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_dbx_1_kb_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 55,
        t.source = "c2022__comfort_icon1_png",
        t.width = 55,
        t.x = 38,
        t.y = 38,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_juxing_314_png",
        t.x = 0,
        t.y = 91,
        t
    },
    i.btnadd1_i = function() {
        var t = new eui.Image;
        return this.btnadd1 = t,
        t.source = "c2022__comfort_btnadd_png",
        t.x = 96,
        t.y = 92,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_zhiliaobao_png",
        t.x = 30,
        t.y = 3,
        t
    },
    i.txtNum1_i = function() {
        var t = new eui.Label;
        return this.txtNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 53,
        t.x = 39,
        t.y = 98,
        t
    },
    i.grp_icon2_i = function() {
        var t = new eui.Group;
        return this.grp_icon2 = t,
        t.x = 44,
        t.y = 272,
        t.elementsContent = [this.btnUse2_i(), this._Image16_i(), this._Image17_i(), this.btnadd2_i(), this._Image18_i(), this.icon2_i(), this.txtNum2_i()],
        t
    },
    i.btnUse2_i = function() {
        var t = new eui.Image;
        return this.btnUse2 = t,
        t.source = "c2022__comfort_btnuse_png",
        t.x = 5,
        t.y = 132,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_dbx_1_kb_png",
        t.x = 8,
        t.y = 0,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_juxing_314_png",
        t.x = 0,
        t.y = 91,
        t
    },
    i.btnadd2_i = function() {
        var t = new eui.Image;
        return this.btnadd2 = t,
        t.source = "c2022__comfort_btnadd_png",
        t.x = 96,
        t.y = 92,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__comfort_huluobo_png",
        t.x = 30,
        t.y = 3,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 55,
        t.source = "c2022__comfort_icon2_png",
        t.width = 55,
        t.x = 36,
        t.y = 33,
        t
    },
    i.txtNum2_i = function() {
        var t = new eui.Label;
        return this.txtNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 53,
        t.x = 39,
        t.y = 98,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pop/PopgiftSkin.exml"] = window.christmas2022.PopgiftSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "btnComfirm", "txt_Intro", "popGift"],
        this.height = 428,
        this.width = 381,
        this.elementsContent = [this.popGift_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.popGift_i = function() {
        var t = new eui.Group;
        return this.popGift = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon_i(), this._Image2_i(), this.btnComfirm_i(), this._Image3_i(), this.txt_Intro_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__popgift_popgiftbg_png",
        t.x = 0,
        t.y = 22,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 100,
        t.visible = !0,
        t.width = 100,
        t.x = 145,
        t.y = 130,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__popgift_popgifttitle_png",
        t.x = 82,
        t.y = 0,
        t
    },
    i.btnComfirm_i = function() {
        var t = new eui.Image;
        return this.btnComfirm = t,
        t.source = "c2022__popgift_btncomfirm_png",
        t.x = 81,
        t.y = 333,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__popgift_yjjx_3_png",
        t.x = 29,
        t.y = 281,
        t
    },
    i.txt_Intro_i = function() {
        var t = new eui.Label;
        return this.txt_Intro = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 300,
        t.x = 51,
        t.y = 289,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pop/RewardSkin.exml"] = window.christmas2022.RewardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon0", "icon1", "icon2", "icon3", "icon4", "icon5", "icon6", "icon7", "icon8", "icon9", "btnClose", "iconName0", "iconName1", "iconName2", "iconName3", "iconName4", "iconName5", "iconName6", "iconName7", "iconName8", "iconName9", "popReward"],
        this.height = 431,
        this.width = 762,
        this.elementsContent = [this.popReward_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.popReward_i = function() {
        var t = new eui.Group;
        return this.popReward = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon0_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.icon4_i(), this.icon5_i(), this.icon6_i(), this.icon7_i(), this.icon8_i(), this.icon9_i(), this._Image2_i(), this.btnClose_i(), this.iconName0_i(), this.iconName1_i(), this.iconName2_i(), this.iconName3_i(), this.iconName4_i(), this.iconName5_i(), this.iconName6_i(), this.iconName7_i(), this.iconName8_i(), this.iconName9_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__reward_rewardbg_png",
        t.x = 0,
        t.y = 23,
        t
    },
    i.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 63,
        t.y = 105,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 202,
        t.y = 105,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 343,
        t.y = 105,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 484,
        t.y = 105,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 625,
        t.y = 105,
        t
    },
    i.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 63,
        t.y = 265,
        t
    },
    i.icon6_i = function() {
        var t = new eui.Image;
        return this.icon6 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 202,
        t.y = 265,
        t
    },
    i.icon7_i = function() {
        var t = new eui.Image;
        return this.icon7 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 343,
        t.y = 265,
        t
    },
    i.icon8_i = function() {
        var t = new eui.Image;
        return this.icon8 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 484,
        t.y = 265,
        t
    },
    i.icon9_i = function() {
        var t = new eui.Image;
        return this.icon9 = t,
        t.height = 70,
        t.source = "c2022__reward_tuceng_60_png",
        t.width = 70,
        t.x = 625,
        t.y = 265,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "c2022__reward_rewardtitle_png",
        t.x = 275,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "c2022__reward_btnclose_png",
        t.x = 699,
        t.y = 11,
        t
    },
    i.iconName0_i = function() {
        var t = new eui.Label;
        return this.iconName0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "通用刻印激活水晶",
        t.textColor = 16777215,
        t.x = 35,
        t.y = 206,
        t
    },
    i.iconName1_i = function() {
        var t = new eui.Label;
        return this.iconName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "限时•星际密令",
        t.textColor = 16777215,
        t.x = 190,
        t.y = 206,
        t
    },
    i.iconName2_i = function() {
        var t = new eui.Label;
        return this.iconName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "限时•浩瀚星核",
        t.textColor = 16777215,
        t.x = 330,
        t.y = 206,
        t
    },
    i.iconName3_i = function() {
        var t = new eui.Label;
        return this.iconName3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "十万经验券",
        t.textColor = 16777215,
        t.x = 482,
        t.y = 206,
        t
    },
    i.iconName4_i = function() {
        var t = new eui.Label;
        return this.iconName4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "级技能石",
        t.textColor = 16777215,
        t.x = 631,
        t.y = 206,
        t
    },
    i.iconName5_i = function() {
        var t = new eui.Label;
        return this.iconName5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "级技能石",
        t.textColor = 16777215,
        t.x = 66,
        t.y = 366,
        t
    },
    i.iconName6_i = function() {
        var t = new eui.Label;
        return this.iconName6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性开启晶片",
        t.textColor = 16777215,
        t.x = 192,
        t.y = 366,
        t
    },
    i.iconName7_i = function() {
        var t = new eui.Label;
        return this.iconName7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性重组剂",
        t.textColor = 16777215,
        t.x = 341,
        t.y = 366,
        t
    },
    i.iconName8_i = function() {
        var t = new eui.Label;
        return this.iconName8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "圣诞树摇摇券",
        t.textColor = 16777215,
        t.x = 475,
        t.y = 366,
        t
    },
    i.iconName9_i = function() {
        var t = new eui.Label;
        return this.iconName9 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "神秘的麋鹿包裹",
        t.textColor = 16777215,
        t.x = 609,
        t.y = 366,
        t
    },
    e
} (eui.Skin);