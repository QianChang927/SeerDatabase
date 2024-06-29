var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.leftTime = 0,
            i.skinName = e.Panel4Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panel4_title4_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.animInit()
        },
        i.prototype.animInit = function() {
            this.acAnim = SpineUtil.createAnimate("leishengyongheng"),
            this.grp_contens.addChild(this.acAnim),
            this.acAnim.touchEnabled = !1,
            this.acAnim.x = 552,
            this.acAnim.y = 320,
            this.acAnim.visible = !1
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247788, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [2, 4],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247794, 1,
                    function() {
                        KTool.doExchange(8993, 1,
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                n.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btntiaozhan,
            function() {
                return n.leftTime <= 0 ? void BubblerManager.getInstance().showText("剩余挑战次数不足，请明日再次尝试") : void SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [14, 0],
                function() {
                    n.service.updateValues().then(function() {
                        n.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnGetStone,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击雷身永恒界面-【获得电魂石】"),
                n.service.openPanel(e.KingRayConst.Extra1)
            },
            this),
            ImageButtonUtil.add(this.btnDuihuan,
            function() {
                if (ItemManager.getNumByID(1709642) < 3) {
                    var i = "需要<font color='#ff0000'>3个混乱电灵</font>才能兑换随机其他电灵";
                    return void BubblerManager.getInstance().showText(i, !0)
                }
                SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [12, 0],
                function() {
                    n.service.updateValues().then(function() {
                        n.update()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnJihuo, this.jihuo, this)
        },
        i.prototype.jihuo = function() {
            for (var n = this,
            i = !0,
            t = 1; 5 >= t; t++) if (ItemManager.getNumByID(1709642 + t) < 5) {
                i = !1;
                break
            }
            if (!i) {
                var _ = "需要<font color='#ff0000'>所有电灵各5个</font>才能激活电魂石";
                return void BubblerManager.getInstance().showText(_, !0)
            }
            this.acAnim.play("jihuo", 1, 0, {
                playEnd: function() {
                    SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [11, 0],
                    function() {
                        n.service.updateValues().then(function() {
                            n.update()
                        }),
                        n.acAnim.visible = !1
                    })
                }
            })
        },
        i.prototype.update = function() {
            this.leftTime = 10 - this.service.getValue(e.KingRayConst.daily_level4_times),
            this.txt_leftTime.text = "" + this.leftTime;
            var n = this.service.getValue(e.KingRayConst.forever_levels_state),
            i = 13 == this.service.getValue(e.KingRayConst.forever_stone_state),
            t = n >= 4;
            this.setAnim(i, t),
            this.btnJihuo.visible = i,
            this.btnGetStone.visible = !i;
            var _ = ItemManager.getNumByID(1709642),
            a = _ >= 3 ? 589568 : 16769453;
            this.txt_num0.textFlow = [{
                text: _ + "",
                style: {
                    textColor: a
                }
            },
            {
                text: " / 3",
                style: {
                    textColor: 16769453
                }
            }];
            for (var r = 1; 5 >= r; r++) {
                var s = ItemManager.getNumByID(1709642 + r),
                u = s >= 5 ? 589568 : 16769453;
                this["txt_num" + r].textFlow = [{
                    text: s + "",
                    style: {
                        textColor: u
                    }
                },
                {
                    text: " / 5",
                    style: {
                        textColor: 16769453
                    }
                }]
            }
            t && (EventManager.removeAll(this), this.service.backToMainPanel()),
            DisplayUtil.setEnabled(this.btnAdd, 0 == this.leftTime, this.leftTime > 0)
        },
        i.prototype.setAnim = function(e, n) {
            this.acAnim.visible = e && !n,
            e && !n && (this.acAnim.play("kaishijihuo", 0), this.acAnim.touchEnabled = this.acAnim.touchChildren = !1)
        },
        i
    } (BasicPanel);
    e.KingRayPanel4 = n,
    __reflect(n.prototype, "kingRay.KingRayPanel4")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.service.setValues([e.KingRayConst.forever_level1_boos1times, e.KingRayConst.forever_level1_boos2times, e.KingRayConst.forever_level1_boos3times, e.KingRayConst.forever_level1_boos4times, e.KingRayConst.forever_level1_boos5times, e.KingRayConst.forever_level1_drawId, e.KingRayConst.forever_level1_value, e.KingRayConst.forever_level2_value, e.KingRayConst.forever_level5_signDay, e.KingRayConst.forever_levels_state, e.KingRayConst.forever_pet_state, e.KingRayConst.forever_stone_state, e.KingRayConst.forever_sign_day, e.KingRayConst.forever_sign_timeLine], [e.KingRayConst.daily_level2_times, e.KingRayConst.daily_level4_times, e.KingRayConst.daily_level3_state, e.KingRayConst.daily_sign_backDay, e.KingRayConst.daily_sign_continue], [e.KingRayConst.bitbuf_hasOnekey, e.KingRayConst.bitbuf_hasPet]),
            i.init([{
                panelName: e.KingRayConst.MAINPANEL,
                isMain: !0
            },
            {
                panelName: e.KingRayConst.PANEL1
            },
            {
                panelName: e.KingRayConst.PANEL2
            },
            {
                panelName: e.KingRayConst.PANEL3
            },
            {
                panelName: e.KingRayConst.PANEL4
            },
            {
                panelName: e.KingRayConst.PANEL5
            },
            {
                panelName: e.KingRayConst.Extra1
            },
            {
                panelName: e.KingRayConst.Extra2
            }]),
            i
        }
        return __extends(i, n),
        i.prototype.reShow = function() {
            var e = this;
            "" == this.currentPanel.name && this.service.updateValues().then(function() {
                e.destroyed || e.currentPanel && e.currentPanel.update && e.currentPanel.update()
            })
        },
        i
    } (BasicMultPanelModule);
    e.KingRay = n,
    __reflect(n.prototype, "kingRay.KingRay")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, n, i, t) {
    return new(i || (i = Promise))(function(_, a) {
        function r(e) {
            try {
                u(t.next(e))
            } catch(n) {
                a(n)
            }
        }
        function s(e) {
            try {
                u(t["throw"](e))
            } catch(n) {
                a(n)
            }
        }
        function u(e) {
            e.done ? _(e.value) : new i(function(n) {
                n(e.value)
            }).then(r, s)
        }
        u((t = t.apply(e, n || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, n) {
    function i(e) {
        return function(n) {
            return t([e, n])
        }
    }
    function t(i) {
        if (_) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (_ = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (r = u.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < r[1]) {
                    u.label = r[1],
                    r = i;
                    break
                }
                if (r && u.label < r[2]) {
                    u.label = r[2],
                    u.ops.push(i);
                    break
                }
                r[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = n.call(e, u)
        } catch(t) {
            i = [6, t],
            a = 0
        } finally {
            _ = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var _, a, r, s, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.canDown = !0,
            i.new_monster_level_id = 139,
            i.skinName = e.MainpanelSkin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(134, this, "kr_mainpanel_stms_png",
            function() {
                e.service.closeModule()
            },
            this,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【？】")
            }),
            this.grpBack.title.y = 10,
            this.grpBack.btnHelp.x = 275,
            this.addEvents(),
            PetFactorCollectionManager.getAllData().then(function() {
                var n = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.new_monster_level_id);
                e.btnCollect.source = n ? "kr_mainpanel_btncollected_png": "kr_mainpanel_btncollect_png"
            })
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btn1,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【电系暴动】"),
                n.service.openPanel(e.KingRayConst.PANEL1)
            },
            this),
            ImageButtonUtil.add(this.btn2,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【邪恶来袭】"),
                n.service.openPanel(e.KingRayConst.PANEL2)
            },
            this),
            ImageButtonUtil.add(this.btn3,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【王者祝福】"),
                n.service.openPanel(e.KingRayConst.PANEL3)
            },
            this),
            ImageButtonUtil.add(this.btn4,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【雷身永恒】"),
                n.service.openPanel(e.KingRayConst.PANEL4)
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【能力提升】"),
                n.service.openPanel(e.KingRayConst.PANEL5)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3142,
                    type: "pet",
                    thisObj: n
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnSuper,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击主界面-【至尊获得】"),
                PayManager.doPayFunc(function() {
                    var i = [247781, 247782, 247783, 247784],
                    t = n.service.getValue(e.KingRayConst.forever_levels_state);
                    BuyProductManager.buyProductBySocket(i[t],
                    function() {
                        t = t > 3 ? 3 : t,
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [1, t],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    },
                    n)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnDiscount,
            function() {
                var n = new e.OneKeyPop,
                i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle = {
                    maskAlpha: .8,
                    maskColor: 0
                },
                PopViewManager.getInstance().openView(n, i)
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this.new_monster_level_id), this.btnCollect.source = e ? "kr_mainpanel_btncollected_png": "kr_mainpanel_btncollect_png", [4, PetFactorCollectionManager.setCollection(this.new_monster_level_id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return n.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            for (var n = this.service.getValue(e.KingRayConst.forever_levels_state), i = 1 == this.service.getValue(e.KingRayConst.bitbuf_hasPet), t = this.service.getValue(e.KingRayConst.forever_pet_state), _ = 0, a = 1; 4 >= a; a++) this["hasDone" + a].visible = n > a - 1 || i;
            for (var a = 1; 3 >= a; a++) 1 == KTool.getBit(t, a) && _++;
            DisplayUtil.setEnabled(this.btn1, 1 > n && !i, n >= 1 || i),
            DisplayUtil.setEnabled(this.btn2, 1 == n && !i, 1 != n || i),
            DisplayUtil.setEnabled(this.btn3, 2 == n && !i, 2 != n || i),
            DisplayUtil.setEnabled(this.btn4, 3 == n && !i, 3 != n || i),
            DisplayUtil.setEnabled(this.btnUp, 3 != _, 3 == _),
            this.btnDiscount.visible = this.hasPet.visible = i,
            this.btnSuper.visible = !i
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.KingRayMainPanel = n,
    __reflect(n.prototype, "kingRay.KingRayMainPanel")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.curDrawID = 0,
            i.skinName = e.Panel1Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.name = "panel1",
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panel1_title1_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247785, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [2, 1],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                return StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击电系暴动界面-【抽取对手】"),
                0 != n.curDrawID ? void n.openPop(n.curDrawID) : void SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [9, 0],
                function(e) {
                    var i = e.data;
                    n.curDrawID = i.readUnsignedInt(),
                    n.openPop(n.curDrawID)
                })
            },
            this),
            EventManager.addEventListener("panel1_fastBuy",
            function() {
                n.service.updateValues().then(function() {
                    n.update()
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                n.service.updateValues().then(function() {
                    n.update()
                })
            },
            this)
        },
        i.prototype.openPop = function(n) {
            var i = {};
            i.drawId = n,
            i.curTime = this.service.getValue(3970 + n),
            i.value = this.service.getValue(e.KingRayConst.forever_level1_value);
            var t = new e.Panel1Pop(i),
            _ = PopViewManager.createDefaultStyleObject();
            _.ignoreMaskClick = !0,
            _.maskShapeStyle = {
                maskAlpha: .8,
                maskColor: 0
            },
            PopViewManager.getInstance().openView(t, _)
        },
        i.prototype.update = function() {
            var n = this,
            i = this.service.getValue(e.KingRayConst.forever_levels_state),
            t = this.service.getValue(e.KingRayConst.forever_level1_value);
            this.curDrawID = this.service.getValue(e.KingRayConst.forever_level1_drawId),
            this.bar_value.value = t;
            var _ = i >= 1;
            if (this.txt_progress.text = t + "/100", 0 == this.curDrawID || _ || this.openPop(this.curDrawID), _) {
                EventManager.removeAll(this);
                var a = "雷伊击败了一众电系精灵，获得了大家的认可，成功平息暴动,现在至尊获得王·雷伊仅需<font color='#ff0000'>768</font>钻石";
                Alarm.show(a,
                function() {
                    n.service.openPanel(e.KingRayConst.PANEL2)
                })
            }
        },
        i
    } (BasicPanel);
    e.KingRayPanel1 = n,
    __reflect(n.prototype, "kingRay.KingRayPanel1")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.skinName = e.Panel2Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.name = "panel2",
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panel2_title2_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247786, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [2, 2],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                n.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnFastCure,
            function() {
                StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击邪恶来袭界面-【快速恢复】"),
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247791, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [5, 0],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247790, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [4, 0],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(t["btnTiaozhan_" + i],
                function() {
                    var t = n.service.getValue(e.KingRayConst.daily_level2_times),
                    _ = t >= 8 ? 7194 : 7190;
                    t >= 8 ? Alert.show("当前精灵处于疲惫状态，战斗难度激增，是否仍然开始战斗？",
                    function() {
                        FightManager.fightNoMapBoss(_ + i)
                    }) : FightManager.fightNoMapBoss(_ + i)
                },
                t)
            },
            t = this, _ = 1; 4 >= _; _++) i(_);
            ImageButtonUtil.add(this.btnFight,
            function() {
                FightManager.fightNoMapBoss(7199)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                n.service.updateValues().then(function() {
                    var i = n.service.getValue(e.KingRayConst.daily_level2_times),
                    t = n.service.getValue(e.KingRayConst.forever_level2_value);
                    8 == i && 90 > t && BubblerManager.getInstance().showText("已进入疲惫状态，己方精灵受到伤害大幅度增加"),
                    n.update()
                })
            },
            this)
        },
        i.prototype.update = function() {
            var n = this,
            i = this.service.getValue(e.KingRayConst.forever_levels_state),
            t = i >= 2,
            _ = this.service.getValue(e.KingRayConst.forever_level2_value),
            a = this.service.getValue(e.KingRayConst.daily_level2_times);
            if (this.bar_value.value = _, this.rightState1.visible = this.bar.visible = 90 > _, this.rightState2.visible = this.img2.visible = _ >= 90, this.leftState1.visible = 8 > a || _ >= 90, this.leftState2.visible = a >= 8 && 90 > _, this.txt_leftTime.visible = 8 > a, this.txt_leftTime.textFlow = [{
                text: "再进行",
                style: {
                    textColor: 16765757
                }
            },
            {
                text: 8 - a + "",
                style: {
                    textColor: 9305913
                }
            },
            {
                text: "场战斗进入疲惫状态",
                style: {
                    textColor: 16765757
                }
            }], this.txt_progress.text = _ + "/90", t) {
                EventManager.removeAll(this);
                var r = "雷伊击败了幕后黑手，顺利杀出重围！现在至尊获得王·雷伊仅需<font color='#ff0000'>668</font>钻石";
                Alarm.show(r,
                function() {
                    n.service.openPanel(e.KingRayConst.PANEL3)
                },
                this)
            }
        },
        i
    } (BasicPanel);
    e.KingRayPanel2 = n,
    __reflect(n.prototype, "kingRay.KingRayPanel2")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.skinName = e.Panel3Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panel3_title3_png",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247787, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [2, 3],
                        function() {
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                PayManager.doPayFunc(function() {
                    var e = {};
                    e.type = "product_diamond",
                    e.ins = {
                        iconID: 1709641,
                        productID: 247793
                    },
                    e.caller = n,
                    e.callBack = function(e, i) {
                        KTool.buyProductByCallback(247793, i,
                        function() {
                            KTool.doExchange(8992, i,
                            function() {
                                n.service.updateValues().then(function() {
                                    n.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, e)
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnDone,
            function() {
                ItemManager.getNumByID(1709641) < 20 ? BubblerManager.getInstance().showText("祝福印记数量不足，挑战精灵王即可获得") : SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [10, 0],
                function() {
                    n.service.updateValues().then(function() {
                        n.update()
                    })
                })
            },
            this);
            for (var i = function(n) {
                ImageButtonUtil.add(t["pet" + n],
                function() {
                    StatLogger.log("20230407版本系统功能", "王·雷伊搬迁", "点击王者祝福界面-任意【关卡面板】");
                    var i = new e.Panel3Pop(n);
                    PopViewManager.getInstance().openView(i)
                },
                t)
            },
            t = this, _ = 1; 8 >= _; _++) i(_)
        },
        i.prototype.update = function() {
            for (var n = this,
            i = this.service.getValue(e.KingRayConst.forever_levels_state), t = this.service.getValue(e.KingRayConst.daily_level3_state), _ = 1; 8 >= _; _++) {
                var a = 1 == KTool.getBit(t, _);
                this["over" + _].visible = !a,
                this["hasDone" + _].visible = a,
                DisplayUtil.setEnabled(this["pet" + _], !a, a)
            }
            this.txt_itemNum.text = ItemManager.getNumByID(1709641) + "/20";
            var r = i >= 3;
            if (r) {
                EventManager.removeAll(this);
                var s = "精灵王们的祝福灌注到雷伊体内，雷伊已经准备好迎接最终挑战了！现在至尊获得王·雷伊仅需<font color='#ff0000'>548</font>钻石";
                Alarm.show(s,
                function() {
                    n.service.openPanel(e.KingRayConst.PANEL4)
                })
            }
        },
        i
    } (BasicPanel);
    e.KingRayPanel3 = n,
    __reflect(n.prototype, "kingRay.KingRayPanel3")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
kingRay; !
function(e) {
    var n = function() {
        function e() {}
        return e.MAINPANEL = "kingRay.KingRayMainPanel",
        e.PANEL1 = "kingRay.KingRayPanel1",
        e.PANEL2 = "kingRay.KingRayPanel2",
        e.PANEL3 = "kingRay.KingRayPanel3",
        e.PANEL4 = "kingRay.KingRayPanel4",
        e.PANEL5 = "kingRay.KingRayPanel5",
        e.Extra1 = "kingRay.KingRayPanelExtra1",
        e.Extra2 = "kingRay.KingRayPanelExtra2",
        e.kingRay_CMD = 45655,
        e.forever_levels_state = 3966,
        e.forever_pet_state = 3969,
        e.forever_level1_value = 3967,
        e.forever_level2_value = 3968,
        e.forever_level1_boos1times = 3971,
        e.forever_level1_boos2times = 3972,
        e.forever_level1_boos3times = 3973,
        e.forever_level1_boos4times = 3974,
        e.forever_level1_boos5times = 3975,
        e.forever_level1_drawId = 3976,
        e.forever_level5_signDay = 12317,
        e.forever_stone_state = 100499,
        e.forever_sign_day = 123172,
        e.forever_sign_timeLine = 123173,
        e.daily_level2_times = 13855,
        e.daily_level3_state = 13856,
        e.daily_level4_times = 13857,
        e.daily_sign_continue = 202289,
        e.daily_sign_backDay = 202290,
        e.bitbuf_hasPet = 15096,
        e.bitbuf_hasOnekey = 15097,
        e
    } ();
    e.KingRayConst = n,
    __reflect(n.prototype, "kingRay.KingRayConst")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.todaynotSign = !1,
            i.skinName = e.Panel5Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var e = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panel5_title5_png",
            function() {
                if (e.todaynotSign) {
                    var n = "<font color='#ff0000'>今日尚未签到</font>，是否直接退出？";
                    Alert.show(n,
                    function() {
                        e.service.backToMainPanel()
                    })
                } else e.service.backToMainPanel()
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.checkIsBack()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnTe,
            function() {
                e.service.showPetEff(3142)
            },
            this),
            ImageButtonUtil.add(this.btnWu,
            function() {
                var e = {
                    id: 19734
                };
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.btnKe,
            function() {
                var e;
                CountermarkXMLInfo.isminMark(40657) ? (e = {},
                e.ins = 40657, tipsPop.TipsPop.openCounterMarkPop(e)) : (e = {},
                e.id = 40657, tipsPop.TipsPop.openItemPop(e))
            },
            this);
            for (var n = function(n) {
                ImageButtonUtil.add(i["btnSign_" + n],
                function() {
                    SocketConnection.sendByQueue(45655, [7, n + 7],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    })
                },
                i),
                3 > n && (ImageButtonUtil.add(i["btnGet_" + n],
                function() {
                    return PetManager.isDefaultPet(3142) ? void SocketConnection.sendByQueue(45655, [7, 4 + n],
                    function() {
                        e.service.updateValues().then(function() {
                            e.update()
                        })
                    }) : void Alarm.show("请将王·雷伊放入首发出战位置",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                },
                i), ImageButtonUtil.add(i["btnFast_" + n],
                function() {
                    return PetManager.isDefaultPet(3142) ? void BuyProductManager.buyProductBySocket([247796, 247797, 247798][n],
                    function() {
                        SocketConnection.sendByQueue(45655, [7, n + 1],
                        function() {
                            e.service.updateValues().then(function() {
                                e.update()
                            })
                        })
                    },
                    e) : void Alarm.show("请将王·雷伊放入首发出战位置",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                },
                i))
            },
            i = this, t = 0; 21 > t; t++) n(t)
        },
        i.prototype.update = function() {
            var n = this.service.getValue(e.KingRayConst.forever_sign_day),
            i = this.service.getValue(e.KingRayConst.daily_sign_continue),
            t = this.service.getValue(e.KingRayConst.forever_pet_state);
            this.todaynotSign = i - n == 1,
            console.log("签到天数" + n + "当前时间" + i);
            for (var _ = 0; 21 > _; _++) {
                var a = n >= _ + 1;
                this["flag_signed_" + _].visible = this["rect_" + _].visible = this["line_" + _].visible = a,
                this["day_" + _].visible = !a,
                this["btnSign_" + _].visible = n == _ && this.todaynotSign,
                this["line_" + _].scaleX = 1
            }
            0 != n && (this["line_" + (n - 1)].scaleX = .5, this.awardLine_0.visible = this.awardRect0.visible = n >= 7, this.awardLine_1.visible = this.awardRect1.visible = n >= 14, this.awardRect2.visible = n >= 21, 7 == n ? (this.awardLine_0.scaleY = .5, this.line_6.scaleX = 1) : 14 == n ? (this.awardLine_1.scaleY = .5, this.line_13.scaleX = 1) : 14 == n ? this.line_20.scaleX = 1 : this.awardLine_1.scaleY = this.awardLine_0.scaleY = 1);
            for (var _ = 0; 3 > _; _++) {
                var r = KTool.getBit(t, _ + 1);
                this["btnFast_" + _].visible = 7 * (_ + 1) > n && !r,
                this["btnGet_" + _].visible = n >= 7 * (_ + 1) && !r,
                this["flag_got_" + _].visible = r
            }
        },
        i.prototype.checkIsBack = function() {
            var n = this,
            i = this.service.getValue(e.KingRayConst.daily_sign_backDay);
            if (0 != i) {
                var t = "很抱歉，由于签到中断，需从<font color='#ff0000'>第" + i + "天</font>开始重新签到";
                Alarm.show(t,
                function() {
                    SocketConnection.sendByQueue(45655, [7, 28],
                    function() {
                        n.service.updateValues().then(function() {
                            n.update()
                        })
                    })
                })
            }
        },
        i
    } (BasicPanel);
    e.KingRayPanel5 = n,
    __reflect(n.prototype, "kingRay.KingRayPanel5")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.doneValues = [0, 1, 4, 5, 6, 7, 10, 11, 12],
            i.skinName = e.Panelextra1Skin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            var i = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "kr_panelextra1_title_png",
            function() {
                i.service.updateValues().then(function() {
                    i.service.openPanel(e.KingRayConst.PANEL4)
                })
            },
            this),
            this.grpBack.title.y = 10,
            this.addEvents(),
            this.initAnim()
        },
        i.prototype.initAnim = function() {
            this.drawAnim = SpineUtil.createAnimate("wangleiyi"),
            this.mainPanel.addChild(this.drawAnim),
            this.drawAnim.touchEnabled = !1,
            this.drawAnim.x = 543,
            this.drawAnim.y = 305,
            this.drawAnim.visible = !1
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247795, 1,
                    function() {
                        KTool.doExchange(8994, 1,
                        function() {
                            n.update()
                        })
                    })
                },
                n)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(42261, [4, 0],
                function() {
                    AwardManager.pause(),
                    n.drawAnim.visible = !0,
                    n.drawAnim.play("hecheng", 1, 0, {
                        playEnd: function() {
                            n.drawAnim.visible = !1,
                            AwardManager.resume(),
                            n.service.updateValues().then(function() {
                                n.update()
                            })
                        }
                    })
                })
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(t["btn1_" + i],
                function() {
                    n.service.openPanel(e.KingRayConst.Extra2, i)
                },
                t)
            },
            t = this, _ = 1; 8 >= _; _++) i(_)
        },
        i.prototype.update = function() {
            var n = this;
            KTool.getMultiValue([100499],
            function(i) {
                n.btnGet.visible = 12 == i[0],
                n.btnOnekey.visible = i[0] < 12;
                for (var t = 1; 8 >= t; t++) n["yiwancheng_" + t].visible = n.doneValues[t] <= i[0],
                n["weikaiqi_" + t].visible = i[0] < n.doneValues[t - 1],
                2 == t || 6 == t ? n["xuanzhong_" + t].visible = n["btn1_" + t].visible = i[0] > n.doneValues[t - 2] && i[0] < n.doneValues[t] : n["xuanzhong_" + t].visible = n["btn1_" + t].visible = i[0] == n.doneValues[t - 1];
                n.weikaiqi_1.visible = !1;
                var _ = 13 == n.service.getValue(e.KingRayConst.forever_stone_state);
                _ && n.service.openPanel(e.KingRayConst.PANEL4)
            })
        },
        i
    } (BasicPanel);
    e.KingRayPanelExtra1 = n,
    __reflect(n.prototype, "kingRay.KingRayPanelExtra1")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.lastLevel = 0,
            i.curLevel = 0,
            i.passStr = ["看来这就是导致水系精灵们邪化的源头了，沧岚感谢你的帮助！", "你的力量毫不逊色于艾恩斯，他认可了你的实力！", "雷霆之速名不虚传！凡尔斯甘拜下风！", "光明的力量终将得到伸张，正义必将战胜邪恶，斯嘉丽感谢你的帮助！", "成功救出冰凰兽，通过了柯尔德的试炼！", "唯有智慧者方可成为王者，米斯蒂克认可你的才华！", "乔特鲁德对你的力量心服口服，准备进入最后的试炼！", "诸王的力量汇聚一体，电魂石逐渐显现！"],
            i.levelInfo = ["一些水系精灵遭到了污染\n沧岚需要你帮她驱逐被污染的水系精灵，并找到污染的源头", "与艾恩斯进行力量比拼\n依次击败他的三种形态即可通过试炼", "凡尔斯希望可以与你进行一场竞速赛\n帮助雷伊在<font color='#ff0000'>5回合内</font>击败他即可通过试炼", "珀妮需要你的帮助\n斯嘉丽需要你协助击退前来入侵的黑暗精灵", "一只冰凰兽尝试掌握更强的力量，却反被冰封在寒冰之中\n造成10000伤害即可将其解救，通过试炼", "答对米斯蒂克的全部问题，即可通过试炼", "与三只巨龙进行力量的比拼\n全部战胜即可通过试炼", "点击右侧分身，寻找到弗里德的真身\n即可通过此次试炼"],
            i.imgLevelPosX = [21, 129, 236, 344, 452, 559, 667, 774],
            i.levelState = 0,
            i.isEnterFight = !1,
            i.curAwIndex = 0,
            i.qa = ["以下精灵系别中，最为强大的系别是", "两只同样的精灵，一只的体力却比另一只的要低，以下原因中<font color='#ff0000'>不可能的</font>是", "谱尼在圣能爆发的过程中，所遇敌人的幕后黑手是谁"],
            i.aw = ["电系", "王系", "普通系", "精灵的系别不分贵贱", "受到不同学习力的影响", "受到不同等级的影响", "受到不同性格的影响", "受到不同天赋的影响", "戴斯特", "迪普瑞辛", "威斯克", "索伦森"],
            i.skinName = e.Panelextra2Skin,
            i
        }
        return __extends(i, n),
        i.prototype.beforeAdd = function(e) {
            this.curLevel = this.lastLevel = e,
            this.initData()
        },
        i.prototype.initData = function() {
            for (var e = 1; 8 >= e; e++) this["grp_level" + e].visible = this.curLevel == e;
            this.img_levelName.source = "kr_panelextra2_mingzi" + this.curLevel + "_png",
            this.txt_levelinfo.text = this.levelInfo[this.curLevel - 1],
            this.bar_value.value = this.curLevel,
            this.showLevel()
        },
        i.prototype.showLevel = function() {
            for (var e = 1; 8 >= e; e++) this["grp_level" + e].visible = this.curLevel == e,
            this["weikaiqi_" + e].visible = this.curLevel < e,
            this["yiwancheng_" + e].visible = this.curLevel > e;
            this.weikaiqi_9.visible = this.curLevel > 8,
            this.img_CurLevel.x = this.imgLevelPosX[this.curLevel - 1] - 38,
            this.img_levelName.source = "kr_panelextra2_mingzi" + this.curLevel + "_png",
            3 != this.curLevel && 7 != this.curLevel ? this.txt_levelinfo.text = this.levelInfo[this.curLevel - 1] : 3 == this.curLevel ? this.txt_levelinfo.textFlow = (new egret.HtmlTextParser).parse("凡尔斯希望可以与你进行一场竞速赛\n帮助雷伊在<font color='#ff0000'>5回合内</font>击败他即可通过试炼") : 7 == this.curLevel && (this.txt_levelinfo.textFlow = (new egret.HtmlTextParser).parse("与三只巨龙进行力量的比拼\n<font color='#ff0000'>全部战胜</font>即可通过试炼")),
            this.bar_value.value = this.curLevel
        },
        i.prototype.childrenCreated = function() {
            var e = this;
            n.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                e.service.backToMainPanel()
            },
            this),
            this.addEvents()
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
            ImageButtonUtil.add(this.btnOnekey,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247752, 1,
                    function() {
                        SocketConnection.sendByQueue(42261, [1, e.curLevel],
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
            ImageButtonUtil.add(this.btnFight_1,
            function() {
                e.isEnterFight = !0,
                FightManager.fightNoMapBoss(7166)
            },
            this),
            ImageButtonUtil.add(this.btnFight_2,
            function() {
                e.isEnterFight = !0,
                FightManager.fightNoMapBoss(7166 + e.levelState)
            },
            this),
            ImageButtonUtil.add(this.btnFight_3,
            function() {
                e.isEnterFight = !0,
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [1195, 0, 0, 0, 0, 0])
            },
            this),
            ImageButtonUtil.add(this.btnFight_4,
            function() {
                e.isEnterFight = !0,
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [406, 0, 0, 0, 0, 0])
            },
            this),
            ImageButtonUtil.add(this.btnFight_5,
            function() {
                e.isEnterFight = !0,
                FightManager.fightNoMapBoss(7170)
            },
            this);
            for (var n = [], i = function(i) {
                ImageButtonUtil.add(t["answer" + i],
                function() {
                    if (n.push(i), 2 == e.curAwIndex) {
                        var t = !0;
                        return 4 != n[0] && (t = !1),
                        3 != n[1] && (t = !1),
                        2 != n[2] && (t = !1),
                        void(t ? (SocketConnection.sendByQueue(42261, [3, 0],
                        function() {
                            e.update()
                        }), n = []) : Alarm.show("这些简单的问题你都不明白，还想成为精灵的王者？回去想想再来找我吧！",
                        function() {
                            e.curAwIndex = 0,
                            n = [],
                            e.showAnswer()
                        },
                        e))
                    }
                    e.curAwIndex++,
                    e.showAnswer()
                },
                t)
            },
            t = this, _ = 1; 4 >= _; _++) i(_);
            for (var a = function(n) {
                ImageButtonUtil.add(r["btnFight_7" + n],
                function() {
                    e.isEnterFight = !0,
                    FightManager.fightNoMapBoss(7170 + n)
                },
                r)
            },
            r = this, _ = 1; 3 >= _; _++) a(_);
            for (var s = function(n) {
                ImageButtonUtil.add(u["level8_fight" + n],
                function() {
                    e.isEnterFight = !0,
                    SocketConnection.sendByQueue(42261, [6, n],
                    function() {
                        FightManager.fightNoMapBoss(7174)
                    })
                },
                u)
            },
            u = this, _ = 1; 5 >= _; _++) s(_)
        },
        i.prototype.showAnswer = function() {
            if (6 == this.curLevel) {
                this.txt_qa.textFlow = (new egret.HtmlTextParser).parser(this.qa[this.curAwIndex]);
                for (var e = 1; 4 >= e; e++) this["txt_answer" + e].text = this.aw[4 * this.curAwIndex + e - 1];
                this.txt_awState.text = this.curAwIndex + "/3"
            }
        },
        i.prototype.update = function() {
            var n = this;
            KTool.getMultiValue([100499, 100500, 100501],
            function(i) {
                switch (n.levelState = i[0], n.levelState) {
                case 0:
                    n.curLevel = 1;
                    break;
                case 1:
                case 2:
                case 3:
                    n.curLevel = 2;
                    break;
                case 4:
                    n.curLevel = 3;
                    break;
                case 5:
                    n.curLevel = 4;
                    break;
                case 6:
                    n.curLevel = 5;
                    break;
                case 7:
                case 8:
                case 9:
                    n.curLevel = 6;
                    break;
                case 10:
                    n.curLevel = 7;
                    break;
                case 11:
                    n.curLevel = 8;
                    break;
                case 12:
                    n.curLevel = 9
                }
                if (console.log("当前关卡:", n.curLevel), n.showLevelsInfo(i[1], i[2]), 9 == n.curLevel) return void Alarm.show("诸王的力量汇聚一体，电魂石逐渐显现！",
                function() {
                    n.service.updateValues().then(function() {
                        n.service.openPanel(e.KingRayConst.Extra1)
                    })
                },
                n);
                if (n.lastLevel != n.curLevel) Alarm.show(n.passStr[n.curLevel - 2],
                function() {
                    n.lastLevel = n.curLevel,
                    n.showLevel()
                },
                n);
                else if (1 == n.curLevel && FightManager.isWin && n.isEnterFight) n.isEnterFight = !1,
                Alarm.show("似乎邪化源头并不在这只精灵身上，我们再次挑战试试看吧！", null, n);
                else if (3 == n.curLevel && FightManager.isWin) {
                    n.isEnterFight = !1;
                    var t = "你很快，但还不够快，需要在<font color='#ff0000'>5回合内</font>战胜凡尔斯";
                    Alarm.show(t, null, n)
                } else 7 == n.curLevel && !FightManager.isWin && n.isEnterFight ? (n.isEnterFight = !1, Alarm.show("愚蠢的精灵，居然妄图挑战龙族的尊严！", null, n)) : 8 == n.curLevel && FightManager.isWin && n.isEnterFight && (n.isEnterFight = !1, Alarm.show("你对空间的把握还不够！再做做尝试，找到本体所在吧！", null, n))
            })
        },
        i.prototype.showLevelsInfo = function(e, n) {
            this.txt_level2.textFlow = [{
                text: this.levelState - 1 + ""
            },
            {
                text: "/3",
                style: {
                    textColor: 15895871
                }
            }];
            var i = 2 == this.levelState || 3 == this.levelState;
            DisplayUtil.setEnabled(this.btnOnekey, !i, i),
            this.bar_level5.value = e,
            this.txt_level5.text = e + "/10000",
            this.showAnswer();
            for (var t = 1; 3 >= t; t++) {
                var _ = 1 == KTool.getBit(n, t);
                this["_re" + t].visible = _,
                this["pass" + t].visible = _,
                DisplayUtil.setEnabled(this["btnFight_7" + t], !_, _)
            }
            for (var t = 1; 5 >= t; t++) {
                var _ = 1 == KTool.getBit(n, t + 4);
                this["over" + t].visible = !_,
                DisplayUtil.setEnabled(this["level8_fight" + t], !_, _)
            }
        },
        i
    } (BasicPanel);
    e.KingRayPanelExtra2 = n,
    __reflect(n.prototype, "kingRay.KingRayPanelExtra2")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.skinName = e.OnekeypopSkin,
            i
        }
        return __extends(i, n),
        i.prototype.initialized = function() {
            var n = this;
            GameInfo.isChecking && (this.btnAdd.visible = !1),
            ImageButtonUtil.add(this.btnClose,
            function() {
                n.hide()
            },
            this),
            ImageButtonUtil.add(this.btnAdd,
            function() {
                n.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                return PetManager.isDefaultPet(3142) ? void PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247506, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [8, 0],
                        function() {
                            Alarm.show("恭喜你王·雷伊超级极品成功！"),
                            n.update()
                        })
                    })
                },
                n) : void Alarm.show("请将王·雷伊放入出战背包首发！",
                function() {
                    n.hide(),
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            this.update()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getBitSet([15097],
            function(n) {
                var i = 1 == n[0];
                DisplayUtil.setEnabled(e.btnBuy, !i, i),
                UserInfoManager.getDiamond(function(n) {
                    e.txt_diamond.text = core.gameUtil.ConvertToTenThousand(n)
                },
                e)
            })
        },
        i
    } (PopView);
    e.OneKeyPop = n,
    __reflect(n.prototype, "kingRay.OneKeyPop")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i(i) {
            var t = n.call(this) || this;
            return t.txtStr = [""],
            t.skinName = e.Panel2popSkin,
            t.data = i,
            t
        }
        return __extends(i, n),
        i.prototype.initialized = function() {
            console.log("当前抽取的ID" + this.data.drawId);
            for (var e = 1; 5 >= e; e++) this["pet" + e].visible = e == this.data.drawId;
            this.txt_progress.text = this.data.value + "/100",
            this.bar_value.value = this.data.value;
            var n = "";
            n = 0 == this.data.curTime ? "+15": 1 == this.data.curTime ? "+8": 2 == this.data.curTime ? "+3": "+1",
            this.txt_value.text = n,
            this.txt_overTime.textFlow = [{
                text: "第",
                style: {
                    textColor: 16765757
                }
            },
            {
                text: this.data.curTime + 1,
                style: {
                    textColor: 9305913
                }
            },
            {
                text: "次挑战该精灵",
                style: {
                    textColor: 16765757
                }
            }],
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var n = this;
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                n.hide(),
                SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [407, 0, 0, 0, 0, 0])
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                n.hide()
            },
            this),
            ImageButtonUtil.add(this.btnFast,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(247789, 1,
                    function() {
                        SocketConnection.sendByQueue(e.KingRayConst.kingRay_CMD, [3, 0],
                        function() {
                            n.hide(),
                            EventManager.dispatchEventWith("panel1_fastBuy")
                        })
                    })
                },
                n)
            },
            this)
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.Panel1Pop = n,
    __reflect(n.prototype, "kingRay.Panel1Pop")
} (kingRay || (kingRay = {}));
var __reflect = this && this.__reflect ||
function(e, n, i) {
    e.__class__ = n,
    i ? i.push(n) : i = [n],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
},
kingRay; !
function(e) {
    var n = function(n) {
        function i(i) {
            var t = n.call(this) || this;
            return t.id = 0,
            t.typeName = ["水", "冰", "飞行", "神秘", "火", "光", "龙", "次元"],
            t.skinName = e.Panel3popSkin,
            t.id = i,
            t
        }
        return __extends(i, n),
        i.prototype.initialized = function() {
            for (var e = this,
            n = 1; 8 >= n; n++) this["a_" + n].visible = n == this.id;
            this.txt_name.text = this.typeName[this.id - 1] + "系精灵王",
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
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                FightManager.fightNoMapBoss(7199 + e.id),
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e.hide()
            },
            this)
        },
        i.prototype.destroy = function() {
            n.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.Panel3Pop = n,
    __reflect(n.prototype, "kingRay.Panel3Pop")
} (kingRay || (kingRay = {})),
window.kingRay = window.kingRay || {};
var __extends = this && this.__extends ||
function(e, n) {
    function i() {
        this.constructor = e
    }
    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
    i.prototype = n.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.kingRay.MainpanelSkin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "btn4", "btn3", "hasDone4", "hasDone3", "btn2", "hasDone2", "btn1", "hasDone1", "hasPet", "btnDiscount", "btnSuper", "btnUp", "btnInfo", "btnCollect"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_mainpanel_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -5.5,
        e.width = 1110,
        e.y = 0,
        e.elementsContent = [this.btn4_i(), this.btn3_i(), this.hasDone4_i(), this.hasDone3_i(), this.btn2_i(), this.hasDone2_i(), this.btn1_i(), this.hasDone1_i(), this._Image1_i(), this._Image2_i(), this.hasPet_i(), this.btnDiscount_i(), this.btnSuper_i(), this.btnUp_i(), this.btnInfo_i(), this.btnCollect_i()],
        e
    },
    i.btn4_i = function() {
        var e = new eui.Image;
        return this.btn4 = e,
        e.source = "kr_mainpanel_btn4_png",
        e.x = 666,
        e.y = 437,
        e
    },
    i.btn3_i = function() {
        var e = new eui.Image;
        return this.btn3 = e,
        e.source = "kr_mainpanel_btn3_png",
        e.x = 714,
        e.y = 337,
        e
    },
    i.hasDone4_i = function() {
        var e = new eui.Image;
        return this.hasDone4 = e,
        e.source = "kr_mainpanel_yiwancheng_png",
        e.x = 723,
        e.y = 458,
        e
    },
    i.hasDone3_i = function() {
        var e = new eui.Image;
        return this.hasDone3 = e,
        e.source = "kr_mainpanel_yiwancheng_png",
        e.x = 771,
        e.y = 358,
        e
    },
    i.btn2_i = function() {
        var e = new eui.Image;
        return this.btn2 = e,
        e.source = "kr_mainpanel_btn2_png",
        e.x = 762,
        e.y = 236,
        e
    },
    i.hasDone2_i = function() {
        var e = new eui.Image;
        return this.hasDone2 = e,
        e.source = "kr_mainpanel_yiwancheng_png",
        e.x = 819,
        e.y = 257,
        e
    },
    i.btn1_i = function() {
        var e = new eui.Image;
        return this.btn1 = e,
        e.source = "kr_mainpanel_btn1_png",
        e.x = 810,
        e.y = 136,
        e
    },
    i.hasDone1_i = function() {
        var e = new eui.Image;
        return this.hasDone1 = e,
        e.source = "kr_mainpanel_yiwancheng_png",
        e.x = 867,
        e.y = 157,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_mainpanel_title_png",
        e.x = 234,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_mainpanel_zsch_png",
        e.x = 0,
        e.y = 315,
        e
    },
    i.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.source = "kr_mainpanel_yihuode_png",
        e.x = 193,
        e.y = 550,
        e
    },
    i.btnDiscount_i = function() {
        var e = new eui.Image;
        return this.btnDiscount = e,
        e.source = "kr_mainpanel_btndiscount_png",
        e.visible = !0,
        e.x = 1005,
        e.y = 543,
        e
    },
    i.btnSuper_i = function() {
        var e = new eui.Image;
        return this.btnSuper = e,
        e.source = "kr_mainpanel_btnsuper_png",
        e.visible = !0,
        e.x = 1005,
        e.y = 543,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "kr_mainpanel_btnup_png",
        e.visible = !0,
        e.x = 916,
        e.y = 543,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "kr_mainpanel_btninfo_png",
        e.visible = !0,
        e.x = 38,
        e.y = 552,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.source = "kr_mainpanel_btncollect_png",
        e.x = 110,
        e.y = 552,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeypopSkin.exml"] = window.kingRay.OnekeypopSkin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["btnAdd", "txt_diamond", "btnBuy", "btnClose", "oneKeyPop"],
        this.height = 608,
        this.width = 985,
        this.elementsContent = [this.oneKeyPop_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.oneKeyPop_i = function() {
        var e = new eui.Group;
        return this.oneKeyPop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnAdd_i(), this._Label1_i(), this.txt_diamond_i(), this._Image2_i(), this.btnBuy_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_onekeypop_bg_png",
        e.x = 155,
        e.y = 0,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kr_onekeypop_btnadd_png",
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
        return e.source = "kr_onekeypop_zu_1_png",
        e.x = 0,
        e.y = 105,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "kr_onekeypop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "kr_onekeypop_btnclose_png",
        e.x = 951,
        e.y = 11,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel1Skin.exml"] = window.kingRay.Panel1Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "btnTiaozhan", "bar_value", "txt_progress", "bar", "btnOnekey"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(n, e);
    var i = function(e) {
        function n() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(n, e);
        var i = n.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kr_panel1_jindu_png",
            e.visible = !0,
            e
        },
        n
    } (eui.Skin),
    t = n.prototype;
    return t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -9,
        e.width = 1110,
        e.y = 44,
        e.elementsContent = [this._Image1_i(), this.btnTiaozhan_i(), this._Image2_i(), this.bar_i(), this._Image6_i(), this._Image7_i(), this.btnOnekey_i()],
        e
    },
    t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_youlihui_png",
        e.x = 670,
        e.y = 8,
        e
    },
    t.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "kr_panel1_btntiaozhan_png",
        e.x = 814,
        e.y = 489,
        e
    },
    t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_zuolihui_png",
        e.x = 0,
        e.y = 8,
        e
    },
    t.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 76,
        e.y = 463,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this.bar_value_i(), this.txt_progress_i()],
        e
    },
    t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_zu_1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_jindu_kb_png",
        e.visible = !0,
        e.x = 66,
        e.y = 48,
        e
    },
    t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_xz_4_kb_png",
        e.visible = !0,
        e.x = 134,
        e.y = 26,
        e
    },
    t.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 100,
        e.value = 0,
        e.visible = !0,
        e.x = 66,
        e.y = 48,
        e.skinName = i,
        e
    },
    t.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.stroke = 1,
        e.strokeColor = 16771990,
        e.text = "XXX/100",
        e.textColor = 0,
        e.x = 193,
        e.y = 45,
        e
    },
    t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_vs_png",
        e.x = 465,
        e.y = 167,
        e
    },
    t._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_wenan_png",
        e.x = 201,
        e.y = 0,
        e
    },
    t.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panel1_btnonekey_png",
        e.x = 1003,
        e.y = 493,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2popSkin.exml"] = window.kingRay.Panel2popSkin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "pet1", "pet2", "pet3", "pet5", "pet4", "pets", "btnBack", "btnTiaozhan", "btnFast", "bar_value", "txt_progress", "bar", "txt_value", "value", "txt_overTime", "pop"],
        this.height = 480,
        this.width = 900,
        this.elementsContent = [this.pop_i()]
    }
    __extends(n, e);
    var i = function(e) {
        function n() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(n, e);
        var i = n.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kr_panel1_jindu_png",
            e.visible = !0,
            e
        },
        n
    } (eui.Skin),
    t = n.prototype;
    return t.pop_i = function() {
        var e = new eui.Group;
        return this.pop = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.pets_i(), this.btnBack_i(), this.btnTiaozhan_i(), this.btnFast_i(), this._Image1_i(), this.value_i(), this.txt_overTime_i(), this._Image6_i()],
        e
    },
    t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel2pop_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    t.pets_i = function() {
        var e = new eui.Group;
        return this.pets = e,
        e.x = 1,
        e.y = 44,
        e.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet5_i(), this.pet4_i()],
        e
    },
    t.pet1_i = function() {
        var e = new eui.Image;
        return this.pet1 = e,
        e.height = 288,
        e.source = "kr_panel2pop_455_png",
        e.visible = !1,
        e.width = 391,
        e.x = 0,
        e.y = 58,
        e
    },
    t.pet2_i = function() {
        var e = new eui.Image;
        return this.pet2 = e,
        e.height = 330,
        e.source = "kr_panel2pop_21_png",
        e.visible = !1,
        e.width = 288,
        e.x = 67,
        e.y = 23,
        e
    },
    t.pet3_i = function() {
        var e = new eui.Image;
        return this.pet3 = e,
        e.height = 305,
        e.source = "kr_panel2pop_147_png",
        e.visible = !1,
        e.width = 233,
        e.x = 124,
        e.y = 45,
        e
    },
    t.pet5_i = function() {
        var e = new eui.Image;
        return this.pet5 = e,
        e.height = 358,
        e.source = "kr_panel2pop_709_png",
        e.visible = !1,
        e.width = 230,
        e.x = 70,
        e.y = 0,
        e
    },
    t.pet4_i = function() {
        var e = new eui.Image;
        return this.pet4 = e,
        e.height = 286,
        e.source = "kr_panel2pop_15_png",
        e.visible = !1,
        e.width = 266,
        e.x = 88,
        e.y = 72,
        e
    },
    t.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "kr_panel2pop_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    t.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "kr_panel2pop_btntiaozhan_png",
        e.x = 712,
        e.y = 393,
        e
    },
    t.btnFast_i = function() {
        var e = new eui.Image;
        return this.btnFast = e,
        e.source = "kr_panel2pop_btnyijian_png",
        e.x = 448,
        e.y = 393,
        e
    },
    t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2pop_cishubg_png",
        e.x = 391,
        e.y = 271,
        e
    },
    t.value_i = function() {
        var e = new eui.Group;
        return this.value = e,
        e.x = 394,
        e.y = 230,
        e.elementsContent = [this.bar_i(), this.txt_value_i(), this._Image5_i()],
        e
    },
    t.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 0,
        e.y = 45,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.bar_value_i(), this.txt_progress_i()],
        e
    },
    t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_zu_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_jindu_kb_png",
        e.visible = !0,
        e.x = 66,
        e.y = 48,
        e
    },
    t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_xz_4_kb_png",
        e.visible = !0,
        e.x = 134,
        e.y = 26,
        e
    },
    t.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 100,
        e.value = 0,
        e.visible = !0,
        e.x = 66,
        e.y = 48,
        e.skinName = i,
        e
    },
    t.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.stroke = 2.5,
        e.strokeColor = 16771990,
        e.text = "XXX/100",
        e.textColor = 0,
        e.x = 193,
        e.y = 45,
        e
    },
    t.txt_value_i = function() {
        var e = new eui.Label;
        return this.txt_value = e,
        e.fontFamily = "MFShangHei",
        e.size = 36,
        e.text = "+XX",
        e.textColor = 9305913,
        e.x = 411,
        e.y = 84,
        e
    },
    t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2pop_zshd_png",
        e.x = 193,
        e.y = 0,
        e
    },
    t.txt_overTime_i = function() {
        var e = new eui.Label;
        return this.txt_overTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "第X次挑战该精灵",
        e.textColor = 16765757,
        e.x = 551,
        e.y = 135,
        e
    },
    t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2pop_zu_2_png",
        e.x = 556,
        e.y = 64,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel2Skin.exml"] = window.kingRay.Panel2Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "leftState1", "btnFastCure", "leftState2", "btnTiaozhan_1", "dif1", "btnTiaozhan_2", "dif2", "btnTiaozhan_3", "dif3", "btnTiaozhan_4", "dif4", "txt_leftTime", "rightState1", "btnFight", "rightState2", "bar_value", "txt_progress", "btnYijian", "bar", "img2", "btnOnekey", "btnBag", "btnCure"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(n, e);
    var i = function(e) {
        function n() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(n, e);
        var i = n.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kr_panel2_jindu_png",
            e.visible = !0,
            e
        },
        n
    } (eui.Skin),
    t = n.prototype;
    return t.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel1_bg_jpg",
        e.percentWidth = 100,
        e.y = 0,
        e
    },
    t._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 27,
        e.y = 45,
        e.elementsContent = [this._Image1_i(), this.leftState1_i(), this.leftState2_i(), this.rightState1_i(), this.rightState2_i(), this.bar_i(), this.img2_i(), this._Image14_i(), this.btnOnekey_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    t._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_leftbg_png",
        e.x = 110,
        e.y = 7,
        e
    },
    t.leftState1_i = function() {
        var e = new eui.Group;
        return this.leftState1 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 7,
        e.elementsContent = [this._Image2_i()],
        e
    },
    t._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_3142_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.leftState2_i = function() {
        var e = new eui.Group;
        return this.leftState2 = e,
        e.visible = !0,
        e.x = 202,
        e.y = 157,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnFastCure_i()],
        e
    },
    t._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_70_png",
        e.x = 0,
        e.y = 10,
        e
    },
    t._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_xz_1_png",
        e.x = 135,
        e.y = 0,
        e
    },
    t._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_z_kaobei_png",
        e.x = 146,
        e.y = 11,
        e
    },
    t.btnFastCure_i = function() {
        var e = new eui.Image;
        return this.btnFastCure = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kr_panel2_kshf_png",
        e.visible = !0,
        e.x = -68.00000000000001,
        e.y = 265,
        e
    },
    t.rightState1_i = function() {
        var e = new eui.Group;
        return this.rightState1 = e,
        e.x = 573,
        e.y = 100,
        e.elementsContent = [this.dif1_i(), this.dif2_i(), this.dif3_i(), this.dif4_i(), this.txt_leftTime_i()],
        e
    },
    t.dif1_i = function() {
        var e = new eui.Group;
        return this.dif1 = e,
        e.x = 0,
        e.y = 273,
        e.elementsContent = [this._Image6_i(), this.btnTiaozhan_1_i()],
        e
    },
    t._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_zu_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.btnTiaozhan_1_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_1 = e,
        e.source = "kr_panel2_btntiaozhan_png",
        e.x = 361,
        e.y = 16,
        e
    },
    t.dif2_i = function() {
        var e = new eui.Group;
        return this.dif2 = e,
        e.x = 0,
        e.y = 180,
        e.elementsContent = [this._Image7_i(), this.btnTiaozhan_2_i()],
        e
    },
    t._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_zu_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.btnTiaozhan_2_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_2 = e,
        e.source = "kr_panel2_btntiaozhan_png",
        e.x = 361,
        e.y = 16,
        e
    },
    t.dif3_i = function() {
        var e = new eui.Group;
        return this.dif3 = e,
        e.x = 0,
        e.y = 90,
        e.elementsContent = [this._Image8_i(), this.btnTiaozhan_3_i()],
        e
    },
    t._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_zu_4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.btnTiaozhan_3_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_3 = e,
        e.source = "kr_panel2_btntiaozhan_png",
        e.x = 361,
        e.y = 16,
        e
    },
    t.dif4_i = function() {
        var e = new eui.Group;
        return this.dif4 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.btnTiaozhan_4_i()],
        e
    },
    t._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_zu_5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t.btnTiaozhan_4_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan_4 = e,
        e.source = "kr_panel2_btntiaozhan_png",
        e.x = 361,
        e.y = 16,
        e
    },
    t.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "再进行X场战斗进入疲惫状态",
        e.textColor = 16765757,
        e.x = 116,
        e.y = 368,
        e
    },
    t.rightState2_i = function() {
        var e = new eui.Group;
        return this.rightState2 = e,
        e.visible = !0,
        e.x = 682,
        e.y = 7,
        e.elementsContent = [this._Image10_i(), this._Image11_i(), this.btnFight_i()],
        e
    },
    t._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_leftbg_png",
        e.x = 17,
        e.y = 0,
        e
    },
    t._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_3133_png",
        e.x = 0,
        e.y = 78,
        e
    },
    t.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "kr_panel2_btntiaozhan_png",
        e.x = 116,
        e.y = 428,
        e
    },
    t.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.x = 201,
        e.y = 524,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this.bar_value_i(), this.txt_progress_i(), this.btnYijian_i()],
        e
    },
    t._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_zu_1_png",
        e.x = 0,
        e.y = 5,
        e
    },
    t._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_yjjx_17_png",
        e.x = 127,
        e.y = 6,
        e
    },
    t.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 90,
        e.value = 0,
        e.visible = !0,
        e.x = 148,
        e.y = 19,
        e.skinName = i,
        e
    },
    t.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.stroke = 2.5,
        e.strokeColor = 16764987,
        e.text = "XX/90",
        e.textColor = 0,
        e.x = 319,
        e.y = 8,
        e
    },
    t.btnYijian_i = function() {
        var e = new eui.Image;
        return this.btnYijian = e,
        e.source = "kr_panel2_btnyijian_png",
        e.visible = !0,
        e.x = 597,
        e.y = 0,
        e
    },
    t.img2_i = function() {
        var e = new eui.Image;
        return this.img2 = e,
        e.source = "kr_panel2_jindu2_png",
        e.visible = !1,
        e.x = 357,
        e.y = 530,
        e
    },
    t._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel2_wa_kb_png",
        e.x = 228,
        e.y = 0,
        e
    },
    t.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panel2_btnonekey_png",
        e.x = 1003,
        e.y = 492,
        e
    },
    t.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kr_panel2_jlbb_png",
        e.x = 13,
        e.y = 334,
        e
    },
    t.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kr_panel2_jlhf_png",
        e.x = 13,
        e.y = 424,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3popSkin.exml"] = window.kingRay.Panel3popSkin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "btnBack", "btnTiaozhan", "a_5", "a_6", "a_7", "a_8", "a_1", "a_2", "a_3", "a_4", "txt_name", "btnBag", "btnCure"],
        this.height = 480,
        this.width = 900,
        this.elementsContent = [this.bg_i(), this.btnBack_i(), this._Image1_i(), this.btnTiaozhan_i(), this.a_5_i(), this.a_6_i(), this.a_7_i(), this.a_8_i(), this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.txt_name_i(), this._Label1_i(), this._Image2_i(), this.btnBag_i(), this.btnCure_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel2pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "kr_panel3pop_btnback_png",
        e.x = 853,
        e.y = 7,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3pop_daoju_png",
        e.x = 515,
        e.y = 198,
        e
    },
    i.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "kr_panel3pop_btntiaozhan_png",
        e.x = 620,
        e.y = 392,
        e
    },
    i.a_5_i = function() {
        var e = new eui.Image;
        return this.a_5 = e,
        e.source = "kr_panel3pop_8_png",
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_6_i = function() {
        var e = new eui.Image;
        return this.a_6 = e,
        e.source = "kr_panel3pop_7_png",
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_7_i = function() {
        var e = new eui.Image;
        return this.a_7 = e,
        e.source = "kr_panel3pop_6_png",
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_8_i = function() {
        var e = new eui.Image;
        return this.a_8 = e,
        e.source = "kr_panel3pop_5_png",
        e.visible = !0,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_1_i = function() {
        var e = new eui.Image;
        return this.a_1 = e,
        e.source = "kr_panel3pop_4_png",
        e.visible = !1,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_2_i = function() {
        var e = new eui.Image;
        return this.a_2 = e,
        e.source = "kr_panel3pop_3_png",
        e.visible = !1,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_3_i = function() {
        var e = new eui.Image;
        return this.a_3 = e,
        e.source = "kr_panel3pop_2_png",
        e.visible = !1,
        e.x = 9,
        e.y = 8,
        e
    },
    i.a_4_i = function() {
        var e = new eui.Image;
        return this.a_4 = e,
        e.source = "kr_panel3pop_1_png",
        e.visible = !1,
        e.x = 9,
        e.y = 8,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 40,
        e.stroke = 1,
        e.strokeColor = 12806151,
        e.text = "XXX系精灵王",
        e.textColor = 16765757,
        e.x = 559,
        e.y = 81,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "战胜奖励",
        e.textColor = 16765757,
        e.x = 641,
        e.y = 165,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3pop_rad_png",
        e.x = 8,
        e.y = 244,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kr_panel2_jlbb_png",
        e.x = 27,
        e.y = 292,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kr_panel2_jlhf_png",
        e.x = 27,
        e.y = 382,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel3Skin.exml"] = window.kingRay.Panel3Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "btnOnekey", "btnDone", "txt_itemNum", "btnAdd", "center", "hasDone1", "over1", "pet1", "hasDone2", "over2", "pet2", "hasDone3", "over3", "pet3", "hasDone4", "over4", "pet4", "hasDone5", "over5", "pet5", "hasDone6", "over6", "pet6", "hasDone7", "over7", "pet7", "hasDone8", "over8", "pet8", "wenan"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 7,
        e.width = 1140,
        e.y = 45,
        e.elementsContent = [this.btnOnekey_i(), this.btnDone_i(), this.center_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i(), this.pet6_i(), this.pet7_i(), this.pet8_i(), this.wenan_i()],
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panel3_btnonekey_png",
        e.x = 1e3,
        e.y = 492,
        e
    },
    i.btnDone_i = function() {
        var e = new eui.Image;
        return this.btnDone = e,
        e.source = "kr_panel3_btntiaozhan_png",
        e.x = 471,
        e.y = 504,
        e
    },
    i.center_i = function() {
        var e = new eui.Group;
        return this.center = e,
        e.visible = !0,
        e.x = 271,
        e.y = 39,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_itemNum_i(), this.btnAdd_i(), this._Image5_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_3142_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_xz_1_png",
        e.x = 216,
        e.y = 350,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_jx_24_kb_2_png",
        e.x = 181,
        e.y = 370,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_cishubg_png",
        e.x = 167,
        e.y = 418,
        e
    },
    i.txt_itemNum_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "XX/20",
        e.textColor = 16773260,
        e.x = 270,
        e.y = 428,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kr_panel3_btnadd_png",
        e.x = 333,
        e.y = 424,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_tuceng_27_png",
        e.touchEnabled = !1,
        e.x = 240,
        e.y = 338,
        e
    },
    i.pet1_i = function() {
        var e = new eui.Group;
        return this.pet1 = e,
        e.alpha = 1,
        e.x = 0,
        e.y = 67,
        e.elementsContent = [this._Image6_i(), this.hasDone1_i(), this._Rect1_i(), this.over1_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_shui3105_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone1_i = function() {
        var e = new eui.Image;
        return this.hasDone1 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i._Rect1_i = function() {
        var e = new eui.Rect;
        return e.fillAlpha = .6,
        e.height = 102,
        e.visible = !1,
        e.width = 309,
        e.x = 0,
        e.y = 0,
        e
    },
    i.over1_i = function() {
        var e = new eui.Image;
        return this.over1 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz1_png",
        e.width = 124,
        e.x = 18,
        e.y = 73,
        e
    },
    i.pet2_i = function() {
        var e = new eui.Group;
        return this.pet2 = e,
        e.visible = !0,
        e.x = 38,
        e.y = 178,
        e.elementsContent = [this._Image7_i(), this.hasDone2_i(), this.over2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_bx2844_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone2_i = function() {
        var e = new eui.Image;
        return this.hasDone2 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over2_i = function() {
        var e = new eui.Image;
        return this.over2 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz1_png",
        e.width = 124,
        e.x = 18,
        e.y = 73,
        e
    },
    i.pet3_i = function() {
        var e = new eui.Group;
        return this.pet3 = e,
        e.visible = !0,
        e.x = 65,
        e.y = 293,
        e.elementsContent = [this._Image8_i(), this.hasDone3_i(), this.over3_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_fhj2988_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone3_i = function() {
        var e = new eui.Image;
        return this.hasDone3 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over3_i = function() {
        var e = new eui.Image;
        return this.over3 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz1_png",
        e.width = 124,
        e.x = 18,
        e.y = 73,
        e
    },
    i.pet4_i = function() {
        var e = new eui.Group;
        return this.pet4 = e,
        e.visible = !0,
        e.x = 92,
        e.y = 406,
        e.elementsContent = [this._Image9_i(), this.hasDone4_i(), this.over4_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_sbj3082_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone4_i = function() {
        var e = new eui.Image;
        return this.hasDone4 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over4_i = function() {
        var e = new eui.Image;
        return this.over4 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz1_png",
        e.width = 124,
        e.x = 18,
        e.y = 73,
        e
    },
    i.pet5_i = function() {
        var e = new eui.Group;
        return this.pet5 = e,
        e.visible = !0,
        e.x = 814,
        e.y = 67,
        e.elementsContent = [this._Image10_i(), this.hasDone5_i(), this.over5_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_huo2739_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone5_i = function() {
        var e = new eui.Image;
        return this.hasDone5 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over5_i = function() {
        var e = new eui.Image;
        return this.over5 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz2_png",
        e.width = 124,
        e.x = 169,
        e.y = 73,
        e
    },
    i.pet6_i = function() {
        var e = new eui.Group;
        return this.pet6 = e,
        e.visible = !0,
        e.x = 782,
        e.y = 180,
        e.elementsContent = [this._Image11_i(), this.hasDone6_i(), this.over6_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_guang2787_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone6_i = function() {
        var e = new eui.Image;
        return this.hasDone6 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over6_i = function() {
        var e = new eui.Image;
        return this.over6 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz2_png",
        e.width = 124,
        e.x = 169,
        e.y = 73,
        e
    },
    i.pet7_i = function() {
        var e = new eui.Group;
        return this.pet7 = e,
        e.visible = !0,
        e.x = 751,
        e.y = 293,
        e.elementsContent = [this._Image12_i(), this.hasDone7_i(), this.over7_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_long3036_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone7_i = function() {
        var e = new eui.Image;
        return this.hasDone7 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over7_i = function() {
        var e = new eui.Image;
        return this.over7 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz2_png",
        e.width = 124,
        e.x = 169,
        e.y = 73,
        e
    },
    i.pet8_i = function() {
        var e = new eui.Group;
        return this.pet8 = e,
        e.visible = !0,
        e.x = 719,
        e.y = 406,
        e.elementsContent = [this._Image13_i(), this.hasDone8_i(), this.over8_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel3_cyj2959_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasDone8_i = function() {
        var e = new eui.Image;
        return this.hasDone8 = e,
        e.source = "kr_panel3_yiwancheng_png",
        e.x = 72,
        e.y = 32,
        e
    },
    i.over8_i = function() {
        var e = new eui.Image;
        return this.over8 = e,
        e.height = 17,
        e.source = "kr_panel3__qwtz2_png",
        e.width = 124,
        e.x = 169,
        e.y = 73,
        e
    },
    i.wenan_i = function() {
        var e = new eui.Image;
        return this.wenan = e,
        e.source = "kr_panel3_wenan_png",
        e.x = 250,
        e.y = 0,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel4Skin.exml"] = window.kingRay.Panel4Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg_2", "txt_num5", "txt_num1", "txt_num2", "txt_num3", "txt_num4", "btnGetStone", "icons", "btnJihuo", "txt_leftTime", "btnAdd", "btntiaozhan", "jian", "btnDuihuan", "txt_num0", "exchange", "btnOnekey", "btnBag", "btnCure", "grp_contens"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grp_contens_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_contens_i = function() {
        var e = new eui.Group;
        return this.grp_contens = e,
        e.horizontalCenter = -6,
        e.width = 1090,
        e.y = 0,
        e.elementsContent = [this.bg_2_i(), this._Image6_i(), this.icons_i(), this.btnJihuo_i(), this.jian_i(), this.exchange_i(), this.btnOnekey_i(), this._Image27_i(), this.btnBag_i(), this.btnCure_i()],
        e
    },
    i.bg_2_i = function() {
        var e = new eui.Group;
        return this.bg_2 = e,
        e.x = 36,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "kr_panel4_yjjx_16_png",
        e.visible = !0,
        e.width = 230,
        e.x = 755,
        e.y = 1,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1_png",
        e.visible = !0,
        e.x = 750,
        e.y = 205,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 639,
        e.source = "kr_panel4_yjjx_16_png",
        e.visible = !0,
        e.width = 230,
        e.x = 45,
        e.y = 1,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_fazhen_png",
        e.visible = !0,
        e.x = 313,
        e.y = 110,
        e
    },
    i.icons_i = function() {
        var e = new eui.Group;
        return this.icons = e,
        e.visible = !0,
        e.x = 340,
        e.y = 161,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this.btnGetStone_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709646_png",
        e.x = 342,
        e.y = 117,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709645_png",
        e.x = 279,
        e.y = 305,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709644_png",
        e.x = 83,
        e.y = 305,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709643_png",
        e.x = 20,
        e.y = 117,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709647_png",
        e.x = 181,
        e.y = 0,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709601_png",
        e.x = 185,
        e.y = 150,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 161,
        e.y = 63,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 180,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 62,
        e.y = 373,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 257,
        e.y = 373,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 161,
        e.y = 63,
        e.elementsContent = [this._Image17_i(), this.txt_num5_i()],
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num5_i = function() {
        var e = new eui.Label;
        return this.txt_num5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 180,
        e.elementsContent = [this._Image18_i(), this.txt_num1_i()],
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num1_i = function() {
        var e = new eui.Label;
        return this.txt_num1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 62,
        e.y = 373,
        e.elementsContent = [this._Image19_i(), this.txt_num2_i()],
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num2_i = function() {
        var e = new eui.Label;
        return this.txt_num2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 257,
        e.y = 373,
        e.elementsContent = [this._Image20_i(), this.txt_num3_i()],
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num3_i = function() {
        var e = new eui.Label;
        return this.txt_num3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 320,
        e.y = 181,
        e.elementsContent = [this._Image21_i(), this.txt_num4_i()],
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num4_i = function() {
        var e = new eui.Label;
        return this.txt_num4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGetStone_i = function() {
        var e = new eui.Image;
        return this.btnGetStone = e,
        e.source = "kr_panel4_btnhuode_png",
        e.x = 144,
        e.y = 238,
        e
    },
    i.btnJihuo_i = function() {
        var e = new eui.Image;
        return this.btnJihuo = e,
        e.source = "kr_panel4_btnjihuo_png",
        e.visible = !0,
        e.x = 459,
        e.y = 378,
        e
    },
    i.jian_i = function() {
        var e = new eui.Group;
        return this.jian = e,
        e.x = 87,
        e.y = 140,
        e.elementsContent = [this._Image22_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnAdd_i(), this.btntiaozhan_i()],
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_shengjian_png",
        e.x = 35,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "今日剩余次数：",
        e.textColor = 16767958,
        e.x = 0,
        e.y = 354,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "5次",
        e.textColor = 16773260,
        e.x = 131,
        e.y = 353,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "kr_panel4_btnadd_png",
        e.x = 181,
        e.y = 349,
        e
    },
    i.btntiaozhan_i = function() {
        var e = new eui.Image;
        return this.btntiaozhan = e,
        e.source = "kr_panel4_btntiaozhan_png",
        e.x = 39,
        e.y = 259,
        e
    },
    i.exchange_i = function() {
        var e = new eui.Group;
        return this.exchange = e,
        e.x = 841,
        e.y = 146,
        e.elementsContent = [this._Image23_i(), this._Image24_i(), this._Image25_i(), this.btnDuihuan_i(), this._Group6_i()],
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_dbx_1_kb_2_png",
        e.x = 17,
        e.y = 0,
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_dljy_png",
        e.x = 30,
        e.y = 174,
        e
    },
    i._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_1709642_png",
        e.x = 39,
        e.y = 15,
        e
    },
    i.btnDuihuan_i = function() {
        var e = new eui.Image;
        return this.btnDuihuan = e,
        e.source = "kr_panel4_btnduihuan_png",
        e.x = 0,
        e.y = 253,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 17,
        e.y = 78,
        e.elementsContent = [this._Image26_i(), this.txt_num0_i()],
        e
    },
    i._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_img1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_num0_i = function() {
        var e = new eui.Label;
        return this.txt_num0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "Xx / 5",
        e.textAlign = "center",
        e.textColor = 16769453,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panel4_btnonekey_png",
        e.x = 990,
        e.y = 537,
        e
    },
    i._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panel4_wenan_png",
        e.x = 312,
        e.y = 44,
        e
    },
    i.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kr_panel4_jlbb_png",
        e.x = 0,
        e.y = 379,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kr_panel4_jlhf_png",
        e.x = 0,
        e.y = 469,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panel5Skin.exml"] = window.kingRay.Panel5Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg", "di", "awardLine_0", "awardLine_1", "line_0", "line_1", "line_2", "line_3", "line_4", "line_5", "line_6", "line_13", "line_12", "line_11", "line_10", "line_9", "line_8", "line_7", "line_14", "line_15", "line_16", "line_17", "line_18", "line_19", "line_20", "rect_0", "btnSign_0", "day_0", "flag_signed_0", "rect_1", "btnSign_1", "day_1", "flag_signed_1", "rect_2", "btnSign_2", "day_2", "flag_signed_2", "rect_3", "btnSign_3", "day_3", "flag_signed_3", "rect_4", "btnSign_4", "day_4", "flag_signed_4", "rect_5", "btnSign_5", "day_5", "flag_signed_5", "rect_6", "btnSign_6", "day_6", "flag_signed_6", "awardRect0", "btnKe", "btnFast_0", "btnGet_0", "flag_got_0", "grp_big1", "rect_7", "btnSign_7", "day_7", "flag_signed_7", "rect_8", "btnSign_8", "day_8", "flag_signed_8", "rect_9", "btnSign_9", "day_9", "flag_signed_9", "rect_10", "btnSign_10", "day_10", "flag_signed_10", "rect_11", "btnSign_11", "day_11", "flag_signed_11", "rect_12", "btnSign_12", "day_12", "flag_signed_12", "rect_13", "btnSign_13", "day_13", "flag_signed_13", "awardRect1", "btnTe", "btnFast_1", "btnGet_1", "flag_got_1", "grp_big2", "rect_14", "btnSign_14", "day_14", "flag_signed_14", "rect_15", "btnSign_15", "day_15", "flag_signed_15", "rect_16", "btnSign_16", "day_16", "flag_signed_16", "rect_17", "btnSign_17", "day_17", "flag_signed_17", "rect_18", "btnSign_18", "day_18", "flag_signed_18", "rect_19", "btnSign_19", "day_19", "flag_signed_19", "rect_20", "btnSign_20", "day_20", "flag_signed_20", "awardRect2", "btnWu", "btnFast_2", "btnGet_2", "flag_got_2", "grp_big3"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group25_i(), this._Image1_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "kr_panel1_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group25_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 105,
        e.elementsContent = [this.di_i(), this.awardLine_0_i(), this.awardLine_1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i(), this.grp_big1_i(), this._Group11_i(), this._Group12_i(), this._Group13_i(), this._Group14_i(), this._Group15_i(), this._Group16_i(), this._Group17_i(), this.grp_big2_i(), this._Group18_i(), this._Group19_i(), this._Group20_i(), this._Group21_i(), this._Group22_i(), this._Group23_i(), this._Group24_i(), this.grp_big3_i()],
        e
    },
    i.di_i = function() {
        var e = new eui.Image;
        return this.di = e,
        e.source = "kr_panel5_di_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.awardLine_0_i = function() {
        var e = new eui.Image;
        return this.awardLine_0 = e,
        e.source = "kr_panel5_shu_png",
        e.visible = !1,
        e.x = 959,
        e.y = 110,
        e
    },
    i.awardLine_1_i = function() {
        var e = new eui.Image;
        return this.awardLine_1 = e,
        e.source = "kr_panel5_shu_png",
        e.visible = !1,
        e.x = 58,
        e.y = 280,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 92,
        e.y = 65,
        e.elementsContent = [this.line_0_i(), this.line_1_i(), this.line_2_i(), this.line_3_i(), this.line_4_i(), this.line_5_i(), this.line_6_i()],
        e
    },
    i.line_0_i = function() {
        var e = new eui.Image;
        return this.line_0 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.line_1_i = function() {
        var e = new eui.Image;
        return this.line_1 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 126,
        e.y = 0,
        e
    },
    i.line_2_i = function() {
        var e = new eui.Image;
        return this.line_2 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 252,
        e.y = 0,
        e
    },
    i.line_3_i = function() {
        var e = new eui.Image;
        return this.line_3 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 378,
        e.y = 0,
        e
    },
    i.line_4_i = function() {
        var e = new eui.Image;
        return this.line_4 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 504,
        e.y = 0,
        e
    },
    i.line_5_i = function() {
        var e = new eui.Image;
        return this.line_5 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 630,
        e.y = 0,
        e
    },
    i.line_6_i = function() {
        var e = new eui.Image;
        return this.line_6 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 756,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 110,
        e.y = 225,
        e.elementsContent = [this.line_13_i(), this.line_12_i(), this.line_11_i(), this.line_10_i(), this.line_9_i(), this.line_8_i(), this.line_7_i()],
        e
    },
    i.line_13_i = function() {
        var e = new eui.Image;
        return this.line_13 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !0,
        e.x = 65,
        e.y = 0,
        e
    },
    i.line_12_i = function() {
        var e = new eui.Image;
        return this.line_12 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 191,
        e.y = 0,
        e
    },
    i.line_11_i = function() {
        var e = new eui.Image;
        return this.line_11 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 317,
        e.y = 0,
        e
    },
    i.line_10_i = function() {
        var e = new eui.Image;
        return this.line_10 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 443,
        e.y = 0,
        e
    },
    i.line_9_i = function() {
        var e = new eui.Image;
        return this.line_9 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 569,
        e.y = 0,
        e
    },
    i.line_8_i = function() {
        var e = new eui.Image;
        return this.line_8 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 695,
        e.y = 0,
        e
    },
    i.line_7_i = function() {
        var e = new eui.Image;
        return this.line_7 = e,
        e.anchorOffsetX = 65,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 821,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 95,
        e.y = 395,
        e.elementsContent = [this.line_14_i(), this.line_15_i(), this.line_16_i(), this.line_17_i(), this.line_18_i(), this.line_19_i(), this.line_20_i()],
        e
    },
    i.line_14_i = function() {
        var e = new eui.Image;
        return this.line_14 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.line_15_i = function() {
        var e = new eui.Image;
        return this.line_15 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 126,
        e.y = 0,
        e
    },
    i.line_16_i = function() {
        var e = new eui.Image;
        return this.line_16 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 252,
        e.y = 0,
        e
    },
    i.line_17_i = function() {
        var e = new eui.Image;
        return this.line_17 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 378,
        e.y = 0,
        e
    },
    i.line_18_i = function() {
        var e = new eui.Image;
        return this.line_18 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 504,
        e.y = 0,
        e
    },
    i.line_19_i = function() {
        var e = new eui.Image;
        return this.line_19 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 630,
        e.y = 0,
        e
    },
    i.line_20_i = function() {
        var e = new eui.Image;
        return this.line_20 = e,
        e.source = "kr_panel5_line_png",
        e.visible = !1,
        e.x = 756,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 22,
        e.y = 32,
        e.elementsContent = [this.rect_0_i(), this.btnSign_0_i(), this.day_0_i(), this.flag_signed_0_i()],
        e
    },
    i.rect_0_i = function() {
        var e = new eui.Image;
        return this.rect_0 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_0_i = function() {
        var e = new eui.Image;
        return this.btnSign_0 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_0_i = function() {
        var e = new eui.Image;
        return this.day_0 = e,
        e.source = "kr_panel5_di1tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_0_i = function() {
        var e = new eui.Image;
        return this.flag_signed_0 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 148,
        e.y = 32,
        e.elementsContent = [this.rect_1_i(), this.btnSign_1_i(), this.day_1_i(), this.flag_signed_1_i()],
        e
    },
    i.rect_1_i = function() {
        var e = new eui.Image;
        return this.rect_1 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_1_i = function() {
        var e = new eui.Image;
        return this.btnSign_1 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_1_i = function() {
        var e = new eui.Image;
        return this.day_1 = e,
        e.source = "kr_panel5_di2tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_1_i = function() {
        var e = new eui.Image;
        return this.flag_signed_1 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 274,
        e.y = 32,
        e.elementsContent = [this.rect_2_i(), this.btnSign_2_i(), this.day_2_i(), this.flag_signed_2_i()],
        e
    },
    i.rect_2_i = function() {
        var e = new eui.Image;
        return this.rect_2 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_2_i = function() {
        var e = new eui.Image;
        return this.btnSign_2 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_2_i = function() {
        var e = new eui.Image;
        return this.day_2 = e,
        e.source = "kr_panel5_di3tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_2_i = function() {
        var e = new eui.Image;
        return this.flag_signed_2 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 400,
        e.y = 32,
        e.elementsContent = [this.rect_3_i(), this.btnSign_3_i(), this.day_3_i(), this.flag_signed_3_i()],
        e
    },
    i.rect_3_i = function() {
        var e = new eui.Image;
        return this.rect_3 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_3_i = function() {
        var e = new eui.Image;
        return this.btnSign_3 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_3_i = function() {
        var e = new eui.Image;
        return this.day_3 = e,
        e.source = "kr_panel5_di4tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_3_i = function() {
        var e = new eui.Image;
        return this.flag_signed_3 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group8_i = function() {
        var e = new eui.Group;
        return e.x = 526,
        e.y = 32,
        e.elementsContent = [this.rect_4_i(), this.btnSign_4_i(), this.day_4_i(), this.flag_signed_4_i()],
        e
    },
    i.rect_4_i = function() {
        var e = new eui.Image;
        return this.rect_4 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_4_i = function() {
        var e = new eui.Image;
        return this.btnSign_4 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_4_i = function() {
        var e = new eui.Image;
        return this.day_4 = e,
        e.source = "kr_panel5_di5tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_4_i = function() {
        var e = new eui.Image;
        return this.flag_signed_4 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group9_i = function() {
        var e = new eui.Group;
        return e.x = 652,
        e.y = 32,
        e.elementsContent = [this.rect_5_i(), this.btnSign_5_i(), this.day_5_i(), this.flag_signed_5_i()],
        e
    },
    i.rect_5_i = function() {
        var e = new eui.Image;
        return this.rect_5 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_5_i = function() {
        var e = new eui.Image;
        return this.btnSign_5 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_5_i = function() {
        var e = new eui.Image;
        return this.day_5 = e,
        e.source = "kr_panel5_di6tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_5_i = function() {
        var e = new eui.Image;
        return this.flag_signed_5 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group10_i = function() {
        var e = new eui.Group;
        return e.x = 778,
        e.y = 32,
        e.elementsContent = [this.rect_6_i(), this.btnSign_6_i(), this.day_6_i(), this.flag_signed_6_i()],
        e
    },
    i.rect_6_i = function() {
        var e = new eui.Image;
        return this.rect_6 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnSign_6_i = function() {
        var e = new eui.Image;
        return this.btnSign_6 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_6_i = function() {
        var e = new eui.Image;
        return this.day_6 = e,
        e.source = "kr_panel5_di7tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_6_i = function() {
        var e = new eui.Image;
        return this.flag_signed_6 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i.grp_big1_i = function() {
        var e = new eui.Group;
        return this.grp_big1 = e,
        e.visible = !0,
        e.x = 908,
        e.y = 14,
        e.elementsContent = [this.awardRect0_i(), this.btnKe_i(), this.btnFast_0_i(), this.btnGet_0_i(), this.flag_got_0_i()],
        e
    },
    i.awardRect0_i = function() {
        var e = new eui.Image;
        return this.awardRect0 = e,
        e.source = "kr_panel5_bigRect_png",
        e.visible = !1,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnKe_i = function() {
        var e = new eui.Image;
        return this.btnKe = e,
        e.height = 65,
        e.source = "kr_panel5_icon0_png",
        e.visible = !0,
        e.x = 23,
        e.y = 10,
        e
    },
    i.btnFast_0_i = function() {
        var e = new eui.Image;
        return this.btnFast_0 = e,
        e.source = "kr_panel5_btnFast_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.btnGet_0_i = function() {
        var e = new eui.Image;
        return this.btnGet_0 = e,
        e.source = "kr_panel5_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.flag_got_0_i = function() {
        var e = new eui.Image;
        return this.flag_got_0 = e,
        e.height = 29,
        e.source = "kr_panel5_yihuode_png",
        e.width = 95,
        e.x = 5,
        e.y = 40,
        e
    },
    i._Group11_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 919,
        e.y = 193,
        e.elementsContent = [this.rect_7_i(), this.btnSign_7_i(), this.day_7_i(), this.flag_signed_7_i()],
        e
    },
    i.rect_7_i = function() {
        var e = new eui.Image;
        return this.rect_7 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 11,
        e.y = 0,
        e
    },
    i.btnSign_7_i = function() {
        var e = new eui.Image;
        return this.btnSign_7 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_7_i = function() {
        var e = new eui.Image;
        return this.day_7 = e,
        e.source = "kr_panel5_di8tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_7_i = function() {
        var e = new eui.Image;
        return this.flag_signed_7 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group12_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 793,
        e.y = 193,
        e.elementsContent = [this.rect_8_i(), this.btnSign_8_i(), this.day_8_i(), this.flag_signed_8_i()],
        e
    },
    i.rect_8_i = function() {
        var e = new eui.Image;
        return this.rect_8 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_8_i = function() {
        var e = new eui.Image;
        return this.btnSign_8 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_8_i = function() {
        var e = new eui.Image;
        return this.day_8 = e,
        e.source = "kr_panel5_di9tian_png",
        e.x = 14,
        e.y = 23,
        e
    },
    i.flag_signed_8_i = function() {
        var e = new eui.Image;
        return this.flag_signed_8 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group13_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 667,
        e.y = 193,
        e.elementsContent = [this.rect_9_i(), this.btnSign_9_i(), this.day_9_i(), this.flag_signed_9_i()],
        e
    },
    i.rect_9_i = function() {
        var e = new eui.Image;
        return this.rect_9 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_9_i = function() {
        var e = new eui.Image;
        return this.btnSign_9 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_9_i = function() {
        var e = new eui.Image;
        return this.day_9 = e,
        e.source = "kr_panel5_di10tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_9_i = function() {
        var e = new eui.Image;
        return this.flag_signed_9 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group14_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 541,
        e.y = 193,
        e.elementsContent = [this.rect_10_i(), this.btnSign_10_i(), this.day_10_i(), this.flag_signed_10_i()],
        e
    },
    i.rect_10_i = function() {
        var e = new eui.Image;
        return this.rect_10 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_10_i = function() {
        var e = new eui.Image;
        return this.btnSign_10 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_10_i = function() {
        var e = new eui.Image;
        return this.day_10 = e,
        e.source = "kr_panel5_di11tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_10_i = function() {
        var e = new eui.Image;
        return this.flag_signed_10 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group15_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 415,
        e.y = 193,
        e.elementsContent = [this.rect_11_i(), this.btnSign_11_i(), this.day_11_i(), this.flag_signed_11_i()],
        e
    },
    i.rect_11_i = function() {
        var e = new eui.Image;
        return this.rect_11 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_11_i = function() {
        var e = new eui.Image;
        return this.btnSign_11 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_11_i = function() {
        var e = new eui.Image;
        return this.day_11 = e,
        e.source = "kr_panel5_di12tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_11_i = function() {
        var e = new eui.Image;
        return this.flag_signed_11 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group16_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 289,
        e.y = 193,
        e.elementsContent = [this.rect_12_i(), this.btnSign_12_i(), this.day_12_i(), this.flag_signed_12_i()],
        e
    },
    i.rect_12_i = function() {
        var e = new eui.Image;
        return this.rect_12 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_12_i = function() {
        var e = new eui.Image;
        return this.btnSign_12 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_12_i = function() {
        var e = new eui.Image;
        return this.day_12 = e,
        e.source = "kr_panel5_di13tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_12_i = function() {
        var e = new eui.Image;
        return this.flag_signed_12 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group17_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 163,
        e.y = 193,
        e.elementsContent = [this.rect_13_i(), this.btnSign_13_i(), this.day_13_i(), this.flag_signed_13_i()],
        e
    },
    i.rect_13_i = function() {
        var e = new eui.Image;
        return this.rect_13 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_13_i = function() {
        var e = new eui.Image;
        return this.btnSign_13 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_13_i = function() {
        var e = new eui.Image;
        return this.day_13 = e,
        e.source = "kr_panel5_di14tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_13_i = function() {
        var e = new eui.Image;
        return this.flag_signed_13 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i.grp_big2_i = function() {
        var e = new eui.Group;
        return this.grp_big2 = e,
        e.visible = !0,
        e.x = 8,
        e.y = 175,
        e.elementsContent = [this.awardRect1_i(), this.btnTe_i(), this.btnFast_1_i(), this.btnGet_1_i(), this.flag_got_1_i()],
        e
    },
    i.awardRect1_i = function() {
        var e = new eui.Image;
        return this.awardRect1 = e,
        e.source = "kr_panel5_bigRect_png",
        e.visible = !1,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnTe_i = function() {
        var e = new eui.Image;
        return this.btnTe = e,
        e.height = 65,
        e.source = "kr_panel5_icon1_png",
        e.visible = !0,
        e.x = 18,
        e.y = 10,
        e
    },
    i.btnFast_1_i = function() {
        var e = new eui.Image;
        return this.btnFast_1 = e,
        e.source = "kr_panel5_btnFast_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.btnGet_1_i = function() {
        var e = new eui.Image;
        return this.btnGet_1 = e,
        e.source = "kr_panel5_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.flag_got_1_i = function() {
        var e = new eui.Image;
        return this.flag_got_1 = e,
        e.height = 29,
        e.source = "kr_panel5_yihuode_png",
        e.width = 95,
        e.x = 5,
        e.y = 40,
        e
    },
    i._Group18_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 22,
        e.y = 363,
        e.elementsContent = [this.rect_14_i(), this.btnSign_14_i(), this.day_14_i(), this.flag_signed_14_i()],
        e
    },
    i.rect_14_i = function() {
        var e = new eui.Image;
        return this.rect_14 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 9,
        e.y = 0,
        e
    },
    i.btnSign_14_i = function() {
        var e = new eui.Image;
        return this.btnSign_14 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_14_i = function() {
        var e = new eui.Image;
        return this.day_14 = e,
        e.source = "kr_panel5_di15tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_14_i = function() {
        var e = new eui.Image;
        return this.flag_signed_14 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group19_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 148,
        e.y = 363,
        e.elementsContent = [this.rect_15_i(), this.btnSign_15_i(), this.day_15_i(), this.flag_signed_15_i()],
        e
    },
    i.rect_15_i = function() {
        var e = new eui.Image;
        return this.rect_15 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_15_i = function() {
        var e = new eui.Image;
        return this.btnSign_15 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_15_i = function() {
        var e = new eui.Image;
        return this.day_15 = e,
        e.source = "kr_panel5_di16tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_15_i = function() {
        var e = new eui.Image;
        return this.flag_signed_15 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group20_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 274,
        e.y = 363,
        e.elementsContent = [this.rect_16_i(), this.btnSign_16_i(), this.day_16_i(), this.flag_signed_16_i()],
        e
    },
    i.rect_16_i = function() {
        var e = new eui.Image;
        return this.rect_16 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_16_i = function() {
        var e = new eui.Image;
        return this.btnSign_16 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_16_i = function() {
        var e = new eui.Image;
        return this.day_16 = e,
        e.source = "kr_panel5_di17tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_16_i = function() {
        var e = new eui.Image;
        return this.flag_signed_16 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group21_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 400,
        e.y = 363,
        e.elementsContent = [this.rect_17_i(), this.btnSign_17_i(), this.day_17_i(), this.flag_signed_17_i()],
        e
    },
    i.rect_17_i = function() {
        var e = new eui.Image;
        return this.rect_17 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_17_i = function() {
        var e = new eui.Image;
        return this.btnSign_17 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_17_i = function() {
        var e = new eui.Image;
        return this.day_17 = e,
        e.source = "kr_panel5_di18tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_17_i = function() {
        var e = new eui.Image;
        return this.flag_signed_17 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group22_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 526,
        e.y = 363,
        e.elementsContent = [this.rect_18_i(), this.btnSign_18_i(), this.day_18_i(), this.flag_signed_18_i()],
        e
    },
    i.rect_18_i = function() {
        var e = new eui.Image;
        return this.rect_18 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_18_i = function() {
        var e = new eui.Image;
        return this.btnSign_18 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_18_i = function() {
        var e = new eui.Image;
        return this.day_18 = e,
        e.source = "kr_panel5_di19tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_18_i = function() {
        var e = new eui.Image;
        return this.flag_signed_18 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group23_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 652,
        e.y = 363,
        e.elementsContent = [this.rect_19_i(), this.btnSign_19_i(), this.day_19_i(), this.flag_signed_19_i()],
        e
    },
    i.rect_19_i = function() {
        var e = new eui.Image;
        return this.rect_19 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_19_i = function() {
        var e = new eui.Image;
        return this.btnSign_19 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_19_i = function() {
        var e = new eui.Image;
        return this.day_19 = e,
        e.source = "kr_panel5_di20tian_png",
        e.visible = !0,
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_19_i = function() {
        var e = new eui.Image;
        return this.flag_signed_19 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i._Group24_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 778,
        e.y = 363,
        e.elementsContent = [this.rect_20_i(), this.btnSign_20_i(), this.day_20_i(), this.flag_signed_20_i()],
        e
    },
    i.rect_20_i = function() {
        var e = new eui.Image;
        return this.rect_20 = e,
        e.source = "kr_panel5_smallRect_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.btnSign_20_i = function() {
        var e = new eui.Image;
        return this.btnSign_20 = e,
        e.source = "kr_panel5_btntiaozhan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 48,
        e
    },
    i.day_20_i = function() {
        var e = new eui.Image;
        return this.day_20 = e,
        e.source = "kr_panel5_di21tian_png",
        e.x = 11,
        e.y = 23,
        e
    },
    i.flag_signed_20_i = function() {
        var e = new eui.Image;
        return this.flag_signed_20 = e,
        e.source = "kr_panel5_signed_png",
        e.visible = !0,
        e.width = 65,
        e.x = 8,
        e.y = 20,
        e
    },
    i.grp_big3_i = function() {
        var e = new eui.Group;
        return this.grp_big3 = e,
        e.visible = !0,
        e.x = 908,
        e.y = 345,
        e.elementsContent = [this.awardRect2_i(), this.btnWu_i(), this.btnFast_2_i(), this.btnGet_2_i(), this.flag_got_2_i()],
        e
    },
    i.awardRect2_i = function() {
        var e = new eui.Image;
        return this.awardRect2 = e,
        e.source = "kr_panel5_bigRect_png",
        e.visible = !1,
        e.x = 8,
        e.y = 0,
        e
    },
    i.btnWu_i = function() {
        var e = new eui.Image;
        return this.btnWu = e,
        e.height = 65,
        e.source = "kr_panel5_icon2_png",
        e.visible = !0,
        e.x = 23,
        e.y = 10,
        e
    },
    i.btnFast_2_i = function() {
        var e = new eui.Image;
        return this.btnFast_2 = e,
        e.source = "kr_panel5_btnFast_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.btnGet_2_i = function() {
        var e = new eui.Image;
        return this.btnGet_2 = e,
        e.source = "kr_panel5_btnGet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 70,
        e
    },
    i.flag_got_2_i = function() {
        var e = new eui.Image;
        return this.flag_got_2 = e,
        e.height = 29,
        e.source = "kr_panel5_yihuode_png",
        e.width = 95,
        e.x = 5,
        e.y = 40,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -.5,
        e.source = "kr_panel5_wenan_png",
        e.y = 19,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panelextra1Skin.exml"] = window.kingRay.Panelextra1Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["bg1", "xuanzhong_1", "weikaiqi_1", "yiwancheng_1", "btn1_1", "level1", "xuanzhong_2", "weikaiqi_2", "yiwancheng_2", "btn1_2", "level2", "xuanzhong_3", "weikaiqi_3", "yiwancheng_3", "btn1_3", "level3", "xuanzhong_4", "weikaiqi_4", "yiwancheng_4", "btn1_4", "level4", "xuanzhong_5", "weikaiqi_5", "yiwancheng_5", "btn1_5", "level5", "xuanzhong_6", "weikaiqi_6", "yiwancheng_6", "btn1_6", "level6", "xuanzhong_7", "weikaiqi_7", "yiwancheng_7", "btn1_7", "level7", "xuanzhong_8", "weikaiqi_8", "yiwancheng_8", "btn1_8", "level8", "levels", "btnOnekey", "btnGet", "mainPanel"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg1_i(), this.mainPanel_i()]
    }
    __extends(n, e);
    var i = n.prototype;
    return i.bg1_i = function() {
        var e = new eui.Image;
        return this.bg1 = e,
        e.source = "kr_panelextra1_bg1_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.mainPanel_i = function() {
        var e = new eui.Group;
        return this.mainPanel = e,
        e.horizontalCenter = 1,
        e.y = 13,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.levels_i(), this.btnOnekey_i(), this.btnGet_i(), this._Image21_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = -1,
        e.source = "kr_panelextra1_jtleft_png",
        e.x = 220,
        e.y = 13,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "kr_panelextra1_jtleft_png",
        e.x = 860,
        e.y = 13,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_3142_png",
        e.x = 217,
        e.y = 93,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_bg_png",
        e.x = 482,
        e.y = 462,
        e
    },
    i.levels_i = function() {
        var e = new eui.Group;
        return this.levels = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i(), this.level4_i(), this.level5_i(), this.level6_i(), this.level7_i(), this.level8_i()],
        e
    },
    i.level1_i = function() {
        var e = new eui.Group;
        return this.level1 = e,
        e.touchEnabled = !1,
        e.x = 56,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.xuanzhong_1_i(), this._Image6_i(), this.weikaiqi_1_i(), this.yiwancheng_1_i(), this.btn1_1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.visible = !0,
        e.x = 19,
        e.y = 50,
        e
    },
    i.xuanzhong_1_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_1 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_shui__png",
        e.visible = !0,
        e.x = 46,
        e.y = 64,
        e
    },
    i.weikaiqi_1_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_1 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.visible = !0,
        e.x = 19,
        e.y = 51,
        e
    },
    i.yiwancheng_1_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_1 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.visible = !0,
        e.x = 19,
        e.y = 50,
        e
    },
    i.btn1_1_i = function() {
        var e = new eui.Image;
        return this.btn1_1 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.visible = !0,
        e.x = 12,
        e.y = 130,
        e
    },
    i.level2_i = function() {
        var e = new eui.Group;
        return this.level2 = e,
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 145,
        e.elementsContent = [this._Image7_i(), this.xuanzhong_2_i(), this._Image8_i(), this.weikaiqi_2_i(), this.yiwancheng_2_i(), this.btn1_2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 19,
        e.y = 50,
        e
    },
    i.xuanzhong_2_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_2 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_huo_png",
        e.x = 52,
        e.y = 63,
        e
    },
    i.weikaiqi_2_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_2 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 19,
        e.y = 51,
        e
    },
    i.yiwancheng_2_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_2 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 19,
        e.y = 50,
        e
    },
    i.btn1_2_i = function() {
        var e = new eui.Image;
        return this.btn1_2 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 12,
        e.y = 130,
        e
    },
    i.level3_i = function() {
        var e = new eui.Group;
        return this.level3 = e,
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 289,
        e.elementsContent = [this._Image9_i(), this.xuanzhong_3_i(), this._Image10_i(), this.weikaiqi_3_i(), this.yiwancheng_3_i(), this.btn1_3_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 19,
        e.y = 50,
        e
    },
    i.xuanzhong_3_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_3 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_fei_png",
        e.x = 46,
        e.y = 68,
        e
    },
    i.weikaiqi_3_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_3 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 19,
        e.y = 51,
        e
    },
    i.yiwancheng_3_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_3 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 19,
        e.y = 50,
        e
    },
    i.btn1_3_i = function() {
        var e = new eui.Image;
        return this.btn1_3 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 12,
        e.y = 130,
        e
    },
    i.level4_i = function() {
        var e = new eui.Group;
        return this.level4 = e,
        e.touchEnabled = !1,
        e.x = 76,
        e.y = 434,
        e.elementsContent = [this._Image11_i(), this.xuanzhong_4_i(), this._Image12_i(), this.weikaiqi_4_i(), this.yiwancheng_4_i(), this.btn1_4_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 19,
        e.y = 50,
        e
    },
    i.xuanzhong_4_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_4 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_guang_png",
        e.visible = !0,
        e.x = 39,
        e.y = 66,
        e
    },
    i.weikaiqi_4_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_4 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.visible = !0,
        e.x = 19,
        e.y = 51,
        e
    },
    i.yiwancheng_4_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_4 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.visible = !0,
        e.x = 19,
        e.y = 50,
        e
    },
    i.btn1_4_i = function() {
        var e = new eui.Image;
        return this.btn1_4 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 12,
        e.y = 130,
        e
    },
    i.level5_i = function() {
        var e = new eui.Group;
        return this.level5 = e,
        e.touchEnabled = !1,
        e.x = 890,
        e.y = 0,
        e.elementsContent = [this._Image13_i(), this.xuanzhong_5_i(), this._Image14_i(), this.weikaiqi_5_i(), this.yiwancheng_5_i(), this.btn1_5_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.xuanzhong_5_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_5 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_bing_png",
        e.x = 51,
        e.y = 64,
        e
    },
    i.weikaiqi_5_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_5 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 18,
        e.y = 51,
        e
    },
    i.yiwancheng_5_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_5 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.btn1_5_i = function() {
        var e = new eui.Image;
        return this.btn1_5 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 14,
        e.y = 130,
        e
    },
    i.level6_i = function() {
        var e = new eui.Group;
        return this.level6 = e,
        e.touchEnabled = !1,
        e.x = 946,
        e.y = 145,
        e.elementsContent = [this._Image15_i(), this.xuanzhong_6_i(), this._Image16_i(), this.weikaiqi_6_i(), this.yiwancheng_6_i(), this.btn1_6_i()],
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.xuanzhong_6_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_6 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_shenbi_png",
        e.x = 43,
        e.y = 66,
        e
    },
    i.weikaiqi_6_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_6 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 18,
        e.y = 51,
        e
    },
    i.yiwancheng_6_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_6 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.btn1_6_i = function() {
        var e = new eui.Image;
        return this.btn1_6 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 14,
        e.y = 130,
        e
    },
    i.level7_i = function() {
        var e = new eui.Group;
        return this.level7 = e,
        e.touchEnabled = !1,
        e.x = 946,
        e.y = 289,
        e.elementsContent = [this._Image17_i(), this.xuanzhong_7_i(), this._Image18_i(), this.weikaiqi_7_i(), this.yiwancheng_7_i(), this.btn1_7_i()],
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.xuanzhong_7_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_7 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_long_png",
        e.x = 40,
        e.y = 68,
        e
    },
    i.weikaiqi_7_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_7 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 18,
        e.y = 51,
        e
    },
    i.yiwancheng_7_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_7 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.btn1_7_i = function() {
        var e = new eui.Image;
        return this.btn1_7 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 14,
        e.y = 130,
        e
    },
    i.level8_i = function() {
        var e = new eui.Group;
        return this.level8 = e,
        e.touchEnabled = !1,
        e.x = 870,
        e.y = 434,
        e.elementsContent = [this._Image19_i(), this.xuanzhong_8_i(), this._Image20_i(), this.weikaiqi_8_i(), this.yiwancheng_8_i(), this.btn1_8_i()],
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_1_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.xuanzhong_8_i = function() {
        var e = new eui.Image;
        return this.xuanzhong_8 = e,
        e.source = "kr_panelextra1_xuanzhong_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_ciyuan_png",
        e.x = 40,
        e.y = 65,
        e
    },
    i.weikaiqi_8_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_8 = e,
        e.source = "kr_panelextra1_weikaiqi_png",
        e.x = 18,
        e.y = 51,
        e
    },
    i.yiwancheng_8_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_8 = e,
        e.source = "kr_panelextra1_yiwancheng_png",
        e.x = 18,
        e.y = 50,
        e
    },
    i.btn1_8_i = function() {
        var e = new eui.Image;
        return this.btn1_8 = e,
        e.source = "kr_panelextra1_btn1_png",
        e.x = 14,
        e.y = 130,
        e
    },
    i.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panelextra1_btnonekey_png",
        e.x = 454,
        e.y = 556,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "kr_panelextra1_btnget_png",
        e.visible = !1,
        e.x = 454,
        e.y = 556,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_zu_25_png",
        e.x = 242,
        e.y = 7,
        e
    },
    n
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Panelextra2Skin.exml"] = window.kingRay.Panelextra2Skin = function(e) {
    function n() {
        e.call(this),
        this.skinParts = ["over1", "level8_fight1", "over2", "level8_fight2", "over3", "level8_fight3", "over4", "level8_fight4", "over5", "level8_fight5", "grp_level8", "btnFight_71", "btnFight_72", "btnFight_73", "_re1", "_re2", "_re3", "pass1", "pass2", "pass3", "grp_level7", "txt_answer1", "answer1", "txt_answer2", "answer2", "txt_answer3", "answer3", "txt_answer4", "answer4", "txt_awState", "txt_qa", "grp_level6", "txt_level5", "bar_level5", "btnFight_5", "level5bar", "grp_level5", "btnFight_4", "grp_level4", "btnFight_3", "grp_level3", "txt_level2", "btnFight_2", "grp_level2", "btnFight_1", "grp_level1", "img_levelName", "btnOnekey", "btnBag", "btnCure", "txt_levelinfo", "txts", "bar_value", "bar", "img_CurLevel", "weikaiqi_1", "weikaiqi_2", "weikaiqi_3", "weikaiqi_4", "weikaiqi_5", "weikaiqi_6", "weikaiqi_7", "weikaiqi_8", "yiwancheng_1", "yiwancheng_2", "yiwancheng_3", "yiwancheng_4", "yiwancheng_5", "yiwancheng_6", "yiwancheng_7", "yiwancheng_8", "weikaiqi_9"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group3_i(), this._Group4_i()]
    }
    __extends(n, e);
    var i = function(e) {
        function n() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(n, e);
        var i = n.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(7, 30, 7, 30),
            e.source = "kr_panelextra2_jindu_kb_png",
            e.visible = !0,
            e
        },
        n
    } (eui.Skin),
    t = function(e) {
        function n() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.width = 21,
            this.elementsContent = [this.thumb_i()]
        }
        __extends(n, e);
        var i = n.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.scale9Grid = new egret.Rectangle(135, 1, 136, 2),
            e.source = "kr_panelextra2_jx_906_kb_png",
            e.visible = !0,
            e.width = 883,
            e
        },
        n
    } (eui.Skin),
    _ = n.prototype;
    return _._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra1_bg1_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_20_png",
        e.visible = !0,
        e.percentWidth = 100,
        e.y = 503,
        e
    },
    _._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 44.5,
        e.y = 0,
        e.elementsContent = [this.grp_level8_i(), this.grp_level7_i(), this.grp_level6_i(), this.grp_level5_i(), this.grp_level4_i(), this.grp_level3_i(), this.grp_level2_i(), this.grp_level1_i(), this.img_levelName_i(), this.btnOnekey_i(), this._Group2_i(), this.txts_i()],
        e
    },
    _.grp_level8_i = function() {
        var e = new eui.Group;
        return this.grp_level8 = e,
        e.visible = !1,
        e.x = 5,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.level8_fight1_i(), this.level8_fight2_i(), this.level8_fight3_i(), this.level8_fight4_i(), this.level8_fight5_i()],
        e
    },
    _._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2959_png",
        e.x = 15,
        e.y = 69,
        e
    },
    _._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_16_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 504,
        e.y = 0,
        e
    },
    _._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_16_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 601,
        e.y = 0,
        e
    },
    _._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_16_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 698,
        e.y = 0,
        e
    },
    _._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_16_png",
        e.touchEnabled = !1,
        e.x = 795,
        e.y = 0,
        e
    },
    _._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_16_png",
        e.touchEnabled = !1,
        e.x = 892,
        e.y = 0,
        e
    },
    _.level8_fight1_i = function() {
        var e = new eui.Group;
        return this.level8_fight1 = e,
        e.x = 507,
        e.y = 98,
        e.elementsContent = [this._Image9_i(), this.over1_i()],
        e
    },
    _._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_12_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.over1_i = function() {
        var e = new eui.Image;
        return this.over1 = e,
        e.source = "kr_panelextra2_zu9_png",
        e.x = 8,
        e.y = 287,
        e
    },
    _.level8_fight2_i = function() {
        var e = new eui.Group;
        return this.level8_fight2 = e,
        e.x = 604,
        e.y = 98,
        e.elementsContent = [this._Image10_i(), this.over2_i()],
        e
    },
    _._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_12_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.over2_i = function() {
        var e = new eui.Image;
        return this.over2 = e,
        e.source = "kr_panelextra2_zu9_png",
        e.x = 8,
        e.y = 287,
        e
    },
    _.level8_fight3_i = function() {
        var e = new eui.Group;
        return this.level8_fight3 = e,
        e.x = 701,
        e.y = 98,
        e.elementsContent = [this._Image11_i(), this.over3_i()],
        e
    },
    _._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_12_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.over3_i = function() {
        var e = new eui.Image;
        return this.over3 = e,
        e.source = "kr_panelextra2_zu9_png",
        e.x = 8,
        e.y = 287,
        e
    },
    _.level8_fight4_i = function() {
        var e = new eui.Group;
        return this.level8_fight4 = e,
        e.x = 798,
        e.y = 98,
        e.elementsContent = [this._Image12_i(), this.over4_i()],
        e
    },
    _._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_12_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.over4_i = function() {
        var e = new eui.Image;
        return this.over4 = e,
        e.source = "kr_panelextra2_zu9_png",
        e.x = 8,
        e.y = 287,
        e
    },
    _.level8_fight5_i = function() {
        var e = new eui.Group;
        return this.level8_fight5 = e,
        e.x = 895,
        e.y = 98,
        e.elementsContent = [this._Image13_i(), this.over5_i()],
        e
    },
    _._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_12_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.over5_i = function() {
        var e = new eui.Image;
        return this.over5 = e,
        e.source = "kr_panelextra2_zu9_png",
        e.x = 8,
        e.y = 287,
        e
    },
    _.grp_level7_i = function() {
        var e = new eui.Group;
        return this.grp_level7 = e,
        e.visible = !1,
        e.x = 5,
        e.y = 47,
        e.elementsContent = [this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this.btnFight_71_i(), this.btnFight_72_i(), this.btnFight_73_i(), this._re1_i(), this._re2_i(), this._re3_i(), this.pass1_i(), this.pass2_i(), this.pass3_i()],
        e
    },
    _._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_3036_png",
        e.x = 26,
        e.y = 0,
        e
    },
    _._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_19_png",
        e.x = 592,
        e.y = 40,
        e
    },
    _._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_z_191_kb_3_png",
        e.x = 592,
        e.y = 165,
        e
    },
    _._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_z_192_kb_3_png",
        e.x = 592,
        e.y = 290,
        e
    },
    _.btnFight_71_i = function() {
        var e = new eui.Image;
        return this.btnFight_71 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 884,
        e.y = 125,
        e
    },
    _.btnFight_72_i = function() {
        var e = new eui.Image;
        return this.btnFight_72 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 884,
        e.y = 250,
        e
    },
    _.btnFight_73_i = function() {
        var e = new eui.Image;
        return this.btnFight_73 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 884,
        e.y = 375,
        e
    },
    _._re1_i = function() {
        var e = new eui.Rect;
        return this._re1 = e,
        e.fillAlpha = .6,
        e.height = 126,
        e.width = 495,
        e.x = 592,
        e.y = 40,
        e
    },
    _._re2_i = function() {
        var e = new eui.Rect;
        return this._re2 = e,
        e.fillAlpha = .6,
        e.height = 126,
        e.width = 495,
        e.x = 592,
        e.y = 165,
        e
    },
    _._re3_i = function() {
        var e = new eui.Rect;
        return this._re3 = e,
        e.fillAlpha = .6,
        e.height = 126,
        e.width = 495,
        e.x = 592,
        e.y = 290,
        e
    },
    _.pass1_i = function() {
        var e = new eui.Image;
        return this.pass1 = e,
        e.source = "kr_panelextra2_yhd_kb_3_png",
        e.x = 690,
        e.y = 80,
        e
    },
    _.pass2_i = function() {
        var e = new eui.Image;
        return this.pass2 = e,
        e.source = "kr_panelextra2_yhd_kb_3_png",
        e.x = 690,
        e.y = 210,
        e
    },
    _.pass3_i = function() {
        var e = new eui.Image;
        return this.pass3 = e,
        e.source = "kr_panelextra2_yhd_kb_3_png",
        e.x = 690,
        e.y = 330,
        e
    },
    _.grp_level6_i = function() {
        var e = new eui.Group;
        return this.grp_level6 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 45,
        e.elementsContent = [this._Image18_i(), this._Group1_i(), this._Image27_i(), this.txt_awState_i(), this.txt_qa_i()],
        e
    },
    _._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_3082_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 594,
        e.y = 159,
        e.elementsContent = [this.answer1_i(), this.answer2_i(), this.answer3_i(), this.answer4_i()],
        e
    },
    _.answer1_i = function() {
        var e = new eui.Group;
        return this.answer1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image19_i(), this._Image20_i(), this.txt_answer1_i()],
        e
    },
    _._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "kr_panelextra2_zu_12_png",
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 16,
        e.source = "kr_panelextra2_jx_912_kb_png",
        e.width = 16,
        e.x = 3,
        e.y = 55,
        e
    },
    _.txt_answer1_i = function() {
        var e = new eui.Label;
        return this.txt_answer1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "可点击选项，最多十个字",
        e.textColor = 16762157,
        e.x = 75,
        e.y = 25,
        e
    },
    _.answer2_i = function() {
        var e = new eui.Group;
        return this.answer2 = e,
        e.x = 0,
        e.y = 70,
        e.elementsContent = [this._Image21_i(), this._Image22_i(), this.txt_answer2_i()],
        e
    },
    _._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "kr_panelextra2_zu_12_png",
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 16,
        e.source = "kr_panelextra2_jx_912_kb_png",
        e.width = 16,
        e.x = 3,
        e.y = 55,
        e
    },
    _.txt_answer2_i = function() {
        var e = new eui.Label;
        return this.txt_answer2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "可点击选项，最多十个字",
        e.textColor = 16762157,
        e.x = 75,
        e.y = 25,
        e
    },
    _.answer3_i = function() {
        var e = new eui.Group;
        return this.answer3 = e,
        e.x = 0,
        e.y = 140,
        e.elementsContent = [this._Image23_i(), this._Image24_i(), this.txt_answer3_i()],
        e
    },
    _._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "kr_panelextra2_zu_12_png",
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 16,
        e.source = "kr_panelextra2_jx_912_kb_png",
        e.width = 16,
        e.x = 3,
        e.y = 55,
        e
    },
    _.txt_answer3_i = function() {
        var e = new eui.Label;
        return this.txt_answer3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "可点击选项，最多十个字",
        e.textColor = 16762157,
        e.x = 75,
        e.y = 25,
        e
    },
    _.answer4_i = function() {
        var e = new eui.Group;
        return this.answer4 = e,
        e.x = 0,
        e.y = 210,
        e.elementsContent = [this._Image25_i(), this._Image26_i(), this.txt_answer4_i()],
        e
    },
    _._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 74,
        e.source = "kr_panelextra2_zu_12_png",
        e.width = 394,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Image26_i = function() {
        var e = new eui.Image;
        return e.height = 16,
        e.source = "kr_panelextra2_jx_912_kb_png",
        e.width = 16,
        e.x = 3,
        e.y = 55,
        e
    },
    _.txt_answer4_i = function() {
        var e = new eui.Label;
        return this.txt_answer4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "可点击选项，最多十个字",
        e.textColor = 16762157,
        e.x = 75,
        e.y = 25,
        e
    },
    _._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_31_png",
        e.x = 575,
        e.y = 7,
        e
    },
    _.txt_awState_i = function() {
        var e = new eui.Label;
        return this.txt_awState = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已回答X/3",
        e.textColor = 16777215,
        e.x = 907,
        e.y = 27,
        e
    },
    _.txt_qa_i = function() {
        var e = new eui.Label;
        return this.txt_qa = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 10,
        e.size = 18,
        e.text = "程序文字，最多三十二个字符，\n程序文字，最多三十二个字符",
        e.textAlign = "center",
        e.textColor = 16752429,
        e.width = 300,
        e.x = 640,
        e.y = 57,
        e
    },
    _.grp_level5_i = function() {
        var e = new eui.Group;
        return this.grp_level5 = e,
        e.visible = !0,
        e.x = 5,
        e.y = 0,
        e.elementsContent = [this._Image28_i(), this._Image29_i(), this.level5bar_i()],
        e
    },
    _._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2844_png",
        e.x = 40,
        e.y = 66,
        e
    },
    _._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_29_png",
        e.x = 521,
        e.y = 0,
        e
    },
    _.level5bar_i = function() {
        var e = new eui.Group;
        return this.level5bar = e,
        e.visible = !0,
        e.x = 636,
        e.y = 411,
        e.elementsContent = [this._Image30_i(), this._Image31_i(), this._Label1_i(), this.txt_level5_i(), this._Image32_i(), this.bar_level5_i(), this.btnFight_5_i()],
        e
    },
    _._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_jindu_kb_3_png",
        e.x = 8,
        e.y = 8,
        e
    },
    _._Image31_i = function() {
        var e = new eui.Image;
        return e.height = 91,
        e.source = "kr_panelextra2_zu_30_png",
        e.width = 318,
        e.x = 0,
        e.y = 0,
        e
    },
    _._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9848126068372,
        e.text = "造成伤害:",
        e.textColor = 16644006,
        e.x = 67,
        e.y = 9,
        e
    },
    _.txt_level5_i = function() {
        var e = new eui.Label;
        return this.txt_level5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "XXXX/10000",
        e.textColor = 16773439,
        e.x = 139,
        e.y = 10,
        e
    },
    _._Image32_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_jindbg_png",
        e.visible = !0,
        e.x = 18,
        e.y = 28,
        e
    },
    _.bar_level5_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_level5 = e,
        e.maximum = 1e4,
        e.value = 5e3,
        e.width = 282,
        e.x = 18,
        e.y = 28,
        e.skinName = i,
        e
    },
    _.btnFight_5_i = function() {
        var e = new eui.Image;
        return this.btnFight_5 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 116,
        e.y = 50,
        e
    },
    _.grp_level4_i = function() {
        var e = new eui.Group;
        return this.grp_level4 = e,
        e.visible = !1,
        e.x = 5,
        e.y = 0,
        e.elementsContent = [this._Image33_i(), this._Image34_i(), this._Image35_i(), this.btnFight_4_i()],
        e
    },
    _._Image33_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2787_png",
        e.x = 13,
        e.y = 43,
        e
    },
    _._Image34_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_28_png",
        e.x = 606,
        e.y = 0,
        e
    },
    _._Image35_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_vs_png",
        e.x = 432,
        e.y = 119,
        e
    },
    _.btnFight_4_i = function() {
        var e = new eui.Image;
        return this.btnFight_4 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 784,
        e.y = 461,
        e
    },
    _.grp_level3_i = function() {
        var e = new eui.Group;
        return this.grp_level3 = e,
        e.visible = !1,
        e.x = 5,
        e.y = 70,
        e.elementsContent = [this._Image36_i(), this._Image37_i(), this.btnFight_3_i()],
        e
    },
    _._Image36_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2887_png",
        e.x = 480,
        e.y = 0,
        e
    },
    _._Image37_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2988_png",
        e.x = 32,
        e.y = 1,
        e
    },
    _.btnFight_3_i = function() {
        var e = new eui.Image;
        return this.btnFight_3 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 765,
        e.y = 391,
        e
    },
    _.grp_level2_i = function() {
        var e = new eui.Group;
        return this.grp_level2 = e,
        e.visible = !1,
        e.x = 5,
        e.y = 16,
        e.elementsContent = [this._Image38_i(), this._Image39_i(), this.txt_level2_i(), this._Label2_i(), this._Image40_i(), this.btnFight_2_i()],
        e
    },
    _._Image38_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_26_png",
        e.x = 525,
        e.y = 0,
        e
    },
    _._Image39_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_27_png",
        e.x = 662,
        e.y = 398,
        e
    },
    _.txt_level2_i = function() {
        var e = new eui.Label;
        return this.txt_level2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "X/3",
        e.textColor = 16768062,
        e.x = 801,
        e.y = 416,
        e
    },
    _._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "已击败形态：",
        e.textColor = 16777215,
        e.x = 690,
        e.y = 416,
        e
    },
    _._Image40_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_2739_png",
        e.x = 57,
        e.y = 44,
        e
    },
    _.btnFight_2_i = function() {
        var e = new eui.Image;
        return this.btnFight_2 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 712,
        e.y = 445,
        e
    },
    _.grp_level1_i = function() {
        var e = new eui.Group;
        return this.grp_level1 = e,
        e.visible = !1,
        e.x = 21,
        e.y = 0,
        e.elementsContent = [this._Image41_i(), this._Image42_i(), this.btnFight_1_i()],
        e
    },
    _._Image41_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_25_png",
        e.x = 515,
        e.y = 0,
        e
    },
    _._Image42_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tuceng_5_png",
        e.x = 0,
        e.y = 69,
        e
    },
    _.btnFight_1_i = function() {
        var e = new eui.Image;
        return this.btnFight_1 = e,
        e.source = "kr_panelextra2_btnfight_png",
        e.x = 754,
        e.y = 461,
        e
    },
    _.img_levelName_i = function() {
        var e = new eui.Image;
        return this.img_levelName = e,
        e.source = "kr_panelextra2_mingzi1_png",
        e.visible = !0,
        e.x = 5,
        e.y = 102,
        e
    },
    _.btnOnekey_i = function() {
        var e = new eui.Image;
        return this.btnOnekey = e,
        e.source = "kr_panelextra2_btnonekey_png",
        e.x = 991,
        e.y = 403,
        e
    },
    _._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 1e3,
        e.y = 195,
        e.elementsContent = [this.btnBag_i(), this.btnCure_i()],
        e
    },
    _.btnBag_i = function() {
        var e = new eui.Image;
        return this.btnBag = e,
        e.source = "kr_panel2_jlbb_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "kr_panel2_jlhf_png",
        e.x = 0,
        e.y = 90,
        e
    },
    _.txts_i = function() {
        var e = new eui.Group;
        return this.txts = e,
        e.x = 27,
        e.y = 440,
        e.elementsContent = [this._Image43_i(), this.txt_levelinfo_i()],
        e
    },
    _._Image43_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_tipsbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    _.txt_levelinfo_i = function() {
        var e = new eui.Label;
        return this.txt_levelinfo = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "程序大大调用程序大大调用程序大大调用程序\n大大调用，程序大大调用，",
        e.textAlign = "center",
        e.textColor = 13535245,
        e.width = 360,
        e.x = 60,
        e.y = 13,
        e
    },
    _._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 509,
        e.elementsContent = [this.bar_i(), this._Image46_i(), this._Image47_i(), this._Image48_i(), this._Image49_i(), this._Image50_i(), this._Image51_i(), this._Image52_i(), this._Image53_i(), this._Image54_i(), this._Image55_i(), this._Image56_i(), this.img_CurLevel_i(), this._Image57_i(), this._Image58_i(), this._Image59_i(), this._Image60_i(), this._Image61_i(), this.weikaiqi_1_i(), this.weikaiqi_2_i(), this.weikaiqi_3_i(), this.weikaiqi_4_i(), this.weikaiqi_5_i(), this.weikaiqi_6_i(), this.weikaiqi_7_i(), this.weikaiqi_8_i(), this.yiwancheng_1_i(), this.yiwancheng_2_i(), this.yiwancheng_3_i(), this.yiwancheng_4_i(), this.yiwancheng_5_i(), this.yiwancheng_6_i(), this.yiwancheng_7_i(), this.yiwancheng_8_i(), this._Image62_i(), this.weikaiqi_9_i()],
        e
    },
    _.bar_i = function() {
        var e = new eui.Group;
        return this.bar = e,
        e.visible = !0,
        e.x = 0,
        e.y = 49,
        e.elementsContent = [this._Image44_i(), this._Image45_i(), this.bar_value_i()],
        e
    },
    _._Image44_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_1_png",
        e.visible = !0,
        e.x = 6,
        e.y = 0,
        e
    },
    _._Image45_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_juxing_906_png",
        e.visible = !0,
        e.x = 0,
        e.y = 6,
        e
    },
    _.bar_value_i = function() {
        var e = new eui.ProgressBar;
        return this.bar_value = e,
        e.maximum = 9,
        e.value = 4,
        e.visible = !0,
        e.x = 2,
        e.y = 8,
        e.skinName = t,
        e
    },
    _._Image46_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.visible = !0,
        e.x = 21,
        e.y = 11,
        e
    },
    _._Image47_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.visible = !0,
        e.x = 129,
        e.y = 11,
        e
    },
    _._Image48_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.visible = !0,
        e.x = 236,
        e.y = 11,
        e
    },
    _._Image49_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.x = 344,
        e.y = 11,
        e
    },
    _._Image50_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.x = 452,
        e.y = 11,
        e
    },
    _._Image51_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.x = 559,
        e.y = 11,
        e
    },
    _._Image52_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.x = 667,
        e.y = 11,
        e
    },
    _._Image53_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_2_png",
        e.x = 774,
        e.y = 11,
        e
    },
    _._Image54_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_shui_png",
        e.x = 39,
        e.y = 27,
        e
    },
    _._Image55_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_huo_png",
        e.x = 147,
        e.y = 27,
        e
    },
    _._Image56_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_fei_png",
        e.x = 358,
        e.y = 28,
        e
    },
    _.img_CurLevel_i = function() {
        var e = new eui.Image;
        return this.img_CurLevel = e,
        e.source = "kr_panelextra2_xuanzhong_png",
        e.visible = !0,
        e.x = 306,
        e.y = 5,
        e
    },
    _._Image57_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_guang_png",
        e.x = 246,
        e.y = 29,
        e
    },
    _._Image58_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_bing_png",
        e.x = 468,
        e.y = 27,
        e
    },
    _._Image59_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_shenbi_png",
        e.x = 571,
        e.y = 29,
        e
    },
    _._Image60_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_long_png",
        e.x = 677,
        e.y = 29,
        e
    },
    _._Image61_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_ciyuan_png",
        e.x = 785,
        e.y = 28,
        e
    },
    _.weikaiqi_1_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_1 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 21,
        e.y = 10,
        e
    },
    _.weikaiqi_2_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_2 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 129,
        e.y = 10,
        e
    },
    _.weikaiqi_3_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_3 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 236,
        e.y = 10,
        e
    },
    _.weikaiqi_4_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_4 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 344,
        e.y = 10,
        e
    },
    _.weikaiqi_5_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_5 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 452,
        e.y = 10,
        e
    },
    _.weikaiqi_6_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_6 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 559,
        e.y = 10,
        e
    },
    _.weikaiqi_7_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_7 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !1,
        e.x = 667,
        e.y = 10,
        e
    },
    _.weikaiqi_8_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_8 = e,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !0,
        e.x = 774,
        e.y = 10,
        e
    },
    _.yiwancheng_1_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_1 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 13,
        e.y = 11,
        e
    },
    _.yiwancheng_2_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_2 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 121,
        e.y = 11,
        e
    },
    _.yiwancheng_3_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_3 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 228,
        e.y = 11,
        e
    },
    _.yiwancheng_4_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_4 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 336,
        e.y = 11,
        e
    },
    _.yiwancheng_5_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_5 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 444,
        e.y = 11,
        e
    },
    _.yiwancheng_6_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_6 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 551,
        e.y = 11,
        e
    },
    _.yiwancheng_7_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_7 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 659,
        e.y = 11,
        e
    },
    _.yiwancheng_8_i = function() {
        var e = new eui.Image;
        return this.yiwancheng_8 = e,
        e.source = "kr_panelextra2_yiwancheng_png",
        e.visible = !0,
        e.x = 766,
        e.y = 11,
        e
    },
    _._Image62_i = function() {
        var e = new eui.Image;
        return e.source = "kr_panelextra2_zu_6_png",
        e.visible = !0,
        e.x = 852,
        e.y = 0,
        e
    },
    _.weikaiqi_9_i = function() {
        var e = new eui.Image;
        return this.weikaiqi_9 = e,
        e.scaleX = 1.1,
        e.scaleY = 1.1,
        e.source = "kr_panelextra2_weikaiqi_png",
        e.visible = !0,
        e.x = 880,
        e.y = 8,
        e
    },
    n
} (eui.Skin);