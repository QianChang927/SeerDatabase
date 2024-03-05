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
    return new(n || (n = Promise))(function(o, r) {
        function a(e) {
            try {
                u(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                u(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (o = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
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
                if (a = u.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    u = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    u.label = n[1];
                    break
                }
                if (6 === n[0] && u.label < a[1]) {
                    u.label = a[1],
                    a = n;
                    break
                }
                if (a && u.label < a[2]) {
                    u.label = a[2],
                    u.ops.push(n);
                    break
                }
                a[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            n = t.call(e, u)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, u = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
museSuperEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.canDown = !0,
            t.confId = 0,
            t.skinName = MuseSuperEvoSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.adaptBgByScale.call(this, this.bg),
            this.initOldPveBtnClose(0, this, "muse_super_evo_title_png", this.onClose, this),
            this.initBtnHelp(function() {
                StatLogger.log("20230609版本系统功能", "缪斯超进化搬迁", "点击主界面-【？】"),
                tipsPop.TipsPop.openHelpPopById(163)
            },
            this),
            ImageButtonUtil.add(this.collect,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                    function(t) {
                        switch (t.label) {
                        case 0:
                            return this.canDown ? (this.canDown = !1, e = "muse_super_evo_collect_png" == this.collect.source, [4, PetFactorCollectionManager.setCollection(this.confId, e)]) : (BubblerManager.getInstance().showText("请不要过快连续点击！"), [2]);
                        case 1:
                            return t.sent(),
                            this.canDown = !0,
                            [2]
                        }
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 2527,
                    type: "pet"
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.btnEvo,
            function() {
                PetManager.isDefaultPet(1633) || PetManager.isDefaultPet(1632) ? SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 125],
                function() {
                    StatLogger.log("20230609版本系统功能", "缪斯超进化搬迁", "点击主界面-左侧【开始超进化】"),
                    BubblerManager.getInstance().showText("进化成功！"),
                    PetManager.upDateBagPetInfo(PetManager.defaultTime),
                    t.updateView()
                }) : Alarm.show("请将缪斯设为首位！",
                function() {
                    ModuleManager.showModuleByID(10)
                })
            },
            this),
            ImageButtonUtil.add(this.oneKey,
            function() {
                PayManager.canPay() ? PetManager.isDefaultPet(1633) || PetManager.isDefaultPet(1632) ? KTool.buyProductByCallback(241526, 1,
                function() {
                    SocketConnection.sendByQueue(CommandID.PET_SUPER_EVOLUTION, [PetManager.defaultTime, 124],
                    function() {
                        BubblerManager.getInstance().showText("进化成功！"),
                        PetManager.upDateBagPetInfo(PetManager.defaultTime),
                        t.updateView()
                    })
                }) : Alarm.show("请将缪斯设为首位！",
                function() {
                    ModuleManager.showModuleByID(10)
                }) : Alarm.show("暂未开放，敬请期待！")
            },
            this),
            ImageButtonUtil.add(this.fiveSkill,
            function() {
                if (PayManager.canPay()) {
                    var e = PetManager.getBagPetsById(2527),
                    n = e.length > 0;
                    if (n) {
                        var i = e[0].catchTime;
                        KTool.buyProductByCallback(241527, 1,
                        function() {
                            SocketConnection.sendWithCallback(45503,
                            function() {
                                PetManager.upDateBagPetInfo(PetManager.defaultTime),
                                t.updateView(),
                                Alert.show("赤瞳缪斯第五技能觉醒成功！,是否立刻前往背包查看",
                                function() {
                                    ModuleManager.showModuleByID(10)
                                })
                            },
                            i, 11)
                        })
                    } else Alarm.show("需要把赤瞳缪斯放入背包才能开启第五技能哦！")
                } else Alarm.show("暂未开放，敬请期待！")
            },
            this);
            for (var n = function(e) {
                ImageButtonUtil.add(i["go" + (e + 1)],
                function() {
                    ModuleManager.showModule("museSuperEvo", [], e + 1, "MuseSuperEvoFightPanel", AppDoStyle.HIDEN)
                },
                i)
            },
            i = this, o = 0; 4 > o; o++) n(o);
            EventManager.addEventListener(PetFactorCollectionManager.PetFactorCollectionManager_setCollection, this.updateFav, this),
            config.New_monster_level.load(function() {
                t.updateView()
            },
            this)
        },
        t.prototype.reShow = function() {
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            KTool.getMultiValue([6118],
            function(t) {
                for (var n = t[0], i = !0, o = 1 == KTool.getBit(n, 5), r = 0; 4 > r; r++) {
                    var a = 1 == KTool.getBit(n, r + 1);
                    a || (i = !1),
                    e["open_" + (r + 1)].visible = a || o,
                    DisplayUtil.setEnabled(e["go" + (r + 1)], !a && !o, !0)
                }
                e.got.visible = o,
                DisplayUtil.setEnabled(e.btnEvo, !o, !0),
                e.btnEvo.visible = i && !o,
                DisplayUtil.setEnabled(e.oneKey, !o, !0);
                var s = 1 == KTool.getBit(n, 6);
                DisplayUtil.setEnabled(e.fiveSkill, !s, !0);
                var u = PetManager.getBagPetsById(2527),
                _ = u.length > 0;
                e.fiveSkill.visible = _,
                e.oneKey.visible = !_,
                e.btnGot.visible = o && s
            }),
            this.updateFav()
        },
        t.prototype.updateFav = function() {
            var e = this,
            t = config.New_monster_level.getItems().filter(function(e) {
                return 2527 == ~~e.monsterid
            });
            t.length > 0 && (this.confId = t[0].id, PetFactorCollectionManager.getAllData().then(function() {
                var t = PetFactorCollectionManager.checkPetIdIndexIsCollection(e.confId);
                e.collect.source = t ? "muse_super_evo_collected_png": "muse_super_evo_collect_png"
            }))
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.MuseSuperEvo = t,
    __reflect(t.prototype, "museSuperEvo.MuseSuperEvo")
} (museSuperEvo || (museSuperEvo = {}));
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
museSuperEvo; !
function(e) {
    var t = function(t) {
        function i(e) {
            var n = t.call(this, e) || this;
            return n.type = 1,
            n.curSelectInd = 0,
            n.normal = !1,
            n.typeArr = [{
                use: 6,
                item: 1702396,
                boss: [1918, 1777, 1610, 1506],
                oneKey: 3781,
                oneKeyId: 241528,
                buy: 3785,
                buyId: 241532
            },
            {
                use: 6,
                item: 1702397,
                boss: [2457, 2445, 2436, 2422],
                oneKey: 3782,
                oneKeyId: 241555,
                buy: 3786,
                buyId: 241533
            },
            {
                use: 9,
                item: 1702398,
                boss: [2313, 2021, 2354, 1732],
                oneKey: 3783,
                oneKeyId: 241530,
                buy: 3787,
                buyId: 241534
            },
            {
                use: 9,
                item: 1702399,
                boss: [2505, 2503, 2491, 2487],
                oneKey: 3784,
                oneKeyId: 241531,
                buy: 3788,
                buyId: 241535
            }],
            n.type = ~~e || 1,
            n.skinName = MuseSuperEvoFightPanelSkin,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            t.prototype.adaptBgByScale.call(this, this.bg),
            this.adaptLeftContent(this.mainGroup),
            this.adaptRightContent(this.mainGroup),
            this.adaptRightContent(this._scr),
            this.initOldPveBtnClose(0, this, "muse_super_evo_fight_panel_title" + this.type + "_png", this.onClose, this),
            this._list.itemRenderer = n;
            var o = this.typeArr[this.type - 1].boss,
            r = o.map(function(e, t) {
                return {
                    id: e,
                    ind: 3 - t,
                    type: i.type
                }
            });
            this._list.dataProvider = new eui.ArrayCollection(r),
            this.once(egret.Event.RENDER,
            function() {
                i._list.setSelectedIndex(0),
                i.tap()
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
            ImageButtonUtil.add(this.add,
            function() {
                var e = i.typeArr[i.type - 1];
                BuyProductManager.buyProduct(e.buyId + "_" + e.buy,
                function() {},
                i, e.item)
            },
            this),
            ImageButtonUtil.add(this.oneKey,
            function() {
                var e = i.typeArr[i.type - 1];
                BuyProductManager.buyProduct(e.oneKeyId + "_" + e.oneKey,
                function() {
                    KTool.getMultiValue([6118],
                    function(e) {
                        var t = ["勾玉", "万花", "天照", "永恒"],
                        n = PetXMLInfo.getName([1456, 2468, 2322, 2517][~~i.type - 1]);
                        if (KTool.getBit(e[0], ~~i.type)) {
                            for (var o = !0,
                            r = 0; 4 > r; r++) 1 != KTool.getBit(e[0], r + 1) && (o = !1);
                            Alarm.show("成功击破" + n + "的真身，" + t[~~i.type - 1] + "幻瞳开启成功！" + (o ? "所有幻瞳皆已开启，快去将缪斯超进化吧！": ""),
                            function() {
                                i.onClose()
                            })
                        }
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                var t = i.typeArr[i.type - 1];
                PetManager.isDefaultPet(1633) || PetManager.isDefaultPet(1632) || StatLogger.log("20230609版本系统功能", "缪斯超进化搬迁", "点击任意关卡-左侧【开始激变】时首发不是缪斯"),
                t.use <= ItemManager.getNumByID(t.item) ? (StatLogger.log("20230609版本系统功能", "缪斯超进化搬迁", "点击任意关卡-左侧【开始激变】"), PopViewManager.getInstance().openView(new e.MuseSuperEvoFightPop, null, i.type)) : BubblerManager.getInstance().showText(ItemXMLInfo.getName(t.item) + "不足")
            },
            this),
            ImageButtonUtil.add(this.challenge,
            function() {
                i.normal = !0,
                StatLogger.log("20230609版本系统功能", "缪斯超进化搬迁", "点击任意关卡-右侧【开始挑战】"),
                FightManager.fightNoMapBoss([2472, 2476, 2480, 2484][i.type - 1] - i.curSelectInd)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE,
            function() {
                var e = i.typeArr[i.type - 1];
                i.num.text = ItemManager.getNumByID(e.item) + ""
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function(e) {
                return i.normal ? void(i.normal = !1) : void KTool.getMultiValue([6118],
                function(e) {
                    var t = ["勾玉", "万花", "天照", "永恒"],
                    n = PetXMLInfo.getName([1456, 2468, 2322, 2517][~~i.type - 1]);
                    if (KTool.getBit(e[0], ~~i.type)) {
                        for (var o = !0,
                        r = 0; 4 > r; r++) 1 != KTool.getBit(e[0], r + 1) && (o = !1);
                        Alarm.show("成功击破" + n + "的真身，" + t[~~i.type - 1] + "幻瞳开启成功！" + (o ? "所有幻瞳皆已开启，快去将缪斯超进化吧！": ""),
                        function() {
                            i.onClose()
                        })
                    } else Alarm.show("很遗憾，未能揭露" + n + "的真身，请再接再厉",
                    function() {
                        i.updateView()
                    })
                })
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.tap, this),
            this.updateView()
        },
        i.prototype.tap = function() {
            var e = this._list.selectedItem;
            this.petIma.source = ClientConfig.getPveMusePath(~~e.id),
            this.curSelectInd = this._list.selectedIndex,
            this.rewardNum.text = "*" + (e.ind + 1)
        },
        i.prototype.reShow = function() {
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this,
            t = this.typeArr[this.type - 1];
            this.num.text = ItemManager.getNumByID(t.item) + "",
            this.icon.source = "muse_super_evo_fight_panel_icon" + this.type + "_png",
            this.itemIcon.source = this.txIcon.source = this.startIcon.source = this.rewardIcon.source = ClientConfig.getItemIcon(t.item),
            this.startNum.text = "*" + t.use,
            this.tx2.text = "战胜敌人可获得        " + ItemXMLInfo.getName(t.item) + "，使用" + t.use + "个" + ItemXMLInfo.getName(t.item) + "可以开始激变",
            this.tx1.text = "在激变中找出并击败真身即可开启" + ["勾玉", "万花", "天照", "永恒"][this.type - 1] + "幻瞳",
            KTool.getMultiValue([16194, 16195, 16196, 16197, 6118],
            function(t) {
                var n = t[e.type - 1];
                e.chaTimes.text = 5 - n + "/5",
                DisplayUtil.setEnabled(e.challenge, 5 - n > 0, !0),
                n = t[4];
                var i = 1 == KTool.getBit(n, e.type);
                DisplayUtil.setEnabled(e.oneKey, !i, !0),
                DisplayUtil.setEnabled(e.btnStart, !i, !0);
                for (var o = !0,
                r = 0; 4 > r; r++) 1 != KTool.getBit(n, r + 1) && (o = !1);
                o && Alarm.show("所有幻瞳皆已开启，快去将缪斯超进化吧！",
                function() {
                    e.onClose()
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.tap, this)
        },
        i
    } (BaseModule);
    e.MuseSuperEvoFightPanel = t,
    __reflect(t.prototype, "museSuperEvo.MuseSuperEvoFightPanel");
    var n = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MuseSuperEvoFightPetItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.info = this.data, this.p.source = "muse_super_evo_fight_panel_p" + this.info.type + "_" + (this.info.ind + 1) + "_png")
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (BaseItemRenderer);
    e.MuseSuperEvoFightPetItem = n,
    __reflect(n.prototype, "museSuperEvo.MuseSuperEvoFightPetItem")
} (museSuperEvo || (museSuperEvo = {}));
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
museSuperEvo; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MuseSuperEvoFightPopSkin,
            ImageButtonUtil.add(t.close, t.hide, t),
            ImageButtonUtil.add(t.bag,
            function() {
                t.hide(),
                ModuleManager.showModuleByID(10)
            },
            t),
            ImageButtonUtil.add(t.cure,
            function() {
                PetManager.cureAll()
            },
            t),
            ImageButtonUtil.add(t.imaCha,
            function() {
                t.fightBoss()
            },
            t),
            t
        }
        return __extends(t, e),
        t.prototype._upDateView = function() {
            e.prototype._upDateView.call(this),
            this.title.source = "muse_super_evo_fight_panel_poptitle" + ~~this._data + "_png",
            this.times.text = "1/" + [3, 5, 7, 9][~~this._data - 1],
            this.pet.source = "muse_super_evo_fight_panel_" + [1456, 2468, 2322, 2517][~~this._data - 1] + "_png"
        },
        t.prototype.fightBoss = function() {
            var e = this,
            t = 2 * ~~this._data + 2483;
            PetManager.isDefaultPet(1633) ? (FightManager.fightNoMapBoss(t), this.hide()) : Alarm.show("请将缪斯放入背包首发位置",
            function() {
                e.hide(),
                ModuleManager.showModuleByID(10)
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.MuseSuperEvoFightPop = t,
    __reflect(t.prototype, "museSuperEvo.MuseSuperEvoFightPop")
} (museSuperEvo || (museSuperEvo = {}));
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
generateEUI.paths["resource/eui_skins/MuseSuperEvoFightPanelSkin.exml"] = window.MuseSuperEvoFightPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "bag", "cure", "startIcon", "startNum", "btnStart", "icon", "petIma", "none", "chaTimes", "challenge", "rewardIcon", "rewardNum", "oneKey", "tx2", "tx1", "txIcon", "itemIcon", "num", "add", "mainGroup", "_list", "_scr"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.mainGroup_i(), this._scr_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "muse_super_evo_bg_jpg",
        e.y = 0,
        e
    },
    n.mainGroup_i = function() {
        var e = new eui.Group;
        return this.mainGroup = e,
        e.cacheAsBitmap = !0,
        e.height = 629,
        e.horizontalCenter = 0,
        e.visible = !0,
        e.width = 1082,
        e.y = 8,
        e.elementsContent = [this._Image1_i(), this.bag_i(), this.cure_i(), this.btnStart_i(), this.icon_i(), this._Group1_i(), this.challenge_i(), this._Group2_i(), this._Label1_i(), this.oneKey_i(), this._Group3_i(), this._Group4_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_petmuse_png",
        e.x = -190,
        e.y = 89,
        e
    },
    n.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "muse_super_evo_fight_panel_bag_png",
        e.x = 0,
        e.y = 432,
        e
    },
    n.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "muse_super_evo_fight_panel_cure_png",
        e.x = 0,
        e.y = 522,
        e
    },
    n.btnStart_i = function() {
        var e = new eui.Group;
        return this.btnStart = e,
        e.cacheAsBitmap = !0,
        e.x = 145,
        e.y = 497,
        e.elementsContent = [this._Image2_i(), this.startIcon_i(), this.startNum_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_btnstart_png",
        e.x = 1,
        e.y = 0,
        e
    },
    n.startIcon_i = function() {
        var e = new eui.Image;
        return this.startIcon = e,
        e.height = 37,
        e.width = 37,
        e.x = 13.568,
        e.y = 15.432,
        e
    },
    n.startNum_i = function() {
        var e = new eui.Label;
        return this.startNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "*9",
        e.textColor = 16514896,
        e.x = 57,
        e.y = 20,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "muse_super_evo_fight_panel_icon1_png",
        e.x = 326,
        e.y = 176,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 465,
        e.horizontalCenter = 186,
        e.width = 448,
        e.y = 92,
        e.elementsContent = [this._Image3_i(), this.petIma_i(), this.none_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_petbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.petIma_i = function() {
        var e = new eui.Image;
        return this.petIma = e,
        e.horizontalCenter = 2,
        e.verticalCenter = -14.5,
        e.visible = !0,
        e
    },
    n.none_i = function() {
        var e = new eui.Image;
        return this.none = e,
        e.source = "muse_super_evo_fight_panel_none_png",
        e.visible = !1,
        e.x = 173,
        e.y = 138,
        e
    },
    n.challenge_i = function() {
        var e = new eui.Group;
        return this.challenge = e,
        e.right = 20,
        e.y = 507.508,
        e.elementsContent = [this._Image4_i(), this._Image5_i(), this.chaTimes_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_imachallenge_png",
        e.x = 0,
        e.y = 2,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_chabg_png",
        e.x = 98,
        e.y = 0,
        e
    },
    n.chaTimes_i = function() {
        var e = new eui.Label;
        return this.chaTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "9/9",
        e.textColor = 16777215,
        e.x = 115,
        e.y = 2,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 192.5,
        e.verticalCenter = 215.5,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this.rewardIcon_i(), this.rewardNum_i()],
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_rewardbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_rewardtx_png",
        e.x = 11,
        e.y = 14,
        e
    },
    n.rewardIcon_i = function() {
        var e = new eui.Image;
        return this.rewardIcon = e,
        e.height = 37,
        e.width = 37,
        e.x = 145,
        e.y = 13,
        e
    },
    n.rewardNum_i = function() {
        var e = new eui.Label;
        return this.rewardNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "*3",
        e.textColor = 16514896,
        e.x = 195,
        e.y = 20,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = -12,
        e.size = 20,
        e.text = "挑战次数每日刷新",
        e.textColor = 14061167,
        e.y = 574,
        e
    },
    n.oneKey_i = function() {
        var e = new eui.Image;
        return this.oneKey = e,
        e.right = 1002,
        e.source = "muse_super_evo_fight_panel_onekey_png",
        e.y = 92.376,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 12.5,
        e.y = 45,
        e.elementsContent = [this._Image8_i(), this.tx2_i(), this.tx1_i(), this.txIcon_i()],
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 55,
        e.scale9Grid = new egret.Rectangle(249, 0, 32, 55),
        e.source = "muse_super_evo_fight_panel_tipsbg_png",
        e.width = 899,
        e.x = 0,
        e.y = 1,
        e
    },
    n.tx2_i = function() {
        var e = new eui.Label;
        return this.tx2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -7,
        e.size = 19.9068517867105,
        e.text = "战胜敌人可获得        天蛇之视，使用6个天蛇之视可以开始激变",
        e.textColor = 16759667,
        e.y = 6,
        e
    },
    n.tx1_i = function() {
        var e = new eui.Label;
        return this.tx1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.9068517867105,
        e.text = "在激变中找出并击败真身即可开启勾玉幻瞳",
        e.textColor = 15576425,
        e.x = 240,
        e.y = 33,
        e
    },
    n.txIcon_i = function() {
        var e = new eui.Image;
        return this.txIcon = e,
        e.height = 30,
        e.width = 30,
        e.x = 311.88,
        e.y = 0,
        e
    },
    n._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 14,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.itemIcon_i(), this.num_i(), this.add_i()],
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "muse_super_evo_fight_panel_img_di2_png",
        e.x = 0,
        e.y = 6,
        e
    },
    n.itemIcon_i = function() {
        var e = new eui.Image;
        return this.itemIcon = e,
        e.height = 30,
        e.width = 30,
        e.x = 7,
        e.y = 0,
        e
    },
    n.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 8.5,
        e.size = 18,
        e.text = "99",
        e.textColor = 16774299,
        e.y = 7,
        e
    },
    n.add_i = function() {
        var e = new eui.Image;
        return this.add = e,
        e.source = "muse_super_evo_fight_panel_add_png",
        e.x = 119,
        e.y = 6,
        e
    },
    n._scr_i = function() {
        var e = new eui.Scroller;
        return this._scr = e,
        e.height = 318,
        e.horizontalCenter = 440,
        e.width = 200,
        e.y = 105,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.itemRendererSkinName = MuseSuperEvoFightPetItemSkin,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    n._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MuseSuperEvoFightPetItemSkin.exml"] = window.MuseSuperEvoFightPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["p"],
        this.height = 90,
        this.width = 199,
        this.elementsContent = [this._Image1_i(), this.p_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "muse_super_evo_fight_panel_selected_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.p_i = function() {
        var e = new eui.Image;
        return this.p = e,
        e.horizontalCenter = 0,
        e.source = "muse_super_evo_fight_panel_p1_4_png",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MuseSuperEvoFightPopSkin.exml"] = window.MuseSuperEvoFightPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["close", "title", "pet", "bag", "cure", "times", "imaCha"],
        this.height = 402,
        this.width = 643,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 402,
        e.visible = !0,
        e.width = 643,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.close_i(), this.title_i(), this._Image2_i(), this.pet_i(), this.bag_i(), this.cure_i(), this._Label1_i(), this._Label2_i(), this.times_i(), this.imaCha_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 402,
        e.scale9Grid = new egret.Rectangle(6, 6, 83, 82),
        e.source = "muse_super_evo_fight_panel_bg4_png",
        e.width = 612,
        e.x = 31,
        e.y = 0,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "muse_super_evo_fight_panel_close1_png",
        e.x = 599,
        e.y = 9,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.horizontalCenter = 14,
        e.source = "muse_super_evo_fight_panel_poptitle1_png",
        e.y = 12,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 308,
        e.source = "muse_super_evo_fight_panel_poppetbg_png",
        e.visible = !0,
        e.width = 330,
        e.x = 52,
        e.y = 61,
        e
    },
    n.pet_i = function() {
        var e = new eui.Image;
        return this.pet = e,
        e.horizontalCenter = -111.5,
        e.source = "muse_super_evo_fight_panel_2468_png",
        e.y = 62,
        e
    },
    n.bag_i = function() {
        var e = new eui.Image;
        return this.bag = e,
        e.source = "muse_super_evo_fight_panel_bag_png",
        e.x = 38,
        e.y = 216,
        e
    },
    n.cure_i = function() {
        var e = new eui.Image;
        return this.cure = e,
        e.source = "muse_super_evo_fight_panel_cure_png",
        e.x = 37,
        e.y = 303,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.lineSpacing = 6,
        e.size = 20,
        e.text = "战胜敌人\n有      概率揭露真身",
        e.textAlign = "center",
        e.textColor = 16761515,
        e.width = 188,
        e.x = 420,
        e.y = 94,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "未揭露真身则需要\n重新开启激变",
        e.textAlign = "center",
        e.textColor = 14126959,
        e.width = 144,
        e.x = 441,
        e.y = 207,
        e
    },
    n.times_i = function() {
        var e = new eui.Label;
        return this.times = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "1/3",
        e.textColor = 16774225,
        e.x = 450,
        e.y = 117.289,
        e
    },
    n.imaCha_i = function() {
        var e = new eui.Image;
        return this.imaCha = e,
        e.source = "muse_super_evo_fight_panel_btntiaozhan_png",
        e.x = 447,
        e.y = 323,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MuseSuperEvoSkin.exml"] = window.MuseSuperEvoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "btnEvo", "fiveSkill", "oneKey", "btnInfo", "btnGot", "collect", "go1", "go2", "go3", "go4", "got", "open_1", "open_2", "open_3", "open_4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "muse_super_evo_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 609,
        e.horizontalCenter = 6.5,
        e.verticalCenter = -6.5,
        e.width = 1049,
        e.elementsContent = [this._Image1_i(), this.btnEvo_i(), this.fiveSkill_i(), this.oneKey_i(), this.btnInfo_i(), this.btnGot_i(), this.collect_i(), this.go1_i(), this.go2_i(), this.go3_i(), this.go4_i(), this.got_i(), this.open_1_i(), this.open_2_i(), this.open_3_i(), this.open_4_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = -358,
        e.source = "muse_super_evo_pet_png",
        e.verticalCenter = 7,
        e
    },
    n.btnEvo_i = function() {
        var e = new eui.Image;
        return this.btnEvo = e,
        e.source = "muse_super_evo_btnevo_png",
        e.x = 251,
        e.y = 496,
        e
    },
    n.fiveSkill_i = function() {
        var e = new eui.Image;
        return this.fiveSkill = e,
        e.source = "muse_super_evo_fiveskill_png",
        e.visible = !1,
        e.x = 957,
        e.y = 534,
        e
    },
    n.oneKey_i = function() {
        var e = new eui.Image;
        return this.oneKey = e,
        e.source = "muse_super_evo_onekey_png",
        e.x = 957,
        e.y = 534,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "muse_super_evo_btninfo_png",
        e.x = 1,
        e.y = 543,
        e
    },
    n.btnGot_i = function() {
        var e = new eui.Image;
        return this.btnGot = e,
        e.source = "muse_super_evo_btn_got_png",
        e.visible = !1,
        e.x = 957.424,
        e.y = 559.52,
        e
    },
    n.collect_i = function() {
        var e = new eui.Image;
        return this.collect = e,
        e.horizontalCenter = -497,
        e.source = "muse_super_evo_collect_png",
        e.verticalCenter = 199,
        e
    },
    n.go1_i = function() {
        var e = new eui.Image;
        return this.go1 = e,
        e.source = "muse_super_evo_go1_png",
        e.x = 543,
        e.y = 58,
        e
    },
    n.go2_i = function() {
        var e = new eui.Image;
        return this.go2 = e,
        e.source = "muse_super_evo_go3_png",
        e.x = 581,
        e.y = 172,
        e
    },
    n.go3_i = function() {
        var e = new eui.Image;
        return this.go3 = e,
        e.source = "muse_super_evo_go2_png",
        e.x = 615,
        e.y = 284,
        e
    },
    n.go4_i = function() {
        var e = new eui.Image;
        return this.go4 = e,
        e.source = "muse_super_evo_go4_png",
        e.x = 650,
        e.y = 396,
        e
    },
    n.got_i = function() {
        var e = new eui.Image;
        return this.got = e,
        e.source = "muse_super_evo_got_png",
        e.visible = !1,
        e.x = 265,
        e.y = 317,
        e
    },
    n.open_1_i = function() {
        var e = new eui.Image;
        return this.open_1 = e,
        e.source = "muse_super_evo_open_png",
        e.visible = !1,
        e.x = 531,
        e.y = 90,
        e
    },
    n.open_2_i = function() {
        var e = new eui.Image;
        return this.open_2 = e,
        e.source = "muse_super_evo_open_png",
        e.visible = !1,
        e.x = 569,
        e.y = 202,
        e
    },
    n.open_3_i = function() {
        var e = new eui.Image;
        return this.open_3 = e,
        e.source = "muse_super_evo_open_png",
        e.visible = !1,
        e.x = 603,
        e.y = 315,
        e
    },
    n.open_4_i = function() {
        var e = new eui.Image;
        return this.open_4 = e,
        e.source = "muse_super_evo_open_png",
        e.visible = !1,
        e.x = 636,
        e.y = 427,
        e
    },
    t
} (eui.Skin);