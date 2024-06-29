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
towerOfCouragePanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "TowerOfCourageBossItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.setInfo = function(e, t, i) {
            this.txtName.text = PetXMLInfo.getName(e),
            this.imgIcon.source = ClientConfig.getPetHeadPath(e),
            this.imgBoss.visible = !1,
            this.imgLocked.visible = !1,
            this.imgSelected.visible = !1,
            this.imgDefeated.visible = !1
        },
        t
    } (eui.Component);
    e.BossItem = t,
    __reflect(t.prototype, "towerOfCouragePanel.BossItem")
} (towerOfCouragePanel || (towerOfCouragePanel = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
towerOfCouragePanel; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "towerOfCouragePanel.MainPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "towerOfCouragePanel.PanelConst");
    var i = function() {
        function e() {}
        return e.BOSS_POSITION_3 = [291, 95, 463, 220, 632, 150],
        e.BOSS_POSITION_4 = [291, 222, 463, 95, 632, 223, 805, 155],
        e.BOSS_POSITION_5 = [291, 95, 463, 220, 632, 93, 807, 223, 980, 150],
        e
    } ();
    e.PositionConst = i,
    __reflect(i.prototype, "towerOfCouragePanel.PositionConst")
} (towerOfCouragePanel || (towerOfCouragePanel = {}));
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
towerOfCouragePanel; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "TowerOfCourageLevelMenuItemSkin",
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var e;
            e = this.data.index < 10 ? "00" + this.data.index: this.data.index < 100 ? "0" + this.data.index: "" + this.data.index,
            this.txtNumLevel.text = e,
            this.imgLock.visible = 0 == this.data.state,
            this.imgUnlock.visible = 0 != this.data.state,
            this.imgIsFighting.visible = 1 == this.data.state,
            this.imgDefeated.visible = 2 == this.data.state,
            this.imgFastFight.visible = 3 == this.data.state;
            var t = 0 == this.data.state ? 8757203 : 4187130;
            this.txtLevel.textColor = this.txtNumLevel.textColor = t,
            this.touchEnabled = this.touchChildren = 0 != this.data.state
        },
        t
    } (eui.ItemRenderer);
    e.LevelMenuItem = t,
    __reflect(t.prototype, "towerOfCouragePanel.LevelMenuItem")
} (towerOfCouragePanel || (towerOfCouragePanel = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(e) {
            try {
                u(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                u(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function u(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
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
                r = i[1],
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
            i = t.call(e, u)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
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
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
towerOfCouragePanel; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "TowerOfCourageSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.imgItem1.source = ClientConfig.getItemIcon(1400152),
            this.imgItem2.source = ClientConfig.getItemIcon(1400153),
            this.imgItem0.source = ClientConfig.getItemIcon(2500005),
            t.prototype.initBtnClose.call(this, "tower_of_courage_imgtitle_png", this,
            function() {
                e.service.closeModule()
            },
            this),
            this.initBtnHelpById(96),
            this.scroller.left = DeviceInfoManager.adapterOffSetX,
            this.addEvent(),
            this.initConfig(),
            this.initLevelMenu()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getBitSet([636, 1000577],
            function(t) {
                e.imgSwitchOff.visible = 0 == t[0],
                e.imgSwitchOn.visible = 1 == t[0],
                e.isSwitchOn = 1 == t[0],
                KTool.getMultiValue([18709],
                function(i) {
                    e.numLevelHasDefeat = i[0],
                    e.txtNumBox.text = i[0] + "/5",
                    e._boxEffect && e._boxEffect.parent && e._boxEffect.parent.removeChild(e._boxEffect);
                    var n = "open";
                    0 == t[1] && 5 == i[0] && (n = "canopen"),
                    e._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", n),
                    e._boxEffect.touchEnabled = !0,
                    e._boxEffect.scaleX = e.imgBox.width / e._boxEffect.width,
                    e._boxEffect.scaleY = e.imgBox.height / e._boxEffect.height,
                    e._boxEffect.x = e.imgBox.x,
                    e._boxEffect.y = e.imgBox.y,
                    e.imgBox.visible = !1,
                    e.imgBox.parent.addChild(e._boxEffect),
                    "open" == n ? e._boxEffect.gotoAndStop(1 == t[1] ? e._boxEffect.totalFrames: 0) : e._boxEffect.gotoAndPlay(0, -1),
                    ImageButtonUtil.remove(e._boxEffect),
                    "canopen" == n ? ImageButtonUtil.add(e._boxEffect,
                    function() {
                        SocketConnection.sendByQueue(42395, [117, 4, 0, 0],
                        function() {
                            e.update()
                        })
                    },
                    e) : ImageButtonUtil.add(e._boxEffect,
                    function() {
                        tipsPop.TipsPop.openItemPop({
                            id: 2300008
                        })
                    },
                    e)
                })
            })
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.service.showPetBag()
            },
            this),
            this.levelMenu.addEventListener(eui.ItemTapEvent.ITEM_TAP,
            function() {
                e.levelMenu.selectedItem.index;
                e.numLevelHasDefeat < 5 ? e.updateRightView() : e.updateRightView()
            },
            this),
            this.service.registerItemUpdateForText(1400152, this.txtNumItem1, this),
            this.service.registerItemUpdateForText(1400153, this.txtNumItem2, this),
            this.service.registerItemUpdateForText(2500005, this.txtNumItem0, this),
            ImageButtonUtil.add(this.btnFight1, this.fight, this),
            ImageButtonUtil.add(this.btnFight2, this.fight, this),
            ImageButtonUtil.add(this.btnFastFight, this.fastFight, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    if (ItemManager.getNumByID(1400152) <= 0) return void BubblerManager.getInstance().showText("您的激励模组数量不足！");
                    SocketConnection.sendByQueue(42395, [117, 1, 1, 0],
                    function() {
                        e.imgSwitchOn.visible = !0,
                        e.imgSwitchOff.visible = !1,
                        e.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                e.isSwitchOn && SocketConnection.sendByQueue(42395, [117, 1, 0, 0],
                function() {
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this)
        },
        i.prototype.fight = function() {
            var e = this;
            this.numLevelHasDefeat < 5 ? (KTool.getMultiValue([108048, 108049],
            function(t) {
                e.oldDefeatedLevel = t[0],
                e.curIsNoLock = BitUtil.getBit(t[1], e.curLevel - 1) > 0
            }), SocketConnection.sendByQueue(42396, [117, this.curLevel, 1])) : Alarm.show("剩余挑战次数不足！")
        },
        i.prototype.fastFight = function() {
            var e = this;
            this.numLevelHasDefeat < 5 ? ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0 ? SocketConnection.sendByQueue(42395, [117, 2, this.curLevel, 0],
            function() {
                e.update(),
                e.updateRightView()
            }) : Alarm.show("需要记忆作战模组才能进行扫荡！") : Alarm.show("剩余挑战次数不足！")
        },
        i.prototype.initConfig = function() {
            this.levelData = config.PveBossBraveTower.getItems()
        },
        i.prototype.initLevelMenu = function(t) {
            var i = this;
            void 0 === t && (t = 0),
            this.levelMenu.itemRenderer = e.LevelMenuItem;
            var n = [],
            o = this.levelData.length;
            KTool.getMultiValue([108048, 108049, 18710],
            function(e) {
                i.numDefeatedLevel = e[0];
                for (var r = e[1], a = 0; o > a; a++) {
                    var s = {};
                    s.index = a + 1,
                    s.index <= i.numDefeatedLevel ? s.state = 2 : s.index == i.numDefeatedLevel + 1 ? s.state = 1 : s.state = 0,
                    1 == KTool.getBit(r, s.index) && (2 == s.state ? s.state = 3 : console.error("已战胜状态与可扫荡状态冲突，当前obj.state=" + s.state)),
                    n[a] = s
                }
                i.levelMenu.dataProvider = new eui.ArrayCollection(n),
                i.curLevel = t > 0 ? t: i.numDefeatedLevel + 1,
                i.curLevel = i.curLevel > 30 ? 30 : i.curLevel,
                i.levelMenu.selectedIndex = i.curLevel - 1,
                egret.setTimeout(function() {
                    i._goToIdx(i.curLevel - 1)
                },
                i, 100),
                i.updateRightView()
            })
        },
        i.prototype._goToIdx = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, o, r;
                return __generator(this,
                function(a) {
                    return t = 86,
                    i = this.scroller.height,
                    n = this.scroller.viewport.contentHeight,
                    o = n - i,
                    r = this.levelMenu.layout.gap,
                    [2, DisplayUtil.ScrollerToNumAsync(e, "vertical", t, this.scroller, r, 0, o)]
                })
            })
        },
        i.prototype.updateRightView = function() {
            var t = this,
            i = this.levelMenu.selectedItem.index;
            this.curLevel = i;
            for (var n, o = 0,
            r = this.levelData; o < r.length; o++) {
                var a = r[o];
                if (a.id == i) {
                    n = a;
                    break
                }
            }
            n || console.error("curData not found");
            var s;
            s = 10 > i ? "00" + i: 100 > i ? "0" + i: "" + i,
            this.txtLevel.text = s + "层";
            for (var u = n.rewardid.split("_"), _ = n.rewardnum.split("_"), g = u.length - 2, h = 0; 3 > h; h++) this["imgRewardItem" + (h + 1)].visible = !1,
            this["imgRewardItemBG" + (h + 1)].visible = !1,
            this["txtRewardItem" + (h + 1)].visible = !1,
            ImageButtonUtil.remove(this["imgRewardItem" + (h + 1)]);
            for (var m = function(e) {
                c["imgRewardItem" + (e + 1)].visible = !0,
                c["imgRewardItemBG" + (e + 1)].visible = !0,
                c["txtRewardItem" + (e + 1)].visible = !0,
                c["imgRewardItem" + (e + 1)].source = ClientConfig.getItemIcon(u[e]),
                c["txtRewardItem" + (e + 1)].text = _[e],
                ImageButtonUtil.add(c["imgRewardItem" + (e + 1)],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: +u[e]
                    })
                },
                c)
            },
            c = this, h = 0; g > h; h++) m(h);
            this.txtContent1.text = n.raidunlocktext,
            this.txtContent2.text = n.bossgettext || "首次战胜该层所有精灵，即可解锁下一层挑战";
            var l = 108056 + Math.floor((i - 1) / 4);
            l > 108058 && l++,
            KTool.getMultiValue([l, 18710],
            function(o) {
                var r = o[0] >> 8 * ((i - 1) % 4) & 255;
                t.txtNumDefeat.text = (r > n.bossgetarg ? n.bossgetarg: r) + "/" + n.bossgetarg;
                for (var a = n.bosslist.split("_"), s = n.bigbossid.split("_")[0], u = 3; 5 >= u; u++) t["imgLine" + u].visible = u == a.length;
                var _ = 0,
                g = e.PositionConst["BOSS_POSITION_" + a.length],
                h = 0;
                t.curIndex = h + 1,
                t.groupMonster.removeChildren();
                var m = !1;
                for (var c in a) {
                    var l = a[c],
                    f = new e.BossItem,
                    w = void 0;
                    w = h > +c ? 2 : +c == h ? 1 : 0;
                    var v = +s > 0 && +c == a.length - 1;
                    v && (m = !0),
                    f.setInfo( + l, v, w),
                    f.x = g[_++],
                    f.y = g[_++],
                    t.groupMonster.addChild(f)
                }
                t.groupNumDefeat.visible = m
            });
            var f = 3 == this.levelMenu.selectedItem.state;
            this.btnFight1.visible = !f,
            this.btnFight2.visible = f,
            this.btnFastFight.visible = f
        },
        i.prototype.onFightOver = function() {
            var e = this;
            this.initLevelMenu(this.curLevel),
            FightManager.isWin && KTool.getMultiValue([18710, 108048, 18709, 108049],
            function(t) {
                var i = t[1] + 1;
                i > 30 && (i = 30),
                BitUtil.getBit(t[3], e.curLevel - 1) > 0 && !e.curIsNoLock && Alarm.show("恭喜你开启" + e.curLevel + "层的扫荡功能，可以直接扫荡本层获得奖励了！"),
                t[1] > e.oldDefeatedLevel && 5 != t[2] && (BubblerManager.getInstance().showText("已挑战通关勇者之塔第" + e.txtLevel.text), Alarm.show("你解锁了下一层的挑战！"), e.levelMenu.selectedIndex = i - 1, egret.setTimeout(function() {
                    e._goToIdx(i - 1)
                },
                e, 100), e.updateRightView())
            })
        },
        i.prototype.destroy = function() {
            this.service.unregisterItems(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "towerOfCouragePanel.MainPanel")
} (towerOfCouragePanel || (towerOfCouragePanel = {}));
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
towerOfCouragePanel; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.init([{
                panelName: e.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.TowerOfCouragePanel = t,
    __reflect(t.prototype, "towerOfCouragePanel.TowerOfCouragePanel")
} (towerOfCouragePanel || (towerOfCouragePanel = {}));
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
generateEUI.paths["resource/eui_skins/TowerOfCourageBossItemSkin.exml"] = window.TowerOfCourageBossItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtName", "imgSelected", "imgIcon", "imgBoss", "imgDefeated", "imgLocked"],
        this.currentState = "up",
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.imgSelected_i(), this.imgIcon_i(), this.imgBoss_i(), this.imgDefeated_i(), this.imgLocked_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_boss_item_imgbg_png",
        e.x = -3,
        e.y = -3,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵名字精灵名",
        e.textAlign = "center",
        e.textColor = 3787242,
        e.width = 112,
        e.x = -6,
        e.y = 108,
        e
    },
    i.imgSelected_i = function() {
        var e = new eui.Image;
        return this.imgSelected = e,
        e.source = "tower_of_courage_boss_item_imgselected_png",
        e.visible = !1,
        e.x = -10,
        e.y = -10,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 96,
        e.source = "tower_of_courage_boss_item_imgicon_png",
        e.width = 96,
        e.x = 2,
        e.y = 2,
        e
    },
    i.imgBoss_i = function() {
        var e = new eui.Image;
        return this.imgBoss = e,
        e.source = "tower_of_courage_boss_item_imgboss_png",
        e.visible = !1,
        e.x = -6,
        e.y = -33,
        e
    },
    i.imgDefeated_i = function() {
        var e = new eui.Image;
        return this.imgDefeated = e,
        e.source = "tower_of_courage_boss_item_imgdefeated_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgLocked_i = function() {
        var e = new eui.Image;
        return this.imgLocked = e,
        e.source = "tower_of_courage_boss_item_imglocked_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TowerOfCourageLevelMenuItemSkin.exml"] = window.TowerOfCourageLevelMenuItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgSelected", "imgLock", "imgUnlock", "imgFastFight", "imgIsFighting", "imgDefeated", "txtNumLevel", "txtLevel"],
        this.currentState = "up",
        this.elementsContent = [this.imgSelected_i(), this.imgLock_i(), this.imgUnlock_i(), this.imgFastFight_i(), this.imgIsFighting_i(), this.imgDefeated_i(), this.txtNumLevel_i(), this.txtLevel_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("imgSelected", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgSelected_i = function() {
        var e = new eui.Image;
        return this.imgSelected = e,
        e.source = "tower_of_courage_level_menu_item_imgselected_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgLock_i = function() {
        var e = new eui.Image;
        return this.imgLock = e,
        e.source = "tower_of_courage_level_menu_item_imglock_png",
        e.visible = !1,
        e.x = 9,
        e.y = 10,
        e
    },
    i.imgUnlock_i = function() {
        var e = new eui.Image;
        return this.imgUnlock = e,
        e.source = "tower_of_courage_level_menu_item_imgunlock_png",
        e.visible = !1,
        e.x = 9,
        e.y = 10,
        e
    },
    i.imgFastFight_i = function() {
        var e = new eui.Image;
        return this.imgFastFight = e,
        e.source = "tower_of_courage_level_menu_item_imgfastfight_png",
        e.visible = !1,
        e.x = 184,
        e.y = 29,
        e
    },
    i.imgIsFighting_i = function() {
        var e = new eui.Image;
        return this.imgIsFighting = e,
        e.source = "tower_of_courage_level_menu_item_imgisfighting_png",
        e.visible = !1,
        e.x = 180,
        e.y = 28,
        e
    },
    i.imgDefeated_i = function() {
        var e = new eui.Image;
        return this.imgDefeated = e,
        e.source = "tower_of_courage_level_menu_item_imgdefeated_png",
        e.visible = !1,
        e.x = 181,
        e.y = 28,
        e
    },
    i.txtNumLevel_i = function() {
        var e = new eui.Label;
        return this.txtNumLevel = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "001",
        e.textColor = 4187130,
        e.visible = !0,
        e.x = 34,
        e.y = 30,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "层",
        e.textColor = 8757203,
        e.visible = !0,
        e.x = 87,
        e.y = 29,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TowerOfCourageSkin.exml"] = window.TowerOfCourageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnHelp", "btnClose", "groupMonster", "txtNumDefeat", "groupNumDefeat", "imgRewardItemBG1", "imgRewardItemBG2", "imgRewardItemBG3", "imgRewardItem1", "imgRewardItem2", "imgRewardItem3", "txtRewardItem1", "txtRewardItem2", "txtRewardItem3", "txtContent2", "txtContent1", "btnFastFight", "btnFight2", "btnFight1", "txtLevel", "btnPet", "btnCure", "imgLine5", "imgLine4", "imgLine3", "txtNumBox", "imgBox", "txtNumItem2", "imgItem2", "txtNumItem0", "imgItem0", "txtNumItem1", "imgItem1", "imgSwitchOff", "imgSwitchOn", "levelMenu", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this.groupMonster_i(), this._Group2_i(), this._Group7_i(), this.scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "tower_of_courage_bg_jpg",
        e.top = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imglevelmenubg_png",
        e.visible = !0,
        e.x = 16,
        e.y = 56,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.btnHelp_i(), this.btnClose_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imgtitlebg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "tower_of_courage_btnhelp_png",
        e.x = 259,
        e.y = 13,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Group;
        return this.btnClose = e,
        e.height = 48,
        e.visible = !0,
        e.width = 205,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this._Image5_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imgtitle_png",
        e.visible = !0,
        e.x = 50,
        e.y = 8,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_btnback_png",
        e.x = 14,
        e.y = 5,
        e
    },
    i.groupMonster_i = function() {
        var e = new eui.Group;
        return this.groupMonster = e,
        e.height = 0,
        e.horizontalCenter = -568,
        e.visible = !0,
        e.width = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.horizontalCenter = 124,
        e.y = 66,
        e.elementsContent = [this._Image6_i(), this.groupNumDefeat_i(), this.imgRewardItemBG1_i(), this.imgRewardItemBG2_i(), this.imgRewardItemBG3_i(), this.imgRewardItem1_i(), this.imgRewardItem2_i(), this.imgRewardItem3_i(), this.txtRewardItem1_i(), this.txtRewardItem2_i(), this.txtRewardItem3_i(), this.txtContent2_i(), this.txtContent1_i(), this._Image7_i(), this._Image8_i(), this.btnFastFight_i(), this.btnFight2_i(), this.btnFight1_i(), this._Image9_i(), this._Image10_i(), this.txtLevel_i(), this.btnPet_i(), this.btnCure_i(), this.imgLine5_i(), this.imgLine4_i(), this.imgLine3_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imgrightbg_png",
        e.x = 1,
        e.y = 308,
        e
    },
    i.groupNumDefeat_i = function() {
        var e = new eui.Group;
        return this.groupNumDefeat = e,
        e.width = 225,
        e.x = 556,
        e.y = 457,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this._Label1_i(), this.txtNumDefeat_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.horizontalAlign = "center",
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "BOSS累计击败：",
        e.textColor = 5752317,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtNumDefeat_i = function() {
        var e = new eui.Label;
        return this.txtNumDefeat = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 5752317,
        e.x = 130,
        e.y = 0,
        e
    },
    i.imgRewardItemBG1_i = function() {
        var e = new eui.Image;
        return this.imgRewardItemBG1 = e,
        e.height = 60,
        e.source = "tower_of_courage_rewarditem_png",
        e.width = 60,
        e.x = 547,
        e.y = 368,
        e
    },
    i.imgRewardItemBG2_i = function() {
        var e = new eui.Image;
        return this.imgRewardItemBG2 = e,
        e.height = 60,
        e.source = "tower_of_courage_rewarditem_png",
        e.width = 60,
        e.x = 638,
        e.y = 368,
        e
    },
    i.imgRewardItemBG3_i = function() {
        var e = new eui.Image;
        return this.imgRewardItemBG3 = e,
        e.height = 60,
        e.source = "tower_of_courage_rewarditem_png",
        e.width = 60,
        e.x = 729,
        e.y = 368,
        e
    },
    i.imgRewardItem1_i = function() {
        var e = new eui.Image;
        return this.imgRewardItem1 = e,
        e.height = 50,
        e.width = 50,
        e.x = 552,
        e.y = 373,
        e
    },
    i.imgRewardItem2_i = function() {
        var e = new eui.Image;
        return this.imgRewardItem2 = e,
        e.height = 50,
        e.width = 50,
        e.x = 643,
        e.y = 373,
        e
    },
    i.imgRewardItem3_i = function() {
        var e = new eui.Image;
        return this.imgRewardItem3 = e,
        e.height = 50,
        e.width = 50,
        e.x = 734,
        e.y = 373,
        e
    },
    i.txtRewardItem1_i = function() {
        var e = new eui.Label;
        return this.txtRewardItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 25,
        e.x = 576.267,
        e.y = 409.1,
        e
    },
    i.txtRewardItem2_i = function() {
        var e = new eui.Label;
        return this.txtRewardItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 25,
        e.x = 667.267,
        e.y = 409.1,
        e
    },
    i.txtRewardItem3_i = function() {
        var e = new eui.Label;
        return this.txtRewardItem3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "000",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 25,
        e.x = 758.267,
        e.y = 409.1,
        e
    },
    i.txtContent2_i = function() {
        var e = new eui.Label;
        return this.txtContent2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 9157375,
        e.width = 332,
        e.x = 130,
        e.y = 359,
        e
    },
    i.txtContent1_i = function() {
        var e = new eui.Label;
        return this.txtContent1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 9157375,
        e.width = 332,
        e.x = 130,
        e.y = 466,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_txttitle1_png",
        e.x = 122,
        e.y = 329,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_txttitle3_png",
        e.x = 529,
        e.y = 329,
        e
    },
    i.btnFastFight_i = function() {
        var e = new eui.Image;
        return this.btnFastFight = e,
        e.source = "tower_of_courage_btnfastfight_png",
        e.visible = !0,
        e.x = 671,
        e.y = 482,
        e
    },
    i.btnFight2_i = function() {
        var e = new eui.Image;
        return this.btnFight2 = e,
        e.source = "tower_of_courage_btnfight_png",
        e.visible = !0,
        e.x = 528,
        e.y = 482,
        e
    },
    i.btnFight1_i = function() {
        var e = new eui.Image;
        return this.btnFight1 = e,
        e.source = "tower_of_courage_btnfight_png",
        e.visible = !1,
        e.x = 600,
        e.y = 482,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_txttitle2_png",
        e.x = 122,
        e.y = 436,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imglevelbg_png",
        e.x = 0,
        e.y = 2,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "REEJI",
        e.italic = !0,
        e.size = 24,
        e.text = "001层",
        e.textColor = 3787242,
        e.width = 100,
        e.x = 23,
        e.y = 0,
        e
    },
    i.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "tower_of_courage_btnpet_png",
        e.x = 28,
        e.y = 363,
        e
    },
    i.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "tower_of_courage_btncure_png",
        e.x = 28,
        e.y = 443,
        e
    },
    i.imgLine5_i = function() {
        var e = new eui.Image;
        return this.imgLine5 = e,
        e.source = "tower_of_courage_xianlu1_png",
        e.visible = !1,
        e.x = 57,
        e.y = 59,
        e
    },
    i.imgLine4_i = function() {
        var e = new eui.Image;
        return this.imgLine4 = e,
        e.source = "tower_of_courage_xianlu2_png",
        e.visible = !1,
        e.x = 53,
        e.y = 60,
        e
    },
    i.imgLine3_i = function() {
        var e = new eui.Image;
        return this.imgLine3 = e,
        e.source = "tower_of_courage_xianlu3_png",
        e.visible = !1,
        e.x = 57,
        e.y = 96,
        e
    },
    i._Group7_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.right = 21,
        e.y = 12,
        e.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.width = 414,
        e.x = -47,
        e.y = 1,
        e.elementsContent = [this._Image11_i(), this._Label2_i(), this.txtNumBox_i(), this.imgBox_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "tower_of_courage_imgboxbg_png",
        e.x = 39,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "每日肃清任意五层可得",
        e.textColor = 9157375,
        e.x = 126,
        e.y = 5,
        e
    },
    i.txtNumBox_i = function() {
        var e = new eui.Label;
        return this.txtNumBox = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "0/5",
        e.textColor = 4187130,
        e.x = 374,
        e.y = 5,
        e
    },
    i.imgBox_i = function() {
        var e = new eui.Image;
        return this.imgBox = e,
        e.source = "tower_of_courage_imgbox_png",
        e.x = 316,
        e.y = 1,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 415,
        e.y = 0,
        e.elementsContent = [this._Image12_i(), this.txtNumItem2_i(), this.imgItem2_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        e.source = "tower_of_courage_imgitem2bg_png",
        e.width = 99.34,
        e.x = 111.66,
        e.y = 6,
        e
    },
    i.txtNumItem2_i = function() {
        var e = new eui.Label;
        return this.txtNumItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "999",
        e.textColor = 12834813,
        e.x = 165,
        e.y = 7,
        e
    },
    i.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.height = 30,
        e.width = 30,
        e.x = 121,
        e.y = 2,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 304,
        e.y = 0,
        e.elementsContent = [this._Image13_i(), this.txtNumItem0_i(), this.imgItem0_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        e.source = "tower_of_courage_imgitem2bg_png",
        e.width = 99.34,
        e.x = 111.66,
        e.y = 6,
        e
    },
    i.txtNumItem0_i = function() {
        var e = new eui.Label;
        return this.txtNumItem0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "999",
        e.textColor = 12834813,
        e.x = 165,
        e.y = 7,
        e
    },
    i.imgItem0_i = function() {
        var e = new eui.Image;
        return this.imgItem0 = e,
        e.height = 30,
        e.width = 30,
        e.x = 121,
        e.y = 2,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 557,
        e.y = 0,
        e.elementsContent = [this._Image14_i(), this.txtNumItem1_i(), this.imgItem1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(60, 7, 61, 8),
        e.source = "tower_of_courage_imgitem1bg_png",
        e.width = 100.834,
        e.x = 80.166,
        e.y = 6,
        e
    },
    i.txtNumItem1_i = function() {
        var e = new eui.Label;
        return this.txtNumItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0101510119682,
        e.text = "999",
        e.textColor = 12834813,
        e.x = 138,
        e.y = 7,
        e
    },
    i.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.height = 30,
        e.source = "tower_of_courage_imgitem1_png",
        e.width = 30,
        e.x = 90,
        e.y = 0,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "tower_of_courage_imgswitchoff_png",
        e.visible = !1,
        e.x = 187,
        e.y = 7,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "tower_of_courage_imgswitchon_png",
        e.visible = !1,
        e.x = 187,
        e.y = 5,
        e
    },
    i.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.height = 555,
        e.width = 240,
        e.x = 20,
        e.y = 55,
        e.viewport = this.levelMenu_i(),
        e
    },
    i.levelMenu_i = function() {
        var e = new eui.List;
        return this.levelMenu = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -15,
        e
    },
    t
} (eui.Skin);