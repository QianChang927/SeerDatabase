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
pveElvenKingTrial; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.EVENT_UPDATE_VIEW = "event_update_view",
        e.EVENT_TOUCH_PETHEAD = "event_touch_pethead",
        e
    } (BaseModule);
    t.ConstantEvents = e,
    __reflect(e.prototype, "pveElvenKingTrial.ConstantEvents")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._xmlConfig = config.xml.getRes("elvenkingtrial_exchange"),
            t
        }
        return __extends(i, e),
        i.getInstance = function() {
            return i._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.getMonIdlength = function() {
            for (var t = this._xmlConfig.root.items.item,
            e = new Array,
            i = 0; i < t.length; i++) {
                var n = t[i],
                r = n.mon; - 1 == e.indexOf(r) && e.push(r)
            }
            return e
        },
        i.prototype.getMonInfoByMonId = function(t, e) {
            for (var i = this._xmlConfig.root.items.item,
            n = new Object,
            r = 0; r < i.length; r++) {
                var o = i[r];
                if (t === o.mon && e == o.difficulty) {
                    n.id = o.id,
                    n.monId = o.mon,
                    n.difficulty = o.difficulty,
                    n.bsreward = o.bsreward,
                    n.exreward = o.exreward,
                    n.bosslist = o.bosslist,
                    n.unlimite = o.unlimite,
                    n.bosstitle = o.bosstitle;
                    break
                }
            }
            return n
        },
        i.prototype.getRewardInfoByBsrewardId = function(t) {
            for (var e = this._xmlConfig.root.rewards.reward,
            i = new Object,
            n = 0; n < e.length; n++) {
                var r = e[n];
                if (t === r.id) {
                    i.type = r.type,
                    i.realid = r.realid,
                    i.realcnt = r.realcnt;
                    break
                }
            }
            return i
        },
        i.prototype.getRewardInfoByExrewardId = function(t) {
            for (var e = this._xmlConfig.root.rewards.reward,
            i = new Object,
            n = 0; n < e.length; n++) {
                var r = e[n];
                if (t === r.id) {
                    i.type = r.type,
                    i.realid = r.realid,
                    i.realcnt = r.realcnt;
                    break
                }
            }
            return i
        },
        i.prototype.getAllMarkList = function() {
            for (var t = this._xmlConfig.root.rewards.reward,
            e = new Array,
            i = 0; i < t.length; i++) {
                var n = t[i],
                r = n.id;
                if (r >= 58 && 70 >= r) {
                    var o = {};
                    o.rewardid = r,
                    o.type = n.type,
                    o.realid = n.realid,
                    o.realcnt = n.realcnt,
                    e.push(o)
                }
            }
            return e
        },
        i.prototype.getSwapInfoById = function(t) {
            for (var e = this._xmlConfig.root.swaps.swap,
            i = (new Array, 0); i < e.length; i++) {
                var n = e[i];
                if (t == n.id) {
                    var r = new Object;
                    r.needitem = n.needitem,
                    r.needcnt = n.needcnt,
                    n.mon ? r.mon = n.mon: r.mon = "";
                    break
                }
            }
            return r
        },
        i.prototype.getSwapInfoByRewardsId = function(t) {
            for (var e = this._xmlConfig.root.swaps.swap,
            i = (new Array, 0); i < e.length; i++) {
                var n = e[i];
                if (~~n.id >= 19 && t == n.rewards) {
                    var r = new Object;
                    r.needitem = n.needitem,
                    r.needcnt = n.needcnt;
                    break
                }
            }
            return r
        },
        i.prototype._transToExchangeConfig = function(t, e) {
            var i = config.Exchange_clt.getItems(),
            n = [2, 3, 4, 99, 5, 6],
            r = [2, 1, 3, 1, 1, 1];
            t = r[n.indexOf(t)];
            for (var o = 0,
            s = i; o < s.length; o++) {
                var a = s[o];
                if (1 === a.shopid && a.type === t && a.realid === e) return a
            }
            return null
        },
        i.prototype.getDifficultCN = function() {
            var t = ["简单", "普通", "困难"];
            return t[this._currentMode - 1]
        },
        i.prototype.updateAllData = function(e) {
            var i = core.constant.ValueType,
            n = e(i.FOREVER, 108059);
            this._unlockMode = n,
            this._openDoubleFlag = !1,
            this._dailyCrt = e(i.DAILY, 18724),
            this._currentMode = 255 & e(i.DAILY, 18725),
            this._levelStep = e(i.DAILY, 18725) >> 8 & 255,
            this._currentMyRewardList = [],
            this._tiTanItemCnt = e(i.DAILY, 18737);
            for (var r = 18739,
            o = 18743,
            s = r; o >= s; s++) {
                for (var a = 0,
                _ = 0; 4 > _; _++) {
                    var u = 8 * _,
                    h = e(i.DAILY, s);
                    if (a = h >> u & 255, !(a > 0)) break;
                    this._currentMyRewardList.push(a)
                }
                if (0 === a) break
            }
            this.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
        },
        i.prototype.getTiTanCnt = function() {
            return this._tiTanItemCnt
        },
        i.prototype.getMyRewardIds = function() {
            return this._currentMyRewardList
        },
        i.prototype.checkHaveReward = function() {
            return this._currentMyRewardList.length > 0 || this._tiTanItemCnt > 0
        },
        i.prototype.getStep3MapRewardIdById = function(t) {
            return 0
        },
        i.prototype.getAllRewardIds = function() {
            for (var t = [], e = [], i = this._xmlConfig.root.rewards.reward, n = 0; n < i.length; n++) {
                var r = i[n],
                o = ~~r.id,
                s = ~~r.realid;
                1400352 === s || e.indexOf(r) >= 0 || (t.push(o), e.push(s))
            }
            return t
        },
        i.prototype.getDoubleItemUseFlag = function() {
            return this._openDoubleFlag
        },
        i.prototype.getRewardById = function(t) {
            for (var e = this._xmlConfig.root.rewards.reward,
            i = 0; i < e.length; i++) {
                var n = e[i];
                if (t === n.id) return {
                    id: ~~n.id,
                    type: ~~n.type,
                    realid: ~~n.realid,
                    realcnt: ~~n.realcnt
                }
            }
            return null
        },
        i
    } (egret.EventDispatcher);
    t.DataManger = e,
    __reflect(e.prototype, "pveElvenKingTrial.DataManger")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.skinName = t.PetItemSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.gr_btn, this.onImageTouch, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onImageTouch = function(e) {
            EventManager.dispatchEventWith(t.ConstantEvents.EVENT_TOUCH_PETHEAD, !0, this._vo)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(i, this, "selected")
            },
            set: function(t) {
                egret.superSetter(i, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data;
            var t = ["日", "一", "二", "三", "四", "五", "六"];
            this.tx_day.text = "周" + t[this._vo.openDay] + "提升",
            this.pet_group.visible = !this._vo.isOpen,
            this.img_up.visible = this._vo.isOpen;
            var e = "resource/",
            i = e + "assets/elvenKingTrial/small/" + this._vo.petId + ".png";
            this.pet.source = i,
            this.img_flag.visible = this._vo.isHave,
            this.txPetName.text = PetXMLInfo.getName(this._vo.petId),
            this.txPetAc.text = this._vo.bosstitle
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.pet.source = null,
            this.removeEvents(),
            this.removeChildren()
        },
        i
    } (eui.ItemRenderer);
    t.PetItem = e,
    __reflect(e.prototype, "pveElvenKingTrial.PetItem")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        _((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            void 0 === t && (t = null),
            void 0 === i && (i = !1);
            var n = e.call(this, t) || this,
            t = n.data;
            return null != t && (n._curMonId = t.monId, n._curScIndex = t.index, n._isCloseDerectly = t.isclosederectly),
            n.skinName = PveelvenkingtrialSkin,
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            e.prototype.initBtnClose.call(this, "pveelvenkingtrial_title_png", this),
            e.prototype.initBtnHelpById.call(this, 118),
            this.initEvents(),
            this.scroller_title.left = this.scroller_title.right = DeviceInfoManager.adapterOffSetX,
            this._resetUI(),
            this._dataManger = t.DataManger.getInstance(),
            this.initLvInfo(),
            this.updateData(this._openview)
        },
        i.prototype.update = function() {
            this.updateData(this.updateView)
        },
        i.prototype._openview = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, o = this;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        return this._ary = new eui.ArrayCollection,
                        this.scroller_title.viewport = this.viewport_list,
                        this.viewport_list.itemRenderer = t.PetItem,
                        this.viewport_list.dataProvider = this._ary,
                        this._updateBoxState(),
                        this.updateView(),
                        this._curMonId && (e = SystemTimerManager.sysBJDate.getDay(), i = {},
                        i.monId = this._curMonId, i.indexId = this._allLvIds.indexOf(this._curMonId), n = this._dataManger.getMonInfoByMonId(i.monId, 1), i.petId = Number(n.bosslist), i.bosstitle = String(n.bosstitle), i.openDay = n.unlimite, i.openDay == e || 6 == e ? i.isOpen = !0 : i.isOpen = !1, this._panel = new t.PveElvenKingTrialFightView({
                            monId: i.monId,
                            index: i.indexId,
                            selectVo: i
                        },
                        this._isCloseDerectly), this.addChild(this._panel), this._curMonId = null),
                        [4, this._goToIdx(this._curScIndex)];
                    case 1:
                        return s.sent(),
                        r = setTimeout(function() {
                            o._playShowAni()
                        },
                        200),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this),
            this.updateData(this._openview)
        },
        i.prototype.initLvInfo = function() {
            for (var t = this._dataManger.getMonIdlength(), e = new Array, i = 0; i < t.length; i++) e.push(t[i]);
            var n = e;
            this._allLvIds = n
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_btn_rewardBtn, this.onTouchIamgeButtonHandler, this),
            t.DataManger.getInstance().addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_TOUCH_PETHEAD, this.onTouchTapItemRenderHandle1, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            t.DataManger.getInstance().removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this.updateView, this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_TOUCH_PETHEAD, this.onTouchTapItemRenderHandle1, this)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t;
            for (var i = [], n = 0; n < this._allLvIds.length; n++) {
                var r = this._dataManger.getMonInfoByMonId(this._allLvIds[n], 1),
                o = r.bosslist;
                i.push(o)
            }
            KTool.getMultiValue([20134, 18745],
            function(t) {
                e._curDataForver = t,
                KTool.getBitSet([2000037],
                function(t) {
                    e.touchChildren = e.touchEnabled = !0,
                    e._curDataBitbuff = t,
                    KTool.getIsHavingPet(i,
                    function(t) {
                        e._allPetHaveStates = t,
                        null != e._fun && e._fun()
                    })
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList(),
            this.txt_dailyNum.text = "" + Math.max(0, 6 - this._curDataForver[1]);
            var t = 30;
            this.numTx.text = String(this._curDataForver[0] >= t ? t: this._curDataForver[0]) + "/" + t,
            this._curDataForver[0] >= t && this._curDataBitbuff[0] > 0
        },
        i.prototype._updateBoxState = function() {
            var t = this._curDataBitbuff[0],
            e = 1 === t ? "open": "canopen";
            this._boxEffect && this._boxEffect.name == e || (this._boxEffect && (ImageButtonUtil.remove(this._boxEffect), core.manager.MovieClipManager.getInstance().releaseMovieClip(this._boxEffect, !0)), 1 != t && this._curDataForver[0] < 30 ? this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", "open") : this._boxEffect = core.manager.MovieClipManager.getInstance().getMovieClip("box", "blue", e), this._boxEffect.name = e, this._boxEffect.scaleX = .45, this._boxEffect.scaleY = .45, "canopen" === e && (this._boxEffect.touchEnabled = !0, ImageButtonUtil.add(this._boxEffect, this.onTouchIamgeButtonHandler, this)), this.grp_box.addChild(this._boxEffect)),
            1 == t ? this._boxEffect.gotoAndStop(this._boxEffect.totalFrames) : this._curDataForver[0] >= 30 ? this._boxEffect.gotoAndPlay(1, -1) : this._boxEffect.gotoAndStop(1)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            var i = this;
            switch (t.target) {
            case this.img_btn_rewardBtn:
                e.prototype.onClose.call(this),
                ModuleManager.showModule("pveElvenKingTrial", [], null, "PveElvenKingTrialExchangeView");
                break;
            case this._boxEffect:
                if (this._curDataForver[0] >= 30) SocketConnection.sendByQueue(42395, [106, 3, 0, 0],
                function(t) {
                    i.updateData(i._updateBoxState)
                });
                else {
                    var n = {},
                    r = config.Boxordinary.getItem(7);
                    n.id = r.itemid,
                    tipsPop.TipsPop.openItemPop(n)
                }
            }
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.viewport_list.selectedIndex = 0,
            this._selectVo = this._ary.getItemAt(this.viewport_list.selectedIndex),
            this.currentSelectTitleInfo()
        },
        i.prototype.updateRender = function() {
            var t = this._parseTileRenderData();
            this._ary.replaceAll(t),
            this._ary.refresh(),
            this.viewport_list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle1 = function(e) {
            return this._selectVo = e.data,
            this._curDataForver[1] >= 6 ? void Alarm.show("今日可挑战次数不足！") : (this._panel && this._panel.destroy(), this._panel = new t.PveElvenKingTrialFightView({
                monId: this._selectVo.monId,
                index: this.viewport_list.selectedIndex,
                selectVo: this._selectVo
            }), void this.addChild(this._panel))
        },
        i.prototype.currentSelectTitleInfo = function() {},
        i.prototype._parseTileRenderData = function() {
            for (var t = [], e = SystemTimerManager.sysBJDate.getDay(), i = 0; i < this._allLvIds.length; i++) {
                var n = {};
                n.monId = this._allLvIds[i],
                n.indexId = this._allLvIds[i] - 1;
                var r = this._dataManger.getMonInfoByMonId(n.monId, 1);
                n.openDay = r.unlimite,
                n.petId = Number(r.bosslist),
                n.bosstitle = String(r.bosstitle),
                n.isHave = -1 != this._allPetHaveStates.indexOf(n.petId) ? !0 : !1,
                n.openDay == e || 6 == e ? n.isOpen = !0 : n.isOpen = !1,
                t.push(n)
            }
            if (6 != e) for (var o = 0;;) {
                if (o++, 1 == t[0].isOpen || o > 1e3) break;
                t.push(t.shift())
            }
            return t
        },
        i.prototype._goToIdx = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, o;
                return __generator(this,
                function(s) {
                    return e = 307,
                    i = this.scroller_title.width,
                    n = this.scroller_title.viewport.contentWidth,
                    r = n - i,
                    o = this.viewport_list.layout.gap,
                    [2, DisplayUtil.ScrollerToNumAsync(t, "horizontal", e, this.scroller_title, o, 0, r)]
                })
            })
        },
        i.prototype._resetUI = function() {
            this.touchChildren = !1,
            this.viewport_list.visible = !1,
            this.enabled = !1
        },
        i.prototype._playShowAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, e, i, n, i, r, o;
                return __generator(this,
                function(s) {
                    switch (s.label) {
                    case 0:
                        for (t = this.viewport_list.numChildren, e = [], i = 0; t > i; i++) e.push(this.viewport_list.getChildAt(i));
                        for (e.sort(function(t, e) {
                            return t.y - e.y
                        }), n = [], i = 0; i < e.length; i++) r = e[i],
                        r.tab.y = r.height,
                        r.tab.alpha = 0,
                        o = MathUtil.lerp(0, 100, e.length - 1, 500, i),
                        n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r.tab).to({
                            y: 0,
                            alpha: 1
                        },
                        o, egret.Ease.cubicOut)));
                        return this.viewport_list.visible = !0,
                        [4, Promise.all(n)];
                    case 1:
                        return s.sent(),
                        this.touchChildren = !0,
                        this.enabled = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            core.manager.MovieClipManager.getInstance().releaseMovieClip(this._boxEffect),
            this.removeEvents(),
            this._allLvIds = null,
            this._curDataForver = null,
            this._curDataBitbuff = null,
            e.prototype.destroy.call(this),
            this._panel && this._panel.destroy()
        },
        i
    } (BaseModule);
    t.PveElvenKingTrial = e,
    __reflect(e.prototype, "pveElvenKingTrial.PveElvenKingTrial")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
pveElvenKingTrial; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = PveelvenkingtrialalertSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.addEvent()
        },
        e.prototype.addEvent = function() {
            ImageButtonUtil.add(this.img_btn_close, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvent = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.img_btn_close:
                this.hide()
            }
        },
        e.prototype.destroy = function() {
            this.removeEvent(),
            t.prototype.destroy.call(this)
        },
        e
    } (PopView);
    t.PveElvenKingTrialAlert = e,
    __reflect(e.prototype, "pveElvenKingTrial.PveElvenKingTrialAlert")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        _((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._curIndex = 0,
            t._curMonId = 1,
            t.skinName = PveelvenkingtrialexchangeSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents(),
            this._dataManger = t.DataManger.getInstance(),
            this.initLvInfo(),
            this.updateData(this._openview)
        },
        i.prototype._openview = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(i) {
                    return this._ary_head = new eui.ArrayCollection,
                    this.scroller_head.viewport = this.head_list,
                    this.head_list.itemRenderer = t.petHead,
                    this.head_list.dataProvider = this._ary_head,
                    this._ary_mark = new eui.ArrayCollection,
                    this.scroller_mark.viewport = this.mark_list,
                    this.mark_list.itemRenderer = t.markItem,
                    this.mark_list.dataProvider = this._ary_mark,
                    this.updateView(),
                    e = setTimeout(function() {},
                    200),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.show = function() {
            e.prototype.show.call(this),
            this._openview()["catch"](function(t) {})
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.initLvInfo = function() {
            for (var t = this._dataManger.getMonIdlength(), e = new Array, i = 0; i < t.length; i++) e.push(t[i]);
            var n = e;
            this._allMonIds = n;
            var r = new Array;
            this._allMarks = this._dataManger.getAllMarkList();
            for (var o = 0; o < this._allMarks.length; o++) {
                var s = this._allMarks[o];
                r.push(s.rewardid)
            }
            var a = this._dataManger.getSwapInfoByRewardsId(58);
            this.icon_coin1.source = ClientConfig.getItemIcon(a.needitem)
        },
        i.prototype.initEvents = function() {
            this.head_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.add(this.close_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.exchange_btn, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_0, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_1, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon_2, this.onTouchIamgeButtonHandler, this),
            this.type_0.group.addEventListener(eui.UIEvent.CHANGE, this.onRadioButton, this),
            EventManager.addEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this)
        },
        i.prototype.removeEvents = function() {
            this.head_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchTapPetItemRenderHandle, this),
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener(t.ConstantEvents.EVENT_UPDATE_VIEW, this._updateView, this),
            this.type_0.group.removeEventListener(eui.UIEvent.CHANGE, this.onRadioButton, this)
        },
        i.prototype.onRadioButton = function(t) {
            var e = t.target;
            egret.log("radioGroup.selectedValue" + e.selectedValue),
            Number(e.selectedValue) != this._curIndex && (this._curIndex = Number(e.selectedValue), this.updateView())
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t;
            for (var i = new Array,
            n = 0; 19 > n; n++) i.push(1721743 + n);
            ItemManager.updateItems(i,
            function() {
                e._itemNumArr = new Array;
                for (var t = 0; 19 > t; t++) {
                    var n = ItemManager.getNumByID(i[t]);
                    e._itemNumArr.push(n)
                }
            }),
            KTool.getMultiValue([108065],
            function(t) {
                e._curDataForver = t,
                e._h5PetGetNum = 0;
                for (var i = 0; 18 > i; i++) BitUtil.getBit(e._curDataForver[0], i) > 0 && e._h5PetGetNum++;
                KTool.getBitSet([2000038],
                function(t) {
                    e.touchChildren = e.touchEnabled = !0,
                    e._curDataBit = t,
                    null != e._fun && e._fun()
                })
            })
        },
        i.prototype.updateView = function() {
            for (var t = 0; 2 > t; t++) this["type_" + t].selected = !1,
            this["group_show_" + t].visible = !1;
            this["type_" + this._curIndex].selected = !0,
            this["group_show_" + this._curIndex].visible = !0,
            this.txtCount_1.text = core.gameUtil.ConvertItemNumView(this._itemNumArr[18]),
            this.updateRenderList(this._curIndex)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            var e = this;
            switch (t.target) {
            case this.close_btn:
                ModuleManager.hideModule(this),
                ModuleManager.showModule("pveElvenKingTrial", [], null, "PveElvenKingTrial");
                break;
            case this.exchange_btn:
                this._selectPetVo.isCanGet ? SocketConnection.sendByQueue(42395, [106, 1, this._selectPetVo.monId, 0],
                function(t) {
                    e.updateData(e.updateView)
                }) : Alarm.show("所需" + ItemXMLInfo.getName(this._selectPetVo.needitem) + "不足！");
                break;
            case this.icon_0:
                ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], this._selectPetVo.petId, "", AppDoStyle.NULL);
                break;
            case this.icon_2:
                var i = {};
                i.ins = this._threeIds[3],
                tipsPop.TipsPop.openCounterMarkPop(i)
            }
        },
        i.prototype.updateRenderList = function(t) {
            0 == t ? (this.updateHeadRender(), this.head_list.selectedIndex = this._curMonId - 1, this._selectPetVo = this._ary_head.getItemAt(this.head_list.selectedIndex), this.currentSelectPetInfo()) : 1 == t && (this.updateMarkRender(), this.mark_list.selectedIndex = 0, this._selectMarkVo = this._ary_mark.getItemAt(this.head_list.selectedIndex), this.currentSelectMarkInfo())
        },
        i.prototype.updateHeadRender = function() {
            var t = this._parseHeadRenderData();
            this._ary_head.replaceAll(t),
            this._ary_head.refresh(),
            this.head_list.validateNow()
        },
        i.prototype.onTouchTapPetItemRenderHandle = function(t) {
            this._selectPetVo = t.item,
            this._curMonId = this._selectPetVo.monId,
            this.currentSelectPetInfo()
        },
        i.prototype.currentSelectPetInfo = function() {
            var e = "resource/",
            i = e + "assets/pveRewardMall/elevnKingPet/exchange/" + this._selectPetVo.petId + ".png";
            this.pet_0.source = i,
            this.icon_coin13.source = ClientConfig.getItemIcon(this._selectPetVo.needitem),
            this.itemNumTx.text = core.gameUtil.ConvertItemNumView(this._itemNumArr[this._selectPetVo.monId - 1]) + "/" + core.gameUtil.ConvertItemNumView(this._selectPetVo.needcnt),
            BitUtil.getBit(this._curDataForver[0], this._curMonId - 1) > 0 ? (DisplayUtil.setEnabled(this.exchange_btn, !1, !0), this.flg_png.visible = !0) : (DisplayUtil.setEnabled(this.exchange_btn, !0, !1), this.flg_png.visible = !1);
            var n = t.DataManger.getInstance().getSwapInfoById(this._selectPetVo.monId),
            r = n.mon;
            this._threeIds = r.split("_");
            var o = SkillXMLInfo.hideMovesMap[this._selectPetVo.petId];
            this.skilNameTx.text = SkillXMLInfo.getName(o),
            this.icon_2.source = ClientConfig.getMarkPath(this._threeIds[3])
        },
        i.prototype._parseHeadRenderData = function() {
            for (var t = [], e = 0; e < this._allMonIds.length; e++) {
                var i = {};
                i.monId = this._allMonIds[e];
                var n = this._dataManger.getMonInfoByMonId(i.monId, 1);
                i.petId = n.bosslist;
                var n = this._dataManger.getSwapInfoById(i.monId);
                i.needitem = n.needitem,
                i.needcnt = n.needcnt,
                i.isCanGet = this._itemNumArr[i.monId - 1] >= i.needcnt ? !0 : !1,
                t.push(i)
            }
            return t.sort(function(t, e) {
                return t.isCanGet ? -1 : e.isCanGet ? 1 : t.monId < e.monId ? -1 : 1
            }),
            t
        },
        i.prototype.updateMarkRender = function() {
            var t = this._parseMarkRenderData();
            this._ary_mark.replaceAll(t),
            this._ary_mark.refresh(),
            this.mark_list.validateNow()
        },
        i.prototype.onTouchTapMarkItemRenderHandle = function(t) {
            this._selectMarkVo = t.item,
            this.currentSelectMarkInfo()
        },
        i.prototype.currentSelectMarkInfo = function() {},
        i.prototype._parseMarkRenderData = function() {
            for (var t = [], e = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3), i = Math.floor((e - 57600) / 604800 % this._allMarks.length + 1), n = 0; n < this._allMarks.length; n++) {
                var r = {};
                r.marKId = this._allMarks[n].realid,
                r.index = n + 1;
                var o = this._allMarks[n].rewardid,
                s = this._dataManger.getSwapInfoByRewardsId(o);
                r.needitem = s.needitem,
                r.needcnt = s.needcnt,
                r.isCanExchange = this._h5PetGetNum < 18 ? !1 : !0,
                0 == this._curDataBit[0] ? r.isDiscount = r.index == i ? !0 : !1 : r.isDiscount = !1,
                r.exchangeConfig = this._allMarks[n].exchangeConfig,
                t.push(r)
            }
            return t.sort(function(t, e) {
                return t.isDiscount ? -1 : e.isDiscount ? 1 : t.marKId < e.marKId ? -1 : 1
            }),
            t
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this.mark_list.removeChildren(),
            this.head_list.removeChildren(),
            this._itemNumArr = null,
            this.icon_coin1.source = null,
            this.icon_coin13.source = null,
            this.pet_0.source = null,
            this.icon_2.source = null,
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveElvenKingTrialExchangeView = e,
    __reflect(e.prototype, "pveElvenKingTrial.PveElvenKingTrialExchangeView")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
    return new(i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                _(n.next(t))
            } catch(e) {
                o(e)
            }
        }
        function a(t) {
            try {
                _(n["throw"](t))
            } catch(e) {
                o(e)
            }
        }
        function _(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(s, a)
        }
        _((n = n.apply(t, e || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [0, s.value]), i[0]) {
            case 0:
            case 1:
                s = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                o = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (s = _.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < s[1]) {
                    _.label = s[1],
                    s = i;
                    break
                }
                if (s && _.label < s[2]) {
                    _.label = s[2],
                    _.ops.push(i);
                    break
                }
                s[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = e.call(t, _)
        } catch(n) {
            i = [6, n],
            o = 0
        } finally {
            r = s = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, _ = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }),
    a
},
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i(t, i) {
            void 0 === t && (t = null),
            void 0 === i && (i = !1);
            var n = e.call(this, t) || this;
            n._curLvStep = 1;
            var t = n.data;
            n._curMonId = t.monId,
            n._isCloseDerectly = i,
            n._selectVo = t.selectVo;
            var r = SystemTimerManager.sysBJDate.getDay();
            return n._curScIndex = 6 == r ? t.index: 0,
            n.skinName = "PveelvenkingtrialfightSkin",
            n
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            var t = this;
            e.prototype.childrenCreated.call(this),
            this.icon3.source = ClientConfig.getItemIcon(1400153),
            this.icon4.source = ClientConfig.getItemIcon(1400152),
            this.icon5.source = ClientConfig.getItemIcon(2500005),
            e.prototype.initBtnClose.call(this, "pveelvenkingtrial_title_png", this,
            function() {
                t._isCloseDerectly ? ModuleManager.hideModule("pveElvenKingTrial.PveElvenKingTrial") : t.destroy()
            },
            this),
            e.prototype.initBtnHelpById.call(this, 118),
            this.fight_gr.left = DeviceInfoManager.adapterOffSetX,
            this.initEvents(),
            this.initLvInfo(),
            this.updateData(this._openview)
        },
        i.prototype._openview = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(e) {
                    return this.updateView(),
                    t = setTimeout(function() {},
                    200),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.initLvInfo = function() {
            var e = this,
            i = "resource/",
            n = i + "assets/elvenKingTrial/big/pveElvenKingTrialFight_pet_" + (this._curMonId - 1) + ".png";
            RES.getResByUrl(n,
            function(t) {
                e.pet_0.source = t,
                e.pet_0.scale9Grid = new egret.Rectangle(6, 0, 33, 640)
            },
            this, "image");
            for (var r = 0; 3 > r; r++) {
                var o = t.DataManger.getInstance().getMonInfoByMonId(this._curMonId, r + 1),
                s = t.DataManger.getInstance().getRewardInfoByBsrewardId(o.bsreward);
                this["icon" + r + "_1"].source = ClientConfig.getItemIcon(s.realid),
                this["numTx" + r + "_1"].text = this._selectVo.isOpen ? String(s.realcnt + 15) : String(s.realcnt);
                var a = "" + o.exreward,
                _ = a.split("|"),
                u = t.DataManger.getInstance().getRewardInfoByBsrewardId(Number(_[_.length - 1]));
                this["icon" + r + "_2"].source = ClientConfig.getItemIcon(u.realid),
                this["numTx" + r + "_2"].text = u.realcnt > 3 ? "3-" + u.realcnt: String(u.realcnt),
                this._curPetId = o.bosslist;
                var h = this._selectVo.isHave;
                this["icon" + r + "_2"].visible = h,
                this["numTx" + r + "_2"].visible = h,
                this["img_selected_" + r].visible = !1,
                this.touchEnabled = this["icon" + r + "_1"].touchEnabled = !1,
                this["numTx" + r + "_1"].touchEnabled = !1,
                this["icon" + r + "_2"].touchEnabled = !1,
                this["numTx" + r + "_2"].touchEnabled = !1
            }
            var l = [this.lv_0, this.lv_1, this.lv_2];
            gsap.from(l, {
                stagger: .15,
                alpha: 0,
                x: -100
            }),
            this.icon1.source = ClientConfig.getItemIcon(s.realid),
            this.icon2.source = ClientConfig.getItemIcon(u.realid),
            this._itemId1 = s.realid,
            this._itemId2 = u.realid,
            this.txtCoin1.text = Math.min(ItemXMLInfo.getItemInfo(this._itemId1).itemObj.Max, ItemManager.getNumByID(this._itemId1)) + "",
            this.txtCoin2.text = Math.min(ItemXMLInfo.getItemInfo(this._itemId2).itemObj.Max, ItemManager.getNumByID(this._itemId2)) + "",
            ImageButtonUtil.add(this.icon1,
            function() {
                var t = {};
                t.id = s.realid,
                tipsPop.TipsPop.openItemPop(t)
            },
            this),
            ImageButtonUtil.add(this.icon2,
            function() {
                var t = {};
                t.id = u.realid,
                tipsPop.TipsPop.openItemPop(t)
            },
            this)
        },
        i.prototype.initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.lv_0, core.gameUtil.throttle(this.onTouchIamgeButtonHandler, this, 1e3, !0), this),
            ImageButtonUtil.add(this.lv_1, core.gameUtil.throttle(this.onTouchIamgeButtonHandler, this, 1e3, !0), this),
            ImageButtonUtil.add(this.lv_2, core.gameUtil.throttle(this.onTouchIamgeButtonHandler, this, 1e3, !0), this),
            ImageButtonUtil.add(this.imgBtn_pet, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.imgBtn_cure, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.btnInfo, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.icon3,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400153
                })
            },
            this),
            ImageButtonUtil.add(this.icon4,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1400152
                })
            },
            this),
            ImageButtonUtil.add(this.icon5,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 2500005
                })
            },
            this),
            ImageButtonUtil.add(this.imgSwitchOff,
            function() {
                if (!t.isSwitchOn) {
                    var e = ItemManager.getNumByID(1400152);
                    if (0 >= e) return void BubblerManager.getInstance().showText("道具数量不足");
                    SocketConnection.sendWithPromise(42395, [106, 6, 1, 0]).then(function() {
                        t._openDoubleFlags = !0,
                        t.imgSwitchOn.visible = !0,
                        t.imgSwitchOff.visible = !1,
                        t.isSwitchOn = !0,
                        BubblerManager.getInstance().showText("激励模组已开启")
                    })
                }
            },
            this, !1, !1),
            ImageButtonUtil.add(this.imgSwitchOn,
            function() {
                t.isSwitchOn && SocketConnection.sendWithPromise(42395, [106, 6, 0, 0]).then(function() {
                    t._openDoubleFlags = !1,
                    t.imgSwitchOn.visible = !1,
                    t.imgSwitchOff.visible = !0,
                    t.isSwitchOn = !1,
                    BubblerManager.getInstance().showText("激励模组已关闭")
                })
            },
            this, !1, !1)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            KTool.getBitSet([8832],
            function(t) {
                e._openDoubleFlags = 1 == t[0],
                e.isSwitchOn = e._openDoubleFlags,
                e.imgSwitchOff.visible = !e._openDoubleFlags,
                e.imgSwitchOn.visible = e._openDoubleFlags,
                e.txt_itemNum3.text = ItemManager.getNumByID(1400153).toString(),
                e.txt_itemNum4.text = ItemManager.getNumByID(1400152).toString(),
                e.txt_itemNum5.text = ItemManager.getNumByID(2500005).toString()
            }),
            KTool.getMultiValue([108105, 108106, 18745],
            function(t) {
                e._curDataForver = t,
                e.touchChildren = e.touchEnabled = !0;
                var i = e._curMonId >= 10 ? t[1] : t[0];
                e._curLvStep = 1;
                for (var n = 0; 3 > n; n++) e["flag" + n].visible = 1 == KTool.getBit(i, (e._curMonId - 1) % 9 * 3 + n + 1),
                n > 0 && BitUtil.getBit(i, (e._curMonId - 1) % 9 * 3 + (n - 1)) > 0 && e._curLvStep++;
                var r = t[2];
                e._surplusNum = 6 - r,
                e.fightNumTx.text = String(e._surplusNum) + "/6",
                null != e._fun && e._fun(),
                e._surplusNum <= 0 && Alarm.show("今日可挑战次数已用完！",
                function() {
                    e.destroy()
                })
            }),
            this.txtCoin1.text = Math.min(ItemXMLInfo.getItemInfo(this._itemId1).itemObj.Max, ItemManager.getNumByID(this._itemId1)) + "",
            this.txtCoin2.text = Math.min(ItemXMLInfo.getItemInfo(this._itemId2).itemObj.Max, ItemManager.getNumByID(this._itemId2)) + ""
        },
        i.prototype.updateView = function() {},
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.lv_0:
                this.clickLvHandle(1);
                break;
            case this.lv_1:
                this.clickLvHandle(2);
                break;
            case this.lv_2:
                this.clickLvHandle(3);
                break;
            case this.imgBtn_pet:
                ModuleManager.showModule("petBag", ["petBag"]);
                break;
            case this.imgBtn_cure:
                PetManager.cureAll();
                break;
            case this.btnInfo:
                ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: this._curPetId,
                    type: "pet",
                    thisObj: this
                },
                "", AppDoStyle.HIDEN)
            }
        },
        i.prototype.clickLvHandle = function(t) {
            for (var e = this,
            i = 0; 3 > i; i++) this["img_selected_" + i].visible = !1;
            if (this["img_selected_" + (t - 1)].visible = !1, this._curLvStep >= t) {
                if (this["flag" + (t - 1)].visible) return void Alert.show("当前关卡已解锁扫荡资格，是否确认消耗道具进行快速扫荡？",
                function() {
                    ItemManager.getNumByID(1400153) <= 0 && ItemManager.getNumByID(2500005) <= 0 ? BubblerManager.getInstance().showText("道具数量不足") : SocketConnection.sendByQueue(42395, [106, 5, e._curMonId, t],
                    function() {
                        e.updateData(e._openview)
                    })
                },
                function() {
                    e.fight(t)
                });
                this.fight(t)
            } else {
                var n = 2 == t ? "战胜简单难度关卡后解锁": "战胜普通难度关卡后解锁";
                BubblerManager.getInstance().showText(n)
            }
        },
        i.prototype.fight = function(t) {
            var e = this;
            return this._surplusNum <= 0 ? void Alarm.show("剩余挑战次数不足！") : (egret.lifecycle.stage.touchChildren = !1, egret.setTimeout(function() {
                egret.lifecycle.stage.touchChildren = !0
            },
            this, 1e3), void SocketConnection.sendByQueue(CommandID.FIGHT_H5_PVE_BOSS, [106, this._curMonId, t],
            function(t) {
                EventManager.addEventListener(PetFightEvent.ALARM_CLICK, e.onFightOver, e)
            }))
        },
        i.prototype.onFightOver = function(t) {
            EventManager.removeEventListener(PetFightEvent.ALARM_CLICK, this.onFightOver, this),
            this.updateData(this._openview)
        },
        i.prototype.destroy = function() {
            this._curDataForver = null,
            this.icon1.source = null,
            this.icon2.source = null,
            this.pet_0.source = null;
            var t = [this.lv_0, this.lv_1, this.lv_2];
            gsap.killTweensOf(t);
            for (var i = 0; 3 > i; i++) this["icon" + i + "_1"].source = null,
            this["icon" + i + "_2"].source = null;
            this.removeEvents(),
            this.parent && this.parent.update && this.parent.update(),
            e.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.PveElvenKingTrialFightView = e,
    __reflect(e.prototype, "pveElvenKingTrial.PveElvenKingTrialFightView")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = PveElvenKingMarkItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.add(this.btnbg, this.onTouchIamgeButtonHandler, this),
            ImageButtonUtil.add(this.itemIcon, this.onTouchIamgeButtonHandler, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.btnbg:
                if (!this._vo.isCanExchange) return void Alarm.show("收集全部精灵王，即可开启兑换！");
                this.oldExchange();
                break;
            case this.itemIcon:
                var e = {};
                e.ins = this._vo.marKId,
                tipsPop.TipsPop.openCounterMarkPop(e)
            }
        },
        i.prototype.oldExchange = function() {
            var e = this,
            i = ItemManager.getNumByID(this._vo.needitem),
            n = this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt;
            i >= n ? Alert.show("是否确认兑换“" + ItemXMLInfo.getName(this._vo.marKId) + "”？",
            function() {
                SocketConnection.sendByQueue(42395, [106, 2, e._vo.index, 0],
                function(e) {
                    EventManager.dispatchEventWith(t.ConstantEvents.EVENT_UPDATE_VIEW)
                })
            }) : Alarm.show("所需" + ItemXMLInfo.getName(this._vo.needitem) + "不足！")
        },
        i.prototype._showTips = function(t) {
            var e;
            1 === t.type ? (e = {},
            e.id = t.id, tipsPop.TipsPop.openItemPop(e)) : (e = {},
            e.ins = t.id, tipsPop.TipsPop.openCounterMarkPop(e))
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(t.PetItem, this, "selected")
            },
            set: function(e) {
                egret.superSetter(t.PetItem, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.txtName.text = ItemXMLInfo.getName(this._vo.marKId),
            this.txtCount.text = String(this._vo.isDiscount ? .5 * this._vo.needcnt: this._vo.needcnt),
            this.itemIcon.source = ClientConfig.getMarkPath(this._vo.marKId),
            this.coin.source = ClientConfig.getItemIcon(this._vo.needitem),
            this.coin.touchEnabled = !1,
            this.txtCount.touchEnabled = !1
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.itemIcon.source = null,
            this.coin.source = null,
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.markItem = e,
    __reflect(e.prototype, "pveElvenKingTrial.markItem")
} (pveElvenKingTrial || (pveElvenKingTrial = {}));
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
pveElvenKingTrial; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = petHeadItemSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        i.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(i.prototype, "selected", {
            get: function() {
                return egret.superSetter(t.PetItem, this, "selected")
            },
            set: function(e) {
                this.selected_png.visible = e,
                egret.superSetter(t.PetItem, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dataChanged = function() {
            this._vo = this.data,
            this.img_reddot.visible = this._vo.isCanGet,
            this.icon.source = ClientConfig.getPetHeadPath(this._vo.petId),
            this.icon.pixelHitTest = !0
        },
        i.prototype.getVo = function() {
            return this._vo
        },
        i.prototype.destroy = function() {
            this.icon.source = null,
            this.removeEvents()
        },
        i
    } (eui.ItemRenderer);
    t.petHead = e,
    __reflect(e.prototype, "pveElvenKingTrial.petHead")
} (pveElvenKingTrial || (pveElvenKingTrial = {})),
window.pveElvenKingTrial = window.pveElvenKingTrial || {};
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
generateEUI.paths["resource/eui_skins/item/petHeadItemSkin.exml"] = window.petHeadItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon_bg", "icon", "headIcon", "selected_png", "img_reddot", "head"],
        this.height = 100,
        this.width = 100,
        this.elementsContent = [this.head_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.headIcon_i(), this.selected_png_i(), this.img_reddot_i()],
        t
    },
    i.headIcon_i = function() {
        var t = new eui.Group;
        return this.headIcon = t,
        t.height = 88,
        t.width = 88,
        t.x = 3,
        t.y = 2,
        t.elementsContent = [this.icon_bg_i(), this.icon_i()],
        t
    },
    i.icon_bg_i = function() {
        var t = new eui.Image;
        return this.icon_bg = t,
        t.height = 88,
        t.source = "common_icon_bg_style_1_png",
        t.width = 88,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 84,
        t.source = "pveElvenKingTrialExchange_icon_png",
        t.width = 84,
        t.x = 2,
        t.y = 2,
        t
    },
    i.selected_png_i = function() {
        var t = new eui.Image;
        return this.selected_png = t,
        t.source = "pveElvenKingTrialExchange_selected_png",
        t.visible = !1,
        t.x = 1,
        t.y = 0,
        t
    },
    i.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.source = "pveElvenKingTrialExchange_img_reddot_png",
        t.visible = !1,
        t.x = 69,
        t.y = -5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/item/PveElvenKingMarkItemSkin.exml"] = window.PveElvenKingMarkItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "name_bg", "txtName", "itemIcon", "btnbg", "txtCount", "coin", "exchange", "exchangeItem", "mark"],
        this.height = 200,
        this.width = 150,
        this.elementsContent = [this.mark_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.mark_i = function() {
        var t = new eui.Group;
        return this.mark = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.exchangeItem_i()],
        t
    },
    i.exchangeItem_i = function() {
        var t = new eui.Group;
        return this.exchangeItem = t,
        t.anchorOffsetX = 1,
        t.x = 1,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.itemIcon_i(), this.exchange_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 144,
        t.source = "common_icon_bg_style_1_png",
        t.width = 144,
        t.x = 0,
        t.y = 0,
        t
    },
    i.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.source = "pveElvenKingTrialExchange_name_bg_png",
        t.x = 1,
        t.y = 116,
        t
    },
    i.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "圣战之巅",
        t.textColor = 16777215,
        t.x = 37,
        t.y = 120,
        t
    },
    i.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.scaleX = 1.5,
        t.scaleY = 1.5,
        t.source = "pveElvenKingTrialExchange_icon_png",
        t.x = 27,
        t.y = 14,
        t
    },
    i.exchange_i = function() {
        var t = new eui.Group;
        return this.exchange = t,
        t.x = 0,
        t.y = 147,
        t.elementsContent = [this.btnbg_i(), this.txtCount_i(), this.coin_i()],
        t
    },
    i.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.source = "pveElvenKingTrialExchange_btnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 66,
        t.y = 10.96,
        t
    },
    i.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.height = 22,
        t.source = "pveElvenKingTrialExchange_coin_png",
        t.width = 20,
        t.x = 37,
        t.y = 9,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PetItemSkin.exml"] = window.pveElvenKingTrial.PetItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["pet", "txPetName", "txPetAc", "img_up", "img_flag", "day_bg", "tx_day", "pet_group", "touch_btn", "gr_btn", "tab"],
        this.height = 432,
        this.width = 217,
        this.elementsContent = [this.tab_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.tab_i = function() {
        var t = new eui.Group;
        return this.tab = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.cacheAsBitmap = !0,
        t.height = 362,
        t.scaleX = 1.2,
        t.scaleY = 1.2,
        t.touchThrough = !0,
        t.width = 181,
        t.y = 0,
        t.elementsContent = [this.gr_btn_i()],
        t
    },
    i.gr_btn_i = function() {
        var t = new eui.Group;
        return this.gr_btn = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 360.5,
        t.width = 179.5,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.pet_i(), this.txPetName_i(), this.txPetAc_i(), this.img_up_i(), this.img_flag_i(), this.pet_group_i(), this.touch_btn_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveelvenkingtrial_pet_view_pet_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.pet_i = function() {
        var t = new eui.Image;
        return this.pet = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveelvenkingtrial_pet_png",
        t.x = 5.01,
        t.y = 5.36,
        t
    },
    i.txPetName_i = function() {
        var t = new eui.Label;
        return this.txPetName = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 12,
        t.text = "精灵名字九个字",
        t.textColor = 9025023,
        t.x = 49,
        t.y = 330,
        t
    },
    i.txPetAc_i = function() {
        var t = new eui.Label;
        return this.txPetAc = t,
        t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 16,
        t.text = "精灵称号",
        t.textColor = 16777215,
        t.x = 59,
        t.y = 301,
        t
    },
    i.img_up_i = function() {
        var t = new eui.Image;
        return this.img_up = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrial_img_up_png",
        t.x = 121,
        t.y = 230,
        t
    },
    i.img_flag_i = function() {
        var t = new eui.Image;
        return this.img_flag = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveelvenkingtrial_img_flag_png",
        t.x = 5,
        t.y = 5.5,
        t
    },
    i.pet_group_i = function() {
        var t = new eui.Group;
        return this.pet_group = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.day_bg_i(), this.tx_day_i()],
        t
    },
    i.day_bg_i = function() {
        var t = new eui.Image;
        return this.day_bg = t,
        t.source = "pveElvenKingTrial_day_bg_png",
        t.x = 100.99,
        t.y = 5.5,
        t
    },
    i.tx_day_i = function() {
        var t = new eui.Label;
        return this.tx_day = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "周五提升",
        t.textColor = 16777215,
        t.x = 110.66,
        t.y = 9.17,
        t
    },
    i.touch_btn_i = function() {
        var t = new eui.Rect;
        return this.touch_btn = t,
        t.alpha = 0,
        t.height = 362,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 181,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveelvenkingtrialalertSkin.exml"] = window.PveelvenkingtrialalertSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "titleTx", "tx_0", "tx_1", "tx_2", "tx_3", "tx_4", "tx_5", "img_btn_close"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.titleTx_i(), this.tx_0_i(), this.tx_1_i(), this.tx_2_i(), this.tx_3_i(), this.tx_4_i(), this.tx_5_i(), this.img_btn_close_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.percentHeight = 100,
        t.source = "pveElvenKingTrialAlert_BG_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    i.titleTx_i = function() {
        var t = new eui.Image;
        return this.titleTx = t,
        t.source = "pveElvenKingTrialAlert_titleTx_png",
        t.x = 301,
        t.y = 149,
        t
    },
    i.tx_0_i = function() {
        var t = new eui.Label;
        return this.tx_0 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.lineSpacing = 10,
        t.size = 18,
        t.text = "1.挑战精灵王可获得王者晶石和王者精魄，用于兑换精灵王和精灵王系列刻印；\n2.每天三只精灵王战胜后获得的王者晶石数量会提升；\n3.精灵王和精灵王刻印都可以重复兑换；\n4.每周会有1种精灵王刻印开启特惠兑换，敬请关注！",
        t.textColor = 2500699,
        t.width = 504,
        t.x = 312,
        t.y = 256,
        t
    },
    i.tx_1_i = function() {
        var t = new eui.Label;
        return this.tx_1 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "2.精灵王的可挑战次数相互独立；",
        t.textColor = 2500699,
        t.visible = !1,
        t.width = 504,
        t.x = 312,
        t.y = 269,
        t
    },
    i.tx_2_i = function() {
        var t = new eui.Label;
        return this.tx_2 = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.lineSpacing = 4,
        t.size = 18,
        t.text = "3.通过试炼可获得王者晶石和精魄，用于兑换精灵王和精灵王系列刻印；",
        t.textColor = 2500699,
        t.visible = !1,
        t.width = 504,
        t.x = 312,
        t.y = 293,
        t
    },
    i.tx_3_i = function() {
        var t = new eui.Label;
        return this.tx_3 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.lineSpacing = 4,
        t.size = 18,
        t.text = "4.成功兑换18只精灵王后，即可获得兑换精灵王系列刻印的资格；",
        t.textColor = 2500699,
        t.visible = !1,
        t.width = 504,
        t.x = 312,
        t.y = 339,
        t
    },
    i.tx_4_i = function() {
        var t = new eui.Label;
        return this.tx_4 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.lineSpacing = 4,
        t.size = 18,
        t.text = "5.每只精灵王仅可兑换1次，所有精灵王系列刻印都可以重复兑换；",
        t.textColor = 2500699,
        t.visible = !1,
        t.width = 504,
        t.x = 312,
        t.y = 387,
        t
    },
    i.tx_5_i = function() {
        var t = new eui.Label;
        return this.tx_5 = t,
        t.anchorOffsetX = 0,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "6.每周都会有1种精灵王系列刻印半价兑换，敬请关注！",
        t.textColor = 2500699,
        t.visible = !1,
        t.width = 504,
        t.x = 312,
        t.y = 435,
        t
    },
    i.img_btn_close_i = function() {
        var t = new eui.Image;
        return this.img_btn_close = t,
        t.source = "common_close_1_png",
        t.x = 768,
        t.y = 146,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveelvenkingtrialexchangeSkin.exml"] = window.PveelvenkingtrialexchangeSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "yinying", "pet_0", "head_list", "scroller_head", "petPng", "choosebg", "chooseTx", "title_bg", "title_tx", "skilNameTx", "iconbg", "icon_2", "icon_1", "icon_0", "icons", "changeBg", "itemNumTx", "icon_coin13", "exchange_btn", "flg_png", "changes", "item", "icon_bg", "icon", "headIcon", "selected", "img_reddot", "head", "group_show_0", "mark_list", "scroller_mark", "item_bg", "name_bg", "txtName", "itemIcon", "btnbg", "txtCount", "coin", "exchange", "exchangeItem", "group_show_1", "left_bg", "type_0", "type_1", "pet_up", "pet_down", "keyin_down", "keyin_up", "lab", "up_bg", "close_btn", "title", "item_bg1", "icon_coin1", "txtCount_1", "reightUp", "up"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.group_show_0_i(), this.group_show_1_i(), this._Group3_i(), this.up_i()]
    }
    __extends(e, t);
    var i = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.horizontalCenter = 0,
            t.size = 26,
            t.text = "精灵王",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    n = function(t) {
        function e() {
            t.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Image1_i(), this._Label1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "common_tab_up2_bg_png"), new eui.SetProperty("_Label1", "textColor", 6991854)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_tab_down_bg_png"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(e, t);
        var i = e.prototype;
        return i._Image1_i = function() {
            var t = new eui.Image;
            return this._Image1 = t,
            t.percentHeight = 100,
            t.source = "common_tab_down_bg_png",
            t.percentWidth = 100,
            t
        },
        i._Label1_i = function() {
            var t = new eui.Label;
            return this._Label1 = t,
            t.fontFamily = "HuaKangXinZongYi",
            t.horizontalCenter = 0,
            t.size = 26,
            t.text = "刻印",
            t.verticalCenter = 0,
            t
        },
        e
    } (eui.Skin),
    r = e.prototype;
    return r.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_2_png",
        t.top = 0,
        t.verticalCenter = 0,
        t
    },
    r.group_show_0_i = function() {
        var t = new eui.Group;
        return this.group_show_0 = t,
        t.x = -1,
        t.y = 0,
        t.elementsContent = [this.petPng_i(), this.choosebg_i(), this.chooseTx_i(), this.title_bg_i(), this.title_tx_i(), this.item_i(), this.head_i()],
        t
    },
    r.petPng_i = function() {
        var t = new eui.Group;
        return this.petPng = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.yinying_i(), this.pet_0_i(), this.scroller_head_i()],
        t
    },
    r.yinying_i = function() {
        var t = new eui.Image;
        return this.yinying = t,
        t.source = "pveElvenKingTrialExchange_yinying_png",
        t.x = 153,
        t.y = 54,
        t
    },
    r.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.source = "",
        t.x = 169,
        t.y = 70,
        t
    },
    r.scroller_head_i = function() {
        var t = new eui.Scroller;
        return this.scroller_head = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 157.58,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 513.63,
        t.x = 596.79,
        t.y = 463.45,
        t.viewport = this._Group1_i(),
        t
    },
    r._Group1_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.width = 513.63,
        t.elementsContent = [this.head_list_i()],
        t
    },
    r.head_list_i = function() {
        var t = new eui.List;
        return this.head_list = t,
        t.height = 200,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout1_i(),
        t
    },
    r._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 0,
        t.orientation = "rows",
        t.requestedColumnCount = 5,
        t.verticalGap = 0,
        t
    },
    r.choosebg_i = function() {
        var t = new eui.Image;
        return this.choosebg = t,
        t.source = "pveElvenKingTrialExchange_choosebg_png",
        t.x = 706.58,
        t.y = 424.19,
        t
    },
    r.chooseTx_i = function() {
        var t = new eui.Label;
        return this.chooseTx = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "选择精灵王",
        t.textColor = 16777215,
        t.x = 803.58,
        t.y = 428.19,
        t
    },
    r.title_bg_i = function() {
        var t = new eui.Image;
        return this.title_bg = t,
        t.source = "pveElvenKingTrialExchange_title_bg_png",
        t.x = 172.71,
        t.y = 68.2,
        t
    },
    r.title_tx_i = function() {
        var t = new eui.Label;
        return this.title_tx = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "集齐所需精灵王气息即可兑换精灵王及其专属特性、第五技能（附赠专属全能刻印）",
        t.textColor = 16777215,
        t.x = 179.71,
        t.y = 73.76,
        t
    },
    r.item_i = function() {
        var t = new eui.Group;
        return this.item = t,
        t.anchorOffsetY = 0,
        t.height = 118.12,
        t.x = 676,
        t.y = 205.88,
        t.elementsContent = [this.icons_i(), this.changes_i()],
        t
    },
    r.icons_i = function() {
        var t = new eui.Group;
        return this.icons = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 53.03,
        t.width = 280.3,
        t.x = 86.6,
        t.y = -6.68,
        t.elementsContent = [this.skilNameTx_i(), this.iconbg_i(), this.icon_2_i(), this.icon_1_i(), this.icon_0_i()],
        t
    },
    r.skilNameTx_i = function() {
        var t = new eui.Label;
        return this.skilNameTx = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.fontFamily = "黑体",
        t.height = 41.76,
        t.size = 24,
        t.text = "第五技能",
        t.textColor = 16777215,
        t.width = 48.85,
        t.x = 118.19,
        t.y = 1.52,
        t
    },
    r.iconbg_i = function() {
        var t = new eui.Image;
        return this.iconbg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_iconbg_png",
        t.x = 1.92,
        t.y = 1.4,
        t
    },
    r.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_icon_0_png",
        t.x = 192.92,
        t.y = -3.6,
        t
    },
    r.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_icon_0_png",
        t.x = 112.92,
        t.y = -3.6,
        t
    },
    r.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 25,
        t.scaleX = 2,
        t.scaleY = 2,
        t.source = "pveElvenKingTrialExchange_Efficon_png",
        t.width = 25,
        t.x = 32.92,
        t.y = -1.08,
        t
    },
    r.changes_i = function() {
        var t = new eui.Group;
        return this.changes = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 43.94,
        t.width = 272.73,
        t.x = 96.15,
        t.y = 73.05,
        t.elementsContent = [this.changeBg_i(), this.itemNumTx_i(), this.icon_coin13_i(), this.exchange_btn_i(), this.flg_png_i()],
        t
    },
    r.changeBg_i = function() {
        var t = new eui.Image;
        return this.changeBg = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_changeBg_png",
        t.x = 18.23,
        t.y = 1.53,
        t
    },
    r.itemNumTx_i = function() {
        var t = new eui.Label;
        return this.itemNumTx = t,
        t.fontFamily = "黑体",
        t.scaleX = 1,
        t.scaleY = 1,
        t.size = 20,
        t.text = "9999/9999",
        t.textColor = 16777215,
        t.x = 57.78,
        t.y = 12.91,
        t
    },
    r.icon_coin13_i = function() {
        var t = new eui.Image;
        return this.icon_coin13 = t,
        t.height = 26,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_icon_coin1_png",
        t.width = 26,
        t.x = 25.78,
        t.y = 6.91,
        t
    },
    r.exchange_btn_i = function() {
        var t = new eui.Image;
        return this.exchange_btn = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_exchange_btn_png",
        t.x = 178.86,
        t.y = 1.43,
        t
    },
    r.flg_png_i = function() {
        var t = new eui.Image;
        return this.flg_png = t,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveElvenKingTrialExchange_flg_png_png",
        t.x = 174.34,
        t.y = -5.05,
        t
    },
    r.head_i = function() {
        var t = new eui.Group;
        return this.head = t,
        t.visible = !1,
        t.x = 463,
        t.y = 403,
        t.elementsContent = [this.headIcon_i(), this.selected_i(), this.img_reddot_i()],
        t
    },
    r.headIcon_i = function() {
        var t = new eui.Group;
        return this.headIcon = t,
        t.x = 153,
        t.y = 59,
        t.elementsContent = [this.icon_bg_i(), this.icon_i()],
        t
    },
    r.icon_bg_i = function() {
        var t = new eui.Image;
        return this.icon_bg = t,
        t.source = "pveElvenKingTrialExchange_icon_bg_png",
        t.x = 463,
        t.y = 403,
        t
    },
    r.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.source = "pveElvenKingTrialExchange_icon_png",
        t.x = 469,
        t.y = 409,
        t
    },
    r.selected_i = function() {
        var t = new eui.Image;
        return this.selected = t,
        t.source = "pveElvenKingTrialExchange_selected_png",
        t.x = 153,
        t.y = 59,
        t
    },
    r.img_reddot_i = function() {
        var t = new eui.Image;
        return this.img_reddot = t,
        t.source = "pveElvenKingTrialExchange_img_reddot_png",
        t.x = 223,
        t.y = 54,
        t
    },
    r.group_show_1_i = function() {
        var t = new eui.Group;
        return this.group_show_1 = t,
        t.visible = !1,
        t.x = 170,
        t.y = 66,
        t.elementsContent = [this.scroller_mark_i(), this.exchangeItem_i()],
        t
    },
    r.scroller_mark_i = function() {
        var t = new eui.Scroller;
        return this.scroller_mark = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 554.55,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "on",
        t.width = 939.39,
        t.x = 1.36,
        t.y = .28,
        t.viewport = this._Group2_i(),
        t
    },
    r._Group2_i = function() {
        var t = new eui.Group;
        return t.height = 0,
        t.width = 0,
        t.elementsContent = [this.mark_list_i()],
        t
    },
    r.mark_list_i = function() {
        var t = new eui.List;
        return this.mark_list = t,
        t.height = 0,
        t.width = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._TileLayout2_i(),
        t
    },
    r._TileLayout2_i = function() {
        var t = new eui.TileLayout;
        return t.orientation = "rows",
        t.requestedColumnCount = 6,
        t
    },
    r.exchangeItem_i = function() {
        var t = new eui.Group;
        return this.exchangeItem = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.name_bg_i(), this.txtName_i(), this.itemIcon_i(), this.exchange_i()],
        t
    },
    r.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.source = "pveElvenKingTrialExchange_item_bg_png",
        t.x = 3.33,
        t.y = 2.37,
        t
    },
    r.name_bg_i = function() {
        var t = new eui.Image;
        return this.name_bg = t,
        t.source = "pveElvenKingTrialExchange_name_bg_png",
        t.x = 4.33,
        t.y = 118.37,
        t
    },
    r.txtName_i = function() {
        var t = new eui.Label;
        return this.txtName = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "圣战之巅",
        t.textColor = 16777215,
        t.x = 37.33,
        t.y = 122.37,
        t
    },
    r.itemIcon_i = function() {
        var t = new eui.Image;
        return this.itemIcon = t,
        t.source = "pveElvenKingTrialExchange_icon_png",
        t.x = 44.33,
        t.y = 30.37,
        t
    },
    r.exchange_i = function() {
        var t = new eui.Group;
        return this.exchange = t,
        t.x = 3.33,
        t.y = 149.37,
        t.elementsContent = [this.btnbg_i(), this.txtCount_i(), this.coin_i()],
        t
    },
    r.btnbg_i = function() {
        var t = new eui.Image;
        return this.btnbg = t,
        t.source = "pveElvenKingTrialExchange_btnbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "300",
        t.textColor = 8341784,
        t.x = 66,
        t.y = 10.96,
        t
    },
    r.coin_i = function() {
        var t = new eui.Image;
        return this.coin = t,
        t.source = "pveElvenKingTrialExchange_coin_png",
        t.x = 37,
        t.y = 9,
        t
    },
    r._Group3_i = function() {
        var t = new eui.Group;
        return t.percentWidth = 12,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.left_bg_i(), this.lab_i()],
        t
    },
    r.left_bg_i = function() {
        var t = new eui.Image;
        return this.left_bg = t,
        t.source = "comon_left_bg_png",
        t.x = -7,
        t.y = 46,
        t
    },
    r.lab_i = function() {
        var t = new eui.Group;
        return this.lab = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 129.64,
        t.width = 132.52,
        t.x = 0,
        t.y = 96.36,
        t.elementsContent = [this.type_0_i(), this.type_1_i(), this.pet_up_i(), this.pet_down_i(), this.keyin_down_i(), this.keyin_up_i()],
        t
    },
    r.type_0_i = function() {
        var t = new eui.RadioButton;
        return this.type_0 = t,
        t.groupName = "teamType",
        t.label = "",
        t.value = "0",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.skinName = i,
        t
    },
    r.type_1_i = function() {
        var t = new eui.RadioButton;
        return this.type_1 = t,
        t.groupName = "teamType",
        t.label = "",
        t.value = "1",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 88.57,
        t.skinName = n,
        t
    },
    r.pet_up_i = function() {
        var t = new eui.Image;
        return this.pet_up = t,
        t.source = "pveElvenKingTrialExchange_pet_up_png",
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t
    },
    r.pet_down_i = function() {
        var t = new eui.Image;
        return this.pet_down = t,
        t.source = "pveElvenKingTrialExchange_pet_down_png",
        t.visible = !1,
        t.x = 27,
        t.y = 25,
        t
    },
    r.keyin_down_i = function() {
        var t = new eui.Image;
        return this.keyin_down = t,
        t.source = "pveElvenKingTrialExchange_keyin_down_png",
        t.visible = !1,
        t.x = 40,
        t.y = 26,
        t
    },
    r.keyin_up_i = function() {
        var t = new eui.Image;
        return this.keyin_up = t,
        t.source = "pveElvenKingTrialExchange_keyin_up_png",
        t.visible = !1,
        t.x = 1.52,
        t.y = 0,
        t
    },
    r.up_i = function() {
        var t = new eui.Group;
        return this.up = t,
        t.height = 640,
        t.touchEnabled = !1,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.up_bg_i(), this.close_btn_i(), this.title_i(), this.reightUp_i()],
        t
    },
    r.up_bg_i = function() {
        var t = new eui.Image;
        return this.up_bg = t,
        t.source = "common_top_bg_style1_png",
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t
    },
    r.close_btn_i = function() {
        var t = new eui.Image;
        return this.close_btn = t,
        t.source = "common_close_2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    r.title_i = function() {
        var t = new eui.Image;
        return this.title = t,
        t.source = "pveElvenKingTrialExchange_title_png",
        t.x = 112,
        t.y = 7,
        t
    },
    r.reightUp_i = function() {
        var t = new eui.Group;
        return this.reightUp = t,
        t.x = 955,
        t.y = 12,
        t.elementsContent = [this.item_bg1_i(), this.icon_coin1_i(), this.txtCount_1_i()],
        t
    },
    r.item_bg1_i = function() {
        var t = new eui.Image;
        return this.item_bg1 = t,
        t.source = "pveElvenKingTrialExchange_item_bg1_png",
        t.x = 0,
        t.y = 1,
        t
    },
    r.icon_coin1_i = function() {
        var t = new eui.Image;
        return this.icon_coin1 = t,
        t.height = 26,
        t.source = "pveElvenKingTrialExchange_icon_coin1_png",
        t.width = 26,
        t.x = 15,
        t.y = 0,
        t
    },
    r.txtCount_1_i = function() {
        var t = new eui.Label;
        return this.txtCount_1 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "0000",
        t.textColor = 13887988,
        t.x = 64.4,
        t.y = 6.48,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveelvenkingtrialfightSkin.exml"] = window.PveelvenkingtrialfightSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "pet_0", "btnInfo", "pets", "img_btn_lv2", "numTx2_1", "icon2_1", "numTx2_2", "icon2_2", "flag2", "lv_2", "img_btn_lv1", "numTx1_1", "icon1_1", "numTx1_2", "icon1_2", "flag1", "lv_1", "img_btn_lv0", "numTx0_1", "icon0_1", "numTx0_2", "icon0_2", "flag0", "lv_0", "img_selected_2", "img_selected_1", "img_selected_0", "right", "imgBtn_cure", "imgBtn_pet", "fight_gr", "item_tip_bg", "fightNumTx1111", "fightNumTx", "tips", "img_Count_bg_22222", "img_Count_bg", "txtCoin2", "txtCoin1", "icon2", "icon1", "itemNum", "txt_itemNum3", "icon3", "item3", "txt_itemNum5", "icon5", "item5", "txt_itemNum4", "icon4", "imgSwitchOff", "imgSwitchOn", "item4"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.pets_i(), this.fight_gr_i(), this.tips_i(), this.itemNum_i(), this._Group1_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.verticalCenter = 0,
        t
    },
    i.pets_i = function() {
        var t = new eui.Group;
        return this.pets = t,
        t.bottom = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.elementsContent = [this.pet_0_i(), this.btnInfo_i()],
        t
    },
    i.pet_0_i = function() {
        var t = new eui.Image;
        return this.pet_0 = t,
        t.height = 640,
        t.left = 0,
        t.right = 0,
        t.y = 0,
        t
    },
    i.btnInfo_i = function() {
        var t = new eui.Image;
        return this.btnInfo = t,
        t.right = 80,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "pveelvenkingtrial_btninfo_png",
        t.top = 80,
        t
    },
    i.fight_gr_i = function() {
        var t = new eui.Group;
        return this.fight_gr = t,
        t.x = 22,
        t.y = 11,
        t.elementsContent = [this.right_i(), this.imgBtn_cure_i(), this.imgBtn_pet_i()],
        t
    },
    i.right_i = function() {
        var t = new eui.Group;
        return this.right = t,
        t.x = 0,
        t.y = 66,
        t.elementsContent = [this.lv_2_i(), this.lv_1_i(), this.lv_0_i(), this.img_selected_2_i(), this.img_selected_1_i(), this.img_selected_0_i()],
        t
    },
    i.lv_2_i = function() {
        var t = new eui.Group;
        return this.lv_2 = t,
        t.x = 11,
        t.y = 286,
        t.elementsContent = [this.img_btn_lv2_i(), this.numTx2_1_i(), this.icon2_1_i(), this.numTx2_2_i(), this.icon2_2_i(), this.flag2_i()],
        t
    },
    i.img_btn_lv2_i = function() {
        var t = new eui.Image;
        return this.img_btn_lv2 = t,
        t.source = "pveelvenkingtrial_hellbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.numTx2_1_i = function() {
        var t = new eui.Label;
        return this.numTx2_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 48,
        t.y = 82,
        t
    },
    i.icon2_1_i = function() {
        var t = new eui.Image;
        return this.icon2_1 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 20,
        t.y = 79,
        t
    },
    i.numTx2_2_i = function() {
        var t = new eui.Label;
        return this.numTx2_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 160,
        t.y = 82,
        t
    },
    i.icon2_2_i = function() {
        var t = new eui.Image;
        return this.icon2_2 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 137,
        t.y = 79,
        t
    },
    i.flag2_i = function() {
        var t = new eui.Image;
        return this.flag2 = t,
        t.source = "pveElvenKingTrial_icon_png",
        t.x = 260,
        t.y = 0,
        t
    },
    i.lv_1_i = function() {
        var t = new eui.Group;
        return this.lv_1 = t,
        t.x = 8,
        t.y = 150,
        t.elementsContent = [this.img_btn_lv1_i(), this.numTx1_1_i(), this.icon1_1_i(), this.numTx1_2_i(), this.icon1_2_i(), this.flag1_i()],
        t
    },
    i.img_btn_lv1_i = function() {
        var t = new eui.Image;
        return this.img_btn_lv1 = t,
        t.source = "pveelvenkingtrial_img_btn_lv1_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.numTx1_1_i = function() {
        var t = new eui.Label;
        return this.numTx1_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 51,
        t.y = 82,
        t
    },
    i.icon1_1_i = function() {
        var t = new eui.Image;
        return this.icon1_1 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 23,
        t.y = 79,
        t
    },
    i.numTx1_2_i = function() {
        var t = new eui.Label;
        return this.numTx1_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 168,
        t.y = 82,
        t
    },
    i.icon1_2_i = function() {
        var t = new eui.Image;
        return this.icon1_2 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 140,
        t.y = 79,
        t
    },
    i.flag1_i = function() {
        var t = new eui.Image;
        return this.flag1 = t,
        t.source = "pveElvenKingTrial_icon_png",
        t.x = 260,
        t.y = 0,
        t
    },
    i.lv_0_i = function() {
        var t = new eui.Group;
        return this.lv_0 = t,
        t.x = 8,
        t.y = 14,
        t.elementsContent = [this.img_btn_lv0_i(), this.numTx0_1_i(), this.icon0_1_i(), this.numTx0_2_i(), this.icon0_2_i(), this.flag0_i()],
        t
    },
    i.img_btn_lv0_i = function() {
        var t = new eui.Image;
        return this.img_btn_lv0 = t,
        t.source = "pveelvenkingtrial_img_btn_lv0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.numTx0_1_i = function() {
        var t = new eui.Label;
        return this.numTx0_1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 51,
        t.y = 82,
        t
    },
    i.icon0_1_i = function() {
        var t = new eui.Image;
        return this.icon0_1 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 23,
        t.y = 79,
        t
    },
    i.numTx0_2_i = function() {
        var t = new eui.Label;
        return this.numTx0_2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 16765477,
        t.x = 168,
        t.y = 82,
        t
    },
    i.icon0_2_i = function() {
        var t = new eui.Image;
        return this.icon0_2 = t,
        t.height = 20,
        t.source = "pveelvenkingtrial_icon0_1_png",
        t.width = 20,
        t.x = 140,
        t.y = 79,
        t
    },
    i.flag0_i = function() {
        var t = new eui.Image;
        return this.flag0 = t,
        t.source = "pveElvenKingTrial_icon_png",
        t.x = 260,
        t.y = 0,
        t
    },
    i.img_selected_2_i = function() {
        var t = new eui.Image;
        return this.img_selected_2 = t,
        t.source = "pveelvenkingtrial_img_selected_png",
        t.x = 0,
        t.y = 272,
        t
    },
    i.img_selected_1_i = function() {
        var t = new eui.Image;
        return this.img_selected_1 = t,
        t.source = "pveelvenkingtrial_img_selected_png",
        t.x = 0,
        t.y = 136,
        t
    },
    i.img_selected_0_i = function() {
        var t = new eui.Image;
        return this.img_selected_0 = t,
        t.source = "pveelvenkingtrial_img_selected_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.imgBtn_cure_i = function() {
        var t = new eui.Image;
        return this.imgBtn_cure = t,
        t.source = "pveelvenkingtrial_imgbtn_cure_png",
        t.x = 113,
        t.y = 531,
        t
    },
    i.imgBtn_pet_i = function() {
        var t = new eui.Image;
        return this.imgBtn_pet = t,
        t.source = "pveelvenkingtrial_imgbtn_pet_png",
        t.x = 20,
        t.y = 531,
        t
    },
    i.tips_i = function() {
        var t = new eui.Group;
        return this.tips = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.right = 0,
        t.y = 570,
        t.elementsContent = [this.item_tip_bg_i(), this.fightNumTx1111_i(), this.fightNumTx_i()],
        t
    },
    i.item_tip_bg_i = function() {
        var t = new eui.Image;
        return this.item_tip_bg = t,
        t.source = "pveelvenkingtrial_item_tip_bg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.fightNumTx1111_i = function() {
        var t = new eui.Label;
        return this.fightNumTx1111 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "可挑战次数：",
        t.textColor = 12111615,
        t.x = 192,
        t.y = 7,
        t
    },
    i.fightNumTx_i = function() {
        var t = new eui.Label;
        return this.fightNumTx = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99/99",
        t.textColor = 12111615,
        t.x = 280,
        t.y = 7,
        t
    },
    i.itemNum_i = function() {
        var t = new eui.Group;
        return this.itemNum = t,
        t.right = 464,
        t.y = 20,
        t.elementsContent = [this.img_Count_bg_22222_i(), this.img_Count_bg_i(), this.txtCoin2_i(), this.txtCoin1_i(), this.icon2_i(), this.icon1_i()],
        t
    },
    i.img_Count_bg_22222_i = function() {
        var t = new eui.Image;
        return this.img_Count_bg_22222 = t,
        t.source = "pveelvenkingtrial_img_count_bg_png",
        t.x = 187,
        t.y = 6,
        t
    },
    i.img_Count_bg_i = function() {
        var t = new eui.Image;
        return this.img_Count_bg = t,
        t.source = "pveelvenkingtrial_img_count_bg_png",
        t.x = 16,
        t.y = 6,
        t
    },
    i.txtCoin2_i = function() {
        var t = new eui.Label;
        return this.txtCoin2 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 225,
        t.y = 9,
        t
    },
    i.txtCoin1_i = function() {
        var t = new eui.Label;
        return this.txtCoin1 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "99999",
        t.textColor = 12834813,
        t.x = 71,
        t.y = 9,
        t
    },
    i.icon2_i = function() {
        var t = new eui.Image;
        return this.icon2 = t,
        t.height = 30,
        t.source = "",
        t.width = 30,
        t.x = 174,
        t.y = 1,
        t
    },
    i.icon1_i = function() {
        var t = new eui.Image;
        return this.icon1 = t,
        t.height = 30,
        t.source = "",
        t.width = 30,
        t.x = 0,
        t.y = 1,
        t
    },
    i._Group1_i = function() {
        var t = new eui.Group;
        return t.right = 30,
        t.y = 20,
        t.elementsContent = [this.item3_i(), this.item5_i(), this.item4_i()],
        t
    },
    i.item3_i = function() {
        var t = new eui.Group;
        return this.item3 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this.txt_itemNum3_i(), this.icon3_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pveelvenkingtrial_img_count_bg_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum3_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum3 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 9,
        t
    },
    i.icon3_i = function() {
        var t = new eui.Image;
        return this.icon3 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    i.item5_i = function() {
        var t = new eui.Group;
        return this.item5 = t,
        t.x = -124,
        t.y = 0,
        t.elementsContent = [this._Image2_i(), this.txt_itemNum5_i(), this.icon5_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "pveelvenkingtrial_img_count_bg_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum5_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum5 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 60,
        t.y = 9,
        t
    },
    i.icon5_i = function() {
        var t = new eui.Image;
        return this.icon5 = t,
        t.height = 30,
        t.width = 30,
        t.x = 15,
        t.y = 2,
        t
    },
    i.item4_i = function() {
        var t = new eui.Group;
        return this.item4 = t,
        t.x = 123,
        t.y = 0,
        t.elementsContent = [this._Image3_i(), this.txt_itemNum4_i(), this.icon4_i(), this.imgSwitchOff_i(), this.imgSwitchOn_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "pveelvenkingtrial_img_count_bg_png",
        t.width = 114,
        t.x = 0,
        t.y = 6,
        t
    },
    i.txt_itemNum4_i = function() {
        var t = new eui.Label;
        return this.txt_itemNum4 = t,
        t.fontFamily = "MFShangHei",
        t.size = 16,
        t.text = "999",
        t.textColor = 12834813,
        t.x = 64,
        t.y = 9,
        t
    },
    i.icon4_i = function() {
        var t = new eui.Image;
        return this.icon4 = t,
        t.height = 30,
        t.width = 30,
        t.x = 13,
        t.y = 2,
        t
    },
    i.imgSwitchOff_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOff = t,
        t.source = "pveElvenKingTrialFight_imgswitchoff_png",
        t.visible = !0,
        t.x = 120,
        t.y = 7,
        t
    },
    i.imgSwitchOn_i = function() {
        var t = new eui.Image;
        return this.imgSwitchOn = t,
        t.source = "pveElvenKingTrialFight_imgswitchon_png",
        t.visible = !1,
        t.x = 120,
        t.y = 5,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/PveelvenkingtrialSkin.exml"] = window.PveelvenkingtrialSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "top_bg", "btnClose", "helpBtn_png", "top", "viewport_list", "scroller_title", "item_tip_bg", "txt_dailyNum", "txt_1111", "txt_2222", "numTx", "grp_box", "award", "img_btn_rewardBtn"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.top_i(), this.scroller_title_i(), this.award_i(), this.img_btn_rewardBtn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.bottom = 0,
        t.horizontalCenter = 0,
        t.left = 0,
        t.right = 0,
        t.source = "common_ui_bg_3_jpg",
        t.top = 0,
        t.verticalCenter = 0,
        t
    },
    i.top_i = function() {
        var t = new eui.Group;
        return this.top = t,
        t.visible = !1,
        t.percentWidth = 100,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.top_bg_i(), this.btnClose_i(), this.helpBtn_png_i()],
        t
    },
    i.top_bg_i = function() {
        var t = new eui.Image;
        return this.top_bg = t,
        t.source = "common_top_bg_style2_png",
        t.x = 0,
        t.y = 0,
        t
    },
    i.btnClose_i = function() {
        var t = new eui.Group;
        return this.btnClose = t,
        t.height = 48,
        t.width = 205,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image1_i(), this._Image2_i()],
        t
    },
    i._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "pveelvenkingtrial_title_png",
        t.x = 50,
        t.y = 8,
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "common_close_3_png",
        t.x = 13,
        t.y = 4,
        t
    },
    i.helpBtn_png_i = function() {
        var t = new eui.Image;
        return this.helpBtn_png = t,
        t.source = "common_help_icon_1_png",
        t.x = 260,
        t.y = 12,
        t
    },
    i.scroller_title_i = function() {
        var t = new eui.Scroller;
        return this.scroller_title = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 523.76,
        t.left = 35,
        t.right = 35,
        t.scrollPolicyH = "on",
        t.scrollPolicyV = "off",
        t.verticalCenter = 30,
        t.width = 1066,
        t.viewport = this.viewport_list_i(),
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.anchorOffsetY = 0,
        t.x = 0,
        t.y = 0,
        t.layout = this._HorizontalLayout1_i(),
        t
    },
    i._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout;
        return t.gap = 20,
        t
    },
    i.award_i = function() {
        var t = new eui.Group;
        return this.award = t,
        t.anchorOffsetX = 0,
        t.cacheAsBitmap = !0,
        t.horizontalCenter = 0,
        t.width = 1135.52,
        t.y = 560,
        t.elementsContent = [this.item_tip_bg_i(), this.txt_dailyNum_i(), this.txt_1111_i(), this.txt_2222_i(), this.numTx_i(), this.grp_box_i()],
        t
    },
    i.item_tip_bg_i = function() {
        var t = new eui.Image;
        return this.item_tip_bg = t,
        t.anchorOffsetX = 0,
        t.source = "pveelvenkingtrial_item_tip_bg_png",
        t.width = 580,
        t.x = 237,
        t.y = 0,
        t
    },
    i.txt_dailyNum_i = function() {
        var t = new eui.Label;
        return this.txt_dailyNum = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "12",
        t.textColor = 12111615,
        t.x = 463.49,
        t.y = 9,
        t
    },
    i.txt_1111_i = function() {
        var t = new eui.Label;
        return this.txt_1111 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "今日可挑战次数：",
        t.textColor = 12111615,
        t.x = 356,
        t.y = 9,
        t
    },
    i.txt_2222_i = function() {
        var t = new eui.Label;
        return this.txt_2222 = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "本周已挑战次数：",
        t.textColor = 12111615,
        t.x = 555,
        t.y = 9,
        t
    },
    i.numTx_i = function() {
        var t = new eui.Label;
        return this.numTx = t,
        t.fontFamily = "MFShangHei",
        t.size = 14,
        t.text = "100/100",
        t.textColor = 12111615,
        t.x = 661.55,
        t.y = 9,
        t
    },
    i.grp_box_i = function() {
        var t = new eui.Group;
        return this.grp_box = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 39.39,
        t.width = 66.67,
        t.x = 777.22,
        t.y = -5,
        t
    },
    i.img_btn_rewardBtn_i = function() {
        var t = new eui.Image;
        return this.img_btn_rewardBtn = t,
        t.source = "pveElvenKingTrial_img_btn_rewardBtn_png",
        t.visible = !1,
        t.x = 46,
        t.y = 585,
        t
    },
    e
} (eui.Skin);