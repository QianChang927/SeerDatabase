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
nonoMgrPanel; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.getInstance = function() {
            return e.instance || (e.instance = new e),
            e.instance
        },
        e.EVENT_CHANGE_PANEL = "event_change_panel",
        e.EVENT_CLOSE_MODULE = "event_close_module",
        e.EVENT_BACK_MAIN_PANEL = "event_back_main_panel",
        e.EVENT_CHANGE_FLY_NONO = "event_change_fly_nono",
        e
    } (egret.EventDispatcher);
    t.EventMgr = e,
    __reflect(e.prototype, "nonoMgrPanel.EventMgr")
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
__awaiter = this && this.__awaiter ||
function(t, e, n, i) {
    return new(n || (n = Promise))(function(o, r) {
        function a(t) {
            try {
                h(i.next(t))
            } catch(e) {
                r(e)
            }
        }
        function s(t) {
            try {
                h(i["throw"](t))
            } catch(e) {
                r(e)
            }
        }
        function h(t) {
            t.done ? o(t.value) : new n(function(e) {
                e(t.value)
            }).then(a, s)
        }
        h((i = i.apply(t, e || [])).next())
    })
},
__generator = this && this.__generator ||
function(t, e) {
    function n(t) {
        return function(e) {
            return i([t, e])
        }
    }
    function i(n) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; h;) try {
            if (o = 1, r && (a = r[2 & n[0] ? "return": n[0] ? "throw": "next"]) && !(a = a.call(r, n[1])).done) return a;
            switch (r = 0, a && (n = [0, a.value]), n[0]) {
            case 0:
            case 1:
                a = n;
                break;
            case 4:
                return h.label++,
                {
                    value: n[1],
                    done: !1
                };
            case 5:
                h.label++,
                r = n[1],
                n = [0];
                continue;
            case 7:
                n = h.ops.pop(),
                h.trys.pop();
                continue;
            default:
                if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    h = 0;
                    continue
                }
                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                    h.label = n[1];
                    break
                }
                if (6 === n[0] && h.label < a[1]) {
                    h.label = a[1],
                    a = n;
                    break
                }
                if (a && h.label < a[2]) {
                    h.label = a[2],
                    h.ops.push(n);
                    break
                }
                a[2] && h.ops.pop(),
                h.trys.pop();
                continue
            }
            n = e.call(t, h)
        } catch(i) {
            n = [6, i],
            r = 0
        } finally {
            o = a = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var o, r, a, s, h = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
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
nonoMgrPanel; !
function(t) {
    var e; !
    function(t) {
        t.MainPanel = "mainPanel",
        t.FlyNonoPanel = "flyNonoPanel",
        t.NonoSkinPanel = "nonoSkinPanel"
    } (e = t.PANEL_NAMES || (t.PANEL_NAMES = {}));
    var n = function(n) {
        function i(e) {
            var i = n.call(this, e) || this;
            return i.skinName = t.BgSkin,
            i
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            n.prototype.childrenCreated.call(this),
            this.addEvents(),
            this.data ? 1 == this.data.subPanel ? this.openPanel(e.FlyNonoPanel, !0) : 2 == this.data.subPanel && this.openPanel(e.NonoSkinPanel, !0) : this.openPanel(e.MainPanel)
        },
        i.prototype.addEvents = function() {
            t.EventMgr.getInstance().addEventListener(t.EventMgr.EVENT_CHANGE_PANEL, this.onChangePanel, this),
            t.EventMgr.getInstance().addEventListener(t.EventMgr.EVENT_CLOSE_MODULE, this.onClose, this),
            t.EventMgr.getInstance().addEventListener(t.EventMgr.EVENT_BACK_MAIN_PANEL, this.onBackMainPanel, this)
        },
        i.prototype.removeEvents = function() {
            t.EventMgr.getInstance().removeEventListener(t.EventMgr.EVENT_CHANGE_PANEL, this.onChangePanel, this),
            t.EventMgr.getInstance().removeEventListener(t.EventMgr.EVENT_CLOSE_MODULE, this.onClose, this),
            t.EventMgr.getInstance().removeEventListener(t.EventMgr.EVENT_BACK_MAIN_PANEL, this.onBackMainPanel, this)
        },
        i.prototype.onBackMainPanel = function(t) {
            this.openPanel(e.MainPanel)
        },
        i.prototype.onChangePanel = function(t) {
            var e = t.data;
            this.openPanel(e)
        },
        i.prototype.openPanel = function(t, e) {
            return void 0 === e && (e = !1),
            __awaiter(this, void 0, void 0,
            function() {
                var n;
                return __generator(this,
                function(i) {
                    switch (i.label) {
                    case 0:
                        return this._curtPanel && this._curtPanel.levelPanel(),
                        DisplayUtil.removeForParent(this._curtPanel),
                        this._panelDic || (this._panelDic = new HashMap),
                        n = this._panelDic.getValue(t),
                        n || (n = this.createPanel(t), this._panelDic.add(t, n)),
                        this._curtPanel = n,
                        this.addChild(n),
                        [4, n.updateAsyncData()];
                    case 1:
                        return i.sent(),
                        n.updatePanel(e),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype.createPanel = function(n) {
            var i;
            switch (n) {
            case e.MainPanel:
                i = new t.MainPanel;
                break;
            case e.FlyNonoPanel:
                i = new t.FlyNonoPanel;
                break;
            case e.NonoSkinPanel:
                i = new t.NonoSkinPanel
            }
            return i.verticalCenter = i.horizontalCenter = 0,
            i
        },
        i.prototype.destroy = function() {
            this.removeEvents(),
            this._curtPanel = null;
            for (var t = this._panelDic.getValues(), e = 0; e < t.length; e++) {
                var i = t[e];
                DisplayUtil.removeForParent(i),
                i.destroy()
            }
            this._panelDic.clear(),
            this._panelDic = null,
            n.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.NonoMgrPanel = n,
    __reflect(n.prototype, "nonoMgrPanel.NonoMgrPanel")
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
nonoMgrPanel; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.FlyItemRenderSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.addEvents(),
            this.cacheAsBitmap = !0
        },
        n.prototype.addEvents = function() {
            var e = this;
            ImageButtonUtil.add(this.btnCancel,
            function() {
                EventManager.dispatchEventWith(t.EventMgr.EVENT_CHANGE_FLY_NONO, !1, 0)
            },
            this),
            ImageButtonUtil.add(this.btnSure,
            function() {
                EventManager.dispatchEventWith(t.EventMgr.EVENT_CHANGE_FLY_NONO, !1, e.data)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.dataChanged = function() {
            var t = this.data,
            e = ["一级飞行模式", "二级飞行模式", "三级飞行模式", "四级飞行模式"],
            n = MainManager.actorInfo.actionType;
            this.txtFlyStyle.text = e[t - 1];
            var i = ["可脱离地面\n超音速形式飞行", "可脱离地面\n超音速形式飞行", "可实现无视地形\n飞行(飞船内外除外)", "可实现无视地形\n飞行(飞船内外除外)"];
            this.txtDesc.text = i[t - 1],
            this.icon.source = "nonoMgrPanel_FlyNonoPanel_icon" + t + "_png",
            this.btnCancel.visible = n === t,
            this.btnSure.visible = !this.btnCancel.visible,
            this.imgSelected.visible = this.btnCancel.visible
        },
        n.prototype.destroy = function() {
            this.removeEvents()
        },
        n
    } (eui.ItemRenderer);
    t.FlyItemRender = e,
    __reflect(e.prototype, "nonoMgrPanel.FlyItemRender")
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
nonoMgrPanel; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.NonoSkinItemRenderSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.cacheAsBitmap = !0
        },
        n.prototype.dataChanged = function() {
            var t = this.data;
            this.txtDebugName.visible = !1,
            IS_RELEASE || (this.txtDebugName.visible = !0, this.txtDebugName.text = t.name),
            this.icon.source = null,
            this.icon.source = ClientConfig.getNoNoIcon(t.config.id),
            this.imgLock.visible = null === t.data
        },
        Object.defineProperty(n.prototype, "selected", {
            get: function() {
                return this.selected
            },
            set: function(t) {
                this.imgSelected.visible = t,
                egret.superSetter(n, this, "selected", t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.getCostumeData = function() {
            return this.data
        },
        n
    } (eui.ItemRenderer);
    t.NonoSkinItem = e,
    __reflect(e.prototype, "nonoMgrPanel.NonoSkinItem")
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
nonoMgrPanel; !
function(t) {
    var e = function(e) {
        function n() {
            var n = e.call(this) || this;
            return n.skinName = t.FlyNonoPanelSkin,
            n
        }
        return __extends(n, e),
        n.prototype.childrenCreated = function() {
            this.addEvents()
        },
        n.prototype.addEvents = function() {
            var e = this;
            EventManager.addEventListener(t.EventMgr.EVENT_CHANGE_FLY_NONO, this.onChangeNoNoFly, this),
            ImageButtonUtil.add(this.btnClose,
            function() {
                t.EventMgr.getInstance().dispatchEventWith(e.fromVip ? t.EventMgr.EVENT_CLOSE_MODULE: t.EventMgr.EVENT_BACK_MAIN_PANEL)
            },
            this),
            ImageButtonUtil.add(this.btnHelp,
            function() {
                var t = {};
                t.str = "暂未配置",
                tipsPop.TipsPop.openHelpPop(t)
            },
            this)
        },
        n.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this)
        },
        n.prototype.onChangeNoNoFly = function(e) {
            var n = this,
            i = e.data;
            return MapManager.isInMap ? void(NonoManager.getInstance().checkFlyNonoAllowChangeStateByPosition(MainManager.actorInfo.actionType, i) ? NonoManager.getInstance().changeNonoFly(i).then(function() {
                n.updatePanel(),
                t.EventMgr.getInstance().dispatchEventWith(t.EventMgr.EVENT_CLOSE_MODULE);
                var e = 0 === i ? "NoNo飞行模式已经取消": "成功开启NoNo飞行模式";
                BubblerManager.getInstance().showText(e)
            })["catch"](function() {
                console.warn("更换飞行模式失败")
            }) : Alarm.show("当前角色所处位置不允许改变飞行NoNo状态")) : void Alarm.show("可以在进入地图场景后，开启此功能")
        },
        n.prototype.updateAsyncData = function() {
            return Promise.resolve()
        },
        n.prototype.updatePanel = function(t) {
            this.fromVip = t;
            for (var e = 1; 4 >= e; e++) {
                var n = this["item" + e];
                n.data = e
            }
        },
        n.prototype.levelPanel = function() {},
        n.prototype.destroy = function() {
            this.removeEvents();
            for (var t = 1; 4 >= t; t++) {
                var n = this["item" + t];
                n.destroy()
            }
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.FlyNonoPanel = e,
    __reflect(e.prototype, "nonoMgrPanel.FlyNonoPanel", ["nonoMgrPanel.IPanel"])
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
nonoMgrPanel; !
function(t) {
    var e = function(e) {
        function n() {
            var t = e.call(this) || this;
            return t.skinName = "nonoMgrPanel.MainpanelSkin",
            t
        }
        return __extends(n, e),
        Object.defineProperty(n.prototype, "editState", {
            get: function() {
                return this._editState
            },
            set: function(t) {
                this._editState = t,
                this.btnEdit.source = t ? "nonoMgrPanel_MainPane_btnEdit2_png": "nonoMgrPanel_MainPane_btnEdit_png"
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.childrenCreated = function() {
            this.txtNick.touchEnabled = !1,
            this.txtNick.textColor = 16777215,
            this.addEvents(),
            this.checkPoint({
                data: {
                    id: 4
                }
            });
            var t = MainManager.actorInfo.isVip;
            if (this.groupVip.visible = t, this.groupNotVip.visible = !t, t) {
                this.txtVipLv.text = MainManager.actorInfo.vipLevel + "";
                var e = Math.floor((MainManager.actorInfo.vipEndTime - SystemTimerManager.sysBJDate.getTime() / 1e3) / 60 / 60 / 24) + 1;
                this.txtDay.text = (1 > e ? 1 : e) + ""
            }
            this.btnVip1.visible = this.btnVip2.visible = !GameInfo.isChecking
        },
        n.prototype.addEvents = function() {
            ImageButtonUtil.add(this.btnClose, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnEdit, this.onTouchImgButton, this, !0, !0,
            function() {
                return GameInfo.isSpecialTime ? (BubblerManager.getInstance().showText("功能维护中"), !1) : !0
            }),
            ImageButtonUtil.add(this.btnFly, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnGoHome, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnShow, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnSkin, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnVip, this.onTouchImgButton, this),
            this.txtNick.addEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOutNickInput, this),
            this.txtNick.addEventListener(egret.FocusEvent.FOCUS_IN, this.onFocusInNickInpuut, this),
            EventManager.addEventListener(ToolBarPointConst.CHECK_RED_POINT_CHANGE_AGAIN, this.checkPoint, this),
            EventManager.addEventListener(VipController.EVENT_VIP_INFO_UPDATE, this.updatePanel, this),
            EventManager.addEventListener(SocketEvent.SOCKETRECONNECT, this.updatePanel, this),
            ImageButtonUtil.add(this.btnVip1, this.openVip, this),
            ImageButtonUtil.add(this.btnVip2, this.openVip, this)
        },
        n.prototype.openVip = function() {
            PayManager.canPay() ? VipController.openVip() : Alarm.show("暂未开放，敬请期待！")
        },
        n.prototype.checkPoint = function(t) {
            var e = this;
            4 == t.data.id && KTool.getMultiValue([20021, 30005, 11516],
            function(t) {
                MainManager.actorInfo.isVip ? e.redPoint.visible = !(t[0] && t[1] && t[2]) : e.redPoint.visible = !t[0]
            })
        },
        n.prototype.removeEvents = function() {
            this.txtNick.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.onFocusOutNickInput, this),
            this.txtNick.removeEventListener(egret.FocusEvent.FOCUS_IN, this.onFocusInNickInpuut, this),
            HotRedManager.getInstance().removeRegisterHotEventAll(this)
        },
        n.prototype.onFocusOutNickInput = function(t) {},
        n.prototype.onFocusInNickInpuut = function(t) {},
        n.prototype.UpdateNonoNick = function() {
            this.txtNick.text = NonoManager.getInstance().info.nick
        },
        n.prototype.onTouchImgButton = function(e) {
            var n = this;
            switch (e.currentTarget) {
            case this.btnClose:
                t.EventMgr.getInstance().dispatchEventWith(t.EventMgr.EVENT_CLOSE_MODULE);
                break;
            case this.btnEdit:
                if (this.editState) {
                    var i = this.txtNick.text.trim();
                    if ("" === i) return BubblerManager.getInstance().showText("请输入Nono的昵称"),
                    void this.txtNick.setFocus();
                    if (i.length > 5) return BubblerManager.getInstance().showText("Nono昵称不能超过5个字"),
                    void this.txtNick.setFocus();
                    NonoManager.getInstance().changeNonoNick(i).then(function() {
                        BubblerManager.getInstance().showText("Nono的昵称已经更换成功"),
                        n.UpdateNonoNick(),
                        n.editState = !1
                    })["catch"](function(t) {
                        BubblerManager.getInstance().showText(t),
                        n.UpdateNonoNick(),
                        n.editState = !1
                    })
                } else this.txtNick.setFocus(),
                this.txtNick.text = "",
                this.editState = !0;
                break;
            case this.btnFly:
                if (!this.checkOpenNonoFollow()) return void Alarm.show("需要先召唤nono之后才可以使用");
                t.EventMgr.getInstance().dispatchEventWith(t.EventMgr.EVENT_CHANGE_PANEL, !1, t.PANEL_NAMES.FlyNonoPanel);
                break;
            case this.btnGoHome:
                0 === MainManager.actorInfo.actionType || MainManager.actorInfo.actionType > 0 && MainManager.actorInfo.actionType < 5 && NonoManager.getInstance().checkFlyNonoAllowChangeStateByPosition(MainManager.actorInfo.actionType, 0) ? NonoManager.getInstance().changeNonoFollowState(0).then(function() {
                    BubblerManager.getInstance().showText("nono已经取消跟随!"),
                    n.setBtnHomeState()
                }) : Alarm.show("当前角色所处位置不允许改变飞行NoNo状态");
                break;
            case this.btnShow:
                NonoManager.getInstance().changeNonoFollowState(1).then(function() {
                    BubblerManager.getInstance().showText("nono已经开启跟随!"),
                    n.setBtnHomeState()
                });
                break;
            case this.btnSkin:
                if (!this.checkOpenNonoFollow()) return void Alarm.show("需要先召唤nono之后才可以使用");
                t.EventMgr.getInstance().dispatchEventWith(t.EventMgr.EVENT_CHANGE_PANEL, !1, t.PANEL_NAMES.NonoSkinPanel);
                break;
            case this.btnVip:
                ModuleManager.showModuleByID(config.ModuleConst.VIP, {
                    openFromNoNo: !0
                },
                AppDoStyle.DESTROY)
            }
        },
        n.prototype.checkOpenNonoFollow = function() {
            var t = NonoManager.getInstance().info;
            return t.state[1]
        },
        n.prototype.updateAsyncData = function() {
            return Promise.resolve()
        },
        n.prototype.updatePanel = function() {
            var t = this,
            e = NonoManager.getInstance().info;
            this.UpdateNonoNick(),
            this.setBtnHomeState(e),
            NonoManager.getNoNoDragonBoneDisplay(e, null, !1).then(function(e) {
                t._clearNonoDisplay(),
                t._nonoEgretArmatureDisplay = e,
                t._nonoEgretArmatureDisplay.x = 0,
                t._nonoEgretArmatureDisplay.y = 0,
                t.grpNonoDisply.addChild(t._nonoEgretArmatureDisplay),
                t._nonoEgretArmatureDisplay.animation.play("down", 0)
            })
        },
        n.prototype.levelPanel = function() {
            this.editState = !1
        },
        n.prototype.setBtnHomeState = function(t) {
            t || (t = NonoManager.getInstance().info);
            var e = t.state[1];
            this.btnGoHome.visible = e,
            this.btnShow.visible = !e
        },
        n.prototype._clearNonoDisplay = function() {
            this._nonoEgretArmatureDisplay && (DisplayUtil.removeForParent(this._nonoEgretArmatureDisplay), this._nonoEgretArmatureDisplay.animation.stop(), this._nonoEgretArmatureDisplay.dispose())
        },
        n.prototype.destroy = function() {
            this.removeEvents(),
            this._clearNonoDisplay(),
            e.prototype.destroy.call(this)
        },
        n
    } (BaseModule);
    t.MainPanel = e,
    __reflect(e.prototype, "nonoMgrPanel.MainPanel", ["nonoMgrPanel.IPanel"])
} (nonoMgrPanel || (nonoMgrPanel = {}));
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
nonoMgrPanel; !
function(t) {
    var e; !
    function(t) {
        t[t.All = 0] = "All",
        t[t.Have = 1] = "Have",
        t[t.Not = 2] = "Not"
    } (e || (e = {}));
    var n = function(n) {
        function i() {
            var e = n.call(this) || this;
            return e.skinName = t.NonoSkinPanelSkin,
            e
        }
        return __extends(i, n),
        i.prototype.childrenCreated = function() {
            this.grpDownBox.visible = !1,
            this.rectDownBox.visible = !1,
            this.grpLimitAll.name = "limitType_" + e.All,
            this.grpLimitHave.name = "limitType_" + e.Have,
            this.grpLimitNot.name = "limitType_" + e.Not,
            this.srcNonoSKin.viewport = this.listNonoSkin,
            this.listNonoSkin.itemRenderer = t.NonoSkinItem,
            this.listNonoSkin.dataProvider = new eui.ArrayCollection,
            this.addEvents()
        },
        i.prototype.addEvents = function() {
            this.listNonoSkin.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchNonoSkinItem, this),
            ImageButtonUtil.add(this.btnClose, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnDown, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnDress, this.onTouchImgButton, this),
            ImageButtonUtil.add(this.btnFind, core.gameUtil.throttle(this.onTouchImgButton, this, 500, !0), this),
            ImageButtonUtil.add(this.rectDownBox, this.onTouchImgButton, this, !1, !1),
            ImageButtonUtil.add(this.grpLimitAll, this.onTouchImgButton, this, !1, !1),
            ImageButtonUtil.add(this.grpLimitHave, this.onTouchImgButton, this, !1, !1),
            ImageButtonUtil.add(this.grpLimitNot, this.onTouchImgButton, this, !1, !1)
        },
        i.prototype.removeEvents = function() {
            ImageButtonUtil.removeAll(this),
            this.listNonoSkin.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTouchNonoSkinItem, this)
        },
        i.prototype.updateAsyncData = function() {
            return Promise.resolve()
        },
        i.prototype.updatePanel = function(t) {
            this.fromVip = t,
            this.edTxtSearch.text = "",
            this._selectedLimitStyle = e.All,
            this.updateSelectedBoxState();
            var n = this.getSkinDataArray();
            this.updateNonoSkinList(n);
            for (var i = NonoManager.getInstance().info, o = 0; o < n.length; o++) if (0 === i.changeToPet && 1 === n[o].config.id || n[o].config.id === i.changeToPet) {
                this._curtSelectedSkinData = n[o];
                break
            }
            this.setNonoStyle(this._curtSelectedSkinData),
            this.setBtnState()
        },
        i.prototype.levelPanel = function() {},
        i.prototype.updateNonoSkinList = function(t) {
            this.srcNonoSKin.stopAnimation(),
            this.srcNonoSKin.viewport.scrollV = 0;
            var e = this.listNonoSkin.dataProvider;
            e.removeAll();
            for (var n = 0; n < t.length; n++) e.addItem(t[n])
        },
        i.prototype.getSkinDataArray = function() {
            var t = this,
            n = [],
            i = NonoManager.getInstance().getNonoSkinAllConfig(),
            o = new ItemInfo;
            o.id = 1,
            i.push(o);
            for (var r = 0; r < i.length; r++) {
                var a = i[r],
                s = void 0,
                h = void 0;
                1 === a.id ? (s = "默认NoNo", h = new SingleItemInfo, h.itemID = a.id) : (s = ItemXMLInfo.getName(a.id), h = NonoManager.getInstance().getNonoSkinData(a)),
                n.push({
                    config: a,
                    data: h,
                    name: s
                })
            }
            return n.filter(function(n) {
                var i = !1;
                return t._selectedLimitStyle === e.All ? i = !0 : t._selectedLimitStyle === e.Have ? i = null != n.data: t._selectedLimitStyle === e.Not && (i = null === n.data),
                i
            })
        },
        i.prototype.onTouchNonoSkinItem = function(t) {
            var e = t.item;
            this._curtSelectedSkinData = e,
            this.setBtnState(),
            this.setNonoStyle(this._curtSelectedSkinData)
        },
        i.prototype.updateSelectedBoxState = function() {
            for (var t, e = [this.grpLimitNot, this.grpLimitAll, this.grpLimitHave], n = 0; n < e.length; n++) if (e[n].name.indexOf(this._selectedLimitStyle + "") > -1) {
                t = e[n];
                break
            }
            for (var i, n = 0; n < t.numChildren; n++) {
                var o = t.getChildAt(n);
                if (o instanceof eui.Label) {
                    i = o.text;
                    break
                }
            }
            this.txtSelected.text = i
        },
        i.prototype.setNonoStyle = function(t) {
            var e = this,
            n = new NonoInfo;
            t.config.id > 1 ? n.changeToPet = t.config.id: (n.changeToPet = 0, n.superEnergy = NonoManager.getInstance().info.superEnergy, n.superLevel = NonoManager.getInstance().info.superLevel, n.superNono = NonoManager.getInstance().info.superNono, n.isExtremeNono = NonoManager.getInstance().info.isExtremeNono, n.superStage = NonoManager.getInstance().info.superStage),
            this.txtNick.text = t.name,
            LoadingManager.instance.showloading("资源加载中..."),
            NonoManager.getNoNoDragonBoneDisplay(n, null, !1).then(function(t) {
                e._clearNonoDisplay(),
                e._nonoEgretArmatureDisplay = t,
                e._nonoEgretArmatureDisplay.x = 0,
                e._nonoEgretArmatureDisplay.y = 0,
                e.grpNonoDisply.addChild(e._nonoEgretArmatureDisplay),
                e._nonoEgretArmatureDisplay.animation.play("down", 0),
                LoadingManager.instance.hideloading()
            })["catch"](function() {
                Alarm.show("加载失败:名为" + t.name + "未发现素材"),
                LoadingManager.instance.hideloading()
            })
        },
        i.prototype._clearNonoDisplay = function() {
            this._nonoEgretArmatureDisplay && (DisplayUtil.removeForParent(this._nonoEgretArmatureDisplay), this._nonoEgretArmatureDisplay.animation.stop(), this._nonoEgretArmatureDisplay.dispose())
        },
        i.prototype.setBtnState = function() {
            var t = NonoManager.getInstance().info,
            e = Math.max(1, t.changeToPet);
            this.btnDress.visible = null != this._curtSelectedSkinData.data && e != this._curtSelectedSkinData.config.id,
            this.imgWyy.visible = null === this._curtSelectedSkinData.data,
            this.imgYhd.visible = e === this._curtSelectedSkinData.config.id
        },
        i.prototype.openOrCloseBox = function(t) {
            this.rectDownBox.visible = t,
            this.grpDownBox.visible = t
        },
        i.prototype.onTouchImgButton = function(e) {
            var n = this;
            switch (e.currentTarget) {
            case this.btnClose:
                t.EventMgr.getInstance().dispatchEventWith(this.fromVip ? t.EventMgr.EVENT_CLOSE_MODULE: t.EventMgr.EVENT_BACK_MAIN_PANEL);
                break;
            case this.btnDress:
                if (MainManager.actorInfo.actionType > 0 && MainManager.actorInfo.actionType <= 4) return void Alarm.show("飞行状态下不能对NoNo更换皮肤");
                var i = this._curtSelectedSkinData.config.id > 1 ? this._curtSelectedSkinData.config.id: 0;
                NonoManager.getInstance().changeNonoSkin(i).then(function() {
                    n.setBtnState(),
                    t.EventMgr.getInstance().dispatchEventWith(t.EventMgr.EVENT_CLOSE_MODULE),
                    BubblerManager.getInstance().showText("NoNo皮肤穿戴成功")
                });
                break;
            case this.btnFind:
                var o = this.edTxtSearch.text,
                r = this.getSkinDataArray();
                r = r.filter(function(t) {
                    return SearchUtil.isMatch(o, t.name)
                }),
                this.updateNonoSkinList(r);
                break;
            case this.btnDown:
                this.openOrCloseBox(!0);
                break;
            case this.grpLimitAll:
            case this.grpLimitHave:
            case this.grpLimitNot:
                var a = +e.currentTarget.name.split("_")[1];
                this._selectedLimitStyle = a,
                this.updateSelectedBoxState();
                var r = this.getSkinDataArray();
                this.updateNonoSkinList(r),
                this.openOrCloseBox(!1);
                break;
            case this.rectDownBox:
                this.openOrCloseBox(!1)
            }
        },
        i.prototype.destroy = function() {
            this._clearNonoDisplay(),
            this.removeEvents(),
            n.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    t.NonoSkinPanel = n,
    __reflect(n.prototype, "nonoMgrPanel.NonoSkinPanel", ["nonoMgrPanel.IPanel"])
} (nonoMgrPanel || (nonoMgrPanel = {})),
window.nonoMgrPanel = window.nonoMgrPanel || {};
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
generateEUI.paths["resource/eui_skins/BgSkin.exml"] = window.nonoMgrPanel.BgSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = [],
        this.height = 640,
        this.width = 1136,
        this.elementsContent = [this._Image1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 640,
        t.left = 0,
        t.right = 0,
        t.source = "nonoMgrPanel_MainPane_imgBg2_png",
        t.visible = !0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/FlyItemRenderSkin.exml"] = window.nonoMgrPanel.FlyItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["btnSure", "btnCancel", "imgStyleBg", "imgDescBg", "txtDesc", "txtFlyStyle", "icon", "imgSelected"],
        this.height = 393,
        this.width = 195,
        this.elementsContent = [this.btnSure_i(), this.btnCancel_i(), this.imgStyleBg_i(), this.imgDescBg_i(), this.txtDesc_i(), this.txtFlyStyle_i(), this.icon_i(), this.imgSelected_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.btnSure_i = function() {
        var t = new eui.Group;
        return this.btnSure = t,
        t.x = 12,
        t.y = 343,
        t.elementsContent = [this._Image1_i(), this._Label1_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_btn_bg_style_blue_1_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 3359102,
        t.text = "选择",
        t.textColor = 16777215,
        t.x = 59,
        t.y = 11,
        t
    },
    n.btnCancel_i = function() {
        var t = new eui.Group;
        return this.btnCancel = t,
        t.x = 12,
        t.y = 343,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_btn_bg_style_blue_1_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 26,
        t.stroke = 1,
        t.strokeColor = 3359102,
        t.text = "取消飞行",
        t.textColor = 16777215,
        t.x = 33,
        t.y = 11,
        t
    },
    n.imgStyleBg_i = function() {
        var t = new eui.Image;
        return this.imgStyleBg = t,
        t.height = 46,
        t.source = "nonoMgrPanel_FlyNonoPanel_imgStyleBg_png",
        t.width = 188,
        t.x = 5,
        t.y = 199,
        t
    },
    n.imgDescBg_i = function() {
        var t = new eui.Image;
        return this.imgDescBg = t,
        t.height = 71,
        t.source = "nonoMgrPanel_FlyNonoPanel_imgDescBg_png",
        t.width = 180,
        t.x = 9,
        t.y = 243,
        t
    },
    n.txtDesc_i = function() {
        var t = new eui.Label;
        return this.txtDesc = t,
        t.lineSpacing = 10,
        t.size = 18,
        t.text = "可实现无视地形\n飞行（飞船内外除外）",
        t.textAlign = "center",
        t.textColor = 5177088,
        t.width = 180,
        t.x = 9,
        t.y = 254,
        t
    },
    n.txtFlyStyle_i = function() {
        var t = new eui.Label;
        return this.txtFlyStyle = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 20,
        t.text = "四级飞行模式",
        t.textColor = 4645631,
        t.x = 38,
        t.y = 209,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.height = 165,
        t.source = "nonoMgrPanel_FlyNonoPanel_icon4_png",
        t.width = 165,
        t.x = 15,
        t.y = 15,
        t
    },
    n.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.height = 194,
        t.source = "nonoMgrPanel_FlyNonoPanel_imgSelected_png",
        t.width = 194,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/itemRender/NonoSkinItemRenderSkin.exml"] = window.nonoMgrPanel.NonoSkinItemRenderSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["icon", "txtDebugName", "imgLock", "imgSelected"],
        this.height = 123,
        this.width = 123,
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.txtDebugName_i(), this.imgLock_i(), this.imgSelected_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 114,
        t.source = "nonoMgrPanel_NonoSkinPanel_itemBg_png",
        t.visible = !0,
        t.width = 114,
        t.x = 4,
        t.y = 4,
        t
    },
    n.icon_i = function() {
        var t = new eui.Image;
        return this.icon = t,
        t.horizontalCenter = 0,
        t.verticalCenter = 0,
        t
    },
    n.txtDebugName_i = function() {
        var t = new eui.Label;
        return this.txtDebugName = t,
        t.size = 16,
        t.text = "Label",
        t.textAlign = "center",
        t.width = 114,
        t.x = 4,
        t.y = 97,
        t
    },
    n.imgLock_i = function() {
        var t = new eui.Image;
        return this.imgLock = t,
        t.height = 108,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgLock_png",
        t.visible = !1,
        t.width = 108,
        t.x = 7,
        t.y = 7,
        t
    },
    n.imgSelected_i = function() {
        var t = new eui.Image;
        return this.imgSelected = t,
        t.height = 123,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgSelected_png",
        t.visible = !1,
        t.width = 123,
        t.x = 0,
        t.y = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/FlyNonoPanelSkin.exml"] = window.nonoMgrPanel.FlyNonoPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["bg", "title_asjdasd", "btnClose", "btnHelp", "item1", "item2", "item3", "item4"],
        this.height = 556,
        this.width = 959,
        this.elementsContent = [this.bg_i(), this.title_asjdasd_i(), this.btnClose_i(), this.btnHelp_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.bg_i = function() {
        var t = new eui.Image;
        return this.bg = t,
        t.height = 552,
        t.source = "nonoMgrPanel_MainPane_imgBg_png",
        t.width = 959,
        t.x = 0,
        t.y = 11,
        t
    },
    n.title_asjdasd_i = function() {
        var t = new eui.Image;
        return this.title_asjdasd = t,
        t.height = 48,
        t.source = "nonoMgrPanel_FlyNonoPanel_title_asjdasd_png",
        t.width = 558,
        t.x = 168,
        t.y = 0,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "nonoMgrPanel_MainPane_btnClose_png",
        t.width = 56,
        t.x = 903,
        t.y = 10,
        t
    },
    n.btnHelp_i = function() {
        var t = new eui.Image;
        return this.btnHelp = t,
        t.height = 36,
        t.source = "nonoMgrPanel_FlyNonoPanel_btnHelp_png",
        t.visible = !1,
        t.width = 32,
        t.x = 730,
        t.y = 10,
        t
    },
    n.item1_i = function() {
        var t = new nonoMgrPanel.FlyItemRender;
        return this.item1 = t,
        t.skinName = "nonoMgrPanel.FlyItemRenderSkin",
        t.x = 73,
        t.y = 83,
        t
    },
    n.item2_i = function() {
        var t = new nonoMgrPanel.FlyItemRender;
        return this.item2 = t,
        t.skinName = "nonoMgrPanel.FlyItemRenderSkin",
        t.x = 285,
        t.y = 83,
        t
    },
    n.item3_i = function() {
        var t = new nonoMgrPanel.FlyItemRender;
        return this.item3 = t,
        t.skinName = "nonoMgrPanel.FlyItemRenderSkin",
        t.x = 497,
        t.y = 83,
        t
    },
    n.item4_i = function() {
        var t = new nonoMgrPanel.FlyItemRender;
        return this.item4 = t,
        t.skinName = "nonoMgrPanel.FlyItemRenderSkin",
        t.x = 704,
        t.y = 83,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/MainpanelSkin.exml"] = window.nonoMgrPanel.MainpanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgBg", "imgShowStyleBg", "btnClose", "btnFly", "btnSkin", "btnShow", "btnGoHome", "btnVip", "imgNickBg", "btnEdit", "imgTitle", "grpNonoDisply", "txtNick", "redPoint", "btnVip1", "txtDay", "txtVipLv", "groupVip", "btnVip2", "groupNotVip"],
        this.height = 569,
        this.width = 959,
        this.elementsContent = [this.imgBg_i(), this.imgShowStyleBg_i(), this.btnClose_i(), this.btnFly_i(), this.btnSkin_i(), this.btnShow_i(), this.btnGoHome_i(), this.btnVip_i(), this._Label1_i(), this.imgNickBg_i(), this.btnEdit_i(), this.imgTitle_i(), this.grpNonoDisply_i(), this.txtNick_i(), this.redPoint_i(), this._Group1_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n.imgBg_i = function() {
        var t = new eui.Image;
        return this.imgBg = t,
        t.height = 552,
        t.source = "nonoMgrPanel_MainPane_imgBg_png",
        t.visible = !0,
        t.width = 959,
        t.x = 0,
        t.y = 17,
        t
    },
    n.imgShowStyleBg_i = function() {
        var t = new eui.Image;
        return this.imgShowStyleBg = t,
        t.height = 419,
        t.source = "nonoMgrPanel_MainPane_imgShowStyleBg_png",
        t.width = 495,
        t.x = 232,
        t.y = 120,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "nonoMgrPanel_MainPane_btnClose_png",
        t.width = 56,
        t.x = 903,
        t.y = 16,
        t
    },
    n.btnFly_i = function() {
        var t = new eui.Image;
        return this.btnFly = t,
        t.source = "nonoMgrPanel_MainPane_btnFly_png",
        t.x = 736,
        t.y = 161,
        t
    },
    n.btnSkin_i = function() {
        var t = new eui.Image;
        return this.btnSkin = t,
        t.source = "nonoMgrPanel_MainPane_btnSkin_png",
        t.x = 673,
        t.y = 342,
        t
    },
    n.btnShow_i = function() {
        var t = new eui.Image;
        return this.btnShow = t,
        t.source = "nonoMgrPanel_MainPane_btnShow_png",
        t.visible = !0,
        t.x = 122,
        t.y = 341,
        t
    },
    n.btnGoHome_i = function() {
        var t = new eui.Image;
        return this.btnGoHome = t,
        t.source = "nonoMgrPanel_MainPane_btnGoHome_png",
        t.visible = !0,
        t.x = 130,
        t.y = 340,
        t
    },
    n.btnVip_i = function() {
        var t = new eui.Image;
        return this.btnVip = t,
        t.source = "nonoMgrPanel_MainPane_btnVip_png",
        t.x = 62,
        t.y = 160,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "HuaKangXinZongYi",
        t.size = 22,
        t.text = "NONO的昵称：",
        t.textColor = 15332095,
        t.x = 239,
        t.y = 64,
        t
    },
    n.imgNickBg_i = function() {
        var t = new eui.Image;
        return this.imgNickBg = t,
        t.height = 38,
        t.source = "nonoMgrPanel_MainPane_imgNickBg_png",
        t.width = 210,
        t.x = 396,
        t.y = 60,
        t
    },
    n.btnEdit_i = function() {
        var t = new eui.Image;
        return this.btnEdit = t,
        t.source = "nonoMgrPanel_MainPane_btnEdit_png",
        t.x = 611,
        t.y = 66,
        t
    },
    n.imgTitle_i = function() {
        var t = new eui.Image;
        return this.imgTitle = t,
        t.height = 52,
        t.source = "nonoMgrPanel_MainPane_imgTitle_png",
        t.width = 596,
        t.x = 158,
        t.y = 0,
        t
    },
    n.grpNonoDisply_i = function() {
        var t = new eui.Group;
        return this.grpNonoDisply = t,
        t.height = 0,
        t.width = 0,
        t.x = 480,
        t.y = 309,
        t
    },
    n.txtNick_i = function() {
        var t = new eui.EditableText;
        return this.txtNick = t,
        t.height = 18,
        t.size = 18,
        t.text = "111",
        t.width = 144,
        t.x = 429,
        t.y = 70,
        t
    },
    n.redPoint_i = function() {
        var t = new eui.Image;
        return this.redPoint = t,
        t.source = "aan_act_button_redPoint_png",
        t.x = 177,
        t.y = 170,
        t
    },
    n._Group1_i = function() {
        var t = new eui.Group;
        return t.horizontalCenter = 0,
        t.y = 447,
        t.elementsContent = [this._Image1_i(), this.groupVip_i(), this.groupNotVip_i()],
        t
    },
    n._Image1_i = function() {
        var t = new eui.Image;
        return t.source = "nono_vip_imgbg_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.groupVip_i = function() {
        var t = new eui.Group;
        return this.groupVip = t,
        t.visible = !0,
        t.x = 22,
        t.y = 9,
        t.elementsContent = [this.btnVip1_i(), this._Image3_i(), this.txtDay_i(), this._Label3_i(), this.txtVipLv_i()],
        t
    },
    n.btnVip1_i = function() {
        var t = new eui.Group;
        return this.btnVip1 = t,
        t.x = 178,
        t.y = 42,
        t.elementsContent = [this._Image2_i(), this._Label2_i()],
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.source = "nono_vip_imgbtn_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "续费VIP",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.source = "nono_vip_img1_png",
        t.x = 81,
        t.y = 5,
        t
    },
    n.txtDay_i = function() {
        var t = new eui.Label;
        return this.txtDay = t,
        t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "365",
        t.textColor = 5752317,
        t.x = 129.625,
        t.y = 47.875,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.size = 20,
        t.text = "VIP剩余天数:",
        t.textColor = 15068927,
        t.x = 0,
        t.y = 47,
        t
    },
    n.txtVipLv_i = function() {
        var t = new eui.Label;
        return this.txtVipLv = t,
        t.fontFamily = "REEJI",
        t.size = 40,
        t.text = "5",
        t.textColor = 16772949,
        t.x = 152,
        t.y = 0,
        t
    },
    n.groupNotVip_i = function() {
        var t = new eui.Group;
        return this.groupNotVip = t,
        t.visible = !1,
        t.x = 87,
        t.y = 10,
        t.elementsContent = [this._Image4_i(), this.btnVip2_i()],
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.source = "not_vip_png",
        t.x = 0,
        t.y = 0,
        t
    },
    n.btnVip2_i = function() {
        var t = new eui.Group;
        return this.btnVip2 = t,
        t.x = 23,
        t.y = 36,
        t.elementsContent = [this._Image5_i(), this._Label4_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.source = "nono_vip_imgbtn_png",
        t.visible = !0,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label4_i = function() {
        var t = new eui.Label;
        return t.fontFamily = "MFShangHei",
        t.horizontalCenter = 0,
        t.size = 18,
        t.text = "开通VIP",
        t.textColor = 16777215,
        t.verticalCenter = 0,
        t
    },
    e
} (eui.Skin),
generateEUI.paths["resource/eui_skins/panel/NonoSkinPanelSkin.exml"] = window.nonoMgrPanel.NonoSkinPanelSkin = function(t) {
    function e() {
        t.call(this),
        this.skinParts = ["imgNonoGengyijian", "imgNickBg", "txtNick", "imgmasdkn", "imgSasfdasdasda", "btnClose", "txtLabel", "btnDress", "imgWyy", "imgYhd", "btnDown", "txtSelected", "btnFind", "imgSearchBg", "edTxtSearch", "search", "listNonoSkin", "srcNonoSKin", "rectDownBox", "grpLimitHave", "grpLimitNot", "grpLimitAll", "grpDownBox", "grpNonoDisply"],
        this.height = 553,
        this.width = 959,
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this.imgNonoGengyijian_i(), this.imgNickBg_i(), this.txtNick_i(), this.imgmasdkn_i(), this.imgSasfdasdasda_i(), this.btnClose_i(), this.btnDress_i(), this.imgWyy_i(), this.imgYhd_i(), this.btnDown_i(), this._Image4_i(), this.txtSelected_i(), this.search_i(), this.srcNonoSKin_i(), this.rectDownBox_i(), this.grpDownBox_i(), this.grpNonoDisply_i()]
    }
    __extends(e, t);
    var n = e.prototype;
    return n._Image1_i = function() {
        var t = new eui.Image;
        return t.height = 552,
        t.source = "nonoMgrPanel_MainPane_imgBg_png",
        t.width = 959,
        t.x = 0,
        t.y = 9,
        t
    },
    n._Image2_i = function() {
        var t = new eui.Image;
        return t.height = 419,
        t.source = "nonoMgrPanel_MainPane_imgShowStyleBg_png",
        t.width = 495,
        t.x = 13,
        t.y = 81,
        t
    },
    n.imgNonoGengyijian_i = function() {
        var t = new eui.Image;
        return this.imgNonoGengyijian = t,
        t.height = 48,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgNonoGengyijian_png",
        t.width = 414,
        t.x = 37,
        t.y = 19,
        t
    },
    n.imgNickBg_i = function() {
        var t = new eui.Image;
        return this.imgNickBg = t,
        t.height = 38,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgNickBg_png",
        t.width = 210,
        t.x = 151,
        t.y = 80,
        t
    },
    n.txtNick_i = function() {
        var t = new eui.Label;
        return this.txtNick = t,
        t.size = 16,
        t.text = "名字名字名字名字",
        t.textAlign = "center",
        t.textColor = 16777215,
        t.width = 160,
        t.x = 177,
        t.y = 89,
        t
    },
    n.imgmasdkn_i = function() {
        var t = new eui.Image;
        return this.imgmasdkn = t,
        t.height = 410,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgmasdkn_png",
        t.visible = !0,
        t.width = 443,
        t.x = 476,
        t.y = 111,
        t
    },
    n.imgSasfdasdasda_i = function() {
        var t = new eui.Image;
        return this.imgSasfdasdasda = t,
        t.height = 50,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgSasfdasdasda_png",
        t.width = 443,
        t.x = 476,
        t.y = 61,
        t
    },
    n.btnClose_i = function() {
        var t = new eui.Image;
        return this.btnClose = t,
        t.height = 56,
        t.source = "nonoMgrPanel_MainPane_btnClose_png",
        t.width = 56,
        t.x = 903,
        t.y = 8,
        t
    },
    n.btnDress_i = function() {
        var t = new eui.Group;
        return this.btnDress = t,
        t.visible = !0,
        t.x = 168,
        t.y = 493,
        t.elementsContent = [this._Image3_i(), this.txtLabel_i()],
        t
    },
    n._Image3_i = function() {
        var t = new eui.Image;
        return t.height = 50,
        t.source = "common_btn_bg_style_blue_1_png",
        t.width = 174,
        t.x = 0,
        t.y = 0,
        t
    },
    n.txtLabel_i = function() {
        var t = new eui.Label;
        return this.txtLabel = t,
        t.fontFamily = "HuaKangXinZongYi",
        t.size = 31.2026027561707,
        t.stroke = 1,
        t.strokeColor = 3359102,
        t.text = "穿戴",
        t.textColor = 16777215,
        t.x = 59,
        t.y = 11,
        t
    },
    n.imgWyy_i = function() {
        var t = new eui.Image;
        return this.imgWyy = t,
        t.height = 52,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgWyy_png",
        t.visible = !0,
        t.width = 144,
        t.x = 184,
        t.y = 493,
        t
    },
    n.imgYhd_i = function() {
        var t = new eui.Image;
        return this.imgYhd = t,
        t.height = 52,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgYhd_png",
        t.visible = !0,
        t.width = 144,
        t.x = 184,
        t.y = 493,
        t
    },
    n.btnDown_i = function() {
        var t = new eui.Image;
        return this.btnDown = t,
        t.height = 38,
        t.source = "nonoMgrPanel_NonoSkinPanel_btnDown_png",
        t.width = 38,
        t.x = 619,
        t.y = 68,
        t
    },
    n._Image4_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgBoxbg_png",
        t.width = 134,
        t.x = 487,
        t.y = 69,
        t
    },
    n.txtSelected_i = function() {
        var t = new eui.Label;
        return this.txtSelected = t,
        t.size = 16,
        t.text = "筛选下拉菜单",
        t.textAlign = "center",
        t.textColor = 5416663,
        t.width = 120,
        t.x = 495,
        t.y = 78,
        t
    },
    n.search_i = function() {
        var t = new eui.Group;
        return this.search = t,
        t.x = 670,
        t.y = 67,
        t.elementsContent = [this.btnFind_i(), this.imgSearchBg_i(), this.edTxtSearch_i()],
        t
    },
    n.btnFind_i = function() {
        var t = new eui.Image;
        return this.btnFind = t,
        t.height = 38,
        t.source = "nonoMgrPanel_NonoSkinPanel_btnFind_png",
        t.width = 38,
        t.x = 204,
        t.y = 0,
        t
    },
    n.imgSearchBg_i = function() {
        var t = new eui.Image;
        return this.imgSearchBg = t,
        t.height = 37,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgSearchBg_png",
        t.width = 206,
        t.x = 0,
        t.y = 2,
        t
    },
    n.edTxtSearch_i = function() {
        var t = new eui.EditableText;
        return this.edTxtSearch = t,
        t.height = 20,
        t.prompt = "输入NONO皮肤名字",
        t.size = 20,
        t.width = 180,
        t.x = 11,
        t.y = 10,
        t
    },
    n.srcNonoSKin_i = function() {
        var t = new eui.Scroller;
        return this.srcNonoSKin = t,
        t.height = 393,
        t.visible = !0,
        t.width = 385,
        t.x = 494,
        t.y = 116,
        t.viewport = this.listNonoSkin_i(),
        t
    },
    n.listNonoSkin_i = function() {
        var t = new eui.List;
        return this.listNonoSkin = t,
        t.itemRendererSkinName = nonoMgrPanel.NonoSkinItemRenderSkin,
        t.layout = this._TileLayout1_i(),
        t.dataProvider = this._ArrayCollection1_i(),
        t
    },
    n._TileLayout1_i = function() {
        var t = new eui.TileLayout;
        return t.horizontalGap = 8,
        t.verticalGap = 12,
        t
    },
    n._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection;
        return t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i(), this._Object5_i(), this._Object6_i(), this._Object7_i(), this._Object8_i(), this._Object9_i(), this._Object10_i(), this._Object11_i(), this._Object12_i(), this._Object13_i()],
        t
    },
    n._Object1_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object2_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object3_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object4_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object5_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object6_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object7_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object8_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object9_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object10_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object11_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object12_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n._Object13_i = function() {
        var t = {};
        return t.test = "",
        t
    },
    n.rectDownBox_i = function() {
        var t = new eui.Rect;
        return this.rectDownBox = t,
        t.bottom = 0,
        t.fillAlpha = 0,
        t.left = 0,
        t.right = 0,
        t.top = 0,
        t.visible = !1,
        t
    },
    n.grpDownBox_i = function() {
        var t = new eui.Group;
        return this.grpDownBox = t,
        t.visible = !0,
        t.x = 487,
        t.y = 104,
        t.elementsContent = [this.grpLimitHave_i(), this.grpLimitNot_i(), this.grpLimitAll_i()],
        t
    },
    n.grpLimitHave_i = function() {
        var t = new eui.Group;
        return this.grpLimitHave = t,
        t.x = 0,
        t.y = 0,
        t.elementsContent = [this._Image5_i(), this._Label1_i()],
        t
    },
    n._Image5_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgBoxbg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label1_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "已拥有",
        t.textColor = 5416663,
        t.x = 40,
        t.y = 8,
        t
    },
    n.grpLimitNot_i = function() {
        var t = new eui.Group;
        return this.grpLimitNot = t,
        t.x = 0,
        t.y = 34,
        t.elementsContent = [this._Image6_i(), this._Label2_i()],
        t
    },
    n._Image6_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgBoxbg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label2_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "未拥有",
        t.textColor = 5416663,
        t.x = 40,
        t.y = 9,
        t
    },
    n.grpLimitAll_i = function() {
        var t = new eui.Group;
        return this.grpLimitAll = t,
        t.x = 0,
        t.y = 68,
        t.elementsContent = [this._Image7_i(), this._Label3_i()],
        t
    },
    n._Image7_i = function() {
        var t = new eui.Image;
        return t.height = 37,
        t.source = "nonoMgrPanel_NonoSkinPanel_imgBoxbg_png",
        t.width = 134,
        t.x = 0,
        t.y = 0,
        t
    },
    n._Label3_i = function() {
        var t = new eui.Label;
        return t.size = 16,
        t.text = "全部",
        t.textAlign = "center",
        t.textColor = 5416663,
        t.width = 48,
        t.x = 40,
        t.y = 9,
        t
    },
    n.grpNonoDisply_i = function() {
        var t = new eui.Group;
        return this.grpNonoDisply = t,
        t.height = 0,
        t.width = 0,
        t.x = 258,
        t.y = 269,
        t
    },
    e
} (eui.Skin);