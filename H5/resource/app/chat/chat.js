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
chat; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = "ChatMainSkin",
            t
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "eTab", {
            get: function() {
                return this._eTab
            },
            set: function(t) {
                this._eTab = t,
                this.showExpression()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "selectPChatObj", {
            get: function() {
                return this._selectPChatObj
            },
            set: function(t) {
                this._selectPChatObj = t,
                null != this.selectPChatObj && (this.txtChatting.text = "与" + this.selectPChatObj.name + "聊天中......"),
                this.showPrivateContent()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "tab", {
            get: function() {
                return this._tab
            },
            set: function(t) {
                return 3 != t || MainManager.actorInfo.teamInfo.id ? (4 == t && (this.imgRedDot2.visible = !1), this._tab = t, this.txtCD.text = this.arrCDNum[this.tab].toString(), DisplayUtil.setEnabled(this.btnEmoticon, this.arrCDNum[this.tab] <= 0), this.btnSend.visible = this.arrCDNum[this.tab] <= 0, this.groupCD.visible = this.arrCDNum[this.tab] > 0, ChatManager.getInstance().showType = this._tab, this.tipTXt.visible = !1, this.chatInput.text = "", this.chatInput.restrict = "\\D", this.pChat.visible = 4 == this._tab, this.txtNotTalk.visible = 1 == this._tab, this.groupInput.visible = 1 != this._tab, this.chatInput.visible = 1 != this._tab, void(this.pChat.visible ? (this.bScroller.y = 90, this.bScroller.height = 482, this.showPchats(this.arrPChatUser)) : (this.selectPChatObj = null, this.bScroller.y = 15, this.bScroller.height = 562, this.showBwinTalks(ChatManager.getInstance().getContent())))) : (Alarm.show("暂未加入战队"), this.rbAll.group.selectedValue = this.tab + 1, void(this.tab = this.tab))
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.showChat = function(t) {
            void 0 === t && (t = !1),
            this.groupBig.visible = t,
            this.groupSmall.visible = !t,
            this.groupEmoticon.visible = !1,
            t && (this.imgRedDot1.visible = !1, this.bigMask.width = egret.lifecycle.stage.width, ChatManager.getInstance().showBig = !0),
            GameInfo.isChecking && (this.groupBig.visible = !1, this.groupSmall.visible = !1)
        },
        i.prototype.showInitAni = function(t) {
            this.visible = !0,
            this.groupSmall.alpha = 0,
            egret.Tween.get(this.groupSmall).to({
                alpha: 1
            },
            t)
        },
        i.prototype.childrenCreated = function() {
            config.SysMessageStatistics.loadAsync(),
            0 == GameInfo.platform || 2 == GameInfo.platform && !GameInfo.isApp || (this.groupSmall.x = 35),
            this.chatInput.maxChars = 100,
            this.arrCDNum = [0, 0, 0, 0, 0],
            this.imgRedDot1.visible = !1,
            this.imgRedDot2.visible = !1,
            this.groupEmoticon.visible = !1,
            this.acEmoticon = new eui.ArrayCollection,
            this.eListViewPort.itemRenderer = t.ChatExpressionItemRender,
            this.eListViewPort.dataProvider = this.acEmoticon,
            this.arrEmoji = config.Emoji.getItems();
            for (var e = [], i = 0, n = this.arrEmoji; i < n.length; i++) {
                var r = n[i]; - 1 == e.indexOf(r.type) && e.push(r.type)
            }
            for (var a = 0; 3 > a; a++) this["rb_b" + (a + 1)] && (this["rb_b" + (a + 1)].visible = a < e.length);
            var s = ChatManager.getInstance().getPChatUserIds();
            this.arrPChatUser = [];
            for (var a = 0; a < s.length; a++) {
                var o = ChatManager.getInstance().getPChatInfos( + s[a]);
                if (o && o.length) {
                    var h = {
                        name: MainManager.actorID == +o[0].senderID ? o[0].toNickName: o[0].senderNicName,
                        id: +s[a]
                    };
                    this.arrPChatUser.push(h)
                }
            }
            this.acSmallWTalk || (this.acSmallWTalk = new eui.ArrayCollection),
            this.sListViewPort.itemRenderer = t.ChatSWinItemRender,
            this.sListViewPort.dataProvider = this.acSmallWTalk,
            this.sListViewPort.validateNow(),
            this.sScroller.viewport.scrollV = Math.max(this.sScroller.viewport.contentHeight - this.sScroller.viewport.height, 0),
            this.adaptWidth(),
            this.acBigWTalk || (this.acBigWTalk = new eui.ArrayCollection),
            this.bListViewPort.itemRenderer = t.ChatBWinItemRender,
            this.bListViewPort.dataProvider = this.acBigWTalk,
            this.bListViewPort.validateNow(),
            this.bScroller.viewport.scrollV = Math.max(this.bScroller.viewport.contentHeight - this.bScroller.viewport.height, 0),
            this.tab = 0,
            this.rbAll.selected = !0,
            this.rbAll.group.selectedValue = 1,
            this.acPInfo = new eui.ArrayCollection,
            this.pListViewPort.itemRenderer = t.PrivateChatNameItemRender,
            this.pListViewPort.dataProvider = this.acPInfo,
            this.groupBig.width = this.groupBig.width + DeviceInfoManager.adapterOffSetX,
            this.leftBG.width = this.leftBG.width + +DeviceInfoManager.adapterOffSetX,
            this.grpRadioButtons.width = this.grpRadioButtons.width + DeviceInfoManager.adapterOffSetX,
            this.eTab = 0,
            this.rb_b1.selected = !0,
            this.rb_b1.group.selectedValue = 1,
            this.showTalks(ChatManager.getInstance().getContent(0)),
            this.addEvent(),
            this.startTimer(),
            this.checkNewSeer()
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(ChatManager.RECEIVE_NEW_INFO, this.newMsgHandle, this)
        },
        i.prototype.addEvent = function() {
            var e = this;
            this.rbAll.group.addEventListener(egret.Event.CHANGE, this.changeHandle, this),
            this.rb_b1.group.addEventListener(egret.Event.CHANGE, this.changeHandle1, this),
            ImageButtonUtil.add(this.btnBack, this.hideBig, this),
            ImageButtonUtil.add(this.btnEmoticon,
            function() {
                e.groupEmoticon.visible = !e.groupEmoticon.visible
            },
            this, !0, !0,
            function() {
                return ! 0
            }),
            ImageButtonUtil.add(this.btnSet,
            function() {
                PopViewManager.getInstance().openView(new t.ChatSetPopView)
            },
            this),
            ImageButtonUtil.add(this.btnSend,
            function() {
                var t = e.chatInput.text;
                e.sendMsg(t)
            },
            this, !0, !0,
            function() {
                return ! 0
            }),
            ImageButtonUtil.add(this.pChatCloseBtn,
            function() {
                var t = e.acPInfo.source;
                t.splice(t.indexOf(e.selectPChatObj), 1),
                e.arrPChatUser = t.concat(),
                ChatManager.getInstance().removePchat(e.selectPChatObj.id),
                e.showPchats(e.arrPChatUser)
            },
            this),
            this.bigMask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideBig, this),
            this.groupSmall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smallClick, this),
            this.pListViewPort.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick, this),
            this.eListViewPort.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.itemClick1, this),
            this.cBG.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideEmoticon, this),
            this.leftBG.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideEmoticon, this),
            this.bListViewPort.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideEmoticon, this),
            EventManager.addEventListener(ChatManager.RECEIVE_NEW_INFO, this.newMsgHandle, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this.adaptWidth, this)
        },
        i.prototype.smallClick = function() {
            this.imgRedDot1.visible ? (this.tab = 4, this.rbAll.group.selectedValue = 5) : 1 == this.lastNewMsgType ? (this.tab = 1, this.rbAll.group.selectedValue = 2) : 3 == this.lastNewMsgType ? (this.tab = 3, this.rbAll.group.selectedValue = 4) : 4 == this.lastNewMsgType ? (this.tab = 4, this.rbAll.group.selectedValue = 5) : (this.tab = 2, this.rbAll.group.selectedValue = 3),
            StatLogger.log("20210930版本系统功能", "主界面优化", "点击【聊天功能】按钮"),
            this.showChat(!0),
            this.groupBig.x = -this.groupBig.width,
            egret.Tween.get(this.groupBig).to({
                x: 0
            },
            350, egret.Ease.getBackOut(1))
        },
        i.prototype.hideBig = function() {
            var t = this;
            ChatManager.getInstance().showBig = !1,
            egret.Tween.get(this.groupBig).to({
                x: -this.groupBig.width
            },
            100, egret.Ease.circIn).call(function() {
                ChatManager.getInstance().checkChat(),
                t.groupBig.x = 0,
                t.imgRedDot2.visible && (t.imgRedDot1.visible = !0)
            })
        },
        i.prototype.changeHandle = function() {
            this.tab = this.rbAll.group.selectedValue - 1,
            this.groupEmoticon.visible = !1
        },
        i.prototype.changeHandle1 = function() {
            this.eTab = this.rb_b1.group.selectedValue - 1
        },
        i.prototype.showCd = function(t) {
            this.btnSend.visible = !t,
            this.groupCD.visible = t,
            DisplayUtil.setEnabled(this.btnEmoticon, !t, t)
        },
        i.prototype.startTimer = function() {
            this.timer = new egret.Timer(1e3),
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this),
            this.timer.start()
        },
        i.prototype.onTimer = function() {
            for (var t = this.arrCDNum.length,
            e = 0; t > e; e++) this.arrCDNum[e] > 0 && (this.arrCDNum[e]--, this.tab == e && (this.txtCD.text = this.arrCDNum[e].toString(), this.arrCDNum[e] <= 0 ? (this.btnSend.visible = !0, this.groupCD.visible = !1, 4 == this.tab && 0 == this.arrPChatUser.length ? DisplayUtil.setEnabled(this.btnEmoticon, !1, !0) : DisplayUtil.setEnabled(this.btnEmoticon, !0, !1)) : (this.btnSend.visible = !1, this.groupCD.visible = !0, DisplayUtil.setEnabled(this.btnEmoticon, !1, !0))))
        },
        i.prototype.showExpression = function() {
            for (var t = [], e = 0; e < this.arrEmoji.length; e++) this.arrEmoji[e].type == this.eTab + 1 && t.push(this.arrEmoji[e]);
            this.acEmoticon.replaceAll(t)
        },
        i.prototype.hideEmoticon = function() {
            this.groupEmoticon.visible = !1
        },
        i.prototype.newMsgHandle = function(t) {
            this.showTalks(ChatManager.getInstance().getContent(0, !0));
            var e = +t.data.type;
            this.lastNewMsgType = e;
            var i, n;
            4 == e && (t.data.senderID == MainManager.actorID ? (i = t.data.toID, n = t.data.toNickName) : (i = t.data.senderID, n = t.data.senderNicName), this.groupBig.visible || (this.imgRedDot1.visible = !0), 4 != this.tab && (this.imgRedDot2.visible = !0)),
            this.tab == e || 0 == this.tab ? 4 == this.tab && 4 == e ? (this.showPchat(i, n, !1), this.showPchats(this.arrPChatUser, i), this.selectPChatObj && i == this.selectPChatObj.id && this.showBwinTalks(ChatManager.getInstance().getContent(this.selectPChatObj.id))) : (4 == e && this.showPchat(i, n, !1), this.showBwinTalks(ChatManager.getInstance().getContent(this.tab))) : 4 == e && this.showPchat(i, n, !1)
        },
        i.prototype.itemClick1 = function() {
            this.groupEmoticon.visible = !1;
            var t = this.eListViewPort.selectedItem,
            e = "#" + t.id;
            this.sendMsg(e)
        },
        i.prototype.sendMsg = function(t) {
            var e = this;
            KTool.getMultiValue([124651],
            function(i) {
                var n = 1e3 * i[0];
                if (n > SystemTimerManager.sysBJDate.getTime()) {
                    var r = new Date(n);
                    return void Alarm.show("您已被禁言，暂时无法发布任何信息！（禁言结束时间为" + r.getFullYear() + "年" + (r.getMonth() + 1) + "月" + r.getDate() + "日 " + (r.getHours() < 10 ? "0" + r.getHours() : r.getHours()) + ":" + (r.getMinutes() < 10 ? "0" + r.getMinutes() : r.getMinutes()) + "）")
                }
                if (t = t.trim(), 4 == e.tab && !e.selectPChatObj || 1 == e.tab || "" == t) return void("" == t && BubblerManager.getInstance().showText("请输入聊天内容哦", !1, 16777215));
                var a = new egret.ByteArray;
                a.writeUnsignedInt(0 == e.tab ? 2 : e.tab),
                a.writeUnsignedInt(4 == e.tab ? e.selectPChatObj.id: 0);
                var s = new egret.ByteArray;
                s.writeUTFBytes(4 == e.tab ? e.selectPChatObj.name: ""),
                s.length = 16,
                a.writeBytes(s, 0, 16);
                var o = new egret.ByteArray;
                o.writeUTFBytes(t),
                o.length > 400 && (o.length = 400),
                a.writeUnsignedInt(o.length),
                a.writeBytes(o, 0, o.length),
                SocketConnection.sendByQueue(47340, [a],
                function() {
                    e.chatInput.text = "",
                    4 != e.tab && (0 == e.tab || 2 == e.tab ? (e.arrCDNum[2] = 6, e.arrCDNum[0] = 6) : e.arrCDNum[e.tab] = 6, e.showCd(!0), e.onTimer())
                },
                function() {
                    e.chatInput.text = ""
                })
            })
        },
        i.prototype.itemClick = function() {
            this.selectPChatObj = this.pListViewPort.selectedItem
        },
        i.prototype.itemClick2 = function() {
            StatLogger.log("20210930版本系统功能", "主界面优化", "点击【聊天功能】按钮");
            var t = this.sListViewPort.selectedItem;
            this.showChat(!0);
            var e = +t.type;
            5 == e && (e = 2),
            this.rbAll.group.selectedValue = e + 1,
            this.tab = e;
            var i, n;
            4 == e && (t.senderID == MainManager.actorID ? (i = t.toID, n = t.toNickName) : (i = t.senderID, n = t.senderNicName), this.showPchat(i, n))
        },
        i.prototype.showTalks = function(t) {
            t.length || t.push(null),
            this.childrenCreated ? (this.sScroller.stopAnimation(), this.acSmallWTalk.replaceAll(t), this.sScroller.viewport.validateNow(), this.sListViewPort.touchEnabled = !1, this.sListViewPort.touchChildren = !1, this.sScroller.viewport.scrollV = Math.max(this.sScroller.viewport.contentHeight - this.sScroller.viewport.height, 0)) : this.acSmallWTalk.replaceAll(t)
        },
        i.prototype.showBwinTalks = function(t) {
            var e = this;
            this.childrenCreated ? (this.bScroller.stopAnimation(), this.acBigWTalk.replaceAll(t), this.acBigWTalk.refresh(), egret.setTimeout(function() {
                e.bScroller.validateNow(),
                e.bListViewPort.validateNow(),
                e.bListViewPort.validateSize(!0),
                e.bListViewPort.scrollV = Math.max(e.bListViewPort.contentHeight - e.bListViewPort.height, 0)
            },
            this, 0)) : this.acBigWTalk.replaceAll(t)
        },
        i.prototype.showPchat = function(t, e, i) {
            void 0 === i && (i = !0);
            var n = {
                name: e,
                id: t
            };
            if (this.arrPChatUser) {
                for (var r = !1,
                a = void 0,
                s = void 0,
                o = 0; o < this.arrPChatUser.length; o++) if (this.arrPChatUser[o].id == t) {
                    r = !0,
                    a = this.arrPChatUser[o],
                    s = o;
                    break
                }
                r ? (this.arrPChatUser.splice(s, 1), this.arrPChatUser = [a].concat(this.arrPChatUser), n = a) : this.arrPChatUser = [n].concat(this.arrPChatUser)
            } else this.arrPChatUser = [],
            this.arrPChatUser.push(n);
            i && (this.selectPChatObj = n, this.groupSmall.visible = !1, this.groupBig.visible = !0, this.rbPrivate.selected = !0, this.rbAll.group.selectedValue = 5, this.tab = 4)
        },
        i.prototype.showPchats = function(t, e) {
            if (e) for (var i = 0,
            n = t; i < n.length; i++) {
                var r = n[i];
                r.id == e && this.selectPChatObj && this.selectPChatObj.id != e && (r.isUnread = !0)
            }
            if (this.acPInfo.replaceAll(t), this.acPInfo.refresh(), this.pchatShow.visible = t.length > 0, t.length) {
                if (this.selectPChatObj) {
                    var a = t.indexOf(this.selectPChatObj); - 1 != a ? (this.pListViewPort.selectedIndex = a, this.selectPChatObj = t[a]) : (this.pListViewPort.selectedIndex = 0, this.selectPChatObj = t[0])
                } else this.pListViewPort.selectedIndex = 0,
                this.selectPChatObj = t[0];
                DisplayUtil.setEnabled(this.btnEmoticon, !0, !1),
                this.tipTXt.visible = !1,
                this.chatInput.visible = !0
            } else DisplayUtil.setEnabled(this.btnEmoticon, !1, !0),
            this.selectPChatObj = null,
            this.tipTXt.visible = !0,
            this.chatInput.visible = !1,
            this.showBwinTalks([])
        },
        i.prototype.showPrivateContent = function() {
            this.selectPChatObj && this.showBwinTalks(ChatManager.getInstance().getContent(this.selectPChatObj.id))
        },
        i.prototype.adaptWidth = function() {
            var t = this;
            egret.setTimeout(function() {
                var e = DeviceInfoManager.adapterOffSetX;
                t.sScroller.width = t.parent.width - 858 - e,
                t.groupSmall.width = t.parent.width - 796 - e;
                for (var i = t.sScroller.viewport,
                n = 0; n < i.numChildren; n++) {
                    var r = i.getChildAt(n);
                    r.dataChanged()
                }
            },
            this, 50)
        },
        i.prototype.checkNewSeer = function() {
            this.adaptWidth();
            var t = GuideManager.isCompleted();
            return this.touchChildren = t,
            this.touchEnabled = t,
            this.grpNewLock.visible = !t,
            this.sScroller.visible = t,
            t
        },
        i
    } (eui.Component);
    t.Chat = e,
    __reflect(e.prototype, "chat.Chat")
} (chat || (chat = {}));
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ChatBWinItemRenderSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.head.visible = this.head2.visible = !1,
            this.avatarMy.setScale(.58),
            this.avatarOther.setScale(.58)
        },
        e.prototype.dataChanged = function() {
            var t = this,
            e = this.data;
            if (e) {
                var i = e.type;
                this.sys.parent && this.sys.parent.removeChild(this.sys),
                this.other.parent && this.other.parent.removeChild(this.other),
                this.my.parent && this.my.parent.removeChild(this.my);
                var n = i;
                switch (5 == n && (n = 2), i) {
                case 1:
                case 5:
                    this.addChild(this.sys);
                    var r = e.msg.replace(/\[/g, "<").replace(/\]/g, ">").replace(/\\n/g, "\n");
                    this.itxt.textFlow = (new egret.HtmlTextParser).parser(r),
                    this.itxt.addEventListener(egret.TextEvent.LINK, this.onClickLink, this),
                    this.infoBg.height = this.itxt.textHeight + 28,
                    this.infoBg.width = this.itxt.width + 26,
                    this.tags.source = "chatMain_tag" + n + "_png";
                    break;
                default:
                    var a = e.msg,
                    s = ~~a.split("#")[1],
                    o = !1;
                    config.Emoji.getItem(s) && (o = !0),
                    e.senderID == MainManager.actorID ? (this.addChild(this.my), this.mtxt.text = e.msg, this.mep.visible = o, this.mtxt.visible = !o, this.avatarMy.setData({
                        headId: MainManager.actorInfo.head_id,
                        headFrameId: MainManager.actorInfo.head_frame_id
                    }), this.mtxt.textHeight < 20 ? this.mtxt.textAlign = "right": this.mtxt.textAlign = "left", this.txtbg1.height = this.mtxt.textHeight + 28, this.txtbg1.width = this.mtxt.textWidth + 26, o && (this.mep.source = ClientConfig.getResPath("assets/expression/" + config.Emoji.getItem(s).icon + ".png"), this.txtbg1.height = this.mep.height + 22, this.txtbg1.width = this.mep.width + 21), this.nName.text = MainManager.actorInfo.nick, this.mTag.source = "chatMain_tag" + n + "_png") : (this.addChild(this.other), this.otxt.text = e.msg, this.once(egret.Event.RENDER,
                    function() {
                        t.otxtbg2.height = t.otxt.textHeight + 28,
                        t.oep.visible = o,
                        t.otxt.visible = !o,
                        t.otxtbg2.width = t.otxt.textWidth + 26,
                        o && (t.oep.source = ClientConfig.getResPath("assets/expression/" + config.Emoji.getItem(s).icon + ".png"), t.otxtbg2.height = t.oep.height + 22, t.otxtbg2.width = t.oep.width + 21),
                        t.oname.text = e.senderNicName,
                        t.avatarOther.setData({
                            headId: e.head_id,
                            headFrameId: e.head_frame
                        }),
                        t.avatarOther.addEventListener(egret.TouchEvent.TOUCH_TAP, t.onClickHead, t),
                        t.oTag.source = "chatMain_tag" + n + "_png",
                        t.imgJubao.x = t.otxtbg2.x + t.otxtbg2.width + 25,
                        t.imgJubao.y = t.otxtbg2.y + t.otxtbg2.height - 10
                    },
                    this)),
                    ImageButtonUtil.add(this.imgJubao,
                    function() {
                        var i = "你确定要举报<font color='#ff0000'$>" + e.senderNicName + "(" + e.senderID + ")</font>的不良行为吗？";
                        Alert.show(i,
                        function() {
                            var i = new UserInfo;
                            i.userID = e.senderID,
                            i.nick = e.senderNicName,
                            i.chatContent = t.data.msg,
                            ModuleManager.showModuleByID(154, i)
                        })
                    },
                    this)
                }
            }
            this.validateNow()
        },
        e.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.avatarOther.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHead, this),
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onClickHead = function() {
            StatLogger.log("202200701版本系统功能", "玩家聊天", "点击其他玩家头像并打开信息界面"),
            ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], this.data.senderID, "PersonalinformationIdCardPopView", AppDoStyle.NULL)
        },
        e.prototype.onClickLink = function(t) {
            var e = t.text.split("_");
            switch ( + e[0]) {
            case 1:
                ModuleManager.showModuleByID( + e[1], +e[2]);
                break;
            case 2:
                MapManager.changeMap( + e[1]);
                break;
            case 3:
                tipsPop.TipsPop.openItemPop({
                    id:
                    +e[1]
                });
                break;
            case 4:
                ModuleManager.showModule("personalInformation", ["peakJihadFirstPage", "playerInfo"], +e[1], "PersonalinformationIdCardPopView", AppDoStyle.HIDEN)
            }
            var i = 1 == +e[0] ? +e[3] : +e[2];
            Function(config.SysMessageStatistics.getItem(i).content)()
        },
        e
    } (eui.ItemRenderer);
    t.ChatBWinItemRender = e,
    __reflect(e.prototype, "chat.ChatBWinItemRender")
} (chat || (chat = {}));
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ChatExpressionItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            this.data && (this.icon.source = ClientConfig.getResPath("assets/expression/" + this.data.icon + ".png"))
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.ChatExpressionItemRender = e,
    __reflect(e.prototype, "chat.ChatExpressionItemRender")
} (chat || (chat = {}));
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ChaticonSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.unread.visible = !1,
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.chaticon, this.onTouchTapImageButton, this),
            EventManager.addEventListener(ChatManager.RECEIVE_NEW_INFO, this.newMsgHandle, this)
        },
        e.prototype.hideUnRead = function() {
            this.unread.visible = !1
        },
        e.prototype.newMsgHandle = function(t) {
            this.visible && (this.unread.visible = !0)
        },
        e.prototype.removeEvent = function() {
            EventManager.removeEventListener(ChatManager.RECEIVE_NEW_INFO, this.newMsgHandle, this),
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.chaticon:
                this.unread.visible = !1,
                ChatManager.getInstance().showChat(!0)
            }
        },
        e
    } (eui.Component);
    t.ChatIcon = e,
    __reflect(e.prototype, "chat.ChatIcon")
} (chat || (chat = {}));
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
ChatInfoType1 = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "",
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e
} (eui.Component);
__reflect(ChatInfoType1.prototype, "ChatInfoType1");
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
ChatMyInfoType1 = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "",
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    },
    e
} (eui.Component);
__reflect(ChatMyInfoType1.prototype, "ChatMyInfoType1");
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ChatSettingPopSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            this.addEvent(),
            this.imgGou1.visible = ChatManager.getInstance().showSysInfoNote,
            this.imgGou2.visible = ChatManager.getInstance().showBattleTeamInfoNote
        },
        e.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnOK,
            function() {
                ChatManager.getInstance().chatSet(!0, t.imgGou1.visible, t.imgGou2.visible, !1),
                t.hide(),
                t.dispatchEventWith("event_close_panel")
            },
            this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.hide(),
                t.dispatchEventWith("event_close_panel")
            },
            this),
            ImageButtonUtil.add(this.img1,
            function() {
                t.imgGou1.visible = !0
            },
            this, !1, !1),
            ImageButtonUtil.add(this.img2,
            function() {
                t.imgGou2.visible = !0
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgGou1,
            function() {
                t.imgGou1.visible = !1
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgGou2,
            function() {
                t.imgGou2.visible = !1
            },
            this, !1, !1)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        e
    } (PopView);
    t.ChatSetPopView = e,
    __reflect(e.prototype, "chat.ChatSetPopView")
} (chat || (chat = {}));
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "ChatSwinItemRenderSkin",
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            var t = this;
            if (this.data) {
                this.txt.x = 43,
                this.touchEnabled = this.touchChildren = !0;
                var e = this.data.msg,
                i = ~~e.split("#")[1],
                n = !1,
                r = this.data.type;
                config.Emoji.getItem(i) && (n = !0),
                this.typeIcon.source = "chatMain_tag" + this.data.type + "_png";
                this.data.senderNicName + ":" + e;
                if (n && (this.ep.source = ClientConfig.getResPath("assets/expression/" + config.Emoji.getItem(i).icon + ".png")), this.ep.visible = n, 1 == r || 5 == r) {
                    var a = this.data.msg.replace(/\[/g, "<").replace(/\]/g, ">").replace(/\\n/g, " ");
                    this.txt.textFlow = (new egret.HtmlTextParser).parser(a)
                } else {
                    var s = this.data.senderID == MainManager.actorID ? "我": this.data.senderNicName + ":",
                    o = s + e,
                    h = o.substr(s.length);
                    this.txt.textFlow = [{
                        text: 1 == r || 5 == r ? "": (this.data.senderID == MainManager.actorID ? "我": this.data.senderNicName) + ":",
                        style: {
                            textColor: 16763904
                        }
                    },
                    {
                        text: n ? "": h,
                        style: {
                            textColor: 16777215
                        }
                    }]
                }
                egret.setTimeout(function() {
                    t.ep.x = t.txt.x + t.txt.textWidth + 2
                },
                null, 0)
            } else this.txt.x = 0,
            this.txt.text = "点击开启聊天功能",
            this.txt.textColor = 14086655,
            this.touchEnabled = this.touchChildren = !1;
            this.txt.validateNow(),
            egret.Tween.removeTweens(this.group),
            this.group.x = 0;
            var u = this.parent.width;
            this.group.width > u && egret.Tween.get(this.group, {
                loop: !0
            }).to({
                x: -(this.group.width - u)
            },
            10 * (this.group.width - u)).wait(2e3, !1).to({
                x: 0
            },
            10 * (this.group.width - u)).wait(2e3, !1)
        },
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.ChatSWinItemRender = e,
    __reflect(e.prototype, "chat.ChatSWinItemRender")
} (chat || (chat = {}));
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
chat; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PrivateChatNameItemRenderSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        e.prototype.dataChanged = function() {
            this.data && (this.sName.text = this.usName.text = this.data.name, this.imgRedDot.visible = this.data.isUnread)
        },
        Object.defineProperty(e.prototype, "selected", {
            set: function(t) {
                egret.superSetter(e, this, "selected", t),
                this.sName.visible = t,
                this.usName.visible = !t,
                this.iDown.visible = t,
                this.iUp.visible = !t,
                this.data && t && (this.data.isUnread = !1, this.imgRedDot.visible = !1)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.destroy = function() {},
        e
    } (eui.ItemRenderer);
    t.PrivateChatNameItemRender = e,
    __reflect(e.prototype, "chat.PrivateChatNameItemRender")
} (chat || (chat = {}));
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
generateEUI.paths["resource/eui_skins/ChatBWinItemRenderSkin.exml"] = window.ChatBWinItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["infoBg", "itxt", "tags", "sys", "head2", "avatarOther", "otxtbg2", "oTag", "oname", "oep", "otxt", "imgJubao", "other", "head", "avatarMy", "txtbg1", "mTag", "mep", "nName", "mtxt", "my"],
        this.width = 382,
        this.elementsContent = [this.sys_i(), this.other_i(), this.my_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.sys_i = function() {
        var t = new eui.Group;
        return this.sys = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.infoBg_i(), this.itxt_i(), this.tags_i()],
        t
    },
    i.infoBg_i = function() {
        var t = new eui.Image;
        return this.infoBg = t,
        t.height = 72,
        t.scale9Grid = new egret.Rectangle(6, 4, 1, 2),
        t.source = "chatMain_infoBg_png",
        t.visible = !0,
        t.width = 382,
        t.x = 0,
        t.y = 23,
        t
    },
    i.itxt_i = function() {
        var t = new eui.Label;
        return this.itxt = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.size = 14,
        t.text = "说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.width = 354,
        t.x = 14,
        t.y = 40,
        t
    },
    i.tags_i = function() {
        var t = new eui.Image;
        return this.tags = t,
        t.height = 15,
        t.source = "",
        t.width = 36,
        t.x = 0,
        t.y = 0,
        t
    },
    i.other_i = function() {
        var t = new eui.Group;
        return this.other = t,
        t.visible = !0,
        t.width = 362,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group1_i(), this.otxtbg2_i(), this.oTag_i(), this.oname_i(), this.oep_i(), this.otxt_i(), this.imgJubao_i()],
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 56,
        t.width = 56,
        t.elementsContent = [this.head2_i(), this.avatarOther_i()],
        t
    },
    i.head2_i = function() {
        var t = new eui.Image;
        return this.head2 = t,
        t.height = 56,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "chatMain_head_png",
        t.width = 56,
        t.x = 0,
        t.y = 0,
        t
    },
    i.avatarOther_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatarOther = t,
        t.x = 32,
        t.y = 32,
        t
    },
    i.otxtbg2_i = function() {
        var t = new eui.Image;
        return this.otxtbg2 = t,
        t.height = 72,
        t.scale9Grid = new egret.Rectangle(4, 5, 3, 1),
        t.source = "chatMain_infoBg_png",
        t.visible = !0,
        t.width = 314,
        t.x = 68,
        t.y = 23,
        t
    },
    i.oTag_i = function() {
        var t = new eui.Image;
        return this.oTag = t,
        t.height = 15,
        t.source = "",
        t.width = 36,
        t.x = 68,
        t
    },
    i.oname_i = function() {
        var t = new eui.Label;
        return this.oname = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "用户昵称用户昵称",
        t.textAlign = "left",
        t.textColor = 16773733,
        t.width = 178,
        t.x = 108,
        t.y = 1,
        t
    },
    i.oep_i = function() {
        var t = new eui.Image;
        return this.oep = t,
        t.height = 35,
        t.width = 35,
        t.x = 80,
        t.y = 36,
        t
    },
    i.otxt_i = function() {
        var t = new eui.Label;
        return this.otxt = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.size = 14,
        t.text = "说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话",
        t.textAlign = "left",
        t.textColor = 16777215,
        t.width = 224,
        t.x = 82,
        t.y = 40,
        t
    },
    i.imgJubao_i = function() {
        var t = new eui.Image;
        return this.imgJubao = t,
        t.source = "chatMain_jubao_png",
        t.x = 350,
        t.y = 50,
        t
    },
    i.my_i = function() {
        var t = new eui.Group;
        return this.my = t,
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Group2_i(), this.txtbg1_i(), this.mTag_i(), this.mep_i(), this.nName_i(), this.mtxt_i()],
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 56,
        t.width = 56,
        t.x = 326,
        t.elementsContent = [this.head_i(), this.avatarMy_i()],
        t
    },
    i.head_i = function() {
        var t = new eui.Image;
        return this.head = t,
        t.height = 56,
        t.source = "chatMain_head_png",
        t.width = 56,
        t.y = 0,
        t
    },
    i.avatarMy_i = function() {
        var t = new core.component.AvatarIcon;
        return this.avatarMy = t,
        t.x = 24,
        t.y = 32,
        t
    },
    i.txtbg1_i = function() {
        var t = new eui.Image;
        return this.txtbg1 = t,
        t.height = 52,
        t.right = 68,
        t.scale9Grid = new egret.Rectangle(4, 4, 4, 4),
        t.source = "chatMain_txtbg1_png",
        t.width = 294,
        t.y = 23,
        t
    },
    i.mTag_i = function() {
        var t = new eui.Image;
        return this.mTag = t,
        t.height = 15,
        t.source = "",
        t.width = 36,
        t.x = 278,
        t.y = 0,
        t
    },
    i.mep_i = function() {
        var t = new eui.Image;
        return this.mep = t,
        t.height = 35,
        t.width = 35,
        t.x = 268,
        t.y = 36,
        t
    },
    i.nName_i = function() {
        var t = new eui.Label;
        return this.nName = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "是我是我",
        t.textAlign = "right",
        t.textColor = 8894463,
        t.width = 196,
        t.x = 75,
        t.y = 1,
        t
    },
    i.mtxt_i = function() {
        var t = new eui.Label;
        return this.mtxt = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 4,
        t.size = 14,
        t.text = "说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话说说话话",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 289,
        t.x = 12,
        t.y = 37,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/chatCheckBox.exml"] = window.chatCheckBox = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["labelDisplay"],
        this.elementsContent = [this._Group1_i()],
        this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "alpha", .7)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", .5)]), new eui.State("upAndSelected", [new eui.SetProperty("_Image1", "source", "chatSet_up_png")]), new eui.State("downAndSelected", [new eui.SetProperty("_Image1", "source", "chatSet_up_png")]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image1", "source", "chatSet_down_png")])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.percentHeight = 100,
        t.percentWidth = 100,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this._Image1_i(), this.labelDisplay_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.verticalAlign = "middle",
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.alpha = 1,
        t.fillMode = "scale",
        t.source = "chatSet_down_png",
        t
    },
    i.labelDisplay_i = function() {
        var t = new eui.Label;
        return this.labelDisplay = t,
        t.size = 20,
        t.text = "",
        t.textAlign = "center",
        t.textColor = 2500699,
        t.verticalAlign = "middle",
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChatExpressionItemRenderSkin.exml"] = window.ChatExpressionItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon"],
        this.height = 35,
        this.width = 35,
        this.elementsContent = [this.icon_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 35,
        t.width = 35,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChaticonSkin.exml"] = window.ChaticonSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["chaticon", "unread"],
        this.height = 60,
        this.width = 99,
        this.elementsContent = [this.chaticon_i(), this.unread_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.chaticon_i = function() {
        var t = new eui.Image;
        return this.chaticon = t,
        t.height = 52,
        t.source = "chaticon_chaticon_png",
        t.width = 99,
        t.x = 0,
        t.y = 8,
        t
    },
    i.unread_i = function() {
        var t = new eui.Image;
        return this.unread = t,
        t.height = 25,
        t.source = "chaticon_unread_png",
        t.width = 25,
        t.x = 58,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChatmainSkin.exml"] = window.ChatMainSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bigMask", "cBG", "leftBG", "rbAll", "rbSystem", "rbPublic", "rbTeam", "rbPrivate", "imgRedDot2", "grpRadioButtons", "pListViewPort", "pScroller", "txtChatting", "pChatCloseBtn", "pchatShow", "pChat", "btnBack", "btnSet", "btnSend", "txtCD", "groupCD", "btnEmoticon", "tipTXt", "chatInput", "groupInput", "bListViewPort", "bScroller", "eListViewPort", "rb_b1", "groupEmoticon", "txtNotTalk", "grpContent", "groupBig", "imgRedDot1", "leftLine", "sListViewPort", "sScroller", "lock", "grpNewLock", "groupSmall"],
        this.elementsContent = [this.groupBig_i(), this.groupSmall_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 64,
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "chat_main_rballup_png"), new eui.SetProperty("_Image1", "y", 24), new eui.SetProperty("_Image1", "right", 27)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chat_main_rballdown_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "scale9Grid", new egret.Rectangle(1, 21, 1, 22))]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.bottom = 0,
            t.left = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t.right = 0,
            t.top = 0,
            t.touchChildren = !0,
            t
        },
        i._Image1_i = function() {
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
            this.height = 64,
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "chat_main_rbsystemup_png"), new eui.SetProperty("_Image1", "y", 24), new eui.SetProperty("_Image1", "right", 27)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chat_main_rbsystemdown_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "scale9Grid", new egret.Rectangle(1, 21, 1, 22))]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.bottom = 0,
            t.left = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t.right = 0,
            t.top = 0,
            t
        },
        i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t
        },
        e
    } (eui.Skin),
    r = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.height = 64,
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "chat_main_rbpublicup_png"), new eui.SetProperty("_Image1", "y", 23), new eui.SetProperty("_Image1", "right", 27)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chat_main_rbpublicdown_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "scale9Grid", new egret.Rectangle(1, 21, 1, 22))]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.bottom = 0,
            t.left = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t.right = 0,
            t.top = 0,
            t
        },
        i._Image1_i = function() {
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
            this.height = 64,
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "chat_main_rbteamup_png"), new eui.SetProperty("_Image1", "y", 23), new eui.SetProperty("_Image1", "right", 27)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chat_main_rbteamdown_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "scale9Grid", new egret.Rectangle(1, 21, 1, 22))]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.bottom = 0,
            t.left = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t.right = 0,
            t.top = 0,
            t
        },
        i._Image1_i = function() {
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
            this.height = 64,
            this.elementsContent = [this._Image1_i()],
            this._Rect1_i(),
            this.states = [new eui.State("up", [new eui.AddItems("_Rect1", "", 0, ""), new eui.SetProperty("_Image1", "source", "chat_main_rbprivateup_png"), new eui.SetProperty("_Image1", "y", 24), new eui.SetProperty("_Image1", "right", 27)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chat_main_rbprivatedown_png"), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "right", 0), new eui.SetProperty("_Image1", "left", 0), new eui.SetProperty("_Image1", "scale9Grid", new egret.Rectangle(1, 21, 1, 22))]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Rect1_i = function() {
            var t = new eui.Rect;
            return this._Rect1 = t,
            t.alpha = 0,
            t.bottom = 0,
            t.left = 0,
            t.percentHeight = 100,
            t.percentWidth = 100,
            t.right = 0,
            t.top = 0,
            t
        },
        i._Image1_i = function() {
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
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "chatMainb1_up_png"), new eui.SetProperty("_Image1", "x", 13), new eui.SetProperty("_Image1", "y", 4)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "chatMainb1_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0)]), new eui.State("disabled", [])]
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
    return h.groupBig_i = function() {
        var t = new eui.Group;
        return this.groupBig = t,
        t.visible = !0,
        t.width = 502,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.bigMask_i(), this.grpContent_i()],
        t
    },
    h.bigMask_i = function() {
        var t = new eui.Rect;
        return this.bigMask = t,
        t.fillAlpha = 0,
        t.height = 640,
        t.visible = !0,
        t
    },
    h.grpContent_i = function() {
        var t = new eui.Group;
        return this.grpContent = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this.cBG_i(), this._Image3_i(), this.leftBG_i(), this.grpRadioButtons_i(), this._Group2_i()],
        t
    },
    h.cBG_i = function() {
        var t = new eui.Group;
        return this.cBG = t,
        t.left = 0,
        t.right = 5,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    h._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.left = 0,
        t.right = 0,
        t.scale9Grid = new egret.Rectangle(7, 7, 6, 6),
        t.source = "chat_main_imgbg_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    h._Image2_i = function() {
        var t = new eui.Image;
        return t.right = 94,
        t.source = "chat_main_imgbgicon_png",
        t.visible = !0,
        t.y = 208,
        t
    },
    h._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 51,
        t.left = 0,
        t.right = 7,
        t.source = "chat_main_imgdownbg_png",
        t.visible = !0,
        t.y = 589,
        t
    },
    h.leftBG_i = function() {
        var t = new eui.Image;
        return this.leftBG = t,
        t.height = 589,
        t.scale9Grid = new egret.Rectangle(29, 0, 29, 5),
        t.source = "chat_main_imgleftbg_png",
        t.visible = !0,
        t.width = 87,
        t.x = 0,
        t.y = 0,
        t
    },
    h.grpRadioButtons_i = function() {
        var t = new eui.Group;
        return this.grpRadioButtons = t,
        t.visible = !0,
        t.width = 90,
        t.x = 0,
        t.y = 68,
        t.elementsContent = [this.rbAll_i(), this.rbSystem_i(), this.rbPublic_i(), this.rbTeam_i(), this.rbPrivate_i(), this.imgRedDot2_i()],
        t
    },
    h.rbAll_i = function() {
        var t = new eui.RadioButton;
        return this.rbAll = t,
        t.groupName = "g1",
        t.height = 64,
        t.left = 0,
        t.right = 0,
        t.value = "1",
        t.visible = !0,
        t.y = 0,
        t.skinName = i,
        t
    },
    h.rbSystem_i = function() {
        var t = new eui.RadioButton;
        return this.rbSystem = t,
        t.groupName = "g1",
        t.height = 64,
        t.left = 0,
        t.right = 0,
        t.value = "2",
        t.y = 65,
        t.skinName = n,
        t
    },
    h.rbPublic_i = function() {
        var t = new eui.RadioButton;
        return this.rbPublic = t,
        t.groupName = "g1",
        t.height = 64,
        t.left = 0,
        t.right = 0,
        t.value = "3",
        t.y = 130,
        t.skinName = r,
        t
    },
    h.rbTeam_i = function() {
        var t = new eui.RadioButton;
        return this.rbTeam = t,
        t.groupName = "g1",
        t.height = 64,
        t.left = 0,
        t.right = 0,
        t.value = "4",
        t.y = 195,
        t.skinName = a,
        t
    },
    h.rbPrivate_i = function() {
        var t = new eui.RadioButton;
        return this.rbPrivate = t,
        t.groupName = "g1",
        t.height = 64,
        t.left = 0,
        t.right = 0,
        t.value = "5",
        t.y = 260,
        t.skinName = s,
        t
    },
    h.imgRedDot2_i = function() {
        var t = new eui.Image;
        return this.imgRedDot2 = t,
        t.right = 13,
        t.source = "chat_main_imgreddot2_png",
        t.visible = !0,
        t.y = 271,
        t
    },
    h._Group2_i = function() {
        var t = new eui.Group;
        return t.right = 0,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 0,
        t.elementsContent = [this._Image4_i(), this.pChat_i(), this.btnBack_i(), this.btnSet_i(), this.groupInput_i(), this.bScroller_i(), this.groupEmoticon_i(), this.txtNotTalk_i()],
        t
    },
    h._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.scale9Grid = new egret.Rectangle(4, 137, 5, 138),
        t.source = "chat_main_imgbgline_png",
        t.visible = !0,
        t.x = 465,
        t.y = 0,
        t
    },
    h.pChat_i = function() {
        var t = new eui.Group;
        return this.pChat = t,
        t.x = 72,
        t.y = 20,
        t.elementsContent = [this._Image5_i(), this.pScroller_i(), this.pchatShow_i()],
        t
    },
    h._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "chat_main_imgprivateline_png",
        t.visible = !0,
        t.x = 2,
        t.y = 31,
        t
    },
    h.pScroller_i = function() {
        var t = new eui.Scroller;
        return this.pScroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 40,
        t.scaleX = 1,
        t.scaleY = 1,
        t.scrollPolicyH = "auto",
        t.width = 387,
        t.x = 0,
        t.y = -10,
        t.viewport = this.pListViewPort_i(),
        t
    },
    h.pListViewPort_i = function() {
        var t = new eui.List;
        return this.pListViewPort = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    h._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.paddingTop = 10,
        t
    },
    h.pchatShow_i = function() {
        var t = new eui.Group;
        return this.pchatShow = t,
        t.visible = !0,
        t.x = 5,
        t.y = 27,
        t.elementsContent = [this.txtChatting_i(), this.pChatCloseBtn_i()],
        t
    },
    h.txtChatting_i = function() {
        var t = new eui.Label;
        return this.txtChatting = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "与用户名称称聊天中......",
        t.textColor = 12441594,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    h.pChatCloseBtn_i = function() {
        var t = new eui.Image;
        return this.pChatCloseBtn = t,
        t.height = 40,
        t.source = "chatMain_pChatCloseBtn_png",
        t.width = 40,
        t.x = 348,
        t.y = 0,
        t
    },
    h.btnBack_i = function() {
        var t = new eui.Image;
        return this.btnBack = t,
        t.source = "chat_main_btnback_png",
        t.visible = !0,
        t.x = 452,
        t.y = 295,
        t
    },
    h.btnSet_i = function() {
        var t = new eui.Image;
        return this.btnSet = t,
        t.source = "chat_main_btnset_png",
        t.x = 0,
        t.y = 596,
        t
    },
    h.groupInput_i = function() {
        var t = new eui.Group;
        return this.groupInput = t,
        t.x = 73,
        t.y = 599,
        t.elementsContent = [this.btnSend_i(), this.groupCD_i(), this.btnEmoticon_i(), this._Image7_i(), this.tipTXt_i(), this.chatInput_i()],
        t
    },
    h.btnSend_i = function() {
        var t = new eui.Image;
        return this.btnSend = t,
        t.source = "chat_main_btnsend_png",
        t.visible = !0,
        t.x = 338,
        t.y = 2,
        t
    },
    h.groupCD_i = function() {
        var t = new eui.Group;
        return this.groupCD = t,
        t.visible = !0,
        t.x = 338,
        t.y = 2,
        t.elementsContent = [this._Image6_i(), this.txtCD_i()],
        t
    },
    h._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 28,
        t.source = "chat_main_imgcdbg_png",
        t.visible = !0,
        t.width = 48,
        t.x = 0,
        t.y = 0,
        t
    },
    h.txtCD_i = function() {
        var t = new eui.Label;
        return this.txtCD = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "5s",
        t.textColor = 15066597,
        t.verticalCenter = 0,
        t
    },
    h.btnEmoticon_i = function() {
        var t = new eui.Image;
        return this.btnEmoticon = t,
        t.source = "chat_main_btnemoticon_png",
        t.x = 297,
        t.y = 2,
        t
    },
    h._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 32,
        t.source = "chat_main_imginputbg_png",
        t.visible = !0,
        t.width = 285,
        t.x = 0,
        t.y = 0,
        t
    },
    h.tipTXt_i = function() {
        var t = new eui.Label;
        return this.tipTXt = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "暂无私聊对象",
        t.textAlign = "center",
        t.textColor = 6388143,
        t.width = 232,
        t.x = 34,
        t.y = 8,
        t
    },
    h.chatInput_i = function() {
        var t = new eui.EditableText;
        return this.chatInput = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.width = 265,
        t.x = 10,
        t.y = 7,
        t
    },
    h.bScroller_i = function() {
        var t = new eui.Scroller;
        return this.bScroller = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 527,
        t.scaleX = 1,
        t.scaleY = 1,
        t.scrollPolicyH = "off",
        t.visible = !0,
        t.width = 400,
        t.x = 69,
        t.y = 54,
        t.viewport = this.bListViewPort_i(),
        t
    },
    h.bListViewPort_i = function() {
        var t = new eui.List;
        return this.bListViewPort = t,
        t.height = 527,
        t.scaleX = 1,
        t.scaleY = 1,
        t.visible = !0,
        t.width = 369,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    h._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.paddingRight = 10,
        t.paddingTop = 10,
        t
    },
    h.groupEmoticon_i = function() {
        var t = new eui.Group;
        return this.groupEmoticon = t,
        t.visible = !0,
        t.x = 63,
        t.y = 404,
        t.elementsContent = [this._Image8_i(), this._Scroller1_i(), this._Group1_i(), this._Image9_i()],
        t
    },
    h._Image8_i = function() {
        var t = new eui.Image;
        return t.height = 193,
        t.scale9Grid = new egret.Rectangle(136, 10, 136, 4),
        t.source = "chat_emoticon_imgbg1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    h._Scroller1_i = function() {
        var t = new eui.Scroller;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 136,
        t.scaleX = 1,
        t.scaleY = 1,
        t.scrollPolicyH = "off",
        t.width = 369,
        t.x = 23,
        t.y = 7,
        t.viewport = this.eListViewPort_i(),
        t
    },
    h.eListViewPort_i = function() {
        var t = new eui.List;
        return this.eListViewPort = t,
        t.height = 136,
        t.width = 369,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    h._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 10,
        t.orientation = "rows",
        t
    },
    h._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 12,
        t.y = 146,
        t.elementsContent = [this.rb_b1_i()],
        t
    },
    h.rb_b1_i = function() {
        var t = new eui.RadioButton;
        return this.rb_b1 = t,
        t.groupName = "g2",
        t.value = "1",
        t.x = 0,
        t.y = 0,
        t.skinName = o,
        t
    },
    h._Image9_i = function() {
        var t = new eui.Image;
        return t.height = 1,
        t.source = "common_line_01_s9_png",
        t.width = 386,
        t.x = 12,
        t.y = 145,
        t
    },
    h.txtNotTalk_i = function() {
        var t = new eui.Label;
        return this.txtNotTalk = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "该频道下不能发言",
        t.textColor = 6388143,
        t.visible = !0,
        t.x = 183,
        t.y = 606.97,
        t
    },
    h.groupSmall_i = function() {
        var t = new eui.Group;
        return this.groupSmall = t,
        t.visible = !1,
        t.x = 9,
        t.y = 588,
        t.elementsContent = [this.imgRedDot1_i(), this._Image10_i(), this.leftLine_i(), this.sScroller_i(), this.grpNewLock_i()],
        t
    },
    h.imgRedDot1_i = function() {
        var t = new eui.Image;
        return this.imgRedDot1 = t,
        t.source = "chat_main_imgreddot2_png",
        t.x = 32,
        t.y = -9,
        t
    },
    h._Image10_i = function() {
        var t = new eui.Image;
        return t.height = 35,
        t.source = "chatMain_chatbg1_png",
        t.width = 38,
        t.x = 0,
        t.y = 0,
        t
    },
    h.leftLine_i = function() {
        var t = new eui.Image;
        return this.leftLine = t,
        t.height = 40,
        t.source = "main_bottomBg_line_png",
        t.width = 13,
        t.x = 43,
        t.y = -2,
        t
    },
    h.sScroller_i = function() {
        var t = new eui.Scroller;
        return this.sScroller = t,
        t.height = 18,
        t.scrollPolicyH = "off",
        t.width = 280,
        t.x = 62,
        t.y = 8,
        t.viewport = this.sListViewPort_i(),
        t
    },
    h.sListViewPort_i = function() {
        var t = new eui.List;
        return this.sListViewPort = t,
        t.height = 18,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 280,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout2_i(),
        t
    },
    h._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    h.grpNewLock_i = function() {
        var t = new eui.Group;
        return this.grpNewLock = t,
        t.visible = !0,
        t.x = 53,
        t.y = -9,
        t.elementsContent = [this.lock_i(), this._Label1_i()],
        t
    },
    h.lock_i = function() {
        var t = new eui.Image;
        return this.lock = t,
        t.source = "new_seer_lock2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    h._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "新手教程后开启聊天功能",
        t.textColor = 5996473,
        t.x = 42,
        t.y = 15,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChatsetSkin.exml"] = window.ChatSetSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "cancelBtn", "okBtn", "txt1", "checkBox1", "txt2", "txt3", "txt4", "checkBox2", "checkBox3", "checkBox4"],
        this.height = 378,
        this.width = 630,
        this.elementsContent = [this.bg_i(), this._Image4_i(), this.cancelBtn_i(), this.okBtn_i(), this._Group1_i(), this.txt2_i(), this.txt3_i(), this.txt4_i(), this.checkBox2_i(), this.checkBox3_i(), this.checkBox4_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.bg_i = function() {
        var t = new eui.Group;
        return this.bg = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 378,
        t.source = "common_s9_pop_bg1_png",
        t.visible = !1,
        t.width = 630,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.fillMode = "repeat",
        t.height = 333,
        t.source = "common_pop_point_png",
        t.width = 608,
        t.x = 11,
        t.y = 31,
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "common_pop_title_samll_png",
        t.width = 600,
        t.x = 15,
        t.y = 12,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "chatSet_title_png",
        t.x = 48,
        t.y = 18,
        t
    },
    i.cancelBtn_i = function() {
        var t = new eui.Image;
        return this.cancelBtn = t,
        t.source = "common_close_1_png",
        t.x = 577,
        t.y = -10,
        t
    },
    i.okBtn_i = function() {
        var t = new eui.Image;
        return this.okBtn = t,
        t.height = 50,
        t.source = "chatSet_okBtn_png",
        t.width = 174,
        t.x = 217,
        t.y = 281,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.visible = !1,
        t.x = 202,
        t.y = 101,
        t.elementsContent = [this.txt1_i(), this.checkBox1_i()],
        t
    },
    i.txt1_i = function() {
        var t = new eui.Label;
        return this.txt1 = t,
        t.size = 20,
        t.text = "允许陌生人私聊",
        t.textColor = 2500699,
        t.x = 42,
        t.y = 2,
        t
    },
    i.checkBox1_i = function() {
        var t = new eui.CheckBox;
        return this.checkBox1 = t,
        t.height = 24,
        t.label = "",
        t.skinName = "chatCheckBox",
        t.width = 24,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txt2_i = function() {
        var t = new eui.Label;
        return this.txt2 = t,
        t.size = 20,
        t.text = "显示系统消息提醒",
        t.textColor = 2500699,
        t.x = 243,
        t.y = 143,
        t
    },
    i.txt3_i = function() {
        var t = new eui.Label;
        return this.txt3 = t,
        t.size = 20,
        t.text = "显示战队消息提醒",
        t.textColor = 2500699,
        t.x = 243,
        t.y = 182,
        t
    },
    i.txt4_i = function() {
        var t = new eui.Label;
        return this.txt4 = t,
        t.size = 20,
        t.text = "显示聊天悬浮窗口",
        t.textColor = 2500699,
        t.visible = !1,
        t.x = 243,
        t.y = 195,
        t
    },
    i.checkBox2_i = function() {
        var t = new eui.CheckBox;
        return this.checkBox2 = t,
        t.height = 24,
        t.label = "",
        t.skinName = "chatCheckBox",
        t.width = 24,
        t.x = 202,
        t.y = 141,
        t
    },
    i.checkBox3_i = function() {
        var t = new eui.CheckBox;
        return this.checkBox3 = t,
        t.height = 24,
        t.label = "",
        t.skinName = "chatCheckBox",
        t.width = 24,
        t.x = 202,
        t.y = 180,
        t
    },
    i.checkBox4_i = function() {
        var t = new eui.CheckBox;
        return this.checkBox4 = t,
        t.height = 24,
        t.label = "",
        t.skinName = "chatCheckBox",
        t.visible = !1,
        t.width = 24,
        t.x = 202,
        t.y = 193,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChatSettingPopSkin.exml"] = window.ChatSettingPopSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["img1", "imgGou1", "img2", "imgGou2", "btnOK", "btnClose"],
        this.height = 285,
        this.width = 481,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Label1_i(), this.img1_i(), this.imgGou1_i(), this._Label2_i(), this.img2_i(), this.imgGou2_i(), this.btnOK_i(), this.btnClose_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 285,
        t.scale9Grid = new egret.Rectangle(7, 8, 6, 5),
        t.source = "chat_setting_pop_imgbg_png",
        t.width = 481,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "chat_setting_pop_imgtitlebg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "显示系统消息提醒",
        t.textColor = 12834813,
        t.x = 190,
        t.y = 83,
        t
    },
    i.img1_i = function() {
        var t = new eui.Image;
        return this.img1 = t,
        t.source = "chat_setting_pop_img1_png",
        t.x = 148,
        t.y = 80,
        t
    },
    i.imgGou1_i = function() {
        var t = new eui.Image;
        return this.imgGou1 = t,
        t.source = "chat_setting_pop_imggou1_png",
        t.x = 152,
        t.y = 86,
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "显示战队消息提醒",
        t.textColor = 12834813,
        t.x = 190,
        t.y = 138,
        t
    },
    i.img2_i = function() {
        var t = new eui.Image;
        return this.img2 = t,
        t.source = "chat_setting_pop_img1_png",
        t.x = 148,
        t.y = 135,
        t
    },
    i.imgGou2_i = function() {
        var t = new eui.Image;
        return this.imgGou2 = t,
        t.source = "chat_setting_pop_imggou1_png",
        t.x = 152,
        t.y = 141,
        t
    },
    i.btnOK_i = function() {
        var t = new eui.Group;
        return this.btnOK = t,
        t.x = 174,
        t.y = 213,
        t.elementsContent = [this._Image3_i(), this._Label3_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "chat_setting_pop_imgbtn_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.size = 22,
        t.text = "确 定",
        t.textColor = 10181146,
        t.x = 42,
        t.y = 12,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "chat_setting_pop_btnclose_png",
        t.x = 438,
        t.y = 1,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ChatSwinItemRenderSkin.exml"] = window.ChatSwinItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["typeIcon", "txt", "group", "ep"],
        this.width = 284,
        this.elementsContent = [this.group_i(), this.ep_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.group_i = function() {
        var t = new eui.Group;
        return this.group = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.typeIcon_i(), this.txt_i()],
        t
    },
    i.typeIcon_i = function() {
        var t = new eui.Image;
        return this.typeIcon = t,
        t.height = 17,
        t.width = 40,
        t.x = 0,
        t.y = 1,
        t
    },
    i.txt_i = function() {
        var t = new eui.Label;
        return this.txt = t,
        t.fontFamily = "MFShangHei",
        t.lineSpacing = 2,
        t.size = 18,
        t.text = "Label",
        t.x = 44,
        t.y = 0,
        t
    },
    i.ep_i = function() {
        var t = new eui.Image;
        return this.ep = t,
        t.height = 15,
        t.width = 15,
        t.x = 43,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PrivateChatNameItemRenderSkin.exml"] = window.PrivateChatNameItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["iDown", "iUp", "usName", "sName", "imgRedDot"],
        this.height = 31,
        this.width = 102,
        this.elementsContent = [this.iDown_i(), this.iUp_i(), this.usName_i(), this.sName_i(), this.imgRedDot_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.iDown_i = function() {
        var t = new eui.Image;
        return this.iDown = t,
        t.source = "chat_private_user_item_imgup_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    i.iUp_i = function() {
        var t = new eui.Image;
        return this.iUp = t,
        t.height = 31,
        t.source = "chat_private_user_item_imgdown_png",
        t.visible = !0,
        t.width = 102,
        t.x = 0,
        t.y = 0,
        t
    },
    i.usName_i = function() {
        var t = new eui.Label;
        return this.usName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "用户名称",
        t.textColor = 7242936,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 8,
        t
    },
    i.sName_i = function() {
        var t = new eui.Label;
        return this.sName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 16,
        t.text = "用户名称",
        t.textColor = 10808574,
        t.touchEnabled = !1,
        t.visible = !0,
        t.y = 8,
        t
    },
    i.imgRedDot_i = function() {
        var t = new eui.Image;
        return this.imgRedDot = t,
        t.source = "chat_main_imgreddot2_png",
        t.x = 90,
        t.y = -6,
        t
    },
    e
} (eui.Skin);