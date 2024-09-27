var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this,
            i = config.xml.getAnyRes("new_super_design").Root,
            n = config.xml.getAnyRes("Fragment").Root;
            return t._dataConfig = i,
            t._yinziConfig = n,
            t
        }
        return __extends(t, e),
        t.GetInstance = function() {
            return this._instance || (t._instance = new t),
            t._instance
        },
        t.prototype.GetDesignID = function(e) {
            for (var t = 0,
            i = this._dataConfig.Design; t < i.length; t++) {
                var n = i[t];
                if (n.ID == e) return this.curYinziData = n,
                n
            }
            return null
        },
        t.prototype.getFragmentNum = function() {
            if (this.curYinziData) {
                for (var e = [], t = 0, i = this._yinziConfig.Fragment; t < i.length; t++) {
                    var n = i[t];
                    if (n.ID == this.curYinziData.Reward.ItemID) {
                        this.curFragment = n;
                        break
                    }
                }
                return e.push(this.curFragment.PetConsume),
                e.push(this.curFragment.MovesConsume),
                e.push(this.curFragment.NewseConsume),
                this.curYinziData.Configure.Exchange_mintmark && e.push(this.curYinziData.Configure.Exchange_mintmark),
                e
            }
        },
        t.prototype.GetCurLevelArr = function(e) {
            var t;
            switch (e) {
            case 1:
                t = this.curYinziData.EasyBattle;
                break;
            case 2:
                t = this.curYinziData.NormalBattle;
                break;
            case 3:
                t = this.curYinziData.HardBattle
            }
            return t
        },
        t.prototype.GetGainValue = function() {
            var e = [];
            return e.push(this.curYinziData.Reward.GainValue),
            e.push(this.curYinziData.Configure.ProgressValue),
            e.push(this.curYinziData.Configure.TimeValue),
            e.push(this.curYinziData.Configure.FailTimes),
            e
        },
        t.prototype.GetRuleIDInfo = function(e) {
            var t = this.curYinziData.Rules.Rule;
            return t[e - 1]
        },
        t.prototype.getDiamondProID = function(e) {
            var t = this.curYinziData.Sweep.ProductID.split(" ")[e - 1],
            i = t.split("_");
            return 1 == i.length ? Number(i[0]) : Number(i[2])
        },
        t
    } (egret.EventDispatcher);
    e.DataManager = t,
    __reflect(t.prototype, "pvePetYinzi.DataManager")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this,
            r = GainWayManger.getJumpInfo(i);
            if (r) {
                var a = config.New_monster_level.getItem(Number(r.menuDefault)).param;
                n._data = KTool.evalPram(a)
            } else "string" == typeof i ? n._data = KTool.evalPram(i) : n._data = i;
            var o = e.DataManager.GetInstance().GetDesignID(n._data.Design);
            return e.PvePetYinziConst.DesignID = n._data.Design,
            e.PvePetYinziConst.forever_Value = e.DataManager.GetInstance().GetGainValue(),
            n.service.setValues(e.PvePetYinziConst.forever_Value),
            n.init([{
                panelName: e.PvePetYinziConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: o
            },
            {
                panelName: e.PvePetYinziConst.CHALLENGE_PANEL
            },
            {
                panelName: e.PvePetYinziConst.LEVEL_PANEL
            }]),
            n
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.PvePetYinzi = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinzi")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
pvePetYinzi; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "pvePetYinzi.MainPanel",
        e.CHALLENGE_PANEL = "pvePetYinzi.PvePetYinziChallenge",
        e.LEVEL_PANEL = "pvePetYinzi.PvePetYinziLevel",
        e.CMD_CONST = [41282, 41283, 41284],
        e.TimeChangeEvent = "TimeChangeEvent",
        e.BackToChallenge = "BackToChallenge",
        e.ResData = null,
        e
    } ();
    e.PvePetYinziConst = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziConst")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                u(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function u(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        u((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = i;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(i);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = t.call(e, u)
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
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.canDown = !0,
            i.skinName = PvePetYinziMainSkin,
            i.value = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "pve_pet_yinzi_main_yzgk_png", this,
            function() {
                e.service.closeModule()
            },
            this),
            this.adaptLeftContent(this.grp_left),
            this.adaptRightContent(this.item1),
            this.initData(),
            this.addEvent(),
            GameInfo.isChecking && (this.btnSuperGet.visible = !1, this.btnAdd.visible = !1)
        },
        i.prototype.initData = function() {
            var e = this;
            config.New_monster_level.hasLoader ? this.loadData() : config.New_monster_level.loadAsync().then(function() {
                e.loadData()
            })
        },
        i.prototype.loadData = function() {
            var e = this;
            this.value ? (PetFactorCollectionManager.getAllData().then(function() {
                e.btnCollect.visible = !PetFactorCollectionManager.checkPetIdIndexIsCollection(e._info.id),
                e.hasCollect.visible = !e.btnCollect.visible
            }), this.petNumber = this.value.Reward.MonsterID, this.markNum = this.value.Reward.MintMarkID, this._info = config.New_monster_level.getItemsByField("monsterid", ["=="], [this.petNumber])[0], this.specialShow(), this.initRes(), this.currentState = null == this.markNum ? "noMark": "hasMark", this.update()) : console.error("没有活动对应的因子精灵")
        },
        i.prototype.specialShow = function() {
            103 == e.PvePetYinziConst.DesignID && (this.grp_14year.visible = 0),
            105 == e.PvePetYinziConst.DesignID && (this.grp_14year_2.visible = !0)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnSuperGet,
            function() {
                var e = t.value.Configure.ExchangeProductID.split(" ")[0],
                i = t.value.Configure.ExchangeID.split(" ")[0];
                if (!t.hasPrePet && void 0 != t.needmon) {
                    var n = "很抱歉，获得该精灵需要拥有前置形态：" + PetXMLInfo.getName(t.needmon);
                    return void BubblerManager.getInstance().showText(n)
                }
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(Number(e), 1,
                    function() {
                        KTool.doExchange(Number(i), 1,
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
                var e = Number(t.value.Configure.ExchangeProductID.split(" ")[1]),
                i = Number(t.value.Configure.ExchangeID.split(" ")[1]);
                PayManager.doPayFunc(function() {
                    var n = {};
                    n.type = "product_diamond",
                    n.ins = {
                        iconID: Number(t.value.Reward.ItemID),
                        productID: e
                    },
                    n.caller = t,
                    n.callBack = function(n, r) {
                        KTool.buyProductByCallback(e, r,
                        function() {
                            KTool.doExchange(i, r,
                            function() {
                                t.service.updateValues().then(function() {
                                    t.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, n)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t.petNumber,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                t.service.openPanel(e.PvePetYinziConst.CHALLENGE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnGoToExchange,
            function() {
                ModuleManager.showModuleByID(15, {
                    type: 7,
                    petId: t.petNumber
                })
            },
            this),
            ImageButtonUtil.add(this.wu,
            function() {
                t.service.showSkillInfo(e.DataManager.GetInstance().curFragment.MoveID)
            },
            this),
            ImageButtonUtil.add(this.te,
            function() {
                t.service.showPetEff(e.DataManager.GetInstance().curFragment.MonsterID)
            },
            this),
            ImageButtonUtil.add(this.miniMark,
            function() {
                t.service.showMarkInfo(t.markNum)
            },
            this),
            ImageButtonUtil.add(this.btnGoToMark,
            function() {
                var i = ItemManager.getNumByID(t.value.Reward.ItemID),
                n = e.DataManager.GetInstance().getFragmentNum();
                return i < n[3] ? void Alarm.show("您的精灵因子数量不足") : PetManager.isDefaultPet(t.petNumber) ? void(t.hasPet.visible ? SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[1], [e.PvePetYinziConst.DesignID, 2],
                function() {
                    t.service.updateValues().then(function() {
                        t.update()
                    })
                }) : Alarm) : void Alarm.show("请将" + PetXMLInfo.getName(t.petNumber) + "放入出战背包首发！",
                function() {
                    t.service.showPetBag()
                })
            },
            this),
            ImageButtonUtil.add(this.btnCollect, this.collectPet, this),
            ImageButtonUtil.add(this.hasCollect, this.collectPet, this),
            ImageButtonUtil.add(this.btn14Year,
            function() {
                void 0 != t.value.Configure.signin ? ModuleManager.showModuleByID(t.value.Configure.signin) : console.error("没有该字段")
            },
            this),
            ImageButtonUtil.add(this.btn14YearBtn_1,
            function() {
                void 0 != t.value.Configure.signin ? ModuleManager.showModuleByID(t.value.Configure.signin) : console.error("没有该字段")
            },
            this),
            ImageButtonUtil.add(this.btn14YearBtn_2,
            function() {
                void 0 != t.value.Configure.blessing ? ModuleManager.showModuleByID(t.value.Configure.blessing) : console.error("没有该字段")
            },
            this)
        },
        i.prototype.collectPet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.canDown ? (this.canDown = !1, e = !PetFactorCollectionManager.checkPetIdIndexIsCollection(this._info.id), this.hasCollect.visible = e, this.btnCollect.visible = !e, [4, PetFactorCollectionManager.setCollection(this._info.id, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                    case 1:
                        return t.sent(),
                        this.canDown = !0,
                        [2]
                    }
                })
            })
        },
        i.prototype.initRes = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return t = this.value.ID,
                        e.PvePetYinziConst.IMG_RES = "resource/assets/petYinzi/Design_" + t + "/",
                        i = e.PvePetYinziConst.IMG_RES,
                        this.bg.source = i + "bg.jpg",
                        LoadingManager.instance.showloading("正在加载资源，请稍候！"),
                        [4, RES.getResByUrl(e.PvePetYinziConst.IMG_RES + "design_" + t + ".json", null, this, RES.ResourceItem.TYPE_SHEET)];
                    case 1:
                        for (n = a.sent(), LoadingManager.instance.hideloading(null), e.PvePetYinziConst.ResData = n, this.img_di2.source = n._textureMap.design_img_di2_png, this.rightbg1.source = this.rightbg2.source = n._textureMap.design_rightbg_png, this.infoBg.source = n._textureMap.design_nenglibg_png, this.icon.source = n._textureMap.design_icon_png, this.hasPet.source = n._textureMap.design_haspet_png, this.markNum && (this.miniMark.source = ClientConfig.getMarkPath(this.markNum)), r = 1; 4 >= r; r++) this["icon_" + r].source = n._textureMap.design_icon_png,
                        this["kuang_" + r].source = n._textureMap.design_kuang_png,
                        this["txtbg_" + r].source = n._textureMap.design_txtbg_png,
                        4 != r && (this["infoTitle" + r].source = n._textureMap["design_title" + r + "_png"]);
                        return [2]
                    }
                })
            })
        },
        i.prototype.update = function() {
            var t = this,
            i = this.petNumber;
            this.needmon = this.value.Configure.needmon;
            for (var n = 0,
            r = PetXMLInfo.getAllEvById(i), a = 0, o = r; a < o.length; a++) {
                var s = o[a];
                n += ~~s
            }
            this.abilityNum.text = n + "",
            this.attr_icon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(i) + "");
            var u = PetBook.PetBookXMLInfo.getPetXML(i).Features;
            this.txtInfo.text = u;
            for (var _ = e.DataManager.GetInstance().getFragmentNum(), l = 1; 4 >= l; l++) this["num_" + l].text = _[l - 1] + "";
            ItemManager.updateItems([this.value.Reward.ItemID],
            function() {
                t.txtIconNum.text = ItemManager.getNumByID(t.value.Reward.ItemID) + ""
            }),
            this.petHead.source = ClientConfig.getPetHeadPath(i);
            var h = this.service.getValue(e.PvePetYinziConst.forever_Value[0]);
            this.btnGoToMark.visible = 0 == KTool.getBit(h, 2),
            this.hasExchangeMark.visible = 1 == KTool.getBit(h, 2);
            var c = [i];
            this.needmon && c.push(this.needmon),
            KTool.getHasEverGotPet(c,
            function(e) {
                t.hasPet.visible = e[0],
                DisplayUtil.setEnabled(t.btnGoToMark, 1 == e[0], 0 == e[0]),
                DisplayUtil.setEnabled(t.btnSuperGet, 0 == e[0], 1 == e[0]),
                e.length > 1 && (t.hasPrePet = e[1])
            })
        },
        i.prototype.destroy = function() {
            console.log(RES.destroyRes(e.PvePetYinziConst.IMG_RES + "design_" + this.value.ID + ".json")),
            t.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "pvePetYinzi.MainPanel")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.values = [],
            e.skinName = PvePetYinziChallengeSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.initBtnClose.call(this, "pve_pet_yinzi_challenge_jltz_png", this,
            function() {
                e.service.backToMainPanel()
            },
            this),
            !GameInfo.isChecking && t.prototype.initBtnHelp.call(this,
            function() {
                e.service.showHelpPop(100)
            },
            this),
            this.adaptLeftContent(this.group_left),
            this.adaptRightContent(this.group_topRight),
            this.initData(),
            this.addEvent(),
            GameInfo.isChecking && (this.btnAddTime.visible = !1, this.btnSaodang.visible = !1, this.guankaTitle.visible = !1, this.levelClear.visible = !1)
        },
        i.prototype.initData = function() {
            this.levelInfos = e.DataManager.GetInstance().curYinziData,
            this.rbGroup = this.rb_1.group,
            this.curSelectNum = this.rbGroup.selectedValue = 1,
            this.curLevelInfo = e.DataManager.GetInstance().GetCurLevelArr(this.curSelectNum);
            for (var t = 1; 3 >= t; t++) this["rb_" + t].petYinzi.source = e.PvePetYinziConst.ResData._textureMap.design_icon_png,
            this["rb_" + t].yinziNum.text = e.DataManager.GetInstance().GetCurLevelArr(t).Out + "";
            var i, n = AchieveXMLInfo.getBranchById(this.levelInfos.Achievement.BranchID);
            if (n) {
                for (var r = 0,
                a = n.Rule; r < a.length; r++) {
                    var o = a[r];
                    if (o.ID == this.levelInfos.Achievement.RuleID) {
                        i = o;
                        break
                    }
                }
                this.rb_3.achieveName.text = i.title
            } else this.rb_3.achieveName.visible = !1,
            this.rb_3.achieveIcon.visible = !1,
            this.rb_3.chenhao.visible = !1;
            this._list.itemRenderer = e.PvePetYinziChallengeHead
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeDiff, this),
            ImageButtonUtil.add(this.btnAddTime,
            function() {
                var e = t.levelInfos.Configure.ExchangeProductID.split(" ")[2],
                i = t.levelInfos.Configure.ExchangeID.split(" ")[2];
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(Number(e), 1,
                    function() {
                        KTool.doExchange(Number(i), 1,
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
            ImageButtonUtil.add(this.btnSaodang,
            function() {
                var i = t.levelInfos.Configure.Times - t.values[2];
                if (0 >= i) return void Alarm.show("您的挑战次数不足");
                var n = new e.PvePetYinziClearPop(t.curSelectNum, i);
                PopViewManager.getInstance().openView(n)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                var i = t.levelInfos.Configure.Times - t.values[2];
                return 0 >= i ? void Alarm.show("您的次数已用完！") : void t.service.openPanel(e.PvePetYinziConst.LEVEL_PANEL, t.curSelectNum)
            },
            this),
            ImageButtonUtil.add(this.btnContinue,
            function() {
                t.service.openPanel(e.PvePetYinziConst.LEVEL_PANEL, t.curSelectNum)
            },
            this),
            ImageButtonUtil.add(this.btnGiveUp,
            function() {
                Alert.show("您确定放弃挑战吗？",
                function() {
                    Alert.show("放弃挑战将无法获得通关奖励，确认放弃吗？",
                    function() {
                        SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[0], [e.PvePetYinziConst.DesignID, 0],
                        function() {
                            t.service.updateValues().then(function() {
                                t.update()
                            })
                        })
                    })
                })
            },
            this),
            EventManager.addEventListener(e.PvePetYinziConst.TimeChangeEvent, this.clearUp, this)
        },
        i.prototype.clearUp = function() {
            var e = this;
            this.service.updateValues().then(function() {
                e.update()
            })
        },
        i.prototype.onChangeDiff = function() {
            this.curSelectNum = ~~this.rbGroup.selectedValue,
            this._scor.viewport.scrollV = 0,
            this._scor.stopAnimation(),
            this.update()
        },
        i.prototype.update = function() {
            this.values = [];
            for (var t = 0,
            i = this.levelInfos.Rules.Rule; t < i.length; t++) {
                var n = i[t];
                if (6 == n.MouldID) {
                    this.levelClear.text = n.CheckTips;
                    break
                }
            }
            for (var r = 0; r < e.PvePetYinziConst.forever_Value.length; r++) this.values.push(this.service.getValue(e.PvePetYinziConst.forever_Value[r]));
            var a = 0 != (this.values[1] >> 8 & 255);
            this.curLevelInfo = e.DataManager.GetInstance().GetCurLevelArr(this.curSelectNum);
            var o = this.curLevelInfo.RuleID,
            s = [],
            u = "";
            if (o) {
                o = o.split(" ");
                for (var _ = 0,
                l = o; _ < l.length; _++) {
                    var h = l[_];
                    s.push(Number(h))
                }
                for (var r = 0; r < s.length; r++) u += r + 1 + "." + e.DataManager.GetInstance().GetRuleIDInfo(s[r]).CheckTips + "\n"
            } else u = "无";
            this.levelInfo.text = u;
            for (var c = [], r = 0; r < this.curLevelInfo.Task.length; r++) c.push(this.curLevelInfo.Task[r].BattleBoss);
            for (var r = 1; 3 >= r; r++) this["dif_" + r].visible = r == this.curSelectNum;
            var p = 1 == KTool.getBit(this.values[0], 5 + this.curSelectNum),
            g = this.levelInfos.Configure.Times - this.values[2];
            this._list.dataProvider = new eui.ArrayCollection(c),
            this.img_Dif.source = "pve_pet_yinzi_challenge_diffTitle" + this.curSelectNum + "_png",
            this.levelRule.text = this.curLevelInfo.Desc,
            this.txtChallengeTime.text = g + "";
            var v = this.values[1] >> 8 & 255,
            f = this.curSelectNum == v;
            this.btnContinue.visible = a && f,
            this.btnGiveUp.visible = a && f,
            this.btnTiaozhan.visible = !this.btnContinue.visible,
            GameInfo.isChecking || (this.btnSaodang.visible = !this.btnGiveUp.visible);
            var m = f || 0 == v,
            y = 0 == v ? p: p && f;
            DisplayUtil.setEnabled(this.btnSaodang, y, !y),
            DisplayUtil.setEnabled(this.btnTiaozhan, m, !m),
            DisplayUtil.setEnabled(this.btnContinue, f, !f),
            DisplayUtil.setEnabled(this.btnAddTime, 3 != g, 3 == g)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeDiff, this),
            EventManager.removeEventListener(e.PvePetYinziConst.TimeChangeEvent, this.clearUp, this)
        },
        i
    } (BasicPanel);
    e.PvePetYinziChallenge = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziChallenge")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.itemsX = [],
            e.values = [],
            e.allInfo = [],
            e.skinName = PvePetYinziLevelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.leftDown),
            this.addEvent(),
            this.animPlay(),
            DisplayUtil.setEnabled(this.wait, !1, !0),
            DisplayUtil.setEnabled(this.dong, !1, !0)
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.addEventListener(e.PvePetYinziConst.BackToChallenge, this.backToChallenge, this),
            EventManager.addEventListener("Yinzi_ShowRightInfo", this.showRightInfo, this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnZhandou,
            function() {
                SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[2], [e.PvePetYinziConst.DesignID, t.levelInfo.diffNum],
                function(i) {
                    var n = i.data,
                    r = n.readUnsignedInt();
                    if (0 == r) SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[0], [e.PvePetYinziConst.DesignID, t.levelInfo.diffNum],
                    function() {
                        EventManager.addEventListener(PetFightEvent.ALARM_CLICK, t.failText, t)
                    });
                    else {
                        var a = e.DataManager.GetInstance().GetRuleIDInfo(r).CheckTips;
                        Alarm.show(a)
                    }
                })
            },
            this)
        },
        i.prototype.beforeAdd = function(i) {
            var n = this;
            this.curDiff = i,
            this.curLevelInfo = e.DataManager.GetInstance().GetCurLevelArr(this.curDiff),
            this.grpBack ? this.updateTitleRes("pve_pet_yinzi_level_title_" + this.curDiff + "_png") : t.prototype.initBtnClose.call(this, "pve_pet_yinzi_level_title_" + this.curDiff + "_png", this,
            function() {
                n.backToChallenge()
            },
            this),
            this.rigntInfo.visible = !1,
            this.initData(),
            this.animPlay()
        },
        i.prototype.failText = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.failText, this),
            this.rigntInfo.visible = !0,
            KTool.getPlayerInfo([1309],
            function(t) {
                var i = t[0],
                n = i >> 8 & 255;
                if (0 != i) {
                    var r = e.DataManager.GetInstance().GetRuleIDInfo(n);
                    r && Alarm.show(r.FailTips,
                    function() {
                        EventManager.dispatchEventWith(e.PvePetYinziConst.BackToChallenge)
                    })
                }
            })
        },
        i.prototype.initData = function() {
            this.petItems.removeChildren(),
            this.updataValue(),
            this.allInfo = [];
            for (var t = 0; t < this.curLevelInfo.Task.length; t++) {
                var i = {
                    levelInfo: this.curLevelInfo.Task[t],
                    index: t,
                    diffNum: this.curDiff,
                    values: this.values
                },
                n = new e.PvePetYinziLevelPetItem(i);
                this.petItems.addChild(n);
                var r = t % 2 == 1 ? 272 : 0,
                a = t % 2 == 1 ? 0 : 72,
                o = t % 2 == 1 ? 565 : 555;
                n.x = r + Math.floor(t / 2) * o,
                n.y = a,
                this.itemsX.push(n.x),
                this.allInfo.push(i)
            }
            for (var s = this.curLevelInfo.Task.length - 2,
            t = 0; s > t; t++) {
                var u = new eui.Rect(195, 369);
                this.petItems.addChild(u),
                u.visible = !1;
                var r = t % 2 == 1 ? 272 : 0,
                a = t % 2 == 1 ? 0 : 72,
                o = t % 2 == 1 ? 565 : 555;
                u.x = r + (Math.floor(t / 2) + 2) * o,
                u.y = a
            }
            if (this.line4.visible = this.curLevelInfo.Task.length > 4, this.curLevelInfo.Task.length > 5) for (var _ = this.curLevelInfo.Task.length - 5,
            t = 0; _ > t; t++) {
                var l = t % 2 == 0 ? this.line1: this.line2;
                this.bas.addChild(l);
                var o = t % 2 == 0 ? 163 : 175;
                l.x = this.itemsX[4 + t] + o,
                l.y = 334
            }
        },
        i.prototype.animPlay = function() {
            var e = this,
            t = this.values[1] >> 16 & 255;
            if (t == this.curLevelInfo.Task.length - 1 && (t -= 1), t >= 3) egret.Tween.get(this._scor.viewport).to({
                scrollH: 560
            },
            500).call(function() {
                egret.Tween.removeTweens(e._scor)
            });
            else {
                var i = 280;
                egret.Tween.get(this._scor.viewport).to({
                    scrollH: i * t
                },
                500).call(function() {
                    egret.Tween.removeTweens(e._scor)
                })
            }
        },
        i.prototype.updataValue = function() {
            this.values = [];
            for (var t = 0; t < e.PvePetYinziConst.forever_Value.length; t++) {
                var i = e.PvePetYinziConst.forever_Value[t];
                this.values.push(this.service.getValue(i))
            }
        },
        i.prototype.showRightInfo = function(e) {
            if (e) this.levelInfo = e.data;
            else {
                var t = this.levelInfo.index;
                if (t == this.allInfo.length - 1) return;
                FightManager.isWin ? this.levelInfo = this.allInfo[t + 1] : this.levelInfo = this.allInfo[t]
            }
            var i = this.levelInfo.levelInfo.ID - 1 == this.values[1] >> 16;
            1 == this.rigntInfo.visible ? (gsap.fromTo(this.battleType, {
                alpha: 0
            },
            {
                alpha: 1
            }), gsap.fromTo(this.txtInfos, {
                alpha: 0
            },
            {
                alpha: 1
            })) : gsap.fromTo(this.rigntInfo, {
                alpha: 0,
                right: -100
            },
            {
                alpha: 1,
                right: 0,
                duration: .2
            }),
            this.rigntInfo.visible = !0,
            this.txtInfos.text = this.levelInfo.levelInfo.Desc,
            this.battleType.text = 1 == this.levelInfo.levelInfo.BattleType ? "单精灵对战": "多精灵对战",
            this.txtbattleNum.text = "第" + this.levelInfo.levelInfo.ID + "战",
            this.btnZhandou.visible = i,
            this.wait.visible = this.levelInfo.levelInfo.ID - 1 > this.values[1] >> 16,
            this.dong.visible = this.levelInfo.levelInfo.ID - 1 < this.values[1] >> 16,
            this.head.source = ClientConfig.getPetHeadPath(this.levelInfo.levelInfo.BattleBoss)
        },
        i.prototype.backToChallenge = function() {
            this.service.openPanel(e.PvePetYinziConst.CHALLENGE_PANEL)
        },
        i.prototype.onFightOver = function() {
            var e = this;
            this.rigntInfo.visible = !1,
            this.service.updateValues().then(function() {
                e.updataValue(),
                e.animPlay(),
                e.showRightInfo(),
                EventManager.dispatchEventWith("PvePetYinzi_FightOver", !1, e.values),
                0 == (e.values[1] >> 8 & 255) && e.backToChallenge()
            })
        },
        i.prototype.update = function() {
            this.leftDown.visible = !1,
            this.curLevelInfo.RuleID && this.curLevelInfo.RuleID.indexOf("5") > -1 && (this.leftDown.visible = !0, this.failTime.textFlow = [{
                text: "本轮挑战已失败次数：",
                style: {
                    textColor: 10073855
                }
            },
            {
                text: this.service.getValue(e.PvePetYinziConst.forever_Value[3]) + "",
                style: {
                    textColor: 49407
                }
            }])
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        i
    } (BasicPanel);
    e.PvePetYinziLevel = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziLevel")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = PvePetYinziBattlePopSkin,
            i.levelInfo = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            this.txtInfos.text = this.levelInfo.levelInfo.Desc,
            this.battleType.text = 1 == this.levelInfo.levelInfo.BattleType ? "单精灵对战": "多精灵对战",
            this.txtbattleNum.text = "第" + this.levelInfo.levelInfo.ID + "战";
            var e = this.levelInfo.levelInfo.ID - 1 == this.levelInfo.values[1] >> 16;
            DisplayUtil.setEnabled(this.btnZhandou, e, !e)
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnZhandou,
            function() {
                SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[2], [e.PvePetYinziConst.DesignID, t.levelInfo.diffNum],
                function(i) {
                    var n = i.data,
                    r = n.readUnsignedInt();
                    if (0 == r) SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[0], [e.PvePetYinziConst.DesignID, t.levelInfo.diffNum],
                    function() {
                        EventManager.addEventListener(PetFightEvent.ALARM_CLICK, t.failText, t),
                        t.hide()
                    });
                    else {
                        var a = e.DataManager.GetInstance().GetRuleIDInfo(r).CheckTips;
                        Alarm.show(a)
                    }
                })
            },
            this)
        },
        i.prototype.failText = function() {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.failText, this),
            KTool.getPlayerInfo([1309],
            function(t) {
                var i = t[0],
                n = i >> 8 & 255;
                if (0 != i) {
                    var r = e.DataManager.GetInstance().GetRuleIDInfo(n);
                    r && Alarm.show(r.FailTips,
                    function() {
                        EventManager.dispatchEventWith(e.PvePetYinziConst.BackToChallenge)
                    })
                }
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.PvePetYinziBattlePop = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziBattlePop")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.itemsID = [1400153, 2500005, 0],
            n.skinName = PvePetYinziClearPopSkin,
            n.curDiff = e,
            n.curTimes = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rbGroup = this.rb_1.group,
            this.curNum = this.rbGroup.selectedValue = 1,
            this.addEvents(),
            this.update(),
            GameInfo.isChecking && (this.rb_2.visible = this.rb_3.visible = !1)
        },
        i.prototype.addEvents = function() {
            var t = this;
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangePay, this),
            ImageButtonUtil.add(this.btnQueding,
            function() {
                if (t.curTimes <= 0) return void Alarm.show("您的挑战次数不足");
                var i = 0;
                if (3 != t.curNum) i = ItemManager.getNumByID(t.itemsID[t.curNum - 1]),
                i > 0 ? t.ClearLevel() : Alarm.show("您的道具数量不足！");
                else {
                    var n = e.DataManager.GetInstance().getDiamondProID(t.curDiff);
                    PayManager.doPayFunc(function() {
                        KTool.buyProductByCallback(Number(n), 1,
                        function() {
                            t.ClearLevel()
                        })
                    },
                    t)
                }
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.ClearLevel = function() {
            var t = this,
            i = 4 + this.curDiff + 3 * (this.curNum - 1);
            SocketConnection.sendByQueue(e.PvePetYinziConst.CMD_CONST[1], [e.PvePetYinziConst.DesignID, i],
            function() {
                EventManager.dispatchEventWith(e.PvePetYinziConst.TimeChangeEvent),
                BubblerManager.getInstance().showText("扫荡成功！"),
                t.hide()
            })
        },
        i.prototype.onChangePay = function() {
            this.curNum = ~~this.rbGroup.selectedValue
        },
        i.prototype.update = function() {
            for (var e = this,
            t = 1; 2 >= t; t++) this["rb_" + t].icon.source = ClientConfig.getItemIcon(this.itemsID[t - 1]),
            this["rb_" + t].hasNum.text = "已拥有：" + ItemManager.getNumByID(this.itemsID[t - 1]);
            UserInfoManager.getDiamond(function(t) {
                e.rb_3.hasNum.text = "已拥有：" + t
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangePay, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.PvePetYinziClearPop = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziClearPop")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.ChallengePetHeadSkin,
            i
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            var e = PetXMLInfo.getName(this.data);
            this.petName.text = StringUtil.parseStrLimitLen(e, 6),
            this.pethead.source = ClientConfig.getPetHeadPath(this.data)
        },
        i
    } (eui.ItemRenderer);
    e.PvePetYinziChallengeHead = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziChallengeHead")
} (pvePetYinzi || (pvePetYinzi = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
pvePetYinzi; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.value = t,
            i.skinName = LevelBattleItemSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            return e.prototype.childrenCreated.call(this),
            null == this.value ? void(this.visible = !1) : (this.addEvents(), void this.initData())
        },
        t.prototype.addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            EventManager.addEventListener("PvePetYinzi_FightOver", this.update, this),
            EventManager.addEventListener("YinziItem_hideSe", this.hideSe, this)
        },
        t.prototype.initData = function() {
            this.petHead.source = ClientConfig.getPetHeadPath(this.value.levelInfo.BattleBoss);
            var e = PetXMLInfo.getName(this.value.levelInfo.BattleBoss);
            e.length > 7 && (e = e.slice(0, 7) + ".."),
            this.petName.text = e,
            this.type.source = "pve_pet_yinzi_type" + this.value.levelInfo.Battlelevel + "_png",
            this.wait.source = "pve_pet_yinzi_level_wait" + this.value.diffNum + "_png",
            this.done.source = "pve_pet_yinzi_level_done" + this.value.diffNum + "_png",
            this.enter.source = "pve_pet_yinzi_level_enter" + this.value.diffNum + "_png",
            this.update()
        },
        t.prototype.update = function(e) {
            e && (this.value.values = e.data, this.select.visible = (this.value.values[1] >> 16 & 255) == this.value.index);
            var t = [];
            t = this.value.values,
            this.curProgress = t[1] >> 16 & 255,
            this.curProgress >= this.value.index ? this.diff.source = "pve_pet_yinzi_level_diff" + this.value.diffNum + "_png": this.diff.source = "pve_pet_yinzi_level_diff" + this.value.diffNum + "locked_png",
            this.done.visible = this.curProgress > this.value.index,
            this.wait.visible = this.curProgress < this.value.index,
            this.enter.visible = this.curProgress == this.value.index,
            this.dizuo_enter.visible = this.enter.visible,
            this.dizuo_wait.visible = this.wait.visible,
            this.dizuo_done.visible = this.done.visible,
            this.done_gou.visible = this.done.visible
        },
        t.prototype.touchHandle = function(e) {
            this.select.visible = !0,
            EventManager.dispatchEventWith("YinziItem_hideSe", !1, this),
            EventManager.dispatchEventWith("Yinzi_ShowRightInfo", !1, this.value)
        },
        t.prototype.hideSe = function(e) {
            e.data.hashCode != this.hashCode && (this.select.visible = !1)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            EventManager.removeAll(this)
        },
        t
    } (eui.ItemRenderer);
    e.PvePetYinziLevelPetItem = t,
    __reflect(t.prototype, "pvePetYinzi.PvePetYinziLevelPetItem")
} (pvePetYinzi || (pvePetYinzi = {})),
window.pvePetYinzi = window.pvePetYinzi || {};
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/item/ChallengePetHeadSkin.exml"] = window.pvePetYinzi.ChallengePetHeadSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["kuang", "pethead", "petName"],
        this.height = 95,
        this.width = 78,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 1,
        e.elementsContent = [this.kuang_i(), this.pethead_i(), this.petName_i()],
        e
    },
    i.kuang_i = function() {
        var e = new eui.Image;
        return this.kuang = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.pethead_i = function() {
        var e = new eui.Image;
        return this.pethead = e,
        e.height = 70,
        e.source = "",
        e.width = 70,
        e.x = 3,
        e.y = 3,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "精灵名字",
        e.textAlign = "center",
        e.textColor = 9157375,
        e.width = 78,
        e.x = 0,
        e.y = 77,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/LevelBattleItemSkin.exml"] = window.LevelBattleItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["dizuo_enter", "dizuo_done", "dizuo_wait", "diff", "difflock", "petName", "petHead", "enter", "wait", "done", "type", "head", "select", "done_gou", "battle1"],
        this.height = 369,
        this.width = 196,
        this.elementsContent = [this.battle1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.battle1_i = function() {
        var e = new eui.Group;
        return this.battle1 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.dizuo_enter_i(), this.dizuo_done_i(), this.dizuo_wait_i(), this.diff_i(), this.difflock_i(), this.head_i(), this.select_i(), this.done_gou_i()],
        e
    },
    i.dizuo_enter_i = function() {
        var e = new eui.Image;
        return this.dizuo_enter = e,
        e.source = "pve_pet_yinzi_level_dz_enter_png",
        e.visible = !0,
        e.x = 26,
        e.y = 196,
        e
    },
    i.dizuo_done_i = function() {
        var e = new eui.Image;
        return this.dizuo_done = e,
        e.source = "pve_pet_yinzi_level_dz_done_png",
        e.visible = !0,
        e.x = 33,
        e.y = 270,
        e
    },
    i.dizuo_wait_i = function() {
        var e = new eui.Image;
        return this.dizuo_wait = e,
        e.source = "pve_pet_yinzi_level_dz_wait_png",
        e.visible = !0,
        e.x = 28,
        e.y = 270,
        e
    },
    i.diff_i = function() {
        var e = new eui.Image;
        return this.diff = e,
        e.source = "pve_pet_yinzi_level_diff3_png",
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e
    },
    i.difflock_i = function() {
        var e = new eui.Image;
        return this.difflock = e,
        e.source = "pve_pet_yinzi_level_diff3locked_png",
        e.visible = !1,
        e.x = 0,
        e.y = 1,
        e
    },
    i.head_i = function() {
        var e = new eui.Group;
        return this.head = e,
        e.visible = !0,
        e.x = 30,
        e.y = 18,
        e.elementsContent = [this.petName_i(), this.petHead_i(), this.enter_i(), this.wait_i(), this.done_i(), this.type_i()],
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "精灵名字名字",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 9,
        e.y = 137,
        e
    },
    i.petHead_i = function() {
        var e = new eui.Image;
        return this.petHead = e,
        e.height = 100,
        e.source = "",
        e.visible = !0,
        e.width = 100,
        e.x = 0,
        e.y = 29,
        e
    },
    i.enter_i = function() {
        var e = new eui.Image;
        return this.enter = e,
        e.source = "pve_pet_yinzi_level_enter1_png",
        e.visible = !1,
        e.x = 4,
        e.y = 168,
        e
    },
    i.wait_i = function() {
        var e = new eui.Image;
        return this.wait = e,
        e.source = "pve_pet_yinzi_level_wait3_png",
        e.visible = !0,
        e.x = 5,
        e.y = 168,
        e
    },
    i.done_i = function() {
        var e = new eui.Image;
        return this.done = e,
        e.source = "pve_pet_yinzi_level_done1_png",
        e.visible = !1,
        e.x = 5,
        e.y = 168,
        e
    },
    i.type_i = function() {
        var e = new eui.Image;
        return this.type = e,
        e.source = "pve_pet_yinzi_type6_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.select_i = function() {
        var e = new eui.Image;
        return this.select = e,
        e.source = "pve_pet_yinzi_level_selected_png",
        e.visible = !1,
        e.x = 10,
        e.y = 10,
        e
    },
    i.done_gou_i = function() {
        var e = new eui.Image;
        return this.done_gou = e,
        e.height = 41,
        e.source = "pve_pet_yinzi_wancheng_png",
        e.width = 41,
        e.x = 70,
        e.y = 206,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PvePetYinziBattlePopSkin.exml"] = window.PvePetYinziBattlePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnBack", "battleType", "zdxq", "qbtz", "btnPet", "btnCure", "txtInfos", "btnZhandou", "txtbattleNum", "BattlePop"],
        this.height = 286,
        this.width = 482,
        this.elementsContent = [this.BattlePop_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.BattlePop_i = function() {
        var e = new eui.Group;
        return this.BattlePop = e,
        e.elementsContent = [this._Group1_i(), this.btnBack_i(), this.battleType_i(), this.zdxq_i(), this.qbtz_i(), this.btnPet_i(), this.btnCure_i(), this.txtInfos_i(), this.btnZhandou_i(), this.txtbattleNum_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 286,
        e.scale9Grid = new egret.Rectangle(4, 3, 13, 13),
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 482,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_m_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "common_pop_btn_close_png",
        e.x = 439,
        e.y = 1,
        e
    },
    i.battleType_i = function() {
        var e = new eui.Label;
        return this.battleType = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "多精灵对战",
        e.textColor = 13820671,
        e.x = 130,
        e.y = 48,
        e
    },
    i.zdxq_i = function() {
        var e = new eui.Label;
        return this.zdxq = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "战斗详情",
        e.textColor = 4187130,
        e.x = 36,
        e.y = 47,
        e
    },
    i.qbtz_i = function() {
        var e = new eui.Label;
        return this.qbtz = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "情报探知",
        e.textColor = 4187130,
        e.x = 36,
        e.y = 82,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "pve_pet_yinzi_level_btnpet_png",
        e.x = 106,
        e.y = 202,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "pve_pet_yinzi_level_btncure_png",
        e.x = 33,
        e.y = 202,
        e
    },
    i.txtInfos_i = function() {
        var e = new eui.Label;
        return this.txtInfos = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "较难的敌人。先制+3，伤害提升300%，可以消除对手能力提升状态，一定程度减伤，每回合结束时戏曲对手一定体力。",
        e.textColor = 13820671,
        e.width = 403,
        e.x = 36,
        e.y = 106,
        e
    },
    i.btnZhandou_i = function() {
        var e = new eui.Image;
        return this.btnZhandou = e,
        e.source = "pve_pet_yinzi_level_btnzhandou_png",
        e.x = 310,
        e.y = 214,
        e
    },
    i.txtbattleNum_i = function() {
        var e = new eui.Label;
        return this.txtbattleNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "第一战",
        e.textColor = 16575894,
        e.visible = !0,
        e.x = 42,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PvePetYinziClearPopSkin.exml"] = window.PvePetYinziClearPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnBack", "rb_1", "rb_2", "rb_3", "btnQueding", "clearPop"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.clearPop_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasNum", "icon", "select"],
            this.elementsContent = [this.hasNum_i(), this._Image1_i(), this.icon_i(), this.select_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.hasNum_i = function() {
            var e = new eui.Label;
            return this.hasNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textAlign = "center",
            e.textColor = 4252667,
            e.width = 104,
            e.x = 60,
            e.y = 240,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_itembg1_png",
            e.visible = !0,
            e.x = 10,
            e.y = 15,
            e
        },
        i.icon_i = function() {
            var e = new eui.Image;
            return this.icon = e,
            e.height = 55,
            e.source = "",
            e.width = 55,
            e.x = 82,
            e.y = 78,
            e
        },
        i.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "pve_pet_yinzi_challenge_select2_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasNum", "icon", "select"],
            this.elementsContent = [this.hasNum_i(), this._Image1_i(), this.icon_i(), this.select_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.hasNum_i = function() {
            var e = new eui.Label;
            return this.hasNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textAlign = "center",
            e.textColor = 12015095,
            e.width = 104,
            e.x = 60,
            e.y = 240,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_itembg2_png",
            e.visible = !0,
            e.x = 10,
            e.y = 15,
            e
        },
        i.icon_i = function() {
            var e = new eui.Image;
            return this.icon = e,
            e.height = 55,
            e.source = "",
            e.width = 55,
            e.x = 82,
            e.y = 78,
            e
        },
        i.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "pve_pet_yinzi_challenge_select2_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["hasNum", "icon", "select"],
            this.elementsContent = [this.hasNum_i(), this._Image1_i(), this.icon_i(), this.select_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("select", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.hasNum_i = function() {
            var e = new eui.Label;
            return this.hasNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textAlign = "center",
            e.textColor = 16765477,
            e.width = 180,
            e.x = 20,
            e.y = 240,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_itembg3_png",
            e.visible = !0,
            e.x = 10,
            e.y = 15,
            e
        },
        i.icon_i = function() {
            var e = new eui.Image;
            return this.icon = e,
            e.height = 55,
            e.source = "pve_pet_yinzi_Diamond_png",
            e.width = 55,
            e.x = 82,
            e.y = 78,
            e
        },
        i.select_i = function() {
            var e = new eui.Image;
            return this.select = e,
            e.source = "pve_pet_yinzi_challenge_select2_png",
            e.visible = !1,
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a.clearPop_i = function() {
        var e = new eui.Group;
        return this.clearPop = e,
        e.visible = !0,
        e.elementsContent = [this._Group1_i(), this.btnBack_i(), this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.btnQueding_i(), this._Image3_i()],
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 431,
        e.scale9Grid = new egret.Rectangle(4, 3, 13, 13),
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 753,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_big_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    a.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "common_pop_btn_close_png",
        e.x = 715,
        e.y = 1,
        e
    },
    a.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "itemGroup",
        e.value = "1",
        e.visible = !0,
        e.x = 40,
        e.y = 66,
        e.skinName = i,
        e
    },
    a.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "itemGroup",
        e.value = "2",
        e.visible = !0,
        e.x = 275,
        e.y = 66,
        e.skinName = n,
        e
    },
    a.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "itemGroup",
        e.value = "3",
        e.visible = !0,
        e.x = 509,
        e.y = 66,
        e.skinName = r,
        e
    },
    a.btnQueding_i = function() {
        var e = new eui.Image;
        return this.btnQueding = e,
        e.source = "pve_pet_yinzi_challenge_btnqueding_png",
        e.x = 310,
        e.y = 365,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_challenge_sdfs_png",
        e.visible = !0,
        e.x = 36,
        e.y = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PvePetYinziChallengeSkin.exml"] = window.PvePetYinziChallengeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["rb_1", "rb_2", "rb_3", "group_left", "rightbg", "dif_3", "dif_2", "dif_1", "rightContent", "_list", "kuang", "jlmz", "kuang_2", "jlmz_2", "kuang_3", "jlmz_3", "kuang_4", "jlmz_4", "kuang_5", "jlmz_5", "kuang_6", "jlmz_6", "kuang_7", "jlmz_7", "kuang_8", "jlmz_8", "levelInfo", "_scor", "levelRule", "levelClear", "guankaBOSS", "guankaTitle", "btnTiaozhan", "btnContinue", "btnSaodang", "btnGiveUp", "img_Dif", "battleInfos", "group_content", "btnAddTime", "txtChallengeTime", "group_topRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.group_left_i(), this.group_content_i(), this.group_topRight_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["yinziNum", "petYinzi"],
            this.elementsContent = [this._Image1_i(), this.yinziNum_i(), this.petYinzi_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_easybg_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i.yinziNum_i = function() {
            var e = new eui.Label;
            return this.yinziNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textColor = 16765477,
            e.x = 52,
            e.y = 81,
            e
        },
        i.petYinzi_i = function() {
            var e = new eui.Image;
            return this.petYinzi = e,
            e.source = "",
            e.x = 24,
            e.y = 75,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.scaleX = 1,
            e.scaleY = 1,
            e.source = "pve_pet_yinzi_challenge_selected_png",
            e.visible = !1,
            e.x = -8,
            e.y = -12,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["yinziNum", "petYinzi"],
            this.elementsContent = [this._Image1_i(), this.yinziNum_i(), this.petYinzi_i(), this._Image2_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_hardbg_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i.yinziNum_i = function() {
            var e = new eui.Label;
            return this.yinziNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textColor = 16765477,
            e.x = 52,
            e.y = 81,
            e
        },
        i.petYinzi_i = function() {
            var e = new eui.Image;
            return this.petYinzi = e,
            e.source = "",
            e.x = 24,
            e.y = 75,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.scaleX = 1,
            e.scaleY = 1,
            e.source = "pve_pet_yinzi_challenge_selected_png",
            e.visible = !1,
            e.x = -8,
            e.y = -12,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["achieveIcon", "achieveName", "yinziNum", "petYinzi", "chenhao"],
            this.elementsContent = [this._Image1_i(), this.achieveIcon_i(), this.achieveName_i(), this.yinziNum_i(), this.petYinzi_i(), this._Image2_i(), this.chenhao_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "pve_pet_yinzi_challenge_hellbg_png",
            e.x = 0,
            e.y = 0,
            e
        },
        i.achieveIcon_i = function() {
            var e = new eui.Image;
            return this.achieveIcon = e,
            e.source = "",
            e.x = 140,
            e.y = 80,
            e
        },
        i.achieveName_i = function() {
            var e = new eui.Label;
            return this.achieveName = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "成就称号成就",
            e.textColor = 16765477,
            e.x = 165,
            e.y = 81,
            e
        },
        i.yinziNum_i = function() {
            var e = new eui.Label;
            return this.yinziNum = e,
            e.fontFamily = "MFShangHei",
            e.size = 18,
            e.text = "999",
            e.textColor = 16765477,
            e.x = 52,
            e.y = 81,
            e
        },
        i.petYinzi_i = function() {
            var e = new eui.Image;
            return this.petYinzi = e,
            e.source = "",
            e.x = 24,
            e.y = 75,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.scaleX = 1,
            e.scaleY = 1,
            e.source = "pve_pet_yinzi_challenge_selected_png",
            e.visible = !1,
            e.x = -8,
            e.y = -12,
            e
        },
        i.chenhao_i = function() {
            var e = new eui.Image;
            return this.chenhao = e,
            e.height = 24,
            e.source = "pve_pet_yinzi_challenge_chenhao_png",
            e.width = 45,
            e.x = 120,
            e.y = 77,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "pve_pet_yinzi_challenge_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    a.group_left_i = function() {
        var e = new eui.Group;
        return this.group_left = e,
        e.x = 22,
        e.y = 70,
        e.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i()],
        e
    },
    a.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "LevelDiff",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    a.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "LevelDiff",
        e.value = "2",
        e.visible = !0,
        e.x = 0,
        e.y = 131,
        e.skinName = n,
        e
    },
    a.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "LevelDiff",
        e.value = "3",
        e.visible = !0,
        e.x = 0,
        e.y = 262,
        e.skinName = r,
        e
    },
    a.group_content_i = function() {
        var e = new eui.Group;
        return this.group_content = e,
        e.horizontalCenter = 168,
        e.y = 54,
        e.elementsContent = [this.rightContent_i(), this.battleInfos_i()],
        e
    },
    a.rightContent_i = function() {
        var e = new eui.Group;
        return this.rightContent = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.rightbg_i(), this.dif_3_i(), this.dif_2_i(), this.dif_1_i()],
        e
    },
    a.rightbg_i = function() {
        var e = new eui.Image;
        return this.rightbg = e,
        e.source = "pve_pet_yinzi_challenge_dese_png",
        e.visible = !0,
        e.x = 2,
        e.y = 4,
        e
    },
    a.dif_3_i = function() {
        var e = new eui.Image;
        return this.dif_3 = e,
        e.source = "pve_pet_yinzi_challenge_deyu_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.dif_2_i = function() {
        var e = new eui.Image;
        return this.dif_2 = e,
        e.source = "pve_pet_yinzi_challenge_kunnan_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    a.dif_1_i = function() {
        var e = new eui.Image;
        return this.dif_1 = e,
        e.source = "pve_pet_yinzi_challenge_jianchan_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    a.battleInfos_i = function() {
        var e = new eui.Group;
        return this.battleInfos = e,
        e.x = 22,
        e.y = 22,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._list_i(), this._Group2_i(), this._scor_i(), this.levelRule_i(), this.levelClear_i(), this.guankaBOSS_i(), this._Label1_i(), this.guankaTitle_i(), this.btnTiaozhan_i(), this.btnContinue_i(), this.btnSaodang_i(), this.btnGiveUp_i(), this.img_Dif_i()],
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_challenge_line_png",
        e.x = 0,
        e.y = 74,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_challenge_line_png",
        e.x = 0,
        e.y = 227,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_challenge_line_png",
        e.x = 0,
        e.y = 379,
        e
    },
    a._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 96,
        e.itemRendererSkinName = pvePetYinzi.ChallengePetHeadSkin,
        e.width = 730,
        e.x = 0,
        e.y = 115,
        e.layout = this._HorizontalLayout1_i(),
        e.dataProvider = this._ArrayCollection1_i(),
        e
    },
    a._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 40,
        e.paddingLeft = 10,
        e
    },
    a._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
        e
    },
    a._Object1_i = function() {
        var e = {};
        return e.ChallengePetHeadSkin = "",
        e
    },
    a._Object2_i = function() {
        var e = {};
        return e.ChallengePetHeadSkin = "",
        e
    },
    a._Object3_i = function() {
        var e = {};
        return e.ChallengePetHeadSkin = "",
        e
    },
    a._Object4_i = function() {
        var e = {};
        return e.ChallengePetHeadSkin = "",
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 12,
        e.y = 115,
        e.elementsContent = [this._Group1_i(), this.kuang_2_i(), this.jlmz_2_i(), this.kuang_3_i(), this.jlmz_3_i(), this.kuang_4_i(), this.jlmz_4_i(), this.kuang_5_i(), this.jlmz_5_i(), this.kuang_6_i(), this.jlmz_6_i(), this.kuang_7_i(), this.jlmz_7_i(), this.kuang_8_i(), this.jlmz_8_i()],
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 1,
        e.elementsContent = [this.kuang_i(), this.jlmz_i()],
        e
    },
    a.kuang_i = function() {
        var e = new eui.Image;
        return this.kuang = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 1,
        e.y = 0,
        e
    },
    a.jlmz_i = function() {
        var e = new eui.Label;
        return this.jlmz = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 0,
        e.y = 77,
        e
    },
    a.kuang_2_i = function() {
        var e = new eui.Image;
        return this.kuang_2 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 92,
        e.y = 1,
        e
    },
    a.jlmz_2_i = function() {
        var e = new eui.Label;
        return this.jlmz_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 90,
        e.y = 78,
        e
    },
    a.kuang_3_i = function() {
        var e = new eui.Image;
        return this.kuang_3 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 182,
        e.y = 1,
        e
    },
    a.jlmz_3_i = function() {
        var e = new eui.Label;
        return this.jlmz_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 180,
        e.y = 78,
        e
    },
    a.kuang_4_i = function() {
        var e = new eui.Image;
        return this.kuang_4 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 272,
        e.y = 0,
        e
    },
    a.jlmz_4_i = function() {
        var e = new eui.Label;
        return this.jlmz_4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 271,
        e.y = 78,
        e
    },
    a.kuang_5_i = function() {
        var e = new eui.Image;
        return this.kuang_5 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 363,
        e.y = 0,
        e
    },
    a.jlmz_5_i = function() {
        var e = new eui.Label;
        return this.jlmz_5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 361,
        e.y = 78,
        e
    },
    a.kuang_6_i = function() {
        var e = new eui.Image;
        return this.kuang_6 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 453,
        e.y = 0,
        e
    },
    a.jlmz_6_i = function() {
        var e = new eui.Label;
        return this.jlmz_6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 452,
        e.y = 78,
        e
    },
    a.kuang_7_i = function() {
        var e = new eui.Image;
        return this.kuang_7 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 543,
        e.y = 0,
        e
    },
    a.jlmz_7_i = function() {
        var e = new eui.Label;
        return this.jlmz_7 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 542,
        e.y = 78,
        e
    },
    a.kuang_8_i = function() {
        var e = new eui.Image;
        return this.kuang_8 = e,
        e.source = "pve_pet_yinzi_challenge_kuang_png",
        e.x = 634,
        e.y = 0,
        e
    },
    a.jlmz_8_i = function() {
        var e = new eui.Label;
        return this.jlmz_8 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵名字",
        e.textColor = 9157375,
        e.x = 633,
        e.y = 78,
        e
    },
    a._scor_i = function() {
        var e = new eui.Scroller;
        return this._scor = e,
        e.height = 100,
        e.scrollPolicyH = "off",
        e.width = 710,
        e.x = 12,
        e.y = 273,
        e.viewport = this._Group3_i(),
        e
    },
    a._Group3_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.levelInfo_i()],
        e
    },
    a.levelInfo_i = function() {
        var e = new eui.Label;
        return this.levelInfo = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "本关卡在挑战中，不可重复上阵（出战背包派出过的）精灵。\n本关卡在挑战中，不可重复上阵（出战背包派出过的）精灵。本关卡在挑战中，\n本关卡在挑战中，不可重复上阵（出战背包派出过的）精灵。本关卡在挑\n本关卡在挑战中，不可重复上阵（出战背包派出过的）精灵。实打实",
        e.textColor = 9157375,
        e.visible = !0,
        e.width = 710,
        e.x = 0,
        e.y = 0,
        e
    },
    a.levelRule_i = function() {
        var e = new eui.Label;
        return this.levelRule = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "一次战胜【第一战】至【第五战】即可通关",
        e.textColor = 9157375,
        e.x = 12,
        e.y = 40,
        e
    },
    a.levelClear_i = function() {
        var e = new eui.Label;
        return this.levelClear = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "一天之内连续胜利此难度关卡三次，极氪解锁本关卡扫荡功能（需要连续胜利不可中断）",
        e.textColor = 9157375,
        e.x = 12,
        e.y = 421,
        e
    },
    a.guankaBOSS_i = function() {
        var e = new eui.Label;
        return this.guankaBOSS = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "关卡BOSS",
        e.textColor = 4621816,
        e.x = 13,
        e.y = 88,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "关卡词条",
        e.textColor = 4621816,
        e.x = 13,
        e.y = 242,
        e
    },
    a.guankaTitle_i = function() {
        var e = new eui.Label;
        return this.guankaTitle = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "解锁扫荡条件",
        e.textColor = 4621816,
        e.x = 14,
        e.y = 391,
        e
    },
    a.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "pve_pet_yinzi_challenge_btntiaozhan_png",
        e.x = 428,
        e.y = 462,
        e
    },
    a.btnContinue_i = function() {
        var e = new eui.Image;
        return this.btnContinue = e,
        e.source = "pve_pet_yinzi_challenge_btnContinue_png",
        e.x = 428,
        e.y = 462,
        e
    },
    a.btnSaodang_i = function() {
        var e = new eui.Image;
        return this.btnSaodang = e,
        e.source = "pve_pet_yinzi_challenge_btnsaodang_png",
        e.x = 571,
        e.y = 462,
        e
    },
    a.btnGiveUp_i = function() {
        var e = new eui.Image;
        return this.btnGiveUp = e,
        e.source = "pve_pet_yinzi_challenge_btnGiveUp_png",
        e.visible = !1,
        e.x = 571,
        e.y = 462,
        e
    },
    a.img_Dif_i = function() {
        var e = new eui.Image;
        return this.img_Dif = e,
        e.source = "",
        e.x = 6,
        e.y = -10,
        e
    },
    a.group_topRight_i = function() {
        var e = new eui.Group;
        return this.group_topRight = e,
        e.right = 18,
        e.y = 18,
        e.elementsContent = [this._Image5_i(), this.btnAddTime_i(), this.txtChallengeTime_i(), this._Label2_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_challenge_img_di2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    a.btnAddTime_i = function() {
        var e = new eui.Image;
        return this.btnAddTime = e,
        e.source = "pve_pet_yinzi_challenge_btnblueadd_png",
        e.x = 174,
        e.y = 0,
        e
    },
    a.txtChallengeTime_i = function() {
        var e = new eui.Label;
        return this.txtChallengeTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "999",
        e.textColor = 12834813,
        e.x = 133,
        e.y = 2,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "每日挑战次数：",
        e.textColor = 12834813,
        e.x = 13,
        e.y = 1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PvePetYinziLevelSkin.exml"] = window.PvePetYinziLevelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["petItems", "line1", "line2", "line3", "line4", "bas", "_scor", "failTime", "leftDown", "head", "txtbattleNum", "btnZhandou", "wait", "dong", "battleType", "txtInfos", "btnPet", "btnCure", "rigntInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._scor_i(), this.leftDown_i(), this.rigntInfo_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.percentHeight = 100,
        e.source = "pve_pet_yinzi_level_bg_jpg",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i._scor_i = function() {
        var e = new eui.Scroller;
        return this._scor = e,
        e.bounces = !0,
        e.height = 442,
        e.scrollPolicyH = "on",
        e.scrollPolicyV = "off",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 102,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.bas_i()],
        e
    },
    i.bas_i = function() {
        var e = new eui.Group;
        return this.bas = e,
        e.height = 442,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 1650,
        e.y = 0,
        e.elementsContent = [this._Group1_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 442,
        e.x = 50,
        e.y = 0,
        e.elementsContent = [this.petItems_i(), this.line1_i(), this.line2_i(), this.line3_i(), this.line4_i()],
        e
    },
    i.petItems_i = function() {
        var e = new eui.Group;
        return this.petItems = e,
        e.x = 0,
        e.y = 0,
        e
    },
    i.line1_i = function() {
        var e = new eui.Image;
        return this.line1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_pet_yinzi_level_line1_png",
        e.x = 163,
        e.y = 334,
        e
    },
    i.line2_i = function() {
        var e = new eui.Image;
        return this.line2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_pet_yinzi_level_line2_png",
        e.x = 447,
        e.y = 334,
        e
    },
    i.line3_i = function() {
        var e = new eui.Image;
        return this.line3 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_pet_yinzi_level_line1_png",
        e.x = 718,
        e.y = 334,
        e
    },
    i.line4_i = function() {
        var e = new eui.Image;
        return this.line4 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_pet_yinzi_level_line2_png",
        e.visible = !0,
        e.x = 1010,
        e.y = 334,
        e
    },
    i.leftDown_i = function() {
        var e = new eui.Group;
        return this.leftDown = e,
        e.visible = !1,
        e.x = 43,
        e.y = 578,
        e.elementsContent = [this._Image2_i(), this.failTime_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_level_cishudi_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.failTime_i = function() {
        var e = new eui.Label;
        return this.failTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "本轮挑战已失败次数：3",
        e.textColor = 10073599,
        e.x = 28,
        e.y = 5,
        e
    },
    i.rigntInfo_i = function() {
        var e = new eui.Group;
        return this.rigntInfo = e,
        e.visible = !0,
        e.x = 833,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.head_i(), this.txtbattleNum_i(), this.btnZhandou_i(), this.wait_i(), this.dong_i(), this._Group3_i(), this._Group4_i(), this.btnPet_i(), this.btnCure_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "pvepetyinzi_level_rightbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "pve_pet_yinzi_HEADBG_png",
        e.width = 102,
        e.x = 43,
        e.y = 87,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.source = "",
        e.width = 100,
        e.x = 44,
        e.y = 88,
        e
    },
    i.txtbattleNum_i = function() {
        var e = new eui.Label;
        return this.txtbattleNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "第一战",
        e.textColor = 16645983,
        e.x = 45,
        e.y = 44,
        e
    },
    i.btnZhandou_i = function() {
        var e = new eui.Image;
        return this.btnZhandou = e,
        e.source = "pve_pet_yinzi_level_btnzhandou_png",
        e.x = 92,
        e.y = 557,
        e
    },
    i.wait_i = function() {
        var e = new eui.Image;
        return this.wait = e,
        e.source = "pve_pet_yinzi_level_btnwait_png",
        e.x = 92,
        e.y = 557,
        e
    },
    i.dong_i = function() {
        var e = new eui.Image;
        return this.dong = e,
        e.source = "pve_pet_yinzi_level_btnDone_png",
        e.x = 92,
        e.y = 557,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 163,
        e.y = 87,
        e.elementsContent = [this.battleType_i(), this._Label1_i()],
        e
    },
    i.battleType_i = function() {
        var e = new eui.Label;
        return this.battleType = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "多精灵对战",
        e.textColor = 13820671,
        e.x = 1,
        e.y = 31,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "战斗详情",
        e.textColor = 4187130,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 43,
        e.y = 209,
        e.elementsContent = [this._Label2_i(), this.txtInfos_i()],
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "情报探知",
        e.textColor = 4187130,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtInfos_i = function() {
        var e = new eui.Label;
        return this.txtInfos = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "较难的敌人。先制+3，伤害提升300%，可以消除对手能力提升状态，一定程度减伤，每回合结束时戏曲对手一定体力。",
        e.textColor = 13820671,
        e.width = 234,
        e.x = 0,
        e.y = 28,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "pvepetyinzi_level_jlbb_png",
        e.x = 74,
        e.y = 460,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "pvepetyinzi_level_jlhf_png",
        e.x = 171,
        e.y = 460,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PvePetYinziMainSkin.exml"] = window.PvePetYinziMainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "hasPet", "rightbg1", "kuang_1", "petHead", "txtbg_1", "num_1", "icon_1", "pet", "kuang_2", "txtbg_2", "num_2", "icon_2", "wu", "kuang_3", "zstx", "txtbg_3", "num_3", "icon_3", "te", "btnGoToExchange", "eqs", "rightbg2", "grp_mark", "txtbg_4", "kuang_4", "miniMark", "num_4", "icon_4", "btnGoToMark", "hasExchangeMark", "eqsR", "infoBg", "txtInfo", "infoTitle1", "infoTitle2", "infoTitle3", "attr_icon", "abilityNum", "infos", "img_di2", "txtIconNum", "icon", "btnAdd", "item1", "btn14YearBtn_2", "btn14YearBtn_1", "grp_14year_2", "spbg", "btn14Year", "grp_14year", "grp_special", "btnQianzhi", "btnSuperGet", "btnTiaozhan", "btnInfo", "btnCollect", "hasCollect", "grp_left"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.hasPet_i(), this.infos_i(), this.item1_i(), this.grp_special_i(), this.grp_left_i()],
        this.states = [new eui.State("noMark", [new eui.SetProperty("_Image1", "x", 54), new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("rightbg1", "width", 351), new eui.SetProperty("pet", "y", 53), new eui.SetProperty("wu", "x", 239), new eui.SetProperty("wu", "y", 53), new eui.SetProperty("te", "y", 53), new eui.SetProperty("btnGoToExchange", "x", 380), new eui.SetProperty("btnGoToExchange", "y", 83), new eui.SetProperty("eqs", "x", 0), new eui.SetProperty("miniMark", "x", 74), new eui.SetProperty("miniMark", "y", 37), new eui.SetProperty("eqsR", "visible", !1), new eui.SetProperty("infoBg", "x", 54), new eui.SetProperty("txtInfo", "x", 210), new eui.SetProperty("infoTitle1", "x", 70), new eui.SetProperty("infoTitle2", "x", 202), new eui.SetProperty("infoTitle3", "x", 202), new eui.SetProperty("attr_icon", "x", 321), new eui.SetProperty("abilityNum", "x", 82), new eui.SetProperty("infos", "right", 30)]), new eui.State("hasMark", [new eui.SetProperty("_Image1", "x", 64), new eui.SetProperty("rightbg1", "width", 351), new eui.SetProperty("pet", "horizontalCenter", -103), new eui.SetProperty("pet", "verticalCenter", -29), new eui.SetProperty("wu", "horizontalCenter", 95), new eui.SetProperty("wu", "verticalCenter", -29), new eui.SetProperty("te", "verticalCenter", -29), new eui.SetProperty("te", "horizontalCenter", -4), new eui.SetProperty("btnGoToExchange", "horizontalCenter", 3.5), new eui.SetProperty("btnGoToExchange", "verticalCenter", 65), new eui.SetProperty("eqs", "visible", !0), new eui.SetProperty("eqs", "x", 0), new eui.SetProperty("eqs", "height", 214), new eui.SetProperty("rightbg2", "height", 214), new eui.SetProperty("txtbg_4", "x", 1), new eui.SetProperty("txtbg_4", "y", 83), new eui.SetProperty("kuang_4", "x", 1), new eui.SetProperty("kuang_4", "y", 0), new eui.SetProperty("miniMark", "width", 60), new eui.SetProperty("miniMark", "height", 60), new eui.SetProperty("miniMark", "visible", !0), new eui.SetProperty("miniMark", "x", 6), new eui.SetProperty("miniMark", "y", 2), new eui.SetProperty("num_4", "x", 30), new eui.SetProperty("num_4", "y", 82), new eui.SetProperty("icon_4", "x", 0), new eui.SetProperty("icon_4", "y", 75), new eui.SetProperty("hasExchangeMark", "x", 41), new eui.SetProperty("hasExchangeMark", "y", 153), new eui.SetProperty("infoBg", "x", 64), new eui.SetProperty("txtInfo", "x", 221), new eui.SetProperty("infoTitle1", "x", 85), new eui.SetProperty("infoTitle2", "x", 219), new eui.SetProperty("infoTitle3", "x", 219), new eui.SetProperty("attr_icon", "x", 321), new eui.SetProperty("abilityNum", "x", 93), new eui.SetProperty("infos", "width", 574), new eui.SetProperty("infos", "right", 30), new eui.SetProperty("grp_left", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.percentHeight = 100,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.hasPet_i = function() {
        var e = new eui.Image;
        return this.hasPet = e,
        e.height = 40,
        e.source = "pve_pet_yinzi_main_tag_png",
        e.width = 337,
        e.x = 98,
        e.y = 311,
        e
    },
    i.infos_i = function() {
        var e = new eui.Group;
        return this.infos = e,
        e.right = 30,
        e.visible = !0,
        e.y = 214,
        e.elementsContent = [this._Image1_i(), this.eqs_i(), this.eqsR_i(), this.infoBg_i(), this.txtInfo_i(), this.infoTitle1_i(), this.infoTitle2_i(), this.infoTitle3_i(), this.attr_icon_i(), this.abilityNum_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "pve_pet_yinzi_main_line_png",
        e.x = 3,
        e.y = 0,
        e
    },
    i.eqs_i = function() {
        var e = new eui.Group;
        return this.eqs = e,
        e.x = 61,
        e.y = 184,
        e.elementsContent = [this.rightbg1_i(), this.pet_i(), this.wu_i(), this.te_i(), this.btnGoToExchange_i()],
        e
    },
    i.rightbg1_i = function() {
        var e = new eui.Image;
        return this.rightbg1 = e,
        e.source = "",
        e.x = 0,
        e.y = 0,
        e
    },
    i.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.x = 37,
        e.y = 28,
        e.elementsContent = [this.kuang_1_i(), this.petHead_i(), this.txtbg_1_i(), this.num_1_i(), this.icon_1_i()],
        e
    },
    i.kuang_1_i = function() {
        var e = new eui.Image;
        return this.kuang_1 = e,
        e.source = "",
        e.x = 1,
        e.y = 0,
        e
    },
    i.petHead_i = function() {
        var e = new eui.Image;
        return this.petHead = e,
        e.height = 68,
        e.width = 68,
        e.x = 3,
        e.y = 1,
        e
    },
    i.txtbg_1_i = function() {
        var e = new eui.Image;
        return this.txtbg_1 = e,
        e.source = "",
        e.x = 1,
        e.y = 83,
        e
    },
    i.num_1_i = function() {
        var e = new eui.Label;
        return this.num_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 30,
        e.y = 82,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.source = "",
        e.x = 0,
        e.y = 75,
        e
    },
    i.wu_i = function() {
        var e = new eui.Group;
        return this.wu = e,
        e.elementsContent = [this.kuang_2_i(), this._Image2_i(), this.txtbg_2_i(), this.num_2_i(), this.icon_2_i()],
        e
    },
    i.kuang_2_i = function() {
        var e = new eui.Image;
        return this.kuang_2 = e,
        e.source = "",
        e.x = 1,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "pve_pet_yinzi_main_diwujineng_png",
        e.x = 12,
        e.y = 11,
        e
    },
    i.txtbg_2_i = function() {
        var e = new eui.Image;
        return this.txtbg_2 = e,
        e.source = "",
        e.x = 1,
        e.y = 83,
        e
    },
    i.num_2_i = function() {
        var e = new eui.Label;
        return this.num_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 30,
        e.y = 82,
        e
    },
    i.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.source = "",
        e.x = 0,
        e.y = 75,
        e
    },
    i.te_i = function() {
        var e = new eui.Group;
        return this.te = e,
        e.x = 138,
        e.y = 28,
        e.elementsContent = [this.kuang_3_i(), this.zstx_i(), this.txtbg_3_i(), this.num_3_i(), this.icon_3_i()],
        e
    },
    i.kuang_3_i = function() {
        var e = new eui.Image;
        return this.kuang_3 = e,
        e.source = "",
        e.x = 1,
        e.y = 0,
        e
    },
    i.zstx_i = function() {
        var e = new eui.Image;
        return this.zstx = e,
        e.source = "common_pet_yin_icon_png",
        e.x = 9,
        e.y = 11,
        e
    },
    i.txtbg_3_i = function() {
        var e = new eui.Image;
        return this.txtbg_3 = e,
        e.source = "",
        e.x = 1,
        e.y = 83,
        e
    },
    i.num_3_i = function() {
        var e = new eui.Label;
        return this.num_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 30,
        e.y = 82,
        e
    },
    i.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.source = "",
        e.x = 0,
        e.y = 75,
        e
    },
    i.btnGoToExchange_i = function() {
        var e = new eui.Image;
        return this.btnGoToExchange = e,
        e.source = "pve_pet_yinzi_main_btnsaodang_png",
        e.x = 112,
        e.y = 149,
        e
    },
    i.eqsR_i = function() {
        var e = new eui.Group;
        return this.eqsR = e,
        e.x = 362,
        e.y = 184,
        e.elementsContent = [this.grp_mark_i(), this._Group1_i(), this.btnGoToMark_i(), this.hasExchangeMark_i()],
        e
    },
    i.grp_mark_i = function() {
        var e = new eui.Group;
        return this.grp_mark = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.rightbg2_i()],
        e
    },
    i.rightbg2_i = function() {
        var e = new eui.Image;
        return this.rightbg2 = e,
        e.source = "",
        e.width = 207,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -4.5,
        e.verticalCenter = -29,
        e.visible = !0,
        e.elementsContent = [this.txtbg_4_i(), this.kuang_4_i(), this.miniMark_i(), this.num_4_i(), this.icon_4_i()],
        e
    },
    i.txtbg_4_i = function() {
        var e = new eui.Image;
        return this.txtbg_4 = e,
        e.source = "",
        e.visible = !0,
        e.x = 67,
        e.y = 111,
        e
    },
    i.kuang_4_i = function() {
        var e = new eui.Image;
        return this.kuang_4 = e,
        e.source = "",
        e.x = 67,
        e.y = 28,
        e
    },
    i.miniMark_i = function() {
        var e = new eui.Image;
        return this.miniMark = e,
        e.source = "",
        e.visible = !0,
        e
    },
    i.num_4_i = function() {
        var e = new eui.Label;
        return this.num_4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 96,
        e.y = 110,
        e
    },
    i.icon_4_i = function() {
        var e = new eui.Image;
        return this.icon_4 = e,
        e.source = "",
        e.x = 66,
        e.y = 103,
        e
    },
    i.btnGoToMark_i = function() {
        var e = new eui.Image;
        return this.btnGoToMark = e,
        e.source = "pve_pet_yinzi_main_btnDuihuan_png",
        e.x = 37,
        e.y = 149,
        e
    },
    i.hasExchangeMark_i = function() {
        var e = new eui.Image;
        return this.hasExchangeMark = e,
        e.source = "pve_pet_yinzi_main_yiduihuan_png",
        e.x = 37,
        e.y = 149,
        e
    },
    i.infoBg_i = function() {
        var e = new eui.Image;
        return this.infoBg = e,
        e.height = 172,
        e.scale9Grid = new egret.Rectangle(39, 18, 9, 18),
        e.source = "pve_pet_yinzi_main_nenglibg_png",
        e.visible = !0,
        e.width = 513,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtInfo_i = function() {
        var e = new eui.Label;
        return this.txtInfo = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "文字文字文字文字文字文字文字文字文字\n文字文字文字文字文字文字文字文字文字\n文字文字文字文字文字文字文字文字文字\n文字文字文字",
        e.textColor = 16777215,
        e.width = 331,
        e.x = 160,
        e.y = 81,
        e
    },
    i.infoTitle1_i = function() {
        var e = new eui.Image;
        return this.infoTitle1 = e,
        e.source = "",
        e.x = 20,
        e.y = 16,
        e
    },
    i.infoTitle2_i = function() {
        var e = new eui.Image;
        return this.infoTitle2 = e,
        e.source = "",
        e.x = 153,
        e.y = 16,
        e
    },
    i.infoTitle3_i = function() {
        var e = new eui.Image;
        return this.infoTitle3 = e,
        e.source = "",
        e.x = 153,
        e.y = 51,
        e
    },
    i.attr_icon_i = function() {
        var e = new eui.Image;
        return this.attr_icon = e,
        e.height = 40,
        e.source = "",
        e.width = 40,
        e.x = 260,
        e.y = 10,
        e
    },
    i.abilityNum_i = function() {
        var e = new eui.Label;
        return this.abilityNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 60,
        e.text = "999",
        e.textColor = 16771648,
        e.x = 32,
        e.y = 72,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.right = 11,
        e.y = 11,
        e.elementsContent = [this.img_di2_i(), this.txtIconNum_i(), this.icon_i(), this.btnAdd_i()],
        e
    },
    i.img_di2_i = function() {
        var e = new eui.Image;
        return this.img_di2 = e,
        e.source = "",
        e.x = 0,
        e.y = 7,
        e
    },
    i.txtIconNum_i = function() {
        var e = new eui.Label;
        return this.txtIconNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999",
        e.textColor = 16635075,
        e.x = 64,
        e.y = 9,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 35,
        e.source = "",
        e.width = 35,
        e.x = 13,
        e.y = 0,
        e
    },
    i.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "pve_pet_yinzi_challenge_btnblueadd_png",
        e.x = 110,
        e.y = 7,
        e
    },
    i.grp_special_i = function() {
        var e = new eui.Group;
        return this.grp_special = e,
        e.percentHeight = 100,
        e.touchEnabled = !1,
        e.percentWidth = 100,
        e.elementsContent = [this.grp_14year_2_i(), this.grp_14year_i()],
        e
    },
    i.grp_14year_2_i = function() {
        var e = new eui.Group;
        return this.grp_14year_2 = e,
        e.height = 200,
        e.visible = !1,
        e.width = 200,
        e.x = 0,
        e.y = 428,
        e.elementsContent = [this._Image3_i(), this.btn14YearBtn_2_i(), this.btn14YearBtn_1_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "pve_pet_yinzi_main_spbg_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btn14YearBtn_2_i = function() {
        var e = new eui.Image;
        return this.btn14YearBtn_2 = e,
        e.source = "pve_pet_yinzi_main_14Year_btn2_png",
        e.x = 355,
        e.y = -6,
        e
    },
    i.btn14YearBtn_1_i = function() {
        var e = new eui.Image;
        return this.btn14YearBtn_1 = e,
        e.source = "pve_pet_yinzi_main_14Year_png",
        e.x = 264,
        e.y = -6,
        e
    },
    i.grp_14year_i = function() {
        var e = new eui.Group;
        return this.grp_14year = e,
        e.left = -70,
        e.visible = !1,
        e.y = 422,
        e.elementsContent = [this.spbg_i(), this.btn14Year_i()],
        e
    },
    i.spbg_i = function() {
        var e = new eui.Image;
        return this.spbg = e,
        e.scale9Grid = new egret.Rectangle(11, 6, 9, 57),
        e.source = "pve_pet_yinzi_main_spbg_png",
        e.width = 465,
        e.x = 0,
        e.y = 7,
        e
    },
    i.btn14Year_i = function() {
        var e = new eui.Image;
        return this.btn14Year = e,
        e.source = "pve_pet_yinzi_main_14Year_png",
        e.x = 371,
        e.y = 0,
        e
    },
    i.grp_left_i = function() {
        var e = new eui.Group;
        return this.grp_left = e,
        e.touchEnabled = !1,
        e.x = -78,
        e.y = 0,
        e.elementsContent = [this.btnQianzhi_i(), this.btnSuperGet_i(), this.btnTiaozhan_i(), this.btnInfo_i(), this.btnCollect_i(), this.hasCollect_i()],
        e
    },
    i.btnQianzhi_i = function() {
        var e = new eui.Image;
        return this.btnQianzhi = e,
        e.source = "pve_pet_yinzi_main_btnqianzhi_png",
        e.visible = !1,
        e.x = 92,
        e.y = 258,
        e
    },
    i.btnSuperGet_i = function() {
        var e = new eui.Image;
        return this.btnSuperGet = e,
        e.source = "pve_pet_yinzi_main_btnget_png",
        e.x = 195,
        e.y = 547,
        e
    },
    i.btnTiaozhan_i = function() {
        var e = new eui.Image;
        return this.btnTiaozhan = e,
        e.source = "pve_pet_yinzi_main_btntiaozhan_png",
        e.x = 341,
        e.y = 547,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "pve_pet_yinzi_main_btninfo_png",
        e.x = 102,
        e.y = 470,
        e
    },
    i.btnCollect_i = function() {
        var e = new eui.Image;
        return this.btnCollect = e,
        e.height = 56,
        e.source = "pve_pet_yinzi_main_btnsc_png",
        e.visible = !0,
        e.width = 53,
        e.x = 103,
        e.y = 541,
        e
    },
    i.hasCollect_i = function() {
        var e = new eui.Image;
        return this.hasCollect = e,
        e.height = 56,
        e.source = "pve_pet_yinzi_main_btnysc_png",
        e.visible = !0,
        e.width = 55,
        e.x = 102,
        e.y = 541,
        e
    },
    t
} (eui.Skin);