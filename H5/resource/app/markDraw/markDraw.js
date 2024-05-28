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
markDraw; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.AttrConst.daily_current_times, e.AttrConst.daily_current_row, e.AttrConst.daily_afterdraw_mark]),
            i.init([{
                panelName: e.ModuleConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.MarkDraw = t,
    __reflect(t.prototype, "markDraw.MarkDraw")
} (markDraw || (markDraw = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markDraw; !
function(e) {
    var t = function() {
        function e() {}
        return e.daily_current_times = 16577,
        e.daily_afterdraw_mark = 16578,
        e.daily_current_row = 16579,
        e
    } ();
    e.AttrConst = t,
    __reflect(t.prototype, "markDraw.AttrConst")
} (markDraw || (markDraw = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markDraw; !
function(e) {
    var t = function() {
        function e() {}
        return e.MARKDRAW_CMD = 46301,
        e
    } ();
    e.CMDConst = t,
    __reflect(t.prototype, "markDraw.CMDConst")
} (markDraw || (markDraw = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markDraw; !
function(e) {
    var t = function() {
        function e() {}
        return e.markOfcard1 = [40913, 40911, 41e3],
        e.markOfcard2 = [40910, 40914, 40999],
        e.markOfcard3 = [40916, 40917, 40998],
        e.markOfcard4 = [40919, 40920, 40997],
        e.markOfextraCard = [41050, 41051, 41052, 41053],
        e
    } ();
    e.MarkDataConst = t,
    __reflect(t.prototype, "markDraw.MarkDataConst")
} (markDraw || (markDraw = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
markDraw; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "markDraw.MarkDrawMainPanel",
        e
    } ();
    e.ModuleConst = t,
    __reflect(t.prototype, "markDraw.ModuleConst")
} (markDraw || (markDraw = {}));
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
markDraw; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.state = [egret.Ease.quadIn, egret.Ease.quadInOut, egret.Ease.quadOut, egret.Ease.quartIn, egret.Ease.quartInOut, egret.Ease.quartOut, egret.Ease.quintIn, egret.Ease.quintInOut, egret.Ease.quintOut],
            n.skinName = e.MainPanelSkin,
            n.service = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvents(),
            this.update(),
            this.adaptBgByScale(this.bg)
        },
        i.prototype.beforeAdd = function() {
            StatLogger.log("20210930版本系统功能", "刻印抽奖机", "进入【刻印抽奖机】面板")
        },
        i.prototype.initData = function() {
            this.adaptRightContent(this.leiji),
            this.adaptRightContent(this.coins),
            this.animchouka1 = DragonbonesUtil.createAnimate("kapai_ske_json", "kapai_tex_json", "kapai_tex_png", "chouka"),
            this.animchouka1.x = 600,
            this.animchouka1.y = 640,
            this.animchouka1.visible = !1,
            this._contents.addChild(this.animchouka1);
            for (var e = 1; 4 >= e; e++) this["light_" + e].visible = !1;
            this.imgSeerDou.source = ClientConfig.getItemIcon(1),
            this.imgDiamond.source = ClientConfig.getItemIcon(5)
        },
        i.prototype.addEvents = function() {
            var t = this;
            EventManager.addEventListener("MarkGet", this.update, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.update, this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                0 == t.curTimes ? MainManager.actorInfo.coins >= 1e5 ? Alert.show("首次抽奖需要花费10万赛尔豆，确认抽取吗？",
                function() {
                    t.draw()
                }) : BubblerManager.getInstance().showText("您的赛尔豆不足！") : 10 == t.curTimes ? Alarm.show("今日的抽取次数已达上限，请明日再来哦！") : BuyProductManager.buyProductBySocket(250292,
                function() {
                    t.draw()
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                tipsPop.TipsPop.openHelpPopById(70)
            },
            this),
            ImageButtonUtil.add(this.btnGet_1,
            function() {
                StatLogger.log("20210930版本系统功能", "刻印抽奖机", "点击打开【领取指定刻印】弹窗");
                var i = new e.MarkGetPop(t.service, e.MarkDataConst.markOfextraCard);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.btnGet_2,
            function() {
                StatLogger.log("20210930版本系统功能", "刻印抽奖机", "点击打开【领取指定刻印】弹窗");
                var i = new e.MarkGetPop(t.service, e.MarkDataConst.markOfextraCard);
                PopViewManager.getInstance().openView(i)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["card" + i],
                function() {
                    var n = new e.MarkShowPop(t.service, e.MarkDataConst["markOfcard" + i]);
                    PopViewManager.getInstance().openView(n)
                },
                n)
            },
            n = this, a = 1; 4 >= a; a++) i(a);
            ImageButtonUtil.add(this.imgSeerDou,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this)
        },
        i.prototype.draw = function() {
            var t = this;
            this.currow = this.service.getValue(e.AttrConst.daily_current_row),
            SocketConnection.sendByQueue(e.CMDConst.MARKDRAW_CMD, [1, 0],
            function() {
                t.service.updateValues().then(function() {
                    t.skip.selected ? (StatLogger.log("20210930版本系统功能", "刻印抽奖机", "选中【跳过抽奖动画】成功抽奖"), t.updateValues()) : (StatLogger.log("20210930版本系统功能", "刻印抽奖机", "未选中【跳过抽奖动画】成功抽奖"), AwardManager.pause(), t.currow = t.service.getValue(e.AttrConst.daily_current_row), t.randomAnim(t.currow))
                })
            })
        },
        i.prototype.randomAnim = function(e) {
            var t = this,
            i = {};
            this.touchChildren = !1,
            this.parent.parent.parent.touchChildren = !1,
            i.index = 1,
            this.tweenanim = egret.Tween.get(i, {
                onChange: function() {
                    var e = Math.floor(i.index) % 4;
                    0 == e && (e = 4);
                    for (var n = 1; 4 >= n; n++) t["light_" + n].visible = !1;
                    t["light_" + e].visible = !0
                }
            }).to({
                index: 40 + e
            },
            6e3, egret.Ease.quadInOut).wait(300).call(function() {
                t.animchouka1.visible = !0,
                DragonbonesUtil.play(t.animchouka1, ["sun", "moon", "star", "qiu"][e - 1], 1).then(function() {
                    t.touchChildren = !0,
                    t.parent.parent.parent.touchChildren = !0,
                    t.animchouka1.visible = !1;
                    for (var e = 1; 4 >= e; e++) t["light_" + e].visible = !1;
                    AwardManager.resume(),
                    t.updateValues()
                })
            })
        },
        i.prototype.update = function() {
            var t = this;
            if (this.curTimes = this.service.getValue(e.AttrConst.daily_current_times), this.drawTimesText.text = "累计抽取：" + this.curTimes + "/10", this.btnGet_2.visible = 10 == this.curTimes, this.btnDraw.visible = 10 != this.curTimes, this.tomorrow.visible = 10 == this.curTimes, this.btnGet_2.visible) {
                var i = this.service.getValue(e.AttrConst.daily_afterdraw_mark);
                this.btnGet_1.visible = !1,
                DisplayUtil.setEnabled(this.btnGet_2, 0 == i, 0 != i)
            }
            this.coin2Num.text = core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins),
            UserInfoManager.getDiamond(function(e) {
                t.coin1Num.text = core.gameUtil.ConvertItemNumView(e)
            },
            this)
        },
        i.prototype.destroy = function() {
            this.animchouka1.dispose(),
            EventManager.removeEventListener("MarkGet", this.update, this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.update, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.MarkDrawMainPanel = t,
    __reflect(t.prototype, "markDraw.MarkDrawMainPanel")
} (markDraw || (markDraw = {}));
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
markDraw; !
function(e) {
    var t = function(t) {
        function i(i, n) {
            var a = t.call(this) || this;
            return a.skinName = e.PopmarkgetSkin,
            a.service = i,
            a.data = n,
            a
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents(),
            this.update()
        },
        i.prototype.initDat = function() {
            for (var e = 1; 4 >= e; e++) this["mark_" + e].source = ClientConfig.getMarkPath(this.data[e - 1]),
            this["mark_" + e].scaleX = this["mark_" + e].scaleY = 1.5,
            this["mark_" + e].x = 17,
            this["mark_" + e].y = 12,
            this["name_" + e].text = CountermarkXMLInfo.getDes(this.data[e - 1])
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnget_" + i],
                function() {
                    var n = t.service.getValue(e.AttrConst.daily_afterdraw_mark);
                    0 == n ? SocketConnection.sendByQueue(e.CMDConst.MARKDRAW_CMD, [2, i],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update(),
                            EventManager.dispatchEventWith("MarkGet"),
                            t.hide()
                        })
                    }) : Alarm.show("您今天已经领取过了哦！")
                },
                n),
                ImageButtonUtil.add(n["mark_" + i],
                function() {
                    var e = {
                        ins: t.data[i - 1]
                    };
                    tipsPop.TipsPop.openCounterMarkPop(e)
                },
                n)
            },
            n = this, a = 1; 4 >= a; a++) i(a)
        },
        i.prototype.update = function() {
            this.curTimes = this.service.getValue(e.AttrConst.daily_current_times);
            for (var t = this.service.getValue(e.AttrConst.daily_afterdraw_mark), i = 1; 4 >= i; i++) this["btnhasget_" + i].visible = 1 == KTool.getBit(t, i);
            var n = 10 == this.curTimes;
            DisplayUtil.setEnabled(this.btnget_1, n, !n),
            DisplayUtil.setEnabled(this.btnget_2, n, !n),
            DisplayUtil.setEnabled(this.btnget_3, n, !n),
            DisplayUtil.setEnabled(this.btnget_4, n, !n)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.MarkGetPop = t,
    __reflect(t.prototype, "markDraw.MarkGetPop")
} (markDraw || (markDraw = {}));
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
markDraw; !
function(e) {
    var t = function(t) {
        function i(i, n) {
            var a = t.call(this) || this;
            return a.service = i,
            a.data = n,
            a.skinName = e.MarkShowPopSkin,
            a.cacheAsBitmap = !0,
            a
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            for (var e = 1; 3 >= e; e++) {
                this["mark_" + e].source = ClientConfig.getMarkPath(this.data[e - 1]),
                this["markName_" + e].text = CountermarkXMLInfo.getDes(this.data[e - 1]);
                var t = CountermarkXMLInfo.getBaseAttriValue(this.data[e - 1]),
                i = CountermarkXMLInfo.getMaxAttriValue(this.data[e - 1]),
                n = CountermarkXMLInfo.getExtraAttriValue(this.data[e - 1]);
                void 0 == n && (n = [0, 0, 0, 0, 0, 0]),
                this["attack_" + e].text = t[0].toString() + "/" + i[0].toString(),
                this["attackNum_" + e].text = "+" + n[0].toString(),
                this["defence_" + e].text = t[1].toString() + "/" + i[1].toString(),
                this["defenceNum_" + e].text = "+" + n[1].toString(),
                this["exattack_" + e].text = t[2].toString() + "/" + i[2].toString(),
                this["exattackNum_" + e].text = "+" + n[2].toString(),
                this["exdefence_" + e].text = t[3].toString() + "/" + i[3].toString(),
                this["exdefenceNum_" + e].text = "+" + n[3].toString(),
                this["speed_" + e].text = t[4].toString() + "/" + i[4].toString(),
                this["speedNum_" + e].text = "+" + n[4].toString(),
                this["health_" + e].text = t[5].toString() + "/" + i[5].toString(),
                this["healthNum_" + e].text = "+" + n[5].toString()
            }
        },
        i.prototype._parseData = function() {
            t.prototype._parseData.call(this)
        },
        i.prototype.addEvents = function() {
            for (var e = this,
            t = function(t) {
                ImageButtonUtil.add(i["mark_" + t],
                function() {
                    var i = {
                        ins: e.data[t - 1]
                    };
                    tipsPop.TipsPop.openCounterMarkPop(i)
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n)
        },
        i.prototype._upDateView = function() {},
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.MarkShowPop = t,
    __reflect(t.prototype, "markDraw.MarkShowPop")
} (markDraw || (markDraw = {})),
window.markDraw = window.markDraw || {};
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
generateEUI.paths["resource/eui_skins/MarkdrawMainPanelSkin.exml"] = window.markDraw.MainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "skiptxt", "skip", "grp_skip", "btnInfo", "btnDraw", "tomorrow", "card1_2", "card1_3", "card1_4", "light_1", "card1", "card2_2", "card2_3", "card2_4", "light_2", "card2", "card3_2", "card3_3", "card3_4", "light_3", "card3", "card4_2", "card4_3", "card4_4", "light_4", "card4", "_contents", "coin2Num", "imgSeerDou", "coin1Num", "imgDiamond", "coins", "btnGet_1", "btnGet_2", "drawTimesText", "leiji"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._contents_i(), this.coins_i(), this.leiji_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "markDraw_main_panel_icon_right_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "markDraw_main_panel_img_xuanze_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.horizontalCenter = -.5,
        e.source = "markDraw_main_panel_newbg_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    n._contents_i = function() {
        var e = new eui.Group;
        return this._contents = e,
        e.horizontalCenter = 0,
        e.visible = !0,
        e.width = 1136,
        e.y = 25,
        e.elementsContent = [this.grp_skip_i(), this._Image1_i(), this.btnInfo_i(), this.btnDraw_i(), this.tomorrow_i(), this.card1_i(), this.card2_i(), this.card3_i(), this.card4_i()],
        e
    },
    n.grp_skip_i = function() {
        var e = new eui.Group;
        return this.grp_skip = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 211,
        e.y = 538,
        e.elementsContent = [this.skiptxt_i(), this.skip_i()],
        e
    },
    n.skiptxt_i = function() {
        var e = new eui.Label;
        return this.skiptxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.8333358764648,
        e.text = "跳过抽卡动画",
        e.textColor = 12690431,
        e.x = 30,
        e.y = 2,
        e
    },
    n.skip_i = function() {
        var e = new eui.CheckBox;
        return this.skip = e,
        e.visible = !0,
        e.x = 0,
        e.y = .33,
        e.skinName = i,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_main_panel_title_png",
        e.visible = !0,
        e.x = 193,
        e.y = 0,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "markDraw_main_panel_btnInfo_png",
        e.x = 518,
        e.y = 119,
        e
    },
    n.btnDraw_i = function() {
        var e = new eui.Image;
        return this.btnDraw = e,
        e.height = 90,
        e.source = "markDraw_main_panel_btnFight_png",
        e.visible = !0,
        e.width = 226,
        e.x = 502,
        e.y = 501,
        e
    },
    n.tomorrow_i = function() {
        var e = new eui.Image;
        return this.tomorrow = e,
        e.height = 49,
        e.source = "markDraw_main_panel_tomorrow_png",
        e.width = 241,
        e.x = 484,
        e.y = 521,
        e
    },
    n.card1_i = function() {
        var e = new eui.Group;
        return this.card1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 212,
        e.y = 242.00000000000003,
        e.elementsContent = [this.card1_2_i(), this.card1_3_i(), this.card1_4_i(), this.light_1_i()],
        e
    },
    n.card1_2_i = function() {
        var e = new eui.Image;
        return this.card1_2 = e,
        e.source = "markDraw_main_panel_card1_png",
        e.x = 11,
        e.y = 4,
        e
    },
    n.card1_3_i = function() {
        var e = new eui.Image;
        return this.card1_3 = e,
        e.source = "markDraw_main_panel_card1_png",
        e.x = 6,
        e.y = 1,
        e
    },
    n.card1_4_i = function() {
        var e = new eui.Image;
        return this.card1_4 = e,
        e.source = "markDraw_main_panel_card1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.light_1_i = function() {
        var e = new eui.Image;
        return this.light_1 = e,
        e.source = "markDraw_main_panel_2_light_1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e
    },
    n.card2_i = function() {
        var e = new eui.Group;
        return this.card2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 415,
        e.y = 259,
        e.elementsContent = [this.card2_2_i(), this.card2_3_i(), this.card2_4_i(), this.light_2_i()],
        e
    },
    n.card2_2_i = function() {
        var e = new eui.Image;
        return this.card2_2 = e,
        e.source = "markDraw_main_panel_card2_png",
        e.x = 10,
        e.y = 3,
        e
    },
    n.card2_3_i = function() {
        var e = new eui.Image;
        return this.card2_3 = e,
        e.source = "markDraw_main_panel_card2_png",
        e.x = 6,
        e.y = 2,
        e
    },
    n.card2_4_i = function() {
        var e = new eui.Image;
        return this.card2_4 = e,
        e.source = "markDraw_main_panel_card2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.light_2_i = function() {
        var e = new eui.Image;
        return this.light_2 = e,
        e.source = "markDraw_main_panel_2_light_2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.card3_i = function() {
        var e = new eui.Group;
        return this.card3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 659,
        e.y = 241.00000000000003,
        e.elementsContent = [this.card3_2_i(), this.card3_3_i(), this.card3_4_i(), this.light_3_i()],
        e
    },
    n.card3_2_i = function() {
        var e = new eui.Image;
        return this.card3_2 = e,
        e.height = 213,
        e.source = "markDraw_main_panel_card3_png",
        e.width = 155,
        e.x = 0,
        e.y = 0,
        e
    },
    n.card3_3_i = function() {
        var e = new eui.Image;
        return this.card3_3 = e,
        e.height = 209,
        e.source = "markDraw_main_panel_card3_png",
        e.visible = !0,
        e.width = 149,
        e.x = 0,
        e.y = 1,
        e
    },
    n.card3_4_i = function() {
        var e = new eui.Image;
        return this.card3_4 = e,
        e.source = "markDraw_main_panel_card3_png",
        e.visible = !0,
        e.width = 144,
        e.x = 0,
        e.y = 2,
        e
    },
    n.light_3_i = function() {
        var e = new eui.Image;
        return this.light_3 = e,
        e.source = "markDraw_main_panel_2_light_3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.card4_i = function() {
        var e = new eui.Group;
        return this.card4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 880,
        e.y = 237.99999999999997,
        e.elementsContent = [this.card4_2_i(), this.card4_3_i(), this.card4_4_i(), this.light_4_i()],
        e
    },
    n.card4_2_i = function() {
        var e = new eui.Image;
        return this.card4_2 = e,
        e.height = 216,
        e.source = "markDraw_main_panel_card4_png",
        e.width = 163,
        e.x = 0,
        e.y = 0,
        e
    },
    n.card4_3_i = function() {
        var e = new eui.Image;
        return this.card4_3 = e,
        e.height = 214,
        e.source = "markDraw_main_panel_card4_png",
        e.width = 157,
        e.x = 0,
        e.y = 0,
        e
    },
    n.card4_4_i = function() {
        var e = new eui.Image;
        return this.card4_4 = e,
        e.source = "markDraw_main_panel_card4_png",
        e.x = 0,
        e.y = 1,
        e
    },
    n.light_4_i = function() {
        var e = new eui.Image;
        return this.light_4 = e,
        e.source = "markDraw_main_panel_2_light_4_png",
        e.visible = !0,
        e.width = 176.449,
        e.x = 0,
        e.y = 1,
        e
    },
    n.coins_i = function() {
        var e = new eui.Group;
        return this.coins = e,
        e.right = 32,
        e.visible = !0,
        e.width = 325,
        e.x = 779,
        e.y = 10,
        e.elementsContent = [this._Image2_i(), this.coin2Num_i(), this.imgSeerDou_i(), this._Image3_i(), this.coin1Num_i(), this.imgDiamond_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_main_panel_img_di2_png",
        e.visible = !0,
        e.x = 30,
        e.y = 5,
        e
    },
    n.coin2Num_i = function() {
        var e = new eui.Label;
        return this.coin2Num = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.horizontalCenter = -67,
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textColor = 12834813,
        e.y = 6,
        e
    },
    n.imgSeerDou_i = function() {
        var e = new eui.Image;
        return this.imgSeerDou = e,
        e.height = 45,
        e.width = 45,
        e.x = 0,
        e.y = -8,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_main_panel_img_di2_png",
        e.width = 133,
        e.x = 192,
        e.y = 5,
        e
    },
    n.coin1Num_i = function() {
        var e = new eui.Label;
        return this.coin1Num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 98,
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.verticalAlign = "middle",
        e.width = 53,
        e.x = 230,
        e.y = 6,
        e
    },
    n.imgDiamond_i = function() {
        var e = new eui.Image;
        return this.imgDiamond = e,
        e.height = 30,
        e.width = 30,
        e.x = 174,
        e.y = 0,
        e
    },
    n.leiji_i = function() {
        var e = new eui.Group;
        return this.leiji = e,
        e.right = -150,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.y = 515,
        e.elementsContent = [this._Image4_i(), this.btnGet_1_i(), this.btnGet_2_i(), this.drawTimesText_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(76, 32, 75, 31),
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "markDraw_main_panel_righttopbg_png",
        e.visible = !0,
        e.width = 371.698,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnGet_1_i = function() {
        var e = new eui.Image;
        return this.btnGet_1 = e,
        e.source = "markDraw_main_panel_btnGet_1_png",
        e.x = 53,
        e.y = 34,
        e
    },
    n.btnGet_2_i = function() {
        var e = new eui.Image;
        return this.btnGet_2 = e,
        e.source = "markDraw_main_panel_btnGet_2_png",
        e.x = 40,
        e.y = 22,
        e
    },
    n.drawTimesText_i = function() {
        var e = new eui.Label;
        return this.drawTimesText = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.75,
        e.text = "累计抽取：10/10",
        e.textColor = 13677567,
        e.x = 53,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkdrawPopmarkgetSkin.exml"] = window.markDraw.PopmarkgetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["name_1", "btnget_1", "btnhasget_1", "mark_1", "mark1", "name_2", "btnget_2", "btnhasget_2", "mark_2", "mark2", "name_3", "btnget_3", "btnhasget_3", "mark_3", "mark3", "name_4", "btnget_4", "btnhasget_4", "mark_4", "mark4", "btnClose", "Get"],
        this.height = 561,
        this.width = 960,
        this.elementsContent = [this.Get_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.Get_i = function() {
        var e = new eui.Group;
        return this.Get = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.mark1_i(), this.mark2_i(), this.mark3_i(), this.mark4_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 298,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "markDraw_popMarkGet_popGetbg_s9_png",
        e.visible = !0,
        e.width = 760,
        e.x = 80,
        e.y = 120,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "markDraw_popMarkGet_popGetTitle_png",
        e.visible = !0,
        e.width = 760,
        e.x = 90,
        e.y = 123.764,
        e
    },
    i.mark1_i = function() {
        var e = new eui.Group;
        return this.mark1 = e,
        e.x = 165,
        e.y = 214,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.name_1_i(), this.btnget_1_i(), this.btnhasget_1_i(), this.mark_1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_kuang_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_namebg_png",
        e.x = 0,
        e.y = 120,
        e
    },
    i.name_1_i = function() {
        var e = new eui.Label;
        return this.name_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.75,
        e.text = "偃月之云",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 140,
        e.x = 5,
        e.y = 123,
        e
    },
    i.btnget_1_i = function() {
        var e = new eui.Image;
        return this.btnget_1 = e,
        e.source = "markDraw_popMarkGet_btnLingqu_png",
        e.x = 28,
        e.y = 151,
        e
    },
    i.btnhasget_1_i = function() {
        var e = new eui.Image;
        return this.btnhasget_1 = e,
        e.height = 35,
        e.source = "common_reward_ylq_png",
        e.width = 88,
        e.x = 28,
        e.y = 150,
        e
    },
    i.mark_1_i = function() {
        var e = new eui.Image;
        return this.mark_1 = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 25,
        e.y = 25,
        e
    },
    i.mark2_i = function() {
        var e = new eui.Group;
        return this.mark2 = e,
        e.x = 320,
        e.y = 214,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.name_2_i(), this.btnget_2_i(), this.btnhasget_2_i(), this.mark_2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_kuang_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_namebg_png",
        e.x = 0,
        e.y = 120,
        e
    },
    i.name_2_i = function() {
        var e = new eui.Label;
        return this.name_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.75,
        e.text = "刻印名称七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 140,
        e.x = 5,
        e.y = 123,
        e
    },
    i.btnget_2_i = function() {
        var e = new eui.Image;
        return this.btnget_2 = e,
        e.source = "markDraw_popMarkGet_btnLingqu_png",
        e.x = 27,
        e.y = 151,
        e
    },
    i.btnhasget_2_i = function() {
        var e = new eui.Image;
        return this.btnhasget_2 = e,
        e.height = 35,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_reward_ylq_png",
        e.width = 88,
        e.x = 27,
        e.y = 151,
        e
    },
    i.mark_2_i = function() {
        var e = new eui.Image;
        return this.mark_2 = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 25,
        e.y = 25,
        e
    },
    i.mark3_i = function() {
        var e = new eui.Group;
        return this.mark3 = e,
        e.x = 475,
        e.y = 214,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this.name_3_i(), this.btnget_3_i(), this.btnhasget_3_i(), this.mark_3_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_kuang_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_namebg_png",
        e.x = 0,
        e.y = 120,
        e
    },
    i.name_3_i = function() {
        var e = new eui.Label;
        return this.name_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.75,
        e.text = "刻印名称七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 140,
        e.x = 5,
        e.y = 123,
        e
    },
    i.btnget_3_i = function() {
        var e = new eui.Image;
        return this.btnget_3 = e,
        e.source = "markDraw_popMarkGet_btnLingqu_png",
        e.x = 27,
        e.y = 151,
        e
    },
    i.btnhasget_3_i = function() {
        var e = new eui.Image;
        return this.btnhasget_3 = e,
        e.height = 35,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_reward_ylq_png",
        e.width = 88,
        e.x = 27,
        e.y = 151,
        e
    },
    i.mark_3_i = function() {
        var e = new eui.Image;
        return this.mark_3 = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 25,
        e.y = 25,
        e
    },
    i.mark4_i = function() {
        var e = new eui.Group;
        return this.mark4 = e,
        e.x = 630,
        e.y = 214,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this.name_4_i(), this.btnget_4_i(), this.btnhasget_4_i(), this.mark_4_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_kuang_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_popMarkGet_namebg_png",
        e.x = 0,
        e.y = 120,
        e
    },
    i.name_4_i = function() {
        var e = new eui.Label;
        return this.name_4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.75,
        e.text = "刻印名称七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 140,
        e.x = 5,
        e.y = 123,
        e
    },
    i.btnget_4_i = function() {
        var e = new eui.Image;
        return this.btnget_4 = e,
        e.source = "markDraw_popMarkGet_btnLingqu_png",
        e.x = 27,
        e.y = 151,
        e
    },
    i.btnhasget_4_i = function() {
        var e = new eui.Image;
        return this.btnhasget_4 = e,
        e.height = 35,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_reward_ylq_png",
        e.width = 88,
        e.x = 27,
        e.y = 151,
        e
    },
    i.mark_4_i = function() {
        var e = new eui.Image;
        return this.mark_4 = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 25,
        e.y = 24,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "markDraw_popMarkGet_btnClose_png",
        e.x = 775,
        e.y = 144,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MarkdrawShowMarkPopSkin.exml"] = window.markDraw.MarkShowPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["attack_1", "exattack_1", "speed_1", "defence_1", "exdefence_1", "health_1", "attackNum_1", "exattackNum_1", "speedNum_1", "defenceNum_1", "exdefenceNum_1", "healthNum_1", "markName_1", "mark_1", "info1", "attack_2", "exattack_2", "speed_2", "defence_2", "exdefence_2", "health_2", "attackNum_2", "exattackNum_2", "speedNum_2", "defenceNum_2", "exdefenceNum_2", "healthNum_2", "markName_2", "mark_2", "info2", "attack_3", "exattack_3", "speed_3", "defence_3", "exdefence_3", "health_3", "attackNum_3", "exattackNum_3", "speedNum_3", "defenceNum_3", "exdefenceNum_3", "healthNum_3", "markName_3", "mark_3", "info3", "keyin_tips"],
        this.height = 381,
        this.width = 712,
        this.elementsContent = [this.keyin_tips_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.keyin_tips_i = function() {
        var e = new eui.Group;
        return this.keyin_tips = e,
        e.height = 381,
        e.width = 712,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group7_i()],
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.height = 381,
        e.width = 712,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.info1_i(), this.info2_i(), this.info3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 381,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "markDraw_show_mark_pop_bg_s9_png",
        e.width = 712,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_line_png",
        e.x = 235,
        e.y = 22,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_line_png",
        e.x = 469,
        e.y = 22,
        e
    },
    i.info1_i = function() {
        var e = new eui.Group;
        return this.info1 = e,
        e.x = 26,
        e.y = 34,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Image4_i(), this.attack_1_i(), this.exattack_1_i(), this.speed_1_i(), this.defence_1_i(), this.exdefence_1_i(), this.health_1_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.attackNum_1_i(), this.exattackNum_1_i(), this.speedNum_1_i(), this.defenceNum_1_i(), this.exdefenceNum_1_i(), this.healthNum_1_i(), this._Label13_i(), this.markName_1_i(), this._Image8_i(), this.mark_1_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 125,
        e.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i()],
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.y = 239,
        e.elementsContent = [this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i()],
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 124,
        e
    },
    i.attack_1_i = function() {
        var e = new eui.Label;
        return this.attack_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 125,
        e
    },
    i.exattack_1_i = function() {
        var e = new eui.Label;
        return this.exattack_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 153,
        e
    },
    i.speed_1_i = function() {
        var e = new eui.Label;
        return this.speed_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 180,
        e
    },
    i.defence_1_i = function() {
        var e = new eui.Label;
        return this.defence_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 125,
        e
    },
    i.exdefence_1_i = function() {
        var e = new eui.Label;
        return this.exdefence_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 153,
        e
    },
    i.health_1_i = function() {
        var e = new eui.Label;
        return this.health_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 180,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 102,
        e.y = 124,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 102,
        e.y = 238,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 238,
        e
    },
    i.attackNum_1_i = function() {
        var e = new eui.Label;
        return this.attackNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 240,
        e
    },
    i.exattackNum_1_i = function() {
        var e = new eui.Label;
        return this.exattackNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 268,
        e
    },
    i.speedNum_1_i = function() {
        var e = new eui.Label;
        return this.speedNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 296,
        e
    },
    i.defenceNum_1_i = function() {
        var e = new eui.Label;
        return this.defenceNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 240,
        e
    },
    i.exdefenceNum_1_i = function() {
        var e = new eui.Label;
        return this.exdefenceNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 268,
        e
    },
    i.healthNum_1_i = function() {
        var e = new eui.Label;
        return this.healthNum_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 296,
        e
    },
    i._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "隐藏属性：",
        e.textColor = 13412586,
        e.x = 54,
        e.y = 212,
        e
    },
    i.markName_1_i = function() {
        var e = new eui.Label;
        return this.markName_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "刻印名字七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 160,
        e.x = 14,
        e.y = 85,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_keyinbg_png",
        e.visible = !0,
        e.x = 58,
        e.y = 0,
        e
    },
    i.mark_1_i = function() {
        var e = new eui.Image;
        return this.mark_1 = e,
        e.height = 55,
        e.source = "",
        e.width = 55,
        e.x = 65,
        e.y = 10,
        e
    },
    i.info2_i = function() {
        var e = new eui.Group;
        return this.info2 = e,
        e.x = 259,
        e.y = 34,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Image9_i(), this.attack_2_i(), this.exattack_2_i(), this.speed_2_i(), this.defence_2_i(), this.exdefence_2_i(), this.health_2_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this.attackNum_2_i(), this.exattackNum_2_i(), this.speedNum_2_i(), this.defenceNum_2_i(), this.exdefenceNum_2_i(), this.healthNum_2_i(), this._Label26_i(), this.markName_2_i(), this._Image13_i(), this.mark_2_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 125,
        e.elementsContent = [this._Label14_i(), this._Label15_i(), this._Label16_i(), this._Label17_i(), this._Label18_i(), this._Label19_i()],
        e
    },
    i._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label19_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.y = 239,
        e.elementsContent = [this._Label20_i(), this._Label21_i(), this._Label22_i(), this._Label23_i(), this._Label24_i(), this._Label25_i()],
        e
    },
    i._Label20_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label21_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label22_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label23_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label24_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label25_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 124,
        e
    },
    i.attack_2_i = function() {
        var e = new eui.Label;
        return this.attack_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 46,
        e.y = 125,
        e
    },
    i.exattack_2_i = function() {
        var e = new eui.Label;
        return this.exattack_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 46,
        e.y = 153,
        e
    },
    i.speed_2_i = function() {
        var e = new eui.Label;
        return this.speed_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 46,
        e.y = 180,
        e
    },
    i.defence_2_i = function() {
        var e = new eui.Label;
        return this.defence_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 125,
        e
    },
    i.exdefence_2_i = function() {
        var e = new eui.Label;
        return this.exdefence_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 153,
        e
    },
    i.health_2_i = function() {
        var e = new eui.Label;
        return this.health_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 180,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 103,
        e.y = 124,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 103,
        e.y = 238,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 238,
        e
    },
    i.attackNum_2_i = function() {
        var e = new eui.Label;
        return this.attackNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 70,
        e.y = 240,
        e
    },
    i.exattackNum_2_i = function() {
        var e = new eui.Label;
        return this.exattackNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 70,
        e.y = 268,
        e
    },
    i.speedNum_2_i = function() {
        var e = new eui.Label;
        return this.speedNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 70,
        e.y = 296,
        e
    },
    i.defenceNum_2_i = function() {
        var e = new eui.Label;
        return this.defenceNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 171,
        e.y = 240,
        e
    },
    i.exdefenceNum_2_i = function() {
        var e = new eui.Label;
        return this.exdefenceNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 171,
        e.y = 268,
        e
    },
    i.healthNum_2_i = function() {
        var e = new eui.Label;
        return this.healthNum_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 171,
        e.y = 296,
        e
    },
    i._Label26_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "隐藏属性：",
        e.textColor = 13412586,
        e.x = 54,
        e.y = 212,
        e
    },
    i.markName_2_i = function() {
        var e = new eui.Label;
        return this.markName_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "刻印名字七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 160,
        e.x = 14,
        e.y = 85,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_keyinbg_png",
        e.x = 58,
        e.y = 0,
        e
    },
    i.mark_2_i = function() {
        var e = new eui.Image;
        return this.mark_2 = e,
        e.height = 55,
        e.source = "",
        e.width = 55,
        e.x = 65,
        e.y = 10,
        e
    },
    i.info3_i = function() {
        var e = new eui.Group;
        return this.info3 = e,
        e.x = 493,
        e.y = 34,
        e.elementsContent = [this._Group5_i(), this._Group6_i(), this._Image14_i(), this.attack_3_i(), this.exattack_3_i(), this.speed_3_i(), this.defence_3_i(), this.exdefence_3_i(), this.health_3_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this.attackNum_3_i(), this.exattackNum_3_i(), this.speedNum_3_i(), this.defenceNum_3_i(), this.exdefenceNum_3_i(), this.healthNum_3_i(), this._Label39_i(), this.markName_3_i(), this._Image18_i(), this.mark_3_i()],
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 125,
        e.elementsContent = [this._Label27_i(), this._Label28_i(), this._Label29_i(), this._Label30_i(), this._Label31_i(), this._Label32_i()],
        e
    },
    i._Label27_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label28_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label29_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label30_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label31_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label32_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 239,
        e.elementsContent = [this._Label33_i(), this._Label34_i(), this._Label35_i(), this._Label36_i(), this._Label37_i(), this._Label38_i()],
        e
    },
    i._Label33_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "攻击",
        e.width = 36,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label34_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特攻",
        e.width = 36,
        e.x = 0,
        e.y = 28,
        e
    },
    i._Label35_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "速度",
        e.width = 36,
        e.x = 0,
        e.y = 55,
        e
    },
    i._Label36_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "防御",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 0,
        e
    },
    i._Label37_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "特防",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 28,
        e
    },
    i._Label38_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "体力",
        e.visible = !0,
        e.width = 36,
        e.x = 102,
        e.y = 55,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 124,
        e
    },
    i.attack_3_i = function() {
        var e = new eui.Label;
        return this.attack_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 125,
        e
    },
    i.exattack_3_i = function() {
        var e = new eui.Label;
        return this.exattack_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 153,
        e
    },
    i.speed_3_i = function() {
        var e = new eui.Label;
        return this.speed_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 45,
        e.y = 180,
        e
    },
    i.defence_3_i = function() {
        var e = new eui.Label;
        return this.defence_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 125,
        e
    },
    i.exdefence_3_i = function() {
        var e = new eui.Label;
        return this.exdefence_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 153,
        e
    },
    i.health_3_i = function() {
        var e = new eui.Label;
        return this.health_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10/110",
        e.textColor = 16773461,
        e.x = 146,
        e.y = 180,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 102,
        e.y = 124,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine2_png",
        e.visible = !1,
        e.x = 102,
        e.y = 238,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_markLine_png",
        e.visible = !1,
        e.x = 0,
        e.y = 238,
        e
    },
    i.attackNum_3_i = function() {
        var e = new eui.Label;
        return this.attackNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 240,
        e
    },
    i.exattackNum_3_i = function() {
        var e = new eui.Label;
        return this.exattackNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 268,
        e
    },
    i.speedNum_3_i = function() {
        var e = new eui.Label;
        return this.speedNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 69,
        e.y = 296,
        e
    },
    i.defenceNum_3_i = function() {
        var e = new eui.Label;
        return this.defenceNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 240,
        e
    },
    i.exdefenceNum_3_i = function() {
        var e = new eui.Label;
        return this.exdefenceNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 268,
        e
    },
    i.healthNum_3_i = function() {
        var e = new eui.Label;
        return this.healthNum_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "+5",
        e.textColor = 16773461,
        e.x = 170,
        e.y = 296,
        e
    },
    i._Label39_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "隐藏属性：",
        e.textColor = 13412586,
        e.x = 54,
        e.y = 212,
        e
    },
    i.markName_3_i = function() {
        var e = new eui.Label;
        return this.markName_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "刻印名字七个字",
        e.textAlign = "center",
        e.textColor = 16773461,
        e.width = 160,
        e.x = 24,
        e.y = 85,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "markDraw_show_mark_pop_keyinbg_png",
        e.x = 58,
        e.y = 0,
        e
    },
    i.mark_3_i = function() {
        var e = new eui.Image;
        return this.mark_3 = e,
        e.height = 55,
        e.source = "",
        e.width = 55,
        e.x = 65,
        e.y = 10,
        e
    },
    t
} (eui.Skin);