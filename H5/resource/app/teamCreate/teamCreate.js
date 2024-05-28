var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.destroy = function() {},
        t
    } (eui.Component);
    e.TeamCreateBasePage = t,
    __reflect(t.prototype, "teamCreate.TeamCreateBasePage")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.slogans = ["团结友爱", "探索宇宙", "精灵对战", "对抗坏蛋", "结识伙伴", "维护正义", "热爱自然", "辛勤劳动", "勤奋学习", "公平竞争"],
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.btnCreate, this.onCreate, this),
            ImageButtonUtil.add(this.grpArrow, this.onShowSlogan, this),
            this.rbAll.group.addEventListener(egret.Event.CHANGE, this.onChangeApplyFlag, this),
            this.initSlogans(),
            this.txtTeamName.addEventListener(egret.Event.CHANGE, this.onChange, this),
            this.txtNote.addEventListener(egret.Event.CHANGE, this.onSloganChange, this)
        },
        i.prototype.onChange = function(e) {
            var t = StringUtil.getBLen(this.txtTeamName.text),
            i = 10;
            t > i && !this.txtTeamName.inputLock && (BubblerManager.getInstance().showText("战队名称过长，请重新填写！"), this.txtTeamName.text = StringUtil.subStr(this.txtTeamName.text, i))
        },
        i.prototype.onSloganChange = function(e) {
            var t = StringUtil.getBLen(this.txtNote.text),
            i = 40;
            t > i && !this.txtNote.inputLock && (BubblerManager.getInstance().showText("战队口号最多20个字，请重新填写！"), this.txtNote.text = StringUtil.subStr(this.txtNote.text, i))
        },
        i.prototype.initSlogans = function() {
            this.grpSlogan.visible = !1;
            for (var t = 0; t < this.slogans.length; t++) {
                var i = new e.SloganItem(this.slogans[t]);
                i.y = 38 * t,
                this.grpSlogan.addChild(i),
                i.index = t,
                ImageButtonUtil.add(i, this.onSelectSlogan, this)
            }
            this.slogan_drop_bg.height = this.grpSlogan.height
        },
        i.prototype.onShowSlogan = function(e) {
            this.grpSlogan.visible = !this.grpSlogan.visible,
            this.grpArrow.scaleY = this.grpSlogan.visible ? -1 : 1
        },
        i.prototype.onSelectSlogan = function(e) {
            this.grpSlogan.visible = !this.grpSlogan.visible;
            var t = e.currentTarget;
            this.txtSlogan.text = this.slogans[t.index],
            this.grpArrow.scaleY = 1
        },
        i.prototype.onCreate = function(e) {
            var t = this,
            i = ~~this.rbAll.group.selectedValue,
            n = this.txtTeamName.text,
            r = this.txtNote.text,
            a = this.txtSlogan.text;
            if (!n.length || !r.length || !a.length) return void Alarm.show("战队信息填写有误，请按规则填写！");
            var o = new egret.ByteArray;
            o.writeShort(1),
            o.writeShort(1);
            var s = new egret.ByteArray;
            s.writeShort(1),
            s.writeShort(1);
            var h = "赛",
            _ = new egret.ByteArray;
            _.writeUTFBytes(h),
            _.length = 4;
            var u = new egret.ByteArray;
            u.writeUTFBytes(r),
            u.length = 60;
            var l = new egret.ByteArray;
            l.writeUTFBytes(this.txtTeamName.text),
            l.length = 16;
            var c = this.slogans.indexOf(this.txtSlogan.text) + 1;
            SocketConnection.sendByQueue(CommandID.TEAM_CREATE, [i, 1, o, s, _, l, u, c],
            function(e) {
                var i = e.data.readUnsignedInt();
                MainManager.actorInfo.teamInfo.id = i,
                MainManager.actorInfo.teamInfo.priv = 0,
                Alarm.show("恭喜你，战队创建成功！",
                function() {
                    TeamInfoManager.updateSelfTeamInfo(function() {
                        ModuleManager.showModuleByID(74, null, AppDoStyle.DESTROY)
                    },
                    t)
                })
            },
            function() {
                BubblerManager.getInstance().showText("创建战队失败，请稍后再试！")
            })
        },
        i.prototype.onChangeLog = function(e) {},
        i.prototype.onChangeApplyFlag = function(e) {},
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.txtTeamName.removeEventListener(egret.Event.CHANGE, this.onChange, this),
            this.txtNote.removeEventListener(egret.Event.CHANGE, this.onSloganChange, this)
        },
        i
    } (e.TeamCreateBasePage);
    e.PageCreate = t,
    __reflect(t.prototype, "teamCreate.PageCreate")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, n) {
    return new(i || (i = Promise))(function(r, a) {
        function o(e) {
            try {
                h(n.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                h(n["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        h((n = n.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return n([e, t])
        }
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (r = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
            switch (a = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    h.label = i[1];
                    break
                }
                if (6 === i[0] && h.label < o[1]) {
                    h.label = o[1],
                    o = i;
                    break
                }
                if (o && h.label < o[2]) {
                    h.label = o[2],
                    h.ops.push(i);
                    break
                }
                o[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            i = t.call(e, h)
        } catch(n) {
            i = [6, n],
            a = 0
        } finally {
            r = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, a, o, s, h = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
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
teamCreate; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._inited = !1,
            e.currIndex = 0,
            e.MAX_ITEM = 20,
            e.isEnd = !1,
            e.skinName = TeamAplySkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            this.arrayCollection = new eui.ArrayCollection,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamListItem,
            this._list.dataProvider = this.arrayCollection,
            this.arrayCollection.removeAll(),
            this.updateList(),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapItem, this),
            this._scroller.addEventListener(egret.Event.CHANGE, this.onDrag, this),
            ImageButtonUtil.add(this.btnApply,
            function() {
                return t._curTeamInfo ? void SocketConnection.sendByQueue(CommandID.TEAM_ADD, [t._curTeamInfo.teamID],
                function(e) {
                    var i = e.data,
                    n = i.readUnsignedInt(),
                    r = i.readUnsignedInt();
                    0 == n ? (Alarm.show("恭喜你加入战队成功",
                    function() {
                        EventManager.dispatchEventWith("TEAM_JOIN_COMPLETED")
                    }), MainManager.actorInfo.teamInfo.id = r, MainManager.actorInfo.teamID = r, MainManager.actorInfo.teamInfo.priv = 2, t._curTeamInfo.applyFlag = !0, t.showTeamInfo(t._curTeamInfo)) : 1 == n ? Alarm.show("你的申请已经提交，等待对方验证") : Alarm.show("对不起，该战队不允许任何人加入")
                }) : void console.warn("推荐列表未初始化完成")
            },
            this)
        },
        i.prototype.onDrag = function() {
            var e = 30,
            t = this._scroller.viewport.scrollV,
            i = this._scroller.viewport.contentHeight,
            n = this._scroller.viewport.height;
            t > i - n - e && !this.isEnd && this.getRecommendList()
        },
        i.prototype.onTapItem = function(e) {
            this.showTeamInfo(e.item)
        },
        i.prototype.updateList = function() {
            this.arrayCollection.removeAll(),
            this.currIndex = 0,
            this.getRecommendList()
        },
        i.prototype.getRecommendList = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, r;
                return __generator(this,
                function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, SocketConnection.sendWithPromise(CommandID.TEAM_LIST_RECOMMEND, [7, this.currIndex * this.MAX_ITEM, (this.currIndex + 1) * this.MAX_ITEM - 1])];
                    case 1:
                        for (e = a.sent(), t = e.data, i = t.readUnsignedInt(), n = 0; i > n; n++) r = t.readUnsignedInt(),
                        t.readUnsignedInt(),
                        t.readUTFBytes(16),
                        this.getTeamInfo(r);
                        return i < this.MAX_ITEM && (this.isEnd = !0),
                        this.currIndex++,
                        [2]
                    }
                })
            })
        },
        i.prototype.getTeamInfo = function(e) {
            SocketConnection.sendByQueue(CommandID.TEAM_GET_INFO, [e], this.onGetTeamInfo.bind(this))
        },
        i.prototype.onGetTeamInfo = function(e) {
            var t = this,
            i = new SimpleTeamInfo(e.data);
            i.memberCount >= i.maxTeamMembers || SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO, [i.leader],
            function(e) {
                var n = new UserInfo;
                UserInfo.setForSimpleInfo(n, e.data),
                i.leaderNick = n.nick,
                t.arrayCollection.addItem(i),
                t._inited || (t._inited = !0, t._list.selectedIndex = 0, t.showTeamInfo(i))
            })
        },
        i.prototype.showTeamInfo = function(e) {
            this._curTeamInfo = e,
            this.txt_teamName.text = e.name,
            this.txt_level.text = e.newTeamLevel + "",
            this.txt_member.text = e.memberCount + "",
            this.txt_resource.text = e.score + "",
            this.txt_slogan.text = e.slogan,
            this.btnApply.visible = !e.applyFlag,
            this.txtDone.visible = e.applyFlag
        },
        i.prototype.destroy = function() {
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTapItem, this),
            ImageButtonUtil.removeAll(this),
            this.arrayCollection = null
        },
        i
    } (e.TeamCreateBasePage);
    e.PageRecommend = t,
    __reflect(t.prototype, "teamCreate.PageRecommend")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.teamId = 0,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.showGrpSearch(),
            ImageButtonUtil.add(this.btnSearch, this.onSearchTeam, this),
            ImageButtonUtil.add(this.team.btnApply, this.onApply, this),
            this.team.visible = !1,
            ImageButtonUtil.add(this.btnResearch, this.showGrpSearch, this)
        },
        t.prototype.showGrpSearch = function() {
            this.search.visible = !0,
            this.result.visible = !1
        },
        t.prototype.onSearchTeam = function() {
            var e = this;
            if (this.txtTeamID.text.length > 0) {
                var t = ~~this.txtTeamID.text;
                t > 0 ? (this.team.visible = !1, SocketConnection.sendByQueue(CommandID.TEAM_GET_INFO, [t],
                function(t) {
                    var i = new SimpleTeamInfo(t.data);
                    e.team.visible = !1,
                    i && (e.search.visible = !1, e.result.visible = !0, e.team.visible = !0, e.teamId = i.teamID, e.team.txt_teamName.text = i.name, e.team.txt_level.text = i.newTeamLevel + "", e.team.txt_member.text = i.memberCount, e.team.txt_slogan.text = i.slogan, e.team.txt_resource.text = i.score + "", e.team.btnApply.visible = !i.applyFlag, e.team.txtDone.visible = i.applyFlag)
                },
                function() {})) : Alarm.show("请输入正确的战队编号！")
            } else Alarm.show("请输入正确的战队编号！")
        },
        t.prototype.onApply = function() {
            SocketConnection.sendByQueue(CommandID.TEAM_ADD, [this.teamId],
            function(e) {
                var t = e.data,
                i = t.readUnsignedInt(),
                n = t.readUnsignedInt();
                0 == i ? (Alarm.show("恭喜你加入战队成功",
                function() {
                    EventManager.dispatchEventWith("TEAM_JOIN_COMPLETED")
                }), MainManager.actorInfo.teamInfo.id = n, MainManager.actorInfo.teamID = n, MainManager.actorInfo.teamInfo.priv = 2) : 1 == i ? Alarm.show("你的申请已经提交，等待对方验证") : Alarm.show("对不起，该战队不允许任何人加入")
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (e.TeamCreateBasePage);
    e.PageSearch = t,
    __reflect(t.prototype, "teamCreate.PageSearch")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.index = 0,
            i.title = t,
            i.skinName = TeamCreateSlogItemSkin,
            i
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.txtTitle.text = this.title
        },
        t
    } (eui.Component);
    e.SloganItem = t,
    __reflect(t.prototype, "teamCreate.SloganItem")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamCreateSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.rbRecommend.group.addEventListener(egret.Event.CHANGE, this.onChangePage, this),
            this.rbRecommend.selected = !0,
            this.currPage = this.pageApply,
            ImageButtonUtil.add(this.btnRefresh, this.onRefreshList, this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            EventManager.addEventListener("TEAM_JOIN_COMPLETED", this.onClose, this)
        },
        t.prototype.onRefreshList = function(e) {
            this.pageApply.updateList()
        },
        t.prototype.onChangePage = function(e) {
            this.currPage && (this.currPage.visible = !1),
            this.btnRefresh.visible = !1,
            "0" == this.rbRecommend.group.selectedValue ? (StatLogger.log("20210813版本系统功能", "战队", "打开战队列表-推荐战队"), this.pageApply.visible = !0, this.currPage = this.pageApply) : "1" == this.rbRecommend.group.selectedValue ? (StatLogger.log("20210813版本系统功能", "战队", "打开战队列表-创建战队"), this.pageCreate.visible = !0, this.currPage = this.pageCreate) : (StatLogger.log("20210813版本系统功能", "战队", "打开战队列表-搜索战队"), this.pageSearch.visible = !0, this.currPage = this.pageSearch)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("TEAM_JOIN_COMPLETED", this.onClose, this)
        },
        t
    } (BaseModule);
    e.TeamCreate = t,
    __reflect(t.prototype, "teamCreate.TeamCreate")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamListItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var e = this.data;
            e && (this.txtTeamName.text = e.name, this.txtCaptain.text = e.leaderNick, this.txtLvl.text = e.newTeamLevel + "", this.txtCount.text = e.memberCount + "/" + e.maxTeamMembers)
        },
        t.prototype.onJoin = function(e) {
            var t = this,
            i = this.data;
            SocketConnection.sendByQueue(CommandID.TEAM_ADD, [i.teamID],
            function(e) {
                var n = e.data,
                r = n.readUnsignedInt(),
                a = n.readUnsignedInt();
                0 == r ? (Alarm.show("恭喜你加入战队成功",
                function() {
                    EventManager.dispatchEventWith("TEAM_JOIN_COMPLETED")
                }), MainManager.actorInfo.teamInfo.id = a, MainManager.actorInfo.teamID = a, MainManager.actorInfo.teamInfo.priv = 2, i.applyFlag = !0, t.dataChanged()) : 1 == r ? Alarm.show("你的申请已经提交，等待对方验证") : Alarm.show("对不起，该战队不允许任何人加入")
            })
        },
        t
    } (eui.ItemRenderer);
    e.TeamListItem = t,
    __reflect(t.prototype, "teamCreate.TeamListItem")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
teamCreate; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamLogoCreateSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.scrTheme1.viewport = this.list_1,
            this.scrTheme2.viewport = this.list_2,
            this.scrTheme3.viewport = this.list_3,
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnDone, this.onMakeLogo, this),
            this.list_1.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectTheme1, this),
            this.list_2.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectTheme2, this),
            this.list_3.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSelectTheme3, this)
        },
        t.prototype.onClose = function(e) {},
        t.prototype.onMakeLogo = function(e) {},
        t.prototype.onSelectTheme1 = function(e) {},
        t.prototype.onSelectTheme2 = function(e) {},
        t.prototype.onSelectTheme3 = function(e) {},
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        t
    } (PopView);
    e.TeamLogoCreate = t,
    __reflect(t.prototype, "teamCreate.TeamLogoCreate")
} (teamCreate || (teamCreate = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
__extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
},
TMButton = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e),
    t
} (eui.Button);
__reflect(TMButton.prototype, "TMButton");
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/TeamAplySkin.exml"] = window.TeamAplySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_teamName", "txt_slogan", "btnApply", "txtDone", "txt_level", "txt_member", "txt_resource", "_list", "_scroller"],
        this.height = 449,
        this.width = 912,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Label1_i(), this._Label2_i(), this.txt_teamName_i(), this._Image4_i(), this.txt_slogan_i(), this.btnApply_i(), this.txtDone_i(), this._Image5_i(), this._Image6_i(), this._Label3_i(), this.txt_level_i(), this._Label4_i(), this.txt_member_i(), this._Label5_i(), this.txt_resource_i(), this._Label6_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this._Image7_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 424,
        e.source = "team_aply_txtbg2_png",
        e.width = 582,
        e.x = 0,
        e.y = 25,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_create_recommend_title_png",
        e.width = 582,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 106,
        e.source = "team_aply_logobg_png",
        e.width = 306,
        e.x = 606,
        e.y = 14,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.size = 12,
        e.text = "NAME:",
        e.textColor = 5733825,
        e.x = 720,
        e.y = 13,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队口号",
        e.textColor = 12046335,
        e.x = 608,
        e.y = 146,
        e
    },
    i.txt_teamName_i = function() {
        var e = new eui.Label;
        return this.txt_teamName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 359,
        e.size = 24,
        e.text = "选中战队名",
        e.textColor = 12111871,
        e.y = 30,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 163,
        e.source = "team_aply_txtbg3_png",
        e.width = 305,
        e.x = 607,
        e.y = 175,
        e
    },
    i.txt_slogan_i = function() {
        var e = new eui.Label;
        return this.txt_slogan = e,
        e.lineSpacing = 6,
        e.size = 18,
        e.text = "战队口号文本战队口号文本战队口\n号文本战队口号文本战队口号文本\n战队口号文本战队口号文本战队口\n号文本战队口号文本",
        e.textColor = 6258105,
        e.width = 270,
        e.x = 624,
        e.y = 191,
        e
    },
    i.btnApply_i = function() {
        var e = new eui.Image;
        return this.btnApply = e,
        e.height = 46,
        e.source = "team_aply_btnApply_png",
        e.width = 134,
        e.x = 698,
        e.y = 365,
        e
    },
    i.txtDone_i = function() {
        var e = new eui.Label;
        return this.txtDone = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "已申请",
        e.textColor = 5877742,
        e.visible = !1,
        e.x = 705,
        e.y = 364,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_aply_txtbg_png",
        e.width = 190,
        e.x = 722,
        e.y = 68,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_aply_txtbg_png",
        e.width = 190,
        e.x = 722,
        e.y = 97,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv:",
        e.textColor = 6258105,
        e.x = 731,
        e.y = 71,
        e
    },
    i.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "5",
        e.textColor = 4175861,
        e.x = 764,
        e.y = 71,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "人数：",
        e.textColor = 6258105,
        e.x = 836,
        e.y = 71,
        e
    },
    i.txt_member_i = function() {
        var e = new eui.Label;
        return this.txt_member = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "70",
        e.textColor = 4175861,
        e.x = 886,
        e.y = 71,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "资源：",
        e.textColor = 6258105,
        e.x = 730,
        e.y = 99,
        e
    },
    i.txt_resource_i = function() {
        var e = new eui.Label;
        return this.txt_resource = e,
        e.fontFamily = "MFShangHei",
        e.right = 4,
        e.size = 18,
        e.text = "100000",
        e.textColor = 4175861,
        e.y = 99,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队名",
        e.textColor = 16777215,
        e.x = 67,
        e.y = 3,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "队长",
        e.textColor = 16777215,
        e.x = 340,
        e.y = 2,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队等级",
        e.textColor = 16777215,
        e.x = 185,
        e.y = 2,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "人数",
        e.textColor = 16777215,
        e.x = 481,
        e.y = 2,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 84,
        e.source = "team_logo_png",
        e.width = 84,
        e.x = 617,
        e.y = 26,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.anchorOffsetX = 0,
        e.height = 384,
        e.width = 562,
        e.x = 8,
        e.y = 44,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 0,
        e.y = 0,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamCreatePageSkin.exml"] = window.TeamCreatePageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnCreate", "txtTeamName", "txtNote", "rbNull", "rbApply", "rbAll", "slogan_drop_bg", "grpSlogan", "grpArrow", "txtSlogan", "icon"],
        this.height = 442,
        this.width = 912,
        this.elementsContent = [this._Image1_i(), this.btnCreate_i(), this._Image2_i(), this._Image3_i(), this.txtTeamName_i(), this.txtNote_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this.rbNull_i(), this.rbApply_i(), this.rbAll_i(), this._Image4_i(), this._Label4_i(), this._Label5_i(), this._Label6_i(), this.grpSlogan_i(), this.grpArrow_i(), this.txtSlogan_i(), this._Label7_i(), this._Label8_i(), this._Image5_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "5",
            e.right = "5",
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13423838,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 5,
            e.right = 5,
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13423838,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "5",
            e.right = "5",
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13358045,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 5,
            e.right = 5,
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13358045,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 21,
            e.source = "team_create_rb_frame_up_png",
            e.width = 21,
            e.x = 0,
            e.y = 2,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 20,
            e.source = "team_create_rb_frame_down_png",
            e.width = 26,
            e.x = 2,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 21,
            e.source = "team_create_rb_frame_up_png",
            e.width = 21,
            e.x = 0,
            e.y = 2,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 20,
            e.source = "team_create_rb_frame_down_png",
            e.width = 26,
            e.x = 2,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Image2_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image2", "visible", !1)]), new eui.State("down", [new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.height = 21,
            e.source = "team_create_rb_frame_up_png",
            e.width = 21,
            e.x = 0,
            e.y = 2,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 20,
            e.source = "team_create_rb_frame_down_png",
            e.width = 26,
            e.x = 2,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    s = t.prototype;
    return s._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 386,
        e.source = "team_create_page_txtbg2_png",
        e.width = 912,
        e.x = 0,
        e.y = 0,
        e
    },
    s.btnCreate_i = function() {
        var e = new eui.Image;
        return this.btnCreate = e,
        e.height = 45,
        e.source = "team_create_page_btnCreate_png",
        e.width = 134,
        e.x = 380,
        e.y = 397,
        e
    },
    s._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_create_inputbg_png",
        e.width = 609,
        e.x = 216,
        e.y = 178,
        e
    },
    s._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_create_inputbg_png",
        e.width = 506,
        e.x = 319,
        e.y = 33,
        e
    },
    s.txtTeamName_i = function() {
        var e = new eui.TextInput;
        return this.txtTeamName = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 19,
        e.maxChars = 10,
        e.prompt = "最多不超过5个汉字或者10个英文字母",
        e.width = 410,
        e.x = 376,
        e.y = 44,
        e.skinName = i,
        e
    },
    s.txtNote_i = function() {
        var e = new eui.TextInput;
        return this.txtNote = e,
        e.height = 19,
        e.maxChars = 40,
        e.prompt = "战队口号作为战队招人的宣言，帮助找到更多志同道合的战友",
        e.width = 580,
        e.x = 236,
        e.y = 188,
        e.skinName = n,
        e
    },
    s._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "任何人都不能加入",
        e.textColor = 6258105,
        e.x = 319,
        e.y = 321,
        e
    },
    s._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "必须管理员以上同意才能加入",
        e.textColor = 6258105,
        e.x = 319,
        e.y = 282,
        e
    },
    s._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "任何人都可以直接加入",
        e.textColor = 6258105,
        e.x = 319,
        e.y = 243,
        e
    },
    s.rbNull_i = function() {
        var e = new eui.RadioButton;
        return this.rbNull = e,
        e.value = "0",
        e.x = 797,
        e.y = 240,
        e.skinName = r,
        e
    },
    s.rbApply_i = function() {
        var e = new eui.RadioButton;
        return this.rbApply = e,
        e.selected = !0,
        e.value = "1",
        e.x = 797,
        e.y = 279,
        e.skinName = a,
        e
    },
    s.rbAll_i = function() {
        var e = new eui.RadioButton;
        return this.rbAll = e,
        e.value = "2",
        e.x = 797,
        e.y = 318,
        e.skinName = o,
        e
    },
    s._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_create_inputbg_png",
        e.width = 218,
        e.x = 319,
        e.y = 86,
        e
    },
    s._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "战队爱好代表追求的目标、乐趣",
        e.textColor = 6258105,
        e.x = 546,
        e.y = 97,
        e
    },
    s._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队名称：",
        e.textColor = 6258105,
        e.x = 215,
        e.y = 38,
        e
    },
    s._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队爱好：",
        e.textColor = 6258105,
        e.x = 215,
        e.y = 95,
        e
    },
    s.grpSlogan_i = function() {
        var e = new eui.Group;
        return this.grpSlogan = e,
        e.visible = !0,
        e.x = 319,
        e.y = 126,
        e.elementsContent = [this.slogan_drop_bg_i()],
        e
    },
    s.slogan_drop_bg_i = function() {
        var e = new eui.Image;
        return this.slogan_drop_bg = e,
        e.height = 122,
        e.scale9Grid = new egret.Rectangle(5, 5, 2, 3),
        e.source = "team_create_slogan_drop_bg_png",
        e.width = 218,
        e.x = 0,
        e.y = 0,
        e
    },
    s.grpArrow_i = function() {
        var e = new eui.Image;
        return this.grpArrow = e,
        e.height = 30,
        e.source = "team_create_arrow_png",
        e.width = 30,
        e.x = 501,
        e.y = 90,
        e
    },
    s.txtSlogan_i = function() {
        var e = new eui.Label;
        return this.txtSlogan = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "请选择",
        e.textAlign = "center",
        e.textColor = 13423838,
        e.width = 152,
        e.x = 337,
        e.y = 97,
        e
    },
    s._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队口号：",
        e.textColor = 6258105,
        e.x = 215,
        e.y = 146,
        e
    },
    s._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队审核：",
        e.textColor = 6258105,
        e.x = 217,
        e.y = 242,
        e
    },
    s._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 106,
        e.source = "team_logo_bg_png",
        e.width = 106,
        e.x = 63,
        e.y = 38,
        e
    },
    s.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 84,
        e.source = "team_logo_png",
        e.width = 84,
        e.x = 74,
        e.y = 51,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamSearchItemSkin.exml"] = window.TeamSearchItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_teamName", "txt_slogan", "txt_level", "txt_member", "txt_resource", "btnApply", "txtDone"],
        this.height = 400,
        this.width = 340,
        this.elementsContent = [this._Image1_i(), this.txt_teamName_i(), this.txt_slogan_i(), this.txt_level_i(), this.txt_member_i(), this.txt_resource_i(), this.btnApply_i(), this.txtDone_i(), this._Image2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 400,
        e.source = "team_search_item_bg_png",
        e.width = 340,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_teamName_i = function() {
        var e = new eui.Label;
        return this.txt_teamName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 56,
        e.size = 24,
        e.text = "选中战队名",
        e.textColor = 16777215,
        e.y = 40,
        e
    },
    i.txt_slogan_i = function() {
        var e = new eui.Label;
        return this.txt_slogan = e,
        e.lineSpacing = 6,
        e.size = 18,
        e.text = "战队口号文本战队口号文本战队口\n号文本战队口号文本战队口号文本\n战队口号文本战队口号文本战队口\n号文本战队口号文本",
        e.textColor = 4175861,
        e.width = 270,
        e.x = 35,
        e.y = 201,
        e
    },
    i.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.size = 18,
        e.text = "5",
        e.textColor = 4175861,
        e.x = 176,
        e.y = 81,
        e
    },
    i.txt_member_i = function() {
        var e = new eui.Label;
        return this.txt_member = e,
        e.size = 18,
        e.text = "70",
        e.textColor = 4175861,
        e.x = 292,
        e.y = 81,
        e
    },
    i.txt_resource_i = function() {
        var e = new eui.Label;
        return this.txt_resource = e,
        e.right = 20,
        e.size = 18,
        e.text = "100000",
        e.textColor = 4175861,
        e.y = 109,
        e
    },
    i.btnApply_i = function() {
        var e = new eui.Image;
        return this.btnApply = e,
        e.height = 46,
        e.source = "team_aply_btnApply_png",
        e.width = 134,
        e.x = 99,
        e.y = 336,
        e
    },
    i.txtDone_i = function() {
        var e = new eui.Label;
        return this.txtDone = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "已申请",
        e.textColor = 5877742,
        e.visible = !1,
        e.x = 128,
        e.y = 351,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 84,
        e.source = "team_logo_png",
        e.width = 84,
        e.x = 26,
        e.y = 38,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamSearchSkin.exml"] = window.TeamSearchSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtTeamID", "btnSearch", "search", "team", "btnResearch", "result"],
        this.height = 452,
        this.width = 931,
        this.elementsContent = [this._Image1_i(), this.search_i(), this.result_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "5",
            e.right = "5",
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 16777215,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "MFShangHei",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 5,
            e.right = 5,
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13423838,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 452,
        e.source = "team_search_contentbg_png",
        e.width = 931,
        e.x = 0,
        e.y = 0,
        e
    },
    n.search_i = function() {
        var e = new eui.Group;
        return this.search = e,
        e.visible = !0,
        e.x = 187,
        e.y = 172,
        e.elementsContent = [this._Image2_i(), this.txtTeamID_i(), this.btnSearch_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_create_Searchbg_png",
        e.width = 556,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtTeamID_i = function() {
        var e = new eui.TextInput;
        return this.txtTeamID = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 19,
        e.maxChars = 25,
        e.prompt = "请输入你要查找的战队编号",
        e.restrict = "0-9",
        e.width = 410,
        e.x = 74,
        e.y = 12,
        e.skinName = i,
        e
    },
    n.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 46,
        e.source = "team_search_btnSearch_png",
        e.width = 134,
        e.x = 211,
        e.y = 66,
        e
    },
    n.result_i = function() {
        var e = new eui.Group;
        return this.result = e,
        e.visible = !1,
        e.x = 33,
        e.y = 24,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.team_i(), this._Label1_i(), this._Image5_i(), this.btnResearch_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.anchorOffsetX = 78,
        e.anchorOffsetY = 253,
        e.height = 253,
        e.rotation = 180,
        e.source = "team_search_arrow_png",
        e.width = 78,
        e.x = 787,
        e.y = 77,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 253,
        e.source = "team_search_arrow_png",
        e.width = 78,
        e.x = 0,
        e.y = 77,
        e
    },
    n.team_i = function() {
        var e = new eui.Component;
        return this.team = e,
        e.skinName = "TeamSearchItemSkin",
        e.x = 234,
        e.y = 1,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "搜索结果",
        e.textColor = 6258105,
        e.x = 70,
        e.y = 4,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 23,
        e.source = "team_search_icon_png",
        e.width = 23,
        e.x = 43,
        e.y = 3,
        e
    },
    n.btnResearch_i = function() {
        var e = new eui.Image;
        return this.btnResearch = e,
        e.height = 46,
        e.source = "team_search_btnResearch_png",
        e.width = 134,
        e.x = 662,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamCreateSkin.exml"] = window.TeamCreateSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "title", "btnClose", "grpBg", "rbSearch", "rbCreate", "rbRecommend", "btnRefresh", "pageApply", "pageCreate", "pageSearch"],
        this.height = 550,
        this.width = 1038,
        this.elementsContent = [this.grpBg_i(), this.rbSearch_i(), this.rbCreate_i(), this.rbRecommend_i(), this.btnRefresh_i(), this.pageApply_i(), this.pageCreate_i(), this.pageSearch_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_createSearch_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_createSearch_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_createCreate_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_createCreate_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_createRecommend_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_createRecommend_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a.grpBg_i = function() {
        var e = new eui.Group;
        return this.grpBg = e,
        e.x = 39,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.title_i(), this.btnClose_i()],
        e
    },
    a.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 547,
        e.source = "team_create_bg_png",
        e.width = 999,
        e.x = 0,
        e.y = 3,
        e
    },
    a.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 41,
        e.source = "team_create_title_png",
        e.width = 113,
        e.x = 30,
        e.y = 0,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "team_create_btnClose_png",
        e.width = 33,
        e.x = 957,
        e.y = 4,
        e
    },
    a.rbSearch_i = function() {
        var e = new eui.RadioButton;
        return this.rbSearch = e,
        e.groupName = "grp_create_type",
        e.value = "2",
        e.x = 0,
        e.y = 316,
        e.skinName = i,
        e
    },
    a.rbCreate_i = function() {
        var e = new eui.RadioButton;
        return this.rbCreate = e,
        e.groupName = "grp_create_type",
        e.value = "1",
        e.x = 0,
        e.y = 188,
        e.skinName = n,
        e
    },
    a.rbRecommend_i = function() {
        var e = new eui.RadioButton;
        return this.rbRecommend = e,
        e.groupName = "grp_create_type",
        e.value = "0",
        e.x = 0,
        e.y = 60,
        e.skinName = r,
        e
    },
    a.btnRefresh_i = function() {
        var e = new eui.Image;
        return this.btnRefresh = e,
        e.height = 38,
        e.source = "team_create_btnFlash_png",
        e.visible = !1,
        e.width = 38,
        e.x = 812.448,
        e.y = 75,
        e
    },
    a.pageApply_i = function() {
        var e = new teamCreate.PageRecommend;
        return this.pageApply = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.skinName = "TeamAplySkin",
        e.visible = !0,
        e.x = 80,
        e.y = 65,
        e
    },
    a.pageCreate_i = function() {
        var e = new teamCreate.PageCreate;
        return this.pageCreate = e,
        e.skinName = "TeamCreatePageSkin",
        e.visible = !1,
        e.x = 78,
        e.y = 64,
        e
    },
    a.pageSearch_i = function() {
        var e = new teamCreate.PageSearch;
        return this.pageSearch = e,
        e.skinName = "TeamSearchSkin",
        e.visible = !1,
        e.x = 69,
        e.y = 60,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamCreateSlogItemSkin.exml"] = window.TeamCreateSlogItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtTitle"],
        this.height = 38,
        this.width = 218,
        this.elementsContent = [this.txtTitle_i(), this._Rect1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "团结友爱",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.width = 218,
        e
    },
    i._Rect1_i = function() {
        var e = new eui.Rect;
        return e.fillAlpha = .1,
        e.fillColor = 3684151,
        e.height = 38,
        e.width = 218,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamListItemSkin.exml"] = window.TeamListItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtCount", "txtLvl", "txtCaptain", "txtTeamName"],
        this.height = 56,
        this.width = 562,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.txtCount_i(), this.txtLvl_i(), this.txtCaptain_i(), this.txtTeamName_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "visible", !1), new eui.SetProperty("_Image2", "visible", !0)]), new eui.State("down", [new eui.SetProperty("_Image1", "visible", !0), new eui.SetProperty("_Image2", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 56,
        e.source = "team_create_resultbg_light_png",
        e.width = 562,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.height = 52,
        e.source = "team_create_resultbg_png",
        e.width = 558,
        e.x = 2,
        e.y = 4,
        e
    },
    i.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "15/100",
        e.textColor = 16777215,
        e.x = 463,
        e.y = 19,
        e
    },
    i.txtLvl_i = function() {
        var e = new eui.Label;
        return this.txtLvl = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "5",
        e.textColor = 16777215,
        e.x = 210,
        e.y = 19,
        e
    },
    i.txtCaptain_i = function() {
        var e = new eui.Label;
        return this.txtCaptain = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 68,
        e.size = 20,
        e.text = "裸出三级头",
        e.textColor = 16777215,
        e.y = 19,
        e
    },
    i.txtTeamName_i = function() {
        var e = new eui.Label;
        return this.txtTeamName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -197,
        e.size = 20,
        e.text = "物资五字无",
        e.textColor = 16777215,
        e.y = 19,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamLogoCreateSkin.exml"] = window.TeamLogoCreateSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "grpBg", "content_bg", "btnDone", "input_bg", "txtLogoWord", "icon_bg", "logo", "list_1", "scrTheme1", "list_2", "scrTheme2", "list_3", "scrTheme3"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this.grpBg_i(), this.content_bg_i(), this.btnDone_i(), this._Image3_i(), this._Label1_i(), this._Image4_i(), this._Label2_i(), this._Image5_i(), this._Label3_i(), this.input_bg_i(), this.txtLogoWord_i(), this._Label4_i(), this._Group1_i(), this._Label5_i(), this.scrTheme1_i(), this.scrTheme2_i(), this.scrTheme3_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.percentHeight = 100,
            e.scale9Grid = new egret.Rectangle(23, 24, 2, 2),
            e.source = "common_btn_bg_style_orange_2_png",
            e.percentWidth = 100,
            e
        },
        i.labelDisplay_i = function() {
            var e = new eui.Label;
            return this.labelDisplay = e,
            e.fontFamily = "HuaKangXinZongYi",
            e.horizontalCenter = 0,
            e.size = 20,
            e.textColor = 8407576,
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "黑体",
            e.height = 24,
            e.horizontalCenter = "0",
            e.left = "5",
            e.right = "5",
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 8029850,
            e.verticalCenter = "0",
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "黑体",
            e.height = 24,
            e.horizontalCenter = 0,
            e.left = 5,
            e.right = 5,
            e.size = 18,
            e.textAlign = "center",
            e.textColor = 13358045,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r.grpBg_i = function() {
        var e = new eui.Group;
        return this.grpBg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 411,
        e.source = "common_pop_point_png",
        e.width = 756,
        e.x = -1,
        e.y = 41,
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_medium_png",
        e.width = 748,
        e.x = 4,
        e.y = 22,
        e
    },
    r.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 26,
        e.source = "team_logo_create_title_png",
        e.width = 113,
        e.x = 37,
        e.y = 28,
        e
    },
    r.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 714,
        e.y = 0,
        e
    },
    r.content_bg_i = function() {
        var e = new eui.Image;
        return this.content_bg = e,
        e.height = 288,
        e.source = "team_logo_create_content_bg_png",
        e.width = 221,
        e.x = 511,
        e.y = 81,
        e
    },
    r.btnDone_i = function() {
        var e = new eui.Button;
        return this.btnDone = e,
        e.label = "完成",
        e.width = 120,
        e.x = 318,
        e.y = 379,
        e.skinName = i,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "team_logo_create_line_png",
        e.width = 486,
        e.x = 25,
        e.y = 171,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 18,
        e.text = "选择队徽主题1",
        e.textColor = 3492213,
        e.x = 44,
        e.y = 81,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "team_logo_create_line_png",
        e.width = 486,
        e.x = 25,
        e.y = 270,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 18,
        e.text = "选择队徽主题2",
        e.textColor = 3492213,
        e.x = 44,
        e.y = 180,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 2,
        e.source = "team_logo_create_line_png",
        e.width = 486,
        e.x = 25,
        e.y = 368,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 18,
        e.text = "选择队徽主题3",
        e.textColor = 3492213,
        e.x = 44,
        e.y = 278,
        e
    },
    r.input_bg_i = function() {
        var e = new eui.Image;
        return this.input_bg = e,
        e.height = 33,
        e.source = "team_logo_create_input_bg_png",
        e.width = 201,
        e.x = 521,
        e.y = 320,
        e
    },
    r.txtLogoWord_i = function() {
        var e = new eui.TextInput;
        return this.txtLogoWord = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.maxChars = 1,
        e.prompt = "一个汉字或者一个字母",
        e.width = 200,
        e.x = 517,
        e.y = 323,
        e.skinName = n,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 18,
        e.text = "队徽文字输入：",
        e.textColor = 3492213,
        e.x = 520,
        e.y = 293,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 154,
        e.width = 154,
        e.x = 545,
        e.y = 119,
        e.elementsContent = [this.icon_bg_i(), this.logo_i()],
        e
    },
    r.icon_bg_i = function() {
        var e = new eui.Image;
        return this.icon_bg = e,
        e.height = 154,
        e.scale9Grid = new egret.Rectangle(23, 24, 2, 2),
        e.source = "team_logo_create_icon_bg_png",
        e.width = 154,
        e.x = 0,
        e.y = 0,
        e
    },
    r.logo_i = function() {
        var e = new eui.Image;
        return this.logo = e,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 18,
        e.text = "队徽预览：",
        e.textColor = 3492213,
        e.x = 521,
        e.y = 94,
        e
    },
    r.scrTheme1_i = function() {
        var e = new eui.Scroller;
        return this.scrTheme1 = e,
        e.anchorOffsetY = 0,
        e.height = 60,
        e.width = 446,
        e.x = 44,
        e.y = 105,
        e.viewport = this._Group2_i(),
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_1_i()],
        e
    },
    r.list_1_i = function() {
        var e = new eui.List;
        return this.list_1 = e,
        e.height = 60,
        e.width = 446,
        e.x = 1,
        e.y = -2,
        e
    },
    r.scrTheme2_i = function() {
        var e = new eui.Scroller;
        return this.scrTheme2 = e,
        e.anchorOffsetY = 0,
        e.height = 60,
        e.width = 446,
        e.x = 44,
        e.y = 204,
        e.viewport = this._Group3_i(),
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_2_i()],
        e
    },
    r.list_2_i = function() {
        var e = new eui.List;
        return this.list_2 = e,
        e.height = 60,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 446,
        e.x = 0,
        e.y = 0,
        e
    },
    r.scrTheme3_i = function() {
        var e = new eui.Scroller;
        return this.scrTheme3 = e,
        e.anchorOffsetY = 0,
        e.height = 60,
        e.width = 446,
        e.x = 44,
        e.y = 302,
        e.viewport = this._Group4_i(),
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_3_i()],
        e
    },
    r.list_3_i = function() {
        var e = new eui.List;
        return this.list_3 = e,
        e.height = 60,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 446,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamLogoThemeSKin.exml"] = window.TeamLogoThemeSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["iconbg2", "icon"],
        this.height = 60,
        this.width = 60,
        this.elementsContent = [this.iconbg2_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.iconbg2_i = function() {
        var e = new eui.Image;
        return this.iconbg2 = e,
        e.height = 60,
        e.source = "team_logo_create_iconbg2_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 0,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.width = 0,
        e
    },
    t
} (eui.Skin);