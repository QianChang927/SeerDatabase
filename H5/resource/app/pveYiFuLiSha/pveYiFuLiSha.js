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
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompRuleSkin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            this._addEvents()
        },
        i.prototype.setData = function(t) {
            this.data = t;
            for (var e = 0; 3 > e; e++) this["rule" + e].setData(this.data[e])
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (BaseModule);
    t.CompRule = e,
    __reflect(e.prototype, "pveYiFuLiSha.CompRule")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
pveYiFuLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.GetInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.CLOSE_MODULE = "close_module",
        e.SELECTED_LEVEL = "selected_level",
        e.CHANGE_PANEL = "change_panel",
        e.BACK_MAIN_PANEL = "back_main_panel",
        e
    } (egret.EventDispatcher);
    t.MgrEvents = e,
    __reflect(e.prototype, "pveYiFuLiSha.MgrEvents")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PveyifulishasettlementSkin,
            i
        }
        return __extends(i, e),
        i.OpenSettlement = function(t) {
            var e = PopViewManager.createDefaultStyleObject();
            e.caller = this,
            e.clickMaskHandler = function() {},
            PopViewManager.getInstance().openView(new i, e, t)
        },
        i.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFix,
            function() {
                e.hide(),
                e._data.star >= 3 && t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL)
            },
            this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype._upDateView = function() {
            this.txt_desc.text = this._data.desc;
            for (var t = 0; 3 > t; t++) this["star" + t].visible = t + 1 <= this._data.star
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PopSettlement = e,
    __reflect(e.prototype, "pveYiFuLiSha.PopSettlement")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e; !
    function(t) {
        t.MAIN = "main",
        t.LEVEL_1 = "level_1",
        t.LEVEL_2 = "level_2",
        t.LEVEL_3 = "level_3",
        t.EXCHANGE = "exchange"
    } (e = t.PANEL_NAMES || (t.PANEL_NAMES = {}));
    var i = function(i) {
        function n() {
            var t = i.call(this) || this;
            return t._panelMap = {},
            t
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            var n = this;
            i.prototype.childrenCreated.call(this),
            this._addEvents(),
            t.MgrData.GetInstance().SetUpdateValueFunc(function() {
                return __awaiter(n, void 0, void 0,
                function() {
                    return __generator(this,
                    function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this.updateConfigMulitValues()];
                        case 1:
                            return e.sent(),
                            t.MgrData.GetInstance().SetValues(this.getMultivalue.bind(this)),
                            [2, Promise.resolve()]
                        }
                    })
                })
            }),
            t.MgrData.GetInstance().SetValues(this.getMultivalue.bind(this)),
            this._openPanel(e.MAIN)
        },
        n.prototype._addEvents = function() {
            t.MgrEvents.GetInstance().addEventListener(t.MgrEvents.CLOSE_MODULE, this._closeHandle, this),
            t.MgrEvents.GetInstance().addEventListener(t.MgrEvents.BACK_MAIN_PANEL, this._onBackMainPanelHandle, this),
            t.MgrEvents.GetInstance().addEventListener(t.MgrEvents.CHANGE_PANEL, this._onChangePanel, this)
        },
        n.prototype._removeEvents = function() {
            t.MgrEvents.GetInstance().removeEventListener(t.MgrEvents.CLOSE_MODULE, this._closeHandle, this),
            t.MgrEvents.GetInstance().removeEventListener(t.MgrEvents.BACK_MAIN_PANEL, this._onBackMainPanelHandle, this),
            t.MgrEvents.GetInstance().removeEventListener(t.MgrEvents.CHANGE_PANEL, this._onChangePanel, this)
        },
        n.prototype._openPanel = function(t) {
            if (!this._panelMap[t] && (this._panelMap[t] = this._createPanel(t), !this._panelMap[t])) return console.error("当前面板不存在%s", t);
            this.removeChildren();
            var e = this._panelMap[t];
            this.addChild(this._panelMap[t]),
            e.UpdateView()
        },
        n.prototype._createPanel = function(i) {
            var n;
            switch (i) {
            case e.MAIN:
                n = new t.MainPanel;
                break;
            case e.LEVEL_1:
                n = new t.Level1;
                break;
            case e.LEVEL_2:
                n = new t.Level2;
                break;
            case e.LEVEL_3:
                n = new t.Level3;
                break;
            case e.EXCHANGE:
                n = new t.UpPet
            }
            return n
        },
        n.prototype._onBackMainPanelHandle = function() {
            this._openPanel(e.MAIN)
        },
        n.prototype._onChangePanel = function(t) {
            this._openPanel(t.data)
        },
        n.prototype._closeHandle = function() {
            this.onClose()
        },
        n.prototype.destroy = function() {
            for (var t in this._panelMap) DisplayUtil.removeForParent(this._panelMap[t]),
            this._panelMap[t].destroy();
            this._removeEvents(),
            i.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.PveYiFuLiSha = i,
    __reflect(i.prototype, "pveYiFuLiSha.PveYiFuLiSha")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompLevelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.setData = function(t) {
            this._level = t;
            var e = ["pveYiFuLiShaMain_title_fkdjm_png", "pveYiFuLiShaMain_title_hzdzy_png", "pveYiFuLiShaMain_title_hwdec_png"];
            this.title.source = e[this._level - 1],
            this.showStyle.source = "pveYiFuLiShaMain_show" + this._level + "_png"
        },
        i.prototype._addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFix,
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.SELECTED_LEVEL, !1, e._level)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            this._addEvents()
        },
        i.prototype.updateRender = function() {
            switch (this._level) {
            case 1:
                this._setLevel1Style();
                break;
            case 2:
                this._setLevel2Style();
                break;
            case 3:
                this._setLevel3Style()
            }
            var e = t.MgrData.GetInstance().GetLevelFlag(this._level),
            i = t.MgrData.GetInstance().GetFlagPet();
            this.btnFix.visible = !e,
            DisplayUtil.setEnabled(this.btnFix, !i, i),
            this.flag_next.visible = e
        },
        i.prototype._setLevel1Style = function() {
            for (var e = t.MgrData.GetInstance().GetLevel1BossIdx(), i = 0; 3 > i; i++) this["star" + i].visible = e > i
        },
        i.prototype._setLevel2Style = function() {
            var e = t.MgrData.GetInstance().GetLevel2CureFlag(),
            i = e.filter(function(t) {
                return t > 0
            }).length,
            n = 0;
            i > 0 && 3 > i ? n = 1 : i >= 3 && 5 > i ? n = 2 : i >= 5 && (n = 3);
            for (var r = 0; 3 > r; r++) this["star" + r].visible = n > r
        },
        i.prototype._setLevel3Style = function() {
            var e = t.MgrData.GetInstance().GetLevel3MaxHurt(),
            i = 0;
            e >= 300 && 1500 > e ? i = 1 : e >= 1500 && 3e3 > e ? i = 2 : e >= 3e3 && (i = 3);
            for (var n = 0; 3 > n; n++) this["star" + n].visible = i > n
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.CompLevelItem = e,
    __reflect(e.prototype, "pveYiFuLiSha.CompLevelItem")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._valueMap = {},
            e
        }
        return __extends(e, t),
        e.GetInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.SetUpdateValueFunc = function(t) {
            this._updateValueFunc = t
        },
        e.prototype.SetValues = function(t) {
            for (var e = core.constant.ValueType,
            i = [{
                t: e.DAILY,
                v: 14774
            },
            {
                t: e.DAILY,
                v: 14775
            },
            {
                t: e.DAILY,
                v: 14776
            },
            {
                t: e.DAILY,
                v: 14777
            },
            {
                t: e.DAILY,
                v: 14778
            },
            {
                t: e.DAILY,
                v: 14779
            },
            {
                t: e.DAILY,
                v: 14780
            },
            {
                t: e.DAILY,
                v: 14781
            },
            {
                t: e.DAILYBITBUF,
                v: 1000437
            },
            {
                t: e.PLAYER_INFO,
                v: 989
            },
            {
                t: e.FOREVER,
                v: 106414
            },
            {
                t: e.FOREVER,
                v: 106415
            },
            {
                t: e.FOREVER,
                v: 106416
            }], n = 0, r = i; n < r.length; n++) {
                var a = r[n];
                this._valueMap[a.v] = t(a.t, a.v)
            }
            this._logValue()
        },
        e.prototype.UpdateAllValue = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this._updateValueFunc()];
                    case 1:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.GetLevelFlag = function(t) {
            var e = this._valueMap[14774];
            return Boolean(BitUtil.getBit(e, t - 1))
        },
        e.prototype.GetLevel1BossIdx = function() {
            return this._valueMap[14775]
        },
        e.prototype.GetLevel1BattleCount = function() {
            return this._valueMap[14776]
        },
        e.prototype.GetLevel2CureFlag = function() {
            for (var t = this._valueMap[14777], e = [], i = 0; 5 > i; i++) e.push(BitUtil.getBit(t, i));
            return e
        },
        e.prototype.GetLevel2FlagUseEnergy = function() {
            var t = this._valueMap[14777];
            return Boolean(BitUtil.getBit(t, 5))
        },
        e.prototype.GetLevel2UseEnergy = function() {
            return this._valueMap[14778]
        },
        e.prototype.GetLevel3MaxHurt = function() {
            return this._valueMap[14779]
        },
        e.prototype.GetLevel3BattleCount = function() {
            return this._valueMap[14780]
        },
        e.prototype.GetLevel3LastHurt = function() {
            return this._valueMap[989]
        },
        e.prototype.GetLevel3FlagBuff = function() {
            return Boolean(this._valueMap[1000437])
        },
        e.prototype.GetTotalStar = function() {
            return this._valueMap[106415]
        },
        e.prototype.GetFlagPet = function() {
            var t = this._valueMap[106414];
            return Boolean(BitUtil.getBit(t, 0))
        },
        e.prototype.GetPetUpBattleRound = function() {
            return this._valueMap[14781]
        },
        e.prototype.GetFlagMark = function() {
            var t = this._valueMap[106414];
            return Boolean(BitUtil.getBit(t, 1))
        },
        e.prototype.GetFlagFiveSkill = function() {
            var t = this._valueMap[106414];
            return Boolean(BitUtil.getBit(t, 2))
        },
        e.prototype.GetFlagTeXing = function() {
            var t = this._valueMap[106414];
            return Boolean(BitUtil.getBit(t, 3))
        },
        e.prototype.GetPetUpBossIdx = function() {
            return this._valueMap[106416]
        },
        e.prototype.GetValue = function(t) {
            return this._valueMap[t.toString()]
        },
        e.prototype._logValue = function() {
            console.table(this._valueMap)
        },
        e
    } (egret.EventDispatcher);
    t.MgrData = e,
    __reflect(e.prototype, "pveYiFuLiSha.MgrData")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.CompRuleItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {},
        i.prototype.setData = function(t) {
            this.data = t,
            this.txt_rule.text = this.data.rule;
            for (var e = 0; 3 > e; e++) this["star" + e].visible = this.data.star >= e + 1
        },
        i
    } (BaseModule);
    t.CompRuleItem = e,
    __reflect(e.prototype, "pveYiFuLiSha.CompRuleItem")
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Pveyifulishalevel1Skin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnFast, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnOk, this.onTouchButtonHandler, this),
            ImageButtonUtil.add(this.helpBtn, this.onTouchButtonHandler, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(20, this, "pveYiFuLiSha_title_3_png",
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL)
            },
            this),
            this.compRule.setData([{
                rule: "击败正常状态下伊诺美",
                star: 1
            },
            {
                rule: "击败偏激状态下伊诺美",
                star: 2
            },
            {
                rule: "击败疯狂状态下伊诺美",
                star: 3
            }]),
            this._addEvents()
        },
        i.prototype.UpdateView = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, a;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().UpdateAllValue()];
                    case 1:
                        for (o.sent(), e = 5, i = t.MgrData.GetInstance().GetLevel1BattleCount(), this._halfBattleCount = e - i, this.txt_count2.text = this._halfBattleCount + "", n = t.MgrData.GetInstance().GetLevel1BossIdx(), r = [this.img_zhengchang, this.img_pianji, this.img_fengkuang], n = Math.min(n, r.length - 1), this.petShow.source = "pveYiFuLiShaLevelPet" + n + "_png", a = 0; a < r.length; a++) r[a].visible = a === n;
                        return [2]
                    }
                })
            })
        },
        i.prototype.onTouchButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL);
                break;
            case this.btnFast:
                this.fastHandler();
                break;
            case this.btnOk:
                if (this._halfBattleCount <= 0) return void BubblerManager.getInstance().showText("很抱歉，剩余挑战次数不足");
                this.goBattle();
                break;
            case this.helpBtn:
                var i = config.Help_tips.getItem(20),
                n = {};
                n.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(n)
            }
        },
        i.prototype.fastHandler = function() {
            var e = this,
            i = t.MgrData.GetInstance().GetLevel1BossIdx();
            BuyProductManager.buyProductBySocket([255659, 255660, 255661][i],
            function() {
                SocketConnection.sendByQueue(45751, [17, 0],
                function() {
                    e.UpdateView();
                    var n = ["击败正常状态下的伊诺美", "击败偏激状态下的伊诺美", "击败疯狂状态下的伊诺美"];
                    t.PopSettlement.OpenSettlement({
                        desc: n[i],
                        star: i + 1
                    })
                })
            },
            this)
        },
        i.prototype.goBattle = function() {
            var e = this,
            i = [15812, 15813, 15814],
            n = t.MgrData.GetInstance().GetLevel1BossIdx();
            FightManager.fightNoMapBoss("", i[n], !1, !0,
            function() {
                t.MgrData.GetInstance().UpdateAllValue().then(function() {
                    e.UpdateView();
                    var i = t.MgrData.GetInstance().GetLevel1BossIdx();
                    if (i != n) {
                        var r = ["击败正常状态下的伊诺美", "击败偏激状态下的伊诺美", "击败疯狂状态下的伊诺美"];
                        t.PopSettlement.OpenSettlement({
                            desc: r[n],
                            star: n + 1
                        })
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level1 = e,
    __reflect(e.prototype, "pveYiFuLiSha.Level1", ["pveYiFuLiSha.IPanel"])
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Pveyifulishalevel2Skin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnChongneng, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnHand, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnHead, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnLeg, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnShoudler, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnbody, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.helpBtn_png, this._onTouchButtonHandler, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(21, this, "pveYiFuLiSha_title_1_png",
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL)
            },
            this),
            this.btnHand.name = "idx_2",
            this.btnHead.name = "idx_0",
            this.btnShoudler.name = "idx_1",
            this.btnbody.name = "idx_3",
            this.btnLeg.name = "idx_4",
            this.compRule.setData([{
                rule: "完成一个部位的治愈",
                star: 1
            },
            {
                rule: "完成三个部位的治愈",
                star: 2
            },
            {
                rule: "完成全部部位的治愈",
                star: 3
            }]),
            this._addEvents()
        },
        i.prototype.UpdateView = function(t) {
            this.updateEnergy(),
            this.updateBody()
        },
        i.prototype.updateEnergy = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().UpdateAllValue()];
                    case 1:
                        return n.sent(),
                        e = t.MgrData.GetInstance().GetLevel2FlagUseEnergy(),
                        i = 90,
                        this._currHalfEnergy = i - t.MgrData.GetInstance().GetLevel2UseEnergy(),
                        DisplayUtil.setEnabled(this.btnChongneng, !e, e),
                        this.txt_count.text = this._currHalfEnergy + "/90",
                        [2]
                    }
                })
            })
        },
        i.prototype.updateBody = function() {
            for (var e = [this.btnHead, this.btnShoudler, this.btnHand, this.btnbody, this.btnLeg], i = [this.dot_head, this.dot_shoulder, this.dot_hand, this.dot_body, this.dot_leg], n = t.MgrData.GetInstance().GetLevel2CureFlag(), r = 0; r < n.length; r++) {
                var a = Boolean(n[r]);
                DisplayUtil.setEnabled(e[r], !a, a),
                i[r].visible = a
            }
        },
        i.prototype._onTouchButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL);
                break;
            case this.btnChongneng:
                this._onChongnengHandler();
                break;
            case this.btnHand:
            case this.btnHead:
            case this.btnLeg:
            case this.btnShoudler:
            case this.btnbody:
                this._onCure(e.currentTarget.name);
                break;
            case this.helpBtn_png:
                var i = config.Help_tips.getItem(21),
                n = {};
                n.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(n)
            }
        },
        i.prototype._onCure = function(e) {
            var i = this;
            if (console.log("Cure name is %s !!!", e), this._currHalfEnergy < 15) return void BubblerManager.getInstance().showText("很抱歉，魂珠能量不足！");
            var n = parseInt(e.split("_")[1]),
            r = [15815, 15816, 15817, 15818, 15819],
            a = t.MgrData.GetInstance().GetLevel2CureFlag().filter(function(t) {
                return t > 0
            }).length;
            FightManager.fightNoMapBoss("", r[n], !1, !0,
            function() {
                t.MgrData.GetInstance().UpdateAllValue().then(function() {
                    i.UpdateView();
                    var e = t.MgrData.GetInstance().GetLevel2CureFlag().filter(function(t) {
                        return t > 0
                    }).length;
                    if (e != a) {
                        var n = ["完成一个部位的治愈", "完成三个部位的治愈", "完成全部部位的治愈"],
                        r = -1;
                        if (1 === e ? r = 0 : 3 === e ? r = 1 : 5 === e && (r = 2), 0 > r) return;
                        t.PopSettlement.OpenSettlement({
                            desc: n[r],
                            star: r + 1
                        })
                    }
                })
            })
        },
        i.prototype._onChongnengHandler = function() {
            var t = this;
            BuyProductManager.buyProductBySocket(255662,
            function() {
                SocketConnection.sendByQueue(45751, [18, 0],
                function() {
                    t.updateEnergy()
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level2 = e,
    __reflect(e.prototype, "pveYiFuLiSha.Level2", ["pveYiFuLiSha.IPanel"])
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Pveyifulishalevel3Skin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnOk, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.helpBtn_png, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnShunshi, this._onTouchButtonHandler, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(22, this, "pveYiFuLiSha_title_0_png",
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL)
            },
            this),
            this.compRule.setData([{
                rule: "最高伤害达到300",
                star: 1
            },
            {
                rule: "最高伤害达到1500",
                star: 2
            },
            {
                rule: "最高伤害达到3000",
                star: 3
            }]),
            this._addEvents()
        },
        i.prototype.UpdateView = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().UpdateAllValue()];
                    case 1:
                        return i.sent(),
                        this._halfBattleCount = 8 - t.MgrData.GetInstance().GetLevel3BattleCount(),
                        this.txt_count2.text = this._halfBattleCount + "",
                        e = t.MgrData.GetInstance().GetLevel3FlagBuff(),
                        this.btnShunshi.visible = !e,
                        this.flagAct.visible = e,
                        this.txt_hurt.text = t.MgrData.GetInstance().GetLevel3MaxHurt() + "",
                        [2]
                    }
                })
            })
        },
        i.prototype._onTouchButtonHandler = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL);
                break;
            case this.btnOk:
                this.battle();
                break;
            case this.btnShunshi:
                this.openShunshi();
                break;
            case this.helpBtn_png:
                var i = config.Help_tips.getItem(22),
                n = {};
                n.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(n)
            }
        },
        i.prototype.openShunshi = function() {
            var t = this;
            BuyProductManager.buyProductBySocket(255663,
            function() {
                SocketConnection.sendByQueue(45751, [19, 1],
                function() {
                    t.UpdateView(),
                    BubblerManager.getInstance().showText("瞬时爆发已经激活")
                })
            },
            this)
        },
        i.prototype.battle = function() {
            return this._halfBattleCount <= 0 ? void BubblerManager.getInstance().showText("很抱歉，剩余挑战次数不足！") : (EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOverHandler, this), void SocketConnection.sendWithPromise(45751, [19, 0]))
        },
        i.prototype.onFightOverHandler = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n = this;
                return __generator(this,
                function(r) {
                    return EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOverHandler, this),
                    e = t.MgrData.GetInstance().GetLevel3MaxHurt(),
                    this.UpdateView(),
                    i = t.MgrData.GetInstance().GetLevel3LastHurt(),
                    FightManager.isWin && Alarm.show("本次战斗中，你所造成的最高伤害为" + i + "点",
                    function() {
                        var i = t.MgrData.GetInstance().GetLevel3MaxHurt(),
                        r = n.checkNewStar(e, i);
                        if (r > 0) {
                            var a = ["最高伤害达到300", "最高伤害达到1500", "最高伤害达到3000"];
                            t.PopSettlement.OpenSettlement({
                                desc: a[r - 1],
                                star: r
                            })
                        }
                    }),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.checkNewStar = function(t, e) {
            var i = function(t) {
                return t >= 300 && 1500 > t ? 1 : t >= 1500 && 3e3 > t ? 2 : t >= 3e3 ? 3 : 0
            },
            n = i(t),
            r = i(e);
            return r > n ? r: 0
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Level3 = e,
    __reflect(e.prototype, "pveYiFuLiSha.Level3", ["pveYiFuLiSha.IPanel"])
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PveyifulishamainSkin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnGet, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnGetm, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnUp, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.helpBtn_png, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnInfo, this._onTouchButtonHandler, this),
            t.MgrEvents.GetInstance().addEventListener(t.MgrEvents.SELECTED_LEVEL, this.onSelectedLevelHandler, this)
        },
        i.prototype._removeEvents = function() {
            t.MgrEvents.GetInstance().removeEventListener(t.MgrEvents.SELECTED_LEVEL, this.onSelectedLevelHandler, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(19, this, "",
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.CLOSE_MODULE)
            },
            this),
            this._addEvents();
            for (var i = 1; 3 >= i; i++) this["level" + i].setData(i)
        },
        i.prototype.UpdateView = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, t.MgrData.GetInstance().UpdateAllValue()];
                    case 1:
                        for (a.sent(), e = t.MgrData.GetInstance().GetTotalStar(), i = 20, this.txt_star.text = e + "/" + i, n = t.MgrData.GetInstance().GetFlagPet(), this.flag_ydh.visible = n, this.btnUp.visible = n, this.btnGetm.visible = !n && i > e, this.btnGet.visible = !n && e >= i, r = 1; 3 >= r; r++) this["level" + r].updateRender();
                        return [2]
                    }
                })
            })
        },
        i.prototype._onTouchButtonHandler = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.CLOSE_MODULE);
                break;
            case this.btnGet:
                this.btnGet.touchEnabled = !1,
                this.onExchangePet().then(function() {
                    i.btnGet.touchEnabled = !0
                })["catch"](function() {
                    i.btnGet.touchEnabled = !0
                });
                break;
            case this.btnGetm:
                this.onBuyPet();
                break;
            case this.btnUp:
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.CHANGE_PANEL, !1, t.PANEL_NAMES.EXCHANGE);
                break;
            case this.helpBtn_png:
                tipsPop.TipsPop.openHelpPopById(19);
                break;
            case this.btnInfo:
                PetManager.showPetIntroduce(3844)
            }
        },
        i.prototype.onSelectedLevelHandler = function(e) {
            console.log("selected value is" + e.data);
            var i = [t.PANEL_NAMES.LEVEL_1, t.PANEL_NAMES.LEVEL_2, t.PANEL_NAMES.LEVEL_3];
            t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.CHANGE_PANEL, !1, i[e.data - 1])
        },
        i.prototype.onExchangePet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.EXCHANGE_CLOTH_COMPLETE, [12498])["catch"](function() {
                            return Promise.reject(null)
                        })];
                    case 1:
                        return t.sent(),
                        this.UpdateView(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onBuyPet = function() {
            var t = this;
            BuyProductManager.buyProduct("255658_12497",
            function() {
                t.UpdateView()
            },
            this)
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.MainPanel = e,
    __reflect(e.prototype, "pveYiFuLiSha.MainPanel", ["pveYiFuLiSha.IPanel"])
} (pveYiFuLiSha || (pveYiFuLiSha = {}));
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
    return new(i || (i = Promise))(function(r, a) {
        function o(t) {
            try {
                s(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function u(t) {
            try {
                s(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(o, u)
        }
        s((n = n.apply(t, e || [])).next())
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
        for (; s;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (o = s.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < o[1]) {
                    s.label = o[1],
                    o = i;
                    break
                }
                if (o && s.label < o[2]) {
                    s.label = o[2],
                    s.ops.push(i);
                    break
                }
                o[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = e.call(t, s)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, u, s = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return u = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this
    }),
    u
},
pveYiFuLiSha; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._itemFadedFlowersId = 1719577,
            i.skinName = t.PveyifulishaupSkin,
            i
        }
        return __extends(i, e),
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnOk, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnCure, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnPet, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnExchange0, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnExchange1, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.btnExchange2, this._onTouchButtonHandler, this),
            ImageButtonUtil.add(this.item_41556,
            function() {
                var t = {};
                t.ins = 41556,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = 33195,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_texing,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3844, "", AppDoStyle.NULL)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        i.prototype._removeEvents = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(23, this, "pveYiFuLiSha_title_2_png",
            function() {
                t.MgrEvents.GetInstance().dispatchEventWith(t.MgrEvents.BACK_MAIN_PANEL)
            },
            this),
            this.btnExchange0.name = "type_1",
            this.btnExchange1.name = "type_2",
            this.btnExchange2.name = "type_3",
            this._addEvents()
        },
        i.prototype.UpdateView = function(e) {
            var i = this;
            this._halfBattleRound = 2 - t.MgrData.GetInstance().GetPetUpBattleRound(),
            this.txt_count2.text = this._halfBattleRound + "";
            var n = t.MgrData.GetInstance().GetPetUpBossIdx(),
            r = ["一", "二", "三", "四", "五"];
            this.txt_round.text = "第" + r[n] + "轮";
            var a = [1, 2, 3, 5, 8];
            this.txt_reward.text = "击败可获得凋零花瓣x" + a[n];
            var o = [1596, 1525, 2237, 2459, 2639];
            RES.getResByUrl(ClientConfig.getfightPetPng(o[n] + ""),
            function(t, e) {
                i.pet.anchorOffsetX = t.textureWidth / 2,
                i.pet.anchorOffsetY = t.textureHeight,
                i.pet.source = t
            },
            this, RES.ResourceItem.TYPE_IMAGE),
            this.txt_BtnOk.text = 0 === n ? "开始挑战": "继续挑战";
            var u = t.MgrData.GetInstance().GetFlagMark();
            this.flagExchange0.visible = u,
            this.btnExchange0.visible = !u;
            var s = t.MgrData.GetInstance().GetFlagFiveSkill();
            this.flagExchange1.visible = s,
            this.btnExchange1.visible = !s;
            var h = t.MgrData.GetInstance().GetFlagTeXing();
            this.flagExchange2.visible = h,
            this.btnExchange2.visible = !h,
            this.onUpdateByItemChangeEvent()
        },
        i.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.txt_itemCount.text = ItemManager.getNumByID(this._itemFadedFlowersId) + ""
        },
        i.prototype._onTouchButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.btnOk:
                this.onBattle();
                break;
            case this.btnCure:
                PetManager.cureAll();
                break;
            case this.btnPet:
                ModuleManager.showModuleByID(10);
                break;
            case this.btnBuy:
                this.buyItem();
                break;
            case this.btnExchange0:
            case this.btnExchange1:
            case this.btnExchange2:
                if (3844 != PetManager.getPetInfo(PetManager.defaultTime).id) {
                    var e = PetXMLInfo.getName(3844);
                    return void Alarm.show("请将" + e + "放入背包首发位置再来进化！")
                }
                var i = parseInt(t.currentTarget.name.split("_")[1]),
                n = t.currentTarget;
                n.touchEnabled = n.touchChildren = !1,
                this.onExchangeItem(i).then(function() {
                    n.touchEnabled = n.touchChildren = !0
                })["catch"](function() {
                    n.touchEnabled = n.touchChildren = !0
                })
            }
        },
        i.prototype.onExchangeItem = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return i = [10, 15, 25],
                        n = ItemManager.getNumByID(this._itemFadedFlowersId),
                        n < i[e - 1] ? (BubblerManager.getInstance().showText("很抱歉，凋零花瓣数量不足"), [2, Promise.resolve()]) : [4, SocketConnection.sendWithPromise(45751, [20, e])["catch"](function() {
                            return console.log("兑换类型为%i的道具失败", e),
                            Promise.reject(null)
                        })];
                    case 1:
                        return r.sent(),
                        [4, t.MgrData.GetInstance().UpdateAllValue()];
                    case 2:
                        return r.sent(),
                        this.UpdateView(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.onBattle = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n = this;
                return __generator(this,
                function(r) {
                    return e = t.MgrData.GetInstance().GetPetUpBossIdx(),
                    this._halfBattleRound <= 0 && 0 === e ? (BubblerManager.getInstance().showText("很抱歉，剩余挑战次数不足"), [2, Promise.resolve()]) : (i = [15822, 15823, 15824, 15825, 15826], FightManager.fightNoMapBoss("", i[e], !1, !0,
                    function() {
                        t.MgrData.GetInstance().UpdateAllValue().then(function() {
                            n.UpdateView(),
                            4 === e && FightManager.isWin && Alarm.show("恭喜你击败了全部对手，完成了本轮试炼！")
                        })
                    }), [2, Promise.resolve()])
                })
            })
        },
        i.prototype.buyItem = function() {
            var t = this;
            BuyProductManager.buyProduct("255664_12499",
            function() {
                t.onUpdateByItemChangeEvent()
            },
            this, 1719577)
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.UpPet = e,
    __reflect(e.prototype, "pveYiFuLiSha.UpPet", ["pveYiFuLiSha.IPanel"])
} (pveYiFuLiSha || (pveYiFuLiSha = {})),
window.pveYiFuLiSha = window.pveYiFuLiSha || {};
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
generateEUI.paths["resource/eui_skins/comp/CompLevelSkin.exml"] = window.pveYiFuLiSha.CompLevelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtLabel", "btnFix", "showStyle", "title", "star0", "star1", "star2", "flag_next"],
        this.height = 380,
        this.width = 190,
        this.elementsContent = [this._Image1_i(), this.btnFix_i(), this.showStyle_i(), this.title_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.star0_i(), this.star1_i(), this.star2_i(), this.flag_next_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 380,
        t.source = "pveYiFuLiShaMain_challengebg_png",
        t.width = 190,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 25,
        t.y = 327,
        t.elementsContent = [this._Image2_i(), this.txtLabel_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 140,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "前往挑战",
        t.textColor = 8341784,
        t.x = 28,
        t.y = 11,
        t
    },
    i.showStyle_i = function() {
        var t = new eui.Image;
        return this.showStyle = t,
        t.height = 213,
        t.source = "pveYiFuLiShaMain_show3_png",
        t.width = 183,
        t.x = 5,
        t.y = 40,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 47,
        t.source = "pveYiFuLiShaMain_title_hwdec_png",
        t.width = 151,
        t.x = 20,
        t.y = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 18,
        t.text = "今日成绩：",
        t.textColor = 13369156,
        t.x = 14,
        t.y = 258,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.visible = !0,
        t.width = 44,
        t.x = 33,
        t.y = 280,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 74,
        t.y = 280,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 115,
        t.y = 280,
        t
    },
    i.star0_i = function() {
        var t = new eui.Image;
        return this.star0 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.visible = !0,
        t.width = 51,
        t.x = 29,
        t.y = 276,
        t
    },
    i.star1_i = function() {
        var t = new eui.Image;
        return this.star1 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.visible = !0,
        t.width = 51,
        t.x = 70,
        t.y = 276,
        t
    },
    i.star2_i = function() {
        var t = new eui.Image;
        return this.star2 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.visible = !0,
        t.width = 51,
        t.x = 111,
        t.y = 276,
        t
    },
    i.flag_next_i = function() {
        var t = new eui.Image;
        return this.flag_next = t,
        t.horizontalCenter = 0,
        t.source = "pveYiFuLiShaMain_next_png",
        t.y = 331,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompRuleItemSkin.exml"] = window.pveYiFuLiSha.CompRuleItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_rule", "star0", "star1", "star2"],
        this.height = 87,
        this.width = 272,
        this.elementsContent = [this._Image1_i(), this.txt_rule_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.star0_i(), this.star1_i(), this.star2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 87,
        t.source = "pveYiFuLiShaLevel2_conditionbg_png",
        t.width = 272,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_rule_i = function() {
        var t = new eui.Label;
        return this.txt_rule = t,
        t.size = 18,
        t.text = "完成一个部位的治愈",
        t.textColor = 16773461,
        t.x = 52,
        t.y = 56,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 72,
        t.y = 7,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 113,
        t.y = 7,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 154,
        t.y = 7,
        t
    },
    i.star0_i = function() {
        var t = new eui.Image;
        return this.star0 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.top = 0,
        t.visible = !0,
        t.width = 51,
        t.x = 68,
        t.y = 3,
        t
    },
    i.star1_i = function() {
        var t = new eui.Image;
        return this.star1 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.top = 0,
        t.visible = !0,
        t.width = 51,
        t.x = 108,
        t.y = 3,
        t
    },
    i.star2_i = function() {
        var t = new eui.Image;
        return this.star2 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.top = 0,
        t.visible = !0,
        t.width = 51,
        t.x = 149,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/CompRuleSkin.exml"] = window.pveYiFuLiSha.CompRuleSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnPet", "btnCure", "title_rule", "rule0", "rule1", "rule2"],
        this.height = 566,
        this.width = 369,
        this.elementsContent = [this._Image1_i(), this.btnPet_i(), this.btnCure_i(), this.title_rule_i(), this._Label1_i(), this.rule0_i(), this.rule1_i(), this.rule2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 566,
        t.source = "pve_yifulisha_leftbg_s9_png",
        t.width = 369,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 60,
        t.source = "pveYiFuLiShaLevel2_imgBtn_pet_png",
        t.width = 60,
        t.x = 110,
        t.y = 470,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 60,
        t.source = "pveYiFuLiShaLevel2_imgBtn_cure_png",
        t.width = 60,
        t.x = 194,
        t.y = 470,
        t
    },
    i.title_rule_i = function() {
        var t = new eui.Image;
        return this.title_rule = t,
        t.height = 25,
        t.source = "pveYiFuLiShaLevel2_title_rule_png",
        t.width = 105,
        t.x = 130,
        t.y = 37,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 10,
        t.size = 18,
        t.text = "在达成挑战目标时根据以下条件结算今日挑战评分",
        t.textAlign = "center",
        t.textColor = 4494948,
        t.width = 150,
        t.x = 108,
        t.y = 73,
        t
    },
    i.rule0_i = function() {
        var t = new pveYiFuLiSha.CompRuleItem;
        return this.rule0 = t,
        t.skinName = "pveYiFuLiSha.CompRuleItemSkin",
        t.visible = !0,
        t.x = 48,
        t.y = 153,
        t
    },
    i.rule1_i = function() {
        var t = new pveYiFuLiSha.CompRuleItem;
        return this.rule1 = t,
        t.skinName = "pveYiFuLiSha.CompRuleItemSkin",
        t.visible = !0,
        t.x = 48,
        t.y = 256,
        t
    },
    i.rule2_i = function() {
        var t = new pveYiFuLiSha.CompRuleItem;
        return this.rule2 = t,
        t.skinName = "pveYiFuLiSha.CompRuleItemSkin",
        t.visible = !0,
        t.x = 48,
        t.y = 359,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pveyifulishalevel1Skin.exml"] = window.pveYiFuLiSha.Pveyifulishalevel1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "petShow", "statebg", "img_zhengchang", "img_pianji", "img_fengkuang", "state", "up_bg", "btnClose", "helpBtn", "title", "top", "txtbg", "txt_count2", "battleCount", "btnFast", "txtLabel", "btnOk", "compRule"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.petShow_i(), this.state_i(), this.top_i(), this.battleCount_i(), this.btnFast_i(), this.btnOk_i(), this.compRule_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pveYiFuLiShaLevel1_bg_jpg",
        t.top = 0,
        t
    },
    i.petShow_i = function() {
        var t = new eui.Image;
        return this.petShow = t,
        t.height = 486,
        t.horizontalCenter = 107.5,
        t.source = "pveYiFuLiShaLevelPet0_png",
        t.verticalCenter = 15,
        t.width = 441,
        t
    },
    i.state_i = function() {
        var t = new eui.Group;
        return this.state = t,
        t.height = 113,
        t.horizontalCenter = 16,
        t.verticalCenter = 236.5,
        t.width = 486,
        t.elementsContent = [this.statebg_i(), this._Label1_i(), this.img_zhengchang_i(), this.img_pianji_i(), this.img_fengkuang_i()],
        t
    },
    i.statebg_i = function() {
        var t = new eui.Image;
        return this.statebg = t,
        t.height = 106,
        t.source = "pveYiFuLiShaLevel1_statebg_png",
        t.width = 502,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "当前状态：",
        t.textColor = 14417860,
        t.x = 102,
        t.y = 16,
        t
    },
    i.img_zhengchang_i = function() {
        var t = new eui.Image;
        return this.img_zhengchang = t,
        t.height = 49,
        t.source = "pveYiFuLiShaLevel1_img_zhengchang_png",
        t.visible = !0,
        t.width = 84,
        t.x = 170,
        t.y = 35,
        t
    },
    i.img_pianji_i = function() {
        var t = new eui.Image;
        return this.img_pianji = t,
        t.height = 49,
        t.source = "pveYiFuLiShaLevel1_img_pianji_png",
        t.visible = !0,
        t.width = 84,
        t.x = 170,
        t.y = 35,
        t
    },
    i.img_fengkuang_i = function() {
        var t = new eui.Image;
        return this.img_fengkuang = t,
        t.source = "pveYiFuLiShaLevel1_img_fengkuang_png",
        t.visible = !0,
        t.x = 112,
        t.y = -9,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.helpBtn_i(), this.title_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 74,
        t.source = "pveYiFuLiShaLevel2_up_bg_png",
        t.width = 250,
        t.x = 42,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pveYiFuLiShaLevel1_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 5,
        t
    },
    i.helpBtn_i = function() {
        var t = new eui.Image;
        return this.helpBtn = t,
        t.height = 25,
        t.source = "pveYiFuLiShaLevel1_helpBtn_png",
        t.width = 22,
        t.x = 240,
        t.y = 14,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pveYiFuLiSha_title_3_png",
        t.x = 81,
        t.y = 7,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this.txtbg_i(), this._Label2_i(), this.txt_count2_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 40,
        t.source = "pveYiFuLiShaLevel2_txtbg_png",
        t.visible = !0,
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "今日剩余战斗次数：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 11,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 210,
        t.y = 12,
        t
    },
    i.btnFast_i = function() {
        var t = new eui.Image;
        return this.btnFast = t,
        t.height = 50,
        t.horizontalCenter = 434,
        t.source = "pveYiFuLiShaLevel1_btnFast_png",
        t.verticalCenter = 177,
        t.width = 174,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.horizontalCenter = 434,
        t.verticalCenter = 240,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始挑战",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    i.compRule_i = function() {
        var t = new pveYiFuLiSha.CompRule;
        return this.compRule = t,
        t.horizontalCenter = -341.5,
        t.skinName = "pveYiFuLiSha.CompRuleSkin",
        t.verticalCenter = 22,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pveyifulishalevel2Skin.exml"] = window.pveYiFuLiSha.Pveyifulishalevel2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet_3444", "title_head", "dot_head", "btnHead", "head", "title_hand", "dot_hand", "btnHand", "hand", "titile_leg", "dot_leg", "btnLeg", "leg", "title_shoudler", "dot_shoulder", "btnShoudler", "shoulder", "tile_body", "dot_body", "btnbody", "body", "up_bg", "btnClose", "helpBtn_png", "Title", "top", "txt_count", "btnChongneng", "energy", "compRule"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.pet_3444_i(), this.head_i(), this.hand_i(), this.leg_i(), this.shoulder_i(), this.body_i(), this.top_i(), this.energy_i(), this.compRule_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pveYiFuLiShaLevel1_bg_jpg",
        t.top = 0,
        t
    },
    i.pet_3444_i = function() {
        var t = new eui.Image;
        return this.pet_3444 = t,
        t.height = 542,
        t.horizontalCenter = 167,
        t.source = "pveYiFuLiShaLevel2_pet_3444_png",
        t.verticalCenter = 33,
        t.width = 418,
        t
    },
    i.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.horizontalCenter = 406,
        t.verticalCenter = -154,
        t.elementsContent = [this._Image1_i(), this.title_head_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this.dot_head_i(), this.btnHead_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "pveYiFuLiShaLevel2_txtbg2_png",
        t.width = 174,
        t.x = 104,
        t.y = 12,
        t
    },
    i.title_head_i = function() {
        var t = new eui.Image;
        return this.title_head = t,
        t.height = 44,
        t.source = "pveYiFuLiShaLevel2_title_head_png",
        t.width = 66,
        t.x = 116,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pveYiFuLiShaLevel2_line_png",
        t.width = 113,
        t.x = 13,
        t.y = 56,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pveYiFuLiShaLevel2_dot_png",
        t.width = 34,
        t.x = 0,
        t.y = 51,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 5,
        t.size = 18,
        t.text = "免疫物理攻击",
        t.textColor = 16777215,
        t.width = 125,
        t.x = 137,
        t.y = 56,
        t
    },
    i.dot_head_i = function() {
        var t = new eui.Image;
        return this.dot_head = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_tagdone_png",
        t.width = 36,
        t.x = 237,
        t.y = 83,
        t
    },
    i.btnHead_i = function() {
        var t = new eui.Group;
        return this.btnHead = t,
        t.x = 146,
        t.y = 94,
        t.elementsContent = [this._Image4_i(), this._Label2_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "治愈",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.hand_i = function() {
        var t = new eui.Group;
        return this.hand = t,
        t.horizontalCenter = 422,
        t.verticalCenter = 14,
        t.elementsContent = [this._Image5_i(), this.title_hand_i(), this._Image6_i(), this._Image7_i(), this._Label3_i(), this.dot_hand_i(), this.btnHand_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "pveYiFuLiShaLevel2_txtbg2_png",
        t.width = 174,
        t.x = 104,
        t.y = 12,
        t
    },
    i.title_hand_i = function() {
        var t = new eui.Image;
        return this.title_hand = t,
        t.height = 44,
        t.source = "pveYiFuLiShaLevel2_title_hand_png",
        t.width = 66,
        t.x = 116,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pveYiFuLiShaLevel2_line_png",
        t.width = 113,
        t.x = 13,
        t.y = 56,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pveYiFuLiShaLevel2_dot_png",
        t.width = 34,
        t.x = 0,
        t.y = 51,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 5,
        t.size = 18,
        t.text = "造成的伤害提升300%",
        t.textColor = 16777215,
        t.width = 125,
        t.x = 137,
        t.y = 44,
        t
    },
    i.dot_hand_i = function() {
        var t = new eui.Image;
        return this.dot_hand = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_tagdone_png",
        t.width = 36,
        t.x = 237,
        t.y = 83,
        t
    },
    i.btnHand_i = function() {
        var t = new eui.Group;
        return this.btnHand = t,
        t.x = 146,
        t.y = 94,
        t.elementsContent = [this._Image8_i(), this._Label4_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "治愈",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.leg_i = function() {
        var t = new eui.Group;
        return this.leg = t,
        t.horizontalCenter = 408,
        t.verticalCenter = 186,
        t.elementsContent = [this._Image9_i(), this.titile_leg_i(), this._Image10_i(), this._Image11_i(), this._Label5_i(), this.dot_leg_i(), this.btnLeg_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "pveYiFuLiShaLevel2_txtbg2_png",
        t.width = 174,
        t.x = 104,
        t.y = 12,
        t
    },
    i.titile_leg_i = function() {
        var t = new eui.Image;
        return this.titile_leg = t,
        t.height = 44,
        t.source = "pveYiFuLiShaLevel2_titile_leg_png",
        t.width = 66,
        t.x = 116,
        t.y = 0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pveYiFuLiShaLevel2_line_png",
        t.width = 113,
        t.x = 13,
        t.y = 56,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pveYiFuLiShaLevel2_dot_png",
        t.width = 34,
        t.x = 0,
        t.y = 51,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 5,
        t.size = 18,
        t.text = "仅受先制技能伤害",
        t.textColor = 16777215,
        t.width = 125,
        t.x = 138,
        t.y = 44,
        t
    },
    i.dot_leg_i = function() {
        var t = new eui.Image;
        return this.dot_leg = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_tagdone_png",
        t.width = 36,
        t.x = 237,
        t.y = 83,
        t
    },
    i.btnLeg_i = function() {
        var t = new eui.Group;
        return this.btnLeg = t,
        t.x = 146,
        t.y = 94,
        t.elementsContent = [this._Image12_i(), this._Label6_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "治愈",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.shoulder_i = function() {
        var t = new eui.Group;
        return this.shoulder = t,
        t.horizontalCenter = -17,
        t.verticalCenter = -75,
        t.elementsContent = [this._Image13_i(), this.title_shoudler_i(), this._Image14_i(), this._Image15_i(), this._Label7_i(), this.dot_shoulder_i(), this.btnShoudler_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "pveYiFuLiShaLevel2_txtbg2_png",
        t.width = 174,
        t.x = 0,
        t.y = 12,
        t
    },
    i.title_shoudler_i = function() {
        var t = new eui.Image;
        return this.title_shoudler = t,
        t.height = 44,
        t.source = "pveYiFuLiShaLevel2_title_shoudler_png",
        t.width = 66,
        t.x = 12,
        t.y = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pveYiFuLiShaLevel2_line_png",
        t.width = 113,
        t.x = 152,
        t.y = 56,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pveYiFuLiShaLevel2_dot_png",
        t.width = 34,
        t.x = 244,
        t.y = 51,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 5,
        t.size = 18,
        t.text = "免疫威力100以下的攻击技能",
        t.textColor = 16777215,
        t.width = 125,
        t.x = 30,
        t.y = 43,
        t
    },
    i.dot_shoulder_i = function() {
        var t = new eui.Image;
        return this.dot_shoulder = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_tagdone_png",
        t.width = 36,
        t.x = 133,
        t.y = 83,
        t
    },
    i.btnShoudler_i = function() {
        var t = new eui.Group;
        return this.btnShoudler = t,
        t.x = 42,
        t.y = 94,
        t.elementsContent = [this._Image16_i(), this._Label8_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "治愈",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.body_i = function() {
        var t = new eui.Group;
        return this.body = t,
        t.horizontalCenter = -17,
        t.verticalCenter = 97,
        t.elementsContent = [this._Image17_i(), this.tile_body_i(), this._Image18_i(), this._Image19_i(), this._Label9_i(), this.dot_body_i(), this.btnbody_i()],
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "pveYiFuLiShaLevel2_txtbg2_png",
        t.width = 174,
        t.x = 0,
        t.y = 12,
        t
    },
    i.tile_body_i = function() {
        var t = new eui.Image;
        return this.tile_body = t,
        t.height = 44,
        t.source = "pveYiFuLiShaLevel2_tile_body_png",
        t.width = 66,
        t.x = 12,
        t.y = 0,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 25,
        t.source = "pveYiFuLiShaLevel2_line_png",
        t.width = 113,
        t.x = 152,
        t.y = 56,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "pveYiFuLiShaLevel2_dot_png",
        t.width = 34,
        t.x = 244,
        t.y = 51,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 5,
        t.size = 18,
        t.text = "需在7回合内取得胜利",
        t.textColor = 16777215,
        t.width = 125,
        t.x = 30,
        t.y = 43,
        t
    },
    i.dot_body_i = function() {
        var t = new eui.Image;
        return this.dot_body = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_tagdone_png",
        t.width = 36,
        t.x = 133,
        t.y = 83,
        t
    },
    i.btnbody_i = function() {
        var t = new eui.Group;
        return this.btnbody = t,
        t.x = 42,
        t.y = 94,
        t.elementsContent = [this._Image20_i(), this._Label10_i()],
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "治愈",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.helpBtn_png_i(), this.Title_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 74,
        t.source = "pveYiFuLiShaLevel2_up_bg_png",
        t.visible = !0,
        t.width = 250,
        t.x = 42,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pveYiFuLiShaLevel1_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 5,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.height = 25,
        t.source = "pveYiFuLiShaLevel1_helpBtn_png",
        t.width = 22,
        t.x = 240,
        t.y = 14,
        t
    },
    i.Title_i = function() {
        var t = new eui.Image;
        return this.Title = t,
        t.source = "pveYiFuLiSha_title_1_png",
        t.x = 81,
        t.y = 7,
        t
    },
    i.energy_i = function() {
        var t = new eui.Group;
        return this.energy = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this._Image21_i(), this._Label11_i(), this.txt_count_i(), this.btnChongneng_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pveYiFuLiShaLevel2_txtbg_png",
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "魂珠能量：",
        t.textColor = 16777215,
        t.x = 45,
        t.y = 11,
        t
    },
    i.txt_count_i = function() {
        var t = new eui.Label;
        return this.txt_count = t,
        t.size = 18,
        t.text = "000/000",
        t.textColor = 16777215,
        t.x = 134,
        t.y = 12,
        t
    },
    i.btnChongneng_i = function() {
        var t = new eui.Image;
        return this.btnChongneng = t,
        t.height = 36,
        t.source = "pveYiFuLiShaLevel2_btnChongneng_png",
        t.width = 62,
        t.x = 208,
        t.y = 2,
        t
    },
    i.compRule_i = function() {
        var t = new pveYiFuLiSha.CompRule;
        return this.compRule = t,
        t.horizontalCenter = -341.5,
        t.skinName = "pveYiFuLiSha.CompRuleSkin",
        t.verticalCenter = 22,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Pveyifulishalevel3Skin.exml"] = window.pveYiFuLiSha.Pveyifulishalevel3Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgpet", "attackbg", "numbg", "txt_hurt", "hurt", "up_bg", "btnClose", "helpBtn_png", "top", "txtbg", "txt_count2", "battleCount", "btnShunshi", "flagAct", "txtLabel", "btnOk", "compRule"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.imgpet_i(), this.hurt_i(), this.top_i(), this.battleCount_i(), this.btnShunshi_i(), this.flagAct_i(), this.btnOk_i(), this.compRule_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pveYiFuLiShaLevel1_bg_jpg",
        t.top = 0,
        t
    },
    i.imgpet_i = function() {
        var t = new eui.Image;
        return this.imgpet = t,
        t.height = 616,
        t.horizontalCenter = 193,
        t.source = "pveYiFuLiShaLevel3_imgpet_png",
        t.verticalCenter = 3,
        t.width = 610,
        t
    },
    i.hurt_i = function() {
        var t = new eui.Group;
        return this.hurt = t,
        t.horizontalCenter = 57.5,
        t.verticalCenter = 226,
        t.elementsContent = [this.attackbg_i(), this.numbg_i(), this.txt_hurt_i(), this._Label1_i()],
        t
    },
    i.attackbg_i = function() {
        var t = new eui.Image;
        return this.attackbg = t,
        t.height = 75,
        t.source = "pveYiFuLiShaLevel3_attackbg_png",
        t.width = 433,
        t.x = 0,
        t.y = 0,
        t
    },
    i.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.height = 63,
        t.source = "pveYiFuLiShaLevel3_numbg_png",
        t.width = 208,
        t.x = 44,
        t.y = 17,
        t
    },
    i.txt_hurt_i = function() {
        var t = new eui.Label;
        return this.txt_hurt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 40,
        t.stroke = 1,
        t.strokeColor = 4630295,
        t.text = "2546",
        t.textColor = 16773461,
        t.x = 88,
        t.y = 33,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "爆发出的最高伤害",
        t.textColor = 12384149,
        t.x = 40,
        t.y = 8,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.helpBtn_png_i(), this._Image1_i()],
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 74,
        t.source = "pveYiFuLiShaLevel2_up_bg_png",
        t.width = 250,
        t.x = 42,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pveYiFuLiShaLevel1_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 5,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.height = 25,
        t.source = "pveYiFuLiShaLevel1_helpBtn_png",
        t.width = 22,
        t.x = 240,
        t.y = 14,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pveYiFuLiSha_title_0_png",
        t.x = 81,
        t.y = 7,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this.txtbg_i(), this._Label2_i(), this.txt_count2_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 40,
        t.source = "pveYiFuLiShaLevel2_txtbg_png",
        t.visible = !0,
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "今日剩余战斗次数：",
        t.textColor = 16777215,
        t.x = 51,
        t.y = 11,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 210,
        t.y = 12,
        t
    },
    i.btnShunshi_i = function() {
        var t = new eui.Image;
        return this.btnShunshi = t,
        t.horizontalCenter = 434,
        t.source = "pveYiFuLiShaLevel3_btnShunshi_png",
        t.verticalCenter = 177,
        t.visible = !0,
        t
    },
    i.flagAct_i = function() {
        var t = new eui.Image;
        return this.flagAct = t,
        t.horizontalCenter = 434,
        t.source = "pveYiFuLiShaLevel3_btnJihuo_png",
        t.verticalCenter = 177,
        t.visible = !0,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.height = 52,
        t.horizontalCenter = 434,
        t.verticalCenter = 240,
        t.width = 176,
        t.elementsContent = [this._Image2_i(), this.txtLabel_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始挑战",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    i.compRule_i = function() {
        var t = new pveYiFuLiSha.CompRule;
        return this.compRule = t,
        t.horizontalCenter = -341.5,
        t.skinName = "pveYiFuLiSha.CompRuleSkin",
        t.verticalCenter = 22,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveyifulishamainSkin.exml"] = window.pveYiFuLiSha.PveyifulishamainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "bg1", "bg2", "title", "getbg", "txt_star", "get", "up_bg", "helpBtn_png", "btnClose", "btnGetm", "btnUp", "btnGet", "level1", "level2", "level3", "flag_ydh", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.bg1_i(), this.bg2_i(), this.title_i(), this.get_i(), this.up_bg_i(), this.helpBtn_png_i(), this.btnClose_i(), this.btnGetm_i(), this.btnUp_i(), this.btnGet_i(), this.level1_i(), this.level2_i(), this.level3_i(), this.flag_ydh_i(), this.btnInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "pveYiFuLiShaMain_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg1_i = function() {
        var t = new eui.Image;
        return this.bg1 = t,
        t.height = 640,
        t.right = 0,
        t.source = "pveYiFuLiShaMain_bg1_png",
        t.width = 572,
        t.x = 564,
        t.y = 0,
        t
    },
    i.bg2_i = function() {
        var t = new eui.Image;
        return this.bg2 = t,
        t.height = 520,
        t.source = "pveYiFuLiShaMain_bg2_png",
        t.width = 735,
        t.x = 30,
        t.y = 79,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pveYiFuLiShaMain_title_png",
        t.x = 196,
        t.y = 45,
        t
    },
    i.get_i = function() {
        var t = new eui.Group;
        return this.get = t,
        t.x = 188,
        t.y = 128,
        t.elementsContent = [this.getbg_i(), this._Image1_i(), this._Label1_i(), this.txt_star_i()],
        t
    },
    i.getbg_i = function() {
        var t = new eui.Image;
        return this.getbg = t,
        t.height = 27,
        t.source = "pveYiFuLiShaMain_getbg_png",
        t.width = 362,
        t.x = 0,
        t.y = 5,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "pveYiFuLiShaMain_star_png",
        t.width = 39,
        t.x = 179,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 20,
        t.text = "累计已获得   :",
        t.textColor = 16777215,
        t.x = 84,
        t.y = 9,
        t
    },
    i.txt_star_i = function() {
        var t = new eui.Label;
        return this.txt_star = t,
        t.size = 20,
        t.text = "00/22",
        t.textColor = 16777215,
        t.x = 229,
        t.y = 11,
        t
    },
    i.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 50,
        t.source = "pveYiFuLiSha_up_bg_png",
        t.visible = !1,
        t.width = 207,
        t.x = 0,
        t.y = 0,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.height = 34,
        t.source = "pveYiFuLiShaLevel1_helpBtn_png",
        t.visible = !1,
        t.width = 31,
        t.x = 134,
        t.y = 9,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnGetm_i = function() {
        var t = new eui.Image;
        return this.btnGetm = t,
        t.height = 80,
        t.right = 102,
        t.source = "pveYiFuLiShaMain_btnGetm_png",
        t.visible = !0,
        t.width = 254,
        t.x = 780,
        t.y = 494,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.height = 80,
        t.right = 102,
        t.source = "pveYiFuLiShaMain_btnUp_png",
        t.visible = !0,
        t.width = 254,
        t.x = 780,
        t.y = 494,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 80,
        t.right = 102,
        t.source = "pveYiFuLiShaMain_btnGet_png",
        t.visible = !0,
        t.width = 254,
        t.x = 780,
        t.y = 494,
        t
    },
    i.level1_i = function() {
        var t = new pveYiFuLiSha.CompLevelItem;
        return this.level1 = t,
        t.skinName = "pveYiFuLiSha.CompLevelSkin",
        t.x = 64,
        t.y = 168,
        t
    },
    i.level2_i = function() {
        var t = new pveYiFuLiSha.CompLevelItem;
        return this.level2 = t,
        t.skinName = "pveYiFuLiSha.CompLevelSkin",
        t.x = 269,
        t.y = 168,
        t
    },
    i.level3_i = function() {
        var t = new pveYiFuLiSha.CompLevelItem;
        return this.level3 = t,
        t.skinName = "pveYiFuLiSha.CompLevelSkin",
        t.x = 474,
        t.y = 168,
        t
    },
    i.flag_ydh_i = function() {
        var t = new eui.Image;
        return this.flag_ydh = t,
        t.right = 101,
        t.source = "pveYiFuLiShaUp_up_flag_yhd_png",
        t.x = 771,
        t.y = 364,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "pveYiFuLiSha_btnInfo_png",
        t.x = 1030,
        t.y = 430,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveyifulishasettlementSkin.exml"] = window.pveYiFuLiSha.PveyifulishasettlementSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "txtLabel", "btnFix", "scorebg", "img_jrtzpf", "txt_desc", "star0", "star1", "star2", "score", "title"],
        this.height = 261,
        this.width = 383,
        this.elementsContent = [this.bg_i(), this.btnFix_i(), this.score_i(), this.title_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 250,
        t.source = "pveYiFuLiShaSettlement_bg_png",
        t.width = 383,
        t.x = 0,
        t.y = 11,
        t
    },
    i.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 147,
        t.y = 187,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 90,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "确认",
        t.textColor = 8341784,
        t.x = 25,
        t.y = 11,
        t
    },
    i.score_i = function() {
        var t = new eui.Group;
        return this.score = t,
        t.x = 27,
        t.y = 57,
        t.elementsContent = [this.scorebg_i(), this.img_jrtzpf_i(), this.txt_desc_i(), this._Label1_i(), this._Group1_i()],
        t
    },
    i.scorebg_i = function() {
        var t = new eui.Image;
        return this.scorebg = t,
        t.height = 107,
        t.source = "pveYiFuLiShaSettlement_scorebg_png",
        t.width = 329,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_jrtzpf_i = function() {
        var t = new eui.Image;
        return this.img_jrtzpf = t,
        t.height = 28,
        t.source = "pveYiFuLiShaSettlement_img_jrtzpf_png",
        t.width = 153,
        t.x = 24,
        t.y = 54,
        t
    },
    i.txt_desc_i = function() {
        var t = new eui.Label;
        return this.txt_desc = t,
        t.size = 18,
        t.text = "击败疯狂状态下的伊诺美",
        t.textColor = 16773461,
        t.x = 62,
        t.y = 18,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "在次数用尽前，尽量尝试更高的评分吧！",
        t.textColor = 4429155,
        t.x = 26,
        t.y = 105,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 178,
        t.y = 41,
        t.elementsContent = [this._Image2_i(), this.star0_i(), this._Image3_i(), this.star1_i(), this._Image4_i(), this.star2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 4,
        t.y = 4,
        t
    },
    i.star0_i = function() {
        var t = new eui.Image;
        return this.star0 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.width = 51,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 45,
        t.y = 4,
        t
    },
    i.star1_i = function() {
        var t = new eui.Image;
        return this.star1 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.visible = !0,
        t.width = 51,
        t.x = 41,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "pveYiFuLiShaMain_STARBG_png",
        t.width = 44,
        t.x = 86,
        t.y = 4,
        t
    },
    i.star2_i = function() {
        var t = new eui.Image;
        return this.star2 = t,
        t.height = 50,
        t.source = "pveYiFuLiShaMain_star_png",
        t.visible = !0,
        t.width = 51,
        t.x = 82,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 61,
        t.source = "pveYiFuLiShaSettlement_title_png",
        t.width = 221,
        t.x = 81,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveyifulishaupSkin.exml"] = window.pveYiFuLiSha.PveyifulishaupSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "storebg_s9", "btnBuy", "txt_itemCount", "btnExchange0", "item_41556", "flagExchange0", "btnExchange1", "icon_1", "flagExchange1", "btnExchange2", "icon_texing", "flagExchange2", "petbg", "txt_round", "pet", "grp_pet", "tipsbg", "txt_reward", "btnPet", "btnCure", "txtbg", "txt_count2", "battleCount", "txt_BtnOk", "btnOk"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group5_i(), this._Group6_i(), this.battleCount_i(), this.btnOk_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "pveYiFuLiShaLevel1_bg_jpg",
        t.top = 0,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 281,
        t.verticalCenter = 18.5,
        t.elementsContent = [this.storebg_s9_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    i.storebg_s9_i = function() {
        var t = new eui.Image;
        return this.storebg_s9 = t,
        t.height = 495,
        t.source = "pve_yifulisha_storebg_s9_png",
        t.width = 422,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 30,
        t.elementsContent = [this._Image1_i(), this.btnBuy_i(), this._Label2_i(), this._Label3_i(), this.txt_itemCount_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pveYiFuLiShaUp_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 243,
        t.y = 51,
        t.elementsContent = [this._Image2_i(), this._Label1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "直接购买",
        t.textColor = 15794141,
        t.x = 18,
        t.y = 11,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "凋零花瓣",
        t.textColor = 16773461,
        t.x = 109,
        t.y = 20,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "已拥有：",
        t.textColor = 16773461,
        t.x = 110,
        t.y = 73,
        t
    },
    i.txt_itemCount_i = function() {
        var t = new eui.Label;
        return this.txt_itemCount = t,
        t.size = 18,
        t.text = "1",
        t.textColor = 16773461,
        t.x = 182,
        t.y = 75,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pveYiFuLiShaUp_item_1719577_png",
        t.width = 34,
        t.x = 43,
        t.y = 37,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 138,
        t.elementsContent = [this._Image4_i(), this.btnExchange0_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Image6_i(), this.item_41556_i(), this.flagExchange0_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pveYiFuLiShaUp_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange0_i = function() {
        var t = new eui.Group;
        return this.btnExchange0 = t,
        t.x = 243,
        t.y = 51,
        t.elementsContent = [this._Image5_i(), this._Label4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属刻印",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "10",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pveYiFuLiShaUp_item_1719577_png",
        t.width = 17,
        t.x = 190,
        t.y = 71,
        t
    },
    i.item_41556_i = function() {
        var t = new eui.Image;
        return this.item_41556 = t,
        t.height = 52,
        t.source = "pveYiFuLiShaUp_item_41556_png",
        t.width = 55,
        t.x = 33,
        t.y = 31,
        t
    },
    i.flagExchange0_i = function() {
        var t = new eui.Image;
        return this.flagExchange0 = t,
        t.source = "pveYiFuLiShaUp_up_flag_ydh_png",
        t.x = 254,
        t.y = 28,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 246,
        t.elementsContent = [this._Image7_i(), this.btnExchange1_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Image9_i(), this.icon_1_i(), this.flagExchange1_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pveYiFuLiShaUp_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange1_i = function() {
        var t = new eui.Group;
        return this.btnExchange1 = t,
        t.x = 243,
        t.y = 51,
        t.elementsContent = [this._Image8_i(), this._Label8_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "第五技能",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "15",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pveYiFuLiShaUp_item_1719577_png",
        t.width = 17,
        t.x = 190,
        t.y = 71,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 48,
        t.source = "pveYiFuLiShaUp_icon_1_png",
        t.width = 45,
        t.x = 36,
        t.y = 34,
        t
    },
    i.flagExchange1_i = function() {
        var t = new eui.Image;
        return this.flagExchange1 = t,
        t.source = "pveYiFuLiShaUp_up_flag_ydh_png",
        t.x = 254,
        t.y = 28,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 15,
        t.y = 354,
        t.elementsContent = [this._Image10_i(), this.btnExchange2_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this._Image12_i(), this.icon_texing_i(), this.flagExchange2_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pveYiFuLiShaUp_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnExchange2_i = function() {
        var t = new eui.Group;
        return this.btnExchange2 = t,
        t.x = 243,
        t.y = 51,
        t.elementsContent = [this._Image11_i(), this._Label12_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属特性",
        t.textColor = 9363073,
        t.x = 109,
        t.y = 20,
        t
    },
    i._Label14_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9363073,
        t.x = 108,
        t.y = 73,
        t
    },
    i._Label15_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "25",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "pveYiFuLiShaUp_item_1719577_png",
        t.width = 17,
        t.x = 190,
        t.y = 71,
        t
    },
    i.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.height = 49,
        t.source = "pveYiFuLiShaUp_icon_texing_png",
        t.width = 43,
        t.x = 38,
        t.y = 32,
        t
    },
    i.flagExchange2_i = function() {
        var t = new eui.Image;
        return this.flagExchange2 = t,
        t.source = "pveYiFuLiShaUp_up_flag_ydh_png",
        t.x = 254,
        t.y = 28,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -220,
        t.verticalCenter = 18.5,
        t.elementsContent = [this.petbg_i(), this.txt_round_i(), this.grp_pet_i(), this.tipsbg_i(), this.txt_reward_i(), this.btnPet_i(), this.btnCure_i()],
        t
    },
    i.petbg_i = function() {
        var t = new eui.Image;
        return this.petbg = t,
        t.height = 517,
        t.source = "pveYiFuLiShaUp_petbg_png",
        t.width = 526,
        t.x = 64,
        t.y = 0,
        t
    },
    i.txt_round_i = function() {
        var t = new eui.Label;
        return this.txt_round = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "第一轮",
        t.textColor = 16777215,
        t.x = 288,
        t.y = 34,
        t
    },
    i.grp_pet_i = function() {
        var t = new eui.Group;
        return this.grp_pet = t,
        t.x = 330,
        t.y = 377,
        t.elementsContent = [this.pet_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t
    },
    i.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 42,
        t.source = "pveYiFuLiShaUp_tipsbg_png",
        t.width = 460,
        t.x = 97,
        t.y = 372,
        t
    },
    i.txt_reward_i = function() {
        var t = new eui.Label;
        return this.txt_reward = t,
        t.size = 20,
        t.text = "击败可获得凋零花瓣",
        t.textAlign = "center",
        t.textColor = 16773461,
        t.width = 280,
        t.x = 183,
        t.y = 381,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.height = 60,
        t.source = "pveYiFuLiShaLevel2_imgBtn_pet_png",
        t.width = 60,
        t.x = 0,
        t.y = 172,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.height = 60,
        t.source = "pveYiFuLiShaLevel2_imgBtn_cure_png",
        t.width = 60,
        t.x = 0,
        t.y = 248,
        t
    },
    i.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 17,
        t.y = 7,
        t.elementsContent = [this.txtbg_i(), this._Label16_i(), this.txt_count2_i()],
        t
    },
    i.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 40,
        t.source = "pveYiFuLiShaLevel2_txtbg_png",
        t.width = 282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label16_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "今日剩余战斗次数：",
        t.textColor = 16777215,
        t.x = 49,
        t.y = 12,
        t
    },
    i.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.size = 18,
        t.text = "000",
        t.textColor = 16777215,
        t.x = 211,
        t.y = 14,
        t
    },
    i.btnOk_i = function() {
        var t = new eui.Group;
        return this.btnOk = t,
        t.height = 52,
        t.horizontalCenter = -175,
        t.verticalCenter = 214,
        t.width = 176,
        t.elementsContent = [this._Image13_i(), this.txt_BtnOk_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_BtnOk_i = function() {
        var t = new eui.Label;
        return this.txt_BtnOk = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始挑战",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    e
} (eui.Skin);