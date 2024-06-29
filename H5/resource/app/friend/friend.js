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
friend; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = FriendItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            ImageButtonUtil.add(this.avatar, this.onClickhead, this, !1, !1),
            ImageButtonUtil.add(this.btnSend, this.sendHandle, this, !1, !1),
            ImageButtonUtil.add(this.btnAccept, this.acceptHandle, this, !1, !1),
            ImageButtonUtil.add(this.btnSiliao, this._siliao, this, !1, !1)
        },
        e.prototype.sendHandle = function(t) {
            var e = this;
            StatLogger.log("1113版本系统功能", "好友系统", "点击【赠送】友谊之星"),
            BattleFireManager.getInstatnce().getBattleFireInfo().then(function(t) {
                var i = 20 - t[3];
                return 0 >= i ? void BubblerManager.getInstance().showText("今日赠送友谊之星次数达到上限！") : void SocketConnection.sendByQueue(47348, [3, 0, 1, e.data.id],
                function(t) {
                    var i = e.data;
                    BubblerManager.getInstance().showText("已成功向" + i.nickName + "赠送1个友谊之星！"),
                    i.itemSend = 1,
                    e.doneBtn.visible = i.itemSend > 0 && 0 == i.receiveItem,
                    e.btnAccept.visible = i.receiveItem > 0,
                    e.btnSend.visible = 0 == i.receiveItem && 0 == i.itemSend
                })
            })
        },
        e.prototype.acceptHandle = function(t) {
            var e = this;
            StatLogger.log("1113版本系统功能", "好友系统", "点击【领取】友谊之星");
            var i = ItemManager.getNumByID(1400154);
            return i + this.data.receiveItem > 100 ? void BubblerManager.getInstance().showText(" 友谊之星领取后将超出数量上限，暂时无法领取！") : void SocketConnection.sendByQueue(47348, [5, 0, 1, this.data.id],
            function(t) {
                var i = e.data;
                i.receiveItem = 0,
                e.doneBtn.visible = i.itemSend > 0 && 0 == i.receiveItem,
                e.btnAccept.visible = i.receiveItem > 0,
                e.btnSend.visible = 0 == i.receiveItem && 0 == i.itemSend
            })
        },
        e.prototype._siliao = function(t) {
            EventManager.dispatchEventWith("friend_open_siliao", !1, this.data)
        },
        e.prototype.dataChanged = function() {
            var t = this,
            e = this.data;
            e && (this.txtName.text = e.nickName, this.avatar.setData({
                headId: e.head,
                headFrameId: e.head_frame
            }), 0 == e.vip ? this.grpVip.visible = !1 : (this.grpVip.visible = !0, this.txtVipLv.text = "" + e.vipLv), this.offline.visible = this.online.visible = !1, 0 == e.onlineID ? (this.offline.visible = !0, this.txtTime.text = "离线时长:" + TimeUtil.getOffLineStatus(1e3 * e.lastOfflineTime, SystemTimerManager.sysDate.getTime())) : this.online.visible = !0, this.doneBtn.visible = e.itemSend > 0 && 0 == e.receiveItem, this.btnAccept.visible = e.receiveItem > 0, this.btnSend.visible = 0 == e.receiveItem && 0 == e.itemSend, ImageButtonUtil.add(this.btnJubao,
            function() {
                var e = "你确定要举报<font color='#ff0000'$>" + t.data.nickName + "(" + t.data.id + ")</font>的不良行为吗？";
                Alert.show(e,
                function() {
                    var e = new UserInfo;
                    e.userID = t.data.id,
                    e.nick = t.data.nickName,
                    ModuleManager.showModuleByID(154, e)
                })
            },
            this))
        },
        e.prototype.onClickhead = function(t) {
            var e = this.data;
            ModuleManager.showModuleByID(12, e.id)
        },
        e
    } (eui.ItemRenderer);
    t.FriendListItem = e,
    __reflect(e.prototype, "friend.FriendListItem")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.panels = [null, null, null, null],
            t.skinName = "FriendSkin",
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            this.menu.addEventListener(eui.UIEvent.CHANGE, this.onChangePanel, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.prototype.onClose.call(i)
            },
            this),
            EventManager.addEventListener(RelationEvent.RELATION_CHANGE, this.onRelateionChange, this),
            EventManager.addEventListener("event_set_txt_Count", this._onSetTxtCount, this),
            EventManager.addEventListener("friend_open_siliao", this.onOpenSiliao, this),
            ImageButtonUtil.add(this.fastgetBtn, this.fastGetHandle, this),
            this.menu.itemRenderer = t.MenuItem,
            this.menu.dataProvider = new eui.ArrayCollection([1, 2, 3, 4]),
            this.menu.selectedIndex = 0,
            this.onChangePanel(null)
        },
        i.prototype.fastGetHandle = function() {
            var t = this;
            Alert.show("一键领取友谊之星，同时向20位好友赠送友谊之星！",
            function() {
                StatLogger.log("1113版本系统功能", "好友系统", "点击【一键领取】友谊之星"),
                BattleFireManager.getInstatnce().getBattleFireInfo().then(function(e) {
                    var i = 20 - e[3];
                    FriendManager.getFriendList().then(function(e) {
                        for (var n = [], r = new egret.ByteArray, a = 0; a < e.length; a++) 0 == e[a].itemSend && n.length < i && n.push(e[a].id);
                        var r = new egret.ByteArray;
                        r.writeUnsignedInt(n.length);
                        for (var o = 0; o < n.length; o++) r.writeUnsignedInt(n[o]);
                        SocketConnection.sendByQueue(47348, [4, 0, r],
                        function(e) {
                            var i = e.data,
                            n = i.readUnsignedInt(),
                            r = i.readUnsignedInt();
                            t.showTxt(n, r),
                            t.currPanel && "FriendList" == t.currPanel.name && (0 != n || 0 != r) && t.currPanel.update()
                        })
                    })
                })
            })
        },
        i.prototype.showTxt = function(t, e) {
            BubblerManager.getInstance().showText("成功收取" + t + "个友谊之星，同时赠送" + e + "位好友友谊之星")
        },
        i.prototype.onRelateionChange = function() {
            this.currPanel && "Apply" != this.currPanel.name && this.currPanel.update()
        },
        i.prototype.onChangePanel = function(e) {
            var i = this.menu.selectedIndex;
            this.grpContainer.removeChildren();
            var n;
            if (this.fastgetBtn.visible = 0 == i, !this.panels[i]) switch (n = !0, i) {
            case 0:
                this.panels[0] = new t.FriendList,
                this.panels[0].name = "FriendList";
                break;
            case 1:
                this.panels[1] = new t.Apply,
                this.panels[1].name = "Apply";
                break;
            case 2:
                this.panels[2] = new t.ApplyList,
                this.panels[2].name = "ApplyList";
                break;
            case 3:
                this.panels[3] = new t.BlackList,
                this.panels[3].name = "BlackList"
            }
            this.currPanel = this.panels[i],
            n || this.currPanel.update(),
            this.grpContainer.addChild(this.currPanel)
        },
        i.prototype._onSetTxtCount = function(t) {
            t.data ? (this.txtCount.visible = !0, this.txtCount.text = t.data) : (this.txtCount.text = "", this.txtCount.visible = !1)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this);
            for (var t in this.panels) this.panels[t] && this.panels[t].destroy();
            this.panels = null,
            EventManager.removeEventListener(RelationEvent.RELATION_CHANGE, this.onRelateionChange, this),
            EventManager.removeEventListener("event_set_txt_Count", this._onSetTxtCount, this),
            EventManager.removeEventListener("friend_open_siliao", this.onOpenSiliao, this)
        },
        i.prototype.onOpenSiliao = function(t) {
            ModuleManager.hideModule(this, !0);
            var e = t.data,
            i = e;
            ChatManager.getInstance().showPchat(i.id, i.nickName)
        },
        i
    } (BaseModule);
    t.Friend = e,
    __reflect(e.prototype, "friend.Friend")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ApplyItemSkin,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            ImageButtonUtil.add(this.btnApply, this.onClickApply, this),
            ImageButtonUtil.add(this.avatar, this.onClickhead, this, !1, !1)
        },
        e.prototype.dataChanged = function() {
            var t = this.data;
            t && (this.txtName.text = t.nickName, this.avatar.setData({
                headId: t.head,
                headFrameId: t.head_frame
            }), 0 == t.vip ? this.grpVip.visible = !1 : (this.grpVip.visible = !0, this.txtVipLv.text = "" + t.vip))
        },
        e.prototype.onClickApply = function(t) {
            var e = this.data;
            FriendManager.addFriend(e.id).then(function() {
                BubblerManager.getInstance().showText("好友申请发送成功"),
                EventManager.dispatchEvent(new egret.Event(RelationEvent.RECOMMEND_REMOVE, !1, !1, e.id))
            },
            function(t) {})
        },
        e.prototype.onClickhead = function(t) {
            var e = this.data;
            ModuleManager.showModuleByID(12, e.id)
        },
        e
    } (eui.ItemRenderer);
    t.ApplyItem = e,
    __reflect(e.prototype, "friend.ApplyItem")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = ApplyListItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            this.btnReject.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReject, this),
            this.btnAgree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickAgree, this),
            ImageButtonUtil.add(this.avatar, this.onClickhead, this, !1, !1)
        },
        e.prototype.dataChanged = function() {
            var t = this.data;
            t && (this.txtName.text = t.nickName, this.avatar.setData({
                headId: t.head,
                headFrameId: t.head_frame
            }), 0 == t.vip ? this.grpVip.visible = !1 : (this.grpVip.visible = !0, this.txtVipLv.text = "" + t.vip))
        },
        e.prototype.onClickReject = function() {
            var t = this.data;
            t && FriendManager.replyFriend(t.id, 0).then(function() {
                BubblerManager.getInstance().showText("已拒绝该玩家好友申请"),
                EventManager.dispatchEventWith("friend_refreshAlarm")
            })
        },
        e.prototype.onClickAgree = function() {
            var t = this.data;
            t && FriendManager.replyFriend(t.id, 1).then(function() {
                BubblerManager.getInstance().showText("你和" + t.nickName + "（" + t.id + "）已成为好友"),
                EventManager.dispatchEventWith("friend_refreshAlarm")
            })
        },
        e.prototype.onClickhead = function(t) {
            var e = this.data;
            ModuleManager.showModuleByID(12, e.id)
        },
        e
    } (eui.ItemRenderer);
    t.ApplyListItem = e,
    __reflect(e.prototype, "friend.ApplyListItem")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = BlackItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.avatar.setScale(.62),
            ImageButtonUtil.add(this.avatar, this.onClickhead, this, !1, !1),
            ImageButtonUtil.add(this.btnRemove, this.onClickRemove, this)
        },
        e.prototype.dataChanged = function() {
            var t = this.data;
            t && (this.txtName.text = t.nickName, this.avatar.setData({
                headId: t.head,
                headFrameId: t.head_frame
            }), 0 == t.vip ? this.grpVip.visible = !1 : (this.grpVip.visible = !0, this.txtVipLv.text = "" + t.vipLv))
        },
        e.prototype.onClickRemove = function(t) {
            var e = this.data;
            Alert.show("移除后将能收到该玩家的好友申请和聊天消息，是否移除？",
            function() {
                FriendManager.removeBlack(e.id).then(function(t) {})
            })
        },
        e.prototype.onClickhead = function(t) {
            var e = this.data;
            ModuleManager.showModuleByID(12, e.id)
        },
        e
    } (eui.ItemRenderer);
    t.BlackItem = e,
    __reflect(e.prototype, "friend.BlackItem")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = "FriendMenuItemSkin",
            e
        }
        return __extends(e, t),
        e.prototype.dataChanged = function() {
            var t = this;
            switch (this.data) {
            case 1:
                this.txtMenu.text = "好友列表";
                break;
            case 2:
                this.txtMenu.text = "添加好友";
                break;
            case 3:
                this.txtMenu.text = "好友申请",
                FriendManager.getApplyList().then(function(e) {
                    t.imgAlarm.visible = e.length > 0
                }),
                EventManager.addEventListener("friend_refreshAlarm", this.dataChanged, this),
                this.once(egret.Event.REMOVED_FROM_STAGE,
                function() {
                    EventManager.removeEventListener("friend_refreshAlarm", t.dataChanged, t)
                },
                this);
                break;
            case 4:
                this.txtMenu.text = "黑名单"
            }
        },
        e
    } (eui.ItemRenderer);
    t.MenuItem = e,
    __reflect(e.prototype, "friend.MenuItem")
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.skinName = ApplySkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var i = this;
            e.prototype.childrenCreated.call(this),
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.ApplyItem,
            this._list.dataProvider = this.arrayColletion,
            ImageButtonUtil.add(this.btnApply,
            function() {
                if (i.txtSearch.text.length > 0) {
                    var t = ~~i.txtSearch.text;
                    t > 0 ? FriendManager.addFriend(t).then(function() {},
                    function(t) {}) : Alarm.show("请输入玩家米米号"),
                    i.txtSearch.text = ""
                } else Alarm.show("请输入玩家米米号")
            },
            this),
            this.update(),
            EventManager.addEventListener(RelationEvent.RECOMMEND_REMOVE, this.onRemoveRecFriend, this)
        },
        i.prototype.onRemoveRecFriend = function(t) {
            for (var e = t.data,
            i = this.arrayColletion.length - 1; i >= 0; i--) {
                var n = this.arrayColletion.getItemAt(i);
                if (n.id == e) {
                    this.arrayColletion.removeItemAt(i);
                    break
                }
            }
        },
        i.prototype.update = function() {
            var t = this;
            EventManager.dispatchEventWith("event_set_txt_Count", !1, ""),
            FriendManager.getRecommendedList().then(function(e) {
                t.arrayColletion.removeAll();
                for (var i = 0; i < e.length; i++) t.arrayColletion.addItem(e[i])
            },
            function() {
                t.arrayColletion.removeAll()
            })
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.Apply = e,
    __reflect(e.prototype, "friend.Apply", ["IFriendBasePanel"])
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.skinName = ApplyListSKin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.ApplyListItem,
            this._list.dataProvider = this.arrayColletion,
            EventManager.addEventListener(RelationEvent.DEAL_FRIEND_APLY, this.onDealAply, this),
            this.update()
        },
        i.prototype.update = function() {
            var t = this;
            EventManager.dispatchEventWith("event_set_txt_Count", !1, "好友申请只保留15天"),
            FriendManager.getApplyList().then(function(e) {
                t.arrayColletion.removeAll();
                for (var i = 0; i < e.length; i++) t.arrayColletion.addItem(e[i]);
                t.noapply.visible = !1,
                0 == e.length && (t.noapply.visible = !0)
            },
            function() {
                t.arrayColletion.removeAll()
            })
        },
        i.prototype.onDealAply = function(t) {
            for (var e = t.data,
            i = this.arrayColletion.length - 1; i >= 0; i--) {
                var n = this.arrayColletion.getItemAt(i);
                if (n.id == e) {
                    this.arrayColletion.removeItemAt(i);
                    break
                }
            }
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.ApplyList = e,
    __reflect(e.prototype, "friend.ApplyList", ["IFriendBasePanel"])
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.skinName = BlackListSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.BlackItem,
            this._list.dataProvider = this.arrayColletion,
            EventManager.addEventListener(RelationEvent.BLACK_REMOVE, this.onRemoveBlack, this),
            this.update()
        },
        i.prototype.update = function() {
            var t = this;
            FriendManager.getBlackList().then(function(e) {
                t.arrayColletion.removeAll();
                for (var i = 0; i < e.length; i++) t.arrayColletion.addItem(e[i]);
                t.noblack.visible = 0 == e.length,
                EventManager.dispatchEventWith("event_set_txt_Count", !1, "黑名单数量：" + e.length + "/" + FriendManager.MAX_BLACK_COUNT)
            },
            function() {
                t.arrayColletion.removeAll()
            })
        },
        i.prototype.onRemoveBlack = function(t) {
            for (var e = t.data,
            i = 0; i < this.arrayColletion.length; i++) {
                var n = this.arrayColletion.getItemAt(i);
                if (n && n.id == e) {
                    this.arrayColletion.removeItemAt(i),
                    EventManager.dispatchEventWith("event_set_txt_Count", !1, "黑名单数量：" + this.arrayColletion.length + "/" + FriendManager.MAX_BLACK_COUNT);
                    break
                }
            }
        },
        i.prototype.destroy = function() {
            EventManager.removeEventListener(RelationEvent.BLACK_REMOVE, this.onRemoveBlack, this)
        },
        i
    } (eui.Component);
    t.BlackList = e,
    __reflect(e.prototype, "friend.BlackList", ["IFriendBasePanel"])
} (friend || (friend = {}));
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
friend; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.arrayColletion = new eui.ArrayCollection([]),
            t.skinName = FriendListSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._scroller.viewport = this._list,
            this._list.itemRenderer = t.FriendListItem,
            this._list.dataProvider = this.arrayColletion,
            this.txtNoFriend.visible = !1,
            EventManager.addEventListener(RelationEvent.FRIEND_REMOVE, this.onRemoveFriend, this),
            this.update()
        },
        i.prototype.onRemoveFriend = function(t) {
            for (var e = ~~t.data,
            i = 0; i < this.arrayColletion.length; i++) {
                var n = this.arrayColletion.getItemAt(i);
                if (n.id == e) {
                    this.arrayColletion.removeItemAt(i),
                    EventManager.dispatchEventWith("event_set_txt_Count", !1, "好友数量:" + this.arrayColletion.length + "/" + FriendManager.MAX_FRIEND_COUNT);
                    break
                }
            }
        },
        i.prototype.update = function() {
            var t = this;
            FriendManager.getFriendList().then(function(e) {
                t.arrayColletion.removeAll();
                for (var i = 0; i < e.length; i++) t.arrayColletion.addItem(e[i]);
                EventManager.dispatchEventWith("event_set_txt_Count", !1, "好友数量:" + e.length + "/" + FriendManager.MAX_FRIEND_COUNT),
                0 == e.length ? t.txtNoFriend.visible = !0 : t.txtNoFriend.visible = !1
            },
            function() {
                t.arrayColletion.removeAll(),
                t.txtNoFriend.visible = !0
            })
        },
        i.prototype.destroy = function() {},
        i
    } (eui.Component);
    t.FriendList = e,
    __reflect(e.prototype, "friend.FriendList", ["IFriendBasePanel"])
} (friend || (friend = {}));
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
generateEUI.paths["resource/eui_skins/ApplyListSKin.exml"] = window.ApplyListSKin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["noapply", "_list", "_scroller"],
        this.height = 480,
        this.width = 795,
        this.elementsContent = [this.noapply_i(), this._scroller_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.noapply_i = function() {
        var t = new eui.Label;
        return this.noapply = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "暂无好友申请",
        t.textColor = 7767460,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 16,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ApplySkin.exml"] = window.ApplySkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["_list", "_scroller", "recomlist", "inputBg", "txtSearch", "btnApply", "input", "apply_title", "line_yc_1"],
        this.height = 480,
        this.width = 795,
        this.elementsContent = [this.recomlist_i(), this.input_i(), this.apply_title_i(), this.line_yc_1_i()]
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
            t.size = 18,
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
            t.size = 18,
            t.textColor = 13097725,
            t.touchEnabled = !1,
            t.verticalCenter = 0,
            t.percentWidth = 100,
            t
        },
        e
    } (eui.Skin),
    n = e.prototype;
    return n.recomlist_i = function() {
        var t = new eui.Group;
        return this.recomlist = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 138,
        t.elementsContent = [this._scroller_i()],
        t
    },
    n._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.viewport = this._list_i(),
        t
    },
    n._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    n._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 16,
        t
    },
    n.input_i = function() {
        var t = new eui.Group;
        return this.input = t,
        t.horizontalCenter = 0,
        t.y = 30,
        t.elementsContent = [this.inputBg_i(), this.txtSearch_i(), this.btnApply_i()],
        t
    },
    n.inputBg_i = function() {
        var t = new eui.Image;
        return this.inputBg = t,
        t.height = 40,
        t.source = "friend_inputBg_png",
        t.width = 339,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtSearch_i = function() {
        var t = new eui.TextInput;
        return this.txtSearch = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 24,
        t.maxChars = 18,
        t.prompt = "输入玩家米米号",
        t.width = 190,
        t.x = 10,
        t.y = 11,
        t.skinName = i,
        t
    },
    n.btnApply_i = function() {
        var t = new eui.Group;
        return this.btnApply = t,
        t.cacheAsBitmap = !0,
        t.height = 40,
        t.width = 94,
        t.x = 245,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.source = "friend_a1_png",
        t.top = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "添加好友",
        t.verticalCenter = 0,
        t
    },
    n.apply_title_i = function() {
        var t = new eui.Image;
        return this.apply_title = t,
        t.height = 19,
        t.source = "friend_apply_title_png",
        t.width = 79,
        t.x = 3,
        t.y = 109,
        t
    },
    n.line_yc_1_i = function() {
        var t = new eui.Image;
        return this.line_yc_1 = t,
        t.height = 1,
        t.left = 0,
        t.right = 0,
        t.source = "friend_line_yc_1_png",
        t.y = 96,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/BlackListSkin.exml"] = window.BlackListSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["noblack", "_list", "_scroller", "txtCount"],
        this.height = 480,
        this.width = 795,
        this.elementsContent = [this.noblack_i(), this._scroller_i(), this.txtCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.noblack_i = function() {
        var t = new eui.Label;
        return this.noblack = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "暂无黑名单",
        t.textColor = 7767460,
        t.verticalCenter = 0,
        t.visible = !0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.right = 0,
        t.size = 16,
        t.text = "黑名单数量：100/100",
        t.textColor = 3492213,
        t.visible = !1,
        t.y = 425,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FriendListSkin.exml"] = window.FriendListSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtNoFriend", "_list", "_scroller", "txtCount"],
        this.height = 480,
        this.width = 795,
        this.elementsContent = [this.txtNoFriend_i(), this._scroller_i(), this.txtCount_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.txtNoFriend_i = function() {
        var t = new eui.Label;
        return this.txtNoFriend = t,
        t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 22,
        t.text = "暂无好友",
        t.textColor = 7767460,
        t.verticalCenter = 0,
        t
    },
    i._scroller_i = function() {
        var t = new eui.Scroller;
        return this._scroller = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.viewport = this._list_i(),
        t
    },
    i._list_i = function() {
        var t = new eui.List;
        return this._list = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.top = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.right = 0,
        t.size = 16,
        t.text = "好友数量：100/100",
        t.textColor = 3492213,
        t.visible = !1,
        t.y = 425,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/FriendSkin.exml"] = window.FriendSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnClose", "menu", "grpContainer", "txtCount", "fastgetBtn"],
        this.height = 547,
        this.width = 1e3,
        this.elementsContent = [this._Image1_i(), this.btnClose_i(), this.menu_i(), this.grpContainer_i(), this.txtCount_i(), this.fastgetBtn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "friend_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.source = "friend_btnClose_png",
        t.x = 957,
        t.y = 0,
        t
    },
    i.menu_i = function() {
        var t = new eui.List;
        return this.menu = t,
        t.height = 450,
        t.width = 180,
        t.y = 47,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t
    },
    i.grpContainer_i = function() {
        var t = new eui.Group;
        return this.grpContainer = t,
        t.height = 492,
        t.width = 807,
        t.x = 186,
        t.y = 47,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "好友数量：100/100",
        t.textAlign = "center",
        t.textColor = 8757203,
        t.width = 166.574,
        t.x = .522,
        t.y = 494.99,
        t
    },
    i.fastgetBtn_i = function() {
        var t = new eui.Image;
        return this.fastgetBtn = t,
        t.source = "friend_fastgetBtn_png",
        t.x = 58,
        t.y = 428,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/ApplyItemSkin.exml"] = window.ApplyItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "vip", "txtVipLv", "grpVip", "avatar", "btnApply"],
        this.elementsContent = [this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image2_i(), this._Group2_i(), this.btnApply_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 92,
        t.y = 22,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtName_i(), this.grpVip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "好友名五字",
        t.textColor = 16777215,
        t
    },
    i.grpVip_i = function() {
        var t = new eui.Group;
        return this.grpVip = t,
        t.x = 104,
        t.y = 0,
        t.elementsContent = [this.vip_i(), this.txtVipLv_i()],
        t
    },
    i.vip_i = function() {
        var t = new eui.Image;
        return this.vip = t,
        t.height = 41,
        t.source = "nono_png",
        t.width = 41,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtVipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.txtVipLv = t,
        t.font = "vipfont_fnt",
        t.height = 20,
        t.text = "11",
        t.width = 30,
        t.x = 28,
        t.y = 28,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgheadbg_png",
        t.visible = !1,
        t.x = 9,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 60,
        t.width = 60,
        t.x = 16,
        t.y = 12,
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
    i.btnApply_i = function() {
        var t = new eui.Group;
        return this.btnApply = t,
        t.x = 624,
        t.y = 20,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "friend_black_item_btnremovebg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "申请好友",
        t.textColor = 10181146,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/ApplyListItemSkin.exml"] = window.ApplyListItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "vip", "txtVipLv", "grpVip", "avatar", "btnAgree", "btnReject"],
        this.elementsContent = [this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image2_i(), this._Group2_i(), this.btnAgree_i(), this.btnReject_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 92,
        t.y = 22,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtName_i(), this.grpVip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "好友名五字",
        t.textColor = 16777215,
        t
    },
    i.grpVip_i = function() {
        var t = new eui.Group;
        return this.grpVip = t,
        t.x = 104,
        t.y = 0,
        t.elementsContent = [this.vip_i(), this.txtVipLv_i()],
        t
    },
    i.vip_i = function() {
        var t = new eui.Image;
        return this.vip = t,
        t.height = 41,
        t.source = "nono_png",
        t.width = 41,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtVipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.txtVipLv = t,
        t.font = "vipfont_fnt",
        t.height = 20,
        t.text = "11",
        t.width = 30,
        t.x = 28,
        t.y = 28,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgheadbg_png",
        t.visible = !1,
        t.x = 9,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 60,
        t.width = 60,
        t.x = 16,
        t.y = 12,
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
    i.btnAgree_i = function() {
        var t = new eui.Image;
        return this.btnAgree = t,
        t.source = "friend_apply_list_item_btnagree_png",
        t.x = 619,
        t.y = 19,
        t
    },
    i.btnReject_i = function() {
        var t = new eui.Image;
        return this.btnReject = t,
        t.source = "friend_apply_list_item_btnreject_png",
        t.x = 468,
        t.y = 19,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/BlackItemSkin.exml"] = window.BlackItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "vip", "txtVipLv", "grpVip", "avatar", "btnRemove"],
        this.elementsContent = [this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.cacheAsBitmap = !0,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image2_i(), this._Group2_i(), this.btnRemove_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 92,
        t.y = 22,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtName_i(), this.grpVip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "好友名五字",
        t.textColor = 16777215,
        t
    },
    i.grpVip_i = function() {
        var t = new eui.Group;
        return this.grpVip = t,
        t.x = 104,
        t.y = 0,
        t.elementsContent = [this.vip_i(), this.txtVipLv_i()],
        t
    },
    i.vip_i = function() {
        var t = new eui.Image;
        return this.vip = t,
        t.height = 41,
        t.source = "nono_png",
        t.width = 41,
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtVipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.txtVipLv = t,
        t.font = "vipfont_fnt",
        t.height = 20,
        t.text = "11",
        t.width = 30,
        t.x = 28,
        t.y = 28,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgheadbg_png",
        t.visible = !1,
        t.x = 9,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 60,
        t.width = 60,
        t.x = 16,
        t.y = 12,
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
    i.btnRemove_i = function() {
        var t = new eui.Group;
        return this.btnRemove = t,
        t.x = 624,
        t.y = 20,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "friend_black_item_btnremovebg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "移 除",
        t.textColor = 10181146,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/FriendItemSkin.exml"] = window.FriendItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtName", "vip", "txtVipLv", "grpVip", "avatar", "btnSiliao", "txtTime", "offline", "online", "btnJubao", "btnAccept", "btnSend", "doneBtn"],
        this.elementsContent = [this._Group3_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group3_i = function() {
        var t = new eui.Group;
        return t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Group1_i(), this._Image2_i(), this._Group2_i(), this.btnSiliao_i(), this.offline_i(), this.online_i(), this.btnJubao_i(), this.btnAccept_i(), this.btnSend_i(), this.doneBtn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.x = 92,
        t.y = 8,
        t.layout = this._HorizontalLayout1_i(),
        t.elementsContent = [this.txtName_i(), this.grpVip_i()],
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 14,
        t.verticalAlign = "middle",
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "好友名五字",
        t.textColor = 16777215,
        t
    },
    i.grpVip_i = function() {
        var t = new eui.Group;
        return this.grpVip = t,
        t.x = 104,
        t.y = 0,
        t.elementsContent = [this.vip_i(), this.txtVipLv_i()],
        t
    },
    i.vip_i = function() {
        var t = new eui.Image;
        return this.vip = t,
        t.height = 30,
        t.source = "nono_png",
        t.width = 30,
        t.x = 0,
        t.y = 2.396,
        t
    },
    i.txtVipLv_i = function() {
        var t = new eui.BitmapLabel;
        return this.txtVipLv = t,
        t.font = "vipfont_fnt",
        t.scaleX = .8,
        t.scaleY = .8,
        t.text = "11",
        t.visible = !0,
        t.x = 21,
        t.y = 23,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "friend_black_item_imgheadbg_png",
        t.visible = !1,
        t.x = 9,
        t.y = 5,
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 60,
        t.width = 60,
        t.x = 16,
        t.y = 12,
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
    i.btnSiliao_i = function() {
        var t = new eui.Group;
        return this.btnSiliao = t,
        t.x = 624,
        t.y = 20,
        t.elementsContent = [this._Image3_i(), this._Label1_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 46,
        t.source = "friend_black_item_btnremovebg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    i._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "REEJI",
        t.horizontalCenter = 0,
        t.size = 20,
        t.text = "私 聊",
        t.textColor = 10181146,
        t.verticalCenter = 0,
        t
    },
    i.offline_i = function() {
        var t = new eui.Group;
        return this.offline = t,
        t.visible = !0,
        t.x = 92,
        t.y = 54,
        t.elementsContent = [this.txtTime_i(), this._Image4_i()],
        t
    },
    i.txtTime_i = function() {
        var t = new eui.Label;
        return this.txtTime = t,
        t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "离线时长30小时",
        t.textColor = 10595243,
        t.x = 12.93,
        t.y = 0,
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "friend_list_item_imgofflinepoint_png",
        t.x = 0,
        t.y = 4.31,
        t
    },
    i.online_i = function() {
        var t = new eui.Group;
        return this.online = t,
        t.visible = !0,
        t.x = 92,
        t.y = 54,
        t.elementsContent = [this._Label2_i(), this._Image5_i()],
        t
    },
    i._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 18,
        t.text = "在线",
        t.textColor = 7461887,
        t.x = 13.22,
        t.y = 0,
        t
    },
    i._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "friend_list_item_imgonlinepoint_png",
        t.x = 0,
        t.y = 3.45,
        t
    },
    i.btnJubao_i = function() {
        var t = new eui.Image;
        return this.btnJubao = t,
        t.source = "friend_jubao_png",
        t.visible = !0,
        t.x = 477,
        t.y = 22,
        t
    },
    i.btnAccept_i = function() {
        var t = new eui.Image;
        return this.btnAccept = t,
        t.source = "friend_list_item_btnaccept_png",
        t.visible = !0,
        t.x = 534,
        t.y = 21,
        t
    },
    i.btnSend_i = function() {
        var t = new eui.Image;
        return this.btnSend = t,
        t.source = "friend_list_item_btnsend_png",
        t.visible = !0,
        t.x = 534,
        t.y = 21,
        t
    },
    i.doneBtn_i = function() {
        var t = new eui.Image;
        return this.doneBtn = t,
        t.source = "friend_list_item_btnhassend_png",
        t.visible = !0,
        t.x = 534,
        t.y = 21,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/FriendMenuItemSkin.exml"] = window.FriendMenuItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["txtMenu", "imgAlarm"],
        this.currentState = "up",
        this.height = 63,
        this.width = 171,
        this.elementsContent = [this._Group1_i()],
        this._Image1_i(),
        this.states = [new eui.State("down", [new eui.AddItems("_Image1", "_Group1", 0, ""), new eui.SetProperty("txtMenu", "textColor", 15857151)]), new eui.State("up", [new eui.SetProperty("txtMenu", "textColor", 8822740)])]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return this._Group1 = t,
        t.bottom = 0,
        t.cacheAsBitmap = !0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this.txtMenu_i(), this.imgAlarm_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return this._Image1 = t,
        t.source = "friend_menu_item_imgmenuup_png",
        t
    },
    i.txtMenu_i = function() {
        var t = new eui.Label;
        return this.txtMenu = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 20,
        t.textColor = 15857151,
        t.visible = !0,
        t.y = 21,
        t
    },
    i.imgAlarm_i = function() {
        var t = new eui.Image;
        return this.imgAlarm = t,
        t.source = "friend_menu_item_imgalarm_png",
        t.visible = !1,
        t.x = 123,
        t.y = 11.25,
        t
    },
    e
} (eui.Skin);