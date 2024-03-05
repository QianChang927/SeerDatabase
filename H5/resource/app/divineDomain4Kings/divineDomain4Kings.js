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
divineDomain4Kings; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this, n) || this;
            return i.service.setValues([AttrConst.forever_modissis_status], [AttrConst.daily_modissis_win_count, AttrConst.daily_modissis_fight_count, AttrConst.daily_modissis_bossid, AttrConst.daily_modissis_random_times], null, [AttrConst.daily_bitbuf_modissis_got_reward_flag]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL
            },
            {
                panelName: t.ModuleConst.MODISSIS_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(n, e),
        n
    } (BasicMultPanelModule);
    t.DivineDomain4Kings = e,
    __reflect(e.prototype, "divineDomain4Kings.DivineDomain4Kings")
} (divineDomain4Kings || (divineDomain4Kings = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
divineDomain4Kings; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "divineDomain4Kings.MainPanel",
        t.MODISSIS_PANEL = "divineDomain4Kings.ModissisPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "divineDomain4Kings.ModuleConst")
} (divineDomain4Kings || (divineDomain4Kings = {}));
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
divineDomain4Kings; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.MainPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            for (var t = this,
            e = 0; 4 > e; e++) {
                var n = this["btnOne_" + e],
                i = this["btnInfo_" + e],
                s = this["pet_" + e];
                n.index = e,
                i.index = e,
                s.index = e,
                ImageButtonUtil.add(n, this.onGet, this),
                ImageButtonUtil.add(i, this.onPetInfo, this),
                ImageButtonUtil.add(s, this.onPet, this)
            }
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.closeModule()
            },
            this)
        },
        n.prototype.onGet = function(t) {
            t.currentTarget.index;
            Alarm.show("功能暂未开放！")
        },
        n.prototype.onPetInfo = function(t) {
            var e = t.currentTarget.index,
            n = [3451, 3428, 3439, 3420];
            PetManager.showPetIntroduce(n[e])
        },
        n.prototype.onPet = function(e) {
            var n = e.currentTarget.index;
            if (0 == n) {
                var i = [t.ModuleConst.MODISSIS_PANEL];
                this.service.openPanel(i[n])
            } else 3 == n ? ModuleManager.showModuleByID(119) : 1 == n ? ModuleManager.showModuleByID(120) : 2 == n && ModuleManager.showModuleByID(121)
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "divineDomain4Kings.MainPanel")
} (divineDomain4Kings || (divineDomain4Kings = {}));
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
divineDomain4Kings; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.BOSS_1 = 10693,
            n.BOSS_2 = 10694,
            n.BOSS_3 = 10695,
            n.itemId = 1714220,
            n.skinName = t.ModissisPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(54, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.addEvents(),
            this.service.registerItems(this.itemId, this.updateItem, this),
            this.adaptLeftContent(this.grp_btns)
        },
        n.prototype.beforeAdd = function(t) {
            this.updateItem()
        },
        n.prototype.update = function() {
            var t = this.service.getValue(AttrConst.daily_modissis_bossid),
            e = 12 - this.service.getValue(AttrConst.daily_modissis_fight_count),
            n = !!t;
            this.btnRandom.visible = !n,
            this.btnFight.visible = n,
            this.btnReRandom.visible = n,
            this.btnRandom.touchEnabled = !0,
            this.btnReRandom.touchEnabled = !0,
            this.btnFight.touchEnabled = !0;
            for (var i = 0; 3 > i; i++) this["pet_select_" + i].visible = !1,
            this["pet_" + i].alpha = .6,
            this["pet_" + i].visible = !0;
            t > 0 && (this["pet_select_" + (t - 1)].visible = !0, this["pet_" + (t - 1)].visible = !1),
            this.txtLeftTimes.text = "" + e,
            DisplayUtil.setEnabled(this.btnAdd, 1 > e);
            var s = this.service.getValue(AttrConst.forever_modissis_status);
            DisplayUtil.setEnabled(this.btnBuy, 4 > s)
        },
        n.prototype.updateItem = function() {
            this.txtNum.text = "" + ItemManager.getNumByID(this.itemId)
        },
        n.prototype.itemChange = function(t) {
            this.updateItem()
        },
        n.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251374, 1,
                    function() {
                        KTool.doExchange(10530, 1,
                        function() {
                            BubblerManager.getInstance().showText("购买成功！"),
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(54)
            },
            this),
            ImageButtonUtil.add(this.btnAward,
            function() {
                var n = e.service.getValue(AttrConst.forever_modissis_status);
                if (n >= 4) return void BubblerManager.getInstance().showText("您已经获得了秘·莫迪西斯，已经不需要再进行领取了");
                var i = new t.ModissisRewardPop(e.service),
                s = PopViewManager.createDefaultStyleObject();
                s.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(i, s)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                var n = new t.ModissisExchangePop(e.service),
                i = PopViewManager.createDefaultStyleObject();
                i.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(n, i, null, e)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251321, 1,
                    function() {
                        SocketConnection.sendByQueue(43729, [1, 0],
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnRandom,
            function() {
                var t = e.service.getValue(AttrConst.forever_modissis_status);
                return t >= 4 ? void BubblerManager.getInstance().showText("您已经获得了秘·莫迪西斯，已经不需要再进行挑战了") : (e.btnRandom.touchEnabled = !1, void SocketConnection.sendWithPromise(CommandID.SYSTW_ADXS, [2, 1]).then(function(t) {
                    var n = t.data;
                    n.position = 0;
                    var i = n.readUnsignedInt();
                    e.service.setValue(AttrConst.daily_modissis_bossid, i, core.constant.ValueType.DAILY),
                    e.randomAni(i)
                })["catch"](function() {
                    BubblerManager.getInstance().showText("抽取失败！"),
                    e.btnRandom.touchEnabled = !0
                }))
            },
            this),
            ImageButtonUtil.add(this.btnReRandom,
            function() {
                var t = e.service.getValue(AttrConst.forever_modissis_status);
                if (t >= 4) return void BubblerManager.getInstance().showText("您已经获得了秘·莫迪西斯，已经不需要再进行挑战了");
                var n = e.service.getValue(AttrConst.daily_modissis_random_times, core.constant.ValueType.DAILY),
                i = 0;
                0 == n ? Alert.show("当日第1次重新抽取，需要消耗2w赛尔豆",
                function() {
                    i = MainManager.actorInfo.coins,
                    2e4 > i ? BubblerManager.getInstance().showText("你的赛尔豆不足，无法重新抽取！") : e.reRandom()
                }) : 1 == n ? Alert.show("当日第2次重新抽取，需要消耗20000泰坦之灵",
                function() {
                    i = ItemManager.getNumByID(1400352),
                    2e4 > i ? BubblerManager.getInstance().showText("你的泰坦之灵不足，无法重新抽取！") : e.reRandom()
                }) : PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(251323, 1,
                    function() {
                        e.reRandom()
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight, this.fightBoss, this)
        },
        n.prototype.reRandom = function() {
            var t = this;
            this.btnReRandom.touchEnabled = !1,
            SocketConnection.sendWithPromise(CommandID.SYSTW_ADXS, [2, 2]).then(function(e) {
                var n = e.data;
                n.position = 0;
                var i = n.readUnsignedInt();
                t.service.setValue(AttrConst.daily_modissis_bossid, i, core.constant.ValueType.DAILY),
                t.randomAni(i)
            })["catch"](function() {})
        },
        n.prototype.randomAni = function(t) {
            var e = this,
            n = {};
            this.touchChildren = !1,
            n.i = 1,
            egret.Tween.get(n, {
                onChange: function() {
                    for (var t = (Math.floor(n.i) - 1) % 3, i = 0; 3 > i; i++) e["pet_select_" + i].visible = !1,
                    e["pet_" + i].alpha = .6,
                    e["pet_" + i].visible = !0;
                    e["pet_select_" + t].visible = !0,
                    e["pet_" + t].visible = !1
                }
            }).to({
                i: 30 + t
            },
            6e3, egret.Ease.quadInOut).wait(300).call(function() {
                e.touchChildren = !0,
                e.service.updateValues(),
                e.update()
            })
        },
        n.prototype.fightBoss = function(t) {
            var e = this.service.getValue(AttrConst.forever_modissis_status);
            if (e >= 4) return void BubblerManager.getInstance().showText("您已经获得了秘·莫迪西斯，已经不需要再进行挑战了");
            var n = 12 - this.service.getValue(AttrConst.daily_modissis_fight_count);
            if (n > 0) {
                var i = this.service.getValue(AttrConst.daily_modissis_bossid),
                s = this["BOSS_" + i];
                FightManager.fightNoMapBoss("", s)
            } else BubblerManager.getInstance().showText("挑战次数已经用完，请购买后再来挑战！")
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            e.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    t.ModissisPanel = e,
    __reflect(e.prototype, "divineDomain4Kings.ModissisPanel")
} (divineDomain4Kings || (divineDomain4Kings = {}));
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
divineDomain4Kings; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return i.petId = 3451,
            i.itemId = 1714220,
            i.markId = 41034,
            i.skillId = 31193,
            i.service = n,
            i.skinName = t.ModissisExchangePopSkin,
            i
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this);
            for (var n = 0; 4 > n; n++) {
                var i = this["btnBuy_" + n];
                i.index = n + 1,
                ImageButtonUtil.add(i, this.onExchange, this)
            }
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.item_0,
            function() {
                PetManager.showPetIntroduce(t.petId)
            },
            this),
            ImageButtonUtil.add(this.item_1,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(t.markId) ? (e = {},
                e.ins = t.markId, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = t.markId, tipsPop.TipsPop.openItemPop(e))
            },
            this),
            ImageButtonUtil.add(this.item_2,
            function() {
                var e = {
                    id: t.skillId
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.item_3,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t.petId, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnBuyItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1714220,
                        productID: 251324
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(251324, n,
                        function() {
                            KTool.doExchange(10529, n,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                t)
            },
            this),
            this.update(),
            this.service.registerItems(this.itemId, this.update, this)
        },
        n.prototype.update = function() {
            for (var t = this.service.getValue(AttrConst.forever_modissis_status), e = 0; 4 > e; e++) this["icon_" + e].visible = t > e,
            this["btnBuy_" + e].visible = e >= t;
            this.txtNum.text = "" + ItemManager.getNumByID(this.itemId)
        },
        n.prototype.itemChange = function(t) {
            this.update()
        },
        n.prototype.onExchange = function(t) {
            var e = this,
            n = t.currentTarget.index,
            i = [100, 20, 40, 60],
            s = ItemManager.getNumByID(this.itemId);
            if (s >= i[n - 1]) {
                if (n > 1) {
                    var o = this.service.getValue(AttrConst.forever_modissis_status);
                    if (n - 1 > o) return void BubblerManager.getInstance().showText("请按顺序兑换")
                }
                SocketConnection.sendWithPromise(CommandID.SYSTW_ADXS, [3, n]).then(function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })["catch"](function() {
                    PopViewManager.getInstance().hideView(e)
                })
            } else BubblerManager.getInstance().showText("毁灭孢子数量不足！！！")
        },
        n.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.itemChange, this),
            this.service.unregisterItems(this),
            this.service = null,
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.ModissisExchangePop = e,
    __reflect(e.prototype, "divineDomain4Kings.ModissisExchangePop")
} (divineDomain4Kings || (divineDomain4Kings = {}));
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
divineDomain4Kings; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return i.service = n,
            i.skinName = t.ModissisRewardPopSkin,
            i
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnOk,
            function() {
                SocketConnection.sendWithPromise(CommandID.SYSTW_ADXS, [4, 0]).then(function() {
                    t.service.updateValues(),
                    BubblerManager.getInstance().showText("领取成功"),
                    PopViewManager.getInstance().hideView(t)
                })["catch"](function() {
                    BubblerManager.getInstance().showText("领取失败"),
                    PopViewManager.getInstance().hideView(t)
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            this.update()
        },
        n.prototype.update = function() {
            var t = this.service.getValue(AttrConst.daily_modissis_win_count, core.constant.ValueType.DAILY),
            e = this.service.getValue(AttrConst.daily_bitbuf_modissis_got_reward_flag, core.constant.ValueType.DAILYBITBUF);
            this.num.text = t + "/3",
            this.completedIcon.visible = !1,
            t >= 3 && 0 == e ? (this.btnOk.touchEnabled = !0, DisplayUtil.setEnabled(this.btnOk, !0)) : e ? (this.completedIcon.visible = !0, this.btnOk.visible = !1) : (DisplayUtil.setEnabled(this.btnOk, !1), this.btnOk.touchEnabled = !1)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.service = null
        },
        n
    } (PopView);
    t.ModissisRewardPop = e,
    __reflect(e.prototype, "divineDomain4Kings.ModissisRewardPop")
} (divineDomain4Kings || (divineDomain4Kings = {})),
window.divineDomain4Kings = window.divineDomain4Kings || {};
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
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.divineDomain4Kings.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet_0", "btnOne_0", "btnInfo_0", "pet_1", "btnOne_1", "btnInfo_1", "pet_2", "btnOne_2", "btnInfo_2", "pet_lock_2", "pet_3", "btnOne_3", "btnInfo_3", "title", "up_bg", "btnClose", "help", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "dd4k_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 6.5,
        t.width = 1035,
        t.y = 0,
        t.elementsContent = [this.pet_0_i(), this.btnOne_0_i(), this.btnInfo_0_i(), this.pet_1_i(), this.btnOne_1_i(), this.btnInfo_1_i(), this.pet_2_i(), this.btnOne_2_i(), this.btnInfo_2_i(), this.pet_lock_2_i(), this.pet_3_i(), this.btnOne_3_i(), this.btnInfo_3_i(), this.title_i()],
        t
    },
    n.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.source = "dd4k_main_panel_pet_0_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnOne_0_i = function() {
        var t = new eui.Image;
        return this.btnOne_0 = t,
        t.source = "dd4k_main_panel_btnone_png",
        t.x = 40,
        t.y = 439,
        t
    },
    n.btnInfo_0_i = function() {
        var t = new eui.Image;
        return this.btnInfo_0 = t,
        t.source = "dd4k_main_panel_btninfo_png",
        t.x = 150,
        t.y = 439,
        t
    },
    n.pet_1_i = function() {
        var t = new eui.Image;
        return this.pet_1 = t,
        t.source = "dd4k_main_panel_pet_1_png",
        t.x = 255,
        t.y = 19,
        t
    },
    n.btnOne_1_i = function() {
        var t = new eui.Image;
        return this.btnOne_1 = t,
        t.source = "dd4k_main_panel_btnone_png",
        t.x = 295,
        t.y = 498,
        t
    },
    n.btnInfo_1_i = function() {
        var t = new eui.Image;
        return this.btnInfo_1 = t,
        t.source = "dd4k_main_panel_btninfo_png",
        t.x = 405,
        t.y = 498,
        t
    },
    n.pet_2_i = function() {
        var t = new eui.Image;
        return this.pet_2 = t,
        t.source = "dd4k_main_panel_pet_2_png",
        t.visible = !0,
        t.x = 509,
        t.y = 19,
        t
    },
    n.btnOne_2_i = function() {
        var t = new eui.Image;
        return this.btnOne_2 = t,
        t.source = "dd4k_main_panel_btnone_png",
        t.x = 549,
        t.y = 498,
        t
    },
    n.btnInfo_2_i = function() {
        var t = new eui.Image;
        return this.btnInfo_2 = t,
        t.source = "dd4k_main_panel_btninfo_png",
        t.visible = !0,
        t.x = 659,
        t.y = 498,
        t
    },
    n.pet_lock_2_i = function() {
        var t = new eui.Image;
        return this.pet_lock_2 = t,
        t.source = "dd4k_main_panel_pet_lock_png",
        t.visible = !1,
        t.x = 558,
        t.y = 352,
        t
    },
    n.pet_3_i = function() {
        var t = new eui.Image;
        return this.pet_3 = t,
        t.source = "dd4k_main_panel_pet_3_png",
        t.visible = !0,
        t.x = 763,
        t.y = 0,
        t
    },
    n.btnOne_3_i = function() {
        var t = new eui.Image;
        return this.btnOne_3 = t,
        t.source = "dd4k_main_panel_btnone_png",
        t.x = 804,
        t.y = 439,
        t
    },
    n.btnInfo_3_i = function() {
        var t = new eui.Image;
        return this.btnInfo_3 = t,
        t.source = "dd4k_main_panel_btninfo_png",
        t.x = 914,
        t.y = 439,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "dd4k_main_panel_title_png",
        t.x = 229,
        t.y = 28,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.help_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "dd4k_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "dd4k_main_panel_btnclose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    n.help_i = function() {
        var t = new eui.Image;
        return this.help = t,
        t.source = "dd4k_main_panel_help_png",
        t.visible = !0,
        t.x = 130,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ModissisExchangePopSkin.exml"] = window.divineDomain4Kings.ModissisExchangePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "item_3", "item_2", "item_0", "item_1", "btnClose", "btnBuyItem", "txtNum", "btnBuy_2", "btnBuy_3", "btnBuy_1", "btnBuy_0", "icon_0", "icon_1", "icon_2", "icon_3", "exchange"],
        this.height = 387,
        this.width = 824,
        this.elementsContent = [this.exchange_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.exchange_i = function() {
        var t = new eui.Group;
        return this.exchange = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.item_3_i(), this.item_2_i(), this.item_0_i(), this.item_1_i(), this.btnClose_i(), this.btnBuyItem_i(), this.txtNum_i(), this.btnBuy_2_i(), this.btnBuy_3_i(), this.btnBuy_1_i(), this.btnBuy_0_i(), this.icon_0_i(), this.icon_1_i(), this.icon_2_i(), this.icon_3_i()],
        t
    },
    n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "dd4k_modissis_exchange_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.item_3_i = function() {
        var t = new eui.Image;
        return this.item_3 = t,
        t.source = "dd4k_modissis_exchange_pop_item_3_png",
        t.x = 658,
        t.y = 59,
        t
    },
    n.item_2_i = function() {
        var t = new eui.Image;
        return this.item_2 = t,
        t.source = "dd4k_modissis_exchange_pop_item_2_png",
        t.x = 454,
        t.y = 59,
        t
    },
    n.item_0_i = function() {
        var t = new eui.Image;
        return this.item_0 = t,
        t.source = "dd4k_modissis_exchange_pop_item_0_png",
        t.x = 55,
        t.y = 59,
        t
    },
    n.item_1_i = function() {
        var t = new eui.Image;
        return this.item_1 = t,
        t.source = "dd4k_modissis_exchange_pop_item_1_png",
        t.x = 253,
        t.y = 59,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "dd4k_modissis_exchange_pop_btnclose_png",
        t.x = 768,
        t.y = 13,
        t
    },
    n.btnBuyItem_i = function() {
        var t = new eui.Image;
        return this.btnBuyItem = t,
        t.source = "dd4k_modissis_exchange_pop_btnbuyitem_png",
        t.x = 504,
        t.y = 309,
        t
    },
    n.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.size = 20,
        t.text = "888",
        t.textColor = 16773461,
        t.x = 422,
        t.y = 324,
        t
    },
    n.btnBuy_2_i = function() {
        var t = new eui.Image;
        return this.btnBuy_2 = t,
        t.source = "dd4k_modissis_exchange_pop_btnbuy_3_png",
        t.x = 437,
        t.y = 228,
        t
    },
    n.btnBuy_3_i = function() {
        var t = new eui.Image;
        return this.btnBuy_3 = t,
        t.source = "dd4k_modissis_exchange_pop_btnbuy_2_png",
        t.x = 641,
        t.y = 228,
        t
    },
    n.btnBuy_1_i = function() {
        var t = new eui.Image;
        return this.btnBuy_1 = t,
        t.source = "dd4k_modissis_exchange_pop_btnbuy_1_png",
        t.x = 233,
        t.y = 228,
        t
    },
    n.btnBuy_0_i = function() {
        var t = new eui.Image;
        return this.btnBuy_0 = t,
        t.source = "dd4k_modissis_exchange_pop_btnbuy_0_png",
        t.x = 32,
        t.y = 228,
        t
    },
    n.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.source = "dd4k_modissis_exchange_pop_exchange_icon_png",
        t.x = 31,
        t.y = 230,
        t
    },
    n.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.source = "dd4k_modissis_exchange_pop_exchange_icon_png",
        t.x = 234,
        t.y = 230,
        t
    },
    n.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.source = "dd4k_modissis_exchange_pop_exchange_icon_png",
        t.x = 438,
        t.y = 230,
        t
    },
    n.icon_3_i = function() {
        var t = new eui.Image;
        return this.icon_3 = t,
        t.source = "dd4k_modissis_exchange_pop_exchange_icon_png",
        t.x = 642,
        t.y = 230,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ModissisPanelSkin.exml"] = window.divineDomain4Kings.ModissisPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "numbg", "btnAdd", "sytzcs", "txtLeftTimes", "Cishu", "btnBag", "btnCure", "grp_btns", "bz_item_bg", "btnExchange", "btnBuy", "txtNum", "pet_0", "pet_select_0", "pet_1", "pet_select_1", "pet_2", "pet_select_2", "btnRandom", "btnFight", "btnReRandom", "title_2", "title", "up_bg", "btnHelp", "btnClose", "top", "btnAward"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.Cishu_i(), this.grp_btns_i(), this._Group1_i(), this._Group2_i(), this.top_i(), this.btnAward_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "dd4k_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.Cishu_i = function() {
        var t = new eui.Group;
        return this.Cishu = t,
        t.right = 36,
        t.y = 20,
        t.elementsContent = [this.numbg_i(), this.btnAdd_i(), this.sytzcs_i(), this.txtLeftTimes_i()],
        t
    },
    n.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.source = "dd4k_modissis_panel_numbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "dd4k_modissis_panel_btnadd_png",
        t.x = 209,
        t.y = 0,
        t
    },
    n.sytzcs_i = function() {
        var t = new eui.Label;
        return this.sytzcs = t,
        t.size = 20,
        t.text = "剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 6,
        t
    },
    n.txtLeftTimes_i = function() {
        var t = new eui.Label;
        return this.txtLeftTimes = t,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 172,
        t.y = 8,
        t
    },
    n.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 26,
        t.y = 269,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i()],
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "dd4k_modissis_panel_btnbag_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "dd4k_modissis_panel_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 12,
        t.visible = !0,
        t.y = 516,
        t.elementsContent = [this.bz_item_bg_i(), this.btnExchange_i(), this.btnBuy_i(), this.txtNum_i()],
        t
    },
    n.bz_item_bg_i = function() {
        var t = new eui.Image;
        return this.bz_item_bg = t,
        t.source = "dd4k_modissis_panel_bz_item_bg_png",
        t.x = 0,
        t.y = 9,
        t
    },
    n.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "dd4k_modissis_panel_btnexchange_png",
        t.x = 300,
        t.y = 0,
        t
    },
    n.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "dd4k_modissis_panel_btnbuy_png",
        t.visible = !0,
        t.x = 300,
        t.y = -124,
        t
    },
    n.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "898",
        t.textColor = 16773461,
        t.x = 228,
        t.y = 58,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 3,
        t.y = 11,
        t.elementsContent = [this.pet_0_i(), this.pet_select_0_i(), this.pet_1_i(), this.pet_select_1_i(), this.pet_2_i(), this.pet_select_2_i(), this.btnRandom_i(), this.btnFight_i(), this.btnReRandom_i(), this.title_2_i(), this.title_i()],
        t
    },
    n.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.source = "dd4k_modissis_panel_pet_0_png",
        t.x = 46,
        t.y = 131,
        t
    },
    n.pet_select_0_i = function() {
        var t = new eui.Image;
        return this.pet_select_0 = t,
        t.source = "dd4k_modissis_panel_pet_select_0_png",
        t.x = 0,
        t.y = 85,
        t
    },
    n.pet_1_i = function() {
        var t = new eui.Image;
        return this.pet_1 = t,
        t.source = "dd4k_modissis_panel_pet_1_png",
        t.x = 339,
        t.y = 126,
        t
    },
    n.pet_select_1_i = function() {
        var t = new eui.Image;
        return this.pet_select_1 = t,
        t.source = "dd4k_modissis_panel_pet_select_1_png",
        t.x = 293,
        t.y = 77,
        t
    },
    n.pet_2_i = function() {
        var t = new eui.Image;
        return this.pet_2 = t,
        t.source = "dd4k_modissis_panel_pet_2_png",
        t.x = 629,
        t.y = 127,
        t
    },
    n.pet_select_2_i = function() {
        var t = new eui.Image;
        return this.pet_select_2 = t,
        t.source = "dd4k_modissis_panel_pet_select_2_png",
        t.x = 583,
        t.y = 77,
        t
    },
    n.btnRandom_i = function() {
        var t = new eui.Image;
        return this.btnRandom = t,
        t.source = "dd4k_modissis_panel_btnrandom_png",
        t.visible = !0,
        t.x = 342,
        t.y = 517,
        t
    },
    n.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "dd4k_modissis_panel_btnfight_png",
        t.visible = !0,
        t.x = 475,
        t.y = 521,
        t
    },
    n.btnReRandom_i = function() {
        var t = new eui.Image;
        return this.btnReRandom = t,
        t.source = "dd4k_modissis_panel_btnrerandom_png",
        t.x = 251,
        t.y = 521,
        t
    },
    n.title_2_i = function() {
        var t = new eui.Image;
        return this.title_2 = t,
        t.source = "dd4k_modissis_panel_title_2_png",
        t.x = 43,
        t.y = 51,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "dd4k_modissis_panel_title_png",
        t.x = 366,
        t.y = 0,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "dd4k_modissis_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "dd4k_main_panel_help_png",
        t.visible = !0,
        t.x = 130,
        t.y = 5,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "dd4k_main_panel_btnclose_png",
        t.x = 31,
        t.y = 5,
        t
    },
    n.btnAward_i = function() {
        var t = new eui.Image;
        return this.btnAward = t,
        t.source = "dd4k_modissis_panel_btnaward_png",
        t.x = 27,
        t.y = 480,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ModissisRewardPopSkin.exml"] = window.divineDomain4Kings.ModissisRewardPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "num", "txtLabel", "btnOk", "btnClose", "completedIcon"],
        this.height = 370,
        this.width = 618,
        this.elementsContent = [this.bg_i(), this.num_i(), this.btnOk_i(), this.btnClose_i(), this.completedIcon_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "dd4k_reward_pop_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 21,
        t
    },
    n.num_i = function() {
        var t = new eui.Label;
        return this.num = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 30,
        t.text = "3/3",
        t.textColor = 16773461,
        t.x = 332,
        t.y = 190,
        t
    },
    n.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.x = 240,
        t.y = 288,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 41,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 121,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "领取奖励",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 12,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "dd4k_reward_pop_btnclose_1_png",
        t.visible = !0,
        t.x = 564,
        t.y = 0,
        t
    },
    n.completedIcon_i = function() {
        var t = new eui.Image;
        return this.completedIcon = t,
        t.source = "dd4k_modissis_reward_pop_mrzl_png",
        t.x = 216,
        t.y = 283,
        t
    },
    e
} (eui.Skin);