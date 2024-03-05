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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            void 0 === n && (n = 0);
            var a = e.call(this) || this;
            return a.allGxPets = [],
            a.showCoinArr = [1725115, 1722506],
            a._curTab = i,
            a.skinName = t.pveSptMallSkin,
            a._curClidTab = n > 0 ? n: 1,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._scrol.viewport = this._list,
            this._layout = this._list.layout,
            this.curTab = this._curTab,
            this.initView(),
            this.addEvent(),
            this.adaptRightContent(this.topRight),
            this.adaptLeftContent(this._scrol),
            this.adaptLeftContent(this.rb),
            this.adaptLeftContent(this.gr_rb_Item),
            this.icon.source = ClientConfig.getItemIcon(this.showCoinArr[0]),
            this.icon0.source = ClientConfig.getItemIcon(this.showCoinArr[1])
        },
        Object.defineProperty(i.prototype, "curTab", {
            get: function() {
                return this._curTab
            },
            set: function(t) {
                this._curTab = t,
                3 == this._curTab ? (this.rbGroup = this.rb_Item_1.group, this.rbGroup.selectedValue = this._curClidTab) : 4 == this._curTab ? (this.rbGroup = this.rb_1.group, this.rbGroup.selectedValue = this._curClidTab) : (this.rbGroup = this.rb_1.group, this.rbGroup.selectedValue = this._curClidTab),
                this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
                this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangeTab, this)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.initView = function(t, e) {
            switch (void 0 === e && (e = 0), void 0 != t && (this.curTab = t), e > 0 && (this._curClidTab = e, this.rbGroup.selectedValue = this._curClidTab), this.rb.visible = 4 == this.curTab, this.gr_rb_Item.visible = 3 == this.curTab, this.curTab) {
            case 1:
                this.initCase1();
                break;
            case 2:
                this.initCase2();
                break;
            case 3:
                this.initCase3();
                break;
            case 4:
                this.initCase4();
                break;
            case 5:
                this.initCase5();
                break;
            case 6:
                this.initCase6()
            }
        },
        i.prototype.initCase1 = function() {
            var e = this;
            this.curTab = 1,
            this._list.dataProvider && this._list.dataProvider.removeAll(),
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._layout.verticalGap = 13,
            this._layout.requestedColumnCount = 5,
            this._layout.columnAlign = "justifyUsingWidth",
            this._list.itemRenderer = t.pveSptMallPetItem,
            this.allGxPets = t.DataConfigManager.getInstance().getAllSptPetIds();
            for (var i = [], n = [], a = [], s = [], r = [], o = [], _ = [], h = [], u = {},
            c = 0; c < this.allGxPets.length; c++) {
                var l = t.DataConfigManager.getInstance().getInfoById(this.allGxPets[c]); - 1 == n.indexOf(l.UserInfoId) && n.push(l.UserInfoId),
                -1 == _.indexOf(l.coinid) && _.push(l.coinid),
                -1 == o.indexOf(l.realid) && o.push(l.realid),
                l.BitSetId && -1 == s.indexOf(l.BitSetId) && s.push(l.BitSetId)
            }
            ItemManager.updateItems(_,
            function() {
                h = new Array;
                for (var t = 0; t < _.length; t++) {
                    var e = ItemManager.getNumByID(_[t]);
                    h.push(e)
                }
            }),
            KTool.getMultiValue(n,
            function(_) {
                a = _,
                e.touchChildren = e.touchEnabled = !0,
                KTool.getBitSet(s,
                function(_) {
                    r = _,
                    PetManager.checkMultiPet(o,
                    function(_) {
                        for (var h in o) u[o[h]] = _[h];
                        for (var c = 0; c < e.allGxPets.length; c++) {
                            var l = t.DataConfigManager.getInstance().getInfoById(e.allGxPets[c]),
                            p = {};
                            p.info = l;
                            var g = n.indexOf(l.UserInfoId);
                            BitUtil.getBit(a[g], l.UserInfoBitPos - 1) > 0 ? (p.isGet = !0, p.isCanGet = !1) : l.isjustone && u[l.realid] ? (p.isGet = !0, p.isCanGet = !1) : l.BitSetId && r[s.indexOf(l.BitSetId)] ? (p.isGet = !0, p.isCanGet = !1) : p.isCanGet = ItemManager.getNumByID(l.coinid) >= l.price ? !0 : !1,
                            i.push(p)
                        }
                        i.sort(function(t, e) {
                            return~~t.isGet - ~~e.isGet
                        }),
                        e._list.dataProvider = new eui.ArrayCollection(i)
                    })
                })
            }),
            this.update()
        },
        i.prototype.initCase2 = function() {
            var e = this;
            this.curTab = 2,
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6;
            for (var i, n, a = t.DataConfigManager.getInstance().getAllSptAchieveIds(), s = [], r = 0; r < a.length; r++) {
                var o = {};
                o.info = a[r],
                o.id = this.curTab,
                i = Math.floor(o.info.realid / 100),
                n = o.info.realid % 100;
                var _ = AchieveManager.getAwardMask(i, n);
                _ ? o.isGet = !!_.rule_mask: o.isGet = !1,
                s.push(o)
            }
            s.sort(function(t, e) {
                return~~t.isGet - ~~e.isGet
            }),
            this._list.itemRenderer = t.pveSptMallItem,
            egret.setTimeout(function() {
                e._list.dataProvider = new eui.ArrayCollection(s)
            },
            this, 50),
            this.update()
        },
        i.prototype.initCase3 = function() {
            var e = this;
            this.curTab = 3;
            var i, n = [];
            i = 1 == this._curClidTab ? t.DataConfigManager.getInstance().getAllSptItemIds() : t.DataConfigManager.getInstance().getAllSptItem2Ids(),
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6;
            for (var a = [], s = [], r = 0; r < i.length; r++) {
                var o = t.DataConfigManager.getInstance().getInfoById(i[r]); - 1 == a.indexOf(o.UserInfoId) && a.push(o.UserInfoId)
            }
            KTool.getMultiValue(a,
            function(r) {
                s = r;
                for (var o = 0; o < i.length; o++) {
                    var _ = {};
                    _.info = t.DataConfigManager.getInstance().getInfoById(i[o]);
                    var h = a.indexOf(_.info.UserInfoId);
                    if (_.info.Limittype) {
                        var u;
                        _.info.UserInfoBitPos ? u = KTool.getBit(_.info.userInfoId, _.info.UserInfoBitPos) : (u = s[h], _.itemNum = u),
                        u >= _.info.LimitCnt && (_.isGet = !0, _.isCanGet = !1)
                    } else _.isGet = !1,
                    _.isCanGet = !0;
                    _.id = e.curTab,
                    n.push(_)
                }
                e._list.itemRenderer = t.pveSptMallItem,
                e._list.dataProvider = new eui.ArrayCollection(n),
                e._layout.verticalGap = 6,
                e._layout.requestedColumnCount = 6,
                e.update()
            })
        },
        i.prototype.initCase4 = function() {
            var e = this;
            this.curTab = 4,
            this._list.dataProvider && this._list.dataProvider.removeAll(),
            this._list.itemRenderer = t.pveSptMallItem,
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6;
            for (var i = [], n = t.DataConfigManager.getInstance().getAllSptPowerIds(), a = [], s = [], r = [], o = [], _ = 0, h = n; _ < h.length; _++) {
                var u = h[_];
                a.push(u.BitSetId)
            }
            KTool.getBitSet(a,
            function(t) {
                for (var a in t) t[a] ? r.push(n[a]) : s.push(n[a]);
                o = s.concat(r);
                for (var a = 0; a < o.length; a++) {
                    var _ = {};
                    _.info = o[a],
                    _.id = e.curTab,
                    i.push(_)
                }
                var h = 0;
                switch (e._curClidTab) {
                case 1:
                    h = 2;
                    break;
                case 2:
                    h = 7;
                    break;
                case 3:
                    h = 6
                }
                i = i.filter(function(t) {
                    return t.info.type == h
                });
                var u = 6 - i.length;
                if (u > 0) for (var a = 0; u > a; a++) i.push(null);
                e._list.dataProvider = new eui.ArrayCollection(i)
            }),
            this.update()
        },
        i.prototype.initCase5 = function() {
            this.curTab = 5,
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6;
            var e = t.DataConfigManager.getInstance().getAllSptHeadIds(),
            i = [],
            n = [],
            a = [],
            s = [];
            this._list.itemRenderer = t.pveSptMallItem;
            for (var r = 0,
            o = e; r < o.length; r++) {
                var _ = o[r];
                8 == _.type ? core.AvatarDataMgr.GetInstance().GetHeadDataById(_.realid) ? n.push(_) : a.push(_) : core.AvatarDataMgr.GetInstance().GetHeadFrameDataById(_.realid) ? n.push(_) : a.push(_)
            }
            s = a.concat(n);
            for (var h = 0; h < s.length; h++) {
                var _ = {};
                _.info = s[h],
                _.id = this.curTab,
                i.push(_)
            }
            this._list.dataProvider = new eui.ArrayCollection(i),
            this.update()
        },
        i.prototype.initCase6 = function() {
            this.curTab = 6,
            this._scrol.viewport.scrollV = 0,
            this._scrol.stopAnimation(),
            this._scrol.validateNow(),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6;
            for (var e = t.DataConfigManager.getInstance().getAllCultureItemsIds(13), i = [], n = 0; n < e.length; n++) {
                var a = {};
                a.info = e[n],
                a.id = this.curTab,
                i.push(a)
            }
            this._list.itemRenderer = t.pveSptMallItem,
            this._list.dataProvider = new eui.ArrayCollection(i),
            this._layout.verticalGap = 6,
            this._layout.requestedColumnCount = 6,
            this.txtCoinNum.text = "",
            this.txtCoinNum0.text = "",
            this.update()
        },
        i.prototype.addEvent = function() {
            var t = this;
            EventManager.addEventListener("BuySomething1", this.initCase1, this),
            EventManager.addEventListener("BuySomething2", this.initCase2, this),
            EventManager.addEventListener("BuySomething3", this.initCase3, this),
            EventManager.addEventListener("BuySomething4", this.initCase4, this),
            EventManager.addEventListener("BuySomething5", this.initCase5, this),
            EventManager.addEventListener("BuySomething6", this.initCase6, this),
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.id = t.showCoinArr[0],
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon0,
            function() {
                var e = {};
                e.id = t.showCoinArr[1],
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        i.prototype.onChangeTab = function() {
            switch (this._curClidTab = ~~this.rbGroup.selectedValue, this.curTab) {
            case 1:
                this.initCase1();
                break;
            case 2:
                this.initCase2();
                break;
            case 3:
                this.initCase3();
                break;
            case 4:
                this.initCase4();
                break;
            case 5:
                this.initCase5();
                break;
            case 6:
                this.initCase6()
            }
        },
        i.prototype.update = function() {
            this.txtCoinNum.text = ItemManager.getNumByID(this.showCoinArr[0]) + "",
            this.txtCoinNum0.text = ItemManager.getNumByID(this.showCoinArr[1]) + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("BuySomething1", this.initCase1, this),
            EventManager.removeEventListener("BuySomething2", this.initCase2, this),
            EventManager.removeEventListener("BuySomething3", this.initCase3, this),
            EventManager.removeEventListener("BuySomething4", this.initCase4, this),
            EventManager.removeEventListener("BuySomething5", this.initCase5, this),
            EventManager.removeEventListener("BuySomething6", this.initCase6, this),
            this.rb_Item_1.group.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.rb_1.group.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this)
        },
        i
    } (BasicPanel);
    t.PveSptMall = e,
    __reflect(e.prototype, "pveSpt.PveSptMall")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            t._maxFightTimes = [9, 4],
            t._canFastFights = !1,
            t.skinName = "PveSptFightSkin";
            var i = new Date(2020, 10, 27).getTime(),
            n = new Date(2020, 10, 30).getTime(),
            a = SystemTimerManager.sysBJDate.getTime();
            return a >= i && n >= a && (t._maxFightTimes[1] = 9),
            t.grpStatic.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.showCondition = !1,
            this.showSaodang(),
            ImageButtonUtil.add(this.BtnClose,
            function() {
                i.hide(),
                t.PveSptGalaxy.SHOWED_FIGHT_POP = !1
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                i.hide(),
                t.PveSptGalaxy.SHOWED_FIGHT_POP = !1,
                i.canGoFight && egret.setTimeout(function() {
                    SocketConnection.sendByQueue(CommandID.FIGHT_H5_PVE_BOSS, [111, i._info.tasktype, i._info.taskstep])
                },
                i, 500)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击界面左下角"精灵背包"按钮'),
                i.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            this.petList.itemRenderer = t.pveSptFightPetIcon,
            this.itemList.itemRenderer = t.pveSptFightItemIcon,
            this.conditionList.itemRenderer = t.pveSptConditionItem
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._info = t,
            this.initView()
        },
        i.prototype.initView = function() {
            for (var t = this,
            e = this._info.monsterid.split("_"), i = PveSptManager.challengeProgress[this._info.galaxyid - 1] >> 16 * (this._info.taskmode - 1) & 65535, n = e.length > 1 ? PveSptManager.getAttrState(PveSptManager.planetProgress[this._info.galaxyid - 1], this._info.taskstep - 1) : 0, a = [], s = 0; s < e.length; s++) a.push([parseInt(e[s]), n]);
            a.length > 3 ? this.grpDynamicPet.cacheAsBitmap = !1 : this.grpDynamicPet.cacheAsBitmap = !0,
            this.petList.dataProvider = new eui.ArrayCollection(a),
            this.petList.validateNow();
            var r = PveSptManager.challengeTimes[this._info.taskmode - 1];
            if (1 == this._info.tasktype) {
                var o = (255 & i) >= this._info.taskstep;
                this.txt_level.text = "关卡 " + this._info.galaxyid + "-" + this._info.taskstep;
                var _ = [];
                if (_.push("战胜精灵"), n && n + 1 >= e.length || 2 == this._info.taskmode) {
                    var h = this._info.btlconid.split("_");
                    for (var u in h) {
                        var c = config.Btl_condition.getItem(~~h[u]);
                        _.push(c.btldesc)
                    }
                }
                _.length > 3 ? this.grpDynamicCondition.cacheAsBitmap = !1 : this.grpDynamicCondition.cacheAsBitmap = !0,
                this.conditionList.dataProvider = new eui.ArrayCollection(_),
                this.conditionList.validateNow(),
                this.flag_finish.visible = r >= this._maxFightTimes[this._info.taskmode - 1],
                this.itemList.visible = !this.flag_finish.visible,
                this.canGoFight = r < this._maxFightTimes[this._info.taskmode - 1]
            } else if (2 == this._info.tasktype) {
                if (1 == config.SPTtask.getItem(this._info.id - 1).tasktype) var l = config.SPTtask.getItem(this._info.id - 1).taskstep,
                p = 1;
                else var l = config.SPTtask.getItem(this._info.id - 2).taskstep,
                p = 2;
                this.txt_level.text = "关卡 " + this._info.galaxyid + "-" + l + "-" + p;
                var o = (i >> 8 & 255) > this._info.taskstep,
                g = [];
                g.push("战胜精灵"),
                this.conditionList.dataProvider = new eui.ArrayCollection(g),
                this.conditionList.validateNow(),
                KTool.getBitSetAsync([this._info.unlockmark]).then(function(e) {
                    t.showCondition = !0;
                    var i = !!e[0];
                    t.condition.visible = !0;
                    var n = ["简单", "困难"];
                    t.txt_condition_0.text = "通关" + n[t._info.taskmode - 1] + "模式" + t._info.galaxyid + "-" + l;
                    var a = t._info.unlockcond.split("_");
                    1 == ~~a[0] ? t.txt_condition_1.text = "本星系星星集满" + a[1] + "颗": 2 == ~~a[0] && (t.txt_condition_1.text = "3星通过" + n[~~a[1] - 1] + "模式" + t._info.galaxyid + "-" + a[2]),
                    t.img_done_1.visible = i,
                    t.canGoFight = i && r < t._maxFightTimes[t._info.taskmode - 1],
                    t.flag_finish.visible = i && r >= t._maxFightTimes[t._info.taskmode - 1],
                    t.itemList.visible = !t.flag_finish.visible
                })
            }
            if (o) {
                this.award_title_img.source = "pve_spt_award_title_png";
                for (var m = config.SPTreward.getItem(~~this._info.otherreward), d = [], f = m.rewardid.split("_").length, u = 0; f > u; u++) d.push([~~m.rewardid.split("_")[u], ~~m.rewardcnt.split("_")[u]]);
                d.length > 4 ? this.grpDynamicItem.cacheAsBitmap = !1 : this.grpDynamicItem.cacheAsBitmap = !0,
                this.itemList.dataProvider = new eui.ArrayCollection(d),
                this.itemList.validateNow()
            } else {
                this.award_title_img.source = "pve_spt_award_first_title_png";
                var v = this._info.firstreward.split("_");
                if (v.length > 1) {
                    for (var y = [], x = config.SPTreward.getItem(~~v[0]), f = x.rewardid.split("_").length, u = 0; f > u; u++) y.push([~~x.rewardid.split("_")[u], ~~x.rewardcnt.split("_")[u]]);
                    var w = config.SPTreward.getItem(~~v[1]);
                    f = w.rewardid.split("_").length;
                    for (var u = 0; f > u; u++) y.push([~~w.rewardid.split("_")[u], ~~w.rewardcnt.split("_")[u]]);
                    y.length > 4 ? this.grpDynamicItem.cacheAsBitmap = !1 : this.grpDynamicItem.cacheAsBitmap = !0,
                    this.itemList.dataProvider = new eui.ArrayCollection(y),
                    this.itemList.validateNow()
                } else {
                    for (var I = [], b = config.SPTreward.getItem(~~v[0]), f = b.rewardid.split("_").length, u = 0; f > u; u++) I.push([~~b.rewardid.split("_")[u], ~~b.rewardcnt.split("_")[u]]);
                    I.length > 4 ? this.grpDynamicItem.cacheAsBitmap = !1 : this.grpDynamicItem.cacheAsBitmap = !0,
                    this.itemList.dataProvider = new eui.ArrayCollection(I),
                    this.itemList.validateNow()
                }
            }
        },
        Object.defineProperty(i.prototype, "canGoFight", {
            get: function() {
                return this._canGoFight
            },
            set: function(t) {
                this._canGoFight = t,
                this.btnGo.source = this._canGoFight ? "pve_spt_btnTiaozhan_png": "pve_spt_btnTiaozhanQueren_png"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "showCondition", {
            get: function() {
                return this._showCondition
            },
            set: function(t) {
                this._showCondition = t,
                this.condition_title.visible = t,
                this.condition.visible = t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.showSaodang = function() {
            for (var e = this,
            i = config.SPTstar.getItems().filter(function(t) {
                return t.galaxyid == e._info.galaxyid
            }), n = 0, a = 0, s = i; a < s.length; a++) {
                var r = s[a];
                n = r.starcnt
            }
            PveSptManager.getGalaxyStarNum(this._info.galaxyid, this._info.taskmode).then(function(i) {
                if (e._canFastFights = i >= n / 2, e._canFastFights) {
                    DisplayUtil.setEnabled(e.btnSaodang1, !0, !1),
                    DisplayUtil.setEnabled(e.btnSaodang3, !0, !1);
                    for (var a = [["1", 100], ["3", 300]], s = function(i) {
                        ImageButtonUtil.add(e["btnSaodang" + a[i][0]],
                        function() {
                            var n = Math.max(0, e._maxFightTimes[e._info.taskmode - 1] - PveSptManager.challengeTimes[e._info.taskmode - 1]);
                            n >= +a[i][0] ? (e.hide(), t.PveSptGalaxy.SHOWED_FIGHT_POP = !1, egret.setTimeout(function() {
                                SocketConnection.sendByQueue(42395, [111, 6, e._info.tasktype + Number(a[i][1]), e._info.taskstep],
                                function() {
                                    EventManager.dispatchEventWith(PveSptManager.REFRESH_GALAXY)
                                })
                            },
                            e, 300)) : BubblerManager.getInstance().showText("挑战次数不足")
                        },
                        e)
                    },
                    r = 0; r < a.length; r++) s(r)
                } else DisplayUtil.setEnabled(e.btnSaodang1, !1, !0),
                DisplayUtil.setEnabled(e.btnSaodang3, !1, !0),
                e.btnSaodang1.touchEnabled = !0,
                e.btnSaodang3.touchEnabled = !0,
                ImageButtonUtil.add(e.btnSaodang1,
                function() {
                    1 == e._info.taskmode ? BubblerManager.getInstance().showText("获得简单难度所有星星后解锁") : 2 == e._info.taskmode && BubblerManager.getInstance().showText("获得困难难度所有星星后解锁")
                },
                e, !1, !1),
                ImageButtonUtil.add(e.btnSaodang3,
                function() {
                    1 == e._info.taskmode ? BubblerManager.getInstance().showText("获得简单难度所有星星后解锁") : 2 == e._info.taskmode && BubblerManager.getInstance().showText("获得困难难度所有星星后解锁")
                },
                e, !1, !1)
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveSptFight = e,
    __reflect(e.prototype, "pveSpt.PveSptFight")
} (pveSpt || (pveSpt = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
pveSpt; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            i._itemId_0 = [1725115, 1725115, 1725115, 1725115, 1725115, 1725115, 1725115, 1725115, 1725115],
            i._itemId_1 = 1722506,
            i._inited = !1,
            i._maxFightTimes = [9, 4],
            i._paddingX = 77,
            i._mainPlanetX = 240,
            i._mainPlanetY = 50,
            i._branchPlanetX_0 = -34,
            i._branchPlanetX_1 = 18,
            i._branchPlanetY = 150,
            i._mainLinePaddingX = 185,
            i._lineMainX = 240,
            i._lineMainY = 59,
            i._lineBranchX = 72,
            i._lineBranchY = 130,
            i.skinName = PveSptGalaxySkin,
            i.galaxyId = t.id,
            i.curDifficulty = t.difficulty,
            i.jumpId = t.jump,
            i.txt_count_1.text = "",
            i.txt_count_0.text = "";
            var n = new Date(2020, 10, 27).getTime(),
            a = new Date(2020, 10, 30).getTime(),
            s = SystemTimerManager.sysBJDate.getTime();
            return s >= n && a >= s && (i._maxFightTimes[1] = 9),
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.initView(),
            this.offset = egret.lifecycle.stage.stageWidth - this.arr_ending.width,
            this.unlockFastFightAnim = SpineUtil.createAnimate("sptguankasaodang"),
            this.grpAnim.addChild(this.unlockFastFightAnim),
            PveSptManager.getGalaxyStarNum(this.galaxyId, this.curDifficulty).then(function(e) {
                t.prevStarNum = t.currStarNum = e
            })
        },
        i.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnNormal,
            function() {
                i.curDifficulty = 1,
                i.img_chosen.visible = !1,
                i._lastLevel = null,
                i._inited = !1,
                PveSptManager.getGalaxyStarNum(i.galaxyId, i.curDifficulty).then(function(t) {
                    i.prevStarNum = i.currStarNum = t
                }),
                i.initDifficulty()
            },
            this),
            ImageButtonUtil.add(this.btnDifficult,
            function() {
                var t = config.SPTtask.getItems().filter(function(t) {
                    return t.galaxyid == i.galaxyId && t.taskmode == i.curDifficulty && 1 == t.isend
                })[0],
                e = 255 & PveSptManager.challengeProgress[i.galaxyId - 1];
                if (e < t.taskstep) return void Alarm.show("通关简单模式后解锁");
                if (i.galaxyId > 1) {
                    var n = PveSptManager.challengeProgress[i.galaxyId - 2] >> 16 & 255,
                    a = config.SPTtask.getItems().filter(function(t) {
                        return t.galaxyid == i.galaxyId - 1 && 2 == t.taskmode && 1 == t.isend
                    })[0];
                    if (n < a.taskstep) return void Alarm.show("通关上一星系的困难模式后解锁")
                }
                i.curDifficulty = 2,
                i.img_chosen.visible = !1,
                i._lastLevel = null,
                i._inited = !1,
                PveSptManager.getGalaxyStarNum(i.galaxyId, i.curDifficulty).then(function(t) {
                    i.prevStarNum = i.currStarNum = t
                }),
                i.initDifficulty()
            },
            this),
            ImageButtonUtil.add(this.task_0, this.jumpTask, this),
            ImageButtonUtil.add(this.task_1, this.jumpTask, this),
            ImageButtonUtil.add(this.task_2, this.jumpTask, this),
            ImageButtonUtil.add(this.btnStar,
            function() {
                PopViewManager.getInstance().openView(new t.PveSptStar, null, {
                    galaxyId: i.galaxyId
                })
            },
            this),
            ImageButtonUtil.add(this.btnTask,
            function() {
                EventManager.dispatchEventWith("enterTask"),
                i.destroy()
            },
            this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                var t = {};
                t.id = i._itemId_0[i.galaxyId - 1],
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var t = {};
                t.id = i._itemId_1,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.grpAnim,
            function() {
                i.unlockFastFightAnim.stopAll(),
                gsap.to(i.unlockFastFightAnim, {
                    scaleY: 0,
                    duration: .1,
                    onComplete: function() {
                        i.grpAnim.visible = !1
                    }
                })
            },
            this, !1, !1),
            EventManager.addEventListener(PveSptManager.EVENT_REFRESH_STAR, this.updateStarNum, this),
            EventManager.addEventListener(PveSptManager.EVENT_GOTO_TASK, this.gotoTask, this, !1, 1),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.addEventListener(PetFightEvent.START_FIGHT, this.onFightStart, this),
            EventManager.addEventListener(PveSptManager.EVENT_REFRESH_TASK, this.updateTaskState, this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            EventManager.addEventListener(PveSptManager.REFRESH_GALAXY, this.updateView, this),
            EventManager.addEventListener(ModuleEvent.CLOSE_MODULE, this.showFightPopView, this),
            e.prototype.initBtnClose.call(this, "pve_spt_galaxy_title_" + this.galaxyId + "_png", this,
            function() {
                for (var e = 0; e < i.grp_planet.numChildren; e++) i.grp_planet.getChildAt(e) instanceof t.PveSptPlanet && i.grp_planet.getChildAt(e).destroy();
                EventManager.dispatchEventWith("backPanel"),
                i.grp_planet.removeChildren(),
                i.destroy(),
                i.parent && i.parent.removeChild(i)
            },
            this),
            StatLogger.log("1113版本系统功能", "SPT副本", "进入帕诺星系"),
            this.initBtnHelp(function() {
                StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击界面左上角"?"说明按钮'),
                tipsPop.TipsPop.openHelpPopById(89)
            },
            this)
        },
        i.prototype.showFightPopView = function() {
            "pveSpt" == ModuleManager.currModule.moduleName && (i.SHOWED_FIGHT_POP ? PopViewManager.getInstance().openView(new t.PveSptFight, null, this._lastLevel) : i.SHOWED_FIGHT_HIDDEN_POP && PopViewManager.getInstance().openView(new t.PveSptFightHidden, null, this._lastLevel))
        },
        i.prototype.onFightStart = function() {
            this._lastScrlH = this._scr.viewport.scrollH
        },
        i.prototype.onFightOver = function(t) {
            var e = this,
            i = t.dataObj;
            i.winnerID || Alarm.show("很遗憾，挑战失败，需要重头再来！",
            function() {
                e._lastLevel && e.rollToPlanet(e._lastLevel.taskstep)
            }),
            this.initPlanet()
        },
        i.prototype.onTouch = function(e) {
            if (e.target instanceof t.PveSptPlanet) {
                var n = e.target._info;
                if (this._lastLevel = n, this.img_chosen.x = e.target.x - 18, this.img_chosen.y = e.target.y - 4, this.img_chosen.visible = !0, 1 == n.tasktype) this.rollToPlanet(n.taskstep);
                else if (2 == n.tasktype) {
                    var a = ~~e.target.txt_planet.text.split("-")[1];
                    this.rollToPlanet(a)
                }
                i.SHOWED_FIGHT_POP = !0,
                PopViewManager.getInstance().openView(new t.PveSptFight, null, n)
            }
            if (e.target == this.hiddenPlanet) {
                var n = this.planetList.filter(function(t) {
                    return 3 == t.tasktype
                })[0];
                this._lastLevel = n,
                i.SHOWED_FIGHT_HIDDEN_POP = !0,
                PopViewManager.getInstance().openView(new t.PveSptFightHidden, null, n)
            }
        },
        i.prototype.initView = function() {
            this.icon_0.source = ClientConfig.getItemIcon(this._itemId_0[this.galaxyId - 1]),
            this.icon_1.source = ClientConfig.getItemIcon(this._itemId_1),
            this.initDifficulty()
        },
        i.prototype.initDifficulty = function() {
            var t = this;
            PveSptManager.saveDifficulty(this.galaxyId, this.curDifficulty),
            this.btnNormal.visible = this.hiddenPlanet.visible = 2 == this.curDifficulty,
            this.btnDifficult.visible = 1 == this.curDifficulty,
            this.bg.source = "pve_spt_bg_" + this.curDifficulty + "_png",
            this.planetList = config.SPTtask.getItems().filter(function(e) {
                return e.galaxyid == t.galaxyId && e.taskmode == t.curDifficulty
            }),
            this.initPlanet()
        },
        i.prototype.initPlanet = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, a, s, r, o, _, h, u, c, l, p, g, m, d, f, v, y, v, y, x, w, I, b, S, P, C, k, M, T, B, L, E, A, F, N, G, m, D, P, d, f, H, v, y, v, y, z, R, U, I, V, X, O, Y = this;
                return __generator(this,
                function(W) {
                    switch (W.label) {
                    case 0:
                        return this._scr.stopAnimation(),
                        this._scr.viewport.scrollH = this._lastScrlH || 0,
                        this._lastScrlH = 0,
                        [4, KTool.getMultiValueAsync(PveSptManager._planetStarNumAttrList[this.galaxyId - 1][this.curDifficulty - 1].concat(PveSptManager._fightProgressAttrList))];
                    case 1:
                        if (e = W.sent(), i = e.slice(0, PveSptManager._planetStarNumAttrList[this.galaxyId - 1][this.curDifficulty - 1].length), PveSptManager.planetStarNum[this.galaxyId - 1][this.curDifficulty - 1] = i, n = PveSptManager.challengeProgress[this.galaxyId - 1] >> 16 * (this.curDifficulty - 1) & 65535, a = 255 & n, PveSptManager.challengeProgress = e.slice(PveSptManager._planetStarNumAttrList[this.galaxyId - 1][this.curDifficulty - 1].length), s = PveSptManager.challengeProgress[this.galaxyId - 1] >> 16 * (this.curDifficulty - 1) & 65535, r = 255 & s, o = s >> 8 & 255, _ = this.planetList.filter(function(t) {
                            return 1 == t.isend
                        })[0].taskstep, 1 == this.curDifficulty && _ > a && r >= _ && Alarm.show("可以挑战本星系的困难模式和下一个星系的简单模式了！"), h = this.planetList.filter(function(t) {
                            if (1 == t.tasktype && r >= t.taskstep - 1) return ! 0;
                            if (2 == t.tasktype) {
                                if (1 == config.SPTtask.getItem(t.id - 1).tasktype) var e = config.SPTtask.getItem(t.id - 1);
                                else var e = config.SPTtask.getItem(t.id - 2);
                                if (o >= t.taskstep && r >= e.taskstep) return ! 0
                            }
                            return 3 == t.tasktype ? !1 : !1
                        }), this._inited) {
                            for (T = 0; T < this.grp_planet.numChildren; T++) B = this.grp_planet.getChildAt(T),
                            B instanceof t.PveSptPlanet && 1 == B._info.tasktype && (L = B._info, E = PveSptManager.getAttrState(i, L.taskstep - 1), B.setStarNum(E));
                            if (this.showList.length != h.length) for (A = h.filter(function(t) {
                                for (var e = 0,
                                i = Y.showList; e < i.length; e++) {
                                    var n = i[e];
                                    if (n.id == t.id) return ! 1
                                }
                                return ! 0
                            }), F = 0, N = A; F < N.length; F++) G = N[F],
                            1 == G.tasktype ? (m = G.taskstep - 1, D = new t.PveSptPlanet(G), D.x = this._paddingX + this._mainPlanetX * m, D.y = m % 2 == 0 ? this._mainPlanetY: 10, P = PveSptManager.getAttrState(i, m), D.setStarNum(P), this.arr_ending.x = Math.max(this._scr.width - this.arr_ending.width, this._paddingX + this._mainPlanetX * m + 200, this.offset), this.grp_planet.addChild(D), d = m % 2, f = new eui.Image("pve_spt_planet_linemain_" + d + "_png"), f.touchEnabled = !1, f.x = this._mainLinePaddingX + this._lineMainX * (m - 1), f.y = this._lineMainY, this.grp_planet.addChild(f), H = new eui.Rect(194, 47), H.x = f.x, H.y = f.y, this.grp_planet.addChild(H), H.scaleX = 0, f.mask = H, D.visible = !1, this.rollToPlanet(G.taskstep,
                            function() {
                                egret.Tween.get(H).to({
                                    scaleX: 1
                                },
                                1e3).call(function() {
                                    f.mask = null,
                                    Y.grp_planet.removeChild(H),
                                    D.alpha = 0,
                                    D.visible = !0,
                                    egret.Tween.get(D).to({
                                        alpha: 1
                                    },
                                    500).call(function() {
                                        egret.Tween.removeTweens(D)
                                    }),
                                    egret.Tween.removeTweens(H)
                                })
                            },
                            this)) : 2 == G.tasktype && (1 == config.SPTtask.getItem(G.id - 1).tasktype ? (v = config.SPTtask.getItem(G.id - 1).taskstep - 1, y = 0) : (v = config.SPTtask.getItem(G.id - 2).taskstep - 1, y = 1), z = this._paddingX + this._mainPlanetX * v, R = v % 2 == 0 ? this._mainPlanetY: 10, U = new t.PveSptPlanet(G), U.x = z + this["_branchPlanetX_" + y], U.y = R + this._branchPlanetY * (1 + y), U.setBranchIndex(v, y), this.grp_planet.addChild(U), I = new eui.Image("pve_spt_planet_linebranch_" + y + "_png"), I.touchEnabled = !1, I.x = z + this._lineBranchX, I.y = R + this._lineBranchY * (y + 1), this.grp_planet.addChild(I), V = new eui.Rect(20, 38), V.x = I.x, V.y = I.y, this.grp_planet.addChild(V), V.scaleY = 0, I.mask = V, U.visible = !1, egret.Tween.get(V).to({
                                scaleY: 1
                            },
                            1e3).call(function() {
                                I.mask = null,
                                Y.grp_planet.removeChild(V),
                                U.alpha = 0,
                                U.visible = !0,
                                egret.Tween.get(U).to({
                                    alpha: 1
                                },
                                500).call(function() {
                                    egret.Tween.removeTweens(U)
                                }),
                                egret.Tween.removeTweens(V)
                            }))
                        } else {
                            for (u = 0; u < this.grp_planet.numChildren;) this.grp_planet.getChildAt(u) instanceof t.PveSptPlanet ? (this.grp_planet.getChildAt(u).destroy(), this.grp_planet.removeChildAt(u)) : this.grp_planet.getChildAt(u) == this.hiddenPlanet || this.grp_planet.getChildAt(u) == this.arr_ending || this.grp_planet.getChildAt(u) == this.img_chosen ? u++:this.grp_planet.removeChildAt(u);
                            c = [],
                            l = [];
                            for (p in h) g = h[p],
                            l.push(g.tasktype),
                            1 == g.tasktype ? (m = g.taskstep - 1, c.push(m), m > 0 && (d = m % 2, f = new eui.Image("pve_spt_planet_linemain_" + d + "_png"), f.touchEnabled = !1, f.x = this._mainLinePaddingX + this._lineMainX * (m - 1), f.y = this._lineMainY, this.grp_planet.addChild(f))) : 2 == g.tasktype && (1 == h[~~p - 1].tasktype ? (v = h[~~p - 1].taskstep - 1, y = 0) : (v = h[~~p - 2].taskstep - 1, y = 1), c.push([v, y]), x = this._paddingX + this._mainPlanetX * v, w = v % 2 == 0 ? this._mainPlanetY: 10, I = new eui.Image("pve_spt_planet_linebranch_" + y + "_png"), I.touchEnabled = !1, I.x = x + this._lineBranchX, I.y = w + this._lineBranchY * (y + 1), this.grp_planet.addChild(I));
                            for (b = 0; b < h.length; ++b) 1 == l[b] ? (S = new t.PveSptPlanet(h[b]), S.x = this._paddingX + this._mainPlanetX * c[b], S.y = c[b] % 2 == 0 ? this._mainPlanetY: 10, P = PveSptManager.getAttrState(i, c[b]), S.setStarNum(P), this.grp_planet.addChild(S), this.arr_ending.x = Math.max(this._scr.width - this.arr_ending.width, this._paddingX + this._mainPlanetX * c[b] + 200, this.offset)) : 2 == l[b] && (C = this._paddingX + this._mainPlanetX * c[b][0], k = c[b][0] % 2 == 0 ? this._mainPlanetY: 10, M = new t.PveSptPlanet(h[b]), M.x = C + this["_branchPlanetX_" + c[b][1]], M.y = k + this._branchPlanetY * (1 + c[b][1]), M.setBranchIndex(c[b][0], c[b][1]), this.grp_planet.addChild(M));
                            this.jumpId ? this.rollToPlanet(this.jumpId,
                            function() {
                                Y.img_chosen.x = Y._paddingX + Y._mainPlanetX * (Y.jumpId - 1) - 18,
                                Y.img_chosen.y = ((Y.jumpId - 1) % 2 == 0 ? Y._mainPlanetY: 10) - 4,
                                Y.img_chosen.visible = !0,
                                Y.jumpId = null
                            }) : _ > r && this.rollToPlanet(r + 1),
                            this._inited = !0
                        }
                        return this.showList = h,
                        2 != this.curDifficulty ? [3, 3] : [4, KTool.getMultiValueAsync([20140, 20141])];
                    case 2:
                        X = W.sent(),
                        PveSptManager.hiddenTimes = X[0],
                        PveSptManager.hiddenShowTime = X[1],
                        O = SystemTimerManager.sysBJDate.getTime(),
                        PveSptManager.hiddenTimes < 2 && O / 1e3 < PveSptManager.hiddenShowTime ? (this.hiddenPlanet.visible = !0, "hide" == this.hiddenPlanet.currentState && Alarm.show("隐藏关卡解锁。"), egret.clearInterval(this._hiddenInterval), this.hiddenPlanet.currentState = "appear", this.hiddenEndTime = PveSptManager.hiddenShowTime, this.showHiddenTime(), this._hiddenInterval = egret.setInterval(this.showHiddenTime, this, 1e3)) : (this.hiddenPlanet.visible = !1, this.hiddenPlanet.currentState = "hide"),
                        W.label = 3;
                    case 3:
                        return this.updateView(),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, n, a, s, r, o;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return e = PveSptManager._challengeTimesAttrList.concat(PveSptManager._taskAttrList, PveSptManager._starNumAttrList, PveSptManager._planetFightProgressAttrList[this.galaxyId - 1]),
                        [4, KTool.getMultiValueAsync(e)];
                    case 1:
                        return n = _.sent(),
                        a = PveSptManager._challengeTimesAttrList.length,
                        PveSptManager.challengeTimes = n.slice(0, a),
                        this.txt_challengeNum.text = "今日可挑战次数：" + Math.max(0, this._maxFightTimes[this.curDifficulty - 1] - PveSptManager.challengeTimes[this.curDifficulty - 1]),
                        PveSptManager.taskState = n[a],
                        a += PveSptManager._taskAttrList.length,
                        PveSptManager.taskInfo = n.slice(PveSptManager._challengeTimesAttrList.length + 1, a),
                        s = PveSptManager.taskUnlockState,
                        [4, KTool.getBitSetAsync([659].concat(PveSptManager._starStateAttrList))];
                    case 2:
                        return r = _.sent(),
                        !s && PveSptManager.taskUnlockState && Alarm.show("赏金任务已开启！"),
                        this.updateTaskState(),
                        PveSptManager.starNum = n.slice(a, a += PveSptManager._starNumAttrList.length),
                        PveSptManager.starState = r.slice(1),
                        this.updateStarNum(),
                        PveSptManager.planetProgress[this.galaxyId - 1] = n.slice(a, a += PveSptManager._planetFightProgressAttrList[this.galaxyId - 1].length),
                        this._lastLevel && 1 == this._lastLevel.tasktype && 1 == this._lastLevel.taskmode && (o = PveSptManager.getAttrState(PveSptManager.planetProgress[this.galaxyId - 1], this._lastLevel.taskstep - 1), o > 0 && 3 > o && (this.rollToPlanet(this._lastLevel.taskstep), i.SHOWED_FIGHT_POP = !0, PopViewManager.getInstance().openView(new t.PveSptFight, null, this._lastLevel))),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateStarNum = function() {
            var t = this,
            e = config.SPTstar.getItems().filter(function(e) {
                return e.galaxyid == t.galaxyId
            });
            this.img_reddot.visible = !1;
            for (var i = 0,
            n = 0,
            a = e; n < a.length; n++) {
                var s = a[n];
                i = s.starcnt,
                !PveSptManager.starState[s.id - 1] && PveSptManager.starNum[this.galaxyId - 1] >= s.starcnt && (this.img_reddot.visible = !0)
            }
            this.txt_starNum.text = Math.min(PveSptManager.starNum[this.galaxyId - 1], i) + "/" + i,
            this.txt_count_0.text = ItemManager.getNumByID(this._itemId_0[this.galaxyId - 1]) + "",
            this.txt_count_1.text = ItemManager.getNumByID(this._itemId_1) + "",
            PveSptManager.getGalaxyStarNum(this.galaxyId, this.curDifficulty).then(function(e) {
                t.currStarNum = e,
                e >= i / 2 && t.prevStarNum < t.currStarNum && (t.grpAnim.visible = !0, t.unlockFastFightAnim.scaleY = 1, t.unlockFastFightAnim.x = t.grpAnim.width / 2, t.unlockFastFightAnim.y = t.grpAnim.height / 2, t.unlockFastFightAnim.play("appear", 1, 0, {
                    playEnd: function() {
                        t.unlockFastFightAnim.play("stay", 0, 0)
                    }
                })),
                t.prevStarNum = t.currStarNum,
                t.resizeAnim()
            })
        },
        i.prototype.updateTaskState = function() {
            for (var t in PveSptManager.taskInfo) {
                var e = PveSptManager.taskState >> 8 * ~~t & 255,
                i = PveSptManager.taskInfo[t],
                n = 255 & i,
                a = i >> 8 & 255,
                s = i >> 16 & 255,
                r = i >> 24 & 255,
                o = {
                    taskDiff: a,
                    taskGalaxy: s,
                    taskPlanet: r
                };
                e > 2 ? (this["task_" + t].currentState = "done", this["task_" + t].touchEnabled = !1, this["task_" + t].visible = !0, this["task_" + t].txt_task.text = s + "-" + r, this["task_" + t].img_level.source = "pve_spt_task_item_level_s_" + n + "_png") : (this["task_" + t].currentState = "not", 2 == e ? (this["task_" + t].touchEnabled = !0, this["task_" + t].visible = !0, this["task_" + t].txt_task.text = s + "-" + r, this["task_" + t].img_level.source = "pve_spt_task_item_level_s_" + n + "_png") : this["task_" + t].visible = !1),
                this["task_" + t].data = o
            }
            this.grp_task.visible = PveSptManager.taskUnlockState > 0
        },
        i.prototype.showHiddenTime = function() {
            var t = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3),
            e = this.hiddenEndTime - t;
            if (0 >= e) return this.hiddenPlanet.currentState = "hide",
            this.hiddenPlanet.visible = !1,
            void egret.clearInterval(this._hiddenInterval);
            var i = Math.floor(e % 3600 / 60),
            n = Math.floor(e % 60);
            if (10 > n) var a = "0" + n;
            else var a = n + "";
            this.hiddenPlanet.txt_time.text = i + ":" + a
        },
        i.prototype.gotoTask = function(t) {
            var e = this;
            t.stopPropagation(),
            t.stopImmediatePropagation();
            var i = t.data;
            i.galaxyId != this.galaxyId ? (this.galaxyId = i.galaxyId, this.curDifficulty = i.difficulty, this._inited = !1, this._lastLevel = null, this.initView()) : i.difficulty != this.curDifficulty && (this.curDifficulty = i.difficulty, this._inited = !1, this._lastLevel = null, this.initDifficulty()),
            this.rollToPlanet(i.planetId,
            function() {
                e.img_chosen.x = e._paddingX + e._mainPlanetX * (i.planetId - 1) - 18,
                e.img_chosen.y = ((i.planetId - 1) % 2 == 0 ? e._mainPlanetY: 10) - 4,
                e.img_chosen.visible = !0
            })
        },
        i.prototype.jumpTask = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, n, a = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return i = e.target.data,
                        i ? [4, t.PveSpt.getPlanetOpen(i.taskGalaxy, i.taskPlanet, i.taskDiff)] : [2];
                    case 1:
                        return n = s.sent(),
                        n ? (i.taskGalaxy != this.galaxyId ? (this.galaxyId = i.taskGalaxy, this.curDifficulty = i.taskDiff, this._inited = !1, this._lastLevel = null, this.initView()) : i.taskDiff != this.curDifficulty && (this.curDifficulty = i.taskDiff, this._inited = !1, this._lastLevel = null, this.initDifficulty()), this.rollToPlanet(i.taskPlanet,
                        function() {
                            a.img_chosen.x = a._paddingX + a._mainPlanetX * (i.taskPlanet - 1) - 18,
                            a.img_chosen.y = ((i.taskPlanet - 1) % 2 == 0 ? a._mainPlanetY: 10) - 4,
                            a.img_chosen.visible = !0
                        })) : BubblerManager.getInstance().showText("未解锁该关卡"),
                        [2]
                    }
                })
            })
        },
        i.prototype.rollToPlanet = function(t, e, i) {
            var n = this;
            this._scr.stopAnimation();
            var a = Math.max(this._scr.width - this.arr_ending.width, this._paddingX + this._mainPlanetX * (t - 1) + 200, this.offset),
            s = this._paddingX + this._mainPlanetX * (t - 1),
            r = s - this._scr.width / 2 + 65,
            o = Math.max(0, a + this.arr_ending.width - this._scr.viewport.width);
            egret.Tween.get(this._scr.viewport).to({
                scrollH: Math.min(Math.max(0, r), o)
            },
            500).call(function() {
                e && e.apply(i || n, []),
                egret.Tween.removeTweens(n._scr)
            })
        },
        i.prototype.resizeAnim = function() {
            var t = 1136,
            e = 640,
            i = egret.lifecycle.stage.stageWidth,
            n = egret.lifecycle.stage.stageHeight,
            a = i / t,
            s = n / e,
            r = Math.max(a, s);
            this.unlockFastFightAnim.scaleX = this.unlockFastFightAnim.scaleY = r
        },
        i.prototype.destroy = function() {
            this._hiddenInterval && egret.clearInterval(this._hiddenInterval),
            EventManager.dispatchEventWith(PveSptManager.EVENT_CLOSE_GALAXY),
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            EventManager.removeEventListener(PveSptManager.EVENT_REFRESH_STAR, this.updateStarNum, this),
            EventManager.removeEventListener(PveSptManager.EVENT_GOTO_TASK, this.gotoTask, this, !1),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            EventManager.removeEventListener(PveSptManager.EVENT_REFRESH_TASK, this.updateTaskState, this),
            EventManager.removeEventListener(PetFightEvent.START_FIGHT, this.onFightStart, this),
            EventManager.removeEventListener(PveSptManager.REFRESH_GALAXY, this.updateView, this),
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i.SHOWED_FIGHT_POP = !1,
        i.SHOWED_FIGHT_HIDDEN_POP = !1,
        i
    } (BaseModule);
    t.PveSptGalaxy = e,
    __reflect(e.prototype, "pveSpt.PveSptGalaxy")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = PveSptPlanetSkin,
            i.cacheAsBitmap = !0,
            i._info = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.touchChildren = !1,
            1 == this._info.tasktype ? (this.currentState = "main", this.txt_planet.text = this._info.galaxyid + "-" + this._info.taskstep, this.img_planet.source = ClientConfig.getSptPlanet(this._info.galaxyid, this._info.taskstep)) : 2 == this._info.tasktype && (this.currentState = "branch")
        },
        e.prototype.setBranchIndex = function(t, e) {
            this.txt_planet.text = this._info.galaxyid + "-" + (t + 1) + "-" + (e + 1),
            this.img_planet.source = ClientConfig.getSptPlanet(this._info.galaxyid, t + 1)
        },
        e.prototype.setStarNum = function(t) {
            for (var e = 0; 3 > e; e++) this["stardark_" + e].visible = e >= t,
            this["starlight_" + e].visible = t > e
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.Component);
    t.PveSptPlanet = e,
    __reflect(e.prototype, "pveSpt.PveSptPlanet")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveSptStarSkin,
            t.grpStatic.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.BtnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this.galaxyId = t.galaxyId,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this,
            i = config.SPTstar.getItems().filter(function(t) {
                return t.galaxyid == e.galaxyId
            });
            i.length > 3 ? this.grpDynamic.cacheAsBitmap = !1 : this.grpDynamic.cacheAsBitmap = !0,
            this._list.itemRenderer = t.PveSptStarItem,
            this._list.dataProvider = new eui.ArrayCollection(i)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PveSptStar = e,
    __reflect(e.prototype, "pveSpt.PveSptStar")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveSptStarItemSkin,
            t.grpStatic.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(42395, [111, 2, i._info.galaxyid, i._info.level],
                function() {
                    KTool.getBitSet(PveSptManager._starStateAttrList,
                    function(t) {
                        PveSptManager.starState = t,
                        EventManager.dispatchEventWith(PveSptManager.EVENT_REFRESH_STAR),
                        i.updateView()
                    })
                })
            },
            this),
            this.itemList.itemRenderer = t.pveSptStarItemItem
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.txt_task.textFlow = [{
                text: "集齐本星系",
                style: {
                    textColor: 12900350
                }
            },
            {
                text: this._info.starcnt + "",
                style: {
                    textColor: 2211583
                }
            },
            {
                text: "颗星星",
                style: {
                    textColor: 12900350
                }
            }];
            for (var t = config.SPTreward.getItem(this._info.rewardid), i = [], n = t.rewardid.split("_"), a = t.rewardcnt.split("_"), s = 0; s < n.length; ++s) i.push([n[s], a[s], !0]);
            this._info.achievementid && i.push(["common_achieve_title_icon_png", this._info.achievementid, !1]),
            i.length > 3 ? this.grpDynamic.cacheAsBitmap = !1 : this.grpDynamic.cacheAsBitmap = !0,
            this.itemList.dataProvider = new eui.ArrayCollection(i),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t = PveSptManager.starNum[this._info.galaxyid - 1],
            e = PveSptManager.starState[this._info.id - 1];
            this.tag_got.visible = !!e,
            this.btnGet.visible = !e,
            DisplayUtil.setEnabled(this.btnGet, t >= this._info.starcnt)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.PveSptStarItem = e,
    __reflect(e.prototype, "pveSpt.PveSptStarItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            e._allData = [];
            for (var i = config.Exchange_clt.getItems(), n = 0, a = i; n < a.length; n++) {
                var s = a[n];
                3 == s.shopid && e._allData.push(s)
            }
            return e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        Object.defineProperty(e.prototype, "allData", {
            get: function() {
                return this._allData
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getAllGxPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                1 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllGxMarkIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                3 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllElevnKingPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                2 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllElevnKingMarkIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                4 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllCultureItemsIds = function(t) {
            for (var e = [], i = 0, n = this._allData; i < n.length; i++) {
                var a = n[i];
                a.Subtag === t && e.push(a)
            }
            return e
        },
        e.prototype.getAllSptPetIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                5 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllSptItemIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                6 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllSptItem2Ids = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                18 === n.Subtag && t.push(n.id)
            }
            return t
        },
        e.prototype.getAllSptAchieveIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                7 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllJuebanAchieveIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                8 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllSptPowerIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                9 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getAllSptHeadIds = function() {
            for (var t = [], e = 0, i = this._allData; e < i.length; e++) {
                var n = i[e];
                10 === n.Subtag && t.push(n)
            }
            return t
        },
        e.prototype.getInfoById = function(t) {
            for (var e = 0,
            i = this._allData; e < i.length; e++) {
                var n = i[e];
                if (n.id === t) return n
            }
            return null
        },
        e
    } (egret.EventDispatcher);
    t.DataConfigManager = e,
    __reflect(e.prototype, "pveSpt.DataConfigManager")
} (pveSpt || (pveSpt = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.service.setValues([t.AttrConst.forever_item_1, t.AttrConst.forever_item_2], [t.AttrConst.daily_limitTask_ID, t.AttrConst.daily_limited_task, t.AttrConst.daily_normal_task]),
            n.init([{
                panelName: t.ModuleConst.MAIN_PANEL,
                isMain: !0,
                defaultParam: i
            },
            {
                panelName: t.ModuleConst.PVESPT_GALAXY
            },
            {
                panelName: t.ModuleConst.PVESPT_ADVANCED
            }]),
            n
        }
        return __extends(i, e),
        i.getPlanetOpen = function(t, e, i) {
            return __awaiter(this, void 0, void 0,
            function() {
                var n, a, s, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync(PveSptManager._planetStarNumAttrList[t - 1][i - 1])];
                    case 1:
                        return n = o.sent(),
                        1 == e ? (a = void 0, s = 255 & PveSptManager.unlockProgress, r = PveSptManager.unlockProgress >> 8 & 255, a = 1 == i ? s >= t - 1 : r >= t - 1 && s >= t, [2, a]) : [2, PveSptManager.getAttrState(n, e - 1) > 0 || PveSptManager.getAttrState(n, e - 2) > 0]
                    }
                })
            })
        },
        i
    } (BasicMultPanelModule);
    t.PveSpt = e,
    __reflect(e.prototype, "pveSpt.PveSpt")
} (pveSpt || (pveSpt = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveSpt; !
function(t) {
    var e = function() {
        function t() {}
        return t.daily_normal_task = 201381,
        t.daily_limited_task = 201382,
        t.daily_limitTask_ID = 201383,
        t.forever_item_1 = 121241,
        t.forever_item_2 = 121242,
        t
    } ();
    t.AttrConst = e,
    __reflect(e.prototype, "pveSpt.AttrConst")
} (pveSpt || (pveSpt = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveSpt; !
function(t) {
    var e = function() {
        function t() {}
        return t.galaxyItems = [[1725115, 1722506, 400566], [1725115, 1722506, 400567], [1725115, 1722506, 1500514], [1725115, 1722506, 1500519], [1725115, 1722506, 1500520], [1725115, 1722506, 1500521], [1725115, 1722506, 1500522], [1725115, 1722506, 1500524], [1725115, 1722506, 1500525]],
        t.SpecialTimeStart = "2024/02/23 00:00:00",
        t.SpecialTimeEnd = "2024/03/07 23:59:59",
        t.advancedTask = [{
            id: 1,
            lv: "SS",
            rewardNum: 60,
            str: "通关1次任意星系的隐藏关卡"
        },
        {
            id: 2,
            lv: "SS",
            rewardNum: 60,
            str: "三星通关1次泰坦星系困难模式第7关"
        },
        {
            id: 3,
            lv: "SS",
            rewardNum: 60,
            str: "通关1次魔界简单模式的任意关卡"
        },
        {
            id: 4,
            lv: "S",
            rewardNum: 40,
            str: "至少二星通关1次任意星系困难模式的第12关"
        },
        {
            id: 5,
            lv: "S",
            rewardNum: 40,
            str: "三星通关1次任意星系困难模式的第6关"
        },
        {
            id: 6,
            lv: "S",
            rewardNum: 40,
            str: "通关1次泰坦星系困难模式的任意关卡"
        },
        {
            id: 7,
            lv: "S",
            rewardNum: 40,
            str: "通关1次克里奥星域困难模式的任意关卡"
        },
        {
            id: 8,
            lv: "A",
            rewardNum: 30,
            str: "至少二星通关1次任意星系困难模式的第6关"
        },
        {
            id: 9,
            lv: "A",
            rewardNum: 30,
            str: "三星通关1次任意星系困难模式的第3关"
        },
        {
            id: 10,
            lv: "A",
            rewardNum: 30,
            str: "三星通关1次任意星系简单模式的第12关"
        },
        {
            id: 11,
            lv: "A",
            rewardNum: 30,
            str: "通关1次裂空星系困难模式的任意关卡"
        },
        {
            id: 12,
            lv: "A",
            rewardNum: 30,
            str: "通关1次泰坦星系简单模式的任意关卡"
        },
        {
            id: 13,
            lv: "B",
            rewardNum: 20,
            str: "三星通关1次任意星系简单模式的第3关"
        },
        {
            id: 14,
            lv: "B",
            rewardNum: 20,
            str: "至少二星通关1次任意星系简单模式的第6关"
        },
        {
            id: 15,
            lv: "B",
            rewardNum: 20,
            str: "通关1次任意星系困难模式的第3关"
        },
        {
            id: 16,
            lv: "B",
            rewardNum: 20,
            str: "通关1次罗格星系困难模式的第1关"
        },
        {
            id: 17,
            lv: "B",
            rewardNum: 20,
            str: "通关1次螺旋星系简单模式的任意关卡"
        },
        {
            id: 18,
            lv: "B",
            rewardNum: 20,
            str: "通关1次帕诺星系困难模式的第6关"
        }],
        t.advancedItem = [{
            id: 1,
            realid: 4606,
            LimitCnt: 1,
            price: 1e3
        },
        {
            id: 2,
            realid: 42175,
            LimitCnt: 1,
            price: 200
        },
        {
            id: 3,
            realid: 5966,
            LimitCnt: 1,
            price: 200
        },
        {
            id: 4,
            realid: 36362,
            LimitCnt: 1,
            price: 200
        },
        {
            id: 5,
            realid: 300697,
            POPID: 295,
            LimitCnt: 3,
            Limittype: 4,
            price: 200,
            coinid: 1725799,
            UserInfoId: 121242,
            UserInfoBytePos: 1
        },
        {
            id: 6,
            realid: 300065,
            POPID: 294,
            LimitCnt: 3,
            Limittype: 4,
            price: 200,
            coinid: 1725799,
            UserInfoId: 121242,
            UserInfoBytePos: 2
        },
        {
            id: 7,
            realid: 300853,
            POPID: 808,
            LimitCnt: 5,
            Limittype: 4,
            price: 100,
            coinid: 1725799,
            UserInfoId: 121242,
            UserInfoBytePos: 3
        },
        {
            id: 8,
            realid: 1722506,
            POPID: 681,
            LimitCnt: 99,
            Limittype: 4,
            price: 1,
            coinid: 1725799,
            UserInfoId: 121242,
            UserInfoBytePos: 4
        }],
        t
    } ();
    t.DataConst = e,
    __reflect(e.prototype, "pveSpt.DataConst")
} (pveSpt || (pveSpt = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
pveSpt; !
function(t) {
    var e = function() {
        function t() {}
        return t.MAIN_PANEL = "pveSpt.PveSptMainPanel",
        t.PVESPT_GALAXY = "pveSpt.PveSptGalaxy",
        t.PVESPT_ADVANCED = "pveSpt.pveSptAdvancedTask",
        t
    } ();
    t.ModuleConst = e,
    __reflect(e.prototype, "pveSpt.ModuleConst")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.exchangeNum = [],
            n._curTab = i,
            n.skinName = t.AdvancedTaskSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initView(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener("GetandRefresh", this.updateView, this),
            ImageButtonUtil.add(this.icon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1725799
                })
            },
            this)
        },
        i.prototype.initView = function(t) {
            this.icon.source = ClientConfig.getItemIcon(1725799),
            this.txtCoinNum.text = ItemManager.getNumByID(1725799) + "",
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this,
            i = [],
            n = [];
            this._listTask.itemRenderer = t.pveSptAdvancedTaskItem;
            var a, s, r;
            KTool.getMultiValue([t.AttrConst.daily_normal_task, t.AttrConst.daily_limited_task, t.AttrConst.daily_limitTask_ID],
            function(t) {
                a = t[0],
                s = t[1],
                r = t[2];
                for (var o = 0; 3 > o; o++) {
                    var _ = [],
                    h = [],
                    u = a >> 8 * o & 255,
                    c = s >> 8 * o & 255,
                    l = r >> 8 * o & 255,
                    p = r >> 24 & 255;
                    _.ID = o + 1,
                    h.ID = o + 4,
                    _.progress = u,
                    h.progress = c,
                    h.limitId = l,
                    h.reshTime = p,
                    i.push(_),
                    n.push(h)
                }
                i = i.concat(n),
                e._listTask.dataProvider = new eui.ArrayCollection(i),
                e.txtCoinNum.text = ItemManager.getNumByID(1725799) + ""
            })
        },
        i
    } (BasicPanel);
    t.pveSptAdvancedTask = e,
    __reflect(e.prototype, "pveSpt.pveSptAdvancedTask")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.exchangeNum = [],
            n._curTab = i,
            n.skinName = t.AdvancedTaskShopSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initView(),
            this.addEvent()
        },
        i.prototype.initView = function() {
            this.icon.source = ClientConfig.getItemIcon(1725799),
            this.txtCoinNum.text = ItemManager.getNumByID(1725799) + "",
            this.updateView()
        },
        i.prototype.addEvent = function() {
            var e = this;
            EventManager.addEventListener("BuyLimitItem", this.updateView, this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["btnBuy_" + i],
                function() {
                    if (1 == i) {
                        if (ItemManager.getNumByID(1725799) < t.DataConst.advancedItem[i - 1].price) return void Alarm.show("您的秘森核心数量不足！");
                        if (e.exchangeNum[0] > 0) return void Alarm.show("您的兑换次数达到上限");
                        SocketConnection.sendByQueue(41388, [36, 1001],
                        function(t) {
                            EventManager.dispatchEventWith("BuyLimitItem")
                        })
                    } else if (i > 1 && 4 >= i) {
                        if (!PetManager.isDefaultPet(4606)) return BubblerManager.getInstance().showText("请将加尔鲁特设置为出战背包首发！"),
                        void ModuleManager.showModuleByID(10);
                        if (ItemManager.getNumByID(1725799) < t.DataConst.advancedItem[i - 1].price) Alarm.show("您的秘森核心数量不足！");
                        else {
                            if (e.exchangeNum[i - 1] > 0) return void Alarm.show("您的兑换次数达到上限");
                            SocketConnection.sendByQueue(41388, [36, 1e3 * i + 1],
                            function(t) {
                                switch (EventManager.dispatchEventWith("BuyLimitItem"), i) {
                                case 3:
                                    BubblerManager.getInstance().showText("您已成功兑换专属特性！");
                                    break;
                                case 4:
                                    BubblerManager.getInstance().showText("您已成功兑换第五技能！")
                                }
                            })
                        }
                    } else {
                        if (ItemManager.getNumByID(1725799) < t.DataConst.advancedItem[i - 1].price) return void BubblerManager.getInstance().showText("您的秘森核心不足");
                        var n = {};
                        n.ins = t.DataConst.advancedItem[i - 1],
                        n.caller = e,
                        n.callBack = function(e, n) {
                            SocketConnection.sendByQueue(41388, [36, 1e3 * t.DataConst.advancedItem[i - 1].id + n],
                            function(t) {
                                EventManager.dispatchEventWith("BuyLimitItem")
                            })
                        },
                        ModuleManager.showModuleByID(1, n)
                    }
                },
                n)
            },
            n = this, a = 1; 8 >= a; a++) i(a);
            ImageButtonUtil.add(this.pet,
            function() {
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: 4606,
                    type: "pet",
                    thisObj: e
                },
                "", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = 1725799,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                var t;
                CountermarkXMLInfo.isminMark(42175) ? (t = {},
                t.ins = 42175, tipsPop.TipsPop.openCounterMarkPop(t)) : (t = {},
                t.id = 42175, tipsPop.TipsPop.openItemPop(t))
            },
            this),
            ImageButtonUtil.add(this.icon3,
            function() {
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], 4606, "", AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.icon4,
            function() {
                var t = {
                    id: 37140
                };
                tipsPop.TipsPop.openSkillPop(t)
            },
            this);
            for (var s = function(e) {
                ImageButtonUtil.add(r["icon" + (e + 4)],
                function() {
                    var i = {};
                    i.id = t.DataConst.advancedItem[e + 3].realid,
                    tipsPop.TipsPop.openItemPop(i)
                },
                r)
            },
            r = this, a = 1; 4 >= a; a++) s(a)
        },
        i.prototype.updateView = function() {
            var e = this;
            this.shop1.visible = !0;
            var i, n, a, s = SystemTimerManager.sysBJDate.getMonth() + 1;
            2 == s ? a = 37 - SystemTimerManager.sysBJDate.getDate() : 3 == s && (a = 8 - SystemTimerManager.sysBJDate.getDate()),
            KTool.getMultiValue([t.AttrConst.forever_item_1, t.AttrConst.forever_item_2],
            function(s) {
                i = s[0],
                n = s[1];
                for (var r = 1; 8 >= r; r++) e["txt_leftTime_" + r].text = "剩" + a + "天",
                4 >= r ? e.exchangeNum[r - 1] = i >> 8 * (r - 1) & 255 : (e.exchangeNum[r - 1] = n >> 8 * (r - 5) & 255, e["icon" + r].source = ClientConfig.getItemIcon(t.DataConst.advancedItem[r - 1].realid)),
                e["cost" + r].source = ClientConfig.getItemIcon(1725799),
                e["txt_price" + r].text = t.DataConst.advancedItem[r - 1].price,
                7 >= r && (e["limited_" + r].text = "限兑：" + e.exchangeNum[r - 1] + "/" + t.DataConst.advancedItem[r - 1].LimitCnt);
                e.txtCoinNum.text = ItemManager.getNumByID(1725799) + "",
                e.update()
            })
        },
        i.prototype.update = function() {
            for (var e = 1; 8 >= e; e++) this["hasGet" + e].visible = !(this.exchangeNum[e - 1] < t.DataConst.advancedItem[e - 1].LimitCnt),
            this["btnBuy_" + e].visible = !this["hasGet" + e].visible
        },
        i
    } (BasicPanel);
    t.pveSptAdvancedTaskShop = e,
    __reflect(e.prototype, "pveSpt.pveSptAdvancedTaskShop")
} (pveSpt || (pveSpt = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PveSptChallengeSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initView(),
            this._scrol.viewport = this._list,
            this.adaptLeftContent(this.content),
            this.content.width += egret.lifecycle.stage.stageWidth - 1136 - 2 * DeviceInfoManager.adapterOffSetX,
            EventManager.addEventListener(PveSptManager.EVENT_CLOSE_GALAXY, this.initView, this)
        },
        i.prototype.initView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, a, s, r, o = this;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return [4, PveSptManager.init()];
                    case 1:
                        return _.sent(),
                        e = PveSptManager,
                        [4, KTool.getPlayerInfoValueAsync([PveSptManager._lastEnterInfoAttr])];
                    case 2:
                        for (e.lastEnterInfo = _.sent()[0], this._list.itemRenderer = t.pveSptItem, i = config.SPTtask.getItems(), n = [], a = 0, s = i; a < s.length; a++) r = s[a],
                        n.indexOf(r.galaxyid) < 0 && n.push(r.galaxyid);
                        return this._list.dataProvider = new eui.ArrayCollection(n),
                        this.once(egret.Event.RENDER,
                        function() {
                            DisplayUtil.setScrollerItemIncludeInLayout(o._scrol, !1),
                            o.tl = new gsap.core.Timeline,
                            o.tl.from(o._list.$children, {
                                stagger: .05,
                                x: 1400,
                                alpha: 0
                            }).then(function() {
                                DisplayUtil.setScrollerItemIncludeInLayout(o._scrol, !0)
                            })
                        },
                        this),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeAll(this),
            this.tl && this.tl.kill(),
            this.tl = null
        },
        i
    } (BasicPanel);
    t.PveSptChallenge = e,
    __reflect(e.prototype, "pveSpt.PveSptChallenge")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.groupName = "pve_spt_tab",
            n.panelNames = ["PveSptMainPanel", "PveSptChallenge", "PveSptTask", "PveSptMall", "pveSptAdvancedTask", "pveSptAdvancedTaskShop"],
            n.panels = {},
            e.prototype.initBtnClose.call(n, "ps_galaxychallenge_title_png", n,
            function() {
                n.service.closeModule()
            },
            n),
            n.initBtnHelp(function() {
                StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击界面左上角"?"说明按钮'),
                tipsPop.TipsPop.openHelpPopById(89)
            },
            n),
            n.skinName = t.PveSptMainPanelSkin,
            n.value = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initData(),
            this.addEvent()
        },
        i.prototype.initData = function() {
            LoadingManager.instance.showloading("正在加载资源，请稍候！");
            var e = new MenuData;
            e.groupName = this.groupName;
            var i = !1,
            n = new Date(t.DataConst.SpecialTimeStart).getTime(),
            a = new Date(t.DataConst.SpecialTimeEnd).getTime(),
            s = SystemTimerManager.sysBJDate.getTime();
            if (a > s && s > n && (i = !0), i ? e.root = [7, 8, 9, 10] : e.root = [7, 8, 9], GameInfo.isChecking ? e.data = {
                7 : {
                    title: "星系挑战"
                },
                8 : {
                    title: "赏金任务"
                },
                9 : {
                    title: "奖励商城",
                    child: [1, 3, 4, 5, 6]
                },
                10 : {
                    title: "限时活动",
                    child: [11, 12]
                },
                1 : {
                    title: "SPT精灵",
                    parent: 9
                },
                2 : {
                    title: "SPT成就",
                    parent: 9
                },
                3 : {
                    title: "珍贵道具",
                    parent: 9
                },
                4 : {
                    title: "能力提升",
                    parent: 9
                },
                5 : {
                    title: "限定头像",
                    parent: 9
                },
                6 : {
                    title: "精灵因子",
                    parent: 9
                },
                11 : {
                    title: "每日任务",
                    parent: 10
                },
                12 : {
                    title: "兑换商城",
                    parent: 10
                }
            }: e.data = {
                7 : {
                    title: "星系挑战"
                },
                8 : {
                    title: "赏金任务"
                },
                9 : {
                    title: "奖励商城",
                    child: [1, 2, 3, 4, 5, 6]
                },
                10 : {
                    title: "限时活动",
                    child: [11, 12]
                },
                1 : {
                    title: "SPT精灵",
                    parent: 9
                },
                2 : {
                    title: "SPT成就",
                    parent: 9
                },
                3 : {
                    title: "珍贵道具",
                    parent: 9
                },
                4 : {
                    title: "能力提升",
                    parent: 9
                },
                5 : {
                    title: "限定头像",
                    parent: 9
                },
                6 : {
                    title: "精灵因子",
                    parent: 9
                },
                11 : {
                    title: "每日任务",
                    parent: 10
                },
                12 : {
                    title: "兑换商城",
                    parent: 10
                }
            },
            this._jumpInfo = GainWayManger.getJumpInfo(this.value, e), null != this._jumpInfo) e["default"] = this._jumpInfo.menuDefault;
            else if (this.value && null != this.value.openPanel) {
                var r = Number(this.value.openPanel.charAt(0));
                3 == r ? (r = Number(this.value.openPanel.charAt(2)), e["default"] = r) : e["default"] = +this.value.openPanel
            } else e["default"] = 7;
            this.menu = Menu.createMenu(e, this.menuGroup),
            this.onChangeTab(),
            RES.loadGroup("pve_spt_group_galaxy").then(function() {
                LoadingManager.instance.hideloading(null)
            })
        },
        i.prototype.initView = function() {},
        i.prototype.EnterTask = function() {
            StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击"赏金任务"页签'),
            this.menu.updateView(8)
        },
        i.prototype.EnterGalax = function() {
            this.menu.updateView(7)
        },
        i.prototype.backToRefresh = function() {
            this.enterPanel(this.menu.selectedValue, !0, "SPT")
        },
        i.prototype.addEvent = function() {
            EventManager.addEventListener("enterGalax", this.EnterGalax, this),
            EventManager.addEventListener("enterTask", this.EnterTask, this),
            EventManager.addEventListener("backPanel", this.backToRefresh, this),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this)
        },
        i.prototype.onChangeTab = function() {
            var t = this,
            e = ~~this.menu.selectedValue,
            i = e > 6;
            8 == e && 0 == PveSptManager.taskUnlockState ? Alarm.show("开启赏金任务需要先完成帕诺星系困难模式的挑战！",
            function() {
                t.menu.updateView(7)
            }) : 11 == e ? this.enterPanel(4, !1, "limit") : 12 == e ? this.enterPanel(5, !1, "limit") : this.enterPanel(i ? e - 6 : e, !0, i ? "SPT": "mall")
        },
        i.prototype.enterPanel = function(e, i, n) {
            var a, s, r;
            switch (r = null != this._jumpInfo && this._jumpInfo.tab > 0 ? this._jumpInfo.tab: 1, n) {
            case "SPT":
                a = this.panelNames[e];
                break;
            case "mall":
                a = "PveSptMall",
                s = this.menu.selectedValue;
                break;
            case "limit":
                a = this.panelNames[e],
                s = 11 == this.menu.selectedValue ? 1 : 2
            }
            if (this.panels[a]) {
                switch (this.curPanel = this.panels[a], n) {
                case "SPT":
                    this.curPanel.initView();
                    break;
                case "mall":
                    this.curPanel.initView(s, r);
                    break;
                case "limit":
                    this.curPanel.initView(s, this.service)
                }
                this.grp_Container.removeChildren(),
                this.grp_Container.addChild(this.curPanel)
            } else if (t[a]) {
                var o = 1;
                i && 3 == e ? this.curPanel = new t[a](o) : i && 4 == e ? this.curPanel = new t[a](o) : this.curPanel = new t[a],
                this.curPanel.name = a,
                this.grp_Container.removeChildren(),
                this.grp_Container.addChild(this.curPanel),
                this.panels[a] = this.curPanel
            }
        },
        i.prototype.destroy = function() {
            this._jumpInfo = null,
            EventManager.removeEventListener("enterGalax", this.EnterGalax, this),
            EventManager.removeEventListener("enterTask", this.EnterTask, this),
            EventManager.removeEventListener("backPanel", this.backToRefresh, this),
            this.menu && this.menu.destroy(),
            RES.destroyRes("pve_spt_group_galaxy"),
            e.prototype.destroy.call(this);
            for (var t in this.panels) {
                var i = this.panels[t];
                DisplayUtil.removeForParent(i),
                i.destroy()
            }
            this.removeChildren()
        },
        i
    } (BasicPanel);
    t.PveSptMainPanel = e,
    __reflect(e.prototype, "pveSpt.PveSptMainPanel")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._hiddenShowId = [1200446, 300066, 300810],
            t._maxDynamicListLength = 0,
            t.skinName = "PveSptFightHiddenSkin",
            t.grpStatic.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.BtnClose,
            function() {
                i.hide(),
                t.PveSptGalaxy.SHOWED_FIGHT_HIDDEN_POP = !1
            },
            this),
            ImageButtonUtil.add(this.btnTiaozhan2,
            function() {
                i.hide(),
                t.PveSptGalaxy.SHOWED_FIGHT_HIDDEN_POP = !1,
                egret.setTimeout(function() {
                    SocketConnection.sendByQueue(CommandID.FIGHT_H5_PVE_BOSS, [111, i._info.tasktype, i._info.taskstep])
                },
                i, 500)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_pet,
            function() {
                StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击界面左下角"精灵背包"按钮'),
                i.hide(),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.imgBtn_cure,
            function() {
                PetManager.cureAll()
            },
            this),
            this.itemList.itemRenderer = t.pveSptFightItemIcon
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._info = t,
            this.initView()
        },
        i.prototype.initView = function() {
            this.txt_level.text = "隐藏关卡";
            for (var e = (SystemTimerManager.sysBJDate.getTime() / 1e3, PveSptManager.hiddenShowTime, PveSptManager.hiddenTimes, []), i = 0; 3 > i; i++) e.push([this._hiddenShowId[i]]);
            this._maxDynamicListLength = Math.max(this._maxDynamicListLength, e.length),
            this.itemList.dataProvider = new eui.ArrayCollection(e),
            this.itemList.validateNow(),
            this.pet_grp.removeChildren();
            var n = new t.pveSptFightPetIcon;
            n.setInfo(void 0),
            n.setCompleted(!1),
            this.pet_grp.addChild(n),
            this._maxDynamicListLength > 4 ? this.grpDynamic.cacheAsBitmap = !1 : this.grpDynamic.cacheAsBitmap = !0
        },
        i
    } (PopView);
    t.PveSptFightHidden = e,
    __reflect(e.prototype, "pveSpt.PveSptFightHidden")
} (pveSpt || (pveSpt = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BountyTaskSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initView(),
            EventManager.addEventListener("backPanel", this.showCompNum, this),
            this.adaptRightContent(this.top_mid)
        },
        i.prototype.initView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, a, s, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([201544])];
                    case 1:
                        for (e = o.sent()[0], i = [], n = 0; 3 > n; n++) a = e >> 8 * n & 255,
                        s = PveSptManager.taskState >> 8 * n & 255,
                        r = PveSptManager.taskInfo[n],
                        i.push({
                            id: n + 1,
                            freshTimes: a,
                            state: s,
                            taskInfo: r
                        });
                        return this._list.itemRenderer = t.pveSptTaskItem,
                        this.listData = new eui.ArrayCollection(i),
                        this._list.dataProvider = this.listData,
                        this.showCompNum(),
                        this.showTime(),
                        this._list.validateNow(),
                        this.playAnim(),
                        [2]
                    }
                })
            })
        },
        i.prototype.playAnim = function() {
            for (var t = [], e = function(e) {
                var n = i._list.getChildAt(e),
                a = n.x;
                n.includeInLayout = !1,
                n.x = i._list.width + n.width * e,
                t.push(egret.Tween.get(n).to({
                    x: a
                },
                400 + 100 * e, egret.Ease.quadOut).call(function() {
                    n.includeInLayout = !0
                }))
            },
            i = this, n = 0; n < this._list.numChildren; n++) e(n);
            var a = (s = common.TweenUtil).createAllTween.apply(s, t);
            Promise.all(a);
            var s
        }, i.prototype.showCompNum = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n = this;
                return __generator(this,
                function(a) {
                    for (t = 0, e = 0; 3 > e; e++) i = PveSptManager.taskState >> 8 * e & 255,
                    i >= 4 && t++;
                    return this.txt_weeklyTimes.text = "本周完成：" + t + "/3",
                    KTool.getMultiValue([201544],
                    function(t) {
                        for (var e = t[0], i = [], a = 0; 3 > a; a++) {
                            var s = e >> 8 * a & 255,
                            r = PveSptManager.taskState >> 8 * a & 255,
                            o = PveSptManager.taskInfo[a];
                            i.push({
                                id: a + 1,
                                freshTimes: s,
                                state: r,
                                taskInfo: o
                            })
                        }
                        n.listData.replaceAll(i),
                        n.listData.refresh()
                    }),
                    [2]
                })
            })
        },
        i.prototype.showTime = function() {
            var t = SystemTimerManager.sysBJDate,
            e = t.getDay(),
            i = t.getTime() - new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
            n = 864e5;
            4 >= e ? this._nextTime = t.getTime() + n * (5 - e) - i: this._nextTime = t.getTime() + n * (12 - e) - i,
            this.timeInterval(),
            egret.clearInterval(this._interval),
            this._interval = egret.setInterval(this.timeInterval, this, 1e3)
        },
        i.prototype.timeInterval = function() {
            var t = this._nextTime - SystemTimerManager.sysBJDate.getTime();
            if (0 >= t) return void egret.clearInterval(this._interval);
            var e = Math.floor(t / 864e5),
            i = Math.ceil(t % 864e5 / 36e5);
            e > 0 ? this.txt_freshTime.text = "距离重置还有：" + e + "天": this.txt_freshTime.text = "距离重置还有：" + i + "小时"
        },
        i.prototype.destroy = function() {
            for (EventManager.removeAll(this), egret.clearInterval(this._interval), ImageButtonUtil.removeAll(this), e.prototype.destroy.call(this), this.listData.removeAll(); this._list.numChildren;) {
                var t = this._list.getChildAt(0);
                DisplayUtil.removeForParent(t),
                t.destroy()
            }
        },
        i
    } (BasicPanel);
    t.PveSptTask = e,
    __reflect(e.prototype, "pveSpt.PveSptTask")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var a = e.call(this) || this;
            return a._currentExchangeNum = 1,
            a.skinName = t.BuyPopAdvanceSkin,
            a.data = i,
            a.exchangeNum = n,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            this.iconPrice.source = ClientConfig.getItemIcon(1725799),
            this.iconImg.source = ClientConfig.getItemIcon(this.data.realid),
            this.txtName.text = ItemXMLInfo.getName(this.data.realid),
            this.txtPrice.text = this.data.price;
            var t = ItemManager.getNumByID(1725799);
            this._maxExchangeNum = Math.min(Math.floor(t / this.data.price), this.data.exchangeNum - this.exchangeNum[this.data.id - 1]),
            8 == this.data.id && (this._maxExchangeNum = Math.min(99, t)),
            this._maxExchangeNum < 1 && (this._currentExchangeNum = this._maxExchangeNum),
            this.update()
        },
        i.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnReduce, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMAX, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMIN, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchImageButtonHandler, this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            var e = this;
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this.update();
                break;
            case this.btnReduce:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this.update();
                break;
            case this.btnMAX:
                this._currentExchangeNum = this._maxExchangeNum,
                this.update();
                break;
            case this.btnMIN:
                this._currentExchangeNum = 1,
                this.update();
                break;
            case this.btnBuy:
                var i = ItemManager.getNumByID(1725799);
                if (i < this.data.price * Math.max(1, this._currentExchangeNum) || 0 == i) Alarm.show("您的秘森核心数量不足！");
                else {
                    if (this._currentExchangeNum > this.data.exchangeNum - this.exchangeNum[this.data.id - 1]) return void Alarm.show("您的兑换次数达到上限");
                    SocketConnection.sendByQueue(41388, [36, 1e3 * this.data.id + this._currentExchangeNum],
                    function(t) {
                        EventManager.dispatchEventWith("BuyLimitItem"),
                        e.hide()
                    })
                }
                break;
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.update = function() {
            var t = ItemManager.getNumByID(1725799),
            e = t < this.data.price * Math.max(1, this._currentExchangeNum) || 0 == t;
            DisplayUtil.setEnabled(this.btnBuy, !e),
            this.txtSearch.text = this._currentExchangeNum + "/" + this._maxExchangeNum,
            this.txtPrice.text = this.data.price * this._currentExchangeNum + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.pveSptBuyLimitedPop = e,
    __reflect(e.prototype, "pveSpt.pveSptBuyLimitedPop")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var a = e.call(this) || this;
            return a._currentExchangeNum = 1,
            a.skinName = t.BuyPopType1Skin,
            a.curInfo = i,
            a.curNum = n,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents()
        },
        i.prototype.initDat = function() {
            var t = this;
            this._maxExchangeNum = Math.min(Math.floor(ItemManager.getNumByID(this.curInfo.coinid) / this.curInfo.price), this.curInfo.batch),
            this._maxExchangeNum < 1 && (this._currentExchangeNum = this._maxExchangeNum),
            this.txtPrice.text = this.curInfo.price + "";
            var e = 1 == this.curInfo.realid ? core.gameUtil.ConvertItemNumView(MainManager.actorInfo.coins, 0) : ItemManager.getNumByID(this.curInfo.realid);
            switch (this.txtHave.textFlow = [{
                text: "当前拥有：",
                style: {
                    textColor: 6258105
                }
            },
            {
                text: e + "",
                style: {
                    textColor: 4252667
                }
            }], this.txtHave.visible = !1, this.txtName.text = ItemXMLInfo.getName(this.curInfo.realid), this.curNum) {
            case 3:
                this.iconImg.source = ClientConfig.getItemIcon(this.curInfo.realid),
                this.weiyi.visible = !1,
                this.curInfo.LimitCnt && KTool.getMultiValue([this.curInfo.UserInfoId],
                function(e) {
                    t._maxExchangeNum = t.curInfo.batch - e[0],
                    t.update()
                }),
                this.update();
                break;
            case 6:
                var i = PetFragmentXMLInfo.getItemByID(this.curInfo.realid);
                this.iconImg.source = ClientConfig.getPetHeadPath(i.MonsterID),
                this.iconImg.width = this.iconImg.height = 70,
                this.iconImg.x = 15,
                this.iconImg.y = 18,
                this.txtPrice.text = this.curInfo.price + "",
                this.headFrame.visible = !0,
                i.Rarity ? this.headFrame.source = "ps_mall_petfactor_progress_wg_" + i.Rarity + "_png": this.headFrame.source = "ps_mall_petfactor_progress_wg_1_png";
                var n = PetFragmentXMLInfo.getItemByID(this.curInfo.realid);
                this.weiyi.visible = 1 == n.PetLimit,
                this.update()
            }
        },
        i.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnAdd, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnReduce, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMAX, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnMIN, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnBuy, this._onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.btnClose, this._onTouchImageButtonHandler, this)
        },
        i.prototype._onTouchImageButtonHandler = function(t) {
            var e = this;
            switch (t.currentTarget) {
            case this.btnAdd:
                if (this._currentExchangeNum >= this._maxExchangeNum) return;
                this._currentExchangeNum++,
                this.update();
                break;
            case this.btnReduce:
                if (this._currentExchangeNum <= 1) return;
                this._currentExchangeNum--,
                this.update();
                break;
            case this.btnMAX:
                this._currentExchangeNum = this._maxExchangeNum,
                this.update();
                break;
            case this.btnMIN:
                this._currentExchangeNum = 1,
                this.update();
                break;
            case this.btnBuy:
                ItemManager.getNumByID(this.curInfo.coinid) < this.curInfo.price ? Alarm.show("您的先锋旗帜数量不足！") : SocketConnection.sendByQueue(42395, [109, this.curInfo.id, this._currentExchangeNum, 0],
                function(t) {
                    3 == e.curNum && EventManager.dispatchEventWith("ItemBuy"),
                    EventManager.dispatchEventWith("BuySomething" + e.curNum),
                    e.hide()
                });
                break;
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.update = function() {
            this.txtSearch.text = this._currentExchangeNum + "/" + this._maxExchangeNum,
            this.txtPrice.text = this.curInfo.price * this._currentExchangeNum + ""
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveSptBuyPopType1 = e,
    __reflect(e.prototype, "pveSpt.PveSptBuyPopType1")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.BuyPopType2Skin,
            n.curInfo = i,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initDat(),
            this.addEvents(),
            this.updateView()
        },
        i.prototype.initDat = function() {
            this.petimg.source = ClientConfig.getPetHeadPath(this.curInfo.info.realid),
            this.txtPrice.text = this.curInfo.info.price + "",
            this.petName.text = PetXMLInfo.getName(Number(this.curInfo.info.realid)),
            this.coin.source = ClientConfig.getItemIcon(this.curInfo.info.coinid),
            this.txtHave.textFlow = [{
                text: "当前拥有：",
                style: {
                    textColor: 6258105
                }
            },
            {
                text: ItemManager.getNumByID(this.curInfo.info.coinid) + "",
                style: {
                    textColor: 4252667
                }
            }]
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnInfo,
            function() {
                t.hide(),
                PetManager.showPetIntroduce(t.curInfo.info.realid)
            },
            this),
            ImageButtonUtil.add(this.btnBuy,
            function() {
                t.curInfo.isCanGet ? SocketConnection.sendByQueue(42395, [109, t.curInfo.info.id, 1, 0],
                function(e) {
                    t.updateView(),
                    EventManager.dispatchEventWith("BuySomething1"),
                    t.hide()
                }) : Alarm.show("所需" + ItemXMLInfo.getName(t.curInfo.info.coinid) + "不足！")
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this)
        },
        i.prototype.updateView = function() {
            DisplayUtil.setEnabled(this.btnBuy, this.curInfo.isCanGet, !this.curInfo.isCanGet)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveSptBuyPopType2 = e,
    __reflect(e.prototype, "pveSpt.PveSptBuyPopType2")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i(i, n) {
            var a = e.call(this) || this;
            return a.freshPrice = [1e3, 2e3, 5e3, 1e4, 2e4],
            a.skinName = t.RefreshPopSkin,
            a.index = i,
            a.freshTime = n,
            a
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.freshTime >= 5 && (this.freshTime = 4);
            var t = this.freshPrice[this.freshTime];
            this.txtNum.textFlow = [{
                text: "确认花费",
                style: {
                    textColor: 13820671
                }
            },
            {
                text: t.toString(),
                style: {
                    textColor: 16580432
                }
            },
            {
                text: "赛尔豆刷新该任务吗？",
                style: {
                    textColor: 13820671
                }
            }]
        },
        i.prototype.addEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btnCancel,
            function() {
                t.hide()
            },
            this),
            ImageButtonUtil.add(this.btnComfirm,
            function() {
                SocketConnection.sendByQueue(41388, [36, 11 + t.index],
                function() {
                    t.hide(),
                    EventManager.dispatchEventWith("RefreshAnim", !1, t.index)
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.PveSptRefreshPop = e,
    __reflect(e.prototype, "pveSpt.PveSptRefreshPop")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = pveSptAdvancedTaskItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.animRefresh = SpineUtil.createAnimate("sptjingliang4.0"),
            this.grpAnim.addChild(this.animRefresh),
            this.animRefresh.x = this.animRefresh.y = 7,
            this.animRefresh.visible = !1
        },
        i.prototype.animRefreshPlay = function(t) {
            this.vo.ID - 4 == t.data && (this.animRefresh.visible = !0, this.btnRefresh.visible = !1, this.animRefresh.play("changtiaoshuaxin", 1), egret.setTimeout(function() {
                EventManager.dispatchEventWith("GetandRefresh")
            },
            this, 600))
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            EventManager.addEventListener("RefreshAnim", this.animRefreshPlay, this),
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(41388, [36, e.vo.ID],
                function() {
                    EventManager.dispatchEventWith("GetandRefresh")
                })
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                var i = new t.PveSptRefreshPop(e.vo.ID - 4, e.vo.reshTime);
                PopViewManager.getInstance().openView(i)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                EventManager.dispatchEventWith("enterGalax")
            },
            this),
            ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = 1725799,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.vo = this.data,
            this.vo && (this.initData(), this.addEvent())
        },
        i.prototype.initData = function() {
            if (! (this.vo.limitId <= 0)) if (this.icon.source = ClientConfig.getItemIcon(1725799), this.btnGo.visible = 0 == this.vo.progress, this.btnGet.visible = 1 == this.vo.progress, this.done.visible = 100 == this.vo.progress, this.vo.ID <= 3) switch (this.currentState = "daily", this.btnRefresh.visible = !1, this.vo.ID) {
            case 1:
                this.txt_taskName.text = "登录游戏",
                this.txt_content.text = "今日登录游戏",
                this.txt_doneTime.text = "完成1/1次",
                this.txtNum.text = "20";
                break;
            case 2:
                this.txt_taskName.text = "星系挑战",
                this.txt_content.text = "今日完成1次任意SPT关卡挑战",
                this.txtNum.text = "20",
                this.txt_doneTime.text = this.vo.progress < 1 ? "完成0/1次": "完成1/1次";
                break;
            case 3:
                this.txt_taskName.text = "星系挑战",
                this.txt_content.text = "今日完成3次任意SPT关卡挑战",
                this.txtNum.text = "40",
                this.btnGo.visible = this.vo.progress < 3,
                this.btnGet.visible = 3 == this.vo.progress,
                this.txt_doneTime.text = this.vo.progress <= 3 ? "完成" + this.vo.progress + "/3次": "完成3/3次"
            } else this.btnRefresh.visible = this.vo.progress < 100,
            this.currentState = "jinjie",
            this.txt_taskName.text = "进阶挑战",
            this.txt_content.text = t.DataConst.advancedTask[this.vo.limitId - 1].str,
            this.txt_doneTime.text = this.vo.progress < 1 ? "完成0/1次": "完成1/1次",
            this.taskLV.source = "ps_advanced_task_" + t.DataConst.advancedTask[this.vo.limitId - 1].lv + "_png",
            this.txtNum.text = t.DataConst.advancedTask[this.vo.limitId - 1].rewardNum
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.animRefresh.stopAll(),
            this.grpAnim.removeChild(this.animRefresh),
            EventManager.removeEventListener("RefreshAnim", this.animRefreshPlay, this)
        },
        i
    } (BaseItemRenderer);
    t.pveSptAdvancedTaskItem = e,
    __reflect(e.prototype, "pveSpt.pveSptAdvancedTaskItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = pveSptConditionItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.txt_target.text = this.data
        },
        e
    } (BaseItemRenderer);
    t.pveSptConditionItem = e,
    __reflect(e.prototype, "pveSpt.pveSptConditionItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "pveSptFightItemIconSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            2 == this.data.length ? this.updateView(this.data[0], this.data[1]) : this.updateView(this.data[0])
        },
        e.prototype.updateView = function(t, e) {
            if (this.icon.source = ClientConfig.getItemIcon(t), e) {
                var i = e.toString();
                e > 1e4 && (i = e / 1e4 + "万"),
                this.txtCount.text = i
            } else this.txtCount.visible = !1;
            ImageButtonUtil.add(this.icon,
            function() {
                var e = {};
                e.id = t,
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        e
    } (BaseItemRenderer);
    t.pveSptFightItemIcon = e,
    __reflect(e.prototype, "pveSpt.pveSptFightItemIcon")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "pveSptFightPetIconSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.setInfo(this.data[0]),
            this.setCompleted(this.itemIndex < this.data[1]),
            this.imgSelected.visible = this.itemIndex == this.data[1]
        },
        e.prototype.setInfo = function(t) {
            void 0 != t ? (this.pet_icon.source = ClientConfig.getPetHeadPath(t), this.pet_name.visible = !0, this.pet_name.text = PetXMLInfo.getName(t)) : (this.pet_icon.source = "pve_spt_fight_img_unkown_png", this.pet_name.visible = !1)
        },
        e.prototype.setCompleted = function(t) {
            void 0 != t ? this.completed_mask.visible = t: this.completed_mask.visible = !0
        },
        e
    } (BaseItemRenderer);
    t.pveSptFightPetIcon = e,
    __reflect(e.prototype, "pveSpt.pveSptFightPetIcon")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.canFastFight = !1,
            i.skinName = t.SptItemSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.onTouchItem = function() {
            var e = this.galaxyId;
            1 == e ? StatLogger.log("1113版本系统功能", "SPT副本", "进入帕诺星系") : 2 == e ? StatLogger.log("1113版本系统功能", "SPT副本", "进入卡兰星系") : 5 == e ? StatLogger.log("20210423版本系统功能", "SPT副本", "进入SPT挑战螺旋星系面板") : 6 == e ? StatLogger.log("20210625版本系统功能", "SPT副本", "进入SPT挑战泰坦星系面板") : 7 == e ? StatLogger.log("20210813版本系统功能", "SPT副本", "进入SPT挑战克里奥星域面板") : 8 == e ? StatLogger.log("20211029版本系统功能", "SPT副本", "进入SPT挑战冥域面板") : 9 == e && StatLogger.log("20211210版本系统功能", "SPT副本", "进入SPT挑战魔界面板"),
            this.parent.parent.parent.parent.parent.parent.addChild(new t.PveSptGalaxy({
                id: e,
                difficulty: PveSptManager.getLastDifficulty(e)
            }))
        },
        i.prototype.dataChanged = function() {
            var i = this;
            e.prototype.dataChanged.call(this),
            this.galaxyId = this.data,
            this.difficulty = PveSptManager.getLastDifficulty(this.galaxyId);
            var n = 255 & PveSptManager.unlockProgress,
            a = PveSptManager.unlockProgress >> 8 & 255;
            1 == this.difficulty ? this._unlock = !(this.galaxyId - 1 <= n) : this._unlock = !(this.galaxyId - 1 <= a && this.galaxyId <= n),
            ImageButtonUtil.removeAll(this),
            this._unlock || ImageButtonUtil.addWithoutLock(this.sptitem, this.onTouchItem, this);
            for (var s = function(e) {
                ImageButtonUtil.add(r["icon" + (e + 1)],
                function() {
                    var n = {};
                    n.id = t.DataConst.galaxyItems[i.galaxyId - 1][e],
                    tipsPop.TipsPop.openItemPop(n)
                },
                r)
            },
            r = this, o = 0; 3 > o; o++) s(o);
            var _ = PveSptManager.challengeProgress[this.galaxyId - 1];
            this.challengeProgress = _ >> 16 * (this.difficulty - 1) & 255,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            if (this.galaxyId) {
                for (var i = 0; 3 > i; i++) this["icon" + (i + 1)].source = ClientConfig.getItemIcon(t.DataConst.galaxyItems[this.galaxyId - 1][i]);
                this.img_galaxy.source = "pve_spt_item_galaxy_" + this.galaxyId + "_" + this.difficulty + "_png",
                this.img_galaxy.width = 269,
                this.img_galaxy.height = 478,
                this.jcms.visible = !this._unlock,
                this.jcms.text = 1 == this.difficulty ? "简单模式": "困难模式",
                this.txt_progress.visible = this._bar.visible = !0,
                this.img_lock.visible = this._unlock,
                this.img_lock.source = "pve_spt_item_lock_" + this.galaxyId + "_png",
                this.img_lock.width = 268,
                this.img_lock.height = 478;
                var n = config.SPTtask.getItems().filter(function(t) {
                    return t.galaxyid == e.galaxyId && t.taskmode == e.difficulty && 1 == t.tasktype
                }),
                a = n.length;
                this.txt_progress.visible = this.txt_pgsTitle.visible = !this._unlock,
                this.txt_progress.text = Math.floor(this.challengeProgress / a * 100) + "%",
                this._bar.visible = !this._unlock,
                this._bar.maximum = a,
                this._bar.value = this.challengeProgress;
                var s = config.SPTstar.getItems().filter(function(t) {
                    return t.galaxyid == e.galaxyId
                });
                a = 0;
                for (var r = 0,
                o = s; r < o.length; r++) {
                    var i = o[r];
                    a = i.starcnt
                }
                PveSptManager.getGalaxyStarNum(this.galaxyId, this.difficulty).then(function(t) {
                    e.imgFastFight.visible = t >= a / 2
                })
            } else;
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        i
    } (BaseItemRenderer);
    t.pveSptItem = e,
    __reflect(e.prototype, "pveSpt.pveSptItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.pveSptMallItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnBuy, this.buy, this),
            ImageButtonUtil.add(this.achieveIcon, this.iconShow, this),
            EventManager.addEventListener("ItemBuy", this.update3, this)
        },
        i.prototype.dataChanged = function() {
            return e.prototype.dataChanged.call(this),
            void 0 == this.data ? void(this.visible = !1) : (this.info = this.data, this.initData(), void((3 == this.info.id || 4 == this.info.id) && ImageButtonUtil.add(this.icon, this.iconShow, this, !1)))
        },
        i.prototype.initData = function() {
            if (void 0 == this.info) return void(this.visible = !1);
            switch (this.costIcon.source = ClientConfig.getItemIcon(this.info.info.coinid), this.info.id) {
            case 2:
                this.update2();
                break;
            case 3:
                this.update3();
                break;
            case 4:
                this.update4();
                break;
            case 5:
                this.update5();
                break;
            case 6:
                this.update6()
            }
            this.cacheAsBitmap = !0
        },
        i.prototype.update2 = function() {
            this.achieveIcon.visible = !0,
            this.icon.visible = !1,
            this.txt_itemNum.visible = !1,
            this.branchId = Math.floor(this.info.info.realid / 100),
            this.ruleId = this.info.info.realid % 100;
            var t = AchieveXMLInfo.getRule(this.branchId, this.ruleId);
            this.txtPrice.text = this.info.info.price + "",
            t ? (this.txtName.text = t.Desc, this.SpeNameBonus = t.SpeNameBonus) : console.warn("错误信息:" + t, this.ruleId, this.branchId),
            this.SpeNameBonus ? this.achieveIcon.source = ClientConfig.getAchieveSPTIcon(t.proicon) : (this.achieveIcon.source = ClientConfig.getAchieveSPTIcon(t.proicon), this.achieveIcon.x = 45);
            var e = null,
            i = AchieveManager.getAwardMask(this.branchId, this.ruleId);
            i && (e = i.rule_mask),
            this.btnBuy.visible = !this.info.isGet,
            this.hasGet.visible = this.info.isGet,
            this.txtLimited.visible = !1
        },
        i.prototype.update3 = function() {
            this.icon.visible = !0,
            this.txt_itemNum.visible = !0,
            this.txtPrice.text = this.info.info.price + "",
            this.icon.source = ClientConfig.getItemIcon(this.info.info.realid),
            this.txtName.text = ItemXMLInfo.getName(this.info.info.realid),
            this.btnBuy.visible = !this.info.isGet,
            this.txtLimited.visible = !this.info.isCanGet,
            this.hasGet.visible = this.info.isGet;
            var t = ["每日", "每周", "每月", "永久"];
            this.txtLimited.text = t[this.info.info.Limittype - 1] + "限兑：" + Math.min(this.info.itemNum, this.info.info.LimitCnt) + "/" + this.info.info.LimitCnt;
            var e = 0 == this.info.info.count ? 1 : this.info.info.count;
            this.txt_itemNum.text = e >= 1e4 ? Math.floor(this.info.info.count / 1e4) + "万": e + ""
        },
        i.prototype.update4 = function() {
            var t = this;
            this.icon.visible = !0,
            this.txtLimited.visible = !1,
            this.txtPrice.text = this.info.info.price + "",
            2 == this.info.info.type ? this.icon.source = ClientConfig.getMarkPath(this.info.info.realid) : 7 == this.info.info.type ? this.icon.source = "pveRewardMall_gxPet_icon_2_png": 6 == this.info.info.type && (this.icon.source = "pveRewardMall_gxPet_icon_1_png"),
            this.txtName.text = PetXMLInfo.getName(this.info.info.boundmonster),
            KTool.getBitSet([this.info.info.BitSetId],
            function(e) {
                244 == t.info.info.id || 245 == t.info.info.id ? KTool.getMultiValue([6773],
                function(i) {
                    var n = KTool.getBit(i[0], t.info.info.id - 242);
                    t.btnBuy.visible = !e[0] && !n,
                    t.hasGet.visible = !!e[0] || !!n
                }) : (t.btnBuy.visible = !e[0], t.hasGet.visible = !!e[0], t.txtLimited.text = ~~ !! e[0] + "/1")
            });
            var e = 0 == this.info.info.count ? 1 : this.info.info.count;
            this.txt_itemNum.text = e + ""
        },
        i.prototype.update5 = function() {
            this.icon.visible = !0,
            this.txtLimited.visible = !1,
            this.txt_itemNum.visible = !1,
            this.txtPrice.text = this.info.info.price + "",
            null == config.Profilephoto.getItem(this.info.info.realid) && console.log(this.info),
            this.txtName.text = config.Profilephoto.getItem(this.info.info.realid).name;
            var t;
            if (8 == this.info.info.type) this.icon.source = ClientConfig.GetAvatarHead(this.info.info.realid),
            t = core.AvatarDataMgr.GetInstance().GetHeadDataById(this.info.info.realid);
            else {
                var e = config.Profilephoto.getItem(this.info.info.realid);
                this.icon.source = ClientConfig.GetAvatarFrame(e.icon),
                t = core.AvatarDataMgr.GetInstance().GetHeadFrameDataById(this.info.info.realid)
            }
            this.btnBuy.visible = !t,
            this.hasGet.visible = !!t,
            this.txtLimited.text = ~~ !! t + "/1";
            var i = 0 == this.info.info.count ? 1 : this.info.info.count;
            this.txt_itemNum.text = i + ""
        },
        i.prototype.update6 = function() {
            this.icon.visible = !0,
            this.txt_itemNum.visible = !1,
            this.txtLimited.visible = !1,
            this.headFrame.visible = !0,
            this.btnBuy.visible = !0,
            this.hasGet.visible = !1;
            var t = PetFragmentXMLInfo.getItemByID(this.info.info.realid);
            this.txtPrice.text = this.info.info.price + "",
            this.icon.source = ClientConfig.getPetHeadPath(t.MonsterID),
            this.txtName.text = PetXMLInfo.getName(t.MonsterID),
            t.Rarity ? this.headFrame.source = "ps_mall_petfactor_progress_wg_" + t.Rarity + "_png": this.headFrame.source = "ps_mall_petfactor_progress_wg_1_png"
        },
        i.prototype.iconShow = function() {
            switch (this.info.id) {
            case 2:
                if (this.SpeNameBonus) {
                    var t = {};
                    t.SpeNameBonus = this.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(t)
                } else {
                    var t = {};
                    t.branchId = this.branchId,
                    t.ruleId = this.ruleId,
                    tipsPop.TipsPop.openTitlePop(t)
                }
                break;
            case 3:
                var e = {};
                e.id = this.info.info.realid,
                tipsPop.TipsPop.openItemPop(e);
                break;
            case 4:
                if (2 == this.info.info.type) {
                    var i = {};
                    i.ins = this.info.info.realid,
                    tipsPop.TipsPop.openCounterMarkPop(i)
                } else if (7 == this.info.info.type) ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this.info.info.boundmonster, "", AppDoStyle.NULL);
                else if (6 == this.info.info.type) {
                    var n = {};
                    n.id = this.info.info.realid,
                    tipsPop.TipsPop.openSkillPop(n)
                }
                break;
            case 5:
                break;
            case 6:
            }
        },
        i.prototype.buy = function() {
            var t = this;
            switch (this.info.id) {
            case 2:
                var e = {};
                e.ins = this.info.info,
                e.caller = this,
                e.callBack = function(e, i) {
                    var n = Math.floor(t.info.info.realid / 100);
                    SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function() {
                        AchieveManager.updateSingleInfo(n).then(function() {
                            EventManager.dispatchEventWith("BuySomething2")
                        })
                    })
                },
                ModuleManager.showModuleByID(1, e);
                break;
            case 3:
                var e = {};
                e.ins = this.info.info,
                e.caller = this,
                e.callBack = function(e, i) {
                    SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function(t) {
                        EventManager.dispatchEventWith("ItemBuy"),
                        EventManager.dispatchEventWith("BuySomething3")
                    })
                },
                ModuleManager.showModuleByID(1, e);
                break;
            case 4:
                var e = {};
                e.ins = this.info.info,
                e.caller = this,
                e.callBack = function(e, i) {
                    return PetManager.getPetInfo(PetManager.defaultTime).id != t.info.info.boundmonster ? void Alarm.show("请先将" + PetXMLInfo.getName(t.info.info.boundmonster) + "放入出战背包首发！") : void SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function(e) {
                        EventManager.dispatchEventWith("BuySomething4");
                        var i = 6 == t.info.info.type ? "第五技能": "专属特性"; (6 == t.info.info.type || 7 == t.info.info.type) && BubblerManager.getInstance().showText("你的" + PetXMLInfo.getName(t.info.info.boundmonster) + "已成功开启" + i),
                        t.update4()
                    })
                },
                ModuleManager.showModuleByID(1, e);
                break;
            case 5:
                var e = {};
                e.ins = this.info.info,
                e.caller = this,
                e.callBack = function(e, i) {
                    SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function() {
                        EventManager.dispatchEventWith("BuySomething5"),
                        EventManager.dispatchEventWith("RedPointEvent")
                    })
                },
                ModuleManager.showModuleByID(1, e);
                break;
            case 6:
                var e = {};
                e.ins = this.info.info,
                e.caller = this,
                e.callBack = function(e, i) {
                    SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function(t) {
                        EventManager.dispatchEventWith("BuySomething6")
                    })
                },
                ModuleManager.showModuleByID(1, e)
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.removeEventListener("ItemBuy", this.update3, this)
        },
        i
    } (BaseItemRenderer);
    t.pveSptMallItem = e,
    __reflect(e.prototype, "pveSpt.pveSptMallItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.SptpetNewItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.Buy,
            function() {
                var e = {};
                e.ins = t.info.info,
                e.caller = t,
                e.callBack = function(e, i) {
                    t.info.isCanGet ? SocketConnection.sendByQueue(42395, [109, t.info.info.id, i, 0],
                    function(t) {
                        EventManager.dispatchEventWith("BuySomething1")
                    }) : Alarm.show("所需" + ItemXMLInfo.getName(t.info.info.coinid) + "不足！")
                },
                ModuleManager.showModuleByID(1, e)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.info = this.data,
            this.petimg.source = ClientConfig.getPetHalfIcon(this.info.info.realid),
            this.petName.text = PetXMLInfo.getName(Number(this.info.info.realid)),
            this.txtPetPrice.text = this.info.info.price + "",
            this.coin.source = ClientConfig.getItemIcon(this.info.info.coinid),
            this.update()
        },
        i.prototype.update = function() {
            this.hasGet.visible = this.info.isGet,
            this.Buy.visible = !this.info.isGet,
            this.txtLimited.text = "限兑：" + ~~this.info.isGet + "/1",
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            this.removeChildren(),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseItemRenderer);
    t.pveSptMallPetItem = e,
    __reflect(e.prototype, "pveSpt.pveSptMallPetItem")
} (pveSpt || (pveSpt = {}));
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
pveSpt; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = pveSptStarItemItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var e = this;
            t.prototype.dataChanged.call(this),
            this.data[2] ? (this.icon.source = ClientConfig.getItemIcon(this.data[0]), this.txtCount.text = core.gameUtil.ConvertToTenThousand(this.data[1]), ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.id = ~~e.data[0],
                tipsPop.TipsPop.openItemPop(t)
            },
            this)) : (this.icon.width = 30, this.icon.source = this.data[0], this.txtCount.visible = !1, ImageButtonUtil.add(this.icon,
            function() {
                var t = {};
                t.branchId = Math.floor(e.data[1] / 100),
                t.ruleId = e.data[1] % 100,
                tipsPop.TipsPop.openTitlePop(t)
            },
            this))
        },
        e
    } (BaseItemRenderer);
    t.pveSptStarItemItem = e,
    __reflect(e.prototype, "pveSpt.pveSptStarItemItem")
} (pveSpt || (pveSpt = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(a, s) {
        function r(t) {
            try {
                _(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function _(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, o)
        }
        _((n = n.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, s && (r = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(s, i[1])).done) return r;
            switch (s = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (r = _.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < r[1]) {
                    _.label = r[1],
                    r = i;
                    break
                }
                if (r && _.label < r[2]) {
                    _.label = r[2],
                    _.ops.push(i);
                    break
                }
                r[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            a = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, s, r, o, _ = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
pveSpt; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._maxFresh = 3,
            i.starStr = ["至少一星", "至少两星", "三星"],
            i.diffStr = ["简单", "困难"],
            i.taskRewardId = [19, 18],
            i.sRewardId = [17, 16],
            i.skinName = t.PveSptTaskItemSkin,
            i.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnReceive,
            function() {
                SocketConnection.sendByQueue(42395, [111, 4, i._info.id, 0],
                function() {
                    i.updateInfo()
                })
            },
            this);
            for (var n = function(t) {
                ImageButtonUtil.add(a["icon_" + t],
                function() {
                    var e;
                    e = 3 == i.star ? ~~config.SPTreward.getItem(i.sRewardId[0]).rewardid.split("_")[t] : ~~config.SPTreward.getItem(i.taskRewardId[i.star - 1]).rewardid.split("_")[t];
                    var n = {};
                    n.id = e,
                    tipsPop.TipsPop.openItemPop(n)
                },
                a)
            },
            a = this, s = 0; 2 > s; s++) n(s);
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(42395, [111, 5, i._info.id, 0],
                function() {
                    i.updateInfo()
                })
            },
            this),
            ImageButtonUtil.add(this.btnFresh,
            function() {
                4 == i._info.state || i._info.freshTimes >= i._maxFresh || SocketConnection.sendByQueue(42395, [111, 3, i._info.id, 0],
                function() {
                    i.updateInfo()
                })
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var e, i, n, a;
                    return __generator(this,
                    function(s) {
                        switch (s.label) {
                        case 0:
                            return e = this._info.taskInfo >> 16 & 255,
                            i = this._info.taskInfo >> 24 & 255,
                            n = this._info.taskInfo >> 8 & 255,
                            [4, t.PveSpt.getPlanetOpen(e, i, n)];
                        case 1:
                            return a = s.sent(),
                            a ? (this.parent.parent.parent.parent.parent.addChild(new t.PveSptGalaxy({
                                id: this._info.taskInfo >> 16 & 255,
                                difficulty: PveSptManager.getLastDifficulty(this._info.taskInfo >> 16 & 255)
                            })), EventManager.dispatchEventWith(PveSptManager.EVENT_GOTO_TASK, !0, {
                                galaxyId: e,
                                planetId: i,
                                difficulty: n
                            },
                            !0)) : BubblerManager.getInstance().showText("未解锁该关卡"),
                            [2]
                        }
                    })
                })
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        i.prototype.updateView = function() {
            if (this._info.state < 2) this.currentState = "notGet";
            else {
                var t = 4 == this._info.state || this._info.freshTimes >= this._maxFresh || 3 == this._info.state;
                this.btnFresh.visible = !t,
                this.currentState = "got",
                this.star = 255 & this._info.taskInfo;
                var e = this._info.taskInfo >> 8 & 255,
                i = this._info.taskInfo >> 16 & 255,
                n = this._info.taskInfo >> 24 & 255;
                if (this.img_level.source = "ps_bounty_task_" + this.star + "_png", this.txt_freshTimes.text = Math.max(0, this._maxFresh - this._info.freshTimes) + "/" + this._maxFresh, this.txt_intro.text = this.starStr[this.star - 1] + "通关" + this.diffStr[e - 1] + "模式" + i + "-" + n, 3 == this.star) for (var a = 0; 2 > a; a++) {
                    var s = ~~config.SPTreward.getItem(this.sRewardId[a]).rewardid.split("_")[a];
                    this["icon_" + a].source = ClientConfig.getItemIcon(s),
                    this["txtCount_" + a].text = config.SPTreward.getItem(this.sRewardId[a]).rewardcnt.split("_")[a]
                } else for (var r = config.SPTreward.getItem(this.taskRewardId[this.star - 1]), a = 0; 2 > a; a++) this["icon_" + a].source = ClientConfig.getItemIcon(r.rewardid.split("_")[a]),
                this["txtCount_" + a].text = r.rewardcnt.split("_")[a];
                this.flag_finish.visible = 4 == this._info.state,
                this.btnGet.visible = 3 == this._info.state,
                this.btnGo.visible = 2 == this._info.state
            }
        },
        i.prototype.updateInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([201544].concat(PveSptManager._taskAttrList))];
                    case 1:
                        return t = e.sent(),
                        this._info.freshTimes = t[0] >> 8 * (this._info.id - 1) & 255,
                        PveSptManager.taskState = t[1],
                        PveSptManager.taskInfo = t.slice(2, 5),
                        this._info.state = PveSptManager.taskState >> 8 * (this._info.id - 1) & 255,
                        this._info.taskInfo = PveSptManager.taskInfo[this._info.id - 1],
                        EventManager.dispatchEventWith(PveSptManager.EVENT_REFRESH_TASK),
                        this.updateView(),
                        [2]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        i
    } (BaseItemRenderer);
    t.pveSptTaskItem = e,
    __reflect(e.prototype, "pveSpt.pveSptTaskItem")
} (pveSpt || (pveSpt = {})),
window.pveSpt = window.pveSpt || {},
window.skins = window.skins || {};
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
generateEUI.paths["resource/eui_skins/new/BountyTaskSkin.exml"] = window.pveSpt.BountyTaskSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "content", "txt_freshTime", "txt_weeklyTimes", "top_mid"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i(), this.top_mid_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.height = 500,
        t.horizontalCenter = 87,
        t.width = 930,
        t.y = 96,
        t.elementsContent = [this._list_i()],
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 50,
        t
    },
    i.top_mid_i = function() {
        var t = new eui.Group;
        return this.top_mid = t,
        t.cacheAsBitmap = !0,
        t.right = 3,
        t.y = 10,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_freshTime_i(), this.txt_weeklyTimes_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_img_di1_png",
        t.x = 153,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_img_di2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_freshTime_i = function() {
        var t = new eui.Label;
        return this.txt_freshTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 17.9987564190751,
        t.text = "距离重置还有：   天",
        t.textColor = 12834813,
        t.visible = !0,
        t.x = 166,
        t.y = 1,
        t
    },
    i.txt_weeklyTimes_i = function() {
        var t = new eui.Label;
        return this.txt_weeklyTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0101510119681,
        t.text = "本周完成:",
        t.textColor = 12834813,
        t.width = 120,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pop/BuyPopLimitedSkin.exml"] = window.pveSpt.BuyPopAdvanceSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnBuy", "iconPrice", "txtName", "txtHave", "txtPrice", "weiyi", "iconImg", "headFrame", "btnMIN", "btnMAX", "btnAdd", "btnReduce", "txtSearch", "buyPop"],
        this.height = 331,
        this.width = 481,
        this.elementsContent = [this.buyPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.buyPop_i = function() {
        var t = new eui.Group;
        return this.buyPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnBuy_i(), this.iconPrice_i(), this._Image3_i(), this.txtName_i(), this.txtHave_i(), this.txtPrice_i(), this.weiyi_i(), this._Image4_i(), this._Group1_i(), this._Image7_i(), this.btnMIN_i(), this.btnMAX_i(), this.btnAdd_i(), this.btnReduce_i(), this.txtSearch_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 327,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 481,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ps_buy_pop_close_png",
        t.x = 439,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "ps_buy_pop_btnDuihuan_png",
        t.x = 173,
        t.y = 267,
        t
    },
    i.iconPrice_i = function() {
        var t = new eui.Image;
        return this.iconPrice = t,
        t.height = 20,
        t.source = "ps_buy_pop_tuceng_570_png",
        t.width = 20,
        t.x = 205,
        t.y = 240,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 130,
        t.source = "ps_buy_pop_petbg_png",
        t.width = 436,
        t.x = 23,
        t.y = 53,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.height = 22,
        t.size = 22,
        t.text = "火焰至尊 艾恩斯因子",
        t.textAlign = "left",
        t.textColor = 13820671,
        t.width = 205,
        t.x = 173,
        t.y = 70,
        t
    },
    i.txtHave_i = function() {
        var t = new eui.Label;
        return this.txtHave = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前拥有：8000000",
        t.textColor = 6258105,
        t.visible = !1,
        t.width = 190,
        t.x = 177,
        t.y = 144,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "800",
        t.textColor = 6258105,
        t.x = 232,
        t.y = 242,
        t
    },
    i.weiyi_i = function() {
        var t = new eui.Image;
        return this.weiyi = t,
        t.source = "ps_buy_pop_zu_7_png",
        t.visible = !1,
        t.x = 176,
        t.y = 107,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "ps_buy_pop_poptitle1_png",
        t.x = 28,
        t.y = -5,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 37,
        t.y = 66,
        t.elementsContent = [this._Image5_i(), this.iconImg_i(), this.headFrame_i(), this._Image6_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "ps_buy_pop_itembg_png",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 1,
        t.y = 1,
        t
    },
    i.iconImg_i = function() {
        var t = new eui.Image;
        return this.iconImg = t,
        t.height = 55,
        t.visible = !0,
        t.width = 55,
        t.x = 25,
        t.y = 25,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Image;
        return this.headFrame = t,
        t.source = "ps_mall_petfactor_progress_wg_1_png",
        t.visible = !1,
        t.x = 15,
        t.y = 15,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.scale9Grid = new egret.Rectangle(2, 2, 8, 8),
        t.source = "ps_buy_pop_jx_2_kb_2_png",
        t.visible = !0,
        t.width = 103,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.source = "ps_buy_pop_searchbg_png",
        t.x = 160,
        t.y = 198,
        t
    },
    i.btnMIN_i = function() {
        var t = new eui.Image;
        return this.btnMIN = t,
        t.source = "ps_buy_pop_btnmin_png",
        t.x = 68,
        t.y = 199,
        t
    },
    i.btnMAX_i = function() {
        var t = new eui.Image;
        return this.btnMAX = t,
        t.source = "ps_buy_pop_btnmax_png",
        t.x = 364,
        t.y = 199,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "ps_buy_pop_btnadd_png",
        t.x = 328,
        t.y = 199,
        t
    },
    i.btnReduce_i = function() {
        var t = new eui.Image;
        return this.btnReduce = t,
        t.source = "ps_buy_pop_btnreduce_png",
        t.x = 124,
        t.y = 199,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.Label;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 16,
        t.text = "1/100",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.verticalAlign = "middle",
        t.width = 160,
        t.x = 160,
        t.y = 200,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pop/BuyPopType1Skin.exml"] = window.pveSpt.BuyPopType1Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnBuy", "txtName", "txtHave", "txtPrice", "weiyi", "iconImg", "headFrame", "btnMIN", "btnMAX", "btnAdd", "btnReduce", "txtSearch", "buyPop"],
        this.height = 331,
        this.width = 481,
        this.elementsContent = [this.buyPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.buyPop_i = function() {
        var t = new eui.Group;
        return this.buyPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnBuy_i(), this._Image3_i(), this._Image4_i(), this.txtName_i(), this.txtHave_i(), this.txtPrice_i(), this.weiyi_i(), this._Image5_i(), this._Group1_i(), this._Image8_i(), this.btnMIN_i(), this.btnMAX_i(), this.btnAdd_i(), this.btnReduce_i(), this.txtSearch_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 327,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 481,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ps_buy_pop_close_png",
        t.x = 439,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Image;
        return this.btnBuy = t,
        t.source = "ps_buy_pop_btnbuy_png",
        t.x = 173,
        t.y = 267,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_buy_pop_tuceng_570_png",
        t.width = 20,
        t.x = 205,
        t.y = 240,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 130,
        t.source = "ps_buy_pop_petbg_png",
        t.width = 436,
        t.x = 23,
        t.y = 53,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.height = 22,
        t.size = 22,
        t.text = "火焰至尊 艾恩斯因子",
        t.textAlign = "left",
        t.textColor = 13820671,
        t.width = 205,
        t.x = 173,
        t.y = 70,
        t
    },
    i.txtHave_i = function() {
        var t = new eui.Label;
        return this.txtHave = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前拥有：8000000",
        t.textColor = 6258105,
        t.width = 190,
        t.x = 177,
        t.y = 144,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "800",
        t.textColor = 6258105,
        t.x = 232,
        t.y = 242,
        t
    },
    i.weiyi_i = function() {
        var t = new eui.Image;
        return this.weiyi = t,
        t.source = "ps_buy_pop_zu_7_png",
        t.x = 176,
        t.y = 107,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "ps_buy_pop_poptitle_png",
        t.x = 28,
        t.y = -4,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 37,
        t.y = 66,
        t.elementsContent = [this._Image6_i(), this.iconImg_i(), this.headFrame_i(), this._Image7_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.source = "ps_buy_pop_juxing_634_png",
        t.visible = !0,
        t.x = 1,
        t.y = 1,
        t
    },
    i.iconImg_i = function() {
        var t = new eui.Image;
        return this.iconImg = t,
        t.height = 55,
        t.visible = !0,
        t.width = 55,
        t.x = 25,
        t.y = 25,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Image;
        return this.headFrame = t,
        t.source = "ps_mall_petfactor_progress_wg_1_png",
        t.visible = !1,
        t.x = 15,
        t.y = 15,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.scale9Grid = new egret.Rectangle(2, 2, 8, 8),
        t.source = "ps_spt_pet_pop_jx_2_kb_2_png",
        t.visible = !0,
        t.width = 103,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.source = "ps_buy_pop_searchbg_png",
        t.x = 160,
        t.y = 198,
        t
    },
    i.btnMIN_i = function() {
        var t = new eui.Image;
        return this.btnMIN = t,
        t.source = "ps_buy_pop_btnmin_png",
        t.x = 68,
        t.y = 199,
        t
    },
    i.btnMAX_i = function() {
        var t = new eui.Image;
        return this.btnMAX = t,
        t.source = "ps_buy_pop_btnmax_png",
        t.x = 364,
        t.y = 199,
        t
    },
    i.btnAdd_i = function() {
        var t = new eui.Image;
        return this.btnAdd = t,
        t.source = "ps_buy_pop_btnadd_png",
        t.x = 328,
        t.y = 199,
        t
    },
    i.btnReduce_i = function() {
        var t = new eui.Image;
        return this.btnReduce = t,
        t.source = "ps_buy_pop_btnreduce_png",
        t.x = 124,
        t.y = 199,
        t
    },
    i.txtSearch_i = function() {
        var t = new eui.Label;
        return this.txtSearch = t,
        t.fontFamily = "MFShangHei",
        t.height = 25,
        t.size = 16,
        t.text = "1/100",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.verticalAlign = "middle",
        t.width = 160,
        t.x = 160,
        t.y = 200,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pop/BuyPopType2Skin.exml"] = window.pveSpt.BuyPopType2Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "txtPrice", "coin", "btnBuy", "btnInfo", "petName", "petInfo", "txtHave", "petimg", "petPop"],
        this.height = 290,
        this.width = 482,
        this.elementsContent = [this.petPop_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.petPop_i = function() {
        var t = new eui.Group;
        return this.petPop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnBuy_i(), this._Image4_i(), this.btnInfo_i(), this.petName_i(), this.petInfo_i(), this.txtHave_i(), this._Image5_i(), this._Image6_i(), this.petimg_i(), this._Image7_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 290,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 482,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_up_bg_m_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "ps_spt_pet_pop_close_png",
        t.x = 440,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 330,
        t.y = 218,
        t.elementsContent = [this._Image3_i(), this.txtPrice_i(), this.coin_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_pet_pop_a_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.size = 22,
        t.text = "500",
        t.textColor = 10181146,
        t.x = 58,
        t.y = 14,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 20,
        t.source = "ps_spt_pet_pop_tuceng_574_png",
        t.width = 20,
        t.x = 24,
        t.y = 12,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 131,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "ps_spt_pet_pop_petbg_png",
        t.width = 436,
        t.x = 24,
        t.y = 53,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.source = "ps_spt_pet_pop_btninfo_png",
        t.x = 36,
        t.y = 223,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "火焰至尊 艾恩斯",
        t.textColor = 13820671,
        t.x = 174,
        t.y = 70,
        t
    },
    i.petInfo_i = function() {
        var t = new eui.Label;
        return this.petInfo = t,
        t.fontFamily = "MFShangHei",
        t.height = 43,
        t.size = 18,
        t.text = "赠送精灵的第五技能，专属特性，\n专属刻印",
        t.textColor = 6258105,
        t.width = 270,
        t.x = 173,
        t.y = 103,
        t
    },
    i.txtHave_i = function() {
        var t = new eui.Label;
        return this.txtHave = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前拥有：8000000",
        t.textColor = 6258105,
        t.visible = !0,
        t.width = 180,
        t.x = 299,
        t.y = 196,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_pet_pop_yhgg_png",
        t.x = 28,
        t.y = -5,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 100,
        t.source = "ps_spt_pet_pop_juxing_634_png",
        t.visible = !0,
        t.width = 100,
        t.x = 39,
        t.y = 68,
        t
    },
    i.petimg_i = function() {
        var t = new eui.Image;
        return this.petimg = t,
        t.visible = !0,
        t.x = 40,
        t.y = 69,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.scale9Grid = new egret.Rectangle(2, 2, 8, 8),
        t.source = "ps_spt_pet_pop_jx_2_kb_2_png",
        t.visible = !0,
        t.width = 103,
        t.x = 38,
        t.y = 67,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pop/RefreshPopSkin.exml"] = window.pveSpt.RefreshPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnCancel", "btnComfirm", "txtNum"],
        this.height = 203,
        this.width = 421,
        this.elementsContent = [this._Image1_i(), this.btnCancel_i(), this.btnComfirm_i(), this.txtNum_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 203,
        t.scale9Grid = new egret.Rectangle(2, 0, 12, 11),
        t.source = "ps_refresh_pop_di_kaobei_png",
        t.visible = !0,
        t.width = 421,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnCancel_i = function() {
        var t = new eui.Image;
        return this.btnCancel = t,
        t.source = "ps_refresh_pop_btncancel_png",
        t.x = 239,
        t.y = 134,
        t
    },
    i.btnComfirm_i = function() {
        var t = new eui.Image;
        return this.btnComfirm = t,
        t.source = "ps_refresh_pop_btncomfirm_png",
        t.x = 42,
        t.y = 134,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "确认花费20000赛尔豆刷新该任务吗？",
        t.textColor = 13820671,
        t.x = 56,
        t.y = 57,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pveSpt.AdvancedTaskShopSkin.exml"] = window.pveSpt.AdvancedTaskShopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "txt_price1", "cost1", "btnBuy_1", "limited_1", "txt_leftTime_1", "time", "hasGet1", "item1", "txt_price2", "cost2", "btnBuy_2", "icon2", "limited_2", "txt_leftTime_2", "time_2", "hasGet2", "item2", "txt_price3", "cost3", "btnBuy_3", "icon3", "zstx_2", "limited_3", "txt_leftTime_3", "time_3", "hasGet3", "item3", "txt_price4", "cost4", "btnBuy_4", "diwujineng", "limited_4", "txt_leftTime_4", "time_4", "icon4", "hasGet4", "item4", "txt_price5", "cost5", "btnBuy_5", "limited_5", "txt_leftTime_5", "time_5", "icon5", "hasGet5", "item5", "txt_price6", "cost6", "btnBuy_6", "limited_6", "txt_leftTime_6", "time_6", "icon6", "hasGet6", "item6", "txt_price7", "cost7", "btnBuy_7", "limited_7", "txt_leftTime_7", "time_7", "icon7", "hasGet7", "item7", "txt_price8", "cost8", "btnBuy_8", "txt_leftTime_8", "time_8", "icon8", "hasGet8", "item8", "shop1", "txtCoinNum", "icon", "topRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.shop1_i(), this.topRight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.shop1_i = function() {
        var t = new eui.Group;
        return this.shop1 = t,
        t.horizontalCenter = 67,
        t.visible = !0,
        t.y = 85,
        t.elementsContent = [this._Image2_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i(), this._Image23_i(), this.item5_i(), this.item6_i(), this.item7_i(), this.item8_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 243,
        t.source = "ps_limited_shop_zu_38_png",
        t.visible = !0,
        t.width = 868,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item1_i = function() {
        var t = new eui.Group;
        return this.item1 = t,
        t.x = 50,
        t.y = 52,
        t.elementsContent = [this._Image3_i(), this.pet_i(), this._Image4_i(), this.btnBuy_1_i(), this._Label1_i(), this.limited_1_i(), this.time_i(), this._Image7_i(), this.hasGet1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.visible = !0,
        t.width = 145,
        t.x = 2,
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.height = 134,
        t.source = "ps_limited_shop_pet_png",
        t.visible = !0,
        t.width = 139,
        t.x = 6,
        t.y = 17,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.visible = !0,
        t.width = 137,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_1_i = function() {
        var t = new eui.Group;
        return this.btnBuy_1 = t,
        t.x = 3,
        t.y = 137,
        t.elementsContent = [this._Image5_i(), this.txt_price1_i(), this.cost1_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 143,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price1_i = function() {
        var t = new eui.Label;
        return this.txt_price1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost1_i = function() {
        var t = new eui.Image;
        return this.cost1 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "加尔鲁特",
        t.textColor = 14543359,
        t.x = 41,
        t.y = 7,
        t
    },
    i.limited_1_i = function() {
        var t = new eui.Label;
        return this.limited_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/1",
        t.textColor = 4187130,
        t.x = 44,
        t.y = 118,
        t
    },
    i.time_i = function() {
        var t = new eui.Group;
        return this.time = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image6_i(), this.txt_leftTime_1_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_1_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 2,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 40,
        t.x = 0,
        t.y = 28,
        t
    },
    i.hasGet1_i = function() {
        var t = new eui.Label;
        return this.hasGet1 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item2_i = function() {
        var t = new eui.Group;
        return this.item2 = t,
        t.visible = !1,
        t.x = 255,
        t.y = 52,
        t.elementsContent = [this._Image8_i(), this._Image9_i(), this.btnBuy_2_i(), this.icon2_i(), this._Label2_i(), this.limited_2_i(), this.time_2_i(), this._Image12_i(), this.hasGet2_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 137,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_2_i = function() {
        var t = new eui.Group;
        return this.btnBuy_2 = t,
        t.visible = !0,
        t.x = 3,
        t.y = 137,
        t.elementsContent = [this._Image10_i(), this.txt_price2_i(), this.cost2_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 143,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price2_i = function() {
        var t = new eui.Label;
        return this.txt_price2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost2_i = function() {
        var t = new eui.Image;
        return this.cost2 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.source = "ps_limited_shop_42175_png",
        t.x = 40,
        t.y = 45,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "专属刻印",
        t.textColor = 14543359,
        t.x = 41,
        t.y = 7,
        t
    },
    i.limited_2_i = function() {
        var t = new eui.Label;
        return this.limited_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/1",
        t.textColor = 4187130,
        t.x = 44,
        t.y = 118,
        t
    },
    i.time_2_i = function() {
        var t = new eui.Group;
        return this.time_2 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image11_i(), this.txt_leftTime_2_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_2_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 2,
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 40,
        t.x = 0,
        t.y = 28,
        t
    },
    i.hasGet2_i = function() {
        var t = new eui.Label;
        return this.hasGet2 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 255,
        t.y = 52,
        t.elementsContent = [this._Image13_i(), this._Image14_i(), this.btnBuy_3_i(), this.icon3_i(), this.zstx_2_i(), this.limited_3_i(), this.time_3_i(), this._Image17_i(), this.hasGet3_i()],
        t
    },
    i._Image13_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 3,
        t.y = 0,
        t
    },
    i._Image14_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 138,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_3_i = function() {
        var t = new eui.Group;
        return this.btnBuy_3 = t,
        t.x = 2,
        t.y = 135,
        t.elementsContent = [this._Image15_i(), this.txt_price3_i(), this.cost3_i()],
        t
    },
    i._Image15_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 147,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price3_i = function() {
        var t = new eui.Label;
        return this.txt_price3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 63,
        t.y = 8,
        t
    },
    i.cost3_i = function() {
        var t = new eui.Image;
        return this.cost3 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 40,
        t.y = 7,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.source = "pveRewardMall_gxPet_icon_2_png",
        t.x = 50,
        t.y = 50,
        t
    },
    i.zstx_2_i = function() {
        var t = new eui.Label;
        return this.zstx_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "专属特性",
        t.textColor = 14543359,
        t.x = 41,
        t.y = 7,
        t
    },
    i.limited_3_i = function() {
        var t = new eui.Label;
        return this.limited_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/1",
        t.textColor = 4187130,
        t.x = 45,
        t.y = 118,
        t
    },
    i.time_3_i = function() {
        var t = new eui.Group;
        return this.time_3 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image16_i(), this.txt_leftTime_3_i()],
        t
    },
    i._Image16_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_3_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 15,
        t.y = 2,
        t
    },
    i._Image17_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 41,
        t.x = 0,
        t.y = 28,
        t
    },
    i.hasGet3_i = function() {
        var t = new eui.Label;
        return this.hasGet3 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 460,
        t.y = 52,
        t.elementsContent = [this._Image18_i(), this._Image19_i(), this.btnBuy_4_i(), this.diwujineng_i(), this.limited_4_i(), this.time_4_i(), this._Image22_i(), this.icon4_i(), this.hasGet4_i()],
        t
    },
    i._Image18_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 3,
        t.y = 0,
        t
    },
    i._Image19_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 138,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_4_i = function() {
        var t = new eui.Group;
        return this.btnBuy_4 = t,
        t.x = 4,
        t.y = 137,
        t.elementsContent = [this._Image20_i(), this.txt_price4_i(), this.cost4_i()],
        t
    },
    i._Image20_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 142,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price4_i = function() {
        var t = new eui.Label;
        return this.txt_price4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost4_i = function() {
        var t = new eui.Image;
        return this.cost4 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i.diwujineng_i = function() {
        var t = new eui.Label;
        return this.diwujineng = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "第五技能",
        t.textColor = 14543359,
        t.x = 41,
        t.y = 7,
        t
    },
    i.limited_4_i = function() {
        var t = new eui.Label;
        return this.limited_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/1",
        t.textColor = 4187130,
        t.x = 45,
        t.y = 118,
        t
    },
    i.time_4_i = function() {
        var t = new eui.Group;
        return this.time_4 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image21_i(), this.txt_leftTime_4_i()],
        t
    },
    i._Image21_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_4_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 15,
        t.y = 2,
        t
    },
    i._Image22_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 41,
        t.x = 0,
        t.y = 28,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 54,
        t.source = "pveRewardMall_gxPet_icon_1_png",
        t.width = 51,
        t.x = 49,
        t.y = 50,
        t
    },
    i.hasGet4_i = function() {
        var t = new eui.Label;
        return this.hasGet4 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i._Image23_i = function() {
        var t = new eui.Image;
        return t.height = 243,
        t.source = "ps_limited_shop_z_38_kb_png",
        t.width = 868,
        t.x = 0,
        t.y = 267,
        t
    },
    i.item5_i = function() {
        var t = new eui.Group;
        return this.item5 = t,
        t.x = 50,
        t.y = 319,
        t.elementsContent = [this._Image24_i(), this._Image25_i(), this.btnBuy_5_i(), this._Label3_i(), this.limited_5_i(), this.time_5_i(), this._Image28_i(), this.icon5_i(), this.hasGet5_i()],
        t
    },
    i._Image24_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image25_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 137,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_5_i = function() {
        var t = new eui.Group;
        return this.btnBuy_5 = t,
        t.x = 3,
        t.y = 137,
        t.elementsContent = [this._Image26_i(), this.txt_price5_i(), this.cost5_i()],
        t
    },
    i._Image26_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 143,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price5_i = function() {
        var t = new eui.Label;
        return this.txt_price5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost5_i = function() {
        var t = new eui.Image;
        return this.cost5 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "全面提升药剂",
        t.textColor = 14543359,
        t.x = 26,
        t.y = 7,
        t
    },
    i.limited_5_i = function() {
        var t = new eui.Label;
        return this.limited_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/3",
        t.textColor = 4187130,
        t.x = 43,
        t.y = 118,
        t
    },
    i.time_5_i = function() {
        var t = new eui.Group;
        return this.time_5 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image27_i(), this.txt_leftTime_5_i()],
        t
    },
    i._Image27_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_5_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 2,
        t
    },
    i._Image28_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 40,
        t.x = 0,
        t.y = 28,
        t
    },
    i.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 74,
        t.y = 80,
        t
    },
    i.hasGet5_i = function() {
        var t = new eui.Label;
        return this.hasGet5 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item6_i = function() {
        var t = new eui.Group;
        return this.item6 = t,
        t.x = 255,
        t.y = 319,
        t.elementsContent = [this._Image29_i(), this._Image30_i(), this.btnBuy_6_i(), this._Label4_i(), this.limited_6_i(), this.time_6_i(), this._Image33_i(), this.icon6_i(), this.hasGet6_i()],
        t
    },
    i._Image29_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 2,
        t.y = 0,
        t
    },
    i._Image30_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 137,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_6_i = function() {
        var t = new eui.Group;
        return this.btnBuy_6 = t,
        t.x = 3,
        t.y = 137,
        t.elementsContent = [this._Image31_i(), this.txt_price6_i(), this.cost6_i()],
        t
    },
    i._Image31_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 143,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price6_i = function() {
        var t = new eui.Label;
        return this.txt_price6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost6_i = function() {
        var t = new eui.Image;
        return this.cost6 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "特性重组剂Ω",
        t.textColor = 14543359,
        t.x = 26,
        t.y = 7,
        t
    },
    i.limited_6_i = function() {
        var t = new eui.Label;
        return this.limited_6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/3",
        t.textColor = 4187130,
        t.x = 43,
        t.y = 118,
        t
    },
    i.time_6_i = function() {
        var t = new eui.Group;
        return this.time_6 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image32_i(), this.txt_leftTime_6_i()],
        t
    },
    i._Image32_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_6_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_6 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 2,
        t
    },
    i._Image33_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 40,
        t.x = 0,
        t.y = 28,
        t
    },
    i.icon6_i = function() {
        var t = new eui.Image;
        return this.icon6 = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 74,
        t.y = 80,
        t
    },
    i.hasGet6_i = function() {
        var t = new eui.Label;
        return this.hasGet6 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item7_i = function() {
        var t = new eui.Group;
        return this.item7 = t,
        t.x = 460,
        t.y = 319,
        t.elementsContent = [this._Image34_i(), this._Image35_i(), this.btnBuy_7_i(), this._Label5_i(), this.limited_7_i(), this.time_7_i(), this._Image38_i(), this.icon7_i(), this.hasGet7_i()],
        t
    },
    i._Image34_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 3,
        t.y = 0,
        t
    },
    i._Image35_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 138,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_7_i = function() {
        var t = new eui.Group;
        return this.btnBuy_7 = t,
        t.x = 4,
        t.y = 137,
        t.elementsContent = [this._Image36_i(), this.txt_price7_i(), this.cost7_i()],
        t
    },
    i._Image36_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 142,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price7_i = function() {
        var t = new eui.Label;
        return this.txt_price7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 61,
        t.y = 8,
        t
    },
    i.cost7_i = function() {
        var t = new eui.Image;
        return this.cost7 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "100级升级秘药Ω",
        t.textColor = 14543359,
        t.x = 14,
        t.y = 7,
        t
    },
    i.limited_7_i = function() {
        var t = new eui.Label;
        return this.limited_7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/3",
        t.textColor = 4187130,
        t.x = 43,
        t.y = 118,
        t
    },
    i.time_7_i = function() {
        var t = new eui.Group;
        return this.time_7 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image37_i(), this.txt_leftTime_7_i()],
        t
    },
    i._Image37_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_7_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_7 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 15,
        t.y = 2,
        t
    },
    i._Image38_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 41,
        t.x = 0,
        t.y = 28,
        t
    },
    i.icon7_i = function() {
        var t = new eui.Image;
        return this.icon7 = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 74,
        t.y = 80,
        t
    },
    i.hasGet7_i = function() {
        var t = new eui.Label;
        return this.hasGet7 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.item8_i = function() {
        var t = new eui.Group;
        return this.item8 = t,
        t.x = 665,
        t.y = 319,
        t.elementsContent = [this._Image39_i(), this._Image40_i(), this.btnBuy_8_i(), this._Label6_i(), this.time_8_i(), this._Image43_i(), this.icon8_i(), this.hasGet8_i()],
        t
    },
    i._Image39_i = function() {
        var t = new eui.Image;
        return t.height = 173,
        t.source = "ps_yinzi_buybg_png",
        t.width = 145,
        t.x = 3,
        t.y = 0,
        t
    },
    i._Image40_i = function() {
        var t = new eui.Image;
        return t.height = 23,
        t.source = "ps_item_pop_topbg_png",
        t.width = 138,
        t.x = 6,
        t.y = 3,
        t
    },
    i.btnBuy_8_i = function() {
        var t = new eui.Group;
        return this.btnBuy_8 = t,
        t.x = 4,
        t.y = 137,
        t.elementsContent = [this._Image41_i(), this.txt_price8_i(), this.cost8_i()],
        t
    },
    i._Image41_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "ps_yinzi_btncommon_png",
        t.width = 142,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_price8_i = function() {
        var t = new eui.Label;
        return this.txt_price8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.x = 75,
        t.y = 8,
        t
    },
    i.cost8_i = function() {
        var t = new eui.Image;
        return this.cost8 = t,
        t.height = 24,
        t.source = "",
        t.width = 19,
        t.x = 38,
        t.y = 5,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "先锋旗帜",
        t.textColor = 14543359,
        t.x = 41,
        t.y = 7,
        t
    },
    i.time_8_i = function() {
        var t = new eui.Group;
        return this.time_8 = t,
        t.x = 27,
        t.y = 29,
        t.elementsContent = [this._Image42_i(), this.txt_leftTime_8_i()],
        t
    },
    i._Image42_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_leftTime_8_i = function() {
        var t = new eui.Label;
        return this.txt_leftTime_8 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 15,
        t.y = 2,
        t
    },
    i._Image43_i = function() {
        var t = new eui.Image;
        return t.height = 20,
        t.source = "ps_yinzi_tag_png",
        t.width = 41,
        t.x = 0,
        t.y = 28,
        t
    },
    i.icon8_i = function() {
        var t = new eui.Image;
        return this.icon8 = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.source = "",
        t.width = 70,
        t.x = 74,
        t.y = 85,
        t
    },
    i.hasGet8_i = function() {
        var t = new eui.Label;
        return this.hasGet8 = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.topRight_i = function() {
        var t = new eui.Group;
        return this.topRight = t,
        t.right = 43,
        t.y = 14,
        t.elementsContent = [this._Image44_i(), this.txtCoinNum_i(), this.icon_i()],
        t
    },
    i._Image44_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    i.txtCoinNum_i = function() {
        var t = new eui.Label;
        return this.txtCoinNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.source = "ps_sptpetitem_tuceng_569_png",
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pveSptAdvancedTaskSkin.exml"] = window.pveSpt.AdvancedTaskSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt0", "_listTask", "content", "txtCoinNum", "icon", "topRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.txt0_i(), this.content_i(), this.topRight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt0_i = function() {
        var t = new eui.Group;
        return this.txt0 = t,
        t.horizontalCenter = 70.5,
        t.visible = !0,
        t.y = 60,
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i()],
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每天凌晨0点重置",
        t.textColor = 8631282,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 18,
        t.text = "活动时间：",
        t.textColor = 8631026,
        t.x = 702,
        t.y = 1,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "2月23日-3月7日",
        t.textColor = 4187130,
        t.x = 793,
        t.y = 1,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.height = 542,
        t.visible = !0,
        t.percentWidth = 85,
        t.x = 164,
        t.y = 85,
        t.elementsContent = [this._listTask_i()],
        t
    },
    i._listTask_i = function() {
        var t = new eui.List;
        return this._listTask = t,
        t.height = 542,
        t.horizontalCenter = 0,
        t.width = 966,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    i.topRight_i = function() {
        var t = new eui.Group;
        return this.topRight = t,
        t.right = 43,
        t.y = 14,
        t.elementsContent = [this._Image2_i(), this.txtCoinNum_i(), this.icon_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    i.txtCoinNum_i = function() {
        var t = new eui.Label;
        return this.txtCoinNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.source = "ps_sptpetitem_tuceng_569_png",
        t.width = 30,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/PveSptChallengeSkin.exml"] = window.pveSpt.PveSptChallengeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "_scrol", "content"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.content_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.content_i = function() {
        var t = new eui.Group;
        return this.content = t,
        t.height = 500,
        t.width = 944,
        t.x = 190,
        t.y = 96,
        t.elementsContent = [this._scrol_i()],
        t
    },
    i._scrol_i = function() {
        var t = new eui.Scroller;
        return this._scrol = t,
        t.percentHeight = 100,
        t.left = 0,
        t.right = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pveSptMainPanelSkin.exml"] = window.pveSpt.PveSptMainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grp_Container", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grp_Container_i(), this.menuGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_Container_i = function() {
        var t = new eui.Group;
        return this.grp_Container = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t
    },
    i.menuGroup_i = function() {
        var t = new eui.Group;
        return this.menuGroup = t,
        t.x = 0,
        t.y = 48,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/pveSptMallSkin.exml"] = window.pveSpt.pveSptMallSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "_list", "_scrol", "rb_1", "rb_2", "rb_3", "rb", "rb_Item_1", "rb_Item_2", "gr_rb_Item", "txtCoinNum", "icon", "txtCoinNum0", "icon0", "topRight"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._scrol_i(), this.rb_i(), this.gr_rb_Item_i(), this.topRight_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "ps_yinzi_btndown1_png"), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ps_yinzi_btnup1_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.height = 33,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "ps_yinzi_btndown2_png"), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ps_yinzi_btnup2_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.height = 33,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "ps_yinzi_btndown3_png"), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ps_yinzi_btnup3_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.height = 33,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "ps_spt_imge_btn_qizhi_down_png"), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ps_spt_imge_btn_qizhi_up_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.height = 33,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 1, ""), new eui.SetProperty("_Image1", "source", "ps_spt_imge_btn_jiangzhang_down_png"), new eui.SetProperty("_Image1", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "ps_spt_imge_btn_jiangzhang_up_png")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.fillAlpha = 0,
            t.height = 33,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "common_ui_bg_3_jpg",
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    o._scrol_i = function() {
        var t = new eui.Scroller;
        return this._scrol = t,
        t.height = 528,
        t.left = 177,
        t.right = 24,
        t.scrollPolicyH = "off",
        t.y = 112,
        t.viewport = this._list_i(),
        t
    },
    o._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    o.rb_i = function() {
        var t = new eui.Group;
        return this.rb = t,
        t.visible = !1,
        t.x = 173,
        t.y = 71,
        t.elementsContent = [this.rb_1_i(), this.rb_2_i(), this.rb_3_i()],
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "mall_petup",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "mall_petup",
        t.value = "2",
        t.x = 101,
        t.y = 0,
        t.skinName = n,
        t
    },
    o.rb_3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_3 = t,
        t.groupName = "mall_petup",
        t.value = "3",
        t.x = 201,
        t.y = 0,
        t.skinName = a,
        t
    },
    o.gr_rb_Item_i = function() {
        var t = new eui.Group;
        return this.gr_rb_Item = t,
        t.cacheAsBitmap = !0,
        t.x = 173,
        t.y = 71,
        t.elementsContent = [this.rb_Item_1_i(), this.rb_Item_2_i()],
        t
    },
    o.rb_Item_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_Item_1 = t,
        t.groupName = "mall_item",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = s,
        t
    },
    o.rb_Item_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_Item_2 = t,
        t.groupName = "mall_item",
        t.value = "2",
        t.x = 101,
        t.y = 0,
        t.skinName = r,
        t
    },
    o.topRight_i = function() {
        var t = new eui.Group;
        return this.topRight = t,
        t.cacheAsBitmap = !0,
        t.right = 43,
        t.visible = !0,
        t.y = 14,
        t.elementsContent = [this._Group1_i(), this._Group2_i()],
        t
    },
    o._Group1_i = function() {
        var t = new eui.Group;
        return t.x = -170,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txtCoinNum_i(), this.icon_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    o.txtCoinNum_i = function() {
        var t = new eui.Label;
        return this.txtCoinNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999999999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    o.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = -3,
        t
    },
    o._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txtCoinNum0_i(), this.icon0_i()],
        t
    },
    o._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    o.txtCoinNum0_i = function() {
        var t = new eui.Label;
        return this.txtCoinNum0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999999999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    o.icon0_i = function() {
        var t = new eui.Image;
        return this.icon0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = -3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptAdvancedTaskItemSkin.exml"] = window.pveSptAdvancedTaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["AdvancedBg", "icon", "txtNum", "txt_taskName", "txt_content", "taskLV", "btnGet", "btnGo", "done", "txt_doneTime", "btnRefresh", "AdvancedTaskItem", "grpAnim"],
        this.height = 90,
        this.width = 934,
        this.elementsContent = [this.AdvancedTaskItem_i(), this.grpAnim_i()],
        this.states = [new eui.State("daily", [new eui.SetProperty("AdvancedBg", "source", "ps_advanced_task_advanced_daliybg_png"), new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("txtNum", "visible", !0), new eui.SetProperty("txt_taskName", "visible", !0), new eui.SetProperty("txt_content", "x", 35), new eui.SetProperty("txt_content", "y", 56), new eui.SetProperty("_Image2", "visible", !1), new eui.SetProperty("taskLV", "visible", !1)]), new eui.State("jinjie", [new eui.SetProperty("AdvancedBg", "source", "ps_advanced_task_advancedbg_png"), new eui.SetProperty("taskLV", "visible", !0), new eui.SetProperty("taskLV", "width", 20), new eui.SetProperty("taskLV", "height", 24)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.AdvancedTaskItem_i = function() {
        var t = new eui.Group;
        return this.AdvancedTaskItem = t,
        t.x = 0,
        t.y = -6,
        t.elementsContent = [this.AdvancedBg_i(), this._Image1_i(), this.icon_i(), this.txtNum_i(), this.txt_taskName_i(), this.txt_content_i(), this._Image2_i(), this.taskLV_i(), this.btnGet_i(), this.btnGo_i(), this.done_i(), this._Image3_i(), this.txt_doneTime_i(), this.btnRefresh_i()],
        t
    },
    i.AdvancedBg_i = function() {
        var t = new eui.Image;
        return this.AdvancedBg = t,
        t.source = "ps_advanced_task_advanced_daliybg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "ps_advanced_task_l_kb_115_png",
        t.visible = !0,
        t.x = 635,
        t.y = 12,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.source = "",
        t.visible = !0,
        t.width = 50,
        t.x = 647,
        t.y = 23,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1712696,
        t.text = "99",
        t.textColor = 16776958,
        t.x = 686,
        t.y = 65,
        t
    },
    i.txt_taskName_i = function() {
        var t = new eui.Label;
        return this.txt_taskName = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "进阶挑战",
        t.textColor = 4187130,
        t.x = 35,
        t.y = 20,
        t
    },
    i.txt_content_i = function() {
        var t = new eui.Label;
        return this.txt_content = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "进阶挑战进阶挑战进阶挑战进阶挑战",
        t.textColor = 4187130,
        t.x = 69,
        t.y = 55,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.source = "ps_advanced_task_zu_32_png",
        t.visible = !0,
        t.x = 28,
        t.y = 56,
        t
    },
    i.taskLV_i = function() {
        var t = new eui.Image;
        return this.taskLV = t,
        t.source = "ps_advanced_task_S_png",
        t.visible = !0,
        t.x = 39,
        t.y = 52,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "ps_advanced_task_btnget_png",
        t.visible = !0,
        t.x = 771,
        t.y = 38,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "ps_advanced_task_btnGo_png",
        t.visible = !0,
        t.x = 771,
        t.y = 38,
        t
    },
    i.done_i = function() {
        var t = new eui.Image;
        return this.done = t,
        t.source = "ps_advanced_task_done_png",
        t.visible = !0,
        t.x = 785,
        t.y = 43,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ps_advanced_task_juxing_903_png",
        t.visible = !0,
        t.x = 761,
        t.y = 15,
        t
    },
    i.txt_doneTime_i = function() {
        var t = new eui.Label;
        return this.txt_doneTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "完成1/1次",
        t.textColor = 8631026,
        t.x = 805,
        t.y = 15,
        t
    },
    i.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.source = "ps_advanced_task_btnrefresh_png",
        t.visible = !0,
        t.x = 134,
        t.y = 18,
        t
    },
    i.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.height = 96,
        t.touchEnabled = !1,
        t.touchThrough = !0,
        t.width = 934,
        t.y = -6,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptConditionItemSkin.exml"] = window.pveSptConditionItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_target", "img_star"],
        this.elementsContent = [this.txt_target_i(), this.img_star_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txt_target_i = function() {
        var t = new eui.Label;
        return this.txt_target = t,
        t.fontFamily = "MFShangHei",
        t.height = 40,
        t.lineSpacing = 4,
        t.size = 18,
        t.text = "战胜精灵战胜精灵战胜精灵战胜精灵战胜精灵战胜精灵战胜",
        t.textColor = 4252667,
        t.touchEnabled = !1,
        t.width = 250,
        t.x = 31,
        t.y = 4,
        t
    },
    i.img_star_i = function() {
        var t = new eui.Image;
        return this.img_star = t,
        t.height = 21,
        t.source = "pve_spt_fight_star_png",
        t.width = 22,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptFightItemIconSkin.exml"] = window.pveSptFightItemIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txtCount", "item_grp"],
        this.height = 71,
        this.width = 68,
        this.elementsContent = [this.item_grp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_grp_i = function() {
        var t = new eui.Group;
        return this.item_grp = t,
        t.scaleX = .9,
        t.scaleY = .9,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.icon_i(), this.txtCount_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 75,
        t.horizontalCenter = 0,
        t.source = "common_bg_tips_s9_png",
        t.verticalCenter = -1.5,
        t.width = 75,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 55,
        t.horizontalCenter = .5,
        t.verticalCenter = 1,
        t.width = 55,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.verticalAlign = "justify",
        t.y = 58,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptFightPetIconSkin.exml"] = window.pveSptFightPetIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "pet_icon", "pet_name", "completed_mask", "imgSelected", "pet_icon_grp"],
        this.height = 92,
        this.width = 90,
        this.elementsContent = [this.pet_icon_grp_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.pet_icon_grp_i = function() {
        var t = new eui.Group;
        return this.pet_icon_grp = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bg_i(), this.pet_icon_i(), this.pet_name_i(), this.completed_mask_i(), this.imgSelected_i()],
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(8, 9, 56, 54),
        t.source = "common_item_bg_style_70_70_png",
        t.width = 70,
        t.x = -60,
        t.y = 46,
        t
    },
    i.pet_icon_i = function() {
        var t = new eui.Image;
        return this.pet_icon = t,
        t.height = 65,
        t.horizontalCenter = -1,
        t.source = "common_pet_headIcon_png",
        t.visible = !0,
        t.width = 65,
        t.y = 13,
        t
    },
    i.pet_name_i = function() {
        var t = new eui.Label;
        return this.pet_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 17,
        t.text = "关卡",
        t.textAlign = "center",
        t.textColor = 4680108,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.y = 86,
        t
    },
    i.completed_mask_i = function() {
        var t = new eui.Group;
        return this.completed_mask = t,
        t.visible = !0,
        t.x = 12,
        t.y = 13,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.alpha = .8,
        t.height = 65,
        t.scale9Grid = new egret.Rectangle(2, 1, 94, 3),
        t.source = "common_pet_hp_bg_bar_png",
        t.visible = !0,
        t.width = 65,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 17,
        t.text = "已击败",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 8,
        t.y = 26,
        t
    },
    i.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.anchorOffsetX = 45,
        t.anchorOffsetY = 45,
        t.height = 90,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(27, 27, 26, 26),
        t.source = "common_select_rect_png",
        t.visible = !1,
        t.width = 90,
        t.y = 45,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptItemIconSkin.exml"] = window.skins.pveSptItemIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon1"],
        this.height = 69,
        this.width = 69,
        this.elementsContent = [this._Image1_i(), this.icon1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_item_iconbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.x = 8,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptItemSkin.exml"] = window.pveSpt.SptItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_galaxy", "img_lock", "_bar", "jcms", "icon1", "icon2", "icon3", "grp_icon", "txt_pgsTitle", "txt_progress", "cont", "imgFastFight", "sptitem"],
        this.height = 493,
        this.width = 279,
        this.elementsContent = [this.sptitem_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 4,
            t.source = "pve_spt_item_img_bar_png",
            t.width = 240,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.sptitem_i = function() {
        var t = new eui.Group;
        return this.sptitem = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.img_galaxy_i(), this.img_lock_i(), this._bar_i(), this.cont_i(), this.imgFastFight_i()],
        t
    },
    n.img_galaxy_i = function() {
        var t = new eui.Image;
        return this.img_galaxy = t,
        t.height = 477.5,
        t.source = "pve_spt_item_galaxy_1_1_png",
        t.width = 268.5,
        t.x = 0,
        t.y = 0,
        t
    },
    n.img_lock_i = function() {
        var t = new eui.Image;
        return this.img_lock = t,
        t.height = 478,
        t.source = "pve_spt_item_img_lock_png",
        t.visible = !0,
        t.width = 268,
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 4,
        t.visible = !0,
        t.width = 240,
        t.x = 15,
        t.y = 315,
        t.skinName = i,
        t
    },
    n.cont_i = function() {
        var t = new eui.Group;
        return this.cont = t,
        t.visible = !0,
        t.x = 30,
        t.y = 286,
        t.elementsContent = [this.jcms_i(), this.grp_icon_i(), this.txt_pgsTitle_i(), this.txt_progress_i()],
        t
    },
    n.jcms_i = function() {
        var t = new eui.Label;
        return this.jcms = t,
        t.fontFamily = "MFShangHei",
        t.right = 5,
        t.size = 16,
        t.text = "简单模式",
        t.textColor = 7842815,
        t.y = 160,
        t
    },
    n.grp_icon_i = function() {
        var t = new eui.Group;
        return this.grp_icon = t,
        t.height = 69,
        t.width = 220,
        t.x = 0,
        t.y = 81,
        t.elementsContent = [this._Image1_i(), this.icon1_i(), this._Image2_i(), this.icon2_i(), this._Image3_i(), this.icon3_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_item_iconbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 55,
        t.width = 55,
        t.x = 8,
        t.y = 9,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_item_iconbg_png",
        t.x = 75,
        t.y = 0,
        t
    },
    n.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 55,
        t.width = 55,
        t.x = 80,
        t.y = 9,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ps_spt_item_iconbg_png",
        t.x = 150,
        t.y = 0,
        t
    },
    n.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 55,
        t.width = 55,
        t.x = 158,
        t.y = 9,
        t
    },
    n.txt_pgsTitle_i = function() {
        var t = new eui.Label;
        return this.txt_pgsTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9985823322503,
        t.text = "副本进度：",
        t.textColor = 15923199,
        t.x = 101,
        t.y = 0,
        t
    },
    n.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9985823322503,
        t.text = "100%",
        t.textColor = 7072255,
        t.x = 180,
        t.y = 0,
        t
    },
    n.imgFastFight_i = function() {
        var t = new eui.Image;
        return this.imgFastFight = t,
        t.source = "pve_spt_item_galaxy_imgfastfight_png",
        t.x = 202,
        t.y = 11,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptMallItemSkin.exml"] = window.pveSpt.pveSptMallItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnbg", "txtPrice", "costIcon", "btnBuy", "icon", "headFrame", "achieveIcon", "txtLimited", "txt_itemNum", "txtName", "hasGet", "a_99t_kb_4", "s30t", "limitedTime", "tag", "advanced", "Item"],
        this.height = 173,
        this.width = 145,
        this.elementsContent = [this.Item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.Item_i = function() {
        var t = new eui.Group;
        return this.Item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.btnBuy_i(), this._Image2_i(), this.icon_i(), this.headFrame_i(), this.achieveIcon_i(), this.txtLimited_i(), this.txt_itemNum_i(), this.txtName_i(), this.hasGet_i(), this.advanced_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_yinzi_buybg_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.visible = !0,
        t.x = 1,
        t.y = 137,
        t.elementsContent = [this.btnbg_i(), this.txtPrice_i(), this.costIcon_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.source = "ps_yinzi_btncommon_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 11.5,
        t.size = 18,
        t.text = "3000",
        t.textColor = 10181146,
        t.y = 8,
        t
    },
    i.costIcon_i = function() {
        var t = new eui.Image;
        return this.costIcon = t,
        t.height = 20,
        t.source = "ps_yinzi_tuceng_572_png",
        t.width = 22,
        t.x = 39,
        t.y = 8,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_item_pop_topbg_png",
        t.visible = !0,
        t.x = 4,
        t.y = 3,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.anchorOffsetX = 35,
        t.anchorOffsetY = 35,
        t.height = 70,
        t.horizontalCenter = 1.5,
        t.verticalCenter = -6.5,
        t.visible = !0,
        t.width = 70,
        t
    },
    i.headFrame_i = function() {
        var t = new eui.Image;
        return this.headFrame = t,
        t.horizontalCenter = 1.5,
        t.source = "ps_mall_petfactor_progress_wg_1_png",
        t.verticalCenter = -5.5,
        t.visible = !1,
        t
    },
    i.achieveIcon_i = function() {
        var t = new eui.Image;
        return this.achieveIcon = t,
        t.height = 70,
        t.horizontalCenter = .5,
        t.verticalCenter = -6.5,
        t.visible = !0,
        t.width = 70,
        t
    },
    i.txtLimited_i = function() {
        var t = new eui.Label;
        return this.txtLimited = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "限兑：1/1",
        t.textAlign = "center",
        t.textColor = 4187130,
        t.width = 138.53,
        t.x = 3.898,
        t.y = 120,
        t
    },
    i.txt_itemNum_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 37.5,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1518417,
        t.text = "999",
        t.textColor = 14543359,
        t.y = 92,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每日限兑：1/1",
        t.textAlign = "center",
        t.textColor = 14543359,
        t.verticalAlign = "middle",
        t.width = 140,
        t.x = 4,
        t.y = 8,
        t
    },
    i.hasGet_i = function() {
        var t = new eui.Label;
        return this.hasGet = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 50,
        t.y = 148,
        t
    },
    i.advanced_i = function() {
        var t = new eui.Group;
        return this.advanced = t,
        t.visible = !1,
        t.x = 0,
        t.y = 29,
        t.elementsContent = [this.limitedTime_i(), this.tag_i()],
        t
    },
    i.limitedTime_i = function() {
        var t = new eui.Group;
        return this.limitedTime = t,
        t.x = 26,
        t.y = 0,
        t.elementsContent = [this.a_99t_kb_4_i(), this.s30t_i()],
        t
    },
    i.a_99t_kb_4_i = function() {
        var t = new eui.Image;
        return this.a_99t_kb_4 = t,
        t.height = 18,
        t.source = "ps_yinzi_99t_kb_4_png",
        t.width = 67,
        t.x = 0,
        t.y = 0,
        t
    },
    i.s30t_i = function() {
        var t = new eui.Label;
        return this.s30t = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "剩30天",
        t.textColor = 16317183,
        t.x = 14,
        t.y = 2,
        t
    },
    i.tag_i = function() {
        var t = new eui.Image;
        return this.tag = t,
        t.height = 18,
        t.source = "ps_yinzi_tag_png",
        t.width = 40,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptPetItemSkin.exml"] = window.pveSpt.SptpetNewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["petimg", "txtPetPrice", "coin", "Buy", "petName", "hasGet", "txtLimited"],
        this.height = 295,
        this.width = 167,
        this.elementsContent = [this.petimg_i(), this._Image1_i(), this._Image2_i(), this._Image3_i(), this.Buy_i(), this.petName_i(), this.hasGet_i(), this.txtLimited_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.petimg_i = function() {
        var t = new eui.Image;
        return this.petimg = t,
        t.height = 284,
        t.visible = !0,
        t.width = 170,
        t.x = 5,
        t.y = 5,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 126,
        t.scale9Grid = new egret.Rectangle(0, 0, 20, 126),
        t.source = "pve_spt_pet_item_zhezhao_png",
        t.width = 168,
        t.x = 6,
        t.y = 163,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_linedone_png",
        t.visible = !0,
        t.x = 11,
        t.y = 259,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 292,
        t.scale9Grid = new egret.Rectangle(15, 21, 4, 9),
        t.source = "ps_sptpetitem_waikuang_xian_png",
        t.visible = !0,
        t.width = 178,
        t
    },
    i.Buy_i = function() {
        var t = new eui.Group;
        return this.Buy = t,
        t.visible = !0,
        t.x = 3,
        t.y = 256,
        t.elementsContent = [this._Image4_i(), this.txtPetPrice_i(), this.coin_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_btncommon_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPetPrice_i = function() {
        var t = new eui.Label;
        return this.txtPetPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18.0645538770634,
        t.text = "3000",
        t.textColor = 10180889,
        t.x = 77,
        t.y = 11,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 20,
        t.horizontalCenter = -26.5,
        t.verticalCenter = 4,
        t.visible = !0,
        t.width = 20,
        t
    },
    i.petName_i = function() {
        var t = new eui.Label;
        return this.petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战武天尊",
        t.textColor = 15660287,
        t.x = 52,
        t.y = 237,
        t
    },
    i.hasGet_i = function() {
        var t = new eui.Label;
        return this.hasGet = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "已兑换",
        t.textColor = 4187130,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 65,
        t.y = 268,
        t
    },
    i.txtLimited_i = function() {
        var t = new eui.Label;
        return this.txtLimited = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "限兑：1/1",
        t.textColor = 10858415,
        t.visible = !0,
        t.x = 52,
        t.y = 217,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/pveSptStarItemItemSkin.exml"] = window.pveSptStarItemItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtCount"],
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txtCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 56,
        t.source = "common_icon_bg_style_1_png",
        t.width = 57,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 40,
        t.horizontalCenter = .5,
        t.verticalCenter = -.5,
        t.width = 40,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.bottom = 1,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.right = 1,
        t.size = 14,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/Render/PveSptTaskItemSkin.exml"] = window.pveSpt.PveSptTaskItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_0", "txtCount_0", "icon_1", "txtCount_1", "img_level", "txt_intro", "txt_freshTimes", "btnGo", "flag_finish", "btnFresh", "btnGet", "taskItem", "zu_37", "btnReceive", "unkown"],
        this.height = 477,
        this.width = 264,
        this.elementsContent = [this.taskItem_i(), this.unkown_i()],
        this.states = [new eui.State("notGet", [new eui.SetProperty("unkown", "visible", !0)]), new eui.State("got", [new eui.SetProperty("icon_0", "x", 82), new eui.SetProperty("icon_0", "y", 330), new eui.SetProperty("icon_1", "x", 180), new eui.SetProperty("icon_1", "y", 330), new eui.SetProperty("txtCount_1", "width", 65), new eui.SetProperty("txtCount_1", "x", 145), new eui.SetProperty("txtCount_1", "verticalAlign", "middle"), new eui.SetProperty("txtCount_1", "textAlign", "right"), new eui.SetProperty("taskItem", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.taskItem_i = function() {
        var t = new eui.Group;
        return this.taskItem = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.icon_0_i(), this.txtCount_0_i(), this._Image3_i(), this.icon_1_i(), this.txtCount_1_i(), this._Image4_i(), this._Image5_i(), this.img_level_i(), this.txt_intro_i(), this._Label1_i(), this.txt_freshTimes_i(), this.btnGo_i(), this.flag_finish_i(), this.btnFresh_i(), this.btnGet_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_zu_29_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_iconbg_png",
        t.x = 49,
        t.y = 295,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 82,
        t.y = 330,
        t
    },
    i.txtCount_0_i = function() {
        var t = new eui.Label;
        return this.txtCount_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "50",
        t.textAlign = "right",
        t.textColor = 14543359,
        t.width = 65,
        t.x = 49,
        t.y = 347,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_iconbg_png",
        t.x = 144,
        t.y = 295,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 55,
        t.source = "",
        t.width = 55,
        t.x = 180,
        t.y = 330,
        t
    },
    i.txtCount_1_i = function() {
        var t = new eui.Label;
        return this.txtCount_1 = t,
        t.fontFamily = "MFShangHei",
        t.height = 16,
        t.size = 16,
        t.text = "1",
        t.textAlign = "right",
        t.textColor = 14543359,
        t.width = 65,
        t.x = 145,
        t.y = 347,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_zu_35_png",
        t.visible = !0,
        t.x = 3,
        t.y = 89,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "ps_bounty_task_zu_36_png",
        t.visible = !0,
        t.x = 3,
        t.y = 239,
        t
    },
    i.img_level_i = function() {
        var t = new eui.Image;
        return this.img_level = t,
        t.source = "ps_bounty_task_1_png",
        t.visible = !0,
        t.x = 10,
        t.y = 0,
        t
    },
    i.txt_intro_i = function() {
        var t = new eui.Label;
        return this.txt_intro = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "说明文字说明文字说明文字\n说明文字说明文字说明文字\n说明文字说明文字说明文字\n说明文字。",
        t.textColor = 13425663,
        t.width = 192,
        t.x = 38,
        t.y = 140,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 13.8424903102412,
        t.text = "刷新次数",
        t.textColor = 16777215,
        t.x = 143,
        t.y = 28,
        t
    },
    i.txt_freshTimes_i = function() {
        var t = new eui.Label;
        return this.txt_freshTimes = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.8199877040594,
        t.text = "0/0",
        t.textColor = 16777215,
        t.x = 172,
        t.y = 44,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "ps_bounty_task_btnhecheng3_png",
        t.visible = !0,
        t.x = 64,
        t.y = 400,
        t
    },
    i.flag_finish_i = function() {
        var t = new eui.Image;
        return this.flag_finish = t,
        t.source = "ps_bounty_task_img1_png",
        t.visible = !0,
        t.x = 84,
        t.y = 406,
        t
    },
    i.btnFresh_i = function() {
        var t = new eui.Image;
        return this.btnFresh = t,
        t.source = "ps_bounty_task_img2_png",
        t.x = 183,
        t.y = 1,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "ps_bounty_task_btnhecheng1_png",
        t.visible = !0,
        t.x = 64,
        t.y = 400,
        t
    },
    i.unkown_i = function() {
        var t = new eui.Group;
        return this.unkown = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.zu_37_i(), this.btnReceive_i()],
        t
    },
    i.zu_37_i = function() {
        var t = new eui.Image;
        return this.zu_37 = t,
        t.source = "ps_bounty_task_zu_37_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnReceive_i = function() {
        var t = new eui.Image;
        return this.btnReceive = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "ps_bounty_task_btnhecheng2_png",
        t.visible = !0,
        t.x = 64,
        t.y = 400,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptFightHiddenSkin.exml"] = window.PveSptFightHiddenSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["guanqiabg", "titlebg", "txt_level", "line", "line_2", "award_title", "award_title0", "txt_hiddenProgress", "flag_finish", "pet_grp", "BtnClose", "btnTiaozhan2", "imgBtn_pet", "imgBtn_cure", "grpStatic", "itemList", "grpDynamic"],
        this.elementsContent = [this.grpStatic_i(), this.grpDynamic_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this.BtnClose_i(), this.btnTiaozhan2_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.guanqiabg_i(), this._Image1_i(), this._Image2_i(), this.titlebg_i(), this.txt_level_i(), this.line_i(), this.line_2_i(), this.award_title_i(), this.award_title0_i(), this.txt_hiddenProgress_i(), this.flag_finish_i(), this.pet_grp_i()],
        t
    },
    i.guanqiabg_i = function() {
        var t = new eui.Image;
        return this.guanqiabg = t,
        t.height = 350,
        t.source = "pve_spt_guanqiabg_png",
        t.width = 508,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 281,
        t.source = "pve_spt_neirongbg_png",
        t.width = 373,
        t.x = 18,
        t.y = 53,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 227,
        t.source = "pve_spt_neirongbg_png",
        t.width = 84,
        t.x = 400,
        t.y = 53,
        t
    },
    i.titlebg_i = function() {
        var t = new eui.Image;
        return this.titlebg = t,
        t.height = 40,
        t.left = 0,
        t.right = 0,
        t.source = "pve_spt_titlebg_png",
        t.visible = !0,
        t.width = 500,
        t.y = 5,
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "隐藏关卡",
        t.textColor = 4252667,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 18,
        t
    },
    i.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 339,
        t.x = 30,
        t.y = 88,
        t
    },
    i.line_2_i = function() {
        var t = new eui.Image;
        return this.line_2 = t,
        t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 339,
        t.x = 30,
        t.y = 227,
        t
    },
    i.award_title_i = function() {
        var t = new eui.Image;
        return this.award_title = t,
        t.source = "pve_spt_award_title2_png",
        t.x = 30,
        t.y = 206,
        t
    },
    i.award_title0_i = function() {
        var t = new eui.Image;
        return this.award_title0 = t,
        t.source = "pve_spt_boss_title_png",
        t.x = 30,
        t.y = 66,
        t
    },
    i.txt_hiddenProgress_i = function() {
        var t = new eui.Label;
        return this.txt_hiddenProgress = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.right = 36,
        t.size = 18,
        t.stroke = 2,
        t.strokeColor = 1317705,
        t.text = "本周已完成：0/2",
        t.textColor = 2211327,
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 140,
        t.y = 55,
        t
    },
    i.flag_finish_i = function() {
        var t = new eui.Label;
        return this.flag_finish = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 22,
        t.text = "本周领奖次数已达上限",
        t.textColor = 4680108,
        t.touchEnabled = !1,
        t.visible = !1,
        t.x = 45,
        t.y = 248.141,
        t
    },
    i.pet_grp_i = function() {
        var t = new eui.Group;
        return this.pet_grp = t,
        t.height = 115,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 290,
        t.x = 60,
        t.y = 84,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Group1_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 8,
        t.horizontalAlign = "center",
        t.verticalAlign = "middle",
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 71,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "common_bg_tips_s9_png",
        t.width = 71,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 69,
        t.horizontalCenter = 0,
        t.source = "common_pet_headIcon_png",
        t.visible = !0,
        t.width = 69,
        t.y = 1,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 17,
        t.text = "一二三四五六七八",
        t.textAlign = "center",
        t.textColor = 4680108,
        t.touchEnabled = !1,
        t.visible = !0,
        t.width = 90,
        t.y = 75,
        t
    },
    i.BtnClose_i = function() {
        var t = new eui.Image;
        return this.BtnClose = t,
        t.height = 33,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_btn_close_png",
        t.top = 1,
        t.width = 33,
        t.x = 472,
        t.y = 1,
        t
    },
    i.btnTiaozhan2_i = function() {
        var t = new eui.Image;
        return this.btnTiaozhan2 = t,
        t.height = 33,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_btnTiaozhan2_png",
        t.width = 87,
        t.x = 400,
        t.y = 299.00000000000006,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_bag_png",
        t.x = 405,
        t.y = 83,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_cure_png",
        t.x = 405,
        t.y = 181,
        t
    },
    i.grpDynamic_i = function() {
        var t = new eui.Group;
        return this.grpDynamic = t,
        t.x = 45,
        t.y = 246,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 72,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 310,
        t.y = 0,
        t.viewport = this.itemList_i(),
        t
    },
    i.itemList_i = function() {
        var t = new eui.List;
        return this.itemList = t,
        t.x = 0,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t.horizontalAlign = "center",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptFightSkin.exml"] = window.PveSptFightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["boss_title_img", "boss_title", "award_title_img", "award_title", "target_title_img", "target_title", "condition_title_img", "condition_title", "txt_level", "flag_finish", "txt_condition_1", "img_done_1", "txt_condition_0", "img_done_0", "condition", "btnSaodang1", "btnSaodang3", "btnGo", "BtnClose", "imgBtn_pet", "imgBtn_cure", "grpStatic", "itemList", "grpDynamicItem", "petList", "grpDynamicPet", "conditionList", "grpDynamicCondition"],
        this.height = 422,
        this.width = 746,
        this.elementsContent = [this.grpStatic_i(), this.grpDynamicItem_i(), this.grpDynamicPet_i(), this.grpDynamicCondition_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this.txt_level_i(), this.flag_finish_i(), this.condition_i(), this.btnSaodang1_i(), this.btnSaodang3_i(), this.btnGo_i(), this.BtnClose_i(), this.imgBtn_pet_i(), this.imgBtn_cure_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.boss_title_i(), this.award_title_i(), this.target_title_i(), this.condition_title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 422,
        t.source = "pve_spt_guanqiabg_png",
        t.visible = !0,
        t.width = 795,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 350,
        t.source = "pve_spt_neirongbg_png",
        t.width = 349,
        t.x = 18,
        t.y = 53,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 283,
        t.source = "pve_spt_neirongbg_png",
        t.width = 312,
        t.x = 377,
        t.y = 53,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 283,
        t.source = "pve_spt_neirongbg_png",
        t.width = 84,
        t.x = 697,
        t.y = 53,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 40,
        t.source = "pve_spt_titlebg_png",
        t.visible = !0,
        t.width = 577,
        t.x = 84,
        t.y = 9,
        t
    },
    i.boss_title_i = function() {
        var t = new eui.Group;
        return this.boss_title = t,
        t.visible = !0,
        t.x = 33,
        t.y = 66,
        t.elementsContent = [this.boss_title_img_i(), this._Image6_i()],
        t
    },
    i.boss_title_img_i = function() {
        var t = new eui.Image;
        return this.boss_title_img = t,
        t.source = "pve_spt_boss_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 318,
        t.x = 0,
        t.y = 24,
        t
    },
    i.award_title_i = function() {
        var t = new eui.Group;
        return this.award_title = t,
        t.x = 33,
        t.y = 251,
        t.elementsContent = [this.award_title_img_i(), this._Image7_i()],
        t
    },
    i.award_title_img_i = function() {
        var t = new eui.Image;
        return this.award_title_img = t,
        t.source = "pve_spt_award_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 318,
        t.x = 0,
        t.y = 23,
        t
    },
    i.target_title_i = function() {
        var t = new eui.Group;
        return this.target_title = t,
        t.visible = !0,
        t.x = 391,
        t.y = 66,
        t.elementsContent = [this.target_title_img_i(), this._Image8_i()],
        t
    },
    i.target_title_img_i = function() {
        var t = new eui.Image;
        return this.target_title_img = t,
        t.source = "pve_spt_target_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 273,
        t.x = 1,
        t.y = 24,
        t
    },
    i.condition_title_i = function() {
        var t = new eui.Group;
        return this.condition_title = t,
        t.visible = !0,
        t.x = 392,
        t.y = 230,
        t.elementsContent = [this.condition_title_img_i(), this._Image9_i()],
        t
    },
    i.condition_title_img_i = function() {
        var t = new eui.Image;
        return this.condition_title_img = t,
        t.source = "pve_spt_condition_title_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "pve_spt_line_png",
        t.width = 273,
        t.x = 0,
        t.y = 23,
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -25,
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 22,
        t.text = "2-3",
        t.textColor = 4252667,
        t.top = 18,
        t.touchEnabled = !1,
        t.visible = !0,
        t.x = 355,
        t.y = 18,
        t
    },
    i.flag_finish_i = function() {
        var t = new eui.Label;
        return this.flag_finish = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -205,
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 22,
        t.text = "今日可挑战次数已达上限",
        t.textColor = 4680108,
        t.touchEnabled = !1,
        t.x = 73,
        t.y = 325,
        t
    },
    i.condition_i = function() {
        var t = new eui.Group;
        return this.condition = t,
        t.height = 80.276,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.x = 384,
        t.y = 260.864,
        t.elementsContent = [this.txt_condition_1_i(), this._Image10_i(), this.img_done_1_i(), this.txt_condition_0_i(), this._Image11_i(), this.img_done_0_i()],
        t
    },
    i.txt_condition_1_i = function() {
        var t = new eui.Label;
        return this.txt_condition_1 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.size = 16,
        t.text = "程序加载一行字一行字一行字",
        t.textColor = 4252667,
        t.touchEnabled = !1,
        t.width = 250,
        t.x = 35.913,
        t.y = 44.733,
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_spt_fight_doneBg_png",
        t.width = 18,
        t.x = 5.913,
        t.y = 43.733,
        t
    },
    i.img_done_1_i = function() {
        var t = new eui.Image;
        return this.img_done_1 = t,
        t.height = 25,
        t.source = "pve_spt_fight_img_done_png",
        t.visible = !0,
        t.width = 33,
        t.x = 1.913,
        t.y = 38.733,
        t
    },
    i.txt_condition_0_i = function() {
        var t = new eui.Label;
        return this.txt_condition_0 = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.size = 16,
        t.text = "程序加载一行字一行字一行字",
        t.textColor = 4252667,
        t.touchEnabled = !1,
        t.width = 250,
        t.x = 35.913,
        t.y = 7.733,
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.height = 18,
        t.source = "pve_spt_fight_doneBg_png",
        t.width = 18,
        t.x = 5.913,
        t.y = 6.733,
        t
    },
    i.img_done_0_i = function() {
        var t = new eui.Image;
        return this.img_done_0 = t,
        t.height = 25,
        t.source = "pve_spt_fight_img_done_png",
        t.width = 33,
        t.x = 1.913,
        t.y = 1.733,
        t
    },
    i.btnSaodang1_i = function() {
        var t = new eui.Image;
        return this.btnSaodang1 = t,
        t.height = 34,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_btnSaodang_png",
        t.width = 87,
        t.x = 378,
        t.y = 365.99999999999994,
        t
    },
    i.btnSaodang3_i = function() {
        var t = new eui.Image;
        return this.btnSaodang3 = t,
        t.height = 34,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_btnSaodang3_png",
        t.width = 87,
        t.x = 484,
        t.y = 365.99999999999994,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.height = 54,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_btnTiaozhan_png",
        t.width = 166,
        t.x = 622,
        t.y = 356,
        t
    },
    i.BtnClose_i = function() {
        var t = new eui.Image;
        return this.BtnClose = t,
        t.height = 33,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 761,
        t.y = 1,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_bag_png",
        t.x = 702,
        t.y = 113,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_cure_png",
        t.x = 702,
        t.y = 211,
        t
    },
    i.grpDynamicItem_i = function() {
        var t = new eui.Group;
        return this.grpDynamicItem = t,
        t.height = 72,
        t.width = 310,
        t.x = 37,
        t.y = 300,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 72,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 310,
        t.y = 0,
        t.viewport = this.itemList_i(),
        t
    },
    i.itemList_i = function() {
        var t = new eui.List;
        return this.itemList = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 12,
        t
    },
    i.grpDynamicPet_i = function() {
        var t = new eui.Group;
        return this.grpDynamicPet = t,
        t.x = 50,
        t.y = 113,
        t.elementsContent = [this._Scroller2_i()],
        t
    },
    i._Scroller2_i = function() {
        var t = new eui.Scroller;
        return t.height = 112,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 286,
        t.x = 0,
        t.y = 0,
        t.viewport = this.petList_i(),
        t
    },
    i.petList_i = function() {
        var t = new eui.List;
        return this.petList = t,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 8,
        t
    },
    i.grpDynamicCondition_i = function() {
        var t = new eui.Group;
        return this.grpDynamicCondition = t,
        t.x = 390,
        t.y = 95,
        t.elementsContent = [this._Scroller3_i()],
        t
    },
    i._Scroller3_i = function() {
        var t = new eui.Scroller;
        return t.height = 132,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 281,
        t.x = 0,
        t.y = 0,
        t.viewport = this.conditionList_i(),
        t
    },
    i.conditionList_i = function() {
        var t = new eui.List;
        return this.conditionList = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptGalaxySkin.exml"] = window.PveSptGalaxySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "hiddenPlanet", "arr_ending", "img_chosen", "grp_planet", "_scr", "bottom_bg", "btnTask", "task_0", "task_1", "task_2", "grp_task", "txtbg", "txt_challengeNum", "txt_starNum", "btnStar", "img_reddot", "bottom", "btnDifficult", "btnNormal", "txt_count_0", "icon_0", "txt_count_1", "icon_1", "top", "grpAnim"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._scr_i(), this.bottom_i(), this.top_i(), this.grpAnim_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["txt_time"],
            this.currentState = "appear",
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this._Image2_i(),
            this.txt_time_i(),
            this.states = [new eui.State("hide", []), new eui.State("appear", [new eui.AddItems("_Image2", "", 2, "_Label1"), new eui.AddItems("txt_time", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 112,
            t.source = "pve_spt_planet_planet_hidden_png",
            t.width = 119,
            t.x = 12,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 60,
            t.source = "pve_spt_planet_hiddenbg_png",
            t.width = 138,
            t.x = 8,
            t.y = 88,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.lineSpacing = 3,
            t.size = 20,
            t.text = "星系隐藏关卡",
            t.textColor = 16777215,
            t.touchEnabled = !1,
            t.x = 0,
            t.y = 89,
            t
        },
        i.txt_time_i = function() {
            var t = new eui.Label;
            return this.txt_time = t,
            t.fontFamily = "MFShangHei",
            t.lineSpacing = 3,
            t.size = 26,
            t.text = "5:00",
            t.textAlign = "center",
            t.textColor = 16777215,
            t.touchEnabled = !1,
            t.verticalAlign = "middle",
            t.width = 95,
            t.x = 20,
            t.y = 115,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["txt_task", "img_level"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_task_i(), this.img_level_i()],
            this._Image3_i(),
            this._Image4_i(),
            this.states = [new eui.State("not", [new eui.SetProperty("txt_task", "textColor", 16777215)]), new eui.State("done", [new eui.AddItems("_Image3", "", 1, ""), new eui.AddItems("_Image4", "", 1, ""), new eui.SetProperty("txt_task", "textColor", 6126508)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.pixelHitTest = !0,
            t.source = "pve_spt_galaxy_task_bg_png",
            t.width = 149,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.source = "pve_spt_galaxy_linexie_png",
            t.width = 17,
            t.x = 0,
            t.y = -2,
            t
        },
        i.txt_task_i = function() {
            var t = new eui.Label;
            return this.txt_task = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.lineSpacing = 3,
            t.size = 24,
            t.text = "1-2",
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.visible = !0,
            t
        },
        i.img_level_i = function() {
            var t = new eui.Image;
            return this.img_level = t,
            t.source = "pve_spt_task_item_level_s_3_png",
            t.x = 8,
            t.y = -12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.source = "pve_spt_galaxy_task_compMask_png",
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 35,
            t.source = "pve_spt_galaxy_flag_complete_png",
            t.width = 63,
            t.x = 43,
            t.y = 8,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["txt_task", "img_level"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_task_i(), this.img_level_i()],
            this._Image3_i(),
            this._Image4_i(),
            this.states = [new eui.State("not", [new eui.SetProperty("txt_task", "textColor", 16777215)]), new eui.State("done", [new eui.AddItems("_Image3", "", 1, ""), new eui.AddItems("_Image4", "", 1, ""), new eui.SetProperty("txt_task", "textColor", 6126508)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.pixelHitTest = !0,
            t.source = "pve_spt_galaxy_task_bg_png",
            t.width = 149,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.source = "pve_spt_galaxy_linexie_png",
            t.width = 17,
            t.x = 0,
            t.y = -2,
            t
        },
        i.txt_task_i = function() {
            var t = new eui.Label;
            return this.txt_task = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.lineSpacing = 3,
            t.size = 24,
            t.text = "1-2",
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t
        },
        i.img_level_i = function() {
            var t = new eui.Image;
            return this.img_level = t,
            t.source = "pve_spt_task_item_level_s_3_png",
            t.x = 8,
            t.y = -12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.source = "pve_spt_galaxy_task_compMask_png",
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 35,
            t.source = "pve_spt_galaxy_flag_complete_png",
            t.width = 63,
            t.x = 43,
            t.y = 8,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["txt_task", "img_level"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txt_task_i(), this.img_level_i()],
            this._Image3_i(),
            this._Image4_i(),
            this.states = [new eui.State("not", [new eui.SetProperty("txt_task", "textColor", 16777215)]), new eui.State("done", [new eui.AddItems("_Image3", "", 1, ""), new eui.AddItems("_Image4", "", 1, ""), new eui.SetProperty("txt_task", "textColor", 6126508)])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.pixelHitTest = !0,
            t.source = "pve_spt_galaxy_task_bg_png",
            t.width = 149,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return t.height = 50,
            t.source = "pve_spt_galaxy_linexie_png",
            t.width = 17,
            t.x = 0,
            t.y = -2,
            t
        },
        i.txt_task_i = function() {
            var t = new eui.Label;
            return this.txt_task = t,
            t.fontFamily = "MFShangHei",
            t.horizontalCenter = 0,
            t.lineSpacing = 3,
            t.size = 24,
            t.text = "1-2",
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t
        },
        i.img_level_i = function() {
            var t = new eui.Image;
            return this.img_level = t,
            t.source = "pve_spt_task_item_level_s_3_png",
            t.x = 8,
            t.y = -12,
            t
        },
        i._Image3_i = function() {
            var t = new eui.Image;
            return this._Image3 = t,
            t.source = "pve_spt_galaxy_task_compMask_png",
            t.x = 0,
            t.y = 0,
            t
        },
        i._Image4_i = function() {
            var t = new eui.Image;
            return this._Image4 = t,
            t.height = 35,
            t.source = "pve_spt_galaxy_flag_complete_png",
            t.width = 63,
            t.x = 43,
            t.y = 8,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 640,
        t.source = "pve_spt_bg_2_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.bounces = !1,
        t.height = 460,
        t.scrollPolicyV = "off",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 100,
        t.viewport = this.grp_planet_i(),
        t
    },
    r.grp_planet_i = function() {
        var t = new eui.Group;
        return this.grp_planet = t,
        t.visible = !0,
        t.elementsContent = [this.hiddenPlanet_i(), this.arr_ending_i(), this.img_chosen_i()],
        t
    },
    r.hiddenPlanet_i = function() {
        var t = new eui.Component;
        return this.hiddenPlanet = t,
        t.touchChildren = !1,
        t.visible = !0,
        t.x = 255,
        t.y = 252,
        t.skinName = i,
        t
    },
    r.arr_ending_i = function() {
        var t = new eui.Image;
        return this.arr_ending = t,
        t.height = 61,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_arr_ending_png",
        t.visible = !0,
        t.width = 61,
        t.x = 979,
        t.y = 174,
        t
    },
    r.img_chosen_i = function() {
        var t = new eui.Image;
        return this.img_chosen = t,
        t.height = 155,
        t.scale9Grid = new egret.Rectangle(33, 33, 11, 10),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_img_chosen_png",
        t.touchEnabled = !1,
        t.visible = !1,
        t.width = 201,
        t.x = 59,
        t.y = 21,
        t
    },
    r.bottom_i = function() {
        var t = new eui.Group;
        return this.bottom = t,
        t.touchThrough = !0,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 533,
        t.elementsContent = [this.bottom_bg_i(), this.grp_task_i(), this.txtbg_i(), this.txt_challengeNum_i(), this.txt_starNum_i(), this.btnStar_i(), this.img_reddot_i()],
        t
    },
    r.bottom_bg_i = function() {
        var t = new eui.Image;
        return this.bottom_bg = t,
        t.height = 52,
        t.source = "pve_spt_galaxy_bottom_bg_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 55,
        t
    },
    r.grp_task_i = function() {
        var t = new eui.Group;
        return this.grp_task = t,
        t.right = 0,
        t.visible = !0,
        t.width = 521,
        t.y = 55,
        t.elementsContent = [this.btnTask_i(), this.task_0_i(), this.task_1_i(), this.task_2_i(), this._Image1_i()],
        t
    },
    r.btnTask_i = function() {
        var t = new eui.Image;
        return this.btnTask = t,
        t.source = "pve_spt_galaxy_imgtask_png",
        t.visible = !0,
        t.x = 399,
        t.y = 0,
        t
    },
    r.task_0_i = function() {
        var t = new eui.Component;
        return this.task_0 = t,
        t.height = 50,
        t.touchChildren = !1,
        t.width = 149,
        t.x = 0,
        t.y = 2,
        t.skinName = n,
        t
    },
    r.task_1_i = function() {
        var t = new eui.Component;
        return this.task_1 = t,
        t.height = 50,
        t.touchChildren = !1,
        t.width = 149,
        t.x = 133,
        t.y = 2,
        t.skinName = a,
        t
    },
    r.task_2_i = function() {
        var t = new eui.Component;
        return this.task_2 = t,
        t.height = 50,
        t.touchChildren = !1,
        t.width = 149,
        t.x = 266,
        t.y = 2,
        t.skinName = s,
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "pve_spt_galaxy_linexie_png",
        t.visible = !0,
        t.width = 17,
        t.x = 398,
        t.y = 0,
        t
    },
    r.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 69,
        t.right = 0,
        t.source = "pve_spt_galaxy_txtbg_png",
        t.touchEnabled = !1,
        t.width = 235,
        t.y = 0,
        t
    },
    r.txt_challengeNum_i = function() {
        var t = new eui.Label;
        return this.txt_challengeNum = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.right = 22,
        t.size = 20,
        t.text = "今日可挑战次数：00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 25,
        t
    },
    r.txt_starNum_i = function() {
        var t = new eui.Label;
        return this.txt_starNum = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "20/30",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 103,
        t.y = 72.533,
        t
    },
    r.btnStar_i = function() {
        var t = new eui.Image;
        return this.btnStar = t,
        t.height = 73,
        t.source = "pve_spt_galaxy_btnStar_png",
        t.width = 102,
        t.x = 5,
        t.y = 34,
        t
    },
    r.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.height = 31,
        t.source = "pve_spt_galaxy_img_reddot_png",
        t.width = 33,
        t.x = 59,
        t.y = 36,
        t
    },
    r.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.btnDifficult_i(), this.btnNormal_i(), this._Group1_i(), this._Group2_i()],
        t
    },
    r.btnDifficult_i = function() {
        var t = new eui.Image;
        return this.btnDifficult = t,
        t.height = 45,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_btnDifficult_png",
        t.width = 173,
        t.y = 58,
        t
    },
    r.btnNormal_i = function() {
        var t = new eui.Image;
        return this.btnNormal = t,
        t.height = 46,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_galaxy_btnNormal_png",
        t.visible = !0,
        t.width = 173,
        t.y = 58,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 213,
        t.scaleX = 1,
        t.scaleY = 1,
        t.y = 14,
        t.elementsContent = [this._Image2_i(), this.txt_count_0_i(), this.icon_0_i()],
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    r.txt_count_0_i = function() {
        var t = new eui.Label;
        return this.txt_count_0 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999999999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    r.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = -3,
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 43,
        t.scaleX = 1,
        t.scaleY = 1,
        t.y = 14,
        t.elementsContent = [this._Image3_i(), this.txt_count_1_i(), this.icon_1_i()],
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "ps_sptpetitem_img_di2_png",
        t.x = 15,
        t.y = 2,
        t
    },
    r.txt_count_1_i = function() {
        var t = new eui.Label;
        return this.txt_count_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "999999999",
        t.textColor = 12834813,
        t.x = 53,
        t.y = 5,
        t
    },
    r.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 30,
        t.width = 30,
        t.x = 0,
        t.y = -3,
        t
    },
    r.grpAnim_i = function() {
        var t = new eui.Group;
        return this.grpAnim = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptPlanetSkin.exml"] = window.PveSptPlanetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_planet", "planetbg", "stardark_0", "starlight_0", "stardark_1", "starlight_1", "stardark_2", "starlight_2", "txt_planet"],
        this.height = 139,
        this.width = 142,
        this.elementsContent = [this.img_planet_i(), this.planetbg_i(), this.txt_planet_i()],
        this.stardark_0_i(),
        this.starlight_0_i(),
        this.stardark_1_i(),
        this.starlight_1_i(),
        this.stardark_2_i(),
        this.starlight_2_i(),
        this.states = [new eui.State("main", [new eui.AddItems("stardark_0", "", 2, "txt_planet"), new eui.AddItems("starlight_0", "", 2, "txt_planet"), new eui.AddItems("stardark_1", "", 2, "txt_planet"), new eui.AddItems("starlight_1", "", 2, "txt_planet"), new eui.AddItems("stardark_2", "", 2, "txt_planet"), new eui.AddItems("starlight_2", "", 2, "txt_planet")]), new eui.State("branch", [])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.img_planet_i = function() {
        var t = new eui.Image;
        return this.img_planet = t,
        t.horizontalCenter = 13.5,
        t.source = "pve_spt_planet_img_planet_png",
        t.verticalCenter = -14.5,
        t
    },
    i.planetbg_i = function() {
        var t = new eui.Image;
        return this.planetbg = t,
        t.height = 42,
        t.source = "pve_spt_planet_planetbg_png",
        t.width = 110,
        t.x = 0,
        t.y = 72,
        t
    },
    i.stardark_0_i = function() {
        var t = new eui.Image;
        return this.stardark_0 = t,
        t.height = 40,
        t.source = "pve_spt_planet_stardark_png",
        t.visible = !0,
        t.width = 41,
        t.x = 5,
        t.y = 98,
        t
    },
    i.starlight_0_i = function() {
        var t = new eui.Image;
        return this.starlight_0 = t,
        t.height = 42,
        t.source = "pve_spt_planet_starlight_png",
        t.visible = !0,
        t.width = 42,
        t.x = 5,
        t.y = 97,
        t
    },
    i.stardark_1_i = function() {
        var t = new eui.Image;
        return this.stardark_1 = t,
        t.height = 40,
        t.source = "pve_spt_planet_stardark_png",
        t.width = 41,
        t.x = 29,
        t.y = 98,
        t
    },
    i.starlight_1_i = function() {
        var t = new eui.Image;
        return this.starlight_1 = t,
        t.height = 42,
        t.source = "pve_spt_planet_starlight_png",
        t.width = 42,
        t.x = 29,
        t.y = 97,
        t
    },
    i.stardark_2_i = function() {
        var t = new eui.Image;
        return this.stardark_2 = t,
        t.height = 40,
        t.source = "pve_spt_planet_stardark_png",
        t.width = 41,
        t.x = 54,
        t.y = 98,
        t
    },
    i.starlight_2_i = function() {
        var t = new eui.Image;
        return this.starlight_2 = t,
        t.height = 42,
        t.source = "pve_spt_planet_starlight_png",
        t.width = 42,
        t.x = 54,
        t.y = 97,
        t
    },
    i.txt_planet_i = function() {
        var t = new eui.Label;
        return this.txt_planet = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 22,
        t.text = "1-3",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 9,
        t.y = 85,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptStarItemSkin.exml"] = window.PveSptStarItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_task", "btnGet", "tag_got", "grpStatic", "itemList", "grpDynamic"],
        this.height = 88,
        this.width = 570,
        this.elementsContent = [this.grpStatic_i(), this.grpDynamic_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_task_i(), this.btnGet_i(), this.tag_got_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 88,
        t.scale9Grid = new egret.Rectangle(4, 2, 12, 12),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_star_item_bg_png",
        t.width = 570,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_task_i = function() {
        var t = new eui.Label;
        return this.txt_task = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "集齐本星系003颗星星",
        t.textColor = 12900350,
        t.touchEnabled = !1,
        t.x = 25.999999999999986,
        t.y = 33.00000000000003,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_star_item_btnGet_png",
        t.visible = !0,
        t.width = 90,
        t.x = 457,
        t.y = 22,
        t
    },
    i.tag_got_i = function() {
        var t = new eui.Label;
        return this.tag_got = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "已领取",
        t.textColor = 12900350,
        t.touchEnabled = !1,
        t.x = 472,
        t.y = 33.00000000000003,
        t
    },
    i.grpDynamic_i = function() {
        var t = new eui.Group;
        return this.grpDynamic = t,
        t.x = 244,
        t.y = 14,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 56,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 185,
        t.x = 0,
        t.y = 0,
        t.viewport = this.itemList_i(),
        t
    },
    i.itemList_i = function() {
        var t = new eui.List;
        return this.itemList = t,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 7,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveSptStarSkin.exml"] = window.PveSptStarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BtnClose", "txt1", "grpStatic", "_list", "grpDynamic"],
        this.height = 390,
        this.width = 620,
        this.elementsContent = [this.grpStatic_i(), this.grpDynamic_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.height = 365,
        t.width = 608,
        t.y = 22,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.BtnClose_i(), this.txt1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.height = 364.893,
        t.scale9Grid = new egret.Rectangle(11, 9, 10, 5),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_dialog_s9_pop_bg4_png",
        t.width = 608,
        t.x = 0,
        t.y = 3.1070000000000135,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.scale9Grid = new egret.Rectangle(330, 0, 307, 34),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_up_bg_big_png",
        t.width = 605,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 41,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pve_spt_star_img_title_png",
        t.x = 31,
        t.y = -2,
        t
    },
    i.BtnClose_i = function() {
        var t = new eui.Image;
        return this.BtnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_pop_btn_close_png",
        t.x = 572,
        t.y = 1.9999999999999858,
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.bottom = 10,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "集齐全部星星后，可开启本星系扫荡功能",
        t.textColor = 8757203,
        t.visible = !1,
        t
    },
    i.grpDynamic_i = function() {
        var t = new eui.Group;
        return this.grpDynamic = t,
        t.width = 570,
        t.x = 19,
        t.y = 70,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 310,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 570,
        t.x = 0,
        t.y = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 15,
        t
    },
    e
} (eui.Skin);