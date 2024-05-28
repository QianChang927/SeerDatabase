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
phoenixPassPanel; !
function(e) {
    e.popFight = -1;
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.got = !1,
            e.evo = !1,
            e.canGet = !1,
            e.skinName = PhoenixPassPanelSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "phoenix_pass_panel_title_png", this.onClose, this),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.imaInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 3318,
                    type: "pet"
                })
            },
            this),
            ImageButtonUtil.add(this.imaOne,
            function() {
                var t = PopViewManager.createDefaultStyleObject();
                t.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new e.PhoenixPassPanelOnePop, t)
            },
            this),
            ImageButtonUtil.add(this.go,
            function() {
                ModuleManager.showModule("phoenixPassPanel", [], null, n.canGet ? "PhoenixPassPanelGet": "PhoenixPassPanelEnter", AppDoStyle.HIDEN)
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
            this),
            this.updateView(),
            EventManager.addEventListener("PhoenixPassPanelOnePop_oneKey_pop", this.updateView, this),
            EventManager.addEventListener("PhoenixPassPanel_updateView", this.updateView, this),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup)
        },
        n.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([6792, 15384],
            function(t) {
                e.got = 1 == KTool.getBit(t[0], 1),
                e.canGet = 1 == KTool.getBit(t[0], 5),
                e.go.source = e.canGet ? "phoenix_pass_panel_btnevolve_png": "phoenix_pass_panel_go_png",
                DisplayUtil.setEnabled(e.imaOne, e.got && 1 != KTool.getBit(t[0], 3), !0),
                e.evo = e.canGet && 1 == KTool.getBit(t[1], 20);
                var n = 1 == KTool.getBit(t[0], 2);
                DisplayUtil.setEnabled(e.go, !(e.got && n), !0),
                e.has.visible = e.got && n
            })
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.PhoenixPassPanel = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanel")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemId = 1712417,
            t.petId = 3318,
            t.progress = [0, 0],
            t.skinName = PhoenixPassPanelEnterSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "phoenix_pass_panel_enter_title_png",
            function() {
                t.progress[1] ? ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelGet", AppDoStyle.DESTROY) : t.onClose(),
                EventManager.dispatchEventWith("PhoenixPassPanel_updateView")
            },
            this),
            this.adaptBgByScale(this.bg),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this.ani = SpineUtil.createAnimate("zhuque"),
            this.aniGroup.addChild(this.ani),
            this.ani.play("animation", 0),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249897_9937", t.updateView, t)
            },
            this),
            ImageButtonUtil.add(this.touchGroup,
            function() {
                var e = SystemTimerManager.sysBJDate.getHours();
                if (e >= 12 && 15 > e || e >= 18 && 21 > e) {
                    var n = t.progress[0],
                    i = t.progress[1];
                    0 == n && 0 == i ? ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelFire", AppDoStyle.DESTROY) : 1 == n && 0 == i ? ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelTrial", AppDoStyle.DESTROY) : 0 == n && 1 == i ? ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelFire", AppDoStyle.DESTROY) : 1 == n && 1 == i && BubblerManager.getInstance().showText("今日已激活过神火迷阵阵眼，请明日再来！")
                } else BubblerManager.getInstance().showText("神火迷阵暂未开放，请稍后再来！")
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                t.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(t.itemId)
            },
            this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            this.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(this.itemId),
            KTool.getMultiValue([15383, 6793, 6792, 15384],
            function(t) {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, n = this;
                    return __generator(this,
                    function(i) {
                        switch (i.label) {
                        case 0:
                            return this.txtCoin1.text = "今日已购买：" + t[0] + "/10",
                            DisplayUtil.setEnabled(this.add, t[0] < 10, !0),
                            e = t[1] > 0,
                            this.text1Group.visible = !e,
                            this.mineGroup.visible = e,
                            this.mine.textFlow = [{
                                text: "你是第"
                            },
                            {
                                text: "" + t[1],
                                style: {
                                    textColor: 16580432
                                }
                            },
                            {
                                text: "名获得炽羽炎凰·朱雀的玩家"
                            }],
                            this.progress = [KTool.getBit(t[3], 20), KTool.getBit(t[2], 5)],
                            e || 1 != KTool.getBit(t[2], 1) ? [3, 2] : [4, SocketConnection.sendWithPromise(43239, [5, 0])];
                        case 1:
                            i.sent(),
                            i.label = 2;
                        case 2:
                            return KTool.getGlobalValues(173, [1],
                            function(e) {
                                n.all.textFlow = [{
                                    text: "当前已有"
                                },
                                {
                                    text: "" + e[0],
                                    style: {
                                        textColor: 16580432
                                    }
                                },
                                {
                                    text: "名玩家获得炽羽炎凰·朱雀"
                                }]
                            }),
                            [2]
                        }
                    })
                })
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PhoenixPassPanelEnter = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelEnter")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    e.addSpeed = .025;
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.curTypes = [],
            e.winTypes = [],
            e.curSelect = 0,
            e.petIds = [18469, 18470, 18471, 18472, 18473, 18474, 18475, 18476, 18477],
            e.itemId = 1712417,
            e.skinName = PhoenixPassPanelFireSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(140, this, "phoenix_pass_panel_fire_title_png",
            function() {
                ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelEnter", AppDoStyle.DESTROY)
            },
            this),
            this.adaptBgByScale(this.bg),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249897_9937", e.updateView, e)
            },
            this),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.draw,
            function() {
                e.curSelect > 0 ? FightManager.fightNoMapBoss(e.petIds[e.curSelect - 1]) : Alert.show("抽取元素后将立刻进入对应属性的战斗，是否准备好了？",
                function() {
                    SocketConnection.sendByQueue(43239, [8, 2],
                    function() {
                        KTool.getMultiValue([202292],
                        function(t) {
                            e.curSelect = t[0] >> 24 & 255,
                            e.play(function() {
                                FightManager.fightNoMapBoss(e.petIds[e.curSelect - 1])
                            })
                        })
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.doSth,
            function() {
                BuyProductManager.buyProduct("260077_14043", e.updateView, e)
            },
            this),
            this.updateView(),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin && BubblerManager.getInstance().showText("恭喜你，挑战成功！"),
                e.updateView()
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                e.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(e.itemId)
            },
            this)
        },
        n.prototype.updateView = function() {
            var e = this;
            this.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(this.itemId),
            KTool.getMultiValue([202292, 15384, 15383, 6792],
            function(t) {
                e.txtCoin1.text = "今日已购买：" + t[2] + "/10",
                DisplayUtil.setEnabled(e.add, t[2] < 10, !0);
                var n = 1 == KTool.getBit(t[1], 20),
                i = 1 == KTool.getBit(t[3], 5),
                a = t[0];
                e.curTypes = [],
                e.winTypes = [],
                e.curSelect = a >> 24 & 255;
                for (var o = 0; 9 > o; o++) 1 == KTool.getBit(a, o + 1) && e.curTypes.push(o + 1),
                1 == KTool.getBit(a, o + 10) && e.winTypes.push(o + 1);
                if (e.curTypes.length < 1) return void SocketConnection.sendByQueue(43239, [8, 1],
                function(t) {
                    e.updateView()
                });
                for (var o = 0; o < e.curTypes.length; o++) e["e" + (o + 1)].source = "phoenix_pass_panel_fire_ima" + e.curTypes[o] + "_png",
                DisplayUtil.setEnabled(e["e" + (o + 1)], e.winTypes.indexOf(e.curTypes[o]) > -1, !0);
                for (var o = 0; 9 > o; o++) e.winTypes.indexOf(o + 1) > -1 ? e.lightSth(o + 1) : e["l" + (o + 1)].alpha = 0;
                n && (i ? (BubblerManager.getInstance().showText("恭喜你获得了朱雀完全体进化的资格，快去进化吧！"), ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelGet", AppDoStyle.DESTROY)) : (BubblerManager.getInstance().showText("恭喜你，成功激活了神火迷阵的阵眼！"), ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelTrial", AppDoStyle.DESTROY))),
                e.curSelect > 0 && FightManager.fightNoMapBoss(e.petIds[e.curSelect - 1])
            })
        },
        n.prototype.play = function(e) {
            this.touchEnabled = this.touchChildren = !1;
            for (var t = this.curSelect + 9,
            n = [], i = 1; t >= i; i++) {
                var a = gsap.utils.wrap(1, 10, i);
                this.winTypes.indexOf(a) > -1 || n.push(this["l" + a])
            }
            this.next(n, 0, e)
        },
        n.prototype.next = function(t, n, i) {
            var a = this;
            void 0 === t && (t = []);
            var o = t[n];
            return o ? void gsap.fromTo(o, {
                alpha: 1
            },
            {
                alpha: 0,
                duration: .1 + n * e.addSpeed
            }).then(function() {
                a.next(t, ++n, i)
            }) : (this.lightSth(this.curSelect), this.touchEnabled = this.touchChildren = !0, void i.call(this))
        },
        n.prototype.lightSth = function(e) {
            this["l" + e].alpha = 1
        },
        n
    } (BaseModule);
    e.PhoenixPassPanelFire = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelFire")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.itemId = 1712417,
            t.petId = 3318,
            t.skinName = PhoenixPassPanelGetSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "phoenix_pass_panel_get_title_png",
            function() {
                t.onClose(),
                EventManager.dispatchEventWith("PhoenixPassPanel_updateView")
            },
            this),
            this.adaptBgByScale(this.bg),
            ImageButtonUtil.add(this.getItem,
            function() {
                ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelEnter", AppDoStyle.DESTROY)
            },
            this),
            ImageButtonUtil.add(this.getPet,
            function() {
                ModuleManager.showModuleByID(56)
            },
            this),
            ImageButtonUtil.add(this.goUp,
            function() {
                ItemManager.getNumByID(t.itemId) >= 40 ? PetManager.updateBagInfo(function() {
                    PetManager.isDefaultPet(t.petId) ? SocketConnection.sendByQueue(43239, [4, 0],
                    function() {
                        t.updateView()
                    }) : Alarm.show("请将" + PetXMLInfo.getName(t.petId) + "设为首位！",
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }) : BubblerManager.getInstance().showText("你的炽热之羽数量不足，无法对炽羽炎凰·朱雀进行能力提升！")
            },
            this),
            ImageButtonUtil.add(this.imaEvo,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var e, t = this;
                    return __generator(this,
                    function(n) {
                        return e = PetManager.isDefaultPet(2676),
                        e ? ItemManager.getNumByID(this.itemId) >= 15 ? SocketConnection.sendByQueue(43239, [3, 0],
                        function() {
                            BubblerManager.getInstance().showText("恭喜你，成功将炽凰·朱雀进化为炽羽炎凰·朱雀！"),
                            t.updateView()
                        }) : BubblerManager.getInstance().showText("你的炽热之羽数量不足，无法将炽凰·朱雀进化为炽羽炎凰·朱雀！") : Alarm.show("请将炽凰·朱雀放在背包中首发再来进化！",
                        function() {
                            ModuleManager.showModuleByID(10)
                        }),
                        [2]
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249897_9937", t.updateView, t)
            },
            this),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            this.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(this.itemId),
            KTool.getMultiValue([15383, 6792],
            function(t) {
                e.txtCoin1.text = "今日已购买：" + t[0] + "/10",
                DisplayUtil.setEnabled(e.add, t[0] < 10, !0);
                var n = 1 == KTool.getBit(t[1], 1);
                e.imaEvo.visible = !n,
                e.got1.visible = n;
                var i = 1 == KTool.getBit(t[1], 2);
                e.goUp.visible = !i,
                e.got2.visible = i
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.PhoenixPassPanelGet = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelGet")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.petId = 3318,
            t.skinName = PhoenixPassPanelOnePopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                BuyProductManager.buyProductBySocket(249905,
                function() {
                    PayManager.canPay() && (PetManager.isDefaultPet(t.petId) ? KTool.buyProductByCallback(249905, 1,
                    function() {
                        for (var e = [5, 0, 1, 2, 3, 4], n = new egret.ByteArray, i = 0; 6 > i; i++) n.writeUnsignedInt([0, 0, 255, 0, 255, 0][e[i]]);
                        n.position = 0,
                        SocketConnection.sendWithPromise(43229, [7, 8, n, PetManager.defaultTime]).then(function() {
                            BubblerManager.getInstance().showText("成为超级极品成功!"),
                            EventManager.dispatchEventWith("PhoenixPassPanelOnePop_oneKey_pop"),
                            t.hide()
                        })
                    }) : Alarm.show("请将" + PetXMLInfo.getName(t.petId) + "设为首位！",
                    function() {
                        ModuleManager.showModuleByID(10)
                    }))
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.add,
            function() {
                t.hide(),
                PayManager.rechargeDiamond()
            },
            this),
            EventManager.addEventListener(RobotEvent.DIAMOND_CHANGED,
            function(e) {
                t.txtDiamond.text = core.gameUtil.ConvertItemNumView(e.data, 0)
            },
            this),
            UserInfoManager.getDiamond(function(e) {
                t.txtDiamond.text = core.gameUtil.ConvertItemNumView(e, 0)
            },
            this),
            KTool.getMultiValue([6792],
            function(e) {
                var n = 1 == KTool.getBit(e[0], 3);
                DisplayUtil.setEnabled(t.btnBuy, !n, !0)
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.PhoenixPassPanelOnePop = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelOnePop")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.itemId = 1712417,
            e.progress = -1,
            e.isChallenge = !1,
            e.uidSort = [[1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321], [4123, 4132, 4213, 4231, 4312, 4321, 1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421], [2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321, 1234, 1243, 1324, 1342, 1423, 1432], [3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321, 1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431]],
            e.da = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560],
            e.skinName = PhoenixPassPanelTrialSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(141, this, "phoenix_pass_panel_trial_title_png",
            function() {
                ModuleManager.showModule("phoenixPassPanel", [], null, "PhoenixPassPanelEnter", AppDoStyle.DESTROY)
            },
            this),
            this.adaptBgByScale(this.bg),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            ImageButtonUtil.add(this.add,
            function() {
                BuyProductManager.buyProduct("249897_9937", n.updateView, n)
            },
            this),
            ImageButtonUtil.add(this.bag,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.reset,
            function() {
                Alert.show("你确定要重置朱雀守护的挑战的进度和顺序吗？",
                function() {
                    SocketConnection.sendByQueue(43239, [2, 0],
                    function() {
                        n.updateView()
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.challenge,
            function() {
                ItemManager.getNumByID(1712417) >= 1 ? SocketConnection.sendByQueue(43239, [1, 5],
                function() {
                    e.popFight = 5,
                    n.isChallenge = !0
                }) : BubblerManager.getInstance().showText("很抱歉，你的炽热之羽数量不足，无法发起挑战！")
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(a["d" + (t + 1)],
                function() {
                    PopViewManager.getInstance().openView(new e.PhoenixPassPanelTrialPop, null, t + 1)
                },
                a)
            },
            a = this, o = 0; 4 > o; o++) i(o);
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateView, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                n.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(n.itemId)
            },
            this),
            this.updateView()
        },
        n.prototype.updateView = function() {
            var t = this;
            this.txtCoin2.text = "炽热之羽：" + ItemManager.getNumByID(this.itemId),
            KTool.getMultiValue([15383, 1000318, 6797, 6796, 6795, 15384, 6792],
            function(n) {
                t.txtCoin1.text = "今日已购买：" + n[0] + "/10",
                DisplayUtil.setEnabled(t.add, n[0] < 10, !0),
                t.updateStar(n[2]);
                for (var i = n[3], a = ("" + i).split("").map(Number), o = 0; 4 > o; o++) t["what_" + (o + 1)].source = ~~a[o] <= 0 ? "phoenix_pass_panel_trial_what_png": "phoenix_pass_panel_trial_type" + a[o] + "_png";
                var r = MainManager.actorID % 4 + 1,
                s = t.uidSort[r - 1],
                _ = s.indexOf(~~i),
                u = _ > -1 ? t.da[_] : 0;
                t.damage.text = 0 >= u ? "∞": u + "%",
                i = n[4];
                for (var o = 0; 4 > o; o++) {
                    var h = i >> 8 * o & 255;
                    t["d" + (o + 1)].source = 3 > h ? "phoenix_pass_panel_trial_ima" + (o + 1) + "_png": "phoenix_pass_panel_trial_d" + (o + 1) + "_png",
                    t["d" + (o + 1)].touchEnabled = 3 > h,
                    e.popFight == o + 1 && 3 == h ? BubblerManager.getInstance().showText("恭喜你，成功突破了朱雀守护·" + ["木", "金", "水", "火"][o] + "！") : e.popFight == o + 1 && 3 != h && PopViewManager.getInstance().openView(new e.PhoenixPassPanelTrialPop, null, o + 1)
                }
                t.progress != n[2] && -1 != t.progress ? BubblerManager.getInstance().showText(FightManager.isWin ? "恭喜你，成功完成了本层试炼，继续努力吧！": "很遗憾，你没有完成试炼，请继续努力！") : t.isChallenge && -1 != t.progress && t.progress == n[2] && (BubblerManager.getInstance().showText("很遗憾，你没有完成试炼，请继续努力！"), t.isChallenge = !1);
                var p = 1 == KTool.getBit(n[5], 20),
                l = 1 == KTool.getBit(n[6], 5);
                l && (p && FightManager.isWin && BubblerManager.getInstance().showText("恭喜你获得了朱雀完全体进化的资格，快去进化吧！"), ModuleManager.showModule("phoenixPassPanel", [], null, p ? "PhoenixPassPanelGet": "PhoenixPassPanelEnter", AppDoStyle.DESTROY)),
                t.progress = n[2],
                e.popFight = -1
            }),
            KTool.getBitSet([1000318],
            function(e) {
                DisplayUtil.setEnabled(t.reset, 1 != e[0], !0)
            })
        },
        n.prototype.updateStar = function(e) {
            var t = ["单精灵战胜炽羽炎凰·朱雀", "偶数回合战胜炽羽炎凰·朱雀", "单数回合战胜炽羽炎凰·朱雀", "使用特殊攻击战胜炽羽炎凰·朱雀", "使用致命一击战胜炽羽炎凰·朱雀"];
            this.txt1.text = e > 4 ? "": t[1 > e ? 0 : e];
            for (var n = 1; 5 >= n; n++) this["star_" + n].source = n > e ? "phoenix_pass_panel_trial_starbg_1_png": "phoenix_pass_panel_trial_star_1_png"
        },
        n
    } (BaseModule);
    e.PhoenixPassPanelTrial = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelTrial")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
phoenixPassPanel; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.str = ["小赛尔，只有击败我才有资格挑战朱雀大人！", "连我都通过不了，怎么可能击败朱雀大人？", "没想到你居然能走到这里，我将是朱雀大人最后的守护！"],
            e.skinName = PhoenixPassPanelTrialPopSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this),
            ImageButtonUtil.add(this.bag,
            function() {
                n.hide(),
                ModuleManager.showModuleByID(10)
            },
            this, !1),
            ImageButtonUtil.add(this.cure,
            function() {
                PetManager.cureAll()
            },
            this, !1),
            ImageButtonUtil.add(this.challenge,
            function() {
                var t = ~~n._data;
                ItemManager.getNumByID(1712417) >= 1 ? SocketConnection.sendByQueue(43239, [1, t],
                function() {
                    e.popFight = t,
                    n.hide()
                }) : BubblerManager.getInstance().showText("很抱歉，你的炽热之羽数量不足，无法发起挑战！")
            },
            this, !1),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.fightEnd, this)
        },
        n.prototype.setData = function(e) {
            t.prototype.setData.call(this, e)
        },
        n.prototype._upDateView = function() {
            var e = this,
            t = ~~this._data;
            this.bg.source = "phoenix_pass_panel_trial_popbg_" + t + "_png",
            this.close.source = "phoenix_pass_panel_trial_popclose_" + t + "_png",
            KTool.getMultiValue([6795],
            function(n) {
                var i = n[0],
                a = i >> 8 * (t - 1) & 255;
                e.pro.text = a + 1 + "/3",
                e.txtPop.text = e.str[1 > a ? 0 : a]
            })
        },
        n.prototype.fightEnd = function() {~~this._data;
            this._upDateView()
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        n
    } (PopView);
    e.PhoenixPassPanelTrialPop = t,
    __reflect(t.prototype, "phoenixPassPanel.PhoenixPassPanelTrialPop")
} (phoenixPassPanel || (phoenixPassPanel = {}));
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
generateEUI.paths["resource/eui_skins/PhoenixPassPanelEnterSkin.exml"] = window.PhoenixPassPanelEnterSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "aniGroup", "txtCoin1", "txtCoin2", "icon", "add", "coin", "t1", "t2", "text1Group", "mine", "mineGroup", "all", "botGroup", "touchGroup", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.aniGroup_i(), this._Image2_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "common_full_black_mask_png",
        e.verticalCenter = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_enter_bg_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    n.aniGroup_i = function() {
        var e = new eui.Group;
        return this.aniGroup = e,
        e.horizontalCenter = 4,
        e.y = 320,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 356.5,
        e.source = "phoenix_pass_panel_enter_doorname_png",
        e.y = 69.636,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.left = 94,
        e.right = 16,
        e.y = 17,
        e.elementsContent = [this.coin_i(), this.botGroup_i(), this.touchGroup_i()],
        e
    },
    n.coin_i = function() {
        var e = new eui.Group;
        return this.coin = e,
        e.cacheAsBitmap = !0,
        e.right = 11,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.txtCoin1_i(), this.txtCoin2_i(), this.icon_i(), this.add_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 0,
        e.y = 6,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 212,
        e.y = 6,
        e
    },
    n.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：0/10",
        e.textColor = 16514895,
        e.x = 226,
        e.y = 7,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "炽热之羽：0",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "phoenix_pass_panel_get_icon_png",
        e.x = 7,
        e.y = 0,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.height = 21,
        e.source = "phoenix_pass_panel_one_pop_add_png",
        e.width = 21,
        e.x = 161.68,
        e.y = 5.16,
        e
    },
    n.botGroup_i = function() {
        var e = new eui.Group;
        return this.botGroup = e,
        e.cacheAsBitmap = !0,
        e.horizontalCenter = 0,
        e.y = 489,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.text1Group_i(), this.mineGroup_i(), this._Group1_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 108,
        e.scale9Grid = new egret.Rectangle(234, 0, 16, 108),
        e.source = "phoenix_pass_panel_enter_taskbg1_png",
        e.width = 952,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_enter_line_png",
        e.x = 446,
        e.y = 3,
        e
    },
    n.text1Group_i = function() {
        var e = new eui.Group;
        return this.text1Group = e,
        e.visible = !0,
        e.x = 488,
        e.y = 31,
        e.elementsContent = [this.t1_i(), this.t2_i()],
        e
    },
    n.t1_i = function() {
        var e = new eui.Label;
        return this.t1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "1、通过神火迷阵并完成朱雀的真身试炼，即可获得朱雀完全体进化的资格。",
        e.textColor = 16771009,
        e.x = 0,
        e.y = 0,
        e
    },
    n.t2_i = function() {
        var e = new eui.Label;
        return this.t2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "2、神火迷阵开启时间：12:00-15:00、18:00-21:00",
        e.textColor = 16771009,
        e.x = 0,
        e.y = 28,
        e
    },
    n.mineGroup_i = function() {
        var e = new eui.Group;
        return this.mineGroup = e,
        e.visible = !1,
        e.x = 491,
        e.y = 38,
        e.elementsContent = [this._Image7_i(), this.mine_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_enter_rec1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.mine_i = function() {
        var e = new eui.Label;
        return this.mine = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2,
        e.size = 20,
        e.text = "你是第00000名获得炽羽炎凰·朱雀的玩家",
        e.textColor = 14507299,
        e.y = 7,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 9,
        e.y = 38,
        e.elementsContent = [this._Image8_i(), this.all_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_enter_rec1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.all_i = function() {
        var e = new eui.Label;
        return this.all = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2,
        e.size = 20,
        e.text = "当前已有00000名玩家获得炽羽炎凰·朱雀",
        e.textColor = 14507299,
        e.y = 7,
        e
    },
    n.touchGroup_i = function() {
        var e = new eui.Group;
        return this.touchGroup = e,
        e.height = 414.599,
        e.right = 11,
        e.width = 519,
        e.y = 33,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelFireSkin.exml"] = window.PhoenixPassPanelFireSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "n_1", "l1", "ima1", "n_2", "l2", "ima2", "n_3", "l3", "ima3", "n_4", "l4", "ima4", "n_5", "l5", "ima5", "n_6", "l6", "ima6", "n_7", "l7", "ima7", "n_8", "l8", "ima8", "n_9", "l9", "ima9", "typeGroup", "bag", "cure", "draw", "doSth", "e1", "e2", "e3", "txtCoin1", "txtCoin2", "icon", "add", "coin", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "common_full_black_mask_png",
        e.verticalCenter = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_fire_bg_jpg",
        e.y = 0,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.left = 16,
        e.right = 29,
        e.visible = !0,
        e.y = 17,
        e.elementsContent = [this.typeGroup_i(), this.bag_i(), this.cure_i(), this.draw_i(), this.doSth_i(), this._Group1_i(), this.coin_i()],
        e
    },
    n.typeGroup_i = function() {
        var e = new eui.Group;
        return this.typeGroup = e,
        e.height = 491,
        e.horizontalCenter = -16,
        e.visible = !0,
        e.width = 907,
        e.y = 109,
        e.elementsContent = [this.n_1_i(), this.l1_i(), this.ima1_i(), this.n_2_i(), this.l2_i(), this.ima2_i(), this.n_3_i(), this.l3_i(), this.ima3_i(), this.n_4_i(), this.l4_i(), this.ima4_i(), this.n_5_i(), this.l5_i(), this.ima5_i(), this.n_6_i(), this.l6_i(), this.ima6_i(), this.n_7_i(), this.l7_i(), this.ima7_i(), this.n_8_i(), this.l8_i(), this.ima8_i(), this.n_9_i(), this.l9_i(), this.ima9_i()],
        e
    },
    n.n_1_i = function() {
        var e = new eui.Image;
        return this.n_1 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.visible = !0,
        e.x = 0,
        e.y = 185,
        e
    },
    n.l1_i = function() {
        var e = new eui.Image;
        return this.l1 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 0,
        e.y = 186,
        e
    },
    n.ima1_i = function() {
        var e = new eui.Image;
        return this.ima1 = e,
        e.source = "phoenix_pass_panel_fire_ima1_png",
        e.x = 29,
        e.y = 238,
        e
    },
    n.n_2_i = function() {
        var e = new eui.Image;
        return this.n_2 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.visible = !0,
        e.x = 124,
        e.y = 338,
        e
    },
    n.l2_i = function() {
        var e = new eui.Image;
        return this.l2 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 124,
        e.y = 339,
        e
    },
    n.ima2_i = function() {
        var e = new eui.Image;
        return this.ima2 = e,
        e.source = "phoenix_pass_panel_fire_ima2_png",
        e.x = 153,
        e.y = 391,
        e
    },
    n.n_3_i = function() {
        var e = new eui.Image;
        return this.n_3 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 332,
        e.y = 298,
        e
    },
    n.l3_i = function() {
        var e = new eui.Image;
        return this.l3 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 332,
        e.y = 299,
        e
    },
    n.ima3_i = function() {
        var e = new eui.Image;
        return this.ima3 = e,
        e.source = "phoenix_pass_panel_fire_ima3_png",
        e.x = 359,
        e.y = 350,
        e
    },
    n.n_4_i = function() {
        var e = new eui.Image;
        return this.n_4 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 193,
        e.y = 160,
        e
    },
    n.l4_i = function() {
        var e = new eui.Image;
        return this.l4 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 193,
        e.y = 161,
        e
    },
    n.ima4_i = function() {
        var e = new eui.Image;
        return this.ima4 = e,
        e.source = "phoenix_pass_panel_fire_ima4_png",
        e.x = 218,
        e.y = 212,
        e
    },
    n.n_5_i = function() {
        var e = new eui.Image;
        return this.n_5 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 365,
        e.y = 44,
        e
    },
    n.l5_i = function() {
        var e = new eui.Image;
        return this.l5 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 365,
        e.y = 45,
        e
    },
    n.ima5_i = function() {
        var e = new eui.Image;
        return this.ima5 = e,
        e.source = "phoenix_pass_panel_fire_ima5_png",
        e.x = 388,
        e.y = 99,
        e
    },
    n.n_6_i = function() {
        var e = new eui.Image;
        return this.n_6 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 602,
        e.y = 237,
        e
    },
    n.l6_i = function() {
        var e = new eui.Image;
        return this.l6 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 602,
        e.y = 238,
        e
    },
    n.ima6_i = function() {
        var e = new eui.Image;
        return this.ima6 = e,
        e.source = "phoenix_pass_panel_fire_ima6_png",
        e.x = 630,
        e.y = 291,
        e
    },
    n.n_7_i = function() {
        var e = new eui.Image;
        return this.n_7 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 773,
        e.y = 160,
        e
    },
    n.l7_i = function() {
        var e = new eui.Image;
        return this.l7 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 773,
        e.y = 161,
        e
    },
    n.ima7_i = function() {
        var e = new eui.Image;
        return this.ima7 = e,
        e.source = "phoenix_pass_panel_fire_ima7_png",
        e.x = 801,
        e.y = 212,
        e
    },
    n.n_8_i = function() {
        var e = new eui.Image;
        return this.n_8 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 618,
        e.y = 61,
        e
    },
    n.l8_i = function() {
        var e = new eui.Image;
        return this.l8 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 618,
        e.y = 62,
        e
    },
    n.ima8_i = function() {
        var e = new eui.Image;
        return this.ima8 = e,
        e.source = "phoenix_pass_panel_fire_ima8_png",
        e.x = 638,
        e.y = 115,
        e
    },
    n.n_9_i = function() {
        var e = new eui.Image;
        return this.n_9 = e,
        e.source = "phoenix_pass_panel_fire_n_png",
        e.x = 796,
        e.y = 0,
        e
    },
    n.l9_i = function() {
        var e = new eui.Image;
        return this.l9 = e,
        e.alpha = 0,
        e.source = "phoenix_pass_panel_fire_l_png",
        e.visible = !0,
        e.x = 796,
        e.y = 1,
        e
    },
    n.ima9_i = function() {
        var e = new eui.Image;
        return this.ima9 = e,
        e.source = "phoenix_pass_panel_fire_ima9_png",
        e.x = 825,
        e.y = 52,
        e
    },
    n.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "phoenix_pass_panel_fire_bag_png",
        e.x = 0,
        e.y = 425,
        e
    },
    n.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "phoenix_pass_panel_fire_cure_png",
        e.x = 0,
        e.y = 516,
        e
    },
    n.draw_i = function() {
        var e = new eui.Image;
        return this.draw = e,
        e.right = 158,
        e.source = "phoenix_pass_panel_fire_draw_png",
        e.y = 537,
        e
    },
    n.doSth_i = function() {
        var e = new eui.Image;
        return this.doSth = e,
        e.right = 0,
        e.source = "phoenix_pass_panel_fire_dosth_png",
        e.y = 537,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.left = 31,
        e.y = 49,
        e.elementsContent = [this._Image2_i(), this.e1_i(), this.e2_i(), this.e3_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 54,
        e.source = "phoenix_pass_panel_fire_eyebg_png",
        e.width = 323,
        e.x = 0,
        e.y = 0,
        e
    },
    n.e1_i = function() {
        var e = new eui.Image;
        return this.e1 = e,
        e.horizontalCenter = -20,
        e.scaleX = .5,
        e.scaleY = .5,
        e.verticalCenter = 0,
        e
    },
    n.e2_i = function() {
        var e = new eui.Image;
        return this.e2 = e,
        e.horizontalCenter = 48,
        e.scaleX = .5,
        e.scaleY = .5,
        e.verticalCenter = 0,
        e
    },
    n.e3_i = function() {
        var e = new eui.Image;
        return this.e3 = e,
        e.horizontalCenter = 119,
        e.scaleX = .5,
        e.scaleY = .5,
        e.verticalCenter = 0,
        e
    },
    n.coin_i = function() {
        var e = new eui.Group;
        return this.coin = e,
        e.cacheAsBitmap = !0,
        e.right = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.txtCoin1_i(), this.txtCoin2_i(), this.icon_i(), this.add_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 0,
        e.y = 6,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 212,
        e.y = 6,
        e
    },
    n.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：0/10",
        e.textColor = 16514895,
        e.x = 226,
        e.y = 7,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "炽热之羽：0",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "phoenix_pass_panel_get_icon_png",
        e.x = 7,
        e.y = 0,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.height = 21,
        e.source = "phoenix_pass_panel_one_pop_add_png",
        e.width = 21,
        e.x = 161.68,
        e.y = 5.16,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelGetSkin.exml"] = window.PhoenixPassPanelGetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "getItem", "getPet", "goUp", "imaEvo", "txtCoin1", "txtCoin2", "icon", "add", "coin", "got1", "got2", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_get_pet2_png",
        e.y = 0,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.cacheAsBitmap = !0,
        e.left = 27,
        e.right = 18,
        e.y = 17,
        e.elementsContent = [this.getItem_i(), this.getPet_i(), this.goUp_i(), this.imaEvo_i(), this.coin_i(), this._Image4_i(), this._Image5_i(), this.got1_i(), this.got2_i()],
        e
    },
    n.getItem_i = function() {
        var e = new eui.Image;
        return this.getItem = e,
        e.right = 0,
        e.source = "phoenix_pass_panel_get_getitem_png",
        e.y = 485,
        e
    },
    n.getPet_i = function() {
        var e = new eui.Image;
        return this.getPet = e,
        e.left = 0,
        e.source = "phoenix_pass_panel_get_getpet_png",
        e.y = 483,
        e
    },
    n.goUp_i = function() {
        var e = new eui.Image;
        return this.goUp = e,
        e.source = "phoenix_pass_panel_get_goup_png",
        e.x = 612,
        e.y = 545,
        e
    },
    n.imaEvo_i = function() {
        var e = new eui.Image;
        return this.imaEvo = e,
        e.source = "phoenix_pass_panel_get_imaevo_png",
        e.x = 336,
        e.y = 545,
        e
    },
    n.coin_i = function() {
        var e = new eui.Group;
        return this.coin = e,
        e.cacheAsBitmap = !0,
        e.right = 11,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.txtCoin1_i(), this.txtCoin2_i(), this.icon_i(), this.add_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 0,
        e.y = 6,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 212,
        e.y = 6,
        e
    },
    n.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：0/10",
        e.textColor = 16514895,
        e.x = 226,
        e.y = 7,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "炽热之羽：0",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "phoenix_pass_panel_get_icon_png",
        e.x = 7,
        e.y = 0,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.height = 21,
        e.source = "phoenix_pass_panel_one_pop_add_png",
        e.width = 21,
        e.x = 161.68,
        e.y = 5.16,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = 133.5,
        e.source = "phoenix_pass_panel_get_1_png",
        e.y = 511,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -146,
        e.source = "phoenix_pass_panel_get_2_png",
        e.y = 511,
        e
    },
    n.got1_i = function() {
        var e = new eui.Image;
        return this.got1 = e,
        e.source = "phoenix_pass_panel_get_got1_png",
        e.visible = !0,
        e.x = 360,
        e.y = 551,
        e
    },
    n.got2_i = function() {
        var e = new eui.Image;
        return this.got2 = e,
        e.source = "phoenix_pass_panel_get_got2_png",
        e.x = 636,
        e.y = 551,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelOnePopSkin.exml"] = window.PhoenixPassPanelOnePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["add", "btnBuy", "btnClose", "txtDiamond"],
        this.height = 608,
        this.width = 944,
        this.elementsContent = [this._Image1_i(), this.add_i(), this.btnBuy_i(), this.btnClose_i(), this._Label1_i(), this.txtDiamond_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_one_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "phoenix_pass_panel_one_pop_add_png",
        e.x = 539,
        e.y = 513,
        e
    },
    n.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "phoenix_pass_panel_one_pop_btnbuy_png",
        e.x = 366,
        e.y = 545,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "phoenix_pass_panel_one_pop_btnclose_png",
        e.x = 909.054,
        e.y = 11,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "保守",
        e.textColor = 16774500,
        e.x = 771,
        e.y = 342,
        e
    },
    n.txtDiamond_i = function() {
        var e = new eui.Label;
        return this.txtDiamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2218",
        e.textAlign = "center",
        e.textColor = 16774499,
        e.width = 80,
        e.x = 457,
        e.y = 517,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelSkin.exml"] = window.PhoenixPassPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "imaTitle", "imaInfo", "imaOne", "go", "has", "btnBless", "btnEvolveNeed", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_bg_jpg",
        e.verticalCenter = 0,
        e.width = 1136,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.right = -60,
        e.source = "phoenix_pass_panel_pet1_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.horizontalCenter = -7,
        e.left = 8,
        e.right = 22,
        e.y = 9,
        e.elementsContent = [this._Image2_i(), this.imaTitle_i(), this.imaInfo_i(), this.imaOne_i(), this.go_i(), this.has_i(), this.btnBless_i(), this.btnEvolveNeed_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_petname_png",
        e.x = 0,
        e.y = 86,
        e
    },
    n.imaTitle_i = function() {
        var e = new eui.Image;
        return this.imaTitle = e,
        e.right = 1,
        e.source = "phoenix_pass_panel_imatitle_png",
        e.y = 95,
        e
    },
    n.imaInfo_i = function() {
        var e = new eui.Image;
        return this.imaInfo = e,
        e.source = "phoenix_pass_panel_imainfo_png",
        e.x = 57,
        e.y = 475,
        e
    },
    n.imaOne_i = function() {
        var e = new eui.Image;
        return this.imaOne = e,
        e.source = "phoenix_pass_panel_imaone_png",
        e.x = 37,
        e.y = 534,
        e
    },
    n.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "phoenix_pass_panel_go_png",
        e.x = 819,
        e.y = 513,
        e
    },
    n.has_i = function() {
        var e = new eui.Image;
        return this.has = e,
        e.source = "phoenix_pass_panel_ima_has_png",
        e.x = 655,
        e.y = 327,
        e
    },
    n.btnBless_i = function() {
        var e = new eui.Image;
        return this.btnBless = e,
        e.source = "phoenix_pass_panel_bless_png",
        e.x = 147,
        e.y = 534,
        e
    },
    n.btnEvolveNeed_i = function() {
        var e = new eui.Image;
        return this.btnEvolveNeed = e,
        e.source = "phoenix_pass_panel_btnevolveneed_png",
        e.x = 30,
        e.y = 330,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelTrialPopSkin.exml"] = window.PhoenixPassPanelTrialPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "close", "challenge", "resume", "txtPop", "pro", "bag", "cure"],
        this.height = 503,
        this.width = 969,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 503,
        e.touchChildren = !0,
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 969,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.close_i(), this.challenge_i(), this._Image1_i(), this.resume_i(), this.txtPop_i(), this.pro_i(), this.bag_i(), this.cure_i()],
        e
    },
    n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 4,
        e.right = 0,
        e.source = "phoenix_pass_panel_trial_popbg_4_png",
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "phoenix_pass_panel_trial_popclose_4_png",
        e.x = 921,
        e.y = 123,
        e
    },
    n.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.source = "phoenix_pass_panel_trial_popchallenge_png",
        e.x = 792,
        e.y = 413,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_trial_probg_png",
        e.x = 141,
        e.y = 423,
        e
    },
    n.resume_i = function() {
        var e = new eui.Label;
        return this.resume = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "消耗1个炽热之羽",
        e.textColor = 16776679,
        e.x = 796.096,
        e.y = 392,
        e
    },
    n.txtPop_i = function() {
        var e = new eui.Label;
        return this.txtPop = e,
        e.fontFamily = "REEJI",
        e.lineSpacing = 10,
        e.size = 20,
        e.text = "没想到你居然能走到这里，我将是朱雀大人\n最后的守护！",
        e.textColor = 16774346,
        e.verticalCenter = 39.5,
        e.visible = !0,
        e.width = 444,
        e.x = 481,
        e
    },
    n.pro_i = function() {
        var e = new eui.Label;
        return this.pro = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -210.5,
        e.size = 20,
        e.text = "0/3",
        e.textColor = 16773260,
        e.y = 431,
        e
    },
    n.bag_i = function() {
        var e = new eui.Group;
        return this.bag = e,
        e.height = 78,
        e.width = 79.209,
        e.x = 467,
        e.y = 385,
        e
    },
    n.cure_i = function() {
        var e = new eui.Group;
        return this.cure = e,
        e.height = 78,
        e.width = 79.209,
        e.x = 568.504,
        e.y = 385,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PhoenixPassPanelTrialSkin.exml"] = window.PhoenixPassPanelTrialSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "txt1", "star_1", "star_2", "star_3", "star_4", "star_5", "starGroup", "what_1", "what_2", "what_3", "what_4", "reset", "damage", "challenge", "rightGroup", "d2", "d1", "d3", "d4", "imaGroup", "bag", "cure", "txtCoin1", "txtCoin2", "icon", "add", "coin", "mainGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.mainGroup_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "phoenix_pass_panel_bg_jpg",
        e.y = 0,
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "phoenix_pass_panel_trial_rec_png",
        e.top = 0,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.left = -13,
        e.right = 29,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.rightGroup_i(), this.imaGroup_i(), this.bag_i(), this.cure_i(), this.coin_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_trial_pet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.rightGroup_i = function() {
        var e = new eui.Group;
        return this.rightGroup = e,
        e.right = 9,
        e.y = 155,
        e.elementsContent = [this._Image3_i(), this.txt1_i(), this.starGroup_i(), this.what_1_i(), this.what_2_i(), this.what_3_i(), this.what_4_i(), this.reset_i(), this.damage_i(), this.challenge_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_trial_rightbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "单精灵战胜炽羽炎凰·朱雀",
        e.textColor = 16777215,
        e.x = 166,
        e.y = 170,
        e
    },
    n.starGroup_i = function() {
        var e = new eui.Group;
        return this.starGroup = e,
        e.x = 133,
        e.y = 88,
        e.elementsContent = [this.star_1_i(), this.star_2_i(), this.star_3_i(), this.star_4_i(), this.star_5_i()],
        e
    },
    n.star_1_i = function() {
        var e = new eui.Image;
        return this.star_1 = e,
        e.horizontalCenter = -67.5,
        e.source = "phoenix_pass_panel_trial_star_1_png",
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    n.star_2_i = function() {
        var e = new eui.Image;
        return this.star_2 = e,
        e.horizontalCenter = -33.5,
        e.source = "phoenix_pass_panel_trial_star_1_png",
        e.verticalCenter = 0,
        e
    },
    n.star_3_i = function() {
        var e = new eui.Image;
        return this.star_3 = e,
        e.horizontalCenter = .5,
        e.source = "phoenix_pass_panel_trial_star_1_png",
        e.verticalCenter = 0,
        e
    },
    n.star_4_i = function() {
        var e = new eui.Image;
        return this.star_4 = e,
        e.horizontalCenter = 34.5,
        e.source = "phoenix_pass_panel_trial_star_1_png",
        e.verticalCenter = 0,
        e
    },
    n.star_5_i = function() {
        var e = new eui.Image;
        return this.star_5 = e,
        e.horizontalCenter = 67.5,
        e.source = "phoenix_pass_panel_trial_star_1_png",
        e.verticalCenter = 0,
        e
    },
    n.what_1_i = function() {
        var e = new eui.Image;
        return this.what_1 = e,
        e.horizontalCenter = -51.5,
        e.source = "phoenix_pass_panel_trial_what_png",
        e.verticalCenter = 29.5,
        e
    },
    n.what_2_i = function() {
        var e = new eui.Image;
        return this.what_2 = e,
        e.horizontalCenter = -11.5,
        e.source = "phoenix_pass_panel_trial_what_png",
        e.verticalCenter = 29.5,
        e
    },
    n.what_3_i = function() {
        var e = new eui.Image;
        return this.what_3 = e,
        e.horizontalCenter = 29.5,
        e.source = "phoenix_pass_panel_trial_what_png",
        e.verticalCenter = 29.5,
        e
    },
    n.what_4_i = function() {
        var e = new eui.Image;
        return this.what_4 = e,
        e.horizontalCenter = 70.5,
        e.source = "phoenix_pass_panel_trial_what_png",
        e.verticalCenter = 29.5,
        e
    },
    n.reset_i = function() {
        var e = new eui.Image;
        return this.reset = e,
        e.source = "phoenix_pass_panel_trial_reset_png",
        e.x = 340,
        e.y = 233,
        e
    },
    n.damage_i = function() {
        var e = new eui.Label;
        return this.damage = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "∞",
        e.textColor = 16777215,
        e.x = 218,
        e.y = 308,
        e
    },
    n.challenge_i = function() {
        var e = new eui.Image;
        return this.challenge = e,
        e.source = "phoenix_pass_panel_trial_challenge_png",
        e.x = 164,
        e.y = 371,
        e
    },
    n.imaGroup_i = function() {
        var e = new eui.Group;
        return this.imaGroup = e,
        e.height = 118,
        e.horizontalCenter = -188.5,
        e.width = 405,
        e.y = 491,
        e.elementsContent = [this.d2_i(), this.d1_i(), this.d3_i(), this.d4_i()],
        e
    },
    n.d2_i = function() {
        var e = new eui.Image;
        return this.d2 = e,
        e.horizontalCenter = -163.5,
        e.source = "phoenix_pass_panel_trial_ima2_png",
        e.verticalCenter = 0,
        e
    },
    n.d1_i = function() {
        var e = new eui.Image;
        return this.d1 = e,
        e.horizontalCenter = -53.5,
        e.source = "phoenix_pass_panel_trial_ima1_png",
        e.verticalCenter = 0,
        e
    },
    n.d3_i = function() {
        var e = new eui.Image;
        return this.d3 = e,
        e.horizontalCenter = 56.5,
        e.source = "phoenix_pass_panel_trial_ima3_png",
        e.verticalCenter = 0,
        e
    },
    n.d4_i = function() {
        var e = new eui.Image;
        return this.d4 = e,
        e.horizontalCenter = 166.5,
        e.source = "phoenix_pass_panel_trial_ima4_png",
        e.verticalCenter = 0,
        e
    },
    n.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.left = 29,
        e.source = "phoenix_pass_panel_fire_bag_png",
        e.y = 442,
        e
    },
    n.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.left = 29,
        e.source = "phoenix_pass_panel_fire_cure_png",
        e.y = 533,
        e
    },
    n.coin_i = function() {
        var e = new eui.Group;
        return this.coin = e,
        e.cacheAsBitmap = !0,
        e.right = 0,
        e.y = 17,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.txtCoin1_i(), this.txtCoin2_i(), this.icon_i(), this.add_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 0,
        e.y = 6,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "phoenix_pass_panel_get_img_di2_png",
        e.x = 212,
        e.y = 6,
        e
    },
    n.txtCoin1_i = function() {
        var e = new eui.Label;
        return this.txtCoin1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：0/10",
        e.textColor = 16514895,
        e.x = 226,
        e.y = 7,
        e
    },
    n.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "炽热之羽：0",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "phoenix_pass_panel_get_icon_png",
        e.x = 7,
        e.y = 0,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.height = 21,
        e.source = "phoenix_pass_panel_one_pop_add_png",
        e.width = 21,
        e.x = 161.68,
        e.y = 5.16,
        e
    },
    t
} (eui.Skin);