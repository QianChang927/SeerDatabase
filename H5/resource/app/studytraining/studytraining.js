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
studytraining; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = StudyAddItemrenderSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initValue = function() {
            this._currentValue = this._ownValue,
            this._maxValue = 510,
            this._attMaxValue = 255,
            this.hslider.minimum = 0,
            this.hslider.liveDragging = !0,
            this.hslider.maximum = Math.min(255, this._ownValue + this._canUseValue),
            this.hslider.value = this._currentValue
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_add, this._onClickImageButtonEvent, this),
            ImageButtonUtil.add(this.imgBtn_sub, this._onClickImageButtonEvent, this),
            this.hslider.addEventListener(egret.Event.CHANGE, this._onChangeSilder, this)
        },
        i.prototype._onClickImageButtonEvent = function(t) {
            switch (t.currentTarget) {
            case this.imgBtn_add:
                this._setValue(this._currentValue + 1);
                break;
            case this.imgBtn_sub:
                this._setValue(this._currentValue - 1)
            }
        },
        i.prototype._onChangeSilder = function(t) {
            var e = this.hslider.pendingValue;
            return e < this._ownValue ? void this._setValue(this._ownValue) : this._totalValue + e - this._currentValue - this._ownValue > this._maxValue ? (BubblerManager.getInstance().showText("学习力总和已到上限！"), this.hslider.$stage.dispatchEventWith(egret.TouchEvent.TOUCH_END), void this._setValue(this._maxValue - this._totalValue)) : e >= this._attMaxValue ? (BubblerManager.getInstance().showText("该项学习力已达到上限！"), this.hslider.$stage.dispatchEventWith(egret.TouchEvent.TOUCH_END), void this._setValue(this._attMaxValue)) : e - this._currentValue > this._canUseValue ? (BubblerManager.getInstance().showText("没有多余可分配的学习力！"), void this._setValue(this._currentValue)) : void this._setValue(e)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setItemData = function(e, i, n) {
            this._attr = e,
            this._ownValue = i,
            this._canUseValue = n;
            var r = t.ATTR_KEYS.indexOf(this._attr);
            this.icon.source = ClientConfig.getPetAttributeIcon(r);
            var s = t.ATTR_KEYS_CN[r];
            this.txt_attr_name.text = s + "学习力:",
            this.initValue(),
            this._setValue(this._currentValue)
        },
        i.prototype.updateTotalValue = function(t, e) {
            this._totalValue = t,
            this._canUseValue = e
        },
        i.prototype._setValue = function(t) {
            if (! (t < this._ownValue)) {
                if (t > this._attMaxValue) return void BubblerManager.getInstance().showText("该项学习力已达到上限！");
                if (this._totalValue + t - this._currentValue - this._ownValue > this._maxValue) return void BubblerManager.getInstance().showText("学习力总和已到上限！");
                if (t - this._currentValue > this._canUseValue) return void BubblerManager.getInstance().showText("没有多余可分配的学习力！");
                this._currentValue = t,
                this.hslider.value = this._currentValue,
                this.txt_value.textColor = this._currentValue > 0 ? 3004205 : 16777215,
                this.txt_value.text = this._currentValue + "",
                this.dispatchEventWith("event_change_value", !1, this._attr)
            }
        },
        i.prototype.getCurrentValue = function() {
            return this._currentValue
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.StudyAdditemRender = e,
    __reflect(e.prototype, "studytraining.StudyAdditemRender")
} (studytraining || (studytraining = {}));
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
studytraining; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.ownValue = 0,
            i.oldValue = 0,
            i._petdata = t,
            i.skinName = StudyAddSkin,
            i
        }
        return __extends(i, e),
        i.prototype.setinitData = function() {
            var e = PetManager.getPetInfo(this._petdata.catchTime);
            this.ownValue = StudyTrainingController.getinstance().pow,
            this._maxValue = 510,
            this._canUseValue = Math.min(510 - e.ev_sa - e.ev_hp - e.ev_sd - e.ev_sp - e.ev_attack - e.ev_defence, this.ownValue);
            var i = [e.ev_hp, e.ev_attack, e.ev_defence, e.ev_sa, e.ev_sd, e.ev_sp];
            this._attMaxValue = 255,
            this._valueMap = {},
            this._ownValueMap = {},
            this.oldValue = 0;
            for (var n = 0; n < t.ATTR_KEYS.length; n++) this._valueMap[t.ATTR_KEYS[n]] = 0,
            this._ownValueMap[t.ATTR_KEYS[n]] = i[n],
            this.oldValue += i[n]
        },
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.setinitData(),
            this._setPetName();
            for (var i = 0; i < t.ATTR_KEYS.length; i++) {
                var n = this["render_" + i];
                n.addEventListener("event_change_value", this._onChangeItemRenderAttrValue, this),
                n.setItemData(t.ATTR_KEYS[i], this._ownValueMap[t.ATTR_KEYS[i]], this._canUseValue),
                n.updateTotalValue(this._getCurrentTotalValue(), this.getCanUseValue())
            }
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imgBtn_sure, this._onClickImageButtonEvent, this),
            ImageButtonUtil.add(this.imgBtn_close, this._onClickImageButtonEvent, this)
        },
        i.prototype.removeEvents = function() {
            for (var e = 0; e < t.ATTR_KEYS.length; e++) {
                var i = this["render_" + e];
                i.removeEventListener("event_change_value", this._onChangeItemRenderAttrValue, this)
            }
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onChangeItemRenderAttrValue = function(e) {
            var i = e.data,
            n = this["render_" + t.ATTR_KEYS.indexOf(i)],
            r = n.getCurrentValue();
            this._valueMap[i] = r,
            this._setPetName(),
            this._updateItemRenderTotalValue()
        },
        i.prototype._setPetName = function() {
            this.txt_title.text = "【" + PetXMLInfo.getName(this._petdata.id) + "】学习力分配：" + this.getCanUseValue() + "/" + this._maxValue
        },
        i.prototype.getCanUseValue = function() {
            var t = 0;
            for (var e in this._valueMap) t += this._valueMap[e];
            return Math.max(this._canUseValue - t + this.oldValue, 0)
        },
        i.prototype._getCurrentTotalValue = function() {
            var t = 0;
            for (var e in this._valueMap) t += this._valueMap[e];
            return t
        },
        i.prototype._updateItemRenderTotalValue = function() {
            for (var e = 0; e < t.ATTR_KEYS.length; e++) {
                var i = this["render_" + e];
                i.updateTotalValue(this._getCurrentTotalValue(), this.getCanUseValue())
            }
        },
        i.prototype._onClickImageButtonEvent = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.imgBtn_close:
                PopViewManager.getInstance().hideView(this);
                break;
            case this.imgBtn_sure:
                for (var n = 0,
                r = 0,
                s = 0; s < t.ATTR_KEYS.length; s++) {
                    var a = this._valueMap[t.ATTR_KEYS[s]] - this._ownValueMap[t.ATTR_KEYS[s]];
                    3 > s ? n += a << 8 * s: r += a << 8 * (s - 3)
                }
                SocketConnection.sendByQueue(42395, [115, this._petdata.catchTime, n, r],
                function(t) {
                    StudyTrainingController.getinstance().refresh(),
                    PetManager.upDateBagPetInfo(i._petdata.catchTime),
                    PopViewManager.getInstance().hideView(i)
                })
            }
        },
        i
    } (PopView);
    t.StudyAddPanel = e,
    __reflect(e.prototype, "studytraining.StudyAddPanel")
} (studytraining || (studytraining = {}));
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
studytraining; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "StudytrainingBossItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.setInfo = function(t, e, i) {
            this.txtName.text = PetXMLInfo.getName(t),
            this.imgIcon.source = ClientConfig.getPetHeadPath(t),
            this.imgBoss.visible = !1,
            this.imgLocked.visible = !1,
            this.imgSelected.visible = !1,
            this.imgDefeated.visible = !1
        },
        e
    } (eui.Component);
    t.BossItem = e,
    __reflect(e.prototype, "studytraining.BossItem")
} (studytraining || (studytraining = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
studytraining; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "studytraining.MainPanel",
        t
    } ();
    t.PanelConst = e,
    __reflect(e.prototype, "studytraining.PanelConst");
    var i = function() {
        function t() {}
        return t.BOSS_POSITION_3 = [291, 95, 463, 220, 632, 150],
        t.BOSS_POSITION_4 = [291, 222, 463, 95, 632, 223, 805, 155],
        t.BOSS_POSITION_5 = [291, 95, 463, 220, 632, 93, 807, 223, 980, 150],
        t
    } ();
    t.PositionConst = i,
    __reflect(i.prototype, "studytraining.PositionConst");
    var n = function() {
        function t() {}
        return t
    } ();
    t.ValueConst = n,
    __reflect(n.prototype, "studytraining.ValueConst")
} (studytraining || (studytraining = {}));
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
studytraining; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "StudytrainingLevelMenuItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t;
            t = this.data.index < 10 ? "00" + this.data.index: this.data.index < 100 ? "0" + this.data.index: "" + this.data.index,
            this.txtNumLevel.text = t,
            this.imgLock.visible = 0 == this.data.state,
            this.imgUnlock.visible = 0 != this.data.state,
            this.imgIsFighting.visible = 1 == this.data.state,
            this.imgDefeated.visible = 2 == this.data.state,
            this.imgFastFight.visible = 3 == this.data.state;
            var e = 0 == this.data.state ? 8757203 : 4187130;
            this.txtLevel.textColor = this.txtNumLevel.textColor = e,
            this.touchEnabled = this.touchChildren = 0 != this.data.state
        },
        e
    } (eui.ItemRenderer);
    t.LevelMenuItem = e,
    __reflect(e.prototype, "studytraining.LevelMenuItem")
} (studytraining || (studytraining = {}));
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
studytraining; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "StudytrainingNewSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.imgItem1.source = ClientConfig.getItemIcon(1400152),
            this.imgItem2.source = ClientConfig.getItemIcon(1400153),
            this.imgItem0.source = ClientConfig.getItemIcon(2500005),
            e.prototype.initBtnClose.call(this, "study_training_imgtitle_png", this,
            function() {
                t.service.closeModule()
            },
            this),
            this.initBtnHelpById(95),
            this.scroller.left = DeviceInfoManager.adapterOffSetX,
            config.PveBossLearningTraining.load(this.loaded, this)
        },
        i.prototype.loaded = function(t) {
            var e = this;
            StudyTrainingController.getinstance().setup().then(function() {
                e.initData(),
                e.updateData()
            })
        },
        i.prototype.initData = function() {
            this.initConfig(),
            this.addEvent(),
            this.initLevelMenu(),
            this.updateRightView()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.service.showPetBag()
            },
            this),
            this.levelMenu.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.listItemTap, this),
            this.service.registerItemUpdateForText(1400152, this.txtNumItem1, this),
            this.service.registerItemUpdateForText(1400153, this.txtNumItem2, this),
            this.service.registerItemUpdateForText(2500005, this.txtNumItem0, this),
            ImageButtonUtil.add(this.btnFight1, this.fight, this),
            ImageButtonUtil.add(this.btnFight2, this.fight, this),
            ImageButtonUtil.add(this.btnFastFight, this.fastFight, this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!t.isSwitchOn) {
                    if (ItemManager.getNumByID(1400152) <= 0) return void BubblerManager.getInstance().showText("您的激励模组数量不足！");
                    SocketConnection.sendByQueue(42395, [115, 1, 1, 0],
                    function() {
                        t.imgSwitchOn.visible = !0,
                        t.imgSwitchOff.visible = !1,
                        t.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                t.isSwitchOn && SocketConnection.sendByQueue(42395, [115, 1, 0, 0],
                function() {
                    t.imgSwitchOn.visible = !1,
                    t.imgSwitchOff.visible = !0,
                    t.isSwitchOn = !1,
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
        i.prototype.listItemTap = function() {
            var t = this.levelMenu.selectedItem.index;
            this.levelMenu.selectedIndex = t - 1,
            this.levelinfo = this.levelData[t - 1],
            this.updateRightView()
        },
        i.prototype.fight = function() {
            if (this.studyInstance.time < 6) {
                var t = this;
                if (!this.levelinfo || !this.levelinfo.id) return;
                var e = this.levelinfo.id - 1,
                i = this.curBoss + 1 == this.levelinfo.bosslist.split("_").length;
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
                function(n) {
                    var r = this;
                    EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, arguments.callee, t),
                    StudyTrainingController.getinstance().refresh(function() {
                        r.initLevelMenu(r.levelMenu.selectedIndex),
                        r.updateRightView(),
                        r.updateData()
                    },
                    i, {
                        isWin: FightManager.isWin,
                        index: e
                    })
                },
                this),
                egret.lifecycle.stage.touchChildren = !1,
                egret.setTimeout(function() {
                    egret.lifecycle.stage.touchChildren = !0
                },
                this, 1e3),
                SocketConnection.send(CommandID.FIGHT_H5_PVE_BOSS, [115, this.levelinfo.id, 1])
            } else Alarm.show("剩余挑战次数不足！")
        },
        i.prototype.fastFight = function() {
            var t = this;
            this.studyInstance.time < 6 ? ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0 ? SocketConnection.sendByQueue(42395, [115, 2, this.levelinfo.id, 0],
            function(e) {
                StudyTrainingController.getinstance().refresh(function() {
                    t.updateRightView(),
                    t.updateData()
                })
            }) : Alarm.show("道具数量不足！") : Alarm.show("剩余挑战次数不足！")
        },
        i.prototype.initConfig = function() {
            this.studyInstance = StudyTrainingController.getinstance(),
            this.levelData = this.studyInstance.getAllFloorinfo(),
            this.levelMenu.itemRenderer = t.LevelMenuItem,
            this.imgBox.source = ClientConfig.getItemIcon(2300006)
        },
        i.prototype.initLevelMenu = function(t) {
            if (null != t) {
                if (this.levelinfo = this.levelData[t], !this.levelinfo || !this.levelinfo.id) return;
                this.levelStateInfo = this.studyInstance.getFloorStateInfoByLevel(this.levelinfo.id - 1),
                this.curBoss = ~~this.levelStateInfo.pro;
                for (var e = [], i = this.levelData.length, n = 0; i > n; n++) {
                    var r = {};
                    r.index = n + 1,
                    r.index <= this.studyInstance.curFloor ? r.state = 2 : r.index == this.studyInstance.curFloor + 1 ? r.state = 1 : r.state = 0,
                    1 == KTool.getBit(this.studyInstance.floorSweepState, r.index) && (2 == r.state ? r.state = 3 : console.error("已战胜状态与可扫荡状态冲突，当前obj.state=" + r.state)),
                    e[n] = r
                }
                this.levelMenu.dataProvider = new eui.ArrayCollection(e)
            } else {
                var s = this.studyInstance.curFloor;
                s >= 6 && (s = 5),
                this.levelinfo = this.levelData[s],
                this.levelStateInfo = this.studyInstance.getFloorStateInfoByLevel(this.levelinfo.id - 1),
                this.curBoss = ~~this.levelStateInfo.pro;
                for (var e = [], i = this.levelData.length, n = 0; i > n; n++) {
                    var r = {};
                    r.index = n + 1,
                    r.index <= this.studyInstance.curFloor ? r.state = 2 : r.index == this.studyInstance.curFloor + 1 ? r.state = 1 : r.state = 0,
                    1 == KTool.getBit(this.studyInstance.floorSweepState, r.index) && (2 == r.state ? r.state = 3 : console.error("已战胜状态与可扫荡状态冲突，当前obj.state=" + r.state)),
                    e[n] = r
                }
                this.levelMenu.dataProvider = new eui.ArrayCollection(e),
                this.levelMenu.selectedIndex = s
            }
        },
        i.prototype.updateRightView = function() {
            var e = this.levelMenu.selectedItem.index;
            this.levelStateInfo = StudyTrainingController.getinstance().getFloorStateInfoByLevel(this.levelinfo.id - 1),
            this.curBoss = ~~this.levelStateInfo.pro;
            for (var i, n = 0,
            r = this.levelData; n < r.length; n++) {
                var s = r[n];
                if (s.id == e) {
                    i = s;
                    break
                }
            }
            i || console.error("curData not found");
            var a;
            a = 10 > e ? "00" + e: 100 > e ? "0" + e: "" + e,
            this.txtLevel.text = a + "层";
            for (var o = i.rewardid.split("_"), u = i.rewardnum.split("_"), _ = o.length, h = 0; 3 > h; h++) this["imgRewardItem" + (h + 1)].visible = !1,
            this["imgRewardItemBG" + (h + 1)].visible = !1,
            this["txtRewardItem" + (h + 1)].visible = !1,
            ImageButtonUtil.remove(this["imgRewardItem" + (h + 1)]);
            for (var g = function(t) {
                l["imgRewardItem" + (t + 1)].visible = !0,
                l["imgRewardItemBG" + (t + 1)].visible = !0,
                l["txtRewardItem" + (t + 1)].visible = !0,
                l["imgRewardItem" + (t + 1)].source = ClientConfig.getItemIcon(o[t]),
                l["txtRewardItem" + (t + 1)].text = u[t],
                ImageButtonUtil.add(l["imgRewardItem" + (t + 1)],
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: +o[t]
                    })
                },
                l)
            },
            l = this, h = 0; _ > h; h++) g(h);
            this.txtContent1.text = i.raidunlocktext,
            this.txtContent2.text = "首次战胜该层所有精灵，即可解锁下一层挑战";
            for (var m = i.bosslist.split("_"), h = 3; 5 >= h; h++) this["imgLine" + h].visible = h == m.length;
            var c = t.PositionConst["BOSS_POSITION_" + m.length],
            d = m[m.length - 1];
            this.groupMonster.removeChildren();
            var f = 0,
            v = !1;
            for (var p in m) {
                var y = m[p],
                I = new t.BossItem,
                x = void 0;
                x = +p < this.curBoss ? 2 : +p == this.curBoss ? 1 : 0;
                var w = +y == +d;
                w && (v = !0),
                I.setInfo( + y, v, x),
                I.x = c[f++],
                I.y = c[f++],
                this.groupMonster.addChild(I)
            }
            var S = 3 == this.levelMenu.selectedItem.state;
            this.btnFight1.visible = !S,
            this.btnFight2.visible = S,
            this.btnFastFight.visible = S
        },
        i.prototype.updateData = function() {
            var t = this;
            KTool.getBitSet([637, 1000572],
            function(e) {
                t.imgSwitchOff.visible = 0 == e[0],
                t.imgSwitchOn.visible = 1 == e[0],
                t.isSwitchOn = 1 == e[0];
                var i = t.studyInstance.time;
                t.txtNumBox.text = i + "/6",
                t._boxEffect && t._boxEffect.parent && t._boxEffect.parent.removeChild(t._boxEffect);
                var n = "open";
                0 == e[1] && 6 == i && (n = "canopen"),
                t._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "yellow", n),
                t._boxEffect.touchEnabled = !0,
                t._boxEffect.scaleX = t.imgBox.width / t._boxEffect.width,
                t._boxEffect.scaleY = t.imgBox.height / t._boxEffect.height,
                t._boxEffect.x = t.imgBox.x,
                t._boxEffect.y = t.imgBox.y,
                t.imgBox.visible = !1,
                t.imgBox.parent.addChild(t._boxEffect),
                "open" == n ? t._boxEffect.gotoAndStop(1 == e[1] ? t._boxEffect.totalFrames: 0) : t._boxEffect.gotoAndPlay(0, -1),
                ImageButtonUtil.remove(t._boxEffect),
                "canopen" == n ? ImageButtonUtil.add(t._boxEffect,
                function() {
                    SocketConnection.sendByQueue(42395, [115, 3, 0, 0],
                    function() {
                        t.updateData()
                    })
                },
                t) : ImageButtonUtil.add(t._boxEffect,
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: 2300006
                    })
                },
                t)
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.levelMenu.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.listItemTap, this)
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "studytraining.MainPanel")
} (studytraining || (studytraining = {}));
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
studytraining; !
function(t) {
    t.ATTR_KEYS = ["hp", "atk", "def", "satk", "sdef", "speed"],
    t.ATTR_KEYS_CN = ["体力", "攻击", "防御", "特攻", "特防", "速度"];
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.init([{
                panelName: t.PanelConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.Studytraining = e,
    __reflect(e.prototype, "studytraining.Studytraining")
} (studytraining || (studytraining = {}));
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
generateEUI.paths["resource/eui_skins/New/StudytrainingBossItemSkin.exml"] = window.StudytrainingBossItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "imgSelected", "imgIcon", "imgBoss", "imgDefeated", "imgLocked"],
        this.currentState = "up",
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.imgSelected_i(), this.imgIcon_i(), this.imgBoss_i(), this.imgDefeated_i(), this.imgLocked_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pve_study_training_boss_item_imgbg_png",
        t.visible = !0,
        t.x = -3,
        t.y = -3,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵名字精灵名",
        t.textAlign = "center",
        t.textColor = 16580432,
        t.width = 112,
        t.x = -6,
        t.y = 108,
        t
    },
    i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "Studytraining_boss_item_imgselected_png",
        t.visible = !1,
        t.x = -10,
        t.y = -10,
        t
    },
    i.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 96,
        t.source = "",
        t.width = 96,
        t.x = 2,
        t.y = 2,
        t
    },
    i.imgBoss_i = function() {
        var t = new eui.Image;
        return this.imgBoss = t,
        t.source = "Studytraining_boss_item_imgboss_png",
        t.visible = !1,
        t.x = -6,
        t.y = -33,
        t
    },
    i.imgDefeated_i = function() {
        var t = new eui.Image;
        return this.imgDefeated = t,
        t.source = "Studytraining_boss_item_imgdefeated_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgLocked_i = function() {
        var t = new eui.Image;
        return this.imgLocked = t,
        t.source = "Studytraining_boss_item_imglocked_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/New/StudytrainingLevelMenuItemSkin.exml"] = window.StudytrainingLevelMenuItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgSelected", "imgLock", "imgUnlock", "imgFastFight", "imgIsFighting", "imgDefeated", "txtNumLevel", "txtLevel"],
        this.currentState = "up",
        this.elementsContent = [this.imgSelected_i(), this.imgLock_i(), this.imgUnlock_i(), this.imgFastFight_i(), this.imgIsFighting_i(), this.imgDefeated_i(), this.txtNumLevel_i(), this.txtLevel_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("imgSelected", "visible", !0), new eui.SetProperty("imgLock", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "Studytraining_level_menu_item_imgselected_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgLock_i = function() {
        var t = new eui.Image;
        return this.imgLock = t,
        t.source = "Studytraining_level_menu_item_imglock_png",
        t.visible = !1,
        t.x = 9,
        t.y = 10,
        t
    },
    i.imgUnlock_i = function() {
        var t = new eui.Image;
        return this.imgUnlock = t,
        t.source = "Studytraining_level_menu_item_imgunlock_png",
        t.visible = !1,
        t.x = 9,
        t.y = 10,
        t
    },
    i.imgFastFight_i = function() {
        var t = new eui.Image;
        return this.imgFastFight = t,
        t.source = "Studytraining_level_menu_item_imgfastfight_png",
        t.visible = !1,
        t.x = 184,
        t.y = 29,
        t
    },
    i.imgIsFighting_i = function() {
        var t = new eui.Image;
        return this.imgIsFighting = t,
        t.source = "Studytraining_level_menu_item_imgisfighting_png",
        t.visible = !1,
        t.x = 180,
        t.y = 28,
        t
    },
    i.imgDefeated_i = function() {
        var t = new eui.Image;
        return this.imgDefeated = t,
        t.source = "Studytraining_level_menu_item_imgdefeated_png",
        t.visible = !1,
        t.x = 181,
        t.y = 28,
        t
    },
    i.txtNumLevel_i = function() {
        var t = new eui.Label;
        return this.txtNumLevel = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "001",
        t.textColor = 4187130,
        t.visible = !0,
        t.x = 34,
        t.y = 30,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "层",
        t.textColor = 8757203,
        t.visible = !0,
        t.x = 87,
        t.y = 29,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/New/StudytrainingNewSkin.exml"] = window.StudytrainingNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnHelp", "btnClose", "groupMonster", "imgRewardItemBG1", "imgRewardItemBG2", "imgRewardItemBG3", "imgRewardItem1", "imgRewardItem2", "imgRewardItem3", "txtRewardItem1", "txtRewardItem2", "txtRewardItem3", "txtContent2", "txtContent1", "btnFastFight", "btnFight2", "btnFight1", "txtLevel", "btnPet", "btnCure", "imgLine5", "imgLine4", "imgLine3", "txtNumItem2", "imgItem2", "txtNumItem0", "imgItem0", "txtNumItem1", "imgItem1", "imgSwitchOff", "imgSwitchOn", "txtNumBox", "imgBox", "levelMenu", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this.groupMonster_i(), this._Group2_i(), this._Group7_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "Studytraining_bg_jpg",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_imglevelmenubg_png",
        t.visible = !0,
        t.x = 16,
        t.y = 56,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.btnHelp_i(), this.btnClose_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "study_training_imgtitlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "Studytraining_btnhelp_png",
        t.x = 259,
        t.y = 13,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.height = 48,
        t.visible = !0,
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this._Image5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "study_training_imgtitle_png",
        t.visible = !0,
        t.x = 43,
        t.y = 3,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_btnback_png",
        t.x = 14,
        t.y = 5,
        t
    },
    i.groupMonster_i = function() {
        var t = new eui.Group;
        return this.groupMonster = t,
        t.height = 0,
        t.horizontalCenter = -568,
        t.visible = !0,
        t.width = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.horizontalCenter = 124,
        t.y = 66,
        t.elementsContent = [this._Image6_i(), this.imgRewardItemBG1_i(), this.imgRewardItemBG2_i(), this.imgRewardItemBG3_i(), this.imgRewardItem1_i(), this.imgRewardItem2_i(), this.imgRewardItem3_i(), this.txtRewardItem1_i(), this.txtRewardItem2_i(), this.txtRewardItem3_i(), this.txtContent2_i(), this.txtContent1_i(), this._Image7_i(), this._Image8_i(), this.btnFastFight_i(), this.btnFight2_i(), this.btnFight1_i(), this._Image9_i(), this._Image10_i(), this.txtLevel_i(), this.btnPet_i(), this.btnCure_i(), this.imgLine5_i(), this.imgLine4_i(), this.imgLine3_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_imgrightbg_png",
        t.x = 1,
        t.y = 308,
        t
    },
    i.imgRewardItemBG1_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG1 = t,
        t.height = 60,
        t.source = "Studytraining_rewarditem_png",
        t.width = 60,
        t.x = 547,
        t.y = 368,
        t
    },
    i.imgRewardItemBG2_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG2 = t,
        t.height = 60,
        t.source = "Studytraining_rewarditem_png",
        t.width = 60,
        t.x = 638,
        t.y = 368,
        t
    },
    i.imgRewardItemBG3_i = function() {
        var t = new eui.Image;
        return this.imgRewardItemBG3 = t,
        t.height = 60,
        t.source = "Studytraining_rewarditem_png",
        t.width = 60,
        t.x = 729,
        t.y = 368,
        t
    },
    i.imgRewardItem1_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem1 = t,
        t.height = 50,
        t.width = 50,
        t.x = 552,
        t.y = 373,
        t
    },
    i.imgRewardItem2_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem2 = t,
        t.height = 50,
        t.width = 50,
        t.x = 643,
        t.y = 373,
        t
    },
    i.imgRewardItem3_i = function() {
        var t = new eui.Image;
        return this.imgRewardItem3 = t,
        t.height = 50,
        t.width = 50,
        t.x = 734,
        t.y = 373,
        t
    },
    i.txtRewardItem1_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 552.228,
        t.y = 409.1,
        t
    },
    i.txtRewardItem2_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 642.859,
        t.y = 409.1,
        t
    },
    i.txtRewardItem3_i = function() {
        var t = new eui.Label;
        return this.txtRewardItem3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 50,
        t.x = 734.095,
        t.y = 409.1,
        t
    },
    i.txtContent2_i = function() {
        var t = new eui.Label;
        return this.txtContent2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "11111",
        t.textColor = 9157375,
        t.width = 332,
        t.x = 130,
        t.y = 359,
        t
    },
    i.txtContent1_i = function() {
        var t = new eui.Label;
        return this.txtContent1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2222",
        t.textColor = 9157375,
        t.width = 332,
        t.x = 130,
        t.y = 466,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_txttitle1_png",
        t.x = 122,
        t.y = 329,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_txttitle3_png",
        t.x = 529,
        t.y = 329,
        t
    },
    i.btnFastFight_i = function() {
        var t = new eui.Image;
        return this.btnFastFight = t,
        t.source = "Studytraining_btnfastfight_png",
        t.visible = !0,
        t.x = 671,
        t.y = 482,
        t
    },
    i.btnFight2_i = function() {
        var t = new eui.Image;
        return this.btnFight2 = t,
        t.source = "Studytraining_btnfight_png",
        t.visible = !0,
        t.x = 528,
        t.y = 482,
        t
    },
    i.btnFight1_i = function() {
        var t = new eui.Image;
        return this.btnFight1 = t,
        t.source = "Studytraining_btnfight_png",
        t.visible = !1,
        t.x = 600,
        t.y = 482,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_txttitle2_png",
        t.x = 122,
        t.y = 436,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "Studytraining_imglevelbg_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.txtLevel_i = function() {
        var t = new eui.Label;
        return this.txtLevel = t,
        t.fontFamily = "REEJI",
        t.italic = !0,
        t.size = 24,
        t.text = "001层",
        t.textColor = 16765733,
        t.width = 100,
        t.x = 23,
        t.y = 0,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "Studytraining_btnpet_png",
        t.x = 28,
        t.y = 363,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "Studytraining_btncure_png",
        t.x = 28,
        t.y = 443,
        t
    },
    i.imgLine5_i = function() {
        var t = new eui.Image;
        return this.imgLine5 = t,
        t.source = "Studytraining_xianlu1_png",
        t.visible = !1,
        t.x = 57,
        t.y = 59,
        t
    },
    i.imgLine4_i = function() {
        var t = new eui.Image;
        return this.imgLine4 = t,
        t.source = "Studytraining_xianlu2_png",
        t.visible = !1,
        t.x = 53,
        t.y = 60,
        t
    },
    i.imgLine3_i = function() {
        var t = new eui.Image;
        return this.imgLine3 = t,
        t.source = "Studytraining_xianlu3_png",
        t.visible = !1,
        t.x = 57,
        t.y = 96,
        t
    },
    i._Group7_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 21,
        t.y = 12,
        t.elementsContent = [this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 415,
        t.y = 0,
        t.elementsContent = [this._Image11_i(), this.txtNumItem2_i(), this.imgItem2_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        t.source = "Studytraining_imgitem2bg_png",
        t.width = 99.34,
        t.x = 111.66,
        t.y = 6,
        t
    },
    i.txtNumItem2_i = function() {
        var t = new eui.Label;
        return this.txtNumItem2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 165,
        t.y = 7,
        t
    },
    i.imgItem2_i = function() {
        var t = new eui.Image;
        return this.imgItem2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 121,
        t.y = 3,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.x = 304,
        t.y = 0,
        t.elementsContent = [this._Image12_i(), this.txtNumItem0_i(), this.imgItem0_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(70, 7, 71, 8),
        t.source = "Studytraining_imgitem2bg_png",
        t.width = 99.34,
        t.x = 111.66,
        t.y = 6,
        t
    },
    i.txtNumItem0_i = function() {
        var t = new eui.Label;
        return this.txtNumItem0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 165,
        t.y = 7,
        t
    },
    i.imgItem0_i = function() {
        var t = new eui.Image;
        return this.imgItem0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 121,
        t.y = 3,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.x = 557,
        t.y = 0,
        t.elementsContent = [this._Image13_i(), this.txtNumItem1_i(), this.imgItem1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(60, 7, 61, 8),
        t.source = "Studytraining_imgitem1bg_png",
        t.width = 100.834,
        t.x = 80.166,
        t.y = 6,
        t
    },
    i.txtNumItem1_i = function() {
        var t = new eui.Label;
        return this.txtNumItem1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 138,
        t.y = 7,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 90,
        t.y = 3,
        t
    },
    i.imgSwitchOff_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOff = t,
        t.source = "Studytraining_imgswitchoff_png",
        t.visible = !1,
        t.x = 187,
        t.y = 7,
        t
    },
    i.imgSwitchOn_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOn = t,
        t.source = "Studytraining_imgswitchon_png",
        t.visible = !1,
        t.x = 187,
        t.y = 5,
        t
    },
    i._Group6_i = function() {
        var t = new eui.Group;
        return t.width = 414,
        t.x = 0,
        t.y = 1,
        t.elementsContent = [this._Image14_i(), this._Label1_i(), this.txtNumBox_i(), this.imgBox_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.anchorOffsetX = 0,
        t.source = "Studytraining_imgboxbg_png",
        t.width = 369,
        t.x = 39,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 18,
        t.text = "每日肃清任意六层可得",
        t.textColor = 16765733,
        t.x = 126,
        t.y = 5,
        t
    },
    i.txtNumBox_i = function() {
        var t = new eui.Label;
        return this.txtNumBox = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "0/5",
        t.textColor = 16580432,
        t.x = 374,
        t.y = 5,
        t
    },
    i.imgBox_i = function() {
        var t = new eui.Image;
        return this.imgBox = t,
        t.height = 30,
        t.source = "Studytraining_imgbox_png",
        t.width = 36,
        t.x = 316,
        t.y = 1,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 555,
        t.width = 240,
        t.x = 20,
        t.y = 55,
        t.viewport = this.levelMenu_i(),
        t
    },
    i.levelMenu_i = function() {
        var t = new eui.List;
        return this.levelMenu = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = -15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/StudyAddHSlider.exml"] = window.StudyAddHSlider = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["track", "thumb"],
        this.height = 27,
        this.width = 203,
        this.elementsContent = [this.track_i(), this.thumb_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.track_i = function() {
        var t = new eui.Image;
        return this.track = t,
        t.height = 5,
        t.source = "item_300792_itemRender_img_track_png",
        t.verticalCenter = 0,
        t.percentWidth = 100,
        t
    },
    i.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.source = "item_300792_itemRender_imgBtn_thumb_png",
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/StudyAddItemrenderSkin.exml"] = window.StudyAddItemrenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "imgBtn_add", "imgBtn_sub", "txt_attr_name", "txt_value", "hslider"],
        this.height = 42,
        this.width = 658,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.imgBtn_add_i(), this.imgBtn_sub_i(), this.txt_attr_name_i(), this.txt_value_i(), this.hslider_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "item_300792_itemRender_img_barBg_png",
        t.width = 658,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 24,
        t.source = "item_300792_itemRender_icon_hp_png",
        t.width = 24,
        t.x = 33,
        t.y = 8,
        t
    },
    i.imgBtn_add_i = function() {
        var t = new eui.Image;
        return this.imgBtn_add = t,
        t.height = 27,
        t.source = "item_300792_itemRender_imgBtn_add_png",
        t.width = 27,
        t.x = 587,
        t.y = 7,
        t
    },
    i.imgBtn_sub_i = function() {
        var t = new eui.Image;
        return this.imgBtn_sub = t,
        t.height = 27,
        t.source = "item_300792_itemRender_imgBtn_sub_png",
        t.width = 27,
        t.x = 336,
        t.y = 8,
        t
    },
    i.txt_attr_name_i = function() {
        var t = new eui.Label;
        return this.txt_attr_name = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "体力学习力:",
        t.textColor = 16777215,
        t.x = 69,
        t.y = 12,
        t
    },
    i.txt_value_i = function() {
        var t = new eui.Label;
        return this.txt_value = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "000",
        t.textColor = 3004205,
        t.x = 187,
        t.y = 14,
        t
    },
    i.hslider_i = function() {
        var t = new eui.HSlider;
        return this.hslider = t,
        t.skinName = "StudyAddHSlider",
        t.x = 373,
        t.y = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/StudyAddSkin.exml"] = window.StudyAddSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBtn_sure", "imgBtn_close", "txt_title", "render_0", "render_1", "render_2", "render_3", "render_4", "render_5"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.imgBtn_sure_i(), this.imgBtn_close_i(), this._Label1_i(), this._Label2_i(), this.txt_title_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 462,
        t.source = "item_use_panel_s9_bg_1_png",
        t.width = 778,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 384,
        t.source = "item_use_panel_s9_bg_2_png",
        t.width = 748,
        t.x = 15,
        t.y = 63,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 44,
        t.source = "item_use_panel_bg_3_png",
        t.width = 746,
        t.x = 16,
        t.y = 15,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "item_use_panel_title_300792_png",
        t.width = 143,
        t.x = 47,
        t.y = 19,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 52,
        t.source = "item_use_panel_texture_title_png",
        t.width = 39,
        t.x = 17,
        t.y = 13,
        t
    },
    i.imgBtn_sure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_sure = t,
        t.height = 40,
        t.source = "item_use_panel_imgBtn_sure_png",
        t.width = 120,
        t.x = 330,
        t.y = 387,
        t
    },
    i.imgBtn_close_i = function() {
        var t = new eui.Image;
        return this.imgBtn_close = t,
        t.height = 44,
        t.source = "item_use_panel_imgBtn_close_png",
        t.width = 100,
        t.x = 663,
        t.y = 15,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "单项学习力上限255",
        t.textColor = 2500699,
        t.x = 579,
        t.y = 392,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "六项学习力总和上限510",
        t.textColor = 2500699,
        t.x = 547,
        t.y = 411,
        t
    },
    i.txt_title_i = function() {
        var t = new eui.Label;
        return this.txt_title = t,
        t.size = 18,
        t.text = "【精灵名称】学习力分配：000/000",
        t.textColor = 2500699,
        t.x = 252,
        t.y = 77,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 262,
        t.touchEnabled = !1,
        t.width = 658,
        t.x = 61,
        t.y = 106,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this.render_0_i(), this.render_1_i(), this.render_2_i(), this.render_3_i(), this.render_4_i(), this.render_5_i()],
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 2,
        t
    },
    i.render_0_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_0 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 152,
        t.y = 54,
        t
    },
    i.render_1_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_1 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 162,
        t.y = 64,
        t
    },
    i.render_2_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_2 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 172,
        t.y = 74,
        t
    },
    i.render_3_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_3 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 182,
        t.y = 84,
        t
    },
    i.render_4_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_4 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 192,
        t.y = 94,
        t
    },
    i.render_5_i = function() {
        var t = new studytraining.StudyAdditemRender;
        return this.render_5 = t,
        t.skinName = "StudyAddItemrenderSkin",
        t.x = 202,
        t.y = 104,
        t
    },
    e
} (eui.Skin);