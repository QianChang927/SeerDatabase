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
    return new(n || (n = Promise))(function(a, r) {
        function o(t) {
            try {
                u(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function u(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, s)
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
            if (a = 1, r && (o = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(r, n[1])).done) return o;
            switch (r = 0, o && (n = [0, o.value]), n[0]) {
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
                r = n[1],
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
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.PveLanluMainPanelSkin,
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
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnInfo, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgStarGuardian, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgAngle, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgNaughtyGirl, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.help, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnGet, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnUp, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnBuy, this.onTouchImageButton, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchImageButton = function(e) {
            var n = this;
            switch (e.currentTarget) {
            case this.help:
                var i = config.Help_tips.getItem(36),
                a = {};
                a.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(a);
                break;
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_CLOSE_MODULE);
                break;
            case this.imgNaughtyGirl:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.NaughtyGrilPanel);
                break;
            case this.imgStarGuardian:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.StarGuardianPanel);
                break;
            case this.imgAngle:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.WaterAnglePanel);
                break;
            case this.btnGet:
                t.MgrData.getInstance().evlPet(3664, 796, this.update, this);
                break;
            case this.btnInfo:
                PetManager.showPetIntroduce(3644);
                break;
            case this.btnUp:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_OPEN_PANEL, !1, t.Panel_Name.EnergyUpPanel);
                break;
            case this.btnBuy:
                this._flagHaveLanLanLu ? BuyProductManager.buyProductBySocket(253653,
                function() {
                    t.MgrData.getInstance().evlPet(3664, 795, n.update, n)
                },
                this) : BuyProductManager.buyProductBySocket(253652,
                function() {
                    t.MgrData.getInstance().noCompleteLevel1().then(function() {
                        n.update()
                    })
                },
                this)
            }
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, n, i, a, r, o;
                return __generator(this,
                function(s) {
                    for (this.btnBuy.visible = !1, this.btnGet.visible = !1, this.btnUp.visible = !1, e = [{
                        btn: this.imgNaughtyGirl,
                        img: this.imgFlagComplete0
                    },
                    {
                        btn: this.imgAngle,
                        img: this.imgFlagComplete1
                    },
                    {
                        btn: this.imgStarGuardian,
                        img: this.imgFlagComplete2
                    }], n = t.MgrData.getInstance().getValue(104376), this._flagHaveLanLanLu = Boolean(BitUtil.getBit(n, 1)), i = t.MgrData.getInstance().getValue(104377), a = 1 == BitUtil.getBit(n, 0), a ? (i = 3, this.btnBuy.visible = this.btnGet.visible = !1, this.btnUp.visible = !0) : 3 > i ? (this.btnBuy.visible = !0, this.btnGet.visible = !1) : (this.btnGet.visible = !0, this.btnBuy.visible = !1), r = 0; r < e.length; r++) o = e[r],
                    i > r ? (o.img.visible = !0, DisplayUtil.setEnabled(o.btn, !1, !1)) : r == i ? (o.img.visible = !1, DisplayUtil.setEnabled(o.btn, !0, !1)) : (DisplayUtil.setEnabled(o.btn, !1, !0), o.img.visible = !1);
                    return [2]
                })
            })
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.MainPanel = e,
    __reflect(e.prototype, "pveLanLu.MainPanel", ["pveLanLu.IPanel"])
} (pveLanLu || (pveLanLu = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
pveLanLu; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_CLOSE_MODULE = "event_close_module",
        t.EVENT_BACK_MAIN_PANEL = "event_back_main_panel",
        t.EVENT_OPEN_PANEL = "event_open_panel",
        t
    } ();
    t.EventConstants = e,
    __reflect(e.prototype, "pveLanLu.EventConstants")
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e; !
    function(t) {
        t.MainPanel = "mainPanel",
        t.NaughtyGrilPanel = "naughtyGrilPanel",
        t.WaterAnglePanel = "waterAnglePanbel",
        t.StarGuardianPanel = "starGuardianPanel",
        t.EnergyUpPanel = "energyPanel"
    } (e = t.Panel_Name || (t.Panel_Name = {}));
    var n = function(n) {
        function i() {
            var i = n.call(this) || this;
            return i.panelMap = {},
            i.addEvents(),
            t.MgrData.getInstance().updateValues().then(function() {
                i.openPanel(e.MainPanel)
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
                e.currentPanel && e.currentPanel.update()
            })
        },
        i.prototype.openPanel = function(t) {
            var e = this;
            this.currentPanel && this.currentPanel.parent.removeChild(this.currentPanel),
            this.currentPanel = this.panelMap[t],
            this.currentPanel || (this.currentPanel = this.createPanel(t), this.panelMap[t] = this.currentPanel),
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
            case e.MainPanel:
                i = new t.MainPanel;
                break;
            case e.NaughtyGrilPanel:
                i = new t.NaughtyGrilPanel;
                break;
            case e.WaterAnglePanel:
                i = new t.WaterAnglePanel;
                break;
            case e.StarGuardianPanel:
                i = new t.StarGuardianPanel;
                break;
            case e.EnergyUpPanel:
                i = new t.EnergyUpPanel
            }
            return i
        },
        i.prototype.onBackMainPanel = function() {
            this.openPanel(e.MainPanel)
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
    t.PveLanLu = n,
    __reflect(n.prototype, "pveLanLu.PveLanLu")
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._selected = !1,
            e
        }
        return __extends(e, t),
        e.prototype.setPetStyle = function(t) {
            this.imgpet.source = t
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return this._selected
            },
            set: function(t) {
                this._selected = t,
                this.flagSelected.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setMask = function(t) {
            this.flagMask.visible = t
        },
        e.prototype.updateHeart = function(t) {
            for (var e = 3,
            n = 2; n >= 0; n--) this["hp" + n].visible = Boolean(e - t >= n + 1)
        },
        e.prototype.destroy = function() {},
        e
    } (eui.Component);
    t.StarGuardianCard = e,
    __reflect(e.prototype, "pveLanLu.StarGuardianCard")
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.bossArry = [{
                battle: 13168,
                show: 2628,
                cnt: 1
            },
            {
                battle: 13169,
                show: 1667,
                cnt: 1
            },
            {
                battle: 13170,
                show: 2931,
                cnt: 1
            },
            {
                battle: 13171,
                show: 2463,
                cnt: 1
            },
            {
                battle: 13172,
                show: 2275,
                cnt: 2
            },
            {
                battle: 13173,
                show: 2801,
                cnt: 2
            },
            {
                battle: 13174,
                show: 3065,
                cnt: 2
            },
            {
                battle: 13175,
                show: 3e3,
                cnt: 2
            },
            {
                battle: 13176,
                show: 3021,
                cnt: 3
            },
            {
                battle: 13177,
                show: 3177,
                cnt: 3
            }],
            n.skinName = t.PveLanluEneryUpPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(37, this, "pve_lanlu_enery_up_panel_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents(),
            this.adaptLeftContent(this.btns)
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_cure, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgBtn_pet, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnFix, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.help, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.exchangeMark, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.exchangeSkill, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.exhangeTexing, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.btnBattle, core.gameUtil.throttle(this.onTouchImageButton, this, 1e3, !0), this),
            ImageButtonUtil.add(this.icon_mark,
            function() {
                var t = {};
                t.ins = 41284,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_skill,
            function() {
                var t = {};
                t.id = 32296,
                tipsPop.TipsPop.openSkillPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_texing,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 3644, "", AppDoStyle.NULL)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this)
        },
        n.prototype.removeEvents = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.onUpdateByItemChangeEvent, this),
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchImageButton = function(e) {
            var n = this;
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.imgBtn_cure:
                PetManager.cureAll();
                break;
            case this.imgBtn_pet:
                ModuleManager.showModuleByID(10);
                break;
            case this.btnFix:
                BuyProductManager.buyProduct("253662_11559",
                function() {
                    n.update()
                },
                this, 1717078);
                break;
            case this.exchangeMark:
                this.doExchange(10, 1);
                break;
            case this.exchangeSkill:
                this.doExchange(15, 2);
                break;
            case this.exhangeTexing:
                this.doExchange(25, 3);
                break;
            case this.btnBattle:
                this.onBattle();
                break;
            case this.help:
                var i = config.Help_tips.getItem(37),
                a = {};
                a.str = StringUtil.TransformLineBreak(i.tips),
                tipsPop.TipsPop.openHelpPop(a)
            }
        },
        n.prototype.doExchange = function(e, n) {
            var i = this,
            a = ItemManager.getNumByID(1717078);
            if (e > a) return void Alarm.show("道具数量不足!");
            if (!PetManager.isDefaultPet(3644)) {
                var r = PetXMLInfo.getName(3644);
                return void Alarm.show("请先将" + r + "设为首发位置!",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            }
            t.MgrData.getInstance().exchangeItem(n).then(function() {
                i.update()
            })["catch"](function(t) {
                throw new Error("兑换choice为" + n + "的道具出现问题")
            })
        },
        n.prototype.onBattle = function() {
            var e = this;
            if (this._halfBattleCnt <= 0 && this._isStartFlag) return void Alarm.show("今日次数不足");
            var n = t.MgrData.getInstance().getValue(16825);
            FightManager.fightNoMapBoss("", this._currentBossInfo.battle, !1, !0,
            function() {
                n === e.bossArry.length && FightManager.isWin && Alarm.show("恭喜你击败了全部对手，完成了本轮试炼！")
            })
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = this,
            n = t.MgrData.getInstance().getValue(104376),
            i = t.MgrData.getInstance().getValue(16825),
            a = t.MgrData.getInstance().getValue(16824);
            this.txtBattle.text = 0 === i ? "开始试炼": "继续试炼";
            var r = this.bossArry[i];
            this._currentBossInfo = r,
            this._isStartFlag = 0 === i;
            var o = 10;
            this.txtRound.text = "第" + (i + 1) + "/" + o + "轮",
            this.txtmvds.text = "镜湖贝壳x" + r.cnt,
            this.txt_count2.text = "今日剩余战斗次数：" + (2 - a),
            RES.getResByUrl(ClientConfig.getfightPetPng(r.show + ""),
            function(t, n) {
                e.pet.source = t,
                e.pet.anchorOffsetX = .5 * t.textureWidth,
                e.pet.anchorOffsetY = t.textureHeight,
                e.pet.x = e.pet.y = 0
            },
            this);
            var s = Boolean(BitUtil.getBit(n, 2)),
            u = Boolean(BitUtil.getBit(n, 3)),
            l = Boolean(BitUtil.getBit(n, 4));
            this.exchangeMark.visible = !s,
            this.flagMark.visible = s,
            this.exchangeSkill.visible = !u,
            this.flagSkill.visible = u,
            this.exhangeTexing.visible = !l,
            this.flagTexing.visible = l,
            this.txtItemCount.text = ItemManager.getNumByID(1717078) + "",
            this.onUpdateByItemChangeEvent()
        },
        n.prototype.onUpdateByItemChangeEvent = function(t) {
            void 0 === t && (t = null),
            this.txtItemCount.text = ItemManager.getNumByID(1717078) + ""
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.EnergyUpPanel = e,
    __reflect(e.prototype, "pveLanLu.EnergyUpPanel", ["pveLanLu.IPanel"])
} (pveLanLu || (pveLanLu = {}));
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
    return new(n || (n = Promise))(function(a, r) {
        function o(t) {
            try {
                u(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                u(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function u(t) {
            t.done ? a(t.value) : new n(function(e) {
                e(t.value)
            }).then(o, s)
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
            if (a = 1, r && (o = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(o = o.call(r, n[1])).done) return o;
            switch (r = 0, o && (n = [0, o.value]), n[0]) {
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
                r = n[1],
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
            n = e.call(t, u)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
pveLanLu; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._foreverAndDailyValues = [104376, 104377, 104378, 104379, 16823, 16824, 16825, 16831, 16832],
            e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
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
                            return console.error("蓝露拉取永久值每日值数据失败"),
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
        e.prototype.noCompleteLevel1 = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(43297, [14, 0])];
                    case 1:
                        return t.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return t.sent(),
                        [2]
                    }
                })
            })
        },
        e.prototype.evlPet = function(t, e, n, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var a, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return PetManager.isDefaultPet(t) ? [4, SocketConnection.sendWithPromise(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, e])] : (a = PetXMLInfo.getName(t), Alarm.show("请先将" + a + "设为首发位置!",
                        function() {
                            ModuleManager.showModuleByID(10)
                        }), [2]);
                    case 1:
                        return r = o.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return o.sent(),
                        n.call(i),
                        [2]
                    }
                })
            })
        },
        e.prototype.virtualBattle = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    return [2]
                })
            })
        },
        e.prototype.quickComplete = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(43297, [15, t])];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e.prototype.exchangeItem = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(43297, [16, t])];
                    case 1:
                        return e = n.sent(),
                        [4, this.updateValues()];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        e
    } (egret.EventDispatcher);
    t.MgrData = e,
    __reflect(e.prototype, "pveLanLu.MgrData")
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._config = RES.getRes("pve_lan_lu_config_json").naughtygirl,
            n.skinName = t.PveLanluLevelNaughtyGirlSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "pve_lanlu_level_naughty_girl_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgOne, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgTwo, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.imgThree, this.onTouchImageButton, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.imgOne:
                this.onTouchLevel(0);
                break;
            case this.imgTwo:
                this.onTouchLevel(1);
                break;
            case this.imgThree:
                this.onTouchLevel(2)
            }
        },
        n.prototype.onTouchLevel = function(e) {
            var n = this,
            i = {
                petId: this._config[e].petId,
                pop: this._config[e].pop,
                fightCallBack: function(t, i) {
                    t.apply(i, null),
                    SocketConnection.sendByQueue(CommandID.FIGHT_TRY_USE_PET, [n._config[e].vbattle, 0, 0, 0, 0, 0])
                },
                buyCallBack: function(i, a) {
                    i.apply(a, null),
                    BuyProductManager.buyProductBySocket(253654,
                    function() {
                        t.MgrData.getInstance().quickComplete(n._config[e].choice).then(function() {
                            n.update()
                        })
                    },
                    n)
                },
                caller: this
            };
            PopViewManager.getInstance().openView(new t.BattlePop, null, i)
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(104378),
            n = Boolean(BitUtil.getBit(e, 0)),
            i = Boolean(BitUtil.getBit(e, 1)),
            a = Boolean(BitUtil.getBit(e, 2));
            this.flagBeat0.visible = n,
            this.imgOne.touchEnabled = !n,
            this.flagBeat1.visible = a,
            this.imgTwo.touchEnabled = !a,
            this.flagBeat2.visible = i,
            this.imgThree.touchEnabled = !i,
            n && i && a && t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.NaughtyGrilPanel = e,
    __reflect(e.prototype, "pveLanLu.NaughtyGrilPanel", ["pveLanLu.IPanel"])
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._configs = RES.getRes("pve_lan_lu_config_json").starguardian,
            n.skinName = t.PveLanluStarGuardianSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var n = this;
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "pve_lanlu_star_guardian_title_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this);
            var i = [{
                src: "pve_lanlu_star_guardian_imgpet_png",
                petid: 3634
            },
            {
                src: "pve_lanlu_star_guardian_imgpet2_png",
                petid: 3639
            },
            {
                src: "pve_lanlu_star_guardian_imgpet3_png",
                petid: 3640
            }];
            i.forEach(function(t, e) {
                n["level" + e].setPetStyle(t.src),
                n["level" + e].petId = t.petid
            }),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this);
            for (var t = 0; 3 > t; t++) ImageButtonUtil.add(this["level" + t], this.onTouchImageButton, this, !1, !1)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.level0:
                this.onTouchCard(0);
                break;
            case this.level1:
                this.onTouchCard(1);
                break;
            case this.level2:
                this.onTouchCard(2)
            }
        },
        n.prototype.onTouchCard = function(e) {
            var n = this,
            i = this._battleInfos[e];
            if (i.battle) {
                var a = {
                    petId: i.petId,
                    pop: i.pop,
                    fightCallBack: function(t, e) {
                        t.apply(e, null),
                        FightManager.fightNoMapBoss("", i.boss)
                    },
                    buyCallBack: function(a, r) {
                        a.apply(r, null);
                        for (var o = t.MgrData.getInstance().getValue(16831), s = [BitUtil.getHalfByte(o, 0), BitUtil.getHalfByte(o, 1), BitUtil.getHalfByte(o, 2)], u = 0, l = 0; l < s.length; l++) 3 == s[l] && u++;
                        var _ = 1 != s[e] && 2 != s[e] || 0 != u ? [253659, 253660, 253661][u] : 253659;
                        BuyProductManager.buyProductBySocket(_,
                        function() {
                            t.MgrData.getInstance().quickComplete(i.quickchoose).then(function() {
                                n.update()
                            })
                        },
                        n)
                    },
                    caller: this
                };
                PopViewManager.getInstance().openView(new t.BattlePop, null, a)
            }
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = this,
            n = 80 - t.MgrData.getInstance().getValue(16832),
            i = t.MgrData.getInstance().getValue(16823);
            if (i > 0) {
                var a = {
                    caller: this,
                    costCallBack: function(t, e) {
                        Alarm.show("暂未开放，敬请期待！")
                    },
                    cancelCallBack: function() {
                        t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
                    }
                },
                r = PopViewManager.createDefaultStyleObject();
                return r.caller = this,
                r.clickMaskHandler = function() {},
                void PopViewManager.getInstance().openView(new t.CostPop, r, a)
            }
            var o = [this.level0, this.level1, this.level2],
            s = t.MgrData.getInstance().getValue(16831),
            u = [BitUtil.getHalfByte(s, 0), BitUtil.getHalfByte(s, 1), BitUtil.getHalfByte(s, 2)];
            this._battleInfos = [],
            o.forEach(function(t, n) {
                for (var i = e._configs[n], a = {
                    petId: i.petId,
                    talk: "",
                    battle: !1,
                    pop: "",
                    boss: 0,
                    quickchoose: n + 7,
                    costDiamond: e.getDiamond(n)
                },
                r = i.checkcfg, o = 0; o < r.length; o++) if (e.check(u, r[o].hp)) {
                    a.talk = r[o].talk || "",
                    a.battle = r[o].battle || !1,
                    a.pop = r[o].pop || "",
                    a.boss = r[o].boss || "";
                    break
                }
                t.selected = a.battle,
                t.touchEnabled = a.battle,
                t.updateHeart(u[n]),
                e._battleInfos[n] = a
            }),
            this._battleInfos.forEach(function(t, n) {
                var i = e["talk" + n];
                if (t.talk) {
                    var a = StringUtil.str2Html(t.talk);
                    "string" == typeof a ? i.text = a: i.textFlow = a,
                    e["grpTalk" + n].visible = !0
                } else e["grpTalk" + n].visible = !1
            }),
            this.txtHalfCount.text = "今日剩余" + n + "回合可用";
            var l = u.filter(function(t) {
                return 3 === t
            });
            3 === l.length && t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
        },
        n.prototype.check = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = e[n],
                a = 3 - t[n];
                if ( - 1 != i && i != a) return ! 1
            }
            return ! 0
        },
        n.prototype.getDiamond = function(t) {
            var e = 0;
            switch (t) {
            case e:
            }
            return 0
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.StarGuardianPanel = e,
    __reflect(e.prototype, "pveLanLu.StarGuardianPanel", ["pveLanLu.IPanel"])
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n._config = RES.getRes("pve_lan_lu_config_json").waterangle,
            n.skinName = t.PveWaterAnglePanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initOldPveBtnClose(0, this, "pve_water_angle_panel_titile_png",
            function() {
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
            },
            this),
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.level1, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.level2, this.onTouchImageButton, this),
            ImageButtonUtil.add(this.level3, this.onTouchImageButton, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL);
                break;
            case this.level1:
                this.onBattle(0);
                break;
            case this.level2:
                this.onBattle(1);
                break;
            case this.level3:
                this.onBattle(2)
            }
        },
        n.prototype.onBattle = function(e) {
            var n = this,
            i = {
                petId: this._config[e].petId,
                pop: this._config[e].pop,
                fightCallBack: function(t, i) {
                    t.apply(i, null),
                    EventManager.addEventListener(PetFightEvent.ALARM_CLICK, n.onFightOver, n),
                    SocketConnection.sendByQueue(43297, [16, n._config[e].battle])
                },
                buyCallBack: function(i, a) {
                    i.apply(a, null),
                    BuyProductManager.buyProductBySocket([253655, 253656, 253657][e],
                    function() {
                        t.MgrData.getInstance().quickComplete(n._config[e].choice).then(function() {
                            n.update()
                        })
                    },
                    n)
                },
                caller: this
            };
            PopViewManager.getInstance().openView(new t.BattlePop, null, i)
        },
        n.prototype.onFightOver = function(t) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            KTool.getMultiValueAsync([104378]).then(function(t) {
                var e = BitUtil.getBit(t[0], 9);
                1 === e && Alarm.show("有只华特重伤不治，关卡挑战失败!")
            })
        },
        n.prototype.beforeUpdate = function() {
            return Promise.resolve()
        },
        n.prototype.update = function() {
            var e = t.MgrData.getInstance().getValue(104379),
            n = t.MgrData.getInstance().getValue(104378),
            i = Boolean(BitUtil.getBit(n, 6)),
            a = Boolean(BitUtil.getBit(n, 7)),
            r = Boolean(BitUtil.getBit(n, 8));
            this.level1.touchEnabled = !i,
            this.flagMask0.visible = i,
            this.level2.touchEnabled = !a,
            this.flagMask1.visible = a,
            this.level3.touchEnabled = !r,
            this.flagMask2.visible = r,
            this.txtHalfRound.text = "本轮" + (30 - (e >> 24 & 255)) + "回合可用",
            i && a && r && t.MgrData.getInstance().dispatchEventWith(t.EventConstants.EVENT_BACK_MAIN_PANEL)
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.WaterAnglePanel = e,
    __reflect(e.prototype, "pveLanLu.WaterAnglePanel", ["pveLanLu.IPanel"])
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.BattlePopSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnBuy0, this.onTouchButton, this),
            ImageButtonUtil.add(this.btnFight0, this.onTouchButton, this),
            ImageButtonUtil.add(this.imgBtn_cure, this.onTouchButton, this),
            ImageButtonUtil.add(this.imgBtn_pet, this.onTouchButton, this),
            ImageButtonUtil.add(this.close, this.onTouchButton, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype._parseData = function() {
            this._myData = this._data
        },
        n.prototype._upDateView = function() {
            var t = this,
            e = this._myData.petId;
            RES.getResByUrl(ClientConfig.getfightPetPng(e + ""),
            function(e, n) {
                t.petStyle0.source = e,
                t.petStyle0.anchorOffsetX = .5 * e.textureWidth,
                t.petStyle0.anchorOffsetY = e.textureHeight,
                t.petStyle0.x = t.petStyle0.y = 0
            },
            this),
            this.txtNick0.text = PetXMLInfo.getName(e);
            var n = StringUtil.str2Html(this._myData.pop);
            "string" == typeof n ? this.txtDesc0.text = n: this.txtDesc0.textFlow = n
        },
        n.prototype.onTouchButton = function(t) {
            var e = this._myData.fightCallBack,
            n = this._myData.buyCallBack,
            i = this._myData.caller;
            switch (t.currentTarget) {
            case this.btnBuy0:
                n.apply(i, [this.hide, this]);
                break;
            case this.btnFight0:
                e.apply(i, [this.hide, this]);
                break;
            case this.imgBtn_cure:
                PetManager.cureAll();
                break;
            case this.imgBtn_pet:
                this.hide(),
                ModuleManager.showModuleByID(10);
                break;
            case this.close:
                this.hide()
            }
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.BattlePop = e,
    __reflect(e.prototype, "pveLanLu.BattlePop")
} (pveLanLu || (pveLanLu = {}));
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
pveLanLu; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.PveLanluRoundPopSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        n.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnCompose, this.onTouchButton, this),
            ImageButtonUtil.add(this.btnFix, this.onTouchButton, this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype._parseData = function() {
            this._myData = this._data
        },
        n.prototype._upDateView = function() {},
        n.prototype.onTouchButton = function(t) {
            var e = this._myData.costCallBack,
            n = this._myData.cancelCallBack,
            i = this._myData.caller;
            switch (t.currentTarget) {
            case this.btnFix:
                e.apply(i, [this.hide, this]);
                break;
            case this.btnCompose:
                this.hide(),
                n.apply(i, null)
            }
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        n
    } (PopView);
    t.CostPop = e,
    __reflect(e.prototype, "pveLanLu.CostPop")
} (pveLanLu || (pveLanLu = {})),
window.pveLanLu = window.pveLanLu || {};
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
generateEUI.paths["resource/eui_skins/comp/StarGuardianCardSkin.exml"] = window.pveLanLu.StarGuardianCardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgpet", "hp0", "hp1", "hp2", "heart", "pet0", "flagSelected", "flagMask"],
        this.height = 481,
        this.width = 343,
        this.elementsContent = [this.pet0_i(), this.flagSelected_i(), this.flagMask_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.pet0_i = function() {
        var t = new eui.Group;
        return this.pet0 = t,
        t.x = 18,
        t.y = 19,
        t.elementsContent = [this.imgpet_i(), this.heart_i()],
        t
    },
    n.imgpet_i = function() {
        var t = new eui.Image;
        return this.imgpet = t,
        t.height = 443,
        t.source = "pve_lanlu_star_guardian_imgpet2_png",
        t.visible = !0,
        t.width = 307,
        t.x = 0,
        t.y = 0,
        t
    },
    n.heart_i = function() {
        var t = new eui.Group;
        return this.heart = t,
        t.x = 93,
        t.y = 387,
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.hp0_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp0_png",
        t.visible = !0,
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hp0_i = function() {
        var t = new eui.Image;
        return this.hp0 = t,
        t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp1_png",
        t.visible = !0,
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 44,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.hp1_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp0_png",
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hp1_i = function() {
        var t = new eui.Image;
        return this.hp1 = t,
        t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp1_png",
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 88,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.hp2_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp0_png",
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n.hp2_i = function() {
        var t = new eui.Image;
        return this.hp2 = t,
        t.height = 29,
        t.source = "pve_lanlu_star_guardian_hp1_png",
        t.width = 34,
        t.x = 0,
        t.y = 0,
        t
    },
    n.flagSelected_i = function() {
        var t = new eui.Image;
        return this.flagSelected = t,
        t.height = 481,
        t.source = "pve_lanlu_star_guardian_flagSelected_png",
        t.visible = !0,
        t.width = 343,
        t.x = 0,
        t.y = 0,
        t
    },
    n.flagMask_i = function() {
        var t = new eui.Image;
        return this.flagMask = t,
        t.height = 413,
        t.source = "pve_lanlu_star_guardian_flagMask_png",
        t.visible = !1,
        t.width = 277,
        t.x = 33,
        t.y = 34,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveLanluEneryUpPanelSkin.exml"] = window.pveLanLu.PveLanluEneryUpPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgBtn_pet", "imgBtn_cure", "btns", "up_bg", "btnClose", "title", "help", "top", "countBg", "txt_count2", "battleCount", "storebg_s9", "btnFix", "txtnlkf", "txtItemCount", "itemBuy", "exchangeMark", "flagMark", "icon_mark", "itemExchange1", "exchangeSkill", "flagSkill", "icon_skill", "itemExchange2", "exhangeTexing", "flagTexing", "icon_texing", "itemExchange3", "petbg", "txtRound", "tipsbg", "txtmmkls", "txtmvds", "txtBattle", "btnBattle", "pet", "grpPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.btns_i(), this.top_i(), this.battleCount_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_main_panel_bg_png",
        t.y = 0,
        t
    },
    n.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.left = 53,
        t.y = 256,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_lanlu_battle_pop_imgBtn_pet_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_lanlu_battle_pop_imgBtn_cure_png",
        t.width = 60,
        t.x = 0,
        t.y = 68,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.x = 31,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i(), this.help_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 45,
        t.source = "pve_lanlu_main_panel_up_bg_png",
        t.width = 1,
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_lanlu_main_panel_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 3,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.source = "pve_lanlu_enery_up_panel_title_png",
        t.width = 185,
        t.x = 81,
        t.y = 5,
        t
    },
    n.help_i = function() {
        var t = new eui.Image;
        return this.help = t,
        t.height = 25,
        t.source = "pve_lanlu_main_panel_help_png",
        t.width = 23,
        t.x = 270,
        t.y = 12,
        t
    },
    n.battleCount_i = function() {
        var t = new eui.Group;
        return this.battleCount = t,
        t.right = 0,
        t.y = 9,
        t.elementsContent = [this.countBg_i(), this.txt_count2_i()],
        t
    },
    n.countBg_i = function() {
        var t = new eui.Image;
        return this.countBg = t,
        t.height = 40,
        t.source = "pve_lanlu_enery_up_panel_countBg_png",
        t.width = 286,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_count2_i = function() {
        var t = new eui.Label;
        return this.txt_count2 = t,
        t.size = 18,
        t.text = "  今日剩余战斗次数：000",
        t.textColor = 16777215,
        t.x = 66,
        t.y = 10,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 20.5,
        t.visible = !0,
        t.y = 80,
        t.elementsContent = [this.storebg_s9_i(), this.itemBuy_i(), this.itemExchange1_i(), this.itemExchange2_i(), this.itemExchange3_i(), this.petbg_i(), this.txtRound_i(), this.tipsbg_i(), this.txtmmkls_i(), this.txtmvds_i(), this._Image12_i(), this.btnBattle_i(), this.grpPet_i()],
        t
    },
    n.storebg_s9_i = function() {
        var t = new eui.Image;
        return this.storebg_s9 = t,
        t.height = 495,
        t.source = "pve_lanlu_enery_up_panel_storebg_s9_png",
        t.width = 422,
        t.x = 521,
        t.y = 11,
        t
    },
    n.itemBuy_i = function() {
        var t = new eui.Group;
        return this.itemBuy = t,
        t.x = 536,
        t.y = 41,
        t.elementsContent = [this._Image1_i(), this.btnFix_i(), this._Label1_i(), this.txtnlkf_i(), this.txtItemCount_i(), this._Image2_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pve_lanlu_enery_up_panel_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnFix_i = function() {
        var t = new eui.Image;
        return this.btnFix = t,
        t.height = 40,
        t.source = "pve_lanlu_enery_up_panel_btnFix_png",
        t.width = 120,
        t.x = 246,
        t.y = 53,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "镜湖贝壳",
        t.textColor = 9299967,
        t.x = 109,
        t.y = 20,
        t
    },
    n.txtnlkf_i = function() {
        var t = new eui.Label;
        return this.txtnlkf = t,
        t.size = 18,
        t.text = "已拥有：",
        t.textColor = 9299967,
        t.x = 110,
        t.y = 73,
        t
    },
    n.txtItemCount_i = function() {
        var t = new eui.Label;
        return this.txtItemCount = t,
        t.size = 18,
        t.text = "1",
        t.textColor = 16773461,
        t.x = 182,
        t.y = 75,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 38,
        t.source = "pve_lanlu_enery_up_panel_icon_png",
        t.width = 43,
        t.x = 36,
        t.y = 38,
        t
    },
    n.itemExchange1_i = function() {
        var t = new eui.Group;
        return this.itemExchange1 = t,
        t.x = 536,
        t.y = 149,
        t.elementsContent = [this._Image3_i(), this.exchangeMark_i(), this.flagMark_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Image5_i(), this.icon_mark_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pve_lanlu_enery_up_panel_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    n.exchangeMark_i = function() {
        var t = new eui.Group;
        return this.exchangeMark = t,
        t.visible = !0,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image4_i(), this._Label2_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    n.flagMark_i = function() {
        var t = new eui.Image;
        return this.flagMark = t,
        t.height = 52,
        t.source = "pve_lanlu_enery_up_panel_flagYhd_png",
        t.visible = !0,
        t.width = 144,
        t.x = 234,
        t.y = 47,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属刻印",
        t.textColor = 9299967,
        t.x = 109,
        t.y = 20,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9299967,
        t.x = 108,
        t.y = 73,
        t
    },
    n._Label5_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "10",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_lanlu_enery_up_panel_icon_png",
        t.width = 20,
        t.x = 189,
        t.y = 72,
        t
    },
    n.icon_mark_i = function() {
        var t = new eui.Image;
        return this.icon_mark = t,
        t.height = 53,
        t.source = "pve_lanlu_enery_up_panel_mark_png",
        t.width = 55,
        t.x = 31,
        t.y = 29,
        t
    },
    n.itemExchange2_i = function() {
        var t = new eui.Group;
        return this.itemExchange2 = t,
        t.x = 536,
        t.y = 257,
        t.elementsContent = [this._Image6_i(), this.exchangeSkill_i(), this.flagSkill_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Image8_i(), this.icon_skill_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pve_lanlu_enery_up_panel_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    n.exchangeSkill_i = function() {
        var t = new eui.Group;
        return this.exchangeSkill = t,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image7_i(), this._Label6_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    n.flagSkill_i = function() {
        var t = new eui.Image;
        return this.flagSkill = t,
        t.height = 52,
        t.source = "pve_lanlu_enery_up_panel_flagYhd_png",
        t.width = 144,
        t.x = 234,
        t.y = 47,
        t
    },
    n._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "第五技能",
        t.textColor = 9299967,
        t.x = 109,
        t.y = 20,
        t
    },
    n._Label8_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9299967,
        t.x = 108,
        t.y = 73,
        t
    },
    n._Label9_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "15",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    n._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_lanlu_enery_up_panel_icon_png",
        t.width = 20,
        t.x = 189,
        t.y = 72,
        t
    },
    n.icon_skill_i = function() {
        var t = new eui.Image;
        return this.icon_skill = t,
        t.height = 48,
        t.source = "pve_lanlu_enery_up_panel_icon_1_png",
        t.width = 45,
        t.x = 36,
        t.y = 34,
        t
    },
    n.itemExchange3_i = function() {
        var t = new eui.Group;
        return this.itemExchange3 = t,
        t.x = 536,
        t.y = 365,
        t.elementsContent = [this._Image9_i(), this.exhangeTexing_i(), this.flagTexing_i(), this._Label11_i(), this._Label12_i(), this._Label13_i(), this._Image11_i(), this.icon_texing_i()],
        t
    },
    n._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 112,
        t.source = "pve_lanlu_enery_up_panel_buybg_png",
        t.width = 390,
        t.x = 0,
        t.y = 0,
        t
    },
    n.exhangeTexing_i = function() {
        var t = new eui.Group;
        return this.exhangeTexing = t,
        t.x = 246,
        t.y = 53,
        t.elementsContent = [this._Image10_i(), this._Label10_i()],
        t
    },
    n._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "立即兑换",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    n.flagTexing_i = function() {
        var t = new eui.Image;
        return this.flagTexing = t,
        t.height = 52,
        t.source = "pve_lanlu_enery_up_panel_flagYhd_png",
        t.width = 144,
        t.x = 234,
        t.y = 47,
        t
    },
    n._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "专属特性",
        t.textColor = 9299967,
        t.x = 109,
        t.y = 20,
        t
    },
    n._Label12_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "兑换需要：",
        t.textColor = 9299967,
        t.x = 108,
        t.y = 73,
        t
    },
    n._Label13_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "25",
        t.textColor = 16773461,
        t.x = 210,
        t.y = 75,
        t
    },
    n._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_lanlu_enery_up_panel_icon_png",
        t.width = 20,
        t.x = 189,
        t.y = 73,
        t
    },
    n.icon_texing_i = function() {
        var t = new eui.Image;
        return this.icon_texing = t,
        t.height = 49,
        t.source = "pve_lanlu_enery_up_panel_icon_texing_png",
        t.width = 43,
        t.x = 38,
        t.y = 32,
        t
    },
    n.petbg_i = function() {
        var t = new eui.Image;
        return this.petbg = t,
        t.height = 517,
        t.source = "pve_lanlu_enery_up_panel_petbg_png",
        t.width = 526,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtRound_i = function() {
        var t = new eui.Label;
        return this.txtRound = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "第00/10轮",
        t.textColor = 16773461,
        t.x = 194,
        t.y = 34,
        t
    },
    n.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 42,
        t.source = "pve_lanlu_enery_up_panel_tipsbg_png",
        t.width = 460,
        t.x = 33,
        t.y = 372,
        t
    },
    n.txtmmkls_i = function() {
        var t = new eui.Label;
        return this.txtmmkls = t,
        t.size = 20,
        t.text = "击败可以获得   ",
        t.textColor = 16773461,
        t.x = 132,
        t.y = 381,
        t
    },
    n.txtmvds_i = function() {
        var t = new eui.Label;
        return this.txtmvds = t,
        t.size = 20,
        t.text = "镜湖贝壳x1",
        t.textColor = 16773461,
        t.x = 291,
        t.y = 381,
        t
    },
    n._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pve_lanlu_enery_up_panel_icon_png",
        t.width = 26,
        t.x = 260,
        t.y = 378,
        t
    },
    n.btnBattle_i = function() {
        var t = new eui.Group;
        return this.btnBattle = t,
        t.x = 178,
        t.y = 428,
        t.elementsContent = [this._Image13_i(), this.txtBattle_i()],
        t
    },
    n._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "common_btn_bg_style_orange_1_png",
        t.width = 176,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtBattle_i = function() {
        var t = new eui.Label;
        return this.txtBattle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 16642157,
        t.text = "开始试炼",
        t.textColor = 9261339,
        t.x = 34,
        t.y = 11,
        t
    },
    n.grpPet_i = function() {
        var t = new eui.Group;
        return this.grpPet = t,
        t.x = 264,
        t.y = 370,
        t.elementsContent = [this.pet_i()],
        t
    },
    n.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_lanlu_enery_up_panel_pet_png",
        t.visible = !0,
        t.x = -215.99999999999994,
        t.y = -268.00000000000006,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveLanluLevelNaughtyGirlSkin.exml"] = window.pveLanLu.PveLanluLevelNaughtyGirlSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "up_bg", "btnClose", "top", "imgThree", "imgTwo", "imgOne", "flagBeat0", "flagBeat1", "flagBeat2", "tipsbg", "txt_asdavcs", "tips", "title"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.top_i(), this._Group1_i(), this.tips_i(), this.title_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "pve_lanlu_main_panel_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 31,
        t.visible = !1,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 45,
        t.source = "pve_lanlu_level_naughty_girl_up_bg_png",
        t.width = 1,
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_lanlu_main_panel_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 3,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 1.5,
        t.y = 98,
        t.elementsContent = [this.imgThree_i(), this.imgTwo_i(), this.imgOne_i(), this.flagBeat0_i(), this.flagBeat1_i(), this.flagBeat2_i()],
        t
    },
    n.imgThree_i = function() {
        var t = new eui.Image;
        return this.imgThree = t,
        t.height = 443,
        t.source = "pve_lanlu_level_naughty_girl_imgThree_png",
        t.width = 307,
        t.x = 698,
        t.y = 0,
        t
    },
    n.imgTwo_i = function() {
        var t = new eui.Image;
        return this.imgTwo = t,
        t.height = 443,
        t.source = "pve_lanlu_level_naughty_girl_imgTwo_png",
        t.width = 307,
        t.x = 349,
        t.y = 0,
        t
    },
    n.imgOne_i = function() {
        var t = new eui.Image;
        return this.imgOne = t,
        t.height = 443,
        t.source = "pve_lanlu_level_naughty_girl_imgOne_png",
        t.width = 307,
        t.x = 0,
        t.y = 0,
        t
    },
    n.flagBeat0_i = function() {
        var t = new eui.Image;
        return this.flagBeat0 = t,
        t.height = 413,
        t.source = "pve_lanlu_level_naughty_girl_beatmask_png",
        t.width = 277,
        t.x = 15,
        t.y = 15,
        t
    },
    n.flagBeat1_i = function() {
        var t = new eui.Image;
        return this.flagBeat1 = t,
        t.height = 413,
        t.source = "pve_lanlu_level_naughty_girl_beatmask_png",
        t.width = 277,
        t.x = 364,
        t.y = 15,
        t
    },
    n.flagBeat2_i = function() {
        var t = new eui.Image;
        return this.flagBeat2 = t,
        t.height = 413,
        t.source = "pve_lanlu_level_naughty_girl_beatmask_png",
        t.width = 277,
        t.x = 713,
        t.y = 15,
        t
    },
    n.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.left = 0,
        t.right = 0,
        t.y = 573,
        t.elementsContent = [this.tipsbg_i(), this.txt_asdavcs_i()],
        t
    },
    n.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 67,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_level_naughty_girl_tipsbg_png",
        t.y = 0,
        t
    },
    n.txt_asdavcs_i = function() {
        var t = new eui.Label;
        return this.txt_asdavcs = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 1,
        t.size = 20,
        t.text = "调皮的蓝蓝露总是喜欢捉弄她的伙伴们，与它们分别切磋，全部战胜即可获得蓝蓝露！",
        t.textColor = 9234687,
        t.y = 22,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.left = 112,
        t.source = "pve_lanlu_level_naughty_girl_title_png",
        t.visible = !1,
        t.width = 125,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveLanluStarGuardianSkin.exml"] = window.pveLanLu.PveLanluStarGuardianSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "up_bg", "btnClose", "title", "top", "tipsbg", "asdasds", "tips", "numbg", "txtHalfCount", "count", "level0", "level1", "level2", "talk0", "grpTalk0", "talk1", "grpTalk1", "talk2", "grpTalk2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.top_i(), this.tips_i(), this.count_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_main_panel_bg_png",
        t.y = 0,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 31,
        t.visible = !1,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i(), this.title_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 45,
        t.source = "pve_lanlu_main_panel_up_bg_png",
        t.visible = !0,
        t.width = 1,
        t.x = 63,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_lanlu_main_panel_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 3,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 36,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_lanlu_star_guardian_title_png",
        t.width = 125,
        t.x = 81.00000000000006,
        t.y = 5,
        t
    },
    n.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.left = 1,
        t.right = 1,
        t.y = 561,
        t.elementsContent = [this.tipsbg_i(), this.asdasds_i()],
        t
    },
    n.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 79,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_level_naughty_girl_tipsbg_png",
        t.y = 0,
        t
    },
    n.asdasds_i = function() {
        var t = new eui.Label;
        return this.asdasds = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = -9,
        t.size = 20,
        t.text = "海盗精灵联手进攻卡鲁克星，蓝露身为镜湖的守护者站了出来！每只海盗精灵会为同伴附加不同的能力，需要以合适的顺序击败它们！",
        t.textColor = 9234687,
        t.width = 600,
        t.y = 18,
        t
    },
    n.count_i = function() {
        var t = new eui.Group;
        return this.count = t,
        t.right = 0,
        t.y = 9,
        t.elementsContent = [this.numbg_i(), this.txtHalfCount_i()],
        t
    },
    n.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.height = 40,
        t.source = "pve_water_angle_panel_numbg_png",
        t.width = 286,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtHalfCount_i = function() {
        var t = new eui.Label;
        return this.txtHalfCount = t,
        t.size = 20,
        t.text = "今日剩余00回合可用",
        t.textColor = 9234687,
        t.x = 83,
        t.y = 10,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 5,
        t.y = 71,
        t.elementsContent = [this.level0_i(), this.level1_i(), this.level2_i(), this.grpTalk0_i(), this.grpTalk1_i(), this.grpTalk2_i()],
        t
    },
    n.level0_i = function() {
        var t = new pveLanLu.StarGuardianCard;
        return this.level0 = t,
        t.skinName = "pveLanLu.StarGuardianCardSkin",
        t.x = 0,
        t.y = 2,
        t
    },
    n.level1_i = function() {
        var t = new pveLanLu.StarGuardianCard;
        return this.level1 = t,
        t.skinName = "pveLanLu.StarGuardianCardSkin",
        t.x = 349,
        t.y = 2,
        t
    },
    n.level2_i = function() {
        var t = new pveLanLu.StarGuardianCard;
        return this.level2 = t,
        t.skinName = "pveLanLu.StarGuardianCardSkin",
        t.x = 700.57,
        t.y = 2,
        t
    },
    n.grpTalk0_i = function() {
        var t = new eui.Group;
        return this.grpTalk0 = t,
        t.x = 38,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.talk0_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_lanlu_star_guardian_talk_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.talk0_i = function() {
        var t = new eui.Label;
        return this.talk0 = t,
        t.size = 18,
        t.text = "我会用水流的力量为你创造护盾！",
        t.textColor = 16777215,
        t.width = 220,
        t.x = 25,
        t.y = 15,
        t
    },
    n.grpTalk1_i = function() {
        var t = new eui.Group;
        return this.grpTalk1 = t,
        t.x = 388,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.talk1_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pve_lanlu_star_guardian_talk_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.talk1_i = function() {
        var t = new eui.Label;
        return this.talk1 = t,
        t.size = 18,
        t.text = "我会用水流的力量为你创造护盾！",
        t.textColor = 16777215,
        t.width = 220,
        t.x = 25,
        t.y = 15,
        t
    },
    n.grpTalk2_i = function() {
        var t = new eui.Group;
        return this.grpTalk2 = t,
        t.x = 737,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.talk2_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pve_lanlu_star_guardian_talk_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n.talk2_i = function() {
        var t = new eui.Label;
        return this.talk2 = t,
        t.size = 18,
        t.text = "我会用水流的力量为你创造护盾！",
        t.textColor = 16777215,
        t.width = 220,
        t.x = 25,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/PveWaterAnglePanelSkin.exml"] = window.pveLanLu.PveWaterAnglePanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "up_bg", "titile", "btnClose", "top", "tipsbg", "asdsad", "tips", "numbg", "txtHalfRound", "level1", "level2", "level3", "flagMask0", "flagMask1", "flagMask2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.top_i(), this.tips_i(), this._Group1_i(), this._Group2_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "pve_lanlu_main_panel_bg_png",
        t.percentWidth = 100,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 31,
        t.visible = !1,
        t.y = 2,
        t.elementsContent = [this.up_bg_i(), this.titile_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 45,
        t.source = "pve_lanlu_level_naughty_girl_up_bg_png",
        t.width = 1,
        t.x = 63,
        t.y = 0,
        t
    },
    n.titile_i = function() {
        var t = new eui.Image;
        return this.titile = t,
        t.height = 36,
        t.source = "pve_water_angle_panel_titile_png",
        t.width = 126,
        t.x = 80,
        t.y = 7,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_lanlu_main_panel_btnClose_png",
        t.width = 32,
        t.x = 0,
        t.y = 3,
        t
    },
    n.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.left = 0,
        t.right = 0,
        t.y = 561,
        t.elementsContent = [this.tipsbg_i(), this.asdsad_i()],
        t
    },
    n.tipsbg_i = function() {
        var t = new eui.Image;
        return this.tipsbg = t,
        t.height = 79,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_level_naughty_girl_tipsbg_png",
        t.y = 0,
        t
    },
    n.asdsad_i = function() {
        var t = new eui.Label;
        return this.asdsad = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 1,
        t.size = 20,
        t.text = "伤痛让华特失去了抵抗力，一些虚空中的黑暗精灵乘机侵袭了过来！必须将它们驱散，才能治愈华特的伤势！",
        t.textColor = 9234687,
        t.width = 600,
        t.y = 18,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 9,
        t.elementsContent = [this.numbg_i(), this.txtHalfRound_i()],
        t
    },
    n.numbg_i = function() {
        var t = new eui.Image;
        return this.numbg = t,
        t.height = 40,
        t.source = "pve_water_angle_panel_numbg_png",
        t.width = 286,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtHalfRound_i = function() {
        var t = new eui.Label;
        return this.txtHalfRound = t,
        t.size = 20,
        t.text = "今日剩余00回合可用",
        t.textColor = 9234687,
        t.x = 83,
        t.y = 10,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 1.5,
        t.visible = !0,
        t.y = 98,
        t.elementsContent = [this.level1_i(), this.level2_i(), this.level3_i(), this.flagMask0_i(), this.flagMask1_i(), this.flagMask2_i()],
        t
    },
    n.level1_i = function() {
        var t = new eui.Image;
        return this.level1 = t,
        t.height = 443,
        t.source = "pve_water_angle_panel_level1_png",
        t.width = 307,
        t.x = 0,
        t.y = 0,
        t
    },
    n.level2_i = function() {
        var t = new eui.Image;
        return this.level2 = t,
        t.height = 443,
        t.source = "pve_water_angle_panel_level2_png",
        t.width = 307,
        t.x = 349,
        t.y = 0,
        t
    },
    n.level3_i = function() {
        var t = new eui.Image;
        return this.level3 = t,
        t.height = 443,
        t.source = "pve_water_angle_panel_level3_png",
        t.width = 307,
        t.x = 698,
        t.y = 0,
        t
    },
    n.flagMask0_i = function() {
        var t = new eui.Image;
        return this.flagMask0 = t,
        t.height = 413,
        t.source = "pve_lanlu_star_guardian_flagMask_png",
        t.visible = !0,
        t.width = 277,
        t.x = 13.31,
        t.y = 11.83,
        t
    },
    n.flagMask1_i = function() {
        var t = new eui.Image;
        return this.flagMask1 = t,
        t.height = 413,
        t.source = "pve_lanlu_star_guardian_flagMask_png",
        t.visible = !0,
        t.width = 277,
        t.x = 364,
        t.y = 11.83,
        t
    },
    n.flagMask2_i = function() {
        var t = new eui.Image;
        return this.flagMask2 = t,
        t.height = 413,
        t.source = "pve_lanlu_star_guardian_flagMask_png",
        t.visible = !0,
        t.width = 277,
        t.x = 713,
        t.y = 11.83,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/BattlePopSkin.exml"] = window.pveLanLu.BattlePopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["fightbg0", "txtDesc0", "titlebg0", "txtNick0", "imgtitle0", "btnBuy0", "btnFight0", "close", "petStyle0", "grpPet", "imgBtn_pet", "imgBtn_cure", "btns"],
        this.height = 370,
        this.width = 677,
        this.elementsContent = [this.fightbg0_i(), this.txtDesc0_i(), this.titlebg0_i(), this.txtNick0_i(), this.imgtitle0_i(), this.btnBuy0_i(), this.btnFight0_i(), this.close_i(), this.grpPet_i(), this.btns_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.fightbg0_i = function() {
        var t = new eui.Image;
        return this.fightbg0 = t,
        t.height = 348,
        t.source = "pve_lanlu_level_naughty_girl_fightbg_png",
        t.width = 600,
        t.x = 61,
        t.y = 22,
        t
    },
    n.txtDesc0_i = function() {
        var t = new eui.Label;
        return this.txtDesc0 = t,
        t.size = 18,
        t.text = "从小就跟蓝蓝露关系很好，经常相互捉弄，追逐打闹。",
        t.textColor = 15332094,
        t.width = 253,
        t.x = 372,
        t.y = 134,
        t
    },
    n.titlebg0_i = function() {
        var t = new eui.Image;
        return this.titlebg0 = t,
        t.height = 28,
        t.source = "pve_lanlu_level_naughty_girl_titlebg_png",
        t.width = 274,
        t.x = 360,
        t.y = 72,
        t
    },
    n.txtNick0_i = function() {
        var t = new eui.Label;
        return this.txtNick0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "华特",
        t.textColor = 16182900,
        t.x = 385,
        t.y = 74,
        t
    },
    n.imgtitle0_i = function() {
        var t = new eui.Image;
        return this.imgtitle0 = t,
        t.height = 38,
        t.source = "pve_lanlu_level_naughty_girl_imgtitle_png",
        t.width = 14,
        t.x = 361,
        t.y = 67,
        t
    },
    n.btnBuy0_i = function() {
        var t = new eui.Group;
        return this.btnBuy0 = t,
        t.x = 506,
        t.y = 297,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "快速通过",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    n.btnFight0_i = function() {
        var t = new eui.Group;
        return this.btnFight0 = t,
        t.x = 370,
        t.y = 297,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "开始挑战",
        t.textColor = 8341784,
        t.x = 18,
        t.y = 11,
        t
    },
    n.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 623,
        t.y = 0,
        t
    },
    n.grpPet_i = function() {
        var t = new eui.Group;
        return this.grpPet = t,
        t.x = 219,
        t.y = 322,
        t.elementsContent = [this.petStyle0_i()],
        t
    },
    n.petStyle0_i = function() {
        var t = new eui.Image;
        return this.petStyle0 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_lanlu_level_naughty_girl_petStyle_png",
        t.visible = !0,
        t.x = -127,
        t.y = -194,
        t
    },
    n.btns_i = function() {
        var t = new eui.Group;
        return this.btns = t,
        t.x = 0,
        t.y = 132,
        t.elementsContent = [this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    n.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "pve_lanlu_battle_pop_imgBtn_pet_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "pve_lanlu_battle_pop_imgBtn_cure_png",
        t.width = 60,
        t.x = 0,
        t.y = 68,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveLanluRoundPopSkin.exml"] = window.pveLanLu.PveLanluRoundPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["alert_BG_s", "btnCompose", "btnFix", "txtlkmnjklnmas"],
        this.height = 210,
        this.width = 442,
        this.elementsContent = [this.alert_BG_s_i(), this.btnCompose_i(), this.btnFix_i(), this.txtlkmnjklnmas_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.alert_BG_s_i = function() {
        var t = new eui.Image;
        return this.alert_BG_s = t,
        t.height = 210,
        t.source = "pve_lanlu_round_pop_alert_BG_s_png",
        t.width = 442,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnCompose_i = function() {
        var t = new eui.Group;
        return this.btnCompose = t,
        t.x = 79,
        t.y = 136,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 122,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "明天再来",
        t.textColor = 16777215,
        t.x = 21,
        t.y = 10,
        t
    },
    n.btnFix_i = function() {
        var t = new eui.Group;
        return this.btnFix = t,
        t.x = 242,
        t.y = 136,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "继续",
        t.textColor = 8341784,
        t.x = 40,
        t.y = 10,
        t
    },
    n.txtlkmnjklnmas_i = function() {
        var t = new eui.Label;
        return this.txtlkmnjklnmas = t,
        t.size = 18,
        t.text = "今日的挑战回合数已经用尽，是否购买额外回合数以继续战斗？",
        t.textColor = 3492213,
        t.width = 306,
        t.x = 69,
        t.y = 59,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveLanluMainPanelSkin.exml"] = window.pveLanLu.PveLanluMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgHero", "imgNaughtyGirl", "imgFlagComplete0", "imgAngle", "imgFlagComplete1", "imgStarGuardian", "imgFlagComplete2", "title", "btnBuy", "btnGet", "btnUp", "btnInfo", "up_bg", "btnClose", "top", "help"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group4_i(), this.btnInfo_i(), this.top_i(), this.help_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "pve_lanlu_main_panel_bg_png",
        t.y = 0,
        t
    },
    n._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -18,
        t.y = 0,
        t.elementsContent = [this.imgHero_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.title_i(), this.btnBuy_i(), this.btnGet_i(), this.btnUp_i()],
        t
    },
    n.imgHero_i = function() {
        var t = new eui.Image;
        return this.imgHero = t,
        t.height = 640,
        t.source = "pve_lanlu_main_panel_imgHero_png",
        t.visible = !0,
        t.width = 976,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 751,
        t.y = 34,
        t.elementsContent = [this.imgNaughtyGirl_i(), this.imgFlagComplete0_i()],
        t
    },
    n.imgNaughtyGirl_i = function() {
        var t = new eui.Image;
        return this.imgNaughtyGirl = t,
        t.height = 207,
        t.source = "pve_lanlu_main_panel_imgNaughtyGirl_png",
        t.width = 190,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgFlagComplete0_i = function() {
        var t = new eui.Image;
        return this.imgFlagComplete0 = t,
        t.height = 52,
        t.source = "pve_lanlu_main_panel_imgFlagComplete_png",
        t.width = 144,
        t.x = 27,
        t.y = 83,
        t
    },
    n._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 900,
        t.y = 212,
        t.elementsContent = [this.imgAngle_i(), this.imgFlagComplete1_i()],
        t
    },
    n.imgAngle_i = function() {
        var t = new eui.Image;
        return this.imgAngle = t,
        t.height = 216,
        t.source = "pve_lanlu_main_panel_imgAngle_png",
        t.width = 200,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgFlagComplete1_i = function() {
        var t = new eui.Image;
        return this.imgFlagComplete1 = t,
        t.height = 52,
        t.source = "pve_lanlu_main_panel_imgFlagComplete_png",
        t.width = 144,
        t.x = 27,
        t.y = 83,
        t
    },
    n._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 768,
        t.y = 382,
        t.elementsContent = [this.imgStarGuardian_i(), this.imgFlagComplete2_i()],
        t
    },
    n.imgStarGuardian_i = function() {
        var t = new eui.Image;
        return this.imgStarGuardian = t,
        t.height = 228,
        t.source = "pve_lanlu_main_panel_imgStarGuardian_png",
        t.width = 185,
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgFlagComplete2_i = function() {
        var t = new eui.Image;
        return this.imgFlagComplete2 = t,
        t.height = 52,
        t.source = "pve_lanlu_main_panel_imgFlagComplete_png",
        t.width = 144,
        t.x = 27,
        t.y = 83,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 183,
        t.source = "pve_lanlu_main_panel_title_png",
        t.width = 577,
        t.x = 85,
        t.y = 347,
        t
    },
    n.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.height = 74,
        t.source = "pve_lanlu_main_panel_btnBuy_png",
        t.visible = !0,
        t.width = 242,
        t.x = 267,
        t.y = 533,
        t
    },
    n.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 74,
        t.source = "pve_lanlu_main_panel_btnGet_png",
        t.visible = !0,
        t.width = 242,
        t.x = 267,
        t.y = 533,
        t
    },
    n.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.height = 74,
        t.source = "pve_lanlu_main_panel_btnUp_png",
        t.visible = !1,
        t.width = 242,
        t.x = 267,
        t.y = 533,
        t
    },
    n.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.height = 74,
        t.left = 21,
        t.source = "pve_lanlu_main_panel_btnInfo_png",
        t.visible = !0,
        t.width = 74,
        t.y = 532,
        t
    },
    n.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.left = 0,
        t.visible = !1,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.btnClose_i()],
        t
    },
    n.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.height = 50,
        t.source = "pve_lanlu_main_panel_up_bg_png",
        t.visible = !0,
        t.width = 145,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 38,
        t.source = "pve_lanlu_main_panel_btnClose_png",
        t.width = 32,
        t.x = 31,
        t.y = 5,
        t
    },
    n.help_i = function() {
        var t = new eui.Image;
        return this.help = t,
        t.height = 38,
        t.horizontalCenter = 12,
        t.source = "pve_lanlu_main_panel_help_png",
        t.visible = !0,
        t.width = 34,
        t.y = 481,
        t
    },
    e
} (eui.Skin);