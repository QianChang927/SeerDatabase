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
backflow; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "BackflowPanel4Skin",
            i.service = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent(),
            EventManager.dispatchEventWith(t.EventConst.EVENT_PLAY_WORD_EFFECT, !1, {
                rect: this.rect,
                word: this.txt
            })
        },
        i.prototype.init = function() {
            var e = this;
            this.list.itemRenderer = t.TaskItem,
            config.BackFlowTask.load(function(t) {
                for (var i = Math.ceil(t.length / 4), n = [], r = 0; i > r; r++) n.push(121545 + r);
                n.push(121548),
                KTool.getMultiValue(n,
                function(n) {
                    t.forEach(function(t) {
                        t.finishTime = n[Math.ceil(t.tasktype / 4) - 1] >> 8 * ((t.tasktype % 4 || 4) - 1) & 255,
                        t.hasFinish = !!KTool.getBit(n[i], t.id)
                    }),
                    e.list.dataProvider ? e.list.dataProvider.replaceAll(t) : e.list.dataProvider = new eui.ArrayCollection(t)
                })
            },
            this)
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.PET_RECRUIT, null, AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnMark,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.MARK_WHEEL, null, AppDoStyle.HIDEN)
            },
            this),
            EventManager.addEventListener(t.EventConst.EVENT_UPDATE_TASK_LIST, this.init, this)
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.reshow = function() {
            this.init()
        },
        i.prototype.onShow = function() {
            var t = this;
            return 0 == this.list.numChildren ? (egret.setTimeout(function() {
                t.onShow()
            },
            this, 100), void(this.list.visible = !1)) : (this.list.visible = !0, egret.lifecycle.stage.touchChildren = !1, DisplayUtil.setScrollerItemIncludeInLayout(this.list.parent, !1), void gsap.from(this.list.$children, {
                x: 1e3,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            }).then(function() {
                egret.lifecycle.stage.touchChildren = !0,
                DisplayUtil.setScrollerItemIncludeInLayout(t.list.parent, !0)
            }))
        },
        i
    } (eui.Component);
    t.Panel4 = e,
    __reflect(e.prototype, "backflow.Panel4")
} (backflow || (backflow = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        u((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = i;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(i);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
backflow; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.param = i,
            n.service.setValues([2791, 2793, 2794, 2795, 121541, 121542, 121543, 121544], [201517], [], [1000398]),
            n.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            n.aniMask = new eui.Rect(egret.lifecycle.stage.width, 640),
            n.groupAni = new eui.Group,
            n.addChild(n.groupAni),
            n.groupAni.horizontalCenter = n.groupAni.verticalCenter = 0,
            EventManager.addEventListener(t.EventConst.EVENT_CLOSE_POP1, n.onDialog, n),
            EventManager.addEventListener(t.EventConst.EVENT_PLAY_WORD_EFFECT, n.playWordEffect, n),
            n
        }
        return __extends(i, e),
        i.prototype.initialized = function() {
            var e = this;
            this.service.updateValues().then(function() {
                if (!KTool.getBit(e.service.getValue(2791), 15)) return BubblerManager.getInstance().showText("很抱歉，该活动仅限老兵回归玩家参与！"),
                void e.service.closeModule();
                if ("pop1" == e.param) {
                    var i = PopViewManager.createDefaultStyleObject();
                    i.maskShapeStyle.maskAlpha = .8,
                    PopViewManager.getInstance().openView(new t.OpenPop1, i)
                } else "pop2" == e.param ? e.service.openPop(new t.OpenPop2(e.service), !0) : e.service.backToMainPanel()
            })
        },
        i.prototype.reShow = function() {
            this.panelMap[t.PanelConst.MAIN_PANEL] && this.panelMap[t.PanelConst.MAIN_PANEL].reshow()
        },
        i.prototype.onDialog = function() {
            var t = this;
            return IS_RELEASE ? (StatLogger.log("2023老兵回归", "H5端", "进入前置剧情"), void npcDialog.showDialogIds(73,
            function() {
                var e = SpineUtil.createAnimate("mh_p1");
                t.addChildAt(t.aniMask, 0),
                t.groupAni.addChild(e);
                var i = e.play("mh_anima_p1", 1);
                i.waitLoopEnd().then(function() {
                    return __awaiter(t, void 0, void 0,
                    function() {
                        var t = this;
                        return __generator(this,
                        function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, wait(2e3)];
                            case 1:
                                return n.sent(),
                                this.removeChild(this.aniMask),
                                this.groupAni.removeChildren(),
                                npcDialog.showDialogIds(74,
                                function() {
                                    e = SpineUtil.createAnimate("mh_p2"),
                                    t.addChildAt(t.aniMask, 0),
                                    t.groupAni.addChild(e),
                                    i = e.play("mh_anima_p2", 1),
                                    i.waitLoopEnd().then(function() {
                                        return __awaiter(t, void 0, void 0,
                                        function() {
                                            var t = this;
                                            return __generator(this,
                                            function(n) {
                                                switch (n.label) {
                                                case 0:
                                                    return [4, wait(2e3)];
                                                case 1:
                                                    return n.sent(),
                                                    this.removeChild(this.aniMask),
                                                    this.groupAni.removeChildren(),
                                                    npcDialog.showDialogIds(75,
                                                    function() {
                                                        e = SpineUtil.createAnimate("mh_p3"),
                                                        t.addChildAt(t.aniMask, 0),
                                                        t.groupAni.addChild(e),
                                                        i = e.play("mh_anima_p3", 1),
                                                        i.waitLoopEnd().then(function() {
                                                            return __awaiter(t, void 0, void 0,
                                                            function() {
                                                                var t = this;
                                                                return __generator(this,
                                                                function(n) {
                                                                    switch (n.label) {
                                                                    case 0:
                                                                        return [4, wait(2e3)];
                                                                    case 1:
                                                                        return n.sent(),
                                                                        this.removeChild(this.aniMask),
                                                                        this.groupAni.removeChildren(),
                                                                        e = SpineUtil.createAnimate("mh_p4"),
                                                                        this.addChildAt(this.aniMask, 0),
                                                                        this.groupAni.addChild(e),
                                                                        i = e.play("mh_anima_p4", 1),
                                                                        i.waitLoopEnd().then(function() {
                                                                            return __awaiter(t, void 0, void 0,
                                                                            function() {
                                                                                return __generator(this,
                                                                                function(t) {
                                                                                    switch (t.label) {
                                                                                    case 0:
                                                                                        return [4, wait(2e3)];
                                                                                    case 1:
                                                                                        return t.sent(),
                                                                                        this.removeChild(this.groupAni),
                                                                                        this.service.backToMainPanel(),
                                                                                        [2]
                                                                                    }
                                                                                })
                                                                            })
                                                                        }),
                                                                        [2]
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    },
                                                    this),
                                                    [2]
                                                }
                                            })
                                        })
                                    })
                                },
                                this),
                                [2]
                            }
                        })
                    })
                })
            },
            this)) : (BubblerManager.getInstance().showText("内网跳过剧情动画"), void this.onClose())
        },
        i.prototype.playWordEffect = function(t) {
            var e = t.data.rect,
            i = t.data.word;
            t.data.reverseX;
            e.visible = !0,
            i.visible = !0
        },
        i
    } (BasicMultPanelModule);
    t.Backflow = e,
    __reflect(e.prototype, "backflow.Backflow")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "BackflowGiftItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btn,
            function() {
                255 & t.data.service.getValue(201517) ? BubblerManager.getInstance().showText("今日你已经免费领取过礼包了，请明天再来！") : Alert.show("每日拥有1次免费领取礼包的机会，确定今日领取" + TextFormatUtil.getRedTxt(t.data.name) + "吗？",
                function() {
                    SocketConnection.sendByQueue(41448, [2, t.data.id],
                    function() {
                        t.data.flag = !0,
                        t.btn.source = "backflow_pet_pop_imghasget_png",
                        t.data.service.updateSomeValues([201517])
                    })
                })
            },
            this, !0, !0,
            function() {
                return ! t.data.flag
            }),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetManualInfo(t.data.award[3], 1)
            },
            this),
            this.ani = SpineUtil.createAnimate("huiliu_p3"),
            this.ani.play("ani_loopbox_p3"),
            this.addChild(this.ani),
            this.ani.x = 120,
            this.ani.y = 58
        },
        e.prototype.dataChanged = function() {
            var t = this;
            this.groupTag.removeChildren(),
            this.imgBG.source = "backflow_panel3_img" + this.data.id + "_png";
            var e = this.data.id % 2 == 0;
            this.btnInfo.visible = !e;
            for (var i = 1; 3 >= i; i++) this["imgItem" + i].visible = e,
            this["txtItem" + i].visible = e;
            this.btn.source = this.data.flag ? "backflow_pet_pop_imghasget_png": "backflow_panel3_btnget_png";
            for (var i = 1; 6 >= i; i++) ImageButtonUtil.remove(this["imgItem" + i]);
            if (e) for (var n = function(t) {
                var e = r.data.award[2 * (t - 1)];
                r["imgItem" + t].source = e > 1e5 || 10 > e ? ClientConfig.getItemIcon(e) : ClientConfig.getMarkPath( + e),
                r["txtItem" + t].text = r.data.award[2 * t - 1] || "",
                ImageButtonUtil.add(r["imgItem" + t],
                function() {
                    e > 1e5 || 10 > e ? tipsPop.TipsPop.openItemPop({
                        id: +e
                    }) : tipsPop.TipsPop.openCounterMarkPop({
                        ins: +e
                    })
                },
                r)
            },
            r = this, i = 1; 6 >= i; i++) n(i);
            else {
                this.imgItem4.source = "common_fifth_skill_icon_png",
                this.imgItem5.source = "common_pet_yin_icon_png",
                this.imgItem6.source = ClientConfig.getMarkPath(this.data.award[2]),
                this.txtItem4.text = "",
                this.txtItem5.text = "",
                this.txtItem6.text = "",
                ImageButtonUtil.add(this.imgItem4,
                function() {
                    tipsPop.TipsPop.openSkillPop({
                        id: t.data.award[0]
                    })
                },
                this),
                ImageButtonUtil.add(this.imgItem5,
                function() {
                    ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t.data.award[1], "", AppDoStyle.NULL)
                },
                this),
                ImageButtonUtil.add(this.imgItem6,
                function() {
                    tipsPop.TipsPop.openCounterMarkPop({
                        ins: t.data.award[2]
                    })
                },
                this);
                var o = EffectIconControl.getAllEffctByPetId(this.data.award[3]);
                if (o) {
                    var a = o[0].kind;
                    if (null != a) for (var s = a.toString().split(" ").map(Number), i = 0; i < s.length; i++) {
                        var u = new eui.Image("pet_bag_tag" + (s[i] + 1) + "_png");
                        this.groupTag.addChild(u)
                    }
                }
            }
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.GiftItem = e,
    __reflect(e.prototype, "backflow.GiftItem")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "BackflowTaskItemSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.itemId1
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: e.itemId2
                })
            },
            this),
            ImageButtonUtil.add(this.btn,
            function() {
                e.data.hasFinish || (e.data.finishTime >= +e.data.value ? SocketConnection.sendByQueue(41448, [9, e.data.id],
                function() {
                    e.data.hasFinish = !0,
                    e.dataChanged(),
                    EventManager.dispatchEventWith(t.EventConst.EVENT_UPDATE_TASK_LIST)
                }) : e.checkJump(e.data.H5addition) && ModuleManager.showModuleByID( + e.data.H5jump.split("_")[1], null, AppDoStyle.HIDEN))
            },
            this)
        },
        i.prototype.dataChanged = function() {
            if (!GameInfo.isChecking || 10 != this.data.id) {
                var t = this.data;
                this.txt2.text = t.describe,
                this.txt1.text = t.title.replace("xx/xx", t.finishTime + "/" + t.value);
                var e = t.rewardinfo.split(";"),
                i = e[0].split("_");
                this.itemId1 = +i[1],
                this.imgItem1.source = ClientConfig.getItemIcon(i[1]),
                this.txtItem1.text = i[2],
                i = e[1].split("_"),
                this.itemId2 = +i[1],
                this.imgItem2.source = ClientConfig.getItemIcon(i[1]),
                this.txtItem2.text = i[2],
                t.hasFinish ? this.btn.source = "backflow_pet_pop_imghasget_png": t.finishTime >= +t.value ? this.btn.source = "backflow_panel3_btnget_png": this.btn.source = "backflow_task_item_btngo_png"
            }
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.checkJump = function(t) {
            var e = t.split("_");
            if ("1" == e[0]) {
                e = e[1].split(",");
                var i = SystemTimerManager.sysBJDate.getDay() || 7;
                if ( - 1 == e.indexOf(i + "")) {
                    for (var n = "",
                    r = 0,
                    o = e; r < o.length; r++) {
                        var a = o[r];
                        n.length && (n += "、"),
                        n += "周" + this.numberToChinese( + a)
                    }
                    return n = "当前副本挑战仅限" + n + "开放！",
                    BubblerManager.getInstance().showText(n),
                    !1
                }
            }
            return ! 0
        },
        i.prototype.numberToChinese = function(t) {
            return 1 == t ? "一": 2 == t ? "二": 3 == t ? "三": 4 == t ? "四": 5 == t ? "五": 6 == t ? "六": 7 == t ? "日": void 0
        },
        i
    } (eui.ItemRenderer);
    t.TaskItem = e,
    __reflect(e.prototype, "backflow.TaskItem")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "BackflowMainPanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.initAni(),
            this.init(),
            this.addEvent()
        },
        i.prototype.initAni = function() {
            this.aniSelect = SpineUtil.createAnimate("huiliu_p1"),
            this.aniSelect.play("ani_6box"),
            this.addChildAt(this.aniSelect, 1);
            var t = SpineUtil.createAnimate("huiliu_p1");
            t.play("ani_bg"),
            this.addChildAt(t, 0),
            t.x = LevelManager.appLevel.width / 2,
            t.y = LevelManager.appLevel.height / 2
        },
        i.prototype.init = function() {
            var t = this;
            StatLogger.log("2023老兵回归", "H5端", "进入老兵回归主界面"),
            this.initBtnClose("backflow_main_panel_imgtitle_png", this,
            function() {
                t.service.closeModule()
            },
            this),
            this.arrPanel = [],
            this.rbg = new eui.RadioButtonGroup;
            for (var e = 1; 6 >= e; e++) this["rb" + e].group = this.rbg;
            this.rb1.selected = !0,
            this.onChangeTab(),
            SocketConnection.sendByQueue(41448, [3, 0],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                if (49 == n) {
                    var r = SystemTimerManager.sysBJDate.getHours();
                    t.txtEndTime.text = "距离活动结束剩余" + (23 - r) + "小时"
                } else t.txtEndTime.text = "距离活动结束剩余" + (49 - n) + "天"
            }),
            this.setRed(),
            GameInfo.isChecking && (this.rb5.visible = this.rb6.visible = !1)
        },
        i.prototype.addEvent = function() {
            this.rbg.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(t.EventConst.EVENT_CHANGE_TAB, this.onChangeTabByEvent, this)
        },
        i.prototype.onChangeTab = function() {
            var t = this;
            this.groupPanel.removeChildren();
            var e = this.getPanel(this.rbg.selectedValue || 1);
            this.groupPanel.addChild(e),
            this.once(egret.Event.RENDER,
            function() {
                e && e.onShow && e.onShow();
                var i = t.rbg.selection || t.rb1;
                t.aniSelect.x = i.localToGlobal(5).x + i.width / 2,
                t.aniSelect.y = i.localToGlobal().y + 3 + i.height / 2
            },
            this)
        },
        i.prototype.onChangeTabByEvent = function(t) {
            this.rbg.selectedValue = t.data,
            this.onChangeTab()
        },
        i.prototype.getPanel = function(t) {
            if (!this.arrPanel[t]) {
                var e = egret.getDefinitionByName("backflow.Panel" + t);
                this.arrPanel[t] = new e(this.service)
            }
            return this.arrPanel[t]
        },
        i.prototype.reshow = function() {
            for (var t = 0,
            e = this.arrPanel; t < e.length; t++) {
                var i = e[t];
                i && i.reshow && i.reshow()
            }
        },
        i.prototype.destroy = function() {
            for (var t = 0,
            i = this.arrPanel; t < i.length; t++) {
                var n = i[t];
                n && n.destroy && n.destroy()
            }
            HotRedManager.getInstance().removeRegisterHotEventAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.setRed = function() {
            var t = this;
            this.rb1.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3001),
            HotRedManager.getInstance().registerHotEvent(3001,
            function() {
                t.rb1.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3001),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this),
            this.rb2.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3002) || !!HotRedManager.getInstance().getHotRedState(3003),
            HotRedManager.getInstance().registerHotEvent(3002,
            function() {
                t.rb2.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3002) || !!HotRedManager.getInstance().getHotRedState(3003),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this),
            HotRedManager.getInstance().registerHotEvent(3003,
            function() {
                t.rb2.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3002) || !!HotRedManager.getInstance().getHotRedState(3003),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this),
            this.rb3.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3004),
            HotRedManager.getInstance().registerHotEvent(3004,
            function() {
                t.rb3.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3004),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this),
            this.rb4.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3005),
            HotRedManager.getInstance().registerHotEvent(3005,
            function() {
                t.rb4.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3005),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this),
            this.rb5.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3006),
            HotRedManager.getInstance().registerHotEvent(3006,
            function() {
                t.rb5.imgRedDot.visible = !!HotRedManager.getInstance().getHotRedState(3006),
                EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                    id: 9
                })
            },
            this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "backflow.MainPanel")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "BackflowPanel1Skin",
            i.service = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this,
            e = new Date(1e3 * this.service.getValue(121541)),
            i = 65535 & this.service.getValue(121542);
            30 > i ? this.txtWord1.text = "小赛尔，已经很久没有看到你了…\n你离开飞船的日子里\n精灵们无不期待着你的归来\n赛尔号也经历了更多的冒险": this.txtWord1.text = e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日\n自这天起，已经很久没有看到你了\n" + i + "天后的今天\n带着激情和对荣耀的渴望\n你又重新回到了这片星空";
            var n = this.service.getValue(121542) >> 16 & 255,
            r = [[300066, 1, 40802, 0, 40805, 0, 1723167, 3, 1723255, 3, 1400152, 5, 1400153, 5, 1400352, "100万", 3, "100万", 1, "100万"], [300066, 2, 40712, 0, 40714, 0, 1723167, 5, 1723255, 5, 1400152, 10, 1400153, 10, 1400352, "200万", 3, "200万", 1, "200万"], [300066, 3, 41535, 0, 41536, 0, 41541, 0, 41542, 0, 1723167, 10, 1723255, 10, 1400152, 30, 1400153, 30, 1400352, "300万", 3, "300万", 1, "300万"]][n - 1];
            if (2 >= n) {
                this.imgItem1.visible = this.imgItemBG1.visible = !1,
                this.imgItem12.visible = this.imgItemBG12.visible = !1;
                for (var o = 2; 11 >= o; o++) {
                    var a = +r[2 * o - 4];
                    this["imgItem" + o].source = a > 1e5 || 10 > a ? ClientConfig.getItemIcon(a) : ClientConfig.getMarkPath( + a),
                    this["txtItem" + o].text = r[2 * o - 3] || "",
                    this.addClickEvent(this["imgItem" + o], a)
                }
            } else if (3 == n) for (var o = 1; 12 >= o; o++) {
                var a = +r[2 * o - 2];
                this["imgItem" + o].source = a > 1e5 || 10 > a ? ClientConfig.getItemIcon(a) : ClientConfig.getMarkPath( + a),
                this["txtItem" + o].text = r[2 * o - 1] || "",
                this.addClickEvent(this["imgItem" + o], a)
            }
            var s = !!(this.service.getValue(121542) >> 24 & 255);
            this.btnGet.visible = !s,
            this.imgHasGet.visible = s,
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(41448, [1, 1],
                function() {
                    t.btnGet.visible = !1,
                    t.imgHasGet.visible = !0
                })
            },
            this);
            var u = SpineUtil.createAnimate("huiliu_p1");
            u.play("ani_days180"),
            this.addChildAt(u, 0),
            u.x = this.width / 2,
            u.y = 260,
            this.imgRect1.visible = this.imgRect2.visible = this.txtWord1.visible = this.txtWord2.visible = !0
        },
        e.prototype.addClickEvent = function(t, e) {
            ImageButtonUtil.add(t,
            function() { + e > 1e5 || 10 > +e ? tipsPop.TipsPop.openItemPop({
                    id: +e
                }) : tipsPop.TipsPop.openCounterMarkPop({
                    ins: +e
                })
            },
            this)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.Component);
    t.Panel1 = e,
    __reflect(e.prototype, "backflow.Panel1")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "BackflowPanel2Skin",
            i.service = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFire,
            function() {
                PopViewManager.getInstance().openView(new t.FirePop(e.service))
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.updateSomeValues([121544]).then(function() {
                    PopViewManager.getInstance().openView(new t.PetPop(e.service), null, null, e)
                })
            },
            this),
            this.ani = SpineUtil.createAnimate("huiliu_p2"),
            this.ani.play("ani_loopbox_p2"),
            this.addChildAt(this.ani, 0),
            this.ani.x = 530,
            this.ani.y = 245,
            EventManager.dispatchEventWith(t.EventConst.EVENT_PLAY_WORD_EFFECT, !1, {
                rect: this.rect,
                word: this.txt
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onShow = function() {
            var t = this;
            this.ani.alpha = 0,
            egret.Tween.removeTweens(this.ani),
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from([this.imgFire, this.imgPet], {
                x: 1e3,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            }).then(function() {
                egret.lifecycle.stage.touchChildren = !0,
                egret.Tween.get(t.ani).to({
                    alpha: 1
                },
                1e3)
            })
        },
        i
    } (eui.Component);
    t.Panel2 = e,
    __reflect(e.prototype, "backflow.Panel2")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "BackflowPanel3Skin",
            i.service = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.list.itemRenderer = t.GiftItem,
            this.list.useVirtualLayout = !1;
            for (var e = [[31875, 3582, 41201, 3582], [40861, 0, 40862, 0, 40863, 0, 40864, 0, 41533, 0, 41534, 0], [33422, 3889, 41603, 3889], [300070, 5, 300673, 5, 300075, 5, 300853, 5, 9, 1020, 300665, 5], [33428, 3890, 41604, 3890], [300063, 3, 300065, 3, 1706826, 3, 1706926, 3, 1706927, 100, 1706928, 100], [33434, 3891, 41605, 3891], [300697, 5, 300135, 5, 300064, 5, 300885, 5, 300886, 5, 300887, 5]], i = ["几米礼包", "全能刻印礼包", "未来·布布种子礼包", "基础培养礼包", "未来·小火猴礼包", "进阶培养礼包", "未来·伊优礼包", "PVE助力礼包"], n = [], r = 0; 8 > r; r++) n.push({
                id: r + 1,
                flag: !!KTool.getBit(this.service.getValue(121543), r + 1),
                award: e[r],
                service: this.service,
                name: i[r]
            });
            this.list.dataProvider = new eui.ArrayCollection(n)
        },
        i.prototype.destroy = function() {
            for (var t = this.list.numChildren,
            e = 0; t > e; e++) {
                var i = this.list.getChildAt(e);
                i.destroy()
            }
        },
        i.prototype.onShow = function() {
            var t = this;
            return 0 == this.list.numChildren ? (egret.setTimeout(function() {
                t.onShow()
            },
            this, 100), void(this.list.visible = !1)) : (this.list.visible = !0, this.list.scrollH = 0, egret.lifecycle.stage.touchChildren = !1, DisplayUtil.setScrollerItemIncludeInLayout(this.list.parent, !1), void gsap.from(this.list.$children, {
                x: 1e3,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            }).then(function() {
                egret.lifecycle.stage.touchChildren = !0,
                DisplayUtil.setScrollerItemIncludeInLayout(t.list.parent, !0)
            }))
        },
        i
    } (eui.Component);
    t.Panel3 = e,
    __reflect(e.prototype, "backflow.Panel3")
} (backflow || (backflow = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
backflow; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "backflow.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "backflow.PanelConst");
    var i = function() {
        function t() {}
        return t.EVENT_AFTER_BUY = "backflow.afterBuy",
        t.EVENT_CLOSE_POP1 = "backflow.closePop1",
        t.EVENT_UPDATE_TASK_LIST = "backflow.updateTaskList",
        t.EVENT_CHANGE_TAB = "backflow.changeTab",
        t.EVENT_PLAY_WORD_EFFECT = "backflow.playWordEffect",
        t
    } ();
    t.EventConst = i,
    __reflect(i.prototype, "backflow.EventConst")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "BackflowPanel5Skin",
            i.service = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.update(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.rbg = new eui.RadioButtonGroup,
            this.rbPet.group = this.rbg,
            this.rbGift.group = this.rbg,
            this.rbPet.selected = !0,
            this.onChangeTab(),
            this.numRecharge = this.service.getValue(2794) - this.service.getValue(2795),
            this.numRecharge = Math.max(this.numRecharge, 0),
            this.numRecharge = Math.min(this.numRecharge, 99999),
            this.txtRecharge.text = "我已累计兑钻" + this.numRecharge + "钻石";
            for (var t = function(t) {
                e["imgItem" + t].source = ClientConfig.getItemIcon(1725067 + t),
                ImageButtonUtil.add(e["imgItem" + t],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: 1725067 + t
                    })
                },
                e)
            },
            e = this, i = 1; 8 >= i; i++) t(i);
            var n = SpineUtil.createAnimate("huiliu_p5");
            n.play("ani_loopbox_p5"),
            this.addChild(n),
            n.x = 130,
            n.y = 10
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.rbg.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            ImageButtonUtil.add(this.btnRecharge, PayManager.rechargeDiamond, this);
            for (var i = [300, 800, 1500, 2400], n = function(n) {
                ImageButtonUtil.add(r["btnGet" + n],
                function() {
                    e.numRecharge < i[n - 1] ? BubblerManager.getInstance().showText("很抱歉，未达到领取条件，无法领取折扣券！") : SocketConnection.sendByQueue(41448, [6, n],
                    function() {
                        e.service.updateSomeValues([121543]).then(function() {
                            e.update()
                        })
                    })
                },
                r),
                ImageButtonUtil.add(r["btnPet" + n],
                function() {
                    e.service.openPop(new t.BuyPetPop(n, e.service), !1, null, null, null, e)
                },
                r),
                ImageButtonUtil.add(r["btnGift" + n],
                function() {
                    e.service.openPop(new t.BuyGiftPop(n, e.service), !1, null, null, null, e)
                },
                r)
            },
            r = this, o = 1; 4 >= o; o++) n(o);
            EventManager.addEventListener(t.EventConst.EVENT_AFTER_BUY,
            function() {
                e.service.updateSomeValues([121543]).then(function() {
                    e.update()
                })
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            var t = this.rbg.selectedValue || 1;
            this.groupPet.visible = 1 == t,
            this.groupGift.visible = 2 == t
        },
        i.prototype.update = function() {
            for (var t = 1; 4 >= t; t++) {
                var e = !!KTool.getBit(this.service.getValue(121543), 16 + t);
                this["imgHasGet" + t].visible = e,
                DisplayUtil.setEnabled(this["btnGet" + t], !e, !1),
                e = !!KTool.getBit(this.service.getValue(121543), 20 + t),
                this["imgHasPet" + t].visible = e,
                DisplayUtil.setEnabled(this["btnPet" + t], !e, !1),
                e = !!KTool.getBit(this.service.getValue(121543), 24 + t),
                this["imgHasGift" + t].visible = e,
                DisplayUtil.setEnabled(this["btnGift" + t], !e, !1)
            }
        },
        i.prototype.reshow = function() {
            var t = this;
            this.service.updateSomeValues([2794, 2795]).then(function() {
                t.numRecharge = t.service.getValue(2794) - t.service.getValue(2795),
                t.numRecharge = Math.max(t.numRecharge, 0),
                t.numRecharge = Math.min(t.numRecharge, 99999),
                t.txtRecharge.text = "我已累计兑钻" + t.numRecharge + "钻石"
            })
        },
        i.prototype.onShow = function() {
            egret.lifecycle.stage.touchChildren = !1,
            egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 500),
            gsap.from(this.groupLeft, {
                x: -300,
                alpha: 0,
                duration: .5,
                ease: Quad.easeOut
            }),
            gsap.from(this.groupRight, {
                x: 700,
                alpha: 0,
                duration: .5,
                ease: Quad.easeOut
            })
        },
        i
    } (eui.Component);
    t.Panel5 = e,
    __reflect(e.prototype, "backflow.Panel5")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.arrWord = ["如果你想要通过攻克活动中的关卡来获得想要的精灵，那么组建一个专攻BOSS的阵容就十分必要了！\n你可以根据难度，从易到难开始你的PVE精灵获取之路！", "如果你想要在巅峰圣战中与其他赛尔进行切磋，那么组建这样的阵容是基本功。\n当然，精灵阵容推荐仅供参考，选择适合自己的精灵在战斗中提升技巧才是关键！"],
            i.arrPetId = [3460, 3437, 3894, 3022, 2724, 5e3, 3414, 3577, 4275, 3033],
            i.skinName = "BackflowPanel6Skin",
            i.service = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.rbg = new eui.RadioButtonGroup,
            this.rbPVE.group = this.rbg,
            this.rbPVP.group = this.rbg;
            for (var t = 1; 10 >= t; t++) this["imgHas" + t].visible = PetManager.hasPet(this.arrPetId[t - 1]);
            this.rbPVE.selected = !0,
            this.onChangeTab()
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.rbg.addEventListener(egret.Event.CHANGE,
            function() {
                e.onChangeTab(),
                e.onShow()
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["imgPet" + i],
                function() {
                    if (e["imgHas" + i].visible) BubblerManager.getInstance().showText("你已经获得了该精灵，快去收集其他喜欢的精灵吧！");
                    else {
                        var n = [void 0, 65, 126, 113, 69, 0, 87, 92, 93, 151, 0];
                        0 == n[i] ? EventManager.dispatchEventWith(t.EventConst.EVENT_CHANGE_TAB, !1, 5) : ModuleManager.showModuleByID(n[i], {
                            Design: 12
                        },
                        AppDoStyle.HIDEN)
                    }
                },
                n)
            },
            n = this, r = 1; 10 >= r; r++) i(r);
            ImageButtonUtil.add(this.btnMore,
            function() {
                ModuleManager.showModule("handbook", ["handbook"], {
                    type: 0,
                    sub: 2
                },
                "HandbookFrame")
            },
            this),
            this.ani = SpineUtil.createAnimate("huiliu_p6"),
            this.ani.play("ani_p6"),
            this.addChild(this.ani),
            this.ani.x = 520,
            this.ani.y = 268
        },
        i.prototype.onChangeTab = function() {
            var t = this.rbg.selectedValue || 1;
            this.txtWord.text = this.arrWord[t - 1],
            this.groupPve.visible = 1 == t,
            this.groupPvp.visible = 2 == t
        },
        i.prototype.onShow = function() {
            var t = this;
            this.ani.alpha = 0,
            egret.Tween.removeTweens(this.ani);
            var e = this.groupPve.visible ? this.groupPve: this.groupPvp;
            egret.lifecycle.stage.touchChildren = !1,
            gsap.from(e.$children, {
                y: -500,
                alpha: 0,
                stagger: .05,
                ease: Quad.easeOut
            }).then(function() {
                egret.lifecycle.stage.touchChildren = !0,
                egret.Tween.get(t.ani).to({
                    alpha: 1
                },
                1e3)
            })
        },
        i
    } (eui.Component);
    t.Panel6 = e,
    __reflect(e.prototype, "backflow.Panel6")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.arrCouponId = [1725072, 1725073, 1725074, 1725075],
            n.arrGift = [[300700, 1, 300136, 1, 300670, 2, 300667, 2, 300063, 1, 300791, 1], [1706826, 1, 1706924, 3, 1706925, 3, 1706926, 3, 1706927, 200, 1706928, 200], [300744, 1, 300745, 1, 300762, 1], [40747, 40748, 40749, 40750, 40751]],
            n.skinName = "BackflowBuyGiftPopSkin",
            n.index = t,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            for (var t = this.arrGift[this.index - 1], e = function(e) {
                if (!t.length) return i["groupGiftItem" + e].visible = !1,
                "continue";
                var n;
                4 == i.index ? (n = t.shift(), i["imgGiftItem" + e].source = ClientConfig.getMarkPath(n), i["txtGiftItem" + e].text = "", ImageButtonUtil.add(i["imgGiftItem" + e],
                function() {
                    tipsPop.TipsPop.openCounterMarkPop({
                        ins: n
                    })
                },
                i)) : (n = [t.shift(), t.shift()], i["imgGiftItem" + e].source = ClientConfig.getItemIcon(n[0]), i["txtGiftItem" + e].text = n[1] + "", ImageButtonUtil.add(i["imgGiftItem" + e],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: n[0]
                    })
                },
                i))
            },
            i = this, n = 1; 6 >= n; n++) e(n);
            for (var r = 0,
            n = 1; 4 >= n; n++) {
                this["imgItem" + n].source = ClientConfig.getItemIcon(this.arrCouponId[n - 1]);
                var o = !!ItemManager.getNumByID(this.arrCouponId[n - 1]),
                a = !ItemManager.getNumByID(this.arrCouponId[n - 1]),
                s = o && !a;
                this["imgFlag" + n].visible = !s,
                this["imgFlag" + n].source = o ? "backflow_buy_pet_pop_imghasuse_png": "backflow_buy_pet_pop_imgnothas_png",
                s ? r = n: DisplayUtil.setEnabled(this["imgItem" + n], !1, !1)
            }
            this.selectCoupon(r)
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = function(t) {
                ImageButtonUtil.add(n["imgItem" + t],
                function() {
                    e.selectCoupon(t)
                },
                n, !1, !1)
            },
            n = this, r = 1; 4 >= r; r++) i(r);
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(259991 + e.index, e.curPrice,
                    function() {
                        SocketConnection.sendByQueue(41448, [8, 10 * e.index + e.curCouponIndex || 0],
                        function() {
                            e.hide(),
                            EventManager.dispatchEventWith(t.EventConst.EVENT_AFTER_BUY)
                        })
                    })
                },
                e)
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.selectCoupon = function(t) {
            t == this.curCouponIndex && (t = 0),
            this.curCouponIndex = t;
            for (var e = 1; 4 >= e; e++) this["imgSelect" + e].visible = e == t;
            this.txtCurUse.visible = !!this.curCouponIndex,
            this.txtCurUse.text = "当前使用：回归商城道具" + [9, 8, 6, 5][this.curCouponIndex - 1] + "折券",
            this.txtOldPrice.text = [480, 1170, 798, 1490][this.index - 1] + "钻石",
            this.curPrice = [[480, 432, 384, 288, 240], [1170, 1053, 936, 702, 585], [798, 718, 638, 478, 399], [1490, 1341, 1192, 894, 745]][this.index - 1][this.curCouponIndex],
            this.txtCurPrice.text = this.curPrice + "钻石"
        },
        i
    } (PopView);
    t.BuyGiftPop = e,
    __reflect(e.prototype, "backflow.BuyGiftPop")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            var n = e.call(this) || this;
            return n.arrCouponId = [1725068, 1725069, 1725070, 1725071],
            n.skinName = "BackflowBuyPetPopSkin",
            n.index = t,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.imgPet.source = "backflow_buy_pet_pop_imgpet" + this.index + "_png";
            for (var t = 0,
            e = 1; 4 >= e; e++) {
                this["imgItem" + e].source = ClientConfig.getItemIcon(this.arrCouponId[e - 1]);
                var i = !!ItemManager.getNumByID(this.arrCouponId[e - 1]),
                n = !ItemManager.getNumByID(this.arrCouponId[e - 1]),
                r = i && !n;
                this["imgFlag" + e].visible = !r,
                this["imgFlag" + e].source = i ? "backflow_buy_pet_pop_imghasuse_png": "backflow_buy_pet_pop_imgnothas_png",
                r ? t = e: DisplayUtil.setEnabled(this["imgItem" + e], !1, !1)
            }
            this.selectCoupon(t)
        },
        i.prototype.addEvent = function() {
            for (var e = this,
            i = function(t) {
                ImageButtonUtil.add(n["imgItem" + t],
                function() {
                    e.selectCoupon(t)
                },
                n, !1, !1)
            },
            n = this, r = 1; 4 >= r; r++) i(r);
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(259987 + e.index, e.curPrice,
                    function() {
                        SocketConnection.sendByQueue(41448, [7, 10 * e.index + e.curCouponIndex || 0],
                        function() {
                            e.hide(),
                            EventManager.dispatchEventWith(t.EventConst.EVENT_AFTER_BUY)
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.imgPet,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: [2724, 3141, 3107, 3033][e.index - 1],
                    type: "pet"
                },
                "", AppDoStyle.NULL)
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i.prototype.selectCoupon = function(t) {
            t == this.curCouponIndex && (t = 0),
            this.curCouponIndex = t;
            for (var e = 1; 4 >= e; e++) this["imgSelect" + e].visible = e == t;
            this.txtCurUse.visible = !!this.curCouponIndex,
            this.txtCurUse.text = "当前使用：回归商城精灵" + [9, 8, 7, 6][this.curCouponIndex - 1] + "折券",
            this.txtOldPrice.text = [698, 998, 798, 998][this.index - 1] + "钻石",
            this.curPrice = [[698, 628, 558, 488, 418], [998, 898, 798, 698, 598], [798, 718, 638, 558, 478], [998, 898, 798, 698, 598]][this.index - 1][this.curCouponIndex],
            this.txtCurPrice.text = this.curPrice + "钻石"
        },
        i
    } (PopView);
    t.BuyPetPop = e,
    __reflect(e.prototype, "backflow.BuyPetPop")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "BackflowFirePopSkin",
            i.service = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            StatLogger.log("2023老兵回归", "H5端", "打开战斗火焰弹窗"),
            this.update(),
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var e = function(e) {
                ImageButtonUtil.add(i["btnGet" + e],
                function() {
                    Alert.show("每日仅有1次免费领取的机会，是否领取该战斗火焰？",
                    function() {
                        SocketConnection.sendByQueue(41448, [4, e],
                        function() {
                            t.service.updateSomeValues([201517]).then(function() {
                                t.update()
                            })
                        })
                    })
                },
                i)
            },
            i = this, n = 1; 4 >= n; n++) e(n)
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e.prototype.update = function() {
            var t = this.service.getValue(201517) >> 8 & 255;
            if (t > 0) for (var e = 1; 4 >= e; e++) t == e ? (DisplayUtil.setEnabled(this["btnGet" + e], !1, !1), this["btnGet" + e].source = "backflow_pet_pop_imghasget_png", this["btnGet" + e].height = 24) : DisplayUtil.setEnabled(this["btnGet" + e], !1, !0)
        },
        e
    } (PopView);
    t.FirePop = e,
    __reflect(e.prototype, "backflow.FirePop")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "BackflowOpenPop1Skin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var e = this;
            StatLogger.log("2023老兵回归", "H5端", "进入回归强弹面板"),
            ImageButtonUtil.add(this, this.hide, this, !1, !1);
            var i = SpineUtil.createAnimate("saierhao");
            i.play("ani_saierhao"),
            this.addChildAt(i, 0),
            i.x = 470,
            i.y = 320,
            this.img.visible = this.txt.visible = !1,
            egret.setTimeout(function() {
                e.img.visible = e.txt.visible = !0,
                EventManager.dispatchEventWith(t.EventConst.EVENT_PLAY_WORD_EFFECT, !1, {
                    rect: e.img,
                    word: e.txt
                })
            },
            null, 200)
        },
        i.prototype.destroy = function() {
            EventManager.dispatchEventWith(t.EventConst.EVENT_CLOSE_POP1),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.OpenPop1 = e,
    __reflect(e.prototype, "backflow.OpenPop1")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "BackflowOpenPop2Skin",
            i.service = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide(),
                t.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                t.service.backToMainPanel(),
                t.hide()
            },
            this)
        },
        e
    } (PopView);
    t.OpenPop2 = e,
    __reflect(e.prototype, "backflow.OpenPop2")
} (backflow || (backflow = {}));
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
backflow; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "BackflowPetPopSkin",
            i.service = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var t = this;
            StatLogger.log("2023老兵回归", "H5端", "打开巅峰精灵弹窗"),
            this.update();
            var e = this.service.getValue(121544),
            i = 0;
            this.txtTime.text = "累计在线：" + Math.min(Math.floor((e + i) / 60), 300) + "/300分钟",
            this.interval = egret.setInterval(function() {
                i++,
                t.txtTime.text = "累计在线：" + Math.min(Math.floor((e + i) / 60), 300) + "/300分钟"
            },
            this, 1e3),
            ImageButtonUtil.add(this.btnClose, this.hide, this);
            for (var n = function(n) {
                ImageButtonUtil.add(r["btnGet" + n],
                function() {
                    18e3 > e + i ? BubblerManager.getInstance().showText("累计在线时长不足300分钟，暂时无法领取！") : Alert.show("你仅有1次领取巅峰精灵的机会，是否领取该精灵？",
                    function() {
                        SocketConnection.sendByQueue(41448, [5, n],
                        function() {
                            t.service.updateSomeValues([121543]).then(function() {
                                t.update()
                            })
                        })
                    })
                },
                r),
                ImageButtonUtil.add(r["imgPet" + n],
                function() {
                    ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                        data: [3591, 3380, 3701][n - 1],
                        type: "pet"
                    },
                    "", AppDoStyle.NULL)
                },
                r),
                ImageButtonUtil.add(r["imgMark" + n],
                function() {
                    t.service.showMarkInfo([41210, 40953, 41355][n - 1])
                },
                r)
            },
            r = this, o = 1; 3 >= o; o++) n(o)
        },
        e.prototype.destroy = function() {
            egret.clearInterval(this.interval),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e.prototype.update = function() {
            if (this.service.getValue(121543) >> 10 & 7) for (var t = 1; 3 >= t; t++) KTool.getBit(this.service.getValue(121543), 10 + t) ? (DisplayUtil.setEnabled(this["btnGet" + t], !1, !1), this["btnGet" + t].source = "backflow_pet_pop_imghasget_png") : DisplayUtil.setEnabled(this["btnGet" + t], !1, !0)
        },
        e
    } (PopView);
    t.PetPop = e,
    __reflect(e.prototype, "backflow.PetPop")
} (backflow || (backflow = {}));
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
generateEUI.paths["resource/eui_skins/item/BackflowGiftItemSkin.exml"] = window.BackflowGiftItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "btn", "groupTag", "imgItem1", "imgItem2", "imgItem3", "imgItem4", "imgItem5", "imgItem6", "btnInfo", "txtItem1", "txtItem2", "txtItem3", "txtItem4", "txtItem5", "txtItem6"],
        this.height = 460,
        this.width = 275,
        this.elementsContent = [this.imgBG_i(), this.btn_i(), this.groupTag_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgItem4_i(), this.imgItem5_i(), this.imgItem6_i(), this.btnInfo_i(), this.txtItem1_i(), this.txtItem2_i(), this.txtItem3_i(), this.txtItem4_i(), this.txtItem5_i(), this.txtItem6_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btn_i = function() {
        var t = new eui.Image;
        return this.btn = t,
        t.horizontalCenter = 0,
        t.maxWidth = 269.6,
        t.verticalCenter = 183,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.horizontalCenter = 0,
        t.y = 275,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 31,
        t.y = 241,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 107,
        t.y = 241,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 183,
        t.y = 241,
        t
    },
    i.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 50,
        t.width = 50,
        t.x = 31,
        t.y = 317,
        t
    },
    i.imgItem5_i = function() {
        var t = new eui.Image;
        return this.imgItem5 = t,
        t.height = 50,
        t.width = 50,
        t.x = 107,
        t.y = 317,
        t
    },
    i.imgItem6_i = function() {
        var t = new eui.Image;
        return this.imgItem6 = t,
        t.height = 50,
        t.width = 50,
        t.x = 183,
        t.y = 317,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "backflow_panel3_btninfo_png",
        t.visible = !0,
        t.x = 204,
        t.y = 77,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 188,
        t.size = 16,
        t.y = 283,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 112,
        t.size = 16,
        t.y = 283,
        t
    },
    i.txtItem3_i = function() {
        var t = new eui.Label;
        return this.txtItem3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 36,
        t.size = 16,
        t.y = 283,
        t
    },
    i.txtItem4_i = function() {
        var t = new eui.Label;
        return this.txtItem4 = t,
        t.fontFamily = "MFShangHei",
        t.right = 188,
        t.size = 16,
        t.y = 358,
        t
    },
    i.txtItem5_i = function() {
        var t = new eui.Label;
        return this.txtItem5 = t,
        t.fontFamily = "MFShangHei",
        t.right = 112,
        t.size = 16,
        t.y = 359,
        t
    },
    i.txtItem6_i = function() {
        var t = new eui.Label;
        return this.txtItem6 = t,
        t.fontFamily = "MFShangHei",
        t.right = 36,
        t.size = 16,
        t.y = 359,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BackflowTaskItemSkin.exml"] = window.BackflowTaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btn", "imgItem1", "imgItem2", "txtItem1", "txtItem2", "txt2", "txt1"],
        this.height = 110,
        this.width = 720,
        this.elementsContent = [this._Image1_i(), this.btn_i(), this.imgItem1_i(), this.imgItem2_i(), this.txtItem1_i(), this.txtItem2_i(), this.txt2_i(), this.txt1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_task_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btn_i = function() {
        var t = new eui.Image;
        return this.btn = t,
        t.horizontalCenter = 277,
        t.verticalCenter = 0,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 420,
        t.y = 32,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 496,
        t.y = 32,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 245,
        t.size = 16,
        t.y = 75,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 169,
        t.size = 16,
        t.x = 542,
        t.y = 75,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.textColor = 13234687,
        t.width = 372,
        t.x = 23,
        t.y = 59,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "REEJI",
        t.size = 18,
        t.textColor = 16645990,
        t.x = 24,
        t.y = 25,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowMainPanelSkin.exml"] = window.BackflowMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["groupPanel", "rb1", "rb2", "rb3", "rb4", "rb5", "rb6", "txtEndTime"],
        this.height = 640,
        this.width = 1472,
        this.elementsContent = [this.groupPanel_i(), this._Group1_i(), this.txtEndTime_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["imgRedDot"],
            this.elementsContent = [this._Image1_i(), this.imgRedDot_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 6), new eui.SetProperty("_Image1", "verticalCenter", 2)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown1_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup1_png",
            t
        },
        i.imgRedDot_i = function() {
            var t = new eui.Image;
            return this.imgRedDot = t,
            t.height = 20,
            t.right = 28,
            t.source = "dot_png",
            t.top = 3,
            t.width = 20,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["imgRedDot"],
            this.elementsContent = [this._Image1_i(), this.imgRedDot_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 6), new eui.SetProperty("_Image1", "verticalCenter", 3)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown2_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup2_png",
            t
        },
        i.imgRedDot_i = function() {
            var t = new eui.Image;
            return this.imgRedDot = t,
            t.height = 20,
            t.right = 28,
            t.source = "dot_png",
            t.top = 3,
            t.width = 20,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["imgRedDot"],
            this.elementsContent = [this._Image1_i(), this.imgRedDot_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 6), new eui.SetProperty("_Image1", "verticalCenter", 2)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown3_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup3_png",
            t
        },
        i.imgRedDot_i = function() {
            var t = new eui.Image;
            return this.imgRedDot = t,
            t.height = 20,
            t.right = 28,
            t.source = "dot_png",
            t.top = 3,
            t.width = 20,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["imgRedDot"],
            this.elementsContent = [this._Image1_i(), this.imgRedDot_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 7), new eui.SetProperty("_Image1", "verticalCenter", 3)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown4_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup4_png",
            t
        },
        i.imgRedDot_i = function() {
            var t = new eui.Image;
            return this.imgRedDot = t,
            t.height = 20,
            t.right = 28,
            t.source = "dot_png",
            t.top = 3,
            t.width = 20,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["imgRedDot"],
            this.elementsContent = [this._Image1_i(), this.imgRedDot_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 7), new eui.SetProperty("_Image1", "verticalCenter", 3)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown5_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup5_png",
            t
        },
        i.imgRedDot_i = function() {
            var t = new eui.Image;
            return this.imgRedDot = t,
            t.height = 20,
            t.right = 28,
            t.source = "dot_png",
            t.top = 3,
            t.width = 20,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "horizontalCenter", 7), new eui.SetProperty("_Image1", "verticalCenter", 3)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel1_imgbtndown6_png"), new eui.SetProperty("_Image1", "horizontalCenter", 0), new eui.SetProperty("_Image1", "verticalCenter", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.source = "backflow_panel1_imgbtnup6_png",
            t
        },
        e
    } (eui.Skin),
    u = e.prototype;
    return u.groupPanel_i = function() {
        var t = new eui.Group;
        return this.groupPanel = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    u._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -5,
        t.visible = !0,
        t.y = 576,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.rb1_i(), this.rb2_i(), this.rb3_i(), this.rb4_i(), this.rb5_i(), this.rb6_i()],
        t
    },
    u._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 2,
        t
    },
    u.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.height = 49,
        t.value = "1",
        t.width = 183,
        t.skinName = i,
        t
    },
    u.rb2_i = function() {
        var t = new eui.RadioButton;
        return this.rb2 = t,
        t.height = 49,
        t.value = "2",
        t.width = 183,
        t.skinName = n,
        t
    },
    u.rb3_i = function() {
        var t = new eui.RadioButton;
        return this.rb3 = t,
        t.height = 49,
        t.value = "3",
        t.width = 183,
        t.skinName = r,
        t
    },
    u.rb4_i = function() {
        var t = new eui.RadioButton;
        return this.rb4 = t,
        t.height = 49,
        t.value = "4",
        t.width = 183,
        t.skinName = o,
        t
    },
    u.rb5_i = function() {
        var t = new eui.RadioButton;
        return this.rb5 = t,
        t.height = 49,
        t.value = "5",
        t.width = 183,
        t.skinName = a,
        t
    },
    u.rb6_i = function() {
        var t = new eui.RadioButton;
        return this.rb6 = t,
        t.height = 49,
        t.value = "6",
        t.width = 183,
        t.skinName = s,
        t
    },
    u.txtEndTime_i = function() {
        var t = new eui.Label;
        return this.txtEndTime = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 449,
        t.size = 20,
        t.text = "距离活动结束剩余21天",
        t.textColor = 12110079,
        t.visible = !0,
        t.y = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel1Skin.exml"] = window.BackflowPanel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItemBG1", "imgItemBG2", "imgItemBG3", "imgItemBG4", "imgItemBG5", "imgItemBG6", "imgItemBG7", "imgItemBG8", "imgItemBG9", "imgItemBG10", "imgItemBG11", "imgItemBG12", "imgItem1", "imgItem2", "imgItem3", "imgItem4", "imgItem5", "imgItem6", "imgItem7", "imgItem8", "imgItem9", "imgItem10", "imgItem11", "imgItem12", "txtItem1", "txtItem2", "txtItem3", "txtItem4", "txtItem5", "txtItem6", "txtItem7", "txtItem8", "txtItem9", "txtItem10", "txtItem11", "txtItem12", "imgRect1", "imgRect2", "imgHasGet", "btnGet", "txtWord1", "txtWord2"],
        this.height = 529,
        this.width = 1225,
        this.elementsContent = [this._Group1_i(), this.imgRect1_i(), this.imgRect2_i(), this.imgHasGet_i(), this.btnGet_i(), this.txtWord1_i(), this.txtWord2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 255,
        t.visible = !0,
        t.width = 1168,
        t.y = 183,
        t.elementsContent = [this.imgItemBG1_i(), this.imgItemBG2_i(), this.imgItemBG3_i(), this.imgItemBG4_i(), this.imgItemBG5_i(), this.imgItemBG6_i(), this.imgItemBG7_i(), this.imgItemBG8_i(), this.imgItemBG9_i(), this.imgItemBG10_i(), this.imgItemBG11_i(), this.imgItemBG12_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgItem4_i(), this.imgItem5_i(), this.imgItem6_i(), this.imgItem7_i(), this.imgItem8_i(), this.imgItem9_i(), this.imgItem10_i(), this.imgItem11_i(), this.imgItem12_i(), this.txtItem1_i(), this.txtItem2_i(), this.txtItem3_i(), this.txtItem4_i(), this.txtItem5_i(), this.txtItem6_i(), this.txtItem7_i(), this.txtItem8_i(), this.txtItem9_i(), this.txtItem10_i(), this.txtItem11_i(), this.txtItem12_i()],
        t
    },
    i.imgItemBG1_i = function() {
        var t = new eui.Image;
        return this.imgItemBG1 = t,
        t.horizontalCenter = -481,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = -1,
        t.visible = !0,
        t
    },
    i.imgItemBG2_i = function() {
        var t = new eui.Image;
        return this.imgItemBG2 = t,
        t.horizontalCenter = -399,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 47,
        t
    },
    i.imgItemBG3_i = function() {
        var t = new eui.Image;
        return this.imgItemBG3 = t,
        t.horizontalCenter = -298,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 30,
        t
    },
    i.imgItemBG4_i = function() {
        var t = new eui.Image;
        return this.imgItemBG4 = t,
        t.horizontalCenter = -215,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = -3,
        t
    },
    i.imgItemBG5_i = function() {
        var t = new eui.Image;
        return this.imgItemBG5 = t,
        t.horizontalCenter = -118,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = -20,
        t
    },
    i.imgItemBG6_i = function() {
        var t = new eui.Image;
        return this.imgItemBG6 = t,
        t.horizontalCenter = -30,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 14,
        t
    },
    i.imgItemBG7_i = function() {
        var t = new eui.Image;
        return this.imgItemBG7 = t,
        t.horizontalCenter = 61,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 51,
        t
    },
    i.imgItemBG8_i = function() {
        var t = new eui.Image;
        return this.imgItemBG8 = t,
        t.horizontalCenter = 159,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 82,
        t
    },
    i.imgItemBG9_i = function() {
        var t = new eui.Image;
        return this.imgItemBG9 = t,
        t.horizontalCenter = 258,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 67,
        t
    },
    i.imgItemBG10_i = function() {
        var t = new eui.Image;
        return this.imgItemBG10 = t,
        t.horizontalCenter = 348,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 42,
        t
    },
    i.imgItemBG11_i = function() {
        var t = new eui.Image;
        return this.imgItemBG11 = t,
        t.horizontalCenter = 435,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 17,
        t
    },
    i.imgItemBG12_i = function() {
        var t = new eui.Image;
        return this.imgItemBG12 = t,
        t.horizontalCenter = 536,
        t.source = "backflow_panel1_imgitembg_png",
        t.verticalCenter = 8,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 75,
        t.y = 99,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 158,
        t.y = 147,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 259,
        t.y = 129,
        t
    },
    i.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 50,
        t.width = 50,
        t.x = 342,
        t.y = 97,
        t
    },
    i.imgItem5_i = function() {
        var t = new eui.Image;
        return this.imgItem5 = t,
        t.height = 50,
        t.width = 50,
        t.x = 440,
        t.y = 80,
        t
    },
    i.imgItem6_i = function() {
        var t = new eui.Image;
        return this.imgItem6 = t,
        t.height = 50,
        t.width = 50,
        t.x = 527,
        t.y = 115,
        t
    },
    i.imgItem7_i = function() {
        var t = new eui.Image;
        return this.imgItem7 = t,
        t.height = 50,
        t.width = 50,
        t.x = 618,
        t.y = 152,
        t
    },
    i.imgItem8_i = function() {
        var t = new eui.Image;
        return this.imgItem8 = t,
        t.height = 50,
        t.width = 50,
        t.x = 717,
        t.y = 183,
        t
    },
    i.imgItem9_i = function() {
        var t = new eui.Image;
        return this.imgItem9 = t,
        t.height = 50,
        t.width = 50,
        t.x = 816,
        t.y = 166,
        t
    },
    i.imgItem10_i = function() {
        var t = new eui.Image;
        return this.imgItem10 = t,
        t.height = 50,
        t.width = 50,
        t.x = 906,
        t.y = 144,
        t
    },
    i.imgItem11_i = function() {
        var t = new eui.Image;
        return this.imgItem11 = t,
        t.height = 50,
        t.width = 50,
        t.x = 992,
        t.y = 118,
        t
    },
    i.imgItem12_i = function() {
        var t = new eui.Image;
        return this.imgItem12 = t,
        t.height = 50,
        t.width = 50,
        t.x = 1094,
        t.y = 108,
        t
    },
    i.txtItem1_i = function() {
        var t = new eui.Label;
        return this.txtItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 1040,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 137,
        t
    },
    i.txtItem2_i = function() {
        var t = new eui.Label;
        return this.txtItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 958,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 185,
        t
    },
    i.txtItem3_i = function() {
        var t = new eui.Label;
        return this.txtItem3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 857,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 167,
        t
    },
    i.txtItem4_i = function() {
        var t = new eui.Label;
        return this.txtItem4 = t,
        t.fontFamily = "MFShangHei",
        t.right = 776,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 135,
        t
    },
    i.txtItem5_i = function() {
        var t = new eui.Label;
        return this.txtItem5 = t,
        t.fontFamily = "MFShangHei",
        t.right = 678,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 118,
        t
    },
    i.txtItem6_i = function() {
        var t = new eui.Label;
        return this.txtItem6 = t,
        t.fontFamily = "MFShangHei",
        t.right = 591,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 153,
        t
    },
    i.txtItem7_i = function() {
        var t = new eui.Label;
        return this.txtItem7 = t,
        t.fontFamily = "MFShangHei",
        t.right = 499,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 190,
        t
    },
    i.txtItem8_i = function() {
        var t = new eui.Label;
        return this.txtItem8 = t,
        t.fontFamily = "MFShangHei",
        t.right = 401,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 221,
        t
    },
    i.txtItem9_i = function() {
        var t = new eui.Label;
        return this.txtItem9 = t,
        t.fontFamily = "MFShangHei",
        t.right = 299,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 204,
        t
    },
    i.txtItem10_i = function() {
        var t = new eui.Label;
        return this.txtItem10 = t,
        t.fontFamily = "MFShangHei",
        t.right = 214,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 182,
        t
    },
    i.txtItem11_i = function() {
        var t = new eui.Label;
        return this.txtItem11 = t,
        t.fontFamily = "MFShangHei",
        t.right = 127,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 156,
        t
    },
    i.txtItem12_i = function() {
        var t = new eui.Label;
        return this.txtItem12 = t,
        t.fontFamily = "MFShangHei",
        t.right = 24,
        t.size = 16,
        t.textColor = 16773192,
        t.y = 146,
        t
    },
    i.imgRect1_i = function() {
        var t = new eui.Image;
        return this.imgRect1 = t,
        t.anchorOffsetX = 389,
        t.anchorOffsetY = 179,
        t.height = 179,
        t.source = "backflow_panel1_imgrect_png",
        t.visible = !0,
        t.width = 389,
        t.x = 470,
        t.y = 200,
        t
    },
    i.imgRect2_i = function() {
        var t = new eui.Image;
        return this.imgRect2 = t,
        t.anchorOffsetX = 389,
        t.anchorOffsetY = 179,
        t.height = 179,
        t.scaleX = -1,
        t.source = "backflow_panel1_imgrect_png",
        t.visible = !0,
        t.width = 389,
        t.x = 672,
        t.y = 215,
        t
    },
    i.imgHasGet_i = function() {
        var t = new eui.Image;
        return this.imgHasGet = t,
        t.source = "backflow_panel1_imghasget_png",
        t.visible = !0,
        t.x = 524,
        t.y = 400,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "backflow_panel1_btnget_png",
        t.visible = !0,
        t.x = 519,
        t.y = 394,
        t
    },
    i.txtWord1_i = function() {
        var t = new eui.Label;
        return this.txtWord1 = t,
        t.fontFamily = "REEJI",
        t.height = 100,
        t.size = 20,
        t.text = "0000年00月00日\n自这天起，已经很久没有看到你了\n0000天后的今天\n带着激情和对荣耀的渴望\n你又重新回到了这片星空",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 310,
        t.x = 117,
        t.y = 55,
        t
    },
    i.txtWord2_i = function() {
        var t = new eui.Label;
        return this.txtWord2 = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "终于等到你，真好！\n相信在回归活动的帮助下\n你能很快重回往日的荣光\n请收下这份为你精心准备的礼物吧！",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.visible = !0,
        t.width = 322,
        t.x = 719,
        t.y = 83,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel2Skin.exml"] = window.BackflowPanel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnFire", "imgFire", "btnPet", "imgPet", "rect", "txt"],
        this.height = 478,
        this.width = 1042,
        this.elementsContent = [this._Image1_i(), this.imgFire_i(), this.imgPet_i(), this.rect_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel2_bg_png",
        t.visible = !0,
        t.x = 5,
        t.y = 110,
        t
    },
    i.imgFire_i = function() {
        var t = new eui.Group;
        return this.imgFire = t,
        t.x = 465,
        t.y = 9,
        t.elementsContent = [this._Image2_i(), this.btnFire_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 455,
        t.source = "backflow_panel2_img1_png",
        t.width = 273,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFire_i = function() {
        var t = new eui.Image;
        return this.btnFire = t,
        t.source = "backflow_panel2_btnfire_png",
        t.x = 79,
        t.y = 377,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Group;
        return this.imgPet = t,
        t.x = 763,
        t.y = 9,
        t.elementsContent = [this._Image3_i(), this.btnPet_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 455,
        t.source = "backflow_panel2_img2_png",
        t.width = 273,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "backflow_panel2_btnfire_png",
        t.x = 79,
        t.y = 377,
        t
    },
    i.rect_i = function() {
        var t = new eui.Image;
        return this.rect = t,
        t.anchorOffsetX = 191,
        t.anchorOffsetY = 172,
        t.source = "backflow_panel2_imgrect_png",
        t.x = 208,
        t.y = 167,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "REEJI",
        t.height = 105,
        t.size = 20,
        t.text = "为了让回归的赛尔在PVE挑战和PVP对战中更加轻松，现推出专属福利：强化型战斗火焰免费试用、巅峰神宠三选一！",
        t.textAlign = "center",
        t.textColor = 10142963,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 339,
        t.x = 35,
        t.y = 31,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel3Skin.exml"] = window.BackflowPanel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["list"],
        this.height = 460,
        this.width = 1e3,
        this.elementsContent = [this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 460,
        t.width = 1e3,
        t.y = -10,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel4Skin.exml"] = window.BackflowPanel4Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnPet", "btnMark", "list", "rect", "txt"],
        this.elementsContent = [this._Image1_i(), this.btnPet_i(), this.btnMark_i(), this._Scroller1_i(), this.rect_i(), this.txt_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel4_zuodi_png",
        t.x = 0,
        t.y = 95,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "backflow_panel4_btnpet_png",
        t.x = 190,
        t.y = 364,
        t
    },
    i.btnMark_i = function() {
        var t = new eui.Image;
        return this.btnMark = t,
        t.source = "backflow_panel4_btnmark_png",
        t.x = 55,
        t.y = 363,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 496,
        t.width = 720,
        t.x = 344,
        t.y = -15,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 20,
        t
    },
    i.rect_i = function() {
        var t = new eui.Image;
        return this.rect = t,
        t.anchorOffsetX = 175,
        t.anchorOffsetY = 180,
        t.height = 180,
        t.source = "backflow_panel2_imgrect_png",
        t.width = 350,
        t.x = 178,
        t.y = 173,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "当你获得了精灵后，你需要去挑战日常副本来获取养成资源，进行培养后使精灵变得更加强大！\n完成右侧副本任务可额外领取【精灵招募】和【刻印之轮】必备道具哦~",
        t.textAlign = "center",
        t.textColor = 10142963,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.width = 322,
        t.x = 13,
        t.y = 34,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel5Skin.exml"] = window.BackflowPanel5Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgItem8", "imgItem4", "btnGet4", "imgHasGet4", "item4", "imgItem7", "imgItem3", "btnGet3", "imgHasGet3", "item3", "imgItem6", "imgItem2", "btnGet2", "imgHasGet2", "item2", "imgItem5", "imgItem1", "btnGet1", "imgHasGet1", "item1", "btnRecharge", "txtRecharge", "groupLeft", "btnPet1", "btnPet2", "btnPet3", "btnPet4", "imgHasPet1", "imgHasPet2", "imgHasPet3", "imgHasPet4", "groupPet", "btnGift1", "btnGift2", "btnGift3", "btnGift4", "imgHasGift1", "imgHasGift2", "imgHasGift3", "imgHasGift4", "groupGift", "rbPet", "rbGift", "groupRight"],
        this.height = 488,
        this.width = 1072,
        this.elementsContent = [this.groupLeft_i(), this.groupRight_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel5_imgpetdown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "backflow_panel5_imgpetup_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel5_imgitemdown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "backflow_panel5_imgitemup_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.groupLeft_i = function() {
        var t = new eui.Group;
        return this.groupLeft = t,
        t.visible = !0,
        t.x = 0,
        t.y = -15,
        t.elementsContent = [this._Image1_i(), this.item4_i(), this.item3_i(), this.item2_i(), this.item1_i(), this.btnRecharge_i(), this.txtRecharge_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel5_imgleftbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 27,
        t.y = 320,
        t.elementsContent = [this._Image2_i(), this.imgItem8_i(), this.imgItem4_i(), this.btnGet4_i(), this.imgHasGet4_i(), this._Label1_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel5_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgItem8_i = function() {
        var t = new eui.Image;
        return this.imgItem8 = t,
        t.height = 40,
        t.width = 40,
        t.x = 198.852,
        t.y = 13,
        t
    },
    r.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 40,
        t.width = 40,
        t.x = 140.852,
        t.y = 13,
        t
    },
    r.btnGet4_i = function() {
        var t = new eui.Image;
        return this.btnGet4 = t,
        t.source = "backflow_panel5_btnget1_png",
        t.x = 254,
        t.y = 16,
        t
    },
    r.imgHasGet4_i = function() {
        var t = new eui.Image;
        return this.imgHasGet4 = t,
        t.source = "backflow_panel5_imghasget1_png",
        t.x = 265,
        t.y = 15,
        t
    },
    r._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "2400钻石",
        t.textColor = 16775521,
        t.x = 16,
        t.y = 34,
        t
    },
    r.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 27,
        t.y = 240,
        t.elementsContent = [this._Image3_i(), this.imgItem7_i(), this.imgItem3_i(), this.btnGet3_i(), this.imgHasGet3_i(), this._Label2_i()],
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel5_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgItem7_i = function() {
        var t = new eui.Image;
        return this.imgItem7 = t,
        t.height = 40,
        t.width = 40,
        t.x = 198.852,
        t.y = 14,
        t
    },
    r.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 40,
        t.width = 40,
        t.x = 140.852,
        t.y = 14,
        t
    },
    r.btnGet3_i = function() {
        var t = new eui.Image;
        return this.btnGet3 = t,
        t.source = "backflow_panel5_btnget1_png",
        t.x = 254,
        t.y = 16,
        t
    },
    r.imgHasGet3_i = function() {
        var t = new eui.Image;
        return this.imgHasGet3 = t,
        t.source = "backflow_panel5_imghasget1_png",
        t.x = 265,
        t.y = 15,
        t
    },
    r._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "1500钻石",
        t.textColor = 16775521,
        t.x = 16,
        t.y = 34,
        t
    },
    r.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = 27,
        t.y = 161,
        t.elementsContent = [this._Image4_i(), this.imgItem6_i(), this.imgItem2_i(), this.btnGet2_i(), this.imgHasGet2_i(), this._Label3_i()],
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel5_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgItem6_i = function() {
        var t = new eui.Image;
        return this.imgItem6 = t,
        t.height = 40,
        t.width = 40,
        t.x = 198.852,
        t.y = 14,
        t
    },
    r.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 40,
        t.width = 40,
        t.x = 140.852,
        t.y = 14,
        t
    },
    r.btnGet2_i = function() {
        var t = new eui.Image;
        return this.btnGet2 = t,
        t.source = "backflow_panel5_btnget1_png",
        t.x = 254,
        t.y = 16,
        t
    },
    r.imgHasGet2_i = function() {
        var t = new eui.Image;
        return this.imgHasGet2 = t,
        t.source = "backflow_panel5_imghasget1_png",
        t.x = 265,
        t.y = 15,
        t
    },
    r._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "800钻石",
        t.textColor = 16775521,
        t.x = 16,
        t.y = 34,
        t
    },
    r.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 27,
        t.y = 82,
        t.elementsContent = [this._Image5_i(), this.imgItem5_i(), this.imgItem1_i(), this.btnGet1_i(), this.imgHasGet1_i(), this._Label4_i()],
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_panel5_imgitembg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgItem5_i = function() {
        var t = new eui.Image;
        return this.imgItem5 = t,
        t.height = 40,
        t.width = 40,
        t.x = 198.852,
        t.y = 13,
        t
    },
    r.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 40,
        t.width = 40,
        t.x = 140.852,
        t.y = 13,
        t
    },
    r.btnGet1_i = function() {
        var t = new eui.Image;
        return this.btnGet1 = t,
        t.source = "backflow_panel5_btnget1_png",
        t.x = 254,
        t.y = 16,
        t
    },
    r.imgHasGet1_i = function() {
        var t = new eui.Image;
        return this.imgHasGet1 = t,
        t.source = "backflow_panel5_imghasget1_png",
        t.x = 265,
        t.y = 15,
        t
    },
    r._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "300钻石",
        t.textColor = 16775521,
        t.x = 16,
        t.y = 34,
        t
    },
    r.btnRecharge_i = function() {
        var t = new eui.Image;
        return this.btnRecharge = t,
        t.source = "backflow_panel5_btnrecharge_png",
        t.x = 115,
        t.y = 424,
        t
    },
    r.txtRecharge_i = function() {
        var t = new eui.Label;
        return this.txtRecharge = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "我已累计兑钻0000钻石",
        t.textColor = 6739455,
        t.x = 91,
        t.y = 402,
        t
    },
    r.groupRight_i = function() {
        var t = new eui.Group;
        return this.groupRight = t,
        t.visible = !0,
        t.x = 407,
        t.y = 13,
        t.elementsContent = [this.groupPet_i(), this.groupGift_i(), this.rbPet_i(), this.rbGift_i()],
        t
    },
    r.groupPet_i = function() {
        var t = new eui.Group;
        return this.groupPet = t,
        t.visible = !0,
        t.x = 0,
        t.y = 60,
        t.elementsContent = [this.btnPet1_i(), this.btnPet2_i(), this.btnPet3_i(), this.btnPet4_i(), this.imgHasPet1_i(), this.imgHasPet2_i(), this.imgHasPet3_i(), this.imgHasPet4_i()],
        t
    },
    r.btnPet1_i = function() {
        var t = new eui.Image;
        return this.btnPet1 = t,
        t.source = "backflow_panel5_btnpet1_png",
        t.x = 1,
        t.y = 1,
        t
    },
    r.btnPet2_i = function() {
        var t = new eui.Image;
        return this.btnPet2 = t,
        t.source = "backflow_panel5_btnpet2_png",
        t.x = 334,
        t.y = 0,
        t
    },
    r.btnPet3_i = function() {
        var t = new eui.Image;
        return this.btnPet3 = t,
        t.source = "backflow_panel5_btnpet3_png",
        t.x = 0,
        t.y = 200,
        t
    },
    r.btnPet4_i = function() {
        var t = new eui.Image;
        return this.btnPet4 = t,
        t.source = "backflow_panel5_btnpet4_png",
        t.x = 334,
        t.y = 200,
        t
    },
    r.imgHasPet1_i = function() {
        var t = new eui.Image;
        return this.imgHasPet1 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 13,
        t.y = 95,
        t
    },
    r.imgHasPet2_i = function() {
        var t = new eui.Image;
        return this.imgHasPet2 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 347,
        t.y = 95,
        t
    },
    r.imgHasPet3_i = function() {
        var t = new eui.Image;
        return this.imgHasPet3 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 13,
        t.y = 295,
        t
    },
    r.imgHasPet4_i = function() {
        var t = new eui.Image;
        return this.imgHasPet4 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.visible = !0,
        t.x = 347,
        t.y = 295,
        t
    },
    r.groupGift_i = function() {
        var t = new eui.Group;
        return this.groupGift = t,
        t.visible = !1,
        t.x = 1,
        t.y = 60,
        t.elementsContent = [this.btnGift1_i(), this.btnGift2_i(), this.btnGift3_i(), this.btnGift4_i(), this.imgHasGift1_i(), this.imgHasGift2_i(), this.imgHasGift3_i(), this.imgHasGift4_i()],
        t
    },
    r.btnGift1_i = function() {
        var t = new eui.Image;
        return this.btnGift1 = t,
        t.source = "backflow_panel5_btngift1_png",
        t.x = 0,
        t.y = 1,
        t
    },
    r.btnGift2_i = function() {
        var t = new eui.Image;
        return this.btnGift2 = t,
        t.source = "backflow_panel5_btngift2_png",
        t.x = 334,
        t.y = 0,
        t
    },
    r.btnGift3_i = function() {
        var t = new eui.Image;
        return this.btnGift3 = t,
        t.source = "backflow_panel5_btngift3_png",
        t.x = 0,
        t.y = 201,
        t
    },
    r.btnGift4_i = function() {
        var t = new eui.Image;
        return this.btnGift4 = t,
        t.source = "backflow_panel5_btngift4_png",
        t.x = 334,
        t.y = 201,
        t
    },
    r.imgHasGift1_i = function() {
        var t = new eui.Image;
        return this.imgHasGift1 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 13,
        t.y = 95,
        t
    },
    r.imgHasGift2_i = function() {
        var t = new eui.Image;
        return this.imgHasGift2 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 347,
        t.y = 95,
        t
    },
    r.imgHasGift3_i = function() {
        var t = new eui.Image;
        return this.imgHasGift3 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.x = 13,
        t.y = 295,
        t
    },
    r.imgHasGift4_i = function() {
        var t = new eui.Image;
        return this.imgHasGift4 = t,
        t.source = "backflow_panel5_imghaspet1_png",
        t.visible = !0,
        t.x = 347,
        t.y = 295,
        t
    },
    r.rbPet_i = function() {
        var t = new eui.RadioButton;
        return this.rbPet = t,
        t.height = 54,
        t.value = "1",
        t.width = 151,
        t.x = 367,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.rbGift_i = function() {
        var t = new eui.RadioButton;
        return this.rbGift = t,
        t.height = 54,
        t.value = "2",
        t.width = 151,
        t.x = 514,
        t.y = 0,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/BackflowPanel6Skin.exml"] = window.BackflowPanel6Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet1", "imgHas1", "imgPet2", "imgHas2", "imgPet3", "imgHas3", "imgPet4", "imgHas4", "imgPet5", "imgHas5", "groupPve", "imgPet6", "imgHas6", "imgPet7", "imgHas7", "imgPet8", "imgHas8", "imgPet9", "imgHas9", "imgPet10", "imgHas10", "groupPvp", "txtWord", "btnMore", "rbPVE", "rbPVP"],
        this.width = 1067,
        this.elementsContent = [this.groupPve_i(), this.groupPvp_i(), this.txtWord_i(), this.btnMore_i(), this.rbPVE_i(), this.rbPVP_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel6_btnpvedown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "backflow_panel6_btnpveup_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "backflow_panel6_btnpvpdown_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "backflow_panel6_btnpvpup_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.groupPve_i = function() {
        var t = new eui.Group;
        return this.groupPve = t,
        t.visible = !0,
        t.x = 74,
        t.y = -12,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgPet1_i(), this.imgHas1_i()],
        t
    },
    r.imgPet1_i = function() {
        var t = new eui.Image;
        return this.imgPet1 = t,
        t.source = "backflow_panel6_imgpet1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas1_i = function() {
        var t = new eui.Image;
        return this.imgHas1 = t,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 67,
        t.y = 329,
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 199,
        t.y = 27,
        t.elementsContent = [this.imgPet2_i(), this.imgHas2_i()],
        t
    },
    r.imgPet2_i = function() {
        var t = new eui.Image;
        return this.imgPet2 = t,
        t.source = "backflow_panel6_imgpet2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas2_i = function() {
        var t = new eui.Image;
        return this.imgHas2 = t,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 69,
        t.y = 329,
        t
    },
    r._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 398,
        t.y = 0,
        t.elementsContent = [this.imgPet3_i(), this.imgHas3_i()],
        t
    },
    r.imgPet3_i = function() {
        var t = new eui.Image;
        return this.imgPet3 = t,
        t.source = "backflow_panel6_imgpet3_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas3_i = function() {
        var t = new eui.Image;
        return this.imgHas3 = t,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 66,
        t.y = 329,
        t
    },
    r._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 597,
        t.y = 27,
        t.elementsContent = [this.imgPet4_i(), this.imgHas4_i()],
        t
    },
    r.imgPet4_i = function() {
        var t = new eui.Image;
        return this.imgPet4 = t,
        t.source = "backflow_panel6_imgpet4_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas4_i = function() {
        var t = new eui.Image;
        return this.imgHas4 = t,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 67,
        t.y = 329,
        t
    },
    r._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 796,
        t.y = 0,
        t.elementsContent = [this.imgPet5_i(), this.imgHas5_i()],
        t
    },
    r.imgPet5_i = function() {
        var t = new eui.Image;
        return this.imgPet5 = t,
        t.source = "backflow_panel6_imgpet5_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas5_i = function() {
        var t = new eui.Image;
        return this.imgHas5 = t,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 68,
        t.y = 330,
        t
    },
    r.groupPvp_i = function() {
        var t = new eui.Group;
        return this.groupPvp = t,
        t.visible = !0,
        t.x = 74,
        t.y = -12,
        t.elementsContent = [this._Group6_i(), this._Group7_i(), this._Group8_i(), this._Group9_i(), this._Group10_i()],
        t
    },
    r._Group6_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgPet6_i(), this.imgHas6_i()],
        t
    },
    r.imgPet6_i = function() {
        var t = new eui.Image;
        return this.imgPet6 = t,
        t.source = "backflow_panel6_imgpet6_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas6_i = function() {
        var t = new eui.Image;
        return this.imgHas6 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 67,
        t.y = 329,
        t
    },
    r._Group7_i = function() {
        var t = new eui.Group;
        return t.x = 199,
        t.y = 27,
        t.elementsContent = [this.imgPet7_i(), this.imgHas7_i()],
        t
    },
    r.imgPet7_i = function() {
        var t = new eui.Image;
        return this.imgPet7 = t,
        t.source = "backflow_panel6_imgpet7_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas7_i = function() {
        var t = new eui.Image;
        return this.imgHas7 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 69,
        t.y = 329,
        t
    },
    r._Group8_i = function() {
        var t = new eui.Group;
        return t.x = 398,
        t.y = 0,
        t.elementsContent = [this.imgPet8_i(), this.imgHas8_i()],
        t
    },
    r.imgPet8_i = function() {
        var t = new eui.Image;
        return this.imgPet8 = t,
        t.source = "backflow_panel6_imgpet8_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas8_i = function() {
        var t = new eui.Image;
        return this.imgHas8 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 66,
        t.y = 329,
        t
    },
    r._Group9_i = function() {
        var t = new eui.Group;
        return t.x = 597,
        t.y = 27,
        t.elementsContent = [this.imgPet9_i(), this.imgHas9_i()],
        t
    },
    r.imgPet9_i = function() {
        var t = new eui.Image;
        return this.imgPet9 = t,
        t.source = "backflow_panel6_imgpet9_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas9_i = function() {
        var t = new eui.Image;
        return this.imgHas9 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 67,
        t.y = 329,
        t
    },
    r._Group10_i = function() {
        var t = new eui.Group;
        return t.x = 796,
        t.y = 0,
        t.elementsContent = [this.imgPet10_i(), this.imgHas10_i()],
        t
    },
    r.imgPet10_i = function() {
        var t = new eui.Image;
        return this.imgPet10 = t,
        t.source = "backflow_panel6_imgpet10_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgHas10_i = function() {
        var t = new eui.Image;
        return this.imgHas10 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "backflow_panel6_imghas_png",
        t.visible = !0,
        t.x = 68,
        t.y = 330,
        t
    },
    r.txtWord_i = function() {
        var t = new eui.Label;
        return this.txtWord = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "如果你想要通过攻克活动中的关卡来获得想要的精灵，那么组建一个专攻BOSS的阵容就十分必要了！\n你可以根据难度，从易到难开始你的PVE精灵获取之路！",
        t.textColor = 5933796,
        t.visible = !0,
        t.x = 89,
        t.y = 461,
        t
    },
    r.btnMore_i = function() {
        var t = new eui.Image;
        return this.btnMore = t,
        t.source = "backflow_panel6_btnmore_png",
        t.visible = !0,
        t.x = 980,
        t.y = 462,
        t
    },
    r.rbPVE_i = function() {
        var t = new eui.RadioButton;
        return this.rbPVE = t,
        t.height = 139,
        t.value = "1",
        t.visible = !0,
        t.width = 57,
        t.x = 0,
        t.y = 101,
        t.skinName = i,
        t
    },
    r.rbPVP_i = function() {
        var t = new eui.RadioButton;
        return this.rbPVP = t,
        t.height = 140,
        t.value = "2",
        t.visible = !0,
        t.width = 57,
        t.x = 0,
        t.y = 245,
        t.skinName = n,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowBuyGiftPopSkin.exml"] = window.BackflowBuyGiftPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgGiftItem1", "txtGiftItem1", "groupGiftItem1", "imgGiftItem2", "txtGiftItem2", "groupGiftItem2", "imgGiftItem3", "txtGiftItem3", "groupGiftItem3", "imgGiftItem4", "txtGiftItem4", "groupGiftItem4", "imgGiftItem5", "txtGiftItem5", "groupGiftItem5", "imgGiftItem6", "txtGiftItem6", "groupGiftItem6", "imgItem1", "imgItem2", "imgItem3", "imgItem4", "imgFlag1", "imgFlag2", "imgFlag3", "imgFlag4", "imgSelect1", "imgSelect2", "imgSelect3", "imgSelect4", "btnBuy", "btnClose", "txtCurUse", "txtCurPrice", "txtOldPrice"],
        this.height = 429,
        this.width = 748,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Group1_i(), this._Image10_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgItem4_i(), this.imgFlag1_i(), this.imgFlag2_i(), this.imgFlag3_i(), this.imgFlag4_i(), this.imgSelect1_i(), this.imgSelect2_i(), this.imgSelect3_i(), this.imgSelect4_i(), this.btnBuy_i(), this.btnClose_i(), this.txtCurUse_i(), this.txtCurPrice_i(), this.txtOldPrice_i(), this._Label1_i(), this._Label2_i(), this._Label3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_imgtitle_png",
        t.x = 17,
        t.y = 3,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_imgleftbg_png",
        t.visible = !0,
        t.x = 19,
        t.y = 51,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 65,
        t.y = 85,
        t.layout = this._TileLayout1_i(),
        t.elementsContent = [this.groupGiftItem1_i(), this.groupGiftItem2_i(), this.groupGiftItem3_i(), this.groupGiftItem4_i(), this.groupGiftItem5_i(), this.groupGiftItem6_i()],
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 25,
        t.verticalGap = 25,
        t
    },
    i.groupGiftItem1_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.imgGiftItem1_i(), this.txtGiftItem1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem1_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem1 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem1_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.groupGiftItem2_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem2 = t,
        t.x = 20,
        t.y = 20,
        t.elementsContent = [this._Image5_i(), this.imgGiftItem2_i(), this.txtGiftItem2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem2_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem2 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem2_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.groupGiftItem3_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem3 = t,
        t.x = 30,
        t.y = 30,
        t.elementsContent = [this._Image6_i(), this.imgGiftItem3_i(), this.txtGiftItem3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem3_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem3 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem3_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.groupGiftItem4_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem4 = t,
        t.x = 40,
        t.y = 40,
        t.elementsContent = [this._Image7_i(), this.imgGiftItem4_i(), this.txtGiftItem4_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem4_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem4 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem4_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem4 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.groupGiftItem5_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem5 = t,
        t.x = 50,
        t.y = 50,
        t.elementsContent = [this._Image8_i(), this.imgGiftItem5_i(), this.txtGiftItem5_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem5_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem5 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem5_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem5 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i.groupGiftItem6_i = function() {
        var t = new eui.Group;
        return this.groupGiftItem6 = t,
        t.x = 60,
        t.y = 60,
        t.elementsContent = [this._Image9_i(), this.imgGiftItem6_i(), this.txtGiftItem6_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_gift_pop_kuang_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgGiftItem6_i = function() {
        var t = new eui.Image;
        return this.imgGiftItem6 = t,
        t.height = 50,
        t.source = "backflow_buy_gift_pop_kuang_png",
        t.width = 50,
        t.x = 10,
        t.y = 10,
        t
    },
    i.txtGiftItem6_i = function() {
        var t = new eui.Label;
        return this.txtGiftItem6 = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 52,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_pet_pop_img1_png",
        t.x = 291,
        t.y = 103,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 333,
        t.y = 141,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 434,
        t.y = 141,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 534,
        t.y = 141,
        t
    },
    i.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 50,
        t.width = 50,
        t.x = 634,
        t.y = 141,
        t
    },
    i.imgFlag1_i = function() {
        var t = new eui.Image;
        return this.imgFlag1 = t,
        t.x = 324,
        t.y = 132,
        t
    },
    i.imgFlag2_i = function() {
        var t = new eui.Image;
        return this.imgFlag2 = t,
        t.x = 425,
        t.y = 132,
        t
    },
    i.imgFlag3_i = function() {
        var t = new eui.Image;
        return this.imgFlag3 = t,
        t.x = 525,
        t.y = 132,
        t
    },
    i.imgFlag4_i = function() {
        var t = new eui.Image;
        return this.imgFlag4 = t,
        t.x = 625,
        t.y = 132,
        t
    },
    i.imgSelect1_i = function() {
        var t = new eui.Image;
        return this.imgSelect1 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.width = 90,
        t.x = 315,
        t.y = 122,
        t
    },
    i.imgSelect2_i = function() {
        var t = new eui.Image;
        return this.imgSelect2 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.width = 90,
        t.x = 415,
        t.y = 122,
        t
    },
    i.imgSelect3_i = function() {
        var t = new eui.Image;
        return this.imgSelect3 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.width = 90,
        t.x = 515,
        t.y = 122,
        t
    },
    i.imgSelect4_i = function() {
        var t = new eui.Image;
        return this.imgSelect4 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.width = 90,
        t.x = 615,
        t.y = 122,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "backflow_buy_pet_pop_btnbuy_png",
        t.x = 445,
        t.y = 344,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "backflow_fire_pop_btnclose_png",
        t.x = 710,
        t.y = 3,
        t
    },
    i.txtCurUse_i = function() {
        var t = new eui.Label;
        return this.txtCurUse = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 136.5,
        t.size = 18,
        t.text = "当前使用：",
        t.textColor = 4187130,
        t.y = 228,
        t
    },
    i.txtCurPrice_i = function() {
        var t = new eui.Label;
        return this.txtCurPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16514895,
        t.x = 578,
        t.y = 313,
        t
    },
    i.txtOldPrice_i = function() {
        var t = new eui.Label;
        return this.txtOldPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16514895,
        t.x = 426,
        t.y = 313,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "现价：",
        t.textColor = 4187130,
        t.x = 525,
        t.y = 313,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "原价：",
        t.textColor = 4187130,
        t.x = 371,
        t.y = 313,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "使用折扣券即可以优惠价格获得",
        t.textColor = 8631026,
        t.x = 372,
        t.y = 69,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowBuyPetPopSkin.exml"] = window.BackflowBuyPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet", "imgItem1", "imgItem2", "imgItem3", "imgItem4", "imgFlag1", "imgFlag2", "imgFlag3", "imgFlag4", "imgSelect1", "imgSelect2", "imgSelect3", "imgSelect4", "btnBuy", "btnClose", "txtCurUse", "txtOldPrice", "txtCurPrice"],
        this.height = 429,
        this.width = 748,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgPet_i(), this._Image3_i(), this.imgItem1_i(), this.imgItem2_i(), this.imgItem3_i(), this.imgItem4_i(), this.imgFlag1_i(), this.imgFlag2_i(), this.imgFlag3_i(), this.imgFlag4_i(), this.imgSelect1_i(), this.imgSelect2_i(), this.imgSelect3_i(), this.imgSelect4_i(), this.btnBuy_i(), this.btnClose_i(), this._Label1_i(), this.txtCurUse_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_pet_pop_imgtitle_png",
        t.x = 17,
        t.y = 3,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.source = "backflow_buy_pet_pop_imgpet2_png",
        t.visible = !0,
        t.x = 19,
        t.y = 47,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_buy_pet_pop_img1_png",
        t.x = 291,
        t.y = 103,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 333,
        t.y = 141,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 434,
        t.y = 141,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 534,
        t.y = 141,
        t
    },
    i.imgItem4_i = function() {
        var t = new eui.Image;
        return this.imgItem4 = t,
        t.height = 50,
        t.width = 50,
        t.x = 634,
        t.y = 141,
        t
    },
    i.imgFlag1_i = function() {
        var t = new eui.Image;
        return this.imgFlag1 = t,
        t.x = 324,
        t.y = 132,
        t
    },
    i.imgFlag2_i = function() {
        var t = new eui.Image;
        return this.imgFlag2 = t,
        t.x = 425,
        t.y = 132,
        t
    },
    i.imgFlag3_i = function() {
        var t = new eui.Image;
        return this.imgFlag3 = t,
        t.x = 525,
        t.y = 132,
        t
    },
    i.imgFlag4_i = function() {
        var t = new eui.Image;
        return this.imgFlag4 = t,
        t.x = 625,
        t.y = 132,
        t
    },
    i.imgSelect1_i = function() {
        var t = new eui.Image;
        return this.imgSelect1 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.x = 315,
        t.y = 122,
        t
    },
    i.imgSelect2_i = function() {
        var t = new eui.Image;
        return this.imgSelect2 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.x = 415,
        t.y = 122,
        t
    },
    i.imgSelect3_i = function() {
        var t = new eui.Image;
        return this.imgSelect3 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.x = 515,
        t.y = 122,
        t
    },
    i.imgSelect4_i = function() {
        var t = new eui.Image;
        return this.imgSelect4 = t,
        t.height = 90,
        t.source = "common_select_rect_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.x = 615,
        t.y = 122,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "backflow_buy_pet_pop_btnbuy_png",
        t.x = 445,
        t.y = 344,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "backflow_fire_pop_btnclose_png",
        t.x = 710,
        t.y = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "使用折扣券即可以优惠价格获得\n（每张折扣券仅限使用1次）",
        t.textAlign = "center",
        t.textColor = 8631026,
        t.x = 381,
        t.y = 54,
        t
    },
    i.txtCurUse_i = function() {
        var t = new eui.Label;
        return this.txtCurUse = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 136.5,
        t.size = 18,
        t.text = "当前使用：",
        t.textColor = 4187130,
        t.y = 228,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 371,
        t.y = 313,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Label2_i(), this.txtOldPrice_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "原价：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtOldPrice_i = function() {
        var t = new eui.Label;
        return this.txtOldPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16514895,
        t.x = 55,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 525,
        t.y = 313,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this._Label3_i(), this.txtCurPrice_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "现价：",
        t.textColor = 4187130,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCurPrice_i = function() {
        var t = new eui.Label;
        return this.txtCurPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 16514895,
        t.x = 53,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowFirePopSkin.exml"] = window.BackflowFirePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnGet2", "btnGet3", "btnGet4", "btnGet1"],
        this.height = 429,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.btnClose_i(), this.btnGet2_i(), this.btnGet3_i(), this.btnGet4_i(), this.btnGet1_i(), this._Label1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_imgbg_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_img1_png",
        t.x = 18,
        t.y = 47,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_img2_png",
        t.x = 198,
        t.y = 47,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_img3_png",
        t.x = 377,
        t.y = 47,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_img4_png",
        t.x = 557,
        t.y = 47,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_imgtitle_png",
        t.x = 19,
        t.y = 3,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "backflow_fire_pop_btnclose_png",
        t.x = 712,
        t.y = 3,
        t
    },
    i.btnGet2_i = function() {
        var t = new eui.Image;
        return this.btnGet2 = t,
        t.bottom = 43,
        t.height = 29,
        t.source = "backflow_fire_pop_btnget1_png",
        t.width = 160,
        t.x = 564,
        t
    },
    i.btnGet3_i = function() {
        var t = new eui.Image;
        return this.btnGet3 = t,
        t.bottom = 43,
        t.height = 29,
        t.source = "backflow_fire_pop_btnget1_png",
        t.width = 160,
        t.x = 385,
        t
    },
    i.btnGet4_i = function() {
        var t = new eui.Image;
        return this.btnGet4 = t,
        t.bottom = 43,
        t.height = 29,
        t.source = "backflow_fire_pop_btnget1_png",
        t.width = 160,
        t.x = 205,
        t
    },
    i.btnGet1_i = function() {
        var t = new eui.Image;
        return this.btnGet1 = t,
        t.bottom = 43,
        t.height = 29,
        t.source = "backflow_fire_pop_btnget1_png",
        t.width = 160,
        t.x = 27,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每日可从以上战斗火焰中任选一个免费领取",
        t.textColor = 7902695,
        t.x = 206,
        t.y = 400,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowOpenPop1Skin.exml"] = window.BackflowOpenPop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img", "txt"],
        this.height = 640,
        this.width = 910,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 580,
        t.y = 172,
        t.elementsContent = [this.img_i(), this.txt_i()],
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.anchorOffsetY = 108,
        t.source = "backflow_pop1_imgrect_png",
        t.visible = !0,
        t.x = 0,
        t.y = 108,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "REEJI",
        t.height = 40,
        t.size = 20,
        t.text = "赛尔号，\n我回来啦！",
        t.textAlign = "center",
        t.textColor = 16514895,
        t.visible = !0,
        t.width = 100,
        t.x = 70,
        t.y = 32,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowOpenPop2Skin.exml"] = window.BackflowOpenPop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnGo"],
        this.height = 325,
        this.width = 758,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnGo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_open_pop2_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "backflow_open_pop2_btnclose_png",
        t.x = 726,
        t.y = 28,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "backflow_open_pop2_btngo_png",
        t.x = 606,
        t.y = 245,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BackflowPetPopSkin.exml"] = window.BackflowPetPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgPet1", "imgPet2", "imgPet3", "btnClose", "btnGet3", "btnGet2", "btnGet1", "imgMark1", "imgMark2", "imgMark3", "txtTime"],
        this.height = 429,
        this.width = 750,
        this.elementsContent = [this._Image1_i(), this.imgPet1_i(), this.imgPet2_i(), this.imgPet3_i(), this._Image2_i(), this.btnClose_i(), this.btnGet3_i(), this.btnGet2_i(), this.btnGet1_i(), this.imgMark1_i(), this.imgMark2_i(), this.imgMark3_i(), this._Label1_i(), this.txtTime_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_fire_pop_imgbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.imgPet1_i = function() {
        var t = new eui.Image;
        return this.imgPet1 = t,
        t.source = "backflow_pet_pop_img1_png",
        t.x = 36,
        t.y = 44,
        t
    },
    i.imgPet2_i = function() {
        var t = new eui.Image;
        return this.imgPet2 = t,
        t.source = "backflow_pet_pop_img2_png",
        t.visible = !0,
        t.x = 262,
        t.y = 44,
        t
    },
    i.imgPet3_i = function() {
        var t = new eui.Image;
        return this.imgPet3 = t,
        t.source = "backflow_pet_pop_img3_png",
        t.visible = !0,
        t.x = 488,
        t.y = 44,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "backflow_pet_pop_imgtitle_png",
        t.x = 18,
        t.y = 3,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "backflow_fire_pop_btnclose_png",
        t.x = 711,
        t.y = 3,
        t
    },
    i.btnGet3_i = function() {
        var t = new eui.Image;
        return this.btnGet3 = t,
        t.source = "backflow_pet_pop_btnget1_png",
        t.x = 498,
        t.y = 356,
        t
    },
    i.btnGet2_i = function() {
        var t = new eui.Image;
        return this.btnGet2 = t,
        t.source = "backflow_pet_pop_btnget1_png",
        t.x = 272,
        t.y = 356,
        t
    },
    i.btnGet1_i = function() {
        var t = new eui.Image;
        return this.btnGet1 = t,
        t.source = "backflow_pet_pop_btnget1_png",
        t.x = 46,
        t.y = 356,
        t
    },
    i.imgMark1_i = function() {
        var t = new eui.Image;
        return this.imgMark1 = t,
        t.source = "backflow_pet_pop_imgmark1_png",
        t.x = 181,
        t.y = 83,
        t
    },
    i.imgMark2_i = function() {
        var t = new eui.Image;
        return this.imgMark2 = t,
        t.source = "backflow_pet_pop_imgmark2_png",
        t.x = 410,
        t.y = 83,
        t
    },
    i.imgMark3_i = function() {
        var t = new eui.Image;
        return this.imgMark3 = t,
        t.source = "backflow_pet_pop_imgmark3_png",
        t.x = 637,
        t.y = 83,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "老兵回归活动结束前累计在线时长达到300分钟可从以上精灵中任选一个免费领取",
        t.textColor = 7902695,
        t.x = 53,
        t.y = 400,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "累计在线：000/300分钟",
        t.textColor = 4187130,
        t.x = 507,
        t.y = 11,
        t
    },
    e
} (eui.Skin);