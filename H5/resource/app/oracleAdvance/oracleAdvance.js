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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            if (n.isOutTime = !1, n.getInfo(14), i) {
                if (n.isOutTime || ~~i != ~~t.DataConst.CurrentPetID) return Alarm.show("不在活动时间范围内",
                function() {
                    n.onClose(),
                    EventManager.dispatchEventWith("ActivityCenterClose")
                }),
                n;
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "从精灵特性进入伙伴效果界面")
            } else StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击活动中心页签进入活动界面");
            return StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "进入活动界面（全部）"),
            n.init([{
                panelName: t.DataConst.MAIN_PANEL,
                isMain: !0
            },
            {
                panelName: t.DataConst.BATTLE_PANEL
            }]),
            n
        }
        return __extends(i, e),
        i.prototype.getInfo = function(e) {
            t.DataConst.TaskInfo = PetAdvanceXMLInfo.getTaskInfo(e);
            for (var i, n = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("advancedPetPanelConfig")).root.Task, a = 0; a < n.length; a++) if (n[a].ID == e) {
                i = n[a];
                break
            }
            var o = core.manager.XMLConfigManger.getInstance().getRes(ClientConfig.getJSONConfig("activityTimeControl")).config.item;
            o = o.reverse();
            for (var a = 0; a < o.length && (!t.DataConst.PayTime || !t.DataConst.FreeTime); a++) o[a].id != i.MainPanel.PayTime.Id ? o[a].id != i.MainPanel.FreeTime.Id || (t.DataConst.FreeTime = o[a]) : t.DataConst.PayTime = o[a];
            var r = t.DataConst.PayTime.endTime.toString(),
            s = r.slice(0, 4) + "-" + r.slice(4, 6) + "-" + r.slice(6, 8) + " 23:59:59",
            _ = new Date(s),
            u = SystemTimerManager.sysBJDate.getTime();
            this.isOutTime = u > _.getTime(),
            t.DataConst.CurrentPetID = t.DataConst.TaskInfo.Advances.MonsterId
        },
        i.prototype.reShow = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.destroyed
            })
        },
        i
    } (BasicMultPanelModule);
    t.OracleAdvance = e,
    __reflect(e.prototype, "oracleAdvance.OracleAdvance")
} (oracleAdvance || (oracleAdvance = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
oracleAdvance; !
function(t) {
    var e = function() {
        function t() {}
        return Object.defineProperty(t, "StateName", {
            get: function() {
                return "" == t._stateName && (t._stateName = PetXMLInfo.getName(this.CurrentPetID)),
                t._stateName
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "StateDate", {
            get: function() {
                return "20231124版本系统功能"
            },
            enumerable: !0,
            configurable: !0
        }),
        t.MAIN_PANEL = "oracleAdvance.MainPanel",
        t.BATTLE_PANEL = "oracleAdvance.Battlepanel",
        t.MAIN_CMD = 41803,
        t.CHECK_CMD = 41805,
        t._stateName = "",
        t
    } ();
    t.DataConst = e,
    __reflect(e.prototype, "oracleAdvance.DataConst")
} (oracleAdvance || (oracleAdvance = {}));
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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.exclusiveItem = 0,
            i.curProgess = 0,
            i.curTimes = 0,
            i.AnimTEST = !1,
            i.iconNames = ["鬼幽之冠", "遗忘之骸", "梦语之袖", "惑心之翼"],
            i.iconNameColor = 8277664,
            i.skinName = "oracleAdvance.BattlepanelSkin",
            i.sumProgress = t.DataConst.TaskInfo.AllProgress,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            GameInfo.isChecking && (this.btnadd2.visible = !1),
            e.prototype.initBtnClose.call(this, "oa_battlepanel_title_png", this,
            function() {
                i.service.backToMainPanel(),
                EventManager.dispatchEventWith("showActivityCenterLeft")
            },
            this),
            e.prototype.initBtnHelpById.call(this, 115, this,
            function() {
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击战斗玩法界面-【问号】按钮")
            }),
            this.addEvent(),
            this.imgDiamond.source = ClientConfig.getItemIcon(5),
            this.iconCoin2.source = this.icon3.source = ClientConfig.getItemIcon(1724858);
            for (var n = 0; n < this.iconNames.length; n++) this["txtIcon" + (n + 1)].text = this.iconNames[n],
            this["txtIcon" + (n + 1)].strokeColor = this.iconNameColor;
            this.oracleAnim = SpineUtil.createAnimate("shenyujinjie"),
            this.addChild(this.oracleAnim),
            this.oracleAnim.touchEnabled = !1,
            this.oracleAnim.touchChildren = !1,
            this.oracleAnim.x = 0,
            this.oracleAnim.y = 0,
            this.oracleAnim.visible = !1,
            4 == this.sumProgress ? this.currentState = "itemNum4": 5 == this.sumProgress && (this.currentState = "itemNum5")
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnadd1,
            function() {
                var i = t.DataConst.TaskInfo.Exchange.ProductID.split("_");
                t.DataConst.TaskInfo.Exchange.ItemID.split("_");
                PayManager.doPayFunc(function() {
                    var n = {};
                    n.type = "product_diamond",
                    n.ins = {
                        iconID: 1724858,
                        productID: i[2]
                    },
                    n.caller = e,
                    n.callBack = function(n, a) {
                        KTool.buyProductByCallback(parseFloat(i[2]), a,
                        function() {
                            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, a + 1e5],
                            function() {
                                e.update(),
                                Alarm.show("获得了" + a + "个专属神谕之证",
                                function() {
                                    e.update()
                                })
                            })
                        })
                    },
                    ModuleManager.showModuleByID(1, n)
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnadd2,
            function() {
                PayManager.rechargeDiamond()
            },
            this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                if (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击战斗玩法界面-【进入试炼】按钮"), e.curTimes >= 5) return void BubblerManager.getInstance().showText("剩余挑战次数不足，请明天再进行试炼！");
                var i = new t.BattlePop;
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.btnUnlock,
            function() {
                return e.AnimTEST ? (e.oracleAnim.visible = !0, void e.oracleAnim.play("jiesuo", 1, 1)) : (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击战斗玩法界面-【解锁组件】按钮"), e.exclusiveItem < t.DataConst.TaskInfo.PerCostCoinA ? void BubblerManager.getInstance().showText("专属神谕之证数量不足，参与试炼可以获得道具") : (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "在H5解锁组件"), void e.animPlay(e.curProgess,
                function() {
                    SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 1],
                    function() {
                        e.update()
                    })
                })))
            },
            this),
            ImageButtonUtil.add(this.btnyijian,
            function() {
                return e.AnimTEST ? void e.animPlay(e.curProgess,
                function() {
                    e.curProgess++
                }) : (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击战斗玩法界面-【一键解锁】按钮"), void PayManager.doPayFunc(function() {
                    var i = t.DataConst.TaskInfo.Exchange.ProductID.split("_");
                    KTool.buyProductByCallback(~~i[1], 1,
                    function() {
                        e.animPlay(e.curProgess,
                        function() {
                            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 3],
                            function() {
                                e.update()
                            })
                        })
                    })
                },
                e))
            },
            this),
            ImageButtonUtil.add(this.hasDone,
            function() {
                if (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击战斗玩法界面-【完成进阶】按钮"), !PetManager.isDefaultPet(t.DataConst.CurrentPetID)) {
                    StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "操作进阶时背包首发不是目标精灵");
                    var i = "请将<font color='#ff0000'>" + PetXMLInfo.getName(t.DataConst.CurrentPetID) + "</font>放于背包首发位置";
                    return void Alarm.show(i,
                    function() {
                        e.service.showPetBag()
                    })
                }
                PetManager.checkPetInfoEffect(PetManager.infos[0],
                function(i) {
                    return i && 0 != PetManager.infos[0].effectCount && PetManager.infos[0].hideSKill ? (StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "在H5完成进阶"), void SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 6],
                    function() {
                        e.update();
                        var i = "经过你们的努力<font color='#ff0000'>" + PetXMLInfo.getName(t.DataConst.CurrentPetID) + "</font>已完成进阶！可以前往背包查看进阶效果！";
                        Alert.show(i,
                        function() {
                            e.service.showPetBag()
                        })
                    })) : void Alert.show("需要拥有专属特性和第五技能才可以进阶\n是否立刻前往获得？",
                    function() {
                        ModuleManager.showModuleByID(15, {
                            type: "7",
                            petId: "" + t.DataConst.CurrentPetID
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.imgDiamond,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK,
            function() {
                FightManager.isWin ? KTool.getMultiValue([t.DataConst.TaskInfo.OutItemKey],
                function(t) {
                    var i = t[0] - e.exclusiveItem;
                    Alarm.show("获得了" + i + "个专属神谕之证",
                    function() {
                        e.update()
                    })
                }) : e.update()
            },
            this)
        },
        i.prototype.animPlay = function(t, e) {
            var i = this;
            if (this.oracleAnim.visible = !0, t < this.sumProgress - 1) this.oracleAnim.x = this["item" + (t + 1)].x,
            this.oracleAnim.y = this["item" + (t + 1)].y,
            this.oracleAnim.play("jiesuo", 1, 1, {
                playEnd: function() {
                    e(),
                    i.oracleAnim.visible = !1
                }
            });
            else {
                for (var n = 1; n <= this.sumProgress; n++) this["unlock" + n].visible = !1;
                this.oracleAnim.x = egret.lifecycle.stage.stageWidth / 2,
                this.oracleAnim.y = 320,
                this.btnUnlock.visible = this.btnyijian.visible = !1,
                this.oracleAnim.play("hebing", 1, 1, {
                    playEnd: function() {
                        e(),
                        i.oracleAnim.visible = !1
                    }
                })
            }
        },
        i.prototype.update = function() {
            var e = this;
            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 7],
            function(t) {
                var i = t.data;
                e.curProgess = i.readUnsignedInt();
                for (var n = i.readUnsignedInt(), a = 1; a <= e.sumProgress; a++) e["unlock" + a].visible = e.curProgess < a;
                e.hasDone.visible = e.curProgess == e.sumProgress,
                e.grp_notDone.visible = e.curProgess != e.sumProgress,
                e.imghasDone.visible = 0 != n,
                DisplayUtil.setEnabled(e.hasDone, 0 == n, 0 != n)
            }),
            KTool.getMultiValue([t.DataConst.TaskInfo.OutItemKey, t.DataConst.TaskInfo.Battle.FreeBattleKey],
            function(i) {
                e.txtCoin1.text = i[0].toString(),
                e.exclusiveItem = i[0],
                e.txt_needNum.text = i[0] + "/" + t.DataConst.TaskInfo.PerCostCoinA;
                var n = i[0] < t.DataConst.TaskInfo.PerCostCoinA ? 16400448 : 2871323;
                e.txt_needNum.textFlow = [{
                    text: i[0] + "",
                    style: {
                        textColor: n
                    }
                },
                {
                    text: "/" + t.DataConst.TaskInfo.PerCostCoinA,
                    style: {
                        textColor: 16777215
                    }
                }],
                e.curTimes = i[1],
                e.txt_leftTime.text = 5 - i[1] + ""
            }),
            UserInfoManager.getDiamond(function(t) {
                e.txtCoin2.text = core.gameUtil.ConvertItemNumView(t)
            },
            this)
        },
        i
    } (BasicPanel);
    t.Battlepanel = e,
    __reflect(e.prototype, "oracleAdvance.Battlepanel")
} (oracleAdvance || (oracleAdvance = {}));
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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.normalId = 1724859,
            i.itemNum = 0,
            i.skinName = t.MainpanelSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initData(),
            this.icon.$renderNode.drawData
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击主界面-【前往获取精灵】按钮"),
                ModuleManager.showModuleByID(144, {
                    panelName: "MALL",
                    mallMenu: 1
                })
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击主界面-【问号】按钮"),
                tipsPop.TipsPop.openHelpPopById(115)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                e.service.openPanel(t.DataConst.BATTLE_PANEL),
                EventManager.dispatchEventWith("hideActivityCenterLeft")
            },
            this),
            ImageButtonUtil.add(this.btnFastAdvanced,
            function() {
                if (!PetManager.isDefaultPet(t.DataConst.CurrentPetID)) return StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "操作进阶时背包首发不是目标精灵"),
                void Alarm.show("请将<font color='#ff0000'>" + PetXMLInfo.getName(t.DataConst.CurrentPetID) + "</font>放于背包首发位置",
                function() {
                    e.service.showPetBag()
                });
                if (e.curProgress == t.DataConst.TaskInfo.AllProgress && e.isFreeweek) return void Alarm.show(PetXMLInfo.getName(t.DataConst.CurrentPetID) + "已解锁全部组件，可以前往强化，不需要购买进阶！",
                function() {});
                var i = t.DataConst.TaskInfo.Exchange.ProductID.split("_");
                PayManager.doPayFunc(function() {
                    KTool.buyProductByCallback(~~i[0], 1,
                    function() {
                        SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 2],
                        function() {
                            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 6],
                            function() {
                                var i = "<font color='#ff0000'>" + PetXMLInfo.getName(t.DataConst.CurrentPetID) + "</font>已成功快速进阶，可以前往背包查看进阶效果！";
                                Alarm.show(i,
                                function() {
                                    e.service.showPetBag()
                                }),
                                e.update()
                            })
                        })
                    })
                },
                e)
            },
            this),
            ImageButtonUtil.add(this.btnExchange,
            function() {
                return StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击主界面-【兑换神谕之证】按钮"),
                e.itemNum <= 0 ? void BubblerManager.getInstance().showText("专属神谕之证数量不足，无法兑换！") : void SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 8],
                function() {
                    e.update()
                })
            },
            this),
            ImageButtonUtil.add(this.zhongzu,
            function() {
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击主界面-【种族值详情】");
                var e = new t.InfoPop1;
                PopViewManager.getInstance().openView(e)
            },
            this),
            ImageButtonUtil.add(this.texing,
            function() {
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "点击主界面-【特性详情】");
                var e = new t.InfoPop2;
                PopViewManager.getInstance().openView(e)
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["skillItem_" + (t + 1)],
                function() {
                    var i = {
                        id: e.skillData[t],
                        petInfo: null
                    },
                    n = {};
                    n.dir = "right-top",
                    n.rx = -10,
                    n.ry = 10,
                    n.srcWorldPos = e.parent.parent.parent.localToGlobal(),
                    tipsPop.TipsPop.openSkillPop(i, n)
                },
                n)
            },
            n = this, a = 0; 4 > a; a++) i(a)
        },
        i.prototype.initData = function() {
            this.icon.source = ClientConfig.getItemIcon(1724858),
            this.skillData = PetAdvanceXMLInfo.getAdvanceSkill(t.DataConst.CurrentPetID);
            var e = PetAdvanceXMLInfo.getAdvanceFifthSkill(t.DataConst.CurrentPetID);
            e.length > 0 && (A = this.skillData).push.apply(A, e);
            var i = t.DataConst.FreeTime.startTime.toString(),
            n = t.DataConst.FreeTime.endTime.toString(),
            a = i.slice(0, 4) + "/" + i.slice(4, 6) + "/" + i.slice(6, 8) + " 00:00:00",
            o = n.slice(0, 4) + "/" + n.slice(4, 6) + "/" + n.slice(6, 8) + " 00:00:00",
            r = t.DataConst.PayTime.startTime.toString(),
            s = t.DataConst.PayTime.endTime.toString(),
            _ = r.slice(0, 4) + "/" + r.slice(4, 6) + "/" + r.slice(6, 8) + " 00:00:00",
            u = s.slice(0, 4) + "/" + s.slice(4, 6) + "/" + s.slice(6, 8) + " 23:59:59",
            l = new Date(a),
            c = new Date(o),
            h = new Date(_),
            g = new Date(u),
            p = SystemTimerManager.sysBJDate.getTime();
            this.isFreeweek = p > l.getTime() && p < h.getTime(),
            this.txt_tid1.text = l.getMonth() + 1 + "月" + l.getDate() + "日-" + (c.getMonth() + 1) + "月" + c.getDate() + "日",
            this.txt_tid1_info.textFlow = [{
                text: "参与试炼可以",
                style: {
                    textColor: 16777215
                }
            },
            {
                text: "免费进阶",
                style: {
                    textColor: 16761417
                }
            }],
            this.txt_tid2.text = h.getMonth() + 1 + "月" + h.getDate() + "日-" + (g.getMonth() + 1) + "月" + g.getDate() + "日";
            var m = p > g.getTime();
            DisplayUtil.setEnabled(this.btnExchange, !m, m);
            for (var f = PetAdvanceXMLInfo.getOldRace(t.DataConst.CurrentPetID), x = PetAdvanceXMLInfo.getAdvanceRace(t.DataConst.CurrentPetID), d = 0, v = 0, I = 0; I < f.length; I++) v += ~~x[I],
            d += ~~f[I];
            this.txt_oldRace.text = d + "",
            this.txt_newRace.text = v + "",
            this.skillData.length <= 2 ? (this.skillbg.source = "oa_mainpanel_juxing_530_png", this.skillItem_3.visible = this.skillItem_4.visible = !1, this.skillItem_1.y = this.skillItem_2.y = 50) : (this.skillbg.source = "oa_mainpanel_skillbg_png", this.skillItem_3.visible = this.skillItem_4.visible = !0, this.skillItem_1.y = this.skillItem_2.y = 35);
            for (var y = PetXMLInfo.getCanLearnAdvSkillTagList(t.DataConst.CurrentPetID), I = 0; 4 > I; I++) if (I < this.skillData.length) {
                this["skillItem_" + (I + 1)].visible = !0;
                var C = this.skillData[I],
                b = SkillXMLInfo.getTypeID(C),
                w = (SkillXMLInfo.isHideSkillId(t.DataConst.CurrentPetID, C), "");
                w = 4 == SkillXMLInfo.getCategory(C) ? ClientConfig.getpettypeticon("prop") : ClientConfig.getpettypeticon(String(b));
                var D = I < y.length ? 2 + y[I] : 1;
                this["skillTag_" + (I + 1)].source = "common_petSkill_tag" + D + "_png",
                this["prop_" + (I + 1)].source = w,
                this["txt_skillName_" + (I + 1)].text = SkillXMLInfo.getName(C),
                this["txt_damage_" + (I + 1)].text = "威力：" + SkillXMLInfo.getDamage(C).toString();
                var k = SkillXMLInfo.getPP(C).toString();
                this["txt_pp_" + (I + 1)].text = "PP：" + k + "/" + k
            } else this["skillItem_" + (I + 1)].visible = !1;
            var S = EffectIconControl.getAllEffctByPetId(t.DataConst.CurrentPetID),
            P = S[S.length - 1];
            this.groupTag.removeChildren();
            var M = P.kind;
            if (null != M) {
                var F = M.toString().split(" ").map(Number);
                for (var I in F) {
                    var L = new eui.Image("pet_bag_tag" + (F[I] + 1) + "_png");
                    this.groupTag.addChild(L)
                }
            }
            this.update();
            var A
        }, i.prototype.update = function() {
            var e = this;
            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 7],
            function(t) {
                var i = t.data;
                e.curProgress = i.readUnsignedInt();
                var n = i.readUnsignedInt();
                e.hasDone.visible = 0 != n,
                DisplayUtil.setEnabled(e.btnFastAdvanced, 0 == n, 0 != n)
            }),
            this.txt.visible = !this.isFreeweek,
            this.btnExchange.visible = !this.isFreeweek,
            this.btnGo.visible = this.isFreeweek,
            KTool.getMultiValue([t.DataConst.TaskInfo.OutItemKey],
            function(t) {
                e.itemNum = t[0],
                e.txtLeft.text = e.itemNum + ""
            })
        },
        i
    } (BasicPanel);
    t.MainPanel = e,
    __reflect(e.prototype, "oracleAdvance.MainPanel")
} (oracleAdvance || (oracleAdvance = {}));
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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BattlepopSkin,
            i.addEvent(),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initialized = function() {
            var e = this;
            this.txt_petChanllenge.textFlow = [{
                text: "使用",
                style: {
                    textColor: 4173823
                }
            },
            {
                text: PetXMLInfo.getName(t.DataConst.CurrentPetID),
                style: {
                    textColor: 16769343
                }
            },
            {
                text: "战胜对手",
                style: {
                    textColor: 4173823
                }
            }],
            SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 4],
            function(t) {
                var i = t.data;
                i.readUnsignedByte();
                e.bossIndex = i.readUnsignedByte(),
                e.update()
            })
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (e.hide(), !PetManager.isDefaultPet(t.DataConst.CurrentPetID)) {
                    StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "选择进入战斗时背包首发不是目标精灵");
                    var i = "请将<font color='#ff0000'>" + PetXMLInfo.getName(t.DataConst.CurrentPetID) + "</font>放于背包首发位置";
                    return void Alert.show(i,
                    function() {
                        ModuleManager.showModuleByID(10)
                    })
                }
                StatLogger.log(t.DataConst.StateDate, "神谕进阶·" + t.DataConst.StateName + "H5", "在H5进入战斗"),
                SocketConnection.sendByQueue(t.DataConst.MAIN_CMD, [t.DataConst.TaskInfo.ID, 5],
                function(t) {})
            },
            this),
            ImageButtonUtil.add(this.btnBag,
            function() {
                e.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnDraw,
            function() {},
            this)
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([t.DataConst.TaskInfo.Battle.FreeBattleKey, t.DataConst.TaskInfo.Battle.FreeBattleKey - 10],
            function(i) {
                if (e.hasDraw = 0 != i[1], e.btnDraw.visible = !e.hasDraw, e.btnFight.visible = e.hasDraw, e.bossIndex) {
                    var n = t.DataConst.TaskInfo.Battle.Task[e.bossIndex - 1];
                    e.petHead.source = ClientConfig.getPetHeadPath(n.BattleBoss);
                    var a = (new egret.HtmlTextParser).parse(n.Desc);
                    "string" == typeof a ? e.txtDec.text = a: e.txtDec.textFlow = a
                }
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.BattlePop = e,
    __reflect(e.prototype, "oracleAdvance.BattlePop")
} (oracleAdvance || (oracleAdvance = {}));
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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Infopop1Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.initialized = function() {
            for (var e = PetAdvanceXMLInfo.getOldRace(t.DataConst.CurrentPetID), i = PetAdvanceXMLInfo.getAdvanceRace(t.DataConst.CurrentPetID), n = 0, a = 0, o = 0; o < e.length; o++) this["txt" + o + "_be"].text = e[o],
            this["txt" + o + "_af"].text = i[o],
            this["txt" + o + "_dif"].text = ~~i[o] - ~~e[o],
            a += ~~i[o],
            n += ~~e[o],
            ~~i[o] == ~~e[o] && (this["txt" + o + "_dif"].visible = !1, this["imgUp" + o].visible = !1);
            this.txt_oldRace.text = n + "",
            this.txt_newRace.text = a + "",
            this.txt_advanceRace.text = a - n + "",
            "" == this.pet.source && (this.pet.source = ClientConfig.getPetHalfIcon(t.DataConst.CurrentPetID))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.InfoPop1 = e,
    __reflect(e.prototype, "oracleAdvance.InfoPop1")
} (oracleAdvance || (oracleAdvance = {}));
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
oracleAdvance; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.Infopop2Skin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.initialized = function() {
            "" == this.pet.source && (this.pet.source = ClientConfig.getPetHalfIcon(t.DataConst.CurrentPetID));
            var e = (new egret.HtmlTextParser).parse(EffectIconControl.getAllEffctByPetId(t.DataConst.CurrentPetID)[0].tips);
            if ("string" == typeof e) this.txt_beforeTe.text = e;
            else {
                var i = /[\{-\}-\|]/g,
                n = e[0].text.replace(i, "");
                e[0].text = n,
                this.txt_beforeTe.textFlow = e
            }
            var a = (new egret.HtmlTextParser).parse(t.DataConst.TaskInfo.Advances.AdvEffect.Des);
            "string" == typeof a ? this.txt_afterTe.text = a: this.txt_afterTe.textFlow = a
        },
        i
    } (PopView);
    t.InfoPop2 = e,
    __reflect(e.prototype, "oracleAdvance.InfoPop2")
} (oracleAdvance || (oracleAdvance = {})),
window.oracleAdvance = window.oracleAdvance || {};
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
generateEUI.paths["resource/eui_skins/BattlepanelSkin.exml"] = window.oracleAdvance.BattlepanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "unlock1", "txtIcon1", "item1", "unlock2", "txtIcon2", "item2", "unlock3", "txtIcon3", "item3", "unlock4", "txtIcon4", "item4", "unlock5", "txtIcon5", "item5", "hasDone", "imghasDone", "txt_needNum", "icon3", "btnUnlock", "btnyijian", "grp_notDone", "txtCoin2", "txtCoin1", "imgDiamond", "btnadd1", "btnadd2", "iconCoin2", "coins", "txt_leftTime", "btnStart"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Image1_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i(), this.item5_i(), this.hasDone_i(), this.imghasDone_i(), this.grp_notDone_i(), this._Group2_i()],
        this.states = [new eui.State("itemNum4", [new eui.SetProperty("item1", "horizontalCenter", -398), new eui.SetProperty("item1", "y", 406), new eui.SetProperty("item2", "y", 460), new eui.SetProperty("item2", "horizontalCenter", -215), new eui.SetProperty("item3", "horizontalCenter", 265), new eui.SetProperty("item3", "y", 460), new eui.SetProperty("item4", "horizontalCenter", 432), new eui.SetProperty("item4", "y", 406), new eui.SetProperty("item5", "visible", !1)]), new eui.State("itemNum5", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_bg_jpg",
        t.percentWidth = 100,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -20,
        t.source = "oa_battlepanel_imgpet_png",
        t.verticalCenter = 0,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.anchorOffsetX = 0,
        t.height = 0,
        t.horizontalCenter = -363.5,
        t.width = 0,
        t.y = 409,
        t.elementsContent = [this._Image2_i(), this._Image3_i(), this.unlock1_i(), this._Image4_i(), this.txtIcon1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_icon4_png",
        t.verticalCenter = -5,
        t.visible = !0,
        t
    },
    i.unlock1_i = function() {
        var t = new eui.Image;
        return this.unlock1 = t,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_wjs_fb_4_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconName_png",
        t.verticalCenter = 45,
        t.visible = !0,
        t
    },
    i.txtIcon1_i = function() {
        var t = new eui.Label;
        return this.txtIcon1 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 8277664,
        t.text = "          ",
        t.textColor = 16777215,
        t.verticalCenter = 45,
        t.visible = !0,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.height = 0,
        t.horizontalCenter = -188.5,
        t.visible = !0,
        t.width = 0,
        t.y = 449,
        t.elementsContent = [this._Image5_i(), this._Image6_i(), this.unlock2_i(), this._Image7_i(), this.txtIcon2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_icon2_png",
        t.verticalCenter = -5,
        t
    },
    i.unlock2_i = function() {
        var t = new eui.Image;
        return this.unlock2 = t,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_wjs_fb_4_png",
        t.verticalCenter = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconName_png",
        t.verticalCenter = 45,
        t
    },
    i.txtIcon2_i = function() {
        var t = new eui.Label;
        return this.txtIcon2 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 8277664,
        t.text = "          ",
        t.textColor = 16777215,
        t.verticalCenter = 45,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.height = 0,
        t.horizontalCenter = 10,
        t.visible = !0,
        t.width = 0,
        t.y = 465,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this.unlock3_i(), this._Image10_i(), this.txtIcon3_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_icon3_png",
        t.verticalCenter = -5,
        t
    },
    i.unlock3_i = function() {
        var t = new eui.Image;
        return this.unlock3 = t,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_wjs_fb_4_png",
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconName_png",
        t.verticalCenter = 45,
        t
    },
    i.txtIcon3_i = function() {
        var t = new eui.Label;
        return this.txtIcon3 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 8277664,
        t.text = "         ",
        t.textColor = 16777215,
        t.verticalCenter = 45,
        t
    },
    i.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.height = 0,
        t.horizontalCenter = 201.5,
        t.visible = !0,
        t.width = 0,
        t.y = 449,
        t.elementsContent = [this._Image11_i(), this._Image12_i(), this.unlock4_i(), this._Image13_i(), this.txtIcon4_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_icon1_png",
        t.verticalCenter = -5,
        t
    },
    i.unlock4_i = function() {
        var t = new eui.Image;
        return this.unlock4 = t,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_wjs_fb_4_png",
        t.verticalCenter = 0,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconName_png",
        t.verticalCenter = 45,
        t
    },
    i.txtIcon4_i = function() {
        var t = new eui.Label;
        return this.txtIcon4 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 8277664,
        t.text = "          ",
        t.textColor = 16777215,
        t.verticalCenter = 45,
        t.visible = !0,
        t
    },
    i.item5_i = function() {
        var t = new eui.Group;
        return this.item5 = t,
        t.height = 0,
        t.horizontalCenter = 376.5,
        t.visible = !0,
        t.width = 0,
        t.y = 409,
        t.elementsContent = [this._Image14_i(), this._Image15_i(), this.unlock5_i(), this._Image16_i(), this.txtIcon5_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconbg_png",
        t.verticalCenter = 0,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.verticalCenter = -5,
        t
    },
    i.unlock5_i = function() {
        var t = new eui.Image;
        return this.unlock5 = t,
        t.horizontalCenter = 0,
        t.source = "oa_battlepanel_wjs_fb_4_png",
        t.verticalCenter = 0,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "oa_battlepanel_iconName_png",
        t.verticalCenter = 45,
        t
    },
    i.txtIcon5_i = function() {
        var t = new eui.Label;
        return this.txtIcon5 = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.stroke = 1,
        t.strokeColor = 8277664,
        t.text = "          ",
        t.textColor = 16777215,
        t.verticalCenter = 45,
        t
    },
    i.hasDone_i = function() {
        var t = new eui.Image;
        return this.hasDone = t,
        t.horizontalCenter = 1,
        t.source = "oa_battlepanel_hasdone_png",
        t.visible = !0,
        t.y = 540,
        t
    },
    i.imghasDone_i = function() {
        var t = new eui.Image;
        return this.imghasDone = t,
        t.horizontalCenter = 92,
        t.source = "oa_battlepanel_imghasDone_png",
        t.visible = !0,
        t.y = 546,
        t
    },
    i.grp_notDone_i = function() {
        var t = new eui.Group;
        return this.grp_notDone = t,
        t.horizontalCenter = -12.5,
        t.visible = !0,
        t.width = 407,
        t.y = 520,
        t.elementsContent = [this._Group1_i(), this.btnUnlock_i(), this.btnyijian_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this._Image17_i(), this.txt_needNum_i(), this.icon3_i()],
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "oa_battlepanel_jx_2_kb_png",
        t.visible = !0,
        t.x = 0,
        t.y = 17.1,
        t
    },
    i.txt_needNum_i = function() {
        var t = new eui.Label;
        return this.txt_needNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "5/5",
        t.textColor = 8277664,
        t.x = 127,
        t.y = 22,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 55,
        t.width = 55,
        t.x = 72.3,
        t.y = 0,
        t
    },
    i.btnUnlock_i = function() {
        var t = new eui.Image;
        return this.btnUnlock = t,
        t.horizontalCenter = 95.5,
        t.source = "oa_battlepanel_btnunlock_png",
        t.y = 50,
        t
    },
    i.btnyijian_i = function() {
        var t = new eui.Image;
        return this.btnyijian = t,
        t.horizontalCenter = -56.5,
        t.source = "oa_battlepanel_btnyijian_png",
        t.y = 50,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 60,
        t.touchEnabled = !1,
        t.touchThrough = !0,
        t.visible = !0,
        t.width = 330,
        t.y = 18,
        t.elementsContent = [this.coins_i(), this.txt_leftTime_i(), this._Label1_i(), this.btnStart_i()],
        t
    },
    i.coins_i = function() {
        var t = new eui.Group;
        return this.coins = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image18_i(), this._Image19_i(), this.txtCoin2_i(), this.txtCoin1_i(), this.imgDiamond_i(), this.btnadd1_i(), this.btnadd2_i(), this.iconCoin2_i()],
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.source = "oa_battlepanel_img_di2_png",
        t.x = 187,
        t.y = 5,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "oa_battlepanel_img_di2_png",
        t.x = 22,
        t.y = 5,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 225,
        t.y = 8,
        t
    },
    i.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 71,
        t.y = 8,
        t
    },
    i.imgDiamond_i = function() {
        var t = new eui.Image;
        return this.imgDiamond = t,
        t.height = 30,
        t.width = 30,
        t.x = 174,
        t.y = 0,
        t
    },
    i.btnadd1_i = function() {
        var t = new eui.Image;
        return this.btnadd1 = t,
        t.source = "oa_battlepanel_btnadd_png",
        t.x = 140,
        t.y = 5,
        t
    },
    i.btnadd2_i = function() {
        var t = new eui.Image;
        return this.btnadd2 = t,
        t.source = "oa_battlepanel_btnadd_png",
        t.x = 302,
        t.y = 5,
        t
    },
    i.iconCoin2_i = function() {
        var t = new eui.Image;
        return this.iconCoin2 = t,
        t.height = 30,
        t.width = 30,
        t.x = 10,
        t.y = 0,
        t
    },
    i.txt_leftTime_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "000",
        t.textColor = 5686526,
        t.x = 305,
        t.y = 510,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "今日剩余挑战次数：",
        t.textColor = 16777215,
        t.x = 147,
        t.y = 510,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "oa_battlepanel_slan_png",
        t.x = 147,
        t.y = 533,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BattlepopSkin.exml"] = window.oracleAdvance.BattlepopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["yhgg", "btnClose", "commom", "txtDec", "txt_petChanllenge", "content", "btnBag", "btnCure", "petHead", "btnDraw", "btnFight"],
        this.height = 434,
        this.width = 753,
        this.elementsContent = [this.commom_i(), this.content_i(), this.btnBag_i(), this.btnCure_i(), this._Image5_i(), this.petHead_i(), this.btnDraw_i(), this.btnFight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.commom_i = function() {
        var t = new eui.Group;
        return this.commom = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.yhgg_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.scale9Grid = new egret.Rectangle(11, 9, 10, 8),
        t.source = "common_dialog_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 4,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 1,
        t.y = 3,
        t
    },
    i.yhgg_i = function() {
        var t = new eui.Image;
        return this.yhgg = t,
        t.source = "oa_battlepop_yhgg_png",
        t.x = 32,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 3,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.cacheAsBitmap = !0,
        t.visible = !0,
        t.x = 148,
        t.y = 71,
        t.elementsContent = [this._Image3_i(), this.txtDec_i(), this._Image4_i(), this.txt_petChanllenge_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 176,
        t.source = "oa_battlepop_contentbg_kb_png",
        t.width = 576,
        t.x = 0,
        t.y = 100,
        t
    },
    i.txtDec_i = function() {
        var t = new eui.Label;
        return this.txtDec = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 2,
        t.size = 16,
        t.textColor = 12969727,
        t.width = 540,
        t.x = 17,
        t.y = 120,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 570,
        t.rotation = 270,
        t.source = "oa_battlepop_contentbg_kb_png",
        t.visible = !0,
        t.width = 74,
        t.x = 0,
        t.y = 74,
        t
    },
    i.txt_petChanllenge_i = function() {
        var t = new eui.Label;
        return this.txt_petChanllenge = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "使用                                             战胜对手",
        t.textColor = 4173823,
        t.x = 10,
        t.y = 43,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "精灵精灵精灵精灵精灵",
        t.textColor = 16769343,
        t.visible = !1,
        t.x = 59,
        t.y = 43,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "单精灵对战",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = 9,
        t.y = 14,
        t
    },
    i.btnBag_i = function() {
        var t = new eui.Image;
        return this.btnBag = t,
        t.source = "oa_battlepop_jlbb_png",
        t.x = 21,
        t.y = 360,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "oa_battlepop_jlhf_png",
        t.x = 102,
        t.y = 360,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.scale9Grid = new egret.Rectangle(24, 24, 25, 25),
        t.source = "common_item_bg_style_70_70_png",
        t.width = 100,
        t.x = 20,
        t.y = 71,
        t
    },
    i.petHead_i = function() {
        var t = new eui.Image;
        return this.petHead = t,
        t.height = 94.954,
        t.source = "",
        t.width = 95,
        t.x = 22,
        t.y = 73,
        t
    },
    i.btnDraw_i = function() {
        var t = new eui.Image;
        return this.btnDraw = t,
        t.source = "oa_battlepop_btnfight_png",
        t.visible = !0,
        t.x = 605,
        t.y = 369,
        t
    },
    i.btnFight_i = function() {
        var t = new eui.Image;
        return this.btnFight = t,
        t.source = "oa_battlepop_btnStartfight_png",
        t.x = 605,
        t.y = 369,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Infopop1Skin.exml"] = window.oracleAdvance.Infopop1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "txt0_be", "txt0_af", "txt1_be", "txt1_af", "txt1_dif", "txt2_be", "txt2_af", "txt2_dif", "txt3_be", "txt3_af", "txt4_be", "txt4_af", "txt5_be", "txt5_af", "txt5_dif", "txt0_dif", "txt3_dif", "txt4_dif", "imgUp1", "imgUp2", "imgUp5", "imgUp3", "imgUp4", "imgUp0", "content", "txt_oldRace", "txt_newRace", "txt_advanceRace", "zhongzu", "btnClose", "pop"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.pop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Image4_i(), this.content_i(), this._Image17_i(), this._Image18_i(), this.zhongzu_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.scale9Grid = new egret.Rectangle(11, 9, 10, 8),
        t.source = "common_dialog_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 330,
        t.width = 210,
        t.x = 20,
        t.y = 66,
        t.elementsContent = [this.pet_i(), this._Image3_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "oa_infopop_petImg1_png",
        t.top = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 283,
        t.scale9Grid = new egret.Rectangle(6, 7, 6, 5),
        t.source = "oa_infopop1_kuang_png",
        t.visible = !1,
        t.width = 184,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 180,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "oa_infopop1_jx_316_kb_png",
        t.width = 469,
        t.x = 243,
        t.y = 188,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.x = 253,
        t.y = 216,
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this.txt0_be_i(), this.txt0_af_i(), this.txt1_be_i(), this.txt1_af_i(), this.txt1_dif_i(), this.txt2_be_i(), this.txt2_af_i(), this.txt2_dif_i(), this.txt3_be_i(), this.txt3_af_i(), this.txt4_be_i(), this.txt4_af_i(), this.txt5_be_i(), this.txt5_af_i(), this.txt5_dif_i(), this.txt0_dif_i(), this.txt3_dif_i(), this.txt4_dif_i(), this._Image5_i(), this._Image6_i(), this.imgUp1_i(), this._Image7_i(), this._Image8_i(), this.imgUp2_i(), this._Image9_i(), this._Image10_i(), this.imgUp5_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this.imgUp3_i(), this.imgUp4_i(), this.imgUp0_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "攻击：",
        t.textColor = 10868733,
        t.x = 30,
        t.y = 8,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "防御：",
        t.textColor = 10868733,
        t.x = 31,
        t.y = 57,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "速度：",
        t.textColor = 10868733,
        t.x = 30,
        t.y = 106,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特攻：",
        t.textColor = 10868733,
        t.x = 266,
        t.y = 8,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特防：",
        t.textColor = 10868733,
        t.x = 265,
        t.y = 57,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "体力：",
        t.textColor = 10868733,
        t.x = 265,
        t.y = 106,
        t
    },
    i.txt0_be_i = function() {
        var t = new eui.Label;
        return this.txt0_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 312,
        t.y = 106,
        t
    },
    i.txt0_af_i = function() {
        var t = new eui.Label;
        return this.txt0_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 372,
        t.y = 106,
        t
    },
    i.txt1_be_i = function() {
        var t = new eui.Label;
        return this.txt1_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 77,
        t.y = 8,
        t
    },
    i.txt1_af_i = function() {
        var t = new eui.Label;
        return this.txt1_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 136,
        t.y = 8,
        t
    },
    i.txt1_dif_i = function() {
        var t = new eui.Label;
        return this.txt1_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 197,
        t.y = 8,
        t
    },
    i.txt2_be_i = function() {
        var t = new eui.Label;
        return this.txt2_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 77,
        t.y = 57,
        t
    },
    i.txt2_af_i = function() {
        var t = new eui.Label;
        return this.txt2_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 136,
        t.y = 57,
        t
    },
    i.txt2_dif_i = function() {
        var t = new eui.Label;
        return this.txt2_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 197,
        t.y = 57,
        t
    },
    i.txt3_be_i = function() {
        var t = new eui.Label;
        return this.txt3_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 312,
        t.y = 8,
        t
    },
    i.txt3_af_i = function() {
        var t = new eui.Label;
        return this.txt3_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 371,
        t.y = 8,
        t
    },
    i.txt4_be_i = function() {
        var t = new eui.Label;
        return this.txt4_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 312,
        t.y = 57,
        t
    },
    i.txt4_af_i = function() {
        var t = new eui.Label;
        return this.txt4_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 372,
        t.y = 57,
        t
    },
    i.txt5_be_i = function() {
        var t = new eui.Label;
        return this.txt5_be = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "705",
        t.textColor = 16777215,
        t.x = 77,
        t.y = 106,
        t
    },
    i.txt5_af_i = function() {
        var t = new eui.Label;
        return this.txt5_af = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "740",
        t.textColor = 16777215,
        t.x = 136,
        t.y = 106,
        t
    },
    i.txt5_dif_i = function() {
        var t = new eui.Label;
        return this.txt5_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 197,
        t.y = 106,
        t
    },
    i.txt0_dif_i = function() {
        var t = new eui.Label;
        return this.txt0_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 432,
        t.y = 106,
        t
    },
    i.txt3_dif_i = function() {
        var t = new eui.Label;
        return this.txt3_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 433,
        t.y = 8,
        t
    },
    i.txt4_dif_i = function() {
        var t = new eui.Label;
        return this.txt4_dif = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 432,
        t.y = 57,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_atk_png",
        t.width = 21,
        t.x = 0,
        t.y = 6,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 101,
        t.y = -2.786,
        t
    },
    i.imgUp1_i = function() {
        var t = new eui.Image;
        return this.imgUp1 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 160,
        t.y = -5,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_def_png",
        t.width = 21,
        t.x = 2,
        t.y = 52,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 101,
        t.y = 45.214,
        t
    },
    i.imgUp2_i = function() {
        var t = new eui.Image;
        return this.imgUp2 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 160,
        t.y = 43,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_speed_png",
        t.width = 21,
        t.x = 0,
        t.y = 101,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 101,
        t.y = 94.214,
        t
    },
    i.imgUp5_i = function() {
        var t = new eui.Image;
        return this.imgUp5 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 160,
        t.y = 92,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_satk_png",
        t.width = 21,
        t.x = 237,
        t.y = 5,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 336,
        t.y = -2.786,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 336,
        t.y = 45.214,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_sdef_png",
        t.width = 21,
        t.x = 237,
        t.y = 52,
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 21,
        t.source = "common_hp_png",
        t.width = 21,
        t.x = 237,
        t.y = 101,
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 336,
        t.y = 94.214,
        t
    },
    i.imgUp3_i = function() {
        var t = new eui.Image;
        return this.imgUp3 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 395,
        t.y = -5,
        t
    },
    i.imgUp4_i = function() {
        var t = new eui.Image;
        return this.imgUp4 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 395,
        t.y = 43,
        t
    },
    i.imgUp0_i = function() {
        var t = new eui.Image;
        return this.imgUp0 = t,
        t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 395,
        t.y = 92,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_down_1_png",
        t.x = 434,
        t.y = 156,
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "oa_infopop1_jx_316_kb_png",
        t.width = 468,
        t.x = 244,
        t.y = 89,
        t
    },
    i.zhongzu_i = function() {
        var t = new eui.Group;
        return this.zhongzu = t,
        t.x = 257,
        t.y = 102,
        t.elementsContent = [this._Image19_i(), this._Image20_i(), this._Image21_i(), this._Label7_i(), this.txt_oldRace_i(), this.txt_newRace_i(), this.txt_advanceRace_i()],
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 217,
        t.y = 5.214,
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_1_png",
        t.x = 239,
        t.y = 5.214,
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_turnpagesright_right_2_png",
        t.x = 366,
        t.y = 2.214,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 22,
        t.stroke = 0,
        t.strokeColor = 12578815,
        t.text = "总种族值提升",
        t.textColor = 16777215,
        t.visible = !0,
        t.x = -1,
        t.y = 14,
        t
    },
    i.txt_oldRace_i = function() {
        var t = new eui.Label;
        return this.txt_oldRace = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "705",
        t.textColor = 16514895,
        t.x = 161,
        t.y = 10,
        t
    },
    i.txt_newRace_i = function() {
        var t = new eui.Label;
        return this.txt_newRace = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "740",
        t.textColor = 16514895,
        t.x = 285,
        t.y = 10,
        t
    },
    i.txt_advanceRace_i = function() {
        var t = new eui.Label;
        return this.txt_advanceRace = t,
        t.fontFamily = "MFShangHei",
        t.size = 30,
        t.text = "35",
        t.textColor = 6153561,
        t.x = 409,
        t.y = 10,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Infopop2Skin.exml"] = window.oracleAdvance.Infopop2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "txt_afterTe", "_af", "txt_beforeTe", "_be", "btnClose", "pop"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.pop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.pop_i = function() {
        var t = new eui.Group;
        return this.pop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this._af_i(), this._be_i(), this.btnClose_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 431,
        t.width = 753,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Group1_i(), this._Image4_i(), this._Image5_i(), this._Image6_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.scale9Grid = new egret.Rectangle(11, 9, 10, 8),
        t.source = "common_dialog_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 330,
        t.width = 210,
        t.x = 20,
        t.y = 60,
        t.elementsContent = [this.pet_i(), this._Image3_i()],
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.source = "oa_infopop_petImg1_png",
        t.top = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 283,
        t.scale9Grid = new egret.Rectangle(6, 7, 6, 5),
        t.source = "oa_infopop1_kuang_png",
        t.visible = !1,
        t.width = 184,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 125,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "oa_infopop1_jx_316_kb_png",
        t.width = 442,
        t.x = 270,
        t.y = 243,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "oa_infopop1_down_1_png",
        t.x = 448,
        t.y = 212,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 125,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "oa_infopop1_jx_316_kb_png",
        t.width = 442,
        t.x = 270,
        t.y = 90,
        t
    },
    i._af_i = function() {
        var t = new eui.Scroller;
        return this._af = t,
        t.height = 100,
        t.visible = !0,
        t.width = 400,
        t.x = 295,
        t.y = 255,
        t.viewport = this._Group3_i(),
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_afterTe_i()],
        t
    },
    i.txt_afterTe_i = function() {
        var t = new eui.Label;
        return this.txt_afterTe = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 4187130,
        t.width = 400,
        t
    },
    i._be_i = function() {
        var t = new eui.Scroller;
        return this._be = t,
        t.height = 100,
        t.visible = !0,
        t.width = 400,
        t.x = 295,
        t.y = 100,
        t.viewport = this._Group4_i(),
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_beforeTe_i()],
        t
    },
    i.txt_beforeTe_i = function() {
        var t = new eui.Label;
        return this.txt_beforeTe = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.textColor = 12834813,
        t.width = 400,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainpanelSkin.exml"] = window.oracleAdvance.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "imgPet", "btnGet", "btnGo", "btnFastAdvanced", "btnExchange", "hasDone", "skillbg", "prop_1", "txt_skillName_1", "txt_damage_1", "txt_pp_1", "skillTag_1", "skillItem_1", "prop_2", "txt_skillName_2", "txt_damage_2", "txt_pp_2", "skillTag_2", "skillItem_2", "prop_3", "txt_skillName_3", "txt_damage_3", "txt_pp_3", "skillTag_3", "skillItem_3", "prop_4", "txt_skillName_4", "txt_damage_4", "txt_pp_4", "skillTag_4", "skillItem_4", "skill", "btnTurnpagesright", "txt_oldRace", "txt_newRace", "zhongzu", "groupTag", "tag3", "tag2", "tag1", "texing", "icon", "txtLeft", "txt", "txt_tid1", "txt_tid1_info", "txt_tid2", "btnHelp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.imgPet_i(), this.btnGet_i(), this._Group3_i(), this.txt_i(), this._Group4_i(), this._Group5_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "oa_mainpanel_bg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.horizontalCenter = -268,
        t.source = "oa_mainpanel_imgpet_png",
        t.visible = !0,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.horizontalCenter = -207,
        t.source = "oa_mainpanel_btnget_png",
        t.visible = !0,
        t.y = 539,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = 18,
        t.visible = !0,
        t.width = 519,
        t.y = 37,
        t.elementsContent = [this.btnGo_i(), this.btnFastAdvanced_i(), this.btnExchange_i(), this.hasDone_i(), this.skill_i(), this.zhongzu_i(), this.texing_i()],
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "oa_mainpanel_btngo_png",
        t.x = 376,
        t.y = 520,
        t
    },
    i.btnFastAdvanced_i = function() {
        var t = new eui.Image;
        return this.btnFastAdvanced = t,
        t.source = "oa_mainpanel_btnFastAdvanced_png",
        t.x = 227,
        t.y = 520,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "oa_mainpanel_btnExchancge_png",
        t.x = 376,
        t.y = 520,
        t
    },
    i.hasDone_i = function() {
        var t = new eui.Image;
        return this.hasDone = t,
        t.source = "oa_mainpanel_hasdone_png",
        t.visible = !0,
        t.x = 231,
        t.y = 524,
        t
    },
    i.skill_i = function() {
        var t = new eui.Group;
        return this.skill = t,
        t.visible = !0,
        t.x = 4,
        t.y = 333,
        t.elementsContent = [this.skillbg_i(), this._Image1_i(), this._Group1_i()],
        t
    },
    i.skillbg_i = function() {
        var t = new eui.Image;
        return this.skillbg = t,
        t.height = 187,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "oa_mainpanel_skillbg_png",
        t.width = 503,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_xzjn_png",
        t.x = 8,
        t.y = 4,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 12,
        t.y = 35,
        t.elementsContent = [this.skillItem_1_i(), this.skillItem_2_i(), this.skillItem_3_i(), this.skillItem_4_i()],
        t
    },
    i.skillItem_1_i = function() {
        var t = new eui.Group;
        return this.skillItem_1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.prop_1_i(), this.txt_skillName_1_i(), this.txt_damage_1_i(), this.txt_pp_1_i(), this.skillTag_1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_juxing_530_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.prop_1_i = function() {
        var t = new eui.Image;
        return this.prop_1 = t,
        t.height = 40,
        t.source = "oa_mainpanel_prop_png",
        t.width = 40,
        t.x = 10,
        t.y = 13,
        t
    },
    i.txt_skillName_1_i = function() {
        var t = new eui.Label;
        return this.txt_skillName_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0186439894523,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 11,
        t
    },
    i.txt_damage_1_i = function() {
        var t = new eui.Label;
        return this.txt_damage_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "威力：200",
        t.textColor = 12842239,
        t.x = 58,
        t.y = 40,
        t
    },
    i.txt_pp_1_i = function() {
        var t = new eui.Label;
        return this.txt_pp_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = " 20",
        t.textColor = 12841983,
        t.x = 152.072,
        t.y = 40,
        t
    },
    i.skillTag_1_i = function() {
        var t = new eui.Image;
        return this.skillTag_1 = t,
        t.source = "",
        t.x = 195,
        t.y = 0,
        t
    },
    i.skillItem_2_i = function() {
        var t = new eui.Group;
        return this.skillItem_2 = t,
        t.x = 242,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.prop_2_i(), this.txt_skillName_2_i(), this.txt_damage_2_i(), this.txt_pp_2_i(), this.skillTag_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_juxing_530_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.prop_2_i = function() {
        var t = new eui.Image;
        return this.prop_2 = t,
        t.height = 40,
        t.source = "oa_mainpanel_prop_png",
        t.width = 40,
        t.x = 10,
        t.y = 13,
        t
    },
    i.txt_skillName_2_i = function() {
        var t = new eui.Label;
        return this.txt_skillName_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0186439894523,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 11,
        t
    },
    i.txt_damage_2_i = function() {
        var t = new eui.Label;
        return this.txt_damage_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "威力：200",
        t.textColor = 12842239,
        t.x = 58,
        t.y = 40,
        t
    },
    i.txt_pp_2_i = function() {
        var t = new eui.Label;
        return this.txt_pp_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "PP：20",
        t.textColor = 12841983,
        t.x = 152.072,
        t.y = 40,
        t
    },
    i.skillTag_2_i = function() {
        var t = new eui.Image;
        return this.skillTag_2 = t,
        t.source = "",
        t.x = 195,
        t.y = 0,
        t
    },
    i.skillItem_3_i = function() {
        var t = new eui.Group;
        return this.skillItem_3 = t,
        t.visible = !0,
        t.x = 0,
        t.y = 73,
        t.elementsContent = [this._Image4_i(), this.prop_3_i(), this.txt_skillName_3_i(), this.txt_damage_3_i(), this.txt_pp_3_i(), this.skillTag_3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_juxing_530_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.prop_3_i = function() {
        var t = new eui.Image;
        return this.prop_3 = t,
        t.height = 40,
        t.source = "oa_mainpanel_prop_png",
        t.width = 40,
        t.x = 10,
        t.y = 13,
        t
    },
    i.txt_skillName_3_i = function() {
        var t = new eui.Label;
        return this.txt_skillName_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0186439894523,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 11,
        t
    },
    i.txt_damage_3_i = function() {
        var t = new eui.Label;
        return this.txt_damage_3 = t,
        t.fontFamily = " MFShangHei",
        t.size = 17,
        t.text = "威力：200",
        t.textColor = 12842239,
        t.x = 58,
        t.y = 40,
        t
    },
    i.txt_pp_3_i = function() {
        var t = new eui.Label;
        return this.txt_pp_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "PP：20",
        t.textColor = 12841983,
        t.x = 152.072,
        t.y = 40,
        t
    },
    i.skillTag_3_i = function() {
        var t = new eui.Image;
        return this.skillTag_3 = t,
        t.source = "",
        t.x = 195,
        t.y = 0,
        t
    },
    i.skillItem_4_i = function() {
        var t = new eui.Group;
        return this.skillItem_4 = t,
        t.x = 242,
        t.y = 73,
        t.elementsContent = [this._Image5_i(), this.prop_4_i(), this.txt_skillName_4_i(), this.txt_damage_4_i(), this.txt_pp_4_i(), this.skillTag_4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_juxing_530_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.prop_4_i = function() {
        var t = new eui.Image;
        return this.prop_4 = t,
        t.height = 40,
        t.source = "oa_mainpanel_prop_png",
        t.width = 40,
        t.x = 10,
        t.y = 13,
        t
    },
    i.txt_skillName_4_i = function() {
        var t = new eui.Label;
        return this.txt_skillName_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0186439894523,
        t.text = "技能名称七个字",
        t.textColor = 16777215,
        t.x = 56,
        t.y = 11,
        t
    },
    i.txt_damage_4_i = function() {
        var t = new eui.Label;
        return this.txt_damage_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "威力：200",
        t.textColor = 12842239,
        t.x = 58,
        t.y = 40,
        t
    },
    i.txt_pp_4_i = function() {
        var t = new eui.Label;
        return this.txt_pp_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "PP：20",
        t.textColor = 12841983,
        t.x = 152.072,
        t.y = 40,
        t
    },
    i.skillTag_4_i = function() {
        var t = new eui.Image;
        return this.skillTag_4 = t,
        t.source = "",
        t.x = 195,
        t.y = 0,
        t
    },
    i.zhongzu_i = function() {
        var t = new eui.Group;
        return this.zhongzu = t,
        t.x = 0,
        t.y = 229,
        t.elementsContent = [this._Image6_i(), this._Image7_i(), this.btnTurnpagesright_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this.txt_oldRace_i(), this.txt_newRace_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(79, 48, 79, 15),
        t.source = "oa_mainpanel_contenbg_2_png",
        t.visible = !0,
        t.width = 264,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_czzds_png",
        t.x = 13,
        t.y = 12,
        t
    },
    i.btnTurnpagesright_i = function() {
        var t = new eui.Image;
        return this.btnTurnpagesright = t,
        t.source = "oa_mainpanel_btnturnpagesright_png",
        t.x = 109,
        t.y = 49,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_turnpagesright_right_1_png",
        t.visible = !1,
        t.x = 105,
        t.y = 43,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_turnpagesright_right_1_png",
        t.visible = !1,
        t.x = 126,
        t.y = 43,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_tuoyuan_1_png",
        t.x = 220,
        t.y = 5,
        t
    },
    i.txt_oldRace_i = function() {
        var t = new eui.Label;
        return this.txt_oldRace = t,
        t.fontFamily = "MFShangHei",
        t.size = 45,
        t.text = "705",
        t.textColor = 16771648,
        t.x = 26,
        t.y = 40,
        t
    },
    i.txt_newRace_i = function() {
        var t = new eui.Label;
        return this.txt_newRace = t,
        t.fontFamily = "MFShangHei",
        t.size = 45,
        t.text = "740",
        t.textColor = 16771648,
        t.x = 167,
        t.y = 40,
        t
    },
    i.texing_i = function() {
        var t = new eui.Group;
        return this.texing = t,
        t.x = 270,
        t.y = 229,
        t.elementsContent = [this._Image11_i(), this.groupTag_i(), this._Group2_i(), this._Image12_i(), this._Image13_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_contenbg_2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.groupTag_i = function() {
        var t = new eui.Group;
        return this.groupTag = t,
        t.height = 26.345,
        t.visible = !0,
        t.x = 27,
        t.y = 54,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t.horizontalAlign = "left",
        t.verticalAlign = "middle",
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 27,
        t.y = 54,
        t.elementsContent = [this.tag3_i(), this.tag2_i(), this.tag1_i()],
        t
    },
    i.tag3_i = function() {
        var t = new eui.Image;
        return this.tag3 = t,
        t.x = 129,
        t.y = 0,
        t
    },
    i.tag2_i = function() {
        var t = new eui.Image;
        return this.tag2 = t,
        t.x = 59,
        t.y = 1,
        t
    },
    i.tag1_i = function() {
        var t = new eui.Image;
        return this.tag1 = t,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_txjh_png",
        t.visible = !0,
        t.x = 14,
        t.y = 12,
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_tuoyuan_1_png",
        t.visible = !0,
        t.x = 190,
        t.y = 6,
        t
    },
    i.txt_i = function() {
        var t = new eui.Group;
        return this.txt = t,
        t.cacheAsBitmap = !0,
        t.right = 71,
        t.y = 598,
        t.elementsContent = [this.icon_i(), this.txtLeft_i(), this._Label1_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.width = 30,
        t.x = 92,
        t.y = 2,
        t
    },
    i.txtLeft_i = function() {
        var t = new eui.Label;
        return this.txtLeft = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "000",
        t.textColor = 5686526,
        t.x = 135,
        t.y = 10,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "剩余可兑换       ：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 10,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.y = 185,
        t.elementsContent = [this._Image14_i(), this.txt_tid1_i(), this.txt_tid1_info_i(), this.txt_tid2_i(), this._Label2_i()],
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.source = "oa_mainpanel_jx_532_fb_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_tid1_i = function() {
        var t = new eui.Label;
        return this.txt_tid1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "XXXX-XXXX",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 11,
        t
    },
    i.txt_tid1_info_i = function() {
        var t = new eui.Label;
        return this.txt_tid1_info = t,
        t.fontFamily = "MFShangHei",
        t.size = 16.6666641235352,
        t.text = "参与试炼可以免费进阶",
        t.textColor = 16777215,
        t.x = 181,
        t.y = 11,
        t
    },
    i.txt_tid2_i = function() {
        var t = new eui.Label;
        return this.txt_tid2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 17,
        t.text = "XXXX-XXXX",
        t.textColor = 16777215,
        t.x = 31,
        t.y = 40,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16.6666641235352,
        t.text = "试炼关闭，仅能付费进阶",
        t.textColor = 16777215,
        t.x = 164,
        t.y = 40,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.right = -30,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image15_i(), this.btnHelp_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.right = 41,
        t.source = "oa_mainpanel_title1_png",
        t.visible = !0,
        t.y = 18.242,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.right = 74,
        t.source = "common_help_icon_1_png",
        t.visible = !0,
        t.y = 113.182,
        t
    },
    e
} (eui.Skin);