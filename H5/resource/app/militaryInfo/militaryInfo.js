var __reflect = this && this.__reflect ||
function(t, i, e) {
    t.__class__ = i,
    e ? e.push(i) : e = [i],
    t.__types__ = t.__types__ ? e.concat(t.__types__) : e
},
militaryInfo; !
function(t) {
    var i = function() {
        function t() {}
        return t.AFTER_BUY_REWARD = "military.AfterBuyReward",
        t.REWARD_ITEM_SELECT = "military.rewardItemSelect",
        t
    } ();
    t.EventConst = i,
    __reflect(i.prototype, "militaryInfo.EventConst")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(i) {
        function e(t) {
            var e = i.call(this) || this;
            return e.groupName = "militaryInfo",
            e.skinName = "MilitaryInfoSkin",
            e.hasParam = !!t,
            e
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        e.prototype.destroy = function() {
            this.detailView.destroy(),
            this.rewardView.destroy(),
            this.menu && this.menu.destroy(),
            i.prototype.destroy.call(this)
        },
        e.prototype.init = function() {
            this.initBtnClose("military_info_imgtitle_png", this),
            this.initBtnHelp(function() {
                PopViewManager.getInstance().openView(new t.HelpPop)
            },
            this),
            this.detailView = new t.DetailView,
            this.rewardView = new t.RewardView;
            var i = new MenuData;
            i.groupName = this.groupName,
            i["default"] = this.hasParam ? 2 : 1,
            i.root = [1, 2],
            i.data = {
                1 : {
                    title: "军衔详情"
                },
                2 : {
                    title: "军衔奖励"
                }
            },
            this.menu = Menu.createMenu(i, this, 48)
        },
        e.prototype.addEvent = function() {
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName, this.onChangeTab, this)
        },
        e.prototype.onChangeTab = function() {
            var t = this.menu.selectedValue;
            this.usualBtnHelp.visible = 1 == t,
            1 == t ? (this.rewardView.parent && this.group.removeChild(this.rewardView), this.group.addChild(this.detailView), this.detailView.update()) : (this.detailView.parent && (this.detailView.hide(), this.group.removeChild(this.detailView)), this.group.addChild(this.rewardView), this.rewardView.update())
        },
        e
    } (BaseModule);
    t.MilitaryInfo = i,
    __reflect(i.prototype, "militaryInfo.MilitaryInfo")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = "MilitaryInfoMilitaryItemSkin",
            i
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            var t = this,
            i = this.data;
            this.txtName.text = i.title,
            this.txtNum.text = "成就点数：" + i.achievepoint,
            this.imgIcon.source = ClientConfig.getAchieveRankIcon(i.id),
            this.imgSelected.visible = i.id == AchieveManager.getCurAchieveInfo().id,
            this.imgHas.visible = !1,
            this.btnGet.visible = !1;
            var e = +i.award;
            if (this.imgSuit.visible = e > 0, this.imgEmpty.visible = !(e > 0), e > 0 && (RES.getResByUrl(ClientConfig.getSuitBodyPng(e)).then(function(i) {
                t.imgSuit.source = i,
                DisplayUtil.keepEqualDis(t.imgSuit, 180, 180, !0)
            }), AchieveManager.getRankLv() >= i.id)) {
                var n = -1 != i.arrMySuit.indexOf(e) || this.data.HasGet;
                this.imgHas.visible = n,
                this.btnGet.visible = !n
            }
        },
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGet,
            function() {
                SocketConnection.sendByQueue(42380, [1, t.data.id - 4],
                function() {
                    t.imgHas.visible = !0,
                    t.btnGet.visible = !1,
                    t.data.HasGet = !0
                })
            },
            this),
            ImageButtonUtil.add(this.imgSuit,
            function() {
                tipsPop.TipsPop.openSuitPop({
                    id: +t.data.award
                })
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgEmpty,
            function() {
                BubblerManager.getInstance().showText("该军衔没有附赠套装")
            },
            this, !1, !1)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        i
    } (eui.ItemRenderer);
    t.MilitaryItem = i,
    __reflect(i.prototype, "militaryInfo.MilitaryItem")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.skinName = "MilitaryInfoRewardItemSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var i = this;
            this.imgSelected.visible = !1,
            ImageButtonUtil.add(this.btnBuy,
            function() {
                KTool.getMultiValue([101714],
                function(e) {
                    e[0] < i.data.price ? BubblerManager.getInstance().showText("荣誉令牌数量不足！") : SocketConnection.sendByQueue(42380, [2, i.data.index],
                    function() {
                        EventManager.dispatchEventWith(t.EventConst.AFTER_BUY_REWARD)
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.imgItem,
            function() {
                i.data.isMark ? tipsPop.TipsPop.openCounterMarkPop({
                    ins: i.data.id
                }) : tipsPop.TipsPop.openItemPop({
                    id: i.data.id
                })
            },
            this),
            EventManager.addEventListener(t.EventConst.REWARD_ITEM_SELECT,
            function(t) {
                var e = t.data;
                i.imgSelected.visible = e == i.data.index
            },
            this)
        },
        e.prototype.dataChanged = function() {
            this.data.isMark ? this.imgItem.source = ClientConfig.getMarkPath(this.data.id) : this.imgItem.source = ClientConfig.getItemIcon(this.data.id),
            this.txtPrice.text = this.data.price,
            this.txtNum.text = this.data.num,
            this.txtName.text = ItemXMLInfo.getName(this.data.id),
            ClientConfig.getMarkPath
        },
        e.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (eui.ItemRenderer);
    t.RewardItem = i,
    __reflect(i.prototype, "militaryInfo.RewardItem")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = "MilitaryInfoRewardPopItemSkin",
            i
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            if (this.data) {
                this.visible = !0,
                this.txtName.text = this.data.name;
                var t = AchieveManager.getAchieveInfoByRank(this.data.rankIconid);
                this.imgIcon.source = ClientConfig.getAchieveRankIcon(t.id);
                var i = !1;
                4 == this.data.rankIconid ? AchieveManager.getRankLv() <= 4 && (i = !0) : this.data.rankIconid == AchieveManager.getRankLv() && (i = !0),
                this.imgBG.source = "military_info_reward_pop_item_imgbg" + (i ? 2 : 1) + "_png"
            } else this.visible = !1
        },
        i
    } (eui.ItemRenderer);
    t.RewardPopItem = i,
    __reflect(i.prototype, "militaryInfo.RewardPopItem")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = "HelpPopSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.HelpPop = i,
    __reflect(i.prototype, "militaryInfo.HelpPop")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.dataInfo = [{
                id: 1,
                name: "准尉以下",
                rankIconid: 4,
                dailyToken: 10,
                tokenMax: 100
            },
            {
                id: 2,
                name: "准尉",
                rankIconid: 5,
                dailyToken: 15,
                tokenMax: 150
            },
            {
                id: 3,
                name: "少尉",
                rankIconid: 6,
                dailyToken: 20,
                tokenMax: 200
            },
            {
                id: 4,
                name: "中尉",
                rankIconid: 7,
                dailyToken: 25,
                tokenMax: 250
            },
            {
                id: 5,
                name: "上尉",
                rankIconid: 8,
                dailyToken: 30,
                tokenMax: 300
            },
            {
                id: 6,
                name: "少校",
                rankIconid: 9,
                dailyToken: 35,
                tokenMax: 350
            },
            {
                id: 7,
                name: "中校",
                rankIconid: 10,
                dailyToken: 40,
                tokenMax: 400
            },
            {
                id: 8,
                name: "上校",
                rankIconid: 11,
                dailyToken: 45,
                tokenMax: 450
            },
            {
                id: 9,
                name: "大校",
                rankIconid: 12,
                dailyToken: 50,
                tokenMax: 500
            },
            {
                id: 10,
                name: "准将",
                rankIconid: 13,
                dailyToken: 55,
                tokenMax: 550
            }],
            t.skinName = "MilitaryInfoRewardPopSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            var i = this;
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.arrayCollection = new eui.ArrayCollection,
            this.component = new common.ui.CustomScroller(this.list.width, this.list.height, 148, 172, this.list.layout.gap, t.RewardPopItem, 199, .65, 1, 1, 1, this.list, this.arrayCollection, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.addChild(this.component),
            this.component.x = this.list.x,
            this.component.y = this.list.y;
            var e = Math.max(1, AchieveManager.getRankLv() - 3),
            n = this.dataInfo[e - 1];
            this.component.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END,
            function() {
                var t = i.arrayCollection.getItemAt(i.component.getSelectIndex());
                i.txtDaily.text = t.dailyToken,
                i.txtMax.text = t.tokenMax,
                t.rankIconid > Math.max(4, AchieveManager.getRankLv()) ? (i.groupAdd.visible = !0, i.txtDailyAdd.text = t.dailyToken - n.dailyToken + "", i.txtMaxAdd.text = t.tokenMax - n.tokenMax + "") : i.groupAdd.visible = !1
            },
            this),
            this.dataInfo.unshift(null),
            this.dataInfo.push(null),
            this.arrayCollection.source = this.dataInfo,
            this.component.goToNum(e),
            this.groupAdd.visible = !1
        },
        e.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.MilitaryRewardPop = i,
    __reflect(i.prototype, "militaryInfo.MilitaryRewardPop")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
__awaiter = this && this.__awaiter ||
function(t, i, e, n) {
    return new(e || (e = Promise))(function(r, a) {
        function o(t) {
            try {
                u(n.next(t))
            } catch(i) {
                a(i)
            }
        }
        function s(t) {
            try {
                u(n["throw"](t))
            } catch(i) {
                a(i)
            }
        }
        function u(t) {
            t.done ? r(t.value) : new e(function(i) {
                i(t.value)
            }).then(o, s)
        }
        u((n = n.apply(t, i || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, i) {
    function e(t) {
        return function(i) {
            return n([t, i])
        }
    }
    function n(e) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; u;) try {
            if (r = 1, a && (o = a[2 & e[0] ? "return": e[0] ? "throw": "next"]) && !(o = o.call(a, e[1])).done) return o;
            switch (a = 0, o && (e = [0, o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4:
                return u.label++,
                {
                    value: e[1],
                    done: !1
                };
            case 5:
                u.label++,
                a = e[1],
                e = [0];
                continue;
            case 7:
                e = u.ops.pop(),
                u.trys.pop();
                continue;
            default:
                if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    u = 0;
                    continue
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    u.label = e[1];
                    break
                }
                if (6 === e[0] && u.label < o[1]) {
                    u.label = o[1],
                    o = e;
                    break
                }
                if (o && u.label < o[2]) {
                    u.label = o[2],
                    u.ops.push(e);
                    break
                }
                o[2] && u.ops.pop(),
                u.trys.pop();
                continue
            }
            e = i.call(t, u)
        } catch(n) {
            e = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & e[0]) throw e[1];
        return {
            value: e[0] ? e[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, u = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: e(0),
        "throw": e(1),
        "return": e(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
militaryInfo; !
function(t) {
    var i = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = "MilitaryInfoUpPopSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.arrIcon = [],
            this.ani1 = SpineUtil.createAnimate("jinsheng"),
            this.groupAni.addChild(this.ani1),
            this.ani1.visible = !1,
            this.ani1.x = -1,
            this.ani1.y = 33,
            this.ani2 = SpineUtil.createAnimate("jinsheng"),
            this.groupAni.addChild(this.ani2),
            this.ani2.visible = !1,
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hide, this)
        },
        i.prototype._parseData = function() {
            var t = this,
            i = AchieveManager.getAchieveInfoByRank(this._data),
            e = AchieveManager.getAchieveInfoByRank(this._data + 1);
            this.txt1.text = i.title,
            this.txt2.text = e.title;
            var n = [i.id, e.id];
            this.loadIcon(n).then(function() {
                t.imgIcon.texture = t.arrIcon[0],
                egret.setTimeout(function() {
                    t.ani1.visible = !0,
                    t.ani2.visible = !0,
                    t.ani1.play("jiantou", 0);
                    var i = t.ani2.play("jinshen", 1);
                    i.waitEvent().then(function() {
                        t.imgIcon.texture = t.arrIcon[1]
                    })
                },
                t, 200)
            })
        },
        i.prototype.loadIcon = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var i, e;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return i = t.shift(),
                        [4, RES.getResAsync(ClientConfig.getAchieveRankIcon(i))];
                    case 1:
                        return e = n.sent(),
                        this.arrIcon.push(e),
                        t.length > 0 ? [4, this.loadIcon(t)] : [3, 3];
                    case 2:
                        n.sent(),
                        n.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        i
    } (PopView);
    t.UpPop = i,
    __reflect(i.prototype, "militaryInfo.UpPop")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.skinName = "MilitaryInfoDetailViewSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        e.prototype.destroy = function() {
            this.hide(),
            ImageButtonUtil.removeAll(this);
            for (var t = 0; t < this.list.numChildren; t++) {
                var i = this.list.getChildAt(t);
                i.destroy()
            }
        },
        e.prototype.init = function() {
            this.list.itemRenderer = t.MilitaryItem,
            this.arrayCollection = new eui.ArrayCollection,
            this.list.dataProvider = this.arrayCollection
        },
        e.prototype.addEvent = function() {
            var i = this;
            ImageButtonUtil.add(this.btnUp,
            function() {
                AchieveManager.getAchieveInfoByRank(AchieveManager.getRankLv() + 1).achievepoint <= MainManager.actorInfo.totalAchieve ? SocketConnection.sendByQueue(CommandID.CONFERACHIEVEMENT, [],
                function(e) {
                    PopViewManager.getInstance().openView(new t.UpPop, null, AchieveManager.getRankLv());
                    var n = e.data;
                    MainManager.actorInfo.achieRank = n.readUnsignedInt(),
                    i.update()
                }) : BubblerManager.getInstance().showText("成就点数未达到晋升要求")
            },
            this)
        },
        e.prototype.update = function() {
            var t = this;
            this.txtMilitary.text = AchieveManager.getAchieveTitle();
            var i = AchieveManager.getCurAchieveInfo();
            if (this.imgMilitary.source = ClientConfig.getAchieveRankIcon(i.id), this.btnUp.visible = AchieveManager.getRankLv() < 13, AchieveManager.getRankLv() < 13) {
                var e = MainManager.actorInfo.totalAchieve + "/<font color= #FFFFFF>" + AchieveManager.getAchieveInfoByRank(AchieveManager.getRankLv() + 1).achievepoint + "</font>";
                this.txtProgress.textFlow = (new egret.HtmlTextParser).parse(e),
                this.progress.value = MainManager.actorInfo.totalAchieve / AchieveManager.getAchieveInfoByRank(AchieveManager.getRankLv() + 1).achievepoint * 100
            } else {
                var e = MainManager.actorInfo.totalAchieve + "/<font color= #FFFFFF>-------</font>";
                this.txtProgress.textFlow = (new egret.HtmlTextParser).parse(e),
                this.progress.value = 100
            }
            var n = ItemManager.GetMySuitIds(),
            r = AchieveManager.getAllAchieveInfo().filter(function(t) {
                return t.arrMySuit = n,
                1 !== t.hide
            });
            this.arrayCollection.replaceAll(r),
            egret.callLater(function() {
                t.list.scrollH = Math.min(t.list.contentWidth - t.list.width, 250 * i.id)
            },
            this)
        },
        e.prototype.hide = function() {
            var t = this.list.parent;
            null != t && t.stopAnimation()
        },
        e
    } (eui.Component);
    t.DetailView = i,
    __reflect(i.prototype, "militaryInfo.DetailView")
} (militaryInfo || (militaryInfo = {}));
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
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
},
militaryInfo; !
function(t) {
    var i = function(i) {
        function e() {
            var t = i.call(this) || this;
            return t.arr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
            t.skinName = "MilitaryInfoRewardViewSkin",
            t
        }
        return __extends(e, i),
        e.prototype.childrenCreated = function() {
            this.init(),
            this.addEvent()
        },
        e.prototype.destroy = function() {
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this);
            for (var t = 0; t < this.list.numChildren; t++) {
                var i = this.list.getChildAt(t);
                i.destroy()
            }
            this.aniBox && this.aniBox.parent && (ImageButtonUtil.remove(this.aniBox), this.aniBox.parent.removeChild(this.aniBox))
        },
        e.prototype.init = function() {
            var i = [{
                index: 1,
                id: 300157,
                num: 1,
                price: 10,
                isMark: !1
            },
            {
                index: 2,
                id: 300018,
                num: 1,
                price: 10,
                isMark: !1
            },
            {
                index: 3,
                id: 300004,
                num: 1,
                price: 20,
                isMark: !1
            },
            {
                index: 4,
                id: 1400352,
                num: 5e4,
                price: 40,
                isMark: !1
            },
            {
                index: 5,
                id: 400063,
                num: 1,
                price: 60,
                isMark: !1
            },
            {
                index: 6,
                id: 300405,
                num: 1,
                price: 140,
                isMark: !1
            },
            {
                index: 7,
                id: 41433,
                num: 1,
                price: 100,
                isMark: !0
            },
            {
                index: 8,
                id: 41434,
                num: 1,
                price: 100,
                isMark: !0
            }];
            this.list.itemRenderer = t.RewardItem,
            this.list.dataProvider = new eui.ArrayCollection(i)
        },
        e.prototype.addEvent = function() {
            var i = this;
            EventManager.addEventListener(t.EventConst.AFTER_BUY_REWARD, this.update, this),
            ImageButtonUtil.add(this.btnRoll,
            function() {
                return i.numItem < 60 ? void BubblerManager.getInstance().showText("荣誉令牌数量不足！") : void SocketConnection.sendByQueue(42380, [3, 0],
                function(e) {
                    var n = e.data,
                    r = n.readUnsignedInt();
                    i.update(),
                    AwardManager.pause(),
                    egret.lifecycle.stage.touchChildren = !1;
                    var a = !1,
                    o = {
                        i: 0
                    };
                    egret.Tween.get(o, {
                        onChange: function() {
                            var i = Math.floor(o.i) % 8;
                            EventManager.dispatchEventWith(t.EventConst.REWARD_ITEM_SELECT, !1, a ? 0 : i + 1)
                        }
                    }).to({
                        i: 79 + r
                    },
                    6e3, egret.Ease.quadInOut).wait(500).call(function() {
                        AwardManager.resume(),
                        egret.lifecycle.stage.touchChildren = !0,
                        a = !0
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnMilitary,
            function() {
                PopViewManager.getInstance().openView(new t.MilitaryRewardPop)
            },
            this)
        },
        e.prototype.update = function() {
            var t = this;
            this.txtMilitary.text = AchieveManager.getAchieveTitle();
            var i = AchieveManager.getCurAchieveInfo();
            this.imgMilitary.source = ClientConfig.getAchieveRankIcon(i.id),
            KTool.getMultiValue([101714],
            function(i) {
                var e = 10 * t.arr[Math.max(0, AchieveManager.getRankLv() - 4)];
                t.numItem = i[0],
                t.txtNum.text = i[0] + "/" + e,
                t.progress.value = i[0] / e * 100,
                KTool.getBitSet([1000410],
                function(i) {
                    t.aniBox && t.aniBox.parent && (ImageButtonUtil.remove(t.aniBox), t.aniBox.parent.removeChild(t.aniBox));
                    var e = 0 == i[0];
                    t.aniBox = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", e ? "canopen": "open"),
                    t.aniBox.touchEnabled = !0,
                    t.aniBox.scaleX = t.imgBox.width / t.aniBox.width,
                    t.aniBox.scaleY = t.imgBox.height / t.aniBox.height,
                    t.aniBox.x = t.imgBox.x,
                    t.aniBox.y = t.imgBox.y,
                    t.imgBox.visible = !1,
                    t.imgBox.parent.addChild(t.aniBox),
                    e ? (t.aniBox.gotoAndPlay(0, -1), ImageButtonUtil.add(t.aniBox,
                    function() {
                        if (t.progress.value >= t.progress.maximum) BubblerManager.getInstance().showText("荣誉令牌已达到上限，请使用后再领取！");
                        else {
                            var i = Math.max(0, AchieveManager.getRankLv() - 4);
                            SocketConnection.sendByQueue(42380, [4, i],
                            function() {
                                BubblerManager.getInstance().showText("获得" + t.arr[i] + "荣誉令牌"),
                                t.update()
                            })
                        }
                    },
                    t)) : t.aniBox.gotoAndStop(t.aniBox.totalFrames)
                })
            })
        },
        e
    } (eui.Component);
    t.RewardView = i,
    __reflect(i.prototype, "militaryInfo.RewardView")
} (militaryInfo || (militaryInfo = {}));
var __extends = this && this.__extends ||
function(t, i) {
    function e() {
        this.constructor = t
    }
    for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
    e.prototype = i.prototype,
    t.prototype = new e
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/HelpPopSkin.exml"] = window.HelpPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnClose"],
        this.height = 436,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Image3_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.source = "title_pop_2022_imge_735x431_bg_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 1,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_help_pop_imgtitle_png",
        t.x = 38,
        t.y = -5,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "title_pop_2022_btnclose_png",
        t.x = 710,
        t.y = 0,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.horizontalCenter = 0,
        t.source = "military_info_help_pop_img_png",
        t.y = 52,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoDetailViewSkin.exml"] = window.MilitaryInfoDetailViewSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["progress", "imgMilitary", "txtMilitary", "txtProgress", "btnUp", "list"],
        this.height = 510,
        this.width = 908,
        this.elementsContent = [this._Group1_i(), this._Scroller1_i()]
    }
    __extends(i, t);
    var e = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var e = i.prototype;
        return e.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "military_info_detail_view_imgprogress_png",
            t
        },
        i
    } (eui.Skin),
    n = i.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 3,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.progress_i(), this.imgMilitary_i(), this.txtMilitary_i(), this.txtProgress_i(), this.btnUp_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_detail_view_imgtopbg_png",
        t.visible = !0,
        t.width = 899,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_detail_view_imgprogressbg_png",
        t.x = 316,
        t.y = 69,
        t
    },
    n.progress_i = function() {
        var t = new eui.ProgressBar;
        return this.progress = t,
        t.height = 12,
        t.width = 392,
        t.x = 316,
        t.y = 69,
        t.skinName = e,
        t
    },
    n.imgMilitary_i = function() {
        var t = new eui.Image;
        return this.imgMilitary = t,
        t.height = 50,
        t.width = 50,
        t.x = 68,
        t.y = 30,
        t
    },
    n.txtMilitary_i = function() {
        var t = new eui.Label;
        return this.txtMilitary = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -214,
        t.size = 24,
        t.textColor = 16580432,
        t.y = 44,
        t
    },
    n.txtProgress_i = function() {
        var t = new eui.Label;
        return this.txtProgress = t,
        t.fontFamily = "MFShangHei",
        t.right = 215,
        t.size = 20,
        t.textColor = 16580432,
        t.y = 44,
        t
    },
    n.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.source = "military_info_detail_view_btnup_png",
        t.x = 758,
        t.y = 15,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 420,
        t.width = 898,
        t.x = 5,
        t.y = 120,
        t.viewport = this.list_i(),
        t
    },
    n.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.width = 908,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    n._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t.paddingLeft = 10,
        t.paddingRight = 10,
        t.paddingTop = 10,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoMilitaryItemSkin.exml"] = window.MilitaryInfoMilitaryItemSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgSelected", "imgSuit", "imgIcon", "btnGet", "imgEmpty", "imgHas", "txtName", "txtNum"],
        this.width = 230,
        this.elementsContent = [this.imgSelected_i(), this._Image1_i(), this.imgSuit_i(), this.imgIcon_i(), this.btnGet_i(), this.imgEmpty_i(), this.imgHas_i(), this.txtName_i(), this.txtNum_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.height = 419,
        t.scale9Grid = new egret.Rectangle(13, 13, 14, 14),
        t.source = "military_info_military_item_imgselected_png",
        t.width = 250,
        t.x = -10,
        t.y = -10,
        t
    },
    e._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_military_item_imgbg_png",
        t
    },
    e.imgSuit_i = function() {
        var t = new eui.Image;
        return this.imgSuit = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    e.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 50,
        t.width = 50,
        t.x = 20,
        t.y = 20,
        t
    },
    e.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.source = "military_info_military_item_imgget_png",
        t.x = 51,
        t.y = 300,
        t
    },
    e.imgEmpty_i = function() {
        var t = new eui.Image;
        return this.imgEmpty = t,
        t.horizontalCenter = 0,
        t.source = "military_info_help_pop_imgseer_png",
        t.verticalCenter = 0,
        t
    },
    e.imgHas_i = function() {
        var t = new eui.Image;
        return this.imgHas = t,
        t.source = "military_info_military_item_imghas_png",
        t.touchEnabled = !1,
        t.x = 23,
        t.y = 149,
        t
    },
    e.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "REEJI",
        t.size = 21.1495844061809,
        t.textColor = 16777215,
        t.x = 91,
        t.y = 22,
        t
    },
    e.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.3815118675215,
        t.text = "成就点数：",
        t.textColor = 4175861,
        t.x = 92,
        t.y = 50,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoRewardItemSkin.exml"] = window.MilitaryInfoRewardItemSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgItem", "txtPrice", "btnBuy", "txtNum", "txtName", "imgSelected"],
        this.height = 171,
        this.width = 190,
        this.elementsContent = [this._Image1_i(), this.imgItem_i(), this.btnBuy_i(), this.txtNum_i(), this.txtName_i(), this.imgSelected_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_item_imgbg_png",
        t.x = 5,
        t.y = 0,
        t
    },
    e.imgItem_i = function() {
        var t = new eui.Image;
        return this.imgItem = t,
        t.height = 60,
        t.width = 60,
        t.x = 66,
        t.y = 54,
        t
    },
    e.btnBuy_i = function() {
        var t = new eui.Group;
        return this.btnBuy = t,
        t.x = 0,
        t.y = 131,
        t.elementsContent = [this._Image2_i(), this._Group1_i()],
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_item_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 8,
        t.elementsContent = [this._Image3_i(), this.txtPrice_i()],
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_item_imgcoin_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.txtPrice_i = function() {
        var t = new eui.Label;
        return this.txtPrice = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.textColor = 10181146,
        t.x = 34,
        t.y = 6,
        t
    },
    e.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.right = 55,
        t.size = 16,
        t.textColor = 16777215,
        t.y = 108,
        t
    },
    e.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.textColor = 4187130,
        t.y = 7,
        t
    },
    e.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.source = "military_info_reward_item_imgselected_png",
        t.visible = !1,
        t.x = 5,
        t.y = 0,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoRewardPopItemSkin.exml"] = window.MilitaryInfoRewardPopItemSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgBG", "txtName", "imgIcon", "grp_item"],
        this.height = 172,
        this.width = 148,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.anchorOffsetX = 74,
        t.anchorOffsetY = 86,
        t.x = 74,
        t.y = 86,
        t.elementsContent = [this.imgBG_i(), this.txtName_i(), this.imgIcon_i()],
        t
    },
    e.imgBG_i = function() {
        var t = new eui.Image;
        return this.imgBG = t,
        t.height = 172,
        t.source = "military_info_reward_pop_item_imgbg1_png",
        t.width = 148,
        t.x = 0,
        t.y = 0,
        t
    },
    e.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.textAlign = "center",
        t.textColor = 14740735,
        t.y = 133,
        t
    },
    e.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.height = 78,
        t.width = 78,
        t.x = 35,
        t.y = 45,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoRewardPopSkin.exml"] = window.MilitaryInfoRewardPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnClose", "txtDaily", "txtMax", "txtDailyAdd", "txtMaxAdd", "groupAdd", "list"],
        this.height = 326,
        this.width = 514,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this._Group1_i(), this.list_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 34,
        t.x = 455,
        t.y = 10,
        t
    },
    e._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 171,
        t.y = 238,
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this.txtDaily_i(), this.txtMax_i(), this.groupAdd_i()],
        t
    },
    e._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0243318623434,
        t.text = "每日令牌：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 4,
        t
    },
    e._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18.0243318623434,
        t.text = "令牌上限：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 39,
        t
    },
    e.txtDaily_i = function() {
        var t = new eui.Label;
        return this.txtDaily = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 12834813,
        t.x = 99,
        t.y = 4,
        t
    },
    e.txtMax_i = function() {
        var t = new eui.Label;
        return this.txtMax = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 12834813,
        t.x = 99,
        t.y = 39,
        t
    },
    e.groupAdd_i = function() {
        var t = new eui.Group;
        return this.groupAdd = t,
        t.visible = !1,
        t.x = 138,
        t.y = 0,
        t.elementsContent = [this.txtDailyAdd_i(), this.txtMaxAdd_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    e.txtDailyAdd_i = function() {
        var t = new eui.Label;
        return this.txtDailyAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 6154074,
        t.x = 29,
        t.y = 4,
        t
    },
    e.txtMaxAdd_i = function() {
        var t = new eui.Label;
        return this.txtMaxAdd = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "100",
        t.textColor = 6154074,
        t.x = 29,
        t.y = 39,
        t
    },
    e._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_pop_imgup_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_pop_imgup_png",
        t.x = 0,
        t.y = 34,
        t
    },
    e.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 172,
        t.width = 400,
        t.x = 52,
        t.y = 50,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    e._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoRewardViewSkin.exml"] = window.MilitaryInfoRewardViewSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["btnRoll", "list", "imgMilitary", "btnMilitary", "progress", "imgBox", "txtMilitary", "txtNum"],
        this.height = 566,
        this.width = 902,
        this.elementsContent = [this._Image1_i(), this.btnRoll_i(), this.list_i(), this._Group1_i(), this._Label2_i()]
    }
    __extends(i, t);
    var e = function(t) {
        function i() {
            t.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(i, t);
        var e = i.prototype;
        return e.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.source = "military_info_detail_view_imgprogress_png",
            t.width = 478,
            t
        },
        i
    } (eui.Skin),
    n = i.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_view_imgbg_png",
        t.width = 902,
        t.x = 0,
        t.y = 112,
        t
    },
    n.btnRoll_i = function() {
        var t = new eui.Image;
        return this.btnRoll = t,
        t.source = "military_info_reward_view_btnroll_png",
        t.x = 387,
        t.y = 498,
        t
    },
    n.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.horizontalCenter = -3,
        t.y = 126,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 25,
        t.requestedRowCount = 2,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnMilitary_i(), this._Image4_i(), this.progress_i(), this.imgBox_i(), this._Label1_i(), this.txtMilitary_i(), this.txtNum_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_view_imgtopbg_png",
        t.width = 893,
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnMilitary_i = function() {
        var t = new eui.Group;
        return this.btnMilitary = t,
        t.x = 12,
        t.y = 6,
        t.elementsContent = [this._Image3_i(), this.imgMilitary_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_reward_view_imgmagnifier_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.imgMilitary_i = function() {
        var t = new eui.Image;
        return this.imgMilitary = t,
        t.height = 50,
        t.width = 50,
        t.x = 59,
        t.y = 23,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_detail_view_imgprogressbg_png",
        t.width = 478,
        t.x = 316,
        t.y = 69,
        t
    },
    n.progress_i = function() {
        var t = new eui.ProgressBar;
        return this.progress = t,
        t.height = 12,
        t.width = 478,
        t.x = 316,
        t.y = 69,
        t.skinName = e,
        t
    },
    n.imgBox_i = function() {
        var t = new eui.Image;
        return this.imgBox = t,
        t.source = "military_info_reward_view_imgbox_png",
        t.x = 814,
        t.y = 31,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "每日签到可获得荣誉令牌",
        t.textColor = 8757203,
        t.x = 594,
        t.y = 45,
        t
    },
    n.txtMilitary_i = function() {
        var t = new eui.Label;
        return this.txtMilitary = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -213,
        t.size = 24,
        t.textColor = 16580432,
        t.y = 44,
        t
    },
    n.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.textColor = 5752317,
        t.x = 344,
        t.y = 44,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "均等概率获得各物品",
        t.textColor = 16777215,
        t.x = 382,
        t.y = 550,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoSkin.exml"] = window.MilitaryInfoSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["group"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.group_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t
    },
    e.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.horizontalCenter = 80,
        t.y = 52,
        t
    },
    i
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryInfoUpPopSkin.exml"] = window.MilitaryInfoUpPopSkin = function(t) {
    function i() {
        t.call(this),
        this.skinParts = ["imgIcon", "txt1", "txt2", "groupAni"],
        this.height = 320,
        this.width = 1170,
        this.elementsContent = [this._Image1_i(), this.imgIcon_i(), this.txt1_i(), this.txt2_i(), this.groupAni_i()]
    }
    __extends(i, t);
    var e = i.prototype;
    return e._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "military_info_up_pop_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e.imgIcon_i = function() {
        var t = new eui.Image;
        return this.imgIcon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -16,
        t
    },
    e.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "REEJI",
        t.right = 631,
        t.size = 30,
        t.textColor = 8757203,
        t.y = 219,
        t
    },
    e.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.textColor = 8757203,
        t.x = 640,
        t.y = 219,
        t
    },
    e.groupAni_i = function() {
        var t = new eui.Group;
        return this.groupAni = t,
        t.horizontalCenter = 0,
        t.verticalCenter = -16,
        t
    },
    i
} (eui.Skin);