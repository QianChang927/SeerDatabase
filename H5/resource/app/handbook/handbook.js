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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.OFFSET_LEFT = 35,
            e
        }
        return __extends(e, t),
        e.prototype.setData = function() {},
        e.prototype._resize = function() {},
        e.prototype.adaptLeftContent = function(t, e) {
            if (void 0 === e && (e = 0), egret.Capabilities.isMobile) {
                var e = DeviceInfoManager.adapterOffSetX + e;
                t.left ? t.left += e: t.x += e
            }
        },
        e.prototype.adaptRightContent = function(t, e) {
            if (void 0 === e && (e = 0), egret.Capabilities.isMobile) {
                var e = DeviceInfoManager.adapterOffSetX + e;
                t.right ? t.right += e: t.right = e
            }
        },
        e.prototype.destroy = function() {
            console.log(this.constructor.name + " destroy")
        },
        e.prototype.initBtnHelpById = function(t, e) {
            var i = this.getBtnHelp(e);
            ImageButtonUtil.add(i,
            function() {
                tipsPop.TipsPop.openHelpPopById(t)
            },
            this),
            this.adaptLeftContent(i)
        },
        e.prototype.getBtnHelp = function(t) {
            var e = new eui.Image("common_help_icon_1_png");
            return t = t ? t: this,
            t.addChild(e),
            e.x = 259,
            e.y = 13,
            e
        },
        e
    } (eui.Component);
    t.BaseBookPanel = e,
    __reflect(e.prototype, "handbook.BaseBookPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandbookRankViewSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.HandbookRankViewItem
        },
        i.prototype.updateRank = function(t) {
            var e, i, n = this;
            1 == t ? (StatLogger.log("20210702版本系统功能", "图鉴系统", "点击排行榜内【新增排行】页签的人次"), this.txt_scoreName.text = "新增积分", e = 157, i = this.getTime()) : 2 == t && (StatLogger.log("20210702版本系统功能", "图鉴系统", "点击排行榜内【总分排行】页签的人次"), this.txt_scoreName.text = "总积分", e = 156, i = 1),
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [e, i, 0, 9],
            function(t) {
                for (var e = t.data,
                i = e.readUnsignedInt(), r = [], o = 0; i > o; o++) {
                    var a = {};
                    a.index = o + 1,
                    a.userid = e.readUnsignedInt(),
                    a.score = e.readUnsignedInt(),
                    a.nick = e.readUTFBytes(16),
                    r.push(a)
                }
                n._list.dataProvider = new eui.ArrayCollection(r)
            }),
            KTool.getMyRankAndScore(e, i, !0,
            function(t) {
                n.txt_myName.text = MainManager.actorInfo.nick,
                n.txt_myId.text = MainManager.actorID + "";
                var e = t.rank + 1;
                e > 0 && 4 > e ? (n.img_rank.visible = !0, n.flag_outRank.visible = !1, n.txt_rank.text = "", n.img_rank.source = "handbook_detail_viewstack_img_rank" + e + "_png") : e > 0 && 11 > e ? (n.img_rank.visible = n.flag_outRank.visible = !1, n.txt_rank.text = e + "") : (n.img_rank.visible = !1, n.flag_outRank.visible = !0, n.txt_rank.text = ""),
                n.txt_myScore.text = t.score
            })
        },
        i.prototype.getTime = function() {
            var t = SystemTimerManager.sysBJDate,
            e = t.getDay();
            e = 5 > e ? e + 7 : e;
            var i = new Date(864e5 * (5 - e) + t.getTime());
            return~~ ("" + i.getFullYear() + core.gameUtil.addLeadingZero(i.getMonth() + 1) + core.gameUtil.addLeadingZero(i.getDate()))
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.HandbookRankView = e,
    __reflect(e.prototype, "handbook.HandbookRankView")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandBookAwardSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._scrMask.visible = !1,
            this._list.itemRenderer = t.HandBookAwardItem,
            ImageButtonUtil.add(this.btnClose,
            function() {
                i.destroy(),
                i.parent && i.parent.removeChild(i)
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在奖励面板中点击一键领取按钮的人次"),
                SocketConnection.sendByQueue(41278, [0, 0],
                function() {
                    t.HandBookData.updateAwardAttr()
                })
            },
            this),
            t.HandBookData.updateAwardAttr(function() {
                i._list.dataProvider = new eui.ArrayCollection(t.HandBookData.getLevelList()),
                i.validateNow(),
                i.updateView();
                var e = t.HandBookData.getLevelByScore(t.HandBookData.myScore),
                n = 124 * (e - 1) + 20 * (e - 1) - egret.lifecycle.stage.stageWidth / 2 + 62 + 57;
                i._scr.viewport.scrollH = Math.min(Math.max(0, n), i._scr.viewport.contentWidth)
            },
            this),
            EventManager.addEventListener("hand_book_award_update", this.updateView, this)
        },
        i.prototype.updateView = function() {
            for (var e = t.HandBookData.getLevelList(), i = !1, n = 0; n < e.length; n++) {
                var r = e[n];
                if (t.HandBookData.myScore >= r.ExpNeed) {
                    var o = t.HandBookData.getAwardState(r),
                    a = t.HandBookData.getAwardInfo(r.RewardID);
                    if (!o && 1 == a.Type) {
                        i = !0;
                        break
                    }
                }
            }
            DisplayUtil.setEnabled(this.btnOneTap, i)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            EventManager.dispatchEventWith("hand_book_close_award"),
            EventManager.removeEventListener("hand_book_award_update", this.updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (BaseModule);
    t.HandBookAward = e,
    __reflect(e.prototype, "handbook.HandBookAward")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandBookAwardItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            EventManager.addEventListener("hand_book_award_update", this.updateView, this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._levelInfo = this.data,
            this._awardInfo = t.HandBookData.getAwardInfo(this._levelInfo.RewardID),
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            var e = this;
            this.txt_level.text = "LV." + this._levelInfo.ID;
            var i = this._awardInfo.Item,
            n = this._awardInfo.Monster,
            r = this._awardInfo.Mintmark,
            o = this._awardInfo.ach,
            a = this._awardInfo.Skin;
            this.item_0.visible = this.item_1.visible = this.item_2.visible = !0;
            var s = 0;
            if (ImageButtonUtil.removeAll(this), i) if (i instanceof Array) for (var h = function(t) {
                _["icon_" + s].source = ClientConfig.getItemIcon(i[t].ID),
                _["txt_num_" + s].text = i[t].Count + "",
                ImageButtonUtil.add(_["icon_" + s],
                function() {
                    var e = {};
                    e.id = i[t].ID,
                    tipsPop.TipsPop.openItemPop(e)
                },
                _),
                s++
            },
            _ = this, u = 0; u < i.length; u++) h(u);
            else this["icon_" + s].source = ClientConfig.getItemIcon(i.ID),
            this["txt_num_" + s].text = i.Count + "",
            ImageButtonUtil.add(this["icon_" + s],
            function() {
                var t = {};
                t.id = i.ID,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            s++;
            if (n) if (n instanceof Array) for (var l = function(t) {
                c["icon_" + s].source = ClientConfig.getPetHeadPath(n[t].ID),
                c["txt_num_" + s].text = n[t].Lv + "",
                ImageButtonUtil.add(c["icon_" + s],
                function() {
                    AwardManager.ShowTmpPetDiaolg(n[t].ID)
                },
                c),
                s++
            },
            c = this, u = 0; u < n.length; u++) l(u);
            else this["icon_" + s].source = ClientConfig.getPetHeadPath(n.ID),
            this["txt_num_" + s].text = n.Lv,
            ImageButtonUtil.add(this["icon_" + s],
            function() {
                AwardManager.ShowTmpPetDiaolg(n.ID)
            },
            this),
            s++;
            if (r) if (r instanceof Array) for (var p = function(t) {
                g["icon_" + s].source = ClientConfig.getMarkPath(r[t].ID),
                g["txt_num_" + s].text = r[t].Count + "",
                ImageButtonUtil.add(g["icon_" + s],
                function() {
                    var e = {};
                    e.ins = r[t].ID,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                },
                g),
                s++
            },
            g = this, u = 0; u < r.length; u++) p(u);
            else this["icon_" + s].source = ClientConfig.getMarkPath(r.ID),
            this["txt_num_" + s].text = r.Count + "",
            ImageButtonUtil.add(this["icon_" + s],
            function() {
                var t = {};
                t.ins = r.ID,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            s++;
            if (o) if (o instanceof Array) for (var d = function(t) {
                m["icon_" + s].source = "achieve_title_icon_png",
                m["txt_num_" + s].text = "",
                ImageButtonUtil.add(m["icon_" + s],
                function() {
                    var e = {},
                    i = AchieveXMLInfo.getRule(o[t].BranchID, o[t].RuleID);
                    e.SpeNameBonus = i.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(e)
                },
                m),
                s++
            },
            m = this, u = 0; u < o.length; u++) d(u);
            else this["icon_" + s].source = "achieve_title_icon_png",
            this["txt_num_" + s].text = "",
            ImageButtonUtil.add(this["icon_" + s],
            function() {
                var t = {},
                e = AchieveXMLInfo.getRule(o.BranchID, o.RuleID);
                t.SpeNameBonus = e.SpeNameBonus,
                tipsPop.TipsPop.openTitlePop(t)
            },
            this),
            s++;
            if (a) if (a instanceof Array) for (var f = function(t) {
                y["icon_" + s].source = ClientConfig.getPetHeadPath(PetSkinXMLInfo.getSkinInfo(a[t].ID).skinPetId),
                y["txt_num_" + s].text = "1",
                ImageButtonUtil.add(y["icon_" + s],
                function() {
                    AwardManager.ShowTmpPetSkinDiaolg(PetSkinXMLInfo.getSkinInfo(a[t].ID))
                },
                y),
                s++
            },
            y = this, u = 0; u < a.length; u++) f(u);
            else this["icon_" + s].source = ClientConfig.getPetHeadPath(PetSkinXMLInfo.getSkinInfo(a.ID).skinPetId),
            this["txt_num_" + s].text = "1",
            ImageButtonUtil.add(this["icon_" + s],
            function() {
                AwardManager.ShowTmpPetSkinDiaolg(PetSkinXMLInfo.getSkinInfo(a.ID))
            },
            this),
            s++;
            for (var u = s; 3 > u; u++) this["item_" + u].visible = !1;
            this.img_or_0.visible = this.img_or_1.visible = 2 == this._awardInfo.Type,
            ImageButtonUtil.add(this.btnGet,
            function() {
                2 == e._awardInfo.Type ? PopViewManager.getInstance().openView(new t.HandBookSelectPanel, null, e._levelInfo.ID) : SocketConnection.sendByQueue(41278, [e._levelInfo.ID, 0],
                function() {
                    t.HandBookData.updateAwardAttr()
                })
            },
            this)
        },
        i.prototype.updateView = function() {
            var e = t.HandBookData.getAwardState(this._levelInfo);
            e ? this.currentState = "got": t.HandBookData.myScore >= this._levelInfo.ExpNeed ? this.currentState = "can": this.currentState = "lock"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("hand_book_award_update", this.updateView, this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.HandBookAwardItem = e,
    __reflect(e.prototype, "handbook.HandBookAwardItem")
} (handbook || (handbook = {}));
var __reflect = this && this.__reflect ||
function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
},
__awaiter = this && this.__awaiter ||
function(t, e, i, n) {
    return new(i || (i = Promise))(function(r, o) {
        function a(t) {
            try {
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = e.call(t, h)
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
    var r, o, a, s, h = {
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
handbook; !
function(t) {
    var e = function() {
        function t() {}
        return t.updateScore = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, r, r;
                return __generator(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([12100, 2000047, 12101, 12102, 12103, 12104, 12107])];
                    case 1:
                        for (t = o.sent(), e = t.slice(0, 2), i = t.slice(2, 7), n = !1, r = 0; r < e.length; r++) if (!e[r]) {
                            n = !0;
                            break
                        }
                        for (r = 0; r < i.length; r++) if (i[r]) {
                            n = !0;
                            break
                        }
                        return n ? [4, SocketConnection.sendWithPromise(41279, [1])] : [3, 3];
                    case 2:
                        o.sent(),
                        o.label = 3;
                    case 3:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        t.setup = function() {
            var t = this;
            PetStorage2015InfoManager.getTotalInfo(function() {}),
            this.mySuitList = ItemManager.GetMySuitIds(),
            config.xml.load("figure_reward").then(function() {
                var e = config.xml.getAnyRes("figure_reward").root,
                i = e.Reward,
                n = e.Level;
                t._rewardObj = new HashMap,
                t._levelObj = new HashMap;
                for (var r = 0; r < i.length; r++) t._rewardObj.add(i[r].ID, i[r]);
                for (var r = 0; r < n.length; r++) t._levelObj.add(n[r].ID, n[r])
            }),
            this.myMarkList = [],
            SocketConnection.sendByQueue(41280, [40001, 5e4],
            function(e) {
                for (var i = e.data,
                n = i.readUnsignedInt(), r = 0; n > r; r++) t.myMarkList.push(i.readUnsignedInt())
            }),
            this.myPetList = [],
            this.getPetList()
        },
        t.getPetList = function() {
            var t = this;
            SocketConnection.sendByQueue(41292, [this._petPage],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n = i.readUnsignedInt(), r = 0; n > r; r++) t.myPetList[i.readUnsignedInt()] = !0;
                n >= 2e3 && (t._petPage++, t.getPetList())
            })
        },
        Object.defineProperty(t, "rewardObj", {
            get: function() {
                return this._rewardObj || this.setup(),
                this._rewardObj
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "levelObj", {
            get: function() {
                return this._levelObj || this.setup(),
                this._levelObj
            },
            enumerable: !0,
            configurable: !0
        }),
        t.getLevelByScore = function(t) {
            if (t < this.levelObj.getValue(1).ExpNeed) return 0;
            for (var e = 1; e < this.levelObj.length + 1; e++) {
                var i = this.levelObj.getValue(e),
                n = this.levelObj.getValue(e + 1);
                if (n) {
                    if (t >= i.ExpNeed && t < n.ExpNeed) return i.ID
                } else if (t >= i.ExpNeed) return i.ID
            }
        },
        t.getLevelInfo = function(t) {
            return this.levelObj.getValue(t)
        },
        t.getAwardInfo = function(t) {
            return this.rewardObj.getValue(t)
        },
        t.getLevelList = function() {
            return this.levelObj.getValues()
        },
        t.updateAwardAttr = function(t, e) {
            for (var i = this,
            n = [], r = this._levelObj.getValues(), o = 0, a = r; o < a.length; o++) {
                var s = a[o];
                n.indexOf(s.UseValue) < 0 && n.push(s.UseValue)
            }
            KTool.getMultiValue(n.concat([107532]),
            function(r) {
                i.awardAttr = {};
                for (var o = 0; o < n.length; o++) i.awardAttr["" + n[o]] = r[o];
                i.myScore = r[r.length - 1],
                t && t.apply(e),
                EventManager.dispatchEventWith("hand_book_award_update")
            })
        },
        t.getAwardState = function(t) {
            var e = this.awardAttr["" + t.UseValue],
            i = !!KTool.getBit(e, t.UseBit);
            return i
        },
        t._petPage = 1,
        t
    } ();
    t.HandBookData = e,
    __reflect(e.prototype, "handbook.HandBookData")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    t.selectedValue = 1;
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.groupName = "handbook_HandbookFrame_",
            i.def = [1, 6, 1, 1],
            i.panelCls = [["NewMonsterPanel", "HotMonsterPanel", "AllMonsterPanel"], ["SkinPanel"], ["AvatarSuitPanel", "AvatarPartPanel", "AvatarMountsPanel"], ["MarkPanel"]],
            i.panels = {},
            t && (i._type = t.type, i._sub = t.sub),
            i.skinName = HandbookFrameSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            e.prototype.initBtnClose.call(this, "handbook_frame_title_" + this._type + "_png", this,
            function() {
                i.onClose()
            },
            this),
            LoadingManager.instance.showloading("正在加载资源，请稍候！"),
            t.HandBookData.myPetList || t.HandBookData.setup(),
            this.initData()
        },
        i.prototype._resize = function() {
            this.currPanel._resize()
        },
        i.prototype.initData = function() {
            for (var t = PetBook.PetBookXMLInfo.getHotspotXml().place, e = !1, i = !1, n = 0, r = t; n < r.length; n++) {
                var o = r[n];
                1 == o.type && (i = !0),
                3 == o.type && (e = !0)
            }
            var a = this._type,
            s = new MenuData;
            s.groupName = this.groupName + a,
            this.def[1] = i ? 6 : 1,
            s["default"] = this._sub || this.def[a],
            s.root = [[1, 2, 3], [6, 1, 4, 3, 2, 5], [1, 2, 3], [1, 2, 3, 4, 5, 6, 7]][a],
            s.data = [{
                1 : {
                    title: "最新"
                },
                2 : {
                    title: "热门"
                },
                3 : {
                    title: "所有"
                }
            },
            {
                6 : {
                    title: "最新"
                },
                1 : {
                    title: "所有"
                },
                4 : {
                    title: "传说"
                },
                3 : {
                    title: "史诗"
                },
                2 : {
                    title: "经典"
                },
                5 : {
                    title: "限定"
                }
            },
            {
                1 : {
                    title: "套装"
                },
                2 : {
                    title: "部件"
                },
                3 : {
                    title: "座驾"
                }
            },
            {
                1 : {
                    title: "所有"
                },
                2 : {
                    title: "攻击"
                },
                3 : {
                    title: "特攻"
                },
                4 : {
                    title: "速度"
                },
                5 : {
                    title: "体力"
                },
                6 : {
                    title: "双防"
                },
                7 : {
                    title: "本周"
                }
            }][a],
            3 != a || e || (s.root.splice(6, 1), delete s.data[7]),
            1 != a || i || (s.root.splice(0, 1), delete s.data[6]),
            GameInfo.isChecking && 2 == a && (s.root.splice(1, 2), delete s.data[3]),
            this.menu = Menu.createMenu(s, this.menuGroup),
            EventManager.addEventListener(BaseMenuEvent.BASE_MENU_SELECT_CHANGE_ + this.groupName + a, this.onChangeTab, this),
            LoadingManager.instance.hideloading(null)
        },
        i.prototype.onChangeTab = function() {
            var e = this._type;
            t.selectedValue = this.menu.selectedValue,
            StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板内点击【" + this.menu.info.data[t.selectedValue].title + "】页签的人次");
            var i = 1 == this.panelCls[e].length ? this.panelCls[e][0] : this.panelCls[e][t.selectedValue - 1];
            i ? this.currPanel && this.currPanel.name == i ? this.currPanel.setData() : (this.hideCurrPanel(), this.panels[i] ? (this.currPanel = this.panels[i], this.currPanel.setData(), this.grpContainer.addChild(this.currPanel)) : t[i] ? (this.currPanel = new t[i], this.currPanel.name = i, this.grpContainer.addChild(this.currPanel), this.currPanel.setData(), this.panels[i] = this.currPanel) : BubblerManager.getInstance().showText(i + "未实现")) : BubblerManager.getInstance().showText("该项未处理")
        },
        i.prototype.hideCurrPanel = function() {
            this.grpContainer.removeChildren()
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.menu && this.menu.destroy();
            for (var t in this.panels) this.panels[t].destroy();
            this.panels = null
        },
        i
    } (BaseModule);
    t.HandbookFrame = e,
    __reflect(e.prototype, "handbook.HandbookFrame")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandBookRankSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.txt_intro.textFlow = [{
                text: "每",
                style: {
                    textColor: 13361663
                }
            },
            {
                text: "周五0点",
                style: {
                    textColor: 16773733
                }
            },
            {
                text: "更新",
                style: {
                    textColor: 13361663
                }
            }],
            this._list.itemRenderer = t.HandBookRankItem,
            this.rbg_tab = this.rb_total.group,
            this.rbg_tab.selectedValue = 1,
            this.validateNow(),
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.updateView, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t, e, i = this;
            1 == ~~this.rbg_tab.selectedValue ? (StatLogger.log("20210702版本系统功能", "图鉴系统", "点击排行榜内【总分排行】页签的人次"), this.txt_scoreName.text = "总积分", t = 156, e = 1) : 2 == ~~this.rbg_tab.selectedValue && (StatLogger.log("20210702版本系统功能", "图鉴系统", "点击排行榜内【新增排行】页签的人次"), this.txt_scoreName.text = "新增积分", t = 157, e = this.getTime()),
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [t, e, 0, 9],
            function(t) {
                for (var e = t.data,
                n = e.readUnsignedInt(), r = [], o = 0; n > o; o++) {
                    var a = {};
                    a.index = o + 1,
                    a.userid = e.readUnsignedInt(),
                    a.score = e.readUnsignedInt(),
                    a.nick = e.readUTFBytes(16),
                    r.push(a)
                }
                i._list.dataProvider = new eui.ArrayCollection(r)
            }),
            KTool.getMyRankAndScore(t, e, !0,
            function(t) {
                i.txt_myName.text = MainManager.actorInfo.nick,
                i.txt_myAccount.text = MainManager.actorID + "";
                var e = t.rank + 1;
                e > 0 && 4 > e ? (i.txt_myRank.text = "", i.img_rank.source = "hand_book_rank_item_img_rank_" + e + "_png") : e > 0 && 11 > e ? (i.txt_myRank.text = e + "", i.img_rank.source = "hand_book_rank_rankRect_png") : (i.txt_myRank.text = "", i.img_rank.source = "all_monster_rank_norank_png"),
                i.txt_myScore.text = t.score
            })
        },
        i.prototype.getTime = function() {
            var t = SystemTimerManager.sysBJDate,
            e = t.getDay();
            e = 5 > e ? e + 7 : e;
            var i = new Date(864e5 * (5 - e) + t.getTime());
            return~~ ("" + i.getFullYear() + core.gameUtil.addLeadingZero(i.getMonth() + 1) + core.gameUtil.addLeadingZero(i.getDate()))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.updateView, this)
        },
        i
    } (PopView);
    t.HandBookRank = e,
    __reflect(e.prototype, "handbook.HandBookRank")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = HandBookRankItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.txt_name.text = this._info.nick,
            this.txt_account.text = this._info.userid + "",
            this.txt_score.text = this._info.score + "",
            this._info.index < 4 ? (this.txt_rank.text = "", this.img_rank.source = "hand_book_rank_item_img_rank_" + this._info.index + "_png") : (this.txt_rank.text = this._info.index + "", this.img_rank.source = "hand_book_rank_rankRect_png"),
            this.bg.visible = this._info.index % 2 != 0
        },
        e.prototype.destroy = function() {
            this.removeChildren(),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e
    } (eui.ItemRenderer);
    t.HandBookRankItem = e,
    __reflect(e.prototype, "handbook.HandBookRankItem")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandBookSelectPanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this._awardId = t
        },
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.rbg_tab = this.rb_0.group,
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                return i.rbg_tab.selectedValue ? void SocketConnection.sendByQueue(41278, [i._awardId, ~~i.rbg_tab.selectedValue],
                function() {
                    t.HandBookData.updateAwardAttr(),
                    i.hide()
                }) : void BubblerManager.getInstance().showText("请选择要领取的精灵")
            },
            this)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    t.HandBookSelectPanel = e,
    __reflect(e.prototype, "handbook.HandBookSelectPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.labName = "",
            e.right = 0,
            e.skinName = ParentNodeLabSkin,
            e.addEventListener(egret.Event.COMPLETE, e._updateView, e),
            e
        }
        return __extends(e, t),
        e.prototype.setData = function(e, i, n, r, o) {
            t.prototype.setData.call(this, e, i, n, r, o),
            this.iconName = this._customData.icon,
            this.icon_up.source = this.iconName + "_up_png",
            this.icon_down.source = this.iconName + "_down_png",
            this.labName = this._customData.name
        },
        e.prototype.childrenCreated = function() {
            if (t.prototype.childrenCreated.call(this), this._customData) {
                var e = this.selected ? "down": "up";
                this.currentState = e
            }
        },
        e.prototype._updateView = function() {
            var t = this.selected ? "down": "up";
            this.currentState = t,
            this.icon_up.source = this.iconName + "_up_png",
            this.icon_down.source = this.iconName + "_down_png"
        },
        e.prototype._onChangeSelected = function() {
            t.prototype._onChangeSelected.call(this),
            this._updateView()
        },
        e
    } (common.ui.treemenu.FirstComponent);
    t.ParentNode = e,
    __reflect(e.prototype, "handbook.ParentNode");
    var i = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.right = 0,
            e.skinName = ChildNodeLabSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            if (t.prototype.childrenCreated.call(this), this._customData) {
                var e = this.selected ? "down": "up";
                this.currentState = e,
                this.txtName.text = this._customData.name,
                this.txtBg.width = this.txtName.width + 50,
                this.txtBg.visible = this.selected
            }
        },
        e.prototype._updateView = function() {
            var t = this.selected ? "down": "up";
            this.currentState = t,
            this.txtName.text = this._customData.name,
            this.txtBg.width = this.txtName.width + 50,
            this.txtBg.visible = this.selected
        },
        e.prototype._onChangeSelected = function() {
            t.prototype._onChangeSelected.call(this);
            var e = this.selected ? "down": "up";
            this.currentState = e,
            this.txtBg.visible = this.selected
        },
        e
    } (common.ui.treemenu.SecondComponent);
    t.ChildNode = i,
    __reflect(i.prototype, "handbook.ChildNode")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.allClothes = [],
            t.arrayColletion = new eui.ArrayCollection([]),
            t.percentWidth = 100,
            t.skinName = AvatarMountsSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.scroller),
            this.adaptRightContent(this.grpRight),
            this.scroller.right = DeviceInfoManager.adapterOffSetX,
            this.list.itemRenderer = t.MountsItemRender,
            this.list.dataProvider = this.arrayColletion,
            ImageButtonUtil.add(this.img_btn_search, this.onSearchChanged, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickCloth, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.cb_ownless.selected = !1,
            this.updateRank()
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.onSearchChanged(null)
        },
        i.prototype.updateRank = function() {
            var t = this,
            e = ItemManager.GetHoldClothesIDs("mount"),
            i = ItemXMLInfo.getAllMount();
            this.txt_progress.text = "收集进度：" + e.length + "/" + i.length,
            SocketConnection.sendByQueue(41279, [7],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.adaptLayout = function() {
            var t = egret.lifecycle.stage.stageWidth - 1136;
            t -= .12 * t,
            20 > t && t > -20 && (t = 0);
            var e = 226,
            i = 12,
            n = 944,
            r = 22,
            o = Math.floor(t / (e + i));
            this.scroller.width = n + t,
            this.list.width = n + t;
            var a = this.list.layout;
            if (0 != o) {
                a.requestedColumnCount = 4 + o;
                var s = i + (t - o * (e + i)) / a.requestedColumnCount;
                s = s > r ? r: s,
                a.horizontalGap = s,
                a.verticalGap = a.horizontalGap
            } else a.horizontalGap = i,
            a.requestedColumnCount = 4;
            this.list.layout = a
        },
        i.prototype._resize = function() {},
        i.prototype.setData = function() {
            this.updateData()
        },
        i.prototype.updateData = function() {
            this.arrayColletion.removeAll(),
            this.scroller.stopAnimation(),
            this.scroller.viewport.scrollV = 0;
            var t = ItemXMLInfo.getAllMount().map(Number);
            ArrayUtil.sortOn(t, "", ArrayUtil.DESCENDING);
            var e = ItemManager.GetHoldClothesIDs("mount");
            for (var i in t)(!this.cb_ownless.selected || e.indexOf(t[i]) < 0) && this.arrayColletion.addItem(~~t[i]);
            var n = this.arrayColletion.source.length;
            if (4 > n) for (var r = 0; 4 - n > r; r++) this.arrayColletion.addItem(null)
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this.scroller.viewport.scrollV = 0;
            var i = ItemXMLInfo.getAllMount().map(Number);
            ArrayUtil.sortOn(i, "", ArrayUtil.DESCENDING);
            var n = ItemManager.GetHoldClothesIDs("mount");
            if (e.length > 0) {
                for (var r in i) {
                    var o = ItemXMLInfo.getName(~~i[r]);
                    SearchUtil.isMatch(e, o) && (!this.cb_ownless.selected || n.indexOf(i[r]) < 0) && this.arrayColletion.addItem(i[r])
                }
                var a = this.arrayColletion.source.length;
                if (4 > a) for (var s = 0; 4 - a > s; s++) this.arrayColletion.addItem(null)
            } else this.updateData()
        },
        i.prototype.onClickCloth = function(t) {
            var e = this.list.selectedItem;
            tipsPop.TipsPop.openManualCarPop({
                id: e
            })
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i
    } (t.BaseBookPanel);
    t.AvatarMountsPanel = e,
    __reflect(e.prototype, "handbook.AvatarMountsPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.marks = [],
            t.allClothes = [],
            t.currClothes = [],
            t.currType = 1,
            t.arrayColletion = new eui.ArrayCollection([]),
            t.arrRemoveIds = [100001, 100002, 100003],
            t.lastSelected = "all",
            t.percentWidth = 100,
            t.skinName = AvatarPartSkin,
            t.allClothes = ItemXMLInfo.getAllCloth(),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.parts),
            this.adaptLeftContent(this.scroller),
            this.adaptRightContent(this.grpRight),
            this.scroller.right = Math.max(DeviceInfoManager.adapterOffSetX, 35),
            this.rb_all.group.selectedValue = "all",
            this.list.itemRenderer = t.PartItemRender,
            this.list.dataProvider = this.arrayColletion,
            this.rb_all.group.addEventListener(egret.Event.CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.img_btn_search, this.onSearchChanged, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickCloth, this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            this.cb_ownless.selected = !1
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.onSearchChanged(null)
        },
        i.prototype.updateRank = function() {
            for (var t = this,
            e = 0,
            i = 0,
            n = this.marks; i < n.length; i++) {
                var r = n[i];
                ItemManager.containsCloth(r) && e++
            }
            this.txt_progress.text = "收集进度：" + e + "/" + this.marks.length,
            SocketConnection.sendByQueue(41279, [6],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.adaptLayout = function() {
            var t = egret.lifecycle.stage.stageWidth - 1136;
            t -= .12 * t,
            20 > t && t > -20 && (t = 0);
            var e = 144,
            i = 15,
            n = 22,
            r = 944,
            o = 6,
            a = Math.floor(t / (e + i));
            this.scroller.width = r + t,
            this.list.width = r + t;
            var s = this.list.layout;
            if (0 != a) {
                s.requestedColumnCount = o + a;
                var h = i + (t - a * (e + i)) / s.requestedColumnCount;
                h = h > n ? n: h,
                s.horizontalGap = h,
                s.verticalGap = s.horizontalGap
            } else s.horizontalGap = i,
            s.requestedColumnCount = o;
            this.list.layout = s
        },
        i.prototype._resize = function() {},
        i.prototype.setData = function() {
            this.updateData()
        },
        i.prototype.updateData = function() {
            this.arrayColletion.removeAll(),
            this.scroller.stopAnimation(),
            this.scroller.viewport.scrollV = 0,
            null != this.rb_all.group.selectedValue && (this.lastSelected = this.rb_all.group.selectedValue),
            this.getCurrClothes(),
            this.updateRank(),
            ArrayUtil.sortOn(this.marks, "", ArrayUtil.DESCENDING);
            for (var t in this.marks) this.cb_ownless.selected && ItemManager.containsCloth(this.marks[t]) || -1 != this.arrRemoveIds.indexOf( + this.marks[t]) || this.arrayColletion.addItem(this.marks[t]);
            var e = this.arrayColletion.source.length;
            if (8 > e) for (var i = 0; 8 - e > i; i++) this.arrayColletion.addItem(null);
            this.currClothes = this.marks
        },
        i.prototype.getCurrClothes = function() {
            var t = [],
            e = this.rb_all.group.selectedValue || this.lastSelected;
            switch (this.rb_all.group.selectedValue) {
            case "all":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【全部】的人次");
                break;
            case "head":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【头部】的人次");
                break;
            case "eye":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【面部】的人次");
                break;
            case "hand":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【手部】的人次");
                break;
            case "waist":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【腰部】的人次");
                break;
            case "foot":
                StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板部件中点击【脚部】的人次")
            }
            for (var i = 0; i < this.allClothes.length; i++) {
                var n = ~~this.allClothes[i].ID;
                this.arrRemoveIds.indexOf(n) >= 0 || ("all" == e && 0 == SuitXMLInfo.getIDForItem(n) ? t.push(n) : this.allClothes[i].type == e && 0 == SuitXMLInfo.getIDForItem(n) && t.push(n))
            }
            t.sort(function(t, e) {
                return t - e
            }),
            this.marks = t
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this.scroller.viewport.scrollV = 0;
            var i = 0;
            if (e.length > 0) {
                var n = !1;
                for (var r in this.currClothes) {
                    var o = ItemXMLInfo.getName(this.currClothes[r]); ! SearchUtil.isMatch(e, o) || this.cb_ownless.selected && ItemManager.containsCloth(this.currClothes[r]) || -1 != this.arrRemoveIds.indexOf( + this.marks[r]) || (this.arrayColletion.addItem(this.currClothes[r]), i++, n = !0)
                }
            } else {
                for (var r in this.currClothes) this.cb_ownless.selected && ItemManager.containsCloth(this.currClothes[r]) || -1 != this.arrRemoveIds.indexOf( + this.marks[r]) || this.arrayColletion.addItem(this.currClothes[r]);
                i = this.currClothes.length
            }
            var a = this.arrayColletion.source.length;
            if (8 > a) for (var s = 0; 8 - a > s; s++) this.arrayColletion.addItem(null)
        },
        i.prototype.onClickCloth = function(t) {
            var e = this.list.selectedItem,
            i = {};
            i.clothesId = e,
            tipsPop.TipsPop.openClothesPop(i)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i
    } (t.BaseBookPanel);
    t.AvatarPartPanel = e,
    __reflect(e.prototype, "handbook.AvatarPartPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.currSuit = [],
            t.arrayColletion = new eui.ArrayCollection([]),
            t.allSuit = [],
            t.percentWidth = 100,
            t.skinName = AvatarSuitSkin,
            t.getSuitData(),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.scroller),
            this.adaptRightContent(this.grpRight),
            this.adaptLeftContent(this.type),
            this.scroller.right = DeviceInfoManager.adapterOffSetX,
            this.rb_suit1.group.selectedValue = 0,
            this.list.itemRenderer = t.SuitItemRender,
            this.list.dataProvider = this.arrayColletion,
            this.cb_ownless.selected = !1,
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.updateData, this),
            this.rb_suit1.group.addEventListener(egret.Event.CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.img_btn_search, this.onSearchChanged, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            GameInfo.isChecking || this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickCloth, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            this.updateData(),
            this.updateRank()
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.updateData()
        },
        i.prototype.updateRank = function() {
            var t = this,
            e = ItemManager.GetMySuitIds();
            e = e.filter(function(t) {
                for (var e = SuitXMLInfo.getCloths(t), i = 0, n = e; i < n.length; i++) {
                    var r = n[i];
                    if (!ItemManager.getClothInfo(r)) return ! 1
                }
                return ! 0
            }),
            this.txt_progress.text = "收集进度：" + e.length + "/" + this.allSuit.length,
            SocketConnection.sendByQueue(41279, [5],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.adaptLayout = function() {},
        i.prototype._resize = function() {},
        i.prototype.getSuitData = function() {
            this.abilitySuits = ItemSeXMLInfo.getAllAbilitySuit().map(Number);
            var t = SuitXMLInfo.getAllSuitIds();
            this.coolSuits = [],
            this.allSuit = [],
            this.tranformSuits = [];
            for (var e = 0; e < t.length; e++) {
                var i = ~~t[e],
                n = SuitXMLInfo.getIsTransform(i);
                this.abilitySuits.indexOf(i) < 0 && (n ? this.tranformSuits.push(i) : this.coolSuits.push(i)),
                this.allSuit.push(i)
            }
            ArrayUtil.sortOn(this.allSuit, "", ArrayUtil.DESCENDING)
        },
        i.prototype.setData = function() {
            this.rb_suit0.group.selectedValue = 0,
            this.rb_suit0.selected = !0
        },
        i.prototype.typeChange = function() {
            this.scroller.viewport.scrollV = 0,
            this.updateData()
        },
        i.prototype.updateData = function() {
            this.scroller.viewport.scrollV = 0,
            this.arrayColletion.removeAll();
            var e = this.rb_suit1.group.selectedValue || 0;
            0 == e ? (StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板套装中点击【全部】的人次"), this.currSuit = this.allSuit) : 1 == e ? (StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板套装中点击【能力】的人次"), this.currSuit = this.abilitySuits) : 2 == e ? (StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板套装中点击【炫酷】的人次"), this.currSuit = this.coolSuits) : (StatLogger.log("20210702版本系统功能", "图鉴系统", "在装扮图鉴面板套装中点击【变形】的人次"), this.currSuit = this.tranformSuits),
            ArrayUtil.sortOn(this.currSuit, "", ArrayUtil.DESCENDING);
            var i = t.HandBookData.mySuitList;
            for (var n in this.currSuit)(!this.cb_ownless.selected || i.indexOf(this.currSuit[n]) < 0) && this.arrayColletion.addItem(this.currSuit[n]);
            var r = this.arrayColletion.source.length;
            if (4 > r) for (var o = 0; 4 - r > o; o++) this.arrayColletion.addItem(null)
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this.scroller.viewport.scrollV = 0;
            var i = 0;
            if (e.length > 0) {
                var n = !1;
                for (var r in this.currSuit) {
                    var o = SuitXMLInfo.getName(this.currSuit[r]);
                    SearchUtil.isMatch(e, o) && (this.arrayColletion.addItem(this.currSuit[r]), i++, n = !0)
                }
            } else {
                for (var r in this.currSuit) this.arrayColletion.addItem(this.currSuit[r]);
                i = this.currSuit.length
            }
            var a = this.arrayColletion.source.length;
            if (4 > a) for (var s = 0; 4 - a > s; s++) this.arrayColletion.addItem(null)
        },
        i.prototype.onClickCloth = function(t) {
            var e = {
                id: this.list.selectedItem
            };
            tipsPop.TipsPop.openSuitPop(e)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.updateData, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i
    } (t.BaseBookPanel);
    t.AvatarSuitPanel = e,
    __reflect(e.prototype, "handbook.AvatarSuitPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = SuitItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t = this;
            if (this.data) {
                this.visible = !0;
                var e = this.data,
                i = ClientConfig.getMountIcon(e);
                this.icon.visible = !1,
                RES.getResByUrl(i,
                function(e, i) {
                    t.icon.texture = e;
                    var n = Math.max(t.icon.width, t.icon.height),
                    r = 1;
                    n > 150 && (r = 150 / n),
                    t.icon.scaleX = t.icon.scaleY = r,
                    t.icon.visible = !0
                },
                this);
                var n = ItemXMLInfo.getName(e);
                this.txtName.text = n,
                n.length > 8 && (this.txtName.text = n.substr(0, 7) + "...");
                var r = ItemManager.GetHoldClothesIDs("mount");
                this.img_rect.visible = r.indexOf(e) < 0
            } else this.visible = !1,
            this.icon.source = null,
            this.txtName.text = "",
            this.img_rect.visible = !1;
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.MountsItemRender = e,
    __reflect(e.prototype, "handbook.MountsItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ClothItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            if (this.data) {
                this.visible = !0;
                var t = this.data;
                this.icon.source = ClientConfig.getClothSmallIcon(t);
                var e = ItemXMLInfo.getName(t);
                this.txtName.text = e,
                e.length > 6 && (this.txtName.text = e.substr(0, 5) + "..."),
                this.img_rect.visible = !ItemManager.containsCloth(t)
            } else this.visible = !1,
            this.icon.source = null,
            this.txtName.text = "",
            this.img_rect.visible = !1;
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {},
        e
    } (BaseItemRenderer);
    t.PartItemRender = e,
    __reflect(e.prototype, "handbook.PartItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SuitItemRenderSkin,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            var e = this;
            if (this.data) {
                this.visible = !0;
                var i = this.data,
                n = ClientConfig.getResPath("assets/item/cloth/suiticon/" + i + ".png");
                this.icon.visible = !1,
                RES.getResByUrl(n,
                function(t, i) {
                    e.icon.texture = t;
                    var n = Math.max(e.icon.width, e.icon.height),
                    r = 1;
                    n > 150 && (r = 150 / n),
                    e.icon.scaleX = e.icon.scaleY = r,
                    e.icon.visible = !0
                },
                this);
                var r = SuitXMLInfo.getName(i);
                this.txtName.text = r,
                r.length > 8 && (this.txtName.text = r.substr(0, 7) + "..."),
                this.icon.scaleX = this.icon.scaleY = 2.5;
                var o = t.HandBookData.mySuitList;
                this.img_rect.visible = o.indexOf(i) < 0
            } else this.visible = !1,
            this.icon.source = null,
            this.txtName.text = "",
            this.img_rect.visible = !1;
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {},
        i
    } (eui.ItemRenderer);
    t.SuitItemRender = e,
    __reflect(e.prototype, "handbook.SuitItemRender")
} (handbook || (handbook = {}));
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
                h(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((n = n.apply(t, e || [])).next())
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
        for (; h;) try {
            if (r = 1, o && (a = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(o, i[1])).done) return a;
            switch (o = 0, a && (i = [0, a.value]), i[0]) {
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
                o = i[1],
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
            i = e.call(t, h)
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
    var r, o, a, s, h = {
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
handbook; !
function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return e.prototype.initBtnClose.call(i, "handbook_frame_title_png", i),
            i.skinName = HandBookSkin,
            i.data = t,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this.adaptRightContent(this.grpLevel),
            t.HandBookData.setup(),
            this.updateData().then(function() {
                i.data && i.data.popType && PopViewManager.getInstance().openView(new t.HandbookDetailPop(~~i.data.popType))
            }),
            this.addEvent(),
            this.grpLevel.visible = !GameInfo.isChecking
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.img_pet,
            function() {
                StatLogger.log("20210702版本系统功能", "图鉴系统", "进入精灵图鉴面板人次"),
                ModuleManager.showModule("handbook", ["handbook"], {
                    type: 0
                },
                "HandbookFrame", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.img_skin,
            function() {
                StatLogger.log("20210702版本系统功能", "图鉴系统", "进入皮肤图鉴面板人次"),
                ModuleManager.showModule("handbook", ["handbook"], {
                    type: 1
                },
                "HandbookFrame", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.img_equip,
            function() {
                StatLogger.log("20210702版本系统功能", "图鉴系统", "进入装扮图鉴面板人次"),
                ModuleManager.showModule("handbook", ["handbook"], {
                    type: 2
                },
                "HandbookFrame", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.img_token,
            function() {
                StatLogger.log("20210702版本系统功能", "图鉴系统", "进入刻印图鉴面板人次"),
                ModuleManager.showModule("handbook", ["handbook"], {
                    type: 3
                },
                "HandbookFrame", AppDoStyle.HIDEN)
            },
            this),
            ImageButtonUtil.add(this.grpLevel,
            function() {
                PopViewManager.getInstance().openView(new t.HandbookDetailPop)
            },
            this)
        },
        i.prototype.updateData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, t.HandBookData.updateScore()];
                    case 1:
                        return i.sent(),
                        KTool.getMultiValue([107532, 107533],
                        function(t) {
                            e._totalScore = t[0],
                            e._petNum = t[1],
                            e.updateView()
                        }),
                        [2]
                    }
                })
            })
        },
        i.prototype.updateView = function() {
            for (var e = PetBook.PetBookXMLInfo.getHotspotXml().place, i = 0; 4 > i; i++) this["flag_new_" + i].visible = !1;
            if (e) if (e.length) for (var i = 0; i < e.length; i++) this["flag_new_" + e[i].type].visible = !0;
            else this["flag_new_" + e.type].visible = !0;
            var n = t.HandBookData.getLevelByScore(this._totalScore);
            this.txt_level.text = "LV." + n;
            for (var r = PetSkinController.instance.getInTimePetSkinIDs().length, o = ItemManager.GetHoldClothesIDs("mount").length, a = ItemXMLInfo.getAllCloth(), s = [], h = 0, i = 0; i < a.length; i++) {
                var _ = ~~a[i].ID;
                0 == SuitXMLInfo.getIDForItem(_) && s.push(_)
            }
            for (var u = 0,
            l = s; u < l.length; u++) {
                var c = l[u];
                ItemManager.containsCloth(c) && h++
            }
            var p = ItemManager.GetMySuitIds();
            p = p.filter(function(t) {
                for (var e = SuitXMLInfo.getCloths(t), i = 0, n = e; i < n.length; i++) {
                    var r = n[i];
                    if (!ItemManager.getClothInfo(r)) return ! 1
                }
                return ! 0
            });
            for (var g = p.length,
            d = this.getAllMark(), m = t.HandBookData.myMarkList, f = 0, i = 0; i < d.length; i++) CountermarkXMLInfo.isExclusive(d[i]) || -1 != m.indexOf(d[i]) && f++;
            var y = this._petNum + r + o + h + g + f;
            this.txt_unlockNum.text = "已解锁图鉴条目：" + y
        },
        i.prototype.getAllMark = function() {
            var t = CountermarkXMLInfo.getMap().getValues(),
            e = [];
            for (var i in t) {
                var n = t[i];
                3 == ~~n.Type && 0 == ~~n.MonsterID && e.push(~~n.ID)
            }
            return e
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.Handbook = e,
    __reflect(e.prototype, "handbook.Handbook")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = HandbookRankViewItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this._info = this.data,
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.txt_name.text = this._info.nick,
            this.txt_id.text = this._info.userid + "",
            this.txt_score.text = this._info.score + "",
            this._info.index < 4 ? (this.bg.source = "handbook_rank_view_item_bg_" + this._info.index + "_png", this.img_rank.visible = !0, this.txt_rank.text = "", this.img_rank.source = "handbook_detail_viewstack_img_rank" + this._info.index + "_png") : (this.bg.source = "handbook_rank_view_item_bg_" + (this._info.index % 2 + 4) + "_png", this.img_rank.visible = !1, this.txt_rank.text = this._info.index + "")
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.HandbookRankViewItem = e,
    __reflect(e.prototype, "handbook.HandbookRankViewItem")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = ClothItemRenderSkin,
            t
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            if (this.data) {
                this.visible = !0;
                var e = this.data;
                this.icon.source = ClientConfig.getMarkPath(e);
                var i = CountermarkXMLInfo.getDes(e);
                this.txtName.text = i,
                i.length > 6 && (this.txtName.text = i.substr(0, 5) + "..."),
                this.img_rect.visible = t.HandBookData.myMarkList.indexOf(e) < 0 && !t.isMarkNew
            } else this.visible = !1,
            this.icon.source = null,
            this.txtName.text = "",
            this.img_rect.visible = !1;
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {},
        i
    } (eui.ItemRenderer);
    t.MarkItemRender = e,
    __reflect(e.prototype, "handbook.MarkItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    t.isMarkNew = !1;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.allMarks = [],
            t.currMarks = [],
            t.currType = 0,
            t.arrayColletion = new eui.ArrayCollection([]),
            t.percentWidth = 100,
            t.skinName = BookMarkSkin,
            t.getAllMark(),
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.type),
            this.adaptLeftContent(this.scroller),
            this.adaptRightContent(this.grpRight),
            this.scroller.right = Math.max(DeviceInfoManager.adapterOffSetX, 35),
            this.rb_two.group.selectedValue = 5,
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.MarkItemRender,
            this.list.dataProvider = this.arrayColletion,
            this.rb_two.group.addEventListener(egret.Event.CHANGE, this.updateData, this),
            ImageButtonUtil.add(this.img_btn_search, this.onSearchChanged, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickMark, this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            this.cb_ownless.selected = !1,
            this.updateRank()
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.updateData()
        },
        i.prototype.updateRank = function() {
            var e = this;
            this._myList = t.HandBookData.myMarkList;
            for (var i = 0,
            n = 0; n < this.allMarks.length; n++) CountermarkXMLInfo.isExclusive(this.allMarks[n]) || -1 != this._myList.indexOf(this.allMarks[n]) && i++;
            this.txt_progress.text = "收集进度：" + i + "/" + this.allMarks.length,
            SocketConnection.sendByQueue(41279, [4],
            function(t) {
                var i = t.data,
                n = i.readUnsignedInt();
                e.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.adaptLayout = function() {
            var t = egret.lifecycle.stage.stageWidth - 1136;
            t -= .12 * t,
            20 > t && t > -20 && (t = 0);
            var e = 144,
            i = 15,
            n = 22,
            r = 944,
            o = 6,
            a = Math.floor(t / (e + i));
            this.scroller.width = r + t,
            this.list.width = r + t;
            var s = this.list.layout;
            if (0 != a) {
                s.requestedColumnCount = o + a;
                var h = i + (t - a * (e + i)) / s.requestedColumnCount;
                h = h > n ? n: h,
                s.horizontalGap = h,
                s.verticalGap = s.horizontalGap
            } else s.horizontalGap = i,
            s.requestedColumnCount = o;
            this.list.layout = s
        },
        i.prototype._resize = function() {},
        i.prototype.getAllMark = function() {
            var t = CountermarkXMLInfo.getMap().getValues();
            for (var e in t) {
                var i = t[e];
                3 == ~~i.Type && 0 == ~~i.MonsterID && this.allMarks.push(~~i.ID)
            }
        },
        i.prototype.setData = function() {
            this.currType = ~~t.selectedValue - 1,
            this.grp_progress.visible = 0 == this.currType,
            this.updateData()
        },
        i.prototype.updateData = function() {
            this.arrayColletion.removeAll(),
            this.scroller.stopAnimation(),
            this.scroller.viewport.scrollV = 0;
            var t = this.getCurrMarks();
            for (var e in t)(!this.cb_ownless.selected || this._myList.indexOf(t[e]) < 0) && this.arrayColletion.addItem(t[e]);
            var i = this.arrayColletion.source.length;
            if (8 > i) for (var n = 0; 8 - i > n; n++) this.arrayColletion.addItem(null);
            this.currMarks = t
        },
        i.prototype.getCurrMarks = function() {
            var e = [];
            if (6 == this.currType) {
                t.isMarkNew = !0,
                this.type.visible = !1;
                for (var i = PetBook.PetBookXMLInfo.getHotspotXml().place, n = [], r = 0; r < i.length; r++) 3 == i[r].type && n.push(i[r].ID);
                return n
            }
            t.isMarkNew = !1,
            this.type.visible = !0;
            var o = this.rb_two.group.selectedValue || 5;
            o = ~~o;
            for (var r = 0; r < this.allMarks.length; r++) {
                var a = CountermarkXMLInfo.getMintmarkQuality(this.allMarks[r]),
                s = CountermarkXMLInfo.isExclusive(this.allMarks[r]);
                a != o || s || e.push(this.allMarks[r])
            }
            this.excludeMarks = {};
            var h = this.txtSearch.text.trim();
            h.length > 0 && (e = e.filter(function(t) {
                var e = CountermarkXMLInfo.getDes(t),
                i = CountermarkXMLInfo.getClassNameByMarkId(t),
                n = SearchUtil.isMatch(h, e),
                r = SearchUtil.isMatch(h, i);
                return n || r
            })),
            this.ablitySort(e);
            for (var _ = e.length - 1; _ >= 0; _--) this.excludeMarks[e[_]] && e.splice(_, 1);
            return e
        },
        i.prototype.ablitySort = function(t) {
            var e = this;
            t.sort(function(t, i) {
                for (var n = CountermarkXMLInfo.getMaxAttriValue(t), r = CountermarkXMLInfo.getExtraAttriValue(t), o = CountermarkXMLInfo.getMaxAttriValue(i), a = CountermarkXMLInfo.getExtraAttriValue(i), s = [], h = [], _ = 0; 6 > _; _++) s.push(parseInt(n[_]) + (null == r ? 0 : parseInt(r[_]))),
                h.push(parseInt(o[_]) + (null == a ? 0 : parseInt(a[_])));
                var u, l;
                switch (e.currType) {
                case 0:
                    u = t,
                    l = i;
                    break;
                case 1:
                    u = s[0],
                    l = h[0];
                    break;
                case 2:
                    u = s[2],
                    l = h[2];
                    break;
                case 3:
                    u = s[4],
                    l = h[4];
                    break;
                case 4:
                    u = s[5],
                    l = h[5];
                    break;
                case 5:
                    u = s[1] + s[3],
                    l = h[1] + h[3]
                }
                return 0 != e.currType && (0 == u && (e.excludeMarks[t] = 1), 0 == l && (e.excludeMarks[i] = 1)),
                l - u
            })
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.arrayColletion.removeAll(),
            this.scroller.viewport.scrollV = 0;
            var i = 0;
            if (e.length > 0) {
                var n = !1;
                for (var r in this.currMarks) {
                    var o = CountermarkXMLInfo.getDes(this.currMarks[r]),
                    a = CountermarkXMLInfo.getClassNameByMarkId(this.currMarks[r]); (SearchUtil.isMatch(e, o) || SearchUtil.isMatch(e, a)) && (!this.cb_ownless.selected || this._myList.indexOf(this.currMarks[r]) < 0) && (this.arrayColletion.addItem(this.currMarks[r]), i++, n = !0)
                }
            } else {
                for (var r in this.currMarks)(!this.cb_ownless.selected || this._myList.indexOf(this.currMarks[r]) < 0) && this.arrayColletion.addItem(this.currMarks[r]);
                i = this.currMarks.length
            }
            var s = this.arrayColletion.source.length;
            if (8 > s) for (var h = 0; 8 - s > h; h++) this.arrayColletion.addItem(null)
        },
        i.prototype.onClickMark = function(t) {
            var e = this.list.selectedItem,
            i = {
                ins: e
            };
            tipsPop.TipsPop.openCounterMarkPop(i)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i
    } (t.BaseBookPanel);
    t.MarkPanel = e,
    __reflect(e.prototype, "handbook.MarkPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = AllMonsterItemRenderSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.touched = function(t) {
            ModuleManager.showModule("petManualInfo", ["pet_info_manual"], this.data, "", AppDoStyle.NULL)
        },
        i.prototype.dataChanged = function() {
            if (this.data) {
                this.visible = !0,
                this.icon.visible = t.HandBookData.myPetList[this.data];
                var e = PetXMLInfo.getName(this.data);
                e.length >= 7 ? this.nick.text = e.substr(0, 5) + "...": this.nick.text = e,
                this.id.text = this.data,
                this.head.source = ClientConfig.getPetHeadPath(this.data)
            } else this.visible = !1;
            this.cacheAsBitmap = !0
        },
        i.prototype.destroy = function() {
            this.head.source = null
        },
        i
    } (eui.ItemRenderer);
    t.AllMonsterItemRender = e,
    __reflect(e.prototype, "handbook.AllMonsterItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._order = -1,
            t.percentWidth = 100,
            t.skinName = AllmonsterpanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTab),
            this.adaptLeftContent(this.scroller_item),
            this.adaptRightContent(this.grpRight),
            this.scroller_item.right = DeviceInfoManager.adapterOffSetX,
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.AllMonsterItemRender,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.curpet = PetBook.PetBookXMLInfo.idList,
            this.cb_ownless.selected = !1,
            this.updateRank(),
            this.updatelist(this.curpet),
            this.addEvent()
        },
        i.prototype.updateRank = function() {
            var t = this;
            KTool.getMultiValue([107533],
            function(e) {
                var i = e[0];
                t.txt_progress.text = "收集进度：" + i + "/" + PetBook.PetBookXMLInfo.idList.length
            }),
            SocketConnection.sendByQueue(41279, [3],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.hankVerilayout = function() {
            eui.VerticalLayout.prototype.index = 0;
            var t = eui.VerticalLayout.prototype.updateDisplayListReal;
            eui.VerticalLayout.prototype.updateDisplayListReal = function(e, i) {
                t.call(this, e, i);
                for (var n, r = this.$target.numElements,
                o = this.startIndex; r > o; o++) {
                    if (n = this.$target.getElementAt(o), egret.is(n, eui.UIComponentClass) && n.$includeInLayout) {
                        var a = this;
                        if (!n.$unfirst) {
                            var s = a.index++,
                            h = n.x;
                            n.setLayoutBoundsPosition(this.$target.width, n.y);
                            var _ = {};
                            _.x = this.$target.width,
                            egret.setTimeout(function() {
                                egret.Tween.get(_, {
                                    loop: !1,
                                    onChange: function() {
                                        n.setLayoutBoundsPosition(_.x, n.y)
                                    },
                                    onChangeObj: a
                                }).to({
                                    x: h
                                },
                                200 + 10 * s, egret.Ease.quadOut).call(function() {
                                    n.setLayoutBoundsPosition(h, n.y),
                                    a.index = 0
                                },
                                a),
                                n.$unfirst = !0
                            },
                            a, 200)
                        }
                    }
                }
            }
        },
        i.prototype.hankTileLayout = function() {
            var t = eui.TileLayout.prototype.sizeAndPositionElement;
            eui.TileLayout.prototype.index = 0,
            eui.TileLayout.prototype.sizeAndPositionElement = function(e, i, n, r, o) {
                t.call(this, e, i, n, r, o);
                var a = this;
                if (!e.$unfirst) {
                    var s = a.index++,
                    h = e.y;
                    e.setLayoutBoundsPosition(e.x, 640);
                    var _ = {};
                    _.y = 640,
                    egret.setTimeout(function() {
                        egret.Tween.get(_, {
                            loop: !1,
                            onChange: function() {
                                e.setLayoutBoundsPosition(e.x, _.y)
                            },
                            onChangeObj: a
                        }).to({
                            y: h
                        },
                        200 + 10 * s, egret.Ease.quadOut).call(function() {
                            e.setLayoutBoundsPosition(e.x, h),
                            eui.TileLayout.prototype.sizeAndPositionElement = t,
                            a.index = 0
                        },
                        a),
                        e.$unfirst = !0
                    },
                    a, 200)
                }
            }
        },
        i.prototype.adaptLayout = function() {
            var t = egret.lifecycle.stage.stageWidth - 1136;
            t -= .12 * t,
            20 > t && t > -20 && (t = 0);
            var e = 110,
            i = 28,
            n = 30,
            r = 944,
            o = 7,
            a = Math.floor(t / (e + i));
            this.scroller_item.width = r + t,
            this.list_viewport.width = r + t;
            var s = this.list_viewport.layout;
            if (0 != a) {
                s.requestedColumnCount = o + a;
                var h = i + (t - a * (e + i)) / s.requestedColumnCount;
                h = h > n ? n: h,
                s.horizontalGap = h,
                s.verticalGap = s.horizontalGap
            } else s.horizontalGap = i,
            s.requestedColumnCount = o;
            this.list_viewport.layout = s
        },
        i.prototype._resize = function() {},
        i.prototype.showAnim = function() {
            this.list_viewport.layout;
            this.list_viewport.layout = null
        },
        i.prototype.destroy = function() {
            this.removeEvent(),
            this.txtSearch.parent && this.txtSearch.parent.removeChild(this.txtSearch),
            this.txtSearch = null,
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.onChangeOwn, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.search, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.typeBtn, this.onTouchTapImageButton, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.changeHandle, this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            ImageButtonUtil.add(this.btnOrder,
            function() {
                t._order > 0 ? (t._order = -1, t.btnOrder.source = "all_monster_panel_btnZheng_png", t.updatelist(t.curpet)) : (t._order = 1, t.btnOrder.source = "all_monster_panel_btnOrder_png", t.updatelist(t.curpet))
            },
            this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.onChangeOwn, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.updatelist(this.curpet)
        },
        i.prototype.onChangeOwn = function() {
            this.updatelist(this.curpet)
        },
        i.prototype.itemClick = function(t) {
            PetManager.showPetManualInfo(this.list_viewport.selectedItem, 1)
        },
        i.prototype.changeHandle = function(t) {
            this.doSearch()
        },
        i.prototype.removeEvent = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.changeHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onChangeAttributeIdHanlder = function(t, e) {
            var i = [];
            this.curpet = PetBook.PetBookXMLInfo.idList;
            for (var n = 0; n < this.curpet.length; n++) {
                var r = ~~PetXMLInfo.getType(~~this.curpet[n]),
                o = e; (r == o || 0 == e) && i.push(~~this.curpet[n])
            }
            this.curpet = i,
            this.updatelist(i)
        },
        i.prototype.doSearch = function(t) {
            void 0 === t && (t = !1);
            var e = this.txtSearch.text.trim();
            if (this.curpet = PetBook.PetBookXMLInfo.idList, "" !== e) {
                for (var i = [], n = +e, r = n > 0, o = 0; o < this.curpet.length; o++) r ? this.curpet[o] === n && i.push(this.curpet[o]) : SearchUtil.isMatch(e, PetXMLInfo.getName(parseInt(this.curpet[o]))) && i.push(this.curpet[o]);
                if (0 == i.length && t) return void Alarm.show("没有找到对应精灵，只有输入正确的精灵名称或精灵ID，才能找到它们哦！");
                this.curpet = i
            }
            this.updatelist(this.curpet)
        },
        i.prototype.openSelectAttributePanel = function() {
            var t = {
                callBack: this.onChangeAttributeIdHanlder,
                caller: this,
                selectId: 0,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.typeBtn.localToGlobal(),
                    dir: "left-top",
                    rx: -100,
                    ry: 87
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], t, "", AppDoStyle.NULL)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.typeBtn:
                this.openSelectAttributePanel();
                break;
            case this.search:
                this.doSearch(!0)
            }
        },
        i.prototype.updatelist = function(t) {
            var e = t.concat();
            ArrayUtil.sortOn(e, "", -1 == this._order ? ArrayUtil.DESCENDING: ArrayUtil.ASCENDING),
            this.cb_ownless.selected && (e = e.filter(function(t) {
                return PetManager.getPetsById(t, !0).length ? !1 : PetStorage2015InfoManager.getInfoByID(t).length ? !1 : !0
            }));
            var i = e.length;
            if (7 > i) for (var n = 0; 7 - i > n; n++) e.push(null);
            this.scroller_item.stopAnimation(),
            this._ary.replaceAll(e.concat()),
            this.list_viewport.scrollH = 0,
            this.list_viewport.scrollV = 0
        },
        i.prototype.setData = function() {
            this.list_viewport && (this.curpet = PetBook.PetBookXMLInfo.idList, this.updatelist(this.curpet))
        },
        i
    } (t.BaseBookPanel);
    t.AllMonsterPanel = e,
    __reflect(e.prototype, "handbook.AllMonsterPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "HotMonsterItemRenderSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            var t = this;
            if (!this.data) return void(this.visible = !1);
            this.visible = !0,
            SeerbookCollectionController.getinstance().containskey(this.data.pid) ? this.light.visible = SeerbookCollectionController.getinstance().havePet(this.data.pid) : SeerbookCollectionController.getinstance().getHavePet([this.data.pid],
            function(e) {
                t.light && (t.light.visible = SeerbookCollectionController.getinstance().havePet(t.data.pid))
            });
            for (var e = this.data.TagB,
            i = e.toString().split("|"), n = 1, r = 0, o = i; r < o.length; r++) {
                var a = o[r];
                this["icon" + n].visible = !0,
                this["icon" + n].source = RES.getRes("common_pet_subtag_" + a + "_png"),
                n++
            }
            for (; 3 >= n; n++) this["icon" + n].visible = !1;
            this.nick.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(Number(this.data.pid)), 8),
            this.head.source = ClientConfig.getPetHalfIcon(Number(this.data.pid)),
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            this.icon1.source = null,
            this.icon2.source = null,
            this.icon3.source = null,
            this.head.source = null
        },
        e
    } (eui.ItemRenderer);
    t.HotMonsterItemRender = e,
    __reflect(e.prototype, "handbook.HotMonsterItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.tagA = -1,
            t.tagB = -1,
            t.percentWidth = 100,
            t.skinName = "HotmonsterpanelSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.btnFilter),
            this.adaptLeftContent(this.scroller_item),
            this.adaptRightContent(this.grpRight),
            this.initBtnHelpById(117),
            this.scroller_item.right = Math.max(20, DeviceInfoManager.adapterOffSetX),
            this.list_viewport.itemRenderer = t.HotMonsterItemRender,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.cb_ownless.selected = !1,
            this.addEvent(),
            this._curpet = [],
            this._curpet = this._curpet.concat(PetBook.PetBookXMLInfo.getHotPetXml()),
            this._ary.source = [].concat(this._curpet)
        },
        i.prototype.setData = function() {
            StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "通过精灵图鉴进入“热门”子面板"),
            this.tagA = -1,
            this.tagB = -1,
            this.btnFilter.source = "handbook_select_png",
            this.txtSearch.text = "",
            this.cb_ownless.selected = !1,
            this.updatelist(this._curpet)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnFilter,
            function() {
                PopViewManager.getInstance().openView(new t.HotmonsterFilterPop([e.tagA, e.tagB]))
            },
            this),
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            this.searchFunc = core.gameUtil.DeBounce(function() {
                e.doSearch(!0)
            },
            this, 50),
            ImageButtonUtil.add(this.search, this.searchFunc, this),
            this.txtSearchFunc = core.gameUtil.DeBounce(this.changeHandle, this, 50),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.txtSearchFunc, this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.onChangeOwn, this),
            EventManager.addEventListener("UPDATE_HOTPET_TAG",
            function(t) {
                StatLogger.log("20221216版本系统功能", "精灵职能筛选管理", "点击“热门”子面板中的筛选按钮"),
                e.tagA = t.data[0],
                e.tagB = t.data[1],
                e.doFilter(),
                e.tagA <= 0 && e.tagB <= 0 ? e.btnFilter.source = "handbook_select_png": e.btnFilter.source = "handbook_select1_png"
            },
            this)
        },
        i.prototype.changeHandle = function(t) {
            this.doSearch()
        },
        i.prototype.onChangeOwn = function() {
            this.updatelist(this._curpet)
        },
        i.prototype.itemClick = function(t) {
            PetManager.showPetManualInfo(this.list_viewport.selectedItem.pid, 1)
        },
        i.prototype.removeEvent = function() {
            this.txtSearch.removeEventListener(egret.Event.CHANGE, this.txtSearchFunc, this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.onChangeOwn, this),
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            EventManager.removeAll(this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.destroy = function() {
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i.prototype.updatelist = function(t) {
            var e = [];
            e = e.concat(t),
            this.cb_ownless.selected && (e = e.filter(function(t) {
                return PetManager.getPetsById(t.pid, !0).length ? !1 : PetStorage2015InfoManager.getInfoByID(t.pid).length ? !1 : !0
            }));
            var i = e.length;
            if (7 > i) for (var n = 0; 5 - i > n; n++) e.push(null);
            this.scroller_item.stopAnimation(),
            this._ary.replaceAll(e.concat()),
            this.list_viewport.scrollH = 0,
            this.list_viewport.scrollV = 0
        },
        i.prototype.doFilter = function() {
            for (var t = [], e = [], i = [], n = 0, r = this._curpet; n < r.length; n++) {
                var o = r[n],
                a = parseInt(o.TagA),
                s = o.TagB.toString().split("|");
                if (this.checkIncludeTag(a, this.tagA)) {
                    var h = this.trans2TagNum(s),
                    _ = this.getTagSimilarity(h, this.tagB);
                    _ >= 3 ? t.push(o) : 2 == _ ? e.push(o) : 1 == _ && i.push(o)
                }
            }
            t = t.concat(e),
            t = t.concat(i),
            0 == t.length && BubblerManager.getInstance().showText("暂时没有对应的精灵哦！"),
            this.updatelist(t)
        },
        i.prototype.doSearch = function(t) {
            void 0 === t && (t = !1);
            var e = this.txtSearch.text.trim();
            if ("" !== e) {
                for (var i = [], n = +e, r = n > 0, o = 0; o < this._curpet.length; o++) r ? this._curpet[o].pid === n && i.push(this._curpet[o]) : SearchUtil.isMatch(e, PetXMLInfo.getName(parseInt(this._curpet[o].pid))) && i.push(this._curpet[o]);
                0 == i.length && t && Alarm.show("暂时没有对应的精灵哦！")
            }
            this.updatelist(i)
        },
        i.prototype.checkIncludeTag = function(t, e) {
            return 0 >= e ? !0 : 0 != (1 << t & e)
        },
        i.prototype.trans2TagNum = function(t) {
            for (var e = 0,
            i = 0,
            n = t; i < n.length; i++) {
                var r = n[i];
                e += 1 << parseInt(r)
            }
            return e
        },
        i.prototype.getTagSimilarity = function(t, e) {
            if (0 >= e) return 1;
            for (var i = t & e,
            n = 0; i > 0;) i % 2 == 1 && n++,
            i = Math.floor(i / 2);
            return n
        },
        i
    } (t.BaseBookPanel);
    t.HotMonsterPanel = e,
    __reflect(e.prototype, "handbook.HotMonsterPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = NewMonsterItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            if (this.data) if (this.visible = !0, this.newsp.visible = this.newskin.visible = !1, this.flag.visible = !1, this.head.source = ClientConfig.getPetHalfIcon(Number(this.data.ID)), 0 == Number(this.data.type)) this.nick.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(Number(this.data.ID)), 8),
            this.newsp.visible = !0;
            else {
                this.newskin.visible = !0,
                this.flag.visible = !0;
                var t = String(this.data.ID);
                this.nick.text = StringUtil.parseStrLimitLen(PetSkinXMLInfo.getSkinInfo( + t).name, 8)
            } else this.visible = !1;
            this.cacheAsBitmap = !0
        },
        e.prototype.destroy = function() {
            this.head.source = null
        },
        e
    } (eui.ItemRenderer);
    t.NewMonsterItemRender = e,
    __reflect(e.prototype, "handbook.NewMonsterItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.percentWidth = 100,
            t.skinName = NewmonsterpanelSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.scroller_item),
            this.scroller_item.right = DeviceInfoManager.adapterOffSetX,
            this.scroller_item.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.NewMonsterItemRender,
            this._ary = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._ary,
            this.list_viewport.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            this.hots = PetBook.PetBookXMLInfo.getWeekHotPets(),
            this.hots instanceof Array ? this.hots = this.hots.filter(function(t) {
                return t.type < 1
            }) : this.hots = [this.hots],
            this.updatelist(this.hots.concat()),
            this.updateRank()
        },
        i.prototype.updateRank = function() {
            var t = this;
            KTool.getMultiValue([107533],
            function(e) {
                var i = e[0];
                t.txt_progress.text = "收集进度：" + i + "/" + PetBook.PetBookXMLInfo.idList.length,
                t._bar.maximum = PetBook.PetBookXMLInfo.idList.length,
                t._bar.value = i
            }),
            SocketConnection.sendByQueue(41279, [3],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%"
            })
        },
        i.prototype.itemClick = function(t) {
            PetManager.showPetManualInfo(this.list_viewport.selectedItem.ID, 1)
        },
        i.prototype.updatelist = function(t) {
            var e = t.length;
            if (5 > e) for (var i = 0; 5 - e > i; i++) t.push(null);
            this._ary.replaceAll(t.concat())
        },
        i.prototype.setData = function() {},
        i.prototype.destroy = function() {
            this.list_viewport.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            e.prototype.destroy.call(this)
        },
        i
    } (t.BaseBookPanel);
    t.NewMonsterPanel = e,
    __reflect(e.prototype, "handbook.NewMonsterPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.type = 1,
            i.type = e,
            i.skinName = HandbookDetailPopSkin,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.rbg_major = this.rb_0.group,
            this.rbg_minor = this.tab_0.group,
            this.grpTab.visible = !1,
            this.rbg_major.selectedValue = this.type ? this["rb_" + (this.type - 1)].value: this.rb_0.value,
            this.onChangeRb(),
            this.rbg_major.addEventListener(egret.Event.CHANGE, this.onChangeRb, this),
            this.rbg_minor.addEventListener(egret.Event.CHANGE, this.updateView, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this)
        },
        e.prototype.onChangeRb = function() {
            var t = this,
            e = ~~this.rbg_major.selectedValue || this.type;
            if (3 == e) {
                this.grpTab.visible = !0;
                for (var i = [], n = egret.Ease.quadOut, r = 0; r < this.grpTab.numChildren; r++) {
                    var o = this.grpTab.getChildAt(r),
                    a = 42 * r;
                    o.y = -o.height,
                    i.push(egret.Tween.get(o).to({
                        y: a
                    },
                    200 + 50 * r, n))
                }
                var s = (h = common.TweenUtil).createAllTween.apply(h, i);
                Promise.all(s).then(function() {
                    t.grpTab.visible = !0
                }),
                this.rbg_minor.selectedValue = "1"
            } else if (this.grpTab.visible) {
                for (var i = [], n = egret.Ease.quadIn, r = 0; r < this.grpTab.numChildren; r++) {
                    var o = this.grpTab.getChildAt(r),
                    a = -o.height;
                    i.push(egret.Tween.get(o).to({
                        y: a
                    },
                    200, n))
                }
                var s = (_ = common.TweenUtil).createAllTween.apply(_, i);
                Promise.all(s).then(function() {
                    t.grpTab.visible = !1
                })
            }
            this.updateView();
            var h, _
        }, e.prototype.updateView = function() {
            var t = ~~this.rbg_major.selectedValue || this.type;
            this._viewStack.selectedIndex = t - 1,
            3 == t && this._viewStack.selectedChild.updateRank(~~this.rbg_minor.selectedValue || 1)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.rbg_major.removeEventListener(egret.Event.CHANGE, this.onChangeRb, this),
            this.rbg_minor.removeEventListener(egret.Event.CHANGE, this.updateView, this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.HandbookDetailPop = e,
    __reflect(e.prototype, "handbook.HandbookDetailPop")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.skinName = "HotmonsterFilterPopSkin",
            i._initTags = e,
            i
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            if (t.prototype.childrenCreated.call(this), this._tagA = this._initTags[0], this._tagB = this._initTags[1], this._tagA > 0) for (var i = 1; 3 >= i; i++) 1 == KTool.getBit(this._tagA, i + 1) && this.setEnable(this["tagA_" + i], !0);
            if (this._tagB > 0) for (var i = 0; 6 >= i; i++) 1 == KTool.getBit(this._tagB, i + 1) && this.setEnable(this["tagB_" + i], !0);
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnEnsure,
            function() {
                EventManager.dispatchEventWith("UPDATE_HOTPET_TAG", !0, [e.tagA, e.tagB]),
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnReset,
            function() {
                e.tagA = -1,
                e.tagB = -1
            },
            this);
            for (var n = function(t) {
                r["tagA_" + t] && ImageButtonUtil.add(r["tagA_" + t],
                function() {
                    var i = t;
                    e.tagA = i
                },
                r),
                r["tagB_" + t] && ImageButtonUtil.add(r["tagB_" + t],
                function() {
                    var i = t;
                    e.tagB = i
                },
                r)
            },
            r = this, i = 0; 10 >= i; i++) n(i)
        },
        Object.defineProperty(e.prototype, "tagA", {
            get: function() {
                return this._tagA
            },
            set: function(t) {
                if (0 > t) {
                    this._tagA = -1;
                    for (var e = 1; 10 >= e && this["tagA_" + e]; e++) this.setEnable(this["tagA_" + e], !1)
                } else this._tagA < 0 && (this._tagA = 0),
                this._tagA = this._tagA ^ 1 << t,
                this.setEnable(this["tagA_" + t], 0 != (1 << t & this.tagA))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "tagB", {
            get: function() {
                return this._tagB
            },
            set: function(t) {
                if (0 > t) {
                    this._tagB = -1;
                    for (var e = 0; 10 >= e && this["tagB_" + e]; e++) this.setEnable(this["tagB_" + e], !1)
                } else this._tagB < 0 && (this._tagB = 0),
                this._tagB = this._tagB ^ 1 << t,
                this.setEnable(this["tagB_" + t], 0 != (1 << t & this.tagB))
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setEnable = function(t, e) {
            t && (e ? (t.getChildAt(0).source = "handbook_filterbtn1_png", t.getChildAt(1).textColor = 16777215) : (t.getChildAt(0).source = "handbook_filterbtn2_png", t.getChildAt(1).textColor = 11520251))
        },
        e.prototype.checkIncludeTag = function(t, e) {
            return 0 >= e ? !0 : 0 != (1 << t & e)
        },
        e
    } (PopView);
    t.HotmonsterFilterPop = e,
    __reflect(e.prototype, "handbook.HotmonsterFilterPop")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HotMonsterItemRenderSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.icon.x = 0
        },
        i.prototype.dataChanged = function() {
            if (this.head.source = null, this.data) {
                this.visible = !0;
                var e = this.data;
                this.icon.visible && (0 == e.type || void 0 == e.type ? this.icon.source = "common_pet_skin_icon_NaN_png": this.icon.source = "common_pet_skin_icon_" + e.type + "_png"),
                this.nick.text = StringUtil.parseStrLimitLen(e.name, 8),
                this.icon.scaleX = this.icon.scaleY = .5,
                this.head.source = ClientConfig.getPetHalfIcon(14e5 + e.id);
                var i = PetSkinController.instance.getAllPetSkinIDs();
                this.img_rect.visible = i.indexOf(e.id) < 0 && 5 != t.SkinPanelCurType
            } else this.visible = !1;
            this.cacheAsBitmap = !0
        },
        i
    } (eui.ItemRenderer);
    t.SkinItemRender = e,
    __reflect(e.prototype, "handbook.SkinItemRender")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    t.SkinPanelCurType = 0;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.currType = 0,
            t.arrayColletion = new eui.ArrayCollection([]),
            t.percentWidth = 100,
            t.skinName = BookSkinSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.scroller),
            this.adaptRightContent(this.grpRight),
            this.scroller.right = DeviceInfoManager.adapterOffSetX > 20 ? DeviceInfoManager.adapterOffSetX: 20,
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.SkinItemRender,
            this.list.dataProvider = this.arrayColletion,
            this.cb_ownless.selected = !1,
            ImageButtonUtil.add(this.img_btn_search, this.onSearchChanged, this),
            (0 == GameInfo.platform || GameInfo.isApp) && this.txtSearch.addEventListener(egret.Event.CHANGE, this.onSearchChanged, this),
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickCloth, this),
            this.cb_ownless.addEventListener(egret.Event.CHANGE, this.updateData, this),
            this.txt_notgot.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this),
            this.updateRank()
        },
        i.prototype.onTouchNotGot = function() {
            this.cb_ownless.selected = !this.cb_ownless.selected,
            this.updateData()
        },
        i.prototype.updateRank = function() {
            var t = this,
            e = PetSkinController.instance.getInTimePetSkinIDs(),
            i = PetSkinXMLInfo.getAllSkin();
            this.txt_progress.text = "收集进度：" + e.length + "/" + i.length,
            SocketConnection.sendByQueue(41279, [8],
            function(e) {
                var i = e.data,
                n = i.readUnsignedInt();
                t.txt_rank.text = "当前排名：" + n / 100 + "%",
                t.grp_progress.cacheAsBitmap = !0
            })
        },
        i.prototype.adaptLayout = function() {},
        i.prototype.setData = function() {
            this.currType = t.selectedValue - 1,
            t.SkinPanelCurType = this.currType,
            this.updateData()
        },
        i.prototype.updateData = function() {
            if (this.arrayColletion.removeAll(), this.scroller.stopAnimation(), this.scroller.viewport.scrollV = 0, this.grpRight.visible = 5 != this.currType, this.grp_progress.visible = 0 == this.currType, 5 == this.currType) {
                var t = PetBook.PetBookXMLInfo.getHotspotXml().place;
                if (t && t instanceof Array) for (var e = 0,
                i = t; e < i.length; e++) {
                    var n = i[e];
                    if (1 == n.type) {
                        var r = PetSkinXMLInfo.getSkinInfo(n.ID);
                        this.arrayColletion.addItem(r)
                    }
                } else if (t && 1 == t.type) {
                    var r = PetSkinXMLInfo.getSkinInfo(t.ID);
                    this.arrayColletion.addItem(r)
                }
            } else {
                var o = this.getAllSkinByType();
                this.arrayColletion.replaceAll(o)
            }
            var a = this.arrayColletion.source.length;
            if (5 > a) for (var s = 0; 5 - a > s; s++) this.arrayColletion.addItem(null)
        },
        i.prototype.getAllSkinByType = function() {
            var t = [],
            e = [],
            i = PetSkinXMLInfo.getAllSkin();
            return ArrayUtil.sortOn(i, "id", ArrayUtil.DESCENDING),
            t = this.getHasSkin(i),
            0 == this.currType ? e = t: 1 == this.currType ? e = t.filter(function(t) {
                return ! t.type
            }) : 2 == this.currType ? e = t.filter(function(t) {
                return 2 == t.type
            }) : 3 == this.currType ? e = t.filter(function(t) {
                return 3 == t.type
            }) : 4 == this.currType && (e = t.filter(function(t) {
                return 4 == t.type || 5 == t.type || 6 == t.type || 7 == t.type || 8 == t.type || 9 == t.type || 11 == t.type || 12 == t.type || 13 == t.type || 14 == t.type || 15 == t.type || 16 == t.type || 17 == t.type || 18 == t.type
            })),
            e
        },
        i.prototype.getHasSkin = function(t) {
            var e = this,
            i = [],
            n = PetSkinController.instance.getAllPetSkinIDs();
            return i = t.filter(function(t) {
                return e.cb_ownless.selected ? n.indexOf(t.id) < 0 : !0
            })
        },
        i.prototype.onSearchChanged = function(t) {
            var e = this.txtSearch.text.trim();
            this.scroller.viewport.scrollV = 0;
            var i = this.getAllSkinByType();
            if (e.length > 0) {
                var n = i.filter(function(t) {
                    return SearchUtil.isMatch(e, t.name)
                });
                this.arrayColletion.replaceAll(n);
                var r = n.length;
                if (5 > r) for (var o = 0; 5 - r > o; o++) this.arrayColletion.addItem(null)
            } else this.updateData()
        },
        i.prototype.onClickCloth = function(t) {
            var e = this.list.selectedItem;
            PetManager.showPetManualInfo(e.id, 2)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.cb_ownless.removeEventListener(egret.Event.CHANGE, this.updateData, this),
            this.txt_notgot.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchNotGot, this)
        },
        i
    } (t.BaseBookPanel);
    t.SkinPanel = e,
    __reflect(e.prototype, "handbook.SkinPanel")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandbookAwardViewSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._list.itemRenderer = t.HandbookAwardViewItem,
            t.HandBookData.updateAwardAttr(function() {
                i._list.dataProvider = new eui.ArrayCollection(t.HandBookData.getLevelList()),
                i.validateNow();
                var e = t.HandBookData.getLevelByScore(t.HandBookData.myScore),
                n = 81 * (e - 1) - egret.lifecycle.stage.stageHeight / 2 + 38;
                i._scr.viewport.scrollV = Math.min(Math.max(0, n), i._scr.viewport.contentHeight)
            },
            this)
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.HandbookAwardView = e,
    __reflect(e.prototype, "handbook.HandbookAwardView")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandbookLevelViewSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            KTool.getMultiValue([107532],
            function(e) {
                t._totalScore = e[0],
                t.updateView()
            })
        },
        i.prototype.updateView = function() {
            var e = t.HandBookData.getLevelByScore(this._totalScore);
            this.txt_level.text = e + "";
            var i = t.HandBookData.getLevelInfo(e + 1);
            this.txt_score.text = this._totalScore + "/" + i.ExpNeed,
            this._bar.maximum = i.ExpNeed,
            this._bar.value = this._totalScore
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.HandbookLevelView = e,
    __reflect(e.prototype, "handbook.HandbookLevelView")
} (handbook || (handbook = {}));
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
handbook; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = HandbookAwardViewItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            EventManager.addEventListener("hand_book_award_update", this.updateView, this)
        },
        i.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this._levelInfo = this.data,
            this._awardInfo = t.HandBookData.getAwardInfo(this._levelInfo.RewardID),
            this.initView(),
            this.updateView()
        },
        i.prototype.initView = function() {
            var e = this;
            this.txt_level.text = "LV." + this._levelInfo.ID;
            var i = this._awardInfo.Item,
            n = this._awardInfo.Monster,
            r = this._awardInfo.Mintmark,
            o = this._awardInfo.ach,
            a = this._awardInfo.Skin,
            s = this._awardInfo.Head,
            h = this._awardInfo.HeadFrame;
            this.item_0.visible = this.item_1.visible = this.item_2.visible = !0;
            var _ = 0;
            if (ImageButtonUtil.removeAll(this), i) if (i instanceof Array) for (var u = function(t) {
                l["icon_" + _].source = ClientConfig.getItemIcon(i[t].ID),
                l["txt_num_" + _].text = i[t].Count + "",
                ImageButtonUtil.add(l["icon_" + _],
                function() {
                    var e = {};
                    e.id = i[t].ID,
                    tipsPop.TipsPop.openItemPop(e)
                },
                l),
                _++
            },
            l = this, c = 0; c < i.length; c++) u(c);
            else this["icon_" + _].source = ClientConfig.getItemIcon(i.ID),
            this["txt_num_" + _].text = i.Count + "",
            ImageButtonUtil.add(this["icon_" + _],
            function() {
                var t = {};
                t.id = i.ID,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            _++;
            if (n) if (n instanceof Array) for (var p = function(t) {
                g["icon_" + _].source = ClientConfig.getPetHeadPath(n[t].ID),
                g["txt_num_" + _].text = n[t].Lv + "",
                ImageButtonUtil.add(g["icon_" + _],
                function() {
                    AwardManager.ShowTmpPetDiaolg(n[t].ID)
                },
                g),
                _++
            },
            g = this, c = 0; c < n.length; c++) p(c);
            else this["icon_" + _].source = ClientConfig.getPetHeadPath(n.ID),
            this["txt_num_" + _].text = n.Lv,
            ImageButtonUtil.add(this["icon_" + _],
            function() {
                AwardManager.ShowTmpPetDiaolg(n.ID)
            },
            this),
            _++;
            if (r) if (r instanceof Array) for (var d = function(t) {
                m["icon_" + _].source = ClientConfig.getMarkPath(r[t].ID),
                m["txt_num_" + _].text = r[t].Count + "",
                ImageButtonUtil.add(m["icon_" + _],
                function() {
                    var e = {};
                    e.ins = r[t].ID,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                },
                m),
                _++
            },
            m = this, c = 0; c < r.length; c++) d(c);
            else this["icon_" + _].source = ClientConfig.getMarkPath(r.ID),
            this["txt_num_" + _].text = r.Count + "",
            ImageButtonUtil.add(this["icon_" + _],
            function() {
                var t = {};
                t.ins = r.ID,
                tipsPop.TipsPop.openCounterMarkPop(t)
            },
            this),
            _++;
            if (o) if (o instanceof Array) for (var f = function(t) {
                y["icon_" + _].source = "achieve_title_icon_png",
                y["txt_num_" + _].text = "",
                ImageButtonUtil.add(y["icon_" + _],
                function() {
                    var e = {},
                    i = AchieveXMLInfo.getRule(o[t].BranchID, o[t].RuleID);
                    e.SpeNameBonus = i.SpeNameBonus,
                    tipsPop.TipsPop.openTitlePop(e)
                },
                y),
                _++
            },
            y = this, c = 0; c < o.length; c++) f(c);
            else this["icon_" + _].source = "achieve_title_icon_png",
            this["txt_num_" + _].text = "",
            ImageButtonUtil.add(this["icon_" + _],
            function() {
                var t = {},
                e = AchieveXMLInfo.getRule(o.BranchID, o.RuleID);
                t.SpeNameBonus = e.SpeNameBonus,
                tipsPop.TipsPop.openTitlePop(t)
            },
            this),
            _++;
            if (a) if (a instanceof Array) for (var w = function(t) {
                v["icon_" + _].source = ClientConfig.getPetHeadPath(PetSkinXMLInfo.getSkinInfo(a[t].ID).skinPetId),
                v["txt_num_" + _].text = "1",
                ImageButtonUtil.add(v["icon_" + _],
                function() {
                    AwardManager.ShowTmpPetSkinDiaolg(PetSkinXMLInfo.getSkinInfo(a[t].ID))
                },
                v),
                _++
            },
            v = this, c = 0; c < a.length; c++) w(c);
            else this["icon_" + _].source = ClientConfig.getPetHeadPath(PetSkinXMLInfo.getSkinInfo(a.ID).skinPetId),
            this["txt_num_" + _].text = "1",
            ImageButtonUtil.add(this["icon_" + _],
            function() {
                AwardManager.ShowTmpPetSkinDiaolg(PetSkinXMLInfo.getSkinInfo(a.ID))
            },
            this),
            _++;
            if (s) if (s instanceof Array) for (var b = function(t) {
                var e = config.Profilephoto.getItem(s[t].ID);
                x["icon_" + _].source = ClientConfig.GetAvatarHead(e.icon),
                x["txt_num_" + _].text = "1",
                ImageButtonUtil.add(x["icon_" + _],
                function() {
                    BubblerManager.getInstance().showText(s[t].Name)
                },
                x),
                _++
            },
            x = this, c = 0; c < s.length; c++) b(c);
            else {
                var k = config.Profilephoto.getItem(s.ID);
                this["icon_" + _].source = ClientConfig.GetAvatarHead(k.icon),
                this["txt_num_" + _].text = "1",
                ImageButtonUtil.add(this["icon_" + _],
                function() {
                    BubblerManager.getInstance().showText(s.Name)
                },
                this),
                _++
            }
            if (h) if (h instanceof Array) for (var I = function(t) {
                var e = config.Profilephoto.getItem(h[t].ID);
                S["icon_" + _].source = ClientConfig.GetAvatarFrame(e.icon),
                S["txt_num_" + _].text = "1",
                ImageButtonUtil.add(S["icon_" + _],
                function() {
                    BubblerManager.getInstance().showText(h[t].Name)
                },
                S),
                _++
            },
            S = this, c = 0; c < h.length; c++) I(c);
            else {
                var k = config.Profilephoto.getItem(h.ID);
                this["icon_" + _].source = ClientConfig.GetAvatarFrame(k.icon),
                this["txt_num_" + _].text = "1",
                ImageButtonUtil.add(this["icon_" + _],
                function() {
                    BubblerManager.getInstance().showText(h.Name)
                },
                this),
                _++
            }
            for (var c = _; 3 > c; c++) this["item_" + c].visible = !1;
            ImageButtonUtil.add(this.btnGet,
            function() {
                2 == e._awardInfo.Type ? PopViewManager.getInstance().openView(new t.HandBookSelectPanel, null, e._levelInfo.ID) : SocketConnection.sendByQueue(41278, [e._levelInfo.ID, 0],
                function() {
                    t.HandBookData.updateAwardAttr()
                })
            },
            this)
        },
        i.prototype.updateView = function() {
            this.bg.source = (this.itemIndex + 1) % 5 == 0 ? "handbook_award_view_item_bg1_png": "handbook_award_view_item_bg_png";
            var e = t.HandBookData.getAwardState(this._levelInfo);
            e ? (this.btnGet.visible = !1, this.flag_got.visible = !0) : t.HandBookData.myScore >= this._levelInfo.ExpNeed ? (this.btnGet.visible = !0, this.flag_got.visible = !1, DisplayUtil.setEnabled(this.btnGet, !0)) : (this.btnGet.visible = !0, this.flag_got.visible = !1, DisplayUtil.setEnabled(this.btnGet, !1))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("hand_book_award_update", this.updateView, this)
        },
        i
    } (eui.ItemRenderer);
    t.HandbookAwardViewItem = e,
    __reflect(e.prototype, "handbook.HandbookAwardViewItem")
} (handbook || (handbook = {}));
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
generateEUI.paths["resource/eui_skins/AllMonsterItemRenderSkin.exml"] = window.AllMonsterItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["headBg", "head", "icon", "nick", "id", "img_rect"],
        this.height = 136,
        this.width = 111,
        this.elementsContent = [this.headBg_i(), this.head_i(), this.icon_i(), this.nick_i(), this.id_i(), this.img_rect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.headBg_i = function() {
        var t = new eui.Image;
        return this.headBg = t,
        t.height = 136,
        t.scale9Grid = new egret.Rectangle(35, 44, 35, 43),
        t.source = "common_pet_head_bg_png",
        t.width = 111,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 104,
        t.visible = !0,
        t.width = 105,
        t.x = 2.5,
        t.y = 2,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "AllMonsterPanel_icon_png",
        t.visible = !0,
        t.x = -2,
        t.y = -3,
        t
    },
    i.nick_i = function() {
        var t = new eui.Label;
        return this.nick = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = .5,
        t.size = 16,
        t.text = "精灵名字最多",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.y = 110,
        t
    },
    i.id_i = function() {
        var t = new eui.Label;
        return this.id = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1320013,
        t.text = "3211",
        t.textColor = 16777215,
        t.x = 4,
        t.y = 4,
        t
    },
    i.img_rect_i = function() {
        var t = new eui.Image;
        return this.img_rect = t,
        t.source = "all_monster_panel_item_mask_png",
        t.visible = !1,
        t.x = 2,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AllmonsterpanelSkin.exml"] = window.AllmonsterpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["typeBtn", "btnOrder", "grpTab", "txtbg", "search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "txtSearch", "grpRight", "list_viewport", "scroller_item"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpTab_i(), this.grpRight_i(), this.scroller_item_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.grpTab_i = function() {
        var t = new eui.Group;
        return this.grpTab = t,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.typeBtn_i(), this.btnOrder_i()],
        t
    },
    r.typeBtn_i = function() {
        var t = new eui.Image;
        return this.typeBtn = t,
        t.source = "AllMonsterPanel_typeBtn_png",
        t.visible = !0,
        t.x = 140,
        t.y = 0,
        t
    },
    r.btnOrder_i = function() {
        var t = new eui.Image;
        return this.btnOrder = t,
        t.height = 33,
        t.source = "all_monster_panel_btnZheng_png",
        t.visible = !0,
        t.width = 101,
        t.x = 0,
        t.y = 0,
        t
    },
    r.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 1,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this._Group1_i(), this.txtSearch_i()],
        t
    },
    r.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.height = 57,
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    r.search_i = function() {
        var t = new eui.Image;
        return this.search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 342.77,
        t.y = 28,
        t
    },
    r.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未获得",
        t.textColor = 5008299,
        t.x = 99.77,
        t.y = 34,
        t
    },
    r.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 158.36,
        t.y = 31,
        t.skinName = i,
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    r.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    r.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    r.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入精灵名或ID",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 210.771,
        t.y = 35,
        t.skinName = n,
        t
    },
    r.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 527,
        t.left = 171,
        t.right = 5,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_viewport_i(),
        t
    },
    r.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 500,
        t.width = 960,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 20,
        t.orientation = "rows",
        t.verticalGap = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/avatar/AvatarMountsSkin.exml"] = window.AvatarMountsSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtbg", "txtSearch", "img_btn_search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "grp_progress", "grpRight", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpRight_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 0,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this.txtSearch_i(), this.img_btn_search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this.grp_progress_i()],
        t
    },
    r.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    r.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入装扮名",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 193,
        t.y = 35,
        t.skinName = i,
        t
    },
    r.img_btn_search_i = function() {
        var t = new eui.Image;
        return this.img_btn_search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 325,
        t.y = 28,
        t
    },
    r.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 92,
        t.y = 34,
        t
    },
    r.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 150,
        t.y = 31,
        t.skinName = n,
        t
    },
    r.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    r.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    r.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    r.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 472,
        t.left = 153,
        t.right = 0,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_i(),
        t
    },
    r.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 497,
        t.width = 944,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 0,
        t.orientation = "rows",
        t.verticalGap = 13,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/avatar/AvatarPartSkin.exml"] = window.AvatarPartSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtbg", "txtSearch", "img_btn_search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "grp_progress", "grpRight", "list", "scroller", "rb_all", "rb_head", "rb_face", "rb_hand", "rb_waist", "rb_feet", "parts"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpRight_i(), this.scroller_i(), this.parts_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatartop_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatartop_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatarhead_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatarhead_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatarface_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatarface_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatarhand_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatarhand_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    h = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatarwaist_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatarwaist_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    _ = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatarfeet_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatarfeet_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    u = e.prototype;
    return u.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 0,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this.txtSearch_i(), this.img_btn_search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this.grp_progress_i()],
        t
    },
    u.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    u.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入装扮名",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 193,
        t.y = 35,
        t.skinName = i,
        t
    },
    u.img_btn_search_i = function() {
        var t = new eui.Image;
        return this.img_btn_search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 325,
        t.y = 28,
        t
    },
    u.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 92,
        t.y = 34,
        t
    },
    u.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 150,
        t.y = 31,
        t.skinName = n,
        t
    },
    u.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    u._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    u.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    u.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    u.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 523,
        t.left = 176,
        t.right = 35,
        t.scrollPolicyH = "off",
        t.y = 117,
        t.viewport = this.list_i(),
        t
    },
    u.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 500,
        t.width = 942,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    u._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 20,
        t.orientation = "rows",
        t.verticalGap = 13,
        t
    },
    u.parts_i = function() {
        var t = new eui.Group;
        return this.parts = t,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_all_i(), this.rb_head_i(), this.rb_face_i(), this.rb_hand_i(), this.rb_waist_i(), this.rb_feet_i()],
        t
    },
    u.rb_all_i = function() {
        var t = new eui.RadioButton;
        return this.rb_all = t,
        t.groupName = "avatar_part_tab",
        t.selected = !0,
        t.value = "all",
        t.x = 0,
        t.y = 0,
        t.skinName = r,
        t
    },
    u.rb_head_i = function() {
        var t = new eui.RadioButton;
        return this.rb_head = t,
        t.groupName = "avatar_part_tab",
        t.selected = !1,
        t.value = "head",
        t.x = 100,
        t.y = 0,
        t.skinName = o,
        t
    },
    u.rb_face_i = function() {
        var t = new eui.RadioButton;
        return this.rb_face = t,
        t.groupName = "avatar_part_tab",
        t.value = "eye",
        t.x = 201,
        t.y = 0,
        t.skinName = a,
        t
    },
    u.rb_hand_i = function() {
        var t = new eui.RadioButton;
        return this.rb_hand = t,
        t.groupName = "avatar_part_tab",
        t.value = "hand",
        t.x = 301,
        t.y = 0,
        t.skinName = s,
        t
    },
    u.rb_waist_i = function() {
        var t = new eui.RadioButton;
        return this.rb_waist = t,
        t.groupName = "avatar_part_tab",
        t.value = "waist",
        t.x = 402,
        t.y = 0,
        t.skinName = h,
        t
    },
    u.rb_feet_i = function() {
        var t = new eui.RadioButton;
        return this.rb_feet = t,
        t.groupName = "avatar_part_tab",
        t.value = "foot",
        t.x = 502,
        t.y = 0,
        t.skinName = _,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/avatar/AvatarSuitSkin.exml"] = window.AvatarSuitSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtbg", "txtSearch", "img_btn_search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "grp_progress", "grpRight", "rb_suit0", "rb_suit1", "rb_suit2", "rb_suit3", "type", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpRight_i(), this.type_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatartop_down_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "book_avatartop_up_png",
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
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit3_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit3_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit2_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit2_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit1_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_avatar_suitsuit1_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 0,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this.txtSearch_i(), this.img_btn_search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this.grp_progress_i()],
        t
    },
    h.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    h.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入装扮名",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 193,
        t.y = 35,
        t.skinName = i,
        t
    },
    h.img_btn_search_i = function() {
        var t = new eui.Image;
        return this.img_btn_search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 325,
        t.y = 28,
        t
    },
    h.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 92,
        t.y = 34,
        t
    },
    h.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 150,
        t.y = 31,
        t.skinName = n,
        t
    },
    h.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    h.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    h.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    h.type_i = function() {
        var t = new eui.Group;
        return this.type = t,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_suit0_i(), this.rb_suit1_i(), this.rb_suit2_i(), this.rb_suit3_i()],
        t
    },
    h.rb_suit0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_suit0 = t,
        t.groupName = "avatar_suit_tab",
        t.selected = !0,
        t.value = "0",
        t.x = 0,
        t.y = 0,
        t.skinName = r,
        t
    },
    h.rb_suit1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_suit1 = t,
        t.groupName = "avatar_suit_tab",
        t.value = "1",
        t.x = 100,
        t.y = 0,
        t.skinName = o,
        t
    },
    h.rb_suit2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_suit2 = t,
        t.groupName = "avatar_suit_tab",
        t.value = "2",
        t.x = 201,
        t.y = 0,
        t.skinName = a,
        t
    },
    h.rb_suit3_i = function() {
        var t = new eui.RadioButton;
        return this.rb_suit3 = t,
        t.groupName = "avatar_suit_tab",
        t.value = "3",
        t.x = 301,
        t.y = 0,
        t.skinName = s,
        t
    },
    h.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 472,
        t.left = 153,
        t.right = 0,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_i(),
        t
    },
    h.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 497,
        t.width = 944,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    h._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = -20,
        t.orientation = "rows",
        t.verticalGap = 13,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/avatar/ClothItemRenderSkin.exml"] = window.ClothItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "txtName", "icon", "img_rect"],
        this.height = 130,
        this.width = 105,
        this.elementsContent = [this.item_bg_i(), this.txtName_i(), this.icon_i(), this.img_rect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 130,
        t.scale9Grid = new egret.Rectangle(48, 44, 8, 5),
        t.source = "common_pet_head_bg_png",
        t.visible = !0,
        t.width = 105,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "刻印名字最多",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 102,
        t.y = 107,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 70,
        t.horizontalCenter = -.5,
        t.source = "",
        t.verticalCenter = -11.5,
        t.width = 70,
        t
    },
    i.img_rect_i = function() {
        var t = new eui.Image;
        return this.img_rect = t,
        t.height = 128,
        t.source = "all_monster_panel_item_mask_png",
        t.visible = !0,
        t.width = 103,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/avatar/SuitItemRenderSkin.exml"] = window.SuitItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon", "txtName", "img_rect"],
        this.height = 230,
        this.width = 254,
        this.elementsContent = [this.bg_i(), this.icon_i(), this.txtName_i(), this.img_rect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 230,
        t.source = "book_avatar_suit_bg_png",
        t.width = 254,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.bottom = 58,
        t.horizontalCenter = 0,
        t.source = "",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "座驾名称",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 198,
        t.x = 28,
        t.y = 201,
        t
    },
    i.img_rect_i = function() {
        var t = new eui.Image;
        return this.img_rect = t,
        t.height = 223,
        t.source = "all_monster_panel_item_mask_png",
        t.width = 213,
        t.x = 21,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChildNodeLabSkin.exml"] = window.ChildNodeLabSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName"],
        this.height = 42,
        this.width = 154,
        this.elementsContent = [this._Rect1_i(), this.txtName_i()],
        this._Image1_i(),
        this.states = [new eui.State("down", [new eui.AddItems("_Image1", "", 2, "txtName")]), new eui.State("up", [new eui.SetProperty("txtName", "textColor", 7571893)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.alpha = 0,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.height = 42,
        t.source = "child_node_change_png",
        t.visible = !0,
        t.width = 154,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "速度",
        t.textColor = 15857151,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ContentTestSkin.exml"] = window.ContentTestSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtPanelName"],
        this.height = 400,
        this.width = 946,
        this.elementsContent = [this.txtPanelName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txtPanelName_i = function() {
        var t = new eui.Label;
        return this.txtPanelName = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 115,
        t.text = "Label",
        t.textAlign = "center",
        t.verticalAlign = "middle",
        t.width = 338,
        t.x = 225,
        t.y = 115,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookAwardItemSkin.exml"] = window.HandBookAwardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_0", "txt_num_0", "item_0", "icon_1", "txt_num_1", "item_1", "icon_2", "txt_num_2", "item_2", "btnGet", "flag_got", "txt_level", "img_or_1", "img_or_0"],
        this.height = 443,
        this.width = 124,
        this.elementsContent = [this.img_or_1_i(), this.img_or_0_i()],
        this._Image1_i(),
        this._Image2_i(),
        this.item_0_i(),
        this.item_1_i(),
        this.item_2_i(),
        this._Image6_i(),
        this.btnGet_i(),
        this.flag_got_i(),
        this.txt_level_i(),
        this._Image7_i(),
        this.states = [new eui.State("lock", [new eui.AddItems("_Image1", "", 0, ""), new eui.AddItems("item_0", "", 2, "img_or_1"), new eui.AddItems("item_1", "", 2, "img_or_1"), new eui.AddItems("item_2", "", 2, "img_or_1"), new eui.AddItems("_Image6", "", 2, "img_or_1"), new eui.AddItems("txt_level", "", 2, "img_or_1"), new eui.SetProperty("txt_level", "y", 40)]), new eui.State("can", [new eui.AddItems("_Image2", "", 2, "img_or_1"), new eui.AddItems("item_0", "", 2, "img_or_1"), new eui.AddItems("item_1", "", 2, "img_or_1"), new eui.AddItems("item_2", "", 2, "img_or_1"), new eui.AddItems("btnGet", "", 2, "img_or_1"), new eui.AddItems("txt_level", "", 2, "img_or_1")]), new eui.State("got", [new eui.AddItems("_Image1", "", 0, ""), new eui.AddItems("item_0", "", 2, "img_or_1"), new eui.AddItems("item_1", "", 2, "img_or_1"), new eui.AddItems("item_2", "", 2, "img_or_1"), new eui.AddItems("flag_got", "", 2, "img_or_1"), new eui.AddItems("txt_level", "", 2, "img_or_1")]), new eui.State("null", [new eui.AddItems("_Image1", "", 0, ""), new eui.AddItems("_Image7", "", 2, "img_or_1")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.height = 441,
        t.source = "hand_book_award_item_bg_normal_png",
        t.width = 118,
        t.x = 3,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return this._Image2 = t,
        t.height = 443,
        t.source = "hand_book_award_item_bg_selected_png",
        t.width = 124,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_0_i = function() {
        var t = new eui.Group;
        return this.item_0 = t,
        t.x = 22,
        t.y = 117,
        t.elementsContent = [this._Image3_i(), this.icon_0_i(), this.txt_num_0_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.scale9Grid = new egret.Rectangle(21, 21, 22, 22),
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 60,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 60,
        t
    },
    i.txt_num_0_i = function() {
        var t = new eui.Label;
        return this.txt_num_0 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 56,
        t
    },
    i.item_1_i = function() {
        var t = new eui.Group;
        return this.item_1 = t,
        t.x = 22,
        t.y = 215,
        t.elementsContent = [this._Image4_i(), this.icon_1_i(), this.txt_num_1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.scale9Grid = new egret.Rectangle(21, 21, 22, 22),
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 60,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 60,
        t
    },
    i.txt_num_1_i = function() {
        var t = new eui.Label;
        return this.txt_num_1 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 56,
        t
    },
    i.item_2_i = function() {
        var t = new eui.Group;
        return this.item_2 = t,
        t.x = 22,
        t.y = 313,
        t.elementsContent = [this._Image5_i(), this.icon_2_i(), this.txt_num_2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.scale9Grid = new egret.Rectangle(21, 21, 22, 22),
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 60,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t.width = 60,
        t
    },
    i.txt_num_2_i = function() {
        var t = new eui.Label;
        return this.txt_num_2 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 56,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return this._Image6 = t,
        t.height = 99,
        t.source = "hand_book_award_item_levelBg_png",
        t.width = 99,
        t.x = 13,
        t.y = 1,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Image;
        return this.btnGet = t,
        t.height = 99,
        t.source = "hand_book_award_item_btnGet_png",
        t.visible = !0,
        t.width = 99,
        t.x = 13,
        t.y = 1,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Image;
        return this.flag_got = t,
        t.height = 99,
        t.source = "hand_book_award_item_flag_got_png",
        t.visible = !0,
        t.width = 99,
        t.x = 13,
        t.y = 1,
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.lineSpacing = 3,
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 6460654,
        t.text = "LV.00",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 84,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return this._Image7 = t,
        t.height = 92,
        t.source = "hand_book_award_item_flag_coming_png",
        t.width = 92,
        t.x = 16,
        t.y = 175,
        t
    },
    i.img_or_1_i = function() {
        var t = new eui.Image;
        return this.img_or_1 = t,
        t.source = "handbook_award_item_or_png",
        t.x = 47,
        t.y = 297,
        t
    },
    i.img_or_0_i = function() {
        var t = new eui.Image;
        return this.img_or_0 = t,
        t.source = "handbook_award_item_or_png",
        t.x = 47,
        t.y = 199,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookAwardSkin.exml"] = window.HandBookAwardSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnOneTap", "_list", "_scr", "_grp", "_scrMask"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.btnOneTap_i(), this._scr_i(), this._grp_i(), this._scrMask_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "common_ui_bg_2_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnClose_i(), this._Image3_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 36,
        t.source = "hand_book_award_Title_png",
        t.width = 65,
        t.x = 112,
        t.y = 7,
        t
    },
    i.btnOneTap_i = function() {
        var t = new eui.Image;
        return this.btnOneTap = t,
        t.height = 52,
        t.horizontalCenter = 0,
        t.source = "hand_book_award_btnOneTap_png",
        t.width = 176,
        t.y = 548,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 443,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.percentWidth = 90,
        t.y = 93,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.useVirtualLayout = !0,
        t.x = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t
    },
    i._grp_i = function() {
        var t = new eui.Group;
        return this._grp = t,
        t
    },
    i._scrMask_i = function() {
        var t = new eui.Image;
        return this._scrMask = t,
        t.height = 443,
        t.scale9Grid = new egret.Rectangle(65, 7, 42, 8),
        t.source = "hand_book_award_mask_png",
        t.visible = !1,
        t.width = 1136,
        t.x = 0,
        t.y = 93,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandbookFrameSkin.exml"] = window.HandbookFrameSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grpContainer", "menuGroup"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpContainer_i(), this.menuGroup_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.scale9Grid = new egret.Rectangle(173, 80, 957, 480),
        t.source = "handbook_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
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
generateEUI.paths["resource/eui_skins/HandBookRankItemSkin.exml"] = window.HandBookRankItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img_rank", "txt_rank", "txt_name", "txt_account", "txt_score"],
        this.height = 42,
        this.width = 701,
        this.elementsContent = [this.bg_i(), this.img_rank_i(), this.txt_rank_i(), this.txt_name_i(), this.txt_account_i(), this.txt_score_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 42,
        t.source = "hand_book_rank_item_bg_png",
        t.width = 701,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_rank_i = function() {
        var t = new eui.Image;
        return this.img_rank = t,
        t.horizontalCenter = -259,
        t.source = "hand_book_rank_item_img_rank_1_png",
        t.verticalCenter = .5,
        t
    },
    i.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.horizontalCenter = -258.5,
        t.size = 20,
        t.text = "4",
        t.visible = !0,
        t.y = 12,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.horizontalCenter = -94.5,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "布丁响叮当",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 13,
        t
    },
    i.txt_account_i = function() {
        var t = new eui.Label;
        return this.txt_account = t,
        t.horizontalCenter = 72,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "0000000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 13,
        t
    },
    i.txt_score_i = function() {
        var t = new eui.Label;
        return this.txt_score = t,
        t.horizontalCenter = 245,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "0000000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 13,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookRankSkin.exml"] = window.HandBookRankSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_intro", "btnClose", "rb_total", "rb_new", "txt_scoreName", "_list", "_scr", "img_rank", "txt_myRank", "txt_myName", "txt_myAccount", "txt_myScore"],
        this.height = 528,
        this.width = 923,
        this.elementsContent = [this._Group1_i(), this.rb_total_i(), this.rb_new_i(), this._Group2_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "hand_book_ranktotal_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "hand_book_ranktotal_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "hand_book_ranknew_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "hand_book_ranknew_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txt_intro_i(), this.btnClose_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 487,
        t.source = "common_pop_point_png",
        t.width = 753,
        t.x = 158,
        t.y = 41,
        t
    },
    r._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 479,
        t.source = "common_s9_pop_bg3_png",
        t.width = 163,
        t.x = 0,
        t.y = 45,
        t
    },
    r._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_big_png",
        t.width = 907,
        t.x = 0,
        t.y = 22,
        t
    },
    r._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "hand_book_rank_title_png",
        t.width = 86,
        t.x = 33,
        t.y = 28,
        t
    },
    r.txt_intro_i = function() {
        var t = new eui.Label;
        return this.txt_intro = t,
        t.lineSpacing = 3,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 4874938,
        t.text = "每周五0点更新",
        t.textColor = 13361663,
        t.touchEnabled = !1,
        t.x = 128,
        t.y = 34,
        t
    },
    r.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 869,
        t.y = 0,
        t
    },
    r.rb_total_i = function() {
        var t = new eui.RadioButton;
        return this.rb_total = t,
        t.groupName = "hand_book_rank",
        t.value = "1",
        t.x = 0,
        t.y = 71,
        t.skinName = i,
        t
    },
    r.rb_new_i = function() {
        var t = new eui.RadioButton;
        return this.rb_new = t,
        t.groupName = "hand_book_rank",
        t.value = "2",
        t.x = 0,
        t.y = 125,
        t.skinName = n,
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 183,
        t.y = 71,
        t.elementsContent = [this._Image5_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.txt_scoreName_i(), this._scr_i(), this._Image6_i(), this.img_rank_i(), this.txt_myRank_i(), this.txt_myName_i(), this.txt_myAccount_i(), this.txt_myScore_i()],
        t
    },
    r._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 440,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "hand_book_rank_rankBg_png",
        t.visible = !0,
        t.width = 703,
        t.x = 0,
        t.y = 0,
        t
    },
    r._Label1_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "名 次",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 70,
        t.y = 13,
        t
    },
    r._Label2_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "昵 称",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 234,
        t.y = 13,
        t
    },
    r._Label3_i = function() {
        var t = new eui.Label;
        return t.lineSpacing = 3,
        t.size = 20,
        t.text = "米米号",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.x = 390,
        t.y = 13,
        t
    },
    r.txt_scoreName_i = function() {
        var t = new eui.Label;
        return this.txt_scoreName = t,
        t.horizontalCenter = 241.5,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "新增积分",
        t.textColor = 4175861,
        t.touchEnabled = !1,
        t.y = 13,
        t
    },
    r._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 336,
        t.width = 701,
        t.x = 1,
        t.y = 43,
        t.viewport = this._list_i(),
        t
    },
    r._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t
    },
    r._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "hand_book_rank_myRankBg_png",
        t.width = 701,
        t.x = 1,
        t.y = 379,
        t
    },
    r.img_rank_i = function() {
        var t = new eui.Image;
        return this.img_rank = t,
        t.horizontalCenter = -259,
        t.source = "hand_book_rank_rankRect_png",
        t.verticalCenter = 189.5,
        t
    },
    r.txt_myRank_i = function() {
        var t = new eui.Label;
        return this.txt_myRank = t,
        t.horizontalCenter = -259,
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "999",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.y = 400,
        t
    },
    r.txt_myName_i = function() {
        var t = new eui.Label;
        return this.txt_myName = t,
        t.horizontalCenter = -94.5,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "布丁响叮当",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.y = 401,
        t
    },
    r.txt_myAccount_i = function() {
        var t = new eui.Label;
        return this.txt_myAccount = t,
        t.horizontalCenter = 72,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "0000000",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.y = 401,
        t
    },
    r.txt_myScore_i = function() {
        var t = new eui.Label;
        return this.txt_myScore = t,
        t.horizontalCenter = 245,
        t.lineSpacing = 3,
        t.size = 18,
        t.text = "0000000",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.y = 401,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookScoreIntroSkin.exml"] = window.HandBookScoreIntroSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "common_pop_title_medium_png",
        t.width = 748,
        t.x = 4,
        t.y = 22,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 26,
        t.source = "hand_book_score_intro_title_png",
        t.width = 115,
        t.x = 36,
        t.y = 28,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "common_close_1_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 354,
        t.source = "hand_book_score_intro_label_png",
        t.width = 676,
        t.x = 37,
        t.y = 76,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookSelectPanelSkin.exml"] = window.HandBookSelectPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["rb_0", "rb_1", "rb_2", "btnConfirm"],
        this.height = 531,
        this.width = 853,
        this.elementsContent = [this._Group1_i(), this.rb_0_i(), this.rb_1_i(), this.rb_2_i(), this.btnConfirm_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 392,
            t.source = "hand_book_select_panel_pet_0_png",
            t.width = 246,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 473,
            t.source = "hand_book_select_panel_img_selected_png",
            t.width = 320,
            t.x = -37,
            t.y = -37,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 392,
            t.source = "hand_book_select_panel_pet_1_png",
            t.width = 246,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 473,
            t.source = "hand_book_select_panel_img_selected_png",
            t.width = 320,
            t.x = -37,
            t.y = -37,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return t.height = 392,
            t.source = "hand_book_select_panel_pet_2_png",
            t.width = 246,
            t
        },
        i._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.height = 473,
            t.source = "hand_book_select_panel_img_selected_png",
            t.width = 320,
            t.x = -37,
            t.y = -37,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 142,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 42,
        t.source = "hand_book_select_panel_texture_1_png",
        t.width = 570,
        t.x = 0,
        t.y = 0,
        t
    },
    o._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.lineSpacing = 3,
        t.size = 20,
        t.text = "请选择领取的三主宠精灵",
        t.textColor = 4173823,
        t.touchEnabled = !1,
        t.x = 175,
        t.y = 11,
        t
    },
    o.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "hand_book_select",
        t.height = 392,
        t.value = "1",
        t.width = 246,
        t.x = 37,
        t.y = 48,
        t.skinName = i,
        t
    },
    o.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "hand_book_select",
        t.height = 392,
        t.value = "2",
        t.width = 246,
        t.x = 304,
        t.y = 48,
        t.skinName = n,
        t
    },
    o.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "hand_book_select",
        t.height = 392,
        t.value = "3",
        t.width = 246,
        t.x = 570,
        t.y = 48,
        t.skinName = r,
        t
    },
    o.btnConfirm_i = function() {
        var t = new eui.Image;
        return this.btnConfirm = t,
        t.height = 52,
        t.source = "hand_book_select_panel_btnConfirm_png",
        t.width = 176,
        t.x = 339,
        t.y = 479,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HandBookSkin.exml"] = window.HandBookSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_pet", "flag_new_0", "img_skin", "flag_new_1", "img_equip", "flag_new_2", "img_token", "flag_new_3", "txt_unlockNum", "grp_num", "bookBg", "txt_level", "grpLevel"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.grp_num_i(), this.grpLevel_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.source = "handbook_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -3.5,
        t.width = 1043,
        t.y = 70,
        t.elementsContent = [this.img_pet_i(), this.flag_new_0_i(), this.img_skin_i(), this.flag_new_1_i(), this.img_equip_i(), this.flag_new_2_i(), this.img_token_i(), this.flag_new_3_i()],
        t
    },
    i.img_pet_i = function() {
        var t = new eui.Image;
        return this.img_pet = t,
        t.height = 484,
        t.pixelHitTest = !0,
        t.source = "hand_book_img_pet_png",
        t.width = 287,
        t.x = 0,
        t.y = 0,
        t
    },
    i.flag_new_0_i = function() {
        var t = new eui.Image;
        return this.flag_new_0 = t,
        t.height = 20,
        t.source = "hand_book_flag_new_png",
        t.visible = !1,
        t.width = 50,
        t.x = 199,
        t.y = 37,
        t
    },
    i.img_skin_i = function() {
        var t = new eui.Image;
        return this.img_skin = t,
        t.height = 480,
        t.pixelHitTest = !0,
        t.source = "hand_book_img_skin_png",
        t.width = 287,
        t.x = 252,
        t.y = 0,
        t
    },
    i.flag_new_1_i = function() {
        var t = new eui.Image;
        return this.flag_new_1 = t,
        t.height = 20,
        t.source = "hand_book_flag_new_png",
        t.visible = !1,
        t.width = 50,
        t.x = 451,
        t.y = 37,
        t
    },
    i.img_equip_i = function() {
        var t = new eui.Image;
        return this.img_equip = t,
        t.height = 484,
        t.pixelHitTest = !0,
        t.source = "hand_book_img_equip_png",
        t.width = 287,
        t.x = 504,
        t.y = 0,
        t
    },
    i.flag_new_2_i = function() {
        var t = new eui.Image;
        return this.flag_new_2 = t,
        t.height = 20,
        t.source = "hand_book_flag_new_png",
        t.visible = !1,
        t.width = 50,
        t.x = 703,
        t.y = 37,
        t
    },
    i.img_token_i = function() {
        var t = new eui.Image;
        return this.img_token = t,
        t.height = 484,
        t.pixelHitTest = !0,
        t.source = "hand_book_img_token_png",
        t.width = 287,
        t.x = 756,
        t.y = 0,
        t
    },
    i.flag_new_3_i = function() {
        var t = new eui.Image;
        return this.flag_new_3 = t,
        t.height = 20,
        t.source = "hand_book_flag_new_png",
        t.visible = !1,
        t.width = 50,
        t.x = 955,
        t.y = 37,
        t
    },
    i.grp_num_i = function() {
        var t = new eui.Group;
        return this.grp_num = t,
        t.right = 0,
        t.y = 47,
        t.elementsContent = [this._Image2_i(), this.txt_unlockNum_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "handbook_item_tip_bg_png",
        t.width = 350,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_unlockNum_i = function() {
        var t = new eui.Label;
        return this.txt_unlockNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "已解锁图鉴条目：",
        t.textColor = 12111615,
        t.x = 119,
        t.y = 5,
        t
    },
    i.grpLevel_i = function() {
        var t = new eui.Group;
        return this.grpLevel = t,
        t.height = 89,
        t.right = 29,
        t.width = 89,
        t.y = 540,
        t.elementsContent = [this.bookBg_i(), this.txt_level_i()],
        t
    },
    i.bookBg_i = function() {
        var t = new eui.Image;
        return this.bookBg = t,
        t.height = 89,
        t.source = "hand_book_bookBg_png",
        t.width = 89,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.stroke = 1,
        t.strokeColor = 1465504,
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HotMonsterItemRenderSkin.exml"] = window.HotMonsterItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["headbg", "head", "bg", "nick", "img_rect", "light", "icon", "icon1", "icon2", "icon3"],
        this.height = 288,
        this.width = 175,
        this.elementsContent = [this.headbg_i(), this.head_i(), this.bg_i(), this.nick_i(), this.img_rect_i(), this.light_i(), this.icon_i(), this.icon1_i(), this.icon2_i(), this.icon3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.headbg_i = function() {
        var t = new eui.Image;
        return this.headbg = t,
        t.height = 290,
        t.source = "new_monster_item_bg_png",
        t.visible = !0,
        t.width = 178,
        t.x = 6,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 280,
        t.source = "",
        t.visible = !0,
        t.width = 170,
        t.x = 10,
        t.y = 4,
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "new_monster_item_rect_png",
        t.visible = !0,
        t.width = 172,
        t.x = 9,
        t.y = 255,
        t
    },
    i.nick_i = function() {
        var t = new eui.Label;
        return this.nick = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战武天尊",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 144,
        t.x = 21,
        t.y = 263,
        t
    },
    i.img_rect_i = function() {
        var t = new eui.Rect;
        return this.img_rect = t,
        t.alpha = .5,
        t.height = 286,
        t.visible = !1,
        t.width = 174,
        t.x = 8,
        t.y = 2,
        t
    },
    i.light_i = function() {
        var t = new eui.Image;
        return this.light = t,
        t.height = 296,
        t.scale9Grid = new egret.Rectangle(50, 70, 5, 3),
        t.source = "AllMonsterPanel_icon_png",
        t.visible = !1,
        t.width = 186,
        t.x = 3,
        t.y = -3,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.visible = !0,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.visible = !0,
        t.x = 10,
        t.y = 4,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.visible = !0,
        t.x = 72,
        t.y = 4,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.visible = !0,
        t.x = 133,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HotmonsterpanelSkin.exml"] = window.HotmonsterpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["progressBg", "txt_progress", "txt_rank", "_bar", "progress", "list_viewport", "scroller_item", "txtSearch", "search", "cb_ownless", "grpRight", "btnFilter"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.progress_i(), this.scroller_item_i(), this.grpRight_i(), this.btnFilter_i()]
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
            return t.height = 6,
            t.source = "all_monster_panel_img_bar_png",
            t.percentWidth = 100,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 10,
            t.source = "all_monster_panel_img_thumb_png",
            t.width = 946,
            t.x = -2,
            t.y = -2,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    o = e.prototype;
    return o.progress_i = function() {
        var t = new eui.Group;
        return this.progress = t,
        t.visible = !1,
        t.x = 164,
        t.y = 63,
        t.elementsContent = [this.progressBg_i(), this.txt_progress_i(), this.txt_rank_i(), this._bar_i()],
        t
    },
    o.progressBg_i = function() {
        var t = new eui.Image;
        return this.progressBg = t,
        t.height = 35,
        t.source = "all_monster_panel_progressBg_png",
        t.width = 1002,
        t.x = 0,
        t.y = 0,
        t
    },
    o.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "收集进度：0000/0000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 27,
        t.y = 4,
        t
    },
    o.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "当前排名：00.00%",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.x = 205,
        t.y = 4,
        t
    },
    o._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 6,
        t.width = 942,
        t.x = 28,
        t.y = 25,
        t.skinName = i,
        t
    },
    o.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 515,
        t.left = 170,
        t.right = 16,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_viewport_i(),
        t
    },
    o.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 500,
        t.width = 942,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    o._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 15,
        t.orientation = "rows",
        t.paddingRight = 10,
        t.verticalGap = 17,
        t
    },
    o.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 1,
        t.width = 374,
        t.y = 45,
        t.elementsContent = [this._Image1_i(), this.txtSearch_i(), this.search_i(), this._Label1_i(), this.cb_ownless_i()],
        t
    },
    o._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 29,
        t.source = "common_search_bg_png",
        t.visible = !0,
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    o.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入精灵名或ID",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 210.771,
        t.y = 35,
        t.skinName = n,
        t
    },
    o.search_i = function() {
        var t = new eui.Image;
        return this.search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 342.771,
        t.y = 28,
        t
    },
    o._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未获得",
        t.textColor = 5008299,
        t.visible = !0,
        t.x = 99.775,
        t.y = 34,
        t
    },
    o.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.visible = !0,
        t.x = 158.363,
        t.y = 31,
        t.skinName = r,
        t
    },
    o.btnFilter_i = function() {
        var t = new eui.Image;
        return this.btnFilter = t,
        t.source = "handbook_select_png",
        t.x = 178,
        t.y = 64,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/HandbookAwardViewItemSkin.exml"] = window.HandbookAwardViewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon_0", "txt_num_0", "item_0", "icon_1", "txt_num_1", "item_1", "icon_2", "txt_num_2", "item_2", "flag_got", "btnGet", "txt_level"],
        this.height = 76,
        this.width = 544,
        this.elementsContent = [this.bg_i(), this.item_0_i(), this.item_1_i(), this.item_2_i(), this.flag_got_i(), this.btnGet_i(), this.txt_level_i(), this._Label3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 76,
        t.source = "handbook_award_view_item_bg_png",
        t.visible = !0,
        t.width = 544,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_0_i = function() {
        var t = new eui.Group;
        return this.item_0 = t,
        t.x = 136,
        t.y = 8,
        t.elementsContent = [this._Image1_i(), this.icon_0_i(), this.txt_num_0_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_avatar_bg_size_110_110_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 42,
        t.width = 42,
        t.x = 9,
        t.y = 9,
        t
    },
    i.txt_num_0_i = function() {
        var t = new eui.Label;
        return this.txt_num_0 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 16,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 40,
        t
    },
    i.item_1_i = function() {
        var t = new eui.Group;
        return this.item_1 = t,
        t.x = 205,
        t.y = 8,
        t.elementsContent = [this._Image2_i(), this.icon_1_i(), this.txt_num_1_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_avatar_bg_size_110_110_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 42,
        t.width = 42,
        t.x = 9,
        t.y = 9,
        t
    },
    i.txt_num_1_i = function() {
        var t = new eui.Label;
        return this.txt_num_1 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 16,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 40,
        t
    },
    i.item_2_i = function() {
        var t = new eui.Group;
        return this.item_2 = t,
        t.x = 274,
        t.y = 8,
        t.elementsContent = [this._Image3_i(), this.icon_2_i(), this.txt_num_2_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_avatar_bg_size_110_110_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 42,
        t.width = 42,
        t.x = 9,
        t.y = 9,
        t
    },
    i.txt_num_2_i = function() {
        var t = new eui.Label;
        return this.txt_num_2 = t,
        t.lineSpacing = 3,
        t.right = 6,
        t.size = 16,
        t.text = "99",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.y = 40,
        t
    },
    i.flag_got_i = function() {
        var t = new eui.Group;
        return this.flag_got = t,
        t.visible = !1,
        t.x = 434,
        t.y = 21,
        t.elementsContent = [this._Image4_i(), this._Label1_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "handbook_award_view_item_flag_got_png",
        t.width = 86,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "已领取",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.btnGet_i = function() {
        var t = new eui.Group;
        return this.btnGet = t,
        t.visible = !0,
        t.x = 434,
        t.y = 21,
        t.elementsContent = [this._Image5_i(), this._Label2_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "handbook_award_view_item_btnGet_png",
        t.width = 86,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "领 取",
        t.textColor = 16777215,
        t.y = 8,
        t
    },
    i.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "REEJI",
        t.size = 30,
        t.text = "Lv.1",
        t.textColor = 15857151,
        t.x = 16,
        t.y = 15,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 16,
        t.text = "达成获得奖励",
        t.textColor = 9157631,
        t.x = 16,
        t.y = 49,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/HandbookRankViewItemSkin.exml"] = window.HandbookRankViewItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "img_rank", "txt_rank", "txt_name", "txt_id", "txt_score"],
        this.height = 39,
        this.width = 562,
        this.elementsContent = [this.bg_i(), this.img_rank_i(), this.txt_rank_i(), this.txt_name_i(), this.txt_id_i(), this.txt_score_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 39,
        t.source = "handbook_rank_view_item_bg_5_png",
        t.width = 562,
        t.x = 0,
        t.y = 0,
        t
    },
    i.img_rank_i = function() {
        var t = new eui.Image;
        return this.img_rank = t,
        t.height = 32,
        t.source = "handbook_detail_viewstack_img_rank1_png",
        t.width = 36,
        t.x = 28,
        t.y = 4,
        t
    },
    i.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -236.5,
        t.size = 18,
        t.text = "7",
        t.textColor = 14214143,
        t.y = 11,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -112,
        t.size = 16,
        t.text = "皮皮虾的皮",
        t.textColor = 14214143,
        t.y = 12,
        t
    },
    i.txt_id_i = function() {
        var t = new eui.Label;
        return this.txt_id = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 49,
        t.size = 16,
        t.text = "9999999",
        t.textColor = 14214143,
        t.y = 12,
        t
    },
    i.txt_score_i = function() {
        var t = new eui.Label;
        return this.txt_score = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 207,
        t.size = 16,
        t.text = "9999999",
        t.textColor = 14214143,
        t.y = 12,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/mark/MarkBookSkin.exml"] = window.BookMarkSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtbg", "txtSearch", "img_btn_search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "grp_progress", "grpRight", "rb_five", "rb_four", "rb_three", "rb_two", "type", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpRight_i(), this.type_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_markfive_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_markfive_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_markfour_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_markfour_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_markthree_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_markthree_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    s = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "book_marktwo_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "book_marktwo_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    h = e.prototype;
    return h.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 0,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this.txtSearch_i(), this.img_btn_search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this.grp_progress_i()],
        t
    },
    h.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 170,
        t.y = 28,
        t
    },
    h.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入刻印/系列名称",
        t.rotation = .88,
        t.width = 155,
        t.x = 170,
        t.y = 35,
        t.skinName = i,
        t
    },
    h.img_btn_search_i = function() {
        var t = new eui.Image;
        return this.img_btn_search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 325,
        t.y = 28,
        t
    },
    h.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 82,
        t.y = 34,
        t
    },
    h.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 140,
        t.y = 31,
        t.skinName = n,
        t
    },
    h.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    h.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    h.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    h.type_i = function() {
        var t = new eui.Group;
        return this.type = t,
        t.x = 171,
        t.y = 64,
        t.elementsContent = [this.rb_five_i(), this.rb_four_i(), this.rb_three_i(), this.rb_two_i()],
        t
    },
    h.rb_five_i = function() {
        var t = new eui.RadioButton;
        return this.rb_five = t,
        t.selected = !0,
        t.value = "5",
        t.x = 0,
        t.y = 0,
        t.skinName = r,
        t
    },
    h.rb_four_i = function() {
        var t = new eui.RadioButton;
        return this.rb_four = t,
        t.value = "4",
        t.x = 100,
        t.y = 0,
        t.skinName = o,
        t
    },
    h.rb_three_i = function() {
        var t = new eui.RadioButton;
        return this.rb_three = t,
        t.value = "3",
        t.x = 201,
        t.y = 0,
        t.skinName = a,
        t
    },
    h.rb_two_i = function() {
        var t = new eui.RadioButton;
        return this.rb_two = t,
        t.value = "2",
        t.x = 301,
        t.y = 0,
        t.skinName = s,
        t
    },
    h.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 523,
        t.left = 176,
        t.right = 35,
        t.scrollPolicyH = "off",
        t.y = 117,
        t.viewport = this.list_i(),
        t
    },
    h.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 500,
        t.width = 942,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    h._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.horizontalGap = 13,
        t.orientation = "rows",
        t.verticalGap = 13,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/mark/MarkItemRenderSkin.exml"] = window.MarkItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "icon", "img_rect"],
        this.height = 144,
        this.width = 144,
        this.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.icon_i(), this.img_rect_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "common_icon_bg_style_1_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.height = 28,
        t.source = "book_mark_name_bg_png",
        t.width = 142,
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16.459020614624,
        t.text = "刻印名称刻印名称",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 144,
        t.x = 0,
        t.y = 121,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = -12.5,
        t
    },
    i.img_rect_i = function() {
        var t = new eui.Image;
        return this.img_rect = t,
        t.percentHeight = 100,
        t.source = "all_monster_panel_item_mask_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewMonsterItemRenderSkin.exml"] = window.NewMonsterItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["headbg", "head", "bg", "nick", "newsp", "newskin", "flag"],
        this.height = 288,
        this.width = 178,
        this.elementsContent = [this.headbg_i(), this.head_i(), this.bg_i(), this.nick_i(), this.newsp_i(), this.newskin_i(), this.flag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.headbg_i = function() {
        var t = new eui.Image;
        return this.headbg = t,
        t.height = 290,
        t.source = "new_monster_item_bg_png",
        t.visible = !0,
        t.width = 178,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 280,
        t.source = "",
        t.visible = !0,
        t.width = 170,
        t.x = 4,
        t.y = 4,
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "new_monster_item_rect_png",
        t.visible = !0,
        t.x = 3,
        t.y = 255,
        t
    },
    i.nick_i = function() {
        var t = new eui.Label;
        return this.nick = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "战武天尊",
        t.textAlign = "center",
        t.textColor = 9025023,
        t.width = 144,
        t.x = 16,
        t.y = 263,
        t
    },
    i.newsp_i = function() {
        var t = new eui.Image;
        return this.newsp = t,
        t.source = "NewMonsterPanel_newsp_png",
        t.visible = !0,
        t.x = 0,
        t.y = 4,
        t
    },
    i.newskin_i = function() {
        var t = new eui.Image;
        return this.newskin = t,
        t.source = "NewMonsterPanel_newskin_png",
        t.visible = !0,
        t.x = 0,
        t.y = 4,
        t
    },
    i.flag_i = function() {
        var t = new eui.Image;
        return this.flag = t,
        t.source = "NewMonsterPanel_flag_png",
        t.x = 125,
        t.y = 4,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/NewmonsterpanelSkin.exml"] = window.NewmonsterpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["progressBg", "txt_progress", "txt_rank", "_bar", "progress", "list_viewport", "scroller_item"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.progress_i(), this.scroller_item_i()]
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
            return t.height = 6,
            t.source = "all_monster_panel_img_bar_png",
            t.percentWidth = 100,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 10,
            t.source = "all_monster_panel_img_thumb_png",
            t.width = 946,
            t.x = -2,
            t.y = -2,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.progress_i = function() {
        var t = new eui.Group;
        return this.progress = t,
        t.visible = !1,
        t.x = 159,
        t.y = 64,
        t.elementsContent = [this.progressBg_i(), this.txt_progress_i(), this.txt_rank_i(), this._bar_i()],
        t
    },
    n.progressBg_i = function() {
        var t = new eui.Image;
        return this.progressBg = t,
        t.height = 35,
        t.source = "all_monster_panel_progressBg_png",
        t.width = 1002,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "收集进度：0000/0000",
        t.textColor = 16777215,
        t.touchEnabled = !1,
        t.x = 27,
        t.y = 4,
        t
    },
    n.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.lineSpacing = 3,
        t.size = 16,
        t.text = "当前排名：00.00%",
        t.textColor = 16773477,
        t.touchEnabled = !1,
        t.x = 205,
        t.y = 4,
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 6,
        t.width = 942,
        t.x = 28,
        t.y = 25,
        t.skinName = i,
        t
    },
    n.scroller_item_i = function() {
        var t = new eui.Scroller;
        return this.scroller_item = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 515,
        t.left = 170,
        t.right = 16,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_viewport_i(),
        t
    },
    n.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.width = 864,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 15,
        t.orientation = "rows",
        t.paddingRight = 10,
        t.verticalGap = 17,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ParentNodeLabSkin.exml"] = window.ParentNodeLabSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "icon_up", "icon_down"],
        this.height = 60,
        this.width = 225,
        this.elementsContent = [this._Rect1_i()],
        this.bg_i(),
        this.icon_up_i(),
        this.icon_down_i(),
        this.states = [new eui.State("up", [new eui.AddItems("icon_up", "", 1, "")]), new eui.State("down", [new eui.AddItems("bg", "", 1, ""), new eui.AddItems("icon_down", "", 1, "")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.alpha = 0,
        t.percentHeight = 100,
        t.percentWidth = 100,
        t
    },
    i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.source = "adapt_rb_bg_png",
        t.x = 0,
        t
    },
    i.icon_up_i = function() {
        var t = new eui.Image;
        return this.icon_up = t,
        t.horizontalCenter = 29.5,
        t.verticalCenter = -2,
        t
    },
    i.icon_down_i = function() {
        var t = new eui.Image;
        return this.icon_down = t,
        t.horizontalCenter = 29.5,
        t.verticalCenter = -2,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/HandbookLevelViewSkin.exml"] = window.HandbookLevelViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_bar", "txt_score", "txt_intro", "txt_level"],
        this.height = 368,
        this.width = 565,
        this.elementsContent = [this._Image1_i(), this._bar_i(), this._Label1_i(), this._Label2_i(), this.txt_score_i(), this._Scroller1_i(), this._Label3_i(), this.txt_level_i()]
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
            return t.height = 23,
            t.source = "handbook_detail_viewstack_progress_bg_png",
            t.width = 303,
            t.x = 0,
            t.y = 0,
            t
        },
        i.thumb_i = function() {
            var t = new eui.Image;
            return this.thumb = t,
            t.height = 15,
            t.source = "handbook_detail_viewstack_progress_png",
            t.width = 281,
            t.x = 12,
            t.y = 4,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 243,
        t.source = "handbook_detail_viewstack_contentbg_png",
        t.width = 565,
        t.x = 0,
        t.y = 125,
        t
    },
    n._bar_i = function() {
        var t = new eui.ProgressBar;
        return this._bar = t,
        t.height = 23,
        t.width = 303,
        t.x = 4,
        t.y = 63,
        t.skinName = i,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "积分规则",
        t.textColor = 13754879,
        t.x = 12,
        t.y = 103,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "升级至下一级所需积分：",
        t.textColor = 6258105,
        t.x = 11,
        t.y = 40,
        t
    },
    n.txt_score_i = function() {
        var t = new eui.Label;
        return this.txt_score = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99999/100000",
        t.textColor = 7072255,
        t.x = 191,
        t.y = 40,
        t
    },
    n._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.height = 221,
        t.width = 550,
        t.x = 12,
        t.y = 136,
        t.viewport = this._Group1_i(),
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.elementsContent = [this.txt_intro_i()],
        t
    },
    n.txt_intro_i = function() {
        var t = new eui.Label;
        return this.txt_intro = t,
        t.lineSpacing = 5,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "基础规则：\n从图鉴积分系统上线计算当前所有的图鉴积分，之后每次一旦激活新精灵/皮肤/装扮/刻印，都会获得相应积分，特殊情况下失去精灵/皮肤/装扮/刻印导致无法继续激活图鉴时，获得的积分会被扣除。\n加分计算：\n1）精灵类加分：\n   每搜集1种精灵，加6分。\n2）皮肤类加分： \n   每搜集1款限定皮肤，加30分；       每搜集1款传说皮肤，加20分；\n   每搜集1款经典皮肤，加15分；       每搜集一款史诗皮肤，加12分。\n3）装扮类加分：\n   每搜集1套套装，加15分；           每搜集1个部件，加1分；\n   每搜集1辆座驾，加5分。\n4）刻印类加分：\n   每搜集1个五角全能刻印，加15分；   每搜集1个四角全能刻印，加10分；\n   每搜集1个三角全能刻印，加8分；    每搜集1个两角全能刻印，加6分。",
        t.textColor = 8757203,
        t.width = 550,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "当前图鉴等级：",
        t.textColor = 13754879,
        t.x = 12,
        t.y = 10,
        t
    },
    n.txt_level_i = function() {
        var t = new eui.Label;
        return this.txt_level = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "99",
        t.textColor = 13754879,
        t.x = 136,
        t.y = 10,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/HandbookAwardViewSkin.exml"] = window.HandbookAwardViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scr"],
        this.height = 376,
        this.width = 565,
        this.elementsContent = [this._Image1_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["verticalScrollBar"],
            this.elementsContent = [this.verticalScrollBar_i()]
        }
        __extends(e, t);
        var i = function(t) {
            function e() {
                t.call(this),
                this.skinParts = ["thumb"],
                this.elementsContent = [this._Image1_i(), this.thumb_i()]
            }
            __extends(e, t);
            var i = e.prototype;
            return i._Image1_i = function() {
                var t = new eui.Image;
                return t.percentHeight = 100,
                t.source = "handbook_detail_viewstack_scrbar_bg_png",
                t.width = 3,
                t
            },
            i.thumb_i = function() {
                var t = new eui.Image;
                return this.thumb = t,
                t.height = 151,
                t.source = "handbook_detail_viewstack_scrbar_png",
                t.width = 3,
                t
            },
            e
        } (eui.Skin),
        n = e.prototype;
        return n.verticalScrollBar_i = function() {
            var t = new eui.VScrollBar;
            return this.verticalScrollBar = t,
            t.height = 375,
            t.width = 3,
            t.x = 551,
            t.y = -8,
            t.skinName = i,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 366,
        t.source = "handbook_detail_viewstack_contentbg_png",
        t.width = 565,
        t.x = 0,
        t.y = 0,
        t
    },
    n._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 364,
        t.width = 544,
        t.x = 11,
        t.y = 9,
        t.skinName = i,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/HandbookRankViewSkin.exml"] = window.HandbookRankViewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_scoreName", "txt_myName", "txt_myId", "txt_myScore", "img_rank", "txt_rank", "flag_outRank", "_list", "_scr"],
        this.height = 377,
        this.width = 565,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.txt_scoreName_i(), this.txt_myName_i(), this.txt_myId_i(), this.txt_myScore_i(), this.img_rank_i(), this.txt_rank_i(), this.flag_outRank_i(), this._Label4_i(), this._scr_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 49,
        t.source = "handbook_detail_viewstack_myRankBg_png",
        t.width = 562,
        t.x = 1,
        t.y = 308,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 2,
        t.source = "handbook_detail_viewstack_Img_line_png",
        t.visible = !0,
        t.width = 564,
        t.x = 0,
        t.y = 37,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "handbook_detail_viewstack_di_png",
        t.width = 563,
        t.x = 1,
        t.y = 2,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "名次",
        t.textColor = 9150937,
        t.x = 30,
        t.y = 12,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "米米号",
        t.textColor = 9150937,
        t.x = 303,
        t.y = 12,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "昵称",
        t.textColor = 9150937,
        t.x = 153,
        t.y = 12,
        t
    },
    i.txt_scoreName_i = function() {
        var t = new eui.Label;
        return this.txt_scoreName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "总积分",
        t.textColor = 9150937,
        t.x = 461,
        t.y = 12,
        t
    },
    i.txt_myName_i = function() {
        var t = new eui.Label;
        return this.txt_myName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -113.5,
        t.size = 16,
        t.text = "皮皮虾的皮",
        t.textColor = 8099296,
        t.y = 324,
        t
    },
    i.txt_myId_i = function() {
        var t = new eui.Label;
        return this.txt_myId = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 47.5,
        t.size = 16,
        t.text = "9999999",
        t.textColor = 8099296,
        t.y = 324,
        t
    },
    i.txt_myScore_i = function() {
        var t = new eui.Label;
        return this.txt_myScore = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 205.5,
        t.size = 16,
        t.text = "9999999",
        t.textColor = 8099296,
        t.y = 324,
        t
    },
    i.img_rank_i = function() {
        var t = new eui.Image;
        return this.img_rank = t,
        t.height = 32,
        t.source = "handbook_detail_viewstack_img_rank1_png",
        t.width = 36,
        t.x = 28,
        t.y = 317,
        t
    },
    i.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = -236,
        t.size = 18,
        t.text = "7",
        t.textColor = 14214143,
        t.y = 324,
        t
    },
    i.flag_outRank_i = function() {
        var t = new eui.Image;
        return this.flag_outRank = t,
        t.height = 22,
        t.source = "handbook_detail_viewstack_flag_outRank_png",
        t.width = 54,
        t.x = 19,
        t.y = 322,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "每周五0点更新",
        t.textColor = 3231867,
        t.x = 466,
        t.y = 363,
        t
    },
    i._scr_i = function() {
        var t = new eui.Scroller;
        return this._scr = t,
        t.height = 269,
        t.visible = !0,
        t.width = 562,
        t.x = 1,
        t.y = 39,
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
        return t.gap = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/HandbookDetailPopSkin.exml"] = window.HandbookDetailPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "rb_0", "rb_1", "rb_2", "grpRb", "tab_0", "tab_1", "grpTab", "_viewStack"],
        this.height = 430,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this.grpRb_i(), this.grpTab_i(), this._viewStack_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.alpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 63,
            t.source = "handbook_detail_pop_tab_down_m_png",
            t.width = 171,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 20,
            t.text = "等级",
            t.x = 65,
            t.y = 20,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.alpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 63,
            t.source = "handbook_detail_pop_tab_down_m_png",
            t.width = 171,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 20,
            t.text = "奖励",
            t.x = 65,
            t.y = 20,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.alpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 63,
            t.source = "handbook_detail_pop_tab_down_m_png",
            t.width = 171,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 20,
            t.text = "排行榜",
            t.x = 55,
            t.y = 20,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.alpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 42,
            t.source = "handbook_detail_pop_tab_down_s_png",
            t.width = 165,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.text = "新增排行",
            t.x = 46,
            t.y = 13,
            t
        },
        e
    } (eui.Skin),
    a = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 8036825)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return t.alpha = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.height = 42,
            t.source = "handbook_detail_pop_tab_down_s_png",
            t.width = 165,
            t.x = 0,
            t.y = 0,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.text = "总分排行",
            t.x = 46,
            t.y = 13,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 430,
        t.source = "common_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    s._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "handbook_detail_pop_topbg_png",
        t.width = 748,
        t.x = 0,
        t.y = 0,
        t
    },
    s._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "handbook_detail_pop_title_png",
        t.width = 103,
        t.x = 36,
        t.y = 2,
        t
    },
    s.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "handbook_detail_pop_btnClose_png",
        t.width = 33,
        t.x = 712,
        t.y = 1,
        t
    },
    s._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 392,
        t.source = "handbook_detail_pop_leftbg_png",
        t.width = 420,
        t.x = 0,
        t.y = 33,
        t
    },
    s.grpRb_i = function() {
        var t = new eui.Group;
        return this.grpRb = t,
        t.x = 1,
        t.y = 46,
        t.elementsContent = [this.rb_0_i(), this.rb_1_i(), this.rb_2_i()],
        t
    },
    s.rb_0_i = function() {
        var t = new eui.RadioButton;
        return this.rb_0 = t,
        t.groupName = "handbook_detail_tab_m",
        t.height = 63,
        t.value = "1",
        t.width = 171,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    s.rb_1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_1 = t,
        t.groupName = "handbook_detail_tab_m",
        t.height = 63,
        t.value = "2",
        t.width = 171,
        t.x = 0,
        t.y = 64,
        t.skinName = n,
        t
    },
    s.rb_2_i = function() {
        var t = new eui.RadioButton;
        return this.rb_2 = t,
        t.groupName = "handbook_detail_tab_m",
        t.height = 63,
        t.value = "3",
        t.width = 171,
        t.x = 0,
        t.y = 128,
        t.skinName = r,
        t
    },
    s.grpTab_i = function() {
        var t = new eui.Group;
        return this.grpTab = t,
        t.x = 3,
        t.y = 243,
        t.elementsContent = [this.tab_0_i(), this.tab_1_i()],
        t
    },
    s.tab_0_i = function() {
        var t = new eui.RadioButton;
        return this.tab_0 = t,
        t.groupName = "handbook_detail_tab_s",
        t.height = 42,
        t.value = "1",
        t.width = 165,
        t.x = 0,
        t.y = 0,
        t.skinName = o,
        t
    },
    s.tab_1_i = function() {
        var t = new eui.RadioButton;
        return this.tab_1 = t,
        t.groupName = "handbook_detail_tab_s",
        t.height = 42,
        t.value = "2",
        t.width = 165,
        t.x = 0,
        t.y = 42,
        t.skinName = a,
        t
    },
    s._viewStack_i = function() {
        var t = new eui.ViewStack;
        return this._viewStack = t,
        t.selectedIndex = 0,
        t.x = 176,
        t.y = 41,
        t.elementsContent = [this._HandbookLevelView1_i(), this._HandbookAwardView1_i(), this._HandbookRankView1_i()],
        t
    },
    s._HandbookLevelView1_i = function() {
        var t = new handbook.HandbookLevelView;
        return t.skinName = "HandbookLevelViewSkin",
        t.visible = !0,
        t
    },
    s._HandbookAwardView1_i = function() {
        var t = new handbook.HandbookAwardView;
        return t.skinName = "HandbookAwardViewSkin",
        t.visible = !0,
        t
    },
    s._HandbookRankView1_i = function() {
        var t = new handbook.HandbookRankView;
        return t.skinName = "HandbookRankViewSkin",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/HotmonsterFilterPopSkin.exml"] = window.HotmonsterFilterPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "tagA_1", "tagA_2", "tagA_3", "tagB_1", "tagB_2", "tagB_3", "tagB_4", "tagB_5", "tagB_6", "tagB_0", "btnReset", "btnEnsure"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.tagA_1_i(), this.tagA_2_i(), this.tagA_3_i(), this.tagB_1_i(), this.tagB_2_i(), this.tagB_3_i(), this.tagB_4_i(), this.tagB_5_i(), this.tagB_6_i(), this.tagB_0_i(), this.btnReset_i(), this.btnEnsure_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.scale9Grid = new egret.Rectangle(322, 0, 323, 34),
        t.source = "handbook_detail_pop_topbg_png",
        t.width = 479,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "handbook_detail_pop_btnClose_png",
        t.width = 33,
        t.x = 441.036,
        t.y = 1.282,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return this._Label1 = t,
        t.fontFamily = "REEJI",
        t.size = 24,
        t.text = "筛选",
        t.textColor = 16771434,
        t.x = 41,
        t.y = 7,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "适用战斗：",
        t.textColor = 8757203,
        t.x = 24,
        t.y = 70,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "功能倾向：",
        t.textColor = 8757203,
        t.x = 24,
        t.y = 130,
        t
    },
    i.tagA_1_i = function() {
        var t = new eui.Group;
        return this.tagA_1 = t,
        t.height = 25,
        t.width = 72,
        t.x = 113,
        t.y = 65,
        t.elementsContent = [this._Image3_i(), this._Label4_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "PVP",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagA_2_i = function() {
        var t = new eui.Group;
        return this.tagA_2 = t,
        t.height = 25,
        t.width = 72,
        t.x = 195,
        t.y = 64,
        t.elementsContent = [this._Image4_i(), this._Label5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label5_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "PVE",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagA_3_i = function() {
        var t = new eui.Group;
        return this.tagA_3 = t,
        t.height = 25,
        t.width = 72,
        t.x = 277,
        t.y = 64,
        t.elementsContent = [this._Image5_i(), this._Label6_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label6_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "全能",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_1_i = function() {
        var t = new eui.Group;
        return this.tagB_1 = t,
        t.height = 25,
        t.width = 72,
        t.x = 113,
        t.y = 124,
        t.elementsContent = [this._Image6_i(), this._Label7_i()],
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label7_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "主力",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_2_i = function() {
        var t = new eui.Group;
        return this.tagB_2 = t,
        t.height = 25,
        t.width = 72,
        t.x = 195,
        t.y = 124,
        t.elementsContent = [this._Image7_i(), this._Label8_i()],
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label8_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "刺客",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_3_i = function() {
        var t = new eui.Group;
        return this.tagB_3 = t,
        t.height = 25,
        t.width = 72,
        t.x = 277,
        t.y = 124,
        t.elementsContent = [this._Image8_i(), this._Label9_i()],
        t
    },
    i._Image8_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label9_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "坦克",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_4_i = function() {
        var t = new eui.Group;
        return this.tagB_4 = t,
        t.height = 25,
        t.width = 72,
        t.x = 359,
        t.y = 124,
        t.elementsContent = [this._Image9_i(), this._Label10_i()],
        t
    },
    i._Image9_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label10_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "干扰",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_5_i = function() {
        var t = new eui.Group;
        return this.tagB_5 = t,
        t.height = 25,
        t.width = 72,
        t.x = 113,
        t.y = 158,
        t.elementsContent = [this._Image10_i(), this._Label11_i()],
        t
    },
    i._Image10_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label11_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "辅助",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_6_i = function() {
        var t = new eui.Group;
        return this.tagB_6 = t,
        t.height = 25,
        t.width = 72,
        t.x = 195,
        t.y = 158,
        t.elementsContent = [this._Image11_i(), this._Label12_i()],
        t
    },
    i._Image11_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label12_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "拦截",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.tagB_0_i = function() {
        var t = new eui.Group;
        return this.tagB_0 = t,
        t.height = 25,
        t.width = 72,
        t.x = 277,
        t.y = 158,
        t.elementsContent = [this._Image12_i(), this._Label13_i()],
        t
    },
    i._Image12_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(4, 4, 2, 2),
        t.source = "handbook_filterbtn2_png",
        t.top = 0,
        t
    },
    i._Label13_i = function() {
        var t = new eui.Label;
        return t.bottom = 0,
        t.fontFamily = "MFShangHei",
        t.left = 0,
        t.right = 0,
        t.size = 16,
        t.text = "全能",
        t.textAlign = "center",
        t.textColor = 11520251,
        t.top = 0,
        t.verticalAlign = "middle",
        t
    },
    i.btnReset_i = function() {
        var t = new eui.Image;
        return this.btnReset = t,
        t.source = "handbook_pop_btncancel_png",
        t.x = 67,
        t.y = 213,
        t
    },
    i.btnEnsure_i = function() {
        var t = new eui.Image;
        return this.btnEnsure = t,
        t.source = "common_dialog_btnok_png",
        t.x = 274,
        t.y = 213,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/skin/BookSkinSkin.exml"] = window.BookSkinSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtbg", "txtSearch", "img_btn_search", "txt_notgot", "cb_ownless", "txt_progress", "txt_rank", "grp_progress", "grpRight", "list", "scroller"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpRight_i(), this.scroller_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textColor = 9025023,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        i.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textColor = 4149623,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["selectedbg", "selected"],
            this.elementsContent = [this.selectedbg_i(), this.selected_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1)]), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i.selectedbg_i = function() {
            var t = new eui.Image;
            return this.selectedbg = t,
            t.height = 23,
            t.source = "all_monster_panel_selectedbg_png",
            t.width = 23,
            t
        },
        i.selected_i = function() {
            var t = new eui.Image;
            return this.selected = t,
            t.height = 12,
            t.source = "all_monster_panel_selected_png",
            t.width = 16,
            t.x = 4,
            t.y = 6,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.right = 0,
        t.y = 45,
        t.elementsContent = [this.txtbg_i(), this.txtSearch_i(), this.img_btn_search_i(), this.txt_notgot_i(), this.cb_ownless_i(), this.grp_progress_i()],
        t
    },
    r.txtbg_i = function() {
        var t = new eui.Image;
        return this.txtbg = t,
        t.height = 29,
        t.source = "common_search_bg_png",
        t.width = 160,
        t.x = 193,
        t.y = 28,
        t
    },
    r.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 11,
        t.prompt = "输入皮肤名",
        t.rotation = .88,
        t.width = 134.998,
        t.x = 193,
        t.y = 35,
        t.skinName = i,
        t
    },
    r.img_btn_search_i = function() {
        var t = new eui.Image;
        return this.img_btn_search = t,
        t.height = 29,
        t.source = "AllMonsterPanel_search_png",
        t.width = 29,
        t.x = 325,
        t.y = 28,
        t
    },
    r.txt_notgot_i = function() {
        var t = new eui.Label;
        return this.txt_notgot = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "未拥有",
        t.textColor = 5008299,
        t.x = 92,
        t.y = 34,
        t
    },
    r.cb_ownless_i = function() {
        var t = new eui.CheckBox;
        return this.cb_ownless = t,
        t.x = 150,
        t.y = 31,
        t.skinName = n,
        t
    },
    r.grp_progress_i = function() {
        var t = new eui.Group;
        return this.grp_progress = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_progress_i(), this.txt_rank_i()],
        t
    },
    r._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 22,
        t.source = "all_monster_txtbg_png",
        t.width = 374,
        t.x = 0,
        t.y = 0,
        t
    },
    r.txt_progress_i = function() {
        var t = new eui.Label;
        return this.txt_progress = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "收集进度：9999/9999",
        t.textColor = 8497144,
        t.x = 48,
        t.y = 3,
        t
    },
    r.txt_rank_i = function() {
        var t = new eui.Label;
        return this.txt_rank = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "当前排名：99.99%",
        t.textColor = 16246131,
        t.x = 225,
        t.y = 3,
        t
    },
    r.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 527,
        t.left = 171,
        t.right = 15,
        t.scrollPolicyH = "off",
        t.y = 113,
        t.viewport = this.list_i(),
        t
    },
    r.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 485,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "left",
        t.horizontalGap = 15,
        t.orientation = "rows",
        t.paddingRight = 10,
        t.verticalGap = 17,
        t
    },
    e
} (eui.Skin);