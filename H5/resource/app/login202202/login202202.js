var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n(e) {
            var n = t.call(this) || this;
            return n.serverList = [],
            n.recommList = [],
            n.startServerId = 1001,
            n.endServerId = 1500,
            n.iOSServerId = 1499,
            n.currServerId = 1001,
            n.service = e,
            n.skinName = "login202202.ServerListSkin",
            n.percentWidth = 100,
            n.width = egret.lifecycle.stage.stageWidth,
            n.arrayCollection = new eui.ArrayCollection,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            this.percentWidth = 100,
            this.width = egret.lifecycle.stage.stageWidth,
            this.addEvent(),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = e.ServerItemRender,
            this.list.dataProvider = this.arrayCollection,
            DeviceInfoManager.iOSChecking() && IS_RELEASE ? (this.currServerId = this.iOSServerId, this.endServerId = this.currServerId, EventManager.addEventListener(LoginEvent.SHOW_SERVER_LIST, this.onGetServerList, this), this.getServerList(this.currServerId)) : this.showServerList(),
            GameInfo.isChecking,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEnterServer, this),
            this.grpGO.right = this.grpGO.right + DeviceInfoManager.adapterOffSetX
        },
        n.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                var t = ~~e.txtServerNo.text;
                if (GameInfo.isChecking && 1499 == t) return void BubblerManager.getInstance().showText("服务器繁忙！");
                if (t > 0) {
                    if (DeviceInfoManager.iOSChecking() && IS_RELEASE) {
                        if (1499 != t) return void BubblerManager.getInstance().showText("请输入正确的服务器编号")
                    } else if (1499 == t) return void BubblerManager.getInstance().showText("请输入正确的服务器编号");
                    for (var n = 0,
                    i = e.serverList; n < i.length; n++) {
                        var r = i[n];
                        if (r.OnlineID == t) return void OnlineManager.getInstance().enterServer(r)
                    }
                    LoginSocketConnection.addCmdListener(CommandID.RANGE_ONLINE, e.findServer, e),
                    LoginSocketConnection.send(CommandID.RANGE_ONLINE, t, t, 0)
                } else BubblerManager.getInstance().showText("请输入正确的服务器编号")
            },
            this)
        },
        n.prototype.findServer = function(e) {
            var t = new RangeSvrInfo(e.data);
            return 0 == t.svrList.length ? void Alarm.show("服务器不存在！") : (LoginSocketConnection.removeCmdListener(CommandID.RANGE_ONLINE, this.findServer, this), void OnlineManager.getInstance().enterServer(t.svrList[0]))
        },
        n.prototype.showServerList = function() {
            this.visible = !0;
            for (var t = LoginManager2.allServiceInfo.svrList,
            n = 0,
            i = t; n < i.length; n++) {
                var r = i[n];
                r && 0 != r.onlineID && (r.onlineName = e.LoginService.getServerName(r.OnlineID), this.serverList.push(r), 1500 != r.OnlineID && 1501 != r.OnlineID && 1499 != r.OnlineID && this.arrayCollection.addItem(r), this.recommList.push(r.OnlineID))
            }
            EventManager.addEventListener(LoginEvent.SHOW_SERVER_LIST, this.onGetServerList, this),
            this.getServerList(this.currServerId),
            this.list.alpha = .4,
            egret.Tween.get(this.list).to({
                alpha: 1
            },
            400, egret.Ease.backOut)
        },
        n.prototype.getServerList = function(e) {
            LoginManager2.getRangeServer(e, e + 100)
        },
        n.prototype.onGetServerList = function(t) {
            this.currServerId += 100;
            var n = t.obj;
            n = n.sort(function(e, t) {
                return e.onlineID - t.onlineID
            });
            for (var i = 0,
            r = n; i < r.length; i++) {
                var o = r[i];
                if (o && 0 != o.onlineID && (o.onlineName = e.LoginService.getServerName(o.OnlineID), this.recommList.indexOf(o.OnlineID) < 0)) {
                    if (this.serverList.push(o), DeviceInfoManager.iOSChecking() && IS_RELEASE && 1499 === o.OnlineID) {
                        this.arrayCollection.addItem(o);
                        break
                    }
                    if (1500 === o.OnlineID || 1501 === o.OnlineID || 1499 === o.OnlineID) continue;
                    this.arrayCollection.addItem(o)
                }
            }
            this.currServerId < this.endServerId ? this.getServerList(this.currServerId) : EventManager.removeEventListener(LoginEvent.SHOW_SERVER_LIST, this.onGetServerList, this)
        },
        n.prototype.onEnterServer = function(e) {
            if (!this.service.cbAgreement.selected) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
            if (DeviceInfoManager.iOSChecking() && IS_RELEASE) {
                var t = 1499;
                LoginSocketConnection.sendAsync(CommandID.RANGE_ONLINE, t, t, 0).then(function(e) {
                    var t = new RangeSvrInfo(e.data);
                    return 0 == t.svrList.length ? void Alarm.show("服务器不存在！") : void OnlineManager.getInstance().enterServer(t.svrList[0])
                })
            } else {
                var n = this.list.selectedItem;
                SocketConnection.mainSocket.userID = LoginManager.userID,
                OnlineManager.getInstance().enterServer(n),
                StatLogger.log("1023版本系统功能", "登录界面", "点击选择服务器")
            }
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.ServerList = t,
    __reflect(t.prototype, "login202202.ServerList")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.showAnnouncementFlag = !1,
            e.skinName = "login202202.MainPanelSkin",
            SoundManager.loadSound().then(function() {
                egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_TAP,
                function() { (GameInfo.isApp || 1 != GameInfo.platform) && SoundManager.playMusic()
                },
                e)
            }),
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var t = this;
            this.addEvent(),
            this.grpPopContainer.touchEnabled = !1,
            this.grpService.touchEnabled = !1,
            this.grpService.cacheAsBitmap = !0,
            this.grpLastService.cacheAsBitmap = !0,
            this.start.cacheAsBitmap = !0,
            this.adaptRightContent(this.grpRight),
            GameInfo.isChecking && (this.btnNotice.visible = !1, this.btnCustCare.visible = !1),
            this.adaptBg(),
            e.MovieUtil.init(this),
            e.AgreementUtil.init(this),
            e.SkipMaintainUtil.init(this),
            e.LoginService.init(),
            e.HistoryUtil.init(this),
            this.initGameServer(),
            ZipManager.setup(),
            this.checkForceUpdate().then(function(n) {
                n ? (t.currPop = new e.PkgUpdateDialog(t, n), PopViewManager.getInstance().openView(t.currPop, t.getEmptyPopStyle())) : AnnouncementManager.getMaintain().then(function(n) {
                    if (t.touchChildren = !0, n) {
                        var i = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                        t.currPop = new e.MaintainsPop(i);
                        var r = PopViewManager.createDefaultStyleObject();
                        r.caller = t,
                        PopViewManager.getInstance().openView(t.currPop, r),
                        AnnouncementManager.getServerItems(),
                        StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截")
                    } else {
                        var o = egret.getOption("sid");
                        o ? (t.touchChildren = !1, LoginManager2.loginByWebSign(o).then(function() {
                            t.onShowAnnouncement(null),
                            t.onLoginGame(null),
                            t.touchChildren = !0
                        })["catch"](function() {
                            t.touchChildren = !0,
                            BubblerManager.getInstance().showText("代签失效"),
                            egret.setTimeout(function() {
                                TaomeeSDKManager.logout(function() {
                                    t.login(!1)
                                },
                                t)
                            },
                            t, 1e3)
                        })) : t.login(!0)
                    }
                })
            }),
            SoundManager.loadSound().then(function() {
                SoundManager.playMusic(),
                egret.lifecycle.stage.once(egret.TouchEvent.TOUCH_TAP,
                function() {
                    GameInfo.isApp || SoundManager.playMusic()
                },
                t)
            }),
            this.btnRepair.visible = GameInfo.isApp && GameInfo.platform == PlatformType.android,
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
            this.onResize()
        },
        n.prototype.onResize = function() {
            this.bgMask.width = egret.lifecycle.stage.stageWidth + 10,
            this.bgMask.height = egret.lifecycle.stage.stageHeight + 10
        },
        n.prototype.adaptBg = function() {
            this.bg.width < egret.lifecycle.stage.stageWidth && (this.bg.width = egret.lifecycle.stage.stageWidth)
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnYearTip,
            function() {
                PopViewManager.getInstance().openView(new e.LoginAgePop)
            },
            this),
            ImageButtonUtil.add(this.btnRepair,
            function() {
                TaomeeSDKManager.clearCache()
            },
            this),
            ImageButtonUtil.add(this.btnTrigger,
            function(e) {
                t.onStartGame(e)
            },
            this),
            ImageButtonUtil.add(this.btnStart, this.onStartGame, this),
            ImageButtonUtil.add(this.btnChange, this.showServerList, this),
            ImageButtonUtil.add(this.btnCustCare, this.showCustCare, this),
            ImageButtonUtil.add(this.btnNotice, this.showActivityAnnouncement, this),
            ImageButtonUtil.add(this.btnExchange, this.showAccountPop, this),
            EventManager.addEventListener(LoginEvent.ACCOUNT_LOGIN_SUCCESS, this.onLoginGame, this),
            EventManager.addEventListener(LoginEvent.SHOW_ANNOUNCEMENT, this.onShowAnnouncement, this),
            EventManager.addEventListener(LoginEvent.GAME_LOGIN_SUCCESS, this.onGameLoginSuccess, this)
        },
        n.prototype.showCustCare = function() {
            TaomeeSDKManager.customer()
        },
        n.prototype.showAccountPop = function() {
            var t = this;
            if (!e.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                var n = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                this.currPop = new e.MaintainsPop(n);
                var i = PopViewManager.createDefaultStyleObject();
                return i.caller = this,
                i.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(this.currPop, i),
                AnnouncementManager.getServerItems(),
                void StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截")
            }
            TaomeeSDKManager.logout(function() {
                t.login(!1)
            },
            this)
        },
        n.prototype.login = function(e) {
            var t = this;
            void 0 === e && (e = !1),
            LoginManager2.login(e).then(function(e) {
                return new Promise(function(t, n) {
                    0 == e ? (LoginManager2.sessionLogin(LoginManager2.currUserData), t(1)) : n(e)
                })
            }).then(function() {
                LoginManager2.hasAvatar = !0,
                LoginManager2.getRecommendSvrList().then(function() {
                    t.onShowAnnouncement(null),
                    t.onLoginGame(null)
                },
                function() {
                    LoginManager2.hasAvatar = !1
                })["catch"](function() {})
            })["catch"](function(e) {})
        },
        n.prototype.showActivityAnnouncement = function() {
            this.currPop = new ActivityAnnouncement,
            PopViewManager.getInstance().openView(this.currPop)
        },
        n.prototype.onStartGame = function(t) {
            var n = this;
            if (!e.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                var i = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                this.currPop = new e.MaintainsPop(i);
                var r = PopViewManager.createDefaultStyleObject();
                return r.caller = this,
                r.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(this.currPop, r),
                AnnouncementManager.getServerItems(),
                void StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截")
            }
            this.cbAgreement.selected ? LoginManager2.hasAvatar ? LoginManager2.currUserData && LoginManager2.currUserData.token.length > 0 ? LoginManager2.beforeEnterServer().then(function() {
                e.HistoryUtil.serverInfo ? OnlineManager.getInstance().enterServer(e.HistoryUtil.serverInfo) : n.showServerList()
            }) : this.login(!0) : ModuleManager.showModuleByID(117) : Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。"),
            StatLogger.log("1023版本系统功能", "登录界面", "点击登陆界面【开始游戏】")
        },
        n.prototype.onLoginGame = function(t) {
            if (LoginManager2.hasAvatar) {
                this.currPop && this.currPop.addEventListener(PopView.EVENT_DESTROY, this.showUserInfo, this),
                PopViewManager.getInstance().hideAll(),
                this.showUserInfo();
                var n = e.LoginService.getUserNick();
                BubblerManager.getInstance().showText("亲爱的<font color='0xfcf47c'>" + n + "</font>,欢迎进入游戏！", !0)
            }
        },
        n.prototype.onShowAnnouncement = function(e) {
            this.showAnnouncementFlag || (this.checkAnnouncement(), this.showAnnouncementFlag = !0)
        },
        n.prototype.showUserInfo = function() {
            e.HistoryUtil.showUserInfo(),
            e.AgreementUtil.init(this)
        },
        n.prototype.showServerList = function() {
            this.cbAgreement.selected ? (this.currPop = new e.ServerList(this), PopViewManager.getInstance().openView(this.currPop, this.getEmptyPopStyle())) : Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。")
        },
        n.prototype.getEmptyPopStyle = function() {
            var e = PopViewManager.createDefaultStyleObject();
            return e.caller = this,
            e.clickMaskHandler = function() {},
            e
        },
        n.prototype.initGameServer = function() {
            var e = new egret.HttpRequest;
            e.responseType = egret.HttpResponseType.TEXT,
            e.open(GameInfo.online_gate, egret.HttpMethod.POST),
            e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
            e.send(),
            e.once(egret.Event.COMPLETE,
            function(e) {
                var t = e.currentTarget,
                n = t.response.split("|"),
                i = Math.floor(Math.random() * n.length);
                SocketConnection.mainSocket.ip = n[i].split(":")[0],
                SocketConnection.mainSocket.port = n[i].split(":")[1]
            },
            this)
        },
        n.prototype.onGameLoginSuccess = function(t) {
            PopViewManager.getInstance().hideAll(),
            egret.Tween.get(this.grpService).to({
                alpha: 0
            },
            300),
            egret.Tween.get(this.grpRight).to({
                alpha: 0
            },
            300),
            egret.Tween.get(this.start).to({
                alpha: 0
            },
            300),
            egret.Tween.get(this.grpLastService).to({
                alpha: 0
            },
            300),
            this.touchChildren = !1,
            e.LoginService.loadPreloadRes()
        },
        n.prototype.checkAnnouncement = function() {
            var t = this;
            AnnouncementManager.getMaintain().then(function(n) {
                if (t.touchChildren = !0, n) {
                    var i = n.text.replace(/\\n/g, "\n");
                    t.currPop = new e.MaintainsPop(i);
                    var r = PopViewManager.createDefaultStyleObject();
                    r.caller = t,
                    r.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(t.currPop, r)
                } else AnnouncementManager.isNeedOpen().then(function(e) {
                    e && PopViewManager.getInstance().openView(new ActivityAnnouncement)
                })
            })
        },
        n.prototype.checkForceUpdate = function() {
            var e = this;
            return new Promise(function(t, n) {
                if (GameInfo.isApp) {
                    var i = ~~egret.getOption("version"),
                    r = egret.getOption("channel");
                    config.Package_update.load(function() {
                        for (var e = config.Package_update.getItems(), n = 0; n < e.length; n++) {
                            var o = e[n];
                            if (o.channel == r) {
                                if (o.force_update > 0 && o.version > i) return void t(o);
                                break
                            }
                        }
                        t(null)
                    },
                    e)
                } else t(null)
            })
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            e.AgreementUtil.destroy(),
            e.HistoryUtil.destroy(),
            this.currPop = null,
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this)
        },
        n
    } (BaseModule);
    e.Login202202 = t,
    __reflect(t.prototype, "login202202.Login202202")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return LoginManager2.historyUserData ? n.currentState = "hasHistory": n.currentState = "noHistory",
            n.skinName = e.AccountSkin,
            n.name = "AccountPop",
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            ImageButtonUtil.add(this.btnLogin,
            function() {
                e.isNotMaintains() && LoginManager2.login(!1)
            },
            this),
            LoginManager2.historyUserData && (LoginManager2.historyUserData.nick && LoginManager2.historyUserData.nick.length > 0 ? this.txtName.text = LoginManager2.historyUserData.nick: this.txtName.text = "" + LoginManager2.historyUserData.uid, LoginManager2.historyUserData.loginType == LoginType.qq ? this.iconLoginType.source = "l202202_account_start_icon_qq_png": LoginManager2.historyUserData.loginType == LoginType.wx ? this.iconLoginType.source = "l202202_account_start_icon_wechat_png": this.iconLoginType.source = "l202202_account_start_icon_tm_png"),
            ImageButtonUtil.add(this.btnDown,
            function() {
                LoginManager2.historyUserData = null,
                LoginManager2.flushUserLoginData(),
                e.currentState = "noHistory"
            },
            this)
        },
        n.prototype.isNotMaintains = function() {
            if (!e.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                var t = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                return PopViewManager.getInstance().openView(new e.MaintainsPop(t)),
                AnnouncementManager.getServerItems(),
                StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                !1
            }
            return ! 0
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.AccountPop = t,
    __reflect(t.prototype, "login202202.AccountPop")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t
    } (PopView);
    e.ActivityAnnouncementPop = t,
    __reflect(t.prototype, "login202202.ActivityAnnouncementPop")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n() {
            var n = t.call(this) || this;
            return n.skinName = e.ChildDialogSkin,
            n
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnOK, this.hide, this)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.LoginAgePop = t,
    __reflect(t.prototype, "login202202.LoginAgePop")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.msg = n,
            i.skinName = e.MaintainPopSkin,
            IS_RELEASE || window.addEventListener("message", i.onWebMessage.bind(i)),
            i
        }
        return __extends(n, t),
        n.prototype.onWebMessage = function(e) {
            if (!IS_RELEASE) try {
                var t = JSON.parse(e.data);
                "tips_content_change" == t.action && (this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(StringUtil.TransformLineBreak(t.msg)))
            } catch(e) {}
        },
        n.prototype.childrenCreated = function() {
            var e = this;
            this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(this.msg),
            ImageButtonUtil.add(this.close,
            function() {
                PopViewManager.getInstance().hideView(e)
            },
            this)
        },
        n.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    e.MaintainsPop = t,
    __reflect(t.prototype, "login202202.MaintainsPop")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(t) {
        function n(n, i) {
            var r = t.call(this) || this;
            return r.service = n,
            r.item = i,
            r.skinName = e.PkgUpdateSkin,
            r
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var e = this;
            this.txtSize.text = "更新包大小：" + this.item.size + "M",
            ImageButtonUtil.add(this.btnUpdate,
            function() {
                var t = window.cordova.plugins.permissions;
                t ? t.hasPermission(t.INSTALL_PACKAGES,
                function(n) {
                    PopViewManager.getInstance().hideView(e),
                    n.hasPermission ? e.forceUpdate(e.item) : t.requestPermission(t.INSTALL_PACKAGES,
                    function() {
                        e.forceUpdate(e.item)
                    },
                    function() {
                        Alarm.show("权限获取失败请重新再试，或者前往官网下载新包！")
                    })
                },
                function() {
                    Alarm.show("权限获取失败请重新再试，或者前往官网下载新包！")
                }) : (PopViewManager.getInstance().hideView(e), e.forceUpdate(e.item))
            },
            this)
        },
        n.prototype.forceUpdate = function(e) {
            var t = this,
            n = {
                str: e.msg,
                title: "更新详情",
                hideClose: !0,
                isHtml: !0
            };
            LevelManager.fightLevel.touchChildren = !1,
            tipsPop.TipsPop.openHelpPop(n, null, LevelManager.fightLevel);
            var i = new window.FileTransfer;
            LoadingManager.showProgressLoading(e.size,
            function(e, t) {
                return "正在下载资源包：" + e + "M/" + t + "M    " + (Math.floor(100 * e / t) + "%")
            }),
            LoadingManager.setProgress(0),
            i.onprogress = function(e) {
                if (e.lengthComputable) {
                    e.loaded / e.total;
                    LoadingManager.setProgress(Math.ceil(e.loaded / 1024 / 1024))
                }
            };
            var r = encodeURI(e.url),
            o = "cdvfile://localhost/temporary/seerh5_" + e.version + ".apk";
            i.download(r, o,
            function(e) {
                LoadingManager.hideProgressBar(),
                window.cordova.plugins.fileOpener2.open(o, "application/vnd.android.package-archive"),
                egret.setTimeout(function() {
                    navigator.app.exitApp()
                },
                t, 1e3)
            },
            function(e) {
                console.log("download error: " + e.source + e.target + e.code),
                Alarm.show("自动更新失败，请前往官方网站(http://seerh5.61.com/home/)下载安装最新版本！",
                function() {
                    window.cordova.InAppBrowser.open("https://seerh5.61.com/home/download/?v=" + Math.random(), "_system"),
                    navigator.app.exitApp()
                })
            },
            !1, {
                headers: {
                    Authorization: "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            })
        },
        n
    } (PopView);
    e.PkgUpdateDialog = t,
    __reflect(t.prototype, "login202202.PkgUpdateDialog")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
__extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
},
login202202; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = skins.ServerItemRenderSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.txtNo.text = e.OnlineID + "",
            this.txtName.text = "" + e.onlineName,
            this.icon_friend_online.visible = e.Friends > 0,
            6 == e.UserCnt ? this.icon_hot.source = "l202202_server_list_icon_fire_png": e.UserCnt >= 4 ? this.icon_hot.source = "l202202_server_list_icon_hot_png": this.icon_hot.source = "l202202_server_list_icon_free_png"
        },
        t.prototype.destroy = function() {},
        t
    } (eui.ItemRenderer);
    e.ServerItemRender = t,
    __reflect(t.prototype, "login202202.ServerItemRender")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function e() {}
        return e.init = function(e) {
            this.service = e,
            this.service.txtService.textFlow = [{
                text: "我已详细阅读并同意",
                style: {
                    textColor: 13821688
                }
            },
            {
                text: "淘米游戏服务协议",
                style: {
                    textColor: 16577660,
                    underline: !0,
                    href: "event:service"
                }
            },
            {
                text: "及",
                style: {
                    textColor: 13821688
                }
            },
            {
                text: "隐私保护条款",
                style: {
                    textColor: 16577660,
                    underline: !0,
                    href: "event:protect"
                }
            },
            {
                text: "。",
                style: {
                    textColor: 13821688
                }
            }],
            this.service.txtNo.textFlow = [{
                text: "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n著作权人：上海淘米网络科技有限公司             出版单位：上海淘米网络科技有限公司             运营单位：上海淘米网络科技有限公司\n审批文号：国新出审[2023]32号              出版物号：ISBN 978-7-498-10022-1              备案许可证号：",
                style: {
                    textColor: 8766975
                }
            },
            {
                text: "沪B2-20090070-26A",
                style: {
                    textColor: 16577660,
                    underline: !0,
                    href: "event:beiAn"
                }
            }],
            e.cbAgreement.addEventListener(egret.Event.CHANGE, this.onChangeCheckBox, this),
            e.txtNo.addEventListener(egret.TextEvent.LINK, this.openServicePage, this),
            e.txtService.addEventListener(egret.TextEvent.LINK, this.openServicePage, this);
            var t = 0;
            LoginManager2.historyUserData && (t = LoginManager2.historyUserData.uid),
            LoginManager2.currUserData && (t = LoginManager2.currUserData.uid),
            e.cbAgreement.selected = !!egret.localStorage.getItem("login_note_check_" + t)
        },
        Object.defineProperty(e, "isAgree", {
            get: function() {
                return this.agree
            },
            enumerable: !0,
            configurable: !0
        }),
        e.openServicePage = function(e) {
            "service" == e.text ? window.open("https://www.61.com/about/service.html", "_blank") : "protect" == e.text ? window.open("https://www.61.com/about/protect.html", "_blank") : "beiAn" == e.text && window.open("https://beian.miit.gov.cn/", "_blank")
        },
        e.onChangeCheckBox = function() {
            var e = 0;
            LoginManager2.currUserData && (e = LoginManager2.currUserData.uid),
            this.service.cbAgreement.selected ? egret.localStorage.setItem("login_note_check_" + e, "yes") : egret.localStorage.removeItem("login_note_check_" + e),
            this.agree = this.service.cbAgreement.selected
        },
        e.destroy = function() {
            this.service && (this.service.txtNo.removeEventListener(egret.TextEvent.LINK, this.openServicePage, this), this.service.cbAgreement.removeEventListener(egret.Event.CHANGE, this.onChangeCheckBox, this), this.service.txtService.removeEventListener(egret.TextEvent.LINK, this.openServicePage, this), this.service = null)
        },
        e.agree = !1,
        e
    } ();
    e.AgreementUtil = t,
    __reflect(t.prototype, "login202202.AgreementUtil")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function t() {}
        return t.init = function(e) {
            this.service = e,
            e.user.visible = !1,
            e.grpLastService.visible = !1
        },
        t.showUserInfo = function() {
            if (LoginManager2.currUserData) {
                this.service.user.visible = !0,
                this.service.txtUserName.text = e.LoginService.getUserNick(),
                LoginManager2.currUserData.loginType == LoginType.qq ? this.service.icon_account.source = "l202202_account_start_icon_qq_png": LoginManager2.currUserData.loginType == LoginType.wx ? this.service.icon_account.source = "l202202_account_start_icon_wechat_png": this.service.icon_account.source = "l202202_account_start_icon_tm_png";
                var n = !1,
                i = egret.localStorage.getItem("last_user_online_" + LoginManager2.currUserData.uid),
                r = JSON.parse(i);
                if (LoginManager2.historyUserData && LoginManager2.historyUserData.uid == LoginManager2.currUserData.uid) {
                    var o = LoginManager2.allServiceInfo.svrList;
                    try {
                        if (r) {
                            for (var s in o) if (o[s] && o[s].onlineID == r.onlineID) {
                                this.service.grpLastService.visible = !0,
                                this.serverInfo = o[s],
                                this.service.txtServerID.text = "" + o[s].onlineID,
                                this.service.txtServerName.text = e.LoginService.getServerName(this.serverInfo.onlineID),
                                6 == o[s].UserCnt ? this.service.icon_hot.source = "l202202_main_panel_icon_fire_png": o[s].UserCnt >= 4 ? this.service.icon_hot.source = "l202202_main_panel_icon_hot_png": this.service.icon_hot.source = "l202202_main_panel_icon_free_png",
                                n = !0;
                                break
                            }
                            n || (LoginSocketConnection.addCmdListener(CommandID.RANGE_ONLINE, t.findServer, this), LoginSocketConnection.send(CommandID.RANGE_ONLINE, r.OnlineID, r.OnlineID, 0))
                        }
                    } catch(a) {
                        console.error(a)
                    }
                }
                this.service.grpLastService.visible = n
            } else this.service.user.visible = !1
        },
        t.findServer = function(n) {
            LoginSocketConnection.removeCmdListener(CommandID.RANGE_ONLINE, t.findServer, this);
            var i = (n.data, new RangeSvrInfo(n.data));
            i.svrList.length > 0 && (this.service.grpLastService.visible = !0, this.serverInfo = i.svrList[0], this.service.txtServerID.text = "" + this.serverInfo.onlineID, this.service.txtServerName.text = e.LoginService.getServerName(this.serverInfo.onlineID), 6 == this.serverInfo.UserCnt ? this.service.icon_hot.source = "l202202_main_panel_icon_fire_png": this.serverInfo.UserCnt >= 4 ? this.service.icon_hot.source = "l202202_main_panel_icon_hot_png": this.service.icon_hot.source = "l202202_main_panel_icon_free_png")
        },
        t.destroy = function() {
            this.service = null
        },
        t
    } ();
    e.HistoryUtil = t,
    __reflect(t.prototype, "login202202.HistoryUtil")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function t() {}
        return t.init = function() {
            var e = this;
            RES.getResByUrl(ClientConfig.getJSONConfig("servername"),
            function(t, n) {
                e.serverList = t.root.list;
                for (var i = 0; i < e.serverList.length; i++) {
                    var r = ~~e.serverList[i].id;
                    r > 0 && (e.serverMap["" + r] = e.serverList[i])
                }
            },
            this, RES.ResourceItem.TYPE_JSON)
        },
        t.getServerName = function(e) {
            var t = "";
            return this.serverMap["" + e] && (this.serverMap["" + e], t = this.serverMap["" + e].name),
            t
        },
        t.getUserNick = function() {
            var e = egret.localStorage.getItem("last_user_name_" + LoginManager2.currUserData.uid);
            return e || (e = "" + LoginManager2.currUserData.uid),
            e
        },
        t.login = function(t, n, i, r) {
            switch (this._info = new SoUserInfo, i ? this._info.password = n: this._info.password = (new Md5new).hex_md5((new Md5new).hex_md5(n)), LoginManager.MODE = LoginManager.NORMAL_MODE, LoginManager.getAccountState(t)) {
            case 0:
                return void Alarm.show("请输入合法账号！");
            case 1:
                this._info.userID = Number(t),
                this._info.customID = "",
                this._info.lastUsedID = 1;
                break;
            case 2:
                this._info.customID = t,
                this._info.lastUsedID = 2
            }
            LoginManager.isPwdLegal = e.PasswordUtil.isPasswordLegal(n),
            r && (this._info.passwordo = this._info.password),
            LoginManager.login(this._info.clone())
        },
        t.loginByHistory = function() {},
        t.loadPreloadRes = function() {
            var e = this;
            LoadingManager.showProgressLoading(100,
            function(e, t) {
                return "当前正在加载..."
            }),
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
            RES.loadConfig("resource/assets/ui/common.json", "resource/assets/ui/").then(function() {
                RES.loadGroup("common").then(function() {
                    e.loadMainPanelRes()
                })
            })
        },
        t.onResourceProgress = function(e) {
            "common" == e.groupName ? LoadingManager.setProgress(89 * e.itemsLoaded / e.itemsTotal) : "main_panel" == e.groupName && LoadingManager.setProgress(89 + 10 * e.itemsLoaded / e.itemsTotal)
        },
        t.loginCompleted = function() {
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
            EventManager.removeEventListener("zipLoadComplete", this.loginCompleted, this),
            EventManager.dispatchEventWith("LoginCompeted"),
            window.hideSerialID && window.hideSerialID()
        },
        t.loadMainPanelRes = function() {
            var e = this;
            RES.loadConfig("resource/assets/ui/main_panel.json", "resource/assets/ui/").then(function() {
                RES.loadGroup("main_panel").then(function() {
                    RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, e.onResourceProgress, e),
                    ZipManager.completed ? e.loginCompleted() : EventManager.addEventListener("zipLoadComplete", e.loginCompleted, e)
                })
            })
        },
        t.serverMap = {},
        t
    } ();
    e.LoginService = t,
    __reflect(t.prototype, "login202202.LoginService")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function e() {}
        return e.init = function(e) {
            var t = SpineUtil.createAnimate("2024nianfeidaiji");
            t.touchChildren = !1,
            t.touchEnabled = !1,
            t.play("standby"),
            e.grpMovie.addChild(t),
            EngineHookManager.repairCanvasRenderDrawMesh();
            var n = SpineUtil.createAnimate("denglutexiao");
            n.touchChildren = !1,
            n.touchEnabled = !1,
            n.play("denglutexiao"),
            e.grpLoginMovie.addChild(n)
        },
        e.destroy = function() {},
        e
    } ();
    e.MovieUtil = t,
    __reflect(t.prototype, "login202202.MovieUtil")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function e() {}
        return e.isPasswordLegal = function(t) {
            return LoginManager.isPwdMD5 ? !0 : t.length < 6 ? (BubblerManager.getInstance().showText("密码错误"), !1) : e.isContainIllegalChar(t) ? (BubblerManager.getInstance().showText("非法字符"), !1) : e.isWeakPassword(t) ? !0 : !0
        },
        e.isContainIllegalChar = function(e, t) {
            void 0 === t && (t = 16);
            var n = new RegExp("^[a-zA-Z0-9_]{6," + t + "}$");
            return ! n.test(e)
        },
        e.isWeakPassword = function(e) {
            return this.init(),
            null != this.WEAK_PASSWORD_MAP[e] ? !0 : this.isSameStr(e) ? !0 : this.isContinuationStr(e) ? !0 : !1
        },
        e.isSameStr = function(e) {
            var t = /^(\w)\1{5}$/;
            return t.test(e)
        },
        e.isContinuationStr = function(e) {
            var t = e.length;
            if (0 == Number(e) || 6 != t) return ! 1;
            for (var n = e.charCodeAt(0), i = 1; t > i; i++) {
                var r = e.charCodeAt(i);
                if (n != r - 1) return ! 1;
                n = r
            }
            return ! 0
        },
        e.init = function() {
            this.WEAK_PASSWORD_MAP[123456] = "",
            this.WEAK_PASSWORD_MAP[123456789] = "",
            this.WEAK_PASSWORD_MAP[111111] = "",
            this.WEAK_PASSWORD_MAP[123123] = "",
            this.WEAK_PASSWORD_MAP[1234567890] = "",
            this.WEAK_PASSWORD_MAP["000000"] = "",
            this.WEAK_PASSWORD_MAP[123321] = "",
            this.WEAK_PASSWORD_MAP.zxcvbnm = "",
            this.WEAK_PASSWORD_MAP.qwertyuiop = "",
            this.WEAK_PASSWORD_MAP[1234567] = "",
            this.WEAK_PASSWORD_MAP[789456123] = "",
            this.WEAK_PASSWORD_MAP.asdfghjkl = "",
            this.WEAK_PASSWORD_MAP[789456] = "",
            this.WEAK_PASSWORD_MAP[147258369] = "",
            this.WEAK_PASSWORD_MAP[741852963] = "",
            this.WEAK_PASSWORD_MAP[987654321] = "",
            this.WEAK_PASSWORD_MAP[112233] = "",
            this.WEAK_PASSWORD_MAP.qwerty = "",
            this.WEAK_PASSWORD_MAP[666666] = "",
            this.WEAK_PASSWORD_MAP[123123123] = "",
            this.WEAK_PASSWORD_MAP[12345678910] = "",
            this.WEAK_PASSWORD_MAP.asdfgh = "",
            this.WEAK_PASSWORD_MAP[555555] = "",
            this.WEAK_PASSWORD_MAP.qazwsx = "",
            this.WEAK_PASSWORD_MAP[159753] = "",
            this.WEAK_PASSWORD_MAP[5201314] = "",
            this.WEAK_PASSWORD_MAP[121212] = "",
            this.WEAK_PASSWORD_MAP[456123] = "",
            this.WEAK_PASSWORD_MAP[456789] = "",
            this.WEAK_PASSWORD_MAP[159357] = "",
            this.WEAK_PASSWORD_MAP[147258] = "",
            this.WEAK_PASSWORD_MAP[963852741] = "",
            this.WEAK_PASSWORD_MAP.aaaaaa = "",
            this.WEAK_PASSWORD_MAP[12345678] = "",
            this.WEAK_PASSWORD_MAP[123654] = "",
            this.WEAK_PASSWORD_MAP.asdasd = "",
            this.WEAK_PASSWORD_MAP[654321] = "",
            this.WEAK_PASSWORD_MAP[7758258] = "",
            this.WEAK_PASSWORD_MAP.zxcvbn = "",
            this.WEAK_PASSWORD_MAP[1233211234567] = "",
            this.WEAK_PASSWORD_MAP.qazwsxedc = "",
            this.WEAK_PASSWORD_MAP[147852369] = "",
            this.WEAK_PASSWORD_MAP[741852] = "",
            this.WEAK_PASSWORD_MAP["0123456789"] = "",
            this.WEAK_PASSWORD_MAP[123789] = "",
            this.WEAK_PASSWORD_MAP[753951] = "",
            this.WEAK_PASSWORD_MAP[1234560] = "",
            this.WEAK_PASSWORD_MAP[7894561230] = "",
            this.WEAK_PASSWORD_MAP.a123456 = "",
            this.WEAK_PASSWORD_MAP[456456] = ""
        },
        e.MAX_CONTINUATION_NUM = 5,
        e.WEAK_PASSWORD_MAP = {},
        e
    } ();
    e.PasswordUtil = t,
    __reflect(t.prototype, "login202202.PasswordUtil")
} (login202202 || (login202202 = {}));
var __reflect = this && this.__reflect ||
function(e, t, n) {
    e.__class__ = t,
    n ? n.push(t) : n = [t],
    e.__types__ = e.__types__ ? n.concat(e.__types__) : n
},
login202202; !
function(e) {
    var t = function() {
        function e() {}
        return e.init = function(e) {
            e.small_logo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        },
        e.onClick = function(e) {
            this.clickCount++,
            this.clickCount >= 8 && (this._canSkipMaintain = !0, StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间通过连点8次绕过拦截")),
            e.preventDefault(),
            e.stopImmediatePropagation()
        },
        Object.defineProperty(e, "canSkipMaintain", {
            get: function() {
                return this._canSkipMaintain
            },
            enumerable: !0,
            configurable: !0
        }),
        e.destroy = function() {},
        e.clickCount = 0,
        e._canSkipMaintain = !1,
        e
    } ();
    e.SkipMaintainUtil = t,
    __reflect(t.prototype, "login202202.SkipMaintainUtil")
} (login202202 || (login202202 = {})),
window.login202202 = window.login202202 || {},
window.skins = window.skins || {};
var __extends = this && this.__extends ||
function(e, t) {
    function n() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype,
    e.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/AccountSkin.exml"] = window.login202202.AccountSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["account_bg", "other_line", "name_input_bg", "btnDown", "btnLogin", "qq", "wechat", "btnTM", "txtName", "iconLoginType"],
        this.currentState = "noHistory",
        this.height = 310,
        this.width = 523,
        this.elementsContent = [this.account_bg_i()],
        this.other_line_i(),
        this.name_input_bg_i(),
        this.btnDown_i(),
        this.btnLogin_i(),
        this.qq_i(),
        this.wechat_i(),
        this.btnTM_i(),
        this.txtName_i(),
        this.iconLoginType_i(),
        this.states = [new eui.State("hasHistory", [new eui.AddItems("other_line", "", 1, ""), new eui.AddItems("name_input_bg", "", 1, ""), new eui.AddItems("btnDown", "", 1, ""), new eui.AddItems("btnLogin", "", 1, ""), new eui.AddItems("qq", "", 1, ""), new eui.AddItems("wechat", "", 1, ""), new eui.AddItems("txtName", "", 1, ""), new eui.AddItems("iconLoginType", "", 1, ""), new eui.SetProperty("other_line", "x", 21), new eui.SetProperty("other_line", "y", 199), new eui.SetProperty("qq", "y", 233), new eui.SetProperty("qq", "horizontalCenter", 60.5), new eui.SetProperty("qq", "verticalCenter", 101), new eui.SetProperty("wechat", "y", 232), new eui.SetProperty("wechat", "horizontalCenter", -63.5), new eui.SetProperty("wechat", "verticalCenter", 100)]), new eui.State("noHistory", [new eui.AddItems("other_line", "", 1, ""), new eui.AddItems("qq", "", 1, ""), new eui.AddItems("wechat", "", 1, ""), new eui.AddItems("btnTM", "", 1, ""), new eui.SetProperty("other_line", "y", 184), new eui.SetProperty("other_line", "x", 21), new eui.SetProperty("qq", "horizontalCenter", 60.5), new eui.SetProperty("qq", "verticalCenter", 85), new eui.SetProperty("wechat", "horizontalCenter", -63.5), new eui.SetProperty("wechat", "verticalCenter", 85)])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.account_bg_i = function() {
        var e = new eui.Image;
        return this.account_bg = e,
        e.source = "l202202_account_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.other_line_i = function() {
        var e = new eui.Image;
        return this.other_line = e,
        e.source = "l202202_account_other_line_png",
        e.x = 21,
        e.y = 199,
        e
    },
    n.name_input_bg_i = function() {
        var e = new eui.Image;
        return this.name_input_bg = e,
        e.source = "l202202_account_exchange_name_input_bg_png",
        e.visible = !0,
        e.x = 47,
        e.y = 79,
        e
    },
    n.btnDown_i = function() {
        var e = new eui.Image;
        return this.btnDown = e,
        e.source = "l202202_account_start_btndel_png",
        e.x = 439,
        e.y = 92,
        e
    },
    n.btnLogin_i = function() {
        var e = new eui.Image;
        return this.btnLogin = e,
        e.source = "l202202_account_exchange_btnlogin_png",
        e.x = 192,
        e.y = 134,
        e
    },
    n.qq_i = function() {
        var e = new eui.Image;
        return this.qq = e,
        e.source = "l202202_account_qq_png",
        e.x = 299,
        e
    },
    n.wechat_i = function() {
        var e = new eui.Image;
        return this.wechat = e,
        e.source = "l202202_account_wechat_png",
        e.x = 175,
        e
    },
    n.btnTM_i = function() {
        var e = new eui.Image;
        return this.btnTM = e,
        e.source = "l202202_account_start_btnzhanghao_png",
        e.x = 101,
        e.y = 102,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "用户昵称用户昵称",
        e.textAlign = "center",
        e.textColor = 8029850,
        e.width = 204,
        e.x = 157,
        e.y = 91,
        e
    },
    n.iconLoginType_i = function() {
        var e = new eui.Image;
        return this.iconLoginType = e,
        e.source = "l202202_account_start_icon_qq_png",
        e.x = 61,
        e.y = 88,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AccountStartSkin.exml"] = window.login202202.AccountStartSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["account_bg", "other_line", "btnZhanghao", "btnQQ", "btnWechat"],
        this.height = 310,
        this.width = 523,
        this.elementsContent = [this.account_bg_i(), this.other_line_i(), this.btnZhanghao_i(), this.btnQQ_i(), this.btnWechat_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.account_bg_i = function() {
        var e = new eui.Image;
        return this.account_bg = e,
        e.source = "l202202_account_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.other_line_i = function() {
        var e = new eui.Image;
        return this.other_line = e,
        e.source = "l202202_account_other_line_png",
        e.x = 21,
        e.y = 184,
        e
    },
    n.btnZhanghao_i = function() {
        var e = new eui.Image;
        return this.btnZhanghao = e,
        e.source = "l202202_account_start_btnzhanghao_png",
        e.x = 101,
        e.y = 102,
        e
    },
    n.btnQQ_i = function() {
        var e = new eui.Image;
        return this.btnQQ = e,
        e.source = "l202202_account_qq_png",
        e.x = 298,
        e.y = 218,
        e
    },
    n.btnWechat_i = function() {
        var e = new eui.Image;
        return this.btnWechat = e,
        e.source = "l202202_account_wechat_png",
        e.x = 175,
        e.y = 217,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChildDialogSkin.exml"] = window.login202202.ChildDialogSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["s9_pop_bg4", "pop_up_bg_m", "title", "btnClose", "txtContent", "btnOK"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.s9_pop_bg4_i(), this.pop_up_bg_m_i(), this.title_i(), this.btnClose_i(), this.txtContent_i(), this.btnOK_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.s9_pop_bg4_i = function() {
        var e = new eui.Image;
        return this.s9_pop_bg4 = e,
        e.height = 430,
        e.scale9Grid = new egret.Rectangle(11, 9, 10, 8),
        e.source = "common_dialog_s9_pop_bg4_png",
        e.width = 753,
        e.x = 0,
        e.y = 1,
        e
    },
    n.pop_up_bg_m_i = function() {
        var e = new eui.Image;
        return this.pop_up_bg_m = e,
        e.source = "common_pop_up_bg_big_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.title_i = function() {
        var e = new eui.Image;
        return this.title = e,
        e.source = "l202202_child_dialog_title_png",
        e.x = 36,
        e.y = 3,
        e
    },
    n.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "common_dialog_btnclose_png",
        e.x = 712,
        e.y = 1,
        e
    },
    n.txtContent_i = function() {
        var e = new eui.Label;
        return this.txtContent = e,
        e.lineSpacing = 6,
        e.size = 16,
        e.text = "1.本游戏是一款回合制精灵养成类游戏，适用于年满12周岁及以上的用户，建议未成年人在家长监护下使用游戏产品。\n2.本游戏基于架空的故事背景和幻想世界观，没有基于真实历史和现实事件的改编内容。玩家将作为高科技机器人“赛尔”，为人类寻找新能源和宜居地，同时与各种外星精灵一起冒险。游戏中存在与回合对战相关的对抗内容，玩家可以合理指挥精灵、使用道具与对手竞争，从而获取胜利。游戏中有基于文字的陌生人社交系统，社交系统的管理遵循相关法律法规。\n3.本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：\n游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年人用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。 未成年人用户每日22点到次日8点不得使用，法定节假日每天不得使用超过3小时，其他时间每天不得使用超过1.5小时。\n4.本游戏以太空冒险为主题。基于架空世界展开剧情，采用风格鲜明的美术风格设计，剧情丰满，玩法多样，能够带给玩家轻松愉悦的游戏氛围。",
        e.textColor = 6258105,
        e.width = 702,
        e.x = 25,
        e.y = 54,
        e
    },
    n.btnOK_i = function() {
        var e = new eui.Image;
        return this.btnOK = e,
        e.source = "common_dialog_btnok_png",
        e.x = 309,
        e.y = 362,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.login202202.MainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "grpMovie", "bgMask", "btnTrigger", "small_logo", "btnYearTip", "btnExchange", "btnNotice", "btnRepair", "btnCustCare", "idbg", "icon_account", "txtUserName", "user", "grpRight", "grpLoginMovie", "start_bg", "btnStart", "start", "bg_2", "txtServerID", "txtServerName", "icon_hot", "btnChange", "grpLastService", "grpPopContainer", "txtNo", "cbAgreement", "txtService", "agreement", "grpService"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpMovie_i(), this.bgMask_i(), this.btnTrigger_i(), this.small_logo_i(), this.grpRight_i(), this.start_i(), this.grpLastService_i(), this.grpPopContainer_i(), this.grpService_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.height = 23,
            this.width = 23,
            this.elementsContent = [this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image;
            return e.source = "l202202_main_panel_searchbg_kb_png",
            e
        },
        n._Image2_i = function() {
            var e = new eui.Image;
            return this._Image2 = e,
            e.horizontalCenter = 0,
            e.source = "l202202_main_panel_select_png",
            e.verticalCenter = 0,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "2024nianfeidaijiBg_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.grpMovie_i = function() {
        var e = new eui.Group;
        return this.grpMovie = e,
        e.horizontalCenter = -22,
        e.verticalCenter = 0,
        e
    },
    i.bgMask_i = function() {
        var e = new eui.Image;
        return this.bgMask = e,
        e.height = 640,
        e.source = "login202202_mask2_png",
        e.visible = !0,
        e.width = 1136,
        e.x = -5,
        e.y = -5,
        e
    },
    i.btnTrigger_i = function() {
        var e = new eui.Group;
        return this.btnTrigger = e,
        e.height = 450.489,
        e.horizontalCenter = -26,
        e.width = 991.912,
        e.y = 98,
        e
    },
    i.small_logo_i = function() {
        var e = new eui.Image;
        return this.small_logo = e,
        e.source = "l202202_main_panel_small_logo_png",
        e.x = 28,
        e.y = 23,
        e
    },
    i.grpRight_i = function() {
        var e = new eui.Group;
        return this.grpRight = e,
        e.height = 590,
        e.right = 0,
        e.visible = !0,
        e.width = 157,
        e.y = 26,
        e.elementsContent = [this.btnYearTip_i(), this.btnExchange_i(), this.btnNotice_i(), this.btnRepair_i(), this.btnCustCare_i(), this.user_i()],
        e
    },
    i.btnYearTip_i = function() {
        var e = new eui.Image;
        return this.btnYearTip = e,
        e.source = "l202202_main_panel_child_tip_png",
        e.x = 77,
        e.y = 490.668,
        e
    },
    i.btnExchange_i = function() {
        var e = new eui.Image;
        return this.btnExchange = e,
        e.source = "l202202_main_panel_btnexchange_png",
        e.x = 65,
        e.y = 23,
        e
    },
    i.btnNotice_i = function() {
        var e = new eui.Image;
        return this.btnNotice = e,
        e.source = "l202202_main_panel_btnnotice_png",
        e.x = 69,
        e.y = 100,
        e
    },
    i.btnRepair_i = function() {
        var e = new eui.Image;
        return this.btnRepair = e,
        e.source = "l202202_main_panel_btnrepair_png",
        e.x = 73,
        e.y = 250,
        e
    },
    i.btnCustCare_i = function() {
        var e = new eui.Image;
        return this.btnCustCare = e,
        e.source = "l202202_main_panel_btncustcare_png",
        e.x = 65,
        e.y = 174,
        e
    },
    i.user_i = function() {
        var e = new eui.Group;
        return this.user = e,
        e.height = 23,
        e.right = 17,
        e.y = 0,
        e.elementsContent = [this.idbg_i(), this._Group1_i()],
        e
    },
    i.idbg_i = function() {
        var e = new eui.Image;
        return this.idbg = e,
        e.source = "l202202_main_panel_idbg_png",
        e.x = 0,
        e.y = 1.346,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.x = 6,
        e.y = 2,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.icon_account_i(), this.txtUserName_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.verticalAlign = "middle",
        e
    },
    i.icon_account_i = function() {
        var e = new eui.Image;
        return this.icon_account = e,
        e.scaleX = .8,
        e.scaleY = .8,
        e.source = "l202202_main_panel_icon_account_png",
        e.x = 0,
        e.y = 3,
        e
    },
    i.txtUserName_i = function() {
        var e = new eui.Label;
        return this.txtUserName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "玩家玩家玩家",
        e.textColor = 4173823,
        e.x = 24,
        e.y = 0,
        e
    },
    i.start_i = function() {
        var e = new eui.Group;
        return this.start = e,
        e.horizontalCenter = -78.5,
        e.y = 482,
        e.elementsContent = [this.grpLoginMovie_i(), this.start_bg_i(), this.btnStart_i()],
        e
    },
    i.grpLoginMovie_i = function() {
        var e = new eui.Group;
        return this.grpLoginMovie = e,
        e.x = 530.428,
        e.y = 32,
        e
    },
    i.start_bg_i = function() {
        var e = new eui.Image;
        return this.start_bg = e,
        e.source = "l202202_main_panel_start_bg_png",
        e.x = -157.608,
        e.y = 0,
        e
    },
    i.btnStart_i = function() {
        var e = new eui.Image;
        return this.btnStart = e,
        e.source = "l202202_main_panel_btnstart_png",
        e.x = 465,
        e.y = 8,
        e
    },
    i.grpLastService_i = function() {
        var e = new eui.Group;
        return this.grpLastService = e,
        e.horizontalCenter = -4,
        e.visible = !0,
        e.y = 428,
        e.elementsContent = [this.bg_2_i(), this.txtServerID_i(), this.txtServerName_i(), this.icon_hot_i(), this.btnChange_i()],
        e
    },
    i.bg_2_i = function() {
        var e = new eui.Image;
        return this.bg_2 = e,
        e.height = 31,
        e.source = "l202202_main_panel_bg_png",
        e.width = 351,
        e.x = 9,
        e.y = 8,
        e
    },
    i.txtServerID_i = function() {
        var e = new eui.Label;
        return this.txtServerID = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "8989",
        e.textColor = 16777215,
        e.x = 63,
        e.y = 15,
        e
    },
    i.txtServerName_i = function() {
        var e = new eui.Label;
        return this.txtServerName = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "服务器服务器",
        e.textColor = 16777215,
        e.x = 146,
        e.y = 16,
        e
    },
    i.icon_hot_i = function() {
        var e = new eui.Image;
        return this.icon_hot = e,
        e.source = "l202202_main_panel_icon_hot_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnChange_i = function() {
        var e = new eui.Group;
        return this.btnChange = e,
        e.height = 30,
        e.width = 30,
        e.x = 290,
        e.y = 9,
        e.elementsContent = [this._Image1_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "l202202_main_panel_btnchange_png",
        e.x = 6,
        e.y = 6,
        e
    },
    i.grpPopContainer_i = function() {
        var e = new eui.Group;
        return this.grpPopContainer = e,
        e.percentHeight = 100,
        e.visible = !0,
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpService_i = function() {
        var e = new eui.Group;
        return this.grpService = e,
        e.horizontalCenter = -2,
        e.visible = !0,
        e.y = 542,
        e.elementsContent = [this.txtNo_i(), this.agreement_i()],
        e
    },
    i.txtNo_i = function() {
        var e = new eui.Label;
        return this.txtNo = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n著作权人：上海淘米网络科技有限公司             出版单位：上海淘米网络科技有限公司             运营单位：上海淘米网络科技有限公司\n审批文号：国新出审[2023]32号         出版物号：ISBN 978-7-498-10022-1         备案许可证号：沪B2-20090070-26A",
        e.textAlign = "center",
        e.textColor = 8766975,
        e.x = 0,
        e.y = 40,
        e
    },
    i.agreement_i = function() {
        var e = new eui.Group;
        return this.agreement = e,
        e.horizontalCenter = 2.5,
        e.y = 0,
        e.layout = this._HorizontalLayout2_i(),
        e.elementsContent = [this.cbAgreement_i(), this.txtService_i()],
        e
    },
    i._HorizontalLayout2_i = function() {
        var e = new eui.HorizontalLayout;
        return e.verticalAlign = "middle",
        e
    },
    i.cbAgreement_i = function() {
        var e = new eui.CheckBox;
        return this.cbAgreement = e,
        e.x = 0,
        e.y = 0,
        e.skinName = n,
        e
    },
    i.txtService_i = function() {
        var e = new eui.Label;
        return this.txtService = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "我已详细阅读并同意淘米游戏服务协议及隐私保护条款。",
        e.textColor = 13821688,
        e.x = 29,
        e.y = 3,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MaintainPopSkin.exml"] = window.login202202.MaintainPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["maintain_bg", "close", "txtMsg"],
        this.height = 239,
        this.width = 573,
        this.elementsContent = [this.maintain_bg_i(), this.close_i(), this.txtMsg_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.maintain_bg_i = function() {
        var e = new eui.Image;
        return this.maintain_bg = e,
        e.source = "l_maintain_pop_maintain_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.close_i = function() {
        var e = new eui.Image;
        return this.close = e,
        e.source = "l_maintain_pop_close_png",
        e.x = 219,
        e.y = 170,
        e
    },
    n.txtMsg_i = function() {
        var e = new eui.Label;
        return this.txtMsg = e,
        e.fontFamily = "REEJI",
        e.height = 100,
        e.horizontalCenter = .5,
        e.lineSpacing = 8,
        e.size = 18,
        e.text = "计划维护时间：7月8日“0:00——16:00“。\n具体开服时间请关注官方公告。",
        e.textAlign = "center",
        e.textColor = 12834813,
        e.verticalAlign = "middle",
        e.width = 440,
        e.y = 68,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PkgUpdateSkin.exml"] = window.login202202.PkgUpdateSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["update_bg", "update_title", "txtMsg", "txtSize", "btnUpdate"],
        this.height = 241,
        this.width = 642,
        this.elementsContent = [this.update_bg_i(), this.update_title_i(), this.txtMsg_i(), this.txtSize_i(), this.btnUpdate_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.update_bg_i = function() {
        var e = new eui.Image;
        return this.update_bg = e,
        e.height = 204,
        e.scale9Grid = new egret.Rectangle(5, 3, 11, 5),
        e.source = "l202202_pkg_update_update_bg_png",
        e.width = 642,
        e.x = 0,
        e.y = 37,
        e
    },
    n.update_title_i = function() {
        var e = new eui.Image;
        return this.update_title = e,
        e.source = "l202202_pkg_update_update_title_png",
        e.x = 2,
        e.y = 0,
        e
    },
    n.txtMsg_i = function() {
        var e = new eui.Label;
        return this.txtMsg = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "检测到有新的版本，需要下载更新包资源并且安装以正常进行游戏。\n是否确认下载并且安装更新？\n",
        e.textColor = 13754879,
        e.width = 584,
        e.x = 25,
        e.y = 61,
        e
    },
    n.txtSize_i = function() {
        var e = new eui.Label;
        return this.txtSize = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "更新包大小：999MB",
        e.textColor = 13754879,
        e.x = 246,
        e.y = 145,
        e
    },
    n.btnUpdate_i = function() {
        var e = new eui.Image;
        return this.btnUpdate = e,
        e.source = "l202202_pkg_update_btnupdate_png",
        e.x = 250,
        e.y = 171,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ServerItemRenderSkin.exml"] = window.skins.ServerItemRenderSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["item_bg", "txtName", "txtNo", "icon_hot", "icon_friend_online"],
        this.height = 57,
        this.width = 340,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Group1", "scaleX", .98), new eui.SetProperty("_Group1", "scaleY", .98), new eui.SetProperty("_Group1", "y", 2), new eui.SetProperty("_Group1", "x", 2)])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.item_bg_i(), this.txtName_i(), this.txtNo_i(), this.icon_hot_i(), this.icon_friend_online_i()],
        e
    },
    n.item_bg_i = function() {
        var e = new eui.Image;
        return this.item_bg = e,
        e.source = "l202202_server_list_item_bg_png",
        e.x = 9,
        e.y = 9,
        e
    },
    n.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "好腻害的服务器",
        e.textColor = 16711422,
        e.x = 117,
        e.y = 20,
        e
    },
    n.txtNo_i = function() {
        var e = new eui.Label;
        return this.txtNo = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "9999",
        e.textColor = 16711422,
        e.x = 50,
        e.y = 23,
        e
    },
    n.icon_hot_i = function() {
        var e = new eui.Image;
        return this.icon_hot = e,
        e.source = "l202202_server_list_icon_hot_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.icon_friend_online_i = function() {
        var e = new eui.Image;
        return this.icon_friend_online = e,
        e.source = "l202202_server_list_icon_friend_online_png",
        e.x = 281,
        e.y = 14,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ServerListSkin.exml"] = window.login202202.ServerListSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["server_bg", "server_title", "server_buttom_bg", "server_input_bg", "txtServerNo", "btnGo", "grpGO", "btnBack", "tuli", "list", "scroller"],
        this.height = 460,
        this.width = 1136,
        this.elementsContent = [this.server_bg_i(), this.server_title_i(), this.server_buttom_bg_i(), this.grpGO_i(), this.btnBack_i(), this.tuli_i(), this.scroller_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n.textDisplay_i = function() {
            var e = new eui.EditableText;
            return this.textDisplay = e,
            e.fontFamily = "MFShangHei",
            e.left = "10",
            e.right = "10",
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 13097725,
            e.percentWidth = 100,
            e.y = 3,
            e
        },
        n.promptDisplay_i = function() {
            var e = new eui.Label;
            return this.promptDisplay = e,
            e.fontFamily = "MFShangHei",
            e.left = 10,
            e.right = 10,
            e.size = 16,
            e.textAlign = "center",
            e.textColor = 6388143,
            e.touchEnabled = !1,
            e.verticalCenter = 0,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    i = t.prototype;
    return i.server_bg_i = function() {
        var e = new eui.Image;
        return this.server_bg = e,
        e.left = 0,
        e.right = 0,
        e.source = "l202202_server_list_server_bg_png",
        e.y = 0,
        e
    },
    i.server_title_i = function() {
        var e = new eui.Image;
        return this.server_title = e,
        e.horizontalCenter = 0,
        e.source = "l202202_server_list_server_title_png",
        e.y = 12,
        e
    },
    i.server_buttom_bg_i = function() {
        var e = new eui.Image;
        return this.server_buttom_bg = e,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(379, 17, 152, 9),
        e.source = "l202202_server_list_server_buttom_bg_png",
        e.y = 380,
        e
    },
    i.grpGO_i = function() {
        var e = new eui.Group;
        return this.grpGO = e,
        e.right = 22,
        e.y = 388,
        e.elementsContent = [this.server_input_bg_i(), this.txtServerNo_i(), this.btnGo_i()],
        e
    },
    i.server_input_bg_i = function() {
        var e = new eui.Image;
        return this.server_input_bg = e,
        e.height = 21,
        e.source = "l202202_server_list_server_input_bg_png",
        e.width = 158,
        e.x = 0,
        e.y = 1,
        e
    },
    i.txtServerNo_i = function() {
        var e = new eui.TextInput;
        return this.txtServerNo = e,
        e.height = 20,
        e.maxChars = 4,
        e.prompt = "请输入服务器编号",
        e.restrict = "0-9",
        e.width = 150,
        e.x = 3.886,
        e.y = 2,
        e.skinName = n,
        e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.source = "l202202_server_list_btngo_png",
        e.x = 183,
        e.y = 0,
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.source = "l202202_server_list_btnback_png",
        e.x = 22,
        e.y = 10,
        e
    },
    i.tuli_i = function() {
        var e = new eui.Image;
        return this.tuli = e,
        e.left = 50,
        e.source = "l202202_server_list_tuli_png",
        e.y = 382,
        e
    },
    i.scroller_i = function() {
        var e = new eui.Scroller;
        return this.scroller = e,
        e.height = 336,
        e.horizontalCenter = 0,
        e.width = 712,
        e.y = 42,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.width = 712,
        e.elementsContent = [this.list_i()],
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.height = 320,
        e.width = 712,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 16,
        e.orientation = "rows",
        e
    },
    t
} (eui.Skin);