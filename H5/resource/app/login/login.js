var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n(n, i) {
            var r = e.call(this) || this;
            return r.service = n,
            r.item = i,
            r.skinName = t.PkgUpdateSkin,
            r
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            this.txtSize.text = "更新包大小" + this.item.size + "M",
            ImageButtonUtil.add(this.btnUpdate,
            function() {
                var e = window.cordova.plugins.permissions;
                e ? e.hasPermission(e.INSTALL_PACKAGES,
                function(n) {
                    PopViewManager.getInstance().hideView(t),
                    n.hasPermission ? t.forceUpdate(t.item) : e.requestPermission(e.INSTALL_PACKAGES,
                    function() {
                        t.forceUpdate(t.item)
                    },
                    function() {
                        Alarm.show("权限获取失败请重新再试，或者前往官网下载新包！")
                    })
                },
                function() {
                    Alarm.show("权限获取失败请重新再试，或者前往官网下载新包！")
                }) : (PopViewManager.getInstance().hideView(t), t.forceUpdate(t.item))
            },
            this)
        },
        n.prototype.forceUpdate = function(t) {
            var e = this,
            n = {
                str: t.msg,
                title: "更新详情",
                hideClose: !0,
                isHtml: !0
            };
            LevelManager.fightLevel.touchChildren = !1,
            tipsPop.TipsPop.openHelpPop(n, null, LevelManager.fightLevel);
            var i = new window.FileTransfer;
            LoadingManager.showProgressLoading(t.size,
            function(t, e) {
                return "正在下载资源包：" + t + "M/" + e + "M    " + (Math.floor(100 * t / e) + "%")
            }),
            LoadingManager.setProgress(0),
            i.onprogress = function(t) {
                if (console.log("e.loaded " + t.loaded), t.lengthComputable) {
                    t.loaded / t.total;
                    LoadingManager.setProgress(Math.ceil(t.loaded / 1024 / 1024))
                }
            };
            var r = encodeURI(t.url),
            o = "cdvfile://localhost/temporary/seerh5_" + t.version + ".apk";
            i.download(r, o,
            function(t) {
                LoadingManager.hideProgressBar(),
                window.cordova.plugins.fileOpener2.open(o, "application/vnd.android.package-archive"),
                egret.setTimeout(function() {
                    navigator.app.exitApp()
                },
                e, 1e3)
            },
            function(t) {
                Alarm.show("自动更新失败，请前往官方网站(http://seerh5.61.com/home/)下载安装最新版本！",
                function() {
                    window.cordova.InAppBrowser.open("http://seerh5.61.com/home/m/?v=" + Math.random(), "_system"),
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
    t.PkgUpdateDialog = e,
    __reflect(e.prototype, "login.PkgUpdateDialog")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.showAnnouncementFlag = !1,
            n.isAccountLoginSuccess = !1,
            n.skinName = t.MainPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var e = this;
            this.addEvent(),
            ChannelManager.init(),
            this.grpPopContainer.touchEnabled = !1,
            this.grpService.touchEnabled = !1,
            this.grpService.cacheAsBitmap = !0,
            this.grpLastService.cacheAsBitmap = !0,
            this.start.cacheAsBitmap = !0,
            this.user.visible = !1,
            this.grpLastService.visible = !1,
            GameInfo.isChecking && (this.btnNotice.visible = !1, this.btnCustCare.visible = !1),
            this.adaptRightContent(this.grpRight),
            this.adaptBg(),
            t.MovieUtil.init(this),
            t.AgreementUtil.init(this),
            t.SkipMaintainUtil.init(this),
            t.LoginService.init(),
            t.HistoryUtil.init(this),
            this.initGameServer(),
            ZipManager.setup(),
            this.checkForceUpdate().then(function(n) {
                n ? (e.currPop = new t.PkgUpdateDialog(e, n), PopViewManager.getInstance().openView(e.currPop, e.getEmptyPopStyle())) : AnnouncementManager.getMaintain().then(function(n) {
                    if (e.touchChildren = !0, n) {
                        var i = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                        e.currPop = new t.MaintainsPop(i);
                        var r = PopViewManager.createDefaultStyleObject();
                        r.caller = e,
                        PopViewManager.getInstance().openView(e.currPop, r),
                        AnnouncementManager.getServerItems(),
                        StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截")
                    } else {
                        var o = LoginManager.getSavedId()[0];
                        o && t.LoginService.login(o.k, o.v, !0, !0),
                        e.login()
                    }
                })
            }),
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
            var e = this;
            ImageButtonUtil.add(this.btnYearTip,
            function() {
                PopViewManager.getInstance().openView(new t.LoginAgePop)
            },
            this),
            ImageButtonUtil.add(this.btnRepair,
            function() {
                TaomeeSDKManager.clearCache()
            },
            this),
            ImageButtonUtil.add(this.btnTrigger,
            function(t) {
                e.onStartGame(t)
            },
            this),
            ImageButtonUtil.add(this.btnStart, this.onStartGame, this),
            ImageButtonUtil.add(this.btnChange, this.showServerList, this),
            ImageButtonUtil.add(this.btnCustCare, this.showCustCare, this),
            ImageButtonUtil.add(this.btnNotice, this.showActivityAnnouncement, this),
            ImageButtonUtil.add(this.btnExchange, this.showAccountPop, this),
            EventManager.addEventListener("ExchangeAccount",
            function() {
                TaomeeSDKManager.logout(e.showAccountPop, e)
            },
            this),
            EventManager.addEventListener(LoginEvent.SHOW_SERVER_LIST, this.onLoginGame, this),
            EventManager.addEventListener(LoginEvent.SHOW_ANNOUNCEMENT, this.onShowAnnouncement, this),
            EventManager.addEventListener(LoginEvent.GAME_LOGIN_SUCCESS, this.onGameLoginSuccess, this),
            EventManager.addEventListener(LoginEvent.CREATE_AVATAR, this.onStartCreateAvatar, this),
            SocketConnection.addCmdListener(CommandID.LOGIN_IN, this.onLogin, this),
            EventManager.addEventListener(LoginEvent.ACCOUNT_LOGIN_SUCCESS, this.onAccountLoginSuccess, this),
            LoginManager.addEventListener(LoginEvent.PWD_FAILD, this.onPwdFail, this),
            EventManager.addEventListener("SocketError",
            function(t) {
                5003 != t.data.num || e.loginAccount ? 6007 == t.data.num && LoginManager.removeUser(LoginManager.userID.toString()) : (e.showAccountPop(), e.user.visible = !1, e.grpLastService.visible = !1)
            },
            this)
        },
        n.prototype.onAccountLoginSuccess = function() {
            PopViewManager.getInstance().hideAll();
            var e = t.LoginService.getUserNick();
            this.isAccountLoginSuccess = !0,
            LoginManager.getRecommendSvrList(),
            LoginManager.needVerifyCode = !1,
            this.onShowAnnouncement(null),
            BubblerManager.getInstance().showText("亲爱的<font color='0xfcf47c'>" + e + "</font>,欢迎进入游戏！", !0)
        },
        n.prototype.onLogin = function() {
            t.LoginService.loadPreloadRes()
        },
        n.prototype.onPwdFail = function(t) {
            MainManager.actorID = 0,
            this.user.visible = !1,
            this.grpLastService.visible = !1;
            var e = t.obj,
            n = (e.verifyCode, e.errorCode);
            console.log("====onPwdFail====================", n),
            1 == n && LoginManager.removeUser(LoginManager.userID + ""),
            this.loginAccount && this.loginAccount.visible || this.showAccountPop()
        },
        n.prototype.onShowServerList = function() {
            LoginManager.MODE == LoginManager.NORMAL_MODE && LoginManager.getRecommendSvrList()
        },
        n.prototype.showCustCare = function() {
            window.open("https://webpage.qidian.qq.com/2/chat/pc/index.html?linkType=1&env=ol&kfuin=2852171811&fid=1243&key=620e5892978739afe94aa6e9d820889c&cate=7&source=0&isLBS=0&isCustomEntry=0&type=10&ftype=1&_type=wpa&qidian=true&translateSwitch=0&isSsc=0&roleValue=2&roleData=")
        },
        n.prototype.onStartCreateAvatar = function(t) {
            ModuleManager.showModuleByID(117),
            LoginManager2.hasAvatar = !1
        },
        n.prototype.showAccountPop = function() {
            if (this.loginAccount) {
                if (this.loginAccount.parent) return
            } else this.loginAccount = new t.LoginAccountNew(this);
            this.loginAccount.updateVerifyCode(),
            this.currPop = this.loginAccount,
            PopViewManager.getInstance().openView(this.loginAccount, this.getEmptyPopStyle(), null, this.grpPopContainer)
        },
        n.prototype.login = function(e) {
            var n = this;
            void 0 === e && (e = !1);
            var i = egret.getOption("sid");
            if (i && i.length > 0) console.log("====login=======loginByWebSign===================" + i),
            LoginManager.addEventListener(LoginEvent.LOGIN_WITH_THIRD_SUC_CLOSE_EVENT,
            function() {
                PopViewManager.getInstance().hideAll();
                var e = t.LoginService.getUserNick();
                n.isAccountLoginSuccess = !0,
                LoginManager.needVerifyCode = !1,
                n.onShowAnnouncement(null),
                BubblerManager.getInstance().showText("亲爱的<font color='0xfcf47c'>" + e + "</font>,欢迎进入游戏！", !0)
            },
            this),
            LoginManager.loginByWebSign(i);
            else {
                console.log("===login===========================");
                var r = LoginManager.getSavedId();
                e || 0 == r.length ? this.showAccountPop() : this.showUserInfo()
            }
        },
        n.prototype.onSocketConnected = function() {
            console.log("===========onSocketConnected==================="),
            LoginManager.removeEventListener(LoginEvent.CONNECT_SOCKET_SUCCESS, this.onSocketConnected, this);
            var t = egret.getOption("sid");
            LoginManager.loginByWebSign(t)
        },
        n.prototype.showActivityAnnouncement = function() {
            this.currPop = new ActivityAnnouncement,
            PopViewManager.getInstance().openView(this.currPop)
        },
        n.prototype.onStartGame = function(e) {
            if (!t.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                var n = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                this.currPop = new t.MaintainsPop(n);
                var i = PopViewManager.createDefaultStyleObject();
                return i.caller = this,
                i.clickMaskHandler = function() {},
                PopViewManager.getInstance().openView(this.currPop, i),
                AnnouncementManager.getServerItems(),
                void StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截")
            }
            if (this.cbAgreement.selected) {
                LoginManager.getSavedId()[0];
                this.currServerInfo = null,
                LoginManager.allServiceInfo && LoginManager.allServiceInfo.svrList.length > 0 ? t.HistoryUtil.serverInfo ? OnlineManager.getInstance().enterServer(t.HistoryUtil.serverInfo) : this.showServerList() : this.isAccountLoginSuccess ? t.HistoryUtil.serverInfo ? OnlineManager.getInstance().enterServer(t.HistoryUtil.serverInfo) : this.showServerList() : this.login(!0)
            } else Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
            StatLogger.log("1023版本系统功能", "登录界面", "点击登陆界面【开始游戏】")
        },
        n.prototype.onLoginGame = function(e) {
            this.currPop && this.currPop.addEventListener(PopView.EVENT_DESTROY, this.showUserInfo, this),
            PopViewManager.getInstance().hideAll(),
            this.showUserInfo();
            t.LoginService.getUserNick()
        },
        n.prototype.onShowAnnouncement = function(t) {
            this.showAnnouncementFlag || (this.checkAnnouncement(), this.showAnnouncementFlag = !0)
        },
        n.prototype.showUserInfo = function() {
            t.HistoryUtil.showUserInfo(),
            t.AgreementUtil.init(this)
        },
        n.prototype.showServerList = function() {
            this.cbAgreement.selected ? (this.currPop = new t.ServerList(this), PopViewManager.getInstance().openView(this.currPop, this.getEmptyPopStyle())) : Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。")
        },
        n.prototype.getEmptyPopStyle = function() {
            var t = PopViewManager.createDefaultStyleObject();
            return t.caller = this,
            t
        },
        n.prototype.initGameServer = function() {
            var t = new egret.HttpRequest;
            t.responseType = egret.HttpResponseType.TEXT,
            t.open(GameInfo.online_gate, egret.HttpMethod.POST),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
            t.send(),
            t.once(egret.Event.COMPLETE,
            function(t) {
                var e = t.currentTarget,
                n = e.response.split("|"),
                i = Math.floor(Math.random() * n.length);
                SocketConnection.mainSocket.ip = n[i].split(":")[0],
                SocketConnection.mainSocket.port = n[i].split(":")[1]
            },
            this)
        },
        n.prototype.onGameLoginSuccess = function(e) {
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
            SocketConnection.send(41452),
            t.LoginService.loadPreloadRes()
        },
        n.prototype.checkAnnouncement = function() {
            var e = this;
            AnnouncementManager.getMaintain().then(function(n) {
                if (e.touchChildren = !0, n) {
                    var i = n.text.replace(/\\n/g, "\n");
                    e.currPop = new t.MaintainsPop(i);
                    var r = PopViewManager.createDefaultStyleObject();
                    r.caller = e,
                    r.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(e.currPop, r)
                } else AnnouncementManager.isNeedOpen().then(function(t) {
                    t && !GameInfo.isChecking && PopViewManager.getInstance().openView(new ActivityAnnouncement)
                })
            })
        },
        n.prototype.checkForceUpdate = function() {
            var t = this;
            return new Promise(function(e, n) {
                if (GameInfo.isApp) {
                    var i = ~~egret.getOption("version"),
                    r = egret.getOption("channel");
                    config.Package_update.load(function() {
                        for (var t = config.Package_update.getItems(), n = 0; n < t.length; n++) {
                            var o = t[n];
                            if (o.channel == r) {
                                if (o.force_update > 0 && o.version > i) return void e(o);
                                break
                            }
                        }
                        e(null)
                    },
                    t)
                } else e(null)
            })
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            RES.destroyRes("login"),
            this.loginAccount && this.loginAccount.dispose(),
            ImageButtonUtil.removeAll(this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this),
            EventManager.removeAll(this)
        },
        n
    } (BaseModule);
    t.Login = e,
    __reflect(e.prototype, "login.Login")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.useThirdLogin = !1,
            n.hasVerifyCode = !1,
            n.baseHeight = 278,
            n.baseWidth = 442,
            n.thirdLoginHeight = 95,
            n.thirdLoginWidth = 116,
            n.verifyCodeHeight = 50,
            n.WX_TOKEN_KEY = "WX_TOKEN_KEY",
            n.isFirstLogin = !0,
            n.interval = 0,
            n.skinName = LoginAccountSkin,
            n.service = t,
            egret.getOption("thirdlogin") && (n.useThirdLogin = !0),
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.grpCode.parent.removeChild(this.grpCode),
            LoginManager.addEventListener(LoginEvent.CONNECT_SOCKET_SUCCESS, this.onSocketConnected, this),
            LoginManager.connectServer(),
            this.adaptLayout(),
            this.showAccount(),
            LoginManager.needVerifyCode && (this.showCode(LoginManager.IMG_BY), this.adaptLayout()),
            LoginManager.addEventListener(LoginEvent.PWD_FAILD, this.onPwdFaildHandler, this)
        },
        n.prototype.removeEvent = function() {
            LoginManager.removeEventListener(LoginEvent.CONNECT_SOCKET_SUCCESS, this.onSocketConnected, this),
            LoginManager.removeEventListener(LoginEvent.PWD_FAILD, this.onPwdFaildHandler, this)
        },
        n.prototype.initService = function(t) {
            this.service = t
        },
        n.prototype.onSocketConnected = function(t) {
            console.log("login-->连接成功"),
            this.getVerifCode()
        },
        n.prototype.onPwdFaildHandler = function(t) {
            var e = t.obj,
            n = e.verifyCode,
            i = e.errorCode;
            1 == i ? BubblerManager.getInstance().showText("密码错误") : 2 == i && (this.isFirstLogin || (BubblerManager.getInstance().showText("验证码错误！"), this.isFirstLogin = !1)),
            this.showCode(n),
            this.adaptLayout()
        },
        n.prototype.showCode = function(t) {
            var e = this;
            this.txtCode.text = "",
            this.hasVerifyCode = !0;
            var n = t,
            i = new egret.Texture;
            this.grpContent.addChildAt(this.grpCode, 2),
            egret.BitmapData.create("arraybuffer", n.rawBuffer,
            function(t) {
                i.bitmapData = t,
                e.verify_code.source = i
            })
        },
        n.prototype.showAccount = function() {
            this.addAccountEvent(),
            this.account_scroller.visible = !1,
            this.txtCode.restrict = "0-9a-zA-Z",
            this.txtCode.maxChars = 4,
            LoginManager.isPwdMD5 = !1,
            this.btn_save.selected = !0;
            var t = LoginManager.getSavedId(),
            e = "dengru";
            if (t.length > 0) {
                this.currUserInfo = t[0],
                this.currUserInfo && (this.txtAccount.text = this.currUserInfo.k, this.txtPwd.text = this.currUserInfo.v, this.btn_save.selected = !!this.currUserInfo.v, LoginManager.isPwdMD5 = !0),
                this.grpItem.removeChildren(),
                this.grpItem.addChild(this.item_bg);
                for (var n = 0; n < t.length; n++) {
                    var i = new eui.Component;
                    i.skinName = AccountItemSkin;
                    var r = t[n];
                    i.txt.text = r.k,
                    i.info = t[n],
                    i.y = 37 * n,
                    this.grpItem.addChild(i),
                    0 == n && (i.line.visible = !1),
                    i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectAccount, this)
                }
                this.item_bg.height = 37 * t.length + 10
            } else this.btnArrow.visible = !1,
            e = "dengru1";
            OnlineManager.getInstance().currServerInfo = null
        },
        n.prototype.adaptLayout = function() {
            var t = this.baseHeight,
            e = this.baseWidth;
            this.hasVerifyCode && (t += this.verifyCodeHeight),
            this.useThirdLogin ? (t += this.thirdLoginHeight, e += this.thirdLoginWidth, this.grpContent.addChild(this.txtThirdLoginTitle), this.grpContent.addChild(this.grpThirdLogin)) : (DisplayUtil.removeForParent(this.txtThirdLoginTitle), DisplayUtil.removeForParent(this.grpThirdLogin)),
            this.account_bg.height = t,
            this.account_bg.width = e
        },
        n.prototype.onSelectAccount = function(t) {
            var e = t.currentTarget.info;
            this.currUserInfo = e,
            this.txtAccount.text = this.currUserInfo.k,
            this.txtPwd.text = this.currUserInfo.v,
            this.btn_save.selected = !!this.currUserInfo.v,
            LoginManager.isPwdMD5 = !0,
            this.txtPwd.addEventListener(egret.Event.CHANGE, this.onChangePwd, this),
            this.changeArrowState(),
            t.stopImmediatePropagation()
        },
        n.prototype.addAccountEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnRegister,
            function() {
                egret.getOption("register") || Alarm.show("暂不开放注册功能，请前往页游首页注册")
            },
            this),
            ImageButtonUtil.add(this.btnGetPwd,
            function() {
                Alarm.show("暂不开放密码找回功能，请前往页游首页找回密码")
            },
            this),
            ImageButtonUtil.add(this.btnLogin,
            function() {
                if (StatLogger.log("1023版本系统功能", "登录界面", "点击【登陆】按钮"), !AnnouncementManager.canSkipDialog && AnnouncementManager.maintainItem) {
                    DisplayUtil.setColor(e.btnLogin, DisplayUtil.COLOR_GRAY);
                    var n = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n"),
                    i = new t.MaintainsPop(n),
                    r = PopViewManager.createDefaultStyleObject();
                    r.caller = e,
                    r.clickMaskHandler = function() {
                        console.log("========================")
                    },
                    PopViewManager.getInstance().openView(i, r),
                    StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                    AnnouncementManager.getServerItems()
                } else {
                    if (!e.service.cbAgreement.selected) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
                    LoginManager.MODE = LoginManager.NORMAL_MODE,
                    e.check() && t.LoginService.login(e.txtAccount.text, e.txtPwd.text, LoginManager.isPwdMD5, e.btn_save.selected)
                }
            },
            this),
            ImageButtonUtil.add(this.btnArrow,
            function(t) {
                e.changeArrowState(),
                t.stopImmediatePropagation()
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                e.getVerifCode()
            },
            this),
            this.txtPwd.addEventListener(egret.Event.CHANGE, this.onChangePwd, this),
            ImageButtonUtil.add(this.btnWX,
            function() {
                if (!AnnouncementManager.canSkipDialog && AnnouncementManager.maintainItem) {
                    DisplayUtil.setColor(e.btnLogin, DisplayUtil.COLOR_GRAY);
                    var n = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n"),
                    i = new t.MaintainsPop(n),
                    r = PopViewManager.createDefaultStyleObject();
                    r.caller = e,
                    r.clickMaskHandler = function() {},
                    PopViewManager.getInstance().openView(i, r),
                    StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                    AnnouncementManager.getServerItems()
                } else {
                    if (!egret.localStorage.getItem("login_note_check_" + MainManager.actorID)) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
                    LoginManager.MODE = LoginManager.NORMAL_MODE,
                    LoginManager.wechatLogin()
                }
            },
            this),
            ImageButtonUtil.add(this.btnQQ,
            function() {
                if (!AnnouncementManager.canSkipDialog && AnnouncementManager.maintainItem) {
                    DisplayUtil.setColor(e.btnLogin, DisplayUtil.COLOR_GRAY);
                    var t = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n"),
                    n = {
                        str: t,
                        title: AnnouncementManager.maintainItem.title,
                        hideClose: !1,
                        isHtml: !0
                    };
                    tipsPop.TipsPop.openHelpPop(n, null),
                    StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                    AnnouncementManager.getServerItems()
                } else {
                    if (!egret.localStorage.getItem("login_note_check_" + MainManager.actorID)) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
                    LoginManager.qqLogin()
                }
            },
            this)
        },
        n.prototype.onWXLogin = function() {
            var t = localStorage.getItem(this.WX_TOKEN_KEY);
            if (t) {
                egret.clearInterval(this.interval),
                LoginManager.MODE = LoginManager.SESSION_MODE;
                for (var e = t.split("&"), n = {},
                i = 0; i < e.length; i++) {
                    var r = e[i].split("=");
                    n[r[0]] = r[1]
                }
                var o = n.sid,
                s = LoginManager.S2B(o),
                a = new SoUserInfo;
                a.userID = +n.uid,
                a.password = "00000000",
                LoginManager.USERINFO = a,
                LoginManager.session = new egret.ByteArray,
                LoginManager.session.writeBytes(s),
                LoginManager.login(a)
            }
        },
        n.prototype.getVerifCode = function(t) {
            void 0 === t && (t = !1),
            egret.getOption("sid") || (LoginManager.addEventListener(LoginEvent.GET_VERIFCODE_SUCCESS, this.onGetCodeHandler, this), LoginManager.addEventListener(LoginEvent.NO_VERIFCODE, this.onNoCodeHandler, this), LoginManager.getVerifCode())
        },
        n.prototype.onGetCodeHandler = function(t) {
            this.showCode(t.obj),
            LoginManager.dispatchEvent(new LoginEvent(LoginEvent.CLOSE_LOADING)),
            this.adaptLayout()
        },
        n.prototype.onNoCodeHandler = function(t) {
            LoginManager.dispatchEvent(new LoginEvent(LoginEvent.CLOSE_LOADING)),
            this.adaptLayout()
        },
        n.prototype.changeArrowState = function() {
            var t = this.account_scroller.visible;
            t ? (this.btnArrow.source = "down_arrow_png", egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageTouch, this)) : (this.btnArrow.source = "up_arrow_png", egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageTouch, this)),
            this.account_scroller.touchEnabled = !t,
            this.account_scroller.touchChildren = !t,
            this.account_scroller.visible = !t
        },
        n.prototype.onStageTouch = function() {
            this.changeArrowState()
        },
        n.prototype.onChangePwd = function(t) {
            LoginManager.isPwdMD5 = !1,
            this.txtPwd.removeEventListener(egret.Event.CHANGE, this.onChangePwd, this),
            this.txtPwd.text.length > 10 && (this.txtPwd.text = "")
        },
        n.prototype.check = function() {
            if (this.txtAccount.text = this.txtAccount.text.trim(), "" == this.txtAccount.text) return Alarm.show("请输入你的米米号或者邮箱地址！"),
            !1;
            if ("" == this.txtPwd.text) return Alarm.show("请输入你的密码！"),
            !1;
            if (this.hasVerifyCode) {
                if ("" == this.txtCode.text) return this.txtCode.text = "",
                Alert.show("请输入验证码！"),
                !1;
                var t = this.txtCode.text,
                e = new egret.ByteArray;
                e.writeUTFBytes(t),
                e.length = 6,
                LoginManager.IMG_BY = e
            }
            return ! 0
        },
        n.prototype.destroy = function() {
            this.removeEvent(),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.LoginAccountPanel = e,
    __reflect(e.prototype, "login.LoginAccountPanel")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = skins.ServerItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            var t = this.data;
            this.txtNo.text = t.OnlineID + "",
            this.txtName.text = "" + t.onlineName,
            this.icon_friend_online.visible = t.Friends > 0,
            6 == t.UserCnt ? this.icon_hot.source = "l202202_server_list_icon_fire_png": t.UserCnt >= 4 ? this.icon_hot.source = "l202202_server_list_icon_hot_png": this.icon_hot.source = "l202202_server_list_icon_free_png"
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.ServerItemRender = e,
    __reflect(e.prototype, "login.ServerItemRender")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return LoginManager2.historyUserData ? n.currentState = "hasHistory": n.currentState = "noHistory",
            n.skinName = t.AccountSkin,
            n.name = "AccountPop",
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.btnLogin,
            function() {
                t.isNotMaintains() && LoginManager2.login(!1)
            },
            this),
            LoginManager2.historyUserData && (LoginManager2.historyUserData.nick && LoginManager2.historyUserData.nick.length > 0 ? this.txtName.text = LoginManager2.historyUserData.nick: this.txtName.text = "" + LoginManager2.historyUserData.uid, LoginManager2.historyUserData.loginType == LoginType.qq ? this.iconLoginType.source = "l202202_account_start_icon_qq_png": LoginManager2.historyUserData.loginType == LoginType.wx ? this.iconLoginType.source = "l202202_account_start_icon_wechat_png": this.iconLoginType.source = "l202202_account_start_icon_tm_png"),
            ImageButtonUtil.add(this.btnDown,
            function() {
                LoginManager2.historyUserData = null,
                LoginManager2.flushUserLoginData(),
                t.currentState = "noHistory"
            },
            this)
        },
        n.prototype.isNotMaintains = function() {
            if (!t.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                var e = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n");
                return PopViewManager.getInstance().openView(new t.MaintainsPop(e)),
                AnnouncementManager.getServerItems(),
                StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                !1
            }
            return ! 0
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.AccountPop = e,
    __reflect(e.prototype, "login.AccountPop")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e
    } (PopView);
    t.ActivityAnnouncementPop = e,
    __reflect(e.prototype, "login.ActivityAnnouncementPop")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.ChildDialogSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            ImageButtonUtil.add(this.btnClose, this.hide, this),
            ImageButtonUtil.add(this.btnOK, this.hide, this),
            this.txtContent.textFlow = (new egret.HtmlTextParser).parse("1.本游戏是一款回合制精灵养成类游戏，<font color='0xff0000'>适用于年满12周岁及以上的用户，建议未成年人在家长监护下使用游戏产品</font>。\n2.本游戏基于架空的故事背景和幻想世界观，没有基于真实历史和现实事件的改编内容。玩家将作为高科技机器人“赛尔”，为人类寻找新能源和宜居地，同时与各种外星精灵一起冒险。游戏中存在与回合对战相关的对抗内容，玩家可以合理指挥精灵、使用道具与对手竞争，从而获取胜利。游戏中有基于文字的陌生人社交系统，社交系统的管理遵循相关法律法规。\n3.本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：\n游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年人用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。 <font color='0xff0000'>未成年人用户仅可在【周五】、【周六】 、【周日】 以及【法定节假日】的20时至21时，使用1小时。</font>\n4.本游戏以太空冒险为主题。基于架空世界展开剧情，采用风格鲜明的美术风格设计，剧情丰满，玩法多样，能够带给玩家轻松愉悦的游戏氛围。")
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.LoginAgePop = e,
    __reflect(e.prototype, "login.LoginAgePop")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return i.msg = n,
            i.skinName = t.MaintainPopSkin,
            IS_RELEASE || window.addEventListener("message", i.onWebMessage.bind(i)),
            i
        }
        return __extends(n, e),
        n.prototype.onWebMessage = function(t) {
            if (!IS_RELEASE) try {
                var e = JSON.parse(t.data);
                "tips_content_change" == e.action && (this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(StringUtil.TransformLineBreak(e.msg)))
            } catch(t) {}
        },
        n.prototype.childrenCreated = function() {
            var t = this;
            this.txtMsg.textFlow = (new egret.HtmlTextParser).parse(this.msg),
            ImageButtonUtil.add(this.close,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this)
        },
        n.prototype.destroy = function() {
            e.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.MaintainsPop = e,
    __reflect(e.prototype, "login.MaintainsPop")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.useThirdLogin = !1,
            n.hasVerifyCode = !1,
            n.baseHeight = 296,
            n.baseWidth = 442,
            n.thirdLoginHeight = 95,
            n.thirdLoginWidth = 116,
            n.verifyCodeHeight = 50,
            n.WX_TOKEN_KEY = "WX_TOKEN_KEY",
            n.isFirstLogin = !0,
            n.interval = 0,
            n.skinName = LoginAccountPanelSkin,
            n.service = t,
            egret.getOption("thirdlogin") && (n.useThirdLogin = !0),
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            DisplayUtil.removeForParent(this.grpCode),
            LoginManager.addEventListener(LoginEvent.CONNECT_SOCKET_SUCCESS, this.onSocketConnected, this),
            LoginManager.connectServer(),
            this.adaptLayout(),
            this.showAccount(),
            LoginManager.needVerifyCode && (this.showCode(LoginManager.IMG_BY), this.adaptLayout()),
            LoginManager.addEventListener(LoginEvent.PWD_FAILD, this.onPwdFaildHandler, this),
            this.btn_save.addEventListener(egret.Event.CHANGE,
            function(e) {
                if (t.btn_save.selected) {
                    if (t.txtPwd.text.length > 16) return e.preventDefault(),
                    t.btn_save.selected = !1,
                    void BubblerManager.getInstance().showText("历史密码无法显示！");
                    t.txtPwd.inputType = egret.TextFieldInputType.TEXT,
                    t.txtPwd.displayAsPassword = !1
                } else t.txtPwd.inputType = egret.TextFieldInputType.PASSWORD,
                t.txtPwd.displayAsPassword = !0
            },
            this),
            this.account_scroller.addEventListener(eui.UIEvent.CHANGE_START,
            function() {
                t.hasMoveScroller = !0
            },
            this),
            this.account_scroller.addEventListener(eui.UIEvent.CHANGE_END,
            function() {
                egret.setTimeout(function() {
                    t.hasMoveScroller = !1
                },
                t, 0)
            },
            this)
        },
        n.prototype.updateVerifyCode = function() {
            DisplayUtil.removeForParent(this.grpCode),
            this.hasVerifyCode = !1,
            LoginManager.needVerifyCode && this.showCode(LoginManager.IMG_BY),
            this.adaptLayout()
        },
        n.prototype.removeEvent = function() {
            LoginManager.removeEventListener(LoginEvent.CONNECT_SOCKET_SUCCESS, this.onSocketConnected, this),
            LoginManager.removeEventListener(LoginEvent.PWD_FAILD, this.onPwdFaildHandler, this)
        },
        n.prototype.initService = function(t) {
            this.service = t
        },
        n.prototype.onSocketConnected = function(t) {
            console.log("login-->连接成功"),
            this.getVerifCode()
        },
        n.prototype.onPwdFaildHandler = function(t) {
            var e = t.obj,
            n = e.verifyCode,
            i = e.errorCode;
            console.log(e),
            console.log("======onPwdFaildHandler=================", i),
            1 == i ? BubblerManager.getInstance().showText("密码错误") : 2 == i && BubblerManager.getInstance().showText("验证码错误！"),
            this.showCode(n),
            this.adaptLayout()
        },
        n.prototype.showCode = function(t) {
            var e = this;
            this.txtCode.text = "",
            this.hasVerifyCode = !0;
            var n = t,
            i = new egret.Texture;
            this.grpContent.addChildAt(this.grpCode, 2),
            egret.BitmapData.create("arraybuffer", n.rawBuffer,
            function(t) {
                i.bitmapData = t,
                e.verify_code.source = i
            })
        },
        n.prototype.showAccount = function() {
            this.addAccountEvent(),
            this.account_scroller.visible = !1,
            this.txtCode.restrict = "0-9a-zA-Z",
            this.txtCode.maxChars = 4,
            LoginManager.isPwdMD5 = !1;
            var t = LoginManager.getSavedId(),
            e = "dengru";
            if (t.length > 0) {
                this.currUserInfo = t[0],
                this.currUserInfo && (this.txtAccount.text = this.currUserInfo.k, this.txtPwd.text = this.currUserInfo.v, LoginManager.isPwdMD5 = !0),
                this.grpItem.removeChildren(),
                this.grpItem.addChild(this.item_bg);
                for (var n = 0; n < t.length; n++) {
                    var i = new eui.Component;
                    i.skinName = AccountItemSkin;
                    var r = t[n];
                    i.txt.text = r.k,
                    i.info = t[n],
                    i.y = 37 * n,
                    this.grpItem.addChild(i),
                    0 == n && (i.line.visible = !1),
                    i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectAccount, this)
                }
                this.item_bg.height = 37 * t.length + 10
            } else this.btnArrow.visible = !1,
            e = "dengru1";
            OnlineManager.getInstance().currServerInfo = null
        },
        n.prototype.adaptLayout = function() {
            var t = this.baseHeight,
            e = this.baseWidth;
            this.hasVerifyCode ? (t += this.verifyCodeHeight, this.grpBottom.y = 248) : this.grpBottom.y = 198,
            this.useThirdLogin ? (t += this.thirdLoginHeight, e += this.thirdLoginWidth, this.grpContent.addChild(this.txtThirdLoginTitle), this.grpContent.addChild(this.grpThirdLogin)) : (DisplayUtil.removeForParent(this.txtThirdLoginTitle), DisplayUtil.removeForParent(this.grpThirdLogin)),
            this.account_bg.height = t,
            this.height = t
        },
        n.prototype.onSelectAccount = function(t) {
            var e = t.currentTarget.info;
            this.currUserInfo = e,
            this.txtAccount.text = this.currUserInfo.k,
            this.txtPwd.text = this.currUserInfo.v,
            LoginManager.isPwdMD5 = !0,
            this.txtPwd.addEventListener(egret.Event.CHANGE, this.onChangePwd, this),
            this.changeArrowState(),
            t.stopImmediatePropagation()
        },
        n.prototype.addAccountEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnRegister,
            function() {
                egret.getOption("register") || Alarm.show("暂不开放注册功能，请前往页游首页注册")
            },
            this),
            ImageButtonUtil.add(this.btnGetPwd,
            function() {
                Alarm.show("暂不开放密码找回功能，请前往页游首页找回密码")
            },
            this),
            ImageButtonUtil.add(this.btnBack,
            function() {
                PopViewManager.getInstance().hideView(e, !1)
            },
            this),
            ImageButtonUtil.add(this.btnLogin,
            function() {
                if (StatLogger.log("1023版本系统功能", "登录界面", "点击【登陆】按钮"), !t.SkipMaintainUtil.canSkipMaintain && AnnouncementManager.maintainItem) {
                    DisplayUtil.setColor(e.btnLogin, DisplayUtil.COLOR_GRAY);
                    var n = AnnouncementManager.maintainItem.text.replace(/\\n/g, "\n"),
                    i = new t.MaintainsPop(n),
                    r = PopViewManager.createDefaultStyleObject();
                    r.caller = e,
                    r.clickMaskHandler = function() {
                        console.log("========================")
                    },
                    PopViewManager.getInstance().openView(i, r),
                    StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间被拦截"),
                    AnnouncementManager.getServerItems()
                } else {
                    if (!e.service.cbAgreement.selected) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
                    LoginManager.MODE = LoginManager.NORMAL_MODE,
                    e.check() && (t.HistoryUtil.serverInfo = null, t.LoginService.login(e.txtAccount.text, e.txtPwd.text, LoginManager.isPwdMD5, !0))
                }
            },
            this),
            ImageButtonUtil.add(this.btnArrow,
            function(t) {
                e.changeArrowState(),
                t.stopImmediatePropagation()
            },
            this),
            ImageButtonUtil.add(this.btnRefresh,
            function() {
                e.getVerifCode()
            },
            this),
            this.txtPwd.addEventListener(egret.Event.CHANGE, this.onChangePwd, this)
        },
        n.prototype.onWXLogin = function() {
            var t = localStorage.getItem(this.WX_TOKEN_KEY);
            if (t) {
                egret.clearInterval(this.interval),
                LoginManager.MODE = LoginManager.SESSION_MODE;
                for (var e = t.split("&"), n = {},
                i = 0; i < e.length; i++) {
                    var r = e[i].split("=");
                    n[r[0]] = r[1]
                }
                var o = n.sid,
                s = LoginManager.S2B(o),
                a = new SoUserInfo;
                a.userID = +n.uid,
                a.password = "00000000",
                LoginManager.USERINFO = a,
                LoginManager.session = new egret.ByteArray,
                LoginManager.session.writeBytes(s),
                LoginManager.login(a)
            }
        },
        n.prototype.getVerifCode = function(t) {
            void 0 === t && (t = !1),
            egret.getOption("sid") || (LoginManager.addEventListener(LoginEvent.GET_VERIFCODE_SUCCESS, this.onGetCodeHandler, this), LoginManager.addEventListener(LoginEvent.NO_VERIFCODE, this.onNoCodeHandler, this), LoginManager.getVerifCode())
        },
        n.prototype.onGetCodeHandler = function(t) {
            this.showCode(t.obj),
            LoginManager.dispatchEvent(new LoginEvent(LoginEvent.CLOSE_LOADING)),
            this.adaptLayout()
        },
        n.prototype.onNoCodeHandler = function(t) {
            LoginManager.dispatchEvent(new LoginEvent(LoginEvent.CLOSE_LOADING)),
            this.adaptLayout()
        },
        n.prototype.changeArrowState = function() {
            var t = this.account_scroller.visible;
            t ? (this.btnArrow.source = "down_arrow_png", egret.lifecycle.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageTouch, this)) : (this.btnArrow.source = "up_arrow_png", egret.lifecycle.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageTouch, this)),
            this.account_scroller.touchEnabled = !t,
            this.account_scroller.touchChildren = !t,
            this.account_scroller.visible = !t
        },
        n.prototype.onStageTouch = function() {
            this.hasMoveScroller || this.changeArrowState()
        },
        n.prototype.onChangePwd = function(t) {
            LoginManager.isPwdMD5 = !1,
            this.txtPwd.removeEventListener(egret.Event.CHANGE, this.onChangePwd, this),
            this.txtPwd.text.length > 10 && (this.txtPwd.text = "")
        },
        n.prototype.check = function() {
            if (this.txtAccount.text = this.txtAccount.text.trim(), "" == this.txtAccount.text) return Alarm.show("请输入你的米米号或者邮箱地址！"),
            !1;
            if ("" == this.txtPwd.text) return Alarm.show("请输入你的密码！"),
            !1;
            if (this.hasVerifyCode) {
                if ("" == this.txtCode.text) return this.txtCode.text = "",
                Alert.show("请输入验证码！"),
                !1;
                var t = this.txtCode.text,
                e = new egret.ByteArray;
                e.writeUTFBytes(t),
                e.length = 6,
                LoginManager.IMG_BY = e
            }
            return ! 0
        },
        n.prototype.destroy = function() {},
        n.prototype.dispose = function() {
            this.removeEvent(),
            ImageButtonUtil.removeAll(this)
        },
        n
    } (PopView);
    t.LoginAccountNew = e,
    __reflect(e.prototype, "login.LoginAccountNew")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
},
login; !
function(t) {
    var e = function(e) {
        function n(n) {
            var i = e.call(this) || this;
            return i.serverList = [],
            i.recommList = [],
            i.startServerId = 1001,
            i.endServerId = 1500,
            i.iOSServerId = 1499,
            i.currServerId = 1001,
            i.service = n,
            i.skinName = t.ServerListSkin,
            i.percentWidth = 100,
            i.width = egret.lifecycle.stage.stageWidth,
            i.arrayCollection = new eui.ArrayCollection,
            i
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.percentWidth = 100,
            this.width = egret.lifecycle.stage.stageWidth,
            this.addEvent(),
            this.scroller.viewport = this.list,
            this.list.itemRenderer = t.ServerItemRender,
            this.list.dataProvider = this.arrayCollection,
            DeviceInfoManager.iOSChecking() && IS_RELEASE ? (this.currServerId = this.iOSServerId, this.endServerId = this.currServerId, EventManager.addEventListener(LoginEvent.SHOW_SERVER_LIST, this.onGetServerList, this), this.getServerList(this.currServerId)) : this.showServerList(),
            GameInfo.isChecking,
            this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEnterServer, this),
            this.grpGO.right = this.grpGO.right + DeviceInfoManager.adapterOffSetX
        },
        n.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnBack,
            function() {
                PopViewManager.getInstance().hideView(t)
            },
            this),
            ImageButtonUtil.add(this.btnGo,
            function() {
                var e = ~~t.txtServerNo.text;
                if (e > 0) {
                    if (IS_RELEASE && 1499 == e) return void BubblerManager.getInstance().showText("服务器繁忙！");
                    for (var n = 0,
                    i = t.serverList; n < i.length; n++) {
                        var r = i[n];
                        if (r.OnlineID == e) return void OnlineManager.getInstance().enterServer(r)
                    }
                    LoginSocketConnection.addCmdListener(CommandID.RANGE_ONLINE, t.findServer, t),
                    LoginSocketConnection.send(CommandID.RANGE_ONLINE, e, e, 0)
                } else BubblerManager.getInstance().showText("请输入正确的服务器编号")
            },
            this)
        },
        n.prototype.findServer = function(t) {
            var e = new RangeSvrInfo(t.data);
            return 0 == e.svrList.length ? void Alarm.show("服务器不存在！") : (LoginSocketConnection.removeCmdListener(CommandID.RANGE_ONLINE, this.findServer, this), void OnlineManager.getInstance().enterServer(e.svrList[0]))
        },
        n.prototype.showServerList = function() {
            this.visible = !0;
            for (var e = LoginManager.allServiceInfo.svrList,
            n = 0,
            i = e; n < i.length; n++) {
                var r = i[n];
                r && 0 != r.onlineID && (r.onlineName = t.LoginService.getServerName(r.OnlineID), this.serverList.push(r), 1500 != r.OnlineID && 1501 != r.OnlineID && 1499 != r.OnlineID && this.arrayCollection.addItem(r), this.recommList.push(r.OnlineID))
            }
            EventManager.addEventListener(LoginEvent.SHOW_SERVER_LIST, this.onGetServerList, this),
            this.getServerList(this.currServerId),
            this.list.alpha = .4,
            egret.Tween.get(this.list).to({
                alpha: 1
            },
            400, egret.Ease.backOut)
        },
        n.prototype.getServerList = function(t) {
            LoginManager.getRangeServer(t, t + 100)
        },
        n.prototype.onGetServerList = function(e) {
            this.currServerId += 100;
            var n = e.obj;
            n || (n = []),
            n = n.sort(function(t, e) {
                return t.onlineID - e.onlineID
            });
            for (var i = 0,
            r = n; i < r.length; i++) {
                var o = r[i];
                if (o && 0 != o.onlineID && (o.onlineName = t.LoginService.getServerName(o.OnlineID), this.recommList.indexOf(o.OnlineID) < 0)) {
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
        n.prototype.onEnterServer = function(t) {
            if (!this.service.cbAgreement.selected) return void Alarm.show("请同意并勾选下方《淘米游戏服务协议及隐私保护条款》，方可进入游戏。");
            if (DeviceInfoManager.iOSChecking() && IS_RELEASE) {
                var e = 1499;
                LoginSocketConnection.sendAsync(CommandID.RANGE_ONLINE, e, e, 0).then(function(t) {
                    var e = new RangeSvrInfo(t.data);
                    return 0 == e.svrList.length ? void Alarm.show("服务器不存在！") : void OnlineManager.getInstance().enterServer(e.svrList[0])
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
    t.ServerList = e,
    __reflect(e.prototype, "login.ServerList")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function t() {}
        return t.init = function(t) {
            this.service = t,
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
            t.cbAgreement.addEventListener(egret.Event.CHANGE, this.onChangeCheckBox, this),
            t.txtService.addEventListener(egret.TextEvent.LINK, this.openServicePage, this);
            var e = 0;
            LoginManager2.historyUserData && (e = LoginManager2.historyUserData.uid),
            LoginManager2.currUserData && (e = LoginManager2.currUserData.uid),
            t.cbAgreement.selected = !!egret.localStorage.getItem("login_note_check_" + e)
        },
        Object.defineProperty(t, "isAgree", {
            get: function() {
                return this.agree
            },
            enumerable: !0,
            configurable: !0
        }),
        t.openServicePage = function(t) {
            "service" == t.text ? window.open("https://www.61.com/about/service.html", "_blank") : "protect" == t.text && window.open("https://www.61.com/about/service.html", "_blank")
        },
        t.onChangeCheckBox = function() {
            var t = 0;
            LoginManager2.currUserData && (t = LoginManager2.currUserData.uid),
            this.service.cbAgreement.selected ? egret.localStorage.setItem("login_note_check_" + t, "yes") : egret.localStorage.removeItem("login_note_check_" + t),
            this.agree = this.service.cbAgreement.selected
        },
        t.destroy = function() {
            this.service && (this.service.cbAgreement.removeEventListener(egret.Event.CHANGE, this.onChangeCheckBox, this), this.service.txtService.removeEventListener(egret.TextEvent.LINK, this.openServicePage, this), this.service = null)
        },
        t.agree = !1,
        t
    } ();
    t.AgreementUtil = e,
    __reflect(e.prototype, "login.AgreementUtil")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function e() {}
        return e.init = function(t) {
            this.service = t,
            t.user.visible = !1,
            t.grpLastService.visible = !1
        },
        e.showUserInfo = function() {
            if (MainManager.actorID) {
                this.service.user.visible = !0,
                this.service.grpLastService.visible = !0;
                var e = t.LoginService.getUserNick();
                this.service.txtUserName.text = e,
                this.service.icon_account.source = "l202202_account_start_icon_tm_png";
                var n = !1,
                i = egret.localStorage.getItem("last_user_online_" + LoginManager.userID);
                try {
                    var r = JSON.parse(i);
                    r && e.length > 0 && (this.service.grpLastService.visible = !0, this.serverInfo = r, this.service.txtServerID.text = "" + r.onlineID, this.service.txtServerName.text = t.LoginService.getServerName(this.serverInfo.onlineID), 6 == r.UserCnt ? this.service.icon_hot.source = "l202202_main_panel_icon_fire_png": r.UserCnt >= 4 ? this.service.icon_hot.source = "l202202_main_panel_icon_hot_png": this.service.icon_hot.source = "l202202_main_panel_icon_free_png", n = !0)
                } catch(o) {
                    console.error(o)
                }
                this.service.grpLastService.visible = n
            } else this.service.user.visible = !1,
            this.service.grpLastService.visible = !1
        },
        e.findServer = function(n) {
            LoginSocketConnection.removeCmdListener(CommandID.RANGE_ONLINE, e.findServer, this);
            var i = (n.data, new RangeSvrInfo(n.data));
            i.svrList.length > 0 && (this.service.grpLastService.visible = !0, this.serverInfo = i.svrList[0], this.service.txtServerID.text = "" + this.serverInfo.onlineID, this.service.txtServerName.text = t.LoginService.getServerName(this.serverInfo.onlineID), 6 == this.serverInfo.UserCnt ? this.service.icon_hot.source = "l202202_main_panel_icon_fire_png": this.serverInfo.UserCnt >= 4 ? this.service.icon_hot.source = "l202202_main_panel_icon_hot_png": this.service.icon_hot.source = "l202202_main_panel_icon_free_png")
        },
        e.destroy = function() {},
        e
    } ();
    t.HistoryUtil = e,
    __reflect(e.prototype, "login.HistoryUtil")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function e() {}
        return e.init = function() {
            var t = this;
            RES.getResByUrl(ClientConfig.getJSONConfig("servername"),
            function(e, n) {
                t.serverList = e.root.list;
                for (var i = 0; i < t.serverList.length; i++) {
                    var r = ~~t.serverList[i].id;
                    r > 0 && (t.serverMap["" + r] = t.serverList[i])
                }
            },
            this, RES.ResourceItem.TYPE_JSON),
            this.getGameServer()
        },
        e.getServerName = function(t) {
            var e = "";
            return this.serverMap["" + t] && (this.serverMap["" + t], e = this.serverMap["" + t].name),
            e
        },
        e.getGameServer = function() {
            var t = new egret.HttpRequest;
            t.responseType = egret.HttpResponseType.TEXT,
            t.open(GameInfo.online_gate, egret.HttpMethod.POST),
            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
            t.send(),
            t.once(egret.Event.COMPLETE,
            function(t) {
                var e = t.currentTarget,
                n = e.response.split("|"),
                i = Math.floor(Math.random() * n.length);
                SocketConnection.mainSocket.ip = n[i].split(":")[0],
                SocketConnection.mainSocket.port = n[i].split(":")[1]
            },
            this)
        },
        e.getUserNick = function() {
            var t = LoginManager.getHistoryNick(LoginManager.userID);
            return t
        },
        e.login = function(e, n, i, r) {
            switch (this._info = new SoUserInfo, i ? this._info.password = n: (LoginManager.isPwdLegal = t.PasswordUtil.isPasswordLegal(n), this._info.password = (new Md5new).hex_md5((new Md5new).hex_md5(n))), LoginManager.MODE = LoginManager.NORMAL_MODE, LoginManager.getAccountState(e)) {
            case 0:
                return void Alarm.show("请输入合法账号！");
            case 1:
                this._info.userID = Number(e),
                this._info.customID = "",
                this._info.lastUsedID = 1;
                break;
            case 2:
                this._info.customID = e,
                this._info.lastUsedID = 2
            }
            console.log("pwd:" + n),
            r && (this._info.passwordo = this._info.password),
            LoginManager.login(this._info.clone())
        },
        e.loginByHistory = function() {},
        e.loadPreloadRes = function() {
            var t = this;
            LoadingManager.showProgressLoading(100,
            function(t, e) {
                return "当前正在加载..."
            }),
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
            RES.loadConfig("resource/assets/ui/common.json", "resource/assets/ui/").then(function() {
                RES.loadGroup("common").then(function() {
                    t.loadMainPanelRes()
                })
            })
        },
        e.onResourceProgress = function(t) {
            "common" == t.groupName ? LoadingManager.setProgress(89 * t.itemsLoaded / t.itemsTotal) : "main_panel" == t.groupName && LoadingManager.setProgress(89 + 10 * t.itemsLoaded / t.itemsTotal)
        },
        e.loginCompleted = function() {
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
            EventManager.removeEventListener("zipLoadComplete", this.loginCompleted, this),
            EventManager.dispatchEventWith("LoginCompeted"),
            window.hideSerialID && window.hideSerialID()
        },
        e.loadMainPanelRes = function() {
            var t = this;
            RES.loadConfig("resource/assets/ui/main_panel.json", "resource/assets/ui/").then(function() {
                RES.loadGroup("main_panel").then(function() {
                    RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, t.onResourceProgress, t),
                    ZipManager.completed ? t.loginCompleted() : EventManager.addEventListener("zipLoadComplete", t.loginCompleted, t)
                })
            })
        },
        e.serverMap = {},
        e
    } ();
    t.LoginService = e,
    __reflect(e.prototype, "login.LoginService")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function t() {}
        return t.init = function(t) {
            var e = SpineUtil.createAnimate("nianfeidenglu");
            e.touchChildren = !1,
            e.touchEnabled = !1,
            e.play("nianfeidenglu"),
            t.grpMovie.addChild(e);
            var n = SpineUtil.createAnimate("denglutexiao");
            n.touchChildren = !1,
            n.touchEnabled = !1,
            n.play("denglutexiao"),
            t.grpLoginMovie.addChild(n)
        },
        t.destroy = function() {},
        t
    } ();
    t.MovieUtil = e,
    __reflect(e.prototype, "login.MovieUtil")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function t() {}
        return t.isPasswordLegal = function(e) {
            return LoginManager.isPwdMD5 ? !0 : e.length < 6 ? (BubblerManager.getInstance().showText("密码错误"), !1) : t.isContainIllegalChar(e) ? (BubblerManager.getInstance().showText("非法字符"), !1) : t.isWeakPassword(e) ? !0 : !0
        },
        t.isContainIllegalChar = function(t, e) {
            void 0 === e && (e = 16);
            var n = new RegExp("^[a-zA-Z0-9_]{6," + e + "}$");
            return ! n.test(t)
        },
        t.isWeakPassword = function(t) {
            return this.init(),
            null != this.WEAK_PASSWORD_MAP[t] ? !0 : this.isSameStr(t) ? !0 : this.isContinuationStr(t) ? !0 : !1
        },
        t.isSameStr = function(t) {
            var e = /^(\w)\1{5}$/;
            return e.test(t)
        },
        t.isContinuationStr = function(t) {
            var e = t.length;
            if (0 == Number(t) || 6 != e) return ! 1;
            for (var n = t.charCodeAt(0), i = 1; e > i; i++) {
                var r = t.charCodeAt(i);
                if (n != r - 1) return ! 1;
                n = r
            }
            return ! 0
        },
        t.init = function() {
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
        t.MAX_CONTINUATION_NUM = 5,
        t.WEAK_PASSWORD_MAP = {},
        t
    } ();
    t.PasswordUtil = e,
    __reflect(e.prototype, "login.PasswordUtil")
} (login || (login = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
login; !
function(t) {
    var e = function() {
        function t() {}
        return t.init = function(t) {
            t.small_logo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        },
        t.onClick = function(t) {
            this.clickCount++,
            this.clickCount >= 8 && (this._canSkipMaintain = !0, StatLogger.log("1120版本系统功能", "登陆界面", "停服维护期间通过连点8次绕过拦截")),
            t.preventDefault(),
            t.stopImmediatePropagation()
        },
        Object.defineProperty(t, "canSkipMaintain", {
            get: function() {
                return this._canSkipMaintain
            },
            enumerable: !0,
            configurable: !0
        }),
        t.destroy = function() {},
        t.clickCount = 0,
        t._canSkipMaintain = !1,
        t
    } ();
    t.SkipMaintainUtil = e,
    __reflect(e.prototype, "login.SkipMaintainUtil")
} (login || (login = {})),
window.login = window.login || {},
window.skins = window.skins || {};
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype,
    t.prototype = new n
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/AccountItemSkin.exml"] = window.AccountItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["line", "txt"],
        this.height = 37,
        this.width = 435,
        this.elementsContent = [this._Rect1_i(), this.line_i(), this.txt_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Rect1_i = function() {
        var t = new eui.Rect;
        return t.fillAlpha = 0,
        t.height = 37,
        t.width = 435,
        t.x = 0,
        t.y = 0,
        t
    },
    n.line_i = function() {
        var t = new eui.Image;
        return this.line = t,
        t.height = 1,
        t.horizontalCenter = 0,
        t.source = "login_line_png",
        t.width = 271,
        t.y = 4,
        t
    },
    n.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "1234567",
        t.textAlign = "center",
        t.textColor = 11581380,
        t.width = 274,
        t.y = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AccountSkin.exml"] = window.login.AccountSkin = function(t) {
    function e() {
        t.call(this),
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
    __extends(e, t);
    var n = e.prototype;
    return n.account_bg_i = function() {
        var t = new eui.Image;
        return this.account_bg = t,
        t.source = "l202202_account_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.other_line_i = function() {
        var t = new eui.Image;
        return this.other_line = t,
        t.source = "l202202_account_other_line_png",
        t.x = 21,
        t.y = 199,
        t
    },
    n.name_input_bg_i = function() {
        var t = new eui.Image;
        return this.name_input_bg = t,
        t.source = "l202202_account_exchange_name_input_bg_png",
        t.visible = !0,
        t.x = 47,
        t.y = 79,
        t
    },
    n.btnDown_i = function() {
        var t = new eui.Image;
        return this.btnDown = t,
        t.source = "l202202_account_start_btndel_png",
        t.x = 439,
        t.y = 92,
        t
    },
    n.btnLogin_i = function() {
        var t = new eui.Image;
        return this.btnLogin = t,
        t.source = "l202202_account_exchange_btnlogin_png",
        t.x = 192,
        t.y = 134,
        t
    },
    n.qq_i = function() {
        var t = new eui.Image;
        return this.qq = t,
        t.source = "l202202_account_qq_png",
        t.x = 299,
        t
    },
    n.wechat_i = function() {
        var t = new eui.Image;
        return this.wechat = t,
        t.source = "l202202_account_wechat_png",
        t.x = 175,
        t
    },
    n.btnTM_i = function() {
        var t = new eui.Image;
        return this.btnTM = t,
        t.source = "l202202_account_start_btnzhanghao_png",
        t.x = 101,
        t.y = 102,
        t
    },
    n.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "用户昵称用户昵称",
        t.textAlign = "center",
        t.textColor = 8029850,
        t.width = 204,
        t.x = 157,
        t.y = 91,
        t
    },
    n.iconLoginType_i = function() {
        var t = new eui.Image;
        return this.iconLoginType = t,
        t.source = "l202202_account_start_icon_qq_png",
        t.x = 61,
        t.y = 88,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/AccountStartSkin.exml"] = window.login.AccountStartSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["account_bg", "other_line", "btnZhanghao", "btnQQ", "btnWechat"],
        this.height = 310,
        this.width = 523,
        this.elementsContent = [this.account_bg_i(), this.other_line_i(), this.btnZhanghao_i(), this.btnQQ_i(), this.btnWechat_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.account_bg_i = function() {
        var t = new eui.Image;
        return this.account_bg = t,
        t.source = "l202202_account_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.other_line_i = function() {
        var t = new eui.Image;
        return this.other_line = t,
        t.source = "l202202_account_other_line_png",
        t.x = 21,
        t.y = 184,
        t
    },
    n.btnZhanghao_i = function() {
        var t = new eui.Image;
        return this.btnZhanghao = t,
        t.source = "l202202_account_start_btnzhanghao_png",
        t.x = 101,
        t.y = 102,
        t
    },
    n.btnQQ_i = function() {
        var t = new eui.Image;
        return this.btnQQ = t,
        t.source = "l202202_account_qq_png",
        t.x = 298,
        t.y = 218,
        t
    },
    n.btnWechat_i = function() {
        var t = new eui.Image;
        return this.btnWechat = t,
        t.source = "l202202_account_wechat_png",
        t.x = 175,
        t.y = 217,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChildDialogSkin.exml"] = window.login.ChildDialogSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["s9_pop_bg4", "pop_up_bg_m", "title", "btnClose", "txtContent", "btnOK"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this.s9_pop_bg4_i(), this.pop_up_bg_m_i(), this.title_i(), this.btnClose_i(), this.txtContent_i(), this.btnOK_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.s9_pop_bg4_i = function() {
        var t = new eui.Image;
        return this.s9_pop_bg4 = t,
        t.height = 430,
        t.scale9Grid = new egret.Rectangle(11, 9, 10, 8),
        t.source = "common_dialog_s9_pop_bg4_png",
        t.width = 753,
        t.x = 0,
        t.y = 1,
        t
    },
    n.pop_up_bg_m_i = function() {
        var t = new eui.Image;
        return this.pop_up_bg_m = t,
        t.source = "common_pop_up_bg_big_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "l202202_child_dialog_title_png",
        t.x = 36,
        t.y = 3,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "common_dialog_btnclose_png",
        t.x = 712,
        t.y = 1,
        t
    },
    n.txtContent_i = function() {
        var t = new eui.Label;
        return this.txtContent = t,
        t.lineSpacing = 6,
        t.size = 16,
        t.text = "1.本游戏是一款回合制精灵养成类游戏，适用于年满12周岁及以上的用户，建议未成年人在家长监护下使用游戏产品。\n2.本游戏基于架空的故事背景和幻想世界观，没有基于真实历史和现实事件的改编内容。玩家将作为高科技机器人“赛尔”，为人类寻找新能源和宜居地，同时与各种外星精灵一起冒险。游戏中存在与回合对战相关的对抗内容，玩家可以合理指挥精灵、使用道具与对手竞争，从而获取胜利。游戏中有基于文字的陌生人社交系统，社交系统的管理遵循相关法律法规。\n3.本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：\n游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年人用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。 未成年人用户仅可在【周五】、【周六】 、【周日】 以及【法定节假日】的20时至21时，使用1小时。\n4.本游戏以太空冒险为主题。基于架空世界展开剧情，采用风格鲜明的美术风格设计，剧情丰满，玩法多样，能够带给玩家轻松愉悦的游戏氛围。",
        t.textColor = 6258105,
        t.width = 702,
        t.x = 25,
        t.y = 54,
        t
    },
    n.btnOK_i = function() {
        var t = new eui.Image;
        return this.btnOK = t,
        t.source = "common_dialog_btnok_png",
        t.x = 309,
        t.y = 362,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LoginAccountPanelSkin.exml"] = window.LoginAccountPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["account_bg", "btnShowPwd", "btn_save", "txtPwd", "btnArrow", "txtAccount", "btnRegister", "btnGetPwd", "btnLogin", "grpBottom", "btnBack", "verify_code_bg", "txtCode", "txtCodeTitle", "verify_code", "btnRefresh", "grpCode", "item_bg", "grpItem", "account_scroller", "grpContent", "account"],
        this.height = 351,
        this.width = 523,
        this.elementsContent = [this.account_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["grpPopContainer", "labelDisplay"],
            this.elementsContent = [this.grpPopContainer_i(), this._Image1_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "login_btnShowPwd_new_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "login_show_icon_bg_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.grpPopContainer_i = function() {
            var t = new eui.Group;
            return this.grpPopContainer = t,
            t.height = 40,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t.width = 40,
            t
        },
        n._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
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
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
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
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minHeight = 33,
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.height = 18,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
            t.verticalCenter = "0",
            t.width = 182,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.width = 182,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.account_i = function() {
        var t = new eui.Group;
        return this.account = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.grpContent_i()],
        t
    },
    s.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.account_bg_i(), this.btnShowPwd_i(), this.btn_save_i(), this.txtPwd_i(), this.btnArrow_i(), this.txtAccount_i(), this.grpBottom_i(), this.btnBack_i(), this.grpCode_i(), this.account_scroller_i()],
        t
    },
    s.account_bg_i = function() {
        var t = new eui.Image;
        return this.account_bg = t,
        t.height = 351,
        t.scale9Grid = new egret.Rectangle(174, 211, 175, 43),
        t.source = "login_account_bg_new_png",
        t.width = 523,
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnShowPwd_i = function() {
        var t = new eui.Image;
        return this.btnShowPwd = t,
        t.height = 16,
        t.source = "login_btnShowPwd_new_png",
        t.visible = !1,
        t.width = 22,
        t.x = 439,
        t.y = 144,
        t
    },
    s.btn_save_i = function() {
        var t = new eui.CheckBox;
        return this.btn_save = t,
        t.label = "",
        t.x = 439,
        t.y = 137,
        t.skinName = n,
        t
    },
    s.txtPwd_i = function() {
        var t = new eui.TextInput;
        return this.txtPwd = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.displayAsPassword = !0,
        t.height = 19,
        t.inputType = "password",
        t.maxChars = 16,
        t.prompt = "请输入密码",
        t.width = 300,
        t.x = 116,
        t.y = 145,
        t.skinName = i,
        t
    },
    s.btnArrow_i = function() {
        var t = new eui.Image;
        return this.btnArrow = t,
        t.height = 12,
        t.source = "login_btnArrow_new_png",
        t.width = 23,
        t.x = 439,
        t.y = 93,
        t
    },
    s.txtAccount_i = function() {
        var t = new eui.TextInput;
        return this.txtAccount = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 19,
        t.maxChars = 11,
        t.prompt = "请输入淘米帐号",
        t.width = 300,
        t.x = 116,
        t.y = 90,
        t.skinName = r,
        t
    },
    s.grpBottom_i = function() {
        var t = new eui.Group;
        return this.grpBottom = t,
        t.x = 46,
        t.y = 258,
        t.elementsContent = [this.btnRegister_i(), this.btnGetPwd_i(), this.btnLogin_i()],
        t
    },
    s.btnRegister_i = function() {
        var t = new eui.Label;
        return this.btnRegister = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "注册帐号",
        t.textColor = 4173823,
        t.x = 0,
        t.y = 1,
        t
    },
    s.btnGetPwd_i = function() {
        var t = new eui.Label;
        return this.btnGetPwd = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "找回密码",
        t.textColor = 4173823,
        t.x = 358,
        t.y = 0,
        t
    },
    s.btnLogin_i = function() {
        var t = new eui.Image;
        return this.btnLogin = t,
        t.height = 46,
        t.source = "login_btnLogin_new_png",
        t.width = 134,
        t.x = 146,
        t.y = 23,
        t
    },
    s.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.height = 24,
        t.source = "login_btnBack_new_png",
        t.visible = !1,
        t.width = 16,
        t.x = 30,
        t.y = 18,
        t
    },
    s.grpCode_i = function() {
        var t = new eui.Group;
        return this.grpCode = t,
        t.x = 45,
        t.y = 186,
        t.elementsContent = [this.verify_code_bg_i(), this.txtCode_i(), this.txtCodeTitle_i(), this.verify_code_i(), this.btnRefresh_i()],
        t
    },
    s.verify_code_bg_i = function() {
        var t = new eui.Image;
        return this.verify_code_bg = t,
        t.height = 41,
        t.source = "login_verify_code_bg_new_png",
        t.width = 177,
        t.x = 87,
        t.y = 0,
        t
    },
    s.txtCode_i = function() {
        var t = new eui.TextInput;
        return this.txtCode = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 18,
        t.maxChars = 16,
        t.prompt = "请输入验证码",
        t.width = 182,
        t.x = 87,
        t.y = 11,
        t.skinName = o,
        t
    },
    s.txtCodeTitle_i = function() {
        var t = new eui.Label;
        return this.txtCodeTitle = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "验 证 码：",
        t.textColor = 5012417,
        t.x = 0,
        t.y = 12,
        t
    },
    s.verify_code_i = function() {
        var t = new eui.Image;
        return this.verify_code = t,
        t.height = 41,
        t.source = "login_verify_code_new_png",
        t.width = 102,
        t.x = 273,
        t.y = 0,
        t
    },
    s.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.height = 18,
        t.source = "login_Btn_zczh_new_png",
        t.width = 49,
        t.x = 383,
        t.y = 12,
        t
    },
    s.account_scroller_i = function() {
        var t = new eui.Scroller;
        return this.account_scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 116,
        t.horizontalCenter = 0,
        t.visible = !1,
        t.width = 435,
        t.y = 117,
        t.viewport = this.grpItem_i(),
        t
    },
    s.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.horizontalCenter = 0,
        t.elementsContent = [this.item_bg_i()],
        t
    },
    s.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 116,
        t.scale9Grid = new egret.Rectangle(3, 3, 5, 6),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "login_history_item_bg_png",
        t.visible = !0,
        t.width = 435,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/LoginAccountSkin.exml"] = window.LoginAccountSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["account_bg", "account_title", "frame1", "icon_account", "btnArrow", "txtAccount", "frame2", "icon_pwd", "btn_save", "txtPwd", "frame3", "verify_code", "btnRefresh", "txtCode", "grpCode", "btnRegister", "btnGetPwd", "grpRegister", "btnLogin", "txtThirdLoginTitle", "btnQQ", "btnWX", "grpThirdLogin", "grpContent", "item_bg", "grpItem", "account_scroller"],
        this.width = 600,
        this.elementsContent = [this.account_bg_i(), this._Group3_i()]
    }
    __extends(e, t);
    var n = function(t) {
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
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "黑体",
            t.height = 24,
            t.horizontalCenter = "0",
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "黑体",
            t.height = 24,
            t.horizontalCenter = 0,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["labelDisplay"],
            this.elementsContent = [this._Image1_i(), this._Image2_i(), this.labelDisplay_i()],
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image2", "source", "login_select_png")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n._Image1_i = function() {
            var t = new eui.Image;
            return t.source = "login_selected_bg_png",
            t
        },
        n._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.y = -2,
            t
        },
        n.labelDisplay_i = function() {
            var t = new eui.Label;
            return this.labelDisplay = t,
            t.horizontalCenter = 0,
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
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
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "黑体",
            t.height = 24,
            t.left = "10",
            t.right = "10",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
            t.verticalCenter = "0",
            t.percentWidth = 100,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "黑体",
            t.height = 24,
            t.left = 10,
            t.right = 10,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8095643,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    o = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "黑体",
            t.height = 18,
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.verticalCenter = "0",
            t.width = 182,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "黑体",
            t.size = 18,
            t.textAlign = "center",
            t.textColor = 8029850,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.width = 182,
            t
        },
        e
    } (eui.Skin),
    s = e.prototype;
    return s.account_bg_i = function() {
        var t = new eui.Image;
        return this.account_bg = t,
        t.height = 278,
        t.horizontalCenter = 0,
        t.scale9Grid = new egret.Rectangle(19, 85, 8, 8),
        t.source = "login_account_bg_png",
        t.width = 442,
        t.y = 0,
        t
    },
    s._Group3_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.percentWidth = 100,
        t.y = 16,
        t.elementsContent = [this.account_title_i(), this.grpContent_i(), this.account_scroller_i()],
        t
    },
    s.account_title_i = function() {
        var t = new eui.Image;
        return this.account_title = t,
        t.height = 41,
        t.horizontalCenter = 0,
        t.source = "login_account_title_png",
        t.width = 118,
        t.y = 0,
        t
    },
    s.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 57,
        t.layout = this._VerticalLayout1_i(),
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this.grpCode_i(), this.grpRegister_i(), this.btnLogin_i(), this.txtThirdLoginTitle_i(), this.grpThirdLogin_i()],
        t
    },
    s._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t.horizontalAlign = "center",
        t
    },
    s._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.frame1_i(), this.icon_account_i(), this.btnArrow_i(), this.txtAccount_i()],
        t
    },
    s.frame1_i = function() {
        var t = new eui.Image;
        return this.frame1 = t,
        t.height = 40,
        t.source = "login_frame1_png",
        t.width = 354,
        t.x = 0,
        t.y = 0,
        t
    },
    s.icon_account_i = function() {
        var t = new eui.Image;
        return this.icon_account = t,
        t.height = 22,
        t.source = "login_icon_account_png",
        t.width = 20,
        t.x = 21,
        t.y = 9,
        t
    },
    s.btnArrow_i = function() {
        var t = new eui.Image;
        return this.btnArrow = t,
        t.height = 11,
        t.source = "down_arrow_png",
        t.width = 22,
        t.x = 313,
        t.y = 16,
        t
    },
    s.txtAccount_i = function() {
        var t = new eui.TextInput;
        return this.txtAccount = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 19,
        t.maxChars = 11,
        t.prompt = "请输入淘米帐号",
        t.width = 200,
        t.x = 83,
        t.y = 12,
        t.skinName = n,
        t
    },
    s._Group2_i = function() {
        var t = new eui.Group;
        return t.x = 1,
        t.y = 50,
        t.elementsContent = [this.frame2_i(), this.icon_pwd_i(), this.btn_save_i(), this.txtPwd_i()],
        t
    },
    s.frame2_i = function() {
        var t = new eui.Image;
        return this.frame2 = t,
        t.height = 40,
        t.source = "login_frame1_png",
        t.width = 354,
        t.x = 0,
        t.y = 0,
        t
    },
    s.icon_pwd_i = function() {
        var t = new eui.Image;
        return this.icon_pwd = t,
        t.height = 22,
        t.source = "login_icon_pwd_png",
        t.width = 20,
        t.x = 20,
        t.y = 9,
        t
    },
    s.btn_save_i = function() {
        var t = new eui.CheckBox;
        return this.btn_save = t,
        t.label = "",
        t.x = 312,
        t.y = 10,
        t.skinName = i,
        t
    },
    s.txtPwd_i = function() {
        var t = new eui.TextInput;
        return this.txtPwd = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.displayAsPassword = !0,
        t.height = 19,
        t.inputType = "password",
        t.maxChars = 20,
        t.prompt = "请输入密码",
        t.width = 200,
        t.x = 82,
        t.y = 14,
        t.skinName = r,
        t
    },
    s.grpCode_i = function() {
        var t = new eui.Group;
        return this.grpCode = t,
        t.height = 40,
        t.x = 1,
        t.y = 100,
        t.elementsContent = [this.frame3_i(), this.verify_code_i(), this.btnRefresh_i(), this.txtCode_i()],
        t
    },
    s.frame3_i = function() {
        var t = new eui.Image;
        return this.frame3 = t,
        t.height = 40,
        t.source = "login_frame1_png",
        t.width = 354,
        t.x = 0,
        t.y = 0,
        t
    },
    s.verify_code_i = function() {
        var t = new eui.Image;
        return this.verify_code = t,
        t.height = 32,
        t.source = "login_verify_coid_png",
        t.width = 90,
        t.x = 207,
        t.y = 4,
        t
    },
    s.btnRefresh_i = function() {
        var t = new eui.Image;
        return this.btnRefresh = t,
        t.height = 17,
        t.source = "login_btnRefresh_png",
        t.width = 25,
        t.x = 310,
        t.y = 12,
        t
    },
    s.txtCode_i = function() {
        var t = new eui.TextInput;
        return this.txtCode = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 18,
        t.maxChars = 16,
        t.prompt = "请输入验证码",
        t.width = 182,
        t.x = 9,
        t.y = 11,
        t.skinName = o,
        t
    },
    s.grpRegister_i = function() {
        var t = new eui.Group;
        return this.grpRegister = t,
        t.height = 19,
        t.x = 1,
        t.y = 100,
        t.elementsContent = [this.btnRegister_i(), this.btnGetPwd_i()],
        t
    },
    s.btnRegister_i = function() {
        var t = new eui.Image;
        return this.btnRegister = t,
        t.height = 19,
        t.source = "login_btnRegister_png",
        t.width = 73,
        t.x = 0,
        t.y = 0,
        t
    },
    s.btnGetPwd_i = function() {
        var t = new eui.Image;
        return this.btnGetPwd = t,
        t.height = 19,
        t.source = "login_btnGetPwd_png",
        t.width = 73,
        t.x = 282,
        t.y = 0,
        t
    },
    s.btnLogin_i = function() {
        var t = new eui.Image;
        return this.btnLogin = t,
        t.height = 40,
        t.source = "login_btnLogin_png",
        t.width = 200,
        t.x = 78,
        t.y = 138,
        t
    },
    s.txtThirdLoginTitle_i = function() {
        var t = new eui.Label;
        return this.txtThirdLoginTitle = t,
        t.size = 18,
        t.text = "————  第三方登录  ————",
        t.textColor = 10529467,
        t.x = 51,
        t.y = 292,
        t
    },
    s.grpThirdLogin_i = function() {
        var t = new eui.Group;
        return this.grpThirdLogin = t,
        t.height = 60,
        t.x = 72,
        t.y = 321,
        t.elementsContent = [this.btnQQ_i(), this.btnWX_i()],
        t
    },
    s.btnQQ_i = function() {
        var t = new eui.Image;
        return this.btnQQ = t,
        t.source = "l_login_qq_png",
        t.x = 153,
        t.y = 0,
        t
    },
    s.btnWX_i = function() {
        var t = new eui.Image;
        return this.btnWX = t,
        t.source = "l_login_wx_png",
        t.x = 0,
        t.y = 0,
        t
    },
    s.account_scroller_i = function() {
        var t = new eui.Scroller;
        return this.account_scroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 112,
        t.horizontalCenter = 0,
        t.visible = !1,
        t.width = 354,
        t.y = 97,
        t.viewport = this.grpItem_i(),
        t
    },
    s.grpItem_i = function() {
        var t = new eui.Group;
        return this.grpItem = t,
        t.elementsContent = [this.item_bg_i()],
        t
    },
    s.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 112,
        t.scale9Grid = new egret.Rectangle(3, 3, 18, 18),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "login_item_bg_png",
        t.visible = !0,
        t.width = 354,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainPanelSkin.exml"] = window.login.MainPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "grpMovie", "bgMask", "btnTrigger", "small_logo", "btnYearTip", "btnExchange", "btnNotice", "btnRepair", "btnCustCare", "idbg", "icon_account", "txtUserName", "user", "grpRight", "grpLoginMovie", "start_bg", "btnStart", "start", "bg_2", "txtServerID", "txtServerName", "icon_hot", "btnChange", "grpLastService", "grpPopContainer", "txtNo", "cbAgreement", "txtService", "agreement", "grpService"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.grpMovie_i(), this.bgMask_i(), this.btnTrigger_i(), this.small_logo_i(), this.grpRight_i(), this.start_i(), this.grpLastService_i(), this.grpPopContainer_i(), this.grpService_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["grpPopContainer"],
            this.height = 40,
            this.width = 40,
            this.elementsContent = [this.grpPopContainer_i(), this._Image1_i()],
            this._Image2_i(),
            this.states = [new eui.State("up", []), new eui.State("down", [new eui.AddItems("_Image2", "", 1, "")]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.grpPopContainer_i = function() {
            var t = new eui.Group;
            return this.grpPopContainer = t,
            t.height = 40,
            t.width = 40,
            t
        },
        n._Image1_i = function() {
            var t = new eui.Image;
            return t.horizontalCenter = 0,
            t.source = "l202202_main_panel_searchbg_kb_png",
            t.verticalCenter = 0,
            t
        },
        n._Image2_i = function() {
            var t = new eui.Image;
            return this._Image2 = t,
            t.horizontalCenter = 0,
            t.source = "l202202_main_panel_select_png",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.horizontalCenter = 0,
        t.source = "l202202_main_panel_bg_jpg",
        t.visible = !0,
        t.y = 0,
        t
    },
    i.grpMovie_i = function() {
        var t = new eui.Group;
        return this.grpMovie = t,
        t.horizontalCenter = -22,
        t.verticalCenter = 0,
        t
    },
    i.bgMask_i = function() {
        var t = new eui.Image;
        return this.bgMask = t,
        t.height = 640,
        t.source = "login202202_mask2_png",
        t.visible = !0,
        t.width = 1136,
        t.x = -5,
        t.y = -5,
        t
    },
    i.btnTrigger_i = function() {
        var t = new eui.Group;
        return this.btnTrigger = t,
        t.height = 450.489,
        t.horizontalCenter = -26,
        t.width = 991.912,
        t.y = 98,
        t
    },
    i.small_logo_i = function() {
        var t = new eui.Image;
        return this.small_logo = t,
        t.source = "l202202_main_panel_small_logo_png",
        t.x = 28,
        t.y = 23,
        t
    },
    i.grpRight_i = function() {
        var t = new eui.Group;
        return this.grpRight = t,
        t.height = 590,
        t.right = 0,
        t.visible = !0,
        t.width = 157,
        t.y = 26,
        t.elementsContent = [this.btnYearTip_i(), this.btnExchange_i(), this.btnNotice_i(), this.btnRepair_i(), this.btnCustCare_i(), this.user_i()],
        t
    },
    i.btnYearTip_i = function() {
        var t = new eui.Image;
        return this.btnYearTip = t,
        t.source = "l202202_main_panel_child_tip_png",
        t.x = 77,
        t.y = 490.668,
        t
    },
    i.btnExchange_i = function() {
        var t = new eui.Image;
        return this.btnExchange = t,
        t.source = "l202202_main_panel_btnexchange_png",
        t.x = 65,
        t.y = 23,
        t
    },
    i.btnNotice_i = function() {
        var t = new eui.Image;
        return this.btnNotice = t,
        t.source = "l202202_main_panel_btnnotice_png",
        t.x = 65,
        t.y = 100,
        t
    },
    i.btnRepair_i = function() {
        var t = new eui.Image;
        return this.btnRepair = t,
        t.source = "l202202_main_panel_btnrepair_png",
        t.visible = !1,
        t.x = 73,
        t.y = 250,
        t
    },
    i.btnCustCare_i = function() {
        var t = new eui.Image;
        return this.btnCustCare = t,
        t.source = "l202202_main_panel_btncustcare_png",
        t.x = 65,
        t.y = 174,
        t
    },
    i.user_i = function() {
        var t = new eui.Group;
        return this.user = t,
        t.height = 23,
        t.right = 17,
        t.y = 0,
        t.elementsContent = [this.idbg_i(), this._Group1_i()],
        t
    },
    i.idbg_i = function() {
        var t = new eui.Image;
        return this.idbg = t,
        t.source = "l202202_main_panel_idbg_png",
        t.x = 0,
        t.y = 1.346,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 6,
        t.y = 2,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.icon_account_i(), this.txtUserName_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.icon_account_i = function() {
        var t = new eui.Image;
        return this.icon_account = t,
        t.scaleX = .8,
        t.scaleY = .8,
        t.source = "l202202_main_panel_icon_account_png",
        t.x = 0,
        t.y = 3,
        t
    },
    i.txtUserName_i = function() {
        var t = new eui.Label;
        return this.txtUserName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "玩家玩家玩家",
        t.textColor = 4173823,
        t.x = 24,
        t.y = 0,
        t
    },
    i.start_i = function() {
        var t = new eui.Group;
        return this.start = t,
        t.horizontalCenter = -78.5,
        t.y = 482,
        t.elementsContent = [this.grpLoginMovie_i(), this.start_bg_i(), this.btnStart_i()],
        t
    },
    i.grpLoginMovie_i = function() {
        var t = new eui.Group;
        return this.grpLoginMovie = t,
        t.x = 530.428,
        t.y = 32,
        t
    },
    i.start_bg_i = function() {
        var t = new eui.Image;
        return this.start_bg = t,
        t.source = "l202202_main_panel_start_bg_png",
        t.x = -157.608,
        t.y = 0,
        t
    },
    i.btnStart_i = function() {
        var t = new eui.Image;
        return this.btnStart = t,
        t.source = "l202202_main_panel_btnstart_png",
        t.x = 465,
        t.y = 8,
        t
    },
    i.grpLastService_i = function() {
        var t = new eui.Group;
        return this.grpLastService = t,
        t.horizontalCenter = -4,
        t.visible = !0,
        t.y = 428,
        t.elementsContent = [this.bg_2_i(), this.txtServerID_i(), this.txtServerName_i(), this.icon_hot_i(), this.btnChange_i()],
        t
    },
    i.bg_2_i = function() {
        var t = new eui.Image;
        return this.bg_2 = t,
        t.height = 31,
        t.source = "l202202_main_panel_bg_png",
        t.width = 351,
        t.x = 9,
        t.y = 8,
        t
    },
    i.txtServerID_i = function() {
        var t = new eui.Label;
        return this.txtServerID = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "8989",
        t.textColor = 16777215,
        t.x = 63,
        t.y = 15,
        t
    },
    i.txtServerName_i = function() {
        var t = new eui.Label;
        return this.txtServerName = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "服务器服务器",
        t.textColor = 16777215,
        t.x = 146,
        t.y = 16,
        t
    },
    i.icon_hot_i = function() {
        var t = new eui.Image;
        return this.icon_hot = t,
        t.source = "l202202_main_panel_icon_hot_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnChange_i = function() {
        var t = new eui.Group;
        return this.btnChange = t,
        t.height = 30,
        t.width = 30,
        t.x = 290,
        t.y = 9,
        t.elementsContent = [this._Image1_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "l202202_main_panel_btnchange_png",
        t.x = 6,
        t.y = 6,
        t
    },
    i.grpPopContainer_i = function() {
        var t = new eui.Group;
        return this.grpPopContainer = t,
        t.percentHeight = 100,
        t.visible = !0,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.grpService_i = function() {
        var t = new eui.Group;
        return this.grpService = t,
        t.horizontalCenter = -2,
        t.visible = !0,
        t.y = 545,
        t.elementsContent = [this.txtNo_i(), this.agreement_i()],
        t
    },
    i.txtNo_i = function() {
        var t = new eui.Label;
        return this.txtNo = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n著作权人：上海淘米网络科技有限公司             出版单位：上海淘米网络科技有限公司             运营单位：上海淘米网络科技有限公司\n审批文号：国新出审[2023]32号             出版物号：ISBN 978-7-498-10022-1",
        t.textAlign = "center",
        t.textColor = 8766975,
        t.x = 0,
        t.y = 40,
        t
    },
    i.agreement_i = function() {
        var t = new eui.Group;
        return this.agreement = t,
        t.horizontalCenter = 2.5,
        t.visible = !0,
        t.y = 0,
        t.layout = this._HorizontalLayout2_i(),
        t.elementsContent = [this.cbAgreement_i(), this.txtService_i()],
        t
    },
    i._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i.cbAgreement_i = function() {
        var t = new eui.CheckBox;
        return this.cbAgreement = t,
        t.x = 0,
        t.y = 0,
        t.skinName = n,
        t
    },
    i.txtService_i = function() {
        var t = new eui.Label;
        return this.txtService = t,
        t.fontFamily = "MFShangHei",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 18,
        t.text = "我已详细阅读并同意淘米游戏服务协议及隐私保护条款。",
        t.textColor = 13821688,
        t.x = 29,
        t.y = 3,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MaintainPopSkin.exml"] = window.login.MaintainPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["maintain_bg", "close", "txtMsg"],
        this.height = 239,
        this.width = 573,
        this.elementsContent = [this.maintain_bg_i(), this.close_i(), this.txtMsg_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.maintain_bg_i = function() {
        var t = new eui.Image;
        return this.maintain_bg = t,
        t.source = "l_maintain_pop_maintain_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.close_i = function() {
        var t = new eui.Image;
        return this.close = t,
        t.source = "l_maintain_pop_close_png",
        t.x = 219,
        t.y = 170,
        t
    },
    n.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.fontFamily = "REEJI",
        t.height = 100,
        t.horizontalCenter = .5,
        t.lineSpacing = 8,
        t.size = 18,
        t.text = "计划维护时间：7月8日“0:00——16:00“。\n具体开服时间请关注官方公告。",
        t.textAlign = "center",
        t.textColor = 12834813,
        t.verticalAlign = "middle",
        t.width = 440,
        t.y = 68,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PkgUpdateSkin.exml"] = window.login.PkgUpdateSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["update_bg", "update_title", "txtMsg", "txtSize", "btnUpdate"],
        this.height = 241,
        this.width = 642,
        this.elementsContent = [this.update_bg_i(), this.update_title_i(), this.txtMsg_i(), this.txtSize_i(), this.btnUpdate_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.update_bg_i = function() {
        var t = new eui.Image;
        return this.update_bg = t,
        t.height = 204,
        t.scale9Grid = new egret.Rectangle(5, 5, 8, 8),
        t.source = "l202202_pkg_update_update_bg_png",
        t.width = 642,
        t.x = 0,
        t.y = 37,
        t
    },
    n.update_title_i = function() {
        var t = new eui.Image;
        return this.update_title = t,
        t.source = "l202202_pkg_update_update_title_png",
        t.x = 2,
        t.y = 0,
        t
    },
    n.txtMsg_i = function() {
        var t = new eui.Label;
        return this.txtMsg = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "检测到有新的版本，需要下载更新包资源并且安装以正常进行游戏。\n是否确认下载并且安装更新？\n",
        t.textColor = 13754879,
        t.width = 584,
        t.x = 25,
        t.y = 61,
        t
    },
    n.txtSize_i = function() {
        var t = new eui.Label;
        return this.txtSize = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "更新包大小：999MB",
        t.textColor = 13754879,
        t.x = 246,
        t.y = 145,
        t
    },
    n.btnUpdate_i = function() {
        var t = new eui.Image;
        return this.btnUpdate = t,
        t.source = "l202202_pkg_update_btnupdate_png",
        t.x = 250,
        t.y = 171,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ServerItemRenderSkin.exml"] = window.skins.ServerItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "txtName", "txtNo", "icon_hot", "icon_friend_online"],
        this.height = 57,
        this.width = 340,
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Group1", "scaleX", .98), new eui.SetProperty("_Group1", "scaleY", .98), new eui.SetProperty("_Group1", "y", 2), new eui.SetProperty("_Group1", "x", 2)])]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.txtName_i(), this.txtNo_i(), this.icon_hot_i(), this.icon_friend_online_i()],
        t
    },
    n.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "l202202_server_list_item_bg_png",
        t.x = 9,
        t.y = 9,
        t
    },
    n.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "好腻害的服务器",
        t.textColor = 16711422,
        t.x = 117,
        t.y = 20,
        t
    },
    n.txtNo_i = function() {
        var t = new eui.Label;
        return this.txtNo = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "9999",
        t.textColor = 16711422,
        t.x = 50,
        t.y = 23,
        t
    },
    n.icon_hot_i = function() {
        var t = new eui.Image;
        return this.icon_hot = t,
        t.source = "l202202_server_list_icon_hot_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.icon_friend_online_i = function() {
        var t = new eui.Image;
        return this.icon_friend_online = t,
        t.source = "l202202_server_list_icon_friend_online_png",
        t.x = 281,
        t.y = 14,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ServerListSkin.exml"] = window.login.ServerListSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["server_bg", "server_title", "server_buttom_bg", "server_input_bg", "txtServerNo", "btnGo", "grpGO", "btnBack", "tuli", "list", "scroller"],
        this.height = 460,
        this.width = 1136,
        this.elementsContent = [this.server_bg_i(), this.server_title_i(), this.server_buttom_bg_i(), this.grpGO_i(), this.btnBack_i(), this.tuli_i(), this.scroller_i()]
    }
    __extends(e, t);
    var n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = ["textDisplay", "promptDisplay"],
            this.minWidth = 300,
            this.elementsContent = [this.textDisplay_i()],
            this.promptDisplay_i(),
            this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 16711680)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])]
        }
        __extends(e, t);
        var n = e.prototype;
        return n.textDisplay_i = function() {
            var t = new eui.EditableText;
            return this.textDisplay = t,
            t.fontFamily = "MFShangHei",
            t.left = "10",
            t.right = "10",
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 13097725,
            t.percentWidth = 100,
            t.y = 3,
            t
        },
        n.promptDisplay_i = function() {
            var t = new eui.Label;
            return this.promptDisplay = t,
            t.fontFamily = "MFShangHei",
            t.left = 10,
            t.right = 10,
            t.size = 16,
            t.textAlign = "center",
            t.textColor = 6388143,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    i = e.prototype;
    return i.server_bg_i = function() {
        var t = new eui.Image;
        return this.server_bg = t,
        t.left = 0,
        t.right = 0,
        t.source = "l202202_server_list_server_bg_png",
        t.y = 0,
        t
    },
    i.server_title_i = function() {
        var t = new eui.Image;
        return this.server_title = t,
        t.horizontalCenter = 0,
        t.source = "l202202_server_list_server_title_png",
        t.y = 12,
        t
    },
    i.server_buttom_bg_i = function() {
        var t = new eui.Image;
        return this.server_buttom_bg = t,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(379, 17, 152, 9),
        t.source = "l202202_server_list_server_buttom_bg_png",
        t.y = 380,
        t
    },
    i.grpGO_i = function() {
        var t = new eui.Group;
        return this.grpGO = t,
        t.right = 22,
        t.y = 388,
        t.elementsContent = [this.server_input_bg_i(), this.txtServerNo_i(), this.btnGo_i()],
        t
    },
    i.server_input_bg_i = function() {
        var t = new eui.Image;
        return this.server_input_bg = t,
        t.height = 21,
        t.source = "l202202_server_list_server_input_bg_png",
        t.width = 158,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txtServerNo_i = function() {
        var t = new eui.TextInput;
        return this.txtServerNo = t,
        t.height = 20,
        t.maxChars = 4,
        t.prompt = "请输入服务器编号",
        t.restrict = "0-9",
        t.width = 150,
        t.x = 3.886,
        t.y = 2,
        t.skinName = n,
        t
    },
    i.btnGo_i = function() {
        var t = new eui.Image;
        return this.btnGo = t,
        t.source = "l202202_server_list_btngo_png",
        t.x = 183,
        t.y = 0,
        t
    },
    i.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.source = "l202202_server_list_btnback_png",
        t.x = 22,
        t.y = 10,
        t
    },
    i.tuli_i = function() {
        var t = new eui.Image;
        return this.tuli = t,
        t.source = "l202202_server_list_tuli_png",
        t.x = 13,
        t.y = 382,
        t
    },
    i.scroller_i = function() {
        var t = new eui.Scroller;
        return this.scroller = t,
        t.height = 336,
        t.horizontalCenter = 0,
        t.width = 712,
        t.y = 42,
        t.viewport = this._Group1_i(),
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.width = 712,
        t.elementsContent = [this.list_i()],
        t
    },
    i.list_i = function() {
        var t = new eui.List;
        return this.list = t,
        t.height = 320,
        t.width = 712,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    i._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 16,
        t.orientation = "rows",
        t
    },
    e
} (eui.Skin);