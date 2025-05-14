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
    return new(i || (i = Promise))(function(a, r) {
        function o(e) {
            try {
                _(n.next(e))
            } catch(t) {
                r(t)
            }
        }
        function s(e) {
            try {
                _(n["throw"](e))
            } catch(t) {
                r(t)
            }
        }
        function _(e) {
            e.done ? a(e.value) : new i(function(t) {
                t(e.value)
            }).then(o, s)
        }
        _((n = n.apply(e, t || [])).next())
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
        if (a) throw new TypeError("Generator is already executing.");
        for (; _;) try {
            if (a = 1, r && (o = r[2 & i[0] ? "return": i[0] ? "throw": "next"]) && !(o = o.call(r, i[1])).done) return o;
            switch (r = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4:
                return _.label++,
                {
                    value: i[1],
                    done: !1
                };
            case 5:
                _.label++,
                r = i[1],
                i = [0];
                continue;
            case 7:
                i = _.ops.pop(),
                _.trys.pop();
                continue;
            default:
                if (o = _.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    _ = 0;
                    continue
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    _.label = i[1];
                    break
                }
                if (6 === i[0] && _.label < o[1]) {
                    _.label = o[1],
                    o = i;
                    break
                }
                if (o && _.label < o[2]) {
                    _.label = o[2],
                    _.ops.push(i);
                    break
                }
                o[2] && _.ops.pop(),
                _.trys.pop();
                continue
            }
            i = t.call(e, _)
        } catch(n) {
            i = [6, n],
            r = 0
        } finally {
            a = o = 0
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, r, o, s, _ = {
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
headFrame; !
function(e) {
    var t = function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.arrayColletion = new eui.ArrayCollection([]),
            e._headClickTabList = [],
            e._headFrameClickTabList = [],
            e.skinName = "HeadFramePopSkin",
            e
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            StatLogger.log("20210122版本系统功能", "头像系统", "打开【更换头像】面板"),
            this.list_item.dataProvider = new eui.ArrayCollection([]),
            this._createMenu(),
            this._addEvents()
        },
        i.prototype._createMenu = function() {
            var t = RES.getRes("head_frame_tab_json"),
            i = {};
            i.secondRender = e.ChildNode,
            i.firstRender = e.ParentNode,
            i.animationTime = 300,
            i.grp = 0,
            i.secondOffset = 4,
            i.dir = common.ui.treemenu.TreeScrollerContainer.DIR_TO_V,
            GameInfo.isChecking && (t.data[0].childData.length > 2 && (t.data[0].childData.splice(2, 2), t.data[0].childData.splice(0, 1)), t.data[1].childData.length > 2 && (t.data[1].childData.splice(2, 2), t.data[1].childData.splice(0, 1))),
            i.data = t.data,
            this._menuConfig = t.data;
            var n = new common.ui.treemenu.TreeScrollerContainer(172, 360, i);
            this._menuTree = n,
            n.y = 50,
            this.addChild(n),
            n.Open(0, 0),
            this._showOpen(0, 0)
        },
        i.prototype._addEvents = function() {
            this._menuTree.addEventListener(common.ui.treemenu.TreeScrollerContainer.EVENT_SELECT_ITEM, this.changeMenu, this),
            this.list_item.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onSelectedItem, this),
            ImageButtonUtil.add(this.img_btnClose, this._onTouchImageButtonHanlder, this),
            ImageButtonUtil.add(this.imgBtn_go, this._onTouchImageButtonHanlder, this),
            ImageButtonUtil.add(this.imgBtn_change, this._onTouchImageButtonHanlder, this)
        },
        i.prototype._removeEvents = function() {
            this.list_item.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onSelectedItem, this),
            this._menuTree.removeEventListener(common.ui.treemenu.TreeScrollerContainer.EVENT_SELECT_ITEM, this.changeMenu, this),
            ImageButtonUtil.removeAll(this)
        },
        i.prototype.changeMenu = function(e) {
            var t = e.data[0],
            i = e.data[1];
            this.scroller_panel.stopAnimation(),
            this.scroller_panel.viewport.scrollV = 0,
            this._showOpen(t, i)
        },
        i.prototype._showOpen = function(e, t) {
            var i = this,
            n = this._menuConfig[e].firstData.type,
            a = this._menuConfig[e].childData[t].tab;
            this.arrayColletion.removeAll(),
            this.arrayColletion = this.list_item.dataProvider,
            this._currentType !== n && (this._currentType = n, this._onChangeListStyle()),
            this._currentTab = a;
            var r = config.Profilephoto.getItems();
            r = r.filter(function(e) {
                if (1 === e.hide) return ! 1;
                var t = e.type === i._currentType,
                n = 0 === i._currentTab || i._currentTab === e.tab,
                a = t && n;
                if (a && e.checkown) {
                    var r = 1 === i._currentType ? core.AvatarDataMgr.GetInstance().GetHeadLockStateById(e.id) : core.AvatarDataMgr.GetInstance().GetHeadFrameLockStateById(e.id);
                    a = r
                }
                return a
            }),
            r.sort(function(e, t) {
                var n, a;
                return n = 1 === i._currentType ? core.AvatarDataMgr.GetInstance().GetHeadLockStateById(e.id) : core.AvatarDataMgr.GetInstance().GetHeadFrameLockStateById(e.id),
                a = 1 === i._currentType ? core.AvatarDataMgr.GetInstance().GetHeadLockStateById(t.id) : core.AvatarDataMgr.GetInstance().GetHeadFrameLockStateById(t.id),
                n && !a ? -1 : a && !n ? 1 : t.id - e.id
            }),
            this.arrayColletion.replaceAll(r);
            var o, s;
            if (s = 1 == this._currentType ? MainManager.actorInfo.head_id: 0 == MainManager.actorInfo.head_frame_id ? 0 : config.Profilephoto.getItem(MainManager.actorInfo.head_frame_id).icon, 1 == this._currentType) for (var _ = 0,
            h = r; _ < h.length; _++) {
                var c = h[_];
                if (c.id == s) {
                    o = r.indexOf(c);
                    break
                }
            } else for (var u = 0,
            l = r; u < l.length; u++) {
                var c = l[u];
                if (c.icon == s) {
                    o = r.indexOf(c);
                    break
                }
            }
            if (this.list_item.selectedIndex = o, this._currentData = r[o], this._onShowInfo(this._currentData), 0 == MainManager.actorInfo.head_frame_id) this.headFrame.source = ClientConfig.GetAvatarFrame(0);
            else {
                var m = config.Profilephoto.getItem(MainManager.actorInfo.head_frame_id);
                this.headFrame.source = ClientConfig.GetAvatarFrame(m.icon)
            }
            1 === this._currentType && this._headClickTabList.indexOf(this._currentTab) < 0 && this._headClickTabList.push(this._currentTab),
            2 === this._currentType && this._headFrameClickTabList.indexOf(this._currentTab) < 0 && this._headFrameClickTabList.push(this._currentTab),
            0 === r.length ? (this.scroller_panel.visible = !1, this.noItem.visible = !0, this.groupRight.visible = !1, this.imgMaskMiddle.width = 560) : (this.scroller_panel.visible = !0, this.noItem.visible = !1, this.groupRight.visible = !0, this.imgMaskMiddle.width = 337)
        },
        i.prototype._onChangeListStyle = function() {
            1 === this._currentType ? this.list_item.itemRenderer = e.HeadItemRender: this.list_item.itemRenderer = e.HeadFrameItemRender
        },
        i.prototype._onTouchImageButtonHanlder = function(e) {
            switch (e.currentTarget) {
            case this.img_btnClose:
                this.onClose();
                break;
            case this.imgBtn_go:
                return;
            case this.imgBtn_change:
                this.onChange()
            }
        },
        i.prototype._goto = function() {
            var e = this._currentData["goto"];
            if (null != e && "" != e) {
                if (e.indexOf("id") > -1) {
                    e = e.replace(/\'/g, '"');
                    var t = JSON.parse(e);
                    36 === t.id && StatLogger.log("20210122版本系统功能", "头像系统", "通过【前往获得】打开SPT兑换商城界面"),
                    ModuleManager.showModuleByID(t.id, {
                        openPanel: t.type + "_" + t.args
                    })
                } else core.gameUtil.jumpTo(this._currentData["goto"]);
                this.onClose()
            }
        },
        i.prototype.onChange = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var e, t, i, n, a;
                return __generator(this,
                function(r) {
                    switch (r.label) {
                    case 0:
                        for (e = this.list_item.dataProvider, i = 0; i < e.length; i++) if (n = e.getItemAt(i), 1 == this._currentData.type) {
                            if (a = MainManager.actorInfo.head_id, n.id === a) {
                                t = n;
                                break
                            }
                        } else if (a = MainManager.actorInfo.head_frame_id, 0 == a) {
                            if (n.icon == a) {
                                t = n;
                                break
                            }
                        } else if (n.id == a) {
                            t = n;
                            break
                        }
                        return 1 !== this._currentData.type ? [3, 2] : [4, core.AvatarDataMgr.GetInstance().C2S_Change_Head(this._currentData.id)];
                    case 1:
                        return r.sent(),
                        BubblerManager.getInstance().showText("更换头像成功"),
                        [3, 4];
                    case 2:
                        return [4, core.AvatarDataMgr.GetInstance().C2S_Change_HeadFrame(this._currentData.id)];
                    case 3:
                        r.sent(),
                        BubblerManager.getInstance().showText("更换头像框成功"),
                        r.label = 4;
                    case 4:
                        return e.itemUpdated(t),
                        e.itemUpdated(this._currentData),
                        this._onShowInfo(this._currentData),
                        [2, Promise.resolve()]
                    }
                })
            })
        },
        i.prototype._onSelectedItem = function(e) {
            this._currentData = e.item,
            this._onShowInfo(e.item)
        },
        i.prototype._onShowInfo = function(e) {
            if (this.grp_right.visible = null !== e, !e) {
                var t = config.Profilephoto.getItem(MainManager.actorInfo.head_id);
                return this.icon.source = ClientConfig.GetAvatarHead(t.icon),
                this.imgBtn_go.visible = !1,
                this.imgBtn_change.visible = !1,
                void(this.FrameLimit.visible = !1)
            }
            if (1 === e.type) if (this.icon.source = ClientConfig.GetAvatarHead(e.icon), 0 == MainManager.actorInfo.head_frame_id) this.headFrame.source = ClientConfig.GetAvatarFrame(0);
            else {
                var i = config.Profilephoto.getItem(MainManager.actorInfo.head_frame_id);
                this.headFrame.source = ClientConfig.GetAvatarFrame(i.icon)
            } else this.headFrame.source = ClientConfig.GetAvatarFrame(e.icon);
            this.txtName.text = e.name;
            var n = 1 === this._currentType ? core.AvatarDataMgr.GetInstance().GetHeadLockStateById(e.id) : core.AvatarDataMgr.GetInstance().GetHeadFrameLockStateById(e.id);
            if (this.imgBtn_go.visible = n === !1, this.FrameLimit.visible = !1, this.imgBtn_change.visible = !1, n) {
                this.txtDes.visible = !0,
                this.FrameLimit.visible = !0,
                this.txtDes.text = e.desc;
                var a = 1 === e.type ? core.AvatarDataMgr.GetInstance().GetHeadDataById(e.id) : core.AvatarDataMgr.GetInstance().GetHeadFrameDataById(e.id);
                if (0 === a.obtm) this.headFrameLeftTime.x = 28,
                this.headFrameLeftTime.text = "永久使用";
                else {
                    this.headFrameLeftTime.x = 0;
                    var r = Math.floor(SystemTimerManager.sysBJDate.getTime() / 1e3),
                    o = a.obtm,
                    s = Math.ceil((o - r) / 86400);
                    this.headFrameLeftTime.textFlow = [{
                        text: "剩余时间："
                    },
                    {
                        text: Math.max(s, 1) + "天",
                        style: {
                            textColor: 4187130
                        }
                    }],
                    this.headFrameLeftTime.text = "剩余时间：" + Math.max(s, 1) + "天"
                }
                var _ = void 0;
                if (1 === e.type) _ = e.id !== MainManager.actorInfo.head_id;
                else if (0 == MainManager.actorInfo.head_frame_id) _ = 0 !== e.icon;
                else {
                    var h = config.Profilephoto.getItem(MainManager.actorInfo.head_frame_id);
                    _ = e.icon !== h.icon
                }
                this.imgBtn_change.visible = !0,
                _ ? (this.changeName.text = "更换", DisplayUtil.setEnabled(this.imgBtn_change, !0, !1)) : (this.changeName.text = "已更换", DisplayUtil.setEnabled(this.imgBtn_change, !1, !0)),
                core.AvatarDataMgr.GetInstance().GetIsNewFlag(e.id) && (core.AvatarDataMgr.GetInstance().onRemoveCacheNewAvatar(e.type, e.tab, e.id), this.arrayColletion.itemUpdated(this._currentData), EventManager.dispatchEventWith("RedPointEvent"))
            } else this.txtDes.text = e.desc,
            this.imgBtn_go.visible = !(1 === e.unavailable) && "" != e["goto"],
            this.changeName.text = "已更换",
            DisplayUtil.setEnabled(this.imgBtn_change, !1, !0);
            this.imgBtn_go.visible = !1
        },
        i.prototype.destroy = function() {
            this._removeEvents(),
            t.prototype.destroy.call(this)
        },
        i
    } (BaseModule);
    e.HeadFrame = t,
    __reflect(t.prototype, "headFrame.HeadFrame")
} (headFrame || (headFrame = {}));
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
headFrame; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = "HeadFrameItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(t.prototype, "selected", {
            get: function() {
                return egret.superGetter(t, this, "selected")
            },
            set: function(e) {
                this.selectFlag.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ClientConfig.GetAvatarFrame(e.icon);
            var t = core.AvatarDataMgr.GetInstance().GetIsNewFlag(e.id);
            this.imgNew.visible = t,
            14 === e.id ? this.img_useFlag.visible = 0 === MainManager.actorInfo.head_frame_id: this.img_useFlag.visible = MainManager.actorInfo.head_frame_id === e.id,
            this.img_lockFlag.visible = !core.AvatarDataMgr.GetInstance().GetHeadFrameLockStateById(e.id)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.HeadFrameItemRender = t,
    __reflect(t.prototype, "headFrame.HeadFrameItemRender")
} (headFrame || (headFrame = {}));
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
headFrame; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.destroy, t),
            t.skinName = "HeadItemSkin",
            t
        }
        return __extends(t, e),
        t.prototype.childrenCreated = function() {
            e.prototype.childrenCreated.call(this)
        },
        Object.defineProperty(t.prototype, "selected", {
            get: function() {
                return egret.superGetter(t, this, "selected")
            },
            set: function(e) {
                this.selectFlag.visible = e,
                egret.superSetter(t, this, "selected", e)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.dataChanged = function() {
            var e = this.data;
            this.icon.source = ClientConfig.GetAvatarHead(e.icon);
            var t = core.AvatarDataMgr.GetInstance().GetIsNewFlag(e.id);
            this.imgNew.visible = t,
            this.img_useFlag.visible = MainManager.actorInfo.head_id === e.id,
            this.img_lockFlag.visible = null === core.AvatarDataMgr.GetInstance().GetHeadDataById(e.id)
        },
        t.prototype.destroy = function() {
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.destroy, this),
            this.removeChildren()
        },
        t
    } (eui.ItemRenderer);
    e.HeadItemRender = t,
    __reflect(t.prototype, "headFrame.HeadItemRender")
} (headFrame || (headFrame = {}));
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
headFrame; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.ChildNodeSkin,
            i.addEventListener(egret.Event.COMPLETE, i._updateView, i),
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            if (t.prototype.childrenCreated.call(this), this._customData) {
                var e = this.selected ? "down": "up";
                this.currentState = e,
                this.txt_name.text = this._customData.name
            }
        },
        i.prototype._updateView = function() {
            var e = this.selected ? "down": "up";
            this.currentState = e,
            this.txt_name.text = this._customData.name
        },
        i.prototype._onChangeSelected = function() {
            t.prototype._onChangeSelected.call(this);
            var e = this.selected ? "down": "up";
            this.currentState = e,
            this.txt_name.text = this._customData.name
        },
        i
    } (common.ui.treemenu.SecondComponent);
    e.ChildNode = t,
    __reflect(t.prototype, "headFrame.ChildNode")
} (headFrame || (headFrame = {}));
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
headFrame; !
function(e) {
    var t = function(t) {
        function i() {
            var i = t.call(this) || this;
            return i.skinName = e.ParentNodeSkin,
            i.addEventListener(egret.Event.COMPLETE, i._updateView, i),
            i
        }
        return __extends(i, t),
        i.prototype.childrenCreated = function() {
            if (t.prototype.childrenCreated.call(this), this._customData) {
                var e = this.selected ? "down": "up";
                this.currentState = e,
                this.txt_name.text = this._customData.name,
                this.redPoint = new eui.Image("main_act_button_redPoint_png"),
                this.redPoint.right = 35,
                this.redPoint.y = 10,
                this.redPoint.width = this.redPoint.height = 20,
                this.addChild(this.redPoint),
                this.redDotEvent()
            }
            EventManager.addEventListener("RedPointEvent", this.redDotEvent, this)
        },
        i.prototype.redDotEvent = function() {
            var e = this,
            t = config.Profilephoto.getItems();
            t = t.filter(function(t) {
                return t.type == e._customData.type
            });
            for (var i = 0,
            n = t; i < n.length; i++) {
                var a = n[i];
                if (core.AvatarDataMgr.GetInstance().GetIsNewFlag(a.id)) return void(this.redPoint.visible = !0)
            }
            this.redPoint.visible = !1
        },
        i.prototype._updateView = function() {
            var e = this.selected ? "down": "up";
            this.currentState = e,
            this.txt_name.text = this._customData.name
        },
        i.prototype._onChangeSelected = function() {
            t.prototype._onChangeSelected.call(this);
            var e = this.selected ? "down": "up";
            this.currentState = e
        },
        i.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            EventManager.removeEventListener("RedPointEvent", this.redDotEvent, this)
        },
        i
    } (common.ui.treemenu.FirstComponent);
    e.ParentNode = t,
    __reflect(t.prototype, "headFrame.ParentNode")
} (headFrame || (headFrame = {})),
window.headFrame = window.headFrame || {};
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
generateEUI.paths["resource/eui_skins/ChildNodeSkin.exml"] = window.headFrame.ChildNodeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name"],
        this.currentState = "up",
        this.elementsContent = [this._Group1_i()],
        this._Image1_i(),
        this.states = [new eui.State("up", [new eui.SetProperty("txt_name", "textColor", 6388400), new eui.SetProperty("_Group1", "width", 165), new eui.SetProperty("_Group1", "height", 42)]), new eui.State("down", [new eui.AddItems("_Image1", "_Group1", 0, ""), new eui.SetProperty("txt_name", "textColor", 16777215), new eui.SetProperty("_Group1", "width", 165), new eui.SetProperty("_Group1", "height", 42)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.txt_name_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "head_frame_pop_change_kb_3_png",
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 20,
        e.text = "头像",
        e.textColor = 16777215,
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HeadframeAwardpopSkin.exml"] = window.HeadframeAwardpopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["bg", "titlebg", "txt_name", "flagHead", "flagHeadFrame", "imgLight", "frame", "icon"],
        this.height = 208,
        this.width = 965,
        this.elementsContent = [this.bg_i(), this.titlebg_i(), this.txt_name_i(), this.flagHead_i(), this.flagHeadFrame_i(), this.imgLight_i(), this._Image1_i(), this._Image2_i(), this.frame_i(), this.icon_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i.bg_i = function() {
        var e = new eui.Image;
        return this.bg = e,
        e.source = "headframe_awardpop_bg_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i.titlebg_i = function() {
        var e = new eui.Image;
        return this.titlebg = e,
        e.source = "headframe_awardpop_titlebg_png",
        e.x = 293,
        e.y = 121,
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "头像头像框名称",
        e.textColor = 16777215,
        e.x = 453,
        e.y = 173,
        e
    },
    i.flagHead_i = function() {
        var e = new eui.Image;
        return this.flagHead = e,
        e.height = 38,
        e.source = "headframe_awardpop_flagHead_png",
        e.visible = !0,
        e.width = 109,
        e.x = 344,
        e.y = 131,
        e
    },
    i.flagHeadFrame_i = function() {
        var e = new eui.Image;
        return this.flagHeadFrame = e,
        e.source = "headframe_awardpop_flagheadframe_png",
        e.visible = !0,
        e.x = 343,
        e.y = 132,
        e
    },
    i.imgLight_i = function() {
        var e = new eui.Image;
        return this.imgLight = e,
        e.source = "headframe_awardpop_imglight_png",
        e.visible = !0,
        e.x = 278,
        e.y = 1,
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "headframe_awardpop_iconbg_png",
        e.x = 440,
        e.y = 40,
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "headframe_awardpop_seer_png",
        e.x = 455,
        e.y = 54,
        e
    },
    i.frame_i = function() {
        var e = new eui.Image;
        return this.frame = e,
        e.source = "headframe_awardpop_vip_png",
        e.visible = !0,
        e.x = 433,
        e.y = 33,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.anchorOffsetX = 57,
        e.anchorOffsetY = 57,
        e.height = 114,
        e.width = 114,
        e.x = 476,
        e.y = 76,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HeadFrameItemSkin.exml"] = window.HeadFrameItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "img_useFlag", "img_lockFlag", "selectFlag", "imgNew"],
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.img_useFlag_i(), this.img_lockFlag_i(), this.selectFlag_i(), this.imgNew_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "head_frame_pop_imgitembg_png",
        e.visible = !0,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 72,
        e.visible = !0,
        e.width = 72,
        e.x = 11,
        e.y = 11,
        e
    },
    i.img_useFlag_i = function() {
        var e = new eui.Image;
        return this.img_useFlag = e,
        e.source = "head_frame_pop_txtisusing_png",
        e.visible = !0,
        e.x = 36.314,
        e.y = 10.932,
        e
    },
    i.img_lockFlag_i = function() {
        var e = new eui.Image;
        return this.img_lockFlag = e,
        e.source = "head_frame_pop_imglock_png",
        e.visible = !1,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    i.selectFlag_i = function() {
        var e = new eui.Image;
        return this.selectFlag = e,
        e.source = "head_frame_pop_imgselected_png",
        e.visible = !0,
        e.x = .314,
        e.y = -.068,
        e
    },
    i.imgNew_i = function() {
        var e = new eui.Image;
        return this.imgNew = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "head_frame_main_imgNew_png",
        e.visible = !0,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HeadFramePopSkin.exml"] = window.HeadFramePopSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["imgMaskMiddle", "img_btnClose", "list_item", "scroller_panel", "headFrameLeftTime", "FrameLimit", "icon", "headFrame", "txtName", "txtDes", "grp_right", "groupRight", "noItem", "imgBtn_go", "changeName", "imgBtn_change"],
        this.height = 431,
        this.width = 753,
        this.elementsContent = [this._Image1_i(), this.imgMaskMiddle_i(), this.img_btnClose_i(), this.scroller_panel_i(), this.FrameLimit_i(), this.groupRight_i(), this.noItem_i(), this.imgBtn_go_i(), this.imgBtn_change_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.bottom = 0,
        e.left = 0,
        e.right = 0,
        e.scale9Grid = new egret.Rectangle(259, 144, 14, 143),
        e.source = "head_frame_pop_imgbg_png",
        e.top = 0,
        e.visible = !0,
        e
    },
    i.imgMaskMiddle_i = function() {
        var e = new eui.Image;
        return this.imgMaskMiddle = e,
        e.source = "head_frame_pop_imgbgmask_png",
        e.visible = !0,
        e.width = 560,
        e.x = 178,
        e.y = 43,
        e
    },
    i.img_btnClose_i = function() {
        var e = new eui.Image;
        return this.img_btnClose = e,
        e.source = "head_frame_pop_btnclose_png",
        e.x = 711,
        e.y = 0,
        e
    },
    i.scroller_panel_i = function() {
        var e = new eui.Scroller;
        return this.scroller_panel = e,
        e.height = 380,
        e.scrollPolicyH = "off",
        e.visible = !0,
        e.width = 337,
        e.x = 178,
        e.y = 44,
        e.viewport = this.list_item_i(),
        e
    },
    i.list_item_i = function() {
        var e = new eui.List;
        return this.list_item = e,
        e.layout = this._TileLayout1_i(),
        e
    },
    i._TileLayout1_i = function() {
        var e = new eui.TileLayout;
        return e.horizontalGap = -13,
        e.requestedColumnCount = 4,
        e.verticalGap = -10,
        e
    },
    i.FrameLimit_i = function() {
        var e = new eui.Group;
        return this.FrameLimit = e,
        e.x = 569,
        e.y = 345,
        e.elementsContent = [this.headFrameLeftTime_i(), this._Label1_i()],
        e
    },
    i.headFrameLeftTime_i = function() {
        var e = new eui.Label;
        return this.headFrameLeftTime = e,
        e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "剩余时间：",
        e.textColor = 8757203,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Label1_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 16,
        e.text = "999天",
        e.textColor = 4187130,
        e.visible = !1,
        e.x = 85,
        e.y = 1,
        e
    },
    i.groupRight_i = function() {
        var e = new eui.Group;
        return this.groupRight = e,
        e.visible = !0,
        e.x = 527,
        e.y = 42,
        e.elementsContent = [this._Image2_i(), this._Image3_i(), this._Image4_i(), this.icon_i(), this.headFrame_i(), this.grp_right_i()],
        e
    },
    i._Image2_i = function() {
        var e = new eui.Image;
        return e.source = "head_frame_pop_imgbgmask_png",
        e.visible = !0,
        e.x = 0,
        e.y = 0,
        e
    },
    i._Image3_i = function() {
        var e = new eui.Image;
        return e.height = 95,
        e.scale9Grid = new egret.Rectangle(10, 10, 9, 9),
        e.source = "head_frame_pop_headframebg_png",
        e.visible = !1,
        e.width = 95,
        e.x = 59,
        e.y = 40,
        e
    },
    i._Image4_i = function() {
        var e = new eui.Image;
        return e.source = "head_frame_pop_seer_png",
        e.visible = !0,
        e.x = 76.23,
        e.y = 56.048,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 98,
        e.visible = !0,
        e.width = 96,
        e.x = 58,
        e.y = 38,
        e
    },
    i.headFrame_i = function() {
        var e = new eui.Image;
        return this.headFrame = e,
        e.height = 140,
        e.source = "",
        e.visible = !0,
        e.width = 140,
        e.x = 35,
        e.y = 20,
        e
    },
    i.grp_right_i = function() {
        var e = new eui.Group;
        return this.grp_right = e,
        e.width = 188,
        e.x = 11,
        e.y = 158,
        e.elementsContent = [this.txtName_i(), this.txtDes_i()],
        e
    },
    i.txtName_i = function() {
        var e = new eui.Label;
        return this.txtName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "套装名称名称",
        e.textAlign = "center",
        e.textColor = 12111615,
        e.width = 188,
        e.y = 0,
        e
    },
    i.txtDes_i = function() {
        var e = new eui.Label;
        return this.txtDes = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 16,
        e.text = "使用期限：永久使用",
        e.textAlign = "center",
        e.textColor = 8757203,
        e.width = 188,
        e.y = 31,
        e
    },
    i.noItem_i = function() {
        var e = new eui.Group;
        return this.noItem = e,
        e.x = 349,
        e.y = 136,
        e.elementsContent = [this._Image5_i(), this._Label2_i()],
        e
    },
    i._Image5_i = function() {
        var e = new eui.Image;
        return e.source = "head_frame_pop_texture_png",
        e.x = 27,
        e
    },
    i._Label2_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.size = 18,
        e.text = "当前分类下暂无头像框",
        e.textColor = 3492213,
        e.x = 15,
        e.y = 168,
        e
    },
    i.imgBtn_go_i = function() {
        var e = new eui.Group;
        return this.imgBtn_go = e,
        e.visible = !1,
        e.x = 589,
        e.y = 371,
        e.elementsContent = [this._Image6_i(), this._Label3_i()],
        e
    },
    i._Image6_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "head_frame_pop_imgbtn_png",
        e
    },
    i._Label3_i = function() {
        var e = new eui.Label;
        return e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "前往获得",
        e.verticalCenter = 0,
        e
    },
    i.imgBtn_change_i = function() {
        var e = new eui.Group;
        return this.imgBtn_change = e,
        e.visible = !0,
        e.x = 589,
        e.y = 371,
        e.elementsContent = [this._Image7_i(), this.changeName_i()],
        e
    },
    i._Image7_i = function() {
        var e = new eui.Image;
        return e.scaleX = 1,
        e.scaleY = 1,
        e.source = "head_frame_pop_imgbtn_png",
        e
    },
    i.changeName_i = function() {
        var e = new eui.Label;
        return this.changeName = e,
        e.fontFamily = "MFShangHei",
        e.horizontalCenter = 0,
        e.size = 18,
        e.text = "更 换",
        e.verticalCenter = 0,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/HeadItemSkin.exml"] = window.HeadItemSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["icon", "img_useFlag", "img_lockFlag", "selectFlag", "imgNew"],
        this.elementsContent = [this._Image1_i(), this.icon_i(), this.img_useFlag_i(), this.img_lockFlag_i(), this.selectFlag_i(), this.imgNew_i()]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Image1_i = function() {
        var e = new eui.Image;
        return e.source = "head_frame_pop_imgitembg_png",
        e.visible = !0,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    i.icon_i = function() {
        var e = new eui.Image;
        return this.icon = e,
        e.height = 72,
        e.visible = !0,
        e.width = 72,
        e.x = 11,
        e.y = 11,
        e
    },
    i.img_useFlag_i = function() {
        var e = new eui.Image;
        return this.img_useFlag = e,
        e.source = "head_frame_pop_txtisusing_png",
        e.visible = !0,
        e.x = 36.314,
        e.y = 10.932,
        e
    },
    i.img_lockFlag_i = function() {
        var e = new eui.Image;
        return this.img_lockFlag = e,
        e.height = 75,
        e.source = "head_frame_pop_imglock_png",
        e.visible = !0,
        e.width = 75,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    i.selectFlag_i = function() {
        var e = new eui.Image;
        return this.selectFlag = e,
        e.source = "head_frame_pop_imgselected_png",
        e.visible = !0,
        e.x = .314,
        e.y = -.068,
        e
    },
    i.imgNew_i = function() {
        var e = new eui.Image;
        return this.imgNew = e,
        e.scaleX = 1,
        e.scaleY = 1,
        e.source = "head_frame_main_imgNew_png",
        e.visible = !0,
        e.x = 10.314,
        e.y = 9.932,
        e
    },
    t
} (eui.Skin),
generateEUI.paths["resource/eui_skins/ParentNodeSkin.exml"] = window.headFrame.ParentNodeSkin = function(e) {
    function t() {
        e.call(this),
        this.skinParts = ["txt_name"],
        this.currentState = "up",
        this.elementsContent = [this._Group1_i()],
        this._Image1_i(),
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "head_frame_pop_xuanzhong_png"), new eui.SetProperty("txt_name", "textColor", 8036826), new eui.SetProperty("txt_name", "horizontalCenter", 0), new eui.SetProperty("txt_name", "verticalCenter", 0), new eui.SetProperty("_Group1", "width", 171), new eui.SetProperty("_Group1", "height", 63)]), new eui.State("down", [new eui.AddItems("_Image1", "_Group1", 0, ""), new eui.SetProperty("_Image1", "source", "head_frame_pop_xuanzhong_png"), new eui.SetProperty("txt_name", "textColor", 15857407), new eui.SetProperty("txt_name", "horizontalCenter", 0), new eui.SetProperty("txt_name", "verticalCenter", 0), new eui.SetProperty("_Group1", "width", 171), new eui.SetProperty("_Group1", "height", 63)])]
    }
    __extends(t, e);
    var i = t.prototype;
    return i._Group1_i = function() {
        var e = new eui.Group;
        return this._Group1 = e,
        e.x = 0,
        e.y = 0,
        e.elementsContent = [this.txt_name_i()],
        e
    },
    i._Image1_i = function() {
        var e = new eui.Image;
        return this._Image1 = e,
        e.source = "head_frame_pop_xuanzhong_png",
        e
    },
    i.txt_name_i = function() {
        var e = new eui.Label;
        return this.txt_name = e,
        e.fontFamily = "MFShangHei",
        e.size = 20,
        e.text = "头像",
        e.textColor = 16777215,
        e
    },
    t
} (eui.Skin);