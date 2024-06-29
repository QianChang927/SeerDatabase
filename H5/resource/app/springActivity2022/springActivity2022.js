var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
springActivity2022; !
function(t) {
    var e = function() {
        function t() {}
        return t.setup = function() {
            var t = this;
            return new Promise(function(e, i) {
                t.data = RES.getResByUrl("SpringAchieveInfo_json");
                var n = t.data;
                t.achieveMap = new HashMap;
                for (var s = 0,
                r = n; s < r.length; s++) {
                    var a = r[s];
                    t.achieveMap.add(a.ID, a)
                }
                e()
            })
        },
        t.getBranchID = function(t) {
            if (this.achieveMap.getValue(t)) {
                var e = this.achieveMap.getValue(t).BranchID;
                return e
            }
        },
        t
    } ();
    __reflect(e.prototype, "SpringAchieveXMLInfo")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.AttrConst.forever_current_state, t.AttrConst.forever_torch_info, t.AttrConst.forever_award_state], [t.AttrConst.daily_game_times]),
            i.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i.prototype.reShow = function() {
            this.currentPanel && this.currentPanel.updateTask()
        },
        i
    } (BasicMultPanelModule);
    t.SpringActivity2022 = e,
    __reflect(e.prototype, "springActivity2022.SpringActivity2022")
} (springActivity2022 || (springActivity2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
springActivity2022; !
function(t) {
    var e = function() {
        function t() {}
        return t.ACHIEVEMENT = 41388,
        t.TASKINFO = 45813,
        t.ENDTASK = 45814,
        t
    } ();
    t.CMDConst = e,
    __reflect(e.prototype, "springActivity2022.CMDConst")
} (springActivity2022 || (springActivity2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
springActivity2022; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "springActivity2022.SpringActivity2022MainPanel",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "springActivity2022.ModuleConst")
} (springActivity2022 || (springActivity2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
springActivity2022; !
function(t) {
    var e = function() {
        function t(t) {
            this.id = t.readUnsignedInt(),
            this.curProgress = t.readUnsignedInt(),
            this.maxProgress = t.readUnsignedInt(),
            this.state = t.readUnsignedInt()
        }
        return t
    } ();
    t.SpringTaskInfo = e,
    __reflect(e.prototype, "springActivity2022.SpringTaskInfo")
} (springActivity2022 || (springActivity2022 = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
springActivity2022; !
function(t) {
    var e = function() {
        function t() {}
        return t.forever_current_state = 121181,
        t.forever_torch_info = 121182,
        t.daily_game_times = 201348,
        t.forever_award_state = 121193,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "springActivity2022.AttrConst")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SpringActivity.AchievementItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.chenhao,
            function() {
                if (e._cfg.SpeNameBonus) {
                    var t = {};
                    t.SpeNameBonus = e._cfg.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(t)
                }
            },
            this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._cfg = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.titleName.text = this._cfg.AName;
            var t = AchieveManager.getAwardMask(this._cfg.BranchID, this._cfg.RuleID),
            e = t && !!t.rule_mask;
            this.flag_got.visible = e;
            var i = SystemTimerManager.sysBJDate.getTime(),
            n = new Date("2022/2/4").getTime();
            this.enabled = 1 == this._cfg.Period || i >= n,
            this.touchEnabled = this.touchChildren = this.enabled && !e
        },
        e.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.AchievementItem = e,
    __reflect(e.prototype, "springActivity2022.AchievementItem")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = SpringAvtivity2022TaskChildItemSkin,
            i._info = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.txtTask.text = this._info.TaskDesc,
            this.txt_num.text = this._info.TaskRewardCnt + "",
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(t.CMDConst.ENDTASK, [i._info.TaskID],
                function() {
                    EventManager.dispatchEventWith("spring_update_task")
                })
            },
            this)
        },
        i.prototype.updateView = function(t) {
            this.flag_got.visible = 2 == t.state,
            this.btnGet.visible = 1 == t.state,
            this.flag_not.visible = 0 == t.state
        },
        i.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.Component);
    t.ChildTask = e,
    __reflect(e.prototype, "springActivity2022.ChildTask")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(springActivity2022) {
    var ParentTask = function(_super) {
        function ParentTask(t) {
            var e = _super.call(this) || this;
            return e.skinName = SpringAvtivity2022TaskItemSkin,
            e._info = t,
            e
        }
        return __extends(ParentTask, _super),
        ParentTask.prototype.childrenCreated = function() {
            var _this = this;
            _super.prototype.childrenCreated.call(this),
            this.taskName.text = this._info.Taskname,
            this.btnHelp.x = this.taskName.width + 23,
            this.btnGo.visible = !!this._info.GoToPath,
            this.btnHelp.visible = !!this._info.MainTips,
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                Alarm.show(_this._info.MainTips)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                if ("seer" == _this._info.GoToPath) Alert.show("本活动仅可在页游参与，点击确定立即前往！",
                function() {
                    StatLogger.log("20220128版本系统功能", "H5称号全民送", "通过任务跳转前往页游"),
                    window.open("https://seer.61.com/", "_blank")
                });
                else {
                    var obj = eval("obj=" + _this._info.GoToPath);
                    ModuleManager.showModuleByID(obj.id, obj.param)
                }
            },
            this)
        },
        ParentTask.prototype.onTouch = function(t) {
            var e = this,
            i = t.target;
            i != this.btnGo && i != this.btnHelp && ("down" == this.currentState ? (EventManager.dispatchEventWith("spring_task_fold", !1, this), egret.setTimeout(function() {
                e.currentState = "up"
            },
            this, 200)) : (EventManager.dispatchEventWith("spring_task_open", !1, this), egret.setTimeout(function() {
                e.currentState = "down"
            },
            this, 200)))
        },
        ParentTask.prototype.updateView = function(t) {
            this.txtOverTime.text = this._info.MainTaskStats.replace("[]", t.curProgress)
        },
        ParentTask.prototype.destroy = function() {
            this.removeChildren(),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this)
        },
        ParentTask
    } (eui.Component);
    springActivity2022.ParentTask = ParentTask,
    __reflect(ParentTask.prototype, "springActivity2022.ParentTask")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            t._itemId = 1724334,
            t._taskDic = new common.Dictionary(!0),
            t.skinName = SpringActivity.MainPanelSkin;
            var i = config.xml.getAnyRes("SpringTaskInfo"),
            n = i.SpringTaskInfos.SpringTaskInfo;
            t._taskConfig = [];
            for (var s = 0; 10 > s; s++) t._taskConfig.push([]);
            for (var s = 0; s < n.length; s++) {
                var r = n[s];
                t._taskConfig[r.Tasktype - 1].push(r)
            }
            var a = config.xml.getAnyRes("SpringAchieveInfo");
            return t._achieveConfig = a.SpringAchieveInfos.SpringAchieveInfo.concat(),
            t._achieveConfig.sort(function(t, e) {
                return t.ID - e.ID
            }),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            if (e.prototype.childrenCreated.call(this), StatLogger.log("20220128版本系统功能", "H5称号全民送", "打开活动面板"), !egret.localStorage.getItem("spring_activity_auto_pop_" + MainManager.actorID)) {
                var i = new t.SpingActivity2022HelpPop;
                PopViewManager.getInstance().openView(i),
                egret.localStorage.setItem("spring_activity_auto_pop_" + MainManager.actorID, "yes")
            }
            for (var n = 1; 7 > n; n++) this["_anim" + n] = DragonbonesUtil.createAnimate("h5_huoju_ske_json", "h5_huoju_tex_json", "h5_huoju_tex_png", "h5_huoju"),
            this["grpAnim" + n].addChild(this["_anim" + n]);
            this.initTask(),
            this.update(),
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                var e = new t.SpingActivity2022HelpPop;
                PopViewManager.getInstance().openView(e)
            }),
            ImageButtonUtil.add(this.btnSelect,
            function() {
                var e = new t.SpingActivity2022SelectPop;
                PopViewManager.getInstance().openView(e)
            },
            this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["torch" + i],
                function() {
                    var n = e.service.getValue(t.AttrConst.forever_current_state),
                    s = 255 & n,
                    r = e.service.getValue(t.AttrConst.forever_torch_info),
                    a = e.service.getValue(t.AttrConst.daily_game_times),
                    o = KTool.getBit(r, i);
                    return 0 != s || a ? void(1 != s || o || Alert.show("点亮六界神火需要消耗神火之辉*20，是否确认点亮？",
                    function() {
                        ItemManager.getNumByID(e._itemId) >= 20 ? (AwardManager.pause(), SocketConnection.sendByQueue(t.CMDConst.ACHIEVEMENT, [34, i + 150],
                        function() {
                            e["_anim" + i].once(egret.Event.COMPLETE,
                            function() {
                                e.service.updateValues().then(function() {
                                    AwardManager.resume();
                                    var i = e.service.getValue(t.AttrConst.forever_torch_info);
                                    63 == i ? Alarm.show("恭喜你，点亮了全部神火，快去领取称号吧！") : Alarm.show("恭喜你，成功点亮了一盏神火！"),
                                    e.update()
                                })
                            },
                            e),
                            e["_anim" + i].animation.play("fireup", 1)
                        },
                        function() {
                            AwardManager.resume()
                        })) : Alarm.show("你还未获得足够的神火之辉，快去完成任务获取吧！")
                    })) : void Alarm.show("请先选择称号作为游戏奖励！")
                },
                n)
            },
            n = this, s = 1; 6 >= s; s++) i(s);
            ImageButtonUtil.add(this.btnTitleGet,
            function() {
                SocketConnection.sendByQueue(t.CMDConst.ACHIEVEMENT, [34, 160],
                function() {
                    var i = e.service.getValue(t.AttrConst.forever_award_state),
                    n = 255 & i;
                    5 > n ? Alarm.show("领取成功！新春福利进度+1") : Alarm.show("领取成功！"),
                    e.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.btn,
            function() {
                var i = e.service.getValue(t.AttrConst.forever_award_state),
                n = 255 & i;
                5 > n ? Alert.show("是否消耗<font color='#FF0000'>40</font>个神火之辉，兑换1点新春福利进度？",
                function() {
                    ItemManager.getNumByID(e._itemId) >= 40 ? SocketConnection.sendByQueue(t.CMDConst.ACHIEVEMENT, [34, 162],
                    function() {
                        BubblerManager.getInstance().showText("兑换成功，新春福利进度+1"),
                        e.updateValues()
                    }) : Alarm.show("你还未获得足够的神火之辉，快去完成任务获取吧！")
                }) : SocketConnection.sendByQueue(t.CMDConst.ACHIEVEMENT, [34, 161],
                function() {
                    e.updateValues()
                })
            },
            this),
            ImageButtonUtil.add(this.chenhao,
            function() {
                var i = e.service.getValue(t.AttrConst.forever_current_state),
                n = i >> 8 & 255;
                if (n && e._achieveConfig[n - 1]) {
                    var s = {};
                    s.SpeNameBonus = e._achieveConfig[n - 1].SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(s)
                }
            },
            this),
            EventManager.addEventListener("spring_task_open", this.onOpenTask, this),
            EventManager.addEventListener("spring_task_fold", this.onFoldTask, this),
            EventManager.addEventListener("spring_update_task", this.updateTask, this),
            EventManager.addEventListener("spring_update_values", this.updateValues, this)
        },
        i.prototype.update = function() {
            var e = this.service.getValue(t.AttrConst.forever_current_state),
            i = this.service.getValue(t.AttrConst.forever_torch_info),
            n = this.service.getValue(t.AttrConst.daily_game_times),
            s = 255 & e,
            r = e >> 8 & 255;
            r && this._achieveConfig[r - 1] && (this.titleName.text = this._achieveConfig[r - 1].AName);
            for (var a = 1; 7 > a; a++) {
                var o = KTool.getBit(i, a);
                this["torch" + a].touchEnabled = !o,
                o ? this["_anim" + a].animation.play("fire", 0) : this["_anim" + a].animation.play("shineinghuoju", 0)
            }
            switch (s) {
            case 0:
                this.grpTitle.visible = !1,
                this.btnSelect.visible = !n,
                this.flag_tomorrow.visible = !!n;
                break;
            case 1:
                this.grpTitle.visible = !0,
                this.titleInfo.visible = !0,
                this.btnSelect.visible = !1,
                this.btnTitleGet.visible = !1,
                this.flag_tomorrow.visible = !1;
                break;
            case 2:
                this.grpTitle.visible = !0,
                this.titleInfo.visible = !1,
                this.btnSelect.visible = !1,
                this.btnTitleGet.visible = !0,
                this.flag_tomorrow.visible = !1
            }
            var _ = this.service.getValue(t.AttrConst.forever_award_state),
            u = 255 & _,
            h = _ >> 8 & 255;
            this.setProgress(u),
            h ? (this.hasGet.visible = !0, DisplayUtil.setEnabled(this.btn, !1), this.btnName.text = "领取") : (this.hasGet.visible = !1, DisplayUtil.setEnabled(this.btn, !0), 5 > u ? this.btnName.text = "兑换": this.btnName.text = "领取"),
            this.txt_itemNum.text = ItemManager.getNumByID(this._itemId) + ""
        },
        i.prototype.setProgress = function(t) {
            for (var e = 0; 5 > e; e++) this["progress" + e].visible = t > e
        },
        i.prototype.initTask = function() {
            for (var e = 0; e < this._taskConfig.length; e++) {
                var i = this._taskConfig[e][this._taskConfig[e].length - 1],
                n = new t.ParentTask(i);
                n.y = 62 * e,
                this._taskList.addChild(n),
                this.updateTask()
            }
        },
        i.prototype.onOpenTask = function(e) {
            var i = this,
            n = e.data;
            this._taskList.touchEnabled = this._taskList.touchChildren = !1;
            for (var s = this._taskList.getChildIndex(n), r = this._taskConfig[n._info.Tasktype - 1], a = [], o = 0; o < r.length; o++) {
                var _ = new t.ChildTask(r[o]);
                _.x = 8,
                _.y = n.y,
                a.push(_)
            }
            a.sort(function(t, e) {
                var n = i._taskDic.getValue(t._info.TaskID),
                s = i._taskDic.getValue(e._info.TaskID),
                r = n.state,
                a = s.state;
                return Math.abs(r - .7) - Math.abs(a - .7)
            });
            for (var o = 0; o < a.length; o++) {
                var _ = a[o];
                _.alpha = 0,
                this._taskList.addChildAt(_, s + o + 1),
                _.updateView(this._taskDic.getValue(_._info.TaskID)),
                egret.Tween.get(_).to({
                    y: n.y + n.height + 4 + 44 * o,
                    alpha: 1
                },
                200).call(function() {
                    i._taskList.touchEnabled = i._taskList.touchChildren = !0
                })
            }
            for (var u = s + r.length + 1; u < this._taskList.numChildren; u++) {
                var h = this._taskList.getChildAt(u);
                egret.Tween.get(h).to({
                    y: h.y + 44 * r.length - 1
                },
                200).call(function() {
                    i._taskList.touchEnabled = i._taskList.touchChildren = !0
                })
            }
        },
        i.prototype.onFoldTask = function(t) {
            var e = this,
            i = t.data;
            this._taskList.touchEnabled = this._taskList.touchChildren = !1;
            for (var n = this._taskList.getChildIndex(i), s = this._taskConfig[i._info.Tasktype - 1], r = function(t) {
                var s = a._taskList.getChildAt(n + t + 1);
                egret.Tween.get(s).to({
                    y: i.y,
                    alpha: 0
                },
                200).call(function() {
                    s.destroy(),
                    DisplayUtil.removeForParent(s),
                    e._taskList.touchEnabled = e._taskList.touchChildren = !0
                })
            },
            a = this, o = 0; o < s.length; o++) r(o);
            for (var _ = n + s.length + 1; _ < this._taskList.numChildren; _++) {
                var u = this._taskList.getChildAt(_);
                egret.Tween.get(u).to({
                    y: u.y - 44 * s.length + 1
                },
                200).call(function() {
                    e._taskList.touchEnabled = e._taskList.touchChildren = !0
                })
            }
        },
        i.prototype.updateTask = function() {
            var e = this;
            SocketConnection.sendByQueue(t.CMDConst.TASKINFO, [],
            function(i) {
                for (var n = i.data,
                s = n.readUnsignedInt(), r = 0; s > r; r++) {
                    var a = new t.SpringTaskInfo(n);
                    e._taskDic.add(a.id, a)
                }
                for (var o = 0; o < e._taskList.numChildren; o++) {
                    var _ = e._taskList.getChildAt(o),
                    u = e._taskDic.getValue(_._info.TaskID);
                    _.updateView(u)
                }
                e.txt_itemNum.text = ItemManager.getNumByID(e._itemId) + ""
            })
        },
        i.prototype.destroy = function() {
            for (e.prototype.destroy.call(this); this._taskList.numChildren;) {
                var t = this._taskList.getChildAt(0);
                t.destroy(),
                DisplayUtil.removeForParent(t)
            }
            for (var i = 1; 7 > i; i++) this["_anim" + i].dispose();
            EventManager.removeEventListener("spring_task_open", this.onOpenTask, this),
            EventManager.removeEventListener("spring_task_fold", this.onFoldTask, this),
            EventManager.removeEventListener("spring_update_task", this.updateTask, this),
            EventManager.removeEventListener("spring_update_values", this.updateValues, this)
        },
        i
    } (BasicPanel);
    t.SpringActivity2022MainPanel = e,
    __reflect(e.prototype, "springActivity2022.SpringActivity2022MainPanel")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.curIndex = 0,
            e.skinName = SpringActivity.HelpPopSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.curIndex = 1,
            this.initDat(),
            this.addEvents(),
            this.update()
        },
        e.prototype.initDat = function() {},
        e.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnLast, this.onTouchBtn, this),
            ImageButtonUtil.add(this.btnNext, this.onTouchBtn, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        e.prototype.onTouchBtn = function(t) {
            switch (t.currentTarget) {
            case this.btnLast:
                if (1 == this.curIndex) {
                    this.curIndex = 4;
                    break
                }
                this.curIndex--;
                break;
            case this.btnNext:
                if (4 == this.curIndex) {
                    this.curIndex = 1;
                    break
                }
                this.curIndex++
            }
            this.update()
        },
        e.prototype.update = function() {
            for (var t = 1; 4 >= t; t++) this["a_" + t].visible = t == this.curIndex,
            this["icon" + t].currentState = t == this.curIndex ? "cur": "notcur"
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.SpingActivity2022HelpPop = e,
    __reflect(e.prototype, "springActivity2022.SpingActivity2022HelpPop")
} (springActivity2022 || (springActivity2022 = {}));
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
springActivity2022; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SpringActivity.SelectPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.initView(),
            ImageButtonUtil.add(this.btnComfirm,
            function() {
                var e = i._list.selectedItem;
                if (!e) return void Alarm.show("请先选择一个称号！");
                var n = e.AName;
                Alert.show("你确定选择" + n + "作为本轮游戏奖励吗？（确认后将无法更改）",
                function() {
                    SocketConnection.sendByQueue(t.CMDConst.ACHIEVEMENT, [34, 100 + e.ID],
                    function() {
                        EventManager.dispatchEventWith("spring_update_values"),
                        i.hide()
                    })
                })
            },
            this)
        },
        i.prototype.initView = function() {
            this._list.itemRenderer = t.AchievementItem;
            var e = config.xml.getRes("SpringAchieveInfo");
            this._achieveCfg = e.SpringAchieveInfos.SpringAchieveInfo.concat(),
            this.initList()
        },
        i.prototype.initList = function() {
            for (var t = SystemTimerManager.sysBJDate.getTime(), e = new Date("2022/2/4").getTime(), i = e > t, n = this._achieveCfg.filter(function(t) {
                return ! i || 1 == t.Period
            }), s = 0, r = 0; r < n.length; r++) {
                var a = n[r],
                o = AchieveManager.getAwardMask(a.BranchID, a.RuleID);
                o && o.rule_mask && s++
            }
            s == n.length ? (i ? Alarm.show("你已拥有本期开放的全部称号，下周再来看看吧！神火之辉还可直接兑换新春福利进度，获取水晶奖励！") : Alarm.show("你已拥有奖励中的全部称号！神火之辉还可直接兑换新春福利进度，获取水晶奖励！"), DisplayUtil.setEnabled(this.btnComfirm, !1)) : DisplayUtil.setEnabled(this.btnComfirm, !0),
            this._achieveCfg.sort(function(t, e) {
                var n = AchieveManager.getAwardMask(t.BranchID, t.RuleID),
                s = AchieveManager.getAwardMask(e.BranchID, e.RuleID);
                return n && s && n.rule_mask != s.rule_mask ? n.rule_mask - s.rule_mask: i ? t.Period - e.Period: t.ID - e.ID
            }),
            this._list.dataProvider = new eui.ArrayCollection(this._achieveCfg)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.SpingActivity2022SelectPop = e,
    __reflect(e.prototype, "springActivity2022.SpingActivity2022SelectPop")
} (springActivity2022 || (springActivity2022 = {})),
window.SpringActivity = window.SpringActivity || {};
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
generateEUI.paths["resource/eui_skins/AchievementItemSkin.exml"] = window.SpringActivity.AchievementItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["titleName", "chenhao", "flag_got", "lock"],
        this.height = 86,
        this.width = 216,
        this.elementsContent = [this._Image1_i(), this.titleName_i(), this.chenhao_i(), this.flag_got_i(), this.lock_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ssa2022_select_pop_select_png")]), new eui.State("disabled", [new eui.SetProperty("lock", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.horizontalCenter = 0,
        t.source = "ssa2022_select_pop_moren_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i.titleName_i = function() {
        var t = new eui.Label;
        return this.titleName = t,
        t.fontFamily = "REEJI",
        t.size = 20,
        t.text = "周年庆|小贵族",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 79,
        t.y = 34,
        t
    },
    i.chenhao_i = function() {
        var t = new eui.Image;
        return this.chenhao = t,
        t.source = "common_achieve_title_icon_png",
        t.visible = !0,
        t.x = 25,
        t.y = 20,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.horizontalCenter = 0,
        t.source = "ssa2022_select_pop_flag_got_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    i.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.horizontalCenter = 0,
        t.source = "ssa2022_select_pop_lock_png",
        t.verticalCenter = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HelpPopSkin.exml"] = window.SpringActivity.HelpPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["a_1", "a_2", "a_3", "a_4", "btnLast", "btnNext", "icon1", "icon2", "icon3", "icon4", "btnClose", "helpPop"],
        this.height = 414,
        this.width = 558,
        this.elementsContent = [this.helpPop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["xuanzhong", "kong1"],
            this.elementsContent = [this.xuanzhong_i(), this.kong1_i()],
            this.states = [new eui.State("cur", [new eui.SetProperty("kong1", "visible", !1)]), new eui.State("notcur", [new eui.SetProperty("xuanzhong", "visible", !1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.xuanzhong_i = function() {
            var t = new eui.Image;
            return this.xuanzhong = t,
            t.source = "ssa2022_help_pop_xuanzhong_png",
            t
        },
        i.kong1_i = function() {
            var t = new eui.Image;
            return this.kong1 = t,
            t.source = "ssa2022_help_pop_kong_png",
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["xuanzhong", "kong1"],
            this.elementsContent = [this.xuanzhong_i(), this.kong1_i()],
            this.states = [new eui.State("cur", [new eui.SetProperty("kong1", "visible", !1)]), new eui.State("notcur", [new eui.SetProperty("xuanzhong", "visible", !1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.xuanzhong_i = function() {
            var t = new eui.Image;
            return this.xuanzhong = t,
            t.source = "ssa2022_help_pop_xuanzhong_png",
            t
        },
        i.kong1_i = function() {
            var t = new eui.Image;
            return this.kong1 = t,
            t.source = "ssa2022_help_pop_kong_png",
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["xuanzhong", "kong1"],
            this.elementsContent = [this.xuanzhong_i(), this.kong1_i()],
            this.states = [new eui.State("cur", [new eui.SetProperty("kong1", "visible", !1)]), new eui.State("notcur", [new eui.SetProperty("xuanzhong", "visible", !1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.xuanzhong_i = function() {
            var t = new eui.Image;
            return this.xuanzhong = t,
            t.source = "ssa2022_help_pop_xuanzhong_png",
            t
        },
        i.kong1_i = function() {
            var t = new eui.Image;
            return this.kong1 = t,
            t.source = "ssa2022_help_pop_kong_png",
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["xuanzhong", "kong1"],
            this.elementsContent = [this.xuanzhong_i(), this.kong1_i()],
            this.states = [new eui.State("cur", [new eui.SetProperty("kong1", "visible", !1)]), new eui.State("notcur", [new eui.SetProperty("xuanzhong", "visible", !1)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.xuanzhong_i = function() {
            var t = new eui.Image;
            return this.xuanzhong = t,
            t.source = "ssa2022_help_pop_xuanzhong_png",
            t
        },
        i.kong1_i = function() {
            var t = new eui.Image;
            return this.kong1 = t,
            t.source = "ssa2022_help_pop_kong_png",
            t
        },
        e
    } (eui.Skin),
    a = e.prototype;
    return a.helpPop_i = function() {
        var t = new eui.Group;
        return this.helpPop = t,
        t.elementsContent = [this._Image1_i(), this.a_1_i(), this.a_2_i(), this.a_3_i(), this.a_4_i(), this.btnLast_i(), this.btnNext_i(), this.icon1_i(), this.icon2_i(), this.icon3_i(), this.icon4_i(), this.btnClose_i(), this._Image2_i()],
        t
    },
    a._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_help_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    a.a_1_i = function() {
        var t = new eui.Image;
        return this.a_1 = t,
        t.height = 261,
        t.source = "ssa2022_help_pop_1_png",
        t.visible = !1,
        t.width = 479,
        t.x = 45,
        t.y = 71,
        t
    },
    a.a_2_i = function() {
        var t = new eui.Image;
        return this.a_2 = t,
        t.height = 252,
        t.source = "ssa2022_help_pop_2_png",
        t.visible = !1,
        t.width = 479,
        t.x = 45,
        t.y = 91,
        t
    },
    a.a_3_i = function() {
        var t = new eui.Image;
        return this.a_3 = t,
        t.height = 252,
        t.source = "ssa2022_help_pop_3_png",
        t.visible = !0,
        t.width = 479,
        t.x = 45,
        t.y = 75,
        t
    },
    a.a_4_i = function() {
        var t = new eui.Image;
        return this.a_4 = t,
        t.height = 252,
        t.source = "ssa2022_help_pop_4_png",
        t.visible = !1,
        t.width = 480,
        t.x = 45,
        t.y = 75,
        t
    },
    a.btnLast_i = function() {
        var t = new eui.Image;
        return this.btnLast = t,
        t.source = "ssa2022_help_pop_shangyiye_png",
        t.x = 78,
        t.y = 345,
        t
    },
    a.btnNext_i = function() {
        var t = new eui.Image;
        return this.btnNext = t,
        t.source = "ssa2022_help_pop_xiayiye_png",
        t.x = 363,
        t.y = 345,
        t
    },
    a.icon1_i = function() {
        var t = new eui.Component;
        return this.icon1 = t,
        t.visible = !0,
        t.x = 222,
        t.y = 358,
        t.skinName = i,
        t
    },
    a.icon2_i = function() {
        var t = new eui.Component;
        return this.icon2 = t,
        t.visible = !0,
        t.x = 254,
        t.y = 358,
        t.skinName = n,
        t
    },
    a.icon3_i = function() {
        var t = new eui.Component;
        return this.icon3 = t,
        t.visible = !0,
        t.x = 286,
        t.y = 358,
        t.skinName = s,
        t
    },
    a.icon4_i = function() {
        var t = new eui.Component;
        return this.icon4 = t,
        t.visible = !0,
        t.x = 318,
        t.y = 358,
        t.skinName = r,
        t
    },
    a.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.visible = !0,
        t.width = 34,
        t.x = 507,
        t.y = 15,
        t
    },
    a._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_help_pop_wfsm_png",
        t.x = 227,
        t.y = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.SpringActivity.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_itemNum", "progress0", "progress1", "progress2", "progress3", "progress4", "hasGet", "btnName", "btn", "grpWelfare", "_taskList", "_scl", "grpTask", "torch1", "torch2", "torch3", "torch4", "torch5", "torch6", "grpAnim1", "grpAnim2", "grpAnim3", "grpAnim4", "grpAnim5", "grpAnim6", "grpTorchs", "chenhao", "titleName", "titleInfo", "btnTitleGet", "grpTitle", "btnSelect", "flag_tomorrow", "grpAchievement", "btnInfo", "acticivityInfo"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.grpWelfare_i(), this.grpTask_i(), this.grpAchievement_i(), this._Image13_i(), this.acticivityInfo_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 32,
        t.y = 5,
        t.elementsContent = [this._Image2_i(), this.txt_itemNum_i(), this._Image3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "ssa2022_main_panel_countbg_png",
        t.width = 133,
        t.x = 16,
        t.y = 10,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 6,
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.y = 12,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 38,
        t.source = "ssa2022_main_panel_itemIcon_png",
        t.width = 36,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpWelfare_i = function() {
        var t = new eui.Group;
        return this.grpWelfare = t,
        t.horizontalCenter = 357.5,
        t.y = 480,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this.progress0_i(), this.progress1_i(), this.progress2_i(), this.progress3_i(), this.progress4_i(), this._Image6_i(), this._Image7_i(), this.hasGet_i(), this._Image8_i(), this.btn_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_welfarebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_jx_319_kb_4_png",
        t.visible = !0,
        t.x = 9,
        t.y = 104,
        t
    },
    i.progress0_i = function() {
        var t = new eui.Image;
        return this.progress0 = t,
        t.source = "ssa2022_main_panel_jx_329_kb_14_png",
        t.visible = !0,
        t.x = 12,
        t.y = 107,
        t
    },
    i.progress1_i = function() {
        var t = new eui.Image;
        return this.progress1 = t,
        t.source = "ssa2022_main_panel_jx_329_kb_14_png",
        t.visible = !0,
        t.x = 64,
        t.y = 107,
        t
    },
    i.progress2_i = function() {
        var t = new eui.Image;
        return this.progress2 = t,
        t.source = "ssa2022_main_panel_jx_329_kb_14_png",
        t.visible = !0,
        t.x = 116,
        t.y = 107,
        t
    },
    i.progress3_i = function() {
        var t = new eui.Image;
        return this.progress3 = t,
        t.source = "ssa2022_main_panel_jx_329_kb_14_png",
        t.visible = !0,
        t.x = 169,
        t.y = 107,
        t
    },
    i.progress4_i = function() {
        var t = new eui.Image;
        return this.progress4 = t,
        t.source = "ssa2022_main_panel_jx_329_kb_14_png",
        t.visible = !0,
        t.x = 221,
        t.y = 107,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_iconbg_png",
        t.visible = !0,
        t.x = 276,
        t.y = 8,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_icon_png",
        t.visible = !0,
        t.x = 264,
        t.y = 0,
        t
    },
    i.hasGet_i = function() {
        var t = new eui.Image;
        return this.hasGet = t,
        t.source = "ssa2022_main_panel_yiguoji_png",
        t.visible = !0,
        t.x = 277,
        t.y = 9,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 94,
        t.source = "ssa2022_main_panel_info_png",
        t.visible = !0,
        t.width = 265,
        t.x = 8,
        t.y = 8,
        t
    },
    i.btn_i = function() {
        var t = new eui.Group;
        return this.btn = t,
        t.visible = !0,
        t.x = 274,
        t.y = 84,
        t.elementsContent = [this._Image9_i(), this.btnName_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_juxing_321_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnName_i = function() {
        var t = new eui.Label;
        return this.btnName = t,
        t.fontFamily = "REEJI",
        t.size = 16,
        t.text = "兑换",
        t.textColor = 5978917,
        t.x = 22,
        t.y = 13,
        t
    },
    i.grpTask_i = function() {
        var t = new eui.Group;
        return this.grpTask = t,
        t.horizontalCenter = 356,
        t.y = 42,
        t.elementsContent = [this._Image10_i(), this._Label1_i(), this._scl_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_taskbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "上滑查看更多",
        t.textColor = 16776957,
        t.visible = !0,
        t.width = 16,
        t.x = 331,
        t.y = 189,
        t
    },
    i._scl_i = function() {
        var t = new eui.Scroller;
        return this._scl = t,
        t.height = 380,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 308,
        t.x = 13,
        t.y = 39,
        t.viewport = this._taskList_i(),
        t
    },
    i._taskList_i = function() {
        var t = new eui.Group;
        return this._taskList = t,
        t
    },
    i.grpAchievement_i = function() {
        var t = new eui.Group;
        return this.grpAchievement = t,
        t.horizontalCenter = -81,
        t.visible = !0,
        t.y = 149,
        t.elementsContent = [this._Image11_i(), this.grpTorchs_i(), this.grpTitle_i(), this.btnSelect_i(), this.flag_tomorrow_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_achievementbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpTorchs_i = function() {
        var t = new eui.Group;
        return this.grpTorchs = t,
        t.visible = !0,
        t.x = 20,
        t.y = 28,
        t.elementsContent = [this.torch1_i(), this.torch2_i(), this.torch3_i(), this.torch4_i(), this.torch5_i(), this.torch6_i(), this.grpAnim1_i(), this.grpAnim2_i(), this.grpAnim3_i(), this.grpAnim4_i(), this.grpAnim5_i(), this.grpAnim6_i()],
        t
    },
    i.torch1_i = function() {
        var t = new eui.Image;
        return this.torch1 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.torch2_i = function() {
        var t = new eui.Image;
        return this.torch2 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 158,
        t.y = 0,
        t
    },
    i.torch3_i = function() {
        var t = new eui.Image;
        return this.torch3 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 316,
        t.y = 0,
        t
    },
    i.torch4_i = function() {
        var t = new eui.Image;
        return this.torch4 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 0,
        t.y = 272,
        t
    },
    i.torch5_i = function() {
        var t = new eui.Image;
        return this.torch5 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 158,
        t.y = 272,
        t
    },
    i.torch6_i = function() {
        var t = new eui.Image;
        return this.torch6 = t,
        t.source = "ssa2022_main_panel_zu_71_png",
        t.x = 316,
        t.y = 272,
        t
    },
    i.grpAnim1_i = function() {
        var t = new eui.Group;
        return this.grpAnim1 = t,
        t.x = 58,
        t.y = 29,
        t
    },
    i.grpAnim2_i = function() {
        var t = new eui.Group;
        return this.grpAnim2 = t,
        t.x = 216,
        t.y = 29,
        t
    },
    i.grpAnim3_i = function() {
        var t = new eui.Group;
        return this.grpAnim3 = t,
        t.x = 374,
        t.y = 29,
        t
    },
    i.grpAnim4_i = function() {
        var t = new eui.Group;
        return this.grpAnim4 = t,
        t.x = 58,
        t.y = 301,
        t
    },
    i.grpAnim5_i = function() {
        var t = new eui.Group;
        return this.grpAnim5 = t,
        t.x = 216,
        t.y = 301,
        t
    },
    i.grpAnim6_i = function() {
        var t = new eui.Group;
        return this.grpAnim6 = t,
        t.x = 374,
        t.y = 301,
        t
    },
    i.grpTitle_i = function() {
        var t = new eui.Group;
        return this.grpTitle = t,
        t.visible = !0,
        t.x = 68,
        t.y = 161,
        t.elementsContent = [this._Image12_i(), this.chenhao_i(), this.titleName_i(), this.titleInfo_i(), this.btnTitleGet_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_achievementtitlebg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.chenhao_i = function() {
        var t = new eui.Image;
        return this.chenhao = t,
        t.source = "common_achieve_title_icon_png",
        t.visible = !0,
        t.x = 32,
        t.y = 27,
        t
    },
    i.titleName_i = function() {
        var t = new eui.Label;
        return this.titleName = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 46,
        t.size = 20,
        t.text = "称号名称号名",
        t.textColor = 16775648,
        t.visible = !0,
        t.y = 9,
        t
    },
    i.titleInfo_i = function() {
        var t = new eui.Image;
        return this.titleInfo = t,
        t.source = "ssa2022_main_panel_wenzi_png",
        t.visible = !0,
        t.x = 110,
        t.y = 38,
        t
    },
    i.btnTitleGet_i = function() {
        var t = new eui.Image;
        return this.btnTitleGet = t,
        t.source = "ssa2022_main_panel_btntitleget_png",
        t.visible = !1,
        t.x = 167,
        t.y = 41,
        t
    },
    i.btnSelect_i = function() {
        var t = new eui.Image;
        return this.btnSelect = t,
        t.source = "ssa2022_main_panel_btnselect_png",
        t.visible = !1,
        t.x = 105,
        t.y = 148,
        t
    },
    i.flag_tomorrow_i = function() {
        var t = new eui.Image;
        return this.flag_tomorrow = t,
        t.height = 124,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "ssa2022_main_panel_flag_tomorrow_png",
        t.visible = !1,
        t.width = 261,
        t.x = 106,
        t.y = 148.00000000000006,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -109.5,
        t.source = "ssa2022_main_panel_title_png",
        t.y = 0,
        t
    },
    i.acticivityInfo_i = function() {
        var t = new eui.Group;
        return this.acticivityInfo = t,
        t.horizontalCenter = -78.5,
        t.width = 473,
        t.y = 573,
        t.elementsContent = [this._Image14_i(), this.btnInfo_i(), this._Label2_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_acticivityinfoinfobg_png",
        t.x = 0,
        t.y = 5,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "ssa2022_main_panel_btninfo_png",
        t.x = 381,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "活动时间：1月28日-2月10日",
        t.textColor = 16777215,
        t.x = 7,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SelectPopSkin.exml"] = window.SpringActivity.SelectPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scrol", "btnComfirm"],
        this.height = 414,
        this.width = 892,
        this.elementsContent = [this._Image1_i(), this._scrol_i(), this._Label1_i(), this._Label2_i(), this._Image2_i(), this.btnComfirm_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_select_pop_selectpopbg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._scrol_i = function() {
        var t = new eui.Scroller;
        return this._scrol = t,
        t.height = 276,
        t.scrollPolicyV = "off",
        t.width = 873,
        t.x = 7,
        t.y = 48,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 2,
        t.orientation = "columns",
        t.verticalGap = 9,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "点击称号图标可查看其特殊加成",
        t.textColor = 10459514,
        t.x = 641,
        t.y = 22,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2月4日更新后将追加开放21个称号！",
        t.textColor = 14211237,
        t.x = 302,
        t.y = 20,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_select_pop_yhckgd_png",
        t.x = 679,
        t.y = 342,
        t
    },
    i.btnComfirm_i = function() {
        var t = new eui.Image;
        return this.btnComfirm = t,
        t.source = "ssa2022_select_pop_btncomfirm_png",
        t.x = 379,
        t.y = 338,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SpringAvtivity2022TaskChildItemSkin.exml"] = window.SpringAvtivity2022TaskChildItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_num", "txtTask", "flag_got", "btnGet", "flag_not"],
        this.height = 40,
        this.width = 293,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_num_i(), this.txtTask_i(), this.flag_got_i(), this.btnGet_i(), this.flag_not_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "ssa2022_main_panel_juxing_323_png",
        t.visible = !0,
        t.width = 293,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "ssa2022_child_item_iconbg_png",
        t.width = 28,
        t.x = 188,
        t.y = 4,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "ssa2022_main_panel_itemIcon_png",
        t.width = 18,
        t.x = 194,
        t.y = 7,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 12,
        t.source = "ssa2022_child_item_numbg_png",
        t.width = 28,
        t.x = 188,
        t.y = 25,
        t
    },
    i.txt_num_i = function() {
        var t = new eui.Label;
        return this.txt_num = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 55,
        t.size = 14,
        t.text = "80",
        t.textColor = 16777215,
        t.y = 26,
        t
    },
    i.txtTask_i = function() {
        var t = new eui.Label;
        return this.txtTask = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "通关1次",
        t.textColor = 16774328,
        t.x = 10,
        t.y = 12,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.source = "ssa2022_main_panel_yilingqu_png",
        t.visible = !0,
        t.x = 225,
        t.y = 5,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "ssa2022_main_panel_btngettask_png",
        t.visible = !0,
        t.x = 219,
        t.y = 0,
        t
    },
    i.flag_not_i = function() {
        var t = new eui.Image;
        return this.flag_not = t,
        t.source = "ssa2022_main_panel_weidadao_png",
        t.visible = !0,
        t.x = 225,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SpringAvtivity2022TaskItemSkin.exml"] = window.SpringAvtivity2022TaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtOverTime", "overTime", "taskName", "btnHelp", "btnGo", "taskSelect"],
        this.currentState = "up",
        this.height = 57,
        this.width = 308,
        this.elementsContent = [this.taskSelect_i()],
        this.btnHelp_i(),
        this.btnGo_i(),
        this.states = [new eui.State("down", [new eui.AddItems("btnHelp", "taskSelect", 1, ""), new eui.AddItems("btnGo", "taskSelect", 1, ""), new eui.SetProperty("taskName", "left", 15)]), new eui.State("up", [new eui.SetProperty("overTime", "visible", !1), new eui.SetProperty("taskName", "y", 17), new eui.SetProperty("taskName", "textAlign", "center"), new eui.SetProperty("taskName", "horizontalCenter", 0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.taskSelect_i = function() {
        var t = new eui.Group;
        return this.taskSelect = t,
        t.elementsContent = [this._Image1_i(), this.overTime_i(), this.taskName_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 58,
        t.source = "ssa2022_main_panel_1_png",
        t.width = 308,
        t.x = 0,
        t.y = 0,
        t
    },
    i.overTime_i = function() {
        var t = new eui.Group;
        return this.overTime = t,
        t.x = 17,
        t.y = 31,
        t.elementsContent = [this._Image2_i(), this.txtOverTime_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ssa2022_main_panel_juxing_328_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtOverTime_i = function() {
        var t = new eui.Label;
        return this.txtOverTime = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "已通关10次",
        t.textColor = 16777215,
        t.y = 2,
        t
    },
    i.taskName_i = function() {
        var t = new eui.Label;
        return this.taskName = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "六界神王殿",
        t.textAlign = "left",
        t.textColor = 5978917,
        t.x = 15,
        t.y = 8,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 20,
        t.source = "ssa2022_main_panel_btnHelp_png",
        t.visible = !0,
        t.width = 20,
        t.x = 133,
        t.y = 9,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "ssa2022_main_panel_btngo_png",
        t.visible = !0,
        t.x = 254,
        t.y = 5,
        t
    },
    e
} (eui.Skin);