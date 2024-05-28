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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleTestMachineRankSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = i,
            ImageButtonUtil.add(this.close, this.hide, this)
        },
        e.prototype.setData = function(e) {
            var i = this;
            t.prototype.setData.call(this, e),
            SocketConnection.sendByQueue(41451, [e.type],
            function(t) {
                for (var e = t.data,
                n = e.readUnsignedInt(), a = [], r = 0; n > r; r++) {
                    var s = e.readUnsignedInt(),
                    o = e.readUnsignedInt();
                    a.push({
                        rank: r + 1,
                        id: s,
                        damage: o
                    })
                }
                i._list.dataProvider = new eui.ArrayCollection(a)
            })
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.BattleTestMachineRank = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineRank");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleTestMachineRankItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.updateView())
        },
        e.prototype.updateView = function() {
            this.rank.text = "" + this.info.rank,
            this.score.text = "" + this.info.damage;
            var t = this.info.id;
            this.petName.text = PetXMLInfo.getName(t)
        },
        e
    } (BaseItemRenderer);
    t.BattleTestMachineRankItem = i,
    __reflect(i.prototype, "battleTestMachine.BattleTestMachineRankItem")
} (battleTestMachine || (battleTestMachine = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
battleTestMachine; !
function(t) {
    var e = function() {
        function t(t) {
            t && (this.petId = t[0], this.hp = t[1], this.atk = t[2], this.def = t[3], this.satk = t[4], this.sdef = t[5], this.speed = t[6], this.skinId = t[7])
        }
        return t.prototype.getAttrList = function() {
            return [this.hp, this.atk, this.def, this.satk, this.sdef, this.speed]
        },
        t.prototype.setAttr = function(t) {
            this.hp = t[0],
            this.atk = t[1],
            this.def = t[2],
            this.satk = t[3],
            this.sdef = t[4],
            this.speed = t[5]
        },
        t
    } ();
    t.BattleMachinePetInfo = e,
    __reflect(e.prototype, "battleTestMachine.BattleMachinePetInfo")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._curPanel = new t.BattleTestMachineMainPanel,
            this.addChild(this._curPanel),
            EventManager.addEventListener(i.SHOW_PANEL, this.showPanel, this)
        },
        i.prototype.reShow = function() {
            this._curPanel && this._curPanel.reShow()
        },
        i.prototype.showPanel = function(e) {
            this.desCurPanel();
            var i = e.data.type;
            switch (i) {
            case 1:
                this._curPanel = new t.BattleTestMachineMainPanel;
                break;
            case 2:
                this._curPanel = new t.BattleTestMachineTrain;
                break;
            case 3:
                this._curPanel = new t.BattleTestMachineFight(e.data.args);
                break;
            case 4:
                this._curPanel = new t.BattleTestMachineCombatTest(e.data.args);
                break;
            case 5:
                this._curPanel = new t.BattleTestMachineTrainSelectPanel(e.data.args);
                break;
            case 6:
                this._curPanel = new t.BattleTestMachineTrainNewFightPanel(e.data.args)
            }
            this.addChild(this._curPanel)
        },
        i.prototype.desCurPanel = function() {
            this._curPanel && (this._curPanel.destroy(), this._curPanel.parent && this._curPanel.parent.removeChild(this._curPanel))
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(i.SHOW_PANEL, this.showPanel, this),
            this.desCurPanel(),
            e.prototype.destroy.call(this)
        },
        i.SHOW_PANEL = "battle_test_show_panel",
        i
    } (BaseModule);
    t.BattleTestMachine = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachine")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.setData = function(e) {
            var i = this;
            t.prototype.setData.call(this, e);
            var n, a = e.petInfo.petId;
            n = 1 == e.type ? 1 : 1 == e.curType ? 2 : 3,
            SocketConnection.sendByQueue(41407, [n, a],
            function(t) {
                var n = t.data;
                n.position = 0;
                for (var a = [], r = 0; 6 > r; r++) a.push(n.readUnsignedInt());
                i._maxAttr = [a[0] + 500, a[1] + 300, a[2] + 300, a[3] + 200, a[4] + 200, a[5] + 200],
                i._minAttr = a,
                1 == e.curType ? (i.skinName = BattleTestMachineMyAttrPopSkin, i.initMyAttr()) : (i.skinName = BattleTestMachineBossAttrPopSkin, i.initBossAttr())
            }),
            this.addEventListener(egret.Event.FOCUS_OUT, this.onFocusOut, this)
        },
        e.prototype.onFocusOut = function() {
            for (var t = ["体力", "攻击", "防御", "特攻", "特防", "速度"], e = 0; 6 > e; e++) this["txt_" + e].text && ~~this["txt_" + e].text > this._maxAttr[e] && (this["txt_" + e].text = this._maxAttr[e] + "", BubblerManager.getInstance().showText(t[e] + "不可以高于" + this._maxAttr[e])),
            this["txt_" + e].text && ~~this["txt_" + e].text < this._minAttr[e] && (this["txt_" + e].text = this._minAttr[e] + "", BubblerManager.getInstance().showText(t[e] + "不可以低于" + this._minAttr[e]))
        },
        e.prototype.initMyAttr = function() {
            for (var t = this,
            e = this._data.petInfo.getAttrList(), i = 0; 6 > i; i++) this["txt_" + i].prompt = e[i] + "";
            ImageButtonUtil.add(this.btnCancel,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                for (var i = [], n = 0; 6 > n; n++)~~t["txt_" + n].text ? i.push(~~t["txt_" + n].text) : i.push(e[n]);
                t._data.petInfo.setAttr(i),
                t._data.callBack.apply(t._data.thisObj, [t._data.petInfo]),
                t.hide()
            },
            this)
        },
        e.prototype.initBossAttr = function() {
            for (var t = this,
            e = this._data.petInfo.getAttrList(), i = 0; 6 > i; i++) this["txt_" + i].prompt = e[i] + "";
            this.cb_0.selected = this._data.actMode.isMove,
            this.cb_1.selected = this._data.actMode.isInvincible,
            ImageButtonUtil.add(this.btnCancel,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                for (var i = [], n = 0; 6 > n; n++)~~t["txt_" + n].text ? i.push(~~t["txt_" + n].text) : i.push(e[n]);
                t._data.petInfo.setAttr(i);
                var a = {
                    isMove: ~~t.cb_0.selected,
                    isInvincible: ~~t.cb_1.selected
                };
                t._data.callBack.apply(t._data.thisObj, [t._data.petInfo, a]),
                t.hide()
            },
            this)
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.FOCUS_OUT, this.onFocusOut, this),
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.BattleTestMachineAttrPop = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineAttrPop")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.pveValue = [120221, 120222],
            i.pvpValue = [120241, 120242],
            i._type = t,
            i.skinName = BattleTestMachineCombatTestSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initBtnClose(1 == this._type ? "battle_test_machine_combat_test_title_pve_png": "battle_test_machine_combat_test_title_pvp_png", this,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 1
                })
            }),
            this.initBtnHelpById(1 == this._type ? 63 : 64),
            this.adaptBgByScale(this.bg),
            this.pet.source = 1 == this._type ? "battle_test_machine_combat_test_pet_458_png": "battle_test_machine_combat_test_pet_485_png",
            this.radioGroup = this.cm_0.group,
            this.addEvent(),
            this.updateData()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnDetail,
            function() {
                PopViewManager.getInstance().openView(new t.BattleTestMachineDetailPop, null, {
                    type: e._type
                })
            },
            this),
            ImageButtonUtil.add(this.rank,
            function() {
                PopViewManager.getInstance().openView(new t.BattleTestMachineRank, null, {
                    type: e._type
                })
            },
            this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                if (~~e.radioGroup.selectedValue < 1) BubblerManager.getInstance().showText("请先选择测试回合数！");
                else {
                    var t = ~~e.radioGroup.selectedValue;
                    SocketConnection.sendByQueue(41398, [90 + (t - 1) + 4 * (e._type - 1)])
                }
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this)
        },
        i.prototype.updateData = function() {
            var t = this;
            SocketConnection.sendByQueue(41399, [this._type],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n = 0; 4 > n; n++) {
                    var a = i.readUnsignedInt();
                    a ? t["txt_" + n].text = a + "": t["txt_" + n].text = "暂无记录"
                }
            });
            var e = 1 == this._type ? this.pveValue: this.pvpValue;
            KTool.getMultiValue(e,
            function(e) {
                var i = [];
                i.push(e[0] & Math.pow(2, 16) - 1),
                i.push(e[0] >> 16 & Math.pow(2, 16) - 1),
                i.push(e[1] & Math.pow(2, 16) - 1),
                i.push(e[1] >> 16 & Math.pow(2, 16) - 1);
                for (var n = 0; n < i.length; n++) {
                    var a = i[n];
                    a ? t["name" + (n + 1)].text = PetXMLInfo.getName(a) : t["name" + (n + 1)].text = "暂无记录"
                }
            })
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.updateData, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BattleTestMachineCombatTest = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineCombatTest")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleTestMachineDetailPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.close, this.hide, this)
        },
        e.prototype.setData = function(e) {
            var i = this;
            t.prototype.setData.call(this, e),
            SocketConnection.sendByQueue(41399, [e.type],
            function(t) {
                var e = t.data;
                e.position = 20;
                for (var n = 0; 6 > n; n++) i["txt_" + n].text = e.readUnsignedInt() + "",
                ~~i["txt_" + n].text || (i["txt_" + n].text = "暂无记录")
            })
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.BattleTestMachineDetailPop = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineDetailPop")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i._petSkinList = [],
            i._curPos = 0,
            i._curActMode = {
                isMove: 1,
                isInvincible: 0
            },
            i._curTab = 1,
            i._myPetInfo = [],
            i._enemyPetInfo = [],
            i._inited = !1,
            i._type = t,
            i.skinName = BattleTestMachineFightSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.gr_left),
            this.adaptRightContent(this.gr_right),
            this.rbg_tab = this.rb0.group,
            this.rbg_tab.selectedValue = 1,
            this.addEvent(),
            SocketConnection.sendByQueue(41406, [],
            function() {
                t.initView(),
                t.showPet(null, !0)
            })
        },
        i.prototype.reShow = function() {
            this.updatePetList()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 2
                })
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(14)
            },
            this),
            ImageButtonUtil.add(this.btnType,
            function() {
                var t = {
                    callBack: e.onChangeAttributeIdHanlder,
                    caller: e,
                    selectId: 0,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: e.btnType.localToGlobal(),
                        dir: "left-top",
                        rx: 50,
                        ry: 87
                    }
                };
                ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() { (1 != e._curTab || 1 != e._type) && (e._searchText = e.txtSearch.text.trim(), e.updatePetList())
            },
            this),
            ImageButtonUtil.add(this.btnCompose,
            function() {
                if (!e._curPetInfo) return void BubblerManager.getInstance().showText("请先选择精灵");
                var i = {
                    type: e._type,
                    curType: e._curTab,
                    petInfo: e._curPetInfo,
                    actMode: e._curActMode,
                    callBack: e.onSetAttr,
                    thisObj: e
                };
                PopViewManager.getInstance().openView(new t.BattleTestMachineAttrPop, null, i)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnLock,
            function() {
                if (e._curPetInfo && e._curPos) {
                    var t;
                    t = 1 == e._type ? 1 : 1 == e._curTab ? 2 : 3,
                    SocketConnection.sendByQueue(41401, [t, e._curPos, e._curPetInfo.petId].concat(e._curPetInfo.getAttrList(), [e._curPetInfo.skinId, e._curActMode.isMove, e._curActMode.isInvincible]),
                    function() {
                        e.updateData()
                    })
                }
            },
            this),
            ImageButtonUtil.add(this.btnPve,
            function() {
                for (var t = 0,
                i = 0; i < e._myPetInfo.length; i++) e._myPetInfo[i] && t++;
                for (var n = 0,
                i = 0; i < e._enemyPetInfo.length; i++) e._enemyPetInfo[i] && n++;
                return 1 == e._type || t ? n ? void SocketConnection.sendByQueue(41403, [98 + 2 * (e._type - 1)]) : void Alarm.show("请选择敌方精灵") : void Alarm.show("请选择我方精灵")
            },
            this),
            ImageButtonUtil.add(this.btnPvp,
            function() {
                for (var t = 0,
                i = 0; i < e._myPetInfo.length; i++) e._myPetInfo[i] && t++;
                for (var n = 0,
                i = 0; i < e._enemyPetInfo.length; i++) e._enemyPetInfo[i] && n++;
                return 1 == e._type || t ? n ? void SocketConnection.sendByQueue(41403, [99 + 2 * (e._type - 1)]) : void Alarm.show("请选择敌方精灵") : void Alarm.show("请选择我方精灵")
            },
            this),
            this.list_0.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChoosePet, this),
            this.list_1.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChooseMyPet, this),
            this.list_skin.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChangeSkin, this),
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.initView = function() {
            var e = this;
            this.list_0.itemRenderer = t.BattleTestMachinePetItem,
            this.list_1.itemRenderer = t.BattleTestMachinePetItem,
            this._arr_0 = new eui.ArrayCollection,
            this._arr_1 = new eui.ArrayCollection,
            this.list_0.dataProvider = this._arr_0,
            this.list_1.dataProvider = this._arr_1,
            this.list_skin.itemRenderer = t.BattleTestMachineSkinItem,
            PetStorage2015InfoManager.getTotalInfo(function() {
                var t = PetManager.getBagMap(!0),
                i = PetStorage2015InfoManager.allInfo,
                n = t.map(function(t) {
                    return t.id
                }).concat(i.map(function(t) {
                    return t.id
                }));
                e._petList = Array.from(new Set(n)),
                e.updateData()
            })
        },
        i.prototype.updateData = function() {
            var e = this;
            if (1 == this._type) {
                for (var i = [], n = 0; 6 > n; n++) for (var a = 0; 8 > a; a++) i.push(120311 + 10 * n + a);
                i = i.concat([120371, 120372]),
                KTool.getMultiValue(i,
                function(i) {
                    e._enemyPetInfo = [];
                    for (var n = 0; 6 > n; n++) if (i[8 * n]) {
                        var a = i.slice(8 * n, 8 * (n + 1)),
                        r = new t.BattleMachinePetInfo(a);
                        e._enemyPetInfo.push(r)
                    } else e._enemyPetInfo.push(null);
                    e._inited && (e._curActMode.isMove = i[i.length - 2], e._curActMode.isInvincible = i[i.length - 1]),
                    e._inited = !0,
                    e.updateView()
                })
            } else {
                for (var i = [], n = 0; 6 > n; n++) for (var a = 0; 8 > a; a++) i.push(120511 + 10 * n + a);
                for (var n = 0; 6 > n; n++) for (var a = 0; 8 > a; a++) i.push(120611 + 10 * n + a);
                i = i.concat([120671, 120672]),
                KTool.getMultiValue(i,
                function(i) {
                    e._myPetInfo = [],
                    e._enemyPetInfo = [];
                    for (var n = 0; 6 > n; n++) if (i[8 * n]) {
                        var a = i.slice(8 * n, 8 * (n + 1)),
                        r = new t.BattleMachinePetInfo(a);
                        e._myPetInfo.push(r)
                    } else e._myPetInfo.push(null);
                    for (var n = 6; 12 > n; n++) if (i[8 * n]) {
                        var a = i.slice(8 * n, 8 * (n + 1)),
                        r = new t.BattleMachinePetInfo(a);
                        e._enemyPetInfo.push(r)
                    } else e._enemyPetInfo.push(null);
                    e._inited && (e._curActMode.isMove = i[i.length - 2], e._curActMode.isInvincible = i[i.length - 1]),
                    e._inited = !0,
                    e.updateView()
                })
            }
        },
        i.prototype.updateView = function() {
            this.updatePetList(),
            this.updateChosenPet()
        },
        i.prototype.updatePetList = function() {
            var t = this;
            if (1 == this._curTab && 1 == this._type) {
                for (var e = PetManager.getBagMap(), i = [], n = 0; n < e.length; n++) {
                    var a = PetManager.getPetInfo(e[n].catchTime);
                    i.push(a)
                }
                this._arr_0.replaceAll(i.slice())
            } else {
                var r = this._petList;
                if (this._attriType && (r = r.filter(function(e) {
                    return~~PetXMLInfo.getType(e) == t._attriType
                })), this._searchText) {
                    var s = +this._searchText,
                    o = s > 0;
                    r = r.filter(function(e) {
                        return o ? e == s: SearchUtil.isMatch(t._searchText, PetXMLInfo.getName(e)) ? !0 : !1
                    })
                }
                this._arr_0.replaceAll(r.slice())
            }
            this.scr_0.stopAnimation(),
            this.scr_0.viewport.scrollV = 0,
            this.list_0.selectedIndex = -1
        },
        i.prototype.updateChosenPet = function() {
            if (1 == this._curTab && 1 == this._type) this.grp_petBag.visible = !0,
            this.scr_1.visible = !1,
            this.btnType.visible = this.grp_search.visible = !1,
            this._curPos = 0;
            else if (this.grp_petBag.visible = !1, this.scr_1.visible = !0, this.btnType.visible = this.grp_search.visible = !0, 1 == this._curTab) {
                for (; this._myPetInfo.length < 6;) this._myPetInfo.push(null);
                this._arr_1.replaceAll(this._myPetInfo.slice()),
                this._curPos = 0;
                for (var t = 0; 6 > t; t++) if (!this._myPetInfo[t]) {
                    this._curPos = t + 1;
                    break
                }
            } else {
                for (; this._enemyPetInfo.length < 6;) this._enemyPetInfo.push(null);
                this._arr_1.replaceAll(this._enemyPetInfo.slice()),
                this._curPos = 0;
                for (var t = 0; 6 > t; t++) if (!this._enemyPetInfo[t]) {
                    this._curPos = t + 1;
                    break
                }
            }
            this.list_1.selectedIndex = this._curPos - 1
        },
        i.prototype.onChangeAttributeIdHanlder = function(t, e) { (1 != this._curTab || 1 != this._type) && (this._attriType = e, this.updatePetList())
        },
        i.prototype.onChoosePet = function(e) {
            var i = this,
            n = e.item;
            if ("number" == typeof n) {
                var a;
                a = 1 == this._type ? 1 : 1 == this._curTab ? 2 : 3,
                SocketConnection.sendByQueue(41407, [a, n],
                function(e) {
                    var a = e.data;
                    a.position = 0;
                    for (var r = [], s = 0; 6 > s; s++) r.push(a.readUnsignedInt());
                    i._curPetInfo = new t.BattleMachinePetInfo([n].concat(r, [PetSkinInfo.getPetDefaultSkin(n).id])),
                    i.showPet(i._curPetInfo, !1),
                    i._curPos && i.list_1.getChildAt(i._curPos - 1).setHead(i._curPetInfo.petId, i._curPetInfo.skinId)
                })
            } else {
                if (n.skinId) var r = PetSkinXMLInfo.getSkinInfo(n.skinId);
                else var r = PetSkinInfo.getPetDefaultSkin(n.id);
                this.showPet(r, !0)
            }
        },
        i.prototype.onChooseMyPet = function(e) {
            this._curPos && this.list_1.getChildAt(this._curPos - 1).initView(),
            this._curPos = e.itemIndex + 1;
            var i = e.item;
            i ? this._curPetInfo = new t.BattleMachinePetInfo([i.petId].concat(i.getAttrList(), [i.skinId])) : this._curPetInfo = null,
            this.showPet(i, !1)
        },
        i.prototype.onChangeSkin = function(t) {
            var e = t.item;
            this._curPetInfo.skinId = e.id,
            this.showPet(e, !0),
            this._curPos && this.list_1.getChildAt(this._curPos - 1).setHead(this._curPetInfo.petId, this._curPetInfo.skinId)
        },
        i.prototype.showPet = function(t, e) {
            var i = this;
            if (this.pet.removeChildren(), CjsUtil.removeAllAni(), CjsUtil.setContainer(this.pet), CjsUtil.disposePetCls(this._curShowId), !t) return void(this.btnCompose.visible = this.grp_skin.visible = this.petBase.visible = this.btnLock.visible = !1);
            if (t instanceof PetSkinInfo) {
                this._curShowId = t.skinPetId;
                var n = t.monId
            } else {
                var a = PetSkinXMLInfo.getSkinPetId(t.skinId, t.petId);
                this._curShowId = a;
                var n = t.petId
            }
            if (this.petBase.visible = !0, this.btnLock.visible = this.btnCompose.visible = this.grp_skin.visible = 1 != this._type || 1 != this._curTab, CjsUtil.init(), CjsUtil.start(), CjsUtil.setContainer(this.pet), CjsUtil.GetShowPetMovieClip(this._curShowId).then(function(t) {
                CjsUtil.removeAllAni(),
                CjsUtil.showAnimate(t);
                var e = PetXMLInfo.getPetOffset(n);
                i.pet && (t.regX = e.x, t.regY = e.y)
            }), !e) {
                var r = PetSkinInfo.getPetDefaultSkin(n),
                s = PetSkinXMLInfo.getSkinInfosByPetId(n);
                this._petSkinList = [r].concat(s),
                this.list_skin.dataProvider = new eui.ArrayCollection(this._petSkinList),
                this.list_skin.selectedIndex = -1
            }
        },
        i.prototype.onSetAttr = function(t, e) {
            this._curPetInfo = t,
            e && (this._curActMode = e)
        },
        i.prototype.onChangeTab = function() {
            this._curTab = ~~this.rbg_tab.selectedValue,
            this.updateView(),
            this.showPet(null, !0)
        },
        i.prototype.onFightOver = function() {
            var t = this;
            this._petSkinList = [],
            this.list_skin.dataProvider = null,
            this.rbg_tab.selectedValue = this._curTab = 1,
            this.showPet(null, !0),
            SocketConnection.sendByQueue(41406, [],
            function() {
                t.updateData()
            })
        },
        i.prototype.destroy = function() {
            this.list_0.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChoosePet, this),
            this.list_1.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChooseMyPet, this),
            this.list_skin.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChangeSkin, this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.removeAll(this),
            CjsUtil.removeAllAni(),
            CjsUtil.disposePetCls(this._curShowId),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BattleTestMachineFight = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineFight")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = BattleTestMachineSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            StatLogger.log("20210917版本系统功能", "战斗力测试机", "进入战斗力测试机面板"),
            this.initBtnClose("battle_test_machine_title_png", this,
            function() {
                ModuleManager.hideModule("battleTestMachine")
            },
            this),
            this.initBtnHelpById(61),
            GameInfo.isChecking && (this.img_train.visible = !1),
            ImageButtonUtil.add(this.img_train,
            function() {
                StatLogger.log("20210917版本系统功能", "战斗力测试机", "进入战斗力测试机面板"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 2
                })
            },
            this),
            ImageButtonUtil.add(this.img_pve,
            function() {
                StatLogger.log("20210917版本系统功能", "战斗力测试机", "进入PVE战力测试关卡"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 4,
                    args: 1
                })
            },
            this),
            ImageButtonUtil.add(this.img_pvp,
            function() {
                StatLogger.log("20210917版本系统功能", "战斗力测试机", "进入PVP战力测试关卡"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 4,
                    args: 2
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BattleTestMachineMainPanel = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineMainPanel")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleTestMachinePetItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data ? "number" == typeof this.data ? this._showId = this._petId = this.data: this.data instanceof PetInfo ? (this._petId = this.data.id, this.data.skinId ? this._showId = PetSkinXMLInfo.getSkinInfo(this.data.skinId).skinPetId: this._showId = PetSkinInfo.getPetDefaultSkin(this.data.id).skinPetId) : (this._petId = this.data.petId, this._showId = PetSkinXMLInfo.getSkinPetId(this.data.skinId, this.data.petId)) : (this._petId = null, this._showId = null),
            this.initView()
        },
        e.prototype.initView = function() {
            this._petId && this._showId ? (this.nameBg.visible = this.txt_name.visible = !0, this.txt_name.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this._petId), 6), this.head.source = ClientConfig.getPetHeadPath(this._showId)) : (this.nameBg.visible = this.txt_name.visible = !1, this.head.source = "")
        },
        e.prototype.setHead = function(t, e) {
            this.nameBg.visible = this.txt_name.visible = !0,
            this.txt_name.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(t), 6);
            var i = PetSkinXMLInfo.getSkinPetId(e, t);
            this.head.source = ClientConfig.getPetHeadPath(i)
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.BattleTestMachinePetItem = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachinePetItem")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleMachineTestInfoPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._petId = e.petId;
            for (var i = PetXMLInfo.getAllEvById(this._petId), n = 1; 6 > n; n++) this["txt_" + n].text = i[n] + ""
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.BattleMachineTestInfoPop = e,
    __reflect(e.prototype, "battleTestMachine.BattleMachineTestInfoPop")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BattleTestMachineSkinItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._skinInfo = this.data,
            this.initView()
        },
        e.prototype.initView = function() {
            this.head.source = ClientConfig.getPetHeadPath(this._skinInfo.skinPetId)
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.BattleTestMachineSkinItem = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineSkinItem")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = BattleTestMachineTrainSkin,
            StatLogger.log("20230602版本系统功能", "战斗力测试机训练营", "进入战斗力测试机训练营界面"),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            e.prototype.initBtnClose.call(this, "battle_test_machine_train_title_png", this,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 1
                })
            },
            this),
            e.prototype.initBtnHelpById.call(this, 156, this),
            ImageButtonUtil.add(this.train_img_pve,
            function() {
                StatLogger.log("20230602版本系统功能", "战斗力测试机训练营", "进入PVE训练营界面"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 5,
                    args: 1
                })
            },
            this),
            ImageButtonUtil.add(this.train_img_pvp,
            function() {
                StatLogger.log("20230602版本系统功能", "战斗力测试机训练营", "进入PVP训练营界面"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 5,
                    args: 2
                })
            },
            this),
            ImageButtonUtil.add(this.train_img_custom,
            function() {
                StatLogger.log("20210917版本系统功能", "战斗力测试机", "进入自定义训练关卡"),
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 3,
                    args: 2
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BattleTestMachineTrain = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrain")
} (battleTestMachine || (battleTestMachine = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function s(t) {
            try {
                h(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function o(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, o)
        }
        h((n = n.apply(t, e || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (a = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1],
                    s = i;
                    break
                }
                if (s && h.label < s[2]) {
                    h.label = s[2],
                    h.ops.push(i);
                    break
                }
                s[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, s, o, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.fightPetData = e,
            i.skinName = "BattleTestMachineTrainFightInfoPopSkin",
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.closeBtn, this.hide, this),
            this.fightPetData.enemyCigIds ? this.initEnemyPet() : this.fightPetData.petInfo ? this.initMyPet() : this.initTrialPet()
        },
        e.prototype.initMyPet = function() {
            var t = this,
            e = this.fightPetData.petInfo;
            this.myPetGrp.visible = !0,
            this.enePetGrp.visible = !1;
            var i = new SmallItemIcon;
            i.setData({
                type: "pet",
                id: e.id
            }),
            this.petHead1.addChild(i),
            ImageButtonUtil.add(this.effectImg,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], e, "", AppDoStyle.NULL)
            },
            this),
            this.effectImg.width = PetManager.checkShowEffectIcon(e.id) ? 26 : 0,
            PetManager.checkPetInfoEffect(e,
            function(i) {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t;
                    return __generator(this,
                    function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, KTool.checkHasAdvanced(e)];
                        case 1:
                            return t = n.sent(),
                            this.effectImg.width = i ? t ? 28 : 26 : 0,
                            this.effectImg.source = t ? PetAdvanceXMLInfo.getAdvSignSource(e.id) : "battle_test_machine_train_fight_info_effectImg_png",
                            [2]
                        }
                    })
                })
            },
            this);
            var n, a = new SmallItemIcon(1.1);
            n = CountermarkController.getInfoTemp(e.abilityMark),
            n && (a.setData(n), this.petCounter1.addChild(a));
            var r = new SmallItemIcon(1.1);
            n = CountermarkController.getInfoTemp(e.skillMark),
            n && (r.setData(n), this.petCounter1.addChild(r));
            var s = new SmallItemIcon(1.1);
            n = CountermarkController.getInfoTemp(e.commonMark),
            n && (s.setData(n), this.petCounter1.addChild(s)),
            this.txtLevel.text = "" + e.level,
            this.txtNature.text = "" + e.dv,
            this.txtEffect.text = NatureXMLInfo.getName(e.nature);
            var o = PetManager.getPetEffect(e);
            if (o) {
                var h = PetEffectXMLInfo.getEffect(o.effectID, o.args),
                l = PetEffectXMLInfo.getStarLevel(o.effectID, o.args);
                this.txtSEffect.text = h + l + "星"
            } else this.txtSEffect.text = "无";
            this.nameText.text = PetXMLInfo.getName(e.id),
            this.txtStudy.text = PetXMLInfo.getTypeCN(e.id),
            SocketConnection.sendByQueue(CommandID.JAMES_ARMOR_QUERY_ABIBLITY, [e.catchTime],
            function(e) {
                var i = e.data;
                t.txtHP.text = i.readUnsignedInt() + "/20"
            }),
            this.txtAttack1.text = e.base_attack_total + "",
            this.txtSpeed1.text = e.base_speed_total + "",
            this.txtDefence1.text = e.base_defence_total + "",
            this.txtSAttack1.text = e.base_s_a_total + "",
            this.txtHealth1.text = e.base_hp_total + "",
            this.txtSDefence1.text = e.base_s_d_total + "",
            this.txtAttack2.text = e.ev_attack + "",
            this.txtSpeed2.text = e.ev_sp + "",
            this.txtDefence2.text = e.ev_defence + "",
            this.txtSAttack2.text = e.ev_sa + "",
            this.txtHealth2.text = e.ev_hp + "",
            this.txtSDefence2.text = e.ev_sd + "";
            for (var _ = function(t) {
                var i = e ? e.skillArray[t - 1] : null;
                if (i) {
                    var n = void 0;
                    if (4 == SkillXMLInfo.getCategory(i.id)) n = ClientConfig.getpettypeticon("prop");
                    else {
                        var a = SkillXMLInfo.getTypeID(i.id);
                        n = ClientConfig.getpettypeticon(a + "")
                    }
                    c["imgSkillIcon" + t].source = n,
                    c["txtSkillPP" + t].text = "PP：" + i.maxPP + "/" + i.maxPP,
                    c["txtSkillPower" + t].text = "威力：" + i.damage,
                    c["txtSkillName" + t].text = i.name,
                    ImageButtonUtil.add(c["skillBtn_" + t],
                    function() {
                        tipsPop.TipsPop.openSkillPop({
                            id: i.id,
                            petInfo: e
                        })
                    },
                    c, !1, !1)
                } else c["imgSkillIcon" + t].source = "",
                c["txtSkillPP" + t].text = "",
                c["txtSkillPower" + t].text = "",
                c["txtSkillName" + t].text = ""
            },
            c = this, u = 1; 4 >= u; u++) _(u);
            e.hideSKill ? (this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_1_png", this.txtSkill5.text = StringUtil.parseStrLimitLen(e.hideSKill.name, 6)) : (this.txtSkill5.text = "", SkillXMLInfo.hideMovesMap[e.id] ? this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_3_png": this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_2_png"),
            e && e.hideSKill && ImageButtonUtil.add(this.skillBtn_5,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: e.hideSKill.id
                })
            },
            this, !1, !1)
        },
        e.prototype.getPetEffect = function(t, e) {
            return t ? EffectIconControl.getConfigById(t) : EffectIconControl.getAllEffctByPetId(e) ? EffectIconControl.getAllEffctByPetId(e)[0] : null
        },
        e.prototype.initTrialPet = function() {
            this.myPetGrp.visible = !0,
            this.enePetGrp.visible = !1;
            var t = config.FightTestMonsterConfig.getItem(this.fightPetData.cigIdx),
            e = new SmallItemIcon;
            e.setData({
                type: "pet",
                id: t.monsterId
            }),
            this.petHead1.addChild(e);
            var i = (parseFloat(t.monsterNewse), this.getPetEffect(t.monsterEffect_id, t.monsterId));
            i ? (this.effectImg.visible = !0, ImageButtonUtil.add(this.effectImg,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], [i], "", AppDoStyle.NULL)
            },
            this), this.effectImg.width = 26, this.effectImg.source = EffectIconControl.checkIncludeAdvEffect(i.effectId) ? PetAdvanceXMLInfo.getAdvSignSource(t.monsterId) : "battle_test_machine_train_fight_info_effectImg_png") : this.effectImg.visible = !1,
            this.txtLevel.text = "" + t.monsterLv,
            this.txtNature.text = "" + t.monsterTalent,
            this.txtEffect.text = NatureXMLInfo.getName(t.monsterNature),
            t.monsterCharacter ? this.txtSEffect.text = PetEffectXMLInfo.getDescByIdx(t.monsterCharacter) + "5星": this.txtSEffect.text = "无",
            this.nameText.text = PetXMLInfo.getName(t.monsterId),
            this.txtStudy.text = PetXMLInfo.getTypeCN(t.monsterId),
            this.txtHP.text = t.monsterStrength + "/20";
            var n = t.extraData.split("_").map(parseFloat),
            a = t.mintmarkData.split("_").map(parseFloat),
            r = t.baseData.split("_").map(parseFloat);
            this.txtAttack1.text = "" + (r[0] + a[0] + n[0]),
            this.txtSAttack1.text = "" + (r[1] + a[1] + n[1]),
            this.txtSpeed1.text = "" + (r[2] + a[2] + n[2]),
            this.txtDefence1.text = "" + (r[3] + a[3] + n[3]),
            this.txtSDefence1.text = "" + (r[4] + a[4] + n[4]),
            this.txtHealth1.text = "" + (r[5] + a[5] + n[5]);
            var s = t.monsterLearning.split("_");
            this.txtAttack2.text = s[0],
            this.txtSAttack2.text = s[1],
            this.txtSpeed2.text = s[2],
            this.txtDefence2.text = s[3],
            this.txtSDefence2.text = s[4],
            this.txtHealth2.text = s[5];
            var o = t.mintmark.split("_").map(parseFloat),
            h = new SmallItemIcon(1.1);
            o[0] && (h.setData({
                type: "counter",
                id: o[0],
                count: 5,
                name: "auto"
            }), this.petCounter1.addChild(h));
            var l = new SmallItemIcon(1.1);
            o[1] && (l.setData({
                type: "counter",
                id: o[1],
                count: 5,
                name: "auto"
            }), this.petCounter1.addChild(l));
            var _ = new SmallItemIcon(1.1);
            o[2] && (_.setData({
                type: "counter",
                id: o[2],
                count: 5,
                name: "auto"
            }), this.petCounter1.addChild(_));
            for (var c, u = t.monsterMove.split("_").map(parseFloat), p = 0, g = SkillXMLInfo.getAllHideSkills(t.monsterId), f = function(t, e) {
                if (e < u.length && g.indexOf(u[e]) >= 0) return p = u[e],
                c = t,
                "continue";
                if (e < u.length) {
                    var i = u[t - 1],
                    n = SkillXMLInfo.getSkillObj(i),
                    a = void 0;
                    if (4 == SkillXMLInfo.getCategory(i)) a = ClientConfig.getpettypeticon("prop");
                    else {
                        var r = SkillXMLInfo.getTypeID(i);
                        a = ClientConfig.getpettypeticon(r + "")
                    }
                    m["imgSkillIcon" + t].source = a,
                    m["txtSkillPP" + t].text = "PP：" + n.MaxPP + "/" + n.MaxPP,
                    m["txtSkillPower" + t].text = "威力：" + ~~n.Power,
                    m["txtSkillName" + t].text = n.Name,
                    ImageButtonUtil.add(m["skillBtn_" + t],
                    function() {
                        tipsPop.TipsPop.openSkillPop({
                            id: i,
                            petInfo: null
                        })
                    },
                    m, !1, !1)
                } else m["imgSkillIcon" + t] && (m["imgSkillIcon" + t].source = "", m["txtSkillPP" + t].text = "", m["txtSkillPower" + t].text = "", m["txtSkillName" + t].text = "");
                t++,
                c = t
            },
            m = this, d = 1, x = 0; 4 >= x; x++) f(d, x),
            d = c;
            p > 0 ? (this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_1_png", this.txtSkill5.text = StringUtil.parseStrLimitLen(SkillXMLInfo.getSkillObj(p).Name, 6)) : (this.txtSkill5.text = "", SkillXMLInfo.hideMovesMap[t.monsterId] ? this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_3_png": this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_2_png"),
            ImageButtonUtil.remove(this.skillBtn_5),
            p > 0 && ImageButtonUtil.add(this.skillBtn_5,
            function() {
                tipsPop.TipsPop.openSkillPop({
                    id: p
                })
            },
            this, !1, !1)
        },
        e.prototype.initEnemyPet = function() {
            var t = this;
            this.myPetGrp.visible = !1,
            this.enePetGrp.visible = !0;
            for (var e = function(e) {
                var n = i.fightPetData.enemyCigIds[e],
                a = new SmallItemIcon(1.05);
                a.setData({
                    type: "pet",
                    id: config.FightTestBossConfig.getItem(n).monsterId,
                    count: !1,
                    name: {
                        value: "auto",
                        limitLen: 5,
                        color: 4252667,
                        posY: 71
                    },
                    onClick: function() {
                        t.showEnemy(e)
                    },
                    ui: {
                        decorationSource: [{
                            type: "Selected",
                            name: "Selected",
                            width: 92,
                            height: 92,
                            posX: -12,
                            posY: -12,
                            source: "battle_test_machine_train_fight_light_select_png",
                            grid: [22, 22, 2, 2]
                        }]
                    }
                }),
                i.enemySelect.addChild(a)
            },
            i = this, n = 0; n < this.fightPetData.enemyCigIds.length; n++) e(n);
            this.showEnemy(this.fightPetData.cigIdx)
        },
        e.prototype.showEnemy = function(t) {
            null == t && (t = 0);
            for (var e = 0; e < this.fightPetData.enemyCigIds.length; e++) {
                var i = this.enemySelect.getChildAt(e),
                n = i.getDecorations().Selected;
                n.img.visible = e == t
            }
            var a = config.FightTestBossConfig.getItem(this.fightPetData.enemyCigIds[t]);
            ImageButtonUtil.remove(this.shuxinBtn),
            ImageButtonUtil.add(this.shuxinBtn,
            function() {
                ModuleManager.showModule("petbookAttRelationShip", ["petbookAttRelationShip"], a.monsterId, "", AppDoStyle.NULL)
            },
            this);
            var r = new SmallItemIcon;
            r.setData({
                type: "pet",
                id: a.monsterId
            }),
            DisplayUtil.removeAllChild(this.enemyHead),
            this.enemyHead.addChild(r);
            var s = (parseFloat(a.monsterNewse), this.getPetEffect(a.monsterEffect_id, a.monsterId));
            s ? (this.effectImg3.visible = !0, ImageButtonUtil.remove(this.effectImg3), ImageButtonUtil.add(this.effectImg3,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], [s], "", AppDoStyle.NULL)
            },
            this), this.effectImg3.width = 26, this.effectImg3.source = EffectIconControl.checkIncludeAdvEffect(s.effectId) ? PetAdvanceXMLInfo.getAdvSignSource(a.monsterId) : "battle_test_machine_train_fight_info_effectImg_png") : this.effectImg3.visible = !1,
            this.enemyName.text = PetXMLInfo.getName(a.monsterId),
            this.txtStudy3.text = PetXMLInfo.getTypeCN(a.monsterId);
            var o = a.extraData.split("_").map(parseFloat),
            h = a.mintmarkData.split("_").map(parseFloat),
            l = a.baseData.split("_").map(parseFloat);
            if (this.txtAttack3.text = "" + (l[0] + h[0] + o[0]), this.txtSAttack3.text = "" + (l[1] + h[1] + o[1]), this.txtSpeed3.text = "" + (l[2] + h[2] + o[2]), this.txtDefence3.text = "" + (l[3] + h[3] + o[3]), this.txtSDefence3.text = "" + (l[4] + h[4] + o[4]), this.txtHealth3.text = "" + (l[5] + h[5] + o[5]), "" != a.monsterMove) {
                for (var _, c = a.monsterMove.split("_").map(parseFloat), u = 0, p = SkillXMLInfo.getAllHideSkills(a.monsterId), g = function(t, e) {
                    if (e < c.length && p.indexOf(c[e]) >= 0) return u = c[e],
                    _ = t,
                    "continue";
                    if (ImageButtonUtil.remove(f["skillBtn_" + t]), e < c.length) {
                        var i = c[t - 1],
                        n = SkillXMLInfo.getSkillObj(i),
                        a = void 0;
                        if (4 == SkillXMLInfo.getCategory(i)) a = ClientConfig.getpettypeticon("prop");
                        else {
                            var r = SkillXMLInfo.getTypeID(i);
                            a = ClientConfig.getpettypeticon(r + "")
                        }
                        f["imgSkillIcon" + t].source = a,
                        f["txtSkillPP" + t].text = "PP：" + n.MaxPP + "/" + n.MaxPP,
                        f["txtSkillPower" + t].text = "威力：" + ~~n.Power,
                        f["txtSkillName" + t].text = n.Name,
                        ImageButtonUtil.add(f["skillBtn_" + t],
                        function() {
                            tipsPop.TipsPop.openSkillPop({
                                id: i,
                                petInfo: null
                            })
                        },
                        f, !1, !1)
                    } else f["imgSkillIcon" + t] && (f["imgSkillIcon" + t].source = "", f["txtSkillPP" + t].text = "", f["txtSkillPower" + t].text = "", f["txtSkillName" + t].text = "");
                    t++,
                    _ = t
                },
                f = this, e = 1, m = 0; 4 >= m; m++) g(e, m),
                e = _;
                u > 0 ? (this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_1_png", this.txtSkill5.text = StringUtil.parseStrLimitLen(SkillXMLInfo.getSkillObj(u).Name, 6)) : (this.txtSkill5.text = "", SkillXMLInfo.hideMovesMap[a.monsterId] ? this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_3_png": this.fifthSign.source = "battle_test_machine_train_fight_info_fifthSign_2_png"),
                ImageButtonUtil.remove(this.skillBtn_5),
                u > 0 && ImageButtonUtil.add(this.skillBtn_5,
                function() {
                    tipsPop.TipsPop.openSkillPop({
                        id: u
                    })
                },
                this, !1, !1)
            }
        },
        e
    } (PopView);
    t.BattleTestMachineTrainFightInfoPop = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainFightInfoPop")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "BattleTestMachineTrainFightSuitAchieveSkin",
            i.init(e),
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.closeBtn, this.hide, this)
        },
        e.prototype.init = function(t) {
            switch (t.type) {
            case "mySuit":
                this.displaySuit(t.id, !0);
                break;
            case "eneSuit":
                this.displaySuit(t.id, !1);
                break;
            case "achieve":
                this.displayAchieve(t.id);
                break;
            default:
                console.log("err type!")
            }
        },
        e.prototype.displaySuit = function(t, e) {
            void 0 === e && (e = !0),
            this.suit_grp.visible = !0,
            this.achieve_grp.visible = !1,
            this.txt_nameTitle.text = SuitXMLInfo.getName(t),
            this.Txt_effTitle.text = "套装特效：";
            var i = ItemSeXMLInfo.getSuitEff(t);
            this.Txt_eff.text = "" != i ? i: "无";
            for (var n = SuitXMLInfo.getCloths(t).map(parseFloat), a = 0; a < n.length; a++) {
                var r = new SmallItemIcon;
                r.setData({
                    type: "default",
                    id: n[a],
                    count: !1,
                    name: !1,
                    rarity: !1
                }),
                this.grp_suitIcon.addChild(r)
            }
            if (e) {
                for (var s = 0,
                o = MainManager.actorInfo.clothIDs,
                h = 0,
                l = o; h < l.length; h++) {
                    var _ = l[h];
                    if (n.indexOf(_) < 0) {
                        s = _;
                        break
                    }
                }
                if (0 != s) {
                    this.Txt_effTitle0.visible = !0,
                    this.scroller_desc0.visible = !0;
                    var r = new SmallItemIcon;
                    r.setData({
                        type: "default",
                        id: s,
                        count: !1,
                        name: !1,
                        rarity: !1
                    }),
                    this.grp_suitIcon.addChild(r);
                    var i = ItemSeXMLInfo.getItemDes(s, 0);
                    this.Txt_eff0.text = "" != i ? i: "无"
                } else this.Txt_effTitle0.visible = !1,
                this.scroller_desc0.visible = !1,
                this.scroller_desc.height = 160
            } else this.Txt_effTitle0.visible = !1,
            this.scroller_desc0.visible = !1,
            this.scroller_desc.height = 160
        },
        e.prototype.displayAchieve = function(t) {
            this.suit_grp.visible = !1,
            this.achieve_grp.visible = !0,
            this.txt_nameTitle.text = AchieveXMLInfo.getTitle(t),
            this.txtAchieve.text = AchieveXMLInfo.getTitleDesc(t);
            var e = AchieveXMLInfo.getTitleEffDesc(t);
            e && "无称号特效" != e ? (this.txtEff.visible = !0, this.txtNoEff.visible = !1) : (e = "", this.txtEff.visible = !1, this.txtNoEff.visible = !0),
            this.txtEffect.text = e;
            var i = AchieveXMLInfo.getTitleColor(t);
            this.achieveIcon.source = 0 != i ? ClientConfig.getAchieveTitleIcon(t) : ClientConfig.getAchieveIcon(AchieveXMLInfo.getTitleIconId(t))
        },
        e
    } (PopView);
    t.BattleTestMachineTrainFightSuitAchievePop = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainFightSuitAchievePop")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.selectType = "Both",
            n.leftList_mypetArr = null,
            n.leftList_trialArr = null,
            n.rightList_playerSideArr = null,
            n.rightList_enemySideArr = null,
            n.curFilterAttr = 0,
            n.curStageIdx = i,
            n.curStageIdx < t.BattleTestMachineTrainSelectPanel.INEDX_INTERVAL ? n.curType = {
                name: "pve",
                idx: 1
            }: n.curType = {
                name: "pvp",
                idx: 2
            },
            n.skinName = "BattleTestMachineTrainFightSkin",
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptBgByScale(this.bg),
            this.adaptBgByScale(this.bg),
            e.prototype.initBtnClose.call(this, "battle_test_machine_train_select_" + this.curType.name + "_png", this,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 5,
                    args: i.curType.idx + .01 * (i.curStageIdx < t.BattleTestMachineTrainSelectPanel.INEDX_INTERVAL ? i.curStageIdx: i.curStageIdx - t.BattleTestMachineTrainSelectPanel.INEDX_INTERVAL)
                }),
                i.onClose()
            },
            this),
            this.bg.source = "battle_test_machine_train_fight_" + this.curType.name + "_bg_png",
            this.ensureGrp = this.rb0.group,
            this.ensureGrp.selectedValue = 1,
            this.initView(),
            this.addEvent(),
            this.showPet(null)
        },
        i.prototype.initView = function() {
            var e = this;
            switch (this.stageCig = config.FightTestStageConfig.getItem(this.curStageIdx), this.stageCig.fightMonsterIndexs ? this.allTrialIdArr = this.stageCig.fightMonsterIndexs.toString().split("_").map(parseFloat) : this.allTrialIdArr = [], this.allEnemyIdArr = this.stageCig.fightBossIndexes.toString().split("_").map(parseFloat), this.stageCig.StageType) {
            case 1:
                this.selectType = "Both";
                break;
            case 2:
                this.selectType = "TrialSelect"
            }
            if (0 == this.allTrialIdArr.length && (this.selectType = "MySelect"), this.equipText.text = this.getSuitText(), this.achieveText.text = AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle), this.list_0.itemRenderer = SmallItemIcon, this.list_1.itemRenderer = t.BattleTestMachineTrainNewFightTeamItem, this.left_arrcol = new eui.ArrayCollection, this.right_arrcol = new eui.ArrayCollection, this.list_0.dataProvider = this.left_arrcol, this.list_1.dataProvider = this.right_arrcol, "Both" == this.selectType) {
                var i = 1,
                n = PetStorage2015InfoManager.getInfoByType(i - 1, 0);
                n.sort(function(t, e) {
                    return e.level - t.level == 0 ? e.id - t.id: e.level - t.level
                });
                for (var a = [], r = 0, s = PetManager.infos; r < s.length; r++) {
                    var o = s[r],
                    h = new PetStorage2015PetInfo;
                    h.id = o.id,
                    h.catchTime = o.catchTime,
                    a.push(h)
                }
                for (var l = 0,
                _ = PetManager.secondInfos; l < _.length; l++) {
                    var o = _[l],
                    h = new PetStorage2015PetInfo;
                    h.id = o.id,
                    h.catchTime = o.catchTime,
                    a.push(h)
                }
                n = a.concat(n),
                this.leftList_mypetArr = [];
                for (var c = 0,
                u = n; c < u.length; c++) {
                    var p = u[c];
                    this.leftList_mypetArr.push({
                        type: "pet",
                        id: p.id,
                        count: !1,
                        name: {
                            value: "auto",
                            limitLen: 5,
                            color: 4252667,
                            posY: 71
                        },
                        ui: {
                            scale: 1.05,
                            decorationSource: [{
                                type: "custom",
                                name: "hasSelected",
                                width: 70,
                                height: 70,
                                posX: 0,
                                posY: 0,
                                hide: !0,
                                source: "common_item_bg_style_70_70_png",
                                grid: [22, 22, 2, 2]
                            }]
                        },
                        ct: p.catchTime,
                        cigId: null
                    })
                }
            }
            if ("TrialSelect" == this.selectType || "Both" == this.selectType) {
                this.leftList_trialArr = [];
                for (var g = 0; g < this.allTrialIdArr.length; g++) {
                    var f = config.FightTestMonsterConfig.getItem(this.allTrialIdArr[g]);
                    this.leftList_trialArr.push({
                        type: "pet",
                        id: f.monsterId,
                        count: !1,
                        name: {
                            value: "auto",
                            limitLen: 5,
                            color: 4252667,
                            posY: 71
                        },
                        ui: {
                            scale: 1.05,
                            decorationSource: [{
                                type: "custom",
                                name: "hasSelected",
                                width: 70,
                                height: 70,
                                posX: 0,
                                posY: 0,
                                hide: !0,
                                source: "common_item_bg_style_70_70_png",
                                grid: [22, 22, 2, 2]
                            }]
                        },
                        ct: null,
                        cigId: f.id
                    })
                }
            }
            "NoSelect" == this.selectType ? (this.select_grp.visible = !1, this.noSelect_sign.visible = !0) : (this.select_grp.visible = !0, this.noSelect_sign.visible = !1, this.selectGrp = this.rb_mine.group, this.selectGrp.selectedValue = "TrialSelect" == this.selectType ? 2 : 1, this.initSelectTab("TrialSelect" == this.selectType ? 2 : 1)),
            this.rightList_playerSideArr = [];
            for (var m = 0; 6 > m; m++)"NoSelect" != this.selectType ? this.rightList_playerSideArr.push({
                id: 0,
                ct: 0,
                isLocked: m >= this.stageCig.NeedMonNum,
                cigId: null
            }) : m >= this.allTrialIdArr.length ? this.rightList_playerSideArr.push({
                id: 0,
                ct: 0,
                isLocked: !0,
                cigId: null,
                selectId: null
            }) : this.rightList_playerSideArr.push({
                id: config.FightTestMonsterConfig.getItem(this.allTrialIdArr[m]).monsterId,
                ct: null,
                isLocked: m >= this.stageCig.NeedMonNum,
                cigId: this.allTrialIdArr[m],
                selectId: null
            });
            this.rightList_enemySideArr = [];
            for (var d = 0; d < this.allEnemyIdArr.length; d++) {
                var x = config.FightTestBossConfig.getItem(this.allEnemyIdArr[d]);
                this.rightList_enemySideArr.push({
                    id: x.monsterId,
                    ct: null,
                    isLocked: !1,
                    cigId: x.id,
                    cigIdx: d
                })
            }
            this.list_1.selectedIndex = 0,
            this.ensureGrp.selectedValue = 1,
            egret.setTimeout(function() {
                e.updateEnsureListByTab(1)
            },
            this, 100)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.typeBtn,
            function() {
                var t = {
                    callBack: e.filterMyPets,
                    caller: e,
                    selectId: 0,
                    unAutoClose: !1,
                    relativeSet: {
                        srcWorldPos: e.typeBtn.localToGlobal(),
                        dir: "left-top",
                        rx: 20,
                        ry: 30
                    }
                };
                ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.searchBtn,
            function() {
                e.filterMyPets(0, e.curFilterAttr)
            },
            this),
            this.selectGrp && this.selectGrp.addEventListener(egret.Event.CHANGE, this.onChangeSelectTab, this),
            this.ensureGrp.addEventListener(egret.Event.CHANGE, this.onChangeEnsureTab, this),
            ImageButtonUtil.add(this.startFightBtn,
            function() {
                e.startFight()
            },
            this),
            this.list_0.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChoosePet, this),
            this.list_1.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChooseEnsurePet, this),
            ImageButtonUtil.add(this.equipBtn,
            function() {
                var i = 0;
                i = 1 == ~~e.ensureGrp.selectedValue ? e.getSuitId() : e.stageCig.equip,
                0 != i && PopViewManager.getInstance().openView(new t.BattleTestMachineTrainFightSuitAchievePop({
                    id: i,
                    type: 1 == ~~e.ensureGrp.selectedValue ? "mySuit": "eneSuit"
                }))
            },
            this),
            ImageButtonUtil.add(this.achieveBtn,
            function() {
                var i = 0;
                i = 1 == ~~e.ensureGrp.selectedValue ? MainManager.actorInfo.curTitle: e.stageCig.title,
                i && PopViewManager.getInstance().openView(new t.BattleTestMachineTrainFightSuitAchievePop({
                    id: i,
                    type: "achieve"
                }))
            },
            this),
            ImageButtonUtil.add(this.petInfoBtn,
            function() {
                PopViewManager.getInstance().openView(new t.BattleTestMachineTrainFightInfoPop(e._curSelectPetData))
            },
            this),
            ImageButtonUtil.add(this.resetBtn,
            function() {
                e.clearChoosePet()
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.filterMyPets = function(t, e) {
            var i = this,
            n = [];
            this.curFilterAttr = e,
            n = 0 != this.curFilterAttr ? this.leftList_mypetArr.filter(function(t) {
                return~~PetXMLInfo.getType(t.id) == i.curFilterAttr
            }) : this.leftList_mypetArr.concat([]);
            var a = this.txtSearch.text.trim();
            if ("" != a) {
                var r = +a,
                s = r > 0;
                n = n.filter(function(t) {
                    return s ? t.id == r: SearchUtil.isMatch(a, PetXMLInfo.getName(t.id)) ? !0 : !1
                })
            }
            this.left_arrcol.replaceAll(n.slice()),
            this.left_arrcol.refresh()
        },
        i.prototype.onChangeSelectTab = function(t) {
            return "TrialSelect" == this.selectType ? (BubblerManager.getInstance().showText("当前关卡仅可挑选【试用精灵】中的精灵进行挑战"), void(this.selectGrp.selectedValue = 2)) : "MySelect" == this.selectType ? (BubblerManager.getInstance().showText("当前关卡仅可挑选【我的精灵】中的精灵进行挑战"), void(this.selectGrp.selectedValue = 1)) : void this.initSelectTab()
        },
        i.prototype.initSelectTab = function(t) {
            void 0 === t && (t = 0),
            1 == ~~this.selectGrp.selectedValue || 1 == t ? (this.search_grp.visible = !0, this.scr_0.y = 95, this.scr_0.height = 430, this.left_arrcol.source = [].concat(this.leftList_mypetArr), this.left_arrcol.refresh()) : (this.search_grp.visible = !1, this.scr_0.y = 48, this.scr_0.height = 477, this.left_arrcol.source = [].concat(this.leftList_trialArr), this.left_arrcol.refresh())
        },
        i.prototype.onChangeEnsureTab = function(t) {
            var e = this;
            if (1 == ~~this.ensureGrp.selectedValue) {
                this.right_arrcol.replaceAll([].concat(this.rightList_playerSideArr));
                var i = 0,
                n = {};
                n.item = {
                    cigId: this.rightList_playerSideArr[i].cigId,
                    id: this.rightList_playerSideArr[i].id,
                    ct: this.rightList_playerSideArr[i].ct
                },
                this.onChooseEnsurePet(n),
                egret.setTimeout(function() {
                    e.list_1.selectedIndex = i
                },
                this, 50),
                gsap.fromTo(this.select_grp, {
                    x: -280
                },
                {
                    x: 10,
                    duration: .3
                }),
                this.resetBtn.visible = !0
            } else {
                this.right_arrcol.replaceAll([].concat(this.rightList_enemySideArr));
                var a = {};
                a.item = {
                    cigId: this.rightList_enemySideArr[0].cigId
                },
                this.onChooseEnsurePet(a),
                egret.setTimeout(function() {
                    e.list_1.selectedIndex = 0
                },
                this, 50),
                gsap.fromTo(this.select_grp, {
                    x: 10
                },
                {
                    x: -280,
                    duration: .3
                }),
                this.resetBtn.visible = !1
            }
            this.right_arrcol.refresh(),
            this.updateSuitandAchieve()
        },
        i.prototype.updateEnsureListByTab = function(t) {
            void 0 === t && (t = 0),
            1 == this.ensureGrp.selectedValue || 1 == t ? this.right_arrcol.replaceAll([].concat(this.rightList_playerSideArr)) : this.right_arrcol.replaceAll([].concat(this.rightList_enemySideArr)),
            0 != t && (this.list_1.selectedIndex = 0)
        },
        i.prototype.updateSuitandAchieve = function() {
            2 == ~~this.ensureGrp.selectedValue ? (this.stageCig.equip ? this.equipText.text = this.getSuitText(this.stageCig.equip) : this.equipText.text = "无能力套装", this.achieveText.text = AchieveXMLInfo.getTitle(this.stageCig.title)) : (this.equipText.text = this.getSuitText(), this.achieveText.text = AchieveXMLInfo.getTitle(MainManager.actorInfo.curTitle))
        },
        i.prototype.clearChoosePet = function() {
            this.petInfoBtn.visible = !1;
            for (var t = 0,
            e = this.rightList_playerSideArr; t < e.length; t++) {
                var i = e[t];
                i.isLocked || (i.id = 0, i.ct = 0, i.cigId = null, i.selectId = null)
            }
            this.updateEnsureListByTab(),
            this.right_arrcol.refresh();
            for (var n = 0,
            a = this.left_arrcol.source; n < a.length; n++) {
                var r = a[n];
                r.ui.decorationSource[0].hide = !0
            }
            if (this.leftList_mypetArr) for (var s = 0,
            o = this.leftList_mypetArr; s < o.length; s++) {
                var h = o[s];
                h.ui.decorationSource[0].hide = !0
            }
            if (this.leftList_trialArr) for (var l = 0,
            _ = this.leftList_trialArr; l < _.length; l++) {
                var c = _[l];
                c.ui.decorationSource[0].hide = !0
            }
            this.left_arrcol.replaceAll(this.left_arrcol.source),
            this.list_1.selectedIndex = 0,
            this.pet.removeChildren(),
            CjsUtil.removeAllAni(),
            this._curShowId && CjsUtil.disposePetCls(this._curShowId),
            this._curShowId = 0
        },
        i.prototype.onChoosePet = function(t) {
            var e = this;
            if (t.item.ct ? PetManager.upDateBagPetInfo(t.item.ct,
            function(t) {
                e.showPet(t),
                e.recordCurSelectPetData(t)
            }) : (this.showPet(t.item.cigId), this.recordCurSelectPetData(t.item.cigId, !0)), this.try2EnsurePet(t.item) && 1 == ~~this.ensureGrp.selectedValue && !this.rightList_playerSideArr[this.list_1.selectedIndex].isLocked) {
                var i = this.rightList_playerSideArr[this.list_1.selectedIndex].id,
                n = t.item.id;
                if (this.leftList_mypetArr) for (var a = 0,
                r = this.leftList_mypetArr; a < r.length; a++) {
                    var s = r[a];
                    s.id == i ? s.ui.decorationSource[0].hide = !0 : s.id == n && (s.ui.decorationSource[0].hide = !1)
                }
                if (this.leftList_trialArr) for (var o = 0,
                h = this.leftList_trialArr; o < h.length; o++) {
                    var l = h[o];
                    l.id == i ? l.ui.decorationSource[0].hide = !0 : l.id == n && (l.ui.decorationSource[0].hide = !1)
                }
                for (var _ = 0,
                c = this.left_arrcol.source; _ < c.length; _++) {
                    var u = c[_];
                    u.id == i ? u.ui.decorationSource[0].hide = !0 : u.id == n && (u.ui.decorationSource[0].hide = !1)
                }
                this.left_arrcol.replaceAll(this.left_arrcol.source),
                this.rightList_playerSideArr[this.list_1.selectedIndex] = {
                    id: t.item.id,
                    ct: t.item.ct ? t.item.ct: null,
                    isLocked: !1,
                    cigId: t.item.cigId ? t.item.cigId: null,
                    selectId: t.item.cigId ? null: this.list_0.selectedIndex
                },
                this.updateEnsureListByTab()
            }
        },
        i.prototype.try2EnsurePet = function(t) {
            for (var e = 0,
            i = this.rightList_playerSideArr; e < i.length; e++) {
                var n = i[e];
                if (n.id == t.id) return ! 1
            }
            return ! 0
        },
        i.prototype.onChooseEnsurePet = function(t) {
            var e = this;
            1 == ~~this.ensureGrp.selectedValue ? t.item.ct ? 0 == t.item.ct ? this.showPet(null) : PetManager.upDateBagPetInfo(t.item.ct,
            function(t) {
                e.showPet(t),
                e.recordCurSelectPetData(t)
            }) : (this.showPet(t.item.cigId), this.recordCurSelectPetData(t.item.cigId, !0)) : (this.showPet(t.item.cigId, !1), this.recordCurSelectPetData(t.item.cigIdx, !1))
        },
        i.prototype.showPet = function(t, e) {
            var i = this;
            void 0 === e && (e = !0);
            var n = this._curShowId;
            if (!t) return this.petInfoBtn.visible = !1,
            this._curShowId = 0,
            this.pet.removeChildren(),
            void CjsUtil.removeAllAni();
            this.petInfoBtn.visible = !0;
            var a;
            t instanceof PetInfo ? (a = t.id, t.skinId > 0 ? this._curShowId = PetSkinXMLInfo.getSkinInfo(t.skinId).skinPetId: this._curShowId = t.id) : (e ? this._curShowId = config.FightTestMonsterConfig.getItem(t).monsterId: this._curShowId = config.FightTestBossConfig.getItem(t).monsterId, a = this._curShowId),
            n != this._curShowId && (this.pet.removeChildren(), CjsUtil.removeAllAni(), CjsUtil.setContainer(this.pet), CjsUtil.disposePetCls(n), CjsUtil.init(), CjsUtil.start(), CjsUtil.setContainer(this.pet), CjsUtil.GetShowPetMovieClip(this._curShowId).then(function(t) {
                CjsUtil.removeAllAni(),
                CjsUtil.showAnimate(t);
                var e = PetXMLInfo.getPetOffset(a);
                i.pet && (t.regX = e.x, t.regY = e.y)
            }))
        },
        i.prototype.recordCurSelectPetData = function(t, e) {
            void 0 === e && (e = !0),
            this._curSelectPetData = {
                type: this.curType.name,
                petInfo: null,
                cigId: null,
                enemyCigIds: null
            },
            t instanceof PetInfo ? (this._curSelectPetData.petInfo = t, this._curSelectPetData.cigIdx = null, this._curSelectPetData.enemyCigIds = null) : e ? (this._curSelectPetData.petInfo = null, this._curSelectPetData.cigIdx = t, this._curSelectPetData.enemyCigIds = null) : (this._curSelectPetData.petInfo = null, this._curSelectPetData.cigIdx = t, this._curSelectPetData.enemyCigIds = this.allEnemyIdArr)
        },
        i.prototype.startFight = function() {
            for (var t = [], e = 0; e < this.rightList_playerSideArr.length; e++) {
                var i = this.rightList_playerSideArr[e];
                0 != i.id && (i.ct ? t.push(i.ct) : t.push(i.cigId))
            }
            if (0 == t.length) return void BubblerManager.getInstance().showText("请至少选择1只出战精灵！");
            var n = new egret.ByteArray;
            n.writeUnsignedInt(t.length);
            for (var a = 0,
            r = t; a < r.length; a++) {
                var s = r[a];
                n.writeUnsignedInt(s)
            }
            var o = this.stageCig.order;
            SocketConnection.sendByQueue(41454, [this.curType.idx, o, n])
        },
        i.prototype.openChangeView = function() {
            var t = {};
            t.caller = this,
            t.getCurrentTitleIdFunc = function() {
                return MainManager.actorInfo.curTitle
            },
            t.onChangeHandler = this.onChangeTitleHanlder,
            t.isSimpleClose = !0,
            ModuleManager.showModuleByID(51, t)
        },
        i.prototype.onChangeTitleHanlder = function(t) {
            var e = this;
            return new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeTitle(t.titleId,
                function() {
                    return e.achieveText.text = AchieveXMLInfo.getTitle(t.titleId),
                    i()
                },
                null, e)
            })
        },
        i.prototype.getSuitText = function(t) {
            if (t) return SuitXMLInfo.getName(t);
            var e = MainManager.actorInfo.clothIDs,
            i = SuitXMLInfo.getSuitIDs(e);
            if (i.length > 0) {
                var n = i[0];
                return SuitXMLInfo.getName(n)
            }
            return "无能力套装"
        },
        i.prototype.getSuitId = function() {
            var t = MainManager.actorInfo.clothIDs,
            e = SuitXMLInfo.getSuitIDs(t);
            return e.length > 0 ? e[0] : 0
        },
        i.prototype.openSuitView = function() {
            var t = ItemManager.GetMySuitIds();
            if (0 === t.length) BubblerManager.getInstance().showText("你还没有获得任何套装哦！");
            else {
                var e = {};
                e.suitList = t,
                e.caller = this,
                e.onDressClothesHandler = this._onDressClothesHanlder,
                e.onGetclothIDsHandler = this._onGetClothesIDsHanlder,
                e.showSuitAndGlass = !0,
                ModuleManager.showModuleByID(52, e)
            }
        },
        i.prototype._onGetClothesIDsHanlder = function() {
            return MainManager.actorInfo.clothIDs
        },
        i.prototype._onDressClothesHanlder = function(t) {
            var e = this;
            return t ? new Promise(function(i, n) {
                MainManager.actorInfo.requestChangeClotherBySuit(t.suitId,
                function() {
                    return e.equipText.text = e.getSuitText(t.suitId),
                    i()
                },
                null, e)
            }) : void egret.setTimeout(function() {
                var t = SuitXMLInfo.getSuitIDs(MainManager.actorInfo.clothIDs);
                t.length > 0 ? e.equipText.text = e.getSuitText(t[0]) : e.equipText.text = "无能力套装"
            },
            this, 100)
        },
        i.prototype.onFightOver = function() {
            EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                type: 5,
                args: this.curType.idx + .01 * (this.curStageIdx < t.BattleTestMachineTrainSelectPanel.INEDX_INTERVAL ? this.curStageIdx: this.curStageIdx - t.BattleTestMachineTrainSelectPanel.INEDX_INTERVAL)
            })
        },
        i.prototype.destroy = function() {
            this.selectGrp && this.selectGrp.removeEventListener(egret.Event.CHANGE, this.onChangeSelectTab, this),
            this.ensureGrp && this.ensureGrp.removeEventListener(egret.Event.CHANGE, this.onChangeEnsureTab, this),
            this.list_0.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChoosePet, this),
            this.list_1.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onChooseEnsurePet, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BattleTestMachineTrainNewFightPanel = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainNewFightPanel")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.restTime = 0,
            i.curSelectIdx = 0,
            i.curSelectCigIdx = 0,
            i.skinName = "BattleTestMachineTrainSelectSkin",
            i.initBtnIdx = Math.round(100 * t % 100),
            t = Math.round(100 * t - i.initBtnIdx) / 100,
            1 == t ? i.curType = {
                name: "pve",
                idx: t
            }: i.curType = {
                name: "pvp",
                idx: t
            },
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            SocketConnection.sendWithPromise(41453, ["pve" == this.curType.name ? 1 : 2]).then(function(i) {
                var n = i.data;
                n.position = 0;
                var a = n.readUnsignedInt();
                t.stageDatas = [];
                for (var r = 0; a > r; r++) {
                    var s = {
                        id: 0,
                        bestScore: 0,
                        isLocked: 0,
                        extraData: 0
                    };
                    s.id = n.readUnsignedInt(),
                    s.bestScore = n.readUnsignedInt(),
                    s.isLocked = n.readUnsignedInt(),
                    s.extraData = n.readUnsignedInt(),
                    t.stageDatas.push(s)
                }
                e.prototype.childrenCreated.call(t),
                t.adaptBgByScale(t.bg),
                KTool.getMultiValue([201547, 201548],
                function(e) {
                    t.restTime = e[t.curType.idx - 1],
                    t.init()
                })
            })
        },
        i.prototype.init = function() {
            var i = this;
            e.prototype.initBtnClose.call(this, "battle_test_machine_train_select_" + this.curType.name + "_png", this,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 2
                })
            },
            this),
            this.btn_list.itemRenderer = t.BattleTestMachineTrainSelectBtnItem,
            this.btnArr = new eui.ArrayCollection,
            this.btn_list.dataProvider = this.btnArr,
            this.btn_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickSelectBtn, this),
            this.initBtnIdx > 0 && egret.setTimeout(function() {
                var t = i.initBtnIdx >= i.btnArr.source.length - 4 ? 460 : 100 * (i.initBtnIdx - 1);
                gsap.fromTo(i.btn_list, {
                    scrollV: 0
                },
                {
                    scrollV: t,
                    duration: .4
                }),
                i.onClickSelectBtn({
                    item: {
                        idx: i.initBtnIdx
                    }
                })
            },
            this, 120),
            this.enemy_list.itemRenderer = SmallItemIcon,
            this.eneArr = new eui.ArrayCollection,
            this.enemy_list.dataProvider = this.eneArr,
            this.prize_list.itemRenderer = SmallItemIcon,
            this.prizeArr = new eui.ArrayCollection,
            this.prize_list.dataProvider = this.prizeArr;
            for (var n = [], a = 0; a < this.stageDatas.length; a++) {
                var r = this.stageDatas[a];
                n.push({
                    isLocked: 0 == r.isLocked,
                    idx: r.id,
                    score: r.bestScore,
                    isSelected: !1
                })
            }
            this.btnArr.replaceAll(n),
            this.info_grp.alpha = 1,
            this.info_grp.visible = !1,
            this.rest_text.text = 10 - this.restTime + "/10",
            this.restTime >= 10 ? this.tarin_start_btn.source = "battle_test_machine_tarin_start_btn_unable_png": ImageButtonUtil.add(this.tarin_start_btn,
            function() {
                EventManager.dispatchEventWith(t.BattleTestMachine.SHOW_PANEL, !1, {
                    type: 6,
                    args: i.curSelectCigIdx
                })
            },
            this)
        },
        i.prototype.onClickSelectBtn = function(t) {
            if (!t.item.isLocked) {
                if (t.item.idx != this.curSelectIdx) for (var e = 0,
                i = this.btnArr.source; e < i.length; e++) {
                    var n = i[e];
                    n.isSelected = !1
                }
                this.curSelectIdx = t.item.idx,
                this.updateSelectInfo(this.curSelectIdx),
                this.btnArr.source[this.curSelectIdx - 1].isSelected = !0,
                this.btnArr.replaceAll(this.btnArr.source)
            }
        },
        i.prototype.updateSelectInfo = function(t) {
            this.info_grp.visible = !0,
            this.curSelectCigIdx = t + (this.curType.idx - 1) * i.INEDX_INTERVAL;
            for (var e = config.FightTestStageConfig.getItem(this.curSelectCigIdx), n = [], a = e.fightBossIndexes.toString().split("_").map(parseFloat), r = 0; r < a.length; r++) n.push({
                type: "pet",
                id: config.FightTestBossConfig.getItem(a[r]).monsterId,
                count: !1,
                name: {
                    value: "auto",
                    limitLen: 5,
                    color: 8631026
                }
            });
            this.eneArr.replaceAll(n);
            for (var s = [], o = 0 == this.stageDatas[t - 1].bestScore ? e.firstReward.toString().split(";") : e.reward.toString().split(";"), r = 0; r < o.length; r++) {
                var h = o[r].split("_").map(parseFloat);
                s.push({
                    type: "default",
                    id: h[1],
                    count: h[2],
                    name: !1,
                    rarity: !1,
                    onClick: "showTip",
                    ui: {
                        decorationSource: [{
                            type: "custom",
                            name: "firstSign",
                            posX: 0,
                            posY: 0,
                            source: "battle_test_machine_prize_firstsign_png",
                            hide: this.stageDatas[t - 1].bestScore > 0
                        }]
                    }
                })
            }
            this.prizeArr.replaceAll(s),
            this.select_text.text = 1 == e.StageType ? "自由选择": "固定阵容";
            var l = e.bossIntro;
            l = l.replace(/\\n/g, "\n"),
            this.info_text.text = l
        },
        i.INEDX_INTERVAL = 100,
        i
    } (BaseModule);
    t.BattleTestMachineTrainSelectPanel = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainSelectPanel")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "BattleTestMachineTrainNewFightTeamItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return egret.superGetter(SmallItemIcon, this, "selected")
            },
            set: function(t) {
                this.light_select && !this.isLocked && (this.light_select.visible = t),
                egret.superSetter(SmallItemIcon, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            if (t.prototype.dataChanged.call(this), this.data.isLocked) this.isLocked = !0,
            this.lockSign.visible = !0,
            this.emptySign.visible = !1,
            this.light_select.visible = !1;
            else if (this.data.id <= 0) this.lockSign.visible = !1,
            this.emptySign.visible = !0,
            this.light_select.visible = !1;
            else {
                var e = new SmallItemIcon;
                e.setData({
                    type: "pet",
                    id: this.data.id,
                    count: !1,
                    name: {
                        value: "auto",
                        limitLen: 5,
                        color: 4252667,
                        posY: 71
                    },
                    ui: {
                        scale: 1.05
                    }
                }),
                DisplayUtil.removeAllChild(this.icon_grp),
                this.icon_grp.addChild(e)
            }
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.BattleTestMachineTrainNewFightTeamItem = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainNewFightTeamItem")
} (battleTestMachine || (battleTestMachine = {}));
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
battleTestMachine; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "BattleTestMachineTrainSelectBtnSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.train_piece_select.visible = !1
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.data.isLocked ? (this.info_bg.visible = this.info_text.visible = this.best_score.visible = !1, this.train_lock.visible = !0, this.train_title.textColor = 4615873, ImageButtonUtil.removeAll(this)) : (this.info_bg.visible = this.info_text.visible = this.best_score.visible = !0, this.train_lock.visible = !1, this.train_title.textColor = 12111615, ImageButtonUtil.add(this.grp,
            function() {},
            this, !1, !0)),
            this.train_title.text = "训练" + this.data.idx,
            this.data.score ? this.best_score.text = this.data.score + "回合": this.best_score.text = "暂无记录",
            this.train_piece_select.visible = this.data.isSelected
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.BattleTestMachineTrainSelectBtnItem = e,
    __reflect(e.prototype, "battleTestMachine.BattleTestMachineTrainSelectBtnItem")
} (battleTestMachine || (battleTestMachine = {}));
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
generateEUI.paths["resource/eui_skins/BattleMachineTestInfoPopSkin.exml"] = window.BattleMachineTestInfoPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_1", "txt_2", "txt_3", "txt_4", "txt_5"],
        this.height = 218,
        this.width = 204,
        this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 218,
        t.scale9Grid = new egret.Rectangle(10, 10, 9, 9),
        t.source = "battle_test_machine_detail_pop_bg_png",
        t.width = 204,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "攻击：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 33,
        t.y = 34,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "特攻：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 33,
        t.y = 66,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "防御：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 34,
        t.y = 99,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "特防：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 33,
        t.y = 132,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "速度：",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 33,
        t.y = 165,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.horizontalCenter = 24,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "154",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.y = 34,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.horizontalCenter = 24,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "156",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.y = 66,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.horizontalCenter = 24,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "450",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.y = 99,
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.horizontalCenter = 24,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "323",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.y = 132,
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.horizontalCenter = 24,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "2154",
        t.textColor = 16773461,
        t.touchEnabled = !1,
        t.y = 165,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineBossAttrPopSkin.exml"] = window.BattleTestMachineBossAttrPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnCancel", "btnConfirm", "cb_1", "cb_0", "txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnCancel_i(), this.btnConfirm_i(), this._Image4_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.cb_1_i(), this.cb_0_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.txt_0_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 29,
            t.source = "battle_test_machine_boss_attr_pop_rect_png",
            t.width = 29,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 24,
            t.source = "battle_test_machine_boss_attr_pop_selcted_png",
            t.width = 25,
            t.x = 4,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 29,
            t.source = "battle_test_machine_boss_attr_pop_rect_png",
            t.width = 29,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 24,
            t.source = "battle_test_machine_boss_attr_pop_selcted_png",
            t.width = 25,
            t.x = 4,
            t.y = 0,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    l = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    _ = e.prototype;
    return _._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 0,
        t.y = 41,
        t
    },
    _._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 4,
        t.y = 22,
        t
    },
    _._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "battle_test_machine_boss_attr_pop_title_png",
        t.width = 113,
        t.x = 37,
        t.y = 28,
        t
    },
    _.btnCancel_i = function() {
        var t = new eui.Image;
        return this.btnCancel = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 566,
        t.y = 0,
        t
    },
    _.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.height = 40,
        t.source = "battle_test_machine_boss_attr_pop_btnConfirm_png",
        t.width = 90,
        t.x = 260,
        t.y = 310,
        t
    },
    _._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "battle_test_machine_boss_attr_pop_textBg_png",
        t.width = 568,
        t.x = 20,
        t.y = 199,
        t
    },
    _._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "BOSS作战方式：（所有BOSS都生效）",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 131,
        t.y = 204,
        t
    },
    _._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "无敌",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 403,
        t.y = 260,
        t
    },
    _._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "出招",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 183,
        t.y = 261,
        t
    },
    _.cb_1_i = function() {
        var t = new eui.CheckBox;
        return this.cb_1 = t,
        t.height = 29,
        t.width = 29,
        t.x = 352,
        t.y = 255,
        t.skinName = i,
        t
    },
    _.cb_0_i = function() {
        var t = new eui.CheckBox;
        return this.cb_0 = t,
        t.height = 29,
        t.width = 29,
        t.x = 134,
        t.y = 255,
        t.skinName = n,
        t
    },
    _._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "体力：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 101,
        t.y = 90,
        t
    },
    _._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "防御：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 101,
        t.y = 126,
        t
    },
    _._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "特防：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 101,
        t.y = 162,
        t
    },
    _._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "攻击：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 339,
        t.y = 90,
        t
    },
    _._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "特攻：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 339,
        t.y = 125,
        t
    },
    _._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "速度：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 339,
        t.y = 162,
        t
    },
    _._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 157,
        t.y = 89,
        t
    },
    _._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 157,
        t.y = 125,
        t
    },
    _._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 157,
        t.y = 161,
        t
    },
    _._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 395,
        t.y = 89,
        t
    },
    _._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 395,
        t.y = 125,
        t
    },
    _._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_boss_attr_pop_inputbg_png",
        t.width = 147,
        t.x = 395,
        t.y = 161,
        t
    },
    _.txt_0_i = function() {
        var t = new eui.TextInput;
        return this.txt_0 = t,
        t.height = 20,
        t.horizontalCenter = -79,
        t.maxChars = 6,
        t.prompt = "200",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 90,
        t.skinName = a,
        t
    },
    _.txt_1_i = function() {
        var t = new eui.TextInput;
        return this.txt_1 = t,
        t.height = 20,
        t.horizontalCenter = 160,
        t.maxChars = 6,
        t.prompt = "156",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 90,
        t.skinName = r,
        t
    },
    _.txt_2_i = function() {
        var t = new eui.TextInput;
        return this.txt_2 = t,
        t.height = 20,
        t.horizontalCenter = -79,
        t.maxChars = 6,
        t.prompt = "164",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 126,
        t.skinName = s,
        t
    },
    _.txt_3_i = function() {
        var t = new eui.TextInput;
        return this.txt_3 = t,
        t.height = 20,
        t.horizontalCenter = 160,
        t.maxChars = 6,
        t.prompt = "155",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 126,
        t.skinName = o,
        t
    },
    _.txt_4_i = function() {
        var t = new eui.TextInput;
        return this.txt_4 = t,
        t.height = 20,
        t.horizontalCenter = -79,
        t.maxChars = 6,
        t.prompt = "134",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 162,
        t.skinName = h,
        t
    },
    _.txt_5_i = function() {
        var t = new eui.TextInput;
        return this.txt_5 = t,
        t.height = 20,
        t.horizontalCenter = 160,
        t.maxChars = 6,
        t.prompt = "142",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 120,
        t.y = 162,
        t.skinName = l,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineCombatTestSkin.exml"] = window.BattleTestMachineCombatTestSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "btnPet", "btnCure", "cm_0", "cm_1", "cm_2", "cm_3", "btnStart", "txt_1", "txt_0", "txt_2", "txt_3", "name1", "name2", "name3", "name4", "btnDetail", "rank"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_combat_test_dian_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 15,
            t.source = "battle_test_machine_combat_test_dianbg_png",
            t.width = 15,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.alpha = 0,
            t.height = 15,
            t.source = "battle_test_machine_fight_petBg_png",
            t.width = 80,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_combat_test_dian_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 15,
            t.source = "battle_test_machine_combat_test_dianbg_png",
            t.width = 15,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.alpha = 0,
            t.height = 15,
            t.source = "battle_test_machine_fight_petBg_png",
            t.width = 80,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_combat_test_dian_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 15,
            t.source = "battle_test_machine_combat_test_dianbg_png",
            t.width = 15,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.alpha = 0,
            t.height = 15,
            t.source = "battle_test_machine_fight_petBg_png",
            t.width = 80,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_combat_test_dian_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 15,
            t.source = "battle_test_machine_combat_test_dianbg_png",
            t.width = 15,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.alpha = 0,
            t.height = 15,
            t.source = "battle_test_machine_fight_petBg_png",
            t.width = 85,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_combat_test_bg0_jpg",
        t.verticalCenter = 0,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 517,
        t.horizontalCenter = -4.5,
        t.width = 1075,
        t.y = 73,
        t.elementsContent = [this.pet_i(), this.btnPet_i(), this.btnCure_i(), this._Group1_i()],
        t
    },
    s.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.bottom = 41,
        t.horizontalCenter = -308,
        t.source = "battle_test_machine_combat_test_pet_458_png",
        t
    },
    s.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "battle_test_machine_combat_test_btnPet_png",
        t.x = 0,
        t.y = 358,
        t
    },
    s.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "battle_test_machine_combat_test_btnCure_png",
        t.x = 0,
        t.y = 449,
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 462,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.cm_0_i(), this.cm_1_i(), this.cm_2_i(), this.cm_3_i(), this.btnStart_i(), this.txt_1_i(), this.txt_0_i(), this.txt_2_i(), this.txt_3_i(), this.name1_i(), this.name2_i(), this.name3_i(), this.name4_i(), this.btnDetail_i(), this.rank_i()],
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "battle_test_machine_combat_test_testbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.cm_0_i = function() {
        var t = new eui.RadioButton;
        return this.cm_0 = t,
        t.groupName = "battle_test_machine_groupName",
        t.value = "1",
        t.width = 80,
        t.x = 146,
        t.y = 444,
        t.skinName = i,
        t
    },
    s.cm_1_i = function() {
        var t = new eui.RadioButton;
        return this.cm_1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.groupName = "battle_test_machine_groupName",
        t.label = "",
        t.name = "checkMode_0",
        t.value = "2",
        t.visible = !0,
        t.width = 80,
        t.x = 302,
        t.y = 444,
        t.skinName = n,
        t
    },
    s.cm_2_i = function() {
        var t = new eui.RadioButton;
        return this.cm_2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.groupName = "battle_test_machine_groupName",
        t.label = "",
        t.name = "checkMode_0",
        t.value = "3",
        t.width = 80,
        t.x = 146,
        t.y = 486,
        t.skinName = a,
        t
    },
    s.cm_3_i = function() {
        var t = new eui.RadioButton;
        return this.cm_3 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.groupName = "battle_test_machine_groupName",
        t.label = "",
        t.name = "checkMode_0",
        t.value = "4",
        t.width = 85,
        t.x = 302,
        t.y = 486,
        t.skinName = r,
        t
    },
    s.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "battle_test_machine_combat_test_btnstart_png",
        t.x = 460,
        t.y = 452,
        t
    },
    s.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 63,
        t.size = 20,
        t.text = "9999999999",
        t.textColor = 16514895,
        t.y = 95,
        t
    },
    s.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "MFShangHei",
        t.right = 63,
        t.size = 20,
        t.text = "9999999999",
        t.textColor = 16514895,
        t.y = 178,
        t
    },
    s.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 63,
        t.size = 20,
        t.text = "9999999999",
        t.textColor = 16514895,
        t.y = 342,
        t
    },
    s.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 63,
        t.size = 20,
        t.text = "9999999999",
        t.textColor = 16514895,
        t.y = 260,
        t
    },
    s.name1_i = function() {
        var t = new eui.Label;
        return this.name1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字九个字",
        t.textColor = 4187130,
        t.x = 170,
        t.y = 123,
        t
    },
    s.name2_i = function() {
        var t = new eui.Label;
        return this.name2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字九个字",
        t.textColor = 4187130,
        t.x = 170,
        t.y = 205,
        t
    },
    s.name3_i = function() {
        var t = new eui.Label;
        return this.name3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字九个字",
        t.textColor = 4187130,
        t.x = 170,
        t.y = 287,
        t
    },
    s.name4_i = function() {
        var t = new eui.Label;
        return this.name4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名字九个字",
        t.textColor = 4187130,
        t.x = 170,
        t.y = 369,
        t
    },
    s.btnDetail_i = function() {
        var t = new eui.Image;
        return this.btnDetail = t,
        t.source = "battle_test_machine_combat_test_btnDetail_png",
        t.x = 474.864,
        t.y = 120.18,
        t
    },
    s.rank_i = function() {
        var t = new eui.Image;
        return this.rank = t,
        t.source = "battle_test_machine_combat_test_btnRank_png",
        t.x = 473.272,
        t.y = 368.364,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineDetailPopSkin.exml"] = window.BattleTestMachineDetailPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5", "close"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 285,
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_0_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i(), this.close_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(10, 10, 9, 9),
        t.source = "battle_test_machine_combat_test_zssh_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "99999",
        t.textColor = 16514895,
        t.y = 66,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "418",
        t.textColor = 16514895,
        t.y = 99,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "11",
        t.textColor = 16514895,
        t.y = 131,
        t
    },
    i.txt_3_i = function() {
        var t = new eui.Label;
        return this.txt_3 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "41",
        t.textColor = 16514895,
        t.y = 164,
        t
    },
    i.txt_4_i = function() {
        var t = new eui.Label;
        return this.txt_4 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "暂无记录",
        t.textColor = 16514895,
        t.y = 194,
        t
    },
    i.txt_5_i = function() {
        var t = new eui.Label;
        return this.txt_5 = t,
        t.fontFamily = "MFShangHei",
        t.right = 95,
        t.size = 18,
        t.text = "暂无记录",
        t.textColor = 16514895,
        t.y = 227,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "battle_test_machine_combat_test_close_png",
        t.x = 439,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineFightSkin.exml"] = window.BattleTestMachineFightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "petBase", "pet", "btnCompose", "list_skin", "grp_skin", "btnLock", "btnLocked", "btnSearch", "txtSearch", "grp_search", "btnType", "list_0", "scr_0", "gr_left", "imgBtn_pet", "imgBtn_cure", "grp_petBag", "list_1", "scr_1", "rb0", "rb1", "btnPvp", "btnPve", "gr_right", "btnClose", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.petBase_i(), this._Image1_i(), this._Group1_i(), this.btnCompose_i(), this.grp_skin_i(), this.btnLock_i(), this.btnLocked_i(), this.gr_left_i(), this.gr_right_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "黑体",
            t.size = 18,
            t.textColor = 13097725,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "黑体",
            t.size = 18,
            t.textColor = 13097725,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_test_machine_fight_rb_up_png"), new eui.SetProperty("_Label1", "textColor", 3705542)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 40,
            t.width = 99,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "己方",
            t.touchEnabled = !1,
            t.x = 28,
            t.y = 11,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "battle_test_machine_fight_rb_up_png"), new eui.SetProperty("_Label1", "textColor", 3705542)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 40,
            t.width = 99,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "敌方",
            t.touchEnabled = !1,
            t.x = 28,
            t.y = 11,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.source = "battle_test_machine_fight_bg0_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r.petBase_i = function() {
        var t = new eui.Image;
        return this.petBase = t,
        t.height = 291,
        t.horizontalCenter = 0,
        t.source = "common_pet_base_png",
        t.visible = !0,
        t.width = 421,
        t.y = 330,
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 493,
        t.source = "battle_test_machine_fight_pet_4114_png",
        t.visible = !1,
        t.width = 479,
        t.x = 354,
        t.y = 83,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 760,
        t.elementsContent = [this.pet_i()],
        t
    },
    r.pet_i = function() {
        var t = new eui.Group;
        return this.pet = t,
        t.x = 380,
        t.y = 340,
        t
    },
    r.btnCompose_i = function() {
        var t = new eui.Image;
        return this.btnCompose = t,
        t.height = 42,
        t.source = "battle_test_machine_fight_btnCompose_png",
        t.visible = !0,
        t.width = 142,
        t.x = 292,
        t.y = 69,
        t
    },
    r.grp_skin_i = function() {
        var t = new eui.Group;
        return this.grp_skin = t,
        t.horizontalCenter = -2,
        t.visible = !0,
        t.y = 518,
        t.elementsContent = [this._Image2_i(), this._Scroller1_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 106,
        t.scale9Grid = new egret.Rectangle(79, 0, 7, 106),
        t.source = "battle_test_machine_fight_skinbg_png",
        t.width = 416,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 93,
        t.width = 372,
        t.x = 20,
        t.y = 7,
        t.viewport = this.list_skin_i(),
        t
    },
    r.list_skin_i = function() {
        var t = new eui.List;
        return this.list_skin = t,
        t.height = 93,
        t.width = 372,
        t.x = 20,
        t.y = 7,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    r._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 16,
        t.paddingBottom = 6,
        t.paddingLeft = 6,
        t.paddingRight = 6,
        t.paddingTop = 6,
        t
    },
    r.btnLock_i = function() {
        var t = new eui.Image;
        return this.btnLock = t,
        t.height = 40,
        t.right = 242,
        t.source = "battle_test_machine_fight_btnLock_png",
        t.width = 94,
        t.y = 580,
        t
    },
    r.btnLocked_i = function() {
        var t = new eui.Image;
        return this.btnLocked = t,
        t.height = 40,
        t.source = "battle_test_machine_fight_btnLocked_png",
        t.visible = !1,
        t.width = 94,
        t.x = 800,
        t.y = 580,
        t
    },
    r.gr_left_i = function() {
        var t = new eui.Group;
        return this.gr_left = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 551,
        t.width = 248,
        t.x = 0,
        t.y = 69,
        t.elementsContent = [this._Image3_i(), this.grp_search_i(), this.btnType_i(), this.scr_0_i()],
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 590,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_fight_petBg_png",
        t.width = 273,
        t.x = 0,
        t.y = -19,
        t
    },
    r.grp_search_i = function() {
        var t = new eui.Group;
        return this.grp_search = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 26,
        t.y = 47,
        t.elementsContent = [this._Image4_i(), this.btnSearch_i(), this.txtSearch_i()],
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_search_bg_png",
        t.width = 229,
        t.x = 0,
        t.y = 0,
        t
    },
    r.btnSearch_i = function() {
        var t = new eui.Image;
        return this.btnSearch = t,
        t.height = 38,
        t.source = "battle_test_machine_fight_btnSearch_png",
        t.width = 38,
        t.x = 190,
        t.y = 1,
        t
    },
    r.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.height = 18,
        t.prompt = "输入精灵名或精灵ID",
        t.touchEnabled = !1,
        t.width = 170,
        t.x = 10,
        t.y = 11,
        t.skinName = i,
        t
    },
    r.btnType_i = function() {
        var t = new eui.Image;
        return this.btnType = t,
        t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_fight_btnType_png",
        t.width = 94,
        t.x = 26,
        t.y = 0,
        t
    },
    r.scr_0_i = function() {
        var t = new eui.Scroller;
        return this.scr_0 = t,
        t.height = 452,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 246,
        t.x = 13,
        t.y = 99,
        t.viewport = this.list_0_i(),
        t
    },
    r.list_0_i = function() {
        var t = new eui.List;
        return this.list_0 = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 12,
        t.orientation = "rows",
        t.paddingBottom = 17,
        t.paddingLeft = 17,
        t.paddingRight = 17,
        t.paddingTop = 17,
        t.verticalGap = 12,
        t
    },
    r.gr_right_i = function() {
        var t = new eui.Group;
        return this.gr_right = t,
        t.right = 20,
        t.y = 69,
        t.elementsContent = [this._Image5_i(), this.grp_petBag_i(), this.scr_1_i(), this.rb0_i(), this.rb1_i(), this.btnPvp_i(), this.btnPve_i()],
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 457,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "battle_test_machine_fight_petBg_png",
        t.width = 200,
        t.x = 0,
        t.y = 40,
        t
    },
    r.grp_petBag_i = function() {
        var t = new eui.Group;
        return this.grp_petBag = t,
        t.x = 24,
        t.y = 140,
        t.elementsContent = [this._Label1_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    r._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 4,
        t.size = 20,
        t.text = "实操训练模式下，\n我方出战精灵默认\n为出战背包精灵。",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    r.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.height = 60,
        t.source = "battle_test_machine_imgBtn_pet_png",
        t.width = 60,
        t.x = 47,
        t.y = 101,
        t
    },
    r.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.height = 60,
        t.source = "battle_test_machine_imgBtn_cure_png",
        t.width = 60,
        t.x = 47,
        t.y = 179,
        t
    },
    r.scr_1_i = function() {
        var t = new eui.Scroller;
        return this.scr_1 = t,
        t.height = 420,
        t.width = 134,
        t.x = 32,
        t.y = 63,
        t.viewport = this.list_1_i(),
        t
    },
    r.list_1_i = function() {
        var t = new eui.List;
        return this.list_1 = t,
        t.useVirtualLayout = !1,
        t.x = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    r._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 12,
        t.paddingBottom = 17,
        t.paddingLeft = 17,
        t.paddingRight = 17,
        t.paddingTop = 17,
        t
    },
    r.rb0_i = function() {
        var t = new eui.RadioButton;
        return this.rb0 = t,
        t.groupName = "test_machine_tab",
        t.height = 40,
        t.value = "1",
        t.width = 99,
        t.x = 0,
        t.y = 0,
        t.skinName = n,
        t
    },
    r.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.groupName = "test_machine_tab",
        t.height = 40,
        t.value = "2",
        t.width = 99,
        t.x = 101,
        t.y = 0,
        t.skinName = a,
        t
    },
    r.btnPvp_i = function() {
        var t = new eui.Image;
        return this.btnPvp = t,
        t.height = 40,
        t.source = "battle_test_machine_fight_btnPvp_png",
        t.width = 98,
        t.x = 102,
        t.y = 511,
        t
    },
    r.btnPve_i = function() {
        var t = new eui.Image;
        return this.btnPve = t,
        t.height = 40,
        t.source = "battle_test_machine_fight_btnPve_png",
        t.width = 98,
        t.x = 0,
        t.y = 511,
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.btnClose_i(), this._Image7_i(), this.btnHelp_i()],
        t
    },
    r._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t
    },
    r._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 36,
        t.source = "battle_test_machine_fight_title_png",
        t.width = 95,
        t.x = 112,
        t.y = 7,
        t
    },
    r.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "common_help_icon_png",
        t.visible = !1,
        t.x = 209,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineMyAttrPopSkin.exml"] = window.BattleTestMachineMyAttrPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnCancel", "btnConfirm", "txt_0", "txt_1", "txt_2", "txt_3", "txt_4", "txt_5"],
        this.height = 210,
        this.width = 442,
        this.elementsContent = [this._Image1_i(), this.btnCancel_i(), this.btnConfirm_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.txt_0_i(), this.txt_1_i(), this.txt_2_i(), this.txt_3_i(), this.txt_4_i(), this.txt_5_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.size = 20,
            t.textAlign = "center",
            t.textColor = 3492213,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 210,
        t.source = "common_pop_point_png",
        t.width = 442,
        t.x = 0,
        t.y = 0,
        t
    },
    h.btnCancel_i = function() {
        var t = new eui.Image;
        return this.btnCancel = t,
        t.height = 42,
        t.source = "battle_test_machine_my_attr_pop_btnCancel_png",
        t.width = 122,
        t.x = 79,
        t.y = 145,
        t
    },
    h.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.height = 40,
        t.source = "battle_test_machine_my_attr_pop_btnConfirm_png",
        t.width = 120,
        t.x = 242,
        t.y = 145,
        t
    },
    h._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "体力：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 35,
        t.y = 30,
        t
    },
    h._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "防御：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 35,
        t.y = 66,
        t
    },
    h._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "特防：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 35,
        t.y = 102,
        t
    },
    h._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "攻击：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 227,
        t.y = 30,
        t
    },
    h._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "特攻：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 227,
        t.y = 65,
        t
    },
    h._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "速度：",
        t.textColor = 3492213,
        t.touchEnabled = !1,
        t.x = 227,
        t.y = 102,
        t
    },
    h._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 91,
        t.y = 29,
        t
    },
    h._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 91,
        t.y = 65,
        t
    },
    h._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 91,
        t.y = 101,
        t
    },
    h._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 283,
        t.y = 29,
        t
    },
    h._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 283,
        t.y = 65,
        t
    },
    h._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "battle_test_machine_my_attr_pop_inputbg_png",
        t.width = 120,
        t.x = 283,
        t.y = 101,
        t
    },
    h.txt_0_i = function() {
        var t = new eui.TextInput;
        return this.txt_0 = t,
        t.height = 20,
        t.horizontalCenter = -69,
        t.maxChars = 6,
        t.prompt = "200",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 30,
        t.skinName = i,
        t
    },
    h.txt_1_i = function() {
        var t = new eui.TextInput;
        return this.txt_1 = t,
        t.height = 20,
        t.horizontalCenter = 120,
        t.maxChars = 6,
        t.prompt = "156",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 30,
        t.skinName = n,
        t
    },
    h.txt_2_i = function() {
        var t = new eui.TextInput;
        return this.txt_2 = t,
        t.height = 20,
        t.horizontalCenter = -69,
        t.maxChars = 6,
        t.prompt = "164",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 66,
        t.skinName = a,
        t
    },
    h.txt_3_i = function() {
        var t = new eui.TextInput;
        return this.txt_3 = t,
        t.height = 20,
        t.horizontalCenter = 120,
        t.maxChars = 6,
        t.prompt = "155",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 66,
        t.skinName = r,
        t
    },
    h.txt_4_i = function() {
        var t = new eui.TextInput;
        return this.txt_4 = t,
        t.height = 20,
        t.horizontalCenter = -69,
        t.maxChars = 6,
        t.prompt = "134",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 102,
        t.skinName = s,
        t
    },
    h.txt_5_i = function() {
        var t = new eui.TextInput;
        return this.txt_5 = t,
        t.height = 20,
        t.horizontalCenter = 120,
        t.prompt = "142",
        t.restrict = "0-9",
        t.textColor = 3492213,
        t.width = 100,
        t.y = 102,
        t.skinName = o,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachinePetItemSkin.exml"] = window.BattleTestMachinePetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_empty", "head", "nameBg", "txt_name", "img_select"],
        this.currentState = "up",
        this.height = 100,
        this.width = 100,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_empty_i(), this.head_i(), this.nameBg_i(), this.txt_name_i(), this.img_select_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("img_select", "visible", !0)]), new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.visible = !1,
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_empty_i = function() {
        var t = new eui.Image;
        return this.img_empty = t,
        t.source = "common_pet_head_empty_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 100,
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.nameBg_i = function() {
        var t = new eui.Image;
        return this.nameBg = t,
        t.height = 20,
        t.source = "battle_test_machine_pet_item_nameBg_png",
        t.visible = !0,
        t.width = 100,
        t.x = 0,
        t.y = 80,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = 1,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 82,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_fight_select_png",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineRankItemSkin.exml"] = window.BattleTestMachineRankItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rank", "score", "petName"],
        this.height = 21,
        this.width = 672,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 21,
        t.width = 672,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rank_i(), this.score_i(), this.petName_i()],
        t
    },
    i.rank_i = function() {
        var t = new eui.Label;
        return this.rank = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -276.5,
        t.size = 18,
        t.text = "1",
        t.textColor = 10009087,
        t.y = 3,
        t
    },
    i.score_i = function() {
        var t = new eui.Label;
        return this.score = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 222,
        t.size = 18,
        t.text = "4949494948524",
        t.textColor = 16514895,
        t.y = 3,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -43,
        t.size = 18,
        t.text = "精灵名称预留九个字",
        t.textColor = 4187130,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineRankSkin.exml"] = window.BattleTestMachineRankSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["close", "_list"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Group2_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 431,
        t.width = 753,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this.close_i(), this._Scroller1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "battle_test_machine_rank_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 18,
        t.y = 2,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "battle_test_machine_rank_2_png",
        t.x = 0,
        t.y = 42,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "battle_test_machine_rank_4_png",
        t.x = 18,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "排名",
        t.textColor = 13031935,
        t.x = 62,
        t.y = 46,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "精灵",
        t.textColor = 13031935,
        t.x = 294.122,
        t.y = 46,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "最高测试战斗力",
        t.textColor = 13031935,
        t.x = 509,
        t.y = 46,
        t
    },
    i.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.right = 7,
        t.source = "battle_test_machine_combat_test_close_png",
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 310,
        t.width = 672,
        t.x = 38,
        t.y = 80,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.itemRendererSkinName = BattleTestMachineRankItemSkin,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t.paddingTop = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineSkin.exml"] = window.BattleTestMachineSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img_pvp", "img_pve", "img_train"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 419,
        t.horizontalCenter = 0,
        t.width = 980,
        t.y = 128,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.img_pvp_i(), this.img_pve_i(), this.img_train_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 40,
        t.horizontalAlign = "center",
        t
    },
    i.img_pvp_i = function() {
        var t = new eui.Image;
        return this.img_pvp = t,
        t.source = "battle_test_machine_img_pvp_png",
        t.x = 563.673,
        t.y = 0,
        t
    },
    i.img_pve_i = function() {
        var t = new eui.Image;
        return this.img_pve = t,
        t.source = "battle_test_machine_img_pve_png",
        t.x = 142.268,
        t.y = 0,
        t
    },
    i.img_train_i = function() {
        var t = new eui.Image;
        return this.img_train = t,
        t.source = "battle_test_machine_img_train_png",
        t.visible = !0,
        t.x = -56,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineSkinItemSkin.exml"] = window.BattleTestMachineSkinItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "head", "select"],
        this.height = 81,
        this.width = 81,
        this.elementsContent = [this.bg_i(), this.head_i(), this.select_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 81,
        t.source = "battle_test_machine_skin_item_bg_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 79,
        t.width = 79,
        t.x = 1,
        t.y = 1,
        t
    },
    i.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.height = 93,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_skin_item_select__png",
        t.verticalCenter = 0,
        t.width = 93,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineTrainFightInfoPopSkin.exml"] = window.BattleTestMachineTrainFightInfoPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petHead1", "petCounter1", "txtNature", "nameText", "effectImg", "txtEffect", "txtLevel", "txtStudy", "txtHP", "txtSEffect", "txtAttack1", "txtAttack2", "txtDefence1", "txtDefence2", "txtSAttack2", "txtSAttack1", "txtSDefence1", "txtSDefence2", "txtSpeed1", "txtSpeed2", "txtHealth1", "txtHealth2", "myPetGrp", "enemyHead", "enemySelect", "txtAttack3", "txtDefence3", "txtSAttack3", "txtSDefence3", "txtSpeed3", "txtHealth3", "txtStudy3", "shuxinBtn", "enemyName", "effectImg3", "enePetGrp", "skillBtn_1", "skillBtn_2", "skillBtn_3", "skillBtn_4", "skillBtn_5", "txtSkillPower2", "txtSkillName2", "imgSkillIcon3", "txtSkillPP3", "txtSkillPower3", "txtSkillName3", "imgSkillIcon4", "txtSkillPP4", "txtSkillPower4", "txtSkillName4", "imgSkillIcon1", "txtSkillPP1", "txtSkillPower1", "txtSkillName1", "imgSkillIcon2", "txtSkillPP2", "fifthSign", "txtSkill5", "skillGrp", "closeBtn"],
        this.height = 540,
        this.width = 610,
        this.elementsContent = [this._Image1_i(), this.myPetGrp_i(), this.enePetGrp_i(), this.skillGrp_i(), this.closeBtn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 540,
        t.source = "battle_test_machine_train_fight_info_tankuang_png",
        t.visible = !0,
        t.width = 610,
        t.x = 0,
        t.y = 0,
        t
    },
    i.myPetGrp_i = function() {
        var t = new eui.Group;
        return this.myPetGrp = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this._Group3_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Label1_i(), this._Image2_i(), this._Label2_i(), this._Image3_i(), this._Label3_i(), this._Image4_i(), this._Label4_i(), this._Image5_i(), this._Label5_i(), this._Image6_i(), this._Label6_i(), this._Image7_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Label10_i(), this._Label11_i(), this._Label12_i(), this._Image8_i(), this._Image9_i(), this._Image10_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 77,
        t.y = 163,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 177,
        t.y = 166,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 391,
        t.y = 163,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 488,
        t.y = 166,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 77,
        t.y = 195,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 177,
        t.y = 198,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 390,
        t.y = 195,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 488,
        t.y = 198,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 233,
        t.y = 162,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 332,
        t.y = 166,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力： ",
        t.textColor = 11520511,
        t.x = 234,
        t.y = 194,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 11,
        t.source = "battle_test_machine_train_fight_info_o_png",
        t.width = 11,
        t.x = 332,
        t.y = 198,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "天赋：",
        t.textColor = 11520511,
        t.x = 135,
        t.y = 106,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "等级：",
        t.textColor = 11520511,
        t.x = 135,
        t.y = 82,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "性格：",
        t.textColor = 11520511,
        t.x = 292,
        t.y = 82,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性：",
        t.textColor = 11520511,
        t.x = 292,
        t.y = 105,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力上限：",
        t.textColor = 11520511,
        t.x = 448,
        t.y = 82,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特性：",
        t.textColor = 11520511,
        t.x = 447,
        t.y = 105,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 14,
        t.y = 139,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 14,
        t.y = 237,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 14,
        t.y = 341,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 38,
        t.y = 50,
        t.elementsContent = [this.petHead1_i(), this.petCounter1_i(), this.txtNature_i(), this._Group2_i(), this.txtEffect_i(), this.txtLevel_i(), this.txtStudy_i(), this.txtHP_i(), this.txtSEffect_i(), this.txtAttack1_i(), this.txtAttack2_i(), this.txtDefence1_i(), this.txtDefence2_i(), this.txtSAttack2_i(), this.txtSAttack1_i(), this.txtSDefence1_i(), this.txtSDefence2_i(), this.txtSpeed1_i(), this.txtSpeed2_i(), this.txtHealth1_i(), this.txtHealth2_i()],
        t
    },
    i.petHead1_i = function() {
        var t = new eui.Group;
        return this.petHead1 = t,
        t.x = 0,
        t.y = 0,
        t
    },
    i.petCounter1_i = function() {
        var t = new eui.Group;
        return this.petCounter1 = t,
        t.height = 95,
        t.horizontalCenter = 0,
        t.width = 400,
        t.y = 192,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 18,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i.txtNature_i = function() {
        var t = new eui.Label;
        return this.txtNature = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 6027519,
        t.x = 146,
        t.y = 56,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 97,
        t.y = 0,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.nameText_i(), this.effectImg_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 18,
        t
    },
    i.nameText_i = function() {
        var t = new eui.Label;
        return this.nameText = t,
        t.fontFamily = "MFShangHei",
        t.height = 24,
        t.size = 20,
        t.text = "精灵名称",
        t.textColor = 16514896,
        t.verticalAlign = "middle",
        t.visible = !0,
        t.x = 7.642,
        t.y = 19.87,
        t
    },
    i.effectImg_i = function() {
        var t = new eui.Image;
        return this.effectImg = t,
        t.source = "battle_test_machine_train_fight_info_effectImg_png",
        t.width = 26,
        t.y = -2,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "活泼",
        t.textColor = 6027519,
        t.x = 303,
        t.y = 31,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "31",
        t.textColor = 6027519,
        t.x = 146,
        t.y = 33,
        t
    },
    i.txtStudy_i = function() {
        var t = new eui.Label;
        return this.txtStudy = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "31",
        t.textColor = 6027519,
        t.x = 303,
        t.y = 56,
        t
    },
    i.txtHP_i = function() {
        var t = new eui.Label;
        return this.txtHP = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "22/20",
        t.textColor = 6027519,
        t.x = 494,
        t.y = 32,
        t
    },
    i.txtSEffect_i = function() {
        var t = new eui.Label;
        return this.txtSEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "31",
        t.textColor = 6027519,
        t.x = 458,
        t.y = 56,
        t
    },
    i.txtAttack1_i = function() {
        var t = new eui.Label;
        return this.txtAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5962239,
        t.x = 107,
        t.y = 113,
        t
    },
    i.txtAttack2_i = function() {
        var t = new eui.Label;
        return this.txtAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 152,
        t.y = 113,
        t
    },
    i.txtDefence1_i = function() {
        var t = new eui.Label;
        return this.txtDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5962239,
        t.x = 419,
        t.y = 113,
        t
    },
    i.txtDefence2_i = function() {
        var t = new eui.Label;
        return this.txtDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 464,
        t.y = 113,
        t
    },
    i.txtSAttack2_i = function() {
        var t = new eui.Label;
        return this.txtSAttack2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 152,
        t.y = 145,
        t
    },
    i.txtSAttack1_i = function() {
        var t = new eui.Label;
        return this.txtSAttack1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5962239,
        t.x = 107,
        t.y = 145,
        t
    },
    i.txtSDefence1_i = function() {
        var t = new eui.Label;
        return this.txtSDefence1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5962239,
        t.x = 419,
        t.y = 145,
        t
    },
    i.txtSDefence2_i = function() {
        var t = new eui.Label;
        return this.txtSDefence2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 464,
        t.y = 145,
        t
    },
    i.txtSpeed1_i = function() {
        var t = new eui.Label;
        return this.txtSpeed1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 5962239,
        t.x = 263,
        t.y = 113,
        t
    },
    i.txtSpeed2_i = function() {
        var t = new eui.Label;
        return this.txtSpeed2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 308,
        t.y = 113,
        t
    },
    i.txtHealth1_i = function() {
        var t = new eui.Label;
        return this.txtHealth1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "right",
        t.textColor = 5962239,
        t.width = 53.435,
        t.x = 236.565,
        t.y = 145,
        t
    },
    i.txtHealth2_i = function() {
        var t = new eui.Label;
        return this.txtHealth2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textColor = 16514895,
        t.x = 308,
        t.y = 145,
        t
    },
    i.enePetGrp_i = function() {
        var t = new eui.Group;
        return this.enePetGrp = t,
        t.visible = !1,
        t.x = 14,
        t.y = 48,
        t.elementsContent = [this._Group4_i(), this._Group6_i()],
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this._Label13_i(), this._Label14_i(), this._Label15_i(), this._Label16_i(), this._Label17_i(), this._Label18_i(), this._Label19_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Label20_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.alpha = .25,
        t.height = 100,
        t.scale9Grid = new egret.Rectangle(1, 0, 8, 1),
        t.source = "common_line_01_s9_png",
        t.width = 33,
        t.x = 13,
        t.y = 0,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "攻击：",
        t.textColor = 11520511,
        t.x = 79,
        t.y = 227,
        t
    },
    i._Label14_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "防御：",
        t.textColor = 11520511,
        t.x = 385,
        t.y = 227,
        t
    },
    i._Label15_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特攻：",
        t.textColor = 11520511,
        t.x = 79,
        t.y = 259,
        t
    },
    i._Label16_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "特防：",
        t.textColor = 11520511,
        t.x = 384,
        t.y = 259,
        t
    },
    i._Label17_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "速度：",
        t.textColor = 11520511,
        t.x = 231,
        t.y = 226,
        t
    },
    i._Label18_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "体力： ",
        t.textColor = 11520511,
        t.x = 232,
        t.y = 258,
        t
    },
    i._Label19_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性：",
        t.textColor = 11520511,
        t.x = 227,
        t.y = 178,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 0,
        t.y = 110,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 0,
        t.y = 208,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "battle_test_machine_train_fight_info_line_png",
        t.width = 577,
        t.x = 0,
        t.y = 293,
        t
    },
    i._Label20_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.height = 83,
        t.size = 20,
        t.text = "敌方阵容",
        t.textColor = 11520511,
        t.width = 22.954,
        t.x = 19,
        t.y = 10,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 111,
        t.y = 5,
        t.elementsContent = [this.enemyHead_i(), this.enemySelect_i(), this.txtAttack3_i(), this.txtDefence3_i(), this.txtSAttack3_i(), this.txtSDefence3_i(), this.txtSpeed3_i(), this.txtHealth3_i(), this.txtStudy3_i(), this.shuxinBtn_i(), this._Group5_i()],
        t
    },
    i.enemyHead_i = function() {
        var t = new eui.Group;
        return this.enemyHead = t,
        t.x = 26,
        t.y = 122,
        t
    },
    i.enemySelect_i = function() {
        var t = new eui.Group;
        return this.enemySelect = t,
        t.height = 102,
        t.maxWidth = 510,
        t.width = 512,
        t.x = -58,
        t.y = 0,
        t.layout = this._HorizontalLayout3_i(),
        t
    },
    i._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 13,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i.txtAttack3_i = function() {
        var t = new eui.Label;
        return this.txtAttack3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 15,
        t.y = 222,
        t
    },
    i.txtDefence3_i = function() {
        var t = new eui.Label;
        return this.txtDefence3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 319,
        t.y = 222,
        t
    },
    i.txtSAttack3_i = function() {
        var t = new eui.Label;
        return this.txtSAttack3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 15,
        t.y = 254,
        t
    },
    i.txtSDefence3_i = function() {
        var t = new eui.Label;
        return this.txtSDefence3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 319,
        t.y = 254,
        t
    },
    i.txtSpeed3_i = function() {
        var t = new eui.Label;
        return this.txtSpeed3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 167,
        t.y = 222,
        t
    },
    i.txtHealth3_i = function() {
        var t = new eui.Label;
        return this.txtHealth3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 5962239,
        t.x = 167,
        t.y = 254,
        t
    },
    i.txtStudy3_i = function() {
        var t = new eui.Label;
        return this.txtStudy3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "31",
        t.textColor = 6027519,
        t.x = 164,
        t.y = 174,
        t
    },
    i.shuxinBtn_i = function() {
        var t = new eui.Image;
        return this.shuxinBtn = t,
        t.height = 30,
        t.source = "battle_test_machine_train_fight_info_nameText3_png",
        t.visible = !0,
        t.width = 81,
        t.x = 264,
        t.y = 167,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 115,
        t.y = 120,
        t.layout = this._HorizontalLayout4_i(),
        t.elementsContent = [this.enemyName_i(), this.effectImg3_i()],
        t
    },
    i._HorizontalLayout4_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 18,
        t
    },
    i.enemyName_i = function() {
        var t = new eui.Label;
        return this.enemyName = t,
        t.fontFamily = "MFShangHei",
        t.height = 24,
        t.size = 20,
        t.text = "精灵名称",
        t.textColor = 16514896,
        t.verticalAlign = "middle",
        t.x = 0,
        t.y = 0,
        t
    },
    i.effectImg3_i = function() {
        var t = new eui.Image;
        return this.effectImg3 = t,
        t.height = 22,
        t.source = "battle_test_machine_train_fight_info_effectImg_png",
        t.visible = !0,
        t.width = 26,
        t.x = 204,
        t.y = -2,
        t
    },
    i.skillGrp_i = function() {
        var t = new eui.Group;
        return this.skillGrp = t,
        t.visible = !0,
        t.x = 140,
        t.y = 359,
        t.elementsContent = [this.skillBtn_1_i(), this.skillBtn_2_i(), this.skillBtn_3_i(), this.skillBtn_4_i(), this.skillBtn_5_i(), this.txtSkillPower2_i(), this.txtSkillName2_i(), this.imgSkillIcon3_i(), this.txtSkillPP3_i(), this.txtSkillPower3_i(), this.txtSkillName3_i(), this.imgSkillIcon4_i(), this.txtSkillPP4_i(), this.txtSkillPower4_i(), this.txtSkillName4_i(), this.imgSkillIcon1_i(), this.txtSkillPP1_i(), this.txtSkillPower1_i(), this.txtSkillName1_i(), this.imgSkillIcon2_i(), this.txtSkillPP2_i(), this.fifthSign_i(), this.txtSkill5_i()],
        t
    },
    i.skillBtn_1_i = function() {
        var t = new eui.Image;
        return this.skillBtn_1 = t,
        t.height = 73,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_s_png",
        t.width = 162,
        t.x = 0,
        t.y = 0,
        t
    },
    i.skillBtn_2_i = function() {
        var t = new eui.Image;
        return this.skillBtn_2 = t,
        t.height = 73,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_s_png",
        t.width = 162,
        t.x = 168,
        t.y = 0,
        t
    },
    i.skillBtn_3_i = function() {
        var t = new eui.Image;
        return this.skillBtn_3 = t,
        t.height = 73,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_s_png",
        t.width = 162,
        t.x = 0,
        t.y = 79,
        t
    },
    i.skillBtn_4_i = function() {
        var t = new eui.Image;
        return this.skillBtn_4 = t,
        t.height = 73,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_s_png",
        t.width = 162,
        t.x = 168,
        t.y = 79,
        t
    },
    i.skillBtn_5_i = function() {
        var t = new eui.Image;
        return this.skillBtn_5 = t,
        t.height = 99,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_sssss_png",
        t.width = 83,
        t.x = 124,
        t.y = 26,
        t
    },
    i.txtSkillPower2_i = function() {
        var t = new eui.Label;
        return this.txtSkillPower2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力:100 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 254.13,
        t.y = 29.66,
        t
    },
    i.txtSkillName2_i = function() {
        var t = new eui.Label;
        return this.txtSkillName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "圣域·征战四方",
        t.textAlign = "right",
        t.textColor = 15068927,
        t.touchEnabled = !1,
        t.x = 209.13,
        t.y = 6.66,
        t
    },
    i.imgSkillIcon3_i = function() {
        var t = new eui.Image;
        return this.imgSkillIcon3 = t,
        t.height = 27,
        t.source = "battle_test_machine_train_fight_info_imgSkillIcon_png",
        t.touchEnabled = !1,
        t.width = 24,
        t.x = 131.13,
        t.y = 121.51,
        t
    },
    i.txtSkillPP3_i = function() {
        var t = new eui.Label;
        return this.txtSkillPP3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP:20/20 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 5.13,
        t.y = 129.66,
        t
    },
    i.txtSkillPower3_i = function() {
        var t = new eui.Label;
        return this.txtSkillPower3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力:100 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 5.13,
        t.y = 108.66,
        t
    },
    i.txtSkillName3_i = function() {
        var t = new eui.Label;
        return this.txtSkillName3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "圣域·征战四方",
        t.textColor = 15068927,
        t.touchEnabled = !1,
        t.x = 4.13,
        t.y = 85.66,
        t
    },
    i.imgSkillIcon4_i = function() {
        var t = new eui.Image;
        return this.imgSkillIcon4 = t,
        t.height = 27,
        t.source = "battle_test_machine_train_fight_info_imgSkillIcon_png",
        t.touchEnabled = !1,
        t.width = 24,
        t.x = 171.13,
        t.y = 121.51,
        t
    },
    i.txtSkillPP4_i = function() {
        var t = new eui.Label;
        return this.txtSkillPP4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP:20/20 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 253.13,
        t.y = 130.66,
        t
    },
    i.txtSkillPower4_i = function() {
        var t = new eui.Label;
        return this.txtSkillPower4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力:100 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 254.13,
        t.y = 108.66,
        t
    },
    i.txtSkillName4_i = function() {
        var t = new eui.Label;
        return this.txtSkillName4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "圣域·征战四方",
        t.textAlign = "right",
        t.textColor = 15068927,
        t.touchEnabled = !1,
        t.x = 209.13,
        t.y = 85.66,
        t
    },
    i.imgSkillIcon1_i = function() {
        var t = new eui.Image;
        return this.imgSkillIcon1 = t,
        t.height = 27,
        t.source = "battle_test_machine_train_fight_info_imgSkillIcon_png",
        t.touchEnabled = !1,
        t.width = 24,
        t.x = 131.13,
        t.y = .51,
        t
    },
    i.txtSkillPP1_i = function() {
        var t = new eui.Label;
        return this.txtSkillPP1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP:20/20 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 5.13,
        t.y = 51.66,
        t
    },
    i.txtSkillPower1_i = function() {
        var t = new eui.Label;
        return this.txtSkillPower1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "威力:100 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 5.13,
        t.y = 29.66,
        t
    },
    i.txtSkillName1_i = function() {
        var t = new eui.Label;
        return this.txtSkillName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "圣域·征战四方",
        t.textColor = 15068927,
        t.touchEnabled = !1,
        t.x = 4.13,
        t.y = 6.66,
        t
    },
    i.imgSkillIcon2_i = function() {
        var t = new eui.Image;
        return this.imgSkillIcon2 = t,
        t.height = 27,
        t.source = "battle_test_machine_train_fight_info_imgSkillIcon_png",
        t.touchEnabled = !1,
        t.width = 24,
        t.x = 171.13,
        t.y = .51,
        t
    },
    i.txtSkillPP2_i = function() {
        var t = new eui.Label;
        return this.txtSkillPP2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "PP:20/20 ",
        t.textColor = 6027519,
        t.touchEnabled = !1,
        t.x = 253.13,
        t.y = 51.66,
        t
    },
    i.fifthSign_i = function() {
        var t = new eui.Image;
        return this.fifthSign = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_info_fifthSign_1_png",
        t.touchEnabled = !1,
        t.width = 67,
        t.x = 132,
        t.y = 54.12,
        t
    },
    i.txtSkill5_i = function() {
        var t = new eui.Label;
        return this.txtSkill5 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 12,
        t.text = "圣灵救世光",
        t.textColor = 16514895,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 134,
        t.y = 80.12,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.height = 35,
        t.source = "battle_test_machine_combat_test_close_png",
        t.visible = !0,
        t.width = 35,
        t.x = 571.976,
        t.y = 3.504,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineTrainFightSkin.exml"] = window.BattleTestMachineTrainFightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet", "petInfoBtn", "resetBtn", "center", "rb_mine", "rb_temp", "searchBg", "txtSearch", "searchBtn", "typeBtn", "search_grp", "list_0", "scr_0", "noSelect_sign", "select_grp", "left", "rb0", "rb1", "list_1", "scr_1", "startFightBtn", "right", "equipText", "equipBtn", "achieveText", "achieveBtn"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_train_fight_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "battle_test_machine_train_fight_fight_rb_up_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.lineSpacing = 3,
            t.size = 18,
            t.text = "我的精灵",
            t.touchEnabled = !1,
            t.y = 9,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_train_fight_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "battle_test_machine_train_fight_fight_rb_up_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.lineSpacing = 3,
            t.size = 18,
            t.text = "试用精灵",
            t.touchEnabled = !1,
            t.y = 9,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.size = 16,
            t.textColor = 13097725,
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.size = 16,
            t.textColor = 13097725,
            t.touchEnabled = !1,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_train_fight_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "battle_test_machine_train_fight_fight_rb_up_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.lineSpacing = 3,
            t.size = 18,
            t.text = "己方",
            t.touchEnabled = !1,
            t.x = 28,
            t.y = 9,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7242936)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "battle_test_machine_train_fight_fight_rb_down_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "battle_test_machine_train_fight_fight_rb_up_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.lineSpacing = 3,
            t.size = 18,
            t.text = "敌方",
            t.touchEnabled = !1,
            t.x = 28,
            t.y = 9,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_train_fight_pve_bg_png",
        t.verticalCenter = 0,
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 500,
        t.left = 10,
        t.right = 10,
        t.verticalCenter = -10,
        t.visible = !0,
        t.elementsContent = [this.center_i(), this.left_i(), this.right_i(), this._Group1_i()],
        t
    },
    o.center_i = function() {
        var t = new eui.Group;
        return this.center = t,
        t.height = 640,
        t.horizontalCenter = 0,
        t.touchEnabled = !1,
        t.verticalCenter = 0,
        t.width = 760,
        t.elementsContent = [this.pet_i(), this.petInfoBtn_i(), this.resetBtn_i()],
        t
    },
    o.pet_i = function() {
        var t = new eui.Group;
        return this.pet = t,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.x = 300,
        t.y = 325,
        t
    },
    o.petInfoBtn_i = function() {
        var t = new eui.Image;
        return this.petInfoBtn = t,
        t.height = 55,
        t.horizontalCenter = 256.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_fight_petInfoBtn_png",
        t.width = 73,
        t.y = 559,
        t
    },
    o.resetBtn_i = function() {
        var t = new eui.Image;
        return this.resetBtn = t,
        t.height = 55,
        t.horizontalCenter = 256.5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "battle_test_machine_train_resetBtn_png",
        t.width = 73,
        t.y = 490,
        t
    },
    o.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.height = 535,
        t.left = 0,
        t.visible = !0,
        t.width = 250,
        t.x = 0,
        t.y = 5,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.select_grp_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = -50,
        t.left = -100,
        t.right = -5,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "greyBox_png",
        t.top = -75,
        t.visible = !0,
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.bottom = 5,
        t.left = 10,
        t.right = 10,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "darkBox_png",
        t.top = 40,
        t.visible = !0,
        t
    },
    o.select_grp_i = function() {
        var t = new eui.Group;
        return this.select_grp = t,
        t.visible = !0,
        t.x = 10,
        t.y = 0,
        t.elementsContent = [this.rb_mine_i(), this.rb_temp_i(), this.search_grp_i(), this.scr_0_i(), this.noSelect_sign_i()],
        t
    },
    o.rb_mine_i = function() {
        var t = new eui.RadioButton;
        return this.rb_mine = t,
        t.groupName = "select_tab",
        t.height = 33,
        t.value = "1",
        t.width = 101,
        t.x = 13,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_temp_i = function() {
        var t = new eui.RadioButton;
        return this.rb_temp = t,
        t.groupName = "select_tab",
        t.height = 33,
        t.touchChildren = !1,
        t.touchEnabled = !0,
        t.value = "2",
        t.width = 101,
        t.x = 116,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.search_grp_i = function() {
        var t = new eui.Group;
        return this.search_grp = t,
        t.visible = !0,
        t.x = 8,
        t.y = 49,
        t.elementsContent = [this.searchBg_i(), this.txtSearch_i(), this.searchBtn_i(), this.typeBtn_i()],
        t
    },
    o.searchBg_i = function() {
        var t = new eui.Image;
        return this.searchBg = t,
        t.height = 30,
        t.source = "battle_test_machine_train_fight_searchBg_png",
        t.width = 153.455,
        t.x = 57.545,
        t.y = 0,
        t
    },
    o.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.height = 18,
        t.prompt = "输入精灵名或ID",
        t.touchEnabled = !1,
        t.width = 119.441,
        t.x = 63,
        t.y = 7,
        t.skinName = a,
        t
    },
    o.searchBtn_i = function() {
        var t = new eui.Image;
        return this.searchBtn = t,
        t.height = 30,
        t.source = "battle_test_machine_train_fight_findBtn_png",
        t.width = 30,
        t.x = 185,
        t.y = 0,
        t
    },
    o.typeBtn_i = function() {
        var t = new eui.Image;
        return this.typeBtn = t,
        t.height = 30,
        t.source = "battle_test_machine_train_fight_typeBtn_png",
        t.width = 49,
        t.x = 0,
        t.y = 0,
        t
    },
    o.scr_0_i = function() {
        var t = new eui.Scroller;
        return this.scr_0 = t,
        t.height = 430,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 210,
        t.x = 10,
        t.y = 95,
        t.viewport = this.list_0_i(),
        t
    },
    o.list_0_i = function() {
        var t = new eui.List;
        return this.list_0 = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 24,
        t.orientation = "rows",
        t.paddingBottom = 17,
        t.paddingLeft = 17,
        t.paddingRight = 17,
        t.paddingTop = 17,
        t.verticalGap = 14,
        t
    },
    o.noSelect_sign_i = function() {
        var t = new eui.Label;
        return this.noSelect_sign = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 25,
        t.text = "此关卡为固定精灵挑战，无法选择出战精灵！",
        t.textAlign = "center",
        t.visible = !1,
        t.width = 215,
        t.y = 200,
        t
    },
    o.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.height = 535,
        t.right = -5,
        t.top = -8,
        t.visible = !0,
        t.width = 220,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.rb0_i(), this.rb1_i(), this.scr_1_i(), this.startFightBtn_i()],
        t
    },
    o._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = -50,
        t.left = -5,
        t.right = -100,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "greyBox_png",
        t.top = -74,
        t
    },
    o._Image4_i = function() {
        var t = new eui.Image;
        return t.bottom = -19,
        t.left = 10,
        t.right = 10,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "darkBox_png",
        t.top = 38,
        t
    },
    o.rb0_i = function() {
        var t = new eui.RadioButton;
        return this.rb0 = t,
        t.groupName = "ensure_tab",
        t.height = 33,
        t.value = "1",
        t.width = 100,
        t.x = 10,
        t.y = 0,
        t.skinName = r,
        t
    },
    o.rb1_i = function() {
        var t = new eui.RadioButton;
        return this.rb1 = t,
        t.groupName = "ensure_tab",
        t.height = 33,
        t.value = "2",
        t.width = 100,
        t.x = 111,
        t.y = 0,
        t.skinName = s,
        t
    },
    o.scr_1_i = function() {
        var t = new eui.Scroller;
        return this.scr_1 = t,
        t.height = 450,
        t.horizontalCenter = 0,
        t.width = 165,
        t.y = 44,
        t.viewport = this.list_1_i(),
        t
    },
    o.list_1_i = function() {
        var t = new eui.List;
        return this.list_1 = t,
        t.useVirtualLayout = !1,
        t.x = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    o._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    o.startFightBtn_i = function() {
        var t = new eui.Image;
        return this.startFightBtn = t,
        t.height = 46,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_train_fight_startFightBtn_png",
        t.width = 134,
        t.y = 500,
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.left = 286,
        t.y = -5,
        t.elementsContent = [this.equipBtn_i(), this.achieveBtn_i()],
        t
    },
    o.equipBtn_i = function() {
        var t = new eui.Group;
        return this.equipBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this.equipText_i()],
        t
    },
    o._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "battle_test_machine_train_fight_detailBtnBg_png",
        t.width = 214,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "battle_test_machine_train_fight_equipSign_png",
        t.width = 40,
        t.x = 15,
        t.y = 8,
        t
    },
    o.equipText_i = function() {
        var t = new eui.Label;
        return this.equipText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装名字七个字",
        t.textColor = 16514896,
        t.x = 56,
        t.y = 17,
        t
    },
    o.achieveBtn_i = function() {
        var t = new eui.Group;
        return this.achieveBtn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 0,
        t.y = 47,
        t.elementsContent = [this._Image7_i(), this._Image8_i(), this.achieveText_i()],
        t
    },
    o._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "battle_test_machine_train_fight_detailBtnBg_png",
        t.width = 214,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "battle_test_machine_train_fight_achieveSign_png",
        t.width = 41,
        t.x = 14,
        t.y = 8,
        t
    },
    o.achieveText_i = function() {
        var t = new eui.Label;
        return this.achieveText = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "称号名字七个字",
        t.textColor = 16514896,
        t.x = 57,
        t.y = 17,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineTrainFightSuitAchieveSkin.exml"] = window.BattleTestMachineTrainFightSuitAchieveSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["closeBtn", "titleTxt", "txt_nameTitle", "grp_suitIcon", "Txt_effTitle", "Txt_effTitle0", "Txt_eff", "scroller_desc", "Txt_eff0", "scroller_desc0", "suit_grp", "achieveIcon", "txtAchieve", "txtEff", "txtNoEff", "txtEffect", "achieve_grp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.closeBtn_i(), this.titleTxt_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(161, 95, 160, 96),
        t.source = "title_pop_2022_img_482X286_bg_png",
        t.verticalCenter = 0,
        t.width = 591,
        t
    },
    i.closeBtn_i = function() {
        var t = new eui.Image;
        return this.closeBtn = t,
        t.right = 283,
        t.source = "common_dialog_btnclose_png",
        t.y = 106.684,
        t
    },
    i.titleTxt_i = function() {
        var t = new eui.Label;
        return this.titleTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "套装",
        t.textColor = 14534205,
        t.visible = !1,
        t.x = 278,
        t.y = 111.184,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 165.74,
        t.elementsContent = [this._Image2_i(), this.txt_nameTitle_i(), this.grp_suitIcon_i(), this.suit_grp_i(), this.achieve_grp_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.alpha = .33,
        t.height = 31,
        t.horizontalCenter = 0,
        t.source = "common_tips_pop_clothes_line_1_png",
        t.y = 0,
        t
    },
    i.txt_nameTitle_i = function() {
        var t = new eui.Label;
        return this.txt_nameTitle = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "套装",
        t.textColor = 12046335,
        t.y = 6.96,
        t
    },
    i.grp_suitIcon_i = function() {
        var t = new eui.Group;
        return this.grp_suitIcon = t,
        t.height = 64,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.y = 50,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.paddingLeft = 10,
        t.paddingRight = 10,
        t
    },
    i.suit_grp_i = function() {
        var t = new eui.Group;
        return this.suit_grp = t,
        t.horizontalCenter = 0,
        t.visible = !0,
        t.y = 154,
        t.elementsContent = [this._Image3_i(), this.Txt_effTitle_i(), this.Txt_effTitle0_i(), this.scroller_desc_i(), this.scroller_desc0_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 207.367,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "car_pop_view_contentbg_png",
        t.width = 547.916,
        t.x = -18,
        t.y = -23.234,
        t
    },
    i.Txt_effTitle_i = function() {
        var t = new eui.Label;
        return this.Txt_effTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "套装特效：",
        t.textColor = 13820671,
        t.x = 24,
        t.y = -10.7,
        t
    },
    i.Txt_effTitle0_i = function() {
        var t = new eui.Label;
        return this.Txt_effTitle0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "装扮特效：",
        t.textColor = 13820671,
        t.x = 24,
        t.y = 110.23,
        t
    },
    i.scroller_desc_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc = t,
        t.height = 81.933,
        t.width = 490.614,
        t.x = 21.068,
        t.y = 14.321,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 0,
        t.top = 0,
        t.elementsContent = [this.Txt_eff_i()],
        t
    },
    i.Txt_eff_i = function() {
        var t = new eui.Label;
        return this.Txt_eff = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16.0189320279903,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的",
        t.textColor = 8757203,
        t.width = 490,
        t.y = 2,
        t
    },
    i.scroller_desc0_i = function() {
        var t = new eui.Scroller;
        return this.scroller_desc0 = t,
        t.height = 54.406,
        t.width = 490.614,
        t.x = 21.068,
        t.y = 137.321,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.Txt_eff0_i()],
        t
    },
    i.Txt_eff0_i = function() {
        var t = new eui.Label;
        return this.Txt_eff0 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16.0189320279903,
        t.text = "赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装，能驾驭狂风，借力上青云。赛尔们在毛线中获得套装啊实打实大苏打实打实大苏打实打实的",
        t.textColor = 8757203,
        t.width = 490,
        t.y = 2,
        t
    },
    i.achieve_grp_i = function() {
        var t = new eui.Group;
        return this.achieve_grp = t,
        t.horizontalCenter = 0,
        t.visible = !1,
        t.y = 47,
        t.elementsContent = [this.achieveIcon_i(), this._Label1_i(), this.txtAchieve_i(), this._Group3_i()],
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.height = 50,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 50,
        t.x = 25.481,
        t.y = 13,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "对应成就：",
        t.textColor = 10733565,
        t.x = 108,
        t.y = 19,
        t
    },
    i.txtAchieve_i = function() {
        var t = new eui.Label;
        return this.txtAchieve = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "二十个字以内二十个字以内二十个字以内二十个字",
        t.textColor = 8757203,
        t.x = 108,
        t.y = 47,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 83,
        t.elementsContent = [this._Image4_i(), this.txtEff_i(), this.txtNoEff_i(), this.txtEffect_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 195.133,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "car_pop_view_contentbg_png",
        t.width = 547.916,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtEff_i = function() {
        var t = new eui.Label;
        return this.txtEff = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "属性称号效果：",
        t.textColor = 6153817,
        t.x = 17.776,
        t.y = 14.3,
        t
    },
    i.txtNoEff_i = function() {
        var t = new eui.Label;
        return this.txtNoEff = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "纪念称号无效果",
        t.textColor = 6153817,
        t.visible = !0,
        t.x = 17.776,
        t.y = 14.3,
        t
    },
    i.txtEffect_i = function() {
        var t = new eui.Label;
        return this.txtEffect = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "背包内精灵全属性+10%；自身造成的致命一击伤害提升15%；攻击技能有1/16的几率打出致命一击，每次使用增加1/16，",
        t.textColor = 8757203,
        t.width = 508.004,
        t.x = 17.776,
        t.y = 40.5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineTrainSelectSkin.exml"] = window.BattleTestMachineTrainSelectSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btn_list", "select_text", "info_text", "tarin_start_btn", "rest_text", "enemy_list", "prize_list", "info_grp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 500,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 1050,
        t.elementsContent = [this._Scroller1_i(), this.info_grp_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 538.312,
        t.width = 407.35,
        t.x = -7.733,
        t.y = -6.257,
        t.viewport = this.btn_list_i(),
        t
    },
    i.btn_list_i = function() {
        var t = new eui.List;
        return this.btn_list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    i.info_grp_i = function() {
        var t = new eui.Group;
        return this.info_grp = t,
        t.alpha = .2,
        t.visible = !0,
        t.x = 410,
        t.y = -15,
        t.elementsContent = [this._Image1_i(), this._Label1_i(), this._Label2_i(), this.select_text_i(), this.info_text_i(), this.tarin_start_btn_i(), this._Label3_i(), this.rest_text_i(), this._Scroller2_i(), this._Scroller3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 550,
        t.source = "battle_test_machine_train_select_info_bg_png",
        t.visible = !0,
        t.width = 670,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "阵容选择:",
        t.textColor = 8631026,
        t.x = 55,
        t.y = 196,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "敌方描述:",
        t.textColor = 8631026,
        t.x = 55,
        t.y = 223,
        t
    },
    i.select_text_i = function() {
        var t = new eui.Label;
        return this.select_text = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "   ",
        t.textColor = 4187130,
        t.x = 151,
        t.y = 196,
        t
    },
    i.info_text_i = function() {
        var t = new eui.Label;
        return this.info_text = t,
        t.fontFamily = "MFShangHei",
        t.height = 113.703,
        t.size = 18,
        t.text = " \n \n \n \n \n。",
        t.textColor = 4187130,
        t.width = 480,
        t.x = 151,
        t.y = 223,
        t
    },
    i.tarin_start_btn_i = function() {
        var t = new eui.Image;
        return this.tarin_start_btn = t,
        t.height = 46,
        t.source = "battle_test_machine_tarin_start_btn_png",
        t.width = 134,
        t.x = 266,
        t.y = 456.33,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 8631282,
        t.x = 232,
        t.y = 510.965,
        t
    },
    i.rest_text_i = function() {
        var t = new eui.Label;
        return this.rest_text = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "06/10",
        t.textColor = 16514896,
        t.x = 393,
        t.y = 510.965,
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 109.117,
        t.horizontalCenter = -5,
        t.maxWidth = 590,
        t.y = 50,
        t.viewport = this.enemy_list_i(),
        t
    },
    i.enemy_list_i = function() {
        var t = new eui.List;
        return this.enemy_list = t,
        t.horizontalCenter = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 16,
        t.horizontalAlign = "center",
        t.paddingLeft = 10,
        t.paddingRight = 10,
        t.verticalAlign = "middle",
        t
    },
    i._Scroller3_i = function() {
        var t = new eui.Scroller;
        return t.height = 85,
        t.horizontalCenter = -5,
        t.maxWidth = 590,
        t.y = 366,
        t.viewport = this.prize_list_i(),
        t
    },
    i.prize_list_i = function() {
        var t = new eui.List;
        return this.prize_list = t,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 24,
        t.horizontalAlign = "center",
        t.paddingLeft = 10,
        t.paddingRight = 10,
        t.verticalAlign = "middle",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattleTestMachineTrainSkin.exml"] = window.BattleTestMachineTrainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "train_img_custom", "train_img_pve", "train_img_pvp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.train_img_custom_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_bg_jpg",
        t.verticalCenter = 0,
        t
    },
    i.train_img_custom_i = function() {
        var t = new eui.Image;
        return this.train_img_custom = t,
        t.height = 446,
        t.source = "battle_test_machine_train_img_pvp_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t.width = 301,
        t.x = 730,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 500,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 1050,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.train_img_pve_i(), this.train_img_pvp_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 160,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i.train_img_pve_i = function() {
        var t = new eui.Image;
        return this.train_img_pve = t,
        t.height = 449,
        t.source = "battle_test_machine_train_img_pve_png",
        t.verticalCenter = 0,
        t.width = 310,
        t.x = 0,
        t
    },
    i.train_img_pvp_i = function() {
        var t = new eui.Image;
        return this.train_img_pvp = t,
        t.height = 446,
        t.source = "battle_test_machine_train_img_pvp_png",
        t.verticalCenter = 0,
        t.width = 301,
        t.x = 370,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/BattleTestMachinePetItemSkin.exml"] = window.BattleTestMachinePetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_empty", "head", "nameBg", "txt_name", "img_select"],
        this.currentState = "up",
        this.height = 100,
        this.width = 100,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.img_empty_i(), this.head_i(), this.nameBg_i(), this.txt_name_i(), this.img_select_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("img_select", "visible", !0)]), new eui.State("up", [new eui.SetProperty("img_select", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_avatar_bg_size_100_100_png",
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.visible = !1,
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_empty_i = function() {
        var t = new eui.Image;
        return this.img_empty = t,
        t.source = "common_pet_head_empty_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 100,
        t.width = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.nameBg_i = function() {
        var t = new eui.Image;
        return this.nameBg = t,
        t.height = 20,
        t.source = "battle_test_machine_pet_item_nameBg_png",
        t.visible = !0,
        t.width = 100,
        t.x = 0,
        t.y = 80,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = 1,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 82,
        t
    },
    i.img_select_i = function() {
        var t = new eui.Image;
        return this.img_select = t,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_fight_select_png",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/BattleTestMachineRankItemSkin.exml"] = window.BattleTestMachineRankItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rank", "score", "petName"],
        this.height = 21,
        this.width = 672,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 21,
        t.width = 672,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.rank_i(), this.score_i(), this.petName_i()],
        t
    },
    i.rank_i = function() {
        var t = new eui.Label;
        return this.rank = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -276.5,
        t.size = 18,
        t.text = "1",
        t.textColor = 10009087,
        t.y = 3,
        t
    },
    i.score_i = function() {
        var t = new eui.Label;
        return this.score = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 222,
        t.size = 18,
        t.text = "4949494948524",
        t.textColor = 16514895,
        t.y = 3,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -43,
        t.size = 18,
        t.text = "精灵名称预留九个字",
        t.textColor = 4187130,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/BattleTestMachineSkinItemSkin.exml"] = window.BattleTestMachineSkinItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "head", "select"],
        this.height = 81,
        this.width = 81,
        this.elementsContent = [this.bg_i(), this.head_i(), this.select_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("select", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 81,
        t.source = "battle_test_machine_skin_item_bg_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 79,
        t.width = 79,
        t.x = 1,
        t.y = 1,
        t
    },
    i.select_i = function() {
        var t = new eui.Image;
        return this.select = t,
        t.height = 93,
        t.horizontalCenter = 0,
        t.source = "battle_test_machine_skin_item_select__png",
        t.verticalCenter = 0,
        t.width = 93,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/BattleTestMachineTrainNewFightTeamItemSkin.exml"] = window.BattleTestMachineTrainNewFightTeamItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["lockSign", "emptySign", "icon_grp", "light_select", "grp"],
        this.height = 120,
        this.elementsContent = [this.grp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_i = function() {
        var t = new eui.Group;
        return this.grp = t,
        t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.lockSign_i(), this.emptySign_i(), this.icon_grp_i(), this.light_select_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "common_avatar_bg_size_100_100_png",
        t.visible = !0,
        t.width = 100,
        t.x = 10,
        t.y = 9,
        t
    },
    i.lockSign_i = function() {
        var t = new eui.Image;
        return this.lockSign = t,
        t.height = 48,
        t.source = "battle_test_machine_train_fight_lockSign_png",
        t.width = 38,
        t.x = 41,
        t.y = 35,
        t
    },
    i.emptySign_i = function() {
        var t = new eui.Image;
        return this.emptySign = t,
        t.height = 51,
        t.source = "battle_test_machine_train_fight_emptySign_png",
        t.visible = !0,
        t.width = 34,
        t.x = 43,
        t.y = 34,
        t
    },
    i.icon_grp_i = function() {
        var t = new eui.Group;
        return this.icon_grp = t,
        t.x = 24,
        t.y = 16,
        t
    },
    i.light_select_i = function() {
        var t = new eui.Image;
        return this.light_select = t,
        t.height = 119,
        t.scale9Grid = new egret.Rectangle(22, 22, 2, 2),
        t.source = "battle_test_machine_train_fight_light_select_png",
        t.visible = !0,
        t.width = 120,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/BattleTestMachineTrainSelectBtnSkin.exml"] = window.BattleTestMachineTrainSelectBtnSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["train_piece_select", "info_bg", "info_text", "best_score", "train_title", "train_lock", "grp"],
        this.height = 100,
        this.elementsContent = [this.grp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_i = function() {
        var t = new eui.Group;
        return this.grp = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.train_piece_select_i(), this._Image1_i(), this.info_bg_i(), this.info_text_i(), this.best_score_i(), this.train_title_i(), this.train_lock_i()],
        t
    },
    i.train_piece_select_i = function() {
        var t = new eui.Image;
        return this.train_piece_select = t,
        t.height = 106,
        t.source = "battle_test_machine_train_piece_select_png",
        t.width = 388,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 74,
        t.source = "battle_test_machine_train_piece_bg_png",
        t.visible = !0,
        t.width = 331,
        t.x = 27,
        t.y = 17,
        t
    },
    i.info_bg_i = function() {
        var t = new eui.Image;
        return this.info_bg = t,
        t.source = "battle_test_machine_train_piece_sign_png",
        t.visible = !0,
        t.x = 30,
        t.y = 53,
        t
    },
    i.info_text_i = function() {
        var t = new eui.Label;
        return this.info_text = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "最快回合数：",
        t.textColor = 15528703,
        t.visible = !0,
        t.x = 136,
        t.y = 61,
        t
    },
    i.best_score_i = function() {
        var t = new eui.Label;
        return this.best_score = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "25回合",
        t.textColor = 16514896,
        t.visible = !0,
        t.x = 269,
        t.y = 61,
        t
    },
    i.train_title_i = function() {
        var t = new eui.Label;
        return this.train_title = t,
        t.fontFamily = "MFShangHei",
        t.size = 28,
        t.text = "训练1",
        t.textColor = 12111615,
        t.visible = !0,
        t.x = 45,
        t.y = 25,
        t
    },
    i.train_lock_i = function() {
        var t = new eui.Image;
        return this.train_lock = t,
        t.height = 54,
        t.source = "battle_test_machine_train_lock_png",
        t.visible = !0,
        t.width = 46,
        t.x = 167,
        t.y = 29,
        t
    },
    e
} (eui.Skin);