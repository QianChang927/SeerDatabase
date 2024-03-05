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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.ForeverArr = [4590, 14358, 4593, 14378],
            e.skinName = "QingLongLevelPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent(),
            this._anim1 = SpineUtil.createAnimate("shuiwo"),
            this._anim1.touchEnabled = this._anim1.touchChildren = !1,
            this.btnLevel1.parent.addChildAt(this._anim1, 1),
            this._anim1.x = this.btnLevel1.x,
            this._anim1.y = this.btnLevel1.y,
            this._anim1.play("shui_xuanwo"),
            this._anim2 = SpineUtil.createAnimate("shuiwo"),
            this._anim2.touchEnabled = this._anim2.touchChildren = !1,
            this.btnLevel2.parent.addChildAt(this._anim2, 1),
            this._anim2.x = this.btnLevel2.x,
            this._anim2.y = this.btnLevel2.y,
            this._anim2.play("shui_xuanwo"),
            this._anim3 = SpineUtil.createAnimate("shuiwo"),
            this._anim3.touchEnabled = this._anim3.touchChildren = !1,
            this.btnLevel3.parent.addChildAt(this._anim3, 1),
            this._anim3.x = this.btnLevel3.x,
            this._anim3.y = this.btnLevel3.y,
            this._anim3.play("shui_xuanwo")
        },
        i.prototype.init = function() {},
        i.prototype.beforeAdd = function() {
            var e = this;
            KTool.getGlobalValues(157, [1],
            function(t) {
                e.txtNumAll.text = "当前已有" + t[0] + "名玩家获得苍魂·青龙"
            })
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.initOldPveBtnClose(0, this, "",
            function() {
                t.service.openPanel(e.PanelConst.MAIN_PANEL)
            },
            this),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0"),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249428, 1,
                    function() {
                        KTool.doExchange(9727, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPet, this.service.showPetBag, this),
            ImageButtonUtil.add(this.btnCure, this.service.cureAllPet, this),
            ImageButtonUtil.add(this.btnLevel1,
            function() {
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入龙威在天面板"),
                t.service.openPanel(e.PanelConst.FIRST_LEVEL_PANEL)
            },
            this, !0, !1),
            ImageButtonUtil.add(this.btnLevel2,
            function() {
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入亢龙有悔面板"),
                t.service.openPanel(e.PanelConst.SECOND_LEVEL_MAIN_PANEL)
            },
            this, !0, !1),
            ImageButtonUtil.add(this.btnLevel3,
            function() {
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入龙战于野面板"),
                t.service.openPanel(e.PanelConst.THIRD_LEVEL_PANEL)
            },
            this, !0, !1)
        },
        i.prototype.update = function() {
            this._buyNum = this.service.getValue(14378),
            this.txtTimes.text = "今日已购买:" + this._buyNum + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, this._buyNum < 10);
            var e = this.service.getValue(this.ForeverArr[2]);
            e > 0 ? (this.groupFinish.visible = !0, this.groupNotFinish.visible = !1, this.txtNumMine.text = "恭喜你成为第" + e + "个获得青龙的玩家") : (this.groupFinish.visible = !1, this.groupNotFinish.visible = !0);
            for (var t = this.service.getValue(this.ForeverArr[0]), i = this.service.getValue(this.ForeverArr[1]), n = 1 == KTool.getBit(t, 1), o = 1; 3 >= o; o++) {
                var r = 1 == KTool.getBit(i, o) || n;
                this["flagLevel" + o].visible = r,
                this["flagLevel" + o].source = n ? "qing_long_level_panel_complete_png": "qing_long_level_panel_finish_png"
            }
        },
        i.prototype.updateValues = function() {
            var e = this;
            this.service.updateSomeValues(this.ForeverArr).then(function() {
                e.update()
            })
        },
        i
    } (BasicPanel);
    e.LevelPanel = t,
    __reflect(t.prototype, "qingLong.LevelPanel")
} (qingLong || (qingLong = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(o, r) {
        function s(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(s, a)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (s = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(r, i[1])).done) return s;
            switch (r = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, r, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
qingLong; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "qingLong.MainPanel",
        e.GET_PANEL = "qingLong.GetPanel",
        e.LEVEL_PANEL = "qingLong.LevelPanel",
        e.FIRST_LEVEL_PANEL = "qingLong.FirstLevelPanel",
        e.SECOND_LEVEL_MAIN_PANEL = "qingLong.SecondLevelMainPanel",
        e.SECOND_LEVEL_PREPARE_PANEL = "qingLong.SecondLevelPreparePanel",
        e.SECOND_LEVEL_FIGHT_PANEL = "qingLong.SecondLevelFightPanel",
        e.THIRD_LEVEL_PANEL = "qingLong.ThirdLevelPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "qingLong.PanelConst");
    var i = function() {
        function e() {}
        return e.EVENT_FIRST_LEVEL_CLICK_ITEM = "qingLong.firstLevelClickItem",
        e.EVENT_SELECT_PET = "qingLong.selectPet",
        e.EVENT_CHOOSE_PET_UP = "qingLong.ChoosePetUp",
        e.EVENT_CHOOSE_PET_DOWN = "qingLong.ChoosePetDown",
        e.EVENT_SECOND_LEVEL_RESET = "qingLong.secondLevelReset",
        e.EVENT_FINSH_LEVEL = "qingLong.finishLevel",
        e
    } ();
    e.EventConst = i,
    __reflect(i.prototype, "qingLong.EventConst");
    var n = function() {
        function e() {}
        return e.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, o;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (e.PET_BAG_Value = [], t = [], i = 101768; 101817 >= i; i++) t.push(i);
                        return [4, KTool.getMultiValueAsync(t)];
                    case 1:
                        n = r.sent();
                        for (o in t) this.PET_BAG_Value[t[o]] = n[o];
                        return [2]
                    }
                })
            })
        },
        e
    } ();
    e.AttrConst = n,
    __reflect(n.prototype, "qingLong.AttrConst")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._isHighlight = !1,
            e.skinName = "QingLongFirstLevelItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        },
        i.prototype.onClick = function() {
            EventManager.dispatchEventWith(e.EventConst.EVENT_FIRST_LEVEL_CLICK_ITEM, !1, this.data)
        },
        i.prototype.dataChanged = function() {
            this._petId = this.data.petId,
            this._isHighlight = this.data.isHighlight,
            this.imgHead.source = ClientConfig.getPetHeadPath(this._petId),
            this.txtName.text = PetXMLInfo.getName(this._petId),
            this.txtName.text.length > 6 && (this.txtName.size = 18),
            this.setHighlight(this._isHighlight)
        },
        i.prototype.setHighlight = function(e) {
            void 0 === e && (e = !0),
            this._isHighlight = e,
            this._isHighlight ? (this.bg.source = "qing_long_first_level_item_hlimg_png", this.txtName.textColor = 6159871) : (this.bg.source = "qing_long_first_level_item_imgbg_png", this.txtName.textColor = 5039103)
        },
        i
    } (eui.ItemRenderer);
    e.FirstlevelItem = t,
    __reflect(t.prototype, "qingLong.FirstlevelItem")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongListPetItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.item = new e.PetItem,
            this.addChild(this.item)
        },
        i.prototype.dataChanged = function() {
            this.item.setPetInfo(1, this.data)
        },
        i
    } (eui.ItemRenderer);
    e.ListPetItem = t,
    __reflect(t.prototype, "qingLong.ListPetItem")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongPetItemSkin",
            e
        }
        return __extends(i, t),
        Object.defineProperty(i.prototype, "canClick", {
            get: function() {
                return this._canClick
            },
            set: function(e) {
                this._canClick = e,
                this.imgHasOn.visible = !e
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            EventManager.removeAll(this)
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            this.canClick = this.cacheAsBitmap = !0,
            this.imgSelect.visible = this.imgHasDie.visible = this.imgFirst.visible = !1,
            EventManager.addEventListener("petInfoPop.skillChangeOver",
            function(e) {
                if (t.petInfo) {
                    var i = e.data.catchTime,
                    n = e.data.newPetInfo;
                    t.petInfo.catchTime == i && (t.petInfo = n)
                }
            },
            this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                if (t.petInfo && t.canClick) if (t.type <= 2) {
                    var i = [{
                        buttonBG: 1,
                        buttonName: 1 == t.type ? "上阵": "下阵",
                        callback: function() {
                            EventManager.dispatchEventWith(1 == t.type ? e.EventConst.EVENT_CHOOSE_PET_UP: e.EventConst.EVENT_CHOOSE_PET_DOWN, !1, t.petInfo),
                            EventManager.dispatchEventWith(petInfoPop.EventConst.CLOSE_POP_AND_MODULE)
                        },
                        caller: t
                    }],
                    n = {
                        petInfo: t.petInfo,
                        buttonInfo: i,
                        canChangeSkill: !0,
                        popBGAlpha: .7
                    };
                    ModuleManager.ignoreReshow++,
                    ModuleManager.showModuleByID(config.ModuleConst.PET_INFO_POP, n)
                } else t.type >= 3 && EventManager.dispatchEventWith(e.EventConst.EVENT_SELECT_PET, !1, {
                    index: t.index,
                    type: t.type
                })
            },
            this)
        },
        i.prototype.setPetInfo = function(e, t, i) {
            if (void 0 === i && (i = !1), this.isFirst = i, this.imgFirst.visible = i && !!t, this.imgSelect.visible = !1, this.type = e, 2 == e ? (this.height = 156, this.txtName.visible = !0) : (this.height = 131, this.txtName.visible = !1), e >= 3 && (this.scaleX = this.scaleY = .8), "number" == typeof t) if (0 == t) this.imgHead.source = "",
            this.txtName.text = "",
            this.txtLv.text = "",
            this.petInfo = null;
            else {
                if (this.petInfo = PetManager.getPetInfo(t), !this.petInfo) for (var n = 0,
                o = PetStorage2015InfoManager.allInfo; n < o.length; n++) {
                    var r = o[n];
                    if (r.catchTime == t) {
                        this.petInfo = r;
                        break
                    }
                }
                this.txtLv.text = "LV." + this.petInfo.level,
                this.txtName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this.petInfo.id), 6),
                this.imgHead.source = ClientConfig.getPetHeadPath(this.petInfo.id, this.petInfo.catchTime, this.petInfo.skinId)
            } else this.petInfo = t,
            this.txtLv.text = "LV." + t.level,
            this.txtName.text = PetXMLInfo.getName(t.id),
            this.imgHead.source = ClientConfig.getPetHeadPath(t.id, t.catchTime, t.skinId)
        },
        i
    } (eui.Component);
    e.PetItem = t,
    __reflect(t.prototype, "qingLong.PetItem")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongSecondLevelBossItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.setInfo = function(e, t, i, n) {
            this.imgHead.source = "qing_long_second_level_fight_panel_imghead" + e[0] + "_png",
            this.imgHas.visible = t,
            this.imgNow.visible = i,
            this.imgBG.visible = !i,
            this.bossConfig = e,
            this.hasWin = t,
            this.isNow = i,
            this.service = n
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                if (t.isNow) {
                    var i = 15 - t.service.getValue(14377);
                    i > 0 ? PopViewManager.getInstance().openView(new e.SecondLevelFightPop(t.bossConfig)) : BubblerManager.getInstance().showText("挑战次数不足")
                }
            },
            this)
        },
        i
    } (eui.Component);
    e.SecondLevelBossItem = t,
    __reflect(t.prototype, "qingLong.SecondLevelBossItem")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = "QingLongSkillItemSkin",
            i.skillInfo = t,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e, t = this;
            if (4 == SkillXMLInfo.getCategory(this.skillInfo.id)) e = ClientConfig.getpettypeticon("prop");
            else {
                var i = SkillXMLInfo.getTypeID(this.skillInfo.id);
                e = ClientConfig.getpettypeticon(i + "")
            }
            this.imgIcon.source = e,
            this.txtName.text = this.skillInfo.name,
            this.txt.text = "威力:" + this.skillInfo.damage + "    PP:" + this.skillInfo.pp + "/" + this.skillInfo.maxPP,
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                var e = {};
                e.id = t.skillInfo.id,
                e.petInfo = t.skillInfo.petInfo,
                tipsPop.TipsPop.openSkillPop(e)
            },
            this)
        },
        t
    } (eui.Component);
    e.SkillItem = t,
    __reflect(t.prototype, "qingLong.SkillItem")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._inKb = !1,
            e.levelItems = [],
            e.FightPets = [2739, 2787, 2844, 2988, 2959, 3105, 3174, 3150, 3211, 3223, 3200, 3240],
            e.ForeverArr = [14359, 14360, 14361, 14358, 14372, 4590, 14378],
            e._isFirstWin = !1,
            e._isWinFight = !1,
            e._needShowCurItem = !1,
            e.skinName = "QingLongFirstLevelPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            this.txtDescribe.text = "30分钟之内内击败所有龙族守卫即可证明自身实力！开启挑战后的最后10分钟，龙族守卫将陷入狂暴状态！";
            for (var t = 0; 12 > t; t++) {
                var i = new e.FirstlevelItem;
                i.data = {
                    petId: this.FightPets[t],
                    isHighlight: !1
                },
                this.levelItems.push(i),
                this.groupLevel.addChild(i),
                i.x = 110 + 210 * t,
                i.y = t % 2 == 1 ? 10 : 90
            }
            this.groupLevel.width += 630
        },
        i.prototype.addEvent = function() {
            var t = this;
            this.initOldPveBtnClose(0, this, "qing_long_first_level_panel_imgtitle_png",
            function() {
                t.service.openPanel(e.PanelConst.LEVEL_PANEL)
            },
            this),
            EventManager.addEventListener(e.EventConst.EVENT_FIRST_LEVEL_CLICK_ITEM, this.onClickItem, this),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0"),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249428, 1,
                    function() {
                        KTool.doExchange(9727, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTimes,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249422, 1,
                    function() {
                        KTool.doExchange(9726, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPet, this.service.showPetBag, this),
            ImageButtonUtil.add(this.btnCure, this.service.cureAllPet, this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "开启挑战"),
                SocketConnection.sendWithPromise(46292, [1, 0]).then(function() {
                    t.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btnEnter,
            function() {
                if (t._fightNum < 1) BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！");
                else {
                    if (0 == PetManager.isPackSpiriHavetHp) return void(0 == PetManager.infos.length ? Alarm.show("你没有可出战的精灵哦！") : Alarm.show("你背包里面的精灵体力都不够了哦！赶紧给它们补充体力吧！"));
                    EventManager.addEventListener(PetFightEvent.ALARM_CLICK, t.showCurItem, t),
                    t.service.unregisterClock(t.txtCountdown1),
                    FightManager.fightNoMapBoss((t._inKb ? 8513 : 8501) + t._fightIndex)
                }
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            this._fightNum = 20 - this.service.getValue(14359),
            this.txtFightTimes.text = "今日挑战次数: " + this._fightNum,
            DisplayUtil.setEnabled(this.btnAddFightTimes, this._fightNum < 1),
            this._buyNum = this.service.getValue(14378),
            this.txtTimes.text = "今日已购买:" + this._buyNum + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, this._buyNum < 10);
            var i = this.service.getValue(14360);
            if (this._isWinFight = i > this._fightIndex && this.service.getValue(14361) > 0, this._fightIndex = i, 12 == this._fightIndex) return void SocketConnection.sendWithPromise(46292, [4, 0]).then(function() {
                t._isFirstWin ? Alarm.show("恭喜你，成功通过了龙威在天关卡，今日通过全部关卡即可获得青龙完全体进化的资格！") : Alarm.show("恭喜你，完成了龙威在天关卡！"),
                t.service.updateSomeValues(t.ForeverArr).then(function() {
                    EventManager.dispatchEventWith(e.EventConst.EVENT_FINSH_LEVEL)
                })
            });
            this._isFirstWin = 0 == KTool.getBit(this.service.getValue(14358), 1),
            this.txtRound.text = "第" + (this._fightIndex + 1) + "/12轮";
            var n = this.FightPets[this._fightIndex];
            this.imgHead.source = ClientConfig.getPetHeadPath(n);
            var o = this.service.getValue(14361),
            r = SystemTimerManager.time - o,
            s = 2 == this.service.getValue(14372),
            a = s ? 1500 : 1200;
            if (o > 0) {
                this.btnOpen.visible = !1,
                this.btnEnter.visible = !0,
                1801 > r ? (this.service.unregisterClock(this.txtCountdown1), this.service.registerClock(o + 1800,
                function() {
                    Alarm.show("很抱歉，你尚未在30分钟内通过龙威在天关卡，请继续努力吧！"),
                    SocketConnection.sendWithPromise(46292, [4, 0]).then(function() {
                        t.updateValues()
                    })
                },
                this, this.txtCountdown1, !1)) : (Alarm.show("很抱歉，你尚未在30分钟内通过龙威在天关卡，请继续努力吧！"), SocketConnection.sendWithPromise(46292, [4, 0]).then(function() {
                    t.updateValues()
                }), this._needShowCurItem = !1),
                a > r ? (this.service.unregisterClock(this.txtCountdown2), this.service.registerClock(o + a,
                function() {
                    t.txtKbCD.visible = !1,
                    t.txtKb.visible = !0,
                    t.txtCountdown2.visible = !1,
                    t._inKb = !0
                },
                this, this.txtCountdown2, !1), this.txtKbCD.visible = !0, this.txtKb.visible = !1, this.txtCountdown2.visible = !0, this._inKb = !1) : (this.txtKbCD.visible = !1, this.txtKb.visible = !0, this.txtCountdown2.visible = !1, this._inKb = !0);
                for (var _ = 0; 12 > _; _++) this.levelItems[_].setHighlight(_ == this._fightIndex)
            } else {
                this.service.unregisterClock(this.txtCountdown1),
                this.service.unregisterClock(this.txtCountdown2),
                this.btnOpen.visible = !0,
                this.btnEnter.visible = !1,
                this._inKb = !1,
                this.txtKbCD.visible = !0,
                this.txtKb.visible = !1,
                this.txtCountdown2.text = "00:00",
                this.txtCountdown1.text = "00:00";
                for (var _ = 0; 12 > _; _++) this.levelItems[_].setHighlight(!1)
            }
            this._needShowCurItem && this._isWinFight ? (this._needShowCurItem = !1, BubblerManager.getInstance().showText("恭喜你，成功战胜该龙族守卫！"), this._fightIndex >= 1 ? egret.setTimeout(function() {
                var e = 210 * (t._fightIndex - 1) + 90;
                gsap.fromTo(t.groupLevel.parent, {
                    scrollH: e - 200
                },
                {
                    scrollH: e,
                    duration: .3
                })
            },
            this, 150) : this.groupLevel.parent.scrollH = 0) : (this._needShowCurItem = !1, this._fightIndex >= 1 ? this.groupLevel.parent.scrollH = 210 * (this._fightIndex - 1) + 90 : this.groupLevel.parent.scrollH = 0)
        },
        i.prototype.showCurItem = function(e) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.showCurItem, this),
            this._needShowCurItem = !0
        },
        i.prototype.updateValues = function() {
            var e = this;
            this.service.updateSomeValues(this.ForeverArr).then(function() {
                e.update()
            })
        },
        i.prototype.onClickItem = function(e) {
            e.data
        },
        i.prototype.removed = function() {
            this.service.unregisterClock(this.txtCountdown1),
            this.service.unregisterClock(this.txtCountdown2)
        },
        i
    } (BasicPanel);
    e.FirstLevelPanel = t,
    __reflect(t.prototype, "qingLong.FirstLevelPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.ForeverArr = [4590, 14378],
            e.skinName = "QingLongGetPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入获得天苍玄魂·青龙界面"),
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {},
        i.prototype.addEvent = function() {
            var t = this;
            this.initOldPveBtnClose(0, this, "qing_long_get_panel_imgtitle_png",
            function() {
                t.service.openPanel(e.PanelConst.MAIN_PANEL)
            },
            this),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0"),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249428, 1,
                    function() {
                        KTool.doExchange(9727, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnGetItem,
            function() {
                t.service.openPanel(e.PanelConst.LEVEL_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnGetPet,
            function() {
                ModuleManager.showModuleByID(56),
                t.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                t._canEvo ? t._itemNum >= 15 ? PetManager.updateBagInfo(function() {
                    2545 == PetManager.getPetInfo(PetManager.defaultTime).id ? SocketConnection.sendByQueue(43076, [PetManager.getPetInfo(PetManager.defaultTime).catchTime, 615],
                    function(e) {
                        var i = e.data,
                        n = i.readUnsignedInt();
                        PetManager.upDateBagPetInfo(n),
                        SocketConnection.sendWithPromise(46292, [12, 0]).then(function() {
                            t.updateValues()
                        })
                    }) : (BubblerManager.getInstance().showText("请将苍魂·青龙放入出战背包首发！"), t.service.showPetBag())
                }) : BubblerManager.getInstance().showText("你的苍魂气魄数量不足，无法将苍魂·青龙进化为天苍玄魂·青龙！") : Alarm.show("你还未获得超进化资格！")
            },
            this),
            ImageButtonUtil.add(this.btnUp,
            function() {
                t._itemNum >= 15 ? PetManager.updateBagInfo(function() {
                    3289 == PetManager.getPetInfo(PetManager.defaultTime).id ? SocketConnection.sendWithPromise(46292, [7, 0]).then(function() {
                        t.updateValues()
                    }) : (BubblerManager.getInstance().showText("请将天苍玄魂·青龙放在背包首发位置再来进行能力提升！"), t.service.showPetBag())
                }) : BubblerManager.getInstance().showText("你的苍魂气魄数量不足，无法对天苍玄魂·青龙进行能力提升！")
            },
            this)
        },
        i.prototype.update = function() {
            this._buyNum = this.service.getValue(14378),
            this.txtTimes.text = "今日已购买:" + this._buyNum + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, this._buyNum < 10),
            this._itemNum = ItemManager.getNumByID(1711783);
            var e = this.service.getValue(4590);
            this._canEvo = 1 == KTool.getBit(e, 1),
            1 == KTool.getBit(e, 2) ? (DisplayUtil.setEnabled(this.btnEvo, !1, !0), this.imgHasEvo.visible = !0) : this.imgHasEvo.visible = !1,
            1 == KTool.getBit(e, 3) ? (DisplayUtil.setEnabled(this.btnUp, !1, !0), this.imgHasUp.visible = !0) : this.imgHasUp.visible = !1
        },
        i.prototype.updateValues = function() {
            var e = this;
            this.service.updateSomeValues(this.ForeverArr).then(function() {
                e.update()
            })
        },
        i
    } (BasicPanel);
    e.GetPanel = t,
    __reflect(t.prototype, "qingLong.GetPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this,
            o = [[14359, 14360, 14361, 14358, 14372, 4590, 20097, 14378, 14358, 4593, 14374, 14375], [], [], [], []],
            r = [[], [14362, 14363, 14364, 14365, 14366, 14367, 14377], [], [], []];
            return n.service.setValues(o[0].concat(r[0]), o[1].concat(r[1]), o[2].concat(r[2]), o[3].concat(r[3]), o[4].concat(r[4]), [], [761]),
            PetStorage2015InfoManager.getTotalInfo().then(function() {
                e.AttrConst.init().then(function() {
                    n.init([{
                        panelName: e.PanelConst.MAIN_PANEL,
                        isMain: !i || !i["goto"]
                    },
                    {
                        panelName: e.PanelConst.GET_PANEL,
                        isMain: i && 1 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.LEVEL_PANEL,
                        isMain: i && 2 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.FIRST_LEVEL_PANEL,
                        isMain: i && 3 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.SECOND_LEVEL_MAIN_PANEL,
                        isMain: i && 4 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.SECOND_LEVEL_PREPARE_PANEL,
                        isMain: i && 5 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.SECOND_LEVEL_FIGHT_PANEL,
                        isMain: i && 6 == i["goto"]
                    },
                    {
                        panelName: e.PanelConst.THIRD_LEVEL_PANEL,
                        isMain: i && 7 == i["goto"]
                    }])
                })
            }),
            EventManager.addEventListener(e.EventConst.EVENT_FINSH_LEVEL, n.onFinshLevel, n),
            n
        }
        return __extends(i, t),
        i.prototype.onFinshLevel = function(t) {
            var i = this;
            this.service.updateSomeValues([14358]).then(function() {
                var t = i.service.getValue(14358);
                KTool.getBit(t, 1) + KTool.getBit(t, 2) + KTool.getBit(t, 3) == 3 ? i.service.openPanel(e.PanelConst.GET_PANEL) : i.service.openPanel(e.PanelConst.LEVEL_PANEL)
            })
        },
        i.prototype.destroy = function() {
            EventManager.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BasicMultPanelModule);
    e.QingLong = t,
    __reflect(t.prototype, "qingLong.QingLong")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongMainPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入主界面"),
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {},
        i.prototype.addEvent = function() {
            var t = this;
            this.initOldPveBtnClose(167, this, "qing_long_main_panel_imgtitle1_png",
            function() {
                t.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.service.showPetInfo(3289)
            },
            this),
            ImageButtonUtil.add(this.btnBest,
            function() {
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "进入优惠极品天苍玄魂·青龙界面");
                var e = {
                    petid: 3289,
                    pid: 249421,
                    buyAvailable: !0,
                    recommendnature: 8,
                    recommendlearningability: "3|5",
                    needSetStudy: !1,
                    needSetNature: !1,
                    mainImgSource: "qing_long_best_pop_img_png",
                    buyFunc: function(e, t) {
                        SocketConnection.send(46292, [9, 0])
                    }
                };
                ModuleManager.showModuleByID(111, e)
            },
            this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                t.service.openPanel(e.PanelConst.LEVEL_PANEL),
                StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "点击主界面-【前往获得】")
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                t.service.openPanel(e.PanelConst.GET_PANEL)
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
            this)
        },
        i.prototype.update = function() {
            var e = this.service.getValue(4590);
            DisplayUtil.setEnabled(this.btnBest, !0, !1),
            1 == KTool.getBit(e, 4) && DisplayUtil.setEnabled(this.btnBest, !1),
            KTool.getBit(e, 1) > 0 ? (this.btnEvo.visible = !0, this.btnGet.visible = !1) : (this.btnEvo.visible = !1, this.btnGet.visible = !0);
            var t = 1 == KTool.getBit(e, 2) && 1 == KTool.getBit(e, 3);
            t ? (this.imgHas.visible = !0, DisplayUtil.setEnabled(this.btnEvo, !1, !0)) : this.imgHas.visible = !1
        },
        i.prototype.updateValues = function() {
            var e = this;
            this.service.updateSomeValues([4590]).then(function() {
                e.update()
            })
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "qingLong.MainPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.bossConfig = [[3128, 3117], [3059, 3064], [3050, 3049], [3227, 2939], [3017, 3015, 3004], [3162, 3217, 3214], [3194, 3183, 3234], [3134, 3255, 3184], [3251, 3246, 3243], [3237, 3033, 2987, 2873], [3088, 3096, 3091, 3108, 3115], [3273, 3268, 3263, 3261, 3224], [3142, 3190, 3170, 3205, 3242], [3022, 3267, 3253, 3247, 3196, 3121]],
            e.skinName = "QingLongSecondLevelFightPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var t = this;
            this.initOldPveBtnClose(0, this, "qing_long_second_level_main_panel_imgtitle_png",
            function() {
                t.service.openPanel(e.PanelConst.SECOND_LEVEL_MAIN_PANEL)
            }),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0")
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("249428_9727",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddFightTimes,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("249436_9733",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this),
            EventManager.addEventListener(e.EventConst.EVENT_SECOND_LEVEL_RESET,
            function() {
                t.group.scrollH = 0
            },
            this)
        },
        i.prototype.update = function() {
            var t = this.service.getValue(14378);
            this.txtTimes.text = "今日已购买:" + t + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, 10 > t);
            var i = 15 - this.service.getValue(14377);
            this.txtFightTimes.text = "今日挑战次数:" + i,
            DisplayUtil.setEnabled(this.btnAddFightTimes, 15 > i);
            for (var n = this.service.getValue(14362), o = [2, 4, 5, 7].indexOf(n), r = [this.service.getValue(14364), this.service.getValue(14365), this.service.getValue(14366), this.service.getValue(14367)], s = 1; 14 >= s; s++) {
                var a = this.getLevel(s),
                _ = void 0,
                u = void 0;
                _ = -1 == o ? n == a: n == a && r[o] == s;
                var l = [2, 4, 5, 7].indexOf(a);
                u = -1 == l ? n > a: n > a && r[l] == s;
                var g = this["boss" + s];
                g.setInfo(this.bossConfig[s - 1], u, _, this.service)
            }
            return n > 9 ? void Alarm.show("恭喜你，成功通过了亢龙有悔关卡，今日通过全部关卡即可获得青龙完全体进化的资格！",
            function() {
                EventManager.dispatchEventWith(e.EventConst.EVENT_FINSH_LEVEL)
            }) : void 0
        },
        i.prototype.getLevel = function(e) {
            return [0, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 9][e]
        },
        i
    } (BasicPanel);
    e.SecondLevelFightPanel = t,
    __reflect(t.prototype, "qingLong.SecondLevelFightPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongSecondLevelMainPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            var t = this;
            this.initOldPveBtnClose(168, this, "qing_long_second_level_main_panel_imgtitle_png",
            function() {
                t.service.openPanel(e.PanelConst.LEVEL_PANEL)
            }),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0")
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnStart,
            function() {
                t.service.openPanel(e.PanelConst.SECOND_LEVEL_PREPARE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                var i = 1 - t.service.getValue(14363);
                i > 0 ? Alert.show("重置亢龙有悔试炼将清除该关卡所有进度，是否确定重置？",
                function() {
                    SocketConnection.sendByQueue(42129, [20161216, 0],
                    function() {
                        t.updateValues(),
                        EventManager.dispatchEventWith(e.EventConst.EVENT_SECOND_LEVEL_RESET)
                    })
                }) : BubblerManager.getInstance().showText("很抱歉，今日剩余重置次数不足！")
            },
            this),
            ImageButtonUtil.add(this.btnContinue,
            function() {
                t.service.openPanel(e.PanelConst.SECOND_LEVEL_FIGHT_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnAddResetTimes,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProductBySocket(249425,
                    function() {
                        SocketConnection.sendByQueue(46292, [13, 0],
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    BuyProductManager.buyProduct("249428_9727",
                    function() {
                        t.updateValues()
                    },
                    t)
                },
                t)
            },
            this)
        },
        i.prototype.update = function() {
            var e = this.service.getValue(14362);
            this.btnStart.visible = 0 == e,
            this.btnReset.visible = this.btnContinue.visible = e > 0;
            var t = 1 - this.service.getValue(14363);
            this.txtResetTimes.text = "今日重置次数:" + t,
            DisplayUtil.setEnabled(this.btnAddResetTimes, 0 == t);
            var i = this.service.getValue(14378);
            this.txtTimes.text = "今日已购买:" + i + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, 10 > i)
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            t.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.SecondLevelMainPanel = t,
    __reflect(t.prototype, "qingLong.SecondLevelMainPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.SORT_CONFIG = {
                id_down: {
                    name: "ID顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_down_png"
                },
                id_up: {
                    name: "ID顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_up_png"
                },
                lvl_down: {
                    name: "等级顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_down_png"
                },
                lvl_up: {
                    name: "等级顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_up_png"
                },
                tm_down: {
                    name: "获得顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_down_png"
                },
                tm_up: {
                    name: "获得顺序",
                    sortImg: "qing_long_second_level_prepare_panel_img_up_png"
                }
            },
            e.skinName = "QingLongSecondLevelPreparePanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.update = function() {
            return this.ignoreUpdate ? void(this.ignoreUpdate = !1) : void(this.menu && (this.resetFilter(), this.oneKeyDown(void 0, !0), this.menu.updateView(1)))
        },
        i.prototype.destroy = function() {
            for (var e = 0,
            i = this.bagItemMap; e < i.length; e++) {
                var n = i[e];
                n && n.destroy()
            }
            for (var o = 0,
            r = this.upItemMap; o < r.length; o++) {
                var n = r[o];
                n && n.destroy()
            }
            for (var s = 0; s < this.list.numChildren; s++) {
                var n = this.list.getChildAt(s).item;
                n.destroy()
            }
            this.menu && this.menu.destroy(),
            t.prototype.destroy.call(this)
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            this.initBtnClose("qing_long_second_level_prepare_panel_imgtitle_png", this,
            function() {
                e.SecondLevelPreparePop.arrUpCache = [],
                t.service.openPanel(e.PanelConst.SECOND_LEVEL_MAIN_PANEL)
            },
            this),
            this.addEvent(),
            this.resetFilter(),
            this.initPetBagInfo(),
            this.arrUpCatchTime = [],
            this.list.itemRenderer = e.ListPetItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection;
            var i = "qingLong",
            n = new MenuData;
            n.groupName = i,
            n.root = [1, 2, 3],
            n.data = {
                1 : {
                    title: "精灵背包"
                },
                2 : {
                    title: "精灵仓库"
                },
                3 : {
                    title: "精英收藏"
                }
            },
            n["default"] = 1,
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + i, this.onChangeTab, this),
            this.menu = Menu.createMenu(n, this.groupMenu)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnStart, this.start, this),
            ImageButtonUtil.add(this.btnOneKeyUp, this.oneKeyUp, this),
            ImageButtonUtil.add(this.btnOneKeyDown, this.oneKeyDown, this),
            ImageButtonUtil.add(this.btnAttr, this.showAttr, this),
            ImageButtonUtil.add(this.btnSort, this.showSort, this),
            ImageButtonUtil.add(this.sortMask, this.hideSort, this),
            EventManager.addEventListener(e.EventConst.EVENT_CHOOSE_PET_UP, this.onPetUp, this),
            EventManager.addEventListener(e.EventConst.EVENT_CHOOSE_PET_DOWN, this.onPetDown, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE,
            function() {
                t.updateList(t.menu.selectedValue)
            },
            this);
            var i = new eui.RadioButtonGroup;
            this.rb1.group = i,
            this.rb2.group = i,
            this.rb3.group = i,
            this.rb4.group = i,
            i.addEventListener(egret.Event.CHANGE,
            function() {
                var e = t.rb1.group.selectedValue;
                t.setPetBagIndex(e)
            },
            this),
            i = new eui.RadioButtonGroup,
            this.rb_id_sort_down.group = i,
            this.rb_id_sort_up.group = i,
            this.rb_lvl_sort_down.group = i,
            this.rb_lvl_sort_up.group = i,
            this.rb_tm_sort_down.group = i,
            this.rb_tm_sort_up.group = i,
            i.addEventListener(egret.Event.CHANGE,
            function() {
                egret.localStorage.setItem("warehouse_sortId_order_" + MainManager.actorID, i.selectedValue),
                t.hideSort(),
                t.updateSort(),
                t.updateList(t.menu.selectedValue)
            },
            this)
        },
        i.prototype.showAttr = function() {
            var e = this,
            t = {
                callBack: function(t, i) {
                    e.updateList(e.menu.selectedValue, i)
                },
                caller: this,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.btnAttr.localToGlobal( - 5, 40),
                    dir: "left-top",
                    rx: 0,
                    ry: 0
                }
            };
            this.ignoreUpdate = !0,
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
        },
        i.prototype.showSort = function() {
            this.groupSort.visible = !0,
            this.groupSort.scaleX = this.groupSort.scaleY = 1,
            gsap.from(this.groupSort, {
                scaleX: 0,
                scaleY: 0,
                ease: egret.Ease.backOut,
                duration: .3
            })
        },
        i.prototype.hideSort = function() {
            var e = this;
            gsap.to(this.groupSort, {
                scaleX: 0,
                scaleY: 0,
                duration: .2
            }).then(function() {
                e.groupSort.visible = !1,
                e.groupSort.scaleX = e.groupSort.scaleY = 1
            })
        },
        i.prototype.initPetBagInfo = function() {
            for (var t = e.AttrConst.PET_BAG_Value[101769] + 2; 4 >= t; t++) this["rb" + t].parent.removeChild(this["rb" + t]);
            for (var i = [], t = 101770; 101817 >= t; t++) i.push(e.AttrConst.PET_BAG_Value[t]);
            var n = 1,
            o = 1;
            this.bagCatchTimeMap = [void 0, [], [], [], []];
            for (var r = 0,
            s = i; r < s.length; r++) {
                var a = s[r];
                this.bagCatchTimeMap[n][o++] = a,
                o > 12 && (n++, o = 1)
            }
            for (var _ = PetManager.getBagMap(), u = PetManager.getSecondBagMap(), l = e.AttrConst.PET_BAG_Value[101768] + 1, t = 1; 6 >= t; t++) _[t - 1] ? this.bagCatchTimeMap[l][t] = _[t - 1].catchTime: this.bagCatchTimeMap[l][t] = 0,
            u[t - 1] ? this.bagCatchTimeMap[l][t + 6] = u[t - 1].catchTime: this.bagCatchTimeMap[l][t + 6] = 0;
            this.upItemMap = [],
            this.bagItemMap = [];
            for (var t = 1; 6 >= t; t++) {
                var g = new e.PetItem;
                this.bagItemMap[t] = g,
                this.groupBag1.addChild(g),
                g.setPetInfo(1, 0),
                g = new e.PetItem,
                this.bagItemMap[t + 6] = g,
                this.groupBag2.addChild(g),
                g.setPetInfo(1, 0)
            }
            for (var t = 1; 20 >= t; t++) {
                var g = new e.PetItem;
                this.upItemMap[t] = g,
                this.groupUp.addChild(g),
                g.setPetInfo(2, 0)
            }
        },
        i.prototype.setPetBagIndex = function(e) {
            this.curBagIndex != e && (this.curBagIndex = e, this.updateBag(e))
        },
        i.prototype.updateBag = function(e) {
            for (var t in this.bagCatchTimeMap[e]) {
                var i = this.bagCatchTimeMap[e][t],
                n = -1 != this.arrUpCatchTime.indexOf(i);
                this.bagItemMap[t].setPetInfo(1, n ? 0 : i)
            }
        },
        i.prototype.updateList = function(e, t) {
            var i = this;
            this.list.parent.stopAnimation();
            var n;
            switch (2 == e ? n = PetStorage2015InfoManager.storageInfo.filter(function(e) {
                return 0 == e.posi
            }) : 3 == e && (n = PetStorage2015InfoManager.eliteInfo.filter(function(e) {
                return 4 == e.posi
            })), n = n.filter(function(e) {
                return - 1 == i.arrUpCatchTime.indexOf(e.catchTime)
            }), void 0 == t ? t = this.curAttr: this.curAttr = t, t > 0 && (n = n.filter(function(e) {
                return e.type == t
            })), this.txtSearch.text && (n = n.filter(function(e) {
                return SearchUtil.isMatch(i.txtSearch.text, e.name) || e.id == +i.txtSearch.text
            })), egret.localStorage.getItem("warehouse_sortId_order_" + MainManager.actorID)) {
            case "id_down":
                n.sort(function(e, t) {
                    return t.id - e.id
                });
                break;
            case "id_up":
                n.sort(function(e, t) {
                    return e.id - t.id
                });
                break;
            case "lvl_down":
                n.sort(function(e, t) {
                    return t.level - e.level
                });
                break;
            case "lvl_up":
                n.sort(function(e, t) {
                    return e.level - t.level
                });
                break;
            case "tm_down":
                n.sort(function(e, t) {
                    return t.catchTime - e.catchTime
                });
                break;
            case "tm_up":
                n.sort(function(e, t) {
                    return e.catchTime - t.catchTime
                })
            }
            this.arrayCollection.source = n
        },
        i.prototype.onPetUp = function(e, t) {
            void 0 === t && (t = !1);
            var i = e.data;
            if (i.level < 70) return void BubblerManager.getInstance().showText("精灵等级不足");
            for (var n = !1,
            o = 1; 20 >= o; o++) if (!this.upItemMap[o].petInfo) {
                n = !0,
                this.upItemMap[o].setPetInfo(2, i),
                this.arrUpCatchTime.push(i.catchTime),
                t || this.afterChange();
                break
            }
            n || BubblerManager.getInstance().showText("上阵精灵数量已达上限")
        },
        i.prototype.onPetDown = function(e, t) {
            void 0 === t && (t = !1);
            for (var i = !1,
            n = 1; 20 >= n && this.upItemMap[n].petInfo; n++) this.upItemMap[n].petInfo.catchTime == e.data.catchTime && (i = !0),
            i && (20 > n && !t ? this.upItemMap[n].setPetInfo(2, this.upItemMap[n + 1].petInfo ? this.upItemMap[n + 1].petInfo: 0) : this.upItemMap[n].setPetInfo(2, 0));
            i && !t && (this.arrUpCatchTime.splice(this.arrUpCatchTime.indexOf(e.data.catchTime), 1), this.afterChange())
        },
        i.prototype.oneKeyDown = function(e, t) {
            void 0 === t && (t = !1);
            for (var i = 1; 20 >= i; i++) this.upItemMap[i].petInfo && this.onPetDown({
                data: this.upItemMap[i].petInfo
            },
            !0);
            this.arrUpCatchTime.splice(0),
            !t && this.afterChange()
        },
        i.prototype.oneKeyUp = function() {
            for (var e = [], t = [], i = 1; 6 >= i; i++) e.push(this.bagItemMap[i].petInfo);
            for (var n = 7; 12 >= n; n++) t.push(this.bagItemMap[n].petInfo);
            e.sort(function(e, t) {
                return e ? t ? t.level - e.level: -1 : 1
            }),
            t.sort(function(e, t) {
                return e ? t ? t.level - e.level: -1 : 1
            });
            var o, r, s = e.concat(t);
            for (o = 0, r = 0; 20 > o && 12 > r; r++) {
                var a = s.shift();
                a && a.level >= 70 && (this.onPetUp({
                    data: a
                },
                !0), o++)
            }
            0 == o && 12 == r ? BubblerManager.getInstance().showText("没有符合条件的精灵") : this.afterChange()
        },
        i.prototype.afterChange = function() {
            var e = this.menu.selectedValue;
            this.btnOneKeyUp.visible = 1 == e && !this.upItemMap[1].petInfo,
            this.btnOneKeyDown.visible = !!this.upItemMap[1].petInfo,
            1 == e ? this.updateBag(this.curBagIndex) : this.updateList(e)
        },
        i.prototype.onChangeTab = function() {
            var t = this.menu.selectedValue;
            this.groupBag.visible = 1 == t,
            this.groupWarehouse.visible = t >= 2,
            this.btnOneKeyUp.visible = 1 == t && !this.upItemMap[1].petInfo,
            this.btnOneKeyDown.visible = !!this.upItemMap[1].petInfo,
            1 == t ? (this.curBagIndex || (this.curBagIndex = e.AttrConst.PET_BAG_Value[101768] + 1, this["rb" + this.curBagIndex].selected = !0), this.updateBag(this.curBagIndex)) : this.updateList(t)
        },
        i.prototype.resetFilter = function() {
            this.curAttr = 0,
            this.txtSearch.text = "",
            this.groupSort.visible = !1,
            this.updateSort()
        },
        i.prototype.updateSort = function() {
            var e = egret.localStorage.getItem("warehouse_sortId_order_" + MainManager.actorID);
            e ? (this.txtSort.text = this.SORT_CONFIG[e].name, this.imgSort.source = this.SORT_CONFIG[e].sortImg) : (this.txtSort.text = "默认顺序", this.imgSort.source = null);
            for (var t = 2; 7 >= t; t++) {
                var i = this.groupSort.getChildAt(t);
                i.selected = i.value == e
            }
        },
        i.prototype.start = function() {
            var t = this;
            if (!this.upItemMap[1].petInfo) return void BubblerManager.getInstance().showText("至少需要上阵1名精灵");
            var i = this.arrUpCatchTime;
            SocketConnection.sendByQueue(42127, [20161216, i.length].concat(i),
            function() {
                t.service.updateValues().then(function() {
                    t.service.openPanel(e.PanelConst.SECOND_LEVEL_FIGHT_PANEL)
                })
            })
        },
        i
    } (BasicPanel);
    e.SecondLevelPreparePanel = t,
    __reflect(t.prototype, "qingLong.SecondLevelPreparePanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.ForeverArr = [14378, 14374, 14375, 14372, 761],
            e.FightPet = [8525, 8526, 8527, 8528, 8529, 8546, 8547],
            e.Anim2ActualIdx = [0, 1, 5, 4, 3, 6, 7, 2],
            e.S2ActualIdx = [0, 1, 5, 2, 3, 7, 4, 6],
            e.S2NameIdx = [0, "龙首", "龙翼（左）", "龙身", "龙尾", "龙爪（左）", "龙翼（右）", "龙爪（右）"],
            e._curDefCnt = 0,
            e._sumDefState = [!1, !1, !1, !1, !1, !1, !1],
            e.rollTime = 8,
            e._needShowAlarm = !1,
            e.skinName = "QingLongThirdLevelPanelSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {},
        i.prototype.addEvent = function() {
            var t = this;
            this.initOldPveBtnClose(169, this, "qing_long_third_level_panel_imgtitle_png",
            function() {
                t.service.openPanel(e.PanelConst.LEVEL_PANEL)
            },
            this),
            this.service.registerItemUpdateForText(1711783, this.txtItem, this, "苍魂气魄:$0"),
            ImageButtonUtil.add(this.btnAddItem,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249428, 1,
                    function() {
                        KTool.doExchange(9727, 1,
                        function() {
                            t.updateValues()
                        })
                    },
                    t)
                },
                t)
            },
            this),
            ImageButtonUtil.add(this.btnPet, this.service.showPetBag, this),
            ImageButtonUtil.add(this.btnCure, this.service.cureAllPet, this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                Alert.show("每次抽取青龙身躯需要消耗3个苍魂气魄，抽取后自动进入挑战，是否继续？",
                function() {
                    return 0 == PetManager.isPackSpiriHavetHp ? void(0 == PetManager.infos.length ? Alarm.show("你没有可出战的精灵哦！") : Alarm.show("你背包里面的精灵体力都不够了哦！赶紧给它们补充体力吧！")) : void t.startRoll()
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i.prototype.update = function() {
            this._buyNum = this.service.getValue(14378),
            this.txtTimes.text = "今日已购买:" + this._buyNum + "/10",
            DisplayUtil.setEnabled(this.btnAddItem, this._buyNum < 10),
            this._defeatedValue = this.service.getValue(14374),
            this._defeatCompletedValue = this.service.getValue(14375),
            this._curDefCnt = 0,
            this._sumDefState = [!1, !1, !1, !1, !1, !1, !1, !1];
            for (var t = 1; 7 >= t; t++) KTool.getBit(this._defeatCompletedValue, t) ? (this._curDefCnt++, this._sumDefState[this.S2ActualIdx[t]] = !0, this["txtFight" + this.S2ActualIdx[t]].text = "彻底击败", this["txtFight" + this.S2ActualIdx[t]].textColor = 16776272) : KTool.getBit(this._defeatedValue, t) ? (this._curDefCnt++, this._sumDefState[this.S2ActualIdx[t]] = !1, this["txtFight" + this.S2ActualIdx[t]].text = "已击败", this["txtFight" + this.S2ActualIdx[t]].textColor = 6062541) : (this._sumDefState[this.S2ActualIdx[t]] = !1, this["txtFight" + this.S2ActualIdx[t]].text = "未击败", this["txtFight" + this.S2ActualIdx[t]].textColor = 4512255);
            return this._needShowAlarm && (this._needShowAlarm = !1, 7 == this._curDefCnt) ? (Alarm.show("恭喜你，成功通过了龙战于野关卡，今日通过全部关卡即可获得青龙完全体进化的资格！"), void EventManager.dispatchEventWith(e.EventConst.EVENT_FINSH_LEVEL)) : (7 == this._curDefCnt && DisplayUtil.setEnabled(this.btnRoll, !1), void this.roll2Fight())
        },
        i.prototype.updateValues = function() {
            var e = this;
            this.service.updateSomeValues(this.ForeverArr).then(function() {
                e.update()
            })
        },
        i.prototype.startRoll = function() {
            var e = this;
            return ItemManager.getNumByID(1711783) < 3 ? void BubblerManager.getInstance().showText("很抱歉，你的苍魂气魄数量不足，无法抽取挑战！") : void SocketConnection.sendWithPromise(46292, [5, 0]).then(function() {
                e.updateValues()
            })
        },
        i.prototype.roll2Fight = function() {
            var e = this.service.getValue(761);
            if (0 != e) {
                7 - this._curDefCnt;
                this.rollTime = 8,
                this._curDefCnt < 3 && (this.rollTime = 4),
                this.roll2FightAnim(1, e),
                egret.lifecycle.stage.touchChildren = !1
            }
        },
        i.prototype.roll2FightAnim = function(e, t) {
            for (var i = this,
            n = 0,
            o = 1; 7 >= o; o++) if (o == e) {
                if (this._sumDefState[this.Anim2ActualIdx[e]]) {
                    for (var r = 0; 7 > r && this._sumDefState[this.Anim2ActualIdx[(e + r) % 7 + 1]]; r++);
                    e = (e + r) % 7 + 1
                }
                this["comp_" + this.Anim2ActualIdx[e]].scaleX = 1.25,
                this["comp_" + this.Anim2ActualIdx[e]].scaleY = 1.25,
                n = this.Anim2ActualIdx[e]
            } else this["comp_" + this.Anim2ActualIdx[o]].scaleX = 1,
            this["comp_" + this.Anim2ActualIdx[o]].scaleY = 1;
            if (this.rollTime <= 0 && this.S2ActualIdx[t] == n) {
                for (var o = 1; 7 >= o; o++) this["comp_" + o].scaleX = 1,
                this["comp_" + o].scaleY = 1;
                return this["comp_" + this.S2ActualIdx[t]].scaleX = 1.25,
                this["comp_" + this.S2ActualIdx[t]].scaleY = 1.25,
                void egret.setTimeout(function() {
                    var e = t > 5 ? 8546 + t - 6 : 8524 + t;
                    console.warn("战斗boss   " + i.S2NameIdx[t] + "  curRoll:" + t.toString() + "    bossid:" + e),
                    StatLogger.log("20230714版本系统功能", "天苍玄魂·青龙搬迁", "抽取到" + i.S2NameIdx[t]),
                    FightManager.fightNoMapBoss("天苍玄魂·青龙", e),
                    EventManager.addEventListener(PetFightEvent.ALARM_CLICK, i.showCurItem, i),
                    egret.lifecycle.stage.touchChildren = !0
                },
                this, 200)
            }
            e += 1,
            e > 7 && (e = 1),
            this.rollTime--,
            egret.setTimeout(function() {
                i.roll2FightAnim(e, t)
            },
            this, 160 + 5 * this.rollTime)
        },
        i.prototype.showCurItem = function(e) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.showCurItem, this),
            this._needShowAlarm = !0
        },
        i
    } (BasicPanel);
    e.ThirdLevelPanel = t,
    __reflect(t.prototype, "qingLong.ThirdLevelPanel")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "QingLongThirdLevelPanelSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        t.prototype.init = function() {},
        t.prototype.addEvent = function() {},
        t.prototype.removeEvents = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.BestPop = t,
    __reflect(t.prototype, "qingLong.BestPop")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = "QingLongSecondLevelFightPopSkin",
            i.bossConfig = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                t.hide(),
                PopViewManager.getInstance().openView(new e.SecondLevelPreparePop)
            },
            this);
            for (var i = 0,
            n = this.bossConfig; i < n.length; i++) {
                var o = n[i],
                r = new e.PetItem;
                this.group.addChild(r),
                r.imgHead.source = ClientConfig.getPetHeadPath(o),
                r.height = 131
            }
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.SecondLevelFightPop = t,
    __reflect(t.prototype, "qingLong.SecondLevelFightPop")
} (qingLong || (qingLong = {}));
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
qingLong; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "QingLongSecondLevelPreparePopSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.removeEvents = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.init = function() {
            var t = this;
            this.arrPetItem = [],
            this.groupRight.visible = !1;
            for (var n = 0; 6 > n; n++) {
                var o = new e.PetItem;
                this.group1.addChild(o),
                o.setPetInfo(3, 0, 0 == n)
            }
            i.arrUpCache || (i.arrUpCache = []),
            SocketConnection.sendByQueue(42126, [20161216],
            function(n) {
                for (var o = n.data,
                r = o.readUnsignedInt(), s = [], a = 0; r > a; a++) {
                    var _ = o.readUnsignedInt();
                    0 == _ && (_ = 1e4);
                    var u = new PetInfo(o);
                    s.push({
                        index: _,
                        petInfo: u
                    })
                }
                s.sort(function(e, t) {
                    return + !!t.petInfo.hp - +!!e.petInfo.hp
                });
                for (var l = function(n) {
                    var o = new e.PetItem;
                    t.group2.addChild(o);
                    var r = n.index,
                    s = n.petInfo;
                    o.index = r,
                    o.setPetInfo(4, s),
                    t.arrPetItem[r] = o,
                    s.hp <= 0 ? (o.canClick = !1, o.imgHasDie.visible = !0, DisplayUtil.setEnabled(o, !1)) : i.arrUpCache && -1 != i.arrUpCache.indexOf(s.catchTime) && (0 == i.arrUpCache.indexOf(s.catchTime) ? egret.setTimeout(function() {
                        t.curPetItem = o,
                        t.onPetUp(),
                        t.onPetFirst()
                    },
                    t, 0) : t.autoPetUp(o))
                },
                g = 0, h = s; g < h.length; g++) {
                    var c = h[g];
                    l(c)
                }
            })
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener(e.EventConst.EVENT_SELECT_PET, this.onSelectPet, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnUp, this.onPetUp, this),
            ImageButtonUtil.add(this.btnDown, this.onPetDown, this),
            ImageButtonUtil.add(this.btnFirst, this.onPetFirst, this),
            ImageButtonUtil.add(this.btnFight, this.onFight, this)
        },
        i.prototype.onSelectPet = function(t) {
            this.groupRight.visible = !0;
            var i, n = t.data.index;
            if (n > 0) {
                i = this.arrPetItem[n];
                for (var o in this.arrPetItem) {
                    var r = this.arrPetItem[o];
                    r.imgSelect.visible = r.index == n
                }
                for (var o = 0; 6 > o; o++) {
                    var r = this.group1.getChildAt(o);
                    r.imgSelect.visible = !1
                }
            } else {
                for (var o = 0; 6 > o; o++) {
                    var r = this.group1.getChildAt(o);
                    r.imgSelect.visible = r.index == n,
                    r.index == n && (i = r)
                }
                for (var o in this.arrPetItem) {
                    var r = this.arrPetItem[o];
                    r.imgSelect.visible = !1
                }
            }
            this.curPetItem = i;
            var s = i.petInfo;
            this.imgHead.source = ClientConfig.getPetHeadPath(s.id, s.catchTime, s.skinId),
            this.txtLVName.text = "LV." + s.level + " " + s.name,
            this.txtHP.text = "HP:" + s.hp + "/" + s.maxHp,
            this.progressHP.value = s.hp / s.maxHp * 100,
            this.txtAttack.text = s.attack + "",
            this.txtSpeed.text = s.speed + "",
            this.txtDefence.text = s.defence + "",
            this.txtSAttack.text = s.s_a + "",
            this.txtHp.text = s.maxHp + "",
            this.txtSDefence.text = s.s_d + "",
            this.groupSkillItem.removeChildren();
            for (var a = 0,
            _ = s.skillArray; a < _.length; a++) {
                var u = _[a];
                u.petInfo = s;
                var r = new e.SkillItem(u);
                this.groupSkillItem.addChild(r)
            }
            if (this.groupFifthSkill.visible = !!s.hideSKill, s.hideSKill) {
                var l = void 0;
                if (4 == SkillXMLInfo.getCategory(s.hideSKill.id)) l = ClientConfig.getpettypeticon("prop");
                else {
                    var g = SkillXMLInfo.getTypeID(s.hideSKill.id);
                    l = ClientConfig.getpettypeticon(g + "")
                }
                this.imgFifthProp.source = l,
                this.txtFifthSkillName.text = s.hideSKill.name,
                this.txtFifthSkill.text = "威力:" + s.hideSKill.damage + "    PP:" + s.hideSKill.pp + "/" + s.hideSKill.maxPP,
                ImageButtonUtil.add(this.groupFifthSkill,
                function() {
                    tipsPop.TipsPop.openSkillPop({
                        id: s.hideSKill.id
                    })
                },
                this, !1, !1)
            }
            this.btnFirst.visible = 3 == i.type && !i.isFirst,
            this.btnDown.visible = 3 == i.type,
            this.btnUp.visible = 4 == i.type && !this.group1.getChildAt(5).petInfo
        },
        i.prototype.onPetUp = function() {
            if (this.curPetItem && void 0 != this.curPetItem.index && !(this.curPetItem.index < 0)) {
                this.curPetItem.canClick = !1,
                DisplayUtil.setEnabled(this.curPetItem, !1);
                for (var e = this.curPetItem.index,
                t = 0; 6 > t; t++) {
                    var i = this.group1.getChildAt(t);
                    if (!i.petInfo) {
                        i.setPetInfo(3, this.curPetItem.petInfo, i.isFirst),
                        i.index = -e,
                        this.onSelectPet({
                            data: {
                                index: -e,
                                type: 3
                            }
                        });
                        break
                    }
                }
            }
        },
        i.prototype.autoPetUp = function(e) {
            e.canClick = !1,
            DisplayUtil.setEnabled(e, !1);
            for (var t = e.index,
            i = 0; 6 > i; i++) {
                var n = this.group1.getChildAt(i);
                if (!n.petInfo) {
                    n.setPetInfo(3, e.petInfo, n.isFirst),
                    n.index = -t;
                    break
                }
            }
        },
        i.prototype.onPetDown = function() {
            if (this.curPetItem && void 0 != this.curPetItem.index && !(this.curPetItem.index > 0)) {
                this.curPetItem.setPetInfo(3, 0, this.curPetItem.isFirst);
                var e = -this.curPetItem.index;
                this.curPetItem.index = void 0;
                for (var t in this.arrPetItem) {
                    var i = this.arrPetItem[t];
                    if (i.index == e) {
                        i.canClick = !0,
                        DisplayUtil.setEnabled(i, !0),
                        this.onSelectPet({
                            data: {
                                index: e,
                                type: 4
                            }
                        });
                        break
                    }
                }
                for (var t = 0; 5 > t; t++) {
                    var n = this.group1.getChildAt(t),
                    o = this.group1.getChildAt(t + 1); ! n.petInfo && o.petInfo && (n.setPetInfo(3, o.petInfo, n.isFirst), o.setPetInfo(3, 0, !1), n.index = o.index, o.index = void 0)
                }
            }
        },
        i.prototype.onPetFirst = function() {
            if (this.curPetItem && void 0 != this.curPetItem.index && this.curPetItem.parent == this.group1) {
                var e = this.group1.getChildAt(0),
                t = [e.petInfo, e.index],
                i = t[0],
                n = t[1];
                e.setPetInfo(3, this.curPetItem.petInfo, !0),
                e.index = this.curPetItem.index,
                this.curPetItem.setPetInfo(3, i, !1),
                this.curPetItem.index = n,
                this.onSelectPet({
                    data: {
                        index: e.index,
                        type: 3
                    }
                })
            }
        },
        i.prototype.onFight = function() {
            var e = this,
            t = [];
            i.arrUpCache = [];
            for (var n = 0; 6 > n; n++) {
                var o = this.group1.getChildAt(n);
                o.index < 0 && ( - 1e4 == o.index ? t.push(0) : t.push( - o.index), i.arrUpCache.push(o.petInfo.catchTime))
            }
            t.length > 0 ? SocketConnection.sendByQueue(42128, [20161216, t.length].concat(t),
            function(t) {
                var i = t.data,
                n = i.readUnsignedByte();
                0 == n ? e.hide() : console.error("qingLong_error")
            }) : BubblerManager.getInstance().showText("至少需要1名出战精灵")
        },
        i
    } (PopView);
    e.SecondLevelPreparePop = t,
    __reflect(t.prototype, "qingLong.SecondLevelPreparePop")
} (qingLong || (qingLong = {}));
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
generateEUI.paths["resource/eui_skins/item/QingLongFirstLevelItemSkin.exml"] = window.QingLongFirstLevelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "imgHead", "txtName"],
        this.height = 248,
        this.width = 209,
        this.elementsContent = [this.bg_i(), this.imgHead_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "qing_long_first_level_item_imgbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 100,
        e.visible = !0,
        e.width = 100,
        e.x = 59,
        e.y = 54,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 2,
        e.size = 20,
        e.textColor = 6159871,
        e.visible = !0,
        e.y = 166,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/QingLongListPetItemSkin.exml"] = window.QingLongListPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = []
    }
    __extends(t, e);
    t.prototype;
    return t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/QingLongPetItemSkin.exml"] = window.QingLongPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgHead", "imgFirst", "imgHasOn", "imgHasDie", "imgSelect", "txtLv", "txtName"],
        this.elementsContent = [this._Image1_i(), this.imgHead_i(), this.imgFirst_i(), this.imgHasOn_i(), this.imgHasDie_i(), this.imgSelect_i(), this.txtLv_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 10,
        e.left = 8,
        e.right = 8,
        e.scale9Grid = new egret.Rectangle(37, 105, 37, 25),
        e.source = "qing_long_pet_item_imgbg_png",
        e.top = 10,
        e.visible = !0,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 100,
        e.visible = !0,
        e.width = 100,
        e.x = 13,
        e.y = 15,
        e
    },
    i.imgFirst_i = function() {
        var e = new eui.Image;
        return this.imgFirst = e,
        e.source = "qing_long_pet_item_imgfirst_png",
        e.visible = !0,
        e.x = 73,
        e.y = 96,
        e
    },
    i.imgHasOn_i = function() {
        var e = new eui.Image;
        return this.imgHasOn = e,
        e.source = "qing_long_pet_item_imgup_png",
        e.visible = !0,
        e.x = 68,
        e.y = 96,
        e
    },
    i.imgHasDie_i = function() {
        var e = new eui.Image;
        return this.imgHasDie = e,
        e.source = "qing_long_pet_item_imgdie_png",
        e.visible = !0,
        e.x = 68,
        e.y = 96,
        e
    },
    i.imgSelect_i = function() {
        var e = new eui.Image;
        return this.imgSelect = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(31, 31, 31, 31),
        e.source = "common_select_rect_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.txtLv_i = function() {
        var e = new eui.Label;
        return this.txtLv = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1320013,
        e.textColor = 16773477,
        e.visible = !0,
        e.x = 14,
        e.y = 16,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.textColor = 9025023,
        e.y = 120,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/QingLongSecondLevelBossItemSkin.exml"] = window.QingLongSecondLevelBossItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBG", "imgNow", "imgHead", "imgHas"],
        this.elementsContent = [this.imgBG_i(), this.imgNow_i(), this.imgHead_i(), this.imgHas_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgBG_i = function() {
        var e = new eui.Image;
        return this.imgBG = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_itembg_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.imgNow_i = function() {
        var e = new eui.Image;
        return this.imgNow = e,
        e.source = "qing_long_second_level_fight_panel_imgcurrent_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imghead3017_png",
        e.visible = !0,
        e.x = 29,
        e.y = 25,
        e
    },
    i.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "qing_long_second_level_fight_panel_imghas_png",
        e.visible = !0,
        e.x = 10,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/QingLongSkillItemSkin.exml"] = window.QingLongSkillItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgIcon", "txt", "txtName"],
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgIcon_i(), this.txt_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.source = "qing_long_second_level_prepare_pop_imgskillrect_png",
        e.visible = !0,
        e.width = 180,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_imgrect_png",
        e.width = 166,
        e.x = 7,
        e.y = 27,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 3,
        e
    },
    i.txt_i = function() {
        var e = new eui.Label;
        return this.txt = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 6027519,
        e.y = 33,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongFirstLevelPanelSkin.exml"] = window.QingLongFirstLevelPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtCountdown1", "groupLevel", "imgHead", "btnPet", "btnCure", "btnOpen", "btnEnter", "txtRound", "txtType", "txtCountdown2", "txtKbCD", "txtKb", "txtDescribe", "groupRight", "txtFightTimes", "btnAddFightTimes", "txtTimes", "btnAddItem", "txtItem"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Scroller1_i(), this.groupRight_i(), this._Group6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 112,
        e.y = 73,
        e.elementsContent = [this._Image2_i(), this.txtCountdown1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgcountdownbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtCountdown1_i = function() {
        var e = new eui.Label;
        return this.txtCountdown1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 38,
        e.text = "00:00",
        e.textColor = 16318278,
        e.visible = !0,
        e.y = 37,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 420,
        e.horizontalCenter = 0,
        e.left = 0,
        e.right = 0,
        e.y = 200,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.groupLevel_i()],
        e
    },
    i.groupLevel_i = function() {
        var e = new eui.Group;
        return this.groupLevel = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 40,
        e
    },
    i.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.right = 0,
        e.visible = !0,
        e.y = 6,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.imgHead_i(), this._Image8_i(), this._Image9_i(), this.btnPet_i(), this.btnCure_i(), this.btnOpen_i(), this.btnEnter_i(), this.txtRound_i(), this.txtType_i(), this.txtCountdown2_i(), this.txtKbCD_i(), this.txtKb_i(), this.txtDescribe_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(10, 211, 10, 212),
        e.source = "qing_long_first_level_panel_imgrightbg_png",
        e.visible = !0,
        e.width = 380,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgroundbg_png",
        e.x = 7,
        e.y = 69,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgtypebg_png",
        e.x = 133,
        e.y = 130,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgcountdownbg2_png",
        e.x = 137,
        e.y = 190,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 110,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "qing_long_first_level_panel_imgheadbg_png",
        e.width = 110,
        e.x = 23,
        e.y = 127,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 100,
        e.visible = !0,
        e.width = 100,
        e.x = 28,
        e.y = 133,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgline1_png",
        e.x = 26,
        e.y = 264,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_first_level_panel_imgline1_png",
        e.x = 26,
        e.y = 416,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qing_long_level_panel_btnpet_png",
        e.x = 80,
        e.y = 451,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qing_long_level_panel_btncure_png",
        e.x = 175,
        e.y = 451,
        e
    },
    i.btnOpen_i = function() {
        var e = new eui.Image;
        return this.btnOpen = e,
        e.source = "qing_long_first_level_panel_btnopen_png",
        e.visible = !0,
        e.x = 98,
        e.y = 542,
        e
    },
    i.btnEnter_i = function() {
        var e = new eui.Image;
        return this.btnEnter = e,
        e.source = "qing_long_first_level_panel_btnenter_png",
        e.visible = !1,
        e.x = 98,
        e.y = 542,
        e
    },
    i.txtRound_i = function() {
        var e = new eui.Label;
        return this.txtRound = e,
        e.fontFamily = "MFShangHei",
        e.size = 21.7171130474122,
        e.text = "第1/12轮",
        e.textColor = 14021119,
        e.x = 26,
        e.y = 75,
        e
    },
    i.txtType_i = function() {
        var e = new eui.Label;
        return this.txtType = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.text = "多精灵对战",
        e.textColor = 5039103,
        e.visible = !0,
        e.x = 145,
        e.y = 156,
        e
    },
    i.txtCountdown2_i = function() {
        var e = new eui.Label;
        return this.txtCountdown2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 23.6913953565261,
        e.text = "00:00",
        e.textColor = 16775513,
        e.x = 205.8,
        e.y = 212.705,
        e
    },
    i.txtKbCD_i = function() {
        var e = new eui.Label;
        return this.txtKbCD = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "距离狂暴剩下",
        e.textColor = 16777215,
        e.x = 157.803,
        e.y = 195.413,
        e
    },
    i.txtKb_i = function() {
        var e = new eui.Label;
        return this.txtKb = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "青龙守卫狂暴中",
        e.textColor = 16777215,
        e.x = 155.803,
        e.y = 206,
        e
    },
    i.txtDescribe_i = function() {
        var e = new eui.Label;
        return this.txtDescribe = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.7685465173946,
        e.textColor = 14020863,
        e.width = 250,
        e.x = 33,
        e.y = 281,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.right = 90,
        e.y = 18,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image10_i(), this.txtFightTimes_i(), this.btnAddFightTimes_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtFightTimes_i = function() {
        var e = new eui.Label;
        return this.txtFightTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "今日挑战次数:999",
        e.textColor = 16514895,
        e.x = 8,
        e.y = 6,
        e
    },
    i.btnAddFightTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTimes = e,
        e.source = "qing_long_first_level_panel_btnaddfighttimes_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 424,
        e.y = 5,
        e.elementsContent = [this._Image11_i(), this.txtTimes_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买:00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 0,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "苍魂气魄:1111",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongGetPanelSkin.exml"] = window.QingLongGetPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnUp", "imgHasUp", "btnEvo", "imgHasEvo", "btnGetPet", "btnGetItem", "txtTimes", "btnAddItem", "txtItem"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnGetPet_i(), this.btnGetItem_i(), this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = -35,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.btnUp_i(), this.imgHasUp_i(), this._Image3_i(), this.btnEvo_i(), this.imgHasEvo_i(), this._Image4_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_main_panel_imgpet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "qing_long_get_panel_btnup_png",
        e.visible = !0,
        e.x = 552,
        e.y = 562,
        e
    },
    i.imgHasUp_i = function() {
        var e = new eui.Image;
        return this.imgHasUp = e,
        e.source = "qing_long_get_panel_imghasup_png",
        e.visible = !0,
        e.x = 554,
        e.y = 560,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgup_png",
        e.visible = !0,
        e.x = 523,
        e.y = 528,
        e
    },
    i.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.source = "qing_long_get_panel_btnevo_png",
        e.x = 276,
        e.y = 562,
        e
    },
    i.imgHasEvo_i = function() {
        var e = new eui.Image;
        return this.imgHasEvo = e,
        e.source = "qing_long_get_panel_imghasevo_png",
        e.x = 277,
        e.y = 560,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgevo_png",
        e.x = 197,
        e.y = 528,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "需要40个苍魂气魄",
        e.textColor = 14019327,
        e.x = 538,
        e.y = 535,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "需要苍魂·青龙和15个苍魂气魄",
        e.textColor = 14019327,
        e.x = 209,
        e.y = 535,
        e
    },
    i.btnGetPet_i = function() {
        var e = new eui.Image;
        return this.btnGetPet = e,
        e.source = "qing_long_get_panel_btngetpet_png",
        e.x = 75,
        e.y = 489,
        e
    },
    i.btnGetItem_i = function() {
        var e = new eui.Image;
        return this.btnGetItem = e,
        e.right = 66,
        e.source = "qing_long_get_panel_btngetitem_png",
        e.y = 489,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.right = 90,
        e.y = 18,
        e.elementsContent = [this._Group2_i(), this._Group3_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 5,
        e.elementsContent = [this._Image5_i(), this.txtTimes_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买:00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "苍魂气魄:999",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongLevelPanelSkin.exml"] = window.QingLongLevelPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnLevel3", "btnLevel2", "btnLevel1", "flagLevel1", "flagLevel2", "flagLevel3", "txtNumAll", "groupNotFinish", "txtNumMine", "groupFinish", "btnPet", "btnCure", "groupLeft", "txtTimes", "btnAddItem", "txtItem"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this.groupLeft_i(), this._Group5_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_level_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnLevel3_i(), this.btnLevel2_i(), this.btnLevel1_i(), this.flagLevel1_i(), this.flagLevel2_i(), this.flagLevel3_i(), this._Group1_i(), this.groupNotFinish_i(), this.groupFinish_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_level_panel_imgpet_png",
        e.visible = !0,
        e.x = 233,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 108,
        e.source = "qing_long_level_panel_imgbg_png",
        e.visible = !0,
        e.x = 71,
        e.y = 506,
        e
    },
    i.btnLevel3_i = function() {
        var e = new eui.Image;
        return this.btnLevel3 = e,
        e.anchorOffsetX = 70,
        e.anchorOffsetY = 73,
        e.source = "qing_long_level_panel_btnlevel3_png",
        e.x = 836.08,
        e.y = 347.758,
        e
    },
    i.btnLevel2_i = function() {
        var e = new eui.Image;
        return this.btnLevel2 = e,
        e.anchorOffsetX = 70,
        e.anchorOffsetY = 73,
        e.source = "qing_long_level_panel_btnlevel2_png",
        e.x = 528.324,
        e.y = 421.246,
        e
    },
    i.btnLevel1_i = function() {
        var e = new eui.Image;
        return this.btnLevel1 = e,
        e.anchorOffsetX = 70,
        e.anchorOffsetY = 73,
        e.scaleX = 1,
        e.source = "qing_long_level_panel_btnlevel1_png",
        e.x = 200.08,
        e.y = 347.758,
        e
    },
    i.flagLevel1_i = function() {
        var e = new eui.Image;
        return this.flagLevel1 = e,
        e.height = 37.255,
        e.source = "common_reward_ylq_png",
        e.width = 97.188,
        e.x = 218.511,
        e.y = 253.506,
        e
    },
    i.flagLevel2_i = function() {
        var e = new eui.Image;
        return this.flagLevel2 = e,
        e.height = 37.255,
        e.source = "common_reward_ylq_png",
        e.width = 97.188,
        e.x = 583.591,
        e.y = 336.913,
        e
    },
    i.flagLevel3_i = function() {
        var e = new eui.Image;
        return this.flagLevel3 = e,
        e.height = 37.255,
        e.source = "common_reward_ylq_png",
        e.width = 97.188,
        e.x = 861.361,
        e.y = 247.654,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 380,
        e.x = 0,
        e.y = 545,
        e.elementsContent = [this._Image4_i(), this.txtNumAll_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_level_panel_imgtxtbg1_png",
        e.visible = !0,
        e.x = 48,
        e.y = 0,
        e
    },
    i.txtNumAll_i = function() {
        var e = new eui.Label;
        return this.txtNumAll = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "当前已有0000名玩家获得苍魂·青龙",
        e.textColor = 14021119,
        e.y = 7,
        e
    },
    i.groupNotFinish_i = function() {
        var e = new eui.Group;
        return this.groupNotFinish = e,
        e.visible = !0,
        e.x = 396,
        e.y = 525,
        e.elementsContent = [this._Image5_i(), this._Label1_i(), this._Label2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_level_panel_imgtxtbg2_png",
        e.visible = !0,
        e.x = 38,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "1.通过龙威在天、亢龙有悔、龙战于野关卡，即可获得青龙完全体进化的资格。",
        e.textColor = 14021119,
        e.visible = !0,
        e.x = 1,
        e.y = 12,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20.0465682428909,
        e.text = "2.关卡进度仅限当日保留，若一天之内未全部通过则次日进度重置。",
        e.textColor = 14021119,
        e.visible = !0,
        e.x = 0,
        e.y = 38,
        e
    },
    i.groupFinish_i = function() {
        var e = new eui.Group;
        return this.groupFinish = e,
        e.visible = !0,
        e.width = 420,
        e.x = 516,
        e.y = 545,
        e.elementsContent = [this._Image6_i(), this.txtNumMine_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_level_panel_imgtxtbg1_png",
        e.x = 68,
        e.y = 0,
        e
    },
    i.txtNumMine_i = function() {
        var e = new eui.Label;
        return this.txtNumMine = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20.0465682428909,
        e.text = "你是第0000名获得天苍玄魂·青龙的玩家",
        e.textColor = 14021119,
        e.y = 7,
        e
    },
    i.groupLeft_i = function() {
        var e = new eui.Group;
        return this.groupLeft = e,
        e.visible = !0,
        e.x = 30,
        e.y = 250,
        e.elementsContent = [this.btnPet_i(), this.btnCure_i()],
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qing_long_level_panel_btnpet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qing_long_level_panel_btncure_png",
        e.x = 0,
        e.y = 90,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.right = 90,
        e.y = 18,
        e.elementsContent = [this._Group3_i(), this._Group4_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 5,
        e.elementsContent = [this._Image7_i(), this.txtTimes_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买:00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this._Image9_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "苍魂气魄:999",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongMainPanelSkin.exml"] = window.QingLongMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnInfo", "btnBest", "btnBless", "btnGet", "btnEvo", "imgHas", "btnEvolveNeed"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Image4_i(), this._Image5_i(), this.btnEvolveNeed_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 329,
        e.visible = !0,
        e.x = 0,
        e.y = 289,
        e.elementsContent = [this._Image2_i(), this.btnInfo_i(), this.btnBest_i(), this.btnBless_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_main_panel_imgtitlebg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "qing_long_main_panel_btninfo_png",
        e.x = 65,
        e.y = 189,
        e
    },
    i.btnBest_i = function() {
        var e = new eui.Image;
        return this.btnBest = e,
        e.source = "qing_long_main_panel_btnbest_png",
        e.x = 45,
        e.y = 254,
        e
    },
    i.btnBless_i = function() {
        var e = new eui.Image;
        return this.btnBless = e,
        e.source = "qing_long_main_panel_btnbless_png",
        e.x = 155,
        e.y = 254,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.right = 14,
        e.visible = !0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.btnGet_i(), this.btnEvo_i(), this.imgHas_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_main_panel_imgpet_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.source = "qing_long_main_panel_btnget_png",
        e.visible = !0,
        e.x = 527,
        e.y = 522,
        e
    },
    i.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.source = "qing_long_main_panel_btnevo_png",
        e.visible = !1,
        e.x = 527,
        e.y = 522,
        e
    },
    i.imgHas_i = function() {
        var e = new eui.Image;
        return this.imgHas = e,
        e.source = "qing_long_main_panel_imghas_png",
        e.visible = !0,
        e.x = 321,
        e.y = 340,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_main_panel_img1_png",
        e.visible = !0,
        e.x = 94,
        e.y = 65,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_main_panel_imgtitle2_png",
        e.x = 882,
        e.y = 115,
        e
    },
    i.btnEvolveNeed_i = function() {
        var e = new eui.Image;
        return this.btnEvolveNeed = e,
        e.source = "qing_long_main_panel_btnevolveneed_png",
        e.x = 40,
        e.y = 310,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongSecondLevelFightPanelSkin.exml"] = window.QingLongSecondLevelFightPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtFightTimes", "btnAddFightTimes", "txtTimes", "btnAddItem", "txtItem", "boss1", "boss2", "boss3", "boss4", "boss5", "boss6", "boss7", "boss8", "boss9", "boss10", "boss11", "boss12", "boss13", "boss14", "group"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group4_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 90,
        e.y = 18,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.txtFightTimes_i(), this.btnAddFightTimes_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtFightTimes_i = function() {
        var e = new eui.Label;
        return this.txtFightTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "今日挑战次数:999",
        e.textColor = 16514895,
        e.x = 8,
        e.y = 6,
        e
    },
    i.btnAddFightTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddFightTimes = e,
        e.source = "qing_long_first_level_panel_btnaddfighttimes_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 424,
        e.y = 5,
        e.elementsContent = [this._Image3_i(), this.txtTimes_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买:00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 569,
        e.left = 0,
        e.right = 0,
        e.y = 57,
        e.viewport = this.group_i(),
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.elementsContent = [this._Group5_i()],
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !1,
        e.verticalCenter = 0,
        e.width = 2482,
        e.x = 80,
        e.elementsContent = [this.boss1_i(), this.boss2_i(), this.boss3_i(), this.boss4_i(), this.boss5_i(), this.boss6_i(), this.boss7_i(), this.boss8_i(), this.boss9_i(), this.boss10_i(), this.boss11_i(), this.boss12_i(), this.boss13_i(), this.boss14_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i()],
        e
    },
    i.boss1_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss1 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    i.boss2_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss2 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = -120,
        e.visible = !0,
        e.x = 273,
        e
    },
    i.boss3_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss3 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 120,
        e.visible = !0,
        e.x = 273,
        e
    },
    i.boss4_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss4 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 545,
        e.y = 172,
        e
    },
    i.boss5_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss5 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = -190,
        e.visible = !0,
        e.x = 824,
        e.y = 52,
        e
    },
    i.boss6_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss6 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 824,
        e.y = 182,
        e
    },
    i.boss7_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss7 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 190,
        e.visible = !0,
        e.x = 824,
        e.y = 292,
        e
    },
    i.boss8_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss8 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = -120,
        e.visible = !0,
        e.x = 1098,
        e.y = 80,
        e
    },
    i.boss9_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss9 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 120,
        e.visible = !0,
        e.x = 1098,
        e.y = 320,
        e
    },
    i.boss10_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss10 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 1370,
        e.y = 182,
        e
    },
    i.boss11_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss11 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = -120,
        e.visible = !0,
        e.x = 1645,
        e.y = 90,
        e
    },
    i.boss12_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss12 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 120,
        e.visible = !0,
        e.x = 1645,
        e.y = 330,
        e
    },
    i.boss13_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss13 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 1917,
        e.y = 192,
        e
    },
    i.boss14_i = function() {
        var e = new qingLong.SecondLevelBossItem;
        return this.boss14 = e,
        e.scaleY = 1,
        e.skinName = "QingLongSecondLevelBossItemSkin",
        e.verticalCenter = 0,
        e.x = 2197,
        e.y = 202,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -50,
        e.x = 206,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 50,
        e.x = 206,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -50,
        e.x = 478,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 50,
        e.x = 478,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.rotation = -8,
        e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -80,
        e.x = 750,
        e.y = 186,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.rotation = 29.7,
        e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 0,
        e.x = 770,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.rotation = 8,
        e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 80,
        e.x = 750,
        e.y = 346,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -131,
        e.x = 1030,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -47,
        e.x = 1030,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 47,
        e.x = 1030,
        e.y = 194,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 131,
        e.x = 1030,
        e.y = 218,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -50,
        e.x = 1303,
        e.y = 275,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 50,
        e.x = 1303,
        e.y = 315,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -50,
        e.x = 1577,
        e.y = 215,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 50,
        e.x = 1577,
        e.y = 375,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.scaleY = -1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = -50,
        e.x = 1850,
        e.y = 285,
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 50,
        e.x = 1850,
        e.y = 325,
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.rotation = 29.7,
        e.scaleY = 1,
        e.source = "qing_long_second_level_fight_panel_imgarrow_png",
        e.verticalCenter = 0,
        e.x = 2143,
        e.y = 252,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongSecondLevelMainPanelSkin.exml"] = window.QingLongSecondLevelMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnStart", "btnReset", "btnContinue", "txtResetTimes", "btnAddResetTimes", "txtTimes", "btnAddItem", "txtItem"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnStart_i(), this.btnReset_i(), this.btnContinue_i(), this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 30,
        e.source = "qing_long_second_level_main_panel_imgpet_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    i.btnStart_i = function() {
        var e = new eui.Image;
        return this.btnStart = e,
        e.horizontalCenter = -27,
        e.source = "qing_long_second_level_main_panel_btnstart_png",
        e.visible = !0,
        e.y = 320,
        e
    },
    i.btnReset_i = function() {
        var e = new eui.Image;
        return this.btnReset = e,
        e.horizontalCenter = -158,
        e.source = "qing_long_second_level_main_panel_btnreset_png",
        e.y = 320,
        e
    },
    i.btnContinue_i = function() {
        var e = new eui.Image;
        return this.btnContinue = e,
        e.horizontalCenter = 94,
        e.source = "qing_long_second_level_main_panel_btncontinue_png",
        e.y = 320,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 90,
        e.y = 18,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.txtResetTimes_i(), this.btnAddResetTimes_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txtResetTimes_i = function() {
        var e = new eui.Label;
        return this.txtResetTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "今日重置次数:999",
        e.textColor = 16514895,
        e.x = 8,
        e.y = 6,
        e
    },
    i.btnAddResetTimes_i = function() {
        var e = new eui.Image;
        return this.btnAddResetTimes = e,
        e.source = "qing_long_first_level_panel_btnaddfighttimes_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 424,
        e.y = 5,
        e.elementsContent = [this._Image4_i(), this.txtTimes_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买:00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.textColor = 16514895,
        e.visible = !0,
        e.x = 36,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongSecondLevelPreparePanelSkin.exml"] = window.QingLongSecondLevelPreparePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnStart", "btnOneKeyUp", "btnOneKeyDown", "txtTip", "groupUp", "rb1", "rb2", "rb3", "rb4", "groupBag1", "groupBag2", "groupBag", "txtSearch", "imgSort", "txtSort", "btnSort", "btnAttr", "list", "sortMask", "rb_id_sort_down", "rb_id_sort_up", "rb_lvl_sort_down", "rb_lvl_sort_up", "rb_tm_sort_down", "rb_tm_sort_up", "groupSort", "groupWarehouse", "groupMenu"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group5_i(), this.groupMenu_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgpage1down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "qing_long_second_level_prepare_panel_imgpage1up_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgpage2down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "qing_long_second_level_prepare_panel_imgpage2up_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgpage3down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "qing_long_second_level_prepare_panel_imgpage3up_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgpage4down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "qing_long_second_level_prepare_panel_imgpage4up_png",
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_iddown_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_iddown_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_idup_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_idup_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_lvdown_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_lvdown_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_lvup_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_lvup_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_timedown_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_timedown_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    g = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_timeup_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "qing_long_second_level_prepare_panel_imgsort_timeup_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    h = t.prototype;
    return h._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 640,
        e.left = 0,
        e.right = 0,
        e.source = "common_ui_bg_3_jpg",
        e.visible = !0,
        e.y = 0,
        e
    },
    h._Group5_i = function() {
        var e = new eui.Group;
        return e.height = 640,
        e.left = 172,
        e.right = 29,
        e.elementsContent = [this._Group4_i()],
        e
    },
    h._Group4_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 935,
        e.y = 62,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.btnStart_i(), this.btnOneKeyUp_i(), this.btnOneKeyDown_i(), this.txtTip_i(), this._Scroller1_i(), this.groupBag_i(), this.groupWarehouse_i()],
        e
    },
    h._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_panel_img1_png",
        e.x = 352,
        e.y = 172,
        e
    },
    h._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_panel_img2_png",
        e.x = 506,
        e.y = 13,
        e
    },
    h.btnStart_i = function() {
        var e = new eui.Image;
        return this.btnStart = e,
        e.source = "qing_long_second_level_prepare_panel_btnstart_png",
        e.x = 662,
        e.y = 481,
        e
    },
    h.btnOneKeyUp_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyUp = e,
        e.source = "qing_long_second_level_prepare_panel_btnonekeyup_png",
        e.visible = !0,
        e.x = 848,
        e.y = 16,
        e
    },
    h.btnOneKeyDown_i = function() {
        var e = new eui.Image;
        return this.btnOneKeyDown = e,
        e.source = "qing_long_second_level_prepare_panel_btnonekeydown_png",
        e.visible = !0,
        e.x = 848,
        e.y = 16,
        e
    },
    h.txtTip_i = function() {
        var e = new eui.Label;
        return this.txtTip = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "最多可选择20只70级以上的精灵",
        e.textColor = 10270182,
        e.x = 609,
        e.y = 23,
        e
    },
    h._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 330,
        e.width = 373,
        e.x = 545,
        e.y = 118,
        e.viewport = this._Group1_i(),
        e
    },
    h._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.groupUp_i()],
        e
    },
    h.groupUp_i = function() {
        var e = new eui.Group;
        return this.groupUp = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    h._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.requestedColumnCount = 3,
        e.verticalGap = -10,
        e
    },
    h.groupBag_i = function() {
        var e = new eui.Group;
        return this.groupBag = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Group2_i(), this.groupBag1_i(), this.groupBag2_i()],
        e
    },
    h._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_panel_imgleftbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    h._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.width = 219,
        e.x = 96,
        e.y = 523,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.rb1_i(), this.rb2_i(), this.rb3_i(), this.rb4_i()],
        e
    },
    h._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 25,
        e.horizontalAlign = "center",
        e
    },
    h.rb1_i = function() {
        var e = new eui.RadioButton;
        return this.rb1 = e,
        e.label = "1",
        e.scaleX = 1.5,
        e.scaleY = 1.5,
        e.x = 99,
        e.y = 47,
        e.skinName = i,
        e
    },
    h.rb2_i = function() {
        var e = new eui.RadioButton;
        return this.rb2 = e,
        e.groupName = "qinglongbag",
        e.label = "2",
        e.scaleX = 1.5,
        e.scaleY = 1.5,
        e.x = 109,
        e.y = 57,
        e.skinName = n,
        e
    },
    h.rb3_i = function() {
        var e = new eui.RadioButton;
        return this.rb3 = e,
        e.groupName = "qinglongbag",
        e.label = "3",
        e.scaleX = 1.5,
        e.scaleY = 1.5,
        e.x = 119,
        e.y = 67,
        e.skinName = o,
        e
    },
    h.rb4_i = function() {
        var e = new eui.RadioButton;
        return this.rb4 = e,
        e.groupName = "qinglongbag",
        e.label = "4",
        e.scaleX = 1.5,
        e.scaleY = 1.5,
        e.x = 129,
        e.y = 77,
        e.skinName = r,
        e
    },
    h.groupBag1_i = function() {
        var e = new eui.Group;
        return this.groupBag1 = e,
        e.x = 40,
        e.y = 13,
        e.layout = this._TileLayout2_i(),
        e
    },
    h._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -15,
        e.requestedColumnCount = 3,
        e.verticalGap = -20,
        e
    },
    h.groupBag2_i = function() {
        var e = new eui.Group;
        return this.groupBag2 = e,
        e.x = 40,
        e.y = 283,
        e.layout = this._TileLayout3_i(),
        e
    },
    h._TileLayout3_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -15,
        e.requestedColumnCount = 3,
        e.verticalGap = -20,
        e
    },
    h.groupWarehouse_i = function() {
        var e = new eui.Group;
        return this.groupWarehouse = e,
        e.visible = !0,
        e.elementsContent = [this._Group3_i(), this.btnSort_i(), this.btnAttr_i(), this._Scroller2_i(), this.groupSort_i()],
        e
    },
    h._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 257,
        e.elementsContent = [this._Image5_i(), this.txtSearch_i(), this._Image6_i()],
        e
    },
    h._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "common_search_bg_png",
        e.width = 160,
        e.x = 0,
        e.y = 0,
        e
    },
    h.txtSearch_i = function() {
        var e = new eui.EditableText;
        return this.txtSearch = e,
        e.fontFamily = "MFShangHei",
        e.prompt = "输入精灵名或ID",
        e.promptColor = 13097725,
        e.size = 16,
        e.textColor = 13097725,
        e.width = 120,
        e.x = 7,
        e.y = 7,
        e
    },
    h._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_btnsearch_png",
        e.x = 131,
        e.y = 0,
        e
    },
    h.btnSort_i = function() {
        var e = new eui.Group;
        return this.btnSort = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this.imgSort_i(), this.txtSort_i()],
        e
    },
    h._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_panel_imgsort_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    h.imgSort_i = function() {
        var e = new eui.Image;
        return this.imgSort = e,
        e.source = "qing_long_second_level_prepare_panel_img_down_png",
        e.visible = !0,
        e.x = 83,
        e.y = 9,
        e
    },
    h.txtSort_i = function() {
        var e = new eui.Label;
        return this.txtSort = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 11586047,
        e.visible = !0,
        e.x = 9,
        e.y = 7,
        e
    },
    h.btnAttr_i = function() {
        var e = new eui.Image;
        return this.btnAttr = e,
        e.source = "qing_long_second_level_prepare_panel_btnattr_png",
        e.visible = !0,
        e.x = 121,
        e.y = 0,
        e
    },
    h._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 481,
        e.width = 375,
        e.x = 23,
        e.y = 64,
        e.viewport = this.list_i(),
        e
    },
    h.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout4_i(),
        e
    },
    h._TileLayout4_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.requestedColumnCount = 3,
        e.verticalGap = -10,
        e
    },
    h.groupSort_i = function() {
        var e = new eui.Group;
        return this.groupSort = e,
        e.anchorOffsetX = 295,
        e.anchorOffsetY = 75,
        e.cacheAsBitmap = !0,
        e.height = 150,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 590,
        e.x = 295,
        e.y = 117,
        e.elementsContent = [this.sortMask_i(), this._Image8_i(), this.rb_id_sort_down_i(), this.rb_id_sort_up_i(), this.rb_lvl_sort_down_i(), this.rb_lvl_sort_up_i(), this.rb_tm_sort_down_i(), this.rb_tm_sort_up_i()],
        e
    },
    h.sortMask_i = function() {
        var e = new eui.Group;
        return this.sortMask = e,
        e.height = 2e3,
        e.visible = !0,
        e.width = 3e3,
        e.x = -1e3,
        e.y = -1e3,
        e
    },
    h._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 150,
        e.scale9Grid = new egret.Rectangle(2, 2, 16, 16),
        e.source = "new_tips_2021_11_img3_png",
        e.visible = !0,
        e.width = 590,
        e.x = 0,
        e.y = 0,
        e
    },
    h.rb_id_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_down = e,
        e.label = "",
        e.value = "id_down",
        e.x = 29,
        e.y = 17,
        e.skinName = s,
        e
    },
    h.rb_id_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_id_sort_up = e,
        e.value = "id_up",
        e.x = 29,
        e.y = 83,
        e.skinName = a,
        e
    },
    h.rb_lvl_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_down = e,
        e.value = "lvl_down",
        e.x = 179,
        e.y = 17,
        e.skinName = _,
        e
    },
    h.rb_lvl_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_lvl_sort_up = e,
        e.value = "lvl_up",
        e.x = 179,
        e.y = 83,
        e.skinName = u,
        e
    },
    h.rb_tm_sort_down_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_down = e,
        e.value = "tm_down",
        e.x = 331,
        e.y = 17,
        e.skinName = l,
        e
    },
    h.rb_tm_sort_up_i = function() {
        var e = new eui.RadioButton;
        return this.rb_tm_sort_up = e,
        e.value = "tm_up",
        e.x = 331,
        e.y = 83,
        e.skinName = g,
        e
    },
    h.groupMenu_i = function() {
        var e = new eui.Group;
        return this.groupMenu = e,
        e.y = 48,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/QingLongThirdLevelPanelSkin.exml"] = window.QingLongThirdLevelPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnRoll", "txtFight1", "txtFight2", "txtFight3", "txtFight4", "txtFight5", "txtFight6", "txtFight7", "comp_1", "comp_2", "comp_3", "comp_5", "comp_4", "comp_7", "comp_6", "btnPet", "btnCure", "txtTimes", "btnAddItem", "txtItem"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group2_i(), this._Group3_i(), this._Group6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 0,
        e.source = "qing_long_main_panel_bg_jpg",
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 7.5,
        e.visible = !0,
        e.y = 44,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this.btnRoll_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this._Label7_i(), this.txtFight1_i(), this.txtFight2_i(), this.txtFight3_i(), this.txtFight4_i(), this.txtFight5_i(), this.txtFight6_i(), this.txtFight7_i(), this._Group1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgpet_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgfightbg_png",
        e.visible = !0,
        e.x = 647,
        e.y = 30,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgfight_png",
        e.x = 728,
        e.y = 45,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall1_png",
        e.x = 736,
        e.y = 93,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall2_png",
        e.x = 737,
        e.y = 137,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall3_png",
        e.x = 736,
        e.y = 187,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall4_png",
        e.x = 740,
        e.y = 237,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall4_png",
        e.x = 740,
        e.y = 290,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall6_png",
        e.x = 737,
        e.y = 343,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_third_level_panel_imgsmall6_png",
        e.x = 737,
        e.y = 394,
        e
    },
    i.btnRoll_i = function() {
        var e = new eui.Image;
        return this.btnRoll = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "qing_long_third_level_panel_btnroll_png",
        e.x = 821,
        e.y = 502,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙首",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 107,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙身",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 157,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙尾",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 208,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙翼（左）",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 258,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙翼（右）",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 309,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙爪（左）",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 362,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "龙爪（右）",
        e.textColor = 12309247,
        e.x = 790,
        e.y = 413,
        e
    },
    i.txtFight1_i = function() {
        var e = new eui.Label;
        return this.txtFight1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "未击败",
        e.textColor = 4512255,
        e.y = 107,
        e
    },
    i.txtFight2_i = function() {
        var e = new eui.Label;
        return this.txtFight2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "已击败",
        e.textColor = 6062541,
        e.y = 158,
        e
    },
    i.txtFight3_i = function() {
        var e = new eui.Label;
        return this.txtFight3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "彻底击败",
        e.textColor = 16776272,
        e.y = 208,
        e
    },
    i.txtFight4_i = function() {
        var e = new eui.Label;
        return this.txtFight4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "未击败",
        e.textColor = 4512255,
        e.y = 257,
        e
    },
    i.txtFight5_i = function() {
        var e = new eui.Label;
        return this.txtFight5 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "未击败",
        e.textColor = 4512255,
        e.y = 309,
        e
    },
    i.txtFight6_i = function() {
        var e = new eui.Label;
        return this.txtFight6 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "未击败",
        e.textColor = 4512255,
        e.y = 361,
        e
    },
    i.txtFight7_i = function() {
        var e = new eui.Label;
        return this.txtFight7 = e,
        e.fontFamily = "MFShangHei",
        e.right = 50,
        e.size = 18,
        e.text = "未击败",
        e.textColor = 4512255,
        e.y = 413,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 67.22,
        e.y = -14.67,
        e.elementsContent = [this.comp_1_i(), this.comp_2_i(), this.comp_3_i(), this.comp_5_i(), this.comp_4_i(), this.comp_7_i(), this.comp_6_i()],
        e
    },
    i.comp_1_i = function() {
        var e = new eui.Image;
        return this.comp_1 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 79,
        e.source = "qing_long_third_level_panel_comp_1_png",
        e.x = 518.955,
        e.y = 254.261,
        e
    },
    i.comp_2_i = function() {
        var e = new eui.Image;
        return this.comp_2 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 79,
        e.source = "qing_long_third_level_panel_comp_2_png",
        e.x = 338.768,
        e.y = 307.67,
        e
    },
    i.comp_3_i = function() {
        var e = new eui.Image;
        return this.comp_3 = e,
        e.anchorOffsetX = 86,
        e.anchorOffsetY = 80,
        e.scaleX = 1,
        e.source = "qing_long_third_level_panel_comp_3_png",
        e.x = 109.202,
        e.y = 329.923,
        e
    },
    i.comp_5_i = function() {
        var e = new eui.Image;
        return this.comp_5 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 80,
        e.source = "qing_long_third_level_panel_comp_4_png",
        e.x = 377.846,
        e.y = 94.791,
        e
    },
    i.comp_4_i = function() {
        var e = new eui.Image;
        return this.comp_4 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 80,
        e.source = "qing_long_third_level_panel_comp_4_png",
        e.x = 176.553,
        e.y = 146.54,
        e
    },
    i.comp_7_i = function() {
        var e = new eui.Image;
        return this.comp_7 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 80,
        e.source = "qing_long_third_level_panel_comp_6_png",
        e.x = 461.28,
        e.y = 456.67,
        e
    },
    i.comp_6_i = function() {
        var e = new eui.Image;
        return this.comp_6 = e,
        e.anchorOffsetX = 80,
        e.anchorOffsetY = 80,
        e.source = "qing_long_third_level_panel_comp_6_png",
        e.x = 291.423,
        e.y = 472.255,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 87,
        e.y = 426,
        e.elementsContent = [this.btnPet_i(), this.btnCure_i()],
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "qing_long_level_panel_btnpet_png",
        e.x = 1,
        e.y = 0,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "qing_long_level_panel_btncure_png",
        e.x = 0,
        e.y = 98,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.right = 90,
        e.visible = !0,
        e.y = 18,
        e.elementsContent = [this._Group4_i(), this._Group5_i()],
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 212,
        e.y = 5,
        e.elementsContent = [this._Image12_i(), this.txtTimes_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtTimes_i = function() {
        var e = new eui.Label;
        return this.txtTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119681,
        e.text = "今日已购买：00/10",
        e.textColor = 16514895,
        e.x = 14,
        e.y = 1,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image13_i(), this._Image14_i(), this.btnAddItem_i(), this.txtItem_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitembg_png",
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_get_panel_imgitem_png",
        e.x = 6,
        e.y = 0,
        e
    },
    i.btnAddItem_i = function() {
        var e = new eui.Image;
        return this.btnAddItem = e,
        e.source = "qing_long_get_panel_btnadditem_png",
        e.x = 160,
        e.y = 5,
        e
    },
    i.txtItem_i = function() {
        var e = new eui.Label;
        return this.txtItem = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "苍魂气魄:999",
        e.textColor = 16514895,
        e.x = 36,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/QingLongBestPopSkin.exml"] = window.QingLongBestPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnBuy", "txtDiamond"],
        this.height = 608,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.btnBuy_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.txtDiamond_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_best_pop_img_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "qing_long_best_pop_btnclose_png",
        e.x = 907,
        e.y = 11,
        e
    },
    i.btnBuy_i = function() {
        var e = new eui.Image;
        return this.btnBuy = e,
        e.source = "qing_long_best_pop_btnbest_png",
        e.x = 350,
        e.y = 545,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "速度 255",
        e.textColor = 16774500,
        e.x = 769,
        e.y = 243,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "攻击 255",
        e.textColor = 16774500,
        e.x = 769,
        e.y = 223.549,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "固执",
        e.textColor = 16774500,
        e.x = 771,
        e.y = 341,
        e
    },
    i.txtDiamond_i = function() {
        var e = new eui.Label;
        return this.txtDiamond = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 16774499,
        e.x = 468,
        e.y = 516,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/QingLongSecondLevelFightPopSkin.exml"] = window.QingLongSecondLevelFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnFight", "group"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnFight_i(), this.group_i(), this._Label1_i(), this._Label2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "title_pop_2022_imge_735x431_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_fight_pop_imgtitle_png",
        e.x = 36,
        e.y = 2,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 712,
        e.y = 2,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qing_long_second_level_fight_pop_btnfight_png",
        e.x = 310,
        e.y = 303,
        e
    },
    i.group_i = function() {
        var e = new eui.Group;
        return this.group = e,
        e.horizontalCenter = 0,
        e.y = 138,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -10,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "试炼中所使用的精灵无法恢复体力和技能PP值，请谨慎对待！",
        e.textColor = 6388143,
        e.x = 131,
        e.y = 375,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "本轮试炼精灵",
        e.textColor = 12111615,
        e.x = 305,
        e.y = 95,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/QingLongSecondLevelPreparePopSkin.exml"] = window.QingLongSecondLevelPreparePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnFight", "txtAttack", "txtSpeed", "txtDefence", "txtSAttack", "txtHp", "txtSDefence", "imgFifthProp", "txtFifthSkillName", "txtFifthSkill", "groupFifthSkill", "groupSkillItem", "btnFirst", "btnDown", "btnUp", "imgHead", "progressHP", "txtHP", "txtLVName", "groupRight", "group1", "group2"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this.btnFight_i(), this.groupRight_i(), this._Image8_i(), this.group1_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "qing_long_second_level_prepare_pop_imgprocess_png",
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 550,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 3),
        e.source = "qing_long_second_level_prepare_pop_imgbg_png",
        e.width = 1005,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.left = 0,
        e.right = 5,
        e.scale9Grid = new egret.Rectangle(478, 11, 21, 12),
        e.source = "qing_long_second_level_prepare_pop_imgtitlebg_png",
        e.y = 0,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_imgtitle_png",
        e.x = 41,
        e.y = 2,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 961,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "qing_long_second_level_prepare_pop_btnfight_png",
        e.x = 436,
        e.y = 481,
        e
    },
    n.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.visible = !0,
        e.x = 573,
        e.y = 82,
        e.elementsContent = [this._Group1_i(), this.groupFifthSkill_i(), this.groupSkillItem_i(), this.btnFirst_i(), this.btnDown_i(), this.btnUp_i(), this._Image6_i(), this._Image7_i(), this.imgHead_i(), this.progressHP_i(), this.txtHP_i(), this.txtLVName_i()],
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.y = 84,
        e.elementsContent = [this._Label1_i(), this.txtAttack_i(), this._Label2_i(), this.txtSpeed_i(), this._Label3_i(), this.txtDefence_i(), this._Label4_i(), this.txtSAttack_i(), this._Label5_i(), this.txtHp_i(), this._Label6_i(), this.txtSDefence_i()],
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "攻击：",
        e.textColor = 12834813,
        e
    },
    n.txtAttack_i = function() {
        var e = new eui.Label;
        return this.txtAttack = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 47,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "速度：",
        e.textColor = 12834813,
        e.x = 130,
        e
    },
    n.txtSpeed_i = function() {
        var e = new eui.Label;
        return this.txtSpeed = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 178,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "防御：",
        e.textColor = 12834813,
        e.x = 261,
        e
    },
    n.txtDefence_i = function() {
        var e = new eui.Label;
        return this.txtDefence = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 309,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特攻：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 24,
        e
    },
    n.txtSAttack_i = function() {
        var e = new eui.Label;
        return this.txtSAttack = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 47,
        e.y = 24,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "体力：",
        e.textColor = 12834813,
        e.x = 130,
        e.y = 24,
        e
    },
    n.txtHp_i = function() {
        var e = new eui.Label;
        return this.txtHp = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 178,
        e.y = 24,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "特防：",
        e.textColor = 12834813,
        e.x = 261,
        e.y = 24,
        e
    },
    n.txtSDefence_i = function() {
        var e = new eui.Label;
        return this.txtSDefence = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "99999999",
        e.textColor = 6027519,
        e.x = 309,
        e.y = 24,
        e
    },
    n.groupFifthSkill_i = function() {
        var e = new eui.Group;
        return this.groupFifthSkill = e,
        e.visible = !0,
        e.x = 7,
        e.y = 275,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.imgFifthProp_i(), this.txtFifthSkillName_i(), this.txtFifthSkill_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_imgskillrect_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_imgrect_png",
        e.x = 64,
        e.y = 29,
        e
    },
    n.imgFifthProp_i = function() {
        var e = new eui.Image;
        return this.imgFifthProp = e,
        e.height = 25,
        e.width = 25,
        e.x = 22,
        e.y = 16,
        e
    },
    n.txtFifthSkillName_i = function() {
        var e = new eui.Label;
        return this.txtFifthSkillName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 15068927,
        e.width = 130,
        e.x = 144,
        e.y = 8,
        e
    },
    n.txtFifthSkill_i = function() {
        var e = new eui.Label;
        return this.txtFifthSkill = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 6027519,
        e.width = 212,
        e.x = 100,
        e.y = 34,
        e
    },
    n.groupSkillItem_i = function() {
        var e = new eui.Group;
        return this.groupSkillItem = e,
        e.visible = !0,
        e.x = 10,
        e.y = 143,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 10,
        e.requestedColumnCount = 2,
        e.verticalGap = 10,
        e
    },
    n.btnFirst_i = function() {
        var e = new eui.Image;
        return this.btnFirst = e,
        e.source = "qing_long_second_level_prepare_pop_btnfirst_png",
        e.x = 187,
        e.y = 355,
        e
    },
    n.btnDown_i = function() {
        var e = new eui.Image;
        return this.btnDown = e,
        e.source = "qing_long_second_level_prepare_pop_btndown_png",
        e.visible = !0,
        e.x = 292,
        e.y = 355,
        e
    },
    n.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.source = "qing_long_second_level_prepare_pop_btnup_png",
        e.visible = !0,
        e.x = 292,
        e.y = 355,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_imgprogressbg_png",
        e.x = 73.744,
        e.y = 49,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.scale9Grid = new egret.Rectangle(37, 105, 37, 25),
        e.source = "qing_long_pet_item_imgbg_png",
        e.visible = !0,
        e.width = 70,
        e.x = 0,
        e.y = 0,
        e
    },
    n.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 62,
        e.width = 62,
        e.x = 4,
        e.y = 4,
        e
    },
    n.progressHP_i = function() {
        var e = new eui.ProgressBar;
        return this.progressHP = e,
        e.height = 16,
        e.value = 100,
        e.width = 281,
        e.x = 85.744,
        e.y = 53,
        e.skinName = i,
        e
    },
    n.txtHP_i = function() {
        var e = new eui.Label;
        return this.txtHP = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "HP:999/999",
        e.textColor = 6027519,
        e.x = 80,
        e.y = 33,
        e
    },
    n.txtLVName_i = function() {
        var e = new eui.Label;
        return this.txtLVName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "LV.100 精灵名精灵名",
        e.textColor = 12834813,
        e.x = 77,
        e.y = 1,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "qing_long_second_level_prepare_pop_leftbg_png",
        e.x = 41,
        e.y = 52,
        e
    },
    n.group1_i = function() {
        var e = new eui.Group;
        return this.group1 = e,
        e.x = 100,
        e.y = 50,
        e.layout = this._TileLayout2_i(),
        e
    },
    n._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 0,
        e.requestedColumnCount = 3,
        e.requestedRowCount = 2,
        e.verticalGap = -10,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 199,
        e.width = 390,
        e.x = 70,
        e.y = 260,
        e.viewport = this.group2_i(),
        e
    },
    n.group2_i = function() {
        var e = new eui.Group;
        return this.group2 = e,
        e.layout = this._TileLayout3_i(),
        e
    },
    n._TileLayout3_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -10,
        e.paddingLeft = 5,
        e.paddingTop = 5,
        e.requestedColumnCount = 4,
        e.verticalGap = -10,
        e
    },
    t
} (eui.Skin);