var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
twelveYearsPromise; !
function(e) {
    var t = function() {
        function e() {}
        return e.FOREVER_CHAPTER = 125074,
        e.FOREVER_CHECKPOINT = 125075,
        e.LOCALSTORAGE_CHECKPOINT = "twelveYearsDialogGroupId",
        e.LOCALSTORAGE_FIRST_ACTIVITY_CENTER = "twelveYearsFirstActivityCenter",
        e.LOCALSTORAGE_FIRST_MAIN_PANEL = "twelveYearsFirstMainPanel",
        e.LOCALSTORAGE_FIRST_FINAL_BOSS = "twelveYearsFirstFinalBoss",
        e
    } ();
    e.AttrConst = t,
    __reflect(t.prototype, "twelveYearsPromise.AttrConst")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this) || this;
            return n.service.setValues([e.AttrConst.FOREVER_CHAPTER, e.AttrConst.FOREVER_CHECKPOINT]),
            n.init([{
                panelName: e.DataConst.ACTIVITY_PANEL,
                isMain: !0
            },
            {
                panelName: e.DataConst.MAIN_PANEL
            },
            {
                panelName: e.DataConst.BATTLE_PANEL
            }]),
            n
        }
        return __extends(i, t),
        i
    } (BasicMultPanelModule);
    e.TwelveYearsPromise = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsPromise")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
    return new(i || (i = Promise))(function(s, r) {
        function a(e) {
            try {
                l(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function o(e) {
            try {
                l(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function l(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        l((n = n.apply(e, t || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (s = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return l.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                l.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = l.ops.pop(),
                l.trys.pop();
                continue;
            default:
                if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    l = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    l.label = i[1];
                    break
                }
                if (6 === i[0] && l.label < a[1]) {
                    l.label = a[1],
                    a = i;
                    break
                }
                if (a && l.label < a[2]) {
                    l.label = a[2],
                    l.ops.push(i);
                    break
                }
                a[2] && l.ops.pop(),
                l.trys.pop();
                continue
            }
            i = t.call(e, l)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            s = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, r, a, o, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
twelveYearsPromise; !
function(e) {
    function t(e, t, i, s) {
        var r = [config.Talk, config.Npc],
        a = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return r.length ? (e = r.pop(), e.hasLoader ? [3, 2] : [4, e.loadAsync()]) : [2, Promise.resolve()];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return [4, a()];
                    case 3:
                        return [2, t.sent()]
                    }
                })
            })
        };
        egret.lifecycle.stage.touchChildren = !1,
        a().then(function() {
            var r = new n({
                groupId: e,
                callBack: t,
                caller: i,
                service: s
            });
            return LevelManager.appLevel.addChild(r),
            r
        })
    }
    function i(e, t, i, s) {
        var r = [config.Talk, config.Npc],
        a = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return r.length ? (e = r.pop(), e.hasLoader ? [3, 2] : [4, e.loadAsync()]) : [2, Promise.resolve()];
                    case 1:
                        t.sent(),
                        t.label = 2;
                    case 2:
                        return [4, a()];
                    case 3:
                        return [2, t.sent()]
                    }
                })
            })
        };
        egret.lifecycle.stage.touchChildren = !1,
        a().then(function() {
            var r = new n({
                id: e,
                callBack: t,
                caller: i,
                service: s
            });
            return LevelManager.appLevel.addChild(r),
            r
        })
    }
    e.showDialogByGroupId = t,
    e.showDialogById = i;
    var n = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i.animDelayTime = 2e3,
            i.isPlayFinalWinAnim = !1,
            i._createTalkList(),
            i.skinName = twelveYearsDialogSkin,
            i.animChapter13 = SpineUtil.createAnimate("juanzhanzhakesi_a"),
            i.grpAnim.addChildAt(i.animChapter13, 0),
            i.animChapter13.touchEnabled = !1,
            i.animChapter13.touchChildren = !1,
            i.animChapter13.visible = !1,
            i.animChapter13Win = SpineUtil.createAnimate("limingpoxiao"),
            i.grpAnim.addChildAt(i.animChapter13Win, 0),
            i.animChapter13Win.touchEnabled = !1,
            i.animChapter13Win.touchChildren = !1,
            i.animChapter13Win.visible = !1,
            i.animBgEffect = SpineUtil.createAnimate("juqingxiaoguo"),
            i.grpAnim.addChildAt(i.animBgEffect, 1),
            i.animBgEffect.touchEnabled = !1,
            i.animBgEffect.touchChildren = !1,
            i.animBgEffect.visible = !1,
            i.animEvilEffect = SpineUtil.copy(i.animBgEffect),
            i.grpAnim.addChildAt(i.animEvilEffect, 1),
            i.animEvilEffect.touchEnabled = !1,
            i.animEvilEffect.touchChildren = !1,
            i.animEvilEffect.visible = !1,
            i.animFire = SpineUtil.createAnimate("boss_challenge"),
            i.grpAnim.addChildAt(i.animFire, 1),
            i.animFire.touchEnabled = !1,
            i.animFire.touchChildren = !1,
            i.animFire.visible = !1,
            i
        }
        return __extends(i, t),
        i.prototype._createTalkList = function() {
            if (this._talkConfigList = [], this.data.groupId ? (this._talkConfigList = this._findTalkListByGroupId(this.data.groupId), this.isCreateById = !1) : (this._talkConfigList = this._findTalkListById(this.data.id), this.isCreateById = !0), this.currTalkListLength = this._talkConfigList.length, this._talkConfigList.length > 0 && (this.prevNpcId = this._talkConfigList[0].npcId, this.currGroupId = this._talkConfigList[0].groupId), !IS_RELEASE) for (; this._talkConfigList.length > 2;) this._talkConfigList.shift()
        },
        i.prototype._findTalkListByGroupId = function(e) {
            for (var t = config.TwelveYearsPromise.getItems(), i = [], n = 0; n < t.length; n++) t[n].groupId === e && (i.push(t[n]), t[n].chapter > 0 && (this.currChapter = t[n].chapter));
            if (!IS_RELEASE) for (; i.length > 2;) i.shift();
            return i
        },
        i.prototype._findTalkListById = function(e) {
            for (var t = config.TwelveYearsPromise.getItems(), i = [], n = 0; n < t.length; n++) if (t[n].id === e) {
                i.push(t[n]),
                t[n].chapter > 0 && (this.currChapter = t[n].chapter);
                break
            }
            return i
        },
        i.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this._canTouchFlag = this.isCreateById,
            this.isToFight = !1,
            this._initEvents(),
            this._resetUi(),
            this.width = egret.lifecycle.stage.stageWidth,
            this.height = egret.lifecycle.stage.stageHeight,
            egret.setTimeout(function() {
                e._next()
            },
            this, 0),
            this.curBg = "common_mask_bg_s9_png",
            this.resizeObj = [this.bgBlack, this.BG, this.BGCopy, this.mask1, this.mask2],
            this._resize()
        },
        i.prototype._initEvents = function() {
            var t = this;
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchHanlder, this),
            egret.lifecycle.stage.addEventListener(egret.Event.RESIZE, this._onResizeHanlder, this),
            EventManager.addEventListener("event_selected_npc_dialog_option", this._onSelectedOption, this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            ImageButtonUtil.add(this.grpBtnBack,
            function() {
                t._canTouchFlag = !0,
                Alert.show("中途离开可能丢失部分进度，确认离开？",
                function() {
                    t.data.service.openPanel(e.DataConst.MAIN_PANEL),
                    t.destroy();
                    var i = {
                        volume: .4
                    };
                    gsap.to(i, {
                        volume: 0,
                        duration: 1,
                        onUpdate: function() {
                            SoundManager.instance.setVolume(i.volume)
                        },
                        onComplete: function() {
                            SoundManager.stopMusic(),
                            SoundManager.instance.setVolume(.4)
                        }
                    })
                })
            },
            this)
        },
        i.prototype._removeEvents = function() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchHanlder, this),
            egret.lifecycle.stage.removeEventListener(egret.Event.RESIZE, this._onResizeHanlder, this),
            EventManager.removeEventListener("event_selected_npc_dialog_option", this._onSelectedOption, this),
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype._next = function() {
            var e = this;
            if (this.currTalkListLength = this._talkConfigList.length, 0 === this._talkConfigList.length) {
                if (! (this._curtTalkConfig.deal.length > 0)) return void this._complete();
                this.manageDealAttr()
            } else {
                if (this._curtTalkConfig = this._talkConfigList.shift(), this._curtTalkConfig.deal.length > 0) {
                    var t = this._curtTalkConfig.deal.split("|"),
                    i = t[0].split("_"),
                    n = ~~i[0];
                    2 == n && this.manageDealAttr()
                }
                this._showDialog().then(function() {
                    e._canTouchFlag = !0
                })
            }
        },
        i.prototype._complete = function() {
            if (!this.isToFight) {
                var t = this.data.service.getValue(e.AttrConst.FOREVER_CHAPTER);
                t == this.currChapter - 1 && SocketConnection.sendByQueue(41950, [34, 1]),
                this.data.service.openPanel(e.DataConst.MAIN_PANEL)
            }
            var i = this.data.caller,
            n = this.data.callBack;
            this.destroy(),
            n.apply(i, []);
            var s = {
                volume: .4
            };
            gsap.to(s, {
                volume: 0,
                duration: 1,
                onUpdate: function() {
                    SoundManager.instance.setVolume(s.volume)
                },
                onComplete: function() {
                    SoundManager.stopMusic(),
                    SoundManager.instance.setVolume(.4)
                }
            })
        },
        i.prototype.onFightOver = function(t) {
            var i = FightManager.isWin ? this.winJumpGroupId: this.loseJumpGroupId,
            n = this.data.service.getValue(e.AttrConst.FOREVER_CHAPTER);
            n == this.currChapter - 1,
            this._talkConfigList = this._findTalkListByGroupId(i),
            this._startNextDialog()
        },
        i.prototype.manageDealAttr = function(t) {
            var i = this;
            if (t = t ? t: 0, this._curtTalkConfig.deal.length > 0) {
                var n = this._curtTalkConfig.deal.split("|"),
                s = n[t].split("_"),
                r = ~~s[0],
                a = s[1],
                o = s[2],
                l = s[3];
                switch (r) {
                case 1:
                    this._talkConfigList = this._findTalkListByGroupId(~~a),
                    this._startNextDialog();
                    break;
                case 2:
                    this.data && this.data.service.updateValues().then(function() {
                        var t = i.data.service.getValue(e.AttrConst.FOREVER_CHAPTER),
                        n = i.data.service.getValue(e.AttrConst.FOREVER_CHECKPOINT);
                        t == i.currChapter - 1 && (13 == i.currChapter && 1 != n && 4 != n && 7 != n ? SocketConnection.sendByQueue(41950, [34, 1]) : n % 2 == 0 && SocketConnection.sendByQueue(41950, [34, 1])),
                        i.data.service.openPanel(e.DataConst.BATTLE_PANEL, [a, o, l, i.currChapter]),
                        i.isToFight = !0,
                        0 === i.currTalkListLength && i._complete()
                    });
                    break;
                case 3:
                    this.data.service.updateValues().then(function() {
                        i.data.service.updateValues().then(function() {
                            var t = i.data.service.getValue(e.AttrConst.FOREVER_CHAPTER),
                            n = i.data.service.getValue(e.AttrConst.FOREVER_CHECKPOINT);
                            t == i.currChapter - 1 ? n % 2 == 0 ? (SocketConnection.sendByQueue(41950, [34, 1]), SocketConnection.sendByQueue(41950, [34, 1])) : 1 == n && SocketConnection.sendByQueue(41950, [34, 1]) : FightManager.tryFight( + a),
                            i.winJumpGroupId = +o,
                            i.loseJumpGroupId = +l
                        })
                    })
                }
            } else this._startNextDialog()
        },
        i.prototype._onSelectedOption = function(e) {
            if (this._canTouchFlag) {
                this._canTouchFlag = !1;
                var t = e.data,
                i = this._curtTalkConfig.answer.split("|").indexOf(t);
                this.manageDealAttr(i)
            }
        },
        i.prototype.checkCanFix = function() {
            for (var e = [], t = ItemManager.getClothIDs(), i = 0, n = t; i < n.length; i++) {
                var s = n[i],
                r = ItemManager.getClothInfo(s);
                0 != ItemXMLInfo.getLifeTime(r.itemID) && r.leftTime < 1 && e.push(s)
            }
            return e.length > 0
        },
        i.prototype._onSetCompPosition = function() {
            var e = this._curtTalkConfig.dir;
            this._compDialog.verticalCenter = this._compDialog.verticalCenter_show,
            this._compNpcModel.x = 0 === e ? this.pos_npc_left.x: this.pos_npc_right.x,
            this._compNpcModel.y = 0 === e ? this.pos_npc_left.y: this.pos_npc_right.y,
            this._compNpcTitle.x = 0 === e ? this.pos_npcTitle_left.x: this.pos_npcTitle_right.x,
            this._compNpcTitle.y = 0 === e ? this.pos_npcTitle_left.y: this.pos_npcTitle_right.y,
            this._curtTalkConfig.answer && (this._compOption.x = 1 === e ? this.pos_option_left.x: this.pos_option_right.x, this._compOption.y = 1 === e ? this.pos_option_left.y: this.pos_option_right.y)
        },
        i.prototype._showDialog = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.showBg(),
                        13 != this.currChapter || 106 != this._curtTalkConfig.groupId || this.isPlayFinalWinAnim || (this.animChapter13Win.visible = !0, this.animChapter13Win.play("idle", -1, 1), this.isPlayFinalWinAnim = !0),
                        13 == this.currChapter && 104 == this._curtTalkConfig.groupId ? this.showRabbits() : this.showItem(),
                        this.playBGM(),
                        this._compNpcModel.updateData(this._curtTalkConfig),
                        [4, this._compNpcModel.updateView()];
                    case 1:
                        return e.sent(),
                        this._compNpcTitle.updateData(this._curtTalkConfig),
                        [4, this._compNpcTitle.updateView()];
                    case 2:
                        return e.sent(),
                        this._compDialog.updateData(this._curtTalkConfig),
                        [4, this._compDialog.updateView()];
                    case 3:
                        return e.sent(),
                        this._curtTalkConfig.answer ? (this._compOption.updateData(this._curtTalkConfig), [4, this._compOption.updateView()]) : [3, 5];
                    case 4:
                        e.sent(),
                        this._compOption.visible = !0,
                        e.label = 5;
                    case 5:
                        return this._compNpcModel.visible = !0,
                        this._compDialog.visible = !0,
                        this._compNpcTitle.visible = !0,
                        this._onSetCompPosition(),
                        this.isDiffNpc ? [4, this._showAni()] : [3, 7];
                    case 6:
                        return e.sent(),
                        [3, 9];
                    case 7:
                        return [4, this._compDialog.textShowAnim()];
                    case 8:
                        e.sent(),
                        e.label = 9;
                    case 9:
                        return EventManager.dispatchEventWith("npcDialog_showed", !1, this._curtTalkConfig),
                        egret.lifecycle.stage.touchChildren = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.showBg = function() {
            var e = this;
            if (this._curtTalkConfig.bg > 0) {
                var t = void 0;
                t = 26 == this._curtTalkConfig.bg ? "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_dialogbg" + this._curtTalkConfig.bg + ".png": "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_dialogbg" + this._curtTalkConfig.bg + ".jpg",
                this.curBg = t,
                this.bgBlack.visible = !0
            } else - 1 == this._curtTalkConfig.bg ? (this.curBg = "common_mask_bg_s9_png", this.bgBlack.visible = !0) : -2 == this._curtTalkConfig.bg ? (this.curBg = "twelve_years_level_pop_whitebg_png", this.bgBlack.visible = !0) : -3 == this._curtTalkConfig.bg && (this.curBg = "", this.bgBlack.visible = !1);
            switch (this._curtTalkConfig.bgEffect) {
            case 1:
                this.BG.source = this.curBg,
                this.BGCopy.alpha = 0,
                this.BG.alpha = 0,
                egret.Tween.get(this.BG).to({
                    alpha: 1
                },
                this.animDelayTime);
                break;
            case 2:
                this.BGCopy.alpha = 0,
                egret.Tween.get(this.BG).to({
                    alpha: 0
                },
                this.animDelayTime).call(function() {
                    e.BG.source = "common_mask_bg_s9_png",
                    e.curBg = "common_mask_bg_s9_png"
                });
                break;
            case 3:
                this.BGCopy.source = this.curBg,
                this.BGCopy.alpha = 1,
                GsapUtils.imageFadIn(this.BG, this.BGCopy, 4,
                function() {
                    e.BG.source = e.curBg
                });
                break;
            default:
                this.BG.alpha = 1,
                this.BGCopy.alpha = 0,
                this.BG.source = this.curBg
            }
            switch (this._curtTalkConfig.mask) {
            case 1:
                this.mask1.source = "common_mask_bg_s9_png";
                break;
            case 2:
                this.mask1.source = "twelve_years_level_pop_whitebg_png";
                break;
            default:
                this.mask1.source = "",
                this.animBgEffect.visible = !1,
                this.animBgEffect.stopAll()
            }
            if (this._curtTalkConfig.mask > 0) switch (this._curtTalkConfig.maskEffect) {
            case 0:
                this.mask1.alpha = 1;
                break;
            case 1:
                this.mask1.alpha = 0;
                break;
            case 2:
                this.mask1.alpha = 0,
                egret.Tween.get(this.mask1).to({
                    alpha: 1
                },
                this.animDelayTime);
                break;
            case 3:
                this.mask1.alpha = 1,
                egret.Tween.get(this.mask1).to({
                    alpha: 0
                },
                this.animDelayTime);
                break;
            case 4:
                this.mask1.alpha = 0,
                egret.Tween.get(this.mask1).to({
                    alpha: 1
                },
                5e3);
                break;
            case 5:
                this.mask1.alpha = 0,
                this.animBgEffect.visible = !0,
                this.animBgEffect.play("zhongxinfasan_bai", 1, 1, {
                    playEnd: function() {
                        e.mask1.alpha = 1,
                        e.animBgEffect.visible = !1,
                        e.animBgEffect.stopAll()
                    }
                });
                break;
            case 6:
                this.mask1.alpha = 0,
                this.animBgEffect.visible = !0,
                this.animBgEffect.play("zhongxinfasan_hei", 1, 1, {
                    playEnd: function() {
                        e.mask1.alpha = 1,
                        e.animBgEffect.visible = !1,
                        e.animBgEffect.stopAll()
                    }
                })
            }
            switch (this._curtTalkConfig.mask2) {
            case - 1 : break;
            case 1:
                this.mask2.source = "twelve_years_main_panel_bgeffectmemory_png";
                break;
            case 2:
                this.animEvilEffect.visible = !0,
                this.animEvilEffect.play("xieeqingshi", -1, 1);
                break;
            case 3:
                this.mask2.source = "twelve_years_main_panel_bgeffectstorm_png";
                break;
            case 4:
                this.animFire.visible = !0,
                this.animFire.play("flames_of_war", -1, 1);
                break;
            case 5:
                this.mask2.source = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_bgeffectbubbles.png";
                break;
            case 6:
                this.mask2.source = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_bgeffectbubble.png";
                break;
            case 7:
                this.mask2.source = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_bgeffectred.png";
                break;
            default:
                this.mask2.source = "",
                this.animFire.visible = !1,
                this.animFire.stopAll(),
                this.animEvilEffect.visible = !1,
                this.animEvilEffect.stopAll()
            }
        },
        i.prototype.showRabbits = function() {
            if (this._curtTalkConfig.itemId > 0) if (8 == this._curtTalkConfig.itemId) this.animChapter13.visible = !0,
            this.animChapter13.play("daiji", -1, 1),
            this.grpRabbits.visible = !1;
            else switch (this._curtTalkConfig.itemEffect) {
            case 0:
            case 2:
                this["imgRabbit" + this._curtTalkConfig.itemId].alpha = 1;
                break;
            case 1:
            case 4:
                this["imgRabbit" + this._curtTalkConfig.itemId].alpha = 0;
                break;
            case 3:
                this["imgRabbit" + this._curtTalkConfig.itemId].alpha = 0,
                egret.Tween.get(this["imgRabbit" + this._curtTalkConfig.itemId]).to({
                    alpha: 1
                },
                this.animDelayTime);
                break;
            case 5:
                egret.Tween.get(this["imgRabbit" + this._curtTalkConfig.itemId]).to({
                    alpha: 0
                },
                this.animDelayTime);
                break;
            default:
                this["imgRabbit" + this._curtTalkConfig.itemId].source = ""
            }
        },
        i.prototype.showItem = function() {
            if (0 == this._curtTalkConfig.itemId) this.imgItem.source = "";
            else {
                var e = "resource/assets/twelveYearsPromise/item/twelve_years_main_panel_dialogitem" + this._curtTalkConfig.itemId + ".png";
                switch (this.imgItem.source = e, this._curtTalkConfig.itemEffect) {
                case 0:
                case 2:
                    this.imgItem.alpha = 1;
                    break;
                case 1:
                case 4:
                    this.imgItem.source = "";
                    break;
                case 3:
                    this.imgItem.alpha = 0,
                    egret.Tween.get(this.imgItem).to({
                        alpha: 1
                    },
                    this.animDelayTime);
                    break;
                case 5:
                    egret.Tween.get(this.imgItem).to({
                        alpha:
                        0
                    },
                    this.animDelayTime);
                    break;
                default:
                    this.imgItem.source = ""
                }
            }
        },
        i.prototype.playBGM = function() {
            if (this._curtTalkConfig.BGM.length > 0) if ("0" == this._curtTalkConfig.BGM) SoundManager.stopMusic();
            else {
                var e = "resource/assets/map/sound/" + this._curtTalkConfig.BGM + ".mp3",
                t = {
                    volume: .4
                };
                gsap.to(t, {
                    volume: 0,
                    duration: 1,
                    onUpdate: function() {
                        SoundManager.instance.setVolume(t.volume)
                    },
                    onComplete: function() {
                        SoundManager.instance.stopMusic(),
                        SoundManager.loadSound(e).then(function() {
                            SoundManager.instance.setVolume(.4),
                            SoundManager.playMusic()
                        })
                    }
                })
            }
        },
        i.prototype.playSound = function() {},
        i.prototype._showAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, n;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return e = this._curtTalkConfig.dir,
                        t = this._compDialog.verticalCenter,
                        this._compDialog.verticalCenter = t + this._compDialog.height,
                        this._compDialog.alpha = 0,
                        this._curtTalkConfig.answer ? this._compOption.visible = !1 : this._compDialog.imgBtn_next.visible = !1,
                        i = this._compNpcModel.x,
                        this._compNpcModel.x = 0 === e ? i - this._compNpcModel.width / 2 : i + this._compNpcModel.width / 2,
                        this._compNpcModel.alpha = 0,
                        this._compNpcTitle.alpha = 0,
                        this._curtTalkConfig.npcId > 0 ? (n = common.TweenUtil.createAllTween(egret.Tween.get(this._compDialog).to({
                            verticalCenter: t,
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcModel).wait(200).to({
                            x: i,
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut)), [4, Promise.all(n)]) : [3, 2];
                    case 1:
                        return s.sent(),
                        [3, 4];
                    case 2:
                        return n = common.TweenUtil.createAllTween(egret.Tween.get(this._compDialog).to({
                            verticalCenter: t,
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut)),
                        [4, Promise.all(n)];
                    case 3:
                        s.sent(),
                        s.label = 4;
                    case 4:
                        return [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this._compNpcTitle).to({
                            alpha: 1
                        },
                        150, egret.Ease.cubicOut))];
                    case 5:
                        return s.sent(),
                        this._curtTalkConfig.answer ? (this._compOption.visible = !0, this._compOption.alpha = 0, [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this._compOption).to({
                            alpha: 1
                        },
                        100, egret.Ease.cubicOut))]) : [3, 7];
                    case 6:
                        return s.sent(),
                        [3, 8];
                    case 7:
                        this._compDialog.imgBtn_next.alpha = .2,
                        this._compDialog.imgBtn_next.visible = !0,
                        egret.Tween.removeTweens(this._compDialog.imgBtn_next),
                        this._compDialog.imgBtn_next.y = 15,
                        egret.Tween.get(this._compDialog.imgBtn_next, {
                            loop: !0
                        }).to({
                            alpha: 1,
                            y: 30
                        },
                        975).to({
                            alpha: .2,
                            y: 15
                        },
                        625),
                        s.label = 8;
                    case 8:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._hideAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return e = this._curtTalkConfig.dir,
                        t = this._compDialog.verticalCenter + this._compDialog.height,
                        i = 0 === e ? this._compNpcModel.x - this._compNpcModel.width / 2 : this._compNpcModel.x + this._compNpcModel.width / 2,
                        egret.Tween.removeTweens(this._compDialog.imgBtn_next),
                        n = common.TweenUtil.createAllTween(egret.Tween.get(this._compDialog).to({
                            verticalCenter: t,
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcModel).to({
                            x: i,
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut), egret.Tween.get(this._compNpcTitle).to({
                            alpha: 0
                        },
                        150, egret.Ease.cubicOut)),
                        this._compOption.visible = !1,
                        [4, Promise.all(n)];
                    case 1:
                        return s.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._onTouchHanlder = function(e) {
            if (this._canTouchFlag) {
                if (this._curtTalkConfig.answer) {
                    var t = this._curtTalkConfig.answer.split("|").length;
                    if (t > 1) return void BubblerManager.getInstance().showText("请先选择应答方式")
                }
                e.target != this.grpBtnBack && (this._canTouchFlag = !1, this._startNextDialog())
            }
        },
        i.prototype._onResizeHanlder = function(e) {
            var t = this;
            egret.setTimeout(function() {
                t._onSetCompPosition()
            },
            this, 100)
        },
        i.prototype._resize = function() {
            for (var e = 1136,
            t = 640,
            i = egret.lifecycle.stage.stageWidth,
            n = egret.lifecycle.stage.stageHeight,
            s = i / e,
            r = n / t,
            a = Math.max(s, r), o = 0; o < this.resizeObj.length; ++o) this.resizeObj[o].scaleX = this.resizeObj[o].scaleY = a,
            s > r ? this.resizeObj[o].y = (n - t * a) / 2 : this.resizeObj[o].x = (i - e * a) / 2;
            this.animBgEffect.scaleX = a,
            this.animChapter13.scaleX = this.animChapter13.scaleY = a,
            this.animChapter13Win.scaleX = this.animChapter13Win.scaleY = a,
            this.animFire.scaleX = a,
            this.animEvilEffect.scaleX = a
        },
        i.prototype._startNextDialog = function() {
            var e = this;
            this._talkConfigList.length > 0 && this.prevNpcId != this._talkConfigList[0].npcId ? (this.isDiffNpc = !0, this.prevNpcId = this._talkConfigList[0].npcId, this._hideAni().then(function() {
                e._resetUi(),
                e._next()
            })) : (this.isDiffNpc = !1, this._resetUi(), this._next())
        },
        i.prototype._resetUi = function() {
            this._compNpcModel.visible = !1,
            this._compDialog.visible = !1,
            this._compOption.visible = !1,
            this._compNpcTitle.visible = !1
        },
        i.prototype.destroy = function() {
            this._compDialog.destroy(),
            this._compNpcModel.destroy(),
            this._compOption.destroy(),
            this._compNpcTitle.destroy(),
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.TwelveYearsDialog = n,
    __reflect(n.prototype, "twelveYearsPromise.TwelveYearsDialog")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
    return new(i || (i = Promise))(function(s, r) {
        function a(e) {
            try {
                l(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function o(e) {
            try {
                l(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function l(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        l((n = n.apply(e, t || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (s = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return l.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                l.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = l.ops.pop(),
                l.trys.pop();
                continue;
            default:
                if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    l = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    l.label = i[1];
                    break
                }
                if (6 === i[0] && l.label < a[1]) {
                    l.label = a[1],
                    a = i;
                    break
                }
                if (a && l.label < a[2]) {
                    l.label = a[2],
                    l.ops.push(i);
                    break
                }
                a[2] && l.ops.pop(),
                l.trys.pop();
                continue
            }
            i = t.call(e, l)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            s = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, r, a, o, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.verticalCenter_show = 193.5,
            i.verticalCenter_ImgBtn_sure = 85.5,
            i.skinName = e.CompDialogSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(e) {
            this._talkConfig = e
        },
        i.prototype.updateView = function() {
            this._talkConfig.npcId > 0 ? this.currentState = "normal": this.currentState = "narrator";
            var e = this._talkConfig.msg.replace(/\${nick}/g, MainManager.actorInfo.nick);
            return this.text_desc.textFlow = (new egret.HtmlTextParser).parser(e),
            this.imgBtn_next.visible = !this._talkConfig.answer,
            Promise.resolve()
        },
        i.prototype.textShowAnim = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    switch (e.label) {
                    case 0:
                        return this.text_desc.alpha = 0,
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this.text_desc).to({
                            alpha: 1
                        },
                        800, egret.Ease.cubicOut))];
                    case 1:
                        return e.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.CompDialog = t,
    __reflect(t.prototype, "twelveYearsPromise.CompDialog", ["twelveYearsPromise.IComponent"])
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
    return new(i || (i = Promise))(function(s, r) {
        function a(e) {
            try {
                l(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function o(e) {
            try {
                l(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function l(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        l((n = n.apply(e, t || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (s = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return l.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                l.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = l.ops.pop(),
                l.trys.pop();
                continue;
            default:
                if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    l = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    l.label = i[1];
                    break
                }
                if (6 === i[0] && l.label < a[1]) {
                    l.label = a[1],
                    a = i;
                    break
                }
                if (a && l.label < a[2]) {
                    l.label = a[2],
                    l.ops.push(i);
                    break
                }
                a[2] && l.ops.pop(),
                l.trys.pop();
                continue
            }
            i = t.call(e, l)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            s = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, r, a, o, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.CompoentNpcSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(e) {
            this._talkConfig = e
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return this._talkConfig.npcId > 0 ? (e = void 0, e = 11 == this._talkConfig.npcId ? ClientConfig.getNpcDialogPng(this._talkConfig.npcId) : "resource/assets/twelveYearsPromise/npc/npc_" + this._talkConfig.npcId + ".png", t = this.npc, [4, RES.getResByUrl(e)]) : [3, 2];
                    case 1:
                        t.texture = i.sent(),
                        this.width = this.npc.texture.textureWidth,
                        this.height = this.npc.texture.textureHeight,
                        this.scaleX = 1 === this._talkConfig.dir ? -1 : 1,
                        this.anchorOffsetY = this.height / 2,
                        this.anchorOffsetX = 0,
                        i.label = 2;
                    case 2:
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        i
    } (BaseModule);
    e.CompNpcModel = t,
    __reflect(t.prototype, "twelveYearsPromise.CompNpcModel", ["twelveYearsPromise.IComponent"])
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
    return new(i || (i = Promise))(function(s, r) {
        function a(e) {
            try {
                l(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function o(e) {
            try {
                l(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function l(e) {
            e.done ? s(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        l((n = n.apply(e, t || [])).next())
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
        if (s) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (s = 1, r && (a = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(r, i[1])).done) return a;
            switch (r = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return l.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                l.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = l.ops.pop(),
                l.trys.pop();
                continue;
            default:
                if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    l = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    l.label = i[1];
                    break
                }
                if (6 === i[0] && l.label < a[1]) {
                    l.label = a[1],
                    a = i;
                    break
                }
                if (a && l.label < a[2]) {
                    l.label = a[2],
                    l.ops.push(i);
                    break
                }
                a[2] && l.ops.pop(),
                l.trys.pop();
                continue
            }
            i = t.call(e, l)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            s = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var s, r, a, o, l = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }),
    o
},
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.CompNpcTitleSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(e) {
            this._talkConfig = e
        },
        i.prototype.updateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return this._talkConfig.npcId > 0 ? (this.txt_npcName.text = this._talkConfig.npcName, this.grp.visible = !0) : this.grp.visible = !1,
                    [2, Promise.resolve()]
                })
            })
        },
        i
    } (BaseModule);
    e.CompNpcTitle = t,
    __reflect(t.prototype, "twelveYearsPromise.CompNpcTitle", ["twelveYearsPromise.IComponent"])
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.CompOptionSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {},
        i.prototype.updateData = function(e) {
            this._talkConfig = e
        },
        i.prototype.updateView = function() {
            this.currentState = 0 === this._talkConfig.dir ? "right": "left",
            this.validateNow();
            for (var t = this._talkConfig.answer.split("|"), i = 0; i < this.grp_options.numChildren; i++) {
                var n = this.grp_options.getChildAt(i);
                n.destroy()
            }
            this.grp_options.removeChildren();
            for (var i = 0; i < t.length; i++) {
                var n;
                i < this.grp_options.numChildren ? (n = this.grp_options.getChildAt(i), n.setLab(t[i]), n.visible = !0) : (n = new e.ItemOption(t[i]), this.grp_options.addChild(n))
            }
            this.grp_options.validateNow();
            var s = this.grp_options.height;
            return this.texture_001.y = s,
            this.height = s + this.texture_001.height,
            this.width = this.grp_options.width,
            0 === this._talkConfig.dir ? (this.anchorOffsetX = this.width, this.anchorOffsetY = this.height) : (this.anchorOffsetX = 0, this.anchorOffsetY = this.height),
            Promise.resolve()
        },
        i.prototype.destroy = function() {
            for (; this.grp_options.numChildren;) {
                var e = this.grp_options.getChildAt(0);
                e.destroy()
            }
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.CompOptions = t,
    __reflect(t.prototype, "twelveYearsPromise.CompOptions", ["twelveYearsPromise.IComponent"])
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i(i) {
            var n = t.call(this, i) || this;
            return n._txt = i,
            n.skinName = e.ItemOptionSkin,
            n
        }
        return __extends(i, t),
        i.prototype._initEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.grp_touch,
            function(t) {
                t.stopImmediatePropagation(),
                EventManager.dispatchEvent(new egret.Event("event_selected_npc_dialog_option", !1, !1, e._txt))
            },
            this)
        },
        i.prototype._removeEvent = function() {
            ImageButtonUtil.remove(this)
        },
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvent(),
            this._updateLab()
        },
        i.prototype.setLab = function(e) {
            this._txt = e,
            this._updateLab()
        },
        i.prototype._updateLab = function() {
            this.txt_option.text = this._txt
        },
        i.prototype.destroy = function() {
            this._removeEvent(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.ItemOption = t,
    __reflect(t.prototype, "twelveYearsPromise.ItemOption")
} (twelveYearsPromise || (twelveYearsPromise = {}));
var __reflect = this && this.__reflect ||
function(e, t, i) {
    e.__class__ = t,
    i ? i.push(t) : i = [t],
    e.__types__ = e.__types__ ? i.concat(e.__types__) : i
},
twelveYearsPromise; !
function(e) {
    var t = function() {
        function e() {}
        return e.ARR_LEVEL_ITEM_POSITION = [{
            x: 139,
            y: 203
        },
        {
            x: 137,
            y: 128
        },
        {
            x: 124,
            y: 157
        },
        {
            x: 118,
            y: 120
        },
        {
            x: 85,
            y: 156
        },
        {
            x: 60,
            y: 73
        },
        {
            x: -8,
            y: 123
        },
        {
            x: -24,
            y: 26
        },
        {
            x: -7,
            y: 85
        },
        {
            x: 7,
            y: 1
        },
        {
            x: 29,
            y: 19
        },
        {
            x: 9,
            y: 108
        },
        {
            x: 3,
            y: 16
        }],
        e.ARR_CHECK_POINT_GROUP_ID = [[1, "battle_18568_5_6", 6], [9, "battle_18569_10_11", 11], [15, 15, 15], [21, "battle_18570_47_28", 28], [33, "battle_18571_49_34", 34, "battle_18571_48_35", 35], [50, "battle_18572_57_58", 58], [59, 59, 59], [60, "battle_18573_65_72", 72], [76, "battle_18574_77_78", 78], [86, "battle_18575_117_118", 118], [89, 94, 95, 96], [98, "battle_18576_99_100", 100], [101, "battle_18577_102_103", 102, 103, "battle_18578_104_119", 104, 119, "battle_18579_127_106", 106]],
        e.ACTIVITY_PANEL = "twelveYearsPromise.TwelveYearsActivityCenterPanel",
        e.MAIN_PANEL = "twelveYearsPromise.TwelveYearsMainPanel",
        e.BATTLE_PANEL = "twelveYearsPromise.TwelveYearsBattlePanel",
        e
    } ();
    e.DataConst = t,
    __reflect(t.prototype, "twelveYearsPromise.DataConst")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = twelveYearsLevelItemSkin,
            e.touchEnabled = !1,
            e.cacheAsBitmap = !0,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this)
        },
        i.prototype.playAnim = function() {
            var e = this;
            this.anim.visible = !0,
            this.anim.play("fog_xiaosan", 1, 1, {
                playEnd: function() {
                    e.data.itemIndex + 1 == 13 ? (e.animChapter13 = SpineUtil.copy(e.anim), e.grp.addChildAt(e.animChapter13, 0), e.animChapter13.touchEnabled = !1, e.animChapter13.touchChildren = !1, e.animChapter13.x = e.grp.x + 104.5, e.animChapter13.y = e.grp.y + 29, e.animChapter13.play("fog_juezhanguang", -1, 1)) : e.anim.play("fog_daiji_guang", -1, 1)
                }
            })
        },
        i.prototype.dataChanged = function() {
            var i = this;
            t.prototype.dataChanged.call(this),
            ImageButtonUtil.remove(this.imgLevelOpened),
            this.currentState = this.data.state,
            this.grp.x = this.data.pos.x,
            this.grp.y = this.data.pos.y,
            this.realItemIndex = this.data.itemIndex + 1,
            this.imgLevelOpened.source = "twelve_years_main_panel_levelopened_" + this.realItemIndex + "_png";
            var n = this.data.service.getValue(e.AttrConst.FOREVER_CHAPTER);
            n == this.data.itemIndex && "open" == this.currentState && (this.anim = SpineUtil.createAnimate("tianjiehuilang"), this.addChild(this.anim), this.anim.touchEnabled = !1, this.anim.touchChildren = !1, this.anim.visible = !1, this.anim.x = this.grp.x + 104.5, this.anim.y = this.grp.y + 86, this.playAnim()),
            "open" == this.currentState ? (DisplayUtil.setColor(this.imgLevelOpened, DisplayUtil.COLOR_WIHTE), ImageButtonUtil.add(this.imgLevelOpened,
            function() {
                PopViewManager.getInstance().openView(new e.TwelveYearsLevelPop(i.realItemIndex, i.data.service))
            },
            this)) : DisplayUtil.setColor(this.imgLevelOpened, DisplayUtil.COLOR_GRAY)
        },
        i
    } (BaseItemRenderer);
    e.TwelveYearsLevelItem = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsLevelItem")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = twelveYearsLevelPopItemSkin,
            t.cacheAsBitmap = !0,
            t
        }
        return __extends(t, e),
        t.prototype.dataChanged = function() {
            var t = this;
            switch (e.prototype.dataChanged.call(this), ImageButtonUtil.remove(this.imgIcon), this.currentState = this.data.state, this.data.itemInfo.itemType) {
            case 1:
                this.imgIcon.source = ClientConfig.getItemIcon(this.data.itemInfo.infos[0]),
                ImageButtonUtil.add(this.imgIcon,
                function() {
                    tipsPop.TipsPop.openItemPop({
                        id: t.data.itemInfo.infos[0]
                    })
                },
                this);
                break;
            case 2:
                this.imgIcon.source = ClientConfig.getMarkPath(this.data.itemInfo.infos[0]),
                ImageButtonUtil.add(this.imgIcon,
                function() {
                    tipsPop.TipsPop.openCounterMarkPop({
                        ins: t.data.itemInfo.infos[0]
                    })
                },
                this);
                break;
            case 10:
                var i = AchieveXMLInfo.getRule(this.data.itemInfo.infos[0], this.data.itemInfo.infos[1]);
                if ( - 1 != [2, 14, 18].indexOf(this.data.itemInfo.infos[0])) this.imgIcon.source = ClientConfig.getAchieveSPTIcon(i.proicon);
                else {
                    if (!i.proicon) {
                        var n = AchieveXMLInfo.getRule(this.data.itemInfo.infos[0], this.data.itemInfo.infos[1]);
                        n.proicon = n.proicon
                    }
                    this.imgIcon.source = ClientConfig.getAchieveIcon(i.proicon)
                }
                ImageButtonUtil.add(this.imgIcon,
                function() {
                    tipsPop.TipsPop.openTitleInfoPop(472)
                },
                this)
            }
        },
        t
    } (BaseItemRenderer);
    e.TwelveYearsLevelPopItem = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsLevelPopItem")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = twelveYearsRewardPopItem,
            e
        }
        return __extends(i, t),
        i.prototype.dataChanged = function() {
            t.prototype.dataChanged.call(this);
            var i = SystemTimerManager.sysBJDate,
            n = i.getMonth() + 1,
            s = i.getDate();
            "normal" == this.data.state ? 5 < this.itemIndex && this.itemIndex < 12 && 11 == n && 18 > s ? (this.currentState = "lock", this.txtLockDay.text = "11.18解锁") : 12 == this.itemIndex && 11 == n && 19 > s ? (this.currentState = "lock", this.txtLockDay.text = "11.19解锁") : this.currentState = this.data.state: this.currentState = this.data.state,
            this.levelId = this.data.id,
            this.imgIcon.source = "twelve_years_main_panel_levelopened_" + this.levelId + "_png";
            var r = this.imgIcon.texture.$bitmapWidth / this.imgIcon.texture.$bitmapHeight;
            this.imgIcon.height = 92,
            this.imgIcon.width = this.imgIcon.height * r;
            for (var a = this.processData(), o = [], l = 0; l < a.length; l++) o.push({
                itemInfo: a[l],
                state: "rewardPop"
            });
            this.list.itemRenderer = e.TwelveYearsLevelPopItem,
            this.list.dataProvider = new eui.ArrayCollection(o),
            a.length < 5 ? this.cacheAsBitmap = !0 : this.cacheAsBitmap = !1
        },
        i.prototype.processData = function() {
            for (var e = config.TwelveYearsPromise_Bonus.getItem(this.levelId), t = e.bonusID.split(";"), i = [], n = 0; n < t.length; n++) {
                var s = t[n].split("_");
                i.push({
                    itemType: +s[0],
                    infos: [ + s[1], +s[2]]
                })
            }
            return this.txtLevelName.text = e.title,
            i
        },
        i
    } (BaseItemRenderer);
    e.TwelveYearsRewardPopItem = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsRewardPopItem")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = twelveYearsPromiseSkin,
            e
        }
        return __extends(i, t),
        i.prototype.resize = function() {
            t.prototype.resize.call(this);
            var e = this.activityCenterBg.width,
            i = this.activityCenterBg.height,
            n = egret.lifecycle.stage.stageWidth,
            s = egret.lifecycle.stage.stageHeight,
            r = n / e,
            a = s / i,
            o = Math.max(r, a);
            this.activityCenterBg.scaleX = this.activityCenterBg.scaleY = o,
            r > a ? this.activityCenterBg.y = (s - i * o) / 2 : this.activityCenterBg.x = (n - e * o) / 2
        },
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.list.itemRenderer = e.TwelveYearsLevelPopItem;
            for (var i = [], n = [1, 10, 1, 1, 1, 1], s = [1725570, [152, 27], 1725568, 1725569, 1725571, 400568], r = 0; 6 > r; r++) 1 == r ? i.push({
                itemInfo: {
                    itemType: n[r],
                    infos: [s[r][0], s[r][1]]
                },
                state: "activityCenter"
            }) : i.push({
                itemInfo: {
                    itemType: n[r],
                    infos: [s[r], 0]
                },
                state: "activityCenter"
            });
            this.listData = i,
            this.list.dataProvider = new eui.ArrayCollection(this.listData),
            this.addEvent(),
            this.resize();
            var a = core.manager.BitBuffSetManager.getInstance().getValueByID(6);
            0 >= a && (core.manager.BitBuffSetManager.getInstance().setValueID(6, 1), npcDialog.showDialogIds(265,
            function() {},
            this)),
            this.bgAnim = SpineUtil.createAnimate("12rukou"),
            this.grpTitleAnim.addChildAt(this.bgAnim, 0),
            this.bgAnim.touchEnabled = !1,
            this.bgAnim.touchChildren = !1,
            this.bgAnim.visible = !1,
            this.btnAnim = SpineUtil.copy(this.bgAnim),
            this.btnAnim.touchEnabled = !1,
            this.btnAnim.touchChildren = !1,
            this.btnAnim.visible = !1,
            this.grp.addChildAt(this.btnAnim, 1),
            this.btnAnim.x = this.btnGo.x,
            this.btnAnim.y = this.btnGo.y,
            this.playAnim()
        },
        i.prototype.playAnim = function() {
            this.bgAnim.visible = !0,
            this.bgAnim.play("beijing"),
            this.btnAnim.visible = !0,
            this.btnAnim.play("anniu")
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnGo,
            function() {
                t.service.openPanel(e.DataConst.MAIN_PANEL),
                EventManager.dispatchEventWith("hideActivityCenterLeft")
            },
            this)
        },
        i.prototype.update = function() {
            this.list.dataProvider = new eui.ArrayCollection(this.listData)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this)
        },
        i
    } (BasicPanel);
    e.TwelveYearsActivityCenterPanel = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsActivityCenterPanel")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = twelveYearsBattlePanelSkin,
            e.animChapter13 = SpineUtil.createAnimate("juanzhanzhakesi_a"),
            e.grpAnim.addChildAt(e.animChapter13, 0),
            e.animChapter13.touchEnabled = !1,
            e.animChapter13.touchChildren = !1,
            e.animChapter13.visible = !1,
            e
        }
        return __extends(i, t),
        i.prototype.beforeAdd = function(t) {
            var i = this;
            this.bossId = +t[0],
            this.loseDialogId = +t[1],
            this.winDialogId = +t[2],
            this.currChapter = +t[3];
            var n = [1, 5, 6, 8, 10, 11, 13, 15, 16, 18, 19, 22];
            if (this.animChapter13.visible = !1, this.animChapter13.stopAll(), this.currChapter <= 7 || 11 == this.currChapter || 12 == this.currChapter) {
                this.currentState = "Boss3";
                var s = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_dialogbg" + n[this.currChapter - 1] + ".jpg";
                this.bg.source = s
            } else if (8 == this.currChapter || 10 == this.currChapter) {
                this.currentState = "Boss2";
                var s = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_dialogbg" + n[this.currChapter - 1] + ".jpg";
                this.bg.source = s
            } else 9 == this.currChapter ? this.currentState = "Boss1": 13 == this.currChapter && (this.currentState = "final", this.service.updateValues().then(function(t) {
                var n = i.service.getValue(e.AttrConst.FOREVER_CHAPTER) >= 13,
                s = i.service.getValue(e.AttrConst.FOREVER_CHECKPOINT);
                if (n && 106 == i.winDialogId) return i.bg.source = "",
                i.animChapter13.visible = !0,
                void i.animChapter13.play("daiji", -1, 1);
                if (13 == i.currChapter && 7 > s) {
                    var r = "resource/assets/twelveYearsPromise/bg/twelve_years_main_panel_dialogbg26.png";
                    i.bg.source = r
                } else i.bg.source = "",
                i.animChapter13.visible = !0,
                i.animChapter13.play("daiji", -1, 1)
            }));
            ImageButtonUtil.remove(this.btnFight),
            ImageButtonUtil.add(this.btnFight,
            function() {
                if (i.checkCanFight()) {
                    var t = i.service.getValue(e.AttrConst.FOREVER_CHAPTER);
                    t == i.currChapter - 1 ? SocketConnection.sendByQueue(41950, [34, 1]) : FightManager.fightNoMapBoss(i.bossId)
                } else BubblerManager.getInstance().showText("背包中无可出战精灵！")
            },
            this),
            EventManager.addEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this)
        },
        i.prototype.checkCanFight = function() {
            var e = !1;
            return PetManager.infos.forEach(function(t) {
                return t.hp > 0 ? void(e = !0) : void 0
            }),
            e
        },
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.resizeObj = [this.bg, this.tuceng_1, this.BOSS1, this.BOSS2, this.BOSS3],
            this.addEvent(),
            this.resize()
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.grpBtnBack,
            function() {
                Alert.show("中途离开可能丢失部分进度，确认离开？",
                function() {
                    t.service.closePanel(),
                    EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, t.onFightOver, t),
                    t.service.openPanel(e.DataConst.MAIN_PANEL)
                })
            },
            this),
            ImageButtonUtil.add(this.btnPetBag,
            function() {
                StatLogger.log("20230310版本系统功能", "系统优化：SPT", '玩家点击界面左下角"精灵背包"按钮'),
                ModuleManager.showModuleByID(10)
            },
            this),
            ImageButtonUtil.add(this.btnRecover,
            function() {
                PetManager.cureAll()
            },
            this)
        },
        i.prototype.onFightOver = function() {
            FightManager.isWin ? (EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this), e.showDialogByGroupId(this.winDialogId,
            function() {},
            this, this.service), this.service.closePanel()) : (EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this), e.showDialogByGroupId(this.loseDialogId,
            function() {},
            this, this.service))
        },
        i.prototype.resize = function() {
            t.prototype.resize.call(this);
            for (var e = 1136,
            i = 640,
            n = egret.lifecycle.stage.stageWidth,
            s = egret.lifecycle.stage.stageHeight,
            r = n / e,
            a = s / i,
            o = Math.max(r, a), l = 0; l < this.resizeObj.length; ++l) this.resizeObj[l].scaleX = this.resizeObj[l].scaleY = o,
            r > a ? this.resizeObj[l].y = (s - i * o) / 2 : this.resizeObj[l].x = (n - e * o) / 2;
            this.animChapter13.scaleX = this.animChapter13.scaleY = o
        },
        i
    } (BasicPanel);
    e.TwelveYearsBattlePanel = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsBattlePanel")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = twelveYearsMainPanelSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent(),
            this.list.itemRenderer = e.TwelveYearsLevelItem,
            SoundManager.stopMusic(),
            this.resize();
            var i = core.manager.BitBuffSetManager.getInstance().getValueByID(7);
            0 >= i && (core.manager.BitBuffSetManager.getInstance().setValueID(7, 1), npcDialog.showDialogIds(273,
            function() {},
            this))
        },
        i.prototype.resize = function() {
            t.prototype.resize.call(this);
            var e = this.mainBg.width,
            i = this.mainBg.height,
            n = egret.lifecycle.stage.stageWidth,
            s = egret.lifecycle.stage.stageHeight,
            r = n / e,
            a = s / i,
            o = Math.max(r, a);
            this.mainBg.scaleX = this.mainBg.scaleY = o,
            r > a ? this.mainBg.y = (s - i * o) / 2 : this.mainBg.x = (n - e * o) / 2
        },
        i.prototype.addEvent = function() {
            var t = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.service.closePanel(),
                EventManager.dispatchEventWith("showActivityCenterLeft")
            },
            this),
            ImageButtonUtil.add(this.btnRewards,
            function() {
                PopViewManager.getInstance().openView(new e.TwelveYearsRewardPop(t.service))
            },
            this)
        },
        i.prototype.update = function() {
            this.list.dataProvider = new eui.ArrayCollection(this.listData),
            this.updateView()
        },
        i.prototype.updateView = function() {
            var t = this;
            this.service.updateValues().then(function(i) {
                var n = [],
                s = t.service.getValue(e.AttrConst.FOREVER_CHAPTER);
                s = s > 12 ? 12 : s,
                t.currChapter = s + 1;
                for (var r = SystemTimerManager.sysBJDate,
                a = r.getMonth() + 1, o = r.getDate(), l = 6; 12 > l; ++l) {
                    var h = e.DataConst.ARR_LEVEL_ITEM_POSITION[l];
                    s >= l && 11 == a && o >= 18 ? n.push({
                        itemIndex: l,
                        pos: h,
                        state: "open",
                        service: t.service
                    }) : 6 == s && 6 == l ? n.push({
                        itemIndex: l,
                        pos: h,
                        state: "tomorrow",
                        service: t.service
                    }) : n.push({
                        itemIndex: l,
                        pos: h,
                        state: "close",
                        service: t.service
                    })
                }
                var c = e.DataConst.ARR_LEVEL_ITEM_POSITION[12];
                s >= 12 && 11 == a && o >= 19 ? n.push({
                    itemIndex: 12,
                    pos: c,
                    state: "open",
                    service: t.service
                }) : 12 == s && 11 == a && 18 == o ? n.push({
                    itemIndex: 12,
                    pos: c,
                    state: "tomorrow",
                    service: t.service
                }) : n.push({
                    itemIndex: 12,
                    pos: c,
                    state: "close",
                    service: t.service
                });
                for (var l = 5; l >= 0; --l) {
                    var _ = e.DataConst.ARR_LEVEL_ITEM_POSITION[l];
                    s >= l ? n.push({
                        itemIndex: l,
                        pos: _,
                        state: "open",
                        service: t.service
                    }) : n.push({
                        itemIndex: l,
                        pos: _,
                        state: "close",
                        service: t.service
                    })
                }
                t.listData = n,
                t.list.dataProvider = new eui.ArrayCollection(t.listData);
                var p = SystemTimerManager.sysBJDate,
                u = p.getMonth() + 1,
                g = p.getDate();
                11 == u && g >= 19 && 13 == t.currChapter && t.showFirstFinalDialog()
            })
        },
        i.prototype.showFirstFinalDialog = function() {
            var e = core.manager.BitBuffSetManager.getInstance().getValueByID(8);
            0 >= e && (core.manager.BitBuffSetManager.getInstance().setValueID(8, 1), npcDialog.showDialogIds(274,
            function() {},
            this))
        },
        i
    } (BasicPanel);
    e.TwelveYearsMainPanel = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsMainPanel")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i(e, i) {
            var n = t.call(this) || this;
            return n.skinName = twelveYearsLevelPopSkin,
            n.levelId = e,
            n.service = i,
            n
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this);
            var n = config.TwelveYearsPromise_Bonus.getItem(this.levelId),
            s = this.processData(n);
            this.txtLevelName.text = n.title,
            this.txtDesc.text = n.des,
            this.imgLevel.source = "twelve_years_main_panel_levelopened_" + this.levelId + "_png";
            for (var r = [], a = 0; a < s.length; a++) r.push({
                itemInfo: s[a],
                state: "levelPop"
            });
            this.list.itemRenderer = e.TwelveYearsLevelPopItem,
            this.list.dataProvider = new eui.ArrayCollection(r),
            ImageButtonUtil.add(this.btnStart,
            function() {
                i.hide(),
                i.showDialog()
            },
            this)
        },
        i.prototype.showDialog = function() {
            var t = this;
            this.service.updateValues().then(function(i) {
                var n = t.service.getValue(e.AttrConst.FOREVER_CHAPTER),
                s = t.service.getValue(e.AttrConst.FOREVER_CHECKPOINT);
                if (n == t.levelId - 1) if (11 == t.levelId && 1 == s) {
                    for (var r = e.DataConst.ARR_CHECK_POINT_GROUP_ID[n][s], a = config.TwelveYearsPromise.getItems(), o = [], l = 0; l < a.length; l++) a[l].groupId === r && o.push(a[l]);
                    e.showDialogById( + o[o.length - 1].id,
                    function() {},
                    t, t.service)
                } else {
                    var r = e.DataConst.ARR_CHECK_POINT_GROUP_ID[n][s];
                    if ( - 1 != r.toString().indexOf("battle")) {
                        var h = r.toString().split("_");
                        t.service.openPanel(e.DataConst.BATTLE_PANEL, [h[1], h[2], h[3], t.levelId])
                    } else e.showDialogByGroupId( + r,
                    function() {},
                    t, t.service)
                } else {
                    var r = e.DataConst.ARR_CHECK_POINT_GROUP_ID[t.levelId - 1][0];
                    e.showDialogByGroupId( + r,
                    function() {},
                    t, t.service)
                }
            })
        },
        i.prototype.manageChapter13Dialog = function(t) {
            var i = egret.localStorage.getItem(e.AttrConst.LOCALSTORAGE_CHECKPOINT);
            switch (t) {
            case 1:
            case 4:
            case 7:
                var n = i.split("_");
                this.service.openPanel(e.DataConst.BATTLE_PANEL, [n[1], n[2], n[3], this.levelId]);
                break;
            case 2:
            case 5:
                var n = i.split("_");
                1 == n.length ? e.showDialogByGroupId( + n[0],
                function() {},
                this, this.service) : e.showDialogByGroupId( + n[2],
                function() {},
                this, this.service);
                break;
            case 3:
            case 6:
            case 8:
                var n = i.split("_");
                1 == n.length ? e.showDialogByGroupId( + n[0],
                function() {},
                this, this.service) : e.showDialogByGroupId( + n[3],
                function() {},
                this, this.service)
            }
        },
        i.prototype.processData = function(e) {
            for (var t = e.bonusID.split(";"), i = [], n = 0; n < t.length; n++) {
                var s = t[n].split("_");
                i.push({
                    itemType: +s[0],
                    infos: [ + s[1], +s[2]]
                })
            }
            return i
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.TwelveYearsLevelPop = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsLevelPop")
} (twelveYearsPromise || (twelveYearsPromise = {}));
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
twelveYearsPromise; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = twelveYearsRewardPopSkin,
            i.service = e,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.list.itemRenderer = e.TwelveYearsRewardPopItem;
            for (var i = this.service.getValue(e.AttrConst.FOREVER_CHAPTER), n = [], s = 1; 13 >= s; ++s) i >= s ? n.push({
                id: s,
                state: "hasGot"
            }) : n.push({
                id: s,
                state: "normal"
            });
            this.list.dataProvider = new eui.ArrayCollection(n),
            this.addEvent()
        },
        i.prototype.addEvent = function() {
            var e = this;
            ImageButtonUtil.add(this.btnClose,
            function() {
                e.hide()
            },
            this),
            ImageButtonUtil.add(this.btnTips,
            function() {
                e.hide(),
                ModuleManager.showModuleByID(249, [3, 24, 0])
            },
            this)
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            ImageButtonUtil.removeAll(this)
        },
        i
    } (PopView);
    e.TwelveYearsRewardPop = t,
    __reflect(t.prototype, "twelveYearsPromise.TwelveYearsRewardPop")
} (twelveYearsPromise || (twelveYearsPromise = {})),
window.twelveYearsPromise = window.twelveYearsPromise || {};
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
generateEUI.paths["resource/eui_skins/comp/dialog/comp/CompDialogSkin.exml"] = window.twelveYearsPromise.CompDialogSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgBtn_next", "imgBtn_sure", "text_desc"],
        this.height = 277,
        this.width = 1136,
        this.elementsContent = [this._Image1_i(), this._Group1_i(), this.imgBtn_sure_i(), this.text_desc_i()],
        this.states = [new eui.State("normal", []), new eui.State("narrator", [new eui.SetProperty("_Image1", "source", "twelve_years_dialog_narratorbg_png"), new eui.SetProperty("text_desc", "y", 130)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(510, 92, 23, 45),
        e.source = "npc_dialog_texture_dialog_bg_png",
        e.top = 0,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.bottom = 14,
        e.height = 70,
        e.right = 18,
        e.width = 70,
        e.elementsContent = [this.imgBtn_next_i()],
        e
    },
    i.imgBtn_next_i = function() {
        var e = new eui.Image;
        return this.imgBtn_next = e,
        e.height = 38,
        e.source = "npc_dialog_imgBtn_next_png",
        e.width = 51,
        e.x = 10,
        e.y = 16,
        e
    },
    i.imgBtn_sure_i = function() {
        var e = new eui.Image;
        return this.imgBtn_sure = e,
        e.height = 36,
        e.source = "npc_dialog_imgBtn_sure_png",
        e.visible = !1,
        e.width = 78,
        e.x = 955,
        e.y = 172,
        e
    },
    i.text_desc_i = function() {
        var e = new eui.Label;
        return this.text_desc = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = -15,
        e.lineSpacing = 10,
        e.size = 20,
        e.text = "文本框行数三行无下滑文本框行数三行无下滑文本框行数三行无下滑无文本框行数三行无下滑文本框行数三行无下滑文本框行数三行无下滑无文本框行数三行无下滑文本框行数三行无下滑",
        e.textColor = 16777215,
        e.width = 936,
        e.y = 106.148,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/dialog/comp/CompNpcTitleSkin.exml"] = window.twelveYearsPromise.CompNpcTitleSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_npcName", "grp"],
        this.height = 56,
        this.width = 325,
        this.elementsContent = [this.grp_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_i = function() {
        var e = new eui.Group;
        return this.grp = e,
        e.elementsContent = [this._Image1_i(), this.txt_npcName_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "npc_dialog_texture_npc_name_bg_png",
        e.width = 325,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_npcName_i = function() {
        var e = new eui.Label;
        return this.txt_npcName = e,
        e.fontFamily = "REEJI",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 28,
        e.text = "NPC单行名字十个字",
        e.textColor = 16777215,
        e.x = 27,
        e.y = 9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/dialog/comp/CompoentNpcSkin.exml"] = window.twelveYearsPromise.CompoentNpcSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["npc"],
        this.height = 40,
        this.width = 40,
        this.elementsContent = [this.npc_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.npc_i = function() {
        var e = new eui.Image;
        return this.npc = e,
        e.source = "",
        e.x = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/dialog/comp/CompOptionSkin.exml"] = window.twelveYearsPromise.CompOptionSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["grp_options", "texture_001"],
        this.currentState = "left",
        this.height = 45,
        this.width = 416,
        this.elementsContent = [this.grp_options_i(), this.texture_001_i()],
        this.states = [new eui.State("left", []), new eui.State("right", [new eui.SetProperty("texture_001", "scaleX", -1), new eui.SetProperty("texture_001", "x", 328.5)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_options_i = function() {
        var e = new eui.Group;
        return this.grp_options = e,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = -24,
        e
    },
    i.texture_001_i = function() {
        var e = new eui.Image;
        return this.texture_001 = e,
        e.anchorOffsetX = 84.5,
        e.anchorOffsetY = 10.5,
        e.height = 21,
        e.source = "npc_dialog_texture_001_png",
        e.width = 169,
        e.x = 102.5,
        e.y = 24,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/dialog/item/ItemOptionSkin.exml"] = window.twelveYearsPromise.ItemOptionSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_option", "grp_touch"],
        this.height = 91,
        this.width = 418,
        this.elementsContent = [this._Image1_i(), this.txt_option_i(), this.grp_touch_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "npc_dialog_texture_002_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txt_option_i = function() {
        var e = new eui.Label;
        return this.txt_option = e,
        e.fontFamily = "MFShangHei",
        e.lineSpacing = 2,
        e.size = 18,
        e.text = "白虎大人，让我们远离城市的喧嚣，\n一起共享这宇宙的繁华吧！",
        e.textAlign = "center",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.width = 288,
        e.x = 65,
        e
    },
    i.grp_touch_i = function() {
        var e = new eui.Group;
        return this.grp_touch = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 55,
        e.touchEnabled = !0,
        e.width = 374,
        e.x = 23,
        e.y = 18,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/dialog/NpcDialogSkin.exml"] = window.twelveYearsDialogSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bgBlack", "BG", "BGCopy", "itemBgMask", "imgItem", "mask1", "mask2", "grpEffect", "imgRabbit7", "imgRabbit6", "imgRabbit5", "imgRabbit4", "imgRabbit3", "imgRabbit2", "imgRabbit1", "grpRabbits", "grpAnim", "pos_npc_left", "pos_npc_right", "pos_option_left", "pos_option_right", "pos_npcTitle_left", "pos_npcTitle_right", "_compNpcModel", "texture_fmask", "_compDialog", "_compNpcTitle", "_compOption", "btnBack", "grpBtnBack"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.grpEffect_i(), this.grpRabbits_i(), this.grpAnim_i(), this.pos_npc_left_i(), this.pos_npc_right_i(), this.pos_option_left_i(), this.pos_option_right_i(), this.pos_npcTitle_left_i(), this.pos_npcTitle_right_i(), this._compNpcModel_i(), this.texture_fmask_i(), this._compDialog_i(), this._compNpcTitle_i(), this._compOption_i(), this.grpBtnBack_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grpEffect_i = function() {
        var e = new eui.Group;
        return this.grpEffect = e,
        e.x = 0,
        e.elementsContent = [this.bgBlack_i(), this._Group1_i(), this._Group2_i(), this.mask1_i(), this.mask2_i()],
        e
    },
    i.bgBlack_i = function() {
        var e = new eui.Image;
        return this.bgBlack = e,
        e.alpha = 1,
        e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_mask_bg_s9_png",
        e.width = 1136,
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.BG_i(), this.BGCopy_i()],
        e
    },
    i.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.alpha = 1,
        e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_mask_bg_s9_png",
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.BGCopy_i = function() {
        var e = new eui.Image;
        return this.BGCopy = e,
        e.alpha = 1,
        e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_mask_bg_s9_png",
        e.width = 1136,
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.itemBgMask_i(), this.imgItem_i()],
        e
    },
    i.itemBgMask_i = function() {
        var e = new eui.Image;
        return this.itemBgMask = e,
        e.alpha = .5,
        e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "common_mask_bg_s9_png",
        e.visible = !1,
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgItem_i = function() {
        var e = new eui.Image;
        return this.imgItem = e,
        e.alpha = 1,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e.x = 568,
        e.y = 320,
        e
    },
    i.mask1_i = function() {
        var e = new eui.Image;
        return this.mask1 = e,
        e.height = 640,
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.mask2_i = function() {
        var e = new eui.Image;
        return this.mask2 = e,
        e.alpha = 1,
        e.height = 640,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpRabbits_i = function() {
        var e = new eui.Group;
        return this.grpRabbits = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.top = 0,
        e.visible = !0,
        e.elementsContent = [this.imgRabbit7_i(), this.imgRabbit6_i(), this.imgRabbit5_i(), this.imgRabbit4_i(), this.imgRabbit3_i(), this.imgRabbit2_i(), this.imgRabbit1_i()],
        e
    },
    i.imgRabbit7_i = function() {
        var e = new eui.Image;
        return this.imgRabbit7 = e,
        e.alpha = 0,
        e.source = "twelve_years_final_boss_imglightrabbit_png",
        e.visible = !0,
        e.x = 330,
        e.y = 440,
        e
    },
    i.imgRabbit6_i = function() {
        var e = new eui.Image;
        return this.imgRabbit6 = e,
        e.alpha = 0,
        e.source = "twelve_years_final_boss_imgwaterrabbit_png",
        e.visible = !0,
        e.x = 1040,
        e.y = 1,
        e
    },
    i.imgRabbit5_i = function() {
        var e = new eui.Image;
        return this.imgRabbit5 = e,
        e.alpha = 0,
        e.source = "twelve_years_final_boss_imgpinkrabbit_png",
        e.visible = !0,
        e.x = 725,
        e.y = 50,
        e
    },
    i.imgRabbit4_i = function() {
        var e = new eui.Image;
        return this.imgRabbit4 = e,
        e.alpha = 0,
        e.source = "twelve_years_final_boss_imggrassrabbit_png",
        e.visible = !0,
        e.x = 2,
        e.y = 130,
        e
    },
    i.imgRabbit3_i = function() {
        var e = new eui.Image;
        return this.imgRabbit3 = e,
        e.alpha = 0,
        e.source = "twelve_years_final_boss_imgearthrabbit_png",
        e.visible = !0,
        e.x = 0,
        e.y = 260,
        e
    },
    i.imgRabbit2_i = function() {
        var e = new eui.Image;
        return this.imgRabbit2 = e,
        e.alpha = 0,
        e.right = 120,
        e.source = "twelve_years_final_boss_imgicerabbit_png",
        e.visible = !0,
        e.y = 80,
        e
    },
    i.imgRabbit1_i = function() {
        var e = new eui.Image;
        return this.imgRabbit1 = e,
        e.alpha = 0,
        e.right = 10,
        e.source = "twelve_years_final_boss_imgbigrabbit_png",
        e.visible = !0,
        e.y = 90,
        e
    },
    i.grpAnim_i = function() {
        var e = new eui.Group;
        return this.grpAnim = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    i.pos_npc_left_i = function() {
        var e = new eui.Group;
        return this.pos_npc_left = e,
        e.left = 0,
        e.y = 290,
        e
    },
    i.pos_npc_right_i = function() {
        var e = new eui.Group;
        return this.pos_npc_right = e,
        e.right = 0,
        e.y = 290,
        e
    },
    i.pos_option_left_i = function() {
        var e = new eui.Group;
        return this.pos_option_left = e,
        e.left = 19,
        e.visible = !0,
        e.y = 434,
        e
    },
    i.pos_option_right_i = function() {
        var e = new eui.Group;
        return this.pos_option_right = e,
        e.right = 43,
        e.y = 434,
        e
    },
    i.pos_npcTitle_left_i = function() {
        var e = new eui.Group;
        return this.pos_npcTitle_left = e,
        e.left = 83,
        e.y = 420,
        e
    },
    i.pos_npcTitle_right_i = function() {
        var e = new eui.Group;
        return this.pos_npcTitle_right = e,
        e.right = 362,
        e.y = 420,
        e
    },
    i._compNpcModel_i = function() {
        var e = new twelveYearsPromise.CompNpcModel;
        return this._compNpcModel = e,
        e.x = 168,
        e.y = 197,
        e
    },
    i.texture_fmask_i = function() {
        var e = new eui.Image;
        return this.texture_fmask = e,
        e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.source = "common_npc_dialog_texture_fmask_png",
        e.top = 0,
        e
    },
    i._compDialog_i = function() {
        var e = new twelveYearsPromise.CompDialog;
        return this._compDialog = e,
        e.bottom = 0,
        e.height = 277,
        e.horizontalCenter = 0,
        e.skinName = "twelveYearsPromise.CompDialogSkin",
        e.visible = !1,
        e.percentWidth = 100,
        e
    },
    i._compNpcTitle_i = function() {
        var e = new twelveYearsPromise.CompNpcTitle;
        return this._compNpcTitle = e,
        e.x = 114,
        e.y = 56,
        e
    },
    i._compOption_i = function() {
        var e = new twelveYearsPromise.CompOptions;
        return this._compOption = e,
        e.x = 380,
        e.y = 253,
        e
    },
    i.grpBtnBack_i = function() {
        var e = new eui.Group;
        return this.grpBtnBack = e,
        e.height = 50,
        e.width = 80,
        e.elementsContent = [this.btnBack_i()],
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "twelve_years_battle_panel_btnback_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TwelveYearsLevelItem.exml"] = window.twelveYearsLevelItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgMist", "grpClosed", "imgLevelOpened", "imgTommorow", "grp"],
        this.height = 171,
        this.width = 208,
        this.elementsContent = [this.grp_i()],
        this.states = [new eui.State("open", [new eui.SetProperty("grpClosed", "visible", !1), new eui.SetProperty("imgTommorow", "visible", !1)]), new eui.State("close", [new eui.SetProperty("imgLevelOpened", "visible", !0), new eui.SetProperty("imgTommorow", "visible", !1)]), new eui.State("tomorrow", [new eui.SetProperty("imgLevelOpened", "visible", !0)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.grp_i = function() {
        var e = new eui.Group;
        return this.grp = e,
        e.touchEnabled = !1,
        e.elementsContent = [this.grpClosed_i(), this.imgLevelOpened_i(), this.imgTommorow_i()],
        e
    },
    i.grpClosed_i = function() {
        var e = new eui.Group;
        return this.grpClosed = e,
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imgMist_i()],
        e
    },
    i.imgMist_i = function() {
        var e = new eui.Image;
        return this.imgMist = e,
        e.source = "twelve_years_main_panel_imgmist_png",
        e.touchEnabled = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgLevelOpened_i = function() {
        var e = new eui.Image;
        return this.imgLevelOpened = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "twelve_years_main_panel_levelopened_6_png",
        e.verticalCenter = 0,
        e.x = -73.99999999999997,
        e.y = -69,
        e
    },
    i.imgTommorow_i = function() {
        var e = new eui.Image;
        return this.imgTommorow = e,
        e.horizontalCenter = 0,
        e.source = "twelve_years_main_panel_imgtommorow_png",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TwelveYearsLevelPopItem.exml"] = window.twelveYearsLevelPopItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgItemBg", "imgIcon"],
        this.elementsContent = [this.imgItemBg_i(), this.imgIcon_i()],
        this.states = [new eui.State("levelPop", []), new eui.State("rewardPop", [new eui.SetProperty("imgItemBg", "width", 79), new eui.SetProperty("imgItemBg", "height", 78), new eui.SetProperty("imgIcon", "width", 55), new eui.SetProperty("imgIcon", "height", 55), new eui.SetProperty("imgIcon", "x", 9), new eui.SetProperty("imgIcon", "y", 9)]), new eui.State("activityCenter", [new eui.SetProperty("imgItemBg", "width", 75), new eui.SetProperty("imgItemBg", "height", 74), new eui.SetProperty("imgIcon", "width", 52), new eui.SetProperty("imgIcon", "height", 52)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imgItemBg_i = function() {
        var e = new eui.Image;
        return this.imgItemBg = e,
        e.height = 60,
        e.source = "twelve_years_level_pop_imgitembg_png",
        e.width = 61,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.height = 42,
        e.horizontalCenter = -3,
        e.verticalCenter = -3,
        e.width = 42,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/TwelveYearsRewardPopItem.exml"] = window.twelveYearsRewardPopItem = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["itemHasGotBg", "itemNormalBg", "imgIcon", "levelNameBg", "txtLevelName", "left", "lock", "txtLockDay", "hasGot", "state", "list"],
        this.elementsContent = [this.itemHasGotBg_i(), this.itemNormalBg_i(), this.left_i(), this.state_i(), this._Scroller1_i()],
        this.states = [new eui.State("normal", [new eui.SetProperty("state", "visible", !1)]), new eui.State("lock", [new eui.SetProperty("hasGot", "visible", !1)]), new eui.State("hasGot", [new eui.SetProperty("itemNormalBg", "visible", !1), new eui.SetProperty("lock", "visible", !1), new eui.SetProperty("txtLockDay", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.itemHasGotBg_i = function() {
        var e = new eui.Image;
        return this.itemHasGotBg = e,
        e.height = 92,
        e.scale9Grid = new egret.Rectangle(3, 4, 14, 14),
        e.source = "twelve_years_level_pop_itemhasgotbg_png",
        e.visible = !0,
        e.width = 373,
        e.x = 2,
        e.y = 7,
        e
    },
    i.itemNormalBg_i = function() {
        var e = new eui.Image;
        return this.itemNormalBg = e,
        e.height = 92,
        e.scale9Grid = new egret.Rectangle(2, 2, 15, 15),
        e.source = "twelve_years_level_pop_itemnormalbg_png",
        e.visible = !0,
        e.width = 373,
        e.x = 2,
        e.y = 7,
        e
    },
    i.left_i = function() {
        var e = new eui.Group;
        return this.left = e,
        e.height = 98,
        e.width = 95,
        e.x = -1,
        e.y = 0,
        e.elementsContent = [this.imgIcon_i(), this.levelNameBg_i(), this.txtLevelName_i()],
        e
    },
    i.imgIcon_i = function() {
        var e = new eui.Image;
        return this.imgIcon = e,
        e.horizontalCenter = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.verticalCenter = 0,
        e
    },
    i.levelNameBg_i = function() {
        var e = new eui.Image;
        return this.levelNameBg = e,
        e.height = 25,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "twelve_years_level_pop_levelnamebg_png",
        e.width = 91,
        e.x = 3,
        e.y = 72.99999999999999,
        e
    },
    i.txtLevelName_i = function() {
        var e = new eui.Label;
        return this.txtLevelName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = .5,
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 16.0000013858555,
        e.text = "火之殿",
        e.textColor = 16762717,
        e.y = 78.99999999999999,
        e
    },
    i.state_i = function() {
        var e = new eui.Group;
        return this.state = e,
        e.x = -5,
        e.y = 1,
        e.elementsContent = [this.lock_i(), this.txtLockDay_i(), this.hasGot_i()],
        e
    },
    i.lock_i = function() {
        var e = new eui.Image;
        return this.lock = e,
        e.source = "twelve_years_level_pop_jiesuo_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLockDay_i = function() {
        var e = new eui.Label;
        return this.txtLockDay = e,
        e.fontFamily = "REEJI",
        e.size = 14,
        e.text = "11.18解锁",
        e.textColor = 16711422,
        e.x = 22,
        e.y = 13,
        e
    },
    i.hasGot_i = function() {
        var e = new eui.Image;
        return this.hasGot = e,
        e.source = "twelve_years_level_pop_yihuode_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 78,
        e.width = 250,
        e.x = 110,
        e.y = 17,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/TwelveYearsBattlePanel.exml"] = window.twelveYearsBattlePanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "tuceng_1", "grpAnim", "BOSS1", "BOSS2", "BOSS3", "btnPetBag", "btnRecover", "btnFight", "a_1", "btnBack", "grpBtnBack"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.bg_i(), this.tuceng_1_i(), this.grpAnim_i(), this.BOSS1_i(), this.BOSS2_i(), this.BOSS3_i(), this.a_1_i(), this.grpBtnBack_i()],
        this.states = [new eui.State("Boss1", [new eui.SetProperty("bg", "visible", !1), new eui.SetProperty("tuceng_1", "visible", !1), new eui.SetProperty("BOSS2", "visible", !1), new eui.SetProperty("BOSS3", "visible", !1)]), new eui.State("Boss2", [new eui.SetProperty("bg", "visible", !0), new eui.SetProperty("BOSS1", "visible", !1), new eui.SetProperty("BOSS3", "visible", !1)]), new eui.State("Boss3", [new eui.SetProperty("bg", "visible", !0), new eui.SetProperty("BOSS1", "visible", !1), new eui.SetProperty("BOSS2", "visible", !1)]), new eui.State("final", [new eui.SetProperty("bg", "visible", !0), new eui.SetProperty("tuceng_1", "visible", !1), new eui.SetProperty("BOSS1", "visible", !1), new eui.SetProperty("BOSS2", "visible", !1), new eui.SetProperty("BOSS3", "visible", !1)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.height = 640,
        e.source = "twelve_years_battle_panel_jzzks_png",
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tuceng_1_i = function() {
        var e = new eui.Image;
        return this.tuceng_1 = e,
        e.alpha = .5,
        e.height = 640,
        e.source = "common_mask_bg_s9_png",
        e.width = 1136,
        e.x = 0,
        e.y = 0,
        e
    },
    i.grpAnim_i = function() {
        var e = new eui.Group;
        return this.grpAnim = e,
        e.horizontalCenter = 0,
        e.verticalCenter = 0,
        e
    },
    i.BOSS1_i = function() {
        var e = new eui.Image;
        return this.BOSS1 = e,
        e.source = "twelve_years_battle_panel_boss1_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.BOSS2_i = function() {
        var e = new eui.Image;
        return this.BOSS2 = e,
        e.horizontalCenter = -56,
        e.source = "twelve_years_battle_panel_boss2_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    i.BOSS3_i = function() {
        var e = new eui.Image;
        return this.BOSS3 = e,
        e.horizontalCenter = -57,
        e.source = "twelve_years_battle_panel_boss3_png",
        e.visible = !0,
        e.y = 0,
        e
    },
    i.a_1_i = function() {
        var e = new eui.Group;
        return this.a_1 = e,
        e.horizontalCenter = 62,
        e.y = 418,
        e.elementsContent = [this.btnPetBag_i(), this.btnRecover_i(), this.btnFight_i()],
        e
    },
    i.btnPetBag_i = function() {
        var e = new eui.Image;
        return this.btnPetBag = e,
        e.source = "twelve_years_battle_panel_btnpetbag_png",
        e.x = 671,
        e.y = 117,
        e
    },
    i.btnRecover_i = function() {
        var e = new eui.Image;
        return this.btnRecover = e,
        e.source = "twelve_years_battle_panel_btnrecover_png",
        e.x = 759,
        e.y = 117,
        e
    },
    i.btnFight_i = function() {
        var e = new eui.Image;
        return this.btnFight = e,
        e.source = "twelve_years_battle_panel_btnfight_png",
        e.x = 221,
        e.y = 39,
        e
    },
    i.grpBtnBack_i = function() {
        var e = new eui.Group;
        return this.grpBtnBack = e,
        e.height = 50,
        e.width = 80,
        e.elementsContent = [this.btnBack_i()],
        e
    },
    i.btnBack_i = function() {
        var e = new eui.Image;
        return this.btnBack = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "twelve_years_battle_panel_btnback_png",
        e.x = 0,
        e.y = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/TwelveYearsMainPanel.exml"] = window.twelveYearsMainPanelSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["mainBg", "btnRewards", "btnClose", "list"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.mainBg_i(), this.btnRewards_i(), this.btnClose_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.mainBg_i = function() {
        var e = new eui.Image;
        return this.mainBg = e,
        e.source = "twelve_years_main_panel_mainbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnRewards_i = function() {
        var e = new eui.Image;
        return this.btnRewards = e,
        e.right = 40,
        e.source = "twelve_years_main_panel_imgrewards_png",
        e.y = 16,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "twelve_years_main_panel_btnclose_png",
        e.x = 27,
        e.y = 14,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 557,
        e.horizontalCenter = -28,
        e.width = 950,
        e.y = 56,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -88,
        e.requestedRowCount = 2,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/TwelveYearsLevelPop.exml"] = window.twelveYearsLevelPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["levelBg", "imgLevel", "levelNameBg", "txtLevelName", "level", "txtDesc", "btnStart", "list"],
        this.height = 229,
        this.width = 710,
        this.elementsContent = [this.levelBg_i(), this.level_i(), this.txtDesc_i(), this.btnStart_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.levelBg_i = function() {
        var e = new eui.Image;
        return this.levelBg = e,
        e.source = "twelve_years_level_pop_levelbg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.level_i = function() {
        var e = new eui.Group;
        return this.level = e,
        e.height = 198,
        e.width = 173,
        e.x = 15,
        e.y = 15,
        e.elementsContent = [this.imgLevel_i(), this.levelNameBg_i(), this.txtLevelName_i()],
        e
    },
    i.imgLevel_i = function() {
        var e = new eui.Image;
        return this.imgLevel = e,
        e.horizontalCenter = 0,
        e.source = "twelve_years_main_panel_levelopened_1_png",
        e.verticalCenter = 0,
        e
    },
    i.levelNameBg_i = function() {
        var e = new eui.Image;
        return this.levelNameBg = e,
        e.source = "twelve_years_level_pop_levelnamebg_png",
        e.x = 33,
        e.y = 159,
        e
    },
    i.txtLevelName_i = function() {
        var e = new eui.Label;
        return this.txtLevelName = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 18.0000010826834,
        e.text = "火之殿",
        e.textColor = 16762717,
        e.y = 166,
        e
    },
    i.txtDesc_i = function() {
        var e = new eui.Label;
        return this.txtDesc = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "完成《十二年之约》系列剧情活动可获得以下奖励完成《十二年之约》系列剧情活动可获得以下奖励完成《十二年之约》系列剧情活动可获得以下奖励						\n",
        e.textColor = 16777215,
        e.width = 363,
        e.x = 213,
        e.y = 36,
        e
    },
    i.btnStart_i = function() {
        var e = new eui.Image;
        return this.btnStart = e,
        e.source = "twelve_years_level_pop_btnstart_png",
        e.x = 490,
        e.y = 146,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 60,
        e.width = 258,
        e.x = 210,
        e.y = 143,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 4,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/TwelveYearsRewardPop.exml"] = window.twelveYearsRewardPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btnTips", "bg", "btnClose", "list"],
        this.elementsContent = [this.btnTips_i(), this.bg_i(), this.btnClose_i(), this._Scroller1_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.btnTips_i = function() {
        var e = new eui.Image;
        return this.btnTips = e,
        e.source = "twelve_years_level_pop_btntips_png",
        e.x = 328,
        e.y = 488,
        e
    },
    i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "twelve_years_level_pop_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.btnClose_i = function() {
        var e = new eui.Image;
        return this.btnClose = e,
        e.source = "twelve_years_level_pop_btnclose_png",
        e.x = 450,
        e.y = 50,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 358,
        e.width = 380,
        e.x = 46,
        e.y = 98,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/twelveYearsPromiseSkin.exml"] = window.twelveYearsPromiseSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["activityCenterBg", "list", "btnGo", "grp", "grpTitleAnim"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.activityCenterBg_i(), this.grp_i(), this.grpTitleAnim_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.activityCenterBg_i = function() {
        var e = new eui.Image;
        return this.activityCenterBg = e,
        e.source = "twelve_years_promise_bg_jpg",
        e.x = 0,
        e.y = 0,
        e
    },
    i.grp_i = function() {
        var e = new eui.Group;
        return this.grp = e,
        e.height = 109,
        e.horizontalCenter = 164,
        e.width = 610,
        e.y = 489,
        e.elementsContent = [this._Image1_i(), this._Scroller1_i(), this.btnGo_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "twelve_years_promise_activitycenter_itembg_png",
        e.x = -56,
        e.y = -17,
        e
    },
    i._Scroller1_i = function() {
        var e = new eui.Scroller;
        return e.height = 74,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 487,
        e.x = 0,
        e.y = 23,
        e.viewport = this.list_i(),
        e
    },
    i.list_i = function() {
        var e = new eui.List;
        return this.list = e,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.btnGo_i = function() {
        var e = new eui.Image;
        return this.btnGo = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "twelve_years_promise_activitycenter_btngo_png",
        e.x = 495,
        e.y = 0,
        e
    },
    i.grpTitleAnim_i = function() {
        var e = new eui.Group;
        return this.grpTitleAnim = e,
        e.horizontalCenter = 0,
        e.touchEnabled = !1,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin);