var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = t.DailydiamondtaskSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            i.prototype.childrenCreated.call(this),
            this.itemTips.visible = !1,
            this.itemTips.setLimitRect(new egret.Rectangle(0, 0, this.width - 20, this.height)),
            this.sclTask.viewport = this.listTask,
            this.pBarDaily.minimum = 0,
            this.pBarDaily.maximum = 100,
            this.pBarDaily.value = 0,
            DailyDiamondTaskMgr.getInstance().c2s_41400().then(function() {
                t.init()
            })["catch"](function() {
                Alarm.show("拉去数据失败，重新打开面板"),
                t.onClose()
            })
        },
        e.prototype.init = function() {
            var i = this.listTask.dataProvider;
            i.removeAll(),
            this.listTask.itemRenderer = t.ItemTask,
            this._dailyConfigArray = DailyDiamondTaskMgr.getInstance().getDailyConfigArray();
            for (var e = 0; 5 > e; e++) {
                var a = this["reward" + e];
                a.setCallBack(this.onShowDailyRewardTips, this.onHideTips, this.onTouchTapReward, this)
            }
            this._weekConfigArray = DailyDiamondTaskMgr.getInstance().getWeekConfigArray();
            for (var e = 0; 3 > e; e++) {
                var a = this["weekReward" + e];
                a.setCallBack(this.onShowWeekRewardTips, this.onHideTips, this.onTouchTapReward, this)
            }
            this.addEvents(),
            this.updateAll()
        },
        e.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onImgButtonTouchTap, this),
            DailyDiamondTaskMgr.getInstance().addEventListener("event_touchTap_itemTask_btnGet", this.onGetTask, this),
            DailyDiamondTaskMgr.getInstance().addEventListener("event_touchTap_itemTask_btnGo", this.onGoto, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            DailyDiamondTaskMgr.getInstance().removeEventListener("event_touchTap_itemTask_btnGet", this.onGetTask, this),
            DailyDiamondTaskMgr.getInstance().removeEventListener("event_touchTap_itemTask_btnGo", this.onGoto, this)
        },
        e.prototype.onImgButtonTouchTap = function(t) {
            switch (t.currentTarget) {
            case this.btnClose:
                this.onClose()
            }
        },
        e.prototype.onGetTask = function(t) {
            var i = this;
            console.log("onGetTask>>>>", t.data),
            DailyDiamondTaskMgr.getInstance().c2s_41411(t.data.diamond_dailyTask_id).then(function() {
                i.updateAll()
            })["catch"](function(t) {
                t && console.log(t)
            })
        },
        e.prototype.onGoto = function(t) {
            var i = t.data,
            e = config.Diamon_task.getItem(i.diamond_dailyTask_id);
            core.gameUtil.jumpFunc(e.H5go),
            this.onClose()
        },
        e.prototype.getActiveReward = function(t) {
            var i = this;
            console.log("getReward>>>%i", t),
            DailyDiamondTaskMgr.getInstance().c2s_41412(t).then(function() {
                i.updateAll()
            })["catch"](function(t) {
                t && console.log(t)
            })
        },
        e.prototype.onShowDailyRewardTips = function(t) {
            var i = t.getConfig(),
            e = core.gameUtil.RewardDataFormat.parseRewardStyle1(i.rewardtype, i.rewardid, i.rewardcnt);
            this.itemTips.setItemData(e),
            this.itemTips.setDailyRewardRelativePosition(t),
            this.itemTips.visible = !0
        },
        e.prototype.onShowWeekRewardTips = function(t) {
            var i = t.getConfig(),
            e = core.gameUtil.RewardDataFormat.parseRewardStyle1(i.rewardtype, i.rewardid, i.rewardcnt);
            this.itemTips.setItemData(e);
            var a = t.getTransformedBounds(this),
            n = a.x + a.width - 15,
            r = a.y + .5 * a.height;
            this.itemTips.setWeekRewardRelativePosition(new egret.Point(n, r)),
            this.itemTips.visible = !0
        },
        e.prototype.onHideTips = function() {
            this.itemTips.visible = !1
        },
        e.prototype.onTouchTapReward = function(t) {
            var i = DailyDiamondTaskMgr.getInstance().getRewardState(t);
            i === DailyDiamondTaskMgr.REWARD_STATE_GET && this.getActiveReward(t.id)
        },
        e.prototype.updateAll = function() {
            for (var t = 0; t < this._dailyConfigArray.length; t++) {
                var i = this["reward" + t];
                i.setData(this._dailyConfigArray[t])
            }
            var e = DailyDiamondTaskMgr.getInstance().getDailyActiveNum(),
            a = this._dailyConfigArray[this._dailyConfigArray.length - 1].activitynum;
            this.txtDailyNum.text = e + "",
            this.pBarDaily.value = e / a * 100;
            var n = DailyDiamondTaskMgr.getInstance().getTaskArray(),
            r = this.listTask.dataProvider;
            r.removeAll();
            for (var t = 0; t < n.length; t++) r.addItem(n[t]);
            var s = DailyDiamondTaskMgr.getInstance().getWeekActiveNum();
            this.txtWeekNum.text = s + "";
            for (var t = 0; t < this._weekConfigArray.length; t++) {
                var i = this["weekReward" + t];
                i.setData(this._weekConfigArray[t])
            }
        },
        e.prototype.destroy = function() {
            this.removeEvents();
            for (var t = 0; 5 > t; t++) {
                var e = this["reward" + t];
                e.destroy()
            }
            for (var t = 0; 3 > t; t++) {
                var e = this["weekReward" + t];
                e.destroy()
            }
            this.listTask.dataProvider.removeAll(),
            i.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.DailyDiamondTask = i,
    __reflect(i.prototype, "dailyDiamondTask.DailyDiamondTask")
} (dailyDiamondTask || (dailyDiamondTask = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = t.ItemRewardSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            this.imgRewardBox.anchorOffsetX = .5 * this.imgRewardBox.width,
            this.imgRewardBox.anchorOffsetY = .5 * this.imgRewardBox.height,
            this.imgRewardBox.x += this.imgRewardBox.anchorOffsetX,
            this.imgRewardBox.y += this.imgRewardBox.anchorOffsetY,
            this._removePressFun = DisplayUtil.addPressEvent(this, 500,
            function() {
                t._showTipsCallBack.call(t._caller, t, t._rewardConfig)
            },
            function() {
                t._pressTouchTapCallBack.call(t._caller, null)
            },
            function() {
                t._touchTapCallBack.call(t._caller, t._rewardConfig)
            },
            this)
        },
        e.prototype.setCallBack = function(t, i, e, a) {
            this._showTipsCallBack = t,
            this._pressTouchTapCallBack = i,
            this._touchTapCallBack = e,
            this._caller = a
        },
        e.prototype.setData = function(t) {
            this._rewardConfig = t,
            this.updateState()
        },
        e.prototype.updateState = function() {
            this.stopAni();
            var t = DailyDiamondTaskMgr.getInstance().getRewardState(this._rewardConfig),
            i = t === DailyDiamondTaskMgr.REWARD_STATE_COMPLETE;
            this.imgRewardFlag.visible = i,
            this.touchEnabled = this.touchChildren = !i,
            this.txtRewardNum0.text = this._rewardConfig.activitynum + "",
            t === DailyDiamondTaskMgr.REWARD_STATE_GET && this.playAni()
        },
        e.prototype.playAni = function() {
            this.imgRewardBox.rotation = 0;
            var t = 15;
            egret.Tween.get(this.imgRewardBox, {
                loop: !0
            }).to({
                rotation: t
            },
            100).to({
                rotation: -t
            },
            200).to({
                rotation: t
            },
            200).to({
                rotation: -t
            },
            200).to({
                rotation: 0
            },
            100).wait(700)
        },
        e.prototype.stopAni = function() {
            egret.Tween.removeTweens(this.imgRewardBox),
            this.imgRewardBox.rotation = 0
        },
        e.prototype.getConfig = function() {
            return this._rewardConfig
        },
        e.prototype.destroy = function() {
            this.stopAni(),
            this._removePressFun(),
            this._showTipsCallBack = null,
            this._pressTouchTapCallBack = null,
            this._removePressFun = null,
            this._caller = null,
            i.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.ItemReward = i,
    __reflect(i.prototype, "dailyDiamondTask.ItemReward")
} (dailyDiamondTask || (dailyDiamondTask = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = t.ItemTipsSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.imgArrow.anchorOffsetX = .5 * this.imgArrow.width,
            this.imgArrow.anchorOffsetY = this.imgArrow.height;
            var i = this.listItem.dataProvider;
            i.removeAll(),
            this.listItem.itemRenderer = t.TipsItem
        },
        e.prototype.setLimitRect = function(t) {
            this._limitRect = t
        },
        e.prototype.setItemData = function(t) {
            void 0 === t && (t = null);
            var i = this.listItem.dataProvider;
            i.removeAll();
            for (var e = 0; e < t.length; e++) i.addItem(t[e]);
            this.listItem.validateNow(),
            this.grpTips.width = this.imgTipsBg.width = this.listItem.width + 22,
            this.grpTips.height = this.imgTipsBg.height = this.listItem.height + 24
        },
        e.prototype.setDailyRewardRelativePosition = function(t) {
            var i = t.getTransformedBounds(this.parent),
            e = egret.Point.create(i.x + .5 * i.width, i.y),
            a = this.imgTipsBg.width,
            n = this.imgTipsBg.height;
            this.x = e.x,
            this.y = e.y,
            this.imgArrow.rotation = 0,
            this.imgArrow.x = 0,
            this.imgArrow.y = 0,
            this.grpTips.y = -(this.imgArrow.height + n),
            .5 * a + e.x > this._limitRect.width ? this.grpTips.x = -a + .5 * i.width: this.grpTips.x = .5 * -a
        },
        e.prototype.setWeekRewardRelativePosition = function(t) {
            this.x = t.x,
            this.y = t.y,
            this.imgArrow.rotation = 90;
            var i = this.imgArrow.height;
            this.imgArrow.width;
            this.imgArrow.x = 0,
            this.imgArrow.y = 0;
            var e = (this.imgTipsBg.width, this.imgTipsBg.height);
            this.grpTips.x = i;
            var a = 0;.5 * e > this.y ? a = -this.y: .5 * e + this.y > this._limitRect.height && (a = -(.5 * e + this.y - this._limitRect.height)),
            this.grpTips.y = .5 * -e + a
        },
        e.prototype.destroy = function() {
            this._limitRect = null,
            i.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.ItemTips = i,
    __reflect(i.prototype, "dailyDiamondTask.ItemTips")
} (dailyDiamondTask || (dailyDiamondTask = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = t.ItemWeekRewardSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var t = this;
            this._removePressFun = DisplayUtil.addPressEvent(this, 500,
            function() {
                t._showTipsCallBack.call(t._caller, t, t._rewardConfig)
            },
            function() {
                t._pressTouchTapCallBack.call(t._caller, null)
            },
            function() {
                t._touchTapCallBack.call(t._caller, t._rewardConfig)
            },
            this),
            this._animation = DragonbonesUtil.createAnimate("dailyDiamondTask_weekReward_ske_json", "dailyDiamondTask_weekReward_tex_json", "dailyDiamondTask_weekReward_tex_png", "box_fx_01"),
            this._animation.scaleX = this._animation.scaleY = .8,
            this._animation.animation.timeScale = .8,
            this.grpAni.addChild(this._animation)
        },
        e.prototype.setCallBack = function(t, i, e, a) {
            this._showTipsCallBack = t,
            this._pressTouchTapCallBack = i,
            this._touchTapCallBack = e,
            this._caller = a
        },
        e.prototype.setData = function(t) {
            this._rewardConfig = t,
            this.updateState()
        },
        e.prototype.updateState = function() {
            this.stopAni(),
            this.txtValue.text = this._rewardConfig.activitynum + "";
            var t = DailyDiamondTaskMgr.getInstance().getRewardState(this._rewardConfig),
            i = t === DailyDiamondTaskMgr.REWARD_STATE_COMPLETE;
            this.imgWeekFlag.visible = i,
            this.touchEnabled = this.touchChildren = !i,
            t === DailyDiamondTaskMgr.REWARD_STATE_GET && this.playAni()
        },
        e.prototype.playAni = function() {
            this._animation.animation.play("down", 0)
        },
        e.prototype.stopAni = function() {
            this._animation.animation.stop()
        },
        e.prototype.getConfig = function() {
            return this._rewardConfig
        },
        e.prototype.destroy = function() {
            this.stopAni(),
            this._animation.dispose(),
            this._removePressFun(),
            this._showTipsCallBack = null,
            this._pressTouchTapCallBack = null,
            this._removePressFun = null,
            this._caller = null,
            i.prototype.destroy.call(this)
        },
        e
    } (BaseModule);
    t.ItemWeekReward = i,
    __reflect(i.prototype, "dailyDiamondTask.ItemWeekReward")
} (dailyDiamondTask || (dailyDiamondTask = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.skinName = t.ItemTaskSkin,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.addEvents(),
            this.pBarProgress.minimum = 0,
            this.pBarProgress.maximum = 100
        },
        e.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                DailyDiamondTaskMgr.getInstance().dispatchEventWith("event_touchTap_itemTask_btnGet", !1, t.data)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                DailyDiamondTaskMgr.getInstance().dispatchEventWith("event_touchTap_itemTask_btnGo", !1, t.data)
            },
            this);
            for (var i = 0; 2 > i; i++) this["grpItem" + i].name = "index_" + i,
            ImageButtonUtil.add(this["grpItem" + i],
            function(i) {
                var e = parseInt(i.currentTarget.name.split("_")[1]);
                tipsPop.TipsPop.openItemPop({
                    type: t._rewardArray[e].type,
                    id: t._rewardArray[e].id
                })
            },
            this, !1, !1)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.dataChanged = function() {
            var t = this.data,
            i = config.Diamon_task.getItem(t.diamond_dailyTask_id);
            this.txtTaskTitle.text = i.Tasktags,
            this.txtTaskDesc.text = i.Taskdescription;
            var e = t.diamond_dailyTask_cur_progress / t.diamond_dailyTask_max_progress * 100;
            this.pBarProgress.value = e,
            this.txtTaskProgram.text = t.diamond_dailyTask_cur_progress + "/" + t.diamond_dailyTask_max_progress;
            for (var a = core.gameUtil.RewardDataFormat.parseRewardStyle1(i.Rewardtype, i.Rewardid, i.Rewardcnt), n = 0; 2 > n; n++) {
                var r = n < a.length;
                this["grpItem" + n].visible = r,
                r && (this["itemIcon" + n].source = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(a[n]), this["txtCount" + n].text = a[n].count + "")
            }
            this._rewardArray = a,
            this.txtFlag.visible = t.diamond_dailyTask_state === DailyDiamondTaskMgr.REWARD_STATE_COMPLETE,
            this.btnGo.visible = t.diamond_dailyTask_state === DailyDiamondTaskMgr.REWARD_STATE_PROGRESS,
            this.btnGet.visible = t.diamond_dailyTask_state === DailyDiamondTaskMgr.REWARD_STATE_GET
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.ItemTask = i,
    __reflect(i.prototype, "dailyDiamondTask.ItemTask")
} (dailyDiamondTask || (dailyDiamondTask = {}));
var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
__extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
},
dailyDiamondTask; !
function(t) {
    var i = function(i) {
        function e() {
            var e = i.call(this) || this;
            return e.skinName = t.TipsItemSkin,
            e
        }
        return __extends(e, i),
        e.prototype.dataChanged = function() {
            var t = this.data;
            this.icon1.source = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(t);
            var i = core.gameUtil.RewardDataFormat.GetDefaultRewardName(t);
            this.txtName.text = i + "x" + t.count
        },
        e
    } (eui.ItemRenderer);
    t.TipsItem = i,
    __reflect(i.prototype, "dailyDiamondTask.TipsItem")
} (dailyDiamondTask || (dailyDiamondTask = {})),
window.dailyDiamondTask = window.dailyDiamondTask || {};
var __extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
    e.prototype = i.prototype,
    t.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/comp/DailyProgramSkin.exml"] = window.dailyDiamondTask.DailyProgramSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgTaskBarBg", "thumb"],
        this.elementsContent = [this.imgTaskBarBg_i(), this.thumb_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.imgTaskBarBg_i = function() {
        var t = new eui.Image;
        return this.imgTaskBarBg = t,
        t.height = 4,
        t.left = 0,
        t.right = 0,
        t.source = "dailyDiamondTask_imgBarBg_png",
        t.visible = !0,
        t
    },
    e.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.source = "dailyDiamondTask_imgBar_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemRewardSkin.exml"] = window.dailyDiamondTask.ItemRewardSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgRewardBox", "txtRewardNum0", "imgRewardFlag"],
        this.height = 56,
        this.width = 44,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.elementsContent = [this.imgRewardBox_i(), this.txtRewardNum0_i(), this.imgRewardFlag_i()],
        t
    },
    e.imgRewardBox_i = function() {
        var t = new eui.Image;
        return this.imgRewardBox = t,
        t.height = 47,
        t.source = "dailyDiamondTask_imgRewardBox_png",
        t.visible = !0,
        t.width = 44,
        t.x = 0,
        t.y = 0,
        t
    },
    e.txtRewardNum0_i = function() {
        var t = new eui.Label;
        return this.txtRewardNum0 = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 1724068,
        t.text = "150",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.visible = !0,
        t.width = 47,
        t.x = -3,
        t.y = 35,
        t
    },
    e.imgRewardFlag_i = function() {
        var t = new eui.Image;
        return this.imgRewardFlag = t,
        t.height = 48,
        t.source = "dailyDiamondTask_imgDailyFlag_png",
        t.visible = !0,
        t.width = 47,
        t.x = -2.129,
        t.y = -2.688,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/itemTaskProgramSkin.exml"] = window.dailyDiamondTask.itemTaskProgramSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgTaskBarBg", "thumb"],
        this.height = 8,
        this.width = 328,
        this.elementsContent = [this.imgTaskBarBg_i(), this.thumb_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.imgTaskBarBg_i = function() {
        var t = new eui.Image;
        return this.imgTaskBarBg = t,
        t.height = 8,
        t.left = 0,
        t.right = 808,
        t.source = "dailyDiamondTask_imgTaskBarBg_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    e.thumb_i = function() {
        var t = new eui.Image;
        return this.thumb = t,
        t.height = 8,
        t.source = "dailyDiamondTask_imgTaskBar_png",
        t.visible = !0,
        t.width = 328,
        t.x = 0,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemTipsSkin.exml"] = window.dailyDiamondTask.ItemTipsSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgArrow", "imgTipsBg", "listItem", "grpTips", "tips"],
        this.height = 187,
        this.width = 186,
        this.elementsContent = [this.tips_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.visible = !0,
        t.elementsContent = [this.imgArrow_i(), this.grpTips_i()],
        t
    },
    e.imgArrow_i = function() {
        var t = new eui.Image;
        return this.imgArrow = t,
        t.height = 13,
        t.source = "dailyDiamondTask_imgArrow_png",
        t.width = 15,
        t.x = 146,
        t.y = 174,
        t
    },
    e.grpTips_i = function() {
        var t = new eui.Group;
        return this.grpTips = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgTipsBg_i(), this.listItem_i()],
        t
    },
    e.imgTipsBg_i = function() {
        var t = new eui.Image;
        return this.imgTipsBg = t,
        t.height = 174,
        t.source = "dailyDiamondTask_imgTipsBg_png",
        t.width = 186,
        t.x = 0,
        t.y = 0,
        t
    },
    e.listItem_i = function() {
        var t = new eui.List;
        return this.listItem = t,
        t.horizontalCenter = 0,
        t.itemRendererSkinName = dailyDiamondTask.TipsItemSkin,
        t.verticalCenter = 0,
        t.layout = this._VerticalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    e._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    e._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i()],
        t
    },
    e._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object3_i = function() {
        var t = {};
        return t.test = "泰坦之灵x1000000",
        t
    },
    e._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object5_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemWeekRewardSkin.exml"] = window.dailyDiamondTask.ItemWeekRewardSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgWeekReward", "txtValue", "grpAni", "imgWeekFlag"],
        this.height = 143,
        this.width = 143,
        this.elementsContent = [this.imgWeekReward_i(), this.txtValue_i(), this.grpAni_i(), this.imgWeekFlag_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.imgWeekReward_i = function() {
        var t = new eui.Image;
        return this.imgWeekReward = t,
        t.height = 143,
        t.source = "dailyDiamondTask_imgWeekReward_png",
        t.width = 143,
        t.x = 0,
        t.y = 0,
        t
    },
    e.txtValue_i = function() {
        var t = new eui.Label;
        return this.txtValue = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 2911187,
        t.text = "1500",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 65,
        t.x = 41,
        t.y = 108,
        t
    },
    e.grpAni_i = function() {
        var t = new eui.Group;
        return this.grpAni = t,
        t.x = 71,
        t.y = 63,
        t
    },
    e.imgWeekFlag_i = function() {
        var t = new eui.Image;
        return this.imgWeekFlag = t,
        t.height = 139,
        t.source = "dailyDiamondTask_imgWeekFlag_png",
        t.visible = !0,
        t.width = 140,
        t.x = 3,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/DailydiamondtaskSkin.exml"] = window.dailyDiamondTask.DailydiamondtaskSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["bg", "listTask", "sclTask", "task", "imgDailyBg", "pBarDaily", "txtDailyNum", "adnlk", "reward0", "reward1", "reward2", "reward3", "reward4", "daily", "week_bg", "weekReward0", "weekReward1", "weekReward2", "tiaozhanbg", "txtWeekNum", "asdac12", "week", "title", "btnClose", "itemTips"],
        this.height = 594,
        this.width = 1124,
        this.elementsContent = [this.bg_i(), this.task_i(), this.daily_i(), this.week_i(), this.title_i(), this.btnClose_i(), this.itemTips_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 557,
        t.source = "dailyDiamondTask_bg_png",
        t.visible = !0,
        t.width = 1120,
        t.x = 0,
        t.y = 37,
        t
    },
    e.task_i = function() {
        var t = new eui.Group;
        return this.task = t,
        t.visible = !0,
        t.x = 286,
        t.y = 124,
        t.elementsContent = [this.sclTask_i()],
        t
    },
    e.sclTask_i = function() {
        var t = new eui.Scroller;
        return this.sclTask = t,
        t.height = 366,
        t.width = 794,
        t.x = 0,
        t.y = 0,
        t.viewport = this._Group1_i(),
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.listTask_i()],
        t
    },
    e.listTask_i = function() {
        var t = new eui.List;
        return this.listTask = t,
        t.itemRendererSkinName = dailyDiamondTask.ItemTaskSkin,
        t.visible = !0,
        t.layout = this._VerticalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    e._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 6,
        t
    },
    e._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i()],
        t
    },
    e._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e._Object5_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    e.daily_i = function() {
        var t = new eui.Group;
        return this.daily = t,
        t.x = 290,
        t.y = 491,
        t.elementsContent = [this.imgDailyBg_i(), this.pBarDaily_i(), this.adnlk_i(), this.reward0_i(), this.reward1_i(), this.reward2_i(), this.reward3_i(), this.reward4_i()],
        t
    },
    e.imgDailyBg_i = function() {
        var t = new eui.Image;
        return this.imgDailyBg = t,
        t.height = 77,
        t.source = "dailyDiamondTask_imgDailyBg_png",
        t.width = 808,
        t.x = 0,
        t.y = 0,
        t
    },
    e.pBarDaily_i = function() {
        var t = new eui.ProgressBar;
        return this.pBarDaily = t,
        t.maximum = 100,
        t.minimum = 0,
        t.skinName = "dailyDiamondTask.DailyProgramSkin",
        t.x = 180,
        t.y = 31,
        t
    },
    e.adnlk_i = function() {
        var t = new eui.Group;
        return this.adnlk = t,
        t.visible = !0,
        t.x = 16,
        t.y = 18,
        t.elementsContent = [this._Label1_i(), this.txtDailyNum_i(), this._Label2_i()],
        t
    },
    e._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 14.0992097854614,
        t.text = "每日0点进行重置",
        t.textColor = 2595837,
        t.x = 0,
        t.y = 28,
        t
    },
    e.txtDailyNum_i = function() {
        var t = new eui.Label;
        return this.txtDailyNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.text = "000",
        t.textColor = 12187903,
        t.x = 85,
        t.y = -4,
        t
    },
    e._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16.1133804321289,
        t.text = "今日活跃度",
        t.textColor = 14478844,
        t.x = 0,
        t.y = 0,
        t
    },
    e.reward0_i = function() {
        var t = new dailyDiamondTask.ItemReward;
        return this.reward0 = t,
        t.skinName = "dailyDiamondTask.ItemRewardSkin",
        t.x = 274.2,
        t.y = 9,
        t
    },
    e.reward1_i = function() {
        var t = new dailyDiamondTask.ItemReward;
        return this.reward1 = t,
        t.skinName = "dailyDiamondTask.ItemRewardSkin",
        t.x = 390.4,
        t.y = 9,
        t
    },
    e.reward2_i = function() {
        var t = new dailyDiamondTask.ItemReward;
        return this.reward2 = t,
        t.skinName = "dailyDiamondTask.ItemRewardSkin",
        t.x = 506.6,
        t.y = 9,
        t
    },
    e.reward3_i = function() {
        var t = new dailyDiamondTask.ItemReward;
        return this.reward3 = t,
        t.skinName = "dailyDiamondTask.ItemRewardSkin",
        t.x = 622.8,
        t.y = 9,
        t
    },
    e.reward4_i = function() {
        var t = new dailyDiamondTask.ItemReward;
        return this.reward4 = t,
        t.skinName = "dailyDiamondTask.ItemRewardSkin",
        t.x = 739,
        t.y = 9,
        t
    },
    e.week_i = function() {
        var t = new eui.Group;
        return this.week = t,
        t.visible = !0,
        t.x = 33,
        t.y = 65,
        t.elementsContent = [this.week_bg_i(), this.weekReward0_i(), this.weekReward1_i(), this.weekReward2_i(), this.asdac12_i()],
        t
    },
    e.week_bg_i = function() {
        var t = new eui.Image;
        return this.week_bg = t,
        t.height = 516,
        t.source = "dailyDiamondTask_week_bg_png",
        t.visible = !0,
        t.width = 219,
        t.x = 0,
        t.y = 6,
        t
    },
    e.weekReward0_i = function() {
        var t = new dailyDiamondTask.ItemWeekReward;
        return this.weekReward0 = t,
        t.skinName = "dailyDiamondTask.ItemWeekRewardSkin",
        t.x = 39,
        t.y = 0,
        t
    },
    e.weekReward1_i = function() {
        var t = new dailyDiamondTask.ItemWeekReward;
        return this.weekReward1 = t,
        t.skinName = "dailyDiamondTask.ItemWeekRewardSkin",
        t.x = 39,
        t.y = 146,
        t
    },
    e.weekReward2_i = function() {
        var t = new dailyDiamondTask.ItemWeekReward;
        return this.weekReward2 = t,
        t.skinName = "dailyDiamondTask.ItemWeekRewardSkin",
        t.visible = !0,
        t.x = 39,
        t.y = 295,
        t
    },
    e.asdac12_i = function() {
        var t = new eui.Group;
        return this.asdac12 = t,
        t.x = 8,
        t.y = 467,
        t.elementsContent = [this.tiaozhanbg_i(), this.txtWeekNum_i(), this._Label3_i()],
        t
    },
    e.tiaozhanbg_i = function() {
        var t = new eui.Image;
        return this.tiaozhanbg = t,
        t.height = 33,
        t.source = "dailyDiamondTask_tiaozhanbg_png",
        t.width = 203,
        t.x = 0,
        t.y = 0,
        t
    },
    e.txtWeekNum_i = function() {
        var t = new eui.Label;
        return this.txtWeekNum = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 25,
        t.text = "0000",
        t.textColor = 16641945,
        t.x = 120,
        t.y = 4,
        t
    },
    e._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 17,
        t.text = "本周活跃度",
        t.textColor = 15004156,
        t.x = 17,
        t.y = 8,
        t
    },
    e.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.height = 133,
        t.source = "dailyDiamondTask_title_png",
        t.width = 721,
        t.x = 266,
        t.y = 9,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "dailyDiamondTask_btnClose_png",
        t.width = 56,
        t.x = 1068,
        t.y = 0,
        t
    },
    e.itemTips_i = function() {
        var t = new dailyDiamondTask.ItemTips;
        return this.itemTips = t,
        t.skinName = "dailyDiamondTask.ItemTipsSkin",
        t.visible = !1,
        t.x = 259,
        t.y = 268,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/ItemTaskSkin.exml"] = window.dailyDiamondTask.ItemTaskSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgTaskBg0", "itembg0", "itemIcon0", "txtCount0", "grpItem0", "itembg1", "itemIcon1", "txtCount1", "grpItem1", "txtTaskProgram", "txtTaskDesc", "txtTaskTitle", "pBarProgress", "taskItem", "txtFlag", "btnGo", "btnGet"],
        this.height = 84,
        this.width = 794,
        this.elementsContent = [this.taskItem_i(), this.txtFlag_i(), this.btnGo_i(), this.btnGet_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.taskItem_i = function() {
        var t = new eui.Group;
        return this.taskItem = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imgTaskBg0_i(), this.grpItem0_i(), this.grpItem1_i(), this.txtTaskProgram_i(), this.txtTaskDesc_i(), this.txtTaskTitle_i(), this.pBarProgress_i()],
        t
    },
    e.imgTaskBg0_i = function() {
        var t = new eui.Image;
        return this.imgTaskBg0 = t,
        t.height = 84,
        t.source = "dailyDiamondTask_imgTaskBg_png",
        t.width = 794,
        t.x = 0,
        t.y = 0,
        t
    },
    e.grpItem0_i = function() {
        var t = new eui.Group;
        return this.grpItem0 = t,
        t.visible = !0,
        t.x = 498,
        t.y = 15,
        t.elementsContent = [this.itembg0_i(), this.itemIcon0_i(), this.txtCount0_i()],
        t
    },
    e.itembg0_i = function() {
        var t = new eui.Image;
        return this.itembg0 = t,
        t.height = 52,
        t.source = "dailyDiamondTask_itembg_png",
        t.width = 53,
        t.x = 0,
        t.y = 0,
        t
    },
    e.itemIcon0_i = function() {
        var t = new eui.Image;
        return this.itemIcon0 = t,
        t.height = 51,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 51,
        t
    },
    e.txtCount0_i = function() {
        var t = new eui.Label;
        return this.txtCount0 = t,
        t.right = 3,
        t.size = 15.9977703094482,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textColor = 16777215,
        t.y = 35,
        t
    },
    e.grpItem1_i = function() {
        var t = new eui.Group;
        return this.grpItem1 = t,
        t.visible = !0,
        t.x = 564,
        t.y = 15,
        t.elementsContent = [this.itembg1_i(), this.itemIcon1_i(), this.txtCount1_i()],
        t
    },
    e.itembg1_i = function() {
        var t = new eui.Image;
        return this.itembg1 = t,
        t.height = 52,
        t.source = "dailyDiamondTask_itembg_png",
        t.width = 53,
        t.x = 0,
        t.y = 0,
        t
    },
    e.itemIcon1_i = function() {
        var t = new eui.Image;
        return this.itemIcon1 = t,
        t.height = 51,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 51,
        t
    },
    e.txtCount1_i = function() {
        var t = new eui.Label;
        return this.txtCount1 = t,
        t.right = 3,
        t.size = 15.9977703094482,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.y = 35,
        t
    },
    e.txtTaskProgram_i = function() {
        var t = new eui.Label;
        return this.txtTaskProgram = t,
        t.size = 20,
        t.text = "7/10",
        t.textColor = 2595837,
        t.x = 378,
        t.y = 53,
        t
    },
    e.txtTaskDesc_i = function() {
        var t = new eui.Label;
        return this.txtTaskDesc = t,
        t.size = 18.0028495788574,
        t.text = "在精灵王的试炼中挑战8次BOSS",
        t.textColor = 3492213,
        t.x = 171,
        t.y = 19,
        t
    },
    e.txtTaskTitle_i = function() {
        var t = new eui.Label;
        return this.txtTaskTitle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24.0037994384766,
        t.text = "精灵王的试炼",
        t.textColor = 1470438,
        t.x = 17,
        t.y = 15,
        t
    },
    e.pBarProgress_i = function() {
        var t = new eui.ProgressBar;
        return this.pBarProgress = t,
        t.skinName = "dailyDiamondTask.itemTaskProgramSkin",
        t.x = 17,
        t.y = 54,
        t
    },
    e.txtFlag_i = function() {
        var t = new eui.Label;
        return this.txtFlag = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "已领取",
        t.textColor = 3243477,
        t.visible = !0,
        t.x = 688,
        t.y = 31,
        t
    },
    e.btnGo_i = function() {
        var t = new eui.Group;
        return this.btnGo = t,
        t.visible = !0,
        t.x = 659,
        t.y = 20,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    e._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_btn_bg_style_blue_2_png",
        t.width = 112,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "前往",
        t.textColor = 16777215,
        t.x = 35,
        t.y = 9,
        t
    },
    e.btnGet_i = function() {
        var t = new eui.Group;
        return this.btnGet = t,
        t.visible = !0,
        t.x = 660,
        t.y = 20,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "common_btn_bg_style_orange_2_png",
        t.width = 110,
        t.x = 0,
        t.y = 0,
        t
    },
    e._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "领取",
        t.textColor = 8341784,
        t.x = 33,
        t.y = 9,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/TipsItemSkin.exml"] = window.dailyDiamondTask.TipsItemSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["txtName", "icon1"],
        this.elementsContent = [this.txtName_i(), this.icon1_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 16,
        t.text = "泰坦之灵x1000000",
        t.textColor = 16777215,
        t.x = 30,
        t.y = 6,
        t
    },
    e.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 30,
        t.source = "dailyDiamondTask_icon_png",
        t.width = 26,
        t.x = 0,
        t.y = 0,
        t
    },
    i
} (eui.Skin);