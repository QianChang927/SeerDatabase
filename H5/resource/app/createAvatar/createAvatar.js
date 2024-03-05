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
createAvatar; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.firstNameList = ["可爱的", "聪明的", "滑稽的", "漂亮的", "善良的", "聪慧的", "机灵的", "顽皮的", "娇羞的"],
            e.lastNameList = ["天使", "小熊", "公主", "骑士", "英雄", "候鸟", "雪人", "豌豆", "南瓜", "石头", "侠客", "云彩", "明星", "赛尔"],
            e.MAX_PEOPLE = 5,
            e.skinName = "CreateAvatarSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.randomName(),
            ImageButtonUtil.add(this.btnBaodao, this.onSendNick, this),
            ImageButtonUtil.add(this.btnRoll, this.randomName, this),
            EventManager.addEventListener(GameEvent.FIRST_SHOW_MAIN_PANEL, this.onEnterMainPanel, this)
        },
        e.prototype.onEnterMainPanel = function() {
            ModuleManager.hideModule(this),
            EventManager.removeEventListener(GameEvent.FIRST_SHOW_MAIN_PANEL, this.onEnterMainPanel, this)
        },
        e.prototype.randomName = function() {
            var t = MathUtil.RandomRoundInt(0, this.firstNameList.length),
            e = MathUtil.RandomRoundInt(0, this.lastNameList.length);
            this.txtName.text = this.firstNameList[t] + this.lastNameList[e]
        },
        e.prototype.onSendNick = function(t) {
            var e = this,
            n = this.txtName.text.trim();
            if (0 == n.length) return void BubblerManager.getInstance().showText("请输入昵称！");
            var i = new egret.ByteArray;
            i.writeUTFBytes(n),
            i.length > 16 ? BubblerManager.getInstance().showText("昵称超出长度范围") : 0 == i.length ? BubblerManager.getInstance().showText("昵称不能为空！") : (LoginManager.color = 16777215, LoginManager.nick = n, LoginManager.addEventListener(LoginEvent.NICK_NAME_FAILD, this.onFaildHandler, this), this.touchChildren = !1, LoginManager2.createAvatar(n, 16777215).then(function(t) {
                e.getServerList()
            })["catch"](function(t) {
                e.touchChildren = !0
            }))
        },
        e.prototype.getServerList = function() {
            var t = this;
            LoginManager2.getRecommendSvrList().then(function() {
                t.visible = !0;
                var e = LoginManager2.allServiceInfo.svrList;
                if (!GameInfo.isChecking) if (e.length > 0) for (var n = 0,
                i = e; n < i.length; n++) {
                    var r = i[n];
                    if (0 != r.OnlineID && 1499 != r.OnlineID && 1500 != r.OnlineID) return OnlineManager.getInstance().enterServer(r),
                    void t.onClose()
                } else console.error("推荐服务器列表为空");
                console.error(e);
                var a = GameInfo.isChecking ? 1499 : 1500;
                LoginSocketConnection.sendAsync(CommandID.RANGE_ONLINE, a, a, 0).then(function(e) {
                    var n = new RangeSvrInfo(e.data);
                    return 0 == n.svrList.length ? void Alarm.show("服务器不存在！") : (t.onClose(), void OnlineManager.getInstance().enterServer(n.svrList[0]))
                })
            })["catch"](function() {})
        },
        e.prototype.onGetRecServerList = function(t) {
            this.visible = !0;
            for (var e = LoginManager2.allServiceInfo.svrList,
            n = 0,
            i = e; n < i.length; n++) {
                var r = i[n];
                if (1500 == r.OnlineID) return OnlineManager.getInstance().enterServer(r),
                void this.onClose()
            }
            LoginSocketConnection.addCmdListener(CommandID.RANGE_ONLINE, this.findServer, this),
            LoginSocketConnection.send(CommandID.RANGE_ONLINE, 1500, 1500, 0)
        },
        e.prototype.findServer = function(t) {
            var e = new RangeSvrInfo(t.data);
            return 0 == e.svrList.length ? void Alarm.show("服务器不存在！") : (this.onClose(), void OnlineManager.getInstance().enterServer(e.svrList[0]))
        },
        e.prototype.onFaildHandler = function() {
            this.touchChildren = !0
        },
        e
    } (BaseModule);
    t.CreateAvatar = e,
    __reflect(e.prototype, "createAvatar.CreateAvatar")
} (createAvatar || (createAvatar = {}));
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
generateEUI.paths["resource/eui_skins/CreateAvatarSkin.exml"] = window.CreateAvatarSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "btnRoll", "txtName", "btnBaodao"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i()]
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
            t.right = "10",
            t.size = 20,
            t.textColor = 4279961,
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
            t.right = 10,
            t.size = 20,
            t.textColor = 4279961,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.percentHeight = 100,
        t.source = "create_avatar_bg_jpg",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = -35,
        t.width = 800,
        t.y = 124,
        t.elementsContent = [this._Image1_i(), this.btnRoll_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.txtName_i(), this.btnBaodao_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "create_avatar_luojie_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnRoll_i = function() {
        var t = new eui.Image;
        return this.btnRoll = t,
        t.source = "create_avatar_btnroll_png",
        t.visible = !0,
        t.x = 691,
        t.y = 153,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "create_avatar_title_png",
        t.x = 306,
        t.y = 100,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "create_avatar_inputbg_png",
        t.x = 305,
        t.y = 156,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "create_avatar_tips_png",
        t.x = 306,
        t.y = 210,
        t
    },
    i.txtName_i = function() {
        var t = new eui.TextInput;
        return this.txtName = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 19,
        t.maxChars = 11,
        t.prompt = "默认的名字",
        t.width = 350,
        t.x = 318,
        t.y = 166,
        t.skinName = n,
        t
    },
    i.btnBaodao_i = function() {
        var t = new eui.Image;
        return this.btnBaodao = t,
        t.source = "create_avatar_btnbaodao_png",
        t.x = 402,
        t.y = 252,
        t
    },
    e
} (eui.Skin);