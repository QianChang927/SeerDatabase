var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
demonKingGirod; !
function(t) {
    var n = function(n) {
        function i() {
            return n.call(this) || this
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            n.prototype.childrenCreated.call(this),
            t.DemonKingGirodManager.getInstance().bind(this),
            this.openPanel(1)
        },
        i.prototype.openPanel = function(n) {
            var i;
            1 == n ? i = new t.DKMain: 2 == n ? (i = new t.DKMain, StatLogger.log("20210827版本系统功能", "妖王·吉罗德关卡", "进入妖王·吉罗德关卡面板")) : 3 == n && (i = new t.DKFight, StatLogger.log("20210827版本系统功能", "妖王·吉罗德关卡", "进入挑战关卡面板")),
            this.addChild(i)
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this),
            t.DemonKingGirodManager.getInstance().destroy()
        },
        i
    } (BaseModule);
    t.DemonKingGirod = n,
    __reflect(n.prototype, "demonKingGirod.DemonKingGirod")
} (demonKingGirod || (demonKingGirod = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
demonKingGirod; !
function(t) {
    var n = function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t)
        },
        t.prototype.bind = function(t) {
            this._main = t
        },
        t.prototype.openPanel = function(t) {
            this._main.openPanel(t)
        },
        t.prototype.destroy = function() {
            this._main = null,
            t._instance = null
        },
        t
    } ();
    t.DemonKingGirodManager = n,
    __reflect(n.prototype, "demonKingGirod.DemonKingGirodManager")
} (demonKingGirod || (demonKingGirod = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
demonKingGirod; !
function(t) {
    var n = function(n) {
        function i() {
            var t = n.call(this) || this;
            return t.skinName = DKFightSkin,
            t
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var i = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                Alert.show("离开后再次进入需要重新消耗挑战次数，确定要离开当前场景吗？",
                function() {
                    i.destroy(),
                    t.DemonKingGirodManager.getInstance().openPanel(2)
                })
            },
            this),
            this.addEvent(),
            this.refresh(),
            this.setMap(),
            this.ani1 = DragonbonesUtil.createAnimate("DKGirod_ske_json", "DKGirod_tex_json", "DKGirod_tex_png", "zhakesi"),
            this.ani1.x = 600,
            this.ani1.y = 452,
            this._main.addChild(this.ani1),
            this.ani1.animation.play("zhakesi", 0),
            this.ani2 = DragonbonesUtil.createAnimate("DKGirod_ske_json", "DKGirod_tex_json", "DKGirod_tex_png", "zhakesi"),
            this.ani2.x = 220,
            this.ani2.y = 420,
            this._main.addChild(this.ani2),
            this.ani2.animation.play("zhakesi", 0)
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.reShow, this),
            this.ani1.dispose(),
            this.ani2.dispose()
        },
        i.prototype.itemChange = function(t) {
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var n = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                Alert.show("离开后再次进入需要重新消耗挑战次数，确定要离开当前场景吗？",
                function() {
                    n.destroy(),
                    t.DemonKingGirodManager.getInstance().openPanel(2)
                })
            },
            this),
            ImageButtonUtil.add(this.btnAddHeart,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1711052,
                        productID: 248849
                    },
                    t.caller = n,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248849, i,
                        function() {
                            KTool.doExchange(9475, i,
                            function() {
                                n.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAddSignal,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1711053,
                        productID: 248850
                    },
                    t.caller = n,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248850, i,
                        function() {
                            KTool.doExchange(9476, i,
                            function() {
                                n.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.refresh, this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                var t = MathUtil.RandomRoundInt(1, 100, !0);
                18 >= t ? FightManager.fightNoMapBoss("", 8135) : FightManager.fightNoMapBoss("", 8136)
            },
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            this.numHeart = ItemManager.getNumByID(1711052),
            this.numSignal = ItemManager.getNumByID(1711053),
            this.txtHeart.text = this.numHeart.toString(),
            this.txtSignal.text = this.numSignal.toString(),
            KTool.getMultiValue([AttrConst.daily_ywjld_timeHasWin],
            function(n) {
                t.txtWinTime.text = n[0].toString()
            })
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.setMap = function() {
            var t = Math.floor(3 * Math.random());
            0 == t ? (this.imgMap1.visible = !0, this.imgMap2.visible = this.imgMap3.visible = !1, this.txtMapName.text = "灰之遗迹") : 1 == t ? (this.imgMap2.visible = !0, this.imgMap1.visible = this.imgMap3.visible = !1, this.txtMapName.text = "暗夜城") : 2 == t && (this.imgMap3.visible = !0, this.imgMap1.visible = this.imgMap2.visible = !1, this.txtMapName.text = "龙脉尽头")
        },
        i
    } (BaseModule);
    t.DKFight = n,
    __reflect(n.prototype, "demonKingGirod.DKFight")
} (demonKingGirod || (demonKingGirod = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
demonKingGirod; !
function(t) {
    var n = function(n) {
        function i() {
            var t = n.call(this) || this;
            return t.skinName = DKMainSkin,
            t
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var t = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(53, this, "",
            function() {
                t.destroy(),
                ModuleManager.hideModule("demonKingGirod")
            },
            this),
            this.adaptRightContent(this.grp_right),
            this.addEvent(),
            this.refresh(),
            this.txtBubble1.visible = !0,
            this.txtBubble2.visible = !1,
            this.interval = egret.setInterval(function() {
                t.txtBubble1.visible = !t.txtBubble1.visible,
                t.txtBubble2.visible = !t.txtBubble2.visible
            },
            this, 5e3),
            this.ani1 = DragonbonesUtil.createAnimate("DKGirod_ske_json", "DKGirod_tex_json", "DKGirod_tex_png", "zhakesi"),
            this.ani1.x = 555,
            this.ani1.y = 468,
            this._main.addChild(this.ani1),
            this.ani1.animation.play("zhakesi", 0),
            this.ani2 = DragonbonesUtil.createAnimate("DKGirod_ske_json", "DKGirod_tex_json", "DKGirod_tex_png", "zhakesi"),
            this.ani2.x = 200,
            this.ani2.y = 390,
            this._main.addChild(this.ani2),
            this.ani2.animation.play("zhakesi", 0)
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            egret.clearInterval(this.interval),
            this.ani1.dispose(),
            this.ani2.dispose()
        },
        i.prototype.itemChange = function(t) {
            this.refresh()
        },
        i.prototype.addEvent = function() {
            var n = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                n.destroy(),
                ModuleManager.hideModule("demonKingGirod")
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(53)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3251)
            },
            this),
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248852, 1,
                    function() {
                        SocketConnection.sendByQueue(46263, [3, 0],
                        function() {
                            n.refresh()
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTime,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(248851, 1,
                    function() {
                        KTool.doExchange(9477, 1,
                        function() {
                            n.refresh()
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAddHeart,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1711052,
                        productID: 248849
                    },
                    t.caller = n,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248849, i,
                        function() {
                            KTool.doExchange(9475, i,
                            function() {
                                n.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAddSignal,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1711053,
                        productID: 248850
                    },
                    t.caller = n,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(248850, i,
                        function() {
                            KTool.doExchange(9476, i,
                            function() {
                                n.refresh()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                n.numFightTime < 1 ? BubblerManager.getInstance().showText("你今日剩余挑战次数不足！") : SocketConnection.sendByQueue(46263, [1, 0],
                function() {
                    n.destroy(),
                    t.DemonKingGirodManager.getInstance().openPanel(3)
                })
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var t = {};
                t.ins = 40777,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {};
                t.id = 30200,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3251, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                n.isItemEnough(1, 200) && SocketConnection.sendByQueue(46263, [2, 0], n.refresh.bind(n))
            },
            this),
            ImageButtonUtil.add(this.btnGetKe,
            function() {
                n.isFirstPet() && n.isItemEnough(2, 100) && SocketConnection.sendByQueue(46263, [4, 2], n.refresh.bind(n))
            },
            this),
            ImageButtonUtil.add(this.btnGetTe,
            function() {
                n.isFirstPet() && n.isItemEnough(2, 50) && SocketConnection.sendByQueue(46263, [4, 1], n.refresh.bind(n))
            },
            this),
            ImageButtonUtil.add(this.btnGetWu,
            function() {
                n.isFirstPet() && n.isItemEnough(2, 150) && SocketConnection.sendByQueue(46263, [4, 3], n.refresh.bind(n))
            },
            this),
            ImageButtonUtil.add(this.btnGetBonus,
            function() {
                SocketConnection.sendByQueue(46263, [5, 0], n.refresh.bind(n))
            },
            this),
            ImageButtonUtil.add(this.btnBonus,
            function() {
                var n = new t.PopBonus,
                i = PopViewManager.createDefaultStyleObject();
                PopViewManager.getInstance().openView(n, i)
            },
            this)
        },
        i.prototype.refresh = function() {
            var t = this;
            this.numHeart = ItemManager.getNumByID(1711052),
            this.numSignal = ItemManager.getNumByID(1711053),
            this.txtHeart.text = this.numHeart.toString(),
            this.txtSignal.text = this.numSignal.toString(),
            KTool.getMultiValue([AttrConst.forever_ywjld_state, AttrConst.daily_ywjld_timeHasFight, AttrConst.daily_ywjld_timeHasWin],
            function(n) {
                var i = 1 == KTool.getBit(n[0], 1),
                e = 1 == KTool.getBit(n[0], 2),
                o = 1 == KTool.getBit(n[0], 3),
                s = 1 == KTool.getBit(n[0], 4);
                t.numFightTime = (MainManager.actorInfo.isVip ? 5 : 3) - n[1],
                t.numWinTime = n[2];
                0 == t.numFightTime;
                t.has1.visible = i,
                t.has2.visible = s,
                t.has3.visible = o,
                t.has4.visible = e,
                DisplayUtil.setEnabled(t.btnGetPet, !i, !1),
                DisplayUtil.setEnabled(t.btnSuperGet, !i, i),
                DisplayUtil.setEnabled(t.btnGetKe, !o, !1),
                DisplayUtil.setEnabled(t.btnGetTe, !e, !1),
                DisplayUtil.setEnabled(t.btnGetWu, !s, !1),
                t.txtFightTime.text = "今日剩余挑战次数：" + t.numFightTime.toString(),
                t.txtWinTime.text = t.numWinTime.toString() + "/20",
                DisplayUtil.setEnabled(t.btnAddFightTime, t.numFightTime < 1, !0)
            }),
            KTool.getBitSet([AttrConst.daily_ywjld_hasGetBonus],
            function(n) {
                var i = 1 == n[0],
                e = !i && t.numWinTime >= 20;
                DisplayUtil.setEnabled(t.btnGetBonus, e, !e),
                t.imgHasGetBonus.visible = i
            })
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.isFirstPet = function() {
            return PetManager.isDefaultPet(3251) ? !0 : (Alarm.show("请将妖王·吉罗德设置为出战背包首发！",
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            }), !1)
        },
        i.prototype.isItemEnough = function(t, n) {
            return 1 == t && this.numHeart >= n ? !0 : 2 == t && this.numSignal >= n ? !0 : (1 == t ? BubblerManager.getInstance().showText("你拥有的敏感之心数量不足！") : 2 == t && BubblerManager.getInstance().showText("你拥有的危险信号数量不足！"), !1)
        },
        i
    } (BaseModule);
    t.DKMain = n,
    __reflect(n.prototype, "demonKingGirod.DKMain")
} (demonKingGirod || (demonKingGirod = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
demonKingGirod; !
function(t) {
    var n = function(n) {
        function i() {
            var t = n.call(this) || this;
            return t.skinName = DKEnterSkin,
            t
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var t = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.destroy(),
                ModuleManager.hideModule("demonKingGirod")
            },
            this),
            this.addEvent()
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var n = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                n.destroy(),
                ModuleManager.hideModule("demonKingGirod")
            },
            this),
            ImageButtonUtil.add(this.btnChao,
            function() {
                n.destroy(),
                t.DemonKingGirodManager.getInstance().openPanel(2)
            },
            this),
            ImageButtonUtil.add(this.btnWan,
            function() {
                BubblerManager.getInstance().showText("当前活动已下架，请期待后续更新。")
            },
            this)
        },
        i
    } (BaseModule);
    t.Enter = n,
    __reflect(n.prototype, "demonKingGirod.Enter")
} (demonKingGirod || (demonKingGirod = {}));
var __reflect = this && this.__reflect ||
function(t, n, i) {
    t.__class__ = n,
    i ? i.push(n) : i = [n],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
},
demonKingGirod; !
function(t) {
    var n = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = DKPopBonusSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(n)
            },
            this),
            ImageButtonUtil.add(this.btnOK,
            function() {
                PopViewManager.getInstance().hideView(n)
            },
            this)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.PopBonus = n,
    __reflect(n.prototype, "demonKingGirod.PopBonus")
} (demonKingGirod || (demonKingGirod = {}));
var __extends = this && this.__extends ||
function(t, n) {
    function i() {
        this.constructor = t
    }
    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
    i.prototype = n.prototype,
    t.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/DKFightSkin.exml"] = window.DKFightSkin = function(t) {
    function n() {
        t.call(this),
        this.skinParts = ["bg", "imgMap1", "imgMap2", "imgMap3", "mapsbg", "btnFight", "wxxh", "btnAddSignal", "mgzx", "btnAddHeart", "txtWinTime", "txtMapName", "txtSignal", "txtHeart", "jrzsbosscs", "btnPet", "btnCure", "_main", "up_bg", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._main_i(), this._Group2_i()]
    }
    __extends(n, t);
    var i = n.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "BG_jpg",
        t.top = 0,
        t
    },
    i._main_i = function() {
        var t = new eui.Group;
        return this._main = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this._Group1_i(), this.jrzsbosscs_i(), this.btnPet_i(), this.btnCure_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.imgMap1_i(), this.imgMap2_i(), this.imgMap3_i(), this.mapsbg_i(), this.btnFight_i(), this.wxxh_i(), this.btnAddSignal_i(), this.mgzx_i(), this.btnAddHeart_i(), this.txtWinTime_i(), this.txtMapName_i(), this.txtSignal_i(), this.txtHeart_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "fight_sbosscs_png",
        t.visible = !0,
        t.x = 756,
        t.y = 61,
        t
    },
    i.imgMap1_i = function() {
        var t = new eui.Image;
        return this.imgMap1 = t,
        t.source = "fight_imgMap1_png",
        t.visible = !0,
        t.x = 774,
        t.y = 74,
        t
    },
    i.imgMap2_i = function() {
        var t = new eui.Image;
        return this.imgMap2 = t,
        t.source = "fight_imgMap2_png",
        t.visible = !0,
        t.x = 774,
        t.y = 74,
        t
    },
    i.imgMap3_i = function() {
        var t = new eui.Image;
        return this.imgMap3 = t,
        t.source = "fight_imgMap3_png",
        t.visible = !0,
        t.x = 774,
        t.y = 74,
        t
    },
    i.mapsbg_i = function() {
        var t = new eui.Image;
        return this.mapsbg = t,
        t.source = "fight_mapsbg_png",
        t.x = 774,
        t.y = 74,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "main_btnFight_png",
        t.x = 835,
        t.y = 525,
        t
    },
    i.wxxh_i = function() {
        var t = new eui.Image;
        return this.wxxh = t,
        t.source = "fight_wxxh_png",
        t.x = 836,
        t.y = 5,
        t
    },
    i.btnAddSignal_i = function() {
        var t = new eui.Image;
        return this.btnAddSignal = t,
        t.source = "main_btnAddFightTime_png",
        t.x = 1037,
        t.y = 11,
        t
    },
    i.mgzx_i = function() {
        var t = new eui.Image;
        return this.mgzx = t,
        t.source = "fight_mgzx_png",
        t.x = 573,
        t.y = 4,
        t
    },
    i.btnAddHeart_i = function() {
        var t = new eui.Image;
        return this.btnAddHeart = t,
        t.source = "main_btnAddFightTime_png",
        t.x = 773,
        t.y = 11,
        t
    },
    i.txtWinTime_i = function() {
        var t = new eui.Label;
        return this.txtWinTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "560",
        t.textColor = 16773461,
        t.x = 1008,
        t.y = 499.2,
        t
    },
    i.txtMapName_i = function() {
        var t = new eui.Label;
        return this.txtMapName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "灰之遗迹",
        t.textColor = 16777215,
        t.x = 809,
        t.y = 190,
        t
    },
    i.txtSignal_i = function() {
        var t = new eui.Label;
        return this.txtSignal = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 990,
        t.y = 20,
        t
    },
    i.txtHeart_i = function() {
        var t = new eui.Label;
        return this.txtHeart = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 724,
        t.y = 20.02,
        t
    },
    i.jrzsbosscs_i = function() {
        var t = new eui.Image;
        return this.jrzsbosscs = t,
        t.left = 0,
        t.source = "123123_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.left = 60,
        t.source = "fight_btnPet_png",
        t.y = 254,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.left = 60,
        t.source = "fight_btnCure_png",
        t.y = 329,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "fight_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DKMainSkin.exml"] = window.DKMainSkin = function(t) {
    function n() {
        t.call(this),
        this.skinParts = ["bg", "title", "bumb", "txtBubble2", "txtBubble1", "btnSuperGet", "btnInfo", "baoxiangbg", "btnBonus", "btnGetBonus", "btnFight", "btnAddFightTime", "a_1", "btnGetPet", "uptitle", "a_2", "btnGetWu", "btnWu", "a_2_2", "btnGetTe", "btnTe", "a_2_3", "btnGetKe", "btnKe", "has4", "has3", "has2", "has1", "numbg", "btnAddSignal", "wxxh_2", "numbg_2", "btnAddHeart", "mgzx_2", "imgHasGetBonus", "jrzsbosscs", "txtWinTime", "txtFightTime", "diwujineng", "zstx", "zsky", "wxxh", "txtSignal", "mgzx", "txtHeart", "grp_right", "_main", "up_bg", "btnHelp", "btnClose"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._main_i(), this._Group2_i()]
    }
    __extends(n, t);
    var i = n.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "BG_jpg",
        t.top = 0,
        t
    },
    i._main_i = function() {
        var t = new eui.Group;
        return this._main = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !0,
        t.elementsContent = [this._Group1_i(), this.grp_right_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.y = 37,
        t.elementsContent = [this.title_i(), this.bumb_i(), this.txtBubble2_i(), this.txtBubble1_i(), this.btnSuperGet_i(), this.btnInfo_i()],
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "main_title_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bumb_i = function() {
        var t = new eui.Image;
        return this.bumb = t,
        t.source = "main_bumb_png",
        t.visible = !0,
        t.x = 239,
        t.y = 114,
        t
    },
    i.txtBubble2_i = function() {
        var t = new eui.Image;
        return this.txtBubble2 = t,
        t.source = "main_txtBubble2_png",
        t.visible = !0,
        t.x = 269,
        t.y = 137,
        t
    },
    i.txtBubble1_i = function() {
        var t = new eui.Image;
        return this.txtBubble1 = t,
        t.source = "main_txtBubble1_png",
        t.visible = !0,
        t.x = 279,
        t.y = 137,
        t
    },
    i.btnSuperGet_i = function() {
        var t = new eui.Image;
        return this.btnSuperGet = t,
        t.source = "main_btnSuperGet_png",
        t.visible = !0,
        t.x = 134,
        t.y = 495,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "main_btnInfo_png",
        t.visible = !0,
        t.x = 31,
        t.y = 495,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.right = 0,
        t.y = 1.55,
        t.elementsContent = [this.baoxiangbg_i(), this.btnBonus_i(), this.btnGetBonus_i(), this.btnFight_i(), this.btnAddFightTime_i(), this.a_1_i(), this.btnGetPet_i(), this.uptitle_i(), this.a_2_i(), this.btnGetWu_i(), this.btnWu_i(), this.a_2_2_i(), this.btnGetTe_i(), this.btnTe_i(), this.a_2_3_i(), this.btnGetKe_i(), this.btnKe_i(), this.has4_i(), this.has3_i(), this.has2_i(), this.has1_i(), this.numbg_i(), this.btnAddSignal_i(), this.wxxh_2_i(), this.numbg_2_i(), this.btnAddHeart_i(), this.mgzx_2_i(), this.imgHasGetBonus_i(), this.jrzsbosscs_i(), this.txtWinTime_i(), this.txtFightTime_i(), this.diwujineng_i(), this.zstx_i(), this.zsky_i(), this.wxxh_i(), this.txtSignal_i(), this.mgzx_i(), this.txtHeart_i(), this._Image1_i()],
        t
    },
    i.baoxiangbg_i = function() {
        var t = new eui.Image;
        return this.baoxiangbg = t,
        t.source = "main_baoxiangbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 485.45,
        t
    },
    i.btnBonus_i = function() {
        var t = new eui.Image;
        return this.btnBonus = t,
        t.source = "main_baoxiang_png",
        t.x = 13,
        t.y = 504.45,
        t
    },
    i.btnGetBonus_i = function() {
        var t = new eui.Image;
        return this.btnGetBonus = t,
        t.source = "main_btnGetBonus_png",
        t.x = 216,
        t.y = 535.45,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "main_btnFight_png",
        t.x = 330,
        t.y = 519.45,
        t
    },
    i.btnAddFightTime_i = function() {
        var t = new eui.Image;
        return this.btnAddFightTime = t,
        t.source = "main_btnAddFightTime_png",
        t.x = 530,
        t.y = 475.45,
        t
    },
    i.a_1_i = function() {
        var t = new eui.Image;
        return this.a_1 = t,
        t.source = "main_1_png",
        t.x = 68,
        t.y = 92.45,
        t
    },
    i.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "main_btnGetPet_png",
        t.x = 340,
        t.y = 131.45,
        t
    },
    i.uptitle_i = function() {
        var t = new eui.Image;
        return this.uptitle = t,
        t.source = "main_uptitle_png",
        t.x = 68,
        t.y = 198.45,
        t
    },
    i.a_2_i = function() {
        var t = new eui.Image;
        return this.a_2 = t,
        t.source = "main_2_png",
        t.x = 79,
        t.y = 231.45,
        t
    },
    i.btnGetWu_i = function() {
        var t = new eui.Image;
        return this.btnGetWu = t,
        t.source = "main_btnGetWu_png",
        t.x = 340,
        t.y = 229.45,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "main_icon_1_png",
        t.x = 194,
        t.y = 237.45,
        t
    },
    i.a_2_2_i = function() {
        var t = new eui.Image;
        return this.a_2_2 = t,
        t.source = "main_2_png",
        t.x = 79,
        t.y = 284.45,
        t
    },
    i.btnGetTe_i = function() {
        var t = new eui.Image;
        return this.btnGetTe = t,
        t.source = "main_btnGetTe_png",
        t.x = 340,
        t.y = 282.45,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "main_icon_texing_png",
        t.x = 198,
        t.y = 290.45,
        t
    },
    i.a_2_3_i = function() {
        var t = new eui.Image;
        return this.a_2_3 = t,
        t.source = "main_2_png",
        t.visible = !0,
        t.x = 79,
        t.y = 337.45,
        t
    },
    i.btnGetKe_i = function() {
        var t = new eui.Image;
        return this.btnGetKe = t,
        t.source = "main_btnGetKe_png",
        t.x = 340,
        t.y = 335.45,
        t
    },
    i.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "main_keyin_png",
        t.x = 194,
        t.y = 341.45,
        t
    },
    i.has4_i = function() {
        var t = new eui.Image;
        return this.has4 = t,
        t.source = "main_has2_png",
        t.visible = !0,
        t.x = 88,
        t.y = 284.45,
        t
    },
    i.has3_i = function() {
        var t = new eui.Image;
        return this.has3 = t,
        t.source = "main_has2_png",
        t.visible = !0,
        t.x = 88,
        t.y = 337.45,
        t
    },
    i.has2_i = function() {
        var t = new eui.Image;
        return this.has2 = t,
        t.source = "main_has2_png",
        t.visible = !0,
        t.x = 88,
        t.y = 231.45,
        t
    },
    i.has1_i = function() {
        var t = new eui.Image;
        return this.has1 = t,
        t.source = "main_has1_png",
        t.visible = !0,
        t.x = 80,
        t.y = 95.45,
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "main_numbg_png",
        t.visible = !0,
        t.x = 330,
        t.y = 6.45,
        t
    },
    i.btnAddSignal_i = function() {
        var t = new eui.Image;
        return this.btnAddSignal = t,
        t.source = "main_btnAddFightTime_png",
        t.x = 536,
        t.y = 5.45,
        t
    },
    i.wxxh_2_i = function() {
        var t = new eui.Image;
        return this.wxxh_2 = t,
        t.source = "main_wxxh_png",
        t.x = 359,
        t.y = .22,
        t
    },
    i.numbg_2_i = function() {
        var t = new eui.Image;
        return this.numbg_2 = t,
        t.source = "main_numbg_png",
        t.x = 75,
        t.y = 6.45,
        t
    },
    i.btnAddHeart_i = function() {
        var t = new eui.Image;
        return this.btnAddHeart = t,
        t.source = "main_btnAddFightTime_png",
        t.x = 275,
        t.y = 5.45,
        t
    },
    i.mgzx_2_i = function() {
        var t = new eui.Image;
        return this.mgzx_2 = t,
        t.source = "main_mgzx_png",
        t.x = 100,
        t.y = 0,
        t
    },
    i.imgHasGetBonus_i = function() {
        var t = new eui.Image;
        return this.imgHasGetBonus = t,
        t.source = "main_has5_png",
        t.visible = !0,
        t.x = 17,
        t.y = 493.29,
        t
    },
    i.jrzsbosscs_i = function() {
        var t = new eui.Label;
        return this.jrzsbosscs = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "今日战胜boss次数：",
        t.textColor = 15438826,
        t.x = 116,
        t.y = 504.45,
        t
    },
    i.txtWinTime_i = function() {
        var t = new eui.Label;
        return this.txtWinTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "0/20",
        t.textColor = 16773461,
        t.x = 116,
        t.y = 543.45,
        t
    },
    i.txtFightTime_i = function() {
        var t = new eui.Label;
        return this.txtFightTime = t,
        t.size = 20,
        t.text = "今日剩余挑战次数：5",
        t.textColor = 15438827,
        t.x = 335,
        t.y = 483.53,
        t
    },
    i.diwujineng_i = function() {
        var t = new eui.Label;
        return this.diwujineng = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "第五技能",
        t.textColor = 16777215,
        t.x = 98,
        t.y = 248.6,
        t
    },
    i.zstx_i = function() {
        var t = new eui.Label;
        return this.zstx = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "专属特性",
        t.textColor = 16777215,
        t.x = 98,
        t.y = 300.58,
        t
    },
    i.zsky_i = function() {
        var t = new eui.Label;
        return this.zsky = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "专属刻印",
        t.textColor = 16777215,
        t.x = 98,
        t.y = 352.56,
        t
    },
    i.wxxh_i = function() {
        var t = new eui.Label;
        return this.wxxh = t,
        t.size = 18,
        t.text = "危险信号：",
        t.textColor = 16777215,
        t.x = 408,
        t.y = 14.45,
        t
    },
    i.txtSignal_i = function() {
        var t = new eui.Label;
        return this.txtSignal = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.x = 492,
        t.y = 14.9,
        t
    },
    i.mgzx_i = function() {
        var t = new eui.Label;
        return this.mgzx = t,
        t.size = 18,
        t.text = "敏感之心：",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 142,
        t.y = 14.45,
        t
    },
    i.txtHeart_i = function() {
        var t = new eui.Label;
        return this.txtHeart = t,
        t.size = 18,
        t.text = "9999",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 226,
        t.y = 14.9,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "main_vip_png",
        t.x = 303,
        t.y = 434.79,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "fight_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "main_btnHelp_png",
        t.x = 133,
        t.y = 7,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/EnterSkin.exml"] = window.DKEnterSkin = function(t) {
    function n() {
        t.call(this),
        this.skinParts = ["bg", "title2", "btnWan", "title1", "btnChao", "up_bg", "btnClose", "top"],
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group2_i(), this.top_i()]
    }
    __extends(n, t);
    var i = n.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "BG_jpg",
        t.top = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 7.84,
        t.elementsContent = [this.title2_i(), this.btnWan_i()],
        t
    },
    i.title2_i = function() {
        var t = new eui.Image;
        return this.title2 = t,
        t.source = "enter_title2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnWan_i = function() {
        var t = new eui.Image;
        return this.btnWan = t,
        t.source = "enter_btnWan_png",
        t.x = 305,
        t.y = 516,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.left = 0,
        t.y = 114.84,
        t.elementsContent = [this.title1_i(), this.btnChao_i()],
        t
    },
    i.title1_i = function() {
        var t = new eui.Image;
        return this.title1 = t,
        t.source = "enter_title1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnChao_i = function() {
        var t = new eui.Image;
        return this.btnChao = t,
        t.source = "enter_btnChao_png",
        t.x = 204,
        t.y = 409,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "fight_up_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.visible = !0,
        t
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PopBonusSkin.exml"] = window.DKPopBonusSkin = function(t) {
    function n() {
        t.call(this),
        this.skinParts = ["btnOK", "btnClose"],
        this.elementsContent = [this._Group1_i()]
    }
    __extends(n, t);
    var i = n.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._Image1_i(), this.btnOK_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "main_x1_png",
        t.x = 0,
        t.y = 28,
        t
    },
    i.btnOK_i = function() {
        var t = new eui.Image;
        return this.btnOK = t,
        t.source = "main_btnfix_png",
        t.x = 244,
        t.y = 306.218,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "main_btnchildclose_png",
        t.x = 580.706,
        t.y = .958,
        t
    },
    n
} (eui.Skin);