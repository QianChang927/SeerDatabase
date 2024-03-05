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
sevenDayGift; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this,
            i = config.xml.getAnyRes("BeginnerSevenDaysGift");
            return e._xmlConfig = new common.xml.XmlDocument(i),
            e
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e._instance || (e._instance = new e),
            e._instance
        },
        e.prototype.getDayslength = function() {
            for (var t = new Array,
            e = 0; e < this._xmlConfig.ChildNodes.count; e++) {
                var i = this._xmlConfig.ChildNodes.Item[e],
                n = ~~i.Attributes.GetAttribute("ID").value; - 1 == t.indexOf(n) && t.push(n)
            }
            return t
        },
        e.prototype.getDaysInfoById = function(t) {
            for (var e = new Object,
            i = 0; i < this._xmlConfig.ChildNodes.count; i++) {
                var n = this._xmlConfig.ChildNodes.Item[i];
                if (t === ~~n.Attributes.GetAttribute("ID").value) {
                    e.id = ~~n.Attributes.GetAttribute("ID").value,
                    e.dayadd = ~~n.Attributes.GetAttribute("dayadd").value,
                    e.rewardtype = n.Attributes.GetAttribute("rewardtype").value,
                    e.rewardid = n.Attributes.GetAttribute("rewardid").value,
                    e.rewardcnt = n.Attributes.GetAttribute("rewardcnt").value,
                    e.rewardmonid = ~~n.Attributes.GetAttribute("rewardmonid").value,
                    e.monbonusid = ~~n.Attributes.GetAttribute("monbonusid").value;
                    break
                }
            }
            var r = e.rewardid.split("_"),
            s = [];
            for (var _ in r) - 1 == s.indexOf(r[_]) && s.push(r[_]);
            for (var o = e.rewardtype.split("_"), a = e.rewardcnt.split("_"), h = [], u = 0; u < o.length; u++) 2 == o[u] ? -1 == h.indexOf(a[u]) && h.push(a[u]) : h.push(a[u]);
            return e.rewardidArr = s,
            e.rewardcntArr = h,
            e
        },
        e
    } (egret.EventDispatcher);
    t.DataManger = e,
    __reflect(e.prototype, "sevenDayGift.DataManger")
} (sevenDayGift || (sevenDayGift = {}));
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
    return new(i || (i = Promise))(function(r, s) {
        function _(t) {
            try {
                a(n.next(t))
            } catch(e) {
                s(e)
            }
        }
        function o(t) {
            try {
                a(n["throw"](t))
            } catch(e) {
                s(e)
            }
        }
        function a(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }).then(_, o)
        }
        a((n = n.apply(t, e || [])).next())
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
        for (; a;) try {
            if (r = 1, s && (_ = s[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(_ = _.call(s, i[1])).done) return _;
            switch (s = 0, _ && (i = [0, _.value]), i[0]) {
            case 0:
            case 1:
                _ = i;
                break;
            case 4:
                return a.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                a.label++,
                s = i[1],
                i = [0];
                continue;
            case 7:
                i = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue
                }
                if (3 === i[0] && (!_ || i[1] > _[0] && i[1] < _[3])) {
                    a.label = i[1];
                    break
                }
                if (6 === i[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = i;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(i);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            i = e.call(t, a)
        } catch(n) {
            i = [6, n],
            s = 0
        } finally {
            r = _ = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, s, _, o, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
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
sevenDayGift; !
function(t) {
    var e = function(e) {
        function i(t) {
            void 0 === t && (t = null);
            var i = e.call(this, t) || this;
            return i._curGetNum = 0,
            i._curDay = 1,
            i.skinName = SevendaygiftSkin,
            i
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this.initEvents(),
            this._resetUI(),
            this._dataManger = t.DataManger.getInstance(),
            this.initLvInfo(),
            this.updateData(this._openview)
        },
        i.prototype._openview = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i = this;
                return __generator(this,
                function(n) {
                    return this._ary = new eui.ArrayCollection,
                    this.scroller_title.viewport = this.viewport_list,
                    this.viewport_list.itemRenderer = t.DaysRewardItem,
                    this.viewport_list.dataProvider = this._ary,
                    this.updateView(),
                    e = setTimeout(function() {
                        i._playShowAni()
                    },
                    200),
                    [2, Promise.resolve()]
                })
            })
        },
        i.prototype.hide = function() {
            e.prototype.hide.call(this)
        },
        i.prototype.initLvInfo = function() {
            for (var t = this._dataManger.getDayslength(), e = new Array, i = 0; i < t.length; i++) e.push(t[i]);
            var n = e;
            this._allIds = n,
            console.log("当前关卡信息为", n),
            this._numX = this.star_0.x - this.airship_gr.x,
            this._numY = this.star_0.y - this.airship_gr.y
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.imge_close_btn, this.onTouchIamgeButtonHandler, this),
            EventManager.addEventListener("event_play_ani", this._playAirshipAni, this),
            EventManager.addEventListener("event_update_view", this._updateView, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            EventManager.removeEventListener("event_update_view", this._updateView, this),
            EventManager.removeEventListener("event_play_ani", this._playAirshipAni, this)
        },
        i.prototype._updateView = function() {
            this.updateData(this.updateView)
        },
        i.prototype.setUITouchEnabled = function(t) {
            this.touchEnabled = t,
            this.enabled = t
        },
        i.prototype._playAirshipAni = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return this.setUITouchEnabled(!1),
                        this.airship_gr.visible = !0,
                        this.imge_startType.alpha = 0,
                        e = [],
                        i = this["star_" + this._curGetNum].x - this._numX,
                        n = this["star_" + this._curGetNum].y - this._numY,
                        e.push(common.TweenUtil.TweenToPromise(egret.Tween.get(this.airship_gr).to({
                            x: i,
                            y: n,
                            alpha: 1
                        },
                        1e3, egret.Ease.sineInOut))),
                        [4, common.TweenUtil.createAllTween(egret.Tween.get(this.imge_startType).to({
                            alpha: 1
                        },
                        200, egret.Ease.cubicOut))];
                    case 1:
                        return r.sent(),
                        [4, Promise.all(e)];
                    case 2:
                        return r.sent(),
                        [4, common.TweenUtil.createAllTween(egret.Tween.get(this.imge_startType).to({
                            alpha: 0
                        },
                        100, egret.Ease.cubicOut))];
                    case 3:
                        return r.sent(),
                        this.setUITouchEnabled(!0),
                        PopViewManager.getInstance().openView(new t.SevenDayGiftPopView, null, this._curDay),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.updateData = function(t) {
            var e = this;
            this.touchChildren = this.touchEnabled = !1,
            this._fun = t,
            KTool.getMultiValue([108108],
            function(t) {
                e._curGetNum = t[0],
                KTool.getBitSet([1000589],
                function(t) {
                    e.touchChildren = e.touchEnabled = !0,
                    e._curDataBitbuff = t,
                    e._curDay = e._curDataBitbuff[0] > 0 ? e._curGetNum: e._curGetNum + 1,
                    null != e._fun && e._fun()
                })
            })
        },
        i.prototype.updateView = function() {
            this.updateRenderList();
            for (var t = 0; 7 > t; t++) {
                var e = this._data[t],
                i = this["star_" + t];
                i.sethasGet(e)
            }
            this.imge_bar.scaleY = (this._curDay - 1) / 6,
            this._curGetNum > 0 ? (this.airship_gr.visible = !0, this.imge_startType.visible = !1, this.airship_gr.x = this["star_" + (this._curGetNum - 1)].x - this._numX, this.airship_gr.y = this["star_" + (this._curGetNum - 1)].y - this._numY) : this.airship_gr.visible = !1,
            this.imge_completionStatus_0.visible = this._curGetNum >= 7 ? !1 : !0,
            this.imge_completionStatus_1.visible = this._curGetNum >= 7 ? !0 : !1
        },
        i.prototype.onTouchIamgeButtonHandler = function(t) {
            switch (t.target) {
            case this.imge_close_btn:
                this.onClose();
                break;
            case this._boxEffect:
            }
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.viewport_list.selectedIndex = 0,
            this._selectVo = this._ary.getItemAt(this.viewport_list.selectedIndex),
            this.currentSelectTitleInfo()
        },
        i.prototype.updateRender = function() {
            this._data = this._parseTileRenderData(),
            this._ary.replaceAll(this._data),
            this._ary.refresh(),
            this.viewport_list.validateNow()
        },
        i.prototype.onTouchTapItemRenderHandle1 = function(t) {
            this._selectVo = t.data
        },
        i.prototype.currentSelectTitleInfo = function() {},
        i.prototype._parseTileRenderData = function() {
            for (var t = [], e = 0; e < this._allIds.length; e++) {
                var i = {};
                i.Id = this._allIds[e],
                i.Id < this._curDay ? (i.type = 1, i.isGetReward = !1) : i.Id == this._curDay ? (i.type = 2, i.isGetReward = this._curDataBitbuff[0] > 0) : (i.type = 3, i.isGetReward = !1),
                this._curDataBitbuff[0] > 0 && i.Id == this._curGetNum + 1 ? i.isShowTomorrow = !0 : i.isShowTomorrow = !1;
                var n = this._dataManger.getDaysInfoById(i.Id);
                i.rewardidArr = n.rewardidArr,
                i.rewardcntArr = n.rewardcntArr,
                i.rewardmonid = Number(n.rewardmonid),
                t.push(i)
            }
            return t
        },
        i.prototype._goToIdx = function(t) {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, i, n, r, s;
                return __generator(this,
                function(_) {
                    return e = 307,
                    i = this.scroller_title.width,
                    n = this.scroller_title.viewport.contentWidth,
                    r = n - i,
                    s = this.viewport_list.layout.gap,
                    [2, DisplayUtil.ScrollerToNumAsync(t, "horizontal", e, this.scroller_title, s, 0, r)]
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
                var t, e, i, n, i, r, s;
                return __generator(this,
                function(_) {
                    switch (_.label) {
                    case 0:
                        for (console.log(String(this.viewport_list.dataProvider.length)), t = this.viewport_list.numChildren, e = [], i = 0; t > i; i++) e.push(this.viewport_list.getChildAt(i));
                        for (e.sort(function(t, e) {
                            return t.y - e.y
                        }), n = [], i = 0; i < e.length; i++) r = e[i],
                        r.tab.y = r.height,
                        r.tab.alpha = 0,
                        s = MathUtil.lerp(0, 200, e.length - 1, 500, i),
                        n.push(common.TweenUtil.TweenToPromise(egret.Tween.get(r.tab).to({
                            y: 0,
                            alpha: 1
                        },
                        s, egret.Ease.cubicOut)));
                        return this.viewport_list.visible = !0,
                        [4, Promise.all(n)];
                    case 1:
                        return _.sent(),
                        this.touchChildren = !0,
                        this.enabled = !0,
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            e.prototype.destroy.call(this),
            this._panel && this._panel.destroy()
        },
        i
    } (BaseModule);
    t.SevenDayGift = e,
    __reflect(e.prototype, "sevenDayGift.SevenDayGift")
} (sevenDayGift || (sevenDayGift = {}));
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
sevenDayGift; !
function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.skinName = SevendaygiftpopviewSkin,
            t
        }
        return __extends(i, e),
        i.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        i.prototype.initEvents = function() {
            ImageButtonUtil.add(this.img_BtnClose, this.onTouchTapImageButton, this),
            ImageButtonUtil.add(this.img_getBtn, this.onTouchTapImageButton, this)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.onTouchTapImageButton = function(t) {
            var e = this;
            switch (t.target) {
            case this.img_BtnClose:
                this.hide();
                break;
            case this.img_getBtn:
                SocketConnection.sendByQueue(42395, [110, this._curDayId, 0, 0],
                function() {
                    e.hide(),
                    EventManager.dispatchEventWith("event_update_view")
                })
            }
        },
        i.prototype._parseData = function() {
            this._curDayId = this._data
        },
        i.prototype._upDateView = function() {
            for (var e = 0; 7 > e; e++) this["titleTx_" + e].visible = !1;
            this["titleTx_" + (this._curDayId - 1)].visible = !1;
            for (var i = t.DataManger.getInstance().getDaysInfoById(this._curDayId), n = i.rewardidArr, r = i.rewardcntArr, s = Number(i.rewardmonid), e = 0; 3 > e; e++) e < n.length ? (this["itemIcon_" + e].setInfo(n[e], r[e]), this["itemIcon_" + e].visible = !0) : s > 0 && this["itemIcon_" + e].setInfo(s, 1, 1)
        },
        i.prototype.destroy = function() {
            e.prototype.destroy.call(this)
        },
        i
    } (PopView);
    t.SevenDayGiftPopView = e,
    __reflect(e.prototype, "sevenDayGift.SevenDayGiftPopView")
} (sevenDayGift || (sevenDayGift = {}));
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
sevenDayGift; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._txArr = ["α", "β", "γ", "δ", "ε", "ϝ", "ζ"],
            e.skinName = dayRewardItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initEvents(),
            this.itemFlag_gr.touchEnabled = !1,
            this.itemFlag_gr.touchChildren = !1
        },
        e.prototype.initEvents = function() {
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        e.prototype.removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(e.prototype, "selected", {
            get: function() {
                return egret.superSetter(e, this, "selected")
            },
            set: function(t) {
                egret.superSetter(e, this, "selected")
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dataChanged = function() {
            this._vo = this.data,
            this._vo.rewardmonid > 0 && (this._vo.rewardidArr.push(this._vo.rewardmonid), this._vo.rewardcntArr.push(1));
            for (var t = 0; 3 > t; t++) t < this._vo.rewardidArr.length ? (t == this._vo.rewardidArr.length - 1 && this._vo.rewardmonid > 0 ? this["itemIcon_" + t].setInfo(this._vo.rewardidArr[t], this._vo.rewardcntArr[t], !0) : this["itemIcon_" + t].setInfo(this._vo.rewardidArr[t], this._vo.rewardcntArr[t]), this["itemIcon_" + t].sethasGet(this._vo.isGetReward), this["itemIcon_" + t].visible = !0) : this["itemIcon_" + t].visible = !1;
            this.itemFlag_choose.visible = 2 == this._vo.type ? !0 : !1,
            this.itemFlag_cannot.visible = 3 == this._vo.type ? !0 : !1,
            this.dayNumTx.text = String(this._vo.Id),
            this.signTx.text = this._txArr[this._vo.Id - 1]
        },
        e.prototype.getVo = function() {
            return this._vo
        },
        e.prototype.destroy = function() {
            this.removeEvents(),
            this.removeChildren()
        },
        e
    } (eui.ItemRenderer);
    t.DaysRewardItem = e,
    __reflect(e.prototype, "sevenDayGift.DaysRewardItem")
} (sevenDayGift || (sevenDayGift = {}));
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
sevenDayGift; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = itemIconSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.imge_flag_0.visible = !1,
            this.initEvents()
        },
        e.prototype.sethasGet = function(t) {
            this.imge_flag_0.visible = t
        },
        e.prototype.setInfo = function(t, e, i) {
            void 0 === e && (e = 1),
            void 0 === i && (i = !1),
            this._itemId = t,
            this._isPet = i;
            var n;
            i ? (this.icon_0.source = ClientConfig.getPetHeadPath(t), n = e) : t > 1e4 && 1e5 > t ? (this.icon_0.source = ClientConfig.getMarkPath(t), n = 2 * e) : (this.icon_0.source = ClientConfig.getItemIcon(t), n = e),
            this.txtCount.text = String(n)
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.icon_0, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.icon_0:
                if (!this._isPet) if (this._itemId > 1e4 && this._itemId < 1e5) {
                    var e = {};
                    e.ins = this._itemId,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                } else tipsPop.TipsPop.openItemPop({
                    id: this._itemId
                })
            }
        },
        e
    } (eui.Component);
    t.ItemIcon = e,
    __reflect(e.prototype, "sevenDayGift.ItemIcon")
} (sevenDayGift || (sevenDayGift = {}));
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
sevenDayGift; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = itemIcon88X88Skin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        e.prototype.setInfo = function(t, e, i) {
            void 0 === i && (i = 0),
            this.item_Group.visible = !1,
            this.skill_group.visible = !1,
            this.pet_group.visible = !1;
            var n;
            0 == i ? (this._itemId = t, this._itemId > 1e4 && this._itemId < 1e5 ? (this.icon.source = ClientConfig.getMarkPath(this._itemId), n = 2 * e) : (this.icon.source = ClientConfig.getItemIcon(this._itemId), n = e), this.txtCount.text = String(n), this.item_Group.visible = !0) : 1 == i && (this._petId = t, this.petHeadIcon.source = ClientConfig.getPetHeadPath(this._petId), this.txtCount_2.text = String(e), this.pet_group.visible = !0)
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.icon, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.icon:
                if (this._itemId > 1e4 && this._itemId < 1e5) {
                    var e = {};
                    e.ins = this._itemId,
                    tipsPop.TipsPop.openCounterMarkPop(e)
                } else tipsPop.TipsPop.openItemPop({
                    id: this._itemId
                })
            }
        },
        e
    } (eui.Component);
    t.ItemIcon80x80 = e,
    __reflect(e.prototype, "sevenDayGift.ItemIcon80x80")
} (sevenDayGift || (sevenDayGift = {}));
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
sevenDayGift; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.skinName = starItemSkin,
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.initEvents()
        },
        e.prototype.initEvents = function() {
            ImageButtonUtil.add(this.canLitType, this.onTouchTapImageButton, this)
        },
        e.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        e.prototype.onTouchTapImageButton = function(t) {
            switch (t.target) {
            case this.canLitType:
                EventManager.dispatchEventWith("event_play_ani")
            }
        },
        e.prototype.sethasGet = function(t) {
            this._info = t,
            1 == t.type ? this.imge_star_Lit.visible = !0 : this.imge_star_Lit.visible = t.isGetReward ? !0 : !1,
            t.isGetReward || 2 != t.type ? this.star_CanLit.visible = !1 : this.star_CanLit.visible = !0,
            this.imge_star_notLit.visible = 3 == t.type ? !0 : !1,
            this.nextGetPng.visible = t.isShowTomorrow
        },
        e
    } (eui.Component);
    t.StarItem = e,
    __reflect(e.prototype, "sevenDayGift.StarItem")
} (sevenDayGift || (sevenDayGift = {}));
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
generateEUI.paths["resource/eui_skins/items/itemIconSkin.exml"] = window.itemIconSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon_0", "txtCount", "imge_flag_0", "item_group_0"],
        this.height = 46,
        this.width = 46,
        this.elementsContent = [this.item_group_0_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_group_0_i = function() {
        var t = new eui.Group;
        return this.item_group_0 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.item_bg_i(), this.icon_0_i(), this.txtCount_i(), this.imge_flag_0_i()],
        t
    },
    i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 46,
        t.source = "common_icon_bg_style_1_png",
        t.width = 46,
        t.x = 0,
        t.y = 0,
        t
    },
    i.icon_0_i = function() {
        var t = new eui.Image;
        return this.icon_0 = t,
        t.height = 34,
        t.horizontalCenter = 0,
        t.source = "sevenDayGift_icon_png",
        t.verticalCenter = 0,
        t.width = 35,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.height = 14,
        t.size = 14,
        t.text = "500000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 46,
        t.x = -1,
        t.y = 31,
        t
    },
    i.imge_flag_0_i = function() {
        var t = new eui.Image;
        return this.imge_flag_0 = t,
        t.bottom = 0,
        t.height = 23,
        t.right = 2,
        t.source = "sevenDayGift_imge_flag_0_png",
        t.width = 23,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/dayRewardItemSkin.exml"] = window.dayRewardItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_itemBg", "signTx", "Daytitle", "dayNumTx", "itemIcon_2", "itemIcon_1", "itemIcon_0", "itemFlag_cannot", "itemFlag_choose", "itemFlag_gr", "tab"],
        this.height = 74,
        this.width = 258,
        this.elementsContent = [this.tab_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.tab_i = function() {
        var t = new eui.Group;
        return this.tab = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imge_itemBg_i(), this.signTx_i(), this.Daytitle_i(), this.dayNumTx_i(), this.itemIcon_2_i(), this.itemIcon_1_i(), this.itemIcon_0_i(), this.itemFlag_gr_i()],
        t
    },
    i.imge_itemBg_i = function() {
        var t = new eui.Image;
        return this.imge_itemBg = t,
        t.height = 74,
        t.source = "sevenDayGift_imge_itemBg_png",
        t.width = 258,
        t.x = 0,
        t.y = 0,
        t
    },
    i.signTx_i = function() {
        var t = new eui.Label;
        return this.signTx = t,
        t.fontFamily = "黑体",
        t.size = 22,
        t.text = "α",
        t.textColor = 4032989,
        t.x = 226,
        t.y = 40,
        t
    },
    i.Daytitle_i = function() {
        var t = new eui.Label;
        return this.Daytitle = t,
        t.fontFamily = "黑体",
        t.size = 32,
        t.text = "Day",
        t.textColor = 16777215,
        t.x = 153,
        t.y = 26,
        t
    },
    i.dayNumTx_i = function() {
        var t = new eui.Label;
        return this.dayNumTx = t,
        t.fontFamily = "黑体",
        t.size = 38,
        t.text = "1",
        t.textColor = 16777215,
        t.x = 197.48,
        t.y = 16.88,
        t
    },
    i.itemIcon_2_i = function() {
        var t = new sevenDayGift.ItemIcon;
        return this.itemIcon_2 = t,
        t.height = 46,
        t.skinName = "itemIconSkin",
        t.width = 46,
        t.x = 103,
        t.y = 14,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new sevenDayGift.ItemIcon;
        return this.itemIcon_1 = t,
        t.height = 46,
        t.skinName = "itemIconSkin",
        t.width = 46,
        t.x = 56,
        t.y = 14,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new sevenDayGift.ItemIcon;
        return this.itemIcon_0 = t,
        t.height = 46,
        t.skinName = "itemIconSkin",
        t.width = 46,
        t.x = 9,
        t.y = 14,
        t
    },
    i.itemFlag_gr_i = function() {
        var t = new eui.Group;
        return this.itemFlag_gr = t,
        t.visible = !1,
        t.x = -14,
        t.y = -26,
        t.elementsContent = [this.itemFlag_cannot_i(), this.itemFlag_choose_i()],
        t
    },
    i.itemFlag_cannot_i = function() {
        var t = new eui.Image;
        return this.itemFlag_cannot = t,
        t.source = "sevenDayGift_itemFlag_1_png",
        t.x = 20,
        t.y = 27,
        t
    },
    i.itemFlag_choose_i = function() {
        var t = new eui.Image;
        return this.itemFlag_choose = t,
        t.source = "sevenDayGift_itemFlag_0_png",
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/itemIcon88X88Skin.exml"] = window.itemIcon88X88Skin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["item_bg", "icon", "txtCount", "item_Group", "skillIcon_888", "skillbg_999", "skilltx", "skill_group", "petHeadIcon", "txtCount_2", "pet_group"],
        this.height = 80,
        this.width = 81,
        this.elementsContent = [this.item_bg_i(), this.item_Group_i(), this.skill_group_i(), this.pet_group_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.item_bg_i = function() {
        var t = new eui.Image;
        return this.item_bg = t,
        t.height = 80,
        t.source = "sevenDayGiftPopView_item_bg_66_png",
        t.width = 81,
        t.x = 0,
        t.y = 0,
        t
    },
    i.item_Group_i = function() {
        var t = new eui.Group;
        return this.item_Group = t,
        t.anchorOffsetX = 0,
        t.width = 80,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.icon_i(), this.txtCount_i()],
        t
    },
    i.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 48,
        t.source = "sevenDayGiftPopView_icon_png",
        t.width = 50,
        t.x = 16,
        t.y = 17,
        t
    },
    i.txtCount_i = function() {
        var t = new eui.Label;
        return this.txtCount = t,
        t.fontFamily = "黑体",
        t.height = 20,
        t.size = 20,
        t.text = "500000",
        t.textAlign = "right",
        t.textColor = 16777215,
        t.width = 60,
        t.x = 18,
        t.y = 58,
        t
    },
    i.skill_group_i = function() {
        var t = new eui.Group;
        return this.skill_group = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.skillIcon_888_i(), this.skillbg_999_i(), this.skilltx_i()],
        t
    },
    i.skillIcon_888_i = function() {
        var t = new eui.Image;
        return this.skillIcon_888 = t,
        t.height = 56,
        t.source = "sevenDayGiftPopView_skillIcon_888_png",
        t.width = 56,
        t.x = 14,
        t.y = 12,
        t
    },
    i.skillbg_999_i = function() {
        var t = new eui.Image;
        return this.skillbg_999 = t,
        t.height = 24,
        t.source = "sevenDayGiftPopView_skillbg_999_png",
        t.width = 80,
        t.x = 1,
        t.y = 55,
        t
    },
    i.skilltx_i = function() {
        var t = new eui.Label;
        return this.skilltx = t,
        t.fontFamily = "黑体",
        t.size = 15.9977703094482,
        t.text = "神秘技能",
        t.textColor = 16777215,
        t.x = 9,
        t.y = 59,
        t
    },
    i.pet_group_i = function() {
        var t = new eui.Group;
        return this.pet_group = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.petHeadIcon_i(), this.txtCount_2_i()],
        t
    },
    i.petHeadIcon_i = function() {
        var t = new eui.Image;
        return this.petHeadIcon = t,
        t.height = 80,
        t.source = "sevenDayGiftPopView_petHeadIcon_png",
        t.width = 81,
        t.x = 1,
        t.y = 1,
        t
    },
    i.txtCount_2_i = function() {
        var t = new eui.Label;
        return this.txtCount_2 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 53,
        t.y = 59,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/items/starItemSkin.exml"] = window.starItemSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imge_star_notLit", "imge_star_CanLit", "canLitType", "nextgetTx", "star_CanLit", "nextGetPng", "imge_star_Lit", "star_gr_0"],
        this.height = 132,
        this.width = 104,
        this.elementsContent = [this.star_gr_0_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i.star_gr_0_i = function() {
        var t = new eui.Group;
        return this.star_gr_0 = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imge_star_notLit_i(), this.star_CanLit_i(), this.nextGetPng_i(), this.imge_star_Lit_i()],
        t
    },
    i.imge_star_notLit_i = function() {
        var t = new eui.Image;
        return this.imge_star_notLit = t,
        t.horizontalCenter = 0,
        t.source = "sevenDayGift_imge_star_notLit_png",
        t.y = 0,
        t
    },
    i.star_CanLit_i = function() {
        var t = new eui.Group;
        return this.star_CanLit = t,
        t.anchorOffsetY = 0,
        t.height = 132,
        t.horizontalCenter = 0,
        t.y = 0,
        t.elementsContent = [this.imge_star_CanLit_i(), this.canLitType_i(), this.nextgetTx_i()],
        t
    },
    i.imge_star_CanLit_i = function() {
        var t = new eui.Image;
        return this.imge_star_CanLit = t,
        t.horizontalCenter = 0,
        t.source = "sevenDayGift_imge_star_CanLit_png",
        t.y = 0,
        t
    },
    i.canLitType_i = function() {
        var t = new eui.Image;
        return this.canLitType = t,
        t.height = 65,
        t.horizontalCenter = 0,
        t.source = "sevenDayGift_canLitType_png",
        t.width = 80,
        t.y = 32.09,
        t
    },
    i.nextgetTx_i = function() {
        var t = new eui.Label;
        return this.nextgetTx = t,
        t.fontFamily = "黑体",
        t.size = 18,
        t.text = "明日到达",
        t.textColor = 16777215,
        t.visible = !1,
        t.x = 16,
        t.y = 83.24,
        t
    },
    i.nextGetPng_i = function() {
        var t = new eui.Image;
        return this.nextGetPng = t,
        t.horizontalCenter = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "sevenDayGift_imge_next_png_png",
        t.width = 72,
        t.y = 7.15,
        t
    },
    i.imge_star_Lit_i = function() {
        var t = new eui.Image;
        return this.imge_star_Lit = t,
        t.height = 132,
        t.source = "sevenDayGift_imge_star_Lit_png",
        t.width = 104,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SevendaygiftpopviewSkin.exml"] = window.SevendaygiftpopviewSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["titleTopbg", "titleTx_0", "titleTx_1", "titleTx_2", "titleTx_3", "titleTx_4", "titleTx_5", "titleTx_6", "title_gr", "img_BtnClose", "reward0_line_0", "item_bg_66", "icon_3434343", "txtCount_1", "item_80_80_1", "item_bg_663434", "icon_222", "txtCount_0", "item_80_80_0", "petHeadIcon", "txtCount_2", "item_80_80_2", "reward0", "item_80_80_6662222", "icon_1", "txtCount_4", "item_80_80_666", "icon_2", "txtCount_5", "item_80_80_555", "reward1_items", "prop", "skillbg_33", "txt4343434", "item_80_80_5", "reward1_line_0", "reward1", "skilldesBg_0", "titlebg_0", "txt_0", "skillNameTx_0", "skill_gr_0", "skilldesBg_1", "titlebg_1", "txt_1", "skillNameTx_1", "skill_gr_1", "skilldesBg_2", "titlebg_2", "txt_2", "skillNameTx_2", "skill_gr_2", "skilinfos", "reward2", "itemIcon_2", "itemIcon_1", "itemIcon_0", "items_gr", "reward_line_0", "reward_line_1_0", "reward_line_1_1", "reward_line_1_2", "reward_gr", "img_line", "img_getBtn"],
        this.height = 452,
        this.width = 768,
        this.elementsContent = [this._Image1_i(), this.title_gr_i(), this.img_BtnClose_i(), this.reward0_i(), this.reward1_i(), this.reward2_i(), this.reward_gr_i(), this.img_line_i(), this.img_getBtn_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 411,
        t.source = "common_pop_point_png",
        t.width = 756,
        t.x = 0,
        t.y = 41,
        t
    },
    i.title_gr_i = function() {
        var t = new eui.Group;
        return this.title_gr = t,
        t.x = 0,
        t.y = 22,
        t.elementsContent = [this.titleTopbg_i(), this.titleTx_0_i(), this.titleTx_1_i(), this.titleTx_2_i(), this.titleTx_3_i(), this.titleTx_4_i(), this.titleTx_5_i(), this.titleTx_6_i()],
        t
    },
    i.titleTopbg_i = function() {
        var t = new eui.Image;
        return this.titleTopbg = t,
        t.height = 42,
        t.source = "sevenDayGiftPopView_titleTopbg_png",
        t.width = 748,
        t.x = 4,
        t.y = 0,
        t
    },
    i.titleTx_0_i = function() {
        var t = new eui.Label;
        return this.titleTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "Deneb探索礼",
        t.textColor = 15332095,
        t.x = 31,
        t.y = 4,
        t
    },
    i.titleTx_1_i = function() {
        var t = new eui.Label;
        return this.titleTx_1 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "Sadr探索礼",
        t.textColor = 15332095,
        t.x = 31,
        t.y = 4,
        t
    },
    i.titleTx_2_i = function() {
        var t = new eui.Label;
        return this.titleTx_2 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "Fawaris探索礼",
        t.textColor = 15332095,
        t.x = 31,
        t.y = 4,
        t
    },
    i.titleTx_3_i = function() {
        var t = new eui.Label;
        return this.titleTx_3 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "κCygnus探索礼",
        t.textColor = 15332095,
        t.x = 35,
        t.y = 4,
        t
    },
    i.titleTx_4_i = function() {
        var t = new eui.Label;
        return this.titleTx_4 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "Gienah探索礼",
        t.textColor = 15332095,
        t.x = 31,
        t.y = 4,
        t
    },
    i.titleTx_5_i = function() {
        var t = new eui.Label;
        return this.titleTx_5 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "ζCygnus探索礼",
        t.textColor = 15332095,
        t.x = 37,
        t.y = 4,
        t
    },
    i.titleTx_6_i = function() {
        var t = new eui.Label;
        return this.titleTx_6 = t,
        t.fontFamily = "黑体",
        t.size = 27.6315307617188,
        t.text = "Albireo探索礼",
        t.textColor = 15332095,
        t.x = 31,
        t.y = 4,
        t
    },
    i.img_BtnClose_i = function() {
        var t = new eui.Image;
        return this.img_BtnClose = t,
        t.height = 56,
        t.source = "sevenDayGiftPopView_img_BtnClose_png",
        t.width = 54,
        t.x = 714,
        t.y = 0,
        t
    },
    i.reward0_i = function() {
        var t = new eui.Group;
        return this.reward0 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.reward0_line_0_i(), this.item_80_80_1_i(), this.item_80_80_0_i(), this.item_80_80_2_i()],
        t
    },
    i.reward0_line_0_i = function() {
        var t = new eui.Image;
        return this.reward0_line_0 = t,
        t.height = 19,
        t.source = "sevenDayGiftPopView_reward0_line_0_png",
        t.width = 712,
        t.x = 0,
        t.y = 77,
        t
    },
    i.item_80_80_1_i = function() {
        var t = new eui.Group;
        return this.item_80_80_1 = t,
        t.x = 256,
        t.y = 37,
        t.elementsContent = [this.item_bg_66_i(), this.icon_3434343_i(), this.txtCount_1_i()],
        t
    },
    i.item_bg_66_i = function() {
        var t = new eui.Image;
        return this.item_bg_66 = t,
        t.height = 80,
        t.source = "sevenDayGiftPopView_item_bg_66_png",
        t.width = 81,
        t.x = 22,
        t.y = 77,
        t
    },
    i.icon_3434343_i = function() {
        var t = new eui.Image;
        return this.icon_3434343 = t,
        t.height = 48,
        t.source = "sevenDayGiftPopView_icon_png",
        t.width = 50,
        t.x = 38,
        t.y = 94,
        t
    },
    i.txtCount_1_i = function() {
        var t = new eui.Label;
        return this.txtCount_1 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 74,
        t.y = 135,
        t
    },
    i.item_80_80_0_i = function() {
        var t = new eui.Group;
        return this.item_80_80_0 = t,
        t.x = 376,
        t.y = 37,
        t.elementsContent = [this.item_bg_663434_i(), this.icon_222_i(), this.txtCount_0_i()],
        t
    },
    i.item_bg_663434_i = function() {
        var t = new eui.Image;
        return this.item_bg_663434 = t,
        t.height = 80,
        t.source = "sevenDayGiftPopView_item_bg_66_png",
        t.width = 81,
        t.x = 22,
        t.y = 77,
        t
    },
    i.icon_222_i = function() {
        var t = new eui.Image;
        return this.icon_222 = t,
        t.height = 48,
        t.source = "sevenDayGiftPopView_icon_png",
        t.width = 50,
        t.x = 38,
        t.y = 94,
        t
    },
    i.txtCount_0_i = function() {
        var t = new eui.Label;
        return this.txtCount_0 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 74,
        t.y = 135,
        t
    },
    i.item_80_80_2_i = function() {
        var t = new eui.Group;
        return this.item_80_80_2 = t,
        t.x = 316,
        t.y = 186,
        t.elementsContent = [this._Image2_i(), this.petHeadIcon_i(), this.txtCount_2_i()],
        t
    },
    i._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 22,
        t.y = 77,
        t
    },
    i.petHeadIcon_i = function() {
        var t = new eui.Image;
        return this.petHeadIcon = t,
        t.height = 80,
        t.source = "sevenDayGiftPopView_petHeadIcon_png",
        t.width = 81,
        t.x = 22,
        t.y = 77,
        t
    },
    i.txtCount_2_i = function() {
        var t = new eui.Label;
        return this.txtCount_2 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 74,
        t.y = 135,
        t
    },
    i.reward1_i = function() {
        var t = new eui.Group;
        return this.reward1 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.reward1_items_i(), this.item_80_80_5_i(), this.reward1_line_0_i()],
        t
    },
    i.reward1_items_i = function() {
        var t = new eui.Group;
        return this.reward1_items = t,
        t.x = 0,
        t.y = -1,
        t.elementsContent = [this.item_80_80_666_i(), this.item_80_80_555_i()],
        t
    },
    i.item_80_80_666_i = function() {
        var t = new eui.Group;
        return this.item_80_80_666 = t,
        t.x = 22,
        t.y = 77,
        t.elementsContent = [this.item_80_80_6662222_i(), this.icon_1_i(), this.txtCount_4_i()],
        t
    },
    i.item_80_80_6662222_i = function() {
        var t = new eui.Image;
        return this.item_80_80_6662222 = t,
        t.height = 80,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 256,
        t.y = 37,
        t
    },
    i.icon_1_i = function() {
        var t = new eui.Image;
        return this.icon_1 = t,
        t.height = 48,
        t.source = "sevenDayGiftPopView_icon_png",
        t.width = 50,
        t.x = 272,
        t.y = 54,
        t
    },
    i.txtCount_4_i = function() {
        var t = new eui.Label;
        return this.txtCount_4 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 308,
        t.y = 95,
        t
    },
    i.item_80_80_555_i = function() {
        var t = new eui.Group;
        return this.item_80_80_555 = t,
        t.x = 142,
        t.y = 77,
        t.elementsContent = [this._Image3_i(), this.icon_2_i(), this.txtCount_5_i()],
        t
    },
    i._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 256,
        t.y = 37,
        t
    },
    i.icon_2_i = function() {
        var t = new eui.Image;
        return this.icon_2 = t,
        t.height = 48,
        t.source = "sevenDayGiftPopView_icon_png",
        t.width = 50,
        t.x = 272,
        t.y = 54,
        t
    },
    i.txtCount_5_i = function() {
        var t = new eui.Label;
        return this.txtCount_5 = t,
        t.fontFamily = "黑体",
        t.size = 20,
        t.text = "99",
        t.textColor = 16777215,
        t.x = 308,
        t.y = 95,
        t
    },
    i.item_80_80_5_i = function() {
        var t = new eui.Group;
        return this.item_80_80_5 = t,
        t.x = 316,
        t.y = 207,
        t.elementsContent = [this._Image4_i(), this.prop_i(), this.skillbg_33_i(), this.txt4343434_i()],
        t
    },
    i._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 80,
        t.source = "common_icon_bg_style_66_66_png",
        t.width = 81,
        t.x = 22,
        t.y = 77,
        t
    },
    i.prop_i = function() {
        var t = new eui.Image;
        return this.prop = t,
        t.height = 37,
        t.source = "sevenDayGiftPopView_prop_png",
        t.width = 33,
        t.x = 46,
        t.y = 90,
        t
    },
    i.skillbg_33_i = function() {
        var t = new eui.Image;
        return this.skillbg_33 = t,
        t.height = 24,
        t.source = "sevenDayGiftPopView_skillbg_33_png",
        t.width = 80,
        t.x = 22,
        t.y = 133,
        t
    },
    i.txt4343434_i = function() {
        var t = new eui.Label;
        return this.txt4343434 = t,
        t.fontFamily = "黑体",
        t.size = 15.9977703094482,
        t.text = "种族文字",
        t.textColor = 16777215,
        t.x = 27,
        t.y = 133,
        t
    },
    i.reward1_line_0_i = function() {
        var t = new eui.Image;
        return this.reward1_line_0 = t,
        t.height = 19,
        t.source = "sevenDayGiftPopView_reward1_line_0_png",
        t.width = 712,
        t.x = 0,
        t.y = 63,
        t
    },
    i.reward2_i = function() {
        var t = new eui.Group;
        return this.reward2 = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.skilinfos_i()],
        t
    },
    i.skilinfos_i = function() {
        var t = new eui.Group;
        return this.skilinfos = t,
        t.visible = !1,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.skill_gr_0_i(), this.skill_gr_1_i(), this.skill_gr_2_i()],
        t
    },
    i.skill_gr_0_i = function() {
        var t = new eui.Group;
        return this.skill_gr_0 = t,
        t.x = 22,
        t.y = 77,
        t.elementsContent = [this.skilldesBg_0_i(), this.titlebg_0_i(), this.txt_0_i(), this.skillNameTx_0_i()],
        t
    },
    i.skilldesBg_0_i = function() {
        var t = new eui.Image;
        return this.skilldesBg_0 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_skilldesBg_png",
        t.width = 700,
        t.x = 6,
        t.y = 150,
        t
    },
    i.titlebg_0_i = function() {
        var t = new eui.Image;
        return this.titlebg_0 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_titlebg_png",
        t.width = 96,
        t.x = 6,
        t.y = 150,
        t
    },
    i.txt_0_i = function() {
        var t = new eui.Label;
        return this.txt_0 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "必中；消除对手能力提升状态，消除成功则吸取对手最大体力的1/3；造成的伤害不足300则免疫下1次受到的攻击；造成的伤害高于300则100%几率使对手随机进入1种异常状态",
        t.textColor = 3492213,
        t.x = 107,
        t.y = 155,
        t
    },
    i.skillNameTx_0_i = function() {
        var t = new eui.Label;
        return this.skillNameTx_0 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "飞尘绝命弹",
        t.textColor = 16777215,
        t.x = 13,
        t.y = 166,
        t
    },
    i.skill_gr_1_i = function() {
        var t = new eui.Group;
        return this.skill_gr_1 = t,
        t.x = 22,
        t.y = 132,
        t.elementsContent = [this.skilldesBg_1_i(), this.titlebg_1_i(), this.txt_1_i(), this.skillNameTx_1_i()],
        t
    },
    i.skilldesBg_1_i = function() {
        var t = new eui.Image;
        return this.skilldesBg_1 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_skilldesBg_png",
        t.width = 700,
        t.x = 6,
        t.y = 150,
        t
    },
    i.titlebg_1_i = function() {
        var t = new eui.Image;
        return this.titlebg_1 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_titlebg_png",
        t.width = 96,
        t.x = 6,
        t.y = 150,
        t
    },
    i.txt_1_i = function() {
        var t = new eui.Label;
        return this.txt_1 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "先制+3；必中；消除对手回合类效果，消除成功则对手2回合无法使用属性技能；附加200点固定伤害，连续使用每次增加50点固定伤害，最高附加200点固定伤害",
        t.textColor = 3492213,
        t.x = 107,
        t.y = 155,
        t
    },
    i.skillNameTx_1_i = function() {
        var t = new eui.Label;
        return this.skillNameTx_1 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "驱散射击",
        t.textColor = 16777215,
        t.x = 22,
        t.y = 166,
        t
    },
    i.skill_gr_2_i = function() {
        var t = new eui.Group;
        return this.skill_gr_2 = t,
        t.x = 22,
        t.y = 187,
        t.elementsContent = [this.skilldesBg_2_i(), this.titlebg_2_i(), this.txt_2_i(), this.skillNameTx_2_i()],
        t
    },
    i.skilldesBg_2_i = function() {
        var t = new eui.Image;
        return this.skilldesBg_2 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_skilldesBg_png",
        t.width = 700,
        t.x = 6,
        t.y = 150,
        t
    },
    i.titlebg_2_i = function() {
        var t = new eui.Image;
        return this.titlebg_2 = t,
        t.height = 46,
        t.source = "sevenDayGiftPopView_titlebg_png",
        t.width = 96,
        t.x = 6,
        t.y = 150,
        t
    },
    i.txt_2_i = function() {
        var t = new eui.Label;
        return this.txt_2 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "当回合击败对手则恢复自身所有技能PP值",
        t.textColor = 3492213,
        t.x = 108,
        t.y = 155,
        t
    },
    i.skillNameTx_2_i = function() {
        var t = new eui.Label;
        return this.skillNameTx_2 = t,
        t.fontFamily = "黑体",
        t.size = 16,
        t.text = "枪托打击",
        t.textColor = 16777215,
        t.x = 21,
        t.y = 166,
        t
    },
    i.reward_gr_i = function() {
        var t = new eui.Group;
        return this.reward_gr = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 318,
        t.width = 746,
        t.x = 5,
        t.y = 64,
        t.elementsContent = [this.items_gr_i(), this.reward_line_0_i(), this.reward_line_1_0_i(), this.reward_line_1_1_i(), this.reward_line_1_2_i()],
        t
    },
    i.items_gr_i = function() {
        var t = new eui.Group;
        return this.items_gr = t,
        t.x = 16,
        t.y = 12,
        t.elementsContent = [this.itemIcon_2_i(), this.itemIcon_1_i(), this.itemIcon_0_i()],
        t
    },
    i.itemIcon_2_i = function() {
        var t = new sevenDayGift.ItemIcon80x80;
        return this.itemIcon_2 = t,
        t.height = 80,
        t.skinName = "itemIcon88X88Skin",
        t.width = 81,
        t.x = 436,
        t.y = 32,
        t
    },
    i.itemIcon_1_i = function() {
        var t = new sevenDayGift.ItemIcon80x80;
        return this.itemIcon_1 = t,
        t.height = 80,
        t.skinName = "itemIcon88X88Skin",
        t.width = 81,
        t.x = 316,
        t.y = 32,
        t
    },
    i.itemIcon_0_i = function() {
        var t = new sevenDayGift.ItemIcon80x80;
        return this.itemIcon_0 = t,
        t.height = 80,
        t.skinName = "itemIcon88X88Skin",
        t.width = 81,
        t.x = 195,
        t.y = 32,
        t
    },
    i.reward_line_0_i = function() {
        var t = new eui.Image;
        return this.reward_line_0 = t,
        t.height = 19,
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "sevenDayGiftPopView_reward2_line_0_png",
        t.width = 712,
        t.x = 14.7,
        t.y = 13.120000000000005,
        t
    },
    i.reward_line_1_0_i = function() {
        var t = new eui.Image;
        return this.reward_line_1_0 = t,
        t.height = 20,
        t.source = "sevenDayGiftPopView_reward2_line_1_png",
        t.visible = !1,
        t.width = 712,
        t.x = 13.68,
        t.y = 136.45,
        t
    },
    i.reward_line_1_1_i = function() {
        var t = new eui.Image;
        return this.reward_line_1_1 = t,
        t.height = 20,
        t.source = "sevenDayGiftPopView_reward1_line_1_png",
        t.visible = !1,
        t.width = 712,
        t.x = 0,
        t.y = 136,
        t
    },
    i.reward_line_1_2_i = function() {
        var t = new eui.Image;
        return this.reward_line_1_2 = t,
        t.height = 20,
        t.source = "sevenDayGiftPopView_reward0_line_1_png",
        t.visible = !1,
        t.width = 712,
        t.x = 0,
        t.y = 136,
        t
    },
    i.img_line_i = function() {
        var t = new eui.Image;
        return this.img_line = t,
        t.height = 2,
        t.source = "sevenDayGiftPopView_img_line_png",
        t.width = 712,
        t.x = 22,
        t.y = 86,
        t
    },
    i.img_getBtn_i = function() {
        var t = new eui.Image;
        return this.img_getBtn = t,
        t.height = 40,
        t.source = "sevenDayGiftPopView_img_getBtn_png",
        t.width = 120,
        t.x = 318,
        t.y = 394,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/SevendaygiftSkin.exml"] = window.SevendaygiftSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["BG", "imge_completionStatus_1", "imge_title_png", "imge_close_btn", "imge_completionStatus_0", "imge_line", "star_6", "star_5", "star_4", "star_3", "star_2", "star_1", "star_0", "tx_0", "tx_1", "tx_2", "tx_3", "tx_4", "tx_5", "tx_6", "imge_staticType", "imge_startType", "imge_flyType", "airship_gr", "star_gr", "imge_reward_bg", "viewport_list", "scroller_title", "reward_gr", "imge_barBg", "imge_bar", "imge_barSpot", "progressBar"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Group1_i(), this.imge_completionStatus_1_i(), this.imge_title_png_i(), this.imge_close_btn_i(), this.imge_completionStatus_0_i(), this.star_gr_i(), this.reward_gr_i(), this.progressBar_i()]
    }
    __extends(e, t);
    var i = e.prototype;
    return i._Group1_i = function() {
        var t = new eui.Group;
        return t.height = 640,
        t.horizontalCenter = .5,
        t.width = 1385,
        t.y = 0,
        t.elementsContent = [this.BG_i()],
        t
    },
    i.BG_i = function() {
        var t = new eui.Image;
        return this.BG = t,
        t.height = 640,
        t.scale9Grid = new egret.Rectangle(142, 80, 852, 480),
        t.scaleX = 1,
        t.scaleY = 1,
        t.source = "sevenDayGift_BG_png",
        t.width = 1136,
        t.x = 124,
        t.y = 0,
        t
    },
    i.imge_completionStatus_1_i = function() {
        var t = new eui.Image;
        return this.imge_completionStatus_1 = t,
        t.height = 581,
        t.source = "sevenDayGift_imge_completionStatus_1_png",
        t.width = 1023,
        t.x = 113,
        t.y = 59,
        t
    },
    i.imge_title_png_i = function() {
        var t = new eui.Image;
        return this.imge_title_png = t,
        t.height = 254,
        t.source = "sevenDayGift_imge_title_png_png",
        t.width = 881,
        t.x = 240,
        t.y = 0,
        t
    },
    i.imge_close_btn_i = function() {
        var t = new eui.Image;
        return this.imge_close_btn = t,
        t.height = 56,
        t.source = "sevenDayGift_imge_close_btn_png",
        t.width = 56,
        t.x = 1072,
        t.y = 8,
        t
    },
    i.imge_completionStatus_0_i = function() {
        var t = new eui.Image;
        return this.imge_completionStatus_0 = t,
        t.height = 581,
        t.source = "sevenDayGift_imge_completionStatus_0_png",
        t.width = 1023,
        t.x = 113,
        t.y = 59,
        t
    },
    i.star_gr_i = function() {
        var t = new eui.Group;
        return this.star_gr = t,
        t.x = 370,
        t.y = 108.53,
        t.elementsContent = [this.imge_line_i(), this.star_6_i(), this.star_5_i(), this.star_4_i(), this.star_3_i(), this.star_2_i(), this.star_1_i(), this.star_0_i(), this.tx_0_i(), this.tx_1_i(), this.tx_2_i(), this.tx_3_i(), this.tx_4_i(), this.tx_5_i(), this.tx_6_i(), this.airship_gr_i()],
        t
    },
    i.imge_line_i = function() {
        var t = new eui.Image;
        return this.imge_line = t,
        t.height = 341,
        t.source = "sevenDayGift_imge_line_png",
        t.width = 418,
        t.x = 87,
        t.y = 67,
        t
    },
    i.star_6_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_6 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 453.96,
        t.y = 79.82,
        t
    },
    i.star_5_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_5 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 394.01,
        t.y = 347.85,
        t
    },
    i.star_4_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_4 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 293.33,
        t.y = 230.44,
        t
    },
    i.star_3_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_3 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 5.39,
        t.y = -3.61,
        t
    },
    i.star_2_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_2 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 124.43,
        t.y = 53.86,
        t
    },
    i.star_1_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_1 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 220.79,
        t.y = 178.14,
        t
    },
    i.star_0_i = function() {
        var t = new sevenDayGift.StarItem;
        return this.star_0 = t,
        t.height = 132,
        t.skinName = "starItemSkin",
        t.width = 104,
        t.x = 8.37,
        t.y = 229.7,
        t
    },
    i.tx_0_i = function() {
        var t = new eui.Label;
        return this.tx_0 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "Deneb",
        t.textColor = 16777215,
        t.x = 34.32,
        t.y = 320.97,
        t
    },
    i.tx_1_i = function() {
        var t = new eui.Label;
        return this.tx_1 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "κCygnus",
        t.textColor = 16777215,
        t.x = 7.4,
        t.y = 90.08,
        t
    },
    i.tx_2_i = function() {
        var t = new eui.Label;
        return this.tx_2 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "Fawaris",
        t.textColor = 16777215,
        t.x = 134.04,
        t.y = 147.61,
        t
    },
    i.tx_3_i = function() {
        var t = new eui.Label;
        return this.tx_3 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "Sadr",
        t.textColor = 16777215,
        t.x = 250.76,
        t.y = 268.14,
        t
    },
    i.tx_4_i = function() {
        var t = new eui.Label;
        return this.tx_4 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "Gienah",
        t.textColor = 16777215,
        t.x = 312,
        t.y = 324.57,
        t
    },
    i.tx_5_i = function() {
        var t = new eui.Label;
        return this.tx_5 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "ζCygnus",
        t.textColor = 16777215,
        t.x = 391,
        t.y = 440.52,
        t
    },
    i.tx_6_i = function() {
        var t = new eui.Label;
        return this.tx_6 = t,
        t.fontFamily = "黑体",
        t.size = 24,
        t.text = "Albireo",
        t.textColor = 16777215,
        t.x = 466.4,
        t.y = 170.14,
        t
    },
    i.airship_gr_i = function() {
        var t = new eui.Group;
        return this.airship_gr = t,
        t.x = -178.86,
        t.y = 259.73,
        t.elementsContent = [this.imge_staticType_i(), this.imge_startType_i(), this.imge_flyType_i()],
        t
    },
    i.imge_staticType_i = function() {
        var t = new eui.Image;
        return this.imge_staticType = t,
        t.height = 64,
        t.source = "sevenDayGift_imge_staticType_png",
        t.width = 84,
        t.x = 116,
        t.y = 0,
        t
    },
    i.imge_startType_i = function() {
        var t = new eui.Image;
        return this.imge_startType = t,
        t.height = 63,
        t.source = "sevenDayGift_imge_startType_png",
        t.width = 159,
        t.x = 0,
        t.y = 29,
        t
    },
    i.imge_flyType_i = function() {
        var t = new eui.Image;
        return this.imge_flyType = t,
        t.height = 39,
        t.source = "sevenDayGift_imge_flyType_png",
        t.width = 97,
        t.x = 65,
        t.y = 40,
        t
    },
    i.reward_gr_i = function() {
        var t = new eui.Group;
        return this.reward_gr = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this.imge_reward_bg_i(), this.scroller_title_i()],
        t
    },
    i.imge_reward_bg_i = function() {
        var t = new eui.Image;
        return this.imge_reward_bg = t,
        t.height = 640,
        t.source = "sevenDayGift_imge_reward_bg_png",
        t.width = 290,
        t.x = 0,
        t.y = 0,
        t
    },
    i.scroller_title_i = function() {
        var t = new eui.Scroller;
        return this.scroller_title = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 592.43,
        t.scrollPolicyH = "off",
        t.scrollPolicyV = "off",
        t.width = 253.03,
        t.x = 18.18,
        t.y = 33.33,
        t.viewport = this._Group2_i(),
        t
    },
    i._Group2_i = function() {
        var t = new eui.Group;
        return t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 590.92,
        t.width = 271.21,
        t.elementsContent = [this.viewport_list_i()],
        t
    },
    i.viewport_list_i = function() {
        var t = new eui.List;
        return this.viewport_list = t,
        t.anchorOffsetX = 0,
        t.anchorOffsetY = 0,
        t.height = 589.4,
        t.itemRendererSkinName = dayRewardItemSkin,
        t.scaleX = 1,
        t.scaleY = 1,
        t.width = 271.21,
        t.x = 0,
        t.y = 0,
        t.layout = this._VerticalLayout1_i(),
        t
    },
    i._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout;
        return t.gap = 10,
        t
    },
    i.progressBar_i = function() {
        var t = new eui.Group;
        return this.progressBar = t,
        t.x = 276,
        t.y = 68,
        t.elementsContent = [this.imge_barBg_i(), this.imge_bar_i(), this.imge_barSpot_i()],
        t
    },
    i.imge_barBg_i = function() {
        var t = new eui.Image;
        return this.imge_barBg = t,
        t.height = 507,
        t.source = "sevenDayGift_imge_barBg_png",
        t.width = 11,
        t.x = 0,
        t.y = 0,
        t
    },
    i.imge_bar_i = function() {
        var t = new eui.Image;
        return this.imge_bar = t,
        t.height = 495,
        t.source = "sevenDayGift_imge_bar_png",
        t.width = 1,
        t.x = 5,
        t.y = 6,
        t
    },
    i.imge_barSpot_i = function() {
        var t = new eui.Image;
        return this.imge_barSpot = t,
        t.height = 505,
        t.source = "sevenDayGift_imge_barSpot_png",
        t.width = 9,
        t.x = 1,
        t.y = 1,
        t
    },
    e
} (eui.Skin);