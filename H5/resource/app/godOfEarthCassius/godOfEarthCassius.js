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
godOfEarthCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.service.setValues([e.GodOfEarthCassiusConst.forever_pet_state, e.GodOfEarthCassiusConst.forever_level3_state, e.GodOfEarthCassiusConst.forever_star_state, e.GodOfEarthCassiusConst.forever_level2_star1, e.GodOfEarthCassiusConst.forever_level2_star2, e.GodOfEarthCassiusConst.forever_level2_star3, e.GodOfEarthCassiusConst.forever_level2_star4, e.GodOfEarthCassiusConst.forever_level2_star5, e.GodOfEarthCassiusConst.forever_level2_star6, e.GodOfEarthCassiusConst.forever_level2_star7], [e.GodOfEarthCassiusConst.daily_level1_times, e.GodOfEarthCassiusConst.daily_level2_times, e.GodOfEarthCassiusConst.daily_level3_times, e.GodOfEarthCassiusConst.daily_level1_state], [e.GodOfEarthCassiusConst.bitBuf_sign, e.GodOfEarthCassiusConst.bitbuf_reduce]),
            n.init([{
                panelName: e.GodOfEarthCassiusConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.GodOfEarthCassiusConst.PANEL1
            },
            {
                panelName: e.GodOfEarthCassiusConst.PANEL2
            },
            {
                panelName: e.GodOfEarthCassiusConst.PANEL3
            },
            {
                panelName: e.GodOfEarthCassiusConst.PANEL4
            },
            {
                panelName: e.GodOfEarthCassiusConst.PANEL5
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
        n.prototype.midPivot = function(e, t) {
            if (! (e.length <= 0)) for (var n = 0,
            i = e.length - 1,
            a = 0; i >= n;) if (a = (n + i) / 2, t > e[a]) n = a + 1;
            else {
                if (! (t < e[a])) return a;
                i = a - 1
            }
        },
        n.prototype.permute = function(e) {
            if ("" == e) return null;
            for (var t = [], n = 0; n < e.length; n++) for (var i = e[n], a = e.slice(0, n) + e.slice(n + 1), s = this.permute(a), o = 0; o < s.length; o++) {
                var r = i + s[o];
                t.push(r)
            }
            return t
        },
        n
    } (BasicMultPanelModule);
    e.GodOfEarthCassius = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassius")
} (godOfEarthCassius || (godOfEarthCassius = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
godOfEarthCassius; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAINPANEL = "godOfEarthCassius.GodOfEarthCassiusMainPanel",
        e.PANEL1 = "godOfEarthCassius.GodOfEarthCassiusPanel1",
        e.PANEL2 = "godOfEarthCassius.GodOfEarthCassiusPanel2",
        e.PANEL3 = "godOfEarthCassius.GodOfEarthCassiusPanel3",
        e.PANEL4 = "godOfEarthCassius.GodOfEarthCassiusPanel4",
        e.PANEL5 = "godOfEarthCassius.GodOfEarthCassiusPanel5",
        e.CMD = 47213,
        e.forever_pet_state = 2366,
        e.forever_level2_star1 = 2367,
        e.forever_level2_star2 = 2368,
        e.forever_level2_star3 = 2369,
        e.forever_level2_star4 = 2370,
        e.forever_level2_star5 = 2371,
        e.forever_level2_star6 = 2372,
        e.forever_level2_star7 = 2373,
        e.forever_star_state = 2375,
        e.forever_level3_state = 2374,
        e.daily_level1_times = 12281,
        e.daily_level2_times = 12282,
        e.daily_level1_state = 12283,
        e.daily_level3_times = 12284,
        e.bitBuf_sign = 1000064,
        e.bitbuf_reduce = 242,
        e
    } ();
    e.GodOfEarthCassiusConst = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassiusConst")
} (godOfEarthCassius || (godOfEarthCassius = {}));
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
        function o(e) {
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
            }).then(o, r)
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
            if (a = 1, s && (o = s[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(s, n[1])).done) return o;
            switch (s = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
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
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            s = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, s, o, r, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
godOfEarthCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.canDown = !0,
            n.new_monster_level_id = 142,
            n.skinName = e.MainpanelSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnHelpById(142, this,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击主界面-【？】")
            },
            this),
            this.initBtnClose("goec_mainpanel_stms_png", this,
            function() {
                e.service.closeModule()
            },
            this),
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = t ? "goec_mainpanel_btncollected_png": "goec_mainpanel_btncollect_png"
            })
        },
        n.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击主界面-【地神之怒】"),
                t.service.openPanel(e.GodOfEarthCassiusConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击主界面-【地神梦魇】"),
                t.service.openPanel(e.GodOfEarthCassiusConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btnJuexing,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击主界面-【地神觉醒】"),
                t.service.openPanel(e.GodOfEarthCassiusConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(e.GodOfEarthCassiusConst.CMD, [1],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2817,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243844, 1,
                    function() {
                        KTool.doExchange(5777, 1,
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
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "goec_mainpanel_btncollected_png": "goec_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        n.prototype.update = function() {
            for (var t = this.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state), n = 0, i = this.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state), a = 1; 3 >= a; a++) 1 == KTool.getBit(i, a + 1) && n++;
            var s = 1 == KTool.getBit(t, 1);
            this.hasPet.visible = s,
            this.btnSuper.visible = !s,
            this.btnJuexing.visible = s && 3 != n;
            for (var o = 0,
            a = 1; 7 >= a; a++) o += this.service.getValue(2366 + a);
            var r = !s && 21 == o;
            this.btnGet.visible = r,
            DisplayUtil.setEnabled(this.btn1, !s, s || 21 == o),
            DisplayUtil.setEnabled(this.btn2, !s, s || 21 == o),
            this.hasDone1.visible = this.hasDone2.visible = s || 21 == o,
            DisplayUtil.setEnabled(this.btnJuexing, 3 != n && s, 3 == n || !s)
        },
        n
    } (BasicPanel);
    e.GodOfEarthCassiusMainPanel = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassiusMainPanel")
} (godOfEarthCassius || (godOfEarthCassius = {}));
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
godOfEarthCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.leftTime = 0,
            n.seInex = 0,
            n.skinName = e.Panel1Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("goec_panel1_stms_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvents(),
            this.signAnim = SpineUtil.createAnimate("huodedaoju"),
            this.gpr_content.addChild(this.signAnim),
            this.signAnim.touchEnabled = this.signAnim.touchChildren = !1,
            this.signAnim.x = 552,
            this.signAnim.y = 300
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
            ImageButtonUtil.add(this.btnGo2,
            function() {
                t.service.openPanel(e.GodOfEarthCassiusConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btnadd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1705202,
                        productID: 243845
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(243845, n,
                        function() {
                            KTool.doExchange(5779, n,
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
            EventManager.addEventListener("RewardOnclose",
            function() {
                t.signAnim.visible = !0,
                t.signAnim.play("huodedaoju", 1, 0, {
                    playEnd: function() {
                        t.signAnim.visible = !1,
                        t.service.updateValues().then(function() {
                            t.update()
                        })
                    }
                })
            },
            this),
            ImageButtonUtil.add(this.btnSign,
            function() {
                var e = MainManager.actorInfo.isVip ? 1305 : 1304;
                SocketConnection.sendByQueue(4548, [e, 1],
                function() {
                    t.signAnim.visible = !1
                })
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243847, 1,
                    function() {
                        KTool.doExchange(5780, 1,
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
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : 0 == t.seInex ? void BubblerManager.getInstance().showText("您尚未选中关卡，请选择后再次挑战") : void FightManager.fightNoMapBoss(4293 + t.seInex)
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["ba" + e],
                function() {
                    StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神之怒界面- 任意右侧关卡按钮");
                    for (var n = 1; 8 >= n; n++) t["Se" + n].visible = n == e;
                    t.seInex = e
                },
                i)
            },
            i = this, a = 1; 8 >= a; a++) n(a);
            ImageButtonUtil.add(this.btnbuyTime,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243846, 1,
                    function() {
                        KTool.doExchange(5778, 1,
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
        n.prototype.update = function() {
            this.seInex = 1;
            var t = MainManager.actorInfo.isVip ? 16 : 8;
            this.leftTime = t - this.service.getValue(e.GodOfEarthCassiusConst.daily_level1_times);
            var n = this.service.getValue(e.GodOfEarthCassiusConst.daily_level1_state);
            this.btnFight.visible = 0 != this.leftTime,
            this.btnbuyTime.visible = 0 == this.leftTime,
            this.txt_leftTime.text = this.leftTime + "",
            this.txt_itemNum.text = ItemManager.getNumByID(1705202) + "";
            var i = 1 == this.service.getValue(e.GodOfEarthCassiusConst.bitBuf_sign);
            this.signAnim.visible = !i,
            i || this.signAnim.play("qiandao", 0),
            this.btnSign.visible = !i,
            this.hasSign.visible = i;
            for (var a = [], s = 1; 8 >= s; s++) 1 == KTool.getBit(n, s) && a.push(s),
            this["pass" + s].visible = 1 == KTool.getBit(n, s);
            if (8 != a.length) for (; a.indexOf(this.seInex) > -1;) 8 != this.seInex ? this.seInex++:this.seInex = 1;
            for (var o = 1; 8 >= o; o++) this["Se" + o].visible = o == this.seInex
        },
        n
    } (BasicPanel);
    e.GodOfEarthCassiusPanel1 = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassiusPanel1")
} (godOfEarthCassius || (godOfEarthCassius = {}));
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
        function o(e) {
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
            }).then(o, r)
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
            if (a = 1, s && (o = s[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(s, n[1])).done) return o;
            switch (s = 0, o && (n = [0, o.value]), n[0]) {
            case 0:
            case 1:
                o = n;
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
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = n;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(n);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            s = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, s, o, r, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
godOfEarthCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.curBossIndex = 1,
            n.leftTime = 0,
            n.hasPass = !1,
            n.curStateInfo = [],
            n.imgs = [],
            n._petIdArr = [1845, 2341, 2527, 2323, 2394],
            n.lastInfo = [],
            n.isFirst = !0,
            n.skinName = e.Panel2Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.txt_intro.textFlow = [{
                text: "按照条件击对手即可增加星级，",
                style: {
                    textColor: 12111615
                }
            },
            {
                text: "达成全部3星即可获得大地之神·卡修斯\n",
                style: {
                    textColor: 53500
                }
            },
            {
                text: "挑战梦魇需要消耗    卡修斯的怒火*3，挑战地神之怒关卡可获得。",
                style: {
                    textColor: 12111615
                }
            }],
            this.initBtnClose("goec_panel2_stms_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.name = "godOfEarthCassius.Panel2Skin",
            this.addEvents(),
            this.curBossIndex = 1,
            this.animInit(),
            this.initRoulette(),
            this.showState(),
            this.checkBitForTips(function(t) {
                e._isWeaken = t
            })
        },
        n.prototype.checkBitForTips = function(e) {
            PetManager.checkMultiPet(this._petIdArr,
            function(t) {
                for (var n = !0,
                i = 0; i < t.length; i++) t[i] || (n = !1);
                null != e && e(n)
            })
        },
        n.prototype.animInit = function() {
            for (var e = 1; 3 >= e; e++) this["starAnim" + e] = SpineUtil.createAnimate("star"),
            this["starAnim" + e].visible = !1,
            this.addChild(this["starAnim" + e]),
            this["starAnim" + e].x = 88 + 50 * (e - 1),
            this["starAnim" + e].y = 120
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
                    KTool.buyProductByCallback(243891 + t.curBossIndex, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfEarthCassiusConst.CMD, [8 + t.curBossIndex],
                        function() {
                            t.service.updateValues().then(function() {
                                for (var e = 0,
                                n = [], i = 1; 7 >= i; i++) n.push(t.service.getValue(2366 + i));
                                for (; 3 == n[e];) 7 != e ? e++:e = 1;
                                console.log(e),
                                7 == e ? t.update() : (EventManager.dispatchEventWith(Roulette.EVENT_AUTORATE, !1, e), t.update())
                            })
                        })
                    })
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : ItemManager.getNumByID(1705202) < 3 ? (StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神梦魇界面-【开始挑战】时道具不足"), void BubblerManager.getInstance().showText("卡修斯的怒火不足，可以挑战地神之怒关卡获得！")) : void FightManager.fightNoMapBoss(6307 + t.curBossIndex)
            },
            this),
            ImageButtonUtil.add(this.btnGo1,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神梦魇界面- 右上角【挑战获得】"),
                t.service.openPanel(e.GodOfEarthCassiusConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243849, 1,
                    function() {
                        KTool.doExchange(5783, 1,
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
            ImageButtonUtil.add(this.btnAddTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243848, 1,
                    function() {
                        KTool.doExchange(5782, 1,
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
                        iconID: 1705202,
                        productID: 243845
                    },
                    e.caller = t,
                    e.callBack = function(e, n) {
                        KTool.buyProductByCallback(243845, n,
                        function() {
                            KTool.doExchange(5779, n,
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
                t.lastInfo = t.curStateInfo,
                t.lastState = t.service.getValue(e.GodOfEarthCassiusConst.forever_star_state),
                t.service.updateValues().then(function() {
                    t.update(!0)
                })
            },
            this)
        },
        n.prototype.autoRotate = function() {
            if (FightManager.isWin) {
                var t = this.service.getValue(e.GodOfEarthCassiusConst.forever_star_state),
                n = 0;
                if (this.lastState != t) {
                    for (var i = [], a = 1; 7 >= a; a++) i.push(this.service.getValue(2366 + a));
                    if (3 == i[this.curBossIndex - 1]) {
                        for (n = this.curBossIndex - 1; 3 == i[n];) 6 != n ? n++:n = 0;
                        EventManager.dispatchEventWith(Roulette.EVENT_AUTORATE, !1, n)
                    }
                }
            }
        },
        n.prototype.initRoulette = function() {
            for (var e = this,
            t = 1; 7 >= t; t++) this.imgs[t - 1] = "goec_panel2_" + t + "_png";
            this.roulette = new Roulette(this.imgs,
            function(t) {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神梦魇界面- 滑动右侧滚轮主动切换关卡"),
                console.log(t),
                e.curBossIndex = t[0],
                e.showState()
            },
            this, 0, 400, 7, 5, Roulette.RIGHT, 1.4, 1),
            this.roulette.customizeAfterUpdateCaller = this,
            this.roulette.customizeAfterUpdate = function() {
                e.kuang.visible = !1
            },
            this.groupRight.addChild(this.roulette),
            this.roulette.x = 480,
            this.roulette.y = 289
        },
        n.prototype.showState = function() {
            var e = this;
            this.kuang.visible = !0,
            this.roulette.customizeAfterUpdate = null,
            egret.setTimeout(function() {
                e.roulette.customizeAfterUpdate = function() {
                    e.kuang.visible = !1
                }
            },
            this, 500);
            for (var t = 1; 7 >= t; t++) this["pet" + t].visible = t == this.curBossIndex;
            return this.isFirst ? void(this.isFirst = !1) : void this.showStar(!1)
        },
        n.prototype.update = function(t) {
            void 0 === t && (t = !1);
            var n = MainManager.actorInfo.isVip ? 20 : 10;
            this.leftTime = n - this.service.getValue(e.GodOfEarthCassiusConst.daily_level2_times),
            this.txt_leftTime.text = this.leftTime + "",
            this.txt_itemNum.text = ItemManager.getNumByID(1705202) + "",
            this.showStar(t),
            DisplayUtil.setEnabled(this.btnAddTimes, 0 == this.leftTime, 0 != this.leftTime)
        },
        n.prototype.showStar = function(t) {
            var n = this;
            void 0 === t && (t = !1);
            var i = this.service.getValue(e.GodOfEarthCassiusConst.forever_star_state),
            a = this.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state);
            1 == KTool.getBit(a, 1);
            this.txt_info1.text = "战胜对手",
            this.txt_info2.text = this.curBossIndex <= 5 ? "致命一击击败对手": "对手未出手前获胜",
            this.curBossIndex <= 3 ? this.txt_info3.text = "强化状态下击败对手": this.curBossIndex <= 5 && this.curBossIndex > 3 ? this.txt_info3.text = "5回合内击败对手": this.txt_info3.text = "3回合内击败对手";
            for (var s = 0,
            o = [], r = [], u = 0, _ = 1; 7 >= _; _++) r.push(this.service.getValue(2366 + _)),
            u += this.service.getValue(2366 + _);
            for (var _ = 1; 3 >= _; _++) 1 == KTool.getBit(i, 3 * (this.curBossIndex - 1) + _) || r[this.curBossIndex - 1] >= 3 ? (s += 1, o.push(1)) : o.push(0),
            t || (this["star" + _].visible = this["_star" + _].visible = this["gou" + _].visible = !1);
            DisplayUtil.setEnabled(this.btnFight, 3 != s, 3 == s),
            DisplayUtil.setEnabled(this.btnFast, 3 != s, 3 == s);
            for (var l = [], _ = 1; _ <= o.length; _++) o[_ - 1] != this.curStateInfo[_ - 1] ? l[_ - 1] = 1 : l[_ - 1] = 0;
            this.curStateInfo = o,
            t ? this.playAnimationsAndUpdateStars(l, o) : this.updateStarsAndText(this.curStateInfo),
            21 == u && (this.hasPass || (this.hasPass = !0, Alarm.show("恭喜你，在你的帮助下卡修斯战胜了梦魇，成功进化为完全体！",
            function() {
                EventManager.removeAll(n),
                n.service.updateValues().then(function() {
                    n.service.backToMainPanel()
                })
            })))
        },
        n.prototype.playStarAnimation = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(n) {
                    return [2, new Promise(function(n) {
                        var i = t["starAnim" + e],
                        a = t["_star" + e];
                        i.visible = !0,
                        i.play("star", 1, e, {
                            playEnd: function() {
                                i.visible = !1,
                                a.visible = !0;
                                for (var s = 0,
                                o = 0,
                                r = 0,
                                u = 1; 3 >= u; u++) s += t.curStateInfo[u - 1],
                                o += t.lastInfo[u - 1],
                                0 == t.lastInfo[u - 1] && (r = u);
                                console.log(r),
                                3 == s && 3 != o && e == r && t.autoRotate(),
                                n(null)
                            }
                        })
                    })]
                })
            })
        },
        n.prototype.updateStarsAndText = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, t, n;
                return __generator(this,
                function(i) {
                    for (t = 1; t <= e.length; t++) if (e[t - 1] != this.curStateInfo[t - 1]) {
                        e = this.curStateInfo;
                        break
                    }
                    for (t = 1; 3 >= t; t++) n = 1 === e[t - 1],
                    this["star" + t].visible = this["_star" + t].visible = this["gou" + t].visible = n,
                    this["txt_info" + t].textColor = n ? 53500 : 16777215;
                    return [2]
                })
            })
        },
        n.prototype.playAnimationsAndUpdateStars = function(e, t) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return 1 !== e[0] ? [3, 2] : [4, this.playStarAnimation(1)];
                    case 1:
                        n.sent(),
                        n.label = 2;
                    case 2:
                        return 1 !== e[1] ? [3, 4] : [4, this.playStarAnimation(2)];
                    case 3:
                        n.sent(),
                        n.label = 4;
                    case 4:
                        return 1 !== e[2] ? [3, 6] : [4, this.playStarAnimation(3)];
                    case 5:
                        n.sent(),
                        n.label = 6;
                    case 6:
                        return [4, this.updateStarsAndText(t)];
                    case 7:
                        return n.sent(),
                        [2]
                    }
                })
            })
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.roulette.destroy()
        },
        n
    } (BasicPanel);
    e.GodOfEarthCassiusPanel2 = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassiusPanel2")
} (godOfEarthCassius || (godOfEarthCassius = {}));
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
godOfEarthCassius; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.animX = [722, 552, 722],
            n.animY = [158, 290, 428],
            n.signAnims = [],
            n.leftTime = 0,
            n.skinName = e.Panel3Skin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initBtnClose("goec_panel3_stms_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this);
            for (var n = 0; 3 > n; n++) this.signAnims[n] = SpineUtil.createAnimate("dadizhishenka"),
            this.grp_main.addChild(this.signAnims[n]),
            this.signAnims[n].touchChildren = this.signAnims[n].touchEnabled = !1,
            this.signAnims[n].x = this.animX[n],
            this.signAnims[n].y = this.animY[n];
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
                t.service.showPetEff(2817)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 17661
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40406) ? (e = {},
                e.ins = 40406, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40406, tipsPop.TipsPop.openItemPop(e))
            },
            this),
            ImageButtonUtil.add(this.btnOneKey,
            function() {
                if (StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神觉醒界面-【一键激活】"), !PetManager.isDefaultPet(2817)) {
                    var n = "请将<font color='#ff0000'>大地之神·卡修斯</font>放入背包首发出战位置！";
                    return void Alarm.show(n,
                    function() {
                        t.service.showPetBag()
                    },
                    t)
                }
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243853, 1,
                    function() {
                        SocketConnection.sendByQueue(e.GodOfEarthCassiusConst.CMD, [5],
                        function() {
                            Alert.show("成功兑换专属刻印、特性、第五技能，是否前往背包查看？",
                            function() {
                                t.service.showPetBag()
                            }),
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
                return StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神觉醒界面-【开始挑战】"),
                t.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void FightManager.fightNoMapBoss(4309)
            },
            this),
            ImageButtonUtil.add(this.btnbuyTime,
            function() {
                StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神觉醒界面-【购买次数】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(243891, 1,
                    function() {
                        KTool.doExchange(5781, 1,
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
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnBuy" + n],
                function() {
                    var i = t.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state);
                    if (0 == KTool.getBit(i, 1)) return void Alarm.show("你尚未获得该精灵！", null, t);
                    if (!PetManager.isDefaultPet(2817)) {
                        var a = "请将<font color='#ff0000'>大地之神·卡修斯</font>放入背包首发出战位置！";
                        return void Alarm.show(a,
                        function() {
                            t.service.showPetBag()
                        },
                        t)
                    }
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(243853 - n, 1,
                        function() {
                            SocketConnection.sendByQueue(e.GodOfEarthCassiusConst.CMD, [9 - n],
                            function() {
                                if (3 != n) {
                                    var e = 1 == n ? "成功兑换第五技能": "成功兑换专属特性";
                                    Alert.show(e + "是否前往背包查看？",
                                    function() {
                                        t.service.showPetBag()
                                    })
                                }
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
                    StatLogger.log("20230428版本系统功能", "大地之神·卡修斯搬迁", "点击地神觉醒界面-任意【可激活】按钮");
                    var i = t.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state);
                    if (0 == KTool.getBit(i, 1)) return void Alarm.show("你尚未获得该精灵！", null, t);
                    if (!PetManager.isDefaultPet(2817)) {
                        var a = "请将<font color='#ff0000'>大地之神·卡修斯</font>放入背包首发出战位置！";
                        return void Alarm.show(a,
                        function() {
                            t.service.showPetBag()
                        },
                        t)
                    }
                    SocketConnection.sendByQueue(e.GodOfEarthCassiusConst.CMD, [5 - n],
                    function() {
                        if (3 != n) {
                            var e = 1 == n ? "成功兑换第五技能": "成功兑换专属特性";
                            Alert.show(e + "是否前往背包查看？",
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
            this.leftTime = 3 - this.service.getValue(e.GodOfEarthCassiusConst.daily_level3_times),
            this.txt_leftTime.text = this.leftTime + "/3",
            this.btnFight.visible = 0 != this.leftTime,
            this.btnbuyTime.visible = 0 == this.leftTime;
            for (var t = 0,
            n = 0,
            i = this.service.getValue(e.GodOfEarthCassiusConst.forever_level3_state), a = this.service.getValue(e.GodOfEarthCassiusConst.forever_pet_state), s = 1; 3 >= s; s++) 1 == KTool.getBit(a, s + 1) && t++,
            1 == KTool.getBit(i, s) && n++,
            this["btnGet" + (4 - s)].visible = 1 == KTool.getBit(i, s) && 1 != KTool.getBit(a, s + 1),
            this["hasGet" + (4 - s)].visible = 1 == KTool.getBit(a, s + 1),
            this["btnBuy" + (4 - s)].visible = !this["btnGet" + (4 - s)].visible && !this["hasGet" + (4 - s)].visible;
            for (var s = 1; 3 >= s; s++) this.signAnims[s - 1].visible = this["btnGet" + s].visible,
            this["btnGet" + s].visible && this.signAnims[s - 1].play("kejihuo", 0);
            var o = n > t ? n: t;
            this.bar_value.value = 30 * o,
            this.txt_overTime.text = o + "/3",
            3 == t && this.service.backToMainPanel()
        },
        n
    } (BasicPanel);
    e.GodOfEarthCassiusPanel3 = t,
    __reflect(t.prototype, "godOfEarthCassius.GodOfEarthCassiusPanel3")
} (godOfEarthCassius || (godOfEarthCassius = {})),
window.godOfEarthCassius = window.godOfEarthCassius || {};
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
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.godOfEarthCassius.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnSuper", "btnJuexing", "btn2", "btn1", "hasDone1", "hasDone2", "hasPet", "btnGet", "btnInfo", "btnCollect"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.source = "goec_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 38,
        e.visible = !0,
        e.width = 1020,
        e.y = 285,
        e.elementsContent = [this.btnSuper_i(), this.btnJuexing_i(), this._Image1_i(), this.btn2_i(), this.btn1_i(), this.hasDone1_i(), this.hasDone2_i(), this.hasPet_i(), this.btnGet_i(), this.btnInfo_i(), this.btnCollect_i()],
        e
    },
    n.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "goec_mainpanel_btnsuper_png",
        e.x = 928,
        e.y = 266,
        e
    },
    n.btnJuexing_i = function() {
        var e = new eui.Image;
        return this.btnJuexing = e,
        e.source = "goec_mainpanel_btnjuexing_png",
        e.x = 928,
        e.y = 266,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "goec_mainpanel_ti1_png",
        e.x = 552.276,
        e.y = 222.852,
        e
    },
    n.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "goec_mainpanel_dsmy_png",
        e.x = 565,
        e.y = 134,
        e
    },
    n.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "goec_mainpanel_dszn_png",
        e.x = 658,
        e.y = 0,
        e
    },
    n.hasDone1_i = function() {
        var e = new eui.Image;
        return this.hasDone1 = e,
        e.source = "goec_mainpanel_yiwancheng_png",
        e.x = 676,
        e.y = 8,
        e
    },
    n.hasDone2_i = function() {
        var e = new eui.Image;
        return this.hasDone2 = e,
        e.source = "goec_mainpanel_yiwancheng_png",
        e.x = 583,
        e.y = 142,
        e
    },
    n.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.height = 76,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_mainpanel_zu_2_png",
        e.width = 231,
        e.x = 167,
        e.y = 213,
        e
    },
    n.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 77,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_mainpanel_btnlingqu_png",
        e.width = 250,
        e.x = 156,
        e.y = 238,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.height = 55,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_mainpanel_btnInfo_png",
        e.width = 53,
        e.x = 0,
        e.y = 271,
        e
    },
    n.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "goec_mainpanel_btncollect_png",
        e.x = 0,
        e.y = 202,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.godOfEarthCassius.Panel1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt_leftTime", "btnbuyTime", "btnFight", "btnOnekey", "btnGo2", "ba1", "ba2", "ba3", "ba4", "ba5", "ba6", "ba7", "ba8", "Se1", "Se2", "Se3", "Se4", "Se5", "Se6", "Se7", "Se8", "pass1", "pass2", "pass3", "pass4", "pass5", "pass6", "pass7", "pass8", "rightInfo", "btnSign", "hasSign", "btnBag", "btnCure", "txt_itemNum", "btnadd", "items", "gpr_content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.gpr_content_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "goec_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.gpr_content_i = function() {
        var e = new eui.Group;
        return this.gpr_content = e,
        e.horizontalCenter = 3,
        e.width = 1110,
        e.y = 20,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Label1_i(), this._Label2_i(), this.txt_leftTime_i(), this.btnbuyTime_i(), this.btnFight_i(), this.btnOnekey_i(), this.btnGo2_i(), this.rightInfo_i(), this.btnSign_i(), this.hasSign_i(), this.btnBag_i(), this.btnCure_i(), this.items_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_tuceng_19_png",
        e.x = 25,
        e.y = 66,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_zu_7_png",
        e.visible = !0,
        e.x = 592,
        e.y = 67,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_juxing_904_png",
        e.x = 587,
        e.y = 569,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_a_png",
        e.x = 298,
        e.y = 9,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.x = 447,
        e.y = 31,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.x = 465,
        e.y = 7,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_img_blue_reddot_png",
        e.x = 601,
        e.y = 87,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_juxing_907_png",
        e.x = 619,
        e.y = 90,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_jx_907_kb_png",
        e.x = 619,
        e.y = 90,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_tzkxs_png",
        e.x = 614,
        e.y = 70,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战次数：",
        e.textColor = 12111615,
        e.x = 755,
        e.y = 576,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "直接获得一整轮奖励",
        e.textColor = 15200255,
        e.x = 649,
        e.y = 499,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9",
        e.textColor = 8646655,
        e.visible = !0,
        e.x = 914,
        e.y = 576,
        e
    },
    n.btnbuyTime_i = function() {
        var e = new eui.Image;
        return this.btnbuyTime = e,
        e.source = "goec_panel3_btnbuy_png",
        e.visible = !0,
        e.x = 877,
        e.y = 517,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "goec_panel1_btnfight_png",
        e.visible = !0,
        e.x = 877,
        e.y = 517,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "goec_panel1_btnonekey_png",
        e.x = 654,
        e.y = 518,
        e
    },
    n.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "goec_panel1_btngo2_png",
        e.x = 211,
        e.y = 518,
        e
    },
    n.rightInfo_i = function() {
        var e = new eui.Group;
        return this.rightInfo = e,
        e.x = 606,
        e.y = 129,
        e.elementsContent = [this.ba1_i(), this.ba2_i(), this.ba3_i(), this.ba4_i(), this.ba5_i(), this.ba6_i(), this.ba7_i(), this.ba8_i(), this.Se1_i(), this.Se2_i(), this.Se3_i(), this.Se4_i(), this.Se5_i(), this.Se6_i(), this.Se7_i(), this.Se8_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Image24_i(), this._Image25_i(), this._Image26_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this._Label16_i(), this._Label17_i(), this._Label18_i(), this._Label19_i(), this._Label20_i(), this._Label21_i(), this._Label22_i(), this._Label23_i(), this._Label24_i(), this._Label25_i(), this._Label26_i(), this.pass1_i(), this.pass2_i(), this.pass3_i(), this.pass4_i(), this.pass5_i(), this.pass6_i(), this.pass7_i(), this.pass8_i()],
        e
    },
    n.ba1_i = function() {
        var e = new eui.Image;
        return this.ba1 = e,
        e.source = "goec_panel1_zu_2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.ba2_i = function() {
        var e = new eui.Image;
        return this.ba2 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 230,
        e.y = 0,
        e
    },
    n.ba3_i = function() {
        var e = new eui.Image;
        return this.ba3 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 0,
        e.y = 87,
        e
    },
    n.ba4_i = function() {
        var e = new eui.Image;
        return this.ba4 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 230,
        e.y = 87,
        e
    },
    n.ba5_i = function() {
        var e = new eui.Image;
        return this.ba5 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 0,
        e.y = 173,
        e
    },
    n.ba6_i = function() {
        var e = new eui.Image;
        return this.ba6 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 230,
        e.y = 173,
        e
    },
    n.ba7_i = function() {
        var e = new eui.Image;
        return this.ba7 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 0,
        e.y = 260,
        e
    },
    n.ba8_i = function() {
        var e = new eui.Image;
        return this.ba8 = e,
        e.source = "goec_panel1_zu_2_png",
        e.x = 230,
        e.y = 260,
        e
    },
    n.Se1_i = function() {
        var e = new eui.Image;
        return this.Se1 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = -6,
        e.y = -6,
        e
    },
    n.Se2_i = function() {
        var e = new eui.Image;
        return this.Se2 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = 224,
        e.y = -6,
        e
    },
    n.Se3_i = function() {
        var e = new eui.Image;
        return this.Se3 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = -6,
        e.y = 81,
        e
    },
    n.Se4_i = function() {
        var e = new eui.Image;
        return this.Se4 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = 224,
        e.y = 81,
        e
    },
    n.Se5_i = function() {
        var e = new eui.Image;
        return this.Se5 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = -6,
        e.y = 167,
        e
    },
    n.Se6_i = function() {
        var e = new eui.Image;
        return this.Se6 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = 224,
        e.y = 167,
        e
    },
    n.Se7_i = function() {
        var e = new eui.Image;
        return this.Se7 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = -6,
        e.y = 254,
        e
    },
    n.Se8_i = function() {
        var e = new eui.Image;
        return this.Se8 = e,
        e.height = 84,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "goec_panel1_SE_png",
        e.width = 222,
        e.x = 224,
        e.y = 254,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 39,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_1_png",
        e.touchEnabled = !1,
        e.x = 142,
        e.y = 1,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 306,
        e.y = 39,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_2_png",
        e.touchEnabled = !1,
        e.x = 360,
        e.y = 0,
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 126,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_7_png",
        e.touchEnabled = !1,
        e.x = 127,
        e.y = 81,
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_zu_6_png",
        e.touchEnabled = !1,
        e.x = 368,
        e.y = 88,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 306,
        e.y = 126,
        e
    },
    n._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 212,
        e
    },
    n._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_9_png",
        e.touchEnabled = !1,
        e.x = 138,
        e.y = 175,
        e
    },
    n._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 306,
        e.y = 212,
        e
    },
    n._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_4_png",
        e.touchEnabled = !1,
        e.x = 369,
        e.y = 175,
        e
    },
    n._Image23_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 299,
        e
    },
    n._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_xz_3_png",
        e.touchEnabled = !1,
        e.x = 136,
        e.y = 258,
        e
    },
    n._Image25_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel1_1705202_png",
        e.touchEnabled = !1,
        e.x = 306,
        e.y = 299,
        e
    },
    n._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_zu_4_png",
        e.touchEnabled = !1,
        e.x = 364,
        e.y = 259,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "冷静之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 241,
        e.y = 102,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 132,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*5",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 330,
        e.y = 132,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "智慧之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 187,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 10,
        e.y = 218,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*3",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 100,
        e.y = 221,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "坚铠之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 188,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 218,
        e
    },
    n._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*2",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 330,
        e.y = 221,
        e
    },
    n._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "风影之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 275,
        e
    },
    n._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 10,
        e.y = 305,
        e
    },
    n._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*4",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 100,
        e.y = 308,
        e
    },
    n._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "骁勇之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 275,
        e
    },
    n._Label16_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 305,
        e
    },
    n._Label17_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*1",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 330,
        e.y = 308,
        e
    },
    n._Label18_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "神速之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 14,
        e
    },
    n._Label19_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 10,
        e.y = 45,
        e
    },
    n._Label20_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*2",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 100,
        e.y = 45,
        e
    },
    n._Label21_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "暴怒之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 15,
        e
    },
    n._Label22_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 45,
        e
    },
    n._Label23_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*5",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 330,
        e.y = 45,
        e
    },
    n._Label24_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "铁拳之卡修斯",
        e.textColor = 16770625,
        e.touchEnabled = !1,
        e.x = 11,
        e.y = 102,
        e
    },
    n._Label25_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "战胜奖励",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 10,
        e.y = 132,
        e
    },
    n._Label26_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "*3",
        e.textColor = 4187130,
        e.touchEnabled = !1,
        e.x = 100,
        e.y = 135,
        e
    },
    n.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 230,
        e.y = 0,
        e
    },
    n.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 87,
        e
    },
    n.pass4_i = function() {
        var e = new eui.Image;
        return this.pass4 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 230,
        e.y = 87,
        e
    },
    n.pass5_i = function() {
        var e = new eui.Image;
        return this.pass5 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 173,
        e
    },
    n.pass6_i = function() {
        var e = new eui.Image;
        return this.pass6 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 230,
        e.y = 173,
        e
    },
    n.pass7_i = function() {
        var e = new eui.Image;
        return this.pass7 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 260,
        e
    },
    n.pass8_i = function() {
        var e = new eui.Image;
        return this.pass8 = e,
        e.source = "goec_panel1_yitongguo_png",
        e.visible = !0,
        e.x = 230,
        e.y = 260,
        e
    },
    n.btnSign_i = function() {
        var e = new eui.Image;
        return this.btnSign = e,
        e.source = "goec_panel1_mrqd_png",
        e.x = 981,
        e.y = 53,
        e
    },
    n.hasSign_i = function() {
        var e = new eui.Image;
        return this.hasSign = e,
        e.source = "goec_panel1_hasSign_png",
        e.x = 981,
        e.y = 53,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "goec_panel1_jlbb_png",
        e.x = 1,
        e.y = 423,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "goec_panel1_jlhf_png",
        e.x = 0,
        e.y = 513,
        e
    },
    n.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 947,
        e.y = 0,
        e.elementsContent = [this._Image27_i(), this.txt_itemNum_i(), this.btnadd_i(), this._Image28_i()],
        e
    },
    n._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_jx_20_kb_2_png",
        e.x = 5,
        e.y = 8,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "99/99",
        e.textColor = 12834813,
        e.x = 53,
        e.y = 11,
        e
    },
    n.btnadd_i = function() {
        var e = new eui.Image;
        return this.btnadd = e,
        e.source = "goec_panel1_add_png",
        e.x = 122,
        e.y = 9,
        e
    },
    n._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel1_1705202_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.godOfEarthCassius.Panel2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "pet7", "pet6", "pet5", "pet4", "pet3", "pet2", "pet1", "txt_intro", "btnBag", "btnCure", "kuang", "groupRight", "item", "btnOnekey", "btnGo1", "txt_itemNum", "btnAdd", "btnFight", "btnFast", "btnAddTimes", "txt_leftTime", "_star1", "_star2", "_star3", "star", "star1", "gou1", "txt_info1", "rule3", "star2", "gou2", "txt_info2", "rule2", "star3", "gou3", "txt_info3", "rule1"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet7_i(), this.pet6_i(), this.pet5_i(), this.pet4_i(), this.pet3_i(), this.pet2_i(), this.pet1_i(), this._Group1_i(), this.btnBag_i(), this.btnCure_i(), this.groupRight_i(), this.item_i(), this.btnOnekey_i(), this._Group2_i(), this._Image5_i(), this.btnFight_i(), this.btnFast_i(), this._Image6_i(), this._Label1_i(), this._Image7_i(), this._Label2_i(), this._Image8_i(), this.btnAddTimes_i(), this.txt_leftTime_i(), this.star_i(), this.rule3_i(), this.rule2_i(), this.rule1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "goec_panel1_bg_jpg",
        e.top = 0,
        e
    },
    n.pet7_i = function() {
        var e = new eui.Image;
        return this.pet7 = e,
        e.horizontalCenter = -32,
        e.source = "goec_panel2_pet7_png",
        e.y = 65,
        e
    },
    n.pet6_i = function() {
        var e = new eui.Image;
        return this.pet6 = e,
        e.horizontalCenter = -64,
        e.source = "goec_panel2_pet6_png",
        e.y = 54,
        e
    },
    n.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.horizontalCenter = -64.5,
        e.source = "goec_panel2_pet5_png",
        e.y = 96,
        e
    },
    n.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.horizontalCenter = -46.5,
        e.source = "goec_panel2_pet4_png",
        e.y = 72,
        e
    },
    n.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.horizontalCenter = -57,
        e.source = "goec_panel2_pet3_png",
        e.y = 0,
        e
    },
    n.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.horizontalCenter = -23,
        e.source = "goec_panel2_pet2_png",
        e.y = 63,
        e
    },
    n.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.horizontalCenter = -64,
        e.source = "goec_panel2_pet1_png",
        e.y = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -7,
        e.y = 50,
        e.elementsContent = [this.txt_intro_i(), this._Image1_i()],
        e
    },
    n.txt_intro_i = function() {
        var e = new eui.Label;
        return this.txt_intro = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "按照条件击对手即可增加星级，达成全部3星即可获得大地之神·卡修斯\n挑战梦魇需要消耗  卡修斯的怒火*3，挑战地神之怒关卡可获得.",
        e.textColor = 12111615,
        e.x = 0,
        e.y = 10,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = .6,
        e.scaleY = .6,
        e.source = "goec_panel2_1705202_png",
        e.x = 161,
        e.y = 30,
        e
    },
    n.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.left = 60,
        e.source = "goec_panel2_jlbb_png",
        e.y = 443,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.left = 60,
        e.source = "goec_panel2_jlhf_png",
        e.y = 533,
        e
    },
    n.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.height = 595,
        e.right = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 497,
        e.y = 47,
        e.elementsContent = [this._Image2_i(), this.kuang_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_zu_7_png",
        e.visible = !0,
        e.x = 60,
        e.y = 0,
        e
    },
    n.kuang_i = function() {
        var e = new eui.Image;
        return this.kuang = e,
        e.source = "goec_panel2_kuang_png",
        e.x = 202,
        e.y = 199,
        e
    },
    n.item_i = function() {
        var e = new eui.Group;
        return this.item = e,
        e.x = 879,
        e.y = 20,
        e
    },
    n.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.right = 222,
        e.source = "goec_panel2_txtlabel_png",
        e.y = 538,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 60,
        e.y = 20,
        e.elementsContent = [this.btnGo1_i(), this._Image3_i(), this.txt_itemNum_i(), this.btnAdd_i(), this._Image4_i()],
        e
    },
    n.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "goec_panel2_tzhd_png",
        e.x = 158,
        e.y = 4,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_jx_20_kb_2_png",
        e.x = 5,
        e.y = 8,
        e
    },
    n.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "99/99",
        e.textColor = 12834813,
        e.x = 53,
        e.y = 11,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "goec_panel2_add_png",
        e.x = 122,
        e.y = 5,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_1705202_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "goec_mainpanel_ti2_png",
        e.x = 484.3,
        e.y = 482.324,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.horizontalCenter = 75,
        e.source = "goec_panel2_btnfight_png",
        e.y = 538,
        e
    },
    n.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.horizontalCenter = -156,
        e.source = "goec_panel2_benfast_png",
        e.y = 538,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -27.5,
        e.source = "goec_panel2_juxing_904_png",
        e.y = 589,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = -54,
        e.size = 18,
        e.text = "今日剩余挑战次数：",
        e.textColor = 12111615,
        e.y = 596,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.right = 182,
        e.source = "goec_panel2_jx_904_kb_png",
        e.y = 589,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.right = 263,
        e.size = 18,
        e.text = "消耗798",
        e.textColor = 12111615,
        e.y = 596,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.right = 245,
        e.source = "goec_panel2_icon_gold_png",
        e.y = 596,
        e
    },
    n.btnAddTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddTimes = e,
        e.horizontalCenter = 61,
        e.source = "goec_panel2_add_png",
        e.y = 590,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 29.5,
        e.size = 18,
        e.text = "9",
        e.textColor = 8646655,
        e.y = 595,
        e
    },
    n.star_i = function() {
        var e = new eui.Group;
        return this.star = e,
        e.x = 35,
        e.y = 89,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this._star1_i(), this._Image11_i(), this._star2_i(), this._Image12_i(), this._star3_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 51,
        e.source = "goec_panel2_tuoyuan_1_png",
        e.visible = !0,
        e.width = 207,
        e.x = 0,
        e.y = 4,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "goec_panel2_starbg2_png",
        e.visible = !0,
        e.width = 42,
        e.x = 32,
        e.y = 9,
        e
    },
    n._star1_i = function() {
        var e = new eui.Image;
        return this._star1 = e,
        e.height = 60,
        e.source = "goec_panel2_dbx_2_png",
        e.visible = !0,
        e.width = 61,
        e.x = 23,
        e.y = 0,
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "goec_panel2_starbg2_png",
        e.width = 42,
        e.x = 82,
        e.y = 9,
        e
    },
    n._star2_i = function() {
        var e = new eui.Image;
        return this._star2 = e,
        e.height = 60,
        e.source = "goec_panel2_dbx_2_png",
        e.width = 61,
        e.x = 73,
        e.y = 0,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 41,
        e.source = "goec_panel2_starbg2_png",
        e.width = 42,
        e.x = 132,
        e.y = 9,
        e
    },
    n._star3_i = function() {
        var e = new eui.Image;
        return this._star3 = e,
        e.height = 60,
        e.source = "goec_panel2_dbx_2_png",
        e.width = 61,
        e.x = 123,
        e.y = 0,
        e
    },
    n.rule3_i = function() {
        var e = new eui.Group;
        return this.rule3 = e,
        e.x = 26,
        e.y = 150,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this.star1_i(), this.gou1_i(), this.txt_info1_i()],
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_zu_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_starbg2_png",
        e.x = 9,
        e.y = 9,
        e
    },
    n.star1_i = function() {
        var e = new eui.Image;
        return this.star1 = e,
        e.source = "goec_panel2_dbx_2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.gou1_i = function() {
        var e = new eui.Image;
        return this.gou1 = e,
        e.source = "goec_panel2_gou_png",
        e.visible = !0,
        e.x = 200,
        e.y = 20,
        e
    },
    n.txt_info1_i = function() {
        var e = new eui.Label;
        return this.txt_info1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 15,
        e.text = "条件文本最多十五\n条件文本最多十五",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 140,
        e.x = 58,
        e.y = 8,
        e
    },
    n.rule2_i = function() {
        var e = new eui.Group;
        return this.rule2 = e,
        e.x = 26,
        e.y = 210,
        e.elementsContent = [this._Image15_i(), this._Image16_i(), this.star2_i(), this.gou2_i(), this.txt_info2_i()],
        e
    },
    n._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_zu_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_starbg2_png",
        e.x = 9,
        e.y = 9,
        e
    },
    n.star2_i = function() {
        var e = new eui.Image;
        return this.star2 = e,
        e.source = "goec_panel2_dbx_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.gou2_i = function() {
        var e = new eui.Image;
        return this.gou2 = e,
        e.source = "goec_panel2_gou_png",
        e.visible = !0,
        e.x = 200,
        e.y = 20,
        e
    },
    n.txt_info2_i = function() {
        var e = new eui.Label;
        return this.txt_info2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 15,
        e.text = "条件文本最多十五\n条件文本最多十五",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 140,
        e.x = 58,
        e.y = 8,
        e
    },
    n.rule1_i = function() {
        var e = new eui.Group;
        return this.rule1 = e,
        e.x = 26,
        e.y = 270,
        e.elementsContent = [this._Image17_i(), this._Image18_i(), this.star3_i(), this.gou3_i(), this.txt_info3_i()],
        e
    },
    n._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_zu_2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel2_starbg2_png",
        e.x = 9,
        e.y = 9,
        e
    },
    n.star3_i = function() {
        var e = new eui.Image;
        return this.star3 = e,
        e.source = "goec_panel2_dbx_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.gou3_i = function() {
        var e = new eui.Image;
        return this.gou3 = e,
        e.source = "goec_panel2_gou_png",
        e.visible = !0,
        e.x = 200,
        e.y = 20,
        e
    },
    n.txt_info3_i = function() {
        var e = new eui.Label;
        return this.txt_info3 = e,
        e.fontFamily = "MFShangHei",
        e.height = 40,
        e.size = 15,
        e.text = "条件文本最多十五\n条件文本最多十五",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 140,
        e.x = 58,
        e.y = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.godOfEarthCassius.Panel3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnFight", "btnbuyTime", "btnOneKey", "btnBag", "btnCure", "bar_value", "btnWu", "btnBuy1", "btnGet1", "hasGet1", "reward1", "btnTe", "btnBuy2", "btnGet2", "hasGet2", "reward2", "btnBuy3", "btnKe", "hasGet3", "btnGet3", "reward3", "txt_leftTime", "txt_overTime", "grp_main"],
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
            e.source = "goec_panel3_jindu_png",
            e.visible = !0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "goec_panel3_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_main_i = function() {
        var e = new eui.Group;
        return this.grp_main = e,
        e.horizontalCenter = -13.5,
        e.y = 29,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnFight_i(), this.btnbuyTime_i(), this.btnOneKey_i(), this._Image3_i(), this.btnBag_i(), this.btnCure_i(), this._Image4_i(), this.bar_value_i(), this.reward1_i(), this.reward2_i(), this.reward3_i(), this._Label4_i(), this._Label5_i(), this.txt_leftTime_i(), this._Label6_i(), this.txt_overTime_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_juxing_904_png",
        e.x = 723,
        e.y = 561,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_jx_907_kb_png",
        e.x = 739,
        e.y = 475,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "goec_panel3_btnfight_png",
        e.visible = !1,
        e.x = 832,
        e.y = 509,
        e
    },
    i.btnbuyTime_i = function() {
        var e = new eui.Image;
        return this.btnbuyTime = e,
        e.source = "goec_panel3_btnbuy_png",
        e.visible = !0,
        e.x = 832,
        e.y = 509,
        e
    },
    i.btnOneKey_i = function() {
        var e = new eui.Image;
        return this.btnOneKey = e,
        e.source = "goec_panel3_btnonekey_png",
        e.x = 312,
        e.y = 509,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_zu_8_png",
        e.x = 929,
        e.y = 505,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "goec_panel3_jlbb_png",
        e.x = 1,
        e.y = 414,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "goec_panel3_jlhf_png",
        e.x = 0,
        e.y = 504,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_di_png",
        e.x = 882,
        e.y = 89,
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
        e.x = 890,
        e.y = 97,
        e.skinName = n,
        e
    },
    i.reward1_i = function() {
        var e = new eui.Group;
        return this.reward1 = e,
        e.x = 941,
        e.y = 69,
        e.elementsContent = [this._Image5_i(), this.btnWu_i(), this._Label1_i(), this.btnBuy1_i(), this.btnGet1_i(), this.hasGet1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_zu_9_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.source = "goec_panel3_diwujineng_png",
        e.x = 20,
        e.y = 26,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "第五技能",
        e.textColor = 16777215,
        e.x = 11,
        e.y = 3,
        e
    },
    i.btnBuy1_i = function() {
        var e = new eui.Image;
        return this.btnBuy1 = e,
        e.source = "goec_panel3_txtlabel_png",
        e.x = 0,
        e.y = 81,
        e
    },
    i.btnGet1_i = function() {
        var e = new eui.Group;
        return this.btnGet1 = e,
        e.x = 7,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Image7_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_kejihuo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 21,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.alpha = 0,
        e.source = "goec_panel3_zu_9_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.hasGet1_i = function() {
        var e = new eui.Image;
        return this.hasGet1 = e,
        e.source = "goec_panel3_kjh_kb_png",
        e.x = 7,
        e.y = 21,
        e
    },
    i.reward2_i = function() {
        var e = new eui.Group;
        return this.reward2 = e,
        e.x = 771,
        e.y = 205,
        e.elementsContent = [this._Image8_i(), this._Label2_i(), this.btnTe_i(), this.btnBuy2_i(), this.btnGet2_i(), this.hasGet2_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_zu_9_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "专属特性",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 11,
        e.y = 3,
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.source = "goec_panel3_zstx_png",
        e.visible = !0,
        e.x = 21,
        e.y = 31,
        e
    },
    i.btnBuy2_i = function() {
        var e = new eui.Image;
        return this.btnBuy2 = e,
        e.source = "goec_panel3_txtlabel_png",
        e.visible = !0,
        e.x = 0,
        e.y = 81,
        e
    },
    i.btnGet2_i = function() {
        var e = new eui.Group;
        return this.btnGet2 = e,
        e.x = 7,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this._Image10_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_kejihuo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 21,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.alpha = 0,
        e.source = "goec_panel3_zu_9_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.hasGet2_i = function() {
        var e = new eui.Image;
        return this.hasGet2 = e,
        e.source = "goec_panel3_kjh_kb_png",
        e.visible = !0,
        e.x = 7,
        e.y = 21,
        e
    },
    i.reward3_i = function() {
        var e = new eui.Group;
        return this.reward3 = e,
        e.x = 941,
        e.y = 340,
        e.elementsContent = [this._Image11_i(), this.btnBuy3_i(), this.btnKe_i(), this.hasGet3_i(), this._Label3_i(), this.btnGet3_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_zu_9_png",
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnBuy3_i = function() {
        var e = new eui.Image;
        return this.btnBuy3 = e,
        e.source = "goec_panel3_txtlabel_png",
        e.x = 0,
        e.y = 81,
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.source = "goec_panel3_40406_png",
        e.x = 19,
        e.y = 27,
        e
    },
    i.hasGet3_i = function() {
        var e = new eui.Image;
        return this.hasGet3 = e,
        e.source = "goec_panel3_kjh_kb_png",
        e.visible = !0,
        e.x = 7,
        e.y = 21,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "专属刻印",
        e.textColor = 16777215,
        e.x = 11,
        e.y = 3,
        e
    },
    i.btnGet3_i = function() {
        var e = new eui.Group;
        return this.btnGet3 = e,
        e.x = 7,
        e.y = 0,
        e.elementsContent = [this._Image12_i(), this._Image13_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "goec_panel3_kejihuo_png",
        e.visible = !0,
        e.x = 0,
        e.y = 21,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.alpha = 0,
        e.source = "goec_panel3_zu_9_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "击败卡修斯即可依次激活专属刻印、专属特性和第五技能",
        e.textColor = 12111615,
        e.x = 303,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余挑战次数每日刷新",
        e.textColor = 12111615,
        e.x = 793,
        e.y = 567,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "（9/9）",
        e.textColor = 16777215,
        e.x = 943,
        e.y = 507,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已击败",
        e.textColor = 8372735,
        e.x = 780,
        e.y = 478,
        e
    },
    i.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9/9",
        e.textColor = 16775806,
        e.x = 841,
        e.y = 477,
        e
    },
    t
} (eui.Skin);