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
highLadderRank; !
function(t) {
    var e; !
    function(t) {
        t[t.REPEAT = 0] = "REPEAT",
        t[t.NOREPEAT = 1] = "NOREPEAT"
    } (e = t.HighLadderType || (t.HighLadderType = {}));
    var i = function(i) {
        function n(t) {
            var e = i.call(this, t) || this;
            return e.KEYARR = [90, 120],
            e._startIndx = 0,
            e._isFirst = !0,
            e._loaderLength = 10,
            e._maxLen = 2e3,
            e._isEnd = !1,
            e._type = t,
            e.skinName = HighLadderRankSkin,
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            this.scroller_rank.viewport = this.list_viewport,
            this.list_viewport.itemRenderer = t.HighLadderRankItemRank,
            this._rankList = new eui.ArrayCollection,
            this.list_viewport.dataProvider = this._rankList,
            this.img_title.source = this._type === e.NOREPEAT ? "high_ladder_rank_texture_7_png": "high_ladder_rank_texture_10_png",
            this._heroView = new ClothPreview,
            this._heroView.show(MainManager.actorInfo.clothes),
            this.grp_hero.addChild(this._heroView),
            this._addEvents(),
            this.getSubType()
        },
        n.prototype._addEvents = function() {
            ImageButtonUtil.add(this.img_btn_close, this.onTouchImageButtonHandler, this),
            ImageButtonUtil.add(this.img_btn_reward, this.onTouchImageButtonHandler, this),
            this.scroller_rank.addEventListener(eui.UIEvent.CHANGE, this.onScrollerChange, this),
            this.scroller_rank.addEventListener(eui.UIEvent.CHANGE_END, this.onScrollerChangeEnd, this),
            SocketConnection.addCmdListener(45138, this.onReciveSubtypeHandler, this)
        },
        n.prototype._removeEvents = function() {
            SocketConnection.removeCmdListener(45138, this.onReciveSubtypeHandler, this),
            ImageButtonUtil.removeAll(this),
            this.scroller_rank.removeEventListener(eui.UIEvent.CHANGE, this.onScrollerChange, this),
            this.scroller_rank.removeEventListener(eui.UIEvent.CHANGE_END, this.onScrollerChangeEnd, this)
        },
        n.prototype.onTouchImageButtonHandler = function(t) {
            switch (t.currentTarget) {
            case this.img_btn_close:
                i.prototype.onClose.call(this);
                break;
            case this.img_btn_reward:
            }
        },
        n.prototype.getSubType = function() {
            SocketConnection.send(45138, 2)
        },
        n.prototype.onReciveSubtypeHandler = function(t) {
            var e = t.data;
            this._subType = e.readUnsignedInt(),
            this.updateAll()
        },
        n.prototype.getMyRanks = function(t, e) {
            var i = this;
            KTool.getMyRankPosition(this.KEYARR[this._type], this._subType, !0,
            function(n) {
                i._myRank = 0 > n ? 0 : n + 1,
                i.my_rankIcon.visible = i._myRank > 0 && i._myRank <= 3,
                i.lab_myrank.visible = !i.my_rankIcon.visible,
                i._myRank > 0 && i._myRank <= 3 && (i.my_rankIcon.source = "high_ladder_rank_icon_" + i._myRank + "_png"),
                i.lab_myrank.text = 0 > n ? "尚无排名": (n + 1).toString(),
                i.lab_name.text = MainManager.actorInfo.nick,
                i.lab_taomeeid.text = MainManager.actorInfo.userID + "",
                t.call(e)
            })
        },
        n.prototype.updateAll = function() {
            var t = this;
            this._isFirst && (this.getMyInfos(), this.getMyRanks(function() {
                t.loaderRank(),
                t._isFirst = !1
            },
            this))
        },
        n.prototype.loaderRank = function() {
            var t = this;
            this._isFirst ? KTool.getRangeRankList(this.KEYARR[this._type], this._subType, this._startIndx, 50).then(function(e) {
                t._startIndx += e.length,
                t._updateList(e),
                t.list_viewport.visible = !1,
                egret.setTimeout(function() {
                    var e = t.list_viewport.$children;
                    e.sort(function(t, e) {
                        var i = t.data,
                        n = e.data;
                        return i.rank - n.rank
                    });
                    for (var i = 0; i < e.length; i++) {
                        e[i].grp_item.x = e[i].grp_item.width;
                        var n = MathUtil.lerp(0, 100, e.length - 1, 500, i);
                        egret.Tween.get(e[i].grp_item).to({
                            x: 0
                        },
                        n, egret.Ease.quadOut)
                    }
                    t.list_viewport.visible = !0
                },
                t, 100)
            }) : KTool.getRangeRankList(this.KEYARR[this._type], this._subType, this._startIndx, this._startIndx + this._loaderLength).then(function(e) {
                t._startIndx += e.length,
                e.length < t._loaderLength && (t._isEnd = !0),
                t._updateList(e),
                t._rankList.length >= t._maxLen && (t._isEnd = !0)
            })
        },
        n.prototype._updateList = function(t) {
            for (var e = 0; e < t.length && !(this._rankList.length >= this._maxLen); e++) {
                var i = {};
                i.rank = this._rankList.length + 1,
                i.isSelf = i.rank === this._myRank,
                i.playerData = t[e],
                this._rankList.addItem(i)
            }
        },
        n.prototype.getMyInfos = function() {
            var t = this,
            i = this._type === e.REPEAT ? PeakJihad2016Controller.curMonthStarLvId: PeakJihad2016Controller.curJJMonthStarLvId,
            n = this._type === e.REPEAT ? PeakJihad2016Controller.curMonthMaxPointsId: PeakJihad2016Controller.curJJMonthMaxPointsId;
            KTool.getMultiValue([i, n, 100689],
            function(e) {
                var i = e[0],
                n = PeakJihadLevelRulesXMLInfo.getLadderLvByStarlv(i);
                t._currentLv = n,
                t.lab_start.text = PeakJihadLevelRulesXMLInfo.getStarByStarlv(i).toString(),
                t.lab_level.text = PeakJihadLevelRulesXMLInfo.getTitleByStarlv(i),
                t.icon_level.source = ClientConfig.getPeakjihadLevelPath(21 - n)
            })
        },
        n.prototype.onScrollerChange = function(t) {
            this.checkLoaderRank()
        },
        n.prototype.onScrollerChangeEnd = function(t) {
            this.checkLoaderRank()
        },
        n.prototype.checkLoaderRank = function() { ! this._isEnd && this.scroller_rank.viewport.contentHeight >= this.scroller_rank.viewport.scrollH + this.scroller_rank.height && this.loaderRank()
        },
        n.prototype.destroy = function() {
            this._heroView.destroy(),
            this._removeEvents(),
            i.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.HighLadderRank = i,
    __reflect(i.prototype, "highLadderRank.HighLadderRank")
} (highLadderRank || (highLadderRank = {}));
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
highLadderRank; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = HighLadderRankItemRankSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._addEvents()
        },
        e.prototype._addEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            this._vo = this.data,
            this.icon_1.visible = this._vo.rank <= 3,
            this.lab_rank.visible = this._vo.rank > 3,
            this._vo.rank <= 3 && (this.icon_1.source = "high_ladder_rank_icon_" + this._vo.rank + "_png"),
            this.lab_rank.text = this._vo.rank + "",
            this.lab_name.text = this._vo.playerData.nick,
            this.lab_taomeeid.text = this._vo.playerData.userid + "";
            var t = PeakJihadLevelRulesXMLInfo.getLadderLvByStarlv(this._vo.playerData.score),
            e = PeakJihadLevelRulesXMLInfo.getStarByStarlv(this._vo.playerData.score);
            this.lab_star.text = e + "",
            this.icon_level.source = ClientConfig.getPeakjihadLevelPath(21 - t),
            this.lab_level.text = PeakJihadLevelRulesXMLInfo.getTitleByStarlv(this._vo.playerData.score)
        },
        e.prototype.destroy = function() {
            this._removeEvents()
        },
        e
    } (eui.ItemRenderer);
    t.HighLadderRankItemRank = e,
    __reflect(e.prototype, "highLadderRank.HighLadderRankItemRank")
} (highLadderRank || (highLadderRank = {}));
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
highLadderRank; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.HighLadderRankRewardViewNewSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._arry = new eui.ArrayCollection,
            this._custumScroller = new common.ui.CustomScroller(this.List_item.width, this.List_item.height, 159, 136, this.List_item.layout.gap, t.RankLevelItemRender, 199, .9, 1, 1, 1, this.List_item, this._arry, 100, null, common.ui.CustomScroller.DIR_TO_H),
            this.addChild(this._custumScroller),
            this._custumScroller.x = this.List_item.x,
            this._custumScroller.y = this.List_item.y,
            this.list_reward.itemRenderer = t.RewardItemRender,
            this.list_reward.dataProvider = new eui.ArrayCollection;
            for (var i, n = config.xml.getAnyRes("pvp_peak_battle_clearing_bonus"), r = n.Root.Bonus, a = 0; a < r.length; a++) if (2010 === +r[a].ID) {
                i = r[a].Out;
                break
            }
            var o = this.resloveDataToOut2(i);
            o.unshift(null),
            o.push(null);
            var _ = o.reverse();
            this._arry.replaceAll(_)
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.group_arrow_left,
            function() {
                t._isMove || (t._isMove = !0, t._crrentIdx = Math.max(1, --t._crrentIdx), t._custumScroller.goToNum(t._crrentIdx, 150))
            },
            this),
            ImageButtonUtil.add(this.group_arrow_right,
            function() {
                t._isMove || (t._isMove = !0, t._crrentIdx = Math.min(t._arry.length - 2, ++t._crrentIdx), t._custumScroller.goToNum(t._crrentIdx, 150))
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide()
            },
            this),
            this._custumScroller.addEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this)
        },
        i.prototype.removeEvents = function() {
            this._custumScroller.removeEventListener(common.ui.CustomScroller.EVENT_CHANGE_END, this._onChangeScroller, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.setArrow = function() {
            this.group_arrow_left.visible = this._crrentIdx > 1,
            this.group_arrow_right.visible = this._crrentIdx < this._arry.length - 2
        },
        i.prototype._onChangeScroller = function() {
            this._crrentIdx = this._custumScroller.getSelectIndex(),
            this.setArrow(),
            this._showRewards(),
            this._isMove = !1
        },
        i.prototype._parseData = function() {
            this._myLevl = this._data
        },
        i.prototype._upDateView = function() {
            for (var t = this._arry.source,
            e = 0; e < t.length; e++) t[e] && t[e].level === this._myLevl + 1 && (this._crrentIdx = e);
            this._custumScroller.goToNum(this._crrentIdx, 200),
            this.setArrow(),
            this._showRewards()
        },
        i.prototype._showRewards = function() {
            var t = this._arry.getItemAt(this._crrentIdx);
            this.img_dw.visible = this._myLevl + 1 === t.level;
            var e = t.rewards;
            this.list_reward.dataProvider.removeAll();
            for (var i = 0; i < e.length; i++) this.list_reward.dataProvider.addItem(e[i])
        },
        i.prototype.resloveDataToOut2 = function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i],
                r = {
                    level: n.ID,
                    rewards: []
                };
                this._connectObj(n.Item, r.rewards, "Item"),
                this._connectObj(n.Skin, r.rewards, "Skin"),
                this._connectObj(n.Head, r.rewards, "Head"),
                e.push(r)
            }
            return e
        },
        i.prototype._connectObj = function(t, e, i) {
            if (t) if (Array.isArray(t)) for (var n = 0; n < t.length; n++) this._connectObj(t[n], e, i);
            else e.push({
                type: i,
                data: t
            })
        },
        i.prototype.resloveDataToOut = function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = t[i],
                r = n.out - 1;
                e[r] || (e[r] = {
                    level: n.out,
                    rewards: []
                }),
                e[r].rewards.push(n)
            }
            return e
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.HighLadderRewardViewNew = e,
    __reflect(e.prototype, "highLadderRank.HighLadderRewardViewNew")
} (highLadderRank || (highLadderRank = {}));
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
highLadderRank; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.RankLevelItemRenderSkin,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            if (this._renderVo = this.data, this._renderVo) {
                this.grp_item.visible = !0;
                var t = this._renderVo.level;
                this.icon.source = ClientConfig.getPeakjihadLevelPath(21 - t + 1),
                this.txtLvlName.text = PeakJihadLevelRulesXMLInfo.getTileNameByOutLevel(21 - t + 1)
            } else this.grp_item.visible = !1
        },
        i
    } (eui.ItemRenderer);
    t.RankLevelItemRender = e,
    __reflect(e.prototype, "highLadderRank.RankLevelItemRender")
} (highLadderRank || (highLadderRank = {}));
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
highLadderRank; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.RewardItemRenderSKin,
            i
        }
        return __extends(i, e),
        i.prototype.dataChanged = function() {
            this._vo = this.data;
            var t = this._vo.type,
            e = this._vo.data;
            switch (this.grouup_type.visible = !1, this.txtNum.text = "", t) {
            case "Item":
                this.icon.width = this.icon.height = 50,
                this.icon.source = ClientConfig.getItemIcon(e.ID);
                var i = e.Count > 1e4 ? e.Count / 1e4 + "万": e.Count;
                this.txtNum.text = i + "";
                break;
            case "Skin":
                this.icon.source = ClientConfig.getPetHeadPath(14e5 + e.ID),
                this.icon.width = this.icon.height = 65;
                break;
            case "Head":
                var n = config.Profilephoto.getItem(e.ID);
                1 === n.type ? (this.icon.source = ClientConfig.GetAvatarHead(n.icon), this.grouup_type.visible = !0) : this.icon.source = ClientConfig.GetAvatarFrame(n.icon),
                this.icon.width = this.icon.height = 65
            }
        },
        i
    } (eui.ItemRenderer);
    t.RewardItemRender = e,
    __reflect(e.prototype, "highLadderRank.RewardItemRender")
} (highLadderRank || (highLadderRank = {})),
window.highLadderRank = window.highLadderRank || {};
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
generateEUI.paths["resource/eui_skins/HighLadderRankItemRankSkin.exml"] = window.HighLadderRankItemRankSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["start", "icon_level", "icon_1", "lab_name", "lab_taomeeid", "lab_level", "lab_star", "lab_rank", "grp_item"],
        this.height = 54,
        this.width = 659,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.start_i(), this.icon_level_i(), this.icon_1_i(), this.lab_name_i(), this.lab_taomeeid_i(), this.lab_level_i(), this.lab_star_i(), this.lab_rank_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 54,
        t.source = "high_ladder_rank_item_rank_texture_0_png",
        t.width = 659,
        t.x = 0,
        t.y = 0,
        t
    },
    i.start_i = function() {
        var t = new eui.Image;
        return this.start = t,
        t.height = 30,
        t.source = "high_ladder_rank_start_png",
        t.width = 30,
        t.x = 615,
        t.y = 9,
        t
    },
    i.icon_level_i = function() {
        var t = new eui.Image;
        return this.icon_level = t,
        t.height = 30,
        t.width = 30,
        t.x = 418,
        t.y = 12,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 48,
        t.width = 58,
        t.x = 26,
        t.y = 0,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.size = 20,
        t.text = "布丁响叮当啊",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 126,
        t.x = 113,
        t.y = 16,
        t
    },
    i.lab_taomeeid_i = function() {
        var t = new eui.Label;
        return this.lab_taomeeid = t,
        t.size = 20,
        t.text = "1234567890",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 121,
        t.x = 259,
        t.y = 16,
        t
    },
    i.lab_level_i = function() {
        var t = new eui.Label;
        return this.lab_level = t,
        t.size = 20,
        t.text = "段位名称",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 100,
        t.x = 456,
        t.y = 16,
        t
    },
    i.lab_star_i = function() {
        var t = new eui.Label;
        return this.lab_star = t,
        t.size = 20,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 40,
        t.x = 569,
        t.y = 16,
        t
    },
    i.lab_rank_i = function() {
        var t = new eui.Label;
        return this.lab_rank = t,
        t.size = 20,
        t.text = "000",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 80,
        t.x = 17,
        t.y = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HighLadderRankRewardViewNewSkin.exml"] = window.highLadderRank.HighLadderRankRewardViewNewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["title", "bg", "dw_bg", "btnClose", "group_arrow_left", "group_arrow_right", "List_item", "img_dw", "list_reward"],
        this.height = 462,
        this.width = 778,
        this.elementsContent = [this.bg_i(), this.dw_bg_i(), this.btnClose_i(), this.group_arrow_left_i(), this.group_arrow_right_i(), this._Label1_i(), this.List_item_i(), this.img_dw_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.title_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 462,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 778,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 12,
        t.y = 32,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_medium_png",
        t.x = 16,
        t.y = 13,
        t
    },
    i.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "high_ladder_rank_reward_view_new_title_png",
        t.x = 49,
        t.y = 19,
        t
    },
    i.dw_bg_i = function() {
        var t = new eui.Image;
        return this.dw_bg = t,
        t.height = 214,
        t.source = "high_ladder_rank_reward_view_new_dw_bg_png",
        t.width = 704,
        t.x = 38,
        t.y = 75,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "common_close_1_png",
        t.x = 726,
        t.y = -9,
        t
    },
    i.group_arrow_left_i = function() {
        var t = new eui.Group;
        return this.group_arrow_left = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 69,
        t.width = 55,
        t.x = 52,
        t.y = 149,
        t.elementsContent = [this._Image4_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "high_ladder_rank_reward_view_new_arrow_left_png",
        t.width = 40,
        t.x = 8,
        t.y = 17,
        t
    },
    i.group_arrow_right_i = function() {
        var t = new eui.Group;
        return this.group_arrow_right = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 69,
        t.width = 55,
        t.x = 672,
        t.y = 149,
        t.elementsContent = [this._Image5_i()],
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "high_ladder_rank_reward_view_new_arrow_right_png",
        t.width = 40,
        t.x = 7.999999999999886,
        t.y = 17,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "结算奖励",
        t.textColor = 7844069,
        t.x = 351,
        t.y = 319,
        t
    },
    i.List_item_i = function() {
        var t = new eui.List;
        return this.List_item = t,
        t.height = 136,
        t.width = 544,
        t.x = 118,
        t.y = 132,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 65,
        t
    },
    i.img_dw_i = function() {
        var t = new eui.Image;
        return this.img_dw = t,
        t.height = 23,
        t.source = "high_ladder_rank_reward_view_new_img_dw_png",
        t.width = 84,
        t.x = 393,
        t.y = 105,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 67,
        t.width = 445,
        t.x = 168,
        t.y = 352,
        t.elementsContent = [this.list_reward_i()],
        t
    },
    i.list_reward_i = function() {
        var t = new eui.List;
        return this.list_reward = t,
        t.height = 67,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.y = 0,
        t.layout = this._HorizontalLayout2_i(),
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 30,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HighLadderRankSkin.exml"] = window.HighLadderRankSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img_title", "img_btn_close", "grp_hero", "icon_level", "lab_name", "lab_taomeeid", "lab_level", "lab_myrank", "my_rankIcon", "lab_start", "list_viewport", "scroller_rank", "img_btn_reward"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.img_btn_reward_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(736, 213, 58, 29),
        t.source = "common_ui_bg_1_png",
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 60,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.touchEnabled = !1,
        t.elementsContent = [this._Image2_i(), this.img_title_i(), this.img_btn_close_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.left = 0,
        t.right = 0,
        t.source = "common_top_bg_style1_png",
        t.top = 0,
        t
    },
    i.img_title_i = function() {
        var t = new eui.Image;
        return this.img_title = t,
        t.source = "high_ladder_rank_texture_7_png",
        t.x = 114,
        t.y = 7,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -291.5,
        t.y = 237.98,
        t.elementsContent = [this._Image3_i(), this.grp_hero_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_hero_base_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.grp_hero_i = function() {
        var t = new eui.Group;
        return this.grp_hero = t,
        t.height = 0,
        t.width = 0,
        t.x = 260,
        t.y = 233.02,
        t
    },
    i._Group3_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.touchEnabled = !1,
        t.width = 665,
        t.y = 57,
        t.elementsContent = [this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this._Image7_i(), this.icon_level_i(), this.lab_name_i(), this.lab_taomeeid_i(), this.lab_level_i(), this.lab_myrank_i(), this.my_rankIcon_i(), this.lab_start_i(), this.scroller_rank_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "high_ladder_rank_texture_8_png",
        t.width = 660,
        t.x = 5,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 64,
        t.source = "high_ladder_rank_myRankbg_png",
        t.width = 659,
        t.x = 5,
        t.y = 507,
        t
    },
    i._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "high_ladder_rank_texture_9_png",
        t.width = 32,
        t.x = 0,
        t.y = 502,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "排名",
        t.textColor = 3639749,
        t.x = 42,
        t.y = 7,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "昵称",
        t.textColor = 3639749,
        t.x = 161,
        t.y = 7,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "米米号",
        t.textColor = 3639749,
        t.x = 298,
        t.y = 8,
        t
    },
    i._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "黑体",
        t.size = 20,
        t.text = "天梯段位",
        t.textColor = 3639749,
        t.x = 470,
        t.y = 7,
        t
    },
    i._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 30,
        t.source = "high_ladder_rank_start_png",
        t.width = 30,
        t.x = 615,
        t.y = 523,
        t
    },
    i.icon_level_i = function() {
        var t = new eui.Image;
        return this.icon_level = t,
        t.height = 30,
        t.source = "high_ladder_rank_icon_level_png",
        t.width = 30,
        t.x = 428,
        t.y = 526.04,
        t
    },
    i.lab_name_i = function() {
        var t = new eui.Label;
        return this.lab_name = t,
        t.size = 20,
        t.text = "布丁响叮当",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 126,
        t.x = 118,
        t.y = 530,
        t
    },
    i.lab_taomeeid_i = function() {
        var t = new eui.Label;
        return this.lab_taomeeid = t,
        t.size = 20,
        t.text = "1234567890",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 121,
        t.x = 264,
        t.y = 530,
        t
    },
    i.lab_level_i = function() {
        var t = new eui.Label;
        return this.lab_level = t,
        t.size = 20,
        t.text = "段位名称",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 100,
        t.x = 461,
        t.y = 530,
        t
    },
    i.lab_myrank_i = function() {
        var t = new eui.Label;
        return this.lab_myrank = t,
        t.size = 20,
        t.text = "尚无排名",
        t.textAlign = "center",
        t.textColor = 16773477,
        t.width = 80,
        t.x = 26,
        t.y = 530,
        t
    },
    i.my_rankIcon_i = function() {
        var t = new eui.Image;
        return this.my_rankIcon = t,
        t.source = "high_ladder_rank_icon_1_png",
        t.x = 31.88,
        t.y = 514,
        t
    },
    i.lab_start_i = function() {
        var t = new eui.Label;
        return this.lab_start = t,
        t.size = 20,
        t.text = "000",
        t.textAlign = "right",
        t.textColor = 16773477,
        t.width = 40,
        t.x = 574,
        t.y = 530,
        t
    },
    i.scroller_rank_i = function() {
        var t = new eui.Scroller;
        return this.scroller_rank = t,
        t.height = 465,
        t.width = 659,
        t.x = 5,
        t.y = 38,
        t.viewport = this.list_viewport_i(),
        t
    },
    i.list_viewport_i = function() {
        var t = new eui.List;
        return this.list_viewport = t,
        t.y = -1.52,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.img_btn_reward_i = function() {
        var t = new eui.Image;
        return this.img_btn_reward = t,
        t.height = 176,
        t.left = 0,
        t.source = "high_ladder_rank_img_btn_reward_png",
        t.verticalCenter = 17,
        t.visible = !1,
        t.width = 88,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/RankLevelItemRenderSkin.exml"] = window.highLadderRank.RankLevelItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtLvlName", "grp_item"],
        this.height = 136,
        this.width = 159,
        this.elementsContent = [this.grp_item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.grp_item_i = function() {
        var t = new eui.Group;
        return this.grp_item = t,
        t.anchorOffsetX = 79.5,
        t.anchorOffsetY = 68,
        t.bottom = 0,
        t.x = 79.5,
        t.elementsContent = [this.icon_i(), this._Image1_i(), this.txtLvlName_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 104,
        t.source = "high_ladder_rank_reward_view_new_icon_png",
        t.width = 104,
        t.x = 27,
        t.y = 0,
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "high_ladder_rank_reward_view_new_img_titleBg_png",
        t.width = 159,
        t.x = 0,
        t.y = 104,
        t
    },
    i.txtLvlName_i = function() {
        var t = new eui.Label;
        return this.txtLvlName = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "六合战神",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.y = 109,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/RewardItemRenderSKin.exml"] = window.highLadderRank.RewardItemRenderSKin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtNum", "type_bg", "txt_head", "grouup_type", "item"],
        this.height = 65,
        this.width = 65,
        this.elementsContent = [this.item_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.icon_i(), this.txtNum_i(), this.grouup_type_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 65,
        t.source = "common_icon_bg_style_1_png",
        t.width = 65,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 50,
        t.horizontalCenter = 0,
        t.source = "",
        t.verticalCenter = 0,
        t.width = 50,
        t
    },
    i.txtNum_i = function() {
        var t = new eui.Label;
        return this.txtNum = t,
        t.right = 7,
        t.size = 16,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "99",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.y = 48,
        t
    },
    i.grouup_type_i = function() {
        var t = new eui.Group;
        return this.grouup_type = t,
        t.bottom = 0,
        t.horizontalCenter = 0,
        t.elementsContent = [this.type_bg_i(), this.txt_head_i()],
        t
    },
    i.type_bg_i = function() {
        var t = new eui.Image;
        return this.type_bg = t,
        t.height = 16,
        t.source = "high_ladder_rank_reward_view_new_type_bg_png",
        t.width = 65,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_head_i = function() {
        var t = new eui.Label;
        return this.txt_head = t,
        t.size = 15,
        t.text = "头像",
        t.textColor = 16777215,
        t.x = 17,
        t.y = 0,
        t
    },
    e
} (eui.Skin);