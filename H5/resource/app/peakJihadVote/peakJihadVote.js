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
peakJihadVote; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakJihadConfirmPopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                i.hide(),
                PopViewManager.getInstance().openView(new t.PeakJihadVotePopView)
            },
            this),
            ImageButtonUtil.add(this.btnVote,
            function() {
                EventManager.dispatchEvent(new egret.Event("event_votelist_Vote", !1, !1, {
                    callBack: function() {
                        i.hide()
                    },
                    caller: i,
                    pid: i.petId
                }))
            },
            this)
        },
        i.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this.petId = t,
            this.updateView()
        },
        i.prototype.updateView = function() {
            this.txt_petId.text = "精灵序号：" + this.petId,
            this.txt_petName.text = PetXMLInfo.getName(this.petId),
            this.icon.source = ClientConfig.getPetHeadPath(this.petId)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PeakJihadConfirmPop = e,
    __reflect(e.prototype, "peakJihadVote.PeakJihadConfirmPop")
} (peakJihadVote || (peakJihadVote = {}));
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
    return new(i || (i = Promise))(function(o, a) {
        function r(t) {
            try {
                h(n.next(t))
            } catch(e) {
                a(e)
            }
        }
        function s(t) {
            try {
                h(n["throw"](t))
            } catch(e) {
                a(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new i(function(e) {
                e(t.value)
            }).then(r, s)
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
        if (o) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (o = 1, a && (r = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(r = r.call(a, i[1])).done) return r;
            switch (a = 0, r && (i = [0, r.value]), i[0]) {
            case 0:
            case 1:
                r = i;
                break;
            case 4:
                return h.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                h.label++,
                a = i[1],
                i = [0];
                continue;
            case 7:
                i = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (r = h.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < r[1]) {
                    h.label = r[1],
                    r = i;
                    break
                }
                if (r && h.label < r[2]) {
                    h.label = r[2],
                    h.ops.push(i);
                    break
                }
                r[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = e.call(t, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            o = r = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var o, a, r, s, h = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1]
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
peakJihadVote; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return StatLogger.log("1023版本系统功能", "巅峰圣战", "进入投票界面"),
            t.skinName = PeakjihadvoteSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.grpTop),
            this.group_data.itemRenderer = t.PeakJihadVoteItem,
            this.addEvent(),
            this.update()
        },
        Object.defineProperty(i.prototype, "isvote", {
            get: function() {
                return this._isvote
            },
            set: function(t) {
                this._isvote = t,
                this._setVoteBtnState()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype._setVoteBtnState = function() {
            var t = !this._isvote;
            DisplayUtil.setEnabled(this.voteBtn, t, !t)
        },
        i.prototype.destroy = function() {
            this.removeEvent(),
            e.prototype.destroy.call(this)
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.prototype.onClose.call(t)
            },
            this),
            ImageButtonUtil.add(this.voteBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.rankBtn, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.queBtn, this.onTouchTapImageButton, this),
            EventManager.addEventListener("event_votelist_Vote", this.voteHandle, this)
        },
        i.prototype.removeEvent = function() {
            EventManager.removeEventListener("event_votelist_Vote", this.voteHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.voteHandle = function(t) {
            var e = this;
            Alert.show("每人只有一次投票机会，确定投票？",
            function() {
                var i = t.data.callBack,
                n = t.data.caller,
                o = t.data.pid;
                SocketConnection.sendByQueue(42376, [1, o],
                function(t) {
                    StatLogger.log("1023版本系统功能", "巅峰圣战", "输入ID投票"),
                    Alarm.show("投票成功！"),
                    e.isvote = !0,
                    i && i.apply(n || e)
                })
            })
        },
        i.prototype.onTouchTapImageButton = function(e) {
            switch (e.target) {
            case this.rankBtn:
                ModuleManager.showModuleByID(46);
                break;
            case this.voteBtn:
                KTool.getMultiValue([20261],
                function(e) {
                    e[0] < 3 ? Alarm.show("至少完成3局竞技模式对战，并于竞技模式达到出世天骄或以上段位，才能参与本周的投票哦。") : PopViewManager.getInstance().openView(new t.PeakJihadVotePopView)
                });
                break;
            case this.queBtn:
                var i = {};
                i.titleSource = RES.getRes("PeakJihadVote_title_quanjubanwei_png"),
                i.data = [{
                    tabName: "基本作用",
                    desc: ["全局BAN位是通过用户投票选出，在下个月度6V6竞技模式中生效的BAN位（被禁用的BAN位精灵将无法参与放入背包进行战斗）。根据联赛开启的周数，系统将选取投票的前若干名，每周生效一个，顺序随机！"].join("\n")
                },
                {
                    tabName: "投票时间",
                    desc: ["全局BAN位的投票时间为每个月度联赛的最后两周，截止时间为最后一周更新下一周活动前的晚上0点！（本次投票仅一周）"].join("\n")
                },
                {
                    tabName: "投票名单",
                    desc: ["投票默认名单将直接使用投票期间的巅峰BAN榜单和PICK榜单共20只精灵，同时也可以通过输入精灵ID对任意精灵投票！"].join("\n")
                },
                {
                    tabName: "投票资格",
                    desc: ["当前月度联赛任意模式段位达到精灵学者（初入学徒下一级）即可参与投票，每个米米号限投1票！"].join("\n")
                }],
                tipsPop.TipsPop.openMulitHelpPop(i)
            }
        },
        i.prototype.update = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.getNowSubType()];
                    case 1:
                        return t.sent(),
                        [4, this.getvoteState()];
                    case 2:
                        return t.sent(),
                        this.updatelist(),
                        [2]
                    }
                })
            })
        },
        i.prototype.setItems = function(t) {
            if (this.group_data.visible = !1, this.nullListFlag.visible = !1, t.length > 0) {
                this.group_data.visible = !0;
                for (var e = 0; 10 > e; e++) {
                    var i = this["item_" + e];
                    i.setData(t[e] || null),
                    i.UpdateItem()
                }
            } else this.nullListFlag.visible = !0
        },
        i.prototype.updatelist = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_DAILY_RANK_INFO, [166, this._subType, 0, 9],
            function(e) {
                var i = e.data;
                i.position = 0;
                for (var n, o, a, r, s = [], h = i.readUnsignedInt(), _ = 0, u = 0; h > u; u++) n = i.readUnsignedInt(),
                o = i.readUnsignedInt(),
                a = i.readUTFBytes(16),
                r = {
                    petid: n,
                    score: o,
                    nick: a,
                    vote: t._isvote,
                    idx: u,
                    totalScroe: 0
                },
                _ += o,
                s.push(r);
                s.map(function(t) {
                    t.totalScroe = _
                });
                var h = s.length;
                if (10 > h) for (var p = 0; 10 - h > p; p++) s.push(null);
                t.group_data.dataProvider = new eui.ArrayCollection(s)
            })
        },
        i.prototype.getvoteState = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        KTool.getMultiValue([20260, PeakJihad2016Controller.curMonthStarLvId, PeakJihad2016Controller.curJJMonthStarLvId],
                        function(i) {
                            t.isvote = !!i[0],
                            t._curStarLv = i[1],
                            t._curJJStarLv = i[2],
                            e()
                        })
                    })]
                })
            })
        },
        i.prototype.getNowSubType = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        var n = PeakJihad2016Controller.settlementTime - 1209600,
                        o = PeakJihad2016Controller.settlementTime,
                        a = new Date(1e3 * n),
                        r = new Date(1e3 * o),
                        s = SystemTimerManager.time > n && SystemTimerManager.time < o;
                        t._isActFlag = s,
                        t._setVoteBtnState(),
                        t.txt.text = String(a.getMonth() + 1 + "月" + a.getDate() + "日——" + (r.getMonth() + 1) + "月" + r.getDate() + "日");
                        SystemTimerManager.time > n ? 2 : 1;
                        SocketConnection.sendByQueue(45138, [2],
                        function(i) {
                            var n = i.data;
                            t._subType = n.readUnsignedInt(),
                            e()
                        })
                    })]
                })
            })
        },
        i
    } (BaseModule);
    t.PeakJihadVote = e,
    __reflect(e.prototype, "peakJihadVote.PeakJihadVote")
} (peakJihadVote || (peakJihadVote = {}));
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
peakJihadVote; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PeakJihadVoteItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this),
            this.updateView()
        },
        e.prototype.updateView = function() {
            this.data ? (this.icon.visible = !0, this.icon_null.visible = !1, this.txt_id.text = this.data.petid + "", this.txt_name.text = PetXMLInfo.getName(this.data.petid), this.icon.source = ClientConfig.getPetHeadPath(this.data.petid), this.img_rank.source = "PeakJihadVote_icon_" + (this.data.idx + 1) + "_png", this.txt_ticket.text = "票数：" + this.data.score) : (this.icon.visible = !1, this.icon_null.visible = !0, this.img_rank.source = "", this.txt_id.text = this.txt_name.text = this.txt_ticket.text = "")
        },
        e.prototype.destroy = function() {
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.PeakJihadVoteItem = e,
    __reflect(e.prototype, "peakJihadVote.PeakJihadVoteItem")
} (peakJihadVote || (peakJihadVote = {}));
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
peakJihadVote; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PeakjihadvotepopSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            DisplayUtil.setEnabled(this.voteBtn, !1)
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.voteBtn,
            function() {
                var i = ~~e.txtSearch.text;
                return ! PetXMLInfo.getName(i) || i > 5e3 ? void BubblerManager.getInstance().showText("你输入的ID有误！") : (e.hide(), void PopViewManager.getInstance().openView(new t.PeakJihadConfirmPop, PopViewManager.createDefaultStyleObject(), i))
            },
            this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.onChangeTxt, this)
        },
        i.prototype.onChangeTxt = function() {
            var t = ~~this.txtSearch.text;
            DisplayUtil.setEnabled(this.voteBtn, !!t)
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.PeakJihadVotePopView = e,
    __reflect(e.prototype, "peakJihadVote.PeakJihadVotePopView")
} (peakJihadVote || (peakJihadVote = {}));
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
peakJihadVote; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BankBigItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._progressMaxWidth = this.progress.width,
            this._updateView()
        },
        i.prototype.setData = function(t) {
            this.data = t,
            this._updateView()
        },
        i.prototype.UpdateItem = function() {
            this._updateView()
        },
        i.prototype._updateView = function() {
            this.group_data.visible = null !== this.data,
            this.txt_noData.visible = !this.group_data.visible,
            this.data && (this.head.source = ClientConfig.getPetHeadPath(this.data.petid), this.txtName.text = PetXMLInfo.getName(this.data.petid), this.txtCount.text = this.data.score + "", this.rank.source = "PeakJihadVote_icon_" + (this.data.idx + 1) + "_png", this.progress.width = Math.max(0, Math.min(this.data.score / this.data.totalScroe * this._progressMaxWidth, this._progressMaxWidth)))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BankBigItem = e,
    __reflect(e.prototype, "peakJihadVote.BankBigItem")
} (peakJihadVote || (peakJihadVote = {}));
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
peakJihadVote; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.BankSmallItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._progressMaxWidth = this.progress.width,
            this._updateView()
        },
        i.prototype.setData = function(t) {
            this.data = t,
            this._updateView()
        },
        i.prototype.UpdateItem = function() {
            this._updateView()
        },
        i.prototype._updateView = function() {
            this.group_data.visible = null !== this.data,
            this.txt_noData.visible = !this.group_data.visible,
            this.data && (this.head.source = ClientConfig.getPetHeadPath(this.data.petid), this.txtName.text = PetXMLInfo.getName(this.data.petid), this.txtCount.text = this.data.score + "", this.rank.source = "PeakJihadVote_icon_" + (this.data.idx + 1) + "_png", this.progress.width = Math.max(0, Math.min(this.data.score / this.data.totalScroe * this._progressMaxWidth, this._progressMaxWidth)))
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.BankSmallItem = e,
    __reflect(e.prototype, "peakJihadVote.BankSmallItem")
} (peakJihadVote || (peakJihadVote = {})),
window.peakJihadVote = window.peakJihadVote || {};
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
generateEUI.paths["resource/eui_skins/comp/BankBigItemSkin.exml"] = window.peakJihadVote.BankBigItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_big", "vote_bg", "head", "pet_head_size_60_60", "txtCount", "txtID", "txtName", "progress_bg", "progress", "rank", "group_data", "txt_noData"],
        this.height = 70,
        this.width = 840,
        this.elementsContent = [this.bg_big_i(), this.group_data_i(), this.txt_noData_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_big_i = function() {
        var t = new eui.Image;
        return this.bg_big = t,
        t.height = 70,
        t.source = "PeakJihadVote_bg_big_png",
        t.width = 839,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_data_i = function() {
        var t = new eui.Group;
        return this.group_data = t,
        t.x = 9,
        t.y = 0,
        t.elementsContent = [this.vote_bg_i(), this.pet_head_size_60_60_i(), this._Group1_i(), this.txtID_i(), this.txtName_i(), this.progress_bg_i(), this.progress_i(), this.rank_i()],
        t
    },
    i.vote_bg_i = function() {
        var t = new eui.Image;
        return this.vote_bg = t,
        t.height = 44,
        t.source = "PeakJihadVote_vote_bg_png",
        t.width = 216,
        t.x = 615,
        t.y = 0,
        t
    },
    i.pet_head_size_60_60_i = function() {
        var t = new eui.Group;
        return this.pet_head_size_60_60 = t,
        t.x = 58,
        t.y = 5,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.head_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_pet_head_bg_size_110_110_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 60,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 60,
        t.source = "",
        t.width = 60,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 13,
        t.y = 5,
        t.elementsContent = [this.txtCount_i(), this._Label1_i()],
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.italic = !0,
        t.size = 34,
        t.text = "99999",
        t.textColor = 16777215,
        t.x = 50,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.italic = !0,
        t.size = 20,
        t.text = "票数:",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 9.5,
        t
    },
    i.txtID_i = function() {
        var t = new eui.Label;
        return this.txtID = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 125,
        t.y = 15,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 18,
        t.text = "布丁布丁响叮当",
        t.textColor = 16777215,
        t.x = 200,
        t.y = 16,
        t
    },
    i.progress_bg_i = function() {
        var t = new eui.Image;
        return this.progress_bg = t,
        t.height = 6,
        t.source = "PeakJihadVote_progress_bg_png",
        t.width = 690,
        t.x = 127,
        t.y = 51,
        t
    },
    i.progress_i = function() {
        var t = new eui.Image;
        return this.progress = t,
        t.height = 10,
        t.source = "PeakJihadVote_progress_png",
        t.width = 694,
        t.x = 125,
        t.y = 49,
        t
    },
    i.rank_i = function() {
        var t = new eui.Image;
        return this.rank = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "PeakJihadVote_icon_1_png",
        t.x = 0,
        t.y = 10,
        t
    },
    i.txt_noData_i = function() {
        var t = new eui.Label;
        return this.txt_noData = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "暂无数据",
        t.textColor = 11785707,
        t.x = 380,
        t.y = 25,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/BankSmallItemSkin.exml"] = window.peakJihadVote.BankSmallItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg_small", "head", "pet_head_size_45_45", "txtCount", "txtID", "txtName", "progress_bg", "progress", "rank", "group_data", "txt_noData"],
        this.height = 54,
        this.width = 839,
        this.elementsContent = [this.bg_small_i(), this.group_data_i(), this.txt_noData_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_small_i = function() {
        var t = new eui.Image;
        return this.bg_small = t,
        t.height = 54,
        t.source = "PeakJihadVote_bg_small_png",
        t.width = 839,
        t.x = 0,
        t.y = 0,
        t
    },
    i.group_data_i = function() {
        var t = new eui.Group;
        return this.group_data = t,
        t.x = 18,
        t.y = 5,
        t.elementsContent = [this.pet_head_size_45_45_i(), this._Group1_i(), this.txtID_i(), this.txtName_i(), this.progress_bg_i(), this.progress_i(), this.rank_i()],
        t
    },
    i.pet_head_size_45_45_i = function() {
        var t = new eui.Group;
        return this.pet_head_size_45_45 = t,
        t.x = 57,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.head_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "common_pet_head_bg_size_110_110_png",
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 45,
        t.source = "common_pet_head_bg_null_size_100_100_png",
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 45,
        t.source = "",
        t.width = 45,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.y = 0,
        t.elementsContent = [this.txtCount_i(), this._Label1_i()],
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.italic = !0,
        t.size = 30,
        t.text = "79882",
        t.textColor = 61695,
        t.x = 50,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.italic = !0,
        t.size = 20,
        t.text = "票数:",
        t.textColor = 61439,
        t.x = 0,
        t.y = 6.5,
        t
    },
    i.txtID_i = function() {
        var t = new eui.Label;
        return this.txtID = t,
        t.size = 18,
        t.stroke = 1,
        t.strokeColor = 1973795,
        t.text = "Lv.100",
        t.textColor = 16773477,
        t.x = 116,
        t.y = 5,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.size = 18,
        t.text = "布丁布丁响叮当",
        t.textColor = 16777215,
        t.x = 191,
        t.y = 6,
        t
    },
    i.progress_bg_i = function() {
        var t = new eui.Image;
        return this.progress_bg = t,
        t.height = 6,
        t.source = "PeakJihadVote_progress_bg_png",
        t.width = 690,
        t.x = 118,
        t.y = 32,
        t
    },
    i.progress_i = function() {
        var t = new eui.Image;
        return this.progress = t,
        t.height = 10,
        t.source = "PeakJihadVote_progress_png",
        t.width = 694,
        t.x = 116,
        t.y = 30,
        t
    },
    i.rank_i = function() {
        var t = new eui.Image;
        return this.rank = t,
        t.source = "PeakJihadVote_icon_10_png",
        t.x = 0,
        t.y = 2,
        t
    },
    i.txt_noData_i = function() {
        var t = new eui.Label;
        return this.txt_noData = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "暂无数据",
        t.textColor = 11785707,
        t.x = 380,
        t.y = 17,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadConfirmPopSkin.exml"] = window.PeakJihadConfirmPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "btnBack", "btnVote", "icon", "txt_petId", "txt_petName"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.btnBack_i(), this.btnVote_i(), this._Image3_i(), this._Group1_i(), this.txt_petId_i(), this.txt_petName_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.source = "common_s9_pop_bg4_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 34,
        t.source = "common_pop_up_bg_m_png",
        t.width = 476,
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 33,
        t.source = "common_pop_btn_close_png",
        t.width = 33,
        t.x = 439,
        t.y = 0,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 46,
        t.source = "peak_jihad_confirm_pop_btnBack_png",
        t.width = 134,
        t.x = 69,
        t.y = 213,
        t
    },
    i.btnVote_i = function() {
        var t = new eui.Image;
        return this.btnVote = t,
        t.height = 46,
        t.source = "peak_jihad_confirm_pop_btnVote_png",
        t.width = 134,
        t.x = 274,
        t.y = 213,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 31,
        t.source = "peak_jihad_confirm_pop_title_png",
        t.width = 247,
        t.x = 36,
        t.y = 1,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 87,
        t.y = 70,
        t.elementsContent = [this._Image4_i(), this.icon_i(), this._Image5_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 103,
        t.source = "peak_jihad_vote_item_iconbg_down_png",
        t.visible = !0,
        t.width = 103,
        t.x = 3,
        t.y = 4,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 100,
        t.visible = !0,
        t.width = 100,
        t.x = 5,
        t.y = 5,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 111,
        t.source = "peak_jihad_vote_item_iconbg_up_png",
        t.visible = !0,
        t.width = 111,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_petId_i = function() {
        var t = new eui.Label;
        return this.txt_petId = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "精灵序号：9999",
        t.textColor = 8757203,
        t.x = 215,
        t.y = 82,
        t
    },
    i.txt_petName_i = function() {
        var t = new eui.Label;
        return this.txt_petName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "精灵名精灵名精灵名",
        t.textColor = 8757203,
        t.x = 215,
        t.y = 116,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadVoteItemSkin.exml"] = window.PeakJihadVoteItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txt_ticket", "txt_id", "txt_name", "icon", "icon_null", "img_rank"],
        this.height = 87,
        this.width = 478,
        this.elementsContent = [this._Image1_i(), this.txt_ticket_i(), this.txt_id_i(), this.txt_name_i(), this._Image2_i(), this.icon_i(), this.icon_null_i(), this._Image3_i(), this.img_rank_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 87,
        t.source = "peak_jihad_vote_item_bg_png",
        t.width = 478,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt_ticket_i = function() {
        var t = new eui.Label;
        return this.txt_ticket = t,
        t.fontFamily = "MFShangHei",
        t.size = 22,
        t.text = "票数：9999999",
        t.textColor = 16777215,
        t.x = 312,
        t.y = 54,
        t
    },
    i.txt_id_i = function() {
        var t = new eui.Label;
        return this.txt_id = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "9999",
        t.textColor = 12834813,
        t.x = 213,
        t.y = 14,
        t
    },
    i.txt_name_i = function() {
        var t = new eui.Label;
        return this.txt_name = t,
        t.fontFamily = "MFShangHei",
        t.right = 11,
        t.size = 20,
        t.text = "精灵名字最多九字符",
        t.textColor = 12834813,
        t.y = 14,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 74,
        t.source = "peak_jihad_vote_item_iconbg_down_png",
        t.visible = !0,
        t.width = 74,
        t.x = 93,
        t.y = 7,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 71,
        t.visible = !0,
        t.width = 71,
        t.x = 95,
        t.y = 8,
        t
    },
    i.icon_null_i = function() {
        var t = new eui.Image;
        return this.icon_null = t,
        t.height = 75,
        t.source = "peak_jihad_vote_item_icon_null_png",
        t.visible = !0,
        t.width = 77,
        t.x = 88,
        t.y = 7,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 82,
        t.source = "peak_jihad_vote_item_iconbg_up_png",
        t.visible = !0,
        t.width = 82,
        t.x = 90,
        t.y = 3,
        t
    },
    i.img_rank_i = function() {
        var t = new eui.Image;
        return this.img_rank = t,
        t.horizontalCenter = -190,
        t.source = "PeakJihadVote_icon_1_png",
        t.verticalCenter = -1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadvotepopSkin.exml"] = window.PeakjihadvotepopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "voteBtn", "bg4", "id", "txtSearch"],
        this.height = 196,
        this.width = 415,
        this.elementsContent = [this.bg_i(), this.voteBtn_i(), this._Label1_i(), this.bg4_i(), this.id_i(), this.txtSearch_i()]
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
            t.textAlign = "center",
            t.textColor = 13097725,
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
            t.textAlign = "center",
            t.textColor = 8757203,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 196,
        t.source = "peakJihadVotePop_bg_png",
        t.width = 415,
        t.x = 0,
        t.y = 0,
        t
    },
    n.voteBtn_i = function() {
        var t = new eui.Image;
        return this.voteBtn = t,
        t.height = 46,
        t.source = "peakJihadVotePop_voteBtn_png",
        t.width = 134,
        t.x = 139,
        t.y = 134,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "请输入投票精灵的序号：",
        t.textColor = 13820671,
        t.x = 113,
        t.y = 36,
        t
    },
    n.bg4_i = function() {
        var t = new eui.Image;
        return this.bg4 = t,
        t.height = 30,
        t.source = "peakJihadVotePop_bg4_png",
        t.width = 220,
        t.x = 96,
        t.y = 71,
        t
    },
    n.id_i = function() {
        var t = new eui.Label;
        return this.id = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "文本输入框",
        t.textColor = 8757203,
        t.visible = !1,
        t.x = 166,
        t.y = 78,
        t
    },
    n.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.height = 30,
        t.maxChars = 4,
        t.prompt = "输入精灵ID",
        t.restrict = "0-9",
        t.width = 209,
        t.x = 102,
        t.y = 75,
        t.skinName = i,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakjihadvoteSkin.exml"] = window.PeakjihadvoteSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "queBtn", "grpTop", "txt1", "txt", "group_data", "rankBtn", "voteBtn", "nullListFlag"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this.grpTop_i(), this._Group1_i(), this.group_data_i(), this.rankBtn_i(), this.voteBtn_i(), this.nullListFlag_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.percentHeight = 100,
        t.percentWidth = 100,
        t.source = "common_ui_bg_3_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpTop_i = function() {
        var t = new eui.Group;
        return this.grpTop = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.btnClose_i(), this.queBtn_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 76,
        t.source = "adapt_up_bg_png",
        t.x = -78,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.visible = !0,
        t.x = -5,
        t.y = 2,
        t.elementsContent = [this._Rect1_i(), this._Image3_i(), this._Image4_i()],
        t
    },
    i._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillAlpha = 0,
        t.height = 45,
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "PeakJihadVote_btnClose_png",
        t.x = 18,
        t.y = 3,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "PeakJihadVote_txt2_png",
        t.x = 54,
        t.y = 7,
        t
    },
    i.queBtn_i = function() {
        var t = new eui.Image;
        return this.queBtn = t,
        t.height = 28,
        t.source = "common_help_icon_1_png",
        t.width = 24,
        t.x = 259,
        t.y = 13,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 24.5,
        t.visible = !1,
        t.y = 612,
        t.elementsContent = [this.txt1_i(), this.txt_i()],
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "本次投票时间：",
        t.textColor = 16777215,
        t.x = 0,
        t.y = 2,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "12月09日—12月19日",
        t.textColor = 16777215,
        t.x = 153,
        t.y = 2,
        t
    },
    i.group_data_i = function() {
        var t = new eui.List;
        return this.group_data = t,
        t.height = 470,
        t.horizontalCenter = 7.5,
        t.width = 975,
        t.y = 72,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.columnAlign = "justifyUsingGap",
        t.orientation = "rows",
        t.requestedColumnCount = 2,
        t.requestedRowCount = 5,
        t.rowAlign = "justifyUsingGap",
        t
    },
    i.rankBtn_i = function() {
        var t = new eui.Image;
        return this.rankBtn = t,
        t.height = 80,
        t.left = 28,
        t.source = "PeakJihadVote_rankBtn_png",
        t.visible = !1,
        t.width = 72,
        t.y = 523,
        t
    },
    i.voteBtn_i = function() {
        var t = new eui.Image;
        return this.voteBtn = t,
        t.height = 46,
        t.right = 71,
        t.source = "PeakJihadVote_voteBtn_png",
        t.visible = !0,
        t.width = 134,
        t.y = 568,
        t
    },
    i.nullListFlag_i = function() {
        var t = new eui.Image;
        return this.nullListFlag = t,
        t.height = 153,
        t.source = "PeakJihadVote_img_null_data_png",
        t.visible = !1,
        t.width = 169,
        t.x = 484,
        t.y = 214,
        t
    },
    e
} (eui.Skin);