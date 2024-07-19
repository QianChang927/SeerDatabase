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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {},
        t.prototype.UpdateAll = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e = this;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.UpdateView()];
                    case 1:
                        return t.sent(),
                        [4, this.playTweens()];
                    case 2:
                        return t.sent(),
                        [2, Promise.resolve().then(function() {
                            e.completeCallBack()
                        })]
                    }
                })
            })
        },
        t.prototype.UpdateView = function() {
            return Promise.resolve()
        },
        t.prototype.playTweens = function() {
            return Promise.resolve()
        },
        t.prototype.clearTweens = function() {},
        t.prototype.completeCallBack = function() {},
        t.prototype.AKeyFuncction = function() {
            return Promise.resolve()
        },
        t.prototype.destroy = function() {
            this.clearTweens(),
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (BaseModule);
    e.BaseView = t,
    __reflect(t.prototype, "yearVip2023.BaseView", ["yearVip2023.IView"])
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.skinName = MouthGiftItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.gr_btnGet, this._onTouchImageButton, this);
            for (var e = 0; 7 > e; e++) this["itemSmallStyle3_" + e].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this);
            for (var e = 0; 7 > e; e++) this["itemSmallStyle3_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this)
        },
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this.gr_btnGet:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                SocketConnection.sendWithCallback(CommandID.YEAR_VIP_2016,
                function(t) {
                    e.DataManger.getInstance().monthGiftState = BitUtil.setBit(e.DataManger.getInstance().monthGiftState, i.curIndex),
                    e.DataManger.getInstance().updateRedHot(),
                    i.imge_tag.source = "yearvip2022_yearpetview_taggot_png",
                    i.imge_tag.visible = !0,
                    i.gr_btnGet.visible = !1
                },
                10 + this.curIndex)
            }
        },
        i.prototype.dataChanged = function() {
            var t = this.data;
            this.curIndex = t.index;
            var i = VipMonthMonsterXMLInfo.getMonthNum(e.DataManger.getInstance().CUR_YEAR_INDEX) - 1;
            this.gr_btnGet.visible = !0,
            t.isGet ? (this.imge_tag.source = "yearvip2022_yearpetview_taggot_png", this.imge_tag.visible = !0, this.gr_btnGet.visible = !1) : this.curIndex == i ? (this.gr_btnGet.visible = !0, this.imge_tag.visible = !1) : this.curIndex > i ? (this.imge_tag.visible = !1, DisplayUtil.setEnabled(this.gr_btnGet, !1, !0)) : (this.imge_tag.source = "yearvip2022_mouthgiftview_tagguoqi_png", this.imge_tag.visible = !0, this.gr_btnGet.visible = !1),
            this.imge_mounth_icon.source = "yearvip2022_mouthgiftview_icon_" + (this.curIndex + 1) + "_png";
            for (var n = 0; 7 > n; n++) 0 == n ? this["itemSmallStyle3_" + n].data = e.DataManger.getInstance().mouthGiftChangeRewards[this.curIndex] : this["itemSmallStyle3_" + n].data = e.DataManger.getInstance().mouthGiftRewards[n - 1],
            this["itemSmallStyle3_" + n].dataChanged()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.currentTarget,
            i = t.data,
            n = {};
            n.id = i.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (eui.ItemRenderer);
    e.MouthGiftItem = t,
    __reflect(t.prototype, "yearVip2023.MouthGiftItem")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.event_change_selecetd_id = "event_change_selecetd_id",
        t.event_udpdate_redHot = "event_udpdate_redHot",
        t
    } (egret.EventDispatcher);
    e.YearPetEvent = t,
    __reflect(t.prototype, "yearVip2023.YearPetEvent")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i._curTab = 0,
            i.allPets = [],
            i._getPetNum = {},
            i.skinName = MainSkin,
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            var i = this;
            t.prototype.childrenCreated.call(this),
            this.adaptLeftContent(this.gr_left),
            this.adaptRightContent(this.view),
            this.rbg_tab = this.rb_0.group,
            this._curTab = this.rbg_tab.selectedValue = 0,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.mainView.hide(),
            this._viewList = [this.mainView, this.yearPetView, this.yuyueGiftView, this.limitedCollectionView, this.mouthGiftView, this.mouthPetView, this.freeJpView, this.exclusivecapacityView],
            this.hieAllView(),
            this.initView(),
            this._initEvents(),
            e.DataManger.getInstance().initData().then(function() {
                var t = 0;
                if (i.data && (t = i.data), e.DataManger.getInstance().setConfigId(t), VipController.isCurYearVip) for (var n = 1; 7 > n; n++) i.udpateCurRedHot(n);
                else for (var n = 1; 7 > n; n++) i["red_hot_" + n].visible = !1
            })
        },
        i.prototype.initView = function() {
            this._animate_leibao = SpineUtil.createAnimate("vipnono_2023"),
            this._animate_leibao.touchEnabled = this._animate_leibao.touchChildren = !1,
            this._animate_leibao.play("liebiao", 0),
            this._animate_nono_idle1 = SpineUtil.createAnimate("vipnono_2023"),
            this.rb_0.animate_up.addChild(this._animate_nono_idle1),
            this._animate_nono_idle1.touchEnabled = this._animate_nono_idle1.touchChildren = !1,
            this._animate_nono_idle1.scaleX = this._animate_nono_idle1.scaleY = 1,
            this._animate_nono_idle1.x = this._animate_nono_idle1.y = 0,
            this._animate_nono_idle1.play("nono_idle1", 0),
            this._animate_nono_idle2 = SpineUtil.createAnimate("vipnono_2023"),
            this.rb_0.animate_down.addChild(this._animate_nono_idle2),
            this._animate_nono_idle2.touchEnabled = this._animate_nono_idle2.touchChildren = !1,
            this._animate_nono_idle2.scaleX = this._animate_nono_idle2.scaleY = 1,
            this._animate_nono_idle2.x = this._animate_nono_idle2.y = 0,
            this._animate_nono_idle2.play("nono_idle2", 0)
        },
        i.prototype.updateRedHot = function(e) {
            this.udpateCurRedHot(this._curTab)
        },
        i.prototype.udpateCurRedHot = function(t) {
            var i = this;
            switch (t) {
            case 1:
                this.red_hot_1.visible = !e.DataManger.getInstance().isGetYearVipReward;
                break;
            case 2:
                e.DataManger.getInstance().isYuyue && !e.DataManger.getInstance().isGetYuyueReward ? this.red_hot_2.visible = !0 : this.red_hot_2.visible = !1;
                break;
            case 3:
                this.red_hot_3.visible = !1;
                for (var n = [e.DataManger.getInstance().isGetTitleReward, e.DataManger.getInstance().isGetSuitReward, e.DataManger.getInstance().isGetnonoSkin], r = 0; 3 > r; r++) n[r] || (this.red_hot_3.visible = !0);
                break;
            case 4:
                this.red_hot_4.visible = !1;
                var _ = SystemTimerManager.sysBJDate.getMonth();
                0 == BitUtil.getBit(e.DataManger.getInstance().monthGiftState, _) && (this.red_hot_4.visible = !0);
                break;
            case 5:
                this.red_hot_5.visible = !1;
                var a = SystemTimerManager.sysBJDate.getMonth(),
                o = VipMonthMonsterXMLInfo.getPetForever(e.DataManger.getInstance().CUR_YEAR_INDEX);
                KTool.getMultiValue(o,
                function(e) {
                    for (var t = 0; a >= t; t++) e[t] <= 0 && (i.red_hot_5.visible = !0)
                });
                break;
            case 6:
                this.red_hot_6.visible = !e.DataManger.getInstance().isUseJp
            }
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_close, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_btn_help, this._onTouchImageButton, this),
            e.DataManger.getInstance().addEventListener(e.YearPetEvent.event_change_selecetd_id, this.onChangeView, this),
            e.DataManger.getInstance().addEventListener(e.YearPetEvent.event_udpdate_redHot, this.updateRedHot, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            e.DataManger.getInstance().removeEventListener(e.YearPetEvent.event_change_selecetd_id, this.onChangeView, this),
            e.DataManger.getInstance().removeEventListener(e.YearPetEvent.event_udpdate_redHot, this.updateRedHot, this)
        },
        i.prototype.onTouchBegin = function(e) {
            var t = e.target;
            BubblerManager.getInstance().showText(t.name)
        },
        i.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.btn_close:
                this.onClose();
                break;
            case this.imge_btn_help:
                tipsPop.TipsPop.openHelpPopById(e.DataManger.getInstance().HELP_POP_ID)
            }
        },
        i.prototype.hieAllView = function() {
            for (var e = 0,
            t = this._viewList; e < t.length; e++) {
                var i = t[e];
                i.hide()
            }
        },
        i.prototype.onChangeTab = function() {
            this._curTab = ~~this.rbg_tab.selectedValue,
            this._curTab > 0 && this["rb_" + this._curTab].animate_down.addChild(this._animate_leibao),
            e.DataManger.getInstance().setConfigId(this._curTab)
        },
        i.prototype.onChangeView = function(e) {
            this._curTab = this.rbg_tab.selectedValue = e.data,
            this.UpdateTitle(),
            this._onShowView()
        },
        i.prototype.UpdateTitle = function() {
            0 == this._curTab ? this.BG.source = "yearvip_main_bg_jpg": 1 == this._curTab ? this.BG.source = "yearvip_yearpetview_imge_pet_jpg": this.BG.source = "yearvip_yearpetview_bg_jpg"
        },
        i.prototype._onShowView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return this.hieAllView(),
                        e = this._viewList[this._curTab],
                        [4, e.UpdateView()];
                    case 1:
                        return t.sent(),
                        e.show(),
                        [4, e.playTweens()];
                    case 2:
                        return t.sent(),
                        e.completeCallBack(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this.mainView.destroy(),
            this.yearPetView.destroy(),
            this.yuyueGiftView.destroy(),
            this.limitedCollectionView.destroy(),
            this.mouthGiftView.destroy(),
            this.freeJpView.destroy(),
            this.exclusivecapacityView.destroy(),
            this._animate_leibao = null,
            this._animate_nono_idle1 = null,
            this._animate_nono_idle2 = null,
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            e.DataManger.getInstance().setConfigId( - 1),
            e.DataManger.getInstance().ClearBindViewInstance()
        },
        i
    } (BaseModule);
    e.YearVip2023 = t,
    __reflect(t.prototype, "yearVip2023.YearVip2023")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = ItemBigSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.imge_icon.source = ItemXMLInfo.getIconURL(e.id),
            this.tx_count.text = e.count + ""
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.ItemBig = t,
    __reflect(t.prototype, "yearVip2023.ItemBig")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = ItemSmallSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            if (e.type <= 3) {
                var t = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(e);
                this.imge_icon.source = t,
                this.tx_count.text = e.count + ""
            } else 4 == e.type ? (this.imge_icon.source = ClientConfig.geteffecticon(0), this.tx_count.text = "") : 5 == e.type && (this.imge_icon.source = ClientConfig.gethideSkillicon(0), this.tx_count.text = "")
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.ItemSmall = t,
    __reflect(t.prototype, "yearVip2023.ItemSmall")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = ItemSmllstyle2Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ItemXMLInfo.getIconURL(e.id),
            this.tx_count.text = e.count + ""
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.ItemSmallStyle2 = t,
    __reflect(t.prototype, "yearVip2023.ItemSmallStyle2")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = ItemSmllstyle3Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            if (this.imge_item_icon.source = ItemXMLInfo.getIconURL(e.id), this.tx_count.text = e.count + "", e.count >= 1e4) {
                var t = e.count / 1e4,
                i = e.count % 1e4;
                i > 0 ? this.tx_count.text = "" + t.toFixed(1) + "万": this.tx_count.text = "" + Math.floor(t) + "万"
            }
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.ItemSmallStyle3 = t,
    __reflect(t.prototype, "yearVip2023.ItemSmallStyle3")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = item_yearPet_big_Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            if (e.type <= 3) {
                var t = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(e);
                this.imge_icon.source = t,
                this.tx_count.text = e.count + ""
            } else 4 == e.type ? (this.imge_icon.source = ClientConfig.geteffecticon(99999), this.tx_count.text = "") : 5 == e.type && (this.imge_icon.source = ClientConfig.gethideSkillicon(0), this.tx_count.text = "")
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.itemYearPetBig = t,
    __reflect(t.prototype, "yearVip2023.itemYearPetBig")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = item_yearPet_samll_Skin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        t.prototype.dataChanged = function() {
            var e = this.data;
            if (e.type <= 3) {
                var t = core.gameUtil.RewardDataFormat.GetDefaultRewardIconUrl(e);
                this.imge_icon.source = t,
                this.tx_count.text = e.count + ""
            } else 4 == e.type ? (this.imge_icon.source = ClientConfig.geteffecticon(99999), this.tx_count.text = "") : 5 == e.type && (this.imge_icon.source = ClientConfig.gethideSkillicon(0), this.tx_count.text = "")
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.itemYearPetSmall = t,
    __reflect(t.prototype, "yearVip2023.itemYearPetSmall")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = FreeJpPetHeadItemSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents(),
            this.imge_head_select.visible = !1
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        Object.defineProperty(t.prototype, "selected", {
            get: function() {
                return egret.superSetter(t, this, "selected")
            },
            set: function(e) {
                null != this._curData && (this.imge_head_select.visible = e, egret.superSetter(t, this, "selected"))
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            this._curData = this.data;
            var e = this._curData.petInfo;
            this.imge_head.source = ClientConfig.getPetHeadPath(e.id, e.catchTime, e.skinId)
        },
        t.prototype.destroy = function() {
            this._removeEvents()
        },
        t
    } (eui.ItemRenderer);
    e.FreeJpPetHeadItem = t,
    __reflect(t.prototype, "yearVip2023.FreeJpPetHeadItem")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._mouthName = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.destroy, e),
            e.skinName = MouthPetItemSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.imge_btnGet,
            function() {
                e.DataManger.getInstance().getIsYearVip() && (t._isopen ? SocketConnection.sendByQueue(42318, [101, t._curIndex, VipMonthMonsterXMLInfo.getCurrentYear(e.DataManger.getInstance().CUR_YEAR_INDEX)],
                function(t) {
                    e.DataManger.getInstance().updateRedHot(),
                    EventManager.dispatchEvent(new egret.Event("update_mouthPet_view"))
                },
                function(e) {}) : BubblerManager.getInstance().showText("精灵暂未推出，敬请期待哦！"))
            },
            this),
            ImageButtonUtil.add(this.rect_touch,
            function() {
                t._isopen && ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                    data: t._petId,
                    type: "pet",
                    thisObj: t
                },
                "", AppDoStyle.HIDEN)
            },
            this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this)
        },
        i.prototype.dataChanged = function() {
            var e = this.data;
            this._petId = e.petId,
            this._curIndex = e.index,
            this._isopen = e.isOpen,
            this.imge_flag.visible = e.isGet,
            this.imge_btnGet.visible = !e.isGet,
            this.tx_title.text = this._mouthName[this._curIndex - 1] + "月神宠",
            this.imge_notOpen.visible = !e.isOpen,
            e.isOpen ? (this.imge_pet.source = ClientConfig.getPetHalfIcon(e.petId), this.tx_petName.text = PetXMLInfo.getName(e.petId)) : (this.imge_btnGet.visible = !1, this.tx_petName.text = ""),
            this.imge_pet.visible = e.isOpen
        },
        i.prototype.destroy = function() {
            this._removeEvents()
        },
        i
    } (eui.ItemRenderer);
    e.MouthPetItem = t,
    __reflect(t.prototype, "yearVip2023.MouthPetItem")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i(e) {
            var i = t.call(this) || this;
            return i.skinName = "StoryPopSkin",
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            e.DataManger.getInstance().currentSelectedId
        },
        i.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        i
    } (PopView);
    e.StoryPop = t,
    __reflect(t.prototype, "yearVip2023.StoryPop")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.CUR_YEAR = 2023,
            e.PET_ID = 4450,
            e.CUR_YEAR_INDEX = 8,
            e.TITLE_ID = 435,
            e.SUIT_ID = 437,
            e.HELP_POP_ID = 113,
            e.FOREVER_SELL_VIP_NUM = 108521,
            e.FOREVER_SELL_REWARD = 108522,
            e.FOREVER_IS_YUYUE = 123155,
            e.MONTHLY_BITBUF_USE_JP = 3000008,
            e.PV_URL = "https://www.bilibili.com/video/BV17g411b75m/?spm_id_from=333.337.search-card.all.click",
            e._isOpen = !0,
            e._isGetYearVipReward = !1,
            e._isGetYuyueReward = !1,
            e._isYuyue = !1,
            e._isGetTitleReward = !1,
            e._isGetSuitReward = !1,
            e._isGetnonoSkin = !1,
            e._isUseJp = !1,
            e._yearPetRewards_config = [[4, 5949, 1], [5, 36302, 1], [2, 42306, 1], [1, 300066, 1], [1, 1706826, 3], [1, 1706924, 3], [1, 1706925, 3], [1, 1706926, 3], [1, 1706927, 300], [1, 1706928, 300], [1, 300908, 1], [1, 300909, 1], [1, 300910, 1], [1, 300911, 1], [1, 300912, 1]],
            e._yuyueRewards_config = [[1, 300066, 1], [1, 300745, 1], [1, 300858, 1], [1, 300054, 5], [1, 1706826, 5], [1, 300024, 10], [1, 1400352, 2e5], [1, 3, 1e6]],
            e._mouthGiftRewards_config = [[1, 1, 15e4], [1, 400063, 4], [1, 1400352, 1e5], [1, 300021, 1], [1, 300064, 1], [1, 1400150, 1]],
            e._mouthGiftChangeRewards_config = [[1, 1706924, 1], [1, 1706925, 1], [1, 1706926, 1], [1, 1706924, 1], [1, 1706925, 1], [1, 1706926, 1], [1, 1706924, 1], [1, 1706925, 1], [1, 1706926, 1], [1, 1706924, 1], [1, 1706925, 1], [1, 1706926, 1]],
            e._yearPetRewards = [],
            e._yuyueRewards = [],
            e._mouthGiftRewards = [],
            e._mouthGiftChangeRewards = [],
            e
        }
        return __extends(i, t),
        i.getInstance = function() {
            return this._instance || (i._instance = new i),
            i._instance
        },
        i.prototype.initConfigData = function() {
            for (var e = 0; this._yearPetRewards.length < this._yearPetRewards_config.length; e++) {
                var t = {};
                t.type = this._yearPetRewards_config[e][0],
                t.id = this._yearPetRewards_config[e][1],
                t.count = this._yearPetRewards_config[e][2],
                this._yearPetRewards[e] = t
            }
            for (var e = 0; this._yuyueRewards.length < this._yuyueRewards_config.length; e++) {
                var t = {};
                t.type = this._yuyueRewards_config[e][0],
                t.id = this._yuyueRewards_config[e][1],
                t.count = this._yuyueRewards_config[e][2],
                this._yuyueRewards[e] = t
            }
            for (var e = 0; this._mouthGiftRewards.length < this._mouthGiftRewards_config.length; e++) {
                var t = {};
                t.type = this._mouthGiftRewards_config[e][0],
                t.id = this._mouthGiftRewards_config[e][1],
                t.count = this._mouthGiftRewards_config[e][2],
                this._mouthGiftRewards[e] = t
            }
            for (var e = 0; this._mouthGiftChangeRewards.length < this._mouthGiftChangeRewards_config.length; e++) {
                var t = {};
                t.type = this._mouthGiftChangeRewards_config[e][0],
                t.id = this._mouthGiftChangeRewards_config[e][1],
                t.count = this._mouthGiftChangeRewards_config[e][2],
                this._mouthGiftChangeRewards[e] = t
            }
        },
        i.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, VipMonthMonsterXMLInfo.setup()];
                    case 1:
                        return r.sent(),
                        e = this,
                        [4, KTool.getMultiValueByDBAsync([this.FOREVER_SELL_VIP_NUM])];
                    case 2:
                        return e.valuesByDB = r.sent(),
                        t = this,
                        [4, KTool.getMultiValueAsync([this.FOREVER_SELL_REWARD, this.FOREVER_IS_YUYUE])];
                    case 3:
                        return t.values = r.sent(),
                        i = this,
                        [4, KTool.getBitSetAsync([this.MONTHLY_BITBUF_USE_JP])];
                    case 4:
                        for (i.bitbuffValues = r.sent(), this._addVipMouth = this.valuesByDB[0], this.isYuyue = BitUtil.getBit(this.values[1], 0) > 0 ? !0 : !1, this._isUseJp = this.bitbuffValues[0] > 0 ? !0 : !1, this._isGetYearVipReward = BitUtil.getBit(this.values[0], 0) > 0 ? !0 : !1, this._isGetYuyueReward = BitUtil.getBit(this.values[0], 22) > 0 ? !0 : !1, this._isGetTitleReward = BitUtil.getBit(this.values[0], 21) > 0 ? !0 : !1, this._isGetSuitReward = BitUtil.getBit(this.values[0], 7) > 0 ? !0 : !1, this._isGetnonoSkin = BitUtil.getBit(this.values[0], 8) > 0 ? !0 : !1, this._monthGiftState = 0, n = 0; 12 > n; n++) BitUtil.getBit(this.values[0], 9 + n) > 0 && (this._monthGiftState = BitUtil.setBit(this._monthGiftState, n));
                        return this.initConfigData(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.setConfigId = function(t, i) {
            void 0 === i && (i = !0),
            this._currentSelectedId != t && (this._currentSelectedId = t, i && this.dispatchEventWith(e.YearPetEvent.event_change_selecetd_id, !1, t))
        },
        i.prototype.updateRedHot = function() {
            this.dispatchEventWith(e.YearPetEvent.event_udpdate_redHot, !1),
            EventManager.dispatchEventWith(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, !1, {
                id: 8
            })
        },
        Object.defineProperty(i.prototype, "currentSelectedId", {
            get: function() {
                return this._currentSelectedId
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.BindViewInstance = function(e) {
            this._viewIns = e
        },
        i.prototype.ClearBindViewInstance = function() {
            this._viewIns = null
        },
        i.prototype.getIsYearVip = function() {
            var e = VipMonthMonsterXMLInfo.getCurrentYear(this.CUR_YEAR_INDEX);
            return VipController.isCurYearVip || BubblerManager.getInstance().showText("只有" + e + "年费用户才能领取哦！"),
            VipController.isCurYearVip
        },
        i.prototype.getIsYearVip2 = function() {
            var e = VipMonthMonsterXMLInfo.getCurrentYear(this.CUR_YEAR_INDEX);
            return VipController.isCurYearVip || BubblerManager.getInstance().showText("只有" + e + "年费用户才能使用哦！"),
            VipController.isCurYearVip
        },
        i.prototype.getCurYearVipIsOpen = function() {
            var e = VipMonthMonsterXMLInfo.getCurrentYear(this.CUR_YEAR_INDEX);
            return SystemTimerManager.sysBJDate.getFullYear() < e ? (BubblerManager.getInstance().showText(e + "年1月1日才开启哦！"), !1) : !0
        },
        Object.defineProperty(i.prototype, "addVipMouth", {
            get: function() {
                return this._addVipMouth
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isGetYearVipReward", {
            get: function() {
                return this._isGetYearVipReward
            },
            set: function(e) {
                this._isGetYearVipReward = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isGetYuyueReward", {
            get: function() {
                return this._isGetYuyueReward
            },
            set: function(e) {
                this._isGetYuyueReward = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isYuyue", {
            get: function() {
                return this._isYuyue
            },
            set: function(e) {
                this._isYuyue = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isGetTitleReward", {
            get: function() {
                return this._isGetTitleReward
            },
            set: function(e) {
                this._isGetTitleReward = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isGetSuitReward", {
            get: function() {
                return this._isGetSuitReward
            },
            set: function(e) {
                this._isGetSuitReward = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isGetnonoSkin", {
            get: function() {
                return this._isGetnonoSkin
            },
            set: function(e) {
                this._isGetnonoSkin = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "monthGiftState", {
            get: function() {
                return this._monthGiftState
            },
            set: function(e) {
                this._monthGiftState = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "isUseJp", {
            get: function() {
                return this._isUseJp
            },
            set: function(e) {
                this._isUseJp = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "yearPetRewards", {
            get: function() {
                return this._yearPetRewards
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "yuyueRewards", {
            get: function() {
                return this._yuyueRewards
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "mouthGiftRewards", {
            get: function() {
                return this._mouthGiftRewards
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "mouthGiftChangeRewards", {
            get: function() {
                return this._mouthGiftChangeRewards
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.getIsOpen = function() {
            return this._isOpen = PayManager.canPay(),
            this._isOpen || GameInfo.isChecking || BubblerManager.getInstance().showText("暂未开放，敬请期待"),
            this._isOpen
        },
        i.prototype.destroy = function() {
            this._yearPetRewards_config = null,
            this._yuyueRewards_config = null,
            this._mouthGiftRewards_config = null,
            this._mouthGiftChangeRewards_config = null,
            this._yearPetRewards = null,
            this._yuyueRewards = null,
            this._mouthGiftRewards = null,
            this._mouthGiftChangeRewards = null,
            this.valuesByDB = null,
            this.values = null
        },
        i
    } (egret.EventDispatcher);
    e.DataManger = t,
    __reflect(t.prototype, "yearVip2023.DataManger")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = ExclusivecapacityviewSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents(),
            this._animate_mianban_0 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_0.addChild(this._animate_mianban_0),
            this._animate_mianban_0.x = 150,
            this._animate_mianban_0.y = 275,
            this._animate_mianban_0.play("mianban", 0),
            this._animate_mianban_1 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_1.addChild(this._animate_mianban_1),
            this._animate_mianban_1.x = 150,
            this._animate_mianban_1.y = 275,
            this._animate_mianban_1.play("mianban", 0),
            this._animate_mianban_2 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_2.addChild(this._animate_mianban_2),
            this._animate_mianban_2.x = 150,
            this._animate_mianban_2.y = 275,
            this._animate_mianban_2.play("mianban", 0)
        },
        t.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imge_btnMore, this._onTouchImageButton, this)
        },
        t.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.UpdateView = function() {
            return Promise.resolve()
        },
        t.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        t.prototype.hide = function() {
            e.prototype.hide.call(this),
            this.clearTweens()
        },
        t.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        t.prototype.clearTweens = function() {},
        t.prototype.completeCallBack = function() {},
        t.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.imge_btnMore:
                ModuleManager.hideAllModule(),
                ModuleManager.hideModule("yearVip2023"),
                ModuleManager.showModule("vip", ["vip"], null, null, AppDoStyle.NULL)
            }
        },
        t.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (e.BaseView);
    e.ExclusivecapacityView = t,
    __reflect(t.prototype, "yearVip2023.ExclusivecapacityView")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._customStudy = [0, 0, 0, 0, 0, 0],
            e.curNature = -1,
            e._defaultList = [["固执", "攻击", "速度"], ["固执", "攻击", "体力"], ["悠闲", "体力", "防御"], ["", "防御", "特防"], ["保守", "特攻", "速度"], ["固执", "特攻", "体力"], ["狂妄", "体力", "特防"]],
            e.currPetId = 0,
            e.skinName = FreejpviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._itemArry = new eui.ArrayCollection,
            this.list_reward.itemRenderer = e.FreeJpPetHeadItem,
            this.scroller_rewards.viewport = this.list_reward,
            this.list_reward.dataProvider = this._itemArry,
            this._initEvents(),
            this.touchEnabled = this.touchChildren = !1
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.gr_btnJipin, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.gr_btnSelect, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.gr_btnSelect_2, this._onTouchImageButton, this),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._removeEvents = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            return this.imge_used.visible = e.DataManger.getInstance().isUseJp,
            DisplayUtil.setEnabled(this.gr_btnJipin, !e.DataManger.getInstance().isUseJp, e.DataManger.getInstance().isUseJp),
            this.updateRenderList(),
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            this._selectVo = this._itemArry.getItemAt(this.list_reward.selectedIndex),
            this.currentSelectPetInfo()
        },
        i.prototype.currentSelectPetInfo = function() {
            var e = this;
            if (null != this._selectVo && void 0 != this._selectVo) {
                this._info = this._selectVo.petInfo,
                this.tx_petName.text = PetXMLInfo.getName(this._info.id),
                this.showPetAnimate(),
                this.touchEnabled = this.touchChildren = !1,
                this.tx_lv_cur.text = this._info.level.toString(),
                this.tx_tianfu_cur.text = this._info.dv.toString(),
                this.tx_learn_cur.text = this._info.totalEv.toString(),
                PetManager.getPetExHp(this._info.catchTime,
                function(t) {
                    e._exHp = t,
                    e.tx_hp_cur.text = e._exHp.toString(),
                    e.touchEnabled = e.touchChildren = !0
                }),
                this._info.defence >= this._info.s_d ? this._defaultList[3][0] = "悠闲": this._defaultList[3][0] = "狂妄";
                var t = this._defaultList[PetXMLInfo.getCharacterAttrParam(this._info.id)];
                this.tx_recommend_title.text = "[推荐]",
                this.tx_recommend.text = "" + t[0]
            } else this.touchEnabled = this.touchChildren = !0,
            this.tx_petName.text = "???",
            this.tx_lv_cur.text = "??",
            this.tx_tianfu_cur.text = "??",
            this.tx_hp_cur.text = "??",
            this.tx_learn_cur.text = "??",
            this.tx_recommend_title.text = "??",
            this.tx_recommend.text = "??",
            CjsUtil.setContainer(this.pet)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        i.prototype.clearTweens = function() {},
        i.prototype.completeCallBack = function() {},
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this.gr_btnJipin:
                if (!e.DataManger.getInstance().getIsYearVip2()) return;
                if (e.DataManger.getInstance().isUseJp) return void BubblerManager.getInstance().showText("本月已经成功使用过一键极品特权，下个月再来吧！");
                if (null == this._info) return void BubblerManager.getInstance().showText("请选择任意一个精灵后再来进行操作！");
                this._exHp >= 20 ? Alert.show("该精灵体力上限已超过20，一键极品该精灵体力上限将变为20，是否继续？",
                function() {
                    i.continueOneKey()
                }) : this.continueOneKey();
                break;
            case this.gr_btnSelect:
                if (null == this._info) return void BubblerManager.getInstance().showText("请选择任意一个精灵后再来进行操作！");
                var n = {
                    oldCustomStudy: this._customStudy,
                    fun: this.onOK,
                    caller: this
                };
                ModuleManager.showModule("learningAbilityInputAndBtnPop", ["learning_ability_input_and_btn_pop"], n, null, AppDoStyle.NULL);
                break;
            case this.gr_btnSelect_2:
                if (null == this._info) return void BubblerManager.getInstance().showText("请选择任意一个精灵后再来进行操作！");
                ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                    petinfo: this._info,
                    callBack: function(e) {
                        i.curNature = e,
                        i.curNature = e,
                        i.tx_recommend_title.text = "[选择]",
                        i.tx_recommend.text = "" + NatureXMLInfo.getName(i.curNature)
                    },
                    caller: this
                },
                null, AppDoStyle.NULL)
            }
        },
        i.prototype.onOK = function(e) {
            this._customStudy = e
        },
        i.prototype.continueOneKey = function() {
            var t = this;
            if (this._customStudy[0] + this._customStudy[1] + this._customStudy[2] + this._customStudy[3] + this._customStudy[4] + this._customStudy[5] < 510) return void BubblerManager.getInstance().showText("请为该精灵分配满510点学习力后再来进行操作！ ");
            var i = new egret.ByteArray;
            i.writeByte(this._customStudy[5]),
            i.writeBytes;
            for (var n = 0; 5 > n; n++) i.writeByte(this._customStudy[n]);
            i.position = 0,
            SocketConnection.sendByQueue(45707, [this._info.catchTime, i, -1 == this.curNature ? 100 : this.curNature],
            function(i) {
                BubblerManager.getInstance().showText("恭喜你成功使用一键极品特权，下个月再来吧！"),
                e.DataManger.getInstance().isUseJp = !0,
                e.DataManger.getInstance().updateRedHot(),
                PetManager.upDateBagPetInfo(t._info.catchTime,
                function(e) {
                    t._info = e,
                    t.UpdateView()
                })
            })
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list_reward.selectedIndex = null != this._selectVo ? this._selectVo.index: 0,
            this._selectVo = this._itemArry.getItemAt(this.list_reward.selectedIndex),
            this.currentSelectPetInfo()
        },
        i.prototype.updateRender = function() {
            var e = this._parseTileRenderData();
            this._itemArry.replaceAll(e),
            this._itemArry.refresh(),
            this.list_reward.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            var e = [],
            t = PetManager.allInfos;
            this.isHavePetTipsTx.visible = t.length <= 0 ? !0 : !1;
            for (var i = 0; i < t.length; i++) {
                var n = {};
                n.index = i,
                n.petInfo = t[i],
                e.push(n)
            }
            return e
        },
        i.prototype._goToIdx = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r, _;
                return __generator(this,
                function(a) {
                    return t = 307,
                    i = this.scroller_rewards.width,
                    n = this.scroller_rewards.viewport.contentWidth,
                    r = n - i,
                    _ = this.list_reward.layout.gap,
                    [2, DisplayUtil.ScrollerToNumAsync(e, "horizontal", t, this.scroller_rewards, _, 0, r)]
                })
            })
        },
        i.prototype.showPetAnimate = function() {
            if (this.currPetId = 0, this.pet.removeChildren(), CjsUtil.setContainer(this.pet), this._info) {
                CjsUtil.disposePetCls(this.currPetId),
                this.currPetId = this._info.id,
                CjsUtil.init(),
                CjsUtil.setContainer(this.pet);
                var e = this._info.id;
                this._info.skinId > 0 && (e = PetSkinXMLInfo.getSkinInfo(this._info.skinId).skinPetId),
                this.currPetId = e,
                CjsUtil.GetShowPetMovieClip(e).then(function(t) {
                    CjsUtil.showAnimate(t);
                    var i = PetXMLInfo.getPetOffset(e);
                    t && (t.regX = i.x, t.regY = i.y)
                })
            }
        },
        i.prototype.destroy = function() {
            this._customStudy = null,
            this._defaultList = null,
            this._itemArry = null,
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.FreeJpView = t,
    __reflect(t.prototype, "yearVip2023.FreeJpView")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = LimitedcollectionviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents(),
            this._animate_mianban_0 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_0.addChild(this._animate_mianban_0),
            this._animate_mianban_0.x = 150,
            this._animate_mianban_0.y = 275,
            this._animate_mianban_0.play("mianban", 0),
            this._animate_mianban_1 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_1.addChild(this._animate_mianban_1),
            this._animate_mianban_1.x = 150,
            this._animate_mianban_1.y = 275,
            this._animate_mianban_1.play("mianban", 0),
            this._animate_mianban_2 = SpineUtil.createAnimate("mianban_2023"),
            this.animat_bg_2.addChild(this._animate_mianban_2),
            this._animate_mianban_2.x = 150,
            this._animate_mianban_2.y = 275,
            this._animate_mianban_2.play("mianban", 0)
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.gr_getBtn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.gr_getBtn_1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.gr_getBtn_2, this._onTouchImageButton, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            for (var t = [e.DataManger.getInstance().isGetTitleReward, e.DataManger.getInstance().isGetSuitReward, e.DataManger.getInstance().isGetnonoSkin], i = 0; 3 > i; i++) t[i] ? (this["imge_tag_get_" + i].visible = !0, this["gr_getBtn_" + i].visible = !1) : (this["imge_tag_get_" + i].visible = !1, this["gr_getBtn_" + i].visible = !0);
            var n = AchieveXMLInfo.getTitleEffDesc(e.DataManger.getInstance().TITLE_ID);
            this.tx_desc_0.text = n;
            var r = ItemSeXMLInfo.getSuitEff(e.DataManger.getInstance().SUIT_ID);
            return this.tx_desc_1.text = r,
            this.tx_desc_nono.text = e.DataManger.getInstance().CUR_YEAR + "年年费NONO",
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this.gr_getBtn_0:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                SocketConnection.sendWithCallback(CommandID.YEAR_VIP_2016,
                function(t) {
                    e.DataManger.getInstance().isGetTitleReward = !0,
                    e.DataManger.getInstance().updateRedHot(),
                    i.UpdateView()
                },
                22);
                break;
            case this.gr_getBtn_1:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                SocketConnection.sendWithCallback(CommandID.YEAR_VIP_2016,
                function(t) {
                    e.DataManger.getInstance().isGetSuitReward = !0,
                    e.DataManger.getInstance().updateRedHot(),
                    i.UpdateView()
                },
                8);
                break;
            case this.gr_getBtn_2:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                SocketConnection.sendWithCallback(CommandID.YEAR_VIP_2016,
                function(t) {
                    Alarm.show("恭喜已获得" + e.DataManger.getInstance().CUR_YEAR + "年年费NONO！"),
                    e.DataManger.getInstance().isGetnonoSkin = !0,
                    e.DataManger.getInstance().updateRedHot(),
                    i.UpdateView()
                },
                9)
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this._animate_mianban_0 = null,
            this._animate_mianban_1 = null,
            this._animate_mianban_2 = null,
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.LimitedCollectionView = t,
    __reflect(t.prototype, "yearVip2023.LimitedCollectionView")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = MainViewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents(),
            this._animate_vip = SpineUtil.createAnimate("vipnono_2023"),
            this.gr_btn_open.addChild(this._animate_vip),
            this._animate_vip.x = 120,
            this._animate_vip.y = 50,
            this._animate_vip.play("vip", 0)
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imge_btn_petInfo, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_btn_story, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_btn_music, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.gr_btn_open, this._onTouchImageButton, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            return this.tx_num.text = "已累计充值" + String(e.DataManger.getInstance().addVipMouth) + "月",
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        i.prototype.clearTweens = function() {},
        i.prototype.completeCallBack = function() {},
        i.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.imge_btn_petInfo:
                PetManager.showPetIntroduce(e.DataManger.getInstance().PET_ID);
                break;
            case this.imge_btn_story:
                var i = PopViewManager.createDefaultStyleObject();
                i.maskShapeStyle.maskAlpha = .8,
                PopViewManager.getInstance().openView(new e.StoryPop(null), i);
                break;
            case this.imge_btn_music:
                window.open(e.DataManger.getInstance().PV_URL);
                break;
            case this.gr_btn_open:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                VipController.openVip()
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.MainView = t,
    __reflect(t.prototype, "yearVip2023.MainView")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = MouthgiftviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._itemArry = new eui.ArrayCollection,
            this.list_reward.itemRenderer = e.MouthGiftItem,
            this.scroller_rewards.viewport = this.list_reward,
            this.list_reward.dataProvider = this._itemArry,
            this._initEvents()
        },
        i.prototype._initEvents = function() {},
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            return this.updateRenderList(),
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            i = {};
            i.id = t.id,
            tipsPop.TipsPop.openItemPop(i)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this)
        },
        i.prototype.updateRenderList = function() {
            this.updateRender()
        },
        i.prototype.updateRender = function() {
            var e = this._parseTileRenderData();
            this._itemArry.replaceAll(e),
            this._itemArry.refresh(),
            this.list_reward.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            for (var t = [], i = 0; 12 > i; i++) {
                var n = {};
                BitUtil.getBit(e.DataManger.getInstance().monthGiftState, i) > 0 ? n.isGet = !0 : n.isGet = !1,
                n.index = i,
                n.rewardIdsArr = [],
                t.push(n)
            }
            return t
        },
        i.prototype._goToIdx = function(e) {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, i, n, r, _;
                return __generator(this,
                function(a) {
                    return t = 307,
                    i = this.scroller_rewards.width,
                    n = this.scroller_rewards.viewport.contentWidth,
                    r = n - i,
                    _ = this.list_reward.layout.gap,
                    [2, DisplayUtil.ScrollerToNumAsync(e, "horizontal", t, this.scroller_rewards, _, 0, r)]
                })
            })
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.MouthGiftView = t,
    __reflect(t.prototype, "yearVip2023.MouthGiftView")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e._selectedIndex = 0,
            e.skinName = MouthpetviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._itemArry = new eui.ArrayCollection,
            this.list_reward.itemRenderer = e.MouthPetItem,
            this.scroller_rewards.viewport = this.list_reward,
            this.list_reward.dataProvider = this._itemArry,
            this._initEvents()
        },
        i.prototype._initEvents = function() {
            EventManager.addEventListener("update_mouthPet_view", this.UpdateView, this)
        },
        i.prototype._removeEvents = function() {
            EventManager.removeEventListener("update_mouthPet_view", this.UpdateView, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            var t = this;
            this.touchEnabled = this.touchChildren = !1;
            var i = VipMonthMonsterXMLInfo.getPetForever(e.DataManger.getInstance().CUR_YEAR_INDEX);
            return KTool.getMultiValue(i,
            function(e) {
                t._valusesArr = [];
                for (var n = 0; n < i.length; n++) t._valusesArr.push(e[n]);
                t.touchEnabled = t.touchChildren = !0,
                t.updateRenderList()
            }),
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.item;
            ModuleManager.showModule("petManualInfo", ["pet_info_manual"], {
                data: t.petId,
                type: "pet",
                thisObj: this
            },
            "", AppDoStyle.HIDEN)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this)
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.list_reward.selectedIndex = this._selectedIndex,
            this._selectVo = this._itemArry.getItemAt(this.list_reward.selectedIndex)
        },
        i.prototype.updateRender = function() {
            var e = this._parseTileRenderData();
            this._itemArry.replaceAll(e),
            this._itemArry.refresh(),
            this.list_reward.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            for (var t = [], i = VipMonthMonsterXMLInfo.getMonthNum(e.DataManger.getInstance().CUR_YEAR_INDEX), n = VipMonthMonsterXMLInfo.getMonsterIds(e.DataManger.getInstance().CUR_YEAR_INDEX), r = 0; 12 > r; r++) {
                var _ = {};
                _.index = r + 1,
                _.petId = n[r],
                _.isOpen = _.index <= i ? !0 : !1,
                _.isGet = this._valusesArr[r] > 0 ? !0 : !1,
                t.push(_)
            }
            return t
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.MouthPetView = t,
    __reflect(t.prototype, "yearVip2023.MouthPetView")
} (yearVip2023 || (yearVip2023 = {}));
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
    return new(i || (i = Promise))(function(r, _) {
        function a(e) {
            try {
                s(n.next(e))
            } catch(t) {
                _(t)
            }
        }
        function o(e) {
            try {
                s(n["throw"](e))
            } catch(t) {
                _(t)
            }
        }
        function s(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value)
            }).then(a, o)
        }
        s((n = n.apply(e, t || [])).next())
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
        if (r) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (r = 1, _ && (a = _[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(a = a.call(_, i[1])).done) return a;
            switch (_ = 0, a && (i = [0, a.value]), i[0]) {
            case 0:
            case 1:
                a = i;
                break;
            case 4:
                return s.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                s.label++,
                _ = i[1],
                i = [0];
                continue;
            case 7:
                i = s.ops.pop(),
                s.trys.pop();
                continue;
            default:
                if (a = s.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    s = 0;
                    continue
                }
                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                    s.label = i[1];
                    break
                }
                if (6 === i[0] && s.label < a[1]) {
                    s.label = a[1],
                    a = i;
                    break
                }
                if (a && s.label < a[2]) {
                    s.label = a[2],
                    s.ops.push(i);
                    break
                }
                a[2] && s.ops.pop(),
                s.trys.pop();
                continue
            }
            i = t.call(e, s)
        } catch(n) {
            i = [6, n],
            _ = 0
        } finally {
            r = a = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, _, a, o, s = {
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = YearpetviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._itemArry = new eui.ArrayCollection,
            this.list_reward.itemRenderer = e.itemYearPetSmall,
            this.scroller_rewards.viewport = this.list_reward,
            this.list_reward.dataProvider = this._itemArry,
            this._itemArry_big = new eui.ArrayCollection,
            this.list_reward_big.itemRenderer = e.itemYearPetBig,
            this.scroller_rewards_big.viewport = this.list_reward_big,
            this.list_reward_big.dataProvider = this._itemArry_big,
            this._initEvents(),
            this.updateRenderList()
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btnGetnow, this._onTouchImageButton, this),
            this.list_reward.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.list_reward_big.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this)
        },
        i.prototype._removeEvents = function() {
            this.list_reward.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            this.list_reward_big.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onTouchTapItem, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.UpdateView = function() {
            return e.DataManger.getInstance().isGetYearVipReward ? (this.tagGot.visible = !0, this.btnGetnow.visible = !1) : (this.tagGot.visible = !1, this.btnGetnow.visible = !0),
            this.updateRenderList(),
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(t) {
            var i = t.item;
            if (i.type <= 3) if (2 == i.type) {
                var n = {};
                n.ins = i.id,
                tipsPop.TipsPop.openCounterMarkPop(n, void 0, LevelManager.topLevel)
            } else {
                var r = {};
                r.id = i.id,
                tipsPop.TipsPop.openItemPop(r, void 0, LevelManager.topLevel)
            } else 4 == i.type ? ModuleManager.showModule("petEffDescPanel", ["pet_eff_desc_panel"], {
                obj: e.DataManger.getInstance().PET_ID,
                parentCon: egret.lifecycle.stage,
                isFight: !0
            },
            "", AppDoStyle.NULL) : tipsPop.TipsPop.openSkillPop({
                id: i.id,
                petInfo: null
            })
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        i.prototype.clearTweens = function() {},
        i.prototype.completeCallBack = function() {},
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this.btnGetnow:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                SocketConnection.sendWithCallback(CommandID.YEAR_VIP_2016,
                function(t) {
                    e.DataManger.getInstance().isGetYearVipReward = !0,
                    e.DataManger.getInstance().updateRedHot(),
                    i.UpdateView()
                },
                1)
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i.prototype.updateRenderList = function() {
            this.updateRender(),
            this.updateRender_big()
        },
        i.prototype.updateRender = function() {
            var e = this._parseTileRenderData();
            this._itemArry.replaceAll(e),
            this._itemArry.refresh(),
            this.list_reward.validateNow()
        },
        i.prototype.updateRender_big = function() {
            var e = this._parseTileRenderData_big();
            this._itemArry_big.replaceAll(e),
            this._itemArry_big.refresh(),
            this.list_reward_big.validateNow()
        },
        i.prototype._parseTileRenderData = function() {
            for (var t = e.DataManger.getInstance().yearPetRewards, i = [], n = 0; n < t.length; n++) if (n >= 3) {
                var r = t[n];
                i.push(r)
            }
            return i
        },
        i.prototype._parseTileRenderData_big = function() {
            for (var t = e.DataManger.getInstance().yearPetRewards, i = [], n = 0; n < t.length; n++) if (3 > n) {
                var r = t[n];
                i.push(r)
            }
            return i
        },
        i
    } (e.BaseView);
    e.YearPetView = t,
    __reflect(t.prototype, "yearVip2023.YearPetView")
} (yearVip2023 || (yearVip2023 = {}));
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
yearVip2023; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.skinName = YuyuegiftviewSkin,
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this.imge_base_bg.touchEnabled = !1,
            this._initEvents(),
            this.initItemView()
        },
        i.prototype.initItemView = function() {
            this._animate_bglizi = SpineUtil.createAnimate("mianban_2023"),
            this.addChild(this._animate_bglizi),
            this._animate_bglizi.scaleX = this._animate_bglizi.scaleY = 1,
            this._animate_bglizi.x = 680,
            this._animate_bglizi.y = 400,
            this._animate_bglizi.touchEnabled = this._animate_bglizi.touchChildren = !1,
            this.showAnim_bglizi(),
            this._animate_diguang = SpineUtil.createAnimate("mianban_2023"),
            this.addChild(this._animate_diguang),
            this._animate_diguang.scaleX = this._animate_diguang.scaleY = 1,
            this._animate_diguang.x = 650,
            this._animate_diguang.y = 550,
            this._animate_diguang.touchEnabled = this._animate_diguang.touchChildren = !1,
            this.showAnim_diguang()
        },
        i.prototype.showAnim_bglizi = function() {
            this._animate_bglizi.visible = !0,
            this._animate_bglizi.play("bg_lizi", 0)
        },
        i.prototype.hideAnim_bglizi = function() {
            this._animate_bglizi.stopAll(),
            this._animate_bglizi.visible = !1
        },
        i.prototype.showAnim_diguang = function() {
            this._animate_diguang.visible = !0,
            this._animate_diguang.play("diguang", 0)
        },
        i.prototype._initEvents = function() {
            ImageButtonUtil.add(this.imge_btnGet, this._onTouchImageButton, this);
            for (var e = 0; 3 > e; e++) this["itemBig_" + e].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this);
            for (var t = 0; 5 > t; t++) this["item_" + t].addEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this)
        },
        i.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this);
            for (var e = 0; 3 > e; e++) this["itemBig_" + e].removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this);
            for (var t = 0; 5 > t; t++) this["item_" + t].removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onTouchTapItem, this)
        },
        i.prototype.UpdateView = function() {
            for (var t = 0; 3 > t; t++) this["itemBig_" + t].data = e.DataManger.getInstance().yuyueRewards[t],
            this["itemBig_" + t].dataChanged();
            for (var i = 0; 5 > i; i++) this["item_" + i].data = e.DataManger.getInstance().yuyueRewards[i + 3],
            this["item_" + i].dataChanged();
            return this.imge_done.visible = e.DataManger.getInstance().isYuyue,
            e.DataManger.getInstance().isGetYuyueReward ? (this.imge_btnGet.visible = !1, this.imge_get_flag.visible = !0) : (this.imge_btnGet.visible = !0, this.imge_get_flag.visible = !1),
            Promise.resolve()
        },
        i.prototype._onTouchTapItem = function(e) {
            var t = e.currentTarget,
            i = t.data,
            n = {};
            n.id = i.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        i.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        i.prototype._onTouchImageButton = function(t) {
            var i = this;
            switch (t.currentTarget) {
            case this.imge_btnGet:
                if (!e.DataManger.getInstance().getIsYearVip()) return;
                e.DataManger.getInstance().isYuyue ? SocketConnection.sendWithCallback(43685,
                function(t) {
                    e.DataManger.getInstance().isGetYuyueReward = !0,
                    e.DataManger.getInstance().updateRedHot(),
                    i.UpdateView()
                },
                23) : BubblerManager.getInstance().showText("很抱歉，你尚未进行年费预约，无法领取预约礼包！", !0)
            }
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            this._animate_bglizi = null,
            this._animate_diguang = null,
            t.prototype.destroy.call(this)
        },
        i
    } (e.BaseView);
    e.YuyueGiftView = t,
    __reflect(t.prototype, "yearVip2023.YuyueGiftView")
} (yearVip2023 || (yearVip2023 = {}));
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
generateEUI.paths["resource/eui_skins/comp/item_yearPet_big.exml"] = window.item_yearPet_big_Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg", "imge_icon", "tx_count", "gr_yearPet_item_big"],
        this.height = 73,
        this.width = 72,
        this.elementsContent = [this.gr_yearPet_item_big_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_yearPet_item_big_i = function() {
        var e = new eui.Group;
        return this.gr_yearPet_item_big = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.tx_count_i()],
        e
    },
    i.imge_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg = e,
        e.source = "yearvip2022_yearpetview_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.height = 55,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e.width = 55,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16776958,
        e.width = 65,
        e.x = 0,
        e.y = 53,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/item_yearPet_samll.exml"] = window.item_yearPet_samll_Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg", "imge_icon", "tx_count", "gr_yearPet_item_small"],
        this.height = 53,
        this.width = 53,
        this.elementsContent = [this.gr_yearPet_item_small_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_yearPet_item_small_i = function() {
        var e = new eui.Group;
        return this.gr_yearPet_item_small = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.tx_count_i()],
        e
    },
    i.imge_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg = e,
        e.source = "yearvip2022_yearpetview_imge_item_bg2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.height = 42,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e.width = 42,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16776958,
        e.width = 48,
        e.x = 0,
        e.y = 34,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemBigSkin.exml"] = window.ItemBigSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg", "imge_icon", "tx_count", "item_big"],
        this.height = 80,
        this.width = 80,
        this.elementsContent = [this.item_big_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.item_big_i = function() {
        var e = new eui.Group;
        return this.item_big = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.tx_count_i()],
        e
    },
    i.imge_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg = e,
        e.source = "yearvip2022_yuyuegiftview_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 15,
        e.y = 15,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textColor = 16776958,
        e.x = 58,
        e.y = 63,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemSmallSkin.exml"] = window.ItemSmallSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg", "imge_icon", "tx_count", "gr_item"],
        this.height = 73,
        this.width = 73,
        this.elementsContent = [this.gr_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_item_i = function() {
        var e = new eui.Group;
        return this.gr_item = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_i(), this.imge_icon_i(), this.tx_count_i()],
        e
    },
    i.imge_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg = e,
        e.source = "yearvip2022_yearpetview_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.height = 50,
        e.source = "",
        e.width = 50,
        e.x = 10,
        e.y = 13,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16776958,
        e.width = 60,
        e.x = 5,
        e.y = 53,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemSmallstyle3Skin.exml"] = window.ItemSmllstyle3Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_icon", "tx_count", "item_0"],
        this.height = 66,
        this.width = 64,
        this.elementsContent = [this.item_0_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.item_0_i = function() {
        var e = new eui.Group;
        return this.item_0 = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_icon_i(), this.tx_count_i()],
        e
    },
    i.imge_item_icon_i = function() {
        var e = new eui.Image;
        return this.imge_item_icon = e,
        e.height = 50,
        e.horizontalCenter = 0,
        e.source = "",
        e.verticalCenter = 0,
        e.width = 50,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16776958,
        e.width = 60,
        e.x = 3,
        e.y = 53,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/ItemSmllstyle2Skin.exml"] = window.ItemSmllstyle2Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["dikuang2", "icon", "tx_count", "item_0"],
        this.height = 70,
        this.width = 70,
        this.elementsContent = [this.item_0_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.item_0_i = function() {
        var e = new eui.Group;
        return this.item_0 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.dikuang2_i(), this.icon_i(), this.tx_count_i()],
        e
    },
    i.dikuang2_i = function() {
        var e = new eui.Image;
        return this.dikuang2 = e,
        e.source = "yearvip2022_yuyuegiftview_dikuang2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 42,
        e.source = "",
        e.width = 42,
        e.x = 14,
        e.y = 16,
        e
    },
    i.tx_count_i = function() {
        var e = new eui.Label;
        return this.tx_count = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 14,
        e.stroke = 1,
        e.strokeColor = 1712696,
        e.text = "99",
        e.textAlign = "right",
        e.textColor = 16776958,
        e.width = 61,
        e.x = 2,
        e.y = 52,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/FreeJpPetHeadItemSkin.exml"] = window.FreeJpPetHeadItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_head_bg", "imge_head_select", "imge_head"],
        this.height = 92,
        this.width = 92,
        this.elementsContent = [this.imge_head_bg_i(), this.imge_head_select_i(), this.imge_head_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imge_head_bg_i = function() {
        var e = new eui.Image;
        return this.imge_head_bg = e,
        e.source = "yearvip2022_freejpview_imge_head_bg_png",
        e.x = 9,
        e.y = 9,
        e
    },
    i.imge_head_select_i = function() {
        var e = new eui.Image;
        return this.imge_head_select = e,
        e.source = "yearvip2022_freejpview_imge_head_select_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_head_i = function() {
        var e = new eui.Image;
        return this.imge_head = e,
        e.height = 71,
        e.source = "",
        e.width = 71,
        e.x = 11,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/MouthGiftItemSkin.exml"] = window.MouthGiftItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_reward_item_bg", "imge_mounth_icon", "tx_txtLabel", "gr_btnGet", "imge_tag", "itemSmallStyle3_0", "itemSmallStyle3_1", "itemSmallStyle3_2", "itemSmallStyle3_3", "itemSmallStyle3_4", "itemSmallStyle3_5", "itemSmallStyle3_6"],
        this.height = 100,
        this.width = 765,
        this.elementsContent = [this.imge_reward_item_bg_i(), this.imge_mounth_icon_i(), this.gr_btnGet_i(), this.imge_tag_i(), this.itemSmallStyle3_0_i(), this.itemSmallStyle3_1_i(), this.itemSmallStyle3_2_i(), this.itemSmallStyle3_3_i(), this.itemSmallStyle3_4_i(), this.itemSmallStyle3_5_i(), this.itemSmallStyle3_6_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.imge_reward_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_reward_item_bg = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.source = "yearvip2022_mouthgiftview_imge_reward_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_mounth_icon_i = function() {
        var e = new eui.Image;
        return this.imge_mounth_icon = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.source = "yearvip2022_mouthgiftview_icon_1_png",
        e.x = 18,
        e.y = 28,
        e
    },
    i.gr_btnGet_i = function() {
        var e = new eui.Group;
        return this.gr_btnGet = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.x = 631,
        e.y = 30,
        e.elementsContent = [this._Image1_i(), this.tx_txtLabel_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 135,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_txtLabel_i = function() {
        var e = new eui.Label;
        return this.tx_txtLabel = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "领 取",
        e.textColor = 10181146,
        e.x = 43,
        e.y = 13,
        e
    },
    i.imge_tag_i = function() {
        var e = new eui.Image;
        return this.imge_tag = e,
        e.scaleX = .9,
        e.source = "yearvip2022_yearpetview_taggot_png",
        e.x = 628,
        e.y = 34,
        e
    },
    i.itemSmallStyle3_0_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_0 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 110,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_1_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_1 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 183,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_2_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_2 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 256,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_3_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_3 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 329,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_4_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_4 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 402,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_5_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_5 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 475,
        e.y = 23,
        e
    },
    i.itemSmallStyle3_6_i = function() {
        var e = new yearVip2023.ItemSmallStyle3;
        return this.itemSmallStyle3_6 = e,
        e.scaleX = .9,
        e.scaleY = .85,
        e.skinName = "ItemSmllstyle3Skin",
        e.x = 548,
        e.y = 23,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/MouthPetItemSkin.exml"] = window.MouthPetItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_pet", "imge_notOpen", "imge_mask", "imge_kuang", "imge_btnGet", "imge_linedone", "tx_petName", "imge_top_bg", "tx_title", "tx_limit_num", "imge_flag", "rect_touch", "gr_mouthPet_item"],
        this.height = 267,
        this.width = 168,
        this.elementsContent = [this.gr_mouthPet_item_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_mouthPet_item_i = function() {
        var e = new eui.Group;
        return this.gr_mouthPet_item = e,
        e.scaleX = .9,
        e.scaleY = .9,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_pet_i(), this.imge_notOpen_i(), this.imge_mask_i(), this.imge_kuang_i(), this.imge_btnGet_i(), this.imge_linedone_i(), this.tx_petName_i(), this.imge_top_bg_i(), this.tx_title_i(), this.tx_limit_num_i(), this.imge_flag_i(), this.rect_touch_i()],
        e
    },
    i.imge_pet_i = function() {
        var e = new eui.Image;
        return this.imge_pet = e,
        e.source = "",
        e.x = 5,
        e.y = 5,
        e
    },
    i.imge_notOpen_i = function() {
        var e = new eui.Image;
        return this.imge_notOpen = e,
        e.source = "yearvip2022_mouthpetview_imge_notopen_png",
        e.x = 6,
        e.y = 6,
        e
    },
    i.imge_mask_i = function() {
        var e = new eui.Image;
        return this.imge_mask = e,
        e.source = "yearvip2022_mouthpetview_imge_mask_png",
        e.x = 6,
        e.y = 158,
        e
    },
    i.imge_kuang_i = function() {
        var e = new eui.Image;
        return this.imge_kuang = e,
        e.source = "yearvip2022_mouthpetview_imge_kuang_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_btnGet_i = function() {
        var e = new eui.Image;
        return this.imge_btnGet = e,
        e.source = "yearvip2022_mouthpetview_imge_btnget_png",
        e.x = 3,
        e.y = 252,
        e
    },
    i.imge_linedone_i = function() {
        var e = new eui.Image;
        return this.imge_linedone = e,
        e.source = "yearvip2022_mouthpetview_imge_linedone_png",
        e.x = 11,
        e.y = 255,
        e
    },
    i.tx_petName_i = function() {
        var e = new eui.Label;
        return this.tx_petName = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "战武天尊",
        e.textColor = 15660287,
        e.x = 53,
        e.y = 233,
        e
    },
    i.imge_top_bg_i = function() {
        var e = new eui.Image;
        return this.imge_top_bg = e,
        e.source = "yearvip2022_mouthpetview_imge_top_bg_png",
        e.x = 6,
        e.y = 6,
        e
    },
    i.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "一月神宠",
        e.textColor = 16776564,
        e.x = 53,
        e.y = 9,
        e
    },
    i.tx_limit_num_i = function() {
        var e = new eui.Label;
        return this.tx_limit_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "限兑：1/1",
        e.textColor = 10923696,
        e.visible = !1,
        e.x = 56,
        e.y = 213,
        e
    },
    i.imge_flag_i = function() {
        var e = new eui.Label;
        return this.imge_flag = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "已领取",
        e.textColor = 16436288,
        e.x = 65,
        e.y = 261,
        e
    },
    i.rect_touch_i = function() {
        var e = new eui.Rect;
        return this.rect_touch = e,
        e.anchorOffsetY = 0,
        e.fillAlpha = 0,
        e.height = 241.33,
        e.width = 168,
        e.x = 6,
        e.y = 6,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MainViewSkin.exml"] = window.MainViewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["btn_close", "imge_btn_petInfo", "imge_btn_story", "imge_btn_music", "imge_btn_open_vip", "gr_btn_open", "imge_tx_bg", "tx_num", "gr_right"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_right_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_right_i = function() {
        var e = new eui.Group;
        return this.gr_right = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 641,
        e.width = 509,
        e.x = 626,
        e.y = 0,
        e.elementsContent = [this.btn_close_i(), this._Image1_i(), this.imge_btn_petInfo_i(), this.imge_btn_story_i(), this.imge_btn_music_i(), this.gr_btn_open_i(), this.imge_tx_bg_i(), this.tx_num_i()],
        e
    },
    i.btn_close_i = function() {
        var e = new eui.Image;
        return this.btn_close = e,
        e.source = "yearvip2022_main_imge_ommon_pop_btn_close_png",
        e.visible = !1,
        e.x = 444,
        e.y = 17,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_title_png",
        e.x = 39,
        e.y = 61,
        e
    },
    i.imge_btn_petInfo_i = function() {
        var e = new eui.Image;
        return this.imge_btn_petInfo = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_btn_petinfo_png",
        e.x = 66.96,
        e.y = 258.34,
        e
    },
    i.imge_btn_story_i = function() {
        var e = new eui.Image;
        return this.imge_btn_story = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_btn_story_png",
        e.x = 192.96,
        e.y = 258.34,
        e
    },
    i.imge_btn_music_i = function() {
        var e = new eui.Image;
        return this.imge_btn_music = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_btn_music_png",
        e.x = 318.96,
        e.y = 258.34,
        e
    },
    i.gr_btn_open_i = function() {
        var e = new eui.Group;
        return this.gr_btn_open = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.x = 228,
        e.y = 484,
        e.elementsContent = [this.imge_btn_open_vip_i()],
        e
    },
    i.imge_btn_open_vip_i = function() {
        var e = new eui.Image;
        return this.imge_btn_open_vip = e,
        e.source = "yearvip2022_main_imge_btn_open_vip_png",
        e.visible = !1,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_tx_bg_i = function() {
        var e = new eui.Image;
        return this.imge_tx_bg = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_tx_bg_png",
        e.x = 228,
        e.y = 574,
        e
    },
    i.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.scaleX = 1,
        e.scaleY = 1,
        e.size = 18,
        e.text = "已累计充值00月",
        e.textColor = 16769140,
        e.x = 290,
        e.y = 576,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/YearpetviewSkin.exml"] = window.YearpetviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_pet", "imge_btn_bg", "list_reward_big", "scroller_rewards_big", "gr_yearPet_item_big", "list_reward", "scroller_rewards", "gr_yearPet_item_small", "btnGetnow", "tagGot", "gr_yearPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_yearPet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_yearPet_i = function() {
        var e = new eui.Group;
        return this.gr_yearPet = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_pet_i(), this.imge_btn_bg_i(), this.gr_yearPet_item_big_i(), this.gr_yearPet_item_small_i(), this.btnGetnow_i(), this.tagGot_i()],
        e
    },
    i.imge_pet_i = function() {
        var e = new eui.Image;
        return this.imge_pet = e,
        e.left = 0,
        e.right = 0,
        e.source = "",
        e.y = 0,
        e
    },
    i.imge_btn_bg_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg = e,
        e.source = "yearvip2022_yearpetview_imge_btn_bg_png",
        e.x = 815,
        e.y = 111,
        e
    },
    i.gr_yearPet_item_big_i = function() {
        var e = new eui.Group;
        return this.gr_yearPet_item_big = e,
        e.anchorOffsetY = 0,
        e.height = 92,
        e.x = 837,
        e.y = 170,
        e.elementsContent = [this.scroller_rewards_big_i()],
        e
    },
    i.scroller_rewards_big_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rewards_big = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 93,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "off",
        e.width = 239,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 90,
        e.width = 238,
        e.elementsContent = [this.list_reward_big_i()],
        e
    },
    i.list_reward_big_i = function() {
        var e = new eui.List;
        return this.list_reward_big = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 90,
        e.width = 238,
        e.x = 0,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e.gap = 10,
        e
    },
    i.gr_yearPet_item_small_i = function() {
        var e = new eui.Group;
        return this.gr_yearPet_item_small = e,
        e.x = 838,
        e.y = 261,
        e.elementsContent = [this.scroller_rewards_i()],
        e
    },
    i.scroller_rewards_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rewards = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 221,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "auto",
        e.width = 239,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group2_i(),
        e
    },
    i._Group2_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 216,
        e.width = 238,
        e.elementsContent = [this.list_reward_i()],
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 127,
        e.width = 238,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 7,
        e.verticalGap = 7,
        e
    },
    i.btnGetnow_i = function() {
        var e = new eui.Image;
        return this.btnGetnow = e,
        e.source = "yearvip2022_yearpetview_btngetnow_png",
        e.x = 885,
        e.y = 481,
        e
    },
    i.tagGot_i = function() {
        var e = new eui.Image;
        return this.tagGot = e,
        e.source = "yearvip2022_yearpetview_taggot_png",
        e.x = 889,
        e.y = 495,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/YuyuegiftviewSkin.exml"] = window.YuyuegiftviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_title", "imge_view_bg", "tx_isDone", "imge_none", "imge_done", "itemBig_0", "itemBig_1", "itemBig_2", "item_big", "item_0", "item_1", "item_2", "item_3", "item_4", "gr_items", "imge_base_bg", "imge_btnGet", "imge_get_flag", "gr_yuyueGift"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_yuyueGift_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_yuyueGift_i = function() {
        var e = new eui.Group;
        return this.gr_yuyueGift = e,
        e.x = 300,
        e.y = 64,
        e.elementsContent = [this.imge_title_i(), this.imge_view_bg_i(), this.tx_isDone_i(), this.imge_none_i(), this.imge_done_i(), this.item_big_i(), this.gr_items_i(), this.imge_base_bg_i(), this.imge_btnGet_i(), this.imge_get_flag_i()],
        e
    },
    i.imge_title_i = function() {
        var e = new eui.Image;
        return this.imge_title = e,
        e.source = "yearvip2022_yuyuegiftview_imge_title_png",
        e.x = 38,
        e.y = 0,
        e
    },
    i.imge_view_bg_i = function() {
        var e = new eui.Image;
        return this.imge_view_bg = e,
        e.source = "yearvip2022_yuyuegiftview_imge_view_bg_png",
        e.x = 0,
        e.y = 72,
        e
    },
    i.tx_isDone_i = function() {
        var e = new eui.Label;
        return this.tx_isDone = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "是否完成预约",
        e.textColor = 16772273,
        e.x = 586,
        e.y = 263,
        e
    },
    i.imge_none_i = function() {
        var e = new eui.Image;
        return this.imge_none = e,
        e.source = "yearvip2022_yuyuegiftview_imge_none_png",
        e.x = 556,
        e.y = 261,
        e
    },
    i.imge_done_i = function() {
        var e = new eui.Image;
        return this.imge_done = e,
        e.source = "yearvip2022_yuyuegiftview_imge_done_png",
        e.x = 556,
        e.y = 261,
        e
    },
    i.item_big_i = function() {
        var e = new eui.Group;
        return this.item_big = e,
        e.x = 48,
        e.y = 238,
        e.elementsContent = [this.itemBig_0_i(), this.itemBig_1_i(), this.itemBig_2_i()],
        e
    },
    i.itemBig_0_i = function() {
        var e = new yearVip2023.ItemBig;
        return this.itemBig_0 = e,
        e.skinName = "ItemBigSkin",
        e.x = 0,
        e.y = 0,
        e
    },
    i.itemBig_1_i = function() {
        var e = new yearVip2023.ItemBig;
        return this.itemBig_1 = e,
        e.skinName = "ItemBigSkin",
        e.x = 91,
        e.y = 0,
        e
    },
    i.itemBig_2_i = function() {
        var e = new yearVip2023.ItemBig;
        return this.itemBig_2 = e,
        e.skinName = "ItemBigSkin",
        e.x = 182,
        e.y = 0,
        e
    },
    i.gr_items_i = function() {
        var e = new eui.Group;
        return this.gr_items = e,
        e.x = 48,
        e.y = 331,
        e.elementsContent = [this.item_0_i(), this.item_1_i(), this.item_2_i(), this.item_3_i(), this.item_4_i()],
        e
    },
    i.item_0_i = function() {
        var e = new yearVip2023.ItemSmallStyle2;
        return this.item_0 = e,
        e.skinName = "ItemSmllstyle2Skin",
        e.x = 0,
        e.y = 0,
        e
    },
    i.item_1_i = function() {
        var e = new yearVip2023.ItemSmallStyle2;
        return this.item_1 = e,
        e.skinName = "ItemSmllstyle2Skin",
        e.x = 78,
        e.y = 0,
        e
    },
    i.item_2_i = function() {
        var e = new yearVip2023.ItemSmallStyle2;
        return this.item_2 = e,
        e.skinName = "ItemSmllstyle2Skin",
        e.x = 156,
        e.y = 0,
        e
    },
    i.item_3_i = function() {
        var e = new yearVip2023.ItemSmallStyle2;
        return this.item_3 = e,
        e.skinName = "ItemSmllstyle2Skin",
        e.x = 234,
        e.y = 0,
        e
    },
    i.item_4_i = function() {
        var e = new yearVip2023.ItemSmallStyle2;
        return this.item_4 = e,
        e.skinName = "ItemSmllstyle2Skin",
        e.x = 312,
        e.y = 0,
        e
    },
    i.imge_base_bg_i = function() {
        var e = new eui.Image;
        return this.imge_base_bg = e,
        e.source = "yearvip2022_yuyuegiftview_imge_base_bg_png",
        e.visible = !1,
        e.x = 97,
        e.y = 284,
        e
    },
    i.imge_btnGet_i = function() {
        var e = new eui.Image;
        return this.imge_btnGet = e,
        e.source = "yearvip2022_yuyuegiftview_imge_btnget_png",
        e.x = 553,
        e.y = 334,
        e
    },
    i.imge_get_flag_i = function() {
        var e = new eui.Image;
        return this.imge_get_flag = e,
        e.source = "yearvip2022_yuyuegiftview_imge_get_flag_png",
        e.x = 563,
        e.y = 350,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/LimitedcollectionviewSkin.exml"] = window.LimitedcollectionviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["animat_bg_0", "imge_title_tx_0", "imge_txtbg_0", "tx_desc_0", "tx_txtLabel_0", "gr_getBtn_0", "imge_tag_get_0", "imge_titile_icon", "gr_title", "animat_bg_1", "imge_txtbg_1", "imge_title_tx_1", "imge_suit_icon", "tx_desc_1", "tx_txtLabel_1", "gr_getBtn_1", "imge_tag_get_1", "gr_suit", "animat_bg_2", "imge_title_tx_2", "imge_nono_icon", "tx_txtLabel_2", "gr_getBtn_2", "tx_desc_nono", "imge_tag_get_2", "gr_nonoSkin", "gr_limitedCollection"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_limitedCollection_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_limitedCollection_i = function() {
        var e = new eui.Group;
        return this.gr_limitedCollection = e,
        e.x = 276,
        e.y = 53,
        e.elementsContent = [this.gr_title_i(), this.gr_suit_i(), this.gr_nonoSkin_i()],
        e
    },
    i.gr_title_i = function() {
        var e = new eui.Group;
        return this.gr_title = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.animat_bg_0_i(), this.imge_title_tx_0_i(), this.imge_txtbg_0_i(), this.tx_desc_0_i(), this.gr_getBtn_0_i(), this.imge_tag_get_0_i(), this.imge_titile_icon_i()],
        e
    },
    i.animat_bg_0_i = function() {
        var e = new eui.Group;
        return this.animat_bg_0 = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_tx_0_i = function() {
        var e = new eui.Image;
        return this.imge_title_tx_0 = e,
        e.source = "yearvip2022_limitedcollectionview_imge_title_tx_0_png",
        e.x = 48,
        e.y = 34,
        e
    },
    i.imge_txtbg_0_i = function() {
        var e = new eui.Image;
        return this.imge_txtbg_0 = e,
        e.source = "yearvip2022_limitedcollectionview_imge_txtbg_0_png",
        e.x = 42,
        e.y = 298,
        e
    },
    i.tx_desc_0_i = function() {
        var e = new eui.Label;
        return this.tx_desc_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说",
        e.textColor = 7576023,
        e.width = 175,
        e.x = 57,
        e.y = 308,
        e
    },
    i.gr_getBtn_0_i = function() {
        var e = new eui.Group;
        return this.gr_getBtn_0 = e,
        e.x = 75,
        e.y = 418,
        e.elementsContent = [this._Image1_i(), this.tx_txtLabel_0_i()],
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
    i.tx_txtLabel_0_i = function() {
        var e = new eui.Label;
        return this.tx_txtLabel_0 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "领 取",
        e.textColor = 10181146,
        e.y = 13,
        e
    },
    i.imge_tag_get_0_i = function() {
        var e = new eui.Image;
        return this.imge_tag_get_0 = e,
        e.anchorOffsetY = 0,
        e.source = "yearvip2022_yearpetview_taggot_png",
        e.x = 72,
        e.y = 426,
        e
    },
    i.imge_titile_icon_i = function() {
        var e = new eui.Image;
        return this.imge_titile_icon = e,
        e.source = "yearvip2022_limitedcollectionview_imge_titile_icon_png",
        e.x = 88,
        e.y = 126,
        e
    },
    i.gr_suit_i = function() {
        var e = new eui.Group;
        return this.gr_suit = e,
        e.x = 268,
        e.y = 0,
        e.elementsContent = [this.animat_bg_1_i(), this.imge_txtbg_1_i(), this.imge_title_tx_1_i(), this.imge_suit_icon_i(), this.tx_desc_1_i(), this.gr_getBtn_1_i(), this.imge_tag_get_1_i()],
        e
    },
    i.animat_bg_1_i = function() {
        var e = new eui.Group;
        return this.animat_bg_1 = e,
        e.height = 200,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_txtbg_1_i = function() {
        var e = new eui.Image;
        return this.imge_txtbg_1 = e,
        e.source = "yearvip2022_limitedcollectionview_imge_txtbg_0_png",
        e.x = 42,
        e.y = 298,
        e
    },
    i.imge_title_tx_1_i = function() {
        var e = new eui.Image;
        return this.imge_title_tx_1 = e,
        e.source = "yearvip2022_limitedcollectionview_imge_title_tx_1_png",
        e.x = 47,
        e.y = 34,
        e
    },
    i.imge_suit_icon_i = function() {
        var e = new eui.Image;
        return this.imge_suit_icon = e,
        e.source = "yearvip2022_limitedcollectionview_imge_suit_icon_png",
        e.x = 53,
        e.y = 86,
        e
    },
    i.tx_desc_1_i = function() {
        var e = new eui.Label;
        return this.tx_desc_1 = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 21,
        e.size = 16,
        e.text = "文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明",
        e.textColor = 7576023,
        e.width = 174,
        e.y = 308,
        e
    },
    i.gr_getBtn_1_i = function() {
        var e = new eui.Group;
        return this.gr_getBtn_1 = e,
        e.x = 75,
        e.y = 418,
        e.elementsContent = [this._Image2_i(), this.tx_txtLabel_1_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_txtLabel_1_i = function() {
        var e = new eui.Label;
        return this.tx_txtLabel_1 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "领 取",
        e.textColor = 10181146,
        e.x = 45,
        e.y = 13,
        e
    },
    i.imge_tag_get_1_i = function() {
        var e = new eui.Image;
        return this.imge_tag_get_1 = e,
        e.anchorOffsetY = 0,
        e.source = "yearvip2022_yearpetview_taggot_png",
        e.x = 71,
        e.y = 426,
        e
    },
    i.gr_nonoSkin_i = function() {
        var e = new eui.Group;
        return this.gr_nonoSkin = e,
        e.x = 536,
        e.y = 0,
        e.elementsContent = [this.animat_bg_2_i(), this.imge_title_tx_2_i(), this.imge_nono_icon_i(), this.gr_getBtn_2_i(), this.tx_desc_nono_i(), this.imge_tag_get_2_i()],
        e
    },
    i.animat_bg_2_i = function() {
        var e = new eui.Group;
        return this.animat_bg_2 = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_tx_2_i = function() {
        var e = new eui.Image;
        return this.imge_title_tx_2 = e,
        e.source = "yearvip2022_limitedcollectionview_imge_title_tx_2_png",
        e.x = 42,
        e.y = 34,
        e
    },
    i.imge_nono_icon_i = function() {
        var e = new eui.Image;
        return this.imge_nono_icon = e,
        e.source = "yearvip2022_limitedcollectionview_imge_nono_icon_png",
        e.x = 34,
        e.y = 113,
        e
    },
    i.gr_getBtn_2_i = function() {
        var e = new eui.Group;
        return this.gr_getBtn_2 = e,
        e.x = 75,
        e.y = 418,
        e.elementsContent = [this._Image3_i(), this.tx_txtLabel_2_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 134,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_txtLabel_2_i = function() {
        var e = new eui.Label;
        return this.tx_txtLabel_2 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "领 取",
        e.textColor = 10181146,
        e.x = 45,
        e.y = 13,
        e
    },
    i.tx_desc_nono_i = function() {
        var e = new eui.Label;
        return this.tx_desc_nono = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "2022年年费NONO",
        e.textColor = 7576023,
        e.width = 146,
        e.x = 71,
        e.y = 306,
        e
    },
    i.imge_tag_get_2_i = function() {
        var e = new eui.Image;
        return this.imge_tag_get_2 = e,
        e.anchorOffsetY = 0,
        e.source = "yearvip2022_yearpetview_taggot_png",
        e.x = 75,
        e.y = 427,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MouthgiftviewSkin.exml"] = window.MouthgiftviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["list_reward", "scroller_rewards", "gr_mouthGift"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_mouthGift_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_mouthGift_i = function() {
        var e = new eui.Group;
        return this.gr_mouthGift = e,
        e.x = 292,
        e.y = 67,
        e.elementsContent = [this.scroller_rewards_i()],
        e
    },
    i.scroller_rewards_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rewards = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 536,
        e.scrollPolicyH = "off",
        e.scrollPolicyV = "on",
        e.width = 842,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_reward_i()],
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 537,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 843,
        e.x = 0,
        e.y = 0,
        e.layout = this._VerticalLayout1_i(),
        e
    },
    i._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout;
        return e.gap = 16,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/MouthpetviewSkin.exml"] = window.MouthpetviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["list_reward", "scroller_rewards", "gr_mouthPet"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_mouthPet_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_mouthPet_i = function() {
        var e = new eui.Group;
        return this.gr_mouthPet = e,
        e.x = 295,
        e.y = 65,
        e.elementsContent = [this.scroller_rewards_i()],
        e
    },
    i.scroller_rewards_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rewards = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 521,
        e.width = 839,
        e.x = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.elementsContent = [this.list_reward_i()],
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.anchorOffsetX = 0,
        e.height = 200,
        e.width = 838,
        e.x = 0,
        e.y = 0,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = 15,
        e.orientation = "rows",
        e.verticalGap = 15,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/FreejpviewSkin.exml"] = window.FreejpviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_pet_bg", "pet", "pet_info", "imge_info_bg", "tx_petName", "imge_icon", "imge_title", "tx_lv_max", "tx_lv_cur", "img_up", "gr_lv", "imge_icon_1", "imge_title_1", "tx_tianfu_max", "tx_tianfu_cur", "img_up_2", "tianfu", "imge_icon_2", "imge_title_2", "tx_hp_max", "tx_hp_cur", "img_up_3", "hp", "imge_icon_3", "imge_title_3", "tx_learn_max", "tx_learn_cur", "img_up_4", "tx_txtLabel", "gr_btnSelect", "learning", "imge_icon_4", "imge_title_4", "tx_recommend", "tx_recommend_title", "txtLabel", "gr_btnSelect_2", "nature", "gr_info", "imge_bag_bg", "imge_line1", "imge_tx_bag_title", "isHavePetTipsTx", "list_reward", "scroller_rewards", "gr_petHead", "gr_freeJpView", "gr_btnJipin", "imge_used"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.pet_info_i(), this.gr_freeJpView_i(), this.gr_btnJipin_i(), this.imge_used_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pet_info_i = function() {
        var e = new eui.Group;
        return this.pet_info = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 640,
        e.horizontalCenter = -10,
        e.name = "gr_petInfo",
        e.verticalCenter = 0,
        e.width = 760,
        e.elementsContent = [this.imge_pet_bg_i(), this.pet_i()],
        e
    },
    i.imge_pet_bg_i = function() {
        var e = new eui.Image;
        return this.imge_pet_bg = e,
        e.source = "yearvip2022_freejpview_imge_pet_bg_png",
        e.x = 0,
        e.y = 46,
        e
    },
    i.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 0,
        e.x = 759,
        e.y = 483,
        e
    },
    i.gr_freeJpView_i = function() {
        var e = new eui.Group;
        return this.gr_freeJpView = e,
        e.x = 170,
        e.y = 73,
        e.elementsContent = [this.gr_info_i(), this.imge_bag_bg_i(), this.imge_line1_i(), this.imge_tx_bag_title_i(), this.isHavePetTipsTx_i(), this.gr_petHead_i()],
        e
    },
    i.gr_info_i = function() {
        var e = new eui.Group;
        return this.gr_info = e,
        e.x = 498,
        e.y = 15,
        e.elementsContent = [this.imge_info_bg_i(), this.tx_petName_i(), this.gr_lv_i(), this.tianfu_i(), this.hp_i(), this.learning_i(), this.nature_i()],
        e
    },
    i.imge_info_bg_i = function() {
        var e = new eui.Image;
        return this.imge_info_bg = e,
        e.source = "yearvip2022_freejpview_imge_info_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_petName_i = function() {
        var e = new eui.Label;
        return this.tx_petName = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "精灵名字精灵名字精",
        e.textColor = 15728127,
        e.x = 60,
        e.y = 13,
        e
    },
    i.gr_lv_i = function() {
        var e = new eui.Group;
        return this.gr_lv = e,
        e.x = 62,
        e.y = 59,
        e.elementsContent = [this.imge_icon_i(), this.imge_title_i(), this.tx_lv_max_i(), this.tx_lv_cur_i(), this.img_up_i()],
        e
    },
    i.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.source = "yearvip2022_freejpview_imge_icon_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_i = function() {
        var e = new eui.Image;
        return this.imge_title = e,
        e.source = "yearvip2022_freejpview_imge_title_png",
        e.x = 42,
        e.y = 10,
        e
    },
    i.tx_lv_max_i = function() {
        var e = new eui.Label;
        return this.tx_lv_max = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "100",
        e.textColor = 16773460,
        e.x = 224,
        e.y = 17,
        e
    },
    i.tx_lv_cur_i = function() {
        var e = new eui.Label;
        return this.tx_lv_cur = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100",
        e.textColor = 3269887,
        e.x = 155,
        e.y = 19,
        e
    },
    i.img_up_i = function() {
        var e = new eui.Image;
        return this.img_up = e,
        e.source = "yearvip2022_freejpview_img_up_png",
        e.x = 191,
        e.y = 18,
        e
    },
    i.tianfu_i = function() {
        var e = new eui.Group;
        return this.tianfu = e,
        e.x = 61,
        e.y = 121,
        e.elementsContent = [this.imge_icon_1_i(), this.imge_title_1_i(), this.tx_tianfu_max_i(), this.tx_tianfu_cur_i(), this.img_up_2_i()],
        e
    },
    i.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "yearvip2022_freejpview_imge_icon_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_1_i = function() {
        var e = new eui.Image;
        return this.imge_title_1 = e,
        e.source = "yearvip2022_freejpview_imge_title_1_png",
        e.x = 42,
        e.y = 8,
        e
    },
    i.tx_tianfu_max_i = function() {
        var e = new eui.Label;
        return this.tx_tianfu_max = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "31",
        e.textColor = 16773460,
        e.x = 225,
        e.y = 15,
        e
    },
    i.tx_tianfu_cur_i = function() {
        var e = new eui.Label;
        return this.tx_tianfu_cur = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100",
        e.textColor = 3269887,
        e.x = 156,
        e.y = 17,
        e
    },
    i.img_up_2_i = function() {
        var e = new eui.Image;
        return this.img_up_2 = e,
        e.source = "yearvip2022_freejpview_img_up_png",
        e.x = 192,
        e.y = 16,
        e
    },
    i.hp_i = function() {
        var e = new eui.Group;
        return this.hp = e,
        e.x = 62,
        e.y = 182,
        e.elementsContent = [this.imge_icon_2_i(), this.imge_title_2_i(), this.tx_hp_max_i(), this.tx_hp_cur_i(), this.img_up_3_i()],
        e
    },
    i.imge_icon_2_i = function() {
        var e = new eui.Image;
        return this.imge_icon_2 = e,
        e.source = "yearvip2022_freejpview_imge_icon_2_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_2_i = function() {
        var e = new eui.Image;
        return this.imge_title_2 = e,
        e.source = "yearvip2022_freejpview_imge_title_2_png",
        e.x = 42,
        e.y = 6,
        e
    },
    i.tx_hp_max_i = function() {
        var e = new eui.Label;
        return this.tx_hp_max = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "20",
        e.textColor = 16773460,
        e.x = 224,
        e.y = 13,
        e
    },
    i.tx_hp_cur_i = function() {
        var e = new eui.Label;
        return this.tx_hp_cur = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100",
        e.textColor = 3269887,
        e.x = 155,
        e.y = 15,
        e
    },
    i.img_up_3_i = function() {
        var e = new eui.Image;
        return this.img_up_3 = e,
        e.source = "yearvip2022_freejpview_img_up_png",
        e.x = 191,
        e.y = 14,
        e
    },
    i.learning_i = function() {
        var e = new eui.Group;
        return this.learning = e,
        e.x = 60,
        e.y = 239,
        e.elementsContent = [this.imge_icon_3_i(), this.imge_title_3_i(), this.tx_learn_max_i(), this.tx_learn_cur_i(), this.img_up_4_i(), this.gr_btnSelect_i()],
        e
    },
    i.imge_icon_3_i = function() {
        var e = new eui.Image;
        return this.imge_icon_3 = e,
        e.source = "yearvip2022_freejpview_imge_icon_3_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_3_i = function() {
        var e = new eui.Image;
        return this.imge_title_3 = e,
        e.source = "yearvip2022_freejpview_imge_title_3_png",
        e.x = 44,
        e.y = 7,
        e
    },
    i.tx_learn_max_i = function() {
        var e = new eui.Label;
        return this.tx_learn_max = e,
        e.fontFamily = "REEJI",
        e.size = 22,
        e.text = "510",
        e.textColor = 16773460,
        e.x = 226,
        e.y = 14,
        e
    },
    i.tx_learn_cur_i = function() {
        var e = new eui.Label;
        return this.tx_learn_cur = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "100",
        e.textColor = 3269887,
        e.x = 157,
        e.y = 16,
        e
    },
    i.img_up_4_i = function() {
        var e = new eui.Image;
        return this.img_up_4 = e,
        e.source = "yearvip2022_freejpview_img_up_png",
        e.x = 193,
        e.y = 15,
        e
    },
    i.gr_btnSelect_i = function() {
        var e = new eui.Group;
        return this.gr_btnSelect = e,
        e.x = 280,
        e.y = 5,
        e.elementsContent = [this._Image1_i(), this.tx_txtLabel_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 72,
        e.x = 0,
        e.y = 0,
        e
    },
    i.tx_txtLabel_i = function() {
        var e = new eui.Label;
        return this.tx_txtLabel = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "选择",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    i.nature_i = function() {
        var e = new eui.Group;
        return this.nature = e,
        e.x = 60,
        e.y = 299,
        e.elementsContent = [this.imge_icon_4_i(), this.imge_title_4_i(), this.tx_recommend_i(), this.tx_recommend_title_i(), this.gr_btnSelect_2_i()],
        e
    },
    i.imge_icon_4_i = function() {
        var e = new eui.Image;
        return this.imge_icon_4 = e,
        e.source = "yearvip2022_freejpview_imge_icon_4_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_4_i = function() {
        var e = new eui.Image;
        return this.imge_title_4 = e,
        e.source = "yearvip2022_freejpview_imge_title_4_png",
        e.x = 44,
        e.y = 7,
        e
    },
    i.tx_recommend_i = function() {
        var e = new eui.Label;
        return this.tx_recommend = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "固执",
        e.textColor = 16773460,
        e.x = 231,
        e.y = 14,
        e
    },
    i.tx_recommend_title_i = function() {
        var e = new eui.Label;
        return this.tx_recommend_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "[推荐]",
        e.textColor = 3269887,
        e.x = 159,
        e.y = 13,
        e
    },
    i.gr_btnSelect_2_i = function() {
        var e = new eui.Group;
        return this.gr_btnSelect_2 = e,
        e.x = 280,
        e.y = 5,
        e.elementsContent = [this._Image2_i(), this.txtLabel_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 72,
        e.x = 0,
        e.y = 0,
        e
    },
    i.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "REEJI",
        e.size = 18,
        e.text = "选择",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    i.imge_bag_bg_i = function() {
        var e = new eui.Image;
        return this.imge_bag_bg = e,
        e.source = "yearvip2022_freejpview_imge_bag_bg_png",
        e.x = 85,
        e.y = 420,
        e
    },
    i.imge_line1_i = function() {
        var e = new eui.Image;
        return this.imge_line1 = e,
        e.source = "yearvip2022_freejpview_imge_line1_png",
        e.x = 123,
        e.y = 434,
        e
    },
    i.imge_tx_bag_title_i = function() {
        var e = new eui.Image;
        return this.imge_tx_bag_title = e,
        e.source = "yearvip2022_freejpview_imge_tx_bag_title_png",
        e.x = 93,
        e.y = 438,
        e
    },
    i.isHavePetTipsTx_i = function() {
        var e = new eui.Label;
        return this.isHavePetTipsTx = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "当前背包内暂无精灵",
        e.textColor = 16773819,
        e.visible = !1,
        e.x = 438.5,
        e.y = 466,
        e
    },
    i.gr_petHead_i = function() {
        var e = new eui.Group;
        return this.gr_petHead = e,
        e.x = 132,
        e.y = 430,
        e.elementsContent = [this.scroller_rewards_i()],
        e
    },
    i.scroller_rewards_i = function() {
        var e = new eui.Scroller;
        return this.scroller_rewards = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 98.48,
        e.scrollPolicyH = "on",
        e.scrollPolicyV = "off",
        e.width = 793,
        e.x = 0,
        e.y = 0,
        e.viewport = this._Group1_i(),
        e
    },
    i._Group1_i = function() {
        var e = new eui.Group;
        return e.anchorOffsetY = 0,
        e.height = 96.97,
        e.elementsContent = [this.list_reward_i()],
        e
    },
    i.list_reward_i = function() {
        var e = new eui.List;
        return this.list_reward = e,
        e.anchorOffsetY = 0,
        e.height = 97.33,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e.layout = this._HorizontalLayout1_i(),
        e
    },
    i._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout;
        return e
    },
    i.gr_btnJipin_i = function() {
        var e = new eui.Group;
        return this.gr_btnJipin = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 48,
        e.width = 154,
        e.x = 371,
        e.y = 432,
        e.elementsContent = [this._Image3_i()],
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_freejpview_imge_btnjipin_png",
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_used_i = function() {
        var e = new eui.Image;
        return this.imge_used = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 50,
        e.source = "yearvip2022_freejpview_img_used_png",
        e.width = 156,
        e.x = 371,
        e.y = 432,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/ExclusivecapacityviewSkin.exml"] = window.ExclusivecapacityviewSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["animat_bg_0", "imge_add_title", "imge_add_icon", "gongji", "tegong", "sudu", "fangyu", "tefang", "tili", "gongji_10", "tegong_10", "sudu_10", "fangyu_10", "tefang_10", "tili_10", "czbbnsyjl_qsx_10_sydzjyx", "gr_showTx", "gr_ability_add", "animat_bg_1", "imge_mark_title", "imge_mark_icon", "imge_smal_icon_5", "imge_smal_icon_4", "imge_smal_icon_3", "imge_smal_icon_2", "imge_smal_icon_1", "imge_smal_icon_0", "tx_1_6", "tx_1_5", "tx_1_4", "tx_1_3", "tx_1_2", "tx_1_1", "showtx_1", "tx_1_7", "tx_1_8", "tx_1_9", "tx_1_10", "tx_1_11", "gr_mark", "animat_bg_2", "imge_title_tx_2", "imge_vip_icon", "tx_desc_2", "imge_btnMore", "gr_vip5", "gr_exclusivePrivileges"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.gr_exclusivePrivileges_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.gr_exclusivePrivileges_i = function() {
        var e = new eui.Group;
        return this.gr_exclusivePrivileges = e,
        e.x = 276,
        e.y = 53,
        e.elementsContent = [this.gr_ability_add_i(), this.gr_mark_i(), this.gr_vip5_i()],
        e
    },
    i.gr_ability_add_i = function() {
        var e = new eui.Group;
        return this.gr_ability_add = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.animat_bg_0_i(), this.imge_add_title_i(), this.imge_add_icon_i(), this.gr_showTx_i()],
        e
    },
    i.animat_bg_0_i = function() {
        var e = new eui.Group;
        return this.animat_bg_0 = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_add_title_i = function() {
        var e = new eui.Image;
        return this.imge_add_title = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_add_title_png",
        e.x = 48,
        e.y = 34,
        e
    },
    i.imge_add_icon_i = function() {
        var e = new eui.Image;
        return this.imge_add_icon = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_add_icon_png",
        e.x = 94,
        e.y = 120,
        e
    },
    i.gr_showTx_i = function() {
        var e = new eui.Group;
        return this.gr_showTx = e,
        e.x = 47,
        e.y = 266,
        e.elementsContent = [this.gongji_i(), this.tegong_i(), this.sudu_i(), this.fangyu_i(), this.tefang_i(), this.tili_i(), this.gongji_10_i(), this.tegong_10_i(), this.sudu_10_i(), this.fangyu_10_i(), this.tefang_10_i(), this.tili_10_i(), this.czbbnsyjl_qsx_10_sydzjyx_i()],
        e
    },
    i.gongji_i = function() {
        var e = new eui.Image;
        return this.gongji = e,
        e.source = "yearvip2022_exclusivecapacityview_gongji_png",
        e.x = 1,
        e.y = 2,
        e
    },
    i.tegong_i = function() {
        var e = new eui.Image;
        return this.tegong = e,
        e.source = "yearvip2022_exclusivecapacityview_tegong_png",
        e.x = 2,
        e.y = 30,
        e
    },
    i.sudu_i = function() {
        var e = new eui.Image;
        return this.sudu = e,
        e.source = "yearvip2022_exclusivecapacityview_sudu_png",
        e.x = 0,
        e.y = 58,
        e
    },
    i.fangyu_i = function() {
        var e = new eui.Image;
        return this.fangyu = e,
        e.source = "yearvip2022_exclusivecapacityview_fangyu_png",
        e.x = 97,
        e.y = 0,
        e
    },
    i.tefang_i = function() {
        var e = new eui.Image;
        return this.tefang = e,
        e.source = "yearvip2022_exclusivecapacityview_tefang_png",
        e.x = 97,
        e.y = 29,
        e
    },
    i.tili_i = function() {
        var e = new eui.Image;
        return this.tili = e,
        e.source = "yearvip2022_exclusivecapacityview_tili_png",
        e.x = 97,
        e.y = 57,
        e
    },
    i.gongji_10_i = function() {
        var e = new eui.Label;
        return this.gongji_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击+10",
        e.textColor = 3269631,
        e.x = 25,
        e.y = 7,
        e
    },
    i.tegong_10_i = function() {
        var e = new eui.Label;
        return this.tegong_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特攻+10",
        e.textColor = 3269631,
        e.x = 25,
        e.y = 35,
        e
    },
    i.sudu_10_i = function() {
        var e = new eui.Label;
        return this.sudu_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "速度+10",
        e.textColor = 3269631,
        e.x = 25,
        e.y = 62,
        e
    },
    i.fangyu_10_i = function() {
        var e = new eui.Label;
        return this.fangyu_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "防御+10",
        e.textColor = 3269631,
        e.x = 122,
        e.y = 7,
        e
    },
    i.tefang_10_i = function() {
        var e = new eui.Label;
        return this.tefang_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特防+10",
        e.textColor = 3269631,
        e.x = 121,
        e.y = 35,
        e
    },
    i.tili_10_i = function() {
        var e = new eui.Label;
        return this.tili_10 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "体力+10",
        e.textColor = 3269631,
        e.x = 122,
        e.y = 62,
        e
    },
    i.czbbnsyjl_qsx_10_sydzjyx_i = function() {
        var e = new eui.Label;
        return this.czbbnsyjl_qsx_10_sydzjyx = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "出战背包内所有精灵\n全属性+10\n（所有对战均有效）",
        e.textColor = 7641559,
        e.width = 173,
        e.x = 14,
        e.y = 119,
        e
    },
    i.gr_mark_i = function() {
        var e = new eui.Group;
        return this.gr_mark = e,
        e.x = 268,
        e.y = 0,
        e.elementsContent = [this.animat_bg_1_i(), this.imge_mark_title_i(), this.imge_mark_icon_i(), this.showtx_1_i(), this.tx_1_7_i(), this.tx_1_8_i(), this.tx_1_9_i(), this.tx_1_10_i(), this.tx_1_11_i()],
        e
    },
    i.animat_bg_1_i = function() {
        var e = new eui.Group;
        return this.animat_bg_1 = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_mark_title_i = function() {
        var e = new eui.Image;
        return this.imge_mark_title = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_mark_title_png",
        e.x = 48,
        e.y = 34,
        e
    },
    i.imge_mark_icon_i = function() {
        var e = new eui.Image;
        return this.imge_mark_icon = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_mark_icon_png",
        e.x = 86,
        e.y = 117,
        e
    },
    i.showtx_1_i = function() {
        var e = new eui.Group;
        return this.showtx_1 = e,
        e.x = 38,
        e.y = 266,
        e.elementsContent = [this.imge_smal_icon_5_i(), this.imge_smal_icon_4_i(), this.imge_smal_icon_3_i(), this.imge_smal_icon_2_i(), this.imge_smal_icon_1_i(), this.imge_smal_icon_0_i(), this.tx_1_6_i(), this.tx_1_5_i(), this.tx_1_4_i(), this.tx_1_3_i(), this.tx_1_2_i(), this.tx_1_1_i()],
        e
    },
    i.imge_smal_icon_5_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_5 = e,
        e.source = "yearvip2022_exclusivecapacityview_gongji_png",
        e.x = 7,
        e.y = 2,
        e
    },
    i.imge_smal_icon_4_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_4 = e,
        e.source = "yearvip2022_exclusivecapacityview_tegong_png",
        e.x = 8,
        e.y = 30,
        e
    },
    i.imge_smal_icon_3_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_3 = e,
        e.source = "yearvip2022_exclusivecapacityview_sudu_png",
        e.x = 6,
        e.y = 58,
        e
    },
    i.imge_smal_icon_2_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_2 = e,
        e.source = "yearvip2022_exclusivecapacityview_fangyu_png",
        e.x = 106,
        e.y = 0,
        e
    },
    i.imge_smal_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_1 = e,
        e.source = "yearvip2022_exclusivecapacityview_tefang_png",
        e.x = 106,
        e.y = 29,
        e
    },
    i.imge_smal_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_smal_icon_0 = e,
        e.source = "yearvip2022_exclusivecapacityview_tili_png",
        e.x = 106,
        e.y = 57,
        e
    },
    i.tx_1_6_i = function() {
        var e = new eui.Label;
        return this.tx_1_6 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "攻击MAX",
        e.textColor = 3269631,
        e.x = 30,
        e.y = 7,
        e
    },
    i.tx_1_5_i = function() {
        var e = new eui.Label;
        return this.tx_1_5 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特攻MAX",
        e.textColor = 3269631,
        e.x = 30,
        e.y = 35,
        e
    },
    i.tx_1_4_i = function() {
        var e = new eui.Label;
        return this.tx_1_4 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "速度MAX",
        e.textColor = 3269631,
        e.x = 30,
        e.y = 62,
        e
    },
    i.tx_1_3_i = function() {
        var e = new eui.Label;
        return this.tx_1_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "防御MAX",
        e.textColor = 3269631,
        e.x = 130,
        e.y = 7,
        e
    },
    i.tx_1_2_i = function() {
        var e = new eui.Label;
        return this.tx_1_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "特防MAX",
        e.textColor = 3269631,
        e.x = 129,
        e.y = 35,
        e
    },
    i.tx_1_1_i = function() {
        var e = new eui.Label;
        return this.tx_1_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "体力MAX",
        e.textColor = 3269631,
        e.x = 130,
        e.y = 62,
        e
    },
    i.tx_1_7_i = function() {
        var e = new eui.Label;
        return this.tx_1_7 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 70,
        e.size = 16,
        e.text = "一键强化5角刻印  一键强化4角刻印  一键强化3角刻印   一键强化2角刻印   ",
        e.textColor = 7641559,
        e.width = 124,
        e.x = 34,
        e.y = 388,
        e
    },
    i.tx_1_8_i = function() {
        var e = new eui.Label;
        return this.tx_1_8 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.size = 16,
        e.text = "   298钻石/次",
        e.textAlign = "right",
        e.textColor = 7641559,
        e.width = 94,
        e.x = 147,
        e.y = 387,
        e
    },
    i.tx_1_9_i = function() {
        var e = new eui.Label;
        return this.tx_1_9 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.size = 16,
        e.text = "208钻石/次",
        e.textAlign = "right",
        e.textColor = 7641559,
        e.width = 94,
        e.x = 147,
        e.y = 403,
        e
    },
    i.tx_1_10_i = function() {
        var e = new eui.Label;
        return this.tx_1_10 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 24,
        e.size = 16,
        e.text = "138钻石/次",
        e.textAlign = "right",
        e.textColor = 7641559,
        e.width = 94,
        e.x = 147,
        e.y = 420,
        e
    },
    i.tx_1_11_i = function() {
        var e = new eui.Label;
        return this.tx_1_11 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 17,
        e.size = 16,
        e.text = "88钻石/次",
        e.textAlign = "right",
        e.textColor = 7641559,
        e.width = 94,
        e.x = 147,
        e.y = 436,
        e
    },
    i.gr_vip5_i = function() {
        var e = new eui.Group;
        return this.gr_vip5 = e,
        e.x = 536,
        e.y = 0,
        e.elementsContent = [this.animat_bg_2_i(), this.imge_title_tx_2_i(), this.imge_vip_icon_i(), this.tx_desc_2_i(), this.imge_btnMore_i()],
        e
    },
    i.animat_bg_2_i = function() {
        var e = new eui.Group;
        return this.animat_bg_2 = e,
        e.height = 200,
        e.width = 200,
        e.x = 0,
        e.y = 0,
        e
    },
    i.imge_title_tx_2_i = function() {
        var e = new eui.Image;
        return this.imge_title_tx_2 = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_title_tx_2_png",
        e.x = 48,
        e.y = 35,
        e
    },
    i.imge_vip_icon_i = function() {
        var e = new eui.Image;
        return this.imge_vip_icon = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_vip_icon_png",
        e.x = 92,
        e.y = 119,
        e
    },
    i.tx_desc_2_i = function() {
        var e = new eui.Label;
        return this.tx_desc_2 = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 87,
        e.size = 18,
        e.text = "战斗结束自动免费回血VIP强力战斗火焰\nVIP专属特惠商城",
        e.textColor = 3269631,
        e.width = 184,
        e.x = 52,
        e.y = 270,
        e
    },
    i.imge_btnMore_i = function() {
        var e = new eui.Image;
        return this.imge_btnMore = e,
        e.source = "yearvip2022_exclusivecapacityview_imge_btnmore_png",
        e.x = 75,
        e.y = 418,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/MainSkin.exml"] = window.MainSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["BG", "mainView", "yearPetView", "yuyueGiftView", "limitedCollectionView", "mouthGiftView", "mouthPetView", "freeJpView", "exclusivecapacityView", "btn_close", "view", "imge_left_bg", "imge_btn_help", "rb_0", "rb_1", "rb_2", "rb_3", "rb_4", "rb_5", "rb_6", "rb_7", "imge_left_titile", "lineline_0", "lineline_1", "lineline_2", "lineline_3", "lineline_4", "lineline_5", "red_hot_1", "red_hot_2", "red_hot_3", "red_hot_4", "red_hot_5", "red_hot_6", "gr_left"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.BG_i(), this.view_i(), this.gr_left_i()]
    }
    __extends(t, e);
    var i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_up", "animate_down"],
            this.elementsContent = [this._Rect1_i(), this.animate_up_i(), this.animate_down_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_up", "visible", !0), new eui.SetProperty("animate_down", "visible", !1)]), new eui.State("down", [new eui.SetProperty("animate_up", "visible", !1), new eui.SetProperty("animate_down", "visible", !0)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 140,
            e
        },
        i.animate_up_i = function() {
            var e = new eui.Group;
            return this.animate_up = e,
            e.x = 100,
            e.y = 65,
            e
        },
        i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 65,
            e
        },
        t
    } (eui.Skin),
    n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this._Rect1_i(), this.animate_down_i(), this._Image1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_0_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_0_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 60,
            e.percentWidth = 201,
            e
        },
        i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_1_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_1_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_2_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_2_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_3_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_3_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_4_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_4_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_5_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_5_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    u = function(e) {
        function t() {
            e.call(this),
            this.skinParts = ["animate_down"],
            this.elementsContent = [this.animate_down_i(), this._Image1_i(), this._Rect1_i()],
            this.states = [new eui.State("up", [new eui.SetProperty("animate_down", "visible", !1), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_6_up_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)]), new eui.State("down", [new eui.SetProperty("animate_down", "visible", !0), new eui.SetProperty("_Image1", "source", "yearvip2022_main_imge_leftbtn_6_down_png"), new eui.SetProperty("_Image1", "x", 58), new eui.SetProperty("_Image1", "y", 17)])]
        }
        __extends(t, e);
        var i = t.prototype;
        return i.animate_down_i = function() {
            var e = new eui.Group;
            return this.animate_down = e,
            e.x = 100,
            e.y = 30,
            e
        },
        i._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e
        },
        i._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 85,
            e.percentWidth = 100,
            e
        },
        t
    } (eui.Skin),
    h = t.prototype;
    return h.BG_i = function() {
        var e = new eui.Image;
        return this.BG = e,
        e.left = 0,
        e.right = 0,
        e.source = "yearvip_main_bg_jpg",
        e.y = 0,
        e
    },
    h.view_i = function() {
        var e = new eui.Group;
        return this.view = e,
        e.height = 200,
        e.horizontalCenter = -468,
        e.width = 200,
        e.y = 0,
        e.elementsContent = [this.mainView_i(), this.yearPetView_i(), this.yuyueGiftView_i(), this.limitedCollectionView_i(), this.mouthGiftView_i(), this.mouthPetView_i(), this.freeJpView_i(), this.exclusivecapacityView_i(), this.btn_close_i()],
        e
    },
    h.mainView_i = function() {
        var e = new yearVip2023.MainView;
        return this.mainView = e,
        e.skinName = "MainViewSkin",
        e.width = 1136,
        e.x = 0,
        e
    },
    h.yearPetView_i = function() {
        var e = new yearVip2023.YearPetView;
        return this.yearPetView = e,
        e.skinName = "YearpetviewSkin",
        e.visible = !1,
        e
    },
    h.yuyueGiftView_i = function() {
        var e = new yearVip2023.YuyueGiftView;
        return this.yuyueGiftView = e,
        e.skinName = "YuyuegiftviewSkin",
        e.visible = !1,
        e
    },
    h.limitedCollectionView_i = function() {
        var e = new yearVip2023.LimitedCollectionView;
        return this.limitedCollectionView = e,
        e.skinName = "LimitedcollectionviewSkin",
        e.visible = !1,
        e
    },
    h.mouthGiftView_i = function() {
        var e = new yearVip2023.MouthGiftView;
        return this.mouthGiftView = e,
        e.skinName = "MouthgiftviewSkin",
        e.visible = !1,
        e
    },
    h.mouthPetView_i = function() {
        var e = new yearVip2023.MouthPetView;
        return this.mouthPetView = e,
        e.skinName = "MouthpetviewSkin",
        e.visible = !1,
        e
    },
    h.freeJpView_i = function() {
        var e = new yearVip2023.FreeJpView;
        return this.freeJpView = e,
        e.skinName = "FreejpviewSkin",
        e.visible = !1,
        e
    },
    h.exclusivecapacityView_i = function() {
        var e = new yearVip2023.ExclusivecapacityView;
        return this.exclusivecapacityView = e,
        e.skinName = "ExclusivecapacityviewSkin",
        e.visible = !1,
        e
    },
    h.btn_close_i = function() {
        var e = new eui.Image;
        return this.btn_close = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "yearvip2022_main_imge_ommon_pop_btn_close_png",
        e.x = 1070,
        e.y = 17,
        e
    },
    h.gr_left_i = function() {
        var e = new eui.Group;
        return this.gr_left = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_left_bg_i(), this.imge_btn_help_i(), this.rb_0_i(), this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.rb_4_i(), this.rb_5_i(), this.rb_6_i(), this.rb_7_i(), this.imge_left_titile_i(), this.lineline_0_i(), this.lineline_1_i(), this.lineline_2_i(), this.lineline_3_i(), this.lineline_4_i(), this.lineline_5_i(), this.red_hot_1_i(), this.red_hot_2_i(), this.red_hot_3_i(), this.red_hot_4_i(), this.red_hot_5_i(), this.red_hot_6_i()],
        e
    },
    h.imge_left_bg_i = function() {
        var e = new eui.Image;
        return this.imge_left_bg = e,
        e.source = "yearvip2022_main_imge_left_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    h.imge_btn_help_i = function() {
        var e = new eui.Image;
        return this.imge_btn_help = e,
        e.source = "yearvip2022_main_imge_btn_help_png",
        e.x = 170,
        e.y = 151,
        e
    },
    h.rb_0_i = function() {
        var e = new eui.RadioButton;
        return this.rb_0 = e,
        e.groupName = "rbg_tab",
        e.selected = !0,
        e.value = "0",
        e.x = 22,
        e.y = 23,
        e.skinName = i,
        e
    },
    h.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "1",
        e.width = 201,
        e.x = 8,
        e.y = 199,
        e.skinName = n,
        e
    },
    h.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "2",
        e.width = 201,
        e.x = 8,
        e.y = 260,
        e.skinName = r,
        e
    },
    h.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "3",
        e.width = 201,
        e.x = 8,
        e.y = 320,
        e.skinName = _,
        e
    },
    h.rb_4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_4 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "4",
        e.width = 201,
        e.x = 8,
        e.y = 381,
        e.skinName = a,
        e
    },
    h.rb_5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_5 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "5",
        e.width = 201,
        e.x = 8,
        e.y = 442,
        e.skinName = o,
        e
    },
    h.rb_6_i = function() {
        var e = new eui.RadioButton;
        return this.rb_6 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "6",
        e.width = 201,
        e.x = 8,
        e.y = 502,
        e.skinName = s,
        e
    },
    h.rb_7_i = function() {
        var e = new eui.RadioButton;
        return this.rb_7 = e,
        e.groupName = "rbg_tab",
        e.height = 60,
        e.selected = !1,
        e.value = "7",
        e.width = 201,
        e.x = 9,
        e.y = 563,
        e.skinName = u,
        e
    },
    h.imge_left_titile_i = function() {
        var e = new eui.Image;
        return this.imge_left_titile = e,
        e.source = "yearvip2022_main_imge_left_titile_png",
        e.x = 38,
        e.y = 155,
        e
    },
    h.lineline_0_i = function() {
        var e = new eui.Image;
        return this.lineline_0 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 256,
        e
    },
    h.lineline_1_i = function() {
        var e = new eui.Image;
        return this.lineline_1 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 317,
        e
    },
    h.lineline_2_i = function() {
        var e = new eui.Image;
        return this.lineline_2 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 379,
        e
    },
    h.lineline_3_i = function() {
        var e = new eui.Image;
        return this.lineline_3 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 440,
        e
    },
    h.lineline_4_i = function() {
        var e = new eui.Image;
        return this.lineline_4 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 501,
        e
    },
    h.lineline_5_i = function() {
        var e = new eui.Image;
        return this.lineline_5 = e,
        e.source = "yearvip2022_main_lineline_0_png",
        e.x = 51,
        e.y = 562,
        e
    },
    h.red_hot_1_i = function() {
        var e = new eui.Image;
        return this.red_hot_1 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 209,
        e
    },
    h.red_hot_2_i = function() {
        var e = new eui.Image;
        return this.red_hot_2 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 269,
        e
    },
    h.red_hot_3_i = function() {
        var e = new eui.Image;
        return this.red_hot_3 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 329,
        e
    },
    h.red_hot_4_i = function() {
        var e = new eui.Image;
        return this.red_hot_4 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 389,
        e
    },
    h.red_hot_5_i = function() {
        var e = new eui.Image;
        return this.red_hot_5 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 449,
        e
    },
    h.red_hot_6_i = function() {
        var e = new eui.Image;
        return this.red_hot_6 = e,
        e.height = 20,
        e.source = "dot_png",
        e.visible = !1,
        e.width = 20,
        e.x = 167,
        e.y = 509,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/StoryPopSkin.exml"] = window.StoryPopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["tale", "imge_tx_Tips", "pop_view"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this.pop_view_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.pop_view_i = function() {
        var e = new eui.Group;
        return this.pop_view = e,
        e.anchorOffsetY = 0,
        e.height = 639,
        e.x = 168,
        e.y = 0,
        e.elementsContent = [this.tale_i(), this.imge_tx_Tips_i()],
        e
    },
    i.tale_i = function() {
        var e = new eui.Image;
        return this.tale = e,
        e.source = "yearvip2022_main_tale_png",
        e.verticalCenter = 0,
        e.x = 0,
        e
    },
    i.imge_tx_Tips_i = function() {
        var e = new eui.Image;
        return this.imge_tx_Tips = e,
        e.source = "yearvip2022_main_imge_tx_tips_png",
        e.verticalCenter = 283.5,
        e.x = 315,
        e
    },
    t
} (eui.Skin);