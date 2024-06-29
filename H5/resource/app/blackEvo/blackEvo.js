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
blackEvo; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.service.setValues([123330, 123339, 123340, 5124], [202294, 202297, 202298, 15065, 15066, 15067, 15068, 15069, 15070, 15071], [25668, 16079, 27276, 27277, 27278, 27279]),
            n.init([{
                panelName: e.PanelConst.MainPanel,
                isMain: !i || !i["goto"]
            },
            {
                panelName: e.PanelConst.Level1Panel,
                isMain: i && 1 == i["goto"]
            },
            {
                panelName: e.PanelConst.Level2Panel,
                isMain: i && 2 == i["goto"]
            }]),
            n
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.BlackEvo = t,
    __reflect(t.prototype, "blackEvo.BlackEvo")
} (blackEvo || (blackEvo = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
blackEvo; !
function(e) {
    var t = function() {
        function e() {}
        return e.MainPanel = "blackEvo.MainPanel",
        e.Level1Panel = "blackEvo.Level1Panel",
        e.Level2Panel = "blackEvo.Level2Panel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "blackEvo.PanelConst");
    var i = function() {
        function e() {}
        return e.EVENT_UPDATE_MAIN_PANEL = "blackEvo.updateMainPanel",
        e
    } ();
    e.EventConst = i,
    __reflect(i.prototype, "blackEvo.EventConst")
} (blackEvo || (blackEvo = {}));
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
blackEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "BlackEvoLevel1PanelSkin",
            t.isFirst = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        t.prototype.init = function() {
            this.initOldPveBtnClose(0, this, "black_evo_level1_panel_imgtitle_png"),
            this.aniGet = SpineUtil.createAnimate("bulaikechaojinhua"),
            this.groupAni.addChild(this.aniGet),
            this.aniGet.visible = !1
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                e.service.cureAllPet()
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["imgItem" + t],
                function() {
                    SocketConnection.sendByQueue(41810, [11, t],
                    function() {
                        e.service.getValue(27275 + t) && BubblerManager.getInstance().showText("已获得过道具，不会再次获得"),
                        e.updateValues()
                    })
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnFight,
            function() {
                var t = e.service.getValue(202298);
                FightManager.fightNoMapBoss(18509 + t)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(260156,
                    function() {
                        SocketConnection.sendByQueue(41810, [11, 5],
                        function() {
                            e.updateValues()
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(260157,
                    function() {
                        SocketConnection.sendByQueue(41810, [11, 6],
                        function() {
                            e.updateValues()
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                SocketConnection.sendByQueue(41810, [11, 4],
                function() {
                    e.service.updateValues().then(function() {
                        KTool.playRollAni({
                            allNum: 4,
                            result: e.service.getValue(202298),
                            duration: 3,
                            numRound: 5
                        },
                        e.setIndex, e.update, e)
                    })
                })
            },
            this)
        },
        t.prototype.update = function() {
            var e = this;
            if (this.service.getValue(27276) && this.service.getValue(27277) && this.service.getValue(27278)) return void this.service.closePanel();
            var t = !1,
            i = this.progress.value,
            n = Math.min(100, this.service.getValue(123339));
            if (this.isFirst) this.isFirst = !1,
            this.aniGet.visible = !1,
            this.progress.value = n,
            this.txtProgress.text = n + "%";
            else if (n > i) {
                t = !0,
                this.aniGet.visible = !0;
                var s = this.aniGet.play(["easy", "nomorl", "middle", "hard"][[5, 10, 15, 25].indexOf(n - i)], 1);
                s.waitPlayEnd().then(function() {
                    e.aniGet.visible = !1,
                    e.progress.value = n,
                    e.txtProgress.text = n + "%",
                    e.groupAni.removeChildren(),
                    e.groupAni.addChild(e.aniGet);
                    for (var t = e.service.getValue(123340), i = 1; 3 >= i; i++) {
                        var s = 1 == KTool.getBit(t, i);
                        e["imgHas" + i].visible = s;
                        var a = !s && n >= [25, 60, 100][i - 1];
                        DisplayUtil.setEnabled(e["imgItem" + i], a, !1),
                        a && e.showAni(i)
                    }
                })
            } else this.aniGet.visible = !1,
            this.progress.value = n,
            this.txtProgress.text = n + "%";
            if (!t) {
                this.groupAni.removeChildren(),
                this.groupAni.addChild(this.aniGet);
                for (var a = this.service.getValue(123340), o = 1; 3 >= o; o++) {
                    var r = 1 == KTool.getBit(a, o);
                    this["imgHas" + o].visible = r;
                    var l = !r && n >= [25, 60, 100][o - 1];
                    DisplayUtil.setEnabled(this["imgItem" + o], l, !1),
                    l && this.showAni(o)
                }
            }
            var _ = this.service.getValue(202298);
            this.setIndex(_),
            this.imgTimes.visible = this.txtTimes.visible = 0 == _,
            this.btnFastFight.visible = this.btnFight.visible = _ > 0;
            var u = MainManager.actorInfo.isVip ? 10 : 8,
            g = u - this.service.getValue(202297);
            this.txtTimes.text = "(" + g + "/" + u + ")",
            this.btnRoll.visible = g > 0 && 0 == _,
            this.btnAddTimes.visible = 0 == g && 0 == _
        },
        t.prototype.setIndex = function(e) {
            e > 0 ? (this.imgSelect.visible = !0, this.imgSelect.x = [ - 22, 212, 444, 677][e - 1]) : this.imgSelect.visible = !1
        },
        t.prototype.showAni = function(e) {
            var t = SpineUtil.createAnimate("bulaikechaojinhua");
            this.groupAni.addChild(t),
            t.play("changzhu"),
            t.x = [ - 95, 69, 293][e - 1],
            t.y = -258
        },
        t
    } (BasicPanel);
    e.Level1Panel = t,
    __reflect(t.prototype, "blackEvo.Level1Panel")
} (blackEvo || (blackEvo = {}));
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
blackEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.petData = [{
                id: 350,
                name: "傲",
                x: 18,
                y: 56,
                condition: "战胜对手"
            },
            {
                id: 707,
                name: "忌",
                x: 117,
                y: 45,
                condition: "10回合后战胜对手"
            },
            {
                id: 535,
                name: "怒",
                x: 56,
                y: 72,
                condition: "强化状态下战胜对手"
            },
            {
                id: 527,
                name: "焚",
                x: 45,
                y: 56,
                condition: "BOSS被弱化时战胜对手"
            },
            {
                id: 1582,
                name: "欲",
                x: 36,
                y: 95,
                condition: "5回合内战胜对手"
            },
            {
                id: 1836,
                name: "惰",
                x: 103,
                y: 0,
                condition: "使用致命一击战胜对手"
            },
            {
                id: 1154,
                name: "暴",
                x: 0,
                y: 46,
                condition: "满血战胜对手"
            }],
            t.skinName = "BlackEvoLevel2PanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        t.prototype.init = function() {
            this.hasItem = !!this.service.getValue(27279),
            this.initOldPveBtnClose(0, this, "black_evo_level2_panel_imgtitle_png")
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                e.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                var t = e.service.getValue(5124) + 1;
                e.lastIndex = t,
                FightManager.fightNoMapBoss(1495 + t)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight,
            function() {
                PayManager.doPayFunc(function() {
                    var t = e.service.getValue(5124) + 1;
                    BuyProductManager.buyProduct(240580 + t + "_" + (2698 + t),
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("240588_2706",
                    function() {
                        e.updateValues()
                    },
                    e)
                },
                e)
            },
            this)
        },
        t.prototype.update = function() {
            var e = this.service.getValue(5124) + 1;
            if (7 >= e) {
                this.imgCurLevel.x = this["imgLevel" + e].x - 5,
                this.imgCurLevel.y = this["imgLevel" + e].y - 4;
                var t = this.petData[e - 1];
                this.imgPet.source = "black_evo_level2_panel_imgpet" + t.id + "_png",
                this.imgPet.x = t.x,
                this.imgPet.y = t.y,
                this.txtCondition.text = t.condition,
                this.lastIndex > 0 && (e > this.lastIndex ? BubblerManager.getInstance().showText("已击破" + this.petData[this.lastIndex - 1].name + "封印，再接再厉！") : BubblerManager.getInstance().showText("未按照条件击败敌人，请再次尝试"), this.lastIndex = 0);
                for (var i = 1; 7 > i; i++) this["imgHas" + i].visible = e > i;
                var n = MainManager.actorInfo.isVip ? 10 : 7,
                s = n - this.service.getValue(15064 + e);
                this.txtTimes.text = "(" + s + "/" + n + ")",
                this.btnFight.visible = s > 0,
                this.btnAddTimes.visible = 0 == s
            } else this.hasItem && BubblerManager.getInstance().showText("光明守护符已达到数量上限，无法再次获得"),
            this.service.closePanel();
            this.hasItem = !!this.service.getValue(27279)
        },
        t
    } (BasicPanel);
    e.Level2Panel = t,
    __reflect(t.prototype, "blackEvo.Level2Panel")
} (blackEvo || (blackEvo = {}));
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
blackEvo; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "BlackEvoSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.initOldPveBtnClose(165, this, "black_evo_imgtitle_png", this.service.closeModule, this.service)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.service.showPetInfo(2341)
            },
            this),
            ImageButtonUtil.add(this.btnCollect,
            function() {
                egret.lifecycle.stage.touchChildren = !1,
                PetFactorCollectionManager.setCollection(148, !0).then(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t.btnCollect.visible = !1,
                    t.btnHasCollect.visible = !0
                })
            },
            this),
            ImageButtonUtil.add(this.btnHasCollect,
            function() {
                egret.lifecycle.stage.touchChildren = !1,
                PetFactorCollectionManager.setCollection(148, !1).then(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    t.btnCollect.visible = !0,
                    t.btnHasCollect.visible = !1
                })
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                var e = PetManager.getBagPetsById(875)[0];
                e ? SocketConnection.sendByQueue(43076, [e.catchTime, 68],
                function(e) {
                    t.updateValues();
                    var i = e.data,
                    n = i.readUnsignedInt();
                    PetManager.upDateBagPetInfo(n,
                    function() {
                        Alert.show("布莱克成功超进化！\n是否立刻前往背包查看？",
                        function() {
                            t.service.showPetBag()
                        })
                    })
                }) : Alarm.show("请将布莱克放入背包，才能完成超进化！",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnSuperEvo,
            function() {
                PayManager.doPayFunc(function() {
                    return t.btnEvo.visible ? void BubblerManager.getInstance().showText("已集齐道具，可以完成进化") : void BuyProductManager.buyProduct("240580_2708",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSkill,
            function() {
                PayManager.doPayFunc(function() {
                    return PetManager.isDefaultPet(2341) ? void BuyProductManager.buyProduct("240589_2709",
                    function() {
                        t.updateValues(),
                        Alert.show("成功获得第五技能，是否前往背包查看？",
                        function() {
                            t.service.showPetBag()
                        })
                    },
                    t) : void Alarm.show("请将" + TextFormatUtil.getRedTxt("夜魔之神布莱克") + "放入背包首发位置",
                    function() {
                        t.service.showPetBag()
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnSignIn,
            function() {
                t.service.openPop(new e.SignInPop(t.service))
            },
            this),
            ImageButtonUtil.add(this.btnLevel1,
            function() {
                t.service.openPanel(e.PanelConst.Level1Panel)
            },
            this),
            ImageButtonUtil.add(this.btnLevel2,
            function() {
                t.service.openPanel(e.PanelConst.Level2Panel)
            },
            this),
            EventManager.addEventListener(e.EventConst.EVENT_UPDATE_MAIN_PANEL, this.update, this)
        },
        i.prototype.update = function() {
            var e = 1 == this.service.getValue(25668);
            this.imgHas.visible = this.btnSkill.visible = e;
            var t = 1 == this.service.getValue(16079);
            this.imgHasSkill.visible = t,
            DisplayUtil.setEnabled(this.btnSkill, !t, !1);
            for (var i = [], n = 0; 4 > n; n++) i[n] = 1 == this.service.getValue(27276 + n),
            this["txtLevelItem" + (n + 1)].text = +i[n] + "/1";
            this.imgHasLevel1.visible = i[0] && i[1] && i[2],
            this.imgHasLevel2.visible = i[3],
            this.btnEvo.visible = this.imgHasLevel1.visible && this.imgHasLevel2.visible && !e,
            this.btnSuperEvo.visible = !this.imgHasLevel1.visible || !this.imgHasLevel2.visible,
            DisplayUtil.setEnabled(this.btnLevel1, !this.imgHasLevel1.visible, !1),
            DisplayUtil.setEnabled(this.btnLevel2, !this.imgHasLevel2.visible, !1);
            var s = PetFactorCollectionManager.checkPetIdIndexIsCollection(148);
            this.btnCollect.visible = !s,
            this.btnHasCollect.visible = s
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "blackEvo.MainPanel")
} (blackEvo || (blackEvo = {}));
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
blackEvo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = "BlackEvoSignInPopSkin",
            i.service = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["item" + i],
                function() {
                    SocketConnection.sendByQueue(43106, [i],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update(),
                            EventManager.dispatchEventWith(e.EventConst.EVENT_UPDATE_MAIN_PANEL)
                        })
                    })
                },
                n, !1, !1)
            },
            n = this, s = 1; 4 >= s; s++) i(s);
            this.update()
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(123330), t = !!this.service.getValue(202294), i = 1; 4 >= i; i++) {
                var n = ( !! this.service.getValue(27275 + i), e >= i);
                this["imgHas" + i].visible = n;
                var s = !t && e == i - 1;
                if (this["imgCan" + i].visible = this["txtToday" + i].visible = s, this["imgCannot" + i].visible = this["txt" + i].visible = !s, DisplayUtil.setEnabled(this["item" + i], s, !1), this["imgArrow" + i] && (this["imgArrow" + i].visible = n), this["txtTomorrow" + i]) {
                    var a = t && e == i - 1;
                    this["txtTomorrow" + i].visible = a,
                    a && (this["txt" + i].visible = this["txtToday" + i].visible = !1)
                }
            }
        },
        i
    } (PopView);
    e.SignInPop = t,
    __reflect(t.prototype, "blackEvo.SignInPop")
} (blackEvo || (blackEvo = {}));
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
generateEUI.paths["resource/eui_skins/BlackEvoLevel1PanelSkin.exml"] = window.BlackEvoLevel1PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAddTimes", "btnRoll", "imgTimes", "btnFastFight", "btnFight", "imgSelect", "progress", "imgItem1", "imgItem2", "imgItem3", "imgHas1", "imgHas2", "imgHas3", "groupAni", "txtProgress", "txtTimes", "btnPet", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this._Group3_i()]
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
            e.source = "black_evo_level1_panel_imgprogress_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "black_evo_bg_jpg",
        e.y = 0,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.width = 913,
        e.y = 30,
        e.elementsContent = [this.btnAddTimes_i(), this.btnRoll_i(), this.imgTimes_i(), this.btnFastFight_i(), this.btnFight_i(), this._Image2_i(), this.imgSelect_i(), this._Group1_i(), this._Label1_i(), this.txtTimes_i()],
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "black_evo_level1_panel_btnaddtimes_png",
        e.x = 390,
        e.y = 510,
        e
    },
    n.btnRoll_i = function() {
        var e = new eui.Image;
        return this.btnRoll = e,
        e.source = "black_evo_level1_panel_btnroll_png",
        e.visible = !0,
        e.x = 390,
        e.y = 510,
        e
    },
    n.imgTimes_i = function() {
        var e = new eui.Image;
        return this.imgTimes = e,
        e.source = "black_evo_level1_panel_imgtimes_png",
        e.visible = !0,
        e.x = 488,
        e.y = 506,
        e
    },
    n.btnFastFight_i = function() {
        var e = new eui.Image;
        return this.btnFastFight = e,
        e.source = "black_evo_level1_panel_btnfastfight_png",
        e.visible = !0,
        e.x = 305,
        e.y = 510,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "black_evo_level1_panel_btnfight_png",
        e.visible = !0,
        e.x = 475,
        e.y = 510,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level1_panel_imgpet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 96,
        e
    },
    n.imgSelect_i = function() {
        var e = new eui.Image;
        return this.imgSelect = e,
        e.height = 430,
        e.scale9Grid = new egret.Rectangle(50, 49, 1, 2),
        e.source = "black_evo_level1_panel_imgselect_png",
        e.width = 257,
        e.x = 573,
        e.y = 75,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 118,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.progress_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.imgHas1_i(), this.imgHas2_i(), this.imgHas3_i(), this.groupAni_i(), this.txtProgress_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level1_panel_imgprogressbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 17,
        e
    },
    n.progress_i = function() {
        var e = new eui.ProgressBar;
        return this.progress = e,
        e.height = 18,
        e.width = 505,
        e.x = 86,
        e.y = 22,
        e.skinName = i,
        e
    },
    n.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.source = "black_evo_level1_panel_imgitem1_png",
        e.visible = !0,
        e.x = 194,
        e.y = 0,
        e
    },
    n.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.source = "black_evo_level1_panel_imgitem2_png",
        e.x = 358,
        e.y = 0,
        e
    },
    n.imgItem3_i = function() {
        var e = new eui.Image;
        return this.imgItem3 = e,
        e.source = "black_evo_level1_panel_imgitem3_png",
        e.x = 581,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level1_panel_imgprogress1_png",
        e.visible = !0,
        e.x = 196,
        e.y = 61,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level1_panel_imgprogress2_png",
        e.x = 360,
        e.y = 61,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level1_panel_imgprogress3_png",
        e.x = 583,
        e.y = 61,
        e
    },
    n.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "black_evo_level1_panel_imghas1_png",
        e.x = 151,
        e.y = 17,
        e
    },
    n.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "black_evo_level1_panel_imghas1_png",
        e.x = 315,
        e.y = 17,
        e
    },
    n.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "black_evo_level1_panel_imghas1_png",
        e.x = 538,
        e.y = 17,
        e
    },
    n.groupAni_i = function() {
        var e = new eui.Group;
        return this.groupAni = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 315,
        e.y = 288,
        e
    },
    n.txtProgress_i = function() {
        var e = new eui.Label;
        return this.txtProgress = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.textColor = 16514895,
        e.x = 13,
        e.y = 19,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP赛尔每日额外2次抽取次数",
        e.textColor = 11432703,
        e.visible = !0,
        e.x = 338,
        e.y = 569,
        e
    },
    n.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "(9/9)",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 503,
        e.y = 506,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 36,
        e.y = 453,
        e.elementsContent = [this.btnPet_i(), this.btnCure_i()],
        e
    },
    n.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "black_evo_level1_panel_btnpet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "black_evo_level1_panel_btncure_png",
        e.x = 0,
        e.y = 90,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlackEvoLevel2PanelSkin.exml"] = window.BlackEvoLevel2PanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnPet", "btnCure", "imgLevel1", "imgLevel2", "imgLevel3", "imgLevel4", "imgLevel5", "imgLevel6", "imgLevel7", "imgHas1", "imgHas2", "imgHas3", "imgHas4", "imgHas5", "imgHas6", "imgCurLevel", "imgPet", "txtCondition", "btnFastFight", "btnAddTimes", "btnFight", "imgTimes", "txtTimes"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group3_i(), this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "black_evo_bg_jpg",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 36,
        e.y = 97,
        e.elementsContent = [this.btnPet_i(), this.btnCure_i(), this.imgLevel1_i(), this.imgLevel2_i(), this.imgLevel3_i(), this.imgLevel4_i(), this.imgLevel5_i(), this.imgLevel6_i(), this.imgLevel7_i(), this.imgHas1_i(), this.imgHas2_i(), this.imgHas3_i(), this.imgHas4_i(), this.imgHas5_i(), this.imgHas6_i(), this.imgCurLevel_i()],
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "black_evo_level1_panel_btnpet_png",
        e.x = 0,
        e.y = 356,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "black_evo_level1_panel_btncure_png",
        e.x = 0,
        e.y = 446,
        e
    },
    i.imgLevel1_i = function() {
        var e = new eui.Image;
        return this.imgLevel1 = e,
        e.source = "black_evo_level2_panel_imglevel1_png",
        e.x = 179,
        e.y = 4,
        e
    },
    i.imgLevel2_i = function() {
        var e = new eui.Image;
        return this.imgLevel2 = e,
        e.source = "black_evo_level2_panel_imglevel2_png",
        e.x = 89,
        e.y = 61,
        e
    },
    i.imgLevel3_i = function() {
        var e = new eui.Image;
        return this.imgLevel3 = e,
        e.source = "black_evo_level2_panel_imglevel3_png",
        e.x = 179,
        e.y = 118,
        e
    },
    i.imgLevel4_i = function() {
        var e = new eui.Image;
        return this.imgLevel4 = e,
        e.source = "black_evo_level2_panel_imglevel4_png",
        e.x = 89,
        e.y = 175,
        e
    },
    i.imgLevel5_i = function() {
        var e = new eui.Image;
        return this.imgLevel5 = e,
        e.source = "black_evo_level2_panel_imglevel5_png",
        e.x = 179,
        e.y = 232,
        e
    },
    i.imgLevel6_i = function() {
        var e = new eui.Image;
        return this.imgLevel6 = e,
        e.source = "black_evo_level2_panel_imglevel6_png",
        e.x = 89,
        e.y = 289,
        e
    },
    i.imgLevel7_i = function() {
        var e = new eui.Image;
        return this.imgLevel7 = e,
        e.source = "black_evo_level2_panel_imglevel7_png",
        e.visible = !0,
        e.x = 179,
        e.y = 346,
        e
    },
    i.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.x = 179,
        e.y = 4,
        e
    },
    i.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.x = 89,
        e.y = 61,
        e
    },
    i.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.visible = !0,
        e.x = 179,
        e.y = 118,
        e
    },
    i.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.visible = !0,
        e.x = 89,
        e.y = 175,
        e
    },
    i.imgHas5_i = function() {
        var e = new eui.Image;
        return this.imgHas5 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.visible = !0,
        e.x = 179,
        e.y = 232,
        e
    },
    i.imgHas6_i = function() {
        var e = new eui.Image;
        return this.imgHas6 = e,
        e.source = "black_evo_level2_panel_imghas_png",
        e.visible = !0,
        e.x = 89,
        e.y = 289,
        e
    },
    i.imgCurLevel_i = function() {
        var e = new eui.Image;
        return this.imgCurLevel = e,
        e.source = "black_evo_level2_panel_imgcurlevel_png",
        e.visible = !0,
        e.x = 174,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -24,
        e.y = 71,
        e.elementsContent = [this._Image2_i(), this._Group2_i(), this._Label1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level2_panel_imgpetbg_png",
        e.x = 0,
        e.y = 204,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.imgPet_i()],
        e
    },
    i.imgPet_i = function() {
        var e = new eui.Image;
        return this.imgPet = e,
        e.visible = !0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP赛尔每日额外3次挑战次数",
        e.textColor = 11432703,
        e.x = 113,
        e.y = 522,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.right = 36,
        e.y = 104,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.txtCondition_i(), this.btnFastFight_i(), this.btnAddTimes_i(), this.btnFight_i(), this.imgTimes_i(), this.txtTimes_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level2_panel_imgtip_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_level2_panel_imgcondition_png",
        e.x = 6,
        e.y = 128,
        e
    },
    i.txtCondition_i = function() {
        var e = new eui.Label;
        return this.txtCondition = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "center",
        e.textColor = 16046448,
        e.width = 224,
        e.x = 51,
        e.y = 242,
        e
    },
    i.btnFastFight_i = function() {
        var e = new eui.Image;
        return this.btnFastFight = e,
        e.source = "black_evo_level1_panel_btnfastfight_png",
        e.x = 21,
        e.y = 367,
        e
    },
    i.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.source = "black_evo_level1_panel_btnaddtimes_png",
        e.visible = !0,
        e.x = 174,
        e.y = 367,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "black_evo_level1_panel_btnfight_png",
        e.visible = !0,
        e.x = 174,
        e.y = 367,
        e
    },
    i.imgTimes_i = function() {
        var e = new eui.Image;
        return this.imgTimes = e,
        e.source = "black_evo_level1_panel_imgtimes_png",
        e.x = 271,
        e.y = 363,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.textColor = 16777215,
        e.x = 285,
        e.y = 363,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlackEvoSigninPopSkin.exml"] = window.BlackEvoSignInPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "imgArrow1", "imgArrow2", "imgArrow3", "imgCannot1", "imgCan1", "imgHas1", "txt1", "txtToday1", "item1", "imgCannot2", "imgCan2", "imgHas2", "txt2", "txtToday2", "txtTomorrow2", "item2", "imgCannot3", "imgCan3", "imgHas3", "txt3", "txtToday3", "txtTomorrow3", "item3", "imgCannot4", "imgCan4", "imgHas4", "txt4", "txtToday4", "txtTomorrow4", "item4"],
        this.height = 352,
        this.width = 748,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnClose_i(), this.imgArrow1_i(), this.imgArrow2_i(), this.imgArrow3_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i(), this._Label1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 352,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(249, 79, 250, 5),
        e.source = "black_evo_signin_pop_imge_sign_bg_png",
        e.visible = !0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgtitle_png",
        e.x = 226,
        e.y = 9,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgdarkarrow1_png",
        e.x = 186,
        e.y = 160,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgdarkarrow1_png",
        e.x = 358,
        e.y = 160,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgdarkarrow1_png",
        e.x = 530,
        e.y = 160,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "black_evo_signin_pop_btnclose_png",
        e.x = 711,
        e.y = 0,
        e
    },
    i.imgArrow1_i = function() {
        var e = new eui.Image;
        return this.imgArrow1 = e,
        e.source = "black_evo_signin_pop_imgarrow1_png",
        e.visible = !0,
        e.x = 179,
        e.y = 154,
        e
    },
    i.imgArrow2_i = function() {
        var e = new eui.Image;
        return this.imgArrow2 = e,
        e.source = "black_evo_signin_pop_imgarrow1_png",
        e.visible = !0,
        e.x = 351,
        e.y = 154,
        e
    },
    i.imgArrow3_i = function() {
        var e = new eui.Image;
        return this.imgArrow3 = e,
        e.source = "black_evo_signin_pop_imgarrow1_png",
        e.visible = !0,
        e.x = 523,
        e.y = 154,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 39,
        e.y = 92,
        e.elementsContent = [this.imgCannot1_i(), this.imgCan1_i(), this._Image6_i(), this.imgHas1_i(), this.txt1_i(), this.txtToday1_i()],
        e
    },
    i.imgCannot1_i = function() {
        var e = new eui.Image;
        return this.imgCannot1 = e,
        e.source = "black_evo_signin_pop_imgcannot4_png",
        e.visible = !0,
        e.x = 16,
        e.y = 22,
        e
    },
    i.imgCan1_i = function() {
        var e = new eui.Image;
        return this.imgCan1 = e,
        e.source = "black_evo_signin_pop_imgcan4_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgitem1_png",
        e.x = 40,
        e.y = 36,
        e
    },
    i.imgHas1_i = function() {
        var e = new eui.Image;
        return this.imgHas1 = e,
        e.source = "black_evo_signin_pop_imghas4_png",
        e.visible = !0,
        e.x = 26,
        e.y = 58,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第一天",
        e.textColor = 14926335,
        e.visible = !0,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtToday1_i = function() {
        var e = new eui.Label;
        return this.txtToday1 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第一天",
        e.textColor = 16775919,
        e.visible = !0,
        e.x = 43,
        e.y = 130,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 210,
        e.y = 92,
        e.elementsContent = [this.imgCannot2_i(), this.imgCan2_i(), this._Image7_i(), this.imgHas2_i(), this.txt2_i(), this.txtToday2_i(), this.txtTomorrow2_i()],
        e
    },
    i.imgCannot2_i = function() {
        var e = new eui.Image;
        return this.imgCannot2 = e,
        e.source = "black_evo_signin_pop_imgcannot4_png",
        e.x = 16,
        e.y = 22,
        e
    },
    i.imgCan2_i = function() {
        var e = new eui.Image;
        return this.imgCan2 = e,
        e.source = "black_evo_signin_pop_imgcan4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgitem2_png",
        e.x = 40,
        e.y = 33,
        e
    },
    i.imgHas2_i = function() {
        var e = new eui.Image;
        return this.imgHas2 = e,
        e.source = "black_evo_signin_pop_imghas4_png",
        e.x = 26,
        e.y = 58,
        e
    },
    i.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第二天",
        e.textColor = 14926335,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtToday2_i = function() {
        var e = new eui.Label;
        return this.txtToday2 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第二天",
        e.textColor = 16775919,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtTomorrow2_i = function() {
        var e = new eui.Label;
        return this.txtTomorrow2 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "明日可领",
        e.textColor = 16773475,
        e.x = 28,
        e.y = 129,
        e
    },
    i.item3_i = function() {
        var e = new eui.Group;
        return this.item3 = e,
        e.visible = !0,
        e.x = 381,
        e.y = 92,
        e.elementsContent = [this.imgCannot3_i(), this.imgCan3_i(), this._Image8_i(), this.imgHas3_i(), this.txt3_i(), this.txtToday3_i(), this.txtTomorrow3_i()],
        e
    },
    i.imgCannot3_i = function() {
        var e = new eui.Image;
        return this.imgCannot3 = e,
        e.source = "black_evo_signin_pop_imgcannot4_png",
        e.x = 16,
        e.y = 22,
        e
    },
    i.imgCan3_i = function() {
        var e = new eui.Image;
        return this.imgCan3 = e,
        e.source = "black_evo_signin_pop_imgcan4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgitem3_png",
        e.x = 41,
        e.y = 40,
        e
    },
    i.imgHas3_i = function() {
        var e = new eui.Image;
        return this.imgHas3 = e,
        e.source = "black_evo_signin_pop_imghas4_png",
        e.x = 26,
        e.y = 58,
        e
    },
    i.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第三天",
        e.textColor = 14926335,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtToday3_i = function() {
        var e = new eui.Label;
        return this.txtToday3 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第三天",
        e.textColor = 16775919,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtTomorrow3_i = function() {
        var e = new eui.Label;
        return this.txtTomorrow3 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "明日可领",
        e.textColor = 16773475,
        e.x = 28,
        e.y = 129,
        e
    },
    i.item4_i = function() {
        var e = new eui.Group;
        return this.item4 = e,
        e.x = 553,
        e.y = 91,
        e.elementsContent = [this.imgCannot4_i(), this.imgCan4_i(), this._Image9_i(), this.imgHas4_i(), this.txt4_i(), this.txtToday4_i(), this.txtTomorrow4_i()],
        e
    },
    i.imgCannot4_i = function() {
        var e = new eui.Image;
        return this.imgCannot4 = e,
        e.source = "black_evo_signin_pop_imgcannot4_png",
        e.x = 16,
        e.y = 22,
        e
    },
    i.imgCan4_i = function() {
        var e = new eui.Image;
        return this.imgCan4 = e,
        e.source = "black_evo_signin_pop_imgcan4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_signin_pop_imgitem4_png",
        e.x = 35,
        e.y = 33,
        e
    },
    i.imgHas4_i = function() {
        var e = new eui.Image;
        return this.imgHas4 = e,
        e.source = "black_evo_signin_pop_imghas4_png",
        e.x = 26,
        e.y = 58,
        e
    },
    i.txt4_i = function() {
        var e = new eui.Label;
        return this.txt4 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第四天",
        e.textColor = 14926335,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtToday4_i = function() {
        var e = new eui.Label;
        return this.txtToday4 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "第四天",
        e.textColor = 16775919,
        e.x = 43,
        e.y = 130,
        e
    },
    i.txtTomorrow4_i = function() {
        var e = new eui.Label;
        return this.txtTomorrow4 = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "明日可领",
        e.textColor = 16773475,
        e.x = 28,
        e.y = 129,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每天签到可领取一个道具，仅可领取一次",
        e.textColor = 11699175,
        e.x = 212,
        e.y = 317,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlackEvoSkin.exml"] = window.BlackEvoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgHas", "btnEvo", "btnSignIn", "txtLevelItem1", "txtLevelItem2", "txtLevelItem3", "imgHasLevel1", "btnLevel1", "txtLevelItem4", "imgHasLevel2", "btnLevel2", "btnSuperEvo", "btnSkill", "imgHasSkill", "btnInfo", "btnCollect", "btnHasCollect"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "black_evo_bg_jpg",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = -10.5,
        e.width = 1025,
        e.y = 47,
        e.elementsContent = [this._Image2_i(), this.imgHas_i(), this.btnEvo_i(), this.btnSignIn_i(), this.btnLevel1_i(), this.btnLevel2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_imgpet_png",
        e.x = 0,
        e.y = 15,
        e
    },
    i.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "black_evo_imghas_png",
        e.x = 190,
        e.y = 215,
        e
    },
    i.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.source = "black_evo_btnevo_png",
        e.x = 191,
        e.y = 489,
        e
    },
    i.btnSignIn_i = function() {
        var e = new eui.Image;
        return this.btnSignIn = e,
        e.source = "black_evo_btnsignin_png",
        e.visible = !0,
        e.x = 858,
        e.y = 0,
        e
    },
    i.btnLevel1_i = function() {
        var e = new eui.Group;
        return this.btnLevel1 = e,
        e.x = 643,
        e.y = 105,
        e.elementsContent = [this._Image3_i(), this.txtLevelItem1_i(), this.txtLevelItem2_i(), this.txtLevelItem3_i(), this.imgHasLevel1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_imglevel1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLevelItem1_i = function() {
        var e = new eui.Label;
        return this.txtLevelItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 4394844,
        e.text = "1/1",
        e.textColor = 16768031,
        e.x = 44,
        e.y = 106,
        e
    },
    i.txtLevelItem2_i = function() {
        var e = new eui.Label;
        return this.txtLevelItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 4394844,
        e.text = "1/1",
        e.textColor = 16768031,
        e.x = 100,
        e.y = 106,
        e
    },
    i.txtLevelItem3_i = function() {
        var e = new eui.Label;
        return this.txtLevelItem3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 4394844,
        e.text = "1/1",
        e.textColor = 16768031,
        e.x = 155,
        e.y = 107,
        e
    },
    i.imgHasLevel1_i = function() {
        var e = new eui.Image;
        return this.imgHasLevel1 = e,
        e.source = "black_evo_imghaslevel1_png",
        e.visible = !0,
        e.x = 5,
        e.y = 11,
        e
    },
    i.btnLevel2_i = function() {
        var e = new eui.Group;
        return this.btnLevel2 = e,
        e.x = 616,
        e.y = 294,
        e.elementsContent = [this._Image4_i(), this.txtLevelItem4_i(), this.imgHasLevel2_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "black_evo_imglevel2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLevelItem4_i = function() {
        var e = new eui.Label;
        return this.txtLevelItem4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 4394844,
        e.text = "1/1",
        e.textColor = 16768287,
        e.x = 46,
        e.y = 105,
        e
    },
    i.imgHasLevel2_i = function() {
        var e = new eui.Image;
        return this.imgHasLevel2 = e,
        e.source = "black_evo_imghaslevel2_png",
        e.visible = !0,
        e.x = 5,
        e.y = 11,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 36,
        e.y = 556,
        e.elementsContent = [this.btnSuperEvo_i(), this.btnSkill_i(), this.imgHasSkill_i()],
        e
    },
    i.btnSuperEvo_i = function() {
        var e = new eui.Image;
        return this.btnSuperEvo = e,
        e.source = "black_evo_btnsuperevo_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSkill_i = function() {
        var e = new eui.Image;
        return this.btnSkill = e,
        e.source = "black_evo_btnskill_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i.imgHasSkill_i = function() {
        var e = new eui.Image;
        return this.imgHasSkill = e,
        e.source = "black_evo_imghasevo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 15,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 36,
        e.y = 488,
        e.elementsContent = [this.btnInfo_i(), this.btnCollect_i(), this.btnHasCollect_i()],
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "black_evo_btninfo_png",
        e.x = 1,
        e.y = 62,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "black_evo_btncollect_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnHasCollect_i = function() {
        var e = new eui.Image;
        return this.btnHasCollect = e,
        e.source = "black_evo_btnhascollect_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);