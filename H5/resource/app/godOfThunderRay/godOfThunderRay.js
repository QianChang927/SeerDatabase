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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Panel5Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gotr_panel5_stms_png",
            function() {
                t.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.skill1,
            function() {
                e.service.openPanel(t.GodOfThunderRayConst.PANEL6)
            },
            this),
            ImageButtonUtil.add(this.skill2,
            function() {
                e.service.openPanel(t.GodOfThunderRayConst.PANEL7)
            },
            this),
            ImageButtonUtil.add(this.btnWu1,
            function() {
                var t = {
                    id: 17677
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnWu2,
            function() {
                var t = {
                    id: 18126
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this)
        },
        i.prototype.update = function() {
            var e = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill1),
            i = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill2);
            this.hasGet1.visible = e,
            this.hasGet2.visible = i,
            this.btnGo1.visible = !e,
            this.btnGo2.visible = !i,
            this.skill1.touchEnabled = !e,
            this.skill2.touchEnabled = !i,
            DisplayUtil.setEnabled(this.btnGo1, !e, e),
            DisplayUtil.setEnabled(this.btnGo2, !i, i)
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel5 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel5")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.GodOfThunderRayConst.forever_level2_draw, t.GodOfThunderRayConst.forever_level2_time, t.GodOfThunderRayConst.forever_level3_body1, t.GodOfThunderRayConst.forever_level3_body2, t.GodOfThunderRayConst.forever_level3_body3, t.GodOfThunderRayConst.forever_level3_body4, t.GodOfThunderRayConst.forever_level3_body5, t.GodOfThunderRayConst.forever_level3_state1, t.GodOfThunderRayConst.forever_level3_state2, t.GodOfThunderRayConst.forever_level3_state3, t.GodOfThunderRayConst.forever_level_state, t.GodOfThunderRayConst.forever_skill1_state], [t.GodOfThunderRayConst.daily_difdraw_times, t.GodOfThunderRayConst.daily_final_times, t.GodOfThunderRayConst.daily_level_state, t.GodOfThunderRayConst.daily_reward_state, t.GodOfThunderRayConst.daily_roudraw_times], [t.GodOfThunderRayConst.bitbuf_skill1, t.GodOfThunderRayConst.bitbuf_skill2], [t.GodOfThunderRayConst.daily_bitbuf_skill1, t.GodOfThunderRayConst.daily_bitbuf_skill2]),
            i.init([{
                panelName: t.GodOfThunderRayConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: t.GodOfThunderRayConst.PANEL1
            },
            {
                panelName: t.GodOfThunderRayConst.PANEL2
            },
            {
                panelName: t.GodOfThunderRayConst.PANEL3
            },
            {
                panelName: t.GodOfThunderRayConst.PANEL4
            }]),
            i
        }
        return __extends(i, e),
        i.prototype.reShow = function() {
            var t = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                t.destroyed || t.currentPanel && t.currentPanel.update && t.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    t.GodOfThunderRay = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRay")
} (godOfThunderRay || (godOfThunderRay = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, r) {
        function o(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, s)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.canDown = !0,
            i.new_monster_level_id = 144,
            i.itemIndex = 0,
            i.itemsID = [1706343, 1706344, 1706113],
            i.itemMax = [25, 80, 150],
            i.skinName = t.MainpanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(151, this, "gotr_mainpanel_stms_png",
            function() {
                t.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            PetFactorCollectionManager.getAllData().then(function() {
                var e = PetFactorCollectionManager.checkPetIdIndexIsCollection(t.new_monster_level_id);
                t.btnCollect.source = e ? "gotr_mainpanel_btnysc_png": "gotr_mainpanel_btnsc_png"
            }),
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2887,
                    type: "pet",
                    thisObj: e
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245152, 1,
                    function() {
                        KTool.doExchange(6333, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                KTool.doExchange(6393, 1,
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【每日抽奖】");
                var e = new t.DrawPop,
                i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(e, i)
            },
            this),
            ImageButtonUtil.add(this.item1,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【怒雷之魂】");
                var e = new t.SignPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.item2,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【惊雷之魂】"),
                e.service.openPanel(t.GodOfThunderRayConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.item3,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【狂雷之魂】"),
                e.service.openPanel(t.GodOfThunderRayConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnJinhua,
            function() {
                var i = e.service.getValue(t.GodOfThunderRayConst.forever_level_state);
                return 3 == e.itemIndex && 0 == i ? void KTool.doExchange(6394, 1,
                function() {
                    e.service.updateValues().then(function() {
                        e.service.openPanel(t.GodOfThunderRayConst.PANEL4)
                    })
                }) : void e.service.openPanel(t.GodOfThunderRayConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnTexun,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【神力特训】"),
                e.service.openPanel(t.GodOfThunderRayConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击主界面-【能力提升】");
                var e = new t.UpPop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            EventManager.addEventListener("updateRayItems",
            function() {
                ItemManager.updateItems([1706343, 1706344, 1706113],
                function() {
                    e.update()
                })
            },
            this),
            EventManager.addEventListener("buyAllUps",
            function() {
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, t = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = t ? "gotr_mainpanel_btnysc_png": "gotr_mainpanel_btnsc_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, t)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return e.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            this.itemIndex = 0;
            for (var e = 1; 3 >= e; e++) {
                var i = ItemManager.getNumByID(this.itemsID[e - 1]);
                this["txt_itemNum" + e].text = i + "/" + this.itemMax[e - 1],
                i >= this.itemMax[e - 1] && this.itemIndex++,
                this["btnGet_" + e].visible = i < this.itemMax[e - 1],
                this["hasPass" + e].visible = i >= this.itemMax[e - 1],
                this["item" + e].touchEnabled = i < this.itemMax[e - 1]
            }
            for (var n = this.service.getValue(2452), a = 0, e = 1; 5 >= e; e++) 1 == KTool.getBit(n, e) && a++;
            var r = this.service.getValue(t.GodOfThunderRayConst.forever_level_state);
            this.btnUp.touchEnabled = 5 != r,
            this.hasUp.visible = 5 == r;
            var o = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill1),
            s = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill2);
            this.btnTexun.visible = this.touchEnabled = !o || !s,
            this.hasTexun.visible = o && s;
            var _ = this.service.getValue(t.GodOfThunderRayConst.forever_level_state);
            this.btnGetPet.visible = 5 == a && 2 > _,
            this.hasGet.visible = _ > 2,
            this.hasPass.visible = _ >= 2,
            this.btnOnekey.visible = 1 > _,
            this.btnTexun.visible = this.btnUp.visible = _ >= 1,
            this.right1.visible = 1 > _ && this.itemIndex < 3,
            this.right2.visible = _ >= 1 || 3 == this.itemIndex,
            DisplayUtil.setEnabled(this.btnJinhua, 2 > _ && 5 > a, _ >= 2 || 5 == a)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayMainPanel = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayMainPanel")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.petsId = [1730, 2360, 1697, 2336, 2070, 2431, 2849, 2857, 2862],
            i.skinName = t.Panel2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gotr_panel2_stms_png",
            function() {
                EventManager.removeAll(t),
                t.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        i.prototype.beforeAdd = function(e) {
            var i = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                i.service.getValue(t.GodOfThunderRayConst.forever_skill1_state);
                i.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        var e = PetXMLInfo.getName(i.petsId[i.levelState - 1]),
                        n = i.service.getValue(t.GodOfThunderRayConst.daily_reward_state);
                        i.levelState % 3 == 0 && 0 != i.levelState && 0 == KTool.getBit(n, i.levelState / 3) ? BubblerManager.getInstance().showText("已战胜" + e + ",可以领取奖励！") : BubblerManager.getInstance().showText("已战胜" + e)
                    }
                    i.update()
                })
            },
            this)
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
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击惊雷之魂界面-【开始挑战】"),
                FightManager.fightNoMapBoss(5051 + e.levelState)
            },
            this),
            ImageButtonUtil.add(this.btnLingqu,
            function() {
                SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [5, e.levelState / 3],
                function(t) {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnJibai,
            function() {
                PayManager.doPayFunc(function() {
                    var i = Math.floor(e.levelState / 3);
                    KTool.buyProductByCallback(245158 + i, 1,
                    function() {
                        SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [4, e.levelState + 1],
                        function(i) {
                            e.service.updateValues().then(function() {
                                e.update();
                                var i = PetXMLInfo.getName(e.petsId[e.levelState - 1]),
                                n = e.service.getValue(t.GodOfThunderRayConst.daily_reward_state);
                                e.levelState % 3 == 0 && 0 != e.levelState && 0 == KTool.getBit(n, e.levelState / 3) ? BubblerManager.getInstance().showText("已战胜" + i + ",可以领取奖励！") : BubblerManager.getInstance().showText("已战胜" + i)
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1706344,
                        productID: 245157
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(245157, i,
                        function() {
                            KTool.doExchange(6395, i,
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this;
            this.levelState = this.service.getValue(t.GodOfThunderRayConst.daily_level_state);
            var i = this.service.getValue(t.GodOfThunderRayConst.daily_reward_state);
            this.levelState % 3 == 0 && 0 != this.levelState && 0 == KTool.getBit(i, this.levelState / 3) ? (this.reward.visible = !0, this.pets.visible = !1, this.grpRe2.visible = this.levelState / 3 == 3, this.icon1.source = ClientConfig.getItemIcon(1706344), this.txt_icon1.text = "x" + 2 * this.levelState / 3, this.icon2.source = ClientConfig.getItemIcon(1)) : (this.reward.visible = !1, this.pets.visible = !0);
            for (var n = 1; 9 >= n; n++) this["pet" + n].visible = this.levelState == n - 1,
            this["not" + n].visible = this.levelState < n - 1,
            this["pass" + n].visible = this.levelState > n - 1,
            this["jiantou_light_" + n].visible = this.levelState > n - 1;
            this.setReard(),
            this.txtCoin2.text = ItemManager.getNumByID(1706344) + "/80",
            this.levelState < 9 && (this.txt_petName.text = PetXMLInfo.getName(this.petsId[this.levelState])),
            9 == this.levelState && 1 == KTool.getBit(i, this.levelState / 3) && Alarm.show("你今天已经收集足够的惊雷之魂，请明天再来吧！",
            function() {
                EventManager.removeAll(e),
                e.service.backToMainPanel()
            },
            this)
        },
        i.prototype.setReard = function() {
            for (var e = this.service.getValue(t.GodOfThunderRayConst.daily_reward_state), i = 1; 3 >= i; i++) {
                var n = 0 == KTool.getBit(e, i) && this.levelState != 3 * i;
                if (this["notItem" + i].visible = n, this["get" + i].visible = 1 == KTool.getBit(e, i), this.levelState == 3 * i && 0 == KTool.getBit(e, i)) {
                    if (9 == this.levelState) break;
                    this["not" + (this.levelState + 1)].visible = !0
                }
            }
            this.jiantou_lightdown__1.visible = 1 == KTool.getBit(e, 1),
            this.jiantou_lightdown__2.visible = 1 == KTool.getBit(e, 2)
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel2 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel2")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.leftTime = 0,
            i.curDif = 0,
            i.winNum = [4, 8, 16],
            i.skinName = t.Panel3Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gotr_panel3_stms_png",
            function() {
                t.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents()
        },
        i.prototype.beforeAdd = function(t) {},
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
            ImageButtonUtil.add(this.btnDraw,
            function() {
                return StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击狂雷之魂界面-【抽取对手】"),
                e.leftTime <= 0 ? void BubblerManager.getInstance().showText("很抱歉，今日剩余抽取次数不足！") : void SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [6, 0],
                function(i) {
                    e.service.updateValues().then(function() {
                        e.curDif = e.service.getValue(t.GodOfThunderRayConst.forever_level2_draw),
                        e.animPlay(e.curDif)
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击狂雷之魂界面-【重新抽取】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245161, 1,
                    function() {
                        SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [7, 0],
                        function(i) {
                            e.service.updateValues().then(function() {
                                e.curDif = e.service.getValue(t.GodOfThunderRayConst.forever_level2_draw),
                                e.animPlay(e.curDif)
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245161 + e.curDif, 1,
                    function() {
                        SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [8, e.curDif],
                        function(t) {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnSkip,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245165, 1,
                    function() {
                        KTool.doExchange(6397, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击狂雷之魂界面-【开始挑战】"),
                FightManager.fightNoMapBoss(5059 + e.curDif)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1706113,
                        productID: 245166
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(245166, i,
                        function() {
                            KTool.doExchange(6396, i,
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this)
        },
        i.prototype.animPlay = function(t) {
            for (var e = this,
            i = 1; 3 >= i; i++) this["pet" + i].visible = !1;
            this.imgNopet.visible = !0,
            this.touchChildren = !1;
            var n = {};
            n.i = 1,
            egret.Tween.get(n, {
                onChange: function() {
                    for (var t = Math.floor(n.i) % 3, i = 0; 3 > i; i++) e["selected" + i].visible = !1;
                    e["selected" + t].visible = !0
                }
            }).to({
                i: 30 + t - 1
            },
            4e3, egret.Ease.quadInOut).call(function() {
                e.touchChildren = !0,
                e.update()
            })
        },
        i.prototype.update = function() {
            var t = this,
            e = ItemManager.getNumByID(1706113);
            this.txtCoin2.text = e + "/150",
            this.checkFightState(),
            e >= 150 && Alarm.show("已凑齐所需的狂雷之魂，充能在即再接再厉！",
            function() {
                t.service.backToMainPanel()
            })
        },
        i.prototype.checkFightState = function() {
            var e = this;
            this.curDif = this.service.getValue(t.GodOfThunderRayConst.forever_level2_draw),
            this.leftTime = 5 - this.service.getValue(t.GodOfThunderRayConst.daily_difdraw_times);
            var i = this.service.getValue(t.GodOfThunderRayConst.forever_level2_time);
            this.imgNopet.visible = this.noDraw.visible = 0 == this.curDif,
            this.reward.visible = 0 != this.curDif,
            this.group_draw.visible = 0 == this.curDif && 1e3 * (i + 60) < SystemTimerManager.sysBJDate.getTime() && 0 != this.leftTime,
            this.group_hasDraw.visible = 0 != this.curDif,
            this.group_hasFight.visible = 0 == this.curDif && 0 != i && 0 != this.leftTime,
            this.txt_leftTime.text = this.leftTime + "/5",
            this.txt_leftTime1.text = "(" + this.leftTime + "/5)",
            this.btnRefresh.visible = this.group_hasDraw.visible,
            this.txt_leftTime1.visible = this.group_hasDraw.visible,
            this.img_tom.visible = 0 == this.leftTime && 0 == this.curDif,
            0 != i && this.service.registerClock(i + 60,
            function() {
                0 == e.curDif && 0 != e.leftTime && (e.group_draw.visible = !0),
                e.group_hasFight.visible = !1
            },
            this, this.txt_overTime),
            0 != this.curDif && (this.txt_winNum.text = this.winNum[this.curDif - 1] + "", this.txt_loseNum.text = "2");
            for (var n = 1; 3 >= n; n++) this["pet" + n].visible = this.curDif == n,
            this["selected" + (n - 1)].visible = this.curDif == n
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel3 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel3")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.leftTime = 0,
            i.skinName = t.Panel4Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gotr_panel4_stms_png",
            function() {
                EventManager.removeAll(t),
                t.service.backToMainPanel()
            },
            this,
            function() {}),
            this.name = "godOfThunderRay.Panel4Skin",
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            this.initAnim()
        },
        i.prototype.beforeAdd = function(t) {
            var e = this,
            i = ["雷神之智", "雷神之翼", "雷神之躯,", "雷神之臂", "雷神之疾,"];
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                var t = e.service.getValue(2452);
                e.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        var n = e.service.getValue(2452),
                        a = e.service.getValue(2453),
                        r = "";
                        KTool.getBit(t, a) - KTool.getBit(n, a) < 0 ? r = "挑战成功！<font color='#ff0000'>" + i[a - 1] + "</font>变为已充能状态！": KTool.getBit(t, a) - KTool.getBit(n, a) > 0 && (r = "<font color='#ff0000'>" + i[a - 1] + "</font>已处于充能状态，能量消散了"),
                        e.animPlay(a),
                        BubblerManager.getInstance().showText(r, !0)
                    }
                    e.update()
                })
            },
            this)
        },
        i.prototype.initAnim = function() {
            this.studyAnim = SpineUtil.createAnimate("leiyibanqian"),
            this.rightInfo.addChild(this.studyAnim),
            this.studyAnim.touchChildren = this.studyAnim.touchEnabled = !1
        },
        i.prototype.animPlay = function(t) {
            var e = this;
            this.studyAnim.visible = !0,
            this.studyAnim.x = this["trial" + t].x + 160,
            this.studyAnim.y = this["trial" + t].y + 40,
            this.studyAnim.play("leiyi_chongneng", 1, 1, {
                playEnd: function() {
                    e.studyAnim.visible = !1
                }
            })
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener("ZhidingAnim",
            function(t) {
                e.animPlay(t.data)
            },
            this),
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
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！") : void FightManager.fightNoMapBoss(5063)
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245167, 1,
                    function() {
                        KTool.doExchange(6421, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnZhiding,
            function() {
                var e = new t.Panel4Pop;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245168, 1,
                    function() {
                        KTool.doExchange(6399, 1,
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
            var e = this,
            i = MainManager.actorInfo.isVip ? 5 : 3;
            this.leftTime = i - this.service.getValue(t.GodOfThunderRayConst.daily_final_times),
            this.txt_leftTime.text = this.leftTime + "/" + i,
            this.btnTiaozhan.visible = 0 != this.leftTime,
            this.btnAdd.visible = 0 == this.leftTime;
            for (var n = this.service.getValue(2452), a = 0, r = 1; 5 >= r; r++) {
                var o = this.service.getValue(2458 + r);
                this["bar_state" + r].value = o,
                1 == KTool.getBit(n, r) ? (a++, this["img_hasCharge" + r].visible = !0, this["img_noCharge" + r].visible = !1) : (5 == o ? this["bar_state" + r].thumb.source = "gotr_panel4_jdyxs_png": this["bar_state" + r].thumb.source = "gotr_panel4_jdwxs_png", this["img_noCharge" + r].visible = !0, this["img_hasCharge" + r].visible = !1),
                this["txt_trail" + r].text = "已消散" + o + "次"
            }
            5 == a && Alarm.show("能量充盈在雷伊体内，可以领取雷伊完全体了！",
            function() {
                EventManager.removeAll(e),
                e.service.backToMainPanel()
            })
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel4 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel4")
} (godOfThunderRay || (godOfThunderRay = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
godOfThunderRay; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAINPANEL = "godOfThunderRay.GodOfThunderRayMainPanel",
        t.PANEL1 = "godOfThunderRay.GodOfThunderRayPanel1",
        t.PANEL2 = "godOfThunderRay.GodOfThunderRayPanel2",
        t.PANEL3 = "godOfThunderRay.GodOfThunderRayPanel3",
        t.PANEL4 = "godOfThunderRay.GodOfThunderRayPanel4",
        t.PANEL5 = "godOfThunderRay.GodOfThunderRayPanel5",
        t.PANEL6 = "godOfThunderRay.GodOfThunderRayPanel6",
        t.PANEL7 = "godOfThunderRay.GodOfThunderRayPanel7",
        t.CMD = 47301,
        t.forever_level_state = 2448,
        t.forever_level2_draw = 2450,
        t.forever_level2_time = 2451,
        t.forever_level3_state1 = 2452,
        t.forever_level3_state2 = 2453,
        t.forever_level3_state3 = 2454,
        t.forever_level3_body1 = 2459,
        t.forever_level3_body2 = 2460,
        t.forever_level3_body3 = 2461,
        t.forever_level3_body4 = 2462,
        t.forever_level3_body5 = 2463,
        t.forever_skill1_state = 5936,
        t.daily_level_state = 12315,
        t.daily_reward_state = 12316,
        t.daily_difdraw_times = 12317,
        t.daily_final_times = 12318,
        t.daily_roudraw_times = 12319,
        t.weekly_sign = 20380,
        t.bitbuf_skill1 = 17728,
        t.bitbuf_skill2 = 17729,
        t.daily_bitbuf_skill1 = 1000120,
        t.daily_bitbuf_skill2 = 1000121,
        t
    } ();
    t.GodOfThunderRayConst = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayConst")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.defeatStr = ["在12回合后击败对手", "只会受到先制技能伤害", "只会受到致命一击伤害", "只会受到特殊攻击伤害"],
            i.petNanes = ["里奥杰斯", "提亚戈斯", "雷纳尔多", "阿克妮丝"],
            i.skinName = t.Panel6Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.name = "godOfThunderRay.Panel6Skin",
            this.initOldPveBtnClose(0, this, "gotr_panel6_stms_png",
            function() {
                i.service.openPanel(t.GodOfThunderRayConst.PANEL5),
                EventManager.removeAll(i)
            },
            this,
            function() {}),
            this.txt_ss.textFlow = [{
                text: "仅能使用",
                style: {
                    textColor: 8868906
                }
            },
            {
                text: "雷神·雷伊",
                style: {
                    textColor: 16711680
                }
            },
            {
                text: "首发",
                style: {
                    textColor: 8868906
                }
            }],
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.initAnim(),
            this.addEvents()
        },
        i.prototype.beforeAdd = function(e) {
            var i = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                var e = i.service.getValue(t.GodOfThunderRayConst.forever_skill1_state);
                i.service.updateValues().then(function() {
                    FightManager.isWin ? BubblerManager.getInstance().showText("已成功击败" + i.petNanes[e]) : BubblerManager.getInstance().showText("战斗失败，进度保留，明日可继续挑战"),
                    i.update()
                })
            },
            this)
        },
        i.prototype.initAnim = function() {
            this.studyAnim = SpineUtil.createAnimate("leiyibanqian"),
            this.rightinfo.addChild(this.studyAnim),
            this.studyAnim.x = 176,
            this.studyAnim.y = 178,
            this.studyAnim.play("leiyi_study2", 0),
            this.studyAnim.touchChildren = this.studyAnim.touchEnabled = !1
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
            ImageButtonUtil.add(this.btnYijian,
            function() {
                return PetManager.isDefaultPet(2887) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245430, 1,
                    function() {
                        KTool.doExchange(6792, 1,
                        function() {
                            Alert.show("雷神·雷伊学会了<font color='#ff0000'>雷神双灭斩</font>，可以前往背包查看",
                            function() {
                                e.service.showPetBag()
                            }),
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    })
                },
                e) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    e.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnXuexi,
            function() {
                return PetManager.isDefaultPet(2887) ? void KTool.doExchange(6791, 1,
                function() {
                    Alert.show("雷神·雷伊学会了<font color='#ff0000'>雷神双灭斩</font>，可以前往背包查看",
                    function() {
                        e.service.showPetBag()
                    }),
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                }) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    e.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                if (!PetManager.isDefaultPet(2887)) return void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    e.service.showPetBag()
                });
                var i = e.service.getValue(t.GodOfThunderRayConst.forever_skill1_state);
                FightManager.fightNoMapBoss(5314 + i)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this.service.getValue(t.GodOfThunderRayConst.forever_skill1_state),
            i = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill1),
            n = 1 == this.service.getValue(t.GodOfThunderRayConst.daily_bitbuf_skill1);
            this.btnTiaozhan.visible = !n,
            this.btnXuexi.visible = this.studyAnim.visible = e >= 4,
            this.btnYijian.visible = 4 > e,
            this.bar_value.value = e,
            this.txt_lose.visible = n,
            this.txt_condition.text = this.defeatStr[e],
            this.txt_progress.text = "已战胜：" + e + "/4";
            for (var a = 1; 4 >= a; a++) this["imgpet" + a].visible = e == a - 1,
            this["mask" + a].visible = e != a - 1,
            this["pass" + a].visible = e > a - 1,
            this["selected" + a].visible = e == a - 1;
            for (var a = 1; 3 >= a; a++) this["light_" + a].visible = e >= a,
            this["dark_" + a].visible = a > e;
            i && (this.service.openPanel(t.GodOfThunderRayConst.PANEL5), EventManager.removeAll(this))
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel6 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel6")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.notEnough = !1,
            i.skinName = t.Panel7Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gotr_panel7_stms_png",
            function() {
                EventManager.removeAll(i),
                i.service.openPanel(t.GodOfThunderRayConst.PANEL5)
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.txt_ss.textFlow = [{
                text: "仅能使用",
                style: {
                    textColor: 8868906
                }
            },
            {
                text: "雷神·雷伊",
                style: {
                    textColor: 16711680
                }
            },
            {
                text: "首发",
                style: {
                    textColor: 8868906
                }
            }],
            this.initAnim(),
            this.addEvents()
        },
        i.prototype.beforeAdd = function(e) {
            var i = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                i.service.getValue(t.GodOfThunderRayConst.forever_skill1_state);
                i.animPlay(),
                i.service.updateValues().then(function() {
                    i.update()
                })
            },
            this)
        },
        i.prototype.initAnim = function() {
            this.studyAnim = SpineUtil.createAnimate("leiyibanqian"),
            this.right1.addChild(this.studyAnim),
            this.studyAnim.x = 176,
            this.studyAnim.y = 178,
            this.notEnough || this.studyAnim.play("leiyi_study2", 0),
            this.studyAnim.touchChildren = this.studyAnim.touchEnabled = !1
        },
        i.prototype.addEvents = function() {
            var t = this;
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
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1706741,
                        productID: 245432
                    },
                    e.caller = t,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(245432, i,
                        function() {
                            KTool.doExchange(6795, i,
                            function() {
                                t.animPlay(),
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
            ImageButtonUtil.add(this.btnYijian,
            function() {
                return PetManager.isDefaultPet(2887) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245431, 1,
                    function() {
                        KTool.doExchange(6794, 1,
                        function() {
                            Alert.show("雷神·雷伊学会了<font color='#ff0000'>圣天雷鸣斩</font>，可以前往背包查看",
                            function() {
                                t.service.showPetBag()
                            }),
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnXuexi,
            function() {
                return StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击特训关卡2界面-【学习技能】"),
                PetManager.isDefaultPet(2887) ? void KTool.doExchange(6793, 1,
                function() {
                    Alert.show("雷神·雷伊学会了<font color='#ff0000'>圣天雷鸣斩</font>，可以前往背包查看",
                    function() {
                        t.service.showPetBag()
                    }),
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                }) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return PetManager.isDefaultPet(2887) ? void FightManager.fightNoMapBoss(5318) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                function() {
                    t.service.showPetBag()
                })
            },
            this)
        },
        i.prototype.animPlay = function() {
            var t = this;
            if (this.notEnough) {
                var e = ItemManager.getNumByID(1706741);
                e >= 24 && this.studyAnim.play("leiyi_study1", 1, 1, {
                    playEnd: function() {
                        t.studyAnim.play("leiyi_study2", 0)
                    }
                })
            }
        },
        i.prototype.update = function() {
            var e = ItemManager.getNumByID(1706741);
            this.txt_itemNum.text = e + "/24",
            this.notEnough = 24 > e;
            var i = 1 == this.service.getValue(t.GodOfThunderRayConst.bitbuf_skill2),
            n = 1 == this.service.getValue(t.GodOfThunderRayConst.daily_bitbuf_skill2);
            this.btnTiaozhan.visible = !n,
            this.btnXuexi.visible = this.studyAnim.visible = e >= 24 && !i,
            this.btnYijian.visible = 24 > e && !i,
            this.bar_value.value = e,
            this.txt_hasFi.visible = n,
            i && (EventManager.removeAll(this), this.service.openPanel(t.GodOfThunderRayConst.PANEL5))
        },
        i
    } (BasicPanel);
    t.GodOfThunderRayPanel7 = e,
    __reflect(e.prototype, "godOfThunderRay.GodOfThunderRayPanel7")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.drawing = !1,
            i.leftTime = 0,
            i.itemsID = [1, 1706343, 1706344, 1706113, 1706345, 1706345],
            i.skinName = t.RoulettepopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            this.addEvent();
            for (var t = 0; 5 >= t; t++) this["Se_" + t].visible = !1,
            this["item" + t].source = ClientConfig.getItemIcon(this.itemsID[t]);
            this.update()
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = function(t) {
                ImageButtonUtil.add(n["item" + t],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: e.itemsID[t]
                    })
                },
                n)
            },
            n = this, a = 0; 5 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnaddTime,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击命运之轮界面- 【购买次数】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245174, 1,
                    function() {
                        KTool.doExchange(6422, 1,
                        function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {
                StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击命运之轮界面- 【揭示命运】"),
                e.drawing = !0,
                SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [12, 0],
                function(t) {
                    var i = t.data;
                    e.animPlay(i.readUnsignedInt())
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                e.drawing && (AwardManager.resume(), EventManager.dispatchEventWith("updateRayItems"), e.update())
            },
            this)
        },
        i.prototype.animPlay = function(t) {
            var e = this;
            this.touchChildren = !1;
            var i = {};
            i.i = 1,
            AwardManager.pause(),
            egret.Tween.get(i, {
                onChange: function() {
                    for (var t = Math.floor(i.i) % 6, n = 0; 5 >= n; n++) e["Se_" + n].visible = !1;
                    e["Se_" + t].visible = !0
                }
            }).to({
                i: 30 + t
            },
            3e3, egret.Ease.quadInOut).call(function() {
                e.touchChildren = !0,
                AwardManager.resume(),
                EventManager.dispatchEventWith("updateRayItems"),
                e.update()
            })
        },
        i.prototype.update = function() {
            var t = this;
            this.drawing = !1,
            KTool.getMultiValue([12319],
            function(e) {
                var i = MainManager.actorInfo.isVip ? 3 : 2;
                t.leftTime = i - e[0],
                t.txt_drawTime.text = t.leftTime + "/" + i,
                t.btnaddTime.visible = 0 == t.leftTime,
                t.btnDraw.visible = 0 != t.leftTime
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        i
    } (PopView);
    t.DrawPop = e,
    __reflect(e.prototype, "godOfThunderRay.DrawPop")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.chooseIndex = 0,
            i.leftTime = 0,
            i.hasChargeArr = [],
            i.skinName = t.Panel4popSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            this.addEvent();
            for (var t = 1; 5 >= t; t++) this["Sele" + t].visible = !1;
            this.update()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnZhi,
            function() {
                return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！") : 0 == e.chooseIndex ? void BubblerManager.getInstance().showText("请先点击组件选择要充能的部分！") : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245169, 1,
                    function() {
                        SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [9, e.chooseIndex],
                        function() {
                            e.hide(),
                            FightManager.fightNoMapBoss(5063)
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(245168, 1,
                    function() {
                        KTool.doExchange(6399, 1,
                        function() {
                            e.update()
                        })
                    })
                },
                e)
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["trial" + t],
                function() {
                    if (1 == e.hasChargeArr[t - 1]) return void BubblerManager.getInstance().showText("该组件已充能，无需再次挑战");
                    for (var i = 1; 5 >= i; i++) e["Sele" + i].visible = t == i;
                    e.chooseIndex = t
                },
                n)
            },
            n = this, a = 1; 5 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([2452, 2459, 2460, 2461, 2462, 2463, 12318],
            function(e) {
                var i = e[0],
                n = 0;
                t.hasChargeArr = [];
                for (var a = 1; 5 >= a; a++) {
                    var r = e[a];
                    t["bar_state" + a].value = r,
                    t.hasChargeArr.push(KTool.getBit(i, a)),
                    1 == KTool.getBit(i, a) ? (n++, t["img_hasCharge" + a].visible = !0, t["img_noCharge" + a].visible = !1) : (5 == r ? t["bar_state" + a].thumb.source = "gotr_panel4_jdyxs_png": t["bar_state" + a].thumb.source = "gotr_panel4_jdwxs_png", t["img_noCharge" + a].visible = !0, t["img_hasCharge" + a].visible = !1),
                    t["txt_trail" + a].text = "已消散" + r + "次"
                }
                var o = MainManager.actorInfo.isVip ? 5 : 3;
                t.leftTime = o - e[6],
                t.btnZhi.visible = 0 != t.leftTime,
                t.btnAdd.visible = 0 == t.leftTime,
                t.txt_leftTime.text = t.leftTime + "/" + o
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.Panel4Pop = e,
    __reflect(e.prototype, "godOfThunderRay.Panel4Pop")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SignpopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            this.addEvent(),
            this.update()
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = function(i) {
                ImageButtonUtil.add(n["sign" + i],
                function() {
                    StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击怒雷之魂界面-任意【可签到面板】"),
                    SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [13, i],
                    function() {
                        EventManager.dispatchEventWith("updateRayItems"),
                        e.update()
                    })
                },
                n)
            },
            n = this, a = 1; 7 >= a; a++) i(a);
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([20380],
            function(e) {
                var i = SystemTimerManager.sysBJDate.getDay();
                0 == i && (i = 7);
                for (var n = 1; 7 >= n; n++) {
                    var a = 0 == KTool.getBit(e[0], i);
                    n == i ? (t["sign" + n].touchChildren = t["sign" + n].touchEnabled = a, t["se" + n].visible = a, t["normal" + n].visible = !a, t["hasGet" + n].visible = !a, t["txt_a" + n].textColor = a ? 16775919 : 16762974) : (t["sign" + n].touchChildren = t["sign" + n].touchEnabled = !1, t["se" + n].visible = !1, t["normal" + n].visible = !0, t["hasGet" + n].visible = 1 == KTool.getBit(e[0], n), t["txt_a" + n].textColor = 16762974)
                }
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.SignPop = e,
    __reflect(e.prototype, "godOfThunderRay.SignPop")
} (godOfThunderRay || (godOfThunderRay = {}));
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
godOfThunderRay; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.proId = [245171, 245173, 245172],
            i.skinName = t.UppopSkin,
            i
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            this.addEvent(),
            this.update()
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = [15, 20, 25], n = function(n) {
                ImageButtonUtil.add(a["btnGoumai_" + n],
                function() {
                    return StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击能力提升界面-任意【购买】"),
                    PetManager.isDefaultPet(2887) ? void PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(e.proId[n - 1], 1,
                        function() {
                            SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [11, n],
                            function(t) {
                                if (1 != n) {
                                    var i = 2 == n ? "雷神·雷伊获得了第五技能，可以前往背包查看": "雷神·雷伊获得了专属特性，可以前往背包查看";
                                    Alert.show(i,
                                    function() {
                                        e.hide(),
                                        ModuleManager.showModuleByID(10)
                                    })
                                }
                                e.update()
                            })
                        })
                    },
                    e) : void Alarm.show("请将雷神·雷伊放到背包首发位置",
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    })
                },
                a),
                ImageButtonUtil.add(a["btnDuihuan_" + n],
                function() {
                    if (StatLogger.log("20230526版本系统功能", "雷神·雷伊搬迁", "点击能力提升界面-任意【兑换】"), !PetManager.isDefaultPet(2887)) return void Alarm.show("请将雷神·雷伊放到背包首发位置",
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    });
                    var a = ItemManager.getNumByID(1706345);
                    if (a < i[n - 1]) {
                        var r = "<font color='#ff0000'>雷神之魂</font>数量不足，参与<font color='#ff0000'>命运之轮签到</font>有概率获得";
                        return void BubblerManager.getInstance().showText(r, !0)
                    }
                    SocketConnection.sendByQueue(t.GodOfThunderRayConst.CMD, [10, n],
                    function(t) {
                        if (1 != n) {
                            var i = 2 == n ? "雷神·雷伊获得了第五技能，可以前往背包查看": "雷神·雷伊获得了专属特性，可以前往背包查看";
                            Alert.show(i,
                            function() {
                                e.hide(),
                                ModuleManager.showModuleByID(10)
                            })
                        }
                        e.update()
                    })
                },
                a)
            },
            a = this, r = 1; 3 >= r; r++) n(r);
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                e.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1706345,
                        productID: 245170
                    },
                    t.caller = e,
                    t.callBack = function(t, i) {
                        KTool.buyProductByCallback(245170, i,
                        function() {
                            KTool.doExchange(6398, i,
                            function() {
                                e.update()
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 2887, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {
                    id: 17980
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(40458) ? (t = {},
                t.ins = 40458, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = 40458, tipsPop.TipsPop.openItemPop(t))
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([2448],
            function(e) {
                for (var i = 0,
                n = 1; 3 >= n; n++) t["btnDuihuan_" + n].visible = t["btnGoumai_" + n].visible = e[0] == 1 + n,
                t["hasGet" + n].visible = e[0] >= 2 + n,
                t["hasGet" + n].visible && i++;
                t.light_1.visible = e[0] >= 3,
                t.light_2.visible = e[0] >= 4,
                t.dark_1.visible = e[0] < 3,
                t.dark_2.visible = e[0] < 4,
                t.txtCoin1.text = ItemManager.getNumByID(1706345) + "",
                UserInfoManager.getDiamond(function(e) {
                    t.txtCoin2.text = core.gameUtil.ConvertToTenThousand(e)
                },
                t),
                3 == i && (t.hide(), EventManager.dispatchEventWith("buyAllUps"))
            })
        },
        i
    } (PopView);
    t.UpPop = e,
    __reflect(e.prototype, "godOfThunderRay.UpPop")
} (godOfThunderRay || (godOfThunderRay = {})),
window.godOfThunderRay = window.godOfThunderRay || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.godOfThunderRay.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txt_itemNum1", "btnGet_1", "hasPass1", "item1", "txt_itemNum2", "btnGet_2", "hasPass2", "item2", "txt_itemNum3", "btnGet_3", "hasPass3", "item3", "right1", "btnJinhua", "hasPass", "right2", "btnOnekey", "btnUp", "hasUp", "btnTexun", "hasTexun", "btnInfo", "btnCollect", "btnGetPet", "hasGet", "btnRoll"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_mainpanel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 8,
        t.width = 1110,
        t.y = 14,
        t.elementsContent = [this.right1_i(), this.right2_i(), this.btnOnekey_i(), this.btnUp_i(), this.hasUp_i(), this.btnTexun_i(), this.hasTexun_i(), this.btnInfo_i(), this.btnCollect_i(), this._Image10_i(), this.btnGetPet_i(), this.hasGet_i(), this.btnRoll_i()],
        t
    },
    i.right1_i = function() {
        var t = new eui.Group;
        return this.right1 = t,
        t.visible = !0,
        t.x = 686,
        t.y = 128,
        t.elementsContent = [this.item1_i(), this.item2_i(), this.item3_i()],
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_itemNum1_i(), this.btnGet_1_i(), this._Image2_i(), this.hasPass1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_daojude_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "怒雷之魂",
        t.textColor = 16382071,
        t.x = 106,
        t.y = 33,
        t
    },
    i.txt_itemNum1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "25/26",
        t.textColor = 16776939,
        t.x = 211,
        t.y = 34,
        t
    },
    i.btnGet_1_i = function() {
        var t = new eui.Image;
        return this.btnGet_1 = t,
        t.source = "gotr_mainpanel_btnget_png",
        t.x = 139,
        t.y = 62,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_1706343_png",
        t.x = 13,
        t.y = 7,
        t
    },
    i.hasPass1_i = function() {
        var t = new eui.Image;
        return this.hasPass1 = t,
        t.source = "gotr_mainpanel_yijiji_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = 0,
        t.y = 134,
        t.elementsContent = [this._Image3_i(), this._Label2_i(), this.txt_itemNum2_i(), this.btnGet_2_i(), this._Image4_i(), this._Image5_i(), this.hasPass2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_daojude_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "惊雷之魂",
        t.textColor = 16382071,
        t.x = 106,
        t.y = 33,
        t
    },
    i.txt_itemNum2_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "25/26",
        t.textColor = 16776939,
        t.x = 211,
        t.y = 34,
        t
    },
    i.btnGet_2_i = function() {
        var t = new eui.Image;
        return this.btnGet_2 = t,
        t.source = "gotr_mainpanel_btnget_png",
        t.x = 139,
        t.y = 62,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_1706344_png",
        t.x = 13,
        t.y = 7,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_jlfb_png",
        t.x = 40,
        t.y = 110,
        t
    },
    i.hasPass2_i = function() {
        var t = new eui.Image;
        return this.hasPass2 = t,
        t.source = "gotr_mainpanel_yijiji_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 0,
        t.y = 267,
        t.elementsContent = [this._Image6_i(), this._Label3_i(), this.txt_itemNum3_i(), this.btnGet_3_i(), this._Image7_i(), this._Image8_i(), this.hasPass3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_daojude_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "狂雷之魂",
        t.textColor = 16382071,
        t.x = 106,
        t.y = 33,
        t
    },
    i.txt_itemNum3_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "25/26",
        t.textColor = 16776939,
        t.x = 211,
        t.y = 34,
        t
    },
    i.btnGet_3_i = function() {
        var t = new eui.Image;
        return this.btnGet_3 = t,
        t.source = "gotr_mainpanel_btnget_png",
        t.x = 139,
        t.y = 62,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_1706113_png",
        t.x = 12,
        t.y = 7,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_jlfb_png",
        t.x = 40,
        t.y = 110,
        t
    },
    i.hasPass3_i = function() {
        var t = new eui.Image;
        return this.hasPass3 = t,
        t.source = "gotr_mainpanel_yijiji_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.right2_i = function() {
        var t = new eui.Group;
        return this.right2 = t,
        t.visible = !1,
        t.x = 667,
        t.y = 140,
        t.elementsContent = [this._Image9_i(), this.btnJinhua_i(), this.hasPass_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_de_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnJinhua_i = function() {
        var t = new eui.Image;
        return this.btnJinhua = t,
        t.source = "gotr_mainpanel_btnjinhua_png",
        t.visible = !0,
        t.x = 120,
        t.y = 126,
        t
    },
    i.hasPass_i = function() {
        var t = new eui.Image;
        return this.hasPass = t,
        t.source = "gotr_mainpanel_yijihuo_png",
        t.x = 137,
        t.y = 228,
        t
    },
    i.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "gotr_mainpanel_btnzhizun_png",
        t.visible = !0,
        t.x = 1004,
        t.y = 528,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "gotr_mainpanel_btntisheng_png",
        t.visible = !0,
        t.x = 1004,
        t.y = 528,
        t
    },
    i.hasUp_i = function() {
        var t = new eui.Image;
        return this.hasUp = t,
        t.source = "gotr_mainpanel_ye_png",
        t.visible = !0,
        t.x = 1004,
        t.y = 560,
        t
    },
    i.btnTexun_i = function() {
        var t = new eui.Image;
        return this.btnTexun = t,
        t.source = "gotr_mainpanel_btntexun_png",
        t.visible = !0,
        t.x = 903,
        t.y = 528,
        t
    },
    i.hasTexun_i = function() {
        var t = new eui.Image;
        return this.hasTexun = t,
        t.source = "gotr_mainpanel_ye_png",
        t.visible = !0,
        t.x = 903,
        t.y = 560,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "gotr_mainpanel_btninfo_png",
        t.x = 0,
        t.y = 529,
        t
    },
    i.btnCollect_i = function() {
        var t = new eui.Image;
        return this.btnCollect = t,
        t.source = "gotr_mainpanel_btnsc_png",
        t.visible = !0,
        t.x = 0,
        t.y = 460,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_mainpanel_title_png",
        t.x = 61,
        t.y = 320,
        t
    },
    i.btnGetPet_i = function() {
        var t = new eui.Image;
        return this.btnGetPet = t,
        t.source = "gotr_mainpanel_btnlingqu_png",
        t.x = 151,
        t.y = 516,
        t
    },
    i.hasGet_i = function() {
        var t = new eui.Image;
        return this.hasGet = t,
        t.source = "gotr_mainpanel_yihuode_png",
        t.x = 201,
        t.y = 287,
        t
    },
    i.btnRoll_i = function() {
        var t = new eui.Image;
        return this.btnRoll = t,
        t.source = "gotr_mainpanel_btnroll_png",
        t.x = 1005,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.godOfThunderRay.Panel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet3", "pet5", "pet4", "pet2", "pet6", "pet7", "pet8", "pet9", "pet1", "btnJibai", "btnTiaozhan", "txt_petName", "pets", "btnLingqu", "icon1", "txt_icon1", "grpRe1", "icon2", "grpRe2", "reward", "de", "jiantou_light_1", "jiantou_light_2", "jiantou_light_3", "jiantou_light_7", "jiantou_light_8", "jiantou_light_9", "jiantou_light_4", "jiantou_light_5", "jiantou_light_6", "jiantou_lightdown__2", "jiantou_lightdown__1", "bars", "notItem3", "get3", "item3", "pass9", "not9", "pets9", "pass8", "not8", "pets8", "pass7", "not7", "pets7", "notItem2", "get2", "item2", "pass6", "not6", "pets6", "pass5", "not5", "pets5", "pass4", "not4", "pets4", "notItem1", "get1", "item1", "pass3", "not3", "pets3", "pass2", "not2", "pets2", "pass1", "not1", "pets1", "btnBag", "btnCure", "txtCoin2", "btnadd", "items"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 28.5,
        t.y = 7,
        t.elementsContent = [this._Image1_i(), this.pets_i(), this.reward_i(), this.bars_i(), this._Group1_i(), this._Label6_i(), this.btnBag_i(), this.btnCure_i(), this.items_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_rightbg_png",
        t.x = 741,
        t.y = 119,
        t
    },
    i.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.visible = !0,
        t.x = 630,
        t.y = 88,
        t.elementsContent = [this.pet3_i(), this.pet5_i(), this.pet4_i(), this.pet2_i(), this.pet6_i(), this.pet7_i(), this.pet8_i(), this.pet9_i(), this.pet1_i(), this.btnJibai_i(), this.btnTiaozhan_i(), this._Image2_i(), this.txt_petName_i()],
        t
    },
    i.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "gotr_panel2_1697_png",
        t.x = 91,
        t.y = 113,
        t
    },
    i.pet5_i = function() {
        var t = new eui.Image;
        return this.pet5 = t,
        t.source = "gotr_panel2_2070_png",
        t.x = 151,
        t.y = 107,
        t
    },
    i.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "gotr_panel2_2336_png",
        t.x = 77,
        t.y = 49,
        t
    },
    i.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "gotr_panel2_2360_png",
        t.x = 209,
        t.y = 231,
        t
    },
    i.pet6_i = function() {
        var t = new eui.Image;
        return this.pet6 = t,
        t.source = "gotr_panel2_2431_png",
        t.x = 51,
        t.y = 49,
        t
    },
    i.pet7_i = function() {
        var t = new eui.Image;
        return this.pet7 = t,
        t.source = "gotr_panel2_2849_png",
        t.x = 35,
        t.y = 41,
        t
    },
    i.pet8_i = function() {
        var t = new eui.Image;
        return this.pet8 = t,
        t.source = "gotr_panel2_2857_png",
        t.x = 0,
        t.y = 12,
        t
    },
    i.pet9_i = function() {
        var t = new eui.Image;
        return this.pet9 = t,
        t.source = "gotr_panel2_2862_png",
        t.x = 38,
        t.y = 87,
        t
    },
    i.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "gotr_panel2_1730_png",
        t.x = 117,
        t.y = 115,
        t
    },
    i.btnJibai_i = function() {
        var t = new eui.Image;
        return this.btnJibai = t,
        t.source = "gotr_panel2_btnjibai_png",
        t.x = 106,
        t.y = 422,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "gotr_panel2_btntiaozhan_png",
        t.x = 253,
        t.y = 422,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_titlekuang_png",
        t.x = 106,
        t.y = 0,
        t
    },
    i.txt_petName_i = function() {
        var t = new eui.Label;
        return this.txt_petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "精灵名称",
        t.textAlign = "center",
        t.textColor = 16574827,
        t.width = 260,
        t.x = 120,
        t.y = 16,
        t
    },
    i.reward_i = function() {
        var t = new eui.Group;
        return this.reward = t,
        t.x = 809,
        t.y = 169,
        t.elementsContent = [this.btnLingqu_i(), this.grpRe1_i(), this.grpRe2_i(), this._Image5_i()],
        t
    },
    i.btnLingqu_i = function() {
        var t = new eui.Image;
        return this.btnLingqu = t,
        t.source = "gotr_panel2_btnlingqu_png",
        t.x = 0,
        t.y = 341,
        t
    },
    i.grpRe1_i = function() {
        var t = new eui.Group;
        return this.grpRe1 = t,
        t.x = 17,
        t.y = 53,
        t.elementsContent = [this._Image3_i(), this.icon1_i(), this.txt_icon1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 75,
        t.source = "",
        t.width = 75,
        t.x = 15,
        t.y = 15,
        t
    },
    i.txt_icon1_i = function() {
        var t = new eui.Label;
        return this.txt_icon1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x2",
        t.textColor = 16777215,
        t.x = 80,
        t.y = 80,
        t
    },
    i.grpRe2_i = function() {
        var t = new eui.Group;
        return this.grpRe2 = t,
        t.x = 17,
        t.y = 171,
        t.elementsContent = [this._Image4_i(), this.icon2_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 75,
        t.source = "",
        t.width = 75,
        t.x = 15,
        t.y = 15,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x100000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 92,
        t.x = 10,
        t.y = 80,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_zsjl_png",
        t.x = 21,
        t.y = 0,
        t
    },
    i.bars_i = function() {
        var t = new eui.Group;
        return this.bars = t,
        t.visible = !0,
        t.x = 137,
        t.y = 138,
        t.elementsContent = [this.de_i(), this.jiantou_light_1_i(), this.jiantou_light_2_i(), this.jiantou_light_3_i(), this.jiantou_light_7_i(), this.jiantou_light_8_i(), this.jiantou_light_9_i(), this.jiantou_light_4_i(), this.jiantou_light_5_i(), this.jiantou_light_6_i(), this.jiantou_lightdown__2_i(), this.jiantou_lightdown__1_i()],
        t
    },
    i.de_i = function() {
        var t = new eui.Image;
        return this.de = t,
        t.source = "gotr_panel2_de_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.jiantou_light_1_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_1 = t,
        t.anchorOffsetX = 16,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.visible = !0,
        t.x = 91,
        t.y = 15,
        t
    },
    i.jiantou_light_2_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_2 = t,
        t.anchorOffsetX = 16.5,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.x = 244,
        t.y = 15.147,
        t
    },
    i.jiantou_light_3_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_3 = t,
        t.anchorOffsetX = 16.5,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.x = 397,
        t.y = 15,
        t
    },
    i.jiantou_light_7_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_7 = t,
        t.anchorOffsetX = 16.5,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.visible = !0,
        t.x = 91,
        t.y = 353,
        t
    },
    i.jiantou_light_8_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_8 = t,
        t.anchorOffsetX = 16.5,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.x = 244,
        t.y = 353,
        t
    },
    i.jiantou_light_9_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_9 = t,
        t.anchorOffsetX = 16.5,
        t.anchorOffsetY = 15,
        t.scaleX = -1,
        t.source = "gotr_panel2_jiantou_light_png",
        t.x = 397.5,
        t.y = 353,
        t
    },
    i.jiantou_light_4_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_4 = t,
        t.source = "gotr_panel2_jiantou_light_png",
        t.x = 381,
        t.y = 169,
        t
    },
    i.jiantou_light_5_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_5 = t,
        t.source = "gotr_panel2_jiantou_light_png",
        t.visible = !0,
        t.x = 228,
        t.y = 169,
        t
    },
    i.jiantou_light_6_i = function() {
        var t = new eui.Image;
        return this.jiantou_light_6 = t,
        t.source = "gotr_panel2_jiantou_light_png",
        t.visible = !0,
        t.x = 75,
        t.y = 169,
        t
    },
    i.jiantou_lightdown__2_i = function() {
        var t = new eui.Image;
        return this.jiantou_lightdown__2 = t,
        t.source = "gotr_panel2_jiantou_light__png",
        t.visible = !0,
        t.x = 0,
        t.y = 252,
        t
    },
    i.jiantou_lightdown__1_i = function() {
        var t = new eui.Image;
        return this.jiantou_lightdown__1 = t,
        t.source = "gotr_panel2_jiantou_light__png",
        t.visible = !0,
        t.x = 459,
        t.y = 83,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 94,
        t.y = 85,
        t.elementsContent = [this.item3_i(), this.pets9_i(), this.pets8_i(), this.pets7_i(), this.item2_i(), this.pets6_i(), this.pets5_i(), this.pets4_i(), this.item1_i(), this.pets3_i(), this.pets2_i(), this.pets1_i()],
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 459,
        t.y = 338,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Label2_i(), this._Label3_i(), this.notItem3_i(), this.get3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_daojubg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.source = "gotr_panel2_1706344_png",
        t.x = 16,
        t.y = 25,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_1_png",
        t.x = 51,
        t.y = 72,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x100000",
        t.textColor = 16777215,
        t.x = 28,
        t.y = 87,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "x6",
        t.textColor = 16777215,
        t.x = 52,
        t.y = 43,
        t
    },
    i.notItem3_i = function() {
        var t = new eui.Image;
        return this.notItem3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.get3_i = function() {
        var t = new eui.Image;
        return this.get3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yihuode_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets9_i = function() {
        var t = new eui.Group;
        return this.pets9 = t,
        t.x = 310,
        t.y = 352,
        t.elementsContent = [this._Image9_i(), this._Image10_i(), this.pass9_i(), this.not9_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2862_kb_png",
        t.x = 5,
        t.y = 5,
        t
    },
    i.pass9_i = function() {
        var t = new eui.Image;
        return this.pass9 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not9_i = function() {
        var t = new eui.Image;
        return this.not9 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets8_i = function() {
        var t = new eui.Group;
        return this.pets8 = t,
        t.x = 157,
        t.y = 352,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this.pass8_i(), this.not8_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2857_kb_png",
        t.x = 5,
        t.y = 5,
        t
    },
    i.pass8_i = function() {
        var t = new eui.Image;
        return this.pass8 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not8_i = function() {
        var t = new eui.Image;
        return this.not8 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets7_i = function() {
        var t = new eui.Group;
        return this.pets7 = t,
        t.x = 4,
        t.y = 352,
        t.elementsContent = [this._Image13_i(), this._Image14_i(), this.pass7_i(), this.not7_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2849_kb_png",
        t.x = 5,
        t.y = 5,
        t
    },
    i.pass7_i = function() {
        var t = new eui.Image;
        return this.pass7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not7_i = function() {
        var t = new eui.Image;
        return this.not7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = 0,
        t.y = 169,
        t.elementsContent = [this._Image15_i(), this._Image16_i(), this._Label4_i(), this.notItem2_i(), this.get2_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_daojubg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.source = "gotr_panel2_1706344_png",
        t.x = 25,
        t.y = 38,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "x4",
        t.textColor = 16777215,
        t.x = 66,
        t.y = 68,
        t
    },
    i.notItem2_i = function() {
        var t = new eui.Image;
        return this.notItem2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.get2_i = function() {
        var t = new eui.Image;
        return this.get2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yihuode_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets6_i = function() {
        var t = new eui.Group;
        return this.pets6 = t,
        t.x = 157,
        t.y = 183,
        t.elementsContent = [this._Image17_i(), this._Image18_i(), this.pass6_i(), this.not6_i()],
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2431_kb_png",
        t.x = 11,
        t.y = 5,
        t
    },
    i.pass6_i = function() {
        var t = new eui.Image;
        return this.pass6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.visible = !0,
        t.x = 4,
        t.y = 4,
        t
    },
    i.not6_i = function() {
        var t = new eui.Image;
        return this.not6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets5_i = function() {
        var t = new eui.Group;
        return this.pets5 = t,
        t.x = 310,
        t.y = 183,
        t.elementsContent = [this._Image19_i(), this._Image20_i(), this.pass5_i(), this.not5_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2070_kb_png",
        t.x = 5,
        t.y = 5,
        t
    },
    i.pass5_i = function() {
        var t = new eui.Image;
        return this.pass5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not5_i = function() {
        var t = new eui.Image;
        return this.not5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets4_i = function() {
        var t = new eui.Group;
        return this.pets4 = t,
        t.x = 463,
        t.y = 183,
        t.elementsContent = [this._Image21_i(), this._Image22_i(), this.pass4_i(), this.not4_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2336_kb_png",
        t.x = 5,
        t.y = 5,
        t
    },
    i.pass4_i = function() {
        var t = new eui.Image;
        return this.pass4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.visible = !0,
        t.x = 4,
        t.y = 4,
        t
    },
    i.not4_i = function() {
        var t = new eui.Image;
        return this.not4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 459,
        t.y = 0,
        t.elementsContent = [this._Image23_i(), this._Label5_i(), this._Image24_i(), this.notItem1_i(), this.get1_i()],
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_daojubg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "x2",
        t.textColor = 16777215,
        t.x = 69,
        t.y = 70,
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.source = "gotr_panel2_1706344_png",
        t.x = 28,
        t.y = 38,
        t
    },
    i.notItem1_i = function() {
        var t = new eui.Image;
        return this.notItem1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.get1_i = function() {
        var t = new eui.Image;
        return this.get1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yihuode_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets3_i = function() {
        var t = new eui.Group;
        return this.pets3 = t,
        t.x = 310,
        t.y = 14,
        t.elementsContent = [this._Image25_i(), this._Image26_i(), this.pass3_i(), this.not3_i()],
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_1697_kb_png",
        t.visible = !0,
        t.x = 5,
        t.y = 12,
        t
    },
    i.pass3_i = function() {
        var t = new eui.Image;
        return this.pass3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not3_i = function() {
        var t = new eui.Image;
        return this.not3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets2_i = function() {
        var t = new eui.Group;
        return this.pets2 = t,
        t.x = 157,
        t.y = 14,
        t.elementsContent = [this._Image27_i(), this._Image28_i(), this.pass2_i(), this.not2_i()],
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_2360_kb_png",
        t.x = 18,
        t.y = 13,
        t
    },
    i.pass2_i = function() {
        var t = new eui.Image;
        return this.pass2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not2_i = function() {
        var t = new eui.Image;
        return this.not2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.pets1_i = function() {
        var t = new eui.Group;
        return this.pets1 = t,
        t.x = 4,
        t.y = 14,
        t.elementsContent = [this._Image29_i(), this._Image30_i(), this.pass1_i(), this.not1_i()],
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_juxing_5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_1730_kb_png",
        t.x = 9,
        t.y = 10,
        t
    },
    i.pass1_i = function() {
        var t = new eui.Image;
        return this.pass1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_yijibai_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i.not1_i = function() {
        var t = new eui.Image;
        return this.not1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel2_weijihuo_png",
        t.x = 4,
        t.y = 4,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "每个敌人每日只可战胜一次",
        t.textColor = 16774883,
        t.x = 398,
        t.y = 575,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel2_jlbb_png",
        t.x = 0,
        t.y = 433,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel2_jlhf_png",
        t.x = 0,
        t.y = 523,
        t
    },
    i.items_i = function() {
        var t = new eui.Group;
        return this.items = t,
        t.x = 857,
        t.y = 0,
        t.elementsContent = [this._Image31_i(), this._Label7_i(), this._Image32_i(), this.txtCoin2_i(), this.btnadd_i()],
        t
    },
    i._Image31_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_img_di2_png",
        t.x = 0,
        t.y = 7,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "惊雷之魂：",
        t.textColor = 16774299,
        t.x = 47,
        t.y = 9,
        t
    },
    i._Image32_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel2_1706344_png",
        t.x = 19,
        t.y = 0,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "00/80",
        t.textColor = 16774299,
        t.x = 133,
        t.y = 8,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "gotr_panel2_btnadd_png",
        t.x = 190,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.godOfThunderRay.Panel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet2", "pet1", "pet3", "imgNopet", "btnFast", "btnFight", "group_hasDraw", "btnSkip", "txt_overTime", "group_hasFight", "btnDraw", "txt_leftTime", "group_draw", "img_tom", "selected1", "selected0", "selected2", "txt_winNum", "txt_loseNum", "reward", "noDraw", "petName", "btnRefresh", "txt_leftTime1", "fightInfo", "btnBag", "btnCure", "txtCoin2", "btnadd", "items"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.width = 1100,
        t.y = 7,
        t.elementsContent = [this._Group1_i(), this.group_hasDraw_i(), this.group_hasFight_i(), this.group_draw_i(), this.img_tom_i(), this._Label2_i(), this._Group2_i(), this.fightInfo_i(), this.btnBag_i(), this.btnCure_i(), this.items_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 319,
        t.y = 87,
        t.elementsContent = [this._Image1_i(), this.pet2_i(), this.pet1_i(), this.pet3_i(), this.imgNopet_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_petbg_png",
        t.x = 5,
        t.y = 0,
        t
    },
    i.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "gotr_panel3_70_png",
        t.visible = !1,
        t.x = 147,
        t.y = 84,
        t
    },
    i.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "gotr_panel3_2311_png",
        t.visible = !0,
        t.x = 134,
        t.y = 105,
        t
    },
    i.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "gotr_panel3_2394_png",
        t.visible = !1,
        t.x = 0,
        t.y = 23,
        t
    },
    i.imgNopet_i = function() {
        var t = new eui.Image;
        return this.imgNopet = t,
        t.source = "gotr_panel3_imgnopet_png",
        t.visible = !1,
        t.x = 125,
        t.y = 98,
        t
    },
    i.group_hasDraw_i = function() {
        var t = new eui.Group;
        return this.group_hasDraw = t,
        t.visible = !0,
        t.x = 753,
        t.y = 510,
        t.elementsContent = [this.btnFast_i(), this.btnFight_i()],
        t
    },
    i.btnFast_i = function() {
        var t = new eui.Image;
        return this.btnFast = t,
        t.source = "gotr_panel3_btnjibai_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "gotr_panel3_btntiaozhan_png",
        t.visible = !0,
        t.x = 147,
        t.y = 0,
        t
    },
    i.group_hasFight_i = function() {
        var t = new eui.Group;
        return this.group_hasFight = t,
        t.visible = !0,
        t.x = 774,
        t.y = 510,
        t.elementsContent = [this.btnSkip_i(), this._Label1_i(), this.txt_overTime_i()],
        t
    },
    i.btnSkip_i = function() {
        var t = new eui.Image;
        return this.btnSkip = t,
        t.source = "gotr_panel3_btntiaoguo_png",
        t.visible = !0,
        t.x = 104,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "冷却时间：",
        t.textColor = 16774883,
        t.visible = !0,
        t.x = 0,
        t.y = 4,
        t
    },
    i.txt_overTime_i = function() {
        var t = new eui.Label;
        return this.txt_overTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "99:99",
        t.textColor = 16514896,
        t.visible = !0,
        t.x = 37,
        t.y = 29,
        t
    },
    i.group_draw_i = function() {
        var t = new eui.Group;
        return this.group_draw = t,
        t.visible = !0,
        t.x = 827,
        t.y = 508,
        t.elementsContent = [this.btnDraw_i(), this._Image2_i(), this.txt_leftTime_i()],
        t
    },
    i.btnDraw_i = function() {
        var t = new eui.Image;
        return this.btnDraw = t,
        t.source = "gotr_panel3_btnchouqu_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_juxing_567_png",
        t.x = 98,
        t.y = 0,
        t
    },
    i.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "9/9",
        t.textColor = 16777215,
        t.x = 115,
        t.y = 2,
        t
    },
    i.img_tom_i = function() {
        var t = new eui.Image;
        return this.img_tom = t,
        t.source = "gotr_panel3_mrzl_png",
        t.x = 838,
        t.y = 520,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "每日拥有5次抽取机会，重新抽取同样消耗次数",
        t.textColor = 16774883,
        t.visible = !0,
        t.x = 358,
        t.y = 575,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 55,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this.selected1_i(), this.selected0_i(), this.selected2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_1_png",
        t.x = 126,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_2_png",
        t.x = 36,
        t.y = 141,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_3_png",
        t.x = 126,
        t.y = 322,
        t
    },
    i.selected1_i = function() {
        var t = new eui.Image;
        return this.selected1 = t,
        t.source = "gotr_panel3_selected_png",
        t.visible = !0,
        t.x = 0,
        t.y = 178,
        t
    },
    i.selected0_i = function() {
        var t = new eui.Image;
        return this.selected0 = t,
        t.source = "gotr_panel3_selected_png",
        t.visible = !0,
        t.x = 90,
        t.y = 37,
        t
    },
    i.selected2_i = function() {
        var t = new eui.Image;
        return this.selected2 = t,
        t.source = "gotr_panel3_selected_png",
        t.visible = !0,
        t.x = 90,
        t.y = 359,
        t
    },
    i.fightInfo_i = function() {
        var t = new eui.Group;
        return this.fightInfo = t,
        t.x = 742,
        t.y = 250,
        t.elementsContent = [this._Image6_i(), this.reward_i(), this.noDraw_i(), this.petName_i(), this.btnRefresh_i(), this.txt_leftTime1_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_rightbg_png",
        t.x = 0,
        t.y = 30,
        t
    },
    i.reward_i = function() {
        var t = new eui.Group;
        return this.reward = t,
        t.visible = !0,
        t.x = 18,
        t.y = 92,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this.txt_winNum_i(), this._Image10_i(), this.txt_loseNum_i(), this._Image11_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_line_png",
        t.x = 0,
        t.y = 46,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_zs_jl_png",
        t.x = 51,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_1706113_png",
        t.x = 118,
        t.y = 3,
        t
    },
    i.txt_winNum_i = function() {
        var t = new eui.Label;
        return this.txt_winNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x999",
        t.textColor = 16773317,
        t.x = 153,
        t.y = 13,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_1706113_png",
        t.x = 118,
        t.y = 57,
        t
    },
    i.txt_loseNum_i = function() {
        var t = new eui.Label;
        return this.txt_loseNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "x999",
        t.textColor = 16773317,
        t.x = 153,
        t.y = 69,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_zb_jl_png",
        t.x = 51,
        t.y = 56,
        t
    },
    i.noDraw_i = function() {
        var t = new eui.Image;
        return this.noDraw = t,
        t.source = "gotr_panel3_qcqndds_png",
        t.x = 82,
        t.y = 130,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.size = 22,
        t.text = "精灵名称",
        t.textColor = 16777215,
        t.x = 109,
        t.y = 46,
        t
    },
    i.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.source = "gotr_panel3_btnreflsh_png",
        t.x = 247,
        t.y = -20,
        t
    },
    i.txt_leftTime1_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "(9/9)",
        t.textAlign = "center",
        t.textColor = 16773397,
        t.width = 40,
        t.x = 265,
        t.y = 55,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel3_jlbb_png",
        t.x = 17,
        t.y = 433,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel3_jlhf_png",
        t.x = 17,
        t.y = 523,
        t
    },
    i.items_i = function() {
        var t = new eui.Group;
        return this.items = t,
        t.x = 874,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this._Label3_i(), this._Image13_i(), this.txtCoin2_i(), this.btnadd_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_img_di2_png",
        t.x = 0,
        t.y = 7,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "狂雷之魂：",
        t.textColor = 16774299,
        t.x = 47,
        t.y = 9,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel3_1706113_png",
        t.x = 20,
        t.y = 0,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "00/80",
        t.textColor = 16774299,
        t.x = 133,
        t.y = 10,
        t
    },
    i.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "gotr_panel3_btnadd_png",
        t.x = 190,
        t.y = 8,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.godOfThunderRay.Panel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bar_state5", "txt_trail5", "img_hasCharge5", "img_noCharge5", "trial5", "bar_state4", "txt_trail4", "img_hasCharge4", "img_noCharge4", "trial4", "bar_state3", "txt_trail3", "img_hasCharge3", "img_noCharge3", "trial3", "bar_state2", "txt_trail2", "img_hasCharge2", "img_noCharge2", "trial2", "bar_state1", "jdwxs_5", "jdyxs_5", "txt_trail1", "img_hasCharge1", "img_noCharge1", "trial1", "rightInfo", "btnBag", "btnCure", "btnZhiding", "btnYijian", "btnAdd", "btnTiaozhan", "txt_leftTime"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -42.5,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.rightInfo_i(), this.btnBag_i(), this.btnCure_i(), this._Label1_i(), this.btnZhiding_i(), this.btnYijian_i(), this.btnAdd_i(), this.btnTiaozhan_i(), this._Image20_i(), this.txt_leftTime_i()],
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_2887_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_imgbg_png",
        t.x = 98,
        t.y = 415,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_img_png",
        t.x = 235,
        t.y = 432,
        t
    },
    s.rightInfo_i = function() {
        var t = new eui.Group;
        return this.rightInfo = t,
        t.x = 711,
        t.y = 54,
        t.elementsContent = [this._Image4_i(), this.trial5_i(), this.trial4_i(), this.trial3_i(), this.trial2_i(), this.trial1_i()],
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_rightbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.trial5_i = function() {
        var t = new eui.Group;
        return this.trial5 = t,
        t.x = 62,
        t.y = 352,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this.bar_state5_i(), this._Image7_i(), this.txt_trail5_i(), this.img_hasCharge5_i(), this.img_noCharge5_i()],
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.visible = !0,
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state5_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state5 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = i,
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszj_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail5_i = function() {
        var t = new eui.Label;
        return this.txt_trail5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.visible = !0,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge5_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge5 = t,
        t.source = "gotr_panel4_ycn_png",
        t.visible = !1,
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge5_i = function() {
        var t = new eui.Image;
        return this.img_noCharge5 = t,
        t.source = "gotr_panel4_wcn_png",
        t.visible = !0,
        t.x = 115,
        t.y = 16,
        t
    },
    s.trial4_i = function() {
        var t = new eui.Group;
        return this.trial4 = t,
        t.x = 62,
        t.y = 267,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this.bar_state4_i(), this._Image10_i(), this.txt_trail4_i(), this.img_hasCharge4_i(), this.img_noCharge4_i()],
        t
    },
    s._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state4_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state4 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = n,
        t
    },
    s._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszb_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail4_i = function() {
        var t = new eui.Label;
        return this.txt_trail4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge4_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge4 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge4_i = function() {
        var t = new eui.Image;
        return this.img_noCharge4 = t,
        t.source = "gotr_panel4_wcn_png",
        t.visible = !0,
        t.x = 115,
        t.y = 16,
        t
    },
    s.trial3_i = function() {
        var t = new eui.Group;
        return this.trial3 = t,
        t.x = 62,
        t.y = 181,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this.bar_state3_i(), this._Image13_i(), this.txt_trail3_i(), this.img_hasCharge3_i(), this.img_noCharge3_i()],
        t
    },
    s._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state3_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state3 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = a,
        t
    },
    s._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszq_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail3_i = function() {
        var t = new eui.Label;
        return this.txt_trail3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge3_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge3 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge3_i = function() {
        var t = new eui.Image;
        return this.img_noCharge3 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.trial2_i = function() {
        var t = new eui.Group;
        return this.trial2 = t,
        t.x = 62,
        t.y = 96,
        t.elementsContent = [this._Image14_i(), this._Image15_i(), this.bar_state2_i(), this._Image16_i(), this.txt_trail2_i(), this.img_hasCharge2_i(), this.img_noCharge2_i()],
        t
    },
    s._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state2_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state2 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = r,
        t
    },
    s._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszy_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail2_i = function() {
        var t = new eui.Label;
        return this.txt_trail2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge2_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge2 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge2_i = function() {
        var t = new eui.Image;
        return this.img_noCharge2 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.trial1_i = function() {
        var t = new eui.Group;
        return this.trial1 = t,
        t.x = 62,
        t.y = 10,
        t.elementsContent = [this._Image17_i(), this._Image18_i(), this.bar_state1_i(), this.jdwxs_5_i(), this.jdyxs_5_i(), this._Image19_i(), this.txt_trail1_i(), this.img_hasCharge1_i(), this.img_noCharge1_i()],
        t
    },
    s._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state1_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state1 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = o,
        t
    },
    s.jdwxs_5_i = function() {
        var t = new eui.Image;
        return this.jdwxs_5 = t,
        t.source = "gotr_panel4_jdwxs_png",
        t.visible = !1,
        t.x = 39,
        t.y = 50,
        t
    },
    s.jdyxs_5_i = function() {
        var t = new eui.Image;
        return this.jdyxs_5 = t,
        t.source = "gotr_panel4_jdyxs_png",
        t.visible = !1,
        t.x = 39,
        t.y = 50,
        t
    },
    s._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszz_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail1_i = function() {
        var t = new eui.Label;
        return this.txt_trail1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge1_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge1 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge1_i = function() {
        var t = new eui.Image;
        return this.img_noCharge1 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel4_jlbb_png",
        t.x = 95,
        t.y = 440,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel4_jlhf_png",
        t.x = 95,
        t.y = 530,
        t
    },
    s._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "VIP赛尔每日额外2次免费机会",
        t.textColor = 16774883,
        t.x = 491,
        t.y = 582,
        t
    },
    s.btnZhiding_i = function() {
        var t = new eui.Image;
        return this.btnZhiding = t,
        t.source = "gotr_panel4_btnzhiding_png",
        t.visible = !0,
        t.x = 878,
        t.y = 519,
        t
    },
    s.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "gotr_panel4_btnyijian_png",
        t.visible = !0,
        t.x = 709,
        t.y = 519,
        t
    },
    s.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "gotr_panel4_btnbuy_png",
        t.visible = !0,
        t.x = 1025,
        t.y = 517,
        t
    },
    s.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "gotr_panel4_btntiaozhan_png",
        t.visible = !0,
        t.x = 1025,
        t.y = 519,
        t
    },
    s._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jx_567_kb_png",
        t.x = 1125,
        t.y = 517,
        t
    },
    s.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "9/9",
        t.textColor = 16777215,
        t.x = 1142,
        t.y = 519,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.godOfThunderRay.Panel5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnGo1", "hasGet1", "skill1", "btnWu1", "btnGo2", "hasGet2", "skill2", "btnWu2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -28,
        t.width = 1200,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.skill1_i(), this._Image3_i(), this.btnWu1_i(), this.skill2_i(), this.btnWu2_i(), this._Image5_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel5_2887_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.skill1_i = function() {
        var t = new eui.Group;
        return this.skill1 = t,
        t.x = 705,
        t.y = 187,
        t.elementsContent = [this._Image2_i(), this.btnGo1_i(), this.hasGet1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel5_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGo1_i = function() {
        var t = new eui.Image;
        return this.btnGo1 = t,
        t.source = "gotr_panel5_btnget_png",
        t.x = 303,
        t.y = 99,
        t
    },
    i.hasGet1_i = function() {
        var t = new eui.Image;
        return this.hasGet1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel5_yihuode_png",
        t.x = 10,
        t.y = 5,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.visible = !0,
        t.width = 50,
        t.x = 750,
        t.y = 237,
        t
    },
    i.btnWu1_i = function() {
        var t = new eui.Image;
        return this.btnWu1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel5_dian_png",
        t.visible = !0,
        t.x = 720,
        t.y = 205,
        t
    },
    i.skill2_i = function() {
        var t = new eui.Group;
        return this.skill2 = t,
        t.x = 705,
        t.y = 371,
        t.elementsContent = [this._Image4_i(), this.btnGo2_i(), this.hasGet2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel5_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGo2_i = function() {
        var t = new eui.Image;
        return this.btnGo2 = t,
        t.source = "gotr_panel5_btnget_png",
        t.x = 303,
        t.y = 99,
        t
    },
    i.hasGet2_i = function() {
        var t = new eui.Image;
        return this.hasGet2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel5_yihuode_png",
        t.x = 10,
        t.y = 5,
        t
    },
    i.btnWu2_i = function() {
        var t = new eui.Image;
        return this.btnWu2 = t,
        t.source = "gotr_panel5_dian_png",
        t.x = 720,
        t.y = 385,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel5_title_png",
        t.x = 705,
        t.y = 121,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel6Skin.exml"] = window.godOfThunderRay.Panel6Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "imgpet2", "imgpet3", "imgpet1", "imgpet4", "pets", "mask1", "pass1", "selected1", "pet1", "mask2", "pass2", "selected2", "pet2", "mask3", "pass3", "selected3", "pet3", "mask4", "pass4", "selected4", "pet4", "leftEn", "bar_value", "txt_lose", "btnTiaozhan", "btnYijian", "btnXuexi", "txt_progress", "txt_condition", "txt_petName", "txt_ss", "rightinfo", "light_1", "dark_1", "light_2", "dark_2", "light_3", "dark_3", "grp_content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_content_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel7_progress_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel6_bg_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_content_i = function() {
        var t = new eui.Group;
        return this.grp_content = t,
        t.horizontalCenter = 17,
        t.width = 1100,
        t.y = 86,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i(), this.pets_i(), this.leftEn_i(), this.rightinfo_i(), this.light_1_i(), this.dark_1_i(), this.light_2_i(), this.dark_2_i(), this.light_3_i(), this.dark_3_i()],
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel4_jlbb_png",
        t.x = 0,
        t.y = 354,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel4_jlhf_png",
        t.x = 0,
        t.y = 444,
        t
    },
    n.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.x = 405,
        t.y = 63,
        t.elementsContent = [this.imgpet2_i(), this.imgpet3_i(), this.imgpet1_i(), this.imgpet4_i()],
        t
    },
    n.imgpet2_i = function() {
        var t = new eui.Image;
        return this.imgpet2 = t,
        t.source = "gotr_panel6_2616_png",
        t.visible = !0,
        t.x = 0,
        t.y = 2,
        t
    },
    n.imgpet3_i = function() {
        var t = new eui.Image;
        return this.imgpet3 = t,
        t.source = "gotr_panel6_1277_png",
        t.visible = !1,
        t.x = 33,
        t.y = 114,
        t
    },
    n.imgpet1_i = function() {
        var t = new eui.Image;
        return this.imgpet1 = t,
        t.source = "gotr_panel6_1298_png",
        t.visible = !1,
        t.x = 57,
        t.y = 0,
        t
    },
    n.imgpet4_i = function() {
        var t = new eui.Image;
        return this.imgpet4 = t,
        t.source = "gotr_panel6_1361_png",
        t.visible = !1,
        t.x = 39,
        t.y = 16,
        t
    },
    n.leftEn_i = function() {
        var t = new eui.Group;
        return this.leftEn = t,
        t.x = 80,
        t.y = 0,
        t.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i()],
        t
    },
    n.pet1_i = function() {
        var t = new eui.Group;
        return this.pet1 = t,
        t.x = 9,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this.mask1_i(), this.pass1_i(), this.selected1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_pet1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "里奥杰斯",
        t.textColor = 16772288,
        t.x = 16,
        t.y = 12,
        t
    },
    n.mask1_i = function() {
        var t = new eui.Image;
        return this.mask1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_mask_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.pass1_i = function() {
        var t = new eui.Image;
        return this.pass1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_yijibai_png",
        t.visible = !0,
        t.x = 98,
        t.y = 37,
        t
    },
    n.selected1_i = function() {
        var t = new eui.Image;
        return this.selected1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_selected_png",
        t.x = -9,
        t.y = -9,
        t
    },
    n.pet2_i = function() {
        var t = new eui.Group;
        return this.pet2 = t,
        t.x = 9,
        t.y = 127,
        t.elementsContent = [this._Image2_i(), this._Label2_i(), this.mask2_i(), this.pass2_i(), this.selected2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_pet2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "提亚戈斯",
        t.textColor = 16772288,
        t.x = 16,
        t.y = 12,
        t
    },
    n.mask2_i = function() {
        var t = new eui.Image;
        return this.mask2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_mask_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.pass2_i = function() {
        var t = new eui.Image;
        return this.pass2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_yijibai_png",
        t.x = 98,
        t.y = 37,
        t
    },
    n.selected2_i = function() {
        var t = new eui.Image;
        return this.selected2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_selected_png",
        t.x = -9,
        t.y = -9,
        t
    },
    n.pet3_i = function() {
        var t = new eui.Group;
        return this.pet3 = t,
        t.x = 9,
        t.y = 253,
        t.elementsContent = [this._Image3_i(), this._Label3_i(), this.mask3_i(), this.pass3_i(), this.selected3_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_pet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "雷纳尔多",
        t.textColor = 16772288,
        t.x = 16,
        t.y = 12,
        t
    },
    n.mask3_i = function() {
        var t = new eui.Image;
        return this.mask3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_mask_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.pass3_i = function() {
        var t = new eui.Image;
        return this.pass3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_yijibai_png",
        t.x = 98,
        t.y = 37,
        t
    },
    n.selected3_i = function() {
        var t = new eui.Image;
        return this.selected3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_selected_png",
        t.x = -9,
        t.y = -9,
        t
    },
    n.pet4_i = function() {
        var t = new eui.Group;
        return this.pet4 = t,
        t.x = 9,
        t.y = 380,
        t.elementsContent = [this._Image4_i(), this._Label4_i(), this.mask4_i(), this.pass4_i(), this.selected4_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_pet4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "阿克妮丝",
        t.textColor = 16772288,
        t.x = 16,
        t.y = 12,
        t
    },
    n.mask4_i = function() {
        var t = new eui.Image;
        return this.mask4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_mask_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.pass4_i = function() {
        var t = new eui.Image;
        return this.pass4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_yijibai_png",
        t.x = 98,
        t.y = 37,
        t
    },
    n.selected4_i = function() {
        var t = new eui.Image;
        return this.selected4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel6_selected_png",
        t.x = -9,
        t.y = -9,
        t
    },
    n.rightinfo_i = function() {
        var t = new eui.Group;
        return this.rightinfo = t,
        t.x = 748,
        t.y = 2,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this._Label5_i(), this._Image7_i(), this.bar_value_i(), this.txt_lose_i(), this.btnTiaozhan_i(), this.btnYijian_i(), this.btnXuexi_i(), this.txt_progress_i(), this.txt_condition_i(), this.txt_petName_i(), this.txt_ss_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_rightbg_png",
        t.x = 12,
        t.y = 0,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_line_png",
        t.x = 29,
        t.y = 227,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "依次战胜4个对手即可学习新技能！",
        t.textColor = 16774883,
        t.x = 40,
        t.y = 24,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel6_progress_bg_png",
        t.x = 21,
        t.y = 109,
        t
    },
    n.bar_value_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_value = t,
        t.maximum = 4,
        t.value = 0,
        t.width = 281,
        t.x = 32,
        t.y = 114,
        t.skinName = i,
        t
    },
    n.txt_lose_i = function() {
        var t = new eui.Label;
        return this.txt_lose = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "今日已挑战失败\n请明日再尝试",
        t.textAlign = "center",
        t.textColor = 8868906,
        t.x = 102,
        t.y = 386,
        t
    },
    n.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "gotr_panel6_btntiaozhan_png",
        t.x = 105,
        t.y = 382,
        t
    },
    n.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "gotr_panel6_btnyijian_png",
        t.x = 94,
        t.y = 153,
        t
    },
    n.btnXuexi_i = function() {
        var t = new eui.Image;
        return this.btnXuexi = t,
        t.source = "gotr_panel7_btnxuexi_png",
        t.visible = !0,
        t.x = 94,
        t.y = 153,
        t
    },
    n.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "已战胜：0/4",
        t.textColor = 16514896,
        t.x = 40,
        t.y = 79,
        t
    },
    n.txt_condition_i = function() {
        var t = new eui.Label;
        return this.txt_condition = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "击败条件几百条件",
        t.textAlign = "center",
        t.textColor = 14265457,
        t.width = 300,
        t.x = 22,
        t.y = 316,
        t
    },
    n.txt_petName_i = function() {
        var t = new eui.Label;
        return this.txt_petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "击败条件",
        t.textColor = 16514896,
        t.x = 40,
        t.y = 263,
        t
    },
    n.txt_ss_i = function() {
        var t = new eui.Label;
        return this.txt_ss = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "仅能使用雷神·雷伊首发",
        t.textColor = 8868906,
        t.x = 87,
        t.y = 430,
        t
    },
    n.light_1_i = function() {
        var t = new eui.Image;
        return this.light_1 = t,
        t.source = "gotr_panel6_light_png",
        t.x = 187,
        t.y = 92,
        t
    },
    n.dark_1_i = function() {
        var t = new eui.Image;
        return this.dark_1 = t,
        t.source = "gotr_panel6_dark_png",
        t.visible = !0,
        t.x = 192,
        t.y = 98,
        t
    },
    n.light_2_i = function() {
        var t = new eui.Image;
        return this.light_2 = t,
        t.source = "gotr_panel6_light_png",
        t.x = 187,
        t.y = 218,
        t
    },
    n.dark_2_i = function() {
        var t = new eui.Image;
        return this.dark_2 = t,
        t.source = "gotr_panel6_dark_png",
        t.x = 192,
        t.y = 224,
        t
    },
    n.light_3_i = function() {
        var t = new eui.Image;
        return this.light_3 = t,
        t.source = "gotr_panel6_light_png",
        t.x = 187,
        t.y = 345,
        t
    },
    n.dark_3_i = function() {
        var t = new eui.Image;
        return this.dark_3 = t,
        t.source = "gotr_panel6_dark_png",
        t.x = 192,
        t.y = 351,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel7Skin.exml"] = window.godOfThunderRay.Panel7Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "bar_value", "txt_hasFi", "btnTiaozhan", "btnYijian", "btnXuexi", "txt_itemNum", "btnadd", "txt_ss", "right1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel7_progress_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "gotr_panel2_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -43.5,
        t.y = 7,
        t.elementsContent = [this._Image1_i(), this.btnBag_i(), this.btnCure_i(), this._Label1_i(), this.right1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_zu_1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel4_jlbb_png",
        t.x = 85,
        t.y = 424,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel4_jlhf_png",
        t.x = 85,
        t.y = 520,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "每日拥有1次挑战机会",
        t.textColor = 16774883,
        t.x = 518,
        t.y = 575,
        t
    },
    n.right1_i = function() {
        var t = new eui.Group;
        return this.right1 = t,
        t.x = 820,
        t.y = 81,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Label2_i(), this._Image4_i(), this.bar_value_i(), this.txt_hasFi_i(), this.btnTiaozhan_i(), this.btnYijian_i(), this.btnXuexi_i(), this.txt_itemNum_i(), this.btnadd_i(), this._Label3_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label4_i(), this.txt_ss_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_rightbg_png",
        t.x = 12,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_line_png",
        t.x = 29,
        t.y = 227,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "集齐24个          即可学习新技能",
        t.textColor = 16774883,
        t.x = 56,
        t.y = 24,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_progress_bg_png",
        t.x = 21,
        t.y = 109,
        t
    },
    n.bar_value_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_value = t,
        t.maximum = 24,
        t.value = 0,
        t.width = 281,
        t.x = 32,
        t.y = 114,
        t.skinName = i,
        t
    },
    n.txt_hasFi_i = function() {
        var t = new eui.Label;
        return this.txt_hasFi = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "今日次数已用尽，\n请明日再尝试",
        t.textAlign = "center",
        t.textColor = 8868906,
        t.visible = !0,
        t.x = 102,
        t.y = 386,
        t
    },
    n.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "gotr_panel7_btntiaozhan_png",
        t.visible = !0,
        t.x = 105,
        t.y = 382,
        t
    },
    n.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "gotr_panel7_btnyijian_png",
        t.visible = !0,
        t.x = 94,
        t.y = 153,
        t
    },
    n.btnXuexi_i = function() {
        var t = new eui.Image;
        return this.btnXuexi = t,
        t.source = "gotr_panel7_btnxuexi_png",
        t.visible = !0,
        t.x = 94,
        t.y = 153,
        t
    },
    n.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "20/24",
        t.textColor = 16514896,
        t.visible = !0,
        t.x = 95,
        t.y = 80,
        t
    },
    n.btnadd_i = function() {
        var t = new eui.Image;
        return this.btnadd = t,
        t.source = "gotr_panel7_add_y_kb_png",
        t.x = 281,
        t.y = 78,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "圣灵电流*1",
        t.textColor = 14265457,
        t.x = 148,
        t.y = 316,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_1706741_png",
        t.x = 101,
        t.y = 301,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_1706741_png",
        t.x = 132,
        t.y = 12,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel7_1706741_png",
        t.x = 47,
        t.y = 62,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "战胜奖励",
        t.textColor = 16514896,
        t.x = 131,
        t.y = 263,
        t
    },
    n.txt_ss_i = function() {
        var t = new eui.Label;
        return this.txt_ss = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "仅能使用雷神·雷伊首发",
        t.textColor = 8868906,
        t.x = 87,
        t.y = 430,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/Panel4popSkin.exml"] = window.godOfThunderRay.Panel4popSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnZhi", "btnAdd", "txt_leftTime", "btnBag", "btnCure", "bar_state5", "txt_trail5", "img_hasCharge5", "img_noCharge5", "Sele5", "trial5", "bar_state4", "txt_trail4", "img_hasCharge4", "img_noCharge4", "Sele4", "trial4", "bar_state3", "txt_trail3", "img_hasCharge3", "img_noCharge3", "Sele3", "trial3", "bar_state2", "txt_trail2", "img_hasCharge2", "img_noCharge2", "Sele2", "trial2", "bar_state1", "jdwxs_5", "jdyxs_5", "txt_trail1", "img_hasCharge1", "img_noCharge1", "Sele1", "trial1", "zhiding"],
        this.height = 426,
        this.width = 748,
        this.elementsContent = [this.zhiding_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "gotr_panel4_jdwxs_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.zhiding_i = function() {
        var t = new eui.Group;
        return this.zhiding = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this.btnZhi_i(), this.btnAdd_i(), this._Image3_i(), this.txt_leftTime_i(), this.btnBag_i(), this.btnCure_i(), this.trial5_i(), this.trial4_i(), this.trial3_i(), this.trial2_i(), this.trial1_i()],
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4pop_imgtanchuang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 3,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "gotr_signpop_btnclose_png",
        t.x = 711,
        t.y = 0,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4pop_xzzdcn_png",
        t.x = 286,
        t.y = 0,
        t
    },
    s.btnZhi_i = function() {
        var t = new eui.Image;
        return this.btnZhi = t,
        t.source = "gotr_panel4pop_btntiaozhan_png",
        t.x = 290,
        t.y = 359,
        t
    },
    s.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "gotr_panel4_btnbuy_png",
        t.visible = !0,
        t.x = 320,
        t.y = 359,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4pop_tag_png",
        t.x = 429,
        t.y = 357,
        t
    },
    s.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "9/9",
        t.textColor = 16777215,
        t.x = 446,
        t.y = 359,
        t
    },
    s.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "gotr_panel4pop_jlbb_png",
        t.x = 21,
        t.y = 342,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "gotr_panel4pop_jlhf_png",
        t.x = 112,
        t.y = 342,
        t
    },
    s.trial5_i = function() {
        var t = new eui.Group;
        return this.trial5 = t,
        t.x = 38,
        t.y = 239,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.bar_state5_i(), this._Image6_i(), this.txt_trail5_i(), this.img_hasCharge5_i(), this.img_noCharge5_i(), this.Sele5_i()],
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.visible = !0,
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state5_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state5 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = i,
        t
    },
    s._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszj_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail5_i = function() {
        var t = new eui.Label;
        return this.txt_trail5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.visible = !0,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge5_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge5 = t,
        t.source = "gotr_panel4_ycn_png",
        t.visible = !1,
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge5_i = function() {
        var t = new eui.Image;
        return this.img_noCharge5 = t,
        t.source = "gotr_panel4_wcn_png",
        t.visible = !0,
        t.x = 115,
        t.y = 16,
        t
    },
    s.Sele5_i = function() {
        var t = new eui.Image;
        return this.Sele5 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel4pop_selet_png",
        t.x = -12,
        t.y = -6,
        t
    },
    s.trial4_i = function() {
        var t = new eui.Group;
        return this.trial4 = t,
        t.x = 386,
        t.y = 151,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.bar_state4_i(), this._Image9_i(), this.txt_trail4_i(), this.img_hasCharge4_i(), this.img_noCharge4_i(), this.Sele4_i()],
        t
    },
    s._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state4_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state4 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = n,
        t
    },
    s._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszb_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail4_i = function() {
        var t = new eui.Label;
        return this.txt_trail4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge4_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge4 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge4_i = function() {
        var t = new eui.Image;
        return this.img_noCharge4 = t,
        t.source = "gotr_panel4_wcn_png",
        t.visible = !0,
        t.x = 115,
        t.y = 16,
        t
    },
    s.Sele4_i = function() {
        var t = new eui.Image;
        return this.Sele4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel4pop_selet_png",
        t.x = -12,
        t.y = -6,
        t
    },
    s.trial3_i = function() {
        var t = new eui.Group;
        return this.trial3 = t,
        t.x = 38,
        t.y = 151,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this.bar_state3_i(), this._Image12_i(), this.txt_trail3_i(), this.img_hasCharge3_i(), this.img_noCharge3_i(), this.Sele3_i()],
        t
    },
    s._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state3_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state3 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = a,
        t
    },
    s._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszq_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail3_i = function() {
        var t = new eui.Label;
        return this.txt_trail3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge3_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge3 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge3_i = function() {
        var t = new eui.Image;
        return this.img_noCharge3 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.Sele3_i = function() {
        var t = new eui.Image;
        return this.Sele3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel4pop_selet_png",
        t.x = -12,
        t.y = -6,
        t
    },
    s.trial2_i = function() {
        var t = new eui.Group;
        return this.trial2 = t,
        t.x = 386,
        t.y = 62,
        t.elementsContent = [this._Image13_i(), this._Image14_i(), this.bar_state2_i(), this._Image15_i(), this.txt_trail2_i(), this.img_hasCharge2_i(), this.img_noCharge2_i(), this.Sele2_i()],
        t
    },
    s._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state2_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state2 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = r,
        t
    },
    s._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszy_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail2_i = function() {
        var t = new eui.Label;
        return this.txt_trail2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge2_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge2 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge2_i = function() {
        var t = new eui.Image;
        return this.img_noCharge2 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.Sele2_i = function() {
        var t = new eui.Image;
        return this.Sele2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel4pop_selet_png",
        t.x = -12,
        t.y = -6,
        t
    },
    s.trial1_i = function() {
        var t = new eui.Group;
        return this.trial1 = t,
        t.x = 38,
        t.y = 62,
        t.elementsContent = [this._Image16_i(), this._Image17_i(), this.bar_state1_i(), this.jdwxs_5_i(), this.jdyxs_5_i(), this._Image18_i(), this.txt_trail1_i(), this.img_hasCharge1_i(), this.img_noCharge1_i(), this.Sele1_i()],
        t
    },
    s._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lanimg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_jindude_png",
        t.x = 38,
        t.y = 51,
        t
    },
    s.bar_state1_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_state1 = t,
        t.maximum = 5,
        t.value = 0,
        t.visible = !0,
        t.width = 246,
        t.x = 39,
        t.y = 50,
        t.skinName = o,
        t
    },
    s.jdwxs_5_i = function() {
        var t = new eui.Image;
        return this.jdwxs_5 = t,
        t.source = "gotr_panel4_jdwxs_png",
        t.visible = !1,
        t.x = 39,
        t.y = 50,
        t
    },
    s.jdyxs_5_i = function() {
        var t = new eui.Image;
        return this.jdyxs_5 = t,
        t.source = "gotr_panel4_jdyxs_png",
        t.visible = !1,
        t.x = 39,
        t.y = 50,
        t
    },
    s._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_panel4_lszz_png",
        t.x = 24,
        t.y = 6,
        t
    },
    s.txt_trail1_i = function() {
        var t = new eui.Label;
        return this.txt_trail1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未消散5次",
        t.textColor = 16707889,
        t.x = 212,
        t.y = 15,
        t
    },
    s.img_hasCharge1_i = function() {
        var t = new eui.Image;
        return this.img_hasCharge1 = t,
        t.source = "gotr_panel4_ycn_png",
        t.x = 110,
        t.y = 11,
        t
    },
    s.img_noCharge1_i = function() {
        var t = new eui.Image;
        return this.img_noCharge1 = t,
        t.source = "gotr_panel4_wcn_png",
        t.x = 115,
        t.y = 16,
        t
    },
    s.Sele1_i = function() {
        var t = new eui.Image;
        return this.Sele1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "gotr_panel4pop_selet_png",
        t.x = -12,
        t.y = -6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/RoulettepopSkin.exml"] = window.godOfThunderRay.RoulettepopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["Se_0", "item0", "txt_itemNum0", "Se_1", "item1", "txt_itemNum1", "Se_2", "item2", "txt_itemNum2", "Se_3", "item3", "txt_itemNum3", "Se_4", "item4", "txt_itemNum4", "Se_5", "item5", "txt_itemNum5", "btnDraw", "btnaddTime", "btnClose", "txt_drawTime", "routePop"],
        this.height = 567,
        this.width = 514,
        this.elementsContent = [this.routePop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.routePop_i = function() {
        var t = new eui.Group;
        return this.routePop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this._Group7_i(), this._Image8_i(), this.btnDraw_i(), this.btnaddTime_i(), this.btnClose_i(), this.txt_drawTime_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_yuanoan_png",
        t.x = 0,
        t.y = 103,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "VIP赛尔每日额外1次免费机会",
        t.textColor = 16774883,
        t.x = 111,
        t.y = 548,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.x = 27,
        t.y = 68,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 162,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.Se_0_i(), this.item0_i(), this.txt_itemNum0_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_0_i = function() {
        var t = new eui.Image;
        return this.Se_0 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.item0_i = function() {
        var t = new eui.Image;
        return this.item0 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum0_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "20000",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 50,
        t.x = 30,
        t.y = 102,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 318,
        t.y = 82,
        t.elementsContent = [this._Image3_i(), this.Se_1_i(), this.item1_i(), this.txt_itemNum1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_1_i = function() {
        var t = new eui.Image;
        return this.Se_1 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.item1_i = function() {
        var t = new eui.Image;
        return this.item1 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum1_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "1",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 36,
        t.x = 38,
        t.y = 105,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 318,
        t.y = 273,
        t.elementsContent = [this._Image4_i(), this.Se_2_i(), this.item2_i(), this.txt_itemNum2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_2_i = function() {
        var t = new eui.Image;
        return this.Se_2 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.item2_i = function() {
        var t = new eui.Image;
        return this.item2 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum2_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "10",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 36,
        t.x = 38,
        t.y = 105,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 162,
        t.y = 329,
        t.elementsContent = [this._Image5_i(), this.Se_3_i(), this.item3_i(), this.txt_itemNum3_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_3_i = function() {
        var t = new eui.Image;
        return this.Se_3 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item3_i = function() {
        var t = new eui.Image;
        return this.item3 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum3_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "4",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 36,
        t.x = 38,
        t.y = 105,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 277,
        t.elementsContent = [this._Image6_i(), this.Se_4_i(), this.item4_i(), this.txt_itemNum4_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_4_i = function() {
        var t = new eui.Image;
        return this.Se_4 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.item4_i = function() {
        var t = new eui.Image;
        return this.item4 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum4_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "5",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 36,
        t.x = 38,
        t.y = 105,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 82,
        t.elementsContent = [this._Image7_i(), this.Se_5_i(), this.item5_i(), this.txt_itemNum5_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_daojukuang_png",
        t.x = 13,
        t.y = 32,
        t
    },
    i.Se_5_i = function() {
        var t = new eui.Image;
        return this.Se_5 = t,
        t.source = "gotr_roulettepop_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.item5_i = function() {
        var t = new eui.Image;
        return this.item5 = t,
        t.height = 50,
        t.source = "gotr_roulettepop_daoju_png",
        t.width = 50,
        t.x = 29,
        t.y = 55,
        t
    },
    i.txt_itemNum5_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 15,
        t.text = "20",
        t.textAlign = "center",
        t.textColor = 16773632,
        t.width = 36,
        t.x = 38,
        t.y = 105,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_roulettepop_myzl_png",
        t.x = 151,
        t.y = 0,
        t
    },
    i.btnDraw_i = function() {
        var t = new eui.Image;
        return this.btnDraw = t,
        t.source = "gotr_roulettepop_btnjieshi_png",
        t.x = 178,
        t.y = 247,
        t
    },
    i.btnaddTime_i = function() {
        var t = new eui.Image;
        return this.btnaddTime = t,
        t.source = "gotr_roulettepop_btncishu_png",
        t.visible = !0,
        t.x = 178,
        t.y = 247,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "gotr_roulettepop_btnclose_png",
        t.x = 480,
        t.y = 10,
        t
    },
    i.txt_drawTime_i = function() {
        var t = new eui.Label;
        return this.txt_drawTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 27,
        t.text = "8/8",
        t.textColor = 16777215,
        t.x = 228,
        t.y = 336,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/SignpopSkin.exml"] = window.godOfThunderRay.SignpopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["se1", "normal1", "txt_a1", "hasGet1", "sign1", "se2", "normal2", "txt_a2", "hasGet2", "sign2", "se3", "normal3", "txt_a3", "hasGet3", "sign3", "se4", "normal4", "txt_a4", "hasGet4", "sign4", "se5", "normal5", "txt_a5", "hasGet5", "sign5", "se6", "normal6", "txt_a6", "hasGet6", "sign6", "se7", "normal7", "txt_a7", "hasGet7", "sign7", "btnClose", "signPop"],
        this.height = 483,
        this.width = 748,
        this.elementsContent = [this.signPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.signPop_i = function() {
        var t = new eui.Group;
        return this.signPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.sign1_i(), this.sign2_i(), this.sign3_i(), this.sign4_i(), this.sign5_i(), this.sign6_i(), this.sign7_i(), this._Image9_i(), this._Label1_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_qiandao__png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.sign1_i = function() {
        var t = new eui.Group;
        return this.sign1 = t,
        t.x = 243,
        t.y = 298,
        t.elementsContent = [this.se1_i(), this.normal1_i(), this.txt_a1_i(), this._Image2_i(), this.hasGet1_i()],
        t
    },
    i.se1_i = function() {
        var t = new eui.Image;
        return this.se1 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal1_i = function() {
        var t = new eui.Image;
        return this.normal1 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a1_i = function() {
        var t = new eui.Label;
        return this.txt_a1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期一",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_1_png",
        t.x = 40,
        t.y = 34,
        t
    },
    i.hasGet1_i = function() {
        var t = new eui.Image;
        return this.hasGet1 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign2_i = function() {
        var t = new eui.Group;
        return this.sign2 = t,
        t.x = 358,
        t.y = 298,
        t.elementsContent = [this.se2_i(), this.normal2_i(), this.txt_a2_i(), this._Image3_i(), this.hasGet2_i()],
        t
    },
    i.se2_i = function() {
        var t = new eui.Image;
        return this.se2 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal2_i = function() {
        var t = new eui.Image;
        return this.normal2 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a2_i = function() {
        var t = new eui.Label;
        return this.txt_a2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期二",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_1_png",
        t.x = 40,
        t.y = 34,
        t
    },
    i.hasGet2_i = function() {
        var t = new eui.Image;
        return this.hasGet2 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign3_i = function() {
        var t = new eui.Group;
        return this.sign3 = t,
        t.x = 472,
        t.y = 298,
        t.elementsContent = [this.se3_i(), this.normal3_i(), this.txt_a3_i(), this._Image4_i(), this.hasGet3_i()],
        t
    },
    i.se3_i = function() {
        var t = new eui.Image;
        return this.se3 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal3_i = function() {
        var t = new eui.Image;
        return this.normal3 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a3_i = function() {
        var t = new eui.Label;
        return this.txt_a3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期三",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_1_png",
        t.x = 40,
        t.y = 34,
        t
    },
    i.hasGet3_i = function() {
        var t = new eui.Image;
        return this.hasGet3 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign4_i = function() {
        var t = new eui.Group;
        return this.sign4 = t,
        t.x = 585,
        t.y = 298,
        t.elementsContent = [this.se4_i(), this.normal4_i(), this.txt_a4_i(), this._Image5_i(), this.hasGet4_i()],
        t
    },
    i.se4_i = function() {
        var t = new eui.Image;
        return this.se4 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal4_i = function() {
        var t = new eui.Image;
        return this.normal4 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a4_i = function() {
        var t = new eui.Label;
        return this.txt_a4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期四",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_1_png",
        t.x = 40,
        t.y = 34,
        t
    },
    i.hasGet4_i = function() {
        var t = new eui.Image;
        return this.hasGet4 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign5_i = function() {
        var t = new eui.Group;
        return this.sign5 = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.x = 264,
        t.y = 132,
        t.elementsContent = [this.se5_i(), this.normal5_i(), this.txt_a5_i(), this._Image6_i(), this.hasGet5_i()],
        t
    },
    i.se5_i = function() {
        var t = new eui.Image;
        return this.se5 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal5_i = function() {
        var t = new eui.Image;
        return this.normal5 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a5_i = function() {
        var t = new eui.Label;
        return this.txt_a5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期五",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_png",
        t.x = 26,
        t.y = 25,
        t
    },
    i.hasGet5_i = function() {
        var t = new eui.Image;
        return this.hasGet5 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign6_i = function() {
        var t = new eui.Group;
        return this.sign6 = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.x = 402,
        t.y = 132,
        t.elementsContent = [this.se6_i(), this.normal6_i(), this.txt_a6_i(), this._Image7_i(), this.hasGet6_i()],
        t
    },
    i.se6_i = function() {
        var t = new eui.Image;
        return this.se6 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal6_i = function() {
        var t = new eui.Image;
        return this.normal6 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a6_i = function() {
        var t = new eui.Label;
        return this.txt_a6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期六",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_png",
        t.x = 26,
        t.y = 25,
        t
    },
    i.hasGet6_i = function() {
        var t = new eui.Image;
        return this.hasGet6 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i.sign7_i = function() {
        var t = new eui.Group;
        return this.sign7 = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.x = 540,
        t.y = 132,
        t.elementsContent = [this.se7_i(), this.normal7_i(), this.txt_a7_i(), this._Image8_i(), this.hasGet7_i()],
        t
    },
    i.se7_i = function() {
        var t = new eui.Image;
        return this.se7 = t,
        t.source = "gotr_signpop_mingliang_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.normal7_i = function() {
        var t = new eui.Image;
        return this.normal7 = t,
        t.source = "gotr_signpop_andan_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_a7_i = function() {
        var t = new eui.Label;
        return this.txt_a7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 19,
        t.text = "星期日",
        t.textColor = 16775919,
        t.x = 37,
        t.y = 109,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_1706343_png",
        t.x = 26,
        t.y = 25,
        t
    },
    i.hasGet7_i = function() {
        var t = new eui.Image;
        return this.hasGet7 = t,
        t.source = "gotr_signpop_yilingqu_png",
        t.x = 24,
        t.y = 51,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_signpop_title_png",
        t.x = 241,
        t.y = 66,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "签到状态每周刷新",
        t.textColor = 15185539,
        t.x = 294,
        t.y = 456,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "gotr_signpop_btnclose_png",
        t.x = 711,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/UppopSkin.exml"] = window.godOfThunderRay.UppopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["dark_2", "light_2", "dark_1", "light_1", "btnGoumai_1", "btnDuihuan_1", "btnKe", "hasGet1", "a_1a", "btnGoumai_2", "btnDuihuan_2", "btnWu", "hasGet2", "a_2a", "btnGoumai_3", "btnDuihuan_3", "btnTe", "hasGet3", "a_3a", "btnClose", "txtCoin1", "btnAddItem", "righttop2", "txtCoin2", "btnAdd", "righttop1", "tanchuang"],
        this.height = 426,
        this.width = 748,
        this.elementsContent = [this.tanchuang_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.tanchuang_i = function() {
        var t = new eui.Group;
        return this.tanchuang = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.dark_2_i(), this.light_2_i(), this.dark_1_i(), this.light_1_i(), this.a_1a_i(), this.a_2a_i(), this.a_3a_i(), this._Image8_i(), this.btnClose_i(), this._Label1_i(), this._Image9_i(), this.righttop2_i(), this.righttop1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_tanchuangimg_png",
        t.x = 0,
        t.y = 3,
        t
    },
    i.dark_2_i = function() {
        var t = new eui.Image;
        return this.dark_2 = t,
        t.source = "gotr_uppop_dark_png",
        t.x = 463,
        t.y = 155,
        t
    },
    i.light_2_i = function() {
        var t = new eui.Image;
        return this.light_2 = t,
        t.source = "gotr_uppop_light_png",
        t.x = 457,
        t.y = 150,
        t
    },
    i.dark_1_i = function() {
        var t = new eui.Image;
        return this.dark_1 = t,
        t.source = "gotr_uppop_dark_png",
        t.x = 252,
        t.y = 155,
        t
    },
    i.light_1_i = function() {
        var t = new eui.Image;
        return this.light_1 = t,
        t.source = "gotr_uppop_light_png",
        t.visible = !0,
        t.x = 246,
        t.y = 150,
        t
    },
    i.a_1a_i = function() {
        var t = new eui.Group;
        return this.a_1a = t,
        t.x = 95,
        t.y = 95,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnGoumai_1_i(), this.btnDuihuan_1_i(), this.btnKe_i(), this.hasGet1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_kuang_png",
        t.x = 16,
        t.y = 28,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_qnky_png",
        t.x = 21,
        t.y = 0,
        t
    },
    i.btnGoumai_1_i = function() {
        var t = new eui.Image;
        return this.btnGoumai_1 = t,
        t.source = "gotr_uppop_btngoumai1_png",
        t.x = 0,
        t.y = 192,
        t
    },
    i.btnDuihuan_1_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_1 = t,
        t.source = "gotr_uppop_btnduihuan1_png",
        t.x = 0,
        t.y = 142,
        t
    },
    i.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "gotr_uppop_40458_png",
        t.x = 34,
        t.y = 48,
        t
    },
    i.hasGet1_i = function() {
        var t = new eui.Image;
        return this.hasGet1 = t,
        t.source = "gotr_uppop_yihuode_png",
        t.x = 16,
        t.y = 29,
        t
    },
    i.a_2a_i = function() {
        var t = new eui.Group;
        return this.a_2a = t,
        t.x = 306,
        t.y = 95,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.btnGoumai_2_i(), this.btnDuihuan_2_i(), this.btnWu_i(), this.hasGet2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_kuang_png",
        t.x = 16,
        t.y = 28,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_diwujineng_png",
        t.x = 21,
        t.y = 0,
        t
    },
    i.btnGoumai_2_i = function() {
        var t = new eui.Image;
        return this.btnGoumai_2 = t,
        t.source = "gotr_uppop_btngoumai2_png",
        t.x = 0,
        t.y = 192,
        t
    },
    i.btnDuihuan_2_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_2 = t,
        t.source = "gotr_uppop_btnduihuan2_png",
        t.x = 0,
        t.y = 142,
        t
    },
    i.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "gotr_uppop_dwjnicon_png",
        t.x = 41,
        t.y = 54,
        t
    },
    i.hasGet2_i = function() {
        var t = new eui.Image;
        return this.hasGet2 = t,
        t.source = "gotr_uppop_yihuode_png",
        t.x = 16,
        t.y = 29,
        t
    },
    i.a_3a_i = function() {
        var t = new eui.Group;
        return this.a_3a = t,
        t.x = 517,
        t.y = 95,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnGoumai_3_i(), this.btnDuihuan_3_i(), this.btnTe_i(), this.hasGet3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_kuang_png",
        t.x = 16,
        t.y = 28,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_zstx_png",
        t.x = 21,
        t.y = 0,
        t
    },
    i.btnGoumai_3_i = function() {
        var t = new eui.Image;
        return this.btnGoumai_3 = t,
        t.source = "gotr_uppop_btngoumai3_png",
        t.x = 0,
        t.y = 192,
        t
    },
    i.btnDuihuan_3_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan_3 = t,
        t.source = "gotr_uppop_btnduihuan3_png",
        t.x = 0,
        t.y = 142,
        t
    },
    i.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.source = "gotr_uppop_zstxicon_png",
        t.x = 40,
        t.y = 55,
        t
    },
    i.hasGet3_i = function() {
        var t = new eui.Image;
        return this.hasGet3 = t,
        t.source = "gotr_uppop_yihuode_png",
        t.x = 16,
        t.y = 29,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_nlds_png",
        t.x = 311,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "gotr_uppop_btnclose_png",
        t.x = 711,
        t.y = 7,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每日参与命运之轮签到有概率获得",
        t.textColor = 15185539,
        t.x = 226,
        t.y = 388,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_1706345_png",
        t.x = 500,
        t.y = 384,
        t
    },
    i.righttop2_i = function() {
        var t = new eui.Group;
        return this.righttop2 = t,
        t.x = 588,
        t.y = 11,
        t.elementsContent = [this._Image10_i(), this._Image11_i(), this.txtCoin1_i(), this.btnAddItem_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_img_di2_kb_png",
        t.x = 3,
        t.y = 3,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_1706345_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "6509",
        t.textColor = 16774299,
        t.x = 27,
        t.y = 4,
        t
    },
    i.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.source = "gotr_uppop_add_y_png",
        t.x = 74,
        t.y = 3,
        t
    },
    i.righttop1_i = function() {
        var t = new eui.Group;
        return this.righttop1 = t,
        t.x = 474,
        t.y = 12,
        t.elementsContent = [this._Image12_i(), this._Image13_i(), this.txtCoin2_i(), this.btnAdd_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_img_di2_png",
        t.x = 7,
        t.y = 2,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "gotr_uppop_tuceng_9_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "6509",
        t.textColor = 16774299,
        t.x = 32,
        t.y = 4,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "gotr_uppop_add_y_png",
        t.x = 78,
        t.y = 2,
        t
    },
    e
} (eui.Skin);