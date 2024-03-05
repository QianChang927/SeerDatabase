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
        function a(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            o = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, a, s, _ = {
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
roomVisitPop; !
function(t) {
    t.tabType = 1;
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.friendDataList = [],
            t.rankDataList = [],
            t.skinName = RoomVisitPopSkin,
            t
        }
        return __extends(n, e),
        n.prototype.createChildren = function() {
            e.prototype.createChildren.call(this),
            this.tabGroup = this.tab_1.group,
            this.tabGroup.selectedValue = 1,
            this.tab_1.selected = !0,
            this._list.itemRenderer = t.RoomVisitPopItem,
            this.tabGroup.addEventListener(egret.Event.CHANGE, this.tabChange, this),
            ImageButtonUtil.add(this.close, this.onClose, this),
            this.none.visible = !1,
            this.tabChange()
        },
        n.prototype.tabChange = function() {
            this.updateView()
        },
        n.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, n, r, o, a, s, _ = this;
                return __generator(this,
                function(u) {
                    switch (u.label) {
                    case 0:
                        return this._scro.stopAnimation(),
                        this._scro.viewport.scrollV = 0,
                        e = ~~this.tabGroup.selectedValue || 1,
                        t.tabType = e,
                        this.currentState = 1 == e ? "friend": "rank",
                        1 != e ? [3, 2] : this.friendDataList.length > 0 ? (this.none.visible = !1, this._list.dataProvider = new eui.ArrayCollection(this.friendDataList), [2]) : [4, FriendManager.getFriendList()];
                    case 1:
                        for (n = u.sent(), r = [], o = [], a = 0; a < n.length; a++) s = n[a],
                        s.id > 0 && (r.push(s.id), o.push(s.nickName));
                        return r.length <= 0 ? (this.none.visible = !0, this._list.dataProvider = new eui.ArrayCollection(this.friendDataList)) : (this.none.visible = !1, KTool.getRankInfos(165, 1, r,
                        function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = new i;
                                n.userId = r[e],
                                n.rank = t[e].rank,
                                n.score = t[e].score,
                                n.nick = o[e],
                                _.friendDataList.push(n)
                            }
                            _._list.dataProvider = new eui.ArrayCollection(_.friendDataList)
                        })),
                        [3, 3];
                    case 2:
                        this.rankDataList = [],
                        KTool.getRangeRankList(165, 1, 0, 9,
                        function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = new i;
                                n.userId = t[e].userid,
                                n.rank = e + 1,
                                n.score = t[e].score,
                                n.nick = t[e].nick,
                                _.rankDataList.push(n)
                            }
                            _._list.dataProvider = new eui.ArrayCollection(_.rankDataList)
                        }),
                        u.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.tabGroup.removeEventListener(egret.Event.CHANGE, this.tabChange, this)
        },
        n
    } (BaseModule);
    t.RoomVisitPop = e,
    __reflect(e.prototype, "roomVisitPop.RoomVisitPop");
    var i = function() {
        function t() {}
        return t
    } ();
    t.RoomVisitData = i,
    __reflect(i.prototype, "roomVisitPop.RoomVisitData")
} (roomVisitPop || (roomVisitPop = {}));
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
roomVisitPop; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.info = null,
            t.userInfo = null,
            t.skinName = RoomVisitPopItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.ima_visit,
            function() {
                ModuleManager.CloseAll(),
                RoomManager.changeRoom(t.info.userId)
            },
            this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            (this.data || 0 == this.data) && (this.info = this.data, this.updateView())
        },
        i.prototype.updateView = function() {
            var e = this;
            this.currentState = "type_" + t.tabType,
            this["score_" + t.tabType].text = "" + this.info.score,
            this["tx_name_" + t.tabType].text = this.info.nick,
            2 == t.tabType && (this.rank_2.text = "" + this.info.rank),
            this.cacheAsBitmap = !0,
            UserInfoManager.getInfo(this.info.userId,
            function(i) {
                e.userInfo = i,
                e.avatar.setData({
                    headId: i.head_id,
                    headFrameId: i.head_frame_id
                }),
                e["tx_name_" + t.tabType].text = i.nick,
                e.cacheAsBitmap = !0
            },
            this)
        },
        i.prototype.onClickHead = function(t) {
            if (this.userInfo) {
                var e = this.userInfo;
                ModuleManager.showModule("personalInformation", ["personalInformation"], e.userID, "PersonalinformationIdCardPopView", AppDoStyle.NULL)
            }
        },
        i.prototype.destroy = function() {
            this.info = null,
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    t.RoomVisitPopItem = e,
    __reflect(e.prototype, "roomVisitPop.RoomVisitPopItem")
} (roomVisitPop || (roomVisitPop = {}));
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
generateEUI.paths["resource/eui_skins/RoomVisitPop.exml"] = window.RoomVisitPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scro", "tip", "tab_1", "tab_2", "close", "none"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._scro_i(), this.tip_i(), this.tab_1_i(), this.tab_2_i(), this.close_i()],
        this.none_i(),
        this.states = [new eui.State("friend", [new eui.AddItems("none", "", 1, ""), new eui.SetProperty("tip", "visible", !1)]), new eui.State("rank", [new eui.SetProperty("_scro", "height", 300.187)])]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_visit_pop_tab_1_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_visit_pop_tab_1_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "room_visit_pop_tab_2_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "room_visit_pop_tab_2_up_png",
            t.percentWidth = 100,
            t
        },
        i.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_visit_pop_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r._scro_i = function() {
        var t = new eui.Scroller;
        return this._scro = t,
        t.height = 328.501,
        t.width = 706,
        t.x = 23,
        t.y = 92,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    r._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    r.tip_i = function() {
        var t = new eui.Label;
        return this.tip = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "显示人气排行榜前10位玩家",
        t.textColor = 12111615,
        t.x = 278,
        t.y = 398,
        t
    },
    r.tab_1_i = function() {
        var t = new eui.RadioButton;
        return this.tab_1 = t,
        t.groupName = "visitGroup",
        t.value = "1",
        t.x = 23,
        t.y = 40,
        t.skinName = i,
        t
    },
    r.tab_2_i = function() {
        var t = new eui.RadioButton;
        return this.tab_2 = t,
        t.groupName = "visitGroup",
        t.value = "2",
        t.x = 120,
        t.y = 40,
        t.skinName = n,
        t
    },
    r.close_i = function() {
        var t = new eui.Rect;
        return this.close = t,
        t.fillAlpha = 0,
        t.height = 31.367,
        t.width = 68.656,
        t.x = 682.774,
        t.y = 1.67,
        t
    },
    r.none_i = function() {
        var t = new eui.Image;
        return this.none = t,
        t.scaleX = .5,
        t.scaleY = .5,
        t.source = "room_visit_pop_no_friend_png",
        t.x = 307,
        t.y = 130,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/RoomVisitPopItemSkin.exml"] = window.RoomVisitPopItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["score_1", "tx_name_1", "friend", "score_2", "tx_name_2", "rank_2", "rank", "avatar", "ima_visit"],
        this.height = 76,
        this.width = 706,
        this.elementsContent = [this.friend_i(), this.rank_i(), this._Group1_i(), this.ima_visit_i()],
        this.states = [new eui.State("type_1", [new eui.SetProperty("rank", "visible", !1), new eui.SetProperty("_Group1", "x", 10)]), new eui.State("type_2", [new eui.SetProperty("friend", "visible", !1), new eui.SetProperty("_Group1", "x", 66)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.friend_i = function() {
        var t = new eui.Group;
        return this.friend = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.score_1_i(), this.tx_name_1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "room_visit_pop_item_bg_png",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i.score_1_i = function() {
        var t = new eui.Label;
        return this.score_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "1234567",
        t.textColor = 4187130,
        t.verticalCenter = 0,
        t.x = 435,
        t
    },
    i.tx_name_1_i = function() {
        var t = new eui.Label;
        return this.tx_name_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "玩家名字玩家六",
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t.x = 93,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "room_visit_pop_bu_png",
        t.verticalCenter = 0,
        t.x = 354,
        t
    },
    i.rank_i = function() {
        var t = new eui.Group;
        return this.rank = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.score_2_i(), this.tx_name_2_i(), this.rank_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "room_visit_pop_item_bg_png",
        t.verticalCenter = 0,
        t.x = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "room_visit_pop_bu_png",
        t.verticalCenter = 0,
        t.x = 354,
        t
    },
    i.score_2_i = function() {
        var t = new eui.Label;
        return this.score_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "1234567",
        t.textColor = 4187130,
        t.verticalCenter = 0,
        t.x = 435,
        t
    },
    i.tx_name_2_i = function() {
        var t = new eui.Label;
        return this.tx_name_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "玩家名字玩家六",
        t.textColor = 12834813,
        t.verticalCenter = 0,
        t.x = 149,
        t
    },
    i.rank_2_i = function() {
        var t = new eui.Label;
        return this.rank_2 = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = -321,
        t.size = 40,
        t.text = "1",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.height = 69,
        t.verticalCenter = 0,
        t.width = 69,
        t.x = 16,
        t.elementsContent = [this.avatar_i()],
        t
    },
    i.avatar_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatar = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    i.ima_visit_i = function() {
        var t = new eui.Image;
        return this.ima_visit = t,
        t.source = "room_visit_pop_visit_png",
        t.x = 603,
        t.y = 21,
        t
    },
    e
} (eui.Skin);