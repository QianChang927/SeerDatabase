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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihad6V6BanPickModePanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            void 0 === e && (e = null);
            var i = t.call(this, e) || this;
            return i.TOTAL_TIME = 70,
            i.SELECT_DISABLEDTIME = 25,
            i.SELECT_DEFAULTTIME = 20,
            i.SELECT_PLAYTIME = 20,
            i._canPlayPetNum = 3,
            i._requireArr = [0, 0, 30, 20, 20, 0],
            i._isJJ = !1,
            i._maxNum = 6,
            i._isShowLv = !0,
            i._curMode = e,
            i._isJJ = 3 == i._curMode ? !0 : !1,
            i._curModeFoverId = PeakJihadController.wildlevelForever,
            i._isShowLv = 2 == i._curMode || 3 == i._curMode ? !0 : !1,
            i.skinName = "Peakjihad3v3banpickmodeSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            this.adaptBgByScale(this.bg),
            PeakJihadController.isDraw = !1,
            this._rivalisdisableOther = !1;
            var t = new Date;
            this._startTime = t.getTime(),
            this.timeTx.text = "30",
            this._statusTimer = new egret.Timer(1e3),
            this._statusTimer.addEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this),
            this._isReconnect = !0,
            this._statusTimer.start(),
            KTool.getMultiValue([3306],
            function(t) {
                e._fightMod = t[0],
                e.initItem(),
                e.initView(),
                e.breakLineSynchronizedData(),
                e.initEvent()
            })
        },
        i.prototype.initEvent = function() {
            var e = this;
            SocketConnection.addCmdListener(45143, this.onrivalUserDisabledMyPet, this),
            SocketConnection.addCmdListener(42284, this.onTimeOutJingyong, this),
            SocketConnection.addCmdListener(42282, this.onTimeOutFirst, this),
            SocketConnection.addCmdListener(42283, this.onTimeOutPlay, this),
            SocketConnection.addCmdListener(45140, this.onQuitRoom, this),
            SocketConnection.addCmdListener(CommandID.NOTE_INVITE_TO_FIGHT, this.noteInviteToFight, this),
            SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT, this.noteInviteToFight, this),
            SocketConnection.addCmdListener(45148, this.onOverTimeQuit, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                e._isReconnect = !0,
                e.breakLineSynchronizedData(),
                Alert.currAlert && Alert.clickCancel()
            },
            this)
        },
        i.prototype.breakLineSynchronizedData = function() {
            var e = this;
            KTool.getMultiValue([3307],
            function(i) {
                e._curStep = i[0],
                e.synchroData(function() {
                    e.update(),
                    6 == e._curStep && (t.prototype.onClose.call(e), Alarm.show("与服务器连接丢失，请重新进入游戏", core.gameUtil.ReloaderGame)),
                    0 == e._curStep && Alarm.show("战斗已结束！",
                    function() {
                        t.prototype.onClose.call(e)
                    })
                })
            })
        },
        i.prototype.onStatusTimer = function() {
            void 0 != this._curStepRequireTime && (this._isReconnect ? (this._isReconnect = !1, this._serverPassTime = Math.max(SystemTimerManager.sysBJDate.getTime() / 1e3 - this._serverStartTime, 1) - 1, this._curStepRequireTime -= this._serverPassTime, this._sectionsurplusTime = this._curStepRequireTime) : this._sectionsurplusTime = --this._curStepRequireTime, this.timeTx.text = String(Math.floor(this._sectionsurplusTime)), this._sectionsurplusTime < 0 && (this.timeTx.text = "0"))
        },
        i.prototype.onStartFightBtnClick = function(e) {
            e.currentTarget.name.split("_")[1]
        },
        i.prototype.clickHandle = function(e) {
            var i = this;
            t.prototype.clickHandle.call(this, e);
            var r = e.target;
            switch (r) {
            case "closeBtn":
                Alarm.show("你已经跟一位玩家匹配成功，为了尊重对手，你是不可以主动退出此次巅峰战的！", null, this);
                break;
            case "reportBtn":
                KTool.getMultiValue([3325],
                function(e) {
                    0 != e[0] && t.prototype.onClose.call(i)
                });
                break;
            case "exitBtn":
                KTool.getMultiValue([3325],
                function(e) {
                    0 != e[0] && SocketConnection.sendByQueue(45147, [3],
                    function(e) {
                        Alarm.show("退出成功，未获得任何评级积分及胜利点数", null, i),
                        t.prototype.onClose.call(i)
                    })
                })
            }
        },
        i.prototype.showTitlePng = function(e) {
            void 0 === e && (e = 0),
            this.titlePng.source = 0 == e ? "": "PeakJihad6V6BanPickMode_titlePng_" + (e - 1) + "_png"
        },
        i.prototype.initView = function() {
            var e = this;
            this.showTitlePng(0);
            var t = new ClothPreview;
            t.show(MainManager.actorInfo.clothes),
            this.myInfoGroup.addChild(t),
            this.name1.text = String(MainManager.actorInfo.nick),
            this.id1.text = String(MainManager.actorInfo.userID),
            KTool.getMultiValue([this._curModeFoverId],
            function(t) {
                e._score = t[0];
                var i = t[0],
                r = i & Math.pow(2, 16) - 1,
                n = KTool.subByte(i, 16, 16);
                e.level1.text = PeakJihadController.getMyRatingsNameByScore(i, 4 > r ? !0 : !1),
                e.icon1.source = ClientConfig.getPeakjihadLevelPath(PeakJihadController.getResIndexByLevelScore(r, n) + 1),
                e.myStarIcon.visible = r > 3 && e._isShowLv,
                e.level1.visible = e.icon1.visible = e._isShowLv
            }),
            ItemManager.updateItems([PeakJihadController.itemId1],
            function() {
                e._itemNum = ItemManager.getNumByID(PeakJihadController.itemId1)
            }),
            KTool.getMultiValue([3308],
            function(t) {
                e._rivalUserID = t[0],
                KTool.getOnlineUsersForeverOrDailyVal([e._rivalUserID, e._curModeFoverId],
                function(t) {
                    var i = t[0],
                    r = i & Math.pow(2, 16) - 1,
                    n = KTool.subByte(i, 16, 16);
                    e.level2.text = PeakJihadController.getRatingsNameByScore(i, !1),
                    e.icon2.source = ClientConfig.getPeakjihadLevelPath(PeakJihadController.getResIndexByLevelScore(r, n) + 1),
                    e.enemyStarIcon.visible = r > 3 && e._isShowLv,
                    e.level2.visible = e.icon2.visible = e._isShowLv
                }),
                UserInfoManager.getInfo(e._rivalUserID,
                function(t) {
                    e.name2.text = t.nick,
                    e.id2.text = String(t.userID);
                    var i = new ClothPreview;
                    i.show(t.clothes),
                    e.enemyInfoGroup.addChild(i)
                }),
                OtherPetInfoManager.getPetInfo(e._rivalUserID,
                function(t) {
                    for (var i = t,
                    r = 0; r < e._maxNum; r++) {
                        var n = e._rivalItemArr[r];
                        r < i.length ? n.setOtherPetInfo(i[r]) : n.setOtherPetInfo(null)
                    }
                },
                1)
            });
            for (var i = PetManager.infos,
            r = 0,
            n = 0; n < i.length; n++) {
                var a = i[n];
                a.level < 100 && r++
            }
            for (var o = (i.length - r, 0); o < this._maxNum; o++) {
                var s = this._myItemArr[o];
                o < i.length ? s.setPetInfo(i[o]) : s.setPetInfo(null)
            }
            KTool.getMultiValue([3323],
            function(t) {
                var i = new Date;
                e._nowTime = i.getTime(),
                e._serverStartTime = t[0]
            })
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([3309],
            function(t) {
                if (t[0]) {
                    if (e._rivalisdisableMy = !0, e._rivalisdisableOther) for (var i = 0,
                    r = 0; 6 > r; r++) for (var n = e._myItemArr[r], a = 0, o = e._myPetdisabledCatchTimeArr; a < o.length; a++) {
                        var s = o[a];
                        n.catchTime == s && (3 > i && n.setStatusFrame(n.DISABLED), n.isCancel = !1, i++)
                    }
                } else e._rivalisdisableMy = !1;
                e.update2()
            })
        },
        i.prototype.update2 = function() {
            var e = this;
            KTool.getMultiValue([3307],
            function(t) {
                e._curStep = t[0],
                2 == e._curStep ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(1)) : 3 == e._curStep && 0 == e._rivalisdisableMy ? (e._isReconnect && (e._curStepRequireTime = e._requireArr[2]), e.showTitlePng(1)) : 3 == e._curStep && 1 == e._rivalisdisableMy ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(2)) : 4 == e._curStep ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(3)) : 5 == e._curStep && (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(4), e._sectionsurplusTime < 0 && (e.numbg.visible = !1, e.timeTx.visible = !1), e.touchEnabled = !1),
                e._curStep >= 3 && KTool.getPlayerInfo([1045],
                function(t) {
                    e._serverStartTime = t[0]
                }),
                e._curStep >= 3 ? KTool.getPlayerInfo([1045],
                function(t) {
                    e._serverStartTime = t[0],
                    e._isReconnect && e.onStatusTimer()
                }) : e._isReconnect && e.onStatusTimer()
            })
        },
        i.prototype.initItem = function() {
            this._myItemArr = [];
            for (var t, i = 0; i < 2 * this._maxNum; i++) t = new e.PeakJihadPetHeadItem(this._fightMod, 6 > i ? !1 : !0),
            t.x = 15 + i % 4 * 112,
            t.y = 6 + 136 * Math.floor(i / 4),
            this._myItemArr.push(t),
            this.myPetHeadGp.addChild(t),
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMyPetHeadClick, this);
            this._rivalItemArr = [];
            for (var r = 0; r < 2 * this._maxNum; r++) t = new e.PeakJihadPetHeadItem(this._fightMod, 6 > r ? !1 : !0),
            t.x = 15 + r % 4 * 112,
            t.y = 6 + 136 * Math.floor(r / 4),
            this._rivalItemArr.push(t),
            this.enemyPetHeadGp.addChild(t),
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRivalPetHeadClick, this)
        },
        i.prototype.onRivalPetHeadClick = function(e) {
            var t = this;
            null == this._disabledRivalPetArr && (this._disabledRivalPetArr = []);
            var i = e.currentTarget;
            if (i.otherPetInfo && 2 == this._curStep) {
                for (var r = 0,
                n = this._rivalItemArr; r < n.length; r++) {
                    var a = n[r];
                    a.setSelect(!1)
                }
                if (i.setSelect(!0), i.status == i.DISABLED) {
                    i.setStatusFrame(i.NO_SET);
                    for (var o = 0; o < this._disabledRivalPetArr.length; o++) this._disabledRivalPetArr[o] == i && this._disabledRivalPetArr.splice(o, 1)
                } else if (this._disabledRivalPetArr.length < 2) i.setStatusFrame(i.DISABLED),
                this._disabledRivalPetArr.push(i);
                else {
                    var s = this._disabledRivalPetArr[0];
                    s.setStatusFrame(i.NO_SET),
                    this._disabledRivalPetArr.splice(0, 1),
                    i.setStatusFrame(i.DISABLED),
                    this._disabledRivalPetArr.push(i)
                }
                2 == this._disabledRivalPetArr.length && (this.touchEnabled = !1, Alert.show("你已经选择二个禁用精灵了，确定禁用吗？",
                function() {
                    t.touchEnabled = !0,
                    2 == t._curStep && SocketConnection.sendByQueue(45144, [1, 1, t._rivalUserID, t._disabledRivalPetArr[0].catchTime, t._disabledRivalPetArr[1].catchTime, 0, 0, 0],
                    function(e) {
                        t._disabledRivalPetArr = null,
                        t._rivalisdisableOther = !0,
                        t.update()
                    })
                },
                function() {
                    t.touchEnabled = !0
                },
                this))
            }
        },
        i.prototype.onMyPetHeadClick = function(t) {
            var i = this,
            r = t.currentTarget;
            if (null != r.petInfo) {
                for (var n = 0,
                a = this._myItemArr; n < a.length; n++) {
                    var o = a[n];
                    o.setSelect(!1)
                }
                if (r.setSelect(!0), 3 == this._curStep && 1 == this._rivalisdisableMy) {
                    if (r.petInfo.level < 100) return void Alarm.show("未满100级的精灵无法出战！", null, this);
                    if (r.status == r.DISABLED) Alarm.show("此精灵已经被对手禁用了，无法设置为首发！", null, this);
                    else if (r.status == r.DEFAULT) r.setStatusFrame(r.NO_SET);
                    else {
                        for (var s = 0; 6 > s; s++) {
                            var h = this._myItemArr[s];
                            h.status == h.DEFAULT && h.setStatusFrame(h.NO_SET)
                        }
                        r.setStatusFrame(r.DEFAULT),
                        this.touchEnabled = !1,
                        Alert.show("确定选择该精灵作为你的首发精灵吗？",
                        function() {
                            i.touchEnabled = !0,
                            3 == i._curStep && 1 == i._rivalisdisableMy && SocketConnection.sendByQueue(45144, [2, 1, i._rivalUserID, r.catchTime, 0, 0, 0, 0],
                            function(e) {
                                i.update()
                            })
                        },
                        function() {
                            i.touchEnabled = !0
                        },
                        this)
                    }
                } else if (4 == this._curStep) {
                    if (null == this._myPetPlayArr && (this._myPetPlayArr = []), r.petInfo.level < 100) return void Alarm.show("未满100级的精灵无法出战！", null, this);
                    if (r.status == r.DISABLED) Alarm.show("此精灵已经被对手禁用了，无法设置为出战！", null, this);
                    else if (r.status == r.DEFAULT && "cancel" != t.target.name) Alarm.show("此精灵已经设置为首发默认为出战精灵了，无需设置为出战！", null, this);
                    else {
                        if (r.status == r.PLAY) {
                            r.setStatusFrame(r.NO_SET);
                            for (var l = 0; l < this._myPetPlayArr.length; l++) this._myPetPlayArr[l] == r && this._myPetPlayArr.splice(l, 1)
                        } else if (r.status != r.DEFAULT) if (this._myPetPlayArr.length < this._canPlayPetNum - 1) r.setStatusFrame(r.PLAY),
                        this._myPetPlayArr.push(r);
                        else {
                            var u = this._myPetPlayArr[0];
                            u.setStatusFrame(r.NO_SET),
                            this._myPetPlayArr.splice(0, 1),
                            r.setStatusFrame(r.PLAY),
                            this._myPetPlayArr.push(r)
                        }
                        this._myPetPlayArr.length == this._canPlayPetNum - 1 && (this.touchEnabled = !1, Alert.show("你已经选择" + (this._canPlayPetNum - 1) + "个出战精灵了 确定出战吗？",
                        function() {
                            if (i.touchEnabled = !0, 4 == i._curStep) {
                                for (var t = 0; 5 > t; t++) if (null == i._myPetPlayArr[t]) {
                                    var r = new e.PeakJihadPetHeadItem;
                                    r.catchTime = 0,
                                    i._myPetPlayArr[t] = r
                                }
                                SocketConnection.sendByQueue(45144, [3, 1, i._rivalUserID, i._myPetPlayArr[0].catchTime, i._myPetPlayArr[1].catchTime, 0, 0, 0],
                                function(e) {
                                    null != i._myPetPlayArr && (i._myPetPlayArr = null),
                                    i.update()
                                })
                            }
                        },
                        function() {
                            i.touchEnabled = !0
                        },
                        this))
                    }
                }
            }
        },
        i.prototype.onrivalUserDisabledMyPet = function(e) {
            this._myPetdisabledCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt());
            this._myPetdisabledCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            this._myPetdisabledCatchTimeArr.push(r);
            var n = t.readUnsignedInt();
            this._myPetdisabledCatchTimeArr.push(n),
            this._rivalisdisableMy = !0,
            this.update()
        },
        i.prototype.onTimeOutJingyong = function(e) {
            this._disabledRivalCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            this._disabledRivalCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            this._disabledRivalCatchTimeArr.push(r);
            var n = t.readUnsignedInt();
            if (this._disabledRivalCatchTimeArr.push(n), 2 == this._curStep) {
                this.clearLocalStatus(this._rivalItemArr);
                for (var a = this.getItemByCatchTime(this._rivalItemArr, this._disabledRivalCatchTimeArr), o = 0, s = a; o < s.length; o++) {
                    var h = s[o];
                    h.setStatusFrame(h.DISABLED)
                }
                Alarm.show("你由于超时没有禁用对方精灵，我们随机帮你选择了禁用！", null, this),
                this._rivalisdisableOther = !0,
                this.update()
            }
        },
        i.prototype.onTimeOutFirst = function(e) {
            this._defaultCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            if (this._defaultCatchTimeArr.push(i), 3 == this._curStep && 1 == this._rivalisdisableMy) {
                this.clearLocalStatus(this._myItemArr);
                var r = this.getItemByCatchTime(this._myItemArr, this._defaultCatchTimeArr),
                n = r[0];
                n.setStatusFrame(n.DEFAULT),
                Alarm.show("你由于超时没有选择自己的首发精灵，我们随机帮你选择了首发精灵！", null, this),
                this.update()
            }
        },
        i.prototype.onTimeOutPlay = function(e) {
            this._myPetPlayCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            this._myPetPlayCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            if (this._myPetPlayCatchTimeArr.push(r), 4 == this._curStep) {
                this.clearLocalStatus(this._myItemArr);
                var n = this.getItemByCatchTime(this._myItemArr, this._myPetPlayCatchTimeArr);
                Alarm.show("你由于超时没有选择自己的出战精灵，我们随机帮你选择了出战精灵！", null, this);
                for (var a = 0,
                o = n; a < o.length; a++) {
                    var s = o[a];
                    s.setStatusFrame(s.PLAY)
                }
                this.update(),
                this._myPetPlayCatchTimeArr = null
            }
        },
        i.prototype.onQuitRoom = function(e) {
            var i = this;
            PetFightModel.type = PetFightModel.PEAK_JIHAD_3V3;
            var r = e.data;
            r.position = 0;
            var n = (r.readUnsignedInt(), r.readUnsignedInt()),
            a = r.readUnsignedInt();
            ItemManager.updateItems([PeakJihadController.itemId1],
            function() {
                var e;
                e = ItemManager.getNumByID(PeakJihadController.itemId1),
                i._addItemNum = e - i._itemNum,
                i._itemNum = e,
                KTool.getMultiValue([PeakJihadController.levelForever],
                function(e) {
                    0 == a ? Alarm.show("一位米米号为" + n + "的玩家掉线了，恭喜你获得了胜利！！",
                    function() {
                        t.prototype.onClose.call(i)
                    },
                    i, "战斗胜利") : 1 == a && Alarm.show("一位米米号为" + n + "的玩家退出房间，恭喜你获得了胜利！！",
                    function() {
                        t.prototype.onClose.call(i)
                    },
                    i, "战斗胜利"),
                    i._score = e[0]
                })
            })
        },
        i.prototype.noteInviteToFight = function(e) {
            var i = this;
            KTool.getOnlineUsersForeverOrDailyVal([this._rivalUserID, 3307],
            function(r) {
                var n = null;
                null != e && (n = e.data),
                null != n && n.model == PetFightModel.PEAK_JIHAD_FIGHT_WITH_FIGURE ? (PetFightModel.type = PetFightModel.PEAK_JIHAD_3V3, PetFightModel.enemyId = Number(i._rivalUserID), PetFightModel.enemyName = i.name2.text, PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER, PetFightModel.mode = PetFightModel.MULTI_MODE, t.prototype.onClose.call(i)) : 5 == r || 5 == i._curStep || 6 == r || 6 == i._curStep ? (PetFightModel.type = PetFightModel.PEAK_JIHAD_3V3, PetFightModel.enemyId = Number(i._rivalUserID), PetFightModel.enemyName = i.name2.text, PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER, PetFightModel.mode = PetFightModel.MULTI_MODE, t.prototype.onClose.call(i)) : (Alarm.show("如果你在打巅峰6v6弹出此框是不对的！此时this._curStep为：" + i._curStep + "ready.model:" + n.model + ";对方3307为：" + r, null, i), t.prototype.onClose.call(i))
            })
        },
        i.prototype.onOverTimeQuit = function(e) {
            Alarm.show("由于超时操作，对方结束了此次对战!"),
            t.prototype.onClose.call(this)
        },
        i.prototype.clearLocalStatus = function(e) {
            for (var t = 0,
            i = e; t < i.length; t++) {
                var r = i[t];
                2 == this._curStep && r.status == r.DISABLED && r.setStatusFrame(r.NO_SET),
                3 == this._curStep && r.status == r.DEFAULT && r.setStatusFrame(r.NO_SET),
                4 == this._curStep && r.status == r.PLAY && r.setStatusFrame(r.NO_SET)
            }
            this._myPetPlayArr && (this._myPetPlayArr.length = 0),
            this._disabledRivalPetArr && (this._disabledRivalPetArr.length = 0)
        },
        i.prototype.getItemByCatchTime = function(e, t) {
            for (var i = [], r = 0; r < e.length; r++) for (var n = e[r], a = 0, o = t; a < o.length; a++) {
                var s = o[a];
                n.catchTime == s && i.push(n)
            }
            return i
        },
        i.prototype.getItemBypetId = function(e, t) {
            for (var i = [], r = 0; r < e.length; r++) for (var n = e[r], a = 0, o = t; a < o.length; a++) {
                var s = o[a];
                n.petId == s && i.push(n)
            }
            return i
        },
        i.prototype.clearPet = function() {
            if (this._myItemArr) {
                for (var e = 0; e < this._myItemArr.length; e++) this._myItemArr[e].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMyPetHeadClick, this),
                this._myItemArr[e].destroy(),
                this._myItemArr[e] = null;
                this._myItemArr = null
            }
            if (this._rivalItemArr) {
                for (var e = 0; e < this._rivalItemArr.length; e++) this._rivalItemArr[e].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRivalPetHeadClick, this),
                this._rivalItemArr[e].destroy(),
                this._rivalItemArr[e] = null;
                this._rivalItemArr = null
            }
        },
        i.prototype.synchroData = function(e) {
            var t = this;
            KTool.getPlayerInfo([11, 12, 13, 14, 15, 16, 17, 18, 19, 50, 51, 52],
            function(i) {
                t._myPetdisabledCatchTimeArr = [],
                t._disabledRivalCatchTimeArr = [],
                t._defaultCatchTimeArr = [],
                t._myPetPlayCatchTimeArr = [];
                for (var r = 0; 2 > r; r++) t._myPetdisabledCatchTimeArr.push(i[r]),
                t._disabledRivalCatchTimeArr.push(i[r + 9]);
                t._defaultCatchTimeArr.push(i[3]);
                for (var n = 0; 5 > n; n++) t._myPetPlayCatchTimeArr.push(i[4 + n]);
                t.clearLocalStatus(t._rivalItemArr);
                for (var a = t.getItemByCatchTime(t._rivalItemArr, t._disabledRivalCatchTimeArr), o = 0, s = a; o < s.length; o++) {
                    var h = s[o];
                    null != h && h.status != h.DISABLED && h.setStatusFrame(h.DISABLED)
                }
                t.clearLocalStatus(t._myItemArr);
                var l = t.getItemByCatchTime(t._myItemArr, t._defaultCatchTimeArr),
                u = l[0];
                null != u && u.status != u.DEFAULT && u.setStatusFrame(u.DEFAULT),
                t.clearLocalStatus(t._myItemArr);
                for (var c = t.getItemByCatchTime(t._myItemArr, t._myPetPlayCatchTimeArr), _ = 0, m = c; _ < m.length; _++) {
                    var d = m[_];
                    null != d && d.status != d.PLAY && d.setStatusFrame(d.PLAY)
                }
                null != e && e()
            })
        },
        i.prototype.destroy = function() {
            null != this._statusTimer && (this._statusTimer.stop(), this._statusTimer.removeEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this), this._statusTimer = null),
            this._curStep = 0,
            SocketConnection.removeAll(this),
            EventManager.removeEventListener(SocketEvent.SOCKETRECONNECT, this.breakLineSynchronizedData, this),
            this.clearPet(),
            this._disabledRivalPetArr = null,
            this._myPetPlayArr = null,
            this._disabledRivalCatchTimeArr = null,
            this._myPetdisabledCatchTimeArr = null,
            this._defaultCatchTimeArr = null,
            this._myPetPlayCatchTimeArr = null,
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PeakJihad3V3BanPickModePanel = t,
    __reflect(t.prototype, "peakJihad6V6BanPickModePanel.PeakJihad3V3BanPickModePanel")
} (peakJihad6V6BanPickModePanel || (peakJihad6V6BanPickModePanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
peakJihad6V6BanPickModePanel; !
function(e) {
    var t = function(t) {
        function i(e) {
            void 0 === e && (e = null);
            var i = t.call(this, e) || this;
            return i.TOTAL_TIME = 70,
            i.SELECT_DISABLEDTIME = 25,
            i.SELECT_DEFAULTTIME = 20,
            i.SELECT_PLAYTIME = 20,
            i._petList = [],
            i._requireArr = [0, 0, 30, 20, 20, 0],
            i._maxNum = 12,
            i._isShowLv = !0,
            i._curMode = e,
            i._isJJ = 3 == i._curMode ? !0 : !1,
            i._isShowLv = 2 == i._curMode || 3 == i._curMode ? !0 : !1,
            i.skinName = "Peakjihad6v6banpickmodeSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var e = this;
            PeakJihadController.isDraw = !1,
            this._curModeFoverId = this._isJJ ? PeakJihadController.levelForever: PeakJihadController.wildlevelForever,
            this.adaptBgByScale(this.bg),
            this._rivalisdisableOther = !1;
            var t = new Date;
            this._startTime = t.getTime(),
            this.timeTx.text = "30",
            this._statusTimer = new egret.Timer(1e3),
            this._statusTimer.addEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this),
            this._isReconnect = !0,
            this._statusTimer.start(),
            KTool.getMultiValue([3306],
            function(t) {
                e._fightMod = t[0],
                e.initItem(),
                e.initView(),
                e.breakLineSynchronizedData(),
                e.initEvent()
            })
        },
        i.prototype.initEvent = function() {
            var e = this;
            SocketConnection.addCmdListener(45143, this.onrivalUserDisabledMyPet, this),
            SocketConnection.addCmdListener(42284, this.onTimeOutJingyong, this),
            SocketConnection.addCmdListener(42282, this.onTimeOutFirst, this),
            SocketConnection.addCmdListener(42283, this.onTimeOutPlay, this),
            SocketConnection.addCmdListener(45140, this.onQuitRoom, this),
            SocketConnection.addCmdListener(CommandID.NOTE_INVITE_TO_FIGHT, this.noteInviteToFight, this),
            SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT, this.noteInviteToFight, this),
            SocketConnection.addCmdListener(45148, this.onOverTimeQuit, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT,
            function() {
                e._isReconnect = !0,
                e.breakLineSynchronizedData(),
                Alert.currAlert && Alert.clickCancel()
            },
            this)
        },
        i.prototype.breakLineSynchronizedData = function() {
            var e = this;
            KTool.getMultiValue([3307],
            function(i) {
                e._curStep = i[0],
                e.synchroData(function() {
                    e.update(),
                    6 == e._curStep && (t.prototype.onClose.call(e), Alarm.show("与服务器连接丢失，请重新进入游戏", core.gameUtil.ReloaderGame)),
                    0 == e._curStep && Alarm.show("战斗已结束！",
                    function() {
                        t.prototype.onClose.call(e)
                    })
                })
            })
        },
        i.prototype.onStatusTimer = function() {
            void 0 != this._curStepRequireTime && (this._isReconnect ? (this._isReconnect = !1, this._serverPassTime = Math.max(SystemTimerManager.sysBJDate.getTime() / 1e3 - this._serverStartTime, 1) - 1, this._curStepRequireTime -= this._serverPassTime, this._sectionsurplusTime = this._curStepRequireTime) : this._sectionsurplusTime = --this._curStepRequireTime, this.timeTx.text = String(Math.floor(this._sectionsurplusTime)), this._sectionsurplusTime < 0 && (this.timeTx.text = "0"))
        },
        i.prototype.clickHandle = function(e) {
            var i = this;
            t.prototype.clickHandle.call(this, e);
            var r = e.target;
            switch (r) {
            case "closeBtn":
                Alarm.show("你已经跟一位玩家匹配成功，为了尊重对手，你是不可以主动退出此次巅峰战的！", null, this);
                break;
            case "reportBtn":
                KTool.getMultiValue([3325],
                function(e) {
                    0 != e[0] && t.prototype.onClose.call(i)
                });
                break;
            case "exitBtn":
                KTool.getMultiValue([3325],
                function(e) {
                    0 != e[0] && SocketConnection.sendByQueue(45147, [3],
                    function(e) {
                        Alarm.show("退出成功，未获得任何评级积分及胜利点数", null, i),
                        t.prototype.onClose.call(i)
                    })
                })
            }
        },
        i.prototype.initView = function() {
            var e = this;
            this.showTitlePng(0);
            var t = new ClothPreview;
            t.show(MainManager.actorInfo.clothes),
            this.myInfoGroup.addChild(t),
            this.name1.text = String(MainManager.actorInfo.nick),
            this.id1.text = String(MainManager.actorInfo.userID),
            KTool.getMultiValue([this._curModeFoverId],
            function(t) {
                e._score = t[0];
                var i = t[0] & Math.pow(2, 16) - 1,
                r = KTool.subByte(t[0], 16, 16);
                e.level1.text = PeakJihadController.getMyRatingsNameByScore(e._score, 4 > i ? !0 : !1),
                e.myStarIcon.visible = i >= 4 && e._isShowLv,
                e.icon1.source = ClientConfig.getPeakjihadLevelPath(PeakJihadController.getResIndexByLevelScore(i, r) + 1),
                e.level1.visible = e.icon1.visible = e._isShowLv
            }),
            ItemManager.updateItems([PeakJihadController.itemId1],
            function() {
                e._itemNum = ItemManager.getNumByID(PeakJihadController.itemId1)
            }),
            KTool.getMultiValue([3308],
            function(t) {
                e._rivalUserID = t[0],
                KTool.getOnlineUsersForeverOrDailyVal([e._rivalUserID, e._curModeFoverId],
                function(t) {
                    var i = t,
                    r = i & Math.pow(2, 16) - 1,
                    n = KTool.subByte(i, 16, 16);
                    e.level2.text = PeakJihadController.getRatingsNameByScore(i, !1),
                    e.enemyStarIcon.visible = r >= 4 && e._isShowLv,
                    e.icon2.source = ClientConfig.getPeakjihadLevelPath(PeakJihadController.getResIndexByLevelScore(r, n) + 1),
                    e.level2.visible = e.icon2.visible = e._isShowLv
                }),
                UserInfoManager.getInfo(e._rivalUserID,
                function(t) {
                    e.name2.text = t.nick,
                    e.id2.text = String(t.userID);
                    var i = new ClothPreview;
                    i.show(t.clothes),
                    e.enemyInfoGroup.addChild(i)
                }),
                OtherPetInfoManager.getPetInfo(e._rivalUserID,
                function(t) {
                    for (var i = t,
                    r = 0; r < e._maxNum; r++) {
                        var n = e._rivalItemArr[r];
                        r < i.length ? n.setOtherPetInfo(i[r]) : n.setOtherPetInfo(null)
                    }
                },
                0)
            });
            for (var i = PetManager.allInfos,
            r = 0,
            n = 0; n < i.length; n++) {
                var a = i[n];
                a.level < 100 && r++
            }
            var o = i.length - r;
            o > 9 ? this._canPlayPetNum = 6 : this._canPlayPetNum = o - 3;
            for (var s = 0; s < this._maxNum; s++) {
                var h = this._myItemArr[s];
                s < i.length ? h.setPetInfo(i[s]) : h.setPetInfo(null)
            }
            KTool.getMultiValue([3323],
            function(t) {
                var i = new Date;
                e._nowTime = i.getTime(),
                e._serverStartTime = t[0]
            })
        },
        i.prototype.update = function() {
            var e = this;
            KTool.getMultiValue([3309],
            function(t) {
                var i = 0;
                if (t[0]) {
                    if (e._rivalisdisableMy = !0, e._rivalisdisableOther) for (var r = 0,
                    n = 0; n < PetManager.allInfos.length; n++) {
                        for (var a = e._myItemArr[n], o = 0, s = e._myPetdisabledCatchTimeArr; o < s.length; o++) {
                            var h = s[o];
                            a.catchTime == h && (3 > r && a.setStatusFrame(a.DISABLED), a.isCancel = !1, r++)
                        }
                        null != e._myPetdisabledCatchTimeArr && null != a && a.catchTime != e._myPetdisabledCatchTimeArr[0] && a.catchTime != e._myPetdisabledCatchTimeArr[1] && a.catchTime != e._myPetdisabledCatchTimeArr[2] && a.petInfo.level >= 100 && i++,
                        i > 6 ? e._canPlayPetNum = 6 : e._canPlayPetNum = i
                    }
                } else e._rivalisdisableMy = !1;
                e.update2()
            })
        },
        i.prototype.update2 = function() {
            var e = this;
            KTool.getMultiValue([3307],
            function(t) {
                e._curStep = t[0],
                2 == e._curStep ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(1)) : 3 == e._curStep && 0 == e._rivalisdisableMy ? (e._isReconnect && (e._curStepRequireTime = e._requireArr[2]), e.showTitlePng(1)) : 3 == e._curStep && 1 == e._rivalisdisableMy ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(2)) : 4 == e._curStep ? (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(3)) : 5 == e._curStep && (e._curStepRequireTime = e._requireArr[e._curStep], e.showTitlePng(4), e._sectionsurplusTime < 0 && (e.numbg.visible = !1, e.timeTx.visible = !1), e.touchEnabled = !1),
                e._curStep >= 3 ? KTool.getPlayerInfo([1045],
                function(t) {
                    e._serverStartTime = t[0],
                    e._isReconnect && e.onStatusTimer()
                }) : e._isReconnect && e.onStatusTimer()
            })
        },
        i.prototype.showTitlePng = function(e) {
            void 0 === e && (e = 0),
            this.titlePng.source = 0 == e ? "": "PeakJihad6V6BanPickMode_titlePng_" + (e - 1) + "_png"
        },
        i.prototype.initItem = function() {
            this._myItemArr = [];
            for (var t, i = 0; i < this._maxNum; i++) t = new e.PeakJihadPetHeadItem(this._fightMod, !1, this._isJJ),
            t.x = 15 + i % 4 * 112,
            t.y = 6 + 136 * Math.floor(i / 4),
            this._myItemArr.push(t),
            this.myPetHeadGp.addChild(t),
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMyPetHeadClick, this);
            this._rivalItemArr = [];
            for (var r = 0; r < this._maxNum; r++) t = new e.PeakJihadPetHeadItem(this._fightMod, !1, this._isJJ),
            t.x = 15 + r % 4 * 112,
            t.y = 6 + 136 * Math.floor(r / 4),
            this._rivalItemArr.push(t),
            this.enemyPetHeadGp.addChild(t),
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRivalPetHeadClick, this)
        },
        i.prototype.onRivalPetHeadClick = function(e) {
            var t = this;
            null == this._disabledRivalPetArr && (this._disabledRivalPetArr = []);
            var i = e.currentTarget;
            if (i.otherPetInfo && 2 == this._curStep) {
                for (var r = 0,
                n = this._rivalItemArr; r < n.length; r++) {
                    var a = n[r];
                    a.setSelect(!1)
                }
                if (i.setSelect(!0), i.status == i.DISABLED) {
                    i.setStatusFrame(i.NO_SET);
                    for (var o = 0; o < this._disabledRivalPetArr.length; o++) this._disabledRivalPetArr[o] == i && this._disabledRivalPetArr.splice(o, 1)
                } else if (this._disabledRivalPetArr.length < 3) i.setStatusFrame(i.DISABLED),
                this._disabledRivalPetArr.push(i);
                else {
                    var s = this._disabledRivalPetArr[0];
                    s.setStatusFrame(i.NO_SET),
                    this._disabledRivalPetArr.splice(0, 1),
                    i.setStatusFrame(i.DISABLED),
                    this._disabledRivalPetArr.push(i)
                }
                3 == this._disabledRivalPetArr.length && (this.touchEnabled = !1, Alert.show("你已经选择三个禁用精灵了，确定禁用吗？",
                function() {
                    t.touchEnabled = !0,
                    2 == t._curStep && SocketConnection.sendByQueue(45144, [1, 2, t._rivalUserID, t._disabledRivalPetArr[0].catchTime, t._disabledRivalPetArr[1].catchTime, t._disabledRivalPetArr[2].catchTime, 0, 0],
                    function(e) {
                        t._disabledRivalPetArr = null,
                        t._rivalisdisableOther = !0,
                        t.update()
                    })
                },
                function() {
                    t.touchEnabled = !0
                },
                this))
            }
        },
        i.prototype.onMyPetHeadClick = function(t) {
            var i = this,
            r = t.currentTarget;
            if (null != r.petInfo) {
                for (var n = 0,
                a = this._myItemArr; n < a.length; n++) {
                    var o = a[n];
                    o.setSelect(!1)
                }
                if (r.setSelect(!0), 3 == this._curStep && 1 == this._rivalisdisableMy) {
                    if (r.petInfo.level < 100) return void Alarm.show("未满100级的精灵无法出战！", null, this);
                    if (r.status == r.DISABLED) Alarm.show("此精灵已经被对手禁用了，无法设置为首发！", null, this);
                    else if (r.status == r.DEFAULT) r.setStatusFrame(r.NO_SET);
                    else {
                        for (var s = 0; s < PetManager.allInfos.length; s++) {
                            var h = this._myItemArr[s];
                            h.status == h.DEFAULT && h.setStatusFrame(h.NO_SET)
                        }
                        r.setStatusFrame(r.DEFAULT),
                        this.touchEnabled = !1,
                        Alert.show("确定选择该精灵作为你的首发精灵吗？",
                        function() {
                            i.touchEnabled = !0,
                            3 == i._curStep && 1 == i._rivalisdisableMy && SocketConnection.sendByQueue(45144, [2, 2, i._rivalUserID, r.catchTime, 0, 0, 0, 0],
                            function(e) {
                                i.update()
                            })
                        },
                        function() {
                            i.touchEnabled = !0
                        },
                        this)
                    }
                } else if (4 == this._curStep) {
                    if (null == this._myPetPlayArr && (this._myPetPlayArr = []), r.petInfo.level < 100) return void Alarm.show("未满100级的精灵无法出战！", null, this);
                    if (r.status == r.DISABLED) Alarm.show("此精灵已经被对手禁用了，无法设置为出战！", null, this);
                    else if (r.status == r.DEFAULT && "cancel" != t.target.name) Alarm.show("此精灵已经设置为首发默认为出战精灵了，无需设置为出战！", null, this);
                    else {
                        if (r.status == r.PLAY) {
                            r.setStatusFrame(r.NO_SET);
                            for (var l = 0; l < this._myPetPlayArr.length; l++) this._myPetPlayArr[l] == r && this._myPetPlayArr.splice(l, 1)
                        } else if (r.status != r.DEFAULT) if (this._myPetPlayArr.length < this._canPlayPetNum - 1) r.setStatusFrame(r.PLAY),
                        this._myPetPlayArr.push(r);
                        else {
                            var u = this._myPetPlayArr[0];
                            u.setStatusFrame(r.NO_SET),
                            this._myPetPlayArr.splice(0, 1),
                            r.setStatusFrame(r.PLAY),
                            this._myPetPlayArr.push(r)
                        }
                        this._myPetPlayArr.length == this._canPlayPetNum - 1 && (this.touchEnabled = !1, Alert.show("你已经选择" + (this._canPlayPetNum - 1) + "个出战精灵了 确定出战吗？",
                        function() {
                            if (i.touchEnabled = !0, 4 == i._curStep) {
                                for (var t = 0; 5 > t; t++) if (null == i._myPetPlayArr[t]) {
                                    var r = new e.PeakJihadPetHeadItem;
                                    r.catchTime = 0,
                                    i._myPetPlayArr[t] = r
                                }
                                SocketConnection.sendByQueue(45144, [3, 2, i._rivalUserID, i._myPetPlayArr[0].catchTime, i._myPetPlayArr[1].catchTime, i._myPetPlayArr[2].catchTime, i._myPetPlayArr[3].catchTime, i._myPetPlayArr[4].catchTime],
                                function(e) {
                                    null != i._myPetPlayArr && (i._myPetPlayArr = null),
                                    i.update()
                                })
                            }
                        },
                        function() {
                            i.touchEnabled = !0
                        },
                        this))
                    }
                }
            }
        },
        i.prototype.onrivalUserDisabledMyPet = function(e) {
            this._myPetdisabledCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt());
            this._myPetdisabledCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            this._myPetdisabledCatchTimeArr.push(r);
            var n = t.readUnsignedInt();
            this._myPetdisabledCatchTimeArr.push(n),
            this._rivalisdisableMy = !0,
            this.update()
        },
        i.prototype.onTimeOutJingyong = function(e) {
            this._disabledRivalCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            this._disabledRivalCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            this._disabledRivalCatchTimeArr.push(r);
            var n = t.readUnsignedInt();
            if (this._disabledRivalCatchTimeArr.push(n), 2 == this._curStep) {
                this.clearLocalStatus(this._rivalItemArr);
                for (var a = this.getItemByCatchTime(this._rivalItemArr, this._disabledRivalCatchTimeArr), o = 0, s = a; o < s.length; o++) {
                    var h = s[o];
                    h.setStatusFrame(h.DISABLED)
                }
                Alarm.show("你由于超时没有禁用对方精灵，我们随机帮你选择了禁用！", null, this),
                this._rivalisdisableOther = !0,
                this.update()
            }
        },
        i.prototype.onTimeOutFirst = function(e) {
            this._defaultCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            if (this._defaultCatchTimeArr.push(i), 3 == this._curStep && 1 == this._rivalisdisableMy) {
                this.clearLocalStatus(this._myItemArr);
                var r = this.getItemByCatchTime(this._myItemArr, this._defaultCatchTimeArr),
                n = r[0];
                n.setStatusFrame(n.DEFAULT),
                Alarm.show("你由于超时没有选择自己的首发精灵，我们随机帮你选择了首发精灵！", null, this),
                this.update()
            }
        },
        i.prototype.onTimeOutPlay = function(e) {
            this._myPetPlayCatchTimeArr = [];
            var t = e.data;
            t.position = 0;
            var i = (t.readUnsignedInt(), t.readUnsignedInt(), t.readUnsignedInt());
            this._myPetPlayCatchTimeArr.push(i);
            var r = t.readUnsignedInt();
            if (this._myPetPlayCatchTimeArr.push(r), 4 == this._curStep) {
                this.clearLocalStatus(this._myItemArr);
                var n = this.getItemByCatchTime(this._myItemArr, this._myPetPlayCatchTimeArr);
                Alarm.show("你由于超时没有选择自己的出战精灵，我们随机帮你选择了出战精灵！", null, this);
                for (var a = 0,
                o = n; a < o.length; a++) {
                    var s = o[a];
                    s.setStatusFrame(s.PLAY)
                }
                this.update(),
                this._myPetPlayCatchTimeArr = null
            }
        },
        i.prototype.onQuitRoom = function(e) {
            var i = this;
            this.setPetFightModel();
            var r = e.data;
            r.position = 0;
            var n = (r.readUnsignedInt(), r.readUnsignedInt()),
            a = r.readUnsignedInt();
            ItemManager.updateItems([PeakJihadController.itemId1],
            function() {
                var e;
                e = ItemManager.getNumByID(PeakJihadController.itemId1),
                i._addItemNum = e - i._itemNum,
                i._itemNum = e,
                KTool.getMultiValue([PeakJihadController.levelForever],
                function(e) {
                    0 == a ? Alarm.show("一位米米号为" + n + "的玩家掉线了，恭喜你获得了胜利！！",
                    function() {
                        t.prototype.onClose.call(i)
                    },
                    i, "战斗胜利") : 1 == a && Alarm.show("一位米米号为" + n + "的玩家退出房间，恭喜你获得了胜利！！",
                    function() {
                        t.prototype.onClose.call(i)
                    },
                    i, "战斗胜利"),
                    i._score = e[0]
                })
            })
        },
        i.prototype.noteInviteToFight = function(e) {
            var i = this;
            KTool.getOnlineUsersForeverOrDailyVal([this._rivalUserID, 3307],
            function(r) {
                var n = null;
                null != e && (n = e.data),
                null != n && n.model == PetFightModel.PEAK_JIHAD_FIGHT_WITH_FIGURE ? (i.setPetFightModel(), PetFightModel.enemyId = Number(i._rivalUserID), PetFightModel.enemyName = i.name2.text, PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER, PetFightModel.mode = PetFightModel.MULTI_MODE, t.prototype.onClose.call(i)) : 5 == r || 5 == i._curStep || 6 == r || 6 == i._curStep ? (i.setPetFightModel(), PetFightModel.enemyName = i.name2.text, PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER, PetFightModel.mode = PetFightModel.MULTI_MODE, t.prototype.onClose.call(i)) : (Alarm.show("如果你在打巅峰6v6弹出此框是不对的！此时this._curStep为：" + i._curStep + "ready.model:" + n.model + ";对方3307为：" + r, null, i), t.prototype.onClose.call(i))
            })
        },
        i.prototype.onOverTimeQuit = function(e) {
            Alarm.show("由于超时操作，对方结束了此次对战!"),
            t.prototype.onClose.call(this)
        },
        i.prototype.setPetFightModel = function() {
            switch (this._curMode) {
            case 2:
                PetFightModel.type = PetFightModel.PEAK_JIHAD_6V6_WILD;
                break;
            case 3:
                PetFightModel.type = PetFightModel.PEAK_JIHAD_6V6_JJ;
                break;
            case 4:
                PetFightModel.type = PetFightModel.PEAK_JIHAD_6V6
            }
        },
        i.prototype.clearLocalStatus = function(e) {
            for (var t = 0,
            i = e; t < i.length; t++) {
                var r = i[t];
                2 == this._curStep && r.status == r.DISABLED && r.setStatusFrame(r.NO_SET),
                3 == this._curStep && r.status == r.DEFAULT && r.setStatusFrame(r.NO_SET),
                4 == this._curStep && r.status == r.PLAY && r.setStatusFrame(r.NO_SET)
            }
            this._myPetPlayArr && (this._myPetPlayArr.length = 0),
            this._disabledRivalPetArr && (this._disabledRivalPetArr.length = 0)
        },
        i.prototype.getItemByCatchTime = function(e, t) {
            for (var i = [], r = 0; r < e.length; r++) for (var n = e[r], a = 0, o = t; a < o.length; a++) {
                var s = o[a];
                n.catchTime == s && i.push(n)
            }
            return i
        },
        i.prototype.getItemBypetId = function(e, t) {
            for (var i = [], r = 0; r < e.length; r++) for (var n = e[r], a = 0, o = t; a < o.length; a++) {
                var s = o[a];
                n.petId == s && i.push(n)
            }
            return i
        },
        i.prototype.clearPet = function() {
            if (this._myItemArr) {
                for (var e = 0; e < this._myItemArr.length; e++) this._myItemArr[e].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMyPetHeadClick, this),
                this._myItemArr[e].destroy(),
                this._myItemArr[e] = null;
                this._myItemArr = null
            }
            if (this._rivalItemArr) {
                for (var e = 0; e < this._rivalItemArr.length; e++) this._rivalItemArr[e].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRivalPetHeadClick, this),
                this._rivalItemArr[e].destroy(),
                this._rivalItemArr[e] = null;
                this._rivalItemArr = null
            }
        },
        i.prototype.synchroData = function(e) {
            var t = this;
            KTool.getPlayerInfo([11, 12, 13, 14, 15, 16, 17, 18, 19, 50, 51, 52],
            function(i) {
                t._myPetdisabledCatchTimeArr = [],
                t._disabledRivalCatchTimeArr = [],
                t._defaultCatchTimeArr = [],
                t._myPetPlayCatchTimeArr = [];
                for (var r = 0; 3 > r; r++) t._myPetdisabledCatchTimeArr.push(i[r]),
                t._disabledRivalCatchTimeArr.push(i[r + 9]);
                t._defaultCatchTimeArr.push(i[3]);
                for (var n = 0; 5 > n; n++) t._myPetPlayCatchTimeArr.push(i[4 + n]);
                t.clearLocalStatus(t._rivalItemArr);
                for (var a = t.getItemByCatchTime(t._rivalItemArr, t._disabledRivalCatchTimeArr), o = 0, s = a; o < s.length; o++) {
                    var h = s[o];
                    null != h && h.status != h.DISABLED && h.setStatusFrame(h.DISABLED)
                }
                t.clearLocalStatus(t._myItemArr);
                var l = t.getItemByCatchTime(t._myItemArr, t._defaultCatchTimeArr),
                u = l[0];
                null != u && u.status != u.DEFAULT && u.setStatusFrame(u.DEFAULT),
                t.clearLocalStatus(t._myItemArr);
                for (var c = t.getItemByCatchTime(t._myItemArr, t._myPetPlayCatchTimeArr), _ = 0, m = c; _ < m.length; _++) {
                    var d = m[_];
                    null != d && d.status != d.PLAY && d.setStatusFrame(d.PLAY)
                }
                null != e && e()
            })
        },
        i.prototype.destroy = function() {
            null != this._statusTimer && (this._statusTimer.stop(), this._statusTimer.removeEventListener(egret.TimerEvent.TIMER, this.onStatusTimer, this), this._statusTimer = null),
            this._curStep = 0,
            SocketConnection.removeAll(this),
            EventManager.removeAll(this),
            this.clearPet(),
            this._disabledRivalPetArr = null,
            this._myPetPlayArr = null,
            this._disabledRivalCatchTimeArr = null,
            this._myPetdisabledCatchTimeArr = null,
            this._defaultCatchTimeArr = null,
            this._myPetPlayCatchTimeArr = null,
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.PeakJihad6V6BanPickModePanel = t,
    __reflect(t.prototype, "peakJihad6V6BanPickModePanel.PeakJihad6V6BanPickModePanel")
} (peakJihad6V6BanPickModePanel || (peakJihad6V6BanPickModePanel = {}));
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
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
},
__awaiter = this && this.__awaiter ||
function(e, t, i, r) {
    return new(i || (i = Promise))(function(n, a) {
        function o(e) {
            try {
                h(r.next(e))
            } catch(t) {
                a(t)
            }
        }
        function s(e) {
            try {
                h(r["throw"](e))
            } catch(t) {
                a(t)
            }
        }
        function h(e) {
            e.done ? n(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        h((r = r.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function i(e) {
        return function(t) {
            return r([e, t])
        }
    }
    function r(i) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (n = 1, a && (o = a[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(a, i[1])).done) return o;
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
        } catch(r) {
            i = [6, r],
            a = 0
        } finally {
            n = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var n, a, o, s, h = {
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
peakJihad6V6BanPickModePanel; !
function(e) {
    var t = function(e) {
        function t(t, i, r) {
            void 0 === t && (t = 0),
            void 0 === i && (i = !1),
            void 0 === r && (r = !1);
            var n = e.call(this) || this;
            return n.status = 1,
            n.NO_SET = 1,
            n.DISABLED = 2,
            n.DEFAULT = 3,
            n.PLAY = 4,
            n._isCancel = !0,
            n._fightMod = t,
            n._islock = i,
            n._isjj = r,
            n.skinName = PeakJihadPetHeadItemSkin,
            n
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.goToWarIcon.visible = !1,
            this.firstEpisodeIcon.visible = !1,
            this.prohibitIcon.visible = !1,
            this.selectPng.visible = !1,
            this.prohibit_png.visible = !1,
            1 == this._fightMod ? (this.lockBg.visible = this._islock, this.showGroup.visible = !this._islock) : this.lockBg.visible = !1,
            this.showinfo()
        },
        t.prototype.showinfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return this.bg.source = "PeakJihad6V6BanPickMode_headBg_png",
                        this._pinfo ? (this.showGroup.visible = !0, this.head.source = ClientConfig.getPetHeadPath(this._pinfo.id, this._pinfo.catchTime), e = PetXMLInfo.getName(this._pinfo.id), this.txtName.text = e.length > 6 ? e.substring(0, 5) + "...": e, t = PetManager.getPetInfo(this._pinfo.catchTime), this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this._pinfo.id)), this.checkMost(this._pinfo.id), [4, KTool.checkHasAdvanced(t)]) : [3, 2];
                    case 1:
                        return i = r.sent(),
                        this.bg.source = i ? "PeakJihad6V6BanPickMode_headBg1_png": "PeakJihad6V6BanPickMode_headBg_png",
                        this.touchEnabled = !0,
                        [3, 3];
                    case 2:
                        this.head.source = null,
                        this.showGroup.visible = !1,
                        this.txtName.text = "",
                        this.touchEnabled = !1,
                        r.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        t.prototype.setPetInfo = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, r;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.bg.source = "PeakJihad6V6BanPickMode_headBg_png",
                        this.petInfo = e,
                        e ? (this.showGroup.visible = !0, this.catchTime = e.catchTime, this.petId = e.id, this.head.source = ClientConfig.getPetHeadPath(e.id, e.catchTime), t = PetXMLInfo.getName(e.id), this.txtName.text = t.length > 6 ? t.substring(0, 5) + "...": t, this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(this.petId)), this.checkMost(this.petId), i = PetManager.getPetInfo(e.catchTime), [4, KTool.checkHasAdvanced(i)]) : [3, 2];
                    case 1:
                        return r = n.sent(),
                        this.bg.source = r ? "PeakJihad6V6BanPickMode_headBg1_png": "PeakJihad6V6BanPickMode_headBg_png",
                        this.touchEnabled = !0,
                        [3, 3];
                    case 2:
                        this.head.source = null,
                        this.showGroup.visible = !1,
                        this.txtName.text = "",
                        this.touchEnabled = !1,
                        n.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        t.prototype.setOtherPetInfo = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, r;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return this.bg.source = "PeakJihad6V6BanPickMode_headBg_png",
                        this.otherPetInfo = e,
                        e ? (this.showGroup.visible = !0, this.catchTime = e.catchTime, this.petId = e.id, this.head.source = ClientConfig.getPetHeadPath(e.id, e.catchTime), t = PetXMLInfo.getName(e.id), this.txtName.text = t.length > 6 ? t.substring(0, 5) + "...": t, this.imgAttr.source = ClientConfig.getpettypeticon(PetXMLInfo.getType(e.id)), this.checkMost(e.id), i = PetManager.getPetInfo(e.catchTime), [4, KTool.checkHasAdvanced(i)]) : [3, 2];
                    case 1:
                        return r = n.sent(),
                        this.bg.source = r ? "PeakJihad6V6BanPickMode_headBg1_png": "PeakJihad6V6BanPickMode_headBg_png",
                        this.touchEnabled = !0,
                        [3, 3];
                    case 2:
                        this.head.source = null,
                        this.showGroup.visible = !1,
                        this.txtName.text = "",
                        this.touchEnabled = !1,
                        n.label = 3;
                    case 3:
                        return [2]
                    }
                })
            })
        },
        t.prototype.checkMost = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, r, n;
                return __generator(this,
                function(a) {
                    for (t = config.Pvp_ban.getItems(), i = 0, this.mostGroup.visible = !1, r = 0; r < t.length; r++) if (i = t[r].quantity, n = t[r].name.split(";").map(Number), n.indexOf(e) > -1 && this._isjj && PeakJihadController.curLevel > 1) {
                        this.mostGroup.visible = !0,
                        this.most.text = "" + i;
                        break
                    }
                    return [2]
                })
            })
        },
        t.prototype.setStatusFrame = function(e) {
            this.status != e ? this.status = e: 1 == this.isCancel && (this.status = 1),
            this.goToWarIcon.visible = !1,
            this.firstEpisodeIcon.visible = !1,
            this.prohibitIcon.visible = !1,
            this.prohibit_png.visible = !1,
            1 == this.status || (2 == this.status ? (this.prohibitIcon.visible = !0, this.prohibit_png.visible = !0) : 3 == this.status ? this.firstEpisodeIcon.visible = !0 : 4 == this.status && (this.goToWarIcon.visible = !0))
        },
        t.prototype.setSelect = function(e) {
            this.selectPng.visible = e
        },
        Object.defineProperty(t.prototype, "isCancel", {
            get: function() {
                return this._isCancel
            },
            set: function(e) {
                this._isCancel = e
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.destroy = function() {
            this.petInfo = null,
            this.otherPetInfo = null,
            this.parent && this.parent.removeChild(this),
            this._pinfo = null,
            this.head.source = null
        },
        t
    } (eui.Component);
    e.PeakJihadPetHeadItem = t,
    __reflect(t.prototype, "peakJihad6V6BanPickModePanel.PeakJihadPetHeadItem")
} (peakJihad6V6BanPickModePanel || (peakJihad6V6BanPickModePanel = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function i() {
        this.constructor = e
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype,
    e.prototype = new i
};
window.generateEUI = window.generateEUI || {},
generateEUI.paths = generateEUI.paths || {},
generateEUI.styles = void 0,
generateEUI.skins = {},
generateEUI.paths["resource/eui_skins/Peakjihad3v3banpickmodeSkin.exml"] = window.Peakjihad3v3banpickmodeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img", "titlePng", "numbg", "timeTx", "myInfoGroup", "enemyInfoGroup", "infobg1", "ima2", "ima1", "name1", "level1", "myStarIcon", "icon1", "id1", "me1", "me", "infobg2", "ima2_2", "ima1_2", "name2", "level2", "enemyStarIcon", "icon2", "id2", "other2", "other", "myPetHeadGp", "enemyPetHeadGp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.myInfoGroup_i(), this.enemyInfoGroup_i(), this.me_i(), this.other_i(), this._Scroller1_i(), this._Scroller2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 11,
        e.elementsContent = [this.img_i(), this.titlePng_i(), this.numbg_i(), this.timeTx_i()],
        e
    },
    i.img_i = function() {
        var e = new eui.Image;
        return this.img = e,
        e.source = "peakjihad6v6banpickmode_img_png",
        e.x = 17,
        e.y = 0,
        e
    },
    i.titlePng_i = function() {
        var e = new eui.Image;
        return this.titlePng = e,
        e.horizontalCenter = -4,
        e.source = "PeakJihad6V6BanPickMode_titlePng_0_png",
        e.verticalCenter = -166.5,
        e
    },
    i.numbg_i = function() {
        var e = new eui.Image;
        return this.numbg = e,
        e.source = "peakjihad6v6banpickmode_numbg_png",
        e.x = 0,
        e.y = 274,
        e
    },
    i.timeTx_i = function() {
        var e = new eui.Label;
        return this.timeTx = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -2,
        e.size = 48,
        e.text = "22",
        e.textColor = 16777215,
        e.y = 330,
        e
    },
    i.myInfoGroup_i = function() {
        var e = new eui.Group;
        return this.myInfoGroup = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.horizontalCenter = -435,
        e.scaleX = .6,
        e.scaleY = .6,
        e.y = 180,
        e
    },
    i.enemyInfoGroup_i = function() {
        var e = new eui.Group;
        return this.enemyInfoGroup = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.horizontalCenter = 511,
        e.scaleX = .6,
        e.scaleY = .6,
        e.y = 180,
        e
    },
    i.me_i = function() {
        var e = new eui.Group;
        return this.me = e,
        e.horizontalCenter = -234.5,
        e.y = 59,
        e.elementsContent = [this.infobg1_i(), this.ima2_i(), this.ima1_i(), this.name1_i(), this.level1_i(), this.myStarIcon_i(), this.icon1_i(), this.id1_i(), this.me1_i()],
        e
    },
    i.infobg1_i = function() {
        var e = new eui.Image;
        return this.infobg1 = e,
        e.source = "peakjihad6v6banpickmode_infobg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.ima2_i = function() {
        var e = new eui.Image;
        return this.ima2 = e,
        e.source = "peakjihad6v6banpickmode_ima2_png",
        e.x = 50,
        e.y = 64,
        e
    },
    i.ima1_i = function() {
        var e = new eui.Image;
        return this.ima1 = e,
        e.source = "peakjihad6v6banpickmode_ima1_png",
        e.x = 49,
        e.y = 13,
        e
    },
    i.name1_i = function() {
        var e = new eui.Label;
        return this.name1 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16777215,
        e.x = 53,
        e.y = 39,
        e
    },
    i.level1_i = function() {
        var e = new eui.Label;
        return this.level1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 35,
        e.size = 20,
        e.text = "宇宙圣皇4",
        e.textColor = 4967167,
        e.y = 88,
        e
    },
    i.myStarIcon_i = function() {
        var e = new eui.Image;
        return this.myStarIcon = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "PeakJihad6V6BanPickMode_myStarIcon_png",
        e.x = 260.306,
        e.y = 82,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.bottom = 35,
        e.height = 75,
        e.horizontalCenter = 78.5,
        e.width = 75,
        e
    },
    i.id1_i = function() {
        var e = new eui.Label;
        return this.id1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "959595959",
        e.textColor = 16514895,
        e.x = 53,
        e.y = 87,
        e
    },
    i.me1_i = function() {
        var e = new eui.Image;
        return this.me1 = e,
        e.source = "PeakJihad6V6BanPickMode_myInfoPng_png",
        e.x = 9,
        e.y = 31,
        e
    },
    i.other_i = function() {
        var e = new eui.Group;
        return this.other = e,
        e.horizontalCenter = 233.5,
        e.y = 59,
        e.elementsContent = [this.infobg2_i(), this.ima2_2_i(), this.ima1_2_i(), this.name2_i(), this.level2_i(), this.enemyStarIcon_i(), this.icon2_i(), this.id2_i(), this.other2_i()],
        e
    },
    i.infobg2_i = function() {
        var e = new eui.Image;
        return this.infobg2 = e,
        e.source = "peakjihad6v6banpickmode_infobg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.ima2_2_i = function() {
        var e = new eui.Image;
        return this.ima2_2 = e,
        e.source = "peakjihad6v6banpickmode_ima2_png",
        e.x = 221,
        e.y = 64,
        e
    },
    i.ima1_2_i = function() {
        var e = new eui.Image;
        return this.ima1_2 = e,
        e.source = "peakjihad6v6banpickmode_ima1_png",
        e.x = 223,
        e.y = 14,
        e
    },
    i.name2_i = function() {
        var e = new eui.Label;
        return this.name2 = e,
        e.fontFamily = "REEJI",
        e.right = 49,
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16777215,
        e.y = 39,
        e
    },
    i.level2_i = function() {
        var e = new eui.Label;
        return this.level2 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -80.5,
        e.size = 20,
        e.text = "宇宙圣皇4",
        e.textColor = 4967167,
        e.y = 88,
        e
    },
    i.enemyStarIcon_i = function() {
        var e = new eui.Image;
        return this.enemyStarIcon = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "PeakJihad6V6BanPickMode_enemyStarIcon_png",
        e.x = 113.933,
        e.y = 82,
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.bottom = 35,
        e.height = 75,
        e.horizontalCenter = -77.5,
        e.width = 75,
        e
    },
    i.id2_i = function() {
        var e = new eui.Label;
        return this.id2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 54,
        e.size = 18,
        e.text = "959595959",
        e.textColor = 16514895,
        e.y = 87,
        e
    },
    i.other2_i = function() {
        var e = new eui.Image;
        return this.other2 = e,
        e.source = "PeakJihad6V6BanPickMode_enemyInfoPng_png",
        e.x = 261,
        e.y = 31,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 426,
        e.horizontalCenter = -306,
        e.width = 466,
        e.y = 186,
        e.viewport = this.myPetHeadGp_i(),
        e
    },
    i.myPetHeadGp_i = function() {
        var e = new eui.Group;
        return this.myPetHeadGp = e,
        e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 426,
        e.horizontalCenter = 293,
        e.width = 466,
        e.y = 185,
        e.viewport = this.enemyPetHeadGp_i(),
        e
    },
    i.enemyPetHeadGp_i = function() {
        var e = new eui.Group;
        return this.enemyPetHeadGp = e,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/Peakjihad6v6banpickmodeSkin.exml"] = window.Peakjihad6v6banpickmodeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "img", "titlePng", "numbg", "timeTx", "myInfoGroup", "enemyInfoGroup", "infobg1", "ima2", "ima1", "name1", "level1", "myStarIcon", "icon1", "id1", "me1", "me", "infobg2", "ima2_2", "ima1_2", "name2", "level2", "enemyStarIcon", "icon2", "id2", "other2", "other", "myPetHeadGp", "enemyPetHeadGp"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this._Group1_i(), this.myInfoGroup_i(), this.enemyInfoGroup_i(), this.me_i(), this.other_i(), this._Scroller1_i(), this._Scroller2_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.horizontalCenter = 0,
        e.source = "peakjihad_common_panel_bg_jpg",
        e.verticalCenter = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.horizontalCenter = 0,
        e.visible = !0,
        e.y = 11,
        e.elementsContent = [this.img_i(), this.titlePng_i(), this.numbg_i(), this.timeTx_i()],
        e
    },
    i.img_i = function() {
        var e = new eui.Image;
        return this.img = e,
        e.source = "peakjihad6v6banpickmode_img_png",
        e.x = 17,
        e.y = 0,
        e
    },
    i.titlePng_i = function() {
        var e = new eui.Image;
        return this.titlePng = e,
        e.horizontalCenter = -4,
        e.source = "PeakJihad6V6BanPickMode_titlePng_0_png",
        e.verticalCenter = -166.5,
        e
    },
    i.numbg_i = function() {
        var e = new eui.Image;
        return this.numbg = e,
        e.source = "peakjihad6v6banpickmode_numbg_png",
        e.x = 0,
        e.y = 274,
        e
    },
    i.timeTx_i = function() {
        var e = new eui.Label;
        return this.timeTx = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = -2,
        e.size = 48,
        e.text = "22",
        e.textColor = 16777215,
        e.y = 330,
        e
    },
    i.myInfoGroup_i = function() {
        var e = new eui.Group;
        return this.myInfoGroup = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.horizontalCenter = -435,
        e.scaleX = .6,
        e.scaleY = .6,
        e.y = 180,
        e
    },
    i.enemyInfoGroup_i = function() {
        var e = new eui.Group;
        return this.enemyInfoGroup = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.horizontalCenter = 511,
        e.scaleX = .6,
        e.scaleY = .6,
        e.y = 180,
        e
    },
    i.me_i = function() {
        var e = new eui.Group;
        return this.me = e,
        e.horizontalCenter = -234.5,
        e.y = 59,
        e.elementsContent = [this.infobg1_i(), this.ima2_i(), this.ima1_i(), this.name1_i(), this.level1_i(), this.myStarIcon_i(), this.icon1_i(), this.id1_i(), this.me1_i()],
        e
    },
    i.infobg1_i = function() {
        var e = new eui.Image;
        return this.infobg1 = e,
        e.source = "peakjihad6v6banpickmode_infobg1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.ima2_i = function() {
        var e = new eui.Image;
        return this.ima2 = e,
        e.source = "peakjihad6v6banpickmode_ima2_png",
        e.x = 50,
        e.y = 64,
        e
    },
    i.ima1_i = function() {
        var e = new eui.Image;
        return this.ima1 = e,
        e.source = "peakjihad6v6banpickmode_ima1_png",
        e.x = 49,
        e.y = 13,
        e
    },
    i.name1_i = function() {
        var e = new eui.Label;
        return this.name1 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16777215,
        e.x = 53,
        e.y = 39,
        e
    },
    i.level1_i = function() {
        var e = new eui.Label;
        return this.level1 = e,
        e.fontFamily = "MFShangHei",
        e.right = 35,
        e.size = 20,
        e.text = "宇宙圣皇9999",
        e.textColor = 4967167,
        e.y = 88,
        e
    },
    i.myStarIcon_i = function() {
        var e = new eui.Image;
        return this.myStarIcon = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "PeakJihad6V6BanPickMode_myStarIcon_png",
        e.x = 260.306,
        e.y = 82,
        e
    },
    i.icon1_i = function() {
        var e = new eui.Image;
        return this.icon1 = e,
        e.bottom = 35,
        e.height = 75,
        e.horizontalCenter = 78.5,
        e.width = 75,
        e
    },
    i.id1_i = function() {
        var e = new eui.Label;
        return this.id1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "959595959",
        e.textColor = 16514895,
        e.x = 53,
        e.y = 87,
        e
    },
    i.me1_i = function() {
        var e = new eui.Image;
        return this.me1 = e,
        e.source = "PeakJihad6V6BanPickMode_myInfoPng_png",
        e.x = 9,
        e.y = 31,
        e
    },
    i.other_i = function() {
        var e = new eui.Group;
        return this.other = e,
        e.horizontalCenter = 233.5,
        e.y = 59,
        e.elementsContent = [this.infobg2_i(), this.ima2_2_i(), this.ima1_2_i(), this.name2_i(), this._Group2_i(), this.icon2_i(), this.id2_i(), this.other2_i()],
        e
    },
    i.infobg2_i = function() {
        var e = new eui.Image;
        return this.infobg2 = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "peakjihad6v6banpickmode_infobg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.ima2_2_i = function() {
        var e = new eui.Image;
        return this.ima2_2 = e,
        e.source = "peakjihad6v6banpickmode_ima2_png",
        e.x = 221,
        e.y = 64,
        e
    },
    i.ima1_2_i = function() {
        var e = new eui.Image;
        return this.ima1_2 = e,
        e.source = "peakjihad6v6banpickmode_ima1_png",
        e.x = 223,
        e.y = 14,
        e
    },
    i.name2_i = function() {
        var e = new eui.Label;
        return this.name2 = e,
        e.fontFamily = "REEJI",
        e.right = 49,
        e.size = 20,
        e.text = "用户名用户名",
        e.textColor = 16777215,
        e.y = 39,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0,
        e.horizontalCenter = -64.5,
        e.y = 80,
        e.layout = this._HorizontalLayout1_i(),
        e.elementsContent = [this.level2_i(), this.enemyStarIcon_i()],
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 0,
        e.horizontalAlign = "center",
        e.verticalAlign = "middle",
        e
    },
    i.level2_i = function() {
        var e = new eui.Label;
        return this.level2 = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 20,
        e.text = "宇宙圣皇9999",
        e.textColor = 4967167,
        e.x = 0,
        e.y = 27,
        e
    },
    i.enemyStarIcon_i = function() {
        var e = new eui.Image;
        return this.enemyStarIcon = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "PeakJihad6V6BanPickMode_enemyStarIcon_png",
        e.x = 106,
        e.y = 21,
        e
    },
    i.icon2_i = function() {
        var e = new eui.Image;
        return this.icon2 = e,
        e.bottom = 35,
        e.height = 75,
        e.horizontalCenter = -77,
        e.width = 75,
        e
    },
    i.id2_i = function() {
        var e = new eui.Label;
        return this.id2 = e,
        e.fontFamily = "MFShangHei",
        e.right = 54,
        e.size = 18,
        e.text = "959595959",
        e.textColor = 16514895,
        e.y = 87,
        e
    },
    i.other2_i = function() {
        var e = new eui.Image;
        return this.other2 = e,
        e.source = "PeakJihad6V6BanPickMode_enemyInfoPng_png",
        e.x = 261,
        e.y = 31,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 426,
        e.horizontalCenter = -306,
        e.width = 466,
        e.y = 186,
        e.viewport = this.myPetHeadGp_i(),
        e
    },
    i.myPetHeadGp_i = function() {
        var e = new eui.Group;
        return this.myPetHeadGp = e,
        e
    },
    i._Scroller2_i = function() {
        var e = new eui.Scroller;
        return e.height = 426,
        e.horizontalCenter = 293,
        e.width = 466,
        e.y = 185,
        e.viewport = this.enemyPetHeadGp_i(),
        e
    },
    i.enemyPetHeadGp_i = function() {
        var e = new eui.Group;
        return this.enemyPetHeadGp = e,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PeakJihadPetHeadItemSkin.exml"] = window.PeakJihadPetHeadItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "lockBg", "txtName", "head", "imgAttr", "most", "mostGroup", "prohibitIcon", "goToWarIcon", "firstEpisodeIcon", "showGroup", "selectPng", "prohibit_png"],
        this.height = 136,
        this.width = 112,
        this.elementsContent = [this._Group1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return e.visible = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.bg_i(), this.lockBg_i(), this.showGroup_i(), this.selectPng_i(), this.prohibit_png_i()],
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "PeakJihad6V6BanPickMode_headBg_png",
        e.visible = !0,
        e.x = 1,
        e.y = 0,
        e
    },
    i.lockBg_i = function() {
        var e = new eui.Image;
        return this.lockBg = e,
        e.height = 129.052,
        e.source = "PeakJihad6V6BanPickMode_lockBg_png",
        e.visible = !0,
        e.width = 103.6,
        e.x = 4.312,
        e.y = 3.319,
        e
    },
    i.showGroup_i = function() {
        var e = new eui.Group;
        return this.showGroup = e,
        e.visible = !0,
        e.x = 0,
        e.y = 5,
        e.elementsContent = [this.txtName_i(), this.head_i(), this._Image1_i(), this.imgAttr_i(), this.mostGroup_i(), this.prohibitIcon_i(), this.goToWarIcon_i(), this.firstEpisodeIcon_i()],
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 4,
        e.size = 16,
        e.text = "精灵名字最多",
        e.textColor = 9025023,
        e.y = 104,
        e
    },
    i.head_i = function() {
        var e = new eui.Image;
        return this.head = e,
        e.height = 100,
        e.width = 100,
        e.x = 6,
        e.y = 0,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad6v6banpickmode_imgattrbg_png",
        e.x = 69,
        e.y = 0,
        e
    },
    i.imgAttr_i = function() {
        var e = new eui.Image;
        return this.imgAttr = e,
        e.height = 23,
        e.source = "peakjihad6v6banpickmode_imgattr_png",
        e.width = 23,
        e.x = 82,
        e.y = 0,
        e
    },
    i.mostGroup_i = function() {
        var e = new eui.Group;
        return this.mostGroup = e,
        e.x = 0,
        e.y = 73,
        e.elementsContent = [this._Image2_i(), this.most_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "peakjihad6v6banpickmode_iconbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.most_i = function() {
        var e = new eui.Label;
        return this.most = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "3",
        e.textColor = 16776257,
        e.x = 9,
        e.y = 5,
        e
    },
    i.prohibitIcon_i = function() {
        var e = new eui.Image;
        return this.prohibitIcon = e,
        e.source = "PeakJihad6V6BanPickMode_prohibitIcon_png",
        e.visible = !0,
        e.x = 63,
        e.y = 79,
        e
    },
    i.goToWarIcon_i = function() {
        var e = new eui.Image;
        return this.goToWarIcon = e,
        e.source = "PeakJihad6V6BanPickMode_goToWarIcon_png",
        e.visible = !0,
        e.x = 63,
        e.y = 79,
        e
    },
    i.firstEpisodeIcon_i = function() {
        var e = new eui.Image;
        return this.firstEpisodeIcon = e,
        e.source = "PeakJihad6V6BanPickMode_firstEpisodeIcon_png",
        e.visible = !0,
        e.x = 63,
        e.y = 79,
        e
    },
    i.selectPng_i = function() {
        var e = new eui.Image;
        return this.selectPng = e,
        e.height = 136,
        e.scale9Grid = new egret.Rectangle(7, 7, 92, 111),
        e.source = "PeakJihad6V6BanPickMode_selectPng_png",
        e.touchEnabled = !1,
        e.visible = !1,
        e.width = 112,
        e.x = 0,
        e.y = 0,
        e
    },
    i.prohibit_png_i = function() {
        var e = new eui.Image;
        return this.prohibit_png = e,
        e.height = 135.441,
        e.source = "PeakJihad6V6BanPickMode_prohibit_png_png",
        e.visible = !1,
        e.width = 110,
        e.x = 1,
        e.y = 0,
        e
    },
    t
} (eui.Skin);