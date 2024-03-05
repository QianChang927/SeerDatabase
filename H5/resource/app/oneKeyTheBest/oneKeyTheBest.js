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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
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
    __reflect(t.prototype, "oneKeyTheBest.BaseView", ["oneKeyTheBest.IView"])
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.skinName = OnekeythebestViewBasicinfoSkin,
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        t.prototype._initEvents = function() {},
        t.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        t.prototype.UpdateView = function() {
            for (var e = 0; 6 > e; e++) this["item_" + e].setData(e);
            return Promise.resolve()
        },
        t.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
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
            switch (e.currentTarget) {}
        },
        t.prototype.destroy = function() {
            this._removeEvents(),
            e.prototype.destroy.call(this)
        },
        t
    } (e.BaseView);
    e.BasicinfoView = t,
    __reflect(t.prototype, "oneKeyTheBest.BasicinfoView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
oneKeyTheBest; !
function(e) {
    var t = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
        t.event_change_selecetd_id = "event_change_selecetd_id",
        t.event_udpdate_Score = "event_udpdate_Score",
        t.event_udpdate_Money = "event_udpdate_Money",
        t.event_udpdate_PetInfo = "event_udpdate_PetInfo",
        t
    } (egret.EventDispatcher);
    e.OnekeyEvent = t,
    __reflect(t.prototype, "oneKeyTheBest.OnekeyEvent")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i._curTab = 0,
            i.allPets = [],
            i._getPetNum = {},
            i.currPetId = 0,
            i._info = e.DataManger.getInstance().curPetInfo = n,
            i.skinName = OnekeythebestSkin,
            i
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var n = this;
            t.prototype.childrenCreated.call(this),
            this.rbg_tab = this.rb_0.group,
            this._curTab = this.rbg_tab.selectedValue = 0,
            this.rbg_tab.addEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            this.basicinfoView.hide(),
            this._viewList = [this.basicinfoView, this.talentView, this.natureView, this.studyView, this.effectView, this.hpView, this.scoreView],
            this.hieAllView(),
            this.initView(),
            this._initEvents(),
            this.updateView(),
            e.DataManger.getInstance().initData().then(function() {
                var t = 0;
                n.data && (t = n.data),
                e.DataManger.getInstance().setConfigId(t)
            })
        },
        n.prototype.initView = function() {
            var t = e.DataManger.getInstance().curPetInfo;
            this.showPetAnimate(),
            this.tx_pet_name.text = PetXMLInfo.getName(t.id),
            this.imge_icon_0.source = ClientConfig.getItemIcon(1),
            this.imge_icon_1.source = ClientConfig.getItemIcon(5),
            this.pet_info.touchEnabled = this.pet_info.touchChildren = !1,
            this.tx_alert.touchEnabled = !1,
            this.imge_flag_0.touchEnabled = !1,
            this.imge_flag_0_2.touchEnabled = !1,
            this.tx_num_0.text = String(MainManager.actorInfo.coins),
            this.tx_num_1.text = String(0)
        },
        n.prototype._initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.imge_icon_0,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 1
                })
            },
            this),
            ImageButtonUtil.add(this.imge_icon_1,
            function() {
                tipsPop.TipsPop.openItemPop({
                    id: 5
                })
            },
            this),
            ImageButtonUtil.add(this.btn_close, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.imge_btn_add_item, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.akeyjipin, this._onTouchImageButton, this),
            this._rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            e.DataManger.getInstance().addEventListener(e.OnekeyEvent.event_change_selecetd_id, this.onChangeView, this),
            e.DataManger.getInstance().addEventListener(e.OnekeyEvent.event_udpdate_Money, this.onUpdateMoney, this),
            e.DataManger.getInstance().addEventListener(e.OnekeyEvent.event_udpdate_PetInfo, this.onUpdatePetInfo, this),
            e.DataManger.getInstance().updateMoney(),
            EventManager.addEventListener(RobotEvent.SEERDOU_CHANGE_EVENT,
            function() {
                t.tx_num_0.text = String(MainManager.actorInfo.coins)
            },
            this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this._rect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this),
            e.DataManger.getInstance().removeEventListener("event_change_selecetd_id", this.onChangeView, this)
        },
        n.prototype.onTouchBegin = function(e) {
            var t = e.target;
            BubblerManager.getInstance().showText(t.name)
        },
        n.prototype._onTouchImageButton = function(t) {
            switch (t.currentTarget) {
            case this.btn_close:
                this.onClose();
                break;
            case this.imge_btn_add_item:
                if (GameInfo.isChecking) return;
                BubblerManager.getInstance().showText("暂未开放，敬请期待");
                break;
            case this.akeyjipin:
                if (0 == e.DataManger.getInstance().currentSelectedId) {
                    var n = {
                        petInfo: e.DataManger.getInstance().curPetInfo,
                        fun: this.oncallBack,
                        caller: this
                    };
                    ModuleManager.showModule("oneKeyTheBestPop", ["one_key_the_best_pop"], n, null, AppDoStyle.NULL)
                } else if (1 == e.DataManger.getInstance().currentSelectedId) {
                    if (!e.DataManger.getInstance().getIsOpen()) return;
                    var i = this._viewList[this._curTab];
                    i.AKeyFuncction()
                } else if (3 == e.DataManger.getInstance().currentSelectedId) {
                    if (!e.DataManger.getInstance().getIsOpen()) return;
                    var o = this._viewList[this._curTab];
                    o.AKeyFuncction()
                }
            }
        },
        n.prototype.oncallBack = function(t) {
            if (null != t) {
                e.DataManger.getInstance().curPetInfo = t;
                var n = this._viewList[this._curTab];
                n && n.UpdateView()
            }
        },
        n.prototype.onTouch = function() {
            this.onClose()
        },
        n.prototype.hieAllView = function() {
            for (var e = 0,
            t = this._viewList; e < t.length; e++) {
                var n = t[e];
                n.hide()
            }
        },
        n.prototype.onChangeTab = function() {
            this._curTab = ~~this.rbg_tab.selectedValue,
            e.DataManger.getInstance().setConfigId(this._curTab)
        },
        n.prototype.onChangeView = function(e) {
            this._curTab = this.rbg_tab.selectedValue = e.data,
            this.UpdateTitle(),
            this._onShowView()
        },
        n.prototype.updateView = function() {},
        n.prototype.reShow = function() {
            this.showPetAnimate()
        },
        n.prototype.UpdateTitle = function() {
            var t = e.DataManger.getInstance().akeyBtnStateArr;
            "" != t[e.DataManger.getInstance().currentSelectedId] ? (this.akeyjipin.visible = !0, this.txtLabel_akey_0.text = t[e.DataManger.getInstance().currentSelectedId]) : this.akeyjipin.visible = !1
        },
        n.prototype.onUpdateMoney = function(e) {
            var t = e.data;
            this.tx_num_0.text = String(MainManager.actorInfo.coins),
            this.tx_num_1.text = String(t)
        },
        n.prototype.onUpdatePetInfo = function(e) {
            this._onShowView()
        },
        n.prototype._onShowView = function() {
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
        n.prototype.destroy = function() {
            this._removeEvents(),
            this.basicinfoView.destroy(),
            this.talentView.destroy(),
            this.natureView.destroy(),
            this.studyView.destroy(),
            this.effectView.destroy(),
            this.hpView.destroy(),
            this.scoreView.destroy(),
            t.prototype.destroy.call(this),
            this.rbg_tab.removeEventListener(egret.Event.CHANGE, this.onChangeTab, this),
            AwardManager.resume(),
            e.DataManger.getInstance().setConfigId( - 1),
            e.DataManger.getInstance().ClearBindViewInstance()
        },
        n.prototype.showPetAnimate = function() {
            if (CjsUtil.GetShowPetMovieClip(CjsUtil.GetShowPetId()).then(function(e) {
                CjsUtil.removeAnimate(e)
            }), this.pet.removeChildren(), CjsUtil.setContainer(this.pet), this._info) {
                CjsUtil.disposePetCls(this.currPetId),
                this.currPetId = this._info.id,
                CjsUtil.init(),
                CjsUtil.setContainer(this.pet);
                var e = this._info.id;
                this._info.skinId > 0 && (e = PetSkinXMLInfo.getSkinInfo(this._info.skinId).skinPetId),
                this.currPetId = e,
                CjsUtil.GetShowPetMovieClip(e).then(function(t) {
                    CjsUtil.showAnimate(t);
                    var n = PetXMLInfo.getPetOffset(e);
                    t && (t.regX = n.x, t.regY = n.y)
                })
            }
        },
        n
    } (BaseModule);
    e.OneKeyTheBest = t,
    __reflect(t.prototype, "oneKeyTheBest.OneKeyTheBest")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e._btnTxArr = ["提升等级", "提升天赋", "更换性格", "提升学习力", "养成特性", "提升体力"],
            e._titileTxArr = ["等级", "天赋", "性格", "学习力", "特性", "体力"],
            e.skinName = BasicInfoItemSkin,
            e
        }
        return __extends(n, t),
        n.prototype.setData = function(t) {
            this._curIndex = t,
            this._info = e.DataManger.getInstance().curPetInfo,
            "1" == this.currentState.split("_")[1] ? this.progress_item.value = 0 : "2" == this.currentState.split("_")[1],
            this.txtLabel.text = this._btnTxArr[this._curIndex],
            this.updateView(this._info)
        },
        n.prototype.childrenCreated = function() {
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            var t = this;
            ImageButtonUtil.add(this.btn,
            function() {
                0 == t._curIndex ? (ModuleManager.hideAllModule(), ModuleManager.hideModule("petBag"), ModuleManager.hideModule("oneKeyTheBest"), ModuleManager.showModule("pveExpTraining", ["pveExpTraining"])) : e.DataManger.getInstance().setConfigId(t._curIndex)
            },
            this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.updateView = function(e) {
            if (void 0 === e && (e = null), this._info = e, this.imge_icon.source = "onekeythebest_view_basicinfo_imge_icon_" + this._curIndex + "_png", "1" == this.currentState.split("_")[1]) if (5 != this._curIndex) {
                var t = [this._info.level, this._info.dv, 0, this._info.totalEv, 0, 0],
                n = [100, 31, 0, 510, 0, 510],
                i = t[this._curIndex];
                this.tx_num.text = String(i) + "/" + n[this._curIndex],
                this.tx_title.text = this._titileTxArr[this._curIndex] + "：",
                this.setFlag(),
                this.progress_item.minimum = 0,
                this.progress_item.maximum = n[this._curIndex],
                this.progress_item.value = i
            } else this.tx_title.text = this._titileTxArr[this._curIndex] + "：",
            this.getHpAdd();
            else if ("2" == this.currentState.split("_")[1]) this.tx_num_2.text = NatureXMLInfo.getName(this._info.nature),
            this.tx_desc.text = NatureXMLInfo.getDes(this._info.nature),
            this.setFlag();
            else {
                var o = this.getPetEffect();
                if (o) {
                    var r = PetEffectXMLInfo.getEffect(o.effectID, o.args),
                    _ = PetEffectXMLInfo.getStarLevel(o.effectID, o.args);
                    this.tx_num_3.text = r + " " + _ + "星"
                } else this.tx_num_3.text = "无";
                this.setFlag()
            }
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return e = this.progress_item.value,
                        this._progressValue = 0,
                        this.progress_item.value = 0,
                        [4, common.TweenUtil.TweenToPromise(egret.Tween.get(this).to({
                            progressValue: e
                        },
                        500, egret.Ease.quadOut))];
                    case 1:
                        return t.sent(),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        Object.defineProperty(n.prototype, "progressValue", {
            get: function() {
                return this._progressValue
            },
            set: function(e) {
                this._progressValue = e,
                this.progress_item.value = e,
                this.tx_num.text = Math.floor(e) + "%"
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.setFlag = function() {
            2 == this.getFlagFrame(this._curIndex) || 3 == this.getFlagFrame(this._curIndex) ? this.imge_flag.source = "onekeythebest_view_basicinfo_imge_flag_2_png": this.imge_flag.source = "onekeythebest_view_basicinfo_imge_flag_" + this.getFlagFrame(this._curIndex) + "_png"
        },
        n.prototype.getFlagFrame = function(e) {
            switch (e) {
            case 0:
                if (100 == this._info.level) return 5;
                if (this._info.level > 75) return 4;
                if (this._info.level > 50) return 3;
                if (this._info.level > 25) return 2;
                if (this._info.level <= 25) return 1;
                break;
            case 1:
                if (31 == this._info.dv) return 5;
                if (this._info.dv > 24) return 4;
                if (this._info.dv > 15) return 3;
                if (this._info.dv > 7) return 2;
                if (this._info.dv <= 7) return 1;
                break;
            case 2:
                var t, n = PetXMLInfo.getAllEvById(this._info.id);
                t = n[1] >= n[3] ? 1 : 2;
                var i, o, r = [20, 21, 22, 23, 24],
                _ = [17, 19];
                if (1 == t ? (i = [1, 18], o = [4, 8, 12, 16]) : (i = [8, 16], o = [1, 18, 5, 14]), -1 != i.indexOf(this._info.nature)) return 5;
                if ( - 1 != _.indexOf(this._info.nature)) return 4;
                if ( - 1 != r.indexOf(this._info.nature)) return 3;
                if ( - 1 != o.indexOf(this._info.nature)) return 1;
                if ( - 1 == i.indexOf(this._info.nature) && -1 == _.indexOf(this._info.nature) && -1 == r.indexOf(this._info.nature) && -1 == o.indexOf(this._info.nature)) return 2;
                break;
            case 3:
                if (510 == this._info.totalEv) return 5;
                if (this._info.totalEv > 379) return 4;
                if (this._info.totalEv > 256) return 3;
                if (this._info.totalEv > 128) return 2;
                if (this._info.totalEv <= 128) return 1;
                break;
            case 4:
                var s, a, u = PetXMLInfo.getAllEvById(this._info.id);
                a = [7, 32, 151, 30, 146, 3, 29, 65],
                s = u[1] >= u[3] ? 1 : 2;
                var c = this.getPetEffect();
                if (c) {
                    if ( - 1 != a.indexOf(c.effectID)) {
                        if (65 == c.effectID) {
                            var h = PetEffectXMLInfo.getEffect(c.effectID, c.args);
                            if (1 == s && "精神" == h) return 1;
                            if (2 == s && "强袭" == h) return 1
                        }
                        var l = PetEffectXMLInfo.getStarLevel(c.effectID, c.args);
                        return l + 2 > 5 ? 5 : l + 2
                    }
                    return 1
                }
                if (null == c) return 1;
                break;
            case 5:
                if (this.hpAdd >= 20) return 5;
                if (this.hpAdd > 14) return 4;
                if (this.hpAdd > 9) return 3;
                if (this.hpAdd > 4) return 2;
                if (this.hpAdd <= 4) return 1
            }
            return 0
        },
        n.prototype.getPetEffect = function() {
            for (var e, t = 0; t < this._info.effectList.length; t++) {
                var n = this._info.effectList[t];
                if (177 != n.effectID && 1 == n.status) {
                    var i = PetEffectXMLInfo.getEffect(n.effectID, n.args);
                    if (i.length <= "这四个字".length) {
                        e = n;
                        break
                    }
                }
            }
            return e
        },
        n.prototype.getHpAdd = function() {
            var e = this;
            SocketConnection.sendWithCallback(CommandID.JAMES_ARMOR_QUERY_ABIBLITY,
            function(t) {
                var n = t.data;
                n.position = 0,
                e.hpAdd = n.readUnsignedInt();
                var i = e.hpAdd;
                e.tx_num.text = String(i),
                e.setFlag(),
                e.progress_item.minimum = 0,
                e.progress_item.maximum = 20,
                e.progress_item.value = i
            },
            this._info.catchTime)
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            this._info = null,
            t.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    e.BasicInfoItem = t,
    __reflect(t.prototype, "oneKeyTheBest.BasicInfoItem")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.strArr_1 = [["此次精灵天赋的普通养成使", "", "的天赋由", "", "变为", ""], ["此次精灵天赋的高级养成使", "", "的天赋由", "", "变为", ""], ["此次精灵天赋的超级养成使", "", "的天赋由", "", "变为", ""]],
            i.strArr_2 = [["此次精灵性格的普通养成使", "", "的性格由", "", "变为", ""], ["此次精灵性格的高级养成使", "", "的性格由", "", "变为", ""], ["此次精灵性格的超级养成使", "", "的性格由", "", "变为", ""]],
            i.strArr_4 = [["此次精灵特性的普通养成使", "", "的特性由", "", "变为", ""], ["此次精灵特性的高级养成使", "", "的特性由", "", "变为", ""], ["此次精灵特性的超级养成使", "", "的特性由", "", "变为", ""], ["此次精灵特性的普通变更使", "", "的特性由", "", "变为", ""], ["此次精灵特性的高级变更使", "", "的特性由", "", "变为", ""], ["此次精灵特性的超级变更使", "", "的特性由", "", "变为", ""]],
            i.strArr_5 = [["此次精灵体力的普通养成使", "", "的体力由", "", "变为", ""], ["此次精灵体力的高级养成使", "", "的体力由", "", "变为", ""], ["此次精灵体力的超级养成使", "", "的体力由", "", "变为", ""]],
            i.strArr_6 = [["你成功兑换了提升精灵天赋1点！", "", "的天赋变为", ""], ["你成功兑换了更换1次精灵性格！", "", "的性格变为", ""], ["你成功兑换了添加1次精灵特性", "", "的特性由变为", ""], ["你成功兑换了更换1次精灵特性", "", "的特性由变为", ""]],
            i.skinName = "OnekeythebestPopAlertSkin",
            i._petInfo = e.DataManger.getInstance().curPetInfo,
            i._oldValue = n.oldValue,
            i._newValue = n.newValue,
            i._popupType = n.popupType,
            i
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            var t = this;
            ImageButtonUtil.add(this.imge_close, this.hide, this);
            var n = e.DataManger.getInstance().currentSelectedId;
            switch (n) {
            case 0:
                if (GameInfo.isChecking) return;
                BubblerManager.getInstance().showText("暂未开放，敬请期待");
                break;
            case 1:
            case 2:
            case 4:
            case 5:
                this.currentState = "state_1",
                this.tx_desc_0.text = this["strArr_" + n][this._popupType - 1][0],
                this.tx_desc_1.text = PetXMLInfo.getName(this._petInfo.id),
                this.tx_desc_2.text = this["strArr_" + n][this._popupType - 1][2],
                this.tx_desc_3.text = this._oldValue,
                this.tx_desc_4.text = this["strArr_" + n][this._popupType - 1][4],
                this.tx_desc_5.text = this._newValue,
                e.DataManger.getInstance().updateScore().then(function(e) {
                    t.tx_score.text = String(e)
                }),
                e.DataManger.getInstance().score >= 60 ? this.tx_get_score.text = "0": this.tx_get_score.text = "1";
                break;
            case 6:
                this.currentState = "state_2",
                this.tx_desc_0.text = this["strArr_" + n][this._popupType - 1][0],
                this.tx_desc_1.text = PetXMLInfo.getName(this._petInfo.id),
                this.tx_desc_2.text = this["strArr_" + n][this._popupType - 1][2],
                this.tx_desc_5.text = this._newValue,
                e.DataManger.getInstance().updateScore().then(function(e) {
                    t.tx_score.text = String(e)
                })
            }
        },
        n.prototype.destroy = function() {
            ImageButtonUtil.removeAll(this),
            t.prototype.destroy.call(this)
        },
        n
    } (PopView);
    e.AlertPop = t,
    __reflect(t.prototype, "oneKeyTheBest.AlertPop")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e._isOpen = !1,
            e.akeyBtnStateArr = ["一键超级极品", "一键满天赋", "", "一键满学习力", "", "", ""],
            e
        }
        return __extends(n, t),
        n.getInstance = function() {
            return this._instance || (n._instance = new n),
            n._instance
        },
        n.prototype.UpdateCurPetInfo = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t;
                return __generator(this,
                function(n) {
                    switch (n.label) {
                    case 0:
                        return t = this,
                        [4, PetManager.UpdateBagPetInfoAsynce(this._curPetInfo.catchTime)];
                    case 1:
                        return t._curPetInfo = n.sent(),
                        [4, this.dispatchEventWith(e.OnekeyEvent.event_udpdate_PetInfo, !1, this._curPetInfo)];
                    case 2:
                        return n.sent(),
                        [2, Promise.resolve(this._curPetInfo)]
                    }
                })
            })
        },
        n.prototype.initData = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return e = this,
                        [4, KTool.getMultiValueAsync([13141, 13142, 13144, 13145, 13143, 3226, 3227, 3228])];
                    case 1:
                        return e.values = t.sent(),
                        this.setfreeTimes(),
                        this._score = this.values[5],
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype.setConfigId = function(t, n) {
            void 0 === n && (n = !0),
            this._currentSelectedId != t && (this._currentSelectedId = t, n && this.dispatchEventWith(e.OnekeyEvent.event_change_selecetd_id, !1, t))
        },
        n.prototype.updateScore = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e;
                return __generator(this,
                function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, KTool.getMultiValueAsync([3226])];
                    case 1:
                        return e = t.sent(),
                        this._score = e[0],
                        [2, Promise.resolve(this._score)]
                    }
                })
            })
        },
        n.prototype.updateMoney = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        Object.defineProperty(n.prototype, "currentSelectedId", {
            get: function() {
                return this._currentSelectedId
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.BindViewInstance = function(e) {
            this._viewIns = e
        },
        n.prototype.ClearBindViewInstance = function() {
            this._viewIns = null
        },
        Object.defineProperty(n.prototype, "curPetInfo", {
            get: function() {
                return this._curPetInfo
            },
            set: function(e) {
                this._curPetInfo = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "diamondNum", {
            get: function() {
                return this._diamondNum
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "score", {
            get: function() {
                return this._score
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.setfreeTimes = function() {
            MainManager.actorInfo.isVip ? (this._freeTimes_talent = 3 - this.values[0], this._freeTimes_nature = 2 - this.values[1]) : (this._freeTimes_talent = 2 - this.values[0], this._freeTimes_nature = 1 - this.values[1]),
            this._freeTimes_effect_0 = 1 - this.values[2],
            this._freeTimes_effect_1 = 1 - this.values[3],
            this._freeTimes_hp = 2 - this.values[4]
        },
        Object.defineProperty(n.prototype, "freeTimes_talent", {
            get: function() {
                return this._freeTimes_talent
            },
            set: function(e) {
                this._freeTimes_talent = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "freeTimes_nature", {
            get: function() {
                return this._freeTimes_nature
            },
            set: function(e) {
                this._freeTimes_nature = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "freeTimes_effect_0", {
            get: function() {
                return this._freeTimes_effect_0
            },
            set: function(e) {
                this._freeTimes_effect_0 = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "freeTimes_effect_1", {
            get: function() {
                return this._freeTimes_effect_1
            },
            set: function(e) {
                this._freeTimes_effect_1 = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "freeTimes_hp", {
            get: function() {
                return this._freeTimes_hp
            },
            set: function(e) {
                this._freeTimes_hp = e
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.getIsOpen = function() {
            return PayManager.canPay() || GameInfo.isChecking || BubblerManager.getInstance().showText("暂未开放，敬请期待"),
            PayManager.canPay()
        },
        n
    } (egret.EventDispatcher);
    e.DataManger = t,
    __reflect(t.prototype, "oneKeyTheBest.DataManger")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.TABID = 5,
            e.CHANCE = [10, 15, 22, 25, 35, 45, 70, 100],
            e.skinName = OnekeythebestViewEffectSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_0_1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1_1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_2_0, this._onTouchImageButton, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function() {
            this._info = e.DataManger.getInstance().curPetInfo,
            e.DataManger.getInstance().updateScore(),
            this.diamondNum = e.DataManger.getInstance().diamondNum;
            var t;
            if (this._info) if (t = this.getPetEffect()) {
                var n = PetEffectXMLInfo.getEffect(t.effectID, t.args),
                i = PetEffectXMLInfo.getStarLevel(t.effectID, t.args);
                this.tx_num.text = n + " " + i + "星";
                var o = PetEffectXMLInfo.getIntros(n).getValue(i);
                this.tx_desc.text = o
            } else this.tx_num.text = "无",
            this.tx_desc.text = "无";
            else this.tx_num.text = "??",
            this.tx_desc.text = "??";
            if (null != this._oldPetEffectInfo) {
                t = this.getPetEffect();
                var r;
                t && (r = PetEffectXMLInfo.getEffect(t.effectID, t.args));
                var _;
                _ = 999999 == this._oldPetEffectInfo.effectID ? "无": PetEffectXMLInfo.getEffect(this._oldPetEffectInfo.effectID, this._oldPetEffectInfo.args),
                PopViewManager.getInstance().openView(new e.AlertPop({
                    popupType: this.popupType,
                    oldValue: _,
                    newValue: r
                })),
                this._oldPetEffectInfo = null
            } else StatLogger.log("精灵养成系统", "打开精灵特性标签页", "2015运营活动");
            return Promise.resolve()
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0_0:
                this.doTry(1),
                StatLogger.log("精灵养成系统", "点击精灵特性普通添加", "2015运营活动");
                break;
            case this.btn_0_1:
                StatLogger.log("精灵养成系统", "点击精灵特性高级添加", "2015运营活动"),
                this.doTry(2);
                break;
            case this.btn_1_0:
                this.doTry(3),
                StatLogger.log("精灵养成系统", "点击精灵特性普通变更", "2015运营活动");
                break;
            case this.btn_1_1:
                this.doTry(4),
                StatLogger.log("精灵养成系统", "点击精灵特性高级变更", "2015运营活动");
                break;
            case this.btn_2_0:
                StatLogger.log("精灵养成系统", "点击前往梦幻空间", "2015运营活动"),
                ModuleManager.hideModule("oneKeyTheBest.OneKeyTheBest")
            }
        },
        n.prototype.doTry = function(t) {
            var n = this;
            if (this._index = t, 0 == MainManager.actorInfo.isVip) return void Alarm.show("只有VIP用户才能使用此功能哦！");
            if (null == this._info) return void Alarm.show("请先选中一只精灵！");
            var i = this.getPetEffect();
            switch (t) {
            case 1:
                i ? Alarm.show("这个精灵已经有特性了，不能添加！") : e.DataManger.getInstance().freeTimes_effect_0 <= 0 ? Alarm.show("今天的普通添加次数已经用完！") : MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 3e5 ? BubblerManager.getInstance().showText("每次进行普通添加需要<font color='#ff0000'>300000</font>赛尔豆，你的赛尔豆不足。", !0) : (this.popupType = 1, this.showNoraml(1));
                break;
            case 2:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                i ? Alarm.show("这个精灵已经有特性了，不能添加！") : this.diamondNum < 30 ? BubblerManager.getInstance().showText("每次进行高级添加需要<font color='#ff0000'>30钻石</font>，你的钻石不足。", !0) : Alert.show(" 是否确认消耗<font color='#ff0000'>30钻石</font>进行1次高级添加？必定使其获得1个特性",
                function() {
                    KTool.buyProductByCallback(242031, 1,
                    function() {
                        n.popupType = 2,
                        n.sendCmd()
                    },
                    null, null, !0)
                });
                break;
            case 3:
                null == i ? Alarm.show("这个精灵还没有特性了，不能变更！") : e.DataManger.getInstance().freeTimes_effect_1 <= 0 ? Alarm.show("今天的普通变更次数已经用完！") : MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 25e4 ? BubblerManager.getInstance().showText("每次特性普通变更需要<font color='#ff0000'>250000</font>，你的赛尔豆不足。", !0) : (this.popupType = 4, this.showNoraml(2));
                break;
            case 4:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                null == i ? Alarm.show("这个精灵还没有特性了，不能变更！") : this.diamondNum < 25 ? BubblerManager.getInstance().showText("每次进行高级变更需要<font color='#ff0000'>25钻石</font>，你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>25钻石</font>进行1次高级变更？必定使其变更1个新特性",
                function() {
                    KTool.buyProductByCallback(242032, 1,
                    function() {
                        n.popupType = 5,
                        n.sendCmd()
                    },
                    null, null, !0)
                })
            }
        },
        n.prototype.sendCmd = function() {
            var t = this;
            SocketConnection.sendWithCallback(45104,
            function(n) {
                var i = n.data,
                o = i.readUnsignedInt();
                if (o) t._oldPetEffectInfo = t.getPetEffect(),
                null == t._oldPetEffectInfo && (t._oldPetEffectInfo = new PetEffectInfo(null), t._oldPetEffectInfo.effectID = 999999),
                e.DataManger.getInstance().UpdateCurPetInfo();
                else {
                    var r = 2 == t.popupType ? "添加": "变更";
                    Alarm.show("很遗憾，这次普通" + r + "失败了！请不要灰心，下次普通" + r + "的成功率将提升<font color='#00ff00'>" + t.CHANCE[t.lastNum + 1] + "%</font>\n请明天再来！")
                }
                e.DataManger.getInstance().updateMoney()
            },
            this._index, this._info.catchTime)
        },
        n.prototype.showNoraml = function(t) {
            var n = this;
            this.lastNum = 0,
            this.lastFrame = 0,
            KTool.getMultiValue([3226 + t],
            function(i) {
                n.lastNum = i[0],
                n.lastFrame = 4 + 3 * t;
                var o = 1 == t ? "添加": "变更",
                r = 1 == t ? 3e5: 25e4;
                Alert.show("是否确认消耗<font color='#ff0000'>" + r + "</font>赛尔豆进行1次普通" + o + "？（每天可" + o + "1次），本次添加有<font color='#00ff00'>" + n.CHANCE[n.lastNum] + "%</font>概率给没有特性的非融合精灵" + o + "1个特性",
                function() {
                    n.sendCmd(),
                    1 == t ? e.DataManger.getInstance().freeTimes_effect_0 = e.DataManger.getInstance().freeTimes_effect_0 - 1 : e.DataManger.getInstance().freeTimes_effect_1 = e.DataManger.getInstance().freeTimes_effect_1 - 1
                })
            })
        },
        n.prototype.getPetEffect = function() {
            for (var e, t = 0; t < this._info.effectList.length; t++) {
                var n = this._info.effectList[t];
                if (177 != n.effectID && 1 == n.status) {
                    var i = PetEffectXMLInfo.getEffect(n.effectID, n.args);
                    if (i.length <= "这四个字".length) {
                        e = n;
                        break
                    }
                }
            }
            return e
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.EffectView = t,
    __reflect(t.prototype, "oneKeyTheBest.EffectView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.oldValue = -1,
            e.TABID = 6,
            e.skinName = OnekeythebestViewHpSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1, this._onTouchImageButton, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function() {
            return this._info = e.DataManger.getInstance().curPetInfo,
            e.DataManger.getInstance().updateScore(),
            this.freeTimes = e.DataManger.getInstance().freeTimes_hp,
            this.diamondNum = e.DataManger.getInstance().diamondNum,
            this._info ? this.getHpAdd() : this.tx_num.text = "?/20",
            this.freeTimes > 0 ? this.txtLabel_0.text = "普通养成": this.txtLabel_0.text = "高级养成",
            StatLogger.log("精灵养成系统", "打开精灵体力上限标签页", "2015运营活动"),
            Promise.resolve()
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0:
                this.freeTimes > 0 ? this.doTry(1) : this.doTry(2);
                break;
            case this.btn_1:
                this.doTry(3)
            }
        },
        n.prototype.doTry = function(t) {
            var n = this;
            if (0 == MainManager.actorInfo.isVip) return void Alarm.show("只有VIP用户才能使用此功能哦！");
            if (null == this._info) return void Alarm.show("请先选中一只精灵！");
            if (this.hpAdd >= 20 && 2873 != this._info.id || this.hpAdd >= 32 && 2873 == this._info.id) return void BubblerManager.getInstance().showText("精灵的体力已达到满值。");
            switch (t) {
            case 1:
                MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 55e3 ? BubblerManager.getInstance().showText("每次进行普通养成需要<font color='#ff0000'>55000</font>赛尔豆，你的赛尔豆不足。", !0) : Alert.show(" 是否确认消耗<font color='#ff0000'>55000</font>赛尔豆进行1次普通养成？每次普通养成将会提升当前精灵1点体力上限\n今日剩余次数：<font color='#00ff00'>" + this.freeTimes + "</font>",
                function() {
                    n.popupType = 1,
                    e.DataManger.getInstance().freeTimes_hp = e.DataManger.getInstance().freeTimes_hp - 1,
                    n.sendCmd(t)
                });
                break;
            case 2:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 5 ? BubblerManager.getInstance().showText("每次进行体力上限高级养成需要<font color='#ff0000'>5钻石</font>,你的钻石不足！", !0) : Alert.show("是否确认消耗<font color='#ff0000'>5钻石</font>进行1次高级养成？每次高级养成将会随机变更精灵天赋",
                function() {
                    KTool.buyProductByCallback(242330, 1,
                    function() {
                        n.popupType = 2,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                });
                break;
            case 3:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 80 ? BubblerManager.getInstance().showText("每次进行体力上限超级强化需要<font color='#ff0000'>80钻石</font>,你的钻石不足！", !0) : Alert.show("是否确认消耗<font color='#ff0000'>80钻石</font>进行1次超级强化？将精灵体力上限提升至20",
                function() {
                    KTool.buyProductByCallback(242033, 1,
                    function() {
                        n.popupType = 3,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                })
            }
        },
        n.prototype.sendCmd = function(t) {
            var n = this;
            SocketConnection.sendWithCallback(45105,
            function(t) {
                var i = t.data,
                o = i.readUnsignedInt();
                o && (n.oldValue = n.hpAdd, e.DataManger.getInstance().UpdateCurPetInfo()),
                e.DataManger.getInstance().updateMoney()
            },
            t, this._info.catchTime)
        },
        n.prototype.getHpAdd = function() {
            var t = this;
            SocketConnection.sendWithCallback(CommandID.JAMES_ARMOR_QUERY_ABIBLITY,
            function(n) {
                var i = n.data;
                i.position = 0,
                t.hpAdd = i.readUnsignedInt(),
                t.tx_num.text = t.hpAdd + "/20",
                -1 != t.oldValue && (PopViewManager.getInstance().openView(new e.AlertPop({
                    popupType: t.popupType,
                    oldValue: t.oldValue.toString(),
                    newValue: t.hpAdd.toString()
                })), t.oldValue = -1)
            },
            this._info.catchTime)
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.HpView = t,
    __reflect(t.prototype, "oneKeyTheBest.HpView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.oldNature = -1,
            e.noPopUp = !1,
            e._nature = 0,
            e.skinName = OnekeythebestViewNatureSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1, this._onTouchImageButton, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function() {
            return this._info = e.DataManger.getInstance().curPetInfo,
            e.DataManger.getInstance().updateScore(),
            this.freeTimes = e.DataManger.getInstance().freeTimes_nature,
            this.diamondNum = e.DataManger.getInstance().diamondNum,
            this.freeTimes ? this.tx_btn_0.text = "普通养成": this.tx_btn_0.text = "高级养成",
            this._info ? (this.tx_num.text = NatureXMLInfo.getName(this._info.nature) + "(" + NatureXMLInfo.getDes2(this._info.nature) + ")", this.tx_desc.text = NatureXMLInfo.getDes(this._info.nature)) : (this.tx_num.text = "??", this.tx_desc.text = "??"),
            -1 == this.oldNature || this.noPopUp || (PopViewManager.getInstance().openView(new e.AlertPop({
                popupType: this.popupType,
                oldValue: NatureXMLInfo.getName(this.oldNature).toString(),
                newValue: NatureXMLInfo.getName(this._info.nature).toString()
            })), this.oldNature = -1),
            this.noPopUp = !1,
            Promise.resolve()
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0:
                this.freeTimes > 0 ? (this.doTry(1), StatLogger.log("精灵养成系统", "点击精灵天赋普通养成", "2015运营活动")) : (this.doTry(2), StatLogger.log("精灵养成系统", "点击精灵天赋高级养成", "2015运营活动"));
                break;
            case this.btn_1:
                this.doTry(3),
                StatLogger.log("精灵养成系统", "点击精灵天赋超级强化", "2015运营活动")
            }
        },
        n.prototype.doTry = function(t) {
            var n = this;
            if (null == this._info) return void Alarm.show("请先选中一只精灵！");
            switch (this._nature = 0, t) {
            case 1:
                MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 6e4 ? BubblerManager.getInstance().showText("VIP用户每次进行普通养成需要<font color='#ff0000'>60000</font>赛尔豆，你的赛尔豆不足。", !0) : !MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 12e4 ? BubblerManager.getInstance().showText("每次进行普通养成需要<font color='#ff0000'>120000</font>赛尔豆，你的赛尔豆不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>120000</font>赛尔豆进行1次普通养成？（vip每次只需要消耗<font color='#ff0000'>60000</font>赛尔豆），每日可进行1次（vip每日2次），每次普通养成将会随机变更精灵性格。\n今日剩余次数：<font color='#00ff00'>" + this.freeTimes + "</font>",
                function() {
                    e.DataManger.getInstance().freeTimes_nature = n.freeTimes - 1,
                    n.popupType = 1,
                    n.sendCmd(t)
                });
                break;
            case 2:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 10 ? BubblerManager.getInstance().showText("每次进行高级养成需要<font color='#ff0000'>10钻石</font>，你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>10钻石</font>进行1次高级养成？每次高级养成将会随机变更精灵性格。",
                function() {
                    KTool.buyProductByCallback(242027, 1,
                    function() {
                        n.popupType = 2,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                });
                break;
            case 3:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 150 ? BubblerManager.getInstance().showText("每次进行超级强化需要<font color='#ff0000'>150钻石</font>钻石，你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>150钻石</font>进行1次超级强化？超级强化可以指定生成一种性格。",
                function() {
                    ModuleManager.showModule("natureChoosePanel", ["nature_choose_panel"], {
                        petinfo: n._info,
                        callBack: function(e) {
                            n._nature = e,
                            KTool.buyProductByCallback(242028, 1,
                            function() {
                                n.popupType = 3,
                                n.sendCmd(t)
                            },
                            null, null, !0)
                        },
                        caller: n
                    },
                    null, AppDoStyle.NULL)
                })
            }
        },
        n.prototype.sendCmd = function(t) {
            var n = this;
            SocketConnection.sendWithCallback(45102,
            function(t) {
                var i = t.data,
                o = i.readUnsignedInt();
                o && (n.oldNature = n._info.nature, e.DataManger.getInstance().UpdateCurPetInfo()),
                e.DataManger.getInstance().updateMoney()
            },
            t, this._info.catchTime, this._nature)
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.NatureView = t,
    __reflect(t.prototype, "oneKeyTheBest.NatureView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = OnekeythebestViewScoreSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_2, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_3, this._onTouchImageButton, this),
            e.DataManger.getInstance().addEventListener("event_change_selecetd_id", this.onChangeView, this)
        },
        n.prototype._removeEvents = function() {
            e.DataManger.getInstance().removeEventListener("event_change_selecetd_id", this.onChangeView, this),
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onChangeView = function(e) {},
        n.prototype.UpdateView = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var t, n, i, o;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        return StatLogger.log("精灵养成系统", "打开精灵养成积分兑换页面", "2015运营活动"),
                        this._info = e.DataManger.getInstance().curPetInfo,
                        t = this,
                        [4, e.DataManger.getInstance().updateScore()];
                    case 1:
                        if (t._score = r.sent(), this.tx_num.text = this._score + "/60", this.popupType) {
                            switch (this.popupType) {
                            case 1:
                                n = this._info.dv.toString();
                                break;
                            case 2:
                                n = NatureXMLInfo.getName(this._info.nature);
                                break;
                            case 3:
                            case 4:
                                i = this.getPetEffect(),
                                i && (o = PetEffectXMLInfo.getEffect(i.effectID, i.args), n = o)
                            }
                            PopViewManager.getInstance().openView(new e.AlertPop({
                                popupType: this.popupType,
                                oldValue: "",
                                newValue: n
                            })),
                            this.popupType = 0
                        }
                        return [2, Promise.resolve()]
                    }
                })
            })
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0:
                StatLogger.log("精灵养成系统", "点击兑换提升精灵天赋1点", "2015运营活动"),
                this._score < 50 ? Alarm.show("你的积分不足！") : this.doTry(1);
                break;
            case this.btn_1:
                StatLogger.log("精灵养成系统", "点击兑换更换1次精灵性格", "2015运营活动"),
                this._score < 20 ? Alarm.show("你的积分不足！") : this.doTry(2);
                break;
            case this.btn_2:
                if (StatLogger.log("精灵养成系统", "点击兑换添加1次精灵特性", "2015运营活动"), 0 == MainManager.actorInfo.isVip) return void Alarm.show("只有VIP用户才能使用此功能哦！");
                this._score < 60 ? Alarm.show("你的积分不足！") : this.doTry(3);
                break;
            case this.btn_3:
                if (StatLogger.log("精灵养成系统", "点击兑换变更1次精灵特性", "2015运营活动"), 0 == MainManager.actorInfo.isVip) return void Alarm.show("只有VIP用户才能使用此功能哦！");
                this._score < 50 ? Alarm.show("你的积分不足！") : this.doTry(4)
            }
        },
        n.prototype.doTry = function(t) {
            if (null == this._info) return void Alarm.show("请先选中一只精灵！");
            switch (t) {
            case 1:
                if (31 == this._info.dv) return void BubblerManager.getInstance().showText("精灵的天赋已达到满值。");
                break;
            case 2:
                break;
            case 3:
                if (this.getPetEffect()) return void Alarm.show("这个精灵已经有特性了，不能添加！");
                break;
            case 4:
                if (null == this.getPetEffect()) return void Alarm.show("这个精灵还没有特性了，不能变更！")
            }
            this.popupType = t,
            SocketConnection.sendWithCallback(45106,
            function(t) {
                var n = t.data,
                i = n.readUnsignedInt();
                i && e.DataManger.getInstance().UpdateCurPetInfo(),
                e.DataManger.getInstance().updateMoney()
            },
            t, this._info.catchTime)
        },
        n.prototype.getPetEffect = function() {
            for (var e, t = 0; t < this._info.effectList.length; t++) {
                var n = this._info.effectList[t];
                if (177 != n.effectID && 1 == n.status) {
                    var i = PetEffectXMLInfo.getEffect(n.effectID, n.args);
                    if (i.length <= "这四个字".length) {
                        e = n;
                        break
                    }
                }
            }
            return e
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.ScoreView = t,
    __reflect(t.prototype, "oneKeyTheBest.ScoreView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.skinName = OnekeythebestViewStudySkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1, this._onTouchImageButton, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function() {
            return this._info = e.DataManger.getInstance().curPetInfo,
            e.DataManger.getInstance().updateScore(),
            this.diamondNum = e.DataManger.getInstance().diamondNum,
            this._info ? (this.totalTxt.text = this._info.totalEv + "/510", this.txt_hp.text = this._info.ev_hp + "/255", this.txt_spd.text = this._info.ev_sp + "/255", this.txt_sa.text = this._info.ev_sa + "/255", this.txt_atk.text = this._info.ev_attack + "/255", this.txt_def.text = this._info.ev_defence + "/255", this.txt_sd.text = this._info.ev_sd + "/255") : (this.totalTxt.text = "??/510", this.txt_hp.text = "?/255", this.txt_spd.text = "?/255", this.txt_sa.text = "?/255", this.txt_atk.text = "?/255", this.txt_def.text = "?/255", this.txt_sd.text = "?/255"),
            Promise.resolve()
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0:
                ModuleManager.showModule("studytraining", ["studytraining"]);
                break;
            case this.btn_1:
                this.doTry(1)
            }
        },
        n.prototype.AKeyFuncction = function() {
            return this.doTry(2),
            Promise.resolve()
        },
        n.prototype.doTry = function(t) {
            if (null == this._info) return void Alarm.show("请先选中一只精灵！");
            switch (this._index = t, t) {
            case 1:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                if (510 == this._info.totalEv) return void Alarm.show("这只精灵学习力已满！");
                if (this.diamondNum < 100) BubblerManager.getInstance().showText("学习力超级强化需要<font color='#ff0000'>100钻石</font>，你的钻石不足。", !0);
                else {
                    var n = {
                        chooseNum: 1,
                        petInfo: this._info,
                        fun: this.onChoose,
                        caller: this
                    };
                    ModuleManager.showModule("learningAbilityChoosePop", ["learning_ability_choose_pop"], n, null, AppDoStyle.NULL)
                }
                break;
            case 2:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                if (this.diamondNum < 150) BubblerManager.getInstance().showText("一键满学习力需要<font color='#ff0000'>150钻石</font>，你的钻石不足。", !0);
                else {
                    var i = {
                        chooseNum: 2,
                        petInfo: this._info,
                        fun: this.onChoose2,
                        caller: this
                    };
                    ModuleManager.showModule("learningAbilityChoosePop", ["learning_ability_choose_pop"], i, null, AppDoStyle.NULL)
                }
            }
        },
        n.prototype.onChoose = function(t, n) {
            var i = this;
            KTool.buyProductByCallback(242029, 1,
            function() {
                SocketConnection.sendWithCallback(45103,
                function(t) {
                    var n = t.data,
                    o = n.readUnsignedInt();
                    o && (i._oldInfo = i._info, BubblerManager.getInstance().showText("精灵学习力强化成功！"), e.DataManger.getInstance().UpdateCurPetInfo()),
                    e.DataManger.getInstance().updateMoney()
                },
                i._index, i._info.catchTime, t, 0)
            })
        },
        n.prototype.onChoose2 = function(t, n) {
            var i = this;
            KTool.buyProductByCallback(242030, 1,
            function() {
                SocketConnection.sendWithCallback(45103,
                function(t) {
                    var n = t.data,
                    o = n.readUnsignedInt();
                    o && (i._oldInfo = i._info, BubblerManager.getInstance().showText("一键满学习力加成！"), e.DataManger.getInstance().UpdateCurPetInfo()),
                    e.DataManger.getInstance().updateMoney()
                },
                i._index, i._info.catchTime, t[0], t[1])
            })
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.StudyView = t,
    __reflect(t.prototype, "oneKeyTheBest.StudyView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
__awaiter = this && this.__awaiter ||
function(e, t, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function _(e) {
            try {
                a(i.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                a(i["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function a(e) {
            e.done ? o(e.value) : new n(function(t) {
                t(e.value)
            }).then(_, s)
        }
        a((i = i.apply(e, t || [])).next())
    })
},
__generator = this && this.__generator ||
function(e, t) {
    function n(e) {
        return function(t) {
            return i([e, t])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; a;) try {
            if (o = 1, r && (_ = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(_ = _.call(r, n[1])).done) return _;
            switch (r = 0, _ && (n = [0, _.value]), n[0]) {
            case 0:
            case 1:
                _ = n;
                break;
            case 4:
                return a.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                a.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = a.ops.pop(),
                a.trys.pop();
                continue;
            default:
                if (_ = a.trys, !(_ = _.length > 0 && _[_.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    a = 0;
                    continue
                }
                if (3 === n[0] && (!_ || n[1] > _[0] && n[1] < _[3])) {
                    a.label = n[1];
                    break
                }
                if (6 === n[0] && a.label < _[1]) {
                    a.label = _[1],
                    _ = n;
                    break
                }
                if (_ && a.label < _[2]) {
                    a.label = _[2],
                    a.ops.push(n);
                    break
                }
                _[2] && a.ops.pop(),
                a.trys.pop();
                continue
            }
            n = t.call(e, a)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = _ = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, _, s, a = {
        label: 0,
        sent: function() {
            if (1 & _[0]) throw _[1];
            return _[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }),
    s
},
oneKeyTheBest; !
function(e) {
    var t = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.oldDv = -1,
            e.TABID = 2,
            e.skinName = OnekeythebestViewTalentSkin,
            e
        }
        return __extends(n, t),
        n.prototype.childrenCreated = function() {
            t.prototype.childrenCreated.call(this),
            this._initEvents()
        },
        n.prototype._initEvents = function() {
            ImageButtonUtil.add(this.btn_0, this._onTouchImageButton, this),
            ImageButtonUtil.add(this.btn_1, this._onTouchImageButton, this)
        },
        n.prototype._removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.UpdateView = function() {
            return this._info = e.DataManger.getInstance().curPetInfo,
            e.DataManger.getInstance().updateScore(),
            this.freeTimes = e.DataManger.getInstance().freeTimes_talent,
            this.diamondNum = e.DataManger.getInstance().diamondNum,
            this.freeTimes > 0 ? this.tx_btn_0.text = "普通养成": this.tx_btn_0.text = "高级养成",
            this._info ? (this.tx_num.text = String(this._info.dv), this.progress_item.minimum = 0, this.progress_item.maximum = 31, this.progress_item.value = this._info.dv) : this.tx_num.text = "?",
            -1 != this.oldDv ? (PopViewManager.getInstance().openView(new e.AlertPop({
                popupType: this.popupType,
                oldValue: this.oldDv.toString(),
                newValue: this._info.dv.toString()
            })), this.oldDv = -1) : StatLogger.log("精灵养成系统", "打开精灵天赋标签页", "2015运营活动"),
            Promise.resolve()
        },
        n.prototype._onTouchTapItem = function(e) {
            var t = e.item,
            n = {};
            n.id = t.id,
            tipsPop.TipsPop.openItemPop(n)
        },
        n.prototype.hide = function() {
            t.prototype.hide.call(this),
            this.clearTweens()
        },
        n.prototype.playTweens = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                return __generator(this,
                function(e) {
                    return [2, Promise.resolve()]
                })
            })
        },
        n.prototype.clearTweens = function() {},
        n.prototype.completeCallBack = function() {},
        n.prototype.AKeyFuncction = function() {
            return this.doTry(4),
            Promise.resolve()
        },
        n.prototype._onTouchImageButton = function(e) {
            switch (e.currentTarget) {
            case this.btn_0:
                this.freeTimes > 0 ? (this.doTry(1), StatLogger.log("精灵养成系统", "点击精灵天赋普通养成", "2015运营活动")) : (this.doTry(2), StatLogger.log("精灵养成系统", "点击精灵天赋高级养成", "2015运营活动"));
                break;
            case this.btn_1:
                this.doTry(3),
                StatLogger.log("精灵养成系统", "点击精灵天赋超级强化", "2015运营活动")
            }
        },
        n.prototype.doTry = function(t) {
            var n = this;
            if (31 == this._info.dv) BubblerManager.getInstance().showText("精灵的天赋已达到满值。");
            else switch (t) {
            case 1:
                MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 6e4 ? BubblerManager.getInstance().showText("VIP用户每次进行普通养成需要<font color='#ff0000'>60000</font>赛尔豆，你的赛尔豆不足。", !0) : !MainManager.actorInfo.isVip && MainManager.actorInfo.coins < 12e4 ? BubblerManager.getInstance().showText("每次进行普通养成需要<font color='#ff0000'>120000</font>赛尔豆，你的赛尔豆不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>120000</font>赛尔豆进行1次普通养成？（vip每次只需要消耗<font color='#ff0000'>60000</font>赛尔豆），每日可进行2次（vip每日3次），每次普通养成将会随机变更精灵天赋。\n今日剩余次数：<font color='#00ff00'>" + this.freeTimes + "</font>",
                function() {
                    e.DataManger.getInstance().freeTimes_talent = n.freeTimes - 1,
                    n.popupType = 1,
                    n.sendCmd(t)
                });
                break;
            case 2:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 10 ? BubblerManager.getInstance().showText("每次进行高级养成需要<font color='#ff0000'>10钻石</font>，你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>10钻石</font>进行1次高级养成？每次高级养成将会随机变更精灵天赋。",
                function() {
                    KTool.buyProductByCallback(242024, 1,
                    function() {
                        n.popupType = 2,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                });
                break;
            case 3:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 40 ? BubblerManager.getInstance().showText("每次进行超级强化需要<font color='#ff0000'>40钻石</font>，你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>40钻石</font>进行1次超级强化？每次超级强化将会必定提升精灵1点天赋。",
                function() {
                    KTool.buyProductByCallback(242025, 1,
                    function() {
                        n.popupType = 3,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                });
                break;
            case 4:
                if (!e.DataManger.getInstance().getIsOpen()) return;
                this.diamondNum < 150 ? BubblerManager.getInstance().showText("一键满天赋需要<font color='#ff0000'>150钻石</font>,你的钻石不足。", !0) : Alert.show("是否确认消耗<font color='#ff0000'>150钻石</font>进行一键满天赋?",
                function() {
                    KTool.buyProductByCallback(242026, 1,
                    function() {
                        n.popupType = 4,
                        n.sendCmd(t)
                    },
                    null, null, !0)
                })
            }
        },
        n.prototype.sendCmd = function(t) {
            var n = this;
            SocketConnection.sendWithCallback(45101,
            function(t) {
                var i = t.data,
                o = i.readUnsignedInt();
                o && (n.popupType < 4 ? n.oldDv = n._info.dv: Alarm.show("一键满天赋成功！\n目前这只精灵的天赋已经达到最高，不需要再提升了！"), e.DataManger.getInstance().UpdateCurPetInfo()),
                e.DataManger.getInstance().updateMoney()
            },
            t, this._info.catchTime)
        },
        n.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        n
    } (e.BaseView);
    e.TalentView = t,
    __reflect(t.prototype, "oneKeyTheBest.TalentView")
} (oneKeyTheBest || (oneKeyTheBest = {}));
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
generateEUI.paths["resource/eui_skins/comp/ProgressStyle1Skin.exml"] = window.ProgressStyle1Skin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["progress_bg", "thumb", "labelDisplay"],
        this.height = 24,
        this.width = 183,
        this.elementsContent = [this.progress_bg_i(), this.thumb_i(), this.labelDisplay_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.progress_bg_i = function() {
        var e = new eui.Image;
        return this.progress_bg = e,
        e.percentHeight = 100,
        e.source = "onekeythebest_view_basicinfo_progress_bg_png",
        e.percentWidth = 100,
        e.x = 0,
        e.y = 0,
        e
    },
    n.thumb_i = function() {
        var e = new eui.Image;
        return this.thumb = e,
        e.source = "onekeythebest_view_basicinfo_progress_png",
        e.x = 12,
        e.y = 4,
        e
    },
    n.labelDisplay_i = function() {
        var e = new eui.Label;
        return this.labelDisplay = e,
        e.horizontalCenter = 0,
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e.visible = !1,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/comp/BasicInfoItemSkin.exml"] = window.BasicInfoItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg", "txtLabel", "btn", "tx_title", "tx_num_3", "tx_num_2", "tx_num", "tx_desc", "imge_icon", "imge_flag", "left_info", "basic_info_item_0", "progress_item"],
        this.currentState = "state_1",
        this.height = 55,
        this.width = 457,
        this.elementsContent = [this.basic_info_item_0_i()],
        this.tx_num_3_i(),
        this.tx_num_2_i(),
        this.tx_num_i(),
        this.tx_desc_i(),
        this.progress_item_i(),
        this.states = [new eui.State("state_1", [new eui.AddItems("tx_num", "left_info", 2, "imge_icon"), new eui.AddItems("progress_item", "", 1, ""), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("txtLabel", "width", 100), new eui.SetProperty("txtLabel", "textAlign", "center"), new eui.SetProperty("txtLabel", "x", 3), new eui.SetProperty("txtLabel", "y", 8), new eui.SetProperty("tx_title", "text", "学习力："), new eui.SetProperty("imge_flag", "source", "onekeythebest_view_basicinfo_imge_flag_1_png")]), new eui.State("state_2", [new eui.AddItems("tx_num_2", "left_info", 2, "imge_icon"), new eui.AddItems("tx_desc", "left_info", 2, "imge_icon"), new eui.SetProperty("imge_item_bg", "y", 0), new eui.SetProperty("tx_title", "x", 46), new eui.SetProperty("tx_title", "y", 2), new eui.SetProperty("tx_title", "text", "性格："), new eui.SetProperty("left_info", "y", 6)]), new eui.State("state_3", [new eui.AddItems("tx_num_3", "left_info", 2, "imge_icon"), new eui.SetProperty("tx_title", "x", 46), new eui.SetProperty("tx_title", "y", 12), new eui.SetProperty("tx_title", "text", "特性："), new eui.SetProperty("imge_icon", "y", 3)])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.basic_info_item_0_i = function() {
        var e = new eui.Group;
        return this.basic_info_item_0 = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_i(), this.btn_i(), this.left_info_i()],
        e
    },
    n.imge_item_bg_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_i = function() {
        var e = new eui.Group;
        return this.btn = e,
        e.cacheAsBitmap = !0,
        e.x = 340,
        e.y = 12,
        e.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "提升等级",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.left_info_i = function() {
        var e = new eui.Group;
        return this.left_info = e,
        e.cacheAsBitmap = !0,
        e.x = 14,
        e.y = 6,
        e.elementsContent = [this.tx_title_i(), this.imge_icon_i(), this.imge_flag_i()],
        e
    },
    n.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "等级：",
        e.textColor = 16777215,
        e.x = 46,
        e.y = 2,
        e
    },
    n.tx_num_3_i = function() {
        var e = new eui.Label;
        return this.tx_num_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "精神",
        e.textColor = 6481510,
        e.x = 99,
        e.y = 12,
        e
    },
    n.tx_num_2_i = function() {
        var e = new eui.Label;
        return this.tx_num_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "顽皮",
        e.textColor = 16777215,
        e.x = 97,
        e.y = 2,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "512/512",
        e.textColor = 6481510,
        e.width = 100,
        e.x = 108,
        e.y = 2,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.fontFamily = "MFShangHei",
        e.height = 18,
        e.size = 17,
        e.text = "防御+10%  特攻-10%",
        e.textColor = 6481510,
        e.width = 254,
        e.x = 46,
        e.y = 21,
        e
    },
    n.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_0_png",
        e.x = 0,
        e.y = 3,
        e
    },
    n.imge_flag_i = function() {
        var e = new eui.Image;
        return this.imge_flag = e,
        e.source = "onekeythebest_view_basicinfo_imge_flag_1_png",
        e.x = 230.842,
        e.y = 3.996,
        e
    },
    n.progress_item_i = function() {
        var e = new eui.ProgressBar;
        return this.progress_item = e,
        e.maximum = 100,
        e.minimum = 0,
        e.skinName = "ProgressStyle1Skin",
        e.value = 50,
        e.visible = !0,
        e.x = 54.24,
        e.y = 25.234,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewBasicinfoSkin.exml"] = window.OnekeythebestViewBasicinfoSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["item_0", "item_1", "item_2", "item_3", "item_4", "item_5"],
        this.height = 417,
        this.width = 457,
        this.elementsContent = [this.item_0_i(), this.item_1_i(), this.item_2_i(), this.item_3_i(), this.item_4_i(), this.item_5_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.item_0_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_0 = e,
        e.currentState = "state_1",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 0,
        e
    },
    n.item_1_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_1 = e,
        e.currentState = "state_1",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 73,
        e
    },
    n.item_2_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_2 = e,
        e.currentState = "state_2",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 145,
        e
    },
    n.item_3_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_3 = e,
        e.currentState = "state_1",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 217,
        e
    },
    n.item_4_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_4 = e,
        e.currentState = "state_3",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 289,
        e
    },
    n.item_5_i = function() {
        var e = new oneKeyTheBest.BasicInfoItem;
        return this.item_5 = e,
        e.currentState = "state_1",
        e.skinName = "BasicInfoItemSkin",
        e.x = 0,
        e.y = 360,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewTalentSkin.exml"] = window.OnekeythebestViewTalentSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_btn_bg_0", "tx_btn_0", "btn_0", "imge_icon_talent_0", "gr_btn_0", "imge_btn_bg_1", "tx_btn_1", "btn_1", "imge_icon_talent_1", "gr_btn_1", "imge_titile_bg", "tx_title", "tx_desc", "tx_num", "imge_icon", "progress_item", "talent"],
        this.height = 399,
        this.width = 457,
        this.elementsContent = [this.talent_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.talent_i = function() {
        var e = new eui.Group;
        return this.talent = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.gr_btn_0_i(), this.gr_btn_1_i(), this._Group1_i(), this.progress_item_i()],
        e
    },
    n.gr_btn_0_i = function() {
        var e = new eui.Group;
        return this.gr_btn_0 = e,
        e.cacheAsBitmap = !0,
        e.x = 25,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_0_i(), this.btn_0_i(), this.imge_icon_talent_0_i()],
        e
    },
    n.imge_btn_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_0 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_i = function() {
        var e = new eui.Group;
        return this.btn_0 = e,
        e.x = 39,
        e.y = 169,
        e.elementsContent = [this._Image1_i(), this.tx_btn_0_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_0_i = function() {
        var e = new eui.Label;
        return this.tx_btn_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通养成",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.imge_icon_talent_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_talent_0 = e,
        e.source = "onekeythebest_view_talent_imge_icon_talent_0_png",
        e.x = 16,
        e.y = 26,
        e
    },
    n.gr_btn_1_i = function() {
        var e = new eui.Group;
        return this.gr_btn_1 = e,
        e.cacheAsBitmap = !0,
        e.x = 253,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_1_i(), this.btn_1_i(), this.imge_icon_talent_1_i()],
        e
    },
    n.imge_btn_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_1 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_i = function() {
        var e = new eui.Group;
        return this.btn_1 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image2_i(), this.tx_btn_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_1_i = function() {
        var e = new eui.Label;
        return this.tx_btn_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "超级强化",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_icon_talent_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_talent_1 = e,
        e.source = "onekeythebest_view_talent_imge_icon_talent_1_png",
        e.x = 15,
        e.y = 26,
        e
    },
    n._Group1_i = function() {
        var e = new eui.Group;
        return e.cacheAsBitmap = !0,
        e.height = 145,
        e.width = 457,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_titile_bg_i(), this.tx_title_i(), this.tx_desc_i(), this.tx_num_i(), this.imge_icon_i()],
        e
    },
    n.imge_titile_bg_i = function() {
        var e = new eui.Image;
        return this.imge_titile_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "天赋：",
        e.textColor = 16777215,
        e.x = 60,
        e.y = 8,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "        精灵的天赋是精灵实力的重要保障，每提升1点天\n赋，精灵的各项属性值（体力、速度、攻击、防御、\n特攻、特防）都会提高。  天赋点数越高精灵提升的属\n性越高，最多可以提升至31点天赋。",
        e.textColor = 8631026,
        e.width = 412,
        e.x = 17,
        e.y = 77,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "15/31",
        e.textColor = 6481510,
        e.x = 113,
        e.y = 8,
        e
    },
    n.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_1_png",
        e.x = 11,
        e.y = 10,
        e
    },
    n.progress_item_i = function() {
        var e = new eui.ProgressBar;
        return this.progress_item = e,
        e.skinName = "ProgressStyle1Skin",
        e.x = 39,
        e.y = 22,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewNatureSkin.exml"] = window.OnekeythebestViewNatureSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_btn_bg_0", "tx_btn_0", "btn_0", "imge_icon_0", "gr_btn_0", "imge_btn_bg_1", "tx_btn_1", "btn_1", "imge_icon_1", "gr_btn_1", "imge_titile_bg", "tx_title", "tx_num", "tx_desc2", "tx_desc", "icon", "nature"],
        this.height = 399,
        this.width = 457,
        this.elementsContent = [this.nature_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.nature_i = function() {
        var e = new eui.Group;
        return this.nature = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.gr_btn_0_i(), this.gr_btn_1_i(), this.imge_titile_bg_i(), this.tx_title_i(), this.tx_num_i(), this.tx_desc2_i(), this.tx_desc_i(), this.icon_i()],
        e
    },
    n.gr_btn_0_i = function() {
        var e = new eui.Group;
        return this.gr_btn_0 = e,
        e.x = 25,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_0_i(), this.btn_0_i(), this.imge_icon_0_i()],
        e
    },
    n.imge_btn_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_0 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_i = function() {
        var e = new eui.Group;
        return this.btn_0 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image1_i(), this.tx_btn_0_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_0_i = function() {
        var e = new eui.Label;
        return this.tx_btn_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通养成",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.source = "onekeythebest_view_nature_imge_icon_0_png",
        e.x = 38,
        e.y = 40,
        e
    },
    n.gr_btn_1_i = function() {
        var e = new eui.Group;
        return this.gr_btn_1 = e,
        e.x = 253,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_1_i(), this.btn_1_i(), this.imge_icon_1_i()],
        e
    },
    n.imge_btn_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_1 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_i = function() {
        var e = new eui.Group;
        return this.btn_1 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image2_i(), this.tx_btn_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_1_i = function() {
        var e = new eui.Label;
        return this.tx_btn_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "超级强化",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "onekeythebest_view_nature_imge_icon_1_png",
        e.x = 34,
        e.y = 40,
        e
    },
    n.imge_titile_bg_i = function() {
        var e = new eui.Image;
        return this.imge_titile_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前性格：",
        e.textColor = 16777215,
        e.x = 61,
        e.y = 6,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "固执",
        e.textColor = 16777215,
        e.x = 146,
        e.y = 7,
        e
    },
    n.tx_desc2_i = function() {
        var e = new eui.Label;
        return this.tx_desc2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "		      精灵的性格决定了精灵属性值的基本走向，不同\n的性格对精灵的属性加成也是不同的。性格会影响精\n灵的基础属性，让精灵拥有合适的性格很关键。",
        e.textColor = 8631026,
        e.width = 413,
        e.x = 18,
        e.y = 77,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "攻击+10%  特攻-10%",
        e.textColor = 6481510,
        e.x = 62,
        e.y = 29,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_2_png",
        e.x = 12,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewStudySkin.exml"] = window.OnekeythebestViewStudySkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_titile_bg", "imge_btn_bg_0", "tx_btn_0", "btn_0", "imge_icon_0", "gr_btn_0", "imge_btn_bg_1", "tx_btn_1", "btn_1", "imge_icon_1", "onekeythebest_view_talent_imge_btn_bg_1_png", "tx_title_45253", "tx_title_0", "imge_value_bg_0", "txt_atk", "icon_0", "gongji", "tx_title_1", "imge_value_bg_1", "txt_sa", "icon_1", "tegong", "tx_title_2", "imge_value_bg_2", "txt_spd", "icon_2", "sudu", "tx_title_3", "imge_value_bg_3", "txt_def", "icon_3", "fangyu", "tx_title_4", "imge_value_bg_4", "txt_sd", "icon_4", "tefang", "tx_title_5", "imge_value_bg_5", "txt_hp", "icon_5", "tili", "totalTxt", "icon", "study"],
        this.height = 399,
        this.width = 457,
        this.elementsContent = [this.study_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.study_i = function() {
        var e = new eui.Group;
        return this.study = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_titile_bg_i(), this.gr_btn_0_i(), this.onekeythebest_view_talent_imge_btn_bg_1_png_i(), this.tx_title_45253_i(), this.gongji_i(), this.tegong_i(), this.sudu_i(), this.fangyu_i(), this.tefang_i(), this.tili_i(), this.totalTxt_i(), this.icon_i()],
        e
    },
    n.imge_titile_bg_i = function() {
        var e = new eui.Image;
        return this.imge_titile_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.gr_btn_0_i = function() {
        var e = new eui.Group;
        return this.gr_btn_0 = e,
        e.x = 25,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_0_i(), this.btn_0_i(), this.imge_icon_0_i()],
        e
    },
    n.imge_btn_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_0 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_i = function() {
        var e = new eui.Group;
        return this.btn_0 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image1_i(), this.tx_btn_0_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_0_i = function() {
        var e = new eui.Label;
        return this.tx_btn_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通养成",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.source = "onekeythebest_view_study_imge_icon_0_png",
        e.x = 38,
        e.y = 40,
        e
    },
    n.onekeythebest_view_talent_imge_btn_bg_1_png_i = function() {
        var e = new eui.Group;
        return this.onekeythebest_view_talent_imge_btn_bg_1_png = e,
        e.x = 253,
        e.y = 174,
        e.elementsContent = [this.imge_btn_bg_1_i(), this.btn_1_i(), this.imge_icon_1_i()],
        e
    },
    n.imge_btn_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_btn_bg_1 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_i = function() {
        var e = new eui.Group;
        return this.btn_1 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image2_i(), this.tx_btn_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_btn_1_i = function() {
        var e = new eui.Label;
        return this.tx_btn_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "超级强化",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "onekeythebest_view_study_imge_icon_1_png",
        e.x = 29,
        e.y = 34,
        e
    },
    n.tx_title_45253_i = function() {
        var e = new eui.Label;
        return this.tx_title_45253 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前学习力总和：",
        e.textColor = 16777215,
        e.x = 59,
        e.y = 6,
        e
    },
    n.gongji_i = function() {
        var e = new eui.Group;
        return this.gongji = e,
        e.x = 14,
        e.y = 66,
        e.elementsContent = [this.tx_title_0_i(), this.imge_value_bg_0_i(), this.txt_atk_i(), this.icon_0_i()],
        e
    },
    n.tx_title_0_i = function() {
        var e = new eui.Label;
        return this.tx_title_0 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "攻击：",
        e.textColor = 12834813,
        e.x = 28,
        e.y = 6,
        e
    },
    n.imge_value_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_0 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 80,
        e.y = 0,
        e
    },
    n.txt_atk_i = function() {
        var e = new eui.Label;
        return this.txt_atk = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 113,
        e.y = 5,
        e
    },
    n.icon_0_i = function() {
        var e = new eui.Image;
        return this.icon_0 = e,
        e.height = 20,
        e.source = "common_atk_png",
        e.width = 20,
        e.x = 0,
        e.y = 4,
        e
    },
    n.tegong_i = function() {
        var e = new eui.Group;
        return this.tegong = e,
        e.x = 16,
        e.y = 100,
        e.elementsContent = [this.tx_title_1_i(), this.imge_value_bg_1_i(), this.txt_sa_i(), this.icon_1_i()],
        e
    },
    n.tx_title_1_i = function() {
        var e = new eui.Label;
        return this.tx_title_1 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "特攻：",
        e.textColor = 12834813,
        e.x = 26,
        e.y = 6,
        e
    },
    n.imge_value_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_1 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 78,
        e.y = 0,
        e
    },
    n.txt_sa_i = function() {
        var e = new eui.Label;
        return this.txt_sa = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 111,
        e.y = 5,
        e
    },
    n.icon_1_i = function() {
        var e = new eui.Image;
        return this.icon_1 = e,
        e.height = 20,
        e.source = "common_sdef_png",
        e.width = 20,
        e.x = 0,
        e.y = 3,
        e
    },
    n.sudu_i = function() {
        var e = new eui.Group;
        return this.sudu = e,
        e.x = 14,
        e.y = 133,
        e.elementsContent = [this.tx_title_2_i(), this.imge_value_bg_2_i(), this.txt_spd_i(), this.icon_2_i()],
        e
    },
    n.tx_title_2_i = function() {
        var e = new eui.Label;
        return this.tx_title_2 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "速度：",
        e.textColor = 12834813,
        e.x = 28,
        e.y = 5,
        e
    },
    n.imge_value_bg_2_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_2 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 80,
        e.y = 0,
        e
    },
    n.txt_spd_i = function() {
        var e = new eui.Label;
        return this.txt_spd = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 113,
        e.y = 5,
        e
    },
    n.icon_2_i = function() {
        var e = new eui.Image;
        return this.icon_2 = e,
        e.height = 20,
        e.source = "common_speed_png",
        e.width = 20,
        e.x = 0,
        e.y = 4,
        e
    },
    n.fangyu_i = function() {
        var e = new eui.Group;
        return this.fangyu = e,
        e.x = 244,
        e.y = 66,
        e.elementsContent = [this.tx_title_3_i(), this.imge_value_bg_3_i(), this.txt_def_i(), this.icon_3_i()],
        e
    },
    n.tx_title_3_i = function() {
        var e = new eui.Label;
        return this.tx_title_3 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "防御：",
        e.textColor = 12834813,
        e.x = 26,
        e.y = 5,
        e
    },
    n.imge_value_bg_3_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_3 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 77,
        e.y = 0,
        e
    },
    n.txt_def_i = function() {
        var e = new eui.Label;
        return this.txt_def = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 111,
        e.y = 5,
        e
    },
    n.icon_3_i = function() {
        var e = new eui.Image;
        return this.icon_3 = e,
        e.height = 20,
        e.source = "common_def_png",
        e.width = 20,
        e.x = 0,
        e.y = 4,
        e
    },
    n.tefang_i = function() {
        var e = new eui.Group;
        return this.tefang = e,
        e.x = 243,
        e.y = 100,
        e.elementsContent = [this.tx_title_4_i(), this.imge_value_bg_4_i(), this.txt_sd_i(), this.icon_4_i()],
        e
    },
    n.tx_title_4_i = function() {
        var e = new eui.Label;
        return this.tx_title_4 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "特防：",
        e.textColor = 12834813,
        e.x = 27,
        e.y = 5,
        e
    },
    n.imge_value_bg_4_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_4 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 78,
        e.y = 0,
        e
    },
    n.txt_sd_i = function() {
        var e = new eui.Label;
        return this.txt_sd = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 112,
        e.y = 5,
        e
    },
    n.icon_4_i = function() {
        var e = new eui.Image;
        return this.icon_4 = e,
        e.height = 20,
        e.source = "common_sdef_png",
        e.width = 20,
        e.x = 0,
        e.y = 4,
        e
    },
    n.tili_i = function() {
        var e = new eui.Group;
        return this.tili = e,
        e.x = 243,
        e.y = 133,
        e.elementsContent = [this.tx_title_5_i(), this.imge_value_bg_5_i(), this.txt_hp_i(), this.icon_5_i()],
        e
    },
    n.tx_title_5_i = function() {
        var e = new eui.Label;
        return this.tx_title_5 = e,
        e.fontFamily = "REEJI",
        e.size = 20,
        e.text = "体力：",
        e.textColor = 12834813,
        e.x = 26,
        e.y = 6,
        e
    },
    n.imge_value_bg_5_i = function() {
        var e = new eui.Image;
        return this.imge_value_bg_5 = e,
        e.source = "onekeythebest_view_study_imge_value_bg_0_png",
        e.x = 78,
        e.y = 0,
        e
    },
    n.txt_hp_i = function() {
        var e = new eui.Label;
        return this.txt_hp = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "0/255",
        e.textColor = 4187130,
        e.x = 112,
        e.y = 5,
        e
    },
    n.icon_5_i = function() {
        var e = new eui.Image;
        return this.icon_5 = e,
        e.height = 20,
        e.source = "common_hp_png",
        e.width = 20,
        e.x = 0,
        e.y = 4,
        e
    },
    n.totalTxt_i = function() {
        var e = new eui.Label;
        return this.totalTxt = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "255/510",
        e.textColor = 6481510,
        e.x = 59,
        e.y = 30,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_3_png",
        e.x = 14,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewEffectSkin.exml"] = window.OnekeythebestViewEffectSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_titile_bg", "imge_gr_btn_bg", "txtLabel_0_0", "btn_0_0", "txtLabel_0_1", "btn_0_1", "imge_add_0", "imge_icon_plus", "gr_btn_0", "imge_gr_btn_bg_1", "txtLabel_1_0", "btn_1_0", "txtLabel_1_1", "btn_1_1", "imge_tx_343", "imge_icon_change", "gr_btn_1", "imge_gr_btn_bg_2", "txtLabel_2_0", "btn_2_0", "imge_tx_4444", "imge_icon_up", "gr_btn_2", "tx_titile_3434343", "tx_num", "tx_desc1", "tx_desc", "icon", "effect"],
        this.height = 399,
        this.width = 457,
        this.elementsContent = [this.effect_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.effect_i = function() {
        var e = new eui.Group;
        return this.effect = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_titile_bg_i(), this.gr_btn_0_i(), this.gr_btn_1_i(), this.gr_btn_2_i(), this.tx_titile_3434343_i(), this.tx_num_i(), this.tx_desc1_i(), this.tx_desc_i(), this.icon_i()],
        e
    },
    n.imge_titile_bg_i = function() {
        var e = new eui.Image;
        return this.imge_titile_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.gr_btn_0_i = function() {
        var e = new eui.Group;
        return this.gr_btn_0 = e,
        e.x = 25,
        e.y = 176,
        e.elementsContent = [this.imge_gr_btn_bg_i(), this.btn_0_0_i(), this.btn_0_1_i(), this.imge_add_0_i(), this.imge_icon_plus_i()],
        e
    },
    n.imge_gr_btn_bg_i = function() {
        var e = new eui.Image;
        return this.imge_gr_btn_bg = e,
        e.source = "onekeythebest_view_effect_imge_gr_btn_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_0_i = function() {
        var e = new eui.Group;
        return this.btn_0_0 = e,
        e.x = 168,
        e.y = 10,
        e.elementsContent = [this._Image1_i(), this.txtLabel_0_0_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_0_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_0_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通添加",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.btn_0_1_i = function() {
        var e = new eui.Group;
        return this.btn_0_1 = e,
        e.x = 286,
        e.y = 10,
        e.elementsContent = [this._Image2_i(), this.txtLabel_0_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_0_1_i = function() {
        var e = new eui.Label;
        return this.txtLabel_0_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "高级添加",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_add_0_i = function() {
        var e = new eui.Image;
        return this.imge_add_0 = e,
        e.source = "onekeythebest_view_effect_imge_add_0_png",
        e.x = 54,
        e.y = 11,
        e
    },
    n.imge_icon_plus_i = function() {
        var e = new eui.Image;
        return this.imge_icon_plus = e,
        e.source = "onekeythebest_view_effect_imge_icon_plus_png",
        e.x = 8,
        e.y = 4,
        e
    },
    n.gr_btn_1_i = function() {
        var e = new eui.Group;
        return this.gr_btn_1 = e,
        e.x = 25,
        e.y = 248,
        e.elementsContent = [this.imge_gr_btn_bg_1_i(), this.btn_1_0_i(), this.btn_1_1_i(), this.imge_tx_343_i(), this.imge_icon_change_i()],
        e
    },
    n.imge_gr_btn_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_gr_btn_bg_1 = e,
        e.source = "onekeythebest_view_effect_imge_gr_btn_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_0_i = function() {
        var e = new eui.Group;
        return this.btn_1_0 = e,
        e.x = 168,
        e.y = 10,
        e.elementsContent = [this._Image3_i(), this.txtLabel_1_0_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_1_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_1_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通变更",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.btn_1_1_i = function() {
        var e = new eui.Group;
        return this.btn_1_1 = e,
        e.x = 286,
        e.y = 10,
        e.elementsContent = [this._Image4_i(), this.txtLabel_1_1_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_1_1_i = function() {
        var e = new eui.Label;
        return this.txtLabel_1_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "高级变更",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_tx_343_i = function() {
        var e = new eui.Image;
        return this.imge_tx_343 = e,
        e.source = "onekeythebest_view_effect_imge_tx_343_png",
        e.x = 54,
        e.y = 11,
        e
    },
    n.imge_icon_change_i = function() {
        var e = new eui.Image;
        return this.imge_icon_change = e,
        e.source = "onekeythebest_view_effect_imge_icon_change_png",
        e.x = 8,
        e.y = 4,
        e
    },
    n.gr_btn_2_i = function() {
        var e = new eui.Group;
        return this.gr_btn_2 = e,
        e.x = 25,
        e.y = 320,
        e.elementsContent = [this.imge_gr_btn_bg_2_i(), this.btn_2_0_i(), this.imge_tx_4444_i(), this.imge_icon_up_i()],
        e
    },
    n.imge_gr_btn_bg_2_i = function() {
        var e = new eui.Image;
        return this.imge_gr_btn_bg_2 = e,
        e.source = "onekeythebest_view_effect_imge_gr_btn_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_2_0_i = function() {
        var e = new eui.Group;
        return this.btn_2_0 = e,
        e.x = 286,
        e.y = 11,
        e.elementsContent = [this._Image5_i(), this.txtLabel_2_0_i()],
        e
    },
    n._Image5_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 105,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_2_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_2_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "前往强化",
        e.textColor = 16777215,
        e.x = 17,
        e.y = 9,
        e
    },
    n.imge_tx_4444_i = function() {
        var e = new eui.Image;
        return this.imge_tx_4444 = e,
        e.source = "onekeythebest_view_effect_imge_tx_4444_png",
        e.x = 53,
        e.y = 12,
        e
    },
    n.imge_icon_up_i = function() {
        var e = new eui.Image;
        return this.imge_icon_up = e,
        e.source = "onekeythebest_view_effect_imge_icon_up_png",
        e.x = 8,
        e.y = 5,
        e
    },
    n.tx_titile_3434343_i = function() {
        var e = new eui.Label;
        return this.tx_titile_3434343 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前特性：",
        e.textColor = 16777215,
        e.x = 61,
        e.y = 6,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "精神",
        e.textColor = 16777215,
        e.x = 145,
        e.y = 7,
        e
    },
    n.tx_desc1_i = function() {
        var e = new eui.Label;
        return this.tx_desc1 = e,
        e.anchorOffsetX = 0,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "		      精灵的特性为进阶属性，需要在获得精灵后开启，\n特性会让精灵在战斗中产生多种多样的效果，合理地\n运用特性甚至可以扭转战局。",
        e.textColor = 8631026,
        e.width = 415,
        e.x = 26,
        e.y = 77,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "特殊攻击伤害增加8%",
        e.textColor = 6481510,
        e.x = 62,
        e.y = 28,
        e
    },
    n.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_4_png",
        e.x = 11,
        e.y = 11,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewHpSkin.exml"] = window.OnekeythebestViewHpSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_titile_bg", "imge_gr_btn_bg_0", "txtLabel_0", "btn_0", "imge_icon_0", "gr_btn_0", "imge_gr_btn_bg_1", "txtLabel_1", "btn_1", "imge_icon_1", "gr_btn_1", "tx_title", "tx_desc", "tx_num", "imge_icon", "hp"],
        this.height = 399,
        this.width = 457,
        this.elementsContent = [this.hp_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.hp_i = function() {
        var e = new eui.Group;
        return this.hp = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_titile_bg_i(), this.gr_btn_0_i(), this.gr_btn_1_i(), this.tx_title_i(), this.tx_desc_i(), this.tx_num_i(), this.imge_icon_i()],
        e
    },
    n.imge_titile_bg_i = function() {
        var e = new eui.Image;
        return this.imge_titile_bg = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.gr_btn_0_i = function() {
        var e = new eui.Group;
        return this.gr_btn_0 = e,
        e.x = 25,
        e.y = 174,
        e.elementsContent = [this.imge_gr_btn_bg_0_i(), this.btn_0_i(), this.imge_icon_0_i()],
        e
    },
    n.imge_gr_btn_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_gr_btn_bg_0 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_i = function() {
        var e = new eui.Group;
        return this.btn_0 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image1_i(), this.txtLabel_0_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_blue_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "普通养成",
        e.textColor = 16777215,
        e.x = 18,
        e.y = 9,
        e
    },
    n.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.source = "onekeythebest_view_hp_imge_icon_0_png",
        e.x = 42,
        e.y = 36,
        e
    },
    n.gr_btn_1_i = function() {
        var e = new eui.Group;
        return this.gr_btn_1 = e,
        e.x = 253,
        e.y = 174,
        e.elementsContent = [this.imge_gr_btn_bg_1_i(), this.btn_1_i(), this.imge_icon_1_i()],
        e
    },
    n.imge_gr_btn_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_gr_btn_bg_1 = e,
        e.source = "onekeythebest_view_talent_imge_btn_bg_1_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_i = function() {
        var e = new eui.Group;
        return this.btn_1 = e,
        e.x = 39,
        e.y = 170,
        e.elementsContent = [this._Image2_i(), this.txtLabel_1_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 106,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_1_i = function() {
        var e = new eui.Label;
        return this.txtLabel_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "超级强化",
        e.textColor = 16777215,
        e.x = 19,
        e.y = 9,
        e
    },
    n.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "onekeythebest_view_hp_imge_icon_1_png",
        e.x = 37,
        e.y = 36,
        e
    },
    n.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前体力上限：",
        e.textColor = 16777215,
        e.x = 61,
        e.y = 6,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "		      精灵的体力上限为进阶属性，体力是精灵最基础的生存能力，提升体力上限可以大大提升该精灵在战斗中的生存率。",
        e.textColor = 8631026,
        e.width = 413,
        e.x = 17,
        e.y = 77,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "20/20",
        e.textColor = 6481510,
        e.x = 62,
        e.y = 30,
        e
    },
    n.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.source = "onekeythebest_view_basicinfo_imge_icon_4_png",
        e.x = 15,
        e.y = 12,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/view/OnekeythebestViewScoreSkin.exml"] = window.OnekeythebestViewScoreSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_item_bg_png", "imge_item_bg_0", "txtLabel", "btn_3", "tx_require_3", "imge_txdesc_3", "imge_icon_3", "item_3", "imge_item_bg_2", "txtLabel_2", "btn_2", "tx_require_2", "imge_txdesc_2", "imge_icon_2", "item_2", "imge_item_bg_1", "txtLabel_1", "btn_1", "tx_require_1", "imge_txdesc_1", "imge_icon_1", "item_1", "hengtiao", "txtLabel_0", "btn_0", "tx_require_0", "imge_txdesc_0", "imge_icon_0", "item_0", "tx_title", "tx_desc", "tx_num", "imge_icon", "score"],
        this.height = 406,
        this.width = 457,
        this.elementsContent = [this.score_i()]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.score_i = function() {
        var e = new eui.Group;
        return this.score = e,
        e.cacheAsBitmap = !0,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.imge_item_bg_png_i(), this.item_3_i(), this.item_2_i(), this.item_1_i(), this.item_0_i(), this.tx_title_i(), this.tx_desc_i(), this.tx_num_i(), this.imge_icon_i()],
        e
    },
    n.imge_item_bg_png_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_png = e,
        e.source = "onekeythebest_view_basicinfo_imge_item_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.item_3_i = function() {
        var e = new eui.Group;
        return this.item_3 = e,
        e.x = 25,
        e.y = 268,
        e.elementsContent = [this.imge_item_bg_0_i(), this.btn_3_i(), this.tx_require_3_i(), this.imge_txdesc_3_i(), this.imge_icon_3_i()],
        e
    },
    n.imge_item_bg_0_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_0 = e,
        e.source = "onekeythebest_view_score_imge_item_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_3_i = function() {
        var e = new eui.Group;
        return this.btn_3 = e,
        e.x = 328,
        e.y = 11,
        e.elementsContent = [this._Image1_i(), this.txtLabel_i()],
        e
    },
    n._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 34,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 63,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_i = function() {
        var e = new eui.Label;
        return this.txtLabel = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "兑换",
        e.textColor = 16777215,
        e.x = 15,
        e.y = 9,
        e
    },
    n.tx_require_3_i = function() {
        var e = new eui.Label;
        return this.tx_require_3 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "需50积分",
        e.textColor = 16765477,
        e.x = 248,
        e.y = 20,
        e
    },
    n.imge_txdesc_3_i = function() {
        var e = new eui.Image;
        return this.imge_txdesc_3 = e,
        e.source = "onekeythebest_view_score_imge_txdesc_0_png",
        e.x = 54,
        e.y = 12,
        e
    },
    n.imge_icon_3_i = function() {
        var e = new eui.Image;
        return this.imge_icon_3 = e,
        e.source = "onekeythebest_view_score_imge_icon_0_png",
        e.x = 8,
        e.y = 4,
        e
    },
    n.item_2_i = function() {
        var e = new eui.Group;
        return this.item_2 = e,
        e.x = 25,
        e.y = 204,
        e.elementsContent = [this.imge_item_bg_2_i(), this.btn_2_i(), this.tx_require_2_i(), this.imge_txdesc_2_i(), this.imge_icon_2_i()],
        e
    },
    n.imge_item_bg_2_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_2 = e,
        e.source = "onekeythebest_view_score_imge_item_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_2_i = function() {
        var e = new eui.Group;
        return this.btn_2 = e,
        e.x = 328,
        e.y = 10,
        e.elementsContent = [this._Image2_i(), this.txtLabel_2_i()],
        e
    },
    n._Image2_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 63,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_2_i = function() {
        var e = new eui.Label;
        return this.txtLabel_2 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "兑换",
        e.textColor = 16777215,
        e.x = 15,
        e.y = 9,
        e
    },
    n.tx_require_2_i = function() {
        var e = new eui.Label;
        return this.tx_require_2 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "需60积分",
        e.textColor = 16765477,
        e.x = 247,
        e.y = 19,
        e
    },
    n.imge_txdesc_2_i = function() {
        var e = new eui.Image;
        return this.imge_txdesc_2 = e,
        e.source = "onekeythebest_view_score_imge_txdesc_1_png",
        e.x = 54,
        e.y = 11,
        e
    },
    n.imge_icon_2_i = function() {
        var e = new eui.Image;
        return this.imge_icon_2 = e,
        e.source = "onekeythebest_view_score_imge_icon_1_png",
        e.x = 8,
        e.y = 5,
        e
    },
    n.item_1_i = function() {
        var e = new eui.Group;
        return this.item_1 = e,
        e.x = 25,
        e.y = 140,
        e.elementsContent = [this.imge_item_bg_1_i(), this.btn_1_i(), this.tx_require_1_i(), this.imge_txdesc_1_i(), this.imge_icon_1_i()],
        e
    },
    n.imge_item_bg_1_i = function() {
        var e = new eui.Image;
        return this.imge_item_bg_1 = e,
        e.source = "onekeythebest_view_score_imge_item_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_1_i = function() {
        var e = new eui.Group;
        return this.btn_1 = e,
        e.x = 328,
        e.y = 10,
        e.elementsContent = [this._Image3_i(), this.txtLabel_1_i()],
        e
    },
    n._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 63,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_1_i = function() {
        var e = new eui.Label;
        return this.txtLabel_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "兑换",
        e.textColor = 16777215,
        e.x = 15,
        e.y = 9,
        e
    },
    n.tx_require_1_i = function() {
        var e = new eui.Label;
        return this.tx_require_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "需20积分",
        e.textColor = 16765477,
        e.x = 248,
        e.y = 20,
        e
    },
    n.imge_txdesc_1_i = function() {
        var e = new eui.Image;
        return this.imge_txdesc_1 = e,
        e.source = "onekeythebest_view_score_imge_txdesc_2_png",
        e.x = 54,
        e.y = 11,
        e
    },
    n.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.source = "onekeythebest_view_score_imge_icon_2_png",
        e.x = 10,
        e.y = 6,
        e
    },
    n.item_0_i = function() {
        var e = new eui.Group;
        return this.item_0 = e,
        e.x = 25,
        e.y = 76,
        e.elementsContent = [this.hengtiao_i(), this.btn_0_i(), this.tx_require_0_i(), this.imge_txdesc_0_i(), this.imge_icon_0_i()],
        e
    },
    n.hengtiao_i = function() {
        var e = new eui.Image;
        return this.hengtiao = e,
        e.source = "onekeythebest_view_score_imge_item_bg_0_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.btn_0_i = function() {
        var e = new eui.Group;
        return this.btn_0 = e,
        e.x = 328,
        e.y = 10,
        e.elementsContent = [this._Image4_i(), this.txtLabel_0_i()],
        e
    },
    n._Image4_i = function() {
        var e = new eui.Image;
        return e.height = 35,
        e.source = "common_btn_bg_yellow_2_png",
        e.width = 63,
        e.x = 0,
        e.y = 0,
        e
    },
    n.txtLabel_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "兑换",
        e.textColor = 16777215,
        e.x = 15,
        e.y = 9,
        e
    },
    n.tx_require_0_i = function() {
        var e = new eui.Label;
        return this.tx_require_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "需50积分",
        e.textColor = 16765477,
        e.x = 248,
        e.y = 20,
        e
    },
    n.imge_txdesc_0_i = function() {
        var e = new eui.Image;
        return this.imge_txdesc_0 = e,
        e.source = "onekeythebest_view_score_imge_txdesc_3_png",
        e.x = 54,
        e.y = 11,
        e
    },
    n.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.source = "onekeythebest_view_score_imge_icon_3_png",
        e.x = 9,
        e.y = 3,
        e
    },
    n.tx_title_i = function() {
        var e = new eui.Label;
        return this.tx_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前精灵养成积分：",
        e.textColor = 16777215,
        e.x = 61,
        e.y = 6,
        e
    },
    n.tx_desc_i = function() {
        var e = new eui.Label;
        return this.tx_desc = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "1.精灵养成积分可以通过对精灵天赋、性格、特性、体\n力上限养成成功获得。\n2.精灵养成积分最多累计60点，当积分达到60点后，无\n法再累计，所以记得及时兑换奖励。",
        e.textColor = 8631026,
        e.width = 432,
        e.x = 17,
        e.y = 338,
        e
    },
    n.tx_num_i = function() {
        var e = new eui.Label;
        return this.tx_num = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "20/60",
        e.textColor = 6481510,
        e.x = 62,
        e.y = 30,
        e
    },
    n.imge_icon_i = function() {
        var e = new eui.Image;
        return this.imge_icon = e,
        e.source = "onekeythebest_view_score_imge_icon_png",
        e.x = 15,
        e.y = 9,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/OnekeythebestSkin.exml"] = window.OnekeythebestSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["_rect", "tx_alert", "Bg", "pet", "imge_pet_name_bg", "tx_pet_name", "pet_info", "img_item_bg_1", "img_item_bg_0", "tx_num_1", "tx_num_0", "imge_icon_1", "imge_btn_add_item", "imge_icon_0", "top_item", "basicinfoView", "talentView", "natureView", "studyView", "effectView", "hpView", "scoreView", "basic_info", "imge_leftBtn_bg", "rb_0", "rb_1", "rb_2", "rb_3", "rb_4", "rb_5", "rb_6", "imge_flag_0", "imge_flag_0_2", "leftBtn", "txtLabel_akey_0", "akeyjipin", "btn_close"],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._rect_i(), this.tx_alert_i(), this.Bg_i(), this.pet_info_i(), this.top_item_i(), this.basic_info_i(), this.leftBtn_i(), this.akeyjipin_i(), this.btn_close_i()]
    }
    __extends(t, e);
    var n = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "基础信息",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    i = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "精灵天赋",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    o = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "精灵性格",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    r = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "精灵学习",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    _ = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "精灵特性",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    s = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "精灵体力",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    a = function(e) {
        function t() {
            e.call(this),
            this.skinParts = [],
            this.elementsContent = [this._Rect1_i(), this._Label1_i()],
            this._Image1_i(),
            this.states = [new eui.State("up", [new eui.SetProperty("_Label1", "textColor", 10729208)]), new eui.State("down", [new eui.AddItems("_Image1", "", 2, "_Label1"), new eui.SetProperty("_Label1", "textColor", 16777215)]), new eui.State("disabled", [])]
        }
        __extends(t, e);
        var n = t.prototype;
        return n._Rect1_i = function() {
            var e = new eui.Rect;
            return e.alpha = 0,
            e.percentHeight = 100,
            e.percentWidth = 100,
            e
        },
        n._Image1_i = function() {
            var e = new eui.Image;
            return this._Image1 = e,
            e.height = 40,
            e.source = "onekeythebest_imge_leftbtn_item_bg_png",
            e.width = 143,
            e.x = 0,
            e.y = 0,
            e
        },
        n._Label1_i = function() {
            var e = new eui.Label;
            return this._Label1 = e,
            e.fontFamily = "REEJI",
            e.size = 20,
            e.text = "积分兑换",
            e.x = 30,
            e.y = 10,
            e
        },
        t
    } (eui.Skin),
    u = t.prototype;
    return u._rect_i = function() {
        var e = new eui.Image;
        return this._rect = e,
        e.left = 0,
        e.right = 0,
        e.source = "blurry_base_bgmask_png",
        e
    },
    u.tx_alert_i = function() {
        var e = new eui.Label;
        return this.tx_alert = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 37,
        e.size = 17,
        e.text = "点击任意空白区域关闭当前弹窗",
        e.textColor = 12834813,
        e.visible = !1,
        e.y = 555,
        e
    },
    u.Bg_i = function() {
        var e = new eui.Image;
        return this.Bg = e,
        e.left = 93,
        e.right = 25,
        e.source = "onekeythebest_bg_png",
        e.y = 67,
        e
    },
    u.pet_info_i = function() {
        var e = new eui.Group;
        return this.pet_info = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 640,
        e.horizontalCenter = -188,
        e.name = "gr_petInfo",
        e.verticalCenter = 0,
        e.width = 760,
        e.elementsContent = [this.pet_i(), this.imge_pet_name_bg_i(), this.tx_pet_name_i()],
        e
    },
    u.pet_i = function() {
        var e = new eui.Group;
        return this.pet = e,
        e.anchorOffsetX = 0,
        e.anchorOffsetY = 0,
        e.height = 0,
        e.scaleX = 1,
        e.scaleY = 1,
        e.width = 0,
        e.x = 420,
        e.y = 329,
        e
    },
    u.imge_pet_name_bg_i = function() {
        var e = new eui.Image;
        return this.imge_pet_name_bg = e,
        e.horizontalCenter = 24,
        e.source = "onekeythebest_imge_pet_name_bg_png",
        e.y = 98,
        e
    },
    u.tx_pet_name_i = function() {
        var e = new eui.Label;
        return this.tx_pet_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 24,
        e.size = 20,
        e.text = "精灵名精灵名精灵名",
        e.textAlign = "center",
        e.textColor = 16770655,
        e.y = 106,
        e
    },
    u.top_item_i = function() {
        var e = new eui.Group;
        return this.top_item = e,
        e.cacheAsBitmap = !0,
        e.name = "gr_item",
        e.right = 68,
        e.y = 9,
        e.elementsContent = [this.img_item_bg_1_i(), this.img_item_bg_0_i(), this.tx_num_1_i(), this.tx_num_0_i(), this.imge_icon_1_i(), this.imge_btn_add_item_i(), this.imge_icon_0_i()],
        e
    },
    u.img_item_bg_1_i = function() {
        var e = new eui.Image;
        return this.img_item_bg_1 = e,
        e.source = "onekeythebest_img_item_bg_1_png",
        e.x = 187,
        e.y = 4,
        e
    },
    u.img_item_bg_0_i = function() {
        var e = new eui.Image;
        return this.img_item_bg_0 = e,
        e.source = "onekeythebest_img_item_bg_0_png",
        e.x = 22,
        e.y = 4,
        e
    },
    u.tx_num_1_i = function() {
        var e = new eui.Label;
        return this.tx_num_1 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 225,
        e.y = 8,
        e
    },
    u.tx_num_0_i = function() {
        var e = new eui.Label;
        return this.tx_num_0 = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "99999",
        e.textColor = 12834813,
        e.x = 71,
        e.y = 8,
        e
    },
    u.imge_icon_1_i = function() {
        var e = new eui.Image;
        return this.imge_icon_1 = e,
        e.height = 30,
        e.source = "",
        e.width = 30,
        e.x = 174,
        e.y = 0,
        e
    },
    u.imge_btn_add_item_i = function() {
        var e = new eui.Image;
        return this.imge_btn_add_item = e,
        e.source = "onekeythebest_imge_btn_add_item_png",
        e.x = 302,
        e.y = 4,
        e
    },
    u.imge_icon_0_i = function() {
        var e = new eui.Image;
        return this.imge_icon_0 = e,
        e.height = 45,
        e.source = "",
        e.width = 45,
        e.x = 5,
        e.y = -9,
        e
    },
    u.basic_info_i = function() {
        var e = new eui.Group;
        return this.basic_info = e,
        e.name = "gr_bac_info",
        e.right = 58,
        e.y = 101,
        e.elementsContent = [this.basicinfoView_i(), this.talentView_i(), this.natureView_i(), this.studyView_i(), this.effectView_i(), this.hpView_i(), this.scoreView_i()],
        e
    },
    u.basicinfoView_i = function() {
        var e = new oneKeyTheBest.BasicinfoView;
        return this.basicinfoView = e,
        e.skinName = "OnekeythebestViewBasicinfoSkin",
        e
    },
    u.talentView_i = function() {
        var e = new oneKeyTheBest.TalentView;
        return this.talentView = e,
        e.skinName = "OnekeythebestViewTalentSkin",
        e.visible = !1,
        e
    },
    u.natureView_i = function() {
        var e = new oneKeyTheBest.NatureView;
        return this.natureView = e,
        e.skinName = "OnekeythebestViewNatureSkin",
        e.visible = !1,
        e
    },
    u.studyView_i = function() {
        var e = new oneKeyTheBest.StudyView;
        return this.studyView = e,
        e.skinName = "OnekeythebestViewStudySkin",
        e.visible = !1,
        e
    },
    u.effectView_i = function() {
        var e = new oneKeyTheBest.EffectView;
        return this.effectView = e,
        e.skinName = "OnekeythebestViewEffectSkin",
        e.visible = !1,
        e
    },
    u.hpView_i = function() {
        var e = new oneKeyTheBest.HpView;
        return this.hpView = e,
        e.skinName = "OnekeythebestViewHpSkin",
        e.visible = !1,
        e
    },
    u.scoreView_i = function() {
        var e = new oneKeyTheBest.ScoreView;
        return this.scoreView = e,
        e.skinName = "OnekeythebestViewScoreSkin",
        e.visible = !1,
        e
    },
    u.leftBtn_i = function() {
        var e = new eui.Group;
        return this.leftBtn = e,
        e.anchorOffsetX = 0,
        e.cacheAsBitmap = !0,
        e.name = "gr_leftBtn",
        e.width = 243,
        e.x = 35,
        e.y = 28,
        e.elementsContent = [this.imge_leftBtn_bg_i(), this.rb_0_i(), this.rb_1_i(), this.rb_2_i(), this.rb_3_i(), this.rb_4_i(), this.rb_5_i(), this.rb_6_i(), this.imge_flag_0_i(), this.imge_flag_0_2_i()],
        e
    },
    u.imge_leftBtn_bg_i = function() {
        var e = new eui.Image;
        return this.imge_leftBtn_bg = e,
        e.source = "onekeythebest_imge_leftbtn_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    u.rb_0_i = function() {
        var e = new eui.RadioButton;
        return this.rb_0 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.selected = !0,
        e.value = "0",
        e.width = 143,
        e.x = 28,
        e.y = 85,
        e.skinName = n,
        e
    },
    u.rb_1_i = function() {
        var e = new eui.RadioButton;
        return this.rb_1 = e,
        e.anchorOffsetX = 0,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "1",
        e.width = 143,
        e.x = 28,
        e.y = 148,
        e.skinName = i,
        e
    },
    u.rb_2_i = function() {
        var e = new eui.RadioButton;
        return this.rb_2 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "2",
        e.width = 143,
        e.x = 28,
        e.y = 210,
        e.skinName = o,
        e
    },
    u.rb_3_i = function() {
        var e = new eui.RadioButton;
        return this.rb_3 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "3",
        e.width = 143,
        e.x = 28,
        e.y = 273,
        e.skinName = r,
        e
    },
    u.rb_4_i = function() {
        var e = new eui.RadioButton;
        return this.rb_4 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "4",
        e.width = 143,
        e.x = 28,
        e.y = 336,
        e.skinName = _,
        e
    },
    u.rb_5_i = function() {
        var e = new eui.RadioButton;
        return this.rb_5 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "5",
        e.width = 143,
        e.x = 28,
        e.y = 398,
        e.skinName = s,
        e
    },
    u.rb_6_i = function() {
        var e = new eui.RadioButton;
        return this.rb_6 = e,
        e.groupName = "pve_minor",
        e.height = 40,
        e.value = "6",
        e.width = 143,
        e.x = 28,
        e.y = 461,
        e.skinName = a,
        e
    },
    u.imge_flag_0_i = function() {
        var e = new eui.Image;
        return this.imge_flag_0 = e,
        e.source = "onekeythebest_imge_flag_0_png",
        e.x = 12,
        e.y = 323,
        e
    },
    u.imge_flag_0_2_i = function() {
        var e = new eui.Image;
        return this.imge_flag_0_2 = e,
        e.source = "onekeythebest_imge_flag_0_png",
        e.x = 12,
        e.y = 385,
        e
    },
    u.akeyjipin_i = function() {
        var e = new eui.Group;
        return this.akeyjipin = e,
        e.cacheAsBitmap = !0,
        e.horizontalCenter = -161,
        e.name = "akeyjipin",
        e.y = 476,
        e.elementsContent = [this._Image1_i(), this.txtLabel_akey_0_i()],
        e
    },
    u._Image1_i = function() {
        var e = new eui.Image;
        return e.height = 46,
        e.source = "common_btn_bg_yellow_png",
        e.width = 156,
        e.x = 0,
        e.y = -1,
        e
    },
    u.txtLabel_akey_0_i = function() {
        var e = new eui.Label;
        return this.txtLabel_akey_0 = e,
        e.fontFamily = "REEJI",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "一键超级极品",
        e.textColor = 10181146,
        e.y = 13,
        e
    },
    u.btn_close_i = function() {
        var e = new eui.Image;
        return this.btn_close = e,
        e.right = 28,
        e.source = "title_pop_2022_btnclose_png",
        e.y = 50,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/pop/OnekeythebestPopAlertSkin.exml"] = window.OnekeythebestPopAlertSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imge_alert_bg", "imge_close", "imge_tx_desc_bg", "tx_desc_0", "tx_desc_1", "tx_desc_2", "tx_desc_3", "tx_desc_4", "tx_desc_5", "tx_desc_score", "tx_get_score", "score_tx", "imge_head_bg", "imge_head", "tx_score_title", "tx_score", "alert"],
        this.currentState = "state_1",
        this.height = 499,
        this.width = 1023,
        this.elementsContent = [this.alert_i()],
        this.tx_desc_3_i(),
        this.tx_desc_4_i(),
        this.tx_desc_score_i(),
        this.score_tx_i(),
        this.states = [new eui.State("state_1", [new eui.AddItems("tx_desc_3", "alert", 2, "tx_desc_5"), new eui.AddItems("tx_desc_4", "alert", 2, "tx_desc_5"), new eui.AddItems("tx_desc_score", "score_tx", 0, ""), new eui.AddItems("score_tx", "alert", 2, "imge_head_bg"), new eui.SetProperty("tx_desc_2", "x", 169), new eui.SetProperty("tx_desc_2", "y", 137), new eui.SetProperty("tx_desc_5", "x", 316), new eui.SetProperty("tx_desc_5", "y", 137)]), new eui.State("state_2", [new eui.SetProperty("tx_desc_0", "y", 113), new eui.SetProperty("tx_desc_1", "y", 135), new eui.SetProperty("tx_desc_2", "y", 157), new eui.SetProperty("tx_desc_5", "x", 274), new eui.SetProperty("tx_desc_5", "y", 157), new eui.SetProperty("tx_score_title", "x", 139), new eui.SetProperty("tx_score_title", "y", 235), new eui.SetProperty("tx_score", "x", 300), new eui.SetProperty("tx_score", "y", 235)])]
    }
    __extends(t, e);
    var n = t.prototype;
    return n.alert_i = function() {
        var e = new eui.Group;
        return this.alert = e,
        e.cacheAsBitmap = !0,
        e.x = 240,
        e.y = 99,
        e.elementsContent = [this.imge_alert_bg_i(), this.imge_close_i(), this.imge_tx_desc_bg_i(), this.tx_desc_0_i(), this.tx_desc_1_i(), this.tx_desc_2_i(), this.tx_desc_5_i(), this.imge_head_bg_i(), this.imge_head_i(), this.tx_score_title_i(), this.tx_score_i()],
        e
    },
    n.imge_alert_bg_i = function() {
        var e = new eui.Image;
        return this.imge_alert_bg = e,
        e.source = "onekeythebest_pop_alert_imge_alert_bg_png",
        e.x = 0,
        e.y = 0,
        e
    },
    n.imge_close_i = function() {
        var e = new eui.Image;
        return this.imge_close = e,
        e.source = "onekeythebest_pop_alert_imge_close_png",
        e.x = 439,
        e.y = 1,
        e
    },
    n.imge_tx_desc_bg_i = function() {
        var e = new eui.Image;
        return this.imge_tx_desc_bg = e,
        e.source = "onekeythebest_pop_alert_imge_tx_desc_bg_png",
        e.x = 26,
        e.y = 68,
        e
    },
    n.tx_desc_0_i = function() {
        var e = new eui.Label;
        return this.tx_desc_0 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "此次精灵性格的普通养成使",
        e.textColor = 12111615,
        e.x = 169,
        e.y = 93,
        e
    },
    n.tx_desc_1_i = function() {
        var e = new eui.Label;
        return this.tx_desc_1 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "精灵精灵名字",
        e.textColor = 16765477,
        e.x = 169,
        e.y = 115,
        e
    },
    n.tx_desc_2_i = function() {
        var e = new eui.Label;
        return this.tx_desc_2 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "的性格由",
        e.textColor = 12111615,
        e.x = 169,
        e.y = 137,
        e
    },
    n.tx_desc_3_i = function() {
        var e = new eui.Label;
        return this.tx_desc_3 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "0",
        e.textAlign = "center",
        e.textColor = 4187130,
        e.width = 34,
        e.x = 242,
        e.y = 137,
        e
    },
    n.tx_desc_4_i = function() {
        var e = new eui.Label;
        return this.tx_desc_4 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "变为",
        e.textColor = 12111615,
        e.x = 280,
        e.y = 137,
        e
    },
    n.tx_desc_5_i = function() {
        var e = new eui.Label;
        return this.tx_desc_5 = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "冷静",
        e.textColor = 16514896,
        e.x = 316,
        e.y = 137,
        e
    },
    n.score_tx_i = function() {
        var e = new eui.Group;
        return this.score_tx = e,
        e.x = 169,
        e.y = 158,
        e.elementsContent = [this.tx_get_score_i()],
        e
    },
    n.tx_desc_score_i = function() {
        var e = new eui.Label;
        return this.tx_desc_score = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "同时你还获得了  点精灵养成积分！",
        e.textColor = 12111615,
        e.x = 0,
        e.y = 0,
        e
    },
    n.tx_get_score_i = function() {
        var e = new eui.Label;
        return this.tx_get_score = e,
        e.fontFamily = "REEJI",
        e.size = 17,
        e.text = "1",
        e.textColor = 16514896,
        e.x = 119,
        e.y = 0,
        e
    },
    n.imge_head_bg_i = function() {
        var e = new eui.Image;
        return this.imge_head_bg = e,
        e.source = "onekeythebest_pop_alert_imge_head_bg_png",
        e.x = 42,
        e.y = 92,
        e
    },
    n.imge_head_i = function() {
        var e = new eui.Image;
        return this.imge_head = e,
        e.source = "onekeythebest_pop_alert_imge_head_png",
        e.x = 43,
        e.y = 93,
        e
    },
    n.tx_score_title_i = function() {
        var e = new eui.Label;
        return this.tx_score_title = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "当前精灵养成积分：",
        e.textColor = 8631026,
        e.x = 139,
        e.y = 235,
        e
    },
    n.tx_score_i = function() {
        var e = new eui.Label;
        return this.tx_score = e,
        e.fontFamily = "MFShangHei",
        e.size = 17,
        e.text = "999",
        e.textColor = 16514895,
        e.x = 300,
        e.y = 235,
        e
    },
    t
} (eui.Skin);