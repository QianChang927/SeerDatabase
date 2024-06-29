var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
pveMainPet; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_CLOSE_MODULE = "event_close_module",
        t.EVENT_BACK_MAIN_PANEL = "event_back_main_panel",
        t.EVENT_OPEN_PANEL = "event_open_panel",
        t
    } ();
    t.EventConstants = e,
    __reflect(e.prototype, "pveMainPet.EventConstants")
} (pveMainPet || (pveMainPet = {}));
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
        function r(t) {
            try {
                _(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(r, s)
        }
        _((i = i.apply(t, e || [])).next())
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
            n = e.call(t, _)
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
pveMainPet; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._foreverAndDailyValues = [2631, 201310],
            e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.initCmd = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(41426, [])];
                    case 1:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.updateValues = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e = this;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync(this._foreverAndDailyValues)["catch"](function(t) {
                            return console.error("三主宠拉取永久值每日值数据失败"),
                            Promise.reject(t)
                        })];
                    case 1:
                        return t = n.sent(),
                        this._foreverAndDailyValuesDataMap || (this._foreverAndDailyValuesDataMap = {}),
                        t.forEach(function(t, n) {
                            e._foreverAndDailyValuesDataMap[e._foreverAndDailyValues[n]] = t
                        }),
                        IS_RELEASE || console.table(this._foreverAndDailyValuesDataMap),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.getValue = function(t) {
            return t + "" in this._foreverAndDailyValuesDataMap ? this._foreverAndDailyValuesDataMap[t + ""] : -1
        },
        e.prototype.exchangeItem = function(t, e, n) {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(t, [e, [n, 0, 0, 0, 0]])];
                    case 1:
                        return i.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return i.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e
    } (egret.EventDispatcher);
    t.MgrData = e,
    __reflect(e.prototype, "pveMainPet.MgrData")
} (pveMainPet || (pveMainPet = {}));
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
pveMainPet; !
function(t) {
    var e; !
    function(t) {
        t.Main = "main",
        t.Battle = "battle",
        t.exchange = "exchange"
    } (e = t.Panel_Name || (t.Panel_Name = {}));
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.panelMap = {},
            i.addEvents(),
            t.MgrData.getInstance().initCmd().then(function() {
                t.MgrData.getInstance().updateValues().then(function() {
                    i.openPanel(e.Main)
                })
            }),
            i
        }
        return __extends(i, n),
        i.prototype.addEvents = function() {
            t.MgrData.getInstance().addEventListener(t.EventConstants.EVENT_CLOSE_MODULE, this.onClose, this),
            t.MgrData.getInstance().addEventListener(t.EventConstants.EVENT_BACK_MAIN_PANEL, this.onBackMainPanel, this),
            t.MgrData.getInstance().addEventListener(t.EventConstants.EVENT_OPEN_PANEL, this.onOpenPanel, this)
        },
        i.prototype.removeEvents = function() {
            t.MgrData.getInstance().removeEventListener(t.EventConstants.EVENT_CLOSE_MODULE, this.onClose, this),
            t.MgrData.getInstance().removeEventListener(t.EventConstants.EVENT_BACK_MAIN_PANEL, this.onBackMainPanel, this),
            t.MgrData.getInstance().removeEventListener(t.EventConstants.EVENT_OPEN_PANEL, this.onOpenPanel, this)
        },
        i.prototype.show = function() {
            var e = this;
            n.prototype.show.call(this),
            t.MgrData.getInstance().updateValues().then(function() {
                e.currentPanel && e.currentPanel.beforeUpdate().then(function() {
                    e.currentPanel.update()
                })
            })
        },
        i.prototype.openPanel = function(t) {
            var e = this;
            this.currentPanel && (this.currentPanel.parent.removeChild(this.currentPanel), this.currentPanel.removed()),
            this.currentPanel = this.panelMap[t],
            this.currentPanel || (this.currentPanel = this.createPanel(t), this.panelMap[t] = this.currentPanel),
            this.currentPanel.beforeAdd(),
            this.currentPanel.beforeUpdate().then(function() {
                e.currentPanel.update()
            })["catch"](function(t) {
                throw new Error(t)
            }),
            this.addChild(this.currentPanel)
        },
        i.prototype.createPanel = function(n) {
            var i;
            switch (n) {
            case e.Main:
                i = new t.MainPanel;
                break;
            case e.Battle:
                i = new t.BattlePanel;
                break;
            case e.exchange:
                i = new t.ExchangePanel
            }
            return i
        },
        i.prototype.onBackMainPanel = function() {
            this.openPanel(e.Main)
        },
        i.prototype.onOpenPanel = function(t) {
            this.openPanel(t.data)
        },
        i.prototype.destroy = function() {
            var t = this;
            Object.keys(this.panelMap).forEach(function(e) {
                t.panelMap[e].destroy()
            }),
            this.removeEvents(),
            n.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveMainPet = n,
    __reflect(n.prototype, "pveMainPet.PveMainPet")
} (pveMainPet || (pveMainPet = {}));
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
pveMainPet; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._battleBoss = [18219, 18220, 18221],
            n._currentSelctedIdx = -1,
            n.skinName = t.PveMainPetBattlelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(38, this, "pve_main_pet_battlel_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.adaptLeftContent(this.leftBtns),
            this.grpBack.btnHelp.x = 350,
            this.initEvents(),
            this.imgSelected.visible = !1
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchEvent, this),
            ImageButtonUtil.add(this.btnBattle, core.gameUtil.throttle(this.onTouchEvent, this, 1e3, !0), this),
            ImageButtonUtil.add(this.btnPet, this.onTouchEvent, this),
            ImageButtonUtil.add(this.btnCure, this.onTouchEvent, this),
            ImageButtonUtil.add(this.helpBtn_png, this.onTouchEvent, this),
            ImageButtonUtil.add(this.pet1, this.onTouchEvent, this, !1, !1),
            ImageButtonUtil.add(this.pet2, this.onTouchEvent, this, !1, !1),
            ImageButtonUtil.add(this.pet3, this.onTouchEvent, this, !1, !1)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchEvent = function(e) {
            switch (e.currentTarget) {
            case this.helpBtn_png:
                var n = config.Help_tips.getItem(38),
                i = {};
                i.str = StringUtil.TransformLineBreak(n.tips),
                tipsPop.TipsPop.openHelpPop(i);
                break;
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.btnBattle:
                if (this._currentSelctedIdx < 0) return void BubblerManager.getInstance().showText("请选择要挑战的精灵");
                FightManager.fightNoMapBoss("", this._battleBoss[this._currentSelctedIdx]);
                break;
            case this.btnPet:
                ModuleManager.showModuleByID(10);
                break;
            case this.btnCure:
                PetManager.cureAll();
                break;
            case this.pet1:
                this.selectedPet(0);
                break;
            case this.pet2:
                this.selectedPet(1);
                break;
            case this.pet3:
                this.selectedPet(2)
            }
        },
        n.prototype.selectedPet = function(t) {
            this._currentSelctedIdx = t,
            this.imgSelected.x = this["pet" + (t + 1)].x + 18,
            this.imgSelected.y = this["pet" + (t + 1)].y + 15,
            this.imgSelected.visible = !0
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = 3,
            n = t.MgrData.getInstance().getValue(201310);
            this.txtcount.text = "今日已战胜次数：" + n + "/" + e,
            this.btnTomorrow.visible = n >= e,
            this.btnBattle.visible = !this.btnTomorrow.visible
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.removed = function() {
            this.reset()
        },
        n.prototype.reset = function() {
            this.imgSelected.visible = !1,
            this._currentSelctedIdx = -1
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.BattlePanel = e,
    __reflect(e.prototype, "pveMainPet.BattlePanel", ["pveMainPet.IPanel"])
} (pveMainPet || (pveMainPet = {}));
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
        function r(t) {
            try {
                _(i.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(i["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(r, s)
        }
        _((i = i.apply(t, e || [])).next())
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
            n = e.call(t, _)
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
pveMainPet; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._currentSelectedTabVal = 1,
            n._productIDs = [245767, 245768, 245769],
            n._exchangeID = [6216, 6217, 6218],
            n._config = RES.getRes("pve_main_pet_config_json").exchange,
            n.skinName = t.PveMainPetExchangeSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._radGrp = this.rb_shui.group,
            this.rb_shui.selected = !0,
            this.initEvents(),
            this.initOldPveBtnClose(0, this, "pve_main_pet_battlel_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this)
        },
        n.prototype.initEvents = function() {
            for (var t = this,
            e = function(e) {
                ImageButtonUtil.add(n["btnAdd" + (e + 1)],
                function() {
                    PayManager.doPayFunc(function() {
                        var n = {};
                        n.type = "product_diamond",
                        n.ins = {
                            iconID: t._config[e].costId,
                            productID: t._productIDs[e]
                        },
                        n.caller = t,
                        n.callBack = function(n, i) {
                            KTool.buyProductByCallback(t._productIDs[e], i,
                            function() {
                                KTool.doExchange(t._exchangeID[e], i,
                                function() {
                                    t.update()
                                })
                            })
                        },
                        ModuleManager.showModuleByID(1, n)
                    },
                    t)
                },
                n)
            },
            n = this, i = 0; 3 > i; i++) e(i);
            ImageButtonUtil.add(this.btnClose, this.onTouchEvent, this),
            ImageButtonUtil.add(this.btnduihuan, core.gameUtil.throttle(this.onTouchEvent, this, 1e3), this),
            ImageButtonUtil.add(this.btnduihuan_2, core.gameUtil.throttle(this.onTouchEvent, this, 1e3), this),
            ImageButtonUtil.add(this.btnduihuan_3, core.gameUtil.throttle(this.onTouchEvent, this, 1e3), this),
            ImageButtonUtil.add(this.btnduihuan_4, core.gameUtil.throttle(this.onTouchEvent, this, 1e3), this),
            this._radGrp.addEventListener(egret.Event.CHANGE, this.onChangeTap, this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateItem, this),
            ImageButtonUtil.add(this.iconMark,
            function() {
                var e = {};
                e.ins = t._config[t._currentSelectedTabVal - 1].mask.id,
                tipsPop.TipsPop.openCounterMarkPop(e)
            },
            this),
            ImageButtonUtil.add(this.iconskill,
            function() {
                var e = {};
                e.id = t._config[t._currentSelectedTabVal - 1].skill.id,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_texiing,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], t._config[t._currentSelectedTabVal - 1].petId, "", AppDoStyle.NULL)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._radGrp.removeEventListener(egret.Event.CHANGE, this.onChangeTap, this),
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateItem, this)
        },
        n.prototype.onChangeTap = function(t) {
            this._currentSelectedTabVal = +this._radGrp.selectedValue,
            this.onUpdateTabState()
        },
        n.prototype.onTouchEvent = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.btnduihuan:
                this.exchangePop("pet");
                break;
            case this.btnduihuan_2:
                this.exchangePop("mask");
                break;
            case this.btnduihuan_3:
                this.exchangePop("texing");
                break;
            case this.btnduihuan_4:
                this.exchangePop("skill")
            }
        },
        n.prototype.exchangePop = function(t) {
            var e = this,
            n = this._config[this._currentSelectedTabVal - 1],
            i = ItemXMLInfo.getName(n.costId),
            a = "兑换当前道具需要消耗" + i + "x" + n[t].cnt + "个，点击确认继续";
            Alert.show(a,
            function() {
                e.doExchange(t, n)
            })
        },
        n.prototype.doExchange = function(e, n) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, a, o;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        if (!this.checkCost(n.costId, n[e].cnt)) return [3, 8];
                        switch (i = e) {
                        case "pet":
                            return [3, 1];
                        case "mask":
                            return [3, 4];
                        case "texing":
                            return [3, 4];
                        case "skill":
                            return [3, 4]
                        }
                        return [3, 6];
                    case 1:
                        return [4, SocketConnection.sendWithPromise(CommandID.EXCHANGE_CLOTH_COMPLETE, [n[e].exchange])["catch"](function(t) {
                            return Promise.reject(t)
                        })];
                    case 2:
                        return r.sent(),
                        [4, this.updateCheckPetsFlag()];
                    case 3:
                        return r.sent(),
                        [3, 7];
                    case 4:
                        return a = n.petId,
                        PetManager.isDefaultPet(a) ? [4, t.MgrData.getInstance().exchangeItem(n[e].msg, n[e].msgflag, PetManager.defaultTime)] : (o = PetXMLInfo.getName(a), Alarm.show("请先将" + o + "设为首发位置!",
                        function() {
                            ModuleManager.showModuleByID(10)
                        }), [2, Promise.resolve()]);
                    case 5:
                        r.sent(),
                        BubblerManager.getInstance().showText("兑换成功"),
                        r.label = 6;
                    case 6:
                        return [3, 7];
                    case 7:
                        return this.update(),
                        [3, 9];
                    case 8:
                        BubblerManager.getInstance().showText("所需道具不足"),
                        r.label = 9;
                    case 9:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.checkCost = function(t, e) {
            var n = ItemManager.getNumByID(t);
            return n >= e
        },
        n.prototype.beforeUpdate = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.updateCheckPetsFlag()];
                    case 1:
                        return t.sent(),
                        [4, this.offsetPetsFlag()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.update = function() {
            this.onUpdateTabState(),
            this.onUpdateItem()
        },
        n.prototype.beforeAdd = function() {},
        n.prototype.removed = function() {},
        n.prototype.onUpdateItem = function(t) {
            void 0 === t && (t = null),
            this.txt_item1cnt.text = "主宠本源·水：" + ItemManager.getNumByID(this._config[0].costId) + "个",
            this.txt_item2cnt.text = "主宠本源·火：" + ItemManager.getNumByID(this._config[1].costId) + "个",
            this.txt_item3cnt.text = "主宠本源·草：" + ItemManager.getNumByID(this._config[2].costId) + "个"
        },
        n.prototype.onUpdateTabState = function() {
            var e = this,
            n = this._currentSelectedTabVal - 1,
            i = [this.pet1, this.pet2, this.pet3];
            i.forEach(function(t, e) {
                t.visible = e === n
            });
            var a = ["pve_main_pet_exchange_iconShui_png", "pve_main_pet_exchange_iconHuo_png", "pve_main_pet_exchange_iconCao_png"];
            this.iconMark.source = a[n];
            var o = [this.costicon_2, this.costicon_3, this.costicon_4, this.costicon];
            o.forEach(function(t) {
                t.source = ClientConfig.getItemIcon(e._config[n].costId)
            });
            var r = Boolean(this._petsClassFlag[n]);
            DisplayUtil.setEnabled(this.btnduihuan, !r, r);
            var s = Boolean(this._offsetPetClassFlag[n]),
            _ = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(this._config[n].mask.flagv), this._config[n].mask.flagbit - 1)) || s;
            DisplayUtil.setEnabled(this.btnduihuan_2, !_, _);
            var u = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(this._config[n].skill.flagv), this._config[n].skill.flagbit - 1)) || s;
            DisplayUtil.setEnabled(this.btnduihuan_4, !u, u);
            var h = Boolean(BitUtil.getBit(t.MgrData.getInstance().getValue(this._config[n].texing.flagv), this._config[n].texing.flagbit - 1)) || s;
            DisplayUtil.setEnabled(this.btnduihuan_3, !h, h)
        },
        n.prototype.updateCheckPetsFlag = function() {
            var t = this;
            return new Promise(function(e, n) {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t, n, i;
                    return __generator(this,
                    function(a) {
                        switch (a.label) {
                        case 0:
                            for (t = [], n = 0; 3 > n; n++) t.push(PetXMLInfo.getPetClass(this._config[n].petId));
                            return i = this,
                            [4, KTool.checkMultiPetsClassAsync(t)["catch"](function(t) {
                                throw console.error(t),
                                new Error("检查精灵唯一性出错")
                            })];
                        case 1:
                            return i._petsClassFlag = a.sent(),
                            [2, e()]
                        }
                    })
                })
            })
        },
        n.prototype.offsetPetsFlag = function() {
            var t = this;
            return new Promise(function(e, n) {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t;
                    return __generator(this,
                    function(n) {
                        switch (n.label) {
                        case 0:
                            return t = this,
                            [4, KTool.checkMultiPetsClassAsync([1634])["catch"](function(t) {
                                throw console.error(t),
                                new Error("检查精灵唯一性出错")
                            })];
                        case 1:
                            return t._offsetPetClassFlag = n.sent(),
                            this._offsetPetClassFlag.push(0, 0),
                            [2, e()]
                        }
                    })
                })
            })
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.ExchangePanel = e,
    __reflect(e.prototype, "pveMainPet.ExchangePanel", ["pveMainPet.IPanel"])
} (pveMainPet || (pveMainPet = {}));
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
pveMainPet; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.PveMainPetMainSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_CLOSE_MODULE)
            },
            this),
            this.initEvents()
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnExchange, this.onTouchEvent, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchEvent, this),
            ImageButtonUtil.add(this.btnBattle, this.onTouchEvent, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchEvent = function(e) {
            switch (e.currentTarget) {
            case this.btnExchange:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.exchange);
                break;
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_CLOSE_MODULE);
                break;
            case this.btnBattle:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.Battle)
            }
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {},
        n.prototype.beforeAdd = function() {},
        n.prototype.removed = function() {},
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.MainPanel = e,
    __reflect(e.prototype, "pveMainPet.MainPanel", ["pveMainPet.IPanel"])
} (pveMainPet || (pveMainPet = {})),
window.pveMainPet = window.pveMainPet || {};
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
generateEUI.paths["resource/eui_skins/PveMainPetBattlelSkin.exml"] = window.pveMainPet.PveMainPetBattlelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "texture_1", "txtcount", "count", "btnCure", "btnPet", "leftBtns", "aliow", "aliow_2", "btnTomorrow", "btnBattle", "pet1", "pet2", "pet3", "imgSelected", "up_bg", "btnClose", "title", "helpBtn_png", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.count_i(), this.leftBtns_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_battlel_bg_png",
        t.y = 0,
        t
    },
    n.count_i = function() {
        var t = new eui.Group;
        return this.count = t,
        t.right = 0,
        t.y = 586,
        t.elementsContent = [this.texture_1_i(), this.txtcount_i()],
        t
    },
    n.texture_1_i = function() {
        var t = new eui.Image;
        return this.texture_1 = t,
        t.height = 44,
        t.source = "pve_main_pet_battlel_texture_1_png",
        t.width = 320,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtcount_i = function() {
        var t = new eui.Label;
        return this.txtcount = t,
        t.size = 20.0123280240754,
        t.text = "今日已战胜次数：9/9",
        t.textColor = 5879295,
        t.x = 89,
        t.y = 12,
        t
    },
    n.leftBtns_i = function() {
        var t = new eui.Group;
        return this.leftBtns = t,
        t.left = 10,
        t.y = 206,
        t.elementsContent = [this.btnCure_i(), this.btnPet_i()],
        t
    },
    n.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 57,
        t.source = "pve_main_pet_battlel_btnCure_png",
        t.width = 57,
        t.x = 0,
        t.y = 71,
        t
    },
    n.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 57,
        t.source = "pve_main_pet_battlel_btnPet_png",
        t.width = 57,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 533,
        t.horizontalCenter = 25.5,
        t.visible = !0,
        t.width = 1064,
        t.y = 84,
        t.elementsContent = [this.aliow_i(), this.aliow_2_i(), this.btnTomorrow_i(), this.btnBattle_i(), this.pet1_i(), this.pet2_i(), this.pet3_i(), this.imgSelected_i()],
        t
    },
    n.aliow_i = function() {
        var t = new eui.Image;
        return this.aliow = t,
        t.height = 79,
        t.source = "pve_main_pet_battlel_aliow_png",
        t.width = 57,
        t.x = 324,
        t.y = 206,
        t
    },
    n.aliow_2_i = function() {
        var t = new eui.Image;
        return this.aliow_2 = t,
        t.height = 79,
        t.source = "pve_main_pet_battlel_aliow_png",
        t.width = 57,
        t.x = 684,
        t.y = 206,
        t
    },
    n.btnTomorrow_i = function() {
        var t = new eui.Image;
        return this.btnTomorrow = t,
        t.height = 50,
        t.source = "pve_main_pet_battlel_btnTomorrow_png",
        t.width = 174,
        t.x = 439,
        t.y = 483,
        t
    },
    n.btnBattle_i = function() {
        var t = new eui.Image;
        return this.btnBattle = t,
        t.height = 50,
        t.source = "pve_main_pet_battlel_btnBattle_png",
        t.width = 174,
        t.x = 439,
        t.y = 483,
        t
    },
    n.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.height = 495,
        t.source = "pve_main_pet_battlel_pet1_png",
        t.width = 347,
        t.x = 0,
        t.y = 0,
        t
    },
    n.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.height = 486,
        t.source = "pve_main_pet_battlel_pet2_png",
        t.width = 347,
        t.x = 358,
        t.y = 0,
        t
    },
    n.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.height = 486,
        t.source = "pve_main_pet_battlel_pet3_png",
        t.width = 347,
        t.x = 716,
        t.y = 0,
        t
    },
    n.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.height = 471,
        t.source = "pve_main_pet_battlel_imgSelected_png",
        t.visible = !0,
        t.width = 305,
        t.x = 18,
        t.y = 15,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.visible = !1,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i(), this.helpBtn_png_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_main_up_bg_png",
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_main_pet_main_btnClose_png",
        t.width = 32,
        t.x = 31,
        t.y = 5,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_main_pet_battlel_title_png",
        t.width = 265,
        t.x = 112.00000000000003,
        t.y = 7,
        t
    },
    n.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.height = 25,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_main_pet_battlel_helpBtn_png_png",
        t.width = 22,
        t.x = 389,
        t.y = 14.000000000000057,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveMainPetExchangeSkin.exml"] = window.pveMainPet.PveMainPetExchangeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img_di", "txt_item1cnt", "txt_item2cnt", "txt_item3cnt", "iconitem3", "iconitem2", "iconitem", "btnAdd1", "btnAdd2", "btnAdd3", "pet1", "pet2", "pet3", "btnduihuan", "costicon", "iconBg", "iconMark", "btnduihuan_2", "img_di_3", "txt_num_2", "costicon_2", "iconBg_2", "icon_texiing", "btnduihuan_3", "txt_num_3", "costicon_3", "iconBg_3", "iconskill", "btnduihuan_4", "img_di_5", "txt_num_4", "costicon_4", "rb_shui", "rb_huo", "rb_cao", "up_bg", "btnClose", "title", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this._Group6_i(), this.top_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_main_pet_exchangeshui_btn_shui_up_png"), new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image2", "source", "pve_main_pet_exchangeshui_btn_shui_down_png"), new eui.SetProperty("_Image2", "x", 0), new eui.SetProperty("_Image2", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "pve_main_pet_exchangehuo_btn_huo_up_png"), new eui.SetProperty("_Image1", "x", 8), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image2", "source", "pve_main_pet_exchangehuo_btn_huo_down_png"), new eui.SetProperty("_Image2", "x", 0), new eui.SetProperty("_Image2", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "source", "pve_main_pet_exchangecao_btn_cao_up_png"), new eui.SetProperty("_Image2", "x", 8), new eui.SetProperty("_Image2", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pve_main_pet_exchangecao_btn_cao_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        n._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_battlel_bg_png",
        t.y = 0,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 1.5,
        t.width = 1133,
        t.y = 587,
        t.elementsContent = [this.img_di_i(), this.txt_item1cnt_i(), this.txt_item2cnt_i(), this.txt_item3cnt_i(), this.iconitem3_i(), this.iconitem2_i(), this.iconitem_i(), this.btnAdd1_i(), this.btnAdd2_i(), this.btnAdd3_i()],
        t
    },
    o.img_di_i = function() {
        var t = new eui.Image;
        return this.img_di = t,
        t.height = 53,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(542, 18, 54, 17),
        t.source = "pve_main_pet_exchange_img_di_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    o.txt_item1cnt_i = function() {
        var t = new eui.Label;
        return this.txt_item1cnt = t,
        t.size = 20,
        t.text = "主宠本源·水：9个",
        t.textColor = 16317183,
        t.x = 167,
        t.y = 17,
        t
    },
    o.txt_item2cnt_i = function() {
        var t = new eui.Label;
        return this.txt_item2cnt = t,
        t.size = 20,
        t.text = "主宠本源·火：9个",
        t.textColor = 16317183,
        t.x = 506,
        t.y = 17,
        t
    },
    o.txt_item3cnt_i = function() {
        var t = new eui.Label;
        return this.txt_item3cnt = t,
        t.size = 20,
        t.text = "主宠本源·草：9个",
        t.textColor = 16317183,
        t.x = 843,
        t.y = 17,
        t
    },
    o.iconitem3_i = function() {
        var t = new eui.Image;
        return this.iconitem3 = t,
        t.height = 40,
        t.source = "pve_main_pet_exchange_iconitem3_png",
        t.width = 42,
        t.x = 121,
        t.y = 6,
        t
    },
    o.iconitem2_i = function() {
        var t = new eui.Image;
        return this.iconitem2 = t,
        t.height = 40,
        t.source = "pve_main_pet_exchange_iconitem2_png",
        t.width = 42,
        t.x = 460,
        t.y = 6,
        t
    },
    o.iconitem_i = function() {
        var t = new eui.Image;
        return this.iconitem = t,
        t.height = 40,
        t.source = "pve_main_pet_exchange_iconitem_png",
        t.width = 42,
        t.x = 797,
        t.y = 6,
        t
    },
    o.btnAdd1_i = function() {
        var t = new eui.Image;
        return this.btnAdd1 = t,
        t.source = "pve_main_pet_main_btnAdd_png",
        t.x = 353,
        t.y = 12,
        t
    },
    o.btnAdd2_i = function() {
        var t = new eui.Image;
        return this.btnAdd2 = t,
        t.source = "pve_main_pet_main_btnAdd_png",
        t.x = 690,
        t.y = 12,
        t
    },
    o.btnAdd3_i = function() {
        var t = new eui.Image;
        return this.btnAdd3 = t,
        t.source = "pve_main_pet_main_btnAdd_png",
        t.x = 1023,
        t.y = 12,
        t
    },
    o._Group6_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -16.5,
        t.y = 61,
        t.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this.rb_shui_i(), this.rb_huo_i(), this.rb_cao_i()],
        t
    },
    o.pet1_i = function() {
        var t = new eui.Image;
        return this.pet1 = t,
        t.height = 396,
        t.source = "pve_main_pet_exchange_pet1_png",
        t.width = 474,
        t.x = 175,
        t.y = 81,
        t
    },
    o.pet2_i = function() {
        var t = new eui.Image;
        return this.pet2 = t,
        t.height = 386,
        t.source = "pve_main_pet_exchange_pet2_png",
        t.width = 476,
        t.x = 203,
        t.y = 81,
        t
    },
    o.pet3_i = function() {
        var t = new eui.Image;
        return this.pet3 = t,
        t.height = 508,
        t.source = "pve_main_pet_exchange_pet3_png",
        t.width = 338,
        t.x = 261,
        t.y = 1,
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 360,
        t.y = 414,
        t.elementsContent = [this.btnduihuan_i(), this._Image1_i(), this._Label1_i(), this.costicon_i()],
        t
    },
    o.btnduihuan_i = function() {
        var t = new eui.Image;
        return this.btnduihuan = t,
        t.height = 50,
        t.source = "pve_main_pet_exchange_btnduihuan_png",
        t.width = 174,
        t.x = 0,
        t.y = 28,
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "pve_main_pet_exchange_img_di_3_png",
        t.width = 162,
        t.x = 3,
        t.y = 0,
        t
    },
    o._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 22,
        t.text = "x60",
        t.textColor = 10480889,
        t.x = 78,
        t.y = 6,
        t
    },
    o.costicon_i = function() {
        var t = new eui.Image;
        return this.costicon = t,
        t.height = 23,
        t.source = "pve_main_pet_exchange_costicon_png",
        t.width = 24,
        t.x = 48,
        t.y = 3,
        t
    },
    o._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 732,
        t.y = 9,
        t.elementsContent = [this.iconBg_i(), this.iconMark_i(), this.btnduihuan_2_i(), this.img_di_3_i(), this.txt_num_2_i(), this.costicon_2_i()],
        t
    },
    o.iconBg_i = function() {
        var t = new eui.Image;
        return this.iconBg = t,
        t.height = 202,
        t.source = "pve_main_pet_exchange_iconBg_png",
        t.width = 209,
        t.x = 0,
        t.y = 0,
        t
    },
    o.iconMark_i = function() {
        var t = new eui.Image;
        return this.iconMark = t,
        t.height = 87,
        t.source = "pve_main_pet_exchange_iconCao_png",
        t.width = 91,
        t.x = 56,
        t.y = 47,
        t
    },
    o.btnduihuan_2_i = function() {
        var t = new eui.Image;
        return this.btnduihuan_2 = t,
        t.height = 50,
        t.source = "pve_main_pet_exchange_btnduihuan_png",
        t.width = 174,
        t.x = 15,
        t.y = 153,
        t
    },
    o.img_di_3_i = function() {
        var t = new eui.Image;
        return this.img_di_3 = t,
        t.height = 28,
        t.source = "pve_main_pet_exchange_img_di_png",
        t.width = 162,
        t.x = 18,
        t.y = 125,
        t
    },
    o.txt_num_2_i = function() {
        var t = new eui.Label;
        return this.txt_num_2 = t,
        t.size = 22,
        t.text = "x30",
        t.textColor = 10480889,
        t.x = 93,
        t.y = 131,
        t
    },
    o.costicon_2_i = function() {
        var t = new eui.Image;
        return this.costicon_2 = t,
        t.height = 23,
        t.source = "pve_main_pet_exchange_costicon_png",
        t.width = 24,
        t.x = 63,
        t.y = 128,
        t
    },
    o._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 884,
        t.y = 179,
        t.elementsContent = [this.iconBg_2_i(), this.icon_texiing_i(), this.btnduihuan_3_i(), this._Image2_i(), this.txt_num_3_i(), this.costicon_3_i()],
        t
    },
    o.iconBg_2_i = function() {
        var t = new eui.Image;
        return this.iconBg_2 = t,
        t.height = 202,
        t.source = "pve_main_pet_exchange_iconBg_png",
        t.width = 209,
        t.x = 0,
        t.y = 0,
        t
    },
    o.icon_texiing_i = function() {
        var t = new eui.Image;
        return this.icon_texiing = t,
        t.height = 84,
        t.source = "pve_main_pet_exchange_icon_texiing_png",
        t.width = 73,
        t.x = 64,
        t.y = 53,
        t
    },
    o.btnduihuan_3_i = function() {
        var t = new eui.Image;
        return this.btnduihuan_3 = t,
        t.height = 50,
        t.source = "pve_main_pet_exchange_btnduihuan_png",
        t.width = 174,
        t.x = 13,
        t.y = 152,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "pve_main_pet_exchange_img_di_png",
        t.width = 163,
        t.x = 15,
        t.y = 124,
        t
    },
    o.txt_num_3_i = function() {
        var t = new eui.Label;
        return this.txt_num_3 = t,
        t.size = 22,
        t.text = "x30",
        t.textColor = 10480889,
        t.x = 90,
        t.y = 130,
        t
    },
    o.costicon_3_i = function() {
        var t = new eui.Image;
        return this.costicon_3 = t,
        t.height = 23,
        t.source = "pve_main_pet_exchange_costicon_png",
        t.width = 24,
        t.x = 61,
        t.y = 127,
        t
    },
    o._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 675,
        t.y = 305,
        t.elementsContent = [this.iconBg_3_i(), this.iconskill_i(), this.btnduihuan_4_i(), this.img_di_5_i(), this.txt_num_4_i(), this.costicon_4_i()],
        t
    },
    o.iconBg_3_i = function() {
        var t = new eui.Image;
        return this.iconBg_3 = t,
        t.height = 202,
        t.source = "pve_main_pet_exchange_iconBg_png",
        t.width = 209,
        t.x = 0,
        t.y = 0,
        t
    },
    o.iconskill_i = function() {
        var t = new eui.Image;
        return this.iconskill = t,
        t.height = 78,
        t.source = "pve_main_pet_exchange_iconskill_png",
        t.width = 70,
        t.x = 66,
        t.y = 55,
        t
    },
    o.btnduihuan_4_i = function() {
        var t = new eui.Image;
        return this.btnduihuan_4 = t,
        t.height = 50,
        t.source = "pve_main_pet_exchange_btnduihuan_png",
        t.width = 174,
        t.x = 15,
        t.y = 152,
        t
    },
    o.img_di_5_i = function() {
        var t = new eui.Image;
        return this.img_di_5 = t,
        t.height = 28,
        t.source = "pve_main_pet_exchange_img_di_png",
        t.width = 162,
        t.x = 18,
        t.y = 124,
        t
    },
    o.txt_num_4_i = function() {
        var t = new eui.Label;
        return this.txt_num_4 = t,
        t.size = 22,
        t.text = "x30",
        t.textColor = 10480889,
        t.x = 93,
        t.y = 130,
        t
    },
    o.costicon_4_i = function() {
        var t = new eui.Image;
        return this.costicon_4 = t,
        t.height = 23,
        t.source = "pve_main_pet_exchange_costicon_png",
        t.width = 24,
        t.x = 63,
        t.y = 127,
        t
    },
    o.rb_shui_i = function() {
        var t = new eui.RadioButton;
        return this.rb_shui = t,
        t.groupName = "rbPage",
        t.value = "1",
        t.x = 40,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_huo_i = function() {
        var t = new eui.RadioButton;
        return this.rb_huo = t,
        t.groupName = "rbPage",
        t.value = "2",
        t.x = 20,
        t.y = 111,
        t.skinName = i,
        t
    },
    o.rb_cao_i = function() {
        var t = new eui.RadioButton;
        return this.rb_cao = t,
        t.groupName = "rbPage",
        t.value = "3",
        t.x = 0,
        t.y = 222,
        t.skinName = a,
        t
    },
    o.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.visible = !1,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    o.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_main_up_bg_png",
        t.y = 0,
        t
    },
    o.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_main_pet_main_btnClose_png",
        t.width = 32,
        t.x = 31,
        t.y = 5,
        t
    },
    o.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_main_pet_battlel_title_png",
        t.width = 265,
        t.x = 111.99999999999997,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveMainPetMainSkin.exml"] = window.pveMainPet.PveMainPetMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["mainbg", "pet", "btnBattle", "btnExchange", "title", "up_bg", "btnClose", "top"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.mainbg_i(), this._Group1_i(), this.top_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.mainbg_i = function() {
        var t = new eui.Image;
        return this.mainbg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_main_mainbg_png",
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 15,
        t.elementsContent = [this.pet_i(), this.btnBattle_i(), this.btnExchange_i(), this.title_i()],
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 623,
        t.source = "pve_main_pet_main_pet_png",
        t.visible = !0,
        t.width = 1136,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnBattle_i = function() {
        var t = new eui.Image;
        return this.btnBattle = t,
        t.height = 50,
        t.source = "pve_main_pet_main_btnBattle_png",
        t.width = 174,
        t.x = 351,
        t.y = 552,
        t
    },
    n.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.height = 50,
        t.source = "pve_main_pet_main_btnExchange_png",
        t.width = 174,
        t.x = 608,
        t.y = 553,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 137,
        t.source = "pve_main_pet_main_title_png",
        t.width = 785,
        t.x = 194,
        t.y = 27,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.right = 0,
        t.visible = !1,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 51,
        t.left = 0,
        t.right = 0,
        t.source = "pve_main_pet_main_up_bg_png",
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_main_pet_main_btnClose_png",
        t.width = 32,
        t.x = 31,
        t.y = 5,
        t
    },
    e
} (eui.Skin);