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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._createCustomComponent()
        },
        t.prototype._createCustomComponent = function() {},
        t.prototype.addEvents = function() {},
        t.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.updateData = function(e) {
            this.addEvents()
        },
        t.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.BaseView = t,
    __reflect(t.prototype, "yongzhezhengcheng.BaseView")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BravePage2ViewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rbGroup = this.rb_1.group,
            this.curSelectValue = this.rbGroup.selectedValue = 1;
            for (var t = 1; 7 >= t; t++) this["rb_" + t].visible = 7 >= t
        },
        t.prototype.updateData = function() {
            e.prototype.updateData.call(this),
            this.openView()
        },
        t.prototype.addEvents = function() {
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onRbButtonChange, this)
        },
        t.prototype.removeEvents = function() {
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onRbButtonChange, this)
        },
        t.prototype.onRbButtonChange = function() {
            this.curSelectValue = ~~this.rbGroup.selectedValue,
            this.openView()
        },
        t.prototype.openView = function() {
            this.content1.visible = this.curSelectValue <= 3,
            this.content2.visible = 4 == this.curSelectValue,
            this.content3.visible = 5 == this.curSelectValue,
            this.content4.visible = 6 == this.curSelectValue,
            this.content5.visible = 7 == this.curSelectValue,
            this.curSelectValue <= 3 ? this.content1.updateData(this.curSelectValue) : 4 == this.curSelectValue ? this.content2.updateData() : 5 == this.curSelectValue ? this.content3.updateData() : 6 == this.curSelectValue ? this.content4.updateData() : 7 == this.curSelectValue && this.content5.updateData()
        },
        t.prototype.destroy = function() {
            for (var t = 1; 5 >= t; t++) this["content" + t].destroy();
            e.prototype.destroy.call(this)
        },
        t
    } (e.BaseView);
    e.BravePage2View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BraveRewardItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.setDataPage1 = function(e, t, i, n) {
            var o = this;
            this.itemInfos = e.split("_").map(Number);
            var r = this.itemInfos[0];
            if (this.isPetReward = t, this.petIndex = t ? i: 0, this.petId = ~~n, t) if (i > 2) switch (i) {
            case 3:
                this.icon.source = ClientConfig.getPetHeadPath(this.itemInfos[0]);
                break;
            case 4:
                this.icon.width = 45,
                this.icon.height = 40,
                this.icon.y += 2,
                this.icon.source = "y_content_zstx_png";
                break;
            case 5:
                this.icon.source = "y_content_dwjn_png"
            } else switch (r) {
            case 1:
                this.icon.source = ClientConfig.getItemIcon(this.itemInfos[1]);
                break;
            case 2:
                this.icon.source = ClientConfig.getMarkPath(this.itemInfos[1]);
                break;
            case 10:
                var a = AchieveXMLInfo.getRule(this.itemInfos[1], this.itemInfos[2]);
                if (this.txt_num.visible = !1, -1 != [2, 14, 18].indexOf(this.itemInfos[1])) this.icon.source = ClientConfig.getAchieveSPTIcon(a.proicon);
                else {
                    if (!a.proicon) {
                        var s = AchieveXMLInfo.getRule(this.itemInfos[1], this.itemInfos[2]);
                        s.proicon = s.proicon
                    }
                    this.icon.source = ClientConfig.getAchieveIcon(a.proicon)
                }
            } else switch (r) {
            case 1:
                this.icon.source = ClientConfig.getItemIcon(this.itemInfos[1]);
                break;
            case 2:
                this.icon.source = ClientConfig.getMarkPath(this.itemInfos[1]);
                break;
            case 10:
                var a = AchieveXMLInfo.getRule(this.itemInfos[1], this.itemInfos[2]);
                if (this.txt_num.visible = !1, -1 != [2, 14, 18].indexOf(this.itemInfos[1])) this.icon.source = ClientConfig.getAchieveSPTIcon(a.proicon);
                else {
                    if (!a.proicon) {
                        var h = AchieveXMLInfo.getRule(this.itemInfos[1], this.itemInfos[2]);
                        h.proicon = h.proicon
                    }
                    this.icon.source = ClientConfig.getAchieveIcon(a.proicon)
                }
            }
            this.txt_num.text = this.itemInfos[2],
            ImageButtonUtil.add(this.icon,
            function() {
                o.page1IconTouched()
            },
            this)
        },
        t.prototype.page1IconTouched = function() {
            var e = this.itemInfos[0];
            if (this.isPetReward) switch (this.petIndex) {
            case 3:
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: this.petId,
                    type: "pet",
                    thisObj: this
                },
                "", AppDoStyle.HIDEN);
                break;
            case 4:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this.petId, "", AppDoStyle.NULL);
                break;
            case 5:
                if ("number" == typeof this.itemInfos[0]) {
                    var t = {};
                    t.id = this.itemInfos[0],
                    tipsPop.TipsPop.openSkillPop(t)
                } else tipsPop.TipsPop.openSkillPop(this.itemInfos[0]);
                break;
            default:
                var i = {};
                this.itemInfos[1] && (i.id = this.itemInfos[1], tipsPop.TipsPop.openItemPop(i, void 0, LevelManager.topLevel))
            } else switch (e) {
            case 1:
                var i = {};
                i.id = this.itemInfos[1],
                tipsPop.TipsPop.openItemPop(i, void 0, LevelManager.topLevel);
                break;
            case 2:
                var n = {};
                n.ins = this.itemInfos[1],
                tipsPop.TipsPop.openCounterMarkPop(n, void 0, LevelManager.topLevel);
                break;
            case 10:
                var o = AchieveXMLInfo.getRule(this.itemInfos[1], this.itemInfos[2]),
                r = {};
                r.SpeNameBonus = o.SpeNameBonus,
                tipsPop.TipsPop.openTitlePop(r)
            }
        },
        t.prototype.setDataPage2 = function(e) {
            this.icon.source = ClientConfig.getItemIcon(e.id),
            this.txt_num.text = e.num,
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = e.id,
                tipsPop.TipsPop.openItemPop(t, void 0, LevelManager.topLevel)
            },
            this)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.BraveRewardItem = t,
    __reflect(t.prototype, "yongzhezhengcheng.BraveRewardItem")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = BraveSweepItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData()
        },
        i.prototype.initData = function() {
            var t = this;
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.sao,
            function() {
                e.ChildrenPageManager.getInstance().Sweep(t.data.selectNum, t.data.id)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                ModuleManager.hideModule("yongzhezhengcheng"),
                ModuleManager.showModuleByID(e.ChildrenPageManager.getInstance().moduleIDArr[t.data.selectNum - 1])
            },
            this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this)
        },
        i.prototype.startRemoveDialog = function(e) {
            e.currentTarget == this.sao && (this.canSweep || BubblerManager.getInstance().showText("提升勇者等级后解锁!"))
        },
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.sao.visible = this.data.canSweep,
            this.not.visible = !this.data.canSweep,
            this.txt_layer.text = "第" + this.data.id + "层";
            for (var e = 0; 2 > e; e++) {
                var i = {};
                i.id = this.data.arrAwardId[e],
                i.num = this.data.arrAwardNum[e],
                this["reward" + (e + 1)].setDataPage2(i)
            }
            this.btnGo.visible = !this.sao.visible
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    e.BraveSweepItem = t,
    __reflect(t.prototype, "yongzhezhengcheng.BraveSweepItem")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = BraveTaskItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData()
        },
        i.prototype.initData = function() {
            var t = this;
            ImageButtonUtil.add(this.go,
            function() {
                return __awaiter(t, void 0, void 0,
                function() {
                    var t, i;
                    return __generator(this,
                    function(n) {
                        if (t = config.Brave_guide.getItem(this.data.cfg.id), i = this.value.cfg.jump.split("_"), t.guideparam.split(";").length > 0) switch (t.guidetype) {
                        case 0:
                            this.hideModuleAndGo(i);
                            break;
                        case 1:
                            PopViewManager.getInstance().openView(new e.ImageGuidePopView(t, i));
                            break;
                        case 2:
                            PopViewManager.getInstance().openView(new e.TextGuidePopView(t, i))
                        } else this.hideModuleAndGo(i);
                        return [2]
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.get,
            function() {
                if (t.value.currentlv < t.value.currentSelectLv) return void BubblerManager.getInstance().showText("勇者等级不足!");
                t.get.visible = !1;
                var i = 15 == t.value.currentlv || 30 == t.value.currentlv,
                n = i && 1 == t.value.curProgress;
                AwardManager.isSkipWaiting = !0,
                SocketConnection.sendByQueue(41428, [t.value.current_taskInfo.Task_id],
                function() { (3 == t.value.curProgress || n) && AwardManager.CustomItemDialog(new e.AwardBraveLevelDialog(t.value.currentlv)),
                    EventManager.dispatchEventWith("Item_Load")
                })
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.lock.visible = !1
        },
        i.prototype.hideModuleAndGo = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return StatLogger.log("勇者征程", "扫荡", "玩家点击跳转按钮前往任意副本"),
                        [4, ModuleManager.hideModule("yongzhezhengcheng")];
                    case 1:
                        return i.sent(),
                        1 == ~~e[0] ? MapManager.changeMap(~~e[1]) : 2 == ~~e[0] && (t = KTool.evalPram(e[2]), ModuleManager.showModuleByID(~~e[1], t)),
                        [2]
                    }
                })
            })
        },
        i.prototype.dataChanged = function() {
            if (t.prototype.dataChanged.call(this), void 0 != this.data.cfg) {
                this.value = this.data;
                var e, i, n = this.value.cfg.rewardinfo.split(";");
                this.value.current_taskInfo.Task_curprogress >= this.value.current_taskInfo.Task_max_progress ? (e = 65301, i = this.value.current_taskInfo.Task_max_progress) : (e = 16711680, i = this.value.current_taskInfo.Task_curprogress),
                this.txt_content.textFlow = [{
                    text: this.value.cfg.title + "    (",
                    style: {
                        textColor: 16777215
                    }
                },
                {
                    text: i + "",
                    style: {
                        textColor: e
                    }
                },
                {
                    text: "/" + this.value.current_taskInfo.Task_max_progress + ")",
                    style: {
                        textColor: 16777215
                    }
                }];
                for (var o = 0; 3 > o; o++) this["reward" + (o + 1)].visible = o < n.length;
                for (var o = 0; o < n.length; o++) this["reward" + (o + 1)].setDataPage1(n[o]);
                this.value.currentlv >= this.value.currentSelectLv ? (this.done.visible = 2 == this.value.current_taskInfo.Task_state, this.get.visible = 1 == this.value.current_taskInfo.Task_state, this.go.visible = 0 == this.value.current_taskInfo.Task_state) : 1 == this.value.current_taskInfo.Task_state ? (this.lock.visible = !0, this.get.visible = !1, this.done.visible = !1, this.go.visible = !1) : (this.done.visible = 2 == this.value.current_taskInfo.Task_state, this.go.visible = 0 == this.value.current_taskInfo.Task_state, this.lock.visible = !1, this.get.visible = !1)
            }
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    e.BraveTaskItem = t,
    __reflect(t.prototype, "yongzhezhengcheng.BraveTaskItem")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = Child4ViewItemSkin,
            i.data = t,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grp_item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.initData()
        },
        t.prototype.touchHandle = function(e) {
            EventManager.dispatchEventWith("OtherTouch", !1, this.data),
            this.currentState = "down"
        },
        t.prototype.initData = function() {
            this.txt_Titlename.text = this.data.bosstitle,
            this.petName.text = PetXMLInfo.getName(this.data.bosslist);
            var e = SystemTimerManager.sysBJDate.getDay(),
            t = this.data.unlimite == e || 6 == e;
            this.isUp.visible = t,
            this.imgWeek.visible = !t,
            this.imgWeek.source = "y_childview_" + this.data.unlimite + "_png"
        },
        t.prototype.destroy = function() {
            this.grp_item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.Component);
    e.Child4ViewItem = t,
    __reflect(t.prototype, "yongzhezhengcheng.Child4ViewItem")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = Child5ViewItemSkin,
            i.data = t,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grp_item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.txt_Titlename.text = this.data.str,
            this.txt_leftTime.text = "今日已挑战次数：" + this.data.times
        },
        t.prototype.touchHandle = function(e) {
            EventManager.dispatchEventWith("OtherTouchPage5", !1, this.data),
            this.currentState = "down"
        },
        t.prototype.updateData = function(e) {
            this.txt_leftTime.text = "今日已挑战次数：" + e
        },
        t.prototype.destroy = function() {
            this.grp_item.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandle, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t
    } (eui.Component);
    e.Child5ViewItem = t,
    __reflect(t.prototype, "yongzhezhengcheng.Child5ViewItem")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n._level = i,
            n.skinName = e.AwardDialogSkin,
            n.width = LevelManager.stage.stageWidth,
            n.bgGroup.width = n.width,
            n.bgGroup.height = LevelManager.stage.stageHeight,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            EventManager.dispatchEventWith("updateBarveLevel");
            var e = this._level + 1 > 30 ? 30 : this._level + 1;
            this.grp_rightLevel.visible = 30 != this._level,
            this.txt_curLevel.text = this._level + "",
            this.txt_nextLevel.text = e + "",
            this.txt_LV.text = e + "",
            ImageButtonUtil.add(this.bgGroup, this.destroy, this),
            this.initAnim()
        },
        i.prototype.initAnim = function() {
            this.awardAnim1 = SpineUtil.createAnimate("yongzhezhengcheng"),
            this.awardAnim2 = SpineUtil.createAnimate("yongzhezhengcheng"),
            this.addChild(this.awardAnim1),
            this.addChild(this.awardAnim2),
            this.awardAnim1.scaleX = this.awardAnim1.scaleY = .5,
            this.awardAnim2.scaleX = this.awardAnim2.scaleY = .5,
            this.awardAnim2.visible = !1,
            this.awardAnim1.x = 324,
            this.awardAnim1.y = 189,
            this.awardAnim1.touchEnabled = !1;
            var e = this.txt_LV,
            t = this.awardAnim1;
            this.removeChild(this.txt_LV),
            this.addChild(e);
            var i = this.levelIcon;
            i.visible = !1,
            e.visible = !1;
            this.awardAnim1.play("xunzhangshengji", 1, 0, {
                playEnd: function() {
                    t.visible = !1,
                    i.visible = !0
                },
                custom: function(t) {
                    console.log("事件：", t.data),
                    e.visible = !0,
                    e.scaleX = 0,
                    egret.Tween.get(e).to({
                        scaleX: 1
                    },
                    500, egret.Ease.quadOut)
                }
            })
        },
        i.prototype.showItems = function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = new AwardDialogItem(e[t]);
                this.grpContainer.addChild(i)
            }
        },
        i.prototype.startEvent = function() {
            LevelManager.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this)
        },
        i.prototype.startRemoveDialog = function(e) {
            if (e.target instanceof AwardDialogItem) {
                var t = e.target.item;
                if (t.type == AwardType.TYPE_MARK) {
                    var i = {};
                    i.ins = t.id,
                    tipsPop.TipsPop.openCounterMarkPop(i, void 0, LevelManager.topLevel)
                } else if (t.type == AwardType.TYPE_ITEM) if (ItemXMLInfo.getType(t.id)) {
                    var n = {};
                    n.clothesId = t.id,
                    tipsPop.TipsPop.openClothesPop(n, void 0, !1, LevelManager.topLevel)
                } else {
                    var o = {};
                    o.id = t.id,
                    tipsPop.TipsPop.openItemPop(o, void 0, LevelManager.topLevel)
                }
            } else;
        },
        i.prototype.destroy = function() {
            LevelManager.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startRemoveDialog, this),
            ImageButtonUtil.removeAll(this),
            this.parent && (this.parent.removeChild(this), EventManager.dispatchEventWith(AwardEvent.CLOSE_AWARD_DIALOG))
        },
        i
    } (AwardBaseDialog);
    e.AwardBraveLevelDialog = t,
    __reflect(t.prototype, "yongzhezhengcheng.AwardBraveLevelDialog")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.currentLevel = 0,
            e.curProgress = 0,
            e.arr = [],
            e.lastPosX = 0,
            e.skinName = BravePage1ViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._list.itemRenderer = e.BraveTaskItem
        },
        i.prototype.updateData = function() {
            t.prototype.updateData.call(this),
            this.initLvInfo()
        },
        i.prototype.initLvInfo = function() {
            this.getCurData(0)
        },
        i.prototype.reShow = function() {
            this.getCurData(this.currentSelectLevel)
        },
        i.prototype.getCurData = function(t, i) {
            var n = this;
            if (void 0 === i && (i = !1), t < this.currentLevel && i) {
                this.currentSelectLevel = t,
                this.currentuserState = 1;
                for (var o = [], r = config.Brave_lv.getItem(t).taskid.split(";"), a = config.Brave_task.getItem(t), s = 15 == t ? 2 : 4, h = 0; s > h; h++) {
                    var u = new e.Journey_level_TaskInfos;
                    u.Task_id = ~~r[h],
                    u.Task_max_progress = u.Task_curprogress = ~~a.value,
                    u.Task_state = 2,
                    o.push(u)
                }
                return this.arr = o,
                void this.updateView()
            }
            SocketConnection.sendByQueue(41427, [t],
            function(t) {
                var i = t.data;
                n.currentSelectLevel = i.readUnsignedInt(),
                n.currentLevel = i.readUnsignedInt(),
                n.currentuserState = i.readUnsignedInt();
                for (var o = i.readUnsignedInt(), r = [], a = 0; o > a; a++) r.push(new e.Journey_level_TaskInfos(i));
                n.arr = r,
                n.updateView()
            })
        },
        i.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnLeft, this.onIamgeButtonTouchTapHandler, this),
            ImageButtonUtil.add(this.btnRight, this.onIamgeButtonTouchTapHandler, this),
            EventManager.addEventListener("Item_Load", this.updateData, this),
            egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        },
        i.prototype.onTouchBegin = function(e) {
            egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_END, this.onEndDrag, this),
            this.lastPosX = e.stageX
        },
        i.prototype.onEndDrag = function(e) {
            this.lastPosX - e.stageX > 10 ? this.rightPage() : this.lastPosX - e.stageX < -10 && this.leftPage()
        },
        i.prototype.onIamgeButtonTouchTapHandler = function(e) {
            switch (e.target) {
            case this.btnLeft:
                this.leftPage();
                break;
            case this.btnRight:
                this.rightPage()
            }
        },
        i.prototype.leftPage = function() {
            this.currentSelectLevel > 1 ? this.currentSelectLevel--:1 == this.currentSelectLevel && (this.currentSelectLevel = 30),
            this.logoAnim(!0),
            this.getCurData(this.currentSelectLevel, !0)
        },
        i.prototype.rightPage = function() {
            30 == this.currentSelectLevel && (this.currentSelectLevel = 0),
            this.currentSelectLevel++,
            this.logoAnim(!1),
            this.getCurData(this.currentSelectLevel, !0)
        },
        i.prototype.logoAnim = function(e) {
            var t = this;
            this.grp_Logo_Copy.visible = !0;
            var i = this.grp_Logo.x,
            n = e ? 100 : -100;
            this.grp_Logo_Copy.x = i - n,
            this.btnLeft.touchEnabled = this.btnRight.touchEnabled = !1,
            gsap.to(this.grp_Logo_Copy, {
                x: 0,
                alpha: 1,
                duration: .2
            }),
            gsap.to(this.grp_Logo, {
                x: n,
                alpha: 0,
                duration: .2,
                onComplete: function() {
                    t.grp_Logo.alpha = 1,
                    t.grp_Logo.x = i,
                    t.grp_Logo_Copy.visible = !1,
                    t.btnLeft.touchEnabled = t.btnRight.touchEnabled = !0
                }
            })
        },
        i.prototype.imgLoadHandler = function() {
            for (var e = 0,
            t = 0; t < this.arr.length; t++) 2 == this.arr[t].Task_state && e++;
            this.curProgress = e
        },
        i.prototype.updateView = function() {
            this.imgLoadHandler();
            var e = config.Brave_lv.getItem(this.currentSelectLevel);
            this.txtLevel_0.text = this.txtLevel_Copy.text = this.currentSelectLevel + "";
            var t = "" != e.petid_newseid_5thmoveid,
            i = e.upreward.split(";"),
            n = [];
            t && (n = e.petid_newseid_5thmoveid.split("_"));
            for (var o = i.concat(n), r = 0; 6 > r; r++) this["reward" + (r + 1)].visible = r < o.length;
            for (var r = 0; r < o.length; r++) t ? this["reward" + (r + 1)].setDataPage1(o[r], t, r, n[0]) : this["reward" + (r + 1)].setDataPage1(o[r], t, r);
            var a = this.GetData(this.currentSelectLevel);
            this._list.dataProvider = new eui.ArrayCollection(a)
        },
        i.prototype.GetData = function(e) {
            var t = [],
            i = 4; (15 == e || 30 == e) && (i = 2);
            for (var n = 0; i > n; n++) {
                var o = {};
                o.currentlv = this.currentLevel,
                o.currentSelectLv = e,
                o.current_taskInfo = this.arr[n],
                o.currentState = this.currentuserState,
                o.curProgress = this.curProgress,
                15 >= e ? o.cfg = config.Brave_task.getItem(4 * (e - 1) + n + 1) : o.cfg = config.Brave_task.getItem(4 * (e - 1) + n - 1),
                t.push(o)
            }
            return t
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("Item_Load", this.updateData, this),
            egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this)
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.BravePage1View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage1View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function() {
        function e(e) {
            e && (this.task_id = e.readUnsignedInt(), this.task_curprogress = e.readUnsignedInt(), this.task_max_progress = e.readUnsignedInt(), this.task_state = e.readUnsignedInt())
        }
        return Object.defineProperty(e.prototype, "Task_id", {
            get: function() {
                return this.task_id
            },
            set: function(e) {
                this.task_id = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "Task_curprogress", {
            get: function() {
                return this.task_curprogress
            },
            set: function(e) {
                this.task_curprogress = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "Task_max_progress", {
            get: function() {
                return this.task_max_progress
            },
            set: function(e) {
                this.task_max_progress = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "Task_state", {
            get: function() {
                return this.task_state
            },
            set: function(e) {
                this.task_state = e
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } ();
    e.Journey_level_TaskInfos = t,
    __reflect(t.prototype, "yongzhezhengcheng.Journey_level_TaskInfos");
    var i = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = MainpanelSkin,
            t.taskJumps = [],
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData()
        },
        t.prototype.initData = function() {
            this.rbGroup = this.rb_1.group,
            this.rbGroup.selectedValue = this.curSelectValue = 1,
            this.openView(),
            this.addEvent(),
            this.showRecommendPet()
        },
        t.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.onIamgeButtonTouchTapHandler, this),
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onRbButtonChange, this),
            ImageButtonUtil.add(this.btnGetPet, this.onGetPetButtonTap, this)
        },
        t.prototype.onRbButtonChange = function(e) {
            this.curSelectValue = ~~this.rbGroup.selectedValue,
            this.openView()
        },
        t.prototype.openView = function() {
            for (var e = 0; e < this._viewPage.getChildAt(0).numChildren; e++) this.curSelectValue - 1 == e ? (this["page" + (e + 1)].visible = !0, this["page" + (e + 1)].updateData()) : this["page" + (e + 1)].visible = !1
        },
        t.prototype.onIamgeButtonTouchTapHandler = function(e) {
            switch (e.target) {
            case this.btnClose:
                this.onClose()
            }
        },
        t.prototype.showRecommendPet = function() {
            for (var e = this,
            t = config.Brave_task.getItems(), i = [], n = 0; n < t.length; n++) 20 == t[n].tasktype && (i.push( + t[n].taskparam.split("_")[0]), this.taskJumps.push(t[n].jump));
            PetManager.checkMultiPet(i,
            function(t) {
                for (var n = !0,
                o = 0; o < t.length; o++) if (0 == t[o]) {
                    e.text_petName.text = PetXMLInfo.getName(i[o]),
                    e.petImage.source = "resource/assets/warriorJourney/pet/" + i[o] + ".png",
                    n = !1,
                    e.currRecommendPetIndex = o;
                    break
                }
                n && (e.currRecommendPetIndex = i.length - 1, e.text_petName.text = PetXMLInfo.getName(i[i.length - 1]), e.petImage.source = "resource/assets/warriorJourney/pet/" + i[i.length - 1] + ".png")
            })
        },
        t.prototype.onGetPetButtonTap = function() {
            var e = this.taskJumps[this.currRecommendPetIndex].split("_");
            if (StatLogger.log("勇者征程", "扫荡", "玩家点击跳转按钮前往任意副本"), ModuleManager.hideModule("yongzhezhengcheng"), 1 == ~~e[0]) MapManager.changeMap(~~e[1]);
            else if (2 == ~~e[0]) {
                var t = KTool.evalPram(e[2]);
                ModuleManager.showModuleByID(~~e[1], t)
            }
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.page1.destroy(),
            this.page2.destroy(),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onRbButtonChange, this),
            AwardManager.isSkipWaiting = !1
        },
        t
    } (BaseModule);
    e.Yongzhezhengcheng = i,
    __reflect(i.prototype, "yongzhezhengcheng.Yongzhezhengcheng")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t(t, i) {
            var n = e.call(this) || this;
            return n.skinName = ImageGuidePopViewSkin,
            n.cfg = t,
            n.jumpid = i,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.init(),
            this.updateImage()
        },
        t.prototype.init = function() {
            this.imageNames = this.cfg.guideparam.split(";"),
            this.currImageIndex = 1,
            this.nextImageIndex = 1,
            this.imageNames.length > 1 ? this.addEvent() : (this.arrowLeft.visible = !1, this.arrowRight.visible = !1)
        },
        t.prototype.addEvent = function() {
            ImageButtonUtil.add(this.arrowLeft, this.onArrowButtonTap, this),
            ImageButtonUtil.add(this.arrowRight, this.onArrowButtonTap, this)
        },
        t.prototype.onArrowButtonTap = function(e) {
            switch (e.target) {
            case this.arrowLeft:
                this.leftPage();
                break;
            case this.arrowRight:
                this.rightPage()
            }
        },
        t.prototype.leftPage = function() {
            this.nextImageIndex > 1 ? --this.nextImageIndex: 1 == this.nextImageIndex && (this.nextImageIndex = 1),
            this.flipAnim(!0),
            this.updateImage()
        },
        t.prototype.rightPage = function() {
            this.nextImageIndex == this.imageNames.length && (this.nextImageIndex = this.imageNames.length - 1),
            ++this.nextImageIndex,
            this.flipAnim(!1),
            this.updateImage()
        },
        t.prototype.flipAnim = function(e) {
            var t = this;
            this.imageGroupCopy.visible = !0,
            this.imageGroupCopy.alpha = 0;
            var i = this.imageGroup.x,
            n = this.imageGroup.x,
            o = e ? 100 : -100;
            this.imageGroupCopy.x = n - o,
            this.arrowLeft.touchEnabled = this.arrowRight.touchEnabled = !1,
            gsap.to(this.imageGroupCopy, {
                x: i,
                alpha: 1,
                duration: .3
            }),
            gsap.to(this.imageGroup, {
                x: n + o,
                alpha: 0,
                duration: .3,
                onComplete: function() {
                    t.imageGroup.alpha = 1,
                    t.imageGroup.x = n,
                    t.imageGroupCopy.visible = !1,
                    t.arrowLeft.touchEnabled = t.arrowRight.touchEnabled = !0,
                    t.currImageIndex = t.nextImageIndex,
                    t.updateImage()
                }
            })
        },
        t.prototype.updateImage = function() {
            this.petImage.source = "resource/assets/warriorJourney/guide/" + this.imageNames[this.currImageIndex - 1] + ".png",
            this.petImageCopy.source = "resource/assets/warriorJourney/guide/" + this.imageNames[this.nextImageIndex - 1] + ".png",
            this.arrowLeft.visible = 1 < this.nextImageIndex,
            this.arrowRight.visible = this.nextImageIndex < this.imageNames.length
        },
        t.prototype.destroy = function() {
            if (StatLogger.log("勇者征程", "扫荡", "玩家点击跳转按钮前往任意副本"), ModuleManager.hideModule("yongzhezhengcheng"), 1 == ~~this.jumpid[0]) MapManager.changeMap(~~this.jumpid[1]);
            else if (2 == ~~this.jumpid[0]) {
                var e = KTool.evalPram(this.jumpid[2]);
                ModuleManager.showModuleByID(~~this.jumpid[1], e)
            }
        },
        t
    } (PopView);
    e.ImageGuidePopView = t,
    __reflect(t.prototype, "yongzhezhengcheng.ImageGuidePopView")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t(t, i) {
            var n = e.call(this) || this;
            return n.skinName = TextGuidePopViewSkin,
            n.cfg = t,
            n.jumpid = i,
            n.cacheAsBitmap = !0,
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateData()
        },
        t.prototype.updateData = function() {
            var e = this.cfg.guideparam.split(";");
            this.content_difficulty.text = e[0],
            this.content_timeCount.text = e[1],
            this.content_recommendPet.text = e[2]
        },
        t.prototype.destroy = function() {
            if (StatLogger.log("勇者征程", "扫荡", "玩家点击跳转按钮前往任意副本"), ModuleManager.hideModule("yongzhezhengcheng"), 1 == ~~this.jumpid[0]) MapManager.changeMap(~~this.jumpid[1]);
            else if (2 == ~~this.jumpid[0]) {
                var e = KTool.evalPram(this.jumpid[2]);
                ModuleManager.showModuleByID(~~this.jumpid[1], e)
            }
        },
        t
    } (PopView);
    e.TextGuidePopView = t,
    __reflect(t.prototype, "yongzhezhengcheng.TextGuidePopView")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.iconIds = [2300005, 2300006, 2300002],
            e.boxNames = ["green", "yellow", "blue"],
            e.skinName = BravePage2Child1ViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._list2.itemRenderer = e.BraveSweepItem,
            e.ChildrenPageManager.getInstance().init()
        },
        i.prototype.updateData = function(e) {
            this._scorl.viewport.scrollV = 0,
            this._scorl.stopAnimation(),
            t.prototype.updateData.call(this),
            this.curSelectNum = e,
            this.updateView()
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                t.isSwitchOn || e.ChildrenPageManager.getInstance().c2s_setDoubleItemStatus(!0, t.curSelectNum).then(function() {
                    t.imgSwitchOn.visible = !0,
                    t.imgSwitchOff.visible = !1,
                    t.isSwitchOn = !0,
                    BubblerManager.getInstance().showText("激励模组已开启")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                t.isSwitchOn && e.ChildrenPageManager.getInstance().c2s_setDoubleItemStatus(!1, t.curSelectNum).then(function() {
                    t.imgSwitchOn.visible = !1,
                    t.imgSwitchOff.visible = !0,
                    t.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.panel_icon,
            function() {},
            this),
            ImageButtonUtil.add(this.saoDang,
            function() {
                e.ChildrenPageManager.getInstance().SweepAll(t.curSelectNum)
            },
            this),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 12
                })
            },
            this),
            EventManager.addEventListener("sweepLevel", this.updateView, this)
        },
        i.prototype.updateView = function() {
            var t = this;
            switch (this.isSwitchOn = e.ChildrenPageManager.getInstance().getDoubleItemUseFlag(this.curSelectNum), this.imgSwitchOff.visible = !e.ChildrenPageManager.getInstance().getDoubleItemUseFlag(this.curSelectNum), this.imgSwitchOn.visible = e.ChildrenPageManager.getInstance().getDoubleItemUseFlag(this.curSelectNum), this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(), this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString(), this.panel_icon.source = ClientConfig.getItemIcon(this.iconIds[this.curSelectNum - 1]), this.curSelectNum) {
            case 1:
                config.PveBossExperienceTraining.hasLoader ? this.setExpData() : config.PveBossExperienceTraining.loadAsync().then(function() {
                    t.setExpData()
                });
                break;
            case 2:
                config.PveBossLearningTraining.hasLoader ? this.setStudyData() : config.PveBossLearningTraining.loadAsync().then(function() {
                    t.setStudyData()
                });
                break;
            case 3:
                config.PveBossBraveTower.hasLoader ? this.setBarveTowerData() : config.PveBossBraveTower.loadAsync().then(function() {
                    t.setBarveTowerData()
                })
            }
        },
        i.prototype.setBox = function(t) {
            var i = this;
            this._boxEffect && this._boxEffect.parent && this._boxEffect.parent.removeChild(this._boxEffect);
            var n = e.ChildrenPageManager.getInstance().getBoxHasGet(this.curSelectNum),
            o = 3 == this.curSelectNum ? 5 : 6,
            r = n || t != o ? "open": "canopen";
            this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", this.boxNames[this.curSelectNum - 1], r),
            this._boxEffect.touchEnabled = !0,
            this._boxEffect.scaleX = this.panel_icon.width / this._boxEffect.width,
            this._boxEffect.scaleY = this.panel_icon.height / this._boxEffect.height,
            this._boxEffect.x = this.panel_icon.x - 15,
            this._boxEffect.y = this.panel_icon.y - 20,
            this.panel_icon.visible = !1,
            this.panel_icon.parent.addChild(this._boxEffect),
            "open" == r ? this._boxEffect.gotoAndStop(n ? this._boxEffect.totalFrames: 0) : this._boxEffect.gotoAndPlay(0, -1),
            ImageButtonUtil.remove(this._boxEffect),
            "canopen" == r ? ImageButtonUtil.add(this._boxEffect,
            function() {
                e.ChildrenPageManager.getInstance().GetBoxReward(i.curSelectNum)
            },
            this) : ImageButtonUtil.add(this._boxEffect,
            function() {
                var e = [2300005, 2300006, 2300008];
                tipsPop.TipsPop.openItemPop({
                    id: e[i.curSelectNum - 1]
                })
            },
            this)
        },
        i.prototype.setExpData = function() {
            var t = this;
            this.txt_Progress.textColor = 7984483,
            KTool.getMultiValue([108055, 18717],
            function(i) {
                e.ChildrenPageManager.getInstance().pveDailyTimes[0] = i[1],
                t.txt_Progress.text = i[1] + "/6";
                var n = [],
                o = 0;
                t.setBox(i[1]);
                for (var r = 30; r > 0; r--) if (1 == KTool.getBit(i[0], r)) {
                    o = r;
                    break
                }
                e.ChildrenPageManager.getInstance().pveMaxLevelUnlocked[0] = o;
                for (var r = 0; 6 > r; r++) {
                    var a = {};
                    a.canSweep = 1 == KTool.getBit(i[0], r + 1),
                    a.id = r + 1;
                    var s = config.PveBossExperienceTraining.getItem(a.id),
                    h = s.rewardid.split("_"),
                    u = s.rewardnum.split("_");
                    a.arrAwardId = h,
                    a.arrAwardNum = u,
                    a.selectNum = t.curSelectNum,
                    n.push(a)
                }
                t._list2.dataProvider = new eui.ArrayCollection(n);
                var c = e.ChildrenPageManager.getInstance().getMaxLevel(t.curSelectNum) > 0;
                DisplayUtil.setEnabled(t.saoDang, c, !c)
            })
        },
        i.prototype.setStudyData = function() {
            var t = this;
            this.txt_Progress.textColor = 16580432,
            KTool.getMultiValue([108052, 18712],
            function(i) {
                e.ChildrenPageManager.getInstance().pveDailyTimes[1] = i[1],
                t.txt_Progress.text = i[1] + "/6";
                var n = [],
                o = 0;
                t.setBox(i[1]);
                for (var r = 6; r > 0; r--) if (1 == KTool.getBit(i[0], r)) {
                    o = r;
                    break
                }
                e.ChildrenPageManager.getInstance().pveMaxLevelUnlocked[1] = o;
                for (var r = 0; 6 > r; r++) {
                    var a = {};
                    a.canSweep = 1 == KTool.getBit(i[0], r + 1),
                    a.id = r + 1;
                    var s = config.PveBossLearningTraining.getItem(a.id),
                    h = s.rewardid.split("_"),
                    u = s.rewardnum.split("_");
                    a.arrAwardId = h,
                    a.arrAwardNum = u,
                    a.selectNum = t.curSelectNum,
                    n.push(a)
                }
                t._list2.dataProvider = new eui.ArrayCollection(n);
                var c = e.ChildrenPageManager.getInstance().getMaxLevel(t.curSelectNum) > 0;
                DisplayUtil.setEnabled(t.saoDang, c, !c)
            })
        },
        i.prototype.setBarveTowerData = function() {
            var t = this;
            this.txt_Progress.textColor = 4187130,
            KTool.getMultiValue([108049, 18709],
            function(i) {
                e.ChildrenPageManager.getInstance().pveDailyTimes[2] = i[1],
                t.txt_Progress.text = i[1] + "/5";
                var n = [],
                o = 0;
                t.setBox(i[1]);
                for (var r = 30; r > 0; r--) if (1 == KTool.getBit(i[0], r)) {
                    o = r;
                    break
                }
                e.ChildrenPageManager.getInstance().pveMaxLevelUnlocked[2] = o;
                for (var r = 0; 30 > r; r++) {
                    var a = {};
                    a.canSweep = 1 == KTool.getBit(i[0], r + 1),
                    a.id = r + 1;
                    var s = config.PveBossBraveTower.getItem(a.id),
                    h = s.rewardid.split("_"),
                    u = s.rewardnum.split("_");
                    a.arrAwardId = h,
                    a.arrAwardNum = u,
                    a.selectNum = t.curSelectNum,
                    n.push(a)
                }
                t._list2.dataProvider = new eui.ArrayCollection(n);
                var c = e.ChildrenPageManager.getInstance().getMaxLevel(t.curSelectNum) > 0;
                DisplayUtil.setEnabled(t.saoDang, c, !c)
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("sweepLevel", this.updateView, this)
        },
        i
    } (e.BaseView);
    e.BravePage2Child1View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2Child1View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.showItems = [[1724797, 1724802, 1724803, 1400352], [1724797, 1724800, 1724801, 1400352], [1724797, 1724798, 1724799, 1400352]],
            t.skinName = BravePage2Child2ViewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.listValue = [18724, 108059];
            for (var t = 0; 3 > t; t++) for (var i = 0; 4 > i; i++) this["icon" + (t + 1) + (i + 1)].source = ItemXMLInfo.getIconURL(this.showItems[t][i])
        },
        t.prototype.addEvents = function() {
            for (var e = this,
            t = function(t) {
                for (var n = function(n) {
                    ImageButtonUtil.add(i["icon" + (t + 1) + (n + 1)],
                    function() {
                        tipsPop.TipsPop.openItemPop({
                            id: e.showItems[t][n]
                        })
                    },
                    i)
                },
                o = 0; 4 > o; o++) n(o)
            },
            i = this, n = 0; 3 > n; n++) t(n);
            for (var o = function(t) {
                ImageButtonUtil.add(r["btnGo" + t],
                function() {
                    ModuleManager.hideModule("yongzhezhengcheng"),
                    ModuleManager.showModuleByID(16)
                },
                r),
                ImageButtonUtil.add(r["btnSao" + t],
                function() {
                    if (ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0) {
                        if (2 - e.getValue[0] == 0) return void BubblerManager.getInstance().showText("您的挑战次数不足！");
                        SocketConnection.sendByQueue(42395, [104, 6, t, 0],
                        function() {
                            e.update()
                        })
                    } else BubblerManager.getInstance().showText("道具数量不足")
                },
                r)
            },
            r = this, n = 1; 3 >= n; n++) o(n);
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(42395, [104, 4, 1, 0]).then(function() {
                        e._openDoubleFlags = !0,
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
                e.isSwitchOn && SocketConnection.sendWithPromise(42395, [104, 4, 0, 0]).then(function() {
                    e._openDoubleFlags = !1,
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 12
                })
            },
            this)
        },
        t.prototype.updateData = function() {
            e.prototype.updateData.call(this),
            this.update()
        },
        t.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getBitSetAsync([640])];
                    case 1:
                        return e = n.sent(),
                        this._openDoubleFlags = 1 == e[0],
                        this.isSwitchOn = this._openDoubleFlags,
                        this.imgSwitchOff.visible = !this._openDoubleFlags,
                        this.imgSwitchOn.visible = this._openDoubleFlags,
                        this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
                        this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString(),
                        t = this,
                        [4, KTool.getMultiValueAsync(this.listValue)];
                    case 2:
                        for (t.getValue = n.sent(), this.txtLeftTime.textFlow = [{
                            text: 2 - this.getValue[0] + "",
                            style: {
                                textColor: 4252667
                            }
                        },
                        {
                            text: "/2",
                            style: {
                                textColor: 12900350
                            }
                        }], i = 0; 3 > i; i++) this["not" + (i + 1)].visible = this.getValue[1] < i + 1,
                        this["btnSao" + (i + 1)].visible = this.getValue[1] >= i + 1,
                        this["btnGo" + (i + 1)].visible = this.getValue[1] < i + 1;
                        return [2]
                    }
                })
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (e.BaseView);
    e.BravePage2Child2View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2Child2View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = BravePage2Child3ViewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.listValue = [11410, 103708],
            this.initData()
        },
        t.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, KTool.getBitSetAsync([8831])];
                    case 1:
                        return e = n.sent(),
                        this._openDoubleFlags = 1 == e[0],
                        this.isSwitchOn = this._openDoubleFlags,
                        this.imgSwitchOff.visible = !this._openDoubleFlags,
                        this.imgSwitchOn.visible = this._openDoubleFlags,
                        this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
                        this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString(),
                        t = this,
                        [4, KTool.getMultiValueAsync(this.listValue)];
                    case 2:
                        for (t.getValue = n.sent(), this.hasSao = 0 != (255 & this.getValue[0]), this.txtLeftTime.textFlow = [{
                            text: 1 - ~~this.hasSao + "",
                            style: {
                                textColor: 4252667
                            }
                        },
                        {
                            text: "/1",
                            style: {
                                textColor: 12900350
                            }
                        }], i = 0; 3 > i; i++) this["not" + (i + 1)].visible = 0 == (this.getValue[1] >> 8 * i & 255),
                        this["btnSao" + (i + 1)].visible = (this.getValue[1] >> 8 * i & 255) > 0,
                        this["btnGo" + (i + 1)].visible = 0 == (this.getValue[1] >> 8 * i & 255);
                        return [2]
                    }
                })
            })
        },
        t.prototype.addEvents = function() {
            for (var e = this,
            t = function(t) {
                ImageButtonUtil.add(i["btnGo" + t],
                function() {
                    ModuleManager.hideModule("yongzhezhengcheng"),
                    ModuleManager.showModuleByID(114)
                },
                i),
                ImageButtonUtil.add(i["btnSao" + t],
                function() {
                    if (ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0) {
                        if (24 - (e.getValue[0] >> 8 & 255) == 0) return void BubblerManager.getInstance().showText("您的扫荡次数不足！");
                        var i = 255 & e.getValue[0];
                        if (0 != i) return void BubblerManager.getInstance().showText("您当前已经在关卡中，无法进行扫荡！");
                        SocketConnection.sendByQueue(45767, [38, t],
                        function() {
                            e.initData()
                        })
                    } else BubblerManager.getInstance().showText("道具数量不足")
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(45767, [39, 1]).then(function() {
                        e._openDoubleFlags = !0,
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
                e.isSwitchOn && SocketConnection.sendWithPromise(45767, [39, 0]).then(function() {
                    e._openDoubleFlags = !1,
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 12
                })
            },
            this)
        },
        t.prototype.updateData = function() {
            e.prototype.updateData.call(this),
            this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
            this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString()
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (e.BaseView);
    e.BravePage2Child3View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2Child3View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.petsInfo = [],
            e.curPageIndex = 0,
            e.bitSets = [],
            e.skinName = BravePage2Child4ViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.listValue = [18745, 108105, 108106, 20134],
            config.xml.load("elvenkingtrial_exchange").then(function() {
                e._xmlConfig = config.xml.getRes("elvenkingtrial_exchange"),
                e.initData(),
                e.update()
            })
        },
        i.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, i, o;
                return __generator(this,
                function(r) {
                    for (t = this.getMonIdlength(), i = 0; i < t.length; i++) this.petsInfo.push(this.getMonInfoByMonId(t[i], 1));
                    for (n = SystemTimerManager.sysBJDate.getDay(), this.petsInfo.sort(function(e, t) {
                        var i = e.unlimite == n || 6 == n,
                        o = t.unlimite == n || 6 == n;
                        return~~o - ~~i
                    }), i = 0; i < this.petsInfo.length; i++) o = new e.Child4ViewItem(this.petsInfo[i]),
                    this.petKing.addChild(o),
                    o.x = 0,
                    o.y = 70 * i;
                    return [2]
                })
            })
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener("OtherTouch", this.pageTouch, this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnGo" + t],
                function() {
                    ModuleManager.hideModule("yongzhezhengcheng"),
                    ModuleManager.showModuleByID(19)
                },
                i),
                ImageButtonUtil.add(i["btnSao" + t],
                function() {
                    if (ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0) {
                        if (6 - ~~e.times <= 0) return void BubblerManager.getInstance().showText("挑战次数不足！");
                        SocketConnection.sendByQueue(42395, [106, 5, e.curInfo.monId, t],
                        function() {
                            e.update()
                        })
                    } else BubblerManager.getInstance().showText("道具数量不足")
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(42395, [106, 6, 1, 0]).then(function() {
                        e._openDoubleFlags = !0,
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
                e.isSwitchOn && SocketConnection.sendWithPromise(42395, [106, 6, 0, 0]).then(function() {
                    e._openDoubleFlags = !1,
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 12
                })
            },
            this)
        },
        i.prototype.pageTouch = function(e) {
            this.curInfo = e.data;
            var t = this.petsInfo.indexOf(this.curInfo);
            this.childpage.y = 70 * t + 66;
            for (var i = 0; i < this.petKing.numChildren; i++) this.petKing.getChildAt(i).currentState = "up";
            if (this.curPageIndex > t) for (var n = 0; n < this.curPageIndex - t; n++) this.petKing.getChildAt(this.curPageIndex + 1 - n).y += 155;
            for (var o = 0; o < this.petsInfo.length; o++) {
                var r = this.petKing.getChildAt(o + 1);
                this.childpage.visible ? t >= o && (r.y = 70 * o) : o > t ? r.y += 155 : r.y = 70 * o
            }
            this.curPageIndex = t,
            this.childpage.visible = !0,
            this.setChildPage()
        },
        i.prototype.setChildPage = function() {
            for (var e = this.curInfo.monId > 9 ? this.getValue[2] : this.getValue[1], t = this.curInfo.monId > 9 ? this.curInfo.monId - 10 : this.curInfo.monId - 1, i = SystemTimerManager.sysBJDate.getDay(), n = this.curInfo.unlimite == i || 6 == i, o = 1; 3 >= o; o++) {
                var r = this.getRewardInfoByBsrewardId(this.curInfo.bsreward + o - 1);
                this["level_icon" + o].source = ClientConfig.getItemIcon(r.realid),
                this["txtNum" + o].text = n ? r.realcnt + 15 : r.realcnt,
                this["btnSao" + o].visible = 1 == KTool.getBit(e, 3 * t + o),
                this["not" + o].visible = 0 == KTool.getBit(e, 3 * t + o),
                this["btnGo" + o].visible = 0 == KTool.getBit(e, 3 * t + o)
            }
        },
        i.prototype.getRewardInfoByBsrewardId = function(e) {
            for (var t = this._xmlConfig.root.rewards.reward,
            i = new Object,
            n = 0; n < t.length; n++) {
                var o = t[n];
                if (e === o.id) {
                    i.type = o.type,
                    i.realid = o.realid,
                    i.realcnt = o.realcnt;
                    break
                }
            }
            return i
        },
        i.prototype.getMonIdlength = function() {
            for (var e = this._xmlConfig.root.items.item,
            t = new Array,
            i = 0; i < e.length; i++) {
                var n = e[i],
                o = n.mon; - 1 == t.indexOf(o) && t.push(o)
            }
            return t
        },
        i.prototype.getMonInfoByMonId = function(e, t) {
            for (var i = this._xmlConfig.root.items.item,
            n = new Object,
            o = 0; o < i.length; o++) {
                var r = i[o];
                if (e === r.mon && t == r.difficulty) {
                    n.id = r.id,
                    n.monId = r.mon,
                    n.difficulty = r.difficulty,
                    n.bsreward = r.bsreward,
                    n.exreward = r.exreward,
                    n.bosslist = r.bosslist,
                    n.unlimite = r.unlimite,
                    n.bosstitle = r.bosstitle;
                    break
                }
            }
            return n
        },
        i.prototype.updateData = function() {
            t.prototype.updateData.call(this),
            this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
            this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString()
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return e = this,
                        [4, KTool.getBitSetAsync([8832, 2000037])];
                    case 1:
                        return e.bitSets = i.sent(),
                        this._openDoubleFlags = 1 == this.bitSets[0],
                        this.isSwitchOn = this._openDoubleFlags,
                        this.imgSwitchOff.visible = !this._openDoubleFlags,
                        this.imgSwitchOn.visible = this._openDoubleFlags,
                        this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
                        this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString(),
                        t = this,
                        [4, KTool.getMultiValueAsync(this.listValue)];
                    case 2:
                        return t.getValue = i.sent(),
                        this.times = this.getValue[0],
                        this.txtLeftTime.textFlow = [{
                            text: 6 - ~~this.times + "",
                            style: {
                                textColor: 4252667
                            }
                        },
                        {
                            text: "/6",
                            style: {
                                textColor: 12900350
                            }
                        }],
                        this.txt_Progress.text = this.getValue[3] + "/30",
                        this.setBox(),
                        [2]
                    }
                })
            })
        },
        i.prototype.setBox = function() {
            var e = this;
            this._boxEffect && this._boxEffect.parent && this._boxEffect.parent.removeChild(this._boxEffect);
            var t = 1 === this.bitSets[1],
            i = !t && this.getValue[3] >= 30,
            n = i ? "canopen": "open";
            this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", n),
            this._boxEffect.touchEnabled = !0,
            this._boxEffect.scaleX = this.panel_icon.width / this._boxEffect.width,
            this._boxEffect.scaleY = this.panel_icon.height / this._boxEffect.height,
            this._boxEffect.x = this.panel_icon.x,
            this._boxEffect.y = this.panel_icon.y,
            this.panel_icon.visible = !1,
            this.panel_icon.parent.addChild(this._boxEffect),
            "open" == n ? this._boxEffect.gotoAndStop(t ? this._boxEffect.totalFrames: 0) : this._boxEffect.gotoAndPlay(0, -1),
            ImageButtonUtil.remove(this._boxEffect),
            "canopen" == n ? ImageButtonUtil.add(this._boxEffect,
            function() {
                SocketConnection.sendByQueue(42395, [106, 3, 0, 0],
                function() {
                    e.update()
                })
            },
            this) : ImageButtonUtil.add(this._boxEffect,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2300007
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.petKing = null
        },
        i
    } (e.BaseView);
    e.BravePage2Child4View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2Child4View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
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
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.curPageIndex = 0,
            e.petsInfo = [],
            e.itemsId = [1724909, 1724910, 1724911, 1724912, 1724913],
            e.daily_State = [201512, 201513, 201514, 201515, 201516],
            e.bitSets = [],
            e.times = [],
            e.allChildInfo = [],
            e.skinName = BravePage2Child5ViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData()
        },
        i.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, i, o;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return t = ["青龙", "白虎", "玄武", "朱雀", "麒麟"],
                        [4, this.update()];
                    case 1:
                        for (r.sent(), i = 0; i < this.daily_State.length; i++) n = {},
                        n.id = i + 1,
                        n.str = t[i],
                        n.times = this.times[i],
                        n.itemID = this.itemsId[i],
                        this.petsInfo.push(n);
                        for (i = 0; i < this.petsInfo.length; i++) o = new e.Child5ViewItem(this.petsInfo[i]),
                        this.petKing.addChild(o),
                        o.x = 0,
                        o.y = 70 * i,
                        this.allChildInfo.push(o);
                        return [2]
                    }
                })
            })
        },
        i.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener("OtherTouchPage5", this.pageTouch, this);
            for (var t = function(t) {
                ImageButtonUtil.add(i["btnGo" + t],
                function() {
                    ModuleManager.hideModule("yongzhezhengcheng"),
                    ModuleManager.showModuleByID(185)
                },
                i),
                ImageButtonUtil.add(i["btnSao" + t],
                function() {
                    if (ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0) {
                        if (5 - e.times[e.curPageIndex] <= 0) return void BubblerManager.getInstance().showText("挑战次数不足！");
                        SocketConnection.sendByQueue(41388, [58, 3 * e.curPageIndex + t],
                        function() {
                            e.update()
                        })
                    } else BubblerManager.getInstance().showText("道具数量不足")
                },
                i)
            },
            i = this, n = 1; 3 >= n; n++) t(n);
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!e.isSwitchOn) {
                    var t = ItemManager.getNumByID(1400152);
                    if (0 >= t) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(41388, [58, 21]).then(function() {
                        e._openDoubleFlags = !0,
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
                e.isSwitchOn && SocketConnection.sendWithPromise(41388, [58, 20]).then(function() {
                    e._openDoubleFlags = !1,
                    e.imgSwitchOn.visible = !1,
                    e.imgSwitchOff.visible = !0,
                    e.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.icon1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 12
                })
            },
            this)
        },
        i.prototype.updateData = function() {
            t.prototype.updateData.call(this),
            this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(),
            this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString()
        },
        i.prototype.pageTouch = function(e) {
            this.curInfo = e.data;
            var t = this.petsInfo.indexOf(this.curInfo);
            if (! (0 > t)) {
                this.childpage.y = 70 * t + 66;
                for (var i = 0; i < this.petKing.numChildren; i++) this.petKing.getChildAt(i).currentState = "up";
                if (this.curPageIndex > t) for (var n = 0; n < this.curPageIndex - t; n++) this.petKing.getChildAt(this.curPageIndex + 1 - n).y += 155;
                for (var o = 0; o < this.petsInfo.length; o++) {
                    var r = this.petKing.getChildAt(o + 1);
                    this.childpage.visible ? t >= o && (r.y = 70 * o) : o > t ? r.y += 155 : r.y = 70 * o
                }
                this.curPageIndex = t,
                this.childpage.visible = !0,
                this.setChildPage()
            }
        },
        i.prototype.setChildPage = function() {
            for (var e = 1; 3 >= e; e++) this["level_icon" + e].source = ClientConfig.getItemIcon(this.curInfo.itemID),
            this["txtNum" + e].text = 3 * e,
            this["btnSao" + e].visible = 1 == KTool.getBit(this.bitSets[0], 3 * this.curPageIndex + e),
            this["not" + e].visible = 0 == KTool.getBit(this.bitSets[0], 3 * this.curPageIndex + e),
            this["btnGo" + e].visible = 0 == KTool.getBit(this.bitSets[0], 3 * this.curPageIndex + e)
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return e = this,
                        [4, KTool.getMultiValueAsync([121555])];
                    case 1:
                        return e.bitSets = o.sent(),
                        t = this,
                        [4, KTool.getMultiValueAsync(this.daily_State)];
                    case 2:
                        for (t.times = o.sent(), this._openDoubleFlags = 1 == KTool.getBit(this.bitSets[0], 21), this.isSwitchOn = this._openDoubleFlags, this.imgSwitchOff.visible = !this._openDoubleFlags, this.imgSwitchOn.visible = this._openDoubleFlags, this.txt_itemNum1.text = (ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005)).toString(), this.txt_itemNum2.text = ItemManager.getNumByID(1400152).toString(), i = 0, n = 0; n < this.times.length; n++) i += this.times[n];
                        return this.txtLeftTime.textFlow = [{
                            text: 25 - i + "",
                            style: {
                                textColor: 4252667
                            }
                        },
                        {
                            text: "/25",
                            style: {
                                textColor: 12900350
                            }
                        }],
                        this.curPageIndex >= 0 && this.allChildInfo.length > 0 && this.allChildInfo[this.curPageIndex].updateData(this.times[this.curPageIndex]),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeAll(this)
        },
        i
    } (e.BaseView);
    e.BravePage2Child5View = t,
    __reflect(t.prototype, "yongzhezhengcheng.BravePage2Child5View")
} (yongzhezhengcheng || (yongzhezhengcheng = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(o, r) {
        function a(e) {
            try {
                h(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function h(e) {
            e.done ? o(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, s)
        }
        h((n = n.apply(e, t || [])).next())
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
        for (; h;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
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
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = i;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(i);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
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
    var o, r, a, s, h = {
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
yongzhezhengcheng; !
function(e) {
    var t = function() {
        function e() {
            this.pageName = ["经验训练场", "学习力战场", "勇者之塔"],
            this.pageDoubleConst = [116, 115, 117],
            this._openDoubleFlags = [],
            this.boxHaGet = [],
            this.pveMaxTimes = [6, 6, 5],
            this.pveDailyTimes = [],
            this.pveMaxLevelUnlocked = [],
            this.pveUnlockSweepLevel = [3, 3, 3],
            this.moduleIDArr = [3, 17, 14]
        }
        return e.getInstance = function() {
            return this._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i = this;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return e = this,
                        [4, KTool.getBitSetAsync([639, 637, 636])];
                    case 1:
                        return e._openDoubleFlags = n.sent(),
                        t = this,
                        [4, KTool.getBitSetAsync([1000571, 1000572, 1000577])];
                    case 2:
                        return t.boxHaGet = n.sent(),
                        KTool.getMultiValue([121020],
                        function(e) {
                            i.curLevel = 255 & e[0]
                        }),
                        [2]
                    }
                })
            })
        },
        e.prototype.c2s_setDoubleItemStatus = function(e, t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n = this;
                return __generator(this,
                function(o) {
                    return i = ItemManager.getNumByID(1400152),
                    0 >= i ? (BubblerManager.getInstance().showText("道具数量不足"), [2]) : [2, SocketConnection.sendWithPromise(42395, [this.pageDoubleConst[t - 1], 1, Number(e), 0]).then(function(e) {
                        n._openDoubleFlags[t - 1] = !n._openDoubleFlags[t - 1]
                    })]
                })
            })
        },
        e.prototype.getBoxHasGet = function(e) {
            return this.boxHaGet[e - 1]
        },
        e.prototype.getDoubleItemUseFlag = function(e) {
            return this._openDoubleFlags[e - 1]
        },
        e.prototype.getMaxLevel = function(e) {
            return this.pveMaxLevelUnlocked[e - 1]
        },
        e.prototype.checkSweepAllFlag = function(e) {
            var t = this.pveMaxTimes[e - 1] - this.pveDailyTimes[e - 1],
            i = ItemManager.getNumByID(1400152),
            n = ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005);
            return t > 0 ? this.getDoubleItemUseFlag(e) ? t > n || t > i ? (BubblerManager.getInstance().showText("道具数量不足"), !1) : !0 : t > n ? (BubblerManager.getInstance().showText("道具数量不足"), !1) : !0 : (BubblerManager.getInstance().showText("您的对战次数不足"), !1)
        },
        e.prototype.checkSweepFlag = function(e) {
            var t = this.pveMaxTimes[e - 1] - this.pveDailyTimes[e - 1];
            return ItemManager.getNumByID(1400153) > 0 || ItemManager.getNumByID(2500005) > 0 ? t > 0 ? !0 : (BubblerManager.getInstance().showText("您的对战次数不足"), !1) : (BubblerManager.getInstance().showText("道具数量不足"), !1)
        },
        e.prototype.Sweep = function(e, t) {
            var i = this;
            this.checkSweepFlag(e) && (3 == e ? SocketConnection.sendByQueue(42395, [this.pageDoubleConst[e - 1], 2, t, 0],
            function() {
                var t = ItemManager.getNumByID(1400152);
                i.getDoubleItemUseFlag(e) && 0 == t && (i._openDoubleFlags[e - 1] = !i._openDoubleFlags[e - 1]),
                EventManager.dispatchEventWith("sweepLevel")
            }) : SocketConnection.sendByQueue(42395, [this.pageDoubleConst[e - 1], 2, t, 0],
            function() {
                var t = ItemManager.getNumByID(1400152);
                i.getDoubleItemUseFlag(e) && 0 == t && (i._openDoubleFlags[e - 1] = !i._openDoubleFlags[e - 1]),
                EventManager.dispatchEventWith("sweepLevel")
            }))
        },
        e.prototype.SweepAll = function(e) {
            var t = this;
            if (this.checkSweepAllFlag(e)) {
                var i = "是否消耗<font color ='#00FF15'>" + (this.pveMaxTimes[e - 1] - this.pveDailyTimes[e - 1]) + "</font>次挑战次数，快捷扫荡" + this.pageName[e - 1] + "第<font color ='#00FF15'>" + this.getMaxLevel(e) + "</font>层?";
                Alert.show(i,
                function() {
                    3 == e ? (StatLogger.log("勇者征程", "扫荡", "玩家使用勇者之塔一键扫荡"), SocketConnection.sendByQueue(42395, [t.pageDoubleConst[e - 1], 5, t.getMaxLevel(e), 0],
                    function() {
                        EventManager.dispatchEventWith("sweepLevel")
                    })) : (1 == e ? StatLogger.log("勇者征程", "扫荡", "玩家使用经验训练场一键扫荡") : StatLogger.log("勇者征程", "扫荡", "玩家使用学习力战场一键扫荡"), BubblerManager.getInstance().showText("一键扫荡第" + t.getMaxLevel(e) + "层"), SocketConnection.sendByQueue(42395, [t.pageDoubleConst[e - 1], 4, t.getMaxLevel(e), 0],
                    function() {
                        EventManager.dispatchEventWith("sweepLevel")
                    }))
                })
            }
        },
        e.prototype.GetBoxReward = function(e) {
            var t = this,
            i = 3 == e ? 4 : 3;
            SocketConnection.sendByQueue(42395, [this.pageDoubleConst[e - 1], i, 0, 0],
            function() {
                t.init().then(function() {
                    EventManager.dispatchEventWith("sweepLevel")
                })
            })
        },
        e
    } ();
    e.ChildrenPageManager = t,
    __reflect(t.prototype, "yongzhezhengcheng.ChildrenPageManager")
} (yongzhezhengcheng || (yongzhezhengcheng = {})),
window.yongzhezhengcheng = window.yongzhezhengcheng || {};
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
generateEUI.paths["resource/eui_skins/AwardDialogSkin.exml"] = window.yongzhezhengcheng.AwardDialogSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["awardBg", "bgGroup", "levelIcon", "grpContainer", "txt_LV", "txtLvla", "txt_curLevel", "txt_nextLevel", "grp_rightLevel", "level"],
        this.height = 465,
        this.width = 1136,
        this.elementsContent = [this.awardBg_i(), this.bgGroup_i(), this.levelIcon_i(), this._Scroller1_i(), this.txt_LV_i(), this.level_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.awardBg_i = function() {
        var e = new eui.Image;
        return this.awardBg = e,
        e.source = "y_award_dialog_bg_png",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 68,
        e
    },
    i.bgGroup_i = function() {
        var e = new eui.Group;
        return this.bgGroup = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e
    },
    i.levelIcon_i = function() {
        var e = new eui.Image;
        return this.levelIcon = e,
        e.source = "y_award_dialog_huizhang_png",
        e.visible = !0,
        e.x = 48,
        e.y = 0,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 125,
        e.width = 570,
        e.x = 531,
        e.y = 225,
        e.viewport = this.grpContainer_i(),
        e
    },
    i.grpContainer_i = function() {
        var e = new eui.Group;
        return this.grpContainer = e,
        e.height = 125,
        e.width = 660,
        e.x = 541,
        e.y = 225,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 20,
        e.paddingLeft = 5,
        e
    },
    i.txt_LV_i = function() {
        var e = new eui.Label;
        return this.txt_LV = e,
        e.anchorOffsetX = 51,
        e.anchorOffsetY = 22.5,
        e.fontFamily = "HuaKangXinZongYi",
        e.scaleX = 1,
        e.size = 45,
        e.stroke = 1,
        e.strokeColor = 3768530,
        e.text = "15",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 102,
        e.x = 321,
        e.y = 185,
        e
    },
    i.level_i = function() {
        var e = new eui.Group;
        return this.level = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 647,
        e.y = 190,
        e.elementsContent = [this._Image1_i(), this.txtLvla_i(), this.txt_curLevel_i(), this.grp_rightLevel_i(), this._Image4_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "y_award_dialog_txtlvlb_png",
        e.visible = !1,
        e.x = 171,
        e.y = 1,
        e
    },
    i.txtLvla_i = function() {
        var e = new eui.Image;
        return this.txtLvla = e,
        e.source = "y_award_dialog_txtlvla_png",
        e.visible = !1,
        e.x = 90,
        e.y = 1,
        e
    },
    i.txt_curLevel_i = function() {
        var e = new eui.Label;
        return this.txt_curLevel = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 30,
        e.stroke = 1.5,
        e.strokeColor = 3768530,
        e.text = "99",
        e.textColor = 16777215,
        e.x = 80,
        e.y = 1,
        e
    },
    i.grp_rightLevel_i = function() {
        var e = new eui.Group;
        return this.grp_rightLevel = e,
        e.visible = !0,
        e.x = 122,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this.txt_nextLevel_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_award_dialog_1_png",
        e.x = 6,
        e.y = 3,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_award_dialog_1_png",
        e.visible = !0,
        e.x = 20,
        e.y = 3,
        e
    },
    i.txt_nextLevel_i = function() {
        var e = new eui.Label;
        return this.txt_nextLevel = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 30,
        e.stroke = 1.5,
        e.strokeColor = 3768530,
        e.text = "99",
        e.textColor = 16777215,
        e.x = 59,
        e.y = 1,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "y_award_dialog_yongzhedengji_png",
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BraveRewardItemSkin.exml"] = window.BraveRewardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "txt_num", "rewarditem"],
        this.height = 72,
        this.width = 72,
        this.elementsContent = [this.rewarditem_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.rewarditem_i = function() {
        var e = new eui.Group;
        return this.rewarditem = e,
        e.cacheAsBitmap = !0,
        e.elementsContent = [this._Image1_i(), this.icon_i(), this.txt_num_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "common_item_bg_style_73_73_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 45,
        e.source = "",
        e.width = 45,
        e.x = 13,
        e.y = 13,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "1",
        e.textAlign = "right",
        e.textColor = 9615103,
        e.width = 66,
        e.x = 0,
        e.y = 53,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BraveSweepItemSkin.exml"] = window.BraveSweepItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["reward1", "reward2", "txt_layer", "not", "btnGo", "sao", "page2Item"],
        this.height = 70,
        this.elementsContent = [this.page2Item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.page2Item_i = function() {
        var e = new eui.Group;
        return this.page2Item = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.elementsContent = [this._Image1_i(), this.reward1_i(), this.reward2_i(), this.txt_layer_i(), this.not_i(), this.btnGo_i(), this.sao_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 70,
        e.source = "y_mainpanel_lanklq_png",
        e.visible = !0,
        e.width = 533,
        e.x = 0,
        e.y = 0,
        e
    },
    i.reward1_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward1 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 92,
        e.y = 6,
        e
    },
    i.reward2_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward2 = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 155,
        e.y = 6,
        e
    },
    i.txt_layer_i = function() {
        var e = new eui.Label;
        return this.txt_layer = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "001  层",
        e.textColor = 16777215,
        e.x = 23,
        e.y = 25,
        e
    },
    i.not_i = function() {
        var e = new eui.Label;
        return this.not = e,
        e.fontFamily = "MFShangHei",
        e.size = 15,
        e.text = "未达成扫荡条件",
        e.textColor = 8757203,
        e.x = 258,
        e.y = 26,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 431,
        e.y = 19,
        e
    },
    i.sao_i = function() {
        var e = new eui.Image;
        return this.sao = e,
        e.source = "y_page2_btnSao_png",
        e.visible = !0,
        e.x = 431,
        e.y = 19,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/BraveTaskItemSkin.exml"] = window.BraveTaskItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["reward1", "reward2", "reward3", "go", "get", "done", "txt_content", "txt_progress", "lock", "taskItem"],
        this.height = 90,
        this.width = 404,
        this.elementsContent = [this.taskItem_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.taskItem_i = function() {
        var e = new eui.Group;
        return this.taskItem = e,
        e.cacheAsBitmap = !0,
        e.width = 404,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Group1_i(), this.go_i(), this.get_i(), this.done_i(), this.txt_content_i(), this.txt_progress_i(), this.lock_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 90,
        e.source = "y_mainpanel_taskitembg2_png",
        e.visible = !0,
        e.width = 404,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 8,
        e.y = 36,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.reward1_i(), this.reward2_i(), this.reward3_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 4,
        e
    },
    i.reward1_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward1 = e,
        e.scaleX = .7,
        e.scaleY = .7,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.reward2_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward2 = e,
        e.scaleX = .7,
        e.scaleY = .7,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 50,
        e.y = 0,
        e
    },
    i.reward3_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward3 = e,
        e.scaleX = .7,
        e.scaleY = .7,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 99,
        e.y = 0,
        e
    },
    i.go_i = function() {
        var e = new eui.Image;
        return this.go = e,
        e.source = "y_content_btnGo_png",
        e.visible = !0,
        e.x = 307.499,
        e.y = 46,
        e
    },
    i.get_i = function() {
        var e = new eui.Image;
        return this.get = e,
        e.source = "y_content_btnGet_png",
        e.visible = !0,
        e.x = 307.499,
        e.y = 46,
        e
    },
    i.done_i = function() {
        var e = new eui.Image;
        return this.done = e,
        e.source = "y_mainpanel_done_png",
        e.visible = !0,
        e.x = 309.499,
        e.y = 46,
        e
    },
    i.txt_content_i = function() {
        var e = new eui.Label;
        return this.txt_content = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.038,
        e.text = "获得 5 只精灵",
        e.textColor = 16777215,
        e.visible = !0,
        e.x = 9.424,
        e.y = 8,
        e
    },
    i.txt_progress_i = function() {
        var e = new eui.Label;
        return this.txt_progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.038,
        e.text = "(4/5)",
        e.textColor = 16777215,
        e.visible = !1,
        e.x = 127.163,
        e.y = 8,
        e
    },
    i.lock_i = function() {
        var e = new eui.Image;
        return this.lock = e,
        e.source = "yongzhezhengcheng_journey_itemlock_png",
        e.x = 216.221,
        e.y = 65.691,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/Child4ViewItemSkin.exml"] = window.Child4ViewItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_Titlename", "petName", "isUp", "imgWeek", "grp_item"],
        this.height = 69,
        this.elementsContent = [this.grp_item_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Image2", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_Titlename_i(), this._Image3_i(), this.petName_i(), this.isUp_i(), this.imgWeek_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "y_childview_wxz_png",
        e.visible = !1,
        e.width = 603,
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "y_childview_xuanzhong_png",
        e.visible = !1,
        e.width = 603,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txt_Titlename_i = function() {
        var e = new eui.Label;
        return this.txt_Titlename = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "逆天狂战",
        e.textColor = 16777215,
        e.x = 28,
        e.y = 26,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_img_blue_reddot_png",
        e.x = 2,
        e.y = 21,
        e
    },
    i.petName_i = function() {
        var e = new eui.Label;
        return this.petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "阿兰斯兰",
        e.textColor = 16777215,
        e.x = 194,
        e.y = 29,
        e
    },
    i.isUp_i = function() {
        var e = new eui.Image;
        return this.isUp = e,
        e.source = "y_childview_img_up_-_zndxz_png",
        e.visible = !0,
        e.x = 511.76,
        e.y = 0,
        e
    },
    i.imgWeek_i = function() {
        var e = new eui.Image;
        return this.imgWeek = e,
        e.source = "y_childview_1_png",
        e.visible = !0,
        e.x = 494.76,
        e.y = 24,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/Child5ViewItemSkin..exml"] = window.Child5ViewItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_Titlename", "txt_leftTime", "grp_item"],
        this.height = 69,
        this.elementsContent = [this.grp_item_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Image2", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_item_i = function() {
        var e = new eui.Group;
        return this.grp_item = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_Titlename_i(), this._Image3_i(), this.txt_leftTime_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "y_childview_wxz_png",
        e.visible = !1,
        e.width = 603,
        e.x = 0,
        e.y = 5,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.source = "y_childview_xuanzhong_png",
        e.visible = !1,
        e.width = 603,
        e.x = 0,
        e.y = 5,
        e
    },
    i.txt_Titlename_i = function() {
        var e = new eui.Label;
        return this.txt_Titlename = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "逆天狂战",
        e.textColor = 16777215,
        e.x = 28,
        e.y = 26,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_img_blue_reddot_png",
        e.x = 2,
        e.y = 21,
        e
    },
    i.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "今日已挑战次数：",
        e.textColor = 16777215,
        e.x = 194,
        e.y = 29,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/YongzhezhengchengItemSkin.exml"] = window.YongzhezhengchengItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["item_0", "item_1", "txtCount_1", "txtCount_0", "txt_renwumubiao", "txt_content", "txt_ing", "txt_noing", "txt_done", "btnGo", "btnGet", "flagReceived", "flagUnopened", "icon"],
        this.height = 87,
        this.width = 605,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.item_0_i(), this.item_1_i(), this.txtCount_1_i(), this.txtCount_0_i(), this.txt_renwumubiao_i(), this.txt_content_i(), this.txt_ing_i(), this.txt_noing_i(), this.txt_done_i(), this.btnGo_i(), this.btnGet_i(), this.flagReceived_i(), this.flagUnopened_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 86,
        e.source = "yongzhezhengcheng_item_bg_png",
        e.width = 605,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 61,
        e.source = "yongzhezhengcheng_item_itembg_png",
        e.width = 61,
        e.x = 327,
        e.y = 11,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 61,
        e.source = "yongzhezhengcheng_item_itembg_png",
        e.width = 61,
        e.x = 394,
        e.y = 11,
        e
    },
    i.item_0_i = function() {
        var e = new eui.Image;
        return this.item_0 = e,
        e.height = 30,
        e.horizontalCenter = 55.5,
        e.source = "yongzhezhengcheng_item_item_0_png",
        e.verticalCenter = -3.5,
        e.width = 50,
        e
    },
    i.item_1_i = function() {
        var e = new eui.Image;
        return this.item_1 = e,
        e.height = 40,
        e.horizontalCenter = 121.5,
        e.source = "yongzhezhengcheng_item_item_1_png",
        e.verticalCenter = -2.5,
        e.width = 40,
        e
    },
    i.txtCount_1_i = function() {
        var e = new eui.Label;
        return this.txtCount_1 = e,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 400,
        e.y = 53,
        e
    },
    i.txtCount_0_i = function() {
        var e = new eui.Label;
        return this.txtCount_0 = e,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1973795,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 50,
        e.x = 332,
        e.y = 53,
        e
    },
    i.txt_renwumubiao_i = function() {
        var e = new eui.Label;
        return this.txt_renwumubiao = e,
        e.right = 471,
        e.size = 18,
        e.text = "10/10",
        e.textColor = 3492213,
        e.y = 59,
        e
    },
    i.txt_content_i = function() {
        var e = new eui.Label;
        return this.txt_content = e,
        e.lineSpacing = 6,
        e.size = 18,
        e.text = "【进行中】内容内容内容内内容内容内容内容内容内容",
        e.textColor = 3492469,
        e.width = 216,
        e.x = 88,
        e.y = 10,
        e
    },
    i.txt_ing_i = function() {
        var e = new eui.Label;
        return this.txt_ing = e,
        e.size = 18,
        e.text = "【进行中】",
        e.textColor = 15028818,
        e.visible = !1,
        e.x = 90,
        e.y = 10,
        e
    },
    i.txt_noing_i = function() {
        var e = new eui.Label;
        return this.txt_noing = e,
        e.size = 18,
        e.text = "【未开启】",
        e.textColor = 8163763,
        e.visible = !1,
        e.x = 90,
        e.y = 11,
        e
    },
    i.txt_done_i = function() {
        var e = new eui.Label;
        return this.txt_done = e,
        e.size = 18,
        e.text = "【已完成】",
        e.textColor = 3777253,
        e.visible = !1,
        e.x = 90,
        e.y = 10,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.height = 40,
        e.source = "yongzhezhengcheng_btnGo_png",
        e.visible = !1,
        e.width = 100,
        e.x = 487,
        e.y = 21,
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 40,
        e.source = "yongzhezhengcheng_item_btnGet_png",
        e.visible = !1,
        e.width = 100,
        e.x = 487,
        e.y = 21,
        e
    },
    i.flagReceived_i = function() {
        var e = new eui.Image;
        return this.flagReceived = e,
        e.height = 40,
        e.source = "yongzhezhengcheng_item_flagReceived_png",
        e.visible = !1,
        e.width = 100,
        e.x = 487,
        e.y = 21,
        e
    },
    i.flagUnopened_i = function() {
        var e = new eui.Image;
        return this.flagUnopened = e,
        e.height = 21,
        e.source = "yongzhezhengcheng_item_flagUnopened_png",
        e.visible = !1,
        e.width = 60,
        e.x = 507,
        e.y = 31,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.horizontalCenter = -259.5,
        e.verticalCenter = -1.5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/BravePage1ViewSkin.exml"] = window.BravePage1ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["reward1", "reward2", "reward3", "reward4", "reward5", "reward6", "rewards", "Tag", "txtLevel_0", "grp_Logo", "txtLevel_Copy", "grp_Logo_Copy", "btnRight", "btnLeft", "content", "_list"],
        this.height = 387,
        this.width = 699,
        this.elementsContent = [this.content_i(), this._list_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.content_i = function() {
        var e = new eui.Group;
        return this.content = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 2,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.rewards_i(), this._Image2_i(), this._Image3_i(), this.grp_Logo_i(), this.grp_Logo_Copy_i(), this.btnRight_i(), this.btnLeft_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 427,
        e.source = "y_content_contentbg_png",
        e.visible = !0,
        e.width = 260,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "完成所有阶段任务后可领取",
        e.textColor = 7993343,
        e.x = 30,
        e.y = 392.236,
        e
    },
    i.rewards_i = function() {
        var e = new eui.Group;
        return this.rewards = e,
        e.x = 19,
        e.y = 233.916,
        e.elementsContent = [this.reward1_i(), this.reward2_i(), this.reward3_i(), this.reward4_i(), this.reward5_i(), this.reward6_i()],
        e
    },
    i.reward1_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward1 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.reward2_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward2 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 75,
        e.y = 0,
        e
    },
    i.reward3_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward3 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 150,
        e.y = 0,
        e
    },
    i.reward4_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward4 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 76,
        e
    },
    i.reward5_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward5 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 75,
        e.y = 76,
        e
    },
    i.reward6_i = function() {
        var e = new yongzhezhengcheng.BraveRewardItem;
        return this.reward6 = e,
        e.skinName = "BraveRewardItemSkin",
        e.visible = !0,
        e.x = 150,
        e.y = 76,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_content_ccjl_png",
        e.x = 85,
        e.y = 202.203,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_content_yzdj_png",
        e.x = 86,
        e.y = 36.235,
        e
    },
    i.grp_Logo_i = function() {
        var e = new eui.Group;
        return this.grp_Logo = e,
        e.visible = !0,
        e.width = 260,
        e.x = -.54,
        e.y = 31.558,
        e.elementsContent = [this.Tag_i(), this.txtLevel_0_i()],
        e
    },
    i.Tag_i = function() {
        var e = new eui.Image;
        return this.Tag = e,
        e.horizontalCenter = .5,
        e.scaleX = .475,
        e.scaleY = .475,
        e.source = "y_award_dialog_huizhang_png",
        e.visible = !0,
        e.width = 515,
        e.y = 0,
        e
    },
    i.txtLevel_0_i = function() {
        var e = new eui.Label;
        return this.txtLevel_0 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 3,
        e.size = 21.5888999475627,
        e.stroke = 1,
        e.strokeColor = 3768530,
        e.text = "1",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 38,
        e.y = 77.67,
        e
    },
    i.grp_Logo_Copy_i = function() {
        var e = new eui.Group;
        return this.grp_Logo_Copy = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.visible = !0,
        e.width = 260,
        e.x = -.54,
        e.y = 31.558,
        e.elementsContent = [this._Image4_i(), this.txtLevel_Copy_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.horizontalCenter = .5,
        e.scaleX = .475,
        e.scaleY = .475,
        e.source = "y_award_dialog_huizhang_png",
        e.visible = !0,
        e.width = 515,
        e.y = 0,
        e
    },
    i.txtLevel_Copy_i = function() {
        var e = new eui.Label;
        return this.txtLevel_Copy = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 3,
        e.size = 21.5888999475627,
        e.stroke = 1,
        e.strokeColor = 3768530,
        e.text = "1",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.visible = !0,
        e.width = 38,
        e.y = 77.67,
        e
    },
    i.btnRight_i = function() {
        var e = new eui.Image;
        return this.btnRight = e,
        e.source = "y_content_btnright_png",
        e.x = 217.235,
        e.y = 105.261,
        e
    },
    i.btnLeft_i = function() {
        var e = new eui.Image;
        return this.btnLeft = e,
        e.source = "y_content_btnleft__png",
        e.x = 20.775,
        e.y = 105.261,
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 427,
        e.itemRendererSkinName = BraveTaskItemSkin,
        e.width = 427,
        e.x = 271.781,
        e.y = 2,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 20,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/page2Children/BravePage2Child1ViewSkin.exml"] = window.BravePage2Child1ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["sweepTopBg", "icon2", "txt_itemNum1", "item2", "icon1", "txt_itemNum2", "item1", "imgSwitchOff", "imgSwitchOn", "childViewBg1", "txt_Progress", "panel_icon", "saoDang", "_list2", "_scorl"],
        this.height = 413,
        this.width = 540,
        this.elementsContent = [this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group3_i = function() {
        var e = new eui.Group;
        return e.height = 413,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group2_i(), this._scorl_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.width = 540,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sweepTopBg_i(), this._Group1_i()],
        e
    },
    i.sweepTopBg_i = function() {
        var e = new eui.Image;
        return this.sweepTopBg = e,
        e.source = "yongzhezhengcheng_sweep_sweeptopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 19,
        e.y = 14,
        e.elementsContent = [this.item2_i(), this.item1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i(), this.childViewBg1_i(), this.txt_Progress_i(), this.panel_icon_i(), this.saoDang_i()],
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 148,
        e.y = 2,
        e.elementsContent = [this.icon2_i(), this.txt_itemNum1_i()],
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "yongzhezhengcheng_sweep_icon2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 238,
        e.y = 2,
        e.elementsContent = [this.icon1_i(), this.txt_itemNum2_i()],
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "yongzhezhengcheng_sweep_icon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "y_imgswitchoff_png",
        e.x = 339,
        e.y = 7,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "y_imgswitchon_png",
        e.x = 339,
        e.y = 5,
        e
    },
    i.childViewBg1_i = function() {
        var e = new eui.Image;
        return this.childViewBg1 = e,
        e.source = "yongzhezhengcheng_sweep_childviewbg1_png",
        e.x = 15,
        e.y = 8,
        e
    },
    i.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "0/6",
        e.textColor = 12834813,
        e.x = 48,
        e.y = 10,
        e
    },
    i.panel_icon_i = function() {
        var e = new eui.Image;
        return this.panel_icon = e,
        e.height = 32,
        e.width = 39,
        e.x = 0,
        e.y = 1,
        e
    },
    i.saoDang_i = function() {
        var e = new eui.Image;
        return this.saoDang = e,
        e.source = "yongzhezhengcheng_sweep_saodang_png",
        e.x = 411,
        e.y = 0,
        e
    },
    i._scorl_i = function() {
        var e = new eui.Scroller;
        return this._scorl = e,
        e.height = 343,
        e.width = 533,
        e.x = 0,
        e.y = 70,
        e.viewport = this._list2_i(),
        e
    },
    i._list2_i = function() {
        var e = new eui.List;
        return this._list2 = e,
        e.itemRendererSkinName = BraveSweepItemSkin,
        e.x = 142,
        e.y = 61,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/page2Children/BravePage2Child2ViewSkin.exml"] = window.BravePage2Child2ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["sweepTopBg", "childViewBg2", "txtCoin2", "txtLeftTime", "txt", "icon2", "txt_itemNum1", "item2", "icon1", "txt_itemNum2", "item1", "imgSwitchOff", "imgSwitchOn", "diff3", "icon31", "item_31", "icon32", "item_32", "icon33", "item_33", "icon34", "item_34", "btnSao3", "btnGo3", "not3", "dif3", "diff2", "icon21", "item_21", "icon22", "item_22", "icon23", "item_23", "icon24", "item_24", "btnSao2", "btnGo2", "not2", "dif2", "diff1", "icon11", "item_11", "icon12", "item_12", "icon13", "item_13", "icon14", "item_14", "btnSao1", "btnGo1", "not1", "dif1", "taitan"],
        this.height = 413,
        this.width = 531,
        this.elementsContent = [this._Group6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group6_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sweepTopBg_i(), this._Group2_i(), this.taitan_i()],
        e
    },
    i.sweepTopBg_i = function() {
        var e = new eui.Image;
        return this.sweepTopBg = e,
        e.source = "yongzhezhengcheng_sweep_sweeptopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 17,
        e.y = 16,
        e.elementsContent = [this._Group1_i(), this.item2_i(), this.item1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.childViewBg2_i(), this.txt_i()],
        e
    },
    i.childViewBg2_i = function() {
        var e = new eui.Image;
        return this.childViewBg2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yongzhezhengcheng_sweep_childviewbg2_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_i = function() {
        var e = new eui.Group;
        return this.txt = e,
        e.horizontalCenter = 0,
        e.y = 8,
        e.elementsContent = [this.txtCoin2_i(), this.txtLeftTime_i()],
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余次数：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2/2",
        e.textColor = 4187130,
        e.x = 126,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 260,
        e.y = 0,
        e.elementsContent = [this.icon2_i(), this.txt_itemNum1_i()],
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "yongzhezhengcheng_sweep_icon2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 350,
        e.y = 0,
        e.elementsContent = [this.icon1_i(), this.txt_itemNum2_i()],
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "yongzhezhengcheng_sweep_icon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "y_imgswitchoff_png",
        e.x = 451,
        e.y = 7,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "y_imgswitchon_png",
        e.x = 451,
        e.y = 5,
        e
    },
    i.taitan_i = function() {
        var e = new eui.Group;
        return this.taitan = e,
        e.height = 378,
        e.scaleX = .88,
        e.scaleY = .88,
        e.visible = !0,
        e.x = 0,
        e.y = 80,
        e.elementsContent = [this.dif3_i(), this.dif2_i(), this.dif1_i()],
        e
    },
    i.dif3_i = function() {
        var e = new eui.Group;
        return this.dif3 = e,
        e.x = 0,
        e.y = 271.471,
        e.elementsContent = [this.diff3_i(), this._Group3_i(), this.btnSao3_i(), this.btnGo3_i(), this.not3_i()],
        e
    },
    i.diff3_i = function() {
        var e = new eui.Image;
        return this.diff3 = e,
        e.source = "y_childview_diff3_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 14,
        e.y = 39,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.item_31_i(), this.item_32_i(), this.item_33_i(), this.item_34_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 15,
        e
    },
    i.item_31_i = function() {
        var e = new eui.Group;
        return this.item_31 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.icon31_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon31_i = function() {
        var e = new eui.Image;
        return this.icon31 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_32_i = function() {
        var e = new eui.Group;
        return this.item_32 = e,
        e.x = 70,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this.icon32_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon32_i = function() {
        var e = new eui.Image;
        return this.icon32 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_33_i = function() {
        var e = new eui.Group;
        return this.item_33 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this.icon33_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon33_i = function() {
        var e = new eui.Image;
        return this.icon33 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_34_i = function() {
        var e = new eui.Group;
        return this.item_34 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image4_i(), this.icon34_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon34_i = function() {
        var e = new eui.Image;
        return this.icon34 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.btnSao3_i = function() {
        var e = new eui.Image;
        return this.btnSao3 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 496,
        e.y = 53,
        e
    },
    i.btnGo3_i = function() {
        var e = new eui.Image;
        return this.btnGo3 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 53,
        e
    },
    i.not3_i = function() {
        var e = new eui.Label;
        return this.not3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 35,
        e
    },
    i.dif2_i = function() {
        var e = new eui.Group;
        return this.dif2 = e,
        e.x = 0,
        e.y = 137,
        e.elementsContent = [this.diff2_i(), this._Group4_i(), this.btnSao2_i(), this.btnGo2_i(), this.not2_i()],
        e
    },
    i.diff2_i = function() {
        var e = new eui.Image;
        return this.diff2 = e,
        e.source = "y_childview_diff2_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 14,
        e.y = 39,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this.item_21_i(), this.item_22_i(), this.item_23_i(), this.item_24_i()],
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 15,
        e
    },
    i.item_21_i = function() {
        var e = new eui.Group;
        return this.item_21 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.icon21_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon21_i = function() {
        var e = new eui.Image;
        return this.icon21 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_22_i = function() {
        var e = new eui.Group;
        return this.item_22 = e,
        e.x = 70,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this.icon22_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon22_i = function() {
        var e = new eui.Image;
        return this.icon22 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_23_i = function() {
        var e = new eui.Group;
        return this.item_23 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image7_i(), this.icon23_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon23_i = function() {
        var e = new eui.Image;
        return this.icon23 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_24_i = function() {
        var e = new eui.Group;
        return this.item_24 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image8_i(), this.icon24_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon24_i = function() {
        var e = new eui.Image;
        return this.icon24 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.btnSao2_i = function() {
        var e = new eui.Image;
        return this.btnSao2 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 496,
        e.y = 53,
        e
    },
    i.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 53,
        e
    },
    i.not2_i = function() {
        var e = new eui.Label;
        return this.not2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 35,
        e
    },
    i.dif1_i = function() {
        var e = new eui.Group;
        return this.dif1 = e,
        e.x = 0,
        e.y = 2.529,
        e.elementsContent = [this.diff1_i(), this._Group5_i(), this.btnSao1_i(), this.btnGo1_i(), this.not1_i()],
        e
    },
    i.diff1_i = function() {
        var e = new eui.Image;
        return this.diff1 = e,
        e.source = "y_childview_diff1_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 14,
        e.y = 39,
        e.layout = this._HorizontalLayout3_i(),
        e.elementsContent = [this.item_11_i(), this.item_12_i(), this.item_13_i(), this.item_14_i()],
        e
    },
    i._HorizontalLayout3_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 15,
        e
    },
    i.item_11_i = function() {
        var e = new eui.Group;
        return this.item_11 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image9_i(), this.icon11_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon11_i = function() {
        var e = new eui.Image;
        return this.icon11 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_12_i = function() {
        var e = new eui.Group;
        return this.item_12 = e,
        e.x = 70,
        e.y = 0,
        e.elementsContent = [this._Image10_i(), this.icon12_i()],
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon12_i = function() {
        var e = new eui.Image;
        return this.icon12 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_13_i = function() {
        var e = new eui.Group;
        return this.item_13 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image11_i(), this.icon13_i()],
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon13_i = function() {
        var e = new eui.Image;
        return this.icon13 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.item_14_i = function() {
        var e = new eui.Group;
        return this.item_14 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image12_i(), this.icon14_i()],
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_itembg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon14_i = function() {
        var e = new eui.Image;
        return this.icon14 = e,
        e.height = 50,
        e.source = "y_childview_tc_4_fb_2_png",
        e.width = 50,
        e.x = 5,
        e.y = 5,
        e
    },
    i.btnSao1_i = function() {
        var e = new eui.Image;
        return this.btnSao1 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 496,
        e.y = 53,
        e
    },
    i.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 53,
        e
    },
    i.not1_i = function() {
        var e = new eui.Label;
        return this.not1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 35,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/page2Children/BravePage2Child3ViewSkin.exml"] = window.BravePage2Child3ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["sweepTopBg", "childViewBg2", "txtCoin2", "txtLeftTime", "txt", "icon2", "txt_itemNum1", "item2", "icon1", "txt_itemNum2", "item1", "imgSwitchOff", "imgSwitchOn", "btnGo1", "btnSao1", "not1", "txt_Num1", "dif1", "btnGo2", "btnSao2", "not2", "txt_Num2", "dif2", "btnGo3", "btnSao3", "not3", "txt_Num3", "dif3", "jieshen"],
        this.height = 413,
        this.width = 540,
        this.elementsContent = [this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group4_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group3_i(), this.jieshen_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sweepTopBg_i(), this._Group2_i()],
        e
    },
    i.sweepTopBg_i = function() {
        var e = new eui.Image;
        return this.sweepTopBg = e,
        e.source = "yongzhezhengcheng_sweep_sweeptopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 17,
        e.y = 16,
        e.elementsContent = [this._Group1_i(), this.item2_i(), this.item1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.childViewBg2_i(), this.txt_i()],
        e
    },
    i.childViewBg2_i = function() {
        var e = new eui.Image;
        return this.childViewBg2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yongzhezhengcheng_sweep_childviewbg2_png",
        e.visible = !0,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_i = function() {
        var e = new eui.Group;
        return this.txt = e,
        e.horizontalCenter = 0,
        e.y = 8,
        e.elementsContent = [this.txtCoin2_i(), this.txtLeftTime_i()],
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日挑战次数：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "25/25",
        e.textColor = 4187130,
        e.x = 125,
        e.y = 0,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 260,
        e.y = 0,
        e.elementsContent = [this.icon2_i(), this.txt_itemNum1_i()],
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "yongzhezhengcheng_sweep_icon2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 350,
        e.y = 0,
        e.elementsContent = [this.icon1_i(), this.txt_itemNum2_i()],
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "yongzhezhengcheng_sweep_icon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "y_imgswitchoff_png",
        e.x = 451,
        e.y = 7,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "y_imgswitchon_png",
        e.x = 451,
        e.y = 5,
        e
    },
    i.jieshen_i = function() {
        var e = new eui.Group;
        return this.jieshen = e,
        e.height = 378,
        e.scaleX = .88,
        e.scaleY = .88,
        e.x = 0,
        e.y = 80,
        e.elementsContent = [this.dif1_i(), this.dif2_i(), this.dif3_i()],
        e
    },
    i.dif1_i = function() {
        var e = new eui.Group;
        return this.dif1 = e,
        e.x = 0,
        e.y = 6.47,
        e.elementsContent = [this._Image1_i(), this.btnGo1_i(), this.btnSao1_i(), this.not1_i(), this._Image2_i(), this.txt_Num1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_bg1_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.btnSao1_i = function() {
        var e = new eui.Image;
        return this.btnSao1 = e,
        e.source = "y_childview_btnsao_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.not1_i = function() {
        var e = new eui.Label;
        return this.not1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 33,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_5321_png",
        e.x = 113,
        e.y = 55,
        e
    },
    i.txt_Num1_i = function() {
        var e = new eui.Label;
        return this.txt_Num1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 24,
        e.size = 18,
        e.text = "50",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 80,
        e.x = 113,
        e.y = 56,
        e
    },
    i.dif2_i = function() {
        var e = new eui.Group;
        return this.dif2 = e,
        e.x = 0,
        e.y = 140.348,
        e.elementsContent = [this._Image3_i(), this.btnGo2_i(), this.btnSao2_i(), this.not2_i(), this._Image4_i(), this.txt_Num2_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_bg2_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.btnSao2_i = function() {
        var e = new eui.Image;
        return this.btnSao2 = e,
        e.source = "y_childview_btnsao_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.not2_i = function() {
        var e = new eui.Label;
        return this.not2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 32,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_5322_png",
        e.x = 113,
        e.y = 55,
        e
    },
    i.txt_Num2_i = function() {
        var e = new eui.Label;
        return this.txt_Num2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 24,
        e.size = 18,
        e.text = "85",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 80,
        e.x = 113,
        e.y = 56,
        e
    },
    i.dif3_i = function() {
        var e = new eui.Group;
        return this.dif3 = e,
        e.x = 0,
        e.y = 274.226,
        e.elementsContent = [this._Image5_i(), this.btnGo3_i(), this.btnSao3_i(), this.not3_i(), this._Image6_i(), this.txt_Num3_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_bg3_png",
        e.width = 603,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo3_i = function() {
        var e = new eui.Image;
        return this.btnGo3 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.btnSao3_i = function() {
        var e = new eui.Image;
        return this.btnSao3 = e,
        e.source = "y_childview_btnsao_png",
        e.visible = !0,
        e.x = 496,
        e.y = 51,
        e
    },
    i.not3_i = function() {
        var e = new eui.Label;
        return this.not3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "未达成扫荡条件",
        e.textColor = 12834813,
        e.x = 491,
        e.y = 33,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_5323_png",
        e.x = 113,
        e.y = 55,
        e
    },
    i.txt_Num3_i = function() {
        var e = new eui.Label;
        return this.txt_Num3 = e,
        e.fontFamily = "MFShangHei",
        e.height = 24,
        e.size = 18,
        e.text = "125",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalAlign = "middle",
        e.width = 80,
        e.x = 113,
        e.y = 56,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/page2Children/BravePage2Child4ViewSkin.exml"] = window.BravePage2Child4ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["sweepTopBg", "childViewBg3", "txtCoin2", "txtLeftTime", "txt", "icon2", "txt_itemNum1", "item2", "icon1", "txt_itemNum2", "item1", "imgSwitchOff", "imgSwitchOn", "bg1", "txt_Progress", "panel_icon", "a", "btnGo1", "btnSao1", "btnGo2", "btnSao2", "btnGo3", "btnSao3", "level_icon1", "txtNum1", "not1", "level_icon2", "txtNum2", "not2", "level_icon3", "txtNum3", "not3", "childpage", "petKing", "_scorl"],
        this.height = 413,
        this.elementsContent = [this._Group3_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group2_i(), this._scorl_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sweepTopBg_i(), this.a_i()],
        e
    },
    i.sweepTopBg_i = function() {
        var e = new eui.Image;
        return this.sweepTopBg = e,
        e.source = "yongzhezhengcheng_sweep_sweeptopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.a_i = function() {
        var e = new eui.Group;
        return this.a = e,
        e.x = 19,
        e.y = 15,
        e.elementsContent = [this._Group1_i(), this.item2_i(), this.item1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i(), this.bg1_i(), this.txt_Progress_i(), this.panel_icon_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 97,
        e.y = 2,
        e.elementsContent = [this.childViewBg3_i(), this.txt_i()],
        e
    },
    i.childViewBg3_i = function() {
        var e = new eui.Image;
        return this.childViewBg3 = e,
        e.source = "yongzhezhengcheng_sweep_childviewbg3_png",
        e.x = 0,
        e
    },
    i.txt_i = function() {
        var e = new eui.Group;
        return this.txt = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.y = 7,
        e.elementsContent = [this.txtCoin2_i(), this.txtLeftTime_i()],
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日次数：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "15/15",
        e.textColor = 4187130,
        e.x = 82,
        e.y = 0,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 258,
        e.y = 1,
        e.elementsContent = [this.icon2_i(), this.txt_itemNum1_i()],
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "yongzhezhengcheng_sweep_icon2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 348,
        e.y = 1,
        e.elementsContent = [this.icon1_i(), this.txt_itemNum2_i()],
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "yongzhezhengcheng_sweep_icon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "y_imgswitchoff_png",
        e.x = 449,
        e.y = 8,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "y_imgswitchon_png",
        e.visible = !0,
        e.x = 449,
        e.y = 6,
        e
    },
    i.bg1_i = function() {
        var e = new eui.Image;
        return this.bg1 = e,
        e.source = "yongzhezhengcheng_sweep_childviewbg1_png",
        e.x = 15,
        e.y = 7,
        e
    },
    i.txt_Progress_i = function() {
        var e = new eui.Label;
        return this.txt_Progress = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "0/6",
        e.textColor = 12834813,
        e.x = 48,
        e.y = 9,
        e
    },
    i.panel_icon_i = function() {
        var e = new eui.Image;
        return this.panel_icon = e,
        e.height = 32,
        e.width = 39,
        e.x = 4.5,
        e.y = -4,
        e
    },
    i._scorl_i = function() {
        var e = new eui.Scroller;
        return this._scorl = e,
        e.height = 378,
        e.scaleX = .88,
        e.scaleY = .88,
        e.visible = !0,
        e.width = 603,
        e.x = 0,
        e.y = 80,
        e.viewport = this.petKing_i(),
        e
    },
    i.petKing_i = function() {
        var e = new eui.Group;
        return this.petKing = e,
        e.x = 0,
        e.y = 80,
        e.elementsContent = [this.childpage_i()],
        e
    },
    i.childpage_i = function() {
        var e = new eui.Group;
        return this.childpage = e,
        e.cacheAsBitmap = !0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !1,
        e.x = 0,
        e.y = 66,
        e.elementsContent = [this._Image1_i(), this.btnGo1_i(), this.btnSao1_i(), this.btnGo2_i(), this.btnSao2_i(), this.btnGo3_i(), this.btnSao3_i(), this._Image2_i(), this.level_icon1_i(), this.txtNum1_i(), this.not1_i(), this._Image3_i(), this.level_icon2_i(), this.txtNum2_i(), this.not2_i(), this._Image4_i(), this.level_icon3_i(), this.txtNum3_i(), this.not3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_img3_-_zndxz_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 493,
        e.y = 9,
        e
    },
    i.btnSao1_i = function() {
        var e = new eui.Image;
        return this.btnSao1 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 9,
        e
    },
    i.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "y_page2_btnGo_png",
        e.x = 493,
        e.y = 60,
        e
    },
    i.btnSao2_i = function() {
        var e = new eui.Image;
        return this.btnSao2 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 60,
        e
    },
    i.btnGo3_i = function() {
        var e = new eui.Image;
        return this.btnGo3 = e,
        e.source = "y_page2_btnGo_png",
        e.x = 493,
        e.y = 110,
        e
    },
    i.btnSao3_i = function() {
        var e = new eui.Image;
        return this.btnSao3 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 110,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 14,
        e
    },
    i.level_icon1_i = function() {
        var e = new eui.Image;
        return this.level_icon1 = e,
        e.height = 30,
        e.source = "y_childview_tuceng_12_png",
        e.width = 30,
        e.x = 163,
        e.y = 10,
        e
    },
    i.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 17,
        e
    },
    i.not1_i = function() {
        var e = new eui.Label;
        return this.not1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 19,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 64,
        e
    },
    i.level_icon2_i = function() {
        var e = new eui.Image;
        return this.level_icon2 = e,
        e.height = 30,
        e.source = "y_childview_tc_12_kb_png",
        e.width = 30,
        e.x = 163,
        e.y = 60,
        e
    },
    i.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 68,
        e
    },
    i.not2_i = function() {
        var e = new eui.Label;
        return this.not2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 69,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 114,
        e
    },
    i.level_icon3_i = function() {
        var e = new eui.Image;
        return this.level_icon3 = e,
        e.height = 30,
        e.source = "y_childview_tc_12_kb_png",
        e.width = 30,
        e.x = 163,
        e.y = 110,
        e
    },
    i.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 118,
        e
    },
    i.not3_i = function() {
        var e = new eui.Label;
        return this.not3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 119,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "简单模式",
        e.textColor = 5099519,
        e.x = 28,
        e.y = 18,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "普通模式",
        e.textColor = 13544958,
        e.x = 27,
        e.y = 68,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "困难模式",
        e.textColor = 16769388,
        e.x = 28,
        e.y = 118,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/page2Children/BravePage2Child5ViewSkin.exml"] = window.BravePage2Child5ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["sweepTopBg", "childViewBg2", "txtCoin2", "txtLeftTime", "txt", "icon2", "txt_itemNum1", "item2", "icon1", "txt_itemNum2", "item1", "imgSwitchOff", "imgSwitchOn", "btnGo1", "btnSao1", "btnGo2", "btnSao2", "btnGo3", "btnSao3", "level_icon1", "txtNum1", "not1", "level_icon2", "txtNum2", "not2", "level_icon3", "txtNum3", "not3", "childpage", "petKing", "_scorl"],
        this.height = 413,
        this.elementsContent = [this._Group4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Group3_i(), this._scorl_i()],
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sweepTopBg_i(), this._Group2_i()],
        e
    },
    i.sweepTopBg_i = function() {
        var e = new eui.Image;
        return this.sweepTopBg = e,
        e.source = "yongzhezhengcheng_sweep_sweeptopbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 17,
        e.y = 16,
        e.elementsContent = [this._Group1_i(), this.item2_i(), this.item1_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.childViewBg2_i(), this.txt_i()],
        e
    },
    i.childViewBg2_i = function() {
        var e = new eui.Image;
        return this.childViewBg2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yongzhezhengcheng_sweep_childviewbg2_png",
        e.x = 0,
        e.y = 1,
        e
    },
    i.txt_i = function() {
        var e = new eui.Group;
        return this.txt = e,
        e.horizontalCenter = 0,
        e.y = 8,
        e.elementsContent = [this.txtCoin2_i(), this.txtLeftTime_i()],
        e
    },
    i.txtCoin2_i = function() {
        var e = new eui.Label;
        return this.txtCoin2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余次数：",
        e.textColor = 12834813,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLeftTime_i = function() {
        var e = new eui.Label;
        return this.txtLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2/2",
        e.textColor = 4187130,
        e.x = 126,
        e.y = 0,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 260,
        e.y = 0,
        e.elementsContent = [this.icon2_i(), this.txt_itemNum1_i()],
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.source = "yongzhezhengcheng_sweep_icon2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum1_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum1 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 350,
        e.y = 0,
        e.elementsContent = [this.icon1_i(), this.txt_itemNum2_i()],
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.source = "yongzhezhengcheng_sweep_icon1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemNum2_i = function() {
        var e = new eui.Label;
        return this.txt_itemNum2 = e,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.width = 47.5,
        e.x = 35,
        e.y = 8,
        e
    },
    i.imgSwitchOff_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOff = e,
        e.source = "y_imgswitchoff_png",
        e.x = 451,
        e.y = 7,
        e
    },
    i.imgSwitchOn_i = function() {
        var e = new eui.Image;
        return this.imgSwitchOn = e,
        e.source = "y_imgswitchon_png",
        e.x = 451,
        e.y = 5,
        e
    },
    i._scorl_i = function() {
        var e = new eui.Scroller;
        return this._scorl = e,
        e.height = 378,
        e.scaleX = .88,
        e.scaleY = .88,
        e.visible = !0,
        e.width = 603,
        e.x = 0,
        e.y = 80,
        e.viewport = this.petKing_i(),
        e
    },
    i.petKing_i = function() {
        var e = new eui.Group;
        return this.petKing = e,
        e.x = 0,
        e.y = 80,
        e.elementsContent = [this.childpage_i()],
        e
    },
    i.childpage_i = function() {
        var e = new eui.Group;
        return this.childpage = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !1,
        e.x = 0,
        e.y = 66,
        e.elementsContent = [this._Image1_i(), this.btnGo1_i(), this.btnSao1_i(), this.btnGo2_i(), this.btnSao2_i(), this.btnGo3_i(), this.btnSao3_i(), this._Image2_i(), this.level_icon1_i(), this.txtNum1_i(), this.not1_i(), this._Image3_i(), this.level_icon2_i(), this.txtNum2_i(), this.not2_i(), this._Image4_i(), this.level_icon3_i(), this.txtNum3_i(), this.not3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_img3_-_zndxz_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnGo1_i = function() {
        var e = new eui.Image;
        return this.btnGo1 = e,
        e.source = "y_page2_btnGo_png",
        e.visible = !0,
        e.x = 493,
        e.y = 9,
        e
    },
    i.btnSao1_i = function() {
        var e = new eui.Image;
        return this.btnSao1 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 9,
        e
    },
    i.btnGo2_i = function() {
        var e = new eui.Image;
        return this.btnGo2 = e,
        e.source = "y_page2_btnGo_png",
        e.x = 493,
        e.y = 60,
        e
    },
    i.btnSao2_i = function() {
        var e = new eui.Image;
        return this.btnSao2 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 60,
        e
    },
    i.btnGo3_i = function() {
        var e = new eui.Image;
        return this.btnGo3 = e,
        e.source = "y_page2_btnGo_png",
        e.x = 493,
        e.y = 110,
        e
    },
    i.btnSao3_i = function() {
        var e = new eui.Image;
        return this.btnSao3 = e,
        e.source = "y_childview_btnsao_png",
        e.x = 493,
        e.y = 110,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 14,
        e
    },
    i.level_icon1_i = function() {
        var e = new eui.Image;
        return this.level_icon1 = e,
        e.height = 30,
        e.source = "y_childview_tuceng_12_png",
        e.width = 30,
        e.x = 163,
        e.y = 10,
        e
    },
    i.txtNum1_i = function() {
        var e = new eui.Label;
        return this.txtNum1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 17,
        e
    },
    i.not1_i = function() {
        var e = new eui.Label;
        return this.not1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 19,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 64,
        e
    },
    i.level_icon2_i = function() {
        var e = new eui.Image;
        return this.level_icon2 = e,
        e.height = 30,
        e.source = "y_childview_tc_12_kb_png",
        e.width = 30,
        e.x = 163,
        e.y = 60,
        e
    },
    i.txtNum2_i = function() {
        var e = new eui.Label;
        return this.txtNum2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 68,
        e
    },
    i.not2_i = function() {
        var e = new eui.Label;
        return this.not2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 69,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "y_childview_juxing_920_png",
        e.x = 172,
        e.y = 114,
        e
    },
    i.level_icon3_i = function() {
        var e = new eui.Image;
        return this.level_icon3 = e,
        e.height = 30,
        e.source = "y_childview_tc_12_kb_2_png",
        e.width = 30,
        e.x = 163,
        e.y = 110,
        e
    },
    i.txtNum3_i = function() {
        var e = new eui.Label;
        return this.txtNum3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 8631282,
        e.width = 88,
        e.x = 193,
        e.y = 118,
        e
    },
    i.not3_i = function() {
        var e = new eui.Label;
        return this.not3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16.6666641235352,
        e.text = "未达成扫荡条件",
        e.textColor = 8631282,
        e.x = 359,
        e.y = 119,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "简单模式",
        e.textColor = 5099519,
        e.x = 28,
        e.y = 18,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "普通模式",
        e.textColor = 13544958,
        e.x = 27,
        e.y = 68,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "困难模式",
        e.textColor = 16769388,
        e.x = 28,
        e.y = 118,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/BravePage2ViewSkin.exml"] = window.BravePage2ViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["content1", "content2", "content3", "content4", "content5", "rb_1", "rb_2", "rb_3", "rb_4", "rb_5", "rb_6", "rb_7", "grp_rb"],
        this.height = 371,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "经验训练场",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "学习力训练场",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "勇者之塔",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "泰坦矿洞",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "六界神王殿",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "精灵王的试炼",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    h = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "y_mainpanel_selectbg_png",
            e.width = 120,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return e.source = "yongzhezhengcheng_hr_png",
            e.x = 5,
            e.y = 33,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.height = 33,
            e.size = 16,
            e.text = "神兽之威",
            e.textAlign = "center",
            e.textColor = 9557503,
            e.verticalAlign = "middle",
            e.width = 115,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.fillAlpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.content1_i(), this.content2_i(), this.content3_i(), this.content4_i(), this.content5_i(), this.grp_rb_i()],
        e
    },
    u.content1_i = function() {
        var e = new yongzhezhengcheng.BravePage2Child1View;
        return this.content1 = e,
        e.height = 413,
        e.skinName = "BravePage2Child1ViewSkin",
        e.visible = !0,
        e.x = 130,
        e.y = 5,
        e
    },
    u.content2_i = function() {
        var e = new yongzhezhengcheng.BravePage2Child2View;
        return this.content2 = e,
        e.skinName = "BravePage2Child2ViewSkin",
        e.visible = !1,
        e.x = 130,
        e.y = 5,
        e
    },
    u.content3_i = function() {
        var e = new yongzhezhengcheng.BravePage2Child3View;
        return this.content3 = e,
        e.skinName = "BravePage2Child3ViewSkin",
        e.visible = !1,
        e.x = 130,
        e.y = 5,
        e
    },
    u.content4_i = function() {
        var e = new yongzhezhengcheng.BravePage2Child4View;
        return this.content4 = e,
        e.skinName = "BravePage2Child4ViewSkin",
        e.visible = !1,
        e.x = 130,
        e.y = 5,
        e
    },
    u.content5_i = function() {
        var e = new yongzhezhengcheng.BravePage2Child5View;
        return this.content5 = e,
        e.skinName = "BravePage2Child5ViewSkin",
        e.visible = !1,
        e.x = 130,
        e.y = 5,
        e
    },
    u.grp_rb_i = function() {
        var e = new eui.Group;
        return this.grp_rb = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 15,
        e.elementsContent = [this._Image1_i(), this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.rb_4_i(), this.rb_5_i(), this.rb_6_i(), this.rb_7_i()],
        e
    },
    u._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 405,
        e.source = "y_page2_juxing_916_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    u.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "grp_page2Rb",
        e.value = "1",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 8.771,
        e.skinName = i,
        e
    },
    u.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "grp_page2Rb",
        e.value = "2",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 66.771,
        e.skinName = n,
        e
    },
    u.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "grp_page2Rb",
        e.value = "3",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 125.771,
        e.skinName = o,
        e
    },
    u.rb_4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_4 = e,
        e.groupName = "grp_page2Rb",
        e.value = "4",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 184.771,
        e.skinName = r,
        e
    },
    u.rb_5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_5 = e,
        e.groupName = "grp_page2Rb",
        e.value = "5",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 243.771,
        e.skinName = a,
        e
    },
    u.rb_6_i = function() {
        var e = new eui.RadioButton;
        return this.rb_6 = e,
        e.groupName = "grp_page2Rb",
        e.value = "6",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 302.771,
        e.skinName = s,
        e
    },
    u.rb_7_i = function() {
        var e = new eui.RadioButton;
        return this.rb_7 = e,
        e.groupName = "grp_page2Rb",
        e.value = "7",
        e.visible = !0,
        e.width = 120,
        e.x = 0,
        e.y = 360.771,
        e.skinName = h,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.MainpanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "petImage", "border", "btnGetPet", "titlebg", "text_petName", "text_currRecom", "recommend", "rb_1", "rb_2", "btnClose", "page1", "page2", "_viewPage"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.recommend_i(), this._Group1_i(), this.btnClose_i(), this._viewPage_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "yongzhezhengcheng_journey_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "yongzhezhengcheng_journey_up_png",
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
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "yongzhezhengcheng_sweep_down_png")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.percentHeight = 100,
            e.source = "yongzhezhengcheng_sweep_up_png",
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
    o = t.prototype;
    return o.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "yongzhezhengcheng_bg_png",
        e.x = 23,
        e.y = 0,
        e
    },
    o.recommend_i = function() {
        var e = new eui.Group;
        return this.recommend = e,
        e.x = 66.977,
        e.y = 114,
        e.elementsContent = [this.petImage_i(), this.border_i(), this.btnGetPet_i(), this.titlebg_i(), this.text_petName_i(), this.text_currRecom_i()],
        e
    },
    o.petImage_i = function() {
        var e = new eui.Image;
        return this.petImage = e,
        e.height = 359,
        e.width = 259,
        e.x = 36,
        e.y = 66,
        e
    },
    o.border_i = function() {
        var e = new eui.Image;
        return this.border = e,
        e.source = "yongzhezhengcheng_border_png",
        e.visible = !0,
        e.x = 22,
        e.y = 52,
        e
    },
    o.btnGetPet_i = function() {
        var e = new eui.Image;
        return this.btnGetPet = e,
        e.source = "yongzhezhengcheng_btnget_png",
        e.x = 98,
        e.y = 404,
        e
    },
    o.titlebg_i = function() {
        var e = new eui.Image;
        return this.titlebg = e,
        e.source = "yongzhezhengcheng_titlebg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    o.text_petName_i = function() {
        var e = new eui.Label;
        return this.text_petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20.88,
        e.text = "艾欧丽娅",
        e.textAlign = "center",
        e.textColor = 15990641,
        e.width = 260.632,
        e.x = 35,
        e.y = 38.192,
        e
    },
    o.text_currRecom_i = function() {
        var e = new eui.Label;
        return this.text_currRecom = e,
        e.fontFamily = "REEJI",
        e.size = 17.492,
        e.text = "当前推荐",
        e.textColor = 7993343,
        e.x = 37,
        e.y = 17.192,
        e
    },
    o._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 392,
        e.y = 73,
        e.elementsContent = [this.rb_1_i(), this.rb_2_i()],
        e
    },
    o.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "grpLeft",
        e.value = "1",
        e.visible = !0,
        e.x = 3,
        e.y = 5,
        e.skinName = i,
        e
    },
    o.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "grpLeft",
        e.value = "2",
        e.visible = !0,
        e.x = 342,
        e.y = 5,
        e.skinName = n,
        e
    },
    o.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "yongzhezhengcheng_btnclose_png",
        e.x = 1067,
        e.y = 38,
        e
    },
    o._viewPage_i = function() {
        var e = new eui.ViewStack;
        return this._viewPage = e,
        e.height = 427,
        e.width = 677,
        e.x = 394.008,
        e.y = 137.087,
        e.elementsContent = [this._Group2_i()],
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.percentHeight = 100,
        e.name = "Group",
        e.percentWidth = 100,
        e.elementsContent = [this.page1_i(), this.page2_i()],
        e
    },
    o.page1_i = function() {
        var e = new yongzhezhengcheng.BravePage1View;
        return this.page1 = e,
        e.percentHeight = 100,
        e.skinName = "BravePage1ViewSkin",
        e.visible = !1,
        e.width = 677,
        e.x = 0,
        e.y = 0,
        e
    },
    o.page2_i = function() {
        var e = new yongzhezhengcheng.BravePage2View;
        return this.page2 = e,
        e.skinName = "BravePage2ViewSkin",
        e.visible = !1,
        e.width = 677,
        e.x = 0,
        e.y = 3,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/ImageGuidePopViewSkin.exml"] = window.ImageGuidePopViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["arrowRight", "arrowLeft", "imageGuide_bg", "petImage", "imageGroup", "imageGuide_bgCopy", "petImageCopy", "imageGroupCopy", "imageGuide", "closeTab"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.imageGuide_i(), this.closeTab_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imageGuide_i = function() {
        var e = new eui.Group;
        return this.imageGuide = e,
        e.touchEnabled = !0,
        e.touchThrough = !0,
        e.x = 42,
        e.y = 58,
        e.elementsContent = [this.arrowRight_i(), this.arrowLeft_i(), this.imageGroup_i(), this.imageGroupCopy_i()],
        e
    },
    i.arrowRight_i = function() {
        var e = new eui.Image;
        return this.arrowRight = e,
        e.source = "yongzhezhengcheng_arrowright_png",
        e.x = 977,
        e.y = 197,
        e
    },
    i.arrowLeft_i = function() {
        var e = new eui.Image;
        return this.arrowLeft = e,
        e.source = "yongzhezhengcheng_arrowleft_png",
        e.x = 0,
        e.y = 197,
        e
    },
    i.imageGroup_i = function() {
        var e = new eui.Group;
        return this.imageGroup = e,
        e.height = 513,
        e.width = 900,
        e.x = 79,
        e.y = 0,
        e.elementsContent = [this.imageGuide_bg_i(), this.petImage_i()],
        e
    },
    i.imageGuide_bg_i = function() {
        var e = new eui.Image;
        return this.imageGuide_bg = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yongzhezhengcheng_imageguide_bg_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petImage_i = function() {
        var e = new eui.Image;
        return this.petImage = e,
        e.height = 500,
        e.visible = !0,
        e.width = 888,
        e.x = 6,
        e.y = 5.547,
        e
    },
    i.imageGroupCopy_i = function() {
        var e = new eui.Group;
        return this.imageGroupCopy = e,
        e.height = 513,
        e.width = 900,
        e.x = 79,
        e.y = 0,
        e.elementsContent = [this.imageGuide_bgCopy_i(), this.petImageCopy_i()],
        e
    },
    i.imageGuide_bgCopy_i = function() {
        var e = new eui.Image;
        return this.imageGuide_bgCopy = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yongzhezhengcheng_imageguide_bg_png",
        e.touchEnabled = !1,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.petImageCopy_i = function() {
        var e = new eui.Image;
        return this.petImageCopy = e,
        e.height = 500,
        e.visible = !0,
        e.width = 888,
        e.x = 6,
        e.y = 5.547,
        e
    },
    i.closeTab_i = function() {
        var e = new eui.Label;
        return this.closeTab = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20.592,
        e.text = "点击空白处关闭",
        e.textColor = 6388143,
        e.y = 600,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/TextGuidePopViewSkin.exml"] = window.TextGuidePopViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["textGuide_bg", "closeTab_2", "difficulty", "timeCount", "recommendPet", "content_difficulty", "content_timeCount", "content_recommendPet", "textGuide"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.textGuide_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.textGuide_i = function() {
        var e = new eui.Group;
        return this.textGuide = e,
        e.horizontalCenter = 0,
        e.touchEnabled = !0,
        e.touchThrough = !0,
        e.y = 195,
        e.elementsContent = [this.textGuide_bg_i(), this.closeTab_2_i(), this.difficulty_i(), this.timeCount_i(), this.recommendPet_i(), this.content_difficulty_i(), this.content_timeCount_i(), this.content_recommendPet_i()],
        e
    },
    i.textGuide_bg_i = function() {
        var e = new eui.Image;
        return this.textGuide_bg = e,
        e.source = "yongzhezhengcheng_textguide_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.closeTab_2_i = function() {
        var e = new eui.Label;
        return this.closeTab_2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20.592,
        e.text = "点击空白处关闭",
        e.textColor = 6388143,
        e.y = 405,
        e
    },
    i.difficulty_i = function() {
        var e = new eui.Label;
        return this.difficulty = e,
        e.fontFamily = "REEJI",
        e.size = 20.88,
        e.text = "关卡难度",
        e.textColor = 8631026,
        e.x = 28,
        e.y = 22,
        e
    },
    i.timeCount_i = function() {
        var e = new eui.Label;
        return this.timeCount = e,
        e.fontFamily = "REEJI",
        e.size = 20.88,
        e.text = "预计耗时",
        e.textColor = 8631026,
        e.x = 28,
        e.y = 96,
        e
    },
    i.recommendPet_i = function() {
        var e = new eui.Label;
        return this.recommendPet = e,
        e.fontFamily = "REEJI",
        e.size = 20.88,
        e.text = "推荐精灵",
        e.textColor = 8631026,
        e.x = 28,
        e.y = 168,
        e
    },
    i.content_difficulty_i = function() {
        var e = new eui.Label;
        return this.content_difficulty = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "简单",
        e.textColor = 12834813,
        e.x = 28,
        e.y = 49,
        e
    },
    i.content_timeCount_i = function() {
        var e = new eui.Label;
        return this.content_timeCount = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10-12天",
        e.textColor = 12834813,
        e.x = 28,
        e.y = 123,
        e
    },
    i.content_recommendPet_i = function() {
        var e = new eui.Label;
        return this.content_recommendPet = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "几米，王之哈莫，幻境界皇，艾欧丽娅，几米，王之哈莫，幻境界皇，艾欧丽娅",
        e.textColor = 12834813,
        e.width = 364,
        e.x = 28,
        e.y = 196,
        e
    },
    t
} (eui.Skin);