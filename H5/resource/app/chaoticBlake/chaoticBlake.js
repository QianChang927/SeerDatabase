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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.infoStr = ["混沌值15点", "混沌值20点", "混沌值20点", "神智值15点", "神智值20点"],
            n.firstEnter = !0,
            n.skinName = t.Panel3Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "cb_mainpanel_title3_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.bar_hundun.maximum = this.bar_lizhi.maximum = 100
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
            ImageButtonUtil.add(this.btnChouqu,
            function() {
                SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [3, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252322, 1,
                    function() {
                        KTool.doExchange(11056, 1,
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252359, 1,
                    function() {
                        KTool.doExchange(11071, 1,
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
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                var n = e.service.getValue(t.ChaoticBlakeConst.forever_level3_boss);
                FightManager.fightNoMapBoss(n)
            },
            this),
            ImageButtonUtil.add(this.btnFangqi,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252323, 1,
                    function() {
                        KTool.doExchange(11057, 1,
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
        n.prototype.update = function() {
            var e = this,
            n = this.service.getValue(t.ChaoticBlakeConst.forever_levels_state),
            i = this.service.getValue(t.ChaoticBlakeConst.forever_level3_value),
            a = this.service.getValue(t.ChaoticBlakeConst.forever_level3_boss),
            o = this.service.getValue(t.ChaoticBlakeConst.dailyBitbuf_hasGet),
            s = this.service.getValue(t.ChaoticBlakeConst.dailyBitbuf_giveUp),
            r = [65535 & i, i >> 16 & 65535],
            u = r[0],
            _ = r[1],
            c = [this.bar_hundun.value, this.bar_lizhi.value],
            h = c[0],
            l = c[1];
            if (this.txt_value1.text = u + "", this.txt_value2.text = _ + "", this.weizhi.visible = this.btnChouqu.visible = 0 == a, this.grp_btns.visible = this.grp_info.visible = 0 != a, this.bar_hundun.value = u, this.bar_lizhi.value = _, !this.firstEnter) if (u - h > 0) {
                var p = "成功击败敌人，获得<font color='#EE5FFF'>" + (u - h) + "点混沌值</font>";
                BubblerManager.getInstance().showText(p, !0)
            } else if (_ - l > 0) {
                var p = "成功击败敌人，获得<font color='#4AE3FF'>" + (_ - l) + "点神智值</font>";
                BubblerManager.getInstance().showText(p, !0)
            }
            this.firstEnter = !1;
            for (var g = 1 == KTool.getBit(n, 3), b = a - 11641, f = 1; 5 >= f; f++) this["pet" + f].visible = b == f;
            b > 0 && 4 > b ? (this.txt_info.textColor = 15622143, this.txt_info.text = this.infoStr[b - 1]) : b > 0 && b >= 4 && (this.txt_info.textColor = 4908031, this.txt_info.text = this.infoStr[b - 1]),
            u >= 100 && 100 > _ ? Alarm.show("布莱克在混沌的力量中迷失了心智，请再次尝试",
            function() {
                SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [8, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this) : g && 0 == o ? Alarm.show("恭喜你通过了此关，\n可以抽取夜魔的宝藏了！",
            function() {
                var e = new t.Panel3Pop,
                n = PopViewManager.createDefaultStyleObject();
                n.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(e, n)
            },
            this) : 1 == o && 1 == s && this.service.openPanel(t.ChaoticBlakeConst.PANEL4)
        },
        n
    } (BasicPanel);
    t.ChaoticBlakePanel3 = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakePanel3")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.service.setValues([t.ChaoticBlakeConst.forever_level2_boss, t.ChaoticBlakeConst.forever_level2_keyBoss, t.ChaoticBlakeConst.forever_level3_boss, t.ChaoticBlakeConst.forever_level3_value, t.ChaoticBlakeConst.forever_level5_boss, t.ChaoticBlakeConst.forever_level_reward, t.ChaoticBlakeConst.forever_levels_state], [t.ChaoticBlakeConst.daily_up_times, t.ChaoticBlakeConst.daily_boss_state], [t.ChaoticBlakeConst.bitbuf_hasKe, t.ChaoticBlakeConst.bitbuf_hasPet, t.ChaoticBlakeConst.bitbuf_hasTe, t.ChaoticBlakeConst.bitbuf_hasWu], [t.ChaoticBlakeConst.dailyBitbuf_giveUp, t.ChaoticBlakeConst.dailyBitbuf_hasGet]),
            n.init([{
                panelName: t.ChaoticBlakeConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: t.ChaoticBlakeConst.PANEL1
            },
            {
                panelName: t.ChaoticBlakeConst.PANEL2
            },
            {
                panelName: t.ChaoticBlakeConst.PANEL3
            },
            {
                panelName: t.ChaoticBlakeConst.PANEL4
            },
            {
                panelName: t.ChaoticBlakeConst.PANEL5
            }]),
            n
        }
        return __extends(n, e),
        n.prototype.reShow = function() {
            var t = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                t.destroyed || t.currentPanel && t.currentPanel.update && t.currentPanel.update()
            })
        },
        n
    } (BasicMultPanelModule);
    t.ChaoticBlake = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlake")
} (chaoticBlake || (chaoticBlake = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(a, o) {
        function s(t) {
            try {
                u(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function r(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, r)
        }
        u((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
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
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = n;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(n);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, s, r, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 135,
            n.skinName = t.MainpanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(130, this, "cb_mainpanel_bulaike_png",
            function() {
                t.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var e = PetFactorCollectionManager.checkPetIdIndexIsCollection(t.new_monster_level_id);
                t.btnCollect.source = e ? "cb_mainpanel_btncollected_png": "cb_mainpanel_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【巨尊的幻象】"),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【无尽的复仇】"),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【混沌的心智】"),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(252318,
                    function() {
                        KTool.doExchange(11059, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    e)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1715441,
                        productID: 252317
                    },
                    t.caller = e,
                    t.callBack = function(t, n) {
                        KTool.buyProductByCallback(252317, n,
                        function() {
                            KTool.doExchange(11058, n,
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
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【能力提升】"),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan,
            function() {
                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "点击主界面-【兑换精灵】");
                var t = ItemManager.getNumByID(1715441);
                return 150 > t ? void BubblerManager.getInstance().showText("混沌暗影精华数量不足") : void KTool.doExchange(11072, 1,
                function() {
                    e.service.updateValues().then(function() {
                        e.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3539,
                    type: "pet",
                    thisObj: e
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this),
            EventManager.addEventListener("chaoticBlake.GotoPanel3",
            function() {
                e.service.updateValues().then(function() {
                    e.service.openPanel(t.ChaoticBlakeConst.PANEL3)
                })
            },
            this),
            EventManager.addEventListener("chaoticBlake.GotoPanel4",
            function() {
                e.service.openPanel(t.ChaoticBlakeConst.PANEL4)
            },
            this),
            EventManager.addEventListener("chaoticBlake.BackToMainPanel",
            function() {
                e.service.backToMainPanel(),
                e.service.updateValues().then(function() {
                    e.update()
                })
            },
            this),
            EventManager.addEventListener("chaoticBlake.UpdateMain",
            function() {
                e.update()
            },
            this)
        },
        n.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, t = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = t ? "cb_mainpanel_btncollected_png": "cb_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, t)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return e.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            var e = this.service.getValue(t.ChaoticBlakeConst.forever_levels_state),
            n = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasPet),
            i = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasKe),
            a = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasTe),
            o = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasWu),
            s = this.service.getValue(t.ChaoticBlakeConst.dailyBitbuf_hasGet),
            r = this.service.getValue(t.ChaoticBlakeConst.dailyBitbuf_giveUp);
            console.log("关卡状态:" + e);
            for (var u = 0,
            _ = 1 == s || 1 == r,
            c = 1; 3 >= c; c++) {
                this["tomorrow" + c].visible = _;
                var h = 1 == KTool.getBit(e, c);
                this["hasPass" + c].visible = h || n,
                h && u++
            }
            this.tag.visible = n;
            var l = ItemManager.getNumByID(1715441);
            this.txt_itemNum.text = "需要        混沌暗影精华：" + l + "/150";
            var p = l >= 150 ? 589568 : 16711680;
            this.txt_itemNum.textFlow = [{
                text: "需要        混沌暗影精华：",
                style: {
                    textColor: 16769906
                }
            },
            {
                text: l + "",
                style: {
                    textColor: p
                }
            },
            {
                text: "/150",
                style: {
                    textColor: 16769906
                }
            }],
            DisplayUtil.setEnabled(this.btn1, 1 > u && !_ && !n, u >= 1 || _ || n),
            DisplayUtil.setEnabled(this.btn2, 1 == u && !_ && !n, 1 != u || _ || n);
            var g = u >= 2 && (0 == s || 0 == r);
            DisplayUtil.setEnabled(this.btn3, g && !_ && !n, !g || _ || n),
            DisplayUtil.setEnabled(this.btnAdd, !n, n),
            this.hasPass3.visible = 0 != s && 1 != r && u >= 2 || n,
            this.btnUp.visible = n,
            this.btnOnekey.visible = 3 > u && !n;
            var b = a && i && o;
            this.hasUp.visible = b,
            DisplayUtil.setEnabled(this.btnUp, !b, b),
            this.grp_exchangePet.visible = !n
        },
        n
    } (BasicPanel);
    t.ChaoticBlakeMainpanel = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakeMainpanel")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.Panel1Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "cb_mainpanel_title1_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
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
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(252319, 1,
                        function() {
                            SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [1, n],
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    e)
                },
                i),
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    FightManager.fightNoMapBoss(11624 + n)
                },
                i)
            },
            i = this, a = 1; 4 >= a; a++) n(a)
        },
        n.prototype.update = function() {
            for (var e = this,
            n = this.service.getValue(t.ChaoticBlakeConst.forever_levels_state), i = 0, a = 1; 4 >= a; a++) {
                var o = 1 == KTool.getBit(n, 3 + a);
                this["pass" + a].visible = o,
                DisplayUtil.setEnabled(this["btnFast" + a], !o, o),
                DisplayUtil.setEnabled(this["btnFight" + a], !o, o),
                o && i++
            }
            4 == i && Alarm.show("你击败了全部幻象！",
            function() {
                e.service.updateValues().then(function() {
                    EventManager.dispatchEventWith("chaoticBlake.UpdateMain")
                }),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL2)
            },
            this)
        },
        n
    } (BasicPanel);
    t.ChaoticBlakePanel1 = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakePanel1")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.bossID = [2819, 2783, 2709, 2969, 3044, 2695, 2648, 2612, 2712, 2767, 2893, 3115],
            n.bossInfos = [],
            n.skinName = t.Panel2Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            this.name = "chaoticBlake.ChaoticBlakePanel2",
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "cb_mainpanel_title2_png",
            function() {
                n.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this._list.itemRenderer = t.Panel2PetHead,
            this.addEvents()
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
            ImageButtonUtil.add(this.btnChouqu,
            function() {
                SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [2, 0],
                function() {
                    e.service.updateValues().then(function() {
                        e.drawAnim()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252320, 1,
                    function() {
                        KTool.doExchange(11054, 1,
                        function() {
                            e.service.updateValues().then(function() {
                                e.update();
                                var n = e.service.getValue(t.ChaoticBlakeConst.forever_levels_state);
                                0 == KTool.getBit(n, 20) && BubblerManager.getInstance().showText("没有发现斯摩亚蒂斯的踪迹，请继续搜寻")
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                var n = e.service.getValue(t.ChaoticBlakeConst.forever_level2_boss);
                FightManager.fightNoMapBoss(11628 + n)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                e.service.updateValues().then(function() {
                    if (FightManager.isWin) {
                        var n = e.service.getValue(t.ChaoticBlakeConst.forever_levels_state);
                        0 == KTool.getBit(n, 20) && BubblerManager.getInstance().showText("没有发现斯摩亚蒂斯的踪迹，请继续搜寻")
                    }
                    e.update()
                })
            },
            this),
            EventManager.addEventListener("chaoticBlake.BackToPanel2", this.update, this)
        },
        n.prototype.drawAnim = function() {
            for (var e = this,
            n = this.service.getValue(t.ChaoticBlakeConst.forever_level2_boss), i = [], a = [], o = 0, s = 0; s < this._list.numChildren; s++) this._list.getChildAt(s).hasPass || (i.push(this._list.getChildAt(s)), a.push(s));
            o = 3 * i.length,
            this.touchChildren = !1;
            var r = {};
            r.i = 1;
            var u = a.indexOf(n - 1) + 1;
            egret.Tween.get(r, {
                onChange: function() {
                    for (var t = (Math.floor(r.i) - 1) % i.length, n = 0; n < i.length; n++) e._list.getChildAt(a[n]).xuanzhong.visible = !1,
                    e._list.getChildAt(a[n]).alpha = .6;
                    e._list.getChildAt(a[t]).xuanzhong.visible = !0,
                    e._list.getChildAt(a[t]).alpha = 1
                }
            }).to({
                i: o + u
            },
            5e3, egret.Ease.quadInOut).call(function() {
                e.touchChildren = !0,
                e.update()
            })
        },
        n.prototype.update = function() {
            var e = this,
            n = this.service.getValue(t.ChaoticBlakeConst.forever_level2_boss),
            i = this.service.getValue(t.ChaoticBlakeConst.forever_levels_state);
            this.btnTiaozhan.visible = this.btnYijian.visible = 0 != n,
            this.btnChouqu.visible = 0 == n,
            this.updateRener();
            var a = 1 == KTool.getBit(i, 2);
            KTool.getBit(i, 20) > 0 && !a ? Alarm.show("斯摩亚蒂斯残留的力量暴露出来了！",
            function() {
                e.service.updateValues().then(function() {
                    EventManager.dispatchEventWith("chaoticBlake.UpdateMain")
                });
                var n = new t.Panel2Pop,
                i = PopViewManager.createDefaultStyleObject();
                i.ignoreMaskClick = !0,
                PopViewManager.getInstance().openView(n, i)
            },
            this) : a && Alarm.show("成功击败了斯摩亚蒂斯残余的力量!",
            function() {
                EventManager.removeAll(e),
                e.service.openPanel(t.ChaoticBlakeConst.PANEL3)
            },
            this)
        },
        n.prototype.updateRener = function() {
            this.bossInfos = [];
            for (var e = this.service.getValue(t.ChaoticBlakeConst.forever_levels_state), n = this.service.getValue(t.ChaoticBlakeConst.forever_level2_boss), i = 0; i < this.bossID.length; i++) {
                var a = {};
                a.id = i + 1,
                a.hasPass = 1 == KTool.getBit(e, 8 + i),
                a.petid = this.bossID[i],
                a.curDrawID = n,
                this.bossInfos.push(a)
            }
            this._list.dataProvider = new eui.ArrayCollection(this.bossInfos)
        },
        n
    } (BasicPanel);
    t.ChaoticBlakePanel2 = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakePanel2")
} (chaoticBlake || (chaoticBlake = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
chaoticBlake; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAINPANEL = "chaoticBlake.ChaoticBlakeMainpanel",
        t.PANEL1 = "chaoticBlake.ChaoticBlakePanel1",
        t.PANEL2 = "chaoticBlake.ChaoticBlakePanel2",
        t.PANEL3 = "chaoticBlake.ChaoticBlakePanel3",
        t.PANEL4 = "chaoticBlake.ChaoticBlakePanel4",
        t.PANEL5 = "chaoticBlake.ChaoticBlakePanel5",
        t.chaoticBlake_CMD = 41758,
        t.forever_levels_state = 8743,
        t.forever_level2_boss = 8744,
        t.forever_level2_keyBoss = 8745,
        t.forever_level3_boss = 8746,
        t.forever_level3_value = 8747,
        t.forever_level5_boss = 8748,
        t.forever_level_reward = 8749,
        t.daily_boss_state = 11183,
        t.daily_up_times = 11184,
        t.dailyBitbuf_hasGet = 1000371,
        t.dailyBitbuf_giveUp = 1000372,
        t.bitbuf_hasPet = 17827,
        t.bitbuf_hasKe = 17828,
        t.bitbuf_hasWu = 17829,
        t.bitbuf_hasTe = 17830,
        t
    } ();
    t.ChaoticBlakeConst = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakeConst")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.Panel4Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "cb_mainpanel_title4_png",
            function() {
                Alert.show("你确定要放弃这份难得的奖励吗？,<font color='#ff0000'>放弃之后今日无法再次进入额外挑战！</font>",
                function() {
                    StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "选择放弃隐藏关卡"),
                    SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [6, 0],
                    function() {
                        n.service.updateValues().then(function() {
                            n.service.backToMainPanel()
                        })
                    })
                })
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
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
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnFast" + n],
                function() {
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(252324, 1,
                        function() {
                            SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [5, n],
                            function() {
                                e.service.updateValues().then(function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    e)
                },
                i),
                ImageButtonUtil.add(i["btnFight" + n],
                function() {
                    FightManager.fightNoMapBoss(11646 + n)
                },
                i)
            },
            i = this, a = 1; 4 >= a; a++) n(a);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin ? BubblerManager.getInstance().showText("挑战成功！") : Alarm.show("很遗憾，挑战失败，你与隐藏奖励失之交臂",
                function() {
                    e.service.backToMainPanel()
                })
            },
            this)
        },
        n.prototype.update = function() {
            for (var e = this,
            n = this.service.getValue(t.ChaoticBlakeConst.daily_boss_state), i = 0, a = 1; 4 >= a; a++) {
                var o = 1 == KTool.getBit(n, a);
                this["pass" + a].visible = o,
                o && i++,
                DisplayUtil.setEnabled(this["btnFight" + a], !o, o),
                DisplayUtil.setEnabled(this["btnFast" + a], !o, o)
            }
            i >= 4 && Alarm.show("恭喜你，获得了这份珍贵的隐藏奖励！",
            function() {
                e.service.backToMainPanel()
            })
        },
        n
    } (BasicPanel);
    t.ChaoticBlakePanel4 = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakePanel4")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.leftTime = 0,
            n.needNum = [1, 1, 2, 2, 2, 3, 3, 3, 5, 5],
            n.skinName = t.Panel5Skin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "cb_mainpanel_title5_png",
            function() {
                t.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
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
            ImageButtonUtil.add(this.btnTe,
            function() {
                e.service.showPetEff(3539)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var t = {
                    id: 31654
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(41145) ? (t = {},
                t.ins = 41145, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = 41145, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.btnKaishi,
            function() {
                return e.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足！") : void(e.isclickFight || (e.isclickFight = !0, FightManager.fightNoMapBoss(11651)))
            },
            this),
            ImageButtonUtil.add(this.btnJixu,
            function() {
                if (!e.isclickFight) {
                    e.isclickFight = !0;
                    var n = e.service.getValue(t.ChaoticBlakeConst.forever_level5_boss);
                    FightManager.fightNoMapBoss(11651 + n)
                }
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    var t = {};
                    t.type = "product_diamond",
                    t.ins = {
                        iconID: 1715442,
                        productID: 252325
                    },
                    t.caller = e,
                    t.callBack = function(t, n) {
                        KTool.buyProductByCallback(252325, n,
                        function() {
                            KTool.doExchange(11060, n,
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
            this);
            for (var n = [30, 40, 60], i = function(i) {
                ImageButtonUtil.add(a["btnDuihuan" + i],
                function() {
                    return ItemManager.getNumByID(1715442) < n[i - 1] ? void BubblerManager.getInstance().showText("混沌之影数量不足！") : PetManager.isDefaultPet(3539) ? void SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [7, i],
                    function() {
                        if (1 != i) {
                            var t = 2 == i ? "成功兑换第五技能": "成功兑换专属特性";
                            BubblerManager.getInstance().showText(t)
                        }
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    }) : void Alarm.show("请将混沌布莱克放入出战背包首发！",
                    function() {
                        e.service.showPetBag()
                    })
                },
                a)
            },
            a = this, o = 1; 3 >= o; o++) i(o);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin || Alarm.show("战斗失败，需要重新开始挑战")
            },
            this)
        },
        n.prototype.update = function() {
            this.isclickFight = !1,
            this.leftTime = 2 - this.service.getValue(t.ChaoticBlakeConst.daily_up_times);
            var e = this.service.getValue(t.ChaoticBlakeConst.forever_level5_boss),
            n = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasKe),
            i = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasWu),
            a = 1 == this.service.getValue(t.ChaoticBlakeConst.bitbuf_hasTe);
            this.txt_level.text = e + 1 + "/10",
            this.btnKaishi.visible = 0 == e,
            this.btnJixu.visible = 0 != e,
            this.txt_hasNum.text = ItemManager.getNumByID(1715442) + "",
            this.txt_leftTime.text = "" + this.leftTime,
            DisplayUtil.setEnabled(this.btnDuihuan1, !n, n),
            DisplayUtil.setEnabled(this.btnDuihuan2, !i, i),
            DisplayUtil.setEnabled(this.btnDuihuan3, !a, a);
            for (var o = 1; 10 >= o; o++) this["pet" + o].visible = e + 1 == o;
            this.txt_bossNum.text = "*" + this.needNum[e + 1 - 1],
            n && a && i && this.service.backToMainPanel()
        },
        n
    } (BasicPanel);
    t.ChaoticBlakePanel5 = e,
    __reflect(e.prototype, "chaoticBlake.ChaoticBlakePanel5")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.Panel2popSkin,
            n
        }
        return __extends(n, e),
        n.prototype.initialized = function() {
            var t = this;
            e.prototype.initialized.call(this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                ModuleManager.showModuleByID(10),
                t.hide(),
                EventManager.dispatchEventWith("chaoticBlake.BackToPanel2")
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                FightManager.fightNoMapBoss(11641),
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(252321, 1,
                    function() {
                        KTool.doExchange(11055, 1,
                        function() {
                            t.hide(),
                            Alarm.show("成功击败了斯摩亚蒂斯残余的力量!",
                            function() {
                                EventManager.dispatchEventWith("chaoticBlake.GotoPanel3")
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide(),
                EventManager.removeAll(t),
                EventManager.dispatchEventWith("chaoticBlake.BackToMainPanel")
            },
            this)
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this)
        },
        n
    } (PopView);
    t.Panel2Pop = e,
    __reflect(e.prototype, "chaoticBlake.Panel2Pop")
} (chaoticBlake || (chaoticBlake = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(a, o) {
        function s(t) {
            try {
                u(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function r(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(s, r)
        }
        u((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (a = 1, o && (s = o[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(s = s.call(o, n[1])).done) return s;
            switch (o = 0, s && (n = [0, s.value]), n[0]) {
            case 0:
            case 1:
                s = n;
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
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = n;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(n);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            o = 0
        } finally {
            a = s = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, o, s, r, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.curRewardID = 0,
            n.selectId = 0,
            n.skinName = t.Panel3popSkin,
            n
        }
        return __extends(n, e),
        n.prototype.initialized = function() {
            var t = this;
            this.drawAnim = SpineUtil.createAnimate("hundunbulaike"),
            this.panel3pop.addChildAt(this.drawAnim, 0),
            this.drawAnim.touchEnabled = !1,
            this.drawAnim.scaleX = this.drawAnim.scaleY = .5,
            this.drawAnim.x = 377,
            this.drawAnim.y = 214,
            this.gpr_info.alpha = 0,
            this.drawAnim.play("appear", 1, 0, {
                playEnd: function() {
                    t.gpr_info.alpha = 1
                }
            }),
            this.animStart(),
            e.prototype.initialized.call(this),
            this.addEvent()
        },
        n.prototype.animStart = function() {
            for (var t = 1; 5 >= t; t++) this["imgbg" + t].source = "cb_panel3pop_no_png",
            this["grp_Info" + t].visible = !1
        },
        n.prototype.addEvent = function() {
            for (var e = this,
            n = function(n) {
                ImageButtonUtil.add(i["imgbg" + n],
                function() {
                    0 == e.curRewardID && (e.selectId = n, e.grp_cards.touchChildren = e.grp_cards.touchEnabled = !1, SocketConnection.sendByQueue(t.ChaoticBlakeConst.chaoticBlake_CMD, [4, 0],
                    function() {
                        return __awaiter(e, void 0, void 0,
                        function() {
                            var e, n = this;
                            return __generator(this,
                            function(i) {
                                switch (i.label) {
                                case 0:
                                    return [4, KTool.getMultiValueAsync([t.ChaoticBlakeConst.forever_level_reward])];
                                case 1:
                                    return e = i.sent(),
                                    KTool.doExchange(11065 + e[0] - 1, 1,
                                    function() {
                                        n.gpr_info.alpha = 0,
                                        n.showGift(e[0]);
                                        var t = ["x2", "x3", "x5", "x8", "x10"];
                                        n.drawAnim.play(t[e[0] - 1], 1, 1, {
                                            playEnd: function() {
                                                n.gpr_info.alpha = 1,
                                                n.update()
                                            }
                                        })
                                    }),
                                    [2]
                                }
                            })
                        })
                    }))
                },
                i)
            },
            i = this, a = 1; 5 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide(),
                EventManager.removeAll(e),
                EventManager.dispatchEventWith("chaoticBlake.BackToMainPanel")
            },
            this)
        },
        n.prototype.showGift = function(t) {
            for (var e = 1; 5 >= e; e++) this["imgbg" + e].source = "cb_panel3pop_no_png",
            this["grp_Info" + e].visible = !0;
            var n = 0,
            i = [2, 3, 5, 8, 10],
            a = [1, 2, 3, 4, 5];
            switch (t) {
            case 1:
                n = 1;
                break;
            case 2:
            case 3:
                n = 2;
                break;
            case 4:
                n = 3;
                break;
            case 5:
                n = 4
            }
            this["imgbg" + this.selectId].source = "cb_panel3pop_img" + n + "_png",
            this["txtNum" + this.selectId].text = "x" + i[t - 1],
            10 == i[t - 1] ? this["state" + this.selectId].source = "cb_panel3pop_dajiang_png": 8 == i[t - 1] ? this["state" + this.selectId].source = "cb_panel3pop_yunqibucuo_png": this["state" + this.selectId].source = "",
            a.splice(t - 1, 1);
            for (var e = 1; 5 >= e; e++) if (e != this.selectId) {
                var o = MathUtil.RandomCeilInt(1, a.length),
                s = a.splice(o - 1, 1);
                switch (s[0]) {
                case 1:
                    n = 1;
                    break;
                case 2:
                case 3:
                    n = 2;
                    break;
                case 4:
                    n = 3;
                    break;
                case 5:
                    n = 4
                }
                this["imgbg" + e].source = "cb_panel3pop_img" + n + "_png",
                this["txtNum" + e].text = "x" + i[s[0] - 1],
                10 == i[s[0] - 1] ? this["state" + e].source = "cb_panel3pop_dajiang_png": 8 == i[s[0] - 1] ? this["state" + e].source = "cb_panel3pop_yunqibucuo_png": this["state" + e].source = ""
            }
        },
        n.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([t.ChaoticBlakeConst.forever_level_reward],
            function(n) {
                KTool.getBitSet([t.ChaoticBlakeConst.dailyBitbuf_hasGet],
                function(i) {
                    e.curRewardID = n[0];
                    var a = 1 == i[0];
                    if (a && 0 == e.curRewardID) {
                        var o = "战神联盟的友谊是布莱克不屈的信念,接受联盟成员的考验,可以额外获得<font color='#ff0000'>混沌暗影精华x10</font>，是否前往挑战？";
                        Alert.show(o,
                        function() {
                            StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "选择进入隐藏关卡"),
                            e.hide(),
                            EventManager.dispatchEventWith("chaoticBlake.GotoPanel4")
                        },
                        function() {
                            var n = "你确定要放弃这份难得的奖励吗？<font color='#ff0000'>放弃之后今日无法再次进入额外挑战！</font>";
                            Alert.show(n,
                            function() {
                                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "选择放弃隐藏关卡"),
                                SocketConnection.send(t.ChaoticBlakeConst.chaoticBlake_CMD, [6, 0]),
                                e.hide(),
                                EventManager.dispatchEventWith("chaoticBlake.BackToMainPanel")
                            },
                            function() {
                                StatLogger.log("20230310版本系统功能", "混沌布莱克搬迁", "选择进入隐藏关卡"),
                                e.hide(),
                                EventManager.dispatchEventWith("chaoticBlake.GotoPanel4")
                            })
                        })
                    }
                })
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.Panel3Pop = e,
    __reflect(e.prototype, "chaoticBlake.Panel3Pop")
} (chaoticBlake || (chaoticBlake = {}));
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
chaoticBlake; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.hasPass = !1,
            n.skinName = t.Panel2PetHeadRender,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.dataChanged = function() {
            this.head.source = ClientConfig.getPetHeadPath(this.data.petid),
            this.pass.visible = this.data.hasPass,
            this.xuanzhong.visible = this.data.curDrawID == this.data.id,
            this.hasPass = this.data.hasPass
        },
        n
    } (eui.ItemRenderer);
    t.Panel2PetHead = e,
    __reflect(e.prototype, "chaoticBlake.Panel2PetHead")
} (chaoticBlake || (chaoticBlake = {})),
window.chaoticBlake = window.chaoticBlake || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.chaoticBlake.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnUp", "btn1", "btn2", "btn3", "tomorrow2", "tomorrow1", "tomorrow3", "hasPass3", "hasPass1", "hasPass2", "btnDuihuan", "txt_itemNum", "btnAdd", "grp_exchangePet", "btnInfo", "btnCollect", "tag", "hasUp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "cb_mainpanel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -2.5,
        t.visible = !0,
        t.y = 10,
        t.elementsContent = [this._Image1_i(), this.btnOnekey_i(), this.btnUp_i(), this.btn1_i(), this.btn2_i(), this.btn3_i(), this.tomorrow2_i(), this.tomorrow1_i(), this.tomorrow3_i(), this.hasPass3_i(), this.hasPass1_i(), this.hasPass2_i(), this._Image2_i(), this.grp_exchangePet_i(), this.btnInfo_i(), this.btnCollect_i(), this.tag_i(), this.hasUp_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_mainpanel_3539_png",
        t.x = 0,
        t.y = 9,
        t
    },
    n.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.source = "cb_mainpanel_btnonekey_png",
        t.x = 870,
        t.y = 533,
        t
    },
    n.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "cb_mainpanel_btnup_png",
        t.x = 870,
        t.y = 533,
        t
    },
    n.btn1_i = function() {
        var t = new eui.Image;
        return this.btn1 = t,
        t.source = "cb_mainpanel_btn1_png",
        t.x = 749,
        t.y = 62,
        t
    },
    n.btn2_i = function() {
        var t = new eui.Image;
        return this.btn2 = t,
        t.source = "cb_mainpanel_btn2_png",
        t.x = 749,
        t.y = 213,
        t
    },
    n.btn3_i = function() {
        var t = new eui.Image;
        return this.btn3 = t,
        t.source = "cb_mainpanel_btn3_png",
        t.x = 749,
        t.y = 365,
        t
    },
    n.tomorrow2_i = function() {
        var t = new eui.Image;
        return this.tomorrow2 = t,
        t.source = "cb_mainpanel_mingri_png",
        t.x = 758,
        t.y = 214,
        t
    },
    n.tomorrow1_i = function() {
        var t = new eui.Image;
        return this.tomorrow1 = t,
        t.source = "cb_mainpanel_mingri_png",
        t.x = 758,
        t.y = 53,
        t
    },
    n.tomorrow3_i = function() {
        var t = new eui.Image;
        return this.tomorrow3 = t,
        t.source = "cb_mainpanel_mingri_png",
        t.x = 758,
        t.y = 364,
        t
    },
    n.hasPass3_i = function() {
        var t = new eui.Image;
        return this.hasPass3 = t,
        t.source = "cb_mainpanel_yiwancheng_png",
        t.x = 744,
        t.y = 403,
        t
    },
    n.hasPass1_i = function() {
        var t = new eui.Image;
        return this.hasPass1 = t,
        t.source = "cb_mainpanel_yiwancheng_png",
        t.x = 744,
        t.y = 100,
        t
    },
    n.hasPass2_i = function() {
        var t = new eui.Image;
        return this.hasPass2 = t,
        t.source = "cb_mainpanel_yiwancheng_png",
        t.x = 754,
        t.y = 251,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_mainpanel_title_png",
        t.x = 117,
        t.y = 343,
        t
    },
    n.grp_exchangePet_i = function() {
        var t = new eui.Group;
        return this.grp_exchangePet = t,
        t.x = 103,
        t.y = 516,
        t.elementsContent = [this.btnDuihuan_i(), this._Image3_i(), this.txt_itemNum_i(), this._Image4_i(), this.btnAdd_i()],
        t
    },
    n.btnDuihuan_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan = t,
        t.source = "cb_mainpanel_btnduihuan__png",
        t.x = 157,
        t.y = 43,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_mainpanel_duihuanbg_png",
        t.x = 0,
        t.y = 1,
        t
    },
    n.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "需要        混沌暗影精华：99/150",
        t.textColor = 16769906,
        t.x = 79,
        t.y = 8,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_mainpanel_icon_png",
        t.x = 117,
        t.y = 0,
        t
    },
    n.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "cb_mainpanel_btnadd_png",
        t.x = 340,
        t.y = 3,
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "cb_mainpanel_btninfo_png",
        t.x = 61,
        t.y = 542,
        t
    },
    n.btnCollect_i = function() {
        var t = new eui.Image;
        return this.btnCollect = t,
        t.source = "cb_mainpanel_btncollect_png",
        t.x = 61,
        t.y = 474,
        t
    },
    n.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.height = 56,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_mainpanel_tag_png",
        t.width = 180,
        t.x = 288,
        t.y = 284,
        t
    },
    n.hasUp_i = function() {
        var t = new eui.Image;
        return this.hasUp = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_mainpanel_yihuode_png",
        t.x = 867,
        t.y = 554,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.chaoticBlake.Panel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "btnFight1", "btnFast1", "pass1", "btnFight2", "btnFast2", "pass2", "btnFight3", "btnFast3", "pass3", "btnFight4", "btnFast4", "pass4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group5_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "cb_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group5_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -40.5,
        t.y = 24,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Image5_i(), this._Image6_i(), this._Label1_i()],
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "cb_panel1_jlbb_png",
        t.x = 0,
        t.y = 419,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cb_panel1_jlhf_png",
        t.x = 0,
        t.y = 509,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 115,
        t.y = 107,
        t.elementsContent = [this._Image1_i(), this.btnFight1_i(), this.btnFast1_i(), this.pass1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_1_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 410,
        t
    },
    n.btnFast1_i = function() {
        var t = new eui.Image;
        return this.btnFast1 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 410,
        t
    },
    n.pass1_i = function() {
        var t = new eui.Image;
        return this.pass1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 35,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 349,
        t.y = 107,
        t.elementsContent = [this._Image2_i(), this.btnFight2_i(), this.btnFast2_i(), this.pass2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 410,
        t
    },
    n.btnFast2_i = function() {
        var t = new eui.Image;
        return this.btnFast2 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 410,
        t
    },
    n.pass2_i = function() {
        var t = new eui.Image;
        return this.pass2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 35,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 583,
        t.y = 107,
        t.elementsContent = [this._Image3_i(), this.btnFight3_i(), this.btnFast3_i(), this.pass3_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight3_i = function() {
        var t = new eui.Image;
        return this.btnFight3 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 410,
        t
    },
    n.btnFast3_i = function() {
        var t = new eui.Image;
        return this.btnFast3 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 410,
        t
    },
    n.pass3_i = function() {
        var t = new eui.Image;
        return this.pass3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 35,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 817,
        t.y = 106,
        t.elementsContent = [this._Image4_i(), this.btnFight4_i(), this.btnFast4_i(), this.pass4_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight4_i = function() {
        var t = new eui.Image;
        return this.btnFight4 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 411,
        t
    },
    n.btnFast4_i = function() {
        var t = new eui.Image;
        return this.btnFast4 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 411,
        t
    },
    n.pass4_i = function() {
        var t = new eui.Image;
        return this.pass4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 35,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_jzdhx_png",
        t.x = 444,
        t.y = 0,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel1_tipsbg_png",
        t.x = 122,
        t.y = 67,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "逝者巨樽制造了多种幻象，只有击破这些幻象，才能进入下一关",
        t.textColor = 16769906,
        t.x = 284,
        t.y = 74,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2popSkin.exml"] = window.chaoticBlake.Panel2popSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnTiaozhan", "btnYijian", "btnBag", "btnCure", "pop"],
        this.height = 306,
        this.width = 579,
        this.elementsContent = [this.pop_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Label1_i(), this._Image3_i(), this.btnTiaozhan_i(), this.btnYijian_i(), this.btnBag_i(), this.btnCure_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 284,
        t.scale9Grid = new egret.Rectangle(1, 1, 4, 4),
        t.source = "chaoticBlakepanel2Pop_bg4_png",
        t.width = 673,
        t.x = 0,
        t.y = 22,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 305,
        t.source = "chaoticBlakepanel2Pop_3115da_png",
        t.touchEnabled = !1,
        t.width = 355,
        t.x = 73,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "chaoticBlakepanel2Pop_close_png",
        t.width = 34,
        t.x = 632,
        t.y = 22,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "将其击败可进入下一关",
        t.textColor = 15849983,
        t.x = 415,
        t.y = 115,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "chaoticBlakepanel2Pop_fxsmyds_png",
        t.width = 151,
        t.x = 430,
        t.y = 67,
        t
    },
    n.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.height = 46,
        t.source = "cb_panel2_btntiaozhan_png",
        t.width = 134,
        t.x = 438,
        t.y = 235,
        t
    },
    n.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "cb_panel2_btnyijian_png",
        t.x = 438,
        t.y = 177,
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.height = 68,
        t.source = "cb_panel1_jlbb_png",
        t.width = 73,
        t.x = 15,
        t.y = 140,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 68,
        t.source = "cb_panel1_jlhf_png",
        t.width = 74,
        t.x = 15,
        t.y = 230,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.chaoticBlake.Panel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "_list", "btnChouqu", "btnTiaozhan", "btnYijian"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "cb_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -40.5,
        t.y = 25,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i(), this._Image1_i(), this._list_i(), this.btnChouqu_i(), this.btnTiaozhan_i(), this.btnYijian_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "cb_panel1_jlbb_png",
        t.x = 0,
        t.y = 418,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cb_panel1_jlhf_png",
        t.x = 0,
        t.y = 508,
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel2_xz_18_png",
        t.visible = !0,
        t.x = 171,
        t.y = 159,
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.height = 300,
        t.width = 850,
        t.x = 186,
        t.y = 187,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.requestedColumnCount = 6,
        t.verticalGap = 8,
        t
    },
    n.btnChouqu_i = function() {
        var t = new eui.Image;
        return this.btnChouqu = t,
        t.source = "cb_panel2_btnchouqu_png",
        t.x = 503,
        t.y = 507,
        t
    },
    n.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "cb_panel2_btntiaozhan_png",
        t.x = 580,
        t.y = 507,
        t
    },
    n.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "cb_panel2_btnyijian_png",
        t.x = 428,
        t.y = 507,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel2_jzdhx_png",
        t.x = 444,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel2_tipsbg_png",
        t.x = 122,
        t.y = 66,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "斯摩亚蒂斯留存了一丝力量，让逝者巨樽营造了无数被战神联盟击败过的仇敌们的幻象。",
        t.textColor = 16769906,
        t.x = 226,
        t.y = 73,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "它的力量隐藏在当中的某个幻象之中，你必须将它找出来并击败，才能进入下一关！",
        t.textColor = 16769906,
        t.x = 245,
        t.y = 95,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3popSkin.exml"] = window.chaoticBlake.Panel3popSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgbg1", "txtNum1", "state1", "grp_Info1", "imgbg2", "txtNum2", "state2", "grp_Info2", "imgbg3", "txtNum3", "state3", "grp_Info3", "imgbg4", "txtNum4", "state4", "grp_Info4", "imgbg5", "txtNum5", "state5", "grp_Info5", "grp_cards", "no", "smallicon", "btnClose", "gpr_info", "panel3pop"],
        this.height = 429,
        this.width = 752,
        this.elementsContent = [this.panel3pop_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.panel3pop_i = function() {
        var t = new eui.Group;
        return this.panel3pop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.gpr_info_i()],
        t
    },
    n.gpr_info_i = function() {
        var t = new eui.Group;
        return this.gpr_info = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.grp_cards_i(), this.no_i(), this._Image8_i(), this._Label1_i(), this.smallicon_i(), this._Label2_i(), this.btnClose_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 429,
        t.scale9Grid = new egret.Rectangle(1, 1, 5, 4),
        t.source = "cb_panel3pop_bg4_png",
        t.width = 752,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_yhgg_png",
        t.x = 311,
        t.y = 16,
        t
    },
    n.grp_cards_i = function() {
        var t = new eui.Group;
        return this.grp_cards = t,
        t.x = 9,
        t.y = 93,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgbg1_i(), this.grp_Info1_i()],
        t
    },
    n.imgbg1_i = function() {
        var t = new eui.Image;
        return this.imgbg1 = t,
        t.source = "cb_panel3pop_img3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_Info1_i = function() {
        var t = new eui.Group;
        return this.grp_Info1 = t,
        t.x = 35,
        t.y = 57,
        t.elementsContent = [this._Image3_i(), this.txtNum1_i(), this.state1_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_icon_png",
        t.x = 1,
        t.y = 0,
        t
    },
    n.txtNum1_i = function() {
        var t = new eui.Label;
        return this.txtNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x8",
        t.textColor = 16771941,
        t.x = 67,
        t.y = 75,
        t
    },
    n.state1_i = function() {
        var t = new eui.Image;
        return this.state1 = t,
        t.source = "cb_panel3pop_yunqibucuo_png",
        t.x = 0,
        t.y = 129,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 145,
        t.y = 0,
        t.elementsContent = [this.imgbg2_i(), this.grp_Info2_i()],
        t
    },
    n.imgbg2_i = function() {
        var t = new eui.Image;
        return this.imgbg2 = t,
        t.source = "cb_panel3pop_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_Info2_i = function() {
        var t = new eui.Group;
        return this.grp_Info2 = t,
        t.x = 35,
        t.y = 57,
        t.elementsContent = [this._Image4_i(), this.txtNum2_i(), this.state2_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_icon_png",
        t.x = 1,
        t.y = 0,
        t
    },
    n.txtNum2_i = function() {
        var t = new eui.Label;
        return this.txtNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x8",
        t.textColor = 16771941,
        t.x = 67,
        t.y = 75,
        t
    },
    n.state2_i = function() {
        var t = new eui.Image;
        return this.state2 = t,
        t.source = "cb_panel3pop_yunqibucuo_png",
        t.x = 0,
        t.y = 129,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 290,
        t.y = 0,
        t.elementsContent = [this.imgbg3_i(), this.grp_Info3_i()],
        t
    },
    n.imgbg3_i = function() {
        var t = new eui.Image;
        return this.imgbg3 = t,
        t.source = "cb_panel3pop_img4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_Info3_i = function() {
        var t = new eui.Group;
        return this.grp_Info3 = t,
        t.x = 35,
        t.y = 57,
        t.elementsContent = [this._Image5_i(), this.txtNum3_i(), this.state3_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_icon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtNum3_i = function() {
        var t = new eui.Label;
        return this.txtNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x10",
        t.textColor = 16771941,
        t.x = 62,
        t.y = 75,
        t
    },
    n.state3_i = function() {
        var t = new eui.Image;
        return this.state3 = t,
        t.source = "cb_panel3pop_dajiang_png",
        t.x = 7,
        t.y = 122,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 435,
        t.y = 0,
        t.elementsContent = [this.imgbg4_i(), this.grp_Info4_i()],
        t
    },
    n.imgbg4_i = function() {
        var t = new eui.Image;
        return this.imgbg4 = t,
        t.source = "cb_panel3pop_img1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_Info4_i = function() {
        var t = new eui.Group;
        return this.grp_Info4 = t,
        t.x = 35,
        t.y = 57,
        t.elementsContent = [this._Image6_i(), this.txtNum4_i(), this.state4_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_icon_png",
        t.x = 1,
        t.y = 0,
        t
    },
    n.txtNum4_i = function() {
        var t = new eui.Label;
        return this.txtNum4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x8",
        t.textColor = 16771941,
        t.x = 67,
        t.y = 75,
        t
    },
    n.state4_i = function() {
        var t = new eui.Image;
        return this.state4 = t,
        t.source = "cb_panel3pop_yunqibucuo_png",
        t.x = 0,
        t.y = 129,
        t
    },
    n._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 580,
        t.y = 0,
        t.elementsContent = [this.imgbg5_i(), this.grp_Info5_i()],
        t
    },
    n.imgbg5_i = function() {
        var t = new eui.Image;
        return this.imgbg5 = t,
        t.source = "cb_panel3pop_img2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.grp_Info5_i = function() {
        var t = new eui.Group;
        return this.grp_Info5 = t,
        t.visible = !0,
        t.x = 35,
        t.y = 57,
        t.elementsContent = [this._Image7_i(), this.txtNum5_i(), this.state5_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_icon_png",
        t.x = 1,
        t.y = 0,
        t
    },
    n.txtNum5_i = function() {
        var t = new eui.Label;
        return this.txtNum5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "x8",
        t.textColor = 16771941,
        t.x = 67,
        t.y = 75,
        t
    },
    n.state5_i = function() {
        var t = new eui.Image;
        return this.state5 = t,
        t.source = "cb_panel3pop_yunqibucuo_png",
        t.x = 0,
        t.y = 129,
        t
    },
    n.no_i = function() {
        var t = new eui.Image;
        return this.no = t,
        t.source = "cb_panel3pop_no_png",
        t.visible = !1,
        t.x = 589,
        t.y = 93,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3pop_juxing_16_png",
        t.x = 14,
        t.y = 355,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "凑齐150个混沌暗影精华           即可兑换混沌布莱克",
        t.textColor = 16771941,
        t.x = 155,
        t.y = 372,
        t
    },
    n.smallicon_i = function() {
        var t = new eui.Image;
        return this.smallicon = t,
        t.source = "cb_panel3pop_smallicon_png",
        t.x = 364,
        t.y = 353,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "点击抽取你的奖励",
        t.textColor = 16771941,
        t.x = 304,
        t.y = 51,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "cb_panel3pop_btnclose_png",
        t.x = 712,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.chaoticBlake.Panel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnBag", "btnCure", "weizhi", "pet1", "pet2", "pet3", "pet4", "pet5", "btnChouqu", "btnTiaozhan", "btnYijian", "btnFangqi", "grp_btns", "pets", "bar_hundun", "txt_value1", "bar_lizhi", "txt_value2", "txt_info", "grp_info"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group3_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 353,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "cb_panel3_jindu2_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 353,
            t.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            t.source = "cb_panel3_jindu1_png",
            t.visible = !0,
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "cb_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    a._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 4,
        t.width = 1110,
        t.y = 24,
        t.elementsContent = [this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i(), this.pets_i(), this._Group1_i(), this._Group2_i(), this.grp_info_i(), this._Image7_i(), this._Image8_i(), this._Label2_i(), this._Label3_i()],
        t
    },
    a.btnOnekey_i = function() {
        var t = new eui.Image;
        return this.btnOnekey = t,
        t.height = 89,
        t.source = "cb_panel3_btnOnekey_png",
        t.width = 89,
        t.x = 990,
        t.y = 513,
        t
    },
    a.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "cb_panel1_jlbb_png",
        t.x = 0,
        t.y = 419,
        t
    },
    a.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cb_panel1_jlhf_png",
        t.x = 0,
        t.y = 509,
        t
    },
    a.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.x = 302,
        t.y = 99,
        t.elementsContent = [this._Image1_i(), this.weizhi_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i(), this.btnChouqu_i(), this.grp_btns_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_dizuo_png",
        t.x = 51,
        t.y = 368,
        t
    },
    a.weizhi_i = function() {
        var t = new eui.Image;
        return this.weizhi = t,
        t.source = "cb_panel3_weizhi_png",
        t.visible = !0,
        t.x = 65,
        t.y = 9,
        t
    },
    a.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "cb_panel3_3392_png",
        t.visible = !0,
        t.x = 45,
        t.y = 58,
        t
    },
    a.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "cb_panel3_3442_png",
        t.visible = !0,
        t.x = 0,
        t.y = 34,
        t
    },
    a.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "cb_panel3_3446_png",
        t.visible = !0,
        t.x = 110,
        t.y = 28,
        t
    },
    a.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "cb_panel3_3464_png",
        t.visible = !0,
        t.x = 33,
        t.y = 27,
        t
    },
    a.pet5_i = function() {
        var t = new eui.Image;
        return this.pet5 = t,
        t.source = "cb_panel3_3516_png",
        t.visible = !0,
        t.x = 14,
        t.y = 0,
        t
    },
    a.btnChouqu_i = function() {
        var t = new eui.Image;
        return this.btnChouqu = t,
        t.source = "cb_panel2_btnchouqu_png",
        t.x = 201,
        t.y = 409,
        t
    },
    a.grp_btns_i = function() {
        var t = new eui.Group;
        return this.grp_btns = t,
        t.x = 50,
        t.y = 409,
        t.elementsContent = [this.btnTiaozhan_i(), this.btnYijian_i(), this.btnFangqi_i()],
        t
    },
    a.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "cb_panel2_btntiaozhan_png",
        t.x = 304,
        t.y = 0,
        t
    },
    a.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.source = "cb_panel2_btnyijian_png",
        t.visible = !0,
        t.x = 152,
        t.y = 0,
        t
    },
    a.btnFangqi_i = function() {
        var t = new eui.Image;
        return this.btnFangqi = t,
        t.source = "cb_panel3_btnfangqi_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 240,
        t.y = 134,
        t.elementsContent = [this._Image2_i(), this.bar_hundun_i(), this._Image3_i(), this.txt_value1_i()],
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_jindude2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.bar_hundun_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_hundun = t,
        t.direction = "btt",
        t.maximum = 100,
        t.value = 0,
        t.x = 25,
        t.y = 30,
        t.skinName = n,
        t
    },
    a._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_hundunzhi_png",
        t.x = 4,
        t.y = 381,
        t
    },
    a.txt_value1_i = function() {
        var t = new eui.Label;
        return this.txt_value1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "300",
        t.textAlign = "center",
        t.textColor = 16774487,
        t.width = 36,
        t.x = 17,
        t.y = 406,
        t
    },
    a._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 830,
        t.y = 154,
        t.elementsContent = [this._Image4_i(), this.bar_lizhi_i(), this._Image5_i(), this.txt_value2_i()],
        t
    },
    a._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_jindude1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.bar_lizhi_i = function() {
        var t = new eui.ProgressBar;
        return this.bar_lizhi = t,
        t.direction = "btt",
        t.maximum = 100,
        t.value = 0,
        t.x = 24.5,
        t.y = 10,
        t.skinName = i,
        t
    },
    a._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_lizhizhi_png",
        t.x = 5,
        t.y = 362,
        t
    },
    a.txt_value2_i = function() {
        var t = new eui.Label;
        return this.txt_value2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "300",
        t.textAlign = "center",
        t.textColor = 16774487,
        t.width = 36,
        t.x = 18,
        t.y = 386,
        t
    },
    a.grp_info_i = function() {
        var t = new eui.Group;
        return this.grp_info = t,
        t.visible = !0,
        t.x = 410,
        t.y = 468,
        t.elementsContent = [this._Image6_i(), this._Label1_i(), this.txt_info_i()],
        t
    },
    a._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_txtbg2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "击败可获得",
        t.textColor = 16774487,
        t.x = 63,
        t.y = 6,
        t
    },
    a.txt_info_i = function() {
        var t = new eui.Label;
        return this.txt_info = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "XX点XX值",
        t.textColor = 15622143,
        t.x = 175,
        t.y = 6,
        t
    },
    a._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_hddxz_png",
        t.x = 445,
        t.y = 0,
        t
    },
    a._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_txtbg_png",
        t.x = 122,
        t.y = 67,
        t
    },
    a._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "布莱克在击败强大的幻影时会获得混沌值，击败某些幻影也会为布莱克恢复神智值。",
        t.textColor = 16769906,
        t.x = 244,
        t.y = 74,
        t
    },
    a._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "在混沌值到达100之前，布莱克必须拥有100点神智值！否则将会永久臣服于混沌！",
        t.textColor = 16769906,
        t.x = 254,
        t.y = 96,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.chaoticBlake.Panel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnBag", "btnCure", "btnFight1", "btnFast1", "pass1", "pet1", "btnFight2", "btnFast2", "pass2", "pet2", "btnFight3", "btnFast3", "pass3", "pet3", "btnFight4", "btnFast4", "pass4", "pet4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "cb_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -41.5,
        t.y = 24,
        t.elementsContent = [this.btnBag_i(), this.btnCure_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this._Image5_i(), this._Image6_i(), this._Label1_i(), this._Image7_i(), this._Label2_i()],
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "cb_panel1_jlbb_png",
        t.x = 0,
        t.y = 419,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cb_panel1_jlhf_png",
        t.x = 0,
        t.y = 509,
        t
    },
    n.pet1_i = function() {
        var t = new eui.Group;
        return this.pet1 = t,
        t.x = 116,
        t.y = 133,
        t.elementsContent = [this._Image1_i(), this.btnFight1_i(), this.btnFast1_i(), this.pass1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel4_11_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 108,
        t.y = 384,
        t
    },
    n.btnFast1_i = function() {
        var t = new eui.Image;
        return this.btnFast1 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 8,
        t.y = 384,
        t
    },
    n.pass1_i = function() {
        var t = new eui.Image;
        return this.pass1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 8,
        t
    },
    n.pet2_i = function() {
        var t = new eui.Group;
        return this.pet2 = t,
        t.x = 350,
        t.y = 133,
        t.elementsContent = [this._Image2_i(), this.btnFight2_i(), this.btnFast2_i(), this.pass2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel4_22_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 108,
        t.y = 384,
        t
    },
    n.btnFast2_i = function() {
        var t = new eui.Image;
        return this.btnFast2 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 8,
        t.y = 384,
        t
    },
    n.pass2_i = function() {
        var t = new eui.Image;
        return this.pass2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 8,
        t
    },
    n.pet3_i = function() {
        var t = new eui.Group;
        return this.pet3 = t,
        t.x = 583,
        t.y = 133,
        t.elementsContent = [this._Image3_i(), this.btnFight3_i(), this.btnFast3_i(), this.pass3_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel4_33_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight3_i = function() {
        var t = new eui.Image;
        return this.btnFight3 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 384,
        t
    },
    n.btnFast3_i = function() {
        var t = new eui.Image;
        return this.btnFast3 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 384,
        t
    },
    n.pass3_i = function() {
        var t = new eui.Image;
        return this.pass3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 8,
        t
    },
    n.pet4_i = function() {
        var t = new eui.Group;
        return this.pet4 = t,
        t.x = 817,
        t.y = 133,
        t.elementsContent = [this._Image4_i(), this.btnFight4_i(), this.btnFast4_i(), this.pass4_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel4_44_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFight4_i = function() {
        var t = new eui.Image;
        return this.btnFight4 = t,
        t.source = "cb_panel1_btnfight_png",
        t.x = 109,
        t.y = 384,
        t
    },
    n.btnFast4_i = function() {
        var t = new eui.Image;
        return this.btnFast4 = t,
        t.source = "cb_panel1_yjzs_png",
        t.x = 9,
        t.y = 384,
        t
    },
    n.pass4_i = function() {
        var t = new eui.Image;
        return this.pass4 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel4_jibai_png",
        t.x = 9,
        t.y = 8,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel4_lmdyy_png",
        t.x = 442,
        t.y = 0,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel3_txtbg_png",
        t.visible = !0,
        t.x = 122,
        t.y = 67,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "将战神联盟的成员全部击败，即可获得         混沌暗影精华x10，仅限当天！",
        t.textColor = 16769906,
        t.x = 284,
        t.y = 74,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cb_mainpanel_icon_png",
        t.x = 595,
        t.y = 67,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每位成员每天仅可挑战一次，且一旦离开关卡，则自动失去今日的关卡挑战资格！",
        t.textColor = 16769906,
        t.x = 253,
        t.y = 96,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.chaoticBlake.Panel5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnBag", "btnCure", "btnKe", "btnWu", "btnDuihuan2", "btnTe", "btnDuihuan3", "btnDuihuan1", "txt_hasNum", "btnAddItem", "ri", "pet10", "pet3", "pet1", "pet2", "pet4", "pet5", "pet6", "pet7", "pet8", "pet9", "pets", "btnJixu", "btnKaishi", "txt_bossNum", "txt_level", "grp_level"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "cb_panel1_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -37,
        t.y = 25,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnBag_i(), this.btnCure_i(), this.ri_i(), this.pets_i(), this.btnJixu_i(), this.btnKaishi_i(), this._Image13_i(), this._Label9_i(), this._Image14_i(), this.txt_bossNum_i(), this._Image15_i(), this.grp_level_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_cishudi_png",
        t.x = 362,
        t.y = 553,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "剩余试炼次数：",
        t.textColor = 15102719,
        t.x = 497,
        t.y = 561,
        t
    },
    n.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99",
        t.textColor = 16769906,
        t.x = 618,
        t.y = 561,
        t
    },
    n.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "cb_panel1_jlbb_png",
        t.x = 0,
        t.y = 418,
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "cb_panel1_jlhf_png",
        t.x = 0,
        t.y = 508,
        t
    },
    n.ri_i = function() {
        var t = new eui.Group;
        return this.ri = t,
        t.x = 714,
        t.y = 77,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnKe_i(), this._Label2_i(), this._Label3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnWu_i(), this._Label4_i(), this._Label5_i(), this._Image7_i(), this._Image8_i(), this.btnDuihuan2_i(), this._Image9_i(), this.btnTe_i(), this._Label6_i(), this._Label7_i(), this._Image10_i(), this._Image11_i(), this.btnDuihuan3_i(), this.btnDuihuan1_i(), this._Label8_i(), this.txt_hasNum_i(), this.btnAddItem_i(), this._Image12_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_di_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_kuang_png",
        t.x = 43,
        t.y = 44,
        t
    },
    n.btnKe_i = function() {
        var t = new eui.Image;
        return this.btnKe = t,
        t.source = "cb_panel5_tuceng_35_png",
        t.x = 53,
        t.y = 55,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "消耗：",
        t.textColor = 15037439,
        t.x = 160,
        t.y = 56,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "*30",
        t.textColor = 16514895,
        t.x = 235,
        t.y = 55,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_1715442_png",
        t.x = 197,
        t.y = 40,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_title1_png",
        t.x = 43,
        t.y = 22,
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_kuang_png",
        t.x = 43,
        t.y = 163,
        t
    },
    n.btnWu_i = function() {
        var t = new eui.Image;
        return this.btnWu = t,
        t.source = "cb_panel5_diwujineng_png",
        t.x = 56,
        t.y = 176,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "消耗：",
        t.textColor = 15037439,
        t.x = 160,
        t.y = 175,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "*40",
        t.textColor = 16514895,
        t.x = 235,
        t.y = 174,
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_1715442_png",
        t.x = 197,
        t.y = 159,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_title2_png",
        t.x = 43,
        t.y = 141,
        t
    },
    n.btnDuihuan2_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan2 = t,
        t.source = "cb_panel5_btnduihuan_png",
        t.x = 168,
        t.y = 199,
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_kuang_png",
        t.x = 43,
        t.y = 283,
        t
    },
    n.btnTe_i = function() {
        var t = new eui.Image;
        return this.btnTe = t,
        t.source = "cb_panel5_zstx_png",
        t.x = 57,
        t.y = 302,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "消耗：",
        t.textColor = 15037439,
        t.x = 160,
        t.y = 295,
        t
    },
    n._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "*60",
        t.textColor = 16514895,
        t.x = 235,
        t.y = 294,
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_1715442_png",
        t.x = 197,
        t.y = 279,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_title3_png",
        t.x = 43,
        t.y = 261,
        t
    },
    n.btnDuihuan3_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan3 = t,
        t.source = "cb_panel5_btnduihuan_png",
        t.x = 168,
        t.y = 319,
        t
    },
    n.btnDuihuan1_i = function() {
        var t = new eui.Image;
        return this.btnDuihuan1 = t,
        t.source = "cb_panel5_btnduihuan_png",
        t.x = 168,
        t.y = 80,
        t
    },
    n._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前拥有        ：",
        t.textColor = 15037439,
        t.x = 60,
        t.y = 399,
        t
    },
    n.txt_hasNum_i = function() {
        var t = new eui.Label;
        return this.txt_hasNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 186,
        t.y = 398,
        t
    },
    n.btnAddItem_i = function() {
        var t = new eui.Image;
        return this.btnAddItem = t,
        t.source = "cb_panel5_btnadd_png",
        t.x = 230,
        t.y = 393,
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_1715442_png",
        t.x = 130,
        t.y = 385,
        t
    },
    n.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.x = 150,
        t.y = 87,
        t.elementsContent = [this.pet10_i(), this.pet3_i(), this.pet1_i(), this.pet2_i(), this.pet4_i(), this.pet5_i(), this.pet6_i(), this.pet7_i(), this.pet8_i(), this.pet9_i()],
        t
    },
    n.pet10_i = function() {
        var t = new eui.Image;
        return this.pet10 = t,
        t.source = "cb_panel5_3387_png",
        t.visible = !1,
        t.x = 24,
        t.y = 33,
        t
    },
    n.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.source = "cb_panel5_1525_png",
        t.visible = !1,
        t.x = 0,
        t.y = 41,
        t
    },
    n.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.source = "cb_panel5_1596_png",
        t.visible = !1,
        t.x = 87,
        t.y = 64,
        t
    },
    n.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.source = "cb_panel5_1602_png",
        t.visible = !1,
        t.x = 58,
        t.y = 45,
        t
    },
    n.pet4_i = function() {
        var t = new eui.Image;
        return this.pet4 = t,
        t.source = "cb_panel5_2149_png",
        t.visible = !1,
        t.x = 50,
        t.y = 50,
        t
    },
    n.pet5_i = function() {
        var t = new eui.Image;
        return this.pet5 = t,
        t.source = "cb_panel5_2237_png",
        t.visible = !1,
        t.x = 87,
        t.y = 0,
        t
    },
    n.pet6_i = function() {
        var t = new eui.Image;
        return this.pet6 = t,
        t.source = "cb_panel5_2289_png",
        t.visible = !1,
        t.x = 102,
        t.y = 12,
        t
    },
    n.pet7_i = function() {
        var t = new eui.Image;
        return this.pet7 = t,
        t.source = "cb_panel5_2459_png",
        t.visible = !0,
        t.x = 87,
        t.y = 47,
        t
    },
    n.pet8_i = function() {
        var t = new eui.Image;
        return this.pet8 = t,
        t.source = "cb_panel5_2597_png",
        t.visible = !1,
        t.x = 108,
        t.y = 40,
        t
    },
    n.pet9_i = function() {
        var t = new eui.Image;
        return this.pet9 = t,
        t.source = "cb_panel5_2639_png",
        t.visible = !1,
        t.x = 8,
        t.y = 26,
        t
    },
    n.btnJixu_i = function() {
        var t = new eui.Image;
        return this.btnJixu = t,
        t.source = "cb_panel5_btnjixu_png",
        t.x = 300,
        t.y = 486,
        t
    },
    n.btnKaishi_i = function() {
        var t = new eui.Image;
        return this.btnKaishi = t,
        t.source = "cb_panel5_btnkaishi_png",
        t.x = 300,
        t.y = 486,
        t
    },
    n._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_txtbg_png",
        t.x = 206,
        t.y = 447,
        t
    },
    n._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "击败可获得",
        t.textColor = 15102719,
        t.x = 279,
        t.y = 453,
        t
    },
    n._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_1715442_png",
        t.x = 373,
        t.y = 440,
        t
    },
    n.txt_bossNum_i = function() {
        var t = new eui.Label;
        return this.txt_bossNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "*1",
        t.textColor = 16769906,
        t.x = 422,
        t.y = 454,
        t
    },
    n._Image15_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel5_nljj_png",
        t.x = 469,
        t.y = 0,
        t
    },
    n.grp_level_i = function() {
        var t = new eui.Group;
        return this.grp_level = t,
        t.x = 209,
        t.y = 72,
        t.elementsContent = [this._Image16_i(), this._Label10_i(), this.txt_level_i()],
        t
    },
    n._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "cb_panel5_juxing_913_png",
        t.width = 317,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 32,
        t.text = "第          关",
        t.textColor = 12024797,
        t.x = 74,
        t.y = 7,
        t
    },
    n.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 32,
        t.text = "10/10",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.width = 90,
        t.x = 108,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/render/Panel2PetHeadRender.exml"] = window.chaoticBlake.Panel2PetHeadRender = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["head", "xuanzhong", "pass"],
        this.height = 129,
        this.width = 129,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.head_i(), this.xuanzhong_i(), this.pass_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "cb_panel2_kuang_png",
        t.visible = !0,
        t.x = 7,
        t.y = 7,
        t
    },
    n.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.anchorOffsetX = 50,
        t.anchorOffsetY = 50,
        t.height = 100,
        t.scaleX = -1,
        t.source = "",
        t.width = 100,
        t.x = 64,
        t.y = 64,
        t
    },
    n.xuanzhong_i = function() {
        var t = new eui.Image;
        return this.xuanzhong = t,
        t.source = "cb_panel2_xuanzhong_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.pass_i = function() {
        var t = new eui.Image;
        return this.pass = t,
        t.source = "cb_panel2_yijibai_png",
        t.x = 14,
        t.y = 14,
        t
    },
    e
} (eui.Skin);