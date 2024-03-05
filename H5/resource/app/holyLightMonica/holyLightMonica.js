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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.bossID = 13801,
            i.skinName = t.KuangBaoYaoHuangSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(77, this, "hlm_kuang_bao_yao_huang_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.addEvents()
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254205, 1,
                function() {
                    KTool.doExchange(11824, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254204, 1,
                function() {
                    SocketConnection.sendWithPromise(43300, [12, 2]).then(function() {
                        Alarm.show("已完成狂暴妖皇。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(77)
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = 3 - e.service.getValue(t.AttrConst.daily_level2_times);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void(e.isclickFight || (e.isclickFight = !0, FightManager.fightNoMapBoss("", e.bossID + e.curimgNum)))
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.isclickFight = !1;
            var i = 3 - this.service.getValue(t.AttrConst.daily_level2_times),
            n = 0 >= i,
            a = this.service.getValue(t.AttrConst.forever_level_state),
            r = this.service.getValue(t.AttrConst.forever_level2_damage);
            this.curimgNum = KTool.getBit(this.service.getValue(t.AttrConst.forever_level1and3_state), 5),
            this.imgkuang.visible = 0 == this.curimgNum,
            this.imgqing.visible = 1 == this.curimgNum,
            this.damageText.text = r.toString() + "/50000",
            this.timesLeftText.text = "剩余挑战次数:" + i.toString(),
            DisplayUtil.setEnabled(this.btnadd, n, !n),
            a >= 2 && Alarm.show("已完成狂暴妖皇。",
            function() {
                e.service.backToMainPanel()
            })
        },
        i
    } (BasicPanel);
    t.KuangBaoYaoHuang = e,
    __reflect(e.prototype, "holyLightMonica.KuangBaoYaoHuang")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_pet_state, t.AttrConst.forever_level_state, t.AttrConst.forever_level1and3_state, t.AttrConst.forever_level2_damage, t.AttrConst.forever_level4_turn_1, t.AttrConst.forever_level4_turn_2, t.AttrConst.forever_level4_state], [t.AttrConst.daily_level1_times, t.AttrConst.daily_level2_times, t.AttrConst.daily_level3_times, t.AttrConst.daily_level4_times_1, t.AttrConst.daily_level4_times_2, t.AttrConst.daily_level4_times_3, t.AttrConst.daily_upgrade_times]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.LIQIN_YAOWANG_PANEL
            },
            {
                panelName: t.ModuleConst.KUANGBAO_YAOHUANG_PANEL
            },
            {
                panelName: t.ModuleConst.JITUI_MOZUN_PANEL
            },
            {
                panelName: t.ModuleConst.TIANZHAN_FENGLING_PANEL
            },
            {
                panelName: t.ModuleConst.UPGRADE_ABILITY_PANEL
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.HolyLightMonica = e,
    __reflect(e.prototype, "holyLightMonica.HolyLightMonica")
} (holyLightMonica || (holyLightMonica = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyLightMonica; !
function(t) {
    var e = function() {
        function t() {}
        return t.holyLightMonica_CMD = 43300,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "holyLightMonica.CMDConst")
} (holyLightMonica || (holyLightMonica = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyLightMonica; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "holyLightMonica.MainPanel",
        t.LIQIN_YAOWANG_PANEL = "holyLightMonica.LiQinYaoWang",
        t.KUANGBAO_YAOHUANG_PANEL = "holyLightMonica.KuangBaoYaoHuang",
        t.JITUI_MOZUN_PANEL = "holyLightMonica.JiTuiMoZun",
        t.TIANZHAN_FENGLING_PANEL = "holyLightMonica.TianZhenFengLing",
        t.UPGRADE_ABILITY_PANEL = "holyLightMonica.UpgradeAbilityPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "holyLightMonica.ModuleConst")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.bossID = 13803,
            i.curAbility = ["当前能力：每回合全属性+1", "对手无法使用属性技能", "对手每回合全属性-1  自身攻击必定致命一击"],
            i.curpetCount = [6, 3, 1, 0],
            i.skinName = t.JiTuiMoZunSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(78, this, "hlm_ji_tui_mo_zun_title_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.addEvents()
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254210, 1,
                function() {
                    KTool.doExchange(11825, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian1,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254206, 1,
                function() {
                    SocketConnection.sendWithPromise(43300, [12, 3]).then(function() {
                        Alarm.show("已完成击退魔尊。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian2,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254207 + e.beatTimes, 1,
                function() {
                    SocketConnection.sendWithPromise(43300, [13, 0]).then(function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(78)
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = 3 - e.service.getValue(t.AttrConst.daily_level3_times);
                if (0 >= i) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                switch (e.beatTimes) {
                case 0:
                    PetManager.getlength() <= 6 && 0 != PetManager.getlength() && FightManager.fightNoMapBoss("", e.bossID + e.beatTimes);
                    break;
                case 1:
                    PetManager.getlength() <= 3 ? FightManager.fightNoMapBoss("", e.bossID + e.beatTimes) : BubblerManager.getInstance().showText("出战精灵数量不满足条件！");
                    break;
                case 2:
                    1 == PetManager.getlength() ? FightManager.fightNoMapBoss("", e.bossID + e.beatTimes) : BubblerManager.getInstance().showText("出战精灵数量不满足条件！")
                }
            },
            this)
        },
        i.prototype.update = function() {
            var e = this,
            i = 3 - this.service.getValue(t.AttrConst.daily_level3_times),
            n = this.service.getValue(t.AttrConst.forever_level1and3_state),
            a = this.service.getValue(t.AttrConst.forever_level_state);
            this.beatTimes = n >> 8 & 15;
            var r = 0 >= i;
            a >= 3 && Alarm.show("已完成击退魔尊。",
            function() {
                e.service.backToMainPanel()
            }),
            3 > a && (this.txt_name.text = this.curAbility[this.beatTimes], 2 == this.beatTimes && (this.txt_name.x = 10), this.beatTime.text = this.beatTimes + "/3", this.petCount.text = this.curpetCount[this.beatTimes].toString(), this.timesLeftText.text = "剩余挑战次数:" + i.toString(), DisplayUtil.setEnabled(this.btnadd, r, !r))
        },
        i
    } (BasicPanel);
    t.JiTuiMoZun = e,
    __reflect(e.prototype, "holyLightMonica.JiTuiMoZun")
} (holyLightMonica || (holyLightMonica = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyLightMonica; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 104483,
        t.forever_level_state = 104484,
        t.forever_level1and3_state = 104485,
        t.forever_level2_damage = 104486,
        t.forever_level4_turn_1 = 104487,
        t.forever_level4_turn_2 = 104488,
        t.forever_level4_state = 104489,
        t.daily_level1_times = 16921,
        t.daily_level2_times = 16922,
        t.daily_level3_times = 16923,
        t.daily_level4_times_1 = 16924,
        t.daily_level4_times_2 = 16925,
        t.daily_level4_times_3 = 16926,
        t.daily_upgrade_times = 16927,
        t.yue = 106472,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "holyLightMonica.AttrConst")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.LiQinYaoWangSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(76, this, "hlm_li_qon_yao_wang_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.addEvents()
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254203, 1,
                function() {
                    KTool.doExchange(11823, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254202, 1,
                function() {
                    SocketConnection.sendWithPromise(43300, [12, 1]).then(function() {
                        Alarm.show("已完成力擒妖王。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(76)
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = 3 - e.service.getValue(t.AttrConst.daily_level1_times);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void(e.isclickFight || (e.isclickFight = !0, SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [859 + e.curBos, 0, 0, 0, 0, 0])))
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.isclickFight = !1;
            var i = this.service.getValue(t.AttrConst.forever_level_state),
            n = 3 - this.service.getValue(t.AttrConst.daily_level1_times),
            a = this.service.getValue(t.AttrConst.forever_level1and3_state);
            this.curBos = 15 & a;
            for (var r = 0 >= n,
            _ = 0; 3 > _; _++) {
                var o = 5 * this.curBos + 5;
                15 == o && (o = 20),
                this["img_" + _].visible = this.curBos == _,
                this.turn.text = "当前目标：对战" + o + "个回合后撤退"
            }
            this.timeLeftText.text = "剩余挑战次数:" + n.toString() + "/3",
            DisplayUtil.setEnabled(this.btnadd, r, !r),
            i >= 1 && Alarm.show("已完成力擒妖王。",
            function() {
                e.service.backToMainPanel()
            })
        },
        i
    } (BasicPanel);
    t.LiQinYaoWang = e,
    __reflect(e.prototype, "holyLightMonica.LiQinYaoWang")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MainPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.addEvents()
        },
        i.prototype.beforeAdd = function() {
            StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "进入圣光莫妮卡面板")
        },
        i.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener("UpdateMainPanel",
            function() {
                e.updateValues()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3711)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.yijian,
            function() {
                if (e.txt_yijian.visible) {
                    if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                    if (!PetManager.isDefaultPet(3355)) return void Alert.show("请先将莫妮卡设为首发精灵再开始圣化！",
                    function() {
                        e.service.showPetBag()
                    });
                    KTool.buyProductByCallback(254201, 1,
                    function() {
                        SocketConnection.sendWithPromise(43300, [11, 1]).then(function() {
                            e.updateValues()
                        })
                    },
                    e)
                }
                e.txt_start.visible && (PetManager.isDefaultPet(3355) ? SocketConnection.sendByQueue(t.CMDConst.holyLightMonica_CMD, [11, 2],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                }) : Alert.show("请先将莫妮卡设为首发精灵再开始圣化！",
                function() {
                    e.service.showPetBag()
                })),
                e.txt_up.visible && e.service.openPanel(t.ModuleConst.UPGRADE_ABILITY_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btngo,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "点击前往获得前置形态按钮"),
                ModuleManager.showModuleByID(19, {
                    monId: 17,
                    isclosederectly: !0
                })
            },
            this),
            ImageButtonUtil.add(this.btn_1,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "进入力擒妖王关卡"),
                e.service.openPanel(t.ModuleConst.LIQIN_YAOWANG_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_2,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "进入狂暴妖皇关卡"),
                e.service.openPanel(t.ModuleConst.KUANGBAO_YAOHUANG_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_3,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "进入击退魔尊关卡"),
                e.service.openPanel(t.ModuleConst.JITUI_MOZUN_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btn_4,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "进入天阵封灵关卡"),
                e.service.openPanel(t.ModuleConst.TIANZHAN_FENGLING_PANEL)
            },
            this)
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.forever_pet_state), i = this.service.getValue(t.AttrConst.forever_level_state), n = !!KTool.getBit(e, 1), a = 4; a > 0; a--) {
                var r = i >= a,
                _ = n || r;
                this["beat_" + a].visible = _,
                this["btn_" + a].touchEnabled = !_,
                this["btn_" + a].filters = null,
                4 > a && !r && DisplayUtil.setEnabled(this["btn_" + (a + 1)], r, !r)
            }
            this.txt_yijian.visible = !(i >= 4),
            this.txt_start.visible = i >= 4 && !n,
            this.txt_up.visible = n
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "holyLightMonica.MainPanel")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.TianZhenFengLingSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(79, this, "hlm_tian_zhen_feng_ling_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.addEvents(),
            this.setmask()
        },
        i.prototype.setmask = function() {
            this.maskjindu = new egret.Sprite,
            this.maskjindu.graphics.lineStyle(0),
            this.maskjindu.graphics.beginFill(16711935),
            this.maskjindu.graphics.drawRect(this.jindutiao.x + this.jindutiao.width / 2, this.jindutiao.y + this.jindutiao.height / 2, 250, 250),
            this.maskjindu.graphics.endFill(),
            this.maskjindu.x = -125,
            this.zhen.addChild(this.maskjindu),
            this.jindutiao.mask = this.maskjindu
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待")
        },
        i.prototype.getTurnData = function(t) {
            var e = {};
            switch (t) {
            case 0:
                e.percent = .9,
                e.progress = 25,
                e.fail = 0;
                break;
            case 1:
                e.percent = .8,
                e.progress = 20,
                e.fail = 10;
                break;
            case 2:
                e.percent = .7,
                e.progress = 18,
                e.fail = 15;
                break;
            case 3:
                e.percent = .6,
                e.progress = 15,
                e.fail = 20;
                break;
            case 4:
                e.percent = .5,
                e.progress = 12,
                e.fail = 25;
                break;
            case 5:
            case 6:
                e.percent = .4,
                e.progress = 10,
                e.fail = 30;
                break;
            case 7:
            case 8:
                e.percent = .3,
                e.progress = 8,
                e.fail = 35;
                break;
            case 9:
            case 10:
                e.percent = .2,
                e.progress = 5,
                e.fail = 40;
                break;
            case 11:
            case 12:
            case 13:
            case 14:
                e.percent = .1,
                e.progress = 2,
                e.fail = 45;
                break;
            default:
                e.percent = 0,
                e.progress = 0,
                e.fail = 50
            }
            return e
        },
        i.prototype.checkfinish = function() {
            var e = this;
            FightManager.isWin && this.service.updateSomeValues([t.AttrConst.forever_level4_turn_1, t.AttrConst.forever_level4_turn_2]).then(function() {
                e.curturn_1 = e.service.getValue(t.AttrConst.forever_level4_turn_1),
                e.curturn_2 = e.service.getValue(t.AttrConst.forever_level4_turn_2),
                e.btngather_1.visible = !(1 == e.group),
                e.btnregather_1.visible = 1 == e.group,
                e.btngather_2.visible = !(2 == e.group),
                e.btnregather_2.visible = 2 == e.group,
                0 != e.curturn_1 && 0 != e.curturn_2 && Alarm.show("两位圣光精灵王已完成凝聚圣力，可以点击法阵开始凝聚圣力，若对凝聚成功率不满意可重新凝聚圣力！")
            })
        },
        i.prototype.refresh = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.update()
            })
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            EventManager.addEventListener("refresh", this.refresh, this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254211, 1,
                function() {
                    SocketConnection.sendWithPromise(43300, [12, 4]).then(function() {
                        EventManager.removeEventListener("refresh", e.refresh, e),
                        Alarm.show("已完成天阵封灵。",
                        function() {
                            e.service.backToMainPanel(),
                            EventManager.dispatchEventWith("UpdateMainPanel", !0)
                        })
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["btnadd_" + t],
                function() {
                    var i = t;
                    return PayManager.canPay() ? void KTool.buyProductByCallback(254212 + i - 1, 1,
                    function() {
                        KTool.doExchange(11826 + i - 1, 1,
                        function() {
                            e.updateValues()
                        })
                    },
                    e) : void Alarm.show("暂未开放，敬请期待！")
                },
                n)
            },
            n = this, a = 1; 2 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(79)
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btngather_1,
            function() {
                e.group = 1;
                var i = 3 - e.service.getValue(t.AttrConst.daily_level4_times_1);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", 13806)
            },
            this),
            ImageButtonUtil.add(this.btnregather_1,
            function() {
                e.group = 1,
                Alert.show("重新灌注会覆盖上次灌注使用的回合数，是否确定重新开始灌注？",
                function() {
                    var i = 3 - e.service.getValue(t.AttrConst.daily_level4_times_1);
                    return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", 13806)
                })
            },
            this),
            ImageButtonUtil.add(this.btngather_2,
            function() {
                e.group = 2;
                var i = 3 - e.service.getValue(t.AttrConst.daily_level4_times_2);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", 13807)
            },
            this),
            ImageButtonUtil.add(this.btnregather_2,
            function() {
                e.group = 2,
                Alert.show("重新灌注会覆盖上次灌注使用的回合数，是否确定重新开始灌注？",
                function() {
                    var i = 3 - e.service.getValue(t.AttrConst.daily_level4_times_2);
                    return 0 >= i ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", 13807)
                })
            },
            this),
            ImageButtonUtil.add(this.btnfeng,
            function() {
                StatLogger.log("20211022版本系统功能", "圣光莫妮卡", "在天阵封灵中点击封灵按钮"),
                e.service.updateValues().then(function() {
                    e.curturn_1 = e.service.getValue(t.AttrConst.forever_level4_turn_1),
                    e.curturn_2 = e.service.getValue(t.AttrConst.forever_level4_turn_2);
                    var i = e.getTurnData(Math.abs(e.curturn_2 - e.curturn_1)),
                    n = new t.GuanZhupop(i, e.service);
                    PopViewManager.getInstance().openView(n)
                })
            },
            this)
        },
        i.prototype.update = function() {
            var e = this,
            i = 3 - this.service.getValue(t.AttrConst.daily_level4_times_1),
            n = 3 - this.service.getValue(t.AttrConst.daily_level4_times_2),
            a = this.service.getValue(t.AttrConst.forever_level_state);
            this.curturn_1 = this.service.getValue(t.AttrConst.forever_level4_turn_1),
            this.curturn_2 = this.service.getValue(t.AttrConst.forever_level4_turn_2);
            var r = this.service.getValue(t.AttrConst.forever_level4_state),
            _ = 0 >= i,
            o = 0 >= n,
            s = this.curturn_1 > 0 && this.curturn_2 > 0;
            this.curProgress = 255 & r,
            this.btngather_1.visible = this.curturn_1 <= 0,
            this.btnregather_1.visible = this.curturn_1 > 0,
            this.btngather_2.visible = this.curturn_2 <= 0,
            this.btnregather_2.visible = this.curturn_2 > 0,
            this.timeLeftText1.text = "剩余挑战次数:" + i,
            this.timeLeftText2.text = "剩余挑战次数:" + n,
            this.turnText_1.text = "" + this.curturn_1,
            this.turnText_2.text = "" + this.curturn_2,
            this.progresText.text = this.curProgress + "%",
            this.maskjindu.y = 119 - this.curProgress / 100 * 238,
            a >= 4 && Alarm.show("已完成天阵封灵。",
            function() {
                EventManager.removeEventListener("refresh", e.refresh, e),
                e.service.backToMainPanel()
            }),
            DisplayUtil.setEnabled(this.btnadd_1, _, !_),
            DisplayUtil.setEnabled(this.btnadd_2, o, !o),
            DisplayUtil.setEnabled(this.btnfeng, s, !s)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            EventManager.removeEventListener("refresh", this.refresh, this)
        },
        i
    } (BasicPanel);
    t.TianZhenFengLing = e,
    __reflect(e.prototype, "holyLightMonica.TianZhenFengLing")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1717759,
            i.markId = 41363,
            i.bossId = 13808,
            i.skillId = 32519,
            i.state = [!1, !1, !1, !1],
            i.skinName = t.UpgradeAbilitySkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initOldPveBtnClose(80, this, "hlm_upgrade_ability_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.service.registerItemUpdateForText(this.itemId, this.itemNumText, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnadditem,
            function() {
                if (!PayManager.canPay()) return void Alarm.show("暂未开放，敬请期待！");
                var t = {};
                t.type = "product_diamond",
                t.ins = {
                    iconID: 1717759,
                    productID: 254216
                },
                t.caller = e,
                t.callBack = function(t, i) {
                    KTool.buyProductByCallback(254216, i,
                    function() {
                        KTool.doExchange(11830, i,
                        function() {
                            e.updateValues()
                        })
                    })
                },
                ModuleManager.showModuleByID(1, t)
            },
            this),
            ImageButtonUtil.add(this.btnaddtimes,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254215, 1,
                function() {
                    KTool.doExchange(11829, 1,
                    function() {
                        e.updateValues()
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnpet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.backToMainPanel()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(80)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnfight_" + i],
                function() {
                    var n = 3 - e.service.getValue(t.AttrConst.daily_upgrade_times);
                    return 0 >= n ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : void FightManager.fightNoMapBoss("", e.bossId + i)
                },
                n)
            },
            n = this, a = 0; 3 > a; a++) i(a);
            for (var a = 0; 3 > a; a++) this["btndui_" + a].index = a,
            ImageButtonUtil.add(this["btndui_" + a], this.exchange, this);
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(e.markId) ? (t = {},
                t.ins = e.markId, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = e.markId, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                var t = {
                    id: e.skillId
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_3,
            function() {
                e.service.showPetEff(3711)
            },
            this)
        },
        i.prototype.exchange = function(e) {
            var i = this,
            n = e.currentTarget.index,
            a = 20;
            if (PetManager.isDefaultPet(3711)) {
                var r = ItemManager.getNumByID(this.itemId);
                r >= a ? SocketConnection.sendByQueue(t.CMDConst.holyLightMonica_CMD, [15, n + 1],
                function() {
                    i.service.updateValues().then(function() {
                        switch (n) {
                        case 2:
                            BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                            break;
                        case 1:
                            BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                        }
                        i.update()
                    })
                }):
                BubblerManager.getInstance().showText("兑换需要20个自然圣力，请先获得足够数量再来兑换！")
            } else BubblerManager.getInstance().showText("请先将圣光莫妮卡设为首发精灵！");
            this.update()
        },
        i.prototype.noOpen = function() {
            Alarm.show("暂未开放，敬请期待！")
        },
        i.prototype.update = function() {
            this.itemNum = ItemManager.getNumByID(this.itemId),
            this.leftTime = 3 - this.service.getValue(t.AttrConst.daily_upgrade_times);
            var e = this.service.getValue(t.AttrConst.forever_pet_state),
            i = this.leftTime <= 0;
            this.state[0] = 1 == KTool.getBit(e, 1);
            for (var n = 0; 3 > n; n++) this.state[n + 1] = !!KTool.getBit(e, n + 2),
            this["imgGet_" + n].visible = this.state[n + 1],
            this["icon_" + (n + 1)].touchEnabled = !this.state[n + 1],
            DisplayUtil.setEnabled(this["btndui_" + n], !this.state[n + 1]);
            this.timeLeftText.text = this.leftTime.toString(),
            this.itemNumText.text = this.itemNum.toString(),
            DisplayUtil.setEnabled(this.btnaddtimes, i, !i)
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.UpgradeAbilityPanel = e,
    __reflect(e.prototype, "holyLightMonica.UpgradeAbilityPanel")
} (holyLightMonica || (holyLightMonica = {}));
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
holyLightMonica; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var a = e.call(this) || this;
            return a.datas = i,
            a.service = n,
            a.skinName = t.GuanZhuPopSkin,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.update()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                return PayManager.canPay() ? void KTool.buyProductByCallback(254214, 1,
                function() {
                    KTool.doExchange(11828, 1,
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e) : void Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.btnguan,
            function() {
                var i = 1 - e.service.getValue(t.AttrConst.daily_level4_times_3),
                n = e.service.getValue(t.AttrConst.forever_level4_state),
                a = 1 == KTool.getBit(n, 9),
                r = 1 == KTool.getBit(n, 10);
                return 0 >= i ? void BubblerManager.getInstance().showText("您的灌注次数不足！") : void(a && r ? SocketConnection.sendByQueue(t.CMDConst.holyLightMonica_CMD, [14, 1],
                function() {
                    e.service.updateValues().then(function() {
                        var i = e.service.getValue(t.AttrConst.forever_level4_state),
                        n = 255 & i;
                        e.curProgress < n ? Alarm.show("恭喜你本次灌注圣力成功，封灵进度增加了" + e.datas.progress + "%",
                        function() {
                            EventManager.dispatchEventWith("refresh"),
                            PopViewManager.getInstance().hideView(e)
                        }) : e.curProgress >= n && Alarm.show("很遗憾，本次灌注圣力失败，封灵进度下降了" + e.datas.fail + "%，请重新凝聚圣力后再来灌注！",
                        function() {
                            EventManager.dispatchEventWith("refresh"),
                            PopViewManager.getInstance().hideView(e)
                        }),
                        e.update()
                    })
                }) : BubblerManager.getInstance().showText("您尚未击败两个boss"))
            },
            this)
        },
        i.prototype.update = function() {
            var e = 1 - this.service.getValue(t.AttrConst.daily_level4_times_3),
            i = this.service.getValue(t.AttrConst.forever_level4_state);
            this.curProgress = 255 & i,
            this.timeLeftText3.text = "剩余灌注次数:" + e,
            this.turnText_3.text = 100 * this.datas.percent + "%",
            DisplayUtil.setEnabled(this.btnadd, 0 == e, 0 != e)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.GuanZhupop = e,
    __reflect(e.prototype, "holyLightMonica.GuanZhupop")
} (holyLightMonica || (holyLightMonica = {})),
window.holyLightMonica = window.holyLightMonica || {};
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
generateEUI.paths["resource/eui_skins/GuanZhuPopSkin.exml"] = window.holyLightMonica.GuanZhuPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "timeLeftText3", "btnadd", "times", "btnguan", "turnText_3", "progress"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this.times_i(), this.btnguan_i(), this.progress_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_guan_zhu_pop_bg_png",
        t.x = 375,
        t.y = 59,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "hlm_guan_zhu_pop_btnclose_png",
        t.x = 737,
        t.y = 55,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_guan_zhu_pop_5000_png",
        t.x = 354,
        t.y = 91,
        t
    },
    i.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.x = 450,
        t.y = 509,
        t.elementsContent = [this._Image3_i(), this.timeLeftText3_i(), this.btnadd_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText3_i = function() {
        var t = new eui.Label;
        return this.timeLeftText3 = t,
        t.size = 18,
        t.text = "剩余灌注次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.btnguan_i = function() {
        var t = new eui.Image;
        return this.btnguan = t,
        t.source = "hlm_guan_zhu_pop_btnguan_png",
        t.x = 460,
        t.y = 432,
        t
    },
    i.progress_i = function() {
        var t = new eui.Group;
        return this.progress = t,
        t.x = 431,
        t.y = 393,
        t.elementsContent = [this._Image4_i(), this._Label1_i(), this.turnText_3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.width = 300,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "本次灌注成功率：",
        t.textColor = 16777215,
        t.x = 32,
        t.y = 10,
        t
    },
    i.turnText_3_i = function() {
        var t = new eui.Label;
        return this.turnText_3 = t,
        t.size = 24,
        t.text = "100%",
        t.textColor = 16772183,
        t.x = 196,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/JiTuiMoZunSkin.exml"] = window.holyLightMonica.JiTuiMoZunSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petCount", "beatTime", "txt_name", "timesLeftText", "btnadd", "btnpet", "btncure", "grp_btns", "btnyijian1", "btnfight", "btnyijian2", "btnhelp", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.grp_btns_i(), this.btnyijian1_i(), this.btnfight_i(), this.btnyijian2_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_kuang_bao_yao_huang_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_ji_tui_mo_zun_3683_kb_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_3683_png",
        t.visible = !0,
        t.x = 35,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_li_qin_yao_wang_juxing_14_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_li_qin_yao_wang_tuceng_1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 486,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 790,
        t.y = 325,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Label1_i(), this.petCount_i(), this._Image9_i(), this._Label2_i(), this.beatTime_i(), this._Image10_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_info1bg_png",
        t.x = 7,
        t.y = 7,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_jx_15_kb_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_info2bg_png",
        t.x = 10,
        t.y = 6,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 14657142,
        t.text = "当前可出战精灵数量：",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 64,
        t
    },
    i.petCount_i = function() {
        var t = new eui.Label;
        return this.petCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "6",
        t.textColor = 16772183,
        t.x = 288,
        t.y = 65,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_dot_png",
        t.x = 21,
        t.y = 60,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 14657142,
        t.text = "已击败次数：",
        t.textColor = 16777215,
        t.x = 57,
        t.y = 25,
        t
    },
    i.beatTime_i = function() {
        var t = new eui.Label;
        return this.beatTime = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "0/3",
        t.textColor = 16772183,
        t.x = 198,
        t.y = 25,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_dot_png",
        t.x = 21,
        t.y = 20,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 362,
        t.y = 59,
        t.elementsContent = [this._Image11_i(), this.txt_name_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.background = !1,
        t.blendMode = "add",
        t.bold = !1,
        t.border = !1,
        t.cacheAsBitmap = !1,
        t.displayAsPassword = !1,
        t.fontFamily = "HuaKangXinZongYi",
        t.italic = !1,
        t.size = 20,
        t.text = "当前能力：每回合全属性+1",
        t.textAlign = "center",
        t.textColor = 16047567,
        t.x = 80,
        t.y = 11,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 447,
        t.y = 595,
        t.elementsContent = [this._Image12_i(), this.timesLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 23,
        t.y = 413,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i.btnyijian1_i = function() {
        var t = new eui.Image;
        return this.btnyijian1 = t,
        t.bottom = 10,
        t.height = 100,
        t.right = 11,
        t.source = "hlm_kuang_bao_yao_huang_btnyijian_png",
        t.width = 100,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.height = 77,
        t.source = "hlm_kuang_bao_yao_huang_btnfight_png",
        t.width = 239,
        t.x = 304,
        t.y = 518,
        t
    },
    i.btnyijian2_i = function() {
        var t = new eui.Image;
        return this.btnyijian2 = t,
        t.height = 77,
        t.source = "hlm_kuang_bao_yao_huang_btnyijian1_png",
        t.width = 239,
        t.x = 594,
        t.y = 518,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i(), this.btnhelp_i(), this.btnback_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_xz_1_png",
        t.x = 96,
        t.y = 49,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_title_png",
        t.x = 107,
        t.y = 11,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "hlm_kuang_bao_yao_huang_help_png",
        t.x = 244,
        t.y = 9,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 31,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/KuangBaoYaoHuangSkin.exml"] = window.holyLightMonica.KuangBaoYaoHuangSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgqing", "imgkuang", "damageText", "timesLeftText", "btnadd", "times", "btnfight", "btnpet", "btncure", "grp_btns", "btnyijian", "btnhelp", "btnback", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgqing_i(), this.imgkuang_i(), this._Group1_i(), this._Group2_i(), this.grp_btns_i(), this.btnyijian_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_kuang_bao_yao_huang_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_3686_png",
        t.visible = !0,
        t.x = 46,
        t.y = 0,
        t
    },
    i.imgqing_i = function() {
        var t = new eui.Image;
        return this.imgqing = t,
        t.source = "hlm_kuang_bao_yao_huang_qing_png",
        t.visible = !0,
        t.x = 829,
        t.y = 116,
        t
    },
    i.imgkuang_i = function() {
        var t = new eui.Image;
        return this.imgkuang = t,
        t.source = "hlm_kuang_bao_yao_huang_kuang_png",
        t.x = 829,
        t.y = 116,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 362,
        t.y = 59,
        t.elementsContent = [this._Image3_i(), this._Label1_i(), this.damageText_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.width = 412,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "已累计伤害：",
        t.textColor = 16047567,
        t.x = 84,
        t.y = 11,
        t
    },
    i.damageText_i = function() {
        var t = new eui.Label;
        return this.damageText = t,
        t.size = 30,
        t.text = "50000/50000",
        t.textColor = 16777215,
        t.x = 208,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 447,
        t.y = 518,
        t.elementsContent = [this.times_i(), this.btnfight_i()],
        t
    },
    i.times_i = function() {
        var t = new eui.Group;
        return this.times = t,
        t.x = 0,
        t.y = 77,
        t.elementsContent = [this._Image4_i(), this.timesLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timesLeftText_i = function() {
        var t = new eui.Label;
        return this.timesLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hlm_kuang_bao_yao_huang_btnfight_png",
        t.x = 12,
        t.y = 0,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 23,
        t.y = 413,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.bottom = 10,
        t.height = 100,
        t.right = 11,
        t.source = "hlm_kuang_bao_yao_huang_btnyijian_png",
        t.width = 100,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.btnhelp_i(), this._Image6_i(), this._Image7_i(), this.btnback_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "hlm_kuang_bao_yao_huang_help_png",
        t.x = 244,
        t.y = 9,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_xz_1_png",
        t.x = 96,
        t.y = 49,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_toptitle_png",
        t.x = 107,
        t.y = 11,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 31,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LiQinYaoWangSkin.exml"] = window.holyLightMonica.LiQinYaoWangSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_0", "img_2", "img_1", "vs", "turn", "timeLeftText", "btnadd", "btnfight", "btnyijian", "btnhelp", "btnback"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.img_0_i(), this.img_2_i(), this.img_1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.vs_i(), this._Image5_i(), this.turn_i(), this._Group1_i(), this.btnfight_i(), this.btnyijian_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_kuang_bao_yao_huang_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_0_i = function() {
        var t = new eui.Image;
        return this.img_0 = t,
        t.right = 0,
        t.source = "hlm_li_qin_yao_wang_3698_png",
        t.visible = !0,
        t.x = 1087,
        t.y = 2,
        t
    },
    i.img_2_i = function() {
        var t = new eui.Image;
        return this.img_2 = t,
        t.right = 0,
        t.source = "hlm_li_qin_yao_wang_3709_png",
        t.visible = !0,
        t.x = 1052,
        t.y = 40,
        t
    },
    i.img_1_i = function() {
        var t = new eui.Image;
        return this.img_1 = t,
        t.right = 0,
        t.source = "hlm_li_qin_yao_wang_3704_png",
        t.visible = !0,
        t.x = 1052,
        t.y = 36,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.source = "hlm_li_qin_yao_wang_wmm_2_png",
        t.visible = !0,
        t.y = 18,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_li_qin_yao_wang_juxing_14_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_li_qin_yao_wang_tuceng_1_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 486,
        t
    },
    i.vs_i = function() {
        var t = new eui.Image;
        return this.vs = t,
        t.height = 264,
        t.horizontalCenter = 2,
        t.source = "hlm_li_qin_yao_wang_vs_png",
        t.width = 202,
        t.y = 187,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.visible = !0,
        t.width = 412,
        t.x = 362,
        t.y = 59,
        t
    },
    i.turn_i = function() {
        var t = new eui.Label;
        return this.turn = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "当前目标：对战5个回合后撤退",
        t.textColor = 16047567,
        t.x = 425,
        t.y = 70,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 447,
        t.y = 595,
        t.elementsContent = [this._Image6_i(), this.timeLeftText_i(), this.btnadd_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.size = 18,
        t.text = "剩余挑战次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "hlm_kuang_bao_yao_huang_btnfight_png",
        t.visible = !0,
        t.x = 459,
        t.y = 518,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.bottom = 10,
        t.height = 100,
        t.right = 11,
        t.source = "hlm_kuang_bao_yao_huang_btnyijian_png",
        t.visible = !0,
        t.width = 100,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this.btnhelp_i(), this.btnback_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_xz_1_png",
        t.x = 96,
        t.y = 49,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_li_qon_yao_wang_toptitle_png",
        t.x = 107,
        t.y = 11,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "hlm_kuang_bao_yao_huang_help_png",
        t.x = 244,
        t.y = 9,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 31,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.holyLightMonica.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btngo", "btn_4", "btn_3", "btn_2", "btn_1", "beat_1", "beat_2", "beat_3", "beat_4", "buttons", "btnInfo", "btns", "txt_yijian", "txt_start", "txt_up", "yijian", "up_bg", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.buttons_i(), this._Image3_i(), this.btnInfo_i(), this.yijian_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_main_panel_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 15,
        t.right = 0,
        t.elementsContent = [this.btngo_i(), this._Image2_i(), this._Label1_i()],
        t
    },
    i.btngo_i = function() {
        var t = new eui.Image;
        return this.btngo = t,
        t.source = "hlm_main_panel_btnget_png",
        t.x = 87,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_img_j_png",
        t.x = 39,
        t.y = 81,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "进化必需",
        t.textColor = 16372604,
        t.x = 0,
        t.y = 56,
        t
    },
    i.buttons_i = function() {
        var t = new eui.Group;
        return this.buttons = t,
        t.right = 95,
        t.width = 240,
        t.y = 75,
        t.elementsContent = [this.btn_4_i(), this.btn_3_i(), this.btn_2_i(), this.btn_1_i(), this.beat_1_i(), this.beat_2_i(), this.beat_3_i(), this.beat_4_i()],
        t
    },
    i.btn_4_i = function() {
        var t = new eui.Image;
        return this.btn_4 = t,
        t.source = "hlm_main_panel_btn4_png",
        t.x = 0,
        t.y = 300,
        t
    },
    i.btn_3_i = function() {
        var t = new eui.Image;
        return this.btn_3 = t,
        t.source = "hlm_main_panel_btn3_png",
        t.x = 0,
        t.y = 200,
        t
    },
    i.btn_2_i = function() {
        var t = new eui.Image;
        return this.btn_2 = t,
        t.source = "hlm_main_panel_btn2_png",
        t.x = 0,
        t.y = 101,
        t
    },
    i.btn_1_i = function() {
        var t = new eui.Image;
        return this.btn_1 = t,
        t.source = "hlm_main_panel_btn1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.beat_1_i = function() {
        var t = new eui.Image;
        return this.beat_1 = t,
        t.source = "hlm_main_panel_beat_1_png",
        t.x = 17,
        t.y = 12,
        t
    },
    i.beat_2_i = function() {
        var t = new eui.Image;
        return this.beat_2 = t,
        t.source = "hlm_main_panel_beat_1_png",
        t.x = 17,
        t.y = 115,
        t
    },
    i.beat_3_i = function() {
        var t = new eui.Image;
        return this.beat_3 = t,
        t.source = "hlm_main_panel_beat_1_png",
        t.x = 17,
        t.y = 215,
        t
    },
    i.beat_4_i = function() {
        var t = new eui.Image;
        return this.beat_4 = t,
        t.source = "hlm_main_panel_beat_1_png",
        t.x = 17,
        t.y = 315,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_juxing_16_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "hlm_main_panel_btninfo_png",
        t.x = 25,
        t.y = 548,
        t
    },
    i.yijian_i = function() {
        var t = new eui.Group;
        return this.yijian = t,
        t.x = 237,
        t.y = 546,
        t.elementsContent = [this.btns_i(), this.txt_yijian_i(), this.txt_start_i(), this.txt_up_i()],
        t
    },
    i.btns_i = function() {
        var t = new eui.Image;
        return this.btns = t,
        t.source = "hlm_main_panel_btnyijian_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_yijian_i = function() {
        var t = new eui.Label;
        return this.txt_yijian = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 36,
        t.text = "至尊圣化",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 51,
        t.y = 22,
        t
    },
    i.txt_start_i = function() {
        var t = new eui.Label;
        return this.txt_start = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 36,
        t.text = "开始圣化",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 51,
        t.y = 22,
        t
    },
    i.txt_up_i = function() {
        var t = new eui.Label;
        return this.txt_up = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 36,
        t.text = "能力提升",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 51,
        t.y = 22,
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
        t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 29,
        t.y = 6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TianZhenFengLingSkin.exml"] = window.holyLightMonica.TianZhenFengLingSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["progresText", "jindutiao1", "jindutiao", "btnfeng", "zhen", "timeLeftText2", "btnadd_2", "txtright", "btnregather_2", "turnText_2", "turnright", "btngather_2", "btnregather_1", "timeLeftText1", "btnadd_1", "txtleft", "btngather_1", "turnText_1", "turnleft", "btnyijian", "btnhelp", "btnback", "top", "btnpet", "btncure", "grp_btns"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.zhen_i(), this._Group1_i(), this._Group2_i(), this.btnyijian_i(), this.top_i(), this.grp_btns_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_tian_zhen_feng_ling_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.zhen_i = function() {
        var t = new eui.Group;
        return this.zhen = t,
        t.horizontalCenter = 8,
        t.y = 117,
        t.elementsContent = [this.progresText_i(), this._Label1_i(), this.jindutiao1_i(), this.jindutiao_i(), this.btnfeng_i()],
        t
    },
    i.progresText_i = function() {
        var t = new eui.Label;
        return this.progresText = t,
        t.height = 24,
        t.size = 24,
        t.text = "100%",
        t.textAlign = "center",
        t.textColor = 16772183,
        t.width = 62,
        t.x = 92,
        t.y = 290,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.stroke = 1,
        t.strokeColor = 13399583,
        t.text = "封灵进度",
        t.textColor = 16777215,
        t.x = 80,
        t.y = 255,
        t
    },
    i.jindutiao1_i = function() {
        var t = new eui.Image;
        return this.jindutiao1 = t,
        t.source = "hlm_tian_zhen_feng_ling_jindutiao_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.jindutiao_i = function() {
        var t = new eui.Image;
        return this.jindutiao = t,
        t.source = "hlm_tian_zhen_feng_ling_jindutiao_png",
        t.visible = !0,
        t.x = 7,
        t.y = 8,
        t
    },
    i.btnfeng_i = function() {
        var t = new eui.Image;
        return this.btnfeng = t,
        t.source = "hlm_tian_zhen_feng_ling_btnfeng_png",
        t.x = 70,
        t.y = 64,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 183,
        t.visible = !0,
        t.y = 459,
        t.elementsContent = [this.txtright_i(), this.btnregather_2_i(), this.turnright_i(), this.btngather_2_i()],
        t
    },
    i.txtright_i = function() {
        var t = new eui.Group;
        return this.txtright = t,
        t.x = 0,
        t.y = 116,
        t.elementsContent = [this._Image2_i(), this.timeLeftText2_i(), this.btnadd_2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText2_i = function() {
        var t = new eui.Label;
        return this.timeLeftText2 = t,
        t.size = 18,
        t.text = "剩余挑战次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_2_i = function() {
        var t = new eui.Image;
        return this.btnadd_2 = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.btnregather_2_i = function() {
        var t = new eui.Image;
        return this.btnregather_2 = t,
        t.source = "hlm_tian_zhen_feng_ling_btnregather_2_png",
        t.x = 13,
        t.y = 39,
        t
    },
    i.turnright_i = function() {
        var t = new eui.Group;
        return this.turnright = t,
        t.x = 3,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this._Label2_i(), this.turnText_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.width = 250,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 13399583,
        t.text = "凝聚使用回合数：",
        t.textColor = 16777215,
        t.x = 40,
        t.y = 10,
        t
    },
    i.turnText_2_i = function() {
        var t = new eui.Label;
        return this.turnText_2 = t,
        t.size = 24,
        t.text = "00",
        t.textColor = 16772183,
        t.x = 205,
        t.y = 8,
        t
    },
    i.btngather_2_i = function() {
        var t = new eui.Image;
        return this.btngather_2 = t,
        t.source = "hlm_tian_zhen_feng_ling_btngather_1_png",
        t.x = 13,
        t.y = 39,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.left = 180,
        t.visible = !0,
        t.y = 459,
        t.elementsContent = [this.btnregather_1_i(), this.txtleft_i(), this.btngather_1_i(), this.turnleft_i()],
        t
    },
    i.btnregather_1_i = function() {
        var t = new eui.Image;
        return this.btnregather_1 = t,
        t.source = "hlm_tian_zhen_feng_ling_btnregather_2_png",
        t.x = 13,
        t.y = 39,
        t
    },
    i.txtleft_i = function() {
        var t = new eui.Group;
        return this.txtleft = t,
        t.x = 0,
        t.y = 116,
        t.elementsContent = [this._Image4_i(), this.timeLeftText1_i(), this.btnadd_1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_numbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    i.timeLeftText1_i = function() {
        var t = new eui.Label;
        return this.timeLeftText1 = t,
        t.size = 18,
        t.text = "剩余挑战次数：3",
        t.textColor = 16247179,
        t.x = 33,
        t.y = 8,
        t
    },
    i.btnadd_1_i = function() {
        var t = new eui.Image;
        return this.btnadd_1 = t,
        t.source = "hlm_kuang_bao_yao_huang_btnadd_png",
        t.x = 184,
        t.y = 0,
        t
    },
    i.btngather_1_i = function() {
        var t = new eui.Image;
        return this.btngather_1 = t,
        t.source = "hlm_tian_zhen_feng_ling_btngather_1_png",
        t.x = 13,
        t.y = 39,
        t
    },
    i.turnleft_i = function() {
        var t = new eui.Group;
        return this.turnleft = t,
        t.x = 3,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this._Label3_i(), this.turnText_1_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_ji_tui_mo_zun_infobg_png",
        t.width = 250,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 13399583,
        t.text = "凝聚使用回合数：",
        t.textColor = 16777215,
        t.x = 40,
        t.y = 10,
        t
    },
    i.turnText_1_i = function() {
        var t = new eui.Label;
        return this.turnText_1 = t,
        t.size = 24,
        t.text = "00",
        t.textColor = 16772183,
        t.x = 205,
        t.y = 8,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.bottom = 10,
        t.height = 100,
        t.right = 11,
        t.source = "hlm_kuang_bao_yao_huang_btnyijian_png",
        t.width = 100,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this.btnhelp_i(), this.btnback_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_tian_zhen_feng_ling_toptitle_png",
        t.x = 107,
        t.y = 11,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_xz_1_png",
        t.x = 96,
        t.y = 49,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "hlm_kuang_bao_yao_huang_help_png",
        t.x = 244,
        t.y = 9,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 31,
        t.y = 6,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 23,
        t.y = 413,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/UpgradeAbilitySkin.exml"] = window.holyLightMonica.UpgradeAbilitySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnpet", "btncure", "grp_btns", "btndui_0", "icon_1", "imgGet_0", "a", "icon_2", "btndui_1", "imgGet_1", "b", "icon_3", "btndui_2", "imgGet_2", "c", "btnfight_0", "btnfight_1", "btnfight_2", "btnback", "btnhelp", "top", "itemNumText", "btnadditem", "icon", "righttop", "timeLeftText", "btnaddtimes", "righttop_2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.grp_btns_i(), this._Group1_i(), this.btnfight_0_i(), this.btnfight_1_i(), this.btnfight_2_i(), this.top_i(), this.righttop_i(), this.righttop_2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "hlm_upgrade_ability_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_tuceng_19_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 460,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 24,
        t.y = 257,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_pet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "hlm_kuang_bao_yao_huang_imgbtn_cure_png",
        t.x = 0,
        t.y = 72,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 34,
        t.visible = !0,
        t.y = 15,
        t.elementsContent = [this._Image3_i(), this.a_i(), this.b_i(), this.c_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_juxing_12_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.a_i = function() {
        var t = new eui.Group;
        return this.a = t,
        t.x = 74,
        t.y = 91,
        t.elementsContent = [this._Label1_i(), this._Image4_i(), this.btndui_0_i(), this.icon_1_i(), this.imgGet_0_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "专属刻印",
        t.textColor = 16777215,
        t.x = 157,
        t.y = 8,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_juxing_13_png",
        t.x = 118,
        t.y = 41,
        t
    },
    i.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "hlm_upgrade_ability_btndui_png",
        t.x = 140,
        t.y = 57,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.source = "hlm_upgrade_ability_icon_ke_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGet_0_i = function() {
        var t = new eui.Image;
        return this.imgGet_0 = t,
        t.height = 22,
        t.source = "hlm_upgrade_ability_imgGet_png",
        t.width = 110,
        t.x = 0,
        t.y = 45,
        t
    },
    i.b_i = function() {
        var t = new eui.Group;
        return this.b = t,
        t.x = 74,
        t.y = 249,
        t.elementsContent = [this.icon_2_i(), this._Label2_i(), this._Image5_i(), this.btndui_1_i(), this.imgGet_1_i()],
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.source = "hlm_upgrade_ability_icon_wu_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "第五技能",
        t.textColor = 16777215,
        t.x = 157,
        t.y = 6,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_jx_13_kb_png",
        t.x = 118,
        t.y = 39,
        t
    },
    i.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "hlm_upgrade_ability_btndui_png",
        t.x = 140,
        t.y = 55,
        t
    },
    i.imgGet_1_i = function() {
        var t = new eui.Image;
        return this.imgGet_1 = t,
        t.height = 22,
        t.source = "hlm_upgrade_ability_imgGet_png",
        t.width = 110,
        t.x = 0,
        t.y = 45,
        t
    },
    i.c_i = function() {
        var t = new eui.Group;
        return this.c = t,
        t.x = 74,
        t.y = 407,
        t.elementsContent = [this._Label3_i(), this._Image6_i(), this.icon_3_i(), this.btndui_2_i(), this.imgGet_2_i()],
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "专属特性",
        t.textColor = 16777215,
        t.x = 157,
        t.y = 6,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_jx_13_kb_2_png",
        t.x = 118,
        t.y = 39,
        t
    },
    i.icon_3_i = function() {
        var t = new eui.Image;
        return this.icon_3 = t,
        t.source = "hlm_upgrade_ability_icon_te_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "hlm_upgrade_ability_btndui_png",
        t.x = 140,
        t.y = 55,
        t
    },
    i.imgGet_2_i = function() {
        var t = new eui.Image;
        return this.imgGet_2 = t,
        t.height = 22,
        t.source = "hlm_upgrade_ability_imgGet_png",
        t.width = 110,
        t.x = 0,
        t.y = 45,
        t
    },
    i.btnfight_0_i = function() {
        var t = new eui.Image;
        return this.btnfight_0 = t,
        t.source = "hlm_upgrade_ability_btnfight_0_png",
        t.x = 127,
        t.y = 554,
        t
    },
    i.btnfight_1_i = function() {
        var t = new eui.Image;
        return this.btnfight_1 = t,
        t.source = "hlm_upgrade_ability_btnfight_1_png",
        t.x = 280,
        t.y = 554,
        t
    },
    i.btnfight_2_i = function() {
        var t = new eui.Image;
        return this.btnfight_2 = t,
        t.source = "hlm_upgrade_ability_btnfight_2_png",
        t.x = 433,
        t.y = 554,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 1,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.btnback_i(), this.btnhelp_i(), this._Image9_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_kuang_bao_yao_huang_xz_1_png",
        t.visible = !0,
        t.x = 96,
        t.y = 49,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "hlm_main_panel_btnclose_png",
        t.x = 33,
        t.y = 7,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "hlm_kuang_bao_yao_huang_help_png",
        t.x = 244,
        t.y = 9,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_toptitle_png",
        t.x = 109,
        t.y = 10,
        t
    },
    i.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.right = 264,
        t.y = 10,
        t.elementsContent = [this._Image10_i(), this.itemNumText_i(), this._Label4_i(), this.btnadditem_i(), this.icon_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_img_di1_png",
        t.width = 190,
        t.x = -15,
        t.y = 0,
        t
    },
    i.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18.0101510119682,
        t.text = "9999",
        t.textColor = 16039779,
        t.x = 110,
        t.y = 2,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 18.0101510119682,
        t.text = "自然圣力:",
        t.textColor = 16039778,
        t.x = 30,
        t.y = 2,
        t
    },
    i.btnadditem_i = function() {
        var t = new eui.Image;
        return this.btnadditem = t,
        t.height = 25,
        t.source = "hlm_upgrade_ability_btnadd_0_png",
        t.width = 25,
        t.x = 150,
        t.y = -2,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 37,
        t.source = "hlm_upgrade_ability_icon_png",
        t.width = 35,
        t.x = -8.547,
        t.y = -11.606,
        t
    },
    i.righttop_2_i = function() {
        var t = new eui.Group;
        return this.righttop_2 = t,
        t.right = 34,
        t.y = 10,
        t.elementsContent = [this._Image11_i(), this.timeLeftText_i(), this._Label5_i(), this.btnaddtimes_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "hlm_upgrade_ability_img_di1_png",
        t.width = 200,
        t.x = 10,
        t.y = 0,
        t
    },
    i.timeLeftText_i = function() {
        var t = new eui.Label;
        return this.timeLeftText = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 18.0101510119682,
        t.text = "00",
        t.textColor = 16039779,
        t.x = 156,
        t.y = 2,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 18.0101510119682,
        t.text = "今日可挑战次数：",
        t.textColor = 16039779,
        t.x = 19,
        t.y = 2,
        t
    },
    i.btnaddtimes_i = function() {
        var t = new eui.Image;
        return this.btnaddtimes = t,
        t.height = 25,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "hlm_upgrade_ability_btnadd_0_png",
        t.width = 25,
        t.x = 185,
        t.y = -2,
        t
    },
    e
} (eui.Skin);