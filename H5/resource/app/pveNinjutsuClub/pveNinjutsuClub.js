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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.rewardsInfo = [{
                id: 1,
                txtInfo: "使用四象封印术击败忍王",
                progress: 3,
                iconsID: [300086, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 2,
                txtInfo: "使用影遁之术击败忍王",
                progress: 3,
                iconsID: [300081, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 3,
                txtInfo: "使用木遁之术击败忍王",
                progress: 3,
                iconsID: [300082, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 4,
                txtInfo: "使用水遁之术击败忍王",
                progress: 3,
                iconsID: [300083, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 5,
                txtInfo: "使用火遁之术击败忍王",
                progress: 3,
                iconsID: [300084, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 6,
                txtInfo: "使用土遁之术击败忍王",
                progress: 3,
                iconsID: [300085, 1707511],
                iconNum: [1, 200]
            },
            {
                id: 7,
                txtInfo: "累计击败忍王次数",
                progress: 30,
                iconsID: [300066, 1707511],
                iconNum: [1, 500]
            }],
            n.skinName = t.PopKaoheSkin,
            n.service = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            EventManager.addEventListener("GetKaoHeReward", this.initDat, this),
            this.initDat()
        },
        i.prototype.initDat = function() {
            var e = this;
            this.service.updateValues().then(function() {
                for (var i = [], n = e.service.getValue(t.PveNinjutsuClubConst.forever_win1_times), s = e.service.getValue(t.PveNinjutsuClubConst.forever_win2_times), o = e.service.getValue(t.PveNinjutsuClubConst.forever_total_times), r = 0; 4 > r; r++) {
                    var u = n >> 8 * r & 255;
                    i.push(u)
                }
                for (var r = 0; 2 > r; r++) {
                    var u = s >> 8 * r & 255;
                    i.push(u)
                }
                i.push(o);
                for (var r = 0; 7 > r; r++) {
                    var a = KTool.getBit(s, 17 + r);
                    e.rewardsInfo[r].value = i[r],
                    e.rewardsInfo[r].hasGet = a
                }
                e._list.itemRenderer = t.NinjusuKaoHeItem,
                e._list.dataProvider = new eui.ArrayCollection(e.rewardsInfo)
            })
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener("GetKaoHeReward", this.initDat, this)
        },
        i
    } (PopView);
    t.PveNinjutsuClubKaoHePop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubKaoHePop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.service.setValues([t.PveNinjutsuClubConst.forever_total_times, t.PveNinjutsuClubConst.forever_win1_times, t.PveNinjutsuClubConst.forever_win2_times], [t.PveNinjutsuClubConst.daily_chanllenge_time, t.PveNinjutsuClubConst.daily_boss_data, t.PveNinjutsuClubConst.daily_renshu_index, t.PveNinjutsuClubConst.daily_renshu_result]),
            i.init([{
                panelName: t.PveNinjutsuClubConst.MAIN_PANEL,
                isMain: !0
            }]),
            i
        }
        return __extends(i, e),
        i
    } (BasicMultPanelModule);
    t.PveNinjutsuClub = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClub")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.MainPanelIconNumbers = [50, 1, 1],
            i.MainPanelIcon = [1707511, 300874, 2300048],
            i.ease = egret.Ease.quadOut,
            i.skinName = t.MainSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.imgItem1.source = ClientConfig.getItemIcon(1400153),
            this.imgItem3.source = ClientConfig.getItemIcon(2500005),
            this.initBtnClose("pnc_main_rfyxs_png", this,
            function() {
                i.service.closeModule()
            },
            this),
            this.initBtnHelp(function() {
                StatLogger.log("20220902版本系统功能", "忍法研习社", "点击【？】");
                var e = new t.PveNinjutsuClubHelpPop;
                i.service.openPop(e)
            },
            this),
            this.initData(),
            this.addEvent(),
            StatLogger.log("20220902版本系统功能", "忍法研习社", "进入副本主界面")
        },
        i.prototype.initData = function() {
            this.resultAnim = SpineUtil.createAnimate("rengwang"),
            this.grpBg.addChildAt(this.resultAnim, 0);
            var t = egret.lifecycle.stage.stageWidth / 1380;
            this.resultAnim.scaleX = t,
            this.resultAnim.x = 560,
            this.resultAnim.y = 325,
            this.resultAnim.play("animation", 0),
            this.resultAnim.touchEnabled = this.resultAnim.touchChildren = !1,
            this.bg.visible = !1;
            for (var e = 0; e < this.MainPanelIcon.length; e++) {
                this["icon_" + (e + 1)].source = ClientConfig.getItemIcon(this.MainPanelIcon[e]);
                var i = ItemXMLInfo.getName(this.MainPanelIcon[e]);
                this["iconName_" + (e + 1)].text = StringUtil.parseStrLimitLen(i, 5),
                this["iconNum_" + (e + 1)].text = this.MainPanelIconNumbers[e]
            }
            this.animPlay("inSide"),
            this.update()
        },
        i.prototype.animPlay = function(t) {
            var e = this;
            switch (t) {
            case "inSide":
                this.grp_left.x = -800,
                this.group_rightAni.x = 1200,
                this.grp_left.alpha = this.group_rightAni.alpha = 0,
                egret.Tween.get(this.grp_left).to({
                    x: 0,
                    alpha: 1
                },
                500, this.ease),
                egret.Tween.get(this.group_rightAni).to({
                    x: 0,
                    alpha: 1
                },
                500, this.ease).call(function() {
                    e.touchEnabled = e.touchChildren = !0
                });
                break;
            case "outSide":
                egret.Tween.get(this.grp_left).to({
                    x:
                    -800,
                    alpha: 0
                },
                500, this.ease),
                egret.Tween.get(this.group_rightAni).to({
                    x: 1200,
                    alpha: 0
                },
                500, this.ease).call(function() {
                    e.touchEnabled = e.touchChildren = !1
                })
            }
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgItem1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this);
            for (var i = function(t) {
                ImageButtonUtil.add(n["icon_" + (t + 1)],
                function() {
                    var i = {};
                    i.id = e.MainPanelIcon[t],
                    tipsPop.TipsPop.openItemPop(i)
                },
                n)
            },
            n = this, s = 0; 4 > s; s++) i(s);
            ImageButtonUtil.add(this.btnContinue,
            function() {
                e.animPlay("outSide");
                var i = e.service.getValue(t.PveNinjutsuClubConst.daily_boss_data),
                n = (255 & i) > 0 && 1 == KTool.getBit(i, 9);
                if (n) {
                    var s = new t.PveNinjutsuClubAttackPop(e);
                    PopViewManager.getInstance().openView(s)
                } else e.openJieyinPop()
            },
            this),
            ImageButtonUtil.add(this.btnStart,
            function() {
                StatLogger.log("20220902版本系统功能", "忍法研习社", "开启忍法研习社");
                var i = e.service.getValue(t.PveNinjutsuClubConst.daily_boss_data),
                n = e.service.getValue(t.PveNinjutsuClubConst.daily_chanllenge_time);
                if (2 == n) return void BubblerManager.getInstance().showText("今日完成次数已达上限！");
                var s = (255 & i) > 0 || 2 == n;
                e.btnStart.visible = !1,
                e.btnContinue.visible = !0,
                s ? e.openJieyinPop() : SocketConnection.sendByQueue(t.PveNinjutsuClubConst.PveNinjutsuClub_CMD, [1, 1, 0],
                function(t) {
                    var i = t.data;
                    i.readUnsignedInt();
                    e.openJieyinPop()
                }),
                e.animPlay("outSide")
            },
            this),
            ImageButtonUtil.add(this.btnKaohe,
            function() {
                StatLogger.log("20220902版本系统功能", "忍法研习社", "点击查看考核面板");
                var i = new t.PveNinjutsuClubKaoHePop(e.service);
                e.service.openPop(i)
            },
            this),
            ImageButtonUtil.add(this.btnSaodang,
            function() {
                var i = ItemManager.getNumByID(1400153) + ItemManager.getNumByID(2500005),
                n = e.service.getValue(t.PveNinjutsuClubConst.forever_win2_times),
                s = 1 == KTool.getBit(n, 24);
                if (s) {
                    var o = 2 - e.service.getValue(t.PveNinjutsuClubConst.daily_chanllenge_time);
                    if (0 >= o) return void BubblerManager.getInstance().showText("今日完成次数已达上限！");
                    0 >= i ? BubblerManager.getInstance().showText("很抱歉，记忆作战模组数量不足！") : SocketConnection.sendByQueue(t.PveNinjutsuClubConst.PveNinjutsuClub_CMD, [1, 3, 0],
                    function() {
                        AwardManager.resume(),
                        e.updatePanel()
                    })
                } else {
                    var r = e.service.getValue(t.PveNinjutsuClubConst.forever_total_times);
                    BubblerManager.getInstance().showText("永久解锁扫荡需要累计通关6次，当前通关次数为" + r + "！")
                }
            },
            this),
            EventManager.addEventListener("AttackYinzi", this.updatePanel, this),
            EventManager.addEventListener("showBtnStart", this.showStat, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.fightOver, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptWidth, this)
        },
        i.prototype.openJieyinPop = function() {
            var e = new t.PveNinjutsuClubJieYinPop(this),
            i = PopViewManager.createDefaultStyleObject();
            i.effStyle = {
                showAniType: PopEffStyle.LEFT_TO_RIGHT,
                isMoveToCenter: !0,
                horizontalCenterOffset: 0,
                verticalCenterOffset: 0,
                relativeToPoint: null
            },
            PopViewManager.getInstance().openView(e, i)
        },
        i.prototype.showStat = function() {
            this.btnStart.visible = !0,
            this.btnContinue.visible = !1
        },
        i.prototype.adaptWidth = function() {
            var t = egret.lifecycle.stage.stageWidth > 1380 ? egret.lifecycle.stage.stageWidth / 1380 : 1;
            this.resultAnim.scaleX = t
        },
        i.prototype.fightOver = function() {
            if (FightManager.isWin) {
                var e = new t.PveNinjutsuClubAttackPop(this);
                PopViewManager.getInstance().openView(e)
            } else FightManager.isWin || 0 != CountExpPanelManager.overData.isJumping || (this.animPlay("outSide"), this.openJieyinPop())
        },
        i.prototype.updatePanel = function() {
            var t = this;
            this.service.updateValues().then(function() {
                t.update()
            })
        },
        i.prototype.update = function() {
            var e = this.service.getValue(t.PveNinjutsuClubConst.daily_boss_data);
            this.btnStart.visible = 0 == (255 & e),
            this.btnContinue.visible = !this.btnStart.visible,
            this.txtTime.text = this.service.getValue(t.PveNinjutsuClubConst.daily_chanllenge_time) + "/2",
            this.txtSignetNum.text = ItemManager.getNumByID(1400153) + "",
            this.txtSignetNum3.text = ItemManager.getNumByID(2500005) + ""
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener("AttackYinzi", this.updatePanel, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.fightOver, this),
            EventManager.removeEventListener("showBtnStart", this.showStat, this),
            e.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    t.PveNinjutsuClubMainPanel = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubMainPanel")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.signsX = [273, 497, 724],
            n.signsY = 98,
            n.targetIcon = null,
            n.signs = [],
            n.curAttackSort = [],
            n.ratioScaleX = 0,
            n.ratioScaleY = 0,
            n.curSortIndex = 0,
            n.isMoving = !1,
            n.isEnterResult = !1,
            n.skinName = t.PopAttackSkin,
            n.mainPanel = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            this.mainPanel.animPlay("outSide"),
            this.ratioScaleX = .5 * (egret.lifecycle.stage.stageWidth - 1136),
            this.ratioScaleY = .5 * (egret.lifecycle.stage.stageHeight - 640);
            for (var e = 0; 3 > e; e++) {
                var i = new t.NinjusuAttackIcon(e);
                i.name = "icon" + e,
                this.attack.addChild(i),
                i.x = this.signsX[e],
                i.y = this.signsY,
                i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHeadTouchBegin, this),
                this.signs.push(i)
            }
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnJilu,
            function() {
                for (var i = e.mainPanel.service.getValue(t.PveNinjutsuClubConst.daily_renshu_index), n = e.mainPanel.service.getValue(t.PveNinjutsuClubConst.daily_renshu_result), s = [], o = [], r = 0; 5 > r; r++) {
                    var u = i >> 4 * r & 15,
                    a = n >> 4 * r & 15;
                    s.push(u),
                    o.push(a)
                }
                for (var _ = [], r = 0; 5 > r; r++) _[r] = {
                    value: s[r],
                    result: o[r]
                };
                _ = _.reverse();
                var h = new t.PveNinjutsuClubRecordPop(_);
                PopViewManager.getInstance().openView(h)
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                e.curAttackSort = [];
                for (var i = 0; 3 > i; i++) {
                    var n = e.attack.getChildByName("icon" + i);
                    e.curAttackSort[n.curPosition] = n.curIndex + 1
                }
                var s = 100 * e.curAttackSort[0] + 10 * e.curAttackSort[1] + e.curAttackSort[2];
                SocketConnection.sendByQueue(t.PveNinjutsuClubConst.PveNinjutsuClub_CMD, [1, 2, s],
                function(i) {
                    e.hide();
                    var n = i.data,
                    o = n.readUnsignedInt();
                    EventManager.dispatchEventWith("AttackYinzi"),
                    e.isEnterResult = !0;
                    var r = new t.PveNinjutsuClubResultPop(o, s, e.mainPanel);
                    AwardManager.pause();
                    var u = PopViewManager.createDefaultStyleObject();
                    u.ignoreMaskClick = !0,
                    PopViewManager.getInstance().openView(r, u)
                })
            },
            this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptWidth, this)
        },
        i.prototype.adaptWidth = function() {
            this.ratioScaleX = .5 * (egret.lifecycle.stage.stageWidth - 1136),
            this.ratioScaleY = .5 * (egret.lifecycle.stage.stageHeight - 640)
        },
        i.prototype.onHeadTouchBegin = function(t) {
            var e = t.currentTarget;
            e && (this.targetIcon = e, this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this))
        },
        i.prototype.onTouchMove = function(t) {
            this.isMoving = !0,
            this.targetIcon && (this.targetIcon.x = t.stageX - this.ratioScaleX - .4 * this.targetIcon.width, this.targetIcon.y = t.stageY - this.ratioScaleY - 1.8 * this.targetIcon.height, this.curSortIndex = this.attack.getChildIndex(this.targetIcon), this.attack.setChildIndex(this.targetIcon, this.attack.numChildren));
            var e = this.bg.hitTestPoint(t.stageX, t.stageY);
            e ? this.targetIcon.setInside() : (this.targetIcon.setOutside(), DisplayUtil.setEnabled(this.btnTiaozhan, !0, !0), DisplayUtil.setEnabled(this.btnJilu, !0, !1));
            for (var i = 0; 3 > i; i++) {
                var n = this["concave" + (i + 1)].hitTestPoint(t.stageX, t.stageY);
                n ? this["gaoliang" + (i + 1)].visible = !0 : this["gaoliang" + (i + 1)].visible = !1
            }
        },
        i.prototype.onEndDrag = function(e) {
            if (this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndDrag, this), this.isMoving && (this.attack.setChildIndex(this.targetIcon, this.curSortIndex), this.curSortIndex = 0, this.isMoving = !1), this.targetIcon.isOutside) return this.targetIcon.x = this.signsX[this.targetIcon.curPosition],
            this.targetIcon.y = this.signsY,
            void(this.targetIcon.isOutside = !1);
            for (var i = 0; i < this.signs.length; i++) {
                this["gaoliang" + (i + 1)].visible = !1;
                var n = this.signs[i];
                if (this.targetIcon.hashCode != this.signs[i].hashCode) {
                    var s = n.hitTestPoint(e.stageX, e.stageY);
                    if (s) {
                        var o = this.targetIcon.curPosition;
                        this.targetIcon.x = this.signsX[n.curPosition],
                        this.targetIcon.y = this.signsY,
                        this.targetIcon.curPosition = n.curPosition,
                        n.x = this.signsX[o],
                        n.y = this.signsY,
                        n.curPosition = o;
                        for (var r = [], u = 0; 3 > u; u++) {
                            var a = this.attack.getChildByName("icon" + u);
                            r[a.curPosition] = a.curIndex + 1
                        }
                        for (var _ = 100 * r[0] + 10 * r[1] + r[2], h = "", c = 0; c < t.PveNinjutsuClubConst.NinjutsuRecord.length; c++) {
                            var l = t.PveNinjutsuClubConst.NinjutsuRecord[c];
                            if (l.sort == _) {
                                h = l.NinjutsuName;
                                break
                            }
                        }
                        this.txt_renshu.text = "当前：" + h
                    } else this.targetIcon.x = this.signsX[this.targetIcon.curPosition],
                    this.targetIcon.y = this.signsY,
                    this.targetIcon.isOutside = !1
                }
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.isEnterResult || this.mainPanel.animPlay("inSide"),
            ImageButtonUtil.removeAll(this);
            for (var t = 0; 3 > t; t++) this.signs[t].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onHeadTouchBegin, this)
        },
        i
    } (PopView);
    t.PveNinjutsuClubAttackPop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubAttackPop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.curSecetIndex = 0,
            e.skinName = PveninjutsuclubPoptipsSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rbGroup = this.rb_1.group,
            this.curSecetIndex = this.rbGroup.selectedValue = this.rb_1.value,
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onchangeLeftBtn, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.showHelp()
        },
        e.prototype.onchangeLeftBtn = function() {
            this.curSecetIndex = ~~this.rbGroup.selectedValue,
            this.showHelp()
        },
        e.prototype.showHelp = function() {
            this.help1.visible = 1 == this.curSecetIndex,
            this.help2.visible = 2 == this.curSecetIndex
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onchangeLeftBtn, this)
        },
        e
    } (PopView);
    t.PveNinjutsuClubHelpPop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubHelpPop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.showPetsId = [2747, 2759, 2885, 2753, 3369],
            i.skinName = PveNinjutsuClubJieYinPopSkin,
            i.MainPanel = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.setData = function(t) {
            t && (this.MainPanel = t, this.initDat(), this.MainPanel.animPlay("outSide")),
            e.prototype.setData.call(this, t)
        },
        i.prototype.initDat = function() {
            for (var t = 1; 5 >= t; t++) this["petHead" + t].source = ClientConfig.getPetHeadPath(this.showPetsId[t - 1]),
            this["petName" + t].text = PetXMLInfo.getName(this.showPetsId[t - 1])
        },
        i.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                e.hide(),
                ModuleManager.showModule("petBag", ["petBag"], {
                    type: 1,
                    clsName: "pveNinjutsuClub.PveNinjutsuClubJieYinPop",
                    clsData: e.MainPanel
                })
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan,
            function() {
                e.hide();
                var i = 2 - e.MainPanel.service.getValue(t.PveNinjutsuClubConst.daily_chanllenge_time);
                return 0 >= i ? void Alarm.show("今日完成次数已达上限！") : (StatLogger.log("20220902版本系统功能", "忍法研习社", "开始挑战激活结印BOSS"), void FightManager.fightNoMapBoss(t.PveNinjutsuClubConst.Fight_Boss))
            },
            this)
        },
        i.prototype.destroy = function() {
            this.MainPanel.animPlay("inSide"),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveNinjutsuClubJieYinPop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubJieYinPop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveNinjutsuClub; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "pveNinjutsuClub.PveNinjutsuClubMainPanel",
        t.Fight_Boss = 18359,
        t.forever_win1_times = 123131,
        t.forever_win2_times = 123132,
        t.forever_total_times = 123133,
        t.daily_chanllenge_time = 202268,
        t.daily_boss_data = 202269,
        t.daily_renshu_index = 202270,
        t.daily_renshu_result = 202271,
        t.PveNinjutsuClub_CMD = 41802,
        t.NinjutsuRecord = [{
            id: 1,
            jieyinSort: "天 地 人",
            NinjutsuName: "四象封印",
            sort: 123
        },
        {
            id: 2,
            jieyinSort: "天 人 地",
            NinjutsuName: "影遁之术",
            sort: 132
        },
        {
            id: 3,
            jieyinSort: "地 天 人",
            NinjutsuName: "木遁之术",
            sort: 213
        },
        {
            id: 4,
            jieyinSort: "地 人 天",
            NinjutsuName: "水遁之术",
            sort: 231
        },
        {
            id: 5,
            jieyinSort: "人 天 地",
            NinjutsuName: "火遁之术",
            sort: 312
        },
        {
            id: 6,
            jieyinSort: "人 地 天",
            NinjutsuName: "土遁之术",
            sort: 321
        }],
        t.EffectState = ["克制", "微弱", "普通"],
        t
    } ();
    t.PveNinjutsuClubConst = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubConst")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.PopRecordSkin,
            n.infos = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.initDat = function() {
            this._list.itemRenderer = t.NinjusuRecordItem,
            this._list.dataProvider = new eui.ArrayCollection(this.infos)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveNinjutsuClubRecordPop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubRecordPop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i(i, n, s) {
            var o = e.call(this) || this;
            return o.animRenfaName = ["sixiangfenyin", "yingdun", "mudun", "shuidun", "huodun", "tudun"],
            o.animEffctName = ["kezhi", "weiruo", "putong"],
            o.skinName = t.PopResultSkin,
            o.resultNum = i,
            o.sortNumber = n,
            o.mainPanel = s,
            o
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat()
        },
        i.prototype.initDat = function() {
            var e = this;
            this.win.visible = 0 == this.resultNum,
            this.lose.visible = 0 != this.resultNum,
            this.kezhi.visible = 0 == this.resultNum,
            this.weiruo.visible = 1 == this.resultNum,
            this.putong.visible = 2 == this.resultNum,
            this.resultAnim = SpineUtil.createAnimate("renfa"),
            this.resultAnim1 = SpineUtil.createAnimate("zhuangtai"),
            this.addChild(this.resultAnim),
            this.addChild(this.resultAnim1),
            this.resultAnim.x = 564,
            this.resultAnim.y = 268,
            this.resultAnim1.x = 460,
            this.resultAnim1.y = 260;
            for (var i = [], n = 0, s = t.PveNinjutsuClubConst.NinjutsuRecord; n < s.length; n++) {
                var o = s[n];
                if (o.sort == this.sortNumber) {
                    i = o;
                    break
                }
            }
            this.grp_result.alpha = 0,
            this.resultAnim.touchChildren = this.resultAnim.touchEnabled = !1;
            this.resultAnim.play(this.animRenfaName[i.id - 1], 1, 0, {
                custom: function(t) {
                    "stop" == t.data.name ? (e.resultAnim.stop(0), e.resultAnim1.stopAll(), egret.Tween.get(e.grp_result).to({
                        alpha: 1
                    },
                    500, egret.Ease.quadOut), e.resultAnim.touchChildren = e.resultAnim.touchEnabled = !0, e.bgmask = LevelManager.tipLevel.getChildAt(0), e.bgmask.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onclose, e)) : (t.data.name = "zhunagtai") && e.resultAnim1.play(e.animEffctName[e.resultNum], 1)
                }
            })
        },
        i.prototype.onclose = function() {
            this.hide(),
            0 == this.resultNum && AwardManager.resume()
        },
        i.prototype.destroy = function() {
            this.bgmask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclose, this),
            e.prototype.destroy.call(this),
            this.mainPanel.animPlay("inSide"),
            0 == this.resultNum && this.dispatchEventWith("showBtnStart")
        },
        i
    } (PopView);
    t.PveNinjutsuClubResultPop = e,
    __reflect(e.prototype, "pveNinjutsuClub.PveNinjutsuClubResultPop")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = NinjusuAttackIconSkin,
            i.curIndex = e,
            i
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "curPosition", {
            get: function() {
                return this._curPosition
            },
            set: function(t) {
                this._curPosition = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "isOutside", {
            get: function() {
                return this._isOutside
            },
            set: function(t) {
                this._isOutside = t,
                this.jinzhi.visible = t,
                DisplayUtil.setEnabled(this.icon, !1, t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initData()
        },
        e.prototype.initData = function() {
            this.curPosition = this.curIndex,
            this.icon.source = "pnc_pop_attack_icon" + this.curIndex + "_png"
        },
        e.prototype.setOutside = function() {
            this.isOutside = !0
        },
        e.prototype.setInside = function() {
            this.isOutside = !1
        },
        e
    } (eui.Component);
    t.NinjusuAttackIcon = e,
    __reflect(e.prototype, "pveNinjutsuClub.NinjusuAttackIcon")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = NinjusuKaoHeItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        i.prototype.dataChanged = function() {
            var t = this;
            this.value = this.data,
            this.icon.source = "pnc_pop_kaohe_icon" + this.value.id + "_png",
            this.txtTaskInfo.text = this.value.txtInfo,
            this.txtProgress.text = this.value.value + "/" + this.value.progress,
            this.icon1.source = ClientConfig.getItemIcon(this.value.iconsID[0]),
            this.icon2.source = ClientConfig.getItemIcon(this.value.iconsID[1]),
            this._bar.maximum = this.value.progress,
            this._bar.minimum = 0,
            this._bar.value = this.value.value,
            this.iconNum1.text = this.value.iconNum[0],
            this.iconNum2.text = this.value.iconNum[1],
            ImageButtonUtil.add(this.icon1,
            function() {
                var e = {};
                e.id = t.value.iconsID[0],
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                var e = {};
                e.id = t.value.iconsID[1],
                tipsPop.TipsPop.openItemPop(e)
            },
            this);
            var e = this.value.value >= this.value.progress;
            DisplayUtil.setEnabled(this.lingqu, e, !e),
            this.yilingqu.visible = this.value.hasGet,
            this.lingqu.visible = !this.value.hasGet
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.lingqu,
            function() {
                e.value.hasGet || SocketConnection.sendByQueue(t.PveNinjutsuClubConst.PveNinjutsuClub_CMD, [1, 4, e.value.id],
                function() {
                    EventManager.dispatchEventWith("GetKaoHeReward")
                })
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.NinjusuKaoHeItem = e,
    __reflect(e.prototype, "pveNinjutsuClub.NinjusuKaoHeItem")
} (pveNinjutsuClub || (pveNinjutsuClub = {}));
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
pveNinjutsuClub; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = NinjusuRecordItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            if (null != this.data) if (0 == this.data.value) this.order.text = "",
            this.attackName.text = "",
            this.effect.text = "";
            else {
                var e = t.PveNinjutsuClubConst.NinjutsuRecord[this.data.value - 1];
                this.order.text = e.jieyinSort,
                this.attackName.text = e.NinjutsuName,
                this.effect.text = t.PveNinjutsuClubConst.EffectState[this.data.result]
            }
        },
        i
    } (eui.ItemRenderer);
    t.NinjusuRecordItem = e,
    __reflect(e.prototype, "pveNinjutsuClub.NinjusuRecordItem")
} (pveNinjutsuClub || (pveNinjutsuClub = {})),
window.pveNinjutsuClub = window.pveNinjutsuClub || {};
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
generateEUI.paths["resource/eui_skins/itemRender/NinjusuAttackIconSkin.exml"] = window.NinjusuAttackIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "jinzhi"],
        this.height = 143,
        this.width = 143,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.icon_i(), this.jinzhi_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pnc_pop_attack_icon2_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.jinzhi_i = function() {
        var t = new eui.Image;
        return this.jinzhi = t,
        t.source = "pnc_pop_attack_jinzhi_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/NinjusuKaoHeItemSkin.exml"] = window.NinjusuKaoHeItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtTaskInfo", "_bar", "txtProgress", "jindude", "jindu", "icon1", "iconNum1", "icon2", "iconNum2", "yilingqu", "lingqu", "item"],
        this.height = 76,
        this.width = 712,
        this.elementsContent = [this.item_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "pnc_pop_kaohe_jindude_png",
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "pnc_pop_kaohe_jindu_png",
            t.visible = !0,
            t.x = -5,
            t.y = -6,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.elementsContent = [this._Image1_i(), this.icon_i(), this.txtTaskInfo_i(), this._bar_i(), this.txtProgress_i(), this.jindude_i(), this.jindu_i(), this._Image2_i(), this.icon1_i(), this.iconNum1_i(), this._Image3_i(), this.icon2_i(), this.iconNum2_i(), this._Image4_i(), this.yilingqu_i(), this.lingqu_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_kaohe_lan_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pnc_pop_kaohe_icon1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtTaskInfo_i = function() {
        var t = new eui.Label;
        return this.txtTaskInfo = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "使用影遁之术击败忍王",
        t.textColor = 16777215,
        t.x = 107,
        t.y = 17,
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 12,
        t.width = 171,
        t.x = 107,
        t.y = 46,
        t.skinName = i,
        t
    },
    n.txtProgress_i = function() {
        var t = new eui.Label;
        return this.txtProgress = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3/3",
        t.textColor = 7461887,
        t.x = 282,
        t.y = 43,
        t
    },
    n.jindude_i = function() {
        var t = new eui.Image;
        return this.jindude = t,
        t.source = "pnc_pop_kaohe_jindude_png",
        t.visible = !1,
        t.x = 107,
        t.y = 46,
        t
    },
    n.jindu_i = function() {
        var t = new eui.Image;
        return this.jindu = t,
        t.source = "pnc_pop_kaohe_jindu_png",
        t.visible = !1,
        t.x = 103,
        t.y = 39,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_kaohe_djk__png",
        t.visible = !0,
        t.x = 398,
        t.y = 6,
        t
    },
    n.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 40,
        t.visible = !0,
        t.width = 40,
        t.x = 409,
        t.y = 17,
        t
    },
    n.iconNum1_i = function() {
        var t = new eui.Label;
        return this.iconNum1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "3",
        t.textAlign = "right",
        t.textColor = 7461887,
        t.width = 32,
        t.x = 426,
        t.y = 50,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_kaohe_djk__png",
        t.x = 467,
        t.y = 6,
        t
    },
    n.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 40,
        t.width = 40,
        t.x = 478,
        t.y = 17,
        t
    },
    n.iconNum2_i = function() {
        var t = new eui.Label;
        return this.iconNum2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "300",
        t.textAlign = "right",
        t.textColor = 7461887,
        t.width = 32,
        t.x = 495,
        t.y = 50,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_kaohe_line2_png",
        t.x = 541,
        t.y = 5,
        t
    },
    n.yilingqu_i = function() {
        var t = new eui.Image;
        return this.yilingqu = t,
        t.source = "pnc_pop_kaohe_yilingqu_png",
        t.x = 598,
        t.y = 28,
        t
    },
    n.lingqu_i = function() {
        var t = new eui.Image;
        return this.lingqu = t,
        t.source = "pnc_pop_kaohe_lingqu_png",
        t.visible = !0,
        t.x = 560,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/NinjusuRecordItemSkin.exml"] = window.NinjusuRecordItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["order", "attackName", "effect"],
        this.height = 20,
        this.width = 393,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this.order_i(), this.attackName_i(), this.effect_i()],
        t
    },
    i.order_i = function() {
        var t = new eui.Label;
        return this.order = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "悟 隐 舍",
        t.textColor = 6654415,
        t.x = 0,
        t.y = 0,
        t
    },
    i.attackName_i = function() {
        var t = new eui.Label;
        return this.attackName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "四象封印",
        t.textColor = 6654415,
        t.x = 172,
        t.y = 0,
        t
    },
    i.effect_i = function() {
        var t = new eui.Label;
        return this.effect = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "普通",
        t.textColor = 6654415,
        t.x = 357,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PopAttackSkin.exml"] = window.pveNinjutsuClub.PopAttackSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnTiaozhan", "btnJilu", "txt_renshu", "concave3", "concave2", "concave1", "gaoliang1", "gaoliang2", "gaoliang3", "attack"],
        this.height = 278,
        this.width = 1136,
        this.elementsContent = [this.attack_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.attack_i = function() {
        var t = new eui.Group;
        return this.attack = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.btnTiaozhan_i(), this.btnJilu_i(), this._Image1_i(), this._Label1_i(), this.txt_renshu_i(), this.concave3_i(), this.concave2_i(), this.concave1_i(), this.gaoliang1_i(), this.gaoliang2_i(), this.gaoliang3_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "pnc_pop_record_hengtiao_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "pnc_pop_attack_btntiaozhan_png",
        t.x = 924,
        t.y = 180,
        t
    },
    i.btnJilu_i = function() {
        var t = new eui.Image;
        return this.btnJilu = t,
        t.source = "pnc_pop_attack_btnjilu_png",
        t.x = 924,
        t.y = 111,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_attack_jygj_png",
        t.x = 502,
        t.y = 3,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "移动并替换结印位置，发起忍术进行攻击",
        t.textColor = 6654160,
        t.x = 390,
        t.y = 49,
        t
    },
    i.txt_renshu_i = function() {
        var t = new eui.Label;
        return this.txt_renshu = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "当前：四象封印",
        t.textColor = 6654160,
        t.x = 920,
        t.y = 230,
        t
    },
    i.concave3_i = function() {
        var t = new eui.Image;
        return this.concave3 = t,
        t.source = "pnc_pop_attack_dekuang_png",
        t.visible = !0,
        t.x = 710,
        t.y = 84,
        t
    },
    i.concave2_i = function() {
        var t = new eui.Image;
        return this.concave2 = t,
        t.source = "pnc_pop_attack_dekuang_png",
        t.x = 485,
        t.y = 84,
        t
    },
    i.concave1_i = function() {
        var t = new eui.Image;
        return this.concave1 = t,
        t.source = "pnc_pop_attack_dekuang_png",
        t.visible = !0,
        t.x = 260,
        t.y = 84,
        t
    },
    i.gaoliang1_i = function() {
        var t = new eui.Image;
        return this.gaoliang1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pnc_pop_attack_dkguang_png",
        t.visible = !1,
        t.x = 246,
        t.y = 68,
        t
    },
    i.gaoliang2_i = function() {
        var t = new eui.Image;
        return this.gaoliang2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pnc_pop_attack_dkguang_png",
        t.visible = !1,
        t.x = 470,
        t.y = 68,
        t
    },
    i.gaoliang3_i = function() {
        var t = new eui.Image;
        return this.gaoliang3 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pnc_pop_attack_dkguang_png",
        t.visible = !1,
        t.x = 697,
        t.y = 68,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PopKaoheSkin.exml"] = window.pveNinjutsuClub.PopKaoheSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "_scorl", "kaohe"],
        this.height = 499,
        this.width = 764,
        this.elementsContent = [this.kaohe_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.kaohe_i = function() {
        var t = new eui.Group;
        return this.kaohe = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this._scorl_i(), this._Image1_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "pnc_pop_kaohe_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 346,
        t.width = 712,
        t.x = 29,
        t.y = 63,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 25,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_kaohe_tips_png",
        t.x = 261,
        t.y = 455,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PopRecordSkin.exml"] = window.pveNinjutsuClub.PopRecordSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "_list", "_scorl", "record"],
        this.height = 278,
        this.width = 1136,
        this.elementsContent = [this.record_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.record_i = function() {
        var t = new eui.Group;
        return this.record = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Image2_i(), this._Label1_i(), this._Image3_i(), this._Image4_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._scorl_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_record_hengtiao_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "pnc_pop_record_btnclose_png",
        t.x = 924,
        t.y = 180,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_record_gongjijilu_png",
        t.x = 507,
        t.y = 8,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "仅保留本轮前五条忍术攻击信息",
        t.textColor = 6654160,
        t.x = 431,
        t.y = 49,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 182,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "pnc_pop_record_txtbg_png",
        t.width = 560,
        t.x = 290,
        t.y = 76,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_record_line_png",
        t.x = 300,
        t.y = 108,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "结印顺序",
        t.textColor = 15849635,
        t.x = 357,
        t.y = 83,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "发动忍术",
        t.textColor = 15849635,
        t.x = 534,
        t.y = 82,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "BOSS状态",
        t.textColor = 15849635,
        t.x = 701,
        t.y = 83,
        t
    },
    i._scorl_i = function() {
        var t = new eui.Scroller;
        return this._scorl = t,
        t.height = 140,
        t.width = 420,
        t.x = 362,
        t.y = 117,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PopResultSkin.exml"] = window.pveNinjutsuClub.PopResultSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["putong", "kezhi", "weiruo", "win", "lose", "ani", "grp_result"],
        this.height = 456,
        this.width = 1136,
        this.elementsContent = [this.grp_result_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_result_i = function() {
        var t = new eui.Group;
        return this.grp_result = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.ani_i()],
        t
    },
    i.ani_i = function() {
        var t = new eui.Group;
        return this.ani = t,
        t.x = 581,
        t.y = 339,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.putong_i(), this.kezhi_i(), this.weiruo_i(), this.win_i(), this.lose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 38,
        t.source = "pnc_pop_result_tuceng_png",
        t.width = 516,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 24,
        t.source = "pnc_pop_result_txt_png",
        t.width = 411,
        t.x = 46,
        t.y = 6,
        t
    },
    i.putong_i = function() {
        var t = new eui.Label;
        return this.putong = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "普通",
        t.textColor = 15200255,
        t.x = 302,
        t.y = 8,
        t
    },
    i.kezhi_i = function() {
        var t = new eui.Label;
        return this.kezhi = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "克制",
        t.textColor = 16735287,
        t.x = 303,
        t.y = 9,
        t
    },
    i.weiruo_i = function() {
        var t = new eui.Label;
        return this.weiruo = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "微弱",
        t.textColor = 6278399,
        t.x = 302,
        t.y = 9,
        t
    },
    i.win_i = function() {
        var t = new eui.Label;
        return this.win = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "挑战成功",
        t.textColor = 16514895,
        t.x = 368,
        t.y = 9,
        t
    },
    i.lose_i = function() {
        var t = new eui.Label;
        return this.lose = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "挑战失败",
        t.textColor = 6388143,
        t.x = 368,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveNinjutsuClubJieYinPopSkin.exml"] = window.PveNinjutsuClubJieYinPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petHead1", "petName1", "pet1", "petHead2", "petName2", "pet2", "petHead3", "petName3", "pet3", "petHead4", "petName4", "pet4", "petHead5", "petName5", "pet5", "btnTiaozhan", "btnPet", "btnCure"],
        this.height = 278,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnTiaozhan_i(), this._Image7_i(), this._Label1_i(), this.btnPet_i(), this.btnCure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_record_hengtiao_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 334,
        t.y = 111,
        t.elementsContent = [this.pet1_i(), this.pet2_i(), this.pet3_i(), this.pet4_i(), this.pet5_i()],
        t
    },
    i.pet1_i = function() {
        var t = new eui.Group;
        return this.pet1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.petHead1_i(), this.petName1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_petbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.petHead1_i = function() {
        var t = new eui.Image;
        return this.petHead1 = t,
        t.height = 68,
        t.source = "",
        t.width = 68,
        t.x = 3,
        t.y = 2,
        t
    },
    i.petName1_i = function() {
        var t = new eui.Label;
        return this.petName1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 78,
        t
    },
    i.pet2_i = function() {
        var t = new eui.Group;
        return this.pet2 = t,
        t.x = 99,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.petHead2_i(), this.petName2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_petbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.petHead2_i = function() {
        var t = new eui.Image;
        return this.petHead2 = t,
        t.height = 68,
        t.source = "",
        t.width = 68,
        t.x = 3,
        t.y = 2,
        t
    },
    i.petName2_i = function() {
        var t = new eui.Label;
        return this.petName2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 78,
        t
    },
    i.pet3_i = function() {
        var t = new eui.Group;
        return this.pet3 = t,
        t.x = 199,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.petHead3_i(), this.petName3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_petbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.petHead3_i = function() {
        var t = new eui.Image;
        return this.petHead3 = t,
        t.height = 68,
        t.source = "",
        t.width = 68,
        t.x = 3,
        t.y = 2,
        t
    },
    i.petName3_i = function() {
        var t = new eui.Label;
        return this.petName3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 78,
        t
    },
    i.pet4_i = function() {
        var t = new eui.Group;
        return this.pet4 = t,
        t.x = 298,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this.petHead4_i(), this.petName4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_petbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.petHead4_i = function() {
        var t = new eui.Image;
        return this.petHead4 = t,
        t.height = 68,
        t.source = "",
        t.width = 68,
        t.x = 3,
        t.y = 2,
        t
    },
    i.petName4_i = function() {
        var t = new eui.Label;
        return this.petName4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 78,
        t
    },
    i.pet5_i = function() {
        var t = new eui.Group;
        return this.pet5 = t,
        t.x = 397,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.petHead5_i(), this.petName5_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_petbg_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.petHead5_i = function() {
        var t = new eui.Image;
        return this.petHead5 = t,
        t.height = 68,
        t.source = "",
        t.width = 68,
        t.x = 3,
        t.y = 2,
        t
    },
    i.petName5_i = function() {
        var t = new eui.Label;
        return this.petName5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "精灵名称",
        t.textColor = 12834813,
        t.x = 0,
        t.y = 78,
        t
    },
    i.btnTiaozhan_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan = t,
        t.source = "pnc_pop_btntiaozhan_png",
        t.x = 924,
        t.y = 180,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_pop_jhjy_png",
        t.x = 508,
        t.y = 7,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "多精灵对战击败5个忍者即可激活结印",
        t.textColor = 6654160,
        t.x = 407,
        t.y = 49,
        t
    },
    i.btnPet_i = function() {
        var t = new eui.Image;
        return this.btnPet = t,
        t.source = "pnc_pop_btnpet_png",
        t.x = 36,
        t.y = 81,
        t
    },
    i.btnCure_i = function() {
        var t = new eui.Image;
        return this.btnCure = t,
        t.source = "pnc_pop_btncure_png",
        t.x = 36,
        t.y = 156,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/PveninjutsuclubPoptipsSkin.exml"] = window.PveninjutsuclubPoptipsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "rb_1", "rb_2", "left", "help1", "help2", "helpPop"],
        this.height = 550,
        this.width = 1005,
        this.elementsContent = [this.helpPop_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", ""), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveNinjutsuClub_popTips_xuanzhong_png"), new eui.SetProperty("_Label1", "y", 23)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 63,
            t.width = 171,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 20,
            t.text = "基础说明",
            t.textColor = 15857151,
            t.visible = !0,
            t.x = 45,
            t.y = 23,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.fillAlpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", ""), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "pveNinjutsuClub_popTips_xuanzhong_png"), new eui.SetProperty("_Label1", "y", 23)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 63,
            t.width = 171,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 20,
            t.text = "忍术详情",
            t.textColor = 15857151,
            t.visible = !0,
            t.x = 45,
            t.y = 23,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.fillAlpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.helpPop_i = function() {
        var t = new eui.Group;
        return this.helpPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i(), this.left_i(), this.help1_i(), this.help2_i()],
        t
    },
    s._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.source = "common_s9_pop_bg4_png",
        t.width = 998,
        t.x = 6,
        t.y = 3,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "common_pop_up_bg_huge_png",
        t.visible = !0,
        t.width = 1005,
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 962,
        t.y = 3,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "pveNinjutsuClub_popTips_rfyxsgl_png",
        t.width = 174,
        t.x = 42,
        t.y = 5,
        t
    },
    s.left_i = function() {
        var t = new eui.Group;
        return this.left = t,
        t.x = 6,
        t.y = 36,
        t.elementsContent = [this._Image4_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 508,
        t.source = "pveNinjutsuClub_popTips_leftbg_png",
        t.width = 418,
        t.x = 0,
        t.y = 0,
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "rbleft",
        t.height = 63,
        t.value = "1",
        t.visible = !0,
        t.width = 171,
        t.y = 10,
        t.skinName = i,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "rbleft",
        t.height = 63,
        t.value = "2",
        t.visible = !0,
        t.width = 171,
        t.y = 74,
        t.skinName = n,
        t
    },
    s.help1_i = function() {
        var t = new eui.Group;
        return this.help1 = t,
        t.visible = !0,
        t.x = 193,
        t.y = 51,
        t.elementsContent = [this._Image5_i(), this._Label1_i(), this._Label2_i()],
        t
    },
    s._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "pveNinjutsuClub_popTips_jx_22_kb_2_png",
        t.width = 787,
        t.x = 0,
        t.y = 31,
        t
    },
    s._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "基础说明",
        t.textColor = 12111615,
        t.x = 354,
        t.y = 0,
        t
    },
    s._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "1.开启时间：\n每周五、周六、周日开放，开放期间每日最多可完成2次研习。\n\n2.通关要求：\n每次开启忍法研习社后，忍王会在普通、影、木、水、火、土6个属性中随机生成1个属性（直至通关后重新刷新属性），玩家需要推测并使用正确的忍术以达成克制忍王当前属性的情况，若攻击为克制状态则通关，若攻击为普通或微弱状态则需重新激活结印并发起攻击。\n\n3.关卡流程\n①战胜忍者全部精灵并激活结印；\n②移动并替换结印位置，调出设想的结印顺序并发起攻击；\n③查看本次忍法攻击结果\n\n4.忍法考核中含有忍法研习社的考核要求，达成目标即可领取奖励。",
        t.textColor = 6258105,
        t.width = 760,
        t.x = 6,
        t.y = 45,
        t
    },
    s.help2_i = function() {
        var t = new eui.Image;
        return this.help2 = t,
        t.height = 425,
        t.source = "pveNinjutsuClub_popTips_2_png",
        t.visible = !0,
        t.width = 759,
        t.x = 207,
        t.y = 68,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveNinjutsuClubMainSkin.exml"] = window.pveNinjutsuClub.MainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grpBg", "leftDi", "icon_1", "iconName_1", "iconNum_1", "icon_2", "iconName_2", "iconNum_2", "icon_3", "iconName_3", "iconNum_3", "icon_4", "iconName_4", "iconNum_4", "icons", "grp_left", "img", "rightDi", "btnKaohe", "btnSaodang", "btnStart", "btnContinue", "group_rightAni", "grp_right", "txtSignetNum", "imgItem1", "item1", "txtSignetNum3", "imgItem3", "item3", "txtTime", "item2"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpBg_i(), this.grp_left_i(), this.grp_right_i(), this._Group5_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpBg_i = function() {
        var t = new eui.Group;
        return this.grpBg = t,
        t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this._Rect1_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "pnc_main_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillAlpha = 0,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_left_i = function() {
        var t = new eui.Group;
        return this.grp_left = t,
        t.visible = !0,
        t.x = 0,
        t.y = 469,
        t.elementsContent = [this.leftDi_i(), this.icons_i()],
        t
    },
    i.leftDi_i = function() {
        var t = new eui.Image;
        return this.leftDi = t,
        t.horizontalCenter = 0,
        t.source = "pnc_main_leftdi_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.icons_i = function() {
        var t = new eui.Group;
        return this.icons = t,
        t.x = 21,
        t.y = 56,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_tgjl_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 52,
        t.y = 2,
        t.elementsContent = [this._Image2_i(), this.icon_1_i(), this.iconName_1_i(), this.iconNum_1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_la_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 10,
        t.y = 8,
        t
    },
    i.iconName_1_i = function() {
        var t = new eui.Label;
        return this.iconName_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "奖励道具",
        t.textColor = 9157375,
        t.x = 0,
        t.y = 78,
        t
    },
    i.iconNum_1_i = function() {
        var t = new eui.Label;
        return this.iconNum_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "10",
        t.textAlign = "right",
        t.textColor = 9157375,
        t.width = 35,
        t.x = 36,
        t.y = 55,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 142,
        t.y = 2,
        t.elementsContent = [this._Image3_i(), this.icon_2_i(), this.iconName_2_i(), this.iconNum_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_la_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 10,
        t.y = 8,
        t
    },
    i.iconName_2_i = function() {
        var t = new eui.Label;
        return this.iconName_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "奖励道具",
        t.textColor = 9157375,
        t.x = 0,
        t.y = 78,
        t
    },
    i.iconNum_2_i = function() {
        var t = new eui.Label;
        return this.iconNum_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "10",
        t.textAlign = "right",
        t.textColor = 9157375,
        t.width = 35,
        t.x = 36,
        t.y = 55,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 233,
        t.y = 2,
        t.elementsContent = [this._Image4_i(), this.icon_3_i(), this.iconName_3_i(), this.iconNum_3_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_la_png",
        t.x = 1,
        t.y = 0,
        t
    },
    i.icon_3_i = function() {
        var t = new eui.Image;
        return this.icon_3 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 10,
        t.y = 8,
        t
    },
    i.iconName_3_i = function() {
        var t = new eui.Label;
        return this.iconName_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "奖励道具",
        t.textColor = 9157375,
        t.x = 0,
        t.y = 78,
        t
    },
    i.iconNum_3_i = function() {
        var t = new eui.Label;
        return this.iconNum_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "10",
        t.textAlign = "right",
        t.textColor = 9157375,
        t.width = 35,
        t.x = 36,
        t.y = 55,
        t
    },
    i._Group4_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 323,
        t.y = 2,
        t.elementsContent = [this._Image5_i(), this.icon_4_i(), this.iconName_4_i(), this.iconNum_4_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_la_png",
        t.x = 2,
        t.y = 0,
        t
    },
    i.icon_4_i = function() {
        var t = new eui.Image;
        return this.icon_4 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 10,
        t.y = 8,
        t
    },
    i.iconName_4_i = function() {
        var t = new eui.Label;
        return this.iconName_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "奖励奖励",
        t.textColor = 9157375,
        t.x = 0,
        t.y = 78,
        t
    },
    i.iconNum_4_i = function() {
        var t = new eui.Label;
        return this.iconNum_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "10",
        t.textAlign = "right",
        t.textColor = 9157375,
        t.width = 35,
        t.x = 36,
        t.y = 55,
        t
    },
    i.grp_right_i = function() {
        var t = new eui.Group;
        return this.grp_right = t,
        t.right = -1,
        t.visible = !0,
        t.width = 400,
        t.y = 421,
        t.elementsContent = [this.group_rightAni_i()],
        t
    },
    i.group_rightAni_i = function() {
        var t = new eui.Group;
        return this.group_rightAni = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.img_i(), this.rightDi_i(), this.btnKaohe_i(), this.btnSaodang_i(), this.btnStart_i(), this.btnContinue_i()],
        t
    },
    i.img_i = function() {
        var t = new eui.Image;
        return this.img = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pnc_main_img_png",
        t.visible = !0,
        t.x = 306,
        t.y = 67,
        t
    },
    i.rightDi_i = function() {
        var t = new eui.Image;
        return this.rightDi = t,
        t.source = "pnc_main_rightdi_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnKaohe_i = function() {
        var t = new eui.Image;
        return this.btnKaohe = t,
        t.source = "pnc_main_btnkaohe_png",
        t.x = 23,
        t.y = 137,
        t
    },
    i.btnSaodang_i = function() {
        var t = new eui.Image;
        return this.btnSaodang = t,
        t.source = "pnc_main_btnsaodang_png",
        t.x = 101,
        t.y = 137,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "pnc_main_btnstart_png",
        t.x = 195,
        t.y = 34,
        t
    },
    i.btnContinue_i = function() {
        var t = new eui.Image;
        return this.btnContinue = t,
        t.source = "pnc_main_btnContinue_png",
        t.x = 195,
        t.y = 34,
        t
    },
    i._Group5_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 698,
        t.y = 11,
        t.elementsContent = [this.item1_i(), this.item3_i(), this.item2_i()],
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 219,
        t.y = 0,
        t.elementsContent = [this._Image6_i(), this.txtSignetNum_i(), this.imgItem1_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_img_di2_png",
        t.width = 83,
        t.x = 105,
        t.y = 7,
        t
    },
    i.txtSignetNum_i = function() {
        var t = new eui.Label;
        return this.txtSignetNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 136,
        t.y = 7,
        t
    },
    i.imgItem1_i = function() {
        var t = new eui.Image;
        return this.imgItem1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 94,
        t.y = 3,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 95,
        t.y = 0,
        t.elementsContent = [this._Image7_i(), this.txtSignetNum3_i(), this.imgItem3_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_img_di2_png",
        t.width = 83,
        t.x = 105,
        t.y = 7,
        t
    },
    i.txtSignetNum3_i = function() {
        var t = new eui.Label;
        return this.txtSignetNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 136,
        t.y = 7,
        t
    },
    i.imgItem3_i = function() {
        var t = new eui.Image;
        return this.imgItem3 = t,
        t.height = 30,
        t.width = 30,
        t.x = 94,
        t.y = 3,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.x = -19,
        t.y = 7,
        t.elementsContent = [this._Image8_i(), this.txtTime_i(), this._Label1_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "pnc_main_img_di2_png",
        t.width = 183,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 133,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0101510119682,
        t.text = "今日完成次数：",
        t.textColor = 12834813,
        t.x = 14,
        t.y = 1,
        t
    },
    e
} (eui.Skin);