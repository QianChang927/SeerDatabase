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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.TortoiseConst.forever_icons_1to4, e.TortoiseConst.forever_icons_5to8, e.TortoiseConst.forever_icons_9, e.TortoiseConst.forever_levels_state, e.TortoiseConst.forever_monster_1, e.TortoiseConst.forever_monster_2, e.TortoiseConst.forever_monster_3, e.TortoiseConst.forever_my_rank, e.TortoiseConst.forever_select_type, e.TortoiseConst.forever_values], [e.TortoiseConst.dailt_buy_num, e.TortoiseConst.dailt_item_num, e.TortoiseConst.dailt_level1_boss, e.TortoiseConst.dailt_level2_boss, e.TortoiseConst.dailt_level3_boss, e.TortoiseConst.dailt_ok, e.TortoiseConst.dailt_over_times, e.TortoiseConst.dailt_total_times], []),
            i.init([{
                panelName: e.TortoiseConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.TortoiseConst.PANEL1
            },
            {
                panelName: e.TortoiseConst.PANEL2
            },
            {
                panelName: e.TortoiseConst.PANEL3
            },
            {
                panelName: e.TortoiseConst.PANEL4
            },
            {
                panelName: e.TortoiseConst.PANEL5
            }]),
            i
        }
        return __extends(i, t),
        i.prototype.reShow = function() {
            var e = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && e.currentPanel.update && e.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    e.TortoisePassPanel = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanel")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(s, r) {
        function o(e) {
            try {
                a(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            try {
                a(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, _)
        }
        a((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (s = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return a.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (o = a.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break
                }
                if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1],
                    o = i;
                    break
                }
                if (o && a.label < o[2]) {
                    a.label = o[2],
                    a.ops.push(i);
                    break
                }
                o[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            i = t.call(e, a)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            s = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, r, o, _, a = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return _ = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (_[Symbol.iterator] = function() {
        return this
    }),
    _
},
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.animX = [150, 510, 870],
            i.animY = [320, 220, 320],
            i.animName = ["blue", "purple", "orange"],
            i.skinName = e.Panel1Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.initAnim(),
            this.addEvents(),
            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入选择地宫界面")
        },
        i.prototype.initAnim = function() {
            for (var e = 1; 3 >= e; e++) this["Anim" + e] = SpineUtil.createAnimate("xaunwo"),
            this.grp_content.addChildAt(this["Anim" + e], e),
            this["Anim" + e].x = this.animX[e - 1],
            this["Anim" + e].y = this.animY[e - 1],
            this["Anim" + e].play(this.animName[e - 1], 0),
            this["Anim" + e].touchEnabled = !0,
            this["Anim" + e].touchChildren = !0
        },
        i.prototype.addEvents = function() {
            for (var t = this,
            i = function(i) {
                ImageButtonUtil.add(n["Anim" + i],
                function() {
                    for (var n = t.service.getValue(e.TortoiseConst.forever_levels_state), s = t.service.getValue(15364 + i), r = 0, o = 1; 12 >= o; o++) r += KTool.getBit(s, o);
                    return 1 == KTool.getBit(n, 3 + i) && 12 == r ? void BubblerManager.getInstance().showText("您今天已经挑战过该关卡了！") : void t.service.openPanel(e.TortoiseConst.PANEL2, i)
                },
                n, !0, !1),
                ImageButtonUtil.add(n["btnLevel" + i],
                function() {
                    for (var n = t.service.getValue(e.TortoiseConst.forever_levels_state), s = t.service.getValue(15364 + i), r = 0, o = 1; 12 >= o; o++) r += KTool.getBit(s, o);
                    return 1 == KTool.getBit(n, 3 + i) && 12 == r ? void BubblerManager.getInstance().showText("您今天已经挑战过该关卡了！") : void t.service.openPanel(e.TortoiseConst.PANEL2, i)
                },
                n)
            },
            n = this, s = 1; 3 >= s; s++) i(s);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    t.service.getValue(e.TortoiseConst.dailt_buy_num);
                    KTool.buyProductByCallback(249696, 1,
                    function() {
                        KTool.doExchange(9848, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this)
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, s, r, o;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return t = this.service.getValue(e.TortoiseConst.dailt_item_num),
                        i = this.service.getValue(e.TortoiseConst.forever_levels_state),
                        this.txt_eneNum.text = t + "/60",
                        this.bar_energy.value = t,
                        1 == KTool.getBit(i, 1) ? [3, 2] : (n = this.txt_global, s = "当前已有", [4, KTool.getGlobalValues(168, [1])]);
                    case 1:
                        return n.text = s + _.sent()[0] + "名玩家获得万世北溟·玄武",
                        [3, 3];
                    case 2:
                        this.txt_global.text = "你是第" + this.service.getValue(e.TortoiseConst.forever_my_rank) + "名获得万世北溟·玄武的玩家",
                        _.label = 3;
                    case 3:
                        for (this.txt_itemNun.text = "北冥之甲：" + ItemManager.getNumByID(1712157), r = this.service.getValue(e.TortoiseConst.dailt_buy_num), this.txt_hasBuy.text = "今日已购买：" + r + "/10", DisplayUtil.setEnabled(this.btnadd, 10 > r, r >= 10), o = 1; 3 >= o; o++) this["pass" + o].visible = 0 != KTool.getBit(i, 3 + o);
                        return [2]
                    }
                })
            })
        },
        i
    } (BasicPanel);
    e.TortoisePassPanel1 = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanel1")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.curLevelIndex = 0,
            i.boosIDs = {
                level1: [2519, 2861, 2866, 2856, 2851, 2891, 2898, 3007, 3112, 3297, 3247, 2881],
                level2: [2510, 2865, 3248, 3253, 2799, 2791, 3044, 3056, 3061, 3067, 3075, 3079],
                level3: [2976, 2893, 2991, 3006, 3013, 3026, 3064, 3019, 3226, 3212, 3249, 3197]
            },
            i.skinName = e.Panel3Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "tpp_panel3_level1_3_png",
            function() {
                i.service.openPanel(e.TortoiseConst.PANEL1)
            },
            this,
            function() {}),
            this.addEvents()
        },
        i.prototype.initData = function() {
            for (var e = 1; 3 >= e; e++) this["level" + e].visible = this.curLevelIndex == e
        },
        i.prototype.beforeAdd = function(e) {
            switch (this.curLevelIndex = e, this.curLevelIndex) {
            case 1:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入神盾地宫守卫界面");
                break;
            case 2:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入坚壁地宫守卫界面");
                break;
            case 3:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入圣甲地宫守卫界面")
            }
            this.initData()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnaddTime,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249695, 1,
                    function() {
                        KTool.doExchange(9847, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this);
            for (var t = function(t) {
                for (var n = function(n) {
                    ImageButtonUtil.add(i["level" + t + "_pet" + n],
                    function() {
                        return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！") : void FightManager.fightNoMapBoss(8793 + 12 * (t - 1) + n)
                    },
                    i)
                },
                s = 1; 12 >= s; s++) n(s)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249696, 1,
                    function() {
                        KTool.doExchange(9848, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.update = function() {
            var t = this.service.getValue(e.TortoiseConst.dailt_item_num);
            this.service.getValue(e.TortoiseConst.forever_levels_state);
            this.leftTime = 30 - this.service.getValue(e.TortoiseConst.dailt_total_times),
            this.txt_times.text = "今日挑战次数：" + this.leftTime,
            this.txt_eneNum.text = t + "/60",
            this.bar_energy.value = t,
            this.txt_itemNun.text = "北冥之甲：" + ItemManager.getNumByID(1712157);
            var i = this.service.getValue(e.TortoiseConst.dailt_buy_num);
            this.txt_hasBuy.text = "今日已购买：" + i + "/10",
            DisplayUtil.setEnabled(this.btnadd, 10 > i, i >= 10),
            this.setBossVisible(),
            DisplayUtil.setEnabled(this.btnaddTime, 30 != this.leftTime, 30 == this.leftTime)
        },
        i.prototype.setBossVisible = function() {
            for (var t = this.service.getValue(15364 + this.curLevelIndex), i = this.service.getValue(e.TortoiseConst.forever_levels_state), n = 0, s = 1; 12 >= s; s++) n += KTool.getBit(t, s);
            if (12 == n) return void(1 == KTool.getBit(i, 3 + this.curLevelIndex) ? this.service.openPanel(e.TortoiseConst.PANEL1) : this.service.openPanel(e.TortoiseConst.PANEL3, this.curLevelIndex));
            var r = Math.floor(n / 3);
            this.updateTitleRes("tpp_panel3_level" + this.curLevelIndex + "_" + (r + 1) + "_png");
            for (var s = 1; 4 >= s; s++) this["level" + this.curLevelIndex + "_boss" + s].visible = r + 1 == s;
            for (var s = 1; 3 >= s; s++) this["level" + this.curLevelIndex + "_pet" + (3 * r + s)].visible = 0 == KTool.getBit(t, 3 * r + s)
        },
        i
    } (BasicPanel);
    e.TortoisePassPanel2 = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanel2")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.levelRightValue = 0,
            i.leftTime = 0,
            i.curLevelIndex = 0,
            i.curDif = 0,
            i.powers = [233333, 444888, 666666, 888888, 9999999],
            i.skinName = e.Panel4Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "tpp_panel4_title1_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.initData(),
            this.addEvents()
        },
        i.prototype.getDif = function() {
            var t = this.service.getValue(e.TortoiseConst.dailt_item_num);
            t >= 0 && 15 > t ? this.curDif = 1 : t >= 15 && 30 > t ? this.curDif = 2 : t >= 30 && 45 > t ? this.curDif = 3 : t >= 45 && 60 > t ? this.curDif = 4 : 60 == t && (this.curDif = 5)
        },
        i.prototype.initData = function() {
            for (var e = 1; 3 >= e; e++) this["level" + e].visible = this.curLevelIndex == e;
            this.rbGroup3 = this.rb_enemy1.group,
            this.rbGroup3.selectedValue = this.levelRightValue = 1,
            this.grp_values.visible = 3 == this.curLevelIndex,
            this.getDif()
        },
        i.prototype.beforeAdd = function(e) {
            switch (this.curLevelIndex = e, this.curLevelIndex) {
            case 1:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入神盾地宫试炼界面");
                break;
            case 2:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入坚壁地宫试炼界面");
                break;
            case 3:
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入圣甲地宫试炼界面")
            }
            this.initData()
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.rbGroup3.addEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249696, 1,
                    function() {
                        KTool.doExchange(9848, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                switch (t.curLevelIndex) {
                case 1:
                    Alert.show("进入对战需要消耗1个北冥之甲，是否继续？",
                    function() {
                        return ItemManager.getNumByID(1712157) < 1 ? void BubblerManager.getInstance().showText("很抱歉，北冥之甲数量不足！") : void SocketConnection.sendByQueue(e.TortoiseConst.CMD, [2, 1])
                    });
                    break;
                case 2:
                    var i = t.service.getValue(6764);
                    if (0 == i) return void BubblerManager.getInstance().showText("请先选择挑战属性后再开始对战！");~~PetXMLInfo.getType(PetManager.infos[0].id) != i ? BubblerManager.getInstance().showText("背包首发精灵属性和你选择的挑战属性不同，请重新选择首发精灵！") : Alert.show("进入对战需要消耗1个北冥之甲，是否继续？",
                    function() {
                        return ItemManager.getNumByID(1712157) < 1 ? void BubblerManager.getInstance().showText("很抱歉，北冥之甲数量不足！") : void SocketConnection.sendByQueue(e.TortoiseConst.CMD, [2, 2])
                    });
                    break;
                case 3:
                    Alert.show("进入对战需要消耗1个北冥之甲，是否继续？",
                    function() {
                        if (ItemManager.getNumByID(1712157) < 1) return void BubblerManager.getInstance().showText("很抱歉，北冥之甲数量不足！");
                        switch (t.levelRightValue) {
                        case 1:
                            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "挑战极厄玄武");
                            break;
                        case 2:
                            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "挑战北冥·玄武");
                            break;
                        case 3:
                            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "挑战万世北溟·玄武")
                        }
                        SocketConnection.sendByQueue(e.TortoiseConst.CMD, [2, 2 + t.levelRightValue])
                    })
                }
            },
            this),
            ImageButtonUtil.add(this.btnSe,
            function() {
                var i = t.btnSe.localToGlobal();
                i.x += t.btnSe.width,
                i.y += t.btnSe.height;
                var n = {
                    callBack: t.onChangeAttributeIdHandler,
                    caller: t,
                    selectId: t._currentAttrId,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: t.btnSe.localToGlobal(),
                        dir: "right-top",
                        rx: 0,
                        ry: -150
                    }
                },
                s = new e.ChooseAttributePop(n);
                PopViewManager.getInstance().openView(s)
            },
            this)
        },
        i.prototype.onChangeRight = function() {
            this.levelRightValue = ~~this.rbGroup3.selectedValue,
            this.setLevel3()
        },
        i.prototype.update = function() {
            this.txt_itemNun.text = "北冥之甲：" + ItemManager.getNumByID(1712157);
            var t = this.service.getValue(e.TortoiseConst.dailt_buy_num);
            this.txt_hasBuy.text = "今日已购买：" + t + "/10";
            var i = this.service.getValue(e.TortoiseConst.dailt_item_num);
            switch (DisplayUtil.setEnabled(this.btnadd, 10 > t, t >= 10), this.txt_ene.text = i + "", this.txt_power.text = this.powers[this.curDif - 1] + "", this.overTimes.visible = 3 == this.curLevelIndex, this.level3_pet3.visible = !0, this.level3_pet1.visible = this.level3_pet2.visible = !1, this.curLevelIndex) {
            case 1:
                this.setLevel1();
                break;
            case 2:
                this.setLevel2();
                break;
            case 3:
                this.setLevel3()
            }
        },
        i.prototype.setLevel1 = function() {
            var t = this;
            this.updateTitleRes("tpp_panel4_title1_png");
            for (var i = [], n = KTool.intTo4Unsignedbyte(this.service.getValue(6761)), s = KTool.intTo4Unsignedbyte(this.service.getValue(6762)), r = this.service.getValue(6763), o = 1; 4 >= o; o++) i.push(n[4 - o]);
            for (var o = 1; 4 >= o; o++) i.push(s[4 - o]);
            i.push(255 & r);
            for (var o = 1; 9 >= o; o++) this["typebg" + o].source = 0 == i[o - 1] ? "tpp_panel4_zu_511_png": "tpp_panel4_z_5_kb_png",
            i[o - 1] > 0 && (this["type" + o].source = ClientConfig.getpettypeticon(i[o - 1]));
            for (var _ = this.service.getValue(e.TortoiseConst.forever_levels_state), a = 0, o = 1; 3 >= o; o++) 1 == KTool.getBit(_, 3 + o) && a++;
            1 == KTool.getBit(_, 4) && (3 == a ? Alarm.show("恭喜你获得了玄武完全体进化的资格，快去进化吧！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL5)
                })
            }) : Alarm.show("恭喜你，成功通过神盾地宫最终试炼！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL1)
                })
            }))
        },
        i.prototype.setLevel2 = function() {
            var t = this;
            this.updateTitleRes("tpp_panel4_title2_png");
            for (var i = [], n = 1; 3 >= n; n++) {
                var s = this.service.getValue(6764 + n);
                i.push(65535 & s),
                i.push(s >> 16 & 65535)
            }
            for (var n = 1; 6 >= n; n++) this["petBg" + n].source = 0 == i[n - 1] ? "tpp_panel4_zhengchang_png": "tpp_panel4_wenhaodo_png",
            this["pet" + n].source = i[n - 1] > 0 ? ClientConfig.getPetHeadPath(i[n - 1]) : null;
            var r = this.service.getValue(6764);
            this.img_noSe.visible = 0 == r,
            this.grp_Se.visible = 0 != r,
            0 != r && (this.txt_seType.text = SkillXMLInfo.petTypeNameCN(r));
            for (var o = this.service.getValue(e.TortoiseConst.forever_levels_state), _ = 0, n = 1; 3 >= n; n++) 1 == KTool.getBit(o, 3 + n) && _++;
            1 == KTool.getBit(o, 5) && (3 == _ ? Alarm.show("恭喜你获得了玄武完全体进化的资格，快去进化吧！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL5)
                })
            }) : Alarm.show("恭喜你，成功通过坚壁地宫最终试炼！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL1)
                })
            }))
        },
        i.prototype.onChangeAttributeIdHandler = function(t, i) {
            var n = this,
            s = this.service.getValue(6764);
            this._currentAttrId = +i,
            0 != s ? s != this._currentAttrId && Alert.show("更换挑战的属性将清空挑战进度，是否确认重新选择？",
            function() {
                SocketConnection.sendByQueue(e.TortoiseConst.CMD, [3, n._currentAttrId],
                function() {
                    n.service.updateValues().then(function() {
                        n.setLevel2()
                    })
                })
            }) : SocketConnection.sendByQueue(e.TortoiseConst.CMD, [3, this._currentAttrId],
            function() {
                n.service.updateValues().then(function() {
                    n.setLevel2()
                })
            })
        },
        i.prototype.setLevel3 = function() {
            var t = this;
            this.updateTitleRes("tpp_panel4_title3_png");
            for (var i = this.service.getValue(e.TortoiseConst.dailt_over_times), n = i >> 8 * (this.levelRightValue - 1) & 255, s = this.service.getValue(6768), r = 1; 3 >= r; r++) this["level3_pet" + r].visible = this.levelRightValue == r;
            this.txt_values.text = "征服度：" + s + "/500",
            this.txtTimes.text = n + "/5",
            DisplayUtil.setEnabled(this.btnTiaozhan, 5 > n, n >= 5);
            for (var o = this.service.getValue(e.TortoiseConst.forever_levels_state), _ = 0, r = 1; 3 >= r; r++) 1 == KTool.getBit(o, 3 + r) && _++;
            1 == KTool.getBit(o, 6) && (3 == _ ? Alarm.show("恭喜你获得了玄武完全体进化的资格，快去进化吧！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL5)
                })
            }) : Alarm.show("恭喜你，成功通过圣甲地宫最终试炼！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.TortoiseConst.PANEL1)
                })
            }))
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup3.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this)
        },
        i
    } (BasicPanel);
    e.TortoisePassPanel3 = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanel3")
} (tortoisePassPanel || (tortoisePassPanel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
tortoisePassPanel; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "tortoisePassPanel.TortoisePassPanelMain",
        e.PANEL1 = "tortoisePassPanel.TortoisePassPanel1",
        e.PANEL2 = "tortoisePassPanel.TortoisePassPanel2",
        e.PANEL3 = "tortoisePassPanel.TortoisePassPanel3",
        e.PANEL4 = "tortoisePassPanel.TortoisePassPanel4",
        e.PANEL5 = "tortoisePassPanel.TortoisePassPanel5",
        e.CMD = 43234,
        e.forever_levels_state = 6759,
        e.forever_my_rank = 6760,
        e.forever_icons_1to4 = 6761,
        e.forever_icons_5to8 = 6762,
        e.forever_icons_9 = 6763,
        e.forever_select_type = 6764,
        e.forever_monster_1 = 6765,
        e.forever_monster_2 = 6766,
        e.forever_monster_3 = 6767,
        e.forever_values = 6768,
        e.dailt_item_num = 15363,
        e.dailt_total_times = 15364,
        e.dailt_level1_boss = 15365,
        e.dailt_level2_boss = 15366,
        e.dailt_level3_boss = 15367,
        e.dailt_buy_num = 15368,
        e.dailt_over_times = 15369,
        e.dailt_ok = 15373,
        e
    } ();
    e.TortoiseConst = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoiseConst")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.Panel5Skin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入获得万世北溟·玄武界面"),
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "tpp_panel5_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                ModuleManager.showModuleByID(56)
            },
            this),
            ImageButtonUtil.add(this.btnGetItem,
            function() {
                t.service.openPanel(e.TortoiseConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249696, 1,
                    function() {
                        KTool.doExchange(9848, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnEnvole,
            function() {
                return PetManager.isDefaultPet(3010) ? void(ItemManager.getNumByID(1712157) < 15 ? BubblerManager.getInstance().showText("你的北冥之甲数量不足，无法将北冥·玄武进化为万世北溟·玄武！") : SocketConnection.sendByQueue(e.TortoiseConst.CMD, [5, 0],
                function() {
                    PetManager.updateBagInfo(function() {
                        Alarm.show("恭喜你，成功将北冥·玄武进化为万世北溟·玄武！",
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                })) : (BubblerManager.getInstance().showText("请将北冥·玄武放在背包首发位置再来进行进化！"), void t.service.showPetBag())
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                return PetManager.isDefaultPet(3308) ? void(ItemManager.getNumByID(1712157) < 40 ? BubblerManager.getInstance().showText("你的北冥之甲数量不足，无法对万世北溟·玄武进行能力提升！") : SocketConnection.sendByQueue(e.TortoiseConst.CMD, [4, 0],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })) : (BubblerManager.getInstance().showText("请将万世北溟·玄武放在背包首发位置再来进行能力提升！"), void t.service.showPetBag())
            },
            this)
        },
        i.prototype.update = function() {
            this.txt_itemNun.text = "北冥之甲：" + ItemManager.getNumByID(1712157);
            var t = this.service.getValue(e.TortoiseConst.forever_levels_state),
            i = this.service.getValue(e.TortoiseConst.dailt_buy_num);
            this.txt_hasBuy.text = "今日已购买：" + i + "/10";
            var n = 1 == KTool.getBit(t, 1),
            s = 1 == KTool.getBit(t, 2);
            DisplayUtil.setEnabled(this.btnEnvole, !n, n),
            DisplayUtil.setEnabled(this.btnUp, !s, s),
            DisplayUtil.setEnabled(this.btnadd, 10 > i, i >= 10),
            this.imghasEnvole.visible = n,
            this.imghasUp.visible = s,
            n && s && this.service.backToMainPanel()
        },
        i
    } (BasicPanel);
    e.TortoisePassPanel5 = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanel5")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.MainpanelSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入主界面"),
            this.initOldPveBtnClose(0, this, "tpp_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGo,
            function() {
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "点击主界面-【前往获得】"),
                t.service.openPanel(e.TortoiseConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3308,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "点击主界面-【优惠极品】");
                var t = new e.oneKeyPop,
                i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .6,
                PopViewManager.getInstance().openView(t, i)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                t.service.openPanel(e.TortoiseConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnBless,
            function() {
                ModuleManager.showModule("holyHowlBless", ["holy_howl_bless"], null, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnEvolveNeed,
            function() {
                ModuleManager.showModuleByID(56)
            },
            this)
        },
        i.prototype.update = function() {
            for (var t = this.service.getValue(e.TortoiseConst.forever_levels_state), i = 0, n = 1; 3 >= n; n++) i += KTool.getBit(t, 3 + n);
            this.btnGo.visible = 3 != i,
            this.btnUp.visible = 3 == i;
            var s = 1 == KTool.getBit(t, 2),
            r = 1 == KTool.getBit(t, 1);
            DisplayUtil.setEnabled(this.btnUp, !s, s),
            r && s && (this.haspet.visible = !0)
        },
        i
    } (BasicPanel);
    e.TortoisePassPanelMain = t,
    __reflect(t.prototype, "tortoisePassPanel.TortoisePassPanelMain")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ItemAttributeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(t.prototype, "selected", {
            set: function(e) {
                this.img_select.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            return this.mydata = this.data,
            null === this.data ? (this.img_icon.visible = !1, this.touchEnabled = !1, void(this.touchChildren = !1)) : (this.touchEnabled = !0, this.touchChildren = !0, this.img_icon.visible = this.mydata > 0, void(this.img_icon.visible && (this.guang.text = SkillXMLInfo.petTypeNameCN(this.mydata), this.img_icon.source = ClientConfig.getpettypeticon(this.mydata + ""))))
        },
        t.prototype.destroy = function() {
            this.mydata = null,
            this.data = null,
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.ItemRenderer);
    e.AttributeItemRender = t,
    __reflect(t.prototype, "tortoisePassPanel.AttributeItemRender")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._attriType = 1,
            i.skinName = ChoosePetAttributeSkin,
            i._openParams = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._radiGrpAttr = this.rb_double.group,
            this.scl_items.viewport = this.scl_items_viewport,
            this.scl_items_viewport.itemRenderer = e.AttributeItemRender,
            this._arrycollertion = new eui.ArrayCollection,
            this.scl_items_viewport.dataProvider = this._arrycollertion
        },
        i.prototype.initEvents = function() {
            this._radiGrpAttr.addEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.addEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype._parseData = function() {
            this._initSetView(),
            this._openParams.filterSkillStone && (this.rb_single.visible = this.rb_double.visible = !1, this.scl_items.y -= 28, this.scl_items.height += 30)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._radiGrpAttr.removeEventListener(egret.Event.CHANGE, this.changeAttrType, this),
            this.scl_items_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectPet, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_START, this.onScrollerStart, this),
            this.scl_items.removeEventListener(eui.UIEvent.CHANGE_END, this.onScrollerEnd, this)
        },
        i.prototype.onScrollerStart = function() {
            this.btndown.visible = !1
        },
        i.prototype.onScrollerEnd = function() {
            var e = this.scl_items.viewport.contentHeight - this.scl_items.height;
            this.btndown.visible = this.scl_items.viewport.scrollV < e
        },
        i.prototype.changeAttrType = function(e) {
            this._attriType = ~~this._radiGrpAttr.selectedValue,
            this._upDateView()
        },
        i.prototype._initSetView = function() {
            var e = SkillXMLInfo.getAllTypes();
            if (this._attriType = 1, this._openParams.selectId > 0) for (var t = 0; t < e.length; t++) if (e[t] === this._openParams.selectId) {
                this._attriType = ~~SkillXMLInfo.getTypeKind(e[t]);
                break
            }
            this._radiGrpAttr.selectedValue = this._attriType
        },
        i.prototype.onSelectPet = function(e) {
            if (null !== e.item && void 0 !== e.item) {
                var t = e.item,
                i = this._openParams.callBack,
                n = this._openParams.caller;
                this._openParams.unAutoClose ? i.apply(n, [this._attriType, t]) : (this.hide(), i.apply(n, [this._attriType, t]))
            }
        },
        i.prototype._upDateView = function() {
            this.resetScroll();
            for (var e, t = SkillXMLInfo.getAllTypes(), i = [], n = 0; n < t.length; n++) SkillXMLInfo.getTypeKind(t[n]) == this._attriType && ((t[n] <= 88 || 221 == t[n]) && i.push(t[n]), t[n] === this._openParams.selectId && (e = i.length - 1));
            this.scl_items_viewport.selectedIndex = e,
            this._arrycollertion.replaceAll(i)
        },
        i.prototype.resetScroll = function() {
            this.scl_items.stopAnimation(),
            this.scl_items.viewport.scrollV = 0
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.ChooseAttributePop = t,
    __reflect(t.prototype, "tortoisePassPanel.ChooseAttributePop")
} (tortoisePassPanel || (tortoisePassPanel = {}));
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
tortoisePassPanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.OnekeypopSkin,
            i
        }
        return __extends(i, t),
        i.prototype.initialized = function() {
            var t = this;
            StatLogger.log("20230512版本系统功能", "万世北溟·玄武搬迁", "进入优惠极品炽万世北溟·玄武界面"),
            GameInfo.isChecking && (this.btnAdd.visible = !1),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                t.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return PetManager.isDefaultPet(3308) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249714, 1,
                    function() {
                        SocketConnection.sendByQueue(e.TortoiseConst.CMD, [1, 0],
                        function() {
                            Alarm.show("恭喜你万世北溟·玄武超级极品成功！"),
                            t.update()
                        })
                    })
                },
                t) : void Alarm.show("请将万世北溟·玄武放入出战背包首发！",
                function() {
                    t.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([6759],
            function(t) {
                var i = 1 == KTool.getBit(t[0], 3);
                DisplayUtil.setEnabled(e.btnBuy, !i, i),
                UserInfoManager.getDiamond(function(t) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
                },
                e)
            })
        },
        i
    } (PopView);
    e.oneKeyPop = t,
    __reflect(t.prototype, "tortoisePassPanel.oneKeyPop")
} (tortoisePassPanel || (tortoisePassPanel = {})),
window.tortoisePassPanel = window.tortoisePassPanel || {};
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
generateEUI.paths["resource/eui_skins/ChoosePetAttributeSkin.exml"] = window.ChoosePetAttributeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["select_attribute_bg", "rb_single", "rb_double", "scl_items_viewport", "scl_items", "btndown"],
        this.height = 267,
        this.width = 458,
        this.elementsContent = [this.select_attribute_bg_i(), this.rb_single_i(), this.rb_double_i(), this.scl_items_i(), this.btndown_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "tpp_choosepop_btncsx_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "tpp_choosepop_btncsx1_down_png",
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
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "tpp_choosepop_btnssx1_up_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "tpp_choosepop_btnssx_down_png",
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
    s = t.prototype;
    return s.select_attribute_bg_i = function() {
        var e = new eui.Image;
        return this.select_attribute_bg = e,
        e.percentHeight = 100,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "tpp_choosepop_popbg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    s.rb_single_i = function() {
        var e = new eui.RadioButton;
        return this.rb_single = e,
        e.groupName = "radioGrp_attr",
        e.label = "",
        e.value = "1",
        e.x = 115,
        e.y = 16,
        e.skinName = i,
        e
    },
    s.rb_double_i = function() {
        var e = new eui.RadioButton;
        return this.rb_double = e,
        e.groupName = "radioGrp_attr",
        e.label = "",
        e.value = "2",
        e.x = 255,
        e.y = 16,
        e.skinName = n,
        e
    },
    s.scl_items_i = function() {
        var e = new eui.Scroller;
        return this.scl_items = e,
        e.height = 177,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "on",
        e.width = 378,
        e.x = 39,
        e.y = 58,
        e.viewport = this.scl_items_viewport_i(),
        e
    },
    s.scl_items_viewport_i = function() {
        var e = new eui.List;
        return this.scl_items_viewport = e,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    s._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.columnWidth = 62,
        e.horizontalAlign = "contentJustify",
        e.horizontalGap = 1,
        e.orientation = "rows",
        e.verticalGap = 3,
        e
    },
    s.btndown_i = function() {
        var e = new eui.Image;
        return this.btndown = e,
        e.source = "tpp_choosepop_btndown_png",
        e.x = 203,
        e.y = 235,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ItemAttributeSkin.exml"] = window.ItemAttributeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_tipkuang", "guang", "img_icon", "img_select"],
        this.height = 59,
        this.width = 56,
        this.elementsContent = [this.img_tipkuang_i(), this.guang_i(), this.img_icon_i(), this.img_select_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.img_tipkuang_i = function() {
        var e = new eui.Image;
        return this.img_tipkuang = e,
        e.height = 49,
        e.source = "tpp_choosepop_kuang_png",
        e.visible = !0,
        e.width = 49,
        e.x = 4,
        e.y = 4,
        e
    },
    i.guang_i = function() {
        var e = new eui.Label;
        return this.guang = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 12,
        e.text = "光",
        e.textColor = 16773996,
        e.visible = !0,
        e.y = 54,
        e
    },
    i.img_icon_i = function() {
        var e = new eui.Image;
        return this.img_icon = e,
        e.height = 30,
        e.horizontalCenter = 0,
        e.source = "",
        e.visible = !0,
        e.width = 30,
        e.y = 13,
        e
    },
    i.img_select_i = function() {
        var e = new eui.Image;
        return this.img_select = e,
        e.height = 56,
        e.source = "tpp_choosepop_img_change1_png",
        e.visible = !0,
        e.width = 56,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.tortoisePassPanel.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "zu_8", "btnGo", "btnUp", "btnInfo", "btnSuper", "haspet", "btnBless", "btnEvolveNeed"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "tpp_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -29,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.zu_8_i(), this.btnGo_i(), this.btnUp_i(), this.btnInfo_i(), this.btnSuper_i(), this.haspet_i(), this.btnBless_i(), this.btnEvolveNeed_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_mainpanel_tuceng_1_png",
        e.x = 400,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_mainpanel_zu_5_png",
        e.x = 0,
        e.y = 86,
        e
    },
    i.zu_8_i = function() {
        var e = new eui.Image;
        return this.zu_8 = e,
        e.source = "tpp_mainpanel_zu_8_png",
        e.x = 988,
        e.y = 108,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.source = "tpp_mainpanel_zu_7_png",
        e.visible = !0,
        e.x = 874,
        e.y = 522,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "tpp_mainpanel_zu_81_png",
        e.visible = !0,
        e.x = 874,
        e.y = 522,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "tpp_mainpanel_btninfo_png",
        e.visible = !0,
        e.x = 125,
        e.y = 478,
        e
    },
    i.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "tpp_mainpanel_btnsuper_png",
        e.x = 105,
        e.y = 537,
        e
    },
    i.haspet_i = function() {
        var e = new eui.Image;
        return this.haspet = e,
        e.height = 40,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "tpp_mainpanel_haspet_png",
        e.visible = !1,
        e.width = 337,
        e.x = 635,
        e.y = 300.0000000000001,
        e
    },
    i.btnBless_i = function() {
        var e = new eui.Image;
        return this.btnBless = e,
        e.source = "tpp_mainpanel_btnbless_png",
        e.x = 215,
        e.y = 537,
        e
    },
    i.btnEvolveNeed_i = function() {
        var e = new eui.Image;
        return this.btnEvolveNeed = e,
        e.source = "tpp_mainpanel_btnevolveneed_png",
        e.x = 140,
        e.y = 340,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeypopSkin.exml"] = window.tortoisePassPanel.OnekeypopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnAdd", "txt_diamond", "btnBuy", "btnClose", "oneKey"],
        this.height = 608,
        this.width = 935,
        this.elementsContent = [this.oneKey_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.oneKey_i = function() {
        var e = new eui.Group;
        return this.oneKey = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnBuy_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_zu_2_png",
        e.x = 86,
        e.y = 0,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "tpp_onekeypop_btnadd_png",
        e.x = 539,
        e.y = 513,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 325,
        e.y = 517,
        e
    },
    i.txt_diamond_i = function() {
        var e = new eui.Label;
        return this.txt_diamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textColor = 16774499,
        e.x = 468,
        e.y = 518,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_3_png",
        e.x = 0,
        e.y = 383,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_2_png",
        e.x = 0,
        e.y = 267,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_1_png",
        e.x = 0,
        e.y = 149,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_6_png",
        e.x = 609,
        e.y = 383,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_5_png",
        e.x = 609,
        e.y = 267,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_onekeypop_4_png",
        e.x = 609,
        e.y = 149,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "tpp_onekeypop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "tpp_onekeypop_btnclose_png",
        e.x = 900,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.tortoisePassPanel.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "bar_energy", "txt_eneNum", "ene", "btnLevel1", "btnLevel2", "btnLevel3", "pass1", "pass3", "pass2", "txt_global", "txt_hasBuy", "buys", "txt_itemNun", "btnadd", "items", "grp_content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_content_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 54,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "tpp_panel1_jindutiao_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "tpp_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_content_i = function() {
        var e = new eui.Group;
        return this.grp_content = e,
        e.horizontalCenter = 23,
        e.width = 1060,
        e.y = 16,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.ene_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.btnLevel1_i(), this.btnLevel2_i(), this.btnLevel3_i(), this.pass1_i(), this.pass3_i(), this.pass2_i(), this._Image8_i(), this.txt_global_i(), this.buys_i(), this.items_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_taskbg1_png",
        e.x = 33,
        e.y = 490,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_line_png",
        e.x = 246,
        e.y = 493,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "1、通过神盾地宫、坚壁地宫、圣甲地宫即可获得玄武完全体进化的资格。",
        e.textColor = 16771009,
        e.x = 303,
        e.y = 508,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2、三个地宫由守卫挑战和最终试炼两部分组成，每日挑战最终试炼前需重新挑战地宫守卫。",
        e.textColor = 16771009,
        e.x = 303,
        e.y = 535,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "3、挑战地宫守卫会增加北冥能量，北冥能量次日重置。",
        e.textColor = 16771009,
        e.x = 303,
        e.y = 562,
        e
    },
    n.ene_i = function() {
        var e = new eui.Group;
        return this.ene = e,
        e.x = 0,
        e.y = 441,
        e.elementsContent = [this._Image3_i(), this.bar_energy_i(), this._Image4_i(), this._Label4_i(), this.txt_eneNum_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_jindudi_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.bar_energy_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_energy = e,
        e.direction = "btt",
        e.height = 54,
        e.maximum = 60,
        e.value = 20,
        e.x = 28,
        e.y = 19,
        e.skinName = i,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_juxing_3_png",
        e.visible = !0,
        e.x = 71,
        e.y = 119,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "北冥能量",
        e.textColor = 16765477,
        e.x = 88,
        e.y = 124,
        e
    },
    n.txt_eneNum_i = function() {
        var e = new eui.Label;
        return this.txt_eneNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "00/60",
        e.textColor = 16514895,
        e.x = 172,
        e.y = 123,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_title1_png",
        e.visible = !0,
        e.x = 64,
        e.y = 156,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_title2_png",
        e.visible = !0,
        e.x = 432,
        e.y = 49,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_title3_png",
        e.visible = !0,
        e.x = 800,
        e.y = 156,
        e
    },
    n.btnLevel1_i = function() {
        var e = new eui.Image;
        return this.btnLevel1 = e,
        e.source = "tpp_panel1_shendun_png",
        e.visible = !1,
        e.x = 14,
        e.y = 156,
        e
    },
    n.btnLevel2_i = function() {
        var e = new eui.Image;
        return this.btnLevel2 = e,
        e.source = "tpp_panel1_jianbi_png",
        e.visible = !1,
        e.x = 362,
        e.y = 49,
        e
    },
    n.btnLevel3_i = function() {
        var e = new eui.Image;
        return this.btnLevel3 = e,
        e.source = "tpp_panel1_shengjia_png",
        e.visible = !1,
        e.x = 750,
        e.y = 156,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.height = 37,
        e.source = "tpp_panel1_pass1_png",
        e.width = 180,
        e.x = 49,
        e.y = 296,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.height = 37,
        e.source = "tpp_panel1_pass2_png",
        e.width = 180,
        e.x = 778,
        e.y = 296,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.height = 37,
        e.source = "tpp_panel1_pass3_png",
        e.width = 180,
        e.x = 419,
        e.y = 202,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_jx_904_kb_3_png",
        e.x = 298,
        e.y = 450,
        e
    },
    n.txt_global_i = function() {
        var e = new eui.Label;
        return this.txt_global = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "当前已有00000名玩家获得万世北溟·玄武",
        e.textColor = 16514895,
        e.x = 327,
        e.y = 457,
        e
    },
    n.buys_i = function() {
        var e = new eui.Group;
        return this.buys = e,
        e.x = 867,
        e.y = 7,
        e.elementsContent = [this._Image9_i(), this.txt_hasBuy_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_hasBuy_i = function() {
        var e = new eui.Label;
        return this.txt_hasBuy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日已购买：00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 655,
        e.y = 0,
        e.elementsContent = [this._Image10_i(), this.txt_itemNun_i(), this._Image11_i(), this.btnadd_i()],
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_img_di2_png",
        e.x = 0,
        e.y = 7,
        e
    },
    n.txt_itemNun_i = function() {
        var e = new eui.Label;
        return this.txt_itemNun = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "北冥之甲：999",
        e.textColor = 16514895,
        e.x = 35,
        e.y = 8,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_tuceng_10_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "tpp_panel5_btnadd_png",
        e.x = 160,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.tortoisePassPanel.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "level1_pet1", "level1_pet2", "level1_pet3", "level1_boss1", "level1_pet4", "level1_pet5", "level1_pet6", "level1_boss2", "level1_pet7", "level1_pet8", "level1_pet9", "level1_boss3", "level1_pet10", "level1_pet11", "level1_pet12", "level1_boss4", "level1", "level2_pet1", "level2_pet2", "level2_pet3", "level2_boss1", "level2_pet4", "level2_pet5", "level2_pet6", "level2_boss2", "level2_pet7", "level2_pet8", "level2_pet9", "level2_boss3", "level2_pet10", "level2_pet11", "level2_pet12", "level2_boss4", "level2", "level3_pet1", "level3_pet2", "level3_pet3", "level3_boss1", "level3_pet4", "level3_pet5", "level3_pet6", "level3_boss2", "level3_pet7", "level3_pet8", "level3_pet9", "level3_boss3", "level3_pet10", "level3_pet11", "level3_pet12", "level3_boss4", "level3", "pets", "btnBag", "btnCure", "bar_energy", "txt_eneNum", "ene", "down", "txt_hasBuy", "hasBuy", "txt_itemNun", "btnadd", "items", "txt_times", "btnaddTime", "cishu"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 54,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "tpp_panel1_jindutiao_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "tpp_panel3_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 4,
        e.width = 1130,
        e.y = 16,
        e.elementsContent = [this.pets_i(), this.down_i(), this.hasBuy_i(), this.items_i(), this.cishu_i()],
        e
    },
    n.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 0,
        e.y = 101,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.level1_i(), this.level2_i(), this.level3_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_tuoyuan_3_png",
        e.x = 115,
        e.y = 318,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_tuoyuan_3_png",
        e.x = 442,
        e.y = 314,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_tuoyuan_3_png",
        e.x = 810,
        e.y = 275,
        e
    },
    n.level1_i = function() {
        var e = new eui.Group;
        return this.level1 = e,
        e.x = 0,
        e.y = 40,
        e.elementsContent = [this.level1_boss1_i(), this.level1_boss2_i(), this.level1_boss3_i(), this.level1_boss4_i()],
        e
    },
    n.level1_boss1_i = function() {
        var e = new eui.Group;
        return this.level1_boss1 = e,
        e.visible = !0,
        e.x = 94,
        e.y = 3,
        e.elementsContent = [this.level1_pet1_i(), this.level1_pet2_i(), this.level1_pet3_i()],
        e
    },
    n.level1_pet1_i = function() {
        var e = new eui.Image;
        return this.level1_pet1 = e,
        e.source = "tpp_panel3_2519_png",
        e.x = 0,
        e.y = 72,
        e
    },
    n.level1_pet2_i = function() {
        var e = new eui.Image;
        return this.level1_pet2 = e,
        e.source = "tpp_panel3_2861_png",
        e.x = 321,
        e.y = 13,
        e
    },
    n.level1_pet3_i = function() {
        var e = new eui.Image;
        return this.level1_pet3 = e,
        e.source = "tpp_panel3_2866_png",
        e.x = 683,
        e.y = 0,
        e
    },
    n.level1_boss2_i = function() {
        var e = new eui.Group;
        return this.level1_boss2 = e,
        e.x = 87,
        e.y = 16,
        e.elementsContent = [this.level1_pet4_i(), this.level1_pet5_i(), this.level1_pet6_i()],
        e
    },
    n.level1_pet4_i = function() {
        var e = new eui.Image;
        return this.level1_pet4 = e,
        e.source = "tpp_panel3_2856_png",
        e.x = 0,
        e.y = 40,
        e
    },
    n.level1_pet5_i = function() {
        var e = new eui.Image;
        return this.level1_pet5 = e,
        e.source = "tpp_panel3_2851_png",
        e.x = 313,
        e.y = 18,
        e
    },
    n.level1_pet6_i = function() {
        var e = new eui.Image;
        return this.level1_pet6 = e,
        e.source = "tpp_panel3_2891_png",
        e.x = 702,
        e.y = 0,
        e
    },
    n.level1_boss3_i = function() {
        var e = new eui.Group;
        return this.level1_boss3 = e,
        e.x = 7,
        e.y = 16,
        e.elementsContent = [this.level1_pet7_i(), this.level1_pet8_i(), this.level1_pet9_i()],
        e
    },
    n.level1_pet7_i = function() {
        var e = new eui.Image;
        return this.level1_pet7 = e,
        e.source = "tpp_panel3_2898_png",
        e.x = 0,
        e.y = 45,
        e
    },
    n.level1_pet8_i = function() {
        var e = new eui.Image;
        return this.level1_pet8 = e,
        e.source = "tpp_panel3_3007_png",
        e.x = 392,
        e.y = 19,
        e
    },
    n.level1_pet9_i = function() {
        var e = new eui.Image;
        return this.level1_pet9 = e,
        e.source = "tpp_panel3_3112_png",
        e.visible = !0,
        e.x = 704,
        e.y = 0,
        e
    },
    n.level1_boss4_i = function() {
        var e = new eui.Group;
        return this.level1_boss4 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.level1_pet10_i(), this.level1_pet11_i(), this.level1_pet12_i()],
        e
    },
    n.level1_pet10_i = function() {
        var e = new eui.Image;
        return this.level1_pet10 = e,
        e.source = "tpp_panel3_3297_png",
        e.x = 0,
        e.y = 74,
        e
    },
    n.level1_pet11_i = function() {
        var e = new eui.Image;
        return this.level1_pet11 = e,
        e.source = "tpp_panel3_3247_png",
        e.x = 401,
        e.y = 16,
        e
    },
    n.level1_pet12_i = function() {
        var e = new eui.Image;
        return this.level1_pet12 = e,
        e.source = "tpp_panel3_2881_png",
        e.x = 776,
        e.y = 0,
        e
    },
    n.level2_i = function() {
        var e = new eui.Group;
        return this.level2 = e,
        e.x = 22,
        e.y = 0,
        e.elementsContent = [this.level2_boss1_i(), this.level2_boss2_i(), this.level2_boss3_i(), this.level2_boss4_i()],
        e
    },
    n.level2_boss1_i = function() {
        var e = new eui.Group;
        return this.level2_boss1 = e,
        e.x = 98,
        e.y = 65,
        e.elementsContent = [this.level2_pet1_i(), this.level2_pet2_i(), this.level2_pet3_i()],
        e
    },
    n.level2_pet1_i = function() {
        var e = new eui.Image;
        return this.level2_pet1 = e,
        e.source = "tpp_panel3_2510_png",
        e.x = 0,
        e.y = 35,
        e
    },
    n.level2_pet2_i = function() {
        var e = new eui.Image;
        return this.level2_pet2 = e,
        e.source = "tpp_panel3_2865_png",
        e.x = 282,
        e.y = 16,
        e
    },
    n.level2_pet3_i = function() {
        var e = new eui.Image;
        return this.level2_pet3 = e,
        e.source = "tpp_panel3_3248_png",
        e.x = 679,
        e.y = 0,
        e
    },
    n.level2_boss2_i = function() {
        var e = new eui.Group;
        return this.level2_boss2 = e,
        e.x = 12,
        e.y = 40,
        e.elementsContent = [this.level2_pet4_i(), this.level2_pet5_i(), this.level2_pet6_i()],
        e
    },
    n.level2_pet4_i = function() {
        var e = new eui.Image;
        return this.level2_pet4 = e,
        e.source = "tpp_panel3_3253_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.level2_pet5_i = function() {
        var e = new eui.Image;
        return this.level2_pet5 = e,
        e.source = "tpp_panel3_2799_png",
        e.x = 334,
        e.y = 33,
        e
    },
    n.level2_pet6_i = function() {
        var e = new eui.Image;
        return this.level2_pet6 = e,
        e.source = "tpp_panel3_2791_png",
        e.x = 756,
        e.y = 33,
        e
    },
    n.level2_boss3_i = function() {
        var e = new eui.Group;
        return this.level2_boss3 = e,
        e.x = 0,
        e.y = 38,
        e.elementsContent = [this.level2_pet7_i(), this.level2_pet8_i(), this.level2_pet9_i()],
        e
    },
    n.level2_pet7_i = function() {
        var e = new eui.Image;
        return this.level2_pet7 = e,
        e.source = "tpp_panel3_3044_png",
        e.x = 0,
        e.y = 50,
        e
    },
    n.level2_pet8_i = function() {
        var e = new eui.Image;
        return this.level2_pet8 = e,
        e.source = "tpp_panel3_3056_png",
        e.x = 408,
        e.y = 21,
        e
    },
    n.level2_pet9_i = function() {
        var e = new eui.Image;
        return this.level2_pet9 = e,
        e.source = "tpp_panel3_3061_png",
        e.x = 803,
        e.y = 0,
        e
    },
    n.level2_boss4_i = function() {
        var e = new eui.Group;
        return this.level2_boss4 = e,
        e.x = 65,
        e.y = 0,
        e.elementsContent = [this.level2_pet10_i(), this.level2_pet11_i(), this.level2_pet12_i()],
        e
    },
    n.level2_pet10_i = function() {
        var e = new eui.Image;
        return this.level2_pet10 = e,
        e.source = "tpp_panel3_3067_png",
        e.x = 0,
        e.y = 80,
        e
    },
    n.level2_pet11_i = function() {
        var e = new eui.Image;
        return this.level2_pet11 = e,
        e.source = "tpp_panel3_3075_png",
        e.x = 296,
        e.y = 81,
        e
    },
    n.level2_pet12_i = function() {
        var e = new eui.Image;
        return this.level2_pet12 = e,
        e.source = "tpp_panel3_3079_png",
        e.x = 646,
        e.y = 0,
        e
    },
    n.level3_i = function() {
        var e = new eui.Group;
        return this.level3 = e,
        e.x = 10,
        e.y = 1,
        e.elementsContent = [this.level3_boss1_i(), this.level3_boss2_i(), this.level3_boss3_i(), this.level3_boss4_i()],
        e
    },
    n.level3_boss1_i = function() {
        var e = new eui.Group;
        return this.level3_boss1 = e,
        e.x = 36,
        e.y = 67,
        e.elementsContent = [this.level3_pet1_i(), this.level3_pet2_i(), this.level3_pet3_i()],
        e
    },
    n.level3_pet1_i = function() {
        var e = new eui.Image;
        return this.level3_pet1 = e,
        e.source = "tpp_panel3_2976_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.level3_pet2_i = function() {
        var e = new eui.Image;
        return this.level3_pet2 = e,
        e.source = "tpp_panel3_2983_png",
        e.x = 354,
        e.y = 5,
        e
    },
    n.level3_pet3_i = function() {
        var e = new eui.Image;
        return this.level3_pet3 = e,
        e.source = "tpp_panel3_2991_png",
        e.x = 720,
        e.y = 21,
        e
    },
    n.level3_boss2_i = function() {
        var e = new eui.Group;
        return this.level3_boss2 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.level3_pet4_i(), this.level3_pet5_i(), this.level3_pet6_i()],
        e
    },
    n.level3_pet4_i = function() {
        var e = new eui.Image;
        return this.level3_pet4 = e,
        e.source = "tpp_panel3_3006_png",
        e.x = 0,
        e.y = 101,
        e
    },
    n.level3_pet5_i = function() {
        var e = new eui.Image;
        return this.level3_pet5 = e,
        e.source = "tpp_panel3_3013_png",
        e.x = 378,
        e.y = 80,
        e
    },
    n.level3_pet6_i = function() {
        var e = new eui.Image;
        return this.level3_pet6 = e,
        e.source = "tpp_panel3_3026_png",
        e.x = 789,
        e.y = 0,
        e
    },
    n.level3_boss3_i = function() {
        var e = new eui.Group;
        return this.level3_boss3 = e,
        e.x = 19,
        e.y = 6,
        e.elementsContent = [this.level3_pet7_i(), this.level3_pet8_i(), this.level3_pet9_i()],
        e
    },
    n.level3_pet7_i = function() {
        var e = new eui.Image;
        return this.level3_pet7 = e,
        e.source = "tpp_panel3_3064_png",
        e.x = 0,
        e.y = 116,
        e
    },
    n.level3_pet8_i = function() {
        var e = new eui.Image;
        return this.level3_pet8 = e,
        e.source = "tpp_panel3_3019_png",
        e.x = 347,
        e.y = 32,
        e
    },
    n.level3_pet9_i = function() {
        var e = new eui.Image;
        return this.level3_pet9 = e,
        e.source = "tpp_panel3_3226_png",
        e.x = 775,
        e.y = 0,
        e
    },
    n.level3_boss4_i = function() {
        var e = new eui.Group;
        return this.level3_boss4 = e,
        e.x = 4,
        e.y = 57,
        e.elementsContent = [this.level3_pet10_i(), this.level3_pet11_i(), this.level3_pet12_i()],
        e
    },
    n.level3_pet10_i = function() {
        var e = new eui.Image;
        return this.level3_pet10 = e,
        e.source = "tpp_panel3_3212_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.level3_pet11_i = function() {
        var e = new eui.Image;
        return this.level3_pet11 = e,
        e.source = "tpp_panel3_3249_png",
        e.x = 384,
        e.y = 16,
        e
    },
    n.level3_pet12_i = function() {
        var e = new eui.Image;
        return this.level3_pet12 = e,
        e.source = "tpp_panel3_3197_png",
        e.x = 737,
        e.y = 10,
        e
    },
    n.down_i = function() {
        var e = new eui.Group;
        return this.down = e,
        e.x = 54,
        e.y = 441,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnBag_i(), this.btnCure_i(), this._Label1_i(), this._Label2_i(), this.ene_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_taskbg1_png",
        e.x = 33,
        e.y = 49,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_line_png",
        e.x = 246,
        e.y = 52,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_line_png",
        e.x = 866,
        e.y = 52,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "tpp_panel3_jlbb1_png",
        e.x = 884,
        e.y = 64,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "tpp_panel3_jlhf_png",
        e.x = 975,
        e.y = 64,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "1、每经过1回合的挑战则北冥能量增加1点，北冥能量越高则玄武实力越强！",
        e.textColor = 16771009,
        e.x = 303,
        e.y = 80,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2、北冥能量次日重置，需重新挑战地宫守卫。",
        e.textColor = 16771009,
        e.x = 303,
        e.y = 108,
        e
    },
    n.ene_i = function() {
        var e = new eui.Group;
        return this.ene = e,
        e.elementsContent = [this._Image7_i(), this.bar_energy_i(), this._Image8_i(), this._Label3_i(), this.txt_eneNum_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_jindudi_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.bar_energy_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_energy = e,
        e.direction = "btt",
        e.height = 54,
        e.maximum = 60,
        e.value = 20,
        e.x = 28,
        e.y = 19,
        e.skinName = i,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel1_juxing_3_png",
        e.visible = !0,
        e.x = 71,
        e.y = 119,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "北冥能量",
        e.textColor = 16765477,
        e.x = 88,
        e.y = 124,
        e
    },
    n.txt_eneNum_i = function() {
        var e = new eui.Label;
        return this.txt_eneNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "00/60",
        e.textColor = 16514895,
        e.x = 172,
        e.y = 123,
        e
    },
    n.hasBuy_i = function() {
        var e = new eui.Group;
        return this.hasBuy = e,
        e.x = 922,
        e.y = 7,
        e.elementsContent = [this._Image9_i(), this.txt_hasBuy_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_hasBuy_i = function() {
        var e = new eui.Label;
        return this.txt_hasBuy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 709,
        e.y = 0,
        e.elementsContent = [this._Image10_i(), this.txt_itemNun_i(), this._Image11_i(), this.btnadd_i()],
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 7,
        e
    },
    n.txt_itemNun_i = function() {
        var e = new eui.Label;
        return this.txt_itemNun = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "北冥之甲：999",
        e.textColor = 16514895,
        e.x = 35,
        e.y = 8,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_tuceng_11_png",
        e.x = 3,
        e.y = 0,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "tpp_panel3_btnadd_png",
        e.x = 160,
        e.y = 7,
        e
    },
    n.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 497,
        e.y = 7,
        e.elementsContent = [this._Image12_i(), this.txt_times_i(), this.btnaddTime_i()],
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_times_i = function() {
        var e = new eui.Label;
        return this.txt_times = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日挑战次数：30",
        e.textColor = 16514895,
        e.x = 9,
        e.y = 0,
        e
    },
    n.btnaddTime_i = function() {
        var e = new eui.Image;
        return this.btnaddTime = e,
        e.source = "tpp_panel3_btnadd_png",
        e.x = 156,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.tortoisePassPanel.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "level3_pet1", "level3_pet2", "level3_pet3", "btnTiaozhan", "typebg1", "type1", "typebg2", "type2", "typebg3", "type3", "typebg4", "type4", "typebg5", "type5", "typebg6", "type6", "typebg7", "type7", "typebg8", "type8", "typebg9", "type9", "info", "level1", "petBg1", "pet1", "petBg2", "pet2", "petBg3", "pet3", "petBg4", "pet4", "petBg5", "pet5", "petBg6", "pet6", "img_noSe", "txt_seType", "grp_Se", "btnSe", "info_2", "level2", "rb_enemy1", "rb_enemy2", "rb_enemy3", "a_3292_2", "a_3010_2", "a_3308_2", "a_3292done", "a_3010done", "a_3308done", "level3", "btnBag", "btnCure", "txt_hasBuy", "hasBuy", "txt_values", "grp_values", "txt_itemNun", "btnadd", "items", "txtTimes", "overTimes", "txt_ene", "txt_power", "nums"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group16_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "tpp_panel4_3292_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "tpp_panel4_3292done_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "tpp_panel4_3010_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "tpp_panel4_3010done_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "tpp_panel4_3308_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "tpp_panel4_3308done_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "tpp_panel4_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Group16_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -2,
        e.width = 1100,
        e.y = 8,
        e.elementsContent = [this.level3_pet1_i(), this.level3_pet2_i(), this.level3_pet3_i(), this.btnTiaozhan_i(), this.level1_i(), this.level2_i(), this.level3_i(), this.btnBag_i(), this.btnCure_i(), this.hasBuy_i(), this.grp_values_i(), this.items_i(), this.overTimes_i(), this.nums_i()],
        e
    },
    r.level3_pet1_i = function() {
        var e = new eui.Image;
        return this.level3_pet1 = e,
        e.source = "tpp_panel4_pet3292_png",
        e.visible = !0,
        e.x = 75,
        e.y = 96,
        e
    },
    r.level3_pet2_i = function() {
        var e = new eui.Image;
        return this.level3_pet2 = e,
        e.source = "tpp_panel4_pet3010_png",
        e.visible = !0,
        e.x = 75,
        e.y = 96,
        e
    },
    r.level3_pet3_i = function() {
        var e = new eui.Image;
        return this.level3_pet3 = e,
        e.source = "tpp_panel4_pet3308_png",
        e.visible = !0,
        e.x = 65,
        e.y = 106,
        e
    },
    r.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "tpp_panel4_btntiaozhan_png",
        e.x = 799,
        e.y = 546,
        e
    },
    r.level1_i = function() {
        var e = new eui.Group;
        return this.level1 = e,
        e.visible = !1,
        e.x = 45,
        e.y = 0,
        e.elementsContent = [this.info_i(), this._Image5_i(), this._Label1_i()],
        e
    },
    r.info_i = function() {
        var e = new eui.Group;
        return this.info = e,
        e.visible = !0,
        e.x = 643,
        e.y = 110,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_9_png",
        e.visible = !0,
        e.x = 0,
        e.y = 15,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_4_png",
        e.visible = !0,
        e.x = 19,
        e.y = 60,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_8_png",
        e.visible = !0,
        e.x = 3,
        e.y = 0,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_yhssx_png",
        e.visible = !0,
        e.x = 12,
        e.y = 23,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 15,
        e.y = 67,
        e.elementsContent = [this.typebg1_i(), this.type1_i()],
        e
    },
    r.typebg1_i = function() {
        var e = new eui.Image;
        return this.typebg1 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.type1_i = function() {
        var e = new eui.Image;
        return this.type1 = e,
        e.height = 40,
        e.visible = !0,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 118,
        e.y = 67,
        e.elementsContent = [this.typebg2_i(), this.type2_i()],
        e
    },
    r.typebg2_i = function() {
        var e = new eui.Image;
        return this.typebg2 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type2_i = function() {
        var e = new eui.Image;
        return this.type2 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 220,
        e.y = 67,
        e.elementsContent = [this.typebg3_i(), this.type3_i()],
        e
    },
    r.typebg3_i = function() {
        var e = new eui.Image;
        return this.typebg3 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type3_i = function() {
        var e = new eui.Image;
        return this.type3 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 15,
        e.y = 179,
        e.elementsContent = [this.typebg4_i(), this.type4_i()],
        e
    },
    r.typebg4_i = function() {
        var e = new eui.Image;
        return this.typebg4 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type4_i = function() {
        var e = new eui.Image;
        return this.type4 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 118,
        e.y = 179,
        e.elementsContent = [this.typebg5_i(), this.type5_i()],
        e
    },
    r.typebg5_i = function() {
        var e = new eui.Image;
        return this.typebg5 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type5_i = function() {
        var e = new eui.Image;
        return this.type5 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 220,
        e.y = 179,
        e.elementsContent = [this.typebg6_i(), this.type6_i()],
        e
    },
    r.typebg6_i = function() {
        var e = new eui.Image;
        return this.typebg6 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type6_i = function() {
        var e = new eui.Image;
        return this.type6 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 15,
        e.y = 291,
        e.elementsContent = [this.typebg7_i(), this.type7_i()],
        e
    },
    r.typebg7_i = function() {
        var e = new eui.Image;
        return this.typebg7 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type7_i = function() {
        var e = new eui.Image;
        return this.type7 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group8_i = function() {
        var e = new eui.Group;
        return e.x = 112,
        e.y = 291,
        e.elementsContent = [this.typebg8_i(), this.type8_i()],
        e
    },
    r.typebg8_i = function() {
        var e = new eui.Image;
        return this.typebg8 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type8_i = function() {
        var e = new eui.Image;
        return this.type8 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 220,
        e.y = 291,
        e.elementsContent = [this.typebg9_i(), this.type9_i()],
        e
    },
    r.typebg9_i = function() {
        var e = new eui.Image;
        return this.typebg9 = e,
        e.source = "tpp_panel4_zu_511_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.type9_i = function() {
        var e = new eui.Image;
        return this.type9 = e,
        e.height = 40,
        e.width = 40,
        e.x = 35,
        e.y = 35,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_tipsbg_png",
        e.x = 78,
        e.y = 46,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "使用9种不同的属性以单精灵的方式战胜万世北溟·玄武即可通过试炼。",
        e.textColor = 16776661,
        e.x = 209,
        e.y = 62,
        e
    },
    r.level2_i = function() {
        var e = new eui.Group;
        return this.level2 = e,
        e.visible = !1,
        e.x = 46,
        e.y = 0,
        e.elementsContent = [this.info_2_i(), this._Image13_i(), this._Label2_i(), this._Image14_i()],
        e
    },
    r.info_2_i = function() {
        var e = new eui.Group;
        return this.info_2 = e,
        e.x = 642,
        e.y = 110,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Group10_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this._Group14_i(), this._Group15_i(), this._Image10_i(), this._Image11_i(), this.img_noSe_i(), this.grp_Se_i(), this.btnSe_i()],
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_9_png",
        e.visible = !0,
        e.x = 0,
        e.y = 15,
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_4_png",
        e.visible = !1,
        e.x = 19,
        e.y = 60,
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_8_png",
        e.visible = !0,
        e.x = 3,
        e.y = 0,
        e
    },
    r._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_yhsjl_png",
        e.x = 12,
        e.y = 23,
        e
    },
    r._Group10_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 30,
        e.y = 76,
        e.elementsContent = [this.petBg1_i(), this.pet1_i()],
        e
    },
    r.petBg1_i = function() {
        var e = new eui.Image;
        return this.petBg1 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Group11_i = function() {
        var e = new eui.Group;
        return e.x = 130,
        e.y = 76,
        e.elementsContent = [this.petBg2_i(), this.pet2_i()],
        e
    },
    r.petBg2_i = function() {
        var e = new eui.Image;
        return this.petBg2 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Group12_i = function() {
        var e = new eui.Group;
        return e.x = 230,
        e.y = 76,
        e.elementsContent = [this.petBg3_i(), this.pet3_i()],
        e
    },
    r.petBg3_i = function() {
        var e = new eui.Image;
        return this.petBg3 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Group13_i = function() {
        var e = new eui.Group;
        return e.x = 30,
        e.y = 176,
        e.elementsContent = [this.petBg4_i(), this.pet4_i()],
        e
    },
    r.petBg4_i = function() {
        var e = new eui.Image;
        return this.petBg4 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Group14_i = function() {
        var e = new eui.Group;
        return e.x = 130,
        e.y = 176,
        e.elementsContent = [this.petBg5_i(), this.pet5_i()],
        e
    },
    r.petBg5_i = function() {
        var e = new eui.Image;
        return this.petBg5 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Group15_i = function() {
        var e = new eui.Group;
        return e.x = 230,
        e.y = 176,
        e.elementsContent = [this.petBg6_i(), this.pet6_i()],
        e
    },
    r.petBg6_i = function() {
        var e = new eui.Image;
        return this.petBg6 = e,
        e.source = "tpp_panel4_wenhaodo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.pet6_i = function() {
        var e = new eui.Image;
        return this.pet6 = e,
        e.height = 75,
        e.source = "",
        e.visible = !0,
        e.width = 75,
        e.x = 5,
        e.y = 5,
        e
    },
    r._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_11_png",
        e.x = 41,
        e.y = 288,
        e
    },
    r._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_tuoyuan_1_png",
        e.x = 77,
        e.y = 291,
        e
    },
    r.img_noSe_i = function() {
        var e = new eui.Image;
        return this.img_noSe = e,
        e.source = "tpp_panel4_zwxztzsx_png",
        e.visible = !0,
        e.x = 97,
        e.y = 304,
        e
    },
    r.grp_Se_i = function() {
        var e = new eui.Group;
        return this.grp_Se = e,
        e.x = 90,
        e.y = 304,
        e.elementsContent = [this._Image12_i(), this.txt_seType_i()],
        e
    },
    r._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_tzsx_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    r.txt_seType_i = function() {
        var e = new eui.Label;
        return this.txt_seType = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XXXX",
        e.textColor = 16053325,
        e.visible = !0,
        e.x = 109,
        e.y = 1,
        e
    },
    r.btnSe_i = function() {
        var e = new eui.Image;
        return this.btnSe = e,
        e.source = "tpp_panel4_btnse_png",
        e.x = 135,
        e.y = 339,
        e
    },
    r._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_tipsbg_png",
        e.x = 77,
        e.y = 46,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "使用相同属性的6只精灵以单精灵的方式战胜万世北溟·玄武即可通过试炼。",
        e.textColor = 16776661,
        e.x = 187,
        e.y = 62,
        e
    },
    r._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_title2_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    r.level3_i = function() {
        var e = new eui.Group;
        return this.level3 = e,
        e.visible = !0,
        e.x = 46,
        e.y = 0,
        e.elementsContent = [this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i(), this.a_3292_2_i(), this.a_3010_2_i(), this.a_3308_2_i(), this.a_3292done_i(), this.a_3010done_i(), this.a_3308done_i(), this._Image19_i(), this._Label3_i()],
        e
    },
    r._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_4_png",
        e.visible = !0,
        e.x = 661,
        e.y = 170,
        e
    },
    r._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_9_png",
        e.x = 642,
        e.y = 125,
        e
    },
    r._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_zu_8_png",
        e.visible = !0,
        e.x = 645,
        e.y = 110,
        e
    },
    r._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_slmb_png",
        e.x = 653,
        e.y = 133,
        e
    },
    r.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 660,
        e.y = 169,
        e.skinName = i,
        e
    },
    r.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 660,
        e.y = 282,
        e.skinName = n,
        e
    },
    r.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 660,
        e.y = 395,
        e.skinName = s,
        e
    },
    r.a_3292_2_i = function() {
        var e = new eui.Image;
        return this.a_3292_2 = e,
        e.source = "tpp_panel4_3292_png",
        e.visible = !1,
        e.x = 660,
        e.y = 169,
        e
    },
    r.a_3010_2_i = function() {
        var e = new eui.Image;
        return this.a_3010_2 = e,
        e.source = "tpp_panel4_3010_png",
        e.visible = !1,
        e.x = 660,
        e.y = 282,
        e
    },
    r.a_3308_2_i = function() {
        var e = new eui.Image;
        return this.a_3308_2 = e,
        e.source = "tpp_panel4_3308_png",
        e.visible = !1,
        e.x = 660,
        e.y = 395,
        e
    },
    r.a_3292done_i = function() {
        var e = new eui.Image;
        return this.a_3292done = e,
        e.source = "tpp_panel4_3292done_png",
        e.visible = !1,
        e.x = 660,
        e.y = 169,
        e
    },
    r.a_3010done_i = function() {
        var e = new eui.Image;
        return this.a_3010done = e,
        e.source = "tpp_panel4_3010done_png",
        e.visible = !1,
        e.x = 660,
        e.y = 282,
        e
    },
    r.a_3308done_i = function() {
        var e = new eui.Image;
        return this.a_3308done = e,
        e.source = "tpp_panel4_3308done_png",
        e.visible = !1,
        e.x = 660,
        e.y = 395,
        e
    },
    r._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_tipsbg_png",
        e.x = 77,
        e.y = 46,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "5回合内战胜任意挑战目标征服度+10，8回合内战胜任意挑战目标征服度+8，15回合内战胜\n任意挑战目标征服度+5，20回合内战胜任意挑战目标征服度+3，征服度达到500即可通过试炼。",
        e.textColor = 16776661,
        e.x = 130,
        e.y = 52,
        e
    },
    r.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "tpp_panel4_jlbb1_png",
        e.x = 0,
        e.y = 434,
        e
    },
    r.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "tpp_panel4_jlhf_png",
        e.x = 0,
        e.y = 525,
        e
    },
    r.hasBuy_i = function() {
        var e = new eui.Group;
        return this.hasBuy = e,
        e.x = 913,
        e.y = 15,
        e.elementsContent = [this._Image20_i(), this.txt_hasBuy_i()],
        e
    },
    r._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.txt_hasBuy_i = function() {
        var e = new eui.Label;
        return this.txt_hasBuy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    r.grp_values_i = function() {
        var e = new eui.Group;
        return this.grp_values = e,
        e.visible = !0,
        e.x = 474,
        e.y = 15,
        e.elementsContent = [this._Image21_i(), this.txt_values_i()],
        e
    },
    r._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.txt_values_i = function() {
        var e = new eui.Label;
        return this.txt_values = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "征服度：1/500",
        e.textColor = 16514895,
        e.x = 20,
        e.y = 1,
        e
    },
    r.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 700,
        e.y = 8,
        e.elementsContent = [this._Image22_i(), this.txt_itemNun_i(), this._Image23_i(), this.btnadd_i()],
        e
    },
    r._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_img_di2_png",
        e.x = 0,
        e.y = 7,
        e
    },
    r.txt_itemNun_i = function() {
        var e = new eui.Label;
        return this.txt_itemNun = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "北冥之甲：999",
        e.textColor = 16514895,
        e.x = 35,
        e.y = 8,
        e
    },
    r._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel3_tuceng_11_png",
        e.x = 3,
        e.y = 0,
        e
    },
    r.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "tpp_panel3_btnadd_png",
        e.x = 160,
        e.y = 7,
        e
    },
    r.overTimes_i = function() {
        var e = new eui.Group;
        return this.overTimes = e,
        e.x = 273,
        e.y = 497,
        e.elementsContent = [this._Image24_i(), this._Label4_i(), this.txtTimes_i()],
        e
    },
    r._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "tpp_panel5_jx_904_kb_2_png",
        e.width = 232,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 19.9230574964982,
        e.text = "今日已战胜       次",
        e.textColor = 16305443,
        e.x = 39,
        e.y = 4,
        e
    },
    r.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/5",
        e.textColor = 16774231,
        e.x = 144,
        e.y = 3,
        e
    },
    r.nums_i = function() {
        var e = new eui.Group;
        return this.nums = e,
        e.x = 130,
        e.y = 536,
        e.elementsContent = [this._Image25_i(), this._Image26_i(), this._Image27_i(), this._Image28_i(), this._Label5_i(), this.txt_ene_i(), this._Label6_i(), this.txt_power_i()],
        e
    },
    r._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_10_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_10_png",
        e.x = 264,
        e.y = 0,
        e
    },
    r._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_jx_8_kb_png",
        e.x = 242,
        e.y = 1,
        e
    },
    r._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel4_juxing_9_png",
        e.x = 21,
        e.y = 3,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24.0368064736291,
        e.text = "北冥能量:",
        e.textColor = 16776661,
        e.x = 54,
        e.y = 4,
        e
    },
    r.txt_ene_i = function() {
        var e = new eui.Label;
        return this.txt_ene = e,
        e.fontFamily = "MFShangHei",
        e.size = 24.0368064736291,
        e.text = "99",
        e.textColor = 16514895,
        e.x = 177,
        e.y = 6,
        e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24.0368064736291,
        e.text = "玄武战力:",
        e.textColor = 16776661,
        e.x = 298,
        e.y = 4,
        e
    },
    r.txt_power_i = function() {
        var e = new eui.Label;
        return this.txt_power = e,
        e.fontFamily = "MFShangHei",
        e.size = 24.0368064736291,
        e.text = "999999",
        e.textColor = 16514895,
        e.x = 408,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.tortoisePassPanel.Panel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnGetItem", "btnGetPet", "btnEnvole", "imghasEnvole", "btnUp", "imghasUp", "txt_hasBuy", "buys", "txt_itemNun", "btnadd", "items"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "tpp_panel4_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 8,
        e.width = 1100,
        e.y = 16,
        e.elementsContent = [this._Image1_i(), this.btnGetItem_i(), this.btnGetPet_i(), this.btnEnvole_i(), this.imghasEnvole_i(), this._Image2_i(), this._Label1_i(), this.btnUp_i(), this.imghasUp_i(), this._Image3_i(), this._Label2_i(), this.buys_i(), this.items_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_tuceng_1_png",
        e.x = 136,
        e.y = 4,
        e
    },
    i.btnGetItem_i = function() {
        var e = new eui.Image;
        return this.btnGetItem = e,
        e.source = "tpp_panel5_huodejia_png",
        e.x = 960,
        e.y = 486,
        e
    },
    i.btnGetPet_i = function() {
        var e = new eui.Image;
        return this.btnGetPet = e,
        e.source = "tpp_panel5_huodexuanwu_png",
        e.x = 0,
        e.y = 483,
        e
    },
    i.btnEnvole_i = function() {
        var e = new eui.Image;
        return this.btnEnvole = e,
        e.source = "tpp_panel5_btnyijian_png",
        e.x = 337,
        e.y = 546,
        e
    },
    i.imghasEnvole_i = function() {
        var e = new eui.Image;
        return this.imghasEnvole = e,
        e.source = "tpp_panel5_yihuode_png",
        e.x = 340,
        e.y = 545,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_jx_904_kb_2_png",
        e.x = 258,
        e.y = 512,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "需要北冥·玄武和15个北冥之甲",
        e.textColor = 16776661,
        e.x = 270,
        e.y = 519,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "tpp_panel5_btntiaozhan_png",
        e.x = 613,
        e.y = 546,
        e
    },
    i.imghasUp_i = function() {
        var e = new eui.Image;
        return this.imghasUp = e,
        e.source = "tpp_panel5_yilingqu_png",
        e.visible = !0,
        e.x = 615,
        e.y = 544,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_jx_904_kb_3_png",
        e.x = 584,
        e.y = 512,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "需要40个北冥之甲",
        e.textColor = 16776661,
        e.x = 599,
        e.y = 519,
        e
    },
    i.buys_i = function() {
        var e = new eui.Group;
        return this.buys = e,
        e.x = 902,
        e.y = 7,
        e.elementsContent = [this._Image4_i(), this.txt_hasBuy_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_hasBuy_i = function() {
        var e = new eui.Label;
        return this.txt_hasBuy = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日已购买：00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 690,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.txt_itemNun_i(), this._Image6_i(), this.btnadd_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_img_di2_png",
        e.x = 0,
        e.y = 7,
        e
    },
    i.txt_itemNun_i = function() {
        var e = new eui.Label;
        return this.txt_itemNun = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "北冥之甲：999",
        e.textColor = 16514895,
        e.x = 35,
        e.y = 8,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tpp_panel5_tuceng_10_png",
        e.x = 3,
        e.y = 0,
        e
    },
    i.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "tpp_panel5_btnadd_png",
        e.x = 160,
        e.y = 7,
        e
    },
    t
} (eui.Skin);