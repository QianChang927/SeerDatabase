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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTaskSettingsBanItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnDel,
            function() {
                t.data && EventManager.dispatchEventWith("team_task_settings_delPet", !1, t.data)
            },
            this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data ? (this.head.visible = this.btnDel.visible = !0, this.head.source = ClientConfig.getPetHeadPath(this.data.id)) : this.head.visible = this.btnDel.visible = !1
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.TeamTaskSettingsBanItem = t,
    __reflect(t.prototype, "team.TeamTaskSettingsBanItem")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.isManager = !1,
            i.rbGroup = new eui.RadioButtonGroup,
            i.skinName = "TeamSkin",
            i._data = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.icon_0.source = ClientConfig.getItemIcon(1),
            this.icon_1.source = ClientConfig.getItemIcon(1722814),
            this.adaptRightContent(this.grp_itemCount),
            this.initBtnClose("team_name_png", this),
            this.initBtnHelp(this.onHelp, this),
            this.grpContent.scaleY = 0,
            this.rbGroup = this.btn_device.group,
            this.curTabNum = this.rbGroup.selectedValue = 2,
            this.addEvent(),
            this.teamMember.visible = !1,
            this.teamDevice.visible = !0,
            this.teamPlay.visible = !1;
            var i = MainManager.actorInfo.teamInfo.priv;
            this.isManager = 1 >= i,
            this.editNotice = !1,
            this.editSlogan = !1,
            TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id, this.onGetTeamInfo, this),
            egret.Tween.get(this.grpContent).to({
                scaleY: 1
            },
            200, egret.Ease.quartOut).call(function() {
                if (e._data) {
                    var t = GainWayManger.getJumpInfo(e._data);
                    if (t && t.menuDefault > 0) {
                        var i = [2, 0, 1];
                        e.curTabNum = e.rbGroup.selectedValue = i[t.menuDefault - 1]
                    } else e.curTabNum = e.rbGroup.selectedValue = e._data.selectVlaue;
                    e.enterView()
                }
            }),
            this.redPlayShow(),
            this.adaptBgByScale(this.BG)
        },
        i.prototype.getBLen = function(e) {
            return null == e ? 0 : ("string" != typeof e && (e += ""), e.replace(/[^\x00-\xff]/g, "001").length)
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.btn_device.selected = !0,
            this.teamDevice.visible = !0,
            ImageButtonUtil.add(this.btnManage, this.onManager, this),
            ImageButtonUtil.add(this.btnEdit, this.onEditSlogan, this),
            ImageButtonUtil.add(this.btnEdit1, this.onEditNotice, this),
            ImageButtonUtil.add(this.btnUp, this.onUpgrade, this),
            ImageButtonUtil.add(this.btnSave, this.onSaveSlogan, this),
            ImageButtonUtil.add(this.btnSave1, this.onSaveNotice, this),
            ImageButtonUtil.add(this.icon_0,
            function() {
                var e = {};
                e.id = 1,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var e = {};
                e.id = 1722814,
                tipsPop.TipsPop.openItemPop(e)
            },
            this),
            this.rbGroup.addEventListener(egret.Event.CHANGE, this.onChangePage, this),
            EventManager.addEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.onMyTeamInfoChanged, this),
            EventManager.addEventListener("team_member_inited", this.memberInit, this),
            EventManager.addEventListener("teamResCountChanged", this.updateCount, this),
            EventManager.addEventListener("updateTeamName",
            function() {
                TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id, e.onGetTeamInfo, e)
            },
            this)
        },
        i.prototype.redPlayShow = function() {
            this.teamPlay_red.visible = !!HotRedManager.getInstance().getHotRedState(1002) || !!HotRedManager.getInstance().getHotRedState(1003)
        },
        i.prototype.onHelp = function() {
            var e = "1.战队由玩家创建而成，可以招收其他的玩家结伴同行\n2.提升战队等级可以增加战队可容纳玩家的数量，更多的战队队员将会加快战队的成长\n3.在战队中你可以执行任务获得贡献，并且增加战队的资源，为战队的成长献出一份力量\n4.贡献可以用于强化精灵与兑换奖励道具\n5.战队将会定期举行专属活动，届时将有专属的精灵与丰富的奖励等你获得",
            t = {
                str: e,
                title: "战队",
                hideClose: !1,
                isHtml: !0
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        i.prototype.onUpgrade = function() {
            var t = PopViewManager.createDefaultStyleObject();
            t.caller = this,
            PopViewManager.getInstance().openView(new e.TeamUpgrade, t)
        },
        i.prototype.onMyTeamInfoChanged = function() {
            this.onGetTeamInfo(TeamInfoManager.myTeamInfo)
        },
        i.prototype.updateCount = function() {
            var e = this;
            this.txtCount_0.text = MainManager.actorInfo.coins + "",
            KTool.getMultiValue([2821],
            function(t) {
                e.txtCount_1.text = t[0] + ""
            })
        },
        i.prototype.onGetTeamInfo = function(e) {
            var t = this;
            this.updateCount(),
            this.teamInfo = e,
            this.txtTeamName.text = this.teamInfo.name,
            this.txtLvl.text = this.teamInfo.newTeamLevel + "",
            this.txt_id.text = this.teamInfo.teamID + "",
            this.txtCount.text = this.teamInfo.memberCount + "/" + this.teamInfo.maxTeamMembers,
            this.txt_resource.text = this.teamInfo.score + "",
            this.txtNotice.text = this.teamInfo.notice.length > 0 ? this.teamInfo.notice: "无",
            this.txtSlogan.text = this.teamInfo.slogan.length > 0 ? this.teamInfo.slogan: "无",
            SocketConnection.sendByQueue(CommandID.GET_SIM_USERINFO, [this.teamInfo.leader],
            function(e) {
                var i = new UserInfo;
                UserInfo.setForSimpleInfo(i, e.data),
                t.teamInfo.leaderNick = i.nick,
                t.txtLeaderName.text = i.nick
            }),
            this.teamDevice.onUpdateTeamInfo()
        },
        i.prototype.memberInit = function() {
            for (var e = [], t = 0; t < this.teamMember.membersList.length; t++) 1 == this.teamMember.membersList[t].priv && e.push(this.teamMember.membersList[t]),
            this.teamMember.membersList[t].userID == MainManager.actorID && (MainManager.actorInfo.teamInfo.priv = this.teamMember.membersList[t].priv, this.teamMember.membersList[t].priv < 2 && (this.isManager = !0));
            for (var t = 0; 3 > t; t++) this["grp_manager_" + t].visible = !!e[t],
            e[t] && (this["txt_manager_" + t].text = e[t].nick)
        },
        i.prototype.onEditNotice = function(e) {
            return GameInfo.isSpecialTime ? void BubblerManager.getInstance().showText("功能维护中!") : this.isManager ? (this.editNotice = !0, this.txtNotice.touchEnabled = !0, void this.txtNotice.setFocus()) : void BubblerManager.getInstance().showText("只有战队指挥和管理员才能更改战队公告！")
        },
        i.prototype.onEditSlogan = function(e) {
            return GameInfo.isSpecialTime ? void BubblerManager.getInstance().showText("功能维护中!") : this.isManager ? (this.editSlogan = !0, this.txtSlogan.touchEnabled = !0, void this.txtSlogan.setFocus()) : void BubblerManager.getInstance().showText("只有战队指挥和管理员才能更改战队口号！")
        },
        i.prototype.onSaveNotice = function() {
            var e = this.txtNotice.text.trim(),
            t = this.getBLen(e),
            i = 60;
            if (t > 0 && i >= t) {
                var n = new egret.ByteArray;
                n.writeUTFBytes(e),
                n.length = 60,
                this.editNotice = !1,
                SocketConnection.sendByQueue(CommandID.TEAM_SET_NOTICE, [n],
                function() {
                    BubblerManager.getInstance().showText("更改完毕！"),
                    TeamInfoManager.myTeamInfo.notice = e,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                })
            } else BubblerManager.getInstance().showText("请输入最多二十个字的战队公告！")
        },
        i.prototype.onSaveSlogan = function() {
            var e = this.txtSlogan.text.trim(),
            t = this.getBLen(e),
            i = 60;
            if (t > 0 && i >= t) {
                var n = new egret.ByteArray;
                n.writeUTFBytes(e),
                n.length = 60,
                this.editSlogan = !1,
                SocketConnection.sendByQueue(CommandID.TEAM_SET_SLOGAN, [n],
                function() {
                    BubblerManager.getInstance().showText("更改完毕！"),
                    TeamInfoManager.myTeamInfo.slogan = e,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                })
            } else BubblerManager.getInstance().showText("请输入最多二十个字的战队口号！")
        },
        i.prototype.onDissolve = function(t) {
            var i = this;
            if (0 == MainManager.actorInfo.teamInfo.priv) {
                var n = PopViewManager.createDefaultStyleObject();
                n.caller = this,
                n.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(new e.TeamDissolvePop, n)
            } else Alert.show("你确定要退出该战队吗？",
            function() {
                SocketConnection.sendByQueue(CommandID.TEAM_QUIT, [],
                function() {
                    MainManager.actorInfo.teamInfo.id = 0,
                    TeamInfoManager.myTeamInfo = null,
                    i.onClose()
                })
            })
        },
        i.prototype.onManager = function() {
            var t = new e.TeamManage,
            i = PopViewManager.createDefaultStyleObject();
            i.maskShapeStyle.maskAlpha = .65,
            PopViewManager.getInstance().openView(t, i)
        },
        i.prototype.onChangePage = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return this.curTabNum = ~~this.btn_device.group.selectedValue,
                    this.enterView(),
                    [2]
                })
            })
        },
        i.prototype.enterView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return 0 == this.curTabNum ? (this.redPlayShow(), StatLogger.log("20210813版本系统功能", "战队", "打开战队主界面-战队成员"), this.teamMember.visible = !0, this.teamMember.alpha = 0, e = this.teamMember, t = this.teamDevice.visible ? this.teamDevice: this.teamPlay) : 2 == this.curTabNum ? (StatLogger.log("20210813版本系统功能", "战队", "打开战队主界面-战队设施"), this.redPlayShow(), this.teamDevice.visible = !0, this.teamDevice.alpha = 0, e = this.teamDevice, t = this.teamMember.visible ? this.teamMember: this.teamPlay) : (StatLogger.log("20210813版本系统功能", "战队", "打开战队主界面-玩法"), this.teamPlay_red.visible = !1, this.teamPlay.visible = !0, this.teamPlay.alpha = 0, e = this.teamPlay, t = this.teamMember.visible ? this.teamMember: this.teamDevice),
                        this.btn_device.touchEnabled = !1,
                        this.btn_info.touchEnabled = !1,
                        this.btn_play.touchEnabled = !1,
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(t).to({
                            alpha: 0
                        },
                        200, egret.Ease.quartIn).call(function() {
                            t.visible = !1
                        }))];
                    case 1:
                        return i.sent(),
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(e).to({
                            alpha: 1
                        },
                        200, egret.Ease.quartOut).call(function() {}))];
                    case 2:
                        return i.sent(),
                        this.btn_device.touchEnabled = !0,
                        this.btn_info.touchEnabled = !0,
                        this.btn_play.touchEnabled = !0,
                        [2]
                    }
                })
            })
        },
        Object.defineProperty(i.prototype, "editNotice", {
            set: function(e) {
                this.btnSave1.visible = e,
                this.btnEdit1.visible = !e,
                this.txtNotice.touchEnabled = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "editSlogan", {
            set: function(e) {
                this.btnSave.visible = e,
                this.btnEdit.visible = !e,
                this.txtSlogan.touchEnabled = e
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.teamMember.destroy(),
            this.teamDevice.destroy(),
            this.teamPlay.destroy(),
            this.teamInfo = null,
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.onMyTeamInfoChanged, this),
            this.rbGroup.removeEventListener(egret.Event.CHANGE, this.onChangePage, this),
            EventManager.removeEventListener("team_member_inited", this.memberInit, this),
            EventManager.dispatchEventWith("RedPointEvent"),
            EventManager.removeEventListener("teamResCountChanged", this.updateCount, this),
            this.rbGroup = null
        },
        i
    } (BaseModule);
    e.Team = t,
    __reflect(t.prototype, "team.Team")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t
    } (eui.Component);
    e.TeamLog = t,
    __reflect(t.prototype, "team.TeamLog")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.privArray = ["指挥官", "管理员", "队员"],
            t
        }
        return __extends(t, e),
        t.prototype.initData = function(e, t) {
            void 0 === t && (t = !1),
            e && (this.userID = e.readUnsignedInt(), this.priv = e.readUnsignedInt(), t ? (this.todayContri = e.readUnsignedInt(), this.contribute = e.readUnsignedInt(), this.title = e.readUTFBytes(18)) : (this.contribute = e.readUnsignedInt(), this.title = e.readUTFBytes(18)))
        },
        Object.defineProperty(t.prototype, "privString", {
            get: function() {
                return this.privArray[this.priv]
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    } (UserInfo);
    e.TeamMemberInfo = t,
    __reflect(t.prototype, "team.TeamMemberInfo")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamMemberItermRenderSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {},
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.txtName.text = e.nick,
            this.txtTitle.text = e.privString,
            this.star.visible = e.priv <= 1,
            this.txtContribution.text = e.todayContri + "(" + e.contribute + ")",
            e.simpleUserInfo && (0 == e.simpleUserInfo.logoutTime ? this.txtStatus.textColor = 9828353 : this.txtStatus.textColor = 5862823, this.txtStatus.text = e.simpleUserInfo.getStatus())
        },
        t
    } (eui.ItemRenderer);
    e.TeamMemberItemRender = t,
    __reflect(t.prototype, "team.TeamMemberItemRender")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.startID = 1,
            e.members = {},
            e.PER_COUNT = 20,
            e.membersList = [],
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.arrayCollection = new eui.ArrayCollection,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamMemberItemRender,
            this._list.dataProvider = this.arrayCollection,
            this.getList(),
            EventManager.addEventListener(TeamInfoManager.TEAM_CONTRIBUTE_CHANGED, this.onMyContributeChanged, this)
        },
        i.prototype.onMyContributeChanged = function(e) {
            for (var t = e.data,
            i = 0; i < this.arrayCollection.length; i++) {
                var n = this.arrayCollection.getItemAt(i);
                if (n.userID == MainManager.actorInfo.userID) {
                    n.contribute = n.contribute + t,
                    n.todayContri = n.todayContri + t,
                    this.arrayCollection.replaceItemAt(n, i);
                    break
                }
            }
        },
        i.prototype.getList = function() {
            var t = this;
            SocketConnection.sendByQueue(CommandID.NEW_TEAM_GET_MEMBERS_INFO, [this.startID, this.PER_COUNT],
            function(i) {
                var n = i.data;
                n.position = 0;
                for (var a = n.readUnsignedInt(), r = n.readUnsignedInt(), o = [], s = 0; r > s; s++) {
                    var _ = new e.TeamMemberInfo;
                    _.initData(n, !0),
                    _.userID > 0 && (t.members[_.userID] = _, o.push(_.userID))
                }
                t.getSimpleUsersInfo(o).then(function() {
                    r != t.PER_COUNT || a == t.startID * t.PER_COUNT ? (t.membersList.sort(function(e, t) {
                        return e.priv == t.priv ? e.simpleUserInfo.logoutTime == t.simpleUserInfo.logoutTime ? e.contribute - t.contribute: 0 == e.simpleUserInfo.logoutTime ? -1 : 0 == t.simpleUserInfo.logoutTime ? 1 : t.simpleUserInfo.logoutTime - e.simpleUserInfo.logoutTime: e.priv - t.priv
                    }), t.arrayCollection.replaceAll(t.membersList)) : (t.startID++, t.getList())
                })
            },
            function() {})
        },
        i.prototype.getSimpleUsersInfo = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    return [2, new Promise(function(i, n) {
                        if (e && e.length > 0) {
                            for (var a = e.length,
                            r = new egret.ByteArray,
                            o = 0; a > o; o++) r.writeUnsignedInt(e[o]);
                            SocketConnection.sendByQueue(CommandID.GET_USERS_SIMPLE_INFO, [a, r],
                            function(e) {
                                var n = e.data;
                                n.position = 0;
                                for (var a = n.readUnsignedInt(), r = 0; a > r; r++) {
                                    var o = new SimpleUserInfo(n),
                                    s = t.members[o.uid];
                                    s.nick = o.nick,
                                    s.simpleUserInfo = o,
                                    t.membersList.push(s)
                                }
                                i(null)
                            },
                            function() {
                                n()
                            })
                        } else i(null)
                    })]
                })
            })
        },
        i.prototype.destroy = function() {
            this.membersList = null,
            EventManager.removeEventListener(TeamInfoManager.TEAM_CONTRIBUTE_CHANGED, this.onMyContributeChanged, this)
        },
        i
    } (eui.Component);
    e.TeamMembers = t,
    __reflect(t.prototype, "team.TeamMembers")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TeamPlaySkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.img_coming.visible = this.sItem_1.visible = this.sItem_2.visible = !GameInfo.isChecking,
            SystemTimerManager.sysBJDate.getTime() < e.TeamPlayConst.startTime.getTime() || SystemTimerManager.sysBJDate.getTime() >= e.TeamPlayConst.delayTime.getTime() ? (this.teamBossNoOpen.visible = this.teamTraderNoOpen.visible = !0, this.bossLimit.visible = this.traderLimit.visible = !1, this.img_boss.source = "team_play_img_boss_png", this.img_boss.touchEnabled = this.img_quartermaster.touchEnabled = !1) : (this.teamBossNoOpen.visible = this.teamTraderNoOpen.visible = !1, this.bossLimit.visible = this.traderLimit.visible = !0, this.countDownTxt(), this.img_boss.source = "team_play_img_bossOpen_png", this.img_boss.touchEnabled = this.img_quartermaster.touchEnabled = !0),
            this.teamBoss_red.visible = !!HotRedManager.getInstance().getHotRedState(e.TeamPlayConst.bossHotID),
            this.teamTrader_red.visible = !!HotRedManager.getInstance().getHotRedState(e.TeamPlayConst.traderHotID),
            HotRedManager.getInstance().registerHotEvent(e.TeamPlayConst.bossHotID,
            function() {
                i.teamBoss_red.visible = !!HotRedManager.getInstance().getHotRedState(e.TeamPlayConst.bossHotID)
            },
            this),
            HotRedManager.getInstance().registerHotEvent(e.TeamPlayConst.traderHotID,
            function() {
                i.teamTrader_red.visible = !!HotRedManager.getInstance().getHotRedState(e.TeamPlayConst.traderHotID)
            },
            this),
            ImageButtonUtil.add(this.img_task,
            function() {
                ModuleManager.showModuleByID(80)
            },
            this),
            ImageButtonUtil.add(this.img_boss,
            function() {
                HotRedManager.getInstance().clickIcon(e.TeamPlayConst.bossHotID).then(function() {
                    ModuleManager.showModuleByID(159)
                })
            },
            this),
            ImageButtonUtil.add(this.img_quartermaster,
            function() {
                HotRedManager.getInstance().clickIcon(e.TeamPlayConst.traderHotID).then(function() {
                    ModuleManager.showModuleByID(160)
                })
            },
            this)
        },
        i.prototype.countDownTxt = function() {
            var t, i, n, a = e.TeamPlayConst.delayTime.getTime() - SystemTimerManager.sysBJDate.getTime();
            t = a / 36e5,
            i = Math.floor(t / 24),
            n = 24 - SystemTimerManager.sysBJDate.getHours(),
            this.txt_bossLeaveTime.text = i + "天" + n + "小时",
            this.txt_traderLeaveTime.text = i + "天" + n + "小时"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this)
        },
        i
    } (eui.Component);
    e.TeamPlay = t,
    __reflect(t.prototype, "team.TeamPlay")
} (team || (team = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
team; !
function(e) {
    var t = function() {
        function e() {}
        return e.startTime = new Date("2024/8/23 00:00:00"),
        e.delayTime = new Date("2024/9/7 00:00:00"),
        e.boosItemID = 2300071,
        e.boosLastItemID = 2300071,
        e.taskHotID = 0,
        e.bossHotID = 1002,
        e.traderHotID = 1003,
        e
    } ();
    e.TeamPlayConst = t,
    __reflect(t.prototype, "team.TeamPlayConst")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.teamBossCMD = 47317,
            e.challengTime = 16667,
            e.exchangeTime = 10742,
            e.boosid = 11095,
            e.curProgess = 2821,
            e.curRewardState = 105033,
            e.currentBoss = 4666,
            e.curValue = 0,
            e.curTime = 0,
            e.skinName = TeambossSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            StatLogger.log("战队活动", "战队BOSS", "H5打开战队BOSS面板"),
            this._bar.maximum = 200,
            this._bar.minimum = 0,
            this.txtIntro.textFlow = [{
                text: "每战胜",
                style: {
                    textColor: 8165328
                }
            },
            {
                text: "1",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "次「拟态绞索」可降低其",
                style: {
                    textColor: 8165328
                }
            },
            {
                text: "1",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "点能量，能量进度全体战队成员共享。能量每降低",
                style: {
                    textColor: 8165328
                }
            },
            {
                text: "50",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "点，全体战队成员均可领取",
                style: {
                    textColor: 8165328
                }
            },
            {
                text: "「拟态绞索因子宝箱」",
                style: {
                    textColor: 4252667
                }
            },
            {
                text: "！",
                style: {
                    textColor: 8165328
                }
            }],
            this.addEvent(),
            this.countDownTxt(),
            this.initData(),
            this.grp_timeShow.alpha = 0,
            egret.Tween.get(this.grp_timeShow).to({
                alpha: 1
            },
            500, egret.Ease.quadOut)
        },
        i.prototype.initData = function() {
            var e = this;
            SocketConnection.sendByQueue(this.teamBossCMD, [1, 0],
            function(t) {
                var i = t.data,
                n = i.readUnsignedInt();
                e.curValue = n,
                e.update()
            })
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnAdd,
            function() {
                Alarm.show("暂未开放，可前往《赛尔号》页游继续体验！")
            },
            this),
            ImageButtonUtil.add(this.btnPet,
            function() {
                t.hide(),
                ModuleManager.showModule("petBag", ["petBag"])
            },
            this),
            ImageButtonUtil.add(this.btnCure,
            function() {
                PetManager.cureAll()
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.onClose()
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                StatLogger.log("战队活动", "战队BOSS", "H5点击活动说明"),
                tipsPop.TipsPop.openHelpPopById(101)
            },
            this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                StatLogger.log("战队活动", "战队BOSS", "H5点击精灵详情"),
                PetManager.showPetManualInfo(t.currentBoss, 1)
            },
            this),
            ImageButtonUtil.add(this.btnFight,
            function() {
                return t.curTime <= 0 ? void Alarm.show("挑战次数已用尽！") : (StatLogger.log("战队活动", "战队BOSS", "H5点击【挑战】"), void FightManager.fightNoMapBoss(t.boosid))
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this);
            for (var i = function(i) {
                ImageButtonUtil.add(n["reward" + (i + 1)],
                function() {
                    if ("canGet" == t["reward" + (i + 1)].currentState) SocketConnection.sendByQueue(t.teamBossCMD, [3, i + 1],
                    function() {
                        t.update()
                    });
                    else {
                        StatLogger.log("战队活动", "战队BOSS", "H5点击任一未达成状态的奖励宝箱查看Tips");
                        var n = void 0;
                        n = {},
                        n.id = 3 != i ? e.TeamPlayConst.boosItemID: e.TeamPlayConst.boosLastItemID,
                        tipsPop.TipsPop.openItemPop(n)
                    }
                },
                n)
            },
            n = this, a = 0; 4 > a; a++) i(a)
        },
        i.prototype.onFightOver = function() {
            EventManager.dispatchEventWith("teamResCountChanged"),
            this.initData()
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([this.curProgess, this.curRewardState, this.challengTime],
            function(t) {
                0 == KTool.getBit(t[1], 10) && (npcDialog.showDialogIds(253,
                function() {},
                e.parent.parent), SocketConnection.sendByQueue(e.teamBossCMD, [4, 0])),
                e._bar.value = e.curValue,
                e.txt_curProgess.text = 200 - e._bar.value + "/200";
                for (var i = 0; 4 > i; i++) {
                    var n = 0 == KTool.getBit(t[1], i + 1);
                    e["reward" + (i + 1)].currentState = n ? "unlock": "done",
                    e["reward" + (i + 1)].hideAnim(),
                    e._bar.value - 50 >= 50 * i && n && (e["reward" + (i + 1)].currentState = "canGet", e["reward" + (i + 1)].showAnim())
                }
                var a = MainManager.actorInfo.isVip ? 2 : 1;
                e.curTime = a - t[2],
                e.txt_leftTime.text = e.curTime + "次",
                e.btnFight.visible = e.curTime > 0,
                e.btnAdd.visible = e.curTime <= 0
            })
        },
        i.prototype.countDownTxt = function() {
            var t, i, n, a = e.TeamPlayConst.delayTime.getTime() - SystemTimerManager.sysBJDate.getTime();
            t = a / 36e5,
            i = Math.floor(t / 24),
            n = 24 - SystemTimerManager.sysBJDate.getHours(),
            this.txt_bossLeaveTime.text = i + "天" + n + "小时"
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this);
            for (var e = 0; 4 > e; e++) this["reward" + (e + 1)].destroy();
            egret.Tween.removeTweens(this.grp_timeShow)
        },
        i
    } (BaseModule);
    e.TeamBoss = t,
    __reflect(t.prototype, "team.TeamBoss")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function(e) {
        function t(t) {
            var i = e.call(this) || this;
            return i.skinName = TeamNameChangeSkin,
            i.value = t,
            i
        }
        return __extends(t, e),
        t.prototype.initialized = function() {},
        t.prototype.initEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnXiugai,
            function() {
                return __awaiter(e, void 0, void 0,
                function() {
                    var e, t, i, n = this;
                    return __generator(this,
                    function(a) {
                        switch (a.label) {
                        case 0:
                            return e = TeamInfoManager.myTeamInfo.score,
                            t = new egret.ByteArray,
                            t.writeUTFBytes(this.Txt_Name.text),
                            t.length = 16,
                            e < this.value.info.price ? (Alarm.show("战队资源不足！"), [2]) : [4, KTool.getBitSetAsync([9803, 9804])];
                        case 1:
                            return i = a.sent(),
                            1 == i[1] && 0 == i[0] ? this.checkNick() && SocketConnection.sendByQueue(46346, [2, t],
                            function() {
                                Alarm.show("战队名称修改成功！"),
                                EventManager.dispatchEventWith("updateTeamName"),
                                EventManager.dispatchEventWith("exchangeItem"),
                                n.hide()
                            }) : i[1] + i[0] == 0 && SocketConnection.sendByQueue(46346, [1, t],
                            function(e) {
                                var i = e.data,
                                a = i.readUnsignedInt();
                                1 == a && n.checkNick() && SocketConnection.sendByQueue(46346, [2, t],
                                function() {
                                    Alarm.show("战队名称修改成功！"),
                                    EventManager.dispatchEventWith("updateTeamName"),
                                    EventManager.dispatchEventWith("exchangeItem"),
                                    n.hide()
                                })
                            }),
                            [2]
                        }
                    })
                })
            },
            this)
        },
        t.prototype.checkNick = function() {
            if ("" == this.Txt_Name.text) return BubblerManager.getInstance().showText("战队名称不能为空！"),
            !1;
            var e = new egret.ByteArray;
            return e.writeUTFBytes(this.Txt_Name.text),
            e.length > 15 ? (BubblerManager.getInstance().showText("战队名称长度为1-5个汉字或1-15个英文字母！"), !1) : this.Txt_Name.text == TeamInfoManager.myTeamInfo.name ? (BubblerManager.getInstance().showText("与原来的昵称相同"), !1) : !0
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamChangeName = t,
    __reflect(t.prototype, "team.TeamChangeName")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.myRes = 0,
            e.leftTimes = 0,
            e.skinName = TeamItemsSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20210813版本系统功能", "战队", "打开道具科技中心面板"),
            this.txtLvl.text = "Lv." + TeamInfoManager.myTeamInfo.bonusCenterLevel,
            this.txt_bigLevel.text = "Level." + TeamInfoManager.myTeamInfo.bonusCenterLevel;
            var t = config.TeamResource.getItems();
            this.arrayCollection = new eui.ArrayCollection(t),
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamItemsRender,
            this._list.dataProvider = this.arrayCollection,
            this._list.validateNow(),
            this.updateData(),
            this.imgItem.source = ClientConfig.getItemIcon(1722814),
            ImageButtonUtil.add(this.imgItem,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1722814
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(45),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            EventManager.addEventListener("exchange_team_item", this.onExchangeItem, this)
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2821, 12471],
            function(t) {
                if (e.txtItemCount.text = "" + t[0], e.txtResCount.text = TeamInfoManager.myTeamInfo.score + "/" + TeamInfoManager.resArr[TeamInfoManager.myTeamInfo.resCenterLevel - 1].maxNum, e.myRes = t[0], e.leftTimes = 3 - t[1], e.txtLeftTimes.text = "今日可兑换次数：" + e.leftTimes + "/3", e.txtItemCount.text = "" + e.myRes, e.leftTimes <= 0) for (var i = 0; i < e._list.numChildren; i++) DisplayUtil.setEnabled(e._list.getChildAt(i).grpBuy, !1)
            })
        },
        i.prototype.onExchangeItem = function(e) {
            var t = this,
            i = e.data;
            if (this.leftTimes <= 0) BubblerManager.getInstance().showText("每天最多可以兑换3次，请明天再来！");
            else if (i.ExchangeLimit > TeamInfoManager.myTeamInfo.bonusCenterLevel) BubblerManager.getInstance().showText("兑换该道具需要更高等级的道具科技中心！");
            else if (i.ObtainItemNeedExp > TeamInfoManager.myTeamInfo.score) BubblerManager.getInstance().showText("战队资源不足，请获得足够的战队资源再来！");
            else if (i.ObtainItemNeedContribute > this.myRes) BubblerManager.getInstance().showText("你的贡献值不足！");
            else {
                var n = i.id,
                a = i.RewardID;
                SocketConnection.sendByQueue(CommandID.NEW_TEAM_EXCHANGE_ITEMS, [1, n],
                function(e) {
                    var i = e.data,
                    n = i.readUnsignedInt();
                    if (TeamInfoManager.myTeamInfo.score = i.readUnsignedInt(), n > 0) {
                        t.updateData();
                        var r = ItemXMLInfo.getName(a);
                        BubblerManager.getInstance().showText("成功兑换" + r + "*1")
                    } else t.txtResCount.text = "" + TeamInfoManager.myTeamInfo.score,
                    Alarm.show("战队资源不足，请获得足够的战队资源再来！");
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                })
            }
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            ImageButtonUtil.removeAll(e.TeamItems),
            EventManager.removeEventListener("exchange_team_item", this.onExchangeItem, this)
        },
        i
    } (BaseModule);
    e.TeamItems = t,
    __reflect(t.prototype, "team.TeamItems")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.leftTimes = 5,
            e.exchangeScore = [6e3, 12e3, 18e3, 24e3],
            e.resArr = [{
                teamLevel: 2,
                needRes: 2e3,
                maxNum: 16e3,
                prodNum: 6
            },
            {
                teamLevel: 3,
                needRes: 4e3,
                maxNum: 24e3,
                prodNum: 9
            },
            {
                teamLevel: 4,
                needRes: 6e3,
                maxNum: 32e3,
                prodNum: 12
            },
            {
                teamLevel: 5,
                needRes: 8e3,
                maxNum: 4e4,
                prodNum: 15
            }],
            e.skinName = TeamResSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210813版本系统功能", "战队", "打开战队资源中心面板"),
            DisplayUtil.setEnabled(this.btnOpen, !1),
            this.updateInfo(),
            this.addEvent(),
            this.midGroup.visible = !GameInfo.isChecking
        },
        i.prototype.updateInfo = function() {
            var e = TeamInfoManager.myTeamInfo.resCenterLevel;
            this.txt_level.text = "Lv." + e,
            this.txt_bigLevel.text = "Level." + e,
            this.txt_resource.text = TeamInfoManager.myTeamInfo.score + "/" + TeamInfoManager.resArr[e - 1].maxNum,
            this.warning.visible = TeamInfoManager.myTeamInfo.score >= TeamInfoManager.resArr[e - 1].maxNum;
            var t = TeamInfoManager.resArr[e - 1].needCoin,
            i = TeamInfoManager.resArr[e - 1].prodNum,
            n = TeamInfoManager.resArr[e - 1].costNun;
            this.txt_cost.text = t + "",
            this.txt_getRes.text = i + "",
            this.txt_getCont.text = n + "",
            this.updateData()
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2821, 12470, 12469],
            function(t) {
                e.leftTimes = Math.max(0, 5 - t[1]),
                e.techOpened = t[2] > 0,
                e.txt_dailyTimes.text = "每天可生产" + e.leftTimes + "/5次";
                var i = TeamInfoManager.myTeamInfo.score >= TeamInfoManager.resArr[TeamInfoManager.myTeamInfo.resCenterLevel - 1].maxNum || e.leftTimes <= 0;
                DisplayUtil.setEnabled(e.btnProduct, !i),
                e.flag_used.visible = e.techOpened,
                e.btnOpen.visible = !e.techOpened
            })
        },
        i.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnProduct, this.onProduct, this),
            ImageButtonUtil.add(this.btnOpen, this.onShowSetNxTech, this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(44),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            EventManager.addEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.updateInfo, this)
        },
        i.prototype.onShowSetNxTech = function() {
            var e = this;
            if (!this.techOpened) {
                if (TeamInfoManager.myTeamInfo.score >= 8e3 * TeamInfoManager.myTeamInfo.resCenterLevel) return void Alarm.show("当前战队资源已经达到上限，暂时无法开启！");
                SocketConnection.sendByQueue(CommandID.RES_PRODUCTORBUY, [1, 0],
                function(t) {
                    var i = t.data;
                    i ? (i.readUnsignedInt(), TeamInfoManager.myTeamInfo.score = i.readUnsignedInt(), TeamInfoManager.myTeamInfo.resCenterLevel = i.readUnsignedInt(), BubblerManager.getInstance().showText("当前战队资源已经达到上限，暂时无法开启！")) : Alert.show("你需要花费52钻石开启战队黑科技直接为战队增加200战队资源，你也会获得20点贡献值，每天只能开启1次，你确认要开启吗？",
                    function() {
                        KTool.buyProductByCallback(247809, 1,
                        function() {
                            SocketConnection.sendByQueue(CommandID.RES_PRODUCTORBUY, [3, 0],
                            function(t) {
                                TeamInfoManager.myTeamInfo.score = TeamInfoManager.myTeamInfo.score + 200,
                                e.updateInfo(),
                                BubblerManager.getInstance().showText("今日战队黑科技已开启，获得200点战队资源及20点贡献值")
                            })
                        },
                        e)
                    })
                },
                function() {})
            }
        },
        i.prototype.onUpgrade = function() {
            var t = TeamInfoManager.myTeamInfo.resCenterLevel;
            if (5 > t) {
                var i = new e.TeamResUpgrade;
                PopViewManager.getInstance().openView(i)
            } else BubblerManager.getInstance().showText("已经是最高等级，无法再升级了！")
        },
        i.prototype.onProduct = function() {
            var e = this,
            t = TeamInfoManager.myTeamInfo.resCenterLevel;
            if (TeamInfoManager.myTeamInfo.score >= TeamInfoManager.resArr[t - 1].max) BubblerManager.getInstance().showText("战队资源已达到持有上限，现在无法再生产资源");
            else if (this.leftTimes > 0) {
                var i = TeamInfoManager.resArr[t - 1].needCoin;
                if (i > MainManager.actorInfo.coins) BubblerManager.getInstance().showText("战队资源生产一次需消耗" + i + "赛尔豆,您的赛尔豆不足！");
                else {
                    var n = TeamInfoManager.resArr[t - 1].prodNum,
                    a = TeamInfoManager.resArr[t - 1].costNun,
                    r = "本次生产需要" + i + "赛尔豆，可获得" + n + "战队资源,是否需要生产？";
                    Alert.show(r,
                    function() {
                        SocketConnection.sendByQueue(CommandID.RES_PRODUCTORBUY, [2, 0],
                        function(i) {
                            var r = i.data;
                            null == r ? (TeamInfoManager.myTeamInfo.score += TeamInfoManager.resArr[t - 1].prodNum, EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED), EventManager.dispatchEvent(new egret.Event(TeamInfoManager.TEAM_CONTRIBUTE_CHANGED, !1, !1, a)), Alarm.show("战队增加了" + n + "点战队资源，同时你获得了" + a + "点贡献值")) : (r.readUnsignedInt(), TeamInfoManager.myTeamInfo.score = r.readUnsignedInt(), TeamInfoManager.myTeamInfo.resCenterLevel = r.readUnsignedInt(), e.updateInfo(), Alarm.show("当前战队资源已经达到上限，暂时无法生产！"))
                        },
                        function() {})
                    })
                }
            } else BubblerManager.getInstance().showText("战队资源生产次数已经用完，请明天再来！")
        },
        i.prototype.sendBuyDrawing = function(e) {
            var t = this;
            return 2 == MainManager.actorInfo.teamInfo.priv ? void Alarm.show("只有总指挥和管理员才能进行战队升级！") : TeamInfoManager.myTeamInfo.score < this.exchangeScore[e] ? void Alarm.show("战队资源不足，无法兑换建设图纸。") : void SocketConnection.sendByQueue(CommandID.EXCHANGE_DRAWINGBUILD, [e + 1],
            function(i) {
                var n = TeamInfoManager.myTeamInfo.haveDrawingStatus;
                TeamInfoManager.myTeamInfo.haveDrawingStatus = BitUtil.setBit(n, e - 1),
                TeamInfoManager.myTeamInfo.score = TeamInfoManager.myTeamInfo.score - t.exchangeScore[e],
                TeamInfoManager.updateSelfTeamInfo(t.updateInfo, t),
                BubblerManager.getInstance().showText("图纸兑换成功！")
            },
            function() {
                TeamInfoManager.updateSelfTeamInfo(t.updateInfo, t)
            })
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.updateInfo, this),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.TeamRes = t,
    __reflect(t.prototype, "team.TeamRes")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.resArr = [{
                teamLevel: 2,
                needRes: 2e3,
                maxNum: 16e3,
                prodNum: 6
            },
            {
                teamLevel: 3,
                needRes: 4e3,
                maxNum: 24e3,
                prodNum: 9
            },
            {
                teamLevel: 4,
                needRes: 6e3,
                maxNum: 32e3,
                prodNum: 12
            },
            {
                teamLevel: 5,
                needRes: 8e3,
                maxNum: 4e4,
                prodNum: 15
            }],
            t.skinName = TeamDeviceUpgradeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.txtTitle.text = "战队资源升级",
            this.updateShow(),
            this.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                var t = TeamInfoManager.myTeamInfo.resCenterLevel,
                i = TeamInfoManager.myTeamInfo.newTeamLevel;
                return i < e.resArr[t - 1].teamLevel ? void Alarm.show("战队等级不够，无法升级设施。") : TeamInfoManager.myTeamInfo.score < e.resArr[t - 1].needRes ? void Alarm.show("战队资源不足，无法升级设施。") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [3],
                function() {
                    TeamInfoManager.myTeamInfo.score -= e.resArr[t - 1].needRes,
                    TeamInfoManager.myTeamInfo.resCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    PopViewManager.getInstance().hideView(e),
                    BubblerManager.getInstance().showText("战队资源中心升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        e.updateShow(),
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this)
        },
        t.prototype.updateShow = function() {
            var e = TeamInfoManager.myTeamInfo.resCenterLevel,
            t = TeamInfoManager.myTeamInfo.newTeamLevel;
            this.txtLevel.text = t + "",
            this.txtRes.text = TeamInfoManager.myTeamInfo.score + "",
            this.txtLevelNeed.text = "战队等级：",
            this.txtLevelNeedNum.text = this.resArr[e - 1].teamLevel,
            this.txtNeedRes.text = "" + this.resArr[e - 1].needRes,
            this.txtNote.text = "1、每次生产战队资源的产量	+3\n2、战队资源的可持有上限 + 8000\n3、战队资源中心最高可升至5级";
            for (var i = TeamInfoManager.myTeamInfo.haveDrawingStatus,
            n = 0; 4 > n; n++) {
                BitUtil.getBit(i, n)
            }
        },
        t
    } (PopView);
    e.TeamResUpgrade = t,
    __reflect(t.prototype, "team.TeamResUpgrade")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.taskList = [],
            e.currRate = 0,
            e._inited = !1,
            e._maxTimes = 12,
            e.skinName = TeamTaskSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            StatLogger.log("20210813版本系统功能", "战队", "打开战队任务面板"),
            this.timer = new egret.Timer(1e3),
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this),
            this.grpDefault.visible = !0,
            this.grpTask.visible = !1,
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnHelp, this.onHelp, this),
            ImageButtonUtil.add(this.btnDispatch1, this.onDispatch, this),
            ImageButtonUtil.add(this.btnGet, this.onGetAwards, this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                t.grpDefault.visible = !0,
                t.grpTask.visible = !1,
                t._list.selectedIndex = -1
            },
            this),
            ImageButtonUtil.add(this.btnSetting,
            function() {
                PopViewManager.getInstance().openView(new e.TeamTaskSettings)
            },
            this),
            ImageButtonUtil.add(this.btnOneTap,
            function() {
                SocketConnection.sendByQueue(45809, [0],
                function() {
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    t.updateTasks()
                })
            },
            this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickTask, this),
            this.updateView(),
            this.timer.start()
        },
        i.prototype.updateView = function() {
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamTaskItemRender,
            this.taskArrayCollection = new eui.ArrayCollection,
            this._list.dataProvider = this.taskArrayCollection,
            this.updateTasks()
        },
        i.prototype.updateTasks = function() {
            var e = this;
            this.taskList = [],
            SocketConnection.sendByQueue(45807, [],
            function(t) {
                var i = t.data;
                e._curTaskTimes = i.readUnsignedInt();
                i.readUnsignedInt();
                e.txt_num.text = e._curTaskTimes + "/" + e._maxTimes;
                for (var n = i.readUnsignedInt(), a = 0; n > a; a++) {
                    var r = new TeamTaskInfo;
                    r.id = i.readUnsignedInt(),
                    r.inSpirit = [];
                    for (var o = 0; 5 > o; o++) r.inSpirit[o] = i.readUnsignedInt();
                    r.taskTimeStamp = i.readUnsignedInt(),
                    r.successRate = i.readUnsignedInt(),
                    r.isExtraReward = !!i.readUnsignedInt(),
                    r.state = i.readUnsignedInt(),
                    3 != r.state && e.taskList.push(r)
                }
                e.taskList.sort(function(e, t) {
                    var i = e.state - 3,
                    n = t.state - 3;
                    return i = 0 == i ? 0 : Math.abs(1 / i),
                    n = 0 == n ? 0 : Math.abs(1 / n),
                    n - i
                });
                var s = -1;
                if (e._list.selectedItem) for (var _ = e._list.selectedItem,
                u = _.id,
                a = 0; a < e.taskList.length; a++) e.taskList[a].id == u && (s = a);
                e.taskArrayCollection.replaceAll(e.taskList),
                e._list.selectedIndex = s,
                e._inited && e.onClickTask(),
                e._inited = !0
            })
        },
        i.prototype.onTimer = function() {
            for (var e = 0; e < this.taskList.length; e++) {
                var t = this.taskList[e];
                if (t && 1 == t.state) {
                    var i = t.taskTimeStamp,
                    n = i - SystemTimerManager.time;
                    if (n > 0) {
                        var a = this._list.selectedItem;
                        if (a && a.id == t.id) {
                            var r = TimeUtil.getTimeClock(1e3 * n, !1);
                            this.txtDoing.textFlow = [{
                                text: "剩余",
                                style: {
                                    textColor: 6323642
                                }
                            },
                            {
                                text: "" + r,
                                style: {
                                    textColor: 4252667
                                }
                            },
                            {
                                text: "完成任务",
                                style: {
                                    textColor: 6323642
                                }
                            }]
                        }
                    }
                    if (0 != t.taskTimeStamp && 0 >= n) {
                        this.updateTasks();
                        break
                    }
                }
            }
        },
        i.prototype.sendUpdateTaskState = function(e) {
            var t = this;
            SocketConnection.sendByQueue(43320, [8, 1, e],
            function(e) {
                t.updateTasks()
            },
            function() {})
        },
        i.prototype.onDispatch = function(t) {
            if (this._curTaskTimes >= this._maxTimes) return void Alarm.show("任务次数达到上限");
            var i = PopViewManager.createDefaultStyleObject();
            i.caller = this,
            i.clickMaskHandler = function() {};
            var n = new e.TeamTaskFastDispatch;
            n.addEventListener(PopView.EVENT_DESTROY, this.onDestroyDispatchPanel, this),
            PopViewManager.getInstance().openView(n, i, this._list.selectedItem)
        },
        i.prototype.onDestroyDispatchPanel = function() {
            this.updateTasks()
        },
        i.prototype.onDispatchAll = function(e) {
            var t = this,
            i = this._list.selectedItem,
            n = i.needMonstersNum;
            this.touchChildren = !1;
            var a = i.recommendPets;
            TeamTaskManager.updateInfo(function() {
                if (!t.destroyed) {
                    var e = TeamTaskManager.allPets.concat();
                    e.length;
                    if (t.touchChildren = !0, e.length < n) BubblerManager.getInstance().showText("背包精灵数量不足！");
                    else {
                        for (var i = [], r = [], o = [], s = {},
                        _ = 0; _ < e.length; _++) if (a.indexOf(e[_].id) >= 0 && -1 == r.indexOf(e[_].id)) {
                            if (r.push(e[_].id), i.push(e[_].catchTime), 5 == i.length) break
                        } else o.push(e[_].catchTime),
                        s[e[_].catchTime] = e[_];
                        if (i.length < 5) for (var u = 0; i.length < 5;) {
                            var h = s[e[u++].catchTime];
                            r.push(h.id),
                            i.push(h.catchTime)
                        }
                    }
                }
            },
            this, !0)
        },
        i.prototype.onGetAwards = function(e) {
            var t = this;
            this._list && this._list.selectedItem && SocketConnection.sendByQueue(45809, [this._list.selectedItem.id],
            function(e) {
                EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                t.updateTasks()
            })
        },
        i.prototype.onClickTask = function() {
            this.grpTask.visible = !0,
            this.grpDefault.visible = !1;
            var e = this._list.selectedItem;
            if (!e) return this.grpTask.visible = !1,
            void(this.grpDefault.visible = !0);
            var t = config.TeamTaskInfo.getItem(e.id);
            this.txtTaskName.text = t.TeamTaskName;
            var i = StringUtil.TransformLineBreak(t.TeamTaskDescription);
            switch (this.txtTaskDes.textFlow = (new egret.HtmlTextParser).parse(i), this.setStar(t.TeamTaskStar), e.state) {
            case 0:
                this.grpStart.visible = !0,
                this.grpGoing.visible = this.grpComplete.visible = !1,
                this.txtNeedPetNum.text = "" + t.TeamTaskNeedPetNum;
                var n = t.TeamTaskDispatchTime;
                this.txtNeedTime.text = "耗时：" + TimeUtil.getTimeClock(1e3 * n, !1);
                for (var a = t.TeamTaskRecommendPets.split("_").map(Number), r = 0; r < a.length; r++) this["head_" + r].source = ClientConfig.getPetHeadPath(a[r]);
                break;
            case 1:
                this.grpGoing.visible = !0,
                this.grpStart.visible = this.grpComplete.visible = !1,
                this.txt_rate.text = e.successRate + "%";
                for (var o = 0; o < e.inSpirit.length; o++) this["head_" + o].source = ClientConfig.getPetHeadPath(e.inSpirit[o]);
                break;
            case 2:
                this.grpComplete.visible = !0,
                this.grpStart.visible = this.grpGoing.visible = !1,
                this.txt1.visible = this.txt_rate1.visible = this.btnGet.visible = !0,
                this.txt_rate1.text = e.successRate + "%";
                for (var s = 0; s < e.inSpirit.length; s++) this["head_" + s].source = ClientConfig.getPetHeadPath(e.inSpirit[s]);
                break;
            case 3:
                this.grpComplete.visible = !0,
                this.grpStart.visible = this.grpGoing.visible = !1,
                this.txt1.visible = this.txt_rate1.visible = this.btnGet.visible = !1;
                for (var a = t.TeamTaskRecommendPets.split("_").map(Number), _ = 0; _ < a.length; _++) this["head_" + _].source = ClientConfig.getPetHeadPath(a[_])
            }
            for (var u = t.TeamTaskBaseReward.split(";"), h = t.TeamTaskExtraReward.split(";"), l = 0; 3 > l; l++) {
                var c = u[l],
                m = h[l];
                this["icon_" + l].source = null,
                this["icon_" + (l + 3)].source = null,
                c ? (this["grp_icon_" + l].visible = !0, this["icon_" + l].source = ClientConfig.getItemIcon(c.split("/")[0]), this["txtCount_" + l].text = c.split("/")[1]) : this["grp_icon_" + l].visible = !1,
                m ? (this["grp_icon_" + (l + 3)].visible = !0, this["icon_" + (l + 3)].source = ClientConfig.getItemIcon(m.split("/")[0]), this["txtCount_" + (l + 3)].text = m.split("/")[1]) : this["grp_icon_" + (l + 3)].visible = !1
            }
            this.onTimer()
        },
        i.prototype.setStar = function(e) {
            for (var t = 0; 5 > t; t++) e > t ? this["icon_star_" + t].source = "team_task_icon_star_png": this["icon_star_" + t].source = "team_task_icon_star_bg_png"
        },
        i.prototype.onHelp = function() {
            var e = "1、战队任务每日刷新，根据战队等级会刷出不同数量的任务，等级越高任务越多\n2、战队任务需要派遣仓库中的精灵进行任务，派遣中的精灵无法参战与执行其他战队任务\n3、任务完成后，需要收取奖励，可以点击一键收取按钮领取所有奖励\n4、战队任务会有推荐精灵，使用推荐精灵执行任务将会获得额外的成功率加成，成功执行任务可以获得额外奖励，若任务失败也不用灰心，可以获得基础奖励~\n5、派遣重复推荐精灵的成功率无法累加，只会生效1只推荐精灵的成功率",
            t = {
                str: e,
                title: "战队任务",
                hideClose: !1,
                isHtml: !0
            };
            tipsPop.TipsPop.openHelpPop(t, null)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this),
            SocketConnection.removeCmdListener(43320, this.updateView, this)
        },
        i
    } (BaseModule);
    e.TeamTask = t,
    __reflect(t.prototype, "team.TeamTask")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._attrType = 0,
            e._searchKey = "",
            e.skinName = TeamTaskDispatchSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            KTool.getMultiValue([2821],
            function(e) {
                t.txtCount.text = "" + e[0]
            });
            for (var i = this._data,
            n = 0; 3 > n; n++) this["recPet_" + n].source = ClientConfig.getPetHeadPath(i.recommendPets[n]),
            this["recPet_" + n].index = n,
            ImageButtonUtil.add(this["recPet_" + n], this.onSelectRecPet, this);
            this._arrayCollection = new eui.ArrayCollection,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamTaskPetItem,
            this._list.dataProvider = this._arrayCollection,
            this._selectPets = [],
            TeamTaskManager.updateInfo(function() {
                t._allPets = [];
                for (var e = TeamTaskManager.allPets.concat(), i = 0; i < e.length; i++) {
                    var n = e[i],
                    a = {
                        id: n.id,
                        ct: n.catchTime,
                        selected: !1
                    };
                    t._allPets.push(a)
                }
                t._allPets.sort(function(e, t) {
                    return e.id - t.id
                }),
                t.showPets()
            },
            this, !0),
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnAttr,
            function() {
                t.openSelectAttributePanel()
            },
            this);
            for (var n = 0; 5 > n; n++) this["btnDel_" + n].visible = !1,
            this["btnDel_" + n].index = n,
            ImageButtonUtil.add(this["btnDel_" + n], this.onDelDispatchPet, this);
            this.showDispatchPets(),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickPet, this),
            this.txtSearch.addEventListener(egret.Event.CHANGE, this.changeHandle, this),
            ImageButtonUtil.add(this.btnDispatch, this.onDispatchPets, this)
        },
        i.prototype.changeHandle = function(e) {
            this._searchKey = this.txtSearch.text.trim(),
            this.showPets()
        },
        i.prototype.onClickPet = function() {
            var e = this._list.selectedItem;
            if (!e.selected) if (this._selectPets.length < 5) {
                this._selectPets.push(e),
                e.selected = !0;
                var t = this._arrayCollection.getItemIndex(e);
                this._arrayCollection.replaceItemAt(e, t),
                this.showDispatchPets()
            } else BubblerManager.getInstance().showText("栏位已满，不可上阵！")
        },
        i.prototype.onDispatchPets = function() {
            var e = this;
            if (this._selectPets.length < 5) BubblerManager.getInstance().showText("请派遣足够的精灵");
            else {
                for (var t = this._data,
                i = [2, 6, t.index + 1], n = 0; n < this._selectPets.length; n++) i.push(this._selectPets[n].ct);
                SocketConnection.sendByQueue(43320, i,
                function(t) {
                    PopViewManager.getInstance().hideView(e)
                })
            }
        },
        i.prototype.openSelectAttributePanel = function() {
            var e = {
                callBack: this.onChangeAttributeIdHandler,
                caller: this,
                selectId: 0,
                unAutoClose: !1,
                relativeSet: {
                    srcWorldPos: this.btnAttr.localToGlobal(),
                    dir: "left-top",
                    rx: -98,
                    ry: 50
                }
            };
            ModuleManager.showModule("petChooseAttributePanel", ["pet_choose_attribute_panel"], e, "", AppDoStyle.NULL)
        },
        i.prototype.onChangeAttributeIdHandler = function(e, t) {
            this._attrType = t,
            this.showPets()
        },
        i.prototype.onSelectRecPet = function(e) {
            var t = e.currentTarget.index,
            i = this._data,
            n = i.recommendPets,
            a = n[t],
            r = PetXMLInfo.getName(a);
            this.txtSearch.text = r,
            this._searchKey = this.txtSearch.text.trim(),
            this.showPets()
        },
        i.prototype.onDelDispatchPet = function(e) {
            var t = e.currentTarget.index,
            i = this._selectPets[t];
            i.selected = !1,
            this._selectPets.splice(t, 1);
            var n = this._arrayCollection.getItemIndex(i);
            n >= 0 && this._arrayCollection.replaceItemAt(i, n),
            this.showDispatchPets()
        },
        i.prototype.showDispatchPets = function() {
            for (var e = 0,
            t = this._data,
            i = t.recommendPets,
            n = [], a = 0; 5 > a; a++) a < this._selectPets.length ? (this["btnDel_" + a].visible = !0, this["pet_" + a].source = ClientConfig.getPetHeadPath(this._selectPets[a].id), i.indexOf(this._selectPets[a].id) >= 0 && -1 == n.indexOf(this._selectPets[a].id) ? (e += 30, n.push(this._selectPets[a].id)) : e += 10) : (this["btnDel_" + a].visible = !1, this["pet_" + a].source = null);
            e = e > 100 ? 100 : e,
            this.txtSuccesRate.text = "当前成功率：" + e + "%"
        },
        i.prototype.showPets = function() {
            var e = this._allPets,
            t = ~~this._searchKey;
            this._arrayCollection.removeAll();
            for (var i = 0; i < e.length; i++) {
                var n = e[i],
                a = +PetXMLInfo.getType(n.id);
                if (! (this._attrType > 0 && this._attrType != a)) {
                    if (this._searchKey.length > 0) {
                        if (t > 0 && n.id != t) continue;
                        if (!SearchUtil.isMatch(this._searchKey, PetXMLInfo.getName(n.id))) continue
                    }
                    this._arrayCollection.addItem(n)
                }
            }
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.TeamTaskDispatch = t,
    __reflect(t.prototype, "team.TeamTaskDispatch")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t(t, i, n) {
            var a = e.call(this) || this;
            return a.petIds = t,
            a.cts = i,
            a.teamTask = n,
            a.skinName = TeamTaskFastDispatchSkin,
            a
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnCancel,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnDispatch,
            function() {
                return e.cts && e.cts.length ? void SocketConnection.sendByQueue(45808, [e.teamTask.id, e.cts[0], e.cts[1], e.cts[2], e.cts[3], e.cts[4]],
                function(t) {
                    PopViewManager.getInstance().hideView(e)
                }) : void BubblerManager.getInstance().showText("请等待数据初始化完成")
            },
            this)
        },
        t.prototype.setData = function(t) {
            e.prototype.setData.call(this, t),
            this.teamTask = t,
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            SocketConnection.sendByQueue(45810, [this.teamTask.id],
            function(t) {
                var i = t.data,
                n = i.readUnsignedInt(),
                a = i.readUnsignedInt();
                e.petIds = [],
                e.cts = [],
                e.levels = [];
                for (var r = 0; a > r; r++) e.cts.push(i.readUnsignedInt()),
                e.petIds.push(i.readUnsignedInt()),
                e.levels.push(i.readUnsignedInt());
                e.txtRate.text = "将派遣以上精灵执行任务，预计成功率" + n + "%\n是否决定派遣";
                for (var r = 0; r < e.petIds.length; r++) {
                    var o = ClientConfig.getPetHeadPath(e.petIds[r]);
                    e["head_" + r].source = o
                }
            },
            function() {
                e.hide()
            })
        },
        t.prototype.calcRate = function() {
            var e = 0;
            if (this.teamTask) {
                for (var t = this.teamTask.recommendPets,
                i = 0; i < this.petIds.length; i++) e += t.indexOf(this.petIds[i]) >= 0 ? 30 : 10;
                e = e > 100 ? 100 : e
            }
            this.txtRate.text = "成功率：" + e + "%"
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamTaskFastDispatch = t,
    __reflect(t.prototype, "team.TeamTaskFastDispatch")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._order = 1,
            e._attrId = 0,
            e.skinName = TeamTaskSettingsSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.grpOrder.visible = !0,
            this.btnBack.visible = !1,
            this._arrMy = new eui.ArrayCollection,
            this._arrBan = new eui.ArrayCollection,
            this._myList.itemRenderer = e.TeamTaskSettingsMyItem,
            this._banList.itemRenderer = e.TeamTaskSettingsBanItem,
            this._myList.dataProvider = this._arrMy,
            this._banList.dataProvider = this._arrBan,
            PetStorage2015InfoManager.getTotalInfo(function() {
                SocketConnection.sendByQueue(45805, [],
                function(e) {
                    var t = e.data;
                    i._banPets = [],
                    i._myPets = [];
                    for (var n = t.readUnsignedInt(), a = 0; n > a; a++) {
                        var r = {};
                        r.catchTime = t.readUnsignedInt(),
                        r.id = t.readUnsignedInt(),
                        r.level = t.readUnsignedInt(),
                        i._banPets.push(r)
                    }
                    i.showBanList(),
                    i.updateView()
                })
            }),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            this._myList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickMylist, this),
            EventManager.addEventListener("team_task_settings_delPet", this.onClickBanlist, this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnOrder,
            function() {
                e._order = -e._order,
                e.doOrder()
            },
            this),
            ImageButtonUtil.add(this.btnSearch,
            function() {
                var t = e.txtSearch.text.trim();
                if ("" !== t) {
                    e._searchTxt = t;
                    var i = e.filterSearchPets(e._myPets);
                    i.length ? (e._myPets = i, e._myScr.stopAnimation(), e._myScr.viewport.scrollV = 0, e.doOrder(), e.grpOrder.visible = !1, e.btnBack.visible = !0) : Alarm.show("未找到符合条件的精灵！")
                }
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                e._myPets = e.filterBanPets(e._allPets),
                e.doOrder(),
                e.grpOrder.visible = !0,
                e.btnBack.visible = !1,
                e.txtSearch.text = e._searchTxt = "",
                e._attrId = 0
            },
            this),
            ImageButtonUtil.add(this.btnAttr,
            function() {
                var t = {
                    callBack: e.onChangeAttributeIdHanlder,
                    caller: e,
                    selectId: 0,
                    unAutoClose: !1,
                    viewType: 2,
                    relativeSet: {
                        srcWorldPos: e.btnOrder.localToGlobal(),
                        dir: "left-top",
                        rx: -100,
                        ry: 87
                    }
                };
                ModuleManager.showModuleByID(config.ModuleConst.PET_CHOOSE_ATTRIBUTE_PANEL, t, AppDoStyle.NULL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp, this.onHelp, this)
        },
        i.prototype.onChangeAttributeIdHanlder = function(e, t) {
            this._attrId = t;
            var i = this.filterAttrPets(this._myPets);
            i.length ? (this._myScr.stopAnimation(), this._myScr.viewport.scrollV = 0, this._myPets = i, this.doOrder(), this.grpOrder.visible = !1, this.btnBack.visible = !0) : Alarm.show("未找到符合条件的精灵！")
        },
        i.prototype.filterAttrPets = function(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var n = ~~PetXMLInfo.getType(e[i].id);
                n != this._attrId && this._attrId || t.push(e[i])
            }
            return t
        },
        i.prototype.filterSearchPets = function(e) {
            for (var t = [], i = +this._searchTxt, n = i > 0, a = 0; a < e.length; a++) n ? e[a].id == i && t.push(e[a]) : SearchUtil.isMatch(this._searchTxt, PetXMLInfo.getName(e[a].id)) && t.push(e[a]);
            return t
        },
        i.prototype.updateView = function() {
            var e = PetManager.getBagMap(!0),
            t = PetStorage2015InfoManager.storageInfo.concat(PetStorage2015InfoManager.eliteInfo.filter(function(e) {
                return 4 == e.posi
            }));
            this._allPets = e.concat(t),
            this._myPets = this.filterBanPets(this._allPets),
            this.doOrder()
        },
        i.prototype.filterBanPets = function(e) {
            for (var t = [], i = this._banPets.map(function(e) {
                return e.catchTime
            }), n = 0; n < e.length; n++) - 1 == i.indexOf(e[n].catchTime) && 14 != e[n].posi && t.push(e[n]);
            return t
        },
        i.prototype.doOrder = function() {
            var e = this;
            this.btnOrder.source = this._order > 0 ? "team_task_settings_btnOrder_down_png": "team_task_settings_btnOrder_up_png",
            this._myPets.sort(function(t, i) {
                return t.id == i.id ? (i.catchTime - t.catchTime) * e._order: (i.id - t.id) * e._order
            }),
            this._myPets = this.filterBanPets(this._myPets),
            this._arrMy.replaceAll(this._myPets.concat())
        },
        i.prototype.onClickMylist = function(e) {
            for (var t = this,
            i = 0,
            n = 0; n < this._banPets.length; n++) this._banPets[n] && i++;
            if (i >= 12) return void Alarm.show("名单已满！");
            var a = e.item;
            SocketConnection.sendByQueue(45806, [1, a.catchTime],
            function(i) {
                var n = i.data,
                r = n.readUnsignedInt();
                if (0 == r) {
                    var o = t._myPets.indexOf(a);
                    t._myPets.splice(o, 1),
                    t._banPets.push(a),
                    t.showBanList(),
                    t._arrMy.removeItemAt(e.itemIndex)
                } else 1 == r && BubblerManager.getInstance().showText("操作失败")
            })
        },
        i.prototype.onClickBanlist = function(e) {
            var t = this,
            i = e.data;
            SocketConnection.sendByQueue(45806, [2, i.catchTime],
            function(e) {
                var n = e.data,
                a = n.readUnsignedInt();
                if (0 == a) {
                    var r = t._banPets.indexOf(i);
                    if (t._banPets.splice(r, 1), t.showBanList(), t._attrId) var o = t.filterAttrPets([i]);
                    else if (t._searchTxt) var o = t.filterSearchPets([i]);
                    else o = [i];
                    o.length && (t._myPets = t._myPets.concat(o)),
                    t.doOrder()
                } else 1 == a && BubblerManager.getInstance().showText("操作失败")
            })
        },
        i.prototype.showBanList = function() {
            for (var e = [], t = 0; 12 > t; t++) this._banPets[t] ? e.push(this._banPets[t]) : e.push(null);
            this._arrBan.replaceAll(e),
            this.txt_num.text = "不被派遣精灵（" + this._banPets.length + "/12）"
        },
        i.prototype.onHelp = function() {
            tipsPop.TipsPop.openHelpPopById(90)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this._myList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickMylist, this),
            EventManager.removeEventListener("team_task_settings_delPet", this.onClickBanlist, this)
        },
        i
    } (PopView);
    e.TeamTaskSettings = t,
    __reflect(t.prototype, "team.TeamTaskSettings")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.tipsDis = ["体力", "攻击", "防御", "特攻", "特防", "速度"],
            e.effects = ["1级精灵科技中心可以将精灵的体力最多提升20点，攻击、防御、特攻、特防最多提升10点", "2级精灵科技中心可以将精灵的体力最多提升22点，攻击、防御、特攻、特防最多提升11点，速度最多提升2点", "3级精灵科技中心可以将精灵的体力最多提升24点，攻击、防御、特攻、特防最多提升12点，速度最多提升4点", "4级精灵科技中心可以将精灵的体力最多提升26点，攻击、防御、特攻、特防最多提升13点，速度最多提升6点", "5级精灵科技中心可以将精灵的体力最多提升30点，攻击、防御、特攻、特防最多提升15点，速度最多提升10点"],
            e.enhanceArr = [[{
                name: "体力",
                Max: 20,
                perUp: 2,
                cost: "1-10"
            },
            {
                name: "攻击",
                Max: 10,
                perUp: 1,
                cost: "1-10"
            },
            {
                name: "防御",
                Max: 10,
                perUp: 1,
                cost: "1-10"
            },
            {
                name: "特攻",
                Max: 10,
                perUp: 1,
                cost: "1-10"
            },
            {
                name: "特防",
                Max: 10,
                perUp: 1,
                cost: "1-10"
            },
            {
                name: "速度",
                Max: 0,
                perUp: 0,
                cost: "0"
            }], [{
                name: "体力",
                Max: 22,
                perUp: 2,
                cost: "11"
            },
            {
                name: "攻击",
                Max: 11,
                perUp: 1,
                cost: "11"
            },
            {
                name: "防御",
                Max: 11,
                perUp: 1,
                cost: "11"
            },
            {
                name: "特攻",
                Max: 11,
                perUp: 1,
                cost: "11"
            },
            {
                name: "特防",
                Max: 11,
                perUp: 1,
                cost: "11"
            },
            {
                name: "速度",
                Max: 2,
                perUp: 0,
                cost: "11"
            }], [{
                name: "体力",
                Max: 24,
                perUp: 2,
                cost: "12"
            },
            {
                name: "攻击",
                Max: 12,
                perUp: 1,
                cost: "12"
            },
            {
                name: "防御",
                Max: 12,
                perUp: 1,
                cost: "12"
            },
            {
                name: "特攻",
                Max: 12,
                perUp: 1,
                cost: "12"
            },
            {
                name: "特防",
                Max: 12,
                perUp: 1,
                cost: "12"
            },
            {
                name: "速度",
                Max: 4,
                perUp: 1,
                cost: "12"
            }], [{
                name: "体力",
                Max: 26,
                perUp: 2,
                cost: "13"
            },
            {
                name: "攻击",
                Max: 13,
                perUp: 1,
                cost: "13"
            },
            {
                name: "防御",
                Max: 13,
                perUp: 1,
                cost: "13"
            },
            {
                name: "特攻",
                Max: 13,
                perUp: 1,
                cost: "13"
            },
            {
                name: "特防",
                Max: 13,
                perUp: 1,
                cost: "13"
            },
            {
                name: "速度",
                Max: 6,
                perUp: 1,
                cost: "13"
            }], [{
                name: "体力",
                Max: 30,
                perUp: 2,
                cost: "15"
            },
            {
                name: "攻击",
                Max: 15,
                perUp: 1,
                cost: "15"
            },
            {
                name: "防御",
                Max: 15,
                perUp: 1,
                cost: "15"
            },
            {
                name: "特攻",
                Max: 15,
                perUp: 1,
                cost: "15"
            },
            {
                name: "特防",
                Max: 15,
                perUp: 1,
                cost: "15"
            },
            {
                name: "速度",
                Max: 10,
                perUp: 1,
                cost: "15"
            }]],
            e._petList = [],
            e.skinName = TeamTechSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20210813版本系统功能", "战队", "打开精灵科技中心面板"),
            this.txt_level.text = "Lv." + TeamInfoManager.myTeamInfo.techCenterLevel,
            this.icon.source = ClientConfig.getItemIcon(1722814),
            ImageButtonUtil.add(this.icon,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1722814
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            ImageButtonUtil.add(this.btnEnhance, this.onClickEnhance, this),
            ImageButtonUtil.add(this.helpBtn_png,
            function() {
                var e = config.Help_tips.getItem(46),
                t = {};
                t.str = StringUtil.TransformLineBreak(e.tips),
                tipsPop.TipsPop.openHelpPop(t)
            },
            this),
            this.list_head.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchHead, this),
            this.list_attr.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchAttr, this),
            this.initPetList(),
            this.updateData(),
            this.showPetDetail()
        },
        i.prototype.onShowAttr2 = function() {
            ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this._petInfo, "", AppDoStyle.NULL)
        },
        i.prototype.onChangePet = function(e) {},
        i.prototype.onSelectPet = function(e) {
            var t = PetManager.getPetInfo(e);
            this._petInfo = t,
            this.showPetDetail()
        },
        i.prototype.onTouchHead = function(e) {
            var t = e.item.catchTime;
            this._petInfo = PetManager.getPetInfo(t),
            this.showPetDetail()
        },
        i.prototype.onTouchAttr = function() {
            DisplayUtil.setEnabled(this.btnEnhance, this.list_attr.selectedIndex > -1);
            var e = this.list_attr.selectedIndex;
            this.txt_cost.text = "" + this.getNeedCost(e)
        },
        i.prototype.initPetList = function() {
            var t = PetManager.getBagMap();
            this._petList = [];
            for (var i = 0; i < t.length; i++) this._petList.push(PetManager.getPetInfo(t[i].catchTime));
            this.list_attr.itemRenderer = e.TeamTechItem,
            this.list_head.itemRenderer = e.TeamTechHeadItem;
            for (var n = this._petList.concat(), i = 0; 6 > i; i++) n[i] || n.push(null);
            this.list_head.dataProvider = new eui.ArrayCollection(n),
            this._petList.length && (this._petInfo = this._petList[0], this.list_head.selectedIndex = 0),
            this.grp_content.visible = !!this._petList.length,
            this.grp_none.visible = !this._petList.length
        },
        i.prototype.updateData = function() {
            var e = this;
            KTool.getMultiValue([2821],
            function(t) {
                e._costNum = t[0],
                e.txt_count.text = "" + e._costNum
            })
        },
        i.prototype.showPetDetail = function() {
            if (this._petInfo) {
                this.txtPetName.text = PetXMLInfo.getName(this._petInfo.id),
                this.txtPetLvl.text = "" + this._petInfo.level,
                this.txtNature.text = "" + NatureXMLInfo.getName(this._petInfo.nature),
                this.txtTalent.text = "" + this._petInfo.dv;
                var e = PetManager.getPetEffect(this._petInfo),
                t = 0,
                i = "无";
                e && (i = PetEffectXMLInfo.getEffect(e.effectID, e.args), t = PetEffectXMLInfo.getStarLevel(e.effectID, e.args)),
                this.txtEffect.text = "" + i;
                for (var n = 0; 5 > n; n++) t > n ? this["star_" + n].source = "team_tech_star_on_png": this["star_" + n].source = "team_tech_star_off_png";
                var a = [{
                    name: "hp",
                    attr: this._petInfo.base_hp_total,
                    add: this._petInfo.getTeamTechAdd(0)[0],
                    max: this.getMax(0)
                },
                {
                    name: "atk",
                    attr: this._petInfo.base_attack_total,
                    add: this._petInfo.getTeamTechAdd(1)[0],
                    max: this.getMax(1)
                },
                {
                    name: "def",
                    attr: this._petInfo.base_defence_total,
                    add: this._petInfo.getTeamTechAdd(2)[0],
                    max: this.getMax(2)
                },
                {
                    name: "satk",
                    attr: this._petInfo.base_s_a_total,
                    add: this._petInfo.getTeamTechAdd(3)[0],
                    max: this.getMax(3)
                },
                {
                    name: "sdef",
                    attr: this._petInfo.base_s_d_total,
                    add: this._petInfo.getTeamTechAdd(4)[0],
                    max: this.getMax(4)
                },
                {
                    name: "speed",
                    attr: this._petInfo.base_speed_total,
                    add: this._petInfo.getTeamTechAdd(5)[0],
                    max: this.getMax(5)
                }];
                this.list_attr.dataProvider = new eui.ArrayCollection(a)
            } else {
                this.txtPetName.text = "",
                this.txtPetLvl.text = "",
                this.txtNature.text = "",
                this.txtTalent.text = "",
                this.txtEffect.text = "",
                this.list_attr.dataProvider = null;
                for (var n = 0; 5 > n; n++) this["star_" + n].source = "team_tech_star_off_png"
            }
            DisplayUtil.setEnabled(this.btnEnhance, this.list_attr.selectedIndex > -1)
        },
        i.prototype.showSkillData = function() {
            for (var e = 0; 6 > e; e++) if (this._petInfo) {
                var t = this._petInfo.getTeamTechAdd(e);
                this["txtPoint1_" + e].text = "" + this.getNeedCost(e),
                this["txtPoint2_" + e].text = "" + t[0] + "/" + this.getMax(e),
                this.getMax(e) <= this._petInfo.getTeamTechAdd(e)[0]
            } else this["txtPoint1_" + e].text = "",
            this["txtPoint2_" + e].text = ""
        },
        i.prototype.getNeedCost = function(e) {
            var t, i = this._petInfo.getTeamTechAdd(e)[0];
            return this.getMax(e) <= i ? 0 : t = 0 == e ? i / 2 + 1 : 5 == e ? 11 + i / 2 : i + 1
        },
        i.prototype.getMax = function(e) {
            return~~this.enhanceArr[TeamInfoManager.myTeamInfo.techCenterLevel - 1][e].Max
        },
        i.prototype.onClickChangePet = function(e) {},
        i.prototype.onClickLvlUp = function(e) {
            var t = TeamInfoManager.myTeamInfo.techCenterLevel;
            MainManager.actorInfo.teamInfo.priv < 2 ? t >= 5 && BubblerManager.getInstance().showText("精灵科技中心已经达到5级，目前无法继续升级了！") : Alarm.show("只有总指挥和管理员才能进行战队升级！")
        },
        i.prototype.onClickEnhance = function(e) {
            var t = this,
            i = this.list_attr.selectedIndex;
            return null == this._petInfo ? void Alarm.show("先选择你要进行强化的精灵哦！") : void(this.getMax(i) <= this._petInfo.getTeamTechAdd(i)[0] ? BubblerManager.getInstance().showText("该项属性值的战队加成已经达到上限！") : this.getNeedCost(i) > this._costNum ? BubblerManager.getInstance().showText("你的战队贡献值不足！") : SocketConnection.sendByQueue(CommandID.NEW_TEAM_PET_RISE, [this._petInfo.catchTime, i],
            function(e) {
                var n = PetXMLInfo.getName(t._petInfo.id) + t.tipsDis[i] + "战队加成强化成功," + t.tipsDis[i] + "获得一定的提升！";
                BubblerManager.getInstance().showText(n),
                PetManager.upDateBagPetInfo(t._petInfo.catchTime,
                function(e) {
                    t._petInfo = e,
                    t.updateData(),
                    t.showPetDetail(),
                    t.onTouchAttr()
                }),
                EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
            },
            function() {}))
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            this.list_head.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchHead, this),
            this.list_attr.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchAttr, this)
        },
        i
    } (BaseModule);
    e.TeamTech = t,
    __reflect(t.prototype, "team.TeamTech")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function() {
        function e() {}
        return e
    } ();
    e.ITeamTraderItemInfo = t,
    __reflect(t.prototype, "team.ITeamTraderItemInfo");
    var i = function(i) {
        function n() {
            var e = i.call(this) || this;
            return e.rewards = [],
            e.allRewards = [],
            e.first = !0,
            e.skinName = TeamtraderSkin,
            e
        }
        return __extends(n, i),
        n.prototype.childrenCreated = function() {
            i.prototype.childrenCreated.call(this),
            StatLogger.log("战队活动", "战队军需官", "H5打开战队军需官面板"),
            this.addEvent(),
            this.initData()
        },
        n.prototype.setTeamNameChangeItem = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, new Promise(function(e, i) {
                        KTool.getBitSet([9803, 9804],
                        function(i) {
                            var n = new t;
                            n.info = {},
                            n.info.visible = 1,
                            n.info.price = 2e4,
                            n.canGet = TeamInfoManager.myTeamInfo.score >= n.info.price && 0 == i[1] && 0 == i[0],
                            n.hasGet = i[0] > 0,
                            e(n)
                        })
                    })]
                })
            })
        },
        n.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, a;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (this.rewards = [], t = config.TeamTrader.getItems(), this.countDownTxt(), i = 0, n = t; i < n.length; i++) a = n[i],
                        this.rewards.push(a);
                        return this.rewards.sort(function(e, t) {
                            return e.sorting - t.sorting
                        }),
                        this._list.itemRenderer = e.TeamtraderRewardItem,
                        [4, this.sortReward()];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                })
            })
        },
        n.prototype.updateItemText = function() {
            var e = this;
            KTool.getMultiValue([2821],
            function(t) {
                e.txtCount1.text = t[0] + "",
                e.txtCount2.text = "" + TeamInfoManager.myTeamInfo.score
            })
        },
        n.prototype.sortReward = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, a, r, o, s, _, u = this;
                return __generator(this,
                function(h) {
                    switch (h.label) {
                    case 0:
                        for (this.updateItemText(), e = [], t = [], this.allRewards = [], i = 0, n = this.rewards; i < n.length; i++) a = n[i],
                        e.push(a.UserInfoId);
                        return [4, KTool.getMultiValueAsync(e)];
                    case 1:
                        for (t = h.sent(), r = 0; r < e.length; r++) o = 0,
                        s = {},
                        s.info = this.rewards[r],
                        o = t[r] >> 8 * this.rewards[r].UserInfoPos & 255,
                        s.num = o,
                        s.hasGet = o >= this.rewards[r].limit_num,
                        s.canGet = o < this.rewards[r].limit_num,
                        this.allRewards.push(s);
                        return this.allRewards.sort(function(e, t) {
                            return~~t.canGet - ~~e.canGet
                        }),
                        [4, this.setTeamNameChangeItem()];
                    case 2:
                        return _ = h.sent(),
                        0 != MainManager.actorInfo.teamInfo.priv ? (this.res1.visible = !1, this.allRewards.push(_)) : (this.res1.visible = !0, _.hasGet ? this.allRewards.push(_) : this.allRewards.unshift(_)),
                        this._list.dataProvider = new eui.ArrayCollection(this.allRewards),
                        this.first && this.once(egret.Event.RENDER,
                        function() {
                            u.first = !1,
                            DisplayUtil.setScrollerItemIncludeInLayout(u._scorl, !1),
                            gsap.from(u._list.$children, {
                                x: 1136,
                                alpha: 0,
                                stagger: .05
                            }).then(function() {
                                DisplayUtil.setScrollerItemIncludeInLayout(u._scorl, !0)
                            }).then(function() {
                                gsap.killTweensOf(u._list.$children)
                            })
                        },
                        this),
                        [2]
                    }
                })
            })
        },
        n.prototype.countDownTxt = function() {
            var t, i, n, a = e.TeamPlayConst.delayTime.getTime() - SystemTimerManager.sysBJDate.getTime();
            t = a / 36e5,
            i = Math.floor(t / 24),
            n = 24 - SystemTimerManager.sysBJDate.getHours(),
            this.txt_traderLeaveTime.text = i + "天" + n + "小时"
        },
        n.prototype.addEvent = function() {
            ImageButtonUtil.add(this.btnClose, this.onClose, this),
            EventManager.addEventListener("exchangeItem", this.sortReward, this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                StatLogger.log("战队活动", "战队军需官", "H5点击活动说明"),
                tipsPop.TipsPop.openHelpPopById(102)
            },
            this),
            ImageButtonUtil.add(this.icon_1,
            function() {
                var e = {};
                e.id = 1722814,
                tipsPop.TipsPop.openItemPop(e)
            },
            this)
        },
        n.prototype.destroy = function() {
            i.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("exchangeItem", this.sortReward, this)
        },
        n
    } (BaseModule);
    e.TeamTrader = i,
    __reflect(i.prototype, "team.TeamTrader")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TeamBossItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.icon.source = ClientConfig.getItemIcon(e.TeamPlayConst.boosItemID),
            this.canGetAnim = SpineUtil.createAnimate("zhanduiboss"),
            this.addChild(this.canGetAnim),
            this.canGetAnim.scaleX = this.canGetAnim.scaleY = .5,
            this.canGetAnim.x = this.canGetAnim.y = 40,
            this.canGetAnim.visible = !1
        },
        i.prototype.showAnim = function() {
            this.canGetAnim.visible = !0,
            this.canGetAnim.play("box", 0)
        },
        i.prototype.hideAnim = function() {
            this.canGetAnim.stopAll(),
            this.canGetAnim.visible = !1
        },
        i.prototype.destroy = function() {
            this.canGetAnim = null
        },
        i
    } (eui.Component);
    e.TeamBossItem = t,
    __reflect(t.prototype, "team.TeamBossItem")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TeamItemRenderSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.grpBuy,
            function(e) {
                t.onClickBuy(e)
            },
            e.TeamItems),
            this.icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickItem, this)
        },
        i.prototype.dataChanged = function() {
            var e = TeamInfoManager.myTeamInfo.bonusCenterLevel,
            t = this.data;
            if (t) {
                var i = e >= t.ExchangeLimit;
                this.grpBuy.visible = i,
                this.txtUnlock.visible = !i,
                this.icon.source = ClientConfig.getItemIcon(t.RewardID),
                this.txt_name.text = ItemXMLInfo.getName(t.RewardID),
                this.txtUnlock.text = t.ExchangeLimit + "级解锁",
                this.txtLabel.text = "需要战队资源*" + t.ObtainItemNeedExp + "，贡献值*" + t.ObtainItemNeedContribute
            } else this.icon.source = null
        },
        i.prototype.onClickItem = function(e) {
            var t = {};
            t.id = this.data.RewardID,
            tipsPop.TipsPop.openItemPop(t)
        },
        i.prototype.onClickBuy = function(e) {
            var t = new egret.Event("exchange_team_item", !1, !1, this.data);
            EventManager.dispatchEvent(t)
        },
        i
    } (eui.ItemRenderer);
    e.TeamItemsRender = t,
    __reflect(t.prototype, "team.TeamItemsRender")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTaskItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            this.data.state > 0 ? (this.tag.visible = !0, this.tag.source = "team_task_tag" + this.data.state + "_png") : this.tag.visible = !1,
            this.txtTaskName.text = config.TeamTaskInfo.getItem(this.data.id).TeamTaskName
        },
        t.prototype.destroy = function() {},
        t
    } (eui.ItemRenderer);
    e.TeamTaskItemRender = t,
    __reflect(t.prototype, "team.TeamTaskItemRender")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTaskPetSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {},
        t.prototype.dataChanged = function() {
            var e = this.data,
            t = PetXMLInfo.getName(e.id);
            t.length > 6 && (t = t.substr(0, 5) + "..."),
            this.txtName.text = t,
            this.petIcon.source = ClientConfig.getPetHeadPath(e.id),
            this.imgTag.visible = e.selected
        },
        t
    } (eui.ItemRenderer);
    e.TeamTaskPetItem = t,
    __reflect(t.prototype, "team.TeamTaskPetItem")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.deviceTechStatus = !1,
            t.deviceItemStatus = !1,
            t.nxTechOpened = !1,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            ImageButtonUtil.add(this.img_res, this.onShowRes, this),
            ImageButtonUtil.add(this.img_pet, this.onShowTech, this),
            ImageButtonUtil.add(this.img_item, this.onShowTools, this),
            EventManager.addEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.onUpdateTeamInfo, this),
            this.getDeviceStatus(1),
            this.getDeviceStatus(2)
        },
        t.prototype.onUpdateTeamInfo = function() {
            this.txt_resLevel.text = "Lv." + TeamInfoManager.myTeamInfo.resCenterLevel,
            this.txt_petLevel.text = "Lv." + TeamInfoManager.myTeamInfo.techCenterLevel,
            this.txt_itemLevel.text = "Lv." + TeamInfoManager.myTeamInfo.bonusCenterLevel
        },
        t.prototype.getDeviceStatus = function(e) {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_TEAM_DEVICE_STATUS, [1, e],
            function(i) {
                var n = i.data;
                n.position = 0,
                1 == e ? (t.petTime = n.readUnsignedInt(), t.deviceTechStatus = !!n.readUnsignedInt(), !t.deviceTechStatus && SystemTimerManager.time < t.petTime ? (t.flag_closed_pet.visible = !1, t.flag_opening_pet.visible = !0, egret.clearInterval(t._petInterval), t.showPetOpenTime(), t._petInterval = egret.setInterval(t.showPetOpenTime, t, 6e4)) : (t.flag_closed_pet.visible = !t.deviceTechStatus, t.flag_opening_pet.visible = !1)) : (t.itemTime = n.readUnsignedInt(), t.deviceItemStatus = !!n.readUnsignedInt(), !t.deviceItemStatus && SystemTimerManager.time < t.itemTime ? (t.flag_closed_item.visible = !1, t.flag_opening_item.visible = !0, egret.clearInterval(t._itemInterval), t.showItemOpenTime(), t._itemInterval = egret.setInterval(t.showItemOpenTime, t, 6e4)) : (t.flag_closed_item.visible = !t.deviceItemStatus, t.flag_opening_item.visible = !1))
            })
        },
        t.prototype.showPetOpenTime = function() {
            if (this.petTime < SystemTimerManager.time) return egret.clearInterval(this._petInterval),
            void this.getDeviceStatus(1);
            var e = this.petTime - SystemTimerManager.time,
            t = Math.ceil(e / 3600);
            this.txt_pet_openTime.text = t + ""
        },
        t.prototype.showItemOpenTime = function() {
            if (this.itemTime < SystemTimerManager.time) return egret.clearInterval(this._itemInterval),
            void this.getDeviceStatus(2);
            var e = this.itemTime - SystemTimerManager.time,
            t = Math.ceil(e / 3600);
            this.txt_item_openTime.text = t + ""
        },
        t.prototype.updateNxTechStatus = function() {},
        t.prototype.onShowTask = function() {
            ModuleManager.showModuleByID(80)
        },
        t.prototype.onShowRes = function() {
            ModuleManager.showModuleByID(79)
        },
        t.prototype.onShowTech = function() {
            this.deviceTechStatus ? ModuleManager.showModuleByID(77) : 0 == MainManager.actorInfo.teamInfo.id || MainManager.actorInfo.teamInfo.priv >= 2 ? BubblerManager.getInstance().showText("该功能已被关闭，请等待管理员打开!") : BubblerManager.getInstance().showText("该功能已被关闭，请前往建筑中心开启")
        },
        t.prototype.onShowTools = function() {
            this.deviceItemStatus ? ModuleManager.showModuleByID(78) : 0 == MainManager.actorInfo.teamInfo.id || MainManager.actorInfo.teamInfo.priv >= 2 ? BubblerManager.getInstance().showText("该功能已被关闭，请等待管理员打开!") : BubblerManager.getInstance().showText("该功能已被关闭，请前往建筑中心开启")
        },
        t.prototype.onShowSetNxTech = function() {
            var e = this;
            if (!this.nxTechOpened) {
                if (TeamInfoManager.myTeamInfo.score >= 8e3 * TeamInfoManager.myTeamInfo.resCenterLevel) return void Alarm.show("当前战队资源已经达到上限，暂时无法开启！");
                SocketConnection.sendByQueue(CommandID.RES_PRODUCTORBUY, [1, 0],
                function(t) {
                    var i = t.data;
                    i ? (i.readUnsignedInt(), TeamInfoManager.myTeamInfo.score = i.readUnsignedInt(), TeamInfoManager.myTeamInfo.resCenterLevel = i.readUnsignedInt(), BubblerManager.getInstance().showText("当前战队资源已经达到上限，暂时无法开启！")) : Alert.show("你需要花费52钻石开启战队黑科技直接为战队增加200战队资源，你也会获得20点贡献值，每天只能开启1次，你确认要开启吗？",
                    function() {
                        KTool.buyProductByCallback(247809, 1,
                        function() {
                            SocketConnection.sendByQueue(CommandID.RES_PRODUCTORBUY, [3, 0],
                            function(t) {
                                TeamInfoManager.myTeamInfo.score = TeamInfoManager.myTeamInfo.score + 200,
                                e.updateNxTechStatus(),
                                BubblerManager.getInstance().showText("今日战队黑科技已开启，获得200点战队资源及20点贡献值")
                            })
                        },
                        e)
                    })
                },
                function() {})
            }
        },
        t.prototype.destroy = function() {
            EventManager.removeEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.onUpdateTeamInfo, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.TeamDevice = t,
    __reflect(t.prototype, "team.TeamDevice")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTaskSettingsMyItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.once(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data && (this.txtName.text = StringUtil.parseStrLimitLen(PetXMLInfo.getName(this.data.id), 6), this.head.source = ClientConfig.getPetHeadPath(this.data.id), this.txtLevel.text = "LV." + this.data.level)
        },
        t.prototype.destroy = function() {
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.TeamTaskSettingsMyItem = t,
    __reflect(t.prototype, "team.TeamTaskSettingsMyItem")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTechHeadItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.data ? (this.head.source = ClientConfig.getPetHeadPath(this.data.id), this.touchEnabled = this.touchChildren = !0) : this.touchEnabled = this.touchChildren = !1
        },
        t.prototype.destroy = function() {},
        t
    } (eui.ItemRenderer);
    e.TeamTechHeadItem = t,
    __reflect(t.prototype, "team.TeamTechHeadItem")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTechItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            e.prototype.dataChanged.call(this),
            this.icon.source = "common_" + this.data.name + "_png",
            this.title.source = "team_tech_" + this.data.name + "_icon_png",
            this.txt_base.text = this.data.attr + "",
            this.txt_add.text = this.data.add + "/" + this.data.max
        },
        t.prototype.destroy = function() {},
        t
    } (eui.ItemRenderer);
    e.TeamTechItem = t,
    __reflect(t.prototype, "team.TeamTechItem")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = TeamtraderRewardItemSkin,
            i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.destroy, i),
            ImageButtonUtil.add(i.btnbuy,
            function() {
                return __awaiter(i, void 0, void 0,
                function() {
                    var t, i = this;
                    return __generator(this,
                    function(n) {
                        return 1 == ~~this.info.info.visible ? (t = new e.TeamChangeName(this.info), PopViewManager.getInstance().openView(t)) : KTool.getMultiValue([2821],
                        function(e) {
                            var t = e[0];
                            return t < i.info.info.price ? void Alarm.show("战队贡献不足！") : void SocketConnection.sendByQueue(46320, [27, i.info.info.id],
                            function() {
                                EventManager.dispatchEventWith("exchangeItem"),
                                EventManager.dispatchEventWith("teamResCountChanged")
                            })
                        }),
                        [2]
                    })
                })
            },
            i),
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.dataChanged = function() {
            var e = this;
            this.info = this.data,
            ImageButtonUtil.remove(this.rewardIcon),
            1 == ~~this.info.info.visible ? (this.currentState = "owner", this.txtLabel.text = this.info.info.price + "", this.txt_name.text = "战队名称修改", this.rewardIcon.source = "teamtrader_icon1_png", this.txt_num.text = ~~this.info.hasGet + "/1", DisplayUtil.setEnabled(this.btnbuy, 0 == MainManager.actorInfo.teamInfo.priv, 0 != MainManager.actorInfo.teamInfo.priv), 0 == MainManager.actorInfo.teamInfo.priv && DisplayUtil.setEnabled(this.btnbuy, !this.info.hasGet, this.info.hasGet)) : (this.currentState = "other", this.txt_name.text = StringUtil.parseStrLimitLen(this.info.info.item_name, 9), this.rewardIcon.source = ClientConfig.getItemIcon(~~this.info.info.item_id), this.txtLabel.text = this.info.info.price + "", this.num.text = "x" + this.info.info.output, this.txt_rewardState.text = 1 == ~~this.info.info.limit_type ? "每日限兑": "本期限兑", this.txt_num.text = ~~this.info.num + "/" + ~~this.info.info.limit_num, DisplayUtil.setEnabled(this.btnbuy, !this.info.hasGet, this.info.hasGet), ImageButtonUtil.add(this.rewardIcon,
            function() {
                var t = {};
                t.id = ~~e.info.info.item_id,
                tipsPop.TipsPop.openItemPop(t)
            },
            this))
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i
    } (eui.ItemRenderer);
    e.TeamtraderRewardItem = t,
    __reflect(t.prototype, "team.TeamtraderRewardItem")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamDissolvePopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnSave,
            function() {
                var t = e.txtPwd.text.trim(),
                i = /^[0-9]{6}$/;
                i.exec(t) ? SocketConnection.sendByQueue(42117, [0, +t],
                function() {
                    e.updateView()
                }) : BubblerManager.getInstance().showText("请输入六位数字")
            },
            this),
            ImageButtonUtil.add(this.btnCancel,
            function() {
                SocketConnection.sendByQueue(42117, [1, 0],
                function() {
                    e.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btnDissolve,
            function() {
                var t = e.txtPwd.text.trim(),
                i = /^[0-9]{6}$/;
                i.exec(t) ? SocketConnection.sendByQueue(42117, [0, +t],
                function() {
                    e.updateView()
                }) : BubblerManager.getInstance().showText("请输入六位数字")
            },
            this),
            this.updateView()
        },
        t.prototype.updateView = function() {
            var e = this;
            KTool.getForeverNum(6148,
            function(t) {
                if (t > 0) {
                    DisplayUtil.setEnabled(e.btnCancel, !0, !0),
                    DisplayUtil.setEnabled(e.btnSave, !1, !0),
                    e.txtPwd.text = "******",
                    e.txtPwd.touchChildren = !1,
                    e.txtPwd.touchEnabled = !1;
                    var i = new Date(1e3 * (t - 691200));
                    e.txtDate.text = TimeUtil.format("yyyy/MM/dd", i),
                    SystemTimerManager.time > t - 86400 ? DisplayUtil.setEnabled(e.btnDissolve, !0, !0) : DisplayUtil.setEnabled(e.btnDissolve, !1, !0);
                    var n = new Date(1e3 * (t - 86400)),
                    a = TimeUtil.format("yyyy/MM/dd", n);
                    e.tip.textFlow = (new egret.HtmlTextParser).parse("请于<font color='0xfff256'>" + a + "</font>后再次输入密码才可以解散战队")
                } else e.txtDate.text = "0000/00/00",
                e.txtPwd.text = "",
                e.tip.textFlow = (new egret.HtmlTextParser).parse("请于<font color='0xfff256'>7天</font>后再次输入密码才可以解散战队"),
                DisplayUtil.setEnabled(e.btnDissolve, !1, !0),
                DisplayUtil.setEnabled(e.btnSave, !0, !0),
                DisplayUtil.setEnabled(e.btnCancel, !1, !0),
                e.txtPwd.touchChildren = !0,
                e.txtPwd.touchEnabled = !0
            })
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamDissolvePop = t,
    __reflect(t.prototype, "team.TeamDissolvePop")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamDeviceUpgradeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.txtTitle.text = "战队道具升级",
            this.updateShow(),
            this.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                var t = TeamInfoManager.myTeamInfo.bonusCenterLevel;
                return t >= 5 ? void BubblerManager.getInstance().showText("道具科技中心最高可升至5级!") : TeamInfoManager.myTeamInfo.newTeamLevel < t + 1 ? void Alarm.show("战队等级不够，无法升级设施。") : TeamInfoManager.myTeamInfo.score < 1e3 * t ? void Alarm.show("战队资源不足，无法升级设施。") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [2],
                function() {
                    TeamInfoManager.myTeamInfo.score -= 1e3 * t,
                    TeamInfoManager.myTeamInfo.bonusCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    PopViewManager.getInstance().hideView(e),
                    BubblerManager.getInstance().showText("战队道具中心升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        e.updateShow(),
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this)
        },
        t.prototype.updateShow = function() {
            var e = TeamInfoManager.myTeamInfo.bonusCenterLevel,
            t = TeamInfoManager.myTeamInfo.newTeamLevel;
            this.txtLevel.text = t + "",
            this.txtRes.text = TeamInfoManager.myTeamInfo.score + "",
            this.txtLevelNeed.text = "战队等级：",
            this.txtLevelNeedNum.text = "" + (e + 1),
            this.txtNeedRes.text = "" + 1e3 * e,
            this.txtNote.text = "1、道具中心的等级越高	，就能解锁更多的道具兑换\n2、每个战队成员兑换道具都会消耗道具资源\n3、道具科技中心最高可升至5级"
        },
        t
    } (PopView);
    e.TeamItemUpgrade = t,
    __reflect(t.prototype, "team.TeamItemUpgrade")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamJoinConditionSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnSave, this.onSave, this);
            var e = TeamInfoManager.myTeamInfo.joinFlag;
            this["rb_" + e].selected = !0,
            DisplayUtil.setEnabled(this.btnSave, !1),
            this.rb_0.group.addEventListener(egret.Event.CHANGE, this.onChange, this)
        },
        t.prototype.onChange = function(e) {
            var t = +this.rb_0.group.selectedValue;
            t == TeamInfoManager.myTeamInfo.joinFlag ? DisplayUtil.setEnabled(this.btnSave, !1) : DisplayUtil.setEnabled(this.btnSave, !0)
        },
        t.prototype.onSave = function() {
            var e = this,
            t = +this.rb_0.group.selectedValue;
            t == TeamInfoManager.myTeamInfo.joinFlag || SocketConnection.sendByQueue(CommandID.TEAM_SET_JOIN_FLAG, [t],
            function() {
                BubblerManager.getInstance().showText("设置成功"),
                TeamInfoManager.myTeamInfo.joinFlag = t,
                e.onChange(null)
            })
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            this.rb_0.group.removeEventListener(egret.Event.CHANGE, this.onChange, this)
        },
        t
    } (eui.Component);
    e.TeamJoinCondition = t,
    __reflect(t.prototype, "team.TeamJoinCondition")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamManageSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            StatLogger.log("20210813版本系统功能", "战队", "打开战队设施管理面板"),
            this.rb_type1.group.addEventListener(egret.Event.CHANGE, this.onChangeType, this),
            this.rb_type1.selected = !0,
            this.res.visible = !0,
            this.pet.visible = !1,
            this.item.visible = !1,
            this.updateTeamScore(),
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            EventManager.addEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.updateTeamScore, this)
        },
        t.prototype.onClose = function() {
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
            PopViewManager.getInstance().hideView(this)
        },
        t.prototype.updateTeamScore = function() {
            this.txtCount.text = "" + TeamInfoManager.myTeamInfo.score
        },
        t.prototype.onChangeType = function() {
            var e = this.rb_type1.group.selectedValue;
            this.res.visible = !1,
            this.pet.visible = !1,
            this.item.visible = !1,
            this.dissolve.visible = !1,
            "res" == e ? this.res.visible = !0 : "pet" == e ? this.pet.visible = !0 : "item" == e ? this.item.visible = !0 : "dissolve" == e && (StatLogger.log("20210813版本系统功能", "战队", "打开战队设施管理面板-解散战队"), this.dissolve.warning.visible = !0, this.dissolve.visible = !0)
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            this.res.destroy(),
            this.pet.destroy(),
            this.item.destroy(),
            EventManager.removeEventListener(TeamInfoManager.MY_TEAM_INFO_CHANGED, this.updateTeamScore, this),
            this.rb_type1.group.removeEventListener(egret.Event.CHANGE, this.onChangeType, this),
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
        },
        t
    } (PopView);
    e.TeamManage = t,
    __reflect(t.prototype, "team.TeamManage")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TeamManageApplySKin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.arrayCollection = new eui.ArrayCollection,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamManageApplyRender,
            this._list.dataProvider = this.arrayCollection
        },
        i
    } (eui.Component);
    e.TeamManageApply = t,
    __reflect(t.prototype, "team.TeamManageApply")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamManageApplyRenderSkin,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {},
        t
    } (eui.ItemRenderer);
    e.TeamManageApplyRender = t,
    __reflect(t.prototype, "team.TeamManageApplyRender")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.deviceTechStatus = !1,
            e.deviceItemStatus = !1,
            e.deviceTechStatusChangeTime = 0,
            e.deviceItemStatusChangeTime = 0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.updateTech(),
            this.updateItem(),
            ImageButtonUtil.add(this.btnUp1, this.onTechUpgrade, this),
            ImageButtonUtil.add(this.btnUp2, this.onItemUpgrade, this),
            ImageButtonUtil.add(this.btnOn1, this.onTechOffOn, this),
            ImageButtonUtil.add(this.btnOn2, this.onItemOffOn, this),
            this.getDeviceStatus(1),
            this.getDeviceStatus(2),
            SocketConnection.addCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this)
        },
        i.prototype.getDeviceStatus = function(e) {
            var t = this;
            SocketConnection.sendByQueue(CommandID.GET_TEAM_DEVICE_STATUS, [1, e],
            function(i) {
                var n = i.data;
                n.position = 0;
                var a = n.readUnsignedInt();
                1 == e ? (t.deviceTechStatus = !!n.readUnsignedInt(), t.deviceTechStatusChangeTime = a, SystemTimerManager.time < a ? t.txtOffOn1.text = "已激活": t.deviceTechStatus ? t.txtOffOn1.text = "关闭": t.txtOffOn1.text = "开启") : (t.deviceItemStatus = !!n.readUnsignedInt(), t.deviceItemStatusChangeTime = a, SystemTimerManager.time < a ? t.txtOffOn2.text = "已激活": t.deviceItemStatus ? t.txtOffOn2.text = "关闭": t.txtOffOn2.text = "开启")
            })
        },
        i.prototype.onLevelChange = function() {
            var e = this;
            egret.setTimeout(function() {
                e.updateTech(),
                e.updateItem()
            },
            this, 100)
        },
        i.prototype.updateTech = function() {
            var e = TeamInfoManager.myTeamInfo.techCenterLevel;
            this.txtTechLvl.text = "Lv." + TeamInfoManager.myTeamInfo.techCenterLevel,
            this.txtCost1.text = 100 * (e + 1) + "/24小时",
            this.txtCost2.text = "" + (7e3 + 6e3 * (e - 1)),
            e >= 5 && (this.txtCost2.text = "已满级")
        },
        i.prototype.updateItem = function() {
            var e = TeamInfoManager.myTeamInfo.bonusCenterLevel;
            this.txtItemLvl.text = "Lv." + e,
            this.txtCost3.text = 100 * (e + 2) + "/24小时",
            this.txtCost4.text = "" + 1e3 * e,
            e >= 5 && (this.txtCost4.text = "已满级")
        },
        i.prototype.onTechUpgrade = function() {
            var t = TeamInfoManager.myTeamInfo.techCenterLevel;
            if (5 > t) {
                var i = new e.TeamTechUpgrade;
                PopViewManager.getInstance().openView(i)
            } else BubblerManager.getInstance().showText("当前建筑已满级")
        },
        i.prototype.onItemUpgrade = function() {
            var t = TeamInfoManager.myTeamInfo.bonusCenterLevel;
            if (5 > t) {
                var i = new e.TeamItemUpgrade;
                PopViewManager.getInstance().openView(i)
            } else BubblerManager.getInstance().showText("当前建筑已满级")
        },
        i.prototype.onTechOffOn = function() {
            var e = this;
            if (SystemTimerManager.time < this.deviceTechStatusChangeTime) BubblerManager.getInstance().showText("每天只能进行1次操作哦");
            else {
                var t = TeamInfoManager.myTeamInfo.techCenterLevel,
                i = 100 * (t + 1);
                TeamInfoManager.myTeamInfo.score <= i ? BubblerManager.getInstance().showText("当前战队资源不足，无法开启设施！") : (this.btnOn1.touchEnabled = !1, SocketConnection.sendByQueue(CommandID.SET_TEAM_DEVICE_STATUS, [2, 1],
                function() {
                    e.getDeviceStatus(1)
                },
                function() {
                    e.btnOn1.touchEnabled = !0
                }))
            }
        },
        i.prototype.onItemOffOn = function() {
            var e = this;
            if (SystemTimerManager.time < this.deviceItemStatusChangeTime) BubblerManager.getInstance().showText("每天只能进行1次操作哦");
            else {
                var t = TeamInfoManager.myTeamInfo.bonusCenterLevel,
                i = 100 * (t + 2);
                TeamInfoManager.myTeamInfo.score <= i ? BubblerManager.getInstance().showText("当前战队资源不足，无法开启设施！") : (this.btnOn2.touchEnabled = !1, SocketConnection.sendByQueue(CommandID.SET_TEAM_DEVICE_STATUS, [2, 2],
                function() {
                    e.getDeviceStatus(2)
                },
                function() {
                    e.btnOn2.touchEnabled = !0
                }))
            }
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this)
        },
        i
    } (eui.Component);
    e.TeamManageDevice = t,
    __reflect(t.prototype, "team.TeamManageDevice")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamManageDissolveSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.updateView()
        },
        t.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnConfirm,
            function() {
                e.warning.visible = !1
            },
            this),
            ImageButtonUtil.add(this.btnSave,
            function() {
                var t = e.txtPwd.text.trim(),
                i = /^[0-9]{6}$/;
                i.exec(t) ? SocketConnection.sendByQueue(42117, [0, +t],
                function() {
                    e.updateView()
                }) : BubblerManager.getInstance().showText("密码格式为6位数字密码！")
            },
            this),
            ImageButtonUtil.add(this.btnCancel,
            function() {
                SocketConnection.sendByQueue(42117, [1, 0],
                function() {
                    e.updateView()
                })
            },
            this),
            ImageButtonUtil.add(this.btnDissolve,
            function() {
                var t = e.txtPwd2.text.trim(),
                i = /^[0-9]{6}$/;
                i.exec(t) ? SocketConnection.sendByQueue(42117, [0, +t],
                function() {
                    MainManager.actorInfo.teamInfo.id = 0,
                    TeamInfoManager.myTeamInfo = null,
                    PopViewManager.getInstance().hideAll(),
                    ModuleManager.hideModule("team")
                }) : BubblerManager.getInstance().showText("密码格式为6位数字密码！")
            },
            this),
            this.txtPwd.addEventListener(egret.Event.CHANGE, this.onPwdChange, this)
        },
        t.prototype.updateView = function() {
            var e = this;
            KTool.getForeverNum(6148,
            function(t) {
                if (t > 0) {
                    DisplayUtil.setEnabled(e.btnCancel, !0),
                    e.btnSave.visible = !1,
                    e.txtPwd.text = "******",
                    e.txtPwd.touchChildren = !1,
                    e.txtPwd.touchEnabled = !1;
                    var i = new Date(1e3 * (t - 691200));
                    e.txtDate.text = TimeUtil.format("yyyy/MM/dd", i),
                    SystemTimerManager.time > t - 86400 ? DisplayUtil.setEnabled(e.btnDissolve, !0) : DisplayUtil.setEnabled(e.btnDissolve, !1);
                    var n = new Date(1e3 * (t - 86400)),
                    a = TimeUtil.format("yyyy/MM/dd", n);
                    e.txt_tips.textFlow = (new egret.HtmlTextParser).parse("请于<font color='0xfff256'>" + a + "</font>后再次输入密码才可以解散战队")
                } else e.txtDate.text = "",
                e.txtPwd.text = "",
                e.txt_tips.textFlow = (new egret.HtmlTextParser).parse("请于<font color='0xfff256'>7天</font>后再次输入密码才可以解散战队"),
                DisplayUtil.setEnabled(e.btnDissolve, !1),
                e.btnSave.visible = !0,
                DisplayUtil.setEnabled(e.btnCancel, !1),
                e.txtPwd.touchChildren = !0,
                e.txtPwd.touchEnabled = !0
            })
        },
        t.prototype.onPwdChange = function() {
            var e = this.txtPwd.text.trim();
            DisplayUtil.setEnabled(this.btnSave, !!e.length)
        },
        t.prototype.destroy = function() {
            this.txtPwd.removeEventListener(egret.Event.CHANGE, this.onPwdChange, this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (eui.Component);
    e.TeamManageDissolve = t,
    __reflect(t.prototype, "team.TeamManageDissolve")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.deviceStatus = !1,
            t.deviceStatusChangeTime = 0,
            t.skinName = TeamManageItemDeviceSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateView(),
            this.getDeviceStatus(),
            SocketConnection.addCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this),
            ImageButtonUtil.add(this.btnLevelUp,
            function() {
                if (MainManager.actorInfo.teamInfo.priv > 1) return void Alarm.show("只有战队指挥和战队管理才能进行战队设施管理！");
                var e = TeamInfoManager.myTeamInfo.bonusCenterLevel;
                return TeamInfoManager.myTeamInfo.newTeamLevel < e + 1 ? void Alarm.show("升级条件不满足，无法升级！") : TeamInfoManager.myTeamInfo.score < 1e3 * e ? void Alarm.show("升级条件不满足，无法升级！") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [2],
                function() {
                    TeamInfoManager.myTeamInfo.score -= 1e3 * e,
                    TeamInfoManager.myTeamInfo.bonusCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    BubblerManager.getInstance().showText("道具科技中心升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            this.ts_open.addEventListener(egret.Event.CHANGE, this.onTsChange, this)
        },
        t.prototype.onLevelChange = function() {
            var e = this;
            egret.setTimeout(function() {
                e.updateView()
            },
            this, 100)
        },
        t.prototype.updateView = function() {
            var e = TeamInfoManager.myTeamInfo.bonusCenterLevel;
            if (this.txt_level.text = e + "/5", this.txt_dailyNeed.text = 100 * e + "", e >= 5) this.grp_levelUp.visible = !1,
            this.flag_max.visible = !0;
            else {
                this.flag_max.visible = !1,
                this.grp_levelUp.visible = !0,
                this.txt_needLevel.text = "战队等级达到" + (e + 1) + "级",
                this.txt_needResource.text = "战队资源" + 1e3 * e,
                this.txt_need.text = 1e3 * e + "";
                var t = ["可兑换奇效攻击能量珠", "可兑换奇效防御能量珠", "可兑换奇效速度能量珠", "可兑换愤怒能量珠"],
                i = ["可兑换奇效特攻能量珠", "可兑换奇效特防能量珠", "可兑换战队加成遗忘药剂Ω", "可兑换不灭能量珠"];
                this.txt_effect_0.text = t[e - 1],
                this.txt_effect_1.text = i[e - 1]
            }
        },
        t.prototype.getDeviceStatus = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.GET_TEAM_DEVICE_STATUS, [1, 2],
            function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                e.deviceStatus = !!i.readUnsignedInt(),
                e.deviceStatusChangeTime = n,
                e.txt_state.text = e.deviceStatus ? "已开启": "已关闭",
                e.ts_open.selected = e.deviceStatus
            })
        },
        t.prototype.onTsChange = function() {
            var e = this,
            t = this.ts_open.selected;
            if (SystemTimerManager.time < this.deviceStatusChangeTime) BubblerManager.getInstance().showText("每天只能进行1次操作哦"),
            this.ts_open.selected = !t;
            else {
                var i = TeamInfoManager.myTeamInfo.bonusCenterLevel,
                n = 100 * i;
                t && TeamInfoManager.myTeamInfo.score <= n ? (BubblerManager.getInstance().showText("战队资源不足，无法开启！"), this.ts_open.selected = !t) : (this.ts_open.touchEnabled = !1, SocketConnection.sendByQueue(CommandID.SET_TEAM_DEVICE_STATUS, [2, 2],
                function() {
                    t ? Alarm.show("开启成功，该设施将于明天开启！") : Alarm.show("关闭成功，该设施将于明天关闭！"),
                    e.getDeviceStatus()
                },
                function() {
                    e.ts_open.touchEnabled = !0
                }))
            }
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this)
        },
        t
    } (eui.Component);
    e.TeamManageItemDevice = t,
    __reflect(t.prototype, "team.TeamManageItemDevice")
} (team || (team = {}));
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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
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
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.startID = 1,
            e.members = {},
            e.PER_COUNT = 20,
            e.membersList = [],
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            this.arrayCollection = new eui.ArrayCollection,
            this._scroller.viewport = this._list,
            this._list.itemRenderer = e.TeamManageMembersRender,
            this._list.dataProvider = this.arrayCollection,
            DisplayUtil.setEnabled(this.btnInfo, !1),
            this.getList(),
            this.hideAllArrow(),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnDel, this.onDelMember, this),
            ImageButtonUtil.add(this.btnManage, this.onManage, this),
            ImageButtonUtil.add(this.btnQuit, this.onDissolve, this),
            ImageButtonUtil.add(this.btnInfo,
            function() {
                var t = e._list.selectedItem;
                t ? ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], {
                    userId: t.userID,
                    port: "team"
                },
                "PersonalinformationIdCardPopView", AppDoStyle.NULL) : Alarm.show("请先选择一名战队成员。")
            },
            this),
            EventManager.addEventListener(TeamInfoManager.TEAM_MEMBER_TITLE_CHANGED, this.onMemberTitleChanged, this),
            this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
            EventManager.addEventListener(TeamInfoManager.TEAM_CONTRIBUTE_CHANGED, this.onMyContributeChanged, this),
            this.title_totalCont.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            this.title_dailyCont.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            this.title_state.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            EventManager.addEventListener("team_member_set_admin", this.adminSetted, this),
            EventManager.addEventListener("team_transfer_leader", this.onTransferLeader, this)
        },
        i.prototype.onClickItem = function() {
            var e = this._list.selectedItem;
            DisplayUtil.setEnabled(this.btnInfo, e.userID != MainManager.actorID)
        },
        i.prototype.onSetAdmin = function() {
            var e = this;
            if (!this._list.selectedItem) return void BubblerManager.getInstance().showText("请选择操作对象！");
            if (0 == MainManager.actorInfo.teamInfo.priv) {
                var t = this._list.selectedItem;
                if (t) {
                    if (t.userID == MainManager.actorInfo.userID) return void BubblerManager.getInstance().showText("不能对自己进行操作！");
                    if (t.priv < 2) return void SocketConnection.sendByQueue(CommandID.TEAM_CHANGE_ADMIN, [t.userID, 2],
                    function(i) {
                        Alarm.show("设置成功"),
                        t.priv = 2,
                        "管理员" == t.title && (t.title = "队员");
                        var n = e.arrayCollection.getItemIndex(t);
                        e.arrayCollection.removeItemAt(n),
                        e.arrayCollection.addItemAt(t, n),
                        e._list.selectedItem = t,
                        e.onClickItem()
                    });
                    SocketConnection.sendByQueue(CommandID.NEW_TEAM_SET_MANAGER, [t.userID],
                    function(i) {
                        var n = i.data,
                        a = n.readUnsignedInt();
                        if (0 == a) {
                            Alarm.show("设置管理员成功！"),
                            t.priv = 1,
                            "队员" == t.title && (t.title = "管理员");
                            var r = e.arrayCollection.getItemIndex(t);
                            e.arrayCollection.replaceItemAt(t, r),
                            e._list.selectedItem = t,
                            e.onClickItem()
                        } else 1 == a ? Alarm.show("最多只能有3个管理员！") : Alarm.show("系统错误！")
                    })
                } else BubblerManager.getInstance().showText("请选择转让成员")
            } else BubblerManager.getInstance().showText("您不是队长无法设置管理员！")
        },
        i.prototype.adminSetted = function(e) {
            var t = e.data,
            i = this._list.selectedIndex;
            this.arrayCollection.replaceItemAt(t, i),
            this._list.selectedItem = t;
            for (var n = 0,
            a = this.membersList; n < a.length; n++) {
                var r = a[n];
                r.userID == t.userID && (r = t)
            }
            EventManager.dispatchEventWith("team_member_inited")
        },
        i.prototype.onTransferLeader = function(e) {
            for (var t = e.data,
            i = 0,
            n = this.membersList; i < n.length; i++) {
                var a = n[i];
                a.userID == t.userID && (a = t),
                a.userID == MainManager.actorID && (a.priv = 2, a.title = "")
            }
            EventManager.dispatchEventWith("team_member_inited"),
            this.sortMember()
        },
        i.prototype.onSetTitle = function() {
            if (!this._list.selectedItem) return void BubblerManager.getInstance().showText("请选择操作对象！");
            var t = this._list.selectedItem;
            if (t) {
                if (0 != MainManager.actorInfo.teamInfo.priv && t.priv < 2) return void BubblerManager.getInstance().showText("权限不足无法操作！");
                var i = new e.TeamSetTitle;
                PopViewManager.getInstance().openView(i, null, t.userID)
            } else BubblerManager.getInstance().showText("请选择队员")
        },
        i.prototype.onMyContributeChanged = function(e) {
            for (var t = e.data,
            i = 0; i < this.arrayCollection.length; i++) {
                var n = this.arrayCollection.getItemAt(i);
                if (n.userID == MainManager.actorInfo.userID) {
                    n.contribute = n.contribute + t,
                    n.todayContri = n.todayContri + t,
                    this.arrayCollection.replaceItemAt(n, i);
                    break
                }
            }
        },
        i.prototype.onMemberTitleChanged = function(e) {
            var t = e.data,
            i = (t.uid, t.title),
            n = this._list.selectedItem;
            n.title = i;
            var a = this.arrayCollection.getItemIndex(n);
            this.arrayCollection.replaceItemAt(n, a),
            this.membersList[a] = n
        },
        i.prototype.onDelMember = function() {
            var e = this;
            if (MainManager.actorInfo.teamInfo.priv > 1) return void BubblerManager.getInstance().showText("只有战队指挥和管理员才能进行职位管理！");
            var t = this._list.selectedItem;
            if (t) if (t.userID != MainManager.actorInfo.userID) {
                if (0 != MainManager.actorInfo.teamInfo.priv && t.priv < 2) return void BubblerManager.getInstance().showText("权限不足无法操作！");
                Alert.show("你确定要将<font color='0xFF0000'>" + t.nick + "</font>移出战队吗？",
                function() {
                    SocketConnection.sendByQueue(CommandID.TEAM_DELETE_MEMBER, [t.userID],
                    function(i) {
                        var n = e.arrayCollection.getItemIndex(t);
                        e.membersList.splice(n, 1),
                        e.arrayCollection.removeItemAt(n),
                        TeamInfoManager.myTeamInfo.memberCount--,
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                        BubblerManager.getInstance().showText("删除成功")
                    },
                    function() {
                        BubblerManager.getInstance().showText("删除失败")
                    })
                })
            } else BubblerManager.getInstance().showText("不能对自己进行操作！");
            else BubblerManager.getInstance().showText("请选择要移除的成员")
        },
        i.prototype.onTransfer = function() {
            if (0 == MainManager.actorInfo.teamInfo.priv) {
                var t = this._list.selectedItem;
                if (t) if (t.userID != MainManager.actorInfo.userID) {
                    var i = new e.TeamTransferLeaderPwd;
                    PopViewManager.getInstance().openView(i)
                } else BubblerManager.getInstance().showText("不能转让给自己");
                else BubblerManager.getInstance().showText("请选择转让成员")
            } else BubblerManager.getInstance().showText("您不是队长无法转让！")
        },
        i.prototype.onManage = function() {
            var t = this._list.selectedItem;
            return t ? 0 != MainManager.actorInfo.teamInfo.priv ? void BubblerManager.getInstance().showText("只有战队指挥才能进行职位管理！") : void PopViewManager.getInstance().openView(new e.TeamMemberManagePop, null, t) : void Alarm.show("请先选择一名战队成员。")
        },
        i.prototype.onDissolve = function(e) {
            0 == MainManager.actorInfo.teamInfo.priv ? Alarm.show("战队指挥无法直接退出战队，请先将战队指挥移交给其他战队成员。") : Alert.show("退出战队后需要等待24小时后才能加入战队和创建战队。确定要退出战队吗？",
            function() {
                SocketConnection.sendByQueue(CommandID.TEAM_QUIT, [],
                function() {
                    Alarm.show("你已经退出战队" + TeamInfoManager.myTeamInfo.name),
                    MainManager.actorInfo.teamInfo.id = 0,
                    TeamInfoManager.myTeamInfo = null,
                    ModuleManager.hideModule("team")
                })
            })
        },
        i.prototype.getList = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t = this;
                return __generator(this,
                function(i) {
                    return SocketConnection.sendByQueue(CommandID.NEW_TEAM_GET_MEMBERS_INFO, [this.startID, this.PER_COUNT],
                    function(i) {
                        var n = i.data;
                        n.position = 0;
                        for (var a = n.readUnsignedInt(), r = n.readUnsignedInt(), o = [], s = 0; r > s; s++) {
                            var _ = new e.TeamMemberInfo;
                            _.initData(n, !0),
                            _.userID > 0 && (t.members[_.userID] = _, o.push(_.userID))
                        }
                        t.getSimpleUsersInfo(o).then(function() {
                            r != t.PER_COUNT || a == t.startID * t.PER_COUNT ? (t.sortMember(), EventManager.dispatchEventWith("team_member_inited")) : (t.startID++, t.getList())
                        })
                    },
                    function() {}),
                    [2]
                })
            })
        },
        i.prototype.sortMember = function() {
            var e = this,
            t = this.membersList.concat();
            if (this._orderType) switch (this._orderType) {
            case "totalCont":
                t.sort(function(t, i) {
                    return t.contribute == i.contribute ? i.userID - t.userID: (t.contribute - i.contribute) * e._order
                });
                break;
            case "dailyCont":
                t.sort(function(t, i) {
                    return t.todayContri == i.todayContri ? i.userID - t.userID: (t.todayContri - i.todayContri) * e._order
                });
                break;
            case "state":
                t.sort(function(t, i) {
                    return t.simpleUserInfo.logoutTime == i.simpleUserInfo.logoutTime ? i.userID - t.userID: 0 == t.simpleUserInfo.logoutTime ? e._order: 0 == i.simpleUserInfo.logoutTime ? -e._order: (t.simpleUserInfo.logoutTime - i.simpleUserInfo.logoutTime) * e._order
                })
            } else t.sort(function(e, t) {
                return e.priv == t.priv ? e.simpleUserInfo.logoutTime == t.simpleUserInfo.logoutTime ? t.userID - e.userID: 0 == e.simpleUserInfo.logoutTime ? -1 : 0 == t.simpleUserInfo.logoutTime ? 1 : t.simpleUserInfo.logoutTime - e.simpleUserInfo.logoutTime: e.priv - t.priv
            });
            this.arrayCollection.replaceAll(t.concat())
        },
        i.prototype.changeOrder = function(e) {
            this._orderType = e.target.name,
            this["arrow_down_" + this._orderType].visible ? (this._order = 1, this.hideAllArrow(), this["arrow_up_" + this._orderType].visible = !0) : (this._order = -1, this.hideAllArrow(), this["arrow_down_" + this._orderType].visible = !0),
            this.sortMember()
        },
        i.prototype.getSimpleUsersInfo = function(e) {
            var t = this;
            return new Promise(function(i, n) {
                if (e && e.length > 0) {
                    for (var a = e.length,
                    r = new egret.ByteArray,
                    o = 0; a > o; o++) r.writeUnsignedInt(e[o]);
                    SocketConnection.sendByQueue(CommandID.GET_USERS_SIMPLE_INFO, [a, r],
                    function(e) {
                        var n = e.data;
                        n.position = 0;
                        for (var a = n.readUnsignedInt(), r = 0; a > r; r++) {
                            var o = new SimpleUserInfo(n),
                            s = t.members[o.uid];
                            s.nick = o.nick,
                            s.simpleUserInfo = o,
                            t.membersList.push(s)
                        }
                        i()
                    },
                    function() {
                        n()
                    })
                }
            })
        },
        i.prototype.hideAllArrow = function() {
            this.arrow_down_dailyCont.visible = this.arrow_down_totalCont.visible = this.arrow_down_state.visible = this.arrow_up_dailyCont.visible = this.arrow_up_state.visible = this.arrow_up_totalCont.visible = !1
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(TeamInfoManager.TEAM_MEMBER_TITLE_CHANGED, this.onMemberTitleChanged, this),
            this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this),
            this.title_totalCont.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            this.title_dailyCont.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            this.title_state.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeOrder, this),
            EventManager.removeEventListener(TeamInfoManager.TEAM_CONTRIBUTE_CHANGED, this.onMyContributeChanged, this),
            EventManager.removeEventListener("team_member_set_admin", this.adminSetted, this),
            EventManager.removeEventListener("team_transfer_leader", this.onTransferLeader, this)
        },
        i
    } (eui.Component);
    e.TeamManageMembers = t,
    __reflect(t.prototype, "team.TeamManageMembers")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamManageMemberRenderSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.txt_name.text = e.nick,
            0 == e.priv ? this.txt_position.text = "指挥官": 1 == e.priv ? this.txt_position.text = "管理员": e.title ? this.txt_position.text = e.title: this.txt_position.text = "队员",
            this.txt_totalContribution.text = e.contribute + "",
            this.txt_dailyContribution.text = e.todayContri + "",
            e.simpleUserInfo && (0 == e.simpleUserInfo.logoutTime ? this.txt_online.textColor = 9894145 : this.txt_online.textColor = 5540556, this.txt_online.text = e.simpleUserInfo.getStatus())
        },
        t
    } (eui.ItemRenderer);
    e.TeamManageMembersRender = t,
    __reflect(t.prototype, "team.TeamManageMembersRender")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.deviceStatus = !1,
            t.deviceStatusChangeTime = 0,
            t.skinName = TeamManagePetDeviceSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateView(),
            this.getDeviceStatus(),
            SocketConnection.addCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this),
            ImageButtonUtil.add(this.btnLevelUp,
            function() {
                if (MainManager.actorInfo.teamInfo.priv > 1) return void Alarm.show("只有战队指挥和战队管理才能进行战队设施管理！");
                var e = TeamInfoManager.myTeamInfo.techCenterLevel;
                return TeamInfoManager.myTeamInfo.newTeamLevel < e + 1 ? void Alarm.show("升级条件不满足，无法升级！") : TeamInfoManager.myTeamInfo.score < 1e3 + 6e3 * e ? void Alarm.show("升级条件不满足，无法升级！") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [1],
                function() {
                    TeamInfoManager.myTeamInfo.score -= 1e3 + 6e3 * e,
                    TeamInfoManager.myTeamInfo.techCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    BubblerManager.getInstance().showText("精灵科技中心升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            this.ts_open.addEventListener(egret.Event.CHANGE, this.onTsChange, this)
        },
        t.prototype.onLevelChange = function() {
            var e = this;
            egret.setTimeout(function() {
                e.updateView()
            },
            this, 100)
        },
        t.prototype.updateView = function() {
            var e = TeamInfoManager.myTeamInfo.techCenterLevel;
            this.txt_level.text = e + "/5",
            this.txt_dailyNeed.text = 100 * (e + 1) + "",
            e >= 5 ? (this.grp_levelUp.visible = !1, this.flag_max.visible = !0) : (this.flag_max.visible = !1, this.grp_levelUp.visible = !0, this.txt_needLevel.text = "战队等级达到" + (e + 1) + "级", this.txt_needResource.text = "战队资源" + (1e3 + 6e3 * e), this.txt_need.text = 1e3 + 6e3 * e + "", this.txt_effect_0.text = "体力加成上限" + (20 + 2 * e), this.txt_effect_1.text = "双攻双防加成上限" + [11, 12, 13, 15][e - 1], this.txt_effect_2.text = "速度加成上限" + [2, 4, 6, 10][e - 1])
        },
        t.prototype.getDeviceStatus = function() {
            var e = this;
            SocketConnection.sendByQueue(CommandID.GET_TEAM_DEVICE_STATUS, [1, 1],
            function(t) {
                var i = t.data;
                i.position = 0;
                var n = i.readUnsignedInt();
                e.deviceStatus = !!i.readUnsignedInt(),
                e.deviceStatusChangeTime = n,
                e.txt_state.text = e.deviceStatus ? "已开启": "已关闭",
                e.ts_open.selected = e.deviceStatus
            })
        },
        t.prototype.onTsChange = function() {
            var e = this,
            t = this.ts_open.selected;
            if (SystemTimerManager.time < this.deviceStatusChangeTime) BubblerManager.getInstance().showText("每天只能进行1次操作哦"),
            this.ts_open.selected = !t;
            else {
                var i = TeamInfoManager.myTeamInfo.techCenterLevel,
                n = 100 * (i + 1);
                t && TeamInfoManager.myTeamInfo.score <= n ? (BubblerManager.getInstance().showText("战队资源不足，无法开启！"), this.ts_open.selected = !t) : (this.ts_open.touchEnabled = !1, SocketConnection.sendByQueue(CommandID.SET_TEAM_DEVICE_STATUS, [2, 1],
                function() {
                    t ? Alarm.show("开启成功，该设施将于明天开启！") : Alarm.show("关闭成功，该设施将于明天关闭！"),
                    e.getDeviceStatus()
                },
                function() {
                    e.ts_open.touchEnabled = !0
                }))
            }
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this)
        },
        t
    } (eui.Component);
    e.TeamManagePetDevice = t,
    __reflect(t.prototype, "team.TeamManagePetDevice")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamManageResDeviceSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.updateView(),
            SocketConnection.addCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this),
            ImageButtonUtil.add(this.btnLevelUp,
            function() {
                if (MainManager.actorInfo.teamInfo.priv > 1) return void Alarm.show("只有战队指挥和战队管理才能进行战队设施管理！");
                var e = TeamInfoManager.myTeamInfo.resCenterLevel;
                return TeamInfoManager.myTeamInfo.newTeamLevel < e + 1 ? void Alarm.show("升级条件不满足，无法升级！") : TeamInfoManager.myTeamInfo.score < 2e3 * e ? void Alarm.show("升级条件不满足，无法升级！") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [3],
                function() {
                    TeamInfoManager.myTeamInfo.score -= 2e3 * e,
                    TeamInfoManager.myTeamInfo.resCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    BubblerManager.getInstance().showText("战队资源中心升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this)
        },
        t.prototype.onLevelChange = function() {
            var e = this;
            egret.setTimeout(function() {
                e.updateView()
            },
            this, 100)
        },
        t.prototype.updateView = function() {
            var e = TeamInfoManager.myTeamInfo.resCenterLevel;
            this.txt_level.text = e + "/5",
            e >= 5 ? (this.grp_levelUp.visible = !1, this.flag_max.visible = !0) : (this.flag_max.visible = !1, this.grp_levelUp.visible = !0, this.txt_needLevel.text = "战队等级达到" + (e + 1) + "级", this.txt_needResource.text = "战队资源" + 2e3 * e, this.txt_need.text = 2e3 * e + "", this.txt_effect_0.text = "每次生产资源的产量提升至" + 3 * (e + 1), this.txt_effect_1.text = "战队资源持有上限提升至" + 8e3 * (e + 1))
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            SocketConnection.removeCmdListener(CommandID.NEW_TEAM_UPDATE, this.onLevelChange, this)
        },
        t
    } (eui.Component);
    e.TeamManageResDevice = t,
    __reflect(t.prototype, "team.TeamManageResDevice")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = TeamMemberManagePopSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            StatLogger.log("20210813版本系统功能", "战队", "打开战队成员职位管理面板"),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnTransfer, this.onTransfer, this),
            ImageButtonUtil.add(this.btnPromote, this.onSetAdmin, this),
            ImageButtonUtil.add(this.btnCustom, this.onSetTitle, this)
        },
        i.prototype.setData = function(e) {
            t.prototype.setData.call(this, e),
            this._info = e,
            this.updateView()
        },
        i.prototype.updateView = function() {
            var e = this;
            this.txtName.text = this._info.nick,
            this.txt_id.text = this._info.userID + "",
            this.txtLabel_2.text = 1 == this._info.priv ? "取消管理员": "提升为管理员",
            0 == this._info.priv ? this.txt_position.text = "指挥官": 1 == this._info.priv ? this.txt_position.text = "管理员": this._info.title ? this.txt_position.text = "" + this._info.title: this.txt_position.text = "队员",
            UserInfoManager.getInfo(this._info.userID,
            function(t) {
                e.avatar_icon.setData({
                    headId: t.head_id,
                    headFrameId: t.head_frame_id
                })
            },
            this)
        },
        i.prototype.onTransfer = function() {
            var e = this;
            if (this._info) return this._info.userID == MainManager.actorInfo.userID ? void BubblerManager.getInstance().showText("不能转让给自己") : void Alert.show("你确定要将战队指挥官转让给" + this._info.nick + "吗？",
            function() {
                var t = new egret.ByteArray;
                t.writeUnsignedInt(0),
                t.length = 32,
                SocketConnection.sendByQueue(CommandID.NEW_TEAM_LEADER, [e._info.userID, t],
                function() {
                    Alarm.show("转让会长成功！"),
                    MainManager.actorInfo.teamInfo.priv = 2,
                    e.transferOver()
                })
            })
        },
        i.prototype.transferOver = function() {
            this._info.priv = 0,
            EventManager.dispatchEventWith("team_transfer_leader", !1, this._info),
            this.hide()
        },
        i.prototype.onSetAdmin = function() {
            var e = this;
            if (this._info) {
                var t = this._info;
                if (t) {
                    if (t.userID == MainManager.actorInfo.userID) return void BubblerManager.getInstance().showText("不能对自己进行操作！");
                    if (t.priv < 2) return void SocketConnection.sendByQueue(CommandID.TEAM_CHANGE_ADMIN, [t.userID, 2],
                    function(i) {
                        Alarm.show("设置成功"),
                        t.priv = 2,
                        "管理员" == t.title && (t.title = "队员"),
                        EventManager.dispatchEventWith("team_member_set_admin", !1, t),
                        e.updateView()
                    });
                    SocketConnection.sendByQueue(CommandID.NEW_TEAM_SET_MANAGER, [t.userID],
                    function(i) {
                        var n = i.data,
                        a = n.readUnsignedInt();
                        0 == a ? (Alarm.show("设置管理员成功！"), t.priv = 1, "队员" == t.title && (t.title = "管理员"), EventManager.dispatchEventWith("team_member_set_admin", !1, t), e.updateView()) : 1 == a ? Alarm.show("最多只能有3个管理员！") : Alarm.show("系统错误！")
                    })
                }
            }
        },
        i.prototype.onSetTitle = function() {
            if (this._info) {
                if (0 != MainManager.actorInfo.teamInfo.priv && this._info.priv < 2) return void BubblerManager.getInstance().showText("权限不足无法操作！");
                var t = new e.TeamSetTitle;
                PopViewManager.getInstance().openView(t, null, {
                    userId: this._info.userID,
                    callBack: this.changeTitle,
                    thisObj: this
                })
            }
        },
        i.prototype.changeTitle = function(e) {
            this._info.title = e,
            0 == this._info.priv ? this.txt_position.text = "指挥官": 1 == this._info.priv ? this.txt_position.text = "管理员": this._info.title ? this.txt_position.text = "" + this._info.title: this.txt_position.text = "队员"
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.TeamMemberManagePop = t,
    __reflect(t.prototype, "team.TeamMemberManagePop")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamNoticeEditPopSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            this.btnEdit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this),
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
        },
        t.prototype.onEdit = function() {
            var e = this,
            t = this.txtDes.text.trim();
            if (t.length > 0) {
                var i = new egret.ByteArray;
                i.writeUTFBytes(t),
                i.length = 60,
                SocketConnection.sendByQueue(CommandID.TEAM_SET_NOTICE, [i],
                function() {
                    TeamInfoManager.myTeamInfo.notice = t,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    PopViewManager.getInstance().hideView(e)
                })
            } else BubblerManager.getInstance().showText("请输入战队公告！")
        },
        t.prototype.onClose = function() {
            PopViewManager.getInstance().hideView(this)
        },
        t.prototype.destroy = function() {
            this.btnEdit.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEdit, this),
            this.btnClose.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
        },
        t
    } (PopView);
    e.TeamNoticeEditPop = t,
    __reflect(t.prototype, "team.TeamNoticeEditPop")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamSetTitleSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnSetTitle,
            function() {
                var t = StringUtil.getBLen(e.txtTitle.text.trim());
                if (t > 0 && 10 >= t) {
                    var i = e.txtTitle.text.trim(),
                    n = e._data.userId,
                    a = new egret.ByteArray;
                    a.writeUTFBytes(i),
                    a.length = 18,
                    SocketConnection.sendByQueue(CommandID.NEW_TEAM_SET_TITLE, [n, a],
                    function() {
                        BubblerManager.getInstance().showText("设置成功"),
                        PopViewManager.getInstance().hideView(e);
                        var t = new egret.Event(TeamInfoManager.TEAM_MEMBER_TITLE_CHANGED, !1, !1, {
                            uid: n,
                            title: i
                        });
                        EventManager.dispatchEvent(t),
                        e._data.callBack && e._data.callBack.apply(e._data.thisObj, [i])
                    },
                    function() {
                        BubblerManager.getInstance().showText("设置失败")
                    })
                } else BubblerManager.getInstance().showText(t > 0 ? "职位名不得超过五个字": "请输入职位名！")
            },
            this)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamSetTitle = t,
    __reflect(t.prototype, "team.TeamSetTitle")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamDeviceUpgradeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            this.txtTitle.text = "战队科技升级",
            this.updateShow(),
            this.btnUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                var t = TeamInfoManager.myTeamInfo.techCenterLevel;
                return t >= 5 ? void BubblerManager.getInstance().showText("科技中心最高可升至5级!") : TeamInfoManager.myTeamInfo.newTeamLevel < t + 1 ? void Alarm.show("战队等级不够，无法升级设施。") : TeamInfoManager.myTeamInfo.score < 7e3 + 6e3 * (t - 1) ? void Alarm.show("战队资源不足，无法升级设施。") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [1],
                function() {
                    TeamInfoManager.myTeamInfo.score -= 7e3 + 6e3 * (t - 1),
                    TeamInfoManager.myTeamInfo.techCenterLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    PopViewManager.getInstance().hideView(e),
                    BubblerManager.getInstance().showText("战队科技升级成功！")
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        e.updateShow(),
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this)
        },
        t.prototype.updateShow = function() {
            var e = TeamInfoManager.myTeamInfo.techCenterLevel,
            t = TeamInfoManager.myTeamInfo.newTeamLevel;
            this.txtLevel.text = t + "",
            this.txtRes.text = TeamInfoManager.myTeamInfo.score + "",
            this.txtLevelNeed.text = "战队等级：",
            this.txtLevelNeedNum.text = "" + (e + 1),
            this.txtNeedRes.text = "" + (7e3 + 6e3 * (e - 1));
            var i = "1、精灵可强化的战队加成属性值提高精灵可强化的战队加成属性值提高；";
            i += "体力最高加成体力最高加成30、攻击最高加成攻击最高加成15、防御最高加成防御最高加成15、特攻最高加成特攻最高加成15、",
            i += "防御最高加成防御最高加成15、速度最高加成速度最高加成\n",
            i += "2、当精灵科技中心达到2级时才能进行速度加成\n3、科技中心最高可升至5级",
            this.txtNote.text = i
        },
        t
    } (PopView);
    e.TeamTechUpgrade = t,
    __reflect(t.prototype, "team.TeamTechUpgrade")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = TeamTranferLeaderSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnCancel,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnTransfer,
            function() {
                var t = e.txtPwd.text;
                if (t.length) {
                    t = MD5.hash(t);
                    var i = new egret.ByteArray;
                    i.writeUTFBytes(t),
                    i.length = 32,
                    SocketConnection.sendByQueue(CommandID.NEW_TEAM_LEADER, [e._data.userId, i],
                    function() {
                        Alarm.show("转让会长成功！"),
                        MainManager.actorInfo.teamInfo.priv = 2,
                        PopViewManager.getInstance().hideView(e),
                        e._data.callBack && e._data.callBack.apply(e._data.thisObj)
                    })
                } else Alarm.show("请输入你的密码！")
            },
            this)
        },
        t.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamTransferLeaderPwd = t,
    __reflect(t.prototype, "team.TeamTransferLeaderPwd")
} (team || (team = {}));
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
team; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.resArr = [{
                level: 2,
                needMapLevel: 2,
                teamRes: 8e3
            },
            {
                level: 3,
                needMapLevel: 3,
                teamRes: 16e3
            },
            {
                level: 4,
                needMapLevel: 4,
                teamRes: 24e3
            },
            {
                level: 5,
                needMapLevel: 5,
                teamRes: 32e3
            }],
            t.exchangeScore = [6e3, 12e3, 18e3, 24e3],
            t.skinName = TeamUpgradeSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            StatLogger.log("20210813版本系统功能", "战队", "打开战队升级面板"),
            this.updatePaper(),
            this.updateShow(),
            ImageButtonUtil.add(this.btnUpgrade,
            function() {
                if (2 == MainManager.actorInfo.teamInfo.priv) return void Alarm.show("只有总指挥和管理员才能进行战队升级！");
                var e = TeamInfoManager.myTeamInfo.newTeamLevel;
                return e >= 5 ? void Alarm.show("你的战队已经5级，目前无法继续升级了！") : 0 == BitUtil.getBit(TeamInfoManager.myTeamInfo.haveDrawingStatus, e - 1) ? void Alarm.show("升级条件不满足，无法升级！") : TeamInfoManager.myTeamInfo.score < t.resArr[e - 1].teamRes ? void Alarm.show("升级条件不满足，无法升级！") : void SocketConnection.sendByQueue(CommandID.NEW_TEAM_UPDATE, [0],
                function() {
                    Alarm.show("战队等级已升至" + (e + 1) + "级！"),
                    TeamInfoManager.myTeamInfo.score -= t.resArr[e - 1].teamRes,
                    TeamInfoManager.myTeamInfo.newTeamLevel += 1,
                    EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED),
                    PopViewManager.getInstance().hideView(t)
                },
                function() {
                    TeamInfoManager.getSimpleTeamInfo(TeamInfoManager.myTeamInfo.teamID,
                    function() {
                        t.updateShow(),
                        EventManager.dispatchEventWith(TeamInfoManager.MY_TEAM_INFO_CHANGED)
                    })
                })
            },
            this),
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnBuy1, this.onBuy, this),
            ImageButtonUtil.add(this.btnBuy2, this.onBuy, this),
            ImageButtonUtil.add(this.btnBuy3, this.onBuy, this),
            ImageButtonUtil.add(this.btnBuy4, this.onBuy, this)
        },
        t.prototype.updateShow = function() {
            var e = (TeamInfoManager.myTeamInfo.resCenterLevel, TeamInfoManager.myTeamInfo.newTeamLevel);
            if (this.txtLevel.text = e + "/5", this.txtRes.text = TeamInfoManager.myTeamInfo.score + "", DisplayUtil.setEnabled(this.btnUpgrade, 5 > e), 5 > e) {
                this.txt_maxLevel.text = "设施等级上限提升至" + (e + 1),
                this.flag_max.visible = !1,
                this.grp_upgrade.visible = !0,
                this.drawing_icon.source = "team_res_icon_drawing_" + (e + 1) + "_png",
                this.txt_drawing.text = e + 1 + "级建设图纸",
                BitUtil.getBit(TeamInfoManager.myTeamInfo.haveDrawingStatus, e - 1) ? this.flag_true.source = "team_upgrade_flag_true_png": this.flag_true.source = "team_upgrade_flag_false_png";
                var t = this.resArr[e - 1].teamRes;
                this.txtNeedRes.text = "战队资源" + t,
                TeamInfoManager.myTeamInfo.score < t ? this.flag_false.source = "team_upgrade_flag_false_png": this.flag_false.source = "team_upgrade_flag_true_png"
            } else this.flag_max.visible = !0,
            this.grp_upgrade.visible = !1
        },
        t.prototype.updatePaper = function() {
            for (var e = 0; 4 > e; e++) {
                this["txt" + e].text = this.exchangeScore[e] + "";
                var t = !!BitUtil.getBit(TeamInfoManager.myTeamInfo.haveDrawingStatus, e);
                this["exchenged_" + e].visible = t,
                this["btnBuy" + (e + 1)].visible = !t
            }
        },
        t.prototype.onBuy = function(e) {
            var t = e.target;
            switch (t) {
            case this.btnBuy1:
                this.sendBuyDrawing(0);
                break;
            case this.btnBuy2:
                this.sendBuyDrawing(1);
                break;
            case this.btnBuy3:
                this.sendBuyDrawing(2);
                break;
            case this.btnBuy4:
                this.sendBuyDrawing(3)
            }
        },
        t.prototype.sendBuyDrawing = function(e) {
            var t = this;
            return 2 == MainManager.actorInfo.teamInfo.priv ? void Alarm.show("只有战队指挥和管理员才能兑换战队建设图纸！") : TeamInfoManager.myTeamInfo.score < this.exchangeScore[e] ? void Alarm.show("战队资源不足！") : void SocketConnection.sendByQueue(CommandID.EXCHANGE_DRAWINGBUILD, [e + 1],
            function(i) {
                var n = TeamInfoManager.myTeamInfo.haveDrawingStatus;
                TeamInfoManager.myTeamInfo.haveDrawingStatus = BitUtil.setBit(n, e - 1),
                TeamInfoManager.myTeamInfo.score = TeamInfoManager.myTeamInfo.score - t.exchangeScore[e],
                TeamInfoManager.updateSelfTeamInfo(function() {
                    t.updateShow(),
                    t.updatePaper()
                },
                t),
                BubblerManager.getInstance().showText("图纸兑换成功！")
            },
            function() {
                TeamInfoManager.updateSelfTeamInfo(function() {
                    t.updateShow(),
                    t.updatePaper()
                },
                t)
            })
        },
        t.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        t
    } (PopView);
    e.TeamUpgrade = t,
    __reflect(t.prototype, "team.TeamUpgrade")
} (team || (team = {}));
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
generateEUI.paths["resource/eui_skins/items/TeamBossItemSkin.exml"] = window.TeamBossItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["highLight", "icon", "getMask", "hasGet"],
        this.currentState = "unlock",
        this.height = 123,
        this.width = 85,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("unlock", [new eui.SetProperty("highLight", "visible", !1)]), new eui.State("canGet", [new eui.SetProperty("highLight", "visible", !0), new eui.SetProperty("getMask", "visible", !1), new eui.SetProperty("hasGet", "visible", !1), new eui.SetProperty("_Group1", "touchEnabled", !0), new eui.SetProperty("_Group1", "touchChildren", !0)]), new eui.State("done", [new eui.SetProperty("highLight", "visible", !0), new eui.SetProperty("getMask", "visible", !0), new eui.SetProperty("hasGet", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.touchChildren = !1,
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.highLight_i(), this.icon_i(), this.getMask_i(), this.hasGet_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "teamboss_xian_png",
        e.visible = !0,
        e.x = 45,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "teamboss_baikuang_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.highLight_i = function() {
        var e = new eui.Image;
        return this.highLight = e,
        e.source = "teamboss_huangkuang_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 55,
        e.visible = !0,
        e.width = 55,
        e.x = 13,
        e.y = 13,
        e
    },
    i.getMask_i = function() {
        var e = new eui.Image;
        return this.getMask = e,
        e.source = "teamboss_mask_png",
        e.visible = !1,
        e.x = 6,
        e.y = 6,
        e
    },
    i.hasGet_i = function() {
        var e = new eui.Image;
        return this.hasGet = e,
        e.source = "teamboss_yikaiqi_png",
        e.visible = !1,
        e.x = 17,
        e.y = 21,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/boss/TeambossSkin.exml"] = window.TeambossSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnHelp", "btnClose", "bossBg", "_bar", "txt_bossLeaveTime", "grp_timeShow", "btnPet", "btnCure", "txt_curProgess", "txtIntro", "txt_leftTime", "btnInfo", "btnFight", "btnAdd", "reward1", "reward2", "reward3", "reward4"],
        this.height = 551,
        this.width = 1006,
        this.elementsContent = [this._Group1_i(), this.title_i(), this.btnHelp_i(), this.btnClose_i(), this._Group3_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["thumb"],
            this.elementsContent = [this._Image1_i(), this.thumb_i()],
            this.states = [new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "teamboss_xueliang_png",
            e.visible = !0,
            e.x = 1,
            e.y = 2,
            e
        },
        i.thumb_i = function() {
            var e = new eui.Image;
            return this.thumb = e,
            e.source = "teamboss_xuetiaodi_png",
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.visible = !0,
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "teamboss_title_png",
        e.visible = !0,
        e.x = 28,
        e.y = -2,
        e
    },
    n.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_help_icon_1_png",
        e.x = 180,
        e.y = 5,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 958,
        e.y = 3,
        e
    },
    n._Group3_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 36,
        e.elementsContent = [this.bossBg_i(), this._bar_i(), this.grp_timeShow_i(), this.btnPet_i(), this.btnCure_i(), this.txt_curProgess_i(), this.txtIntro_i(), this._Label1_i(), this.txt_leftTime_i(), this.btnInfo_i(), this.btnFight_i(), this.btnAdd_i(), this._Group2_i()],
        e
    },
    n.bossBg_i = function() {
        var e = new eui.Image;
        return this.bossBg = e,
        e.source = "teamboss_ditu_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n._bar_i = function() {
        var e = new eui.ProgressBar;
        return this._bar = e,
        e.visible = !0,
        e.x = 228,
        e.y = 407,
        e.skinName = i,
        e
    },
    n.grp_timeShow_i = function() {
        var e = new eui.Group;
        return this.grp_timeShow = e,
        e.x = 35,
        e.y = 20,
        e.elementsContent = [this._Image3_i(), this.txt_bossLeaveTime_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "teamboss_jlyylwlkhy_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_bossLeaveTime_i = function() {
        var e = new eui.Label;
        return this.txt_bossLeaveTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "13天15小时",
        e.textColor = 16514895,
        e.x = 6,
        e.y = 25,
        e
    },
    n.btnPet_i = function() {
        var e = new eui.Image;
        return this.btnPet = e,
        e.source = "teamboss_btnpet_png",
        e.x = 0,
        e.y = 141,
        e
    },
    n.btnCure_i = function() {
        var e = new eui.Image;
        return this.btnCure = e,
        e.source = "teamboss_btncure_png",
        e.x = 0,
        e.y = 221,
        e
    },
    n.txt_curProgess_i = function() {
        var e = new eui.Label;
        return this.txt_curProgess = e,
        e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "100/999",
        e.textAlign = "center",
        e.textColor = 16514895,
        e.width = 142,
        e.x = 57,
        e.y = 390,
        e
    },
    n.txtIntro_i = function() {
        var e = new eui.Label;
        return this.txtIntro = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每战胜1次「银月狼王」可降低其1点能量，能量进度全体战队成员共享。\n能量每降低50点，全体战队成员均可领取「战队宝箱」！",
        e.textColor = 8165328,
        e.width = 570,
        e.x = 41,
        e.y = 446,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日剩余",
        e.textColor = 8165328,
        e.x = 691,
        e.y = 447,
        e
    },
    n.txt_leftTime_i = function() {
        var e = new eui.Label;
        return this.txt_leftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "3次",
        e.textColor = 4187130,
        e.x = 733,
        e.y = 465,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "teamboss_btninfo_png",
        e.x = 871,
        e.y = 116,
        e
    },
    n.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "teamboss_btntz_png",
        e.x = 773,
        e.y = 435,
        e
    },
    n.btnAdd_i = function() {
        var e = new eui.Image;
        return this.btnAdd = e,
        e.source = "teamboss_btnzengjia_png",
        e.x = 773,
        e.y = 435,
        e
    },
    n._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 333,
        e.y = 306,
        e.elementsContent = [this.reward1_i(), this.reward2_i(), this.reward3_i(), this.reward4_i()],
        e
    },
    n.reward1_i = function() {
        var e = new team.TeamBossItem;
        return this.reward1 = e,
        e.skinName = "TeamBossItemSkin",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    n.reward2_i = function() {
        var e = new team.TeamBossItem;
        return this.reward2 = e,
        e.skinName = "TeamBossItemSkin",
        e.visible = !0,
        e.x = 185,
        e.y = 0,
        e
    },
    n.reward3_i = function() {
        var e = new team.TeamBossItem;
        return this.reward3 = e,
        e.skinName = "TeamBossItemSkin",
        e.visible = !0,
        e.x = 370,
        e.y = 0,
        e
    },
    n.reward4_i = function() {
        var e = new team.TeamBossItem;
        return this.reward4 = e,
        e.skinName = "TeamBossItemSkin",
        e.visible = !0,
        e.x = 555,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/TeamItemRenderSkin.exml"] = window.TeamItemRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name", "txtLabel", "grpBuy", "txtUnlock", "icon", "txtCount", "item"],
        this.height = 76,
        this.width = 650,
        this.elementsContent = [this._Image1_i(), this.txt_name_i(), this.txtLabel_i(), this.grpBuy_i(), this.txtUnlock_i(), this.item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_item_render_buybg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "战队黑科技",
        e.textColor = 16777215,
        e.x = 107,
        e.y = 12,
        e
    },
    i.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要战队资源*00，贡献值*00",
        e.textColor = 7461887,
        e.x = 106,
        e.y = 48,
        e
    },
    i.grpBuy_i = function() {
        var e = new eui.Image;
        return this.grpBuy = e,
        e.height = 41,
        e.source = "team_item_render_btnExchange_png",
        e.width = 121,
        e.x = 512,
        e.y = 16,
        e
    },
    i.txtUnlock_i = function() {
        var e = new eui.Label;
        return this.txtUnlock = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "2级解锁",
        e.textColor = 11389439,
        e.x = 533,
        e.y = 27,
        e
    },
    i.item_i = function() {
        var e = new eui.Group;
        return this.item = e,
        e.x = 29,
        e.y = 6,
        e.elementsContent = [this._Image2_i(), this.icon_i(), this.txtCount_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_icon_bg_style_66_66_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 7,
        e.y = 7,
        e
    },
    i.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "黑体",
        e.size = 20,
        e.text = "99",
        e.textColor = 16777215,
        e.visible = !1,
        e.x = 39,
        e.y = 40,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/TeamItemsSkin.exml"] = window.TeamItemsSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "grpBg", "txtLvl", "txt_bigLevel", "txtResCount", "helpBtn_png", "line", "imgItem", "txtItemCount", "res_item", "txtLeftTimes", "_list", "_scroller"],
        this.height = 551,
        this.width = 999,
        this.elementsContent = [this.grpBg_i(), this._Image3_i(), this._Image4_i(), this.txtLvl_i(), this._Image5_i(), this.txt_bigLevel_i(), this.txtResCount_i(), this._Label1_i(), this._Image6_i(), this.helpBtn_png_i(), this.line_i(), this.res_item_i(), this.txtLeftTimes_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["verticalScrollBar"],
            this.elementsContent = [this.verticalScrollBar_i()]
        }
        __extends(t, e);
        var i = function(e) {
            function t() {
                e.call(this),
                this.skinParts = ["thumb"],
                this.elementsContent = [this._Image1_i(), this.thumb_i()]
            }
            __extends(t, e);
            var i = t.prototype;
            return i._Image1_i = function() {
                var e = new eui.Image;
                return e.percentHeight = 100,
                e.source = "team_barbg_png",
                e.width = 3,
                e
            },
            i.thumb_i = function() {
                var e = new eui.Image;
                return this.thumb = e,
                e.height = 98,
                e.source = "team_thumb_png",
                e.width = 3,
                e
            },
            t
        } (eui.Skin),
        n = t.prototype;
        return n.verticalScrollBar_i = function() {
            var e = new eui.VScrollBar;
            return this.verticalScrollBar = e,
            e.percentHeight = 100,
            e.right = -3,
            e.width = 3,
            e.skinName = i,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.grpBg_i = function() {
        var e = new eui.Group;
        return this.grpBg = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "team_items_title_png",
        e.x = 30,
        e.y = 0,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 957,
        e.y = 5,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 364,
        e.scale9Grid = new egret.Rectangle(7, 7, 4, 1),
        e.source = "team_items_contentbg_png",
        e.width = 656,
        e.x = 304,
        e.y = 126,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 407,
        e.source = "team_btnTools_png",
        e.width = 224,
        e.x = 41,
        e.y = 83,
        e
    },
    n.txtLvl_i = function() {
        var e = new eui.Label;
        return this.txtLvl = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "Lv.3",
        e.textColor = 4175861,
        e.x = 214,
        e.y = 439,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "team_res_needtxtbg_png",
        e.width = 316,
        e.x = 641,
        e.y = 78,
        e
    },
    n.txt_bigLevel_i = function() {
        var e = new eui.Label;
        return this.txt_bigLevel = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.text = "Level.3",
        e.textColor = 4175861,
        e.x = 305,
        e.y = 85,
        e
    },
    n.txtResCount_i = function() {
        var e = new eui.Label;
        return this.txtResCount = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 386.5,
        e.size = 20,
        e.text = "99999/999999",
        e.textColor = 7461887,
        e.y = 88,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "战队资源：",
        e.textColor = 11389439,
        e.x = 723,
        e.y = 87,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_upgrade_res_icon_png",
        e.width = 27,
        e.x = 689,
        e.y = 85,
        e
    },
    n.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.source = "team_help_png",
        e.x = 188,
        e.y = 7,
        e
    },
    n.line_i = function() {
        var e = new eui.Image;
        return this.line = e,
        e.height = 1,
        e.source = "team_res_line_png",
        e.x = 301,
        e.y = 117,
        e
    },
    n.res_item_i = function() {
        var e = new eui.Group;
        return this.res_item = e,
        e.x = 741,
        e.y = 4,
        e.elementsContent = [this._Image7_i(), this.imgItem_i(), this.txtItemCount_i()],
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "team_items_countbg_png",
        e.x = 14,
        e.y = 9,
        e
    },
    n.imgItem_i = function() {
        var e = new eui.Image;
        return this.imgItem = e,
        e.height = 30,
        e.width = 30,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtItemCount_i = function() {
        var e = new eui.Label;
        return this.txtItemCount = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 10.5,
        e.size = 18,
        e.text = "000000/999999",
        e.textColor = 7461887,
        e.y = 9,
        e
    },
    n.txtLeftTimes_i = function() {
        var e = new eui.Label;
        return this.txtLeftTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今日可兑换次数：1/3",
        e.textColor = 4175861,
        e.x = 560,
        e.y = 135,
        e
    },
    n._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.height = 315,
        e.scrollPolicyV = "on",
        e.visible = !0,
        e.width = 650,
        e.x = 301,
        e.y = 163,
        e.skinName = i,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 0,
        e.y = 0,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    n._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/items/TeamManageApplyRenderSkin.exml"] = window.TeamManageApplyRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["apply_bg", "txtName", "btnAccept", "btnRefuse", "btnLook"],
        this.height = 54,
        this.width = 698,
        this.elementsContent = [this.apply_bg_i(), this.txtName_i(), this.btnAccept_i(), this.btnRefuse_i(), this.btnLook_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.apply_bg_i = function() {
        var e = new eui.Image;
        return this.apply_bg = e,
        e.height = 54,
        e.source = "team_manage_apply_bg_png",
        e.width = 698,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.size = 20,
        e.text = "裸出三级头",
        e.textColor = 3492213,
        e.x = 49,
        e.y = 15,
        e
    },
    i.btnAccept_i = function() {
        var e = new eui.Group;
        return this.btnAccept = e,
        e.x = 590,
        e.y = 5,
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 90,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "同意",
        e.textColor = 8341784,
        e.x = 25,
        e.y = 11,
        e
    },
    i.btnRefuse_i = function() {
        var e = new eui.Group;
        return this.btnRefuse = e,
        e.x = 492,
        e.y = 5,
        e.elementsContent = [this._Image2_i(), this._Label2_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "拒绝",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 10,
        e
    },
    i.btnLook_i = function() {
        var e = new eui.Group;
        return this.btnLook = e,
        e.x = 395,
        e.y = 5,
        e.elementsContent = [this._Image3_i(), this._Label3_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 93,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "查看",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/items/TeamManageMemberRenderSkin.exml"] = window.TeamManageMemberRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_online", "txt_totalContribution", "txt_dailyContribution", "txt_position", "txt_name"],
        this.height = 40,
        this.width = 645,
        this.elementsContent = [this._Image1_i(), this.txt_online_i(), this.txt_totalContribution_i(), this.txt_dailyContribution_i(), this.txt_position_i(), this.txt_name_i()],
        this._Image2_i(),
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_manage_memberbg_png",
        e.width = 645,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_online_i = function() {
        var e = new eui.Label;
        return this.txt_online = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 261.5,
        e.size = 18,
        e.text = "在线",
        e.textColor = 9828353,
        e.y = 12,
        e
    },
    i.txt_totalContribution_i = function() {
        var e = new eui.Label;
        return this.txt_totalContribution = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 4,
        e.size = 18,
        e.text = "999999999",
        e.textColor = 14217215,
        e.y = 12,
        e
    },
    i.txt_dailyContribution_i = function() {
        var e = new eui.Label;
        return this.txt_dailyContribution = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 133,
        e.size = 18,
        e.text = "999999999",
        e.textColor = 14217215,
        e.y = 12,
        e
    },
    i.txt_position_i = function() {
        var e = new eui.Label;
        return this.txt_position = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -120.5,
        e.size = 18,
        e.text = "职位字数五",
        e.textColor = 14217215,
        e.y = 12,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -249.5,
        e.size = 18,
        e.text = "裸出三级头",
        e.textColor = 14217215,
        e.y = 12,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return this._Image2 = e,
        e.height = 42,
        e.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        e.source = "team_manage_selected_png",
        e.width = 647,
        e.x = -1,
        e.y = -1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamDissolvePopSkin.exml"] = window.TeamDissolvePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txtDate", "btnCancel", "txtPwd", "btnSave", "txtPwd2", "btnDissolve", "txt3", "tip"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Group1_i(), this._Image4_i(), this.txtDate_i(), this.btnCancel_i(), this._Label2_i(), this._Image6_i(), this.txtPwd_i(), this.btnSave_i(), this._Label4_i(), this._Image8_i(), this.txtPwd2_i(), this.btnDissolve_i(), this.txt3_i(), this._Image10_i(), this.tip_i(), this._Label6_i()]
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
            e.fontFamily = "黑体",
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
            e.textColor = 13358045,
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
    a = t.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 333,
        e.source = "common_pop_point_png",
        e.width = 608,
        e.x = 0,
        e.y = 41,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_samll_png",
        e.width = 600,
        e.x = 4,
        e.y = 22,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 27,
        e.source = "team_dissolve_pop_title_png",
        e.width = 169,
        e.x = 37,
        e.y = 27,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 566,
        e.y = 0,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "team_dissolve_pop_datebg_png",
        e.width = 230,
        e.x = 211,
        e.y = 205,
        e
    },
    a.txtDate_i = function() {
        var e = new eui.Label;
        return this.txtDate = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "0000/00/00",
        e.textColor = 16777215,
        e.x = 260,
        e.y = 211,
        e
    },
    a.btnCancel_i = function() {
        var e = new eui.Group;
        return this.btnCancel = e,
        e.x = 449,
        e.y = 202,
        e.elementsContent = [this._Image5_i(), this._Label1_i()],
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "取消",
        e.textColor = 8341784,
        e.x = 40,
        e.y = 10,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "第一次输入日期：",
        e.textColor = 3492213,
        e.x = 36,
        e.y = 212,
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "team_set_title_inputbg_png",
        e.width = 230,
        e.x = 211,
        e.y = 147,
        e
    },
    a.txtPwd_i = function() {
        var e = new eui.TextInput;
        return this.txtPwd = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.displayAsPassword = !0,
        e.height = 19,
        e.inputType = "password",
        e.maxChars = 6,
        e.prompt = "",
        e.restrict = "0-9",
        e.width = 220,
        e.x = 218,
        e.y = 155,
        e.skinName = i,
        e
    },
    a.btnSave_i = function() {
        var e = new eui.Group;
        return this.btnSave = e,
        e.x = 448,
        e.y = 144,
        e.elementsContent = [this._Image7_i(), this._Label3_i()],
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 122,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "保存",
        e.textColor = 16777215,
        e.x = 41,
        e.y = 10,
        e
    },
    a._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "确认密码：",
        e.textColor = 3492213,
        e.x = 37,
        e.y = 152,
        e
    },
    a._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "team_set_title_inputbg_png",
        e.width = 230,
        e.x = 211,
        e.y = 300,
        e
    },
    a.txtPwd2_i = function() {
        var e = new eui.TextInput;
        return this.txtPwd2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.displayAsPassword = !0,
        e.height = 19,
        e.inputType = "password",
        e.maxChars = 20,
        e.prompt = "",
        e.width = 220,
        e.x = 218,
        e.y = 307,
        e.skinName = n,
        e
    },
    a.btnDissolve_i = function() {
        var e = new eui.Group;
        return this.btnDissolve = e,
        e.x = 448,
        e.y = 297,
        e.elementsContent = [this._Image9_i(), this._Label5_i()],
        e
    },
    a._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 122,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "确认解散",
        e.textColor = 16777215,
        e.x = 20,
        e.y = 10,
        e
    },
    a.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "再次确认：",
        e.textColor = 3492213,
        e.x = 37,
        e.y = 305,
        e
    },
    a._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "team_dissolve_pop_tipsbg_png",
        e.width = 582,
        e.x = 17,
        e.y = 256,
        e
    },
    a.tip_i = function() {
        var e = new eui.Label;
        return this.tip = e,
        e.size = 18,
        e.text = "请于2014/07/24后再次输入密码才可以解散战队",
        e.textColor = 4175861,
        e.x = 119,
        e.y = 262,
        e
    },
    a._Label6_i = function() {
        var e = new eui.Label;
        return e.size = 18,
        e.text = "战队解散之后不可再恢复，如果确认解散战队，\n\n请输入确认密码，7日之后再次输出密码才可解散。",
        e.textColor = 4175861,
        e.x = 111,
        e.y = 81,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamJoinConditionSkin.exml"] = window.TeamJoinConditionSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["contentbg", "btnSave", "txt7", "txt6", "txt5", "rb_0", "rb_1", "rb_2"],
        this.height = 309,
        this.width = 708,
        this.elementsContent = [this.contentbg_i(), this.btnSave_i(), this.txt7_i(), this.txt6_i(), this.txt5_i(), this.rb_0_i(), this.rb_1_i(), this.rb_2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_check_box_down_png"), new eui.SetProperty("_Image1", "y", -2)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_check_box_up_png",
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_check_box_down_png"), new eui.SetProperty("_Image1", "y", -2)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_check_box_up_png",
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_check_box_down_png"), new eui.SetProperty("_Image1", "y", -2)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_check_box_up_png",
            e
        },
        t
    } (eui.Skin),
    r = t.prototype;
    return r.contentbg_i = function() {
        var e = new eui.Image;
        return this.contentbg = e,
        e.height = 309,
        e.source = "team_manage_device_bg_png",
        e.width = 708,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnSave_i = function() {
        var e = new eui.Group;
        return this.btnSave = e,
        e.x = 294,
        e.y = 264,
        e.elementsContent = [this._Image1_i(), this._Label1_i()],
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "保存设置",
        e.textColor = 8341784,
        e.x = 21,
        e.y = 11,
        e
    },
    r.txt7_i = function() {
        var e = new eui.Label;
        return this.txt7 = e,
        e.size = 20,
        e.text = "任何人都不能加入",
        e.textColor = 3492213,
        e.x = 246,
        e.y = 179,
        e
    },
    r.txt6_i = function() {
        var e = new eui.Label;
        return this.txt6 = e,
        e.size = 20,
        e.text = "必须管理员以上同意才能加入",
        e.textColor = 3492213,
        e.x = 246,
        e.y = 127,
        e
    },
    r.txt5_i = function() {
        var e = new eui.Label;
        return this.txt5 = e,
        e.size = 20,
        e.text = "任何人都可以直接加入",
        e.textColor = 3492213,
        e.x = 246,
        e.y = 74,
        e
    },
    r.rb_0_i = function() {
        var e = new eui.RadioButton;
        return this.rb_0 = e,
        e.groupName = "join_flag",
        e.selected = !0,
        e.value = "0",
        e.x = 210,
        e.y = 70,
        e.skinName = i,
        e
    },
    r.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "join_flag",
        e.value = "1",
        e.x = 210,
        e.y = 123,
        e.skinName = n,
        e
    },
    r.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "join_flag",
        e.value = "2",
        e.x = 210,
        e.y = 175,
        e.skinName = a,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageApplySKin.exml"] = window.TeamManageApplySKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["contentbg", "_list", "_scroller"],
        this.height = 310,
        this.width = 708,
        this.elementsContent = [this.contentbg_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.contentbg_i = function() {
        var e = new eui.Image;
        return this.contentbg = e,
        e.height = 309,
        e.source = "team_manage_device_bg_png",
        e.width = 708,
        e.x = 0,
        e.y = 0,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.anchorOffsetY = 0,
        e.height = 300,
        e.width = 698,
        e.x = 5,
        e.y = 9,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 222,
        e.width = 698,
        e.elementsContent = [this._list_i()],
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 222,
        e.width = 698,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageDeviceSkin.exml"] = window.TeamManageDeviceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["contentbg", "txtCost2", "txtCost1", "txtTechLvl", "btnUp1", "txtOffOn1", "btnOn1", "tech", "txtCost4", "txtCost3", "txtItemLvl", "btnUp2", "txtOffOn2", "btnOn2", "Item"],
        this.height = 309,
        this.width = 708,
        this.elementsContent = [this.contentbg_i(), this.tech_i(), this.Item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.contentbg_i = function() {
        var e = new eui.Image;
        return this.contentbg = e,
        e.height = 309,
        e.source = "team_manage_device_bg_png",
        e.width = 708,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tech_i = function() {
        var e = new eui.Group;
        return this.tech = e,
        e.x = 69,
        e.y = 23,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.txtCost2_i(), this._Image2_i(), this.txtCost1_i(), this.txtTechLvl_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.btnUp1_i(), this.btnOn1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 272,
        e.source = "team_manage_itembg_png",
        e.width = 264,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "战队科技中心",
        e.textColor = 16777215,
        e.x = 60,
        e.y = 16,
        e
    },
    i.txtCost2_i = function() {
        var e = new eui.Label;
        return this.txtCost2 = e,
        e.size = 20,
        e.text = "400",
        e.textColor = 16773477,
        e.x = 175,
        e.y = 167,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 140,
        e.y = 164,
        e
    },
    i.txtCost1_i = function() {
        var e = new eui.Label;
        return this.txtCost1 = e,
        e.size = 20,
        e.text = "20/24小时",
        e.textColor = 16773477,
        e.x = 141,
        e.y = 125,
        e
    },
    i.txtTechLvl_i = function() {
        var e = new eui.Label;
        return this.txtTechLvl = e,
        e.size = 20,
        e.text = "Lv.5",
        e.textColor = 16773477,
        e.x = 166,
        e.y = 83,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "升级消耗：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 160,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "资源消耗：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 118,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 75,
        e
    },
    i.btnUp1_i = function() {
        var e = new eui.Group;
        return this.btnUp1 = e,
        e.x = 17,
        e.y = 213,
        e.elementsContent = [this._Image3_i(), this._Label5_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 110,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "升级",
        e.textColor = 8341784,
        e.x = 35,
        e.y = 11,
        e
    },
    i.btnOn1_i = function() {
        var e = new eui.Group;
        return this.btnOn1 = e,
        e.x = 136,
        e.y = 213,
        e.elementsContent = [this._Image4_i(), this.txtOffOn1_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 112,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtOffOn1_i = function() {
        var e = new eui.Label;
        return this.txtOffOn1 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "开启",
        e.textColor = 16777215,
        e.y = 10,
        e
    },
    i.Item_i = function() {
        var e = new eui.Group;
        return this.Item = e,
        e.x = 375,
        e.y = 23,
        e.elementsContent = [this._Image5_i(), this._Label6_i(), this.txtCost4_i(), this._Image6_i(), this.txtCost3_i(), this.txtItemLvl_i(), this._Label7_i(), this._Label8_i(), this._Label9_i(), this.btnUp2_i(), this.btnOn2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 272,
        e.source = "team_manage_itembg_png",
        e.width = 264,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "战队道具中心",
        e.textColor = 16777215,
        e.x = 60,
        e.y = 16,
        e
    },
    i.txtCost4_i = function() {
        var e = new eui.Label;
        return this.txtCost4 = e,
        e.size = 20,
        e.text = "400",
        e.textColor = 16773477,
        e.x = 175,
        e.y = 167,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 140,
        e.y = 164,
        e
    },
    i.txtCost3_i = function() {
        var e = new eui.Label;
        return this.txtCost3 = e,
        e.size = 20,
        e.text = "20/24小时",
        e.textColor = 16773477,
        e.x = 141,
        e.y = 125,
        e
    },
    i.txtItemLvl_i = function() {
        var e = new eui.Label;
        return this.txtItemLvl = e,
        e.size = 20,
        e.text = "Lv.5",
        e.textColor = 16773477,
        e.x = 166,
        e.y = 83,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "升级消耗：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 160,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "资源消耗：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 118,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 26,
        e.y = 75,
        e
    },
    i.btnUp2_i = function() {
        var e = new eui.Group;
        return this.btnUp2 = e,
        e.x = 17,
        e.y = 213,
        e.elementsContent = [this._Image7_i(), this._Label10_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 110,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "升级",
        e.textColor = 8341784,
        e.x = 35,
        e.y = 11,
        e
    },
    i.btnOn2_i = function() {
        var e = new eui.Group;
        return this.btnOn2 = e,
        e.x = 136,
        e.y = 213,
        e.elementsContent = [this._Image8_i(), this.txtOffOn2_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_btn_bg_style_blue_2_png",
        e.width = 112,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtOffOn2_i = function() {
        var e = new eui.Label;
        return this.txtOffOn2 = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "开启",
        e.textColor = 16777215,
        e.y = 10,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageDissolveSkin.exml"] = window.TeamManageDissolveSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtDate", "btnCancel", "txtPwd", "btnSave", "txtPwd2", "btnDissolve", "txt_tips", "dissolve", "btnConfirm", "warning"],
        this.height = 469,
        this.width = 668,
        this.elementsContent = [this.dissolve_i(), this.warning_i()]
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
            e.fontFamily = "黑体",
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
            e.textColor = 13358045,
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
    a = t.prototype;
    return a.dissolve_i = function() {
        var e = new eui.Group;
        return this.dissolve = e,
        e.visible = !0,
        e.x = 6,
        e.y = 38,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.txtDate_i(), this.btnCancel_i(), this._Label1_i(), this._Image4_i(), this.txtPwd_i(), this.btnSave_i(), this._Label2_i(), this._Image5_i(), this.txtPwd2_i(), this.btnDissolve_i(), this._Label3_i(), this._Label4_i(), this._Label5_i(), this.txt_tips_i(), this._Label6_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 184,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_dissolve_setbg_png",
        e.visible = !0,
        e.width = 656,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 184,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_dissolve_setbg_png",
        e.width = 656,
        e.x = 0,
        e.y = 194,
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_dissolve_pop_datebg_png",
        e.x = 277,
        e.y = 148,
        e
    },
    a.txtDate_i = function() {
        var e = new eui.Label;
        return this.txtDate = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "0000/00/00",
        e.textColor = 7461887,
        e.x = 306,
        e.y = 147,
        e
    },
    a.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.height = 34,
        e.source = "team_manage_dissolve_btnCancel_png",
        e.width = 87,
        e.x = 538,
        e.y = 264,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "设置时间：",
        e.textColor = 6258105,
        e.x = 188,
        e.y = 148,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_set_title_inputbg_png",
        e.x = 157,
        e.y = 99,
        e
    },
    a.txtPwd_i = function() {
        var e = new eui.TextInput;
        return this.txtPwd = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.displayAsPassword = !0,
        e.height = 19,
        e.inputType = "password",
        e.maxChars = 6,
        e.prompt = "输入6位数字密码",
        e.restrict = "0-9",
        e.width = 220,
        e.x = 222,
        e.y = 109,
        e.skinName = i,
        e
    },
    a.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.height = 34,
        e.source = "team_manage_dissolve_btnSave_png",
        e.width = 87,
        e.x = 538,
        e.y = 98,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "设置密码：",
        e.textColor = 6258105,
        e.x = 22,
        e.y = 103,
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "team_set_title_inputbg_png",
        e.x = 157,
        e.y = 264,
        e
    },
    a.txtPwd2_i = function() {
        var e = new eui.TextInput;
        return this.txtPwd2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.displayAsPassword = !0,
        e.height = 19,
        e.inputType = "password",
        e.maxChars = 20,
        e.prompt = "输入6位数字密码",
        e.width = 220,
        e.x = 222,
        e.y = 274,
        e.skinName = n,
        e
    },
    a.btnDissolve_i = function() {
        var e = new eui.Image;
        return this.btnDissolve = e,
        e.height = 34,
        e.source = "team_manage_dissolve_btnDissolve_png",
        e.width = 87,
        e.x = 288,
        e.y = 316,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 22,
        e.text = "再次确认：",
        e.textColor = 6258105,
        e.x = 23,
        e.y = 268,
        e
    },
    a._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "设置密码，设置完成后在7天之后再次输入此密码即可解散战队。",
        e.textColor = 7461887,
        e.x = 22,
        e.y = 46,
        e
    },
    a._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "第一步：",
        e.textColor = 7461887,
        e.x = 22,
        e.y = 21,
        e
    },
    a.txt_tips_i = function() {
        var e = new eui.Label;
        return this.txt_tips = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "请于0000/00/07后再次输入此密码，正式解散战队。",
        e.textColor = 7461887,
        e.x = 22,
        e.y = 233,
        e
    },
    a._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "第二步：",
        e.textColor = 7461887,
        e.x = 22,
        e.y = 208,
        e
    },
    a.warning_i = function() {
        var e = new eui.Group;
        return this.warning = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Label7_i(), this._Label8_i(), this._Image7_i(), this.btnConfirm_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 469,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_dissolve_zhezhao_png",
        e.width = 668,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.lineSpacing = 4,
        e.size = 20,
        e.text = "战队解散后无法恢复，战队的相关数据会被清理。\n请慎重考虑！",
        e.textAlign = "center",
        e.textColor = 15942981,
        e.x = 121,
        e.y = 269,
        e
    },
    a._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 30,
        e.text = "注意",
        e.textColor = 15942981,
        e.x = 302,
        e.y = 219,
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 106,
        e.source = "team_manage_dissolve_flag_warning_png",
        e.width = 122,
        e.x = 273,
        e.y = 107,
        e
    },
    a.btnConfirm_i = function() {
        var e = new eui.Image;
        return this.btnConfirm = e,
        e.source = "team_manage_dissolve_btnConfirm_png",
        e.x = 290,
        e.y = 339,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageItemDeviceSkin.exml"] = window.TeamManageItemDeviceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_need", "txt_needLevel", "txt_needResource", "txt_effect_0", "txt_effect_1", "btnLevelUp", "grp_levelUp", "flag_max", "txt_level", "txt_state", "txt_dailyNeed", "ts_open"],
        this.height = 442,
        this.width = 654,
        this.elementsContent = [this.grp_levelUp_i(), this.flag_max_i(), this._Image7_i(), this._Label4_i(), this._Label5_i(), this.txt_level_i(), this._Image8_i(), this._Label6_i(), this._Label7_i(), this._Image9_i(), this._Image10_i(), this.txt_state_i(), this._Label8_i(), this._Label9_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image3_i()],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image3", "x", -3)]), new eui.State("down", [new eui.AddItems("_Image2", "", 2, "_Image3"), new eui.SetProperty("_Image3", "x", 21)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 22,
            e.source = "team_manage_pet_device_off_png",
            e.width = 45,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 22,
            e.source = "team_manage_pet_device_on_png",
            e.width = 45,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.height = 28,
            e.source = "team_manage_pet_device_handle_png",
            e.width = 28,
            e.y = -3,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.grp_levelUp_i = function() {
        var e = new eui.Group;
        return this.grp_levelUp = e,
        e.x = 2,
        e.y = 47,
        e.elementsContent = [this._Image1_i(), this.txt_need_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this.txt_needLevel_i(), this._Image4_i(), this.txt_needResource_i(), this._Image5_i(), this._Label2_i(), this._Image6_i(), this.txt_effect_0_i(), this.txt_effect_1_i(), this._Label3_i(), this.btnLevelUp_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_res_device_needtxtbg_png",
        e.x = 0,
        e.y = 163,
        e
    },
    n.txt_need_i = function() {
        var e = new eui.Label;
        return this.txt_need = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 7461887,
        e.x = 458,
        e.y = 174,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 12046335,
        e.x = 372,
        e.y = 174,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 424,
        e.y = 170,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 19,
        e.y = 24,
        e
    },
    n.txt_needLevel_i = function() {
        var e = new eui.Label;
        return this.txt_needLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队等级达到2级",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 53,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_icon_level_png",
        e.x = 37,
        e.y = 32,
        e
    },
    n.txt_needResource_i = function() {
        var e = new eui.Label;
        return this.txt_needResource = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源7000",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 92,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 30,
        e.source = "team_manage_res_icon_png",
        e.width = 31,
        e.x = 49,
        e.y = 86,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级需要",
        e.textColor = 12046335,
        e.x = 19,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 357,
        e.y = 24,
        e
    },
    n.txt_effect_0_i = function() {
        var e = new eui.Label;
        return this.txt_effect_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可兑换奇效攻击能量珠",
        e.textColor = 7461887,
        e.x = 388,
        e.y = 46,
        e
    },
    n.txt_effect_1_i = function() {
        var e = new eui.Label;
        return this.txt_effect_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "可兑换奇效防御能量珠",
        e.textColor = 7461887,
        e.x = 388,
        e.y = 72,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级效果",
        e.textColor = 12046335,
        e.x = 356,
        e.y = 0,
        e
    },
    n.btnLevelUp_i = function() {
        var e = new eui.Image;
        return this.btnLevelUp = e,
        e.height = 46,
        e.source = "team_manage_res_device_btnLevelUp_png",
        e.width = 134,
        e.x = 518,
        e.y = 160,
        e
    },
    n.flag_max_i = function() {
        var e = new eui.Image;
        return this.flag_max = e,
        e.source = "team_manage_res_device_max_png",
        e.visible = !1,
        e.x = 160,
        e.y = 123,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升级",
        e.textColor = 16777215,
        e.x = 21,
        e.y = 2,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 2,
        e
    },
    n.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.right = 13,
        e.size = 20,
        e.text = "1/5",
        e.textColor = 7461887,
        e.y = 2,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 1,
        e.y = 272,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开启&关闭",
        e.textColor = 16777215,
        e.x = 23,
        e.y = 275,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "状态：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 275,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 314,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 343,
        e
    },
    n.txt_state_i = function() {
        var e = new eui.Label;
        return this.txt_state = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "已开启",
        e.textColor = 7461887,
        e.x = 581,
        e.y = 274,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "开启和关闭的操作都会在第二天生效",
        e.textColor = 12046335,
        e.x = 43,
        e.y = 314,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.lineSpacing = 2,
        e.size = 18,
        e.text = "开启状态下，每天都会消耗一定的战队资源：当资源不足时，\n设施自动关闭",
        e.textColor = 12046335,
        e.width = 486,
        e.x = 43,
        e.y = 343,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 2,
        e.y = 404,
        e.elementsContent = [this._Image11_i(), this.txt_dailyNeed_i(), this._Label10_i(), this._Image12_i(), this._Label11_i(), this._Image13_i(), this.ts_open_i()],
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_res_device_needtxtbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_dailyNeed_i = function() {
        var e = new eui.Label;
        return this.txt_dailyNeed = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 7461887,
        e.x = 192,
        e.y = 10,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日仅限操作一次！",
        e.textColor = 15942981,
        e.x = 411,
        e.y = 12,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_dissolve_flag_warning_png",
        e.width = 24,
        e.x = 385,
        e.y = 10,
        e
    },
    n._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日所需费用：",
        e.textColor = 12046335,
        e.x = 33,
        e.y = 10,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 158,
        e.y = 7,
        e
    },
    n.ts_open_i = function() {
        var e = new eui.ToggleSwitch;
        return this.ts_open = e,
        e.label = "ToggleButton",
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 591,
        e.y = 5,
        e.skinName = i,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageMembersSKin.exml"] = window.TeamManageMembersSKin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["arrow_down_state", "arrow_up_state", "title_state", "arrow_down_dailyCont", "arrow_up_dailyCont", "title_dailyCont", "arrow_down_totalCont", "arrow_up_totalCont", "title_totalCont", "_list", "_scroller", "btnManage", "btnDel", "btnQuit", "btnInfo"],
        this.height = 380,
        this.width = 655,
        this.elementsContent = [this._Image1_i(), this.title_state_i(), this.title_dailyCont_i(), this.title_totalCont_i(), this._Image5_i(), this._Image6_i(), this._scroller_i(), this.btnManage_i(), this.btnDel_i(), this.btnQuit_i(), this.btnInfo_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["verticalScrollBar"],
            this.elementsContent = [this.verticalScrollBar_i()]
        }
        __extends(t, e);
        var i = function(e) {
            function t() {
                e.call(this),
                this.skinParts = ["thumb"],
                this.elementsContent = [this._Image1_i(), this.thumb_i()]
            }
            __extends(t, e);
            var i = t.prototype;
            return i._Image1_i = function() {
                var e = new eui.Image;
                return e.percentHeight = 100,
                e.source = "team_barbg_png",
                e.width = 3,
                e
            },
            i.thumb_i = function() {
                var e = new eui.Image;
                return this.thumb = e,
                e.height = 98,
                e.source = "team_thumb_png",
                e.width = 3,
                e
            },
            t
        } (eui.Skin),
        n = t.prototype;
        return n.verticalScrollBar_i = function() {
            var e = new eui.VScrollBar;
            return this.verticalScrollBar = e,
            e.percentHeight = 100,
            e.right = -3,
            e.width = 3,
            e.skinName = i,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_manage_members_titlebg_png",
        e.width = 655,
        e.x = 0,
        e.y = 0,
        e
    },
    n.title_state_i = function() {
        var e = new eui.Group;
        return this.title_state = e,
        e.name = "state",
        e.touchChildren = !1,
        e.x = 533,
        e.y = 4,
        e.elementsContent = [this._Image2_i(), this.arrow_down_state_i(), this.arrow_up_state_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_members_label_state_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.arrow_down_state_i = function() {
        var e = new eui.Image;
        return this.arrow_down_state = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_down_png",
        e.width = 32,
        e.x = 82,
        e.y = 4,
        e
    },
    n.arrow_up_state_i = function() {
        var e = new eui.Image;
        return this.arrow_up_state = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_up_png",
        e.width = 32,
        e.x = 82,
        e.y = 5,
        e
    },
    n.title_dailyCont_i = function() {
        var e = new eui.Group;
        return this.title_dailyCont = e,
        e.name = "dailyCont",
        e.touchChildren = !1,
        e.x = 406,
        e.y = 4,
        e.elementsContent = [this._Image3_i(), this.arrow_down_dailyCont_i(), this.arrow_up_dailyCont_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_members_label_dailyContribution_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.arrow_down_dailyCont_i = function() {
        var e = new eui.Image;
        return this.arrow_down_dailyCont = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_down_png",
        e.width = 32,
        e.x = 82,
        e.y = 4,
        e
    },
    n.arrow_up_dailyCont_i = function() {
        var e = new eui.Image;
        return this.arrow_up_dailyCont = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_up_png",
        e.width = 32,
        e.x = 82,
        e.y = 5,
        e
    },
    n.title_totalCont_i = function() {
        var e = new eui.Group;
        return this.title_totalCont = e,
        e.name = "totalCont",
        e.touchChildren = !1,
        e.x = 277,
        e.y = 4,
        e.elementsContent = [this._Image4_i(), this.arrow_down_totalCont_i(), this.arrow_up_totalCont_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_members_label_totalContribution_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.arrow_down_totalCont_i = function() {
        var e = new eui.Image;
        return this.arrow_down_totalCont = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_down_png",
        e.visible = !0,
        e.width = 32,
        e.x = 82,
        e.y = 4,
        e
    },
    n.arrow_up_totalCont_i = function() {
        var e = new eui.Image;
        return this.arrow_up_totalCont = e,
        e.height = 28,
        e.source = "team_manage_members_arrow_up_png",
        e.visible = !1,
        e.width = 32,
        e.x = 82,
        e.y = 5,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_members_label_position_png",
        e.x = 178,
        e.y = 6,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_members_label_name_png",
        e.x = 51,
        e.y = 5,
        e
    },
    n._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.anchorOffsetY = 0,
        e.height = 282,
        e.scrollPolicyV = "on",
        e.width = 647,
        e.x = 4,
        e.y = 50,
        e.skinName = i,
        e.viewport = this._list_i(),
        e
    },
    n._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.useVirtualLayout = !0,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    n._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 8,
        e.paddingBottom = 1,
        e.paddingLeft = 1,
        e.paddingRight = 1,
        e.paddingTop = 1,
        e
    },
    n.btnManage_i = function() {
        var e = new eui.Image;
        return this.btnManage = e,
        e.source = "team_manage_btnGuanli_png",
        e.x = 5,
        e.y = 340,
        e
    },
    n.btnDel_i = function() {
        var e = new eui.Image;
        return this.btnDel = e,
        e.source = "team_manage_btnYichu_png",
        e.x = 167,
        e.y = 340,
        e
    },
    n.btnQuit_i = function() {
        var e = new eui.Image;
        return this.btnQuit = e,
        e.source = "team_manage_btnTuichu_png",
        e.x = 330,
        e.y = 340,
        e
    },
    n.btnInfo_i = function() {
        var e = new eui.Image;
        return this.btnInfo = e,
        e.source = "team_manage_btnInfo_png",
        e.x = 492,
        e.y = 340,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManagePetDeviceSkin.exml"] = window.TeamManagePetDeviceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_need", "txt_needLevel", "txt_needResource", "txt_effect_0", "txt_effect_1", "txt_effect_2", "btnLevelUp", "grp_levelUp", "flag_max", "txt_level", "txt_state", "txt_dailyNeed", "ts_open"],
        this.height = 442,
        this.width = 654,
        this.elementsContent = [this.grp_levelUp_i(), this.flag_max_i(), this._Image7_i(), this._Label4_i(), this._Label5_i(), this.txt_level_i(), this._Image8_i(), this._Label6_i(), this._Label7_i(), this._Image9_i(), this._Image10_i(), this.txt_state_i(), this._Label8_i(), this._Label9_i(), this._Group1_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image3_i()],
            this._Image1_i(),
            this._Image2_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Image1", "", 0, ""), new eui.SetProperty("_Image3", "x", -3)]), new eui.State("down", [new eui.AddItems("_Image2", "", 2, "_Image3"), new eui.SetProperty("_Image3", "x", 21)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 22,
            e.source = "team_manage_pet_device_off_png",
            e.width = 45,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.height = 22,
            e.source = "team_manage_pet_device_on_png",
            e.width = 45,
            e.x = 0,
            e.y = 0,
            e
        },
        i._Image3_i = function() {
            var e = new eui.Image;
            return this._Image3 = e,
            e.height = 28,
            e.source = "team_manage_pet_device_handle_png",
            e.width = 28,
            e.y = -3,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n.grp_levelUp_i = function() {
        var e = new eui.Group;
        return this.grp_levelUp = e,
        e.x = 2,
        e.y = 47,
        e.elementsContent = [this._Image1_i(), this.txt_need_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this.txt_needLevel_i(), this._Image4_i(), this.txt_needResource_i(), this._Image5_i(), this._Label2_i(), this._Image6_i(), this.txt_effect_0_i(), this.txt_effect_1_i(), this.txt_effect_2_i(), this._Label3_i(), this.btnLevelUp_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_res_device_needtxtbg_png",
        e.x = 0,
        e.y = 163,
        e
    },
    n.txt_need_i = function() {
        var e = new eui.Label;
        return this.txt_need = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 7461887,
        e.x = 458,
        e.y = 174,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 12046335,
        e.x = 372,
        e.y = 174,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 424,
        e.y = 170,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 19,
        e.y = 24,
        e
    },
    n.txt_needLevel_i = function() {
        var e = new eui.Label;
        return this.txt_needLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队等级达到2级",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 53,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_icon_level_png",
        e.x = 37,
        e.y = 32,
        e
    },
    n.txt_needResource_i = function() {
        var e = new eui.Label;
        return this.txt_needResource = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源7000",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 92,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 30,
        e.source = "team_manage_res_icon_png",
        e.width = 31,
        e.x = 49,
        e.y = 86,
        e
    },
    n._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级需要",
        e.textColor = 12046335,
        e.x = 19,
        e.y = 0,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 357,
        e.y = 24,
        e
    },
    n.txt_effect_0_i = function() {
        var e = new eui.Label;
        return this.txt_effect_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "体力加成上限22",
        e.textColor = 7461887,
        e.x = 388,
        e.y = 46,
        e
    },
    n.txt_effect_1_i = function() {
        var e = new eui.Label;
        return this.txt_effect_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "双攻双防加成上限11",
        e.textColor = 7461887,
        e.x = 388,
        e.y = 72,
        e
    },
    n.txt_effect_2_i = function() {
        var e = new eui.Label;
        return this.txt_effect_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "速度加成上限2",
        e.textColor = 7461887,
        e.x = 387,
        e.y = 99,
        e
    },
    n._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级效果",
        e.textColor = 12046335,
        e.x = 356,
        e.y = 0,
        e
    },
    n.btnLevelUp_i = function() {
        var e = new eui.Image;
        return this.btnLevelUp = e,
        e.height = 46,
        e.source = "team_manage_res_device_btnLevelUp_png",
        e.width = 134,
        e.x = 518,
        e.y = 160,
        e
    },
    n.flag_max_i = function() {
        var e = new eui.Image;
        return this.flag_max = e,
        e.source = "team_manage_res_device_max_png",
        e.visible = !1,
        e.x = 160,
        e.y = 123,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升级",
        e.textColor = 16777215,
        e.x = 21,
        e.y = 2,
        e
    },
    n._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 2,
        e
    },
    n.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.right = 13,
        e.size = 20,
        e.text = "1/5",
        e.textColor = 7461887,
        e.y = 2,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 1,
        e.y = 272,
        e
    },
    n._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开启&关闭",
        e.textColor = 16777215,
        e.x = 23,
        e.y = 275,
        e
    },
    n._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "状态：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 275,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 314,
        e
    },
    n._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 343,
        e
    },
    n.txt_state_i = function() {
        var e = new eui.Label;
        return this.txt_state = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "已开启",
        e.textColor = 7461887,
        e.x = 581,
        e.y = 274,
        e
    },
    n._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "开启和关闭的操作都会在第二天生效",
        e.textColor = 12046335,
        e.x = 43,
        e.y = 314,
        e
    },
    n._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.lineSpacing = 2,
        e.size = 18,
        e.text = "开启状态下，每天都会消耗一定的战队资源：当资源不足时，\n设施自动关闭",
        e.textColor = 12046335,
        e.width = 486,
        e.x = 43,
        e.y = 343,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 2,
        e.y = 404,
        e.elementsContent = [this._Image11_i(), this.txt_dailyNeed_i(), this._Label10_i(), this._Image12_i(), this._Label11_i(), this._Image13_i(), this.ts_open_i()],
        e
    },
    n._Image11_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_res_device_needtxtbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.txt_dailyNeed_i = function() {
        var e = new eui.Label;
        return this.txt_dailyNeed = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 7461887,
        e.x = 192,
        e.y = 10,
        e
    },
    n._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日仅限操作一次！",
        e.textColor = 15942981,
        e.x = 411,
        e.y = 12,
        e
    },
    n._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_dissolve_flag_warning_png",
        e.width = 24,
        e.x = 385,
        e.y = 10,
        e
    },
    n._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每日所需费用：",
        e.textColor = 12046335,
        e.x = 33,
        e.y = 10,
        e
    },
    n._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 158,
        e.y = 7,
        e
    },
    n.ts_open_i = function() {
        var e = new eui.ToggleSwitch;
        return this.ts_open = e,
        e.label = "ToggleButton",
        e.scaleX = 1,
        e.scaleY = 1,
        e.visible = !0,
        e.x = 591,
        e.y = 5,
        e.skinName = i,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageResDeviceSkin.exml"] = window.TeamManageResDeviceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_need", "txt_needLevel", "txt_needResource", "txt_effect_0", "txt_effect_1", "btnLevelUp", "grp_levelUp", "flag_max", "txt_level"],
        this.height = 363,
        this.width = 654,
        this.elementsContent = [this.grp_levelUp_i(), this.flag_max_i(), this._Image7_i(), this._Label4_i(), this._Label5_i(), this.txt_level_i(), this._Image8_i(), this._Label6_i(), this._Label7_i(), this._Image9_i(), this._Image10_i(), this._Label8_i(), this._Label9_i(), this._Label10_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_levelUp_i = function() {
        var e = new eui.Group;
        return this.grp_levelUp = e,
        e.visible = !0,
        e.x = 2,
        e.y = 47,
        e.elementsContent = [this._Image1_i(), this.txt_need_i(), this._Label1_i(), this._Image2_i(), this._Image3_i(), this.txt_needLevel_i(), this._Image4_i(), this.txt_needResource_i(), this._Image5_i(), this._Label2_i(), this._Image6_i(), this.txt_effect_0_i(), this.txt_effect_1_i(), this._Label3_i(), this.btnLevelUp_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_res_device_needtxtbg_png",
        e.x = 0,
        e.y = 163,
        e
    },
    i.txt_need_i = function() {
        var e = new eui.Label;
        return this.txt_need = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "99999",
        e.textColor = 12046335,
        e.x = 458,
        e.y = 174,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要：",
        e.textColor = 12046335,
        e.x = 372,
        e.y = 174,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_manage_res_icon_png",
        e.width = 27,
        e.x = 424,
        e.y = 170,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 19,
        e.y = 24,
        e
    },
    i.txt_needLevel_i = function() {
        var e = new eui.Label;
        return this.txt_needLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队等级达到2级",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 53,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_icon_level_png",
        e.x = 37,
        e.y = 32,
        e
    },
    i.txt_needResource_i = function() {
        var e = new eui.Label;
        return this.txt_needResource = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源7000",
        e.textColor = 7461887,
        e.x = 94,
        e.y = 92,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 30,
        e.source = "team_manage_res_icon_png",
        e.width = 31,
        e.x = 49,
        e.y = 86,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级需要",
        e.textColor = 12046335,
        e.x = 19,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 118,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_manage_res_device_needbg1_png",
        e.width = 276,
        e.x = 357,
        e.y = 24,
        e
    },
    i.txt_effect_0_i = function() {
        var e = new eui.Label;
        return this.txt_effect_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每次生产资源的产量提升至6",
        e.textColor = 7461887,
        e.x = 374,
        e.y = 46,
        e
    },
    i.txt_effect_1_i = function() {
        var e = new eui.Label;
        return this.txt_effect_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源持有上限提升至16000",
        e.textColor = 7461887,
        e.x = 375,
        e.y = 72,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升至下一级效果",
        e.textColor = 12046335,
        e.x = 356,
        e.y = 0,
        e
    },
    i.btnLevelUp_i = function() {
        var e = new eui.Image;
        return this.btnLevelUp = e,
        e.height = 46,
        e.source = "team_manage_res_device_btnLevelUp_png",
        e.width = 134,
        e.x = 518,
        e.y = 160,
        e
    },
    i.flag_max_i = function() {
        var e = new eui.Image;
        return this.flag_max = e,
        e.source = "team_manage_res_device_max_png",
        e.visible = !1,
        e.x = 160,
        e.y = 123,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "升级",
        e.textColor = 16777215,
        e.x = 21,
        e.y = 3,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 2,
        e
    },
    i.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.right = 13,
        e.size = 20,
        e.text = "1/5",
        e.textColor = 7461887,
        e.y = 2,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.scale9Grid = new egret.Rectangle(17, 4, 7, 4),
        e.source = "team_manage_res_device_title_png",
        e.width = 649,
        e.x = 1,
        e.y = 272,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "开启&关闭",
        e.textColor = 16777215,
        e.x = 23,
        e.y = 275,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "状态：",
        e.textColor = 16777215,
        e.x = 520,
        e.y = 275,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 314,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_res_device_dot_png",
        e.width = 20,
        e.x = 20,
        e.y = 343,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "已开启",
        e.textColor = 7461887,
        e.x = 581,
        e.y = 274,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源中心会一直处于开启状态，无法被关闭",
        e.textColor = 12046335,
        e.x = 44,
        e.y = 314,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源中心开启时不会消耗任何战队资源",
        e.textColor = 12046335,
        e.x = 44,
        e.y = 343,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamManageSkin.exml"] = window.TeamManageSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "rb_type1", "rb_type2", "rb_type3", "rb_type4", "res", "pet", "item", "dissolve", "txtCount"],
        this.height = 550,
        this.width = 999,
        this.elementsContent = [this._Group1_i(), this.rb_type1_i(), this.rb_type2_i(), this.rb_type3_i(), this.rb_type4_i(), this.res_i(), this.pet_i(), this.item_i(), this.dissolve_i(), this._Group2_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7971289)]), new eui.State("down", [new eui.AddItems("_Image1", "", 1, ""), new eui.SetProperty("_Label1", "textColor", 15857151)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.height = 63,
            e.width = 272,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "战队资源中心",
            e.verticalCenter = 0,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_managet_type_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7971289)]), new eui.State("down", [new eui.AddItems("_Image1", "", 1, ""), new eui.SetProperty("_Label1", "textColor", 15857151)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.height = 63,
            e.width = 272,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "精灵科技中心",
            e.verticalCenter = 0,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_managet_type_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7971289)]), new eui.State("down", [new eui.AddItems("_Image1", "", 1, ""), new eui.SetProperty("_Label1", "textColor", 15857151)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.height = 63,
            e.width = 272,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "道具科技中心",
            e.verticalCenter = 0,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_managet_type_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 7971289)]), new eui.State("down", [new eui.AddItems("_Image1", "", 1, ""), new eui.SetProperty("_Label1", "textColor", 15857151)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.height = 63,
            e.width = 272,
            e
        },
        i._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "MFShangHei",
            e.horizontalCenter = 0,
            e.size = 20,
            e.text = "解散战队",
            e.verticalCenter = 0,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.source = "team_managet_type_down_png",
            e.x = 0,
            e.y = 0,
            e
        },
        t
    } (eui.Skin),
    o = t.prototype;
    return o._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i()],
        e
    },
    o._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    o._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.visible = !0,
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    o._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_leftbg_png",
        e.x = 0,
        e.y = 36,
        e
    },
    o._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_title1_png",
        e.x = 30,
        e.y = 0,
        e
    },
    o.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 957,
        e.y = 4,
        e
    },
    o.rb_type1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_type1 = e,
        e.value = "res",
        e.x = 0,
        e.y = 48,
        e.skinName = i,
        e
    },
    o.rb_type2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_type2 = e,
        e.value = "pet",
        e.y = 112,
        e.skinName = n,
        e
    },
    o.rb_type3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_type3 = e,
        e.value = "item",
        e.y = 176,
        e.skinName = a,
        e
    },
    o.rb_type4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_type4 = e,
        e.value = "dissolve",
        e.y = 240,
        e.skinName = r,
        e
    },
    o.res_i = function() {
        var e = new team.TeamManageResDevice;
        return this.res = e,
        e.skinName = "TeamManageResDeviceSkin",
        e.visible = !0,
        e.x = 307,
        e.y = 51,
        e
    },
    o.pet_i = function() {
        var e = new team.TeamManagePetDevice;
        return this.pet = e,
        e.skinName = "TeamManagePetDeviceSkin",
        e.visible = !1,
        e.x = 307,
        e.y = 51,
        e
    },
    o.item_i = function() {
        var e = new team.TeamManageItemDevice;
        return this.item = e,
        e.skinName = "TeamManageItemDeviceSkin",
        e.visible = !1,
        e.x = 307,
        e.y = 51,
        e
    },
    o.dissolve_i = function() {
        var e = new team.TeamManageDissolve;
        return this.dissolve = e,
        e.skinName = "TeamManageDissolveSkin",
        e.visible = !1,
        e.x = 296,
        e.y = 51,
        e
    },
    o._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 742,
        e.y = 5,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.txtCount_i()],
        e
    },
    o._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "team_manage_countbg_png",
        e.x = 13,
        e.y = 6,
        e
    },
    o._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "team_manage_res_icon_png",
        e.width = 31,
        e.x = 0,
        e.y = 0,
        e
    },
    o.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 14,
        e.size = 18,
        e.text = "000000/999999",
        e.textColor = 16777215,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamMemberManagePopSkin.exml"] = window.TeamMemberManagePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txt_position", "avatar_icon", "head", "txt_id", "txtName", "txtLabel", "btnCustom", "txtLabel_2", "btnPromote", "txtLabel_3", "btnTransfer"],
        this.height = 289,
        this.width = 481,
        this.elementsContent = [this._Group1_i(), this._Image4_i(), this.txt_position_i(), this._Label1_i(), this._Group2_i(), this.txt_id_i(), this._Label2_i(), this._Label3_i(), this.txtName_i(), this.btnCustom_i(), this.btnPromote_i(), this.btnTransfer_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 289,
        e.scale9Grid = new egret.Rectangle(5, 3, 12, 11),
        e.source = "common_s9_pop_bg4_png",
        e.width = 481,
        e.x = 0,
        e.y = 4,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_m_png",
        e.x = 0,
        e.y = 4,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_member_manage_pop_title_png",
        e.x = 31,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 439,
        e.y = 4,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_member_manage_pop_infobg_png",
        e.x = 7,
        e.y = 66,
        e
    },
    i.txt_position_i = function() {
        var e = new eui.Label;
        return this.txt_position = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 171.5,
        e.size = 20,
        e.text = "队员队员队",
        e.textColor = 7461887,
        e.y = 172,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "当前职位：",
        e.textColor = 13754879,
        e.x = 267.78,
        e.y = 172,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 100,
        e.width = 100,
        e.x = 23,
        e.y = 82,
        e.elementsContent = [this._Image5_i(), this.avatar_icon_i(), this.head_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "common_avatar_bg_size_100_100_png",
        e.visible = !0,
        e.width = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.avatar_icon_i = function() {
        var e = new core.component.AvatarIcon;
        return this.avatar_icon = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 98,
        e.visible = !1,
        e.width = 98,
        e.x = 1,
        e.y = 1,
        e
    },
    i.txt_id_i = function() {
        var e = new eui.Label;
        return this.txt_id = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "123456789012",
        e.textColor = 7461887,
        e.x = 314,
        e.y = 113,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "账号",
        e.textColor = 13754879,
        e.x = 303,
        e.y = 82,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "昵称",
        e.textColor = 13754879,
        e.x = 133,
        e.y = 82,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "顽皮的赛尔",
        e.textColor = 7461887,
        e.x = 143,
        e.y = 113,
        e
    },
    i.btnCustom_i = function() {
        var e = new eui.Group;
        return this.btnCustom = e,
        e.cacheAsBitmap = !0,
        e.x = 318,
        e.y = 217,
        e.elementsContent = [this._Image6_i(), this.txtLabel_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "team_btnBg_yellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 22,
        e.text = "自定义职位",
        e.textColor = 10181146,
        e.y = 12,
        e
    },
    i.btnPromote_i = function() {
        var e = new eui.Group;
        return this.btnPromote = e,
        e.cacheAsBitmap = !0,
        e.x = 163,
        e.y = 217,
        e.elementsContent = [this._Image7_i(), this.txtLabel_2_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "team_btnBg_yellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_2_i = function() {
        var e = new eui.Label;
        return this.txtLabel_2 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 22,
        e.text = "提升为管理员",
        e.textColor = 10181146,
        e.y = 12,
        e
    },
    i.btnTransfer_i = function() {
        var e = new eui.Group;
        return this.btnTransfer = e,
        e.cacheAsBitmap = !0,
        e.x = 7,
        e.y = 217,
        e.elementsContent = [this._Image8_i(), this.txtLabel_3_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "team_btnBg_yellow_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_3_i = function() {
        var e = new eui.Label;
        return this.txtLabel_3 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 22,
        e.text = "转让指挥官",
        e.textColor = 10181146,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamNoticeEditPopSkin.exml"] = window.TeamNoticeEditPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "txtLabel", "btnEdit", "txtDes"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Group1_i(), this.btnEdit_i(), this._Image4_i(), this.txtDes_i()]
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
            e.fontFamily = "黑体",
            e.height = 163,
            e.left = "5",
            e.right = "5",
            e.size = 18,
            e.textColor = 16777215,
            e.percentWidth = 100,
            e
        },
        i.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "黑体",
            e.height = 163,
            e.left = 5,
            e.right = 5,
            e.size = 18,
            e.textColor = 15463162,
            e.touchEnabled = !1,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 333,
        e.source = "common_pop_point_png",
        e.width = 608,
        e.x = 0,
        e.y = 41,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_samll_png",
        e.width = 600,
        e.x = 4,
        e.y = 22,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 26,
        e.source = "team_notice_edit_pop_title_png",
        e.width = 113,
        e.x = 37,
        e.y = 28,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 566,
        e.y = 0,
        e
    },
    n.btnEdit_i = function() {
        var e = new eui.Group;
        return this.btnEdit = e,
        e.x = 244,
        e.y = 304,
        e.elementsContent = [this._Image3_i(), this.txtLabel_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "common_btn_bg_style_orange_2_png",
        e.width = 120,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "确认",
        e.textColor = 8341784,
        e.x = 40,
        e.y = 10,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 178,
        e.source = "team_set_title_inputbg_png",
        e.width = 524,
        e.x = 42,
        e.y = 100,
        e
    },
    n.txtDes_i = function() {
        var e = new eui.TextInput;
        return this.txtDes = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 163,
        e.maxChars = 20,
        e.prompt = "请输入战队公告",
        e.width = 500,
        e.x = 51,
        e.y = 108,
        e.skinName = i,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamSetTitleSkin.exml"] = window.TeamSetTitleSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnSetTitle", "txtTitle", "btnClose"],
        this.height = 291,
        this.width = 486,
        this.elementsContent = [this._Image1_i(), this.btnSetTitle_i(), this.txtTitle_i(), this.btnClose_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_set_title_panel_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnSetTitle_i = function() {
        var e = new eui.Image;
        return this.btnSetTitle = e,
        e.source = "team_set_title_btnFix_png",
        e.visible = !0,
        e.x = 176,
        e.y = 217,
        e
    },
    i.txtTitle_i = function() {
        var e = new eui.EditableText;
        return this.txtTitle = e,
        e.height = 20,
        e.horizontalCenter = "0",
        e.prompt = "请输入职位名",
        e.promptColor = 8631026,
        e.size = 20,
        e.textAlign = "center",
        e.textColor = 8631026,
        e.verticalAlign = "middle",
        e.width = 300,
        e.y = 114,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 439,
        e.y = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/manage/TeamTranferLeaderSkin.exml"] = window.TeamTranferLeaderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnCancel", "btnTransfer", "txtTitle", "txtPwd"],
        this.height = 291,
        this.width = 486,
        this.elementsContent = [this._Image1_i(), this.btnCancel_i(), this.btnTransfer_i(), this._Label1_i(), this.txtTitle_i(), this.txtPwd_i()]
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
            e.textColor = 8029850,
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
            e.textColor = 15463162,
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
        return e.source = "team_transfer_leader_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.source = "common_pop_btn_close_png",
        e.x = 437.566,
        e.y = 5.208,
        e
    },
    n.btnTransfer_i = function() {
        var e = new eui.Image;
        return this.btnTransfer = e,
        e.source = "team_transfer_leader_cheng_png",
        e.x = 174,
        e.y = 217,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "请输入登录密码",
        e.textColor = 12900350,
        e.x = 173,
        e.y = 74.656,
        e
    },
    n.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "转让会长需要当前战队指挥官输入自己的登录密码，完成验证，才能进行战队指挥官的转让。",
        e.textAlign = "center",
        e.textColor = 6388400,
        e.width = 447.852,
        e.y = 152.853,
        e
    },
    n.txtPwd_i = function() {
        var e = new eui.TextInput;
        return this.txtPwd = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.displayAsPassword = !0,
        e.height = 19,
        e.horizontalCenter = 0,
        e.inputType = "password",
        e.maxChars = 20,
        e.prompt = "",
        e.textColor = 8696819,
        e.width = 300,
        e.y = 113.254,
        e.skinName = i,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/res/TeamResSkin.exml"] = window.TeamResSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "L", "btnOpen", "flag_used", "midGroup", "txt_level", "txt_cost", "txt_getRes", "txt_getCont", "txt_bigLevel", "txt_resource", "warning", "helpBtn_png", "btnProduct", "txt_dailyTimes"],
        this.height = 550,
        this.width = 999,
        this.elementsContent = [this.L_i(), this.midGroup_i(), this._Image6_i(), this.txt_level_i(), this._Image7_i(), this._Label3_i(), this._Label4_i(), this.txt_cost_i(), this._Image8_i(), this.txt_getRes_i(), this.txt_getCont_i(), this._Image9_i(), this._Image10_i(), this.txt_bigLevel_i(), this.txt_resource_i(), this.warning_i(), this._Image12_i(), this.helpBtn_png_i(), this._Image13_i(), this.btnProduct_i(), this.txt_dailyTimes_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.L_i = function() {
        var e = new eui.Group;
        return this.L = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_res_title_png",
        e.x = 29.999999999999943,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_pop_btn_close_png",
        e.x = 956.9999999999999,
        e.y = 5,
        e
    },
    i.midGroup_i = function() {
        var e = new eui.Group;
        return this.midGroup = e,
        e.x = 299,
        e.y = 187,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this._Label1_i(), this._Label2_i(), this._Image5_i(), this.btnOpen_i(), this.flag_used_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_res_heikejibg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_res_black_tech_png",
        e.x = 117,
        e.y = 23,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "战队黑科技",
        e.textColor = 4175861,
        e.visible = !1,
        e.x = 119,
        e.y = 26,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "额外获得战队资源*200和贡献值*20",
        e.textColor = 15463167,
        e.x = 121,
        e.y = 81,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "team_res_techIcon_png",
        e.x = 38,
        e.y = 24,
        e
    },
    i.btnOpen_i = function() {
        var e = new eui.Image;
        return this.btnOpen = e,
        e.height = 89,
        e.source = "team_res_btnOpen_png",
        e.width = 89,
        e.x = 535,
        e.y = 21,
        e
    },
    i.flag_used_i = function() {
        var e = new eui.Image;
        return this.flag_used = e,
        e.source = "team_res_flag_used_png",
        e.x = 502,
        e.y = 44,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 407,
        e.source = "team_btnRes_png",
        e.width = 224,
        e.x = 41,
        e.y = 82,
        e
    },
    i.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "Lv.3",
        e.textColor = 4175861,
        e.x = 212,
        e.y = 437,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "team_res_needtxtbg_png",
        e.width = 658,
        e.x = 299,
        e.y = 124,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "将获得",
        e.textColor = 11389439,
        e.x = 710,
        e.y = 341,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "每次生产战队资源需要",
        e.textColor = 11389439,
        e.x = 313,
        e.y = 343,
        e
    },
    i.txt_cost_i = function() {
        var e = new eui.Label;
        return this.txt_cost = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100000",
        e.textColor = 7461887,
        e.x = 567,
        e.y = 343,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_icon_0_png",
        e.width = 38,
        e.x = 525,
        e.y = 339,
        e
    },
    i.txt_getRes_i = function() {
        var e = new eui.Label;
        return this.txt_getRes = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100000",
        e.textColor = 7461887,
        e.x = 825,
        e.y = 343,
        e
    },
    i.txt_getCont_i = function() {
        var e = new eui.Label;
        return this.txt_getCont = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100000",
        e.textColor = 7461887,
        e.x = 825,
        e.y = 384,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 31,
        e.source = "team_icon_1_png",
        e.width = 29,
        e.x = 790,
        e.y = 377,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "team_upgrade_res_icon_png",
        e.width = 31,
        e.x = 790,
        e.y = 337,
        e
    },
    i.txt_bigLevel_i = function() {
        var e = new eui.Label;
        return this.txt_bigLevel = e,
        e.fontFamily = "REEJI",
        e.size = 30,
        e.text = "Level.3",
        e.textColor = 7461887,
        e.x = 305,
        e.y = 82,
        e
    },
    i.txt_resource_i = function() {
        var e = new eui.Label;
        return this.txt_resource = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "99999/999999",
        e.textColor = 7461887,
        e.x = 356,
        e.y = 132,
        e
    },
    i.warning_i = function() {
        var e = new eui.Group;
        return this.warning = e,
        e.x = 732,
        e.y = 132,
        e.elementsContent = [this._Label5_i(), this._Image11_i()],
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源已经达到上限",
        e.textColor = 15942981,
        e.x = 27,
        e.y = 1,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 20,
        e.source = "team_manage_dissolve_flag_warning_png",
        e.width = 24,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_upgrade_res_icon_png",
        e.width = 27,
        e.x = 314,
        e.y = 131,
        e
    },
    i.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.source = "team_help_png",
        e.x = 188,
        e.y = 6,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "team_res_line_png",
        e.width = 605,
        e.x = 301,
        e.y = 116,
        e
    },
    i.btnProduct_i = function() {
        var e = new eui.Image;
        return this.btnProduct = e,
        e.height = 46,
        e.source = "team_res_btnProduct_png",
        e.width = 134,
        e.x = 531,
        e.y = 446,
        e
    },
    i.txt_dailyTimes_i = function() {
        var e = new eui.Label;
        return this.txt_dailyTimes = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "每天可生产0/10次",
        e.textColor = 7461887,
        e.x = 527,
        e.y = 422,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskDispatchSkin.exml"] = window.TeamTaskDispatchSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "XL", "btnHelp", "list", "petbg", "_list", "_scroller", "btnDispatch", "pet_0", "pet_1", "pet_2", "pet_3", "pet_4", "btnDel_0", "btnDel_1", "btnDel_2", "btnDel_3", "btnDel_4", "recPet_0", "pet_head_size_100_100", "recPet_1", "recPet_2", "recPet", "buff1", "buff2", "buff3", "search_bg", "txtSearch", "btnSearch", "btnAttr", "txtSuccesRate", "countbg", "icon", "txtCount", "items"],
        this.height = 551,
        this.width = 999,
        this.elementsContent = [this.XL_i(), this.btnHelp_i(), this.list_i(), this.petbg_i(), this._scroller_i(), this.btnDispatch_i(), this._Group6_i(), this.btnDel_0_i(), this.btnDel_1_i(), this.btnDel_2_i(), this.btnDel_3_i(), this.btnDel_4_i(), this.recPet_i(), this.buff1_i(), this.buff2_i(), this.buff3_i(), this.search_bg_i(), this.txtSearch_i(), this.btnSearch_i(), this.btnAttr_i(), this._Label1_i(), this.txtSuccesRate_i(), this._Label2_i(), this._Label3_i(), this.items_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["verticalScrollBar"],
            this.elementsContent = [this.verticalScrollBar_i()]
        }
        __extends(t, e);
        var i = function(e) {
            function t() {
                e.call(this),
                this.skinParts = ["thumb"],
                this.elementsContent = [this._Image1_i(), this.thumb_i()]
            }
            __extends(t, e);
            var i = t.prototype;
            return i._Image1_i = function() {
                var e = new eui.Image;
                return e.percentHeight = 100,
                e.source = "team_barbg_png",
                e.width = 3,
                e
            },
            i.thumb_i = function() {
                var e = new eui.Image;
                return this.thumb = e,
                e.height = 98,
                e.source = "team_thumb_png",
                e.width = 3,
                e
            },
            t
        } (eui.Skin),
        n = t.prototype;
        return n.verticalScrollBar_i = function() {
            var e = new eui.VScrollBar;
            return this.verticalScrollBar = e,
            e.percentHeight = 100,
            e.right = -3,
            e.width = 3,
            e.skinName = i,
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
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textColor = 12046335,
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
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textColor = 4149623,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    a = t.prototype;
    return a.XL_i = function() {
        var e = new eui.Group;
        return this.XL = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    a._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.visible = !0,
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    a.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_task_title_png",
        e.visible = !0,
        e.x = 30,
        e.y = 0,
        e
    },
    a.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_pop_btn_close_png",
        e.x = 957.0000000000002,
        e.y = 5,
        e
    },
    a.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "common_help_icon_png",
        e.visible = !1,
        e.x = 155,
        e.y = 23,
        e
    },
    a.list_i = function() {
        var e = new eui.Image;
        return this.list = e,
        e.source = "team_task_dispatch_list_png",
        e.x = 304,
        e.y = 105,
        e
    },
    a.petbg_i = function() {
        var e = new eui.Image;
        return this.petbg = e,
        e.alpha = .3,
        e.source = "team_task_dispatch_petbg_png",
        e.visible = !0,
        e.x = 42,
        e.y = 105,
        e
    },
    a._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.height = 312,
        e.scrollPolicyV = "on",
        e.width = 636,
        e.x = 313,
        e.y = 105,
        e.skinName = i,
        e.viewport = this._list_i(),
        e
    },
    a._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    a._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -4,
        e.orientation = "rows",
        e.verticalGap = -20,
        e
    },
    a.btnDispatch_i = function() {
        var e = new eui.Image;
        return this.btnDispatch = e,
        e.height = 46,
        e.source = "team_task_dispatch_btnDispatch_png",
        e.width = 134,
        e.x = 801,
        e.y = 445,
        e
    },
    a._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 56,
        e.y = 152,
        e.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i()],
        e
    },
    a._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image3_i(), this._Image4_i(), this.pet_0_i(), this._Image5_i()],
        e
    },
    a._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a.pet_0_i = function() {
        var e = new eui.Image;
        return this.pet_0 = e,
        e.height = 80,
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e
    },
    a._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 113,
        e.y = 0,
        e.elementsContent = [this._Image6_i(), this._Image7_i(), this.pet_1_i(), this._Image8_i()],
        e
    },
    a._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a.pet_1_i = function() {
        var e = new eui.Image;
        return this.pet_1 = e,
        e.height = 80,
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e
    },
    a._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 56,
        e.y = 115,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this.pet_2_i(), this._Image11_i()],
        e
    },
    a._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a.pet_2_i = function() {
        var e = new eui.Image;
        return this.pet_2 = e,
        e.height = 80,
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e
    },
    a._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 234,
        e.elementsContent = [this._Image12_i(), this._Image13_i(), this.pet_3_i(), this._Image14_i()],
        e
    },
    a._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a.pet_3_i = function() {
        var e = new eui.Image;
        return this.pet_3 = e,
        e.height = 80,
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e
    },
    a._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 113,
        e.y = 234,
        e.elementsContent = [this._Image15_i(), this._Image16_i(), this.pet_4_i(), this._Image17_i()],
        e
    },
    a._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a.pet_4_i = function() {
        var e = new eui.Image;
        return this.pet_4 = e,
        e.height = 80,
        e.width = 80,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e
    },
    a.btnDel_0_i = function() {
        var e = new eui.Image;
        return this.btnDel_0 = e,
        e.height = 30,
        e.source = "team_task_dispatch_btnDe_png",
        e.width = 30,
        e.x = 51,
        e.y = 147,
        e
    },
    a.btnDel_1_i = function() {
        var e = new eui.Image;
        return this.btnDel_1 = e,
        e.height = 30,
        e.source = "team_task_dispatch_btnDe_png",
        e.width = 30,
        e.x = 164,
        e.y = 147,
        e
    },
    a.btnDel_2_i = function() {
        var e = new eui.Image;
        return this.btnDel_2 = e,
        e.height = 30,
        e.source = "team_task_dispatch_btnDe_png",
        e.width = 30,
        e.x = 107,
        e.y = 262,
        e
    },
    a.btnDel_3_i = function() {
        var e = new eui.Image;
        return this.btnDel_3 = e,
        e.height = 30,
        e.source = "team_task_dispatch_btnDe_png",
        e.width = 30,
        e.x = 51,
        e.y = 381,
        e
    },
    a.btnDel_4_i = function() {
        var e = new eui.Image;
        return this.btnDel_4 = e,
        e.height = 30,
        e.source = "team_task_dispatch_btnDe_png",
        e.width = 30,
        e.x = 164,
        e.y = 381,
        e
    },
    a.recPet_i = function() {
        var e = new eui.Group;
        return this.recPet = e,
        e.x = 350,
        e.y = 432,
        e.elementsContent = [this.pet_head_size_100_100_i(), this._Group7_i(), this._Group8_i()],
        e
    },
    a.pet_head_size_100_100_i = function() {
        var e = new eui.Group;
        return this.pet_head_size_100_100 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image18_i(), this._Image19_i(), this.recPet_0_i()],
        e
    },
    a._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a.recPet_0_i = function() {
        var e = new eui.Image;
        return this.recPet_0 = e,
        e.height = 60,
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group7_i = function() {
        var e = new eui.Group;
        return e.x = 77,
        e.y = 0,
        e.elementsContent = [this._Image20_i(), this._Image21_i(), this.recPet_1_i()],
        e
    },
    a._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a.recPet_1_i = function() {
        var e = new eui.Image;
        return this.recPet_1 = e,
        e.height = 60,
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Group8_i = function() {
        var e = new eui.Group;
        return e.x = 153,
        e.y = 0,
        e.elementsContent = [this._Image22_i(), this._Image23_i(), this.recPet_2_i()],
        e
    },
    a._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 60,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a.recPet_2_i = function() {
        var e = new eui.Image;
        return this.recPet_2 = e,
        e.height = 60,
        e.width = 60,
        e.x = 0,
        e.y = 0,
        e
    },
    a.buff1_i = function() {
        var e = new eui.Image;
        return this.buff1 = e,
        e.source = "team_task_dispatch_buff_png",
        e.touchEnabled = !1,
        e.x = 350,
        e.y = 424,
        e
    },
    a.buff2_i = function() {
        var e = new eui.Image;
        return this.buff2 = e,
        e.source = "team_task_dispatch_buff_png",
        e.touchEnabled = !1,
        e.x = 427,
        e.y = 424,
        e
    },
    a.buff3_i = function() {
        var e = new eui.Image;
        return this.buff3 = e,
        e.source = "team_task_dispatch_buff_png",
        e.touchEnabled = !1,
        e.x = 503,
        e.y = 424,
        e
    },
    a.search_bg_i = function() {
        var e = new eui.Image;
        return this.search_bg = e,
        e.height = 29,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_task_settings_searchBg_png",
        e.width = 199,
        e.x = 758,
        e.y = 63,
        e
    },
    a.txtSearch_i = function() {
        var e = new eui.TextInput;
        return this.txtSearch = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 11,
        e.prompt = "输入精灵名或精灵ID",
        e.width = 190,
        e.x = 758,
        e.y = 69,
        e.skinName = n,
        e
    },
    a.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.source = "team_task_dispatch_btnSearch_png",
        e.x = 928,
        e.y = 63,
        e
    },
    a.btnAttr_i = function() {
        var e = new eui.Image;
        return this.btnAttr = e,
        e.source = "team_task_dispatch_btnAttr_png",
        e.x = 664,
        e.y = 63,
        e
    },
    a._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 16,
        e.text = "推荐精灵",
        e.textColor = 5626111,
        e.width = 16,
        e.x = 326,
        e.y = 430,
        e
    },
    a.txtSuccesRate_i = function() {
        var e = new eui.Label;
        return this.txtSuccesRate = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "当前成功率：80%",
        e.textColor = 16711423,
        e.x = 102,
        e.y = 109,
        e
    },
    a._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "精灵列表",
        e.textColor = 12046335,
        e.x = 302,
        e.y = 66,
        e
    },
    a._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "派遣精灵",
        e.textColor = 12046335,
        e.x = 41,
        e.y = 66,
        e
    },
    a.items_i = function() {
        var e = new eui.Group;
        return this.items = e,
        e.x = 742,
        e.y = 6,
        e.elementsContent = [this.countbg_i(), this.icon_i(), this.txtCount_i()],
        e
    },
    a.countbg_i = function() {
        var e = new eui.Image;
        return this.countbg = e,
        e.height = 20,
        e.source = "team_items_countbg_png",
        e.width = 155,
        e.x = 13,
        e.y = 6,
        e
    },
    a.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 29,
        e.source = "team_icon_1_png",
        e.width = 31,
        e.x = 0,
        e.y = 0,
        e
    },
    a.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 17.5,
        e.size = 18,
        e.text = "000000/999999",
        e.textColor = 7461887,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskFastDispatchSkin.exml"] = window.TeamTaskFastDispatchSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "M", "head_0", "pet_0", "head_1", "pet_1", "head_2", "pet_2", "head_3", "pet_3", "head_4", "pet_4", "txtRate", "btnCancel", "btnDispatch"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this.M_i(), this.pet_0_i(), this.pet_1_i(), this.pet_2_i(), this.pet_3_i(), this.pet_4_i(), this.txtRate_i(), this.btnCancel_i(), this.btnDispatch_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.M_i = function() {
        var e = new eui.Group;
        return this.M = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 285,
        e.scale9Grid = new egret.Rectangle(5, 4, 12, 10),
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 481,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "common_pop_up_bg_m_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_fast_dispatch_title_png",
        e.x = 35,
        e.y = 2,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 439,
        e.y = 0,
        e
    },
    i.pet_0_i = function() {
        var e = new eui.Group;
        return this.pet_0 = e,
        e.x = 30,
        e.y = 55,
        e.elementsContent = [this._Image4_i(), this.head_0_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_0_i = function() {
        var e = new eui.Image;
        return this.head_0 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i.pet_1_i = function() {
        var e = new eui.Group;
        return this.pet_1 = e,
        e.x = 117,
        e.y = 55,
        e.elementsContent = [this._Image5_i(), this.head_1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_1_i = function() {
        var e = new eui.Image;
        return this.head_1 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i.pet_2_i = function() {
        var e = new eui.Group;
        return this.pet_2 = e,
        e.x = 204,
        e.y = 55,
        e.elementsContent = [this._Image6_i(), this.head_2_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_2_i = function() {
        var e = new eui.Image;
        return this.head_2 = e,
        e.height = 71,
        e.width = 71,
        e.x = 1,
        e.y = 1,
        e
    },
    i.pet_3_i = function() {
        var e = new eui.Group;
        return this.pet_3 = e,
        e.x = 291,
        e.y = 55,
        e.elementsContent = [this._Image7_i(), this.head_3_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_3_i = function() {
        var e = new eui.Image;
        return this.head_3 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i.pet_4_i = function() {
        var e = new eui.Group;
        return this.pet_4 = e,
        e.x = 378,
        e.y = 55,
        e.elementsContent = [this._Image8_i(), this.head_4_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_4_i = function() {
        var e = new eui.Image;
        return this.head_4 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i.txtRate_i = function() {
        var e = new eui.Label;
        return this.txtRate = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 7,
        e.size = 18,
        e.text = "将派遣以上精灵执行任务，预计成功率100%\n是否决定派遣",
        e.textAlign = "center",
        e.textColor = 13820671,
        e.x = 65,
        e.y = 149,
        e
    },
    i.btnCancel_i = function() {
        var e = new eui.Image;
        return this.btnCancel = e,
        e.height = 46,
        e.source = "team_task_fast_dispatch_btnCancel_png",
        e.width = 134,
        e.x = 67,
        e.y = 213,
        e
    },
    i.btnDispatch_i = function() {
        var e = new eui.Image;
        return this.btnDispatch = e,
        e.height = 46,
        e.source = "team_task_fast_dispatch_btnDispatch_png",
        e.width = 134,
        e.x = 274,
        e.y = 213,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskItemSkin.exml"] = window.TeamTaskItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["tag", "txtTaskName"],
        this.currentState = "up",
        this.height = 63,
        this.width = 272,
        this.elementsContent = [this._Rect1_i(), this._Image1_i(), this.tag_i(), this.txtTaskName_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_task_item_down_png"), new eui.SetProperty("txtTaskName", "textColor", 15857151)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Rect1_i = function() {
        var e = new eui.Rect;
        return e.alpha = 0,
        e.height = 63,
        e.width = 272,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 63,
        e.width = 272,
        e.x = 0,
        e.y = 4,
        e
    },
    i.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.source = "team_task_tag1_png",
        e.y = 7,
        e
    },
    i.txtTaskName_i = function() {
        var e = new eui.Label;
        return this.txtTaskName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "任务名称名称最多十二个字",
        e.textAlign = "center",
        e.textColor = 8036825,
        e.width = 240,
        e.x = 16,
        e.y = 25,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskPetSkin.exml"] = window.TeamTaskPetSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["petIcon", "txtName", "imgTag", "selected"],
        this.height = 151,
        this.width = 130,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.petIcon_i(), this._Image4_i(), this.txtName_i(), this.imgTag_i(), this.selected_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("selected", "visible", !1), new eui.SetProperty("selected", "x", 2), new eui.SetProperty("selected", "y", -2)]), new eui.State("down", [])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 120,
        e.source = "common_pet_head_bg_size_110_134_png",
        e.width = 100,
        e.x = 15,
        e.y = 16,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 100,
        e.x = 15,
        e.y = 16,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 21,
        e.source = "common_pet_head_name_bg_110_134_png",
        e.width = 100,
        e.x = 15,
        e.y = 115,
        e
    },
    i.petIcon_i = function() {
        var e = new eui.Image;
        return this.petIcon = e,
        e.height = 100,
        e.width = 100,
        e.x = 15,
        e.y = 16,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 100,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 100,
        e.x = 15,
        e.y = 16,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "精灵名字最多",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 100,
        e.x = 15,
        e.y = 118,
        e
    },
    i.imgTag_i = function() {
        var e = new eui.Image;
        return this.imgTag = e,
        e.source = "team_task_dispatch_tag_png",
        e.x = 15,
        e.y = 16,
        e
    },
    i.selected_i = function() {
        var e = new eui.Image;
        return this.selected = e,
        e.height = 151,
        e.source = "team_task_pet_selected_png",
        e.width = 130,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskSettingsBanItemSkin.exml"] = window.TeamTaskSettingsBanItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head", "btnDel"],
        this.height = 103,
        this.width = 104,
        this.elementsContent = [this._Image1_i(), this.head_i(), this.btnDel_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 102,
        e.source = "team_task_settings_ban_item_bg_png",
        e.width = 103,
        e.x = 1,
        e.y = 1,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.width = 100,
        e.x = 3,
        e.y = 2,
        e
    },
    i.btnDel_i = function() {
        var e = new eui.Image;
        return this.btnDel = e,
        e.height = 27,
        e.source = "team_task_settings_ban_item_btnDel_png",
        e.width = 27,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskSettingsMyItemSkin.exml"] = window.TeamTaskSettingsMyItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txtName", "head", "txtLevel"],
        this.height = 131,
        this.width = 104,
        this.elementsContent = [this._Image1_i(), this.txtName_i(), this.head_i(), this.txtLevel_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 131,
        e.source = "team_task_settings_my_item_bg_png",
        e.width = 104,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -1,
        e.size = 16,
        e.text = "精灵名精灵名",
        e.textColor = 9025023,
        e.y = 106,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.width = 100,
        e.x = 1,
        e.y = 1,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "MFShangHei",
        e.right = 10,
        e.size = 16,
        e.stroke = 1,
        e.strokeColor = 1327750,
        e.text = "LV.0",
        e.textColor = 7667455,
        e.y = 5,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskSettingsSkin.exml"] = window.TeamTaskSettingsSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "btnHelp", "_banList", "txt_num", "_myList", "_myScr", "txtSearch", "btnSearch", "btnAttr", "btnOrder", "grpOrder", "btnBack"],
        this.height = 547,
        this.width = 1e3,
        this.elementsContent = [this._Group1_i(), this._Image3_i(), this.btnClose_i(), this._Image4_i(), this.btnHelp_i(), this._Scroller1_i(), this.txt_num_i(), this._Image5_i(), this._myScr_i(), this._Label1_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this._Image9_i(), this.txtSearch_i(), this.btnSearch_i(), this.grpOrder_i(), this.btnBack_i()]
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
            e.size = 16,
            e.textColor = 12111615,
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
            e.size = 16,
            e.textColor = 6388143,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 509,
        e.source = "team_task_leftbg_png",
        e.width = 269,
        e.x = 0,
        e.y = 32,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 33,
        e.source = "common_pop_btn_close_png",
        e.width = 33,
        e.x = 957,
        e.y = 0,
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 32,
        e.source = "team_task_settings_title_png",
        e.width = 102,
        e.x = 36,
        e.y = 1,
        e
    },
    n.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.height = 28,
        e.source = "team_help_png",
        e.width = 24,
        e.x = 170,
        e.y = 3,
        e
    },
    n._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 421,
        e.width = 222,
        e.x = 13,
        e.y = 91,
        e.viewport = this._banList_i(),
        e
    },
    n._banList_i = function() {
        var e = new eui.List;
        return this._banList = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    n._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 14,
        e.orientation = "rows",
        e.requestedColumnCount = 2,
        e.verticalGap = 16,
        e
    },
    n.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "不被派遣精灵（12/12）",
        e.textColor = 12111615,
        e.x = 35,
        e.y = 48,
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "team_task_img_dot_png",
        e.width = 19,
        e.x = 10,
        e.y = 47,
        e
    },
    n._myScr_i = function() {
        var e = new eui.Scroller;
        return this._myScr = e,
        e.height = 421,
        e.width = 709,
        e.x = 267,
        e.y = 93,
        e.viewport = this._myList_i(),
        e
    },
    n._myList_i = function() {
        var e = new eui.List;
        return this._myList = e,
        e.layout = this._TileLayout2_i(),
        e
    },
    n._TileLayout2_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 17,
        e.orientation = "rows",
        e.verticalGap = 15,
        e
    },
    n._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "我的精灵",
        e.textColor = 12111615,
        e.x = 289,
        e.y = 48,
        e
    },
    n._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "team_task_img_dot_png",
        e.width = 19,
        e.x = 262,
        e.y = 47,
        e
    },
    n._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "team_task_line_png",
        e.width = 707,
        e.x = 267,
        e.y = 80,
        e
    },
    n._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "team_task_line_png",
        e.width = 221,
        e.x = 15,
        e.y = 80,
        e
    },
    n._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_task_settings_searchBg_png",
        e.width = 237,
        e.x = 737,
        e.y = 42,
        e
    },
    n.txtSearch_i = function() {
        var e = new eui.TextInput;
        return this.txtSearch = e,
        e.anchorOffsetY = 0,
        e.height = 24,
        e.maxChars = 11,
        e.prompt = "输入精灵名或ID",
        e.width = 179,
        e.x = 752,
        e.y = 49,
        e.skinName = i,
        e
    },
    n.btnSearch_i = function() {
        var e = new eui.Image;
        return this.btnSearch = e,
        e.height = 29,
        e.source = "team_task_dispatch_btnSearch_png",
        e.width = 29,
        e.x = 946,
        e.y = 43,
        e
    },
    n.grpOrder_i = function() {
        var e = new eui.Group;
        return this.grpOrder = e,
        e.x = 545,
        e.y = 40,
        e.elementsContent = [this.btnAttr_i(), this.btnOrder_i()],
        e
    },
    n.btnAttr_i = function() {
        var e = new eui.Image;
        return this.btnAttr = e,
        e.height = 34,
        e.source = "team_task_settings_btnAttr_png",
        e.width = 86,
        e.x = 96,
        e.y = 0,
        e
    },
    n.btnOrder_i = function() {
        var e = new eui.Image;
        return this.btnOrder = e,
        e.height = 34,
        e.source = "team_task_settings_btnOrder_down_png",
        e.width = 86,
        e.x = 0,
        e.y = 0,
        e
    },
    n.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.height = 34,
        e.source = "team_task_settings_btnBack_png",
        e.visible = !1,
        e.width = 86,
        e.x = 641,
        e.y = 40,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/task/TeamTaskSkin.exml"] = window.TeamTaskSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "_list", "_scroller", "XL", "btnHelp", "btnOneTap", "btnSetting", "txt_num", "grpDefault", "icon_star_0", "icon_star_1", "icon_star_2", "icon_star_3", "icon_star_4", "grpStar", "btnDispatch1", "txtNeedTime", "txtNeedPetNum", "grpStart", "txt_rate", "txtDoing", "grpGoing", "btnGet", "txt1", "txt_rate1", "grpComplete", "head_0", "head_1", "head_2", "head_3", "head_4", "grpPetList", "txtTaskName", "txtTaskDes", "btnBack", "icon_0", "txtCount_0", "grp_icon_0", "icon_1", "txtCount_1", "grp_icon_1", "icon_2", "txtCount_2", "grp_icon_2", "icon_3", "txtCount_3", "grp_icon_3", "icon_4", "txtCount_4", "grp_icon_4", "icon_5", "txtCount_5", "grp_icon_5", "grpTask"],
        this.height = 547,
        this.width = 999,
        this.elementsContent = [this.XL_i(), this.btnHelp_i(), this.grpDefault_i(), this.grpTask_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.XL_i = function() {
        var e = new eui.Group;
        return this.XL = e,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.btnClose_i(), this._scroller_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.visible = !0,
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.visible = !0,
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_task_title_png",
        e.visible = !0,
        e.x = 39,
        e.y = 3,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 509,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_task_leftbg_png",
        e.visible = !0,
        e.width = 269,
        e.x = 2,
        e.y = 33,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_pop_btn_close_png",
        e.x = 959,
        e.y = 1,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 422,
        e.scaleX = 1,
        e.scaleY = 1,
        e.scrollPolicyH = "off",
        e.width = 272,
        e.x = 2,
        e.y = 45,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 400,
        e.width = 286,
        e.elementsContent = [this._list_i()],
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 400,
        e.width = 286,
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
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.source = "team_help_png",
        e.x = 173,
        e.y = 4,
        e
    },
    i.grpDefault_i = function() {
        var e = new eui.Group;
        return this.grpDefault = e,
        e.visible = !1,
        e.x = 269,
        e.y = 34,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.btnOneTap_i(), this.btnSetting_i(), this._Label3_i(), this.txt_num_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 508,
        e.source = "team_task_defaultBg_png",
        e.width = 733,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 337,
        e.source = "team_task_img_location_png",
        e.width = 485,
        e.x = 180,
        e.y = 31,
        e
    },
    i.btnOneTap_i = function() {
        var e = new eui.Group;
        return this.btnOneTap = e,
        e.height = 46,
        e.width = 134,
        e.x = 560,
        e.y = 448,
        e.elementsContent = [this._Image7_i(), this._Label1_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "一键收获",
        e.textColor = 10246682,
        e.x = 28,
        e.y = 13,
        e
    },
    i.btnSetting_i = function() {
        var e = new eui.Group;
        return this.btnSetting = e,
        e.x = 33,
        e.y = 448,
        e.elementsContent = [this._Image8_i(), this._Label2_i()],
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_blue_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "派遣设置",
        e.textColor = 2975915,
        e.x = 28,
        e.y = 13,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "今天已进行任务：",
        e.textColor = 6258105,
        e.x = 359,
        e.y = 462,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "00/00",
        e.textColor = 4187130,
        e.x = 502,
        e.y = 462,
        e
    },
    i.grpTask_i = function() {
        var e = new eui.Group;
        return this.grpTask = e,
        e.visible = !0,
        e.x = 288,
        e.y = 45,
        e.elementsContent = [this._Image9_i(), this._Image10_i(), this._Image11_i(), this.grpStar_i(), this._Label4_i(), this._Image12_i(), this.grpStart_i(), this.grpGoing_i(), this.grpComplete_i(), this.grpPetList_i(), this._Label11_i(), this._Image18_i(), this._Label12_i(), this._Image19_i(), this.txtTaskName_i(), this.txtTaskDes_i(), this.btnBack_i(), this.grp_icon_0_i(), this.grp_icon_1_i(), this.grp_icon_2_i(), this.grp_icon_3_i(), this.grp_icon_4_i(), this.grp_icon_5_i()],
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_line_png",
        e.x = 0,
        e.y = 34,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_line_png",
        e.x = 1,
        e.y = 410,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 19,
        e.source = "team_task_img_dot_png",
        e.width = 19,
        e.x = 11,
        e.y = 3,
        e
    },
    i.grpStar_i = function() {
        var e = new eui.Group;
        return this.grpStar = e,
        e.x = 522,
        e.y = 0,
        e.elementsContent = [this.icon_star_0_i(), this.icon_star_1_i(), this.icon_star_2_i(), this.icon_star_3_i(), this.icon_star_4_i()],
        e
    },
    i.icon_star_0_i = function() {
        var e = new eui.Image;
        return this.icon_star_0 = e,
        e.height = 25,
        e.source = "team_task_icon_star_png",
        e.width = 26,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_star_1_i = function() {
        var e = new eui.Image;
        return this.icon_star_1 = e,
        e.height = 25,
        e.source = "team_task_icon_star_png",
        e.width = 26,
        e.x = 27,
        e.y = 0,
        e
    },
    i.icon_star_2_i = function() {
        var e = new eui.Image;
        return this.icon_star_2 = e,
        e.height = 25,
        e.source = "team_task_icon_star_png",
        e.width = 26,
        e.x = 55,
        e.y = 0,
        e
    },
    i.icon_star_3_i = function() {
        var e = new eui.Image;
        return this.icon_star_3 = e,
        e.height = 25,
        e.source = "team_task_icon_star_png",
        e.width = 26,
        e.x = 82,
        e.y = 0,
        e
    },
    i.icon_star_4_i = function() {
        var e = new eui.Image;
        return this.icon_star_4 = e,
        e.height = 23,
        e.source = "team_task_icon_star_bg_png",
        e.width = 24,
        e.x = 110,
        e.y = 1,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "星级：",
        e.textColor = 12111615,
        e.x = 478,
        e.y = 6,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 24,
        e.source = "team_task_img_petIcon_png",
        e.width = 22,
        e.x = 11,
        e.y = 154,
        e
    },
    i.grpStart_i = function() {
        var e = new eui.Group;
        return this.grpStart = e,
        e.visible = !1,
        e.x = 37,
        e.y = 156,
        e.elementsContent = [this.btnDispatch1_i(), this._Label5_i(), this.txtNeedTime_i(), this.txtNeedPetNum_i(), this._Label6_i()],
        e
    },
    i.btnDispatch1_i = function() {
        var e = new eui.Image;
        return this.btnDispatch1 = e,
        e.height = 46,
        e.source = "team_task_btnDispatch1_png",
        e.width = 134,
        e.x = 486,
        e.y = 272,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "需要精灵数量：",
        e.textColor = 6258105,
        e.x = 329,
        e.y = 275,
        e
    },
    i.txtNeedTime_i = function() {
        var e = new eui.Label;
        return this.txtNeedTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "耗时：00小时00分",
        e.textColor = 6258105,
        e.x = 330,
        e.y = 298,
        e
    },
    i.txtNeedPetNum_i = function() {
        var e = new eui.Label;
        return this.txtNeedPetNum = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "5",
        e.textColor = 4187130,
        e.x = 462,
        e.y = 275,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "推荐精灵",
        e.textColor = 12111615,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpGoing_i = function() {
        var e = new eui.Group;
        return this.grpGoing = e,
        e.visible = !1,
        e.x = 37,
        e.y = 156,
        e.elementsContent = [this._Label7_i(), this.txt_rate_i(), this.txtDoing_i(), this._Label8_i()],
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "成功率：",
        e.textColor = 6258105,
        e.x = 512,
        e.y = 286,
        e
    },
    i.txt_rate_i = function() {
        var e = new eui.Label;
        return this.txt_rate = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100%",
        e.textColor = 4187130,
        e.x = 579,
        e.y = 286,
        e
    },
    i.txtDoing_i = function() {
        var e = new eui.Label;
        return this.txtDoing = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "剩余00小时00分钟完成任务",
        e.textColor = 6258105,
        e.x = 185,
        e.y = 286,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "精灵派遣中",
        e.textColor = 12111615,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpComplete_i = function() {
        var e = new eui.Group;
        return this.grpComplete = e,
        e.visible = !0,
        e.x = 37,
        e.y = 156,
        e.elementsContent = [this.btnGet_i(), this._Label9_i(), this.txt1_i(), this.txt_rate1_i(), this._Label10_i()],
        e
    },
    i.btnGet_i = function() {
        var e = new eui.Image;
        return this.btnGet = e,
        e.height = 46,
        e.source = "team_task_btnGet_png",
        e.width = 134,
        e.x = 486,
        e.y = 272,
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "任务已完成",
        e.textColor = 6258105,
        e.x = 367,
        e.y = 274,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "成功率：",
        e.textColor = 6258105,
        e.x = 367,
        e.y = 298,
        e
    },
    i.txt_rate1_i = function() {
        var e = new eui.Label;
        return this.txt_rate1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "100%",
        e.textColor = 4187130,
        e.x = 432,
        e.y = 298,
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "任务已完成",
        e.textColor = 12111615,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpPetList_i = function() {
        var e = new eui.Group;
        return this.grpPetList = e,
        e.visible = !0,
        e.x = 39,
        e.y = 188,
        e.elementsContent = [this._Group2_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i()],
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image13_i(), this.head_0_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_0_i = function() {
        var e = new eui.Image;
        return this.head_0 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i._Group3_i = function() {
        var e = new eui.Group;
        return e.x = 97,
        e.y = 0,
        e.elementsContent = [this._Image14_i(), this.head_1_i()],
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_1_i = function() {
        var e = new eui.Image;
        return this.head_1 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i._Group4_i = function() {
        var e = new eui.Group;
        return e.x = 194,
        e.y = 0,
        e.elementsContent = [this._Image15_i(), this.head_2_i()],
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_2_i = function() {
        var e = new eui.Image;
        return this.head_2 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i._Group5_i = function() {
        var e = new eui.Group;
        return e.x = 291,
        e.y = 0,
        e.elementsContent = [this._Image16_i(), this.head_3_i()],
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_3_i = function() {
        var e = new eui.Image;
        return this.head_3 = e,
        e.height = 70,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i._Group6_i = function() {
        var e = new eui.Group;
        return e.x = 388,
        e.y = 0,
        e.elementsContent = [this._Image17_i(), this.head_4_i()],
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "team_task_iconBg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.head_4_i = function() {
        var e = new eui.Image;
        return this.head_4 = e,
        e.height = 70,
        e.visible = !0,
        e.width = 70,
        e.x = 1,
        e.y = 1,
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "基础奖励",
        e.textColor = 12111615,
        e.x = 39,
        e.y = 285,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "team_task_img_triangle_png",
        e.width = 20,
        e.x = 11,
        e.y = 281,
        e
    },
    i._Label12_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "成功奖励",
        e.textColor = 12111615,
        e.x = 380,
        e.y = 285,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 28,
        e.source = "team_task_img_triangle_png",
        e.width = 19,
        e.x = 351,
        e.y = 281,
        e
    },
    i.txtTaskName_i = function() {
        var e = new eui.Label;
        return this.txtTaskName = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "任务名称十二个字",
        e.textColor = 12111615,
        e.x = 38,
        e.y = 3,
        e
    },
    i.txtTaskDes_i = function() {
        var e = new eui.Label;
        return this.txtTaskDes = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 5,
        e.size = 16,
        e.text = "本游戏是一款回合制精灵养成类游戏，适用于年满12周岁及以上的用户，建议未成年人在家长\n监护下使用游戏产品，玩法多样，能够带给玩家轻松愉悦的游戏氛围。本游戏是一款回合制精",
        e.textColor = 6258105,
        e.width = 660,
        e.x = 16,
        e.y = 48,
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.height = 28,
        e.source = "team_task_btnBack_png",
        e.width = 29,
        e.x = 17,
        e.y = 437,
        e
    },
    i.grp_icon_0_i = function() {
        var e = new eui.Group;
        return this.grp_icon_0 = e,
        e.height = 69,
        e.width = 69,
        e.x = 39,
        e.y = 316,
        e.elementsContent = [this._Image20_i(), this.icon_0_i(), this.txtCount_0_i()],
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_0_i = function() {
        var e = new eui.Label;
        return this.txtCount_0 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    i.grp_icon_1_i = function() {
        var e = new eui.Group;
        return this.grp_icon_1 = e,
        e.height = 69,
        e.width = 69,
        e.x = 136,
        e.y = 316,
        e.elementsContent = [this._Image21_i(), this.icon_1_i(), this.txtCount_1_i()],
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_1_i = function() {
        var e = new eui.Label;
        return this.txtCount_1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    i.grp_icon_2_i = function() {
        var e = new eui.Group;
        return this.grp_icon_2 = e,
        e.height = 69,
        e.width = 69,
        e.x = 233,
        e.y = 316,
        e.elementsContent = [this._Image22_i(), this.icon_2_i(), this.txtCount_2_i()],
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_2_i = function() {
        var e = new eui.Label;
        return this.txtCount_2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    i.grp_icon_3_i = function() {
        var e = new eui.Group;
        return this.grp_icon_3 = e,
        e.height = 69,
        e.width = 69,
        e.x = 383,
        e.y = 316,
        e.elementsContent = [this._Image23_i(), this.icon_3_i(), this.txtCount_3_i()],
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_3_i = function() {
        var e = new eui.Label;
        return this.txtCount_3 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    i.grp_icon_4_i = function() {
        var e = new eui.Group;
        return this.grp_icon_4 = e,
        e.height = 69,
        e.width = 69,
        e.x = 480,
        e.y = 316,
        e.elementsContent = [this._Image24_i(), this.icon_4_i(), this.txtCount_4_i()],
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_4_i = function() {
        var e = new eui.Image;
        return this.icon_4 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_4_i = function() {
        var e = new eui.Label;
        return this.txtCount_4 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    i.grp_icon_5_i = function() {
        var e = new eui.Group;
        return this.grp_icon_5 = e,
        e.height = 69,
        e.width = 69,
        e.x = 577,
        e.y = 316,
        e.elementsContent = [this._Image25_i(), this.icon_5_i(), this.txtCount_5_i()],
        e
    },
    i._Image25_i = function() {
        var e = new eui.Image;
        return e.height = 69,
        e.source = "team_task_iconBg_png",
        e.width = 69,
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_5_i = function() {
        var e = new eui.Image;
        return this.icon_5 = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "team_task_icon_png",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.txtCount_5_i = function() {
        var e = new eui.Label;
        return this.txtCount_5 = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.y = 49,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamDeviceSkin.exml"] = window.TeamDeviceSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_pet", "img_item", "img_res", "txt_itemLevel", "txt_petLevel", "txt_resLevel", "flag_closed_item", "txt_item_openTime", "flag_opening_item", "flag_closed_pet", "txt_pet_openTime", "flag_opening_pet"],
        this.height = 350,
        this.width = 610,
        this.elementsContent = [this.img_pet_i(), this.img_item_i(), this.img_res_i(), this.txt_itemLevel_i(), this.txt_petLevel_i(), this.txt_resLevel_i(), this.flag_closed_item_i(), this.flag_opening_item_i(), this.flag_closed_pet_i(), this.flag_opening_pet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.img_pet_i = function() {
        var e = new eui.Image;
        return this.img_pet = e,
        e.height = 350,
        e.source = "team_btnTech_png",
        e.width = 192,
        e.x = 418,
        e.y = 0,
        e
    },
    i.img_item_i = function() {
        var e = new eui.Image;
        return this.img_item = e,
        e.height = 350,
        e.source = "team_btnTools_png",
        e.width = 192,
        e.x = 209,
        e.y = 0,
        e
    },
    i.img_res_i = function() {
        var e = new eui.Image;
        return this.img_res = e,
        e.height = 350,
        e.source = "team_btnRes_png",
        e.width = 192,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_itemLevel_i = function() {
        var e = new eui.Label;
        return this.txt_itemLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv.5",
        e.textColor = 4175861,
        e.x = 354,
        e.y = 307,
        e
    },
    i.txt_petLevel_i = function() {
        var e = new eui.Label;
        return this.txt_petLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv.5",
        e.textColor = 4175861,
        e.x = 564,
        e.y = 307,
        e
    },
    i.txt_resLevel_i = function() {
        var e = new eui.Label;
        return this.txt_resLevel = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv.5",
        e.textColor = 4175861,
        e.x = 146,
        e.y = 307,
        e
    },
    i.flag_closed_item_i = function() {
        var e = new eui.Image;
        return this.flag_closed_item = e,
        e.height = 350,
        e.source = "team_device_flag_closed_png",
        e.visible = !0,
        e.width = 192,
        e.x = 209,
        e.y = 0,
        e
    },
    i.flag_opening_item_i = function() {
        var e = new eui.Group;
        return this.flag_opening_item = e,
        e.visible = !1,
        e.x = 209,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Label1_i(), this.txt_item_openTime_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 350,
        e.source = "team_device_close_rect_png",
        e.width = 192,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "小时后开启",
        e.textColor = 4175861,
        e.x = 59,
        e.y = 162,
        e
    },
    i.txt_item_openTime_i = function() {
        var e = new eui.Label;
        return this.txt_item_openTime = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.right = 140,
        e.size = 26,
        e.text = "00",
        e.textColor = 9427197,
        e.y = 160,
        e
    },
    i.flag_closed_pet_i = function() {
        var e = new eui.Image;
        return this.flag_closed_pet = e,
        e.height = 350,
        e.source = "team_device_flag_closed_png",
        e.width = 192,
        e.x = 418,
        e.y = 0,
        e
    },
    i.flag_opening_pet_i = function() {
        var e = new eui.Group;
        return this.flag_opening_pet = e,
        e.visible = !1,
        e.x = 418,
        e.y = 0,
        e.elementsContent = [this._Image2_i(), this._Label2_i(), this.txt_pet_openTime_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 350,
        e.source = "team_device_close_rect_png",
        e.width = 192,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 22,
        e.text = "小时后开启",
        e.textColor = 4175861,
        e.x = 59,
        e.y = 162,
        e
    },
    i.txt_pet_openTime_i = function() {
        var e = new eui.Label;
        return this.txt_pet_openTime = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.right = 140,
        e.size = 26,
        e.text = "00",
        e.textColor = 9427197,
        e.y = 160,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamDeviceUpgradeSkin.exml"] = window.TeamDeviceUpgradeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnClose", "txtTitle", "btnUpgrade", "txtNote", "txtLevel", "txtNeedRes", "txtRes", "txtLevelNeed", "txtLevelNeedNum", "drawing_icon"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this._Group1_i(), this._Image3_i(), this.btnUpgrade_i(), this._Image4_i(), this._Scroller1_i(), this._Label1_i(), this.txtLevel_i(), this._Label2_i(), this.txtNeedRes_i(), this._Label3_i(), this.txtRes_i(), this.txtLevelNeed_i(), this.txtLevelNeedNum_i(), this.drawing_icon_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Label4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.btnClose_i(), this.txtTitle_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 333,
        e.source = "common_pop_point_png",
        e.width = 608,
        e.x = 0,
        e.y = 41,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_samll_png",
        e.width = 600,
        e.x = 4,
        e.y = 22,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 566,
        e.y = 0,
        e
    },
    i.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.fontFamily = "HuaKangXinZongYi",
        e.size = 27.6315307617188,
        e.stroke = 2,
        e.strokeColor = 4874938,
        e.text = "战队科技升级",
        e.textColor = 15332095,
        e.x = 35,
        e.y = 26,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 121,
        e.scale9Grid = new egret.Rectangle(9, 2, 4, 3),
        e.source = "team_upgrade_txtbg1_png",
        e.width = 570,
        e.x = 20,
        e.y = 172,
        e
    },
    i.btnUpgrade_i = function() {
        var e = new eui.Image;
        return this.btnUpgrade = e,
        e.height = 40,
        e.source = "team_upgrade_btnUpgrade_png",
        e.width = 140,
        e.x = 234,
        e.y = 305,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 96,
        e.source = "team_upgrade_bluebg_png",
        e.width = 569,
        e.x = 21,
        e.y = 72,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 112,
        e.scrollPolicyH = "off",
        e.width = 560,
        e.x = 26,
        e.y = 177,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.height = 112,
        e.width = 650,
        e.layout = this._VerticalLayout1_i(),
        e.elementsContent = [this.txtNote_i()],
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i.txtNote_i = function() {
        var e = new eui.Label;
        return this.txtNote = e,
        e.anchorOffsetX = -4.778,
        e.anchorOffsetY = 1.062,
        e.fontFamily = "黑体",
        e.lineSpacing = 8,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16,
        e.text = "1.战队资源中心等级可提升至2级，每天可以产出更多的战队资源，战队资源可持有上限增加",
        e.textColor = 3955336,
        e.width = 560,
        e.x = -4.778,
        e.y = 1.062,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 16,
        e.text = "当前战队等级：",
        e.textColor = 3492213,
        e.x = 105,
        e.y = 86,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "1",
        e.textColor = 4175861,
        e.x = 152,
        e.y = 105,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 16,
        e.text = "战队资源：",
        e.textColor = 3492213,
        e.x = 425,
        e.y = 127,
        e
    },
    i.txtNeedRes_i = function() {
        var e = new eui.Label;
        return this.txtNeedRes = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "8000",
        e.textColor = 4175861,
        e.x = 461,
        e.y = 146,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 16,
        e.text = "当前战队资源：",
        e.textColor = 3492213,
        e.x = 105,
        e.y = 127,
        e
    },
    i.txtRes_i = function() {
        var e = new eui.Label;
        return this.txtRes = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "8000",
        e.textColor = 4175861,
        e.x = 140,
        e.y = 146,
        e
    },
    i.txtLevelNeed_i = function() {
        var e = new eui.Label;
        return this.txtLevelNeed = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "战队等级：",
        e.textColor = 3492213,
        e.x = 425,
        e.y = 86,
        e
    },
    i.txtLevelNeedNum_i = function() {
        var e = new eui.Label;
        return this.txtLevelNeedNum = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "1",
        e.textColor = 4175861,
        e.x = 473,
        e.y = 105,
        e
    },
    i.drawing_icon_i = function() {
        var e = new eui.Image;
        return this.drawing_icon = e,
        e.height = 32,
        e.source = "team_res_icon_drawing_2_png",
        e.visible = !1,
        e.width = 42,
        e.x = 379,
        e.y = 87,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "team_upgrade_res_icon_png",
        e.width = 31,
        e.x = 385,
        e.y = 128,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.source = "team_upgrade_res_icon_png",
        e.width = 31,
        e.x = 64,
        e.y = 128,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "team_upgrade_next_png",
        e.width = 78,
        e.x = 269,
        e.y = 98,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 14,
        e.text = "升至下一级需要",
        e.textColor = 5083102,
        e.x = 256,
        e.y = 134,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamInfoSkin.exml"] = window.TeamInfoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "M", "headbg", "info_tech_icon", "txtTechLvl", "info_res_icon", "txtResLvl", "info_item_icon", "txtItemLvl", "txtTeamName", "txtId", "txtLvl", "txtCount", "txtbg1", "btnEdit", "txtNote", "line"],
        this.height = 374,
        this.width = 620,
        this.elementsContent = [this.M_i(), this.headbg_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Image8_i(), this.info_tech_icon_i(), this.txtTechLvl_i(), this.info_res_icon_i(), this.txtResLvl_i(), this.info_item_icon_i(), this.txtItemLvl_i(), this.txtTeamName_i(), this.txtId_i(), this.txtLvl_i(), this.txtCount_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.txtbg1_i(), this.btnEdit_i(), this._Label5_i(), this.txtNote_i(), this.line_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.M_i = function() {
        var e = new eui.Group;
        return this.M = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this.title_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 333,
        e.source = "common_pop_point_png",
        e.width = 608,
        e.x = 0,
        e.y = 41,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.source = "common_pop_title_samll_png",
        e.width = 600,
        e.x = 4,
        e.y = 22,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 56,
        e.source = "common_close_1_png",
        e.width = 54,
        e.x = 566,
        e.y = 0,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 26,
        e.source = "team_info_title_png",
        e.width = 112,
        e.x = 37,
        e.y = 28,
        e
    },
    i.headbg_i = function() {
        var e = new eui.Image;
        return this.headbg = e,
        e.height = 110,
        e.source = "team_info_headbg_png",
        e.width = 110,
        e.x = 68,
        e.y = 89,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.scale9Grid = new egret.Rectangle(8, 6, 8, 6),
        e.source = "team_info_txtbg_png",
        e.width = 123,
        e.x = 105,
        e.y = 217,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.scale9Grid = new egret.Rectangle(8, 6, 8, 6),
        e.source = "team_info_txtbg_png",
        e.width = 123,
        e.x = 105,
        e.y = 246,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.scale9Grid = new egret.Rectangle(8, 6, 8, 6),
        e.source = "team_info_txtbg_png",
        e.width = 123,
        e.x = 105,
        e.y = 275,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.scale9Grid = new egret.Rectangle(8, 6, 8, 6),
        e.source = "team_info_txtbg_png",
        e.width = 123,
        e.x = 105,
        e.y = 304,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 113,
        e.scale9Grid = new egret.Rectangle(8, 6, 8, 6),
        e.source = "team_info_txtbg_png",
        e.width = 348,
        e.x = 242,
        e.y = 217,
        e
    },
    i.info_tech_icon_i = function() {
        var e = new eui.Image;
        return this.info_tech_icon = e,
        e.height = 111,
        e.source = "team_info_info_tech_icon_png",
        e.width = 91,
        e.x = 476,
        e.y = 213,
        e
    },
    i.txtTechLvl_i = function() {
        var e = new eui.Label;
        return this.txtTechLvl = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "lv.1",
        e.textColor = 16777215,
        e.x = 508,
        e.y = 306,
        e
    },
    i.info_res_icon_i = function() {
        var e = new eui.Image;
        return this.info_res_icon = e,
        e.height = 118,
        e.source = "team_info_info_res_icon_png",
        e.width = 87,
        e.x = 369,
        e.y = 206,
        e
    },
    i.txtResLvl_i = function() {
        var e = new eui.Label;
        return this.txtResLvl = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "lv.1",
        e.textColor = 16777215,
        e.x = 398,
        e.y = 306,
        e
    },
    i.info_item_icon_i = function() {
        var e = new eui.Image;
        return this.info_item_icon = e,
        e.height = 115,
        e.source = "team_info_info_item_icon_png",
        e.width = 87,
        e.x = 259,
        e.y = 209,
        e
    },
    i.txtItemLvl_i = function() {
        var e = new eui.Label;
        return this.txtItemLvl = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "lv.1",
        e.textColor = 16777215,
        e.x = 288,
        e.y = 306,
        e
    },
    i.txtTeamName_i = function() {
        var e = new eui.Label;
        return this.txtTeamName = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队战队名称",
        e.textColor = 16777215,
        e.x = 115,
        e.y = 222,
        e
    },
    i.txtId_i = function() {
        var e = new eui.Label;
        return this.txtId = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "60324",
        e.textColor = 16777215,
        e.x = 143,
        e.y = 253,
        e
    },
    i.txtLvl_i = function() {
        var e = new eui.Label;
        return this.txtLvl = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "1/5",
        e.textColor = 16777215,
        e.x = 153,
        e.y = 281,
        e
    },
    i.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "1/70",
        e.textColor = 16777215,
        e.x = 148,
        e.y = 310,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队编号",
        e.textColor = 2971027,
        e.x = 29,
        e.y = 251,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队名称",
        e.textColor = 2971027,
        e.x = 29,
        e.y = 222,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队等级",
        e.textColor = 2971027,
        e.x = 29,
        e.y = 280,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队人数",
        e.textColor = 2971027,
        e.x = 29,
        e.y = 309,
        e
    },
    i.txtbg1_i = function() {
        var e = new eui.Image;
        return this.txtbg1 = e,
        e.height = 121,
        e.scale9Grid = new egret.Rectangle(13, 1, 14, 4),
        e.source = "team_info_txtbg1_png",
        e.width = 348,
        e.x = 242,
        e.y = 85,
        e
    },
    i.btnEdit_i = function() {
        var e = new eui.Image;
        return this.btnEdit = e,
        e.height = 26,
        e.source = "team_info_btnEdit_png",
        e.width = 26,
        e.x = 559,
        e.y = 88,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "黑体",
        e.size = 20,
        e.text = "战队公告",
        e.textColor = 2971027,
        e.x = 259,
        e.y = 91,
        e
    },
    i.txtNote_i = function() {
        var e = new eui.Label;
        return this.txtNote = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "战队公告战队公告战队公告战队公告战\n\n队公告战队公告战队公告战队公告战队\n\n公告战队公告战队公告",
        e.textColor = 3955336,
        e.x = 260,
        e.y = 128,
        e
    },
    i.line_i = function() {
        var e = new eui.Image;
        return this.line = e,
        e.height = 1,
        e.source = "team_info_line_png",
        e.width = 342,
        e.x = 242,
        e.y = 117,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamLogSkin.exml"] = window.TeamLogSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["reportbg", "txt16", "txt15", "txt14", "txt13", "txt12", "txt11"],
        this.height = 500,
        this.width = 639,
        this.elementsContent = [this.reportbg_i(), this.txt16_i(), this.txt15_i(), this.txt14_i(), this.txt13_i(), this.txt12_i(), this.txt11_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.reportbg_i = function() {
        var e = new eui.Image;
        return this.reportbg = e,
        e.height = 500,
        e.scale9Grid = new egret.Rectangle(10, 10, 10, 10),
        e.source = "team_reportbg_png",
        e.width = 639,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt16_i = function() {
        var e = new eui.Label;
        return this.txt16 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "[4月8日]",
        e.textColor = 16760097,
        e.x = 36,
        e.y = 23,
        e
    },
    i.txt15_i = function() {
        var e = new eui.Label;
        return this.txt15 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "裸出三级头完成了每日任务1，为战队增加了100战队资源。",
        e.textColor = 2538239,
        e.x = 112,
        e.y = 22,
        e
    },
    i.txt14_i = function() {
        var e = new eui.Label;
        return this.txt14 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "[4月8日]",
        e.textColor = 16760097,
        e.x = 36,
        e.y = 53,
        e
    },
    i.txt13_i = function() {
        var e = new eui.Label;
        return this.txt13 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "战队成员甲加入了战队。",
        e.textColor = 2538239,
        e.x = 112,
        e.y = 52,
        e
    },
    i.txt12_i = function() {
        var e = new eui.Label;
        return this.txt12 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "[4月8日]",
        e.textColor = 16760097,
        e.x = 36,
        e.y = 83,
        e
    },
    i.txt11_i = function() {
        var e = new eui.Label;
        return this.txt11 = e,
        e.fontFamily = "黑体",
        e.size = 16,
        e.text = "战队成员甲被提升为管理员。",
        e.textColor = 2538239,
        e.x = 112,
        e.y = 82,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamMemberItermRenderSkin.exml"] = window.TeamMemberItermRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["memberbg", "star", "txtStatus", "txtContribution", "txtTitle", "txtName"],
        this.height = 31,
        this.width = 657,
        this.elementsContent = [this.memberbg_i(), this.star_i(), this.txtStatus_i(), this.txtContribution_i(), this.txtTitle_i(), this.txtName_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.memberbg_i = function() {
        var e = new eui.Image;
        return this.memberbg = e,
        e.height = 29,
        e.source = "team_memberbg_png",
        e.width = 657,
        e.x = -.26,
        e.y = 1.01,
        e
    },
    i.star_i = function() {
        var e = new eui.Image;
        return this.star = e,
        e.height = 26,
        e.source = "team_star_png",
        e.width = 28,
        e.x = 18,
        e.y = 2,
        e
    },
    i.txtStatus_i = function() {
        var e = new eui.Label;
        return this.txtStatus = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "在线",
        e.textAlign = "center",
        e.textColor = 9828353,
        e.width = 96,
        e.x = 533,
        e.y = 7,
        e
    },
    i.txtContribution_i = function() {
        var e = new eui.Label;
        return this.txtContribution = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "200（2000）",
        e.textAlign = "center",
        e.textColor = 14217215,
        e.width = 179,
        e.x = 300,
        e.y = 7,
        e
    },
    i.txtTitle_i = function() {
        var e = new eui.Label;
        return this.txtTitle = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "队长",
        e.textAlign = "center",
        e.textColor = 14217215,
        e.width = 56,
        e.x = 207,
        e.y = 7,
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "黑体",
        e.size = 18,
        e.text = "裸出三级头",
        e.textColor = 14217215,
        e.x = 47,
        e.y = 7,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamMembersSkin.exml"] = window.TeamMembersSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "_list", "_scroller"],
        this.height = 516,
        this.width = 659,
        this.elementsContent = [this.title_i(), this._scroller_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.height = 32,
        e.source = "team_title_png",
        e.width = 659,
        e.x = 0,
        e.y = 0,
        e
    },
    i._scroller_i = function() {
        var e = new eui.Scroller;
        return this._scroller = e,
        e.anchorOffsetY = 0,
        e.height = 468,
        e.width = 657,
        e.x = 1,
        e.y = 42,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.height = 468,
        e.width = 657,
        e.elementsContent = [this._list_i()],
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 468,
        e.itemRendererSkinName = TeamMemberItermRenderSkin,
        e.width = 657,
        e.layout = this._VerticalLayout1_i(),
        e.dataProvider = this._ArrayCollection1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e
    },
    i._ArrayCollection1_i = function() {
        var e = new eui.ArrayCollection;
        return e.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()],
        e
    },
    i._Object1_i = function() {
        var e = {};
        return e.nick = "aa",
        e.priv = "1",
        e.privString = "管理员",
        e.todayContri = "100",
        e
    },
    i._Object2_i = function() {
        var e = {};
        return e.nick = "bb",
        e.priv = "2",
        e.privString = "队员",
        e.todayContri = "200",
        e
    },
    i._Object3_i = function() {
        var e = {};
        return e
    },
    i._Object4_i = function() {
        var e = {};
        return e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamPlaySkin.exml"] = window.TeamPlaySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["img_task", "teamTask_red", "sItem_0", "img_boss", "txt_bossLeaveTime", "bossLimit", "teamBoss_red", "teamBossNoOpen", "sItem_1", "img_quartermaster", "txt_traderLeaveTime", "traderLimit", "teamTrader_red", "teamTraderNoOpen", "sItem_2", "img_coming"],
        this.height = 356,
        this.width = 620,
        this.elementsContent = [this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 356,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "off",
        e.width = 620,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this.sItem_0_i(), this.sItem_1_i(), this.sItem_2_i(), this.img_coming_i()],
        e
    },
    i.sItem_0_i = function() {
        var e = new eui.Group;
        return this.sItem_0 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.img_task_i(), this.teamTask_red_i()],
        e
    },
    i.img_task_i = function() {
        var e = new eui.Image;
        return this.img_task = e,
        e.height = 176,
        e.source = "team_play_img_task_png",
        e.width = 308,
        e.x = 0,
        e.y = 0,
        e
    },
    i.teamTask_red_i = function() {
        var e = new eui.Image;
        return this.teamTask_red = e,
        e.source = "dot_png",
        e.visible = !1,
        e.x = 280,
        e.y = 0,
        e
    },
    i.sItem_1_i = function() {
        var e = new eui.Group;
        return this.sItem_1 = e,
        e.visible = !0,
        e.x = 312,
        e.y = 0,
        e.elementsContent = [this.img_boss_i(), this.bossLimit_i(), this.teamBoss_red_i(), this.teamBossNoOpen_i()],
        e
    },
    i.img_boss_i = function() {
        var e = new eui.Image;
        return this.img_boss = e,
        e.height = 176,
        e.source = "team_play_img_boss_png",
        e.visible = !0,
        e.width = 308,
        e.x = 0,
        e.y = 0,
        e
    },
    i.bossLimit_i = function() {
        var e = new eui.Group;
        return this.bossLimit = e,
        e.x = 150,
        e.y = 5,
        e.elementsContent = [this._Image1_i(), this.txt_bossLeaveTime_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_clocktime_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.txt_bossLeaveTime_i = function() {
        var e = new eui.Label;
        return this.txt_bossLeaveTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "13天15小时",
        e.textColor = 16777215,
        e.x = 40,
        e.y = 10,
        e
    },
    i.teamBoss_red_i = function() {
        var e = new eui.Image;
        return this.teamBoss_red = e,
        e.source = "dot_png",
        e.x = 268,
        e.y = 0,
        e
    },
    i.teamBossNoOpen_i = function() {
        var e = new eui.Image;
        return this.teamBossNoOpen = e,
        e.height = 158,
        e.source = "team_play_flag_close_png",
        e.visible = !1,
        e.width = 290,
        e.x = 9,
        e.y = 9,
        e
    },
    i.sItem_2_i = function() {
        var e = new eui.Group;
        return this.sItem_2 = e,
        e.visible = !0,
        e.x = 0,
        e.y = 180,
        e.elementsContent = [this.img_quartermaster_i(), this.traderLimit_i(), this.teamTrader_red_i(), this.teamTraderNoOpen_i()],
        e
    },
    i.img_quartermaster_i = function() {
        var e = new eui.Image;
        return this.img_quartermaster = e,
        e.height = 176,
        e.source = "team_play_img_quartermaster_png",
        e.width = 308,
        e.x = 0,
        e.y = 0,
        e
    },
    i.traderLimit_i = function() {
        var e = new eui.Group;
        return this.traderLimit = e,
        e.x = 150,
        e.y = 5,
        e.elementsContent = [this._Image2_i(), this.txt_traderLeaveTime_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "team_clocktime_png",
        e.visible = !0,
        e.x = 10,
        e.y = 0,
        e
    },
    i.txt_traderLeaveTime_i = function() {
        var e = new eui.Label;
        return this.txt_traderLeaveTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "13天15小时",
        e.textColor = 16777215,
        e.x = 40,
        e.y = 10,
        e
    },
    i.teamTrader_red_i = function() {
        var e = new eui.Image;
        return this.teamTrader_red = e,
        e.source = "dot_png",
        e.x = 280,
        e.y = 0,
        e
    },
    i.teamTraderNoOpen_i = function() {
        var e = new eui.Image;
        return this.teamTraderNoOpen = e,
        e.height = 158,
        e.source = "team_play_flag_close_png",
        e.visible = !0,
        e.width = 290,
        e.x = 9,
        e.y = 9,
        e
    },
    i.img_coming_i = function() {
        var e = new eui.Image;
        return this.img_coming = e,
        e.height = 176,
        e.source = "team_play_img_coming_png",
        e.width = 308,
        e.x = 312,
        e.y = 180,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamSkin.exml"] = window.TeamSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "rightbg", "teamMember", "teamDevice", "teamPlay", "btn_device", "btn_info", "btn_play", "teamPlay_red", "btnSave1", "btnEdit1", "txtNotice", "btnUp", "btnManage", "headbg", "btnSave", "btnEdit", "txtTeamName", "txt_id", "txtLvl", "txtCount", "txt_resource", "txtLeaderName", "txt_manager_0", "grp_manager_0", "txt_manager_1", "grp_manager_1", "txt_manager_2", "grp_manager_2", "txtSlogan", "grpContent", "txtCount_0", "txtCount_1", "icon_0", "icon_1", "grp_itemCount"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this._Image1_i(), this.grpContent_i(), this.grp_itemCount_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_device_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_device_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)])]
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_member_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_member_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)])]
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
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "team_play_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "team_play_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)])]
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
    r = t.prototype;
    return r.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.horizontalCenter = 0,
        e.source = "blurry_base_bg_jpg",
        e.verticalCenter = 0,
        e.visible = !0,
        e
    },
    r._Image1_i = function() {
        var e = new eui.Image;
        return e.scale9Grid = new egret.Rectangle(379, 213, 378, 214),
        e.source = "blurry_base_bgmask_png",
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    r.grpContent_i = function() {
        var e = new eui.Group;
        return this.grpContent = e,
        e.horizontalCenter = 8,
        e.y = 69,
        e.elementsContent = [this.rightbg_i(), this.teamMember_i(), this.teamDevice_i(), this.teamPlay_i(), this._Group1_i(), this._Group2_i(), this._Group8_i(), this.txtSlogan_i()],
        e
    },
    r.rightbg_i = function() {
        var e = new eui.Image;
        return this.rightbg = e,
        e.height = 387,
        e.scale9Grid = new egret.Rectangle(7, 88, 6, 8),
        e.source = "team_rightbg_png",
        e.visible = !0,
        e.width = 657,
        e.x = 367,
        e.y = 126,
        e
    },
    r.teamMember_i = function() {
        var e = new team.TeamManageMembers;
        return this.teamMember = e,
        e.height = 380,
        e.skinName = "TeamManageMembersSKin",
        e.visible = !0,
        e.width = 655,
        e.x = 368,
        e.y = 126,
        e
    },
    r.teamDevice_i = function() {
        var e = new team.TeamDevice;
        return this.teamDevice = e,
        e.skinName = "TeamDeviceSkin",
        e.visible = !1,
        e.x = 390,
        e.y = 141,
        e
    },
    r.teamPlay_i = function() {
        var e = new team.TeamPlay;
        return this.teamPlay = e,
        e.skinName = "TeamPlaySkin",
        e.visible = !1,
        e.x = 388,
        e.y = 141,
        e
    },
    r._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 1024,
        e.y = 126,
        e.elementsContent = [this.btn_device_i(), this.btn_info_i(), this.btn_play_i(), this.teamPlay_red_i()],
        e
    },
    r.btn_device_i = function() {
        var e = new eui.RadioButton;
        return this.btn_device = e,
        e.groupName = "team_content",
        e.value = "2",
        e.x = 0,
        e.y = 0,
        e.skinName = i,
        e
    },
    r.btn_info_i = function() {
        var e = new eui.RadioButton;
        return this.btn_info = e,
        e.groupName = "team_content",
        e.value = "0",
        e.x = 0,
        e.y = 120,
        e.skinName = n,
        e
    },
    r.btn_play_i = function() {
        var e = new eui.RadioButton;
        return this.btn_play = e,
        e.groupName = "team_content",
        e.value = "1",
        e.visible = !0,
        e.x = 0,
        e.y = 240,
        e.skinName = a,
        e
    },
    r.teamPlay_red_i = function() {
        var e = new eui.Image;
        return this.teamPlay_red = e,
        e.height = 25,
        e.source = "dot_png",
        e.width = 25,
        e.x = 25,
        e.y = 235,
        e
    },
    r._Group2_i = function() {
        var e = new eui.Group;
        return e.x = 368,
        e.y = 27,
        e.elementsContent = [this._Image2_i(), this.btnSave1_i(), this.btnEdit1_i(), this._Image3_i(), this._Label1_i(), this.txtNotice_i()],
        e
    },
    r._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 85,
        e.scale9Grid = new egret.Rectangle(6, 5, 4, 4),
        e.source = "team_txtbg2_png",
        e.width = 695,
        e.x = 0,
        e.y = 0,
        e
    },
    r.btnSave1_i = function() {
        var e = new eui.Image;
        return this.btnSave1 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_btnSave_png",
        e.x = 665,
        e.y = 10,
        e
    },
    r.btnEdit1_i = function() {
        var e = new eui.Image;
        return this.btnEdit1 = e,
        e.height = 17,
        e.source = "team_btnEdit_png",
        e.width = 15,
        e.x = 665,
        e.y = 10,
        e
    },
    r._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "team_line_png",
        e.width = 668,
        e.x = 13,
        e.y = 37,
        e
    },
    r._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "战队公告",
        e.textColor = 4173823,
        e.x = 18,
        e.y = 10,
        e
    },
    r.txtNotice_i = function() {
        var e = new eui.EditableText;
        return this.txtNotice = e,
        e.fontFamily = "MFShangHei",
        e.multiline = !0,
        e.size = 16,
        e.text = "战队公告战队公告战队公告战队公告战队公告战队公告战队公告战队公告",
        e.textColor = 13757439,
        e.width = 662.295,
        e.x = 16,
        e.y = 53,
        e
    },
    r._Group8_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.btnUp_i(), this.btnManage_i(), this.headbg_i(), this._Label2_i(), this.btnSave_i(), this.btnEdit_i(), this.txtTeamName_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this._Image7_i(), this._Group3_i(), this._Group4_i(), this._Group5_i(), this._Group6_i(), this._Group7_i(), this.grp_manager_0_i(), this.grp_manager_1_i(), this.grp_manager_2_i()],
        e
    },
    r.btnUp_i = function() {
        var e = new eui.Image;
        return this.btnUp = e,
        e.height = 46,
        e.source = "team_btnUp_png",
        e.width = 134,
        e.x = 29,
        e.y = 479,
        e
    },
    r.btnManage_i = function() {
        var e = new eui.Image;
        return this.btnManage = e,
        e.height = 46,
        e.source = "team_main_btnManage_png",
        e.width = 134,
        e.x = 181,
        e.y = 479,
        e
    },
    r.headbg_i = function() {
        var e = new eui.Image;
        return this.headbg = e,
        e.height = 110,
        e.source = "team_headbg_png",
        e.visible = !0,
        e.width = 339,
        e.x = 0,
        e.y = 0,
        e
    },
    r._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "战队口号:",
        e.textColor = 4173823,
        e.x = 121.986,
        e.y = 63.911,
        e
    },
    r.btnSave_i = function() {
        var e = new eui.Image;
        return this.btnSave = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_btnSave_png",
        e.x = 319.394,
        e.y = 63.799,
        e
    },
    r.btnEdit_i = function() {
        var e = new eui.Image;
        return this.btnEdit = e,
        e.height = 17,
        e.source = "team_btnEdit_png",
        e.width = 15,
        e.x = 319.394,
        e.y = 63.799,
        e
    },
    r.txtTeamName_i = function() {
        var e = new eui.Label;
        return this.txtTeamName = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "战队名称五",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.width = 170,
        e.x = 148,
        e.y = 27,
        e
    },
    r._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 310,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_txtbg_s9_png",
        e.visible = !0,
        e.width = 335,
        e.x = 4,
        e.y = 152,
        e
    },
    r._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 33,
        e.source = "team_rect_png",
        e.width = 339,
        e.x = 4,
        e.y = 436,
        e
    },
    r._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "team_info_png",
        e.x = 0,
        e.y = 121,
        e
    },
    r._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 84,
        e.source = "team_logo_png",
        e.visible = !0,
        e.width = 84,
        e.x = 13,
        e.y = 15,
        e
    },
    r._Group3_i = function() {
        var e = new eui.Group;
        return e.width = 298,
        e.x = 19,
        e.y = 160.96,
        e.elementsContent = [this.txt_id_i(), this._Label3_i(), this._Image8_i()],
        e
    },
    r.txt_id_i = function() {
        var e = new eui.Label;
        return this.txt_id = e,
        e.fontFamily = "MFShangHei",
        e.right = 4,
        e.size = 18,
        e.text = "1234567890",
        e.textColor = 16777215,
        e.y = 7,
        e
    },
    r._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队编号：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 7,
        e
    },
    r._Image8_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_id_png",
        e.x = -1.718,
        e.y = 0,
        e
    },
    r._Group4_i = function() {
        var e = new eui.Group;
        return e.height = 30,
        e.width = 298,
        e.x = 19,
        e.y = 196.696,
        e.elementsContent = [this.txtLvl_i(), this._Label4_i(), this._Image9_i()],
        e
    },
    r.txtLvl_i = function() {
        var e = new eui.Label;
        return this.txtLvl = e,
        e.fontFamily = "MFShangHei",
        e.right = 5,
        e.size = 20,
        e.text = "5",
        e.textAlign = "right",
        e.textColor = 16777215,
        e.width = 106,
        e.y = 7.64,
        e
    },
    r._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队等级：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 7.64,
        e
    },
    r._Image9_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_level_png",
        e.x = -13.708,
        e.y = -10.914,
        e
    },
    r._Group5_i = function() {
        var e = new eui.Group;
        return e.width = 298,
        e.x = 19,
        e.y = 234.684,
        e.elementsContent = [this.txtCount_i(), this._Label5_i(), this._Image10_i()],
        e
    },
    r.txtCount_i = function() {
        var e = new eui.Label;
        return this.txtCount = e,
        e.fontFamily = "MFShangHei",
        e.right = 2,
        e.size = 18,
        e.text = "50/100",
        e.textColor = 16777215,
        e.y = 8,
        e
    },
    r._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队人数：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 8,
        e
    },
    r._Image10_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_member_png",
        e.x = -2.718,
        e.y = 0,
        e
    },
    r._Group6_i = function() {
        var e = new eui.Group;
        return e.height = 37,
        e.width = 298,
        e.x = 19,
        e.y = 272.143,
        e.elementsContent = [this.txt_resource_i(), this._Label6_i(), this._Image11_i()],
        e
    },
    r.txt_resource_i = function() {
        var e = new eui.Label;
        return this.txt_resource = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "100000000",
        e.textColor = 16777215,
        e.verticalCenter = .5,
        e
    },
    r._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队资源：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 10,
        e
    },
    r._Image11_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_resource_png",
        e.x = -5,
        e.y = 0,
        e
    },
    r._Group7_i = function() {
        var e = new eui.Group;
        return e.width = 298,
        e.x = 19,
        e.y = 315.081,
        e.elementsContent = [this.txtLeaderName_i(), this._Label7_i(), this._Image12_i()],
        e
    },
    r.txtLeaderName_i = function() {
        var e = new eui.Label;
        return this.txtLeaderName = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "昵称有五个子",
        e.textColor = 16777215,
        e.y = 7,
        e
    },
    r._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队指挥：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 7,
        e
    },
    r._Image12_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_leader_png",
        e.x = -5,
        e.y = 0,
        e
    },
    r.grp_manager_0_i = function() {
        var e = new eui.Group;
        return this.grp_manager_0 = e,
        e.width = 298,
        e.x = 19,
        e.y = 354.541,
        e.elementsContent = [this.txt_manager_0_i(), this._Label8_i(), this._Image13_i()],
        e
    },
    r.txt_manager_0_i = function() {
        var e = new eui.Label;
        return this.txt_manager_0 = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "昵称有五个子",
        e.textColor = 16777215,
        e.y = 4,
        e
    },
    r._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队管理：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 4,
        e
    },
    r._Image13_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_manage_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.grp_manager_1_i = function() {
        var e = new eui.Group;
        return this.grp_manager_1 = e,
        e.width = 298,
        e.x = 19,
        e.y = 389.827,
        e.elementsContent = [this.txt_manager_1_i(), this._Label9_i(), this._Image14_i()],
        e
    },
    r.txt_manager_1_i = function() {
        var e = new eui.Label;
        return this.txt_manager_1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "昵称有五个子",
        e.textColor = 16777215,
        e.y = 4,
        e
    },
    r._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队管理：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 4,
        e
    },
    r._Image14_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_manage_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.grp_manager_2_i = function() {
        var e = new eui.Group;
        return this.grp_manager_2 = e,
        e.width = 298,
        e.x = 19,
        e.y = 426.112,
        e.elementsContent = [this.txt_manager_2_i(), this._Label10_i(), this._Image15_i()],
        e
    },
    r.txt_manager_2_i = function() {
        var e = new eui.Label;
        return this.txt_manager_2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 0,
        e.size = 18,
        e.text = "昵称有五个子",
        e.textColor = 16777215,
        e.y = 4,
        e
    },
    r._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队管理：",
        e.textColor = 4173823,
        e.x = 39,
        e.y = 4,
        e
    },
    r._Image15_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_icon_manage_png",
        e.x = 0,
        e.y = 0,
        e
    },
    r.txtSlogan_i = function() {
        var e = new eui.EditableText;
        return this.txtSlogan = e,
        e.fontFamily = "MFShangHei",
        e.height = 32,
        e.multiline = !0,
        e.size = 16,
        e.text = "战队口号战队口号战队口号战队口号战队口号",
        e.textAlign = "left",
        e.textColor = 13757439,
        e.verticalAlign = "middle",
        e.width = 196.331,
        e.wordWrap = !0,
        e.x = 120.011,
        e.y = 85.543,
        e
    },
    r.grp_itemCount_i = function() {
        var e = new eui.Group;
        return this.grp_itemCount = e,
        e.cacheAsBitmap = !0,
        e.height = 26,
        e.right = 33,
        e.width = 340,
        e.y = 12,
        e.elementsContent = [this._Image16_i(), this.txtCount_0_i(), this._Image17_i(), this.txtCount_1_i(), this.icon_0_i(), this.icon_1_i()],
        e
    },
    r._Image16_i = function() {
        var e = new eui.Image;
        return e.source = "team_item_bg_png",
        e.x = 22,
        e.y = 2,
        e
    },
    r.txtCount_0_i = function() {
        var e = new eui.Label;
        return this.txtCount_0 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -80,
        e.size = 18,
        e.text = "34420",
        e.textColor = 12834813,
        e.y = 4,
        e
    },
    r._Image17_i = function() {
        var e = new eui.Image;
        return e.source = "team_item_bg_png",
        e.x = 207,
        e.y = 2,
        e
    },
    r.txtCount_1_i = function() {
        var e = new eui.Label;
        return this.txtCount_1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 108,
        e.size = 18,
        e.text = "684915",
        e.textColor = 12834813,
        e.y = 4,
        e
    },
    r.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 45,
        e.width = 45,
        e.x = 0,
        e.y = -9,
        e
    },
    r.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 30,
        e.width = 30,
        e.x = 192,
        e.y = -2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/TeamUpgradeSkin.exml"] = window.TeamUpgradeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "txt_drawing", "txtNeedRes", "flag_true", "flag_false", "drawing_icon", "txt_maxLevel", "grp_upgrade", "flag_max", "txtLevel", "txtRes", "btnUpgrade", "txt0", "btnBuy1", "exchenged_0", "item1", "txt1", "btnBuy2", "exchenged_1", "item2", "txt2", "btnBuy3", "exchenged_2", "item3", "txt3", "btnBuy4", "exchenged_3", "item4"],
        this.height = 551,
        this.width = 999,
        this.elementsContent = [this._Group1_i(), this._Image3_i(), this._Image4_i(), this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i(), this.grp_upgrade_i(), this.flag_max_i(), this._Image11_i(), this._Label7_i(), this.txtLevel_i(), this.txtRes_i(), this._Image12_i(), this.btnUpgrade_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "team_upgrade_title_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 957,
        e.y = 5,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 212,
        e.source = "team_upgrade_setbg_s9_png",
        e.width = 920,
        e.x = 38,
        e.y = 57,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 243,
        e.source = "team_upgrade_setbg_s9_png",
        e.width = 920,
        e.x = 38,
        e.y = 274,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "建设图纸",
        e.textColor = 4175861,
        e.x = 466,
        e.y = 74,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "Ⅰ",
        e.textColor = 4175861,
        e.x = 442,
        e.y = 75,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "开始升级",
        e.textColor = 4175861,
        e.visible = !0,
        e.x = 466,
        e.y = 292,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "HuaKangXinZongYi",
        e.size = 20,
        e.text = "Ⅱ",
        e.textColor = 4175861,
        e.x = 442,
        e.y = 292,
        e
    },
    i.grp_upgrade_i = function() {
        var e = new eui.Group;
        return this.grp_upgrade = e,
        e.visible = !0,
        e.x = 95,
        e.y = 328,
        e.elementsContent = [this._Image5_i(), this._Image6_i(), this.txt_drawing_i(), this.txtNeedRes_i(), this.flag_true_i(), this.flag_false_i(), this._Image7_i(), this.drawing_icon_i(), this._Label5_i(), this._Image8_i(), this.txt_maxLevel_i(), this._Label6_i(), this._Image9_i(), this._Image10_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_upgrade_txtbg_png",
        e.width = 243,
        e.x = 110,
        e.y = 0,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_upgrade_txtbg_png",
        e.width = 243,
        e.x = 110,
        e.y = 54,
        e
    },
    i.txt_drawing_i = function() {
        var e = new eui.Label;
        return this.txt_drawing = e,
        e.size = 18,
        e.text = "2级建设图纸",
        e.textColor = 7461887,
        e.x = 178,
        e.y = 13,
        e
    },
    i.txtNeedRes_i = function() {
        var e = new eui.Label;
        return this.txtNeedRes = e,
        e.size = 18,
        e.text = "战队资源8888",
        e.textColor = 7461887,
        e.x = 178,
        e.y = 67,
        e
    },
    i.flag_true_i = function() {
        var e = new eui.Image;
        return this.flag_true = e,
        e.height = 22,
        e.source = "team_upgrade_flag_true_png",
        e.width = 22,
        e.x = 312,
        e.y = 10,
        e
    },
    i.flag_false_i = function() {
        var e = new eui.Image;
        return this.flag_false = e,
        e.height = 22,
        e.source = "team_upgrade_flag_false_png",
        e.width = 22,
        e.x = 312,
        e.y = 64,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.height = 36,
        e.source = "team_upgrade_res_icon_png",
        e.width = 38,
        e.x = 125,
        e.y = 57,
        e
    },
    i.drawing_icon_i = function() {
        var e = new eui.Image;
        return this.drawing_icon = e,
        e.height = 32,
        e.source = "team_res_icon_drawing_2_png",
        e.width = 42,
        e.x = 123,
        e.y = 5,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "升至下一级\n需要",
        e.textAlign = "center",
        e.textColor = 11389439,
        e.x = 0,
        e.y = 30,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 42,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "team_upgrade_txtbg_png",
        e.width = 277,
        e.x = 519,
        e.y = 27,
        e
    },
    i.txt_maxLevel_i = function() {
        var e = new eui.Label;
        return this.txt_maxLevel = e,
        e.size = 18,
        e.text = "设施等级上线提升至0",
        e.textColor = 7461887,
        e.x = 578,
        e.y = 40,
        e
    },
    i._Label6_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "升至下一级\n可获得",
        e.textAlign = "center",
        e.textColor = 11389439,
        e.x = 408,
        e.y = 30,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 43,
        e.source = "team_res_arrows_png",
        e.width = 28,
        e.x = 373,
        e.y = 25,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 16,
        e.source = "team_upgrade_iconLv_png",
        e.width = 25,
        e.x = 544,
        e.y = 41,
        e
    },
    i.flag_max_i = function() {
        var e = new eui.Image;
        return this.flag_max = e,
        e.height = 32,
        e.source = "team_upgrade_flag_max_png",
        e.visible = !1,
        e.width = 251,
        e.x = 369,
        e.y = 366,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 38,
        e.source = "team_res_needtxtbg_png",
        e.width = 795,
        e.x = 96,
        e.y = 445,
        e
    },
    i._Label7_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "当前战队等级：",
        e.textColor = 11389439,
        e.x = 339,
        e.y = 455,
        e
    },
    i.txtLevel_i = function() {
        var e = new eui.Label;
        return this.txtLevel = e,
        e.size = 20,
        e.text = "5/5",
        e.textColor = 7461887,
        e.x = 477,
        e.y = 455,
        e
    },
    i.txtRes_i = function() {
        var e = new eui.Label;
        return this.txtRes = e,
        e.size = 20,
        e.text = "99999",
        e.textColor = 7461887,
        e.x = 600,
        e.y = 455,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 25,
        e.source = "team_upgrade_res_icon_png",
        e.width = 27,
        e.x = 565,
        e.y = 452,
        e
    },
    i.btnUpgrade_i = function() {
        var e = new eui.Image;
        return this.btnUpgrade = e,
        e.height = 34,
        e.source = "team_upgrade_btnUpgrade_png",
        e.width = 87,
        e.x = 805,
        e.y = 447,
        e
    },
    i.item1_i = function() {
        var e = new eui.Group;
        return this.item1 = e,
        e.x = 96,
        e.y = 125,
        e.elementsContent = [this._Image13_i(), this._Label8_i(), this.txt0_i(), this._Image14_i(), this.btnBuy1_i(), this.exchenged_0_i(), this._Image15_i()],
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_rect_png",
        e.width = 113,
        e.x = 63,
        e.y = 25,
        e
    },
    i._Label8_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "2级建设图纸",
        e.textColor = 11389439,
        e.x = 64,
        e.y = 2,
        e
    },
    i.txt0_i = function() {
        var e = new eui.Label;
        return this.txt0 = e,
        e.size = 18,
        e.text = "9999",
        e.textColor = 7461887,
        e.x = 106,
        e.y = 27,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_res_icon_png",
        e.width = 23,
        e.x = 74,
        e.y = 25,
        e
    },
    i.btnBuy1_i = function() {
        var e = new eui.Image;
        return this.btnBuy1 = e,
        e.height = 34,
        e.source = "team_res_btnBuy_png",
        e.width = 148,
        e.x = 16,
        e.y = 73,
        e
    },
    i.exchenged_0_i = function() {
        var e = new eui.Image;
        return this.exchenged_0 = e,
        e.source = "team_upgrade_exchenged_png",
        e.visible = !0,
        e.x = 15,
        e.y = 67,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_res_icon_drawing_2_png",
        e.width = 53,
        e.x = 0,
        e.y = 0,
        e
    },
    i.item2_i = function() {
        var e = new eui.Group;
        return this.item2 = e,
        e.x = 305,
        e.y = 125,
        e.elementsContent = [this._Label9_i(), this._Image16_i(), this.txt1_i(), this.btnBuy2_i(), this.exchenged_1_i(), this._Image17_i(), this._Image18_i()],
        e
    },
    i._Label9_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "3级建设图纸",
        e.textColor = 11389439,
        e.x = 61,
        e.y = 2,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_rect_png",
        e.width = 113,
        e.x = 60,
        e.y = 25,
        e
    },
    i.txt1_i = function() {
        var e = new eui.Label;
        return this.txt1 = e,
        e.size = 18,
        e.text = "9999",
        e.textColor = 7461887,
        e.x = 103,
        e.y = 27,
        e
    },
    i.btnBuy2_i = function() {
        var e = new eui.Image;
        return this.btnBuy2 = e,
        e.height = 34,
        e.source = "team_res_btnBuy_png",
        e.width = 148,
        e.x = 13,
        e.y = 73,
        e
    },
    i.exchenged_1_i = function() {
        var e = new eui.Image;
        return this.exchenged_1 = e,
        e.source = "team_upgrade_exchenged_png",
        e.x = 15,
        e.y = 67,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_res_icon_png",
        e.width = 23,
        e.x = 70,
        e.y = 25,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_res_icon_drawing_3_png",
        e.width = 53,
        e.x = 0,
        e.y = 0,
        e
    },
    i.item3_i = function() {
        var e = new eui.Group;
        return this.item3 = e,
        e.x = 509,
        e.y = 125,
        e.elementsContent = [this._Label10_i(), this._Image19_i(), this.txt2_i(), this._Image20_i(), this.btnBuy3_i(), this._Image21_i(), this.exchenged_2_i()],
        e
    },
    i._Label10_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "4级建设图纸",
        e.textColor = 11389439,
        e.x = 62,
        e.y = 2,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_rect_png",
        e.width = 113,
        e.x = 61,
        e.y = 25,
        e
    },
    i.txt2_i = function() {
        var e = new eui.Label;
        return this.txt2 = e,
        e.size = 18,
        e.text = "9999",
        e.textColor = 7461887,
        e.x = 104,
        e.y = 27,
        e
    },
    i._Image20_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_res_icon_png",
        e.width = 23,
        e.x = 71,
        e.y = 25,
        e
    },
    i.btnBuy3_i = function() {
        var e = new eui.Image;
        return this.btnBuy3 = e,
        e.height = 34,
        e.source = "team_res_btnBuy_png",
        e.width = 148,
        e.x = 17,
        e.y = 73,
        e
    },
    i._Image21_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_res_icon_drawing_4_png",
        e.width = 53,
        e.x = 0,
        e.y = 0,
        e
    },
    i.exchenged_2_i = function() {
        var e = new eui.Image;
        return this.exchenged_2 = e,
        e.source = "team_upgrade_exchenged_png",
        e.x = 15,
        e.y = 67,
        e
    },
    i.item4_i = function() {
        var e = new eui.Group;
        return this.item4 = e,
        e.x = 718,
        e.y = 125,
        e.elementsContent = [this._Label11_i(), this._Image22_i(), this._Image23_i(), this.txt3_i(), this.btnBuy4_i(), this._Image24_i(), this.exchenged_3_i()],
        e
    },
    i._Label11_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "5级建设图纸",
        e.textColor = 11389439,
        e.x = 61,
        e.y = 2,
        e
    },
    i._Image22_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_rect_png",
        e.width = 113,
        e.x = 61,
        e.y = 25,
        e
    },
    i._Image23_i = function() {
        var e = new eui.Image;
        return e.height = 22,
        e.source = "team_upgrade_res_icon_png",
        e.width = 23,
        e.x = 71,
        e.y = 25,
        e
    },
    i.txt3_i = function() {
        var e = new eui.Label;
        return this.txt3 = e,
        e.size = 18,
        e.text = "9999",
        e.textColor = 7461887,
        e.x = 104,
        e.y = 27,
        e
    },
    i.btnBuy4_i = function() {
        var e = new eui.Image;
        return this.btnBuy4 = e,
        e.height = 34,
        e.source = "team_res_btnBuy_png",
        e.width = 148,
        e.x = 14,
        e.y = 73,
        e
    },
    i._Image24_i = function() {
        var e = new eui.Image;
        return e.height = 40,
        e.source = "team_res_icon_drawing_5_png",
        e.width = 53,
        e.x = 0,
        e.y = 0,
        e
    },
    i.exchenged_3_i = function() {
        var e = new eui.Image;
        return this.exchenged_3 = e,
        e.source = "team_upgrade_exchenged_png",
        e.x = 15,
        e.y = 67,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tech/TeamTechHeadItemSkin.exml"] = window.TeamTechHeadItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["head"],
        this.height = 116,
        this.width = 116,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.head_i(), this._Image3_i(), this._Image4_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("_Image4", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.visible = !0,
        e.width = 80,
        e.x = 18,
        e.y = 18,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.visible = !0,
        e.width = 80,
        e.x = 18,
        e.y = 19,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 80,
        e.width = 80,
        e.x = 18,
        e.y = 18,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "team_pet_head_frame_png",
        e.touchEnabled = !1,
        e.width = 80,
        e.x = 18,
        e.y = 18,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return this._Image4 = e,
        e.height = 116,
        e.source = "team_tech_head_item_selected_png",
        e.width = 116,
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tech/TeamTechItemSkin.exml"] = window.TeamTechItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "title", "txt_base", "txt_add", "img_selected"],
        this.height = 70,
        this.width = 339,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.title_i(), this.txt_base_i(), this._Label1_i(), this.txt_add_i(), this.img_selected_i()],
        this.states = [new eui.State("up", [new eui.SetProperty("img_selected", "visible", !1)]), new eui.State("down", [])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "team_tech_item_shuxingbg_png",
        e.x = 14,
        e.y = 14,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 24,
        e.source = "common_hp_png",
        e.width = 24,
        e.x = 25,
        e.y = 23,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "team_tech_hp_icon_png",
        e.x = 51,
        e.y = 27,
        e
    },
    i.txt_base_i = function() {
        var e = new eui.Label;
        return this.txt_base = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "999",
        e.textColor = 16774293,
        e.x = 112,
        e.y = 27,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前加成:",
        e.textColor = 12046335,
        e.x = 172,
        e.y = 27,
        e
    },
    i.txt_add_i = function() {
        var e = new eui.Label;
        return this.txt_add = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "20/20",
        e.textColor = 16774293,
        e.x = 257,
        e.y = 27,
        e
    },
    i.img_selected_i = function() {
        var e = new eui.Image;
        return this.img_selected = e,
        e.source = "team_tech_item_img_selected_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/tech/TeamTechSkin.exml"] = window.TeamTechSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "btnClose", "helpBtn_png", "countbg", "icon", "txt_count", "res_item", "txt_level", "btnEnhance", "txt_cost", "txtPetName", "txtTalent", "txtNature", "txtEffect", "txtPetLvl", "star_0", "star_1", "star_2", "star_3", "star_4", "list_attr", "list_head", "grp_content", "grp_none"],
        this.height = 551,
        this.width = 999,
        this.elementsContent = [this._Group1_i(), this.res_item_i(), this._Image3_i(), this.txt_level_i(), this.grp_content_i(), this.grp_none_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i(), this.title_i(), this.btnClose_i(), this.helpBtn_png_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "team_tech_title_png",
        e.x = 30,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 957,
        e.y = 5,
        e
    },
    i.helpBtn_png_i = function() {
        var e = new eui.Image;
        return this.helpBtn_png = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_help_png",
        e.x = 188,
        e.y = 7,
        e
    },
    i.res_item_i = function() {
        var e = new eui.Group;
        return this.res_item = e,
        e.x = 741,
        e.y = 4,
        e.elementsContent = [this.countbg_i(), this.icon_i(), this.txt_count_i()],
        e
    },
    i.countbg_i = function() {
        var e = new eui.Image;
        return this.countbg = e,
        e.source = "team_items_countbg_png",
        e.x = 14,
        e.y = 9,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 30,
        e.width = 30,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_count_i = function() {
        var e = new eui.Label;
        return this.txt_count = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 15,
        e.size = 18,
        e.textColor = 7461887,
        e.y = 9,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 407,
        e.source = "team_btnTech_png",
        e.width = 224,
        e.x = 41,
        e.y = 83,
        e
    },
    i.txt_level_i = function() {
        var e = new eui.Label;
        return this.txt_level = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "Lv.3",
        e.textColor = 4175861,
        e.x = 214,
        e.y = 439,
        e
    },
    i.grp_content_i = function() {
        var e = new eui.Group;
        return this.grp_content = e,
        e.visible = !0,
        e.x = 302,
        e.y = 74,
        e.elementsContent = [this._Image4_i(), this.btnEnhance_i(), this._Label1_i(), this.txt_cost_i(), this._Image5_i(), this.txtPetName_i(), this.txtTalent_i(), this._Label2_i(), this.txtNature_i(), this._Label3_i(), this.txtEffect_i(), this._Label4_i(), this.txtPetLvl_i(), this._Label5_i(), this.star_0_i(), this.star_1_i(), this.star_2_i(), this.star_3_i(), this.star_4_i(), this._Image6_i(), this.list_attr_i(), this.list_head_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "team_tech_rightbg_png",
        e.x = 1,
        e.y = 118,
        e
    },
    i.btnEnhance_i = function() {
        var e = new eui.Image;
        return this.btnEnhance = e,
        e.height = 46,
        e.source = "team_tech_btnEnhance_png",
        e.width = 134,
        e.x = 516,
        e.y = 357,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "强化需要贡献值：",
        e.textColor = 12046335,
        e.x = 311,
        e.y = 373,
        e
    },
    i.txt_cost_i = function() {
        var e = new eui.Label;
        return this.txt_cost = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "332",
        e.textColor = 7461887,
        e.x = 461,
        e.y = 374,
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 26,
        e.source = "team_tech_needtxtbg_png",
        e.width = 643,
        e.x = 9,
        e.y = 159,
        e
    },
    i.txtPetName_i = function() {
        var e = new eui.Label;
        return this.txtPetName = e,
        e.fontFamily = "REEJI",
        e.size = 24,
        e.text = "精灵名称",
        e.textColor = 4175861,
        e.x = 14,
        e.y = 128,
        e
    },
    i.txtTalent_i = function() {
        var e = new eui.Label;
        return this.txtTalent = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "31",
        e.textColor = 7461887,
        e.x = 203,
        e.y = 164,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "天赋：",
        e.textColor = 12046335,
        e.x = 153,
        e.y = 164,
        e
    },
    i.txtNature_i = function() {
        var e = new eui.Label;
        return this.txtNature = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "嚣张",
        e.textColor = 7461887,
        e.x = 328,
        e.y = 164,
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "性格:",
        e.textColor = 12046335,
        e.x = 280,
        e.y = 164,
        e
    },
    i.txtEffect_i = function() {
        var e = new eui.Label;
        return this.txtEffect = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "飞空",
        e.textColor = 7461887,
        e.x = 473,
        e.y = 164,
        e
    },
    i._Label4_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特性：",
        e.textColor = 12046335,
        e.x = 422,
        e.y = 164,
        e
    },
    i.txtPetLvl_i = function() {
        var e = new eui.Label;
        return this.txtPetLvl = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "10000",
        e.textColor = 7461887,
        e.x = 45,
        e.y = 164,
        e
    },
    i._Label5_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "Lv.",
        e.textColor = 12046335,
        e.x = 15,
        e.y = 164,
        e
    },
    i.star_0_i = function() {
        var e = new eui.Image;
        return this.star_0 = e,
        e.height = 20,
        e.source = "team_tech_star_on_png",
        e.width = 22,
        e.x = 520,
        e.y = 162,
        e
    },
    i.star_1_i = function() {
        var e = new eui.Image;
        return this.star_1 = e,
        e.height = 20,
        e.source = "team_tech_star_on_png",
        e.width = 22,
        e.x = 545,
        e.y = 162,
        e
    },
    i.star_2_i = function() {
        var e = new eui.Image;
        return this.star_2 = e,
        e.height = 20,
        e.source = "team_tech_star_on_png",
        e.width = 22,
        e.x = 570,
        e.y = 162,
        e
    },
    i.star_3_i = function() {
        var e = new eui.Image;
        return this.star_3 = e,
        e.height = 20,
        e.source = "team_tech_star_on_png",
        e.width = 22,
        e.x = 595,
        e.y = 162,
        e
    },
    i.star_4_i = function() {
        var e = new eui.Image;
        return this.star_4 = e,
        e.height = 20,
        e.source = "team_tech_star_off_png",
        e.width = 22,
        e.x = 620,
        e.y = 162,
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.height = 1,
        e.source = "team_res_line_png",
        e.width = 665,
        e.x = 9,
        e.y = 159,
        e
    },
    i.list_attr_i = function() {
        var e = new eui.List;
        return this.list_attr = e,
        e.height = 170,
        e.width = 660,
        e.x = 0,
        e.y = 184,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -18,
        e.orientation = "rows",
        e.verticalGap = -20,
        e
    },
    i.list_head_i = function() {
        var e = new eui.List;
        return this.list_head = e,
        e.height = 116,
        e.width = 640,
        e.x = 9,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = -11,
        e
    },
    i.grp_none_i = function() {
        var e = new eui.Group;
        return this.grp_none = e,
        e.visible = !1,
        e.x = 301,
        e.y = 92,
        e.elementsContent = [this._Image7_i(), this._Image8_i(), this._Image9_i(), this._Image10_i(), this._Image11_i(), this._Image12_i(), this._Image13_i(), this._Image14_i(), this._Image15_i(), this._Image16_i(), this._Image17_i(), this._Image18_i(), this._Image19_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "team_tech_img_none_png",
        e.visible = !0,
        e.x = 0,
        e.y = 95,
        e
    },
    i._Image8_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 28,
        e.y = 0,
        e
    },
    i._Image9_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 28,
        e.y = 1,
        e
    },
    i._Image10_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 133,
        e.y = 0,
        e
    },
    i._Image11_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 133,
        e.y = 1,
        e
    },
    i._Image12_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 238,
        e.y = 0,
        e
    },
    i._Image13_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 238,
        e.y = 1,
        e
    },
    i._Image14_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 342,
        e.y = 0,
        e
    },
    i._Image15_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 342,
        e.y = 1,
        e
    },
    i._Image16_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 447,
        e.y = 0,
        e
    },
    i._Image17_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 447,
        e.y = 1,
        e
    },
    i._Image18_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_size_110_110_png",
        e.width = 80,
        e.x = 552,
        e.y = 0,
        e
    },
    i._Image19_i = function() {
        var e = new eui.Image;
        return e.height = 80,
        e.source = "common_pet_head_bg_null_size_100_100_png",
        e.width = 80,
        e.x = 552,
        e.y = 1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/trader/TeamNameChangeSkin.exml"] = window.TeamNameChangeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnXiugai", "txtSearch", "Txt_Name"],
        this.height = 203,
        this.width = 421,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this.btnXiugai_i(), this._Label1_i(), this._Image2_i(), this.txtSearch_i(), this.Txt_Name_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 203,
        e.scale9Grid = new egret.Rectangle(3, 1, 7, 11),
        e.source = "teamtrader_di_png",
        e.width = 421,
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnXiugai_i = function() {
        var e = new eui.Image;
        return this.btnXiugai = e,
        e.height = 46,
        e.source = "teamtrader_btnXiugai_png",
        e.width = 134,
        e.x = 140,
        e.y = 133,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "请输入新的战队名称",
        e.textColor = 13820671,
        e.x = 126,
        e.y = 38,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 29,
        e.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        e.source = "teamtrader_txtBg_png",
        e.width = 250,
        e.x = 82,
        e.y = 76,
        e
    },
    i.txtSearch_i = function() {
        var e = new eui.Label;
        return this.txtSearch = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "新名称新名称",
        e.textColor = 6388143,
        e.visible = !1,
        e.x = 153,
        e.y = 83,
        e
    },
    i.Txt_Name_i = function() {
        var e = new eui.EditableText;
        return this.Txt_Name = e,
        e.fontFamily = "MFShangHei",
        e.height = 20,
        e.lineSpacing = 3,
        e.prompt = "新名称新名称",
        e.promptColor = 8631026,
        e.size = 18,
        e.textAlign = "center",
        e.textColor = 6388143,
        e.visible = !0,
        e.width = 244,
        e.x = 85,
        e.y = 83,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/trader/TeamtraderRewardItemSkin.exml"] = window.TeamtraderRewardItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["rewardBg", "txt_rewardState", "txt_num", "num", "txtLabel", "buyicon", "btnbuy", "rewardIcon", "txt_name", "tag", "rewardItem"],
        this.height = 382,
        this.width = 210,
        this.elementsContent = [this.rewardItem_i()],
        this.states = [new eui.State("owner", [new eui.SetProperty("num", "visible", !1), new eui.SetProperty("rewardIcon", "width", 70), new eui.SetProperty("rewardIcon", "height", 70)]), new eui.State("other", [new eui.SetProperty("rewardBg", "source", "teamtrader_tongyongdi_png"), new eui.SetProperty("rewardBg", "x", 19), new eui.SetProperty("_Label1", "textColor", 8833258), new eui.SetProperty("buyicon", "source", "teamtrader_1722814_png"), new eui.SetProperty("buyicon", "width", 20), new eui.SetProperty("buyicon", "height", 20), new eui.SetProperty("txt_name", "textColor", 3888031), new eui.SetProperty("tag", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.rewardItem_i = function() {
        var e = new eui.Group;
        return this.rewardItem = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.rewardBg_i(), this._Label1_i(), this.txt_rewardState_i(), this.txt_num_i(), this.num_i(), this.btnbuy_i(), this.rewardIcon_i(), this.txt_name_i(), this.tag_i()],
        e
    },
    i.rewardBg_i = function() {
        var e = new eui.Image;
        return this.rewardBg = e,
        e.source = "teamtrader_zhuanshudi_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return this._Label1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "兑换道具",
        e.textColor = 16229889,
        e.x = 32,
        e.y = 64,
        e
    },
    i.txt_rewardState_i = function() {
        var e = new eui.Label;
        return this.txt_rewardState = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "本期限兑：",
        e.textColor = 16185855,
        e.x = 52,
        e.y = 5,
        e
    },
    i.txt_num_i = function() {
        var e = new eui.Label;
        return this.txt_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "0/1",
        e.textColor = 16776211,
        e.x = 138,
        e.y = 5,
        e
    },
    i.num_i = function() {
        var e = new eui.Label;
        return this.num = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.stroke = 1,
        e.strokeColor = 16777215,
        e.text = "x1",
        e.textAlign = "center",
        e.textColor = 3888031,
        e.width = 64,
        e.x = 122,
        e.y = 222.743,
        e
    },
    i.btnbuy_i = function() {
        var e = new eui.Group;
        return this.btnbuy = e,
        e.x = 40,
        e.y = 319,
        e.elementsContent = [this._Image1_i(), this.txtLabel_i(), this.buyicon_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "9999",
        e.textAlign = "center",
        e.textColor = 10181146,
        e.width = 60,
        e.x = 50,
        e.y = 13,
        e
    },
    i.buyicon_i = function() {
        var e = new eui.Image;
        return this.buyicon = e,
        e.height = 20,
        e.source = "teamtrader_ziyuanicon_png",
        e.width = 20,
        e.x = 24,
        e.y = 14,
        e
    },
    i.rewardIcon_i = function() {
        var e = new eui.Image;
        return this.rewardIcon = e,
        e.height = 70,
        e.source = "teamtrader_icon1_png",
        e.width = 70,
        e.x = 72,
        e.y = 167,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.bold = !0,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战队名称修改",
        e.textAlign = "center",
        e.textColor = 10180889,
        e.width = 165,
        e.x = 25,
        e.y = 84,
        e
    },
    i.tag_i = function() {
        var e = new eui.Image;
        return this.tag = e,
        e.source = "teamtrader_tag_png",
        e.x = 25,
        e.y = 290,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/trader/TeamtraderSkin.exml"] = window.TeamtraderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["title", "_list", "_scorl", "txt_traderLeaveTime", "grp_timeShow", "txtCount1", "icon_1", "res2", "txtCount2", "res1", "btnHelp", "btnClose"],
        this.height = 552,
        this.width = 1006,
        this.elementsContent = [this._Group1_i(), this.title_i(), this._Group2_i(), this.btnClose_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this._Image1_i(), this._Image2_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 547,
        e.source = "common_s9_pop_bg4_png",
        e.width = 998,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 49,
        e.source = "common_pop_up_bg_huge_png",
        e.width = 1006,
        e.x = -5,
        e.y = -3,
        e
    },
    i.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "teamtrader_yhgg_png",
        e.visible = !0,
        e.x = 28,
        e.y = -2,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 4,
        e.elementsContent = [this._Image3_i(), this._scorl_i(), this.grp_timeShow_i(), this.res2_i(), this.res1_i(), this.btnHelp_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.source = "teamtrader_topimg_png",
        e.x = 0,
        e.y = 35,
        e
    },
    i._scorl_i = function() {
        var e = new eui.Scroller;
        return this._scorl = e,
        e.height = 382,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 939,
        e.x = 16,
        e.y = 131,
        e.viewport = this._list_i(),
        e
    },
    i._list_i = function() {
        var e = new eui.List;
        return this._list = e,
        e.height = 200,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 200,
        e.x = 101,
        e.y = 131,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.grp_timeShow_i = function() {
        var e = new eui.Group;
        return this.grp_timeShow = e,
        e.cacheAsBitmap = !0,
        e.x = 807,
        e.y = 47,
        e.elementsContent = [this._Image4_i(), this.txt_traderLeaveTime_i()],
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "teamtrader_jjxglkhy_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_traderLeaveTime_i = function() {
        var e = new eui.Label;
        return this.txt_traderLeaveTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "13天15小时",
        e.textColor = 16514895,
        e.x = 58,
        e.y = 31,
        e
    },
    i.res2_i = function() {
        var e = new eui.Group;
        return this.res2 = e,
        e.cacheAsBitmap = !0,
        e.x = 789,
        e.y = 0,
        e.elementsContent = [this._Image5_i(), this.txtCount1_i(), this.icon_1_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "teamtrader_countbg_png",
        e.x = 8,
        e.y = 9,
        e
    },
    i.txtCount1_i = function() {
        var e = new eui.Label;
        return this.txtCount1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999999",
        e.textColor = 7461887,
        e.x = 39,
        e.y = 10,
        e
    },
    i.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.source = "teamtrader_1722814_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.res1_i = function() {
        var e = new eui.Group;
        return this.res1 = e,
        e.cacheAsBitmap = !0,
        e.visible = !0,
        e.x = 664,
        e.y = 4,
        e.elementsContent = [this._Image6_i(), this.txtCount2_i(), this._Image7_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.source = "teamtrader_countbg_png",
        e.x = 7,
        e.y = 5,
        e
    },
    i.txtCount2_i = function() {
        var e = new eui.Label;
        return this.txtCount2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "999999",
        e.textColor = 7461887,
        e.x = 38,
        e.y = 6,
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.source = "teamtrader_ziyuanicon_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnHelp_i = function() {
        var e = new eui.Image;
        return this.btnHelp = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "team_help_png",
        e.x = 180.00000000000003,
        e.y = 1,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_pop_btn_close_png",
        e.x = 958,
        e.y = 3,
        e
    },
    t
} (eui.Skin);