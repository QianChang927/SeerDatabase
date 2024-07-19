var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.hasBuy = !1,
            t.isPlaying = !1,
            t.skinName = BruteSorensenSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(32, this, "",
            function() {
                ModuleManager.hideModule(t)
            },
            this),
            StatLogger.log("20210618版本系统功能", "索伦森获得线（第二阶段）", "进入【索伦森（第二阶段）】关卡面板"),
            this._resize(),
            this.setTipsTxt(),
            this._scr.viewport = this.grp_level,
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                ModuleManager.hideModule(e)
            },
            this),
            ImageButtonUtil.add(this.help,
            function() {
                var e = config.Help_tips.getItem(32),
                t = {};
                t.title = "活动说明",
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3312)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                var t = [249734, 249735, 249736, 249737];
                PayManager.doPayFunc(function() {
                    SeerbookCollectionController.getinstance().getHavePet([2e3],
                    function(n) {
                        BuyProductManager.buyProductBySocket(t[e._levelState],
                        function() {
                            SocketConnection.sendByQueue(46309, [14, 0],
                            function() {
                                e.updateData(),
                                e.openLevel(4)
                            })
                        },
                        e)
                    })
                },
                e)
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(n["level_" + t + "_bg"],
                function(n) {
                    var i = n.target.parent,
                    _ = i.x + (i.width - e._scr.width) / 2;
                    e._scr.stopAnimation(),
                    e._scr.viewport.scrollH < _ && egret.Tween.get(e._scr.viewport).to({
                        scrollH: _
                    },
                    200).call(function() {
                        egret.Tween.removeTweens(e._scr.viewport)
                    }),
                    e.openLevel(t)
                },
                n),
                4 > t && ImageButtonUtil.add(n["btnPass_" + t],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249738 + t, 1,
                        function() {
                            SocketConnection.sendByQueue(46309, [5, t + 1],
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    e)
                },
                n)
            },
            n = this, i = 0; 5 > i; i++) t(i);
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.onClose(),
                ModuleManager.showModuleByID(85)
            },
            this),
            EventManager.addEventListener("brute_sorensen_hide_level", this.hideLevel, this),
            this._mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideLevel, this),
            EventManager.addEventListener("animPlaying",
            function() {
                e.isPlaying = !0,
                e.touchChildren = e.touchEnabled = !1
            },
            this),
            EventManager.addEventListener("animEnding",
            function() {
                e.isPlaying = !1,
                e.touchChildren = e.touchEnabled = !0
            },
            this)
        },
        t.prototype.openLevel = function(e) {
            var t = this,
            n = ["野心初现", "星系灾厄", "麒麟封印", "圣魔之战", "魔君索伦森"];
            StatLogger.log("20210618版本系统功能", "索伦森获得线（第二阶段）", "拉开【" + n[e] + "】抽屉");
            for (var i = 0; 5 > i; i++) this["flag_selected_" + i].visible = e == i;
            this.com && (this.com.destroy(), this.com.parent && this.com.parent.removeChild(this.com));
            var _ = egret.getDefinitionByName("bruteSorensen.BruteSorensenLevel" + (e + 1));
            this.com = new _,
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
        t.prototype.hideLevel = function() {
            var e = this;
            this.com && this.com.parent && !this.isPlaying ? egret.Tween.get(this.com).to({
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
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4703, 4702],
            function(t) {
                e._levelState = t[0],
                e._state = t[1];
                var n = 1 == KTool.getBit(e._state, 1);
                KTool.getBitSet([9511],
                function(t) {
                    if (e._levelState < 4) {
                        var i, _ = [249734, 249735, 249736, 249737];
                        i = MoneyProductXMLInfo.containsPid(_[e._levelState]) ? ~~MoneyProductXMLInfo.getItemIDs(_[e._levelState])[0] : ~~GoldProductXMLInfo.getItemIDs(_[e._levelState])[0],
                        ItemManager.updateItems([i],
                        function() { (ItemManager.getNumByID(i) > 0 && ItemXMLInfo.getIsMiddleItem(i) || 1 == t[0]) && (e.hasBuy = !0);
                            var _ = !n && 0 == t[0] && e._levelState < 4;
                            DisplayUtil.setEnabled(e.btnBuy, _, !_),
                            e.updateView()
                        })
                    } else {
                        var r = !n && 0 == t[0] && e._levelState < 4;
                        DisplayUtil.setEnabled(e.btnBuy, r, !r),
                        e.updateView()
                    }
                })
            })
        },
        t.prototype.updateView = function() {
            for (var e = 0; 5 > e; e++) 4 > e ? (this["tips_" + e].visible = e == this._levelState, this["flag_passed_" + e].visible = e < this._levelState || this.hasBuy, DisplayUtil.setEnabled(this["btnPass_" + e], e == this._levelState && !this.hasBuy), DisplayUtil.setEnabled(this["level_" + e + "_bg"], e == this._levelState && !this.hasBuy), this["level_" + e + "_bg"].touchEnabled || (this["flag_selected_" + e].visible = !1)) : (DisplayUtil.setEnabled(this["level_" + e + "_bg"], e == this._levelState || this.hasBuy), this["level_" + e + "_bg"].touchEnabled || (this["flag_selected_" + e].visible = !1))
        },
        t.prototype._resize = function() {
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight;
            var e = egret.lifecycle.stage.stageWidth / 1136,
            t = egret.lifecycle.stage.stageHeight / 640,
            n = e > t ? e: t;
            this.bg.scaleX = n,
            this.bg.scaleY = n
        },
        t.prototype.setTipsTxt = function() {
            this.txt_tips_0.textFlow = [{
                text: "通关后，至尊获得将优惠",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "30",
                style: {
                    textColor: 16699677
                }
            },
            {
                text: "钻",
                style: {
                    textColor: 16777215
                }
            }],
            this.txt_tips_1.textFlow = [{
                text: "通关后，至尊获得将优惠",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "120",
                style: {
                    textColor: 16699677
                }
            },
            {
                text: "钻",
                style: {
                    textColor: 16777215
                }
            }],
            this.txt_tips_2.textFlow = [{
                text: "通关后，至尊获得将优惠",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "340",
                style: {
                    textColor: 16699677
                }
            },
            {
                text: "钻",
                style: {
                    textColor: 16777215
                }
            }],
            this.txt_tips_3.textFlow = [{
                text: "通关后，将可进化",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "【索伦森】",
                style: {
                    textColor: 16699677
                }
            }]
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.com && this.com.destroy(),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("brute_sorensen_hide_level", this.hideLevel, this),
            this._mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hideLevel, this),
            EventManager.removeAll(this)
        },
        t
    } (BaseModule);
    e.BruteSorensen = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensen")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._galaxyName = ["帕诺", "卡兰", "罗格", "裂空"],
            t._bossData = [[50, 132, 69], [1093, 1586, 266], [1892, 2263, 525], [1723, 2763, 1012]],
            t._awardData = [[1e3, 1, 20], [1500, 2, 25], [2e3, 3, 30]],
            t.skinName = BruteSorensenFightPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updateData, this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                e.prototype.hide.call(t),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "bruteSorensen.BruteSorensenFightPop"
                })
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnQuick,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249746, 1,
                    function() {
                        var n = 3 * (t._curGalaxy - 1) + t._curBoss;
                        SocketConnection.sendByQueue(46309, [9, n],
                        function() {
                            EventManager.dispatchEventWith("brute_sorensen_update_fight"),
                            e.prototype.hide.call(t)
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                e.prototype.hide.call(t);
                var n = 3 * (t._curGalaxy - 1) + t._curBoss;
                FightManager.fightNoMapBoss("", n + 8980)
            },
            this)
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4705],
            function(t) {
                console.log(t),
                console.log("星系"),
                e._curGalaxy = 255 & t[0],
                e._curBoss = t[0] >> 8 & 255,
                e.updateView()
            })
        },
        t.prototype.updateView = function() {
            this.txt_title.text = this._galaxyName[this._curGalaxy - 1] + "星系";
            var e = this._bossData[this._curGalaxy - 1][this._curBoss - 1],
            t = this._awardData[this._curBoss - 1];
            this.img_head.source = ClientConfig.getPetHeadPath(e),
            this.txt_award_0.text = "泰坦之灵x" + t[0],
            this.txt_award_1.text = "征服进度+" + t[2] + "%",
            this.txt_award_2.text = "星之碎片x" + t[1]
        },
        t.prototype.hide = function() {
            var t = this;
            Alert.show("退出挑战将无法获得任何奖励，是否退出？",
            function() {
                SocketConnection.sendByQueue(46309, [15, 0],
                function() {
                    EventManager.dispatchEventWith("brute_sorensen_update_fight"),
                    e.prototype.hide.call(t)
                })
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.updateData, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.BruteSorensenFightPop = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenFightPop")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BruteSorensenLevel1Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
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
            for (var e = function(e) {
                ImageButtonUtil.add(t["level_" + e],
                function() {
                    SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [533 + e, 0, 0, 0, 0, 0])
                },
                t)
            },
            t = this, n = 0; 3 > n; n++) e(n);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4704, 4703],
            function(t) {
                e._bossState = t[0],
                e._levelState = t[1],
                e.updateView()
            })
        },
        t.prototype.updateView = function() {
            this._levelState >= 1 && Alarm.show("恭喜你通过本关，至尊获得已优惠30钻！",
            function() {
                EventManager.dispatchEventWith("brute_sorensen_hide_level")
            });
            for (var e = 0; 3 > e; e++) this["flag_defeat_" + e].visible = !!KTool.getBit(this._bossState, e + 1),
            this["level_" + e].touchEnabled = !KTool.getBit(this._bossState, e + 1)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.BruteSorensenLevel1 = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenLevel1")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e._itemId = 1712203,
            e.skinName = BruteSorensenLevel2Skin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            SocketConnection.sendByQueue(46309, [15, 0]);
            for (var e = 0; 4 > e; e++) this["starbgSelected_" + e].visible = !1;
            this.addEvent(),
            this.updateData()
        },
        n.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updateData, this),
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249743, 1,
                    function() {
                        KTool.doExchange(9878, 1,
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                e.buyItem()
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                e._fightTimes >= 10 ? Alert.show("今日剩余抽取次数不足，是否购买？",
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249743, 1,
                        function() {
                            KTool.doExchange(9878, 1,
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    e)
                }) : SocketConnection.sendByQueue(46309, [6, 0],
                function() {
                    e.choosePlanet(!0)
                })
            },
            this);
            for (var t = function(t) {
                ImageButtonUtil.add(n["btnGo_" + t],
                function() {
                    var n = ["帕诺", "卡兰", "罗格", "裂空"];
                    Alert.show("是否消耗5个星之碎片，指定出征" + n[t] + "星系？",
                    function() {
                        ItemManager.getNumByID(e._itemId) < 5 ? Alert.show("你拥有的星之碎片不足，是否购买？",
                        function() {
                            e.buyItem()
                        }) : SocketConnection.sendByQueue(46309, [7, t + 1],
                        function() {
                            e.updateView(),
                            e.choosePlanet(!1)
                        })
                    })
                },
                n),
                ImageButtonUtil.add(n["btnFast_" + t],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249745, 1,
                        function() {
                            SocketConnection.sendByQueue(46309, [8, t + 1],
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    e)
                },
                n)
            },
            n = this, i = 0; 4 > i; i++) t(i);
            EventManager.addEventListener("brute_sorensen_update_fight", this.updateData, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        n.prototype.buyItem = function() {
            var e = this;
            PayManager.doPayFunc(function() {
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1712203,
                    productID: 249744
                },
                t.caller = e,
                t.callBack = function(t, n) {
                    KTool.buyProductByCallback(249744, n,
                    function() {
                        KTool.doExchange(9881, n,
                        function() {
                            e.updateData()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this)
        },
        n.prototype.onFightOver = function() {
            if (FightManager.isWin) {
                for (var t = 0; 4 > t; t++) this["starbgSelected_" + t].visible = !1;
                this.updateData()
            } else PopViewManager.getInstance().openView(new e.BruteSorensenFightPop)
        },
        n.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([14439, 4706, 4707, 4708, 4709, 4703],
            function(t) {
                e._fightTimes = t[0],
                e._progress_0 = t[1],
                e._progress_1 = t[2],
                e._progress_2 = t[3],
                e._progress_3 = t[4],
                e._levelState = t[5],
                ItemManager.updateItems([1712203],
                function() {
                    e.updateView()
                })
            })
        },
        n.prototype.updateView = function() {
            this._levelState >= 2 && Alarm.show("恭喜你通过本关，至尊获得已优惠120钻！",
            function() {
                EventManager.dispatchEventWith("brute_sorensen_hide_level")
            });
            for (var e = 0; 4 > e; e++) this["txt_progress_" + e].text = this["_progress_" + e] + "%",
            DisplayUtil.setEnabled(this["btnGo_" + e], this["_progress_" + e] < 100),
            DisplayUtil.setEnabled(this["btnFast_" + e], this["_progress_" + e] < 100),
            this["flag_finish_" + e].visible = this["_progress_" + e] >= 100;
            this.txt_fightTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10",
            this.txt_itemNum.text = "星之碎片：" + ItemManager.getNumByID(this._itemId),
            DisplayUtil.setEnabled(this.btnAddTimes, this._fightTimes >= 10)
        },
        n.prototype.choosePlanet = function(t) {
            var n = this;
            KTool.getMultiValue([4705],
            function(i) {
                var _ = 255 & i[0];
                if (t) {
                    EventManager.dispatchEventWith("animPlaying"),
                    n.touchEnabled = !1,
                    n.touchChildren = !1;
                    var r = 0,
                    s = egret.setInterval(function() {
                        if (r > 15 && r % 4 == _ - 1) return egret.setTimeout(function() {
                            EventManager.dispatchEventWith("animEnding"),
                            n.touchEnabled = !0,
                            n.touchChildren = !0,
                            PopViewManager.getInstance().openView(new e.BruteSorensenFightPop)
                        },
                        n, 300),
                        void egret.clearInterval(s);
                        for (var t = 0; 4 > t; t++) n["starbgSelected_" + t].visible = t == (r + 1) % 4;
                        r++
                    },
                    n, 100)
                } else {
                    for (var a = 0; 4 > a; a++) n["starbgSelected_" + a].visible = a == _ - 1;
                    PopViewManager.getInstance().openView(new e.BruteSorensenFightPop)
                }
            })
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("brute_sorensen_update_fight", this.updateData, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.updateData, this),
            this.removeChildren()
        },
        n
    } (eui.Component);
    e.BruteSorensenLevel2 = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenLevel2")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._inited = !1,
            t.skinName = BruteSorensenLevel3Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(33),
                t = {};
                t.title = "活动说明",
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
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249747, 1,
                    function() {
                        KTool.doExchange(9879, 1,
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnQuick,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249748, 1,
                    function() {
                        SocketConnection.sendByQueue(46309, [11, 0],
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                e._fightTimes >= 10 ? PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249747, 1,
                    function() {
                        KTool.doExchange(9879, 1,
                        function() {
                            e.updateData()
                        })
                    })
                },
                e) : FightManager.fightNoMapBoss("", 8993)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this);
            for (var t = function(t) {
                ImageButtonUtil.add(n["seal_" + t],
                function() {
                    SocketConnection.sendByQueue(46309, [10, t + 1],
                    function() {
                        e.updateData()
                    })
                },
                n)
            },
            n = this, i = 0; 4 > i; i++) t(i)
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([14440, 4710, 4703, 4712],
            function(t) {
                e._inited && e.showAlarm(t),
                e._fightTimes = t[0],
                e._myOrder = t[1],
                e._state = t[2],
                e._progress = t[3],
                KTool.getBitSet([9510],
                function(t) {
                    e._canSeal = t[0],
                    e.updateView(),
                    e._inited = !0
                })
            })
        },
        t.prototype.updateView = function() {
            this._state >= 3 && Alarm.show("恭喜你通过本关，至尊获得已优惠280钻！",
            function() {
                EventManager.dispatchEventWith("brute_sorensen_hide_level")
            }),
            this.txt_progress.text = "破封进度：" + this._progress + "%";
            for (var e = Math.floor(this._progress / 20), t = 0; 5 > t; t++) this["rate_" + t].visible = e > t;
            this.txt_fightTimes.text = "今日剩余挑战次数：" + Math.max(0, 10 - this._fightTimes) + "/10",
            DisplayUtil.setEnabled(this.btnAdd, this._fightTimes >= 10);
            for (var n = [], t = 0; 4 > t; t++) n[t] = this._myOrder >> 8 * t & 255;
            for (var t = 0; 4 > t; t++) {
                var i = n.indexOf(t + 1) > -1;
                this["label_unseal_" + t].visible = this["seal_" + t].touchEnabled = this["seal_" + t].touchChildren = this._canSeal && !i,
                this["img_unseal_" + t].visible = i,
                this["img_seal_" + t].visible = !i
            }
            DisplayUtil.setEnabled(this.btnFight, !this._canSeal),
            DisplayUtil.setEnabled(this.btnQuick, !this._canSeal)
        },
        t.prototype.showAlarm = function(e) {
            if (! (e[2] >= 3)) {
                var t = e[1],
                n = e[3];
                t > this._myOrder && Alarm.show("恭喜你祛除一道封印，继续挑战天火麒麟祛除封印吧！"),
                n > this._progress && Alarm.show("很遗憾，解封顺序和封印顺序不一致。解封进度+20%，达到100%即可通过本关。")
            }
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.BruteSorensenLevel3 = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenLevel3")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._itemId_0 = 1712204,
            t._itemId_1 = 1712205,
            t._inited = !1,
            t.skinName = BruteSorensenLevel4Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFastFight_dark,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249752, 1,
                    function() {
                        SocketConnection.sendByQueue(46309, [13, 1],
                        function() {
                            e._currChosen = 2,
                            e.updateData()
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFastFight_light,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249753, 1,
                    function() {
                        SocketConnection.sendByQueue(46309, [13, 2],
                        function() {
                            e._currChosen = 1,
                            e.updateData()
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(34),
                t = {};
                t.title = "活动说明",
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
            ImageButtonUtil.add(this.btnAdd_times,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249749, 1,
                    function() {
                        KTool.doExchange(9880, 1,
                        function() {
                            e.updateData()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_light,
            function() {
                e.buyItem(!0)
            },
            this),
            ImageButtonUtil.add(this.btnAdd_dark,
            function() {
                e.buyItem(!1)
            },
            this),
            ImageButtonUtil.add(this.btnFight_light,
            function() {
                return e._fightTimes >= 20 ? void Alert.show("今日剩余挑战次数不足，是否购买？",
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249749, 1,
                        function() {
                            KTool.doExchange(9880, 1,
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    e)
                }) : (e._currChosen = 1, void FightManager.fightNoMapBoss("", 8995))
            },
            this),
            ImageButtonUtil.add(this.btnFight_dark,
            function() {
                return e._fightTimes >= 20 ? void Alert.show("今日剩余挑战次数不足，是否购买？",
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(249749, 1,
                        function() {
                            KTool.doExchange(9880, 1,
                            function() {
                                e.updateData()
                            })
                        })
                    },
                    e)
                }) : (e._currChosen = 2, void FightManager.fightNoMapBoss("", 8994))
            },
            this),
            ImageButtonUtil.add(this.btnSynthesis_light,
            function() {
                ItemManager.getNumByID(e._itemId_0) < 10 ? Alert.show("你拥有的圣灵之息不足，是否购买？",
                function() {
                    e.buyItem(!0)
                }) : (e._currChosen = 1, SocketConnection.sendByQueue(46309, [12, 2],
                function() {
                    e.updateData()
                }))
            },
            this),
            ImageButtonUtil.add(this.btnSynthesis_dark,
            function() {
                ItemManager.getNumByID(e._itemId_1) < 10 ? Alert.show("你拥有的魔君之息不足，是否购买？",
                function() {
                    e.buyItem(!1)
                }) : (e._currChosen = 2, SocketConnection.sendByQueue(46309, [12, 1],
                function() {
                    e.updateData()
                }))
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        t.prototype.buyItem = function(e) {
            var t = this,
            n = e ? 249750 : 249751,
            i = e ? 9882 : 9883,
            _ = e ? {
                iconID: 1712204,
                productID: n
            }: {
                iconID: 1712205,
                productID: n
            };
            PayManager.doPayFunc(function() {
                var e = {};
                e.type = "product_diamond",
                e.ins = _,
                e.caller = t,
                e.callBack = function(e, _) {
                    KTool.buyProductByCallback(n, _,
                    function() {
                        KTool.doExchange(i, _,
                        function() {
                            ItemManager.updateItems([1712204, 1712205],
                            function() {
                                t.updateData(!0)
                            })
                        })
                    })
                },
                ModuleManager.showModuleByID(1, e)
            },
            this)
        },
        t.prototype.updateData = function(e) {
            var t = this;
            void 0 === e && (e = !1),
            KTool.getMultiValue([4713, 14441, 4703],
            function(n) {
                t._inited && !e && t.showAlarm(n),
                t._state = n[0],
                t._fightTimes = n[1],
                t._levelState = n[2],
                t.updateView(),
                t._inited = !0
            })
        },
        t.prototype.updateView = function() {
            this._levelState >= 4 && Alarm.show("恭喜你通过本关，快去领取魔君索伦森!",
            function() {
                EventManager.dispatchEventWith("brute_sorensen_hide_level")
            }),
            this.txt_fightTimes.text = "今日剩余挑战次数：" + Math.max(0, 20 - this._fightTimes) + "/20",
            this.txt_lightNum.text = "圣灵之息：" + ItemManager.getNumByID(this._itemId_0),
            this.txt_darkNum.text = "魔君之息：" + ItemManager.getNumByID(this._itemId_1);
            for (var e = 15 & this._state,
            t = this._state >> 4 & 15,
            n = 0; 4 > n; n++) this["lightTag_" + n + "_up"].visible = !KTool.getBit(t, n + 1),
            this["lightTag_" + n + "_down"].visible = KTool.getBit(t, n + 1),
            this["darkTag_" + n + "_up"].visible = !KTool.getBit(e, n + 1),
            this["darkTag_" + n + "_down"].visible = KTool.getBit(e, n + 1);
            DisplayUtil.setEnabled(this.btnAdd_times, this._fightTimes >= 20)
        },
        t.prototype.onFightOver = function() { (!FightManager.isWin || AwardManager.getItem().length) && (this._inited = !1),
            this.updateData()
        },
        t.prototype.showAlarm = function(e) {
            if (! (e[2] >= 4)) {
                var t = ["圣灵", "远古", "自然", "次元"],
                n = ["混沌", "暗影", "邪灵", "神秘"],
                i = e[0],
                _ = 15 & this._state,
                r = this._state >> 4 & 15,
                s = 15 & i,
                a = i >> 4 & 15;
                if (s != _) for (var o = 0; 4 > o; o++) KTool.getBit(s, o + 1) && !KTool.getBit(_, o + 1) && Alarm.show("恭喜你，成功点亮" + n[o] + "之触"),
                !KTool.getBit(s, o + 1) && KTool.getBit(_, o + 1) && Alarm.show("很遗憾，" + n[o] + "之触熄灭");
                if (a != r) for (var o = 0; 4 > o; o++) KTool.getBit(a, o + 1) && !KTool.getBit(r, o + 1) && Alarm.show("恭喜你，成功点亮" + t[o] + "之触"),
                !KTool.getBit(a, o + 1) && KTool.getBit(r, o + 1) && Alarm.show("很遗憾，" + t[o] + "之触熄灭");
                if (this._currChosen && s == _ && a == r) {
                    if (1 == this._currChosen) var u = r,
                    h = t;
                    else var u = _,
                    h = n;
                    for (var l = [], o = 0; 4 > o; o++) KTool.getBit(u, o + 1) && l.push(o);
                    if (AwardManager.getItem().length) return;
                    if (l.length > 0) {
                        var g = l[Math.floor(Math.random() * l.length)];
                        Alarm.show("恭喜你，成功点亮" + h[g] + "之触")
                    }
                }
            }
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.BruteSorensenLevel4 = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenLevel4")
} (bruteSorensen || (bruteSorensen = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
bruteSorensen; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BruteSorensenLevel5Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateData()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                KTool.getBitSet([9511],
                function(t) {
                    1 == t[0] ? SocketConnection.sendByQueue(46309, [1, 0],
                    function() {
                        e.updateData()
                    }) : (console.log("领取"), SocketConnection.sendByQueue(46309, [2, 0],
                    function() {
                        e.updateData()
                    }))
                })
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                PetManager.isDefaultPet(2e3) ? KTool.getBitSet([9511],
                function(t) {
                    1 == t[0] ? SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 624],
                    function() {
                        BubblerManager.getInstance().showText("进化成功！"),
                        e.updateData()
                    }) : SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 623],
                    function() {
                        BubblerManager.getInstance().showText("进化成功！"),
                        e.updateData()
                    })
                }) : Alarm.show("请将索伦森至于背包首发！",
                function() {
                    ModuleManager.showModule("petBag", ["petBag"])
                })
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                var e = {};
                e.ins = 40851,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3312, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var e = {};
                e.id = 30473,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_3,
            function() {
                var e = {};
                e.id = 300066,
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        t.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([4702],
            function(t) {
                e._state = t[0],
                PetManager.checkMultiPet([2e3],
                function(t) {
                    e._hasPet = t[0],
                    e.updateView()
                })
            })
        },
        t.prototype.updateView = function() {
            for (var e = 0; 3 > e; e++) this["flag_got_" + e].visible = KTool.getBit(this._state, 2);
            this.flag_got_3.visible = this.flag_petGot.visible = !!KTool.getBit(this._state, 1),
            this.btnGet.visible = !KTool.getBit(this._state, 1) && !this._hasPet,
            this.btnUp.visible = this.grp_extra.visible = !!this._hasPet && !KTool.getBit(this._state, 1)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        t
    } (eui.Component);
    e.BruteSorensenLevel5 = t,
    __reflect(t.prototype, "bruteSorensen.BruteSorensenLevel5")
} (bruteSorensen || (bruteSorensen = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/BruteSorensenFightPopSkin.exml"] = window.BruteSorensenFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_title", "txt_award_0", "txt_award_1", "txt_award_2", "img_head", "btnFight", "btnQuick", "btnClose", "imgBtn_pet", "imgBtn_cure"],
        this.height = 443,
        this.width = 597,
        this.elementsContent = [this._Rect1_i(), this._Image1_i(), this._Image2_i(), this.txt_title_i(), this._Image3_i(), this.txt_award_0_i(), this.txt_award_1_i(), this.txt_award_2_i(), this._Image4_i(), this.img_head_i(), this._Image5_i(), this.btnFight_i(), this.btnQuick_i(), this.btnClose_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Rect1_i = function() {
        var e = new eui.Rect;
        return e.fillAlpha = 0,
        e.height = 640,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 1600,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 424,
        e.source = "brute_sorensen_fight_pop_bg_png",
        e.width = 583,
        e.x = 0,
        e.y = 19,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "brute_sorensen_fight_pop_titlebg_png",
        e.width = 164,
        e.x = 209,
        e.y = 24,
        e
    },
    n.txt_title_i = function() {
        var e = new eui.Label;
        return this.txt_title = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 30,
        e.text = "帕诺星系",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 233,
        e.y = 40,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "brute_sorensen_fight_pop_txtAward_png",
        e.width = 95,
        e.x = 238,
        e.y = 219,
        e
    },
    n.txt_award_0_i = function() {
        var e = new eui.Label;
        return this.txt_award_0 = e,
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "泰坦之灵x9999",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 219,
        e.y = 264,
        e
    },
    n.txt_award_1_i = function() {
        var e = new eui.Label;
        return this.txt_award_1 = e,
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "征服进度+20%",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 223,
        e.y = 290,
        e
    },
    n.txt_award_2_i = function() {
        var e = new eui.Label;
        return this.txt_award_2 = e,
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "星之碎片x2",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 233,
        e.y = 316,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "brute_sorensen_fight_pop_headbg_png",
        e.width = 102,
        e.x = 239,
        e.y = 103,
        e
    },
    n.img_head_i = function() {
        var e = new eui.Image;
        return this.img_head = e,
        e.height = 99,
        e.width = 100,
        e.x = 240,
        e.y = 104,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "brute_sorensen_fight_pop_line_png",
        e.width = 202,
        e.x = 184,
        e.y = 253,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 40,
        e.source = "brute_sorensen_fight_pop_btnFight_png",
        e.width = 120,
        e.x = 144,
        e.y = 358,
        e
    },
    n.btnQuick_i = function() {
        var e = new eui.Image;
        return this.btnQuick = e,
        e.height = 40,
        e.source = "brute_sorensen_fight_pop_btnQuick_png",
        e.width = 120,
        e.x = 320,
        e.y = 358,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "brute_sorensen_fight_pop_btnClose_png",
        e.width = 54,
        e.x = 543,
        e.y = 0,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_pet_png",
        e.width = 60,
        e.x = 29,
        e.y = 161,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_cure_png",
        e.width = 60,
        e.x = 29,
        e.y = 241,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenLevel1Skin.exml"] = window.BruteSorensenLevel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["level_1", "flag_defeat_1", "level_0", "flag_defeat_0", "level_2", "flag_defeat_2", "imgBtn_pet", "imgBtn_cure"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Image4_i(), this.level_1_i(), this.flag_defeat_1_i(), this.level_0_i(), this.flag_defeat_0_i(), this.level_2_i(), this.flag_defeat_2_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(27, 17, 4, 16),
        e.source = "brute_sorensen_level_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 329,
        e.source = "brute_sorensen_level_1_pet_png",
        e.width = 351,
        e.x = 78,
        e.y = 85,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "brute_sorensen_level_1_title_png",
        e.width = 127,
        e.x = 34,
        e.y = 18,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 8,
        e.size = 18,
        e.text = "使用魔君索伦森击败守护生命之树的精灵即可通\n过本关",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 66,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 68,
        e.source = "brute_sorensen_level_1_vs_png",
        e.width = 405,
        e.x = 29,
        e.y = 289,
        e
    },
    n.level_1_i = function() {
        var e = new eui.Image;
        return this.level_1 = e,
        e.height = 159,
        e.source = "brute_sorensen_level_1_level_0_png",
        e.width = 132,
        e.x = 24,
        e.y = 364,
        e
    },
    n.flag_defeat_1_i = function() {
        var e = new eui.Image;
        return this.flag_defeat_1 = e,
        e.height = 80,
        e.source = "brute_sorensen_level_1_flag_defeat_png",
        e.width = 144,
        e.x = 19,
        e.y = 411,
        e
    },
    n.level_0_i = function() {
        var e = new eui.Image;
        return this.level_0 = e,
        e.height = 146,
        e.source = "brute_sorensen_level_1_level_1_png",
        e.width = 131,
        e.x = 166,
        e.y = 377,
        e
    },
    n.flag_defeat_0_i = function() {
        var e = new eui.Image;
        return this.flag_defeat_0 = e,
        e.height = 80,
        e.source = "brute_sorensen_level_1_flag_defeat_png",
        e.width = 144,
        e.x = 160,
        e.y = 411,
        e
    },
    n.level_2_i = function() {
        var e = new eui.Image;
        return this.level_2 = e,
        e.height = 163,
        e.source = "brute_sorensen_level_1_level_2_png",
        e.width = 149,
        e.x = 296,
        e.y = 360,
        e
    },
    n.flag_defeat_2_i = function() {
        var e = new eui.Image;
        return this.flag_defeat_2 = e,
        e.height = 80,
        e.source = "brute_sorensen_level_1_flag_defeat_png",
        e.width = 144,
        e.x = 300,
        e.y = 411,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_pet_png",
        e.width = 60,
        e.x = 165,
        e.y = 548,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_cure_png",
        e.width = 60,
        e.x = 243,
        e.y = 548,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenLevel2Skin.exml"] = window.BruteSorensenLevel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAddTimes", "txt_fightTimes", "fightTimes", "btnAddItem", "txt_itemNum", "itemNum", "btnDraw", "starbg_0", "starbgSelected_0", "img_planet_0", "title_0", "txt_progress_0", "btnGo_0", "btnFast_0", "flag_finish_0", "planet_0", "starbg_1", "starbgSelected_1", "img_planet_1", "title_1", "txt_progress_1", "btnGo_1", "btnFast_1", "flag_finish_1", "planet_1", "starbg_2", "starbgSelected_2", "img_planet_2", "title_2", "txt_progress_2", "btnGo_2", "btnFast_2", "flag_finish_2", "planet_2", "starbg_3", "starbgSelected_3", "img_planet_3", "title_3", "txt_progress_3", "btnGo_3", "btnFast_3", "flag_finish_3", "planet_3"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.fightTimes_i(), this.itemNum_i(), this._Image6_i(), this.btnDraw_i(), this.planet_0_i(), this.planet_1_i(), this.planet_2_i(), this.planet_3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(27, 17, 4, 16),
        e.source = "brute_sorensen_level_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "brute_sorensen_level_2_title_png",
        e.width = 127,
        e.x = 34,
        e.y = 18,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 8,
        e.size = 18,
        e.text = "抽取挑战四大星系强者，四大星系征服度达到100%\n即可通过本关！",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = 42,
        e.y = 66,
        e
    },
    n.fightTimes_i = function() {
        var e = new eui.Group;
        return this.fightTimes = e,
        e.x = 116,
        e.y = 582,
        e.elementsContent = [this._Image3_i(), this.btnAddTimes_i(), this.txt_fightTimes_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "brute_sorensen_level_2_numbg_png",
        e.width = 257,
        e.x = 0,
        e.y = 1,
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 221,
        e.y = 0,
        e
    },
    n.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.horizontalCenter = -14.5,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 9,
        e
    },
    n.itemNum_i = function() {
        var e = new eui.Group;
        return this.itemNum = e,
        e.x = 116,
        e.y = 120,
        e.elementsContent = [this._Image4_i(), this.btnAddItem_i(), this.txt_itemNum_i(), this._Image5_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "brute_sorensen_level_2_numbg1_png",
        e.width = 218,
        e.x = 0,
        e.y = 4,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 183,
        e.y = 4,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "星之碎片：000",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 55,
        e.y = 13,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "brute_sorensen_level_2_itemIcon_png",
        e.width = 29,
        e.x = 14,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 356,
        e.source = "brute_sorensen_level_2_rect_png",
        e.width = 356,
        e.x = 48,
        e.y = 202,
        e
    },
    n.btnDraw_i = function() {
        var e = new eui.Image;
        return this.btnDraw = e,
        e.height = 148,
        e.source = "brute_sorensen_level_2_btnDraw_png",
        e.width = 148,
        e.x = 153,
        e.y = 306,
        e
    },
    n.planet_0_i = function() {
        var e = new eui.Group;
        return this.planet_0 = e,
        e.x = 38,
        e.y = 192,
        e.elementsContent = [this.starbg_0_i(), this.starbgSelected_0_i(), this.img_planet_0_i(), this.title_0_i(), this._Image7_i(), this._Label2_i(), this.txt_progress_0_i(), this.btnGo_0_i(), this.btnFast_0_i(), this.flag_finish_0_i()],
        e
    },
    n.starbg_0_i = function() {
        var e = new eui.Image;
        return this.starbg_0 = e,
        e.height = 163,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbg_png",
        e.width = 163,
        e.x = -6,
        e.y = -30,
        e
    },
    n.starbgSelected_0_i = function() {
        var e = new eui.Image;
        return this.starbgSelected_0 = e,
        e.height = 187,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbgSelected_png",
        e.visible = !1,
        e.width = 187,
        e.x = -18,
        e.y = -42,
        e
    },
    n.img_planet_0_i = function() {
        var e = new eui.Image;
        return this.img_planet_0 = e,
        e.height = 100,
        e.source = "brute_sorensen_level_2_img_planet_0_png",
        e.width = 153,
        e.x = 9,
        e.y = 0,
        e
    },
    n.title_0_i = function() {
        var e = new eui.Image;
        return this.title_0 = e,
        e.height = 32,
        e.source = "brute_sorensen_level_2_title_0_png",
        e.width = 93,
        e.x = 0,
        e.y = 42,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "brute_sorensen_level_2_txtbg_png",
        e.width = 133,
        e.x = 11,
        e.y = 69,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "征服进度：",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 24,
        e.y = 72,
        e
    },
    n.txt_progress_0_i = function() {
        var e = new eui.Label;
        return this.txt_progress_0 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "30%",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 106,
        e.y = 72,
        e
    },
    n.btnGo_0_i = function() {
        var e = new eui.Image;
        return this.btnGo_0 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnGo_png",
        e.width = 89,
        e.x = 2,
        e.y = 101,
        e
    },
    n.btnFast_0_i = function() {
        var e = new eui.Image;
        return this.btnFast_0 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnFast_png",
        e.width = 89,
        e.x = 97,
        e.y = 101,
        e
    },
    n.flag_finish_0_i = function() {
        var e = new eui.Image;
        return this.flag_finish_0 = e,
        e.source = "brute_sorensen_level_2_flag_finish_png",
        e.visible = !0,
        e.x = 20,
        e.y = 92,
        e
    },
    n.planet_1_i = function() {
        var e = new eui.Group;
        return this.planet_1 = e,
        e.x = 257,
        e.y = 180,
        e.elementsContent = [this.starbg_1_i(), this.starbgSelected_1_i(), this.img_planet_1_i(), this.title_1_i(), this._Image8_i(), this._Label3_i(), this.txt_progress_1_i(), this.btnGo_1_i(), this.btnFast_1_i(), this.flag_finish_1_i()],
        e
    },
    n.starbg_1_i = function() {
        var e = new eui.Image;
        return this.starbg_1 = e,
        e.height = 163,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbg_png",
        e.visible = !0,
        e.width = 163,
        e.x = -1,
        e.y = -18,
        e
    },
    n.starbgSelected_1_i = function() {
        var e = new eui.Image;
        return this.starbgSelected_1 = e,
        e.height = 187,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbgSelected_png",
        e.visible = !1,
        e.width = 187,
        e.x = -13,
        e.y = -30,
        e
    },
    n.img_planet_1_i = function() {
        var e = new eui.Image;
        return this.img_planet_1 = e,
        e.height = 90,
        e.source = "brute_sorensen_level_2_img_planet_1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.title_1_i = function() {
        var e = new eui.Image;
        return this.title_1 = e,
        e.height = 32,
        e.source = "brute_sorensen_level_2_title_1_png",
        e.width = 92,
        e.x = 10,
        e.y = 54,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "brute_sorensen_level_2_txtbg_png",
        e.width = 133,
        e.x = 20,
        e.y = 81,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "征服进度：",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 33,
        e.y = 84,
        e
    },
    n.txt_progress_1_i = function() {
        var e = new eui.Label;
        return this.txt_progress_1 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "30%",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 115,
        e.y = 84,
        e
    },
    n.btnGo_1_i = function() {
        var e = new eui.Image;
        return this.btnGo_1 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnGo_png",
        e.width = 89,
        e.x = 2,
        e.y = 113,
        e
    },
    n.btnFast_1_i = function() {
        var e = new eui.Image;
        return this.btnFast_1 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnFast_png",
        e.width = 89,
        e.x = 97,
        e.y = 113,
        e
    },
    n.flag_finish_1_i = function() {
        var e = new eui.Image;
        return this.flag_finish_1 = e,
        e.source = "brute_sorensen_level_2_flag_finish_png",
        e.visible = !0,
        e.x = 20,
        e.y = 104,
        e
    },
    n.planet_2_i = function() {
        var e = new eui.Group;
        return this.planet_2 = e,
        e.x = 38,
        e.y = 392,
        e.elementsContent = [this.starbg_2_i(), this.starbgSelected_2_i(), this.img_planet_2_i(), this.title_2_i(), this._Image9_i(), this._Label4_i(), this.txt_progress_2_i(), this.btnGo_2_i(), this.btnFast_2_i(), this.flag_finish_2_i()],
        e
    },
    n.starbg_2_i = function() {
        var e = new eui.Image;
        return this.starbg_2 = e,
        e.height = 163,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbg_png",
        e.width = 163,
        e.x = -6,
        e.y = -4,
        e
    },
    n.starbgSelected_2_i = function() {
        var e = new eui.Image;
        return this.starbgSelected_2 = e,
        e.height = 187,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbgSelected_png",
        e.visible = !1,
        e.width = 187,
        e.x = -18,
        e.y = -16,
        e
    },
    n.img_planet_2_i = function() {
        var e = new eui.Image;
        return this.img_planet_2 = e,
        e.height = 113,
        e.source = "brute_sorensen_level_2_img_planet_2_png",
        e.width = 130,
        e.x = 21,
        e.y = 0,
        e
    },
    n.title_2_i = function() {
        var e = new eui.Image;
        return this.title_2 = e,
        e.height = 32,
        e.source = "brute_sorensen_level_2_title_2_png",
        e.width = 92,
        e.x = 0,
        e.y = 67,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "brute_sorensen_level_2_txtbg_png",
        e.width = 133,
        e.x = 10,
        e.y = 94,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "征服进度：",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 23,
        e.y = 97,
        e
    },
    n.txt_progress_2_i = function() {
        var e = new eui.Label;
        return this.txt_progress_2 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "30%",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 105,
        e.y = 97,
        e
    },
    n.btnGo_2_i = function() {
        var e = new eui.Image;
        return this.btnGo_2 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnGo_png",
        e.width = 89,
        e.x = 2,
        e.y = 126,
        e
    },
    n.btnFast_2_i = function() {
        var e = new eui.Image;
        return this.btnFast_2 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnFast_png",
        e.width = 89,
        e.x = 97,
        e.y = 126,
        e
    },
    n.flag_finish_2_i = function() {
        var e = new eui.Image;
        return this.flag_finish_2 = e,
        e.source = "brute_sorensen_level_2_flag_finish_png",
        e.visible = !0,
        e.x = 20,
        e.y = 117,
        e
    },
    n.planet_3_i = function() {
        var e = new eui.Group;
        return this.planet_3 = e,
        e.x = 259,
        e.y = 414,
        e.elementsContent = [this.starbg_3_i(), this.starbgSelected_3_i(), this.img_planet_3_i(), this.title_3_i(), this._Image10_i(), this._Label5_i(), this.txt_progress_3_i(), this.btnGo_3_i(), this.btnFast_3_i(), this.flag_finish_3_i()],
        e
    },
    n.starbg_3_i = function() {
        var e = new eui.Image;
        return this.starbg_3 = e,
        e.height = 163,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbg_png",
        e.width = 163,
        e.x = -3,
        e.y = -26,
        e
    },
    n.starbgSelected_3_i = function() {
        var e = new eui.Image;
        return this.starbgSelected_3 = e,
        e.height = 187,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "brute_sorensen_level_2_starbgSelected_png",
        e.visible = !1,
        e.width = 187,
        e.x = -15,
        e.y = -38,
        e
    },
    n.img_planet_3_i = function() {
        var e = new eui.Image;
        return this.img_planet_3 = e,
        e.height = 84,
        e.source = "brute_sorensen_level_2_img_planet_3_png",
        e.width = 147,
        e.x = 0,
        e.y = 0,
        e
    },
    n.title_3_i = function() {
        var e = new eui.Image;
        return this.title_3 = e,
        e.height = 32,
        e.source = "brute_sorensen_level_2_title_3_png",
        e.width = 93,
        e.x = 7,
        e.y = 45,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "brute_sorensen_level_2_txtbg_png",
        e.width = 133,
        e.x = 18,
        e.y = 72,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.size = 18,
        e.text = "征服进度：",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 31,
        e.y = 75,
        e
    },
    n.txt_progress_3_i = function() {
        var e = new eui.Label;
        return this.txt_progress_3 = e,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "30%",
        e.textColor = 16773461,
        e.touchEnabled = !1,
        e.x = 113,
        e.y = 75,
        e
    },
    n.btnGo_3_i = function() {
        var e = new eui.Image;
        return this.btnGo_3 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnGo_png",
        e.width = 89,
        e.x = 2,
        e.y = 104,
        e
    },
    n.btnFast_3_i = function() {
        var e = new eui.Image;
        return this.btnFast_3 = e,
        e.height = 33,
        e.source = "brute_sorensen_level_2_btnFast_png",
        e.width = 89,
        e.x = 97,
        e.y = 104,
        e
    },
    n.flag_finish_3_i = function() {
        var e = new eui.Image;
        return this.flag_finish_3 = e,
        e.source = "brute_sorensen_level_2_flag_finish_png",
        e.visible = !0,
        e.x = 20,
        e.y = 94,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenLevel3Skin.exml"] = window.BruteSorensenLevel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["helpBtn_png", "btnAdd", "txt_fightTimes", "img_seal_0", "img_unseal_0", "label_unseal_0", "seal_0", "img_seal_1", "img_unseal_1", "label_unseal_1", "seal_1", "img_seal_2", "img_unseal_2", "label_unseal_2", "seal_2", "img_seal_3", "img_unseal_3", "label_unseal_3", "seal_3", "rate_0", "rate_1", "rate_2", "rate_3", "rate_4", "txt_progress", "imgBtn_pet", "imgBtn_cure", "btnFight", "btnQuick"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.helpBtn_png_i(), this._Group1_i(), this.seal_0_i(), this.seal_1_i(), this.seal_2_i(), this.seal_3_i(), this._Group2_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this.btnFight_i(), this.btnQuick_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(27, 17, 4, 16),
        e.source = "brute_sorensen_level_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "brute_sorensen_level_3_title_png",
        e.width = 127,
        e.x = 34,
        e.y = 18,
        e
    },
    n.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.width = 22,
        e.x = 160,
        e.y = 26,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 164,
        e.y = 573,
        e.elementsContent = [this._Image3_i(), this.btnAdd_i(), this.txt_fightTimes_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "brute_sorensen_level_2_numbg_png",
        e.width = 257,
        e.x = 0,
        e.y = 1,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 221,
        e.y = 0,
        e
    },
    n.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.horizontalCenter = -14.5,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 9,
        e
    },
    n.seal_0_i = function() {
        var e = new eui.Group;
        return this.seal_0 = e,
        e.x = 56,
        e.y = 128,
        e.elementsContent = [this.img_seal_0_i(), this.img_unseal_0_i(), this.label_unseal_0_i()],
        e
    },
    n.img_seal_0_i = function() {
        var e = new eui.Image;
        return this.img_seal_0 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_seal_0_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img_unseal_0_i = function() {
        var e = new eui.Image;
        return this.img_unseal_0 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_unseal_0_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.label_unseal_0_i = function() {
        var e = new eui.Image;
        return this.label_unseal_0 = e,
        e.height = 23,
        e.source = "brute_sorensen_level_3_label_unseal_png",
        e.width = 119,
        e.x = 21,
        e.y = 72,
        e
    },
    n.seal_1_i = function() {
        var e = new eui.Group;
        return this.seal_1 = e,
        e.x = 242,
        e.y = 128,
        e.elementsContent = [this.img_seal_1_i(), this.img_unseal_1_i(), this.label_unseal_1_i()],
        e
    },
    n.img_seal_1_i = function() {
        var e = new eui.Image;
        return this.img_seal_1 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_seal_1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img_unseal_1_i = function() {
        var e = new eui.Image;
        return this.img_unseal_1 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_unseal_1_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.label_unseal_1_i = function() {
        var e = new eui.Image;
        return this.label_unseal_1 = e,
        e.height = 23,
        e.source = "brute_sorensen_level_3_label_unseal_png",
        e.width = 119,
        e.x = 21,
        e.y = 72,
        e
    },
    n.seal_2_i = function() {
        var e = new eui.Group;
        return this.seal_2 = e,
        e.x = 56,
        e.y = 297,
        e.elementsContent = [this.img_seal_2_i(), this.img_unseal_2_i(), this.label_unseal_2_i()],
        e
    },
    n.img_seal_2_i = function() {
        var e = new eui.Image;
        return this.img_seal_2 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_seal_2_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img_unseal_2_i = function() {
        var e = new eui.Image;
        return this.img_unseal_2 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_unseal_2_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.label_unseal_2_i = function() {
        var e = new eui.Image;
        return this.label_unseal_2 = e,
        e.height = 23,
        e.source = "brute_sorensen_level_3_label_unseal_png",
        e.width = 119,
        e.x = 21,
        e.y = 72,
        e
    },
    n.seal_3_i = function() {
        var e = new eui.Group;
        return this.seal_3 = e,
        e.x = 242,
        e.y = 297,
        e.elementsContent = [this.img_seal_3_i(), this.img_unseal_3_i(), this.label_unseal_3_i()],
        e
    },
    n.img_seal_3_i = function() {
        var e = new eui.Image;
        return this.img_seal_3 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_seal_3_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.img_unseal_3_i = function() {
        var e = new eui.Image;
        return this.img_unseal_3 = e,
        e.height = 162,
        e.source = "brute_sorensen_level_3_img_unseal_3_png",
        e.width = 162,
        e.x = 0,
        e.y = 0,
        e
    },
    n.label_unseal_3_i = function() {
        var e = new eui.Image;
        return this.label_unseal_3 = e,
        e.height = 23,
        e.source = "brute_sorensen_level_3_label_unseal_png",
        e.width = 119,
        e.x = 21,
        e.y = 72,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 58,
        e.y = 71,
        e.elementsContent = [this._Image4_i(), this.rate_0_i(), this.rate_1_i(), this.rate_2_i(), this.rate_3_i(), this.rate_4_i(), this.txt_progress_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 48,
        e.source = "brute_sorensen_level_3_jindubg_png",
        e.width = 345,
        e.x = 0,
        e.y = 0,
        e
    },
    n.rate_0_i = function() {
        var e = new eui.Image;
        return this.rate_0 = e,
        e.height = 21,
        e.source = "brute_sorensen_level_3_rate_png",
        e.width = 67,
        e.x = 20,
        e.y = 28,
        e
    },
    n.rate_1_i = function() {
        var e = new eui.Image;
        return this.rate_1 = e,
        e.height = 21,
        e.source = "brute_sorensen_level_3_rate_png",
        e.width = 67,
        e.x = 79,
        e.y = 28,
        e
    },
    n.rate_2_i = function() {
        var e = new eui.Image;
        return this.rate_2 = e,
        e.height = 21,
        e.source = "brute_sorensen_level_3_rate_png",
        e.width = 67,
        e.x = 138,
        e.y = 28,
        e
    },
    n.rate_3_i = function() {
        var e = new eui.Image;
        return this.rate_3 = e,
        e.height = 21,
        e.source = "brute_sorensen_level_3_rate_png",
        e.width = 67,
        e.x = 197,
        e.y = 28,
        e
    },
    n.rate_4_i = function() {
        var e = new eui.Image;
        return this.rate_4 = e,
        e.height = 21,
        e.source = "brute_sorensen_level_3_rate_png",
        e.width = 67,
        e.x = 256,
        e.y = 28,
        e
    },
    n.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "破封进度：20%",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 107,
        e.y = 7,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_pet_png",
        e.width = 60,
        e.x = 38,
        e.y = 559,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_cure_png",
        e.width = 60,
        e.x = 106,
        e.y = 559,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.height = 40,
        e.source = "brute_sorensen_level_3_btnFight_png",
        e.width = 110,
        e.x = 105,
        e.y = 482,
        e
    },
    n.btnQuick_i = function() {
        var e = new eui.Image;
        return this.btnQuick = e,
        e.height = 40,
        e.source = "brute_sorensen_level_3_btnQuick_png",
        e.width = 110,
        e.x = 245,
        e.y = 482,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenLevel4Skin.exml"] = window.BruteSorensenLevel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["helpBtn_png", "btnAdd_times", "txt_fightTimes", "imgBtn_pet", "imgBtn_cure", "darkTag_0_down", "darkTag_1_down", "darkTag_2_down", "darkTag_3_down", "darkTag_0_up", "darkTag_1_up", "darkTag_2_up", "darkTag_3_up", "btnFight_dark", "btnFastFight_dark", "btnAdd_dark", "txt_darkNum", "btnSynthesis_dark", "lightTag_0_down", "lightTag_1_down", "lightTag_2_down", "lightTag_3_down", "lightTag_0_up", "lightTag_1_up", "lightTag_2_up", "lightTag_3_up", "btnFight_light", "btnFastFight_light", "btnSynthesis_light", "btnAdd_light", "txt_lightNum"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.helpBtn_png_i(), this._Group1_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i(), this._Group2_i(), this._Group3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(27, 17, 4, 16),
        e.source = "brute_sorensen_level_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "brute_sorensen_level_4_title_png",
        e.width = 127,
        e.x = 34,
        e.y = 18,
        e
    },
    n.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.height = 25,
        e.source = "common_help_icon_png",
        e.width = 22,
        e.x = 160,
        e.y = 26,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 164,
        e.y = 573,
        e.elementsContent = [this._Image3_i(), this.btnAdd_times_i(), this.txt_fightTimes_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "brute_sorensen_level_2_numbg_png",
        e.width = 257,
        e.x = 0,
        e.y = 1,
        e
    },
    n.btnAdd_times_i = function() {
        var e = new eui.Image;
        return this.btnAdd_times = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 221,
        e.y = 0,
        e
    },
    n.txt_fightTimes_i = function() {
        var e = new eui.Label;
        return this.txt_fightTimes = e,
        e.horizontalCenter = -14.5,
        e.lineSpacing = 3,
        e.size = 18,
        e.text = "今日剩余挑战次数：4/5",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.y = 9,
        e
    },
    n.imgBtn_pet_i = function() {
        var e = new eui.Image;
        return this.imgBtn_pet = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_pet_png",
        e.width = 60,
        e.x = 38,
        e.y = 559,
        e
    },
    n.imgBtn_cure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_cure = e,
        e.height = 60,
        e.source = "brute_sorensen_level_1_imgBtn_cure_png",
        e.width = 60,
        e.x = 106,
        e.y = 559,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 27,
        e.y = 290,
        e.elementsContent = [this._Image4_i(), this.darkTag_0_down_i(), this.darkTag_1_down_i(), this.darkTag_2_down_i(), this.darkTag_3_down_i(), this.darkTag_0_up_i(), this.darkTag_1_up_i(), this.darkTag_2_up_i(), this.darkTag_3_up_i(), this.btnFight_dark_i(), this.btnFastFight_dark_i(), this.btnAdd_dark_i(), this.txt_darkNum_i(), this.btnSynthesis_dark_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 248,
        e.source = "brute_sorensen_level_4_redbg_png",
        e.touchEnabled = !1,
        e.width = 410,
        e.x = 0,
        e.y = 0,
        e
    },
    n.darkTag_0_down_i = function() {
        var e = new eui.Image;
        return this.darkTag_0_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_darkTag_0_down_png",
        e.width = 177,
        e.x = 14,
        e.y = 116,
        e
    },
    n.darkTag_1_down_i = function() {
        var e = new eui.Image;
        return this.darkTag_1_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_darkTag_1_down_png",
        e.width = 177,
        e.x = 67,
        e.y = 55,
        e
    },
    n.darkTag_2_down_i = function() {
        var e = new eui.Image;
        return this.darkTag_2_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_darkTag_2_down_png",
        e.visible = !0,
        e.width = 177,
        e.x = 175,
        e.y = 116,
        e
    },
    n.darkTag_3_down_i = function() {
        var e = new eui.Image;
        return this.darkTag_3_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_darkTag_3_down_png",
        e.width = 177,
        e.x = 220,
        e.y = 55,
        e
    },
    n.darkTag_0_up_i = function() {
        var e = new eui.Image;
        return this.darkTag_0_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_darkTag_0_up_png",
        e.width = 153,
        e.x = 26,
        e.y = 131,
        e
    },
    n.darkTag_1_up_i = function() {
        var e = new eui.Image;
        return this.darkTag_1_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_darkTag_1_up_png",
        e.width = 153,
        e.x = 79,
        e.y = 70,
        e
    },
    n.darkTag_2_up_i = function() {
        var e = new eui.Image;
        return this.darkTag_2_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_darkTag_2_up_png",
        e.width = 153,
        e.x = 187,
        e.y = 131,
        e
    },
    n.darkTag_3_up_i = function() {
        var e = new eui.Image;
        return this.darkTag_3_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_darkTag_3_up_png",
        e.width = 153,
        e.x = 232,
        e.y = 70,
        e
    },
    n.btnFight_dark_i = function() {
        var e = new eui.Image;
        return this.btnFight_dark = e,
        e.height = 45,
        e.source = "brute_sorensen_level_4_btnFight_dark_png",
        e.width = 151,
        e.x = 111,
        e.y = 203,
        e
    },
    n.btnFastFight_dark_i = function() {
        var e = new eui.Image;
        return this.btnFastFight_dark = e,
        e.source = "brute_sorensen_level_4_btnFastFight_dark_png",
        e.x = 238,
        e.y = 201,
        e
    },
    n.btnAdd_dark_i = function() {
        var e = new eui.Image;
        return this.btnAdd_dark = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 362,
        e.y = 6,
        e
    },
    n.txt_darkNum_i = function() {
        var e = new eui.Label;
        return this.txt_darkNum = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "魔君之息：25",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 229,
        e.y = 14,
        e
    },
    n.btnSynthesis_dark_i = function() {
        var e = new eui.Image;
        return this.btnSynthesis_dark = e,
        e.height = 34,
        e.source = "brute_sorensen_level_4_btnSynthesis_1_png",
        e.width = 110,
        e.x = 6,
        e.y = 207,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.touchEnabled = !1,
        e.x = 27,
        e.y = 73,
        e.elementsContent = [this._Image5_i(), this.lightTag_0_down_i(), this.lightTag_1_down_i(), this.lightTag_2_down_i(), this.lightTag_3_down_i(), this.lightTag_0_up_i(), this.lightTag_1_up_i(), this.lightTag_2_up_i(), this.lightTag_3_up_i(), this.btnFight_light_i(), this.btnFastFight_light_i(), this.btnSynthesis_light_i(), this.btnAdd_light_i(), this.txt_lightNum_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 250,
        e.source = "brute_sorensen_level_4_orangebg_png",
        e.touchEnabled = !1,
        e.width = 410,
        e.x = 0,
        e.y = 15,
        e
    },
    n.lightTag_0_down_i = function() {
        var e = new eui.Image;
        return this.lightTag_0_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_lightTag_0_down_png",
        e.width = 177,
        e.x = 14,
        e.y = 61,
        e
    },
    n.lightTag_1_down_i = function() {
        var e = new eui.Image;
        return this.lightTag_1_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_lightTag_3_down_png",
        e.width = 177,
        e.x = 67,
        e.y = 0,
        e
    },
    n.lightTag_2_down_i = function() {
        var e = new eui.Image;
        return this.lightTag_2_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_lightTag_1_down_png",
        e.width = 177,
        e.x = 175,
        e.y = 61,
        e
    },
    n.lightTag_3_down_i = function() {
        var e = new eui.Image;
        return this.lightTag_3_down = e,
        e.height = 77,
        e.source = "brute_sorensen_level_4_lightTag_2_down_png",
        e.width = 177,
        e.x = 220,
        e.y = 0,
        e
    },
    n.lightTag_0_up_i = function() {
        var e = new eui.Image;
        return this.lightTag_0_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_lightTag_0_up_png",
        e.width = 153,
        e.x = 26,
        e.y = 76,
        e
    },
    n.lightTag_1_up_i = function() {
        var e = new eui.Image;
        return this.lightTag_1_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_lightTag_3_up_png",
        e.width = 153,
        e.x = 79,
        e.y = 15,
        e
    },
    n.lightTag_2_up_i = function() {
        var e = new eui.Image;
        return this.lightTag_2_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_lightTag_1_up_png",
        e.width = 153,
        e.x = 187,
        e.y = 76,
        e
    },
    n.lightTag_3_up_i = function() {
        var e = new eui.Image;
        return this.lightTag_3_up = e,
        e.height = 47,
        e.source = "brute_sorensen_level_4_lightTag_2_up_png",
        e.width = 153,
        e.x = 232,
        e.y = 15,
        e
    },
    n.btnFight_light_i = function() {
        var e = new eui.Image;
        return this.btnFight_light = e,
        e.height = 45,
        e.source = "brute_sorensen_level_4_btnFight_light_png",
        e.width = 151,
        e.x = 119,
        e.y = 148,
        e
    },
    n.btnFastFight_light_i = function() {
        var e = new eui.Image;
        return this.btnFastFight_light = e,
        e.height = 45,
        e.source = "brute_sorensen_level_4_btnFastFight_png",
        e.width = 151,
        e.x = 255,
        e.y = 148,
        e
    },
    n.btnSynthesis_light_i = function() {
        var e = new eui.Image;
        return this.btnSynthesis_light = e,
        e.height = 34,
        e.source = "brute_sorensen_level_4_btnSynthesis_png",
        e.width = 110,
        e.x = 6,
        e.y = 152,
        e
    },
    n.btnAdd_light_i = function() {
        var e = new eui.Image;
        return this.btnAdd_light = e,
        e.height = 34,
        e.source = "brute_sorensen_level_2_btnAdd_png",
        e.width = 36,
        e.x = 148,
        e.y = 223,
        e
    },
    n.txt_lightNum_i = function() {
        var e = new eui.Label;
        return this.txt_lightNum = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "圣灵之息：25",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 14,
        e.y = 231,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenLevel5Skin.exml"] = window.BruteSorensenLevel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnGet", "btnUp", "icon_0", "flag_got_0", "icon_1", "flag_got_1", "icon_2", "flag_got_2", "btnBuy", "icon_3", "flag_got_3", "grp_extra", "flag_petGot"],
        this.height = 640,
        this.width = 449,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnGet_i(), this.btnUp_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.btnBuy_i(), this.grp_extra_i(), this.flag_petGot_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.scale9Grid = new egret.Rectangle(27, 17, 4, 16),
        e.source = "brute_sorensen_level_bg_png",
        e.width = 449,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 329,
        e.source = "brute_sorensen_level_5_pet_png",
        e.width = 351,
        e.x = 78,
        e.y = 85,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "brute_sorensen_level_5_title_png",
        e.width = 184,
        e.x = 34,
        e.y = 18,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 7,
        e.source = "brute_sorensen_level_5_line2_png",
        e.width = 405,
        e.x = 29,
        e.y = 404,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 69,
        e.source = "brute_sorensen_level_5_btnGet_png",
        e.width = 275,
        e.x = 107,
        e.y = 326,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.height = 69,
        e.source = "brute_sorensen_level_5_btnUp_png",
        e.width = 275,
        e.x = 107,
        e.y = 326,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 52,
        e.y = 430,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.icon_0_i(), this.flag_got_0_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "brute_sorensen_level_5_label_0_png",
        e.width = 92,
        e.x = 14,
        e.y = 100,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 104,
        e.source = "brute_sorensen_level_5_iconbg_png",
        e.width = 104,
        e.x = 9,
        e.y = 0,
        e
    },
    n.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 49,
        e.source = "brute_sorensen_level_5_40851_png",
        e.width = 52,
        e.x = 35,
        e.y = 27,
        e
    },
    n.flag_got_0_i = function() {
        var e = new eui.Image;
        return this.flag_got_0 = e,
        e.height = 46,
        e.source = "brute_sorensen_level_5_flag_got_png",
        e.width = 120,
        e.x = 0,
        e.y = 31,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 170,
        e.y = 430,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this.icon_1_i(), this.flag_got_1_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "brute_sorensen_level_5_label_1_png",
        e.width = 93,
        e.x = 14,
        e.y = 100,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 104,
        e.source = "brute_sorensen_level_5_iconbg_png",
        e.width = 104,
        e.x = 9,
        e.y = 0,
        e
    },
    n.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 49,
        e.source = "brute_sorensen_level_5_icon_texing_png",
        e.width = 43,
        e.x = 41,
        e.y = 27,
        e
    },
    n.flag_got_1_i = function() {
        var e = new eui.Image;
        return this.flag_got_1 = e,
        e.height = 46,
        e.source = "brute_sorensen_level_5_flag_got_png",
        e.width = 120,
        e.x = 0,
        e.y = 31,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 287,
        e.y = 430,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this.icon_2_i(), this.flag_got_2_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "brute_sorensen_level_5_label_2_png",
        e.width = 93,
        e.x = 14,
        e.y = 100,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 104,
        e.source = "brute_sorensen_level_5_iconbg_png",
        e.width = 104,
        e.x = 9,
        e.y = 0,
        e
    },
    n.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.height = 48,
        e.source = "brute_sorensen_level_5_icon_1_png",
        e.width = 45,
        e.x = 38,
        e.y = 29,
        e
    },
    n.flag_got_2_i = function() {
        var e = new eui.Image;
        return this.flag_got_2 = e,
        e.height = 46,
        e.source = "brute_sorensen_level_5_flag_got_png",
        e.width = 120,
        e.x = 0,
        e.y = 31,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.height = 19,
        e.source = "brute_sorensen_level_5_btnBuy_png",
        e.width = 239,
        e.x = 111,
        e.y = 581,
        e
    },
    n.grp_extra_i = function() {
        var e = new eui.Group;
        return this.grp_extra = e,
        e.x = 239,
        e.y = 47,
        e.elementsContent = [this._Label1_i(), this._Image11_i(), this.icon_3_i(), this.flag_got_3_i()],
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.lineSpacing = 3,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "使用索伦森进化额外奖励：",
        e.textColor = 16118515,
        e.touchEnabled = !1,
        e.x = -197,
        e.y = 19,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.source = "brute_sorensen_level_5_iconbg_s_png",
        e.width = 55,
        e.x = 32,
        e.y = 0,
        e
    },
    n.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.height = 27,
        e.source = "brute_sorensen_level_5_300066_png",
        e.width = 28,
        e.x = 46,
        e.y = 14,
        e
    },
    n.flag_got_3_i = function() {
        var e = new eui.Image;
        return this.flag_got_3 = e,
        e.height = 47,
        e.source = "brute_sorensen_level_5_flag_got_png",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 4,
        e
    },
    n.flag_petGot_i = function() {
        var e = new eui.Image;
        return this.flag_petGot = e,
        e.height = 76,
        e.source = "brute_sorensen_level_5_flag_petGot_png",
        e.width = 264,
        e.x = 91,
        e.y = 194,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BruteSorensenSkin.exml"] = window.BruteSorensenSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "_scr", "level_0_bg", "btnPass_0", "txt_tips_0", "tips_0", "flag_selected_0", "flag_passed_0", "level_0", "level_1_bg", "btnPass_1", "txt_tips_1", "tips_1", "flag_selected_1", "flag_passed_1", "level_1", "level_2_bg", "btnPass_2", "txt_tips_2", "tips_2", "flag_selected_2", "flag_passed_2", "level_2", "level_3_bg", "btnPass_3", "txt_tips_3", "tips_3", "flag_selected_3", "flag_passed_3", "level_3", "level_4_bg", "flag_selected_4", "level_4", "grp_level", "btnClose", "help", "btnInfo", "btnBuy", "btnGo", "_mask"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._scr_i(), this.grp_level_i(), this._Group2_i(), this.btnInfo_i(), this.btnBuy_i(), this._Group3_i(), this._mask_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.source = "brute_sorensen_bg_jpg",
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    n._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 328,
        e.visible = !0,
        e.percentWidth = 95,
        e.x = 30,
        e.y = 156,
        e
    },
    n.grp_level_i = function() {
        var e = new eui.Group;
        return this.grp_level = e,
        e.visible = !0,
        e.y = 156,
        e.elementsContent = [this._Group1_i(), this.level_0_i(), this.level_1_i(), this.level_2_i(), this.level_3_i(), this.level_4_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.touchChildren = !1,
        e.touchEnabled = !1,
        e.x = 232,
        e.y = 121,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "brute_sorensen_line_4_png",
        e.width = 205,
        e.x = 1111,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 61,
        e.source = "brute_sorensen_line_3_png",
        e.width = 61,
        e.x = 765,
        e.y = 10,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "brute_sorensen_line_2_png",
        e.width = 107,
        e.x = 497,
        e.y = 78,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 65,
        e.source = "brute_sorensen_line_1_png",
        e.width = 148,
        e.x = 0,
        e.y = 62,
        e
    },
    n.level_0_i = function() {
        var e = new eui.Group;
        return this.level_0 = e,
        e.x = 0,
        e.y = 5,
        e.elementsContent = [this.level_0_bg_i(), this.btnPass_0_i(), this.tips_0_i(), this.flag_selected_0_i(), this.flag_passed_0_i()],
        e
    },
    n.level_0_bg_i = function() {
        var e = new eui.Image;
        return this.level_0_bg = e,
        e.height = 133,
        e.source = "brute_sorensen_level_0_bg_png",
        e.width = 428,
        e.x = 17,
        e.y = 19,
        e
    },
    n.btnPass_0_i = function() {
        var e = new eui.Image;
        return this.btnPass_0 = e,
        e.height = 40,
        e.source = "brute_sorensen_btnPass_png",
        e.width = 110,
        e.x = 143,
        e.y = 133,
        e
    },
    n.tips_0_i = function() {
        var e = new eui.Group;
        return this.tips_0 = e,
        e.x = 76,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.txt_tips_0_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "brute_sorensen_lebelBg_png",
        e.width = 323,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_tips_0_i = function() {
        var e = new eui.Label;
        return this.txt_tips_0 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "通关后，至尊获得以优惠30钻",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 29,
        e.y = 3,
        e
    },
    n.flag_selected_0_i = function() {
        var e = new eui.Image;
        return this.flag_selected_0 = e,
        e.height = 144,
        e.source = "brute_sorensen_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 428,
        e.x = 0,
        e.y = 10,
        e
    },
    n.flag_passed_0_i = function() {
        var e = new eui.Image;
        return this.flag_passed_0 = e,
        e.height = 77,
        e.source = "brute_sorensen_flag_passed_png",
        e.width = 264,
        e.x = 68,
        e.y = 45,
        e
    },
    n.level_1_i = function() {
        var e = new eui.Group;
        return this.level_1 = e,
        e.x = 355,
        e.y = 159,
        e.elementsContent = [this.level_1_bg_i(), this.btnPass_1_i(), this.tips_1_i(), this.flag_selected_1_i(), this.flag_passed_1_i()],
        e
    },
    n.level_1_bg_i = function() {
        var e = new eui.Image;
        return this.level_1_bg = e,
        e.height = 133,
        e.source = "brute_sorensen_level_1_bg_png",
        e.width = 428,
        e.x = 2,
        e.y = 15,
        e
    },
    n.btnPass_1_i = function() {
        var e = new eui.Image;
        return this.btnPass_1 = e,
        e.height = 40,
        e.source = "brute_sorensen_btnPass_png",
        e.width = 110,
        e.x = 128,
        e.y = 129,
        e
    },
    n.tips_1_i = function() {
        var e = new eui.Group;
        return this.tips_1 = e,
        e.x = 26,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this.txt_tips_1_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "brute_sorensen_lebelBg_png",
        e.width = 323,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_tips_1_i = function() {
        var e = new eui.Label;
        return this.txt_tips_1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "通关后，至尊获得将优惠120钻",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 18,
        e.y = 4,
        e
    },
    n.flag_selected_1_i = function() {
        var e = new eui.Image;
        return this.flag_selected_1 = e,
        e.height = 144,
        e.source = "brute_sorensen_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 428,
        e.x = 0,
        e.y = 6,
        e
    },
    n.flag_passed_1_i = function() {
        var e = new eui.Image;
        return this.flag_passed_1 = e,
        e.height = 77,
        e.source = "brute_sorensen_flag_passed_png",
        e.width = 264,
        e.x = 68,
        e.y = 45,
        e
    },
    n.level_2_i = function() {
        var e = new eui.Group;
        return this.level_2 = e,
        e.x = 684,
        e.y = 24,
        e.elementsContent = [this.level_2_bg_i(), this.btnPass_2_i(), this.tips_2_i(), this.flag_selected_2_i(), this.flag_passed_2_i()],
        e
    },
    n.level_2_bg_i = function() {
        var e = new eui.Image;
        return this.level_2_bg = e,
        e.height = 133,
        e.source = "brute_sorensen_level_2_bg_png",
        e.width = 428,
        e.x = 2,
        e.y = 15,
        e
    },
    n.btnPass_2_i = function() {
        var e = new eui.Image;
        return this.btnPass_2 = e,
        e.height = 40,
        e.source = "brute_sorensen_btnPass_png",
        e.width = 110,
        e.x = 128,
        e.y = 129,
        e
    },
    n.tips_2_i = function() {
        var e = new eui.Group;
        return this.tips_2 = e,
        e.x = 54,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this.txt_tips_2_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "brute_sorensen_lebelBg_png",
        e.width = 323,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_tips_2_i = function() {
        var e = new eui.Label;
        return this.txt_tips_2 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "通关后，至尊获得将优惠340钻",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 18,
        e.y = 4,
        e
    },
    n.flag_selected_2_i = function() {
        var e = new eui.Image;
        return this.flag_selected_2 = e,
        e.height = 144,
        e.source = "brute_sorensen_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 428,
        e.x = 0,
        e.y = 6,
        e
    },
    n.flag_passed_2_i = function() {
        var e = new eui.Image;
        return this.flag_passed_2 = e,
        e.height = 77,
        e.source = "brute_sorensen_flag_passed_png",
        e.width = 264,
        e.x = 68,
        e.y = 45,
        e
    },
    n.level_3_i = function() {
        var e = new eui.Group;
        return this.level_3 = e,
        e.x = 996,
        e.y = 134,
        e.elementsContent = [this.level_3_bg_i(), this.btnPass_3_i(), this.tips_3_i(), this.flag_selected_3_i(), this.flag_passed_3_i()],
        e
    },
    n.level_3_bg_i = function() {
        var e = new eui.Image;
        return this.level_3_bg = e,
        e.height = 133,
        e.source = "brute_sorensen_level_3_bg_png",
        e.width = 428,
        e.x = 2,
        e.y = 14,
        e
    },
    n.btnPass_3_i = function() {
        var e = new eui.Image;
        return this.btnPass_3 = e,
        e.height = 40,
        e.source = "brute_sorensen_btnPass_png",
        e.width = 110,
        e.x = 128,
        e.y = 128,
        e
    },
    n.tips_3_i = function() {
        var e = new eui.Group;
        return this.tips_3 = e,
        e.x = 56,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this.txt_tips_3_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "brute_sorensen_lebelBg_png",
        e.width = 323,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_tips_3_i = function() {
        var e = new eui.Label;
        return this.txt_tips_3 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.lineSpacing = 3,
        e.size = 20,
        e.text = "通关后，将可进化【索伦森】",
        e.textColor = 16777215,
        e.touchEnabled = !1,
        e.x = 38,
        e.y = 4,
        e
    },
    n.flag_selected_3_i = function() {
        var e = new eui.Image;
        return this.flag_selected_3 = e,
        e.height = 144,
        e.source = "brute_sorensen_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 428,
        e.x = 0,
        e.y = 5,
        e
    },
    n.flag_passed_3_i = function() {
        var e = new eui.Image;
        return this.flag_passed_3 = e,
        e.height = 77,
        e.source = "brute_sorensen_flag_passed_png",
        e.width = 264,
        e.x = 68,
        e.y = 45,
        e
    },
    n.level_4_i = function() {
        var e = new eui.Group;
        return this.level_4 = e,
        e.x = 1357,
        e.y = 0,
        e.elementsContent = [this.level_4_bg_i(), this.flag_selected_4_i()],
        e
    },
    n.level_4_bg_i = function() {
        var e = new eui.Image;
        return this.level_4_bg = e,
        e.height = 133,
        e.source = "brute_sorensen_level_4_bg_png",
        e.width = 428,
        e.x = 2,
        e.y = 9,
        e
    },
    n.flag_selected_4_i = function() {
        var e = new eui.Image;
        return this.flag_selected_4 = e,
        e.height = 144,
        e.source = "brute_sorensen_flag_selected_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 428,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.btnClose_i(), this.help_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 50,
        e.source = "brute_sorensen_up_bg_png",
        e.width = 145,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_close_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.help_i = function() {
        var e = new eui.Image;
        return this.help = e,
        e.height = 38,
        e.source = "brute_sorensen_help_png",
        e.width = 34,
        e.x = 133,
        e.y = 7,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.height = 74,
        e.horizontalCenter = 57,
        e.source = "brute_sorensen_btnInfo_png",
        e.width = 94,
        e.y = 537,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.height = 74,
        e.horizontalCenter = -47,
        e.source = "brute_sorensen_btnBuy_png",
        e.width = 94,
        e.y = 537,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 100,
        e.right = 0,
        e.width = 320,
        e.y = 524,
        e.elementsContent = [this.btnGo_i(), this._Image10_i(), this._Label1_i()],
        e
    },
    n.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.height = 100,
        e.source = "brute_sorensen_btnGo_png",
        e.width = 233,
        e.x = 87,
        e.y = 0,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 10,
        e.source = "brute_sorensen_img_j_png",
        e.width = 39,
        e.x = 39,
        e.y = 81,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "进化必需",
        e.textColor = 8201781,
        e.x = 0,
        e.y = 56,
        e
    },
    n._mask_i = function() {
        var e = new eui.Rect;
        return this._mask = e,
        e.fillAlpha = .4,
        e.height = 640,
        e.visible = !1,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin);