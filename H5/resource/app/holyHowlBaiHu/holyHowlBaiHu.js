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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i(n) {
            var o = e.call(this) || this;
            return o.service.setValues([], [], [], []),
            o.init([{
                panelName: t.DataConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.DataConst.UPGRADE_PANEL
            },
            {
                panelName: t.DataConst.STAGE_PANEL
            },
            {
                panelName: t.DataConst.ZHOUHU_PANEL
            },
            {
                panelName: t.DataConst.YEHU_PANEL
            },
            {
                panelName: t.DataConst.FINAL_PANEL
            }]),
            EventManager.once(ModuleEvent.OPEN_MODULE,
            function() {
                n && void 0 != n.Name && void 0 != n.Param && o.service.openPanel(n.Name, n.Param)
            },
            o),
            EventManager.addEventListener(i.OpenPanel, o.showPanel, o),
            o
        }
        return __extends(i, e),
        i.prototype.showPanel = function(t) {
            var e = t.data.Name,
            i = t.data.Param;
            i ? this.service.openPanel(e) : this.service.openPanel(e, i)
        },
        i.OpenPanel = "HolyHowlBaiHu.OpenPanel",
        i
    } (BasicMultPanelModule);
    t.HolyHowlBaiHu = e,
    __reflect(e.prototype, "holyHowlBaiHu.HolyHowlBaiHu")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
holyHowlBaiHu; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "holyHowlBaiHu.MainPanel",
        t.UPGRADE_PANEL = "holyHowlBaiHu.UpgradePanel",
        t.STAGE_PANEL = "holyHowlBaiHu.StagePanel",
        t.ZHOUHU_PANEL = "holyHowlBaiHu.ZhouhuPanel",
        t.YEHU_PANEL = "holyHowlBaiHu.YehuPanel",
        t.FINAL_PANEL = "holyHowlBaiHu.FinalPanel",
        t.Attrs = {},
        t
    } ();
    t.DataConst = e,
    __reflect(e.prototype, "holyHowlBaiHu.DataConst")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.petBagIcons = [],
            t.ignoreRefreshFightPet = !1,
            t.afterFightPetCatchTime = [0, 0, 0, 0, 0, 0],
            t.afterFightPetIdArr = [0, 0, 0, 0, 0, 0],
            t.fightPetNum = [0, 1, 2, 3, 4, 6, 3],
            t.curFightCnt = 4,
            t.isShowPetBag = !1,
            t.isAfterFight = !1,
            t.skinName = "HolyHowlBaiHuFinalSkin",
            StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入白虎终极试炼面板"),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.petBagMask = new eui.Rect(screen.availWidth, screen.availHeight, 0),
            this.grp_petbag.addChildAt(this.petBagMask, 0),
            this.petBagMask.alpha = .01,
            this.petBagMask.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function(e) {
                t.hidePetBag()
            },
            this),
            this.petBagIcons = [];
            for (var i = 0; 2 > i; i++) for (var n = 0; 6 > n; n++) {
                var o = new SmallItemIcon(1.1);
                this.petBagIcons.push(o),
                this.grp_petsInBag.addChild(o)
            }
            this.petBagShow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBagPet, this),
            this.petCanFightArr = new eui.ArrayCollection,
            this.grp_petsCanUse.itemRenderer = SmallItemIcon,
            this.grp_petsCanUse.dataProvider = this.petCanFightArr,
            this.addEvent(),
            this.initData()
        },
        i.prototype.addEvent = function() {
            var i = this;
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_final_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.openPanel(t.DataConst.STAGE_PANEL)
            },
            this),
            this.initBtnHelpById(154),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            ImageButtonUtil.add(this.bagBtn0,
            function() {
                i.ignoreRefreshFightPet = !0,
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.cureBtn0,
            function() {
                i.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn0,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249604, 1,
                    function() {
                        KTool.doExchange(9796, 1,
                        function() {
                            i.updateTimeAndItem()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.replayBtn,
            function() {
                i.replayNum > 0 ? Alert.show("重置挑战将重置本关所有进度以及解锁所有出征战胜精灵，请问你是否重置挑战？",
                function() {
                    SocketConnection.sendWithPromise(43232, [8, 0, [0, 0, 0, 0, 0, 0]]).then(function() {
                        i.update()
                    })
                }) : BubblerManager.getInstance().showText("很抱歉，今日重置次数不足！")
            },
            this),
            ImageButtonUtil.add(this.refreshBtn,
            function() {
                for (var t = 0; t < i.petCanFightArr.source.length; t++) if (i.petCanFightArr.source[t].ct > 0) return void i.showFightPets()
            },
            this),
            ImageButtonUtil.add(this.tiaozhanBtn,
            function() {
                for (var e = [i.curIndex, 0, 0, 0, 0, 0, 0], n = 0; n < i.petCanFightArr.source.length; n++) i.petCanFightArr.source[n].ct && (e[n + 1] = i.petCanFightArr.source[n].ct);
                i.service.openPop(new t.FinalPop(e))
            },
            this)
        },
        i.prototype.initData = function() {
            this.tzzlCntTxt0.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString()
        },
        i.prototype.update = function() {
            var e = this;
            this.grp_petbag.visible = !1,
            this.isShowPetBag = !1,
            this.updateTimeAndItem(),
            KTool.getMultiValue([6747, 6748, 6749, 6750, 6751, 6752, 6753, 6754, 6755, 15351, 6739, 20102],
            function(i) {
                e.isAfterFight && e.curIndex < i[0] + 1 && e.curIndex <= 5 && BubblerManager.getInstance().showText("成功通过了白虎第" + e.curIndex + "轮终极试炼！"),
                e.curIndex = i[0] + 1,
                e.levelTxt.text = "试炼第 " + e.curIndex + "/6 轮",
                e.hasFightWinPetArr = [];
                for (var n = 0,
                o = 1; 8 >= o; o++) {
                    var _ = 65535 & i[o];
                    e.hasFightWinPetArr.push(_),
                    n += _ ? 1 : 0,
                    _ = i[o] >> 16,
                    e.hasFightWinPetArr.push(_),
                    n += _ ? 1 : 0
                }
                return e.hasUsedPetTxt.text = n.toString(),
                e.showHasFightWinPetArr(),
                1 == KTool.getBit(i[10], 8) ? (0 == i[11] && SocketConnection.send(43232, [9, 4, [0, 0, 0, 0, 0, 0]]), e.service.backToMainPanel(), Alarm.show("恭喜你获得了白虎完全体进化的资格，快去进化吧！"), void e.service.openPanel(t.DataConst.UPGRADE_PANEL)) : void KTool.getPlayerInfo([780, 781, 782, 783, 784, 785],
                function(t) {
                    for (var i = 1; 6 >= i; i++) if (0 != t[i - 1]) {
                        var n = PetManager.getPetInfo(t[i - 1]);
                        n || (n = PetManager.getPetInfoStorageForCapTime(t[i - 1]));
                        var o = n.id;
                        e.afterFightPetCatchTime[i - 1] = t[i - 1],
                        e.afterFightPetIdArr[i - 1] = o
                    } else e.afterFightPetCatchTime[i - 1] = 0,
                    e.afterFightPetIdArr[i - 1] = 0;
                    if (e.ignoreRefreshFightPet) {
                        e.ignoreRefreshFightPet = !1;
                        for (var i = 0; i < e.petCanFightArr.source.length; i++) if (0 != e.petCanFightArr.source[i].ct && !PetManager.getPetInfo(e.petCanFightArr.source[i].ct)) {
                            e.showFightPets();
                            break
                        }
                    } else e.showFightPets()
                })
            })
        },
        i.prototype.updateTimeAndItem = function() {
            var t = this;
            KTool.getMultiValue([15355, 15354],
            function(e) {
                t.replayNum = e[0],
                t.tzzlCntTxt1.text = "今日重置次数：" + t.replayNum,
                t.todayHasBuy = e[1],
                t.todayBuyTxt1.text = "今日已购买：" + t.todayHasBuy + "/10",
                DisplayUtil.setEnabled(t.smallAddBtn0, t.todayHasBuy < 10, t.todayHasBuy >= 10)
            })
        },
        i.prototype.showHasFightWinPetArr = function() {
            this.hasFightWinPetArr.sort(function(t, e) {
                return 0 == t && 0 != e ? 1 : 0 == e && 0 != t ? -1 : 1
            }),
            this.grp_petsHasUsed.removeChildren();
            for (var t = 0; 16 > t; t++) {
                var e = new SmallItemIcon(1.1),
                i = this.hasFightWinPetArr[t];
                e.setData({
                    type: "pet",
                    id: i ? i: 0,
                    count: !1,
                    name: {
                        value: "auto",
                        color: 16761225,
                        limitLen: 5,
                        posY: 71
                    },
                    rarity: !1,
                    ui: {
                        bgSource: "holy_howl_bai_hu_final_petBoxBg_png",
                        iconSource: i ? null: "holy_howl_bai_hu_final_noPetFlag_png"
                    }
                }),
                this.grp_petsHasUsed.addChild(e)
            }
        },
        i.prototype.showFightPets = function() {
            this.curFightCnt = this.fightPetNum[this.curIndex],
            this.canUsedPetTxt.text = this.curFightCnt.toString();
            for (var t = [], e = 1; 6 >= e; e++) {
                var i = e <= this.curFightCnt,
                n = this.isAfterFight ? this.afterFightPetIdArr[e - 1] : 0,
                o = this.isAfterFight ? this.afterFightPetCatchTime[e - 1] : 0,
                _ = {
                    type: "pet",
                    id: 0 == n ? 1 : n,
                    ct: o,
                    canAdd: i,
                    count: !1,
                    name: {
                        value: 0 == n ? " ": "auto",
                        color: 16761225,
                        limitLen: 5,
                        posY: 71
                    },
                    rarity: !1,
                    onClick: i ? this.showPetBag: function() {},
                    caller: this,
                    ui: {
                        scale: 1.1,
                        bgSource: "holy_howl_bai_hu_final_petBoxBg_png",
                        iconSource: n ? null: i ? "holy_howl_bai_hu_final_addPetFlag_png": "holy_howl_bai_hu_final_lock_png",
                        decorationSource: i ? [{
                            type: "Selected"
                        }] : null
                    }
                };
                t.push(_)
            }
            this.petCanFightArr.source = t,
            this.isAfterFight = !1
        },
        i.prototype.showPetBag = function() {
            var t = this;
            this.isShowPetBag || (this.isShowPetBag = !0, PetManager.updateBagInfo(function() {
                t.updatePetBag()
            }), this.grp_petbag.visible = !0, gsap.fromTo(this.petBagShow, {
                alpha: .01,
                right: 300
            },
            {
                alpha: 1,
                right: 406,
                duration: .3
            }))
        },
        i.prototype.updatePetBag = function() {
            for (var t, e = 0; 2 > e; e++) {
                t = 0 == e ? PetManager.getBagMap() : PetManager.getSecondBagMap();
                for (var i = 0; 6 > i; i++) {
                    var n = this.petBagIcons[6 * e + i];
                    t[i] ? n.setData({
                        type: "pet",
                        id: t[i].id,
                        ct: t[i].catchTime,
                        count: !1,
                        name: {
                            value: "auto",
                            color: 16761225,
                            limitLen: 5,
                            posY: 71
                        },
                        rarity: !1,
                        ui: {
                            bgSource: "holy_howl_bai_hu_final_petBoxBg_png",
                            decorationSource: [{
                                type: "custom",
                                name: "flag",
                                source: 0 == e ? "holy_howl_bai_hu_final_cz_png": "holy_howl_bai_hu_final_dm_png",
                                posX: -14,
                                posY: 24
                            }]
                        }
                    },
                    !0) : n.setData({
                        type: "pet",
                        id: 1,
                        ct: 0,
                        count: !1,
                        name: {
                            value: "  ",
                            color: 16761225,
                            limitLen: 5,
                            posY: 71
                        },
                        rarity: !1,
                        ui: {
                            bgSource: "holy_howl_bai_hu_final_petBoxBg_png",
                            iconSource: "holy_howl_bai_hu_blank_png",
                            decorationSource: [{
                                type: "custom",
                                name: "flag",
                                source: 0 == e ? "holy_howl_bai_hu_final_cz_png": "holy_howl_bai_hu_final_dm_png",
                                posX: -14,
                                posY: 24
                            }]
                        }
                    },
                    !0)
                }
            }
        },
        i.prototype.hidePetBag = function() {
            var t = this;
            this.isShowPetBag && (this.isShowPetBag = !1, gsap.fromTo(this.petBagShow, {
                alpha: 1,
                right: 406
            },
            {
                alpha: .01,
                right: 202,
                duration: .2,
                onComplete: function() {
                    t.grp_petbag.visible = !1
                }
            }))
        },
        i.prototype.clickBagPet = function(t) {
            if (t.target.parent.parent instanceof SmallItemIcon) {
                var e = t.target.parent.parent;
                this.choosePet(e.data.id, e.data.ct)
            }
        },
        i.prototype.choosePet = function(t, e) {
            if (! (0 >= e)) {
                if (this.hasFightWinPetArr.indexOf(t) >= 0) return void BubblerManager.getInstance().showText("当前精灵已经使用过，无法重复出战！");
                for (var i = 0; i < this.petCanFightArr.source.length; i++) if (this.petCanFightArr.source[i].id == t && !this.petCanFightArr.source[i].selected) return;
                for (var i = 0; i < this.grp_petsCanUse.numChildren; i++) {
                    var n = this.grp_petsCanUse.getChildAt(i);
                    if (n.selected && n.data.canAdd) {
                        this.petCanFightArr.source[i].id = t,
                        this.petCanFightArr.source[i].ct = e,
                        this.petCanFightArr.source[i].ui.iconSource = null,
                        this.petCanFightArr.source[i].name.value = "auto";
                        break
                    }
                }
                this.petCanFightArr.refresh()
            }
        },
        i.prototype.onFightOver = function() {
            this.isAfterFight = !0,
            ToolBtnPanelObserver.AllowChangePet = !1
        },
        i.prototype.updateTZZL = function() {
            this.tzzlCntTxt0.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString()
        },
        i.prototype.destroy = function() {
            ToolBtnPanelObserver.AllowChangePet = !1,
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            this.petBagMask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.hidePetBag, this),
            this.petBagShow.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBagPet, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i
    } (BasicPanel);
    t.FinalPanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.FinalPanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "HolyHowlBaiHuSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入主界面"),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var i = this;
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.closeModule()
            },
            this),
            EventManager.addEventListener("BuyBestPetCompleted", this.update, this),
            ImageButtonUtil.add(this.petInfoBtn,
            function() {
                i.service.showPetInfo(3301)
            },
            this),
            ImageButtonUtil.add(this.yhjpBtn,
            function() {
                StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入优惠极品圣尊啸傲·白虎界面"),
                KTool.getMultiValue([6739],
                function(t) {
                    var e = 0 == KTool.getBit(t[0], 5),
                    i = {
                        petid: 3301,
                        pid: 249601,
                        buyAvailable: e,
                        recommendNature: 1,
                        recommendlearningability: null,
                        needSetStudy: !1,
                        needSetNature: !1,
                        mainImgSource: "holy_howl_bai_hu_best_icon_png",
                        buyFunc: function(t, e) {
                            SocketConnection.send(43232, [1, 0, [0, 0, 0, 0, 0, 0]])
                        }
                    };
                    ModuleManager.showModuleByID(111, i)
                })
            },
            this),
            ImageButtonUtil.add(this.getBtn,
            function() {
                i.hasZiGe ? i.service.openPanel(t.DataConst.UPGRADE_PANEL) : (i.service.openPanel(t.DataConst.STAGE_PANEL), StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "点击主界面-【前往获得】"))
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
            var t = this;
            this.hasGoFlag.visible = !1,
            this.hasZiGe = !1,
            this.getBtn.source = "holy_howl_bai_hu_getBtn_png",
            KTool.getMultiValue([6739],
            function(e) {
                return 1 == KTool.getBit(e[0], 5) && DisplayUtil.setEnabled(t.yhjpBtn, !1, !0),
                1 == KTool.getBit(e[0], 1) && (t.hasGoFlag.visible = !0),
                1 == KTool.getBit(e[0], 1) && 1 == KTool.getBit(e[0], 2) && 1 == KTool.getBit(e[0], 3) && 1 == KTool.getBit(e[0], 4) ? (t.getBtn.source = "holy_howl_bai_hu_getBtn_png", void DisplayUtil.setEnabled(t.getBtn, !1, !0)) : void(1 == KTool.getBit(e[0], 8) && (t.hasZiGe = !0, t.getBtn.source = "holy_howl_bai_hu_upgradeBtn_png"))
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("BuyBestPetCompleted", this.update, this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.MainPanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "HolyHowlBaiHuStageSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.btnAnim = SpineUtil.createAnimate("baihu"),
            this.addChild(this.btnAnim),
            this.btnAnim.touchEnabled = !1,
            this.btnAnim.touchChildren = !1,
            this.btnAnim.x = screen.width / 2,
            this.btnAnim.y = screen.height / 2,
            this.btnAnim.visible = !0,
            this.btnAnim.play("animation")
        },
        i.prototype.addEvent = function() {
            var i = this;
            this.adaptBgByScale(this.bg_3),
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.openPanel(t.DataConst.MAIN_PANEL)
            },
            this),
            ImageButtonUtil.add(this.bagBtn1,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.cureBtn1,
            function() {
                i.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                2 == i.comTaskNum ? i.service.openPanel(t.DataConst.FINAL_PANEL) : BubblerManager.getInstance().showText("完成昼虎和夜虎的关卡后方可开启终极试炼！")
            },
            this),
            ImageButtonUtil.add(this.ZHBtn,
            function() {
                SystemTimerManager.sysDate.getHours() >= 12 && SystemTimerManager.sysDate.getHours() < 15 ? i.service.openPanel(t.DataConst.ZHOUHU_PANEL) : i.service.openPop(new t.WarnPop("ZH"))
            },
            this, !1),
            ImageButtonUtil.add(this.YHBtn,
            function() {
                SystemTimerManager.sysDate.getHours() >= 18 && SystemTimerManager.sysDate.getHours() < 21 ? i.service.openPanel(t.DataConst.YEHU_PANEL) : i.service.openPop(new t.WarnPop("YH"))
            },
            this, !1)
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([6739, 15351, 6740, 15356, 4717],
            function(e) {
                t.comTaskNum = KTool.getBit(e[0], 6) + KTool.getBit(e[0], 7),
                t.hasPassZH.visible = 1 == KTool.getBit(e[0], 6),
                t.hasPassYH.visible = 1 == KTool.getBit(e[0], 7),
                1 == KTool.getBit(e[0], 1) ? (t.infoTxt_1.text = "你是第" + e[2] + "名获得天尊啸傲•白虎的玩家", t.infoTxt_2.text = " ") : (t.infoTxt_1.text = "1.通过昼虎、夜虎关卡即可开启白虎终极试炼，完成试炼获得白虎完全体进化的资格。", t.infoTxt_2.text = "2.削弱时间内挑战昼虎和夜虎关卡，难度将大范围降低。"),
                KTool.getGlobalValues(165, [1],
                function(e) {
                    t.infoTxt_0.text = "当前已有" + e[0] + "名玩家获得圣尊啸傲•白虎"
                },
                t),
                DisplayUtil.setEnabled(t.btnTiaozhan, 1 != KTool.getBit(e[0], 8), 1 == KTool.getBit(e[0], 8));
                var i = !0;
                1 == KTool.getBit(e[1], 3) || 1 == KTool.getBit(e[1], 4) ? (1 == KTool.getBit(e[1], 3) && (i = !0), 1 == KTool.getBit(e[1], 4) && (i = !0)) : i = !1
            })
        },
        i.prototype.destroy = function() {
            this.btnAnim.stopAll(),
            this.btnAnim = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.StagePanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.StagePanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.todayHasBuy = 0,
            t.skinName = "HolyHowlBaiHuUpgradeSkin",
            StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入获得圣尊啸傲·白虎界面"),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateTZZL()
        },
        i.prototype.addEvent = function() {
            var i = this;
            this.adaptBgByScale(this.bg_2),
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.openPanel(t.DataConst.MAIN_PANEL)
            },
            this),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            ImageButtonUtil.add(this.bagBtn0,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249604, 1,
                    function() {
                        KTool.doExchange(9796, 1,
                        function() {
                            i.updateItem()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.huodejia,
            function() {
                i.service.openPanel(t.DataConst.STAGE_PANEL)
            },
            this),
            ImageButtonUtil.add(this.getTZBHBtn,
            function() {
                ModuleManager.showModuleByID(56),
                i.service.closeModule()
            },
            this),
            ImageButtonUtil.add(this.nltsBtn,
            function() {
                PetManager.updateBagInfo(function() {
                    3301 == PetManager.getPetInfo(PetManager.defaultTime).id ? ItemManager.getNumByID(1711876) < 40 ? BubblerManager.getInstance().showText("你的天尊之灵数量不足，无法对圣尊啸傲·白虎进行能力提升！") : (i.nltsBtn.touchEnabled = !1, SocketConnection.sendWithPromise(43232, [6, 0, [0, 0, 0, 0, 0, 0]]).then(function() {
                        i.update()
                    })) : (BubblerManager.getInstance().showText("请将圣尊啸傲•白虎放入出战背包首发！"), i.service.showPetBag())
                })
            },
            this),
            ImageButtonUtil.add(this.jhbhBtn,
            function() {
                PetManager.updateBagInfo(function() {
                    2581 == PetManager.getPetInfo(PetManager.defaultTime).id ? ItemManager.getNumByID(1711876) < 15 ? BubblerManager.getInstance().showText("你的天尊之灵数量不足，无法将天尊·白虎进化为圣尊啸傲·白虎！") : (i.jhbhBtn.touchEnabled = !1, SocketConnection.sendWithPromise(43232, [7, 0, [0, 0, 0, 0, 0, 0]]).then(function() {
                        SocketConnection.sendWithPromise(43232, [9, 1, [0, 0, 0, 0, 0, 0]]).then(function() {
                            i.update()
                        })
                    })) : (BubblerManager.getInstance().showText("请将天尊白虎放入出战背包首发！"), i.service.showPetBag())
                })
            },
            this)
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([6739],
            function(e) {
                1 == KTool.getBit(e[0], 2) ? (DisplayUtil.setEnabled(t.nltsBtn, !1, !0), t.hasPassNLTS.visible = !0) : (DisplayUtil.setEnabled(t.nltsBtn, !0, !1), t.hasPassNLTS.visible = !1),
                1 == KTool.getBit(e[0], 1) ? (DisplayUtil.setEnabled(t.jhbhBtn, !1, !0), t.hasPassJHBH.visible = !0) : (DisplayUtil.setEnabled(t.jhbhBtn, !0, !1), t.hasPassJHBH.visible = !1)
            }),
            this.updateItem()
        },
        i.prototype.updateItem = function() {
            var t = this;
            KTool.getMultiValue([15354],
            function(e) {
                t.todayHasBuy = e[0],
                t.todayBuyTxt.text = "今日已购买：" + t.todayHasBuy + "/10",
                DisplayUtil.setEnabled(t.smallAddBtn, t.todayHasBuy < 10, t.todayHasBuy >= 10)
            })
        },
        i.prototype.updateTZZL = function() {
            this.tzzlCntTxt.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString()
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this)
        },
        i
    } (BasicPanel);
    t.UpgradePanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.UpgradePanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.hasBuff = !1,
            t.isCompleted = !1,
            t.skinName = "HolyHowlBaiHuYehuSkin",
            StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入夜虎试炼面板"),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initData()
        },
        i.prototype.addEvent = function() {
            var i = this;
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_yehu_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.openPanel(t.DataConst.STAGE_PANEL)
            },
            this),
            this.initBtnHelpById(153),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            ImageButtonUtil.add(this.bagBtn1,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.cureBtn1,
            function() {
                i.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn2,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249603, 1,
                    function() {
                        KTool.doExchange(9795, 1,
                        function() {
                            i.updateItem()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn1,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249604, 1,
                    function() {
                        KTool.doExchange(9796, 1,
                        function() {
                            i.updateItem()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                i.gambleIt()
            },
            this),
            ImageButtonUtil.add(this.btnYijian,
            function() {
                StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "挑战夜虎"),
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK, i.onFightOver, i),
                FightManager.fightNoMapBoss("夜虎", i.hasBuff ? 8694 : 8693)
            },
            this),
            ImageButtonUtil.add(this.btnChongxin,
            function() {
                Alert.show("是否重新抽取封印门数和击败条件？",
                function() {
                    i.gambleIt()
                })
            },
            this),
            ImageButtonUtil.add(this.select_1,
            function() {
                i.fenYinMenNum = 1
            },
            this),
            ImageButtonUtil.add(this.select_2,
            function() {
                i.fenYinMenNum = 2
            },
            this),
            ImageButtonUtil.add(this.select_3,
            function() {
                i.fenYinMenNum = 3
            },
            this)
        },
        i.prototype.initData = function() {
            var t = this;
            this.fenYinMenNum = 1,
            this.tzzlCntTxt1.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString(),
            KTool.getMultiValue([6739],
            function(e) {
                t.isCompleted = 1 == KTool.getBit(e[0], 7)
            })
        },
        i.prototype.updateItem = function() {
            var t = this;
            KTool.getMultiValue([15353, 15354],
            function(e) {
                t.fightNum = 6 - e[0],
                t.tzzlCntTxt2.text = "今日抽取次数：" + t.fightNum,
                DisplayUtil.setEnabled(t.smallAddBtn2, t.fightNum <= 0, t.fightNum > 0),
                t.todayHasBuy = e[1],
                t.todayBuyTxt0.text = "今日已购买：" + t.todayHasBuy + "/10",
                DisplayUtil.setEnabled(t.smallAddBtn1, t.todayHasBuy < 10, t.todayHasBuy >= 10)
            })
        },
        i.prototype.update = function() {
            var t = this;
            this.updateItem(),
            KTool.getMultiValue([6744, 6745, 6746, 15351],
            function(e) {
                for (var i = 1; 8 >= i; i++) {
                    t["highlight_" + i].visible = !1;
                    var n = KTool.getBit(e[0], 3 * (i - 1) + 1) + KTool.getBit(e[0], 3 * (i - 1) + 2) + KTool.getBit(e[0], 3 * (i - 1) + 3);
                    t["seal_" + i].visible = n >= 3;
                    for (var o = 1; 3 >= o; o++) t["bg_" + i + "_" + o].visible = n >= o;
                    t["highlight_" + i].visible = !1;
                    for (var o = 1; 3 >= o; o++) KTool.getByte(e[1], o - 1) == i && (t["highlight_" + i].visible = !0)
                }
                t.fenYinMenNum = 0;
                for (var i = 1; 3 >= i; i++) 0 != KTool.getByte(e[1], i - 1) && t.fenYinMenNum++;
                0 == t.fenYinMenNum && (t.fenYinMenNum = 1);
                for (var i = 0; 9 >= i; i++) t["word_" + i].visible = !1;
                t["word_" + e[2]].visible = !0,
                t.btnTiaozhan.visible = 0 == e[2],
                t.btnYijian.visible = t.btnChongxin.visible = 0 != e[2],
                t.hasBuff = 1 == KTool.getBit(e[4], 2)
            })
        },
        Object.defineProperty(i.prototype, "fenYinMenNum", {
            get: function() {
                return this._fenYinMenNum
            },
            set: function(t) {
                for (var e = 1; 3 >= e; e++) this["high_" + e].visible = e == t,
                this._fenYinMenNum = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.gambleIt = function() {
            var t = this;
            return this.fightNum <= 0 ? void BubblerManager.getInstance().showText("很抱歉，今日剩余抽取次数不足！") : void SocketConnection.sendWithPromise(43232, [4, [this.fenYinMenNum, [0, 0, 0, 0, 0, 0]]]).then(function() {
                t.updateItem(),
                KTool.getMultiValue([6745],
                function(e) {
                    for (var i = KTool.getByte(e[0], 0), n = 1; 8 >= n; n++) t["highlight_" + n].visible = !1;
                    t.display8G = 7,
                    t.playGambleAnim(i),
                    EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, t.reconnect, t)
                })
            })
        },
        i.prototype.reconnect = function() {
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.reconnect, this),
            this.touchChildren = this.touchEnabled = !0,
            this.update()
        },
        i.prototype.playGambleAnim = function(t, e) {
            var i = this;
            return void 0 === e && (e = 300),
            60 > e && t == this.display8G ? (this.touchChildren = this.touchEnabled = !0, void this.update()) : (this.touchChildren = this.touchEnabled = !1, this.display8G = this.display8G, e >= 60 && (e -= 15), void egret.setTimeout(function() {
                i.playGambleAnim(t, e)
            },
            this, e))
        },
        Object.defineProperty(i.prototype, "display8G", {
            get: function() {
                return this._display8G
            },
            set: function(t) {
                this["highlight_" + this._display8G] && (this["highlight_" + this._display8G].visible = !1),
                t = t % 8 + 1,
                this._display8G = t,
                this["highlight_" + this._display8G].visible = !0
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.onFightOver = function() {
            var e = this;
            this.isCompleted || KTool.getMultiValue([6739],
            function(i) {
                var n = KTool.getBit(i[0], 7);
                return n ? (Alarm.show("恭喜你，成功完成了夜虎试炼！"), e.service.openPanel(t.DataConst.STAGE_PANEL), void(e.isCompleted = !0)) : void 0
            })
        },
        i.prototype.updateTZZL = function() {
            this.tzzlCntTxt1.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString()
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.reconnect, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.YehuPanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.YehuPanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.bossArr = [8687, 8688, 8689, 8690, 8691],
            t.needShowAlarm = !1,
            t.isCompleted = !1,
            t.updateCountDownTime = function() {
                t.leftTime--;
                var e = Math.round(t.leftTime % 60),
                i = 10 > e ? "0" + e: e.toString();
                t.cdTxt.text = Math.floor(t.leftTime / 60) + "：" + i,
                t.leftTime <= 0 && (SystemTimerManager.removeTickFun(t.updateCountDownTime), Alarm.show("很遗憾你没在规定时间内达成目标，继续加油吧！"), t.tiaozhanBtn.visible = !0, t.jinruduizhanBtn.visible = !1, t.grp_cd.visible = !1, t.scoreTxt_1.text = "0/80000", t.scoreTxt_2.text = "0/30")
            },
            t.skinName = "HolyHowlBaiHuZhouhuSkin",
            StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "进入昼虎试炼面板"),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initData()
        },
        i.prototype.addEvent = function() {
            var i = this;
            e.prototype.initBtnClose.call(this, ["holy_howl_bai_hu_zhouhu_backTitle_png", "holy_howl_bai_hu_titleBg_png"], this,
            function() {
                i.service.openPanel(t.DataConst.STAGE_PANEL)
            },
            this),
            this.initBtnHelpById(152),
            EventManager.addEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            ImageButtonUtil.add(this.bagBtn0,
            function() {
                i.service.showPetBag()
            },
            this),
            ImageButtonUtil.add(this.cureBtn0,
            function() {
                i.service.cureAllPet()
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn0,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249602, 1,
                    function() {
                        KTool.doExchange(9794, 1,
                        function() {
                            i.update()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.smallAddBtn,
            function() {
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(249604, 1,
                    function() {
                        KTool.doExchange(9796, 1,
                        function() {
                            i.update()
                        })
                    })
                },
                i)
            },
            this),
            ImageButtonUtil.add(this.tiaozhanBtn,
            function() {
                i.tiaozhanBtn.visible = !1,
                SocketConnection.sendWithCallback(43232,
                function() {
                    egret.setTimeout(function() {
                        KTool.getMultiValue([6741],
                        function(t) {
                            0 == t[0] ? SocketConnection.sendWithCallback(43232,
                            function() {
                                i.initData()
                            },
                            [3, 0, [0, 0, 0, 0, 0, 0]]) : i.initData()
                        })
                    },
                    i, 500)
                },
                [3, 0, [0, 0, 0, 0, 0, 0]])
            },
            this),
            ImageButtonUtil.add(this.jinruduizhanBtn,
            function() {
                if (StatLogger.log("20230602版本系统功能", "圣尊啸傲·白虎搬迁", "挑战昼虎"), i.fightNum <= 0) BubblerManager.getInstance().showText("很抱歉，今日剩余挑战次数不足！");
                else {
                    var t = i.bossArr[Math.floor(i.bossArr.length * Math.random())];
                    i.hasZZ && (t = 8692),
                    FightManager.fightNoMapBoss("昼虎", t, !1, !0,
                    function() {
                        i.needShowAlarm = !0,
                        i.initData()
                    })
                }
            },
            this)
        },
        i.prototype.initData = function() {
            var e = this;
            this.tzzlCntTxt.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString(),
            KTool.getMultiValue([6741, 6742, 6743, 15351, 15352, 6739],
            function(i) {
                return 1 == KTool.getBit(i[5], 6) && e.needShowAlarm && !e.isCompleted ? (Alarm.show("恭喜你，成功完成了昼虎试炼！"), SystemTimerManager.removeTickFun(e.updateCountDownTime), e.tiaozhanBtn.visible = !0, e.jinruduizhanBtn.visible = !1, e.grp_cd.visible = !1, void e.service.openPanel(t.DataConst.STAGE_PANEL)) : (e.isCompleted = 1 == KTool.getBit(i[5], 6), e.needShowAlarm = !1, e.leftTime = 900 + i[0] - SystemTimerManager.time - 1, 1 == KTool.getBit(i[3], 4) && (e.leftTime += 300), e.leftTime > 0 ? (e.leftTime < 100 && (e.leftTime += 5), e.tiaozhanBtn.visible = !1, e.jinruduizhanBtn.visible = !0, e.grp_cd.visible = !0, SystemTimerManager.removeTickFun(e.updateCountDownTime), SystemTimerManager.addTickFun(e.updateCountDownTime)) : (e.tiaozhanBtn.visible = !0, e.jinruduizhanBtn.visible = !1, e.grp_cd.visible = !1), e.scoreTxt_1.text = i[1] + "/80000", e.scoreTxt_2.text = i[2] + "/30", e.fightNum = 20 - i[4], void(e.hasZZ = 1 == KTool.getBit(i[3], 2)))
            }),
            this.update()
        },
        i.prototype.update = function() {
            var t = this;
            KTool.getMultiValue([15352, 15354],
            function(e) {
                t.fightNum = 20 - e[0],
                t.tzzlCntTxt0.text = "今日挑战次数：" + t.fightNum,
                DisplayUtil.setEnabled(t.smallAddBtn0, t.fightNum <= 0, t.fightNum > 0),
                t.todayHasBuy = e[1],
                t.todayBuyTxt.text = "今日已购买：" + t.todayHasBuy + "/10",
                DisplayUtil.setEnabled(t.smallAddBtn, t.todayHasBuy < 10, t.todayHasBuy >= 10)
            })
        },
        i.prototype.updateTZZL = function() {
            this.tzzlCntTxt.text = "天尊之灵：" + ItemManager.getNumByID(1711876).toString()
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(GameEvent.NOTIFY_ITEM_CHANGE, this.updateTZZL, this),
            SystemTimerManager.removeTickFun(this.updateCountDownTime),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.ZhouhuPanel = e,
    __reflect(e.prototype, "holyHowlBaiHu.ZhouhuPanel")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.curIndex = 1,
            i.skinName = "HolyHowlBaiHuFinalPopSkin",
            i.curIndex = e[0],
            i.fightPetCatchTime = e.slice(1, 7),
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this);
            var e = [0, 43, 10, 15, 0, 8, 24];
            this.fightDisplay_1.source = "holy_howl_bai_hu_final_fight_fightDisplay_" + this.curIndex + "_png",
            this.fightDisplay_1.y = e[this.curIndex];
            for (var i = 1; 6 >= i; i++) this["word_" + i].visible = i == this.curIndex;
            this.bossGrp.removeChildren();
            for (var n = [[], [3142, 3150], [3220, 3256, 3276], [3106, 3054, 3022, 3164], [3194, 3183, 3234, 3162, 3217, 3214], []], o = n[this.curIndex - 1], _ = 0, r = o; _ < r.length; _++) {
                var a = r[_],
                h = new SmallItemIcon;
                h.setData({
                    type: "pet",
                    id: a,
                    name: {
                        value: "auto",
                        color: 16761225,
                        limitLen: 5,
                        posY: 71
                    },
                    rarity: !1
                }),
                this.bossGrp.addChild(h)
            }
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnXiangxiang,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnDuizhan,
            function() {
                var e = [1, 1, 2, 3, 4, 6, 10],
                i = e[t.curIndex];
                if (ItemManager.getNumByID(1711876) < i) return void BubblerManager.getInstance().showText("挑战需要消耗" + i + "个天尊之灵，你的天尊之灵数量不足！");
                for (var n = 0,
                o = 0,
                _ = t.fightPetCatchTime; o < _.length; o++) {
                    var r = _[o];
                    n += r
                }
                return 0 == n ? void BubblerManager.getInstance().showText("很抱歉，请先选择出战精灵后再来挑战！") : (ToolBtnPanelObserver.AllowChangePet = !0, SocketConnection.send(43232, [5, 0, t.fightPetCatchTime]), void t.hide())
            },
            this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.FinalPop = e,
    __reflect(e.prototype, "holyHowlBaiHu.FinalPop")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
holyHowlBaiHu; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "HolyHowlBaiHuWarningPopSkin",
            i.bossType = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            switch (t.prototype.childrenCreated.call(this), this.word_1.visible = this.word_2.visible = this.word_3.visible = this.word_4.visible = !1, this.bossType) {
            case "YH":
                this.word_1.visible = !0,
                this.ansBtn.source = "holy_howl_bai_hu_warning_wuweiBtn_png",
                this.petDisplayImg.source = "holy_howl_bai_hu_warning_petDisplay_yh_png";
                break;
            case "ZH":
                this.word_3.visible = !0,
                this.ansBtn.source = "holy_howl_bai_hu_warning_wuweiBtn_png",
                this.petDisplayImg.source = "holy_howl_bai_hu_warning_petDisplay_zh_png";
                break;
            case "LOSEYH":
                this.word_4.visible = !0,
                this.ansBtn.source = "holy_howl_bai_hu_warning_zhidaoBtn_png",
                this.petDisplayImg.source = "holy_howl_bai_hu_warning_petDisplay_yh_png";
                break;
            case "LOSEZH":
                this.word_2.visible = !0,
                this.ansBtn.source = "holy_howl_bai_hu_warning_zhidaoBtn_png",
                this.petDisplayImg.source = "holy_howl_bai_hu_warning_petDisplay_zh_png";
                break;
            default:
                throw new Error("错误参数" + this.bossType)
            }
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.ansBtn,
            function() {
                if ("LOSEYH" == t.bossType || "LOSEZH" == t.bossType) t.hide();
                else {
                    var i = "LOSE" + t.bossType;
                    FightManager.fightNoMapBoss("YH" == t.bossType ? "夜虎": "昼虎", "YH" == t.bossType ? 8694 : 8692, !1, !0,
                    function() {
                        FightManager.isWin || PopViewManager.getInstance().openView(new e(i))
                    }),
                    t.hide()
                }
            },
            this)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.WarnPop = e,
    __reflect(e.prototype, "holyHowlBaiHu.WarnPop")
} (holyHowlBaiHu || (holyHowlBaiHu = {}));
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
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuFinalPopSkin.exml"] = window.HolyHowlBaiHuFinalPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "fightDisplay_1", "word_6_3", "word_6_2", "word_6_1", "word_6", "word_5_3", "word_5_2", "word_5_1", "word_5", "word_4_3", "word_4_2", "word_4_1", "word_4", "word_3_4", "word_3_3", "word_3_2", "word_3_1", "word_3", "word_2_4", "word_2_3", "word_2_2", "word_2_1", "word_2", "word_1_3", "word_1_2", "word_1_1", "word_1", "btnXiangxiang", "btnDuizhan", "bossGrp", "btnBack"],
        this.height = 534,
        this.width = 1043,
        this.elementsContent = [this.bg_i(), this.fightDisplay_1_i(), this._Group1_i(), this.btnBack_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 406,
        t.source = "holy_howl_bai_hu_warning_bg_png",
        t.width = 759,
        t.x = 284,
        t.y = 61,
        t
    },
    i.fightDisplay_1_i = function() {
        var t = new eui.Image;
        return this.fightDisplay_1 = t,
        t.horizontalCenter = -220.5,
        t.source = "holy_howl_bai_hu_final_fight_fightDisplay_1_png",
        t.visible = !0,
        t.y = 43,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 263.5,
        t.visible = !0,
        t.x = 5,
        t.y = 117.904,
        t.elementsContent = [this.word_6_i(), this.word_5_i(), this.word_4_i(), this.word_3_i(), this.word_2_i(), this.word_1_i(), this.btnXiangxiang_i(), this.btnDuizhan_i(), this.bossGrp_i()],
        t
    },
    i.word_6_i = function() {
        var t = new eui.Group;
        return this.word_6 = t,
        t.horizontalCenter = 0,
        t.y = 60.799,
        t.elementsContent = [this.word_6_3_i(), this.word_6_2_i(), this.word_6_1_i()],
        t
    },
    i.word_6_3_i = function() {
        var t = new eui.Label;
        return this.word_6_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "那么就让你见识见识神威吧！",
        t.textColor = 16777215,
        t.x = 13,
        t.y = 96,
        t
    },
    i.word_6_2_i = function() {
        var t = new eui.Label;
        return this.word_6_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "能走到我的面前可见你的实力！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 48,
        t
    },
    i.word_6_1_i = function() {
        var t = new eui.Label;
        return this.word_6_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "凡人，",
        t.textColor = 16777215,
        t.x = 167,
        t.y = 0,
        t
    },
    i.word_5_i = function() {
        var t = new eui.Group;
        return this.word_5 = t,
        t.x = 45,
        t.y = 25,
        t.elementsContent = [this.word_5_3_i(), this.word_5_2_i(), this.word_5_1_i()],
        t
    },
    i.word_5_3_i = function() {
        var t = new eui.Label;
        return this.word_5_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "吃我一记超重力压迫！",
        t.textColor = 16777215,
        t.x = 44,
        t.y = 97,
        t
    },
    i.word_5_2_i = function() {
        var t = new eui.Label;
        return this.word_5_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "反正来都来了！",
        t.textColor = 16777215,
        t.x = 91,
        t.y = 50,
        t
    },
    i.word_5_1_i = function() {
        var t = new eui.Label;
        return this.word_5_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "我也不知道为什么要过来打！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.word_4_i = function() {
        var t = new eui.Group;
        return this.word_4 = t,
        t.x = 14,
        t.y = 2,
        t.elementsContent = [this.word_4_3_i(), this.word_4_2_i(), this.word_4_1_i()],
        t
    },
    i.word_4_3_i = function() {
        var t = new eui.Label;
        return this.word_4_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "像白虎那么能打的还有我们四个！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 96,
        t
    },
    i.word_4_2_i = function() {
        var t = new eui.Label;
        return this.word_4_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "无坚不摧！",
        t.textColor = 16777215,
        t.x = 151,
        t.y = 49,
        t
    },
    i.word_4_1_i = function() {
        var t = new eui.Label;
        return this.word_4_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "百炼成钢，",
        t.textColor = 16777215,
        t.x = 150,
        t.y = 0,
        t
    },
    i.word_3_i = function() {
        var t = new eui.Group;
        return this.word_3 = t,
        t.x = 36,
        t.y = 1,
        t.elementsContent = [this.word_3_4_i(), this.word_3_3_i(), this.word_3_2_i(), this.word_3_1_i()],
        t
    },
    i.word_3_4_i = function() {
        var t = new eui.Label;
        return this.word_3_4 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "那么就先让我来吧！",
        t.textColor = 16777215,
        t.x = 68,
        t.y = 146,
        t
    },
    i.word_3_3_i = function() {
        var t = new eui.Label;
        return this.word_3_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "既然有人来挑战，",
        t.textColor = 16777215,
        t.x = 82,
        t.y = 98,
        t
    },
    i.word_3_2_i = function() {
        var t = new eui.Label;
        return this.word_3_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "就是喜欢来白虎这里串门，",
        t.textColor = 16777215,
        t.x = 24,
        t.y = 49,
        t
    },
    i.word_3_1_i = function() {
        var t = new eui.Label;
        return this.word_3_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "苏醒之日，除了守护一方净土，",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.word_2_i = function() {
        var t = new eui.Group;
        return this.word_2 = t,
        t.x = 0,
        t.y = 1,
        t.elementsContent = [this.word_2_4_i(), this.word_2_3_i(), this.word_2_2_i(), this.word_2_1_i()],
        t
    },
    i.word_2_4_i = function() {
        var t = new eui.Label;
        return this.word_2_4 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "你可有胆识挑战我！",
        t.textColor = 16777215,
        t.x = 103,
        t.y = 147,
        t
    },
    i.word_2_3_i = function() {
        var t = new eui.Label;
        return this.word_2_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "必须守护它一次！",
        t.textColor = 16777215,
        t.x = 120,
        t.y = 97,
        t
    },
    i.word_2_2_i = function() {
        var t = new eui.Label;
        return this.word_2_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "为此我和它有个约定，",
        t.textColor = 16777215,
        t.x = 89,
        t.y = 49,
        t
    },
    i.word_2_1_i = function() {
        var t = new eui.Label;
        return this.word_2_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "多年以前我与白虎的对决棋差一招，",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.word_1_i = function() {
        var t = new eui.Group;
        return this.word_1 = t,
        t.horizontalCenter = -.5,
        t.y = 49.206,
        t.elementsContent = [this.word_1_3_i(), this.word_1_2_i(), this.word_1_1_i()],
        t
    },
    i.word_1_3_i = function() {
        var t = new eui.Label;
        return this.word_1_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "那么请你先挑战我吧！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 98,
        t
    },
    i.word_1_2_i = function() {
        var t = new eui.Label;
        return this.word_1_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "但只可以由我来击败！",
        t.textColor = 16777215,
        t.x = 1,
        t.y = 50,
        t
    },
    i.word_1_1_i = function() {
        var t = new eui.Label;
        return this.word_1_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "白虎是个可敬的对手，",
        t.textColor = 16777215,
        t.x = 3,
        t.y = 0,
        t
    },
    i.btnXiangxiang_i = function() {
        var t = new eui.Image;
        return this.btnXiangxiang = t,
        t.height = 46,
        t.horizontalCenter = -111,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_howl_bai_hu_final_fight_btnXiangxiang_png",
        t.width = 136,
        t.y = 290,
        t
    },
    i.btnDuizhan_i = function() {
        var t = new eui.Image;
        return this.btnDuizhan = t,
        t.height = 46,
        t.horizontalCenter = 111,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_howl_bai_hu_final_fight_btnDuizhan_png",
        t.width = 134,
        t.y = 290,
        t
    },
    i.bossGrp_i = function() {
        var t = new eui.Group;
        return this.bossGrp = t,
        t.height = 83.437,
        t.horizontalCenter = 0,
        t.y = 192,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_warning_btnBack_png",
        t.width = 39,
        t.x = 995,
        t.y = 70,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuFinalSkin.exml"] = window.HolyHowlBaiHuFinalSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["tiaozhanBtn", "levelTxt", "petBoxBgXXX", "noPetFlagXXX", "bagBtn0", "cureBtn0", "replayBtn", "bagcure", "todayBuyTxt1", "tzzlCntTxt0", "smallAddBtn0", "tzzlCntTxt1", "grp_petsHasUsed", "hasUsedPetTxt", "petBagBg", "petBagInfo", "grp_petsInBag", "petBagShow", "grp_petbag", "refreshBtn", "canUsedPetTxt", "grp_petsCanUse"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.petBoxBgXXX_i(), this.noPetFlagXXX_i(), this.bagcure_i(), this._Group2_i(), this._Group3_i(), this.grp_petbag_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "holy_howl_bai_hu_final_bg_png",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -188,
        t.visible = !0,
        t.y = 62.98,
        t.elementsContent = [this._Image2_i(), this.tiaozhanBtn_i(), this._Image3_i(), this.levelTxt_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "holy_howl_bai_hu_final_fight_fightDisplay_6_png",
        t.x = 5,
        t.y = 33.02,
        t
    },
    i.tiaozhanBtn_i = function() {
        var t = new eui.Image;
        return this.tiaozhanBtn = t,
        t.height = 46,
        t.source = "holy_howl_bai_hu_final_tiaozhanBtn_png",
        t.width = 134,
        t.x = 257,
        t.y = 483.02,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(45, 11, 189, 11),
        t.source = "holy_howl_bai_hu_zhouhu_brownPiece_png",
        t.width = 245.693,
        t.x = 207.87,
        t.y = 0,
        t
    },
    i.levelTxt_i = function() {
        var t = new eui.Label;
        return this.levelTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 20.0465682428909,
        t.text = "试炼第 1/6 轮",
        t.textColor = 16776661,
        t.x = 265,
        t.y = 8.02,
        t
    },
    i.petBoxBgXXX_i = function() {
        var t = new eui.Image;
        return this.petBoxBgXXX = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_final_petBoxBg_png",
        t.width = 70,
        t.x = 527.131,
        t.y = -155.206,
        t
    },
    i.noPetFlagXXX_i = function() {
        var t = new eui.Image;
        return this.noPetFlagXXX = t,
        t.height = 52,
        t.source = "holy_howl_bai_hu_final_noPetFlag_png",
        t.width = 40,
        t.x = 543.131,
        t.y = -145.206,
        t
    },
    i.bagcure_i = function() {
        var t = new eui.Group;
        return this.bagcure = t,
        t.bottom = 13,
        t.height = 280,
        t.left = 45,
        t.width = 100,
        t.elementsContent = [this.bagBtn0_i(), this.cureBtn0_i(), this.replayBtn_i()],
        t
    },
    i.bagBtn0_i = function() {
        var t = new eui.Image;
        return this.bagBtn0 = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_bagBtn_png",
        t.width = 76,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cureBtn0_i = function() {
        var t = new eui.Image;
        return this.cureBtn0 = t,
        t.height = 69,
        t.source = "holy_howl_bai_hu_cureBtn_png",
        t.width = 75,
        t.x = 0,
        t.y = 91,
        t
    },
    i.replayBtn_i = function() {
        var t = new eui.Image;
        return this.replayBtn = t,
        t.height = 89,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_howl_bai_hu_final_replayBtn_png",
        t.width = 89,
        t.x = 6,
        t.y = 177.0000000000001,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.top = 15,
        t.visible = !0,
        t.elementsContent = [this._Image4_i(), this.todayBuyTxt1_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this.tzzlCntTxt0_i(), this.smallAddBtn0_i(), this.tzzlCntTxt1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 212,
        t.y = 8,
        t
    },
    i.todayBuyTxt1_i = function() {
        var t = new eui.Label;
        return this.todayBuyTxt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "今日已购买：00/10",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.x = 226,
        t.y = 10,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = -212,
        t.y = 8,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "holy_howl_bai_hu_upgrade_tzzlIcon_png",
        t.width = 34,
        t.x = -12,
        t.y = 0,
        t
    },
    i.tzzlCntTxt0_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.touchEnabled = !1,
        t.width = 180,
        t.x = 22,
        t.y = 10,
        t
    },
    i.smallAddBtn0_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn0 = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = 160,
        t.y = 8,
        t
    },
    i.tzzlCntTxt1_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.width = 137.869,
        t.x = -197.869,
        t.y = 10,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.visible = !0,
        t.width = 375,
        t.y = 51,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Scroller1_i(), this.hasUsedPetTxt_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 580.699,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "holy_howl_bai_hu_final_grew_png",
        t.width = 388,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 255,
        t.scale9Grid = new egret.Rectangle(22, 17, 7, 10),
        t.source = "holy_howl_bai_hu_final_tiao_png",
        t.width = 383,
        t.x = 3,
        t.y = 31,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 39,
        t.source = "holy_howl_bai_hu_final_info_png",
        t.width = 369,
        t.x = 5,
        t.y = 0,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 224,
        t.width = 347.534,
        t.x = 21.07,
        t.y = 45,
        t.viewport = this.grp_petsHasUsed_i(),
        t
    },
    i.grp_petsHasUsed_i = function() {
        var t = new eui.Group;
        return this.grp_petsHasUsed = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalAlign = "justify",
        t.horizontalGap = 29,
        t.paddingLeft = 27,
        t.paddingTop = 5,
        t
    },
    i.hasUsedPetTxt_i = function() {
        var t = new eui.Label;
        return this.hasUsedPetTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 23.6913953565261,
        t.text = "00",
        t.textColor = 16776661,
        t.x = 326,
        t.y = 6,
        t
    },
    i.grp_petbag_i = function() {
        var t = new eui.Group;
        return this.grp_petbag = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !1,
        t.elementsContent = [this.petBagShow_i()],
        t
    },
    i.petBagShow_i = function() {
        var t = new eui.Group;
        return this.petBagShow = t,
        t.right = 406,
        t.y = 358.74,
        t.elementsContent = [this.petBagBg_i(), this.petBagInfo_i(), this.grp_petsInBag_i()],
        t
    },
    i.petBagBg_i = function() {
        var t = new eui.Image;
        return this.petBagBg = t,
        t.height = 283,
        t.rotation = 180,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_howl_bai_hu_warning_bg_png",
        t.width = 697,
        t.x = 661.81,
        t.y = 270.08,
        t
    },
    i.petBagInfo_i = function() {
        var t = new eui.Image;
        return this.petBagInfo = t,
        t.height = 39,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "holy_howl_bai_hu_final_petBagInfo_png",
        t.width = 109,
        t.x = 1.81,
        t.y = -7,
        t
    },
    i.grp_petsInBag_i = function() {
        var t = new eui.Group;
        return this.grp_petsInBag = t,
        t.height = 212.333,
        t.visible = !0,
        t.width = 645.813,
        t.x = 0,
        t.y = 37,
        t.layout = this._TileLayout2_i(),
        t
    },
    i._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 26,
        t.paddingLeft = 20,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 375,
        t.y = 51,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this.refreshBtn_i(), this.canUsedPetTxt_i(), this.grp_petsCanUse_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 264.148,
        t.scale9Grid = new egret.Rectangle(22, 17, 7, 10),
        t.source = "holy_howl_bai_hu_final_tiao_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 383,
        t.x = 3,
        t.y = 316.554,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 39,
        t.source = "holy_howl_bai_hu_final_info2_png",
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 369,
        t.x = 5,
        t.y = 284.53,
        t
    },
    i.refreshBtn_i = function() {
        var t = new eui.Image;
        return this.refreshBtn = t,
        t.height = 30,
        t.source = "holy_howl_bai_hu_final_refreshBtn_png",
        t.width = 30,
        t.x = 125,
        t.y = 287.53,
        t
    },
    i.canUsedPetTxt_i = function() {
        var t = new eui.Label;
        return this.canUsedPetTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 23.6913953565261,
        t.text = "0",
        t.textColor = 16776661,
        t.x = 336,
        t.y = 293.53,
        t
    },
    i.grp_petsCanUse_i = function() {
        var t = new eui.List;
        return this.grp_petsCanUse = t,
        t.height = 227.14,
        t.visible = !0,
        t.width = 338.115,
        t.x = 24.81,
        t.y = 333.61,
        t.layout = this._TileLayout3_i(),
        t
    },
    i._TileLayout3_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 29,
        t.paddingLeft = 27,
        t.paddingTop = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuSkin.exml"] = window.HolyHowlBaiHuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "petDisplay_1", "petInfoBtn", "yhjpBtn", "btnBless", "hasGoFlag", "title", "achive", "getBtn", "btnEvolveNeed"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this.petDisplay_1_i(), this._Group1_i(), this.hasGoFlag_i(), this.title_i(), this._Group2_i(), this.getBtn_i(), this.btnEvolveNeed_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "holy_howl_bai_hu_bg_png",
        t.top = 0,
        t
    },
    i.petDisplay_1_i = function() {
        var t = new eui.Image;
        return this.petDisplay_1 = t,
        t.height = 629,
        t.horizontalCenter = -188.5,
        t.source = "holy_howl_bai_hu_final_fight_fightDisplay_6_png",
        t.verticalCenter = -5.5,
        t.visible = !0,
        t.width = 843,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 28,
        t.left = 45,
        t.elementsContent = [this.petInfoBtn_i(), this.yhjpBtn_i(), this.btnBless_i()],
        t
    },
    i.petInfoBtn_i = function() {
        var t = new eui.Image;
        return this.petInfoBtn = t,
        t.height = 55,
        t.source = "holy_howl_bai_hu_petInfoBtn_png",
        t.width = 53,
        t.x = 20,
        t.y = 0,
        t
    },
    i.yhjpBtn_i = function() {
        var t = new eui.Image;
        return this.yhjpBtn = t,
        t.height = 75,
        t.source = "holy_howl_bai_hu_yhjpBtn_png",
        t.width = 94,
        t.x = 0,
        t.y = 59,
        t
    },
    i.btnBless_i = function() {
        var t = new eui.Image;
        return this.btnBless = t,
        t.source = "holy_howl_bai_hu_btninfo11_bless_png",
        t.x = 110,
        t.y = 59,
        t
    },
    i.hasGoFlag_i = function() {
        var t = new eui.Image;
        return this.hasGoFlag = t,
        t.height = 76,
        t.horizontalCenter = -175,
        t.source = "holy_howl_bai_hu_hasGoFlag_png",
        t.width = 264,
        t.y = 365,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 325,
        t.horizontalCenter = 312.5,
        t.source = "holy_howl_bai_hu_title_png",
        t.width = 599,
        t.y = 29,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 310,
        t.width = 300,
        t.x = 55,
        t.y = 115,
        t.elementsContent = [this.achive_i()],
        t
    },
    i.achive_i = function() {
        var t = new eui.Image;
        return this.achive = t,
        t.height = 192,
        t.source = "holy_howl_bai_hu_achive_png",
        t.width = 177,
        t.x = 0,
        t.y = 0,
        t
    },
    i.getBtn_i = function() {
        var t = new eui.Image;
        return this.getBtn = t,
        t.height = 103,
        t.horizontalCenter = 317.5,
        t.source = "holy_howl_bai_hu_getBtn_png",
        t.visible = !0,
        t.width = 291,
        t.y = 513.537,
        t
    },
    i.btnEvolveNeed_i = function() {
        var t = new eui.Image;
        return this.btnEvolveNeed = t,
        t.source = "holy_howl_bai_hu_btnevolveneed_png",
        t.x = 738,
        t.y = 346,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuStageSkin.exml"] = window.HolyHowlBaiHuStageSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_3", "YHBtn", "ZHBtn", "txtLabel", "btnTiaozhan", "playerCntTxt", "infoTxt_0", "infoTxt_2", "infoTxt_1", "bagBtn1", "cureBtn1", "bagcure", "hasPassZH", "hasPassYH"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_3_i(), this.YHBtn_i(), this.ZHBtn_i(), this.btnTiaozhan_i(), this.playerCntTxt_i(), this.infoTxt_0_i(), this.infoTxt_2_i(), this.infoTxt_1_i(), this.bagcure_i(), this.hasPassZH_i(), this.hasPassYH_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_3_i = function() {
        var t = new eui.Image;
        return this.bg_3 = t,
        t.bottom = 0,
        t.horizontalCenter = 0,
        t.source = "holy_howl_bai_hu_stage_bg_3_png",
        t.top = 0,
        t.verticalCenter = 0,
        t.width = 1256,
        t
    },
    i.YHBtn_i = function() {
        var t = new eui.Image;
        return this.YHBtn = t,
        t.height = 147,
        t.horizontalCenter = 360.5,
        t.source = "holy_howl_bai_hu_stage_YHBtn_png",
        t.verticalCenter = 78.5,
        t.width = 285,
        t
    },
    i.ZHBtn_i = function() {
        var t = new eui.Image;
        return this.ZHBtn = t,
        t.height = 147,
        t.horizontalCenter = 360.5,
        t.source = "holy_howl_bai_hu_stage_ZHBtn_png",
        t.verticalCenter = -89.5,
        t.width = 285,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Group;
        return this.btnTiaozhan = t,
        t.horizontalCenter = -145,
        t.y = 452,
        t.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_btn_bg_yellow_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "终极试炼",
        t.textColor = 10181146,
        t.x = 27,
        t.y = 14,
        t
    },
    i.playerCntTxt_i = function() {
        var t = new eui.Image;
        return this.playerCntTxt = t,
        t.height = 40,
        t.horizontalCenter = -146.5,
        t.source = "holy_howl_bai_hu_zhouhu_brownPiece_png",
        t.width = 527,
        t.y = 499,
        t
    },
    i.infoTxt_0_i = function() {
        var t = new eui.Label;
        return this.infoTxt_0 = t,
        t.fontFamily = "MFShangHei",
        t.height = 36.188,
        t.horizontalCenter = -146,
        t.size = 23.6913953565261,
        t.text = "当前已有0000名玩家获得圣尊啸傲·白虎",
        t.textAlign = "center",
        t.textColor = 16776661,
        t.verticalAlign = "middle",
        t.width = 479.607,
        t.y = 500.906,
        t
    },
    i.infoTxt_2_i = function() {
        var t = new eui.Label;
        return this.infoTxt_2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -232.5,
        t.size = 19.742832650088,
        t.text = "2.削弱时间内挑战昼虎和夜虎关卡，难度将大范围降低。",
        t.textColor = 15060344,
        t.y = 597,
        t
    },
    i.infoTxt_1_i = function() {
        var t = new eui.Label;
        return this.infoTxt_1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -104.5,
        t.size = 19.742832650088,
        t.text = "1.通过昼虎、夜虎关卡即可开启白虎终极试炼，完成试炼获得白虎完全体进化的资格。",
        t.textColor = 15060344,
        t.y = 569,
        t
    },
    i.bagcure_i = function() {
        var t = new eui.Group;
        return this.bagcure = t,
        t.bottom = 120,
        t.height = 170,
        t.left = 45,
        t.width = 80,
        t.elementsContent = [this.bagBtn1_i(), this.cureBtn1_i()],
        t
    },
    i.bagBtn1_i = function() {
        var t = new eui.Image;
        return this.bagBtn1 = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_bagBtn_png",
        t.width = 76,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cureBtn1_i = function() {
        var t = new eui.Image;
        return this.cureBtn1 = t,
        t.height = 69,
        t.source = "holy_howl_bai_hu_cureBtn_png",
        t.width = 75,
        t.x = 0,
        t.y = 91,
        t
    },
    i.hasPassZH_i = function() {
        var t = new eui.Image;
        return this.hasPassZH = t,
        t.height = 44,
        t.horizontalCenter = 461,
        t.source = "holy_howl_bai_hu_hasCompFlag_png",
        t.touchEnabled = !1,
        t.verticalCenter = -151,
        t.width = 150,
        t
    },
    i.hasPassYH_i = function() {
        var t = new eui.Image;
        return this.hasPassYH = t,
        t.height = 44,
        t.horizontalCenter = 461,
        t.source = "holy_howl_bai_hu_hasCompFlag_png",
        t.verticalCenter = 18,
        t.width = 150,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuUpgradeSkin.exml"] = window.HolyHowlBaiHuUpgradeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_2", "huodejia", "getTZBHBtn", "jhbhTip", "jhbhBtn", "nltsTip", "nltsBtn", "hasPassNLTS", "hasPassJHBH", "todayBuyTxt", "tzzlCntTxt", "smallAddBtn", "bagBtn0", "bagcure"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_2_i(), this.huodejia_i(), this.getTZBHBtn_i(), this._Group1_i(), this._Group2_i(), this.bagcure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_2_i = function() {
        var t = new eui.Image;
        return this.bg_2 = t,
        t.left = 0,
        t.right = 0,
        t.source = "holy_howl_bai_hu_upgrade_bg_2_png",
        t.y = 0,
        t
    },
    i.huodejia_i = function() {
        var t = new eui.Image;
        return this.huodejia = t,
        t.bottom = 25,
        t.height = 120,
        t.right = 75,
        t.source = "holy_howl_bai_hu_upgrade_huodejia_png",
        t.width = 132,
        t
    },
    i.getTZBHBtn_i = function() {
        var t = new eui.Image;
        return this.getTZBHBtn = t,
        t.bottom = 25,
        t.height = 120,
        t.left = 75,
        t.source = "holy_howl_bai_hu_upgrade_getTZBHBtn_png",
        t.width = 132,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 100,
        t.horizontalCenter = -10,
        t.width = 600,
        t.y = 528,
        t.elementsContent = [this.jhbhTip_i(), this.jhbhBtn_i(), this.nltsTip_i(), this.nltsBtn_i(), this.hasPassNLTS_i(), this.hasPassJHBH_i()],
        t
    },
    i.jhbhTip_i = function() {
        var t = new eui.Image;
        return this.jhbhTip = t,
        t.height = 33,
        t.source = "holy_howl_bai_hu_upgrade_jhbhTip_png",
        t.width = 285,
        t.x = 0,
        t.y = 0,
        t
    },
    i.jhbhBtn_i = function() {
        var t = new eui.Image;
        return this.jhbhBtn = t,
        t.height = 46,
        t.source = "holy_howl_bai_hu_upgrade_jhbhBtn_png",
        t.width = 134,
        t.x = 79,
        t.y = 34,
        t
    },
    i.nltsTip_i = function() {
        var t = new eui.Image;
        return this.nltsTip = t,
        t.height = 33,
        t.source = "holy_howl_bai_hu_upgrade_nltsTip_png",
        t.width = 192,
        t.x = 326,
        t.y = 0,
        t
    },
    i.nltsBtn_i = function() {
        var t = new eui.Image;
        return this.nltsBtn = t,
        t.height = 46,
        t.source = "holy_howl_bai_hu_upgrade_nltsBtn_png",
        t.width = 134,
        t.x = 355,
        t.y = 34,
        t
    },
    i.hasPassNLTS_i = function() {
        var t = new eui.Image;
        return this.hasPassNLTS = t,
        t.height = 44,
        t.horizontalCenter = 122,
        t.source = "holy_howl_bai_hu_haslqflag_png",
        t.touchEnabled = !1,
        t.verticalCenter = 9,
        t.visible = !0,
        t.width = 150,
        t
    },
    i.hasPassJHBH_i = function() {
        var t = new eui.Image;
        return this.hasPassJHBH = t,
        t.height = 44,
        t.horizontalCenter = -157,
        t.source = "holy_howl_bai_hu_hasGoFlag_png",
        t.touchEnabled = !1,
        t.verticalCenter = 9,
        t.visible = !0,
        t.width = 150,
        t.x = 701,
        t.y = 574,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.top = 15,
        t.visible = !0,
        t.elementsContent = [this._Image1_i(), this.todayBuyTxt_i(), this._Image2_i(), this._Image3_i(), this.tzzlCntTxt_i(), this.smallAddBtn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 212,
        t.y = 8,
        t
    },
    i.todayBuyTxt_i = function() {
        var t = new eui.Label;
        return this.todayBuyTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "今日已购买：00/10",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.x = 226,
        t.y = 10,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "holy_howl_bai_hu_upgrade_tzzlIcon_png",
        t.width = 34,
        t.x = -12,
        t.y = 0,
        t
    },
    i.tzzlCntTxt_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.touchEnabled = !1,
        t.width = 180,
        t.x = 22,
        t.y = 10,
        t
    },
    i.smallAddBtn_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = 160,
        t.y = 8,
        t
    },
    i.bagcure_i = function() {
        var t = new eui.Group;
        return this.bagcure = t,
        t.bottom = 164,
        t.left = 102,
        t.touchEnabled = !1,
        t.elementsContent = [this.bagBtn0_i()],
        t
    },
    i.bagBtn0_i = function() {
        var t = new eui.Image;
        return this.bagBtn0 = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_bagBtn_png",
        t.visible = !1,
        t.width = 76,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuWarningPopSkin.exml"] = window.HolyHowlBaiHuWarningPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "petDisplayImg", "ansBtn", "btnBack", "word_1_4", "word_1_3", "word_1_2", "word_1_1", "word_1", "word_2_3", "word_2_2", "word_2_1", "word_2", "word_3_5", "word_3_4", "word_3_3", "word_3_2", "word_3_1", "word_3", "word_4_3", "word_4_2", "word_4_1", "word_4"],
        this.height = 512,
        this.width = 967,
        this.elementsContent = [this.bg_i(), this.petDisplayImg_i(), this.ansBtn_i(), this.btnBack_i(), this.word_1_i(), this.word_2_i(), this.word_3_i(), this.word_4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 406,
        t.source = "holy_howl_bai_hu_warning_bg_png",
        t.width = 759,
        t.x = 208,
        t.y = 46,
        t
    },
    i.petDisplayImg_i = function() {
        var t = new eui.Image;
        return this.petDisplayImg = t,
        t.height = 512,
        t.source = "holy_howl_bai_hu_warning_petDisplay_zh_png",
        t.visible = !0,
        t.width = 641,
        t.x = 0,
        t.y = 0,
        t
    },
    i.ansBtn_i = function() {
        var t = new eui.Image;
        return this.ansBtn = t,
        t.height = 46,
        t.source = "holy_howl_bai_hu_warning_wuweiBtn_png",
        t.width = 134,
        t.x = 690,
        t.y = 366,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_warning_btnBack_png",
        t.width = 39,
        t.x = 913,
        t.y = 56,
        t
    },
    i.word_1_i = function() {
        var t = new eui.Group;
        return this.word_1 = t,
        t.visible = !1,
        t.x = 593.16,
        t.y = 164.72,
        t.elementsContent = [this.word_1_4_i(), this.word_1_3_i(), this.word_1_2_i(), this.word_1_1_i()],
        t
    },
    i.word_1_4_i = function() {
        var t = new eui.Label;
        return this.word_1_4 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "就算你完成了考验！",
        t.textColor = 16777215,
        t.x = 38,
        t.y = 146,
        t
    },
    i.word_1_3_i = function() {
        var t = new eui.Label;
        return this.word_1_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "击败盛怒的我",
        t.textColor = 16777215,
        t.x = 72,
        t.y = 97,
        t
    },
    i.word_1_2_i = function() {
        var t = new eui.Label;
        return this.word_1_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "你将承受神兽的怒火！",
        t.textColor = 16777215,
        t.x = 21,
        t.y = 49,
        t
    },
    i.word_1_1_i = function() {
        var t = new eui.Label;
        return this.word_1_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "凡人，你打扰了我的休息，",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.word_2_i = function() {
        var t = new eui.Group;
        return this.word_2 = t,
        t.visible = !1,
        t.x = 568.7,
        t.y = 177.5,
        t.elementsContent = [this.word_2_3_i(), this.word_2_2_i(), this.word_2_1_i()],
        t
    },
    i.word_2_3_i = function() {
        var t = new eui.Label;
        return this.word_2_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "再来挑战我吧！",
        t.textColor = 16777215,
        t.x = 73,
        t.y = 98,
        t
    },
    i.word_2_2_i = function() {
        var t = new eui.Label;
        return this.word_2_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "每天12:00-15:00",
        t.textColor = 16777215,
        t.x = 55,
        t.y = 50,
        t
    },
    i.word_2_1_i = function() {
        var t = new eui.Label;
        return this.word_2_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "凡人，神威不是你能挑衅的！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    i.word_3_i = function() {
        var t = new eui.Group;
        return this.word_3 = t,
        t.visible = !1,
        t.x = 569.16,
        t.y = 137.72,
        t.elementsContent = [this.word_3_5_i(), this.word_3_4_i(), this.word_3_3_i(), this.word_3_2_i(), this.word_3_1_i()],
        t
    },
    i.word_3_5_i = function() {
        var t = new eui.Label;
        return this.word_3_5 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "有起床气的我吗？",
        t.textColor = 16777215,
        t.x = 75,
        t.y = 146,
        t
    },
    i.word_3_4_i = function() {
        var t = new eui.Label;
        return this.word_3_4 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "击败我就算你完成考验好了！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 193,
        t
    },
    i.word_3_3_i = function() {
        var t = new eui.Label;
        return this.word_3_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "你以为可以击败",
        t.textColor = 16777215,
        t.x = 82,
        t.y = 98,
        t
    },
    i.word_3_2_i = function() {
        var t = new eui.Label;
        return this.word_3_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "是很不礼貌的行为！",
        t.textColor = 16777215,
        t.x = 61,
        t.y = 49,
        t
    },
    i.word_3_1_i = function() {
        var t = new eui.Label;
        return this.word_3_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "凡人，打扰神兽打盹",
        t.textColor = 16777215,
        t.x = 67,
        t.y = 0,
        t
    },
    i.word_4_i = function() {
        var t = new eui.Group;
        return this.word_4 = t,
        t.visible = !1,
        t.x = 568.7,
        t.y = 177.5,
        t.elementsContent = [this.word_4_3_i(), this.word_4_2_i(), this.word_4_1_i()],
        t
    },
    i.word_4_3_i = function() {
        var t = new eui.Label;
        return this.word_4_3 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "再来挑战我吧！",
        t.textColor = 16777215,
        t.x = 73,
        t.y = 98,
        t
    },
    i.word_4_2_i = function() {
        var t = new eui.Label;
        return this.word_4_2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "每天18:00-21:00",
        t.textColor = 16777215,
        t.x = 54,
        t.y = 50,
        t
    },
    i.word_4_1_i = function() {
        var t = new eui.Label;
        return this.word_4_1 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.stroke = 1,
        t.strokeColor = 11753228,
        t.text = "凡人，神威不是你能挑衅的！",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuYehuSkin.exml"] = window.HolyHowlBaiHuYehuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "select_3", "high_3", "select_2", "high_2", "select_1", "high_1", "word_9", "word_8", "word_7", "word_6", "word_5", "word_4", "word_3", "word_2", "word_1", "word_0", "wordTitle", "btnChongxin", "btnYijian", "btnTiaozhan", "todayBuyTxt0", "tzzlCntTxt1", "smallAddBtn1", "tzzlCntTxt2", "smallAddBtn2", "bagBtn1", "cureBtn1", "bagcure", "bagua", "highlight_1", "highlight_2", "highlight_3", "highlight_4", "highlight_5", "highlight_6", "highlight_7", "highlight_8", "grp_highlight", "bg_1_3", "bg_1_2", "bg_1_1", "bagua_1", "bg_2_1", "bg_2_2", "bg_2_3", "bagua_2", "bg_3_3", "bg_3_1", "bg_3_2", "bagua_3", "bg_4_1", "bg_4_2", "bg_4_3", "bagua_4", "bg_5_1", "bg_5_3", "bg_5_2", "bagua_5", "bg_6_1", "bg_6_2", "bg_6_3", "bagua_6", "bg_7_2", "bg_7_3", "bg_7_1", "bagua_7", "bg_8_1", "bg_8_2", "bg_8_3", "bagua_8", "seal_1", "seal_2", "seal_3", "seal_4", "seal_5", "seal_6", "seal_7", "seal_8"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Label1_i(), this.select_3_i(), this.high_3_i(), this.select_2_i(), this.high_2_i(), this.select_1_i(), this.high_1_i(), this._Group1_i(), this.btnChongxin_i(), this.btnYijian_i(), this.btnTiaozhan_i(), this._Group2_i(), this.bagcure_i(), this._Group4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "holy_howl_bai_hu_bg_png",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 577,
        t.horizontalCenter = -194,
        t.source = "holy_howl_bai_hu_warning_petDisplay_yh_png",
        t.verticalCenter = -21.5,
        t.visible = !0,
        t.width = 720,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.right = 156,
        t.size = 24,
        t.text = "选择抽取封印门数",
        t.textColor = 16776661,
        t.verticalCenter = 122,
        t
    },
    i.select_3_i = function() {
        var t = new eui.Image;
        return this.select_3 = t,
        t.height = 48,
        t.right = 163,
        t.source = "holy_howl_bai_hu_yehu_select_3_png",
        t.verticalCenter = 168,
        t.visible = !0,
        t.width = 48,
        t
    },
    i.high_3_i = function() {
        var t = new eui.Image;
        return this.high_3 = t,
        t.height = 62,
        t.right = 156,
        t.source = "holy_howl_bai_hu_yehu_high_1_png",
        t.verticalCenter = 168,
        t.width = 62,
        t
    },
    i.select_2_i = function() {
        var t = new eui.Image;
        return this.select_2 = t,
        t.height = 48,
        t.right = 229,
        t.source = "holy_howl_bai_hu_yehu_select_2_png",
        t.verticalCenter = 168,
        t.width = 48,
        t
    },
    i.high_2_i = function() {
        var t = new eui.Image;
        return this.high_2 = t,
        t.height = 62,
        t.right = 222,
        t.source = "holy_howl_bai_hu_yehu_high_1_png",
        t.verticalCenter = 168,
        t.width = 62,
        t
    },
    i.select_1_i = function() {
        var t = new eui.Image;
        return this.select_1 = t,
        t.height = 48,
        t.right = 296,
        t.source = "holy_howl_bai_hu_yehu_select_1_png",
        t.verticalCenter = 168,
        t.width = 48,
        t
    },
    i.high_1_i = function() {
        var t = new eui.Image;
        return this.high_1 = t,
        t.height = 62,
        t.right = 289,
        t.source = "holy_howl_bai_hu_yehu_high_1_png",
        t.verticalCenter = 168,
        t.width = 62,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.bottom = 38,
        t.horizontalCenter = -209,
        t.visible = !0,
        t.elementsContent = [this._Image2_i(), this.word_9_i(), this.word_8_i(), this.word_7_i(), this.word_6_i(), this.word_5_i(), this.word_4_i(), this.word_3_i(), this.word_2_i(), this.word_1_i(), this.word_0_i(), this.wordTitle_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(92, 11, 93, 11),
        t.source = "holy_howl_bai_hu_zhouhu_brownPiece_png",
        t.visible = !0,
        t.width = 666,
        t.x = 0,
        t.y = 3,
        t
    },
    i.word_9_i = function() {
        var t = new eui.Image;
        return this.word_9 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_9_png",
        t.visible = !1,
        t.width = 259,
        t.x = 255.77,
        t.y = 0,
        t
    },
    i.word_8_i = function() {
        var t = new eui.Image;
        return this.word_8 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_8_png",
        t.visible = !1,
        t.width = 302,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.word_7_i = function() {
        var t = new eui.Image;
        return this.word_7 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_7_png",
        t.visible = !1,
        t.width = 254,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.word_6_i = function() {
        var t = new eui.Image;
        return this.word_6 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_6_png",
        t.visible = !1,
        t.width = 247,
        t.x = 255.77,
        t.y = 0,
        t
    },
    i.word_5_i = function() {
        var t = new eui.Image;
        return this.word_5 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_5_png",
        t.visible = !1,
        t.width = 254,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.word_4_i = function() {
        var t = new eui.Image;
        return this.word_4 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_4_png",
        t.visible = !1,
        t.width = 368,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.word_3_i = function() {
        var t = new eui.Image;
        return this.word_3 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_3_png",
        t.visible = !1,
        t.width = 247,
        t.x = 255.77,
        t.y = 0,
        t
    },
    i.word_2_i = function() {
        var t = new eui.Image;
        return this.word_2 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_2_png",
        t.visible = !1,
        t.width = 278,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.word_1_i = function() {
        var t = new eui.Image;
        return this.word_1 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_1_png",
        t.visible = !1,
        t.width = 325,
        t.x = 255.77,
        t.y = 0,
        t
    },
    i.word_0_i = function() {
        var t = new eui.Image;
        return this.word_0 = t,
        t.height = 39,
        t.source = "holy_howl_bai_hu_yehu_word_0_png",
        t.visible = !1,
        t.width = 206,
        t.x = 254.77,
        t.y = 0,
        t
    },
    i.wordTitle_i = function() {
        var t = new eui.Image;
        return this.wordTitle = t,
        t.height = 22,
        t.source = "holy_howl_bai_hu_yehu_word_png",
        t.width = 191,
        t.x = 58.77,
        t.y = 8,
        t
    },
    i.btnChongxin_i = function() {
        var t = new eui.Image;
        return this.btnChongxin = t,
        t.bottom = 36,
        t.height = 46,
        t.right = 101,
        t.source = "holy_howl_bai_hu_yehu_btnChongxin_png",
        t.visible = !0,
        t.width = 134,
        t
    },
    i.btnYijian_i = function() {
        var t = new eui.Image;
        return this.btnYijian = t,
        t.bottom = 36,
        t.height = 46,
        t.right = 277,
        t.source = "holy_howl_bai_hu_yehu_btnYijian_png",
        t.visible = !0,
        t.width = 134,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.bottom = 36,
        t.height = 46,
        t.right = 189,
        t.source = "holy_howl_bai_hu_yehu_btnTiaozhan_png",
        t.width = 134,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.top = 15,
        t.visible = !0,
        t.elementsContent = [this._Image3_i(), this.todayBuyTxt0_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.tzzlCntTxt1_i(), this.smallAddBtn1_i(), this.tzzlCntTxt2_i(), this.smallAddBtn2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 212,
        t.y = 8,
        t
    },
    i.todayBuyTxt0_i = function() {
        var t = new eui.Label;
        return this.todayBuyTxt0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "今日已购买：00/10",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.x = 226,
        t.y = 10,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = -212,
        t.y = 8,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "holy_howl_bai_hu_upgrade_tzzlIcon_png",
        t.width = 34,
        t.x = -12,
        t.y = 0,
        t
    },
    i.tzzlCntTxt1_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.touchEnabled = !1,
        t.width = 180,
        t.x = 22,
        t.y = 10,
        t
    },
    i.smallAddBtn1_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn1 = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = 160,
        t.y = 8,
        t
    },
    i.tzzlCntTxt2_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.width = 137.869,
        t.x = -197.869,
        t.y = 10,
        t
    },
    i.smallAddBtn2_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn2 = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = -52,
        t.y = 8,
        t
    },
    i.bagcure_i = function() {
        var t = new eui.Group;
        return this.bagcure = t,
        t.bottom = 120,
        t.height = 170,
        t.left = 45,
        t.width = 80,
        t.elementsContent = [this.bagBtn1_i(), this.cureBtn1_i()],
        t
    },
    i.bagBtn1_i = function() {
        var t = new eui.Image;
        return this.bagBtn1 = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_bagBtn_png",
        t.width = 76,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cureBtn1_i = function() {
        var t = new eui.Image;
        return this.cureBtn1 = t,
        t.height = 69,
        t.source = "holy_howl_bai_hu_cureBtn_png",
        t.width = 75,
        t.x = 0,
        t.y = 91,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.right = 85,
        t.verticalCenter = -73,
        t.visible = !0,
        t.elementsContent = [this.bagua_i(), this.grp_highlight_i(), this.bagua_1_i(), this.bagua_2_i(), this.bagua_3_i(), this.bagua_4_i(), this.bagua_5_i(), this.bagua_6_i(), this.bagua_7_i(), this.bagua_8_i(), this._Group3_i()],
        t
    },
    i.bagua_i = function() {
        var t = new eui.Image;
        return this.bagua = t,
        t.height = 336,
        t.source = "holy_howl_bai_hu_yehu_bagua_png",
        t.visible = !0,
        t.width = 336,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_highlight_i = function() {
        var t = new eui.Group;
        return this.grp_highlight = t,
        t.visible = !0,
        t.x = 3.17,
        t.y = 5.61,
        t.elementsContent = [this.highlight_1_i(), this.highlight_2_i(), this.highlight_3_i(), this.highlight_4_i(), this.highlight_5_i(), this.highlight_6_i(), this.highlight_7_i(), this.highlight_8_i()],
        t
    },
    i.highlight_1_i = function() {
        var t = new eui.Image;
        return this.highlight_1 = t,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 93.06,
        t.y = 1.1,
        t
    },
    i.highlight_2_i = function() {
        var t = new eui.Image;
        return this.highlight_2 = t,
        t.rotation = 45,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 227.62,
        t.y = 0,
        t
    },
    i.highlight_3_i = function() {
        var t = new eui.Image;
        return this.highlight_3 = t,
        t.rotation = 90,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 325.65,
        t.y = 93.42,
        t
    },
    i.highlight_4_i = function() {
        var t = new eui.Image;
        return this.highlight_4 = t,
        t.rotation = 135,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 327.51,
        t.y = 228.48,
        t
    },
    i.highlight_5_i = function() {
        var t = new eui.Image;
        return this.highlight_5 = t,
        t.rotation = 180,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 233.65,
        t.y = 325.48,
        t
    },
    i.highlight_6_i = function() {
        var t = new eui.Image;
        return this.highlight_6 = t,
        t.rotation = 225,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 99.03,
        t.y = 327.89,
        t
    },
    i.highlight_7_i = function() {
        var t = new eui.Image;
        return this.highlight_7 = t,
        t.rotation = 270,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.x = 2.99,
        t.y = 233.48,
        t
    },
    i.highlight_8_i = function() {
        var t = new eui.Image;
        return this.highlight_8 = t,
        t.rotation = 315,
        t.source = "holy_howl_bai_hu_yehu_bg_frame_png",
        t.visible = !0,
        t.x = 0,
        t.y = 99.17,
        t
    },
    i.bagua_1_i = function() {
        var t = new eui.Group;
        return this.bagua_1 = t,
        t.visible = !0,
        t.x = 113.67,
        t.y = 19.28,
        t.elementsContent = [this.bg_1_3_i(), this.bg_1_2_i(), this.bg_1_1_i()],
        t
    },
    i.bg_1_3_i = function() {
        var t = new eui.Image;
        return this.bg_1_3 = t,
        t.source = "holy_howl_bai_hu_yehu_full_3_png",
        t.width = 106,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg_1_2_i = function() {
        var t = new eui.Image;
        return this.bg_1_2 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_2_png",
        t.x = 7.81,
        t.y = 19.5,
        t
    },
    i.bg_1_1_i = function() {
        var t = new eui.Image;
        return this.bg_1_1 = t,
        t.source = "holy_howl_bai_hu_yehu_full_1_png",
        t.width = 70,
        t.x = 18.24,
        t.y = 42.33,
        t
    },
    i.bagua_2_i = function() {
        var t = new eui.Group;
        return this.bagua_2 = t,
        t.rotation = 45,
        t.visible = !0,
        t.x = 234.42,
        t.y = 23.87,
        t.elementsContent = [this.bg_2_1_i(), this.bg_2_2_i(), this.bg_2_3_i()],
        t
    },
    i.bg_2_1_i = function() {
        var t = new eui.Image;
        return this.bg_2_1 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_1_png",
        t.width = 70,
        t.x = 18.89,
        t.y = 42.58,
        t
    },
    i.bg_2_2_i = function() {
        var t = new eui.Image;
        return this.bg_2_2 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_2_png",
        t.x = 8.94,
        t.y = 20.72,
        t
    },
    i.bg_2_3_i = function() {
        var t = new eui.Image;
        return this.bg_2_3 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bagua_3_i = function() {
        var t = new eui.Group;
        return this.bagua_3 = t,
        t.rotation = 90,
        t.visible = !0,
        t.x = 316.97,
        t.y = 113.59,
        t.elementsContent = [this.bg_3_3_i(), this.bg_3_1_i(), this.bg_3_2_i()],
        t
    },
    i.bg_3_3_i = function() {
        var t = new eui.Image;
        return this.bg_3_3 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg_3_1_i = function() {
        var t = new eui.Image;
        return this.bg_3_1 = t,
        t.source = "holy_howl_bai_hu_yehu_full_1_png",
        t.width = 70,
        t.x = 18.59,
        t.y = 43.392,
        t
    },
    i.bg_3_2_i = function() {
        var t = new eui.Image;
        return this.bg_3_2 = t,
        t.source = "holy_howl_bai_hu_yehu_full_2_png",
        t.width = 89,
        t.x = 8.03,
        t.y = 21.66,
        t
    },
    i.bagua_4_i = function() {
        var t = new eui.Group;
        return this.bagua_4 = t,
        t.rotation = 135,
        t.visible = !0,
        t.x = 310.36,
        t.y = 235.01,
        t.elementsContent = [this.bg_4_1_i(), this.bg_4_2_i(), this.bg_4_3_i()],
        t
    },
    i.bg_4_1_i = function() {
        var t = new eui.Image;
        return this.bg_4_1 = t,
        t.source = "holy_howl_bai_hu_yehu_full_1_png",
        t.width = 70,
        t.x = 18.43,
        t.y = 42.21,
        t
    },
    i.bg_4_2_i = function() {
        var t = new eui.Image;
        return this.bg_4_2 = t,
        t.source = "holy_howl_bai_hu_yehu_full_2_png",
        t.width = 89,
        t.x = 8.71,
        t.y = 20.9,
        t
    },
    i.bg_4_3_i = function() {
        var t = new eui.Image;
        return this.bg_4_3 = t,
        t.source = "holy_howl_bai_hu_yehu_full_3_png",
        t.width = 106,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bagua_5_i = function() {
        var t = new eui.Group;
        return this.bagua_5 = t,
        t.rotation = 180,
        t.visible = !0,
        t.x = 221.21,
        t.y = 316.97,
        t.elementsContent = [this.bg_5_1_i(), this.bg_5_3_i(), this.bg_5_2_i()],
        t
    },
    i.bg_5_1_i = function() {
        var t = new eui.Image;
        return this.bg_5_1 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_1_png",
        t.width = 70,
        t.x = 19.71,
        t.y = 43.01,
        t
    },
    i.bg_5_3_i = function() {
        var t = new eui.Image;
        return this.bg_5_3 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg_5_2_i = function() {
        var t = new eui.Image;
        return this.bg_5_2 = t,
        t.source = "holy_howl_bai_hu_yehu_full_2_png",
        t.width = 89,
        t.x = 8.81,
        t.y = 21.97,
        t
    },
    i.bagua_6_i = function() {
        var t = new eui.Group;
        return this.bagua_6 = t,
        t.rotation = 225,
        t.visible = !0,
        t.x = 101.02,
        t.y = 310.67,
        t.elementsContent = [this.bg_6_1_i(), this.bg_6_2_i(), this.bg_6_3_i()],
        t
    },
    i.bg_6_1_i = function() {
        var t = new eui.Image;
        return this.bg_6_1 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_1_png",
        t.width = 70,
        t.x = 19.34,
        t.y = 41.83,
        t
    },
    i.bg_6_2_i = function() {
        var t = new eui.Image;
        return this.bg_6_2 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_2_png",
        t.x = 8.29,
        t.y = 19.97,
        t
    },
    i.bg_6_3_i = function() {
        var t = new eui.Image;
        return this.bg_6_3 = t,
        t.height = 27,
        t.source = "holy_howl_bai_hu_yehu_full_3_png",
        t.width = 106,
        t.x = 0,
        t.y = -.648,
        t
    },
    i.bagua_7_i = function() {
        var t = new eui.Group;
        return this.bagua_7 = t,
        t.rotation = 270,
        t.visible = !0,
        t.x = 18.17,
        t.y = 221.68,
        t.elementsContent = [this.bg_7_2_i(), this.bg_7_3_i(), this.bg_7_1_i()],
        t
    },
    i.bg_7_2_i = function() {
        var t = new eui.Image;
        return this.bg_7_2 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_2_png",
        t.x = 8.99,
        t.y = 21.59,
        t
    },
    i.bg_7_3_i = function() {
        var t = new eui.Image;
        return this.bg_7_3 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_3_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.bg_7_1_i = function() {
        var t = new eui.Image;
        return this.bg_7_1 = t,
        t.height = 27,
        t.source = "holy_howl_bai_hu_yehu_full_1_png",
        t.width = 72,
        t.x = 18.134,
        t.y = 41.946,
        t
    },
    i.bagua_8_i = function() {
        var t = new eui.Group;
        return this.bagua_8 = t,
        t.rotation = 315,
        t.visible = !0,
        t.x = 24.44,
        t.y = 101.34,
        t.elementsContent = [this.bg_8_1_i(), this.bg_8_2_i(), this.bg_8_3_i()],
        t
    },
    i.bg_8_1_i = function() {
        var t = new eui.Image;
        return this.bg_8_1 = t,
        t.source = "holy_howl_bai_hu_yehu_thin_1_png",
        t.width = 70,
        t.x = 19.23,
        t.y = 41.96,
        t
    },
    i.bg_8_2_i = function() {
        var t = new eui.Image;
        return this.bg_8_2 = t,
        t.source = "holy_howl_bai_hu_yehu_full_2_png",
        t.width = 89,
        t.x = 8.85,
        t.y = 20.48,
        t
    },
    i.bg_8_3_i = function() {
        var t = new eui.Image;
        return this.bg_8_3 = t,
        t.height = 27,
        t.source = "holy_howl_bai_hu_yehu_full_3_png",
        t.width = 106,
        t.x = 0,
        t.y = -1.296,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 24.31,
        t.y = 21.28,
        t.elementsContent = [this.seal_1_i(), this.seal_2_i(), this.seal_3_i(), this.seal_4_i(), this.seal_5_i(), this.seal_6_i(), this.seal_7_i(), this.seal_8_i()],
        t
    },
    i.seal_1_i = function() {
        var t = new eui.Image;
        return this.seal_1 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.visible = !0,
        t.width = 45,
        t.x = 120,
        t.y = 0,
        t
    },
    i.seal_2_i = function() {
        var t = new eui.Image;
        return this.seal_2 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 201,
        t.y = 29.87,
        t
    },
    i.seal_3_i = function() {
        var t = new eui.Image;
        return this.seal_3 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 237.44,
        t.y = 115.19,
        t
    },
    i.seal_4_i = function() {
        var t = new eui.Image;
        return this.seal_4 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 201,
        t.y = 195.8,
        t
    },
    i.seal_5_i = function() {
        var t = new eui.Image;
        return this.seal_5 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 120,
        t.y = 229.57,
        t
    },
    i.seal_6_i = function() {
        var t = new eui.Image;
        return this.seal_6 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 35,
        t.y = 196.69,
        t
    },
    i.seal_7_i = function() {
        var t = new eui.Image;
        return this.seal_7 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 0,
        t.y = 111.69,
        t
    },
    i.seal_8_i = function() {
        var t = new eui.Image;
        return this.seal_8 = t,
        t.height = 64,
        t.source = "holy_howl_bai_hu_yehu_seal_png",
        t.width = 45,
        t.x = 38,
        t.y = 29.69,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HolyHowlBaiHuZhouhuSkin.exml"] = window.HolyHowlBaiHuZhouhuSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "scoreTxt_2", "scoreTxt_1", "jinruduizhanBtn", "tiaozhanBtn", "cdTxt", "grp_cd", "bagBtn0", "cureBtn0", "bagcure", "todayBuyTxt", "tzzlCntTxt", "smallAddBtn", "tzzlCntTxt0", "smallAddBtn0"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this._Image2_i(), this.scoreTxt_2_i(), this._Label1_i(), this._Image3_i(), this.scoreTxt_1_i(), this._Label2_i(), this.jinruduizhanBtn_i(), this.tiaozhanBtn_i(), this.grp_cd_i(), this.bagcure_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "holy_howl_bai_hu_bg_png",
        t.top = 0,
        t.visible = !0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 579,
        t.horizontalCenter = -254,
        t.source = "holy_howl_bai_hu_warning_petDisplay_zh_png",
        t.verticalCenter = -20.5,
        t.width = 722,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 189,
        t.right = 65,
        t.source = "holy_howl_bai_hu_zhouhu_scoreBg_png",
        t.verticalCenter = 66.5,
        t.visible = !0,
        t.width = 438,
        t
    },
    i.scoreTxt_2_i = function() {
        var t = new eui.Label;
        return this.scoreTxt_2 = t,
        t.fontFamily = "MFShangHei",
        t.right = 191,
        t.size = 60,
        t.text = "00/30",
        t.textAlign = "right",
        t.textColor = 16769106,
        t.verticalCenter = 103,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.right = 255,
        t.size = 36,
        t.text = "累计承受回合",
        t.textColor = 16776661,
        t.verticalCenter = 14,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 189,
        t.right = 65,
        t.source = "holy_howl_bai_hu_zhouhu_scoreBg_png",
        t.verticalCenter = -134.5,
        t.width = 438,
        t
    },
    i.scoreTxt_1_i = function() {
        var t = new eui.Label;
        return this.scoreTxt_1 = t,
        t.fontFamily = "MFShangHei",
        t.right = 86,
        t.size = 60,
        t.text = "00000/80000",
        t.textAlign = "right",
        t.textColor = 16769106,
        t.verticalCenter = -98,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.right = 255,
        t.size = 36,
        t.text = "累计造成伤害",
        t.textColor = 16776661,
        t.verticalCenter = -187,
        t
    },
    i.jinruduizhanBtn_i = function() {
        var t = new eui.Image;
        return this.jinruduizhanBtn = t,
        t.bottom = 35,
        t.height = 46,
        t.right = 199,
        t.source = "holy_howl_bai_hu_zhouhu_jinruduizhanBtn_png",
        t.visible = !0,
        t.width = 134,
        t
    },
    i.tiaozhanBtn_i = function() {
        var t = new eui.Image;
        return this.tiaozhanBtn = t,
        t.bottom = 35,
        t.height = 46,
        t.right = 199,
        t.source = "holy_howl_bai_hu_final_tiaozhanBtn_png",
        t.visible = !0,
        t.width = 134,
        t
    },
    i.grp_cd_i = function() {
        var t = new eui.Group;
        return this.grp_cd = t,
        t.bottom = 98,
        t.right = 123,
        t.elementsContent = [this._Image4_i(), this.cdTxt_i(), this._Label3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 33,
        t.source = "holy_howl_bai_hu_zhouhu_brownPiece_png",
        t.width = 277,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cdTxt_i = function() {
        var t = new eui.Label;
        return this.cdTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "00:00",
        t.textAlign = "right",
        t.textColor = 16776661,
        t.visible = !0,
        t.x = 200,
        t.y = 7,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "距离挑战结束还剩：",
        t.textColor = 16776661,
        t.visible = !0,
        t.x = 25,
        t.y = 7,
        t
    },
    i.bagcure_i = function() {
        var t = new eui.Group;
        return this.bagcure = t,
        t.bottom = 120,
        t.height = 170,
        t.left = 45,
        t.width = 80,
        t.elementsContent = [this.bagBtn0_i(), this.cureBtn0_i()],
        t
    },
    i.bagBtn0_i = function() {
        var t = new eui.Image;
        return this.bagBtn0 = t,
        t.height = 70,
        t.source = "holy_howl_bai_hu_bagBtn_png",
        t.width = 76,
        t.x = 0,
        t.y = 0,
        t
    },
    i.cureBtn0_i = function() {
        var t = new eui.Image;
        return this.cureBtn0 = t,
        t.height = 69,
        t.source = "holy_howl_bai_hu_cureBtn_png",
        t.width = 75,
        t.x = 0,
        t.y = 91,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.top = 15,
        t.visible = !0,
        t.elementsContent = [this._Image5_i(), this.todayBuyTxt_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.tzzlCntTxt_i(), this.smallAddBtn_i(), this.tzzlCntTxt0_i(), this.smallAddBtn0_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 212,
        t.y = 8,
        t
    },
    i.todayBuyTxt_i = function() {
        var t = new eui.Label;
        return this.todayBuyTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "今日已购买：00/10",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.x = 226,
        t.y = 10,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 178,
        t.x = 0,
        t.y = 8,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_topTipBg_png",
        t.width = 187.986,
        t.x = -221.986,
        t.y = 8,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "holy_howl_bai_hu_upgrade_tzzlIcon_png",
        t.width = 34,
        t.x = -12,
        t.y = 0,
        t
    },
    i.tzzlCntTxt_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.touchEnabled = !1,
        t.width = 180,
        t.x = 22,
        t.y = 10,
        t
    },
    i.smallAddBtn_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = 160,
        t.y = 8,
        t
    },
    i.tzzlCntTxt0_i = function() {
        var t = new eui.Label;
        return this.tzzlCntTxt0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textAlign = "left",
        t.textColor = 16514895,
        t.width = 159.174,
        t.x = -211.185,
        t.y = 10,
        t
    },
    i.smallAddBtn0_i = function() {
        var t = new eui.Image;
        return this.smallAddBtn0 = t,
        t.height = 21,
        t.source = "holy_howl_bai_hu_upgrade_smallAddBtn_png",
        t.width = 21,
        t.x = -52,
        t.y = 8,
        t
    },
    e
} (eui.Skin);