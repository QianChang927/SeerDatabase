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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = i;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(i);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
fusionMonster; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "FusionMonsterSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.addEvent(),
            this.update()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.imgCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.imgPet,
            function() {
                ModuleManager.showModuleByID(config.ModuleConst.PET_BAG)
            },
            this),
            ImageButtonUtil.add(this.btnChallenge,
            function() {
                e.fightTimes > 0 ? SocketConnection.sendByQueue(41388, [57, 1]) : BubblerManager.getInstance().showText("今日挑战次数已用尽，请在活动结束后前往排行榜领取宝箱奖励")
            },
            this),
            ImageButtonUtil.add(this.btnRank,
            function() {
                4 == e.state ? BubblerManager.getInstance().showText("活动暂未开始，当前暂无排行！") : PopViewManager.getInstance().openView(new t.FusionMonsterPop(3 == e.state))
            },
            this),
            ImageButtonUtil.add(this.btnReward,
            function() {
                PopViewManager.getInstance().openView(new t.FusionMonsterRewardPop)
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.update, this),
            EventManager.addEventListener(i.EVENT_CLOSE_POP, this.update, this),
            EventManager.addEventListener(i.EVENT_BOSS_DEFEATED, this.update, this)
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, o, s, a, u, n, r, o, s, a, h, l = this;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        return this.timeout && egret.clearTimeout(this.timeout),
                        t = SystemTimerManager.sysBJDate.getDate() - 7,
                        [4, KTool.getMultiValueAsync([201537])];
                    case 1:
                        return e = _.sent(),
                        this.fightTimes = 3 - e[0],
                        i = this,
                        [4, this.getState()];
                    case 2:
                        return i.state = _.sent(),
                        this.txtFight.visible = this.btnChallenge.visible = 1 == this.state,
                        this.txtFightTimes.visible = this.txtFight.visible,
                        this.imgBottom.visible = this.state >= 2,
                        this.imgTime.visible = this.txtTime.visible = 2 == this.state || 4 == this.state,
                        this.imgEnd.visible = 3 == this.state,
                        this.imgOver.visible = 5 == this.state,
                        1 == this.state ? (this.txtFightTimes.text = this.fightTimes.toString(), n = SystemTimerManager.sysBJDate.getHours(), r = SystemTimerManager.sysBJDate.getMinutes(), o = SystemTimerManager.sysBJDate.getSeconds(), s = new Date("2024/1/1 " + n + ":" + r + ":" + o), a = new Date("2024/1/1 21:00:00"), u = a.getTime() - s.getTime(), u /= 1e3, egret.clearInterval(this.intervalOpen), this.intervalOpen = egret.setInterval(function() {
                            u--,
                            0 >= u && (egret.clearInterval(l.intervalOpen), l.update())
                        },
                        this, 1e3)) : 2 == this.state || 4 == this.state ? (n = SystemTimerManager.sysBJDate.getHours(), r = SystemTimerManager.sysBJDate.getMinutes(), o = SystemTimerManager.sysBJDate.getSeconds(), s = new Date("2024/1/" + (n >= 18 ? 2 : 1) + " 18:00:00"), a = new Date("2024/1/1 " + n + ":" + r + ":" + o), h = s.getTime() - a.getTime(), h /= 1e3, this.txtTime.text = SystemTimerManager.getTimeClockString(h, !0), egret.clearInterval(this.intervalClose), this.intervalClose = egret.setInterval(function() {
                            l.txtTime.text = SystemTimerManager.getTimeClockString(h, !0),
                            h--,
                            0 >= h && (egret.clearInterval(l.intervalClose), l.update())
                        },
                        this, 1e3)) : 3 == this.state && (this.timeout = egret.setTimeout(function() {
                            l.update()
                        },
                        this, 6e4)),
                        [2]
                    }
                })
            })
        },
        i.prototype.getState = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([121554])];
                    case 1:
                        return t = r.sent(),
                        e = new Date(1e3 * t[0]),
                        i = SystemTimerManager.sysBJDate.getDate(),
                        n = SystemTimerManager.sysBJDate.getHours(),
                        n >= 18 && 21 > n ? [2, Promise.resolve(1)] : 18 > n ? 8 == i ? [2, Promise.resolve(4)] : e.getDate() == i ? [2, Promise.resolve(2)] : e.getDate() == i - 1 && e.getHours() >= 18 ? [2, Promise.resolve(2)] : [2, Promise.resolve(3)] : e.getDate() == i ? e.getHours() < 18 ? [2, Promise.resolve(3)] : 22 == i ? [2, Promise.resolve(5)] : [2, Promise.resolve(2)] : [2, Promise.resolve(3)]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            egret.clearInterval(this.intervalOpen),
            egret.clearInterval(this.intervalClose),
            egret.clearTimeout(this.timeout)
        },
        i.EVENT_BOSS_DEFEATED = "fusionMonster.bossDefeated",
        i.EVENT_CLOSE_POP = "fusionMonster.closePop",
        i
    } (BaseModule);
    t.FusionMonster = e,
    __reflect(e.prototype, "fusionMonster.FusionMonster")
} (fusionMonster || (fusionMonster = {}));
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
fusionMonster; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "FusionMonsterItemSkin",
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t = this.data;
            this.txtIndex.text = t.index + "",
            this.txtName.text = t.nick,
            this.txtNumber.text = t.userid + "",
            this.txtDamage.text = t.score + ""
        },
        e
    } (BaseItemRenderer);
    t.FusionMonsterItem = e,
    __reflect(e.prototype, "fusionMonster.FusionMonsterItem")
} (fusionMonster || (fusionMonster = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                u(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                u(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        u((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return u.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                u.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    u = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    u.label = i[1];
                    break
                }
                if (6 === i[0] && u.label < s[1]) {
                    u.label = s[1],
                    s = i;
                    break
                }
                if (s && u.label < s[2]) {
                    u.label = s[2],
                    u.ops.push(i);
                    break
                }
                s[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            i = e.call(t, u)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, u = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
fusionMonster; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.skinName = "FusionMonsterPopSkin",
            i.canOpen = t,
            i.grpStatic.cacheAsBitmap = !0,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        i.prototype.init = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, o, s, a = this;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return DisplayUtil.setEnabled(this.btnOpen, this.canOpen),
                        this.list.itemRenderer = t.FusionMonsterItem,
                        e = SystemTimerManager.sysBJDate.getDate(),
                        i = SystemTimerManager.sysBJDate.getHours(),
                        n = 101 + 100 * (e - 8),
                        18 > i && (n -= 100),
                        101 > n && (n = 101),
                        [4, KTool.getRankListLength(178, n)];
                    case 1:
                        return r = u.sent(),
                        r = Math.min(99, r),
                        [4, KTool.getRangeRankList(178, n, 0, r)];
                    case 2:
                        o = u.sent();
                        for (s in o) o[s].index = +s + 1;
                        return this.list.dataProvider = new eui.ArrayCollection(o),
                        KTool.getMyRankPosition(178, n, !0,
                        function(t) {
                            t >= 0 ? (a.txtRank.text = t + 1 + "", a.imgRank.visible = !0) : (t = 5001, a.txtRank.text = "5000以后", a.imgRank.visible = !1);
                            var e = 5;
                            12 >= t ? e = 1 : 500 >= t ? e = 2 : 2e3 >= t ? e = 3 : 5e3 >= t && (e = 4),
                            a.txtBox.text = "保持排名，即可开启" + [null, "至臻", "钻石", "黄金", "白银", "青铜"][e] + "宝箱",
                            a.imgBox.source = "fusion_monster_pop_imgBox" + e + "_png"
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                tipsPop.TipsPop.openHelpPopById(126)
            },
            this),
            ImageButtonUtil.add(this.btnOpen,
            function() {
                SocketConnection.sendByQueue(41388, [57, 2],
                function() {
                    DisplayUtil.setEnabled(t.btnOpen, !1)
                })
            },
            this)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.dispatchEventWith(t.FusionMonster.EVENT_CLOSE_POP),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.FusionMonsterPop = e,
    __reflect(e.prototype, "fusionMonster.FusionMonsterPop")
} (fusionMonster || (fusionMonster = {}));
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
fusionMonster; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = FusionMonsterRewardItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.imgExchangeItem.source = ClientConfig.getItemIcon(1725758)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            ImageButtonUtil.removeAll(this),
            this.addEvent(),
            this.updateView()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.grpGet,
            function() {
                var i = e.itemIndex + 11;
                SocketConnection.sendByQueue(41388, [57, i],
                function() {
                    19 > i ? AchieveManager.updateSingleInfo(e.data.info[0]).then(function() {
                        EventManager.dispatchEventWith(t.EventConst.EVENT_UPDATE_REWARD_POP)
                    }) : EventManager.dispatchEventWith(t.EventConst.EVENT_UPDATE_REWARD_POP)
                })
            },
            this)
        },
        i.prototype.updateView = function() {
            var t = this,
            e = ItemManager.getNumByID(1725758);
            switch (this.data.type) {
            case 1:
                var i = AchieveXMLInfo.getRule(this.data.info[0], this.data.info[1]);
                this.txtName.text = i.title,
                this.imgItem.source = ClientConfig.getAchieveIcon(i.proicon),
                ImageButtonUtil.add(this.imgItem,
                function() {
                    if (i.SpeNameBonus) tipsPop.TipsPop.openTitleInfoPop(i.SpeNameBonus);
                    else {
                        var t = {};
                        t.branchId = i.branchId,
                        t.ruleId = i.ID,
                        tipsPop.TipsPop.openTitlePop(t)
                    }
                },
                this),
                this.txtPrice.text = "100",
                100 > e && DisplayUtil.setEnabled(this.grpGet, !1, !0);
                var n = AchieveManager.awardMask[this.data.info[0] - 1],
                r = !!KTool.getBit(n.rule_mask, i.ID);
                r && (this.currentState = "hasGot");
                break;
            case 2:
                this.txtName.text = ItemXMLInfo.getName(this.data.info[0]),
                this.imgItem.source = ClientConfig.getItemIcon(this.data.info[0]),
                ImageButtonUtil.add(this.imgItem,
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t.data.info[0]
                    })
                },
                this),
                this.txtPrice.text = "20",
                20 > e && DisplayUtil.setEnabled(this.grpGet, !1, !0),
                this.txtLimit.visible = !1,
                this.txtNum.text = this.data.info[1],
                this.txtNum.right = 12,
                this.txtNum.y = 100
            }
        },
        i
    } (BaseItemRenderer);
    t.FusionMonsterRewardItem = e,
    __reflect(e.prototype, "fusionMonster.FusionMonsterRewardItem")
} (fusionMonster || (fusionMonster = {}));
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
fusionMonster; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.itemInfos = [[126, 5], [129, 5], [126, 19], [83, 18], [152, 13], [131, 23], [137, 3], [135, 22], [1, "10万"], [3, "2万"]],
            t.skinName = FusionMonsterRewardPopSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.imgItem.source = ClientConfig.getItemIcon(1725758),
            this.list.itemRenderer = t.FusionMonsterRewardItem,
            this.initView()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.imgItem,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1725758
                })
            },
            this),
            EventManager.addEventListener(t.EventConst.EVENT_UPDATE_REWARD_POP,
            function() {
                e.arrayList.refresh(),
                e.txtNum.text = ItemManager.getNumByID(1725758).toString()
            },
            this)
        },
        i.prototype.initView = function() {
            for (var t = [], e = 0; e < this.itemInfos.length; e++) 8 > e ? t.push({
                type: 1,
                info: this.itemInfos[e]
            }) : t.push({
                type: 2,
                info: this.itemInfos[e]
            });
            this.arrayList = new eui.ArrayCollection(t),
            this.list.dataProvider = this.arrayList,
            this.txtNum.text = ItemManager.getNumByID(1725758).toString()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeAll(this),
            this.arrayList.removeAll()
        },
        i
    } (PopView);
    t.FusionMonsterRewardPop = e,
    __reflect(e.prototype, "fusionMonster.FusionMonsterRewardPop")
} (fusionMonster || (fusionMonster = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
fusionMonster; !
function(t) {
    var e = function() {
        function t() {}
        return t.EVENT_UPDATE_REWARD_POP = "EventUpdateRewardPop",
        t
    } ();
    t.EventConst = e,
    __reflect(e.prototype, "fusionMonster.EventConst")
} (fusionMonster || (fusionMonster = {}));
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
generateEUI.paths["resource/eui_skins/FusionMonsterItemSkin.exml"] = window.FusionMonsterItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtIndex", "txtName", "txtNumber", "txtDamage"],
        this.height = 35,
        this.width = 680,
        this.elementsContent = [this._Image1_i(), this.txtIndex_i(), this.txtName_i(), this.txtNumber_i(), this.txtDamage_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "fusion_monster_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtIndex_i = function() {
        var t = new eui.Label;
        return this.txtIndex = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -291.5,
        t.size = 18,
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -171,
        t.size = 18,
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t
    },
    i.txtNumber_i = function() {
        var t = new eui.Label;
        return this.txtNumber = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -14,
        t.size = 18,
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t
    },
    i.txtDamage_i = function() {
        var t = new eui.Label;
        return this.txtDamage = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 194,
        t.size = 18,
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FusionMonsterPopSkin.exml"] = window.FusionMonsterPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBox", "btnClose", "btnHelp", "btnOpen", "imgRank", "txtBox", "txtRank", "grpStatic", "list", "grpDynamic"],
        this.height = 548,
        this.width = 998,
        this.elementsContent = [this.grpStatic_i(), this.grpDynamic_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grpStatic_i = function() {
        var t = new eui.Group;
        return this.grpStatic = t,
        t.elementsContent = [this._Image1_i(), this.imgBox_i(), this.btnClose_i(), this.btnHelp_i(), this.btnOpen_i(), this.imgRank_i(), this.txtBox_i(), this.txtRank_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_pop_imgbg_jpg",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBox_i = function() {
        var t = new eui.Image;
        return this.imgBox = t,
        t.scaleX = .9,
        t.scaleY = .9,
        t.x = 710,
        t.y = 170,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_pop_btnclose_png",
        t.x = 954,
        t.y = 5,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_pop_btnhelp_png",
        t.x = 957,
        t.y = 97,
        t
    },
    i.btnOpen_i = function() {
        var t = new eui.Image;
        return this.btnOpen = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_pop_btnstart_png",
        t.x = 745,
        t.y = 417,
        t
    },
    i.imgRank_i = function() {
        var t = new eui.Image;
        return this.imgRank = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_pop_imgrank_png",
        t.x = 753,
        t.y = 132,
        t
    },
    i.txtBox_i = function() {
        var t = new eui.Label;
        return this.txtBox = t,
        t.fontFamily = "REEJI",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "保持排名，即可开启宝箱宝箱",
        t.textColor = 14465535,
        t.x = 720,
        t.y = 176,
        t
    },
    i.txtRank_i = function() {
        var t = new eui.Label;
        return this.txtRank = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 352,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 35,
        t.text = "5000",
        t.textAlign = "center",
        t.textColor = 16514896,
        t.x = 810,
        t.y = 132,
        t
    },
    i.grpDynamic_i = function() {
        var t = new eui.Group;
        return this.grpDynamic = t,
        t.height = 460,
        t.width = 680,
        t.x = 20,
        t.y = 48,
        t.elementsContent = [this._Scroller1_i()],
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 460,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 680,
        t.x = 0,
        t.y = 0,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FusionMonsterRewardItemSkin.exml"] = window.FusionMonsterRewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "txtLimit", "txtNum", "imgGetBg", "txtPrice", "imgExchangeItem", "grpGet", "hasGot", "imgItem"],
        this.height = 157,
        this.width = 134,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.txtLimit_i(), this.txtNum_i(), this.grpGet_i(), this.hasGot_i(), this.imgItem_i()],
        this.states = [new eui.State("canGet", [new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("txtNum", "text", "1/1"), new eui.SetProperty("imgGetBg", "visible", !0), new eui.SetProperty("txtPrice", "visible", !0), new eui.SetProperty("imgExchangeItem", "visible", !0), new eui.SetProperty("grpGet", "visible", !1)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "fusion_monster_mingzide_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 17.9932561210328,
        t.text = "奖励名称",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.y = 7,
        t
    },
    i.txtLimit_i = function() {
        var t = new eui.Label;
        return this.txtLimit = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9940070153644,
        t.text = "限兑",
        t.textColor = 16777215,
        t.x = 36,
        t.y = 107,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.9940070153644,
        t.text = "0/1",
        t.textColor = 16777215,
        t.x = 75,
        t.y = 106,
        t
    },
    i.grpGet_i = function() {
        var t = new eui.Group;
        return this.grpGet = t,
        t.height = 25,
        t.width = 124,
        t.x = 5,
        t.y = 126,
        t.elementsContent = [this.imgGetBg_i(), this.txtPrice_i(), this.imgExchangeItem_i()],
        t
    },
    i.imgGetBg_i = function() {
        var t = new eui.Image;
        return this.imgGetBg = t,
        t.scale9Grid = new egret.Rectangle(4, 0, 4, 25),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "fusion_monster_changgui_png",
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 8,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18.5729245906107,
        t.text = "3000",
        t.textColor = 10180889,
        t.x = 48,
        t.y = 3.9999999999999716,
        t
    },
    i.imgExchangeItem_i = function() {
        var t = new eui.Image;
        return this.imgExchangeItem = t,
        t.height = 20,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 20,
        t.x = 25,
        t.y = 2,
        t
    },
    i.hasGot_i = function() {
        var t = new eui.Image;
        return this.hasGot = t,
        t.source = "fusion_monster_yichoudao_png",
        t.visible = !0,
        t.x = 5,
        t.y = 124,
        t
    },
    i.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 74,
        t.horizontalCenter = 0,
        t.verticalCenter = -12,
        t.width = 76,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FusionMonsterRewardPopSkin.exml"] = window.FusionMonsterRewardPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBG", "imgTitle", "btnClose", "txtNum", "imgItem", "list"],
        this.height = 431,
        this.width = 754,
        this.elementsContent = [this.imgBG_i(), this.imgTitle_i(), this.btnClose_i(), this.txtNum_i(), this._Label1_i(), this.imgItem_i(), this._Scroller1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.source = "title_pop_2022_imge_735x431_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgTitle_i = function() {
        var t = new eui.Label;
        return this.imgTitle = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.text = "奖励兑换",
        t.textColor = 12111615,
        t.x = 37,
        t.y = 3,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.width = 34,
        t.x = 712,
        t.y = 0,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 24,
        t.text = "0000",
        t.textColor = 12111615,
        t.x = 425,
        t.y = 397,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "守卫福币",
        t.textColor = 12111615,
        t.x = 275,
        t.y = 396,
        t
    },
    i.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 31,
        t.width = 33,
        t.x = 369,
        t.y = 390,
        t
    },
    i._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 330,
        t.width = 705,
        t.x = 25,
        t.y = 48,
        t.viewport = this.list_i(),
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 7,
        t.requestedColumnCount = 5,
        t.verticalGap = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FusionMonsterSkin.exml"] = window.FusionMonsterSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnChallenge", "btnRank", "btnReward", "imgBottom", "imgTime", "imgEnd", "imgOver", "imgCure", "imgPet", "txtTime", "txtFightTimes", "txtFight"],
        this.height = 640,
        this.width = 1256,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.btnChallenge_i(), this.btnRank_i(), this.btnReward_i(), this.imgBottom_i(), this.imgTime_i(), this.imgEnd_i(), this.imgOver_i(), this.imgCure_i(), this.imgPet_i(), this.txtTime_i(), this.txtFightTimes_i(), this.txtFight_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "fusion_monster_bg_jpg",
        t.top = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.right = 0,
        t.source = "fusion_monster_imgpet_png",
        t.y = 94,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.right = 0,
        t.source = "fusion_monster_imgrightbottom_png",
        t.y = 346,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -109,
        t.source = "fusion_monster_imgtitle_png",
        t.y = 56,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = -109.5,
        t.source = "fusion_monster_imgtext_png",
        t.y = 209,
        t
    },
    i.btnChallenge_i = function() {
        var t = new eui.Image;
        return this.btnChallenge = t,
        t.horizontalCenter = 321.5,
        t.source = "fusion_monster_btnchallenge_png",
        t.y = 521,
        t
    },
    i.btnRank_i = function() {
        var t = new eui.Image;
        return this.btnRank = t,
        t.right = 105,
        t.source = "fusion_monster_btnrank_png",
        t.y = 64,
        t
    },
    i.btnReward_i = function() {
        var t = new eui.Image;
        return this.btnReward = t,
        t.right = 94,
        t.source = "fusion_monster_pop_imgreward_png",
        t.y = 160,
        t
    },
    i.imgBottom_i = function() {
        var t = new eui.Image;
        return this.imgBottom = t,
        t.horizontalCenter = 72.5,
        t.source = "fusion_monster_imgbottom_png",
        t.visible = !1,
        t.y = 529,
        t
    },
    i.imgTime_i = function() {
        var t = new eui.Image;
        return this.imgTime = t,
        t.horizontalCenter = -3.5,
        t.source = "fusion_monster_imgtime_png",
        t.visible = !1,
        t.y = 540,
        t
    },
    i.imgEnd_i = function() {
        var t = new eui.Image;
        return this.imgEnd = t,
        t.horizontalCenter = 66,
        t.source = "fusion_monster_imgend_png",
        t.visible = !1,
        t.y = 540,
        t
    },
    i.imgOver_i = function() {
        var t = new eui.Image;
        return this.imgOver = t,
        t.horizontalCenter = 66,
        t.source = "fusion_monster_imgover_png",
        t.visible = !1,
        t.y = 540,
        t
    },
    i.imgCure_i = function() {
        var t = new eui.Image;
        return this.imgCure = t,
        t.right = 94,
        t.source = "fusion_monster_pop_imgcure_png",
        t.y = 334,
        t
    },
    i.imgPet_i = function() {
        var t = new eui.Image;
        return this.imgPet = t,
        t.right = 94,
        t.source = "fusion_monster_pop_imgpet_png",
        t.y = 431,
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 169,
        t.size = 22,
        t.text = "00:00:00",
        t.textColor = 16514895,
        t.visible = !1,
        t.y = 550,
        t
    },
    i.txtFightTimes_i = function() {
        var t = new eui.Label;
        return this.txtFightTimes = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 405,
        t.size = 22,
        t.text = "00",
        t.textColor = 16514895,
        t.y = 596,
        t
    },
    i.txtFight_i = function() {
        var t = new eui.Label;
        return this.txtFight = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 295,
        t.size = 22,
        t.text = "今日可挑战次数：",
        t.textColor = 16514895,
        t.y = 594,
        t
    },
    e
} (eui.Skin);