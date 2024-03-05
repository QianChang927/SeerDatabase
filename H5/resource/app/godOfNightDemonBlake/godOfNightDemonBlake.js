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
godOfNightDemonBlake; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.GodOfNightDemonBlakeConst.forever_level1_enemyPos, e.GodOfNightDemonBlakeConst.forever_level1_myPos, e.GodOfNightDemonBlakeConst.forever_level2_state, e.GodOfNightDemonBlakeConst.forever_level3_state, e.GodOfNightDemonBlakeConst.forever_level_state], [e.GodOfNightDemonBlakeConst.daily_all_times, e.GodOfNightDemonBlakeConst.daily_level1_sign, e.GodOfNightDemonBlakeConst.daily_has_sign]),
            n.init([{
                panelName: e.GodOfNightDemonBlakeConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.GodOfNightDemonBlakeConst.PANEL1
            },
            {
                panelName: e.GodOfNightDemonBlakeConst.PANEL2
            },
            {
                panelName: e.GodOfNightDemonBlakeConst.PANEL3
            }]),
            n
        }
        return __extends(n, t),
        n.prototype.reShow = function() {
            var e = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && e.currentPanel.update && e.currentPanel.update()
            })
        },
        n
    } (BasicMultPanelModule);
    e.GodOfNightDemonBlake = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlake")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
godOfNightDemonBlake; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "godOfNightDemonBlake.GodOfNightDemonBlakeMainPanel",
        e.PANEL1 = "godOfNightDemonBlake.GodOfNightDemonBlakePanel1",
        e.PANEL2 = "godOfNightDemonBlake.GodOfNightDemonBlakePanel2",
        e.PANEL3 = "godOfNightDemonBlake.GodOfNightDemonBlakePanel3",
        e.CMD = 42173,
        e.forever_level_state = 6401,
        e.forever_level1_myPos = 6402,
        e.forever_level1_enemyPos = 6403,
        e.forever_level3_state = 6404,
        e.forever_level2_state = 6410,
        e.daily_all_times = 16316,
        e.daily_level1_sign = 16319,
        e.daily_has_sign = 16322,
        e.bitbuf_super = 170,
        e
    } ();
    e.GodOfNightDemonBlakeConst = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlakeConst")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(a, o) {
        function r(e) {
            try {
                _(i.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                _(i["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new n(function(t) {
                t(e.value)
            }).then(r, s)
        }
        _((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, o && (r = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(r = r.call(o, n[1])).done) return r;
            switch (o = 0, r && (n = [0, r.value]), n[0]) {
            case 0:
            case 1:
                r = n;
                break;
            case 4:
                return _.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    _ = 0;
                    continue
                }
                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                    _.label = n[1];
                    break
                }
                if (6 === n[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = n;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(n);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            n = t.call(e, _)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = r = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, r, s, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
godOfNightDemonBlake; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 143,
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(150, this, "gondb_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "gondb_mainpanel_btnysc_png": "gondb_mainpanel_btnsc_png"
            }),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击主界面-【暗夜逐仇】"),
                t.service.openPanel(e.GodOfNightDemonBlakeConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击主界面-【暗夜除恶】"),
                t.service.openPanel(e.GodOfNightDemonBlakeConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击主界面-【暗夜神威】三件套"),
                t.service.openPanel(e.GodOfNightDemonBlakeConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                KTool.doExchange(7243, 1,
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243988, 1,
                    function() {
                        KTool.doExchange(7220, 1,
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
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2833,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this)
        },
        n.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "gondb_mainpanel_btnysc_png": "gondb_mainpanel_btnsc_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            var t = this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level_state),
            n = this.service.getValue(e.GodOfNightDemonBlakeConst.bitbuf_super),
            i = this.service.getValue(6410),
            a = ItemManager.getNumByID(1705400);
            console.log("是否获得精灵bitbuf" + n + "   当前状态：" + t),
            this.hasPass1.visible = t >= 1,
            this.hasPass2.visible = t >= 2 || i >= 6,
            this.hasPet.visible = 1 == n,
            DisplayUtil.setEnabled(this.btn1, 0 == t, t >= 1),
            DisplayUtil.setEnabled(this.btn2, 1 == t && 6 > i, 1 != t || i >= 6),
            DisplayUtil.setEnabled(this.btnUp, 3 != t, 3 == t),
            t > 0 && (this.btnGet.visible = (i >= 6 || a >= 60) && 2 > t),
            this.btnSuper.visible = 2 > t,
            this.btnUp.visible = 2 == t
        },
        n
    } (BasicPanel);
    e.GodOfNightDemonBlakeMainPanel = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlakeMainPanel")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {}));
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
godOfNightDemonBlake; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.name = "godOfNightDemonBlake.Panel1Skin",
            this.initOldPveBtnClose(0, this, "gondb_panel1_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            this.setPos()
        },
        n.prototype.addEvents = function() {
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243989, 1,
                    function() {
                        KTool.doExchange(7226, 1,
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
            ImageButtonUtil.add(this.btnBuy,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击1暗夜逐仇界面-【购买次数】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243993, 1,
                    function() {
                        KTool.doExchange(7221, 1,
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
            ImageButtonUtil.add(this.btnFight,
            function() {
                return StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击1暗夜逐仇界面-【开始战斗】"),
                t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足") : void FightManager.fightNoMapBoss(6315)
            },
            this),
            ImageButtonUtil.add(this.btnSign,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击1暗夜逐仇界面-【签到】"),
                SocketConnection.sendByQueue(e.GodOfNightDemonBlakeConst.CMD, [1, 1],
                function() {
                    BubblerManager.getInstance().showText("已领取1次额外次数"),
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnReduce,
            function() {
                return StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击1暗夜逐仇界面-【缩短距离】"),
                ItemManager.getNumByID(1705367) <= 0 ? (StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击1暗夜逐仇界面-【缩短距离】时道具不足"), void Alert.show("夜魔之心数量不足，是否立刻购买？",
                function() {
                    PayManager.doPayFunc(function() {
                        var e = {};
                        e.type = "product_diamond",
                        e.ins = {
                            iconID: 1705367,
                            productID: 243994
                        },
                        e.caller = t,
                        e.callBack = function(e, n) {
                            KTool.buyProductByCallback(243994, n,
                            function() {
                                KTool.doExchange(7239, n,
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
                })) : void SocketConnection.sendByQueue(e.GodOfNightDemonBlakeConst.CMD, [1, 2],
                function() {
                    t.service.updateValues().then(function() {
                        t.setPos(!0),
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1705367,
                        productID: 243994
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(243994, n,
                        function() {
                            KTool.doExchange(7239, n,
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                t.service.updateValues().then(function() {
                    t.setPos(!0),
                    t.update()
                })
            },
            this)
        },
        n.prototype.setPos = function(t) {
            void 0 === t && (t = !1);
            var n = -33,
            i = -75,
            a = -4,
            o = this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level1_myPos),
            r = this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level1_enemyPos),
            s = 7 == r ? -55 : -95;
            t ? (egret.Tween.get(this.img_my).to({
                x: this["grid_" + o].x + n,
                y: this["grid_" + o].y + i
            },
            750), egret.Tween.get(this.img_enemy).to({
                x: this["grid_" + (r + 9)].x + a,
                y: this["grid_" + (r + 9)].y + s
            },
            750)) : (this.img_my.x = this["grid_" + o].x + n, this.img_my.y = this["grid_" + o].y + i, this.img_enemy.x = this["grid_" + (r + 9)].x + a, this.img_enemy.y = this["grid_" + (r + 9)].y + s),
            0 == o && (this.img_my.y = 0),
            7 == r && (this.img_enemy.y = 163)
        },
        n.prototype.update = function() {
            var t = this;
            this.txt_itemNum.textFlow = [{
                text: "夜魔之心：",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: ItemManager.getNumByID(1705367) + "",
                style: {
                    textColor: 16514895
                }
            }];
            var n = MainManager.actorInfo.isVip ? 5 : 3,
            i = this.service.getValue(e.GodOfNightDemonBlakeConst.daily_all_times),
            a = this.service.getValue(e.GodOfNightDemonBlakeConst.daily_has_sign),
            o = 1 == this.service.getValue(e.GodOfNightDemonBlakeConst.daily_level1_sign);
            this.leftTime = n - i + a,
            this.imghasSign.visible = o,
            o && n++,
            console.log("当前次数：" + this.leftTime),
            this.txt_leftTime.text = this.leftTime + "/" + n,
            this.btnSign.visible = !o;
            var r = this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level_state);
            this.btnBuy.visible = 0 == this.leftTime,
            this.btnFight.visible = 0 != this.leftTime,
            r >= 1 && Alarm.show("布莱克成功追上逃遁的狂煞，一场激战在所难免",
            function() {
                EventManager.removeAll(t),
                t.service.openPanel(e.GodOfNightDemonBlakeConst.PANEL2)
            })
        },
        n
    } (BasicPanel);
    e.GodOfNightDemonBlakePanel1 = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlakePanel1")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {}));
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
godOfNightDemonBlake; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n._petIdArr = [1845, 2341, 2527, 2323, 2394],
            n.rightValue = 0,
            n.leftTime = 0,
            n.skinName = e.Panel2Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gondb_panel2_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.rightValue = 1,
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.animInit(),
            this.addEvents(),
            this.showItem()
        },
        n.prototype.animInit = function() {
            this.animReward = SpineUtil.createAnimate("anyechue"),
            this.main.addChild(this.animReward),
            this.animReward.touchChildren = this.animReward.touchEnabled = !1,
            this.animReward.x = 578,
            this.animReward.y = 270,
            this.animReward.visible = !1
        },
        n.prototype.addEvents = function() {
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击2暗夜除恶界面-【购买次数】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243996, 1,
                    function() {
                        KTool.doExchange(7222, 1,
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
            EventManager.addEventListener("RewardOnclose",
            function() {
                e.animReward.visible = !0,
                e.animReward.play("anye_chue", 1, 0, {
                    playEnd: function() {
                        e.animReward.visible = !1,
                        e.showItem()
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1705400,
                        productID: 244387
                    },
                    t.caller = e,
                    t.callBack = function(t, n) {
                        KTool.buyProductByCallback(244387, n,
                        function() {
                            KTool.doExchange(7244, n,
                            function() {
                                e.animReward.visible = !0,
                                e.animReward.play("anye_chue", 1, 0, {
                                    playEnd: function() {
                                        e.animReward.visible = !1,
                                        e.showItem(),
                                        e.service.updateValues().then(function() {
                                            e.update()
                                        })
                                    }
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, t)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243990, 1,
                    function() {
                        KTool.doExchange(7224, 1,
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
            ImageButtonUtil.add(this.btnFast,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击2暗夜除恶界面-【直接击败】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243996 + Math.floor(e.rightValue / 2), 1,
                    function() {
                        KTool.doExchange(7239 + Math.floor(e.rightValue / 2), 1,
                        function() {
                            e.animReward.visible = !0,
                            e.animReward.play("anye_chue", 1, 0, {
                                playEnd: function() {
                                    e.animReward.visible = !1,
                                    e.showItem(),
                                    e.service.updateValues().then(function() {
                                        e.update()
                                    })
                                }
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击2暗夜除恶界面-【开始战斗】"),
                e.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足") : void(e.rightValue % 2 == 0 && 0 != e.rightValue ? Alert.show("本关难度较高，<font color='#ff0000'>挑战失败则进度重置回小天煞</font>，是否已准备好进入战斗？",
                function() {
                    FightManager.fightNoMapBoss(6315 + e.rightValue)
                }) : FightManager.fightNoMapBoss(6315 + e.rightValue))
            },
            this)
        },
        n.prototype.update = function() {
            var t = this,
            n = MainManager.actorInfo.isVip ? 3 : 2;
            this.leftTime = n - this.service.getValue(e.GodOfNightDemonBlakeConst.daily_all_times),
            this.txt_leftTime.text = this.leftTime + "/" + n;
            var i = ItemManager.getNumByID(1705400);
            this.rightValue = this.service.getValue(6410) + 1;
            for (var a = 1; 6 >= a; a++) this["pet" + a].visible = this.rightValue == a,
            this["pet" + a + "_cur"].visible = this.rightValue == a,
            this["pet" + a + "_not"].visible = this.rightValue < a,
            this["pet" + a + "_pass"].visible = this.rightValue > a;
            this.btnFast.visible = this.rightValue % 2 == 0 && 0 != this.rightValue,
            this.btnAdd.visible = 0 == this.leftTime,
            this.btnFight.visible = 0 != this.leftTime;
            this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level_state); (7 == this.rightValue || i >= 60) && Alarm.show("成功帮助布莱克铲除奸邪，可以领取布莱克完全体！",
            function() {
                t.service.updateValues().then(function() {
                    t.service.backToMainPanel()
                })
            })
        },
        n.prototype.showItem = function() {
            var e = ItemManager.getNumByID(1705400);
            return this.txt_itemNum.text = e + "/60",
            this.bar_value.value = e,
            e
        },
        n
    } (BasicPanel);
    e.GodOfNightDemonBlakePanel2 = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlakePanel2")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {}));
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
godOfNightDemonBlake; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.animX = [722, 552, 722],
            n.animY = [158, 290, 428],
            n.leftTime = 0,
            n.signAnims = [],
            n.skinName = e.Panel3Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gondb_panel3_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275;
            for (var n = 0; 3 > n; n++) this.signAnims[n] = SpineUtil.createAnimate("anyeshenwei"),
            this["reward" + (n + 1)].addChild(this.signAnims[n]),
            this.signAnims[n].touchChildren = this.signAnims[n].touchEnabled = !1,
            this.signAnims[n].x = 52,
            this.signAnims[n].y = 52;
            this.addEvents()
        },
        n.prototype.addEvents = function() {
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
            ImageButtonUtil.add(this.btnTe,
            function() {
                t.service.showPetEff(2833)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 17733
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击三件套界面-【购买次数】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244004, 1,
                    function() {
                        KTool.doExchange(7223, 1,
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
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40413) ? (e = {},
                e.ins = 40413, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40413, tipsPop.TipsPop.openItemPop(e))
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击三件套界面-【一键激活】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(244e3, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfNightDemonBlakeConst.CMD, [2, 7],
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
            ImageButtonUtil.add(this.btnFight,
            function() {
                return StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击三件套界面-【开始战斗】"),
                t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void FightManager.fightNoMapBoss(4436)
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnBuy" + n],
                function() {
                    if (StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击三件套界面-【直接购买】"), !PetManager.isDefaultPet(2833)) {
                        var i = "请将<font color='#ff0000'>夜魔之神·布莱克</font>放入背包首发出战位置！";
                        return void Alarm.show(i,
                        function() {
                            t.service.showPetBag()
                        },
                        t)
                    }
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(244004 - n, 1,
                        function() {
                            SocketConnection.sendByQueue(e.GodOfNightDemonBlakeConst.CMD, [2, 4 - n],
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnGet" + n],
                function() {
                    if (StatLogger.log("20230512版本系统功能", "布莱克完全体搬迁", "点击三件套界面-【领取奖励】"), !PetManager.isDefaultPet(2833)) {
                        var i = "请将<font color='#ff0000'>夜魔之神·布莱克</font>放入背包首发出战位置！";
                        return void Alarm.show(i,
                        function() {
                            t.service.showPetBag()
                        },
                        t)
                    }
                    SocketConnection.sendByQueue(e.GodOfNightDemonBlakeConst.CMD, [2, 7 - n],
                    function() {
                        if (3 != n) {
                            var e = 1 == n ? "成功兑换第五技能": "成功兑换专属特性";
                            Alert.show(e + "可以前往背包查看",
                            function() {
                                t.service.showPetBag()
                            })
                        }
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                i)
            },
            i = this, a = 1; 3 >= a; a++) n(a)
        },
        n.prototype.update = function() {
            var t = MainManager.actorInfo.isVip ? 2 : 1;
            this.leftTime = t - this.service.getValue(e.GodOfNightDemonBlakeConst.daily_all_times);
            0 == this.leftTime ? 16711680 : 16777215;
            this.txt_leftTime.text = this.leftTime + "/" + t;
            for (var n = 0,
            i = 0,
            a = this.service.getValue(e.GodOfNightDemonBlakeConst.forever_level3_state), o = 1; 3 >= o; o++) 1 == KTool.getBit(a, o) && n++,
            1 == KTool.getBit(a, o + 3) && i++,
            this["btnGet" + (4 - o)].visible = 1 == KTool.getBit(a, o) && 1 != KTool.getBit(a, o + 3),
            this["hasGet" + (4 - o)].visible = 1 == KTool.getBit(a, o + 3),
            this["btnBuy" + (4 - o)].visible = !this["btnGet" + (4 - o)].visible && !this["hasGet" + (4 - o)].visible;
            for (var o = 1; 3 >= o; o++) this.signAnims[o - 1].visible = this["btnGet" + o].visible,
            this["btnGet" + o].visible && this.signAnims[o - 1].play("anye_shenwei", 0);
            var r = i > n ? i: n;
            this.btnOneKey.visible = 3 > n,
            this.btnAdd.visible = 0 == this.leftTime,
            this.btnFight.visible = 0 != this.leftTime,
            this.bar_value.value = 30 * r,
            this.txt_overTime.text = r + "/3",
            3 == i && this.service.backToMainPanel()
        },
        n
    } (BasicPanel);
    e.GodOfNightDemonBlakePanel3 = t,
    __reflect(t.prototype, "godOfNightDemonBlake.GodOfNightDemonBlakePanel3")
} (godOfNightDemonBlake || (godOfNightDemonBlake = {})),
window.godOfNightDemonBlake = window.godOfNightDemonBlake || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.godOfNightDemonBlake.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnUp", "btnInfo", "btn2", "hasPet", "btnGet", "btnSuper", "btnCollect", "btn1", "hasPass1", "hasPass2", "title"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gondb_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 33,
        e.width = 1100,
        e.y = 36,
        e.elementsContent = [this.btnUp_i(), this.btnInfo_i(), this._Image1_i(), this.btn2_i(), this.hasPet_i(), this.btnGet_i(), this.btnSuper_i(), this.btnCollect_i(), this.btn1_i(), this.hasPass1_i(), this.hasPass2_i(), this.title_i()],
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "gondb_mainpanel_btnup_png",
        e.visible = !0,
        e.x = 973,
        e.y = 515,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "gondb_mainpanel_btninfo_png",
        e.x = 0,
        e.y = 516,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_mainpanel_ti1_png",
        e.x = 638,
        e.y = 454,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "gondb_mainpanel_btn2_png",
        e.x = 626,
        e.y = 357,
        e
    },
    n.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.source = "gondb_mainpanel_yihuode_png",
        e.x = 251,
        e.y = 246,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 77,
        e.source = "gondb_mainpanel_btnGet_png",
        e.visible = !1,
        e.width = 231,
        e.x = 249,
        e.y = 501,
        e
    },
    n.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.height = 62,
        e.source = "gondb_mainpanel_btnSuper_png",
        e.visible = !0,
        e.width = 80,
        e.x = 973,
        e.y = 515,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "gondb_mainpanel_btnsc_png",
        e.visible = !0,
        e.x = 0,
        e.y = 448.5,
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "gondb_mainpanel_btn1_png",
        e.x = 676,
        e.y = 207,
        e
    },
    n.hasPass1_i = function() {
        var e = new eui.Image;
        return this.hasPass1 = e,
        e.source = "gondb_mainpanel_yiwancheng_png",
        e.visible = !0,
        e.x = 707,
        e.y = 232,
        e
    },
    n.hasPass2_i = function() {
        var e = new eui.Image;
        return this.hasPass2 = e,
        e.source = "gondb_mainpanel_yiwancheng_png",
        e.visible = !0,
        e.x = 657,
        e.y = 382,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "gondb_mainpanel_title_png",
        e.x = 299,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.godOfNightDemonBlake.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "grid_6", "grid_3", "grid_7", "grid_8", "grid_5", "grid_9", "grid_4", "grid_10", "grid_11", "grid_12", "grid_15", "grid_14", "grid_13", "grid_0", "grid_1", "grid_2", "grid_16", "img_enemy", "img_my", "grids", "btnadd", "txt_itemNum", "items", "btnOnekey", "btnBag", "btnCure", "btnSign", "imghasSign", "btnReduce", "btnBuy", "btnFight", "txt_leftTime", "rightInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gondb_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -18,
        e.width = 1140,
        e.y = 18,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.grids_i(), this.items_i(), this.btnOnekey_i(), this._Image7_i(), this._Image8_i(), this.btnBag_i(), this.btnCure_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.rightInfo_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_tipsbg_png",
        e.x = 190,
        e.y = 43,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_gezibg_png",
        e.x = 0,
        e.y = 112,
        e
    },
    n.grids_i = function() {
        var e = new eui.Group;
        return this.grids = e,
        e.x = 108,
        e.y = 145,
        e.elementsContent = [this.grid_6_i(), this.grid_3_i(), this.grid_7_i(), this.grid_8_i(), this.grid_5_i(), this.grid_9_i(), this.grid_4_i(), this.grid_10_i(), this.grid_11_i(), this.grid_12_i(), this.grid_15_i(), this.grid_14_i(), this.grid_13_i(), this.grid_0_i(), this.grid_1_i(), this.grid_2_i(), this.grid_16_i(), this._Image3_i(), this._Image4_i(), this.img_enemy_i(), this.img_my_i()],
        e
    },
    n.grid_6_i = function() {
        var e = new eui.Image;
        return this.grid_6 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 421,
        e.y = 78,
        e
    },
    n.grid_3_i = function() {
        var e = new eui.Image;
        return this.grid_3 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 231,
        e.y = 113,
        e
    },
    n.grid_7_i = function() {
        var e = new eui.Image;
        return this.grid_7 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 483,
        e.y = 110,
        e
    },
    n.grid_8_i = function() {
        var e = new eui.Image;
        return this.grid_8 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 545,
        e.y = 142,
        e
    },
    n.grid_5_i = function() {
        var e = new eui.Image;
        return this.grid_5 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 357,
        e.y = 112,
        e
    },
    n.grid_9_i = function() {
        var e = new eui.Image;
        return this.grid_9 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 481,
        e.y = 176,
        e
    },
    n.grid_4_i = function() {
        var e = new eui.Image;
        return this.grid_4 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 293,
        e.y = 145,
        e
    },
    n.grid_10_i = function() {
        var e = new eui.Image;
        return this.grid_10 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 418,
        e.y = 209,
        e
    },
    n.grid_11_i = function() {
        var e = new eui.Image;
        return this.grid_11 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 353,
        e.y = 244,
        e
    },
    n.grid_12_i = function() {
        var e = new eui.Image;
        return this.grid_12 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 415,
        e.y = 276,
        e
    },
    n.grid_15_i = function() {
        var e = new eui.Image;
        return this.grid_15 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 607,
        e.y = 240,
        e
    },
    n.grid_14_i = function() {
        var e = new eui.Image;
        return this.grid_14 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 542,
        e.y = 274,
        e
    },
    n.grid_13_i = function() {
        var e = new eui.Image;
        return this.grid_13 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 477,
        e.y = 308,
        e
    },
    n.grid_0_i = function() {
        var e = new eui.Image;
        return this.grid_0 = e,
        e.source = "gondb_panel1_qidian_png",
        e.visible = !0,
        e.x = 41,
        e.y = 25,
        e
    },
    n.grid_1_i = function() {
        var e = new eui.Image;
        return this.grid_1 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 105,
        e.y = 115,
        e
    },
    n.grid_2_i = function() {
        var e = new eui.Image;
        return this.grid_2 = e,
        e.source = "gondb_panel1_grid_png",
        e.x = 167,
        e.y = 148,
        e
    },
    n.grid_16_i = function() {
        var e = new eui.Image;
        return this.grid_16 = e,
        e.source = "gondb_panel1_zhongdian_png",
        e.visible = !0,
        e.x = 669,
        e.y = 218,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_start_png",
        e.x = 0,
        e.y = 116,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_end_png",
        e.x = 726,
        e.y = 310,
        e
    },
    n.img_enemy_i = function() {
        var e = new eui.Image;
        return this.img_enemy = e,
        e.source = "gondb_panel1_2829_png",
        e.x = 621,
        e.y = 145,
        e
    },
    n.img_my_i = function() {
        var e = new eui.Image;
        return this.img_my = e,
        e.source = "gondb_panel1_2833_png",
        e.visible = !0,
        e.x = 72,
        e.y = 40,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 941,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.btnadd_i(), this._Image6_i(), this.txt_itemNum_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_img_di2_png",
        e.x = 8,
        e.y = 5,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gondb_panel1_btnadd_png",
        e.x = 169,
        e.y = 5,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_1705367_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "夜魔之心：0/0",
        e.textColor = 16514895,
        e.x = 44,
        e.y = 6,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gondb_panel1_btnonekey_png",
        e.x = 1046,
        e.y = 501,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_1705367_png",
        e.x = 437,
        e.y = 76,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_1705367_png",
        e.x = 673,
        e.y = 48,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gondb_panel1_jlbb_png",
        e.x = 80,
        e.y = 435,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gondb_panel1_jlhf_png",
        e.x = 80,
        e.y = 525,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP每日额外获得2次挑战机会",
        e.textColor = 11432703,
        e.x = 472,
        e.y = 574,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜对手可前进一步并有概率获得          夜魔之心",
        e.textColor = 16769906,
        e.x = 395,
        e.y = 50,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "使用          可以缩短距离，追上狂刹即可通过关卡",
        e.textColor = 16769906,
        e.x = 395,
        e.y = 80,
        e
    },
    n.rightInfo_i = function() {
        var e = new eui.Group;
        return this.rightInfo = e,
        e.x = 937,
        e.y = 135,
        e.elementsContent = [this._Image9_i(), this.btnSign_i(), this.imghasSign_i(), this.btnReduce_i(), this._Label4_i(), this._Image10_i(), this.btnBuy_i(), this.btnFight_i(), this._Image11_i(), this.txt_leftTime_i(), this._Label5_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_shangde_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnSign_i = function() {
        var e = new eui.Image;
        return this.btnSign = e,
        e.source = "gondb_panel1_btnsign_png",
        e.x = 52,
        e.y = 111,
        e
    },
    n.imghasSign_i = function() {
        var e = new eui.Image;
        return this.imghasSign = e,
        e.source = "gondb_panel1_hasSign_png",
        e.x = 52,
        e.y = 111,
        e
    },
    n.btnReduce_i = function() {
        var e = new eui.Image;
        return this.btnReduce = e,
        e.source = "gondb_panel1_btnreduce_png",
        e.visible = !0,
        e.x = 28,
        e.y = 219,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗           X1",
        e.textColor = 11367423,
        e.x = 50,
        e.y = 198,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_1705367_kb_png",
        e.x = 89,
        e.y = 192,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "gondb_panel1_btnbuy_png",
        e.x = 28,
        e.y = 277,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gondb_panel1_btnfight_png",
        e.visible = !0,
        e.x = 28,
        e.y = 277,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel1_zu_277_png",
        e.x = 125,
        e.y = 273,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "(9/9)",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 38,
        e.x = 137,
        e.y = 275,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "额外获得一次挑战次数",
        e.textColor = 9926911,
        e.visible = !0,
        e.x = 15,
        e.y = 51,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.godOfNightDemonBlake.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "pet3", "pet4", "pet5", "pet6", "grp_pets", "jindu", "bar_value", "btnAddItem", "txt_itemNum", "bar", "rb_enemy1", "rb_enemy2", "rb_enemy3", "rb_enemy4", "rb_enemy5", "rb_enemy6", "a_1putong", "pet1_cur", "pet1_not", "pet1_pass", "a_2putong", "pet2_cur", "pet2_not", "pet2_pass", "a_3putong", "pet3_cur", "pet3_not", "pet3_pass", "a_4putong", "pet4_cur", "pet4_not", "pet4_pass", "a_5putong", "pet5_cur", "pet5_not", "pet5_pass", "a_6putong", "pet6_not", "pet6_cur", "pet6_pass", "rb", "btnFast", "btnAdd", "btnFight", "txt_leftTime", "btnOnekey", "btnBag", "btnCure", "main"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.main_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "gondb_panel2_jindu_png",
            e.visible = !0,
            e.width = 264,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0), new eui.SetProperty("hasPass", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_1putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_1xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.visible = !0,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_2putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_2xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_3putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_3xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_4putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_4xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_5putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_5xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["select", "hasPass"],
            this.elementsContent = [this._Image1_i(), this.select_i(), this._Image2_i(), this.hasPass_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_6putong_png",
            e.visible = !0,
            e.x = 18,
            e.y = 8,
            e
        },
        n.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "gondb_panel2_6xuanzhong_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_zu_7_png",
            e.visible = !1,
            e.x = 20,
            e.y = 10,
            e
        },
        n.hasPass_i = function() {
            var e = new eui.Group;
            return this.hasPass = e,
            e.x = 20,
            e.y = 5,
            e.elementsContent = [this._Rect1_i(), this._Image3_i()],
            e
        },
        n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = .6,
            e.height = 54,
            e.width = 162,
            e.x = 0,
            e.y = 4,
            e
        },
        n._Image3_i = function() {
            var e = new eui.Image;
            return e.source = "gondb_panel2_yihuode_png",
            e.visible = !0,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gondb_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    u.main_i = function() {
        var e = new eui.Group;
        return this.main = e,
        e.horizontalCenter = -12,
        e.width = 1130,
        e.y = 50,
        e.elementsContent = [this._Label1_i(), this.grp_pets_i(), this._Image2_i(), this._Image3_i(), this.bar_i(), this.rb_i(), this.btnFast_i(), this.btnAdd_i(), this.btnFight_i(), this._Image11_i(), this.txt_leftTime_i(), this.btnOnekey_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Label2_i(), this._Label3_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    u._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP每日额外获得1次挑战机会",
        e.textColor = 11432703,
        e.x = 462,
        e.y = 542,
        e
    },
    u.grp_pets_i = function() {
        var e = new eui.Group;
        return this.grp_pets = e,
        e.x = 541,
        e.y = 87,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i(), this.pet6_i(), this._Image1_i()],
        e
    },
    u.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "gondb_panel2_2808_png",
        e.x = 2,
        e.y = 20,
        e
    },
    u.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "gondb_panel2_2815_png",
        e.x = 2,
        e.y = 2,
        e
    },
    u.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "gondb_panel2_2812_png",
        e.x = 42,
        e.y = 55,
        e
    },
    u.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "gondb_panel2_2823_png",
        e.x = 0,
        e.y = 10,
        e
    },
    u.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.source = "gondb_panel2_2820_png",
        e.x = 2,
        e.y = 6,
        e
    },
    u.pet6_i = function() {
        var e = new eui.Image;
        return this.pet6 = e,
        e.source = "gondb_panel2_2829_png",
        e.visible = !0,
        e.x = 38,
        e.y = 0,
        e
    },
    u._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_mainpanel_ti2_png",
        e.x = 112.131,
        e.y = 332.492,
        e
    },
    u._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_2833_png",
        e.x = 0,
        e.y = 47,
        e
    },
    u._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_zu_3_png",
        e.x = 319,
        e.y = 40,
        e
    },
    u.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 146,
        e.y = 465,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.jindu_i(), this.bar_value_i(), this._Image6_i(), this.btnAddItem_i(), this._Image7_i(), this._Image8_i(), this.txt_itemNum_i()],
        e
    },
    u._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_jx_903_kb_2_png",
        e.x = 25,
        e.y = 25,
        e
    },
    u._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_jx_903_kb_png",
        e.x = 34,
        e.y = 33,
        e
    },
    u.jindu_i = function() {
        var e = new eui.Image;
        return this.jindu = e,
        e.source = "gondb_panel2_jindu_png",
        e.visible = !1,
        e.x = 34,
        e.y = 33,
        e
    },
    u.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.height = 9,
        e.maximum = 60,
        e.value = 0,
        e.width = 264,
        e.x = 34,
        e.y = 33,
        e.skinName = n,
        e
    },
    u._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_juxing_26_png",
        e.visible = !0,
        e.x = 27,
        e.y = 0,
        e
    },
    u.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "gondb_panel1_btnadd_png",
        e.x = 122,
        e.y = 2,
        e
    },
    u._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_img_orange_reddot_png",
        e.x = 0,
        e.y = 23,
        e
    },
    u._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = .8,
        e.scaleY = .8,
        e.source = "gondb_panel2_1705400_png",
        e.x = 27,
        e.y = 1,
        e
    },
    u.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "00/00",
        e.textAlign = "right",
        e.textColor = 16773120,
        e.width = 62,
        e.x = 56,
        e.y = 0,
        e
    },
    u.rb_i = function() {
        var e = new eui.Group;
        return this.rb = e,
        e.x = 907,
        e.y = 22,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i(), this.rb_enemy4_i(), this.rb_enemy5_i(), this.rb_enemy6_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        e
    },
    u._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_xz_1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_yzds_png",
        e.x = 98,
        e.y = 14,
        e
    },
    u.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !1,
        e.x = 8,
        e.y = 42,
        e.skinName = i,
        e
    },
    u.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !1,
        e.x = 8,
        e.y = 107,
        e.skinName = a,
        e
    },
    u.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !1,
        e.x = 8,
        e.y = 173,
        e.skinName = o,
        e
    },
    u.rb_enemy4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy4 = e,
        e.groupName = "enemyChoose",
        e.value = "4",
        e.visible = !1,
        e.x = 8,
        e.y = 235,
        e.skinName = r,
        e
    },
    u.rb_enemy5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy5 = e,
        e.groupName = "enemyChoose",
        e.value = "5",
        e.visible = !1,
        e.x = 8,
        e.y = 297,
        e.skinName = s,
        e
    },
    u.rb_enemy6_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy6 = e,
        e.groupName = "enemyChoose",
        e.value = "6",
        e.visible = !1,
        e.x = 8,
        e.y = 359,
        e.skinName = _,
        e
    },
    u._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 42,
        e.elementsContent = [this.a_1putong_i(), this.pet1_cur_i(), this.pet1_not_i(), this.pet1_pass_i()],
        e
    },
    u.a_1putong_i = function() {
        var e = new eui.Image;
        return this.a_1putong = e,
        e.source = "gondb_panel2_1putong_png",
        e.visible = !0,
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet1_cur_i = function() {
        var e = new eui.Image;
        return this.pet1_cur = e,
        e.source = "gondb_panel2_1xuanzhong_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet1_not_i = function() {
        var e = new eui.Image;
        return this.pet1_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.visible = !1,
        e.x = 20,
        e.y = 10,
        e
    },
    u.pet1_pass_i = function() {
        var e = new eui.Image;
        return this.pet1_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 107,
        e.elementsContent = [this.a_2putong_i(), this.pet2_cur_i(), this.pet2_not_i(), this.pet2_pass_i()],
        e
    },
    u.a_2putong_i = function() {
        var e = new eui.Image;
        return this.a_2putong = e,
        e.source = "gondb_panel2_2putong_png",
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet2_cur_i = function() {
        var e = new eui.Image;
        return this.pet2_cur = e,
        e.source = "gondb_panel2_2xuanzhong_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet2_not_i = function() {
        var e = new eui.Image;
        return this.pet2_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.visible = !0,
        e.x = 20,
        e.y = 11,
        e
    },
    u.pet2_pass_i = function() {
        var e = new eui.Image;
        return this.pet2_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 173,
        e.elementsContent = [this.a_3putong_i(), this.pet3_cur_i(), this.pet3_not_i(), this.pet3_pass_i()],
        e
    },
    u.a_3putong_i = function() {
        var e = new eui.Image;
        return this.a_3putong = e,
        e.source = "gondb_panel2_3putong_png",
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet3_cur_i = function() {
        var e = new eui.Image;
        return this.pet3_cur = e,
        e.source = "gondb_panel2_3xuanzhong_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet3_not_i = function() {
        var e = new eui.Image;
        return this.pet3_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.x = 20,
        e.y = 10,
        e
    },
    u.pet3_pass_i = function() {
        var e = new eui.Image;
        return this.pet3_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u._Group4_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 235,
        e.elementsContent = [this.a_4putong_i(), this.pet4_cur_i(), this.pet4_not_i(), this.pet4_pass_i()],
        e
    },
    u.a_4putong_i = function() {
        var e = new eui.Image;
        return this.a_4putong = e,
        e.source = "gondb_panel2_4putong_png",
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet4_cur_i = function() {
        var e = new eui.Image;
        return this.pet4_cur = e,
        e.source = "gondb_panel2_4xuanzhong_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet4_not_i = function() {
        var e = new eui.Image;
        return this.pet4_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.visible = !0,
        e.x = 20,
        e.y = 10,
        e
    },
    u.pet4_pass_i = function() {
        var e = new eui.Image;
        return this.pet4_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u._Group5_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 297,
        e.elementsContent = [this.a_5putong_i(), this.pet5_cur_i(), this.pet5_not_i(), this.pet5_pass_i()],
        e
    },
    u.a_5putong_i = function() {
        var e = new eui.Image;
        return this.a_5putong = e,
        e.source = "gondb_panel2_5putong_png",
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet5_cur_i = function() {
        var e = new eui.Image;
        return this.pet5_cur = e,
        e.source = "gondb_panel2_5xuanzhong_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet5_not_i = function() {
        var e = new eui.Image;
        return this.pet5_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.visible = !0,
        e.x = 20,
        e.y = 10,
        e
    },
    u.pet5_pass_i = function() {
        var e = new eui.Image;
        return this.pet5_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u._Group6_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 8,
        e.y = 359,
        e.elementsContent = [this.a_6putong_i(), this.pet6_not_i(), this.pet6_cur_i(), this.pet6_pass_i()],
        e
    },
    u.a_6putong_i = function() {
        var e = new eui.Image;
        return this.a_6putong = e,
        e.source = "gondb_panel2_6putong_png",
        e.x = 18,
        e.y = 8,
        e
    },
    u.pet6_not_i = function() {
        var e = new eui.Image;
        return this.pet6_not = e,
        e.source = "gondb_panel2_zu_7_png",
        e.visible = !0,
        e.x = 20,
        e.y = 10,
        e
    },
    u.pet6_cur_i = function() {
        var e = new eui.Image;
        return this.pet6_cur = e,
        e.source = "gondb_panel2_6xuanzhong_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet6_pass_i = function() {
        var e = new eui.Image;
        return this.pet6_pass = e,
        e.source = "gondb_panel2_yihuode_png",
        e.visible = !0,
        e.x = 20,
        e.y = 5,
        e
    },
    u.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "gondb_panel2_btnfast_png",
        e.x = 579,
        e.y = 472,
        e
    },
    u.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "gondb_panel2_btnadd_png",
        e.x = 732,
        e.y = 472,
        e
    },
    u.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gondb_panel2_btnfight_png",
        e.visible = !1,
        e.x = 732,
        e.y = 472,
        e
    },
    u._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_zu_8_png",
        e.visible = !0,
        e.x = 829,
        e.y = 468,
        e
    },
    u.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "9/9",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 38,
        e.x = 840,
        e.y = 470,
        e
    },
    u.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gondb_panel2_btnonekey_png",
        e.x = 1034,
        e.y = 469,
        e
    },
    u._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_tipsbg_png",
        e.x = 238,
        e.y = 0,
        e
    },
    u._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_1705400_png",
        e.x = 435,
        e.y = 6,
        e
    },
    u._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel2_1705400_png",
        e.x = 630,
        e.y = 6,
        e
    },
    u._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜对手可获得          除恶令，凑齐60个          即可领取布莱克完全体",
        e.textColor = 16769906,
        e.x = 304,
        e.y = 11,
        e
    },
    u._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "保持连胜可挑战下一个对手，战败则需从头开始",
        e.textColor = 16769906,
        e.x = 388,
        e.y = 41,
        e
    },
    u.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gondb_panel2_jlbb_png",
        e.x = 26,
        e.y = 403,
        e
    },
    u.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gondb_panel2_jlhf_png",
        e.x = 26,
        e.y = 493,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.godOfNightDemonBlake.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnBag", "btnAdd", "btnFight", "txt_leftTime", "btnCure", "txt_overTime", "zu_6", "bar_value", "btnOneKey", "btnWu", "btnBuy1", "hasGet1", "btnGet1", "reward1", "btnTe", "btnBuy2", "hasGet2", "btnGet2", "reward2", "btnKe", "btnBuy3", "hasGet3", "btnGet3", "reward3", "grp_main"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_main_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.height = 376,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "gondb_panel3_zu_6_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gondb_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_main_i = function() {
        var e = new eui.Group;
        return this.grp_main = e,
        e.horizontalCenter = -13,
        e.width = 1110,
        e.y = 52,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this._Image2_i(), this.btnBag_i(), this.btnAdd_i(), this.btnFight_i(), this._Image3_i(), this.txt_leftTime_i(), this.btnCure_i(), this._Image4_i(), this._Label2_i(), this.txt_overTime_i(), this._Image5_i(), this.zu_6_i(), this.bar_value_i(), this.btnOneKey_i(), this.reward1_i(), this.reward2_i(), this.reward3_i(), this._Image6_i(), this._Label3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_tuceng_41_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP赛尔每日免费次数翻倍",
        e.textColor = 11432703,
        e.x = 870,
        e.y = 560,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_anniubg_png",
        e.x = 829,
        e.y = 458,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gondb_panel3_jlbb_png",
        e.x = 18,
        e.y = 401,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "gondb_panel2_btnadd_png",
        e.x = 894,
        e.y = 481,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gondb_panel3_btnfight_png",
        e.visible = !0,
        e.x = 894,
        e.y = 481,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_zu_5_png",
        e.x = 991,
        e.y = 477,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "9/9",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 35,
        e.x = 1005,
        e.y = 479,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gondb_panel3_jlhf_png",
        e.x = 18,
        e.y = 491,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_jx_907_kb_png",
        e.x = 813,
        e.y = 430,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已击败",
        e.textColor = 12877567,
        e.x = 843,
        e.y = 433,
        e
    },
    i.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9/9",
        e.textColor = 16775806,
        e.x = 904,
        e.y = 430,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_barbg_png",
        e.x = 940,
        e.y = 66,
        e
    },
    i.zu_6_i = function() {
        var e = new eui.Image;
        return this.zu_6 = e,
        e.source = "gondb_panel3_zu_6_png",
        e.visible = !1,
        e.x = 948,
        e.y = 73,
        e
    },
    i.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.direction = "btt",
        e.height = 375,
        e.maximum = 90,
        e.value = 0,
        e.width = 19,
        e.x = 948,
        e.y = 73,
        e.skinName = n,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "gondb_panel3_btnyjqk_png",
        e.x = 315,
        e.y = 465,
        e
    },
    i.reward1_i = function() {
        var e = new eui.Group;
        return this.reward1 = e,
        e.x = 992,
        e.y = 45,
        e.elementsContent = [this.btnWu_i(), this.btnBuy1_i(), this.hasGet1_i(), this.btnGet1_i()],
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "gondb_panel3_diwujineng_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnBuy1_i = function() {
        var e = new eui.Image;
        return this.btnBuy1 = e,
        e.source = "gondb_panel3_btnbuy_png",
        e.x = 7,
        e.y = 104,
        e
    },
    i.hasGet1_i = function() {
        var e = new eui.Image;
        return this.hasGet1 = e,
        e.source = "gondb_panel3_yijihuo_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnGet1_i = function() {
        var e = new eui.Image;
        return this.btnGet1 = e,
        e.source = "gondb_panel3_kejihuo_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.reward2_i = function() {
        var e = new eui.Group;
        return this.reward2 = e,
        e.visible = !0,
        e.x = 822,
        e.y = 215,
        e.elementsContent = [this.btnTe_i(), this.btnBuy2_i(), this.hasGet2_i(), this.btnGet2_i()],
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "gondb_panel3_zstx_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnBuy2_i = function() {
        var e = new eui.Image;
        return this.btnBuy2 = e,
        e.source = "gondb_panel3_btnbuy_png",
        e.visible = !0,
        e.x = 7,
        e.y = 104,
        e
    },
    i.hasGet2_i = function() {
        var e = new eui.Image;
        return this.hasGet2 = e,
        e.source = "gondb_panel3_yijihuo_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnGet2_i = function() {
        var e = new eui.Image;
        return this.btnGet2 = e,
        e.source = "gondb_panel3_kejihuo_png",
        e.visible = !1,
        e.x = 1,
        e.y = 0,
        e
    },
    i.reward3_i = function() {
        var e = new eui.Group;
        return this.reward3 = e,
        e.x = 992,
        e.y = 305,
        e.elementsContent = [this.btnKe_i(), this.btnBuy3_i(), this.hasGet3_i(), this.btnGet3_i()],
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "gondb_panel3_zsky_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnBuy3_i = function() {
        var e = new eui.Image;
        return this.btnBuy3 = e,
        e.source = "gondb_panel3_btnbuy_png",
        e.x = 7,
        e.y = 104,
        e
    },
    i.hasGet3_i = function() {
        var e = new eui.Image;
        return this.hasGet3 = e,
        e.source = "gondb_panel3_yijihuo_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnGet3_i = function() {
        var e = new eui.Image;
        return this.btnGet3 = e,
        e.source = "gondb_panel3_kejihuo_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gondb_panel3_tipsbg_png",
        e.x = 170,
        e.y = 9,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "击败布莱克即可依次激活专属刻印、专属特性和第五技能",
        e.textColor = 16769906,
        e.x = 344,
        e.y = 17,
        e
    },
    t
} (eui.Skin);