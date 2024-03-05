var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.service.setValues([t.AttrConst.forever_winTime], [t.AttrConst.daily_state, t.AttrConst.daily_data1, t.AttrConst.daily_data2, t.AttrConst.daily_data3, t.AttrConst.daily_data4], [t.AttrConst.bitbuff_hasGetBonus]),
            e.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.PanelConst.CHALLENGE_PANEL
            }]),
            e
        }
        return __extends(e, i),
        e
    } (BasicMultPanelModule);
    t.SixRealmsGodKingHall = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.SixRealmsGodKingHall")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function() {
        function t() {}
        return t.bitbuff_hasGetBonus = 11288,
        t.forever_winTime = 103708,
        t.daily_state = 11410,
        t.daily_data1 = 11411,
        t.daily_data2 = 11412,
        t.daily_data3 = 11413,
        t.daily_data4 = 11414,
        t
    } ();
    t.AttrConst = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.AttrConst")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function() {
        function t() {}
        return t.CMD = 45767,
        t
    } ();
    t.CMDConst = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.CMDConst")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function() {
        function t() {}
        return t.jieShengSignet = 1721558,
        t
    } ();
    t.ItemConst = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.ItemConst")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function() {
        function t() {}
        return t.MAIN_PANEL = "sixRealmsGodKingHall.MainPanel",
        t.CHALLENGE_PANEL = "sixRealmsGodKingHall.ChallengePanel",
        t
    } ();
    t.PanelConst = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.PanelConst")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.standardPetPosition = [],
            t.curBossIndex = 1,
            t.img = [],
            t.standardRotation = [],
            t.skinName = "SixRealmsGodKingHallChallengePanelSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.adaptLeftContent(this.btnPet),
            this.adaptLeftContent(this.btnCure),
            this.imgItem.source = ClientConfig.getItemIcon(1721558),
            this.createRoulette(),
            this.addEvent(),
            this.initPetPosition(),
            this.initItem(),
            this.addAni(),
            GameInfo.isChecking && (this.btnFastBeat.visible = !1, this.btnAddFightTime.visible = !1)
        },
        e.prototype.addAni = function() {
            var t = this.imgArrow.x;
            egret.Tween.get(this.imgArrow, {
                loop: !0
            }).to({
                x: t - 10
            },
            400).to({
                x: t
            },
            400)
        },
        e.prototype.createRoulette = function() {
            this.group = new eui.Group,
            this.groupRight.addChild(this.group),
            this.group.width = this.group.height = 450,
            this.group.anchorOffsetX = this.group.anchorOffsetY = this.group.width / 2,
            this.group.x = 569,
            this.group.y = 289,
            this.moveArea = new eui.Rect(1.8 * this.group.width, 1.8 * this.group.height, 0),
            this.moveArea.alpha = 0,
            this.group.addChild(this.moveArea),
            this.moveArea.anchorOffsetX = this.moveArea.anchorOffsetY = this.moveArea.width / 2,
            this.moveArea.x = this.moveArea.y = this.group.width / 2,
            this.group.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this),
            this.initGroup(12, 7)
        },
        e.prototype.initGroup = function(t, i) {
            this.numImgs = t,
            this.numIndex = i;
            for (var e = 0; t > e; e++) this.img[e] = {
                img: null,
                index: null
            };
            for (var e = 0; i > e; e++) this.img[e].index = e + 1,
            this.standardRotation[e] = 360 * e / this.numImgs,
            this.img[e].img = new eui.Image("imgPet" + (e + 1) + "_png"),
            this.group.addChild(this.img[e].img),
            this.img[e].img.scaleX = this.img[e].img.scaleY = 0 == e ? .5 : .35,
            this.img[e].img.anchorOffsetX = this.img[e].img.width / 2,
            this.img[e].img.anchorOffsetY = this.img[e].img.height / 2,
            this.img[e].img.x = 250 * Math.sin((360 / t * e - 90) / 180 * Math.PI) + this.group.width / 2,
            this.img[e].img.y = 250 * Math.cos((360 / t * e - 90) / 180 * Math.PI) + this.group.height / 2;
            for (var e = 0; t - i > e; e++) {
                var n = t - 1 - e;
                this.img[n].index = i - e,
                this.standardRotation[n] = 360 * n / this.numImgs,
                this.img[n].img = new eui.Image("imgPet" + (i - e) + "_png"),
                this.group.addChild(this.img[n].img),
                this.img[n].img.scaleX = this.img[n].img.scaleY = .35,
                this.img[n].img.anchorOffsetX = this.img[n].img.width / 2,
                this.img[n].img.anchorOffsetY = this.img[n].img.height / 2,
                this.img[n].img.x = 250 * Math.sin((360 / t * n - 90) / 180 * Math.PI) + this.group.width / 2,
                this.img[n].img.y = 250 * Math.cos((360 / t * n - 90) / 180 * Math.PI) + this.group.height / 2
            }
        },
        e.prototype.onMove = function(t) {
            this.group.rotation = this.beginRotation + .2 * (this.beginY - t.stageY);
            var i = t.stageY < this.lastY;
            this.lastY = t.stageY,
            this._update(i)
        },
        e.prototype.onBegin = function(t) {
            this.beginY = this.lastY = t.stageY,
            this.beginRotation = this.group.rotation,
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this)
        },
        e.prototype.onEnd = function(t) {
            var i = this;
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
            var e = this.group.rotation;
            0 > e && (e += 360);
            for (var n, s = 0; s < this.numImgs; s++) {
                var a = this.calculateOffset(this.standardRotation[s], e);
                if (a <= 180 / this.numImgs) {
                    n = s;
                    break
                }
            }
            if (void 0 === n) return void console.error("no closest");
            this.curBossIndex = this.img[n].index;
            var o = this.standardRotation[n];
            o > 180 && (o -= 360),
            180 == o && this.group.rotation < 0 && (o = -180),
            egret.Tween.get(this.group, {
                onChange: function() {
                    var t = o - i.group.rotation > 0;
                    i._update(t)
                },
                onChangeObj: this
            }).to({
                rotation: o
            },
            100 + 300 * (Math.abs(o - this.group.rotation) / (360 / this.numImgs))).call(function() {
                i.setBossIndex()
            },
            this)
        },
        e.prototype.calculateOffset = function(t, i) {
            if (0 == t) {
                var e = 360 / this.numImgs;
                return 360 - e >= i ? i: 360 - i
            }
            return Math.abs(t - i)
        },
        e.prototype._update = function(t) {
            var i = this.group.rotation;
            0 > i && (i += 360);
            for (var e = 0; e < this.numImgs; e++) {
                var n = this.calculateOffset(this.standardRotation[e], i);
                n < 360 / this.numImgs ? this.img[e].img.scaleX = this.img[e].img.scaleY = .35 + .15 * (1 - Math.abs(n) / (360 / this.numImgs)) : this.img[e].img.scaleX = this.img[e].img.scaleY = .35,
                this.img[e].img.rotation = -i;
                var s = Math.abs(this.standardRotation[e] - i);
                if (t) {
                    if (s > 120 && 240 > s) {
                        var a = e - 1;
                        0 > a && (a = this.numImgs - 1);
                        var o = this.img[e].index - 1;
                        if (1 > o && (o = this.numIndex), o != this.img[a].index) {
                            var r = this.img[a].index + 1;
                            r > this.numIndex && (r = 1),
                            this.img[e].index = r,
                            this.img[e].img.source = "imgPet" + r + "_png"
                        }
                    }
                } else if (s > 120 && 240 > s) {
                    var a = e + 1;
                    a >= this.numImgs && (a = 0);
                    var o = this.img[e].index + 1;
                    if (o > this.numIndex && (o = 1), o != this.img[a].index) {
                        var r = this.img[a].index - 1;
                        1 > r && (r = this.numIndex),
                        this.img[e].index = r,
                        this.img[e].img.source = "imgPet" + r + "_png"
                    }
                }
            }
        },
        e.prototype.destroy = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.setPetPosition, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this),
            this.moveArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this),
            i.prototype.destroy.call(this)
        },
        e.prototype.initItem = function() {
            this.service.registerItemUpdateForText(t.ItemConst.jieShengSignet, this.txtSignet, this)
        },
        e.prototype.addEvent = function() {
            var t = this;
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.setPetPosition, this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFastBeat,
            function() {
                t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                t.noOpen()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (0 == t.numFightTime) BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！");
                else {
                    if (!t.service) return;
                    var i = t.service.getValue(11411 + Math.floor(t.curBossIndex / 2 - .1)) >> (t.curBossIndex % 2 == 0 ? 16 : 0) & 65535;
                    t.oldWinTime = 15 & i,
                    FightManager.fightNoMapBoss("", 17415 + 7 * t.numDiff + t.curBossIndex)
                }
            },
            this),
            ImageButtonUtil.add(this.imgItem,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1721558
                })
            },
            this)
        },
        e.prototype.beforeAdd = function() {
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e.prototype.backFromFight = function() {
            var t = this;
            this.service.updateValues().then(function() {
                if (t.service) {
                    var i = t.service.getValue(11411 + Math.floor(t.curBossIndex / 2 - .1)) >> (t.curBossIndex % 2 == 0 ? 16 : 0) & 65535,
                    e = 15 & i;
                    e > t.oldWinTime ? Alarm.show("恭喜你，按照要求完成了界王认可！") : Alarm.show("很抱歉，未按照要求完成界王认可！")
                }
            })
        },
        e.prototype.initPetPosition = function() {
            for (var t = 1; 7 >= t; t++) this.standardPetPosition[t] = this["imgPet" + t].x,
            this["imgPet" + t].visible = !1;
            this.setPetPosition(!0)
        },
        e.prototype.setPetPosition = function(t) {
            for (var i = 1; 6 >= i; i++) this["imgPet" + i].x = .6 * (t ? 1.2 : 1) * this.standardPetPosition[i] * egret.lifecycle.stage.width / 1136;
            this.imgPet7.x = .32 * (t ? 1.2 : 1) * this.standardPetPosition[7] * egret.lifecycle.stage.width / 1136
        },
        e.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        e.prototype.update = function() {
            var i = this;
            if (this.service) {
                for (var e = !0,
                n = 1; 7 >= n; n++) {
                    var s = this.service.getValue(11411 + Math.floor(n / 2 - .1)) >> (n % 2 == 0 ? 16 : 0) & 65535,
                    a = 15 & s;
                    if (3 > a) {
                        e = !1;
                        break
                    }
                }
                if (e) return void this.service.backToMainPanel();
                this.numFightTime = 24 - (this.service.getValue(t.AttrConst.daily_state) >> 8 & 255),
                this.txtFightTime.text = this.numFightTime + "";
                var o = this.service.getValue(t.AttrConst.daily_state);
                this.numDiff = 255 & o,
                this.initBtnClose("six_realms_god_king_hall_challenge_panel_txttitle" + this.numDiff + "_png", this,
                function() {
                    i.service.backToMainPanel()
                },
                this),
                this.setBossIndex()
            }
        },
        e.prototype.setBossIndex = function() {
            if (this.service) {
                for (var t = 1; 7 >= t; t++) this["imgPet" + t].visible = t == this.curBossIndex;
                var i = this.service.getValue(11411 + Math.floor(this.curBossIndex / 2 - .1)) >> (this.curBossIndex % 2 == 0 ? 16 : 0) & 65535,
                e = 15 & i,
                n = [i >> 4 & 15, i >> 8 & 15, i >> 12 & 15];
                this.imgStar1.visible = e >= 1,
                this.imgStar2.visible = e >= 2,
                this.imgStar3.visible = e >= 3,
                this.groupVisible.visible = 3 > e,
                2 >= e ? this.setRequirement(n[e]) : this.txtRequirement.text = ""
            }
        },
        e.prototype.setRequirement = function(t) {
            var i = "";
            1 == t ? i = "最后一击使用物理攻击战胜": 2 == t ? i = "最后一击使用特殊攻击战胜": 3 == t ? i = "最后一击使用致命一击战胜": 4 == t ? i = "最后一击使用先制攻击战胜": 5 == t ? i = "最后一击使用必中攻击战胜": 6 == t ? i = "处于满体力时战胜": 7 == t ? i = "处于能力提升状态下战胜": 8 == t ? i = "6个回合以后战胜": 9 == t ? i = "3个回合以内战胜": 10 == t && (i = "使用≤3个精灵战胜"),
            this.txtRequirement.text = i
        },
        e.prototype.removed = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.backFromFight, this)
        },
        e
    } (BasicPanel);
    t.ChallengePanel = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.ChallengePanel")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
sixRealmsGodKingHall; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.skinName = "SixRealmsGodKingHallMainPanelSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.icon1.source = ClientConfig.getItemIcon(1721558),
            this.icon3.source = ClientConfig.getItemIcon(1400153),
            this.icon4.source = ClientConfig.getItemIcon(1400152),
            this.icon5.source = ClientConfig.getItemIcon(2500005),
            this.initBtnClose("six_realms_god_king_hall_main_panel_txt_title_png", this,
            function() {
                t.service.closeModule()
            },
            this),
            this.initBtnHelpById(68),
            this.setPetPosition(),
            this.addEvent(),
            this.initItem()
        },
        e.prototype.destroy = function() {
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.setPetPosition, this),
            i.prototype.destroy.call(this)
        },
        e.prototype.initItem = function() {
            this.service.registerItemUpdateForText(t.ItemConst.jieShengSignet, this.txtSignet, this)
        },
        e.prototype.setPetPosition = function() {
            this.imgPet.x = 1.1 * 78 * egret.lifecycle.stage.width / 1136
        },
        e.prototype.addEvent = function() {
            var i = this;
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.setPetPosition, this),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1721558
                })
            },
            this),
            ImageButtonUtil.add(this.icon3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.icon4,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon5,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!i.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(45767, [39, 1]).then(function() {
                        i._openDoubleFlags = !0,
                        i.imgSwitchOn.visible = !0,
                        i.imgSwitchOff.visible = !1,
                        i.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                var e = 255 & i.service.getValue(t.AttrConst.daily_state);
                0 == e && i.isSwitchOn && SocketConnection.sendWithPromise(45767, [39, 0]).then(function() {
                    i._openDoubleFlags = !1,
                    i.imgSwitchOn.visible = !1,
                    i.imgSwitchOff.visible = !0,
                    i.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.btnEasy,
            function() {
                i.goToFight(1)
            },
            this),
            ImageButtonUtil.add(this.btnNormal,
            function() {
                i.goToFight(2)
            },
            this),
            ImageButtonUtil.add(this.btnDifficult,
            function() {
                i.goToFight(3)
            },
            this)
        },
        e.prototype.goToFight = function(i) {
            for (var e = this,
            n = !0,
            s = 1; 7 >= s; s++) {
                var a = this.service.getValue(11411 + Math.floor(s / 2 - .1)) >> (s % 2 == 0 ? 16 : 0) & 65535,
                o = 15 & a;
                if (3 > o) {
                    n = !1;
                    break
                }
            }
            if (n) return void Alarm.show("恭喜你，今日已获得了所有界王的认可，明天再来吧！");
            var r = this.service.getValue(t.AttrConst.daily_state);
            if (r = 255 & r, this["flag" + i].visible && 0 == r) return void Alert.show("当前关卡已解锁扫荡资格，是否确认消耗道具进行快速扫荡？",
            function() {
                ItemManager.getNumByID(1400153) <= 0 && ItemManager.getNumByID(2500005) <= 0 ? BubblerManager.getInstance().showText("道具数量不足") : SocketConnection.sendByQueue(45767, [38, i],
                function() {
                    e.update()
                })
            },
            function() {
                if (0 == r) {
                    var n = e.isSwitchOn ? "每日仅可选择1次关卡模式，确定消耗激励模组进入六界神王殿吗？": "每日仅可选择1次关卡模式，你确定要进入六界神王殿吗？";
                    Alert.show(n,
                    function() {
                        SocketConnection.sendByQueue(t.CMDConst.CMD, [32, i],
                        function() {
                            e.service.updateValues().then(function() {
                                e.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
                            })
                        })
                    })
                } else e.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
            });
            if (0 == r) {
                var g = this.isSwitchOn ? "每日仅可选择1次关卡模式，确定消耗激励模组进入六界神王殿吗？": "每日仅可选择1次关卡模式，你确定要进入六界神王殿吗？";
                Alert.show(g,
                function() {
                    SocketConnection.sendByQueue(t.CMDConst.CMD, [32, i],
                    function() {
                        e.service.updateValues().then(function() {
                            e.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
                        })
                    })
                })
            } else this.service.openPanel(t.PanelConst.CHALLENGE_PANEL)
        },
        e.prototype.update = function() {
            var i = this;
            KTool.getBitSet([8831],
            function(t) {
                i._openDoubleFlags = 1 == t[0],
                i.isSwitchOn = i._openDoubleFlags,
                i.imgSwitchOff.visible = !i._openDoubleFlags,
                i.imgSwitchOn.visible = i._openDoubleFlags,
                i.txt_itemNum3.text = ItemManager.getNumByID(1400153).toString(),
                i.txt_itemNum4.text = ItemManager.getNumByID(1400152).toString(),
                i.txt_itemNum5.text = ItemManager.getNumByID(2500005).toString()
            }),
            this.service.updateValues().then(function() {
                for (var e = i.service.getValue(t.AttrConst.daily_state), n = i.service.getValue(t.AttrConst.forever_winTime), s = 0; 3 > s; s++) i["flag" + (s + 1)].visible = (n >> 8 * s & 255) > 0;
                e = 255 & e,
                i.btnEasy.visible = 0 == e || 1 == e,
                i.btnNormal.visible = 0 == e || 2 == e,
                i.btnDifficult.visible = 0 == e || 3 == e,
                0 != e && (i.btnEasy.visible ? (i.btnEasy.x = i.btnNormal.x, i.btnEasy.y = i.btnNormal.y, i.btnEasy.scaleX = i.btnEasy.scaleY = 1.2, i.flag1.x = i.flag2.x, i.flag1.y = i.flag2.y, i.flag2.visible = i.flag3.visible = !1, ImageButtonUtil.add(i.btnEasy,
                function() {
                    i.goToFight(1)
                },
                i)) : i.btnNormal.visible ? (i.btnNormal.scaleX = i.btnNormal.scaleY = 1.2, i.flag1.visible = i.flag3.visible = !1, ImageButtonUtil.add(i.btnNormal,
                function() {
                    i.goToFight(2)
                },
                i)) : i.btnDifficult.visible && (i.btnDifficult.x = i.btnNormal.x, i.btnDifficult.y = i.btnNormal.y, i.btnDifficult.scaleX = i.btnDifficult.scaleY = 1.2, i.flag2.visible = i.flag1.visible = !1, i.flag3.x = i.flag2.x, i.flag3.y = i.flag2.y, ImageButtonUtil.add(i.btnDifficult,
                function() {
                    i.goToFight(3)
                },
                i)))
            })
        },
        e
    } (BasicPanel);
    t.MainPanel = i,
    __reflect(i.prototype, "sixRealmsGodKingHall.MainPanel")
} (sixRealmsGodKingHall || (sixRealmsGodKingHall = {}));
var __extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/SixRealmsGodKingHallChallengePanelSkin.exml"] = window.SixRealmsGodKingHallChallengePanelSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgPet1", "imgPet7", "imgPet2", "imgPet3", "imgPet4", "imgPet5", "imgPet6", "imgKuang", "imgArrow", "groupRight", "btnAddFightTime", "btnPet", "btnCure", "imgStar3", "imgStar2", "imgStar1", "btnFight", "btnFastBeat", "txtRequirement", "groupVisible", "imgItem", "txtSignet", "txtFightTime", "txtBossName"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.imgPet1_i(), this.imgPet7_i(), this.imgPet2_i(), this.imgPet3_i(), this.imgPet4_i(), this.imgPet5_i(), this.imgPet6_i(), this._Image2_i(), this.groupRight_i(), this._Image4_i(), this._Image5_i(), this.btnAddFightTime_i(), this.btnPet_i(), this.btnCure_i(), this.imgStar3_i(), this.imgStar2_i(), this.imgStar1_i(), this.groupVisible_i(), this.imgItem_i(), this.txtSignet_i(), this.txtFightTime_i(), this.txtBossName_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "six_realms_god_king_hall_main_panel_bg_jpg",
        t.top = 0,
        t
    },
    e.imgPet1_i = function() {
        var t = new eui.Image;
        return this.imgPet1 = t,
        t.anchorOffsetX = 337,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet7_png",
        t.visible = !1,
        t.x = 399,
        t.y = 40,
        t
    },
    e.imgPet7_i = function() {
        var t = new eui.Image;
        return this.imgPet7 = t,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet6_png",
        t.visible = !1,
        t.x = 377,
        t.y = 53,
        t
    },
    e.imgPet2_i = function() {
        var t = new eui.Image;
        return this.imgPet2 = t,
        t.anchorOffsetX = 274,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet5_png",
        t.visible = !1,
        t.x = 377,
        t.y = 56,
        t
    },
    e.imgPet3_i = function() {
        var t = new eui.Image;
        return this.imgPet3 = t,
        t.anchorOffsetX = 290,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet4_png",
        t.visible = !1,
        t.x = 359,
        t.y = 79,
        t
    },
    e.imgPet4_i = function() {
        var t = new eui.Image;
        return this.imgPet4 = t,
        t.anchorOffsetX = 364,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet3_png",
        t.visible = !1,
        t.x = 387,
        t.y = 81,
        t
    },
    e.imgPet5_i = function() {
        var t = new eui.Image;
        return this.imgPet5 = t,
        t.anchorOffsetX = 351,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet2_png",
        t.visible = !1,
        t.x = 375,
        t.y = 82,
        t
    },
    e.imgPet6_i = function() {
        var t = new eui.Image;
        return this.imgPet6 = t,
        t.anchorOffsetX = 321,
        t.source = "six_realms_god_king_hall_challenge_panel_imgpet1_png",
        t.visible = !1,
        t.x = 383,
        t.y = 60,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_main_panel_top_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.groupRight_i = function() {
        var t = new eui.Group;
        return this.groupRight = t,
        t.height = 592,
        t.right = 0,
        t.visible = !0,
        t.width = 515,
        t.y = 47,
        t.elementsContent = [this._Image3_i(), this.imgKuang_i(), this.imgArrow_i()],
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_challenge_panel_rightbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e.imgKuang_i = function() {
        var t = new eui.Image;
        return this.imgKuang = t,
        t.source = "six_realms_god_king_hall_challenge_panel_kuang_png",
        t.x = 242,
        t.y = 199,
        t
    },
    e.imgArrow_i = function() {
        var t = new eui.Image;
        return this.imgArrow = t,
        t.source = "six_realms_god_king_hall_challenge_panel_jiantou_png",
        t.x = 391,
        t.y = 260,
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.right = 33,
        t.scale9Grid = new egret.Rectangle(38, 7, 38, 8),
        t.source = "six_realms_god_king_hall_main_panel_img_di2_png",
        t.y = 14,
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.right = 199,
        t.source = "six_realms_god_king_hall_challenge_panel_txtcoin2_kb_png",
        t.y = 14,
        t
    },
    e.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.right = 178,
        t.source = "six_realms_god_king_hall_challenge_panel_btnaddfighttime_png",
        t.y = 15,
        t
    },
    e.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "six_realms_god_king_hall_challenge_panel_btnpet_png",
        t.x = 15,
        t.y = 258,
        t
    },
    e.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "six_realms_god_king_hall_challenge_panel_btncure_png",
        t.x = 15,
        t.y = 332,
        t
    },
    e.imgStar3_i = function() {
        var t = new eui.Image;
        return this.imgStar3 = t,
        t.right = 269,
        t.source = "six_realms_god_king_hall_challenge_panel_imgstar1_png",
        t.y = 337,
        t
    },
    e.imgStar2_i = function() {
        var t = new eui.Image;
        return this.imgStar2 = t,
        t.right = 312,
        t.source = "six_realms_god_king_hall_challenge_panel_imgstar1_png",
        t.y = 337,
        t
    },
    e.imgStar1_i = function() {
        var t = new eui.Image;
        return this.imgStar1 = t,
        t.right = 355,
        t.source = "six_realms_god_king_hall_challenge_panel_imgstar1_png",
        t.y = 337,
        t
    },
    e.groupVisible_i = function() {
        var t = new eui.Group;
        return this.groupVisible = t,
        t.visible = !0,
        t.x = 94,
        t.y = 564,
        t.elementsContent = [this._Image6_i(), this.btnFight_i(), this.btnFastBeat_i(), this.txtRequirement_i()],
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_challenge_panel_txtbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "six_realms_god_king_hall_challenge_panel_btnfight_png",
        t.x = 300,
        t.y = 0,
        t
    },
    e.btnFastBeat_i = function() {
        var t = new eui.Image;
        return this.btnFastBeat = t,
        t.source = "six_realms_god_king_hall_challenge_panel_btnfastbeat_png",
        t.x = 456,
        t.y = 0,
        t
    },
    e.txtRequirement_i = function() {
        var t = new eui.Label;
        return this.txtRequirement = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "最后一击使用物理攻击战胜",
        t.textColor = 16777215,
        t.x = 35,
        t.y = 14,
        t
    },
    e.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 30,
        t.right = 124,
        t.width = 30,
        t.y = 10,
        t
    },
    e.txtSignet_i = function() {
        var t = new eui.Label;
        return this.txtSignet = t,
        t.fontFamily = "MFShangHei",
        t.right = 52,
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 15.58,
        t
    },
    e.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.fontFamily = "MFShangHei",
        t.right = 217,
        t.size = 18.0101510119682,
        t.text = "0000",
        t.textColor = 12834813,
        t.y = 15.58,
        t
    },
    e.txtBossName_i = function() {
        var t = new eui.Label;
        return this.txtBossName = t,
        t.fontFamily = "MFShangHei",
        t.right = 413,
        t.size = 35,
        t.textColor = 16773461,
        t.y = 290,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SixRealmsGodKingHallMainPanelSkin.exml"] = window.SixRealmsGodKingHallMainPanelSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgPet", "btnEasy", "btnNormal", "btnDifficult", "flag1", "flag2", "flag3", "txtSignet", "icon1", "txt_itemNum3", "icon3", "item3", "txt_itemNum5", "icon5", "item5", "txt_itemNum4", "icon4", "imgSwitchOff", "imgSwitchOn", "item4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.imgPet_i(), this._Image2_i(), this._Image3_i(), this.btnEasy_i(), this.btnNormal_i(), this.btnDifficult_i(), this.flag1_i(), this.flag2_i(), this.flag3_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "six_realms_god_king_hall_main_panel_bg_jpg",
        t.top = 0,
        t.x = 0,
        t.y = 0,
        t
    },
    e.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.source = "six_realms_god_king_hall_main_panel_pet_png",
        t.x = 78,
        t.y = 40,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "six_realms_god_king_hall_main_panel_top_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.right = 0,
        t.source = "six_realms_god_king_hall_main_panel_line3_png",
        t.visible = !0,
        t.y = 47,
        t
    },
    e.btnEasy_i = function() {
        var t = new eui.Image;
        return this.btnEasy = t,
        t.anchorOffsetX = 108.505,
        t.anchorOffsetY = 84.004,
        t.right = 121,
        t.source = "six_realms_god_king_hall_main_panel_btneasy_png",
        t.y = 202.004,
        t
    },
    e.btnNormal_i = function() {
        var t = new eui.Image;
        return this.btnNormal = t,
        t.anchorOffsetX = 107.339,
        t.anchorOffsetY = 85.171,
        t.right = 165,
        t.source = "six_realms_god_king_hall_main_panel_btnnormal_png",
        t.y = 354.171,
        t
    },
    e.btnDifficult_i = function() {
        var t = new eui.Image;
        return this.btnDifficult = t,
        t.anchorOffsetX = 105.005,
        t.anchorOffsetY = 86.338,
        t.right = 121,
        t.source = "six_realms_god_king_hall_main_panel_btndifficult_png",
        t.y = 509.338,
        t
    },
    e.flag1_i = function() {
        var t = new eui.Image;
        return this.flag1 = t,
        t.anchorOffsetX = 108.505,
        t.anchorOffsetY = 84.004,
        t.right = 131,
        t.source = "six_realms_god_king_hall_icon_png",
        t.touchEnabled = !1,
        t.y = 225,
        t
    },
    e.flag2_i = function() {
        var t = new eui.Image;
        return this.flag2 = t,
        t.anchorOffsetX = 108.505,
        t.anchorOffsetY = 84.004,
        t.right = 176,
        t.source = "six_realms_god_king_hall_icon_png",
        t.touchEnabled = !1,
        t.y = 390,
        t
    },
    e.flag3_i = function() {
        var t = new eui.Image;
        return this.flag3 = t,
        t.anchorOffsetX = 108.505,
        t.anchorOffsetY = 84.004,
        t.right = 131,
        t.source = "six_realms_god_king_hall_icon_png",
        t.touchEnabled = !1,
        t.y = 540,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 450,
        t.visible = !0,
        t.y = 12,
        t.elementsContent = [this._Image4_i(), this.txtSignet_i(), this.icon1_i()],
        t
    },
    e._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_main_panel_img_di2_png",
        t.x = 67,
        t.y = 3.74,
        t
    },
    e.txtSignet_i = function() {
        var t = new eui.Label;
        return this.txtSignet = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 115,
        t.y = 6.08,
        t
    },
    e.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 66,
        t
    },
    e._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.y = 10,
        t.elementsContent = [this.item3_i(), this.item5_i(), this.item4_i()],
        t
    },
    e.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.txt_itemNum3_i(), this.icon3_i()],
        t
    },
    e._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    e.txt_itemNum3_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 8,
        t
    },
    e.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    e.item5_i = function() {
        var t = new eui.Group;
        return this.item5 = t,
        t.x = -121,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txt_itemNum5_i(), this.icon5_i()],
        t
    },
    e._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    e.txt_itemNum5_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 8,
        t
    },
    e.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    e.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 123,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.txt_itemNum4_i(), this.icon4_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        t
    },
    e._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "six_realms_god_king_hall_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    e.txt_itemNum4_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 64,
        t.y = 8,
        t
    },
    e.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 30,
        t.width = 30,
        t.x = 13,
        t.y = 2,
        t
    },
    e.imgSwitchOff_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOff = t,
        t.source = "six_realms_god_king_hall_main_panel_imgswitchoff_png",
        t.visible = !0,
        t.x = 120,
        t.y = 7,
        t
    },
    e.imgSwitchOn_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOn = t,
        t.source = "six_realms_god_king_hall_main_panel_imgswitchon_png",
        t.visible = !1,
        t.x = 120,
        t.y = 5,
        t
    },
    i
} (eui.Skin);