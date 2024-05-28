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
godOfStorm; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_lasttrial_time, t.AttrConst.forever_pet_state, t.AttrConst.forever_trial_times], [t.AttrConst.daily_begintrial_time, t.AttrConst.daily_has_get, t.AttrConst.daily_trial_progress]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.ModuleConst.TRIAL_PANEL
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.GodOfStorm = e,
    __reflect(e.prototype, "godOfStorm.GodOfStorm")
} (godOfStorm || (godOfStorm = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godOfStorm; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_pet_state = 101295,
        t.forever_trial_times = 101296,
        t.forever_lasttrial_time = 101297,
        t.daily_trial_progress = 18330,
        t.daily_begintrial_time = 18331,
        t.daily_has_get = 18332,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "godOfStorm.AttrConst")
} (godOfStorm || (godOfStorm = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godOfStorm; !
function(t) {
    var e = function() {
        function t() {}
        return t.godOfStorm = 42348,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "godOfStorm.CMDConst")
} (godOfStorm || (godOfStorm = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godOfStorm; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "godOfStorm.MainPanel",
        t.TRIAL_PANEL = "godOfStorm.TrialPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "godOfStorm.ModuleConst")
} (godOfStorm || (godOfStorm = {}));
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
godOfStorm; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1713997,
            i.markId = 41014,
            i.state = [!1, !1, !1, !1],
            i.skinName = t.MainPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initOldPveBtnClose(83, this, "",
            function() {
                t.service.closeModule()
            },
            this),
            this.adaptRightContent(this.grp_right),
            this.service.registerItemUpdateForText(this.itemId, this.itemNumText, this)
        },
        i.prototype.beforeAdd = function() {
            StatLogger.log("20211112版本系统功能", "疾·阿洛纳斯", "打开主界面")
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3428)
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(83)
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                BuyProductManager.buyProductBySocket(251137,
                function() {
                    SocketConnection.sendByQueue(t.CMDConst.godOfStorm, [11, 0],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                BuyProductManager.buyProduct("251139_10469",
                function() {
                    e.update()
                },
                e, 1713997)
            },
            this),
            ImageButtonUtil.add(this.btntrial,
            function() {
                e.service.openPanel(t.ModuleConst.TRIAL_PANEL)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                e.service.showMarkInfo(e.markId)
            },
            this),
            ImageButtonUtil.add(this.icon_2,
            function() {
                e.service.showSkillInfo(31073)
            },
            this),
            ImageButtonUtil.add(this.icon_3,
            function() {
                e.service.showPetEff(3428)
            },
            this);
            for (var i = 0; 4 > i; i++) this["btndui_" + i].index = i,
            ImageButtonUtil.add(this["btndui_" + i], this.exchange, this)
        },
        i.prototype.exchange = function(e) {
            var i = this,
            n = e.currentTarget.index,
            r = [50, 10, 20, 30],
            o = ItemManager.getNumByID(this.itemId);
            o >= r[n] ? PetManager.isDefaultPet(3428) || 0 == n ? SocketConnection.sendByQueue(t.CMDConst.godOfStorm, [12, n + 1],
            function() {
                i.service.updateValues().then(function() {
                    switch (n) {
                    case 3:
                        BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                        break;
                    case 2:
                        BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                    }
                    i.update()
                })
            }):
            BubblerManager.getInstance().showText("请将疾·阿洛纳斯设置为出战背包首发！"):
            BubblerManager.getInstance().showText("您没有足够的疾风信标！")
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.forever_pet_state), i = ItemManager.getNumByID(this.itemId), n = 1; 4 > n; n++) {
                var r = !!KTool.getBit(e, n + 1);
                this["imgGet_" + n].visible = r,
                this["icon_" + n].touchEnabled = !r,
                DisplayUtil.setEnabled(this["btndui_" + n], !r, r)
            }
            this.state[0] = 1 == KTool.getBit(e, 1),
            this.itemNumText.text = "" + i,
            DisplayUtil.setEnabled(this.btndui_0, !this.state[0], this.state[0]),
            DisplayUtil.setEnabled(this.btnyijian, !this.state[0], this.state[0])
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "godOfStorm.MainPanel")
} (godOfStorm || (godOfStorm = {}));
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
godOfStorm; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.itemId = 1713997,
            i.bossId = 10480,
            i.petName = ["风风", "克拉瑞斯", "奥利弗", "古德奈特", "露比", "恩里克", "艾迪尔", "皮特萨拉罗", "无", "敌人的攻击会使你冻伤", "敌人的攻击会使你烧伤", "敌人的攻击会使你害怕", "敌人在血量较低时会回满\n血", "敌人每回合会强化自己", "敌人在3回合后会极为狂暴", "敌人必定先出手，并极难\n命中", "敌人必定先出手，并极难\n命中"],
            i.skinName = t.TrialPanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(84, this, "gos_trial_panel_toptitle_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.adaptRightContent(this.grp_right),
            this.adaptLeftContent(this.grp_btns),
            this.addEvent(),
            this.service.registerItemUpdateForText(this.itemId, this.txtCoin, this)
        },
        i.prototype.beforeAdd = function() {
            StatLogger.log("20211112版本系统功能", "疾·阿洛纳斯", "打开疾风的试炼")
        },
        i.prototype.beforeUpdate = function() {
            return this.service.updateValues(),
            Promise.resolve()
        },
        i.prototype.checkfinish = function() {
            var e = this;
            FightManager.isWin && this.service.updateValues().then(function() {
                var i = new t.WinPop(e.service);
                e.service.openPop(i)
            })
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this),
            ImageButtonUtil.add(this.btncure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(84)
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
            ImageButtonUtil.add(this.btnadd,
            function() {
                BuyProductManager.buyProduct("251139_10469",
                function() {
                    e.update()
                },
                e, 1713997)
            },
            this),
            ImageButtonUtil.add(this.btnget,
            function() {
                return 1 == e.service.getValue(t.AttrConst.daily_has_get) ? void Alarm.show("您今天已经领取过额外奖励了") : void SocketConnection.sendByQueue(t.CMDConst.godOfStorm, [13, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var i = e.service.getValue(t.AttrConst.daily_trial_progress),
                n = "挑战试炼BOSS" + (i + 1);
                StatLogger.log("20211112版本系统功能", "疾·阿洛纳斯", n),
                FightManager.fightNoMapBoss(e.bossId + i)
            },
            this)
        },
        i.prototype.update = function() {
            for (var e = this.service.getValue(t.AttrConst.daily_has_get), i = this.service.getValue(t.AttrConst.forever_trial_times), n = this.service.getValue(t.AttrConst.daily_trial_progress), r = this.service.getValue(t.AttrConst.forever_lasttrial_time), o = this.service.getValue(t.AttrConst.daily_begintrial_time), s = 1; 8 >= s; s++) this["pet" + s].visible = n == s - 1;
            this.isNextDay(r) && (i = 0),
            this.txt1.text = n + "/8",
            this.txt3.text = this.petName[n],
            this.txt4.text = this.petName[n + 8],
            this.winturns.text = i.toString(),
            3 > i ? this.item1.text = 0 == i ? "5": "" + 5 * (i + 1) : this.item1.text = "15",
            8 == n ? (this.pet8.visible = !0, this.setTxtTime((1e3 * r - 1e3 * o) / 1e3), i >= 3 ? this.item1.text = "15": this.item1.text = "" + 5 * i) : 0 == n ? this.txt2.text = "0": this.setTxtTime(SystemTimerManager.sysBJDate.getTime() / 1e3 - o),
            this.tomorrow1.visible = 1 == e,
            this.tomorrow2.visible = 8 == n,
            this.btnfight.visible = 8 != n,
            DisplayUtil.setEnabled(this.btnfight, 8 != n, 8 == n),
            DisplayUtil.setEnabled(this.btnget, 1 != e && 8 == n, 1 == e || 8 != n),
            this.btnget.visible = 1 != e
        },
        i.prototype.setTxtTime = function(t) {
            var e = Math.floor(t / 60),
            i = t % 60;
            this.txt2.text = (10 > ~~e ? "0": "") + e.toString() + ":" + (10 > ~~i ? "0": "") + ~~i.toString()
        },
        i.prototype.isNextDay = function(t) {
            var e = new Date(1e3 * t),
            i = e.getHours(),
            n = e.getMinutes(),
            r = e.getSeconds(),
            o = 864e5,
            s = o - 1e3 * (r + 60 * n + 3600 * i),
            _ = SystemTimerManager.sysBJDate.getTime() - 1e3 * t > 864e5 + s;
            return _
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.checkfinish, this)
        },
        i
    } (BasicPanel);
    t.TrialPanel = e,
    __reflect(e.prototype, "godOfStorm.TrialPanel")
} (godOfStorm || (godOfStorm = {}));
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
godOfStorm; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.WinPopSkin,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.update()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnconfirm,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.update = function() {
            var e = (this.service.getValue(t.AttrConst.forever_lasttrial_time), this.service.getValue(t.AttrConst.daily_begintrial_time)),
            i = this.service.getValue(t.AttrConst.daily_trial_progress);
            this.setTxtTime((SystemTimerManager.sysBJDate.getTime() - 1e3 * e) / 1e3),
            this.progresstxt.text = i + "/8"
        },
        i.prototype.setTxtTime = function(t) {
            var e = Math.floor(t / 60),
            i = t % 60;
            this.timetxt.text = (10 > ~~e ? "0": "") + e.toString() + ":" + (10 > ~~i ? "0": "") + ~~i.toString()
        },
        i
    } (PopView);
    t.WinPop = e,
    __reflect(e.prototype, "godOfStorm.WinPop")
} (godOfStorm || (godOfStorm = {})),
window.godOfStorm = window.godOfStorm || {};
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
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.godOfStorm.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnInfo", "btnyijian", "btntrial", "icon_3", "imgGet_3", "btndui_3", "icon_2", "imgGet_2", "btndui_2", "icon_1", "imgGet_1", "btndui_1", "peudui", "btndui_0", "right", "itemNumText", "btnadd", "righttop", "grp_right", "btnback", "btnhelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.btnInfo_i(), this.btnyijian_i(), this.grp_right_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.horizontalCenter = 0,
        t.source = "gos_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "gos_main_panel_btninfo_png",
        t.x = 20,
        t.y = 559,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.source = "gos_main_panel_btnyijian_png",
        t.x = 114,
        t.y = 559,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.right = 23,
        t.y = 2,
        t.elementsContent = [this.btntrial_i(), this.right_i(), this.righttop_i()],
        t
    },
    i.btntrial_i = function() {
        var t = new eui.Image;
        return this.btntrial = t,
        t.source = "gos_main_panel_btntrial_png",
        t.x = 123,
        t.y = 502,
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.x = 0,
        t.y = 103,
        t.elementsContent = [this._Image2_i(), this.icon_3_i(), this.imgGet_3_i(), this.btndui_3_i(), this._Image3_i(), this.icon_2_i(), this.imgGet_2_i(), this.btndui_2_i(), this._Image4_i(), this.icon_1_i(), this.imgGet_1_i(), this.btndui_1_i(), this._Image5_i(), this.peudui_i(), this.btndui_0_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_te_png",
        t.x = 9,
        t.y = 279,
        t
    },
    i.icon_3_i = function() {
        var t = new eui.Image;
        return this.icon_3 = t,
        t.source = "gos_main_panel_icon_te_png",
        t.x = 157,
        t.y = 288,
        t
    },
    i.imgGet_3_i = function() {
        var t = new eui.Image;
        return this.imgGet_3 = t,
        t.source = "gos_main_panel_imgget_png",
        t.visible = !0,
        t.x = 124,
        t.y = 299,
        t
    },
    i.btndui_3_i = function() {
        var t = new eui.Image;
        return this.btndui_3 = t,
        t.source = "gos_main_panel_btndui_3_png",
        t.x = 266,
        t.y = 281,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_wu_png",
        t.x = 9,
        t.y = 214,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.source = "gos_main_panel_icon_wu_png",
        t.x = 156,
        t.y = 221,
        t
    },
    i.imgGet_2_i = function() {
        var t = new eui.Image;
        return this.imgGet_2 = t,
        t.source = "gos_main_panel_imgget_png",
        t.x = 124,
        t.y = 236,
        t
    },
    i.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "gos_main_panel_btndui_2_png",
        t.x = 266,
        t.y = 218,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_ke_png",
        t.x = 9,
        t.y = 149,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.source = "gos_main_panel_icon_ke_png",
        t.visible = !0,
        t.x = 157,
        t.y = 158,
        t
    },
    i.imgGet_1_i = function() {
        var t = new eui.Image;
        return this.imgGet_1 = t,
        t.source = "gos_main_panel_imgget_png",
        t.x = 124,
        t.y = 171,
        t
    },
    i.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "gos_main_panel_btndui_1_png",
        t.x = 266,
        t.y = 153,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_up_png",
        t.x = 0,
        t.y = 110,
        t
    },
    i.peudui_i = function() {
        var t = new eui.Image;
        return this.peudui = t,
        t.source = "gos_main_panel_peudui_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "gos_main_panel_btndui_0_png",
        t.visible = !0,
        t.x = 266,
        t.y = 36,
        t
    },
    i.righttop_i = function() {
        var t = new eui.Group;
        return this.righttop = t,
        t.x = 291,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.itemNumText_i(), this._Label1_i(), this.btnadd_i(), this._Image7_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_img_di2_png",
        t.x = 0,
        t.y = 12,
        t
    },
    i.itemNumText_i = function() {
        var t = new eui.Label;
        return this.itemNumText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "000",
        t.textColor = 10331637,
        t.x = 127,
        t.y = 13,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "疾风信标：",
        t.textColor = 10331637,
        t.visible = !0,
        t.x = 42,
        t.y = 14,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "gos_main_panel_add_y_png",
        t.x = 170,
        t.y = 13,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_1713997_kb_4_png",
        t.x = 9,
        t.y = 0,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.btnback_i(), this.btnhelp_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "gos_main_panel_btnback_png",
        t.x = 17,
        t.y = 10,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "gos_main_panel_btnhelp_png",
        t.x = 92,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TrialPanelSkin.exml"] = window.godOfStorm.TrialPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet8", "pet7", "pet6", "pet5", "pet4", "pet3", "pet2", "pet1", "btnpet", "btncure", "grp_btns", "btnfight", "tomorrow2", "txt4", "txt3", "txt2", "txt1", "btnget", "tomorrow1", "winturns", "item1", "txtCoin", "btnadd", "grp_right", "btnback", "btnhelp", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this.grp_btns_i(), this.grp_right_i(), this.top_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "gos_trial_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gos_trial_panel_petbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 122,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 40,
        t.visible = !0,
        t.y = 38,
        t.elementsContent = [this.pet8_i(), this.pet7_i(), this.pet6_i(), this.pet5_i(), this.pet4_i(), this.pet3_i(), this.pet2_i(), this.pet1_i()],
        t
    },
    i.pet8_i = function() {
        var t = new eui.Image;
        return this.pet8 = t,
        t.source = "gos_trial_panel_3098_png",
        t.visible = !0,
        t.x = 21,
        t.y = 64,
        t
    },
    i.pet7_i = function() {
        var t = new eui.Image;
        return this.pet7 = t,
        t.source = "gos_trial_panel_1841_png",
        t.visible = !0,
        t.x = 80,
        t.y = 90,
        t
    },
    i.pet6_i = function() {
        var t = new eui.Image;
        return this.pet6 = t,
        t.source = "gos_trial_panel_1861_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    i.pet5_i = function() {
        var t = new eui.Image;
        return this.pet5 = t,
        t.source = "gos_trial_panel_1643_png",
        t.visible = !0,
        t.x = 122,
        t.y = 44,
        t
    },
    i.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "gos_trial_panel_1947_png",
        t.visible = !0,
        t.x = 95,
        t.y = 0,
        t
    },
    i.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "gos_trial_panel_2008_png",
        t.visible = !0,
        t.x = 68,
        t.y = 86,
        t
    },
    i.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "gos_trial_panel_1886_png",
        t.visible = !0,
        t.x = 134,
        t.y = 86,
        t
    },
    i.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "gos_trial_panel_2633_png",
        t.visible = !0,
        t.x = 108,
        t.y = 81,
        t
    },
    i.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 26,
        t.y = 259,
        t.elementsContent = [this.btnpet_i(), this.btncure_i()],
        t
    },
    i.btnpet_i = function() {
        var t = new eui.Image;
        return this.btnpet = t,
        t.source = "gos_trial_panel_btnpet_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btncure_i = function() {
        var t = new eui.Image;
        return this.btncure = t,
        t.source = "gos_trial_panel_btncure_png",
        t.x = 0,
        t.y = 74,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.x = 620,
        t.y = 2,
        t.elementsContent = [this._Group2_i(), this._Group3_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 103,
        t.elementsContent = [this._Image3_i(), this.btnfight_i(), this.tomorrow2_i(), this.txt4_i(), this.txt3_i(), this.txt2_i(), this.txt1_i(), this._Image4_i(), this.btnget_i(), this.tomorrow1_i(), this.winturns_i(), this.item1_i(), this._Image5_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gos_trial_panel_trialbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 138,
        t
    },
    i.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "gos_trial_panel_btnfight_png",
        t.x = 341,
        t.y = 277,
        t
    },
    i.tomorrow2_i = function() {
        var t = new eui.Image;
        return this.tomorrow2 = t,
        t.height = 48,
        t.source = "gos_trial_panel_tomorrow_png",
        t.width = 135,
        t.x = 341,
        t.y = 277,
        t
    },
    i.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "战胜条件",
        t.textColor = 10331637,
        t.x = 130,
        t.y = 294,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "精灵名",
        t.textColor = 10331637,
        t.x = 129,
        t.y = 259,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "00：00",
        t.textColor = 10331637,
        t.x = 130,
        t.y = 225,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "0/8",
        t.textColor = 10331637,
        t.x = 130,
        t.y = 192,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gos_trial_panel_ewbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnget_i = function() {
        var t = new eui.Image;
        return this.btnget = t,
        t.source = "gos_trial_panel_btnget_png",
        t.x = 341,
        t.y = 71,
        t
    },
    i.tomorrow1_i = function() {
        var t = new eui.Image;
        return this.tomorrow1 = t,
        t.height = 48,
        t.source = "gos_trial_panel_tomorrow_png",
        t.visible = !0,
        t.width = 135,
        t.x = 341,
        t.y = 71,
        t
    },
    i.winturns_i = function() {
        var t = new eui.Label;
        return this.winturns = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "000",
        t.textColor = 10331637,
        t.x = 130,
        t.y = 88,
        t
    },
    i.item1_i = function() {
        var t = new eui.Label;
        return this.item1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "x00",
        t.textColor = 10331637,
        t.x = 274,
        t.y = 56,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_1713997_kb_4_png",
        t.x = 236,
        t.y = 40,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 292,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txtCoin_i(), this._Label1_i(), this.btnadd_i(), this._Image7_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_img_di2_png",
        t.x = 0,
        t.y = 12,
        t
    },
    i.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "000",
        t.textColor = 10331637,
        t.x = 127,
        t.y = 13,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "疾风信标：",
        t.textColor = 10331637,
        t.x = 42,
        t.y = 14,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "gos_main_panel_add_y_png",
        t.x = 170,
        t.y = 13,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_1713997_kb_4_png",
        t.x = 9,
        t.y = 0,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.btnback_i(), this.btnhelp_i(), this._Image9_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gos_main_panel_up_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "gos_main_panel_btnback_png",
        t.x = 17,
        t.y = 10,
        t
    },
    i.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.source = "gos_main_panel_btnhelp_png",
        t.x = 245,
        t.y = 5,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gos_trial_panel_toptitle_png",
        t.visible = !0,
        t.x = 78,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/WinPopSkin.exml"] = window.godOfStorm.WinPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnconfirm", "timetxt", "progresstxt", "pop"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.pop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.x = 378,
        t.y = 193,
        t.elementsContent = [this._Image1_i(), this.btnconfirm_i(), this._Group1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gos_win_pop_popbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnconfirm_i = function() {
        var t = new eui.Image;
        return this.btnconfirm = t,
        t.source = "gos_win_pop_btnconfirm_png",
        t.x = 138,
        t.y = 194,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 90,
        t.y = 85,
        t.elementsContent = [this.timetxt_i(), this._Label1_i(), this.progresstxt_i(), this._Label2_i()],
        t
    },
    i.timetxt_i = function() {
        var t = new eui.Label;
        return this.timetxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 24.0135346826242,
        t.text = "00：00",
        t.textColor = 10331637,
        t.x = 121,
        t.y = 42,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24.0135346826242,
        t.text = "累计用时：",
        t.textColor = 10331637,
        t.x = 1,
        t.y = 42,
        t
    },
    i.progresstxt_i = function() {
        var t = new eui.Label;
        return this.progresstxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 24.0135346826242,
        t.text = "0/8",
        t.textColor = 10331637,
        t.x = 121,
        t.y = 1,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24.0135346826242,
        t.text = "试炼进度：",
        t.textColor = 10331637,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin);