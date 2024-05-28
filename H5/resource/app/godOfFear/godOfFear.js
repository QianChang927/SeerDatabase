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
godOfFear; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.service.setValues([t.AttrConst.forever_boss_difficulty, t.AttrConst.forever_boss_id, t.AttrConst.forever_extract_boss, t.AttrConst.forever_pet_state], [t.AttrConst.daily_reextract_times, t.AttrConst.daily_times, t.AttrConst.daily_win_times]),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            }]),
            n
        }
        return __extends(n, e),
        n
    } (BasicMultPanelModule);
    t.GodOfFear = e,
    __reflect(e.prototype, "godOfFear.GodOfFear")
} (godOfFear || (godOfFear = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
godOfFear; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_boss_id = 102747,
        t.forever_boss_difficulty = 102748,
        t.forever_extract_boss = 102749,
        t.forever_pet_state = 102750,
        t.daily_times = 13304,
        t.daily_win_times = 13305,
        t.daily_reextract_times = 13306,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "godOfFear.AttrConst")
} (godOfFear || (godOfFear = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
godOfFear; !
function(t) {
    var e = function() {
        function t() {}
        return t.godOfFear = 43727,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "godOfFear.CMDConst")
} (godOfFear || (godOfFear = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
godOfFear; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "godOfFear.MainPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "godOfFear.ModuleConst")
} (godOfFear || (godOfFear = {}));
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
godOfFear; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.markId = 41025,
            n.itemId = 1714135,
            n.skinName = t.MainPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(85, this, "godoffear_main_panel_bg_png",
            function() {
                t.service.closeModule()
            },
            this),
            this.adaptLeftContent(this.grp_btns),
            this.addEvents(),
            this.service.registerItemUpdateForText(this.itemId, this.txt_1, this)
        },
        n.prototype.reRandom = function() {
            var e = this;
            SocketConnection.sendByQueue(t.CMDConst.godOfFear, [2, 3],
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            })
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(3439)
            },
            this),
            ImageButtonUtil.add(this.btnbuy,
            function() {
                BuyProductManager.buyProduct("251250_10498",
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                },
                e, 1714135)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                BuyProductManager.buyProduct("251249_10499",
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnBuyPet,
            function() {
                BuyProductManager.buyProductBySocket(251246,
                function() {
                    SocketConnection.sendByQueue(t.CMDConst.godOfFear, [1, 0],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnback,
            function() {
                e.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnhelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(85)
            },
            this),
            ImageButtonUtil.add(this.btndraw1,
            function() {
                e.draw(2, 1)
            },
            this),
            ImageButtonUtil.add(this.btndraw2,
            function() {
                var n = e.service.getValue(t.AttrConst.forever_boss_id);
                return 0 == n ? void Alarm.show("请先进行对手抽取哦！") : void e.draw(2, 2)
            },
            this),
            ImageButtonUtil.add(this.redraw,
            function() {
                var n = e.service.getValue(t.AttrConst.daily_reextract_times, core.constant.ValueType.DAILY),
                i = 0;
                0 == n ? Alert.show("当日第1次重新抽取，需要消耗2w赛尔豆",
                function() {
                    i = MainManager.actorInfo.coins,
                    2e4 > i ? BubblerManager.getInstance().showText("你的赛尔豆不足，无法重新抽取！") : e.reRandom()
                }) : 1 == n ? Alert.show("当日第2次重新抽取，需要消耗20000泰坦之灵",
                function() {
                    i = ItemManager.getNumByID(1400352),
                    2e4 > i ? BubblerManager.getInstance().showText("你的泰坦之灵不足，无法重新抽取！") : e.reRandom()
                }) : BuyProductManager.buyProductBySocket(251248,
                function() {
                    e.reRandom()
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnget,
            function() {
                SocketConnection.sendByQueue(t.CMDConst.godOfFear, [3, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnfight,
            function() {
                var n = e.service.getValue(t.AttrConst.daily_times),
                i = e.service.getValue(t.AttrConst.forever_extract_boss);
                return 0 >= 10 - n ? void Alarm.show("您的挑战次数不足！") : void FightManager.fightNoMapBoss(i)
            },
            this),
            ImageButtonUtil.add(this.icon_ke,
            function() {
                e.service.showMarkInfo(e.markId)
            },
            this),
            ImageButtonUtil.add(this.icon_wu,
            function() {
                e.service.showSkillInfo(31127)
            },
            this),
            ImageButtonUtil.add(this.icon_te,
            function() {
                e.service.showPetEff(3439)
            },
            this);
            for (var n = 0; 4 > n; n++) this["btndui_" + n].index = n,
            ImageButtonUtil.add(this["btndui_" + n], this.exchange, this)
        },
        n.prototype.draw = function(e, n) {
            var i = this;
            SocketConnection.sendByQueue(t.CMDConst.godOfFear, [e, n],
            function() {
                i.service.updateValues().then(function() {
                    var t = i.service.getValue(102746 + n);
                    i.randomAnim(t, n)
                })
            })
        },
        n.prototype.randomAnim = function(t, e) {
            var n = this;
            this["imgdraw" + e].visible = !0;
            var i = {};
            i.index = 1,
            this.touchChildren = !1,
            this.tweenanim = egret.Tween.get(i, {
                onChange: function() {
                    var t = 1 == e ? 90 : 120;
                    if (1 == e) {
                        var r = Math.floor(i.index) % 4;
                        0 == r && (r = 4),
                        3 == r ? t = 270 : 4 == r ? t = 180 : t *= r - 1
                    } else {
                        var r = Math.floor(i.index) % 3;
                        0 == r && (r = 3),
                        t *= r - 1
                    }
                    n["imgdraw" + e].rotation = t
                }
            }).to({
                index: 24 + t
            },
            6e3, egret.Ease.quadInOut).call(function() {
                n["btndraw" + e].visible = !1,
                n.touchChildren = !0,
                n.service.updateValues().then(function() {
                    n.update()
                })
            })
        },
        n.prototype.exchange = function(e) {
            var n = this,
            i = e.currentTarget.index,
            r = [100, 20, 40, 60];
            if (PetManager.isDefaultPet(3439) || 0 == i) {
                var a = ItemManager.getNumByID(this.itemId);
                a >= r[i] ? SocketConnection.sendByQueue(t.CMDConst.godOfFear, [4, i + 1],
                function() {
                    n.service.updateValues().then(function() {
                        switch (i) {
                        case 3:
                            BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                            break;
                        case 2:
                            BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                        }
                        n.update()
                    })
                }):
                BubblerManager.getInstance().showText("您没有足够的恐惧因子！")
            } else BubblerManager.getInstance().showText("请将疾·阿洛纳斯设置为出战背包首发！");
            this.update()
        },
        n.prototype.update = function() {
            var e = this.service.getValue(t.AttrConst.daily_times),
            n = this.service.getValue(t.AttrConst.daily_win_times),
            i = (this.service.getValue(t.AttrConst.daily_reextract_times), this.service.getValue(t.AttrConst.forever_boss_id)),
            r = this.service.getValue(t.AttrConst.forever_boss_difficulty),
            a = this.service.getValue(t.AttrConst.forever_pet_state),
            o = 90 * (i - 1);
            3 == i ? o = 270 : 4 == i && (o = 180),
            this.imgdraw1.visible = 0 != i,
            this.imgdraw2.visible = 0 != r,
            this.imgdraw1.rotation = o,
            this.btnfight.visible = this.redraw.visible = 0 != i && 0 != r,
            this.btndraw1.visible = 0 == i,
            this.btndraw2.visible = 0 == r,
            this.txtCoin.text = "今日还可对战次数: " + (10 - e),
            this.txt_3.text = "：" + n,
            DisplayUtil.setEnabled(this.btnadd, 10 - e == 0, 10 - e != 0),
            DisplayUtil.setEnabled(this.btnget, n >= 5, 5 > n);
            for (var _ = 0; 4 > _; _++) this["imgGet_" + _].visible = a >= _ + 1,
            DisplayUtil.setEnabled(this["btndui_" + _], a == _, a != _);
            a >= 1 && DisplayUtil.setEnabled(this.btnBuyPet, !1, !0),
            a >= 4 && (DisplayUtil.setEnabled(this.btndraw1, !1, !0), DisplayUtil.setEnabled(this.btnbuy, !1, !0), DisplayUtil.setEnabled(this.redraw, !1, !0), DisplayUtil.setEnabled(this.btndraw2, !1, !0), DisplayUtil.setEnabled(this.btnfight, !1, !0), DisplayUtil.setEnabled(this.btnadd, !1, !0))
        },
        n.prototype.destroy = function() {
            this.service.unregisterItems(this),
            e.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "godOfFear.MainPanel")
} (godOfFear || (godOfFear = {})),
window.godOfFear = window.godOfFear || {};
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
generateEUI.paths["resource/eui_skins/GodoffearMainPanelSkin.exml"] = window.godOfFear.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btndraw2", "imgdraw2", "right", "imgdraw1", "btndraw1", "lift", "icon_te", "icon_wu", "icon_ke", "imgGet_0", "btndui_0", "imgGet_1", "btndui_1", "imgGet_3", "btndui_3", "imgGet_2", "btndui_2", "rightdown", "btnget", "txt_3", "txt_1", "btnbuy", "liftdown", "down", "btnadd", "txtCoin", "btnfight", "redraw", "zhong", "btnback", "btnhelp", "top", "btnInfo", "btnPet", "btnCure", "grp_btns", "btnBuyPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this.top_i(), this.grp_btns_i(), this.btnBuyPet_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "godoffear_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = .5,
        t.y = 44,
        t.elementsContent = [this.right_i(), this.lift_i(), this.down_i(), this.zhong_i()],
        t
    },
    n.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.visible = !0,
        t.x = 658,
        t.y = 2,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btndraw2_i(), this.imgdraw2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_bz_item_bg2_png",
        t.visible = !0,
        t.x = 29,
        t.y = 24,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_img_12_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btndraw2_i = function() {
        var t = new eui.Image;
        return this.btndraw2 = t,
        t.source = "godoffear_main_panel_btn3_png",
        t.x = 290,
        t.y = 18,
        t
    },
    n.imgdraw2_i = function() {
        var t = new eui.Image;
        return this.imgdraw2 = t,
        t.anchorOffsetX = 160,
        t.anchorOffsetY = 160,
        t.source = "godoffear_main_panel_img_11_png",
        t.x = 168,
        t.y = 182,
        t
    },
    n.lift_i = function() {
        var t = new eui.Group;
        return this.lift = t,
        t.x = 13,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.imgdraw1_i(), this.btndraw1_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_bz_item_bg1_png",
        t.visible = !0,
        t.x = 20,
        t.y = 29,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_img_10_png",
        t.visible = !0,
        t.x = 61,
        t.y = 0,
        t
    },
    n.imgdraw1_i = function() {
        var t = new eui.Image;
        return this.imgdraw1 = t,
        t.anchorOffsetX = 160,
        t.anchorOffsetY = 160,
        t.source = "godoffear_main_panel_img_9_png",
        t.x = 244,
        t.y = 184,
        t
    },
    n.btndraw1_i = function() {
        var t = new eui.Image;
        return this.btndraw1 = t,
        t.source = "godoffear_main_panel_btn2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 22,
        t
    },
    n.down_i = function() {
        var t = new eui.Group;
        return this.down = t,
        t.visible = !0,
        t.x = 0,
        t.y = 372,
        t.elementsContent = [this.rightdown_i(), this._Group1_i(), this.liftdown_i()],
        t
    },
    n.rightdown_i = function() {
        var t = new eui.Group;
        return this.rightdown = t,
        t.visible = !0,
        t.x = 280,
        t.y = 7,
        t.elementsContent = [this._Image6_i(), this.icon_te_i(), this.icon_wu_i(), this.icon_ke_i(), this._Image7_i(), this.imgGet_0_i(), this.btndui_0_i(), this.imgGet_1_i(), this.btndui_1_i(), this.imgGet_3_i(), this.btndui_3_i(), this.imgGet_2_i(), this.btndui_2_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_jx_4_kb_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.icon_te_i = function() {
        var t = new eui.Image;
        return this.icon_te = t,
        t.source = "godoffear_main_panel_img_7_png",
        t.visible = !0,
        t.x = 447,
        t.y = 7,
        t
    },
    n.icon_wu_i = function() {
        var t = new eui.Image;
        return this.icon_wu = t,
        t.source = "godoffear_main_panel_img_6_png",
        t.x = 305,
        t.y = 7,
        t
    },
    n.icon_ke_i = function() {
        var t = new eui.Image;
        return this.icon_ke = t,
        t.source = "godoffear_main_panel_img_5_png",
        t.x = 163,
        t.y = 7,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_img_8_png",
        t.visible = !0,
        t.x = 21,
        t.y = 7,
        t
    },
    n.imgGet_0_i = function() {
        var t = new eui.Image;
        return this.imgGet_0 = t,
        t.source = "godoffear_main_panel_imgget_png",
        t.x = 33,
        t.y = 82,
        t
    },
    n.btndui_0_i = function() {
        var t = new eui.Image;
        return this.btndui_0 = t,
        t.source = "godoffear_main_panel_btn1_png",
        t.x = 45,
        t.y = 161,
        t
    },
    n.imgGet_1_i = function() {
        var t = new eui.Image;
        return this.imgGet_1 = t,
        t.source = "godoffear_main_panel_imgget_png",
        t.x = 175,
        t.y = 82,
        t
    },
    n.btndui_1_i = function() {
        var t = new eui.Image;
        return this.btndui_1 = t,
        t.source = "godoffear_main_panel_btn1_png",
        t.x = 187,
        t.y = 161,
        t
    },
    n.imgGet_3_i = function() {
        var t = new eui.Image;
        return this.imgGet_3 = t,
        t.source = "godoffear_main_panel_imgget_png",
        t.x = 459,
        t.y = 82,
        t
    },
    n.btndui_3_i = function() {
        var t = new eui.Image;
        return this.btndui_3 = t,
        t.source = "godoffear_main_panel_btn1_png",
        t.x = 471,
        t.y = 161,
        t
    },
    n.imgGet_2_i = function() {
        var t = new eui.Image;
        return this.imgGet_2 = t,
        t.source = "godoffear_main_panel_imgget_png",
        t.x = 317,
        t.y = 82,
        t
    },
    n.btndui_2_i = function() {
        var t = new eui.Image;
        return this.btndui_2 = t,
        t.source = "godoffear_main_panel_btn1_png",
        t.x = 329,
        t.y = 161,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image8_i(), this.btnget_i(), this.txt_3_i(), this._Label1_i()],
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_imgewai_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnget_i = function() {
        var t = new eui.Image;
        return this.btnget = t,
        t.source = "godoffear_main_panel_btnrerandom2_png",
        t.x = 162,
        t.y = 156,
        t
    },
    n.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "/00",
        t.textColor = 14657495,
        t.x = 111,
        t.y = 174,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "已胜利次数",
        t.textColor = 14657495,
        t.x = 13,
        t.y = 173,
        t
    },
    n.liftdown_i = function() {
        var t = new eui.Group;
        return this.liftdown = t,
        t.x = 882,
        t.y = 0,
        t.elementsContent = [this._Image9_i(), this.txt_1_i(), this.btnbuy_i()],
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_img_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "0",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 77,
        t.y = 108,
        t
    },
    n.btnbuy_i = function() {
        var t = new eui.Image;
        return this.btnbuy = t,
        t.source = "godoffear_main_panel_btnorange0_png",
        t.x = 34,
        t.y = 146,
        t
    },
    n.zhong_i = function() {
        var t = new eui.Group;
        return this.zhong = t,
        t.visible = !0,
        t.x = 408,
        t.y = 36,
        t.elementsContent = [this._Image10_i(), this.btnadd_i(), this.txtCoin_i(), this.btnfight_i(), this.redraw_i()],
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_img_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "godoffear_main_panel_add_y_png",
        t.x = 220,
        t.y = 257,
        t
    },
    n.txtCoin_i = function() {
        var t = new eui.Label;
        return this.txtCoin = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = " ",
        t.textColor = 16117492,
        t.x = 40,
        t.y = 259,
        t
    },
    n.btnfight_i = function() {
        var t = new eui.Image;
        return this.btnfight = t,
        t.source = "godoffear_main_panel_btnfight_png",
        t.x = 44,
        t.y = 64,
        t
    },
    n.redraw_i = function() {
        var t = new eui.Image;
        return this.redraw = t,
        t.source = "godoffear_main_panel_btnrerandom1_png",
        t.x = 44,
        t.y = 168,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this.btnback_i(), this.btnhelp_i()],
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "godoffear_main_panel_bg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnback_i = function() {
        var t = new eui.Image;
        return this.btnback = t,
        t.source = "godoffear_main_panel_btnback_png",
        t.x = 18,
        t.y = 10,
        t
    },
    n.btnhelp_i = function() {
        var t = new eui.Image;
        return this.btnhelp = t,
        t.height = 33,
        t.source = "godoffear_main_panel_btnhelp_png",
        t.width = 27,
        t.x = 220,
        t.y = 7,
        t
    },
    n.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 26,
        t.y = 199,
        t.elementsContent = [this.btnInfo_i(), this.btnPet_i(), this.btnCure_i()],
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "godoffear_main_panel_btninfo_png",
        t.x = -14,
        t.y = 0,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 56,
        t.source = "godoffear_main_panel_btnPet_png",
        t.width = 56,
        t.x = 0,
        t.y = 85,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 56,
        t.source = "godoffear_main_panel_btnCure_png",
        t.width = 56,
        t.x = 0,
        t.y = 151,
        t
    },
    n.btnBuyPet_i = function() {
        var t = new eui.Image;
        return this.btnBuyPet = t,
        t.right = -4,
        t.source = "god_of_fear_btnbuypet_png",
        t.y = 273,
        t
    },
    e
} (eui.Skin);