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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.kingCassiusConst.forever_level1_boos1Damage, e.kingCassiusConst.forever_level1_boos2Damage, e.kingCassiusConst.forever_level1_boos3Damage, e.kingCassiusConst.forever_level1_seType, e.kingCassiusConst.forever_level2_boss1, e.kingCassiusConst.forever_level2_boss2, e.kingCassiusConst.forever_level2_boss3, e.kingCassiusConst.forever_level2_boss4, e.kingCassiusConst.forever_level2_state, e.kingCassiusConst.forever_level3_state, e.kingCassiusConst.forever_level3_times, e.kingCassiusConst.forever_level4_star1, e.kingCassiusConst.forever_level4_star2, e.kingCassiusConst.forever_level4_star3, e.kingCassiusConst.forever_level4_star4, e.kingCassiusConst.forever_levels_state, e.kingCassiusConst.forever_pet_state], [e.kingCassiusConst.daily_level3_times, e.kingCassiusConst.daily_level4_times, e.kingCassiusConst.daily_level5_times]),
            n.init([{
                panelName: e.kingCassiusConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.kingCassiusConst.PANEL1
            },
            {
                panelName: e.kingCassiusConst.PANEL2
            },
            {
                panelName: e.kingCassiusConst.PANEL3
            },
            {
                panelName: e.kingCassiusConst.PANEL4
            },
            {
                panelName: e.kingCassiusConst.PANEL5
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
    e.KingCassius = t,
    __reflect(t.prototype, "kingCassius.KingCassius")
} (kingCassius || (kingCassius = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
kingCassius; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "kingCassius.kingCassiusMainPanel",
        e.PANEL1 = "kingCassius.kingCassiusPanel1",
        e.PANEL2 = "kingCassius.kingCassiusPanel2",
        e.PANEL3 = "kingCassius.kingCassiusPanel3",
        e.PANEL4 = "kingCassius.kingCassiusPanel4",
        e.PANEL5 = "kingCassius.kingCassiusPanel5",
        e.kingCassius_CMD = 42275,
        e.forever_levels_state = 100570,
        e.forever_pet_state = 100571,
        e.forever_level1_seType = 100572,
        e.forever_level1_boos1Damage = 100573,
        e.forever_level1_boos2Damage = 100574,
        e.forever_level1_boos3Damage = 100575,
        e.forever_level2_state = 100576,
        e.forever_level3_state = 100577,
        e.forever_level3_times = 100578,
        e.forever_level4_star1 = 100579,
        e.forever_level4_star2 = 100580,
        e.forever_level4_star3 = 100581,
        e.forever_level4_star4 = 100582,
        e.forever_level2_boss1 = 100583,
        e.forever_level2_boss2 = 100584,
        e.forever_level2_boss3 = 100585,
        e.forever_level2_boss4 = 100586,
        e.daily_level3_times = 18065,
        e.daily_level4_times = 18066,
        e.daily_level5_times = 18067,
        e
    } ();
    e.kingCassiusConst = t,
    __reflect(t.prototype, "kingCassius.kingCassiusConst")
} (kingCassius || (kingCassius = {}));
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
    return new(n || (n = Promise))(function(a, s) {
        function _(e) {
            try {
                u(i.next(e))
            } catch(t) {
                s(t)
            }
        }
        function r(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                s(t)
            }
        }
        function u(e) {
            e.done ? a(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, r)
        }
        u((i = i.apply(e, t || [])).next())
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
        for (; u;) try {
            if (a = 1, s && (_ = s[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(s, n[1])).done) return _;
            switch (s = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                s = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (_ = u.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < _[1]) {
                    u.label = _[1],
                    _ = n;
                    break
                }
                if (_ && u.label < _[2]) {
                    u.label = _[2],
                    u.ops.push(n);
                    break
                }
                _[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            s = 0
        } finally {
            a = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, s, _, r, u = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return r = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this
    }),
    r
},
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 138,
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(133, this, "kc_mainpanel_wkxs_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "kc_mainpanel_btncollected_png": "kc_mainpanel_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【群山守护】"),
                t.service.openPanel(e.kingCassiusConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【山神指引】"),
                t.service.openPanel(e.kingCassiusConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【贯通地脉】"),
                t.service.openPanel(e.kingCassiusConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【王者之力】"),
                t.service.openPanel(e.kingCassiusConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【能力提升】"),
                t.service.openPanel(e.kingCassiusConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3170,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【领取精灵】"),
                SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [13, 0],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    var n = [247978, 247979, 247980, 247981],
                    i = t.service.getValue(e.kingCassiusConst.forever_levels_state);
                    BuyProductManager.buyProductBySocket(n[i],
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [12, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnDiscount,
            function() {
                var t = new e.OneKeyPop,
                n = PopViewManager.createDefaultStyleObject();
                n.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(t, n)
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
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "kc_mainpanel_btncollected_png": "kc_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            for (var t = this.service.getValue(e.kingCassiusConst.forever_levels_state), n = 1; 4 >= n; n++) this["hasDone" + n].visible = t > n - 1;
            DisplayUtil.setEnabled(this.btn1, 1 > t, t >= 1),
            DisplayUtil.setEnabled(this.btn2, 1 == t, 1 != t),
            DisplayUtil.setEnabled(this.btn3, 2 == t, 2 != t),
            DisplayUtil.setEnabled(this.btn4, 3 == t, 3 != t),
            this.btnGet.visible = 4 == t,
            this.btnDiscount.visible = this.hasPet.visible = t >= 5,
            this.btnOneKey.visible = 4 > t;
            for (var i = this.service.getValue(e.kingCassiusConst.forever_pet_state), a = 0, n = 0; 3 > n; n++) 1 == KTool.getBit(i, n + 1) && a++;
            DisplayUtil.setEnabled(this.btnUp, 3 != a, 3 == a),
            DisplayUtil.setEnabled(this.btnDiscount, 6 > t, 6 == t)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BasicPanel);
    e.kingCassiusMainPanel = t,
    __reflect(t.prototype, "kingCassius.kingCassiusMainPanel")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftValue = 0,
            n.rightValue = 1,
            n.leftStr = ["所有技能先制+2", "BOSS造成的伤害降低50%", "造成的伤害提升100%"],
            n.petId = [3135, 3071, 3044],
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.rbGroup1 = this.rb_1.group,
            this.rbGroup2 = this.rb_enemy1.group,
            this.name = "kingCassius.kingCassiusPanel1",
            this.addEvents(),
            this.showEnemy()
        },
        n.prototype.showEnemy = function() {
            var t = this;
            this.grp_RightInfo.visible || (this.grp_RightInfo.visible = !0);
            for (var n = [], i = 1; 3 >= i; i++) this.service.getValue(100572 + i) < 5e3 && n.push(i);
            if (0 == n.length) {
                this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
                this.rbGroup2.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this),
                EventManager.removeAll(this);
                var a = "三只精灵均已被击败，卡修斯成功逃出邪恶的封锁!至尊获得王·卡修斯价格仅需<font color='#ff0000'>778</font>钻石";
                return void Alarm.show(a,
                function() {
                    t.service.openPanel(e.kingCassiusConst.PANEL2)
                },
                this)
            }
            this.rbGroup2.selectedValue = n[0],
            this.rightValue = n[0],
            this.update()
        },
        n.prototype.addEvents = function() {
            var t = this;
            this.rbGroup1.addEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
            this.rbGroup2.addEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247982, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [11, 1],
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
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247986, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [1, t.rightValue],
                        function() {
                            t.onfightOver()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                var n = t.leftValue > 0 ? 4 * (t.rightValue - 1) + t.leftValue: 4 * t.rightValue;
                SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [2, n],
                function() {
                    0 == t.leftValue ? Alert.show("你还没有领取大地的祝福，确定要直接开始战斗吗？",
                    function() {
                        StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "群山守护关卡-点击【开始挑战】时没选择BUFF"),
                        SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [411, 0, 0, 0, 0, 0])
                    }) : SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [411, 0, 0, 0, 0, 0])
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onfightOver, this)
        },
        n.prototype.onfightOver = function() {
            var e = this,
            t = this.service.getValue(100572 + this.rightValue);
            this.service.updateValues().then(function() {
                var n = e.service.getValue(100572 + e.rightValue);
                if (5e3 > t && n >= 5e3) {
                    var i = "伤害达到5000，成功击败" + PetXMLInfo.getName(e.petId[e.rightValue - 1]);
                    BubblerManager.getInstance().showText(i)
                }
                e.showEnemy()
            })
        },
        n.prototype.onChangeLeft = function() {
            this.leftValue = ~~this.rbGroup1.selectedValue,
            this.txt_eff.text = this.leftStr[this.leftValue - 1]
        },
        n.prototype.onChangeRight = function() {
            this.rightValue = ~~this.rbGroup2.selectedValue,
            this.update()
        },
        n.prototype.update = function() {
            var t = this;
            this.txt_petName.text = PetXMLInfo.getName(this.petId[this.rightValue - 1]);
            var n = this.service.getValue(100572 + this.rightValue);
            this.txt_damage.text = n + "/5000",
            this.bar_damage.value = n;
            for (var i = this.service.getValue(e.kingCassiusConst.forever_levels_state), a = i >= 1, s = 1; 3 >= s; s++) this["enemy" + s].visible = this.rightValue == s,
            this["rb_enemy" + s].pass.visible = this.service.getValue(100572 + s) >= 5e3,
            this["rb_enemy" + s].touchEnabled = this.service.getValue(100572 + s) < 5e3;
            if (DisplayUtil.setEnabled(this.btnFast, 5e3 > n, n >= 5e3), DisplayUtil.setEnabled(this.btnFight, 5e3 > n, n >= 5e3), a) {
                this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
                this.rbGroup2.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this),
                EventManager.removeAll(this);
                var _ = "三只精灵均已被击败，卡修斯成功逃出邪恶的封锁!至尊获得王·卡修斯价格仅需<font color='#ff0000'>778</font>钻石";
                Alarm.show(_,
                function() {
                    t.service.openPanel(e.kingCassiusConst.PANEL2)
                },
                this)
            }
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
            this.rbGroup2.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this)
        },
        n
    } (BasicPanel);
    e.kingCassiusPanel1 = t,
    __reflect(t.prototype, "kingCassius.kingCassiusPanel1")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.rightValue = 1,
            n.skinName = e.Panel2Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kc_panel2_sszy_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.rbGroup1 = this.rb_enemy1.group,
            this.name = "kingCassius.kingCassiusPanel2",
            this.txtInfo.textFlow = [{
                text: "使用从迪符里恩手中得到的山神信符   挑战多种精灵，将它们",
                style: {
                    textColor: 16772951
                }
            },
            {
                text: "均击败4次",
                style: {
                    textColor: 16711680
                }
            },
            {
                text: "，即可通过此关！",
                style: {
                    textColor: 16772951
                }
            }],
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this,
            n = ["玄小武", "特蒙勒", "岩石豆龙", "迪博威"];
            this.rbGroup1.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
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
            ImageButtonUtil.add(this.btnFight1,
            function() {
                FightManager.fightNoMapBoss(7392)
            },
            this),
            ImageButtonUtil.add(this.btnFight2,
            function() {
                return ItemManager.getNumByID(1709933) < t.rightValue ? (StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "山神指引关卡-点击右侧【开始挑战】时道具不足"), void BubblerManager.getInstance().showText("山神信符数量不足，挑战迪符里恩可获得")) : void FightManager.fightNoMapBoss(7392 + t.rightValue)
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247986 + t.rightValue, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [3, t.rightValue],
                        function() {
                            t.onfightOver(n)
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247983, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [11, 2],
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
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1709933,
                        productID: 247991
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(247991, n,
                        function() {
                            KTool.doExchange(9080, n,
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
                t.onfightOver(n)
            },
            this)
        },
        n.prototype.onfightOver = function(e) {
            var t = this,
            n = this.service.getValue(100582 + this.rightValue);
            this.service.updateValues().then(function() {
                if (FightManager.isWin) {
                    var i = t.service.getValue(100582 + t.rightValue);
                    if (4 == i && 3 == n) {
                        var a = "已击败4次，成功完成" + e[t.rightValue - 1] + "的考验";
                        BubblerManager.getInstance().showText(a)
                    }
                }
                t.update()
            })
        },
        n.prototype.onChangeTab = function() {
            this.rightValue = ~~this.rbGroup1.selectedValue,
            this.update()
        },
        n.prototype.update = function() {
            for (var t = this,
            n = this.service.getValue(e.kingCassiusConst.forever_level2_state), i = [], a = 1; 4 >= a; a++) {
                var s = 4 == this.service.getValue(100582 + a);
                this["rb_enemy" + a].hasDone.visible = s,
                this["rb_enemy" + a].touchEnabled = !s,
                s && i.push(a)
            }
            if (4 != i.length) {
                for (; i.indexOf(this.rightValue) > -1;) 4 != this.rightValue ? this.rightValue++:this.rightValue = 1;
                this.rb_enemy1.group.selectedValue = this.rightValue
            }
            if (0 != this.rightValue) {
                for (var a = 1; 4 >= a; a++) this["pet" + a].visible = this.rightValue == a;
                this.txt_need.text = "消耗      x" + this.rightValue;
                var _ = this.service.getValue(100582 + this.rightValue);
                this.txt_overTime.text = _ + "/4"
            }
            this.txt_itemNum.text = ItemManager.getNumByID(1709933) + "";
            var r = 1 == KTool.getBit(n, this.rightValue);
            DisplayUtil.setEnabled(this.btnOnekey, !r, r),
            DisplayUtil.setEnabled(this.btnFight2, !r, r);
            var u = this.service.getValue(e.kingCassiusConst.forever_levels_state),
            o = u >= 2;
            if (o) {
                EventManager.removeAll(this);
                var c = "卡修斯成功完成四只精灵的考验，融合了大地多变的力量！至尊获得王·卡修斯价格仅需<font color='#ff0000'>658</font>钻石！";
                Alarm.show(c,
                function() {
                    t.service.openPanel(e.kingCassiusConst.PANEL3)
                },
                this)
            }
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        n
    } (BasicPanel);
    e.kingCassiusPanel2 = t,
    __reflect(t.prototype, "kingCassius.kingCassiusPanel2")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel3Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kc_panel3_gtsm_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.name = "kingCassius.kingCassiusPanel3",
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
            this);
            for (var n = ["凡利迪", "幽冥邪龙", "维耶扎克", "魔瞳•伊洛维奇", "深渊狱神•哈迪斯"], i = function(i) {
                ImageButtonUtil.add(a["btnFight_" + i],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void FightManager.fightNoMapBoss(7396 + i)
                },
                a),
                ImageButtonUtil.add(a["btnFast_" + i],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(247991 + i, 1,
                        function() {
                            SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [4, i],
                            function() {
                                if (6 != i) {
                                    var e = "已击败" + n[i - 1] + "，抓紧时间再接再厉！";
                                    BubblerManager.getInstance().showText(e)
                                }
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                a)
            },
            a = this, s = 1; 6 >= s; s++) i(s);
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247984, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [11, 3],
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin ? t.service.updateValues().then(function() {
                    var i = t.service.getValue(e.kingCassiusConst.forever_level3_state);
                    if (6 != i) {
                        var a = "已击败" + n[i - 1] + "，抓紧时间再接再厉！";
                        BubblerManager.getInstance().showText(a)
                    }
                    t.update()
                }) : Alarm.show("战斗失败，卡修斯退回原点，请再次尝试",
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                },
                t)
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 2 - this.service.getValue(e.kingCassiusConst.daily_level3_times),
            this.txt_leftTime.text = "" + this.leftTime;
            var n = this.service.getValue(e.kingCassiusConst.forever_level3_times);
            this.grp_time.visible = !1,
            0 != n && (this.grp_time.visible = !0, this.service.registerClock(n + 1800,
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this, this.txt_time));
            for (var i = this.service.getValue(e.kingCassiusConst.forever_level3_state), a = 1; 6 >= a; a++) this["curPet" + a].visible = this["btnFight_" + a].visible = this["btnFast_" + a].visible = i == a - 1,
            this["pass" + a].visible = i > a - 1;
            this.txt_overTime.text = i + "/6";
            var s = this.service.getValue(e.kingCassiusConst.forever_levels_state),
            _ = s >= 3;
            if (_) {
                EventManager.removeAll(this);
                var r = "截断的地脉被成功贯通，卡修斯的力量变得流畅!至尊获得王·卡修斯价格仅需<font color='#ff0000'>498</font>钻石！";
                Alarm.show(r,
                function() {
                    t.service.openPanel(e.kingCassiusConst.PANEL4)
                },
                this)
            }
        },
        n
    } (BasicPanel);
    e.kingCassiusPanel3 = t,
    __reflect(t.prototype, "kingCassius.kingCassiusPanel3")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.curShowNumber = 0,
            n.skinName = e.Panel4Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kc_panel4_wzzl_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.name = "kingCassius.kingCassiusPanel4",
            this.grpBack.title.y = 10,
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247985, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [11, 4],
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
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1709934,
                        productID: 247998
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(247998, n,
                        function() {
                            KTool.doExchange(9081, n,
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
            ImageButtonUtil.add(this.btnAddTime,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247999, 1,
                    function() {
                        KTool.doExchange(9083, 1,
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                t)
            },
            this);
            for (var n = ["恨", "孤", "妒", "怨"], i = function(i) {
                ImageButtonUtil.add(a["btnLock_" + i],
                function() {
                    StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "王者之力关卡-点击任意【固定】按钮"),
                    Alert.show('你确定要消耗50个暗影尘埃，将情绪"' + n[i - 1] + '"的等级进行固定吗？固定的情绪战斗结束后不会变更星级',
                    function() {
                        return StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "王者之力关卡-点击【固定】按钮时道具不足"),
                        ItemManager.getNumByID(1709934) < 50 ? void BubblerManager.getInstance().showText("暗影尘埃数量不足，挑战卡修斯可获得") : void SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [6, i],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                a),
                ImageButtonUtil.add(a["btnUniock_" + i],
                function() {
                    StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "王者之力关卡-点击【取消】按钮");
                    var a = "你确定要取消固定情绪" + n[i - 1] + "吗？<font color='#ff0000'>取消固定战斗结束后该情绪星级可能发生变化</font>";
                    Alert.show(a,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [7, i],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                },
                a)
            },
            a = this, s = 1; 4 >= s; s++) i(s);
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void FightManager.fightNoMapBoss(7402 + t.curShowNumber)
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247999 + t.curShowNumber, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [5, 0],
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                t.service.updateValues().then(function() {
                    t.update()
                })
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 8 - this.service.getValue(e.kingCassiusConst.daily_level4_times);
            var n = this.service.getValue(e.kingCassiusConst.forever_pet_state);
            this.txt_leftTime.text = "" + this.leftTime,
            this.txtCoin2.text = ItemManager.getNumByID(1709934) + "";
            for (var i = 0,
            a = 1; 4 >= a; a++) {
                var s = 1 == KTool.getBit(n, 3 + a);
                this["lock" + a].visible = s,
                this["btnLock_" + a].visible = !s,
                this["btnUniock_" + a].visible = s,
                this["item" + a + "_Light"].visible = s;
                var _ = this.service.getValue(100578 + a);
                i += _;
                for (var r = 1; 3 >= r; r++) this["star" + a + r].visible = _ >= r
            }
            this.pet1.visible = i >= 0 && 3 >= i,
            this.curShowNumber = 1;
            for (var a = 2; 4 >= a; a++) {
                var u = i >= 3 * (a - 1) + 1 && 3 * a >= i;
                this["pet" + a].visible = u,
                this.curShowNumber = u ? a: this.curShowNumber
            }
            var o = this.service.getValue(e.kingCassiusConst.forever_levels_state),
            c = o >= 4;
            if (c) {
                EventManager.removeAll(this);
                var g = "卡修斯根除了自己的负面情绪，进化成功！可以领取王·卡修斯";
                Alarm.show(g,
                function() {
                    t.service.backToMainPanel()
                },
                this)
            }
            DisplayUtil.setEnabled(this.btnAddTime, 0 == this.leftTime, this.leftTime > 0)
        },
        n
    } (BasicPanel);
    e.kingCassiusPanel4 = t,
    __reflect(t.prototype, "kingCassius.kingCassiusPanel4")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.skinName = e.Panel5Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kc_panel5_nlys_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1709932,
                        productID: 248004
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(248004, n,
                        function() {
                            KTool.doExchange(9082, n,
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
            ImageButtonUtil.add(this.btnTe,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "能力提升关卡-点击三件套任意一个查看详情"),
                t.service.showPetEff(3170)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "能力提升关卡-点击三件套任意一个查看详情");
                var e = {
                    id: 19843
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "能力提升关卡-点击三件套任意一个查看详情");
                var e;
                CountermarkXMLInfo.isminMark(40677) ? (e = {},
                e.ins = 40677, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40677, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var n = [30, 35, 40], i = function(i) {
                ImageButtonUtil.add(a["btnTiaozhan_" + i],
                function() {
                    return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(t.isclickFight || (t.isclickFight = !0, FightManager.fightNoMapBoss(7406 + i)))
                },
                a),
                ImageButtonUtil.add(a["btnDuihuan_" + i],
                function() {
                    if (!PetManager.isDefaultPet(3170)) return void Alarm.show("请将王·卡修斯放入出战背包首发！",
                    function() {
                        t.service.showPetBag()
                    },
                    t);
                    if (ItemManager.getNumByID(1709932) < n[i - 1]) return StatLogger.log("20230331版本系统功能", "王·卡修斯搬迁", "能力提升关卡-点击任意【兑换】按钮时道具不足"),
                    void BubblerManager.getInstance().showText("幽暗地岩数量不足，无法兑换");
                    var a = "";
                    3 == i ? a = "成功兑换第五技能，可以前往背包查看": 2 == i && (a = "成功兑换专属特性，可以前往背包查看"),
                    SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [9, i],
                    function() {
                        1 != i && Alert.show(a,
                        function() {
                            t.service.showPetBag()
                        }),
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                },
                a),
                ImageButtonUtil.add(a["btnFa_" + i],
                function() {
                    return PetManager.isDefaultPet(3170) ? void PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(248004 + i, 1,
                        function() {
                            SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [10, i],
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t) : void Alarm.show("请将王·卡修斯放入出战背包首发！",
                    function() {
                        t.service.showPetBag()
                    },
                    t)
                },
                a)
            },
            a = this, s = 1; 3 >= s; s++) i(s);
            ImageButtonUtil.add(this.btnBag,
            function() {
                t.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this)
        },
        n.prototype.update = function() {
            this.isclickFight = !1;
            var t = this.service.getValue(e.kingCassiusConst.forever_pet_state);
            this.leftTime = 10 - this.service.getValue(e.kingCassiusConst.daily_level5_times),
            this.txt_leftTime.text = this.leftTime + "",
            this.txt_itemNum.text = ItemManager.getNumByID(1709932) + "";
            for (var n = 0,
            i = 1; 3 >= i; i++) {
                var a = 1 == KTool.getBit(t, i);
                DisplayUtil.setEnabled(this["btnDuihuan_" + i], !a, a),
                DisplayUtil.setEnabled(this["btnFa_" + i], !a, a),
                a && n++
            }
            3 == n && this.service.backToMainPanel()
        },
        n
    } (BasicPanel);
    e.kingCassiusPanel5 = t,
    __reflect(t.prototype, "kingCassius.kingCassiusPanel5")
} (kingCassius || (kingCassius = {}));
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
kingCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = e.OnekeypopSkin,
            n
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            var t = this;
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
                return PetManager.isDefaultPet(3170) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247506, 1,
                    function() {
                        SocketConnection.sendByQueue(e.kingCassiusConst.kingCassius_CMD, [8, 0],
                        function() {
                            Alarm.show("恭喜你王·卡修斯超级极品成功！"),
                            t.update()
                        })
                    })
                },
                t) : void Alarm.show("请将王·卡修斯放入出战背包首发！",
                function() {
                    t.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            this.update()
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([100570],
            function(t) {
                var n = 6 == t[0];
                DisplayUtil.setEnabled(e.btnBuy, !n, n),
                UserInfoManager.getDiamond(function(t) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(t)
                },
                e)
            })
        },
        n
    } (PopView);
    e.OneKeyPop = t,
    __reflect(t.prototype, "kingCassius.OneKeyPop")
} (kingCassius || (kingCassius = {})),
window.kingCassius = window.kingCassius || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.kingCassius.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnCollect", "btnInfo", "btnDiscount", "btnOneKey", "btnUp", "btn1", "btn2", "btn3", "btn4", "btnGet", "hasPet", "hasDone1", "hasDone2", "hasDone3", "hasDone4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 1110,
        e.x = 15,
        e.y = 9,
        e.elementsContent = [this.btnCollect_i(), this.btnInfo_i(), this.btnDiscount_i(), this.btnOneKey_i(), this.btnUp_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.btn4_i(), this.btnGet_i(), this.hasPet_i(), this._Image1_i(), this.hasDone1_i(), this.hasDone2_i(), this.hasDone3_i(), this.hasDone4_i()],
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "kc_mainpanel_btncollect_png",
        e.x = 69,
        e.y = 478,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "kc_mainpanel_btninfo_png",
        e.x = 69,
        e.y = 544,
        e
    },
    n.btnDiscount_i = function() {
        var e = new eui.Image;
        return this.btnDiscount = e,
        e.source = "kc_mainpanel_btndiscount_png",
        e.x = 958,
        e.y = 534,
        e
    },
    n.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "kc_mainpanel_btnonekey_png",
        e.visible = !0,
        e.x = 958,
        e.y = 534,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "kc_mainpanel_btnup_png",
        e.x = 869,
        e.y = 534,
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "kc_mainpanel_btn1_png",
        e.x = 730,
        e.y = 69,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "kc_mainpanel_btn2_png",
        e.x = 752,
        e.y = 184,
        e
    },
    n.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "kc_mainpanel_btn3_png",
        e.x = 740,
        e.y = 299,
        e
    },
    n.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "kc_mainpanel_btn4_png",
        e.x = 715,
        e.y = 415,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "kc_mainpanel_btnget_png",
        e.visible = !0,
        e.x = 290,
        e.y = 534,
        e
    },
    n.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.source = "kc_mainpanel_haspet_png",
        e.visible = !0,
        e.x = 290,
        e.y = 534,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_mainpanel_lift_png",
        e.x = 60,
        e.y = 152,
        e
    },
    n.hasDone1_i = function() {
        var e = new eui.Image;
        return this.hasDone1 = e,
        e.source = "kc_mainpanel_yiwancheng_png",
        e.x = 747,
        e.y = 106,
        e
    },
    n.hasDone2_i = function() {
        var e = new eui.Image;
        return this.hasDone2 = e,
        e.source = "kc_mainpanel_yiwancheng_png",
        e.x = 769,
        e.y = 221,
        e
    },
    n.hasDone3_i = function() {
        var e = new eui.Image;
        return this.hasDone3 = e,
        e.source = "kc_mainpanel_yiwancheng_png",
        e.x = 757,
        e.y = 336,
        e
    },
    n.hasDone4_i = function() {
        var e = new eui.Image;
        return this.hasDone4 = e,
        e.source = "kc_mainpanel_yiwancheng_png",
        e.x = 732,
        e.y = 452,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeypopSkin.exml"] = window.kingCassius.OnekeypopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnAdd", "txt_diamond", "btnBuy", "btnClose"],
        this.height = 608,
        this.width = 934,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image4_i(), this.btnBuy_i(), this.btnClose_i()],
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_onekeypop_bg_png",
        e.x = 155,
        e.y = 264,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_onekeypop_tuceng_563_png",
        e.x = 203,
        e.y = 85,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_onekeypop_txtbg_png",
        e.x = 277,
        e.y = 514,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_onekeypop_zu_2_png",
        e.x = 281,
        e.y = 468,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kc_onekeypop_btnadd_png",
        e.x = 539,
        e.y = 513,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "您现在拥有钻石：",
        e.textColor = 16777215,
        e.x = 325,
        e.y = 517,
        e
    },
    n.txt_diamond_i = function() {
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
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_onekeypop_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "kc_onekeypop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "kc_onekeypop_btnlose_png",
        e.x = 900,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.kingCassius.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "xuanzhong", "txt_eff", "le", "btnOnekey", "enemy1", "enemy2", "enemy3", "txt_petName", "txt_damage", "bar_damage", "btnFight", "btnFast", "ri", "grp_RightInfo", "rb_1", "rb_2", "rb_3", "le1_up", "le1_down", "le2_up", "le2_down", "le3_up", "le3_down", "rb_enemy1", "rb_enemy2", "rb_enemy3", "enemyHead"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.xuanzhong_i(), this._Group5_i()]
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
            e.source = "kc_panel1_jindu_kb_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !1)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kc_panel1_le1_up_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_le1_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !1)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kc_panel1_le2_up_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_le2_down_png",
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !1)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "kc_panel1_le3_up_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_le3_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["pass"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel1_head1_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "kc_panel1_pass_png",
            e.visible = !0,
            e.x = 17,
            e.y = 9,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["pass"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel1_head2_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "kc_panel1_pass_png",
            e.visible = !0,
            e.x = 17,
            e.y = 9,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["pass"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.pass_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel1_head3_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "kc_panel1_pass_png",
            e.visible = !0,
            e.x = 17,
            e.y = 9,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    o.xuanzhong_i = function() {
        var e = new eui.Image;
        return this.xuanzhong = e,
        e.source = "kc_panel1_xuanzhong_png",
        e.visible = !1,
        e.x = 1052,
        e.y = 329,
        e
    },
    o._Group5_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 12,
        e.y = 18,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Label2_i(), this.le_i(), this.btnOnekey_i(), this.grp_RightInfo_i(), this._Image17_i(), this._Group4_i(), this._Label4_i(), this._Image18_i(), this.enemyHead_i(), this._Image20_i(), this._Image21_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_bg21_png",
        e.x = 161,
        e.y = 54,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_tuceng_1_png",
        e.x = 32,
        e.y = 92,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "领取伙伴祝福，挑战事半功倍！",
        e.textColor = 16288572,
        e.x = 412,
        e.y = 81,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_zu_1_png",
        e.x = 411,
        e.y = 139,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_title_png",
        e.x = 440,
        e.y = 0,
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_tipsbg_png",
        e.x = 97,
        e.y = 52,
        e
    },
    o._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "分别对三只邪恶精灵造成5000点伤害，即可通过此关！",
        e.textColor = 16772951,
        e.x = 275,
        e.y = 55,
        e
    },
    o.le_i = function() {
        var e = new eui.Group;
        return this.le = e,
        e.x = 137,
        e.y = 485,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this._Image8_i(), this.txt_eff_i()],
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_zu_35_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_913_kb_4_png",
        e.x = 35,
        e.y = 9,
        e
    },
    o._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_zfxg_png",
        e.x = 106,
        e.y = 6,
        e
    },
    o.txt_eff_i = function() {
        var e = new eui.Label;
        return this.txt_eff = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "请选择伙伴祝福",
        e.textAlign = "center",
        e.textColor = 15830335,
        e.width = 240,
        e.x = 30,
        e.y = 47,
        e
    },
    o.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kc_panel1_btnonekey_png",
        e.x = 983,
        e.y = 519,
        e
    },
    o.grp_RightInfo_i = function() {
        var e = new eui.Group;
        return this.grp_RightInfo = e,
        e.visible = !1,
        e.x = 543,
        e.y = 51,
        e.elementsContent = [this._Image9_i(), this.enemy1_i(), this.enemy2_i(), this.enemy3_i(), this._Image10_i(), this._Image11_i(), this.txt_petName_i(), this.ri_i()],
        e
    },
    o._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_bg21_png",
        e.x = 93,
        e.y = 0,
        e
    },
    o.enemy1_i = function() {
        var e = new eui.Image;
        return this.enemy1 = e,
        e.source = "kc_panel1_enemy1_png",
        e.visible = !0,
        e.x = 57,
        e.y = 72,
        e
    },
    o.enemy2_i = function() {
        var e = new eui.Image;
        return this.enemy2 = e,
        e.source = "kc_panel1_enemy2_png",
        e.visible = !0,
        e.x = 36,
        e.y = 71,
        e
    },
    o.enemy3_i = function() {
        var e = new eui.Image;
        return this.enemy3 = e,
        e.source = "kc_panel1_enemy3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 42,
        e
    },
    o._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_juxing_4_png",
        e.x = 111,
        e.y = 59,
        e
    },
    o._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_3_kb_png",
        e.x = 99,
        e.y = 57,
        e
    },
    o.txt_petName_i = function() {
        var e = new eui.Label;
        return this.txt_petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "怪物名字",
        e.textColor = 16777135,
        e.x = 174,
        e.y = 64,
        e
    },
    o.ri_i = function() {
        var e = new eui.Group;
        return this.ri = e,
        e.x = 59,
        e.y = 431,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Label3_i(), this.txt_damage_i(), this._Image16_i(), this.bar_damage_i(), this.btnFight_i(), this.btnFast_i()],
        e
    },
    o._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jindu_kb_2_png",
        e.x = 3,
        e.y = 3,
        e
    },
    o._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jindu_kb_3_png",
        e.visible = !0,
        e.x = 8,
        e.y = 8,
        e
    },
    o._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_6_kb_4_png",
        e.x = 0,
        e.y = 73,
        e
    },
    o._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_6_kb_5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9848126068372,
        e.text = "伤害:",
        e.textColor = 16644006,
        e.x = 103,
        e.y = 9,
        e
    },
    o.txt_damage_i = function() {
        var e = new eui.Label;
        return this.txt_damage = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "XXXX/5000",
        e.textColor = 16773439,
        e.x = 142,
        e.y = 10,
        e
    },
    o._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jindu_kb_4_png",
        e.x = 18,
        e.y = 28,
        e
    },
    o.bar_damage_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_damage = e,
        e.maximum = 5e3,
        e.value = 0,
        e.visible = !0,
        e.width = 282,
        e.x = 18,
        e.y = 28,
        e.skinName = n,
        e
    },
    o.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "kc_panel1_txtlabel_png",
        e.x = 172,
        e.y = 50,
        e
    },
    o.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "kc_panel1_yjzs_png",
        e.x = 62,
        e.y = 50,
        e
    },
    o._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_9042_png",
        e.x = 0,
        e.y = 101,
        e
    },
    o._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 4,
        e.y = 132,
        e.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this._Group1_i(), this._Group2_i(), this._Group3_i()],
        e
    },
    o.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "myChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    o.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "myChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 97,
        e.skinName = a,
        e
    },
    o.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "myChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 194,
        e.skinName = s,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.le1_up_i(), this.le1_down_i()],
        e
    },
    o.le1_up_i = function() {
        var e = new eui.Image;
        return this.le1_up = e,
        e.source = "kc_panel1_le1_up_png",
        e.x = 8,
        e.y = 5,
        e
    },
    o.le1_down_i = function() {
        var e = new eui.Image;
        return this.le1_down = e,
        e.source = "kc_panel1_le1_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 97,
        e.elementsContent = [this.le2_up_i(), this.le2_down_i()],
        e
    },
    o.le2_up_i = function() {
        var e = new eui.Image;
        return this.le2_up = e,
        e.source = "kc_panel1_le2_up_png",
        e.x = 8,
        e.y = 5,
        e
    },
    o.le2_down_i = function() {
        var e = new eui.Image;
        return this.le2_down = e,
        e.source = "kc_panel1_le2_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 194,
        e.elementsContent = [this.le3_up_i(), this.le3_down_i()],
        e
    },
    o.le3_up_i = function() {
        var e = new eui.Image;
        return this.le3_up = e,
        e.source = "kc_panel1_le3_up_png",
        e.x = 8,
        e.y = 5,
        e
    },
    o.le3_down_i = function() {
        var e = new eui.Image;
        return this.le3_down = e,
        e.source = "kc_panel1_le3_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "每场战斗前须\n重新选择",
        e.textAlign = "center",
        e.textColor = 16775591,
        e.visible = !1,
        e.width = 96,
        e.x = 19,
        e.y = 432,
        e
    },
    o._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_zfxg_png",
        e.x = 21,
        e.y = 106,
        e
    },
    o.enemyHead_i = function() {
        var e = new eui.Group;
        return this.enemyHead = e,
        e.x = 950,
        e.y = 109,
        e.elementsContent = [this._Image19_i(), this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i()],
        e
    },
    o._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_9043_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    o.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 10,
        e.skinName = _,
        e
    },
    o.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 110,
        e.skinName = r,
        e
    },
    o.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 200,
        e.skinName = u,
        e
    },
    o._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_9044_png",
        e.x = 948,
        e.y = 109,
        e
    },
    o._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel1_jx_9044_kb_png",
        e.x = 945,
        e.y = 109,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.kingCassius.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "rb_enemy1", "rb_enemy2", "rb_enemy3", "rb_enemy4", "pet1_up", "pet1_down", "pet2_up", "pet2_down", "pet3_up", "pet3_down", "pet4_up", "pet4_down", "btnFight1", "txt_overTime", "grp_overTime", "pet1", "pet2", "pet3", "pet4", "pets", "txt_need", "btnFight2", "btnFast", "grp_rightInfo", "txtInfo", "btnOnekey", "btnBag", "btnCure", "txt_itemNum", "btnadd"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group7_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasDone"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.hasDone_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel2_pet1_up_png",
            e.visible = !0,
            e.x = 11,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel2_pet1_down_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        n.hasDone_i = function() {
            var e = new eui.Image;
            return this.hasDone = e,
            e.source = "kc_panel2_hasDone_png",
            e.visible = !1,
            e.x = 22,
            e.y = 15,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasDone"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.hasDone_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel2_pet2_up_png",
            e.visible = !0,
            e.x = 11,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel2_pet2_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.hasDone_i = function() {
            var e = new eui.Image;
            return this.hasDone = e,
            e.source = "kc_panel2_hasDone_png",
            e.visible = !1,
            e.x = 22,
            e.y = 15,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasDone"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.hasDone_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel2_pet3_up_png",
            e.visible = !0,
            e.x = 11,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel2_pet3_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.hasDone_i = function() {
            var e = new eui.Image;
            return this.hasDone = e,
            e.source = "kc_panel2_hasDone_png",
            e.visible = !1,
            e.x = 22,
            e.y = 15,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasDone"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.hasDone_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "kc_panel2_pet4_up_png",
            e.visible = !0,
            e.x = 11,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "kc_panel2_pet4_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.hasDone_i = function() {
            var e = new eui.Image;
            return this.hasDone = e,
            e.source = "kc_panel2_hasDone_png",
            e.visible = !1,
            e.x = 22,
            e.y = 15,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group7_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -1.5,
        e.width = 1120,
        e.y = 19,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Group5_i(), this._Image7_i(), this._Image8_i(), this._Label1_i(), this._Image9_i(), this.btnFight1_i(), this.grp_rightInfo_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this.txtInfo_i(), this._Image16_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this._Group6_i()],
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_zu_314_png",
        e.x = 185,
        e.y = 216,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_zu_314_png",
        e.visible = !0,
        e.x = 582,
        e.y = 216,
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_zu_1_png",
        e.x = 163,
        e.y = 456,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_zu_1_png",
        e.x = 554,
        e.y = 456,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_jx_9043_kb_png",
        e.x = 827,
        e.y = 101,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_jx_9042_png",
        e.x = 926,
        e.y = 107,
        e
    },
    _._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 921,
        e.y = 111,
        e.elementsContent = [this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i(), this.rb_enemy4_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    _.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = n,
        e
    },
    _.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 93,
        e.skinName = i,
        e
    },
    _.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 186,
        e.skinName = a,
        e
    },
    _.rb_enemy4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy4 = e,
        e.groupName = "enemyChoose",
        e.value = "4",
        e.visible = !0,
        e.x = 0,
        e.y = 280,
        e.skinName = s,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.pet1_up_i(), this.pet1_down_i()],
        e
    },
    _.pet1_up_i = function() {
        var e = new eui.Image;
        return this.pet1_up = e,
        e.source = "kc_panel2_pet1_up_png",
        e.x = 11,
        e.y = 5,
        e
    },
    _.pet1_down_i = function() {
        var e = new eui.Image;
        return this.pet1_down = e,
        e.source = "kc_panel2_pet1_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 93,
        e.elementsContent = [this.pet2_up_i(), this.pet2_down_i()],
        e
    },
    _.pet2_up_i = function() {
        var e = new eui.Image;
        return this.pet2_up = e,
        e.source = "kc_panel2_pet2_up_png",
        e.x = 11,
        e.y = 5,
        e
    },
    _.pet2_down_i = function() {
        var e = new eui.Image;
        return this.pet2_down = e,
        e.source = "kc_panel2_pet2_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 4,
        e.y = 186,
        e.elementsContent = [this.pet3_up_i(), this.pet3_down_i()],
        e
    },
    _.pet3_up_i = function() {
        var e = new eui.Image;
        return this.pet3_up = e,
        e.source = "kc_panel2_pet3_up_png",
        e.x = 7,
        e.y = 5,
        e
    },
    _.pet3_down_i = function() {
        var e = new eui.Image;
        return this.pet3_down = e,
        e.source = "kc_panel2_pet3_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group4_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 4,
        e.y = 280,
        e.elementsContent = [this.pet4_up_i(), this.pet4_down_i()],
        e
    },
    _.pet4_up_i = function() {
        var e = new eui.Image;
        return this.pet4_up = e,
        e.source = "kc_panel2_pet4_up_png",
        e.x = 7,
        e.y = 5,
        e
    },
    _.pet4_down_i = function() {
        var e = new eui.Image;
        return this.pet4_down = e,
        e.source = "kc_panel2_pet4_down_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_2269_png",
        e.x = 111,
        e.y = 147,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_jx_904_kb_2_png",
        e.width = 202,
        e.x = 203,
        e.y = 487,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9965290620892,
        e.text = "战胜可得1~2个",
        e.textColor = 16777135,
        e.x = 244,
        e.y = 492,
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_tuceng_1_png",
        e.x = 346,
        e.y = 482,
        e
    },
    _.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 262,
        e.y = 516,
        e
    },
    _.grp_rightInfo_i = function() {
        var e = new eui.Group;
        return this.grp_rightInfo = e,
        e.visible = !0,
        e.x = 506,
        e.y = 107,
        e.elementsContent = [this.grp_overTime_i(), this.pets_i(), this._Image11_i(), this.txt_need_i(), this._Image12_i(), this.btnFight2_i(), this.btnFast_i()],
        e
    },
    _.grp_overTime_i = function() {
        var e = new eui.Group;
        return this.grp_overTime = e,
        e.x = 271,
        e.y = 0,
        e.elementsContent = [this._Image10_i(), this._Label2_i(), this.txt_overTime_i()],
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_juxinga_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已击败       次",
        e.textColor = 16743680,
        e.visible = !0,
        e.x = 22,
        e.y = 4,
        e
    },
    _.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "X/4",
        e.textColor = 14205491,
        e.visible = !0,
        e.x = 79,
        e.y = 4,
        e
    },
    _.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.visible = !0,
        e.x = 0,
        e.y = 25,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i()],
        e
    },
    _.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "kc_panel2_2663_png",
        e.x = 52,
        e.y = 120,
        e
    },
    _.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "kc_panel2_2382_png",
        e.x = 70,
        e.y = 12,
        e
    },
    _.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "kc_panel2_2461_png",
        e.visible = !0,
        e.x = 0,
        e.y = 23,
        e
    },
    _.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "kc_panel2_2291_png",
        e.visible = !0,
        e.x = 7,
        e.y = 0,
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_jx_904_kb_2_png",
        e.x = 194,
        e.y = 380,
        e
    },
    _.txt_need_i = function() {
        var e = new eui.Label;
        return this.txt_need = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗      x1",
        e.textColor = 16777135,
        e.x = 207,
        e.y = 385,
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_tuceng_1_png",
        e.x = 239,
        e.y = 374,
        e
    },
    _.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 202,
        e.y = 409,
        e
    },
    _.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "kc_panel2_btnfast_png",
        e.x = 102,
        e.y = 409,
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_zu_2_png",
        e.x = 190,
        e.y = 107,
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_title_png",
        e.x = 469,
        e.y = 0,
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_tipsbg_png",
        e.x = 124,
        e.y = 51,
        e
    },
    _.txtInfo_i = function() {
        var e = new eui.Label;
        return this.txtInfo = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "使用从迪符里恩手中得到的山神信符   挑战多种精灵，将它们均击败4次，即可通过此关！！",
        e.textColor = 16772951,
        e.x = 139,
        e.y = 54,
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_tuceng_1_png",
        e.x = 453,
        e.y = 46,
        e
    },
    _.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kc_panel2_btnonekey_png",
        e.x = 1010,
        e.y = 518,
        e
    },
    _.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kc_panel2_jlbb_png",
        e.x = 0,
        e.y = 420,
        e
    },
    _.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kc_panel2_jlhf_png",
        e.x = 0,
        e.y = 509,
        e
    },
    _._Group6_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 800,
        e.y = 0,
        e.elementsContent = [this._Image17_i(), this._Label3_i(), this.txt_itemNum_i(), this._Image18_i(), this.btnadd_i()],
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_juxing_904_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0053398873904,
        e.text = "山神信符：",
        e.textColor = 14259007,
        e.x = 68,
        e.y = 8,
        e
    },
    _.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textAlign = "left",
        e.textColor = 16769906,
        e.width = 80,
        e.x = 163,
        e.y = 8,
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel2_tuceng_1_png",
        e.x = 35,
        e.y = 0,
        e
    },
    _.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "kc_panel2_btnadd_png",
        e.x = 241,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.kingCassius.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_time", "grp_time", "pet1", "curPet1", "btnFight_1", "btnFast_1", "pass1", "pro1", "pet2", "curPet2", "btnFight_2", "btnFast_2", "pass2", "pro2", "pet3", "curPet3", "pass3", "btnFight_3", "btnFast_3", "pro3", "pet4", "curPet4", "pass4", "btnFight_4", "btnFast_4", "pro4", "pet5", "curPet5", "pass5", "btnFight_5", "btnFast_5", "pro5", "pet6", "curPet6", "pass6", "btnFight_6", "btnFast_6", "pro6", "txt_overTime", "content", "btnOnekey", "btnBag", "btnCure", "txt_leftTime"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -1,
        e.width = 1118,
        e.y = 19,
        e.elementsContent = [this.content_i(), this._Image6_i(), this._Image7_i(), this._Label8_i(), this._Label9_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this._Image8_i(), this._Label10_i(), this.txt_leftTime_i()],
        e
    },
    n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 69,
        e.y = 102,
        e.elementsContent = [this._Image1_i(), this.grp_time_i(), this._Image3_i(), this.pro1_i(), this.pro2_i(), this.pro3_i(), this.pro4_i(), this.pro5_i(), this.pro6_i(), this._Image4_i(), this._Image5_i(), this._Label7_i(), this.txt_overTime_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_zu_3172_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_time_i = function() {
        var e = new eui.Group;
        return this.grp_time = e,
        e.x = 368,
        e.y = 424,
        e.elementsContent = [this._Image2_i(), this._Label1_i(), this.txt_time_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_jx_913_kb_4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0112176557049,
        e.text = "剩余时间:",
        e.textColor = 16776107,
        e.x = 50,
        e.y = 3,
        e
    },
    n.txt_time_i = function() {
        var e = new eui.Label;
        return this.txt_time = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0112176557049,
        e.text = "XX:XX",
        e.textColor = 16772951,
        e.x = 133,
        e.y = 3,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_xz_2_png",
        e.touchEnabled = !1,
        e.x = 134,
        e.y = 69,
        e
    },
    n.pro1_i = function() {
        var e = new eui.Group;
        return this.pro1 = e,
        e.x = 40,
        e.y = 112,
        e.elementsContent = [this.pet1_i(), this.curPet1_i(), this._Label2_i(), this.btnFight_1_i(), this.btnFast_1_i(), this.pass1_i()],
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "kc_panel3_jx_914_kb_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet1_i = function() {
        var e = new eui.Image;
        return this.curPet1 = e,
        e.source = "kc_panel3_jx_914_kb1_3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "凡利迪",
        e.textColor = 16772951,
        e.x = 25,
        e.y = 9,
        e
    },
    n.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 8,
        e.y = 136,
        e
    },
    n.btnFast_1_i = function() {
        var e = new eui.Image;
        return this.btnFast_1 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 8,
        e.y = 173,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "kc_panel3_pass1_png",
        e.x = 8,
        e.y = 32,
        e
    },
    n.pro2_i = function() {
        var e = new eui.Group;
        return this.pro2 = e,
        e.x = 166,
        e.y = 195,
        e.elementsContent = [this.pet2_i(), this.curPet2_i(), this._Label3_i(), this.btnFight_2_i(), this.btnFast_2_i(), this.pass2_i()],
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "kc_panel3_jx_915_kb_4_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet2_i = function() {
        var e = new eui.Image;
        return this.curPet2 = e,
        e.source = "kc_panel3_jx_915_kb_5_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9936895370483,
        e.text = "幽冥邪龙",
        e.textColor = 16772951,
        e.x = 22,
        e.y = 10,
        e
    },
    n.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 13,
        e.y = 145,
        e
    },
    n.btnFast_2_i = function() {
        var e = new eui.Image;
        return this.btnFast_2 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 13,
        e.y = 183,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "kc_panel3_pass2_png",
        e.x = 9,
        e.y = 33,
        e
    },
    n.pro3_i = function() {
        var e = new eui.Group;
        return this.pro3 = e,
        e.x = 301,
        e.y = 75,
        e.elementsContent = [this.pet3_i(), this.curPet3_i(), this.pass3_i(), this._Label4_i(), this.btnFight_3_i(), this.btnFast_3_i()],
        e
    },
    n.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "kc_panel3_jx_915_kb_45_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet3_i = function() {
        var e = new eui.Image;
        return this.curPet3 = e,
        e.source = "kc_panel3_jx_915_kb_6_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "kc_panel3_pass3_png",
        e.x = 10,
        e.y = 33,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "维耶扎克",
        e.textColor = 16772951,
        e.x = 27,
        e.y = 10,
        e
    },
    n.btnFight_3_i = function() {
        var e = new eui.Image;
        return this.btnFight_3 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 19,
        e.y = 155,
        e
    },
    n.btnFast_3_i = function() {
        var e = new eui.Image;
        return this.btnFast_3 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 19,
        e.y = 193,
        e
    },
    n.pro4_i = function() {
        var e = new eui.Group;
        return this.pro4 = e,
        e.x = 447,
        e.y = 172,
        e.elementsContent = [this.pet4_i(), this.curPet4_i(), this.pass4_i(), this._Label5_i(), this.btnFight_4_i(), this.btnFast_4_i()],
        e
    },
    n.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "kc_panel3_zu_3171_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet4_i = function() {
        var e = new eui.Image;
        return this.curPet4 = e,
        e.source = "kc_panel3_z_317_kb_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass4_i = function() {
        var e = new eui.Image;
        return this.pass4 = e,
        e.source = "kc_panel3_pass4_png",
        e.x = 9,
        e.y = 33,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "魔瞳•伊洛维奇",
        e.textColor = 16772951,
        e.x = 13,
        e.y = 10,
        e
    },
    n.btnFight_4_i = function() {
        var e = new eui.Image;
        return this.btnFight_4 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 23,
        e.y = 165,
        e
    },
    n.btnFast_4_i = function() {
        var e = new eui.Image;
        return this.btnFast_4 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 23,
        e.y = 203,
        e
    },
    n.pro5_i = function() {
        var e = new eui.Group;
        return this.pro5 = e,
        e.x = 602,
        e.y = 35,
        e.elementsContent = [this.pet5_i(), this.curPet5_i(), this.pass5_i(), this._Label6_i(), this.btnFight_5_i(), this.btnFast_5_i()],
        e
    },
    n.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.source = "kc_panel3_jx_915_kb_46_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet5_i = function() {
        var e = new eui.Image;
        return this.curPet5 = e,
        e.source = "kc_panel3_jx_915_kb_7_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass5_i = function() {
        var e = new eui.Image;
        return this.pass5 = e,
        e.source = "kc_panel3_pass5_png",
        e.x = 8,
        e.y = 31,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "深渊狱神•哈迪斯",
        e.textColor = 16772951,
        e.x = 11,
        e.y = 9,
        e
    },
    n.btnFight_5_i = function() {
        var e = new eui.Image;
        return this.btnFight_5 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 28,
        e.y = 166,
        e
    },
    n.btnFast_5_i = function() {
        var e = new eui.Image;
        return this.btnFast_5 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 28,
        e.y = 204,
        e
    },
    n.pro6_i = function() {
        var e = new eui.Group;
        return this.pro6 = e,
        e.x = 773,
        e.y = 125,
        e.elementsContent = [this.pet6_i(), this.curPet6_i(), this.pass6_i(), this.btnFight_6_i(), this.btnFast_6_i()],
        e
    },
    n.pet6_i = function() {
        var e = new eui.Image;
        return this.pet6 = e,
        e.source = "kc_panel3_jx_915_kb_47_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.curPet6_i = function() {
        var e = new eui.Image;
        return this.curPet6 = e,
        e.source = "kc_panel3_jx_915_kb_44_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass6_i = function() {
        var e = new eui.Image;
        return this.pass6 = e,
        e.source = "kc_panel3_pass6_png",
        e.x = 12,
        e.y = 12,
        e
    },
    n.btnFight_6_i = function() {
        var e = new eui.Image;
        return this.btnFight_6 = e,
        e.source = "kc_panel2_btnfight_png",
        e.x = 117,
        e.y = 237,
        e
    },
    n.btnFast_6_i = function() {
        var e = new eui.Image;
        return this.btnFast_6 = e,
        e.source = "kc_panel3_btnfast_png",
        e.x = 20,
        e.y = 237,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_juxing_915_png",
        e.x = 27,
        e.y = 23,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_juxing_916_png",
        e.x = 29,
        e.y = 36,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已打通:",
        e.textColor = 16508847,
        e.x = 41,
        e.y = 34,
        e
    },
    n.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "X/6",
        e.textColor = 16772951,
        e.x = 102,
        e.y = 33,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_title_png",
        e.x = 468,
        e.y = 0,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_tipsbg_png",
        e.x = 123,
        e.y = 50,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "前任地面系精灵王告诉卡修斯，地脉中有几处关键节点正被邪恶所占据，必须将其依次打通。",
        e.textColor = 16772951,
        e.x = 142,
        e.y = 53,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "从占据第一处地脉起，你需要在30分钟内依次打通全部节点，否则将前功尽弃！ ",
        e.textColor = 16772951,
        e.x = 192,
        e.y = 78,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kc_panel3_btnonekey_png",
        e.x = 1011,
        e.y = 518,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kc_panel3_jlbb_png",
        e.x = 0,
        e.y = 420,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kc_panel3_jlhf_png",
        e.x = 0,
        e.y = 509,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel3_juxing_904_png",
        e.x = 400,
        e.y = 563,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0140916793324,
        e.text = "今日剩余从头挑战次数：",
        e.textColor = 14259007,
        e.x = 444,
        e.y = 571,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0140916793324,
        e.text = "99",
        e.textColor = 16769906,
        e.x = 638,
        e.y = 571,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.kingCassius.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet3", "pet2", "pet4", "pets", "btnOnekey", "btnBag", "btnCure", "txt_leftTime", "btnAddTime", "item1", "item1_Light", "star12", "star11", "star13", "grp_star1", "btnLock_1", "btnUniock_1", "lock1", "items1", "item2", "item2_Light", "star22", "star21", "star23", "grp_star2", "btnLock_2", "btnUniock_2", "lock2", "items2", "item3", "item3_Light", "star32", "star31", "star33", "grp_star23", "btnLock_3", "btnUniock_3", "lock3", "items3", "item4", "item4_Light", "star42", "star41", "star43", "grp_star4", "btnLock_4", "btnUniock_4", "lock4", "items4", "sts", "btnAdd", "txtCoin2", "items", "btnTiaozhan", "btnFast"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 6.5,
        e.width = 1115,
        e.y = 6,
        e.elementsContent = [this.pets_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this._Image4_i(), this._Label3_i(), this.txt_leftTime_i(), this.btnAddTime_i(), this._Label4_i(), this.sts_i(), this.items_i(), this.btnTiaozhan_i(), this.btnFast_i()],
        e
    },
    n.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 188,
        e.y = 49,
        e.elementsContent = [this._Image1_i(), this.pet1_i(), this.pet3_i(), this.pet2_i(), this.pet4_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_zu_324_png",
        e.x = 215,
        e.y = 69,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "kc_panel4_pet1_png",
        e.visible = !0,
        e.x = 253,
        e.y = 148,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "kc_panel4_pet2_png",
        e.visible = !1,
        e.x = 104,
        e.y = 48,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "kc_panel4_pet3_png",
        e.visible = !1,
        e.x = 250,
        e.y = 113,
        e
    },
    n.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.source = "kc_panel4_pet4_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_title_png",
        e.x = 469,
        e.y = 12,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tipsbg_png",
        e.x = 123,
        e.y = 63,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "每次击败卡修斯时，未锁定的情绪会随机变换星级，获得全部4种三星情绪即可通关",
        e.textColor = 16772951,
        e.x = 184,
        e.y = 67,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "负面情绪的总星数越高，下一次你要面对的卡修斯就会越强大！ ",
        e.textColor = 16772951,
        e.x = 267,
        e.y = 92,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kc_panel4_btnonekey_png",
        e.x = 1010,
        e.y = 531,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kc_panel4_jlbb_png",
        e.x = 0,
        e.y = 433,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kc_panel4_jlhf_png",
        e.x = 0,
        e.y = 522,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_juxing_904_png",
        e.x = 401,
        e.y = 556,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0053398873904,
        e.text = "今日剩余挑战次数：",
        e.textColor = 14259007,
        e.x = 433,
        e.y = 564,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0053398873904,
        e.text = "99",
        e.textColor = 16769906,
        e.x = 594,
        e.y = 564,
        e
    },
    n.btnAddTime_i = function() {
        var e = new eui.Image;
        return this.btnAddTime = e,
        e.source = "kc_panel4_btnadd_png",
        e.x = 642,
        e.y = 558,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.1667647552469,
        e.text = "挑战胜利即可获得暗影尘埃",
        e.textColor = 16508847,
        e.x = 453,
        e.y = 592,
        e
    },
    n.sts_i = function() {
        var e = new eui.Group;
        return this.sts = e,
        e.x = 98,
        e.y = 161,
        e.elementsContent = [this.items1_i(), this.items2_i(), this.items3_i(), this.items4_i()],
        e
    },
    n.items1_i = function() {
        var e = new eui.Group;
        return this.items1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.item1_i(), this.item1_Light_i(), this.grp_star1_i(), this.btnLock_1_i(), this.btnUniock_1_i(), this._Image5_i(), this._Image6_i(), this._Label5_i(), this.lock1_i()],
        e
    },
    n.item1_i = function() {
        var e = new eui.Image;
        return this.item1 = e,
        e.source = "kc_panel4_item1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.item1_Light_i = function() {
        var e = new eui.Image;
        return this.item1_Light = e,
        e.source = "kc_panel4_item1_light_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_star1_i = function() {
        var e = new eui.Group;
        return this.grp_star1 = e,
        e.x = 7,
        e.y = -10,
        e.elementsContent = [this.star12_i(), this.star11_i(), this.star13_i()],
        e
    },
    n.star12_i = function() {
        var e = new eui.Image;
        return this.star12 = e,
        e.source = "kc_panel4_star2_png",
        e.x = 26,
        e.y = 0,
        e
    },
    n.star11_i = function() {
        var e = new eui.Image;
        return this.star11 = e,
        e.source = "kc_panel4_star1_png",
        e.x = 0,
        e.y = 14,
        e
    },
    n.star13_i = function() {
        var e = new eui.Image;
        return this.star13 = e,
        e.source = "kc_panel4_star3_png",
        e.x = 61,
        e.y = 14,
        e
    },
    n.btnLock_1_i = function() {
        var e = new eui.Image;
        return this.btnLock_1 = e,
        e.source = "kc_panel4_btnlock_png",
        e.x = 17,
        e.y = 98,
        e
    },
    n.btnUniock_1_i = function() {
        var e = new eui.Image;
        return this.btnUniock_1 = e,
        e.source = "kc_panel4_btnuniock_png",
        e.visible = !0,
        e.x = 17,
        e.y = 98,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_jx_904_kb_2_png",
        e.x = 8,
        e.y = 72,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tuceng_7_png",
        e.visible = !0,
        e.x = 26,
        e.y = 67,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x50",
        e.textColor = 16777135,
        e.x = 58,
        e.y = 79,
        e
    },
    n.lock1_i = function() {
        var e = new eui.Image;
        return this.lock1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kc_panel4_lock_png",
        e.x = 12,
        e.y = 46,
        e
    },
    n.items2_i = function() {
        var e = new eui.Group;
        return this.items2 = e,
        e.x = 47,
        e.y = 190,
        e.elementsContent = [this.item2_i(), this.item2_Light_i(), this.grp_star2_i(), this.btnLock_2_i(), this.btnUniock_2_i(), this._Image7_i(), this._Image8_i(), this._Label6_i(), this.lock2_i()],
        e
    },
    n.item2_i = function() {
        var e = new eui.Image;
        return this.item2 = e,
        e.source = "kc_panel4_item3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.item2_Light_i = function() {
        var e = new eui.Image;
        return this.item2_Light = e,
        e.source = "kc_panel4_item3_light_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_star2_i = function() {
        var e = new eui.Group;
        return this.grp_star2 = e,
        e.x = 7,
        e.y = -10,
        e.elementsContent = [this.star22_i(), this.star21_i(), this.star23_i()],
        e
    },
    n.star22_i = function() {
        var e = new eui.Image;
        return this.star22 = e,
        e.source = "kc_panel4_star2_png",
        e.x = 26,
        e.y = 0,
        e
    },
    n.star21_i = function() {
        var e = new eui.Image;
        return this.star21 = e,
        e.source = "kc_panel4_star1_png",
        e.x = 0,
        e.y = 14,
        e
    },
    n.star23_i = function() {
        var e = new eui.Image;
        return this.star23 = e,
        e.source = "kc_panel4_star3_png",
        e.x = 61,
        e.y = 14,
        e
    },
    n.btnLock_2_i = function() {
        var e = new eui.Image;
        return this.btnLock_2 = e,
        e.source = "kc_panel4_btnlock_png",
        e.x = 17,
        e.y = 98,
        e
    },
    n.btnUniock_2_i = function() {
        var e = new eui.Image;
        return this.btnUniock_2 = e,
        e.source = "kc_panel4_btnuniock_png",
        e.x = 17,
        e.y = 98,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_jx_904_kb_2_png",
        e.x = 9,
        e.y = 72,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tuceng_7_png",
        e.x = 27,
        e.y = 67,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x50",
        e.textColor = 16777135,
        e.x = 59,
        e.y = 79,
        e
    },
    n.lock2_i = function() {
        var e = new eui.Image;
        return this.lock2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kc_panel4_lock_png",
        e.x = 12,
        e.y = 46,
        e
    },
    n.items3_i = function() {
        var e = new eui.Group;
        return this.items3 = e,
        e.x = 777,
        e.y = 0,
        e.elementsContent = [this.item3_i(), this.item3_Light_i(), this.grp_star23_i(), this.btnLock_3_i(), this.btnUniock_3_i(), this._Image9_i(), this._Image10_i(), this._Label7_i(), this.lock3_i()],
        e
    },
    n.item3_i = function() {
        var e = new eui.Image;
        return this.item3 = e,
        e.source = "kc_panel4_item2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.item3_Light_i = function() {
        var e = new eui.Image;
        return this.item3_Light = e,
        e.source = "kc_panel4_item2_light_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.grp_star23_i = function() {
        var e = new eui.Group;
        return this.grp_star23 = e,
        e.x = 15,
        e.y = -12,
        e.elementsContent = [this.star32_i(), this.star31_i(), this.star33_i()],
        e
    },
    n.star32_i = function() {
        var e = new eui.Image;
        return this.star32 = e,
        e.source = "kc_panel4_star2_png",
        e.x = 26,
        e.y = 0,
        e
    },
    n.star31_i = function() {
        var e = new eui.Image;
        return this.star31 = e,
        e.source = "kc_panel4_star1_png",
        e.x = 0,
        e.y = 14,
        e
    },
    n.star33_i = function() {
        var e = new eui.Image;
        return this.star33 = e,
        e.source = "kc_panel4_star3_png",
        e.x = 61,
        e.y = 14,
        e
    },
    n.btnLock_3_i = function() {
        var e = new eui.Image;
        return this.btnLock_3 = e,
        e.source = "kc_panel4_btnlock_png",
        e.x = 26,
        e.y = 98,
        e
    },
    n.btnUniock_3_i = function() {
        var e = new eui.Image;
        return this.btnUniock_3 = e,
        e.source = "kc_panel4_btnuniock_png",
        e.x = 26,
        e.y = 98,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_jx_904_kb_2_png",
        e.x = 18,
        e.y = 72,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tuceng_7_png",
        e.x = 36,
        e.y = 67,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x50",
        e.textColor = 16777135,
        e.x = 68,
        e.y = 79,
        e
    },
    n.lock3_i = function() {
        var e = new eui.Image;
        return this.lock3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kc_panel4_lock_png",
        e.x = 15,
        e.y = 46,
        e
    },
    n.items4_i = function() {
        var e = new eui.Group;
        return this.items4 = e,
        e.x = 723,
        e.y = 163,
        e.elementsContent = [this.item4_i(), this.item4_Light_i(), this.grp_star4_i(), this.btnLock_4_i(), this.btnUniock_4_i(), this._Image11_i(), this._Image12_i(), this._Label8_i(), this.lock4_i()],
        e
    },
    n.item4_i = function() {
        var e = new eui.Image;
        return this.item4 = e,
        e.source = "kc_panel4_item4_png",
        e.x = 0,
        e.y = 27,
        e
    },
    n.item4_Light_i = function() {
        var e = new eui.Image;
        return this.item4_Light = e,
        e.source = "kc_panel4_item4_light_png",
        e.x = 0,
        e.y = 27,
        e
    },
    n.grp_star4_i = function() {
        var e = new eui.Group;
        return this.grp_star4 = e,
        e.x = 15,
        e.y = 15,
        e.elementsContent = [this.star42_i(), this.star41_i(), this.star43_i()],
        e
    },
    n.star42_i = function() {
        var e = new eui.Image;
        return this.star42 = e,
        e.source = "kc_panel4_star2_png",
        e.x = 26,
        e.y = 0,
        e
    },
    n.star41_i = function() {
        var e = new eui.Image;
        return this.star41 = e,
        e.source = "kc_panel4_star1_png",
        e.x = 0,
        e.y = 14,
        e
    },
    n.star43_i = function() {
        var e = new eui.Image;
        return this.star43 = e,
        e.source = "kc_panel4_star3_png",
        e.x = 61,
        e.y = 14,
        e
    },
    n.btnLock_4_i = function() {
        var e = new eui.Image;
        return this.btnLock_4 = e,
        e.source = "kc_panel4_btnlock_png",
        e.x = 26,
        e.y = 125,
        e
    },
    n.btnUniock_4_i = function() {
        var e = new eui.Image;
        return this.btnUniock_4 = e,
        e.source = "kc_panel4_btnuniock_png",
        e.x = 26,
        e.y = 125,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_jx_904_kb_2_png",
        e.visible = !0,
        e.x = 18,
        e.y = 99,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tuceng_7_png",
        e.x = 36,
        e.y = 94,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "x50",
        e.textColor = 16777135,
        e.x = 68,
        e.y = 106,
        e
    },
    n.lock4_i = function() {
        var e = new eui.Image;
        return this.lock4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kc_panel4_lock_png",
        e.x = 15,
        e.y = 66,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 867,
        e.y = 0,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this.btnAdd_i(), this.txtCoin2_i()],
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_txtbg2_png",
        e.x = 0,
        e.y = 9,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel4_tuceng_7_png",
        e.x = 13,
        e.y = 0,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kc_panel4_add_y_png",
        e.x = 191,
        e.y = 9,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "00",
        e.textColor = 16772951,
        e.x = 145,
        e.y = 10,
        e
    },
    n.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "kc_panel4_btntiaozhan_png",
        e.x = 559,
        e.y = 505,
        e
    },
    n.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "kc_panel4_btnchou_png",
        e.x = 407,
        e.y = 505,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.kingCassius.Panel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnKe", "btnFa_1", "btnDuihuan_1", "p1", "btnTe", "btnFa_2", "btnDuihuan_2", "p2", "btnWu", "btnFa_3", "btnDuihuan_3", "p3", "txt_itemNum", "btnAddItem", "ri", "btnTiaozhan_1", "pet1", "btnTiaozhan_2", "pet2", "btnTiaozhan_3", "pet3", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kc_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -4,
        e.y = 25,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_leftTime_i(), this.ri_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this._Image28_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_cishudi_png",
        e.x = 341,
        e.y = 553,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战次数：",
        e.textColor = 14259007,
        e.x = 443,
        e.y = 560,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99",
        e.textColor = 16769906,
        e.x = 597,
        e.y = 559,
        e
    },
    n.ri_i = function() {
        var e = new eui.Group;
        return this.ri = e,
        e.x = 806,
        e.y = 75,
        e.elementsContent = [this._Image2_i(), this.p1_i(), this.p2_i(), this.p3_i(), this._Label8_i(), this._Image18_i(), this.txt_itemNum_i(), this.btnAddItem_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.p1_i = function() {
        var e = new eui.Group;
        return this.p1 = e,
        e.x = 1,
        e.y = 12,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnKe_i(), this._Label2_i(), this._Label3_i(), this._Image7_i(), this.btnFa_1_i(), this.btnDuihuan_1_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_juxing_913_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 48,
        e.y = 99,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_jx_913_kb_4_png",
        e.x = 12,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_kuang_png",
        e.x = 24,
        e.y = 27,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "kc_panel5_btnke_png",
        e.x = 34,
        e.y = 38,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "消耗：",
        e.textColor = 14259007,
        e.x = 8,
        e.y = 105,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "*30",
        e.textColor = 16514895,
        e.x = 82,
        e.y = 105,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_title1_png",
        e.x = 84,
        e.y = 2,
        e
    },
    n.btnFa_1_i = function() {
        var e = new eui.Image;
        return this.btnFa_1 = e,
        e.source = "kc_panel5_btnfa_png",
        e.x = 138,
        e.y = 86,
        e
    },
    n.btnDuihuan_1_i = function() {
        var e = new eui.Image;
        return this.btnDuihuan_1 = e,
        e.source = "kc_panel5_btnduihuan_png",
        e.x = 138,
        e.y = 32,
        e
    },
    n.p2_i = function() {
        var e = new eui.Group;
        return this.p2 = e,
        e.x = 1,
        e.y = 148,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this.btnTe_i(), this._Label4_i(), this._Label5_i(), this._Image12_i(), this.btnFa_2_i(), this.btnDuihuan_2_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_juxing_913_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 48,
        e.y = 100,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_jx_913_kb_4_png",
        e.x = 12,
        e.y = 0,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_kuang_png",
        e.x = 24,
        e.y = 28,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.scaleX = 1.2,
        e.scaleY = 1.2,
        e.source = "kc_panel5_btnte_png",
        e.x = 34,
        e.y = 44,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "消耗：",
        e.textColor = 14259007,
        e.x = 8,
        e.y = 105,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "*35",
        e.textColor = 16514895,
        e.x = 82,
        e.y = 105,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_title3_png",
        e.x = 84,
        e.y = 2,
        e
    },
    n.btnFa_2_i = function() {
        var e = new eui.Image;
        return this.btnFa_2 = e,
        e.source = "kc_panel5_btnfa_png",
        e.x = 138,
        e.y = 86,
        e
    },
    n.btnDuihuan_2_i = function() {
        var e = new eui.Image;
        return this.btnDuihuan_2 = e,
        e.source = "kc_panel5_btnduihuan_png",
        e.x = 138,
        e.y = 32,
        e
    },
    n.p3_i = function() {
        var e = new eui.Group;
        return this.p3 = e,
        e.x = 1,
        e.y = 284,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this.btnWu_i(), this._Label6_i(), this._Label7_i(), this._Image17_i(), this.btnFa_3_i(), this.btnDuihuan_3_i()],
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_juxing_913_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 48,
        e.y = 100,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_jx_913_kb_4_png",
        e.x = 12,
        e.y = 0,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_kuang_png",
        e.x = 24,
        e.y = 27,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "kc_panel5_btnwu_png",
        e.x = 37,
        e.y = 41,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "消耗：",
        e.textColor = 14259007,
        e.x = 8,
        e.y = 105,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "*40",
        e.textColor = 16514895,
        e.x = 82,
        e.y = 105,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_title2_png",
        e.x = 84,
        e.y = 2,
        e
    },
    n.btnFa_3_i = function() {
        var e = new eui.Image;
        return this.btnFa_3 = e,
        e.source = "kc_panel5_btnfa_png",
        e.x = 138,
        e.y = 86,
        e
    },
    n.btnDuihuan_3_i = function() {
        var e = new eui.Image;
        return this.btnDuihuan_3 = e,
        e.source = "kc_panel5_btnduihuan_png",
        e.x = 138,
        e.y = 32,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前拥有        ：",
        e.textColor = 14259007,
        e.x = 31,
        e.y = 429,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 104,
        e.y = 423,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 14259007,
        e.x = 157,
        e.y = 430,
        e
    },
    n.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "kc_panel5_btnadditem_png",
        e.x = 201,
        e.y = 423,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Group;
        return this.pet1 = e,
        e.x = 4,
        e.y = 81,
        e.elementsContent = [this._Image19_i(), this._Image20_i(), this._Label9_i(), this._Image21_i(), this.btnTiaozhan_1_i()],
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_bg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_36_png",
        e.x = 54,
        e.y = 97,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *1",
        e.textColor = 16772933,
        e.x = 56,
        e.y = 374,
        e
    },
    n._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 145,
        e.y = 368,
        e
    },
    n.btnTiaozhan_1_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_1 = e,
        e.source = "kc_panel5_btntiaozhan_png",
        e.x = 59,
        e.y = 407,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Group;
        return this.pet2 = e,
        e.x = 268,
        e.y = 81,
        e.elementsContent = [this._Image22_i(), this._Image23_i(), this._Label10_i(), this._Image24_i(), this.btnTiaozhan_2_i()],
        e
    },
    n._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_bg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_39_png",
        e.x = 46,
        e.y = 56,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *2",
        e.textColor = 16772933,
        e.x = 53,
        e.y = 374,
        e
    },
    n._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 144,
        e.y = 368,
        e
    },
    n.btnTiaozhan_2_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_2 = e,
        e.source = "kc_panel5_btntiaozhan_png",
        e.x = 59,
        e.y = 407,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Group;
        return this.pet3 = e,
        e.x = 500,
        e.y = 81,
        e.elementsContent = [this._Image25_i(), this._Image26_i(), this._Label11_i(), this._Image27_i(), this.btnTiaozhan_3_i()],
        e
    },
    n._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_bg3_png",
        e.x = 31,
        e.y = 0,
        e
    },
    n._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_40_png",
        e.x = 0,
        e.y = 23,
        e
    },
    n._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战胜可获得        *3",
        e.textColor = 16772933,
        e.x = 85,
        e.y = 374,
        e
    },
    n._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_tuceng_41_png",
        e.x = 178,
        e.y = 368,
        e
    },
    n.btnTiaozhan_3_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_3 = e,
        e.source = "kc_panel5_btntiaozhan_png",
        e.x = 90,
        e.y = 407,
        e
    },
    n._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "kc_panel5_nljj_png",
        e.x = 448,
        e.y = 0,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kc_panel4_jlbb_png",
        e.x = 0,
        e.y = 537,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kc_panel4_jlhf_png",
        e.x = 86,
        e.y = 537,
        e
    },
    t
} (eui.Skin);