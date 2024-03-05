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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.rightValue = 0,
            n.leftTime = 0,
            n._petIdArr = [1845, 2341, 2527, 2323, 2394],
            n.passStr = ["通过条件：使用致命一击击败对手\n<font color='#ff0000'>单精灵对战</font>", "通过条件：10回合后击败对手\n<font color='#ff0000'>单精灵对战</font>", "通过条件：2回合内击败对手\n<font color='#ff0000'>单精灵对战</font>"],
            n.skinName = e.Panel4Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.name = "godOfWarGaia.Panel4Skin",
            this.initOldPveBtnClose(0, this, "gowg_panel4_zjky_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.rbGroup1 = this.rb_1.group,
            this.rbGroup1.selectedValue = this.rightValue = 1,
            this.checkBitForTips(function(t) {
                e._isWeaken = t
            }),
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
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243609 + t.rightValue, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [5, t.rightValue],
                        function() {
                            t.service.updateValues().then(function() {
                                BubblerManager.getInstance().showText("挑战成功，已通过" + n[t.rightValue - 1] + "考验！"),
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
                    KTool.buyProductByCallback(243609, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [1, 4],
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足") : void FightManager.fightNoMapBoss(6304 + t.rightValue)
            },
            this);
            var n = ["力", "心", "锋"];
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                for (var i = t.service.getValue(e.GodOfWarGaiaConst.forever_pet_state), a = [], o = 1; 3 >= o; o++) a.push(KTool.getBit(i, 3 + o));
                t.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        for (var i = !1,
                        o = 0,
                        r = t.service.getValue(e.GodOfWarGaiaConst.forever_pet_state), s = 1; 3 >= s; s++) {
                            var u = KTool.getBit(r, 3 + s);
                            if (u != a[s - 1]) {
                                o = s,
                                i = !0;
                                break
                            }
                        }
                        i ? BubblerManager.getInstance().showText("挑战成功，已通过" + n[o - 1] + "考验！") : BubblerManager.getInstance().showText("未按照条件击败敌人，没能通过考验")
                    }
                    t.update()
                })
            },
            this),
            this.rbGroup1.addEventListener(egret.Event.CHANGE, this.onChangeRb, this)
        },
        n.prototype.checkBitForTips = function(e) {
            PetManager.checkMultiPet(this._petIdArr,
            function(t) {
                for (var n = !0,
                i = 0; i < t.length; i++) t[i] || (n = !1);
                null != e && e(n)
            })
        },
        n.prototype.onChangeRb = function() {
            this.rightValue = ~~this.rbGroup1.selectedValue,
            this.update()
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 3 - this.service.getValue(e.GodOfWarGaiaConst.daily_level4_times);
            var n = this.service.getValue(e.GodOfWarGaiaConst.forever_pet_state),
            i = this.service.getValue(e.GodOfWarGaiaConst.forever_level_state);
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime;
            for (var a = [], o = 1; 3 >= o; o++) {
                var r = 1 == KTool.getBit(n, 3 + o);
                this["rb_" + o].yiwancheng.visible = r,
                this["rb_" + o].touchEnabled = !r,
                r && a.push(o)
            }
            var s = i >= 4;
            if (s) {
                this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeRb, this),
                EventManager.removeAll(this);
                var u = "盖亚战胜了自己的终极考验，进化为完全体！";
                Alarm.show(u,
                function() {
                    t.service.backToMainPanel()
                },
                this)
            }
            if (this.content.visible = 0 != this.rightValue, 0 != this.rightValue) {
                if (3 != a.length) {
                    for (; a.indexOf(this.rightValue) > -1;) 3 != this.rightValue ? this.rightValue++:this.rightValue = 1;
                    this.rbGroup1.selectedValue = this.rightValue
                }
                this.txt_pass.textFlow = (new egret.HtmlTextParser).parse(this.passStr[this.rightValue - 1])
            }
            DisplayUtil.setEnabled(this.btnadd, 0 == this.leftTime, 0 != this.leftTime)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeRb, this)
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaPanel4 = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaPanel4")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.GodOfWarGaiaConst.forever_damage1, e.GodOfWarGaiaConst.forever_damage2, e.GodOfWarGaiaConst.forever_damage3, e.GodOfWarGaiaConst.forever_level_state, e.GodOfWarGaiaConst.forever_pet_state], [e.GodOfWarGaiaConst.daily_level1_times, e.GodOfWarGaiaConst.daily_level2_times, e.GodOfWarGaiaConst.daily_level3_times, e.GodOfWarGaiaConst.daily_level4_times, e.GodOfWarGaiaConst.daily_levelVirtual_times]),
            n.init([{
                panelName: e.GodOfWarGaiaConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.GodOfWarGaiaConst.PANEL1
            },
            {
                panelName: e.GodOfWarGaiaConst.PANEL2
            },
            {
                panelName: e.GodOfWarGaiaConst.PANEL3
            },
            {
                panelName: e.GodOfWarGaiaConst.PANEL4
            },
            {
                panelName: e.GodOfWarGaiaConst.PANEL5
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
    e.GodOfWarGaia = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaia")
} (godOfWarGaia || (godOfWarGaia = {}));
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
                u(i.next(e))
            } catch(t) {
                o(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                o(t)
            }
        }
        function u(e) {
            e.done ? a(e.value) : new n(function(t) {
                t(e.value)
            }).then(r, s)
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
            if (a = 1, o && (r = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(r = r.call(o, n[1])).done) return r;
            switch (o = 0, r && (n = [0, r.value]), n[0]) {
            case 0:
            case 1:
                r = n;
                break;
            case 4:
                return u.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = n[1],
                n = [0];
                continue;
            case 7:
                n = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (r = u.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < r[1]) {
                    u.label = r[1],
                    r = n;
                    break
                }
                if (r && u.label < r[2]) {
                    u.label = r[2],
                    u.ops.push(n);
                    break
                }
                r[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
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
    var a, o, r, s, u = {
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 141,
            n.allTeState = new Array(3),
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(139, this, "gowg_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {}),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "gowg_mainpanel_btncollected_png": "gowg_mainpanel_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnchangeAttr,
            function() {
                var n = new e.ChangePop(t.allTeState);
                PopViewManager.getInstance().openView(n)
            },
            this),
            ImageButtonUtil.add(this.btn1,
            function() {
                t.service.openPanel(e.GodOfWarGaiaConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                t.service.openPanel(e.GodOfWarGaiaConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                t.service.openPanel(e.GodOfWarGaiaConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                t.service.openPanel(e.GodOfWarGaiaConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                var t = new e.BuyPop;
                PopViewManager.getInstance().openView(t)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.GodOfWarGaiaConst.PANEL5)
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2780,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243594, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [7, 0],
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
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "gowg_mainpanel_btncollected_png": "gowg_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            for (var t = this,
            n = this.service.getValue(e.GodOfWarGaiaConst.forever_level_state), i = this.service.getValue(e.GodOfWarGaiaConst.forever_pet_state), a = 1; 4 >= a; a++) this["yitongguo_" + a].visible = n > a - 1;
            DisplayUtil.setEnabled(this.btn1, 1 > n, n >= 1),
            DisplayUtil.setEnabled(this.btn2, 1 == n, 1 != n),
            DisplayUtil.setEnabled(this.btn3, 2 == n, 2 != n),
            DisplayUtil.setEnabled(this.btn4, 3 == n, 3 != n),
            this.hasPet.visible = 4 == n,
            this.btnOnekey.visible = 4 != n;
            var o = 0;
            this.allTeState[0] = KTool.getBit(i, 8);
            for (var a = 0; 4 > a; a++) 1 == KTool.getBit(i, 7 + a) && o++;
            this.hasUp.visible = 4 == o;
            var r = 0;
            r += KTool.getBit(i, 9),
            KTool.getBitSet([8158, 8161, 8162],
            function(e) {
                r += e[1],
                r += e[2],
                t.btnSuper.visible = 3 != r && 4 == n,
                t.btnchangeAttr.visible = 3 == r,
                t.allTeState[1] = e[1],
                t.allTeState[2] = e[2]
            })
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaMainPanel = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaMainPanel")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.leftValue = 0,
            n.rightValue = 0,
            n.leftStr = ["战神·盖亚", "斗神瑞尔斯", "赤瞳缪斯"],
            n.rightStr = ["艾辛格", "索伦森", "魔眼凯兮"],
            n.maxDamage = [8500, 1e4, 7e3],
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gowg_panel1_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.rbGroup1 = this.rb_1.group,
            this.rbGroup2 = this.rb_enemy1.group,
            this.img_noSe.visible = !0,
            this.name = "godOfWarGaia.GodOfWarGaiaPanel1",
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            this.rbGroup1.addEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
            this.rbGroup2.addEventListener(egret.Event.CHANGE, this.onChangeRight, this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243600 + t.rightValue, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [3, t.rightValue],
                        function() {
                            var e = "成功战胜了" + t.rightStr[t.rightValue - 1] + "！请继续迎战其余对手";
                            BubblerManager.getInstance().showText(e, !0),
                            t.leftValue = t.rightValue = 0,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足") : void SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [8, t.leftValue],
                function() {
                    SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [234 + t.rightValue, 0, 0, 0, 0, 0])
                })
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243598, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [2, 1],
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
                Alert.show("是否花费10000赛尔豆购买1次挑战次数？",
                function() {
                    SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [1, 1],
                    function() {
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    })
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onfightOver, this)
        },
        n.prototype.onfightOver = function() {
            var e = this;
            this.service.updateValues().then(function() {
                var t = e.service.getValue(5783 + e.rightValue),
                n = "";
                t >= e.maxDamage[e.rightValue - 1] ? (n = "成功战胜了" + e.rightStr[e.rightValue - 1] + "！请继续迎战其余对手", e.rightValue = e.leftValue = 0) : n = "本次累积<font color='#ff0000'>" + t + "</font>伤害，请再接再厉！",
                BubblerManager.getInstance().showText(n, !0),
                e.update()
            })
        },
        n.prototype.onChangeLeft = function() {
            this.leftValue = ~~this.rbGroup1.selectedValue,
            this.txt_petName_l.text = this.leftStr[this.leftValue - 1],
            this.grp_noSe.visible = 0 == this.leftValue,
            this.grp_leftName.visible = 0 != this.leftValue;
            for (var e = 1; 3 >= e; e++) this["pet" + e].visible = this.leftValue == e;
            this.img_noSe.visible = 0 == this.leftValue || 0 == this.rightValue
        },
        n.prototype.onChangeRight = function() {
            this.rightValue = ~~this.rbGroup2.selectedValue,
            this.txt_petName_r.text = this.rightStr[this.rightValue - 1],
            this.bar_damage.maximum = this.maxDamage[this.rightValue - 1],
            this.img_noSe.visible = 0 == this.leftValue || 0 == this.rightValue,
            this.update()
        },
        n.prototype.update = function() {
            var t = this;
            if (this.leftTime = 6 - this.service.getValue(e.GodOfWarGaiaConst.daily_level1_times), this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime, this.showPets(), 0 != this.leftValue || 0 != this.rightValue) {
                var n = this.service.getValue(5783 + this.rightValue);
                this.txt_damage.text = n + "/" + this.maxDamage[this.rightValue - 1],
                this.bar_damage.value = n;
                for (var i = 1; 3 >= i; i++) this["pet" + i].visible = this.leftValue == i,
                this["enemy" + i].visible = this.rightValue == i,
                this["rb_enemy" + i].touchEnabled = this.service.getValue(5783 + i) < this.maxDamage[i - 1]
            } else 0 == this.leftValue && 0 == this.rightValue && (this.rbGroup1.selectedValue = this.rbGroup2.selectedValue = null, this.grp_noSe.visible = this.grp_noEnemy.visible = !0, this.txt_petName_r.text = this.txt_petName_l.text = "精灵名称", this.img_noSe.visible = !0);
            var a = this.service.getValue(e.GodOfWarGaiaConst.forever_level_state),
            o = a >= 1;
            if (DisplayUtil.setEnabled(this.btnadd, 0 == this.leftTime, 0 != this.leftTime), o) {
                this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
                this.rbGroup2.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this),
                EventManager.removeAll(this);
                var r = "盖亚和伙伴成功战胜对手，但是妖王们突然出现，形成包围之势！";
                Alarm.show(r,
                function() {
                    t.service.openPanel(e.GodOfWarGaiaConst.PANEL2)
                },
                this)
            }
        },
        n.prototype.showPets = function() {
            this.grp_rightName.visible = 0 != this.rightValue,
            this.grp_leftName.visible = 0 != this.leftValue,
            this.grp_noEnemy.visible = 0 == this.rightValue,
            this.grp_noSe.visible = 0 == this.leftValue,
            this.bar.visible = 0 != this.rightValue;
            for (var e = [], t = 1; 3 >= t; t++) {
                var n = this.service.getValue(5783 + t) >= this.maxDamage[t - 1];
                this["pet" + t].visible = 0 != this.leftValue,
                this["enemy" + t].visible = 0 != this.rightValue,
                this["rb_enemy" + t].pass.visible = n,
                n && (e.push(t), this["rb_enemy" + t].touchEnabled = !1)
            }
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup1.removeEventListener(egret.Event.CHANGE, this.onChangeLeft, this),
            this.rbGroup2.removeEventListener(egret.Event.CHANGE, this.onChangeRight, this)
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaPanel1 = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaPanel1")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.enemyName = ["斯内普", "阿米尔", "吉罗德"],
            n.skinName = e.Panel2Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gowg_panel2_aozhanpian_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.name = "godOfWarGaia.GodOfWarGaiaPanel2",
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            for (var t = this,
            n = function(n) {
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(243604 + n, 1,
                        function() {
                            SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [4, n],
                            function() {
                                var e = "成功击破<font color='#ff0000'>" + t.enemyName[n - 1] + "</font>真身！";
                                BubblerManager.getInstance().showText(e, !0),
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    t)
                },
                i),
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    if (t.leftTime <= 0) return void BubblerManager.getInstance().showText("剩余挑战次数不足");
                    var i = new e.Panel2Pop(n);
                    PopViewManager.getInstance().openView(i)
                },
                i)
            },
            i = this, a = 1; 3 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243604, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [1, 2],
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243599, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [2, 2],
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
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onfightOver, this)
        },
        n.prototype.onfightOver = function() {
            var t = this,
            n = this.service.getValue(e.GodOfWarGaiaConst.forever_pet_state),
            i = "";
            this.service.updateValues().then(function() {
                if (FightManager.isWin) {
                    var a = t.service.getValue(e.GodOfWarGaiaConst.forever_pet_state);
                    if (a != n) {
                        for (var o = 0,
                        r = 1; 3 >= r; r++) if (KTool.getBit(n, r) != KTool.getBit(a, r)) {
                            o = r;
                            break
                        }
                        i = "成功击破<font color='#ff0000'>" + t.enemyName[o - 1] + "</font>真身！"
                    } else i = "妖王诡计多端，<font color='#ff0000'>未能识破真身</font>，请再接再厉！"
                } else i = "妖王诡计多端，<font color='#ff0000'>未能识破真身</font>，请再接再厉！";
                BubblerManager.getInstance().showText(i, !0),
                t.update()
            })
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 5 - this.service.getValue(e.GodOfWarGaiaConst.daily_level2_times),
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime;
            for (var n = this.service.getValue(e.GodOfWarGaiaConst.forever_pet_state), i = 1; 3 >= i; i++) {
                var a = 1 == KTool.getBit(n, i);
                this["pass" + i].visible = a,
                DisplayUtil.setEnabled(this["btnFast" + i], !a, a),
                DisplayUtil.setEnabled(this["btnFight" + i], !a, a)
            }
            var o = this.service.getValue(e.GodOfWarGaiaConst.forever_level_state),
            r = o >= 2;
            if (r) {
                EventManager.removeAll(this);
                var s = "成功冲破妖王的包围却又迎上袭来的妖族强者，盖亚处境堪忧！";
                Alarm.show(s,
                function() {
                    t.service.openPanel(e.GodOfWarGaiaConst.PANEL3)
                },
                this)
            }
            DisplayUtil.setEnabled(this.btnadd, 0 == this.leftTime, 0 != this.leftTime)
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaPanel2 = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaPanel2")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
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
            this.initOldPveBtnClose(0, this, "gowg_panel3_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
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
            ImageButtonUtil.add(this.btnGo,
            function() {
                ModuleManager.showModuleByID(19)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243608, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [1, 3],
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243600, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [2, 3],
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足") : void(PetManager.getHasPet(2787) ? FightManager.fightNoMapBoss(4e3) : FightManager.fightNoMapBoss(4001))
            },
            this)
        },
        n.prototype.update = function() {
            var t = this;
            this.leftTime = 3 - this.service.getValue(e.GodOfWarGaiaConst.daily_level3_times),
            this.txt_leftTime.text = "今日剩余免费游戏次数：" + this.leftTime;
            var n = this.service.getValue(e.GodOfWarGaiaConst.forever_level_state),
            i = n >= 3;
            if (i) {
                EventManager.removeAll(this);
                var a = "在精灵王帮助下，盖亚成功战胜强敌,现在只要完成终极考验即可晋升为完全体";
                Alarm.show(a,
                function() {
                    t.service.openPanel(e.GodOfWarGaiaConst.PANEL4)
                },
                this)
            }
            DisplayUtil.setEnabled(this.btnadd, 0 == this.leftTime, 0 != this.leftTime)
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaPanel3 = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaPanel3")
} (godOfWarGaia || (godOfWarGaia = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
godOfWarGaia; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "godOfWarGaia.GodOfWarGaiaMainPanel",
        e.PANEL1 = "godOfWarGaia.GodOfWarGaiaPanel1",
        e.PANEL2 = "godOfWarGaia.GodOfWarGaiaPanel2",
        e.PANEL3 = "godOfWarGaia.GodOfWarGaiaPanel3",
        e.PANEL4 = "godOfWarGaia.GodOfWarGaiaPanel4",
        e.PANEL5 = "godOfWarGaia.GodOfWarGaiaPanel5",
        e.CMD = 43615,
        e.forever_level_state = 5783,
        e.forever_damage1 = 5784,
        e.forever_damage2 = 5785,
        e.forever_damage3 = 5786,
        e.forever_pet_state = 5787,
        e.daily_level1_times = 15724,
        e.daily_level2_times = 15725,
        e.daily_level3_times = 15726,
        e.daily_level4_times = 15727,
        e.daily_levelVirtual_times = 15728,
        e
    } ();
    e.GodOfWarGaiaConst = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaConst")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.allTeState = new Array(3),
            n.skinName = e.Panel5Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "gowg_panel5_stms_png",
            function() {
                e.service.backToMainPanel()
            },
            this,
            function() {}),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnPop2,
            function() {
                if (0 == t.allTeState[0]) return void Alert.show("需要先开启专属特性才能切换特性！\n是否立刻前往购买",
                function() {
                    var t = new e.BuyPop;
                    PopViewManager.getInstance().openView(t)
                });
                var n = new e.ChangePop(t.allTeState);
                PopViewManager.getInstance().openView(n)
            },
            this),
            ImageButtonUtil.add(this.btnwu,
            function() {
                var e = {
                    id: 17494
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this);
            var n = EffectIconControl.getAllEffctByPetId(2780);
            ImageButtonUtil.add(this.xi,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], n[1], "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.fen,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], n[2], "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnEx0,
            function() {
                if (ItemManager.getNumByID(1704944) < 60) {
                    var e = ItemXMLInfo.getName(1704944) + "数量不足";
                    return void BubblerManager.getInstance().showText(e)
                }
                if (!PetManager.isDefaultPet(2780)) {
                    var e = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                    return void Alarm.show(e,
                    function() {
                        t.service.showPetBag()
                    },
                    t)
                }
                SocketConnection.sendByQueue(41634, [PetManager.defaultTime, 2],
                function() {
                    Alert.show("神谕灭魔击已强化，是否前往背包查看？",
                    function() {
                        t.service.showPetBag()
                    }),
                    t.update()
                })
            },
            this),
            ImageButtonUtil.add(this.btnOneKeyBuy_0,
            function() {
                if (!PetManager.isDefaultPet(2780)) {
                    var n = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                    return void Alarm.show(n,
                    function() {
                        t.service.showPetBag()
                    },
                    t)
                }
                var i = t.service.getValue(e.GodOfWarGaiaConst.forever_pet_state);
                return 1 != KTool.getBit(i, 8) ? void Alert.show("需要先开启第五技能才能进行神力特训！\n是否立刻前往购买",
                function() {
                    var t = new e.BuyPop;
                    PopViewManager.getInstance().openView(t)
                }) : void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243653, 1,
                    function() {
                        SocketConnection.sendByQueue(41634, [PetManager.defaultTime, 1],
                        function() {
                            Alert.show("神谕灭魔击已强化，是否前往背包查看？",
                            function() {
                                t.service.showPetBag()
                            }),
                            t.update()
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btntexun_1,
            function() {
                var n = t.service.getValue(e.GodOfWarGaiaConst.forever_pet_state);
                if (1 != KTool.getBit(n, 8)) return void Alert.show("需要先开启第五技能才能进行神力特训！\n是否立刻前往购买",
                function() {
                    var t = new e.BuyPop;
                    PopViewManager.getInstance().openView(t)
                });
                var i = new e.BattlePop(1);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.btntexun_2,
            function() {
                if (0 == t.allTeState[0]) return void Alert.show("需要先开启专属特性才能切换特性！\n是否立刻前往购买",
                function() {
                    var t = new e.BuyPop;
                    PopViewManager.getInstance().openView(t)
                });
                var n = new e.BattlePop(2);
                PopViewManager.getInstance().openView(n)
            },
            this);
            for (var i = [5728, 5729, 5730, 5731], a = function(n) {
                ImageButtonUtil.add(o["btnOneKeyBuy_" + n],
                function() {
                    return 0 == t.allTeState[0] ? void Alert.show("需要先开启专属特性才能切换特性！\n是否立刻前往购买",
                    function() {
                        var t = new e.BuyPop;
                        PopViewManager.getInstance().openView(t)
                    }) : void PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(243744 + n, 1,
                        function() {
                            KTool.doExchange(i[2 * (n - 1)], 1,
                            function() {
                                var i = 1 == n ? "袭": "愤";
                                Alert.show("已获得新特性" + i + "是否前往更换？",
                                function() {
                                    var n = new e.ChangePop(t.allTeState);
                                    PopViewManager.getInstance().openView(n)
                                }),
                                t.update()
                            })
                        })
                    },
                    t)
                },
                o),
                ImageButtonUtil.add(o["btnEx" + n],
                function() {
                    if (ItemManager.getNumByID(1705076) < 60) {
                        var a = ItemXMLInfo.getName(1705076) + "数量不足";
                        return void BubblerManager.getInstance().showText(a)
                    }
                    if (!PetManager.isDefaultPet(2780)) {
                        var a = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                        return void Alarm.show(a,
                        function() {
                            t.service.showPetBag()
                        },
                        t)
                    }
                    KTool.doExchange(i[2 * (n - 1) + 1], 1,
                    function() {
                        var i = 1 == n ? "袭": "愤";
                        Alert.show("已获得新特性" + i + "是否前往更换？",
                        function() {
                            var n = new e.ChangePop(t.allTeState);
                            PopViewManager.getInstance().openView(n)
                        }),
                        t.update()
                    })
                },
                o);
                var a = [1704944, 1705076],
                r = [243654, 243747],
                s = [5711, 5732];
                ImageButtonUtil.add(o["btnAdd_" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        var e = {};
                        e.type = "product_diamond",
                        e.ins = {
                            iconID: a[n - 1],
                            productID: r[n - 1]
                        },
                        e.caller = t,
                        e.callBack = function(e, i) {
                            KTool.buyProductByCallback(r[n - 1], i,
                            function() {
                                KTool.doExchange(s[n - 1], i,
                                function() {
                                    ItemManager.updateItems(a,
                                    function() {
                                        t.update()
                                    })
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, e)
                    },
                    t)
                },
                o)
            },
            o = this, r = 1; 2 >= r; r++) a(r)
        },
        n.prototype.update = function() {
            var t = this;
            this.txt_itemNum1.text = ItemManager.getNumByID(1704944) + "/60",
            this.txt_itemNum2.text = ItemManager.getNumByID(1705076) + "/120";
            var n = this.service.getValue(e.GodOfWarGaiaConst.forever_pet_state);
            this.allTeState[0] = KTool.getBit(n, 9),
            KTool.getBitSet([8158, 8161, 8162],
            function(e) {
                DisplayUtil.setEnabled(t.btnEx0, 1 != e[0], 1 == e[0]),
                DisplayUtil.setEnabled(t.btnOneKeyBuy_0, 1 != e[0], 1 == e[0]),
                DisplayUtil.setEnabled(t.btnAdd_1, 1 != e[0], 1 == e[0]),
                t.allTeState[1] = e[1],
                DisplayUtil.setEnabled(t.btnEx1, 1 != e[1], 1 == e[1]),
                DisplayUtil.setEnabled(t.btnOneKeyBuy_1, 1 != e[1], 1 == e[1]),
                t.allTeState[2] = e[2],
                DisplayUtil.setEnabled(t.btnEx2, 1 != e[2], 1 == e[2]),
                DisplayUtil.setEnabled(t.btnOneKeyBuy_2, 1 != e[2], 1 == e[2])
            })
        },
        n
    } (BasicPanel);
    e.GodOfWarGaiaPanel5 = t,
    __reflect(t.prototype, "godOfWarGaia.GodOfWarGaiaPanel5")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.leftTime = 0,
            i.curIndex = 0,
            i.boosID = [4137, 4138],
            i.skinName = e.BattlepopSkin,
            i.curIndex = n,
            i
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            t.prototype.initialized.call(this),
            this.initRes(),
            this.addEvent(),
            this.update()
        },
        n.prototype.initRes = function() {
            this.title1.visible = this.pet1.visible = 1 == this.curIndex,
            this.title2.visible = this.pet2.visible = 2 == this.curIndex
        },
        n.prototype.addEvent = function() {
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
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (e.leftTime <= 0) return void BubblerManager.getInstance().showText("剩余挑战次数不足");
                if (!PetManager.isDefaultPet(2780)) {
                    var t = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                    return void Alarm.show(t,
                    function() {
                        e.hide(),
                        ModuleManager.showModuleByID(10)
                    },
                    e)
                }
                e.hide(),
                FightManager.fightNoMapBoss(e.boosID[e.curIndex - 1])
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this)
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([13695, 13696],
            function(t) {
                var n = MainManager.actorInfo.isVip ? 10 : 5;
                e.leftTime = n - t[e.curIndex - 1],
                e.txt_leftTime.text = "今日剩余游戏次数：" + e.leftTime,
                e.txt_leftTime.textFlow = [{
                    text: "今日剩余游戏次数：",
                    style: {
                        textColor: 16769906
                    }
                },
                {
                    text: "" + e.leftTime,
                    style: {
                        textColor: 16711680
                    }
                }]
            })
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.BattlePop = t,
    __reflect(t.prototype, "godOfWarGaia.BattlePop")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.index = [1, 3, 2, 4],
            n.skinName = e.BuypopSkin,
            n
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            t.prototype.initialized.call(this),
            this.addEvent(),
            this.update()
        },
        n.prototype.addEvent = function() {
            for (var t = this,
            n = [243595, 243597, 243596, 242535], i = function(i) {
                ImageButtonUtil.add(a["btnOneKeyBuy_" + i],
                function() {
                    if (4 != i) if (PetManager.isDefaultPet(2780)) PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(n[i - 1], 1,
                        function() {
                            SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [6, t.index[i - 1]],
                            function() {
                                2 == i ? Alert.show("战神·盖亚已获得专属特性,\n是否前往背包查看？",
                                function() {
                                    ModuleManager.showModuleByID(10),
                                    t.hide()
                                }) : 3 == i && Alert.show("战神·盖亚已获得第五技能,\n是否前往背包查看？",
                                function() {
                                    ModuleManager.showModuleByID(10),
                                    t.hide()
                                }),
                                t.update()
                            })
                        })
                    },
                    t);
                    else {
                        var a = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                        Alarm.show(a,
                        function() {
                            ModuleManager.showModuleByID(10),
                            t.hide()
                        },
                        t)
                    } else PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(n[i - 1], 1,
                        function() {
                            SocketConnection.sendByQueue(e.GodOfWarGaiaConst.CMD, [6, t.index[i - 1]],
                            function() {
                                t.update()
                            })
                        })
                    },
                    t)
                },
                a)
            },
            a = this, o = 1; 4 >= o; o++) i(o);
            ImageButtonUtil.add(this.btnTe,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 2780, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 17494
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnShui,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 300066
                })
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                t.hide(),
                PayManager.rechargeDiamond()
            },
            this)
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([5787],
            function(t) {
                for (var n = 1; 4 >= n; n++) {
                    var i = 1 == KTool.getBit(t[0], e.index[n - 1] + 6);
                    e["yihuode_" + n].visible = i,
                    DisplayUtil.setEnabled(e["btnOneKeyBuy_" + n], !i, i)
                }
            }),
            UserInfoManager.getDiamond(function(t) {
                e.txtCoin1.text = t + ""
            },
            this)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.BuyPop = t,
    __reflect(t.prototype, "godOfWarGaia.BuyPop")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.effIDs = [372, 385, 384],
            i.skinName = e.ChangepopSkin,
            i.allState = n,
            i
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            t.prototype.initialized.call(this),
            this.addEvent(),
            this.update()
        },
        n.prototype.addEvent = function() {
            for (var e = this,
            t = function(t) {
                ImageButtonUtil.add(n["btngh_" + t],
                function() {
                    if (!PetManager.isDefaultPet(2780)) {
                        var n = "请将<font color='#ff0000'>战神·盖亚</font>放入背包首发出战位置！";
                        return void Alarm.show(n,
                        function() {
                            ModuleManager.showModuleByID(10),
                            e.hide()
                        },
                        e)
                    }
                    return 0 == e.allState[t - 1] ? void BubblerManager.getInstance().showText("该特性尚未获得，无法替换！") : void SocketConnection.sendByQueue(41636, [t, PetManager.defaultTime],
                    function() {
                        StatLogger.log("20230421版本系统功能", "战神·盖亚搬迁", "点击特训界面-【更换特性】"),
                        BubblerManager.getInstance().showText("战神·盖亚的特性已更换！"),
                        PetManager.refreshPetCombat(function() {
                            e.update()
                        })
                    })
                },
                n)
            },
            n = this, i = 1; 3 >= i; i++) t(i);
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this);
            var a = EffectIconControl.getAllEffctByPetId(2780);
            ImageButtonUtil.add(this.xiao,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], a[0], "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.xi,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], a[1], "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.fen,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], a[2], "", AppDoStyle.NULL)
            },
            this)
        },
        n.prototype.update = function() {
            var e = 0;
            if (PetManager.getlength() > 0) {
                void 0 != PetManager.infos[0].effectList && (e = PetManager.infos[0].effectList[0].effectID);
                for (var t = 1; 3 >= t; t++) 0 != e && (this["equp" + t].visible = e == this.effIDs[t - 1])
            }
            for (var t = 1; 3 >= t; t++) this["notGet" + t].visible = 0 == this.allState[t - 1],
            this["btngh_" + t].visible = e != this.effIDs[t - 1] && 0 != this.allState[t - 1]
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.ChangePop = t,
    __reflect(t.prototype, "godOfWarGaia.ChangePop")
} (godOfWarGaia || (godOfWarGaia = {}));
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
godOfWarGaia; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.curIndex = 0,
            i.skinName = e.Panel3popSkin,
            i.curIndex = n,
            i
        }
        return __extends(n, t),
        n.prototype.initialized = function() {
            t.prototype.initialized.call(this),
            this.initRes(),
            this.addEvent()
        },
        n.prototype.initRes = function() {
            this.bg.source = "gowg_panel3pop" + this.curIndex + "_bg_png";
            for (var e = 1; 3 >= e; e++) this["pet" + e].source = "gowg_panel3pop" + this.curIndex + "_ywjld_png",
            this["a_" + e].source = "gowg_panel3pop" + this.curIndex + "_a_png";
            this.btnBag.source = "gowg_panel3pop" + this.curIndex + "_jlbb_png",
            this.btnCure.source = "gowg_panel3pop" + this.curIndex + "_jlhf_png",
            this.title.source = "gowg_panel3pop" + this.curIndex + "_title_png",
            this.btnBack.source = "gowg_panel3pop" + this.curIndex + "_btnback_png"
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBag,
            function() {
                ModuleManager.showModuleByID(10),
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this);
            for (var t = 1; 3 >= t; t++) ImageButtonUtil.add(this["pet" + t],
            function() {
                FightManager.fightNoMapBoss(3993 + e.curIndex),
                e.hide()
            },
            this)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.Panel2Pop = t,
    __reflect(t.prototype, "godOfWarGaia.Panel2Pop")
} (godOfWarGaia || (godOfWarGaia = {})),
window.godOfWarGaia = window.godOfWarGaia || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.godOfWarGaia.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnchangeAttr", "btnOnekey", "hasOnekey", "btnSuper", "btnUp", "hasUp", "btn4", "btn1", "btn2", "btn3", "yitongguo_1", "yitongguo_2", "yitongguo_3", "yitongguo_4", "btnInfo", "btnCollect", "hasPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_mainpanel_bg_jpg",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 23,
        e.width = 1080,
        e.y = 73,
        e.elementsContent = [this._Image1_i(), this.btnchangeAttr_i(), this.btnOnekey_i(), this.hasOnekey_i(), this.btnSuper_i(), this.btnUp_i(), this.hasUp_i(), this.btn4_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.yitongguo_1_i(), this.yitongguo_2_i(), this.yitongguo_3_i(), this.yitongguo_4_i(), this.btnInfo_i(), this.btnCollect_i(), this.hasPet_i(), this._Image2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_mainpanel_title_png",
        e.x = 8,
        e.y = 230,
        e
    },
    n.btnchangeAttr_i = function() {
        var e = new eui.Image;
        return this.btnchangeAttr = e,
        e.source = "gowg_panel5_btninfoqhtx_png",
        e.x = 890,
        e.y = 482,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gowg_mainpanel_btnonekey_png",
        e.visible = !1,
        e.x = 890,
        e.y = 482,
        e
    },
    n.hasOnekey_i = function() {
        var e = new eui.Image;
        return this.hasOnekey = e,
        e.source = "gowg_mainpanel_yihuode1_png",
        e.visible = !1,
        e.x = 890,
        e.y = 482,
        e
    },
    n.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "gowg_mainpanel_btnsuper_png",
        e.visible = !1,
        e.x = 890,
        e.y = 480,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "gowg_mainpanel_btnup_png",
        e.visible = !0,
        e.x = 975,
        e.y = 482,
        e
    },
    n.hasUp_i = function() {
        var e = new eui.Image;
        return this.hasUp = e,
        e.source = "gowg_mainpanel_yihuode3_png",
        e.visible = !0,
        e.x = 975,
        e.y = 482,
        e
    },
    n.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "gowg_mainpanel_yscz_1_png",
        e.visible = !0,
        e.x = 656,
        e.y = 299,
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "gowg_mainpanel_jidoupian_png",
        e.x = 653,
        e.y = 0,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "gowg_mainpanel_aozhanpian_png",
        e.x = 693,
        e.y = 108,
        e
    },
    n.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "gowg_mainpanel_kxp_png",
        e.x = 693,
        e.y = 214,
        e
    },
    n.yitongguo_1_i = function() {
        var e = new eui.Image;
        return this.yitongguo_1 = e,
        e.source = "gowg_mainpanel_yitongguo_png",
        e.visible = !0,
        e.x = 676,
        e.y = 14,
        e
    },
    n.yitongguo_2_i = function() {
        var e = new eui.Image;
        return this.yitongguo_2 = e,
        e.source = "gowg_mainpanel_yitongguo_png",
        e.visible = !0,
        e.x = 716,
        e.y = 121,
        e
    },
    n.yitongguo_3_i = function() {
        var e = new eui.Image;
        return this.yitongguo_3 = e,
        e.source = "gowg_mainpanel_yitongguo_png",
        e.visible = !0,
        e.x = 716,
        e.y = 227,
        e
    },
    n.yitongguo_4_i = function() {
        var e = new eui.Image;
        return this.yitongguo_4 = e,
        e.source = "gowg_mainpanel_yitongguo_png",
        e.visible = !0,
        e.x = 679,
        e.y = 330,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "gowg_mainpanel_btninfo_png",
        e.x = 0,
        e.y = 479,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.x = 0,
        e.y = 409,
        e
    },
    n.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.source = "gowg_mainpanel_yihuode_png",
        e.x = 210,
        e.y = 260,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_ti_png",
        e.x = 682.61,
        e.y = 423,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.godOfWarGaia.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnadd", "enemy3", "enemy2", "enemy1", "grp_noEnemy", "bar_damage", "txt_damage", "bar", "txt_petName_r", "grp_rightName", "grp_rightInfo", "pet3", "pet1", "pet2", "grp_noSe", "txt_petName_l", "grp_leftName", "grp_leftInfo", "btnFight", "btnFast", "img_noSe", "btnOnekey", "rb_enemy1", "rb_enemy2", "rb_enemy3", "rightRb", "rb_2", "rb_1", "rb_3", "leftRb"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
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
            e.source = "gowg_panel1_jindu_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
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
            return e.source = "gowg_panel1_head2001_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "gowg_panel1_zu_34_png",
            e.visible = !0,
            e.x = 17,
            e.y = 9,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
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
            return e.source = "gowg_panel1_head2000_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "gowg_panel1_zu_34_png",
            e.visible = !0,
            e.x = 17,
            e.y = 9,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
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
            return e.source = "gowg_panel1_head2521_png",
            e.visible = !0,
            e.x = 15,
            e.y = 8,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xuanzhong_png",
            e.x = 0,
            e.y = 0,
            e
        },
        n.pass_i = function() {
            var e = new eui.Image;
            return this.pass = e,
            e.source = "gowg_panel1_zu_34_png",
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
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel1_head2580_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xz_kb_png",
            e.x = 0,
            e.y = -5,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel1_head2780_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xz_kb_png",
            e.x = 0,
            e.y = -5,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel1_head2527_png",
            e.x = 8,
            e.y = 5,
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel1_xz_kb_png",
            e.x = 0,
            e.y = -5,
            e
        },
        t
    } (eui.Skin),
    _ = t.prototype;
    return _.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 14,
        e.width = 1080,
        e.y = 55,
        e.elementsContent = [this._Group1_i(), this.grp_rightInfo_i(), this.grp_leftInfo_i(), this.btnFight_i(), this.btnFast_i(), this.img_noSe_i(), this.btnOnekey_i(), this._Image10_i(), this.rightRb_i(), this.leftRb_i(), this._Image20_i(), this._Label1_i()],
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 393,
        e.y = 533,
        e.elementsContent = [this.txt_leftTime_i(), this.btnadd_i()],
        e
    },
    _.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 0,
        e.y = 6,
        e
    },
    _.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gowg_panel1_btnadd_png",
        e.x = 236,
        e.y = 0,
        e
    },
    _.grp_rightInfo_i = function() {
        var e = new eui.Group;
        return this.grp_rightInfo = e,
        e.visible = !0,
        e.x = 606,
        e.y = 42,
        e.elementsContent = [this.enemy3_i(), this.enemy2_i(), this.enemy1_i(), this.grp_noEnemy_i(), this.bar_i(), this.grp_rightName_i()],
        e
    },
    _.enemy3_i = function() {
        var e = new eui.Image;
        return this.enemy3 = e,
        e.source = "gowg_panel1_2521_png",
        e.visible = !0,
        e.x = 10,
        e.y = 31,
        e
    },
    _.enemy2_i = function() {
        var e = new eui.Image;
        return this.enemy2 = e,
        e.source = "gowg_panel1_2000_png",
        e.visible = !1,
        e.x = 25,
        e.y = 0,
        e
    },
    _.enemy1_i = function() {
        var e = new eui.Image;
        return this.enemy1 = e,
        e.source = "gowg_panel1_2001_png",
        e.visible = !1,
        e.x = 30,
        e.y = 21,
        e
    },
    _.grp_noEnemy_i = function() {
        var e = new eui.Group;
        return this.grp_noEnemy = e,
        e.x = 38,
        e.y = 21,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_2001_hy_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_nopet2_png",
        e.visible = !0,
        e.x = 38,
        e.y = 138,
        e
    },
    _.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.visible = !0,
        e.x = 0,
        e.y = 384,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.bar_damage_i(), this.txt_damage_i(), this._Image5_i()],
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_903_kb_2_png",
        e.x = 48,
        e.y = 14,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_903_kb_png",
        e.x = 57,
        e.y = 22,
        e
    },
    _.bar_damage_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_damage = e,
        e.maximum = 1e4,
        e.value = 0,
        e.visible = !0,
        e.width = 264,
        e.x = 57,
        e.y = 22,
        e.skinName = n,
        e
    },
    _.txt_damage_i = function() {
        var e = new eui.Label;
        return this.txt_damage = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00000/10000",
        e.textColor = 16775806,
        e.x = 133,
        e.y = 18,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_ljsh_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.grp_rightName_i = function() {
        var e = new eui.Group;
        return this.grp_rightName = e,
        e.x = 110,
        e.y = 434,
        e.elementsContent = [this._Image6_i(), this.txt_petName_r_i()],
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_namebg2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.txt_petName_r_i = function() {
        var e = new eui.Label;
        return this.txt_petName_r = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "精灵名称",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 130,
        e.x = 10,
        e.y = 12,
        e
    },
    _.grp_leftInfo_i = function() {
        var e = new eui.Group;
        return this.grp_leftInfo = e,
        e.visible = !0,
        e.x = 17,
        e.y = 73,
        e.elementsContent = [this.pet3_i(), this.pet1_i(), this.pet2_i(), this.grp_noSe_i(), this.grp_leftName_i()],
        e
    },
    _.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "gowg_panel1_2527_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    _.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "gowg_panel1_2780_png",
        e.visible = !0,
        e.x = 42,
        e.y = 2,
        e
    },
    _.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "gowg_panel1_2580_png",
        e.visible = !0,
        e.x = 26,
        e.y = 11,
        e
    },
    _.grp_noSe_i = function() {
        var e = new eui.Group;
        return this.grp_noSe = e,
        e.visible = !1,
        e.x = 28,
        e.y = 11,
        e.elementsContent = [this._Image7_i(), this._Image8_i()],
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_2580_hy_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_nopet1_png",
        e.x = 147,
        e.y = 116,
        e
    },
    _.grp_leftName_i = function() {
        var e = new eui.Group;
        return this.grp_leftName = e,
        e.x = 189,
        e.y = 403,
        e.elementsContent = [this._Image9_i(), this.txt_petName_l_i()],
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_namebg1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    _.txt_petName_l_i = function() {
        var e = new eui.Label;
        return this.txt_petName_l = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "精灵名称",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 130,
        e.x = 11,
        e.y = 12,
        e
    },
    _.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gowg_panel1_txtlabel_png",
        e.x = 538,
        e.y = 485,
        e
    },
    _.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "gowg_panel1_yjzs_png",
        e.x = 428,
        e.y = 485,
        e
    },
    _.img_noSe_i = function() {
        var e = new eui.Image;
        return this.img_noSe = e,
        e.source = "gowg_panel1_txds_png",
        e.visible = !0,
        e.x = 402,
        e.y = 481,
        e
    },
    _.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gowg_panel1_btnonekey_png",
        e.x = 983,
        e.y = 464,
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_vs_png",
        e.x = 421,
        e.y = 99,
        e
    },
    _.rightRb_i = function() {
        var e = new eui.Group;
        return this.rightRb = e,
        e.x = 918,
        e.y = 66,
        e.elementsContent = [this._Image11_i(), this._Image12_i(), this.rb_enemy1_i(), this.rb_enemy2_i(), this.rb_enemy3_i(), this._Image13_i(), this._Image14_i(), this._Image15_i()],
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9043_kb_png",
        e.x = 20,
        e.y = 43,
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9055_kb_png",
        e.x = 21,
        e.y = 43,
        e
    },
    _.rb_enemy1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy1 = e,
        e.groupName = "enemyChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 22,
        e.y = 150,
        e.skinName = i,
        e
    },
    _.rb_enemy2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy2 = e,
        e.groupName = "enemyChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 22,
        e.y = 246,
        e.skinName = a,
        e
    },
    _.rb_enemy3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_enemy3 = e,
        e.groupName = "enemyChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 22,
        e.y = 54,
        e.skinName = o,
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9048_png",
        e.x = 21,
        e.y = 52,
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9048_kb_png",
        e.x = 18,
        e.y = 53,
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_z_2_kb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.leftRb_i = function() {
        var e = new eui.Group;
        return this.leftRb = e,
        e.x = 0,
        e.y = 109,
        e.elementsContent = [this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this.rb_2_i(), this.rb_1_i(), this.rb_3_i()],
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9043_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9044_png",
        e.x = 98,
        e.y = 9,
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9044_kb_png",
        e.x = 103,
        e.y = 9,
        e
    },
    _._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_jx_9055_kb_2_png",
        e.x = 92,
        e.y = 0,
        e
    },
    _.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "myChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 6,
        e.y = 15,
        e.skinName = r,
        e
    },
    _.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "myChoose",
        e.value = "1",
        e.visible = !0,
        e.x = 6,
        e.y = 112,
        e.skinName = s,
        e
    },
    _.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "myChoose",
        e.value = "3",
        e.visible = !0,
        e.x = 6,
        e.y = 209,
        e.skinName = u,
        e
    },
    _._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel1_tipsbg_png",
        e.x = 96,
        e.y = 0,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "对3个敌人分别造成对应累积伤害即可通过关卡，可以任意使用战神联盟伙伴迎接挑战",
        e.textColor = 16766295,
        e.x = 188,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.godOfWarGaia.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnFight1", "btnFast1", "btnFight2", "btnFast2", "btnFight3", "btnFast3", "txt_leftTime", "btnadd", "pass3", "pass2", "pass1", "btnOnekey"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_panel2_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 15,
        e.width = 1100,
        e.y = 44,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnFight1_i(), this.btnFast1_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this.btnFight2_i(), this.btnFast2_i(), this._Label2_i(), this._Image5_i(), this._Image6_i(), this.btnFight3_i(), this.btnFast3_i(), this._Label3_i(), this._Group1_i(), this.pass3_i(), this.pass2_i(), this.pass1_i(), this.btnOnekey_i(), this._Image7_i(), this._Label4_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_ywsnp_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_juxing_1_png",
        e.x = 53,
        e.y = 439,
        e
    },
    n.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "gowg_panel2_txtlabel_png",
        e.x = 207,
        e.y = 481,
        e
    },
    n.btnFast1_i = function() {
        var e = new eui.Image;
        return this.btnFast1 = e,
        e.source = "gowg_panel2_yjzs_png",
        e.x = 90,
        e.y = 481,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.8683298114406,
        e.text = "妖王斯内普",
        e.textColor = 6750201,
        e.x = 139,
        e.y = 447,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_ywame_png",
        e.x = 359,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_juxing_2_png",
        e.x = 396,
        e.y = 439,
        e
    },
    n.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "gowg_panel2_txtlabel_png",
        e.x = 550,
        e.y = 481,
        e
    },
    n.btnFast2_i = function() {
        var e = new eui.Image;
        return this.btnFast2 = e,
        e.source = "gowg_panel2_yjzs_png",
        e.x = 433,
        e.y = 481,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.8683298114406,
        e.text = "妖王阿米尔",
        e.textColor = 16770150,
        e.x = 482,
        e.y = 447,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_ywjld_png",
        e.x = 711,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_juxing_3_png",
        e.x = 738,
        e.y = 439,
        e
    },
    n.btnFight3_i = function() {
        var e = new eui.Image;
        return this.btnFight3 = e,
        e.source = "gowg_panel2_txtlabel_png",
        e.x = 892,
        e.y = 481,
        e
    },
    n.btnFast3_i = function() {
        var e = new eui.Image;
        return this.btnFast3 = e,
        e.source = "gowg_panel2_yjzs_png",
        e.x = 775,
        e.y = 481,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.8683298114406,
        e.text = "妖王吉罗德",
        e.textColor = 14509823,
        e.x = 824,
        e.y = 447,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 402,
        e.y = 544,
        e.elementsContent = [this.txt_leftTime_i(), this.btnadd_i()],
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 0,
        e.y = 6,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gowg_panel2_btnadd_png",
        e.x = 236,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "gowg_panel2_pass3_png",
        e.visible = !0,
        e.x = 711,
        e.y = 0,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "gowg_panel2_pass2_png",
        e.visible = !0,
        e.x = 359,
        e.y = 0,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "gowg_panel2_pass1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gowg_panel2_btnonekey_png",
        e.x = 992,
        e.y = 475,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel2_tipsbg_png",
        e.x = 206,
        e.y = 11,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "帮助盖亚看破并击败三大妖王的真身即可通过关卡",
        e.textColor = 16766295,
        e.x = 341,
        e.y = 17,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.godOfWarGaia.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnadd", "cishu", "btnFight", "btnOnekey", "btnGo", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_panel3_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 9,
        e.width = 1130,
        e.y = 50,
        e.elementsContent = [this.cishu_i(), this._Image1_i(), this.btnFight_i(), this.btnOnekey_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnGo_i(), this._Image6_i(), this._Label1_i(), this._Image7_i(), this._Label2_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    n.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 441,
        e.y = 538,
        e.elementsContent = [this.txt_leftTime_i(), this.btnadd_i()],
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战次数：99",
        e.textColor = 16769906,
        e.x = 0,
        e.y = 6,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gowg_panel3_btnadd_png",
        e.x = 218,
        e.y = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_vs_png",
        e.x = 393,
        e.y = 75,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gowg_panel3_btntiaozhan_png",
        e.x = 489,
        e.y = 483,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "gowg_panel3_btnonekey_png",
        e.x = 1013,
        e.y = 469,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_zu_4_png",
        e.x = 812,
        e.y = 54,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_zu_5_png",
        e.x = 594,
        e.y = 74,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_zu_6_png",
        e.x = 10,
        e.y = 54,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_zu_7_png",
        e.x = 222,
        e.y = 74,
        e
    },
    n.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.source = "gowg_panel3_zu_9_png",
        e.x = 168,
        e.y = 460,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_juxing_5_png",
        e.x = 73,
        e.y = 423,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "出战斯嘉丽可降低难度",
        e.textColor = 16774493,
        e.x = 78,
        e.y = 430,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel3_tipsbg_png",
        e.x = 194,
        e.y = 0,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "两大妖族不期而至，唯有击败他们才能开启终极考验，\n好在光系精灵王斯嘉丽出手相助，将其放入出战背包可以降低难度",
        e.textAlign = "center",
        e.textColor = 16774493,
        e.width = 522,
        e.x = 294,
        e.y = 4,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gowg_panel3_jlbb_png",
        e.x = 1,
        e.y = 407,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gowg_panel3_jlhf_png",
        e.x = 0,
        e.y = 484,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.godOfWarGaia.Panel4Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "btnBag", "btnCure", "txt_leftTime", "btnadd", "cishu", "rb_1", "rb_2", "rb_3", "rightInfo", "btnFight", "btnFast", "txt_pass", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["yiwancheng"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.yiwancheng_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel4_lzky_png",
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel4_xzzt_png",
            e
        },
        n.yiwancheng_i = function() {
            var e = new eui.Image;
            return this.yiwancheng = e,
            e.source = "gowg_panel4_yiwancheng_png",
            e.visible = !0,
            e.x = 79,
            e.y = 90,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["yiwancheng"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.yiwancheng_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel4_xzky_png",
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel4_xzzt_png",
            e.visible = !0,
            e
        },
        n.yiwancheng_i = function() {
            var e = new eui.Image;
            return this.yiwancheng = e,
            e.source = "gowg_panel4_yiwancheng_png",
            e.visible = !0,
            e.x = 79,
            e.y = 90,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["yiwancheng"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.yiwancheng_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "gowg_panel4_fzky_png",
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.source = "gowg_panel4_xzzt_png",
            e.x = 0,
            e
        },
        n.yiwancheng_i = function() {
            var e = new eui.Image;
            return this.yiwancheng = e,
            e.source = "gowg_panel4_yiwancheng_png",
            e.visible = !0,
            e.x = 79,
            e.y = 90,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.source = "gowg_panel4_bg_png",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 562,
        e.horizontalCenter = 5,
        e.width = 1100,
        e.y = 55,
        e.elementsContent = [this.btnBag_i(), this.btnCure_i(), this.cishu_i(), this.rightInfo_i(), this.content_i(), this._Image2_i(), this._Label1_i(), this._Image3_i()],
        e
    },
    o.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gowg_panel4_jlbb_png",
        e.x = 30,
        e.y = 193,
        e
    },
    o.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gowg_panel4_jlhf_png",
        e.x = 30,
        e.y = 284,
        e
    },
    o.cishu_i = function() {
        var e = new eui.Group;
        return this.cishu = e,
        e.x = 412,
        e.y = 533,
        e.elementsContent = [this.txt_leftTime_i(), this.btnadd_i()],
        e
    },
    o.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余免费游戏次数：99",
        e.textColor = 16769906,
        e.x = 0,
        e.y = 6,
        e
    },
    o.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gowg_panel4_btnadd_png",
        e.x = 236,
        e.y = 0,
        e
    },
    o.rightInfo_i = function() {
        var e = new eui.Group;
        return this.rightInfo = e,
        e.x = 815,
        e.y = 34,
        e.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i()],
        e
    },
    o.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "myChoose",
        e.value = "1",
        e.visible = !0,
        e.y = 1,
        e.skinName = n,
        e
    },
    o.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "myChoose",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 153,
        e.skinName = i,
        e
    },
    o.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "myChoose",
        e.value = "3",
        e.visible = !0,
        e.y = 305,
        e.skinName = a,
        e
    },
    o.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 379,
        e.y = 376,
        e.elementsContent = [this._Image1_i(), this.btnFight_i(), this.btnFast_i(), this.txt_pass_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel4_juxing_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gowg_panel4_txtlabel_png",
        e.x = 181,
        e.y = 94,
        e
    },
    o.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "gowg_panel4_yjzs_png",
        e.x = 64,
        e.y = 94,
        e
    },
    o.txt_pass_i = function() {
        var e = new eui.Label;
        return this.txt_pass = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "通过条件：程序大大调用\n程序大大调用程序大大调用",
        e.textAlign = "center",
        e.textColor = 16776550,
        e.verticalAlign = "middle",
        e.width = 340,
        e.x = 0,
        e.y = 30,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel4_tipsbg_png",
        e.x = 216,
        e.y = 0,
        e
    },
    o._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "按照指定规则分别击败战神·盖亚即可获得战神·盖亚！",
        e.textColor = 16766295,
        e.x = 337,
        e.y = 6,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel4_ti_png",
        e.x = 748,
        e.y = 528.615,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.godOfWarGaia.Panel5Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btntexun_2", "txt_itemNum2", "btnAdd_2", "btnOneKeyBuy_2", "btnEx2", "fen", "btnOneKeyBuy_1", "btnEx1", "xi", "btnPop2", "dierji", "page2", "btntexun_1", "txt_itemNum1", "btnAdd_1", "btnOneKeyBuy_0", "btnEx0", "btnwu", "page1", "rightInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 113,
        e.width = 820,
        e.y = 50,
        e.elementsContent = [this.rightInfo_i(), this._Image12_i(), this._Label1_i()],
        e
    },
    n.rightInfo_i = function() {
        var e = new eui.Group;
        return this.rightInfo = e,
        e.x = 372,
        e.y = 51,
        e.elementsContent = [this.page2_i(), this.page1_i()],
        e
    },
    n.page2_i = function() {
        var e = new eui.Group;
        return this.page2 = e,
        e.x = 0,
        e.y = 209,
        e.elementsContent = [this._Image1_i(), this.btntexun_2_i(), this._Image2_i(), this._Image3_i(), this.txt_itemNum2_i(), this.btnAdd_2_i(), this.btnOneKeyBuy_2_i(), this.btnEx2_i(), this._Image4_i(), this.fen_i(), this.btnOneKeyBuy_1_i(), this.btnEx1_i(), this._Image5_i(), this.xi_i(), this.btnPop2_i(), this.dierji_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_xiade_png",
        e.x = 0,
        e.y = 3,
        e
    },
    n.btntexun_2_i = function() {
        var e = new eui.Image;
        return this.btntexun_2 = e,
        e.source = "gowg_panel5_btntexun_png",
        e.x = 337,
        e.y = 218,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_jx_4_kb_8_png",
        e.x = 304,
        e.y = 262,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_1705076_kb_2_png",
        e.x = 135,
        e.y = 242,
        e
    },
    n.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.7547940749313,
        e.text = "XX/120",
        e.textColor = 16774231,
        e.x = 177,
        e.y = 250,
        e
    },
    n.btnAdd_2_i = function() {
        var e = new eui.Image;
        return this.btnAdd_2 = e,
        e.source = "gowg_panel5_btnadd_png",
        e.x = 248,
        e.y = 245,
        e
    },
    n.btnOneKeyBuy_2_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_2 = e,
        e.source = "gowg_panel5_btnonekeybuy_png",
        e.x = 203,
        e.y = 189,
        e
    },
    n.btnEx2_i = function() {
        var e = new eui.Image;
        return this.btnEx2 = e,
        e.source = "gowg_panel5_z_3_kb_2_png",
        e.x = 210,
        e.y = 161,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_jx_914_kb_png",
        e.x = 78,
        e.y = 149,
        e
    },
    n.fen_i = function() {
        var e = new eui.Image;
        return this.fen = e,
        e.source = "gowg_panel5_fen_png",
        e.x = 86,
        e.y = 157,
        e
    },
    n.btnOneKeyBuy_1_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_1 = e,
        e.source = "gowg_panel5_btnonekeybuy_png",
        e.x = 203,
        e.y = 93,
        e
    },
    n.btnEx1_i = function() {
        var e = new eui.Image;
        return this.btnEx1 = e,
        e.source = "gowg_panel5_z_3_kb_2_png",
        e.x = 210,
        e.y = 65,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_jx_914_kb_png",
        e.x = 78,
        e.y = 53,
        e
    },
    n.xi_i = function() {
        var e = new eui.Image;
        return this.xi = e,
        e.source = "gowg_panel5_xi_png",
        e.x = 86,
        e.y = 61,
        e
    },
    n.btnPop2_i = function() {
        var e = new eui.Image;
        return this.btnPop2 = e,
        e.source = "gowg_panel5_btninfoqhtx_png",
        e.x = 344,
        e.y = 22,
        e
    },
    n.dierji_i = function() {
        var e = new eui.Image;
        return this.dierji = e,
        e.source = "gowg_panel5_dierji_png",
        e.x = 10,
        e.y = 0,
        e
    },
    n.page1_i = function() {
        var e = new eui.Group;
        return this.page1 = e,
        e.x = 60,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this.btntexun_1_i(), this._Image7_i(), this._Image8_i(), this.txt_itemNum1_i(), this.btnAdd_1_i(), this.btnOneKeyBuy_0_i(), this.btnEx0_i(), this._Image9_i(), this.btnwu_i(), this._Image10_i(), this._Image11_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_shangde_png",
        e.x = 0,
        e.y = 2,
        e
    },
    n.btntexun_1_i = function() {
        var e = new eui.Image;
        return this.btntexun_1 = e,
        e.source = "gowg_panel5_btntexun_png",
        e.x = 277,
        e.y = 135,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_jx_4_kb_8_png",
        e.x = 244,
        e.y = 179,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_1704944_kb_png",
        e.x = 77,
        e.y = 154,
        e
    },
    n.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.7547940749313,
        e.text = "x60兑换",
        e.textColor = 16774231,
        e.x = 109,
        e.y = 161,
        e
    },
    n.btnAdd_1_i = function() {
        var e = new eui.Image;
        return this.btnAdd_1 = e,
        e.source = "gowg_panel5_btnadd_png",
        e.x = 188,
        e.y = 157,
        e
    },
    n.btnOneKeyBuy_0_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_0 = e,
        e.source = "gowg_panel5_btnonekeybuy_png",
        e.x = 203,
        e.y = 88,
        e
    },
    n.btnEx0_i = function() {
        var e = new eui.Image;
        return this.btnEx0 = e,
        e.source = "gowg_panel5_zu_3_png",
        e.x = 210,
        e.y = 61,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_jx_914_kb_png",
        e.x = 98,
        e.y = 48,
        e
    },
    n.btnwu_i = function() {
        var e = new eui.Image;
        return this.btnwu = e,
        e.source = "gowg_panel5_diwujineng_png",
        e.x = 107,
        e.y = 55,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_zu_4_png",
        e.x = 27,
        e.y = 51,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_diyiji_png",
        e.x = 10,
        e.y = 0,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_panel5_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "参与特训战斗胜利可以免费获得1个对应道具\n每季特训每天均可免费参与5次，VIP赛尔免费次数翻倍",
        e.textAlign = "center",
        e.textColor = 16774493,
        e.x = 82,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BattlepopSkin.exml"] = window.godOfWarGaia.BattlepopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet2", "pet1", "txt_leftTime", "btnadd", "btnFight", "title2", "title1", "btnBag", "btnCure", "btnBack", "battlePop"],
        this.height = 505,
        this.width = 900,
        this.elementsContent = [this.battlePop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.battlePop_i = function() {
        var e = new eui.Group;
        return this.battlePop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.pet2_i(), this.pet1_i(), this._Image1_i(), this.txt_leftTime_i(), this.btnadd_i(), this.btnFight_i(), this._Image2_i(), this._Label1_i(), this.title2_i(), this.title1_i(), this._Image3_i(), this.btnBag_i(), this.btnCure_i(), this.btnBack_i()],
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_battlepop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "gowg_battlepop_2610_png",
        e.x = 451,
        e.y = 9,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "gowg_battlepop_1451_png",
        e.visible = !0,
        e.x = 468,
        e.y = 44,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_battlepop_2780_png",
        e.x = 65,
        e.y = 84,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战次数:X",
        e.textColor = 16769906,
        e.x = 352,
        e.y = 447,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "gowg_battlepop_btnadd_png",
        e.visible = !1,
        e.x = 519,
        e.y = 441,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "gowg_battlepop_txtlabel_png",
        e.x = 405,
        e.y = 399,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_battlepop_zu_3_png",
        e.x = 266,
        e.y = 354,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "VIP赛尔每日免费次数翻倍",
        e.textColor = 16777215,
        e.x = 347,
        e.y = 487,
        e
    },
    n.title2_i = function() {
        var e = new eui.Image;
        return this.title2 = e,
        e.source = "gowg_battlepop_·dierji_png",
        e.visible = !1,
        e.x = 463,
        e.y = 38,
        e
    },
    n.title1_i = function() {
        var e = new eui.Image;
        return this.title1 = e,
        e.source = "gowg_battlepop_·diyiji_png",
        e.visible = !1,
        e.x = 463,
        e.y = 38,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_battlepop_txtz·_png",
        e.x = 279,
        e.y = 37,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gowg_panel4_jlbb_png",
        e.x = 12,
        e.y = 152,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gowg_panel4_jlhf_png",
        e.x = 12,
        e.y = 241,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "gowg_battlepop_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BuypopSkin.exml"] = window.godOfWarGaia.BuypopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnOneKeyBuy_1", "btnKe", "yihuode_1", "mark", "btnOneKeyBuy_2", "btnTe", "yihuode_2", "te", "btnOneKeyBuy_3", "btnWu", "yihuode_3", "wu", "btnOneKeyBuy_4", "btnShui", "yihuode_4", "item", "img_di2", "txtCoin1", "icon_gold", "add", "btnBack", "buyPop"],
        this.height = 480,
        this.width = 900,
        this.elementsContent = [this.buyPop_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.buyPop_i = function() {
        var e = new eui.Group;
        return this.buyPop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.mark_i(), this.te_i(), this.wu_i(), this.item_i(), this._Image6_i(), this.img_di2_i(), this.txtCoin1_i(), this.icon_gold_i(), this.add_i(), this.btnBack_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.mark_i = function() {
        var e = new eui.Group;
        return this.mark = e,
        e.x = 33,
        e.y = 114,
        e.elementsContent = [this.btnOneKeyBuy_1_i(), this._Image2_i(), this.btnKe_i(), this._Label1_i(), this.yihuode_1_i()],
        e
    },
    n.btnOneKeyBuy_1_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_1 = e,
        e.source = "gowg_buypop_btnonekeybuy1_png",
        e.x = 9,
        e.y = 248,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "gowg_buypop_20649_png",
        e.x = 33,
        e.y = 72,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "专属刻印",
        e.textColor = 16049801,
        e.x = 42,
        e.y = 24,
        e
    },
    n.yihuode_1_i = function() {
        var e = new eui.Image;
        return this.yihuode_1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "gowg_buypop_yihuode_png",
        e.visible = !0,
        e.x = 14,
        e.y = 258,
        e
    },
    n.te_i = function() {
        var e = new eui.Group;
        return this.te = e,
        e.x = 243,
        e.y = 114,
        e.elementsContent = [this.btnOneKeyBuy_2_i(), this._Image3_i(), this.btnTe_i(), this._Label2_i(), this.yihuode_2_i()],
        e
    },
    n.btnOneKeyBuy_2_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_2 = e,
        e.source = "gowg_buypop_btnonekeybuy3_png",
        e.visible = !0,
        e.x = 9,
        e.y = 248,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "gowg_buypop_zstx_png",
        e.x = 36,
        e.y = 95,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "专属特性",
        e.textColor = 16049801,
        e.x = 42,
        e.y = 25,
        e
    },
    n.yihuode_2_i = function() {
        var e = new eui.Image;
        return this.yihuode_2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "gowg_buypop_yihuode_png",
        e.visible = !0,
        e.x = 14,
        e.y = 258,
        e
    },
    n.wu_i = function() {
        var e = new eui.Group;
        return this.wu = e,
        e.x = 454,
        e.y = 114,
        e.elementsContent = [this.btnOneKeyBuy_3_i(), this._Image4_i(), this.btnWu_i(), this._Label3_i(), this.yihuode_3_i()],
        e
    },
    n.btnOneKeyBuy_3_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_3 = e,
        e.source = "gowg_buypop_btnonekeybuy2_png",
        e.x = 9,
        e.y = 248,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "gowg_buypop_diwujineng_png",
        e.x = 35,
        e.y = 79,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "第五技能",
        e.textColor = 16049801,
        e.x = 43,
        e.y = 25,
        e
    },
    n.yihuode_3_i = function() {
        var e = new eui.Image;
        return this.yihuode_3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "gowg_buypop_yihuode_png",
        e.visible = !0,
        e.x = 14,
        e.y = 258,
        e
    },
    n.item_i = function() {
        var e = new eui.Group;
        return this.item = e,
        e.x = 664,
        e.y = 114,
        e.elementsContent = [this.btnOneKeyBuy_4_i(), this._Image5_i(), this.btnShui_i(), this._Label4_i(), this.yihuode_4_i()],
        e
    },
    n.btnOneKeyBuy_4_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyBuy_4 = e,
        e.source = "gowg_buypop_btnonekeybuy4_png",
        e.x = 9,
        e.y = 248,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnShui_i = function() {
        var e = new eui.Image;
        return this.btnShui = e,
        e.source = "gowg_buypop_300066_png",
        e.visible = !0,
        e.x = 32,
        e.y = 98,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "通用刻印水晶",
        e.textColor = 16049801,
        e.x = 12,
        e.y = 24,
        e
    },
    n.yihuode_4_i = function() {
        var e = new eui.Image;
        return this.yihuode_4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "gowg_buypop_yihuode_png",
        e.visible = !0,
        e.x = 14,
        e.y = 258,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_buypop_sljx_png",
        e.x = 351,
        e.y = 38,
        e
    },
    n.img_di2_i = function() {
        var e = new eui.Image;
        return this.img_di2 = e,
        e.source = "gowg_buypop_img_di2_png",
        e.x = 683,
        e.y = 16,
        e
    },
    n.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 719,
        e.y = 17,
        e
    },
    n.icon_gold_i = function() {
        var e = new eui.Image;
        return this.icon_gold = e,
        e.source = "gowg_buypop_icon_gold_png",
        e.x = 670,
        e.y = 12,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "gowg_buypop_add_png",
        e.x = 801,
        e.y = 16,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "gowg_buypop_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/ChangepopSkin.exml"] = window.godOfWarGaia.ChangepopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "xiao", "xi", "fen", "btngh_1", "btngh_2", "btngh_3", "equp3", "notGet3", "equp2", "notGet2", "equp1", "notGet1", "content", "btnBack", "Te"],
        this.height = 480,
        this.width = 900,
        this.elementsContent = [this.Te_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.Te_i = function() {
        var e = new eui.Group;
        return this.Te = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.content_i(), this._Image7_i(), this.btnBack_i()],
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_buypop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.x = 109,
        e.y = 119,
        e.elementsContent = [this.xiao_i(), this.xi_i(), this.fen_i(), this.btngh_1_i(), this.btngh_2_i(), this.btngh_3_i(), this.equp3_i(), this.notGet3_i(), this.equp2_i(), this.notGet2_i(), this.equp1_i(), this.notGet1_i()],
        e
    },
    n.xiao_i = function() {
        var e = new eui.Image;
        return this.xiao = e,
        e.source = "gowg_changepop_xiao_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.xi_i = function() {
        var e = new eui.Image;
        return this.xi = e,
        e.source = "gowg_changepop_xi_png",
        e.x = 241,
        e.y = 0,
        e
    },
    n.fen_i = function() {
        var e = new eui.Image;
        return this.fen = e,
        e.source = "gowg_changepop_fen_png",
        e.visible = !0,
        e.x = 481,
        e.y = 0,
        e
    },
    n.btngh_1_i = function() {
        var e = new eui.Image;
        return this.btngh_1 = e,
        e.source = "gowg_changepop_btngh_png",
        e.x = 22,
        e.y = 265,
        e
    },
    n.btngh_2_i = function() {
        var e = new eui.Image;
        return this.btngh_2 = e,
        e.source = "gowg_changepop_btngh_png",
        e.x = 263,
        e.y = 265,
        e
    },
    n.btngh_3_i = function() {
        var e = new eui.Image;
        return this.btngh_3 = e,
        e.source = "gowg_changepop_btngh_png",
        e.x = 503,
        e.y = 265,
        e
    },
    n.equp3_i = function() {
        var e = new eui.Image;
        return this.equp3 = e,
        e.source = "gowg_changepop_yzb1_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 485,
        e.y = 52,
        e
    },
    n.notGet3_i = function() {
        var e = new eui.Group;
        return this.notGet3 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.x = 481,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_xibg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_weihuode_png",
        e.visible = !0,
        e.x = 6,
        e.y = 123,
        e
    },
    n.equp2_i = function() {
        var e = new eui.Image;
        return this.equp2 = e,
        e.source = "gowg_changepop_yzb1_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 244,
        e.y = 52,
        e
    },
    n.notGet2_i = function() {
        var e = new eui.Group;
        return this.notGet2 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.x = 241,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_xibg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_weihuode_png",
        e.visible = !0,
        e.x = 6,
        e.y = 123,
        e
    },
    n.equp1_i = function() {
        var e = new eui.Image;
        return this.equp1 = e,
        e.source = "gowg_changepop_yzb1_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 3,
        e.y = 52,
        e
    },
    n.notGet1_i = function() {
        var e = new eui.Group;
        return this.notGet1 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this._Image6_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_xibg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_weihuode_png",
        e.visible = !0,
        e.x = 6,
        e.y = 123,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "gowg_changepop_ghzstx_png",
        e.x = 313,
        e.y = 37,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "gowg_changepop_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/Panel3popSkin.exml"] = window.godOfWarGaia.Panel3popSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "pet3", "a_1", "a_2", "a_3", "btnBag", "btnCure", "title", "btnBack", "pop3"],
        this.height = 480,
        this.width = 900,
        this.elementsContent = [this.pop3_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.pop3_i = function() {
        var e = new eui.Group;
        return this.pop3 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this.a_1_i(), this.a_2_i(), this.a_3_i(), this.btnBag_i(), this.btnCure_i(), this.title_i(), this.btnBack_i()],
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "gowg_panel3pop3_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.source = "gowg_panel3pop3_ywjld_png",
        e.x = 42,
        e.y = 65,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.source = "gowg_panel3pop3_ywjld_png",
        e.x = 318,
        e.y = 15,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.source = "gowg_panel3pop3_ywjld_png",
        e.x = 593,
        e.y = 65,
        e
    },
    n.a_1_i = function() {
        var e = new eui.Image;
        return this.a_1 = e,
        e.source = "gowg_panel3pop3_a_png",
        e.x = 339,
        e.y = 368,
        e
    },
    n.a_2_i = function() {
        var e = new eui.Image;
        return this.a_2 = e,
        e.source = "gowg_panel3pop3_a_png",
        e.x = 619,
        e.y = 414,
        e
    },
    n.a_3_i = function() {
        var e = new eui.Image;
        return this.a_3 = e,
        e.source = "gowg_panel3pop3_a_png",
        e.x = 59,
        e.y = 414,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "gowg_panel3pop3_jlbb_png",
        e.x = 367,
        e.y = 397,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "gowg_panel3pop3_jlhf_png",
        e.x = 459,
        e.y = 397,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "gowg_panel3pop3_title_png",
        e.x = 335,
        e.y = 24,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "gowg_panel3pop3_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    t
} (eui.Skin);