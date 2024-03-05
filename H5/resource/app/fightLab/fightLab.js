var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
fightLab; !
function(e) {
    var t = function() {
        function e() {}
        return e.MAIN_PANEL = "fightLab.MainPanel",
        e
    } ();
    e.PanelConst = t,
    __reflect(t.prototype, "fightLab.PanelConst");
    var i = function() {
        function e() {}
        return e.DAILY_LEVEL = 201390,
        e
    } ();
    e.AttrConst = i,
    __reflect(i.prototype, "fightLab.AttrConst");
    var n = function() {
        function e() {}
        return e.CLICK_LEVEL = "fightLab_clickLevel",
        e.CLICK_SUB_LEVEL = "fightLab_clickSubLevel",
        e.ENTER_SUB_LEVEL = "fightLab_enterSubLevel",
        e
    } ();
    e.EventConst = n,
    __reflect(n.prototype, "fightLab.EventConst")
} (fightLab || (fightLab = {}));
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
fightLab; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.service.setValues([e.AttrConst.DAILY_LEVEL, 201395]),
            i.init([{
                panelName: e.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, t),
        i.prototype._resize = function() {
            this.currentPanel.resize && this.currentPanel.resize()
        },
        i
    } (BasicMultPanelModule);
    e.FightLab = t,
    __reflect(t.prototype, "fightLab.FightLab")
} (fightLab || (fightLab = {}));
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
fightLab; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "FightLab1LevelItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addEvent, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.groupThis,
            function() {
                EventManager.dispatchEvent(new egret.Event(e.EventConst.CLICK_LEVEL, !1, !1, t.data.index))
            },
            this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.dataChanged = function() {
            this.txtLV.text = "LV." + this.data.index,
            this.imgName.source = "fight_lab_1_imglevelname" + this.data.index + "_png",
            this.groupNo.visible = !1,
            this.updateServerData()
        },
        i.prototype.updateServerData = function(e) {
            if (void 0 != this.itemIndex) {
                if (!e) {
                    var t = this.parent.parent.parent;
                    if (!t) return;
                    var i = t.arrMenuServerData;
                    if (!i) return;
                    e = i[this.itemIndex]
                }
                this.txtProcess.text = "精灵解锁：" + e.cur + "/" + e.max,
                this.groupNo.visible = !e.isUnlock,
                this.touchEnabled = this.touchChildren = e.isUnlock
            }
        },
        i
    } (eui.ItemRenderer);
    e.LevelItem = t,
    __reflect(t.prototype, "fightLab.LevelItem")
} (fightLab || (fightLab = {}));
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
fightLab; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = "FightLab1PetItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            this.imgHead.source = ClientConfig.getPetHeadPath(this.data.monsterId),
            this.updateServerData()
        },
        t.prototype.updateServerData = function(e) {
            if (void 0 != this.itemIndex) {
                if (void 0 == e) {
                    var t = this.parent.parent.parent.parent;
                    if (!t) return;
                    var i = t.petLockInfo;
                    if (!i) return;
                    e = i[this.itemIndex]
                }
                this.imgNotOpen.visible = !e,
                this.touchEnabled = this.touchChildren = e,
                this.imgNotOpen.source = void 0 == this.index ? "fight_lab_2_yipaqian1_png": "fight_lab_2_yipaqian_png"
            }
        },
        t.prototype.setPet = function(e, t) {
            this.id = e,
            this.index = t,
            -1 == e ? (this.imgHead.visible = !1, this.imgNotOpen.visible = !0) : (this.imgHead.visible = !0, this.imgNotOpen.visible = !1, this.imgHead.source = ClientConfig.getPetHeadPath(e))
        },
        t
    } (eui.ItemRenderer);
    e.PetItem = t,
    __reflect(t.prototype, "fightLab.PetItem")
} (fightLab || (fightLab = {}));
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
fightLab; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "FightLab1SubLevelItemSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addEvent, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            this.imgBGDown.visible = !0,
            this["a" + this.data.order].visible = !0,
            this.txtName.text = this.data.monsterName,
            this.updateServerData()
        },
        i.prototype.updateServerData = function(e) {
            if (void 0 != this.itemIndex) {
                if (!e) {
                    var t = this.parent.parent.parent.parent;
                    if (!t) return;
                    var i = t.arrSubMenuServerData;
                    if (!i) return;
                    e = i[this.itemIndex]
                }
                this.txtHasPass.visible = e.isDailyPass,
                this.touchEnabled = !e.isDailyPass,
                this.touchChildren = !e.isDailyPass
            }
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.groupThis,
            function() {
                EventManager.dispatchEventWith(e.EventConst.CLICK_SUB_LEVEL, !1, {
                    object: t,
                    data: t.data
                })
            },
            this, !1)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setSelected = function(e, t) {
            var i = this;
            void 0 === t && (t = !1),
            egret.Tween.removeTweens(this.groupThis),
            e ? (egret.Tween.get(this.groupThis).to({
                x: 0
            },
            t ? 0 : 200), this.imgBGUp.visible = !0, this.imgBGDown.visible = !1, this.isSelected = !0) : (egret.Tween.get(this.groupThis).to({
                x: 20
            },
            t ? 0 : 200).call(function() {
                i.imgBGUp.visible = !1,
                i.imgBGDown.visible = !0
            },
            this), this.isSelected = !1)
        },
        i
    } (eui.ItemRenderer);
    e.SubLevelItem = t,
    __reflect(t.prototype, "fightLab.SubLevelItem")
} (fightLab || (fightLab = {}));
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
fightLab; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = "FightLab1Skin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.initBtnClose.call(this, "fight_lab_1_img2_png", this, this.back, this),
            this.initBtnHelpById(92),
            this.setParent(),
            this.init(),
            this.initConfig(),
            this.initList(),
            this.addEvent(),
            this.resize(),
            this.service.updateSomeValues([e.AttrConst.DAILY_LEVEL, 201395]).then(function() {
                var t = i.service.getValue(e.AttrConst.DAILY_LEVEL);
                0 == t || i.service.getValue(201395) >= 6 ? i.showLevelMenu() : i.hideLevelMenu().then(function() {
                    i.showSubLevelMenu({
                        data: t
                    })
                })
            })
        },
        i.prototype.destroy = function() {
            this.petModel.destroy(),
            t.prototype.destroy.call(this)
        },
        i.prototype.onFightOver = function() {
            var e = this;
            this.service.updateSomeValues([201395]).then(function() {
                e.service.getValue(201395) >= 6 ? (e.hideSubLevelMenu(), e.hideChooseView().then(function() {
                    e.showLevelMenu()
                })) : FightManager.isWin && e.back(!0)
            })
        },
        i.prototype.close = function() {
            this.service.closeModule()
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener(e.EventConst.CLICK_LEVEL, this.onClickLevel, this),
            EventManager.addEventListener(e.EventConst.CLICK_SUB_LEVEL, this.onClickSubLevel, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                PetManager.showPetIntroduce(4338)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                var i = t.service.getValue(e.AttrConst.DAILY_LEVEL) > 0;
                i ? SocketConnection.sendByQueue(45822, [102, t.curLevelIndex, t.curSubLevelIndex]) : Alert.show("每日仅能选择一个实验室进行攻略，你确定选择该实验室的六个关卡进行攻略吗？",
                function() {
                    SocketConnection.sendByQueue(45822, [102, t.curLevelIndex, t.curSubLevelIndex])
                })
            },
            this),
            ImageButtonUtil.add(this.btnDetail,
            function() {
                1 == t.detailState ? t.showDetail() : t.hideDetail()
            },
            this),
            ImageButtonUtil.add(this.btnChange,
            function() {
                t.isChanging ? t.cancelChange() : t.startChange()
            },
            this),
            ImageButtonUtil.add(this.imgIntroDown,
            function() {
                t.groupIntro.visible = !0,
                t.groupAbility.visible = !1,
                t.groupSkill.visible = !1,
                t.imgIntroUp.visible = !0,
                t.imgAbilityUp.visible = !1,
                t.imgSkillUp.visible = !1
            },
            this),
            ImageButtonUtil.add(this.imgAbilityDown,
            function() {
                t.groupAbility.visible = !0,
                t.groupIntro.visible = !1,
                t.groupSkill.visible = !1,
                t.imgAbilityUp.visible = !0,
                t.imgIntroUp.visible = !1,
                t.imgSkillUp.visible = !1
            },
            this),
            ImageButtonUtil.add(this.imgSkillDown,
            function() {
                t.groupSkill.visible = !0,
                t.groupIntro.visible = !1,
                t.groupAbility.visible = !1,
                t.imgSkillUp.visible = !0,
                t.imgIntroUp.visible = !1,
                t.imgAbilityUp.visible = !1
            },
            this),
            ImageButtonUtil.add(this.btnPetRelation,
            function() {
                ModuleManager.showModule("petbookAttRelationShip", ["petbookAttRelationShip"], null, "", AppDoStyle.NULL)
            },
            this),
            this.btnDescribeDetail.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                t.btnDescribeDetail.selected = !0,
                t.btnDescribeDetail.group.selectedValue = 1,
                t.updateDescribe()
            },
            this),
            this.btnDescribeReward.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                t.btnDescribeReward.selected = !0,
                t.btnDescribeReward.group.selectedValue = 0,
                t.updateDescribe()
            },
            this);
            for (var i = function(e) {
                ImageButtonUtil.add(n["imgItem" + e],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t["item" + e + "Id"]
                    })
                },
                n)
            },
            n = this, r = 1; 4 >= r; r++) i(r)
        },
        i.prototype.showLeftPet = function(e) {
            var t = this;
            this.curLeftAni = e,
            this.leftPet.visible = !0,
            this.imgLeftPet.source = ClientConfig.getPetIntroducePng(e);
            var i = egret.setInterval(function() {
                t.imgLeftPet.width > 0 && (egret.clearInterval(i), DisplayUtil.equalScale(t.imgLeftPet, 450, 450))
            },
            this, 10)
        },
        i.prototype.showDetailPetAni = function() {
            this.curPetId = this.curItem.data.monsterId,
            this.petModel.SetPetData(this.curPetId)
        },
        i.prototype.showDetail = function() {
            var e = this;
            this.detailState = 2,
            this.txtDetail.text = "Boss属性",
            egret.lifecycle.stage.touchChildren = !1,
            egret.Tween.get(this.btnChallenge).to({
                x: this.expectedGroupDescribeX + 233 + this.expectedGroupDetailViewX + this.groupDetailView.width,
                alpha: 0
            },
            350, egret.Ease.circOut).call(function() {
                e.btnChallenge.visible = !1,
                egret.lifecycle.stage.touchChildren = !0
            }),
            egret.Tween.get(this.groupDescribe).to({
                x: this.expectedGroupDescribeX + this.expectedGroupDetailViewX + this.groupDetailView.width,
                alpha: 0
            },
            350, egret.Ease.circOut).call(function() {
                e.groupDescribe.visible = !1
            }),
            egret.Tween.get(this.leftPet).to({
                x: this.expectedGroupDescribeX + 235 + this.expectedGroupDetailViewX + this.groupDetailView.width,
                alpha: 0
            },
            350, egret.Ease.circOut).call(function() {
                e.leftPet.visible = !1
            }),
            this.groupDetailView.visible = !0,
            this.groupDetailView.alpha = 0,
            this.groupDetailView.x = -this.groupDetailView.width,
            egret.Tween.get(this.groupDetailView).to({
                x: this.expectedGroupDetailViewX,
                alpha: 1
            },
            350, egret.Ease.circOut),
            this.showDetailPetAni()
        },
        i.prototype.hideDetail = function() {
            var e = this;
            this.detailState = 1,
            this.txtDetail.text = "精灵属性",
            this.leftPet.visible = !0,
            this.showLeftPet(this.curLeftAni),
            this.btnChallenge.visible = !0,
            this.groupDescribe.visible = !0,
            egret.Tween.get(this.btnChallenge).to({
                x: this.expectedGroupDescribeX + 233,
                alpha: 1
            },
            350, egret.Ease.circOut),
            egret.Tween.get(this.groupDescribe).to({
                x: this.expectedGroupDescribeX,
                alpha: 1
            },
            350, egret.Ease.circOut),
            egret.Tween.get(this.leftPet).to({
                x: this.expectedGroupDescribeX + 235,
                alpha: 1
            },
            350, egret.Ease.circOut),
            egret.lifecycle.stage.touchChildren = !1,
            egret.Tween.get(this.groupDetailView).to({
                x: -this.groupDetailView.width,
                alpha: 0
            },
            350, egret.Ease.circOut).call(function() {
                e.groupDetailView.visible = !1,
                egret.lifecycle.stage.touchChildren = !0
            })
        },
        i.prototype.init = function() {
            this.levelMenu.visible = !1,
            this.levelMenu._parent.removeChild(this.levelMenu),
            this.subLevelMenu.visible = !1,
            this.subLevelMenu._parent.removeChild(this.subLevelMenu),
            this.groupDescribe.visible = !1,
            this.groupChooseView.visible = !1,
            this.groupChooseView._parent.removeChild(this.groupChooseView),
            this.txtDetail.text = "精灵属性",
            this.detailState = 1,
            this.imgIntroUp.visible = !0,
            this.imgAbilityUp.visible = !1,
            this.imgSkillUp.visible = !1,
            this.groupIntro.visible = !0,
            this.groupAbility.visible = !1,
            this.groupSkill.visible = !1,
            this.skill4.visible = !1,
            this.txtNoFifth.visible = !1,
            this.btnChallenge.visible = !1,
            this.groupDetailView.visible = !1,
            this.groupPet.visible = !0,
            this.leftPet.visible = !1,
            this.imgPet.visible = !1,
            this.btnInfo.visible = !1,
            this.changeMask = new eui.Rect,
            this.changeMask.alpha = .5,
            this.changeMask.left = this.changeMask.right = this.changeMask.top = this.changeMask.bottom = 0,
            this.groupChangeItem = new eui.Group,
            this.leftPet.touchThrough = !0,
            this.petModel.SetInitComp(core.component.pet.PetModel.DYNAMIC_MODEL, !1, !1),
            this.petModel.SetCacheMax(12),
            this.petModel.pet_bg.visible = !1
        },
        i.prototype.initConfig = function() {
            this.levelInfo = [];
            for (var e = config.FightLabLevelConfig.getItems(), t = 0, i = e; t < i.length; t++) {
                var n = i[t];
                this.levelInfo[n.index] || (this.levelInfo[n.index] = []),
                this.levelInfo[n.index][n.order - 1] = n
            }
            this.monsterInfo = config.FightLabMonsterConfig.getItems()
        },
        i.prototype.initList = function() {
            var t = this;
            this.listLevelMenu.itemRenderer = e.LevelItem;
            for (var i = [], n = this.levelInfo.length, r = 1; n > r; r++) i[r - 1] = {
                index: r
            },
            i[r - 1].maxSubLevel = this.levelInfo[r].length;
            this.listLevelMenu.dataProvider = new eui.ArrayCollection(i),
            this.listSubLevelMenu.itemRenderer = e.SubLevelItem,
            this.mapMyPet = [];
            for (var s = function(i) {
                var n = new e.PetItem;
                n.touchEnabled = !1,
                n.touchChildren = !1,
                n.imgFirst.visible = 1 == i,
                a.mapMyPet[i] = n,
                a.groupMyPet.addChild(n),
                n.addEventListener(egret.TouchEvent.TOUCH_END,
                function() {
                    t.onSetPet(i)
                },
                a)
            },
            a = this, r = 1; 6 >= r; r++) s(r);
            this.listAllPet.layout.requestedColumnCount = 6,
            this.listAllPet.itemRenderer = e.PetItem,
            this.listAllPet.dataProvider = new eui.ArrayCollection(this.monsterInfo),
            this.listAllPet.addEventListener(eui.ItemTapEvent.CHANGE, this.onSelectPet, this),
            this.scrollerAllPet.addEventListener(eui.UIEvent.CHANGE_END, this.onSelectPet, this),
            this.listAllPet.useVirtualLayout = !1
        },
        i.prototype.onSetPet = function(e) {
            if (!this.mapMyPet[e].imgNotOpen.visible) {
                var t = this.curItem.data.monsterId,
                i = this.curItem.data.index,
                n = this.mapMyPet[e].id,
                r = this.mapMyPet[e].index;
                if (n) for (var s = 1; 6 >= s; s++) if (this.mapMyPet[s].id == t) {
                    this.mapMyPet[s].setPet(n, r);
                    break
                }
                this.mapMyPet[e].setPet(t, i);
                for (var a = [], o = 1; 6 >= o; o++) a.push(this.mapMyPet[o].index);
                SocketConnection.sendByQueue(45821, a,
                function(e) {
                    0 != e.data.readUnsignedInt() && BubblerManager.getInstance().showText("操作失败")
                })
            }
        },
        i.prototype.onClickLevel = function(t) {
            var i = this;
            0 == this.service.getValue(e.AttrConst.DAILY_LEVEL) ? this.hideLevelMenu().then(function() {
                i.showSubLevelMenu(t)
            }) : Alarm.show("你已经完成了今天的挑战,请明天再来。")
        },
        i.prototype.onClickSubLevel = function(e) {
            var t = this;
            if (e.data.object.isSelected) return void this.hideSubLevelMenu(!1).then(function() {
                t.showChooseView(),
                t.listAllPet.selectedIndex = 0,
                t.onSelectPet(),
                egret.setTimeout(function() {
                    t.onSelectPet()
                },
                t, 500)
            });
            this.lastSubLevelItem && this.lastSubLevelItem.setSelected(!1, e.data.isImmediate),
            this.lastSubLevelItem = e.data.object,
            this.lastSubLevelItem.setSelected(!0),
            this.groupDescribe.visible = !0;
            var i = e.data.data;
            this.curSubLevelIndex = i.order,
            this.txtBossInfo.text = i.bossIntro,
            this.txtStrategy.text = i.firstRewardTxt,
            this.txtUnlockPet.text = i.rewardTxt;
            for (var n = i.reward.split(";"), r = 0; 2 > r; r++) if (n[r]) {
                this["imgItem" + (r + 1)].visible = this["txtItem" + (r + 1)].visible = !0;
                var s = n[r].split("/");
                this["item" + (r + 1) + "Id"] = +s[0],
                this["imgItem" + (r + 1)].source = ClientConfig.getItemIcon( + s[0]),
                this["txtItem" + (r + 1)].text = "x" + s[1]
            } else this["imgItem" + (r + 1)].visible = this["txtItem" + (r + 1)].visible = !1;
            for (var a = i.firstReward.split(";"), r = 0; 2 > r; r++) if (a[r]) {
                this["imgItem" + (r + 3)].visible = this["txtItem" + (r + 3)].visible = !0;
                var o = a[r].split("/");
                this["item" + (r + 3) + "Id"] = +o[0],
                this["imgItem" + (r + 3)].source = ClientConfig.getItemIcon( + o[0]),
                this["txtItem" + (r + 3)].text = "x" + o[1]
            } else this["imgItem" + (r + 3)].visible = this["txtItem" + (r + 3)].visible = !1;
            this.btnDescribeReward.selected = !0,
            this.btnDescribeReward.group.selectedValue = 0,
            this.updateDescribe(),
            this.showLeftPet(i.monsterId)
        },
        i.prototype.updateDescribe = function() {
            this.describeDetail.visible = this.btnDescribeDetail.selected,
            this.describeReward.visible = this.btnDescribeReward.selected
        },
        i.prototype.back = function(t) {
            var i = this;
            void 0 === t && (t = !1),
            this.subLevelMenu.visible ? 0 == this.service.getValue(e.AttrConst.DAILY_LEVEL) ? this.hideSubLevelMenu().then(function() {
                i.showLevelMenu()
            }) : this.close() : this.groupChooseView.visible ? (this.groupDetailView.visible && this.hideDetail(), this.hideChooseView().then(function() {
                i.showSubLevelMenu(null, !1, t)
            })) : this.levelMenu.visible && this.close()
        },
        i.prototype.onSelectPet = function() {
            for (var e, t = 0; t < this.listAllPet.numChildren; t++) {
                var i = this.listAllPet.getChildAt(t);
                if (i.data == this.listAllPet.selectedItem) {
                    e = i;
                    break
                }
            }
            this.curItem && this.curItem.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onPetItemBegin, this),
            this.curItem = e,
            this.refreshDetailView(),
            this.groupDetailView.visible && this.showDetailPetAni()
        },
        i.prototype.refreshDetailView = function() {
            var e = this,
            t = this.curItem.data.monsterId;
            this.txtId.text = t,
            this.txtName.text = PetXMLInfo.getName(t),
            this.txtIntro.text = this.curItem.data.monsterIntro,
            this.imgAttrIcon.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(t));
            for (var i = this.curItem.data.monsterData.split("_"), n = 0; 6 > n; n++) this["txt" + (n + 1)].text = i[n],
            this["processBar" + (n + 1)].value = +i[n] / (6 == n ? 5 : 4);
            for (var r = this.curItem.data.monsterMove.split("_"), s = function(t) {
                var i = +r[t];
                if (4 == t && (a.skill4.visible = !!i, a.txtNoFifth.visible = !i, !i)) return {
                    value: void 0
                };
                a["txtName" + t].text = SkillXMLInfo.getName(i),
                a["txtDamage" + t].text = "威力：" + SkillXMLInfo.getDamage(i);
                var n = SkillXMLInfo.getPP(i);
                if (a["txtPP" + t].text = "PP：" + n + "/" + n, 4 == SkillXMLInfo.getCategory(i)) a["imgIcon" + t].source = ClientConfig.getpettypeticon("prop");
                else {
                    var s = SkillXMLInfo.getTypeID(i);
                    a["imgIcon" + t].source = ClientConfig.getpettypeticon(String(s))
                }
                ImageButtonUtil.remove(a["skill" + t]),
                ImageButtonUtil.add(a["skill" + t],
                function() {
                    e.service.showSkillInfo(i)
                },
                a, !1, !1)
            },
            a = this, n = 0; 5 > n; n++) {
                var o = s(n);
                if ("object" == typeof o) return o.value
            }
        },
        i.prototype.onPetItemBegin = function(e) {
            this.scrollerAllPet.enabled = !1,
            this.beginX = e.stageX,
            this.beginY = e.stageY,
            this.beginItem = new eui.Group;
            var t = new eui.Image("fight_lab_1_pet_item_imgbg_png");
            t.x = t.y = -1,
            this.beginItem.addChild(t);
            var i = new eui.Image(this.curItem.imgHead.source);
            i.width = i.height = 69,
            this.beginItem.addChild(i);
            var n = this.curItem.localToGlobal();
            this.beginItemPosition = {
                x: n.x,
                y: n.y
            },
            this.beginItem.touchEnabled = !1,
            this.beginItem.touchChildren = !1,
            this.beginItem.x = this.beginItemPosition.x,
            this.beginItem.y = this.beginItemPosition.y,
            this.addChild(this.beginItem),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this),
            egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END, this.onStageEnd, this),
            this.mapMyPet.forEach(function(e) {
                e.touchEnabled = !0,
                e.touchChildren = !0
            })
        },
        i.prototype.onStageMove = function(e) {
            this.beginItem.x = this.beginItemPosition.x + e.stageX - this.beginX,
            this.beginItem.y = this.beginItemPosition.y + e.stageY - this.beginY
        },
        i.prototype.onStageEnd = function() {
            this.removeChild(this.beginItem),
            this.scrollerAllPet.enabled = !0,
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageMove, this),
            this.mapMyPet.forEach(function(e) {
                e.touchEnabled = !1,
                e.touchChildren = !1
            })
        },
        i.prototype.setParent = function() {
            this.levelMenu._parent = this.levelMenu.parent,
            this.subLevelMenu._parent = this.subLevelMenu.parent,
            this.groupChooseView._parent = this.groupChooseView.parent
        },
        i.prototype.showLevelMenu = function() {
            var e = this;
            this.levelMenu._parent.addChild(this.levelMenu);
            var t = egret.setInterval(function() {
                var i = e.listLevelMenu.numChildren;
                if (i > 0) {
                    egret.clearInterval(t),
                    e.levelMenu.visible = !0,
                    egret.lifecycle.stage.touchChildren = !1,
                    e.leftPet.visible = !1,
                    e.imgPet.visible = !0,
                    e.btnInfo.visible = !0,
                    egret.Tween.get(e.imgPet).to({
                        alpha: 1
                    },
                    75 * (i - 1));
                    for (var n = function(t) {
                        var n = e.listLevelMenu.getChildAt(t);
                        n.visible = !1,
                        n.includeInLayout = !1,
                        egret.setTimeout(function() {
                            n.x = 458,
                            egret.setTimeout(function() {
                                n.visible = !0,
                                egret.Tween.get(n).to({
                                    x: 0
                                },
                                150).call(function() {
                                    n.includeInLayout = !0,
                                    t == i - 1 && (egret.lifecycle.stage.touchChildren = !0)
                                })
                            },
                            null, 75 * t)
                        },
                        null, 0)
                    },
                    r = i - 1; r >= 0; r--) n(r);
                    SocketConnection.sendByQueue(45818, [],
                    function(t) {
                        e.arrMenuServerData = [];
                        for (var i = t.data,
                        n = i.readUnsignedInt(), r = 0; n > r; r++) {
                            var s = {};
                            s.id = i.readUnsignedInt(),
                            s.cur = i.readUnsignedInt(),
                            s.max = i.readUnsignedInt(),
                            s.isUnlock = i.readUnsignedInt(),
                            e.arrMenuServerData.push(s)
                        }
                        for (var a = e.listLevelMenu.numChildren,
                        r = 0; a > r; r++) {
                            var o = e.listLevelMenu.getChildAt(r);
                            o.updateServerData(e.arrMenuServerData[o.itemIndex])
                        }
                    })
                }
            },
            null, 20)
        },
        i.prototype.hideLevelMenu = function() {
            var e = this;
            return new Promise(function(t, i) {
                egret.lifecycle.stage.touchChildren = !1,
                e.levelMenu.right = 51,
                egret.Tween.get(e.levelMenu).to({
                    right: -e.levelMenu.width
                },
                200, egret.Ease.circOut).call(function() {
                    egret.lifecycle.stage.touchChildren = !0,
                    e.imgPet.visible = !1,
                    e.btnInfo.visible = !1,
                    e.levelMenu.visible = !1,
                    e.levelMenu.parent && e.levelMenu._parent.removeChild(e.levelMenu),
                    e.levelMenu.right = 51,
                    t()
                }),
                egret.Tween.get(e.imgPet).to({
                    alpha: 0
                },
                200)
            })
        },
        i.prototype.showSubLevelMenu = function(e, t, i) {
            var n = this;
            void 0 === t && (t = !0),
            void 0 === i && (i = !0),
            this.subLevelMenu.visible = !0,
            this.subLevelMenu._parent.addChild(this.subLevelMenu),
            egret.lifecycle.stage.touchChildren = !1,
            e ? (this.curLevelIndex = e.data, this.listSubLevelMenu.dataProvider = new eui.ArrayCollection(this.levelInfo[this.curLevelIndex]), this.lastSubLevelItem = null) : this.lastSubLevelItem.setSelected(!0);
            var r = 0;
            this.subLevelMenu.right = -this.subLevelMenu.width,
            egret.Tween.get(this.subLevelMenu).to({
                right: 33
            },
            200, egret.Ease.circOut).call(function() {
                2 != ++r && t || (egret.lifecycle.stage.touchChildren = !0)
            }),
            t && (this.groupDescribe.visible = !0, this.groupDescribe.x = -this.groupDescribe.width, egret.Tween.get(this.groupDescribe).to({
                x: this.expectedGroupDescribeX
            },
            200, egret.Ease.circOut).call(function() {
                2 == ++r && (egret.lifecycle.stage.touchChildren = !0)
            }), this.leftPet.alpha = 0, egret.Tween.get(this.leftPet).to({
                alpha: 1
            },
            200)),
            i && egret.setTimeout(function() {
                SocketConnection.sendByQueue(45819, [n.curLevelIndex],
                function(e) {
                    n.arrSubMenuServerData = [];
                    for (var t = e.data,
                    i = t.readUnsignedInt(), r = 0; i > r; r++) {
                        var s = {};
                        s.id = t.readUnsignedInt(),
                        s.isFirstPass = t.readUnsignedInt(),
                        s.isDailyPass = t.readUnsignedInt(),
                        s.isPetUnlock = t.readUnsignedInt(),
                        n.arrSubMenuServerData.push(s)
                    }
                    for (var a = n.listSubLevelMenu.numChildren,
                    r = 0; a > r; r++) {
                        var o = n.listSubLevelMenu.getChildAt(r);
                        o.updateServerData(n.arrSubMenuServerData[o.itemIndex])
                    }
                    if (a > 0) {
                        for (var h = !0,
                        r = 0; a > r; r++) {
                            var o = n.listSubLevelMenu.getChildAt(r);
                            if (!n.arrSubMenuServerData[r].isDailyPass) {
                                o.isSelected || n.onClickSubLevel({
                                    data: {
                                        object: o,
                                        data: n.levelInfo[n.curLevelIndex][r],
                                        isImmediate: !0
                                    }
                                }),
                                h = !1;
                                break
                            }
                        }
                        if (h) {
                            var o = n.listSubLevelMenu.getChildAt(a - 1);
                            o.isSelected = !1,
                            n.onClickSubLevel({
                                data: {
                                    object: o,
                                    data: n.levelInfo[n.curLevelIndex][a - 1],
                                    isImmediate: !0
                                }
                            })
                        }
                    }
                })
            },
            null, e ? 50 : 0)
        },
        i.prototype.hideSubLevelMenu = function(e) {
            var t = this;
            return void 0 === e && (e = !0),
            new Promise(function(i, n) {
                var r = 0;
                egret.lifecycle.stage.touchChildren = !1,
                egret.Tween.get(t.subLevelMenu).to({
                    right: -t.subLevelMenu.width
                },
                200, egret.Ease.circOut).call(function() {
                    t.subLevelMenu.visible = !1,
                    t.subLevelMenu.parent && t.subLevelMenu._parent.removeChild(t.subLevelMenu),
                    2 != ++r && e || (egret.lifecycle.stage.touchChildren = !0, i())
                }),
                e && (egret.Tween.get(t.groupDescribe).to({
                    x: -t.groupDescribe.width
                },
                200, egret.Ease.circOut).call(function() {
                    t.groupDescribe.visible = !1,
                    2 == ++r && (egret.lifecycle.stage.touchChildren = !0, i())
                }), egret.Tween.get(t.leftPet).to({
                    alpha: 0
                },
                200).call(function() {
                    t.leftPet.visible = !1
                }))
            })
        },
        i.prototype.showChooseView = function() {
            var e = this,
            t = 0;
            this.groupChooseView.visible = !0,
            this.groupChooseView._parent.addChild(this.groupChooseView),
            this.groupChooseView.right = -this.groupChooseView.width,
            egret.lifecycle.stage.touchChildren = !1,
            egret.Tween.get(this.groupChooseView).to({
                right: 36
            },
            200, egret.Ease.circOut).call(function() {
                2 == ++t && (egret.lifecycle.stage.touchChildren = !0)
            }),
            this.btnChallenge.visible = !0,
            this.btnChallenge.alpha = 0,
            this.btnChallenge.x = this.expectedGroupDescribeX + 233,
            this.btnChallenge.y = 615,
            egret.Tween.get(this.btnChallenge).to({
                y: 595,
                alpha: 1
            },
            200, egret.Ease.circOut).call(function() {
                2 == ++t && (egret.lifecycle.stage.touchChildren = !0)
            }),
            SocketConnection.sendByQueue(45820, [],
            function(t) {
                var i = t.data.readUnsignedInt();
                e.petLockInfo = [];
                for (var n = 0; 30 > n; n++) e.petLockInfo[n] = 1 == KTool.getBit(i, n + 1);
                for (var r = e.listAllPet.numChildren,
                n = 0; r > n; n++) {
                    var s = e.listAllPet.getChildAt(n);
                    s.updateServerData(e.petLockInfo[s.itemIndex])
                }
                for (var n = 0; 6 > n; n++) {
                    var a = t.data.readUnsignedInt(),
                    s = e.mapMyPet[n + 1];
                    if (0 == a) s.setPet( - 1, 0);
                    else {
                        var o = e.monsterInfo[a - 1].monsterId;
                        s.setPet(o, a)
                    }
                }
            })
        },
        i.prototype.hideChooseView = function() {
            var e = this;
            return new Promise(function(t, i) {
                var n = 0;
                egret.lifecycle.stage.touchChildren = !1,
                egret.Tween.get(e.btnChallenge).to({
                    y: 615,
                    alpha: 0
                },
                200, egret.Ease.circOut).call(function() {
                    2 == ++n && (e.btnChallenge.visible = !1, e.groupChooseView.visible = !1, e.groupChooseView.parent && e.groupChooseView._parent.removeChild(e.groupChooseView), egret.lifecycle.stage.touchChildren = !0, t())
                }),
                egret.Tween.get(e.groupChooseView).to({
                    right: -e.groupChooseView.width
                },
                200, egret.Ease.circOut).call(function() {
                    2 == ++n && (e.btnChallenge.visible = !1, e.groupChooseView.visible = !1, e.groupChooseView.parent && e.groupChooseView._parent.removeChild(e.groupChooseView), egret.lifecycle.stage.touchChildren = !0, t())
                })
            })
        },
        i.prototype.cancelChange = function() {
            this.isChanging = !1,
            this.txtChange.text = "替 换",
            this.removeChild(this.changeMask),
            this.groupChangeItem.removeChildren(),
            this.removeChild(this.groupChangeItem),
            this.oldBtnChangeInfo.parent.addChild(this.btnChange),
            this.btnChange.x = this.oldBtnChangeInfo.x,
            this.btnChange.y = this.oldBtnChangeInfo.y
        },
        i.prototype.startChange = function() {
            var e = this;
            this.listAllPet.scrollV + this.listAllPet.height - this.curItem.y - this.curItem.height < 5 ? this.listAllPet.scrollV = 5 - (this.listAllPet.height - this.curItem.y - this.curItem.height) : this.curItem.y - 12 < this.listAllPet.scrollV && (this.listAllPet.scrollV = this.curItem.y - 12),
            this.isChanging = !0,
            this.txtChange.text = "取消替换",
            this.addChild(this.changeMask),
            this.addChild(this.groupChangeItem);
            for (var t = function(t) {
                var n = i.groupMyPet.getChildAt(t);
                if (!n.imgNotOpen.visible) {
                    var r = new eui.Image(n.imgHead.source);
                    r.x = n.localToGlobal().x,
                    r.y = n.localToGlobal().y,
                    r.width = n.width * i.groupChooseView.scaleX,
                    r.height = n.height * i.groupChooseView.scaleX,
                    i.groupChangeItem.addChild(r),
                    r.once(egret.TouchEvent.TOUCH_TAP,
                    function() {
                        e.onSetPet(t + 1),
                        e.cancelChange()
                    },
                    i),
                    r.name = "head" + t
                }
            },
            i = this, n = 0; 6 > n; n++) t(n);
            for (var n = 0; 6 > n; n++) {
                var r = this.groupMyPet.getChildAt(n);
                if (!r.imgNotOpen.visible) {
                    var s = SpineUtil.createAnimate("fight_lab");
                    this.groupChangeItem.addChild(s),
                    s.x = r.localToGlobal().x + r.width / 2 * this.groupChooseView.scaleX,
                    s.y = r.localToGlobal().y + r.height / 2 * this.groupChooseView.scaleX,
                    s.scaleX = s.scaleY = this.groupChooseView.scaleX,
                    s.play("square_alone", 0),
                    s.name = "ani" + n,
                    s.touchEnabled = s.touchChildren = !1
                }
            }
            this.oldBtnChangeInfo = {},
            this.oldBtnChangeInfo.x = this.btnChange.x,
            this.oldBtnChangeInfo.y = this.btnChange.y,
            this.oldBtnChangeInfo.parent = this.btnChange.parent;
            var a = this.btnChange.localToGlobal().x + this.btnChange.width / 2,
            o = this.btnChange.localToGlobal().y + this.btnChange.height / 2;
            this.groupChangeItem.addChild(this.btnChange),
            this.btnChange.x = a,
            this.btnChange.y = o;
            var h = new eui.Image(this.curItem.imgHead.source);
            this.groupChangeItem.addChild(h),
            h.x = this.curItem.localToGlobal().x,
            h.y = this.curItem.localToGlobal().y,
            h.width = h.height = 69 * this.groupChooseView.scaleX,
            h.name = "img"
        },
        i.prototype.resize = function() {
            var e = this;
            egret.setTimeout(function() {
                if (e.isChanging) {
                    e.btnChange.x = e.btnDetail.localToGlobal().x - 86,
                    e.groupChangeItem.getChildByName("img").x = e.curItem.localToGlobal().x;
                    for (var t = 0; 6 > t; t++) {
                        var i = e.groupMyPet.getChildAt(t),
                        n = e.groupChangeItem.getChildByName("ani" + t);
                        n && (n.x = i.localToGlobal().x + i.width / 2),
                        n && (n.scaleX = n.scaleY = e.groupChooseView.scaleX);
                        var r = e.groupChangeItem.getChildByName("head" + t);
                        r && (r.x = i.localToGlobal().x)
                    }
                }
            },
            this, 50);
            var t = this.parent.parent.width - 541;
            this.imgPet.x = t / 2 - 335,
            this.expectedGroupDescribeX = t / 2 - 233.5,
            this.groupDescribe.x = this.expectedGroupDescribeX,
            this.btnChallenge.x = this.expectedGroupDescribeX + 233,
            this.leftPet.x = this.expectedGroupDescribeX + 235,
            this.expectedGroupDetailViewX = t / 2 - 227.5,
            this.groupDetailView.x = this.expectedGroupDetailViewX
        },
        i
    } (BasicPanel);
    e.MainPanel = t,
    __reflect(t.prototype, "fightLab.MainPanel")
} (fightLab || (fightLab = {}));
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
generateEUI.paths["resource/eui_skins/FightLab1LevelItemSkin.exml"] = window.FightLab1LevelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtProcess", "imgName", "txtLV", "notOpenTxt", "groupNo", "groupThis"],
        this.currentState = "up",
        this.height = 82,
        this.width = 407,
        this.elementsContent = [this.groupThis_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.groupThis_i = function() {
        var e = new eui.Group;
        return this.groupThis = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.txtProcess_i(), this.imgName_i(), this.txtLV_i(), this.groupNo_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_level_item_imgbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtProcess_i = function() {
        var e = new eui.Label;
        return this.txtProcess = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "解锁进度：0/0",
        e.textColor = 4187130,
        e.x = 249,
        e.y = 30,
        e
    },
    i.imgName_i = function() {
        var e = new eui.Image;
        return this.imgName = e,
        e.height = 30,
        e.width = 150,
        e.x = 73,
        e.y = 22,
        e
    },
    i.txtLV_i = function() {
        var e = new eui.Label;
        return this.txtLV = e,
        e.fontFamily = "MFShangHei",
        e.size = 19.9430396553106,
        e.text = "LV.3",
        e.textColor = 16777215,
        e.x = 10,
        e.y = 33,
        e
    },
    i.groupNo_i = function() {
        var e = new eui.Group;
        return this.groupNo = e,
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.notOpenTxt_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_level_item_imgno_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.notOpenTxt_i = function() {
        var e = new eui.Label;
        return this.notOpenTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.text = "暂未开启",
        e.textColor = 4187130,
        e.visible = !0,
        e.x = 157,
        e.y = 30,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightLab1PetItemSkin.exml"] = window.FightLab1PetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgRect", "imgHead", "imgFirst", "imgNotOpen"],
        this.currentState = "up1",
        this.height = 69,
        this.width = 69,
        this.elementsContent = [this._Image1_i(), this.imgRect_i(), this.imgHead_i(), this.imgFirst_i(), this.imgNotOpen_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("imgRect", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_pet_item_imgbg_png",
        e.x = -1,
        e.y = -1,
        e
    },
    i.imgRect_i = function() {
        var e = new eui.Image;
        return this.imgRect = e,
        e.source = "fight_lab_1_pet_item_imgrect_png",
        e.visible = !1,
        e.x = -12,
        e.y = -12,
        e
    },
    i.imgHead_i = function() {
        var e = new eui.Image;
        return this.imgHead = e,
        e.height = 69,
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgFirst_i = function() {
        var e = new eui.Image;
        return this.imgFirst = e,
        e.source = "fight_lab_1_pet_item_imgfirst_png",
        e.visible = !1,
        e.x = -2,
        e.y = 45,
        e
    },
    i.imgNotOpen_i = function() {
        var e = new eui.Image;
        return this.imgNotOpen = e,
        e.source = "fight_lab_2_yipaqian_png",
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightLab1Skin.exml"] = window.FightLab1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBG", "imgLeftPet", "leftPet", "imgPet", "btnChallenge", "btnDescribeReward", "btnDescribeDetail", "txtBossInfo", "txtStrategy", "describeDetail", "imgItem1", "txtItem1", "imgItem2", "txtItem2", "imgItem3", "txtItem3", "imgItem4", "txtItem4", "txtUnlockPet", "describeReward", "groupDescribe", "listLevelMenu", "levelMenu", "listSubLevelMenu", "subLevelMenu", "petModel", "pet", "groupPet", "imgIntroDown", "imgSkillDown", "imgAbilityDown", "imgAbilityUp", "imgSkillUp", "imgIntroUp", "txtId", "txtName", "txtIntro", "groupIntro", "imgAttrIcon", "txt1", "txt2", "txt3", "txt4", "txt5", "txt6", "btnPetRelation", "processBar1", "processBar2", "processBar3", "processBar4", "processBar5", "processBar6", "groupAbility", "imgIcon0", "txtName0", "txtDamage0", "txtPP0", "skill0", "imgIcon1", "txtName1", "txtDamage1", "txtPP1", "skill1", "imgIcon2", "txtName2", "txtDamage2", "txtPP2", "skill2", "imgIcon3", "txtName3", "txtDamage3", "txtPP3", "skill3", "imgIcon4", "txtName4", "txtPP4", "txtDamage4", "skill4", "txtNoFifth", "groupSkill", "groupDetailView", "groupMyPet", "listAllPet", "scrollerAllPet", "txtDetail", "btnDetail", "txtChange", "btnChange", "groupChooseView", "btnInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.imgBG_i(), this.leftPet_i(), this.imgPet_i(), this.btnChallenge_i(), this.groupDescribe_i(), this.levelMenu_i(), this.subLevelMenu_i(), this.groupDetailView_i(), this.groupChooseView_i(), this.btnInfo_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "fight_lab_1_describe_imgrewarddown_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "fight_lab_1_describe_imgrewardup_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "fight_lab_1_describe_imgdetaildown_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "fight_lab_1_describe_imgdetailup_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.horizontalCenter = 0,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    l = function(e) {
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
            e.source = "fight_lab_2_imgprocessbar_png",
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u.imgBG_i = function() {
        var e = new eui.Image;
        return this.imgBG = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "fight_lab_1_bg_jpg",
        e.top = 0,
        e.visible = !0,
        e
    },
    u.leftPet_i = function() {
        var e = new eui.Group;
        return this.leftPet = e,
        e.height = 0,
        e.scaleX = -1,
        e.visible = !1,
        e.width = 0,
        e.x = 297,
        e.y = 251,
        e.elementsContent = [this.imgLeftPet_i()],
        e
    },
    u.imgLeftPet_i = function() {
        var e = new eui.Image;
        return this.imgLeftPet = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    u.imgPet_i = function() {
        var e = new eui.Image;
        return this.imgPet = e,
        e.source = "fight_lab_1_imgpet_png",
        e.y = 110.663,
        e
    },
    u.btnChallenge_i = function() {
        var e = new eui.Group;
        return this.btnChallenge = e,
        e.visible = !1,
        e.x = 227,
        e.y = 572,
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    u._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_chosse_view_imgbtn2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "开始挑战",
        e.textColor = 10181146,
        e.x = 28,
        e.y = 15,
        e
    },
    u.groupDescribe_i = function() {
        var e = new eui.Group;
        return this.groupDescribe = e,
        e.visible = !1,
        e.x = 62,
        e.y = 350,
        e.elementsContent = [this._Image2_i(), this.btnDescribeReward_i(), this.btnDescribeDetail_i(), this.describeDetail_i(), this.describeReward_i()],
        e
    },
    u._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.btnDescribeReward_i = function() {
        var e = new eui.RadioButton;
        return this.btnDescribeReward = e,
        e.height = 106,
        e.width = 40,
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    u.btnDescribeDetail_i = function() {
        var e = new eui.RadioButton;
        return this.btnDescribeDetail = e,
        e.height = 106,
        e.width = 40,
        e.x = 0,
        e.y = 107,
        e.skinName = n,
        e
    },
    u.describeDetail_i = function() {
        var e = new eui.Group;
        return this.describeDetail = e,
        e.visible = !0,
        e.x = 54,
        e.y = 21,
        e.elementsContent = [this._Image3_i(), this.txtBossInfo_i(), this._Image4_i(), this.txtStrategy_i()],
        e
    },
    u._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgbossinfo_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.txtBossInfo_i = function() {
        var e = new eui.Label;
        return this.txtBossInfo = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.9971158395238,
        e.textColor = 9157375,
        e.width = 387,
        e.x = 0,
        e.y = 28,
        e
    },
    u._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgstrategy_png",
        e.x = 0,
        e.y = 99,
        e
    },
    u.txtStrategy_i = function() {
        var e = new eui.Label;
        return this.txtStrategy = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.9971158395238,
        e.textColor = 9157375,
        e.width = 387,
        e.x = 0,
        e.y = 127,
        e
    },
    u.describeReward_i = function() {
        var e = new eui.Group;
        return this.describeReward = e,
        e.visible = !0,
        e.x = 54,
        e.y = 21,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.imgItem1_i(), this.txtItem1_i(), this._Image7_i(), this.imgItem2_i(), this.txtItem2_i(), this._Image8_i(), this._Image9_i(), this.imgItem3_i(), this.txtItem3_i(), this._Image10_i(), this.imgItem4_i(), this.txtItem4_i(), this._Image11_i(), this.txtUnlockPet_i()],
        e
    },
    u._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgusualreward_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "fight_lab_1_describe_imgitem1_png",
        e.width = 70,
        e.x = 1,
        e.y = 28,
        e
    },
    u.imgItem1_i = function() {
        var e = new eui.Image;
        return this.imgItem1 = e,
        e.height = 56,
        e.width = 56,
        e.x = 8,
        e.y = 35,
        e
    },
    u.txtItem1_i = function() {
        var e = new eui.Label;
        return this.txtItem1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.width = 65,
        e.x = 1,
        e.y = 80,
        e
    },
    u._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "fight_lab_1_describe_imgitem1_png",
        e.width = 70,
        e.x = 94,
        e.y = 28,
        e
    },
    u.imgItem2_i = function() {
        var e = new eui.Image;
        return this.imgItem2 = e,
        e.height = 56,
        e.width = 56,
        e.x = 101,
        e.y = 35,
        e
    },
    u.txtItem2_i = function() {
        var e = new eui.Label;
        return this.txtItem2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.width = 65,
        e.x = 94,
        e.y = 80,
        e
    },
    u._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgfirstreward_png",
        e.x = 209.828,
        e.y = 0,
        e
    },
    u._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "fight_lab_1_describe_imgitem1_png",
        e.width = 70,
        e.x = 210.828,
        e.y = 28,
        e
    },
    u.imgItem3_i = function() {
        var e = new eui.Image;
        return this.imgItem3 = e,
        e.height = 56,
        e.width = 56,
        e.x = 217,
        e.y = 35,
        e
    },
    u.txtItem3_i = function() {
        var e = new eui.Label;
        return this.txtItem3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.width = 65,
        e.x = 211,
        e.y = 80,
        e
    },
    u._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "fight_lab_1_describe_imgitem1_png",
        e.visible = !0,
        e.width = 70,
        e.x = 303.828,
        e.y = 28,
        e
    },
    u.imgItem4_i = function() {
        var e = new eui.Image;
        return this.imgItem4 = e,
        e.height = 56,
        e.width = 56,
        e.x = 310,
        e.y = 35,
        e
    },
    u.txtItem4_i = function() {
        var e = new eui.Label;
        return this.txtItem4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textAlign = "right",
        e.width = 65,
        e.x = 304,
        e.y = 80,
        e
    },
    u._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_describe_imgunlockpet_png",
        e.x = 0,
        e.y = 111,
        e
    },
    u.txtUnlockPet_i = function() {
        var e = new eui.Label;
        return this.txtUnlockPet = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.9971158395238,
        e.textColor = 9157375,
        e.width = 387,
        e.x = 0,
        e.y = 139,
        e
    },
    u.levelMenu_i = function() {
        var e = new eui.Scroller;
        return this.levelMenu = e,
        e.height = 450,
        e.right = 51,
        e.visible = !1,
        e.width = 410,
        e.y = 125,
        e.viewport = this.listLevelMenu_i(),
        e
    },
    u.listLevelMenu_i = function() {
        var e = new eui.List;
        return this.listLevelMenu = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    u._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 25,
        e
    },
    u.subLevelMenu_i = function() {
        var e = new eui.Group;
        return this.subLevelMenu = e,
        e.visible = !1,
        e.x = 632,
        e.y = 74,
        e.elementsContent = [this._Image12_i(), this._Label2_i(), this._Scroller1_i()],
        e
    },
    u._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 498,
        e.left = 0,
        e.right = 0,
        e.source = "fight_lab_1_1img1_png",
        e.y = 0,
        e
    },
    u._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "选中后再次点击选项卡即可进入挑战，点击左上角按钮返回",
        e.textColor = 8625104,
        e.y = 467,
        e
    },
    u._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 438,
        e.width = 495,
        e.x = 5,
        e.y = 15,
        e.viewport = this.listSubLevelMenu_i(),
        e
    },
    u.listSubLevelMenu_i = function() {
        var e = new eui.List;
        return this.listSubLevelMenu = e,
        e.layout = this._VerticalLayout2_i(),
        e
    },
    u._VerticalLayout2_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e
    },
    u.groupDetailView_i = function() {
        var e = new eui.Group;
        return this.groupDetailView = e,
        e.visible = !1,
        e.width = 455,
        e.x = 47,
        e.y = 6,
        e.elementsContent = [this.groupPet_i(), this._Image14_i(), this._Group1_i(), this.groupIntro_i(), this.groupAbility_i(), this.groupSkill_i()],
        e
    },
    u.groupPet_i = function() {
        var e = new eui.Group;
        return this.groupPet = e,
        e.x = 45,
        e.y = 71,
        e.elementsContent = [this._Image13_i(), this.pet_i()],
        e
    },
    u._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "fight_lab_2_petani_imgbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.height = 0,
        e.width = 0,
        e.x = 190,
        e.y = 113,
        e.elementsContent = [this.petModel_i()],
        e
    },
    u.petModel_i = function() {
        var e = new core.component.pet.PetModel;
        return this.petModel = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e
    },
    u._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg_png",
        e.visible = !0,
        e.x = 21,
        e.y = 289,
        e
    },
    u._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 319,
        e.elementsContent = [this.imgIntroDown_i(), this.imgSkillDown_i(), this.imgAbilityDown_i(), this.imgAbilityUp_i(), this.imgSkillUp_i(), this.imgIntroUp_i()],
        e
    },
    u.imgIntroDown_i = function() {
        var e = new eui.Image;
        return this.imgIntroDown = e,
        e.source = "fight_lab_2_imgdescribedown_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.imgSkillDown_i = function() {
        var e = new eui.Image;
        return this.imgSkillDown = e,
        e.source = "fight_lab_2_imgskilldown_png",
        e.x = 0,
        e.y = 177,
        e
    },
    u.imgAbilityDown_i = function() {
        var e = new eui.Image;
        return this.imgAbilityDown = e,
        e.source = "fight_lab_2_imgabilitydown_png",
        e.x = 0,
        e.y = 88,
        e
    },
    u.imgAbilityUp_i = function() {
        var e = new eui.Image;
        return this.imgAbilityUp = e,
        e.source = "fight_lab_2_imgabilityup_png",
        e.visible = !0,
        e.x = 0,
        e.y = 88,
        e
    },
    u.imgSkillUp_i = function() {
        var e = new eui.Image;
        return this.imgSkillUp = e,
        e.source = "fight_lab_2_imgskillup_png",
        e.visible = !0,
        e.x = 0,
        e.y = 177,
        e
    },
    u.imgIntroUp_i = function() {
        var e = new eui.Image;
        return this.imgIntroUp = e,
        e.source = "fight_lab_2_imgdescribeup_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u.groupIntro_i = function() {
        var e = new eui.Group;
        return this.groupIntro = e,
        e.visible = !1,
        e.x = 51,
        e.y = 327,
        e.elementsContent = [this._Label3_i(), this.txtId_i(), this._Label4_i(), this.txtName_i(), this._Label5_i(), this.txtIntro_i(), this._Image15_i(), this._Image16_i()],
        e
    },
    u._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵ID：",
        e.textColor = 15068927,
        e.visible = !0,
        e.x = 12,
        e.y = 0,
        e
    },
    u.txtId_i = function() {
        var e = new eui.Label;
        return this.txtId = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.textColor = 6027519,
        e.x = 83,
        e
    },
    u._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0427259816584,
        e.text = "精灵名称：",
        e.textColor = 15068927,
        e.x = 11,
        e.y = 46,
        e
    },
    u.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0427259816584,
        e.textColor = 6027519,
        e.x = 99,
        e.y = 46,
        e
    },
    u._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0283338930366,
        e.text = "精灵介绍：",
        e.textColor = 15068927,
        e.x = 11,
        e.y = 93,
        e
    },
    u.txtIntro_i = function() {
        var e = new eui.Label;
        return this.txtIntro = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.0251856826992,
        e.textColor = 11520511,
        e.width = 262.452,
        e.x = 99,
        e.y = 94,
        e
    },
    u._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgline2_png",
        e.x = 0,
        e.y = 30,
        e
    },
    u._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgline1_png",
        e.x = 0,
        e.y = 75,
        e
    },
    u.groupAbility_i = function() {
        var e = new eui.Group;
        return this.groupAbility = e,
        e.visible = !1,
        e.x = 51,
        e.y = 339,
        e.elementsContent = [this._Label6_i(), this.imgAttrIcon_i(), this._Label7_i(), this._Image17_i(), this._Image18_i(), this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Image22_i(), this._Image23_i(), this._Label8_i(), this.txt1_i(), this._Label9_i(), this.txt2_i(), this._Label10_i(), this.txt3_i(), this._Label11_i(), this.txt4_i(), this._Label12_i(), this.txt5_i(), this._Label13_i(), this.txt6_i(), this.btnPetRelation_i(), this.processBar1_i(), this.processBar2_i(), this.processBar3_i(), this.processBar4_i(), this.processBar5_i(), this.processBar6_i()],
        e
    },
    u._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "精灵属性：",
        e.textColor = 15068927,
        e.x = 12,
        e.y = 2,
        e
    },
    u.imgAttrIcon_i = function() {
        var e = new eui.Image;
        return this.imgAttrIcon = e,
        e.height = 20,
        e.width = 20,
        e.x = 100,
        e
    },
    u._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18.0358050124819,
        e.text = "精灵数据：",
        e.textColor = 15068927,
        e.x = 12,
        e.y = 49,
        e
    },
    u._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 24,
        e.y = 109,
        e
    },
    u._Image18_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 213,
        e.y = 109,
        e
    },
    u._Image19_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 24,
        e.y = 154,
        e
    },
    u._Image20_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 213,
        e.y = 154,
        e
    },
    u._Image21_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 24,
        e.y = 199,
        e
    },
    u._Image22_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgprocessbarbg_png",
        e.x = 213,
        e.y = 199,
        e
    },
    u._Image23_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_detailline_png",
        e.x = 0,
        e.y = 33,
        e
    },
    u._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "攻击：",
        e.textColor = 11520511,
        e.x = 24,
        e.y = 89,
        e
    },
    u.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 72,
        e.y = 89,
        e
    },
    u._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "防御：",
        e.textColor = 11520511,
        e.x = 213,
        e.y = 89,
        e
    },
    u.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 260,
        e.y = 89,
        e
    },
    u._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "特攻：",
        e.textColor = 11520511,
        e.x = 24,
        e.y = 134,
        e
    },
    u.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 72,
        e.y = 134,
        e
    },
    u._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "特防：",
        e.textColor = 11520511,
        e.x = 213,
        e.y = 134,
        e
    },
    u.txt4_i = function() {
        var e = new eui.Label;
        return this.txt4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 260,
        e.y = 134,
        e
    },
    u._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "速度：",
        e.textColor = 11520511,
        e.x = 24,
        e.y = 179,
        e
    },
    u.txt5_i = function() {
        var e = new eui.Label;
        return this.txt5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 72,
        e.y = 179,
        e
    },
    u._Label13_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.text = "体力：",
        e.textColor = 11520511,
        e.x = 213,
        e.y = 179,
        e
    },
    u.txt6_i = function() {
        var e = new eui.Label;
        return this.txt6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 15.994332453138,
        e.textColor = 5962239,
        e.x = 260,
        e.y = 179,
        e
    },
    u.btnPetRelation_i = function() {
        var e = new eui.Group;
        return this.btnPetRelation = e,
        e.x = 264,
        e.y = 0,
        e.elementsContent = [this._Image24_i(), this._Label14_i()],
        e
    },
    u._Image24_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbtn_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u._Label14_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "精灵克制",
        e.textColor = 15528703,
        e.x = 14,
        e.y = 4,
        e
    },
    u.processBar1_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar1 = e,
        e.height = 12,
        e.width = 127,
        e.x = 23,
        e.y = 108,
        e.skinName = r,
        e
    },
    u.processBar2_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar2 = e,
        e.height = 12,
        e.width = 127,
        e.x = 212.559,
        e.y = 107.841,
        e.skinName = s,
        e
    },
    u.processBar3_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar3 = e,
        e.height = 12,
        e.width = 127,
        e.x = 23.753,
        e.y = 152.899,
        e.skinName = a,
        e
    },
    u.processBar4_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar4 = e,
        e.height = 12,
        e.width = 127,
        e.x = 212.782,
        e.y = 152.97,
        e.skinName = o,
        e
    },
    u.processBar5_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar5 = e,
        e.height = 12,
        e.width = 127,
        e.x = 23.742,
        e.y = 197.951,
        e.skinName = h,
        e
    },
    u.processBar6_i = function() {
        var e = new eui.ProgressBar;
        return this.processBar6 = e,
        e.height = 12,
        e.width = 127,
        e.x = 212.619,
        e.y = 198.022,
        e.skinName = l,
        e
    },
    u.groupSkill_i = function() {
        var e = new eui.Group;
        return this.groupSkill = e,
        e.visible = !1,
        e.x = 53,
        e.y = 319,
        e.elementsContent = [this.skill0_i(), this.skill1_i(), this.skill2_i(), this.skill3_i(), this.skill4_i(), this.txtNoFifth_i()],
        e
    },
    u.skill0_i = function() {
        var e = new eui.Group;
        return this.skill0 = e,
        e.x = 1,
        e.y = 0,
        e.elementsContent = [this._Image25_i(), this.imgIcon0_i(), this.txtName0_i(), this.txtDamage0_i(), this.txtPP0_i()],
        e
    },
    u._Image25_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.imgIcon0_i = function() {
        var e = new eui.Image;
        return this.imgIcon0 = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 12,
        e
    },
    u.txtName0_i = function() {
        var e = new eui.Label;
        return this.txtName0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 16,
        e
    },
    u.txtDamage0_i = function() {
        var e = new eui.Label;
        return this.txtDamage0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 82,
        e.x = 10,
        e.y = 50.636,
        e
    },
    u.txtPP0_i = function() {
        var e = new eui.Label;
        return this.txtPP0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 75,
        e.x = 102,
        e.y = 50.636,
        e
    },
    u.skill1_i = function() {
        var e = new eui.Group;
        return this.skill1 = e,
        e.x = 191,
        e.y = 0,
        e.elementsContent = [this._Image26_i(), this.imgIcon1_i(), this.txtName1_i(), this.txtDamage1_i(), this.txtPP1_i()],
        e
    },
    u._Image26_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.imgIcon1_i = function() {
        var e = new eui.Image;
        return this.imgIcon1 = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 12,
        e
    },
    u.txtName1_i = function() {
        var e = new eui.Label;
        return this.txtName1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 16,
        e
    },
    u.txtDamage1_i = function() {
        var e = new eui.Label;
        return this.txtDamage1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 82,
        e.x = 10,
        e.y = 50.636,
        e
    },
    u.txtPP1_i = function() {
        var e = new eui.Label;
        return this.txtPP1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 75,
        e.x = 102,
        e.y = 50.636,
        e
    },
    u.skill2_i = function() {
        var e = new eui.Group;
        return this.skill2 = e,
        e.x = 1,
        e.y = 89,
        e.elementsContent = [this._Image27_i(), this.imgIcon2_i(), this.txtName2_i(), this.txtDamage2_i(), this.txtPP2_i()],
        e
    },
    u._Image27_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.imgIcon2_i = function() {
        var e = new eui.Image;
        return this.imgIcon2 = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 12,
        e
    },
    u.txtName2_i = function() {
        var e = new eui.Label;
        return this.txtName2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 16,
        e
    },
    u.txtDamage2_i = function() {
        var e = new eui.Label;
        return this.txtDamage2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 82,
        e.x = 10,
        e.y = 50.636,
        e
    },
    u.txtPP2_i = function() {
        var e = new eui.Label;
        return this.txtPP2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 75,
        e.x = 102,
        e.y = 50.636,
        e
    },
    u.skill3_i = function() {
        var e = new eui.Group;
        return this.skill3 = e,
        e.x = 191,
        e.y = 89,
        e.elementsContent = [this._Image28_i(), this.imgIcon3_i(), this.txtName3_i(), this.txtDamage3_i(), this.txtPP3_i()],
        e
    },
    u._Image28_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.imgIcon3_i = function() {
        var e = new eui.Image;
        return this.imgIcon3 = e,
        e.height = 25,
        e.width = 25,
        e.x = 6,
        e.y = 12,
        e
    },
    u.txtName3_i = function() {
        var e = new eui.Label;
        return this.txtName3 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.textColor = 15068927,
        e.y = 16,
        e
    },
    u.txtDamage3_i = function() {
        var e = new eui.Label;
        return this.txtDamage3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 82,
        e.x = 10,
        e.y = 50.636,
        e
    },
    u.txtPP3_i = function() {
        var e = new eui.Label;
        return this.txtPP3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 75,
        e.x = 102,
        e.y = 50.636,
        e
    },
    u.skill4_i = function() {
        var e = new eui.Group;
        return this.skill4 = e,
        e.visible = !1,
        e.x = 0,
        e.y = 177,
        e.elementsContent = [this._Image29_i(), this._Image30_i(), this.imgIcon4_i(), this.txtName4_i(), this.txtPP4_i(), this.txtDamage4_i()],
        e
    },
    u._Image29_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_imgbg5_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u._Image30_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_2_txt51_png",
        e.x = 6.22,
        e.y = 5,
        e
    },
    u.imgIcon4_i = function() {
        var e = new eui.Image;
        return this.imgIcon4 = e,
        e.height = 25,
        e.width = 25,
        e.x = 52,
        e.y = 13,
        e
    },
    u.txtName4_i = function() {
        var e = new eui.Label;
        return this.txtName4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17.9997132651504,
        e.textColor = 15068927,
        e.x = 84,
        e.y = 17,
        e
    },
    u.txtPP4_i = function() {
        var e = new eui.Label;
        return this.txtPP4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 87,
        e.x = 230,
        e.y = 50.636,
        e
    },
    u.txtDamage4_i = function() {
        var e = new eui.Label;
        return this.txtDamage4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.textColor = 6027519,
        e.width = 82,
        e.x = 53,
        e.y = 50.636,
        e
    },
    u.txtNoFifth_i = function() {
        var e = new eui.Label;
        return this.txtNoFifth = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "该精灵暂无第五技能",
        e.textColor = 12111615,
        e.visible = !1,
        e.x = 106,
        e.y = 212,
        e
    },
    u.groupChooseView_i = function() {
        var e = new eui.Group;
        return this.groupChooseView = e,
        e.scaleX = 1.055,
        e.scaleY = 1.055,
        e.visible = !1,
        e.x = 564,
        e.y = 51,
        e.elementsContent = [this._Image31_i(), this._Label15_i(), this.groupMyPet_i(), this.scrollerAllPet_i(), this.btnDetail_i(), this.btnChange_i()],
        e
    },
    u._Image31_i = function() {
        var e = new eui.Image;
        return e.source = "fight_lab_1_chosse_view_imgbg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    u._Label15_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 15.9793760521911,
        e.text = "点击左上角按钮返回关卡选择，\n点击精灵属性查看精灵详情。\n",
        e.textColor = 8757203,
        e.width = 230,
        e.x = 14,
        e.y = 480,
        e
    },
    u.groupMyPet_i = function() {
        var e = new eui.Group;
        return this.groupMyPet = e,
        e.height = 80,
        e.visible = !0,
        e.width = 500,
        e.x = 4,
        e.y = 45,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    u._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 12,
        e.paddingLeft = 12,
        e.verticalAlign = "middle",
        e
    },
    u.scrollerAllPet_i = function() {
        var e = new eui.Scroller;
        return this.scrollerAllPet = e,
        e.height = 289,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.width = 500,
        e.x = 4,
        e.y = 173,
        e.viewport = this.listAllPet_i(),
        e
    },
    u.listAllPet_i = function() {
        var e = new eui.List;
        return this.listAllPet = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    u._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 12,
        e.orientation = "rows",
        e.paddingLeft = 12,
        e.paddingTop = 12,
        e.verticalGap = 12,
        e
    },
    u.btnDetail_i = function() {
        var e = new eui.Group;
        return this.btnDetail = e,
        e.visible = !0,
        e.x = 390,
        e.y = 480,
        e.elementsContent = [this._Image32_i(), this.txtDetail_i()],
        e
    },
    u._Image32_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "fight_lab_1_chosse_view_imgbtn1_png",
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    u.txtDetail_i = function() {
        var e = new eui.Label;
        return this.txtDetail = e,
        e.fontFamily = "MFShangHei",
        e.size = 18.0391020999276,
        e.text = "精灵属性",
        e.textColor = 16777215,
        e.x = 14,
        e.y = 9,
        e
    },
    u.btnChange_i = function() {
        var e = new eui.Group;
        return this.btnChange = e,
        e.visible = !0,
        e.x = 264,
        e.y = 480,
        e.elementsContent = [this._Image33_i(), this.txtChange_i()],
        e
    },
    u._Image33_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "fight_lab_1_chosse_view_imgbtn1_png",
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    u.txtChange_i = function() {
        var e = new eui.Label;
        return this.txtChange = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18.0391020999276,
        e.text = "替 换",
        e.textColor = 16777215,
        e.y = 9,
        e
    },
    u.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "fight_lab_btnInfo_png",
        e.x = 468,
        e.y = 82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FightLab1SubLevelItemSkin.exml"] = window.FightLab1SubLevelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBGDown", "imgBGUp", "a1", "a2", "a3", "a4", "a5", "a6", "txtName", "txtHasPass", "groupThis"],
        this.height = 65,
        this.width = 493,
        this.elementsContent = [this.groupThis_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.groupThis_i = function() {
        var e = new eui.Group;
        return this.groupThis = e,
        e.x = 20,
        e.y = 0,
        e.elementsContent = [this.imgBGDown_i(), this.imgBGUp_i(), this.a1_i(), this.a2_i(), this.a3_i(), this.a4_i(), this.a5_i(), this.a6_i(), this.txtName_i(), this.txtHasPass_i()],
        e
    },
    i.imgBGDown_i = function() {
        var e = new eui.Image;
        return this.imgBGDown = e,
        e.height = 65,
        e.source = "fight_lab_1_imgbgdown_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgBGUp_i = function() {
        var e = new eui.Image;
        return this.imgBGUp = e,
        e.source = "fight_lab_1_imgbgup_png",
        e.visible = !1,
        e.x = -1.412,
        e.y = -1.412,
        e
    },
    i.a1_i = function() {
        var e = new eui.Image;
        return this.a1 = e,
        e.source = "fight_lab_1_a1_png",
        e.visible = !1,
        e.x = 36.882,
        e.y = 22.413,
        e
    },
    i.a2_i = function() {
        var e = new eui.Image;
        return this.a2 = e,
        e.source = "fight_lab_1_a2_png",
        e.visible = !1,
        e.x = 32.882,
        e.y = 22.413,
        e
    },
    i.a3_i = function() {
        var e = new eui.Image;
        return this.a3 = e,
        e.source = "fight_lab_1_a3_png",
        e.visible = !1,
        e.x = 31.882,
        e.y = 22.413,
        e
    },
    i.a4_i = function() {
        var e = new eui.Image;
        return this.a4 = e,
        e.source = "fight_lab_1_a4_png",
        e.visible = !1,
        e.x = 30.882,
        e.y = 22.413,
        e
    },
    i.a5_i = function() {
        var e = new eui.Image;
        return this.a5 = e,
        e.source = "fight_lab_1_a5_png",
        e.visible = !1,
        e.x = 33.882,
        e.y = 22.414,
        e
    },
    i.a6_i = function() {
        var e = new eui.Image;
        return this.a6 = e,
        e.source = "fight_lab_1_a6_png",
        e.visible = !1,
        e.x = 30.882,
        e.y = 22.413,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 24,
        e.textColor = 16777215,
        e.x = 142,
        e.y = 21,
        e
    },
    i.txtHasPass_i = function() {
        var e = new eui.Label;
        return this.txtHasPass = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "已攻略",
        e.textColor = 4187130,
        e.visible = !1,
        e.x = 360,
        e.y = 24,
        e
    },
    t
} (eui.Skin);