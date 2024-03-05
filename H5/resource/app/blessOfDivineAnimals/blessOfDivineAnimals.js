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
blessOfDivineAnimals; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.DataConst.forever_lockState], t.DataConst.daily_State),
            i.init([{
                panelName: t.DataConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.DataConst.PANEL2
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.BlessOfDivineAnimals = e,
    __reflect(e.prototype, "blessOfDivineAnimals.BlessOfDivineAnimals")
} (blessOfDivineAnimals || (blessOfDivineAnimals = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
blessOfDivineAnimals; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "blessOfDivineAnimals.MainPanel",
        t.PANEL2 = "blessOfDivineAnimals.Panel2",
        t.itemsId = [1724909, 1724910, 1724911, 1724912, 1724913],
        t.daily_State = [201512, 201513, 201514, 201515, 201516],
        t.forever_lockState = 121555,
        t.BossID = [18386, 18389, 18392, 18395, 18398],
        t
    } ();
    t.DataConst = e,
    __reflect(e.prototype, "blessOfDivineAnimals.DataConst")
} (blessOfDivineAnimals || (blessOfDivineAnimals = {}));
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
blessOfDivineAnimals; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MainpanelSkin,
            e.prototype.initBtnClose.call(i, "boda_mainpanel_title_png", i,
            function() {
                i.service.closeModule()
            },
            i),
            e.prototype.initBtnHelpById.call(i, 114, i),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.update(),
            this.addEvent()
        },
        i.prototype.update = function() {
            for (var e = 0; 5 > e; e++) {
                var i = this.service.getValue(t.DataConst.daily_State[e]);
                this["txt_time" + (e + 1)].text = i + "  /  5"
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnMark,
            function() {
                e.service.closeModule(),
                EventManager.dispatchEventWith("event_jump_to_animalMark", !1, {
                    subType: "ADVANCE",
                    childParam: 3
                }),
                egret.lifecycle.stage.touchChildren = !1,
                egret.setTimeout(function() {
                    EventManager.dispatchEventWith("event_jump_to_animalMark", !1, {
                        subType: "MARK",
                        childParam: 3
                    }),
                    egret.lifecycle.stage.touchChildren = !0
                },
                e, 400)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["grp_page" + (i + 1)],
                function() {
                    e.service.openPanel(t.DataConst.PANEL2, i + 1)
                },
                n)
            },
            n = this, a = 0; 5 > a; a++) i(a)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "blessOfDivineAnimals.MainPanel")
} (blessOfDivineAnimals || (blessOfDivineAnimals = {}));
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
blessOfDivineAnimals; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "blessOfDivineAnimals.Panel2Skin",
            e.prototype.initBtnClose.call(t, "boda_mainpanel_title_png", t,
            function() {
                t.service.updateValues().then(function() {
                    t.service.backToMainPanel()
                })
            },
            t),
            t.curPanel = 1,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvent()
        },
        i.prototype.beforeAdd = function(t) {
            this.curPanel = t,
            this.initData()
        },
        i.prototype.initData = function() {
            GameInfo.isChecking && (this.btnadd.visible = !1);
            for (var e = 0; 3 > e; e++) this["icon" + (e + 1)].source = ClientConfig.getItemIcon(t.DataConst.itemsId[this.curPanel - 1]),
            this["page" + (e + 1)].source = "boda_panel2_page" + this.curPanel + "_" + (e + 1) + "_png",
            this["txtNum" + (e + 1)].text = "*" + 3 * (e + 1);
            this.icon.source = ClientConfig.getItemIcon(t.DataConst.itemsId[this.curPanel - 1]),
            this.icontip1.source = ClientConfig.getItemIcon(1400153),
            this.icontip2.source = ClientConfig.getItemIcon(1400152),
            this.icontip0.source = ClientConfig.getItemIcon(2500005),
            this.update()
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = function(i) {
                ImageButtonUtil.addWithoutLock(n["grp_page" + (i + 1)],
                function() {
                    return 5 == e.times ? void BubblerManager.getInstance().showText("您的挑战次数不足！") : e["flag" + (i + 1)].visible ? void Alert.show("当前关卡已解锁扫荡资格，是否确认消耗道具进行快速扫荡？",
                    function() {
                        var t = ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005);
                        return 0 >= t ? void BubblerManager.getInstance().showText("道具数量不足") : void SocketConnection.sendByQueue(41388, [58, 3 * (e.curPanel - 1) + i + 1],
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    function() {
                        FightManager.fightNoMapBoss(t.DataConst.BossID[e.curPanel - 1] + i)
                    }) : void FightManager.fightNoMapBoss(t.DataConst.BossID[e.curPanel - 1] + i)
                },
                n),
                ImageButtonUtil.add(n["icon" + (i + 1)],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t.DataConst.itemsId[e.curPanel - 1]
                    })
                },
                n)
            },
            n = this, a = 0; 3 > a; a++) i(a);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(41388, [58, 21]).then(function() {
                        e._openDoubleFlags = !0,
                        e.imgSwitchOn.visible = !0,
                        e.imgSwitchOff.visible = !1,
                        e.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                e.isSwitchOn && SocketConnection.sendWithPromise(41388, [58, 20]).then(function() {
                    e._openDoubleFlags = !1,
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.icon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: t.DataConst.itemsId[e.curPanel - 1]
                })
            },
            this),
            ImageButtonUtil.add(this.icontip1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.icontip2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icontip0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.update = function() {
            for (var e = this,
            i = this.service.getValue(t.DataConst.forever_lockState), n = KTool.getBit(i, 21), a = 0; 3 > a; a++) this["flag" + (a + 1)].visible = 1 == KTool.getBit(i, 3 * (this.curPanel - 1) + a + 1);
            this._openDoubleFlags = 1 == n,
            this.isSwitchOn = this._openDoubleFlags,
            this.imgSwitchOff.visible = !this._openDoubleFlags,
            this.imgSwitchOn.visible = this._openDoubleFlags,
            this.txt_itemNum3.text = ItemManager.getNumByID(1400153).toString(),
            this.txt_itemNum4.text = ItemManager.getNumByID(1400152).toString(),
            this.txt_itemNum0.text = ItemManager.getNumByID(2500005).toString(),
            this.times = this.service.getValue(t.DataConst.daily_State[this.curPanel - 1]),
            ItemManager.updateItems(t.DataConst.itemsId,
            function() {
                e.txtCoin2.text = ItemManager.getNumByID(t.DataConst.itemsId[e.curPanel - 1]) + ""
            }),
            this.txt_time.text = this.times + "/5"
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.Panel2 = e,
    __reflect(e.prototype, "blessOfDivineAnimals.Panel2")
} (blessOfDivineAnimals || (blessOfDivineAnimals = {})),
window.blessOfDivineAnimals = window.blessOfDivineAnimals || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.blessOfDivineAnimals.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnMark", "page1", "txt_time1", "grp_page1", "page2", "txt_time2", "grp_page2", "page3", "txt_time3", "grp_page3", "page4", "txt_time4", "grp_page4", "page5", "txt_time5", "grp_page5", "grp_content"],
        this.height = 640,
        this.width = 1472,
        this.elementsContent = [this.bg_i(), this.grp_content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "boda_mainpanel_bg_jpg",
        t.y = 0,
        t
    },
    i.grp_content_i = function() {
        var t = new eui.Group;
        return this.grp_content = t,
        t.horizontalCenter = 6,
        t.width = 1100,
        t.y = 60,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.btnMark_i(), this.grp_page1_i(), this.grp_page2_i(), this.grp_page3_i(), this.grp_page4_i(), this.grp_page5_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "boda_mainpanel_xz_1_png",
        t.x = 15,
        t.y = 504,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "boda_mainpanel_jx_2_kb_png",
        t.x = 14,
        t.y = 515,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "boda_mainpanel_juxing_2_png",
        t.x = 0,
        t.y = 502,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.stroke = .1,
        t.strokeColor = 4187130,
        t.text = "挑战不同的神兽即可获得对应守护谕，兑换神兽初始形态、冠名刻印、相关道具",
        t.textColor = 4187130,
        t.x = 20,
        t.y = 522,
        t
    },
    i.btnMark_i = function() {
        var t = new eui.Image;
        return this.btnMark = t,
        t.source = "boda_mainpanel_mark_png",
        t.x = 937,
        t.y = 463,
        t
    },
    i.grp_page1_i = function() {
        var t = new eui.Group;
        return this.grp_page1 = t,
        t.x = 10,
        t.y = 0,
        t.elementsContent = [this.page1_i(), this.txt_time1_i()],
        t
    },
    i.page1_i = function() {
        var t = new eui.Image;
        return this.page1 = t,
        t.source = "boda_mainpanel_pet1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_time1_i = function() {
        var t = new eui.Label;
        return this.txt_time1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5  /  5",
        t.textColor = 16514895,
        t.x = 81,
        t.y = 412,
        t
    },
    i.grp_page2_i = function() {
        var t = new eui.Group;
        return this.grp_page2 = t,
        t.x = 226,
        t.y = 30,
        t.elementsContent = [this.page2_i(), this.txt_time2_i()],
        t
    },
    i.page2_i = function() {
        var t = new eui.Image;
        return this.page2 = t,
        t.source = "boda_mainpanel_pet2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_time2_i = function() {
        var t = new eui.Label;
        return this.txt_time2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5  /  5",
        t.textColor = 16514895,
        t.x = 81,
        t.y = 412,
        t
    },
    i.grp_page3_i = function() {
        var t = new eui.Group;
        return this.grp_page3 = t,
        t.x = 442,
        t.y = 0,
        t.elementsContent = [this.page3_i(), this.txt_time3_i()],
        t
    },
    i.page3_i = function() {
        var t = new eui.Image;
        return this.page3 = t,
        t.source = "boda_mainpanel_pet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_time3_i = function() {
        var t = new eui.Label;
        return this.txt_time3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5  /  5",
        t.textColor = 16514895,
        t.x = 81,
        t.y = 412,
        t
    },
    i.grp_page4_i = function() {
        var t = new eui.Group;
        return this.grp_page4 = t,
        t.x = 657,
        t.y = 30,
        t.elementsContent = [this.page4_i(), this.txt_time4_i()],
        t
    },
    i.page4_i = function() {
        var t = new eui.Image;
        return this.page4 = t,
        t.source = "boda_mainpanel_pet4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_time4_i = function() {
        var t = new eui.Label;
        return this.txt_time4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5  /  5",
        t.textColor = 16514895,
        t.x = 82,
        t.y = 412,
        t
    },
    i.grp_page5_i = function() {
        var t = new eui.Group;
        return this.grp_page5 = t,
        t.x = 873,
        t.y = 0,
        t.elementsContent = [this.page5_i(), this.txt_time5_i()],
        t
    },
    i.page5_i = function() {
        var t = new eui.Image;
        return this.page5 = t,
        t.source = "boda_mainpanel_pet5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_time5_i = function() {
        var t = new eui.Label;
        return this.txt_time5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "5  /  5",
        t.textColor = 16514895,
        t.x = 81,
        t.y = 420,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.blessOfDivineAnimals.Panel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img_di2", "icon", "btnadd", "txtCoin2", "top_mid", "txt_itemNum0", "icontip0", "item5", "txt_itemNum3", "icontip1", "item3", "txt_itemNum4", "icontip2", "imgSwitchOff", "imgSwitchOn", "item4", "page1", "flag1", "icon1", "txtNum1", "grp_item1", "grp_page1", "page2", "flag2", "icon2", "txtNum2", "grp_item2", "grp_page2", "page3", "flag3", "icon3", "txtNum3", "grp_item3", "grp_page3", "txt_time", "btnCure", "btnPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.top_mid_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "boda_mainpanel_bg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    i.top_mid_i = function() {
        var t = new eui.Group;
        return this.top_mid = t,
        t.right = 460,
        t.y = 10,
        t.elementsContent = [this.img_di2_i(), this.icon_i(), this.btnadd_i(), this.txtCoin2_i()],
        t
    },
    i.img_di2_i = function() {
        var t = new eui.Image;
        return this.img_di2 = t,
        t.source = "boda_panel2_img_di2_png",
        t.x = 8,
        t.y = 6,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.source = "",
        t.width = 30,
        t.x = 10,
        t.y = 2,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "boda_panel2_btnadd_png",
        t.x = 124,
        t.y = 6,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 46,
        t.y = 7,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.y = 10,
        t.elementsContent = [this.item5_i(), this.item3_i(), this.item4_i()],
        t
    },
    i.item5_i = function() {
        var t = new eui.Group;
        return this.item5 = t,
        t.x = -124,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_itemNum0_i(), this.icontip0_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "boda_panel2_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 6.508,
        t
    },
    i.icontip0_i = function() {
        var t = new eui.Image;
        return this.icontip0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txt_itemNum3_i(), this.icontip1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "boda_panel2_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum3_i = function() {
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
    i.icontip1_i = function() {
        var t = new eui.Image;
        return this.icontip1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    i.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 123,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.txt_itemNum4_i(), this.icontip2_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "boda_panel2_main_panel_img_di2_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum4_i = function() {
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
    i.icontip2_i = function() {
        var t = new eui.Image;
        return this.icontip2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 13,
        t.y = 2,
        t
    },
    i.imgSwitchOff_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOff = t,
        t.source = "boda_panel2_main_panel_imgswitchoff_png",
        t.visible = !0,
        t.x = 120,
        t.y = 7,
        t
    },
    i.imgSwitchOn_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOn = t,
        t.source = "boda_panel2_main_panel_imgswitchon_png",
        t.visible = !1,
        t.x = 120,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -44.5,
        t.touchEnabled = !1,
        t.width = 1050,
        t.y = 69,
        t.elementsContent = [this._Image4_i(), this.grp_page1_i(), this.grp_page2_i(), this.grp_page3_i(), this.txt_time_i(), this.btnCure_i(), this.btnPet_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "boda_panel2_txtbg_png",
        t.visible = !0,
        t.x = 314,
        t.y = 494,
        t
    },
    i.grp_page1_i = function() {
        var t = new eui.Group;
        return this.grp_page1 = t,
        t.touchChildren = !0,
        t.touchEnabled = !0,
        t.touchThrough = !0,
        t.x = 78,
        t.y = 0,
        t.elementsContent = [this.page1_i(), this.flag1_i(), this.grp_item1_i()],
        t
    },
    i.page1_i = function() {
        var t = new eui.Image;
        return this.page1 = t,
        t.source = "boda_panel2_page1_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag1_i = function() {
        var t = new eui.Image;
        return this.flag1 = t,
        t.source = "boda_panel2_fastFlag_png",
        t.visible = !0,
        t.x = 250,
        t.y = 5,
        t
    },
    i.grp_item1_i = function() {
        var t = new eui.Group;
        return this.grp_item1 = t,
        t.visible = !0,
        t.x = 185,
        t.y = 361,
        t.elementsContent = [this.icon1_i(), this.txtNum1_i()],
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 60,
        t.source = "boda_panel2_tuceng_8_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum1_i = function() {
        var t = new eui.Label;
        return this.txtNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 4548527,
        t.text = "*3",
        t.textColor = 16776958,
        t.x = 48,
        t.y = 50,
        t
    },
    i.grp_page2_i = function() {
        var t = new eui.Group;
        return this.grp_page2 = t,
        t.touchChildren = !0,
        t.x = 412,
        t.y = 0,
        t.elementsContent = [this.page2_i(), this.flag2_i(), this.grp_item2_i()],
        t
    },
    i.page2_i = function() {
        var t = new eui.Image;
        return this.page2 = t,
        t.source = "boda_panel2_page1_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag2_i = function() {
        var t = new eui.Image;
        return this.flag2 = t,
        t.source = "boda_panel2_fastFlag_png",
        t.visible = !0,
        t.x = 250,
        t.y = 5,
        t
    },
    i.grp_item2_i = function() {
        var t = new eui.Group;
        return this.grp_item2 = t,
        t.x = 186,
        t.y = 361,
        t.elementsContent = [this.icon2_i(), this.txtNum2_i()],
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 60,
        t.source = "boda_panel2_tuceng_8_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum2_i = function() {
        var t = new eui.Label;
        return this.txtNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 4548527,
        t.text = "*3",
        t.textColor = 16776958,
        t.x = 48,
        t.y = 50,
        t
    },
    i.grp_page3_i = function() {
        var t = new eui.Group;
        return this.grp_page3 = t,
        t.touchChildren = !0,
        t.x = 746,
        t.y = 0,
        t.elementsContent = [this.page3_i(), this.flag3_i(), this.grp_item3_i()],
        t
    },
    i.page3_i = function() {
        var t = new eui.Image;
        return this.page3 = t,
        t.source = "boda_panel2_page1_3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag3_i = function() {
        var t = new eui.Image;
        return this.flag3 = t,
        t.source = "boda_panel2_fastFlag_png",
        t.visible = !0,
        t.x = 250,
        t.y = 5,
        t
    },
    i.grp_item3_i = function() {
        var t = new eui.Group;
        return this.grp_item3 = t,
        t.x = 187,
        t.y = 361,
        t.elementsContent = [this.icon3_i(), this.txtNum3_i()],
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 60,
        t.source = "boda_panel2_tuceng_8_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtNum3_i = function() {
        var t = new eui.Label;
        return this.txtNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 4548527,
        t.text = "*3",
        t.textColor = 16776958,
        t.x = 48,
        t.y = 50,
        t
    },
    i.txt_time_i = function() {
        var t = new eui.Label;
        return this.txt_time = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "5/5",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 622,
        t.y = 499,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "boda_mainpanel_btncure_png",
        t.x = 185,
        t.y = 464,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "boda_mainpanel_btnpet_png",
        t.x = 92,
        t.y = 464,
        t
    },
    e
} (eui.Skin);