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
militaryBook; !
function(t) {
    var e = function(e) {
        function i(i) {
            var n = e.call(this) || this;
            return n.skinName = t.MilitaryPopSkin,
            i && (n._currankLv = i),
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            this.group_item.touchEnabled = !0,
            this._addEvents(),
            this._createPage(),
            this._updateView(),
            this._currankLv && (this._moveItem("right", Math.floor(this._currankLv.rankLv / 4)), this.list_pageItem.selectedIndex = Math.floor(this._currankLv.rankLv / 4))
        },
        i.prototype._createPage = function() {
            var e = AchieveManager.getAllAchieveInfo();
            e = e.filter(function(t) {
                return 1 !== t.hide
            });
            var i = e.length,
            n = Math.ceil(i / 4);
            this._totalPage = n,
            this._curtPage = 1;
            for (var o = new eui.ArrayCollection,
            r = 0; n > r; r++) o.addItem(r + 1);
            this.list_pageItem.itemRenderer = t.MilitaryPageItem,
            this.list_pageItem.dataProvider = o,
            this.list_item.itemRenderer = t.MilitaryItemNew,
            this.list_item.dataProvider = new eui.ArrayCollection(e),
            this.list_pageItem.selectedIndex = this._curtPage - 1
        },
        i.prototype.onSelectPage = function() {
            var t = Math.abs(this.list_pageItem.selectedIndex + 1 - this._curtPage);
            this.list_pageItem.selectedIndex + 1 > this._curtPage ? this._moveItem("right", t) : this.list_pageItem.selectedIndex + 1 < this._curtPage && this._moveItem("left", t)
        },
        i.prototype._addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButton, this),
            ImageButtonUtil.add(this.btnHelp, this._onTouchTapButton, this),
            this.list_pageItem.addEventListener(egret.Event.CHANGE, this.onSelectPage, this),
            this.group_item.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onGroupItemTouchBegin, this),
            EventManager.addEventListener("event_military_updata", this._onMilitaryUpdate, this),
            EventManager.addEventListener("event_military_get_reward", this._onMilitaryUpdate, this)
        },
        i.prototype._removeAllEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.list_pageItem.removeEventListener(egret.Event.CHANGE, this.onSelectPage, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onGroupItemTouchBegin, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onGroupItemTouchMove, this),
            EventManager.removeEventListener("event_military_updata", this._onMilitaryUpdate, this),
            EventManager.removeEventListener("event_military_get_reward", this._onMilitaryUpdate, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_END, this._onEnd, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this),
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this)
        },
        i.prototype._onGroupItemTouchBegin = function(t) {
            this._startX = t.stageX,
            this.group_item.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._onGroupItemTouchMove, this),
            this.group_item.addEventListener(egret.TouchEvent.TOUCH_END, this._onEnd, this),
            this.group_item.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this)
        },
        i.prototype._onEnd = function(t) {
            void 0 === t && (t = null),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onGroupItemTouchMove, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_END, this._onEnd, this),
            this.group_item.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this),
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._onEnd, this)
        },
        i.prototype._onMilitaryUpdate = function(t) {
            this.list_item.dataProvider.refresh()
        },
        i.prototype._onGroupItemTouchMove = function(t) {
            var e = t.stageX,
            i = e - this._startX;
            Math.abs(i) >= 20 && (this._onEnd(), i > 0 ? this._moveItem("left") : this._moveItem("right"))
        },
        i.prototype._moveItem = function(t, e) {
            var i, n = this;
            i = e ? e: 1;
            var o, r = this.group_item.scrollH;
            if ("right" === t) {
                if (this._curtPage >= this._totalPage) return;
                this._curtPage += i,
                o = r + 964 * i
            } else {
                if (this._curtPage <= 1) return;
                this._curtPage -= i,
                o = r - 964 * i
            }
            this.group_item.touchEnabled = !1,
            this.group_item.touchChildren = !1,
            egret.Tween.get(this.group_item).to({
                scrollH: o
            },
            500, egret.ScrollEase.quintOut).call(function() {
                e || n._updateSelectedPage(),
                n.group_item.touchEnabled = !0,
                n.group_item.touchChildren = !0
            })
        },
        i.prototype._updateSelectedPage = function() {
            this.list_pageItem.selectedIndex = this._curtPage - 1
        },
        i.prototype._updateView = function() {},
        i.prototype._onTouchTapButton = function(e) {
            switch (e.currentTarget) {
            case this.btnClose:
                this.onClose();
                break;
            case this.btnHelp:
                PopViewManager.getInstance().openView(new t.MilitaryBookHelp)
            }
        },
        i.prototype.destroy = function() {
            this.list_item.dataProvider.removeAll(),
            this.list_item.removeChildren(),
            this._removeAllEvents(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.MilitaryBook = e,
    __reflect(e.prototype, "militaryBook.MilitaryBook")
} (militaryBook || (militaryBook = {}));
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
militaryBook; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MilitaryBookhelpSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.btnClose, this._onTouchTapButton, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t)
        },
        i.prototype._parseData = function() {},
        i.prototype._upDateView = function() {},
        i.prototype._onTouchTapButton = function(t) {
            switch (t.currentTarget) {
            case this.btnClose:
                this.hide()
            }
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.MilitaryBookHelp = e,
    __reflect(e.prototype, "militaryBook.MilitaryBookHelp")
} (militaryBook || (militaryBook = {}));
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
    return new(i || (i = Promise))(function(o, r) {
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function _(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (o = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (a = _.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < a[1]) {
                    _.label = a[1],
                    a = i;
                    break
                }
                if (a && _.label < a[2]) {
                    _.label = a[2],
                    _.ops.push(i);
                    break
                }
                a[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
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
    var o, r, a, s, _ = {
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
militaryBook; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i._iconRes = [],
            i.skinName = t.MilitaryRewardSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this);
            var t = DragonbonesUtil.createAnimate("junxian_ske_json", "junxian_tex_json", "junxian_tex_png", "armatureName");
            this.addChild(t),
            this._ani = t,
            t.visible = !1,
            t.x = 473,
            t.y = 191,
            this._setGroup(),
            this.group_close.touchEnabled = !1
        },
        i.prototype._setGroup = function() {
            this.group_close.width = egret.lifecycle.stage.stageWidth,
            this.group_close.height = egret.lifecycle.stage.stageHeight;
            var t = this.globalToLocal(0, 0);
            this.group_close.x = t.x,
            this.group_close.y = t.y
        },
        i.prototype.initEvents = function() {
            this.group_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapGroupClose, this)
        },
        i.prototype.removeEvents = function() {
            this.group_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapGroupClose, this)
        },
        i.prototype._onTouchTapGroupClose = function(t) {
            this.hide()
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t)
        },
        i.prototype._parseData = function() {
            var t = this,
            e = this._data,
            i = AchieveManager.getAchieveInfoByRank(e),
            n = AchieveManager.getAchieveInfoByRank(e + 1);
            this.txt_curt.text = i.title,
            this.txt_next.text = n.title;
            var o = [i.id, n.id];
            this._onLoaderIcon(o).then(function() {
                t.icon.texture = t._iconRes[0],
                egret.setTimeout(function() {
                    egret.setTimeout(function() {
                        t.icon.texture = t._iconRes[1]
                    },
                    t, 200),
                    DragonbonesUtil.play(t._ani, "animation", 1).then(function() {
                        t.group_close.touchEnabled = !0
                    }),
                    t._ani.visible = !0
                },
                t, 200)
            })
        },
        i.prototype._onLoaderIcon = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return e = t.shift(),
                        [4, RES.getResAsync(ClientConfig.getAchieveRankIcon(e))];
                    case 1:
                        return i = n.sent(),
                        i.id = e,
                        this._iconRes.push(i),
                        0 !== t.length ? [3, 2] : [2, Promise.resolve()];
                    case 2:
                        return [4, this._onLoaderIcon(t)];
                    case 3:
                        n.sent(),
                        n.label = 4;
                    case 4:
                        return [2]
                    }
                })
            })
        },
        i.prototype._upDateView = function() {},
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.MilitaryReward = e,
    __reflect(e.prototype, "militaryBook.MilitaryReward")
} (militaryBook || (militaryBook = {}));
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
militaryBook; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MilitaryItemNewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._addEvents()
        },
        i.prototype._addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Destroy, this),
            ImageButtonUtil.add(this.btnReward, this._onTouchTapButton, this),
            ImageButtonUtil.add(this.btnUp, this._onTouchTapButton, this),
            ImageButtonUtil.add(this.hero_icon, this._onTouchTapButton, this, !1, !1),
            this.hero_icon.addEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this)
        },
        i.prototype._removeAllEvents = function() {
            this.hero_icon.removeEventListener(egret.Event.COMPLETE, this._onSetTextureComplete, this),
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._getAward, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype._onSetTextureComplete = function(t) {
            var e = t.currentTarget;
            DisplayUtil.keepEqualDis(e, 196, 150, !0),
            e.anchorOffsetX = e.width / 2,
            e.anchorOffsetY = e.height,
            e.x = 98,
            e.y = 150
        },
        i.prototype._onTouchTapButton = function(e) {
            var i = this;
            switch (e.currentTarget) {
            case this.btnReward:
                var n = {
                    5 : 1,
                    6 : 2,
                    7 : 3,
                    8 : 4,
                    9 : 5,
                    10 : 6,
                    11 : 7,
                    12 : 8
                },
                o = this.data;
                EventManager.addEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._getAward, this),
                SocketConnection.sendWithPromise(42380, [1, n[o.id]]);
                break;
            case this.btnUp:
                var o = this.data;
                if (~~o.achievepoint > MainManager.actorInfo.totalAchieve) return void Alarm.show("当前成就点不足，请继续加油");
                var r = AchieveManager.getRankLv();
                SocketConnection.sendWithPromise(CommandID.CONFERACHIEVEMENT, []).then(function(e) {
                    var n = e.data;
                    MainManager.actorInfo.achieRank = n.readUnsignedInt(),
                    EventManager.dispatchEventWith("event_military_updata"),
                    EventManager.dispatchEventWith("AchieveRedPoint");
                    var o = PopViewManager.createDefaultStyleObject();
                    o.caller = i,
                    o.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(new t.MilitaryReward, o, r)
                });
                break;
            case this.hero_icon:
                var o = this.data,
                a = {
                    id: ~~o.award
                };
                tipsPop.TipsPop.openSuitPop(a)
            }
        },
        i.prototype._getAward = function() {
            EventManager.removeEventListener(AwardEvent.CLOSE_AWARD_DIALOG, this._getAward, this),
            EventManager.dispatchEventWith("event_military_get_reward")
        },
        i.prototype.dataChanged = function() {
            if (this.group_suitInfo.visible = this.no_suitIcon.visible = this.group_info.visible = !1, this.data) {
                var t = this.data;
                this.txt_military.text = t.title,
                this.militaryIcon.source = ClientConfig.getAchieveRankIcon(t.id),
                this.txt_needPoint.text = "需要成就" + t.achievepoint;
                var e = AchieveManager.getRankLv();
                this.btnUp.visible = e + 1 === t.id;
                var i = ~~t.award;
                if (this.btnReward.visible = this.flag_ylq.visible = this.flag_ylq.visible = !1, this.redPoint_0.visible = ~~t.achievepoint <= MainManager.actorInfo.totalAchieve && this.btnUp.visible, i > 0) {
                    if (this.hero_icon.source = ClientConfig.getSuitBodyPng(i), this.suit_name.text = SuitXMLInfo.getName(i), this.group_suitInfo.visible = !0, e >= t.id) {
                        for (var n = !1,
                        o = ItemManager.GetMySuitIds(), r = 0; r < o.length; r++) if (o[r] === i) {
                            n = !0;
                            break
                        }
                        this.btnReward.visible = !n,
                        this.flag_ylq.visible = n
                    }
                } else this.flag_ylq.visible = e >= t.id && t.id >= 5,
                this.no_suitIcon.visible = !0;
                this.group_info.visible = !0
            }
        },
        i.prototype.Destroy = function() {
            this._removeAllEvents()
        },
        i
    } (eui.ItemRenderer);
    t.MilitaryItemNew = e,
    __reflect(e.prototype, "militaryBook.MilitaryItemNew")
} (militaryBook || (militaryBook = {}));
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
militaryBook; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.MilitaryPageItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.touchEnabled = this.touchChildren = !0
        },
        i.prototype._addEvents = function() {},
        i.prototype._removeAllEvents = function() {},
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superGetter(i, this, "selected")
            },
            set: function(t) {
                this.currentState = t ? "down": "up",
                egret.superSetter(i, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this.txt_down.text = this.txt_up.text = this.data + ""
        },
        i.prototype.Destroy = function() {},
        i
    } (eui.ItemRenderer);
    t.MilitaryPageItem = e,
    __reflect(e.prototype, "militaryBook.MilitaryPageItem")
} (militaryBook || (militaryBook = {})),
window.militaryBook = window.militaryBook || {};
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
generateEUI.paths["resource/eui_skins/item/MilitaryItemNewSkin.exml"] = window.militaryBook.MilitaryItemNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "hero_icon", "suit_name", "group_suitInfo", "no_suitIcon", "txt_needPoint", "txt_military", "militaryIcon", "btnReward", "btnUp", "redPoint_0", "flag_ylq", "group_info"],
        this.height = 392,
        this.width = 238,
        this.elementsContent = [this.bg_i(), this.group_info_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 392,
        t.source = "aan_militaryitem_bg_png",
        t.width = 238,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_info_i = function() {
        var t = new eui.Group;
        return this.group_info = t,
        t.x = 7,
        t.y = 5,
        t.elementsContent = [this.group_suitInfo_i(), this.no_suitIcon_i(), this._Image1_i(), this._Image2_i(), this.txt_needPoint_i(), this.txt_military_i(), this.militaryIcon_i(), this.btnReward_i(), this.btnUp_i(), this.redPoint_0_i(), this.flag_ylq_i()],
        t
    },
    i.group_suitInfo_i = function() {
        var t = new eui.Group;
        return this.group_suitInfo = t,
        t.horizontalCenter = -2,
        t.verticalCenter = 16.5,
        t.visible = !0,
        t.elementsContent = [this.hero_icon_i(), this.suit_name_i()],
        t
    },
    i.hero_icon_i = function() {
        var t = new eui.Image;
        return this.hero_icon = t,
        t.source = "",
        t.visible = !0,
        t.x = 0,
        t.y = 10,
        t
    },
    i.suit_name_i = function() {
        var t = new eui.Label;
        return this.suit_name = t,
        t.fontFamily = "MFShangHei",
        t.size = 21,
        t.text = "上士",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 178,
        t.x = 16,
        t.y = 200,
        t
    },
    i.no_suitIcon_i = function() {
        var t = new eui.Image;
        return this.no_suitIcon = t,
        t.height = 159,
        t.source = "militaryBook_no_suitIcon_png",
        t.visible = !0,
        t.width = 100,
        t.x = 65,
        t.y = 120,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "aan_militaryitem_juxing_527_png",
        t.visible = !0,
        t.width = 227,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 62,
        t.source = "aan_militaryitem_zu_1_png",
        t.width = 62,
        t.x = 7,
        t.y = 2,
        t
    },
    i.txt_needPoint_i = function() {
        var t = new eui.Label;
        return this.txt_needPoint = t,
        t.fontFamily = "MFShangHei",
        t.size = 15.3815118675215,
        t.text = "成就点数：9999",
        t.textColor = 4175861,
        t.x = 82,
        t.y = 42,
        t
    },
    i.txt_military_i = function() {
        var t = new eui.Label;
        return this.txt_military = t,
        t.fontFamily = "MFShangHei",
        t.size = 21.1495844061809,
        t.text = "上士",
        t.textColor = 16777215,
        t.x = 82,
        t.y = 13,
        t
    },
    i.militaryIcon_i = function() {
        var t = new eui.Image;
        return this.militaryIcon = t,
        t.height = 43,
        t.source = "aan_militaryitem_tuceng_225_png",
        t.visible = !0,
        t.width = 48,
        t.x = 14,
        t.y = 11,
        t
    },
    i.btnReward_i = function() {
        var t = new eui.Image;
        return this.btnReward = t,
        t.height = 44,
        t.source = "aan_militaryitem_btnlqjl_png",
        t.visible = !0,
        t.width = 129,
        t.x = 49,
        t.y = 330,
        t
    },
    i.btnUp_i = function() {
        var t = new eui.Image;
        return this.btnUp = t,
        t.height = 44,
        t.source = "aan_militaryitem_btnlvup_png",
        t.width = 129,
        t.x = 49,
        t.y = 330,
        t
    },
    i.redPoint_0_i = function() {
        var t = new eui.Image;
        return this.redPoint_0 = t,
        t.source = "aan_act_button_redPoint_png",
        t.touchEnabled = !1,
        t.x = 165,
        t.y = 325,
        t
    },
    i.flag_ylq_i = function() {
        var t = new eui.Image;
        return this.flag_ylq = t,
        t.source = "aan_militaryitem_hasGet_png",
        t.visible = !0,
        t.x = 25,
        t.y = 150,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/MilitaryPageItemSkin.exml"] = window.militaryBook.MilitaryPageItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_up", "upBg", "group_up", "downBg", "txt_down", "group_down"],
        this.currentState = "up",
        this.height = 42,
        this.width = 42,
        this.elementsContent = [this.group_up_i(), this.group_down_i()],
        this.states = [new eui.State("down", [new eui.SetProperty("txt_down", "x", 16), new eui.SetProperty("txt_down", "y", 12), new eui.SetProperty("group_down", "visible", !0)]), new eui.State("up", [new eui.SetProperty("group_up", "visible", !0)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_up_i = function() {
        var t = new eui.Group;
        return this.group_up = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.txt_up_i(), this.upBg_i()],
        t
    },
    i.txt_up_i = function() {
        var t = new eui.Label;
        return this.txt_up = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -.5,
        t.size = 16,
        t.text = "4",
        t.textColor = 6522287,
        t.y = 12,
        t
    },
    i.upBg_i = function() {
        var t = new eui.Image;
        return this.upBg = t,
        t.height = 42,
        t.source = "militaryBook_upBg_png",
        t.width = 42,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_down_i = function() {
        var t = new eui.Group;
        return this.group_down = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.downBg_i(), this.txt_down_i()],
        t
    },
    i.downBg_i = function() {
        var t = new eui.Image;
        return this.downBg = t,
        t.source = "militaryBook_downBg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_down_i = function() {
        var t = new eui.Label;
        return this.txt_down = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -.5,
        t.size = 16,
        t.text = "4",
        t.textColor = 16777215,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryBookhelpSkin.exml"] = window.militaryBook.MilitaryBookhelpSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "texture_help"],
        this.height = 436,
        this.width = 754,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i(), this.texture_help_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 431,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 754,
        t.x = 0,
        t.y = 0,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "military_bookHelp_title_png",
        t.x = 38,
        t.y = -5,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "military_book_btnClose_png",
        t.x = 710,
        t.y = 0,
        t
    },
    i.texture_help_i = function() {
        var t = new eui.Image;
        return this.texture_help = t,
        t.height = 353,
        t.source = "military_bookHelp_texture_help_png",
        t.width = 706,
        t.x = 25,
        t.y = 60,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MilitaryRewardSkin.exml"] = window.militaryBook.MilitaryRewardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "next", "icon", "txt_curt", "txt_next", "group_close"],
        this.height = 346,
        this.width = 967,
        this.elementsContent = [this.bg_i(), this.next_i(), this.icon_i(), this._Label1_i(), this.txt_curt_i(), this.txt_next_i(), this.group_close_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 346,
        t.source = "military_reward_bg_png",
        t.width = 967,
        t.x = 0,
        t.y = 0,
        t
    },
    i.next_i = function() {
        var t = new eui.Image;
        return this.next = t,
        t.height = 22,
        t.source = "military_reward_next_png",
        t.width = 30,
        t.x = 525,
        t.y = 234,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 110,
        t.width = 110,
        t.x = 431,
        t.y = 108,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "军衔提升：",
        t.textColor = 1978197,
        t.x = 344,
        t.y = 233,
        t
    },
    i.txt_curt_i = function() {
        var t = new eui.Label;
        return this.txt_curt = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "中士",
        t.textColor = 1978197,
        t.x = 466,
        t.y = 233,
        t
    },
    i.txt_next_i = function() {
        var t = new eui.Label;
        return this.txt_next = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 24,
        t.text = "上士",
        t.textColor = 1978197,
        t.x = 566,
        t.y = 233,
        t
    },
    i.group_close_i = function() {
        var t = new eui.Group;
        return this.group_close = t,
        t.x = 56,
        t.y = 53,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/new/MilitaryPopSkin.exml"] = window.militaryBook.MilitaryPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "btnClose", "XL", "btnHelp", "list_pageItem", "dian_down", "dian_up", "dian_down_2", "dian_down_3", "list_item", "group_item"],
        this.height = 551,
        this.width = 1e3,
        this.elementsContent = [this.XL_i(), this.btnHelp_i(), this.list_pageItem_i(), this._Group1_i(), this.group_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.XL_i = function() {
        var t = new eui.Group;
        return this.XL = t,
        t.visible = !0,
        t.x = -2.851,
        t.y = -1.425,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.title_i(), this.btnClose_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 547,
        t.source = "common_s9_pop_bg4_png",
        t.visible = !0,
        t.width = 999,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_big_png",
        t.visible = !0,
        t.width = 999,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "aan_military_pop_fcsc_png",
        t.x = 0,
        t.y = 392,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "aan_military_pop_jxjs_png",
        t.visible = !0,
        t.x = 31,
        t.y = -5,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "aan_military_pop_close1_png",
        t.visible = !0,
        t.x = 957,
        t.y = 0,
        t
    },
    i.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.source = "aan_military_pop_btnhelp_png",
        t.x = 160,
        t.y = 2,
        t
    },
    i.list_pageItem_i = function() {
        var t = new eui.List;
        return this.list_pageItem = t,
        t.height = 30,
        t.horizontalCenter = 33.5,
        t.itemRendererSkinName = militaryBook.MilitaryPageItemSkin,
        t.visible = !0,
        t.width = 350,
        t.y = 480,
        t.layout = this._HorizontalLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 58,
        t
    },
    i._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
        t
    },
    i._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 389,
        t.y = 496,
        t.elementsContent = [this.dian_down_i(), this.dian_up_i(), this.dian_down_2_i(), this.dian_down_3_i()],
        t
    },
    i.dian_down_i = function() {
        var t = new eui.Image;
        return this.dian_down = t,
        t.source = "aan_military_pop_dian_down_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.dian_up_i = function() {
        var t = new eui.Image;
        return this.dian_up = t,
        t.source = "aan_military_pop_dian_up_png",
        t.x = 70,
        t.y = 0,
        t
    },
    i.dian_down_2_i = function() {
        var t = new eui.Image;
        return this.dian_down_2 = t,
        t.source = "aan_military_pop_dian_down_png",
        t.x = 140,
        t.y = 0,
        t
    },
    i.dian_down_3_i = function() {
        var t = new eui.Image;
        return this.dian_down_3 = t,
        t.source = "aan_military_pop_dian_down_png",
        t.x = 210,
        t.y = 0,
        t
    },
    i.group_item_i = function() {
        var t = new eui.Group;
        return this.group_item = t,
        t.height = 392,
        t.scrollEnabled = !0,
        t.visible = !0,
        t.width = 960,
        t.x = 17,
        t.y = 68,
        t.elementsContent = [this.list_item_i()],
        t
    },
    i.list_item_i = function() {
        var t = new eui.List;
        return this.list_item = t,
        t.x = 0,
        t.layout = this._HorizontalLayout2_i(),
        t.dataProvider = this._ArrayCollection2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 3,
        t
    },
    i._ArrayCollection2_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [],
        t
    },
    e
} (eui.Skin);